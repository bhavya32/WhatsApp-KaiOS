"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [173],
  {
    535: function (t, e, s) {
      var i = s(13),
        a = s(47),
        r = class extends i.a {
          shouldComponentUpdate(t, e) {
            var s = this.props;
            return (
              s !== t &&
              (s.caption !== t.caption || s.formatting !== t.formatting)
            );
          }
          render() {
            var t = this.props,
              e = t.caption,
              s = t.formatting;
            return (0, a.d)(e, s);
          }
        };
      e.a = r;
    },
    725: function (t, e, s) {
      s.r(e),
        s.d(e, "AppPlayer", function () {
          return T;
        });
      var i = s(1),
        a = s(13),
        r = s(23),
        n = s.n(r),
        h = s(61),
        u = s(153),
        l = s(162),
        o = s(548),
        d = s(386),
        p = s(246),
        c = s(535),
        v = s(161),
        m = s(19),
        y = s(512),
        D = s(267),
        g = s(59),
        P = s(103),
        f = class extends a.a {
          shouldComponentUpdate(t, e) {
            var s = this.props;
            return (
              s !== t &&
              (s.uri !== t.uri ||
                s.player !== t.player ||
                s.initialTime !== t.initialTime ||
                s.chatJid !== t.chatJid ||
                s.currentMsg !== t.currentMsg ||
                s.nextMsg !== t.nextMsg ||
                s.pttPlaybackRate !== t.pttPlaybackRate)
            );
          }
          constructor(t) {
            super(t), (this.Hh = !1);
            var e = t.player,
              s = t.initialTime,
              i = e.paused,
              a = e.isPtt,
              r = new d.a(this);
            r.enableWarnIfMuted(),
              r.seekTo(s),
              r.setPlaying(!i),
              a && r.setPlaybackRate(t.pttPlaybackRate),
              (this.Hg = r);
          }
          componentDidMount() {
            this.Hh = !0;
          }
          componentDidUpdate(t) {
            var e = this.props.player;
            this.Hg.setPlaying(!e.paused),
              e.paused && this.Hg.seekTo(this.props.initialTime);
          }
          componentWillUnmount() {
            this.Hh = !1;
          }
          handleCanPlay() {
            var t = this.props,
              e = t.player,
              s = t.backend,
              i = e.msgId,
              a = this.Hg.getDuration() || e.duration;
            s.dispatch({ type: "LOADED_MEDIA", msgId: i, duration: a });
          }
          handlePlay() {}
          handlePause() {}
          handleTimeUpdate(t) {
            var e = this.props,
              s = e.player;
            e.backend.dispatch({
              type: "UPDATE_MEDIA",
              msgId: s.msgId,
              currentTime: t,
              duration: this.Hg.getDuration() || s.duration,
            });
          }
          handlePlaybackRateChange(t) {
            this.props.backend.updateGeneralSettings({ pttPlaybackRate: t }),
              this.Hg.setPlaybackRate(t);
          }
          autoPlayVoiceMsg(t, e, s, i, a) {
            var r = i.mediaStatus;
            if ("voice" === i.type && "ready" === r.type) {
              (0, D.e)(s, a, t);
              var n = {
                type: "audio",
                msgId: s.id,
                duration: i.duration || 0,
                contentRef: r.ref,
                paused: !1,
                loading: !0,
                autoPlay: !0,
                isPtt: i.isPtt,
              };
              t.dispatch({ type: "SELECT_MSG", item: e }),
                t.dispatch({ type: "RESET_MEDIA_TIME", msgId: s.id }),
                t.dispatch({ type: "PLAY_MEDIA", player: n });
            }
          }
          playPttTone(t, e) {
            switch (t) {
              case "between":
                var s = new Audio("/static_media/between-ptts-tone.opus");
                s.addEventListener("ended", () => {
                  this.Hh && (0, P.i)() && e();
                }),
                  s.addEventListener("canplaythrough", () => {
                    this.Hh && (0, P.i)() && s.play();
                  });
                break;
              default:
                var i = new Audio("/static_media/end-of-ptts-tone.opus");
                i.addEventListener("ended", () => {
                  this.Hh && (0, P.i)() && e();
                }),
                  i.addEventListener("canplaythrough", () => {
                    this.Hh && (0, P.i)() && i.play();
                  });
            }
          }
          maybeAutoPlayNextMsg() {
            var t,
              e = this.props,
              s = e.backend,
              i = e.player,
              a = e.currentMsg,
              r = e.nextMsg,
              n = e.chatJid;
            if (a)
              if (r) {
                var h = a.msg,
                  u = r.msg;
                (null == h ? void 0 : h.content.isPtt) &&
                (null == u || null == (t = u.content) ? void 0 : t.isPtt) &&
                u.meta.author === h.meta.author
                  ? this.playPttTone("between", () => {
                      n &&
                        "voice" === r.type &&
                        this.autoPlayVoiceMsg(s, r, u, r.content, n);
                    })
                  : (null == h ? void 0 : h.content.isPtt) &&
                    i.autoPlay &&
                    h.id === i.msgId &&
                    this.playPttTone("end", () => {
                      s.dispatch({ type: "STOP_MEDIA", msgId: h.id });
                    });
              } else
                __LOG__(
                  2
                )`maybeAutoPlayNextMsg no next msg to autoplay, current msg: ${
                  null == a ? void 0 : a.key
                }`;
            else
              __LOG__(
                2
              )`maybeAutoPlayNextMsg no current msg to autoplay, current msg: ${
                null == a ? void 0 : a.key
              }`;
          }
          handleEnded() {
            var t = this.props;
            this.maybeAutoPlayNextMsg(),
              t.backend.dispatch({
                type: "END_MEDIA",
                msgId: this.props.player.msgId,
              });
          }
          mediaDuration() {
            return this.props.player.duration;
          }
          pause() {
            var t = this.props,
              e = t.backend,
              s = t.player;
            this.Hg.setPlaying(!1),
              e.dispatch({ type: "PAUSE_MEDIA", msgId: s.msgId });
          }
          Hi() {
            var t = this.props,
              e = t.backend,
              s = t.player;
            this.Hg.setPlaying(!1),
              e.dispatch({ type: "STOP_MEDIA", msgId: s.msgId });
          }
          Hj(t) {
            var e = this.props,
              s = e.player,
              i = e.backend;
            s.paused
              ? i.dispatch({
                  type: "TOWARD_MEDIA",
                  msgId: s.msgId,
                  duration: s.duration,
                  direction: t,
                })
              : this.Hg.seekToward(t);
          }
          render() {
            var t = this.props,
              e = t.player,
              s = t.uri,
              a = t.pttPlaybackRate,
              r = e.isPtt;
            return (0, i.c)(
              [
                e.paused
                  ? null
                  : (0, i.b)(2, A, {
                      player: this,
                      isPtt: r,
                      pttPlaybackRate: a,
                    }),
                s &&
                  (0, i.f)(
                    1,
                    "audio",
                    null,
                    null,
                    1,
                    { src: s, preload: "metadata" },
                    null,
                    this.Hg.ref
                  ),
              ],
              0
            );
          }
        },
        E = (0, g.c)(f, (t, e, s) => {
          var i = t.msglist,
            a = t.player,
            r = t.settings,
            n = null,
            h = null,
            u = null;
          if (i) {
            var l = i.items,
              o = l.findIndex((t) => {
                var e;
                return t.key === (null == (e = a.active) ? void 0 : e.msgId);
              });
            n = l[o];
            var d = o + 1;
            (h = d > -1 ? l[d] : null), (u = i.chat.jid);
          }
          var p = r.pttPlaybackRate;
          return Object.assign({}, s, {
            currentMsg: n,
            nextMsg: h,
            chatJid: u,
            pttPlaybackRate: p,
          });
        }),
        I = class extends h.a {
          shouldComponentUpdate(t, e) {
            var s = this.props;
            return (
              s !== t &&
              (s.player !== t.player ||
                s.isPtt !== t.isPtt ||
                s.pttPlaybackRate !== t.pttPlaybackRate)
            );
          }
          addSoftKeys(t, e) {
            var s,
              i = this.props,
              a = i.player,
              r = i.isPtt,
              n = i.pttPlaybackRate;
            t.setLeftRightArrows(
              () => {
                a.Hj("backward");
              },
              () => {
                a.Hj("forward");
              }
            ),
              t.setUpDownArrows(l.i, l.h),
              t.setCenterLabel(904, () => {
                a.pause();
              }),
              t.setLeftLabel(926, () => {
                a.Hj("rewind");
              }),
              r
                ? ((s = "1x" === n ? 855 : "1.5x" === n ? 856 : 854),
                  t.setRightLabel(s, () =>
                    a.handlePlaybackRateChange(this.getNextSpeedValue(n))
                  ))
                : t.setRightLabel(940, () => {
                    a.Hi();
                  });
          }
          getNextSpeedValue(t) {
            var e = ["1x", "1.5x", "2x"];
            return e[(e.findIndex((e) => e === t) + 1) % e.length];
          }
          render() {
            return (0, i.b)(2, u.b.div, { hasFocusPriority: !0 });
          }
        },
        A = (0, h.e)(I);
      function _(t) {
        return t.playSideways;
      }
      var w = class extends h.a {
          shouldComponentUpdate(t, e) {
            var s = this.props,
              i = this.state;
            return (
              (s !== t &&
                (s.uri !== t.uri ||
                  s.player !== t.player ||
                  s.isGif !== t.isGif)) ||
              (i !== e &&
                (i.paused !== e.paused ||
                  i.currentTime !== e.currentTime ||
                  i.showProgressBar !== e.showProgressBar))
            );
          }
          constructor(t, e) {
            super(t, e),
              (this.Hk = null),
              (this.Hl = () => {
                this.Hg.setPlaying(!0);
              }),
              (this.pause = () => {
                this.Hm(), this.Hg.setPlaying(!1);
              }),
              (this.Hi = () => {
                var t = this.props,
                  e = t.backend,
                  s = t.player;
                this.Hg.setPlaying(!1),
                  e.dispatch({ type: "STOP_MEDIA", msgId: s.msgId });
              }),
              (this.Hn = () => {
                this.Hm(), this.Hg.seekToward("backward");
              }),
              (this.Ho = () => {
                this.Hm(), this.Hg.seekToward("forward");
              }),
              (this.state = {
                paused: !1,
                currentTime: 0,
                showProgressBar: !1,
              });
            var s = new d.a(this);
            t.isGif || s.enableWarnIfMuted(), s.setPlaying(!0), (this.Hg = s);
          }
          componentDidMount() {
            (0, l.d)(document.documentElement), super.componentDidMount();
          }
          componentWillUnmount() {
            this.props.player,
              (0, l.c)() && (0, l.a)(),
              this.Hk && clearTimeout(this.Hk),
              this.props.player.onClose && this.props.player.onClose(),
              super.componentWillUnmount();
          }
          handleCanPlay() {
            var t = this.props,
              e = t.player,
              s = t.backend,
              i = e.msgId,
              a = this.Hg.getDuration() || e.duration;
            s.dispatch({ type: "LOADED_MEDIA", msgId: i, duration: a });
          }
          handlePlay() {
            this.props.player, this.setState({ paused: !1 });
          }
          handlePause() {
            this.props.player, this.setState({ paused: !0 });
          }
          handleTimeUpdate(t) {
            var e = this.props;
            if ((e.player, !e.isGif)) {
              var s = this.state,
                i = s.showProgressBar,
                a = s.paused;
              (i || a) && this.setState({ currentTime: t });
            }
          }
          handleEnded() {
            this.props.player;
            var t = this.Hg.current;
            null != t
              ? this.setState({ paused: !0, currentTime: t.currentTime })
              : this.setState({ paused: !0 });
          }
          mediaDuration() {
            return this.props.player.duration;
          }
          Hm() {
            this.Hk && clearTimeout(this.Hk),
              this.setState((t) => {
                var e = this.Hg.current;
                return e
                  ? { showProgressBar: !0, currentTime: e.currentTime }
                  : { showProgressBar: !0 };
              }),
              (this.Hk = setTimeout(() => {
                this.setState({ showProgressBar: !1 });
              }, 1e3));
          }
          addSoftKeys(t, e) {
            var s = this.props,
              i = s.player,
              a = s.isGif;
            if ((t.setBack(this.Hi), i.loading)) t.setFull(894);
            else if ((t.hide(), !a)) {
              this.state.paused
                ? t.setCenterLabel(907, this.Hl)
                : t.setCenterLabel(904, this.pause),
                _(i)
                  ? (t.setLeftRightArrows(l.h, l.i),
                    t.setUpDownArrows(this.Hn, this.Ho))
                  : (t.setLeftRightArrows(this.Hn, this.Ho),
                    t.setUpDownArrows(l.i, l.h));
              var r = this.Hp();
              r &&
                t.setRightOptions(() => {
                  (0, m.j)(r);
                });
            }
          }
          Hq(t) {
            var e = this.state.paused;
            return (0, i.f)(
              1,
              "div",
              (0, n.a)("Dd", t && "De", !e && "Dl"),
              (0, i.b)(2, y.a),
              2
            );
          }
          Hr(t, e) {
            var s = this.state,
              a = s.showProgressBar,
              r = s.currentTime,
              n = s.paused,
              h = !a && !n,
              u = r / this.props.player.duration;
            return (0, i.b)(2, o.a, {
              progress: u,
              hidden: h,
              playSideways: e,
              withOptions: null != this.Hp(),
            });
          }
          Hs(t) {
            var e = this.props.player,
              s = e.caption,
              a = e.captionFormatting,
              r = this.state,
              h = r.showProgressBar,
              u = r.paused;
            return !s || u || h
              ? null
              : (0, i.b)(2, p.a, {
                  textClassName: (0, n.a)("Dm FV FS", t ? "Do" : "Dn"),
                  maxLineClassName: "Dp",
                  truncated: !0,
                  children: (0, i.b)(2, c.a, { caption: s, formatting: a }),
                });
          }
          Hp() {
            var t = this.props.player,
              e = t.onMsgInfo,
              s = t.onReportContact,
              a = t.caption,
              r = t.captionFormatting;
            if (null == e && null == s && null == a) return null;
            var n = new v.a();
            return (
              null != e && n.add(198, e),
              null != s && n.add(725, s),
              null != a &&
                n.add(1081, () => {
                  (0, m.h)(
                    {
                      title: 113,
                      onBack: "CLOSE",
                      onSoftCenter: "CLOSE",
                      center: 902,
                    },
                    (0, i.b)(2, c.a, { caption: a, formatting: r })
                  );
                }),
              n
            );
          }
          Ht() {
            var t = this.props,
              e = t.player;
            if (!t.isGif && !e.loading) {
              var s = _(e);
              return (0, i.c)([this.Hq(s), this.Hr(e, s), this.Hs(s)], 0);
            }
          }
          render() {
            var t = this.props,
              e = t.player,
              s = t.isGif,
              a = t.uri,
              r = _(e),
              h = !1,
              l = "Dk";
            switch ((e.rotation || 0) + (r ? 90 : 0)) {
              case 90:
                (h = "Dg"), (l = "Dj");
                break;
              case 180:
                h = "Dh";
                break;
              case 270:
                (h = "Di"), (l = "Dj");
            }
            return (0, i.f)(
              1,
              "div",
              (0, n.a)("Df", e.loading && "Dl"),
              [
                a
                  ? (0, i.b)(2, u.b.video, {
                      hasFocusPriority: !0,
                      innerRef: this.Hg.ref,
                      src: a,
                      className: (0, n.a)(h, l),
                      preload: "metadata",
                      muted: s,
                      loop: s,
                    })
                  : (0, i.b)(2, u.b.div, { hasFocusPriority: !0 }),
                this.Ht(),
              ],
              0
            );
          }
        },
        M = (0, h.e)(w),
        T = (0, s(299).c)({
          getContentRef: (t) => t.active.contentRef,
          getId: (t) => t.active.msgId,
          render(t, e) {
            var s = t.active,
              a = t.backend,
              r = s.msgId;
            return "audio" === s.type
              ? (0, i.b)(
                  2,
                  E,
                  { player: s, initialTime: t.initialTime, backend: a, uri: e },
                  r
                )
              : (s.type,
                (0, i.b)(
                  2,
                  M,
                  { player: s, backend: a, isGif: "gif" === s.type, uri: e },
                  r
                ));
          },
        });
    },
  },
]);
