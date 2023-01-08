"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [51],
  {
    617: function (n, s, e) {
      e.r(s),
        e.d(s, "loadMsgRange", function () {
          return a;
        });
      var t = e(274),
        r = e(66);
      function a(n) {
        return (0, t.b)()
          .loadDbMsgRange(n.chatId, n.anchor, n.range)
          .then((n) => {
            if (n) {
              var s = n.dbMsgs,
                e = n.containsOldest,
                t = n.containsNewest;
              return { msgs: s.map(r.c), containsOldest: e, containsNewest: t };
            }
            return __LOG__(3)`loadMsgRange no msgs in range`, null;
          });
      }
    },
  },
]);
