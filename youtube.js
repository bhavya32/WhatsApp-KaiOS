"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [194],
  {
    538: function (t, i, s) {
      s.d(i, "b", function () {
        return n;
      }),
        s.d(i, "a", function () {
          return a;
        });
      var e = s(31),
        r = new RegExp("^[a-zA-Z0-9_-]{11,50}$");
      function n(t) {
        return r.test(t);
      }
      var h = new RegExp("^/([a-zA-Z0-9_-]{11,50})$");
      function a(t) {
        var i = (0, e.i)(t);
        if (!i) return null;
        var s = i.hostname,
          r = i.searchParams,
          a = i.pathname,
          l = s.toLowerCase();
        if ("www.youtube.com" === l) {
          var o = r.get("v");
          return o && n(o) ? o : null;
        }
        if ("youtu.be" === l) {
          var u = a.match(h);
          if (u) return u[1];
        }
        return null;
      }
    },
    719: function (t, i, s) {
      s.r(i);
      var e = s(1),
        r = s(13),
        n = s(23),
        h = s.n(n),
        a = s(21),
        l = s(153),
        o = s(183),
        u = s(548);
      function c(t) {
        var i = t.playSideways,
          s = t.hidden,
          r = t.elements;
        return (0, e.f)(
          1,
          "div",
          (0, h.a)("Dq", i ? "Ds" : "Dr", s && "Dw"),
          (0, e.f)(
            1,
            "div",
            "Dt",
            r.map((t) => (0, e.b)(2, d, { icon: t.icon, tag: t.tag }, t.tag)),
            0
          ),
          2
        );
      }
      function d(t) {
        var i = t.icon,
          s = t.tag;
        return (0, e.f)(
          1,
          "div",
          "Du",
          [(0, e.f)(1, "div", null, i, 0), (0, e.f)(1, "div", "Dv", s, 0)],
          4
        );
      }
      var v = s(512),
        m = (t) => {
          var i = t.className;
          return (0, e.f)(
            32,
            "svg",
            i,
            (0, e.f)(32, "path", null, null, 1, {
              fill: "#231F20",
              d: "M27.1 4.66h-4.51l1.67-1.67c.68-.68.68-1.79 0-2.47s-1.79-.68-2.47 0l-4.74 4.74c-.33.33-.51.77-.51 1.24s.18.91.51 1.24l4.74 4.74c.34.34.79.51 1.24.51s.9-.17 1.24-.51c.68-.68.68-1.79 0-2.47l-1.84-1.84h4.68c5.93 0 10.75 4.82 10.75 10.75 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c-.01-7.86-6.4-14.26-14.26-14.26zm.4 11.25h-24c-1.93 0-3.5 1.57-3.5 3.5V34.4c0 1.93 1.57 3.5 3.5 3.5h24c1.93 0 3.5-1.57 3.5-3.5V19.42c0-1.94-1.57-3.51-3.5-3.51zm-.5 18H4v-14h23v14z",
            }),
            2,
            { x: "0", y: "0", viewBox: "0 0 41.35 37.91" }
          );
        },
        f = s(19),
        p = s(63),
        w = s(197),
        g = s(514),
        y = s(538),
        b = s(76),
        G = 0,
        _ = /[a-zA-Z]{2,3}/,
        D = "_kaios",
        S = class extends r.a {
          shouldComponentUpdate(t, i) {
            var s = this.props,
              e = this.state;
            return (
              (s !== t && s.videoId !== t.videoId) ||
              (e !== i &&
                (e.duration !== i.duration ||
                  e.currentTime !== i.currentTime ||
                  e.playerState !== i.playerState ||
                  e.error !== i.error ||
                  e.isInitallyOnline !== i.isInitallyOnline ||
                  e.showControls !== i.showControls ||
                  e.playSideways !== i.playSideways))
            );
          }
          constructor(t) {
            super(t),
              (this.GG = null),
              (this.GH = "youtube-player-" + G++),
              (this.GI = r.e()),
              (this.GJ = null),
              (this.GK = null),
              (this.GL = !1),
              (this.GM = new Set()),
              (this.GN = null),
              (this.GV = (t) => {
                this.GG = t;
              }),
              (this.GY = () => {
                this.GX({ event: "listening" });
              }),
              (this.GU = () => {
                null != document.fullscreenElement
                  ? ((this.GL = !0), document.exitFullscreen())
                  : this.Gh();
              }),
              (this.Gh = () => {
                this.props.backend.dispatch({ type: "STOP_YOUTUBE_VIDEO" });
              }),
              (this.GP = (t) => {
                if ("https://www.youtube.com" === t.origin) {
                  if ("string" == typeof t.data)
                    try {
                      var i = JSON.parse(t.data);
                      if (i.id !== this.GH) return;
                      switch (i.event) {
                        case "initialDelivery":
                          var s = i.info,
                            e = null == s.videoData.video_id;
                          this.setState({
                            duration: s.duration,
                            currentTime: s.currentTime,
                            playerState: s.playerState,
                            error: e,
                          });
                          break;
                        case "infoDelivery":
                          if (!i.info) return;
                          var r = i.info,
                            n = r.currentTime,
                            h = r.playerState;
                          null != n && this.setState({ currentTime: n }),
                            null != h && this.setState({ playerState: h });
                      }
                    } catch (t) {
                      __LOG__(
                        2
                      )`YoutubeVideo: Error parsing message from Youtube (${t})`;
                    }
                } else this.GM.add(t.origin);
              }),
              (this.GO = () => {
                null == document.fullscreenElement && this.GL && this.Gh();
              }),
              (this.Gi = (t) => {
                switch ((0, p.m)(t)) {
                  case p.e:
                    t.preventDefault(), this.GU();
                    break;
                  case p.d:
                    this.Gf();
                    break;
                  case p.a:
                    this.Gg();
                    break;
                  case p.b:
                    this.Ge();
                    break;
                  case p.c:
                    this.Gd();
                    break;
                  case p.j:
                    1 === this.state.playerState
                      ? this.Ga()
                      : (2 !== this.state.playerState &&
                          0 !== this.state.playerState &&
                          5 !== this.state.playerState) ||
                        this.GZ();
                    break;
                  case "w":
                  case "1":
                    this.Gb();
                }
              }),
              (this.state = {
                duration: null,
                currentTime: null,
                playerState: -1,
                error: !1,
                isInitallyOnline: navigator.onLine,
                showControls: !1,
                playSideways: !1,
              });
          }
          componentDidMount() {
            (this.GK = (0, g.lockVideoProcessing)()),
              document.addEventListener("fullscreenchange", this.GO),
              this.state.isInitallyOnline
                ? (document.fullscreenEnabled &&
                    null != this.GG &&
                    this.GG.requestFullscreen(),
                  (this.GJ = this.GI.current),
                  self.addEventListener("message", this.GP),
                  this.GQ())
                : this.GR(1113);
          }
          componentDidUpdate(t, i) {
            this.props.videoId !== t.videoId
              ? (this.GS(), this.GQ(), this.setState({ error: !1 }), this.GT())
              : !0 === this.state.error &&
                !1 === i.error &&
                (this.GS(), this.GR(1112));
          }
          componentWillUnmount() {
            if (
              (document.removeEventListener("fullscreenchange", this.GO),
              this.GK && this.GK.resolve(),
              this.GS(),
              (this.GJ = null),
              self.removeEventListener("message", this.GP),
              this.GM.size > 0)
            ) {
              var t = Array.from(this.GM).join(",");
              __LOG__(
                4
              )`YoutubeVideo: Message received from suspicious origin ${t}`,
                SEND_LOGS("postmessage-suspicious-origin");
            } else
              __LOG__(
                2
              )`YoutubeVideo: No message received with suspicious origin`;
            this.GN && clearTimeout(this.GN);
          }
          GQ() {
            (0, y.b)(this.props.videoId) || this.GR(1112);
          }
          GR(t) {
            (0, f.e)({ title: 243, text: t, onClose: () => this.GU() });
          }
          GW(t, i) {
            var s = this.GH;
            null != t &&
              null != t.contentWindow &&
              t.contentWindow.postMessage(
                JSON.stringify(Object.assign({}, i, { id: s })),
                "https://www.youtube.com/"
              );
          }
          GX(t) {
            this.GW(this.GI.current, t);
          }
          GZ() {
            this.GX({ event: "command", func: "playVideo", args: [] });
          }
          Ga() {
            this.GX({ event: "command", func: "pauseVideo", args: [] }),
              this.GT();
          }
          Gb() {
            this.setState((t) => ({ playSideways: !t.playSideways }));
          }
          Gc(t) {
            var i = this.state,
              s = i.duration,
              e = i.currentTime;
            if (null != s && null != e) {
              var r = (0, w.c)(e, s, t);
              this.GX({ event: "command", func: "seekTo", args: [r] }),
                this.GT();
            }
          }
          Gd() {
            this.Gc("forward");
          }
          Ge() {
            this.Gc("backward");
          }
          GS() {
            this.GW(this.GJ, { event: "command", func: "destroy", args: [] }),
              (this.GJ = this.GI.current);
          }
          Gf() {
            navigator.volumeManager.requestUp();
          }
          Gg() {
            navigator.volumeManager.requestDown();
          }
          GT() {
            this.GN && clearTimeout(this.GN),
              this.setState({ showControls: !0 }),
              (this.GN = setTimeout(() => {
                this.setState({ showControls: !1 });
              }, 1e3));
          }
          Gj() {
            if (
              null === this.state.currentTime ||
              void 0 === this.state.currentTime ||
              null === this.state.duration ||
              void 0 === this.state.duration
            )
              return null;
            var t = !this.state.showControls && 1 === this.state.playerState,
              i = this.state.currentTime / this.state.duration;
            return (0, e.c)(
              [
                (0, e.b)(2, c, {
                  playSideways: this.state.playSideways,
                  hidden: t,
                  elements: [
                    {
                      icon: (0, e.f)(1, "div", "BQ", (0, e.b)(2, m), 2),
                      tag: "1",
                    },
                  ],
                }),
                (0, e.b)(2, u.a, {
                  progress: i,
                  playSideways: this.state.playSideways,
                  hidden: t,
                }),
              ],
              4
            );
          }
          render() {
            var t = (function (t) {
                var i = t;
                i.endsWith(D) && (i = i.slice(0, -D.length));
                var s = (0, a.d)().lg;
                if (!(0, y.b)(i) || !_.test(s)) return null;
                var e = new URL("https://www.youtube.com");
                return (
                  (e.pathname = "/embed/" + i),
                  (e.search =
                    "autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&vq=small"),
                  e.searchParams.set("hl", s),
                  e.toString()
                );
              })(this.props.videoId),
              i = this.state,
              s = i.error,
              r = i.isInitallyOnline,
              n = i.playerState,
              u = i.duration,
              c = i.playSideways,
              d = s || !r || !(2 === n),
              m = s || !r || !((-1 === n && 0 !== u) || 3 === n);
            return (0, e.b)(2, l.b.div, {
              className: (0, h.a)("BM", c && "BO"),
              hasFocusPriority: !0,
              onKeyDown: this.Gi,
              innerRef: this.GV,
              tabIndex: "1",
              children: [
                !s && t && r
                  ? (0, e.f)(
                      1,
                      "iframe",
                      "BN",
                      null,
                      1,
                      {
                        width: b.o + "px",
                        height: b.m + "px",
                        id: this.GH,
                        src: t,
                        frameBorder: "0",
                        sandbox: "allow-scripts allow-same-origin",
                        referrerPolicy: "origin",
                        onLoad: this.GY,
                      },
                      null,
                      this.GI
                    )
                  : null,
                (0, e.f)(
                  1,
                  "div",
                  (0, h.a)("BP", d && "BR"),
                  (0, e.b)(2, v.a),
                  2
                ),
                (0, e.f)(
                  1,
                  "div",
                  (0, h.a)("BP", m && "BR"),
                  (0, e.b)(2, o.a),
                  2
                ),
                this.Gj(),
              ],
            });
          }
        };
      i.default = S;
    },
  },
]);
