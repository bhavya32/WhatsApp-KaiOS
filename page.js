"use strict";
(function (t) {
  function e(e) {
    for (
      var r, i, u = e[0], o = e[1], l = e[2], c = 0, h = [];
      c < u.length;
      c++
    )
      (i = u[c]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && h.push(a[i][0]),
        (a[i] = 0);
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
    for (d && d(e); h.length; ) h.shift()();
    return s.push.apply(s, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], r = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== a[o] && (r = !1);
      }
      r && (s.splice(e--, 1), (t = u((u.s = n[0]))));
    }
    return t;
  }
  var r = {},
    i = { 168: 0 },
    a = { 168: 0 },
    s = [];
  function u(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function (t) {
    var e = [];
    i[t]
      ? e.push(i[t])
      : 0 !== i[t] &&
        {
          12: 1,
          16: 1,
          20: 1,
          30: 1,
          31: 1,
          32: 1,
          35: 1,
          36: 1,
          50: 1,
          74: 1,
          165: 1,
          169: 1,
          170: 1,
          171: 1,
          173: 1,
          178: 1,
          179: 1,
          194: 1,
        }[t] &&
        e.push(
          (i[t] = new Promise(function (e, n) {
            for (
              var r = t + ".css",
                a = u.p + r,
                s = document.getElementsByTagName("link"),
                o = 0;
              o < s.length;
              o++
            ) {
              var l =
                (d = s[o]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (l === r || l === a)) return e();
            }
            var c = document.getElementsByTagName("style");
            for (o = 0; o < c.length; o++) {
              var d;
              if ((l = (d = c[o]).getAttribute("data-href")) === r || l === a)
                return e();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = e),
              (h.onerror = function (e) {
                var r = (e && e.target && e.target.src) || a,
                  s = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + r + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = r),
                  delete i[t],
                  h.parentNode.removeChild(h),
                  n(s);
              }),
              (h.href = a),
              document.getElementsByTagName("head")[0].appendChild(h);
          }).then(function () {
            i[t] = 0;
          }))
        );
    var n = a[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var r = new Promise(function (e, r) {
          n = a[t] = [e, r];
        });
        e.push((n[2] = r));
        var s,
          o = document.createElement("script");
        (o.charset = "utf-8"),
          (o.timeout = 120),
          u.nc && o.setAttribute("nonce", u.nc),
          (o.src = (function (t) {
            return (
              u.p +
              "" +
              ({
                0: "handlers/msgReceipt~handlers/retryRequest~jobs/resendWrittenRevokeMsg~jobs/retryMsg~jobs/reuploadMed~2398b594",
                1: "handlers/msgReceipt~jobs/resendWrittenRevokeMsg~jobs/retryMsg~jobs/reuploadMedia~jobs/revokeMsg~jobs~5bb0ce38",
                2: "handlers/aboutNotification~handlers/businessNotification~handlers/contactsNotification~handlers/hand~78c34780",
                3: "jobs/setStatusSettings",
                4: "backendRoot~backend_content~identity~migrations",
                5: "handlers/mediaRetry~handlers/msgReceipt~jobs/requestReupload~jobs/reuploadMedia",
                6: "jobs/revokeMsg~jobs/sendWrittenMsg~jobs/senderBackfill~jobs/setOneToOneEphemeralSetting",
                8: "backendRoot~backend_content~migrations",
                9: "backendRoot~backend_content~page_stage2",
                11: "handlers/msgReceipt~handlers/retryRequest~jobs/reuploadMedia",
                12: "identity~pages/GroupInviteQR~pages/MyQRCode",
                13: "imageConverters",
                14: "jobs/joinSubGroupRequest~queryCommunitiesSubGroups~querySubGroupInfo",
                15: "jobs/revokeMsg~jobs/sendWrittenMsg~jobs/senderBackfill",
                16: "page_stage2~player~youtube",
                18: "backend_content",
                20: "deleteAccount~registration",
                21: "handlers/groupNotification~querySubGroupInfo",
                22: "handlers/handleAccountSyncNotification~handlers/msgReceipt",
                23: "handlers/infoBulletin",
                24: "jobs/reportGroupSpam~jobs/reportUserSpam",
                25: "jobs/revokeGroupInvitations",
                26: "jobs/revokeQRCode~queryQRCode",
                27: "jobs/sendMediaMsg~jobs/sendMediaMsgs",
                28: "jobs/sendProfilePicture",
                29: "jobs/uploadMedia",
                30: "page_stage2~pages/TempBanned",
                31: "page_stage2~registration",
                32: "pages/UserNoticeModal",
                33: "queryCommunitiesSubGroups~querySubGroupInfo",
                35: "MigratingAppRoot",
                36: "appErrorScreen",
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
                50: "deleteAccount",
                51: "frontendLoadMsgRange",
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
                74: "identity",
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
                165: "licenses",
                166: "migrations",
                169: "page_stage2",
                170: "pages/GroupInviteQR",
                171: "pages/MyQRCode",
                172: "pages/TempBanned",
                173: "player",
                174: "queryBusinessProfile",
                175: "queryCommunitiesSubGroups",
                176: "queryQRCode",
                177: "querySubGroupInfo",
                178: "registration",
                179: "requestAccountInfo",
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
                193: "webp/frontend",
                194: "youtube",
              }[t] || t) +
              ".js"
            );
          })(t));
        var l = new Error();
        s = function (e) {
          (o.onerror = o.onload = null), clearTimeout(c);
          var n = a[t];
          if (0 !== n) {
            if (n) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src;
              (l.message =
                "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = i),
                n[1](l);
            }
            a[t] = void 0;
          }
        };
        var c = setTimeout(function () {
          s({ type: "timeout", target: o });
        }, 12e4);
        (o.onerror = o.onload = s), document.head.appendChild(o);
      }
    return Promise.all(e);
  }),
    (u.m = t),
    (u.c = r),
    (u.d = function (t, e, n) {
      u.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (u.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (u.t = function (t, e) {
      if ((1 & e && (t = u(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          u.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return u.d(e, "a", e), e;
    }),
    (u.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (u.p = "/"),
    (u.oe = function (t) {
      throw (console.error(t), t);
    });
  var o = (self.webpackJsonp = self.webpackJsonp || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var d = l;
  s.push([460, 10, 17, 19]), n();
})(
  Array(18).concat([
    function (t, e, n) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return h;
        });
      var r = n(1),
        i = (n(13), n(21)),
        a = n(77),
        s = n(37),
        u = n.n(s),
        o = n(211);
      function l(t) {
        var e = t.l10n,
          n = (0, i.j)(e);
        if (t.spacerSize) {
          var a = v(t.spacerSize);
          "string" == typeof n ? (n = [n, a]) : n.push(a);
        }
        var s = t.className;
        return s ? (0, r.f)(1, "span", s, n, 0) : n;
      }
      l.displayName = "Text";
      var c = l;
      function d(t) {
        var e = a.d(t.unix);
        switch (e) {
          case "TODAY":
            return t.withoutTime
              ? (0, r.b)(2, c, { l10n: 1023 })
              : (0, r.b)(2, c, { l10n: [a.i(t.unix, "time"), 286] });
          case "YESTERDAY":
            return t.withoutTime
              ? (0, r.b)(2, c, { l10n: 1111 })
              : (0, r.b)(2, c, { l10n: [a.i(t.unix, "time"), 304] });
          case "LONG_AGO":
            return a.i(t.unix, t.withoutTime ? "date" : "dateAndTime");
          default:
            return (0, u.a)(e);
        }
      }
      function h(t) {
        return t === o.a ? null : v(t);
      }
      function v(t) {
        var e = t === o.b ? "S" : t === o.c ? "T" : "U";
        return (0, r.f)(1, "span", e);
      }
      d.displayName = "DateTimeText";
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return p;
        }),
        n.d(e, "e", function () {
          return _;
        }),
        n.d(e, "f", function () {
          return m;
        }),
        n.d(e, "g", function () {
          return g;
        }),
        n.d(e, "i", function () {
          return b;
        }),
        n.d(e, "h", function () {
          return S;
        }),
        n.d(e, "k", function () {
          return E;
        }),
        n.d(e, "j", function () {
          return O;
        }),
        n.d(e, "c", function () {
          return w;
        }),
        n.d(e, "l", function () {
          return I;
        }),
        n.d(e, "d", function () {
          return k;
        });
      var r = n(1),
        i = (n(13), n(260)),
        a = (n(161), n(23)),
        s = n.n(a),
        u = n(245),
        o = n(18),
        l = n(125),
        c = n(61),
        d = class extends c.a {
          constructor(t, e) {
            var n, i, a;
            super(t, e),
              (this.FV = () => {
                this.props.closeOverlay();
              }),
              (this.FW = () => {
                this.props.onSave(this.state.items), this.props.closeOverlay();
              }),
              (this.FY = (t) => {
                if (t.scrolling) {
                  var e = t.item;
                  return new Promise((t) => {
                    this.setState({ currentIdx: e }, t);
                  });
                }
                return Promise.resolve();
              }),
              (this.FZ = (t, e) => {
                var n = this.state.items[t],
                  i = (0, s.a)("AK", e ? "AL" : null);
                return (0, r.f)(
                  1,
                  "div",
                  i,
                  (0, r.b)(2, l.d, {
                    title: n.label,
                    checked: n.checked,
                    selected: e,
                  }),
                  2
                );
              }),
              (this.FT = this.props.defaultItems.map((t, e) => e)),
              (this.FU =
                ((n = this.props.defaultItems),
                (i = this.props.selectedKey),
                -1 !== (a = n.findIndex((t) => t.key === i))
                  ? { item: a, scrollFromTop: "start" }
                  : null)),
              (this.state = {
                currentIdx: null,
                items: this.props.defaultItems,
              });
          }
          addSoftKeys(t, e) {
            var n = this.state.currentIdx;
            if (
              (t.setBack(this.FV),
              t.setLeftLabel(864, this.FV),
              t.setRightLabel(this.props.save || 928, this.FW),
              null != n)
            ) {
              var r = this.state.items,
                i = this.props.centerKeys;
              r[n].checked
                ? t.setCenterLabel((null == i ? void 0 : i.off) || 874, () => {
                    this.FX(n, !1);
                  })
                : t.setCenterLabel((null == i ? void 0 : i.on) || 878, () => {
                    this.FX(n, !0);
                  });
            }
          }
          FX(t, e) {
            this.setState((n) => ({
              items: n.items.map((n, r) =>
                r === t ? { key: n.key, label: n.label, checked: e } : n
              ),
            }));
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              "AG W",
              [
                (0, r.f)(
                  1,
                  "div",
                  "AH X FV FS",
                  (0, r.b)(2, o.b, { l10n: this.props.title }),
                  2
                ),
                (0, r.f)(
                  1,
                  "div",
                  "AI AP Y",
                  (0, r.b)(2, u.a, {
                    items: this.FT,
                    keyOf: h,
                    start: this.FU,
                    renderItem: this.FZ,
                    onStatus: this.FY,
                    className: "AJ AQ",
                  }),
                  2
                ),
              ],
              4
            );
          }
        };
      function h(t) {
        return String(t);
      }
      var v = n(183);
      function f() {
        T(null);
      }
      function p(t) {
        return T(t);
      }
      function _(t) {
        return g({
          title: t.title,
          text: t.text,
          center: 902,
          onSoftCenter: t.onClose || "CLOSE",
          onBack: t.onClose || "CLOSE",
          onEndCall: t.onEndCall,
        });
      }
      function m(t) {
        return g({
          title: t.title,
          text: t.text,
          center: t.confirm || 902,
          onSoftCenter: t.onConfirm,
          left: t.cancel || 864,
          onSoftLeft: t.onCancel || "CLOSE",
          onBack: t.onCancel || "CLOSE",
          onEndCall: t.onEndCall,
        });
      }
      function g(t) {
        return T(
          (0, r.b)(2, i.a, {
            title: t.title,
            onBack: t.onBack || "CLOSE",
            onEndCall: t.onEndCall,
            left: t.left,
            leftIcon: t.leftIcon,
            onSoftLeft: t.onSoftLeft,
            center: t.center,
            centerIcon: t.centerIcon,
            onSoftCenter: t.onSoftCenter,
            right: t.right,
            rightIcon: t.rightIcon,
            onSoftRight: t.onSoftRight,
            full: t.full,
            text: t.text,
            close: t.close || f,
          })
        );
      }
      function b(t) {
        return T(
          (0, r.b)(2, i.a, {
            title: t.title,
            onBack: t.onBack || "CLOSE",
            onEndCall: t.onEndCall,
            left: t.left,
            leftIcon: t.leftIcon,
            onSoftLeft: t.onSoftLeft,
            center: t.center,
            centerIcon: t.centerIcon,
            onSoftCenter: t.onSoftCenter,
            right: t.right,
            rightIcon: t.rightIcon,
            onSoftRight: t.onSoftRight,
            full: t.full,
            close: t.close || f,
            children: (0, r.b)(2, v.a, { type: "dialog" }),
          })
        );
      }
      function S(t, e) {
        return T(
          (0, r.b)(2, i.a, {
            title: t.title,
            onBack: t.onBack || "CLOSE",
            onEndCall: t.onEndCall,
            left: t.left,
            leftIcon: t.leftIcon,
            onSoftLeft: t.onSoftLeft,
            center: t.center,
            centerIcon: t.centerIcon,
            onSoftCenter: t.onSoftCenter,
            right: t.right,
            rightIcon: t.rightIcon,
            onSoftRight: t.onSoftRight,
            close: t.close || f,
            children: e,
          })
        );
      }
      function E(t) {
        return T(
          (0, r.b)(2, d, {
            title: t.title,
            defaultItems: t.defaultItems,
            centerKeys: t.centerKeys,
            selectedKey: t.selectedKey,
            save: t.save,
            onSave: t.onSave,
            closeOverlay: f,
          })
        );
      }
      function O(t) {
        return T(t.buildMenu(f));
      }
      var A,
        y = 0;
      function C(t, e) {
        if (
          (__LOG__(
            3
          )`Overlay.update should have been overriden before being called. id ${y}`,
          null != t)
        )
          return (A = t), ++y;
        A = null;
      }
      var L = C;
      function T(t) {
        return L(t);
      }
      function w(t) {
        (L = t), A && (L(A, y), (A = null));
      }
      function I() {
        (L = C), (A = null);
      }
      function k() {
        return ++y;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "f", function () {
          return d;
        }),
        n.d(e, "g", function () {
          return h;
        }),
        n.d(e, "e", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return f;
        }),
        n.d(e, "i", function () {
          return p;
        }),
        n.d(e, "j", function () {
          return _;
        }),
        n.d(e, "d", function () {
          return m;
        }),
        n.d(e, "k", function () {
          return g;
        }),
        n.d(e, "c", function () {
          return S;
        }),
        n.d(e, "a", function () {
          return A;
        });
      var r = n(1),
        i = (n(13), n(11)),
        a = n(44),
        s = n(73),
        u = n(176),
        o = n(47),
        l = n(18);
      function c(t) {
        var e = t.contact,
          n = (0, a.a)(e);
        return n ? (0, o.b)(n) : (0, r.b)(2, u.a, { jid: e.jid });
      }
      function d(t, e) {
        var n = (0, a.c)(e, t);
        return (0, r.b)(2, c, { contact: n });
      }
      function h(t, e) {
        var n = t[e],
          i = n && (0, a.b)(n);
        return i ? (0, o.b)(i) : (0, r.b)(2, u.a, { jid: e });
      }
      function v(t) {
        var e = (0, s.c)(t);
        return e ? (0, o.b)(e) : (0, r.b)(2, u.a, { jid: t.jid });
      }
      function f(t) {
        var e = [];
        return (
          (0, i.y)(t).forEach((t) => {
            t && (0, a.i)(t) && !(0, a.j)(t) && e.push(t);
          }),
          e.sort(g),
          e
        );
      }
      function p(t, e, n) {
        var r = [];
        return (
          (0, i.y)(t).forEach((t) => {
            t && (!n || n(t)) && (0, a.i)(t) && (0, a.j)(t) && r.push(t);
          }),
          r.sort(e),
          r
        );
      }
      function _(t, e) {
        return p(t, g, e);
      }
      function m(t) {
        var e = new Set(t.admins);
        return (t, n) => {
          var r = e.has(t.jid);
          return r === e.has(n.jid) ? g(t, n) : r ? -1 : 1;
        };
      }
      function g(t, e) {
        var n = t.fullName || t.shortName,
          r = e.fullName || e.shortName;
        return n && r
          ? n.localeCompare(r)
          : n
          ? -1
          : r
          ? 1
          : t.jid < e.jid
          ? -1
          : t.jid === e.jid
          ? 0
          : 1;
      }
      var b = {};
      function S(t) {
        var e,
          n,
          r,
          i,
          a = t.toString();
        return (
          null == b[a] &&
            (b[a] =
              ((e = (function (t) {
                for (var e = 0, n = 0; n < t.length; ++n)
                  e = ((e << 5) - e + t.charCodeAt(n)) & 65535;
                return e;
              })(a)),
              (n = Math.abs(e) / 65536),
              (i = 0.8 - (r = 1.8 * 0.4)),
              "#" +
                (
                  (Math.floor(255 * E(i, r, n + 1 / 3)) << 16) |
                  (Math.floor(255 * E(i, r, n)) << 8) |
                  Math.floor(255 * E(i, r, n - 1 / 3))
                )
                  .toString(16)
                  .padStart(6, "0"))),
          b[a]
        );
      }
      function E(t, e, n) {
        var r = n;
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? t + 6 * (e - t) * r
            : r < 0.5
            ? e
            : r < 2 / 3
            ? t + (e - t) * (2 / 3 - r) * 6
            : t
        );
      }
      var O = { short: a.b, long: a.a, status: a.d };
      function A(t) {
        var e = t.className;
        if ("@me" === t.jid || (t.contact && "@me" === t.contact.jid))
          return (0, r.f)(1, "span", e, (0, r.b)(2, l.b, { l10n: 181 }), 2, {
            dir: "auto",
          });
        var n = t.jid ? t.contacts[t.jid] : t.contact;
        if (null == n) {
          var i = t.jid || "";
          return (0, r.b)(2, u.a, { jid: i, className: e });
        }
        var a = O[t.prefer || "long"](n);
        return a
          ? (0, r.f)(1, "span", e, a, 0, { dir: "auto" })
          : (0, r.b)(2, u.a, { jid: n.jid, className: e });
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "d", function () {
          return b;
        }),
        n.d(e, "c", function () {
          return E;
        }),
        n.d(e, "b", function () {
          return O;
        }),
        n.d(e, "e", function () {
          return y;
        }),
        n.d(e, "f", function () {
          return C;
        });
      var r = n(1),
        i = n(13),
        a = n(102),
        s = n(37),
        u = n.n(s),
        o = n(176),
        l = n(155),
        c = n(14),
        d = n(7),
        h = n(59),
        v = n(21),
        f = (0, r.f)(1, "span", "BT", "•", 16),
        p = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.jid !== t.jid ||
                n.contacts !== t.contacts ||
                n.user !== t.user)
            );
          }
          render() {
            var t = this.props,
              e = t.jid,
              n = t.contacts,
              i = t.user,
              s = (0, a.d)(e, n, i);
            return s.name ? O(s.name) : (0, r.b)(2, o.a, { jid: e });
          }
        },
        _ = (0, h.c)(p, (t, e, n) => ({
          jid: n.jid,
          user: t.user,
          contacts: t.contacts,
        }));
      function m(t, e, n) {
        var a = { fontFamily: "Emoji" + e };
        return (0, r.f)(1, "span", "BS", t, 0, { style: i.h(a) }, n);
      }
      function g(t, e, n, i, a) {
        switch (e.type) {
          case "bold":
            return (0, r.f)(
              1,
              "strong",
              null,
              i(t, e.children, g, a),
              0,
              null,
              n
            );
          case "italic":
            return (0, r.f)(1, "em", null, i(t, e.children, g, a), 0, null, n);
          case "strikethrough":
            return (0, r.f)(1, "del", null, i(t, e.children, g, a), 0, null, n);
          case "code":
            return (0, r.f)(
              1,
              "code",
              null,
              i(t, e.children, g, a),
              0,
              null,
              n
            );
          case "mention":
            return (function (t, e, n) {
              var i = `${c.Z}${(0, d.u)(t)}`;
              return (0, r.f)(
                1,
                "span",
                null,
                [
                  (0, r.f)(1, "span", "mentionAt", "@", 16),
                  (0, r.f)(1, "a", "BU", (0, r.b)(2, _, { jid: t }), 2, {
                    href: i,
                    "data-content-type": "mention",
                    "data-id": "mention" + e,
                  }),
                ],
                4,
                null,
                e
              );
            })(e.jid, n);
          case "emoji":
            return m(e.normalizedRemapped, e.chunkId, n);
          case "link":
            return (0, r.f)(
              1,
              "a",
              "BU",
              i(t, e.children, g, a),
              0,
              {
                href: e.href,
                "data-id": e.id,
                "data-matched-text": e.matchedText,
              },
              n
            );
          case "phoneNumber":
            return (null == a ? void 0 : a.skipPhoneNumbers)
              ? i(t, e.children, g, a)
              : (0, r.f)(
                  1,
                  "a",
                  "BU",
                  i(t, e.children, g, a),
                  0,
                  {
                    "data-id": e.id,
                    "data-content-type": "phoneNumber",
                    "data-matched-text": e.matchedText,
                    "data-matched-phone-number": e.phoneNumber,
                  },
                  n
                );
          default:
            return (0, u.a)(e.type);
        }
      }
      function b(t, e, n) {
        return e && e.styles ? (0, a.a)(t, e.styles, g, n) : t;
      }
      function S(t) {
        var e = [],
          n = null,
          r = l.a;
        for (r.lastIndex = 0; null != (n = r.exec(t)) && n; ) {
          var i = (0, l.e)(t, n.index);
          if (null != i) {
            var a = i.normalized,
              s = i.normalizedRemapped,
              u = i.originalLength,
              o = i.chunkId;
            (r.lastIndex = n.index + u),
              e.push({
                normalized: a,
                normalizedRemapped: s,
                chunkId: o,
                originalLength: u,
                start: n.index,
              });
          }
        }
        return e;
      }
      function E(t) {
        var e = S(t);
        return e.length > 1
          ? (0, r.f)(1, "span", null, "□", 0)
          : e.length < 1
          ? t
          : A(t, e);
      }
      function O(t) {
        var e = S(t);
        return e.length < 1 ? t : A(t, e);
      }
      function A(t, e) {
        for (var n = [], r = 0, i = 0; i < e.length; ++i) {
          var a = e[i],
            s = a.normalizedRemapped,
            u = a.originalLength,
            o = a.chunkId,
            l = a.start;
          r !== l && n.push(t.substring(r, l)),
            n.push(m(s, o, s + i.toString())),
            (r = l + u);
        }
        return r < t.length && n.push(t.substring(r)), n;
      }
      function y(t) {
        for (var e = [], n = [], r = S(t), i = 0, a = 0; a < r.length; ++a) {
          var s = r[a],
            u = s.originalLength,
            o = s.chunkId,
            l = s.start,
            c = s.normalizedRemapped;
          n.push(t.substring(i, l)),
            n.push(c),
            (i = l + u),
            e.push("Emoji" + o);
        }
        n.push(t.substring(i));
        var d = [...e, "'Open Sans'", "sans-serif"].join(", ");
        return { normalizedText: n.join(""), fontFamily: d };
      }
      function C(t) {
        return (0, v.k)([t, 216]);
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      function r(t) {
        return 0 === t.screens.length && !t.msglist;
      }
      function i(t) {
        return "main" === t.mode ? t : null;
      }
      function a(t, e, n) {
        var r, i;
        return null == (r = t.jobs) || null == (i = r[e]) ? void 0 : i[n];
      }
      function s(t, e) {
        var n;
        return null == (n = t.jobs) ? void 0 : n[e];
      }
      function u(t) {
        return !!t && "finished" !== t.step.status && "error" !== t.step.status;
      }
      function o(t) {
        if (t && "finished" === t.step.status) return t.step.result;
      }
      function l(t) {
        return null == t ? void 0 : t.jobIn;
      }
      function c(t) {
        return t.chatlist.orderedChatIds.reduce(
          (e, n) => e + (t.chatlist.chats[n].chatBackgroundSettings ? 1 : 0),
          0
        );
      }
      function d(t, e) {
        var n = t.chatlist.chats[e];
        if ("ONE_TO_ONE" !== n.type) return n;
      }
      n.d(e, "e", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "h", function () {
          return a;
        }),
        n.d(e, "i", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "g", function () {
          return d;
        });
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "j", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "i", function () {
          return _;
        }),
        n.d(e, "d", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return g;
        }),
        n.d(e, "g", function () {
          return b;
        });
      var r = n(1),
        i = n(13),
        a = n(11),
        s = i.c({}),
        u = i.c({}),
        o = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return n !== t && n.of !== t.of;
          }
          render() {
            return this.props.of;
          }
        },
        l = class extends i.a {
          constructor(t) {
            super(t), (this.unsubscribe = null);
            var e = t.backend;
            this.state = { backend: e, store: e.getStoreState() };
          }
          componentDidMount() {
            this.unsubscribe = this.props.store.subscribe(() => {
              this.setState({ store: this.props.backend.getStoreState() });
            });
          }
          componentWillUnmount() {
            this.unsubscribe && this.unsubscribe();
          }
          render() {
            return (0, r.b)(2, s.Provider, {
              value: this.state,
              children: (0, r.b)(2, o, { of: this.props.children }),
            });
          }
        };
      function c(t) {
        return (0, r.b)(2, u.Provider, {
          value: t.backend,
          children: (0, r.i)((0, r.b)(2, l, Object.assign({}, t))),
        });
      }
      function d(t, e) {
        return class extends i.a {
          constructor() {
            var n;
            return (
              (n = super(...arguments)),
              (this.BL = (n) => {
                var i = e(n.store, n.backend, this.props);
                return i
                  ? (0, r.i)((0, r.b)(2, t, Object.assign({}, i)))
                  : null;
              }),
              n
            );
          }
          displayName(t) {
            return `ReduxComponent(${t})`;
          }
          render() {
            return (0, r.b)(2, s.Consumer, { children: this.BL });
          }
        };
      }
      function h(t, e) {
        return class extends i.a {
          constructor() {
            var n;
            return (
              (n = super(...arguments)),
              (this.BL = (n) =>
                (0, r.i)((0, r.b)(2, t, Object.assign({}, e(n, this.props))))),
              n
            );
          }
          displayName(t) {
            return `ApiComponent(${t})`;
          }
          render() {
            return (0, r.b)(2, u.Consumer, { children: this.BL });
          }
        };
      }
      function v(t) {
        return h(t, (t, e) => Object.assign({}, e, { backend: t }));
      }
      function f(t, e) {
        return d(t, (t, n, r) => ("reg" === t.mode ? e(t, n, r) : null));
      }
      function p(t, e) {
        return d(t, (t, n, r) => ("main" === t.mode ? e(t, n, r) : null));
      }
      function _(t, e) {
        return d(t, (t, n, r) => ("tempBanned" === t.mode ? e(t, n, r) : null));
      }
      function m(t, e) {
        return d(t, (t, n, r) => ("error" === t.mode ? e(t, n, r) : null));
      }
      function g(t, e, n) {
        return class extends i.a {
          constructor() {
            var i;
            return (
              (i = super(...arguments)),
              (this.BM = null),
              (this.BN = null),
              (this.BL = (i) => {
                var s = i.store,
                  u = "main" === s.mode ? e(s, this.props) : null,
                  o = this.BM;
                if (u) {
                  if (!o || !(0, a.s)(u, o)) {
                    var l = n(u, i.backend);
                    (this.BN = l
                      ? (0, r.i)((0, r.b)(2, t, Object.assign({}, l)))
                      : null),
                      (this.BM = u);
                  }
                } else (this.BM = null), (this.BN = null);
                return this.BN;
              }),
              i
            );
          }
          displayName(t) {
            return `MemoizedReduxComponent(${t})`;
          }
          render() {
            return (0, r.b)(2, s.Consumer, { children: this.BL });
          }
        };
      }
      function b(t, e, n) {
        var r = g(t, e, n);
        return class extends r {
          shouldComponentUpdate() {
            return !1;
          }
        };
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return m.b;
      }),
        n.d(e, "a", function () {
          return m.a;
        }),
        n.d(e, "c", function () {
          return m.c;
        }),
        n.d(e, "d", function () {
          return f.b;
        }),
        n.d(e, "e", function () {
          return I;
        }),
        n.d(e, "f", function () {
          return G;
        });
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(59),
        o = n(18),
        l = n(153),
        c = n(63),
        d = n(78),
        h = n(166),
        v = n(248),
        f = n(293),
        p = n(14),
        _ = n(162),
        m = n(292);
      function g() {}
      function b() {}
      var S = ["standard"],
        E = null,
        O = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.state = { smallFont: !1, softKeys: null }),
              (this.barDiv = null),
              (this.setBarDiv = (t) => {
                this.barDiv = t;
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props,
              r = this.state;
            return (
              (n !== t && n.hidden !== t.hidden) ||
              (r !== e &&
                (r.smallFont !== e.smallFont || r.softKeys !== e.softKeys))
            );
          }
          componentDidUpdate() {
            this.Bf();
          }
          Bf() {
            if (!this.state.smallFont) {
              var t = this.barDiv;
              if (null != t)
                try {
                  for (
                    var e = t.getBoundingClientRect(),
                      n = t.children,
                      r = 0,
                      i = 0;
                    i < n.length;
                    ++i
                  ) {
                    var a = n[i].children[0];
                    null != a && (r += a.getBoundingClientRect().width);
                  }
                  e.width < r + 15 && this.setState({ smallFont: !0 });
                } catch (t) {
                  __LOG__(4)`Failed to compute small font softkeys ${t}`;
                }
            }
          }
          render() {
            var t = this.state.softKeys;
            if (!t) return (0, r.f)(1, "div", "g");
            var e = this.props.hidden || t.hidden,
              n = this.state.smallFont,
              i = e || n ? (0, s.a)("g", n && "h", e && "s") : "g",
              a = null;
            if (null != t.full)
              a = (0, r.f)(
                1,
                "div",
                "o",
                (0, r.b)(2, o.b, { l10n: t.full }),
                2
              );
            else {
              var u = D(
                  "k i",
                  t.center,
                  t.centerIcon,
                  t.centerRawString,
                  t.onSoftCenter
                ),
                l = D("j i", t.left, t.leftIcon, t.leftRawString, t.onSoftLeft),
                c = D(
                  "l i",
                  t.right,
                  t.rightIcon,
                  t.rightRawString,
                  t.onSoftRight
                );
              a = (0, r.c)([l, u, c], 0);
            }
            return (0, r.f)(1, "div", i, a, 0, null, null, this.setBarDiv);
          }
        };
      function A() {
        (0, _.f)("transparent");
      }
      function y() {
        (0, _.f)(p.c);
      }
      var C = 0,
        L = [];
      function T() {
        return L.length > 0 && L[L.length - 1].fullscreen;
      }
      var w = class extends i.a {
        constructor() {
          var t;
          return (
            (t = super(...arguments)),
            (this.Bg = ++C),
            (this.holdTimer = new d.a(() => this.Bh())),
            (this.isHolding = !1),
            (this.bar = null),
            (this.Bk = (t) => {
              this.bar = t;
            }),
            (this.Bl = (t) => {
              (0, h.e)();
              var e = this.Bi("handleKeyDown"),
                n = (0, c.m)(t);
              if (n !== c.i)
                if (E) {
                  switch (n) {
                    case c.c:
                    case c.d:
                    case c.b:
                    case c.a:
                      __LOG__(2)`SoftKeys ignoring arrow on hold`;
                      break;
                    default:
                      G();
                  }
                  t.preventDefault();
                } else
                  e &&
                    (n === c.j && e.onHoldCenter
                      ? ((E = this),
                        t.preventDefault(),
                        this.holdTimer.onOrBefore(300))
                      : k(e, this.props.backend, n, t));
              else
                (t.target instanceof Element &&
                  ("INPUT" === t.target.tagName ||
                    "TEXTAREA" === t.target.tagName)) ||
                  t.preventDefault();
            }),
            t
          );
        }
        componentDidMount() {
          var t, e, n;
          this.props.overlay ||
            ((e = {
              id: this.Bg,
              fullscreen: null != (t = this.props.fullscreen) && t,
            }),
            (n = T()),
            e.fullscreen && !n ? A() : n && !e.fullscreen && y(),
            L.push(e));
        }
        componentWillUnmount() {
          this.holdTimer.cancel(),
            this === E && (E = null),
            this.props.overlay ||
              (function (t) {
                for (var e = L.length - 1, n = null, r = 0, i = e; i >= 0; --i)
                  if (L[i].id === t) {
                    (n = L[i]), (r = i);
                    break;
                  }
                if (null == n)
                  return (
                    __LOG__(2)`Screen stack: id: ${t}, stack: ${L.map(
                      (t) => t.id
                    )}`,
                    __LOG__(
                      4
                    )`Trying to remove a screen from the stack but could not find it. This should never happen.`,
                    void SEND_LOGS("softkeys-stack-empty", 0.01)
                  );
                if (r === e) {
                  L.pop();
                  var a = T();
                  n.fullscreen && !a ? y() : a && !n.fullscreen && A();
                } else L.splice(r, 1);
              })(this.Bg);
        }
        Bh() {
          var t = this.Bi("handleHoldCenter"),
            e = null == t ? void 0 : t.onHoldCenter;
          e
            ? (e(this.props.backend), (this.isHolding = !0))
            : this === E && (E = null);
        }
        Bj() {
          var t = this.Bi("handleReleaseHoldCenter");
          if (this.isHolding) {
            this.isHolding = !1;
            var e = null == t ? void 0 : t.onReleaseHoldCenter;
            e && e(this.props.backend);
          } else
            this.holdTimer.cancel(), t && k(t, this.props.backend, c.j, null);
        }
        Bi(t) {
          var e,
            n = null == (e = this.bar) ? void 0 : e.state.softKeys;
          return (
            n ||
              (__LOG__(4)`SoftKeys ${t} while mid-render`,
              SEND_LOGS("softkeys-mid-render-" + t)),
            n
          );
        }
        render() {
          var t = this.props;
          return (0, r.b)(2, l.b.div, {
            className: (0, s.a)(
              "d",
              t.fullscreen && "p",
              t.overlay && "t",
              t.noHeader && "u",
              !1
            ),
            tabIndex: "1",
            hasFocusPriority: t.overlay || !!t.hasFocusPriority,
            onKeyDown: this.Bl,
            onKeyUp: N,
            children: [
              (0, r.f)(1, "div", "f", t.children, 0),
              (0, r.b)(2, O, { hidden: t.hidden }, null, this.Bk),
            ],
          });
        }
      };
      function I(t, e) {
        var n,
          a = class extends i.a {
            constructor() {
              var t;
              return (
                (t = super(...arguments)),
                (this.Bm = 0),
                (this.Bn = 0),
                (this.Bo = i.e()),
                (this.Bp = i.e()),
                (this.updateSoftKeysOnBar = (t, n) => {
                  var r,
                    i = null == (r = this.Bo.current) ? void 0 : r.bar;
                  if (!i)
                    return (
                      __LOG__(4)`SoftKeys updateSoftKeysOnBar while no ref!`,
                      void SEND_LOGS("no-softkeys-ref-2")
                    );
                  for (
                    var a = this.props.backend,
                      s = new f.a(),
                      u = (null == e ? void 0 : e.order) || S,
                      o = 0;
                    o < u.length;
                    o++
                  ) {
                    var l = u[o];
                    if ("standard" === l)
                      for (var c = 0; c < t.length; c++) t[c].addSoftKeys(s, a);
                    else {
                      var d = n.get(l);
                      null != d && d.addSoftKeys(s, a);
                    }
                  }
                  var h = ++this.Bm,
                    v = s.getAttachment();
                  v &&
                    v.setOnDirty(() => {
                      if (h === this.Bm) {
                        var t = this.Bp.current;
                        t && t.markDirty();
                      }
                    }),
                    i.setState({ softKeys: s.makeSoftKeys() });
                }),
                t
              );
            }
            render() {
              var n = this.props,
                i = n.props,
                a = n.backend;
              return (0, r.b)(
                2,
                v.c,
                {
                  onSelectionUpdate: this.updateSoftKeysOnBar,
                  children: (0, r.b)(
                    2,
                    w,
                    {
                      backend: a,
                      fullscreen: (null == e ? void 0 : e.fullscreen) || !1,
                      hidden: (null == e ? void 0 : e.hidden) || !1,
                      overlay: (null == e ? void 0 : e.overlay) || !1,
                      hasFocusPriority: !!i.hasFocusPriority,
                      children: (0, r.i)((0, r.b)(2, t, Object.assign({}, i))),
                    },
                    null,
                    this.Bo
                  ),
                },
                null,
                this.Bp
              );
            }
          };
        return (
          (a.displayName = `SoftKeysHOC(${
            ((n = t), n.displayName || n.name || "UNNAMED")
          })`),
          (0, u.b)(a, (t, e) => ({ props: e, backend: t }))
        );
      }
      function k(t, e, n, r) {
        var i = (function (t, e, n) {
          switch (e) {
            case c.k:
              return t.left || t.leftIcon || t.leftRawString
                ? t.onSoftLeft
                : null;
            case c.l:
              return t.right || t.rightIcon || t.rightRawString
                ? t.onSoftRight
                : null;
            case c.j:
              return t.center || t.centerIcon || t.centerRawString
                ? t.onSoftCenter
                : null;
            case c.d:
              return t.onArrowUp;
            case c.a:
              return t.onArrowDown;
            case c.c:
              return t.onArrowRight;
            case c.b:
              return t.onArrowLeft;
            case c.g:
              return t.onEndCall;
            case c.f:
              return t.onCall;
            case c.e:
              return n && n.repeat ? null : t.onBack;
            default:
              return null;
          }
        })(t, n, r);
        i === g
          ? __LOG__(
              3
            )`SoftKeys received ${n} despite handler being set to "HANDLED_WITHIN"`
          : i === b
          ? n !== c.j
            ? __LOG__(4)`SoftKeys HANDLED_BY_HOLD for ${n} instead of center`
            : t.onHoldCenter
            ? r && r.preventDefault()
            : __LOG__(4)`SoftKeys HANDLED_BY_HOLD while no hold handler`
          : i && (r && r.preventDefault(), i(e)),
          n === c.e && t.disableExit && r && r.preventDefault();
      }
      function D(t, e, n, i, a) {
        return (
          (e || n || i) && !a && (t += " m"),
          (0, r.f)(
            1,
            "div",
            t,
            e ? (0, r.b)(2, o.b, { className: "n", l10n: e }) : n || i || null,
            0
          )
        );
      }
      function N(t) {
        E && (0, c.m)(t) === c.j && G();
      }
      function G() {
        if (E) {
          var t = E;
          (E = null), t.Bj();
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "o", function () {
        return r;
      }),
        n.d(e, "m", function () {
          return i;
        }),
        n.d(e, "n", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "g", function () {
          return u;
        }),
        n.d(e, "q", function () {
          return o;
        }),
        n.d(e, "r", function () {
          return l;
        }),
        n.d(e, "j", function () {
          return c;
        }),
        n.d(e, "h", function () {
          return d;
        }),
        n.d(e, "k", function () {
          return h;
        }),
        n.d(e, "i", function () {
          return v;
        }),
        n.d(e, "l", function () {
          return f;
        }),
        n.d(e, "p", function () {
          return p;
        }),
        n.d(e, "e", function () {
          return _;
        }),
        n.d(e, "c", function () {
          return m;
        }),
        n.d(e, "d", function () {
          return g;
        }),
        n.d(e, "b", function () {
          return b;
        }),
        n.d(e, "a", function () {
          return S;
        });
      var r = self.innerWidth,
        i = self.innerHeight,
        a = i / r,
        s = r > i,
        u = !s && !navigator.largeTextEnabled,
        o = 30,
        l = 26,
        c = 0.8 * r,
        d = (i > 250 ? 0.5 : 0.4) * i,
        h = 50,
        v = d / c,
        f = i > r ? 128 : 96,
        p = 25,
        _ = 64,
        m = 52,
        g = 81,
        b = 61,
        S = 300;
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "j", function () {
          return d;
        }),
        n.d(e, "l", function () {
          return h;
        }),
        n.d(e, "k", function () {
          return v;
        }),
        n.d(e, "e", function () {
          return f;
        }),
        n.d(e, "i", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return m;
        }),
        n.d(e, "h", function () {
          return b;
        }),
        n.d(e, "g", function () {
          return S;
        }),
        n.d(e, "a", function () {
          return E;
        }),
        n(13);
      var r = n(11),
        i = { none: !0 },
        a = { searching: !0 };
      function s(t) {
        return t.filteredItems || t.items;
      }
      function u(t) {
        return null == t.debounce ? 300 : t.debounce;
      }
      function o(t, e, n) {
        var r = n(e);
        return t.findIndex((t) => r === n(t));
      }
      function l(t) {
        return { scrolling: !0, item: t[0], index: 0, goingDown: !0 };
      }
      function c(t, e) {
        if (t.items !== e.items) {
          var n = t.items,
            r = { items: n, filteredItems: void 0, status: void 0 };
          null != e.filteredItems &&
            ("" === e.searchInput || null == t.search
              ? (r.filteredItems = null)
              : (r.filteredItems = t.search.filter(e.searchInput, n)));
          var a = s(r),
            u = (function (t, e, n) {
              if (0 === n.length) return i;
              if (t.searching) return null != e.search ? t : l(n);
              if (t.none) return l(n);
              var r = e.keyOf,
                a = t.index,
                s = -1;
              return (
                -1 ===
                  (s =
                    a < n.length && r(t.item) === r(n[a])
                      ? a
                      : o(n, t.item, r)) &&
                  (s = Math.min(t.index, n.length - 1)),
                { scrolling: !0, item: n[s], index: s, goingDown: t.goingDown }
              );
            })(e.status, t, a);
          return (r.status = u), r;
        }
        return null;
      }
      function d(t) {
        var e = t.items;
        return {
          status: (function (t, e, n, r) {
            var s;
            return (s =
              0 === n.length
                ? -1
                : null != t
                ? o(n, t.item, r)
                : null != e
                ? -1
                : 0) > -1
              ? { scrolling: !0, item: n[s], index: s, goingDown: !0 }
              : null == e || 0 === n.length
              ? i
              : a;
          })(t.start, t.search, e, t.keyOf),
          searchInput: "",
          items: e,
          filteredItems: null,
          anchor: "beginning",
        };
      }
      function h(t, e, n) {
        t !== e && n && n(t);
      }
      function v(t) {
        return null != t.filteredItems;
      }
      function f(t) {
        return t.scrolling ? t.item : null;
      }
      function p(t) {
        return null == t.search || t.frozen ? null : { status: a };
      }
      function _(t, e, n) {
        return { status: { scrolling: !0, item: t, index: e, goingDown: n } };
      }
      function m(t, e, n) {
        if (!n.frozen) {
          var r = o(s(e), t, n.keyOf);
          if (-1 !== r) {
            var i = e.status;
            return _(t, r, !i.scrolling || r >= i.index);
          }
        }
      }
      function g(t, e) {
        if (!e.frozen) {
          if (t.status.scrolling && null != e.search) return p(e);
          var n = s(t)[0];
          if (null != n)
            return Object.assign({}, _(n, 0, !0), { anchor: "beginning" });
        }
      }
      function b(t, e) {
        if (!e.frozen) {
          var n = t.status;
          if (!n.searching)
            if (n.scrolling && 0 === n.index) {
              var r = e.search,
                i = e.preventLoop;
              if (null != r) return p(e);
              if (!0 !== i)
                return (function (t, e) {
                  if (!e.frozen) {
                    var n = s(t),
                      r = n[n.length - 1];
                    if (null != r)
                      return Object.assign({}, _(r, n.length - 1, !0), {
                        anchor: "end",
                      });
                  }
                })(t, e);
            } else if (n.scrolling) {
              var a = n.index - 1,
                u = s(t)[a];
              return null == u
                ? void __LOG__(
                    3
                  )`Could not find an item while going to previous one`
                : _(u, a, !1);
            }
        }
      }
      function S(t, e) {
        if (!e.frozen) {
          var n = t.status,
            r = e.search,
            i = e.preventLoop;
          if (n.searching) return g(t, e);
          if (!n.scrolling) return n.none, null != r ? p(e) : g(t, e);
          var a = n.index + 1,
            u = s(t)[a];
          return null != u
            ? _(u, a, !0)
            : null == r && !0 !== i
            ? g(t, e)
            : void 0;
        }
      }
      function E(t, e) {
        return (
          !(function (t, e, n) {
            if (t === e) return !0;
            for (var r = Object.keys(t), i = 0; i < r.length; i++) {
              var a = r[i];
              if (a !== n && (!e.propertyIsEnumerable(a) || t[a] !== e[a]))
                return !1;
            }
            return Object.keys(e).length === r.length;
          })(t.prev, t.next, t.specificField) ||
          !(0, r.s)(t.prev[t.specificField], t.next[t.specificField]) ||
          (null != e &&
            (null != e.next
              ? null == e.prev || !(0, r.s)(e.prev, e.next)
              : null != e.prev))
        );
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "g", function () {
        return l;
      }),
        n.d(e, "h", function () {
          return d;
        }),
        n.d(e, "l", function () {
          return h;
        }),
        n.d(e, "k", function () {
          return v;
        }),
        n.d(e, "m", function () {
          return f;
        }),
        n.d(e, "b", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return _;
        }),
        n.d(e, "o", function () {
          return m;
        }),
        n.d(e, "n", function () {
          return g;
        }),
        n.d(e, "j", function () {
          return b;
        }),
        n.d(e, "i", function () {
          return S;
        }),
        n.d(e, "p", function () {
          return E;
        }),
        n.d(e, "c", function () {
          return O;
        }),
        n.d(e, "e", function () {
          return A;
        }),
        n.d(e, "a", function () {
          return y;
        }),
        n.d(e, "f", function () {
          return C;
        });
      var r = n(8),
        i = n.n(r),
        a = n(87),
        s = n(33),
        u = n(50);
      function o(t) {
        return navigator.getDeviceStorage(t);
      }
      function l(t) {
        return t ? `${String(t)}: ${t.name} - ${t.message}` : "<unknown error>";
      }
      function c(t) {
        __LOG__(
          2
        )`DeviceStorage properties: lowDiskSpace=${t.lowDiskSpace} isRemovable=${t.isRemovable} canBeMounted=${t.canBeMounted} canBeFormatted=${t.canBeFormatted} default=${t.default} storagePath=${t.storagePath} storageName=${t.storageName}`;
      }
      function d() {
        return (
          performance.now(),
          Promise.all([
            v("apps"),
            f("apps"),
            v("sdcard"),
            f("sdcard"),
            f("videos"),
          ]).then((t) => {
            var e = i()(t, 5),
              n = e[0],
              r = e[1],
              a = e[2],
              s = e[3],
              u = e[4];
            return (
              performance.now(),
              {
                storageAvailSize: n,
                storageTotalSize: n + r,
                externalStorageAvailSize: a,
                externalStorageTotalSize: a + s,
                videoFolderSize: u,
              }
            );
          })
        );
      }
      function h() {
        var t = L();
        return new Promise((e, n) => {
          var r = t.storageStatus();
          (r.onsuccess = function () {
            var t = r.result;
            t ? e(t) : n(new Error("Undefined device storage status"));
          }),
            (r.onerror = function () {
              c(t),
                __LOG__(4)`Unable to get device storage status: ${l(r.error)}`,
                n(new Error("Unable to get device storage status"));
            });
        });
      }
      function v(t) {
        var e = o(t),
          n = e.freeSpace();
        return new Promise((r, i) => {
          (n.onsuccess = function () {
            r(n.result || 0);
          }),
            (n.onerror = function () {
              c(e),
                __LOG__(
                  4
                )`Unable to get amount of the free space in area ${t}: ${l(
                  n.error
                )}`,
                i(new Error("Unable to get the amount of free space"));
            });
        });
      }
      function f(t) {
        var e = o(t),
          n = e.usedSpace();
        return new Promise((r, i) => {
          (n.onsuccess = function () {
            r(n.result || 0);
          }),
            (n.onerror = function () {
              c(e),
                __LOG__(
                  4
                )`Unable to get amount of the used space in area ${t}: ${l(
                  n.error
                )}`,
                i(new Error("Unable to get the amount of used space"));
            });
        });
      }
      function p(t) {
        var e = L();
        return (0, u.h)(e.storageName, t);
      }
      function _(t) {
        return new Promise((e, n) => {
          var r = T(t);
          if (!r)
            return (
              __LOG__(3)`deletePath: storage for path ${t} not found`, void e()
            );
          var i = r.storage,
            a = r.relativePath,
            s = i.delete(a);
          (s.onsuccess = () => {
            __LOG__(2)`Successfully removed path ${t} / ${a}`, e();
          }),
            (s.onerror = () => {
              c(i);
              var e = s.error;
              __LOG__(4)`Failed to remove file ${t}: ${l(e)}`,
                n(new Error("Failed to remove file"));
            });
        });
      }
      function m(t, e) {
        var n = L();
        return new Promise((r, i) => {
          var a = n.delete(e);
          (a.onsuccess = function () {
            var a;
            __LOG__(2)`File ${e} deleted`,
              ((a = n.addNamed(t, e)).onsuccess = function () {
                __LOG__(
                  2
                )`File ${e} successfully wrote on the ${n.storageName} storage area`,
                  r((0, u.h)(n.storageName, e));
              }),
              (a.onerror = function () {
                c(n),
                  __LOG__(4)`Unable to write file ${e} on the ${
                    n.storageName
                  } storage area: ${l(a.error)}`,
                  i(
                    new Error(
                      `Unable to write file on the ${n.storageName} storage area`
                    )
                  );
              });
          }),
            (a.onerror = function () {
              c(n),
                __LOG__(4)`Unable to delete file ${e}: ${l(a.error)}`,
                i(new Error("Unable to delete the file"));
            });
        });
      }
      function g(t, e) {
        return new Promise((n, r) => {
          var i = T(t);
          if (!i)
            return (
              __LOG__(3)`putBlobToPhoneStorage: Storage for path ${t} is gone`,
              void n()
            );
          var a = i.storage,
            s = i.relativePath,
            o = a.addNamed(e, s);
          (o.onsuccess = () => {
            __LOG__(2)`Successfully put blob to phone storage at ${t}`,
              n((0, u.h)(a.storageName, s));
          }),
            (o.onerror = () => {
              c(a);
              var e = o.error;
              __LOG__(4)`Failed to put blob to device storage ${l(
                e
              )} at path ${t}`,
                r(new Error("Failed to put blob to device storage"));
            });
        });
      }
      function b(t) {
        return new Promise((e, n) => {
          var r = T(t);
          if (r) {
            var i = r.storage,
              a = r.relativePath,
              s = i.get(a);
            (s.onsuccess = () => e(s.result)),
              (s.onerror = () => {
                var r = s.error;
                r && "NotFoundError" === r.name
                  ? e(null)
                  : (c(i),
                    __LOG__(
                      4
                    )`Failed to get file from device storage at ${t}: ${l(r)}`,
                    n(new Error("Failed to get file from device storage")));
              });
          } else __LOG__(3)`Storage for file ${t} was not found.`;
        });
      }
      function S(t) {
        return b(t);
      }
      function E(t) {
        return b(t).then((t) => null != t);
      }
      function O() {
        var t = (0, u.k)(`${a.e}/${(0, s.l)(16)}`),
          e = L();
        return new Promise((n, r) => {
          var i = e.addNamed(new Blob([]), t);
          (i.onsuccess = () => {
            __LOG__(2)`Successfully created temporary file ${t}`,
              n((0, u.h)(e.storageName, t));
          }),
            (i.onerror = () => {
              c(e);
              var n = i.error;
              __LOG__(4)`Failed to create temporary file at path ${t}: ${l(n)}`,
                r(new Error("Failed to create temporary file"));
            });
        });
      }
      function A() {
        var t = navigator
          .getDeviceStorages("sdcard")
          .map((t) => _((0, u.h)(t.storageName, a.e)));
        return Promise.all(t).then(() => {});
      }
      function y(t, e) {
        return new Promise((n, r) => {
          var i = T(e);
          if (!i) throw Error(`Path ${e} gone while trying to append content`);
          var a = i.storage,
            s = i.relativePath,
            u = a.appendNamed(t, s);
          (t = null),
            u
              ? ((u.onerror = () => {
                  c(a);
                  var t = u.error;
                  __LOG__(4)`Failed to append blob to file: ${l(
                    t
                  )} at path ${e}`,
                    r(new Error("Failed to append blob to file"));
                }),
                (u.onsuccess = () => {
                  n();
                }))
              : r(
                  new Error(
                    "Unexpected situation occured during appendNamed initialization"
                  )
                );
        });
      }
      function C() {
        __LOG__(3)`Deleting all incoming status media files from all storages`;
        var t = navigator.getDeviceStorages("sdcard").map(
          (t) => () =>
            new Promise((e) => {
              var n = t.storageName,
                r = t.enumerate(a.d),
                i = [];
              r.onsuccess = function () {
                if (this.result) {
                  var t = this.result.name;
                  if (t.startsWith(`/${n}/${a.d}/`)) {
                    if (
                      (function (t, e) {
                        return (
                          e.startsWith(`/${t}/${a.a}`) ||
                          (e.startsWith(`/${t}/${a.b}`) &&
                            !e.startsWith(`/${t}/${a.c}`))
                        );
                      })(n, t)
                    ) {
                      var r = (0, u.f)(t);
                      r && i.push(_(r));
                    }
                  } else
                    __LOG__(
                      4
                    )`Enumerate function returned a file outside of the WhatsApp folder`,
                      SEND_LOGS("delete-all-storage-files-wrong-file");
                  this.continue();
                } else e(Promise.all(i));
              };
            })
        );
        return Promise.all(t).then(() => {});
      }
      function L() {
        return navigator.getDeviceStorage("sdcard");
      }
      function T(t) {
        var e,
          n = (0, u.o)(t),
          r = n.storageName,
          i = n.relativePath,
          a = navigator.getDeviceStorages("sdcard");
        if (r) {
          if (!(e = a.find((t) => r === t.storageName)))
            return void __LOG__(3)`Storage ${r} not found`;
        } else {
          var s = a.find((t) => t.default);
          if (!s) throw new Error("No default storage found");
          e = s;
        }
        return { storage: e, relativePath: i };
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "k", function () {
        return g;
      }),
        n.d(e, "a", function () {
          return b;
        }),
        n.d(e, "f", function () {
          return S;
        }),
        n.d(e, "g", function () {
          return E;
        }),
        n.d(e, "d", function () {
          return O;
        }),
        n.d(e, "b", function () {
          return A;
        }),
        n.d(e, "i", function () {
          return C;
        }),
        n.d(e, "e", function () {
          return L;
        }),
        n.d(e, "h", function () {
          return T;
        }),
        n.d(e, "c", function () {
          return w;
        }),
        n.d(e, "j", function () {
          return G;
        });
      var r,
        i = n(7),
        a = n(78),
        s = n(3),
        u = n(53),
        o = n(6),
        l = n(220),
        c = 25e3,
        d = new Map(),
        h = new Map(),
        v = new Map(),
        f = new Set(),
        p = "available",
        _ = new a.a(() => {
          I("unavailable");
        }),
        m = !0;
      function g(t) {
        (r = t)(p);
      }
      function b(t, e, n, r) {
        return (
          __LOG__(2)`handleChatStatus status for ${r}`,
          (0, i.x)(e, {
            user: (e) =>
              (function (t, e, n) {
                var r = d.get(e);
                r ||
                  ((r = new (class {
                    constructor(t) {
                      (this.II = new a.a(() => {
                        (this.IF = "idle"), this.IG(this.IF);
                      })),
                        (this.IF = "idle"),
                        (this.IG = t);
                    }
                    IH(t) {
                      var e = this.IF;
                      switch (t) {
                        case "recording_audio":
                        case "typing":
                          (this.IF = t), this.II.debounce(c);
                          break;
                        case "paused":
                          (this.IF = "idle"), this.II.cancel();
                      }
                      e !== this.IF && this.IG(this.IF);
                    }
                  })((n) => k(t, e, null, n))),
                  d.set(e, r)),
                  r.IH(n);
              })(t, e, r),
            group: (e) =>
              (function (t, e, n, r) {
                if (n) {
                  var i = h.get(e);
                  i ||
                    ((i = new (class {
                      constructor(t) {
                        (this.IJ = []), (this.IG = t);
                      }
                      IK(t) {
                        this.IJ[t].timer.cancel(),
                          this.IJ.splice(t, 1),
                          this.IJ.length === t &&
                            (0 === this.IJ.length
                              ? this.IG(null, "idle")
                              : this.IG(
                                  this.IJ[t - 1].participant,
                                  this.IJ[t - 1].state
                                ));
                      }
                      II(t) {
                        var e = this.IL(t);
                        -1 !== e && this.IK(e);
                      }
                      IL(t) {
                        return this.IJ.findIndex((e) => e.participant === t);
                      }
                      IH(t, e) {
                        var n = this.IL(t);
                        if (-1 !== n)
                          if ("paused" === e) this.IK(n);
                          else {
                            var r = this.IJ[n].state;
                            this.IJ[n].timer.debounce(c);
                            var i = e;
                            (this.IJ[n].state = i),
                              n === this.IJ.length - 1 &&
                                r !== i &&
                                this.IG(this.IJ[n].participant, i);
                          }
                        else if ("paused" !== e) {
                          var s = new a.a(() => this.II(t)),
                            u = e;
                          s.debounce(c),
                            this.IJ.push({
                              participant: t,
                              state: e,
                              timer: s,
                            }),
                            this.IG(t, u);
                        }
                      }
                    })((n, r) => k(t, e, n, r))),
                    h.set(e, i)),
                    i.IH(n, r);
                }
              })(t, e, n, r),
          })
        );
      }
      function S(t, e, n, r) {
        var a = (0, i.q)(e),
          o = (0, i.p)(e);
        if (a) {
          switch (n) {
            case "available":
              v.set(a, "online");
              break;
            case "unavailable":
              "deny" === r || "error" === r || "none" === r
                ? v.set(a, null)
                : v.set(a, null != r ? r : (0, s.D)());
              break;
            default:
              v.delete(a), D(t, a);
          }
          M(t, a, v.get(a));
        } else if (o)
          switch (n) {
            case "available":
              f.add(o);
              break;
            case "unavailable":
              break;
            case "unsubscribe":
              f.delete(o);
              var l = (0, u.a)(t.getStoreState());
              if (!l) return;
              var c = l.screens[l.screens.length - 1];
              null != (null == c ? void 0 : c.screen) &&
                "GROUP_INFO" === c.screen.type &&
                c.screen.props.chat.jid === o &&
                N(t, o);
          }
      }
      function E(t, e) {
        D(t, e);
      }
      function O(t, e, n) {
        if ((n && n.forEach((t) => v.delete(t)), e)) {
          var r = y(t);
          r && e.some((t) => t.jid === r.jid) && N(t, r.jid);
        }
      }
      function A(t, e) {
        "online" !== v.get(e) && (v.delete(e), D(t, e), M(t, e, null));
      }
      function y(t) {
        var e = t.getStoreState();
        return (e.user && e.msglist && e.msglist.chat) || null;
      }
      function C() {
        return m;
      }
      function L() {
        v.clear();
      }
      function T(t, e) {
        switch (e) {
          case "visible":
            (m = !0), _.cancel(), I("available");
            var n = y(t);
            n && t.markChatAsRead(n.id),
              (function (t) {
                var e,
                  n = (0, u.a)(t.getStoreState());
                return (
                  "calls" ===
                  (null == n || null == (e = n.tab) ? void 0 : e.key)
                );
              })(t) && (0, l.a)();
            break;
          case "hidden":
            (m = !1), _.onOrBefore(15e3);
            break;
          case "prerender":
            break;
          default:
            m = !1;
        }
      }
      function w(t) {
        _.cancel(),
          I(
            "hidden" === document.visibilityState ? "unavailable" : "available",
            "silent"
          ),
          r && r(p);
        var e = y(t);
        e && e.jid !== o.t.get() && N(t, e.jid);
      }
      function I(t, e) {
        if (t !== p) {
          if (((p = t), "silent" === e)) return;
          r
            ? r(t)
            : __LOG__(2)`PresenceManger squelching presence update: ${t}`;
        }
      }
      function k(t, e, n, r) {
        t.dispatch({
          type: "CHAT_STATE",
          jid: e,
          participant: n,
          chatState: r,
        });
      }
      function D(t, e) {
        var n = y(t);
        n && n.jid === e && N(t, e);
      }
      function N(t, e) {
        t.fireAndForget("backend", "sendPresenceSubscription", { jid: e });
      }
      function G(t, e) {
        (function (t) {
          return (
            t !== o.t.get() &&
            !(0, i.x)(t, { user: (t) => v.has(t), group: (t) => f.has(t) })
          );
        })(e) && N(t, e);
      }
      function M(t, e, n) {
        t.dispatch({
          type: "PRESENCE",
          jid: e,
          presence: void 0 !== n ? n : null,
        });
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "g", function () {
        return s;
      }),
        n.d(e, "h", function () {
          return u;
        }),
        n.d(e, "i", function () {
          return o;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "k", function () {
          return c;
        }),
        n.d(e, "l", function () {
          return d;
        }),
        n.d(e, "m", function () {
          return h;
        }),
        n.d(e, "n", function () {
          return v;
        }),
        n.d(e, "o", function () {
          return f;
        }),
        n.d(e, "p", function () {
          return p;
        }),
        n.d(e, "q", function () {
          return _;
        }),
        n.d(e, "r", function () {
          return m;
        }),
        n.d(e, "s", function () {
          return g;
        }),
        n.d(e, "t", function () {
          return b;
        }),
        n.d(e, "z", function () {
          return S;
        }),
        n.d(e, "y", function () {
          return E;
        }),
        n.d(e, "x", function () {
          return O;
        }),
        n.d(e, "c", function () {
          return A;
        }),
        n.d(e, "f", function () {
          return y;
        }),
        n.d(e, "A", function () {
          return C;
        }),
        n.d(e, "B", function () {
          return L;
        }),
        n.d(e, "C", function () {
          return T;
        }),
        n.d(e, "e", function () {
          return w;
        }),
        n.d(e, "w", function () {
          return I;
        }),
        n.d(e, "a", function () {
          return k;
        }),
        n.d(e, "d", function () {
          return D;
        }),
        n.d(e, "v", function () {
          return N;
        }),
        n.d(e, "u", function () {
          return G;
        }),
        n.d(e, "E", function () {
          return M;
        }),
        n.d(e, "b", function () {
          return R;
        }),
        n.d(e, "D", function () {
          return P;
        });
      var r = n(123),
        i = n(21),
        a = n(19),
        s = "/en/26000021",
        u = "/faq/general/23154266",
        o = "/general/26000089",
        l = "/faq/general/26000015",
        c = "/general/26000103",
        d = "/general/26000253",
        h = "/kaios/26000232",
        v = "/general/26000110",
        f = "/general/28030014",
        p = "/general/26000361",
        _ = "/kaios",
        m = "/kaios/26000179",
        g = "www.whatsapp.com/legal/?eea=1#terms-of-service-age",
        b = "/general/26000112?eea=1",
        S = "www.whatsapp.com/legal/",
        E = "/en/web/26000175/",
        O = "www.whatsapp.com/security/",
        A =
          "/general/security-and-privacy/why-am-i-seeing-a-new-system-message-in-my-whatsapp-chats",
        y = "/general/chats/about-disappearing-messages/",
        C = "/general/chats/about-view-once",
        L = "/204030798254873/",
        T = "/general/about-safely-communicating-with-whatsapp-support",
        w =
          "/general/security-and-privacy/end-to-end-encryption-for-business-messages/",
        I = "/general/security-and-privacy/how-to-use-whatsapp-responsibly/",
        k =
          "/general/security-and-privacy/what-does-this-group-has-ended-mean/",
        D =
          "/general/security-and-privacy/what-does-this-group-has-ended-mean/",
        N = "/kaios/chats/how-to-exit-and-delete-groups",
        G = "/kaios/chats/how-to-delete-messages/";
      function M(t, e) {
        var n = (0, i.d)(),
          a = n.lg,
          s = n.lc,
          u = new URL(`https://${"/" === e[0] ? "faq.whatsapp.com" : ""}${e}`);
        u.searchParams.append("lg", a),
          null != s && "" !== s && u.searchParams.append("lc", s),
          (0, r.k)(t, {
            name: "view",
            data: { type: "url", url: u.toString() },
          });
      }
      var R = "invite-via-link-unavailable";
      function P(t, e, n) {
        if (null != n) {
          var s = n;
          (0, a.g)({
            text: e,
            left: 891,
            onSoftLeft: () =>
              (function (t, e) {
                var n = (0, i.d)(),
                  a = n.lg,
                  s = n.lc,
                  u = new URL("https://faq.whatsapp.com/cxt/");
                u.searchParams.append("entrypointid", e),
                  u.searchParams.append("platform", "kaios"),
                  u.searchParams.append("lg", a),
                  null != s && "" !== s && u.searchParams.append("lc", s),
                  (0, r.k)(t, {
                    name: "view",
                    data: { type: "url", url: u.toString() },
                  });
              })(t, s),
            right: 902,
            onSoftRight: "CLOSE",
          });
        } else (0, a.e)({ text: e });
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return y;
      }),
        n.d(e, "a", function () {
          return C;
        });
      var r = n(1),
        i = n(13),
        a = n(7),
        s = n(59),
        u = n(23),
        o = n.n(u),
        l = n(70),
        c = n(163),
        d = n(330),
        h = n(299),
        v = n(331),
        f = n(178),
        p = n(247),
        _ = n(352),
        m = n(423),
        g = n(424),
        b = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            [
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#D9FDD3",
                d: "M0 0h48v48H0z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#008069",
                "fill-rule": "evenodd",
                d: "M20.685 19.415c0-.184.097-.356.255-.451l6.318-3.813c.644-.399 1.498.04 1.498.768V31.26c0 .713-.821 1.154-1.467.787l-6.337-3.602a.527.527 0 01-.267-.459v-8.57zM11 22.176c0-1.69 1.445-3.058 3.228-3.058h4.316c.29 0 .527.236.527.527v8.12a.527.527 0 01-.527.528h-.945l1.483 5.251a.832.832 0 01-.6 1.038l-1.55.393a.888.888 0 01-1.066-.616l-1.68-5.949a.865.865 0 01-.025-.118C12.41 28.258 11 26.902 11 25.234v-3.058zm25.638-5.413c-.202-.259-.592-.293-.857-.088l-.705.546a.597.597 0 00-.107.84 9.111 9.111 0 011.876 5.573 9.122 9.122 0 01-1.946 5.549.594.594 0 00.087.838l.706.561a.618.618 0 00.86-.086c1.57-1.97 2.432-4.37 2.448-6.85.016-2.48-.816-4.893-2.362-6.883zm-3.395 2.074c-.198-.261-.589-.293-.853-.085l-.7.55a.613.613 0 00-.108.847 5.874 5.874 0 011.113 3.441 5.875 5.875 0 01-1.128 3.434c-.195.269-.165.638.096.845l.705.561c.261.207.654.174.855-.09a7.853 7.853 0 001.627-4.745 7.85 7.85 0 00-1.607-4.758z",
                "clip-rule": "evenodd",
              }),
            ],
            4,
            { fill: "none", viewBox: "0 0 48 48" }
          );
        },
        S = n(17),
        E = (0, r.b)(2, m.a, { className: "PO" }),
        O = (0, r.b)(2, g.a, { className: "PO" }),
        A = { user: () => E, group: () => O };
      function y(t) {
        return (0, r.f)(1, "div", t, E, 0);
      }
      function C(t) {
        return (0, r.f)(1, "div", t, O, 0);
      }
      var L = new v.a({
          idealMaxSize: 10,
          generator: (t) => {
            return ((e = t.jid),
            (n = t.photoId),
            (r = t.type),
            ("thumb" === r
              ? (0, l.getProfilePicTable)().getThumb(e)
              : (0, l.getProfilePicTable)().getIcon(e)
            ).then((t) => (t && t.photoId === n ? t.image : null))).then(
              (t) => t && (0, c.a)(t)
            );
            var e, n, r;
          },
          destroyer(t) {
            t.then((t) => t && (0, c.b)(t));
          },
          serializer: (t) => `${t.jid}/${t.photoId}/${t.type}`,
        }),
        T = (0, h.d)({
          render: (t, e) =>
            e
              ? (0, r.f)(
                  1,
                  "img",
                  (0, o.a)("PP", "communityHome" === t.avatarPlacement && "PQ"),
                  null,
                  1,
                  { src: e }
                )
              : t.fallback || null,
          allocatePromise: (t) => L.createOrRetain(t),
          deallocate(t, e) {
            L.release(e);
          },
        }),
        w = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props,
              r = this.state;
            return (
              (n !== t &&
                (n.jid !== t.jid ||
                  n.type !== t.type ||
                  n.className !== t.className ||
                  n.fallback !== t.fallback ||
                  n.invite !== t.invite ||
                  n.addRequest !== t.addRequest ||
                  n.avatarPlacement !== t.avatarPlacement ||
                  n.ephemeral !== t.ephemeral ||
                  n.avatar !== t.avatar ||
                  n.renderFast !== t.renderFast ||
                  n.isCAG !== t.isCAG)) ||
              (r !== e && r.cachedUri !== e.cachedUri)
            );
          }
          constructor(t) {
            super(t), (this.state = { cachedUri: (0, d.a)(t.jid) });
          }
          componentDidMount() {
            (this.props.isCAG && (0, S.a)("parent_group_view_enabled")) ||
              this.IR();
          }
          componentDidUpdate() {
            (this.props.isCAG && (0, S.a)("parent_group_view_enabled")) ||
              this.IR();
          }
          componentWillUnmount() {
            this.state.cachedUri && (0, c.b)(this.state.cachedUri);
          }
          IR() {
            var t = this.props,
              e = t.jid,
              n = t.renderFast,
              r = t.avatar,
              i = t.invite,
              s = t.addRequest,
              u = t.backend,
              o = t.avatarPlacement;
            if (!n && null == r && u) {
              var l = (0, a.p)(e);
              l && i
                ? (0, f.d)(u, l, i)
                : l && s
                ? (0, f.c)(u, l, s)
                : l && "communityHome" === o
                ? (0, f.e)(u, l)
                : (0, f.b)(u, e);
            }
          }
          render() {
            var t = this.props,
              e = t.avatarPlacement,
              n = t.ephemeral,
              s = t.isCAG,
              u = t.className,
              l = null;
            if (
              (n &&
                ("chatHeader" === e
                  ? (l = (0, r.b)(2, _.a, { className: (0, o.a)("PS", "PR") }))
                  : "default" === e &&
                    (l = (0, r.b)(2, _.a, { className: "PR" }))),
              s && (0, S.a)("parent_group_view_enabled"))
            )
              return (0, r.f)(
                1,
                "div",
                "PM",
                [(0, r.f)(1, "div", (0, o.a)("PN", u), (0, r.b)(2, b), 2), l],
                0
              );
            var c = this.props,
              d = c.avatar,
              h = c.jid,
              v = c.type,
              f = c.fallback,
              p =
                (d && "loaded" === d.status && null == d.photoId) ||
                "icon" !== v
                  ? null
                  : this.state.cachedUri,
              m = null;
            d &&
              "loaded" === d.status &&
              null != d.photoId &&
              null != v &&
              (m = (0, r.b)(2, T, {
                jid: h,
                photoId: d.photoId,
                type: v,
                fallback: f,
                avatarPlacement: e,
              }));
            var g = null,
              E = null;
            p ? (g = { backgroundImage: `url('${p}')` }) : (E = (0, a.x)(h, A));
            var O = (0, r.f)(1, "div", (0, o.a)("PN", u), m || f || E, 0, {
              style: i.h(g),
            });
            return null == l ? O : (0, r.f)(1, "div", "PM", [O, l], 0);
          }
        };
      e.c = (0, s.c)(w, (t, e, n) => {
        var r = !1,
          i = "@me" === n.jid ? t.user.jid : n.jid;
        if (null != n.ephemeral)
          if ("ONE_TO_ONE" === n.ephemeral) {
            var s = (0, a.q)(i);
            null != s && (r = (0, p.e)(s, t.contacts));
          } else r = n.ephemeral > 0;
        return n.isCAG && (0, S.a)("parent_group_view_enabled")
          ? {
              jid: i,
              className: n.className,
              avatarPlacement: n.avatarPlacement || "default",
              ephemeral: r,
              isCAG: n.isCAG,
            }
          : {
              jid: i,
              avatar: t.avatars[i],
              type: n.type || "icon",
              className: n.className,
              fallback: n.fallback,
              renderFast: t.renderFast,
              invite: n.invite,
              addRequest: n.addRequest,
              backend: e,
              avatarPlacement: n.avatarPlacement || "default",
              ephemeral: r,
            };
      });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return v;
        });
      var r = n(218),
        i = n(53),
        a = n(7),
        s = n(315),
        u = n(19),
        o = n(64),
        l = n(214);
      function c(t, e, n, r, i) {
        (0, a.x)(e, {
          user: (e) => {
            (function (t, e, n, r, i) {
              var a = t.getCache().chatFromJid(e);
              a ? v(t, a.id, n, r, i) : h(t, e, n, r, i);
            })(t, e, n, r, i);
          },
          group: (e) => {
            (function (t, e, n, r, i) {
              var a = t.getCache().chatFromJid(e);
              a
                ? v(t, a.id, n, r, i)
                : __LOG__(4)`_openChatWithGroup: does not exist`;
            })(t, e, n, r, i);
          },
        });
      }
      function d(t, e, n, r, s) {
        var l = t.getCache().chatFromJid(e);
        if (l) v(t, l.id, n, r, s);
        else {
          var c = (0, i.a)(t.getStoreState());
          if (c) {
            var d = c.contacts[e];
            if (d && null != d.phonebookPhone) h(t, e, n, r, s);
            else {
              var f = (0, a.u)(e),
                p = t
                  .sendAndReceive("backend", "contactQuerySync", {
                    rawPhoneNumber: f,
                  })
                  .then((i) =>
                    "not-found" === i
                      ? () => {
                          (0, u.e)({ text: [(0, o.c)(f), 195] });
                        }
                      : "offline" === i
                      ? () => {
                          (0, u.e)({ title: 636, text: [(0, o.c)(f), 194] });
                        }
                      : "invalid" === i
                      ? () => {
                          (0, u.e)({ text: 635 });
                        }
                      : () => (h(t, e, n, r, s), "dontClose")
                  );
              t.spinUntilReadyOverlay(p, { title: 182 });
            }
          }
        }
      }
      function h(t, e, n, r, i) {
        return Promise.resolve()
          .then(
            () =>
              t.getCache().chatFromJid(e) ||
              t
                .sendAndReceive("backend", "createChat", { jid: e })
                .then((e) => {
                  var n = e.chatId,
                    r = t.getCache().chatFromId(n);
                  if (!r)
                    throw (
                      (__LOG__(4)`openChatWithContact failed to create chat`,
                      new Error("openChatWithContact"))
                    );
                  return r;
                })
          )
          .then((e) => {
            v(t, e.id, n, r, i);
          });
      }
      function v(t, e, n, i, a) {
        (0, r.b)(t, e, () => {
          var r = t.getCache().chatFromId(e);
          r
            ? (i && (0, l.d)(t, r.jid, i),
              s.b(t, r, n, null != a ? a : "withoutComposeBoxOpened"))
            : __LOG__(4)`openChat: chat #${e} does not exist`;
        });
      }
    },
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "setAppLaunchDestination", function () {
          return u;
        }),
        n.d(e, "getAppLaunchDestination", function () {
          return o;
        }),
        n.d(e, "setBridge", function () {
          return l;
        }),
        n.d(e, "getBridge", function () {
          return c;
        }),
        n.d(e, "makeBackendRequestId", function () {
          return d;
        }),
        n.d(e, "hasBackendWorkerStarted", function () {
          return h;
        }),
        n.d(e, "setBackendWorkedStarted", function () {
          return v;
        });
      var r,
        i = null,
        a = 1,
        s = !1;
      function u(t) {
        i = t;
      }
      function o() {
        return i;
      }
      function l(t) {
        r = t;
      }
      function c() {
        return r;
      }
      function d() {
        return a++;
      }
      function h() {
        return s;
      }
      function v() {
        s = !0;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return p;
      }),
        n.d(e, "e", function () {
          return m;
        }),
        n.d(e, "k", function () {
          return b;
        }),
        n.d(e, "c", function () {
          return S;
        }),
        n.d(e, "j", function () {
          return E;
        }),
        n.d(e, "h", function () {
          return O;
        }),
        n.d(e, "i", function () {
          return A;
        }),
        n.d(e, "b", function () {
          return y;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "g", function () {
          return L;
        }),
        n.d(e, "f", function () {
          return T;
        }),
        n.d(e, "l", function () {
          return w;
        });
      var r = n(68),
        i = n(3),
        a = n(254),
        s = n(14),
        u = n(306),
        o = n(103),
        l = n(19),
        c = n(311),
        d = n(212),
        h = n(17),
        v = n(402),
        f = "ActivityCanceled",
        p = "mailto:",
        _ = null;
      function m(t) {
        t.dispatch({ type: "ACTIVITY_END" }),
          t.fireAndForget("backend", "setActivityInProgress", { name: null });
      }
      function g(t) {
        (_ = null), (0, o.h)(t, "visible"), m(t);
      }
      function b(t, e) {
        if (null != _)
          return (
            (null == _.data ||
              null == _.ts ||
              _.data.name !== e.name ||
              !(0, a.a)(_.data.data, e.data) ||
              (0, i.u)(_.ts) > 1e3) &&
              (__LOG__(
                4
              )`Activity launched while another activity is currently active`,
              SEND_LOGS(
                "Activity launched while another activity is currently active"
              )),
            Promise.resolve()
          );
        var n = { data: e, ts: (0, i.t)(), resolvable: new r.a() };
        (_ = n),
          (0, o.h)(t, "hidden"),
          (function (t, e) {
            t.dispatch({ type: "ACTIVITY_START" }),
              t.fireAndForget("backend", "setActivityInProgress", { name: e });
          })(t, e.name),
          t.getStoreState(),
          __LOG__(2)`Creating new ${e.name} activity`;
        var s = new Promise((t, n) => {
          var r = new self.MozActivity(e);
          _ && (_.ref = r),
            (r.onsuccess = (e) => t(e.target.result)),
            (r.onerror = (t) => n(t.target.error));
        });
        return Promise.race([s, n.resolvable.promise])
          .then((e) => (g(t), e))
          .catch((n) => {
            if ((g(t), n && n.name === f))
              return __LOG__(2)`User cancelled ${e.name} activity`, null;
            if (n && "NO_PROVIDER" === n.name) {
              if ("maps" === e.name || "JioCloudShare" === e.name)
                return (
                  __LOG__(
                    2
                  )`No provider for ${e.name}, falling back to browser`,
                  b(t, { name: "view", data: { type: "url", url: e.data.url } })
                );
              if ("camera-pick" === e.name)
                return (
                  __LOG__(
                    2
                  )`No provider for ${e.name}, falling back to regular pick`,
                  b(t, { name: "pick", data: e.data })
                );
              if (
                "view" === e.name &&
                "url" === e.data.type &&
                e.data.url &&
                e.data.url.toLowerCase().startsWith(p)
              )
                (0, l.e)({ title: 243, text: 611 });
              else {
                if ("open" === e.name && "application/pdf" === e.data.type)
                  return b(t, {
                    name: "view",
                    data: { type: e.data.type, blob: e.data.blob },
                  });
                "view" === e.name && "application/pdf" === e.data.type
                  ? (0, l.g)({
                      title: 243,
                      text: 614,
                      left: 868,
                      onSoftLeft: "CLOSE",
                      right: 941,
                      onSoftRight: () => {
                        (0, u.a)(t);
                      },
                    })
                  : ("view" !== e.name && "open" !== e.name) ||
                    (0, l.e)({ title: 243, text: 609 });
              }
            }
            return (
              __LOG__(3)`Error was thrown while running activity ${e.name}: ${
                n && n.name
              } ${n && n.message}`,
              null
            );
          });
      }
      function S() {
        _ && _.resolvable
          ? _.resolvable.reject({ name: f })
          : __LOG__(4)`cancelCurrentActivity called without a resolvable`;
      }
      function E(t, e, n) {
        var r = Array.isArray(e)
          ? e.some((t) => t.includes("video"))
          : e.includes("video");
        return (
          r && (0, c.d)(),
          b(
            t,
            n
              ? { name: "camera-pick", data: { type: e } }
              : { name: "pick", data: { type: e } }
          ).then(
            (t) => {
              if ((r && (0, c.b)(), !t)) return null;
              var e = t.blob;
              return e
                ? (__LOG__(2)`pickMedia returned blob of size ${e.size}`, e)
                : (__LOG__(4)`pickMedia did not return blob!`,
                  SEND_LOGS("pick-media-undefined", 0.001),
                  null);
            },
            (t) => {
              throw (r && (0, c.b)(), t);
            }
          )
        );
      }
      function O(t) {
        b(t, {
          name: "configure",
          data: { target: "device", section: "geolocation" },
        });
      }
      function A(t) {
        b(t, {
          name: "configure",
          data: { target: "device", section: "appPermissions" },
        });
      }
      function y(t, e) {
        return b(t, {
          name: "new",
          data: { type: "webcontacts/contact", params: e },
        });
      }
      function C(t, e) {
        return b(t, {
          name: "dial",
          data: { type: "webtelephony/number", number: e },
        });
      }
      function L(t, e, n) {
        b(t, { name: "open", data: { type: n, blob: e } });
      }
      function T(t, e) {
        if (!(0, h.a)("green_alert_modal_deep_link_enabled"))
          return __LOG__(2)`activities: opening ToS deeplinks disabled`, !1;
        var n = t.toLowerCase(),
          r = (0, d.a)(n);
        return null != r
          ? (r === s.Y
              ? (0, v.a)(e, r)
              : (__LOG__(
                  3
                )`activities: attempt to open ToS link failed, invalid id`,
                (0, l.e)({ title: 243, text: 488 })),
            !0)
          : (__LOG__(
              3
            )`activities: attempt to open ToS link failed, invalid ToS URL format`,
            !1);
      }
      function w(t, e, n) {
        b(t, {
          name: "new",
          data: {
            type: "websms/sms",
            number: e,
            body: n,
            appname: "notWhatsApp",
          },
        });
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "g", function () {
        return k;
      }),
        n.d(e, "n", function () {
          return D;
        }),
        n.d(e, "o", function () {
          return N;
        }),
        n.d(e, "k", function () {
          return G;
        }),
        n.d(e, "l", function () {
          return M;
        }),
        n.d(e, "h", function () {
          return R;
        }),
        n.d(e, "i", function () {
          return P;
        }),
        n.d(e, "c", function () {
          return U;
        }),
        n.d(e, "a", function () {
          return j;
        }),
        n.d(e, "b", function () {
          return x;
        }),
        n.d(e, "d", function () {
          return F;
        }),
        n.d(e, "e", function () {
          return V;
        }),
        n.d(e, "j", function () {
          return B;
        }),
        n.d(e, "f", function () {
          return H;
        }),
        n.d(e, "m", function () {
          return z;
        });
      var r = n(1),
        i = (n(13), n(23)),
        a = n.n(i),
        s = "CD FY FU",
        u = "CE",
        o = "CF FV FS",
        l = "CG FW FS",
        c = "CH Fa",
        d = "CI",
        h = "CJ",
        v = "CK",
        f = "CM FW FS",
        p = "Cc Fa",
        _ = n(18),
        m = n(21),
        g = n(107),
        b = n(179),
        S = n(268),
        E = n(27),
        O = n(310),
        A = n(189),
        y = n(59),
        C = n(153),
        L = n(14);
      function T(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return (0, r.f)(1, "div", (0, a.a)(h, e && v, i && d, n), t, 0);
      }
      function w(t, e, n) {
        return (0, r.b)(2, C.b.div, {
          hasFocusPriority: e,
          className: (0, a.a)(h, e && v, n),
          children: t,
        });
      }
      function I(t) {
        return (e, n) => t(e, n, w);
      }
      function k(t) {
        var e = t.text,
          n = t.className;
        return (0, r.f)(
          1,
          "div",
          (0, a.a)("CL FW FS FY FU", n),
          e ? (0, r.b)(2, _.b, { l10n: e }) : null,
          0
        );
      }
      function D(t, e) {
        var n = t.text,
          i = t.selected,
          s = t.className,
          u =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T,
          o = (0, r.b)(2, _.b, { l10n: n });
        return u(o, i, (0, a.a)(s, f));
      }
      var N = I(D);
      function G(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
        return n(t.children, t.selected, t.className);
      }
      var M = I(G);
      function R(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T,
          i = (0, r.c)(
            [
              t.label
                ? (0, r.b)(2, _.b, { className: "CB", l10n: t.label })
                : null,
              t.children,
            ],
            0
          );
        return n(i, t.selected, (0, a.a)("CU", t.className));
      }
      var P = I(R);
      function U(t) {
        var e = t.title,
          n = t.subtitle;
        return (0, r.f)(
          1,
          "div",
          (0, a.a)("CO", t.className),
          [
            e
              ? (0, r.b)(2, _.b, { className: o, l10n: e })
              : (0, r.f)(
                  1,
                  "span",
                  (0, a.a)(o, t.ellipsis && s),
                  t.rawTitle,
                  0
                ),
            n
              ? (0, r.b)(2, _.b, { className: l, l10n: n })
              : t.rawSubtitle
              ? (0, r.f)(
                  1,
                  "span",
                  (0, a.a)(l, t.ellipsis && s),
                  t.rawSubtitle,
                  0
                )
              : null,
          ],
          0
        );
      }
      function j(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T,
          i = (0, r.c)(
            [
              (0, r.b)(2, U, {
                title: t.title,
                rawTitle: t.rawTitle,
                subtitle: t.subtitle,
                rawSubtitle: t.rawSubtitle,
                ellipsis: t.ellipsis,
              }),
              t.rightComponent && (0, r.f)(1, "div", "CP", t.rightComponent, 0),
            ],
            0
          );
        return n(i, t.selected, (0, a.a)("CN", t.borderBottom && u));
      }
      var x = I(j);
      function F(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T,
          i = (0, r.c)(
            [
              (0, r.b)(2, U, {
                title: t.title,
                rawTitle: t.rawTitle,
                subtitle: t.subtitle,
                rawSubtitle: t.rawSubtitle,
                ellipsis: t.ellipsis,
              }),
              (0, r.b)(2, S.a, { checked: t.checked, selected: t.selected }),
            ],
            4
          );
        return n(i, t.selected, "CV");
      }
      var V = I(F),
        B = (t) => {
          var e = t.danger && ("red" === t.danger ? "CR" : "CS");
          return (0, r.b)(2, G, {
            selected: t.selected,
            className: (0, a.a)(
              "CQ CJ",
              t.selected && v,
              e,
              t.disabled && d,
              t.borderBottom && u,
              t.className
            ),
            children: [
              (0, r.f)(1, "div", "CT CC", t.icon, 0),
              (0, r.b)(2, U, {
                title: t.title,
                rawTitle: t.rawTitle,
                subtitle: t.subtitle,
                rawSubtitle: t.rawSubtitle,
                ellipsis: t.ellipsis,
              }),
              t.rightComponent,
            ],
          });
        };
      function $(t, e) {
        return "pushname" === e ? ("@me" !== t.jid ? (0, O.d)(t) : null) : e;
      }
      function H(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T,
          i = t.contact.jid,
          s = $(t.contact, t.rawSubtitle),
          u = (0, r.c)(
            [
              (0, r.f)(
                1,
                "div",
                p,
                (0, r.b)(2, g.c, { jid: i, className: c }),
                2
              ),
              (0, r.f)(
                1,
                "div",
                (0, a.a)("CX", !t.rightComponent && "CY"),
                (0, r.b)(2, U, {
                  rawTitle: (0, r.b)(2, E.a, {
                    contact: t.contact,
                    prefer: t.prefer,
                  }),
                  subtitle: t.subtitle,
                  rawSubtitle: s,
                  ellipsis: !0,
                }),
                2
              ),
              t.rightComponent,
            ],
            0
          );
        return n(u, t.selected, "CW", t.disabled);
      }
      I(F);
      var z = (0, y.c)(
        function (t) {
          var e,
            n,
            i = t.contactOrGroup,
            u = t.contacts,
            o = t.disabled,
            c = t.checked,
            d = t.selected,
            h = t.subtitle,
            v = i.jid,
            f = i.chat;
          return (
            null != f &&
              ("ONE_TO_ONE" === f.type
                ? ((e = "ONE_TO_ONE"),
                  (n = (0, r.b)(2, b.b, {
                    className: (0, a.a)(l, s),
                    chat: f,
                    WhileIdle: W,
                  })))
                : (f.type,
                  (e = f.groupInfo.expiration || L.k),
                  (n = (0, r.b)(2, b.a, {
                    className: (0, a.a)(l, s),
                    chat: f,
                    WhileIdle: W,
                  })))),
            T(
              (0, r.c)(
                [
                  (0, r.b)(2, g.c, { jid: v, className: p, ephemeral: e }),
                  (0, r.f)(
                    1,
                    "div",
                    "Ca CE",
                    [
                      (0, r.f)(
                        1,
                        "div",
                        "Cb FY FU",
                        [
                          (0, r.b)(2, J, { contactOrGroup: i, contacts: u }),
                          null != h
                            ? (0, r.f)(
                                1,
                                "div",
                                (0, a.a)(l, s),
                                (0, r.b)(2, _.b, { l10n: h }),
                                2
                              )
                            : n,
                        ],
                        0
                      ),
                      o ? null : (0, r.b)(2, S.a, { checked: c, selected: d }),
                    ],
                    0
                  ),
                ],
                4
              ),
              d,
              "CZ",
              o
            )
          );
        },
        (t, e, n) => ({
          contactOrGroup: n.contactOrGroup,
          disabled: n.disabled,
          selected: n.selected,
          checked: n.checked,
          subtitle: n.subtitle,
          contacts: t.contacts,
        })
      );
      function W(t) {
        var e = t.chat,
          n = t.contacts;
        if ("GROUP" === e.type) {
          var i = e.groupInfo.participants.map((t) =>
              (0, r.b)(2, E.a, { contacts: n, jid: t, prefer: "short" }, t)
            ),
            u = (0, m.h)(i);
          return (0, r.f)(1, "div", (0, a.a)(l, s), u, 0);
        }
        return null;
      }
      function J(t) {
        var e = t.contactOrGroup,
          n = (0, a.a)(o, s);
        return e.group
          ? (0, r.f)(1, "span", n, (0, A.c)(e.group), 0)
          : (0, r.b)(2, E.a, {
              contacts: t.contacts,
              jid: e.jid,
              className: n,
              prefer: "long",
            });
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "h", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = "Fx",
        i = "Fy",
        a = "Fz",
        s = "GA",
        u = "GB",
        o = "GC",
        l = "GD",
        c = "GE";
    },
    function (t, e, n) {
      n.r(e),
        n.d(e, "onAppClose", function () {
          return a;
        }),
        n.d(e, "closeApp", function () {
          return s;
        });
      var r = n(280),
        i = n(166);
      function a() {
        (0, r.b)(), (0, i.c)();
      }
      function s() {
        a(), self.open("", "_parent", ""), self.close();
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n(21),
        i = n(19);
      function a(t, e) {
        var n = navigator.mozApps.getSelf();
        (n.onsuccess = () => {
          var i = n.result;
          i && i.connect
            ? i
                .connect("systoaster")
                .then((n) => {
                  var i = (0, r.k)(t);
                  n.forEach((t) => {
                    t.postMessage({ message: i, latency: e });
                  });
                })
                .catch((e) => {
                  __LOG__(3)`openToast: failed trying to postMessage`, s(t);
                })
            : (__LOG__(3)`openToast: app.connect is not defined`, s(t));
        }),
          (n.onerror = () => {
            __LOG__(4)`openToast: Error when trying to get self app.`, s(t);
          });
      }
      function s(t) {
        (0, i.e)({ text: (0, r.a)(t) });
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "i", function () {
          return c;
        }),
        n.d(e, "h", function () {
          return d;
        }),
        n.d(e, "g", function () {
          return h;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "e", function () {
          return _;
        });
      var r = n(77),
        i = n(21);
      function a() {
        var t,
          e,
          n = navigator.mozSettings.createLock();
        return ((t = {
          version: s(n, "deviceinfo.os"),
          build: s(n, "deviceinfo.build_number"),
          hardware: s(n, "deviceinfo.hardware"),
          device: s(n, "deviceinfo.product_model"),
          hour12: s(n, "locale.hour12"),
        }),
        (e = Object.keys(t)),
        Promise.all(e.map((e) => t[e])).then(function (t) {
          for (var n = {}, r = 0; r < t.length; r++) n[e[r]] = t[r];
          return n;
        })).then((t) => {
          var e = t.version,
            n = t.build,
            a = t.hardware,
            s = t.device,
            o = t.hour12;
          (0, r.h)(o);
          var l = (0, i.d)();
          return {
            os: { version: e, build: n },
            hardware: a,
            device: s,
            lg: l.lg,
            lc: l.lc,
            hour12: o,
            carrier: u(),
            height: self.innerHeight,
            width: self.innerWidth,
          };
        });
      }
      function s(t, e) {
        return new Promise((n, r) => {
          var i = t.get(e);
          (i.onsuccess = () => {
            n(i.result[e]);
          }),
            (i.onerror = () => {
              var t;
              r(null != (t = i.error) ? t : "UnknownError");
            });
        });
      }
      function u() {
        var t = navigator.mozMobileConnections;
        if (null != t) {
          var e = t[0];
          if (e) {
            var n = e.data,
              r = n.network;
            return {
              mcc: l((null == r ? void 0 : r.mcc) || ""),
              mnc: l((null == r ? void 0 : r.mnc) || ""),
              roaming: n.roaming,
              radioType: o(n.type),
            };
          }
        }
        return { mcc: l(""), mnc: l(""), roaming: !1, radioType: 0 };
      }
      function o(t) {
        switch (t) {
          case "lte":
            return 111;
          case "edge":
            return 100;
          case "umts":
            return 102;
          case "evdo0":
          case "evdoa":
          case "evdob":
            return 103;
          case "gprs":
            return 104;
          case "hsdpa":
            return 105;
          case "hsupa":
            return 106;
          case "hspa":
            return 107;
          case "1xrtt":
            return 109;
          case "ehrpd":
            return 110;
          case "hspa+":
            return 112;
          default:
            return 0;
        }
      }
      function l(t) {
        return ("000" + t).slice(-3);
      }
      function c() {
        var t;
        return (
          "connected" ===
          (null == (t = navigator.mozWifiManager)
            ? void 0
            : t.connection.status)
        );
      }
      function d() {
        var t = navigator.mozMobileConnections;
        if (null != t) {
          var e = t[0];
          if (null != e) return e.data.roaming;
        }
        return !1;
      }
      function h() {
        return s(
          navigator.mozSettings.createLock(),
          "geolocation.enabled"
        ).catch(() => !1);
      }
      function v() {
        return new Promise((t, e) => {
          var n = navigator.mozApps.mgmt.getAll();
          (n.onsuccess = () => {
            var e;
            n.result &&
              n.result.forEach(function (t) {
                "WhatsApp" === t.manifest.name &&
                  (e = navigator.mozPermissionSettings.get(
                    "geolocation",
                    t.manifestURL,
                    t.origin,
                    !1
                  ));
              }),
              t(e || void 0);
          }),
            (n.onerror = () => {
              t(void 0);
            });
        });
      }
      function f() {
        return navigator
          .getFeature("hardware.memory")
          .catch(
            (t) => (__LOG__(3)`Failed to get phone memory info: ${t}`, null)
          );
      }
      function p() {
        return s(
          navigator.mozSettings.createLock(),
          "audio.volume.content"
        ).then((t) => (Number.isFinite(t) ? t : null));
      }
      function _(t) {
        return new Promise((e) => {
          var n = navigator.mozApps.mgmt.getAll();
          (n.onsuccess = () => {
            if (null != n.result) {
              var r = n.result.find((e) => e.origin === t);
              e(r || null);
            } else e(null);
          }),
            (n.onerror = () => {
              e(null);
            });
        });
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n(13),
        i = n(194),
        a = class extends r.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.promise !== t.promise ||
                n.fallback !== t.fallback ||
                n.render !== t.render ||
                n.props !== t.props)
            );
          }
          constructor() {
            super(), (this.Bd = null), (this.Bc = (0, i.a)((t) => this.Be(t)));
          }
          Be(t) {
            var e,
              n = (function (t) {
                var e,
                  n = !1,
                  r = !1;
                return (
                  t.then(
                    function (t) {
                      return (n = !0), (e = t), t;
                    },
                    function (t) {
                      throw ((r = !0), t);
                    }
                  ),
                  {
                    promise: t,
                    isSettled: () => n || r,
                    isPending: () => !n && !r,
                    isFulfilled: () => n,
                    isRejected: () => r,
                    getValue: () => {
                      if (n) return e;
                      throw new Error(
                        r
                          ? "queryablePromise: getValue called on a rejected promise"
                          : "queryablePromise: getValue called on a pending promise"
                      );
                    },
                  }
                );
              })(t),
              r = () => {
                e === this.Bd && this.forceUpdate();
              };
            return (
              (e = this.Bd =
                t.then(r, () => {
                  r(), t.then();
                })),
              n
            );
          }
          render() {
            var t = this.props,
              e = this.Bc(t.promise);
            if (e.isFulfilled()) return (0, t.render)(t.props, e.getValue());
            var n = t.fallback;
            return n ? n(t.props) : null;
          }
        };
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r,
        i,
        a = n(13),
        s =
          ((i = r =
            class extends a.a {
              constructor() {
                var t;
                return (
                  (t = super(...arguments)),
                  (this.child = null),
                  (this.nextForceFocus = null),
                  (this.addChild = (t) => {
                    var e = this.child;
                    l(t, e),
                      (this.child = o(t)),
                      this.child !== e &&
                        (e && e.blur(), this.onUserMeddling());
                  }),
                  (this.removeChild = (t) => {
                    this.child === t
                      ? ((this.child = t.nextSibling),
                        c(t),
                        this.onUserMeddling())
                      : c(t);
                  }),
                  (this.resort = () => {
                    var t = this.child;
                    if (t) {
                      var e = o(t);
                      t !== e &&
                        ((this.child = e), t.blur(), this.onUserMeddling());
                    }
                  }),
                  (this.forceFocus = () => {
                    (this.nextForceFocus = null),
                      this.child && !this.child.inFocus && this.child.focus();
                  }),
                  (this.onUserMeddling = () => {
                    this.nextForceFocus ||
                      (this.nextForceFocus = requestAnimationFrame(
                        this.forceFocus
                      ));
                  }),
                  t
                );
              }
              getChildContext() {
                return { focusParent: this };
              }
              componentDidMount() {}
              render() {
                return this.props.children;
              }
            }),
          (r.childContextTypes = { focusParent() {} }),
          i),
        u = class extends a.a {
          getChildContext() {
            return { focusParent: this };
          }
          displayName() {
            return "FocusTree." + this.htmlName;
          }
          constructor(t, e, n) {
            super(t, e),
              (this.prevSibling = null),
              (this.nextSibling = null),
              (this.child = null),
              (this.ref = null),
              (this.hasFocusPriority = !1),
              (this.inFocus = 0),
              (this.addChild = (t) => {
                var e = this.child;
                l(t, e),
                  (this.child = o(t)),
                  this.inFocus &&
                    this.child !== e &&
                    (e && e.blur(), this.onUserMeddling());
              }),
              (this.removeChild = (t) => {
                this.child === t
                  ? ((this.child = t.nextSibling),
                    c(t),
                    this.inFocus && this.onUserMeddling())
                  : c(t);
              }),
              (this.resort = () => {
                var t = this.child;
                if (t) {
                  var e = o(t);
                  t !== e &&
                    ((this.child = e),
                    this.inFocus && (t && t.blur(), this.onUserMeddling()));
                }
              }),
              (this.setRef = (t) => {
                var e = this.parent;
                (this.hasFocusPriority = !!this.props.hasFocusPriority),
                  (this.ref = t),
                  t ? e.addChild(this) : e.removeChild(this);
                var n = this.props.innerRef;
                n && n(t);
              }),
              (this.onFocus = (t) => {
                this.inFocus || (t.stopPropagation(), this.onUserMeddling()),
                  this.props.onNativeFocus && this.props.onNativeFocus(t);
              }),
              (this.onBlur = (t) => {
                2 === this.inFocus
                  ? (t.stopPropagation(), this.blur(), this.onUserMeddling())
                  : this.inFocus || t.stopPropagation(),
                  this.props.onNativeBlur && this.props.onNativeBlur(t);
              }),
              (this.onUserMeddling = () => {
                (this.inFocus = 0), this.parent.onUserMeddling();
              }),
              (this.hasFocusPriority = !!t.hasFocusPriority),
              (this.htmlName = n),
              (this.parent = e.focusParent);
          }
          getSnapshotBeforeUpdate() {
            if (!this.ref) return null;
            var t = this.hasFocusPriority,
              e = !!this.props.hasFocusPriority;
            return (
              (this.hasFocusPriority = e),
              t !== e && this.ref && this.parent.resort(),
              null
            );
          }
          componentDidUpdate() {
            var t = !!this.props.hasFocusPriority;
            this.hasFocusPriority !== t && (this.hasFocusPriority = t);
          }
          focus() {
            return (
              (this.inFocus = 1),
              this.child && this.child.focus()
                ? ((this.inFocus = 2), !0)
                : (null != this.ref && this.ref.focus(),
                  (this.inFocus = 2),
                  document.activeElement === this.ref)
            );
          }
          blur() {
            this.inFocus &&
              ((this.inFocus = 0), this.child && this.child.blur());
          }
          render() {
            var t = this.props,
              e = {
                ref: this.setRef,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
              };
            for (var n in t)
              switch (n) {
                case "innerRef":
                case "hasFocusPriority":
                case "ref":
                case "onFocus":
                case "onBlur":
                case "onNativeFocus":
                case "onNativeBlur":
                case "children":
                  break;
                default:
                  e[n] = t[n];
              }
            return a.d(this.htmlName, e, t.children);
          }
        };
      function o(t) {
        var e = (function (t) {
          for (var e = t; e; e = e.nextSibling)
            if (e.hasFocusPriority) return e;
          return t;
        })(t);
        return e !== t && (c(e), l(e, t)), e;
      }
      function l(t, e) {
        (t.nextSibling = e), e && (e.prevSibling = t);
      }
      function c(t) {
        var e = t.prevSibling,
          n = t.nextSibling;
        e && ((e.nextSibling = n), (t.prevSibling = null)),
          n && ((n.prevSibling = e), (t.nextSibling = null));
      }
      function d(t) {
        var e, n;
        return (
          (n = e =
            class extends u {
              constructor(e, n) {
                super(e, n, t);
              }
            }),
          (e.contextTypes = u.contextTypes),
          (e.childContextTypes = u.childContextTypes),
          n
        );
      }
      (u.contextTypes = { focusParent() {} }),
        (u.childContextTypes = { focusParent() {} }),
        (e.b = {
          div: d("div"),
          input: d("input"),
          textarea: d("textarea"),
          video: d("video"),
        });
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return l;
        });
      var r,
        i = n(97),
        a = n(81),
        s = n(16),
        u = n(198);
      function o(t) {
        return (r = new (class {
          constructor(t) {
            (this.Mo = new a.a()), (this.Mp = t);
          }
          runJob(t) {
            this.Mq(t, (t) => {
              t.newlyCreated
                ? this.Mp.fireAndForget("backend", "runJob", { jobId: t.jobId })
                : __LOG__(2)`runJob job already exists`;
            });
          }
          runJobWithResult(t) {
            return new Promise((e, n) => {
              this.Mq(t, (t) => {
                t.newlyCreated ||
                  __LOG__(2)`runJobWithResult job already exists`,
                  e(
                    this.Mp.sendAndReceive("backend", "runJob", {
                      jobId: t.jobId,
                    })
                  );
              }).catch(n);
            });
          }
          Mq(t, e) {
            return this.Mo.enqueueHandlers(
              (0, i.jobsTable)().maybeCreateJob(t),
              (n) => {
                n.newlyCreated
                  ? (0, s.d)(t.type) && (0, u.c)(this.Mp, n.jobId, t)
                  : __LOG__(2)`_enqueueJob job already exists`,
                  e(n);
              }
            );
          }
        })(t));
      }
      function l(t) {
        return (function (t) {
          if (null == r) throw "runJob";
          return r;
        })().runJob(t);
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return S;
      }),
        n.d(e, "e", function () {
          return E;
        }),
        n.d(e, "b", function () {
          return O;
        }),
        n.d(e, "i", function () {
          return A;
        }),
        n.d(e, "c", function () {
          return y;
        }),
        n.d(e, "h", function () {
          return C;
        }),
        n.d(e, "k", function () {
          return L;
        }),
        n.d(e, "a", function () {
          return T;
        }),
        n.d(e, "g", function () {
          return w;
        }),
        n.d(e, "j", function () {
          return I;
        }),
        n.d(e, "f", function () {
          return k;
        });
      var r = n(1),
        i = n(13),
        a = n(19),
        s = n(27),
        u = n(18),
        o = n(59),
        l = n(107),
        c = n(243),
        d = n(260),
        h = n(14),
        v = n(47),
        f = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Pz = () => {
                this.props.backend.sendGroupInvitations(
                  this.props.group.jid,
                  this.props.participants.map((t) => t.invitation)
                );
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.group !== t.group ||
                n.participants !== t.participants ||
                n.user !== t.user)
            );
          }
          render() {
            var t = [],
              e = [];
            return (
              this.props.participants.forEach((n, i) => {
                var a = n.contact,
                  s = n.invitation;
                e.push(
                  (0, r.b)(2, c.a, { className: "Pn", contact: a }, s.jid)
                ),
                  (e.length !== h.l &&
                    i !== this.props.participants.length - 1) ||
                    (t.push((0, r.f)(1, "div", "Pg", e, 0, null, t.length)),
                    (e = []));
              }),
              (0, r.b)(2, d.a, {
                title: 498,
                right: 490,
                onSoftRight: this.Pz,
                left: 864,
                onSoftLeft: "CLOSE",
                close: a.a,
                children: (0, r.f)(
                  1,
                  "div",
                  "Pf",
                  [
                    (0, r.f)(
                      1,
                      "div",
                      "Ph",
                      [
                        (0, r.f)(
                          1,
                          "div",
                          "Pi Fa",
                          (0, r.b)(2, l.c, {
                            className: "Pm",
                            jid: this.props.group.jid,
                            type: "thumb",
                          }),
                          2
                        ),
                        (0, r.f)(
                          1,
                          "div",
                          "Pj",
                          [
                            (0, r.f)(
                              1,
                              "div",
                              "Pk FV FS FY FU",
                              (0, v.b)(this.props.group.groupInfo.title),
                              0
                            ),
                            (0, r.f)(
                              1,
                              "div",
                              "Pl FX FS FY FU",
                              (0, r.b)(2, u.b, { l10n: 497 }),
                              2
                            ),
                          ],
                          4
                        ),
                      ],
                      4
                    ),
                    t,
                  ],
                  0
                ),
              })
            );
          }
        },
        p = (0, o.f)(
          f,
          (t, e) => {
            var n = t.chatlist.chats[e.chatId];
            return n && "GROUP" === n.type
              ? {
                  group: n,
                  invitations: e.invitations,
                  user: t.user.jid,
                  contacts: t.contacts,
                }
              : (__LOG__(
                  3
                )`SendGroupInviteDialog: group ${e.chatId} does not exist or is not a group chat`,
                SEND_LOGS("invitation-invalid-group"),
                null);
          },
          (t, e) => {
            var n = [];
            return (
              t.invitations.forEach((e) => {
                var r = t.contacts[e.jid];
                r &&
                  r.phonebookPhone &&
                  !r.noWhatsApp &&
                  n.push({ contact: r, invitation: e });
              }),
              { group: t.group, participants: n, user: t.user, backend: e }
            );
          }
        ),
        _ = n(11),
        m = "Ou";
      function g(t, e, n) {
        var r = e.error.reason;
        (0, a.e)({ title: 243, text: n[r] || n.unknown });
      }
      function b(t, e, n, i, o) {
        var l = 1 === n.length ? [(0, s.f)(i, n[0].jid), 6] : [n.length, 5],
          c = o
            ? () =>
                (0, r.f)(
                  1,
                  "div",
                  null,
                  [(0, r.b)(2, u.b, { l10n: l }), (0, r.f)(1, "div", m, o, 0)],
                  4
                )
            : l;
        (0, a.g)({
          title: 18,
          text: c,
          left: 864,
          onSoftLeft: "CLOSE",
          right: 17,
          onSoftRight: () => {
            (0, a.b)((0, r.b)(2, p, { chatId: e, invitations: n }));
          },
        });
      }
      function S(t, e, n) {
        var r;
        switch (e.error.reason) {
          case "subject-too-long":
            r = [n, 109];
            break;
          case "too-many-groups":
            r = [n, 110];
            break;
          case "rate-limit":
            r = [n, 108];
            break;
          case "no-network":
            return;
          default:
            e.error.reason, (r = [n, 111]);
        }
        (0, a.e)({ title: 243, text: r });
      }
      function E(t, e, n, i, o) {
        if (n.failures && 0 !== n.failures.length) {
          var l = [],
            c = n.failures,
            d = [];
          c.forEach((t) => {
            var e = t.error,
              n = t.jid;
            switch (e.reason) {
              case "add-request-required":
                o
                  ? d.push({
                      jid: n,
                      code: e.extra.code,
                      expiration: e.extra.expiration,
                    })
                  : l.push(
                      (0, r.f)(
                        1,
                        "div",
                        l.length > 0 ? m : void 0,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, n), 0] }),
                        2,
                        null,
                        n
                      )
                    );
                break;
              case "add-not-allowed":
                l.push(
                  (0, r.f)(
                    1,
                    "div",
                    l.length > 0 ? m : void 0,
                    (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, n), 0] }),
                    2,
                    null,
                    n
                  )
                );
                break;
              case "business-not-allowed":
                l.push(
                  (0, r.f)(
                    1,
                    "div",
                    l.length > 0 ? m : void 0,
                    (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, n), 1] }),
                    2,
                    null,
                    n
                  )
                );
                break;
              case "too-many-participants":
                l.push(
                  (0, r.f)(
                    1,
                    "div",
                    l.length > 0 ? m : void 0,
                    (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, n), 4] }),
                    2,
                    null,
                    n
                  )
                );
                break;
              default:
                e.reason,
                  l.push(
                    (0, r.f)(
                      1,
                      "div",
                      l.length > 0 ? m : void 0,
                      (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, n), 0] }),
                      2,
                      null,
                      n
                    )
                  );
            }
          }),
            d.length > 0
              ? b(0, e, d, i, l)
              : l.length > 0 &&
                (0, a.e)({
                  title: 243,
                  text: () => (0, r.f)(1, "div", null, l, 0),
                });
        }
      }
      function O(t, e, n, i, o) {
        return () => {
          if ((t.goBack(), n.error))
            g(0, n, {
              "not-an-admin": 13,
              "not-in-group": 14,
              "group-not-found": 12,
              "rate-limit": 16,
              unknown: 11,
            });
          else if (n.failures) {
            var l = n.failures;
            if (0 !== l.length) {
              var c = [],
                d = [],
                h = 0,
                v = null;
              l.forEach((t) => {
                var e = t.jid,
                  n = t.error;
                switch (n.reason) {
                  case "add-not-allowed":
                    c.push(
                      (0, r.f)(
                        1,
                        "div",
                        c.length > 0 ? m : void 0,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, e), 0] }),
                        2,
                        null,
                        e
                      )
                    );
                    break;
                  case "add-request-required":
                    o
                      ? d.push({
                          jid: e,
                          code: n.extra.code,
                          expiration: n.extra.expiration,
                        })
                      : c.push(
                          (0, r.f)(
                            1,
                            "div",
                            c.length > 0 ? m : void 0,
                            (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, e), 0] }),
                            2,
                            null,
                            e
                          )
                        );
                    break;
                  case "business-not-allowed":
                    c.push(
                      (0, r.f)(
                        1,
                        "div",
                        c.length > 0 ? m : void 0,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, e), 1] }),
                        2,
                        null,
                        e
                      )
                    );
                    break;
                  case "user-left-recently":
                    h++, null == v && (v = (0, s.g)(i, e));
                    break;
                  case "too-many-participants":
                    c.push(
                      (0, r.f)(
                        1,
                        "div",
                        c.length > 0 ? m : void 0,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, e), 4] }),
                        2,
                        null,
                        e
                      )
                    );
                    break;
                  default:
                    n.reason,
                      c.push(
                        (0, r.f)(
                          1,
                          "div",
                          c.length > 0 ? m : void 0,
                          (0, r.b)(2, u.b, { l10n: [(0, s.g)(i, e), 0] }),
                          2,
                          null,
                          e
                        )
                      );
                }
              }),
                h > 0
                  ? (0, a.e)({
                      title: 243,
                      text: () =>
                        h > 1
                          ? (0, r.b)(2, u.b, { l10n: [h, 3] })
                          : (0, r.b)(2, u.b, { l10n: [v, 2] }),
                    })
                  : d.length > 0
                  ? b(0, e, d, i, c)
                  : c.length > 0 &&
                    (0, a.e)({
                      title: 243,
                      text: () => (0, r.f)(1, "div", null, c, 0),
                    });
            }
          }
        };
      }
      function A(t, e) {
        e.error
          ? (e.error.reason, (0, a.e)({ title: 243, text: 741 }))
          : (e.result, (0, a.e)({ title: 743, text: 742 }));
      }
      function y(t, e, n) {
        return () => {
          if (e.error)
            g(0, e, {
              "not-an-admin": 117,
              "not-in-group": 118,
              "group-not-found": 116,
              unknown: 115,
            });
          else if (e.failures) {
            var t = e.failures;
            if (0 !== t.length) {
              var i = [];
              t.forEach((t) => {
                var e = t.jid;
                switch (t.error.reason) {
                  case "is-superadmin":
                    i.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(n, e), 33] }),
                        2,
                        null,
                        e
                      )
                    );
                    break;
                  default:
                    i.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(n, e), 230] }),
                        2,
                        null,
                        e
                      )
                    );
                }
              }),
                i.length > 0 &&
                  (0, a.e)({
                    title: 243,
                    text: () => (0, r.f)(1, "div", null, i, 0),
                  });
            }
          }
        };
      }
      function C(t, e, n) {
        return () => {
          if (e.error)
            g(0, e, {
              "not-an-admin": 718,
              "not-in-group": 719,
              "group-not-found": 717,
              unknown: 716,
            });
          else if (e.failures) {
            var t = e.failures;
            if (0 !== t.length) {
              var i = [];
              t.forEach((t) => {
                var e = t.jid;
                "is-superadmin" === t.error.reason
                  ? i.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(n, e), 231] }),
                        2,
                        null,
                        e
                      )
                    )
                  : i.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(n, e), 230] }),
                        2,
                        null,
                        e
                      )
                    );
              }),
                i.length > 0 &&
                  (0, a.e)({
                    title: 243,
                    text: () => (0, r.f)(1, "div", null, i, 0),
                  });
            }
          }
        };
      }
      function L(t, e, n) {
        return () => {
          if (e.error)
            g(0, e, {
              "not-an-admin": 768,
              "not-in-group": 769,
              "group-not-found": 767,
              unknown: 766,
            });
          else if (e.failures) {
            var t = e.failures;
            if (0 !== t.length) {
              var i = [];
              t.forEach((t) => {
                var e = t.jid;
                "no-invitation" === t.error.reason
                  ? i.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(n, e), 48] }),
                        2,
                        null,
                        e
                      )
                    )
                  : i.push(
                      (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, u.b, { l10n: [(0, s.g)(n, e), 47] }),
                        2,
                        null,
                        e
                      )
                    );
              }),
                i.length > 0 &&
                  (0, a.e)({
                    title: 243,
                    text: () => (0, r.f)(1, "div", null, i, 0),
                  });
            }
          }
        };
      }
      function T(t, e) {
        var n,
          r = 243;
        switch (e.error.reason) {
          case "too-many-participants":
            n = 4;
            break;
          case "group-not-found":
            n = 3;
            break;
          case "invalid-request":
            n = 6;
            break;
          case "rate-overlimit":
            (r = 8), (n = 7);
            break;
          default:
            n = 5;
        }
        (0, a.e)({ title: r, text: n });
      }
      function w(t, e) {
        var n;
        switch (e.error.reason) {
          case "too-many-participants":
            n = 4;
            break;
          case "group-not-found":
            n = 3;
            break;
          case "not-community-group":
            n = 507;
            break;
          case "not-community-member":
            n = 508;
            break;
          default:
            n = 5;
        }
        (0, a.e)({ title: 243, text: n });
      }
      function I(t, e) {
        e.error
          ? (e.error.reason, (0, a.e)({ title: 243, text: 741 }))
          : (e.result, (0, a.e)({ title: 743, text: 742 }));
      }
      function k(t, e) {
        var n = (0, _.y)(t).find((t) => "GROUP" === t.type && t.jid === e);
        return null != n && "GROUP" === n.type ? n : null;
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return A;
      });
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(61),
        o = n(381),
        l = n(245),
        c = n(18),
        d = n(327),
        h = n(268),
        v = n(394),
        f = n(21);
      function p(t, e) {
        var n = (function (t) {
            return t.map((t, e) => e);
          })(e),
          r = e.reduce(
            (t, e, n) => (e.selected ? { item: n, scrollFromTop: "start" } : t),
            null
          );
        return { title: t, items: e, indexes: n, start: r };
      }
      var _ = class extends u.b {
        constructor(t, e) {
          super(t, e),
            (this.Fc = () => {
              this.setState((t) => {
                var e = t.selectedIndex;
                return { selectedIndex: Math.max(0, e - 1) };
              });
            }),
            (this.Fb = () => {
              this.setState((t) => {
                var e = t.selectedIndex;
                return {
                  selectedIndex: Math.min(this.props.items.length - 1, e + 1),
                };
              });
            });
          var n = t.initialSelectedIndex;
          (this.state = { selectedIndex: -1 !== n && null != n ? n : 0 }),
            (this.Fa = (0, f.g)());
        }
        addSoftKeys(t) {
          var e = this.props.items[this.state.selectedIndex];
          t.setCenterLabel(e.softkeyText, () => {
            e.action();
          }),
            this.Fa
              ? t.setLeftRightArrows(this.Fb, this.Fc)
              : t.setLeftRightArrows(this.Fc, this.Fb);
        }
        render() {
          var t = this.props,
            e = t.initialSelectedIndex,
            n = t.selected;
          return (0, r.f)(
            1,
            "div",
            null,
            (0, r.b)(2, v.a, {
              items: this.props.items.map((t, e) => ({
                key: e,
                label: t.label,
              })),
              selectedIndex: n ? this.state.selectedIndex : null,
              activeIndex: e,
              icon: m,
            }),
            2
          );
        }
      };
      function m(t) {
        return (0, r.f)(1, "div", (0, s.a)("AY", t.className), t.item.label, 0);
      }
      var g = class extends u.b {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.item !== t.item ||
                n.selected !== t.selected ||
                n.highlighted !== t.highlighted ||
                n.openSubMenu !== t.openSubMenu)
            );
          }
          addSoftKeys(t) {
            var e = this.props.item;
            if (!e.disabled)
              if (e.action) t.setCenterLabel(902, e.action);
              else if (e.children) {
                var n = e.label,
                  r = e.children;
                t.setCenterLabel(902, () => {
                  this.props.openSubMenu(n, r);
                });
              }
          }
          render() {
            var t = this.props,
              e = t.item,
              n = t.highlighted;
            if ("horizontal-menu" !== e.type) {
              var i = (0, s.a)(
                  "AR",
                  n ? "AS" : null,
                  e.action || e.children ? null : "AV",
                  e.disabled && "AW"
                ),
                a = (0, s.a)("AT", n ? "AU" : null, e.disabled && "AX"),
                u = null;
              switch (e.type) {
                case "submenu":
                  u = (0, r.b)(2, o.a, { className: a });
                  break;
                case "checkbox":
                  u = (0, r.b)(2, h.a, { selected: n, checked: e.checked });
                  break;
                case "radio":
                  u = (0, r.b)(2, d.a, {
                    selected: n,
                    checked: e.checked,
                    disabled: e.disabled,
                  });
              }
              return (0, r.f)(
                1,
                "div",
                i,
                [
                  "function" == typeof e.label
                    ? e.label(n)
                    : (0, r.b)(2, c.b, { l10n: e.label }),
                  u,
                ],
                0
              );
            }
          }
        },
        b = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.renderItem = (t, e) => {
                var n,
                  i = this.props,
                  a = i.level.items[t];
                return "horizontal-menu" === a.type
                  ? (0, r.b)(2, _, {
                      selected: e,
                      items: a.items,
                      initialSelectedIndex:
                        null != (n = a.initialSelectedIndex) ? n : void 0,
                    })
                  : (0, r.b)(2, g, {
                      item: a,
                      selected: e && i.isTopLevel,
                      highlighted: e,
                      openSubMenu: i.openSubMenu,
                    });
              }),
              t
            );
          }
          render() {
            var t = this.props,
              e = t.level,
              n = t.preventLoop,
              a = { opacity: t.isTopLevel ? 1 : 0 },
              s =
                "function" == typeof e.title
                  ? e.title()
                  : "NO_TITLE" !== e.title
                  ? (0, r.f)(
                      1,
                      "div",
                      "AO X FV FS",
                      (0, r.b)(2, c.b, { l10n: e.title }),
                      2
                    )
                  : null;
            return (0, r.f)(
              1,
              "div",
              "AN W",
              [
                s,
                (0, r.f)(
                  1,
                  "div",
                  "AP Y",
                  (0, r.b)(2, l.b, {
                    items: e.indexes,
                    keyOf: E,
                    start: e.start,
                    renderItem: this.renderItem,
                    className: "AQ",
                    preventLoop: n,
                  }),
                  2
                ),
              ],
              0,
              { style: i.h(a) }
            );
          }
        },
        S = class extends u.a {
          constructor(t, e) {
            super(t, e),
              (this.Fd = (t, e) => {
                this.setState((n) => ({ stack: [...n.stack, p(t, e)] }));
              }),
              (this.Fe = () => {
                var t = this.state.stack;
                1 === t.length
                  ? (this.props.closeOverlay(),
                    this.props.onClose && this.props.onClose())
                  : this.setState({ stack: t.slice(0, -1) });
              }),
              (this.state = { stack: [p(t.title, t.items)] });
          }
          addSoftKeys(t) {
            t.setBack(this.Fe);
          }
          render() {
            var t = this.state.stack;
            return t.map((e, n) =>
              (0, r.b)(
                2,
                b,
                {
                  preventLoop: this.props.preventLoop,
                  level: e,
                  isTopLevel: n === t.length - 1,
                  openSubMenu: this.Fd,
                },
                n
              )
            );
          }
        };
      function E(t) {
        return String(t);
      }
      function O() {}
      var A = class {
        constructor(t, e) {
          (this.parent = null),
            (this.Fg = !1),
            (this.Fh = []),
            (this.title = t || 643),
            (this.Fi = O),
            (this.Ff = null == e ? void 0 : e.preventLoop);
        }
        setOnClose(t) {
          this.Fj = t;
        }
        Fk() {
          null != this.parent ? this.parent.Fk() : this.Fi();
        }
        Fl(t, e, n) {
          this.Fk(), t(e, n);
        }
        setDefault(t) {
          this.Fg &&
            __LOG__(
              3
            )`MenuBuilder.setDefault: menu already has a default item.`;
          var e = this.Fh.find((e) => e.name === t);
          e
            ? ((this.Fg = !0), (e.selected = !0))
            : __LOG__(3)`MenuBuilder.setDefault: item ${t} does not exist.`;
        }
        addNamed(t, e, n, r, i) {
          this.Fh.push({
            type: "entry",
            label: e,
            name: t,
            action: () => {
              this.Fl(n, r, i);
            },
          });
        }
        add(t, e, n, r) {
          this.Fh.push({
            type: "entry",
            label: t,
            action: () => {
              this.Fl(e, n, r);
            },
          });
        }
        addEntry(t, e, n, r) {
          this.Fh.push({
            type: "entry",
            label: t,
            selected: n,
            disabled: r,
            action: () => {
              this.Fl(e);
            },
          });
        }
        addRadioEntry(t, e, n, r, i) {
          this.Fh.push({
            type: "radio",
            label: t,
            checked: e,
            selected: r,
            disabled: i,
            action: () => {
              this.Fl(n);
            },
          });
        }
        addCheckboxEntry(t, e, n, r) {
          this.Fh.push({
            type: "checkbox",
            label: t,
            checked: e,
            selected: r,
            action: () => {
              this.Fl(n);
            },
          });
        }
        addHorizontalMenuEntry(t, e) {
          this.Fh.push({
            type: "horizontal-menu",
            initialSelectedIndex: e,
            items: t.map((t) => {
              var e = t.action;
              return {
                label: t.label,
                softkeyText: t.softkeyText,
                action: () => {
                  this.Fl(e);
                },
              };
            }),
          });
        }
        childMenu(t) {
          if (
            (null != t.parent &&
              __LOG__(
                3
              )`Child menu has already been assigned to a parent menu, consider creating a new one.`,
            !t.isEmpty())
          ) {
            var e = t.title;
            if ("NO_TITLE" === e)
              return (
                __LOG__(4)`A children menu group must have a title`,
                void SEND_LOGS("menu-children-missing-title")
              );
            (t.parent = this),
              this.Fh.push({ type: "submenu", label: e, children: t.Fh });
          }
        }
        isEmpty() {
          return 0 === this.Fh.length;
        }
        buildMenu(t) {
          return this.isEmpty()
            ? null
            : ((this.Fi = t),
              (0, r.b)(2, S, {
                title: this.title,
                items: this.Fh,
                closeOverlay: this.Fi,
                onClose: this.Fj,
                preventLoop: this.Ff,
              }));
        }
      };
    },
    function (t, e, n) {
      function r(t, e) {
        if (t.parentElement instanceof HTMLElement) {
          var n = t.parentElement;
          if (e.force) return void t.scrollIntoView(Object.assign({}, e));
          var r = t.offsetTop - n.offsetTop < n.scrollTop,
            i =
              t.offsetTop + t.clientHeight - n.offsetTop >
              n.scrollTop + n.clientHeight;
          (r || i) && t.scrollIntoView(Object.assign({}, e));
        }
      }
      n.d(e, "e", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "i", function () {
          return u;
        }),
        n.d(e, "h", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return l;
        }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return d;
        });
      var i = function (t) {
          t && t.requestFullscreen();
        },
        a = function () {
          document.exitFullscreen();
        };
      function s() {
        return null != document.fullscreenElement;
      }
      var u = function () {
          navigator.volumeManager.requestUp();
        },
        o = function () {
          navigator.volumeManager.requestDown();
        },
        l = function (t) {
          navigator.vibrate(t);
        };
      function c(t) {
        var e = document.querySelector("meta[name=theme-color]");
        e && e.setAttribute("content", t);
      }
      function d() {
        return "visible" === document.visibilityState;
      }
    },
    function (t, e, n) {
      function r(t) {
        return URL.createObjectURL(t);
      }
      function i(t) {
        URL.revokeObjectURL(t);
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return f;
        });
      var r = n(1),
        i = (n(13), n(326)),
        a = n(390),
        s = n(59),
        u = n(290),
        o = n(61),
        l = n(76),
        c = n(23),
        d = n.n(c),
        h = class extends o.a {
          addSoftKeys(t) {
            t.setFull(894);
          }
          renderConversationTitle(t, e) {
            return "ONE_TO_ONE" === t.type
              ? (0, r.b)(2, i.b, { chat: t, contacts: e })
              : "GROUP" === t.type
              ? (0, r.b)(2, i.a, { chat: t })
              : (t.type, (0, r.b)(2, i.c, { chat: t }));
          }
          render() {
            var t = null,
              e = !1;
            switch (this.props.type) {
              case "conversation":
                (e = l.g),
                  (t = this.renderConversationTitle(
                    this.props.chat,
                    this.props.contacts
                  ));
                break;
              default:
                this.props.type;
            }
            return (0, r.b)(2, u.a, {
              title: t,
              tallTitle: e,
              children: (0, r.f)(
                1,
                "div",
                (0, d.a)("AE JQ", this.props.shareSingleMedia && "AF"),
                (0, r.b)(2, a.a, { type: "center" }),
                2
              ),
            });
          }
        },
        v = (0, s.e)((0, o.e)(h), (t) =>
          "main" === t.mode && t.msglist && !t.screens.length
            ? {
                type: "conversation",
                chat: t.msglist.chat,
                contacts: t.contacts,
              }
            : { type: "suspense" }
        ),
        f = (0, s.e)((0, o.e)(h, { fullscreen: !0 }), (t) =>
          "main" === t.mode && t.msglist && !t.screens.length
            ? {
                type: "conversation",
                chat: t.msglist.chat,
                contacts: t.contacts,
              }
            : { type: "suspense", shareSingleMedia: !0 }
        );
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "e", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "a", function () {
          return p;
        });
      var r = n(78),
        i = n(190),
        a = n(3),
        s = "timeSpentActivity",
        u = 12e4,
        o = 3 * a.d;
      function l() {
        return Math.floor(Date.now() / 1e3);
      }
      var c = null;
      function d() {
        c ||
          (c = new (class {
            constructor() {
              (this.AK = !1),
                (this.AL = new r.a(() => {
                  var t = this.AL;
                  this.AK
                    ? t.onOrBefore(5e3)
                    : (localStorage.setItem(s, JSON.stringify(this.AJ)),
                      t.onOrBefore(u));
                }));
              var t = l(),
                e = localStorage.getItem(s),
                n =
                  null != e
                    ? JSON.parse(e)
                    : (function (t) {
                        return {
                          startTime: t,
                          sequenceNumber: 0,
                          cumSessionsLength: 0,
                          foregroundCount: 0,
                          sessionStartTime: null,
                          lastInteractionTime: t,
                        };
                      })(t);
              (this.AJ = n), this.AL.onOrBefore(u);
            }
            AM() {
              var t = this.AJ,
                e = t.sessionStartTime,
                n = t.lastInteractionTime;
              if (null != e) {
                var r = n - e + 1;
                (this.AJ.cumSessionsLength += r),
                  (this.AJ.sessionStartTime = null);
              }
            }
            AN(t) {
              var e = this.AJ,
                n = e.lastInteractionTime,
                r = e.startTime;
              n > t || t - r > o ? this.AO(t) : t - n > 30 && this.AM();
            }
            AO(t) {
              null != this.AJ.sessionStartTime && this.AM();
              var e = this.AJ,
                n = e.startTime,
                r = e.cumSessionsLength,
                a = e.foregroundCount,
                s = e.sequenceNumber,
                u = e.lastInteractionTime,
                o = u > t,
                l = Math.max(t, u);
              (this.AK = !0),
                WAM.logAsync("regular", 1502, void 0, [
                  1,
                  0,
                  n,
                  2,
                  0,
                  l - n + 1,
                  3,
                  0,
                  r,
                  4,
                  0,
                  o ? 1 : 0,
                  5,
                  0,
                  a,
                  6,
                  0,
                  s,
                ]).finally(() => {
                  this.AK = !1;
                }),
                (0, i.forceFlushBuffers)(),
                (e.startTime = t);
              var c = e.sequenceNumber + 1;
              (e.sequenceNumber = c > 9999 ? 0 : c),
                (e.cumSessionsLength = 0),
                (e.foregroundCount = 0);
            }
            AP(t) {
              var e = this.AJ;
              this.AN(t),
                null == e.sessionStartTime && (e.sessionStartTime = t),
                (e.lastInteractionTime = t);
            }
            recordInteraction() {
              var t = l();
              t !== this.AJ.lastInteractionTime && this.AP(t);
            }
            recordAppBackground() {
              this.AL.forceRunNow();
            }
            recordAppForeground() {
              var t = l(),
                e = this.AJ;
              e.lastInteractionTime !== t && this.AM(),
                this.AP(t),
                (e.foregroundCount += 1);
            }
            deinitialize() {
              this.AL.cancel(), localStorage.removeItem(s);
            }
          })()).recordAppForeground();
      }
      function h() {
        c && c.recordInteraction();
      }
      function v() {
        c && c.recordAppBackground();
      }
      function f() {
        c && c.recordAppForeground();
      }
      function p() {
        c && (c.deinitialize(), (c = null));
      }
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return u;
        });
      var r = new Map();
      function i() {
        return r;
      }
      function a(t, e) {
        return t.get(e);
      }
      function s(t, e, n) {
        if (t.get(e) === n) return t;
        var r = new Map(t);
        return r.set(e, n), r;
      }
      function u(t, e) {
        if (!t.has(e)) return t;
        if (1 === t.size) return r;
        var n = new Map();
        return (
          t.forEach((t, r) => {
            r !== e && n.set(r, t);
          }),
          n
        );
      }
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(1),
        i = (n(13), n(23)),
        a = n.n(i),
        s = n(64);
      function u(t) {
        var e = t.className,
          n = t.jid,
          i = t.bold;
        return (0, r.f)(
          1,
          "span",
          (0, a.a)(e, "BV", i && "BW"),
          (0, s.d)(n),
          0,
          { dir: "ltr" }
        );
      }
      function o(t) {
        var e = t.className,
          n = t.phone,
          i = t.bold;
        return (0, r.f)(
          1,
          "span",
          (0, a.a)(e, "BV", i && "BW"),
          (0, s.c)(n),
          0,
          { dir: "ltr" }
        );
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "f", function () {
        return a;
      }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = [];
      function i(t, e) {
        t.dispatch({ type: "AVATARS_STARTED_LOADING", jids: [e] });
      }
      function a(t) {
        var e = r;
        e &&
          ((r = null), t.fireAndForget("backend", "loadAvatars", { jids: e }));
      }
      function s(t, e) {
        var n = t.getStore().getState().screens,
          r = n && n.length > 0 ? n[n.length - 1] : null;
        if ("COMMUNITY_HOME" === (null == r ? void 0 : r.screen.type)) {
          var a;
          if ((i(t, e), !(null == (a = r.screen.props) ? void 0 : a.info)))
            return;
          var s,
            u = r.screen.props.info.jid;
          u !== e && (s = e),
            t.fireAndForget("backend", "loadAvatarV2", {
              parentJid: u,
              subGroupJid: s,
            });
        }
      }
      function u(t, e) {
        i(t, e),
          null != r
            ? r.push(e)
            : t.fireAndForget("backend", "loadAvatars", { jids: [e] });
      }
      function o(t, e, n) {
        i(t, e),
          t.fireAndForget("backend", "loadAvatarGroupInvite", {
            jid: e,
            code: n,
          });
      }
      function l(t, e, n) {
        i(t, e),
          t.fireAndForget("backend", "loadAvatarAddRequest", {
            jid: e,
            addRequest: n,
          });
      }
      function c(t, e) {
        t.dispatch({ type: "AVATARS_UPDATED", changed: [], cleared: [e] });
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return d;
        });
      var r = n(1),
        i = n(13),
        a = n(18),
        s = n(27),
        u = n(59),
        o = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.type !== t.type ||
                n.selected !== t.selected ||
                n.chat !== t.chat ||
                n.WhileIdle !== t.WhileIdle ||
                n.className !== t.className ||
                n.contacts !== t.contacts ||
                n.groupChatState !== t.groupChatState)
            );
          }
          render() {
            var t = this.props;
            if (t.chat.groupInfo.suspended) return null;
            if (t.groupChatState) {
              var e,
                n = t.groupChatState,
                i = n.participant,
                u = n.chatState,
                o = (0, s.g)(t.contacts, i);
              return (
                (e =
                  "typing" === u
                    ? (0, r.b)(2, a.b, { l10n: [o, 215] })
                    : (0, r.b)(2, a.b, { l10n: [o, 214] })),
                (0, r.f)(1, "div", t.className, e, 0)
              );
            }
            if (t.WhileIdle) {
              var l = t.WhileIdle;
              return (0, r.b)(2, l, {
                selected: t.selected,
                chat: t.chat,
                contacts: t.contacts,
                className: t.className,
              });
            }
            return null;
          }
        },
        l = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.type !== t.type ||
                n.selected !== t.selected ||
                n.chat !== t.chat ||
                n.WhileIdle !== t.WhileIdle ||
                n.className !== t.className ||
                n.contacts !== t.contacts ||
                n.oneToOneChatState !== t.oneToOneChatState)
            );
          }
          render() {
            var t,
              e = this.props;
            if (e.oneToOneChatState)
              return (
                "typing" === e.oneToOneChatState
                  ? (t = (0, r.b)(2, a.b, { l10n: 685 }))
                  : (e.oneToOneChatState,
                    (t = (0, r.b)(2, a.b, { l10n: 684 }))),
                (0, r.f)(1, "div", e.className, t, 0)
              );
            if (e.WhileIdle) {
              var n = e.WhileIdle;
              return (0, r.b)(2, n, {
                selected: e.selected,
                chat: e.chat,
                contacts: e.contacts,
                className: e.className,
              });
            }
            return null;
          }
        },
        c = (0, u.c)(l, function (t, e, n) {
          var r = n.chat,
            i = n.selected,
            a = n.className,
            s = n.WhileIdle;
          return {
            type: "ONE_TO_ONE",
            chat: r,
            selected: i,
            contacts: t.contacts,
            WhileIdle: s,
            className: a,
            oneToOneChatState: t.oneToOneChatStates[r.jid] || null,
          };
        }),
        d = (0, u.c)(o, function (t, e, n) {
          var r = n.chat,
            i = n.selected,
            a = n.className,
            s = n.WhileIdle;
          return {
            type: "GROUP",
            chat: r,
            selected: i,
            contacts: t.contacts,
            WhileIdle: s,
            className: a,
            groupChatState: t.groupChatStates[r.jid] || null,
          };
        });
    },
    ,
    ,
    ,
    function (t, e, n) {
      var r = n(1),
        i = (n(13), n(23)),
        a = n.n(i);
      e.a = (t) => {
        var e = t.type,
          n = t.className,
          i = "dialog" === e ? "y v" : "v";
        return (0, r.f)(
          1,
          "div",
          (0, a.a)(i, n),
          [(0, r.f)(1, "div", "z"), (0, r.f)(1, "div", "AA")],
          4
        );
      };
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return v;
        }),
        n.d(e, "c", function () {
          return p;
        });
      var r = n(1),
        i = (n(13), n(27)),
        a = n(425),
        s = n(23),
        u = n.n(s),
        o = n(47),
        l = "ET FY FU";
      function c(t) {
        if (
          null != t.verifiedInfo &&
          "high" === t.verifiedInfo.level &&
          !(function (t, e) {
            return null != t.phonebookPhone && e.name !== t.fullName;
          })(t, t.verifiedInfo)
        )
          return t.verifiedInfo.name;
      }
      function d(t) {
        return (0, r.b)(2, a.a, {
          className: (0, u.a)(
            t.className,
            "EP Fb",
            "small" === t.badgeSize && "EQ"
          ),
        });
      }
      function h(t) {
        return (0, r.f)(
          1,
          "div",
          "ER",
          [
            (0, r.f)(
              1,
              "div",
              (0, u.a)("ES", "no-ellipsis" !== t.noEllipsis && l),
              (0, r.f)(1, "span", null, (0, o.b)(t.verifiedName), 0, {
                dir: "auto",
              }),
              2
            ),
            (0, r.f)(
              1,
              "div",
              "EU",
              (0, r.b)(2, d, { badgeSize: t.badgeSize }),
              2
            ),
          ],
          4
        );
      }
      function v(t, e) {
        var n = c(t);
        return n
          ? (0, r.b)(2, h, {
              verifiedName: n,
              noEllipsis: null == e ? void 0 : e.noEllipsis,
              badgeSize: null == e ? void 0 : e.badgeSize,
            })
          : (0, r.b)(2, i.a, { contact: t });
      }
      function f(t) {
        return (0, r.f)(
          1,
          "div",
          "ER",
          [
            (0, r.f)(
              1,
              "div",
              (0, u.a)("ES", "no-ellipsis" !== t.noEllipsis && l),
              (0, o.b)(t.title),
              0
            ),
            (0, r.f)(
              1,
              "div",
              "EU",
              (0, r.b)(2, d, { badgeSize: t.badgeSize }),
              2
            ),
          ],
          4
        );
      }
      function p(t, e) {
        return t.support
          ? (0, r.b)(2, f, {
              title: t.title,
              noEllipsis: null == e ? void 0 : e.noEllipsis,
              badgeSize: null == e ? void 0 : e.badgeSize,
            })
          : (0, o.b)(t.title);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return m;
        }),
        n.d(e, "e", function () {
          return g;
        }),
        n.d(e, "c", function () {
          return b;
        });
      var r = n(102),
        i = n(37),
        a = n.n(i),
        s = n(140),
        u = n(108),
        o = n(53),
        l = n(233),
        c = n(52);
      function d(t, e) {
        return t.msgIds !== e.msgIds;
      }
      var h = new WeakMap(),
        v = new WeakMap();
      function f(t, e) {
        return h.has(t) || h.set(t, (0, r.e)(e, t.mentionedJids)), h.get(t);
      }
      function p(t) {
        if (!h.has(t)) {
          var e = null;
          switch (t.content.type) {
            case "image":
            case "gif":
            case "video":
              null != t.content.caption &&
                (e = (0, r.e)(t.content.caption, t.mentionedJids));
              break;
            case "text":
              e = (0, r.e)(t.content.text, t.mentionedJids);
          }
          h.set(t, e);
        }
        return h.get(t);
      }
      function _(t, e) {
        if (!v.has(t)) {
          var n = null;
          switch (e.content.type) {
            case "image":
            case "gif":
            case "video":
              null != e.content.caption &&
                (n = (0, r.e)(e.content.caption, e.mentionedJids));
              break;
            case "text":
              n = (0, r.e)(e.content.text, e.mentionedJids);
          }
          v.set(t, n);
        }
        return v.get(t);
      }
      function m(t, e, n) {
        switch (e.type) {
          case "back":
            t.goBack();
            break;
          case "closeAllScreens":
            t.closeAllScreens();
            break;
          case "closeScreen":
            t.dispatch({
              type: "CLOSE_SCREEN",
              id: e.id,
              closeScreensAbove: e.closeScreensAbove,
            });
            var r = e.specifics;
            if (null != r)
              switch (r.from) {
                case "statusReply":
                  var i,
                    c = (0, o.a)(t.getStoreState());
                  (0, s.a)(979),
                    c &&
                      (null == (i = t.statusViewerSession) ||
                        i.replyToStatus(r.statusId, c.contacts, (0, l.c)(n)));
                  break;
                default:
                  return (0, a.a)(r.from);
              }
            break;
          case "openChatNewest":
            t.closeAllScreens(), (0, u.a)(t, e.chatJid, "newest");
            break;
          case "unknown":
            __LOG__(
              4
            )`applyAfterSending: unknown action type should be handled before calling this function`;
            break;
          default:
            return (0, a.a)(e.type);
        }
      }
      function g(t, e, n, r) {
        t.quoted
          ? r({
              type: "quote",
              key: "quote-" + t.id,
              grouping: e,
              msg: t,
              quoted: t.quoted,
              formatting: _(t, t.quoted),
            })
          : t.remoteJid &&
            r({
              type: "quoteGroup",
              key: "quoteGroup-" + t.id,
              grouping: e,
              msg: t,
              groupJid: t.remoteJid,
            });
        var i = t.content;
        switch (i.type) {
          case "sticker":
            r({ type: "sticker", key: t.id, grouping: e, msg: t, content: i });
            break;
          case "image":
            if (null != i.viewOnceState) {
              r({
                type: "viewOnceImage",
                key: t.id,
                grouping: e,
                msg: t,
                content: i,
              });
              break;
            }
            r({ type: "image", key: t.id, grouping: e, msg: t, content: i }),
              i.caption &&
                r({
                  type: "text",
                  key: "caption-" + t.id,
                  grouping: 0,
                  msg: t,
                  content: i.caption,
                  formatting: f(t, i.caption),
                });
            break;
          case "video":
            if (null != i.viewOnceState) {
              r({
                type: "viewOnceVideo",
                key: t.id,
                grouping: e,
                msg: t,
                content: i,
              });
              break;
            }
            r({ type: "video", key: t.id, grouping: e, msg: t, content: i }),
              i.caption &&
                r({
                  type: "text",
                  key: "caption-" + t.id,
                  grouping: 0,
                  msg: t,
                  content: i.caption,
                  formatting: f(t, i.caption),
                });
            break;
          case "gif":
            r({ type: "gif", key: t.id, grouping: e, msg: t, content: i }),
              i.caption &&
                r({
                  type: "text",
                  key: "caption-" + t.id,
                  grouping: 0,
                  msg: t,
                  content: i.caption,
                  formatting: f(t, i.caption),
                });
            break;
          case "text":
            var a = i.linkPreview;
            a &&
              r({
                type: "linkPreview",
                key: "linkPreview-" + t.id,
                grouping: e,
                msg: t,
                content: a,
              }),
              r({
                type: "text",
                key: t.id,
                grouping: 0,
                msg: t,
                content: i.text,
                formatting: f(t, i.text),
              });
            break;
          case "voice":
            r({ type: "voice", key: t.id, grouping: 0, msg: t, content: i });
            break;
          case "futureproof":
          case "ciphertext":
          case "placeholder":
          case "revoked":
            r({ type: "special", key: t.id, grouping: 0, msg: t, content: i });
            break;
          case "privacy":
            n({
              type: "privacyBanner",
              key: t.id,
              grouping: 0,
              msg: t,
              content: i,
            });
            break;
          case "keyschanged":
          case "biz":
          case "ephemeral_change":
          case "ephemeral_change_fail":
          case "default-disappearing-mode":
          case "keep-in-chat":
          case "contact_block_change":
          case "gp2":
            n({
              type: "notification",
              key: t.id,
              grouping: 0,
              msg: t,
              content: i,
            });
            break;
          case "vcard":
            r({ type: "vcard", key: t.id, grouping: e, msg: t, content: i });
            break;
          case "location":
            r({
              type: "locationMap",
              key: t.id,
              grouping: e,
              msg: t,
              content: i,
            }),
              (i.name || i.address) &&
                r({
                  type: "locationName",
                  key: "location-" + t.id,
                  grouping: 0,
                  msg: t,
                  content: i,
                });
            break;
          case "group_invite":
            r({
              type: "groupInvite",
              key: t.id,
              grouping: e,
              msg: t,
              content: i,
            }),
              i.caption &&
                r({
                  type: "groupInviteCaption",
                  key: "caption-" + t.id,
                  grouping: 0,
                  msg: t,
                  content: i,
                  caption: i.caption,
                  formatting: f(t, i.caption),
                });
            break;
          case "rich_hsm":
            var s = i.richContent,
              u = i.title,
              o = i.footer,
              l = i.content,
              d = i.buttons;
            if (s)
              switch (s.type) {
                case "image":
                  r({
                    type: "image",
                    key: "hsm-image-" + t.id,
                    grouping: e,
                    msg: t,
                    content: s,
                  });
                  break;
                case "video":
                  r({
                    type: "video",
                    key: "hsm-video-" + t.id,
                    grouping: e,
                    msg: t,
                    content: s,
                  });
                  break;
                case "location":
                  r({
                    type: "locationMap",
                    key: "hsm-location-" + t.id,
                    grouping: e,
                    msg: t,
                    content: s,
                  });
                  break;
                default:
                  s.type,
                    r({
                      type: "document",
                      key: "hsm-document-" + t.id,
                      grouping: e,
                      msg: t,
                      content: s,
                    });
              }
            r({
              type: "richHsmText",
              key: "hsm-text-" + t.id,
              grouping: 0,
              msg: t,
              content: { title: null == s ? u : null, content: l, footer: o },
              formatting: f(t, i.content),
            }),
              d &&
                d.forEach((e, n) => {
                  r({
                    type: "richHsmButton",
                    key: `hsm-button-${t.id}-${n}`,
                    grouping: 0,
                    msg: t,
                    content: e,
                    buttonIndex: n,
                  });
                });
            break;
          case "document":
            r({ type: "document", key: t.id, grouping: e, msg: t, content: i });
            break;
          case "poll":
            var h = i.options,
              v = i.name,
              p = i.pollVotes;
            r({
              type: "poll",
              key: t.id,
              grouping: e,
              msg: t,
              content: i,
              formatting: f(t, v),
            }),
              h.forEach((e, n) => {
                var i = { pollOptionId: n, name: e };
                if (null != p) {
                  var a = p.voteCounts,
                    s = p.maxVotes,
                    u = p.myVotes,
                    o = a.get(n) || 0;
                  i.votes = {
                    count: o,
                    maxVotes: s,
                    votedByMe:
                      "voted" === u.type &&
                      "reset" !== u.votes &&
                      u.votes.has(n),
                    myVotes: u,
                  };
                }
                r({
                  type: "poll-option",
                  key: `poll-option-${t.id}-${n}`,
                  grouping: 0,
                  msg: t,
                  content: i,
                });
              }),
              (0, c.o)() &&
                r({
                  type: "poll-results-button",
                  key: "poll-results-button-" + t.id,
                  grouping: 0,
                  msg: t,
                  content: i,
                });
            break;
          default:
            i.type,
              __LOG__(4)`Missing msg content type ${i.type} in msglistReducer`;
        }
      }
      function b(t) {
        switch (t) {
          case "liveLocation":
            return 324;
          case "document":
            return 323;
          case "call":
            return 322;
          case "sendPayment":
          case "requestPayment":
            return 326;
          case "sticker":
            return 327;
          case "reaction":
            return 707;
          case "keepInChat":
            return (0, c.h)() ? 532 : 325;
          case "viewOnceMessageV2":
            return 328;
          case "viewOnceMessageV2Disabled":
            return 329;
          default:
            return 325;
        }
      }
    },
    function (t, e, n) {
      n.d(e, "c", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return d;
        });
      var r = n(40),
        i = n(427),
        a = n(76),
        s = n(19);
      function u(t, e, n) {
        if ("rewind" === n) return 0;
        var r =
            t +
            Math.max(1, Math.min(5, Math.round(0.1 * e))) *
              ("forward" === n ? 1 : -1),
          i = Math.min(e + 1, Math.max(0, r));
        return i < 1 ? 0 : i;
      }
      function o(t, e, n, i) {
        var a = i.id;
        switch (n.type) {
          case "idle":
            e
              ? t.setCenterLabel(920, (t) => {
                  c(t, i);
                })
              : t.setCenterLabel(893, (t) => {
                  t.downloadMedia(a, "user");
                });
            break;
          case "pending":
          case "processing":
            t.setCenterLabel(864, (t) => {
              (function (t, e) {
                t.fireAndForget("backend", "cancelMedia", { msgId: e });
              })(t, a);
            });
            break;
          default:
            n.type,
              "tooBig" === n.error
                ? t.setCenterLabel(885, (t) => {
                    (0, s.e)({ title: 243, text: [r.b, 58] });
                  })
                : "noLongerExists" === n.error
                ? t.setCenterLabel(885, (t) => {
                    (0, s.e)({ title: 243, text: 563 });
                  })
                : "notEnoughSpace" === n.error
                ? t.setCenterLabel(885, (t) => {
                    (function (t, e) {
                      l(t, 618, e);
                    })(t, a);
                  })
                : "notEnoughUploadSpace" === n.error
                ? t.setCenterLabel(885, (t) => {
                    (0, s.e)({ title: 243, text: 618 });
                  })
                : "disconnected" === n.error
                ? t.setCenterLabel(885, (t) => {
                    (function (t, e) {
                      l(t, 562, e);
                    })(t, a);
                  })
                : (n.error,
                  t.setCenterLabel(920, (t) => {
                    c(t, i);
                  }));
        }
      }
      function l(t, e, n) {
        (0, s.e)({
          title: 243,
          text: e,
          onClose: () => {
            t.updateMediaStatus(n, { type: "idle" });
          },
        });
      }
      function c(t, e) {
        var n;
        "status" === e.origin
          ? t.retryStatusMsg(e.id, {
              from: "statusTab",
              sessionId: null == (n = t.statusSession) ? void 0 : n.id,
            })
          : (0, i.a)(t, e.id, e.chatJid);
      }
      function d(t, e) {
        var n = t.height || a.m,
          r = t.width || a.o,
          i = n / r,
          s = r,
          u = n,
          o = r > n !== a.f;
        return (
          i > a.n
            ? ((r = (r * a.m) / n),
              (n = a.m),
              o && ((s = (r * a.o) / n), (u = a.o)))
            : ((n = (n * a.o) / r),
              (r = a.o),
              o && ((u = (n * a.m) / r), (s = a.m))),
          "swapDimensions" === e
            ? {
                width: n,
                height: r,
                shouldBeSideways: o,
                widthSideway: u,
                heightSideway: s,
                swapDimensions: !0,
              }
            : {
                width: r,
                height: n,
                shouldBeSideways: o,
                widthSideway: s,
                heightSideway: u,
                swapDimensions: !1,
              }
        );
      }
    },
    function (t, e, n) {
      function r(t, e) {
        e &&
          (i(t, e.jobName, e.key),
          t.fireAndForget("backend", "clearUiJobStatus", { jobId: e.jobId }));
      }
      function i(t, e, n) {
        t.dispatch({ type: "CLEAR_UI_JOB", jobName: e, key: n });
      }
      function a(t, e, n) {
        var r = { type: "UI_JOB_SCHEDULED", jobId: e, jobInfo: n };
        t.dispatch(r);
      }
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        });
      var s = (t) => ({
        uiJobsInitialized: (e) =>
          (function (t, e) {
            t.dispatch({ type: "INIT_UI_JOBS", jobs: e });
          })(t, e.jobs),
        uiJobUpdated: (e) => {
          var n = e.jobName,
            r = e.key,
            i = e.status;
          return (function (t, e, n, r) {
            t.dispatch({
              type: "UI_JOB_UPDATED",
              jobName: e,
              key: n,
              status: r,
            });
          })(t, n, r, i);
        },
        uiJobScheduled: (e) => {
          var n = e.jobId,
            r = e.jobInfo;
          return a(t, n, r);
        },
        uiJobCleared: (e) => {
          var n = e.jobName,
            r = e.key;
          return i(t, n, r);
        },
      });
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return f;
      }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return _;
        }),
        n.d(e, "c", function () {
          return m;
        }),
        n.d(e, "d", function () {
          return g;
        }),
        n.d(e, "e", function () {
          return b;
        });
      var r = n(1),
        i = n(13),
        a = n(252),
        s = n(6),
        u = n(21),
        o = n(295),
        l = n(400),
        c = n(3),
        d = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M18.403 0c.81 0 1.592.303 2.191.85l4.347 3.97A3.25 3.25 0 0126 7.22v21.46c0 1.826-1.42 3.32-3.154 3.32H3.154C1.419 32 0 30.506 0 28.681V3.318C0 1.493 1.419 0 3.154 0h15.249zm1.057 24.381H6.54a.762.762 0 00-.104 1.517l.104.007h12.92a.762.762 0 000-1.524zm0-4.571H6.54a.762.762 0 00-.104 1.516l.104.007h12.92a.762.762 0 100-1.523zm0-4.572h-4.976a.762.762 0 000 1.524h4.976a.762.762 0 000-1.524zM8.678 9.143c1.45 0 2.159 1.154 2.108 3.264l.07.002c.387 0 .7.312.7.698v3.718a.699.699 0 01-.7.699h-4.38a.699.699 0 01-.698-.7v-3.717c0-.386.313-.698.699-.698l.069-.002c-.034-2.11.683-3.264 2.132-3.264zm0 .777c-1.019 0-1.5.764-1.464 2.487h2.904c.052-1.724-.422-2.487-1.44-2.487zm10.782.747a.762.762 0 110 1.523h-4.976a.762.762 0 010-1.523h4.976z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        };
      function h(t, e, n) {
        if (t.nodeType === Node.TEXT_NODE) return t.textContent;
        if (t.nodeType !== Node.ELEMENT_NODE) return null;
        var i = t;
        switch (i.tagName.toLowerCase()) {
          case "b":
            return (0, r.f)(1, "b", null, v(i.childNodes, e), 0, null, n);
          case "i":
            return (0, r.f)(1, "i", null, v(i.childNodes, e), 0, null, n);
          case "a":
            var a = i.getAttribute("href");
            return null != a
              ? (0, r.f)(
                  1,
                  "a",
                  null,
                  v(i.childNodes, e),
                  0,
                  { href: a, "data-id": e() },
                  n
                )
              : null;
          case "br":
            return (0, r.f)(1, "br", null, null, 1, null, n);
          default:
            return null;
        }
      }
      function v(t, e) {
        if (1 === t.length) return h(t[0], e, "key");
        for (var n = [], r = 0, i = t.length; r < i; ++r) {
          var a = h(t[r], e, "" + r);
          null != a && n.push(a);
        }
        return n;
      }
      var f = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.text !== t.text || n.getNextLinkId !== t.getNextLinkId)
            );
          }
          render() {
            return (
              (t = this.props.text),
              (e = this.props.getNextLinkId),
              ((n = document.createElement("div")).innerHTML = t),
              v(n.childNodes, e)
            );
            var t, e, n;
          }
        },
        p = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return n !== t && n.svgIcon !== t.svgIcon;
          }
          render() {
            var t = this.props.svgIcon;
            return (
              (t &&
                (function (t) {
                  var e = document.createElement("div");
                  e.innerHTML = t;
                  var n = e.children;
                  if (1 !== n.length)
                    return (
                      __LOG__(
                        4
                      )`UserNotice: invalid SVG icon: only one root element should be present`,
                      null
                    );
                  var i = n[0];
                  if ("svg" !== i.tagName.toLowerCase())
                    return (
                      __LOG__(
                        4
                      )`UserNotice: invalid SVG icon: root element needs to be an SVG`,
                      null
                    );
                  try {
                    (function t(e) {
                      if (
                        "script" === e.tagName.toLowerCase() ||
                        "style" === e.tagName.toLowerCase()
                      )
                        throw new Error("Invalid SVG child tag: " + e.tagName);
                      for (
                        var n = e.attributes, r = 0, i = n.length;
                        r < i;
                        ++r
                      ) {
                        var a = n[r];
                        if ("on" === a.name.substr(0, 2).toLowerCase())
                          throw new Error(
                            "Invalid SVG child attribute: " + a.name
                          );
                      }
                      for (var s = e.children, u = 0, o = s.length; u < o; ++u)
                        t(s[u]);
                    })(i);
                  } catch (t) {
                    return __LOG__(4)`UserNotice: invalid SVG icon: ${t}`, null;
                  }
                  for (
                    var a = {},
                      s = /[:-]([a-zA-Z0-1]{1})/g,
                      u = i.attributes,
                      o = 0,
                      l = u.length;
                    o < l;
                    ++o
                  ) {
                    var c = u[o];
                    "width" === c.name ||
                      "height" === c.name ||
                      (a[c.name.replace(s, (t, e) => e.toUpperCase())] =
                        c.value);
                  }
                  return (0, r.i)(
                    (0, r.f)(
                      32,
                      "svg",
                      null,
                      null,
                      1,
                      Object.assign({}, a, {
                        dangerouslySetInnerHTML: { __html: i.innerHTML },
                      })
                    )
                  );
                })(t)) ||
              (0, r.b)(2, d)
            );
          }
        };
      function _(t, e, n) {
        var r = e.url,
          i = (0, a.a)(r, "whatsapp", s.t.get(), [(0, u.d)().lg]);
        i ? (0, l.a)(t, r, i, r, { onOpen: n }) : ((0, o.a)(t, r), n());
      }
      function m(t, e, n, r) {
        t.fireAndForget("backend", "acceptUserNotice", {
          id: e,
          version: n,
          ts: (0, c.D)(),
          source: r,
        });
      }
      function g(t) {
        t.dispatch({ type: "USER_NOTICE_UPDATED", userNotice: void 0 });
      }
      function b(t) {
        return t.userNotice;
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return h;
      }),
        n.d(e, "a", function () {
          return v;
        }),
        n.d(e, "e", function () {
          return f;
        }),
        n.d(e, "d", function () {
          return p;
        }),
        n.d(e, "c", function () {
          return _;
        }),
        n.d(e, "f", function () {
          return m;
        });
      var r = n(1),
        i = (n(13), n(21)),
        a = n(27),
        s = n(47),
        u = n(298),
        o = n(91),
        l = n(14),
        c = n(17),
        d = n(52);
      function h(t, e, n) {
        var i,
          o,
          l = !!t.fromMe,
          h = t.author || null;
        switch (e.subtype) {
          case "add":
            if (((o = e.subjectIsMe), (i = m(n, e.participants, o))))
              return l ? [i, 150] : h ? [(0, a.f)(n, h), i, 144] : [i, 138];
            if (o) return h ? [(0, a.f)(n, h), 145] : 437;
            var v = (0, a.f)(n, e.participants[0]);
            return l ? [v, 149] : h ? [(0, a.f)(n, h), v, 143] : [v, 137];
          case "restrict":
            if (e.restrict) {
              if (l) return 450;
              if (h) return [(0, a.f)(n, h), 156];
              throw new Error("Authorless restrict");
            }
            if (l) return 449;
            if (h) return [(0, a.f)(n, h), 155];
            throw new Error("Authorless unrestrict");
          case "remove":
            if (((o = e.subjectIsMe), (i = m(n, e.participants, o))))
              return l ? [i, 152] : h ? [(0, a.f)(n, h), i, 147] : [i, 142];
            if (o) return h ? [(0, a.f)(n, h), 148] : 442;
            var p = (0, a.f)(n, e.participants[0]);
            return l ? [p, 151] : h ? [(0, a.f)(n, h), p, 146] : [p, 141];
          case "leave":
            return e.subject ? [(0, a.f)(n, e.subject), 140] : 440;
          case "announce":
            if (e.announce) {
              if (l) return 364;
              if (h) return [(0, a.f)(n, h), 106];
              throw new Error("Authorless announce on");
            }
            if (l) return 363;
            if (h) return [(0, a.f)(n, h), 105];
            throw new Error("Authorless announce off");
          case "invite":
            return e.subject ? [(0, a.f)(n, e.subject), 139] : 439;
          case "accept":
            return e.subject
              ? l
                ? [(0, a.f)(n, e.subject), 135]
                : [(0, a.f)(n, e.subject), 136]
              : 437;
          case "picture_remove":
            if (l) return 444;
            if (h) return [(0, a.f)(n, h), 154];
            throw new Error("Authorless picture_remove");
          case "picture":
            if (l) return 443;
            if (h) return [(0, a.f)(n, h), 153];
            throw new Error("Authorless picture msg");
          case "demote":
            return (
              e.subjectIsMe ||
                __LOG__(4)`Demote message shown to other than me`,
              438
            );
          case "revoke_invite":
            if (l) return 432;
            if (h) return [(0, a.f)(n, h), 128];
            throw new Error("Authorless revoke_invite");
          case "delete":
            return 376;
          case "deactivate":
            return 143;
          case "closed":
            return 477;
          case "create":
            var _ = e.title;
            if (l) return _ ? [(0, s.b)(_), 115] : 368;
            if (h) {
              var g = (0, a.f)(n, h);
              return _ ? [g, (0, s.b)(_), 113] : [g, 114];
            }
            return _ ? [(0, s.b)(_), 112] : 369;
          case "cag_create":
            if (e.title) {
              var b = (0, s.b)(e.title);
              return h ? [(0, a.f)(n, h), b, 203] : [b, 204];
            }
            return h ? [(0, a.f)(n, h), 205] : 655;
          case "subject":
            return l
              ? [(0, s.b)(e.title), 159]
              : h
              ? [(0, a.f)(n, h), (0, s.b)(e.title), 158]
              : [(0, s.b)(e.title), 157];
          case "description":
            return l ? 371 : h ? [(0, a.f)(n, h), 116] : 370;
          case "description_remove":
            if (l) return 372;
            if (h) return [(0, a.f)(n, h), 117];
            throw new Error("Authorless description remove");
          case "locked":
            if (l) return 436;
            if (h) return [(0, a.f)(n, h), 133];
            throw new Error("Authorless lock");
          case "unlocked":
            if (l) return 462;
            if (h) return [(0, a.f)(n, h), 163];
            throw new Error("Authorless unlock");
          case "promote":
            return (
              e.subjectIsMe ||
                __LOG__(4)`Promote message shown to other than me`,
              441
            );
          case "modify":
            if (h) return [(0, a.f)(n, h), 134];
            throw new Error("Authorless modify");
          case "ephemeral":
            return f(t, n, e.expiration, e.updated);
          case "growth_locked":
            return 377;
          case "growth_unlocked":
            return 381;
          case "ephemeral_authorless":
            if (!e.expiration) return 301;
            var S = (0, r.b)(2, u.a, { value: e.expiration });
            return (0, d.l)()
              ? (0, c.a)("dm_updated_system_message")
                ? e.updated
                  ? [S, 90]
                  : [S, 87]
                : [S, 88]
              : (0, c.a)("dm_updated_system_message")
              ? e.updated
                ? [S, 89]
                : [S, 86]
              : [S, 85];
          case "cag_promote":
            return (o = e.subjectIsMe)
              ? 657
              : [(0, a.f)(n, e.participants[0]), 207];
          case "cag_demote":
            return (o = e.subjectIsMe)
              ? 656
              : [(0, a.f)(n, e.participants[0]), 206];
          case "link_cag":
            var E = e.subject;
            return null == h
              ? (__LOG__(4)`link_cag system msg must have an author`, null)
              : [(0, a.f)(n, h), (0, s.b)(E), 132];
          case "link_subgroup":
            var O = e.subject;
            return null == h
              ? (__LOG__(4)`link_subgroup system msg must have an author`, null)
              : [(0, a.f)(n, h), (0, s.b)(O), 131];
          case "unlink_cag":
            var A = e.subject;
            return null == h
              ? (__LOG__(4)`unlink_cag system msg must have an author`, null)
              : [(0, a.f)(n, h), (0, s.b)(A), 162];
          case "unlink_subgroup":
            var y = e.subject;
            return null == h
              ? [(0, s.b)(y), 160]
              : [(0, a.f)(n, h), (0, s.b)(y), 161];
          default:
            throw (e.subtype, new Error("Unreachable code"));
        }
      }
      function v(t) {
        return t.blocked ? 62 : 1064;
      }
      function f(t, e, n, i) {
        var s = n ? (0, r.b)(2, u.a, { value: n }, "duration") : null;
        if (t.fromMe)
          return s
            ? (0, d.l)()
              ? (0, c.a)("dm_updated_system_message")
                ? i
                  ? [s, 98]
                  : [s, 95]
                : [s, 96]
              : (0, c.a)("dm_updated_system_message")
              ? i
                ? [s, 97]
                : [s, 94]
              : [s, 93]
            : 309;
        if (t.author) {
          var o = (0, a.f)(e, t.author);
          return s
            ? (0, d.l)()
              ? (0, c.a)("dm_updated_system_message")
                ? i
                  ? [s, o, 83]
                  : [s, o, 80]
                : [s, o, 81]
              : (0, c.a)("dm_updated_system_message")
              ? i
                ? [s, o, 82]
                : [s, o, 79]
              : [s, o, 78]
            : [o, 77];
        }
        return s
          ? (0, d.l)()
            ? (0, c.a)("dm_updated_system_message")
              ? i
                ? [s, 90]
                : [s, 87]
              : [s, 88]
            : (0, c.a)("dm_updated_system_message")
            ? i
              ? [s, 89]
              : [s, 86]
            : [s, 85]
          : 301;
      }
      function p(t, e, n) {
        var r = (0, a.f)(t, e);
        return null == n || n > l.k ? [r, 92] : [r, 91];
      }
      function _(t, e, n, i) {
        var s = (0, r.b)(2, u.a, { value: n }, "duration");
        return (0, d.l)()
          ? i === o.a.INITIATED_BY_ME
            ? [s, 55]
            : [(0, a.f)(e, t), s, 57]
          : i === o.a.INITIATED_BY_ME
          ? [s, 54]
          : [(0, a.f)(e, t), s, 56];
      }
      function m(t, e, n) {
        return (n && e.length) || e.length >= 2
          ? (0, i.h)(
              e.map((e) =>
                (0, r.b)(2, a.a, { contacts: t, jid: e, prefer: "short" }, e)
              ),
              n
            )
          : null;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return s;
        });
      var r = 0,
        i = 1,
        a = 2;
      function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            (t.meta.fromMe && !0 !== e ? 1 : 0) +
            (null != t.starred ? 1 : 0) +
            (null != t.keptInfo ? 1 : 0);
        switch (n) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 3:
            return 3;
        }
        return 0;
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return _;
        }),
        n.d(e, "a", function () {
          return m;
        });
      var r = n(1),
        i = (n(13), n(77)),
        a = n(44),
        s = n(37),
        u = n.n(s),
        o = n(18),
        l = n(19),
        c = n(59),
        d = n(333),
        h = n(17);
      function v(t) {
        var e = t.groupInfo;
        return e.suspended
          ? "chat-suspended"
          : e.communityDeactivated
          ? "community-deactivated"
          : e.isInGroup
          ? e.announcement && !e.isAdmin
            ? e.isCAG && (0, h.a)("parent_group_view_enabled")
              ? "only-community-admins"
              : "only-admins"
            : e.participants.length >
                (0, h.a)("kaios_large_group_block_count") && "large-group"
          : e.support
          ? "support-closed"
          : "not-participant";
      }
      function f(t, e, n) {
        if ("ONE_TO_ONE" === t.type) {
          var r = (0, a.c)(t.jid, n);
          return !(
            (r.verifiedInfo && "high" === r.verifiedInfo.level) ||
            (0, a.k)(r)
          );
        }
        if (t.groupInfo.support) return !1;
        var i = !1;
        if (t.groupInfo.creatorJid) {
          var s = (0, a.c)(t.groupInfo.creatorJid, n);
          i = (0, a.k)(s);
        }
        return (
          !t.groupInfo.messaged &&
          t.groupInfo.creatorJid !== e &&
          !i &&
          t.groupInfo.admins.every((t) => !(0, a.k)((0, a.c)(t, n)))
        );
      }
      function p(t, e) {
        if (e.error) {
          var n,
            r = e.error.reason;
          switch (r) {
            case "bad-request":
            case "unknown":
              n = 741;
              break;
            default:
              return (0, u.a)(r);
          }
          (0, l.e)({ title: 243, text: n });
        } else (0, l.e)({ title: 743, text: 742 });
      }
      function _(t) {
        switch ((0, i.e)(t)) {
          case "TODAY":
            return (0, r.b)(2, o.b, { l10n: [(0, i.i)(t, "time"), 184] });
          case "YESTERDAY":
            return (0, r.b)(2, o.b, { l10n: [(0, i.i)(t, "time"), 186] });
          case "WEEK_AGO":
            return (0, r.b)(2, o.b, {
              l10n: [(0, i.i)(t, "time"), (0, i.i)(t, "weekdayShort"), 185],
            });
          case "MONTH_AGO":
            return (0, r.b)(2, o.b, {
              l10n: [(0, i.i)(t, "yearDate"), (0, i.i)(t, "time"), 183],
            });
          default:
            return (0, r.b)(2, o.b, { l10n: [(0, i.i)(t, "date"), 182] });
        }
      }
      var m = (0, c.f)(
        function (t) {
          var e = t.isOnline,
            n = t.lastSeen,
            i = t.className;
          return e
            ? (0, r.f)(1, "span", i, (0, r.b)(2, o.b, { l10n: 683 }), 2)
            : null != n
            ? (0, r.f)(1, "span", i, _(n), 0)
            : null;
        },
        (t, e) => {
          var n = e.chat.jid;
          return {
            contact: t.contacts[n],
            onlineOrLastSeen: t.onlineOrLastSeen[n],
            lastSeenSetting: t.settings.lastSeen,
            className: e.className,
          };
        },
        (t, e) => {
          var n = !1,
            r = null,
            i = t.onlineOrLastSeen,
            a = t.contact,
            s = t.lastSeenSetting,
            u = t.className;
          return (
            (0, d.a)(i, s, a) && ("online" === i ? (n = !0) : (r = i)),
            { isOnline: n, lastSeen: r, className: u }
          );
        }
      );
    },
    function (t, e, n) {
      function r(t, e, n) {
        t.dispatch({ type: "SAVE_DRAFT", chatJid: e, draft: n });
      }
      function i(t, e) {
        t.dispatch({ type: "CLEAR_DRAFT", chatJid: e });
      }
      function a(t, e, n) {
        t.dispatch({ type: "SAVE_DRAFT_QUOTE", chatJid: e, quote: n });
      }
      function s(t, e) {
        t.dispatch({ type: "CLEAR_DRAFT_QUOTE", chatJid: e });
      }
      function u(t, e, n) {
        t.dispatch({ type: "SAVE_DRAFT_LINK", chatJid: e, link: n });
      }
      function o(t, e) {
        t.dispatch({ type: "CLEAR_DRAFT_LINK", chatJid: e });
      }
      n.d(e, "d", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "f", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return o;
        });
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "e", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return d;
        });
      var r = n(3),
        i = n(78),
        a = new Map();
      function s(t, e, n) {
        var r = a.get(e);
        r
          ? (__LOG__(
              2
            )`UiEphemeralCleaner::openChatWhenReady cleaning chat ${e}`,
            t.spinUntilReady(
              r
                .catch(
                  (t) => (
                    __LOG__(4)`openChatWhenReady error ${t}`,
                    SEND_LOGS("UiEphemeralCleaner-openChatWhenReady"),
                    n(),
                    null
                  )
                )
                .then(() => (n(), null)),
              894,
              null
            ))
          : n();
      }
      var u = null;
      function o(t) {
        __LOG__(2)`UiEphemeralCleaner::startUiEphemeralCleaner invoked`,
          u ||
            (u = new (class {
              constructor(t) {
                (this.BB = !1),
                  (this.BC = new Set()),
                  (this.BD = new i.a(() => {
                    this.BE();
                  })),
                  (this.Az = t),
                  this.BD.forceRunNow();
              }
              update(t) {
                __LOG__(2)`UiEphemeralCleaner::update ${t}`,
                  this.BD.onOrBefore((0, r.g)(t));
              }
              setCurrentChatId(t) {
                t !== this.BA &&
                  ((this.BA = t),
                  this.BB &&
                    (__LOG__(2)`UiEphemeralCleaner:: Resuming fetch`,
                    (this.BB = !1),
                    this.BD.forceRunNow()));
              }
              setMessageForImmediateDelete(t) {
                this.BC.add(t);
              }
              BE() {
                return (
                  __LOG__(2)`UiEphemeralCleaner::_purgeNow`,
                  this.Az.getExpiredMessages()
                    .then((t) => {
                      if (0 !== t.size) {
                        var e = [];
                        t.forEach((t, n) => {
                          if (a.has(n))
                            __LOG__(
                              2
                            )`UiEphemeralCleaner::_purgeNow chat ${n} already in progress`;
                          else {
                            var r;
                            if (n === this.BA) {
                              var i = t.filter((t) => this.BC.has(t));
                              if (0 === i.length)
                                return (
                                  __LOG__(
                                    2
                                  )`UiEphemeralCleaner::_purgeNow skipping chat ${n}`,
                                  void (this.BB = !0)
                                );
                              __LOG__(
                                2
                              )`UiEphemeralCleaner::_purgeNow deleting messages immediately`,
                                (r = i);
                            } else r = t;
                            var s = this.Az.deleteExpiredMsgs(n, r).then(() => {
                              a.delete(n);
                            });
                            a.set(n, s), e.push(s);
                          }
                        }),
                          this.BC.clear();
                        var n = e.length;
                        return (
                          n > 0 &&
                            __LOG__(
                              2
                            )`UiEphemeralCleaner::_purgeNow ${n} chats cleaned`,
                          Promise.all(e)
                        );
                      }
                    })
                    .then(() => {
                      if (!this.BB)
                        return (
                          __LOG__(
                            2
                          )`UiEphemeralCleaner::_purgeNow fetching next timestamp`,
                          this.Az.getNextExpirationTimestamp().then((t) => {
                            null != t && this.update(t);
                          })
                        );
                      __LOG__(2)`UiEphemeralCleaner::_purgeNow pausing fetch`;
                    })
                );
              }
            })(t));
      }
      function l(t) {
        if (!u)
          return (
            __LOG__(
              4
            )`UiEphemeralCleaner::addNewEphemeralTimestamp not initialized`,
            void SEND_LOGS(
              "UiEphemeralCleaner-addNewEphemeralTimestamp-uninitialized"
            )
          );
        u.update(t);
      }
      function c(t) {
        if (!u)
          return (
            __LOG__(4)`UiEphemeralCleaner::setCurrentChatId not initialized`,
            void SEND_LOGS("UiEphemeralCleaner-setCurrentChatId-uninitialized")
          );
        u.setCurrentChatId(t);
      }
      function d(t) {
        u
          ? u.setMessageForImmediateDelete(t)
          : __LOG__(
              4
            )`UiEphemeralCleaner::setMessageForImmediateDelete not initialized`;
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return h;
      }),
        n.d(e, "a", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return f;
        });
      var r = n(1),
        i = n(13),
        a = n(59),
        s = n(183),
        u = n(64),
        o = n(19),
        l = n(108),
        c = class extends i.a {
          constructor() {
            var t;
            return (t = super(...arguments)), (this.LC = !1), t;
          }
          componentDidMount() {
            this.LC = !0;
            var t = this.props,
              e = t.backend,
              n = t.phoneNumber,
              r = t.text;
            if (!(0, u.e)(n)) return (0, o.a)(), void (0, o.e)({ text: 639 });
            e.sendAndReceive("backend", "contactQuerySync", {
              rawPhoneNumber: n,
            }).then((t) => {
              if (this.LC)
                if (((0, o.a)(), "not-found" === t))
                  (0, o.e)({ text: [(0, u.c)(n), 197] });
                else if ("offline" === t)
                  (0, o.e)({ title: 640, text: [(0, u.c)(n), 196] });
                else if ("invalid" === t) (0, o.e)({ text: 639 });
                else {
                  var i = null;
                  r &&
                    (i = { text: r, waMeInfo: { origText: r, urlNumber: !0 } }),
                    (0, l.a)(e, t, "newest", i, void 0);
                }
            });
          }
          componentWillUnmount() {
            this.LC = !1;
          }
          render() {
            return (0, r.b)(2, s.a, { type: "dialog" });
          }
        },
        d = (0, a.c)(c, (t, e, n) => ({
          phoneNumber: n.phoneNumber,
          text: n.text,
          backend: e,
          contacts: t.contacts,
        }));
      function h(t, e) {
        var n = e.pathname.substring(1) || null,
          i = e.searchParams.get("text");
        null != n
          ? (0, o.h)(
              { title: 641, left: 864, onSoftLeft: "CLOSE", onBack: "CLOSE" },
              (0, r.b)(2, d, { phoneNumber: n, text: i })
            )
          : null == i || 0 === i.length
          ? (0, o.e)({ text: 638 })
          : t.openScreen("SHARE_TEXT_SCREEN", { text: i, fromWaMe: !0 });
      }
      var v = "https://chat.whatsapp.com/";
      function f(t) {
        var e = new RegExp(`^${v}(?:invite/)?([0-9A-Za-z]+)$`, "i").exec(t);
        return e ? e[1] : null;
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return p;
      }),
        n.d(e, "a", function () {
          return g;
        }),
        n.d(e, "c", function () {
          return S;
        }),
        n.d(e, "d", function () {
          return O;
        });
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(21),
        o = n(18),
        l = n(269),
        c = n(14),
        d = n(3),
        h = n(59),
        v = n(354),
        f = i.f((t, e) =>
          (0, r.f)(
            1,
            "div",
            (0, s.a)("HF FW FS FY FU", t.selected && "HH"),
            t.children,
            0,
            null,
            null,
            e
          )
        ),
        p = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.LL = i.e()),
              (this.LM = i.e()),
              (this.state = { didMount: !1 }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props,
              r = this.state;
            return (
              (n !== t && (n.items !== t.items || n.selected !== t.selected)) ||
              (r !== e && r.didMount !== e.didMount)
            );
          }
          componentDidMount() {
            this.LN(), this.setState({ didMount: !0 });
          }
          componentDidUpdate() {
            this.LN();
          }
          LN() {
            var t = this.LL.current,
              e = this.LM.current;
            if (null != t && null != e) {
              var n = e.getBoundingClientRect(),
                r = n.width,
                i = n.left - (self.innerWidth - r) / 2;
              t.scrollLeft = t.scrollLeft + i;
            }
          }
          LO() {
            return this.props.items.map((t) => {
              var e = t.key === this.props.selected;
              return (0, r.b)(
                2,
                f,
                { selected: e, children: t.label },
                t.key,
                e ? this.LM : null
              );
            });
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              (0, s.a)("HE", !this.state.didMount && "HG"),
              this.LO(),
              0,
              null,
              null,
              this.LL
            );
          }
        },
        _ = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.state = { delayingTabOpened: !1 }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props,
              r = this.state;
            return (
              (n !== t &&
                (n.isLoaded !== t.isLoaded ||
                  n.tabLastOpened !== t.tabLastOpened ||
                  n.lastUnreadStatusMsg !== t.lastUnreadStatusMsg)) ||
              (r !== e && r.delayingTabOpened !== e.delayingTabOpened)
            );
          }
          componentDidMount() {
            var t = this.props,
              e = t.backend,
              n = t.lastUnreadStatusMsg;
            this.LR(e, n), this.LS();
          }
          componentDidUpdate(t) {
            var e = this.props,
              n = e.backend,
              r = e.lastUnreadStatusMsg,
              i = e.isLoaded;
            t.isLoaded !== i && i
              ? (this.LR(n, r), this.LS())
              : t.lastUnreadStatusMsg !== r && (this.LR(n, r), this.LT());
          }
          componentWillUnmount() {
            clearTimeout(this.LP), clearTimeout(this.LQ);
          }
          LS() {
            var t = this.props,
              e = t.backend,
              n = t.isLoaded;
            !this.state.delayingTabOpened &&
              n &&
              (this.setState({ delayingTabOpened: !0 }),
              clearTimeout(this.LQ),
              (this.LQ = setTimeout(() => {
                e.statusTabOpened(), this.setState({ delayingTabOpened: !1 });
              }, 1e3)));
          }
          LT() {
            var t = this.props,
              e = t.backend,
              n = t.isLoaded;
            !this.state.delayingTabOpened &&
              n &&
              (clearTimeout(this.LQ),
              (this.LQ = setTimeout(() => {
                e.statusTabOpened();
              }, 1e3)));
          }
          LR(t, e) {
            if (null != e) {
              clearTimeout(this.LP);
              var n = (0, d.B)(e.ts, e.campaignDuration || c.V) + 200;
              this.LP = setTimeout(() => {
                __LOG__(2)`Status Tab: last unread status expired.`,
                  t.loadLastUnreadStatusMsg(),
                  (this.LP = void 0);
              }, n);
            }
          }
          render() {
            var t,
              e = this.props,
              n = e.lastUnreadStatusMsg,
              i = e.tabLastOpened,
              a = e.isLoaded;
            return (
              (t =
                !(!this.state.delayingTabOpened && a) &&
                null != n &&
                (null == i || n.ts > i)),
              (0, r.f)(
                1,
                "span",
                t ? "HJ" : null,
                (0, r.b)(2, o.b, { l10n: 1015 }),
                2
              )
            );
          }
        },
        m = (0, h.c)(_, (t, e) => ({
          tabLastOpened: t.status.tabLastOpened,
          lastUnreadStatusMsg: t.status.lastUnreadMsg,
          isLoaded:
            null != t.tab && "status" === t.tab.key && null != t.tab.data,
          backend: e,
        })),
        g = {
          chats: { key: "chats", label: (0, r.b)(2, o.b, { l10n: 1014 }) },
          status: {
            key: "status",
            label: (0, r.b)(2, m),
            onOpen: (t) => {
              t.statusSession = new v.a();
            },
            onClose: (t) => {
              var e;
              null == (e = t.statusSession) || e.stopStatusSession(),
                (t.statusSession = null);
            },
          },
          calls: {
            key: "calls",
            label: (0, r.b)(2, o.b, { l10n: 1013 }),
            onOpen: (t) => t.loadCallLogs(),
            onClose: (t) => t.closeCallLogs(),
          },
          camera: {
            key: "camera",
            label: (0, r.b)(2, l.a, { className: "HI" }),
          },
        },
        b = ["camera", "chats", "status", "calls"];
      function S(t, e, n, r) {
        var i = O(n, r);
        if (i) {
          var a = i.items,
            s = i.selected,
            o = a.findIndex((t) => t.key === s);
          if (
            o < 0 &&
            (__LOG__(3)`Couldn't find tab ${s}. Adding softkeys for 'chats'`,
            (o = a.findIndex((t) => "chats" === t.key)) < 0)
          )
            return (
              __LOG__(4)`Couldn't find tab ${s} nor 'chats'`,
              void SEND_LOGS("unknown-tab")
            );
          var l = o > 0 ? a[o - 1] : null,
            c = o < a.length - 1 ? a[o + 1] : null;
          (0, u.g)()
            ? (t.setLeftArrow(() => d(c)), t.setRightArrow(() => d(l)))
            : (t.setLeftArrow(() => d(l)), t.setRightArrow(() => d(c))),
            "chats" !== s && t.setBack(() => d(g.chats));
        }
        function d(t) {
          null != t && e.openTab(t.key);
        }
      }
      var E = new Map();
      function O(t, e) {
        var n = ((t, e) => `${t}${e.toString()}`)(t.key, e);
        if (!E.has(n)) {
          var r = b;
          e || (r = r.filter((t) => "calls" !== t)),
            E.set(
              n,
              r.length > 1
                ? { items: r.map((t) => g[t]), selected: t.key }
                : null
            );
        }
        return E.get(n);
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return m;
        }),
        n.d(e, "d", function () {
          return g;
        }),
        n.d(e, "c", function () {
          return b;
        });
      var r = n(8),
        i = n.n(r),
        a = (n(1), n(13), n(73)),
        s = n(27),
        u = n(235),
        o = (n(161), n(132), n(271)),
        l = n(40),
        c = n(317),
        d = n(19),
        h = n(382);
      function v(t, e) {
        e.add(834, () => {
          (function (t) {
            t.openScreen("SETTINGS");
          })(t);
        });
      }
      function f(t, e, n) {
        (0, l.k)(n)
          ? e.add(1069, t.muteChat, n.id, null)
          : e.childMenu((0, c.a)(t, n.id));
      }
      function p(t, e, n) {
        e.add(
          n.archived ? 128 : 125,
          t.setChatArchivedState,
          n.id,
          !n.archived
        );
      }
      function _(t, e, n) {
        0 === n.msgInfo.unreadMsgCount
          ? e.add(127, t.markChatAsUnread, n.id)
          : e.add(126, t.markChatAsRead, n.id);
      }
      function m(t, e, n, r) {
        f(t, e, n),
          e.add(131, () => (0, o.d)(t, n)),
          e.add(138, () => {
            (0, o.a)(n, t);
          }),
          n.groupInfo.isInGroup
            ? e.add(312, () => {
                (function (t, e, n) {
                  (0, o.c)(e, n, t);
                })(t, n, r);
              })
            : e.add(872, () => {
                (function (t, e) {
                  (0, o.b)(e, t);
                })(t, n);
              }),
          p(t, e, n),
          _(t, e, n),
          v(t, e);
      }
      function g(t, e, n) {
        "finished" === n.job.step.status &&
          (e.add(666, () => {
            (0, u.c)(t, n);
          }),
          e.add(664, () => {
            (0, u.b)(t, n);
          })),
          v(t, e);
      }
      function b(t, e, n, r) {
        f(t, e, n),
          e.add(null == (0, a.b)(n, r) ? 130 : 129, () => {
            (0, h.a)(t, n.jid);
          }),
          e.add(138, () => {
            (function (t, e, n) {
              var r = [{ key: "delete_media", label: 139, checked: !1 }],
                a = e.msgInfo.starredMsgCount;
              a &&
                a > 0 &&
                !t.isStarredIndexMissing() &&
                r.push({ key: "delete_starred", label: 140, checked: !1 }),
                (0, d.k)({
                  title: [(0, s.f)(n, e.jid), 34],
                  save: 866,
                  centerKeys: { on: 930, off: 873 },
                  defaultItems: r,
                  onSave: (n) => {
                    var r = i()(n, 2),
                      a = r[0],
                      s = r[1];
                    return t.clearChat(
                      e.id,
                      a.checked
                        ? "deleteMediaFromPhoneStorage"
                        : "retainMediaInPhoneStorage",
                      null == s || s.checked
                        ? "deleteStarredMessages"
                        : "retainStarredMessages"
                    );
                  },
                });
            })(t, n, r);
          }),
          e.add(133, () => {
            (function (t, e, n) {
              (0, d.k)({
                title: [(0, s.f)(n, e.jid), 44],
                save: 872,
                centerKeys: { on: 930, off: 873 },
                defaultItems: [
                  { key: "delete_media", label: 139, checked: !1 },
                ],
                onSave: (n) => {
                  var r = i()(n, 1)[0];
                  return t.deleteChat(
                    e.id,
                    !1,
                    r.checked
                      ? "deleteMediaFromPhoneStorage"
                      : "retainMediaInPhoneStorage"
                  );
                },
              });
            })(t, n, r);
          }),
          p(t, e, n),
          _(t, e, n),
          v(t, e);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        });
      var r = {
        text: 1,
        futureproof: 12,
        gif: 11,
        image: 2,
        sticker: 16,
        location: 6,
        video: 3,
        vcard: 13,
        document: 8,
        rich_hsm: 17,
        voice: 4,
      };
      function i(t) {
        return "voice" === t.content.type
          ? t.content.isPtt
            ? 5
            : 4
          : "text" === t.content.type && null != t.content.linkPreview
          ? 9
          : r[t.content.type];
      }
      function a(t) {
        return "text" === t.content.type && null != t.content.linkPreview
          ? 9
          : (t.content.type, r[t.content.type]);
      }
      function s(t) {
        switch (t) {
          case "text":
            return 2;
          case "image":
            return 3;
          case "voice":
            return 4;
          case "video":
          case "gif":
            return 14;
          case "document":
            return 5;
          case "sticker":
            return 7;
          case "location":
            return 8;
          case "vcard":
            return 10;
          default:
            return 1;
        }
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(47),
        i = n(19),
        a = n(198);
      function s(t) {
        return {
          type: "PENDING_GROUP",
          msgInfo: { unreadMsgCount: 0 },
          groupInfo: { title: t.jobIn.title, groupPicture: t.jobIn.blob },
          job: t,
        };
      }
      function u(t, e) {
        var n = e.job;
        (0, a.b)(t, n),
          t.createGroup(
            n.jobIn.title,
            n.jobIn.participants,
            n.jobIn.blob,
            n.jobIn.timestamp,
            n.jobIn.expiration
          );
      }
      function o(t, e) {
        (0, i.g)({
          title: 234,
          text: [(0, r.b)(e.groupInfo.title), 212],
          left: 864,
          onSoftLeft: "CLOSE",
          center: 872,
          onSoftCenter: () => {
            (0, a.b)(t, e.job);
          },
        });
      }
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return a;
        });
      var r = "BY",
        i = "BZ BY",
        a = "Ba";
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return v;
      }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "d", function () {
          return p;
        }),
        n.d(e, "c", function () {
          return _;
        });
      var r = n(1),
        i = (n(13), n(23)),
        a = n.n(i),
        s = n(27),
        u = n(107),
        o = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            [
              (0, r.f)(32, "circle", null, null, 1, {
                cx: "10",
                cy: "16",
                r: "1.5",
              }),
              (0, r.f)(32, "circle", null, null, 1, {
                cx: "16",
                cy: "16",
                r: "1.5",
              }),
              (0, r.f)(32, "circle", null, null, 1, {
                cx: "22",
                cy: "16",
                r: "1.5",
              }),
            ],
            4,
            { viewBox: "0 0 32 32" }
          );
        },
        l = n(18),
        c = "Jp",
        d = "Jq Fa",
        h = "Jr FX FS FY FU",
        v = (0, n(59).c)(
          function (t) {
            var e = t.className,
              n = t.meJid;
            return (0, r.f)(
              1,
              "div",
              (0, a.a)(c, e),
              [
                (0, r.b)(2, u.c, { jid: n, className: d }),
                (0, r.b)(2, l.b, { l10n: 181, className: h }),
              ],
              4
            );
          },
          (t, e, n) => ({ meJid: t.user.jid, className: n.className })
        );
      function f(t) {
        var e = t.contact,
          n = t.className;
        return (0, r.f)(
          1,
          "div",
          (0, a.a)(c, n),
          [
            (0, r.b)(2, u.c, { jid: e.jid, className: d }),
            (0, r.b)(2, s.a, { className: h, contact: e }),
          ],
          4
        );
      }
      function p(t) {
        var e = t.className,
          n = t.total;
        return (0, r.f)(
          1,
          "div",
          (0, a.a)(c, e),
          [
            (0, r.f)(
              1,
              "div",
              "Js",
              [
                (0, r.f)(1, "div", (0, a.a)(d, "Jt"), (0, u.b)(), 0),
                1 !== n
                  ? (0, r.f)(1, "div", (0, a.a)(d, "Jt"), (0, u.b)(), 0)
                  : null,
              ],
              0
            ),
            (0, r.b)(2, l.b, { className: h, l10n: [n, 126] }),
          ],
          4
        );
      }
      function _(t) {
        var e = t.className;
        return (0, r.f)(
          1,
          "div",
          (0, a.a)(c, e),
          (0, r.f)(1, "div", (0, a.a)(d, "Ju"), (0, r.b)(2, o), 2),
          2
        );
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a.a;
      }),
        n.d(e, "b", function () {
          return a.b;
        }),
        n.d(e, "c", function () {
          return S;
        });
      var r,
        i,
        a = n(351),
        s = n(1),
        u = n(13),
        o = n(78),
        l = n(262),
        c = n(23),
        d = n.n(c),
        h = n(18),
        v = n(162),
        f = n(61),
        p = n(76),
        _ = n(131),
        m = n(80),
        g = class extends u.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.LU = u.e()),
              (this.state = { selected: !1 }),
              (this.LV = (t) => {
                t && (this.LU.current = t);
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            return (0, m.a)(
              { prev: this.props, next: t, specificField: "deps" },
              { prev: this.state, next: e }
            );
          }
          getElement() {
            return this.LU.current;
          }
          toggleSelect(t) {
            this.setState({ selected: t });
          }
          getClientRect() {
            return this.LU.current
              ? this.LU.current.getBoundingClientRect()
              : null;
          }
          render() {
            var t = this.props,
              e = t.item,
              n = t.index,
              r = t.items,
              i = t.renderItem,
              a = this.state.selected;
            return (0, s.f)(
              1,
              "div",
              null,
              i(e, a, n, r),
              0,
              null,
              null,
              this.LV
            );
          }
        },
        b =
          ((r = class extends u.a {
            static getDerivedStateFromProps(t, e) {
              var n = (0, m.c)(t, e);
              return (
                null != n &&
                  null != n.status &&
                  n.status.scrolling &&
                  (e.start > n.status.index || e.end <= n.status.index) &&
                  ((n.start = Math.max(
                    n.status.index - e.itemsOnScreen + 1,
                    0
                  )),
                  (n.end = n.start + e.itemsOnScreen)),
                n
              );
            }
            constructor(t) {
              super(t), i.call(this);
              var e =
                  p.q +
                  p.r +
                  (null != t.prefilledHeight ? t.prefilledHeight : 0),
                n = Math.ceil((p.m - e) / t.estimatedItemHeight);
              (this.state = Object.assign({}, (0, m.j)(t), {
                largeText: navigator.largeTextEnabled,
                start: 0,
                end: n,
                itemsOnScreen: n,
              })),
                null != this.state.status.index &&
                  this.state.status.index > 0 &&
                  ((this.state.start = Math.max(
                    this.state.status.index - n + 1,
                    0
                  )),
                  (this.state.end = this.state.start + n)),
                null != t.search &&
                  (0, m.b)(t.search) > 0 &&
                  (this.Ie = new o.a(this.onSearchDidChange));
            }
            componentDidMount() {
              if (void 0 !== this.state.status.index) {
                var t = this.Ig(this.state.status.index);
                null != t &&
                  null != this.Ic[t] &&
                  (this.Ic[t].toggleSelect(!0), this.scrollSelectedIntoView());
              }
              this.props.onStatus && this.props.onStatus(this.state.status),
                document.addEventListener("focus_input", this.Ih),
                self.addEventListener("largetextenabledchanged", this.Ii);
            }
            shouldComponentUpdate(t, e) {
              return (0, m.a)(
                { prev: this.props, next: t, specificField: "deps" },
                { prev: this.state, next: e }
              );
            }
            componentDidUpdate(t, e) {
              if (
                this.state.status.index !== e.status.index ||
                this.state.items !== e.items
              ) {
                if (void 0 !== e.status.index) {
                  var n = this.Ig(e.status.index);
                  null != n &&
                    null != this.Ic[n] &&
                    this.Ic[n].toggleSelect(!1);
                }
                if (void 0 !== this.state.status.index) {
                  var r = this.Ig(this.state.status.index);
                  null != r &&
                    null != this.Ic[r] &&
                    this.Ic[r].toggleSelect(!0);
                }
                this.scrollSelectedIntoView();
              }
              (0, m.l)(this.state.status, e.status, this.props.onStatus);
            }
            componentWillUnmount() {
              this.Ie && this.Ie.cancel(),
                cancelAnimationFrame(this.Id),
                document.removeEventListener("focus_input", this.Ih),
                self.removeEventListener("largetextenabledchanged", this.Ii);
            }
            clearSearch() {
              this.setState({ filteredItems: null });
            }
            isSearching() {
              return (0, m.k)(this.state);
            }
            getSelected() {
              var t = (0, m.e)(this.state.status),
                e = this.getSelectedNode();
              return null != t && e ? { item: t, node: e } : null;
            }
            getSelectedNode() {
              if (null != this.state.status.index) {
                var t = this.Ig(this.state.status.index);
                return t ? this.Ic[t] : null;
              }
              return null;
            }
            goToSearch() {
              var t = (0, m.i)(this.props);
              t && this.setState(this.Ij(t));
            }
            Ij(t) {
              var e = null,
                n = null;
              if (null != t.status.index) {
                var r = t.status.index;
                r >= this.state.end
                  ? r < this.state.end + this.state.itemsOnScreen
                    ? ((e = Math.max(
                        this.state.end - this.state.itemsOnScreen,
                        0
                      )),
                      (n = this.state.end + this.state.itemsOnScreen))
                    : ((n = r + 1),
                      (e = Math.max(n - this.state.itemsOnScreen, 0)))
                  : r < this.state.start &&
                    (r >= this.state.start - this.state.itemsOnScreen
                      ? ((e = Math.max(
                          this.state.start - this.state.itemsOnScreen,
                          0
                        )),
                        (n = this.state.start + this.state.itemsOnScreen))
                      : (n = (e = Math.max(r, 0)) + this.state.itemsOnScreen));
              }
              return (
                t.status.searching && ((e = 0), (n = this.state.itemsOnScreen)),
                null != e && null != n
                  ? Object.assign({}, t, { start: e, end: n })
                  : t
              );
            }
            scrollSelectedIntoView() {
              var t = this.state.status;
              if (t.searching)
                this.scrollIntoView(this.Ib.current, "start", !0);
              else if (t.scrolling) {
                var e = this.props.keyOf(t.item);
                null != t.index &&
                  null != this.Ic[e] &&
                  this.scrollIntoView(
                    this.Ic[e].getElement(),
                    t.goingDown ? "end" : "start"
                  );
              }
            }
            scrollIntoView(t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              t && (0, v.e)(t, { block: e, force: n });
            }
            cacheListRowRef(t, e) {
              (this.Ic[e] = t || null),
                null != t &&
                  null != this.state.status.index &&
                  this.Ig(this.state.status.index) === e &&
                  (t.toggleSelect(!0), this.scrollSelectedIntoView());
            }
            renderSearch() {
              if (null == this.props.search) return null;
              var t = !0 === this.state.status.searching,
                e = !t;
              return (0, s.f)(
                1,
                "div",
                (0, d.a)(_.g, t && _.h),
                [
                  (0, s.b)(2, l.a, {
                    forwardedRef: this.If,
                    hasFocusPriority: !1,
                    className: e ? void 0 : _.d,
                  }),
                  (0, s.b)(2, l.a, {
                    hasFocusPriority: !0,
                    onChange: this.onSearchChange,
                    className: e ? _.c : _.f,
                  }),
                ],
                4,
                null,
                "search",
                this.Ib
              );
            }
            render() {
              var t = this.props,
                e = this.state;
              if (0 === e.items.length)
                return null != t.emptyLabel
                  ? (0, s.f)(
                      1,
                      "div",
                      _.a,
                      (0, s.b)(2, h.b, { l10n: t.emptyLabel }),
                      2
                    )
                  : null;
              var n = null;
              if (
                null != t.search &&
                null != e.filteredItems &&
                0 === e.filteredItems.length
              )
                n = (0, s.f)(
                  1,
                  "div",
                  _.b,
                  (0, s.b)(2, h.b, { l10n: t.search.emptyLabel }),
                  2
                );
              else {
                for (
                  var r = (0, m.d)(e),
                    i = Math.max(e.start, 0),
                    a = Math.min(r.length, e.end),
                    u = [],
                    o = i;
                  o < a;
                  o++
                )
                  u.push(
                    this.renderRow(
                      o,
                      this.props.keyOf(r[o]),
                      r,
                      this.props.deps
                    )
                  );
                n = u;
              }
              return (0, s.f)(
                1,
                "div",
                (0, d.a)(_.e, t.className, "Fw"),
                [this.renderSearch(), n],
                0
              );
            }
          }),
          (i = function () {
            (this.Ib = u.e()),
              (this.Ic = {}),
              (this.Ie = null),
              (this.If = u.e()),
              (this.Ih = () => {
                this.scrollSelectedIntoView();
              }),
              (this.Ii = () => {
                this.setState({ largeText: navigator.largeTextEnabled });
              }),
              (this.goTo = (t) => {
                var e = (0, m.f)(t, this.state, this.props);
                e && this.setState(this.Ij(e));
              }),
              (this.goToPrevious = () => {
                cancelAnimationFrame(this.Id),
                  (this.Id = requestAnimationFrame(() => {
                    var t = (0, m.h)(this.state, this.props);
                    t && this.setState(this.Ij(t));
                  }));
              }),
              (this.goToNext = () => {
                cancelAnimationFrame(this.Id),
                  (this.Id = requestAnimationFrame(() => {
                    var t = (0, m.g)(this.state, this.props);
                    t && this.setState(this.Ij(t));
                  }));
              }),
              (this.Ig = (t) => {
                var e = (0, m.d)(this.state);
                return e.length <= t ? null : this.props.keyOf(e[t]);
              }),
              (this.onSearchDidChange = (t) => {
                if (t) {
                  if (this.props.search) {
                    var e = t;
                    this.setState((t, n) => {
                      var r = n.search;
                      return (
                        r && {
                          searchInput: e,
                          filteredItems: r.filter(e, t.items),
                        }
                      );
                    });
                  }
                } else this.clearSearch();
              }),
              (this.onSearchChange = (t) => {
                var e = this.props.search;
                if (null != e) {
                  var n = t.trim();
                  this.Ie
                    ? this.Ie.debounce((0, m.b)(e), n)
                    : this.onSearchDidChange(n),
                    this.If.current && this.If.current.setValue(n),
                    this.setState({ searchInput: n }),
                    this.goToSearch();
                }
              }),
              (this.renderRow = (t, e, n, r) =>
                (0, s.b)(
                  2,
                  g,
                  {
                    index: t,
                    itemKey: e,
                    item: n[t],
                    items: n,
                    largeText: this.state.largeText,
                    renderItem: this.props.renderItem,
                    deps: r,
                  },
                  e,
                  (t) => this.cacheListRowRef(t, e)
                ));
          }),
          r),
        S = class extends f.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Ik = u.e()),
              (this.goToPrevious = () => {
                var t = this.Ik.current;
                t && t.goToPrevious();
              }),
              (this.goToNext = () => {
                var t = this.Ik.current;
                t && t.goToNext();
              }),
              (this.goTo = (t) => {
                var e = this.Ik.current;
                e && e.goTo(t);
              }),
              t
            );
          }
          shouldComponentUpdate(t) {
            return (0, m.a)({
              next: t,
              prev: this.props,
              specificField: "deps",
            });
          }
          isSearching() {
            var t = this.Ik.current;
            return null != t && t.isSearching();
          }
          getSelected() {
            var t = this.Ik.current;
            if (null != t) return t.getSelected();
          }
          addSoftKeys(t, e) {
            var n;
            t.setUpDownArrows(this.goToPrevious, this.goToNext);
            var r = this.props.addSearchSoftKeys;
            r &&
              (null == (n = this.Ik.current)
                ? void 0
                : n.state.status.searching) &&
              r(t, e);
          }
          render() {
            return (0, s.i)(
              (0, s.b)(2, b, Object.assign({}, this.props), null, this.Ik)
            );
          }
        };
    },
    function (t, e, n) {
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(211),
        o = n(18),
        l = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.JJ = i.e()),
              (this.state = { overflow: !1 }),
              t
            );
          }
          componentDidMount() {
            var t = this.JJ.current;
            if (null != t) {
              var e = t.children;
              if (2 === e.length) {
                var n = e[0].offsetHeight,
                  r = n > t.offsetHeight;
                r && this.setState({ overflow: !0 });
                var i = this.props.onMount;
                i && i({ ref: t, contentHeight: n, overflowing: r });
              } else __LOG__(3)`MultiLineText should have exactly two children`;
            }
          }
          render() {
            var t = this.props,
              e = t.whitespaceMsg ? (0, o.c)((0, u.d)(t.whitespaceMsg)) : null;
            if (t.truncated) {
              var n = t.isUsingMoreLabel
                ? (0, r.b)(2, o.b, {
                    l10n: 570,
                    className: (0, s.a)("Fk", t.moreLabelClassName),
                  })
                : (0, r.f)(1, "span", t.moreLabelClassName, "…", 16);
              return (0, r.f)(
                1,
                "div",
                (0, s.a)(
                  "Fi",
                  t.textClassName,
                  t.maxLineClassName,
                  this.state.overflow && "Fd"
                ),
                [
                  (0, r.f)(1, "div", null, [t.children, e], 0, {
                    dir: t.dir || "auto",
                  }),
                  (0, r.f)(
                    1,
                    "div",
                    "Fe",
                    [
                      (0, r.f)(1, "div", "Ff", " ", 16),
                      (0, r.f)(
                        1,
                        "div",
                        (0, s.a)("Fg", null != e && "Fh"),
                        n,
                        0
                      ),
                    ],
                    4
                  ),
                ],
                4,
                null,
                null,
                this.JJ
              );
            }
            return (0, r.f)(
              1,
              "div",
              (0, s.a)("Fj", t.textClassName),
              [t.children, e],
              0,
              { dir: t.dir || "auto" }
            );
          }
        };
      e.a = l;
    },
    function (t, e, n) {
      n.d(e, "e", function () {
        return f;
      }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "j", function () {
          return _;
        }),
        n.d(e, "i", function () {
          return m;
        }),
        n.d(e, "h", function () {
          return g;
        }),
        n.d(e, "g", function () {
          return b;
        }),
        n.d(e, "f", function () {
          return E;
        }),
        n.d(e, "a", function () {
          return O;
        }),
        n.d(e, "d", function () {
          return A;
        }),
        n.d(e, "b", function () {
          return y;
        });
      var r = n(1),
        i = (n(13), n(44)),
        a = n(37),
        s = n.n(a),
        u = n(6),
        o = n(14),
        l = n(27),
        c = n(18),
        d = n(52),
        h = n(157),
        v = n(16);
      function f(t, e) {
        var n,
          r = null == (n = (0, i.c)(t, e)) ? void 0 : n.ephemeral;
        return null != r && r.expiration > o.k;
      }
      function p(t, e) {
        var n;
        if ("ONE_TO_ONE" === t.type && e[t.jid]) {
          var r = null == (n = e[t.jid]) ? void 0 : n.ephemeral;
          if (null != (null == r ? void 0 : r.notificationTs))
            return (
              r && {
                expiration: r.expiration || o.k,
                notificationTs: r.notificationTs,
              }
            );
        }
      }
      function _(t, e) {
        var n = t.type,
          r = t.msg;
        switch (n) {
          case "text":
          case "voice":
          case "video":
          case "gif":
          case "vcard":
          case "image":
          case "sticker":
          case "richHsmText":
          case "richHsmButton":
          case "locationMap":
          case "locationName":
          case "groupInvite":
          case "groupInviteCaption":
          case "document":
          case "poll":
          case "viewOnceImage":
          case "viewOnceVideo":
            if ("text" === n && r.content.caption) return !1;
            var i = e.expiration,
              a = e.notificationTs,
              u = r.expiration || o.k;
            return a < r.ts && i !== u;
          case "quote":
          case "quoteGroup":
          case "linkPreview":
          case "poll-option":
          case "poll-results-button":
          case "special":
            return !1;
          default:
            return (0, s.a)(n), !1;
        }
      }
      function m(t) {
        u.p.get() || (0, h.b)(v.e.markKeepInChatNuxSeen());
      }
      function g() {
        u.j.set(!0), (0, d.h)() && u.p.set(!0);
      }
      function b(t, e) {
        u.j.get()
          ? t.openScreen("EPHEMERAL_SETTINGS", { chat: e })
          : t.openScreen("EPHEMERAL_NUX", { chat: e });
      }
      function S(t, e, n, r) {
        ("GROUP" === n.type
          ? null != n.groupInfo.expiration && n.groupInfo.expiration > o.k
          : f(n.jid, e)) &&
          ("disappearing-mode" === r
            ? t.openScreen("EPHEMERAL_NUX", { chat: n, proactive: !0 })
            : t.openScreen("KEEP_IN_CHAT_NUX", { trigger: "chat-entry" }));
      }
      function E(t, e, n, r) {
        return u.j.get()
          ? r || !(0, d.h)() || u.p.get()
            ? void 0
            : S(t, e, n, "keep-in-chat")
          : S(t, e, n, "disappearing-mode");
      }
      function O(t, e) {
        if ((0, i.h)(t, e)) return !1;
        if ("ONE_TO_ONE" === t.type) return !0;
        t.type;
        var n = t.groupInfo;
        return !(n.suspended || (!n.isAdmin && n.locked));
      }
      function A(t) {
        var e = Array.from(t).sort();
        return e.reverse(), e.push(o.k), e;
      }
      function y(t, e) {
        if ("@me" === e) return (0, r.b)(2, c.b, { l10n: 531 });
        var n = (0, l.f)(t, e);
        return (0, r.b)(2, c.b, { l10n: [n, 178] });
      }
    },
    function (t, e, n) {
      n.d(e, "d", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "e", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return p;
        });
      var r,
        i,
        a,
        s,
        u = n(13),
        o = { sentinal: "NO_CHILD" };
      function l(t) {
        return t;
      }
      var c = "standard",
        d = class {
          constructor(t) {
            (this.EG = new Set()),
              (this.selected = null),
              (this.EI = null),
              (this.EJ = null),
              (this.EH = t);
          }
          markChildUpdating(t) {
            var e = this.EG,
              n = 0 === e.size && !this.EJ;
            (this.EJ = null),
              e.add(t),
              n && ((this.EI = null), this.EH.markChildrenUpdating());
          }
          markChildUpdated(t, e, n) {
            t === this.selected
              ? e
                ? (this.EI = n ? t : null)
                : this.EI || (this.EI = o)
              : e && (this.EI = t);
            var r = this.EG;
            if (r.delete(t) && 0 === r.size) {
              var i = this.EH,
                a = this.EI;
              (this.EI = null),
                null == a
                  ? i.markChildrenUpdated(!1)
                  : ((this.selected = a === o ? null : a),
                    i.markChildrenUpdated(!0));
            }
          }
          markAltSelectionUpdated(t, e, n) {
            this.EH.markAltSelectionUpdated(t, e, n);
          }
          markChildDeleted(t) {
            var e = this.EG;
            if (0 !== e.size) e.add(t), this.markChildUpdated(t, !1, !0);
            else if (null == this.EJ && this.selected === t) {
              var n = Promise.resolve().then(() => {
                this.EJ === n &&
                  ((this.EJ = null),
                  this.EG.add(t),
                  this.markChildUpdated(t, !1, !0));
              });
              (this.EJ = n), (this.EI = o), this.EH.markChildrenUpdating();
            }
          }
        },
        h = { selectionParentNode() {} },
        v =
          ((i = r =
            class extends u.a {
              constructor(t, e) {
                super(t), (this.ET = null);
                var n = e.selectionParentNode;
                (this.ES = n), n.markChildUpdating(this);
              }
              componentDidMount() {
                this.$selectableDidUpdate();
              }
              getSnapshotBeforeUpdate() {
                return this.ES.markChildUpdating(this), null;
              }
              componentDidUpdate() {
                this.$selectableDidUpdate();
              }
              componentWillUnmount() {
                var t = this.ES;
                t.markChildDeleted(this);
                var e = this.ET;
                e && t.markAltSelectionUpdated(e, this, !1);
              }
              $selectableDidUpdate() {
                var t = this.props.selected,
                  e = this.ES;
                if ("string" == typeof t)
                  (this.ET = t), e.markAltSelectionUpdated(t, this, !0);
                else if (this.ET) {
                  var n = this.ET;
                  (this.ET = null), e.markAltSelectionUpdated(n, this, !1);
                }
                e.markChildUpdated(this, !0 === t, !0);
              }
              addSoftKeys() {
                __LOG__(4)`addSoftKeys unimplemented`,
                  SEND_LOGS("softkeys-unimplemented");
              }
            }),
          (r.contextTypes = h),
          i);
      function f(t) {
        var e, n;
        return (
          (n = e =
            class extends u.a {
              getChildContext() {
                return this.EU.context;
              }
              constructor(e, n) {
                super(e);
                var r = n.selectionParentNode,
                  i = new (class {
                    constructor(t, e) {
                      (this.context = { selectionParentNode: new d(this) }),
                        (this.EM = !1),
                        (this.EN = !1),
                        (this.EO = !0),
                        (this.EP = !1),
                        (this.EQ = null),
                        (this.EK = t),
                        (this.EL = e);
                    }
                    markUpdating() {
                      return (this.EO = !0), this.ER(!0, this.EN), null;
                    }
                    markUpdated() {
                      this.ER(!1, this.EN);
                    }
                    markChildrenUpdating() {
                      this.EP || this.ER(this.EM, !0);
                    }
                    markChildrenUpdated(t) {
                      this.EP || (t && (this.EO = !0), this.ER(this.EM, !1));
                    }
                    ER(t, e) {
                      var n = t || e,
                        r = this.EM || this.EN;
                      if (((this.EM = t), (this.EN = e), n && !r))
                        this.EL.markChildUpdating(this.EK);
                      else if (!n && r) {
                        var i = this.EO;
                        this.EO = !1;
                        var a = this.EQ;
                        null == a &&
                          (a = !!this.context.selectionParentNode.selected),
                          this.EL.markChildUpdated(this.EK, a, i);
                      }
                    }
                    markAltSelectionUpdated(t, e, n) {
                      this.EL.markAltSelectionUpdated(t, e, n);
                    }
                    markUnmounted() {
                      (this.EP = !0), this.EL.markChildDeleted(this.EK);
                    }
                  })(this, r);
                (this.EU = i), (i.EQ = !!t || null), i.markUpdating();
              }
              componentDidMount() {
                this.EU.markUpdated();
              }
              getSnapshotBeforeUpdate() {
                return this.EU.markUpdating(), null;
              }
              componentDidUpdate() {
                this.EU.markUpdated();
              }
              componentWillUnmount() {
                this.EU.markUnmounted();
              }
              addSoftKeys() {
                __LOG__(4)`addSoftKeys unimplemented`,
                  SEND_LOGS("softkeys-unimplemented");
              }
            }),
          (e.contextTypes = h),
          (e.childContextTypes = h),
          n
        );
      }
      var p =
        ((s = a =
          class extends u.a {
            constructor() {
              var t;
              return (
                (t = super(...arguments)),
                (this.EV = null),
                (this.EO = !0),
                (this.EW = !1),
                (this.EX = new Map()),
                (this.EY = { selectionParentNode: new d(this) }),
                (this.EZ = !1),
                t
              );
            }
            getChildContext() {
              return this.EY;
            }
            componentDidMount() {
              (this.EZ = !0), this.fireSelectionUpdate();
            }
            componentWillUnmount() {
              this.EZ = !1;
            }
            markChildrenUpdating() {
              this.EW = !0;
            }
            markChildrenUpdated(t) {
              (this.EW = !1),
                (this.EO || t) && this.EZ && this.fireSelectionUpdate();
            }
            markAltSelectionUpdated(t, e, n) {
              var r = this.EX;
              n
                ? (r.set(t, e), this.markDirty())
                : e === r.get(t) && (r.delete(t), this.markDirty());
            }
            markDirty() {
              this.EO ||
                ((this.EO = !0),
                this.EW ||
                  this.EV ||
                  (this.EV = Promise.resolve().then(() => {
                    (this.EV = null),
                      this.EZ && this.EO && this.fireSelectionUpdate();
                  })));
            }
            fireSelectionUpdate() {
              this.EO = !1;
              for (var t = [], e = this.EY.selectionParentNode.selected; e; ) {
                t.push(e);
                var n = e.EU;
                e = null == n ? void 0 : n.context.selectionParentNode.selected;
              }
              this.props.onSelectionUpdate(t, this.EX);
            }
            render() {
              return this.props.children || null;
            }
          }),
        (a.childContextTypes = h),
        s);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      var r = n(1),
        i = (n(13), n(61)),
        a = n(18),
        s = n(305),
        u = class extends i.a {
          BU(t, e, n) {
            if (null != n)
              return function () {
                e(), null != n && "CLOSE" !== n && n(t);
              };
          }
          addSoftKeys(t, e) {
            var n = this.props,
              r = this.BU(e, n.close, n.onBack || "CLOSE");
            r && t.setBack(r);
            var i = this.BU(e, n.close, n.onEndCall);
            i && t.setOnEndCall(i);
            var a = this.BU(e, n.close, n.onSoftLeft);
            (n.left || n.leftIcon) &&
              a &&
              (n.left
                ? t.setLeftLabel(n.left, a)
                : n.leftIcon && t.setLeftIcon(n.leftIcon, a));
            var s = this.BU(e, n.close, n.onSoftCenter);
            (n.center || n.centerIcon) &&
              s &&
              (n.center
                ? t.setCenterLabel(n.center, s)
                : n.centerIcon && t.setCenterIcon(n.centerIcon, s));
            var u = this.BU(e, n.close, n.onSoftRight);
            (n.right || n.rightIcon) &&
              u &&
              (n.right
                ? t.setRightLabel(n.right, u)
                : n.rightIcon && t.setRightIcon(n.rightIcon, u));
            var o = n.full;
            o && t.setFull(o);
          }
          render() {
            var t = this.props,
              e = t.text,
              n = t.title,
              i = n
                ? (0, r.f)(
                    1,
                    "div",
                    "a X FV FS",
                    (0, r.b)(2, a.b, { l10n: n }),
                    2
                  )
                : null;
            return (0, r.f)(
              1,
              "div",
              "Z W",
              [
                i,
                (0, r.b)(2, s.a, {
                  className: "b Y",
                  children:
                    null != e
                      ? (0, r.f)(
                          1,
                          "div",
                          "c FS",
                          "function" == typeof e
                            ? e()
                            : (0, r.b)(2, a.b, { l10n: e }),
                          0
                        )
                      : this.props.children,
                }),
              ],
              0
            );
          }
        };
      e.a = u;
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1),
        i = (n(13), n(23)),
        a = n.n(i),
        s = n(380),
        u = n(401);
      function o(t) {
        var e = t.className,
          n = t.hasFocusPriority,
          i = t.defaultValue,
          o = t.placeholder,
          l = t.onChange,
          c = t.onKeyDown,
          d = t.forwardedRef;
        return (0, r.f)(
          1,
          "div",
          (0, a.a)(e, "HN", n && "HQ"),
          [
            (0, r.b)(2, u.a, { className: "HO" }),
            (0, r.b)(
              2,
              s.a,
              {
                type: "text",
                hasFocusPriority: n,
                className: "HP",
                placeholder: o || 775,
                defaultValue: i,
                onChange: l,
                onKeyDown: c,
              },
              null,
              d
            ),
          ],
          4
        );
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return It;
      }),
        n.d(e, "b", function () {
          return kt;
        }),
        n.d(e, "d", function () {
          return Dt;
        }),
        n.d(e, "a", function () {
          return Nt;
        }),
        n.d(e, "e", function () {
          return Mt;
        });
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(161),
        o = n(235),
        l = n(44),
        c = n(350),
        d = n(125),
        h = n(226),
        v = n(15),
        f = n(77),
        p = n(27),
        _ = n(47),
        m = n(18),
        g = n(303),
        b = n(202),
        S = n(430),
        E = n(379),
        O = n(21);
      function A(t) {
        var e = t.count;
        return (0, r.f)(1, "div", "Lo", e > 0 && (0, O.i)(e), 0);
      }
      var y = n(121),
        C = n(431),
        L = n(211),
        T = n(414),
        w = n(40),
        I = n(307),
        k = n(196),
        D = n(7),
        N = n(17),
        G = n(42),
        M = n(52),
        R = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "m8.126 6.025 2.555-2.654a.217.217 0 01.246-.054.233.233 0 01.137.218V9.1l3.848 3.998a.318.318 0 010 .441l-.353.367a.295.295 0 01-.425 0l-.985-1.023-5.987-6.281-2.601-2.703a.321.321 0 010-.441l.352-.366a.295.295 0 01.426 0l2.787 2.933zm-2.078.624 5.016 5.239v2.876a.232.232 0 01-.138.219.217.217 0 01-.247-.056l-3.134-3.256h-2.79c-.417 0-.755-.352-.755-.786v-3.45c0-.433.336-.785.753-.786h1.295z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        },
        P = n(269),
        U = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "m9.2 14.6.1-.4v-.6a9 9 0 000-.2V13l.1-1.5.3-.8a2.5 2.5 0 011.1-1.1 2.8 2.8 0 01.8-.3h2a3.6 3.6 0 00.6 0 2 2 0 00.5-.2 4.8 4.8 0 01-1.4 2.4 144 144 0 01-2 2 4.8 4.8 0 01-2.1 1zm-1.8.2h-.5a9 9 0 01-1.9-.1 4.7 4.7 0 01-1.3-.4 4.4 4.4 0 01-1.1-.8 4.4 4.4 0 01-.8-1.1 4.6 4.6 0 01-.5-1.3 8.8 8.8 0 01-.1-1.4 29.2 29.2 0 010-.6V6.3A8.7 8.7 0 011.3 5c.1-.5.2-1 .5-1.3a4.4 4.4 0 011.9-2A4.7 4.7 0 015 1.3a9 9 0 011.4-.1h1.9a63.8 63.8 0 012.7.1c.5.1 1 .2 1.3.4a4.4 4.4 0 012 2l.4 1.3a8.6 8.6 0 01.1 2v.2a2.6 2.6 0 010 .3.9.9 0 01-.5.7 1 1 0 01-.3.1 2.7 2.7 0 01-.4 0h-.5l-1.7.1a3.8 3.8 0 00-1 .4 3.5 3.5 0 00-1 .6 3.5 3.5 0 00-1 2v2a7.4 7.4 0 010 .6.9.9 0 01-.6.7 1 1 0 01-.3 0 1.3 1.3 0 01-.1.1z",
            }),
            2,
            { viewBox: "0 0 16 16" }
          );
        },
        j = n(359),
        x = n(404),
        F = n(405),
        V = n(406),
        B = n(393),
        $ = n(407),
        H = n(432),
        z = n(360),
        W = n(319),
        J = n(433),
        K = n(318),
        q = n(301),
        Y = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            [
              (0, r.f)(
                32,
                "g",
                null,
                [
                  (0, r.f)(32, "path", null, null, 1, {
                    d: "M15.146 7.954a.844.844 0 01.879.807c.127 3.017-1.682 5.902-4.66 6.975a7.028 7.028 0 01-.995.278.844.844 0 11-.333-1.654c.252-.05.505-.121.757-.212 2.255-.813 3.642-3.007 3.545-5.316a.844.844 0 01.807-.878zM3.414 6.249a.845.845 0 01.53 1.069 5.432 5.432 0 00.026 3.56 5.357 5.357 0 003.994 3.482.844.844 0 11-.333 1.655A7.044 7.044 0 012.38 11.44a7.12 7.12 0 01-.035-4.663.844.844 0 011.07-.53zm.37-.686a.844.844 0 01-.055-1.192c2.034-2.23 5.017-3.107 8.127-1.807.317.147.619.316.903.503a.844.844 0 01-.929 1.41 5.334 5.334 0 00-.686-.384c-2.3-.97-4.61-.292-6.168 1.415a.844.844 0 01-1.192.055z",
                  }),
                  (0, r.f)(32, "path", null, null, 1, {
                    d: "M9 6.469A2.531 2.531 0 1011.532 9a.844.844 0 111.687 0 4.219 4.219 0 11-1.984-3.579.844.844 0 11-.895 1.43A2.516 2.516 0 009 6.47z",
                  }),
                ],
                4,
                {
                  "fill-rule": "evenodd",
                  "clip-path": "url(#a)",
                  "clip-rule": "evenodd",
                }
              ),
              (0, r.f)(
                32,
                "defs",
                null,
                (0, r.f)(
                  32,
                  "clipPath",
                  null,
                  (0, r.f)(32, "rect", null, null, 1, {
                    width: "18",
                    height: "18",
                    fill: "#fff",
                    rx: "9",
                  }),
                  2,
                  { id: "a" }
                ),
                2
              ),
            ],
            4,
            { fill: "none", viewBox: "0 0 18 18" }
          );
        },
        X = "FB",
        Q = "FE FW FS FY FU",
        Z = "FJ",
        tt = n(273);
      function et(t, e, n) {
        try {
          var r = { styles: e || [], parsedPhoneNumbers: null, allEmojis: !1 };
          return (0, _.d)(t, r);
        } catch (e) {
          return t;
        }
      }
      function nt(t) {
        var e = t.preview,
          n = e.content,
          i = e.meta,
          a = null,
          u = null,
          o = !1;
        switch (n.type) {
          case "gp2":
            var l = (0, b.b)(i, n, t.contacts);
            return l
              ? { previewText: (0, r.b)(2, m.b, { l10n: l }) }
              : { previewText: null };
          case "biz":
            var c = (0, D.q)(t.chatJid);
            if (!c)
              return (
                __LOG__(4)`Group jid received for biz message`,
                SEND_LOGS("biz-message-in-group"),
                { previewText: null }
              );
            var d = (0, S.b)(n, c, t.contacts).l10n;
            return { previewText: (0, r.b)(2, m.b, { l10n: d }) };
          case "contact_block_change":
            var h = (0, b.a)(n);
            return { previewText: (0, r.b)(2, m.b, { l10n: h }) };
          case "futureproof":
            "document" === n.subtype
              ? ((a = (0, r.b)(2, W.a, { className: X })),
                (u = (0, r.b)(2, m.b, { l10n: 255 })))
              : (u = (0, r.b)(2, m.b, {
                  l10n: (0, k.c)(n.subtype),
                  className: "FI",
                }));
            break;
          case "revoked":
            var _ = n.adminJid;
            (a = (0, r.b)(2, V.a, { className: X })),
              (u =
                null == _
                  ? i.fromMe
                    ? (0, r.b)(2, m.b, { l10n: 773, className: Z })
                    : (0, r.b)(2, m.b, { l10n: 772, className: Z })
                  : "@me" === _
                  ? (0, r.b)(2, m.b, { l10n: 771, className: Z })
                  : (0, r.b)(2, m.b, {
                      className: Z,
                      l10n: [(0, p.f)(t.contacts, _), 241],
                    }));
            break;
          case "vcard":
            var g = (function (t) {
              return {
                icon: (0, r.b)(2, F.a, { className: X }),
                text: (0, T.a)(t.total, t.displayNames, L.a, !0),
              };
            })(n);
            (a = g.icon), (u = g.text);
            break;
          case "text":
            u = et(n.text, t.preview.formatting);
            break;
          case "image":
            (a = (0, r.b)(2, P.a, { className: X })),
              (u =
                null == n.caption || "" === n.caption
                  ? (0, r.b)(2, m.b, { l10n: 672 })
                  : et(n.caption, t.preview.formatting));
            break;
          case "viewOnceImage":
            (a = (0, tt.c)(n.viewOnceState, X)),
              (u = (0, tt.d)(n.viewOnceState, "FK"));
            break;
          case "sticker":
            (a = (0, r.b)(2, U, { className: X })),
              (u = (0, r.b)(2, m.b, { l10n: 1001 }));
            break;
          case "video":
            (a = (0, r.b)(2, j.a, { className: X })),
              (u =
                null == n.caption || "" === n.caption
                  ? (0, r.b)(2, m.b, { l10n: 1079 })
                  : et(n.caption, t.preview.formatting));
            break;
          case "viewOnceVideo":
            (a = (0, tt.c)(n.viewOnceState, X)),
              (u = (0, tt.e)(n.viewOnceState, "FK"));
            break;
          case "gif":
            (a = (0, r.b)(2, x.a, { className: X })),
              (u =
                null == n.caption || "" === n.caption
                  ? (0, r.b)(2, m.b, { l10n: 361 })
                  : et(n.caption, t.preview.formatting));
            break;
          case "voice":
            n.isPtt
              ? ((a = (0, r.b)(2, B.a, {
                  className: (0, s.a)(
                    X,
                    i.fromMe && i.ack === v.a.PLAYED && "FD"
                  ),
                })),
                (u = et((0, f.b)(n.duration))))
              : ((a = (0, r.b)(2, $.a, { className: X })),
                (u = et((0, f.b)(n.duration))));
            break;
          case "location":
            var E = n.name ? (0, y.c)(n.name) : null,
              A = n.address ? (0, y.c)(n.address) : null;
            (a = (0, r.b)(2, z.a, { className: X })),
              (u =
                E && A
                  ? (0, O.h)([E, A])
                  : E || A || (0, r.b)(2, m.b, { l10n: 544 }));
            break;
          case "group_invite":
            (a = (0, r.b)(2, H.a, { className: X })),
              (u = (0, r.b)(2, m.b, { l10n: 496 }));
            break;
          case "rich_hsm":
            switch (n.subtype) {
              case "image":
                a = (0, r.b)(2, P.a, { className: X });
                break;
              case "location":
                a = (0, r.b)(2, z.a, { className: X });
                break;
              case "video":
                a = (0, r.b)(2, j.a, { className: X });
                break;
              case "document":
                a = (0, r.b)(2, W.a, { className: X });
                break;
              default:
                n.subtype;
            }
            u = et(n.text, t.preview.formatting);
            break;
          case "hsm_button_reply":
            u = et(n.text, t.preview.formatting);
            break;
          case "document":
            var C = (function (t) {
              var e = (0, I.a)(t, "shouldExcludeFileExtension");
              return { icon: (0, r.b)(2, W.a, { className: X }), text: e };
            })(n);
            (a = C.icon), (u = C.text);
            break;
          case "ciphertext":
          case "placeholder":
            u = (0, r.b)(2, m.b, { l10n: 136 });
            break;
          case "ephemeral_change":
            var w = (0, b.e)(
              i,
              t.contacts,
              n.ephemeralExpiration,
              !0 === n.updated
            );
            (u = (0, r.b)(2, m.b, { l10n: w })), (o = !0);
            break;
          case "ephemeral_change_fail":
            var G = i.author;
            if (null == G) return { previewText: null };
            var R = (0, b.d)(t.contacts, G, n.expiration);
            (u = (0, r.b)(2, m.b, { l10n: R })), (o = !0);
            break;
          case "default-disappearing-mode":
            if ((0, N.a)("disappearing_mode")) {
              var K = (0, D.q)(t.chatJid);
              if (!K)
                return (
                  __LOG__(
                    4
                  )`Group jid received for default disappearing mode message`,
                  SEND_LOGS("default-disappearing-mode-message-in-group"),
                  { previewText: null }
                );
              var q = n.ephemeralExpiration,
                Q = n.initiator,
                nt = (0, b.c)(K, t.contacts, q, Q);
              u = (0, r.b)(2, m.b, { l10n: nt });
            } else {
              var rt = (0, b.e)(i, t.contacts, n.ephemeralExpiration, !1);
              u = (0, r.b)(2, m.b, { l10n: rt });
            }
            o = !0;
            break;
          case "keep-in-chat":
            u = (0, r.b)(2, m.b, { l10n: 528 });
            break;
          case "poll":
            (a = (0, r.b)(2, J.a, { className: X })),
              (u = et(n.name, t.preview.formatting));
            break;
          case "expired":
            return {
              previewText: (0, r.b)(2, m.b, { l10n: 302, className: "FH" }),
            };
          default:
            return n.type, { previewText: null };
        }
        return (
          (0, M.u)() &&
            t.preview.isStatusReply &&
            (a = (0, r.c)([(0, r.b)(2, Y, { className: X }), a], 0)),
          { previewIcon: a, previewText: u, hideAck: o }
        );
      }
      function rt(t) {
        var e,
          n = t.preview,
          i = n.content,
          a = n.meta,
          u = nt(t),
          o = u.previewIcon,
          l = u.previewText,
          c = u.hideAck;
        if (null == l) return null;
        if (a.fromMe) {
          var d =
            !c &&
            ("revoked" !== i.type || (0, G.g)(a.ack) || a.ack === v.a.CLOCK);
          e = (0, r.c)(
            [
              d
                ? (0, r.b)(2, g.a, {
                    ack: a.ack,
                    className: (0, s.a)("FA", (0, G.i)(a.ack) && "FQ"),
                  })
                : null,
              o,
              l,
            ],
            0
          );
        } else {
          if (!a.author)
            return __LOG__(2)`Authorless non-admin message in preview`, l;
          var h = a.author,
            f = (0, r.c)([o, l], 0);
          e = (0, D.p)(t.chatJid)
            ? (0, r.b)(2, m.b, {
                l10n: [
                  (0, r.b)(
                    2,
                    p.a,
                    { jid: h, contacts: t.contacts, prefer: "short" },
                    "author"
                  ),
                  (0, r.f)(1, "span", null, f, 0, { dir: "auto" }, "message"),
                  9,
                ],
              })
            : f;
        }
        return e;
      }
      var it = class extends i.a {
        shouldComponentUpdate(t, e) {
          var n = this.props;
          return (
            n !== t &&
            (n.preview !== t.preview ||
              n.chatJid !== t.chatJid ||
              n.contacts !== t.contacts)
          );
        }
        render() {
          return this.props.preview
            ? (0, r.b)(2, rt, {
                preview: this.props.preview,
                contacts: this.props.contacts,
                chatJid: this.props.chatJid,
              })
            : E.a;
        }
      };
      function at(t) {
        return (0, w.k)(t.chat) ? (0, r.b)(2, R, { className: "FL" }) : null;
      }
      function st(t) {
        var e = t.chat,
          n = t.contacts,
          i = t.selected,
          a =
            (t.className,
            (function (t) {
              var e = (function (t) {
                  return 0 === t.msgInfo.unreadMsgCount
                    ? null
                    : (0, r.f)(
                        1,
                        "div",
                        "FM",
                        (0, r.b)(2, A, { count: t.msgInfo.unreadMsgCount }),
                        2
                      );
                })(t),
                n = (function (t) {
                  return "GROUP" !== t.type ||
                    t.archived ||
                    null == t.importantMsgCount ||
                    t.importantMsgCount <= 0 ||
                    !(0, N.a)("important_messages")
                    ? null
                    : (0, r.f)(1, "div", "FN", "@", 16);
                })(t),
                i = (function (t) {
                  return t.archived
                    ? (0, r.f)(
                        1,
                        "div",
                        null,
                        (0, r.b)(2, m.b, { l10n: 26, className: "FO Lo" }),
                        2
                      )
                    : null;
                })(t),
                a = (function (t) {
                  return (0, w.k)(t)
                    ? (0, r.b)(2, C.a, {
                        chat: t,
                        children: (0, r.b)(2, at, { chat: t }),
                      })
                    : null;
                })(t);
              return e || i || a
                ? (0, r.f)(1, "div", "FF", [e, n, i, a], 0)
                : null;
            })(e)),
          u = e.msgInfo.preview;
        return (0, r.f)(
          1,
          "div",
          (0, s.a)("Ez", i && "FC"),
          [
            (0, r.f)(
              1,
              "div",
              Q,
              u && "reaction" === u.type
                ? (0, r.b)(2, ot, {
                    preview: u,
                    chatJid: e.jid,
                    contacts: n,
                    chatType: e.type,
                  })
                : (0, r.b)(2, it, { preview: u, chatJid: e.jid, contacts: n }),
              0
            ),
            a,
          ],
          0
        );
      }
      function ut(t) {
        var e,
          n,
          i = t.chat,
          a = t.selected;
        return (
          "finished" !== i.job.step.status
            ? ((n = 667), (e = (0, r.b)(2, K.a, { className: "FP" })))
            : ((n = 665), (e = (0, r.b)(2, q.a, { className: "FG" }))),
          (0, r.f)(
            1,
            "div",
            (0, s.a)("Ez", a && "FC"),
            [
              (0, r.f)(1, "div", Q, (0, r.b)(2, m.b, { l10n: n }), 2),
              (0, r.f)(1, "div", "FF", e, 0),
            ],
            4
          )
        );
      }
      function ot(t) {
        var e = t.preview,
          n = t.chatJid,
          i = t.contacts,
          a = t.chatType,
          s = nt({ preview: e.msg, chatJid: n, contacts: i }),
          u = s.previewText,
          o = s.previewIcon,
          l = (0, _.b)(e.reaction),
          c = e.meta,
          d = c.fromMe,
          h = c.author,
          v = (0, r.c)([o ? (0, r.c)([o, (0, r.e)(" ")], 0) : null, u], 0);
        switch (a) {
          case "ONE_TO_ONE":
            return d
              ? (0, r.b)(2, m.b, { l10n: [v, l, 219] })
              : (0, r.b)(2, m.b, { l10n: [v, l, 217] });
          default:
            return h && !d
              ? (0, r.b)(2, m.b, { l10n: [(0, p.g)(i, h), v, l, 221] })
              : (0, r.b)(2, m.b, { l10n: [v, l, 220] });
        }
      }
      var lt = n(450),
        ct = n(189);
      function dt(t, e, n, i, a, u) {
        return (0, r.f)(
          1,
          "div",
          (0, s.a)("Et", i && "Ev"),
          [
            (0, r.f)(1, "div", "Eu FV FS FY FU", t, 0),
            u && (0, r.b)(2, ct.a, { className: "Ey" }),
            null == a || n
              ? null
              : (0, r.b)(2, lt.a, {
                  ts: a,
                  className: (0, s.a)("Ew", e && "Ex"),
                }),
          ],
          0
        );
      }
      function ht(t) {
        var e,
          n = t.selected,
          i = t.chat,
          a = t.renderFast,
          s = t.contacts,
          u = null == (e = i.msgInfo.preview) ? void 0 : e.ts;
        return dt(
          (0, r.b)(2, p.a, { jid: i.jid, contacts: s }),
          i.msgInfo.unreadMsgCount > 0,
          a,
          n,
          u
        );
      }
      function vt(t) {
        var e,
          n = t.selected,
          r = t.chat,
          i = t.renderFast,
          a = null == (e = r.msgInfo.preview) ? void 0 : e.ts,
          s = r.msgInfo.unreadMsgCount > 0;
        return dt((0, _.b)(r.groupInfo.title), s, i, n, a, r.groupInfo.support);
      }
      function ft(t) {
        var e = t.selected,
          n = t.chat,
          r = t.renderFast;
        return dt(
          (0, _.b)(n.groupInfo.title),
          n.msgInfo.unreadMsgCount > 0,
          r,
          e,
          null
        );
      }
      var pt = n(179),
        _t = n(107),
        mt = n(346),
        gt = n(19),
        bt = n(200),
        St = n(61),
        Et = n(59),
        Ot = n(14),
        At = n(108),
        yt = n(270),
        Ct = "DL FW FS FY FU DK",
        Lt = "DM DL FW FS FY FU DK",
        Tt = "DN Fa";
      function wt(t, e, n, i) {
        return (0, r.b)(2, d.k, {
          selected: t,
          className: "DH",
          children: [
            e,
            (0, r.f)(1, "div", (0, s.a)("DI", t && "DJ"), [n, i], 0),
          ],
        });
      }
      var It = class extends St.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Go = (t) => {
                var e = this.props,
                  n = e.chat,
                  r = e.contacts,
                  i = new u.a();
                (0, h.c)(t, i, n, r), (0, gt.j)(i);
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.blocked !== t.blocked ||
                n.chat !== t.chat ||
                n.contacts !== t.contacts ||
                n.selected !== t.selected ||
                n.renderFast !== t.renderFast ||
                n.isVoipAvailable !== t.isVoipAvailable)
            );
          }
          addSoftKeys(t, e) {
            var n = this.props,
              r = n.blocked,
              i = n.chat,
              a = n.contacts,
              s = n.isVoipAvailable;
            if (
              (t.setRightOptions(this.Go),
              t.setCenterLabel(903, () => {
                (0, At.c)(e, i.id, "unread");
              }),
              s)
            ) {
              var u = i.jid,
                o = !!r[u];
              t.setOnCall(() => (0, c.a)((0, l.c)(u, a), e, o, "chatList"));
            }
          }
          render() {
            var t = this.props,
              e = t.chat,
              n = t.contacts,
              i = t.selected,
              a = t.renderFast;
            return wt(
              i,
              (0, r.b)(2, _t.c, {
                className: Tt,
                jid: e.jid,
                ephemeral: "ONE_TO_ONE",
              }),
              (0, r.b)(2, ht, {
                selected: i,
                chat: e,
                contacts: n,
                renderFast: a,
              }),
              (0, r.b)(2, pt.b, {
                chat: e,
                selected: i,
                className: i ? Lt : Ct,
                WhileIdle: st,
              })
            );
          }
        },
        kt = class extends St.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Go = (t) => {
                var e = this.props,
                  n = e.chat,
                  r = e.connected,
                  i = new u.a();
                (0, h.b)(t, i, n, r), (0, gt.j)(i);
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.chat !== t.chat ||
                n.selected !== t.selected ||
                n.connected !== t.connected ||
                n.renderFast !== t.renderFast)
            );
          }
          addSoftKeys(t, e) {
            var n = this.props.chat;
            t.setRightOptions(this.Go),
              t.setCenterLabel(903, () => {
                (0, At.c)(e, n.id, "unread");
              });
          }
          render() {
            var t,
              e = this.props,
              n = e.chat,
              i = e.selected,
              a = e.renderFast,
              s = !!(null == (t = n.groupInfo) ? void 0 : t.isCAG);
            return wt(
              i,
              (0, r.b)(2, _t.c, {
                className: Tt,
                jid: n.jid,
                ephemeral: n.groupInfo.expiration || Ot.k,
                isCAG: s,
              }),
              (0, r.b)(2, vt, { selected: i, chat: n, renderFast: a }),
              (0, r.b)(2, pt.a, {
                chat: n,
                selected: i,
                className: i ? Lt : Ct,
                WhileIdle: st,
              })
            );
          }
        },
        Dt = class extends St.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Go = (t) => {
                var e = this.props.chat,
                  n = new u.a();
                (0, h.d)(t, n, e), (0, gt.j)(n);
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.chat !== t.chat ||
                n.selected !== t.selected ||
                n.renderFast !== t.renderFast)
            );
          }
          addSoftKeys(t, e) {
            var n = this.props.chat;
            t.setRightOptions(this.Go),
              "finished" === n.job.step.status &&
                t.setCenterLabel(920, () => {
                  (0, o.c)(e, n);
                });
          }
          render() {
            var t = this.props,
              e = t.chat,
              n = t.selected,
              i = t.renderFast;
            return wt(
              n,
              (0, r.b)(2, mt.a, {
                className: Tt,
                groupPicture: e.groupInfo.groupPicture,
              }),
              (0, r.b)(2, ft, { selected: n, chat: e, renderFast: i }),
              (0, r.b)(2, ut, { selected: n, chat: e })
            );
          }
        },
        Nt = class extends St.b {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.blocked !== t.blocked ||
                n.contact !== t.contact ||
                n.isVoipAvailable !== t.isVoipAvailable ||
                n.selected !== t.selected)
            );
          }
          addSoftKeys(t, e) {
            var n = this.props,
              r = n.blocked,
              i = n.contact,
              a = n.isVoipAvailable;
            if (
              (t.setCenterLabel(903, () => {
                (0, At.a)(e, i.jid, "unread");
              }),
              t.setRightOptions(() => {
                var t = new u.a();
                (0, h.a)(e, t), (0, gt.j)(t);
              }),
              a)
            ) {
              var s = !!r[i.jid];
              t.setOnCall(() => (0, c.a)(i, e, s, "chatList"));
            }
          }
          render() {
            var t = this.props,
              e = t.contact,
              n = t.selected;
            return (0, r.b)(2, d.f, { contact: e, selected: n });
          }
        },
        Gt = class extends St.b {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t && (n.selected !== t.selected || n.banner !== t.banner)
            );
          }
          componentDidMount() {
            var t = this.props,
              e = t.banner,
              n = t.backend;
            (0, yt.b)(n, e), super.componentDidMount();
          }
          Gp() {
            return "";
          }
          addSoftKeys(t, e) {
            var n = this.props.banner,
              r = n.action;
            switch (r.type) {
              case "open-link":
                t.setCenterLabel(903, () => {
                  (0, bt.f)(e, r, () => {
                    (0, bt.d)(e),
                      (0, bt.c)(
                        e,
                        this.props.banner.id,
                        this.props.banner.version,
                        "banner"
                      ),
                      WAM.log("regular", 2472, void 0, [
                        1,
                        0,
                        n.id,
                        2,
                        0,
                        n.version,
                        3,
                        0,
                        2,
                      ]);
                  });
                });
                break;
              case "open-modal":
                t.setCenterLabel(903, () => {
                  e.dispatch({
                    type: "USER_NOTICE_UPDATED",
                    userNotice: r.modal,
                  }),
                    WAM.log("regular", 2472, void 0, [
                      1,
                      0,
                      n.id,
                      2,
                      0,
                      n.version,
                      3,
                      0,
                      2,
                    ]);
                });
                break;
              default:
                r.type;
            }
            t.setRightOptions(() => {
              var t = new u.a();
              (0, h.a)(e, t), (0, gt.j)(t);
            });
          }
          render() {
            var t = this.props,
              e = t.banner,
              n = t.selected;
            return (0, r.b)(2, d.j, {
              selected: n,
              className: (0, s.a)(!n && "DO"),
              rawTitle: (0, r.f)(
                1,
                "div",
                "DR FW FS",
                (0, r.b)(2, bt.b, {
                  text: e.content.text,
                  getNextLinkId: this.Gp,
                }),
                2,
                { dir: e.direction }
              ),
              icon: (0, r.f)(
                1,
                "div",
                (0, s.a)("DP", !n && "DQ"),
                (0, r.b)(2, bt.a, { svgIcon: e.content.svgIcon }),
                2
              ),
            });
          }
        },
        Mt = (0, Et.j)(Gt);
    },
    function (t, e, n) {
      var r = n(1),
        i = n(13),
        a = n(21),
        s = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              fill: "none",
              d: "M48.407 33.37c5.775-2.654 9.387-7.064 10.773-12.804m5.774 17.901c4.573-5.818 4.761-15.372-.01-21.227M38.253 38.467c-4.573-5.818-4.761-15.372.01-21.227m13.521 5.814c-.138-1.678-.297-2.671-.717-4.356m-5.269 5.482c-.353-1.646-.653-2.574-1.262-4.2m49.494-1.561 7.575.033M83.828 36.607l5.778-18.088M72.944 36.62l7.532.087M9.155 18.529l-7.574.033m17.777 18.265L13.58 18.518M30.242 36.62l-7.531.087",
            }),
            2,
            { viewBox: "0 0 103 42" }
          );
        },
        u = n(132),
        o = class extends i.a {
          static getDerivedStateFromError(t) {
            return (
              __LOG__(4)`ErrorBoundary captured error: ${t}`, { hasError: !0 }
            );
          }
          constructor() {
            super(),
              (this.BV = !1),
              (this.BW = {
                translated: !1,
                title: "WhatsApp",
                description: "Something went wrong. Please restart WhatsApp.",
                action: "Restart",
              }),
              (this.BX = (t) => {
                this.state.hasError &&
                  ("Enter" === t.key
                    ? self.location.reload(!0)
                    : ("Backspace" !== t.key && "EndCall" !== t.key) ||
                      (0, u.closeApp)());
              }),
              (this.state = { hasError: !1 });
          }
          componentWillUnmount() {
            document.removeEventListener("keydown", this.BX);
          }
          componentDidCatch(t, e) {
            document.addEventListener("keydown", this.BX),
              __LOG__(4)`Component stack: ${e.componentStack}`,
              this.BV
                ? __LOG__(4)`ErrorBoundary error ${t}, stack: ${
                    null == t ? void 0 : t.stack
                  } (not uploading logs as an attempt was made on the first error)`
                : ((this.BV = !0),
                  __LOG__(4)`ErrorBoundary error ${t}, stack: ${
                    null == t ? void 0 : t.stack
                  }`,
                  SEND_LOGS("error-boundary-error"));
          }
          BY() {
            (this.BW.translated = !0),
              this.BZ("title", 1110),
              this.BZ("description", 352),
              this.BZ("action", 351);
          }
          BZ(t, e) {
            try {
              var n = (0, a.j)(e);
              n && (this.BW[t] = n);
            } catch (t) {}
          }
          render() {
            return this.state.hasError
              ? (this.BW.translated || this.BY(),
                (0, r.f)(
                  1,
                  "div",
                  "H d",
                  [
                    (0, r.f)(1, "div", "I BY", this.BW.title, 0),
                    (0, r.f)(
                      1,
                      "div",
                      "J Ba",
                      [
                        (0, r.b)(2, s, { className: "M" }),
                        (0, r.f)(1, "div", "N", this.BW.description, 0),
                      ],
                      4
                    ),
                    (0, r.f)(
                      1,
                      "div",
                      "K g",
                      (0, r.f)(1, "div", "L k i", this.BW.action, 0),
                      2
                    ),
                  ],
                  4,
                  { tabIndex: "1" }
                ))
              : this.props.children;
          }
        };
      e.a = o;
    },
    ,
    function (t, e, n) {
      n.d(e, "d", function () {
        return a;
      }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "g", function () {
          return h;
        });
      var r = n(53),
        i = n(197);
      function a(t, e, n) {
        if (null != t && !t.paused) {
          if (null == e)
            return (
              null == n
                ? __LOG__(4)`Playing ${t.type} without any selection`
                : __LOG__(4)`Playing ${t.type} while selecting item`,
              !0
            );
          if (e !== t.msgId)
            return __LOG__(4)`Playing ${t.type} while selecting`, !0;
        }
        return !1;
      }
      function s(t, e, n) {
        null != t.meta.author &&
          (("voice" === t.content.type && t.content.isPtt) ||
            ("video" === t.content.type &&
              "active" === t.content.viewOnceState)) &&
          "ready" === t.content.mediaStatus.type &&
          !t.content.mediaStatus.played &&
          n.markPlayed(t.id, e);
      }
      function u(t, e, n, i, a, u) {
        var o = () => {
            s(e, a, t);
            var o,
              l = n.duration || 0,
              c = 0;
            if ("video" === n.type || "gif" === n.type) {
              c = n.rotation || 0;
              var d =
                (null != n.width && null != n.height && n.width > n.height) !=
                self.innerWidth > self.innerHeight;
              o = Object.assign(
                {
                  type: n.type,
                  msgId: e.id,
                  duration: l,
                  contentRef: i,
                  playSideways: d,
                  rotation: c,
                  loading: !0,
                },
                u
              );
            } else {
              if ((n.type, !(0, r.a)(t.getStoreState())))
                return void __LOG__(
                  4
                )`Tried to playMediaMsg not in registered mode`;
              o = {
                type: "audio",
                msgId: e.id,
                duration: l,
                contentRef: i,
                paused: !1,
                loading: !0,
                isPtt: n.isPtt,
              };
            }
            t.dispatch({ type: "PLAY_MEDIA", player: o });
          },
          l = null == u ? void 0 : u.onBeforePlay;
        return null != l ? () => l(o) : o;
      }
      function o(t, e, n, r, i, a) {
        d(t, e, n, r, i, a);
      }
      function l(t, e, n, r, i) {
        d(t, e, n, r, i);
      }
      function c(t, e, n, r, a) {
        var s,
          o = r.mediaStatus;
        "ready" === o.type
          ? t.setCenterLabel(930, u(e, n, r, o.ref, a))
          : (0, i.a)(t, null != (s = n.meta.fromMe) && s, o, {
              id: n.id,
              chatJid: a,
              origin: "chat",
            });
      }
      function d(t, e, n, r, a, s) {
        var o,
          l = r.mediaStatus;
        "ready" === l.type
          ? t.setCenterLabel(907, u(e, n, r, l.ref, a, s))
          : (0, i.a)(t, null != (o = n.meta.fromMe) && o, l, {
              id: n.id,
              chatJid: a,
              origin: "chat",
            });
      }
      function h(t) {
        return "1x" === t ? 1 : "1.5x" === t ? 1.5 : 2;
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1),
        i = (n(13), n(421)),
        a = n(422),
        s = n(23),
        u = n.n(s);
      function o(t) {
        var e = t.checked,
          n = t.selected,
          s = t.disabled,
          o = t.className,
          l = (0, u.a)("Bm", n && "Bo", s && "Bn");
        return (0, r.f)(
          1,
          "div",
          (0, u.a)("Bl", o),
          e
            ? (0, r.b)(2, i.a, { className: l })
            : (0, r.b)(2, a.a, { className: l }),
          0
        );
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M8.153 3.352h6.669c.65 0 1.178.526 1.178 1.174v8.3c0 .648-.528 1.174-1.178 1.174H3.177C2.527 14 2 13.474 2 12.825V4.68c.014-.248.109-.484.269-.674l1.61-1.719c.18-.17.414-.272.662-.286h1.891c.248.014.484.113.667.28l1.054 1.072zm.835 1.977v.004a3.344 3.344 0 00-3.35 3.337 3.344 3.344 0 003.351 3.336 3.344 3.344 0 003.347-3.34c0-1.843-1.5-3.337-3.348-3.337zm.01.977a2.36 2.36 0 012.18 1.452c.365.879.163 1.89-.512 2.563a2.364 2.364 0 01-2.572.51 2.352 2.352 0 01-1.456-2.174 2.355 2.355 0 012.36-2.347v-.004z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return o;
        });
      var r,
        i = n(3),
        a = n(162);
      function s(t, e) {
        __LOG__(2)`userNoticeTracker: User notice with id ${e.id} displayed. ${
          e.shouldLogWhenDisplayed
            ? "Logging view in the backend"
            : "Not logging view in the backend"
        }`,
          null == r &&
            (r = new (class {
              constructor() {
                (this.Eo = new Set()), (this.Ep = new Map());
              }
              hasBeenDisplayed(t, e) {
                var n,
                  r = e.id;
                this.Eo.has(r) ||
                  ((0, a.b)()
                    ? (e.shouldLogWhenDisplayed &&
                        t.fireAndForget("backend", "logUserNoticeDisplayed", {
                          id: r,
                          ts: (0, i.D)(),
                        }),
                      "banner" === e.type
                        ? (n = 1)
                        : "modal" === e.type
                        ? (n = e.blocking ? 7 : 3)
                        : (e.type, (n = 3)),
                      WAM.log("regular", 2472, void 0, [
                        1,
                        0,
                        r,
                        2,
                        0,
                        e.version,
                        3,
                        0,
                        n,
                      ]),
                      this.Eo.add(r))
                    : this.Ep.set(r, e));
              }
              checkPending(t) {
                this.Ep.forEach((e) => {
                  this.hasBeenDisplayed(t, e);
                }),
                  (this.Ep = new Map());
              }
              reset() {
                (this.Eo = new Set()), (this.Ep = new Map());
              }
            })()),
          r.hasBeenDisplayed(t, e);
      }
      function u(t) {
        r && r.checkPending(t);
      }
      function o(t) {
        var e = t.getStoreState();
        e.userNotice && "modal" === e.userNotice.type
          ? __LOG__(
              2
            )`_maybeUpdateUserNoticeWhenAppHidden: Keeping current modal in store for now.`
          : (r && r.reset(),
            t.sendAndReceive("backend", "getUserNotice", {}).then((e) => {
              null == e ||
                (0, a.b)() ||
                t.dispatch({ type: "USER_NOTICE_UPDATED", userNotice: e });
            }));
      }
    },
    function (t, e, n) {
      n.d(e, "c", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return f;
        });
      var r = n(8),
        i = n.n(r),
        a = n(47),
        s = n(317),
        u = n(40),
        o = n(103),
        l = n(19),
        c = n(52);
      function d(t, e, n) {
        if (t.groupInfo.isInGroup)
          if (e) {
            var r,
              i,
              o = !(0, u.k)(t),
              d = (0, a.b)(t.groupInfo.title);
            (0, c.i)()
              ? ((r = [d, 120]), (i = 400))
              : ((r = 312), (i = [d, 119])),
              (0, l.g)({
                title: r,
                text: i,
                left: 864,
                onSoftLeft: "CLOSE",
                center: 880,
                onSoftCenter: () => {
                  if (t.groupInfo.isInGroup) {
                    if (!e) return void (0, l.e)({ title: 243, text: 314 });
                    n.leaveGroup(t.jid);
                  } else (0, l.e)({ title: 243, text: 313 });
                },
                right: o ? 897 : void 0,
                onSoftRight: o
                  ? function () {
                      (0, l.j)((0, s.a)(n, t.id));
                    }
                  : void 0,
              });
          } else (0, l.e)({ title: 243, text: 314 });
      }
      function h(t, e) {
        null == t ||
          t.groupInfo.isInGroup ||
          (0, l.k)({
            title: [(0, a.b)(t.groupInfo.title), 49],
            save: 872,
            centerKeys: { on: 930, off: 873 },
            defaultItems: [{ key: "delete_media", label: 139, checked: !1 }],
            onSave: (n) => {
              var r = i()(n, 1)[0];
              null == t || t.groupInfo.isInGroup
                ? (0, l.e)({ title: 243, text: 235 })
                : e.deleteChat(
                    t.id,
                    !0,
                    r.checked
                      ? "deleteMediaFromPhoneStorage"
                      : "retainMediaInPhoneStorage"
                  );
            },
          });
      }
      function v(t, e) {
        var n = [{ key: "delete_media", label: 139, checked: !1 }],
          r = t.msgInfo.starredMsgCount;
        r &&
          r > 0 &&
          !e.isStarredIndexMissing() &&
          n.push({ key: "delete_starred", label: 140, checked: !1 }),
          (0, l.k)({
            title: [(0, a.b)(t.groupInfo.title), 35],
            save: 866,
            centerKeys: { on: 930, off: 873 },
            defaultItems: n,
            onSave: (n) => {
              var r = i()(n, 2),
                a = r[0],
                s = r[1];
              return e.clearChat(
                t.id,
                a.checked
                  ? "deleteMediaFromPhoneStorage"
                  : "retainMediaInPhoneStorage",
                null == s || s.checked
                  ? "deleteStarredMessages"
                  : "retainStarredMessages"
              );
            },
          });
      }
      function f(t, e, n) {
        (0, o.j)(t, e.jid), t.openScreen("GROUP_INFO", { chat: e, start: n });
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return D;
      }),
        n.d(e, "b", function () {
          return G;
        }),
        n.d(e, "c", function () {
          return U;
        }),
        n.d(e, "d", function () {
          return j;
        }),
        n.d(e, "e", function () {
          return x;
        });
      var r = n(1),
        i = (n(13), n(267)),
        a = n(18),
        s = n(61),
        u = n(197),
        o = n(303),
        l = n(15),
        c = n(23),
        d = n.n(c),
        h = n(395),
        v = n(196),
        f = n(385),
        p = n(19),
        _ = n(59),
        m = n(370),
        g = n(54),
        b = n(27),
        S = n(96),
        E = n(434),
        O = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M12 21c.055 0 .11 0 .165-.002a1 1 0 00-.036-2C12.086 19 12.043 19 12 19v2zm0-16 .129.001a1 1 0 10.036-2A9.099 9.099 0 0012 3v2zm4.358-.876a1 1 0 10-.97 1.75c.075.04.149.083.222.127a1 1 0 101.033-1.712 8.895 8.895 0 00-.285-.165zm3.353 3.233A1 1 0 1018 8.39c.044.073.087.147.128.221a1 1 0 001.749-.97 8.9 8.9 0 00-.165-.284zM21 11.835a1 1 0 00-2 .036 6.887 6.887 0 010 .258 1 1 0 002 .036 9.008 9.008 0 000-.33zm-1.123 4.523a1 1 0 10-1.75-.97 6.829 6.829 0 01-.127.222 1 1 0 101.712 1.033 8.1 8.1 0 00.165-.285zm-3.233 3.353A1 1 0 1015.61 18a6.829 6.829 0 01-.221.128 1 1 0 10.97 1.749 9.08 9.08 0 00.284-.165zM12 3a9 9 0 000 18v-2a7 7 0 110-14V3z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        },
        A = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M14 12.461h1.294c.445 0 .67.537.355.85l-2.795 2.777a.5.5 0 01-.705 0l-2.795-2.777a.496.496 0 01.35-.85H11V8.387a.5.5 0 01.5-.496h2a.5.5 0 01.5.496v4.074z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        },
        y = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M8.444 10.65h1.372v4.286c0 .472.388.858.863.858h3.45a.862.862 0 00.863-.858v-4.285h1.372c.767 0 1.155-.926.612-1.466l-3.96-3.934a.863.863 0 00-1.216 0L7.84 9.185c-.543.54-.163 1.466.604 1.466zm-2.07 7.715c0 .471.388.857.863.857h10.351a.862.862 0 00.863-.857.862.862 0 00-.863-.857H7.237a.862.862 0 00-.863.857z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        },
        C = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M45.556 26.459a1.51 1.51 0 00-2.139 0L36 33.86l-7.418-7.417a1.51 1.51 0 00-2.138 0 1.51 1.51 0 000 2.139L33.86 36l-7.417 7.417a1.51 1.51 0 000 2.14 1.51 1.51 0 002.139 0L36 38.138l7.417 7.417a1.51 1.51 0 002.14 0 1.51 1.51 0 000-2.139L38.138 36l7.417-7.418a1.52 1.52 0 000-2.123z",
            }),
            2,
            { viewBox: "0 0 72 72" }
          );
        },
        L = n(301),
        T = "GJ",
        w = "GM",
        I = "GN",
        k = class extends s.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.LK = (t, e) => {
                var n = this.props,
                  r = n.ack,
                  i = n.msg,
                  a = n.content,
                  s = n.chatJid,
                  u = n.connected,
                  o = n.chat,
                  c = n.contacts;
                if ("expired" !== P(i) || i.meta.fromMe) {
                  var d,
                    h = a.mediaStatus;
                  "ready" === h.type
                    ? (i.meta.fromMe ||
                        r === l.a.PLAYED ||
                        (d = () => t.markPlayed(i.id, s)),
                      t.openScreen("MSG_IMAGE_VIEW", {
                        msgId: i.id,
                        contentRef: h.ref,
                        onViewed: d,
                        caption: a.caption,
                        onMsgInfo: () => {
                          t.openScreen("VIEW_ONCE_NUX", {
                            chatJid: s,
                            nuxType: "receiver",
                            msgType: "image",
                          });
                        },
                        captionFormatting: (0, v.b)(i),
                        onReportContact: () => F(t, u, o, i),
                        onClose: () => t.unlinkViewOnceMsgsMedia([i.id]),
                      }))
                    : __LOG__(3)`Trying to open a non-ready view once image`;
                } else {
                  var f = (0, b.g)(c, e);
                  (0, p.e)({ title: 1084, text: [f, 300] });
                }
              }),
              t
            );
          }
          addSoftKeys(t, e) {
            var n,
              r = this.props,
              i = r.msg,
              a = r.content,
              s = r.chatJid,
              o = a.mediaStatus,
              l = i.meta.author && (0, g.i)(i.meta.author),
              c = P(i);
            (i.meta.fromMe && "ready" === o.type) ||
              "viewed" === c ||
              (i.meta.fromMe && "expired" === c) ||
              !l ||
              ("ready" !== o.type && "expired" !== c
                ? (0, u.a)(t, null != (n = i.meta.fromMe) && n, o, {
                    id: i.id,
                    chatJid: s,
                    origin: "chat",
                  })
                : t.setCenterLabel(945, () => {
                    (0, S.g)()
                      ? e.openScreen("VIEW_ONCE_NUX", {
                          chatJid: s,
                          nuxType: "receiver",
                          msgType: "image",
                          onClose: () => this.LK(e, l),
                        })
                      : this.LK(e, l);
                  }));
          }
          render() {
            var t = this.props,
              e = t.content,
              n = t.ack,
              i = t.msg,
              a = P(i),
              s = j(a, "GO"),
              u = !0 === i.meta.fromMe;
            return (0, r.b)(2, R, {
              mediaStatus: e.mediaStatus,
              outgoing: u,
              viewOnceState: a,
              ack: n,
              mediaText: s,
              size: e.size,
            });
          }
        },
        D = (0, _.c)(k, (t, e, n) => {
          var r = t.chatlist.chats[n.msg.chatId];
          return (
            null == r &&
              (__LOG__(4)`Invalid chat for view once image message`,
              SEND_LOGS("invalid-viewonce-image-message-chat")),
            Object.assign(
              { connected: t.connected, chat: r, contacts: t.contacts },
              n
            )
          );
        }),
        N = class extends s.b {
          addSoftKeys(t, e) {
            var n = this.props,
              r = n.content,
              a = n.chatJid,
              s = n.msg,
              u = n.connected,
              o = n.chat,
              l = n.contacts,
              c = s.meta.author && (0, g.i)(s.meta.author),
              d = P(s);
            if (
              !(
                (s.meta.fromMe && "ready" === r.mediaStatus.type) ||
                "viewed" === d ||
                (s.meta.fromMe && "expired" === d)
              ) &&
              c
            ) {
              var h = {
                caption: r.caption,
                onMsgInfo: () => {
                  e.openScreen("VIEW_ONCE_NUX", {
                    chatJid: a,
                    nuxType: "receiver",
                    msgType: "video",
                  });
                },
                captionFormatting: (0, v.b)(s),
                onReportContact: () => F(e, u, o, s),
                onClose: () => e.unlinkViewOnceMsgsMedia([s.id]),
                onBeforePlay: (t) => {
                  (0, S.g)()
                    ? e.openScreen("VIEW_ONCE_NUX", {
                        chatJid: a,
                        nuxType: "receiver",
                        msgType: "video",
                        onClose: t,
                      })
                    : t();
                },
              };
              "expired" === d
                ? t.setCenterLabel(907, () => {
                    var t = (0, b.g)(l, c);
                    (0, p.e)({ title: 1085, text: [t, 301] });
                  })
                : (0, i.c)(t, e, s, r, a, h);
            }
          }
          render() {
            var t = this.props,
              e = t.content,
              n = t.ack,
              i = t.msg,
              a = t.player.active,
              s = null != a && a.msgId === i.id && a.loading,
              u = P(i),
              o = x(u, "GO"),
              l = !0 === i.meta.fromMe;
            return (0, r.b)(2, R, {
              mediaStatus: e.mediaStatus,
              outgoing: l,
              viewOnceState: u,
              ack: n,
              mediaText: o,
              isLoading: s,
              size: e.size,
            });
          }
        },
        G = (0, _.c)(N, (t, e, n) => {
          var r = t.chatlist.chats[n.msg.chatId];
          return (
            null == r &&
              (__LOG__(4)`Invalid chat for view once video message`,
              SEND_LOGS("invalid-viewonce-video-message-chat")),
            Object.assign(
              { connected: t.connected, chat: r, contacts: t.contacts },
              n
            )
          );
        });
      function M(t) {
        var e = t.progress;
        return (0, r.b)(2, h.a, {
          theme: "green",
          progress: e,
          strokeWidth: 5,
          className: T,
        });
      }
      function R(t) {
        var e = t.mediaStatus,
          n = t.outgoing,
          i = t.viewOnceState,
          a = t.ack,
          s = t.mediaText,
          u = t.isLoading,
          l = t.size,
          c = !n && ("active" === i || "expired" === i),
          h = null,
          v = null;
        if ("active" === i)
          switch (e.type) {
            case "idle":
              n
                ? (h = (0, r.b)(2, y, { className: (0, d.a)(T, w) }))
                : ((h = (0, r.c)(
                    [
                      (0, r.b)(2, O, { className: (0, d.a)(T, w) }),
                      (0, r.f)(
                        1,
                        "div",
                        I,
                        (0, r.b)(2, A, { className: (0, d.a)(T, w) }),
                        2
                      ),
                    ],
                    4
                  )),
                  null != l &&
                    (v = (0, r.b)(2, f.a, { className: "GR FX FS", size: l })));
              break;
            case "pending":
              h = (0, r.c)(
                [
                  (0, r.b)(2, M),
                  (0, r.f)(1, "div", I, (0, r.b)(2, C, { className: T }), 2),
                ],
                4
              );
              break;
            case "processing":
              h = (0, r.c)(
                [
                  (0, r.b)(2, M, { progress: e.progress }),
                  (0, r.f)(1, "div", I, (0, r.b)(2, C, { className: T }), 2),
                ],
                4
              );
              break;
            case "ready":
              h = u
                ? (0, r.c)(
                    [
                      (0, r.b)(2, M),
                      (0, r.f)(
                        1,
                        "div",
                        I,
                        (0, r.b)(2, C, { className: T }),
                        2
                      ),
                    ],
                    4
                  )
                : U(i, (0, d.a)(T, !n && w));
              break;
            default:
              e.type, (h = (0, r.b)(2, L.a, { className: T }));
          }
        else
          h =
            "viewed" === i
              ? (0, r.b)(2, O, { className: T })
              : U(i, (0, d.a)(T, !n && w));
        var p = null,
          _ = null;
        return (
          n &&
            null != a &&
            "viewed" !== i &&
            ((p = (0, r.b)(2, o.a, { className: "GQ", ack: a })),
            (_ = (0, r.f)(1, "span", "GP"))),
          (0, r.c)(
            [
              (0, r.f)(
                1,
                "div",
                (0, d.a)("GG", c && "GI"),
                [
                  (0, r.f)(
                    1,
                    "div",
                    "GH FW FS",
                    [
                      h,
                      (0, r.f)(
                        1,
                        "span",
                        (0, d.a)("GK", "viewed" !== i && "GL"),
                        s,
                        0
                      ),
                      _,
                    ],
                    0
                  ),
                  p,
                ],
                0
              ),
              v,
            ],
            0
          )
        );
      }
      function P(t) {
        if (!(0, l.D)(t) || null == t.content.viewOnceState)
          throw new Error("getViewOnceMessageState: Not a view once message");
        return t.content.viewOnceState;
      }
      function U(t, e) {
        switch (t) {
          case "viewed":
            return (0, r.b)(2, O, { className: e });
          default:
            return (0, r.b)(2, E.a, { className: e });
        }
      }
      function j(t, e) {
        switch (t) {
          case "viewed":
            return (0, r.b)(2, a.b, { l10n: 1089, className: e });
          default:
            return (0, r.b)(2, a.b, { l10n: 1087 });
        }
      }
      function x(t, e) {
        switch (t) {
          case "viewed":
            return (0, r.b)(2, a.b, { l10n: 1089, className: e });
          default:
            return (0, r.b)(2, a.b, { l10n: 1088 });
        }
      }
      function F(t, e, n, r) {
        if (e)
          if ("ONE_TO_ONE" === n.type)
            (0, m.a)(n.jid, r, (e) => {
              t.reportUserSpam({
                reportType: "message",
                msgId: r.id,
                userJid: n.jid,
                spamFlow: "media_viewer",
                blockUser: e,
                deleteChat: !1,
              });
            });
          else {
            n.type;
            var i =
              !r.meta.fromMe &&
              null != r.meta.author &&
              (0, g.i)(r.meta.author);
            if (!i)
              return (
                __LOG__(4)`ViewOnce: Reporting a message with invalid author`,
                SEND_LOGS("reporting-invalid-author"),
                void (0, p.e)({ title: 243, text: 741 })
              );
            (0, m.a)(i, r, (e) => {
              t.reportGroupSpam({
                reportType: "message",
                msgId: r.id,
                groupChat: n,
                spamFlow: "media_viewer",
                deleteGroup: !1,
                exitGroup: !1,
                blockAuthor: e,
              });
            });
          }
        else (0, p.e)({ title: 243, text: 729 });
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return f;
      }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return m;
        });
      var r,
        i = n(8),
        a = n.n(i),
        s = n(146),
        u = n(109),
        o = n(97),
        l = n(14),
        c = n(3),
        d = n(418),
        h = n(37),
        v = n.n(h);
      function f() {
        return r || (r = new u.BaseContentTable()), r;
      }
      function p(t, e) {
        return Promise.resolve().then(() => {
          switch (t.mode) {
            case "main":
              return Promise.resolve()
                .then(() =>
                  e
                    ? Promise.all([
                        f().updateLastAppWrite(),
                        (0, o.jobsTable)().updateAppRunId(),
                      ])
                    : null
                )
                .then(() =>
                  Promise.all([
                    f().getEverything(),
                    (0, o.jobsTable)().loadAllBookmarks(),
                  ])
                )
                .then((t) => {
                  var e = a()(t, 2),
                    n = e[0],
                    r = e[1];
                  return (0, s.c)(n, r);
                })
                .catch(() => _("corrupted"));
            case "reg":
              return (0, s.e)();
            case "deleting":
              return (0, s.a)();
            case "tempBanned":
              return (0, s.d)();
            case "error":
              return _(t.reason);
            default:
              return (0, v.a)(t.mode);
          }
        });
      }
      function _(t) {
        return "corrupted" === t
          ? (0, d.a)(l.P)
              .then((t) =>
                null == t || t + l.N <= (0, c.D)()
                  ? (0, s.b)("corrupted")
                  : (0, s.b)("corruptedAfterRestart")
              )
              .catch(() => (0, s.b)("corrupted"))
          : Promise.resolve((0, s.b)(t));
      }
      function m() {
        return f().checkStarredIndexMissing();
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return l;
        });
      var r = "closed",
        i = "open",
        a = "appStatus",
        s = null;
      function u() {
        return localStorage.getItem(a) === i;
      }
      function o() {
        if (null == s)
          try {
            localStorage.setItem(a, i), (s = i);
          } catch (t) {
            __LOG__(4)`markAppOpen error ${t}`;
          }
      }
      function l() {
        if (s === i)
          try {
            localStorage.setItem(a, r), (s = r);
          } catch (t) {
            self.ERROR && __LOG__(4)`markAppClosed error ${t}`;
          }
      }
    },
    ,
    ,
    function (t, e, n) {
      function r() {
        return (
          __LOG__(2)`Retrieving contacts from phonebook`,
          new Promise((t, e) => {
            var n = [],
              r = navigator.mozContacts.getAll({
                sortBy: "givenName",
                sortOrder: "ascending",
              });
            (r.onsuccess = () => {
              var e = r.result;
              null != e
                ? (n.push(e.toJSON()), r.continue())
                : (__LOG__(
                    2
                  )`Successfully retrieved ${n.length} contacts from phonebook`,
                  t(n));
            }),
              (r.onerror = (t) => {
                __LOG__(4)`Error reading phone contacts: ${r.error}`,
                  t && __LOG__(4)`Event: ${t} ${t.target}`,
                  e(new Error("Error reading phone contacts"));
              });
          })
        );
      }
      function i() {
        return (
          performance.now(),
          __LOG__(2)`Retrieving contact database revision`,
          new Promise((t, e) => {
            var n = navigator.mozContacts.getRevision();
            (n.onsuccess = () => {
              var r = n.result;
              null == r
                ? (__LOG__(4)`Could not retrieve datase revision`,
                  e("Could not retrieve datase revision"))
                : (performance.now(), t(r));
            }),
              (n.onerror = (t) => {
                __LOG__(4)`Error reading contact database revision: ${n.error}`,
                  t && __LOG__(4)`Event: ${t} ${t.target}`,
                  e(new Error("Error reading contact database revision"));
              });
          })
        );
      }
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n(1),
        i = (n(13), n(240));
      function a(t) {
        return (0, r.c)(
          [
            t.title && (0, r.f)(1, "div", t.tallTitle ? i.b : i.c, t.title, 0),
            (0, r.f)(1, "div", i.a, t.children, 0),
          ],
          0
        );
      }
    },
    function (t, e, n) {
      n.d(e, "g", function () {
        return l;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return h;
        }),
        n.d(e, "h", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return O;
        }),
        n.d(e, "e", function () {
          return A;
        });
      var r = n(8),
        i = n.n(r),
        a = n(44),
        s = n(64),
        u = n(234);
      function o(t) {
        return t.toLocaleLowerCase().match(/\S+/g) || [];
      }
      function l(t) {
        return /^[-+()\s.]*\d[-+()\s.\d]*$/.exec(t)
          ? { type: "number", term: (0, s.a)(t) }
          : { type: "prefix", prefixes: o(t) };
      }
      function c(t, e, n) {
        if ("number" === e.type) return -1 !== t.indexOf(e.term);
        var r = e.prefixes,
          i = n ? n(t) : o(t);
        if (i.length < 1) return !1;
        if (1 === r.length && r[0].length > 1) {
          var a = r[0].split("");
          if (a.length <= i.length) {
            for (var s = !0, u = 0; s && u < a.length; u++)
              i[u][0] !== a[u] && (s = !1);
            if (s) return !0;
          }
        }
        return r.every((t) => i.some((e) => e.startsWith(t)));
      }
      function d(t, e, n, r, i) {
        return (
          (t && c(t, i)) ||
          (e && c(e, i)) ||
          (n && c(n, i)) ||
          (r && c(r, i)) ||
          !1
        );
      }
      function h(t, e) {
        var n = t.shortName,
          r = t.fullName,
          i = t.verifiedInfo,
          a = t.jid,
          s = t.pushname;
        return "number" === e.type
          ? -1 !== a.indexOf(e.term)
          : d(n, r, i && "high" === i.level ? i.name : null, s, e);
      }
      function v(t, e) {
        return c(t.title, e);
      }
      function f(t, e) {
        var n = t.country,
          r = n.cc,
          i = n.iso;
        return "number" === e.type
          ? r.startsWith(e.term)
          : (r && c(r, e)) || (i && c(i, e)) || (t.name && c(t.name, e)) || !1;
      }
      function p(t, e) {
        if ("number" === e.type) {
          var n = e.term;
          return (
            Array.isArray(t.tel) &&
            t.tel.some((t) => {
              var e = (0, a.g)(t);
              return null != e && -1 !== (0, s.a)(e).indexOf(n);
            })
          );
        }
        var r = (0, u.a)(t),
          i = r.fullName;
        return d(r.shortName, i, null, null, e);
      }
      var _ = [0.5, 0.5, 0.5, 0.5, 0.4, 0.4, 0.4, 0.35],
        m = ["abc2", "def3", "ghi4", "jkl5", "mno6", "pqrs7", "tuv8", "wxyz9"],
        g = null;
      function b(t, e) {
        if (t === e) return 0;
        if (!g) {
          g = new Map();
          for (var n = 0; n < m.length; ++n)
            for (var r = m[n], i = 0; i < r.length; ++i) g.set(r[i], r);
        }
        var a = g.get(t);
        if (!a || !a.includes(e)) return 1;
        var s = a.indexOf(t),
          u = a.indexOf(e),
          o = Math.abs(s - u),
          l = Math.min(o, a.length - o);
        return Math.min(0.35 * l, 1);
      }
      function S(t, e) {
        for (
          var n = t.toLocaleLowerCase(),
            r = e.toLocaleLowerCase(),
            i = n.length,
            a = r.length,
            s = Array(i + 1)
              .fill(null)
              .map(() => Array(a + 1).fill(0)),
            u = Array(i + 1)
              .fill(null)
              .map(() => Array(a + 1).fill(0)),
            o = 0;
          o <= i;
          o++
        )
          (s[o][0] = o), (u[o][0] = 0);
        for (var l = 0; l <= a; l++) {
          var c = (0 === l || " " === r[l - 1]) && " " !== r[l];
          (s[0][l] = c ? 0 : 0.5), (u[0][l] = l);
        }
        for (var d = 0; d < i; d++)
          for (var h = 0; h < a; h++) {
            var v = (0 === h || " " === r[h - 1]) && " " !== r[h];
            s[d + 1][h + 1] = 1 / 0;
            var f = v ? 0.5 : 0,
              p = s[d][h + 1] + 1 + f;
            p < s[d + 1][h + 1] &&
              ((s[d + 1][h + 1] = p), (u[d + 1][h + 1] = u[d][h + 1]));
            var _ = 0 === d ? 0.5 : 0,
              m = s[d + 1][h] + 1 + _;
            m < s[d + 1][h + 1] &&
              ((s[d + 1][h + 1] = m), (u[d + 1][h + 1] = u[d + 1][h]));
            var g = b(n[d], r[h]);
            g > 0 && (g += Math.max(f, _));
            var S = s[d][h] + g;
            S < s[d + 1][h + 1] &&
              ((s[d + 1][h + 1] = S), (u[d + 1][h + 1] = u[d][h]));
          }
        for (var E = 1 / 0, O = -1, A = -1, y = 0; y <= a; ++y)
          s[i][y] < E && ((E = s[i][y]), (O = u[i][y]), (A = y));
        return { cost: E, substringStart: O, substringEnd: A };
      }
      function E(t, e, n) {
        var r = (function (t, e, n) {
          var r = l(t);
          return e.filter((t) => {
            var e = n(t);
            if (null != e) {
              var i = e.contact,
                a = e.titled;
              return null != a ? v(a, r) : null != i ? h(i, r) : void 0;
            }
          });
        })(t, e, n);
        if (t.length <= 1 || r.length >= Math.min(4, e.length)) return r;
        var a = new Set(r),
          s = (function (t, e, n) {
            for (var r = [], a = 0; a < e.length; ++a) {
              var s = e[a],
                u = n(s);
              if (null != u) {
                var o = u.contact,
                  l = u.titled;
                if (null != l) {
                  var c = S(t, l.title).cost;
                  r.push([s, c]);
                } else if (null != o) {
                  for (
                    var d,
                      h = [
                        o.shortName,
                        o.fullName,
                        null == (d = o.verifiedInfo) ? void 0 : d.name,
                      ],
                      v = 2 * t.length,
                      f = 0;
                    f < h.length;
                    ++f
                  ) {
                    var p = h[f];
                    p && (v = Math.min(v, S(t, p).cost));
                  }
                  v < t.length && r.push([s, v]);
                }
              }
            }
            var m = _[_.length - 1];
            t.length > 1 && t.length < _.length && (m = _[t.length]);
            var g,
              b = r
                .filter((e) => {
                  var n = i()(e, 2);
                  return n[0], n[1] <= m * t.length;
                })
                .sort((t, e) => {
                  var n = i()(t, 2),
                    r = (n[0], n[1]),
                    a = i()(e, 2);
                  return a[0], r - a[1];
                });
            if (b.length > 2) {
              var E = b.slice(0, 2),
                O = 1.2 * b[0][1];
              g = [
                ...E,
                ...b.slice(2).filter((t) => {
                  var e = i()(t, 2);
                  return e[0], e[1] < O;
                }),
              ];
            } else g = b;
            return g.map((t) => i()(t, 1)[0]);
          })(
            t,
            e.filter((t) => !a.has(t)),
            n
          );
        return [...r, ...s];
      }
      function O(t, e, n, r) {
        return E(t, e, (t) => {
          var e = n(t);
          return null == e
            ? null
            : "GROUP" === e.type || "PENDING_GROUP" === e.type
            ? { titled: e.groupInfo, contact: null }
            : { contact: (0, a.c)(e.jid, r), titled: null };
        });
      }
      function A(t, e, n) {
        return E(t, e, (t) => {
          var e = n(t);
          return null == e ? null : { contact: e, titled: null };
        });
      }
    },
    function (t, e, n) {
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n(248);
      n.d(e, "b", function () {
        return r.b;
      });
      var i = (0, r.e)(!1),
        a = (0, r.e)(!0);
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return u;
        });
      var r = n(1),
        i = (n(13), n(419)),
        a = class {
          constructor(t) {
            (this.ED = null), (this.EC = t);
          }
          setData(t, e) {
            var n = this.EC;
            if (!n.hasOwnProperty(t) || e !== n[t]) {
              n[t] = e;
              var r = this.ED;
              r && r();
            }
          }
          getLiveUpdatingData() {
            return this.EC;
          }
          setOnDirty(t) {
            this.ED = t;
          }
        };
      function s() {}
      var u = class {
        constructor() {
          (this.EE = { hidden: !1 }), (this.EF = null);
        }
        setDownArrow(t) {
          this.EE.onArrowDown = t;
        }
        setUpArrow(t) {
          this.EE.onArrowUp = t;
        }
        setUpDownArrows(t, e) {
          this.setUpArrow(t), this.setDownArrow(e);
        }
        setLeftArrow(t) {
          this.EE.onArrowLeft = t;
        }
        setRightArrow(t) {
          this.EE.onArrowRight = t;
        }
        setLeftRightArrows(t, e) {
          this.setLeftArrow(t), this.setRightArrow(e);
        }
        setCenterLabel(t, e) {
          var n = this.EE;
          (n.center = t),
            (n.centerIcon = null),
            (n.centerRawString = null),
            (n.onSoftCenter = e);
        }
        setCenterIcon(t, e) {
          var n = this.EE;
          (n.center = null),
            (n.centerIcon = t),
            (n.centerRawString = null),
            (n.onSoftCenter = e);
        }
        dangerouslySetCenterRawString(t, e) {
          var n = this.EE;
          (n.center = null),
            (n.centerIcon = null),
            (n.centerRawString = t),
            (n.onSoftCenter = e);
        }
        setLeftLabel(t, e) {
          var n = this.EE;
          (n.left = t),
            (n.leftIcon = null),
            (n.leftRawString = null),
            (n.onSoftLeft = e);
        }
        setLeftIcon(t, e) {
          var n = this.EE;
          (n.left = null),
            (n.leftIcon = t),
            (n.leftRawString = null),
            (n.onSoftLeft = e);
        }
        dangerouslySetLeftRawString(t, e) {
          var n = this.EE;
          (n.left = null),
            (n.leftIcon = null),
            (n.leftRawString = t),
            (n.onSoftLeft = e);
        }
        addCancel(t) {
          this.setLeftLabel(864, (e) => (null != t ? t(e) : e.goBack()));
        }
        setLeftAsBack() {
          this.setLeftLabel(861, (t) => {
            t.goBack();
          });
        }
        setRightLabel(t, e) {
          var n = this.EE;
          (n.right = t),
            (n.rightIcon = null),
            (n.rightRawString = null),
            (n.onSoftRight = e);
        }
        setRightOptions(t) {
          var e = this.EE;
          (e.right = null),
            (e.rightIcon = (0, r.b)(2, i.a, { className: "AB" })),
            (e.rightRawString = null),
            (e.onSoftRight = t);
        }
        setRightIcon(t, e) {
          var n = this.EE;
          (n.right = null),
            (n.rightIcon = t),
            (n.rightRawString = null),
            (n.onSoftRight = e);
        }
        dangerouslySetRightRawString(t, e) {
          var n = this.EE;
          (n.right = null),
            (n.rightIcon = null),
            (n.rightRawString = t),
            (n.onSoftRight = e);
        }
        setBack(t) {
          this.EE.onBack = t;
        }
        setOnEndCall(t) {
          this.EE.onEndCall = t;
        }
        setOnCall(t) {
          this.EE.onCall = t;
        }
        setFull(t) {
          this.EE.full = t;
        }
        setHoldCenter(t, e) {
          (this.EE.onHoldCenter = t), (this.EE.onReleaseHoldCenter = e);
        }
        hide() {
          this.EE.hidden = !0;
        }
        disableBar() {
          var t = this.EE;
          null != t.onSoftLeft && (t.onSoftLeft = s),
            null != t.onSoftCenter && (t.onSoftCenter = s),
            null != t.onSoftRight && (t.onSoftRight = s);
        }
        addData(t, e) {
          this.EF &&
            t !== this.EF &&
            __LOG__(4)`attachFormData called twice, which is unsupported`,
            (this.EF = t),
            e(t.EC);
        }
        makeSoftKeys() {
          return this.EE;
        }
        getAttachment() {
          return this.EF;
        }
      };
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return l;
      });
      var r = n(31),
        i = n(14),
        a = n(222),
        s = n(345),
        u = n(19),
        o = n(123);
      function l(t, e) {
        if (e.toLowerCase().startsWith(o.a))
          (0, o.k)(t, { name: "view", data: { type: "url", url: e } });
        else {
          var n = (0, r.i)(e);
          if (null != n) {
            var l = n.toString(),
              c = l.toLowerCase();
            if (c.startsWith(a.a)) {
              var d = (0, a.b)(l);
              if (null != d)
                return (
                  (0, s.a)(t, d, void 0, !1),
                  void WAM.log("regular", 2136, void 0, [2, 0, 2, 3, 0, 8])
                );
            }
            c.startsWith(i.t)
              ? (function (t, e) {
                  (0, o.k)(t, { name: "JioCloudShare", data: { url: e } });
                })(t, l)
              : c.startsWith(i.n) || c.startsWith(i.m)
              ? (function (t, e) {
                  (0, o.k)(t, {
                    name: "maps",
                    data: { url: e, source: "whatsapp" },
                  });
                })(t, l)
              : c.startsWith(i.Z)
              ? (0, o.f)(c, t)
                ? WAM.log("regular", 2136, void 0, [2, 0, 2, 3, 0, 27])
                : ((0, a.c)(t, n),
                  WAM.log("regular", 2136, void 0, [2, 0, 2, 3, 0, 2]))
              : (0, o.k)(t, { name: "view", data: { type: "url", url: l } });
          } else (0, u.e)({ title: 243, text: 488 });
        }
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "e", function () {
        return m;
      }),
        n.d(e, "c", function () {
          return b;
        }),
        n.d(e, "d", function () {
          return S;
        }),
        n.d(e, "a", function () {
          return E;
        }),
        n.d(e, "b", function () {
          return O;
        }),
        n.d(e, "f", function () {
          return A;
        });
      var r = n(1),
        i = (n(13), n(3)),
        a = n(19),
        s = n(247),
        u = n(125),
        o = n(61),
        l = n(183),
        c = n(387),
        d = n(53),
        h = n(18),
        v = n(397),
        f = n(327),
        p = n(198),
        _ = n(14);
      function m(t) {
        var e,
          n = t.expiration,
          i = t.selected,
          a = t.status;
        "pending" === a
          ? (e = (0, r.b)(2, l.a, { className: "Rg" }))
          : null != a && (e = (0, r.b)(2, c.a, { className: "Rh" }));
        var s = (0, r.b)(2, O, { value: n });
        return (0, r.b)(2, u.a, {
          selected: i,
          title: 291,
          rawSubtitle: s,
          rightComponent: e,
        });
      }
      var g = class extends o.b {
        shouldComponentUpdate(t, e) {
          var n = this.props;
          return (
            n !== t &&
            (n.chat !== t.chat ||
              n.expiration !== t.expiration ||
              n.selected !== t.selected ||
              n.status !== t.status ||
              n.job !== t.job)
          );
        }
        addSoftKeys(t, e) {
          var n = this.props.status;
          if ("pending" !== n)
            if (null == n)
              t.setCenterLabel(877, () => {
                (0, s.g)(e, this.props.chat);
              });
            else {
              var r = n;
              t.setCenterLabel(243, () => {
                (0, a.e)({
                  title: 243,
                  text: r,
                  onClose: () => (0, p.b)(e, this.props.job),
                });
              });
            }
        }
        render() {
          var t = this.props;
          return m({
            expiration: t.expiration,
            selected: t.selected,
            status: t.status,
          });
        }
      };
      function b(t) {
        var e,
          n = t.chat,
          i = t.contact,
          a = t.selected,
          s = t.job,
          u = (null == (e = i.ephemeral) ? void 0 : e.expiration) || _.k,
          o = (function (t) {
            if ((0, d.f)(t)) return "pending";
            var e = (0, d.d)(t);
            return e && "success" !== e ? 242 : null;
          })(s);
        return (0, r.b)(2, g, {
          chat: n,
          expiration: u,
          selected: a,
          status: o,
          job: s,
        });
      }
      function S(t) {
        var e = t.chat,
          n = t.selected,
          i = t.job,
          a = e.groupInfo.expiration || _.k,
          s = (function (t) {
            if ((0, d.f)(t)) return "pending";
            var e = (0, d.d)(t);
            if (e && "success" !== e)
              switch (e) {
                case "not-authorized":
                  return 453;
                case "not-in-group":
                  return 452;
                case "internal-server-error":
                  return 451;
                default:
                  return 242;
              }
            return null;
          })(i);
        return (0, r.b)(2, g, {
          chat: e,
          expiration: a,
          selected: n,
          status: s,
          job: i,
        });
      }
      function E(t) {
        var e = t.value;
        if (e === i.b) {
          var n = Math.floor(e / 3600);
          return (0, r.b)(2, h.b, { l10n: [n, 283] });
        }
        return (
          0 === e &&
            (__LOG__(4)`EphemeralEnabledDuration: 0 expiration passed`,
            SEND_LOGS("ephemeral-duration-zero")),
          (0, r.b)(2, v.a, { seconds: e })
        );
      }
      function O(t) {
        var e = t.value;
        return e === _.k
          ? (0, r.b)(2, h.b, { l10n: 284 })
          : (0, r.b)(2, E, { value: e });
      }
      function A(t, e, n) {
        var i = t === e;
        return (0, r.b)(2, u.k, {
          className: "Ri",
          selected: n,
          children: [
            (0, r.f)(1, "div", null, (0, r.b)(2, O, { value: t }), 2),
            (0, r.b)(2, f.a, { selected: n, checked: i, disabled: !1 }),
          ],
        });
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return c;
        });
      var r = n(1),
        i = n(13),
        a = n(147),
        s = n(163),
        u = { sentinel: "REUSE_PROMISE" };
      function o(t) {
        var e = t.Component,
          n = t.allocate,
          a = t.deallocate,
          s = t.transform;
        return class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.state = { mounted: !1 }),
              (this.Gk = null),
              t
            );
          }
          componentDidMount() {
            this.setState({ mounted: !0 });
          }
          componentWillUnmount() {
            var t = this.Gk;
            t && ((this.Gk = null), a(t.transformed, t.props));
          }
          render() {
            if (!this.state.mounted) return null;
            var t = this.props,
              i = this.Gk;
            if (i) {
              if (i.props !== t) {
                if (s)
                  i = { props: t, transformed: s(t, i.transformed, i.props) };
                else {
                  var u = i;
                  (i = { props: t, transformed: n(t) }),
                    a(u.transformed, u.props);
                }
                this.Gk = i;
              }
            } else this.Gk = i = { props: t, transformed: n(t) };
            return (0, r.i)((0, r.b)(2, e, Object.assign({}, i.transformed)));
          }
        };
      }
      function l(t) {
        var e = t.render,
          n = t.allocatePromise,
          i = t.deallocate;
        return o({
          Component(t) {
            var n = t.props,
              i = t.promise;
            return (0, r.b)(2, a.a, {
              promise: i,
              props: n,
              render: e,
              fallback: e,
            });
          },
          allocate(t) {
            var e = n(t, void 0);
            if (e === u)
              throw new Error(
                "PromiseAllocator given REUSE_PROMISE on first run"
              );
            return { props: t, promise: e };
          },
          deallocate(t) {
            var e = t.props,
              n = t.promise;
            i(n, e);
          },
          transform(t, e) {
            var r = e.props,
              i = e.promise,
              a = n(t, r);
            return { props: t, promise: a === u ? i : a };
          },
        });
      }
      function c(t) {
        return l({
          render: t.render,
          allocatePromise(e, n) {
            var r = t.getContentRef(e);
            return n && r === t.getContentRef(n)
              ? u
              : null == r
              ? Promise.resolve()
              : e.backend
                  .loadMsgContentBlob(t.getId(e), r)
                  .then((t) => (t ? (0, s.a)(t) : null));
          },
          deallocate(t) {
            t.then((t) => {
              t && (0, s.b)(t);
            });
          },
        });
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return o;
        });
      var r = n(1),
        i = (n(13), n(27));
      function a(t) {
        var e = t.contact,
          n = t.unblock;
        return {
          title: 1065,
          text: [(0, r.b)(2, i.a, { contact: e }), 291],
          confirm: 944,
          onConfirm: n,
        };
      }
      function s(t) {
        return (
          t.contact,
          { title: 1065, text: 1068, confirm: 944, onConfirm: t.unblock }
        );
      }
      function u(t) {
        return { title: 1065, text: 1067, confirm: 944, onConfirm: t.unblock };
      }
      function o(t) {
        return { text: 63, confirm: 862, onConfirm: t.block };
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M13.925 12.458c-.029.598-.507 1.07-1.089 1.07h-.68c-.58 0-1.058-.472-1.087-1.074L10.5 5.697a1.157 1.157 0 01.3-.846c.208-.226.488-.351.79-.351h1.817c.303 0 .584.125.793.353.207.227.313.524.298.837l-.574 6.768zm-1.42 7.07c-.624 0-1.122-.18-1.48-.533-.357-.352-.539-.851-.539-1.483 0-.634.18-1.128.536-1.469.353-.341.852-.514 1.482-.514.625 0 1.118.18 1.465.537.344.354.517.84.517 1.446 0 .603-.174 1.094-.519 1.46-.352.37-.844.557-1.463.557zM12.5 0C5.608 0 0 5.608 0 12.5S5.608 25 12.5 25C19.393 25 25 19.392 25 12.5S19.393 0 12.5 0",
            }),
            2,
            { viewBox: "0 0 25 25" }
          );
        });
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return d;
      });
      var r = n(1),
        i = (n(13), n(15)),
        a = n(23),
        s = n.n(a),
        u = n(42),
        o = n(318),
        l = n(429),
        c = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M8.083 11.867a.399.399 0 01.615-.042l.455.427a.397.397 0 00.615-.043l6.802-9.026a.453.453 0 01.647-.083l.606.488a.49.49 0 01.08.67L9.94 14.83a.397.397 0 01-.615.043l-1.676-1.662a.561.561 0 01-.046-.71l.481-.635zM4.89 14.83a.397.397 0 01-.615.043L.138 10.689a.491.491 0 01-.007-.676l.538-.567a.452.452 0 01.653-.009l2.783 2.815a.397.397 0 00.614-.043l6.802-9.026a.453.453 0 01.647-.083l.606.488a.49.49 0 01.08.67L4.89 14.83z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        };
      function d(t) {
        var e = t.ack,
          n = t.className;
        return e === i.a.SENT || (0, u.j)(e)
          ? (0, r.b)(2, l.a, { className: (0, s.a)("Of", n) })
          : e === i.a.RECEIVED
          ? (0, r.b)(2, c, { className: (0, s.a)("Oe", n) })
          : (0, u.i)(e)
          ? (0, r.b)(2, c, { className: (0, s.a)("Og", n) })
          : (0, u.g)(e) || e === i.a.CLOCK
          ? (0, r.b)(2, o.a, { className: (0, s.a)("Od", n) })
          : (__LOG__(3)`Unhandle ack level ${e}`, null);
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return l;
      });
      var r = n(1),
        i = (n(13), n(61)),
        a = n(76),
        s = n(23),
        u = n.n(s),
        o = n(420),
        l = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Ea = null),
              (this.Eb = () => {
                var t = this.Ea;
                null != t && (t.scrollTop -= a.p);
              }),
              (this.Ec = () => {
                var t = this.Ea;
                null != t && (t.scrollTop += a.p);
              }),
              (this.Ed = (t) => {
                this.Ea = t;
              }),
              t
            );
          }
          addSoftKeys(t) {
            t.setUpDownArrows(this.Eb, this.Ec);
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              (0, u.a)(o.a, this.props.className),
              this.props.children,
              0,
              null,
              null,
              this.Ed
            );
          }
        };
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return u;
        });
      var r = n(141),
        i = n(132),
        a = n(19);
      function s(t, e) {
        (0, r.e)("app://kaios-plus.kaiostech.com").then((t) => {
          null == t
            ? (0, a.e)({
                title: 243,
                text: 1062,
                onClose: e ? i.closeApp : "CLOSE",
              })
            : (e && setTimeout(i.closeApp, 2e3), t.launch());
        });
      }
      function u(t) {
        s(0, !0);
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n(1),
        i = (n(13), n(73)),
        a = n(27),
        s = n(47);
      function u(t) {
        return null == (t.fullName || t.shortName || (0, i.c)(t));
      }
      function o(t) {
        var e = t.contact,
          n = t.className;
        return u(e)
          ? (0, r.b)(2, c, { contact: e, className: n })
          : (0, r.b)(2, a.b, { contact: e });
      }
      function l(t, e) {
        return u(t) ? (0, r.b)(2, c, { contact: t, className: e }) : null;
      }
      function c(t) {
        var e,
          n =
            (e = t.contact).pushname ||
            (e.verifiedInfo && e.verifiedInfo.name) ||
            null;
        return null == n
          ? null
          : (0, r.f)(1, "span", t.className, (0, s.b)("~" + n), 0, {
              dir: "auto",
            });
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return d;
        });
      var r = !1,
        i = 0,
        a = [];
      function s(t) {
        a.push(t), i > 0 && t.onVideoRequested();
      }
      function u(t) {
        var e = a.indexOf(t);
        e > -1 && a.splice(e, 1);
      }
      function o() {
        if (0 === i)
          for (var t = 0, e = a.length; t < e; ++t) a[t].onVideoRequested();
        ++i;
      }
      function l() {
        if (0 == --i)
          for (var t = 0, e = a.length; t < e; ++t) a[t].onVideoReleased();
      }
      function c() {
        r &&
          (__LOG__(
            4
          )`We should never request video from the camera twice, we probably forgot to release somewhere`,
          SEND_LOGS("video-requestCamera-missingRelease")),
          (r = !0),
          o();
      }
      function d() {
        r ||
          (__LOG__(
            4
          )`We should never release video from the camera without requesting`,
          SEND_LOGS("video-releaseCamera-missingRequest")),
          (r = !1),
          l();
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return s;
        });
      var r = n(103),
        i = Math.floor(10);
      function a(t, e, n, a) {
        var s,
          l = e.msgInfo,
          c = l.newest,
          d = l.oldestUnread;
        if (("ONE_TO_ONE" === e.type && (0, r.j)(t, e.jid), c)) {
          var h,
            v = !1;
          "unread" === n
            ? (h = d || c)
            : "newest" === n
            ? (h = c)
            : ((h = n), (v = !0));
          var f = { start: -i, end: i },
            p = u(t, e.id, h, f);
          s = {
            type: "OPEN_CHAT",
            chat: e,
            anchor: h,
            selectAnchor: v,
            desiredRange: f,
            loading: o(t, e.id, h, f, p),
            preloaded: p,
            withComposeBoxOpened: "withComposeBoxOpened" === a,
          };
        } else
          s = {
            type: "OPEN_CHAT",
            chat: e,
            anchor: "beginning",
            selectAnchor: !1,
            desiredRange: { start: -20, end: 0 },
            loading: null,
            preloaded: null,
            withComposeBoxOpened: "withComposeBoxOpened" === a,
          };
        t.dispatch(s);
      }
      function s(t, e, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5,
          i = e.chat.id,
          a = e.anchor,
          s = e.viewport.desiredRange,
          l = s.start,
          c = s.end,
          d = l,
          h = c;
        "newer" === n
          ? ((d -= r), (h = Math.min(h, d + 20)))
          : "older" === n && ((h += r), (d = Math.max(d, h - 20)));
        var v = { start: d, end: h },
          f = u(t, i, a, v);
        t.dispatch({
          type: "ADJUST_VIEWPORT",
          chatId: i,
          anchor: a,
          desiredRange: v,
          loading: o(t, i, a, v, f),
          preloaded: f,
        });
      }
      function u(t, e, n, r) {
        return t.knownViewportFromCache(e, n, r);
      }
      function o(t, e, n, r, i) {
        var a = r.start,
          s = r.end;
        if (!i) {
          if (a <= 0 && 0 < s) {
            var u = t.loadMsgRange(n, r, { chatId: e, anchor: n, range: r });
            return { older: u, newer: u };
          }
          return (
            __LOG__(4)`anchor unknown and range not surrounding it ${r}`, null
          );
        }
        var o = i.msgs,
          l = i.range,
          c =
            a < l.start &&
            (void 0 === i.newestIndex || i.newestIndex < l.start),
          d = l.end < s && (void 0 === i.oldestIndex || i.oldestIndex >= l.end);
        if (c && d && o.length <= 1) {
          var h = t.loadMsgRange(n, r, { chatId: e, anchor: n, range: r });
          return { older: h, newer: h };
        }
        if (c) {
          var v = o[0].id;
          return {
            newer: t.loadMsgRange(n, r, {
              chatId: e,
              anchor: v,
              range: { start: a - l.start, end: 1 },
            }),
          };
        }
        if (d) {
          var f = o[o.length - 1].id;
          return {
            older: t.loadMsgRange(n, r, {
              chatId: e,
              anchor: f,
              range: { start: 0, end: s - l.end + 1 },
            }),
          };
        }
        return null;
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = class {
        constructor(t) {
          (this.max = t), (this.cache = new Map());
        }
        get(t) {
          var e = this.cache.get(t);
          return e && (this.cache.delete(t), this.cache.set(t, e)), e;
        }
        set(t, e) {
          if (this.cache.has(t)) this.cache.delete(t);
          else if (this.cache.size === this.max) {
            var n = this.NT();
            n && this.cache.delete(n);
          }
          this.cache.set(t, e);
        }
        NT() {
          return this.cache.keys().next().value;
        }
      };
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n(161);
      function i(t, e) {
        var n = new r.a(897);
        return (
          n.add(584, t.muteChat, e, 28800),
          n.add(583, t.muteChat, e, 604800),
          n.add(585, t.muteChat, e, "always"),
          n
        );
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M11.735 1a5.273 5.273 0 015.266 5.263v5.467a5.272 5.272 0 01-5.266 5.266H6.267A5.272 5.272 0 011 11.73V6.266A5.273 5.273 0 016.267 1h5.468zm3.143 10.721V6.274a3.144 3.144 0 00-3.144-3.143H6.248a3.144 3.144 0 00-3.144 3.143v5.447a3.144 3.144 0 003.144 3.144h5.486a3.144 3.144 0 003.144-3.144zM9.735 8.999h2.582c.285 0 .516.232.516.517v.694c0 .285-.23.516-.516.517H9.304a.516.516 0 01-.085.007h-.7a.516.516 0 01-.516-.516V5.395c0-.285.231-.516.516-.516h.7c.285 0 .516.231.516.516v3.604z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M13.363 3A1.631 2.631 0 0115 4.612v10.775c-.003.889-.734 1.609-1.637 1.613H4.64c-.905-.003-1.637-.723-1.64-1.613V4.612c.004-.89.736-1.61 1.64-1.612h8.723zm-2.935 8.856H5.765v1.436h4.66V11.86l.003-.003zM5.765 8.884v1.436h6.593V8.884H5.765zm0-2.946v1.436h6.593V5.94H5.765v-.002z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return L;
      }),
        n.d(e, "d", function () {
          return I;
        }),
        n.d(e, "a", function () {
          return k;
        }),
        n.d(e, "c", function () {
          return D;
        });
      var r = n(1),
        i = n(13),
        a = n(179),
        s = n(333),
        u = n(47),
        o = n(44),
        l = n(449),
        c = n(59),
        d = n(202),
        h = n(76),
        v = n(14),
        f = n(189),
        p = n(107),
        _ = n(346),
        m = n(18),
        g = n(213),
        b = n(17),
        S = class extends i.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Yh = !1),
              (this.state = { shouldShowTempTitle: !0 }),
              t
            );
          }
          componentDidMount() {
            (this.Yh = !0),
              (this.Yg = setTimeout(() => {
                this.Yh && this.setState({ shouldShowTempTitle: !1 });
              }, this.props.timeout || 4e3));
          }
          componentWillUnmount() {
            (this.Yh = !1), clearTimeout(this.Yg);
          }
          render() {
            var t = this.state.shouldShowTempTitle,
              e = this.props;
            return t ? e.temporaryTitle : e.children;
          }
        },
        E = "Xn Fa";
      function O(t, e, n) {
        return (0, r.f)(
          1,
          "div",
          "Xi",
          [
            t,
            (0, r.f)(
              1,
              "div",
              "Xk",
              [
                (0, r.f)(1, "div", "Xl FU", e, 0),
                (0, r.f)(1, "div", "Xm", n, 0),
              ],
              4
            ),
          ],
          0
        );
      }
      var A = (0, c.c)(
        function (t) {
          var e,
            n = t.lastSeen,
            i = t.isOnline,
            a = t.contact;
          return (
            (e = i
              ? (0, r.b)(2, m.b, { l10n: 683 })
              : null != n
              ? (0, r.b)(2, l.a, { children: [(0, f.d)(a), u.a, (0, g.d)(n)] })
              : (0, f.d)(a)),
            (0, r.f)(1, "div", "Xj", e, 0)
          );
        },
        (t, e, n) => {
          var r = !1,
            i = null,
            a = n.chat.jid,
            u = (0, o.c)(a, t.contacts),
            l = t.onlineOrLastSeen[a];
          return (
            (0, s.a)(l, t.settings.lastSeen, u) &&
              ("online" === l ? (r = !0) : (i = l)),
            { isOnline: r, lastSeen: i, contact: u }
          );
        }
      );
      function y(t) {
        return (0, r.b)(2, S, {
          timeout: 4e3,
          temporaryTitle: (0, r.b)(2, m.b, { l10n: 682 }),
          children: (0, r.b)(2, A, { chat: t.chat }),
        });
      }
      function C(t) {
        return (0, r.b)(2, S, {
          timeout: 4e3,
          temporaryTitle: (0, r.b)(2, m.b, { l10n: 682 }),
          children: (0, r.b)(2, g.a, { chat: t.chat }),
        });
      }
      function L(t) {
        var e = t.chat,
          n = t.contacts,
          i = (0, o.c)(e.jid, n);
        if (!h.g) {
          var s = i.verifiedInfo ? y : A;
          return (0, r.b)(2, a.b, { chat: e, WhileIdle: s });
        }
        var u = i.verifiedInfo ? C : g.a,
          l = (0, f.d)(i);
        return O(
          (0, r.b)(2, p.c, {
            className: E,
            jid: e.jid,
            avatarPlacement: "chatHeader",
            ephemeral: "ONE_TO_ONE",
          }),
          l,
          (0, r.b)(2, a.b, { chat: e, WhileIdle: u })
        );
      }
      function T(t) {
        var e = (0, f.c)(t.chat.groupInfo);
        return (0, r.f)(
          1,
          "div",
          "Xj",
          t.chat.groupInfo.isCAG && (0, b.a)("parent_group_view_enabled")
            ? (0, r.b)(2, S, {
                temporaryTitle: (0, r.b)(2, m.b, { l10n: 22 }),
                children: e,
              })
            : e,
          0
        );
      }
      function w(t) {
        return t.chat.groupInfo.support
          ? (0, r.b)(2, m.b, { l10n: 476 })
          : t.chat.groupInfo.isCAG && (0, b.a)("parent_group_view_enabled")
          ? (0, r.b)(2, m.b, { l10n: 22 })
          : (0, r.f)(
              1,
              "div",
              "Xh FY FU",
              (0, d.f)(t.contacts, t.chat.groupInfo.participants, !1),
              0
            );
      }
      function I(t) {
        var e = t.chat,
          n = t.children;
        return O(
          (0, r.b)(2, p.c, {
            className: E,
            jid: e.jid,
            avatarPlacement: "chatHeader",
            ephemeral: e.groupInfo.expiration || v.k,
            isCAG: !!e.groupInfo.isCAG,
          }),
          (0, f.c)(e.groupInfo),
          n
        );
      }
      function k(t) {
        var e = t.chat;
        return h.g
          ? (0, r.b)(2, I, {
              chat: e,
              children: (0, r.b)(2, a.a, { chat: e, WhileIdle: w }),
            })
          : (0, r.b)(2, a.a, { chat: e, WhileIdle: T });
      }
      function D(t) {
        var e = t.chat;
        return h.g
          ? O(
              (0, r.b)(2, _.a, {
                className: E,
                groupPicture: e.groupInfo.groupPicture,
              }),
              (0, u.b)(e.groupInfo.title),
              null
            )
          : (0, u.b)(e.groupInfo.title);
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r = n(1),
        i = (n(13), n(23)),
        a = n.n(i);
      function s(t) {
        var e = t.checked,
          n = t.selected,
          i = t.disabled;
        return (0, r.f)(
          1,
          "div",
          "Bp",
          (0, r.f)(
            1,
            "div",
            (0, a.a)("Bq", n && "Bs", e && "Br", i && "Bu"),
            e && (0, r.f)(1, "div", "Bt"),
            0
          ),
          2
        );
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return h;
        });
      var r = n(68),
        i = n(14),
        a = n(70),
        s = n(163),
        u = n(118),
        o = n(257),
        l = n(85),
        c = new Map();
      function d(t) {
        var e = c.get(t);
        return e && c.delete(t), e;
      }
      function h(t) {
        __LOG__(2)`exe::initialize page: caching images`;
        var e = new r.a(),
          n = 0;
        function d() {
          0 == --n && e.resolve();
        }
        var h = t.chatlist.orderedChatIds,
          v = Math.min(i.e, h.length);
        if (!(v > 0)) return Promise.resolve();
        for (var f = [], p = 0; p < v; p++) f.push(t.chatlist.chats[h[p]].jid);
        return (
          (0, a.getProfilePicTable)()
            .getIcons(f)
            .then((t) => {
              t.forEach((t) => {
                if (t && t.image) {
                  var e = (0, s.a)(t.image);
                  c.set(t.jid, e),
                    (r = e),
                    ((i = new Image()).src = r),
                    (i.onload = d),
                    (i.onerror = d),
                    n++;
                }
                var r, i;
              }),
                n++,
                d();
            }),
          (0, o.a)(e.promise, 250).catch((0, u.a)(l.b, () => {}))
        );
      }
    },
    function (t, e, n) {
      e.a = class {
        constructor(t) {
          (this.GB = new Map()),
            (this.GC = new Set()),
            (this.GA = t.idealMaxSize),
            (this.GD = t.generator),
            (this.GE = t.destroyer),
            (this.GF = t.serializer);
        }
        has(t) {
          var e = this.GF(t);
          return this.GB.has(e);
        }
        createOrRetain(t) {
          var e = this.GF(t),
            n = this.GB.get(e);
          if (n) return 0 === n.count && this.GC.delete(e), n.count++, n.value;
          var r = this.GD(t);
          return this.GB.set(e, { value: r, count: 1 }), r;
        }
        release(t) {
          var e = this.GF(t),
            n = this.GB.get(e);
          n && (n.count--, 0 === n.count && this.GC.add(e)),
            this.collectGarbage();
        }
        collectGarbage() {
          var t = this.GB.size - this.GA;
          if (t > 0)
            for (
              var e = this.GC.values(), n = 0, r = e.next();
              !r.done && n <= t;
              r = e.next()
            ) {
              var i = r.value,
                a = this.GB.get(i);
              a &&
                (this.GB.delete(i), this.GC.delete(i), this.GE(a.value), n++);
            }
        }
      };
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r = n(37),
        i = n.n(r),
        a = n(44);
      function s(t, e, n) {
        if (!t || "online" === t) return !0;
        var r = !!n && (0, a.i)(n);
        switch (e) {
          case "all":
            return !0;
          case "none":
            return !1;
          case "contacts":
            return r;
          case "contact_blacklist":
            return !1;
          default:
            return (0, i.a)(e);
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return y;
      });
      var r = n(1),
        i = n(13),
        a = n(59),
        s = n(107),
        u = n(18),
        o = n(310),
        l = n(47),
        c = n(246),
        d = n(183),
        h = n(178),
        v = n(413),
        f = (t) => {
          var e = t.group;
          if ("parent" !== (null == e ? void 0 : e.groupType))
            return (
              __LOG__(4)`Called CommunityInviteDialogContent for invalid type ${
                null == e ? void 0 : e.groupType
              }`,
              null
            );
          var n = (0, r.b)(2, s.c, {
            jid: e.group,
            type: "thumb",
            invite: t.code,
          });
          return (0, r.f)(
            1,
            "div",
            "He",
            [
              (0, r.f)(
                1,
                "div",
                "Hf",
                [
                  (0, r.f)(1, "div", "Hg Fa", n, 0),
                  (0, r.f)(
                    1,
                    "div",
                    "Hi",
                    [
                      (0, r.f)(
                        1,
                        "div",
                        "Hh FV FS FY FU",
                        (0, l.b)(e.title),
                        0
                      ),
                      e.description
                        ? (0, r.b)(2, c.a, {
                            textClassName: "Hj FX FS",
                            maxLineClassName: "Hk",
                            truncated: !t.expandDescription,
                            onMount: t.onMultilineMount,
                            children: (0, l.b)(e.description),
                          })
                        : null,
                    ],
                    0
                  ),
                ],
                4
              ),
              null != e.numSubGroups &&
                e.numSubGroups > 0 &&
                (0, r.f)(
                  1,
                  "div",
                  "Hm Hl FS FX FS",
                  (0, r.b)(2, u.b, { l10n: [e.numSubGroups, 37] }),
                  2
                ),
              (0, r.f)(
                1,
                "div",
                "Hl FS FX FS",
                (0, r.b)(2, u.b, { l10n: 145 }),
                2
              ),
            ],
            0
          );
        },
        p = n(14),
        _ = n(44),
        m = n(19),
        g = n(140),
        b = n(108),
        S = n(16),
        E = n(106),
        O = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.LB = !1),
              (this.onMultilineMount = (t) => {
                var e = t.overflowing,
                  n = this.props,
                  r = n.backend,
                  i = n.code,
                  a = n.extended,
                  s = n.forceShowExtend,
                  u = n.groupInvite;
                !e || a || s || y(r, i, u, !0);
              }),
              t
            );
          }
          componentDidMount() {
            var t = this.props,
              e = t.backend,
              n = t.groupInvite,
              r = t.code;
            (this.LB = !0),
              n
                ? (0, h.a)(e, n.group)
                : e
                    .sendAndReceive("backend", "queryGroupInfoFromCode", {
                      code: r,
                    })
                    .then((t) => {
                      if (this.LB) {
                        if (t.error) {
                          var n = t.error;
                          return "already-in-group" === n.reason
                            ? void (function (t, e) {
                                (0, m.a)(),
                                  (0, b.a)(t, e, "newest"),
                                  (0, g.a)(417);
                              })(e, n.extra)
                            : void (function (t, e) {
                                var n, r;
                                switch (e.reason) {
                                  case "removed":
                                    n = 431;
                                    break;
                                  case "group-not-found":
                                    n = 434;
                                    break;
                                  case "invalid-link":
                                    n = 425;
                                    break;
                                  case "invite-link-reset":
                                    n = 428;
                                    break;
                                  case "too-many-participants":
                                    n = 506;
                                    break;
                                  case "growth-locked":
                                    (n = 502), (r = E.b);
                                    break;
                                  default:
                                    e.reason, (n = 423);
                                }
                                (0, E.D)(t, n, r);
                              })(e, n);
                        }
                        y(e, r, t.result, !1);
                      }
                    });
          }
          componentWillUnmount() {
            this.LB = !1;
          }
          render() {
            var t = this.props.groupInvite;
            if (!t) return (0, r.b)(2, d.a, { type: "dialog" });
            var e = this.props,
              n = e.code,
              i = e.contacts,
              a = e.extended;
            if ("parent" === (null == t ? void 0 : t.groupType))
              return (0, r.b)(2, f, {
                group: t,
                code: n,
                expandDescription: a,
                onMultilineMount: this.onMultilineMount,
              });
            var h = (0, r.b)(2, s.c, {
                jid: t.group,
                type: "thumb",
                invite: n,
              }),
              p = this.props.user,
              m = t.creatorJid,
              g = null;
            if (p === m) g = 421;
            else if (null != m) {
              var b = (0, _.c)(m, i);
              g = [(0, r.b)(2, o.a, { contact: b }), 125];
            }
            var S =
                null != g &&
                (0, r.f)(
                  1,
                  "div",
                  "Fn FX FS FY FU",
                  (0, r.b)(2, u.b, { l10n: g }),
                  2
                ),
              E = (0, r.c)(
                [
                  S,
                  t.description
                    ? (0, r.b)(2, c.a, {
                        textClassName: "Fo FX FS",
                        maxLineClassName: "Fp",
                        truncated: !a,
                        onMount: this.onMultilineMount,
                        children: (0, l.b)(t.description),
                      })
                    : null,
                ],
                0
              );
            return (0, r.b)(2, v.a, {
              avatar: h,
              contacts: i,
              extended: a,
              participants: t.participantJids,
              groupSize: t.size,
              includeYou: !1,
              subtitle: E,
              title: t.title,
            });
          }
        },
        A = (0, a.c)(O, (t, e, n) => ({
          user: t.user.jid,
          backend: e,
          code: n.code,
          groupInvite: n.groupInvite,
          contacts: t.contacts,
          forceShowExtend: n.forceShowExtend,
          extended: n.extended,
        }));
      function y(t, e, n, i, a) {
        if (n) {
          var s = n.size,
            u = n.participantJids,
            o = n.groupType,
            l = s - u.length > 0 ? 1 : 0,
            c = u.length + l,
            d = !a && (i || c > p.l),
            h = d
              ? () => {
                  y(t, e, n, !0, !0);
                }
              : void 0,
            v = "parent" === o,
            f = v ? 146 : 422,
            _ = v ? 888 : 887;
          (0, m.h)(
            {
              title: f,
              right: _,
              onSoftRight: () =>
                (function (t, e) {
                  t.spinUntilJob(
                    S.e.joinGroupViaInvite(e),
                    (e) => () =>
                      (function (t, e) {
                        if ("success" !== e) {
                          var n, r;
                          switch (e.error.reason) {
                            case "not-authorized":
                              n = 504;
                              break;
                            case "group-not-found":
                              n = 503;
                              break;
                            case "invite-link-reset":
                              n = 505;
                              break;
                            case "too-many-participants":
                              n = 506;
                              break;
                            case "growth-locked":
                              (n = 502), (r = E.b);
                              break;
                            default:
                              e.error.reason, (n = 501);
                          }
                          (0, E.D)(t, n, r);
                        }
                      })(t, e),
                    426,
                    182
                  );
                })(t, e),
              center: d ? 896 : void 0,
              onSoftCenter: h,
              left: 864,
              onSoftLeft: "CLOSE",
              onBack: "CLOSE",
            },
            (0, r.b)(2, A, {
              code: e,
              groupInvite: n,
              forceShowExtend: i,
              extended: a || !1,
            })
          );
        } else
          (0, m.h)(
            { title: 489, left: 864, onSoftLeft: "CLOSE", onBack: "CLOSE" },
            (0, r.b)(2, A, {
              code: e,
              groupInvite: n,
              forceShowExtend: i,
              extended: a || !1,
            })
          );
      }
    },
    function (t, e, n) {
      var r = n(1),
        i = n(13),
        a = n(107),
        s = n(384),
        u = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.groupPicture !== t.groupPicture || n.className !== t.className)
            );
          }
          render() {
            var t = this.props,
              e = t.groupPicture,
              n = t.className,
              i = e
                ? (0, r.b)(2, s.b, { blob: e, className: "PT" })
                : (0, a.a)("PU");
            return (0, r.f)(1, "div", n, i, 0);
          }
        };
      e.a = u;
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n(40),
        n(33);
      var r = n(19),
        i = n(300);
      function a(t, e, n, a) {
        if (navigator.onLine)
          if (n)
            (0, r.f)(
              (0, i.c)({
                contact: t,
                unblock: () => {
                  e.unblockUser(t.jid);
                },
              })
            );
          else {
            var s = () => {
              e.startVoipCall(t.jid, a);
            };
            !(function (t) {
              switch (t) {
                case "conversation":
                case "chatList":
                case "contactInfo":
                  return !0;
                default:
                  return !1;
              }
            })(a)
              ? s()
              : (0, r.f)({ text: 109, confirm: 863, onConfirm: s });
          }
        else (0, r.e)({ title: 654, text: 653 });
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return g;
      }),
        n.d(e, "b", function () {
          return b;
        });
      var r,
        i,
        a,
        s = n(1),
        u = n(13),
        o = n(78),
        l = n(262),
        c = n(162),
        d = n(131),
        h = n(23),
        v = n.n(h),
        f = n(18),
        p = n(61),
        _ = n(80),
        m =
          ((i = r =
            class extends u.a {
              constructor(t) {
                super(t),
                  a.call(this),
                  (this.state = (0, _.j)(t)),
                  null != t.search &&
                    (0, _.b)(t.search) > 0 &&
                    (this.IT = new o.a(this.onSearchDidChange));
              }
              componentDidMount() {
                var t = this.props,
                  e = t.start,
                  n = t.onStatus,
                  r = this.IX.current,
                  i = this.IV;
                if (null != r && null != i) {
                  var a = e ? e.scrollFromTop : "start",
                    s = r.getBoundingClientRect();
                  "none" === a ||
                    ("start" === a || "end" === a
                      ? this.scrollIntoView(r, a, !1)
                      : (i.scrollTop += s.top - a));
                }
                n && n(this.state.status),
                  document.addEventListener("focus_input", this.IY);
              }
              componentDidUpdate(t, e) {
                this.state.status !== e.status &&
                  (cancelAnimationFrame(this.IS),
                  (this.IS = requestAnimationFrame(() => {
                    this.scrollSelectedIntoView();
                  }))),
                  (0, _.l)(this.state.status, e.status, this.props.onStatus);
              }
              componentWillUnmount() {
                this.IT && this.IT.cancel(),
                  cancelAnimationFrame(this.IS),
                  document.removeEventListener("focus_input", this.IY);
              }
              isSearching() {
                return (0, _.k)(this.state);
              }
              getSelectedNode() {
                return this.IX.current;
              }
              clearSearch() {
                this.setState({ filteredItems: null });
              }
              scrollSelectedIntoView() {
                var t = this.state.status;
                t.searching
                  ? this.scrollIntoView(this.IW.current, "start", !0)
                  : t.scrolling &&
                    this.scrollIntoView(
                      this.IX.current,
                      t.goingDown ? "end" : "start"
                    );
              }
              goToSearch() {
                var t = (0, _.i)(this.props);
                t && this.setState(t);
              }
              isSelected(t) {
                return (0, _.e)(this.state.status) === t;
              }
              getSelected() {
                var t = (0, _.e)(this.state.status),
                  e = this.IX.current;
                return null != t && e ? { item: t, node: e } : null;
              }
              scrollIntoView(t, e) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                t && (0, c.e)(t, { block: e, force: n });
              }
              renderSearch() {
                if (null == this.props.search) return null;
                var t = !0 === this.state.status.searching,
                  e = !t;
                return (0, s.f)(
                  1,
                  "div",
                  (0, v.a)(d.g, t && d.h),
                  [
                    (0, s.b)(2, l.a, {
                      forwardedRef: this.IU,
                      hasFocusPriority: !1,
                      className: e ? void 0 : d.d,
                    }),
                    (0, s.b)(2, l.a, {
                      hasFocusPriority: !0,
                      onChange: this.onSearchChange,
                      className: e ? d.c : d.f,
                    }),
                  ],
                  4,
                  null,
                  "search",
                  this.IW
                );
              }
              render() {
                var t = this.props,
                  e = this.state;
                if (0 === e.items.length)
                  return null != t.emptyLabel
                    ? (0, s.f)(
                        1,
                        "div",
                        d.a,
                        (0, s.b)(2, f.b, { l10n: t.emptyLabel }),
                        2
                      )
                    : null;
                var n = null;
                if (
                  null != t.search &&
                  null != e.filteredItems &&
                  0 === e.filteredItems.length
                )
                  n = (0, s.f)(
                    1,
                    "div",
                    d.b,
                    (0, s.b)(2, f.b, { l10n: t.search.emptyLabel }),
                    2
                  );
                else {
                  var r = (0, _.d)(e),
                    i = t.keyOf,
                    a = t.renderItem;
                  n = [];
                  for (var u = 0; u < r.length; ++u) {
                    var o = r[u],
                      l = this.isSelected(o);
                    n.push(
                      (0, s.f)(
                        1,
                        "div",
                        null,
                        a(o, l, u, r),
                        0,
                        null,
                        i(o),
                        l ? this.IX : null
                      )
                    );
                  }
                }
                return (0, s.f)(
                  1,
                  "div",
                  (0, v.a)(d.e, t.className),
                  [this.renderSearch(), n],
                  0,
                  null,
                  null,
                  this.setListArea
                );
              }
            }),
          (r.getDerivedStateFromProps = _.c),
          (a = function () {
            (this.IT = null),
              (this.IU = u.e()),
              (this.IV = null),
              (this.IW = u.e()),
              (this.IX = u.e()),
              (this.IY = () => {
                this.scrollSelectedIntoView();
              }),
              (this.setListArea = (t) => {
                this.IV = t;
              }),
              (this.goTo = (t) => {
                var e = (0, _.f)(t, this.state, this.props);
                e && this.setState(e);
              }),
              (this.goToPrevious = () => {
                cancelAnimationFrame(this.IS),
                  (this.IS = requestAnimationFrame(() => {
                    var t = (0, _.h)(this.state, this.props);
                    t && this.setState(t);
                  }));
              }),
              (this.goToNext = () => {
                cancelAnimationFrame(this.IS),
                  (this.IS = requestAnimationFrame(() => {
                    var t = (0, _.g)(this.state, this.props);
                    t && this.setState(t);
                  }));
              }),
              (this.onSearchDidChange = (t) => {
                if (t) {
                  if (this.props.search) {
                    var e = t;
                    this.setState((t, n) => {
                      var r = n.search;
                      return (
                        r && {
                          searchInput: e,
                          filteredItems: r.filter(e, t.items),
                        }
                      );
                    });
                  }
                } else this.clearSearch();
              }),
              (this.onSearchChange = (t) => {
                var e = this.props.search;
                if (null != e) {
                  var n = t.trim();
                  this.IT
                    ? this.IT.debounce((0, _.b)(e), n)
                    : this.onSearchDidChange(n),
                    this.IU.current && this.IU.current.setValue(n),
                    this.setState({ searchInput: n }),
                    this.goToSearch();
                }
              });
          }),
          i),
        g = class extends p.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.IZ = u.e()),
              (this.goToPrevious = () => {
                var t = this.IZ.current;
                t && t.goToPrevious();
              }),
              (this.goToNext = () => {
                var t = this.IZ.current;
                t && t.goToNext();
              }),
              (this.goTo = (t) => {
                var e = this.IZ.current;
                e && e.goTo(t);
              }),
              t
            );
          }
          isSearching() {
            var t = this.IZ.current;
            return null != t && t.isSearching();
          }
          getSelected() {
            var t = this.IZ.current;
            if (null != t) return t.getSelected();
          }
          addSoftKeys(t, e) {
            var n;
            t.setUpDownArrows(this.goToPrevious, this.goToNext);
            var r = this.props.addSearchSoftKeys;
            r &&
              (null == (n = this.IZ.current)
                ? void 0
                : n.state.status.searching) &&
              r(t, e);
          }
          render() {
            return (0, s.i)(
              (0, s.b)(2, m, Object.assign({}, this.props), null, this.IZ)
            );
          }
        },
        b = class extends p.c {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.IZ = u.e()),
              (this.goToPrevious = () => {
                var t = this.IZ.current;
                t && t.goToPrevious();
              }),
              (this.goToNext = () => {
                var t = this.IZ.current;
                t && t.goToNext();
              }),
              (this.goTo = (t) => {
                var e = this.IZ.current;
                e && e.goTo(t);
              }),
              t
            );
          }
          addSoftKeys(t, e) {
            t.setUpDownArrows(this.goToPrevious, this.goToNext);
          }
          render() {
            var t = this.props;
            return (0, s.b)(
              2,
              m,
              {
                className: t.className,
                items: t.items,
                start: t.start,
                keyOf: t.keyOf,
                renderItem: t.renderItem,
                preventLoop: t.preventLoop,
              },
              null,
              this.IZ
            );
          }
        };
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            [
              (0, r.f)(32, "path", null, null, 1, {
                "fill-rule": "evenodd",
                d: "M12 19.1c-3.9 0-7.1-3.2-7.1-7.1S8.1 4.9 12 4.9s7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1zm3.8-10.7c-.2-.2-.4-.2-.6 0L11 11.9c-.2.2-.2.5 0 .7l.8.8c.2.2.5.1.7-.1L16 9.2c.2-.2.1-.5 0-.6l-.2-.2z",
                "clip-rule": "evenodd",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                d: "M12 22C6.5 22 2 17.5 2 12c0-.4.3-.7.7-.7s.7.3.7.7c0 4.7 3.8 8.6 8.6 8.6 4.7 0 8.6-3.8 8.6-8.6S16.7 3.4 12 3.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7c5.5 0 10 4.5 10 10s-4.5 10-10 10z",
              }),
            ],
            4,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return h;
        });
      var r = n(19),
        i = n(3),
        a = n(53),
        s = n(106),
        u = new Map();
      function o(t, e) {
        var n = e.jid,
          r = e.id,
          a = e.groupInfo,
          o = a.isAdmin,
          c = a.growthLocked;
        if (o)
          if (null != c && (u.delete(n), (0, i.o)(c.expiration)))
            (0, s.D)(t, 420, s.b);
          else {
            var d = u.get(n);
            null == d
              ? (function (t, e) {
                  var n = e.jid,
                    r = e.id;
                  t.spinUntilReadyOverlay(
                    t
                      .sendAndReceive("backend", "queryGroupInviteCode", {
                        groupJid: n,
                      })
                      .then((e) => () => {
                        var i, a;
                        if (e.error)
                          return (
                            "growth-locked" === e.error.reason
                              ? ((i = 420), (a = s.b))
                              : (e.error.reason, (i = 419)),
                            (0, s.D)(t, i, a),
                            "dontClose"
                          );
                        var o = e.result.code;
                        u.set(n, o), l(t, r, o);
                      }),
                    { title: 433 }
                  );
                })(t, e)
              : l(t, r, d);
          }
      }
      function l(t, e, n) {
        var r = (0, a.a)(t.getStoreState()),
          i = null != r ? r.chatlist.chats[e] : null;
        i
          ? "GROUP" !== i.type
            ? __LOG__(4)`openGroupInviteScreen given non-group`
            : t.openScreen("GROUP_INVITE_LINK", { chat: i, inviteCode: n })
          : __LOG__(3)`openGroupInviteScreen chat ${e} deleted`;
      }
      function c(t, e) {
        t.spinUntilReadyOverlay(
          t.resetGroupInviteCode(e).then((n) => () => {
            if (n.error) {
              var i,
                a,
                o = n.error;
              return (
                "growth-locked" === o.reason
                  ? ((i = 763), (a = s.b))
                  : (o.reason, (i = 762)),
                (0, s.D)(t, i, a),
                "dontClose"
              );
            }
            var l = n.result.code;
            return u.set(e, l), (0, r.e)({ text: 761 }), "dontClose";
          }),
          { title: 433, left: void 0 }
        );
      }
      function d(t, e, n) {
        u.set(e, n),
          t.dispatch({
            type: "GROUP_INVITE_CODE_CHANGED",
            code: n,
            groupJid: e,
          });
      }
      function h(t, e) {
        u.delete(e),
          t.dispatch({ type: "GROUP_INVITE_CODE_RESET", groupJid: e });
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return v;
        });
      var r = n(15),
        i = n(3),
        a = n(42),
        s = n(92),
        u = n(37),
        o = n.n(u),
        l = n(233),
        c = n(73),
        d = n(44),
        h = class {
          constructor() {
            (this.id = (0, r.x)()),
              (this.Lb = (0, i.t)()),
              (this.Lc = !1),
              (this.Ld = 0),
              (this.Le = 0);
          }
          statusTabOpened(t, e) {
            if (!this.Lc) {
              this.Lc = !0;
              var n = {
                statusSessionId: this.id,
                statusTabOpenT: (0, i.u)(this.Lb),
                statusAvailableUpdatesCount: t,
              };
              e && (n.psaCampaigns = O(e)),
                WAM.log("regular", 1172, void 0, [
                  5,
                  2,
                  n.psaCampaigns,
                  2,
                  0,
                  n.statusAvailableUpdatesCount,
                  3,
                  0,
                  n.statusRankT,
                  1,
                  0,
                  n.statusSessionId,
                  4,
                  0,
                  n.statusTabOpenT,
                ]);
            }
          }
          stopStatusSession() {
            var t = (0, i.u)(this.Lb);
            WAM.log("regular", 1174, void 0, [
              1,
              0,
              this.id,
              2,
              0,
              t,
              3,
              0,
              this.Ld,
              4,
              0,
              this.Le,
            ]);
          }
          statusMuted(t) {
            var e = { muteOrigin: 1, statusSessionId: this.id },
              n = (0, s.a)(t);
            n
              ? ((e.psaCampaignIds = O(n)),
                -1 * Math.random() < 1 &&
                  WAM.log(
                    "regular",
                    2978,
                    void 0,
                    [
                      9,
                      1,
                      e.isPosterBiz,
                      10,
                      1,
                      e.isPosterInAddressBook,
                      8,
                      0,
                      e.muteAction,
                      6,
                      0,
                      e.muteOrigin,
                      7,
                      2,
                      e.psaCampaignId,
                      4,
                      2,
                      e.psaCampaignIds,
                      5,
                      0,
                      e.psaCampaignItemIndex,
                      3,
                      0,
                      e.statusItemIndex,
                      1,
                      0,
                      e.statusSessionId,
                      2,
                      0,
                      e.statusViewerSessionId,
                    ],
                    void 0,
                    -1
                  ))
              : WAM.log("regular", 2978, void 0, [
                  9,
                  1,
                  e.isPosterBiz,
                  10,
                  1,
                  e.isPosterInAddressBook,
                  8,
                  0,
                  e.muteAction,
                  6,
                  0,
                  e.muteOrigin,
                  7,
                  2,
                  e.psaCampaignId,
                  4,
                  2,
                  e.psaCampaignIds,
                  5,
                  0,
                  e.psaCampaignItemIndex,
                  3,
                  0,
                  e.statusItemIndex,
                  1,
                  0,
                  e.statusSessionId,
                  2,
                  0,
                  e.statusViewerSessionId,
                ]);
          }
        },
        v = class {
          constructor() {
            (this.id = (0, r.x)()),
              (this.Lf = new Map()),
              (this.Lg = new Map());
          }
          stopStatusViewerSession(t) {
            var e = this.id,
              n = "noSession" === t ? void 0 : t;
            this.Lf.forEach((t) => {
              var r = {
                statusRowEntryMethod: t.entryMethod,
                statusRowIndex: t.index,
                statusRowSection: t.section,
                statusRowUnreadItemCount: t.unreads.length,
                statusRowViewCount: t.viewCount,
                statusSessionId: n,
                statusViewerSessionId: e,
                psaCampaigns: t.psaCampaigns,
              };
              t.psaCampaigns
                ? -1 * Math.random() < 1 &&
                  WAM.log(
                    "regular",
                    1656,
                    void 0,
                    [
                      8,
                      2,
                      r.psaCampaigns,
                      5,
                      0,
                      r.statusRowEntryMethod,
                      4,
                      0,
                      r.statusRowIndex,
                      3,
                      0,
                      r.statusRowSection,
                      7,
                      0,
                      r.statusRowUnreadItemCount,
                      6,
                      0,
                      r.statusRowViewCount,
                      1,
                      0,
                      r.statusSessionId,
                      2,
                      0,
                      r.statusViewerSessionId,
                    ],
                    void 0,
                    -1
                  )
                : WAM.log("regular", 1656, void 0, [
                    8,
                    2,
                    r.psaCampaigns,
                    5,
                    0,
                    r.statusRowEntryMethod,
                    4,
                    0,
                    r.statusRowIndex,
                    3,
                    0,
                    r.statusRowSection,
                    7,
                    0,
                    r.statusRowUnreadItemCount,
                    6,
                    0,
                    r.statusRowViewCount,
                    1,
                    0,
                    r.statusSessionId,
                    2,
                    0,
                    r.statusViewerSessionId,
                  ]);
            }),
              this.Lg.forEach((t, n) => {
                var r,
                  i,
                  a,
                  s,
                  u,
                  o,
                  l = this.Lf.get(t.author);
                null == l &&
                  __LOG__(
                    4
                  )`Missing row for status, this mean we forgot to properly open the row when reaching it while viewing statuses`;
                var c = null == t.duration ? void 0 : E(t.duration),
                  d = {
                    mediaType: t.mediaType,
                    statusItemLength: c,
                    statusItemLoadTime: E(t.loadTime),
                    statusItemReplied: t.replyCount,
                    statusItemUnread:
                      null != (r = null == l ? void 0 : l.unreads.includes(n))
                        ? r
                        : void 0,
                    statusItemViewCount: t.viewCount,
                    statusItemViewResult: t.viewResult,
                    statusItemViewTime: E(t.viewTime),
                    statusRowIndex: null == l ? void 0 : l.index,
                    statusRowSection: null == l ? void 0 : l.section,
                    statusViewerSessionId: e,
                    statusItemIndex: t.index,
                    psaCampaignId:
                      null == (i = t.psaInfo) ? void 0 : i.psaCampaignId,
                    psaCampaignItemIndex:
                      null == (a = t.psaInfo) ? void 0 : a.psaCampaignItemIndex,
                    psaLinkAvailable:
                      null == (s = t.psaInfo) ? void 0 : s.psaLinkAvailable,
                    psaLinkLoadTime:
                      null == (u = t.psaInfo) ? void 0 : u.psaLinkLoadTime,
                    psaLinkOpenResult:
                      null == (o = t.psaInfo) ? void 0 : o.psaLinkOpenResult,
                  };
                t.psaInfo
                  ? -1 * Math.random() < 1 &&
                    WAM.log(
                      "regular",
                      1658,
                      void 0,
                      [
                        23,
                        1,
                        d.isPosterBiz,
                        25,
                        1,
                        d.isPosterInAddressBook,
                        4,
                        0,
                        d.mediaType,
                        17,
                        2,
                        d.psaCampaignId,
                        18,
                        0,
                        d.psaCampaignItemIndex,
                        19,
                        1,
                        d.psaLinkAvailable,
                        22,
                        1,
                        d.psaLinkClick,
                        21,
                        0,
                        d.psaLinkLoadTime,
                        20,
                        0,
                        d.psaLinkOpenResult,
                        14,
                        0,
                        d.statusItemImpressionCount,
                        16,
                        0,
                        d.statusItemIndex,
                        7,
                        0,
                        d.statusItemLength,
                        5,
                        0,
                        d.statusItemLoadTime,
                        8,
                        0,
                        d.statusItemReplied,
                        9,
                        1,
                        d.statusItemUnread,
                        10,
                        0,
                        d.statusItemViewCount,
                        3,
                        0,
                        d.statusItemViewResult,
                        6,
                        0,
                        d.statusItemViewTime,
                        2,
                        0,
                        d.statusRowIndex,
                        11,
                        0,
                        d.statusRowSection,
                        1,
                        0,
                        d.statusViewerSessionId,
                        26,
                        0,
                        d.urlStatusClicked,
                        27,
                        0,
                        d.urlStatusType,
                      ],
                      void 0,
                      -1
                    )
                  : WAM.log("regular", 1658, void 0, [
                      23,
                      1,
                      d.isPosterBiz,
                      25,
                      1,
                      d.isPosterInAddressBook,
                      4,
                      0,
                      d.mediaType,
                      17,
                      2,
                      d.psaCampaignId,
                      18,
                      0,
                      d.psaCampaignItemIndex,
                      19,
                      1,
                      d.psaLinkAvailable,
                      22,
                      1,
                      d.psaLinkClick,
                      21,
                      0,
                      d.psaLinkLoadTime,
                      20,
                      0,
                      d.psaLinkOpenResult,
                      14,
                      0,
                      d.statusItemImpressionCount,
                      16,
                      0,
                      d.statusItemIndex,
                      7,
                      0,
                      d.statusItemLength,
                      5,
                      0,
                      d.statusItemLoadTime,
                      8,
                      0,
                      d.statusItemReplied,
                      9,
                      1,
                      d.statusItemUnread,
                      10,
                      0,
                      d.statusItemViewCount,
                      3,
                      0,
                      d.statusItemViewResult,
                      6,
                      0,
                      d.statusItemViewTime,
                      2,
                      0,
                      d.statusRowIndex,
                      11,
                      0,
                      d.statusRowSection,
                      1,
                      0,
                      d.statusViewerSessionId,
                      26,
                      0,
                      d.urlStatusClicked,
                      27,
                      0,
                      d.urlStatusType,
                    ]);
              });
          }
          startViewingStatusRow(t, e, n) {
            var r,
              i,
              a = this.Lf.get(t.jid);
            if (null == a) {
              var u = {
                  author: t.jid,
                  viewCount: 1,
                  entryMethod: e,
                  section: p(t),
                  index: n,
                  unreads: _(t),
                },
                o = (0, s.a)(t);
              o && (u.psaCampaigns = O(o)), this.Lf.set(t.jid, u);
            } else {
              ++a.viewCount,
                (a.entryMethod =
                  (r = a.entryMethod) === (i = e) || f(r) < f(i) ? r : i);
              var l = (0, s.a)(t);
              l && (a.psaCampaigns = O(l));
            }
          }
          openPsaStatusLink(t, e, n) {
            var r = this.Lg.get(t);
            null != r && null != r.psaInfo
              ? ((r.psaInfo.psaLinkOpenResult = e),
                (r.psaInfo.psaLinkLoadTime = n))
              : __LOG__(
                  3
                )`openPsaStatusLink tried to open link for not recorded status or not PSA`;
          }
          statusLoaded(t) {
            var e = this.Lg.get(t.id);
            null != e &&
              (e.psaInfo &&
                null == e.psaInfo.psaLinkAvailable &&
                (e.psaInfo.psaLinkAvailable = null != t.content.actionLink),
              null == e.mediaType && (e.mediaType = (0, l.b)(t)));
          }
          openStatus(t, e, n) {
            var r = this.Lg.get(e);
            if (null == r) {
              var i,
                a = t.msgs.findIndex((t) => t.id === e),
                s = t.msgs[a];
              if (s && s.campaignId) {
                var u = s.campaignId,
                  o = t.msgs.findIndex((t) => t.campaignId === u);
                i = {
                  psaCampaignId: u,
                  psaCampaignItemIndex: a - o,
                  psaLinkAvailable: n ? null != n.content.actionLink : void 0,
                };
              }
              this.Lg.set(e, {
                index: a,
                author: t.jid,
                replyCount: 0,
                viewCount: 1,
                state: null,
                stateStartedAt: null,
                loadTime: 0,
                viewTime: 0,
                viewResult: 2,
                duration: void 0,
                mediaType: n ? (0, l.b)(n) : void 0,
                replyStep: null,
                psaInfo: i,
              });
            } else ++r.viewCount;
          }
          startLoadingStatus(t) {
            var e = this.Lg.get(t);
            null == e
              ? __LOG__(4)`You should open a status before trying to load it`
              : g(e, "loading");
          }
          resumeLoadingStatus(t) {
            var e = this.Lg.get(t);
            null != e && g(e, "loading");
          }
          stopLoadingStatus(t) {
            var e = this.Lg.get(t);
            null != e && "loading" === e.state
              ? ((e.loadTime = e.loadTime + m(e)), g(e, null))
              : __LOG__(4)`Failed to stop loading because status state was ${
                  null == e ? void 0 : e.state
                }`;
          }
          startViewingStatus(t, e, n) {
            var r = this.Lg.get(t);
            null == r
              ? __LOG__(4)`You should open a status before trying to view it`
              : (g(r, "viewing"),
                (r.mediaType = n),
                (r.duration = e),
                (r.viewResult = S(r.viewResult, 1)));
          }
          resumeViewingStatus(t) {
            var e = this.Lg.get(t);
            null != e && g(e, "viewing");
          }
          stopViewingStatus(t) {
            var e = this.Lg.get(t);
            null != e && "viewing" === e.state
              ? ((e.viewTime = e.viewTime + m(e)), g(e, null))
              : __LOG__(4)`Failed to stop viewing because status state was ${
                  null == e ? void 0 : e.state
                }`;
          }
          failStatus(t) {
            var e = this.Lg.get(t);
            null != e && (e.viewResult = S(e.viewResult, 3));
          }
          stopLoadingOrViewingStatus(t) {
            var e = this.Lg.get(t);
            null != e &&
              ("loading" === e.state
                ? (e.loadTime = e.loadTime + m(e))
                : "viewing" === e.state && (e.viewTime = e.viewTime + m(e)),
              g(e, null));
          }
          startReplyingToStatus(t) {
            var e = this.Lg.get(t);
            null != e && (e.replyStep = "replying");
          }
          replyToStatus(t, e, n) {
            var r = this.Lg.get(t);
            null != r && (r.replyStep = "replied");
            var i = null == r ? void 0 : r.author;
            if (null != i && "@psa" !== i && "@me" !== i) {
              var a = (0, d.c)(i, e);
              WAM.log("regular", 1180, void 0, [
                4,
                1,
                (0, c.e)(a),
                6,
                1,
                null != a.phonebookPhone,
                1,
                0,
                this.id,
                3,
                0,
                n,
                2,
                0,
                1,
              ]);
            }
          }
          stopReplyingToStatus(t) {
            var e = this.Lg.get(t);
            null != e &&
              ("replied" === e.replyStep && ++e.replyCount,
              (e.replyStep = null));
          }
          statusMuted(t, e, n) {
            var r = "noSession" === t ? void 0 : t,
              i = n.msgs.findIndex((t) => t.id === e),
              a = {
                muteOrigin: 2,
                statusSessionId: r,
                statusViewerSessionId: this.id,
                statusItemIndex: i,
              },
              u = n.msgs[i];
            u &&
              u.campaignId &&
              (a.psaCampaignItemIndex = n.msgs.findIndex((t) => t.campaignId));
            var o = (0, s.a)(n);
            o
              ? ((a.psaCampaignIds = O(o)),
                -1 * Math.random() < 1 &&
                  WAM.log(
                    "regular",
                    2978,
                    void 0,
                    [
                      9,
                      1,
                      a.isPosterBiz,
                      10,
                      1,
                      a.isPosterInAddressBook,
                      8,
                      0,
                      a.muteAction,
                      6,
                      0,
                      a.muteOrigin,
                      7,
                      2,
                      a.psaCampaignId,
                      4,
                      2,
                      a.psaCampaignIds,
                      5,
                      0,
                      a.psaCampaignItemIndex,
                      3,
                      0,
                      a.statusItemIndex,
                      1,
                      0,
                      a.statusSessionId,
                      2,
                      0,
                      a.statusViewerSessionId,
                    ],
                    void 0,
                    -1
                  ))
              : WAM.log("regular", 2978, void 0, [
                  9,
                  1,
                  a.isPosterBiz,
                  10,
                  1,
                  a.isPosterInAddressBook,
                  8,
                  0,
                  a.muteAction,
                  6,
                  0,
                  a.muteOrigin,
                  7,
                  2,
                  a.psaCampaignId,
                  4,
                  2,
                  a.psaCampaignIds,
                  5,
                  0,
                  a.psaCampaignItemIndex,
                  3,
                  0,
                  a.statusItemIndex,
                  1,
                  0,
                  a.statusSessionId,
                  2,
                  0,
                  a.statusViewerSessionId,
                ]);
          }
        };
      function f(t) {
        switch (t) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 3:
            return 3;
          case 4:
            return 4;
          case 5:
            return 5;
          case 6:
            return 6;
          default:
            return (
              __LOG__(
                4
              )`Missing entry method [${t}] on getRowEntryMethodPriority`,
              7
            );
        }
      }
      function p(t) {
        if ("@me" === t.jid) return 4;
        switch (t.section) {
          case "recent":
            return 1;
          case "viewed":
            return 2;
          case "muted":
            return 3;
          default:
            return (0, o.a)(t.section);
        }
      }
      function _(t) {
        var e,
          n = null == (e = t.unread) ? void 0 : e.first;
        if (null == n) return [];
        var r = t.msgs.findIndex((t) => t.id === n.id);
        if (r < 0)
          return (
            __LOG__(2)`first unread message id: ${n.id}, messages: ${t.msgs
              .map((t) => t.id)
              .join(", ")}`,
            __LOG__(
              4
            )`Author has a first unread message that is not part of its statuses`,
            SEND_LOGS("status-getUnreads-missingLastMessage", 0.01),
            []
          );
        for (var i = [], a = r, s = t.msgs.length; a < s; ++a)
          i.push(t.msgs[a].id);
        return i;
      }
      function m(t) {
        return null == t.stateStartedAt ? 0 : (0, i.u)(t.stateStartedAt);
      }
      function g(t, e) {
        null == e
          ? ((t.state = null), (t.stateStartedAt = null))
          : null == t.state
          ? ((t.state = e), (t.stateStartedAt = (0, i.t)()))
          : __LOG__(
              4
            )`Trying to update status state to ${e} but was already ${t.state}`;
      }
      function b(t) {
        switch (t) {
          case 1:
            return 1;
          case 3:
            return 2;
          case 2:
            return 3;
          default:
            return (
              __LOG__(4)`Missing view result [${t}] on getViewResultPriority`, 4
            );
        }
      }
      function S(t, e) {
        return t === e || b(t) < b(e) ? t : e;
      }
      function E(t) {
        return t < 1e3 ? t : 1e3 * Math.round(t / 1e3);
      }
      function O(t) {
        var e = {};
        t.msgs.forEach((t) => {
          if (t.campaignId) {
            var n = t.campaignId,
              r = e[n] || 0;
            (0, a.i)(t.ack) || r++, (e[n] = r);
          }
        });
        var n = [];
        return (
          Object.keys(e).forEach((t) => {
            n.push(`${t}:${e[t]}`);
          }),
          n.join(",")
        );
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return v;
        });
      var r = n(316),
        i = n(119),
        a = n(50),
        s = n(94),
        u = n(274),
        o = new r.a(10),
        l = new r.a(10),
        c = new r.a(10);
      function d(t) {
        if (!t) return Promise.resolve();
        var e = o.get(t);
        return e || ((e = (0, u.b)().getPreview(t)), o.set(t, e)), e;
      }
      function h(t) {
        if (!t) return Promise.resolve();
        var e = l.get(t);
        return e || ((e = (0, i.getChunkTable)().getFrame(t)), l.set(t, e)), e;
      }
      function v(t, e) {
        if (!t) return Promise.resolve();
        var n = c.get(t);
        return (
          (n && "forceRefetch" !== e) ||
            ((n = (0, a.p)(t, {
              uri: (t) => (0, i.getChunkTable)().getFullContent(t),
              path: (t) => (0, s.i)(t),
            })),
            c.set(t, n)),
          n
        );
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n(1),
        i = (n(13), n(240)),
        a = n(224),
        s = n(59),
        u = n(61),
        o = 30,
        l = class extends u.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.title !== t.title ||
                n.tab !== t.tab ||
                n.isVoipAvailable !== t.isVoipAvailable ||
                n.children !== t.children)
            );
          }
          addSoftKeys(t, e) {
            var n = this.props,
              r = n.tab,
              i = n.isVoipAvailable;
            r && (0, a.c)(t, e, r, i);
          }
          render() {
            var t = this.props,
              e = t.title,
              n = t.tab,
              s = t.isVoipAvailable,
              u = t.children,
              o = n && (0, a.d)(n, s);
            return (0, r.c)(
              [
                e && (0, r.f)(1, "div", i.c, e, 0),
                null != o &&
                  (0, r.b)(2, a.b, { items: o.items, selected: o.selected }),
                (0, r.f)(1, "div", i.a, u, 0),
              ],
              0
            );
          }
        },
        c = (0, s.c)(l, (t, e, n) => ({
          title: n.title || null,
          tab: t.tab,
          isVoipAvailable: t.isVoipAvailable,
          children: n.children,
        }));
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M13.518 7.626v-2.82a.72.72 0 00-.247-.583.905.905 0 00-.65-.222H1.9a.905.905 0 00-.651.222.72.72 0 00-.247.584v8.386a.72.72 0 00.247.584.905.905 0 00.651.222h10.72a.905.905 0 00.65-.222.72.72 0 00.247-.584v-2.82l.1.09 2.613 2.44a.49.49 0 00.49.088.408.408 0 00.28-.372V5.382a.407.407 0 00-.279-.374.49.49 0 00-.492.089l-2.591 2.421-.122.109h.002z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M9 2a5.022 5.022 0 00-3.545 1.426A4.82 4.82 0 004 6.9C4 10.54 9 16 9 16s5-5.46 5-9.1a4.82 4.82 0 00-1.455-3.474A5.022 5.022 0 009 2zm0 6.65c-.986 0-1.786-.783-1.786-1.75S8.014 5.15 9 5.15s1.786.783 1.786 1.75a1.72 1.72 0 01-.518 1.243A1.786 1.786 0 019 8.65z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n(8),
        i = n.n(r),
        a = n(112),
        s = [0, 0];
      function u(t, e, n, r, i, a, u) {
        var o = n + (-i * (e - r) + -a * n) * t,
          l = e + o * t;
        return Math.abs(o) < u && Math.abs(l - r) < u
          ? ((s[0] = r), (s[1] = 0), s)
          : ((s[0] = l), (s[1] = o), s);
      }
      function o(t) {
        return { stiffness: 170, damping: 26, precision: 2, val: t };
      }
      var l = 1e3 / 60,
        c = class {
          constructor(t) {
            (this.animationID = null),
              (this.wasAnimating = !1),
              (this.prevTime = 0),
              (this.accumulatedTime = 0),
              (this.ending = !1),
              (this.unreadPropStyle = null),
              (this.Ip = (t) => {
                var e = !1,
                  n = this.state,
                  r = n.currentStyle,
                  i = n.currentVelocity,
                  s = n.lastIdealStyle,
                  u = n.lastIdealVelocity;
                for (var o in t)
                  if ((0, a.a)(t, o)) {
                    var l = t[o];
                    "number" == typeof l &&
                      (e ||
                        ((e = !0),
                        (r = Object.assign({}, r)),
                        (i = Object.assign({}, i)),
                        (s = Object.assign({}, s)),
                        (u = Object.assign({}, u))),
                      (r[o] = l),
                      (i[o] = 0),
                      (s[o] = l),
                      (u[o] = 0));
                  }
                e &&
                  this.setState({
                    currentStyle: r,
                    currentVelocity: i,
                    lastIdealStyle: s,
                    lastIdealVelocity: u,
                  });
              }),
              (this.Iq = () => {
                this.ending ||
                  null != this.animationID ||
                  (this.animationID = requestAnimationFrame((t) => {
                    if (!this.ending) {
                      var e = this.props.style;
                      if (
                        (function (t, e, n) {
                          for (var r in e)
                            if ((0, a.a)(e, r)) {
                              if (0 !== n[r]) return !1;
                              var i = "number" == typeof e[r] ? e[r] : e[r].val;
                              if (t[r] !== i) return !1;
                            }
                          return !0;
                        })(
                          this.state.currentStyle,
                          e,
                          this.state.currentVelocity
                        )
                      )
                        return (
                          this.wasAnimating &&
                            this.props.onRest &&
                            this.props.onRest(),
                          (this.animationID = null),
                          (this.wasAnimating = !1),
                          void (this.accumulatedTime = 0)
                        );
                      this.wasAnimating = !0;
                      var n = t || performance.now(),
                        r = n - this.prevTime;
                      if (
                        ((this.prevTime = n),
                        (this.accumulatedTime = this.accumulatedTime + r),
                        this.accumulatedTime > 10 * l &&
                          (this.accumulatedTime = 0),
                        0 === this.accumulatedTime)
                      )
                        return (this.animationID = null), void this.Iq();
                      var s =
                          (this.accumulatedTime -
                            Math.floor(this.accumulatedTime / l) * l) /
                          l,
                        o = Math.floor(this.accumulatedTime / l),
                        c = {},
                        d = {},
                        h = {},
                        v = {};
                      for (var f in e)
                        if ((0, a.a)(e, f)) {
                          var p = e[f];
                          if ("number" == typeof p)
                            (h[f] = p), (v[f] = 0), (c[f] = p), (d[f] = 0);
                          else {
                            for (
                              var _ = this.state.lastIdealStyle[f],
                                m = this.state.lastIdealVelocity[f],
                                g = 0;
                              g < o;
                              g++
                            ) {
                              var b = u(
                                  l / 1e3,
                                  _,
                                  m,
                                  p.val,
                                  p.stiffness,
                                  p.damping,
                                  p.precision
                                ),
                                S = i()(b, 2);
                              (_ = S[0]), (m = S[1]);
                            }
                            var E = u(
                                l / 1e3,
                                _,
                                m,
                                p.val,
                                p.stiffness,
                                p.damping,
                                p.precision
                              ),
                              O = i()(E, 2),
                              A = O[0],
                              y = O[1];
                            (h[f] = _ + (A - _) * s),
                              (v[f] = m + (y - m) * s),
                              (c[f] = _),
                              (d[f] = m);
                          }
                        }
                      (this.animationID = null),
                        (this.accumulatedTime -= o * l),
                        this.setState({
                          currentStyle: h,
                          currentVelocity: v,
                          lastIdealStyle: c,
                          lastIdealVelocity: d,
                        }),
                        (this.unreadPropStyle = null),
                        this.Iq();
                    }
                  }));
              }),
              (this.props = t),
              (this.state = (function (t) {
                var e = t.defaultStyle,
                  n = t.style,
                  r =
                    e ||
                    (function (t) {
                      var e = {};
                      for (var n in t)
                        (0, a.a)(t, n) &&
                          (e[n] = "number" == typeof t[n] ? t[n] : t[n].val);
                      return e;
                    })(n),
                  i = (function (t) {
                    var e = {};
                    for (var n in t) (0, a.a)(t, n) && (e[n] = 0);
                    return e;
                  })(r);
                return {
                  currentStyle: r,
                  currentVelocity: i,
                  lastIdealStyle: r,
                  lastIdealVelocity: i,
                };
              })(t));
          }
          setState(t) {
            (this.state = t), this.props.onUpdate(t.currentStyle);
          }
          isAnimating() {
            return null != this.animationID;
          }
          start() {
            (this.prevTime = performance.now()), this.Iq();
          }
          update(t) {
            null != this.unreadPropStyle && this.Ip(this.unreadPropStyle),
              (this.unreadPropStyle = t),
              null == this.animationID &&
                ((this.prevTime = performance.now()), this.Iq()),
              (this.props.style = t);
          }
          end() {
            (this.ending = !0),
              null != this.animationID &&
                (cancelAnimationFrame(this.animationID),
                (this.animationID = null));
          }
        };
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        });
      var r = "F",
        i = "G FZ";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return v;
      });
      var r = n(1),
        i = (n(13), n(18)),
        a = n(125),
        s = n(305),
        u = n(61),
        o = (n(293), n(19)),
        l = n(27),
        c = n(59),
        d = n(246),
        h = n(73);
      function v(t, e, n) {
        (0, o.b)(
          (0, r.b)(2, p, {
            sendReport: n,
            reportedUserJid: t,
            viewOnceMsgState: e.content.viewOnceState,
          })
        );
      }
      var f = class extends u.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)), (this.state = { blockUser: !1 }), t
            );
          }
          addSoftKeys(t, e) {
            t.setBack(o.a),
              t.setCenterLabel(916, () => {
                this.props.sendReport(this.state.blockUser);
              }),
              t.setRightLabel(930, () => {
                this.setState({ blockUser: !this.state.blockUser });
              });
          }
          MD() {
            var t = this.props.contacts[this.props.reportedUserJid];
            return !!t && (0, h.e)(t);
          }
          ME() {
            var t = "active" === this.props.viewOnceMsgState;
            return this.MD()
              ? t
                ? (0, r.b)(2, i.b, { l10n: 736 })
                : (0, r.b)(2, i.b, { l10n: 737 })
              : t
              ? (0, r.b)(2, i.b, { l10n: 734 })
              : (0, r.b)(2, i.b, { l10n: 735 });
          }
          render() {
            var t = this.props,
              e = t.contacts,
              n = t.reportedUserJid,
              u = (0, l.g)(e, n);
            return (0, r.f)(
              1,
              "div",
              "JL W",
              [
                (0, r.f)(
                  1,
                  "div",
                  "JM X FV FS",
                  (0, r.b)(2, d.a, {
                    textClassName: "JO",
                    maxLineClassName: "JP",
                    truncated: !0,
                    children: (0, r.b)(2, i.b, { l10n: [u, 232] }),
                  }),
                  2
                ),
                (0, r.b)(2, s.a, {
                  className: "JN Y",
                  children: [
                    (0, r.f)(1, "div", "JK", this.ME(), 0),
                    (0, r.b)(2, a.d, {
                      title: this.MD() ? 722 : 723,
                      checked: this.state.blockUser,
                    }),
                  ],
                }),
              ],
              4
            );
          }
        },
        p = (0, c.c)(f, (t, e, n) =>
          Object.assign({ contacts: t.contacts }, n)
        );
    },
    function (t, e, n) {
      (function (t, r) {
        var i,
          a = n(451);
        i =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : r;
        var s = Object(a.a)(i);
        e.a = s;
      }).call(this, n(391), n(470)(t));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return a;
        });
      var r = " ",
        i = "—",
        a = "…";
    },
    function (t, e, n) {
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(153),
        o = n(21),
        l = n(63),
        c = n(47),
        d = n(155),
        h = n(76);
      function v(t) {
        return "email" !== t && "number" !== t;
      }
      var f = class extends i.a {
        shouldComponentUpdate(t, e) {
          var n = this.props;
          return (
            n !== t &&
            (n.className !== t.className ||
              n.hasFocusPriority !== t.hasFocusPriority ||
              n.placeholder !== t.placeholder ||
              n.pattern !== t.pattern ||
              n.defaultValue !== t.defaultValue ||
              n.onChange !== t.onChange ||
              n.onKeyDown !== t.onKeyDown ||
              n.type !== t.type ||
              n.invalid !== t.invalid ||
              n.isDisabled !== t.isDisabled)
          );
        }
        constructor(t) {
          if (
            (super(t),
            (this.Gx = !1),
            (this.Gy = 0),
            (this.Gz = 0),
            (this.HA = null),
            (this.HB = null),
            (this.HC = null),
            (this.HD = !1),
            (this.HE = null),
            (this.HF = ""),
            (this.HG = null),
            (this.setInput = (t) => {
              if (((this.HE = t), t)) {
                this.HF = t.value;
                var e = Object.getPrototypeOf(t);
                this.HG = Object.getOwnPropertyDescriptor(e, "value").set;
              } else this.HG = null;
            }),
            (this.handleChange = (t) => {
              var e = t.target;
              if (this.HF !== e.value) {
                0 === e.value.length &&
                  0 !== this.HF.length &&
                  (this.HA = requestAnimationFrame(() => {
                    e.blur();
                  })),
                  (this.HF = e.value);
                var n = this.HD ? (0, d.f)(e.value) : e.value;
                this.props.onChange && this.props.onChange(n, t);
              }
            }),
            (this.handleNativeFocus = () => {
              this.restoreSelection();
              var t = new Event("focus_input", { bubbles: !0 });
              this.HE && this.HE.dispatchEvent(t);
            }),
            (this.restoreSelection = () => {
              null != this.HE &&
                this.Gx &&
                this.HE.setSelectionRange(this.Gy, this.Gz);
            }),
            (this.saveSelection = () => {
              null != this.HE &&
                this.Gx &&
                ((this.Gy = this.HE.selectionStart),
                (this.Gz = this.HE.selectionEnd));
            }),
            (this.onKeyDown = (t) => {
              var e = (0, l.m)(t);
              if (e === l.f && h.f) {
                var n = t.target;
                this.HA = requestAnimationFrame(() => {
                  n.blur();
                });
              } else
                this.props.hasFocusPriority &&
                (e === l.b || e === l.c) &&
                t.target.value
                  ? t.stopPropagation()
                  : this.props.onKeyDown && this.props.onKeyDown(t);
            }),
            (this.Gx = v(this.props.type)),
            null != t.defaultValue)
          ) {
            (this.Gy = t.defaultValue.length),
              (this.Gz = t.defaultValue.length);
            var e = (0, c.e)(t.defaultValue),
              n = e.normalizedText,
              r = e.fontFamily;
            (this.HC = n), (this.HB = r), (this.HD = n !== t.defaultValue);
          }
        }
        componentDidMount() {
          this.HE && this.HB && (this.HE.style.fontFamily = this.HB);
        }
        componentDidUpdate() {
          this.Gx = v(this.props.type);
        }
        componentWillUnmount() {
          null != this.HA && cancelAnimationFrame(this.HA);
        }
        pasteText(t) {
          if (null != this.HE) {
            var e = (0, c.e)(t).normalizedText,
              n = this.HD || e !== t,
              r = this.HH(),
              i = this.HI(),
              a = r.substring(0, i.start) + e,
              s = a + r.substring(i.end),
              u = a.length;
            this.setValue(n ? (0, d.f)(s) : s), this.HJ(u);
          }
        }
        HH() {
          var t;
          return (null == (t = this.HE) ? void 0 : t.value) || "";
        }
        getValue() {
          var t = this.HH();
          return this.HD ? (0, d.f)(t) : t;
        }
        setValue(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = this.HE,
            i = this.HG;
          if (null != r && null != i && r.value !== t) {
            var a = (0, c.e)(t),
              s = a.normalizedText,
              u = a.fontFamily;
            if (
              ((this.HD = s !== t),
              (this.HB = u),
              (r.style.fontFamily = u),
              i.call(r, s),
              this.HJ(e ? 0 : s.length),
              !n)
            ) {
              var o = new Event("input", { bubbles: !0 });
              r.dispatchEvent(o);
            }
          }
        }
        HI() {
          return null != this.HE && this.Gx
            ? { start: this.HE.selectionStart, end: this.HE.selectionEnd }
            : { start: 0, end: 0 };
        }
        HJ(t) {
          var e = this.HE;
          null != e &&
            this.Gx &&
            ((e.selectionStart = t),
            (e.selectionEnd = t),
            this.saveSelection());
        }
        render() {
          var t = this.props,
            e = t.placeholder ? (0, o.k)(t.placeholder) : void 0,
            n = t.isDisabled,
            i = void 0 !== n && n;
          return (0, r.b)(2, u.b.input, {
            innerRef: this.setInput,
            hasFocusPriority: t.hasFocusPriority,
            type: t.type || "text",
            pattern: t.pattern,
            placeholder: e,
            defaultValue: this.HC,
            disabled: i,
            onInput: this.handleChange,
            onKeyDown: this.onKeyDown,
            className: (0, s.a)(
              "Cv",
              t.invalid && "Cw",
              i && "Cx",
              t.className
            ),
            onNativeFocus: this.handleNativeFocus,
            onNativeBlur: this.saveSelection,
          });
        }
      };
      e.a = f;
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M7.142 4 6 5.175 9.709 9 6 12.825 7.142 14 12 9z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      function r(t, e, n) {
        var r = t.getCache(),
          i = r.oneToOneChatFromJid(e),
          a = r.groupsInCommon(e);
        t.fetchMissingKeysForContact(e),
          t.openScreen("CONTACT_INFO", {
            jid: e,
            chat: i,
            groupsInCommon: a,
            start: n,
          });
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return a;
        });
      var r = n(123);
      function i(t, e, n) {
        return (0, r.b)(t, e).then(() => {
          n && e && e.tel
            ? t.deltaSync("interactive", { [e.tel]: n })
            : t.deltaSync("interactive");
        });
      }
      function a(t) {
        return i(t, {});
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1),
        i = n(13);
      function a(t) {
        return { blob: t, url: self.URL.createObjectURL(t) };
      }
      function s(t) {
        self.URL.revokeObjectURL(t.url);
      }
      var u = class extends i.a {
        static getDerivedStateFromProps(t, e) {
          return (function (t, e) {
            return e.blob !== t ? (s(e), a(t)) : null;
          })(t.blob, e);
        }
        constructor(t) {
          super(t), (this.state = a(t.blob));
        }
        componentWillUnmount() {
          s(this.state);
        }
        render() {
          var t = this.props,
            e = this.state.url;
          return (
            e && t.sampleSize && (e = `${e}#-moz-samplesize=${t.sampleSize}`),
            (0, r.f)(
              1,
              "img",
              t.className,
              null,
              1,
              {
                src: e,
                onLoad: t.onLoad,
                onError: t.onError,
                style: i.h(t.style),
              },
              null,
              t.innerRef
            )
          );
        }
      };
      e.b = u;
      var o = class extends i.a {
        static getDerivedStateFromProps(t, e) {
          return t.src != t.src ? { src: t.src, error: !1 } : null;
        }
        constructor(t) {
          super(t),
            (this.LJ = () => {
              var t = this.state.src;
              this.setState((e) => (e.src === t ? { error: !0 } : null));
            }),
            (this.state = { src: t.src, error: !1 });
        }
        render() {
          return this.state.error && this.props.fallback
            ? this.props.fallback
            : (0, r.f)(1, "img", this.props.className, null, 1, {
                src: this.props.src,
                onError: this.LJ,
              });
        }
      };
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r = n(1),
        i = (n(13), n(11)),
        a = n(18);
      function s(t) {
        var e = t.size,
          n = t.className,
          s = t.highPrecision,
          u = void 0 !== s && s;
        return e < i.d
          ? (0, r.b)(2, a.b, { className: n, l10n: [Math.round(e), 292] })
          : e < i.e
          ? (0, r.b)(2, a.b, { className: n, l10n: [Math.round(e / i.d), 294] })
          : e < i.c
          ? (0, r.b)(2, a.b, {
              className: n,
              l10n: [
                u ? parseFloat((e / i.e).toFixed(1)) : Math.round(e / i.e),
                295,
              ],
            })
          : (0, r.b)(2, a.b, {
              className: n,
              l10n: [
                u ? parseFloat((e / i.c).toFixed(2)) : Math.round(e / i.c),
                293,
              ],
            });
      }
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n(197),
        i = n(141),
        a = n(78),
        s = n(140),
        u = n(267),
        o = new Set();
      function l() {
        o.forEach((t) => {
          t.DM.pause();
        });
      }
      var c = class {
        constructor(t) {
          (this.current = null),
            (this.DO = null),
            (this.currentTime = 0),
            (this.DP = !1),
            (this.DQ = !1),
            (this.DR = "1x"),
            (this.DS = 0),
            (this.DV = h(0, 0, (t) => {
              this.DU(t) &&
                (this.DP ||
                  ((this.DP = !0),
                  this.DW.forceRunNowIfScheduled(),
                  this.DU(t) && this.DM.handleCanPlay()));
            })),
            (this.DX = h(0, 0, (t) => {
              if ((this.DW.forceRunNowIfScheduled(), this.DU(t))) {
                if (this.DN && !this.DO) {
                  var e = (0, i.c)()
                    .then((t) => {
                      if (this.DO === e && 0 === t)
                        return (
                          this.DN && this.DN(),
                          new Promise((t) => {
                            setTimeout(t, 2e3);
                          })
                        );
                    })
                    .then(() => {
                      this.DO === e && (this.DO = null);
                    });
                  this.DO = e;
                }
                this.DM.handlePlay();
              }
            })),
            (this.DY = h(0, 0, (t) => {
              this.DW.forceRunNowIfScheduled(),
                this.DU(t) && this.DM.handlePause();
            })),
            (this.DZ = h(0, 0, (t) => {
              var e = this.DU(t);
              e &&
                ((this.currentTime = e.currentTime),
                this.DW.debounceAndCap(16, 250));
            })),
            (this.Da = h(0, 0, (t) => {
              this.DU(t) &&
                (this.DW.cancel(), (this.DQ = !1), this.DM.handleEnded());
            })),
            (this.ref = (t, e) => {
              var n = this.current;
              null == t ? o.delete(this) : o.add(this),
                t !== n &&
                  ((this.current = t),
                  n &&
                    (this.DW.cancel(),
                    n.removeEventListener("canplay", this.DV),
                    n.removeEventListener("play", this.DX),
                    n.removeEventListener("pause", this.DY),
                    n.removeEventListener("timeupdate", this.DZ),
                    n.removeEventListener("ended", this.Da),
                    (this.DP = !1),
                    "preserveTime" !== e && (this.currentTime = 0)),
                  t &&
                    (t.addEventListener("canplay", this.DV),
                    t.addEventListener("play", this.DX),
                    t.addEventListener("pause", this.DY),
                    t.addEventListener("timeupdate", this.DZ),
                    t.addEventListener("ended", this.Da),
                    (t.playbackRate = (0, u.g)(this.DR)),
                    (t.currentTime = this.currentTime),
                    this.DQ && d(t)));
            }),
            (this.DW = new a.a(() => {
              this.DM.handleTimeUpdate(this.currentTime);
            })),
            (this.DM = t);
        }
        enableWarnIfMuted(t) {
          this.DN = t || this.DT;
        }
        DT() {
          (0, s.a)(675);
        }
        componentWillUnmount() {
          this.DO = null;
        }
        DU(t) {
          var e = this.current;
          return null != e && e === t.target ? e : null;
        }
        getDuration() {
          var t,
            e = null == (t = this.current) ? void 0 : t.duration;
          return Number.isFinite(e) ? e : null;
        }
        setPlaybackRate(t) {
          if (this.DR !== t) {
            this.DR = t;
            var e = this.current;
            e && (e.playbackRate = (0, u.g)(t));
          }
        }
        setPlaying(t) {
          if (this.DQ !== t) {
            this.DQ = t;
            var e = this.current;
            e && (t ? d(e) : e.pause());
          }
        }
        seekTo(t) {
          var e = this.current;
          this.currentTime !== t &&
            (null != e
              ? (function (t, e) {
                  t.currentTime = e;
                })(e, t)
              : (this.currentTime = t));
        }
        seekToward(t) {
          var e = this.getDuration();
          null == e && (e = this.DM.mediaDuration()),
            this.seekTo((0, r.c)(this.currentTime, e, t));
        }
      };
      function d(t) {
        var e = t.play();
        e && e.catch(() => {});
      }
      function h(t, e, n) {
        return n;
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            [
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FFF",
                "fill-rule": "nonzero",
                d: "M12 23.96c6.605 0 11.96-5.355 11.96-11.96S18.604.04 12 .04.04 5.396.04 12 5.396 23.96 12 23.96z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FF3B30",
                "fill-rule": "nonzero",
                d: "M12 21.96c-5.5 0-9.96-4.46-9.96-9.96 0-5.5 4.46-9.96 9.96-9.96 5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FFF",
                d: "M11.737 13.554a.68.68 0 01-.68-.647l-.495-6.84a.681.681 0 01.68-.717h1.55c.39 0 .7.326.68.715l-.476 6.841a.68.68 0 01-.68.648h-.579zm-.916 2.223c.28-.277.678-.415 1.195-.415.51 0 .9.144 1.173.431.273.287.41.686.41 1.195 0 .51-.139.913-.414 1.211-.277.298-.667.447-1.169.447-.51 0-.906-.144-1.19-.43-.283-.288-.424-.697-.424-1.228s.139-.935.42-1.211z",
              }),
            ],
            4,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M16.3 4.2c2.1 0 3.8 1.8 3.8 4s-1.7 4-3.8 4-3.8-1.8-3.8-4 1.7-4 3.8-4zM5.4 5.4c.5 0 1 .4 1 1v2.9h2.9c.5 0 1 .4 1 1v.5c0 .5-.4 1-1 1H6.4v3c0 .5-.4 1-1 1h-.5c-.5 0-1-.4-1-1v-3H1c-.5 0-1-.4-1-1v-.5c0-.6.4-1 1-1h2.9V6.4c0-.6.4-1 1-1h.5zm10.9 8.7c2.5 0 7.6 1.3 7.6 4v1.1c0 .5-.4.8-.8.8H9.5c-.4 0-.8-.4-.8-.8V18c0-2.6 5.1-3.9 7.6-3.9z",
            }),
            2,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r = n(1),
        i = (n(13), n(183)),
        a = { bottom: "HS HU", center: "HS HV", top: "HS HT" };
      function s(t) {
        var e = t.type;
        return (0, r.f)(1, "div", a[e], (0, r.b)(2, i.a), 2);
      }
    },
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "e", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return v;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "a", function () {
          return p;
        });
      var r = n(221),
        i = n(53),
        a = n(103),
        s = n(16),
        u = n(32),
        o = n(157),
        l = n(233),
        c = n(9);
      function d(t, e) {
        t.sendAndReceive("backend", "getMsgReactions", { msgId: e }).then(
          (n) => {
            t.dispatch({
              type: "LOADED_MSG_REACTIONS",
              msgId: e,
              msgReactions: n,
            });
          }
        );
      }
      function h(t, e, n, r) {
        return r && _(3, t, e), (0, o.b)(s.e.sendReaction(e.id, n));
      }
      function v(t) {
        return (0, o.b)(s.e.retryMsg((0, u.t)(t)));
      }
      function f(t, e) {
        return _(2, t, e), (0, o.b)(s.e.sendReaction(e.id));
      }
      var p = (t) => ({
        notifyNewReaction: (e) => {
          var n = e.msg,
            s = e.reaction;
          return (function (t, e, n) {
            var s = t.getCache().chatFromId(e.chatId);
            if (s) {
              var u = (0, i.a)(t.getStoreState()),
                o = (0, a.i)();
              if (u) {
                var l = o ? "short" : "alert",
                  c =
                    u.msglist && 0 === u.screens.length && o
                      ? u.msglist.chat.id
                      : void 0;
                if (o && ((0, i.e)(u) || c === s.id)) return;
                (0, r.c)(n, e, s, u.contacts, u.user, u.settings, l);
              }
            }
          })(t, n, s);
        },
        reactionReceived: (e) => {
          var n = e.msg;
          return (function (t, e) {
            if (t.getCache().updateMsg(e)) {
              t.dispatch({ type: "MSG_UPDATED", msg: e });
              var n = (0, i.a)(t.getStoreState());
              !0 ===
                (null == n
                  ? void 0
                  : n.screens.some((t) => {
                      var n = t.screen;
                      return "MSG_INFO" === n.type && n.props.msg.id === e.id;
                    })) && d(t, e.id);
            }
          })(t, n);
        },
      });
      function _(t, e, n) {
        var r = (0, l.a)(n),
          i = (0, c.E)(e) ? 1 : 2;
        WAM.log("regular", 3184, void 0, [2, 0, t, 3, 0, r, 1, 0, i]);
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M9.725 14.194v2.32a.483.483 0 01-.476.486h-.487a.483.483 0 01-.476-.487v-2.319a4.939 4.939 0 01-1.995-.764 5.163 5.163 0 01-2.243-3.482C4.004 9.676 4 9.596 4 9.596a.469.469 0 01.125-.343.45.45 0 01.33-.142h.484a.55.55 0 01.528.483c.043.35.132.695.264 1.022a3.65 3.65 0 001.928 1.896 3.53 3.53 0 002.652.022 3.65 3.65 0 001.928-1.805c.156-.362.261-.744.311-1.136a.558.558 0 01.533-.482h.483c.122 0 .24.051.321.144a.445.445 0 01.11.34 6.113 6.113 0 01-.265 1.285c-.644 1.785-2.193 3.046-4.008 3.314zM9.003 2c.6 0 1.176.243 1.601.677.425.433.663 1.021.663 1.634v4.787a2.322 2.322 0 01-1.12 2.033 2.224 2.224 0 01-2.287 0 2.322 2.322 0 01-1.12-2.033V4.31C6.74 3.035 7.752 2 9.002 2z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      });
      var r = n(1),
        i = n(13),
        a = n(76),
        s = n(21),
        u = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.items !== t.items ||
                n.icon !== t.icon ||
                n.selectedIndex !== t.selectedIndex ||
                n.activeIndex !== t.activeIndex)
            );
          }
          constructor(t, e) {
            super(t, e),
              (this.Gu = (t) => {
                this.Gs = t;
              }),
              (this.Gr = (0, s.g)());
          }
          componentDidMount() {
            this.props.selectedIndex && this.Gt(this.props.selectedIndex);
          }
          componentDidUpdate(t) {
            null != t.selectedIndex &&
              this.props.selectedIndex !== t.selectedIndex &&
              this.Gt(t.selectedIndex);
          }
          Gv(t, e, n) {
            if (this.Gr) {
              var r = -1 * n,
                i = "previous" === e && t.scrollLeft < r,
                a = "next" === e && t.scrollLeft > r;
              (i || a) && (t.scrollLeft = r);
            } else {
              var s = "previous" === e && t.scrollLeft > n,
                u = "next" === e && t.scrollLeft < n;
              (s || u) && (t.scrollLeft = n);
            }
          }
          Gt(t) {
            var e = this.Gs;
            if (e) {
              var n = this.props,
                r = n.selectedIndex,
                i = n.items;
              if (null != r)
                if (0 !== r)
                  if (r !== i.length - 1) {
                    var s = e.getElementsByClassName("Bg"),
                      u = e.scrollLeft;
                    if (r < t) {
                      var o = u + s[r].getBoundingClientRect().left;
                      this.Gv(e, "previous", o - 25);
                    } else {
                      var l = u + s[r + 1].getBoundingClientRect().left;
                      this.Gv(e, "next", l + 25 - a.o);
                    }
                  } else
                    e.scrollLeft =
                      (this.Gr ? -1 : 1) * e.getBoundingClientRect().width;
                else e.scrollLeft = 0;
            }
          }
          Gw(t) {
            return this.props.selectedIndex === t
              ? "Bi Bg"
              : this.props.activeIndex === t
              ? "Bh Bg"
              : "Bg";
          }
          render() {
            var t = this.props,
              e = t.items,
              n = t.selectedIndex,
              i = t.activeIndex,
              a = t.icon;
            return (0, r.f)(
              1,
              "div",
              "Bf",
              e.map((t, e) => {
                var s = t.icon || a;
                if (s)
                  return (0, r.b)(
                    2,
                    s,
                    {
                      item: t,
                      selected: n === e,
                      active: i === e,
                      className: this.Gw(e),
                    },
                    t.key
                  );
                __LOG__(4)`IconRibbon: Icon not found in item nor in props`;
              }),
              0,
              null,
              null,
              this.Gu
            );
          }
        };
    },
    function (t, e, n) {
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(361),
        o = 20;
      function l(t, e) {
        return (0, r.f)(32, "circle", "Da", null, 1, {
          cx: t.viewBox / 2,
          cy: e / 2,
          r: e / 2,
        });
      }
      function c(t, e, n, a, s) {
        return (0, r.f)(32, "circle", "Dc Da", null, 1, {
          transform: s ? `scale(1,-1) translate(0,-${t.viewBox})` : null,
          style: i.h({
            strokeDashoffset: n,
            strokeDasharray: 2 * Math.PI * (a || o),
          }),
          cx: t.viewBox / 2,
          cy: t.viewBox / 2,
          r: a || o,
          "stroke-width": e,
        });
      }
      function d() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        return 2 * (1 - t) * Math.PI * e;
      }
      var h = class extends i.a {
        shouldComponentUpdate(t, e) {
          var n = this.props,
            r = this.state;
          return (
            (n !== t &&
              (n.className !== t.className ||
                n.strokeWidth !== t.strokeWidth ||
                n.theme !== t.theme ||
                n.progress !== t.progress ||
                n.radius !== t.radius ||
                n.countdown !== t.countdown ||
                n.backgroundCircle !== t.backgroundCircle)) ||
            (r !== e &&
              (r.viewBox !== e.viewBox ||
                r.strokeDashoffset !== e.strokeDashoffset))
          );
        }
        static getDerivedStateFromProps(t, e) {
          return {
            viewBox: 2 * (t.radius || o) + t.strokeWidth,
            strokeDashoffset: e.strokeDashoffset,
          };
        }
        constructor(t) {
          super(t),
            (this.handleMotion = (t) => {
              this.Hf() ||
                this.setState({ strokeDashoffset: t.strokeDashoffset });
            }),
            (this.state = {
              viewBox: 0,
              strokeDashoffset: d(t.progress, t.radius),
            }),
            (this.He = new u.a({
              defaultStyle: { strokeDashoffset: d(t.progress, t.radius) },
              style: { strokeDashoffset: d(t.progress, t.radius) },
              onUpdate: this.handleMotion,
            }));
        }
        componentDidUpdate(t) {
          this.props.progress !== t.progress &&
            this.He.update({
              strokeDashoffset: (0, u.b)(
                d(this.props.progress, this.props.radius)
              ),
            });
        }
        componentWillUnmount() {
          this.He.end();
        }
        Hf() {
          return null == this.props.progress;
        }
        render() {
          var t,
            e,
            n,
            i = this.Hf(),
            a = (0, s.a)(
              "DS",
              "white" === this.props.theme && "DX",
              "green" === this.props.theme && "DY",
              "red" === this.props.theme && "DZ",
              i ? "DU" : "DT",
              this.props.className
            );
          return (0, r.f)(
            32,
            "svg",
            a,
            [
              !0 === this.props.backgroundCircle
                ? ((t = this.state),
                  (e = this.props.strokeWidth),
                  (n = this.props.radius),
                  (0, r.f)(32, "circle", "Db Da", null, 1, {
                    cx: t.viewBox / 2,
                    cy: t.viewBox / 2,
                    r: n || o,
                    "stroke-width": e,
                  }))
                : null,
              i
                ? l(this.state, this.props.strokeWidth)
                : c(
                    this.state,
                    this.props.strokeWidth,
                    this.state.strokeDashoffset,
                    this.props.radius,
                    this.props.countdown
                  ),
            ],
            0,
            { viewBox: `0 0 ${this.state.viewBox} ${this.state.viewBox}` }
          );
        }
      };
      e.a = h;
    },
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n(1),
        i = (n(13), n(18));
      function a(t) {
        var e = t.seconds,
          n = Math.floor(e / 86400);
        if (n > 0) return (0, r.b)(2, i.b, { l10n: [n, 282] });
        var a = Math.floor(e / 3600);
        if (a > 0) return (0, r.b)(2, i.b, { l10n: [a, 283] });
        var s = Math.floor(e / 60);
        if (s > 0) return (0, r.b)(2, i.b, { l10n: [s, 284] });
        var u = Math.ceil(e);
        return (0, r.b)(2, i.b, { l10n: [Math.max(1, u), 285] });
      }
    },
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return h;
      });
      var r = n(1),
        i = n(13),
        a = n(106),
        s = n(295),
        u = n(18),
        o = n(195),
        l = (t, e) => {
          var n = t.split("."),
            i = [];
          return (
            n.forEach((t, a) => {
              var s = !1,
                u = (0, o.c)(t).map((t, n) => {
                  var i = e.has(t);
                  s = i || s;
                  var u = i ? "Kg" : void 0,
                    o = a + "-" + n + "-" + t;
                  return (0, r.f)(1, "span", u, t, 0, null, o);
                }),
                l = s ? "Kf" : void 0,
                c = a + "-" + t,
                d = (0, r.f)(1, "span", l, u, 0, null, c);
              if ((i.push(d), a + 1 !== n.length)) {
                var h = a;
                i.push((0, r.f)(1, "span", null, ".", 0, null, h));
              }
            }),
            i
          );
        },
        c = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.NE = (t) =>
                (0, r.f)(
                  1,
                  "div",
                  "Kh c FS",
                  [
                    (0, r.b)(2, u.b, { l10n: 1008 }),
                    (0, r.f)(1, "div", "Ki", t, 0),
                  ],
                  4
                )),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.suspiciousLink !== t.suspiciousLink ||
                n.suspiciousCharacters !== t.suspiciousCharacters)
            );
          }
          render() {
            var t = this.props,
              e = t.suspiciousLink,
              n = t.suspiciousCharacters,
              i = e.match(
                /^(?:https?:\/\/|mailto:[^@]+@)?([^/?#]+)(?:[/?#]|$)/i
              ),
              a = i && i[1];
            if (null === a) return this.NE(l(e, n));
            var s = e.indexOf(a),
              u = e.slice(0, s),
              o = e.slice(s + a.length);
            return this.NE((0, r.c)([u, l(a, n), o], 0));
          }
        },
        d = n(19);
      function h(t, e, n, i, u) {
        (0, d.h)(
          {
            title: 1009,
            left: 903,
            onSoftLeft: () => {
              (0, s.a)(t, i || e),
                (null == u ? void 0 : u.onOpen) && u.onOpen(t);
            },
            center: 864,
            onSoftCenter: (null == u ? void 0 : u.onSoftCenter) || "CLOSE",
            right: 891,
            onSoftRight: () => {
              (function (t) {
                (0, a.E)(t, a.y);
              })(t);
            },
            onBack: (null == u ? void 0 : u.onBack) || "CLOSE",
          },
          (0, r.b)(2, c, { suspiciousLink: e, suspiciousCharacters: n })
        );
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M11.625 10.5h-.592l-.21-.203A4.853 4.853 0 0012 7.125 4.875 4.875 0 107.125 12a4.853 4.853 0 003.172-1.178l.203.21v.593l3.75 3.742 1.117-1.117-3.742-3.75zm-4.5 0A3.37 3.37 0 013.75 7.125 3.37 3.37 0 017.125 3.75 3.37 3.37 0 0110.5 7.125 3.37 3.37 0 017.125 10.5z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n(31),
        i = n(19);
      function a(t, e) {
        var n = t.sendAndReceive("backend", "downloadUserNoticeDeepLinkModal", {
            id: e,
          }),
          a = null;
        return t.spinUntilReadyOverlay(
          n
            .catch((t) => {
              a = t.message;
            })
            .then((n) => () => {
              var s, u;
              return (
                null == n
                  ? (__LOG__(
                      3
                    )`Could not open user notice deep link modal for id ${e}`,
                    null != a &&
                      (a.includes(String(r.a.NOT_FOUND)) ||
                      a.includes(String(r.a.GONE)) ||
                      a.includes(String(r.a.INTERNAL_SERVER_ERROR))
                        ? (u = 1075)
                        : a.toLowerCase().includes("retry error") &&
                          (u = 1074)),
                    (0, i.e)({ text: null != (s = u) ? s : 1073 }))
                  : t.openScreen("USER_NOTICE_DEEP_LINK_MODAL", { modal: n }),
                "dontClose"
              );
            }),
          { title: 894 }
        );
      }
    },
    function (t, e, n) {
      n.d(e, "d", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n(157),
        i = n(16),
        a = n(19),
        s = n(32);
      function u(t, e, n, a) {
        var s = new Set();
        if ("voted" === (null == a ? void 0 : a.type)) {
          var u = a.votes;
          "reset" !== u && u.forEach((t) => s.add(t));
        }
        s.has(n) ? s.delete(n) : s.add(n), (0, r.b)(i.e.sendPollVotes(e, s));
      }
      function o(t, e, n) {
        t.openScreen("POLL_RESULTS", {
          pollMeta: e,
          pollMsgContent: n,
          pollResults: "loading",
        });
        var r = e.msgId;
        t.sendAndReceive("backend", "getPollResults", { msgId: r }).then(
          (e) => {
            t.dispatch({
              type: "LOADED_POLL_RESULTS",
              pollMsgId: r,
              pollResults: null != e ? e : "error",
            });
          }
        );
      }
      function l(t) {
        var e = t.content;
        if ("poll" === e.type) {
          var n = e.pollVotes;
          if (null != n) {
            var a = n.myVotes;
            if ("not-voted" !== a.type) {
              var u = a.pollUpdateId,
                o = (0, s.s)(u);
              (0, r.b)(i.e.retryMsg(o));
            }
          }
        }
      }
      var c = (t) => ({
        votesNotSent: () => {
          (0, a.e)({ title: 243, text: 242 });
        },
      });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M1.38 4h15.24c.762.001 1.38.6 1.38 1.338v7.325c0 .739-.619 1.337-1.382 1.337H1.38C.618 14 0 13.4 0 12.663V5.338C0 4.6.618 4 1.38 4zm6.19 4.85H5.136v.955h1v.894a1.238 1.238 0 01-.835.241 1.091 1.091 0 01-.959-.433A2.252 2.252 0 014.04 9.21v-.348c-.025-.441.079-.88.298-1.267a.945.945 0 01.834-.443c.25-.016.497.058.696.205.187.186.3.43.318.69h1.382a2.062 2.062 0 00-.717-1.47 2.7 2.7 0 00-1.727-.493 2.58 2.58 0 00-1.34.342c-.39.233-.7.573-.889.977a3.341 3.341 0 00-.31 1.484l.003.5a2.75 2.75 0 00.746 1.928 2.539 2.539 0 001.867.693c.476.005.95-.069 1.4-.218.367-.11.7-.307.969-.574V8.851zm2.571-2.683h-1.43v5.762h1.43V6.167zm4.957 2.399h-2.314V7.24h2.55V6.167H11.35v5.762h1.435V9.634H15.1V8.566h-.002z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M9.002 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 1.75C6.665 10.75 2 11.922 2 14.25v.942c0 .446.362.808.809.808h12.383a.808.808 0 00.808-.808v-.942c.003-2.328-4.662-3.5-6.998-3.5z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M9 2C5.136 2 2 5.136 2 9s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm0 12.6A5.598 5.598 0 013.4 9c0-1.295.441-2.485 1.183-3.43l7.847 7.847A5.532 5.532 0 019 14.6zm4.417-2.17L5.57 4.583A5.532 5.532 0 019 3.4c3.094 0 5.6 2.506 5.6 5.6a5.532 5.532 0 01-1.183 3.43z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M9 2a6.946 6.946 0 00-4.954 2.04A7.004 7.004 0 002 9.01v4.654a2.3 2.3 0 00.673 1.666c.44.441 1.04.683 1.66.67H6.62v-5.26H3.556V9.01c0-3.02 2.438-5.467 5.444-5.467 3.007 0 5.445 2.448 5.445 5.467v1.73H11.38v5.258h2.285a2.283 2.283 0 001.661-.67c.44-.44.683-1.042.673-1.666V9.006a7.004 7.004 0 00-2.047-4.966A6.946 6.946 0 009 2z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = n(47),
        o = n(18),
        l = n(243),
        c = n(14),
        d = "Hv",
        h = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.avatar !== t.avatar ||
                n.contacts !== t.contacts ||
                n.extended !== t.extended ||
                n.groupSize !== t.groupSize ||
                n.includeYou !== t.includeYou ||
                n.participants !== t.participants ||
                n.subtitle !== t.subtitle ||
                n.title !== t.title)
            );
          }
          render() {
            var t = this.props,
              e = t.avatar,
              n = t.contacts,
              i = t.extended,
              a = t.groupSize,
              h = t.includeYou,
              v = t.participants,
              f = t.subtitle,
              p = t.title,
              _ = [];
            h && _.push((0, r.b)(2, l.b, { className: d }, "contactYou")),
              v.forEach((t) => {
                var e = n[t];
                if (null == e) return null;
                null == e.phonebookPhone ||
                  e.noWhatsApp ||
                  _.push((0, r.b)(2, l.a, { className: d, contact: e }, t));
              });
            var m = a - _.length;
            _.length > 0 &&
              m > 0 &&
              _.push(
                (0, r.b)(2, l.d, { className: d, total: m }, "notContacts")
              );
            var g = i || _.length <= c.l ? _.slice(0) : _.slice(0, c.l - 1);
            !i &&
              _.length > c.l &&
              g.push((0, r.b)(2, l.c, { className: d }, "more"));
            var b = [],
              S = [];
            g.forEach((t, e) => {
              S.push(t),
                (4 !== S.length && e !== g.length - 1) ||
                  (b.push((0, r.f)(1, "div", "Ho", S, 0, null, b.length)),
                  (S = []));
            });
            var E = 0 === _.length ? 429 : m > 0 ? [m, 129] : null;
            return (0, r.f)(
              1,
              "div",
              "Hn",
              [
                (0, r.f)(
                  1,
                  "div",
                  "Hp",
                  [
                    (0, r.f)(1, "div", "Hq Fa", e, 0),
                    (0, r.f)(
                      1,
                      "div",
                      "Hr",
                      [(0, r.f)(1, "div", "Hs FV FS FY FU", (0, u.b)(p), 0), f],
                      0
                    ),
                  ],
                  4
                ),
                (0, r.f)(
                  1,
                  "div",
                  (0, s.a)("Ht FX FS FY FU Ho", 0 === b.length && "Hu"),
                  [
                    (0, r.b)(2, o.b, { l10n: [a, 130] }),
                    null != E &&
                      (0, r.c)(
                        [u.a, (0, r.b)(2, o.b, { l10n: E, className: "Hw" })],
                        0
                      ),
                  ],
                  0
                ),
                b,
              ],
              0
            );
          }
        };
      e.a = h;
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return f;
        });
      var r = n(1),
        i = (n(13), n(47)),
        a = n(40),
        s = n(14),
        u = n(18),
        o = n(23),
        l = n.n(o),
        c = "JX",
        d = "JY FY FU";
      function h(t, e, n, o) {
        return (0, a.n)(t, e, {
          onEmpty: null,
          onSingleContact: (t) =>
            o
              ? (0, r.c)([t, (0, u.c)(n)], 0)
              : (0, r.f)(
                  1,
                  "div",
                  (0, l.a)(c, t.length > s.y && d),
                  [(0, i.b)(t), (0, u.c)(n)],
                  0
                ),
          onOneAndOthers(t, e) {
            var a = (0, r.b)(2, u.b, {
              l10n: [e, (0, i.b)(t), 298],
              spacerSize: n,
            });
            return o ? a : (0, r.f)(1, "div", c, a, 0);
          },
          onOthers(t) {
            var e = (0, r.b)(2, u.b, { l10n: [t, 299], spacerSize: n });
            return o ? e : (0, r.f)(1, "div", c, e, 0);
          },
        });
      }
      function v(t, e, n) {
        return h(
          t.total,
          t.contacts.map((t) => t.displayName),
          e,
          n
        );
      }
      function f(t, e, n, o) {
        function h(t) {
          var e = (0, r.b)(2, u.b, { l10n: [t, 299], spacerSize: n });
          return o ? e : (0, r.f)(1, "div", c, e, 0);
        }
        return (0, a.n)(t, e, {
          onEmpty: null,
          onSingleContact: (t) =>
            o
              ? (0, r.c)([t, (0, u.c)(n)], 0)
              : (0, r.f)(
                  1,
                  "div",
                  (0, l.a)(c, t.length > s.y && d),
                  [(0, i.b)(t), (0, u.c)(n)],
                  0
                ),
          onOneAndOthers: (t, e) => h(e + 1),
          onOthers: h,
        });
      }
    },
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "a", function () {
          return h;
        });
      var r = n(26),
        i = n.n(r),
        a = n(87),
        s = n(94),
        u = n(14),
        o = n(11),
        l = (0, n(50).k)(a.d + "/.wa-settings"),
        c = {};
      function d(t, e) {
        return v().then((n) => {
          var r = Object.assign({}, n, { [t]: e }),
            i = new Blob([JSON.stringify(r)], { type: "application/json" });
          return (0, s.o)(i, l);
        });
      }
      function h(t) {
        return v().then((e) => e[t]);
      }
      function v() {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = i()(function* () {
          var t, e, n;
          try {
            t = yield (0, s.j)(l);
          } catch (t) {
            return __LOG__(4)`Couldn't load filesystem based settings`, c;
          }
          if (null == t)
            return __LOG__(2)`Filesystem based settings not present on disk`, c;
          if (t.size > 16384)
            return (
              __LOG__(
                4
              )`Filesystem based settings file has suspiciously big size: ${t.size}`,
              SEND_LOGS("filesystem-based-settings"),
              c
            );
          try {
            e = yield (0, o.i)(t);
          } catch (t) {
            return (
              __LOG__(4)`Failed to convert blob into text`,
              SEND_LOGS("filesystem-based-settings"),
              c
            );
          }
          try {
            n = JSON.parse(e);
          } catch (t) {
            return (
              __LOG__(4)`Couldn't parse filesystem based settings file`,
              SEND_LOGS("filesystem-based-settings"),
              c
            );
          }
          if ("object" != typeof n)
            return (
              __LOG__(
                4
              )`Parsed filedsystem based settings are not an object: ${typeof n}`,
              SEND_LOGS("filedsystem-based-settings"),
              c
            );
          var r = c,
            i = n[u.P];
          return (
            "number" == typeof i
              ? (r = Object.assign({}, r, { [u.P]: i }))
              : (__LOG__(4)`Parsed filedsystem had incorrect type for key ${
                  u.P
                }: ${typeof i}`,
                SEND_LOGS("filedsystem-based-settings")),
            r
          );
        })).apply(this, arguments);
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
            }),
            2,
            { fill: "currentColor", viewBox: "0 0 16 16" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = "AC FS";
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M16 5C8 5 5 8.06 5 16s3 11 11 11 11-3.06 11-11S23.93 5 16 5zm0 20c-6.81 0-9-2.19-9-9s2.18-9 9-9c3.88 0 6.26.71 7.59 2.58L16 17.15l-3.36-3.36a1.36 1.36 0 10-1.92 1.92L16 21l1.92-1.92 6.76-6.76A18.41 18.41 0 0125 16c0 6.81-2.19 9-9 9z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M16 5C8 5 5 8.06 5 16s3 11 11 11 11-3.06 11-11S23.93 5 16 5zm0 20c-6.81 0-9-2.19-9-9s2.18-9 9-9 9 2.19 9 9-2.19 9-9 9z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M173.561 171.615a62.767 62.767 0 00-2.065-2.955 67.7 67.7 0 00-2.608-3.299 70.112 70.112 0 00-3.184-3.527 71.097 71.097 0 00-5.924-5.47 72.458 72.458 0 00-10.204-7.026 75.2 75.2 0 00-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 00-6.229 3.298 72.589 72.589 0 00-9.15 6.395 71.243 71.243 0 00-5.924 5.47 70.064 70.064 0 00-3.184 3.527 67.142 67.142 0 00-2.609 3.299 63.292 63.292 0 00-2.065 2.955 56.33 56.33 0 00-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 00-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 00-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 003.624-.896 37.124 37.124 0 005.12-1.958 36.307 36.307 0 006.15-3.67 35.923 35.923 0 009.489-10.48 36.558 36.558 0 002.422-4.84 37.051 37.051 0 001.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 00-1.215-5.494 36.68 36.68 0 00-3.648-8.298 35.923 35.923 0 00-9.489-10.48 36.347 36.347 0 00-6.15-3.67 37.124 37.124 0 00-5.12-1.958 37.67 37.67 0 00-3.624-.896 39.875 39.875 0 00-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z",
            }),
            2,
            { viewBox: "0 0 212 212" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M84.282 59.286c0 10.671-8.425 19.285-18.94 19.285s-19.003-8.614-19.003-19.285C46.339 48.614 54.827 40 65.342 40s18.94 8.614 18.94 19.286zm48.068 2.857c0 9.802-7.738 17.714-17.396 17.714-9.658 0-17.454-7.912-17.454-17.714s7.796-17.715 17.454-17.715c9.658 0 17.396 7.913 17.396 17.715zM65.34 91.428c-14.759 0-44.34 7.522-44.34 22.5v11.786c0 3.536 2.85 4.286 6.334 4.286h76.012c3.484 0 6.334-.75 6.334-4.286v-11.786c0-14.978-29.58-22.5-44.34-22.5zm43.464 1.425c.903.018 1.681.033 2.196.033 14.759 0 45 6.064 45 21.043v9.642c0 3.536-2.85 6.429-6.334 6.429h-32.812c.697-1.993 1.141-4.179 1.141-6.429l-.245-10.5c0-9.561-5.614-13.213-11.588-17.1-1.39-.904-2.799-1.821-4.162-2.828a.843.843 0 01-.059-.073.594.594 0 00-.194-.184c1.596-.139 4.738-.078 7.057-.033z",
              "clip-rule": "evenodd",
            }),
            2,
            { viewBox: "0 0 176 176" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            [
              (0, r.f)(32, "path", null, null, 1, {
                d: "m9 16-1.9.9-1.3-1.7-2.1-.1-.3-2.1-1.9-1 .7-2.1-1.1-1.7 1.5-1.5-.2-2.1L4.5 4l.8-2 2.1.4L9 1.1l1.7 1.3 2-.4.9 2 2 .6-.1 2.1L17 8.2l-1.1 1.7.6 2.1-1.8 1-.4 2.1-2.1.1-1.3 1.7z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                fill: "#FFF",
                d: "m13.1 7.3-.9-.8-4.1 4.1-2.2-2.1-.9.9 3 3z",
              }),
            ],
            4,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return l;
        });
      var r = n(199),
        i = n(53),
        a = n(32),
        s = n(157),
        u = n(16),
        o = (t) => ({
          notifyMessageKept: (e) => {
            var n = e.msg;
            (function (t, e) {
              var n = (0, i.a)(t.getStoreState());
              null != n && (0, r.b)(e, n.contacts, n.user);
            })(t, n);
          },
        });
      function l(t) {
        var e = t.keptInfo;
        if (null != e && e.ackError) {
          var n = e.kept,
            r = e.repeatedTimes,
            i = (0, a.p)(t.id, r, null != n);
          (0, s.b)(u.e.retryMsg(i));
        }
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n(44),
        i = n(7),
        a = n(300),
        s = n(53),
        u = n(19);
      function o(t, e, n) {
        var o = (0, s.a)(t.getStoreState());
        if (o) {
          var l = o.blocked,
            c = o.connected,
            d = o.contacts;
          (0, i.x)(n, {
            user: (n) => {
              l[n]
                ? (0, u.f)(
                    (0, a.d)({
                      contact: (0, r.c)(n, d),
                      unblock: () => {
                        c
                          ? t.unblockUser(n)
                          : (0, u.e)({ title: 243, text: 1063 });
                      },
                    })
                  )
                : t.retryMsgWithoutBlockedCheck(e);
            },
            group: (n) => {
              t.retryMsgWithoutBlockedCheck(e);
            },
          });
        }
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n(21);
      function i() {
        var t = document.documentElement;
        t.setAttribute("lang", (0, r.c)()),
          t.setAttribute("dir", (0, r.g)() ? "rtl" : "ltr");
      }
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M7.909 14.83a.4.4 0 01-.617.043L3.139 10.69a.49.49 0 01-.007-.676l.54-.567a.456.456 0 01.655-.009l2.793 2.815a.4.4 0 00.617-.043l6.827-9.026a.455.455 0 01.65-.083l.609.488a.49.49 0 01.08.67L7.91 14.83z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(27),
        i = n(44),
        a = n(73),
        s = {
          intro_unverified: { msg: () => 65, alert: (t) => [t, 13] },
          unverified: { msg: (t) => [t, 22], alert: (t) => [t, 18] },
          intro_verified: {
            msg: (t) => [t, 19],
            alert: (t, e) => (e ? [t, 15] : [t, 14]),
          },
          verified: {
            msg: (t) => [t, 21],
            alert: (t, e) => (e ? [t, 17] : [t, 16]),
          },
          consumer: { msg: (t) => [t, 20] },
          rename: { msg: (t) => [t, 26] },
        };
      function u(t, e, n) {
        var u = t.name ? t.name : (0, r.e)((0, i.c)(e, n));
        if (
          ("verified" === t.subtype || "intro_verified" === t.subtype) &&
          (0, a.i)(e)
        )
          return [u, 278];
        var o =
            !!t.name &&
            (function (t, e, n) {
              var r = (0, i.c)(e, n),
                a = (0, i.a)(r);
              return null != r.phonebookPhone && a !== t;
            })(t.name, e, n),
          l = s[t.subtype];
        if (!l)
          return __LOG__(4)`Unrecognized system message ${t.subtype}.`, null;
        var c = l.alert;
        return c ? c(u, o) : null;
      }
      function o(t, e, n) {
        var a = t.name ? t.name : (0, r.e)((0, i.c)(e, n)),
          u = s[t.subtype];
        return u
          ? { l10n: u.msg(a), hasAlert: null != u.alert }
          : (__LOG__(4)`Unrecognized system message ${t.subtype}.`,
            { l10n: 65, hasAlert: !1 });
      }
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var r = n(13),
        i = n(40),
        a = n(3),
        s = class extends r.a {
          constructor() {
            var t;
            return (t = super(...arguments)), (this.QL = null), t;
          }
          componentDidMount() {
            this.QM();
          }
          componentDidUpdate(t) {
            t.chat.mutedUntil !== this.props.chat.mutedUntil && this.QM();
          }
          componentWillUnmount() {
            null !== this.QL && clearTimeout(this.QL);
          }
          QM() {
            null !== this.QL && clearTimeout(this.QL);
            var t = this.props.chat,
              e = t.mutedUntil;
            if (null != e && (0, i.k)(t) && "always" !== e) {
              var n = 1e3 * (0, a.y)(e),
                r = Math.min(n, 1e3 * a.b);
              this.QL = setTimeout(() => {
                (0, i.k)(this.props.chat) ? this.QM() : this.forceUpdate();
              }, r);
            }
          }
          render() {
            return this.props.children;
          }
        };
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M5.333 3.066a3.727 3.727 0 00.092 1.71 1.801 1.801 0 01-1.623 1.007 1.79 1.79 0 01-1.8-1.78c0-.983.806-1.78 1.8-1.78.647 0 1.214.337 1.531.843zm-2.273 6.94-2.646-.002c-.42 0-.414-.001-.414-.573v-.427c-.007-.999 1.522-2.502 3.562-2.497a4.16 4.16 0 011.81.422c-1.275.724-2.178 1.81-2.312 3.076zm9.6-5.049a3.7 3.7 0 00.12-2.042 1.8 1.8 0 11-.12 2.042zm.042 1.937a4.155 4.155 0 011.736-.387c2.04-.005 3.569 1.498 3.562 2.497v.427c0 .572.007.573-.414.573l-2.52.001c-.136-1.287-1.061-2.388-2.364-3.111zM4 10.389C4 8.529 6.576 7 9.079 7 11.582 7 14 8.53 14 10.389v.327c0 .347 0 .784-.99.784H5.012C4.011 11.5 4 11.062 4 10.716v-.327zm7.859-6.662c0 1.507-1.245 2.728-2.781 2.728-1.537 0-2.781-1.22-2.781-2.728C6.297 2.22 7.54 1 9.077 1c1.537 0 2.782 1.22 2.782 2.727z",
            }),
            2,
            { viewBox: "0 -4 18 18" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              fill: "currentColor",
              d: "M6 5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5zm-5 5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1v-4zm11-3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-2z",
            }),
            2,
            { viewBox: "0 0 16 20" }
          );
        });
    },
    function (t, e, n) {
      var r = n(1);
      n(13),
        (e.a = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            [
              (0, r.f)(32, "path", null, null, 1, {
                d: "M12 21c.055 0 .11 0 .165-.002a1 1 0 00-.036-2C12.086 19 12.043 19 12 19v2zm0-16 .129.001a1 1 0 10.036-2A9.099 9.099 0 0012 3v2zm4.358-.876a1 1 0 10-.97 1.75c.075.04.149.083.222.127a1 1 0 101.033-1.712 8.895 8.895 0 00-.285-.165zm3.353 3.233A1 1 0 1018 8.39c.044.073.087.147.128.221a1 1 0 001.749-.97 8.9 8.9 0 00-.165-.284zM21 11.835a1 1 0 00-2 .036 6.887 6.887 0 010 .258 1 1 0 002 .036 9.008 9.008 0 000-.33zm-1.123 4.523a1 1 0 10-1.75-.97 6.829 6.829 0 01-.127.222 1 1 0 101.712 1.033 8.1 8.1 0 00.165-.285zm-3.233 3.353A1 1 0 1015.61 18a6.829 6.829 0 01-.221.128 1 1 0 10.97 1.749 9.08 9.08 0 00.284-.165zM12 3a9 9 0 000 18v-2a7 7 0 110-14V3z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                d: "M11.8 10h-1a1 1 0 110-2h2a1 1 0 011 1v6a1 1 0 11-2 0v-5z",
              }),
            ],
            4,
            { viewBox: "0 0 24 24" }
          );
        });
    },
    function (t, e, n) {
      n.d(e, "b", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n(1),
        i = n(13),
        a = n(153),
        s = n(61),
        u = n(436),
        o = n(19),
        l = (0, s.e)(
          function (t) {
            var e = t.content;
            return (0, r.b)(2, a.b.div, {
              hasFocusPriority: !0,
              className: u.a,
              children: e,
            });
          },
          { overlay: !0 }
        ),
        c = class extends i.a {
          shouldComponentUpdate(t, e) {
            var n = this.props,
              r = this.state;
            return (
              (n !== t && n.targetOverlayId !== t.targetOverlayId) ||
              (r !== e &&
                (r.overlay !== e.overlay || r.overlayId !== e.overlayId))
            );
          }
          constructor(t) {
            super(t),
              (this.Ba = !1),
              (this.Bb = (t, e) => {
                if (t !== this.state.overlay && this.Ba) {
                  var n = null;
                  return (
                    null != t && (n = null != e ? e : (0, o.d)()),
                    this.setState({ overlay: t, overlayId: n }),
                    this.props.backend.dispatch({
                      type: "OPEN_OVERLAY",
                      overlayId: n,
                    }),
                    n
                  );
                }
              }),
              (this.state = { overlay: null, overlayId: null });
          }
          componentDidMount() {
            (this.Ba = !0), (0, o.c)(this.Bb);
          }
          componentWillUnmount() {
            (this.Ba = !1), (0, o.l)();
          }
          render() {
            return null != this.state.overlay &&
              this.state.overlayId === this.props.targetOverlayId
              ? (0, r.b)(2, l, { content: this.state.overlay })
              : null;
          }
        };
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = "V FZ";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.d(e, "a", function () {
        return d;
      });
      var r = n(1),
        i = (n(13), n(18)),
        a = n(61),
        s = n(19),
        u = n(125),
        o = n(123),
        l = (t) => {
          var e = t.className;
          return (0, r.f)(
            32,
            "svg",
            e,
            (0, r.f)(32, "path", null, null, 1, {
              d: "M16 2.8C8.7 2.8 2.8 8.7 2.8 16S8.7 29.2 16 29.2 29.2 23.3 29.2 16 23.3 2.8 16 2.8zm1.4 21.6h-2.7v-2.7h2.7v2.7zm3.2-10c-.3.6-1.1 1.5-2.2 2.6-.6.6-.9 1-1.1 1.4-.1.3-.2 1-.2 1.8h-2.5v-.8c0-.9.1-1.7.4-2.3.3-.6.8-1.3 1.6-2 .8-.8 1.3-1.3 1.4-1.5.2-.4.4-.8.4-1.2 0-.6-.2-1.2-.6-1.6-.4-.4-1-.7-1.7-.7s-1.3.2-1.7.7c-.5.5-.8 1.2-1 2.1l-2.5-.4c.1-1.4.6-2.5 1.5-3.5.9-.9 2.1-1.4 3.6-1.4 1.6 0 2.8.5 3.8 1.4.9 1 1.4 2.1 1.4 3.3-.1.8-.2 1.4-.6 2.1z",
            }),
            2,
            { viewBox: "0 0 32 32" }
          );
        },
        c = n(388),
        d = class extends a.b {
          addSoftKeys(t, e) {
            t.setCenterLabel(885, h);
          }
          render() {
            var t = this.props.selected;
            return (0, r.c)(
              [
                (0, r.b)(2, u.g, { className: "EX" }),
                (0, r.b)(2, u.j, {
                  icon: (0, r.b)(2, l),
                  title: 120,
                  selected: t,
                }),
              ],
              4
            );
          }
        };
      function h(t) {
        (0, s.h)(
          {
            center: 902,
            onSoftCenter: "CLOSE",
            leftIcon: (0, r.b)(2, c.a, { className: "EW" }),
            onSoftLeft: () => {
              (0, o.b)(t);
            },
          },
          (0, r.f)(
            1,
            "div",
            "EV FS",
            [
              (0, r.f)(1, "div", null, (0, r.b)(2, i.b, { l10n: 121 }), 2),
              (0, r.f)(
                1,
                "ul",
                null,
                [
                  (0, r.f)(1, "li", null, (0, r.b)(2, i.b, { l10n: 122 }), 2),
                  (0, r.f)(1, "li", null, (0, r.b)(2, i.b, { l10n: 123 }), 2),
                ],
                4
              ),
            ],
            4
          )
        );
      }
    },
    function (t, e, n) {
      var r = n(1),
        i = n(13),
        a = n(23),
        s = n.n(a),
        u = class extends i.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Np = i.e()),
              (this.Nq = i.e()),
              (this.state = { marqueeEnabled: !1, animationFinished: !1 }),
              (this.Ns = () => {
                this.setState({ animationFinished: !0 });
              }),
              t
            );
          }
          componentDidMount() {
            this.Nr();
          }
          componentDidUpdate() {
            this.Nr();
            var t = this.Np.current;
            t && t.addEventListener("transitionend", this.Ns);
          }
          componentWillUnmount() {
            var t = this.Np.current;
            t && t.removeEventListener("transitionend", this.Ns);
          }
          Nr() {
            var t = this.Np.current,
              e = this.Nq.current;
            if (t && e) {
              var n =
                t.getBoundingClientRect().width >
                e.getBoundingClientRect().width;
              this.state.animationFinished ||
                n === this.state.marqueeEnabled ||
                this.setState({ marqueeEnabled: n });
            }
          }
          render() {
            return (0, r.f)(
              1,
              "div",
              (0, s.a)("Pb", this.state.animationFinished && "Pc"),
              (0, r.f)(
                1,
                "div",
                (0, s.a)(
                  "Pd",
                  this.state.marqueeEnabled &&
                    !this.state.animationFinished &&
                    "Pe"
                ),
                this.props.children,
                0,
                null,
                null,
                this.Np
              ),
              2,
              null,
              null,
              this.Nq
            );
          }
        };
      e.a = u;
    },
    function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1),
        i = (n(13), n(3)),
        a = n(77),
        s = n(23),
        u = n.n(s);
      function o(t) {
        var e,
          n = t.ts,
          s = t.className,
          o = (0, i.r)();
        return (
          (e =
            n > o
              ? (0, a.i)(n, "time")
              : n > o - i.f
              ? (0, a.i)(n, "weekdayShort")
              : (0, a.i)(n, "dateShort")),
          (0, r.f)(1, "div", (0, u.a)(s, "HR FX FS FU"), e, 0)
        );
      }
    },
    function (t, e, n) {
      function r(t) {
        var e,
          n = t.Symbol;
        return (
          "function" == typeof n
            ? n.observable
              ? (e = n.observable)
              : ((e = n("observable")), (n.observable = e))
            : (e = "@@observable"),
          e
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      t.exports = n(461);
    },
    function (t, e, n) {
      n.r(e);
      var r,
        i = n(8),
        a = n.n(i),
        s = {};
      (s.jsStart = performance.now()),
        (self.onerror = function (t, e, i, a, s) {
          if (r) {
            r.crashlog("onerror", t),
              __LOG__(4)`onerror url: ${e} line: ${i} col: ${a}`;
            var u = n(111).getBridge();
            u && u.fireAndForget("basic", "sendLogs", { manual: !1 });
          } else console.error(t), console.log(s);
        }),
        (self.Promise = n(415).default),
        (self.onbeforeunload = function () {
          n(132).onAppClose();
        }),
        (self.onunhandledrejection = function (t) {
          t.preventDefault();
          var e = t.reason,
            i = t.promise;
          if (
            (self.ERROR &&
              e &&
              "QuotaExceededError" === e.name &&
              (__LOG__(4)`Unhandled dexie promise rejection: ${t}`,
              n(127).crashlog("dexie rejected", String(e))),
            e && e instanceof Error && "ChunkLoadError" === e.name)
          ) {
            var a = /Loading chunk (\S+) failed/.exec(e.message);
            if (a) {
              var s = a[1],
                u = e.message
                  .replace("Loading chunk " + s, "Loading chunk")
                  .replace("\n", `\nchunkId = ${s} `);
              e.message = u;
            }
          }
          if (r) {
            r.crashlog("rejected", String(e));
            var o = null == e ? void 0 : e.stack;
            o &&
              __LOG__(
                4
              )`### begin stack trace ${"2.2245.7"}\n${o}\n### end stack trace`,
              __LOG__(4)`promise: ${i}`;
          } else console.error("onunhandledrejection", e, i.toString());
          (function (t) {
            var e = n(111).getBridge();
            e &&
              (e.fireAndForget("basic", "sendLogs", { manual: !1 }),
              t &&
                "QuotaExceededError" === t.name &&
                e.fireAndForget("event", "ranOutOfStorage", {}));
          })(e);
        });
      var u = (r = n(127)).initializeLogger("PAGE", (t) => {
        var e = n(111).getBridge();
        e && e.fireAndForget("basic", "sendLogs", { manual: !1 });
      });
      __LOG__(2)`ENTRY::onload invoked`, (self.WAM = n(190));
      var o = n(154);
      o.startWamStore(),
        o.submitInitialAttributes(),
        n(417).startAbPropsStore(),
        (s.initialImports = performance.now());
      var l,
        c = !1;
      function d() {
        c ||
          ((c = !0),
          (navigator.mozApps.getSelf().onsuccess = function (t) {
            var e = t.target.result;
            e && e.checkForUpdate();
          }));
      }
      var h = n(253);
      (self.bootstrapQueue = Promise.resolve(self.bootstrapQueue)
        .then(
          (t) => (
            (l = t),
            (s.intl = performance.now()),
            __LOG__(2)`ENTRY::prepare initialize info store and intl`,
            n(210)
              .loadInfoStore()
              .then((t) => h.initLanguage(t.lang).then(() => t))
          )
        )
        .then((t) => {
          var e = t.appMode,
            r = t.appBuild;
          function i(t) {
            return [{ mode: "error", reason: t }, r];
          }
          var a = Date.now();
          return (
            a > 1678147199e3 && d(),
            a >= 1678751999e3
              ? i("expiredApp")
              : a < 1668591849842
              ? i("clockSkew")
              : parseInt(navigator.buildID, 10) < 20180524091144
              ? i("unsupportedOS")
              : n(469).isExpired()
              ? (d(), i("expiredApp"))
              : [e, r]
          );
        })
        .then((t) => {
          var e = a()(t, 2),
            r = e[0],
            i = e[1];
          return (
            (s.infoStore = performance.now()),
            __LOG__(2)`ENTRY::prepare initialize migrations`,
            "error" === r.mode || "2.2245.7" === i
              ? r
              : (__LOG__(
                  2
                )`initializeMigrations app version is different, checking migrations`,
                Promise.all([n.e(4), n.e(8), n.e(166)])
                  .then(n.bind(null, 458))
                  .then((t) => t.initializeMigrations("PAGE", r))
                  .then((t) => {
                    var e = "migration-needed" === t.type ? t.migration : null;
                    return e
                      ? n
                          .e(35)
                          .then(n.bind(null, 509))
                          .then((t) => t.claimHtml(e))
                      : r;
                  }))
          );
        })
        .then(
          (t) => (
            (s.migrations = performance.now()),
            __LOG__(2)`ENTRY::prepare load app info`,
            n(479).startFrontend(t, s, l, u)
          )
        )
        .catch((t) => {
          __LOG__(
            4
          )`ENTRY::onload failed to initialize ${t}. Error stack: ${t.stack}`;
        })),
        (s.onloadFinished = performance.now());
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "isExpired", function () {
          return a;
        });
      var r = n(6),
        i = n(3);
      function a() {
        var t = r.H.get();
        return null != t && "2.2245.7" === t.version && !(0, i.o)(t.time);
      }
    },
    function (t, e) {
      t.exports = function (t) {
        if (!t.webpackPolyfill) {
          var e = Object.create(t);
          e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            Object.defineProperty(e, "exports", { enumerable: !0 }),
            (e.webpackPolyfill = 1);
        }
        return e;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      n.r(e),
        n.d(e, "startFrontend", function () {
          return Lr;
        });
      var r = n(274),
        i = n(127),
        a = n(190),
        s = n(166),
        u = n(145),
        o = n(8),
        l = n.n(o),
        c = n(19),
        d = n(140),
        h = n(110),
        v = n(14),
        f = n(15),
        p = n(32),
        _ = n(53),
        m = n(3),
        g = n(92),
        b = n(11);
      function S(t, e) {
        var n = (0, g.j)(e);
        return n && t ? (0, m.v)(t, n) : n || t;
      }
      var E = n(315),
        O = n(16),
        A = n(283),
        y = n(103);
      function C(t, e) {
        if (!t) return e;
        var n = "BATCH_ACTION" === t.type ? (0, b.n)(t.actions) : t;
        return "MEDIA_UPDATED" === e.type && "MEDIA_UPDATED" === n.type
          ? (n.msgs.push.apply(n.msgs, e.msgs),
            n.affectedChats.push.apply(n.affectedChats, e.affectedChats),
            t)
          : "AVATARS_STARTED_LOADING" === e.type &&
            "AVATARS_STARTED_LOADING" === n.type
          ? (n.jids.push.apply(n.jids, e.jids), t)
          : "BATCH_ACTION" === t.type
          ? (__LOG__(2)`Batching ${e.type}`, t.actions.push(e), t)
          : (__LOG__(2)`Joining ${t.type} and ${e.type}`,
            { type: "BATCH_ACTION", actions: [t, e] });
      }
      var L = n(353),
        T = n(205),
        w = n(124),
        I = n(129),
        k = n(332),
        D = n(220),
        N = n(188),
        G = n(141),
        M = n(94),
        R = n(50),
        P = n(357),
        U = n(160),
        j = n(143);
      function x(t) {
        for (var e = new Map(), n = 0; n < t.length; n++) {
          var r = t[n];
          if (null != r.callResult) {
            var i = r.peer,
              a = r.isFromMe,
              s = r.ts,
              u = (0, j.d)(a, r.callResult),
              o = (0, j.c)(s, i, u),
              l = e.get(o);
            null == l
              ? e.set(o, { peer: i, type: u, ts: s, logs: [r] })
              : l.logs.push(r);
          }
        }
        return { groups: e, orderedGroupIds: Array.from(e.keys()) };
      }
      var F,
        V,
        B = n(213),
        $ = n(31),
        H = n(87);
      function z() {
        if ((0, G.i)()) return j.a.WIFI;
        var t = navigator.mozMobileConnections;
        if (null == t) return j.a.NONE;
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if (null == n ? void 0 : n.data.connected) return j.a.CELLULAR;
        }
        return j.a.NONE;
      }
      function W() {
        var t = z();
        F !== t && V((F = t));
      }
      var J,
        K,
        q = !1,
        Y = n(224),
        X = n(6),
        Q = n(178),
        Z = n(334),
        tt = n(47),
        et = n(218),
        nt = (n(354), n(40)),
        rt = !0,
        it = !1,
        at = !1;
      function st() {
        rt || ((rt = !0), (0, d.a)(1020));
      }
      function ut() {
        (0, d.a)(1022), (rt = !1);
      }
      function ot() {
        it || navigator.onLine || (clearTimeout(J), (J = setTimeout(ut, 5e3)));
      }
      function lt() {
        return null == K && (K = !(0, nt.j)()), K;
      }
      var ct = n(17),
        dt = n(123),
        ht = n(392),
        vt = n(403),
        ft = n(426),
        pt = n(221),
        _t = n(198),
        mt = n(157),
        gt = n(108);
      function bt(t) {
        var e = (0, _.a)(t.getStoreState());
        return !!(null == e ? void 0 : e.isVoipAvailable);
      }
      var St = n(111),
        Et = n(214),
        Ot = n(270),
        At = n(27),
        yt = n(106),
        Ct = n(52),
        Lt = {
          NEW_CHAT: 38,
          NEW_GROUP_INITIAL: 1,
          SETTINGS: 3,
          SETTINGS_ACCOUNT: 5,
          SETTINGS_PROFILE: 4,
          HELP_CONTACT_US: 11,
          GROUP_INFO: 7,
          DELETE_ACCOUNT: 12,
          MSG_INFO: 37,
        },
        Tt = class t {
          constructor(e) {
            (this.Db = null),
              (this.De = null),
              (this.statusSession = null),
              (this.statusViewerSession = null),
              (this.Dg = !1),
              (this.Dh = (0, m.D)()),
              (this.Dl = new (class {
                constructor(t) {
                  (this.ZJ = null), (this.ZL = null), (this.ZK = t);
                }
                flushSynchronously() {
                  this.ZL = null;
                  var t = this.ZJ;
                  return null != t && ((this.ZJ = null), (0, this.ZK)(t), !0);
                }
                dispatchLazily(t) {
                  this.ZJ = C(this.ZJ, t);
                }
                dispatchAsync(t) {
                  if (((this.ZJ = C(this.ZJ, t)), null == this.ZL)) {
                    var e = Promise.resolve().then(() => {
                      this.ZL === e && this.flushSynchronously();
                    });
                    this.ZL = e;
                  }
                }
              })((t) => {
                __LOG__(2)`BackendInterface dispatch ${t.type}`,
                  this.Dc.dispatch(t);
              })),
              (this.goBack = () => {
                this.dispatch({ type: "BACK", willCloseNaturally: !1 });
              }),
              (this.fireAndForget = (t, e, n) => {
                this.Df.fireAndForget(t, e, n);
              }),
              (this.sendAndReceive = (t, e, n) =>
                this.Df.sendAndReceive(t, e, n)),
              (this.closeAllScreens = () => {
                this.dispatch({ type: "CLOSE_ALL_SCREENS" });
              }),
              (this.Dp = (t) =>
                this.maybeCheckMsgMediaContent(t.id, t.content).then(() => t)),
              (this.deleteGdprReport = () => {
                this.Dj(O.e.deleteGdprReport());
              }),
              (this.deleteTwoFactor = () => {
                this.Dj(O.e.deleteTwoFactor()),
                  this.dispatch({ type: "TWO_FACTOR_DEACTIVATION" });
              }),
              (this.Df = e),
              (this.Di = (0, mt.a)(this));
            for (
              var n = Object.getOwnPropertyNames(t.prototype), r = 0;
              r < n.length;
              ++r
            ) {
              var i = n[r];
              if ("constructor" !== i) {
                var a = t.prototype[i];
                "function" == typeof a && (this[i] = a.bind(this));
              }
            }
          }
          Dj(t) {
            this.Di.runJob(t);
          }
          Dk(t) {
            return this.Di.runJobWithResult(t);
          }
          getCache() {
            return this.Dd;
          }
          getStatusCache() {
            return this.De;
          }
          instantiateStatusCache() {
            this.De = new (class {
              constructor() {
                (this.ZM = !1),
                  (this.ZN = new Map()),
                  (this.ZO = null),
                  (this.ZP = new Map()),
                  (this.ZQ = { recent: [], viewed: [], muted: [] }),
                  (this.ZR = null),
                  (this.ZS = {});
              }
              isLoaded() {
                return this.ZM;
              }
              load(t, e) {
                if (this.ZM)
                  return (
                    __LOG__(4)`Tried to load StatusCache multiple times`,
                    void SEND_LOGS("statusCache-load-multiple")
                  );
                this.ZM = !0;
                var n = void 0,
                  r = new Map(),
                  i = { recent: [], viewed: [], muted: [] };
                function a(t) {
                  switch (((n = S(n, t.msgs[0])), r.set(t.jid, t), t.section)) {
                    case "recent":
                      i.recent.push(t.jid);
                      break;
                    case "viewed":
                      i.viewed.push(t.jid);
                      break;
                    default:
                      t.section, i.muted.push(t.jid);
                  }
                }
                for (var s = 0, u = t.length; s < u; ++s) {
                  var o = t[s],
                    l = this.ZP.get(o.jid);
                  "CLEARED" !== l && a(null != l ? l : o);
                }
                this.ZP.forEach((t) => {
                  "CLEARED" !== t && (r.has(t.jid) || a(t));
                }),
                  (this.ZO = e),
                  (this.ZN = r),
                  (this.ZQ = i),
                  (this.ZR = n),
                  (this.ZP = new Map()),
                  this.ZT();
              }
              ZU(t) {
                this.ZQ[t].sort((t, e) => {
                  var n = this.ZN.get(t);
                  if (null == n) return 1;
                  var r = this.ZN.get(e);
                  return null == r ? 1 : r.sortBy - n.sortBy;
                });
              }
              ZT() {
                this.ZU("recent"), this.ZU("viewed"), this.ZU("muted");
              }
              ZV(t) {
                var e = t.section;
                (this.ZQ[e] = this.ZQ[e].filter((e) => e !== t.jid)),
                  this.ZU(e);
              }
              ZW() {
                var t = void 0,
                  e = this.ZN;
                function n(n) {
                  var r = e.get(n);
                  null != r && (t = S(t, r.msgs[0]));
                }
                return (
                  this.ZQ.recent.forEach(n),
                  this.ZQ.viewed.forEach(n),
                  this.ZQ.muted.forEach(n),
                  t
                );
              }
              purgeExpired() {
                if (this.isLoaded()) {
                  var t = (0, m.D)(),
                    e = this.ZN,
                    n = null,
                    r = !1;
                  return (
                    (this.ZQ = {
                      recent: this.ZQ.recent.filter(i),
                      viewed: this.ZQ.viewed.filter(i),
                      muted: this.ZQ.muted.filter(i),
                    }),
                    (this.ZR = n),
                    r ? this.toStore() : void 0
                  );
                }
                function i(i) {
                  var a = e.get(i);
                  if (null == a) return (r = !0), !1;
                  var s = a.msgs.filter((e) => (0, g.i)(t, e));
                  return 0 === s.length
                    ? (e.delete(i), (r = !0), !1)
                    : (s.length !== a.msgs.length &&
                        e.set(i, (0, b.j)(a, { msgs: s, unread: (0, g.g)(s) })),
                      (n = S(n, s[0])),
                      (r = !0),
                      !0);
                }
              }
              updateAuthor(t) {
                if (this.isLoaded()) {
                  var e = this.ZN.get(t.jid);
                  this.ZN.set(t.jid, t),
                    (null == e ? void 0 : e.section) !== t.section &&
                      (e && this.ZV(e),
                      this.ZQ[t.section].push(t.jid),
                      this.ZU(t.section)),
                    (this.ZR = this.ZW());
                } else this.ZP.set(t.jid, t);
              }
              updateMeAuthor(t) {
                this.ZO = t;
              }
              clearAuthors(t) {
                this.isLoaded()
                  ? (t.forEach((t) => {
                      var e = this.ZN.get(t);
                      e && (this.ZN.delete(t), this.ZV(e));
                    }),
                    (this.ZR = this.ZW()))
                  : t.forEach((t) => {
                      this.ZP.set(t, "CLEARED");
                    });
              }
              toStore() {
                var t = this.ZQ,
                  e = t.recent,
                  n = t.viewed,
                  r = t.muted;
                return {
                  authors: new Map(this.ZN),
                  sections: {
                    recent: e.slice(0),
                    viewed: n.slice(0),
                    muted: r.slice(0),
                  },
                  me: this.ZO,
                  oldestStatusTimestamp: this.ZR,
                };
              }
              statusLoading(t) {
                t.forEach((t) => {
                  if (null != this.ZS[t])
                    return (
                      __LOG__(4)`Started loading a status that was already ${
                        "LOADING" === this.ZS[t] ? "loading" : "loaded"
                      }`,
                      void SEND_LOGS("status-loading-twice")
                    );
                  this.ZS[t] = "LOADING";
                });
              }
              statusLoaded(t) {
                t.forEach((t) => {
                  "LOADING" !== this.ZS[t.id] &&
                    (__LOG__(3)`Loaded status that was not loading`,
                    SEND_LOGS("status-loaded-not-loading")),
                    (this.ZS[t.id] = t);
                });
              }
              statusUpdated(t) {
                t.forEach((t) => {
                  null != this.ZS[t.id] && "LOADING" !== this.ZS[t.id]
                    ? (this.ZS[t.id] = t)
                    : __LOG__(2)`Tried to update status that was not loaded`;
                });
              }
              mediaStatusUpdated(t, e) {
                var n = this.ZS[t];
                if (n && "LOADING" !== n) {
                  var r = n.content;
                  if ("text" === r.type || "voice" === r.type)
                    return void __LOG__(
                      3
                    )`Tried to update media status for text or voice status post`;
                  this.ZS[t] = Object.assign({}, n, {
                    content: (0, b.j)(r, { mediaStatus: e }),
                  });
                }
              }
              getStatuses() {
                return this.ZS;
              }
            })();
          }
          populate(t, e) {
            (this.Dc = t),
              e
                ? ((this.Dd = e),
                  (function (t, e, n) {
                    var r = null,
                      i = () => {
                        var i = e.getState(),
                          a =
                            "main" === i.mode && i.msglist
                              ? i.msglist.chat.id
                              : null;
                        if (r !== a) {
                          (r = a), (0, et.c)(a);
                          var s = n.clearExpiredViewOnceMsgs();
                          t.unlinkViewOnceMsgsMedia(s);
                        }
                      };
                    e.subscribe(i), i();
                  })(this, t, e))
                : __LOG__(2)`Cache not provided. Store in mode ${
                    t.getState().mode
                  }`;
          }
          getStore() {
            return this.Dc;
          }
          getStoreState() {
            for (; this.Dl.flushSynchronously(); );
            return this.Dc.getState();
          }
          dispatchLazily(t) {
            this.Dl.dispatchLazily(t);
          }
          dispatch(t) {
            this.Dl.dispatchAsync(t);
          }
          Dm(t) {
            var e = !bt(this);
            return (
              e &&
                __LOG__(
                  3
                )`BackendInterface: ${t} called while voip is unavailable`,
              e
            );
          }
          goBackFromEvent(t) {
            this.dispatch({ type: "BACK", willCloseNaturally: !0 }),
              this.getStoreState().shouldExit || t.preventDefault();
          }
          handleAppVisible() {
            (0, Ot.a)(this),
              this.dispatch({ type: "APP_FOREGROUND" }),
              this.fireAndForget("backend", "setAppVisible", { visible: !0 });
          }
          handleAppHidden() {
            (0, Ot.c)(this),
              this.fireAndForget("backend", "setAppVisible", { visible: !1 });
          }
          spinUntilReadyOverlay(t, e) {
            var n = (0, c.i)(
              Object.assign({ left: 864, onSoftLeft: "CLOSE" }, e)
            );
            t.catch(
              (t) => (__LOG__(4)`spinUntilReady() error: ${t}`, null)
            ).then((t) => {
              var e = this.getStoreState();
              __LOG__(2)`spinUntilReady() success ${n}`;
              var r,
                i = e.overlayId;
              null != i &&
                i === n &&
                (t && (r = t()), "dontClose" !== r && (0, c.a)());
            });
          }
          spinUntilJob(t, e, n, r, i, a) {
            var s = this.Dk(t);
            this.spinUntilReady(s.then(e), n, r, i, a);
          }
          spinUntilJobOverlay(t, e, n) {
            var r = this.Dk(t);
            this.spinUntilReadyOverlay(r.then(e), n);
          }
          spinUntilReady(t, e, n, r, i) {
            var a = this.openScreen("SPINNER_SCREEN", {
              title: e,
              subtitle: n,
              onExit: r,
              extra: i,
            });
            t.catch(
              (t) => (__LOG__(4)`spinUntilReady() error: ${t}`, null)
            ).then((t) => {
              var e = (0, _.a)(this.getStoreState());
              if (e) {
                __LOG__(2)`spinUntilReady() success`;
                var n = e.screens[e.screens.length - 1];
                n && n.id === a && (this.Dn(a), t && t());
              }
            });
          }
          spinUntilReadyWithTimeout(t, e, n, r, i, a) {
            var s = Promise.race([t, (0, h.a)(r).then(() => null)]);
            this.spinUntilReady(s, e, n, i, a);
          }
          starMessagesFromChat(t, e) {
            return this.Dj(O.e.starMessagesFromChat(t, e));
          }
          unstarMessagesFromChat(t, e) {
            return this.Dj(O.e.unstarMessagesFromChat(t, e));
          }
          keepMessagesFromChat(t, e) {
            WAM.log("regular", 3482, void 0, [
              5,
              0,
              1,
              12,
              0,
              t.length,
              6,
              0,
              1,
            ]),
              kt(this, 525) ||
                this.Dk(O.e.keepMessagesFromChat(t, e)).then((t) => {
                  var e = t.error;
                  if (null != e)
                    switch (e.reason) {
                      case "unkept-by-author":
                        (0, c.g)({
                          title: 527,
                          text: 526,
                          right: 891,
                          onSoftRight: () => (0, yt.E)(this, yt.f),
                          center: 902,
                          onSoftCenter: "CLOSE",
                        });
                        break;
                      case "author-left":
                        (0, c.e)({ text: 512 });
                        break;
                      case "message-expired":
                        (0, c.e)({ text: 520 });
                        break;
                      case "contact-blocked":
                        var n = (0, _.a)(this.getStoreState());
                        if (!n) return null;
                        var r = e.extra;
                        (0, c.g)({
                          text: [(0, At.f)(n.contacts, r), 176],
                          right: 944,
                          onSoftRight: () => this.unblockUser(r),
                          center: 864,
                          onSoftCenter: "CLOSE",
                        });
                        break;
                      default:
                        e.reason, (0, c.e)({ title: 243, text: 242 });
                    }
                });
          }
          unkeepMessagesFromChat(t, e) {
            WAM.log("regular", 3482, void 0, [
              5,
              0,
              2,
              12,
              0,
              t.length,
              6,
              0,
              1,
            ]),
              kt(this, 525) ||
                this.Dk(O.e.unkeepMessagesFromChat(t, e)).then((t) => {
                  var e = t.error;
                  if (null != e)
                    switch (e.reason) {
                      case "contact-blocked":
                        var n = (0, _.a)(this.getStoreState());
                        if (!n) return null;
                        var r = e.extra;
                        (0, c.g)({
                          text: [(0, At.f)(n.contacts, r), 177],
                          right: 944,
                          onSoftRight: () => this.unblockUser(r),
                          center: 864,
                          onSoftCenter: "CLOSE",
                        });
                        break;
                      case "author-left":
                        (0, c.e)({ text: 513 });
                        break;
                      default:
                        e.reason, (0, c.e)({ title: 243, text: 242 });
                    }
                });
          }
          resetGroupInviteCode(t) {
            return this.Dk(O.e.revokeGroupInviteCode(t));
          }
          addFavoriteGif(t, e) {
            return this.Dk(O.e.addFavoriteGif(t, e));
          }
          removeFavoriteGif(t) {
            return this.Dk(O.e.removeFavoriteGif(t));
          }
          removeFavoriteGifFromId(t, e) {
            return this.Dk(O.e.removeFavoriteGifFromId(t, e));
          }
          acceptGroupAddRequest(t, e, n, r) {
            var i = this.Dk(O.e.acceptGroupAddRequest(t, e, n, r));
            this.spinUntilReady(
              i.then((t) =>
                "success" !== t
                  ? () => (0, U.a)(this, t)
                  : new Promise(() => {})
              ),
              448,
              182,
              void 0,
              { key: "acceptGroupAddRequest", groupJid: t }
            );
          }
          joinSubGroupRequest(t, e, n) {
            var r = this.Dk(O.e.joinSubGroupRequest(t, e, n));
            this.spinUntilReady(
              r.then((t) =>
                "success" !== t
                  ? () => (0, U.g)(this, t)
                  : new Promise(() => {})
              ),
              448,
              182
            );
          }
          Do(t) {
            this.Dd.updateOrAddChat(t),
              this.dispatch({ type: "CHAT_MODIFIED", chat: t });
          }
          openScreen(t, e) {
            var n = Lt[t];
            void 0 !== n &&
              100 * Math.random() < 1 &&
              WAM.log("regular", 474, void 0, [1, 0, n], void 0, 100);
            var r = (0, f.y)();
            return (
              __LOG__(2)`Open screen ${t}`,
              this.dispatch({
                type: "OPEN_SCREEN",
                id: r,
                screen: { type: t, props: e },
              }),
              r
            );
          }
          updateScreen(t, e) {
            this.dispatch({ type: "UPDATE_SCREEN", id: t, screen: e });
          }
          Dn(t) {
            this.dispatch({
              type: "CLOSE_SCREEN",
              id: t,
              closeScreensAbove: !1,
            });
          }
          fetchMissingKeysForContact(t) {
            this.Dj(O.e.fetchMissingKeysForContact(t));
          }
          openMsgInfo(t) {
            this.openScreen("MSG_INFO", { msg: t, msgInfo: null }),
              this.reloadMsgInfos(t.id);
          }
          reloadMsgInfos(t) {
            this.Df.sendAndReceive("backend", "getMsgInfos", { msgId: t }).then(
              (e) => {
                this.dispatch({
                  type: "LOADED_MSG_INFO",
                  msgId: t,
                  msgInfo: e,
                });
              }
            );
          }
          downloadMedia(t, e) {
            this.Dj(O.e.downloadMedia(t, e));
          }
          downloadMediaThumb(t, e) {
            this.Dj(O.e.downloadMediaThumb(t, e));
          }
          sendVCardMsg(t, e, n) {
            var r = { type: "vcard", contacts: e },
              i = wt(n),
              a = i.quoted,
              s = i.remoteJid;
            return (0, Et.a)(this, t), this.Dk(O.e.sendVCardMsg(t, r, a, s));
          }
          sendGroupInvitations(t, e) {
            var n = this.Dd.groupChatFromJid(t);
            if (null == n)
              return (
                __LOG__(
                  4
                )`Tried to send invites for a group that's no longer in chats`,
                void SEND_LOGS("group-invite-disappeared")
              );
            e.forEach((e) => {
              this.Dj(
                O.e.sendMsg(e.jid, {
                  type: "group_invite",
                  groupJid: t,
                  groupName: n.groupInfo.title,
                  inviteExpiration: e.expiration,
                  inviteCode: e.code,
                  preview: null,
                  caption: null,
                })
              );
            });
          }
          revokeGroupInvitation(t, e) {
            var n = this.Dk(O.e.revokeGroupInvitations(t, [e])).then((t) => {
              var e = (0, _.a)(this.getStoreState());
              return e
                ? (0, U.k)(this, t, e.contacts)
                : (__LOG__(3)`Tried to revoke invitation during reg`, null);
            });
            this.spinUntilReady(n, 492, 182);
          }
          statusFirstSendDialogClosed() {
            X.J.update({ firstTimePost: (0, m.D)() }),
              this.dispatch({ type: "STATUS_FIRST_SENT_DIALOG_CLOSED" });
          }
          sendTextMsg(t, e, n, r, i) {
            var a = {
                type: "text",
                text: e,
                waMe: i
                  ? {
                      urlText: e === i.origText,
                      urlNumber: e === i.origText && i.urlNumber,
                    }
                  : void 0,
              },
              s = wt(n),
              u = s.quoted,
              o = s.remoteJid;
            (0, Et.a)(this, t), this.Dj(O.e.sendMsg(t, a, u, o, r));
          }
          sendStatusTextMsg(t, e, n, r) {
            var i = {
              type: "text",
              text: t,
              linkPreview: n,
              backgroundColor: e,
            };
            this.Dj(O.e.sendStatusMsg(i, r));
          }
          sendLocationMsg(t, e) {
            var n = t.jid,
              r = t.lat,
              i = t.lng,
              a = {
                previewBlob: t.preview,
                type: "location",
                lat: r,
                lng: i,
                preview: null,
                name: t.name,
                address: t.address,
                url: t.url,
              },
              s = wt(e),
              u = s.quoted,
              o = s.remoteJid;
            (0, Et.a)(this, n), this.Dj(O.e.sendMsg(n, a, u, o));
          }
          sendMediaMsg(t, e, n, r) {
            var i = Promise.resolve(e).then((e) => {
              if (e) {
                var i = wt(n),
                  a = i.quoted,
                  s = i.remoteJid;
                ("video" !== e.type && "image" !== e.type) ||
                  (e.uploadSource = r),
                  (0, Et.a)(this, t),
                  this.Dj(O.e.sendMediaMsg(t, e, a, s));
              }
            });
            (0, I.c)(i);
          }
          sendStatusMediaMsg(t, e) {
            var n = Promise.resolve(t).then((t) => {
              t && this.Dj(O.e.sendStatusMediaMsg(t, e));
            });
            (0, I.c)(n);
          }
          sendMediaMsgs(t, e, n, r) {
            var i = Promise.all(n).then((n) => {
              t.forEach((t) => {
                (0, Et.a)(this, t);
              }),
                this.Dj(O.e.sendMediaMsgs(t, e, n, r));
            });
            (0, I.c)(i);
          }
          senderRevokeChatMsgs(t, e) {
            this.Dj(O.e.revokeChatMsgs(t, e)),
              (0, Ct.s)() &&
                !X.G.get() &&
                (0, c.g)({
                  text: [e.length, 240],
                  right: 891,
                  onSoftRight: () => {
                    (0, yt.E)(this, yt.u);
                  },
                  center: 902,
                  onSoftCenter: "CLOSE",
                  close: () => {
                    (0, c.a)(), X.G.set(!0);
                  },
                });
          }
          adminRevokeChatMsg(t, e, n) {
            var r = e.meta.author;
            null != r &&
              (0, c.g)({
                text: [(0, At.f)(n, r), 239],
                left: 864,
                onSoftLeft: "CLOSE",
                right: 237,
                onSoftRight: () => {
                  this.Dj(O.e.revokeChatMsgs(t, [e.id])),
                    X.c.get() ||
                      (0, c.g)({
                        text: 770,
                        right: 891,
                        onSoftRight: () => {
                          (0, yt.E)(this, yt.u);
                        },
                        center: 902,
                        onSoftCenter: "CLOSE",
                        close: () => {
                          (0, c.a)(), X.c.set(!0);
                        },
                      });
                },
              });
          }
          revokeStatusMsg(t) {
            this.Dj(O.e.revokeStatusMsg(t));
          }
          createGroup(t, e, n, r, i) {
            var a = this.Dk(O.e.createGroup(t, e, n, r, i)).then((e) => {
              var n;
              if (e.error)
                return "no-network" ===
                  (null == (n = e.error) ? void 0 : n.reason)
                  ? (__LOG__(
                      3
                    )`Backend.createGroup: No connection, creating the group is postponed`,
                    () => {})
                  : () => (0, U.d)(this, e, t);
              var r = e.result.groupJid,
                i = this.Dd.chatFromJid(r);
              return i && "GROUP" === i.type
                ? () => {
                    (0, gt.a)(this, i.jid, "newest");
                    var t = (0, _.a)(this.getStoreState());
                    if (t) {
                      var n = 0 !== t.serverProps.groupInviteSending;
                      (0, U.e)(this, i.id, e, t.contacts, n);
                    } else __LOG__(4)`createGroup called during reg`;
                  }
                : (__LOG__(4)`Backend.createGroup: ${r} does not exist`, null);
            });
            It(this)
              ? (0, c.e)({ title: 243, text: 608 })
              : this.spinUntilReadyWithTimeout(
                  a,
                  [(0, tt.b)(t), 107],
                  182,
                  5e3
                );
          }
          setProfileName(t) {
            this.Dj(O.e.setProfileName(t)),
              this.dispatch({ type: "PUSHNAME_UPDATED", pushname: t });
          }
          setAbout(t) {
            this.Dj(O.e.setAbout(t));
          }
          removeProfilePicture() {
            return this.Dk(O.e.setProfilePicture(null));
          }
          setProfilePicture(t) {
            return this.Dk(O.e.setProfilePicture(t));
          }
          setOneToOneEphemeralSetting(t, e, n) {
            kt(this, 290) ||
              this.Dj(O.e.setOneToOneEphemeralSetting(t, e, n || (0, m.D)()));
          }
          setGroupSubject(t, e) {
            this.Dj(O.e.setGroupSubject(t, e));
          }
          updateMediaStatus(t, e) {
            (0, p.I)(t, {
              chat: (t) => {
                var n = this.Dd.mediaStatusUpdated(t, e);
                n && this.dispatch(n);
              },
              status: (t) => {
                var n = this.getStatusCache();
                null != n &&
                  (n.mediaStatusUpdated(t, e),
                  this.dispatch({
                    type: "STATUS_MEDIA_UPDATED",
                    statusId: t,
                    mediaStatus: e,
                  }));
              },
            });
          }
          setGroupDescription(t, e) {
            this.Dk(O.e.setGroupDescription(t, e)).then((t) => () => {
              if ("success" !== t) {
                var e;
                switch (t) {
                  case "conflict":
                    e = 373;
                    break;
                  case "not-authorized":
                    e = 374;
                    break;
                  default:
                    e = 242;
                }
                (0, c.e)({ title: 243, text: e });
              }
            }),
              this.goBack();
          }
          setGroupEphemeralSetting(t, e) {
            kt(this, 290) || this.Dj(O.e.setGroupEphemeralSetting(t, e));
          }
          setGroupParticipants(t, e) {
            return this.Dk(O.e.setGroupParticipants(t, e));
          }
          setGroupAnnouncement(t, e) {
            var n = this.Dk(O.e.setGroupAnnouncement(t, e)).then(() => null);
            this.spinUntilReady(n, 386, 182);
          }
          setGroupPicture(t, e) {
            return this.Dk(O.e.setGroupPicture(t, e));
          }
          addGroupParticipants(t, e, n, r) {
            var i = this.Dk(O.e.addGroupParticipants(t.jid, e)).then((e) =>
              (0, U.b)(this, t.id, e, n, r)
            );
            this.spinUntilReady(i, 19, 182);
          }
          leaveGroup(t) {
            var e = (0, _.a)(this.getStoreState());
            e
              ? this.Dj(O.e.removeGroupParticipants(t, [e.user.jid]))
              : __LOG__(4)`leaveGroup called during reg`;
          }
          removeGroupParticipants(t, e, n) {
            if (!kt(this, 720)) {
              var r = this.Dk(O.e.removeGroupParticipants(t, e)).then((t) =>
                (0, U.h)(this, t, n)
              );
              this.spinUntilReady(r, 721, 182);
            }
          }
          promoteGroupParticipants(t, e, n) {
            if (!kt(this, 403)) {
              var r = this.Dk(O.e.promoteGroupParticipants(t, e)).then((t) =>
                (0, U.c)(this, t, n)
              );
              this.spinUntilReady(r, 119, 182);
            }
          }
          demoteGroupParticipants(t, e, n) {
            if (!kt(this, 403)) {
              var r = this.Dk(O.e.demoteGroupParticipants(t, e)).then((t) =>
                (0, U.c)(this, t, n)
              );
              this.spinUntilReady(r, 119, 182);
            }
          }
          markChatAsRead(t) {
            Dt(t);
            var e = this.Dd.chatFromId(t);
            if (e && 0 !== e.msgInfo.unreadMsgCount)
              if (-1 !== e.msgInfo.unreadMsgCount) {
                var n = e.msgInfo,
                  r = n.newest,
                  i = n.oldestUnread;
                r && i && this.Dj(O.e.markChatAsRead(e.jid, i, r));
              } else this.removeChatUnreadMark(t);
          }
          markStatusAsSeen(t, e) {
            this.Dj(O.e.markStatusAsSeen(t, e));
          }
          blockUser(t) {
            this.blocklistAction(t, "block");
          }
          unblockUser(t) {
            this.blocklistAction(t, "unblock");
          }
          blocklistAction(t, e) {
            var n = (0, _.a)(this.getStoreState());
            n
              ? n.serverProps.mdBlocklistV2
                ? this.Dj(O.e.setBlocklistV2(t, e))
                : "block" === e
                ? this.Dj(O.e.blockUser(t))
                : this.Dj(O.e.unblockUser(t))
              : __LOG__(4)`blocklist action ${e} called during reg`;
          }
          reportUserSpam(t) {
            var e = this.Dk(O.e.reportUserSpam(t));
            this.spinUntilReady(
              e.then((t) => () => (0, B.e)(this, t)),
              744,
              182
            );
          }
          reportGroupSpam(t) {
            var e = this.Dk(O.e.reportGroupSpam(t));
            this.spinUntilReady(
              e.then((t) => () => (0, U.j)(this, t)),
              744,
              182
            );
          }
          reportCommunityHomeSpam(t) {
            var e = this.Dk(O.e.reportCommunityHomeSpam(t));
            this.spinUntilReady(
              e.then((t) => () => (0, U.i)(this, t)),
              744,
              182
            );
          }
          markGroupAsMessaged(t) {
            this.Dj(O.e.markGroupAsMessaged(t.id, t.jid));
          }
          maybeCheckMsgMediaContent(t, e) {
            var n = e;
            switch (
              ("rich_hsm" === n.type && n.richContent && (n = n.richContent),
              n.type)
            ) {
              case "futureproof":
                "document" === n.subtype &&
                  this.Dj(O.e.convertFutureproofMessage(t));
                break;
              case "text":
                var r = n.linkPreview;
                r &&
                  void 0 === r.suspiciousCharacters &&
                  this.Df.fireAndForget(
                    "backend",
                    "recomputeSuspiciousCharacters",
                    { msgId: t }
                  );
                break;
              case "image":
              case "video":
              case "gif":
              case "voice":
              case "vcard":
              case "document":
                if ("vcard" === n.type && !n.isMMS) break;
                var i = n.mediaStatus;
                if ("ready" === i.type) {
                  var a = (0, R.e)(i.ref);
                  if (a)
                    return (0, M.p)(a).then((e) => {
                      e || this.markMediaContentAsDeleted(t);
                    });
                }
            }
            return Promise.resolve();
          }
          loadMsgContentBlob(t, e, n) {
            return (
              __LOG__(2)`Loading msg contentBlob for ${t}`,
              (0, R.p)(e, {
                uri: (t) => (0, P.a)(t, n),
                path: (e) =>
                  (0, P.a)(e, n).then(
                    (e) => e || (this.markMediaContentAsDeleted(t), null)
                  ),
              })
            );
          }
          markMediaContentAsDeleted(t) {
            this.Df.fireAndForget("backend", "markMediaContentAsDeleted", {
              msgId: t,
            });
          }
          markGifContentAsDeleted(t, e) {
            this.Df.fireAndForget("backend", "markGifContentAsDeleted", {
              source: t,
              plaintextHash: e,
            });
          }
          openAvatarView(t, e) {
            this.openScreen("AVATAR_IMAGE_VIEW", {
              jid: t,
              avatarPlacement: e,
              avatarStatus: this.Dd.fullsizeAvatar(t),
            });
          }
          sendMetrics() {
            this.Df.fireAndForget("backend", "sendMetrics", {});
          }
          sendAnonymousMetrics() {
            this.Df.fireAndForget("backend", "sendAnonymousMetrics", {});
          }
          getIdentityVerificationData(t) {
            return this.Df.sendAndReceive(
              "backend",
              "getIdentityVerificationData",
              { jid: t }
            );
          }
          syncAllContacts(t) {
            if (!kt(this, 1010)) {
              var e = (0, A.a)().then((e) =>
                this.Df.sendAndReceive("backend", "syncAllContacts", {
                  type: t,
                  revision: e,
                })
              );
              this.spinUntilReady(
                e.then((t) => () => {
                  t && (0, c.e)({ title: 243, text: 1010 });
                }),
                1012,
                1011
              );
            }
          }
          deltaSync(t, e) {
            return (0, A.a)().then((n) =>
              this.Df.sendAndReceive("backend", "deltaSync", {
                type: t,
                revision: n,
                addedPhoneToJid: e,
              })
            );
          }
          deleteAllMediaAndReload(t) {
            var e = this.Df.sendAndReceive("backend", "deleteAllMedia", {
              olderThan: t,
            })
              .then(() => (self.location.reload(!0), (0, h.a)(15e3)))
              .then(() => null);
            this.spinUntilReady(e, 651, 650);
          }
          deleteAccount() {
            return this.Df.sendAndReceive(
              "backend",
              "startDeleteAccount",
              {}
            ).then(() => {
              (0, s.a)(), self.location.reload(!0);
            });
          }
          deleteChat(t, e, n) {
            var r = this.Dk(
              O.e.deleteChat(t, "retainMediaInPhoneStorage" === n)
            ).then(() => null);
            this.spinUntilReady(r, e ? 236 : 233, 959);
          }
          clearChat(t, e, n) {
            var r = this.Dk(
              O.e.clearChat(
                t,
                "retainMediaInPhoneStorage" === e,
                "retainStarredMessages" === n
              )
            ).then(() => null);
            this.spinUntilReady(r, 141, 959);
          }
          updateGeneralSettings(t) {
            return this.Dk(O.e.updateGeneralSettings(t)).then((t) =>
              "network_error" !== t.status
                ? t
                : new Promise((e) => {
                    (0, c.e)({
                      title: 243,
                      text: 815,
                      onClose: () => {
                        e(t);
                      },
                    });
                  })
            );
          }
          updateWallpaper(t, e, n) {
            var r = this.Dk(O.e.updateChatWallpaper(t, e || null, n)).then(
              () => null
            );
            this.spinUntilReady(r, 839);
          }
          saveAlphaJpegStickerBlob(t, e) {
            return (
              __LOG__(2)`WebP: Saving sticker as jpeg`,
              this.Df.sendAndReceive("backend", "saveAlphaJpegStickerBlob", {
                msgId: t,
                blob: e,
              })
            );
          }
          getStickerMsgMediaRefs(t) {
            return this.Df.sendAndReceive("backend", "getStickerMsgMediaRefs", {
              msgId: t,
            });
          }
          getPrivacySettings() {
            return this.Df.sendAndReceive("backend", "getPrivacySettings", {});
          }
          openMediaDrawer(t) {
            var e = this.loadChatMediaMsgs({ chatId: t.id, limit: v.F });
            this.openScreen("MEDIA_DRAWER", {
              medias: [],
              allLoaded: !1,
              loading: { older: e },
              deleting: [],
              revoking: [],
              useCase: { type: "mediaDrawer", chat: t },
            });
          }
          openStorageSettingMediaDrawer(t, e) {
            var n = this.loadStorageSettingMediaMsgs({ filter: e, limit: v.F });
            this.openScreen("MEDIA_DRAWER", {
              medias: [],
              allLoaded: !1,
              loading: { older: n },
              deleting: [],
              revoking: [],
              useCase: { type: "storageSetting", chat: t, filter: e },
            });
          }
          getStorageSettingChatsMediaSizes() {
            return this.Df.sendAndReceive(
              "backend",
              "getStorageSettingChatsMediaSizes",
              {}
            );
          }
          getStorageSettingTotalMediaSize() {
            return this.Df.sendAndReceive(
              "backend",
              "getStorageSettingTotalMediaSize",
              {}
            );
          }
          retryMsgWithoutBlockedCheck(t) {
            return this.Dj(O.e.retryMsg(t));
          }
          retryStatusMsg(t, e) {
            return this.Dj(O.e.retryMsg(t, e));
          }
          muteChat(t, e) {
            return this.Df.fireAndForget("backend", "muteChat", {
              chatId: t,
              mutedUntil: "number" == typeof e ? (0, m.k)(e) : e,
            });
          }
          muteAuthor(t) {
            this.Df.fireAndForget("backend", "muteAuthor", { authorJid: t });
          }
          unmuteAuthor(t) {
            this.Df.fireAndForget("backend", "unmuteAuthor", { authorJid: t });
          }
          setChatArchivedState(t, e) {
            return this.Df.fireAndForget("backend", "setChatArchivedState", {
              chatId: t,
              archived: e,
            });
          }
          markChatAsUnread(t) {
            return this.Df.fireAndForget("backend", "markChatAsUnread", {
              chatId: t,
            });
          }
          removeChatUnreadMark(t) {
            return this.Df.fireAndForget("backend", "removeChatUnreadMark", {
              chatId: t,
            });
          }
          forwardMsgs(t, e, n) {
            this.Dj(O.e.forwardMsgs(t, e, n));
          }
          deleteMsgsFromStorageSetting(t) {
            return (
              this.dispatch({ type: "DELETE_MSGS_STARTED", msgIds: t }),
              this.Dj(O.e.deleteMsgsFromStorageSetting(t))
            );
          }
          deleteChatMsgs(t, e) {
            return (
              this.dispatch({ type: "DELETE_MSGS_STARTED", msgIds: e }),
              this.Dj(O.e.deleteChatMsgs(t, e))
            );
          }
          markPlayed(t, e) {
            return this.Dj(O.e.markPlayed(t, e));
          }
          maybeRedirectAfterSharing(t, e) {
            if (e)
              t.length > 0 ? (0, d.a)(973) : (0, d.a)(974),
                this.closeAllScreens();
            else if (1 === t.length) {
              var n = t[0];
              (0, gt.a)(this, n, "newest");
            } else this.closeAllScreens();
          }
          openPrivacyAddBlacklistScreen(t) {
            if (!kt(this, 242)) {
              var e = this.Df.sendAndReceive(
                "backend",
                "getContactsBlocklist",
                { category: t }
              );
              this.spinUntilReady(
                e.then((e) =>
                  e.error
                    ? ((0, c.e)({ title: 243, text: 242 }), null)
                    : () => {
                        "groupAdd" === t
                          ? this.openScreen("SETTINGS_GROUP_ADD_BLACKLIST", {
                              groupAddBlacklist: e.contactsBlacklist,
                            })
                          : this.openScreen("SETTINGS_PRIVACY_ADD_BLACKLIST", {
                              category: t,
                              blacklist: e.contactsBlacklist,
                            });
                      }
                ),
                800,
                182
              );
            }
          }
          requestGdprReport() {
            this.Dj(O.e.requestGdprReport());
          }
          setTwoFactor(t, e) {
            this.Dj(O.e.setTwoFactor(t, e)),
              this.dispatch({
                type: "TWO_FACTOR_ACTIVATION",
                hasEmail: null != e,
              });
          }
          changeTwoFactorPin(t) {
            this.Dj(O.e.changeTwoFactorPin(t));
          }
          changeTwoFactorEmail(t) {
            this.Dj(O.e.changeTwoFactorEmail(t)),
              this.dispatch({ type: "TWO_FACTOR_CHANGE_EMAIL" });
          }
          verifyTwoFactorReminder(t) {
            this.dispatch({ type: "TWO_FACTOR_VERIFICATION_PENDING" }),
              this.Df.fireAndForget("backend", "verifyTwoFactorReminder", {
                pin: t,
              });
          }
          startVoipCall(t, e) {
            this.Dm("startVoipCall") ||
              (this.dispatch({ type: "LOADING_CALL", peer: t, fromMe: !0 }),
              this.Df.fireAndForget("voip", "startVoipCall", {
                jid: t,
                uiContext: e,
              }));
          }
          acceptVoipCall() {
            this.Dm("acceptVoipCall") ||
              this.Df.fireAndForget("voip", "acceptVoipCall", {});
          }
          acceptVoipCallFromNotification(t) {
            if (!this.Dm("acceptVoipCallFromNotification") && null != t) {
              this.dispatch({ type: "LOADING_CALL", peer: t, fromMe: !1 });
              var e = this.Df;
              if (!(0, St.hasBackendWorkerStarted)() && !this.Db) {
                var n = (0, u.maybeAttachVoipPortal)(e);
                if (n) {
                  this.Db = n;
                  var r = new Z.a("wa-bridge");
                  r.postMessage("connect-page-to-sw"),
                    r.startMonitoring({
                      onTimeout: () => {
                        __LOG__(2)`Channel to the SW lost`,
                          this.dispatch({
                            type: "VOIP_SERVICE_BRIDGE_DISCONNECTED",
                          });
                      },
                    }),
                    n.setPort(r);
                } else
                  __LOG__(
                    2
                  )`acceptVoipCallFromNotification: Backend worker did not fully launch but managed to set handlers before handling notification`;
              }
              navigator.vibrate(0),
                e.fireAndForget("voip", "acceptVoipCall", {});
            }
          }
          rejectVoipCall() {
            this.Dm("rejectVoipCall") ||
              this.Df.fireAndForget("voip", "rejectVoipCall", {});
          }
          endVoipCall() {
            this.Dm("endVoipCall") ||
              this.Df.fireAndForget("voip", "endVoipCall", {});
          }
          muteVoipCall(t) {
            this.Dm("muteVoipCall") ||
              this.Df.fireAndForget("voip", "muteVoipCall", { shouldMute: t });
          }
          updateVoipCallDuration() {
            this.Dm("updateVoipCallDuration") ||
              this.Df.fireAndForget("voip", "updateVoipCallDuration", {});
          }
          closeCallLogs() {
            this.dispatch({ type: "CLOSE_CALL_LOGS" });
          }
          loadCallLogs() {
            var t = this.Dd.getCallLogGroups();
            if (null != t.groups && null != t.orderedGroupIds)
              return (
                this.dispatch({
                  type: "UPDATE_CALL_LOGS",
                  groups: t.groups,
                  orderedGroupIds: t.orderedGroupIds,
                  canBeSkipped: !1,
                }),
                void (0, D.a)()
              );
            var e = (0, St.makeBackendRequestId)();
            this.Dd.callLogsLoading(e),
              this.dispatch({ type: "OPEN_CALL_LOGS", requestId: e }),
              this.Df.sendAndReceive("backend", "loadCallLogs", {}).then(
                (t) => {
                  var n = x(t.logs),
                    r = n.groups,
                    i = n.orderedGroupIds;
                  this.Dd.updateCallLogGroups(r, i, e),
                    this.dispatch({
                      type: "UPDATE_CALL_LOGS",
                      requestId: e,
                      groups: r,
                      orderedGroupIds: i,
                      canBeSkipped: !1,
                    }),
                    (0, D.a)();
                }
              );
          }
          deleteCallLogs(t) {
            var e = this.Dk(O.e.deleteCallLogs(t)).then(() => null);
            this.spinUntilReady(e, 85, 959);
          }
          clearAllCallLogs() {
            var t = this.Dk(O.e.clearAllCallLogs()).then(() => null);
            this.spinUntilReady(t, 82, 959);
          }
          maybeCloseOrphanedCallScreen(t) {
            "swLost" === t &&
              this.Df.sendAndReceive(
                "voip",
                "voipConnectionAttempted",
                {}
              ).then((t) => {
                t &&
                  (__LOG__(
                    3
                  )`maybeCloseOrphanedCallScreen: Closing call screen due to lost connection to SW`,
                  this.dispatch({ type: "CLOSE_CALL_SCREEN" }));
              });
          }
          openTab(t) {
            var e = (0, _.a)(this.getStoreState());
            if (e && e.tab) {
              var n = e.tab.key;
              if (n !== t) {
                var r = Y.a[n].onClose,
                  i = Y.a[t].onOpen;
                switch ((r && r(this), i && i(this), t)) {
                  case "camera":
                    if (e.activityInProgress)
                      return void __LOG__(
                        3
                      )`Camera tab open: another activity in progress`;
                    (0, dt.j)(this, ["image/jpeg", "video/*"], !0).then((t) => {
                      t &&
                        this.openScreen("SEND_MEDIA", {
                          from: "cameraTab",
                          media:
                            "image/jpeg" === t.type
                              ? { type: "image", blob: t }
                              : { type: "video", file: t },
                          defaultCaption: "",
                          actionAfterSending: { type: "unknown" },
                        });
                    });
                    break;
                  case "calls":
                    this.dispatch({ type: "OPEN_TAB", tab: { key: "calls" } });
                    break;
                  case "status":
                    var a,
                      s,
                      u = this.getStatusCache();
                    (a =
                      null != u && u.isLoaded()
                        ? {
                            key: "status",
                            data:
                              null != (s = u.purgeExpired()) ? s : u.toStore(),
                          }
                        : { key: "status" }),
                      this.dispatch({ type: "OPEN_TAB", tab: a });
                    break;
                  default:
                    this.dispatch({ type: "OPEN_TAB", tab: { key: "chats" } });
                }
              } else __LOG__(2)`Tried to open already opened tab`;
            } else __LOG__(3)`Tried to openTab without a MainStore`;
          }
          statusTabOpened() {
            var t = (0, m.D)();
            X.J.update({ tabLastOpened: t }),
              this.dispatch({ type: "STATUS_TAB_OPENED", time: t }),
              this.Df.fireAndForget("backend", "statusTabOpened", {});
          }
          loadLastUnreadStatusMsg() {
            this.Df.fireAndForget("backend", "loadLastUnreadStatusMsg", {});
          }
          loadStatusPrivacySettings() {
            this.Df.fireAndForget("backend", "loadStatusPrivacySettings", {});
          }
          getCachedStatuses() {
            var t;
            return (
              (null == (t = this.getStatusCache())
                ? void 0
                : t.getStatuses()) || {}
            );
          }
          loadStatusData() {
            var t = this.getStatusCache();
            if (null == t)
              this.instantiateStatusCache(),
                this.Df.fireAndForget("backend", "loadStatusAuthors", {}),
                this.dispatch({ type: "START_LOADING_STATUS" });
            else if (t.isLoaded()) {
              var e = t.purgeExpired();
              this.dispatch({
                type: "UPDATE_STATUS_DATA",
                data: null != e ? e : t.toStore(),
              });
            }
          }
          Dq(t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var r = t[n].unread.first;
              if (null != r && (e.push(r.id), e.length >= 10)) break;
            }
            this.loadStatuses(e);
          }
          saveStatusListScrollPosition(t) {
            this.dispatch({
              type: "UPDATE_STATUS_LIST_SCROLL",
              lastScrollPosition: t,
            });
          }
          loadStatuses(t) {
            var e = this.getStatusCache();
            return null == e
              ? (__LOG__(4)`Tried to load statusaes before having a cache`,
                Promise.reject("Status Cache not initialized"))
              : 0 === t.length
              ? Promise.resolve([])
              : (e.statusLoading(t),
                this.dispatch({ type: "STATUS_LOADING", statuses: t }),
                this.Df.sendAndReceive("backend", "loadStatuses", {
                  statusIds: t,
                }).then(
                  (t) => (
                    e.statusLoaded(t),
                    this.dispatch({ type: "STATUS_UPDATED", statuses: t }),
                    t.forEach((t) => {
                      this.Dr(t);
                    }),
                    t
                  )
                ));
          }
          Dr(t) {
            !t ||
              ("image" !== t.content.type &&
                "video" !== t.content.type &&
                "gif" !== t.content.type) ||
              "idle" !== t.content.mediaStatus.type ||
              this.downloadMedia(t.id, "status");
          }
          loadStatusWithAuthor(t) {
            return this.Df.sendAndReceive("backend", "loadStatusWithAuthor", {
              statusId: t,
            });
          }
          setStatusSettings(t) {
            this.Dj(O.e.setStatusSettings(t));
          }
          openSentStatusScreen() {
            var t = (0, St.makeBackendRequestId)();
            this.openScreen("STATUS_SENT_LIST", { requestId: t }),
              this.Df.sendAndReceive("backend", "loadSentStatusInfo", {
                requestId: t,
              }).then((e) => {
                var n = e.infos;
                this.dispatch({
                  type: "STATUS_SENT_INFO_LOADED",
                  requestId: t,
                  infos: n,
                });
              });
          }
          Ds(t) {
            t.isLoaded() &&
              this.dispatch({ type: "UPDATE_STATUS_DATA", data: t.toStore() });
          }
          statusAuthorMeUpdated(t) {
            var e = this.getStatusCache();
            null != e && (e.updateMeAuthor(t), this.Ds(e));
          }
          statusAuthorUpdated(t) {
            var e = this.getStatusCache();
            null != e
              ? (e.updateAuthor(t), this.Ds(e))
              : this.loadLastUnreadStatusMsg();
          }
          statusAuthorsCleared(t) {
            var e = this.getStatusCache();
            null != e
              ? (e.clearAuthors(t), this.Ds(e))
              : this.loadLastUnreadStatusMsg();
          }
          loadChatMediaMsgs(t) {
            var e = (0, St.makeBackendRequestId)();
            return (
              this.dispatch({ type: "LOAD_MEDIA_RANGE", requestId: e }),
              this.Df.sendAndReceive("backend", "loadChatMediaMsgs", t).then(
                (n) => {
                  var r = n.msgs;
                  return Promise.all(r.map(this.Dp)).then((n) => {
                    this.dispatch({
                      type: "LOADED_MEDIA_RANGE",
                      requestId: e,
                      msgs: n,
                      askedFor: t.limit,
                    });
                  });
                }
              ),
              e
            );
          }
          loadStorageSettingMediaMsgs(t) {
            var e = (0, St.makeBackendRequestId)();
            return (
              this.dispatch({ type: "LOAD_MEDIA_RANGE", requestId: e }),
              this.Df.sendAndReceive(
                "backend",
                "loadStorageSettingMediaMsgs",
                t
              ).then((n) => {
                var r = n.msgs;
                return Promise.all(r.map(this.Dp)).then((n) => {
                  this.dispatch({
                    type: "LOADED_MEDIA_RANGE",
                    requestId: e,
                    msgs: n,
                    askedFor: t.limit,
                  });
                });
              }),
              e
            );
          }
          knownViewportFromCache(t, e, n) {
            return this.Dd.knownViewport(t, e, n);
          }
          loadMsgRange(t, e, r) {
            var i,
              a = (0, St.makeBackendRequestId)(),
              s = r.chatId;
            return (
              (0, St.hasBackendWorkerStarted)()
                ? (i = this.Df.sendAndReceive("backend", "loadMsgRange", r))
                : (__LOG__(2)`loadMsgRange loading locally ${a}`,
                  (i = n
                    .e(51)
                    .then(n.bind(null, 617))
                    .then((t) => t.loadMsgRange(r))
                    .then((t) =>
                      (0, St.hasBackendWorkerStarted)()
                        ? (__LOG__(2)`loadMsgRange discarded result ${a}`,
                          this.Df.sendAndReceive("backend", "loadMsgRange", r))
                        : (__LOG__(2)`loadMsgRange loaded locally ${a}`, t)
                    ))),
              i.then((n) => {
                if (null == n) return null;
                var i = n.msgs,
                  u = n.containsOldest,
                  o = n.containsNewest,
                  l = !1,
                  c = !1;
                return (
                  i.forEach((e) => {
                    null != e.validUntil &&
                      e.validUntil < this.Dh &&
                      ((l = !0),
                      e.id === t &&
                        (__LOG__(2)`loadMsgRange: Anchor ${e.id} deleted`,
                        (c = !0)));
                  }),
                  l
                    ? (__LOG__(2)`loadMsgRange: Purging all expired messages`,
                      this.Df.sendAndReceive(
                        "backend",
                        "deleteAllExpiredMsgsForChat",
                        { chatId: s }
                      ).then((n) => {
                        if (null == n)
                          return (
                            __LOG__(
                              3
                            )`Detected a deleted chat whilst trying to purge its expired messages`,
                            null
                          );
                        this.Do(n);
                        var i = t;
                        if (c) {
                          var s = n.msgInfo,
                            u = s.newest;
                          if (!(i = s.oldestUnread || u))
                            return (
                              __LOG__(
                                4
                              )`loadMsgRange: Empty chat after purging expired messages`,
                              void SEND_LOGS("empty-chat-after-expired-purge")
                            );
                        }
                        var o = this.loadMsgRange(
                          i,
                          e,
                          Object.assign({}, r, { anchor: i })
                        );
                        "beginning" !== i &&
                          this.dispatch({
                            type: "UPDATE_CHAT_ANCHOR",
                            chatId: n.id,
                            anchor: i,
                            oldRequestId: a,
                            newRequestId: o,
                          });
                      }),
                      null)
                    : Promise.all(i.map(this.Dp)).then((n) => {
                        this.Dd.msgRangeLoaded(s, t, n, r.range, u, o);
                        var i = this.knownViewportFromCache(s, t, e);
                        this.dispatch({
                          type: "LOADED_MSG_RANGE",
                          requestId: a,
                          chatId: s,
                          anchor: t,
                          loaded: i,
                        });
                      })
                );
              }),
              a
            );
          }
          unlinkViewOnceMsgsMedia(t) {
            0 !== t.length &&
              this.Df.fireAndForget("backend", "unlinkViewOnceMsgsMedia", {
                msgIds: t,
              });
          }
          quickReplyToHsm(t, e) {
            var n = this.Dd.pressHsmButtonByButtonIndex(t, e);
            n && this.dispatch(n), this.Dj(O.e.quickReplyToHsm(t, e));
          }
          Dt(t) {
            var e = t.chat,
              n = t.msgIds,
              r = t.reason;
            this.Dd.deleteMsgs(e, n, r),
              this.dispatch({
                type: "MSGS_DELETED",
                chat: e,
                msgIds: n,
                reason: r,
              });
            var i = (0, _.a)(this.getStoreState());
            i &&
              i.msglist &&
              i.msglist.chat.id === e.id &&
              0 === i.msglist.viewport.msgIds.length &&
              i.msglist.chat.msgInfo.msgCount > 0 &&
              (__LOG__(
                2
              )`msgsDeleted: All msgs in viewport deleted. Loading more.`,
              E.a(this, i.msglist, "older", 10)),
              (function (t, e, n) {
                (0, w.c)(e.id).then((t) => {
                  t.forEach((t) => {
                    var r = t.data,
                      i = r.msgId,
                      a = r.count;
                    if (1 === a && n.includes(i)) t.close();
                    else if (a > 1 && a !== e.msgInfo.unreadMsgCount) return;
                  });
                });
                var r = (0, _.a)(t.getStoreState());
                r && (0, pt.b)(e, n, r.contacts, r.settings);
              })(this, e, n);
          }
          buildApi(t) {
            t.setHandlers("page", {
              getContactsFromPhoneBook: A.b,
              getPushEndpoint: T.a,
              getContactDatabaseRevision: () =>
                (0, A.a)().then((t) => ({ revision: t })),
              generalSettings: (t) => {
                var e = t.settings;
                this.dispatch({ type: "GENERAL_SETTINGS", settings: e });
              },
              getTotalSpace: (t) => {
                var e = t.area;
                return Promise.all([(0, M.k)(e), (0, M.m)(e)]).then((t) => {
                  var e = l()(t, 2);
                  return { result: e[0] + e[1] };
                });
              },
              reload: () => {
                self.location.reload();
              },
              extractFrame: (t) => {
                var e = t.msgId,
                  r = t.videoRef,
                  i = t.rotation;
                return this.loadMsgContentBlob(e, r).then((t) =>
                  null == t
                    ? { result: null }
                    : n
                        .e(13)
                        .then(n.bind(null, 514))
                        .then((e) =>
                          e
                            .extractFrame(t, i)
                            .then((t) => ({ result: t }))
                            .catch(() => ({ error: { reason: "error" } }))
                        )
                );
              },
              getNetworkInfo: () => ({
                isWifiConnected: (0, G.i)(),
                isRoaming: (0, G.h)(),
              }),
              createTemporaryFile: () => (0, M.c)().then((t) => ({ path: t })),
              appendBlobToFile: (t) => {
                var e = t.blob,
                  n = t.path;
                return (0, M.a)(e, n);
              },
              craftMediaFilesystemPath: (t) => {
                var e = t.path;
                return { path: (0, M.b)(e) };
              },
              deletePath: (t) => {
                var e = t.path;
                return (0, M.d)(e);
              },
              putBlobToPhoneStorage: (t) => {
                var e = t.path,
                  n = t.blob;
                return (0, M.k)("sdcard").then((t) =>
                  t <= 1.01 * n.size
                    ? { result: "not-enough-space" }
                    : (0, M.n)(e, n).then((t) =>
                        t
                          ? { result: "ok", path: t }
                          : { result: "storage-gone" }
                      )
                );
              },
              getBlobFromPhoneStorage: (t) => {
                var e = t.path;
                return (0, M.i)(e).then((t) => ({ blob: t }));
              },
              getFreeSpace: (t) => {
                var e = t.area;
                return (0, M.k)(e).then((t) => ({ freeSpace: t }));
              },
              getDominantColors: (t) => {
                var e = t.msg,
                  r = t.quote;
                return n
                  .e(13)
                  .then(n.bind(null, 514))
                  .then((t) =>
                    Promise.all([
                      e ? t.extractDominantColorFromBlob(e) : null,
                      r ? t.extractDominantColorFromBlob(r) : null,
                    ])
                  )
                  .then((t) => {
                    var e = l()(t, 2);
                    return { msg: e[0], quote: e[1] };
                  });
              },
              computeMicroThumb: (t) => {
                var e = t.fullThumb;
                return n
                  .e(13)
                  .then(n.bind(null, 514))
                  .then((t) => t.computeMicroThumb(e));
              },
              pullInMemoryLogs: () => ({ logs: (0, i.getInMemoryLogs)() }),
              enableLoggingToTable: i.enableLoggingToTable,
            }),
              t.setHandlers("regPage", {
                initPushEndpoint: () => {
                  (0, T.a)();
                },
                updateReg: (t) => {
                  var e = t.newStore;
                  this.dispatch({ type: "UPDATE_REGISTRATION", newStore: e });
                },
                startSmsListener: () =>
                  Promise.all([n.e(7), n.e(34)])
                    .then(n.bind(null, 618))
                    .then((e) => {
                      e.onRegistrationSms((e) => {
                        t.fireAndForget("registration", "smsCodeDetected", {
                          code: e,
                        });
                      });
                    }),
                stopSmsListener: () =>
                  Promise.all([n.e(7), n.e(34)])
                    .then(n.bind(null, 618))
                    .then((t) => {
                      t.stopSmsPoller();
                    }),
                regEnded: (t) => {
                  var e = t.appInfo;
                  X.t.dangerouslySetInternal(e.user.jid),
                    X.f.set("pending"),
                    this.Dd.updateFromAppInfo(e);
                  var n = this.Dd.buildMainStore(e, !1);
                  this.dispatch({ type: "BACKEND_INITIALIZED", newStore: n }),
                    (0, N.c)("frontend", "regular", () => {
                      this.sendMetrics();
                    }),
                    (0, N.c)("frontend", "private", () => {
                      this.sendAnonymousMetrics();
                    }),
                    (0, s.b)(),
                    (0, et.e)(this);
                },
              }),
              t.setHandlers(
                "event",
                Object.assign(
                  {
                    finishedBooting: () => {
                      (0, Q.f)(this),
                        (0, y.k)((t) => {
                          this.Df.fireAndForget(
                            "backend",
                            "sendPresenceStatus",
                            { type: t }
                          );
                        });
                      var t = this.Db;
                      t &&
                        ((0, u.killVoipPortalAndSendPendingToBridge)(t),
                        (this.Db = null));
                    },
                    msgBgUpdated: (t) => {
                      var e = t.msg;
                      this.Dd.updateMsg(e) &&
                        this.dispatch({ type: "MSG_UPDATED", msg: e });
                    },
                    msgsReceived: (t) => {
                      var e = t.newMsgs,
                        n = t.changedMsgs,
                        r = t.affectedChats,
                        i = {
                          type: "RECEIVED_MSGS",
                          newMsgs: e,
                          changedMsgs: n,
                          affectedChats: r,
                        };
                      if (this.Dd) {
                        this.Dd.handleMsgsReceived(i);
                        for (var a = 0; a < e.length; ++a) {
                          var s = e[a],
                            u = s.meta;
                          if (!u.fromMe && u.author) {
                            var o = this.Dd.chatFromId(s.chatId);
                            o && (0, y.a)(this, o.jid, u.author, "paused");
                          }
                        }
                        (function (t, e, n, r) {
                          var i = (0, _.a)(t.getStoreState()),
                            a = (0, y.i)();
                          if (i && (!(0, _.e)(i) || !a)) {
                            var s = i.screens,
                              u = i.msglist,
                              o = i.contacts,
                              l = u && 0 === s.length && a ? u.chat.id : void 0;
                            (0, w.a)({
                              affectedChats: e,
                              newMsgs: n,
                              changedMsgs: r,
                              type: a ? "short" : "alert",
                              contacts: o,
                              settings: i.settings,
                              activeChatId: l,
                              user: i.user,
                              fireAndForget: t.fireAndForget,
                            });
                          }
                        })(this, r, e, n),
                          this.dispatch(i);
                        var l = (0, _.a)(this.getStoreState());
                        if (l) {
                          var c = new Map();
                          n.forEach((t) => {
                            var e = t.msg;
                            if ("revoked" === e.content.type) {
                              var n = c.get(e.chatId);
                              n ? n.push(e.id) : c.set(e.chatId, [e.id]);
                            }
                          }),
                            c.forEach((t, e) => {
                              var n = l.chatlist.chats[e];
                              (0, pt.b)(n, t, l.contacts, l.settings);
                            });
                          var d =
                            l.screens.length > 0
                              ? l.screens[l.screens.length - 1]
                              : null;
                          if (d) {
                            var h = d.screen,
                              v = d.id;
                            if (
                              "SPINNER_SCREEN" === h.type &&
                              h.props.extra &&
                              "acceptGroupAddRequest" === h.props.extra.key
                            ) {
                              var f = h.props.extra.groupJid;
                              r.some((t) => t.jid === f) &&
                                ((0, gt.a)(this, f, "unread"), this.Dn(v));
                            }
                          }
                        }
                      }
                    },
                    gdprReportReadyReceived: () => {
                      (0, k.a)("short");
                    },
                    blockList: (t) => {
                      var e = t.blocked;
                      this.dispatch({ type: "BLOCK_LIST", blocked: e });
                    },
                    chatModified: (t) => {
                      var e = t.chat;
                      this.Do(e);
                    },
                    chatAdded: (t) => {
                      var e = t.chat;
                      this.Dd.updateOrAddChat(e),
                        this.dispatch({
                          type: "CHAT_ADDED",
                          affectedChats: [e],
                        });
                    },
                    contactsModified: (t) => {
                      var e = t.changed,
                        n = t.deleted;
                      this.dispatch({
                        type: "MODIFIED_CONTACTS",
                        changed: e,
                        deleted: n,
                      }),
                        (0, y.d)(this, e, n);
                    },
                    msgAcked: (t) => {
                      var e = t.chat,
                        n = t.msg,
                        r = this.Dd.changeAck(e, n);
                      if (r) {
                        this.dispatch(r);
                        var i = (0, _.a)(this.getStoreState());
                        !0 ===
                          (null == i
                            ? void 0
                            : i.screens.some((t) => {
                                var e = t.screen;
                                return (
                                  "MSG_INFO" === e.type &&
                                  e.props.msg.id === n.id
                                );
                              })) && this.reloadMsgInfos(n.id);
                      }
                    },
                    mediaUpdated: (t) => {
                      var e = t.chatMsgs,
                        n = t.statusMsgs,
                        r = t.deleted,
                        i = this.Dd && this.Dd.mediaUpdated(e);
                      i && this.dispatch(i);
                      var a = this.getStatusCache();
                      null != a &&
                        n.length > 0 &&
                        (a.statusUpdated(n),
                        this.dispatch({
                          type: "STATUS_MSGS_UPDATED",
                          msgs: n,
                        })),
                        r &&
                          e
                            .filter((t) => "video" === t.content.type)
                            .forEach((t) => {
                              this.dispatch({
                                type: "STOP_MEDIA",
                                msgId: t.id,
                              });
                            });
                    },
                    chatRead: (t) => {
                      var e = t.chatId,
                        n = t.oldestUnread,
                        r = t.unreadMsgCount,
                        i = this.Dd.markChatAsRead(e, n, r);
                      i && this.dispatch(i);
                    },
                    fullsizeAvatarLoaded: (t) => {
                      var e = t.jid,
                        n = t.avatar,
                        r = this.Dd.fullsizeAvatarLoaded(e, n);
                      this.dispatch(r);
                    },
                    avatarsUpdated: (t) => {
                      var e = t.changed,
                        n = t.cleared;
                      e &&
                        this.Dd &&
                        e.forEach((t) => {
                          var e = t.jid,
                            n = t.photoId,
                            r = this.Dd.fullsizeAvatar(e);
                          r &&
                            r.avatar &&
                            r.avatar.photoId !== n &&
                            this.Dd.clearFullsizeAvatar(e);
                        }),
                        this.dispatch({
                          type: "AVATARS_UPDATED",
                          changed: e || null,
                          cleared: n || null,
                        });
                    },
                    openChatWithGroup: (t) => {
                      var e = t.group;
                      (0, gt.a)(this, e, "unread");
                    },
                    receiveChatState: (t) => {
                      var e = t.jid,
                        n = t.participant,
                        r = t.status;
                      (0, y.a)(this, e, n, r);
                    },
                    clearUserLastSeen: (t) => {
                      var e = t.jid;
                      (0, y.b)(this, e);
                    },
                    receivePresence: (t) => {
                      var e = t.jid,
                        n = t.type,
                        r = t.last;
                      (0, y.f)(this, e, n, r);
                    },
                    commsConnected: () => {
                      this.dispatch({ type: "COMMS_CONNECTED" }),
                        (0, y.c)(this),
                        lt() &&
                          (__LOG__(
                            2
                          )`Comms connected, clear timeout. Previous comms ${it}; onLine: ${navigator.onLine}`,
                          (it = !0),
                          clearTimeout(J),
                          st());
                    },
                    commsDisconnected: () => {
                      this.dispatch({
                        type: "COMMS_DISCONNECTED",
                        online: !lt() || navigator.onLine,
                      }),
                        (0, y.e)(),
                        lt() &&
                          (__LOG__(
                            2
                          )`Comms disconnected. Previous comms: ${it}; onLine: ${navigator.onLine}`,
                          it && ((it = !1), ot()));
                    },
                    kicked: (t) => {
                      var e = t.reason;
                      this.dispatch({ type: "KICKED", reason: e });
                    },
                    clockSkewUpdated: (t) => {
                      var e = t.clockSkew;
                      (0, m.z)(e);
                    },
                    serverPropsUpdated: (t) => {
                      var e = t.serverProps;
                      this.dispatch({ type: "SERVER_PROPS", serverProps: e });
                    },
                    msgMediaStatusUpdated: (t) => {
                      var e = t.msgId,
                        n = t.mediaStatus;
                      this.updateMediaStatus(e, n);
                    },
                    msgsDeleted: (t) => {
                      var e = t.chat,
                        n = t.msgIds,
                        r = t.reason;
                      this.Dt({ chat: e, msgIds: n, reason: r });
                    },
                    msgsDeletedFromManyChats: (t) => {
                      t.chats.forEach((t) => {
                        var e = t.chat,
                          n = t.msgIds,
                          r = t.reason;
                        return this.Dt({ chat: e, msgIds: n, reason: r });
                      }),
                        this.dispatch({ type: "UPDATE_STORAGE_TS" });
                    },
                    chatDeleted: (t) => {
                      var e = t.chatId,
                        n = this.Dd.deleteChat(e);
                      n && this.dispatch(n), Dt(e);
                    },
                    profilePicReceived: (t) => {
                      var e = t.image;
                      return n
                        .e(13)
                        .then(n.bind(null, 514))
                        .then((t) =>
                          t
                            .scaleDownProfilePictureThumb(e)
                            .then((t) => ({ croppedImage: t }))
                        );
                    },
                    ranOutOfStorage: () => {
                      this.Dg || this.openScreen("OUT_OF_SPACE_RECOVERY"),
                        (this.Dg = !0);
                    },
                    voipSetupDone: (t) => {
                      var e = t.inOngoingCall;
                      (V = (t) => {
                        this.Df.fireAndForget(
                          "voip",
                          "updateCallNetworkMedium",
                          { type: t }
                        );
                      }),
                        (F = z()),
                        V(F),
                        q ||
                          ((q = !0),
                          (function () {
                            var t;
                            null == (t = navigator.mozWifiManager) ||
                              t.addEventListener("statuschange", W);
                            var e = navigator.mozMobileConnections;
                            if (null != e)
                              for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                null != r &&
                                  r.addEventListener("datachange", W);
                              }
                          })()),
                        this.Db ||
                          this.dispatch({
                            type: "VOIP_SERVICE_SETUP_DONE",
                            inOngoingCall: e,
                          });
                    },
                    gdprReportUpdated: (t) => {
                      var e = t.gdprReport;
                      this.dispatch({
                        type: "GDPR_REPORT_UPDATED",
                        gdprReport: e,
                      });
                    },
                    gdprReportDownloaded: (t) => {
                      var e = t.result;
                      this.dispatch({
                        type: "GDPR_REPORT_DOWNLOADED",
                        result: e,
                      });
                    },
                    gdprReportDownloading: (t) => {
                      var e = t.percent;
                      this.dispatch({
                        type: "GDPR_REPORT_DOWNLOADING",
                        percent: e,
                      });
                    },
                    twoFactorReminderVerified: (t) => {
                      var e = t.success;
                      this.dispatch({
                        type: "TWO_FACTOR_VERIFICATION",
                        success: e,
                      });
                    },
                    callStateChanged: (t) => {
                      var e = t.state,
                        n = t.peerJid,
                        r = t.isCaller,
                        i = t.isLocallyMuted;
                      this.dispatch({
                        type: "CALL_STATE_CHANGED",
                        state: e,
                        peerJid: n,
                        isCaller: r,
                        isLocallyMuted: i,
                      });
                    },
                    callMuteStateChanged: (t) => {
                      var e = t.isMuted,
                        n = t.jid;
                      this.dispatch({
                        type: "CALL_MUTE_STATE_CHANGED",
                        isMuted: e,
                        jid: n,
                      });
                    },
                    callInterruptedStateChanged: (t) => {
                      var e = t.isInterrupted,
                        n = t.jid;
                      this.dispatch({
                        type: "CALL_INTERRUPTED_STATE_CHANGED",
                        isInterrupted: e,
                        jid: n,
                      });
                    },
                    callOfferNacked: (t) => {
                      var e = t.code,
                        n = t.jid;
                      this.dispatch({
                        type: "CALL_OFFER_NACKED",
                        code: e,
                        jid: n,
                      });
                    },
                    callDurationChanged: (t) => {
                      var e = t.duration;
                      this.dispatch({
                        type: "CALL_DURATION_CHANGED",
                        duration: e,
                      });
                    },
                    callEnded: () => {
                      this.dispatch({ type: "CALL_ENDED" });
                    },
                    callBusyReceived: () => {
                      this.dispatch({ type: "CALL_BUSY_RECEIVED" });
                    },
                    voipServiceDisconnected: () => {
                      this.dispatch({ type: "VOIP_SERVICE_DISCONNECTED" });
                    },
                    voipCallFailed: () => {
                      this.dispatch({ type: "CLOSE_CALL_SCREEN" }),
                        (0, c.e)({ title: 243, text: 242 });
                    },
                    groupInvitesRevoked: (t) => {
                      var e = {
                        type: "GROUP_INVITES_REVOKED",
                        groupJid: t.groupJid,
                        outgoing: t.outgoing,
                        revokes: t.revokes,
                      };
                      this.dispatch(e);
                    },
                    groupInviteCode: (t) => {
                      var e = t.groupJid,
                        n = t.code;
                      (0, L.b)(this, e, n);
                    },
                    groupInviteCodeReset: (t) => {
                      var e = t.groupJid;
                      (0, L.a)(this, e);
                    },
                    callLogsUpdated: (t) => {
                      var e = x(t.logs),
                        n = e.groups,
                        r = e.orderedGroupIds;
                      this.Dd.updateCallLogGroups(n, r),
                        this.dispatch({
                          type: "UPDATE_CALL_LOGS",
                          groups: n,
                          orderedGroupIds: r,
                          canBeSkipped: !0,
                        });
                    },
                    callMissed: (t) => {
                      var e = t.peerJid,
                        n = t.id,
                        r = (0, _.a)(this.getStoreState());
                      if (null != r) {
                        var i = r.contacts[e],
                          a = null != i ? i : { jid: e },
                          s = (0, y.i)() ? "short" : "alert";
                        (0, D.b)(a, n, s);
                      }
                    },
                    statusAuthorsLoaded: (t) => {
                      var e = t.authors,
                        n = t.me,
                        r = this.getStatusCache();
                      if (null == r)
                        return (
                          __LOG__(
                            4
                          )`Loaded status authors without a cache ready`,
                          void SEND_LOGS(
                            "backendInterface-statusAuthorsLoaded-noCache"
                          )
                        );
                      r.load(e, n),
                        this.dispatch({
                          type: "UPDATE_STATUS_DATA",
                          data: r.toStore(),
                        });
                      var i = (0, _.a)(this.getStoreState());
                      null != i && null != i.status && this.Dq(e);
                    },
                    statusAuthorMeUpdated: (t) => {
                      var e = t.author;
                      this.statusAuthorMeUpdated(e);
                    },
                    statusAuthorUpdated: (t) => {
                      var e = t.author;
                      this.statusAuthorUpdated(e);
                    },
                    statusAuthorsUpdated: (t) => {
                      t.authors.forEach((t) => {
                        this.statusAuthorUpdated(t);
                      });
                    },
                    statusAuthorsCleared: (t) => {
                      var e = t.authors;
                      this.statusAuthorsCleared(e);
                    },
                    statusSettingsUpdated: (t) => {
                      var e = t.settings;
                      this.dispatch({
                        type: "STATUS_SETTINGS_UPDATED",
                        settings: e,
                      });
                    },
                    statusLastUnreadMsgLoaded: (t) => {
                      var e = t.lastUnreadMsg;
                      this.dispatch({
                        type: "STATUS_LAST_UNREAD_MSG",
                        lastUnreadMsg: e,
                      });
                    },
                    statusMsgsUpdated: (t) => {
                      var e = t.msgs,
                        n = t.author;
                      n &&
                        ("@me" === n.jid
                          ? this.statusAuthorMeUpdated(n)
                          : this.statusAuthorUpdated(n));
                      var r = this.getStatusCache();
                      null != r &&
                        (r.statusUpdated(e),
                        this.dispatch({
                          type: "STATUS_MSGS_UPDATED",
                          msgs: e,
                        }));
                    },
                    statusMsgRemoved: (t) => {
                      var e = t.statusMsgId,
                        n = t.author;
                      null != n && this.statusAuthorMeUpdated(n),
                        this.dispatch({
                          type: "STATUS_MSG_REMOVED",
                          statusId: e,
                        });
                    },
                    statusReceiptsUpdated: (t) => {
                      var e = t.author,
                        n = t.receipts;
                      this.statusAuthorMeUpdated(e),
                        this.dispatch({
                          type: "STATUS_RECEIPTS_UPDATED",
                          receipts: n,
                        });
                    },
                    aboutUpdated: (t) => {
                      var e = t.about;
                      this.dispatch({ type: "ABOUT_UPDATED", content: e });
                    },
                    identityVerificationChanged: (t) => {
                      var e = t.jid;
                      this.dispatch({
                        type: "IDENTITY_VERIFICATION_CHANGED",
                        jid: e,
                      });
                    },
                    voipStatusChanged: (t) => {
                      var e = t.hasVoip,
                        n = t.voipCallEnabled;
                      this.dispatch({
                        type: "VOIP_AVAILABILITY_CHANGED",
                        available: e && n,
                      });
                    },
                    hsmButtonPressed: (t) => {
                      var e = t.msg;
                      this.Dd.updateMsg(e);
                      var n = { type: "HSM_BUTTON_PRESSED", msg: e };
                      this.dispatch(n);
                    },
                    uiEphemeralTimestamp(t) {
                      var e = t.validUntil;
                      (0, et.a)(e);
                    },
                    refreshRecentGifs: () => {
                      this.dispatch({ type: "GIF_RECENT_REFRESH" });
                    },
                    addFavoriteGifs: (t) => {
                      var e = t.gifs;
                      this.dispatch({ type: "GIF_FAVORITE_ADDED", gifs: e });
                    },
                    removeFavoriteGif: (t) => {
                      var e = t.plaintextHash;
                      this.dispatch({
                        type: "GIF_FAVORITE_REMOVED",
                        plaintextHash: e,
                      });
                    },
                    viewOnceExpired: (t) => {
                      var e,
                        n = t.expiredMsgs,
                        r = t.updatedChats,
                        i = (0, _.a)(this.getStoreState()),
                        a =
                          null == i || null == (e = i.msglist)
                            ? void 0
                            : e.chat.id;
                      r.forEach((t) => this.Dd.updateOrAddChat(t));
                      var s = this.Dd.handleExpiredViewOnceMsgs(n, a);
                      this.unlinkViewOnceMsgsMedia(s.map((t) => t.id)),
                        this.dispatch({
                          type: "RECEIVED_MSGS",
                          newMsgs: [],
                          changedMsgs: s.map((t) => ({ msg: t, recent: !1 })),
                          affectedChats: r,
                        });
                    },
                    syncAbCacheFromStorage: () => (0, ct.e)(),
                    pinAbProp: (t) => {
                      var e = t.key,
                        n = t.val;
                      (0, ct.d)(e, n);
                    },
                    tosGatingStatusChanged: (t) => {
                      var e = t.tosAccepted;
                      this.dispatch({
                        type: "TOS_GATING_CHANGED",
                        tosAccepted: e,
                      });
                    },
                  },
                  (0, ht.a)(this),
                  (0, _t.a)(this),
                  (0, vt.a)(this),
                  (0, ft.a)(this),
                  {
                    companionsLoaded: (t) => {
                      var e = t.companions;
                      this.dispatch({
                        type: "COMPANIONS_LOADED",
                        companions: e,
                      });
                      var n = (0, _.a)(this.getStoreState());
                      if (n) {
                        var r = n.screens[n.screens.length - 1];
                        r &&
                          "ADD_COMPANION_DEVICE" === r.screen.type &&
                          this.Dn(r.id);
                      }
                    },
                    companionRegistrationFailed: (t) => {
                      var e = t.error,
                        n = (0, _.a)(this.getStoreState());
                      if (n) {
                        var r = n.screens[n.screens.length - 1];
                        r &&
                          "ADD_COMPANION_DEVICE" === r.screen.type &&
                          (this.Dn(r.id),
                          (0, c.e)({ title: 243, text: e ? 152 : 242 }));
                      }
                    },
                    trustedContactTokenUpdatedForJid: (t) => {
                      var e = t.jid;
                      (0, y.g)(this, e);
                    },
                    pastParticipantsUpdated: (t) => {
                      var e = t.updated,
                        n = this.Dd.handlePastParticipantsUpdated(e);
                      if (0 !== n.length) {
                        var r = {
                          type: "RECEIVED_MSGS",
                          newMsgs: [],
                          changedMsgs: [],
                          affectedChats: n,
                        };
                        this.dispatch(r);
                      }
                    },
                  }
                )
              );
          }
          saveImageToStorage(t) {
            var e = (0, R.k)((0, H.g)("image/jpeg"));
            this.spinUntilReady(
              (0, $.g)((0, $.h)(t))
                .then((t) => (0, M.o)(t, e))
                .then(() => () => (0, d.a)(412))
                .catch(() => () => {
                  (0, c.e)({ title: 411, text: 410 });
                }),
              413
            );
          }
          isStarredIndexMissing() {
            var t = (0, _.a)(this.getStoreState());
            return !!t && !!t.starredIndexMissing;
          }
          getExpiredMessages() {
            return this.Df.sendAndReceive("backend", "getExpiredMessages", {});
          }
          deleteExpiredMsgs(t, e) {
            return this.Df.sendAndReceive("backend", "deleteExpiredMsgs", {
              chatId: t,
              msgIds: e,
            });
          }
          getNextExpirationTimestamp() {
            return this.Df.sendAndReceive(
              "backend",
              "getNextExpirationTimestamp",
              {}
            );
          }
        };
      function wt(t) {
        return null == t
          ? { quoted: void 0, remoteJid: void 0 }
          : null != t && "reply" === t.type
          ? {
              quoted: {
                msgId: t.quotedMsg.id,
                remoteJid: t.quotedMsg.remoteJid,
              },
              remoteJid: void 0,
            }
          : (t.type, { quoted: void 0, remoteJid: t.groupJid });
      }
      function It(t) {
        var e = (0, _.a)(t.getStoreState());
        return null != e && !e.connected;
      }
      function kt(t, e) {
        return !!It(t) && ((0, c.e)({ title: 243, text: e }), !0);
      }
      function Dt(t) {
        (0, w.c)(t)
          .then((t) => t.forEach((t) => t.close()))
          .catch((t) => {
            __LOG__(4)`_deleteChatNotifications sw error: ${t}`;
          }),
          (0, pt.a)(t);
      }
      function Nt(t, e) {
        switch (e.type) {
          case "CHAT_MODIFIED":
          case "DID_READ_CHAT":
          case "MSGS_DELETED":
          case "MSG_ACK":
            return t.id !== e.chat.id ? t : e.chat;
          case "MEDIA_UPDATED":
          case "CHAT_ADDED":
          case "RECEIVED_MSGS":
            for (var n = e.affectedChats, r = -1, i = 0; i < n.length; i++)
              n[i].id === t.id && (r = i);
            return -1 === r ? t : n[r];
          default:
            return t;
        }
      }
      function Gt(t, e) {
        switch (e.type) {
          case "MEDIA_UPDATED":
            return e.msgs.find((e) => e.id === t.id) || t;
          case "MSG_ACK":
            return null == e.ackedMsg || t.id !== e.ackedMsg.id
              ? t
              : e.ackedMsg;
          case "MSGS_DELETED":
            return e.msgIds.includes(t.id) ? null : t;
          case "RECEIVED_MSGS":
            var n = e.changedMsgs.find((e) => e.msg.id === t.id);
            return null != n ? n.msg : t;
          case "MSG_UPDATED":
          case "HSM_BUTTON_PRESSED":
            return e.msg.id === t.id ? e.msg : t;
          default:
            return t;
        }
      }
      var Mt = n(196);
      function Rt(t, e) {
        return t
          ? t.older === e && t.newer === e
            ? null
            : t.older === e
            ? t.newer
              ? { newer: t.newer }
              : null
            : t.newer === e
            ? t.older
              ? { older: t.older }
              : null
            : t
          : null;
      }
      var Pt = { type: "filler", key: "filler", grouping: 0, msg: void 0 },
        Ut = {
          type: "loading",
          subtype: "top",
          key: "loadingTop",
          grouping: 0,
          msg: void 0,
        },
        jt = {
          type: "loading",
          subtype: "center",
          key: "loadingCenter",
          grouping: 0,
          msg: void 0,
        },
        xt = {
          type: "loading",
          subtype: "bottom",
          key: "loadingBottom",
          grouping: 0,
          msg: void 0,
        },
        Ft = { type: "composeBox", key: v.h, grouping: 0, msg: void 0 },
        Vt = { type: "report", key: "report", grouping: 0, msg: void 0 },
        Bt = {
          type: "addContact",
          key: "addContact",
          grouping: 0,
          msg: void 0,
        },
        $t = {
          type: "groupPrivacy",
          key: "groupPrivacy",
          grouping: 0,
          msg: void 0,
        };
      function Ht(t) {
        var e = [];
        return (
          "ONE_TO_ONE" === t.type
            ? (e.push(Bt), t.notStarted || e.push(Vt))
            : (e.push(Vt), e.push($t)),
          e
        );
      }
      function zt(t, e) {
        var n,
          r = t.chat.msgInfo;
        t.selectAnchor &&
          "beginning" !== t.anchor &&
          (n = { key: t.anchor, msgId: t.anchor });
        var i = {
          chat: t.chat,
          anchor: t.anchor,
          loading: t.loading,
          viewport: {
            desiredRange: t.desiredRange,
            loadedRange: { start: 0, end: 0 },
            msgIds: [],
          },
          items: [],
          msgs: {},
          selectedItem: n,
          opening: !0,
        };
        return (
          t.withComposeBoxOpened && (i.withComposeBoxOpened = !0),
          0 === r.msgCount &&
            ((i.anchor = "beginning"),
            (i.newestIndex = 0),
            (i.oldestIndex = -1)),
          r.oldestUnread &&
            (i.unreadBar = { msgId: r.oldestUnread, count: r.unreadMsgCount }),
          t.preloaded ? Jt(i, i.loading, t.preloaded, e) : (qt(i, e), i)
        );
      }
      function Wt(t, e, n) {
        var r,
          i,
          a,
          s,
          u = Object.assign({}, t, {
            loading:
              ((r = t.loading),
              (i = e.loading),
              (a =
                (null == i ? void 0 : i.older) ||
                (null == r ? void 0 : r.older)),
              (s =
                (null == i ? void 0 : i.newer) ||
                (null == r ? void 0 : r.newer)),
              a && s
                ? { older: a, newer: s }
                : a
                ? { older: a }
                : s
                ? { newer: s }
                : null),
            viewport: Object.assign({}, t.viewport, {
              desiredRange: e.desiredRange,
            }),
          });
        return e.preloaded ? Jt(u, u.loading, e.preloaded, n) : (qt(u, n), u);
      }
      function Jt(t, e, n, r) {
        var i,
          a,
          s,
          u,
          o,
          l = t.viewport,
          c = l.desiredRange,
          d = l.loadedRange,
          h = d.start,
          v = d.end,
          f = l.msgIds,
          p = t.msgs,
          _ = n.newestIndex,
          m = void 0 === _ ? t.newestIndex : _,
          g = n.oldestIndex,
          b = void 0 === g ? t.oldestIndex : g,
          S = n.range,
          E = S.start,
          O = S.end,
          A = n.msgs,
          y = n.unreadBar,
          C = void 0 === y ? t.unreadBar : y;
        if (E > v || O < h) (o = !1), (s = h), (u = v), (i = f), (a = p);
        else {
          (o = !0),
            (i = []),
            (a = {}),
            (s = Math.max(c.start, Math.min(E, h))),
            (u = Math.min(c.end, Math.max(O, v)));
          for (var L = s; L < u; L++)
            if (E <= L && L < O) {
              var T = A[L - E];
              i.push(T.id), (a[T.id] = T);
            } else {
              var w = f[L - h];
              i.push(w), (a[w] = p[w]);
            }
        }
        var I = {
          chat: t.chat,
          anchor: t.anchor,
          loading: e,
          unreadBar: C && C.count > 0 ? C : void 0,
          newestIndex: m,
          oldestIndex: b,
          viewport: {
            desiredRange: c,
            loadedRange: { start: s, end: u },
            msgIds: i,
          },
          msgs: a,
          items: t.items,
          selectedItem: t.selectedItem,
        };
        return (
          t.withComposeBoxOpened && (I.withComposeBoxOpened = !0),
          t.opening && (I.opening = !0),
          o && qt(I, r),
          I
        );
      }
      function Kt(t, e, n) {
        for (var r = t.msgs, i = null, a = 0; a < e.length; a++) {
          var s = e[a];
          r.hasOwnProperty(s.id) && (i || (i = (0, b.v)(r)), (i[s.id] = s));
        }
        if (!i) return t;
        var u = (0, b.j)(t, { msgs: i });
        return qt(u, n), u;
      }
      function qt(t, e) {
        var n = t.msgs,
          r = t.viewport,
          i = t.unreadBar,
          a = t.loading,
          s = t.chat,
          u = r.msgIds,
          o = (0, B.b)(t.chat, e.user.jid, e.contacts);
        if (0 !== s.msgInfo.msgCount) {
          if (0 === u.length)
            return (
              a ||
                __LOG__(3)`mutateInMsgListItems no known msgs yet not loading`,
              void (t.items = [jt])
            );
          var l = "GROUP" === s.type ? f.h.SHOW_AUTHOR : 0,
            c = u.length - 1,
            d = n[u[c]];
          if (d) {
            var h = d.ts,
              v = !0,
              p = [],
              _ = null,
              g = 0,
              b = 0,
              S = (t) => {
                (_ = null), (g = 0), b++, p.push(t);
              },
              E = (t) => {
                if (!o || "linkPreview" !== t.type) {
                  var e = 1;
                  "image" === t.type ||
                  "vcard" === t.type ||
                  null != t.msg.forwarded
                    ? (e = 3)
                    : "text" === t.type &&
                      (e = Math.ceil(t.content.length / 100)),
                    _
                      ? _.msg === t.msg
                        ? ((g += e),
                          (_.grouping |= f.h.JOINED_WITH_NEXT),
                          (t.grouping = f.h.JOINED_WITH_PREV))
                        : _.msg.meta.author === t.msg.meta.author
                        ? ((g += e) > 3 && ((t.grouping |= l), (g = e)),
                          (_.grouping |= f.h.GROUPED_WITH_NEXT),
                          (t.grouping |= f.h.GROUPED_WITH_PREV))
                        : ((g = e), (t.grouping = l))
                      : ((g = e), (t.grouping = l)),
                    (b += e),
                    (_ = t),
                    p.push(t);
                }
              };
            for (
              a && a.older && S(Ut),
                void 0 !== t.oldestIndex &&
                  t.oldestIndex < r.loadedRange.end &&
                  (h <= (0, m.r)() &&
                    S({
                      type: "datetime",
                      key: "datetop",
                      grouping: 0,
                      msg: void 0,
                      time: h,
                    }),
                  (v = !1));
              d;

            )
              if (
                (v &&
                  S({
                    type: "datetime",
                    key: "date-" + d.id,
                    grouping: 0,
                    msg: void 0,
                    time: h,
                  }),
                i &&
                  i.msgId === d.id &&
                  S({
                    type: "unreadBar",
                    key: "unreadBar",
                    grouping: 0,
                    msg: void 0,
                    count: i.count,
                  }),
                (0, Mt.e)(d, l, S, E),
                c > 0)
              ) {
                do {
                  d = n[u[--c]];
                } while (c > 0 && !d);
                d && ((v = !(0, m.x)(h, d.ts)), (h = d.ts));
              } else d = null;
            a && a.newer && S(xt),
              void 0 !== t.newestIndex &&
                t.newestIndex >= r.loadedRange.start &&
                (o && Ht(s).forEach((t) => S(t)), b < 10 && S(Pt), S(Ft)),
              (t.items = p);
          }
        } else t.items = o ? [...Ht(s), Pt, Ft] : [Pt, Ft];
      }
      function Yt(t, e, n, r) {
        var i,
          a = t.msgs,
          s = t.msgs[n],
          u = s && Gt(s, e);
        if (
          (u === s ? (i = a) : ((i = (0, b.v)(a)), u && (i[u.id] = u)), a === i)
        )
          return r;
        var o = (0, b.j)(t, { msgs: i });
        return qt(o, r), Object.assign({}, r, { msglist: o });
      }
      function Xt(t, e) {
        return e < 0
          ? { start: t.start + 1, end: t.end }
          : { start: t.start, end: t.end - 1 };
      }
      var Qt = n(197);
      function Zt(t, e) {
        return t[e] || 0;
      }
      function te(t, e) {
        return (
          Math.round((1e4 * Zt(t.currentTimes, e.msgId)) / e.duration) / 100
        );
      }
      function ee(t, e) {
        if (null != t[e]) {
          var n = Object.assign({}, t);
          return delete n[e], n;
        }
        return t;
      }
      var ne = n(247),
        re = "CLOSE_SCREEN";
      function ie(t, e, n, r) {
        var i, a, s, u;
        if ("KICKED" === r.type) return re;
        if ("CLOSE_SCREEN" === r.type && n === r.id)
          return r.closeScreensAbove ? "CLOSE_ALL_SCREENS_ABOVE" : re;
        if ("UPDATE_SCREEN" === r.type && n === r.id) return r.screen;
        if ("CHAT_DELETED" === r.type && (0, f.F)(t, e, r.chatId)) return re;
        switch (e.type) {
          case "MSG_INFO":
            var o = e;
            "LOADED_MSG_INFO" === r.type && r.msgId === e.props.msg.id
              ? (o = ae(e, { msgInfo: r.msgInfo }))
              : "LOADED_MSG_REACTIONS" === r.type &&
                r.msgId === e.props.msg.id &&
                (o = ae(e, { msgReactions: r.msgReactions }));
            var l = Gt(o.props.msg, r);
            return l === o.props.msg ? o : l ? ae(o, { msg: l }) : re;
          case "CONTACT_INFO":
            if (!e.props.chat) return e;
            if ("CHAT_DELETED" === r.type && r.chatId === e.props.chat.id)
              return ae(e, { chat: null });
            var c = Nt(e.props.chat, r);
            return c === e.props.chat || "ONE_TO_ONE" !== c.type
              ? e
              : ae(e, { chat: c });
          case "GROUP_INFO_CHANGE_SUBJECT":
          case "GROUP_INFO_CHANGE_DESCRIPTION":
          case "GROUP_INFO_PARTICIPANTS":
          case "GROUP_INFO_PAST_PARTICIPANTS":
          case "GROUP_INFO_INVITATIONS":
          case "GROUP_INFO":
            var d = Nt(e.props.chat, r);
            return d === e.props.chat || "GROUP" !== d.type
              ? e
              : ae(e, { chat: d });
          case "GROUP_SETTINGS":
          case "GROUP_SETTINGS_EDIT_INFO":
            var h = Nt(e.props.chat, r);
            return h === e.props.chat
              ? e
              : "GROUP" === h.type && h.groupInfo.isAdmin
              ? ae(e, { chat: h })
              : re;
          case "GROUP_INVITE_LINK":
            var v = Nt(e.props.chat, r);
            if ("GROUP" !== v.type) return re;
            if (v !== e.props.chat && !v.groupInfo.isAdmin) return re;
            switch (r.type) {
              case "GROUP_INVITE_CODE_CHANGED":
                return r.groupJid !== v.jid ? e : ae(e, { inviteCode: r.code });
              case "GROUP_INVITE_CODE_RESET":
                return r.groupJid !== v.jid ? e : re;
              default:
                return e;
            }
          case "MSG_IMAGE_VIEW":
            switch (r.type) {
              case "MEDIA_UPDATED":
                var p = r.msgs.find((t) => t.id === e.props.msgId);
                if (
                  p &&
                  p.content.mediaStatus &&
                  "ready" !== p.content.mediaStatus.type
                )
                  return re;
                break;
              case "MSGS_DELETED":
                if (r.msgIds.includes(e.props.msgId)) return re;
                break;
              case "RECEIVED_MSGS":
                var _ = r.changedMsgs.find((t) => t.msg.id === e.props.msgId);
                if (_ && "revoked" === _.msg.content.type) return re;
            }
            return e;
          case "AVATAR_IMAGE_VIEW":
            if ("FULLSIZE_AVATAR_LOADED" === r.type && r.jid === e.props.jid)
              return ae(e, {
                avatarStatus: { status: "loaded", avatar: r.avatar },
              });
            if (
              "FULLSIZE_AVATAR_STARTED_LOADING" === r.type &&
              r.jid === e.props.jid
            )
              return ae(e, { avatarStatus: { status: "loading" } });
            if ("AVATARS_UPDATED" === r.type && r.changed) {
              var g = e.props.jid,
                S = e.props.avatarStatus,
                E = r.changed.find((t) => {
                  var e = t.jid;
                  return g === e;
                });
              if (E && S) {
                if (null == E.photoId)
                  return ae(e, {
                    avatarStatus: { status: "loaded", avatar: null },
                  });
                if (S.avatar && S.avatar.photoId !== E.photoId)
                  return ae(e, { avatarStatus: null });
              }
            }
            return e;
          case "FEATURED_MESSAGES":
            switch (r.type) {
              case "LOAD_FEATURED_MESSAGES":
                return r.requestId !==
                  (null == (i = e.props.loading) ? void 0 : i.older)
                  ? ae(e, { loading: { older: r.requestId } })
                  : e;
              case "LOADED_FEATURED_MESSAGES":
                var O,
                  A = Rt(e.props.loading, r.requestId);
                if (A === e.props.loading) return e;
                var y = {};
                if (
                  ((y.loading = A),
                  (null == A ? void 0 : A.older) !==
                    (null == (O = e.props.loading) ? void 0 : O.older))
                ) {
                  var C =
                    ((s = r.msgs),
                    (u = []),
                    s.forEach((t) => {
                      var e = oe(t);
                      Array.prototype.push.apply(u, e);
                    }),
                    u);
                  (y.items = e.props.items.concat(C)),
                    r.msgs.length < r.askedFor && (y.allLoaded = !0);
                }
                return ae(e, y);
              case "RECEIVED_MSGS":
                var L = [],
                  T = r.changedMsgs,
                  w = {};
                T.forEach((t) => {
                  w[t.msg.id] = t.msg;
                });
                var I = !1;
                return (
                  e.props.items.forEach((t) => {
                    var e = w[t.msg.id];
                    if (e) {
                      if (
                        ((I = !0), "revoked" !== e.content.type && e.starred)
                      ) {
                        var n = oe(e);
                        L.push(...n);
                      }
                    } else L.push(t);
                  }),
                  I ? ae(e, { items: L }) : e
                );
              case "MSGS_DELETED":
                if (null != e.props.chat && e.props.chat.id !== r.chat.id)
                  return e;
                var k = new Set(r.msgIds),
                  D = e.props.items.filter((t) => !k.has(t.msg.id));
                return D.length !== e.props.items.length
                  ? ae(e, { items: D })
                  : e;
              case "MEDIA_UPDATED":
                var N,
                  G = null == (N = e.props.chat) ? void 0 : N.id;
                if (null != G && !r.affectedChats.some((t) => t.id === G))
                  return e;
                var M,
                  R = e.props.items,
                  P = !1,
                  U = (0, b.t)(r.msgs, (t) => t.id),
                  j = [];
                return (
                  R.forEach((t) => {
                    var e = t.msg.id,
                      n = U[e];
                    if (null != n) {
                      if (e !== M) {
                        P = !0;
                        var r = oe(n);
                        Array.prototype.push.apply(j, r), (M = e);
                      }
                    } else j.push(t);
                  }),
                  P ? ae(e, { items: j }) : e
                );
              case "MSG_ACK":
                var x,
                  F = r.ackedMsg,
                  V = null == (x = e.props.chat) ? void 0 : x.id;
                if ((void 0 !== V && V !== r.chat.id) || null == F) return e;
                var B = [];
                return (
                  e.props.items.forEach((t) => {
                    t.msg.id === F.id ? B.push(...oe(F)) : B.push(t);
                  }),
                  ae(e, { items: B })
                );
              default:
                return e;
            }
          case "GALLERY_MEDIA":
          case "GALLERY_MEDIA_FOR_STORAGE_SETTING":
            switch (r.type) {
              case "LOAD_MEDIA_RANGE":
                return ae(e, { loading: !0 });
              case "GALLERY_SYNC":
                var $ = r.selectIndex,
                  H = r.medias;
                return null != H
                  ? 0 === H.length || $ > H.length
                    ? (__LOG__(
                        3
                      )`Media list empty or select index of out bounds`,
                      re)
                    : ae(e, { selectIndex: $, medias: H, loading: !1 })
                  : ae(e, { selectIndex: $, loading: !1 });
              case "RECEIVED_MSGS":
                var z = e.props.chatId;
                if (null != z && !r.affectedChats.some((t) => t.id === z))
                  return e;
                var W = e.props,
                  J = W.selectIndex,
                  K = W.medias;
                if (0 === K.length || J > K.length) return e;
                var q = !1,
                  Y = e.props.medias[e.props.selectIndex];
                return (
                  r.changedMsgs.forEach((t) => {
                    "revoked" === t.msg.content.type &&
                      t.msg.id === Y.msg.id &&
                      (q = !0);
                  }),
                  q ? re : e
                );
              default:
                return e;
            }
          case "MEDIA_DRAWER":
            switch (r.type) {
              case "LOAD_MEDIA_RANGE":
                return r.requestId !==
                  (null == (a = e.props.loading) ? void 0 : a.older)
                  ? ae(e, { loading: { older: r.requestId } })
                  : e;
              case "LOADED_MEDIA_RANGE":
                var X,
                  Q = Rt(e.props.loading, r.requestId);
                if (Q === e.props.loading) return e;
                var Z = {};
                Z.loading = Q;
                var tt = r.msgs.map(ue);
                return (
                  (null == Q ? void 0 : Q.older) !==
                    (null == (X = e.props.loading) ? void 0 : X.older) &&
                    ((Z.medias = e.props.medias.concat(tt)),
                    tt.length < r.askedFor && (Z.allLoaded = !0)),
                  ae(e, Z)
                );
              case "RECEIVED_MSGS":
                var et,
                  nt,
                  rt =
                    null == (et = e.props.useCase) || null == (nt = et.chat)
                      ? void 0
                      : nt.id;
                if (null != rt && !r.affectedChats.some((t) => t.id === rt))
                  return e;
                var it = !1,
                  at = r.changedMsgs,
                  st = {};
                at.forEach((t) => {
                  st[t.msg.id] = t.msg;
                });
                var ut = [];
                return (
                  e.props.medias.forEach((t) => {
                    var e = st[t.msg.id];
                    if (e) {
                      if (((it = !0), "revoked" !== e.content.type)) {
                        var n = (0, b.j)(t.msg, {
                          starred: e.starred,
                          keptInfo: e.keptInfo,
                        });
                        ut.push((0, b.j)(t, { msg: n }));
                      }
                    } else ut.push(t);
                  }),
                  it ? ae(e, { medias: ut }) : e
                );
              case "DELETE_MSGS_STARTED":
                var ot = r.msgIds.reduce(
                    (t, e) => ((t[e.toString()] = !0), t),
                    {}
                  ),
                  lt = e.props.medias.filter((t) => ot[t.msg.id]);
                return lt.length > 0
                  ? ae(e, { deleting: e.props.deleting.concat(lt) })
                  : e;
              case "MEDIA_UPDATED":
                var ct,
                  dt,
                  ht =
                    null == (ct = e.props.useCase) || null == (dt = ct.chat)
                      ? void 0
                      : dt.id;
                if (null != ht && !r.affectedChats.some((t) => t.id === ht))
                  return e;
                var vt = e.props.medias,
                  ft = !1,
                  pt = vt.map((t) => {
                    var e = Gt(t.msg, r);
                    return e && e !== t.msg ? ((ft = !0), ue(e)) : t;
                  });
                return ft ? ae(e, { medias: pt }) : e;
              case "MSGS_DELETED":
                var _t,
                  mt = null == (_t = e.props.useCase.chat) ? void 0 : _t.id;
                if (null != mt && r.chat.id !== mt) return e;
                var gt = r.msgIds.reduce(
                    (t, e) => ((t[e.toString()] = !0), t),
                    {}
                  ),
                  bt = e.props.deleting.filter((t) => !gt[t.msg.id]),
                  St = e.props.medias.filter((t) => !gt[t.msg.id]);
                return bt.length !== e.props.deleting.length ||
                  St.length !== e.props.medias.length
                  ? ae(e, { medias: St, deleting: bt })
                  : e;
              default:
                return e;
            }
          case "STATUS_SENT_LIST":
            switch (r.type) {
              case "STATUS_SENT_INFO_LOADED":
                return e.props.requestId === r.requestId
                  ? ae(e, { requestId: null, infos: r.infos })
                  : e;
              case "STATUS_RECEIPTS_UPDATED":
                var Et = e.props.infos;
                if (!Et) return e;
                var Ot = r.receipts,
                  At = {},
                  yt = !1;
                return (
                  (0, b.x)(Ot).forEach((t) => {
                    var e = Ot[t],
                      n = Et[t];
                    e && n && ((yt = !0), (At[t] = (0, b.j)(n, { acks: e })));
                  }),
                  yt ? ae(e, { infos: (0, b.j)(Et, At) }) : e
                );
              default:
                return e;
            }
          case "STATUS_READ_ME":
          case "STATUS_READ_OTHERS":
            switch (r.type) {
              case "STATUS_LOADING":
                var Ct = {};
                return (
                  r.statuses.forEach((t) => {
                    Ct[t] = "LOADING";
                  }),
                  le(e, Ct)
                );
              case "STATUS_UPDATED":
                var Lt = {};
                return (
                  r.statuses.forEach((t) => {
                    Lt[t.id] = t;
                  }),
                  le(e, Lt)
                );
              case "STATUS_MSGS_UPDATED":
                var Tt = {};
                return (
                  r.msgs.forEach((t) => {
                    Tt[t.id] = t;
                  }),
                  le(e, Tt)
                );
              case "STATUS_MEDIA_UPDATED":
                var wt = e.props.statuses[r.statusId];
                return null == wt ||
                  "LOADING" === wt ||
                  "text" === wt.content.type
                  ? e
                  : ae(e, {
                      statuses: Object.assign({}, e.props.statuses, {
                        [r.statusId]: Object.assign({}, wt, {
                          content: (0, b.j)(wt.content, {
                            mediaStatus: r.mediaStatus,
                          }),
                        }),
                      }),
                    });
              default:
                return e;
            }
          case "IDENTITY_VERIFICATION_SCREEN":
            switch (r.type) {
              case "IDENTITY_VERIFICATION_CHANGED":
                return r.jid === e.props.jid
                  ? ae(e, { update: (0, m.D)() })
                  : e;
            }
            return e;
          case "EPHEMERAL_SETTINGS":
            var It = Nt(e.props.chat, r);
            return (0, ne.a)(It, t.contacts) ? ae(e, { chat: It }) : re;
          case "SEND_GIF":
            switch (r.type) {
              case "GIF_RECENT_REFRESH":
                return ae(e, { refreshRecentGif: (0, m.D)() });
              case "GIF_FAVORITE_ADDED":
                return ae(e, { lastAddedFavoriteGifs: r.gifs });
              case "GIF_FAVORITE_REMOVED":
                return ae(e, { lastRemovedFavoriteGif: r.plaintextHash });
              default:
                return e;
            }
          case "SETTINGS_COMPANION_DEVICES":
            switch (r.type) {
              case "COMPANIONS_LOADED":
                return ae(e, { companions: r.companions });
              default:
                return e;
            }
          case "COMMUNITY_HOME":
            var kt = e.props.info.jid;
            switch (r.type) {
              case "UPDATE_COMMUNITY_SUBGROUPS":
                return null == kt || (kt && kt === r.jid)
                  ? ae(e, { subGroups: r.subGroups })
                  : e;
              default:
                return e;
            }
          case "POLL_RESULTS":
            return "LOADED_POLL_RESULTS" === r.type &&
              r.pollMsgId === e.props.pollMeta.msgId
              ? "error" === r.pollResults
                ? re
                : ae(e, { pollResults: r.pollResults })
              : e;
          default:
            return e;
        }
      }
      function ae(t, e) {
        return (0, b.j)(t, { props: (0, b.j)(t.props, e) });
      }
      function se(t) {
        return "ready" === t.type ? t.ref : null;
      }
      function ue(t) {
        var e = t.content;
        switch (e.type) {
          case "image":
          case "video":
          case "gif":
            var n = se(e.mediaStatus);
            return n
              ? { type: "success", msg: t, contentRef: n, content: e }
              : (__LOG__(
                  4
                )`Wrong media status for media drawer: ${e.mediaStatus.type}`,
                { type: "failure", msg: t });
          case "voice":
            if (e.isPtt)
              return (
                __LOG__(4)`PTT should not be displayed in media drawer`,
                { type: "failure", msg: t }
              );
            var r = se(e.mediaStatus);
            return r
              ? { type: "success", msg: t, contentRef: r, content: e }
              : (__LOG__(
                  4
                )`Wrong media status for media drawer: ${e.mediaStatus.type}`,
                { type: "failure", msg: t });
          case "rich_hsm":
            var i = e.richContent;
            if (!i)
              return (
                __LOG__(
                  4
                )`Plain text HSMs should not be displayed in media drawer`,
                { type: "failure", msg: t }
              );
            if ("image" === i.type || "video" === i.type) {
              var a = se(i.mediaStatus);
              return a
                ? { type: "success", msg: t, contentRef: a, content: i }
                : (__LOG__(
                    4
                  )`Wrong media status for media drawer: ${i.mediaStatus.type}`,
                  { type: "failure", msg: t });
            }
            return (
              i.type,
              __LOG__(4)`Wrong rich HSM type for media drawer: ${i.type}`,
              { type: "failure", msg: t }
            );
          default:
            return (
              __LOG__(4)`Wrong msg type for media drawer: ${e.type}`,
              { type: "failure", msg: t }
            );
        }
      }
      function oe(t) {
        var e = [],
          n = null;
        return (
          (0, Mt.e)(
            t,
            0,
            () => {},
            (t) => {
              ("richHsmButton" === t.type &&
                "quick_reply" === t.content.type) ||
                (null != n &&
                  ((n.grouping |= f.h.JOINED_WITH_NEXT),
                  (t.grouping |= f.h.JOINED_WITH_PREV)),
                (n = t),
                e.push(t));
            }
          ),
          e
        );
      }
      function le(t, e) {
        var n = (0, b.j)(t.props.statuses, e);
        return "STATUS_READ_ME" === t.type
          ? ae(t, { authorMe: ce(t.props.authorMe, e), statuses: n })
          : ae(t, {
              authors: t.props.authors.map((t) => ce(t, e)),
              statuses: n,
            });
      }
      function ce(t, e) {
        return (0, b.j)(t, {
          msgs: t.msgs.map((t) => {
            var n = e[t.id];
            return n && "LOADING" !== n ? (0, b.j)(t, { ack: n.ack }) : t;
          }),
        });
      }
      var de = n(42);
      function he(t) {
        var e = t.authors,
          n = t.sections,
          r = n.recent[0],
          i = e.get(r);
        if (i) {
          var a = ve(i);
          if ("@psa" === r) {
            var s = n.recent[1],
              u = e.get(s);
            if (u) {
              var o = ve(u);
              return null != a && null != o ? (a.ts > o.ts ? a : o) : a || o;
            }
          }
          return a;
        }
      }
      function ve(t) {
        if (t.msgs.length < 1) return null;
        var e = t.msgs[t.msgs.length - 1];
        return (0, de.i)(e.ack)
          ? null
          : { msgId: e.id, ts: e.ts, campaignDuration: e.campaignDuration };
      }
      function fe(t) {
        if (null == t.calls) return t;
        var e = Object.assign({}, t);
        return delete e.calls, e;
      }
      var pe = n(171);
      function _e(t, e) {
        var n = (function t(e, n, r) {
          switch (n.type) {
            case "MSGS_DELETED":
              var i,
                a = null == (i = (0, pe.c)(e, n.chat.jid)) ? void 0 : i.quote;
              return null == a || "reply" !== a.type
                ? e
                : n.msgIds.includes(a.quotedMsg.id)
                ? t(e, { type: "CLEAR_DRAFT_QUOTE", chatJid: n.chat.jid }, r)
                : e;
            case "RECEIVED_MSGS":
              var s = n.changedMsgs.length;
              if (0 === s) return e;
              for (var u = e, o = 0; o < s; ++o) {
                var l,
                  c = n.changedMsgs[o].msg;
                if ("revoked" === c.content.type) {
                  var d = r[c.chatId],
                    h = null == (l = (0, pe.c)(u, d.jid)) ? void 0 : l.quote;
                  h &&
                    "reply" === h.type &&
                    c.id === h.quotedMsg.id &&
                    (u = t(
                      u,
                      { type: "CLEAR_DRAFT_QUOTE", chatJid: d.jid },
                      r
                    ));
                }
              }
              return u;
            case "SAVE_DRAFT":
              return (0, pe.d)(e, n.chatJid, n.draft);
            case "CLEAR_DRAFT":
              return (0, pe.a)(e, n.chatJid);
            case "SAVE_DRAFT_QUOTE":
              var v,
                f = (0, pe.c)(e, n.chatJid);
              return (
                (v =
                  null == f
                    ? { text: "", quote: n.quote }
                    : (0, b.j)(f, { quote: n.quote })),
                t(e, { type: "SAVE_DRAFT", chatJid: n.chatJid, draft: v }, r)
              );
            case "CLEAR_DRAFT_QUOTE":
              var p = (0, pe.c)(e, n.chatJid);
              return null == p || null == p.quote
                ? e
                : t(
                    e,
                    {
                      type: "SAVE_DRAFT",
                      chatJid: n.chatJid,
                      draft: (0, b.j)(p, { quote: void 0 }),
                    },
                    r
                  );
            case "SAVE_DRAFT_LINK":
              var _,
                m = (0, pe.c)(e, n.chatJid);
              return (
                (_ =
                  null == m
                    ? { text: "", link: n.link }
                    : (0, b.j)(m, { link: n.link })),
                t(e, { type: "SAVE_DRAFT", chatJid: n.chatJid, draft: _ }, r)
              );
            default:
              n.type;
              var g = (0, pe.c)(e, n.chatJid);
              return null == g || null == g.link
                ? e
                : t(
                    e,
                    {
                      type: "SAVE_DRAFT",
                      chatJid: n.chatJid,
                      draft: (0, b.j)(g, { link: void 0 }),
                    },
                    r
                  );
          }
        })(t.drafts, e, t.chatlist.chats);
        return n === t.drafts
          ? t
          : null == n
          ? Object.assign({}, t, { drafts: (0, pe.b)() })
          : (0, b.j)(t, { drafts: n });
      }
      var me = n(7);
      function ge(t, e) {
        var n = (function (t, e) {
          switch (e.type) {
            case "CHAT_DELETED":
              var n = e.chatId,
                r = (0, b.y)(t.contacts).find(
                  (t) => (null == t ? void 0 : t.chatId) === n
                );
              if (!r) return t;
              var i = (0, b.v)(r);
              delete i.chatId;
              var a = (0, b.v)(t.contacts);
              return (a[i.jid] = i), Object.assign({}, t, { contacts: a });
            case "MODIFIED_CONTACTS":
              var s = (0, b.v)(t.contacts),
                u = e.deleted,
                o = e.changed;
              return (
                u &&
                  u.forEach((t) => {
                    delete s[t];
                  }),
                o &&
                  o.forEach((t) => {
                    s[t.jid] = t;
                  }),
                Object.assign({}, t, { contacts: s })
              );
            default:
              return t;
          }
        })(t, e);
        switch (
          ((n = (function (t, e) {
            var n = (function (t, e) {
              switch (e.type) {
                case "UPDATE_STORAGE_STATS":
                  return Object.assign({}, t, {
                    currentStorageStats: e.currentStorageStats,
                  });
                case "UPDATE_STORAGE_TS":
                  return Object.assign({}, t, {
                    lastStorageStatsTs: (0, m.D)(),
                  });
                default:
                  return t;
              }
            })(t.storageManager, e);
            return n !== t.storageManager
              ? Object.assign({}, t, { storageManager: n })
              : t;
          })(
            (n = (function (t, e) {
              if (null == t.tab) return t;
              if ("OPEN_TAB" === e.type)
                return Object.assign({}, t, { tab: e.tab, screens: [] });
              if ("status" === t.tab.key)
                switch (e.type) {
                  case "START_LOADING_STATUS":
                    return Object.assign({}, t, {
                      tab: { key: "status", isLoading: !0 },
                    });
                  case "UPDATE_STATUS_DATA":
                    return Object.assign({}, t, {
                      tab: { key: "status", data: e.data },
                    });
                }
              else if ("calls" === t.tab.key)
                switch (e.type) {
                  case "VOIP_AVAILABILITY_CHANGED":
                    if (!e.available)
                      return Object.assign({}, t, { tab: { key: "chats" } });
                }
              return t;
            })(
              (n = (function (t, e) {
                if (!t.isVoipAvailable) return fe(t);
                switch (e.type) {
                  case "OPEN_CALL_LOGS":
                    var n = t.calls || {},
                      r = n.current;
                    if (null != n.logs) return t;
                    var i = {
                        lastScrollPosition: null,
                        groups: new Map(),
                        loadingRequestId: e.requestId,
                        orderedGroupIds: [],
                      },
                      a = null == r ? { logs: i } : { current: r, logs: i };
                    return Object.assign({}, t, { calls: a });
                  case "UPDATE_CALL_LOGS":
                    var s = t.calls || {},
                      u = s.current,
                      o = s.logs,
                      l = null == o && e.canBeSkipped,
                      c =
                        null != o &&
                        null != e.requestId &&
                        o.loadingRequestId !== e.requestId,
                      d = null == o && null != e.requestId;
                    if (l || c || d) return t;
                    var h = {
                        lastScrollPosition:
                          null == o ? null : o.lastScrollPosition,
                        groups: e.groups,
                        orderedGroupIds: e.orderedGroupIds,
                        loadingRequestId: null,
                      },
                      v = null == u ? { logs: h } : { current: u, logs: h };
                    return Object.assign({}, t, { calls: v });
                  case "UPDATE_CALL_LOGS_SCROLL":
                    var f = t.calls || {},
                      p = f.current,
                      _ = f.logs;
                    return null == _
                      ? t
                      : Object.assign({}, t, {
                          calls: {
                            current: p,
                            logs: Object.assign({}, _, {
                              lastScrollPosition: e.lastScrollPosition,
                            }),
                          },
                        });
                  case "CLOSE_CALL_LOGS":
                    var m = t.calls || {},
                      g = m.current;
                    if (null == m.logs) return t;
                    var b = Object.assign({}, t);
                    return (
                      null == g ? delete b.calls : (b.calls = { current: g }), b
                    );
                  default:
                    return t;
                }
              })(
                (n = (function (t, e) {
                  var n = (function (t, e) {
                    switch (e.type) {
                      case "OPEN_TAB":
                        if ("status" !== e.tab.key || null == e.tab.data)
                          return t;
                        var n = he(e.tab.data) || void 0;
                        return t.lastUnreadMsg === n
                          ? t
                          : Object.assign({}, t, { lastUnreadMsg: n });
                      case "UPDATE_STATUS_DATA":
                        var r = he(e.data) || void 0;
                        return t.lastUnreadMsg === r
                          ? t
                          : Object.assign({}, t, { lastUnreadMsg: r });
                      case "STATUS_FIRST_SENT_DIALOG_CLOSED":
                        return (0, b.j)(t, { showDialogOnFirstSend: void 0 });
                      case "STATUS_TAB_OPENED":
                        return Object.assign({}, t, { tabLastOpened: e.time });
                      case "STATUS_SETTINGS_UPDATED":
                        return Object.assign({}, t, { settings: e.settings });
                      case "STATUS_LAST_UNREAD_MSG":
                        return Object.assign({}, t, {
                          lastUnreadMsg: e.lastUnreadMsg || void 0,
                        });
                      case "UPDATE_STATUS_LIST_SCROLL":
                        return Object.assign({}, t, {
                          lastScrollPosition: e.lastScrollPosition,
                        });
                      default:
                        return t;
                    }
                  })(t.status, e);
                  return n !== t.status
                    ? Object.assign({}, t, { status: n })
                    : t;
                })(
                  (n = (function (t, e) {
                    var n;
                    if (
                      null != (null == (n = t.calls) ? void 0 : n.current) &&
                      null != t.youtubePlayer
                    )
                      return Object.assign({}, t, { youtubePlayer: null });
                    var r = (function (t, e) {
                      switch (e.type) {
                        case "PLAY_YOUTUBE_VIDEO":
                          return { videoId: e.videoId, msgId: e.msgId };
                        case "STOP_YOUTUBE_VIDEO":
                          return null;
                        case "RECEIVED_MSGS":
                          if (null == t) return null;
                          for (
                            var n = t.msgId, r = e.changedMsgs, i = 0;
                            i < r.length;
                            i++
                          ) {
                            var a = r[i].msg,
                              s = a.id,
                              u = a.content;
                            if (s === n && "revoked" === u.type) return null;
                          }
                          return t;
                        case "MSGS_DELETED":
                          return null == t || e.msgIds.includes(t.msgId)
                            ? null
                            : t;
                        default:
                          return t;
                      }
                    })(t.youtubePlayer, e);
                    return r !== t.youtubePlayer
                      ? Object.assign({}, t, {
                          youtubePlayer: r,
                          player: Object.assign({}, t.player, { active: null }),
                        })
                      : t;
                  })(
                    (n = (function (t, e) {
                      var n;
                      if (
                        null != (null == (n = t.calls) ? void 0 : n.current) &&
                        null != t.player.active
                      )
                        return Object.assign({}, t, {
                          player: Object.assign({}, t.player, { active: null }),
                        });
                      var r = (function t(e, n) {
                        switch (n.type) {
                          case "PLAY_MEDIA":
                            return null != e.active &&
                              e.active.msgId === n.player.msgId
                              ? (__LOG__(
                                  2
                                )`Play is resuming ${e.active.type} media ${n.player.msgId}`,
                                "audio" === e.active.type && e.active.paused
                                  ? Object.assign({}, e, {
                                      active: Object.assign({}, e.active, {
                                        paused: !1,
                                      }),
                                    })
                                  : e)
                              : null != e.active && "video" === e.active.type
                              ? (__LOG__(
                                  4
                                )`You should not start a new media before fulling stopping a video`,
                                e)
                              : (__LOG__(
                                  2
                                )`Starting new ${n.player.type} media ${n.player.msgId}`,
                                Object.assign({}, e, { active: n.player }));
                          case "LOADED_MEDIA":
                            var r = e.active;
                            return null != r && r.msgId === n.msgId && r.loading
                              ? (__LOG__(2)`Loaded ${r.type} media ${n.msgId}`,
                                Object.assign({}, e, {
                                  active: (0, b.j)(r, {
                                    loading: !1,
                                    duration: n.duration,
                                  }),
                                }))
                              : e;
                          case "RESUME_MEDIA":
                            var i = e.active;
                            if (
                              null != i &&
                              !0 === i.paused &&
                              i.msgId === n.msgId
                            ) {
                              if (
                                (__LOG__(
                                  2
                                )`Resuming ${i.type} media ${n.msgId}`,
                                "audio" === i.type)
                              )
                                return Object.assign({}, e, {
                                  active: Object.assign({}, i, { paused: !1 }),
                                });
                              __LOG__(
                                4
                              )`RESUME_MEDIA action should only trigger for audio players`;
                            }
                            return e;
                          case "PAUSE_MEDIA":
                            var a = e.active;
                            if (
                              null != a &&
                              !1 === a.paused &&
                              a.msgId === n.msgId
                            ) {
                              if (
                                (__LOG__(2)`Pausing ${a.type} media ${
                                  n.msgId
                                } at ${te(e, a)}%`,
                                "audio" === a.type)
                              )
                                return Object.assign({}, e, {
                                  active: Object.assign({}, a, { paused: !0 }),
                                });
                              __LOG__(
                                4
                              )`PAUSE_MEDIA action should only trigger for audio players`;
                            }
                            return e;
                          case "UPDATE_MEDIA":
                            var s = e.active;
                            return null != s && s.msgId === n.msgId
                              ? ("audio" !== s.type &&
                                  __LOG__(
                                    4
                                  )`UPDATE_MEDIA action should only trigger for audio players`,
                                {
                                  active: (0, b.j)(s, { duration: n.duration }),
                                  currentTimes: Object.assign(
                                    {},
                                    e.currentTimes,
                                    { [n.msgId]: n.currentTime }
                                  ),
                                })
                              : e;
                          case "RESET_MEDIA_TIME":
                            var u = e.active;
                            if (null != u) {
                              var o = e;
                              if ("audio" === u.type) {
                                var l = ee(e.currentTimes, n.msgId);
                                o = Object.assign({}, e, {
                                  active: null,
                                  currentTimes: l,
                                });
                              } else
                                __LOG__(
                                  4
                                )`RESET_MEDIA_TIME action should only trigger for audio players`;
                              return (
                                __LOG__(
                                  2
                                )`RESET audio player ${n.msgId} time to 0`,
                                o
                              );
                            }
                            return e;
                          case "END_MEDIA":
                            var c = e.active;
                            if (null != c && c.msgId === n.msgId) {
                              var d = e;
                              return (
                                "audio" === c.type
                                  ? (d = Object.assign({}, e, {
                                      active: Object.assign({}, c, {
                                        paused: !0,
                                      }),
                                      currentTimes: ee(e.currentTimes, n.msgId),
                                    }))
                                  : __LOG__(
                                      4
                                    )`END_MEDIA action should only trigger for audio players`,
                                __LOG__(2)`End ${c.type} media ${n.msgId}, ${te(
                                  d,
                                  c
                                )}%`,
                                d
                              );
                            }
                            return e;
                          case "TOWARD_MEDIA":
                            var h = Zt(e.currentTimes, n.msgId);
                            return Object.assign({}, e, {
                              currentTimes: Object.assign({}, e.currentTimes, {
                                [n.msgId]: (0, Qt.c)(
                                  h,
                                  n.duration,
                                  n.direction
                                ),
                              }),
                            });
                          case "STOP_MEDIA":
                            var v = e.active;
                            if (null != v && v.msgId === n.msgId) {
                              __LOG__(2)`Stopping ${v.type} media ${n.msgId}`;
                              var f = e.currentTimes;
                              return (
                                "audio" === v.type &&
                                  (f = ee(e.currentTimes, n.msgId)),
                                Object.assign({}, e, {
                                  active: null,
                                  currentTimes: f,
                                })
                              );
                            }
                            return e;
                          case "STOP_ANY_MEDIA":
                            var p = e.active;
                            return null != p
                              ? (__LOG__(
                                  2
                                )`Stopping any ${p.type} media ${p.msgId}`,
                                Object.assign({}, e, { active: null }))
                              : e;
                          case "MSGS_DELETED":
                            return e.active && n.msgIds.includes(e.active.msgId)
                              ? t(e, {
                                  type: "STOP_MEDIA",
                                  msgId: e.active.msgId,
                                })
                              : e;
                          case "RECEIVED_MSGS":
                            var _,
                              m = null == (_ = e.active) ? void 0 : _.msgId;
                            return null != m &&
                              n.changedMsgs.some(
                                (t) =>
                                  t.msg.id === m &&
                                  "revoked" === t.msg.content.type
                              )
                              ? t(e, { type: "STOP_MEDIA", msgId: m })
                              : e;
                          default:
                            return e;
                        }
                      })(t.player, e);
                      return r !== t.player
                        ? Object.assign({}, t, {
                            player: r,
                            youtubePlayer: null,
                          })
                        : t;
                    })(
                      (n = (function (t, e) {
                        if (!t.isVoipAvailable) return fe(t);
                        switch (e.type) {
                          case "CALL_STATE_CHANGED":
                            var n = e.state,
                              r = e.peerJid,
                              i = e.isCaller,
                              a = e.isLocallyMuted,
                              s = t.calls || {},
                              u = s.current,
                              o = s.logs;
                            if ("none" === n) {
                              if ("error" === (null == u ? void 0 : u.state))
                                return t;
                              var l = Object.assign({}, t);
                              return (
                                null == o
                                  ? delete l.calls
                                  : (l.calls = { logs: o }),
                                l
                              );
                            }
                            var c = {
                              state: n,
                              peerJid: r,
                              isCaller: i,
                              duration: null == u ? null : u.duration,
                              isInterrupted: null != u && u.isInterrupted,
                              isLocallyMuted: a,
                            };
                            return null == o
                              ? Object.assign({}, t, { calls: { current: c } })
                              : Object.assign({}, t, {
                                  calls: { current: c, logs: o },
                                });
                          case "CALL_DURATION_CHANGED":
                            var d = t.calls;
                            if (!d || null == d.current) return t;
                            var h = e.duration,
                              v = Object.assign({}, d.current, { duration: h }),
                              f = d.logs;
                            return null == f
                              ? Object.assign({}, t, { calls: { current: v } })
                              : Object.assign({}, t, {
                                  calls: { current: v, logs: f },
                                });
                          case "VOIP_SERVICE_BRIDGE_DISCONNECTED":
                            var p = t.calls;
                            return null ==
                              (null == p ? void 0 : p.connectionStatus)
                              ? Object.assign({}, t, {
                                  calls: Object.assign({}, p, {
                                    connectionStatus: "swLost",
                                  }),
                                })
                              : t;
                          case "VOIP_SERVICE_SETUP_DONE":
                            var _ = t.calls;
                            if (
                              "setupDone" !==
                              (null == _ ? void 0 : _.connectionStatus)
                            ) {
                              var m = e.inOngoingCall
                                ? null == _
                                  ? void 0
                                  : _.current
                                : void 0;
                              return Object.assign({}, t, {
                                calls: Object.assign({}, _, {
                                  current: m,
                                  connectionStatus: "setupDone",
                                }),
                              });
                            }
                            return t;
                          case "VOIP_SERVICE_DISCONNECTED":
                            var g = t.calls;
                            return g
                              ? "disconnected" === g.connectionStatus &&
                                null == g.current
                                ? t
                                : Object.assign({}, t, {
                                    calls: Object.assign({}, g, {
                                      current: void 0,
                                      connectionStatus: "disconnected",
                                    }),
                                  })
                              : Object.assign({}, t, {
                                  calls: { connectionStatus: "disconnected" },
                                });
                          case "CALL_MUTE_STATE_CHANGED":
                            var b = e.isMuted,
                              S = e.jid,
                              E = t.calls || {},
                              O = E.current,
                              A = E.logs;
                            if (
                              S !== t.user.jid ||
                              null == O ||
                              b === O.isLocallyMuted
                            )
                              return t;
                            var y = Object.assign({}, O, { isLocallyMuted: b });
                            return null == A
                              ? Object.assign({}, t, { calls: { current: y } })
                              : Object.assign({}, t, {
                                  calls: { current: y, logs: A },
                                });
                          case "CALL_INTERRUPTED_STATE_CHANGED":
                            var C = e.isInterrupted,
                              L = e.jid,
                              T = t.calls || {},
                              w = T.current,
                              I = T.logs;
                            if (
                              null == w ||
                              w.peerJid !== L ||
                              w.isInterrupted === C
                            )
                              return t;
                            var k = Object.assign({}, w, { isInterrupted: C });
                            return null == I
                              ? Object.assign({}, t, { calls: { current: k } })
                              : Object.assign({}, t, {
                                  calls: { current: k, logs: I },
                                });
                          case "CALL_BUSY_RECEIVED":
                            var D = t.calls || {},
                              N = D.current,
                              G = D.logs;
                            if (null == N || "calling" !== N.state) return t;
                            var M = Object.assign({}, N, { state: "busy" });
                            return null == G
                              ? Object.assign({}, t, { calls: { current: M } })
                              : Object.assign({}, t, {
                                  calls: { current: M, logs: G },
                                });
                          case "LOADING_CALL":
                            var R = e.peer,
                              P = e.fromMe,
                              U = t.calls,
                              j = null == U ? void 0 : U.current;
                            if (
                              "loading" === (null == j ? void 0 : j.state) &&
                              (null == j ? void 0 : j.peerJid) === R
                            )
                              return t;
                            var x = null == U ? void 0 : U.logs,
                              F = {
                                state: "loading",
                                peerJid: R,
                                isCaller: P,
                                duration: null,
                                isInterrupted: !1,
                                isLocallyMuted: !1,
                              };
                            return null == x
                              ? Object.assign({}, t, { calls: { current: F } })
                              : Object.assign({}, t, {
                                  calls: { logs: x, current: F },
                                });
                          case "CALL_OFFER_NACKED":
                            var V = t.calls,
                              B = null == V ? void 0 : V.current;
                            if (null == B) return t;
                            var $ = null == V ? void 0 : V.logs,
                              H = B.isCaller,
                              z = B.duration,
                              W = B.isInterrupted,
                              J = B.isLocallyMuted,
                              K = {
                                state: "error",
                                peerJid: e.jid,
                                isCaller: H,
                                duration: z,
                                isInterrupted: W,
                                isLocallyMuted: J,
                                errorCode: e.code,
                              };
                            return null == $
                              ? Object.assign({}, t, { calls: { current: K } })
                              : Object.assign({}, t, {
                                  calls: { current: K, logs: $ },
                                });
                          case "CALL_ERROR_CLEARED":
                            var q = t.calls,
                              Y = null == q ? void 0 : q.current;
                            if (null == Y || "error" !== Y.state) return t;
                            var X = null == q ? void 0 : q.logs;
                            if (null == X) {
                              var Q = Object.assign({}, t);
                              return delete Q.calls, Q;
                            }
                            return Object.assign({}, t, { calls: { logs: X } });
                          case "CLOSE_CALL_SCREEN":
                            var Z = t.calls;
                            if (null == Z || null == Z.current) return t;
                            var tt = Z.logs;
                            if (null == tt) {
                              var et = Object.assign({}, t);
                              return delete et.calls, et;
                            }
                            return Object.assign({}, t, {
                              calls: { logs: tt },
                            });
                          case "CALL_ENDED":
                            var nt = t.calls;
                            if (null == nt || null == nt.current) return t;
                            var rt = nt.logs;
                            if (null == rt) {
                              var it = Object.assign({}, t);
                              return delete it.calls, it;
                            }
                            return Object.assign({}, t, {
                              calls: { logs: rt },
                            });
                          default:
                            return t;
                        }
                      })(
                        (n = (function (t, e) {
                          if ("OPEN_SCREEN" === e.type) {
                            var n = e.id;
                            return t.screens.some((t) => t.id === n)
                              ? (__LOG__(
                                  4
                                )`You cannot open a screen with an already used id: ${n}, ${e.type}`,
                                SEND_LOGS("Open screen with existing id"),
                                t)
                              : Object.assign({}, t, {
                                  screens: t.screens.concat([
                                    { id: n, screen: e.screen },
                                  ]),
                                });
                          }
                          if ("CLOSE_ALL_SCREENS" === e.type)
                            return Object.assign({}, t, { screens: [] });
                          for (
                            var r = t.screens, i = [], a = !1, s = 0;
                            s < r.length;
                            ++s
                          ) {
                            var u = r[s],
                              o = u.id,
                              l = u.screen,
                              c = ie(t, l, o, e);
                            if ("CLOSE_ALL_SCREENS_ABOVE" === c) {
                              a = !0;
                              break;
                            }
                            "CLOSE_SCREEN" === c
                              ? (a = !0)
                              : c !== l
                              ? (i.push({ id: o, screen: c }), (a = !0))
                              : i.push(u);
                          }
                          return a ? Object.assign({}, t, { screens: i }) : t;
                        })(
                          (n = (function (t, e) {
                            var n = t;
                            switch (e.type) {
                              case "RECEIVED_MSGS":
                              case "CHAT_ADDED":
                                for (
                                  var r = e.affectedChats,
                                    i = n.contacts,
                                    a = n.chatlist.orderedChatIds.slice(),
                                    s = (0, b.v)(n.chatlist.chats),
                                    u = 0;
                                  u < r.length;
                                  u++
                                ) {
                                  var o = r[u];
                                  s.hasOwnProperty(o.id) || a.push(o.id),
                                    (s[o.id] = o);
                                  var l = (0, me.q)(o.jid);
                                  l &&
                                    !i.hasOwnProperty(o.jid) &&
                                    (i === n.contacts && (i = (0, b.v)(i)),
                                    (i[l] = { jid: l, chatId: o.id }));
                                }
                                return (
                                  a.sort((t, e) => s[e].sortBy - s[t].sortBy),
                                  Object.assign({}, n, {
                                    chatlist: {
                                      orderedChatIds: a,
                                      chats: s,
                                      lastScrollPosition:
                                        n.chatlist.lastScrollPosition,
                                      archived: n.chatlist.archived,
                                    },
                                    contacts: i,
                                  })
                                );
                              case "CHAT_MODIFIED":
                              case "MSG_ACK":
                              case "MSGS_DELETED":
                              case "DID_READ_CHAT":
                                var c = n.chatlist.chats[e.chat.id],
                                  d = Nt(c, e);
                                if (d === c) return n;
                                var h = (0, b.v)(n.chatlist.chats);
                                return (
                                  (h[d.id] = d),
                                  Object.assign({}, n, {
                                    chatlist: Object.assign({}, n.chatlist, {
                                      chats: h,
                                    }),
                                  })
                                );
                              case "CHAT_DELETED":
                                var v = (0, b.v)(n.chatlist.chats),
                                  f = e.chatId;
                                return (
                                  delete v[f],
                                  Object.assign({}, n, {
                                    chatlist: Object.assign({}, n.chatlist, {
                                      chats: v,
                                      orderedChatIds:
                                        n.chatlist.orderedChatIds.filter(
                                          (t) => t !== f
                                        ),
                                    }),
                                  })
                                );
                              case "UPDATE_CHATLIST_SCROLL":
                                return Object.assign({}, n, {
                                  chatlist: Object.assign({}, n.chatlist, {
                                    lastScrollPosition: e.lastScrollPosition,
                                  }),
                                });
                              case "GDPR_REPORT_UPDATED":
                                return null != n.gdprReport &&
                                  (0, b.s)(n.gdprReport, e.gdprReport)
                                  ? n
                                  : Object.assign({}, n, {
                                      gdprReport: e.gdprReport,
                                    });
                              case "GDPR_REPORT_DOWNLOADED":
                                if ("error" === e.result.type)
                                  return Object.assign({}, n, {
                                    gdprReport: {
                                      status: "error",
                                      reason: e.result.error,
                                    },
                                  });
                                if (
                                  null == n.gdprReport ||
                                  ("downloading" !== n.gdprReport.status &&
                                    "success" !== n.gdprReport.status) ||
                                  "success" !== e.result.type
                                )
                                  return n;
                                var p = {
                                  status: "downloaded",
                                  creationDate: n.gdprReport.creationDate,
                                  expirationDate: n.gdprReport.expirationDate,
                                  size: n.gdprReport.size,
                                  metadata: n.gdprReport.metadata,
                                  blob: e.result.plaintext,
                                };
                                return Object.assign({}, n, { gdprReport: p });
                              case "GDPR_REPORT_DOWNLOADING":
                                if (
                                  null != n.gdprReport &&
                                  "available" === n.gdprReport.status
                                ) {
                                  var _ = {
                                    status: "downloading",
                                    creationDate: n.gdprReport.creationDate,
                                    expirationDate: n.gdprReport.expirationDate,
                                    size: n.gdprReport.size,
                                    metadata: n.gdprReport.metadata,
                                    percent: e.percent,
                                  };
                                  return Object.assign({}, n, {
                                    gdprReport: _,
                                  });
                                }
                                return n;
                              case "APP_FOREGROUND":
                                return Object.assign({}, n, { shouldExit: !1 });
                              case "VOIP_AVAILABILITY_CHANGED":
                                if (
                                  n.isVoipAvailable === e.available &&
                                  null == n.calls
                                )
                                  return n;
                                var m = Object.assign({}, n, {
                                  isVoipAvailable: e.available,
                                });
                                return delete m.calls, m;
                              case "USER_NOTICE_UPDATED":
                                if (e.userNotice)
                                  return Object.assign({}, n, {
                                    userNotice: e.userNotice,
                                  });
                                if (!n.userNotice) return n;
                                var g = Object.assign({}, n);
                                return delete g.userNotice, g;
                              default:
                                return n;
                            }
                          })(
                            (n = (function (t, e, n) {
                              var r,
                                i = t;
                              if ("OPEN_CHAT" === e.type)
                                return Object.assign({}, i, {
                                  msglist: zt(e, i),
                                  screens: [],
                                });
                              var a = i.msglist;
                              if (!a) return i;
                              var s = !1,
                                u = Nt(a.chat, e);
                              u !== a.chat &&
                                ((a = (0, b.j)(a, { chat: u })),
                                (i = (0, b.j)(i, { msglist: a })),
                                (s = !0));
                              var o = a.chat.id;
                              switch (e.type) {
                                case "UPDATE_CHAT_ANCHOR":
                                  var l, c, d;
                                  if (o !== e.chatId) return i;
                                  var h = e.oldRequestId,
                                    v = e.newRequestId,
                                    f = e.anchor,
                                    p =
                                      null == (l = a.loading)
                                        ? void 0
                                        : l.older;
                                  p === h && (p = v);
                                  var _ =
                                    null == (c = a.loading) ? void 0 : c.newer;
                                  _ === h && (_ = v);
                                  var m = a.selectedItem;
                                  (null == (d = m) ? void 0 : d.msgId) ===
                                    a.anchor &&
                                    a.anchor !== f &&
                                    (__LOG__(
                                      2
                                    )`msgListReducer: Removing selected expired anchor`,
                                    (m = void 0));
                                  var g = Object.assign({}, a, {
                                    anchor: f,
                                    loading: { older: p, newer: _ },
                                    selectedItem: m,
                                  });
                                  return Object.assign({}, i, { msglist: g });
                                case "ADJUST_VIEWPORT":
                                  return o !== e.chatId || a.anchor !== e.anchor
                                    ? i
                                    : Object.assign({}, i, {
                                        msglist: Wt(a, e, i),
                                      });
                                case "LOADED_MSG_RANGE":
                                  var S = Rt(a.loading, e.requestId);
                                  return o !== e.chatId || a.anchor !== e.anchor
                                    ? S !== a.loading
                                      ? (__LOG__(
                                          3
                                        )`msglist request matched but chat or anchor different`,
                                        Object.assign({}, i, {
                                          msglist: Object.assign({}, a, {
                                            loading: S,
                                          }),
                                        }))
                                      : i
                                    : e.loaded
                                    ? Object.assign({}, i, {
                                        msglist: Jt(a, S, e.loaded, i),
                                      })
                                    : S !== a.loading
                                    ? (__LOG__(
                                        2
                                      )`msglist request anchored to a message that deleted mid-request`,
                                      Object.assign({}, i, {
                                        msglist: Object.assign({}, a, {
                                          loading: S,
                                          missingAnchor: !0,
                                        }),
                                      }))
                                    : i;
                                case "MSG_ACK":
                                  return o !== e.chat.id || null == e.ackedMsg
                                    ? i
                                    : Yt(a, e, e.ackedMsg.id, i);
                                case "MSGS_DELETED":
                                  return o !== e.chat.id
                                    ? i
                                    : (function (t, e, n) {
                                        if (e.chat.id !== t.chat.id) return n;
                                        var r = e.msgIds,
                                          i = e.chat,
                                          a = t.viewport,
                                          s = (0, b.v)(a),
                                          u = (0, b.v)(t.msgs);
                                        r.forEach((t) => {
                                          delete u[t];
                                        });
                                        var o = Object.assign({}, t, {
                                            msgs: u,
                                            chat: i,
                                          }),
                                          l = [];
                                        return (
                                          r.forEach((t) => {
                                            var e = s.msgIds.indexOf(t);
                                            if (-1 !== e) {
                                              l.push(t);
                                              var n = o.anchor,
                                                r = o.selectedItem,
                                                a = s.msgIds,
                                                u = s.loadedRange,
                                                c = s.desiredRange;
                                              n === t &&
                                                (o.anchor =
                                                  a[e + 1] ||
                                                  a[e - 1] ||
                                                  i.msgInfo.newest ||
                                                  "beginning"),
                                                (null == r
                                                  ? void 0
                                                  : r.msgId) === t &&
                                                  (o.selectedItem = void 0);
                                              var d = e + u.start;
                                              null != o.newestIndex && d < 0
                                                ? o.newestIndex++
                                                : null != o.oldestIndex &&
                                                  d >= 0 &&
                                                  o.oldestIndex--,
                                                (s.loadedRange = Xt(u, d)),
                                                (s.desiredRange = Xt(c, d)),
                                                (s.msgIds = a.filter(
                                                  (e) => e !== t
                                                ));
                                            }
                                          }),
                                          0 === l.length
                                            ? (0, b.j)(n, { msglist: o })
                                            : (0 === s.msgIds.length &&
                                                ((s = {
                                                  loadedRange: {
                                                    start: 0,
                                                    end: 0,
                                                  },
                                                  desiredRange: {
                                                    start: -10,
                                                    end: 10,
                                                  },
                                                  msgIds: [],
                                                }),
                                                0 === i.msgInfo.msgCount &&
                                                  ((o.newestIndex = 0),
                                                  (o.oldestIndex = -1))),
                                              (o.viewport = s),
                                              qt(o, n),
                                              Object.assign({}, n, {
                                                msglist: o,
                                              }))
                                        );
                                      })(a, e, i);
                                case "MEDIA_UPDATED":
                                  return e.affectedChats.some((t) => t.id === o)
                                    ? Object.assign({}, i, {
                                        msglist: Kt(
                                          Object.assign({}, a, { chat: u }),
                                          e.msgs,
                                          i
                                        ),
                                      })
                                    : i;
                                case "MSG_UPDATED":
                                  return o !== e.msg.chatId
                                    ? i
                                    : Object.assign({}, i, {
                                        msglist: Kt(
                                          Object.assign({}, a, { chat: u }),
                                          [e.msg],
                                          i
                                        ),
                                      });
                                case "RECEIVED_MSGS":
                                  if (!s) return i;
                                  var E = a,
                                    O = E.newestIndex,
                                    A = E.viewport,
                                    y = e.newMsgs.filter((t) => t.chatId === o);
                                  y.reverse();
                                  var C = a.unreadBar;
                                  if (
                                    (C
                                      ? ((C = Object.assign({}, C)),
                                        y.find((t) => t.meta && t.meta.fromMe)
                                          ? (C.count = 0)
                                          : (C.count = C.count + y.length))
                                      : "hidden" === document.visibilityState &&
                                        u.msgInfo.oldestUnread &&
                                        (C = {
                                          msgId: u.msgInfo.oldestUnread,
                                          count: u.msgInfo.unreadMsgCount,
                                        }),
                                    void 0 === O ||
                                      O !== A.loadedRange.start ||
                                      A.desiredRange.start >= O)
                                  ) {
                                    var L = Object.assign({}, a, {
                                      chat: u,
                                      newestIndex:
                                        void 0 !== O ? O - y.length : void 0,
                                      unreadBar: C,
                                    });
                                    return Object.assign({}, i, {
                                      msglist: Kt(
                                        L,
                                        e.changedMsgs.map((t) => t.msg),
                                        i
                                      ),
                                    });
                                  }
                                  var T = O - y.length,
                                    w = Jt(
                                      a,
                                      a.loading,
                                      {
                                        newestIndex: T,
                                        range: { start: T, end: O },
                                        msgs: y,
                                        unreadBar: C,
                                      },
                                      i
                                    );
                                  return (
                                    (w.chat = u),
                                    Object.assign({}, i, {
                                      msglist: Kt(
                                        w,
                                        e.changedMsgs.map((t) => t.msg),
                                        i
                                      ),
                                    })
                                  );
                                case "SELECT_MSG":
                                  return Object.assign({}, i, {
                                    msglist: Object.assign({}, a, {
                                      selectedItem: {
                                        key: e.item.key,
                                        msgId:
                                          null == (r = e.item.msg)
                                            ? void 0
                                            : r.id,
                                      },
                                    }),
                                  });
                                case "KICKED":
                                  return Object.assign({}, i, {
                                    msglist: void 0,
                                  });
                                case "CHAT_DELETED":
                                  return o === e.chatId
                                    ? Object.assign({}, i, { msglist: void 0 })
                                    : i;
                                case "HSM_BUTTON_PRESSED":
                                  return o !== e.msg.chatId
                                    ? i
                                    : Yt(a, e, e.msg.id, i);
                                case "REMOVE_WITH_COMPOSE_BOX_OPENED":
                                  if (
                                    o === e.chatId &&
                                    a.withComposeBoxOpened
                                  ) {
                                    var I = Object.assign({}, a);
                                    return (
                                      delete I.withComposeBoxOpened,
                                      Object.assign({}, i, { msglist: I })
                                    );
                                  }
                                  return i;
                                case "MODIFIED_CONTACTS":
                                  var k = e.changed;
                                  return k && k.some((t) => t.chatId === o)
                                    ? (function (t, e) {
                                        var n = (0, b.v)(t);
                                        return (
                                          qt(n, e), (0, b.j)(e, { msglist: n })
                                        );
                                      })(a, i)
                                    : i;
                                case "OPENED_CHAT":
                                  if (o !== e.chatId) return i;
                                  if (null == a.opening) return i;
                                  var D = Object.assign({}, a);
                                  return (
                                    delete D.opening,
                                    Object.assign({}, i, { msglist: D })
                                  );
                                default:
                                  return i;
                              }
                            })(n, e)),
                            e
                          )),
                          e
                        )),
                        e
                      )),
                      e
                    )),
                    e
                  )),
                  e
                )),
                e
              )),
              e
            )),
            e
          )),
          e.type)
        ) {
          case "INCOMING_CALL_START":
            return Object.assign({}, n, { incomingCall: !0 });
          case "INCOMING_CALL_END":
            return Object.assign({}, n, { incomingCall: void 0 });
          case "ACTIVITY_START":
            return Object.assign({}, n, { activityInProgress: !0 });
          case "ACTIVITY_END":
            return Object.assign({}, n, { activityInProgress: void 0 });
          case "AVATARS_UPDATED":
            var r = (0, b.v)(n.avatars),
              i = e.changed,
              a = e.cleared;
            i &&
              i.forEach((t) => {
                var e = t.jid,
                  n = t.photoId;
                r[e] = { status: "loaded", photoId: n, jid: e };
              }),
              a &&
                a.forEach((t) => {
                  delete r[t];
                }),
              (n = Object.assign({}, n, { avatars: r }));
            break;
          case "AVATARS_STARTED_LOADING":
            var s = (0, b.v)(n.avatars);
            e.jids.forEach((t) => {
              s[t] = { status: "loading", photoId: null, jid: t };
            }),
              (n = Object.assign({}, n, { avatars: s }));
            break;
          case "PUSHNAME_UPDATED":
            n = Object.assign({}, n, {
              user: (0, b.j)(n.user, { pushname: e.pushname }),
            });
            break;
          case "ABOUT_UPDATED":
            n = Object.assign({}, n, {
              user: (0, b.j)(n.user, { about: e.content }),
            });
            break;
          case "CHAT_STATE":
            var u = (0, me.p)(e.jid),
              o = (0, me.q)(e.jid);
            if (u) {
              var l = Object.assign({}, n.groupChatStates),
                c = e.chatState,
                d = e.participant;
              "idle" !== c && d
                ? (l[u] = { chatState: c, participant: d })
                : delete l[u],
                (n = Object.assign({}, n, { groupChatStates: l }));
            } else if (o) {
              var h = Object.assign({}, n.oneToOneChatStates),
                v = e.chatState;
              "idle" === v ? delete h[o] : (h[o] = v),
                (n = Object.assign({}, n, { oneToOneChatStates: h }));
            }
            break;
          case "PRESENCE":
            var f = Object.assign({}, n.onlineOrLastSeen);
            (f[e.jid] = e.presence),
              (n = Object.assign({}, n, { onlineOrLastSeen: f }));
            break;
          case "GENERAL_SETTINGS":
            n = Object.assign({}, n, { settings: e.settings });
            break;
          case "SECURITY_NOTIFICATION_SETTINGS":
            n = Object.assign({}, n, { verboseSecurity: e.verboseSecurity });
            break;
          case "BLOCK_LIST":
            var p = {};
            e.blocked.forEach((t) => (p[t] = !0)),
              (n = Object.assign({}, n, { blocked: p }));
            break;
          case "SERVER_PROPS":
            n = Object.assign({}, n, { serverProps: e.serverProps });
            break;
          case "RECEIVED_MSGS":
          case "MSGS_DELETED":
            n = _e(n, e);
            break;
          case "SAVE_DRAFT":
          case "CLEAR_DRAFT":
          case "SAVE_DRAFT_QUOTE":
          case "CLEAR_DRAFT_QUOTE":
          case "SAVE_DRAFT_LINK":
          case "CLEAR_DRAFT_LINK":
            return _e(n, e);
          case "APP_MOUNTED":
            delete (n = Object.assign({}, n)).renderFast;
            break;
          case "KICKED":
            return Object.assign({}, n, { kickReason: e.reason });
          case "TWO_FACTOR_VERIFICATION":
            if (!n.user.twoFactor.isEnabled) return n;
            var _ = {
              isEnabled: !0,
              hasEmail: n.user.twoFactor.hasEmail,
              reminder: e.success
                ? { shouldRemind: !1 }
                : { shouldRemind: !0, hasError: !0 },
            };
            return (0, b.s)(n.user.twoFactor, _)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: _ }),
                });
          case "TWO_FACTOR_VERIFICATION_PENDING":
            if (!n.user.twoFactor.isEnabled) return n;
            var g = {
              isEnabled: !0,
              hasEmail: n.user.twoFactor.hasEmail,
              reminder: { shouldRemind: !0, hasError: !1 },
            };
            return (0, b.s)(n.user.twoFactor, g)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: g }),
                });
          case "TWO_FACTOR_DEACTIVATION":
            var S = { isEnabled: !1, reminder: { shouldRemind: !1 } };
            return (0, b.s)(n.user.twoFactor, S)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: S }),
                });
          case "TWO_FACTOR_ACTIVATION":
            var E = {
              isEnabled: !0,
              hasEmail: e.hasEmail,
              reminder: { shouldRemind: !1 },
            };
            return (0, b.s)(n.user.twoFactor, E)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, { twoFactor: E }),
                });
          case "TWO_FACTOR_CHANGE_EMAIL":
            var O = n.user.twoFactor;
            return !O.isEnabled || (O.isEnabled && O.hasEmail)
              ? n
              : Object.assign({}, n, {
                  user: (0, b.j)(n.user, {
                    twoFactor: Object.assign({}, O, { hasEmail: !0 }),
                  }),
                });
          case "GROUP_INVITES_REVOKED":
            var A = n,
              y = A.sentGroupInviteRevokes,
              C = A.receivedGroupInviteRevokes,
              L = {},
              T = {},
              w = e.revokes,
              I = e.groupJid,
              k = e.outgoing;
            w.forEach((t) => {
              var e = t.user,
                n = {};
              if (((n[I] = t.expiresBefore), k)) {
                var r = null == y ? void 0 : y[e];
                L[e] = r ? Object.assign({}, r, n) : n;
              } else {
                var i = null == C ? void 0 : C[e];
                T[e] = i ? Object.assign({}, i, n) : n;
              }
            });
            var D = Object.keys(L).length > 0,
              N = Object.keys(T).length > 0;
            return D || N
              ? Object.assign({}, n, {
                  sentGroupInviteRevokes: D ? (0, b.j)(y, L) : y,
                  receivedGroupInviteRevokes: N ? (0, b.j)(C, T) : C,
                })
              : n;
          case "COMMS_DISCONNECTED":
            return Object.assign({}, n, {
              connected: e.online,
              commsConnected: !1,
            });
          case "COMMS_CONNECTED":
            return Object.assign({}, n, { connected: !0, commsConnected: !0 });
          case "DISCONNECTED":
            return Object.assign({}, n, { connected: n.commsConnected });
          case "CONNECTED":
            return Object.assign({}, n, { connected: !0 });
          case "STARRED_INDEX_FOUND":
            var G = (0, b.v)(n);
            return delete G.starredIndexMissing, G;
          case "PROFILE_PHOTO_SCREEN_CHANGED":
            return Object.assign({}, n, {
              profilePhotoScreenState: e.profilePhotoScreenState,
            });
          case "TOS_GATING_CHANGED":
            var M = e.tosAccepted;
            return n.tosAccepted !== M
              ? Object.assign({}, n, { tosAccepted: e.tosAccepted })
              : n;
        }
        return n;
      }
      function be(t) {
        var e = (0, b.v)(t);
        return delete e.overlayId, e;
      }
      var Se = n(37),
        Ee = n.n(Se),
        Oe = n(132);
      function Ae(t, e) {
        if ("BATCH_ACTION" === e.type) return e.actions.reduce(Ae, t);
        var n = null;
        if ("BACK" === e.type)
          (n = (function (t) {
            switch (t.mode) {
              case "reg":
                return (function (t) {
                  if (null != t.contactUs)
                    return Object.assign({}, t, { contactUs: void 0 });
                  var e = t.reg;
                  switch (e.type) {
                    case "UNINITIALIZED":
                    case "BLOCKED":
                      return Object.assign({}, t, { shouldExit: !0 });
                    case "QUERYING_JIO_HEADERS":
                    case "CONFIRM_FOUND_PHONE_NUMBER":
                    case "REQUESTING_CODE":
                    case "TWO_FACTOR":
                    case "COUNTRY_SELECT":
                    case "ENTERING_PHONE_NUMBER":
                    case "VERIFYING":
                    case "SENDING_SMS":
                    case "SENDING_VOICE":
                    case "SENDING_EMAIL":
                    case "RESETTING":
                    case "INITIALIZING":
                    case "SENDING_SMS_BAN_APPEAL":
                    case "SENDING_VOICE_BAN_APPEAL":
                    case "REQUESTING_CODE_BAN_APPEAL":
                    case "BAN_APPEAL":
                    case "VERIFYING_SMS_BAN_APPEAL":
                    case "BLOCKED_BAN_APPEAL":
                    case "BLOCKED_BAN_APPEAL_PRE":
                      return (
                        __LOG__(
                          3
                        )`All those pages should handle back manually to ask for user confirmation`,
                        Object.assign({}, t, { shouldExit: !0 })
                      );
                    default:
                      return (0, Ee.a)(e);
                  }
                })(t);
              case "main":
                return (function (t) {
                  var e = t.screens[t.screens.length - 1];
                  return e
                    ? "OUT_OF_SPACE_RECOVERY" === e.screen.type
                      ? Object.assign({}, t, { shouldExit: !0 })
                      : ge(t, {
                          type: "CLOSE_SCREEN",
                          id: e.id,
                          closeScreensAbove: !1,
                        })
                    : t.msglist
                    ? Object.assign({}, t, { msglist: void 0 })
                    : t.chatlist.archived
                    ? Object.assign({}, t, {
                        chatlist: Object.assign({}, t.chatlist, {
                          archived: !1,
                        }),
                      })
                    : Object.assign({}, t, { shouldExit: !0 });
                })(t);
              case "tempBanned":
                return Object.assign({}, t, { shouldExit: !0 });
              default:
                return t.mode, t;
            }
          })(t)).shouldExit &&
            (e.willCloseNaturally ? (0, Oe.onAppClose)() : (0, Oe.closeApp)());
        else if (
          "UI_JOB_SCHEDULED" === e.type ||
          "UI_JOB_UPDATED" === e.type ||
          "CLEAR_UI_JOB" === e.type ||
          "INIT_UI_JOBS" === e.type
        )
          n = (function (t, e) {
            switch (e.type) {
              case "CLEAR_UI_JOB":
                var n = e.jobName,
                  r = e.key,
                  i = t.jobs;
                if (!i || !i[n] || !i[n][r]) return t;
                if ("finished" !== i[n][r].step.status)
                  return (
                    __LOG__(3)`Clearing ui Job when not finished. Skipping`, t
                  );
                var a = Object.assign({}, i[n]);
                return (
                  delete a[r], (0, b.j)(t, { jobs: (0, b.j)(i, { [n]: a }) })
                );
              case "UI_JOB_SCHEDULED":
                var s = e.jobInfo,
                  u = e.jobId,
                  o = s.type,
                  l = s.args,
                  c = (0, O.c)(o, l);
                if (null == c)
                  return (
                    __LOG__(
                      3
                    )`Tried to report schedule a job ${o} without reporter`,
                    t
                  );
                var d = {
                  jobName: o,
                  key: c,
                  jobId: u,
                  jobIn: l,
                  step: { status: "scheduled" },
                };
                return (0, b.k)(t, { jobs: { [o]: { [c]: d } } });
              case "UI_JOB_UPDATED":
                var h,
                  v,
                  f = e.jobName,
                  p = e.status,
                  _ = e.key;
                return null ==
                  (null == (h = t.jobs) || null == (v = h[f]) ? void 0 : v[_])
                  ? (__LOG__(
                      3
                    )`Job status updated without being scheduled first ${f}`,
                    t)
                  : (0, b.k)(t, { jobs: { [f]: { [_]: { step: p } } } });
              default:
                return e.type, (0, b.j)(t, { jobs: e.jobs });
            }
          })(t, e);
        else
          switch (t.mode) {
            case "main":
              n = ge(t, e);
              break;
            case "reg":
              n = (function (t, e) {
                switch (e.type) {
                  case "INCOMING_CALL_START":
                    return Object.assign({}, t, { incomingCall: !0 });
                  case "INCOMING_CALL_END":
                    return Object.assign({}, t, { incomingCall: void 0 });
                  case "ACTIVITY_START":
                    return Object.assign({}, t, { activityInProgress: !0 });
                  case "ACTIVITY_END":
                    return Object.assign({}, t, { activityInProgress: void 0 });
                  case "UPDATE_REGISTRATION":
                    return Object.assign({}, t, {
                      mode: "reg",
                      reg: e.newStore,
                    });
                  case "BACKEND_INITIALIZED":
                    return e.newStore;
                  case "OPEN_CONTACT_US":
                    return Object.assign({}, t, {
                      contactUs: {
                        phoneNumber: e.phoneNumber,
                        context: e.context,
                      },
                    });
                  case "OPEN_SPINNER":
                    return Object.assign({}, t, {
                      loading: { title: e.title, subtitle: e.subtitle },
                    });
                  case "CLOSE_SPINNER":
                    return Object.assign({}, t, { loading: void 0 });
                  case "REG_ALERT_SHOWN":
                    return Object.assign({}, t, { alert: void 0 });
                  default:
                    return t;
                }
              })(t, e);
              break;
            default:
              t.mode, (n = t);
          }
        return (function (t, e, n) {
          if ("OPEN_OVERLAY" === n.type)
            return null == n.overlayId
              ? be(e)
              : (0, b.j)(e, { overlayId: n.overlayId });
          if (t === e) return e;
          if (t.mode !== e.mode) return be(e);
          if ("main" === e.mode && "main" === t.mode) {
            var r,
              i,
              a,
              s,
              u = null == (r = e.screens[e.screens.length - 1]) ? void 0 : r.id,
              o = null == (i = t.screens[t.screens.length - 1]) ? void 0 : i.id,
              l = null == (a = e.msglist) ? void 0 : a.chat.id,
              c = null == (s = t.msglist) ? void 0 : s.chat.id;
            if (u !== o || l !== c) return be(e);
          } else if (
            "reg" === e.mode &&
            "reg" === t.mode &&
            e.reg.type !== t.reg.type
          )
            return be(e);
          return e;
        })(t, n, e);
      }
      var ye = "GAP",
        Ce = class {
          constructor() {
            (this.Zt = new Map()),
              (this.Zu = new Map()),
              (this.contacts = {}),
              (this.avatars = {}),
              (this.Zv = new Map()),
              (this.Zw = {
                groups: null,
                orderedGroupIds: null,
                requestId: null,
              }),
              (this.Zx = []);
          }
          msgFromId(t) {
            return this.Zt.get(t);
          }
          chatFromId(t) {
            var e = this.Zu.get(t);
            return e && e.chat;
          }
          chatFromMsgId(t) {
            var e = this.msgFromId(t);
            return e && this.chatFromId(e.chatId);
          }
          chatFromJid(t) {
            var e = null;
            return (
              this.Zu.forEach((n) => {
                var r = n.chat;
                r.jid === t && (e = r);
              }),
              e
            );
          }
          oneToOneChatFromJid(t) {
            var e = this.chatFromJid(t);
            return e && "ONE_TO_ONE" === e.type ? e : null;
          }
          groupChatFromJid(t) {
            var e = this.chatFromJid(t);
            return e && "GROUP" === e.type ? e : null;
          }
          groupsInCommon(t) {
            var e = [];
            return (
              this.Zu.forEach((n) => {
                var r = n.chat;
                "GROUP" === r.type &&
                  r.groupInfo.participants.includes(t) &&
                  e.push(r);
              }),
              e.sort((t, e) => e.sortBy - t.sortBy),
              e
            );
          }
          markChatAsRead(t, e, n) {
            var r = this.chatFromId(t);
            if (r) {
              var i = (0, b.j)(r.msgInfo, {
                  unreadMsgCount: n,
                  oldestUnread: e,
                }),
                a = (0, b.j)(r, { msgInfo: i });
              return (
                "GROUP" === a.type && delete a.importantMsgCount,
                { type: "DID_READ_CHAT", chat: this.updateOrAddChat(a) }
              );
            }
          }
          updateOrAddChat(t, e) {
            var n,
              r,
              i = this.Zu.get(t.id);
            return (
              i
                ? (i.chat = t)
                : (0 === t.msgInfo.msgCount || e
                    ? ((n = !0), (r = !0))
                    : ((n = !1), (r = !1)),
                  this.Zu.set(t.id, {
                    chat: t,
                    msgIds: [],
                    loadedNewest: n,
                    loadedOldest: r,
                  })),
              t
            );
          }
          handleMsgsReceived(t) {
            for (
              var e = t.newMsgs, n = t.changedMsgs, r = t.affectedChats, i = 0;
              i < r.length;
              i++
            )
              this.updateOrAddChat(r[i], !0);
            for (var a = 0; a < e.length; a++) {
              var s = e[a];
              this.Zt.set(s.id, s);
              var u = this.Zu.get(s.chatId);
              u
                ? (u.msgIds.unshift(s.id), (u.loadedNewest = !0))
                : __LOG__(
                    4
                  )`StorageCache.handleMsgsReceived msg from unrecognized chat ${s.chatId}`;
            }
            for (var o = 0; o < n.length; o++) {
              var l = n[o].msg;
              this.Zt.set(l.id, l);
            }
          }
          handlePastParticipantsUpdated(t) {
            var e = [];
            return (
              t.forEach((t, n) => {
                var r = this.chatFromJid(n);
                if ("GROUP" === (null == r ? void 0 : r.type)) {
                  var i;
                  t
                    ? (i = (0, b.j)(r.groupInfo, { pastParticipants: t }))
                    : delete (i = Object.assign({}, r.groupInfo))
                        .pastParticipants;
                  var a = (0, b.j)(r, { groupInfo: i });
                  this.updateOrAddChat(a), e.push(a);
                }
              }),
              e
            );
          }
          mediaUpdated(t) {
            var e = [],
              n = [];
            return (
              t.forEach((t) => {
                var r = this.updateMsg(t);
                r && (e.push(t), n.push(r));
              }),
              0 === e.length
                ? null
                : { type: "MEDIA_UPDATED", msgs: e, affectedChats: n }
            );
          }
          mediaStatusUpdated(t, e) {
            var n = this.msgFromId(t);
            if (!n) return null;
            var r = n.content;
            switch (r.type) {
              case "image":
              case "sticker":
              case "voice":
              case "video":
              case "gif":
              case "vcard":
              case "document":
                if ("vcard" === r.type && !r.isMMS)
                  return (
                    __LOG__(4)`mediaStatusUpdated for non-MMS VCard message}`,
                    null
                  );
                var i = Object.assign({}, n, {
                    content: (0, b.j)(r, { mediaStatus: e }),
                  }),
                  a = this.updateMsg(i);
                return (
                  a && { type: "MEDIA_UPDATED", msgs: [i], affectedChats: [a] }
                );
              case "rich_hsm":
                var s = r.richContent;
                if (!s)
                  return (
                    __LOG__(4)`mediaStatusUpdated for non-media HSM}`, null
                  );
                switch (s.type) {
                  case "image":
                  case "video":
                  case "document":
                    var u = Object.assign({}, n, {
                        content: Object.assign({}, r, {
                          richContent: (0, b.j)(s, { mediaStatus: e }),
                        }),
                      }),
                      o = this.updateMsg(u);
                    return (
                      o && {
                        type: "MEDIA_UPDATED",
                        msgs: [u],
                        affectedChats: [o],
                      }
                    );
                  default:
                    return (
                      __LOG__(
                        4
                      )`mediaStatusUpdated for non-media rich HSM ${s.type}`,
                      null
                    );
                }
              default:
                return (
                  __LOG__(4)`mediaStatusUpdated for non-media ${r.type}`, null
                );
            }
          }
          changeAck(t, e) {
            return (
              this.updateOrAddChat(t),
              this.msgFromId(e.id)
                ? (this.updateMsg(e), { type: "MSG_ACK", chat: t, ackedMsg: e })
                : { type: "MSG_ACK", chat: t }
            );
          }
          updateMsg(t) {
            var e = this.chatFromId(t.chatId);
            return e ? (this.Zt.set(t.id, t), e) : null;
          }
          msgRangeLoaded(t, e, n, r, i, a) {
            var s = this.Zu.get(t);
            if (s) {
              var u = s.msgIds,
                o = [];
              if (
                (n.forEach((t) => {
                  var e = t.id;
                  this.Zt.set(e, t), o.push(e);
                }),
                0 !== u.length)
              ) {
                var l = e;
                if ("beginning" === l) {
                  if (!s.loadedOldest)
                    return void __LOG__(
                      4
                    )`Anchor is at the beginning, but has not loaded oldest`;
                  l = u[u.length - 1];
                }
                for (
                  var c = !1, d = !1, h = [], v = [], f = !1, p = 0;
                  p < u.length;
                  p++
                )
                  f
                    ? h.push(u[p])
                    : u[p] === l
                    ? ((c = !0), (f = !0))
                    : u[p] === ye
                    ? f
                      ? h.push(u[p])
                      : v.push(u[p])
                    : u[p] < l
                    ? ((f = !0), h.push(u[p]))
                    : v.push(u[p]);
                for (var _ = [], m = [], g = !1, b = 0; b < o.length; b++)
                  g
                    ? _.push(o[b])
                    : o[b] === l
                    ? ((d = !0), (g = !0))
                    : o[b] < l
                    ? ((g = !0), _.push(o[b]))
                    : m.push(o[b]);
                var S = null != r && r.end > 1,
                  E = null != r && r.start < 0,
                  O = s.loadedOldest || i || (S && _.length < 1),
                  A = s.loadedNewest || a || (E && m.length < 1);
                !S && _.length, !E && m.length;
                var y = h;
                S &&
                  (y = (function (t, e, n) {
                    var r = [...t];
                    r.length > 0 && r[0] !== ye && r.unshift(ye);
                    for (
                      var i = [], a = 0, s = 0;
                      a < r.length || s < e.length;

                    )
                      if (a >= r.length) i.push(e[s]), s++;
                      else if (s >= e.length)
                        (n && r[a] === ye) || i.push(r[a]), a++;
                      else {
                        var u = r[a];
                        r[a] === ye && (u = r[a + 1]),
                          e[s] > u
                            ? (i.push(e[s]), s++)
                            : u > e[s]
                            ? (i.push(u), r[a] === ye && a++, a++)
                            : (i.push(u), s++, r[a] === ye && a++, a++);
                      }
                    return i;
                  })(h, _, O));
                var C = v;
                E &&
                  (C = (function (t, e, n) {
                    var r = [...t];
                    r.length > 0 && r[r.length - 1] !== ye && r.push(ye);
                    for (
                      var i = [], a = r.length - 1, s = e.length - 1;
                      a >= 0 || s >= 0;

                    )
                      if (a < 0) i.unshift(e[s]), s--;
                      else if (s < 0)
                        (n && r[a] === ye) || i.unshift(r[a]), a--;
                      else {
                        var u = r[a];
                        r[a] === ye && (u = r[a - 1]),
                          e[s] < u
                            ? (i.unshift(e[s]), s--)
                            : u < e[s]
                            ? (i.unshift(u), r[a] === ye && a--, a--)
                            : (i.unshift(u), s--, r[a] === ye && a--, a--);
                      }
                    return i;
                  })(v, m, A));
                var L = [...C];
                !E &&
                  !c &&
                  C.length > 0 &&
                  C[C.length - 1] !== ye &&
                  L.push(ye),
                  (c || d) && L.push(l),
                  !S &&
                    !c &&
                    y.length > 0 &&
                    y[0] !== ye &&
                    L[L.length - 1] !== ye &&
                    L.push(ye),
                  L.push(...y),
                  (s.loadedOldest = O),
                  (s.loadedNewest = A),
                  (s.msgIds = L);
              } else
                0 === o.length
                  ? ((s.msgIds = []),
                    (s.loadedNewest = !0),
                    (s.loadedOldest = !0))
                  : ((s.msgIds = o),
                    (s.loadedNewest = a),
                    (s.loadedOldest = i));
            }
          }
          knownViewport(t, e, n) {
            var r = n.start,
              i = n.end,
              a = this.Zu.get(t);
            if (a) {
              var s = a.chat,
                u = a.msgIds,
                o = a.loadedOldest;
              if (0 !== s.msgInfo.msgCount) {
                var l = e;
                if ("beginning" === l) {
                  if (u.length < 1 || !o) return;
                  l = u[u.length - 1];
                }
                for (
                  var c = -1, d = -1, h = -1, v = 0;
                  -1 === h && v < u.length;
                  v++
                ) {
                  var f = u[v];
                  f === l
                    ? (c = v)
                    : f === ye && (-1 === c ? (d = v) : (h = v));
                }
                if (-1 !== c) {
                  for (
                    var p,
                      _ = Math.max(c + r, d + 1),
                      m = Math.min(c + i, -1 === h ? u.length : h),
                      g = [],
                      b = _;
                    b < m;
                    b++
                  ) {
                    var S = u[b];
                    if ("GAP" === S) throw new Error("cannot-be-GAP");
                    var E = this.Zt.get(S);
                    if (null == E)
                      return (
                        __LOG__(
                          4
                        )`Failed to retrieve a msg that should have existed.`,
                        void SEND_LOGS(
                          "StorageCache.knownViewport: this._msgs.get returned undefined"
                        )
                      );
                    g.push(E);
                  }
                  if (0 !== g.length)
                    return {
                      newestIndex: a.loadedNewest
                        ? ((p = c), 0 === p ? 0 : -p)
                        : void 0,
                      oldestIndex: a.loadedOldest ? u.length - 1 - c : void 0,
                      range: { start: _ - c, end: m - c },
                      msgs: g,
                    };
                  __LOG__(
                    3
                  )`Found index, but no meessages seen, report viewport as non existing`;
                }
              } else
                __LOG__(4)`StorageCache:knownViewport we should not be here`;
            }
          }
          updateFromAppInfo(t) {
            t.chats.forEach((t) => {
              this.updateOrAddChat(t);
            }),
              t.contacts.forEach((t) => {
                this.contacts[t.jid] = t;
              });
          }
          buildMainStore(t, e, n) {
            var r =
                null != n
                  ? {
                      current: {
                        peerJid: n,
                        state: "loading",
                        isCaller: !1,
                        isInterrupted: !1,
                        isLocallyMuted: !1,
                        duration: null,
                      },
                    }
                  : {},
              i = {
                mode: "main",
                user: t.user,
                chatlist: this.buildReduxStoreChatlist(),
                avatars: this.avatars,
                contacts: this.contacts,
                groupChatStates: {},
                oneToOneChatStates: {},
                onlineOrLastSeen: {},
                settings: t.settings,
                verboseSecurity: t.verboseSecurity,
                blocked: t.blocked,
                serverProps: t.serverProps,
                player: { active: null, currentTimes: {} },
                youtubePlayer: null,
                drafts: (0, pe.b)(),
                screens: [],
                sentGroupInviteRevokes: t.sentGroupInviteRevokes,
                receivedGroupInviteRevokes: t.receivedGroupInviteRevokes,
                calls: r,
                tab: { key: "chats" },
                connected: !lt() || navigator.onLine,
                commsConnected: !1,
                isVoipAvailable: t.hasVoip && t.serverProps.voipCallEnabled,
                starredIndexMissing: !0,
                status: t.status,
                jobs: t.jobs,
                profilePhotoScreenState: t.profilePhotoScreenState,
                tosAccepted: t.tosAccepted,
                storageManager: {
                  lastStorageStatsTs: null,
                  currentStorageStats: {},
                },
              };
            return (
              e && (i.renderFast = !0),
              t.userNotice && (i.userNotice = t.userNotice),
              i
            );
          }
          buildReduxStoreChatlist() {
            var t = {},
              e = [];
            return (
              this.Zu.forEach((n) => {
                var r = n.chat;
                e.push(r.id), (t[r.id] = r);
              }),
              e.sort((e, n) => t[n].sortBy - t[e].sortBy),
              {
                orderedChatIds: e,
                chats: t,
                lastScrollPosition: null,
                archived: !1,
              }
            );
          }
          deleteMsgs(t, e, n) {
            this.updateOrAddChat(t, !1), this.Zy(t.id, e);
          }
          Zy(t, e) {
            var n = this.Zu.get(t);
            if (n) {
              var r = n.msgIds,
                i = new Set();
              e.forEach((t, e) => {
                this.Zt.delete(t) && i.add(t);
                var n = r.findIndex((e) => e === t);
                if (-1 !== n) {
                  var a = n > 0 && r[n - 1] === ye,
                    s = n < r.length - 1 && r[n + 1] === ye;
                  r.splice(n, a && s ? 2 : 1), i.add(t);
                }
              });
            }
          }
          deleteChat(t) {
            if (!this.Zu.has(t)) return null;
            var e = this.Zu.get(t);
            return (
              e && e.msgIds.forEach((t) => "GAP" !== t && this.Zt.delete(t)),
              this.Zu.delete(t),
              { type: "CHAT_DELETED", chatId: t }
            );
          }
          fullsizeAvatarLoaded(t, e) {
            return (
              this.Zv.set(t, { status: "loaded", avatar: e }),
              { type: "FULLSIZE_AVATAR_LOADED", jid: t, avatar: e }
            );
          }
          fullsizeAvatar(t) {
            return this.Zv.get(t);
          }
          clearFullsizeAvatar(t) {
            this.Zv.delete(t);
          }
          loadingFullsizeAvatar(t) {
            return (
              this.Zv.set(t, { status: "loading" }),
              { type: "FULLSIZE_AVATAR_STARTED_LOADING", jid: t }
            );
          }
          getCallLogGroups() {
            var t = this.Zw;
            return { groups: t.groups, orderedGroupIds: t.orderedGroupIds };
          }
          callLogsLoading(t) {
            this.Zw.requestId = t;
          }
          updateCallLogGroups(t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            (null != n && this.Zw.requestId !== n) ||
              ((this.Zw.requestId = null),
              (this.Zw.groups = t),
              (this.Zw.orderedGroupIds = e));
          }
          pressHsmButtonByButtonIndex(t, e) {
            var n = this.msgFromId(t);
            if (!n) return null;
            var r = n.content;
            if ("rich_hsm" !== r.type) return null;
            var i = r.buttons;
            if (null == i) return null;
            if (e < 0 || e > i.length) return null;
            if ("quick_reply" !== i[e].type) return null;
            var a = i.map((t, n) =>
                n === e && "quick_reply" === t.type
                  ? Object.assign({}, t, { pressed: !0 })
                  : t
              ),
              s = Object.assign({}, n, {
                content: Object.assign({}, r, { buttons: a }),
              });
            return this.updateMsg(s), { type: "HSM_BUTTON_PRESSED", msg: s };
          }
          handleExpiredViewOnceMsgs(t, e) {
            var n = [];
            return (
              t.forEach((t) => {
                t.chatId === e
                  ? this.Zx.push(t.id)
                  : (n.push(t), this.updateMsg(t));
              }),
              n
            );
          }
          clearExpiredViewOnceMsgs() {
            var t = [];
            return (
              this.Zx.forEach((e) => {
                var n = this.msgFromId(e);
                if (
                  n &&
                  ("image" === n.content.type || "video" === n.content.type) &&
                  "active" === n.content.viewOnceState
                ) {
                  var r = Object.assign({}, n, {
                    content: (0, b.j)(n.content, { viewOnceState: "expired" }),
                  });
                  this.updateMsg(r), t.push(e);
                }
              }),
              (this.Zx = []),
              t
            );
          }
        },
        Le = n(371),
        Te = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        we = {
          INIT: "@@redux/INIT" + Te(),
          REPLACE: "@@redux/REPLACE" + Te(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Te();
          },
        };
      function Ie(t) {
        if ("object" != typeof t || null === t) return !1;
        for (var e = t; null !== Object.getPrototypeOf(e); )
          e = Object.getPrototypeOf(e);
        return Object.getPrototypeOf(t) === e;
      }
      function ke(t, e, n) {
        var r;
        if (
          ("function" == typeof e && "function" == typeof n) ||
          ("function" == typeof n && "function" == typeof arguments[3])
        )
          throw new Error(
            "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
          );
        if (
          ("function" == typeof e && void 0 === n && ((n = e), (e = void 0)),
          void 0 !== n)
        ) {
          if ("function" != typeof n)
            throw new Error("Expected the enhancer to be a function.");
          return n(ke)(t, e);
        }
        if ("function" != typeof t)
          throw new Error("Expected the reducer to be a function.");
        var i = t,
          a = e,
          s = [],
          u = s,
          o = !1;
        function l() {
          u === s && (u = s.slice());
        }
        function c() {
          if (o)
            throw new Error(
              "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
            );
          return a;
        }
        function d(t) {
          if ("function" != typeof t)
            throw new Error("Expected the listener to be a function.");
          if (o)
            throw new Error(
              "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
            );
          var e = !0;
          return (
            l(),
            u.push(t),
            function () {
              if (e) {
                if (o)
                  throw new Error(
                    "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                  );
                (e = !1), l();
                var n = u.indexOf(t);
                u.splice(n, 1), (s = null);
              }
            }
          );
        }
        function h(t) {
          if (!Ie(t))
            throw new Error(
              "Actions must be plain objects. Use custom middleware for async actions."
            );
          if (void 0 === t.type)
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
          if (o) throw new Error("Reducers may not dispatch actions.");
          try {
            (o = !0), (a = i(a, t));
          } finally {
            o = !1;
          }
          for (var e = (s = u), n = 0; n < e.length; n++) (0, e[n])();
          return t;
        }
        function v(t) {
          if ("function" != typeof t)
            throw new Error("Expected the nextReducer to be a function.");
          (i = t), h({ type: we.REPLACE });
        }
        function f() {
          var t,
            e = d;
          return (
            ((t = {
              subscribe: function (t) {
                if ("object" != typeof t || null === t)
                  throw new TypeError("Expected the observer to be an object.");
                function n() {
                  t.next && t.next(c());
                }
                return n(), { unsubscribe: e(n) };
              },
            })[Le.a] = function () {
              return this;
            }),
            t
          );
        }
        return (
          h({ type: we.INIT }),
          ((r = { dispatch: h, subscribe: d, getState: c, replaceReducer: v })[
            Le.a
          ] = f),
          r
        );
      }
      function De(t, e, n) {
        return ke(t, e, n);
      }
      var Ne = n(61),
        Ge = n(330),
        Me = n(222),
        Re = n(345),
        Pe = n(1),
        Ue = n(13),
        je = n(24),
        xe = n(176),
        Fe = n(64);
      function Ve(t, e) {
        var n = e,
          r = (0, _.a)(t.getStoreState());
        if (r)
          if ((t.closeAllScreens(), "text/vcard" === n.type)) {
            var i = r.serverProps.maxParticipants;
            n.blobs.length > i &&
              ((0, c.e)({ title: 243, text: [i, 247] }),
              (n = { type: "text/vcard", blobs: n.blobs.slice(0, i) })),
              t.openScreen("SHARE_SCREEN", { data: n });
          } else
            "text/plain" === n.type
              ? (function (t, e) {
                  if (0 === e.blobs.length)
                    return (
                      __LOG__(
                        3
                      )`No blobs received when trying to openSharedPlainText`,
                      void SEND_LOGS("share-no-blobs")
                    );
                  t.spinUntilReady(
                    (0, b.h)(e.blobs[0]).then((e) => () => {
                      var n = new je.a(e),
                        r = n.readString(n.size()).trim();
                      0 !== r.length
                        ? t.openScreen("SHARE_TEXT_SCREEN", { text: r })
                        : __LOG__(3)`openSharedPlainText no text to send`;
                    }),
                    957,
                    894
                  );
                })(t, n)
              : "text/sms" === n.type
              ? (function (t, e) {
                  if (null == e.number)
                    t.openScreen("SHARE_TEXT_SCREEN", { text: e.body || "" });
                  else {
                    var n = e.number,
                      r = (0, _.a)(t.getStoreState());
                    if (!r) return;
                    var i = (0, b.y)(r.contacts).find(
                      (t) => (null == t ? void 0 : t.phonebookPhone) === n
                    );
                    if (i && !i.noWhatsApp)
                      return void (0, gt.a)(
                        t,
                        i.jid,
                        "newest",
                        { text: e.body || "" },
                        "withComposeBoxOpened"
                      );
                    if (!(0, Fe.e)(n))
                      return void (0, c.e)({ text: [(0, tt.f)(n), 250] });
                    var a = t.sendAndReceive("backend", "contactQuerySync", {
                      rawPhoneNumber: n,
                    });
                    t.spinUntilReadyOverlay(
                      a.then((r) => () => {
                        if ("not-found" === r)
                          (0, c.e)({
                            text: [
                              (0, Pe.b)(
                                2,
                                xe.b,
                                { phone: n, className: "Yl" },
                                "phone"
                              ),
                              252,
                            ],
                          });
                        else if ("offline" === r)
                          (0, c.e)({
                            title: 955,
                            text: [
                              (0, Pe.b)(
                                2,
                                xe.b,
                                { phone: n, className: "Yl" },
                                "phone"
                              ),
                              251,
                            ],
                          });
                        else if ("invalid" === r)
                          (0, c.e)({ text: [(0, tt.f)(n), 250] });
                        else {
                          var i = null;
                          e.body && (i = { text: e.body }),
                            (0, gt.a)(t, r, "newest", i);
                        }
                        return "dontClose";
                      }),
                      { title: 956 }
                    );
                  }
                })(t, n)
              : (n.type,
                n.blobs.length > 1
                  ? t.openScreen("SHARE_SCREEN", { data: n })
                  : 1 === n.blobs.length
                  ? "video/*" === n.type
                    ? t.openScreen("SEND_MEDIA", {
                        from: "externalShare",
                        media: { type: "video", file: n.blobs[0] },
                        defaultCaption: "",
                        actionAfterSending: { type: "unknown" },
                      })
                    : (n.type,
                      t.openScreen("SEND_MEDIA", {
                        from: "externalShare",
                        media: { type: "image", blob: n.blobs[0] },
                        defaultCaption: "",
                        actionAfterSending: { type: "unknown" },
                      }))
                  : (__LOG__(
                      3
                    )`No blobs received when trying to open share screen`,
                    SEND_LOGS("share-no-blobs")));
      }
      function Be(t, e) {
        if ((0, _.a)(t.getStoreState())) {
          var n;
          if ("share" === e.name) (n = 3), Ve(t, e.data);
          else if ("new" === e.name && "websms/sms" === e.data.type)
            (n = 3),
              Ve(t, {
                type: "text/sms",
                body: e.data.body,
                number: e.data.number,
              });
          else if ("view" === e.name || "whatsapp_open" === e.name) {
            var r = e.data;
            if ("url" === r.type) {
              var i = r.url;
              if (null == i)
                return (
                  __LOG__(4)`Got an incoming view web activity without URL`,
                  void SEND_LOGS("no-url-view-activity")
                );
              var a = i.toLowerCase();
              if (a.startsWith(Me.a)) {
                var s = (0, Me.b)(i);
                if (null == s) return void (0, d.a)(418);
                (0, Re.a)(t, s, void 0, !1),
                  WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 8]);
              } else if (a.startsWith(v.Z)) {
                var u = (0, $.i)(i);
                if (null == u)
                  return (
                    __LOG__(
                      4
                    )`The URL was incorrect but started by the right wa.me url`,
                    void SEND_LOGS("bad-wame-url")
                  );
                (0, dt.f)(i, t)
                  ? ((n = 1),
                    WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 27]))
                  : ((0, Me.c)(t, u),
                    (n = 2),
                    WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 2]));
              } else
                a.startsWith(v.ab) &&
                  (0, dt.f)(i, t) &&
                  ((n = 1),
                  WAM.log("regular", 2136, void 0, [2, 0, 1, 3, 0, 27]));
            }
          }
          return n;
        }
      }
      function $e(t, e) {
        var n = null;
        switch (t.action) {
          case "openChat":
            var r = t.chatId;
            if ("number" != typeof r)
              return void __LOG__(4)`Bad openChat Notification ${t}`;
            (n = 2), (0, gt.c)(e, r, "unread");
            break;
          case "openGdprReportScreen":
            e.openScreen("REQUEST_ACCOUNT_INFO");
            break;
          case "newReaction":
            var i,
              a = t.chatId;
            if (
              ((n = 2),
              "ONE_TO_ONE" === t.type
                ? (0, b.x)(t.reactions).forEach((t) => {
                    (!i || t < i) && (i = t);
                  })
                : (0, b.y)(t.reactions).forEach((t) => {
                    (0, b.x)(t).forEach((t) => {
                      (!i || t < i) && (i = t);
                    });
                  }),
              !i)
            )
              return void __LOG__(4)`No msg in reaction`;
            (0, gt.c)(e, a, i);
            break;
          case "handleCall":
            "accept" === t.option
              ? e.acceptVoipCallFromNotification(t.jid)
              : e.rejectVoipCall();
            break;
          case "missedCall":
            e.openTab("calls");
            break;
          case "openBanAppealScreen":
            break;
          case "messageKept":
            var s = t.msgId,
              u = (0, p.m)(s);
            (n = 2), (0, gt.c)(e, u, s);
            break;
          default:
            t.action, __LOG__(4)`Unrecognized notification ${t}`;
        }
        return n;
      }
      var He,
        ze,
        We = n(428),
        Je = n(386),
        Ke = n(59),
        qe = n(153),
        Ye = n(265),
        Xe = n(253),
        Qe = n(63),
        Ze = n(147);
      function tn(t) {
        return (
          null == He &&
            (He = Promise.all([n.e(13), n.e(16), n.e(194)])
              .then(n.bind(null, 719))
              .then((t) => t.default)),
          (0, Pe.b)(2, Ze.a, {
            props: t,
            promise: He,
            render: (t, e) => (0, Pe.i)((0, Pe.b)(2, e, Object.assign({}, t))),
          })
        );
      }
      function en(t) {
        return (
          null == ze &&
            (ze = Promise.all([n.e(16), n.e(173)])
              .then(n.bind(null, 725))
              .then((t) => t.AppPlayer)),
          (0, Pe.b)(2, Ze.a, {
            props: t,
            promise: ze,
            render: (t, e) => (0, Pe.i)((0, Pe.b)(2, e, Object.assign({}, t))),
          })
        );
      }
      var nn,
        rn = n(164);
      function an(t) {
        var e =
          (nn ||
            (nn = n
              .e(36)
              .then(n.bind(null, 722))
              .then((t) => t.default)),
          nn);
        return (0, Pe.b)(2, Ze.a, {
          props: t,
          promise: e,
          fallback: () => (0, Pe.b)(2, rn.a),
          render: (t, e) => (0, Pe.i)((0, Pe.b)(2, e, Object.assign({}, t))),
        });
      }
      var sn = n(290),
        un = n(358),
        on = n(161),
        ln = n(18),
        cn = n(200),
        dn = n(245),
        hn = n(125),
        vn = n(76),
        fn = n(448),
        pn = n(291),
        _n = n(306),
        mn = n(235),
        gn = n(194);
      function bn(t) {
        return null == t || "chat" !== t.type ? null : t.value;
      }
      function Sn(t) {
        return null == t || "archived-chat" !== t.type ? null : t.value;
      }
      function En(t) {
        return null == t || "contact" !== t.type ? null : t.value;
      }
      var On = (0, gn.e)((t, e, n, r, i) => {
          var a = [];
          null != i &&
            "banner" === i.type &&
            a.push({
              type: "user-notice-banner",
              id: "user-notice-banner",
              banner: i,
            });
          var s = [];
          if (n) {
            for (var u in n) {
              var o,
                l,
                c = (0, p.f)(u);
              if (null != c) {
                var d = n[c].step;
                ("running" === d.status ||
                  ("finished" === d.status &&
                    "no-network" ===
                      (null == (o = d.result) || null == (l = o.error)
                        ? void 0
                        : l.reason))) &&
                  (s.push(c),
                  a.push({ type: "chat", value: (0, mn.a)(n[c]), id: c }));
              } else
                __LOG__(4)`Unable to case pending group id`,
                  SEND_LOGS("render-chat-list-pending-group-id");
            }
            s.sort((t, e) => n[e].jobIn.timestamp - n[t].jobIn.timestamp);
          }
          return (
            t.forEach((t) => {
              var n = e[t];
              !n ||
                n.archived ||
                n.notStarted ||
                a.push({ type: "chat", value: n, id: t });
            }),
            (0, At.j)(r, (t) => {
              if (null != t.chatId) {
                var n = e[t.chatId];
                return n && "ONE_TO_ONE" === n.type && null != n.notStarted;
              }
              return !0;
            }).forEach((t) => {
              a.push({ type: "contact", value: t, id: t.jid });
            }),
            t.forEach((t) => {
              var n = e[t];
              n &&
                n.archived &&
                a.push({ type: "archived-chat", value: n, id: t });
            }),
            a
          );
        }),
        An = (0, gn.b)((t, e) => {
          var n = [];
          return (
            t.forEach((t) => {
              var r = e[t];
              r && r.archived && n.push({ type: "chat", value: r, id: t });
            }),
            n
          );
        }),
        yn = n(264),
        Cn = n(383),
        Ln = n(226),
        Tn = class extends Ne.a {
          shouldComponentUpdate(t, e) {
            var n = this.props;
            return (
              n !== t &&
              (n.archived !== t.archived ||
                n.blocked !== t.blocked ||
                n.chats !== t.chats ||
                n.lastScrollPosition !== t.lastScrollPosition ||
                n.contacts !== t.contacts ||
                n.kickReason !== t.kickReason ||
                n.renderFast !== t.renderFast ||
                n.connected !== t.connected ||
                n.isVoipAvailable !== t.isVoipAvailable ||
                n.userNoticeEnabled !== t.userNoticeEnabled ||
                n.userNotice !== t.userNotice ||
                n.items !== t.items)
            );
          }
          constructor(t, e) {
            super(t, e), wn.call(this);
            var n,
              r = t.lastScrollPosition;
            (this.Ei = (function (t, e) {
              if (0 !== e.length)
                return t
                  ? {
                      item: e.find((e) => e.id === t.item) || e[0],
                      scrollFromTop: t.fromTop,
                    }
                  : { item: e[0], scrollFromTop: "start" };
            })(r, t.items)),
              (this.Ej =
                (t.items,
                (n = t.contacts),
                {
                  filter: (t, e) =>
                    (function (t, e, n) {
                      return [
                        ...(0, pn.d)(t, e, bn, n),
                        ...(0, pn.e)(t, e, En),
                        ...(0, pn.d)(t, e, Sn, n),
                        { type: "contacts-help", id: "contacts-help" },
                      ];
                    })(t, e, n),
                  emptyLabel: 132,
                }));
          }
          componentDidUpdate(t) {
            (function (t) {
              if (t)
                switch (t) {
                  case "needs_update":
                    (0, c.g)({
                      title: 243,
                      text: 315,
                      left: 880,
                      onSoftLeft: Oe.closeApp,
                      right: 941,
                      onSoftRight: _n.b,
                      onBack: Oe.closeApp,
                    });
                    break;
                  default:
                    __LOG__(
                      4
                    )`User will be kicked, but the reason is not in the list`,
                      (0, c.g)({
                        title: 243,
                        text: 537,
                        center: 902,
                        onSoftCenter: Oe.closeApp,
                        onBack: Oe.closeApp,
                      });
                }
            })(this.props.kickReason),
              super.componentDidUpdate(t);
          }
          componentWillUnmount() {
            (function (t, e) {
              if (e.current) {
                var n = e.current.getSelected();
                if (null != n && "contacts-help" !== n.item.type) {
                  var r,
                    i = n.item;
                  t.dispatchLazily({
                    type: "UPDATE_CHATLIST_SCROLL",
                    lastScrollPosition: {
                      item: i.id,
                      fromTop:
                        (null == (r = n.node.getClientRect())
                          ? void 0
                          : r.top) || 0,
                    },
                  });
                }
              }
            })(this.props.backend, this.Ek),
              super.componentWillUnmount();
          }
          El() {
            return 0 === this.props.items.length;
          }
          Em() {
            return this.props.archived
              ? (0, Pe.b)(2, ln.b, { l10n: 27 })
              : this.El()
              ? (0, Pe.b)(2, ln.b, { l10n: 1110 })
              : null;
          }
          addSoftKeys(t, e) {
            var n = this.props.archived;
            t.setRightOptions(Gn),
              n
                ? t.setLeftAsBack()
                : this.El()
                ? t.setCenterLabel(858, Nn)
                : t.setLeftLabel(599, Dn);
          }
          render() {
            var t = this.props,
              e = t.archived,
              n = t.items,
              r = t.renderFast,
              i = this.Em(),
              a = (0, Pe.b)(
                2,
                dn.c,
                {
                  className: "AM",
                  items: n,
                  keyOf: kn,
                  search: this.Ej,
                  start: this.Ei,
                  estimatedItemHeight: vn.b,
                  emptyLabel: 124,
                  renderItem: this.En,
                  deps: [r],
                  prefilledHeight: un.a,
                },
                null,
                this.Ek
              );
            return e
              ? (0, Pe.b)(2, sn.a, { title: i, children: a })
              : (0, Pe.b)(2, un.b, { title: i, children: a });
          }
        },
        wn = function () {
          (this.Ek = Ue.e()),
            (this.En = (t, e, n, r) => {
              var i,
                a,
                s = this.props,
                u = s.blocked,
                o = s.isVoipAvailable,
                l = s.connected,
                c = 0 === n || r[n - 1].type !== t.type;
              switch (t.type) {
                case "chat":
                case "archived-chat":
                  "ONE_TO_ONE" === t.value.type
                    ? (i = (0, Pe.b)(2, yn.c, {
                        blocked: u,
                        chat: t.value,
                        contacts: s.contacts,
                        selected: e,
                        renderFast: s.renderFast,
                        isVoipAvailable: o,
                      }))
                    : "GROUP" === t.value.type
                    ? (i = (0, Pe.b)(2, yn.b, {
                        chat: t.value,
                        selected: e,
                        connected: l,
                        renderFast: s.renderFast,
                      }))
                    : (t.value.type,
                      (i = (0, Pe.b)(2, yn.d, {
                        chat: t.value,
                        selected: e,
                        renderFast: s.renderFast,
                      }))),
                    "archived-chat" === t.type &&
                      c &&
                      (a = (0, Pe.b)(2, hn.g, { text: 27 }));
                  break;
                case "contact":
                  (i = (0, Pe.b)(2, yn.a, {
                    contact: t.value,
                    blocked: u,
                    isVoipAvailable: o,
                    selected: e,
                  })),
                    c && (a = (0, Pe.b)(2, hn.g, { text: 183 }));
                  break;
                case "user-notice-banner":
                  i = (0, Pe.b)(2, yn.e, { selected: e, banner: t.banner });
                  break;
                case "contacts-help":
                  i = (0, Pe.b)(2, fn.a, { selected: e });
                  break;
                default:
                  return (0, Ee.a)(t);
              }
              return a ? (0, Pe.c)([a, i], 0) : i;
            });
        },
        In = (0, Ke.f)(
          (0, Ne.e)(Tn),
          (t) => ({
            archived: t.chatlist.archived,
            blocked: t.blocked,
            chats: t.chatlist.chats,
            contacts: t.contacts,
            kickReason: t.kickReason,
            lastScrollPosition: t.chatlist.lastScrollPosition,
            orderedChatIds: t.chatlist.orderedChatIds,
            renderFast: !!t.renderFast,
            connected: t.connected,
            isVoipAvailable: t.isVoipAvailable,
            pendingGroupJobs: (0, _.i)(t, "createGroup"),
            userNoticeEnabled: (0, cn.e)(t.serverProps),
            userNotice: t.userNotice,
          }),
          (t, e) => {
            var n,
              r = t.archived,
              i = t.chats,
              a = t.contacts,
              s = t.orderedChatIds,
              u = t.userNoticeEnabled,
              o = t.userNotice;
            return (
              (n = r
                ? An(s, i)
                : On(s, i, t.pendingGroupJobs, a, u ? o : void 0)),
              {
                archived: r,
                backend: e,
                blocked: t.blocked,
                chats: i,
                contacts: a,
                kickReason: t.kickReason,
                lastScrollPosition: t.lastScrollPosition,
                renderFast: t.renderFast,
                connected: t.connected,
                isVoipAvailable: t.isVoipAvailable,
                userNoticeEnabled: t.userNoticeEnabled,
                items: n,
                userNotice: t.userNotice,
              }
            );
          }
        );
      function kn(t) {
        return String(t.id);
      }
      function Dn(t) {
        t.openScreen("NEW_CHAT");
      }
      function Nn(t) {
        (0, Cn.b)(t);
      }
      function Gn(t) {
        var e = new on.a();
        (0, Ln.a)(t, e), (0, c.j)(e);
      }
      var Mn = n(435),
        Rn = n(77),
        Pn = n(21),
        Un = n(44),
        jn = n(192),
        xn = n(70),
        Fn = n(299),
        Vn = n(163),
        Bn = n(331);
      function $n(t) {
        switch (t) {
          case "incoming":
            return "incoming";
          case "calling":
          case "ringing":
          case "busy":
            return "outgoing";
          case "ongoing":
            return "ongoing";
          case "ending":
          case "ending-missed":
          case "ending-rejected":
            return "ending";
          case "loading":
            return "loading";
          case "error":
            return "error";
          default:
            return (0, Ee.a)(t);
        }
      }
      function Hn(t) {
        var e = t.callState,
          n = t.contacts,
          r = t.peerJid,
          i = t.isCaller,
          a = t.isInterrupted,
          s = t.isLocallyMuted,
          u = t.errorCode,
          o = t.duration,
          l = null == o ? null : Math.round(o / 1e3),
          c = n[r],
          d =
            "error" === e
              ? (function (t, e, n) {
                  var r,
                    i =
                      null != (r = (0, Un.a)((0, Un.c)(e, n)))
                        ? r
                        : (0, Fe.d)(e),
                    a = [i, 201];
                  switch (t) {
                    case 401:
                      a = 652;
                      break;
                    case 403:
                      a = [i, 201];
                      break;
                    case 404:
                      a = [i, 202];
                      break;
                    case 405:
                      a = [i, 198];
                      break;
                    case 406:
                      a = [i, 200];
                      break;
                    case 426:
                      a = [i, 199];
                      break;
                    case 460:
                      a = [i, 200];
                      break;
                    default:
                      a = [i, 201];
                  }
                  return (0, Pn.k)(a);
                })(u, r, n)
              : (function (t) {
                  var e = t.callState,
                    n = t.isCaller,
                    r = t.isLocallyMuted,
                    i = t.isInterrupted,
                    a = t.duration;
                  switch (e) {
                    case "incoming":
                      return (0, Pn.k)(90);
                    case "calling":
                      return (0, Pn.k)(80);
                    case "ringing":
                      return (0, Pn.k)(106);
                    case "busy":
                      return (0, Pn.k)(79);
                    case "ongoing":
                      return (function (t, e, n) {
                        return e
                          ? (0, Pn.k)(104)
                          : t
                          ? (0, Pn.k)(null == n ? 103 : [(0, Rn.b)(n), 32])
                          : null == n
                          ? null
                          : (0, Rn.b)(n);
                      })(r, i, a);
                    case "ending":
                      return (0, Pn.k)(null == a ? 87 : [(0, Rn.b)(a), 29]);
                    case "ending-missed":
                      return (0, Pn.k)(88);
                    case "ending-rejected":
                      return (0, Pn.k)(89);
                    case "loading":
                      return (0, Pn.k)(n ? 80 : 83);
                    default:
                      return (0, Ee.a)(e);
                  }
                })({
                  callState: e,
                  isCaller: i,
                  isInterrupted: a,
                  isLocallyMuted: s,
                  duration: l,
                });
        return {
          state: $n(e),
          isCaller: t.isCaller,
          isLocallyMuted: s,
          status: d,
          name: null == c ? null : (0, Un.a)(c),
          phone: (0, Fe.d)(r),
          uri: t.uri,
        };
      }
      function zn(t) {
        return {
          isRtl: (0, Pn.g)(),
          data: Hn(t),
          l10n: {
            brand: (0, Pn.k)(112),
            accept: (0, Pn.k)(78),
            reject: (0, Pn.k)(105),
            end: (0, Pn.k)(86),
            mute: (0, Pn.k)(102),
            unmute: (0, Pn.k)(110),
            speakerOn: (0, Pn.k)(108),
            speakerOff: (0, Pn.k)(107),
            ok: (0, Pn.k)(902),
            errorTitle: (0, Pn.k)(654),
          },
        };
      }
      var Wn = class extends Ue.a {
        constructor() {
          var t;
          return (
            (t = super(...arguments)),
            (this.attentionWindow = null),
            (this.isReady = !1),
            (this.Ee = null),
            (this.Ef = null),
            (this.onMessageReceived = (t) => {
              var e = t.data;
              if (t.origin === self.location.origin && null != e) {
                if (
                  ("log" === e.action &&
                    "string" == typeof e.type &&
                    "string" == typeof e.message &&
                    this.onLogReceived(e.type, e.message),
                  "command" === e.action && "string" == typeof e.command)
                ) {
                  var n = e.command;
                  jn.a.has(n)
                    ? this.onCommandReceived(n)
                    : __LOG__(
                        2
                      )`Call::onMessageReceived Unhandled command ${n}`;
                }
                "error" === e.action &&
                  "string" == typeof e.message &&
                  this.onErrorReceived(e.message);
              }
            }),
            t
          );
        }
        shouldComponentUpdate(t, e) {
          var n = this.props;
          return (
            n !== t &&
            (n.avatar !== t.avatar ||
              n.callState !== t.callState ||
              n.peerJid !== t.peerJid ||
              n.contacts !== t.contacts ||
              n.isCaller !== t.isCaller ||
              n.isInterrupted !== t.isInterrupted ||
              n.isLocallyMuted !== t.isLocallyMuted ||
              n.errorCode !== t.errorCode ||
              n.duration !== t.duration ||
              n.connectionStatus !== t.connectionStatus ||
              n.uri !== t.uri)
          );
        }
        componentDidMount() {
          var t = this.props;
          null == t.avatar && (0, Q.b)(t.backend, t.peerJid),
            "ongoing" === t.callState && this.Eg(),
            localStorage.setItem(jn.b, JSON.stringify(zn(t))),
            (this.attentionWindow = self.open(
              "call.html",
              "_blank",
              "attention"
            )),
            self.addEventListener("message", this.onMessageReceived),
            null != window.AudioChannelClient &&
              ((this.Ef = new window.AudioChannelClient("normal")),
              this.Ef.requestChannel());
        }
        componentDidUpdate(t) {
          var e = this.attentionWindow,
            n = this.props;
          if (
            (this.manageCallStateUpdate(t.callState, n.callState),
            null != e && this.isReady)
          ) {
            var r = Hn(n);
            e.postMessage(r, e.location);
          } else localStorage.setItem(jn.b, JSON.stringify(zn(n)));
        }
        componentWillUnmount() {
          this.Eh(),
            self.removeEventListener("message", this.onMessageReceived),
            localStorage.removeItem(jn.b),
            null != this.attentionWindow && this.attentionWindow.close(),
            null != this.Ef && this.Ef.abandonChannel();
        }
        manageCallStateUpdate(t, e) {
          "ongoing" !== t && "ongoing" === e && this.Eg(),
            "ongoing" === t && "ongoing" !== e && this.Eh(),
            !t.startsWith("ending") &&
              e.startsWith("ending") &&
              setTimeout(
                () => this.props.backend.dispatch({ type: "CALL_ENDED" }),
                1500
              );
        }
        Eg() {
          var t = this.props.backend;
          this.Ee = setInterval(() => {
            t.updateVoipCallDuration();
          }, 1e3);
        }
        Eh() {
          clearInterval(this.Ee);
        }
        onLogReceived(t, e) {
          switch (t) {
            case "info":
              break;
            case "log":
              __LOG__(2)`Call::onLogReceived ${e}`;
              break;
            case "warn":
              __LOG__(3)`Call::onLogReceived ${e}`;
              break;
            case "error":
              __LOG__(4)`Call::onLogReceived ${e}`;
              break;
            default:
              __LOG__(2)`Call::onLogReceived Unhandled type ${t} : ${e}`;
          }
        }
        onCommandReceived(t) {
          var e = this.props.backend;
          switch (t) {
            case "accept":
              e.acceptVoipCall();
              break;
            case "clearError":
              e.dispatch({ type: "CALL_ERROR_CLEARED" });
              break;
            case "end":
              e.maybeCloseOrphanedCallScreen(this.props.connectionStatus),
                e.endVoipCall();
              break;
            case "mute":
              e.muteVoipCall(!0);
              break;
            case "reject":
              e.rejectVoipCall();
              break;
            case "unmute":
              e.muteVoipCall(!1);
              break;
            case "closeImmediatelyAndEnd":
              e.dispatch({ type: "CLOSE_CALL_SCREEN" }), e.endVoipCall();
              break;
            default:
              this.isReady = !0;
          }
        }
        onErrorReceived(t) {
          __LOG__(2)`Call::onErrorReceived ${t}`,
            SEND_LOGS("call-screen-error");
        }
        render() {
          return (0, Pe.b)(2, rn.a);
        }
      };
      function Jn(t, e) {
        var n = Object.assign({}, t, { uri: e });
        return (0, Pe.i)((0, Pe.b)(2, Wn, Object.assign({}, n)));
      }
      var Kn,
        qn = new Bn.a({
          idealMaxSize: 10,
          generator: (t) => {
            return ((e = t.jid),
            (n = t.avatar),
            null == n
              ? Promise.resolve()
              : (0, xn.getProfilePicTable)()
                  .getThumb(e)
                  .then((t) =>
                    null != t && t.photoId === n.photoId ? t.image : null
                  )).then((t) => t && (0, Vn.a)(t));
            var e, n;
          },
          destroyer(t) {
            t.then((t) => t && (0, Vn.b)(t));
          },
          serializer(t) {
            var e = t.jid,
              n = t.avatar;
            return `${e}/${(null == n ? void 0 : n.photoId) || ""}`;
          },
        }),
        Yn = (0, Fn.b)({
          Component: (t) => {
            var e = t.props,
              n = t.uriPromise;
            return (0, Pe.b)(2, Ze.a, {
              props: e,
              promise: n,
              fallback: Jn,
              render: Jn,
            });
          },
          allocate: (t) => ({
            props: t,
            uriPromise: qn.createOrRetain({ jid: t.peerJid, avatar: t.avatar }),
          }),
          deallocate(t) {
            var e = t.props;
            qn.release({ jid: e.peerJid, avatar: e.avatar });
          },
        }),
        Xn = (0, Ke.f)(
          Yn,
          (t, e) => {
            var n = t.calls;
            if (null == n) return null;
            var r = n.current;
            return null == r
              ? null
              : {
                  avatars: t.avatars,
                  call: r,
                  contacts: t.contacts,
                  connectionStatus: n.connectionStatus,
                };
          },
          (t, e) => {
            var n = t.avatars,
              r = t.call,
              i = t.contacts,
              a = t.connectionStatus;
            return {
              avatar: n[r.peerJid],
              callState: r.state,
              peerJid: r.peerJid,
              isCaller: r.isCaller,
              duration: r.duration,
              isInterrupted: r.isInterrupted,
              isLocallyMuted: r.isLocallyMuted,
              errorCode: r.errorCode,
              connectionStatus: a,
              backend: e,
              contacts: i,
            };
          }
        );
      function Qn() {
        return (
          null == Kn &&
            (Kn = n
              .e(32)
              .then(n.bind(null, 556))
              .then((t) => t.default)),
          Kn
        );
      }
      function Zn(t) {
        return (0, Pe.b)(2, Ze.a, {
          props: t,
          promise: Qn(),
          fallback: () => (0, Pe.b)(2, rn.a),
          render: (t, e) => (0, Pe.i)((0, Pe.b)(2, e, Object.assign({}, t))),
        });
      }
      var tr,
        er = n(363);
      function nr(t) {
        return (0, Pe.b)(2, Ze.a, {
          props: t,
          promise:
            (null == tr &&
              (tr = Promise.all([n.e(30), n.e(172)])
                .then(n.bind(null, 582))
                .then((t) => t.default)),
            tr),
          fallback: () => (0, Pe.b)(2, rn.a),
          render: (t, e) => (0, Pe.i)((0, Pe.b)(2, e, Object.assign({}, t))),
        });
      }
      var rr,
        ir,
        ar = null,
        sr = null;
      function ur() {
        return (
          rr ||
            (rr = Promise.all([
              Promise.all([
                n.e(13),
                n.e(9),
                n.e(16),
                n.e(31),
                n.e(32),
                n.e(30),
                n.e(169),
              ]).then(n.bind(null, 712)),
              (0, Xe.initPolyfill)(),
            ])).then((t) => {
              var e = l()(t, 1)[0];
              __LOG__(2)`stage2Module: stage2 loaded`, (sr = e);
              var n = ar;
              n && ((ar = null), n());
            }),
          sr
        );
      }
      var or = null,
        lr = (t) => (e) => {
          e.defaultPrevented ||
            e.repeat ||
            ((0, Qe.m)(e) === Qe.e && t.goBackFromEvent(e));
        };
      function cr(t) {
        var e = t.screens[0];
        return e && "SEND_MEDIA" === e.screen.type
          ? (0, Pe.b)(2, rn.b)
          : (0, Pe.b)(2, rn.a);
      }
      function dr(t, e) {
        var n,
          r = t.youtubePlayer;
        return null == r || null != (null == (n = t.player) ? void 0 : n.active)
          ? null
          : (0, Pe.b)(2, tn, { videoId: r.videoId, backend: e });
      }
      function hr(t) {
        return t
          ? (0, Pe.b)(2, qe.b.div, {
              hasFocusPriority: !0,
              className: er.a,
              tabIndex: "2",
            })
          : null;
      }
      function vr(t) {
        if (!t) return null;
        var e = ur();
        return e ? (0, Pe.b)(2, e.ActivityInProgress) : null;
      }
      function fr(t, e) {
        return (0, Pe.b)(2, Mn.a, { targetOverlayId: t.overlayId, backend: e });
      }
      var pr = class extends Ue.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.Ax = () => {
                __LOG__(2)`App: Rerendering because module loaded`,
                  this.forceUpdate();
              }),
              t
            );
          }
          componentDidMount() {
            ar = this.Ax;
          }
          componentWillUnmount() {
            ar = null;
          }
          render() {
            var t,
              e = this.props,
              r = e.store,
              i = e.backend;
            return (
              "main" === r.mode
                ? (t = (function (t, e) {
                    var n = (function (t) {
                        var e = ur(),
                          n = t.screens.length - 1;
                        if (t.user.pushname) {
                          if (null != t.calls && null != t.calls.current)
                            return (0, Pe.b)(2, Xn);
                          if (t.user.twoFactor.reminder.shouldRemind)
                            return e ? (0, Pe.b)(2, e.TwoFactorReminder) : null;
                          if (
                            t.screens.length > 0 ||
                            "active" === t.profilePhotoScreenState
                          ) {
                            if (!e) return null;
                            var r = t.screens.map((t, r) => {
                              var i = t.id,
                                a = t.screen;
                              return (0, Pe.b)(
                                2,
                                e.Stage2Screen,
                                { id: i, screen: a, isActiveScreen: r === n },
                                i
                              );
                            });
                            return "active" === t.profilePhotoScreenState
                              ? [
                                  (0, Pe.b)(
                                    2,
                                    e.RegistrationProfilePhoto,
                                    null,
                                    "profile-photo"
                                  ),
                                  ...r,
                                ]
                              : r;
                          }
                          return t.msglist
                            ? e
                              ? (0, Pe.b)(
                                  2,
                                  e.Conversation,
                                  null,
                                  t.msglist.chat.id
                                )
                              : null
                            : t.tab
                            ? "status" === t.tab.key
                              ? e
                                ? (0, Pe.b)(2, e.StatusList)
                                : null
                              : "calls" === t.tab.key && t.isVoipAvailable
                              ? e
                                ? (0, Pe.b)(2, e.CallLogList)
                                : null
                              : "camera" === t.tab.key
                              ? null
                              : null != t.userNotice &&
                                "modal" === t.userNotice.type
                              ? (0, Pe.b)(2, Zn, { modal: t.userNotice })
                              : "pending" === t.profilePhotoScreenState &&
                                null != e
                              ? (0, Pe.b)(
                                  2,
                                  e.RegistrationProfilePhoto,
                                  null,
                                  "profile-photo"
                                )
                              : (0, Pe.b)(
                                  2,
                                  In,
                                  null,
                                  t.chatlist.archived
                                    ? "archived-chats"
                                    : "chats"
                                )
                            : null != t.userNotice &&
                              "modal" === t.userNotice.type
                            ? (0, Pe.b)(2, Zn, { modal: t.userNotice })
                            : (0, Pe.b)(
                                2,
                                In,
                                null,
                                t.chatlist.archived ? "archived-chats" : "chats"
                              );
                        }
                        if (!e) return null;
                        var i = [
                          (0, Pe.b)(
                            2,
                            e.RegistrationProfileInfo,
                            null,
                            "pushname"
                          ),
                        ];
                        return (
                          t.screens.forEach((t, r) => {
                            var a = t.id,
                              s = t.screen;
                            ("IMAGE_VIEW" !== s.type &&
                              "AVATAR_IMAGE_VIEW" !== s.type &&
                              "MEDIA_EDITOR" !== s.type) ||
                              i.push(
                                (0, Pe.b)(
                                  2,
                                  e.Stage2Screen,
                                  { id: a, screen: s, isActiveScreen: r === n },
                                  a
                                )
                              );
                          }),
                          i
                        );
                      })(t),
                      r = t.player,
                      i = r.active;
                    return (0, Pe.b)(2, Ye.a, {
                      children: [
                        null != n ? n : cr(t),
                        i &&
                          (0, Pe.b)(2, en, {
                            initialTime: r.currentTimes[i.msgId] || 0,
                            active: i,
                            contentRef: i.contentRef,
                            msgId: i.msgId,
                            backend: e,
                          }),
                        dr(t, e),
                        fr(t, e),
                        vr(t.activityInProgress),
                        hr(t.incomingCall),
                      ],
                    });
                  })(r, i))
                : "reg" === r.mode
                ? (t = (function (t, e) {
                    var r =
                      (ir ||
                        (ir = Promise.all([n.e(20), n.e(31), n.e(178)])
                          .then(n.bind(null, 714))
                          .then((t) => {
                            or = t;
                            var e = ar;
                            e && ((ar = null), e());
                          })),
                      or);
                    return (
                      r &&
                      (0, Pe.b)(2, Ye.a, {
                        children: [
                          (0, Pe.b)(2, r.default),
                          fr(t, e),
                          vr(t.activityInProgress),
                          hr(t.incomingCall),
                        ],
                      })
                    );
                  })(r, i))
                : "tempBanned" === r.mode
                ? (t = (function (t, e) {
                    return (0, Pe.b)(2, Ye.a, {
                      children: [
                        (0, Pe.b)(2, nr),
                        fr(t, e),
                        vr(t.activityInProgress),
                        hr(t.incomingCall),
                      ],
                    });
                  })(r, i))
                : "error" === r.mode
                ? (t = (function (t, e) {
                    return (0, Pe.b)(2, Ye.a, {
                      children: [
                        (0, Pe.b)(2, an),
                        fr(t, e),
                        vr(t.activityInProgress),
                        hr(t.incomingCall),
                      ],
                    });
                  })(r, i))
                : (r.mode,
                  (t = (function (t, e) {
                    var n = ur();
                    return (
                      n &&
                      (0, Pe.b)(2, Ye.a, {
                        children: [
                          (0, Pe.b)(2, n.SpinnerScreen, {
                            title: 231,
                            subtitle: 182,
                            onExit: () => {
                              (0, c.f)({
                                title: 880,
                                text: 230,
                                confirm: 880,
                                onConfirm: Oe.closeApp,
                                onEndCall: "CLOSE",
                              });
                            },
                          }),
                          fr(t, e),
                          vr(t.activityInProgress),
                          hr(t.incomingCall),
                        ],
                      })
                    );
                  })(r, i))),
              t || (t = (0, Pe.b)(2, rn.a)),
              (0, Pe.b)(2, qe.b.div, {
                className: er.b,
                onKeyDown: lr(i),
                children: t,
              })
            );
          }
        },
        _r = (0, Ke.e)(pr, (t, e) => ({ store: t, backend: e })),
        mr = n(162),
        gr = n(280),
        br = null;
      function Sr(t, e) {
        var n = new MessageChannel();
        return (
          (n.port1.onmessage = (e) => {
            var r = e.data;
            r &&
              "bridge-channel-ready" === r.type &&
              ((0, St.setBackendWorkedStarted)(), t.setPort(n.port1));
          }),
          n.port2
        );
      }
      function Er(t) {
        navigator.mozWifiManager &&
          (navigator.mozWifiManager.onstatuschange = (e) => {
            var n = "connected" === e.status,
              r = (0, G.f)(),
              i = n ? 1 : r.radioType;
            WAM.logAttributes([["regular"], 23, 1, n, ["regular"], 105, 0, i]),
              t &&
                t.fireAndForget("basic", "wifiStatusChanged", {
                  connected: n,
                  radioType: i,
                });
          });
      }
      var Or,
        Ar,
        yr,
        Cr = n(154);
      function Lr(t, e, o, l) {
        var c,
          d =
            null != (c = o) &&
            "notification" === c.type &&
            "handleCall" === c.data.action &&
            "accept" === c.data.option;
        return (0, r.c)(t, !d)
          .then(
            (t) => (
              (e.appInfo = performance.now()),
              __LOG__(2)`ENTRY::start buildPage`,
              "registered" === (Ar = t).state && (0, s.b)(),
              (yr = (0, u.makeBridge)()),
              (0, St.setBridge)(yr),
              "unregistered" === Ar.state && (0, Pn.b)(),
              "registered" === Ar.state &&
                Ar.userNotice &&
                "modal" === Ar.userNotice.type &&
                Qn(),
              (function (t, e, n) {
                return (
                  __LOG__(2)`buildPage::building backendInterface`,
                  (function (t, e) {
                    switch (e.state) {
                      case "deleting":
                        return (function (t) {
                          var e = new Tt(t);
                          return (
                            e.populate(De(Ae, { mode: "deleting" })),
                            e.buildApi(t),
                            Promise.resolve(e)
                          );
                        })(t);
                      case "registered":
                        return (function (t, e) {
                          __LOG__(2)`buildMainBackendInterface`,
                            (0, m.z)(e.clockSkew);
                          var n = new Ce();
                          n.updateFromAppInfo(e);
                          var r = n.buildMainStore(e, !0),
                            i = new Tt(t);
                          return (
                            i.populate(De(Ae, r), n), (0, Ge.b)(r).then(() => i)
                          );
                        })(t, e);
                      case "unregistered":
                        return (function (t, e) {
                          __LOG__(2)`buildRegBackendInterface`,
                            t.fireAndForget("registration", "initReg", {});
                          var n = new Tt(t);
                          return (
                            n.populate(
                              De(Ae, {
                                mode: "reg",
                                reg: e.registrationStore,
                                alert: e.registrationAlert,
                              }),
                              new Ce()
                            ),
                            Promise.resolve(n)
                          );
                        })(t, e);
                      case "tempBanned":
                        return (function (t, e) {
                          (0, m.z)(e.clockSkew);
                          var n = new Tt(t);
                          return (
                            n.populate(
                              De(Ae, {
                                mode: "tempBanned",
                                code: e.code,
                                until: e.until,
                                duration: e.duration,
                              })
                            ),
                            n.buildApi(t),
                            Promise.resolve(n)
                          );
                        })(t, e);
                      case "error":
                        return (function (t, e) {
                          var n = new Tt(t);
                          return (
                            n.populate(
                              De(Ae, { mode: "error", errorType: e.errorType })
                            ),
                            n.buildApi(t),
                            Promise.resolve(n)
                          );
                        })(t, e);
                      default:
                        return (0, Ee.a)(e.state);
                    }
                  })(t, e).then(
                    (t) => (
                      __LOG__(2)`buildPage::adding handlers`,
                      (function (t) {
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            switch (
                              ((0, y.h)(t, document.visibilityState),
                              document.visibilityState)
                            ) {
                              case "visible":
                                t.handleAppVisible(), (0, s.d)();
                                break;
                              case "prerender":
                                break;
                              case "hidden":
                                t.handleAppHidden(),
                                  (0, Je.b)(),
                                  (0, s.c)(),
                                  (0, Ne.f)();
                                break;
                              case "unloaded":
                                (0, Ne.f)();
                                break;
                              default:
                                (0, Ee.a)(document.visibilityState);
                            }
                          }
                        ),
                          navigator.largeTextEnabled &&
                            document.documentElement.classList.add("largeText"),
                          self.addEventListener(
                            "largetextenabledchanged",
                            () => {
                              navigator.largeTextEnabled
                                ? document.documentElement.classList.add(
                                    "largeText"
                                  )
                                : document.documentElement.classList.remove(
                                    "largeText"
                                  );
                            }
                          ),
                          (function (t) {
                            lt() &&
                              (__LOG__(
                                2
                              )`Initial state: comms ${it}; onLine: ${navigator.onLine}`,
                              at
                                ? __LOG__(
                                    4
                                  )`internetConnection.initListeners was called more than once!`
                                : ((at = !0),
                                  navigator.onLine || ut(),
                                  self.addEventListener("online", () => {
                                    (function (t) {
                                      __LOG__(
                                        2
                                      )`Online event is triggered: comms ${it}; onLine: ${navigator.onLine}`,
                                        t.dispatch({ type: "CONNECTED" }),
                                        t.fireAndForget(
                                          "backend",
                                          "networkConnected",
                                          {}
                                        ),
                                        st();
                                    })(t);
                                  }),
                                  self.addEventListener("offline", () => {
                                    (function (t) {
                                      __LOG__(
                                        2
                                      )`Offline event is triggered: comms ${it}; onLine: ${navigator.onLine}`,
                                        t.dispatch({ type: "DISCONNECTED" }),
                                        ot();
                                    })(t);
                                  })));
                          })(t);
                      })(t),
                      (0, We.a)(),
                      "deleting" === e.state ||
                        (navigator.mozSetMessageHandler(
                          "serviceworker-notification",
                          (e) => {
                            __LOG__(2)`buildPage on notification ${e}`,
                              $e(JSON.parse(e.msg), t);
                          }
                        ),
                        navigator.mozSetMessageHandler("activity", (e) => {
                          Be(t, e.source);
                        }),
                        setTimeout(() => {
                          var t = X.K.get().lastUpdated;
                          (t && (0, m.m)(t, m.b)) ||
                            (0, M.h)().then((t) => {
                              var e = t.storageAvailSize || 0,
                                n = t.storageTotalSize || 0,
                                r = n - e;
                              __LOG__(
                                2
                              )`Free space: ${e}. Used space: ${r}. Free percentage: ${
                                (100 * e) / n
                              }%`;
                              var i = t.externalStorageAvailSize || 0,
                                a = t.externalStorageTotalSize || 0,
                                s = a - i;
                              __LOG__(
                                2
                              )`Free external space: ${i}. Used external space: ${s}. Free percentage: ${
                                (100 * i) / a
                              }%`,
                                __LOG__(2)`Video folder used size: ${
                                  t.videoFolderSize || 0
                                }`,
                                __LOG__(2)`SdCard folder used size: ${
                                  t.mediaFolderSize || 0
                                }`,
                                X.K.set({ lastUpdated: (0, m.D)(), stats: t });
                            });
                        }, 1e4),
                        "registered" === e.state &&
                          (function (t, e) {
                            var n,
                              r = null;
                            if (t)
                              if (
                                (__LOG__(2)`Initializing from ${t.type}`,
                                "notification" === t.type)
                              )
                                try {
                                  r = $e(t.data, e);
                                } catch (t) {
                                  __LOG__(4)`Bad initial notification`;
                                }
                              else
                                "activity" === t.type && (r = Be(e, t.source));
                            (0, St.setAppLaunchDestination)(
                              null != (n = r) ? n : 1
                            );
                          })(n, t)),
                      t
                    )
                  )
                );
              })(yr, Ar, o)
            )
          )
          .then(
            (t) => (
              (e.backend = performance.now()),
              (Or = t),
              __LOG__(2)`ENTRY::initialize Root`,
              "registered" === Ar.state && (0, et.e)(Or),
              (function (t) {
                __LOG__(2)`exe::initialize`;
                var e = document.getElementById("root");
                if (!e) throw new Error("No root!");
                return (
                  t.getStoreState(),
                  new Promise((n) => {
                    Ue.g(
                      (0, Pe.b)(2, Ke.a, {
                        backend: t,
                        store: t.getStore(),
                        children: (0, Pe.b)(2, qe.a, {
                          children: (0, Pe.b)(2, _r),
                        }),
                      }),
                      e,
                      n
                    ),
                      (0, mr.f)(v.c);
                  })
                );
              })(Or)
            )
          )
          .then(() => {
            e.mounted = performance.now();
            var s = navigator.mozTelephony;
            s &&
              (s.onincoming = (t) => {
                var e;
                (e = Or).dispatch({ type: "INCOMING_CALL_START" }),
                  bt(e) &&
                    e.fireAndForget("voip", "interruptVoipCall", {
                      shouldInterrupt: !0,
                    }),
                  (t.call.ondisconnected = () => {
                    setTimeout(() => {
                      (function (t) {
                        t.dispatch({ type: "INCOMING_CALL_END" }),
                          bt(t) &&
                            t.fireAndForget("voip", "interruptVoipCall", {
                              shouldInterrupt: !1,
                            });
                      })(Or);
                    }, 2e3);
                  });
              }),
              __LOG__(2)`app start timing ${e}`,
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  (0, Xe.initPolyfill)().then(() => {
                    Or.dispatch({ type: "APP_MOUNTED" }),
                      (0, i.initializeLogsTable)(),
                      "registered" === Ar.state &&
                        ((0, ct.b)({ type: "frontend", backend: Or }),
                        (0, Cr.setContextImplementations)({
                          getPrivateStatsIds: () =>
                            yr.sendAndReceive(
                              "backend",
                              "getPrivateStatsIds",
                              {}
                            ),
                        }),
                        (0, a.initializeWAMSink)(
                          "frontend",
                          "regular",
                          Or.sendMetrics
                        ),
                        (0, a.initializeWAMSink)(
                          "frontend",
                          "private",
                          Or.sendAnonymousMetrics
                        )),
                      __LOG__(
                        2
                      )`ENTRY::triggering loading the rest of the stage2`,
                      ur(),
                      "registered" === Ar.state &&
                        (0, r.a)().then((t) => {
                          t || Or.dispatch({ type: "STARRED_INDEX_FOUND" });
                        });
                  });
                });
              }),
              Or.buildApi(yr),
              __LOG__(2)`ENTRY::startBackendWorker`;
            var o = (0, gr.a)();
            return (
              o &&
                __LOG__(
                  3
                )`Last close was an unexpected one: didAppCrash = true`,
              (function (t, e, r, i, a) {
                var s = "deleting" === t.mode;
                return (
                  !s &&
                    navigator.serviceWorker &&
                    navigator.serviceWorker.addEventListener("message", (t) => {
                      "receivedPush" === t.data.type
                        ? e.fireAndForget("backend", "receivedPush", {})
                        : "clickedNotification" === t.data.type
                        ? ($e(JSON.parse(t.data.msg), r),
                          (navigator.mozApps.getSelf().onsuccess = function (
                            t
                          ) {
                            var e = t.target.result;
                            e && e.launch();
                          }))
                        : __LOG__(
                            4
                          )`startBackendWorker unrecognized sw msg ${t.data}`;
                    }),
                  Promise.resolve()
                    .then(() => {
                      var t = (0, M.l)()
                          .then((t) => {
                            __LOG__(2)`Successfully got storage status: ${t}`;
                          })
                          .catch((t) => {
                            __LOG__(4)`Failed to get storage status: ${(0, M.g)(
                              t
                            )}`,
                              SEND_LOGS("failed-to-get-storage-status");
                          }),
                        e = (0, M.e)()
                          .then(() => {
                            __LOG__(
                              2
                            )`Successfully removed temporary WA directory`;
                          })
                          .catch((t) => {
                            __LOG__(4)`Failed to remove WA tmp directory: ${(0,
                            M.g)(t)}`,
                              SEND_LOGS("tmp-remove-failed");
                          }),
                        n =
                          null == X.m.get()
                            ? (0, G.d)().then((t) => {
                                X.m.set(null != t ? t : null);
                              })
                            : void 0;
                      return Promise.all([t, e, n]);
                    })
                    .then(
                      () => (
                        s || (0, nt.j)()
                          ? __LOG__(2)`Avoiding worker, reason ${
                              s ? "deleting" : "low ram"
                            }`
                          : (__LOG__(2)`Starting backend worker`,
                            (br = new Worker("backendWorker.js"))),
                        (0, G.a)()
                      )
                    )
                    .then((r) => {
                      var s,
                        o = (0, G.i)(),
                        l = X.b.get(),
                        c = l.abKey,
                        d = l.expoKeyStr;
                      if (
                        (null != c && null != d && (s = d),
                        WAM.logAttributes([
                          ["regular"],
                          23,
                          1,
                          o,
                          ["regular"],
                          105,
                          0,
                          o ? 1 : r.carrier.radioType,
                          ["regular", "private"],
                          15,
                          2,
                          r.os.version,
                          ["regular", "private"],
                          13,
                          2,
                          r.device,
                          ["regular", "private"],
                          5,
                          0,
                          parseInt(r.carrier.mcc, 10),
                          ["regular", "private"],
                          3,
                          0,
                          parseInt(r.carrier.mnc, 10),
                          ["regular"],
                          2141,
                          2,
                          X.I.get().abKey,
                          ["regular"],
                          4473,
                          2,
                          c,
                          ["regular", "private"],
                          5029,
                          2,
                          s,
                        ]),
                        null == br)
                      )
                        return (
                          __LOG__(2)`Loading backend locally`,
                          X.i.set(r),
                          Er(null),
                          Promise.all([n.e(4), n.e(8), n.e(7), n.e(9), n.e(18)])
                            .then(n.bind(null, 481))
                            .then((n) => n.startInPageBackend(t, e, i, a))
                            .then(() => {
                              (0, u.warnOnMissingHandlers)(e),
                                (0, St.setBackendWorkedStarted)();
                            })
                        );
                      __LOG__(2)`Activating backend worker`;
                      var h = (0, u.attachBatchedPortal)(e, [
                        "registration",
                        "backend",
                        "basic",
                        "voip",
                      ]);
                      (0, u.warnOnMissingHandlers)(e),
                        Er(e),
                        br.postMessage(
                          {
                            type: "bridge-channel",
                            deviceInfo: r,
                            hasWifi: o,
                            shouldStartVoip: a,
                          },
                          [Sr(h)]
                        );
                    })
                );
              })(t, yr, Or, o, d).then(() => ((0, gr.c)(), o))
            );
          })
          .then((t) => {
            __LOG__(2)`ENTRY::wam events`,
              t && WAM.log("regular", 184, void 0, []),
              WAM.log("regular", 1094, void 0, [
                1,
                0,
                Math.round(e.mounted),
                7,
                0,
                (0, St.getAppLaunchDestination)(),
              ]),
              WAM.log("regular", 1754, void 0, [
                1,
                0,
                Math.round(e.jsStart),
                2,
                0,
                Math.round(e.initialImports),
                3,
                0,
                Math.round(e.intl),
                4,
                0,
                Math.round(e.backend),
                5,
                0,
                Math.round(e.mounted),
                6,
                0,
                Math.round(e.onloadFinished),
                7,
                0,
                Math.round(e.infoStore),
                9,
                0,
                Math.round(e.migrations),
                8,
                0,
                Math.round(e.appInfo),
              ]);
          })
          .then(() => {});
      }
    },
  ])
);
