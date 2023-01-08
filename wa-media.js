"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [191],
  {
    485: function (i, t) {
      function e(i) {
        var t = 0;
        return function () {
          return t < i.length ? { done: !1, value: i[t++] } : { done: !0 };
        };
      }
      var r,
        n =
          "function" == typeof Object.create
            ? Object.create
            : function (i) {
                function t() {}
                return (t.prototype = i), new t();
              };
      if ("function" == typeof Object.setPrototypeOf) r = Object.setPrototypeOf;
      else {
        var s;
        i: {
          var a = {};
          try {
            (a.__proto__ = { Hc: !0 }), (s = a.Hc);
            break i;
          } catch (i) {}
          s = !1;
        }
        r = s
          ? function (i, t) {
              if (((i.__proto__ = t), i.__proto__ !== t))
                throw new TypeError(i + " is not extensible");
              return i;
            }
          : null;
      }
      var f = r;
      function h(i, t) {
        if (((i.prototype = n(t.prototype)), (i.prototype.constructor = i), f))
          f(i, t);
        else
          for (var e in t)
            if ("prototype" != e)
              if (Object.defineProperties) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                r && Object.defineProperty(i, e, r);
              } else i[e] = t[e];
        i.Qc = t.prototype;
      }
      var u = Number.MAX_SAFE_INTEGER;
      function o(i, t) {
        return (i = i.toString(16).toUpperCase()), "0".repeat(t - i.length) + i;
      }
      function c(i) {
        return 0 > i && (i = w + i + 1), o(i, 8);
      }
      var w = 4294967295,
        v = new Uint8Array(0);
      function l(i) {
        var t = this;
        i instanceof ArrayBuffer
          ? ((this.size = i.byteLength),
            (this.slice = function (e, r) {
              return (
                0 > e && (e += t.size),
                0 > r && (r += t.size),
                (e = Math.max(e, 0)) < (r = Math.min(r, t.size))
                  ? Promise.resolve(new Uint8Array(i, e, r - e))
                  : Promise.resolve(v)
              );
            }))
          : ((this.size = i.size),
            (this.slice = function (t, e) {
              return (function (i) {
                var t;
                return new Promise(function (e, r) {
                  ((t = new FileReader()).onload = e),
                    (t.onerror = function (t) {
                      r(
                        Error(
                          "blobToArrayBuffer for blob size " +
                            i.size +
                            ", got error " +
                            t
                        )
                      );
                    }),
                    t.readAsArrayBuffer(i);
                }).then(function () {
                  return t.result;
                });
              })(i.slice(t, e)).then(function (i) {
                return new Uint8Array(i);
              });
            }));
      }
      var b = new l(new ArrayBuffer(0));
      function R(i) {
        return (
          ((255 & i) << 24) |
          (((i >> 8) & 255) << 16) |
          (((i >> 16) & 255) << 8) |
          ((i >> 24) & 255)
        );
      }
      function k(i) {
        var t = Math.pow(2, 16);
        return (i >> 16) + (i & (t - 1) & w) / t;
      }
      function d() {
        this.Pa =
          this.Ka =
          this.Mb =
          this.Nb =
          this.Ca =
          this.Da =
          this.yb =
          this.Qb =
          this.Tb =
          this.ga =
            0;
      }
      function m() {
        this.Pa =
          this.Ka =
          this.mc =
          this.lc =
          this.U =
          this.H =
          this.Za =
          this.Ya =
          this.Y =
          this.ma =
            0;
      }
      function y() {
        (this.b = 0), (this.a = new Uint8Array([0, 0, 0, 0]));
      }
      function A(i, t) {
        for (var e = 0; e < i.b; e++) i.a[i.b - e] = i.a[i.b - e - 1];
        (i.a[0] = t), i.b++;
      }
      function p(i) {
        for (var t = 127 & i.a[0], e = 1; e < i.b; e++)
          t |= (127 & i.a[e]) << (7 * e);
        return t;
      }
      function E() {
        this.a = this.b = this.c = this.nb = 0;
      }
      function O() {
        this.a = this.b = this.c = this.nb = 0;
      }
      function V() {
        (this.f = 0), (this.aa = []);
      }
      function g() {
        (this.f = 0), (this.aa = []);
      }
      function D() {
        (this.I = 0), (this.ca = new V()), (this.da = new g());
      }
      function U(i) {
        var t = new D();
        return (
          (t.I = i.I),
          0 == i.I
            ? ((t.ca = new V()), (t.ca.f = i.ca.f), (t.ca.aa = i.ca.aa.slice()))
            : ((t.da = new g()),
              (t.da.f = i.da.f),
              (t.da.aa = i.da.aa.slice())),
          t
        );
      }
      function M() {
        (this.a = new Uint8Array([0, 0, 0, 0, 0, 0])),
          (this.s = this.m = this.g = 0),
          (this.c = new Uint32Array([0, 0, 0])),
          (this.w = this.u = this.R = this.J = this.height = this.width = 0),
          (this.b = new Uint8Array(32)),
          (this.K = this.j = 0);
      }
      function P(i) {
        var t = new M();
        i = new DataView(i.buffer, i.byteOffset, i.byteLength);
        var e,
          r = 0;
        for (e = 0; e < t.a.length; e++) (t.a[e] = i.getUint8(r)), (r += 1);
        for (
          t.g = i.getUint16(r, !1),
            r += 2,
            t.m = i.getUint16(r, !1),
            r += 2,
            t.s = i.getUint16(r, !1),
            r += 2,
            e = 0;
          e < t.c.length;
          e++
        )
          (t.c[e] = i.getUint32(r, !1)), (r += 4);
        for (
          t.width = i.getUint16(r, !1),
            r += 2,
            t.height = i.getUint16(r, !1),
            r += 2,
            t.J = i.getUint32(r, !1),
            r += 4,
            t.R = i.getUint32(r, !1),
            r += 4,
            t.u = i.getUint16(r, !1),
            r += 4,
            t.w = i.getUint16(r, !1),
            r += 2,
            e = 0;
          e < t.b.length;
          e++
        )
          (t.b[e] = i.getUint8(r)), (r += 1);
        return (t.j = i.getUint16(r, !1)), (t.K = i.getUint16(r + 2, !1)), t;
      }
      function I() {
        (this.a = new Uint16Array([0, 0, 0])),
          (this.c = 0),
          (this.b = new Uint32Array([0, 0])),
          (this.Fa = this.j = this.g = this.cb = this.Va = 0);
      }
      function N() {
        (this.m = 0),
          (this.a = new y()),
          (this.s = this.u = this.g = this.b = 0),
          (this.j = new Uint8Array(3)),
          (this.c = this.maxBitrate = 0);
      }
      function F() {
        this.a = new N();
      }
      function L() {
        (this.j = 0),
          (this.g = new y()),
          (this.m = new Uint8Array(2)),
          (this.c = this.b = this.a = this.s = 0);
      }
      function G() {
        (this.b = new L()), (this.c = 0), (this.a = new F());
      }
      function W() {}
      function B() {
        (this.$b = this.Mc = this.ac = this.Kc = 0),
          (this.nc = -1),
          (this.ua = []),
          (this.zc = 0),
          (this.Ia = []);
      }
      function C() {
        this.a = this.D = 0;
      }
      function S() {
        (this.f = 0), (this.F = []);
      }
      function x() {
        this.Bc = this.D = 0;
      }
      function H() {
        (this.f = 0), (this.F = []);
      }
      function _(i) {
        var t = new H();
        return (t.f = i.f), (t.F = i.F.slice()), t;
      }
      function j() {
        (this.f = 0), (this.Ab = new Uint32Array(0));
      }
      function Q() {
        this.a = this.Yb = this.Wa = 0;
      }
      function T() {
        (this.f = 0), (this.F = []);
      }
      function q() {
        (this.D = this.mb = 0), (this.Qa = new Uint32Array(0));
      }
      function z() {
        (this.D = this.Ac = 0), (this.F = []);
      }
      function J() {
        (this.f = 0), (this.Ea = new Uint32Array(0));
      }
      function K() {
        (this.f = 0), (this.Ea = []);
      }
      function X() {
        this.g = this.j = this.c = this.b = this.a = 0;
      }
      function Z() {
        (this.f = 0), (this.Xb = []);
      }
      function Y(i) {
        var t = new Z();
        return (t.f = i.f), (t.Xb = i.Xb.slice()), t;
      }
      function $() {
        this.Aa = this.Ub = this.Sb = this.Rb = 0;
      }
      function ii(i) {
        var t = new $();
        return (t.Rb = i.Rb), (t.Sb = i.Sb), (t.Ub = i.Ub), (t.Aa = i.Aa), t;
      }
      function ti() {
        (this.Ic = new m()), (this.Cc = new d()), (this.Nc = new $());
      }
      function ei() {
        (this.M = u), (this.a = null);
      }
      function ri(i, t) {
        return (i.a = t), (i.M = 0), null != (i = i.a) && 0 < i.length;
      }
      function ni() {
        (this.b = new Uint8Array(4)), (this.a = this.g = this.c = 0);
      }
      function si() {
        this.s =
          this.j =
          this.c =
          this.g =
          this.J =
          this.K =
          this.w =
          this.b =
          this.m =
          this.a =
          this.u =
            0;
      }
      function ai() {
        (this.w =
          this.m =
          this.c =
          this.j =
          this.ia =
          this.R =
          this.s =
          this.g =
          this.K =
          this.V =
          this.u =
          this.a =
          this.ha =
          this.J =
            0),
          (this.b = new si()),
          (this.ya = this.ja = this.xa = this.wa = 0);
      }
      function fi() {
        this.mode =
          this.K =
          this.c =
          this.j =
          this.J =
          this.b =
          this.s =
          this.m =
          this.R =
          this.u =
          this.a =
          this.g =
          this.V =
          this.w =
            0;
      }
      function hi(i, t) {
        for (var e in t) i[e] = t[e];
      }
      (ei.prototype.seek = function (i, t) {
        var e = this.a;
        if (e) {
          switch (((e = e.length), t)) {
            case 1:
              this.M = i;
              break;
            case 2:
              this.M += i;
              break;
            case 3:
              this.M = e - i;
          }
          0 > this.M ? (this.M = 0) : this.M > e && (this.M = e);
        }
      }),
        (ei.prototype.read = function (i) {
          var t = this.a;
          if (t) {
            var e = this.M,
              r = t.length - e;
            if (0 < r)
              return (
                (i = Math.min(i, r)),
                (this.M += i),
                { data: t.subarray(e, e + i), i: !0 }
              );
          }
          return { data: new Uint8Array(0), i: !1 };
        }),
        (ei.prototype.close = function () {
          this.M = u;
        });
      var ui = [64, 102, 103, 104, 105, 107],
        oi = [8, 16, 24, 32],
        ci = [1, 2, 3, 4, 5, 6, 8],
        wi = [8e3, 11025, 12e3, 16e3, 22050, 24e3, 32e3, 44100, 48e3],
        vi = [1, 4, 8, 17, 35],
        li = [13, 14, 16, 18, 20, 21, 27, 32, 6, 6, 6, 6, 0, 0, 0, 1],
        bi = [18, 24, 33, 37, 41, 47, 51, 59, 61, 6, 0, 1, 1];
      function Ri() {
        this.a = this.Ob = this.b = this.c = 0;
      }
      function ki(i) {
        var t = new Ri();
        return (
          (t.c = 3 & i[0]),
          (t.b = (i[0] >> 2) & 1),
          (t.Ob = (i[0] >> 3) & 15),
          (t.a = (i[0] >> 7) & 1),
          t
        );
      }
      function di() {
        (this.a = new fi()),
          (this.b = this.m = this.j = this.c = this.s = 0),
          (this.w = this.u = !1),
          (this.g = 0);
      }
      function mi(i) {
        return {
          h: !0,
          kc: i.b,
          Oc: 0,
          Pc: 0 === i.b ? "reserved" : i.b + " Hz",
        };
      }
      function yi(i, t) {
        var e = { h: !0, wb: 0 };
        (i.s = (255 & i.a.w) << 4), (i.s |= (7 & i.a.u) << 1);
        var r = 4095 === i.s || 4094 === i.s;
        switch (((i.c = 3 & i.a.a), i.c)) {
          case 0:
            i.c = 2;
            break;
          case 1:
            i.c = 255;
            break;
          case 2:
            i.c = 0;
            break;
          case 3:
            i.c = 1;
        }
        if (255 === i.c) return (e.h = !1), e;
        i: {
          switch (3 & i.a.g) {
            case 0:
              i.j = 0;
              var n = !1;
              break i;
            case 1:
              i.j = 3;
              break;
            case 2:
              i.j = 2;
              break;
            case 3:
              i.j = 1;
          }
          n = !0;
        }
        if (0 === i.j) var s = !1;
        else
          (i.m = Ai[i.c][i.j - 1][15 & i.a.b]),
            (s = 0 !== i.m && 65535 !== i.m);
        var a = 3 & i.a.s;
        return (
          3 <= a ? (a = !1) : ((i.b = pi[i.c][a]), (a = 0 !== i.b)),
          (i.u = !!(1 & i.a.c)),
          (i.w = !!(1 & i.a.j)),
          i.b && i.m
            ? ((i.g =
                1 === i.j
                  ? Math.floor((12e3 * i.m) / i.b)
                  : Math.floor((144e3 * i.m) / i.b)),
              1 !== i.c && 3 === i.j && (i.g = Math.floor(i.g / 2)),
              (44100 === i.b || 22050 === i.b || 11025 === i.b) &&
                i.a.m &&
                i.g++,
              1 === i.j && (i.g *= 4))
            : (i.g = 0),
          t
            ? r && n && s && a
              ? ((e.wb = i.g), (e.h = !0))
              : ((e.wb = 0), (e.h = !1))
            : ((e.wb = i.g), (e.h = r)),
          e
        );
      }
      var Ai = [
          [
            [
              0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256,
              65535,
            ],
            [
              0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
              65535,
            ],
            [
              0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
              65535,
            ],
          ],
          [
            [
              0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416,
              448, 65535,
            ],
            [
              0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384,
              65535,
            ],
            [
              0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320,
              65535,
            ],
          ],
          [
            [
              0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256,
              65535,
            ],
            [
              0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
              65535,
            ],
            [
              0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
              65535,
            ],
          ],
        ],
        pi = [
          [22050, 24e3, 16e3, 0],
          [44100, 48e3, 32e3, 0],
          [11025, 12e3, 8e3, 0],
        ];
      function Ei() {
        this.ea =
          this.a =
          this.$a =
          this.Ca =
          this.Da =
          this.b =
          this.bb =
          this.ab =
          this.ga =
            0;
      }
      function Oi() {
        this.ea =
          this.a =
          this.U =
          this.La =
          this.H =
          this.Za =
          this.Ya =
          this.Y =
          this.ma =
            0;
      }
      function Vi() {
        (this.v = 0),
          (this.a = new Uint8Array(5)),
          (this.video = new Ei()),
          (this.audio = new Oi());
      }
      function gi() {
        this.duration = this.ba = 0;
      }
      function Di(i) {
        var t = new gi();
        return (
          (i = new DataView(i.buffer, i.byteOffset, i.byteLength)),
          (t.ba = i.getInt32(0, !1)),
          (t.duration = i.getInt32(4, !1)),
          t
        );
      }
      function Ui() {
        (this.b = new Uint16Array(3)),
          (this.Fa = this.Lb = this.cb = this.Va = this.version = 0);
      }
      function Mi(i) {
        var t = new Ui();
        return t.a(i), t;
      }
      function Pi() {
        Ui.call(this);
      }
      function Ii() {
        (this.a = new Uint16Array(3)),
          (this.ha =
            this.V =
            this.ia =
            this.R =
            this.J =
            this.c =
            this.b =
            this.ja =
            this.w =
            this.m =
            this.K =
            this.s =
            this.u =
            this.j =
            this.version =
            this.g =
              0);
      }
      function Ni() {
        this.xc =
          this.yc =
          this.tc =
          this.uc =
          this.oc =
          this.pc =
          this.qc =
          this.rc =
            0;
      }
      function Fi() {
        this.C =
          this.Ma =
          this.a =
          this.A =
          this.T =
          this.B =
          this.b =
          this.oa =
            0;
      }
      function Li() {
        (this.pb = this.Hb = this.gb = this.fb = !1),
          (this.qb = this.Ib = this.tb = 0),
          (this.Sa = this.$ = this.O = 4294967295),
          (this.hb = this.ub = this.rb = this.sb = 0),
          (this.L = new Uint32Array(9)),
          (this.o = new Vi()),
          (this.sa = new gi()),
          (this.Z = new D()),
          (this.P = new H()),
          (this.za = new S()),
          (this.G = new T()),
          (this.la = new q()),
          (this.Ua = new z()),
          (this.X = new J()),
          (this.qa = new K()),
          (this.Ta = new j()),
          (this.Ga = new Z()),
          (this.ob = new Ni()),
          (this.S = []),
          _i(this);
      }
      function Gi(i) {
        var t = new Li();
        if (
          ((t.fb = i.fb),
          (t.gb = i.gb),
          (t.Hb = i.Hb),
          (t.pb = i.pb),
          (t.tb = i.tb),
          (t.Ib = i.Ib),
          (t.qb = i.qb),
          (t.O = i.O),
          (t.$ = i.$),
          (t.o = i.o),
          (t.ub = i.ub),
          (t.Sa = i.Sa),
          (t.L = i.L),
          (t.sb = i.sb),
          (t.rb = i.rb),
          (t.sa = i.sa),
          !i.Z || (0 === i.Z.ca.f && 0 === i.Z.da.f) || (t.Z = U(i.Z)),
          i.P && i.P.f && (t.P = _(i.P)),
          i.za && i.za.f)
        ) {
          var e = i.za,
            r = new S();
          (r.f = e.f), (r.F = e.F.slice()), (t.za = r);
        }
        return (
          i.G &&
            i.G.f &&
            ((e = i.G),
            ((r = new T()).f = e.f),
            (r.F = e.F.slice()),
            (t.G = r)),
          i.P && i.P.f && (t.P = _(i.P)),
          i.la &&
            i.la.D &&
            ((e = i.la),
            ((r = new q()).mb = e.mb),
            (r.D = e.D),
            (r.Qa = e.Qa.slice()),
            (t.la = r)),
          i.Ua &&
            i.Ua.D &&
            ((e = i.Ua),
            ((r = new z()).Ac = e.Ac),
            (r.D = e.D),
            (r.F = e.F.slice()),
            (t.Ua = r)),
          i.X &&
            i.X.f &&
            ((e = i.X),
            ((r = new J()).f = e.f),
            (r.Ea = e.Ea.slice()),
            (t.X = r)),
          i.qa &&
            i.qa.f &&
            ((e = i.qa),
            ((r = new K()).f = e.f),
            (r.Ea = e.Ea.slice()),
            (t.qa = r)),
          i.Ta &&
            i.Ta.f &&
            ((e = i.Ta),
            ((r = new j()).f = e.f),
            (r.Ab = e.Ab.slice()),
            (t.Ta = r)),
          i.Ga && i.Ga.f && (t.Ga = Y(i.Ga)),
          i.ob &&
            ((e = i.ob),
            ((r = new Ni()).rc = e.rc),
            (r.qc = e.qc),
            (r.pc = e.pc),
            (r.oc = e.oc),
            (r.uc = e.uc),
            (r.tc = e.tc),
            (r.yc = e.yc),
            (r.xc = e.xc),
            (t.ob = r)),
          i.S && (t.S = i.S.slice()),
          t
        );
      }
      function Wi(i) {
        if (!i.X && !i.qa) return !1;
        var t,
          e = i.X.f ? i.X.f : i.qa.f;
        if (!(t = 0 === e)) {
          i: if (((t = 0), 0 === i.G.f)) t = !1;
          else {
            for (var r = 0; r < i.G.f; r++) {
              var n = i.G.F[r].Wa;
              if (n <= t) {
                t = !1;
                break i;
              }
              t = n;
            }
            t = !0;
          }
          t = !1 === t;
        }
        if (t) return !1;
        for (t = [], n = 0; n < i.G.f; n++) {
          r = (n === i.G.f - 1 ? e + 1 : i.G.F[n + 1].Wa) - i.G.F[n].Wa;
          for (var s = 0; s < r; s++) t.push(n);
        }
        if (e !== (t = Uint32Array.from(t)).length) return !1;
        for (r = n = 0; r < e; r++) {
          ((s = new Fi()).oa = i.$),
            (s.b = r),
            i.X.f ? (s.B = i.X.Ea[r]) : (s.T = i.qa.Ea[r]),
            (s.a = t[r]),
            (s.Ma = n),
            (s.C = i.G.F[s.a].Yb);
          for (var a = (s.A = 0); a < s.C; a++) s.A += i.la.Qa[n + a];
          i.S.push(s), (n += s.C);
        }
        return 0 !== i.S.length;
      }
      function Bi(i) {
        return (1 == i.o.v || 5 == i.o.v) && 65536 != i.L[0] && 65536 != i.L[4];
      }
      function Ci(i) {
        if (
          0 != i.sa.duration &&
          0 != i.sa.ba &&
          (0 != i.S.length || 0 != Wi(i))
        ) {
          for (var t = 0, e = 0; e < i.S.length; e++) t += i.S[e].A;
          (t = 8 * t * i.sa.ba),
            1 === i.o.v
              ? (i.o.video.ea = Math.floor(t / i.sa.duration))
              : 2 === i.o.v && (i.o.audio.ea = Math.floor(t / i.sa.duration));
        }
      }
      function Si(i, t) {
        return (
          (1 === i.o.v || 6 === i.o.v || 8 === i.o.v) && ((i.o.video = t), !0)
        );
      }
      function xi(i, t) {
        return 2 === i.o.v && ((i.o.audio = t), !0);
      }
      function Hi(i, t, e, r) {
        if (t >= i.la.D || t + e - 1 >= i.la.D) return !1;
        for (var n = 0; n < e; n++) r[n] = i.la.Qa[t + n];
        return !0;
      }
      function _i(i) {
        (i.fb = !1),
          (i.gb = !1),
          (i.Hb = !1),
          (i.pb = !1),
          (i.tb = 0),
          (i.Ib = 0),
          (i.qb = 0),
          (i.O = 4294967295),
          (i.$ = 4294967295),
          (i.Sa = 4294967295),
          (i.sb = 0),
          (i.rb = 0),
          (i.ub = 0),
          (i.hb = 0),
          (i.L = new Uint32Array(9)),
          (i.o = new Vi()),
          (i.sa = new gi()),
          (i.Z = new D()),
          (i.P = new H()),
          (i.za = new S()),
          (i.G = new T()),
          (i.la = new q()),
          (i.Ua = new z()),
          (i.X = new J()),
          (i.qa = new K()),
          (i.Ta = new j()),
          (i.Ga = new Z()),
          (i.ob = new Ni());
      }
      (Ui.prototype.a = function (i) {
        i = new DataView(i.buffer, i.byteOffset, i.byteLength);
        for (var t = 0, e = 0; e < this.b.length; e++)
          (this.b[e] = i.getUint16(t, !1)), (t += 2);
        i.getUint16(t, !1),
          (t += 2),
          (this.version = i.getUint16(t, !1)),
          (t += 2),
          i.getUint16(t, !1),
          (t += 2),
          i.getUint32(t, !1),
          (t += 4),
          (this.Va = i.getUint16(t, !1)),
          (t += 2),
          (this.cb = i.getUint16(t, !1)),
          (t += 2),
          (this.Lb = i.getUint16(t, !1)),
          (t += 2),
          i.getUint16(t, !1),
          (this.Fa = i.getUint32(t + 2, !1)),
          (this.Fa >>>= 16);
      }),
        h(Pi, Ui),
        (Pi.prototype.a = function (i) {
          Ui.prototype.a.call(this, i);
          var t = 0;
          (i = new DataView(
            i.buffer,
            i.byteOffset + 28,
            i.byteLength - 28
          )).getUint32(t, !1),
            (t += 4),
            i.getUint32(t, !1),
            (t += 4),
            i.getUint32(t, !1),
            i.getUint32(t + 4, !1);
        });
      var ji = [
          1887007846, 1852400752, 1987014509, 1718579053, 1634887277,
          1952539757, 1701147238, 1885956979, 1635018093, 1868785005,
          1887007859, 2019846515, 2020176755, 1952871024, 1684567661,
          1801548404, 2019915373, 1668116585, 1684563565, 1717662324,
          1634887284, 1869768301, 1635017845, 1919706216, 1718511972,
          1668246633, 1869770857, 1718511977, 1935961961, 543976824, 1819113570,
          1836345712, 1684564852, 1717924468, 1937007717, 1634296941,
          1684563309, 2019914356, 1684563572, 1952736884, 1885696628,
          1853190772, 1885823603, 1935832435, 2053726579, 1869177203,
          1953656931, 1717924452, 543978101, 544109173, 1718511987, 1953721445,
          1684563053, 1718511981, 1634562662, 1718185321, 1835557747,
          1768448883, 1684565366, 1684565363, 1684565352, 1684565358,
          1818391667, 1685288051, 1937011827, 1937011811, 1668510835,
          2054386803, 846886003, 1868788851, 875982691, 1936946291, 1752396915,
          1650745712, 1885631603, 1886676083, 1685088115, 828601953, 1130591841,
          1935946861, 1953657954, 828601960, 1131837032, 1932816493, 1983148141,
          859189875, 859189860, 1630826605, 1919770995, 1651990899, 1919770980,
          1668703603, 1668703588, 1885565299, 1885565284, 1986884467,
          1886549876, 858612581, 862151012, 1935962981, 1684632949,
        ],
        Qi = [
          2019846515, 2020176755, 1952871024, 1684567661, 1684564852,
          1684563053, 1919706216, 1684565366, 1684565363, 1684565352,
          1684565358, 1717924452, 543978101, 544109173, 1937011827, 1937011811,
          1685288051, 2054386803, 846886003, 1668510835, 1868788851, 875982691,
          1936946291, 1752396915, 1885631603, 1886676083, 1650745712,
          1953721445, 1953656931, 1684563309, 2019914356, 1684563565,
          1684563572, 1952736884, 1885696628, 1853190772, 1634887284,
          1869768301, 1885823603, 1685088115, 1819505779, 1935832435,
          2053726579, 1869177203, 1852400752, 1635018093, 543976824, 1819113570,
          1668246633, 1836345712, 1869770857, 1701211753, 1718511977,
          1935961961, 1718185321, 1668116585, 1835557747, 1886417523,
          1935962981,
        ],
        Ti = [
          1887007846, 1852400752, 1952539757, 1701147238, 1885956979,
          1887007859, 2019846515, 2020176755, 1952871024, 1684567661,
          1668116585, 1684563565, 1634887284, 1869768301, 1919706216,
          1668246633, 1718511977, 1935961961, 543976824, 1819113570, 1836345712,
          1684564852, 1684563309, 2019914356, 1684563572, 1952736884,
          1853190772, 1885823603, 1935832435, 2053726579, 1869177203,
          1953656931, 543978101, 544109173, 1953721445, 1684563053, 1634562662,
          1718185321, 1835557747, 1768448883, 1684565366, 1684565363,
          1684565352, 1684565358, 1851876717, 1701667182, 1635017060,
          1937011827, 1937011811, 1668510835, 2054386803, 846886003, 1868788851,
          875982691, 1936946291, 1752396915, 1650745712, 1885631603, 1886676083,
          1685088115, 1130591841, 1935946861, 1953657954, 1130591848, 859189860,
          1919770980, 1668703588, 1885565284, 862151012, 1935962981, 1684632949,
          1887007859, 1684104820, 1634559604, 1835166817, 1752462689,
          1718840419, 1819045731, 1885565796, 1701998183, 1685551467,
          1768124268, 1718773104, 1735292018, 1651337332, 1819568500,
          1818588020, 1952543349, 1668444793, 1414676905, 1651270057,
          1953325993, 1852139433, 1886545833, 2036425897, 1953326761,
          1718512041, 1920560297, 1835101865, 1902473897, 1953658793,
          2054781097, 863005998, 1851877475, 1819306083, 1885432931, 1919709027,
          1718511976, 1769238120, 1701667182, 1953459824, 1734701162,
          1902342771, 1731426420, 1701079415, 1397178708, 1835099490,
          1886351212,
        ],
        qi = [
          1887007859, 1684104820, 1634559604, 1835166817, 1752462689,
          1718840419, 1819045731, 1885565796, 1701998183, 1685551467,
          1768124268, 1718773104, 1735292018, 1651337332, 1819568500,
          1818588020, 1952543349, 1668444793,
        ],
        zi = [
          757935405, 863005998, 544694642, 1414676905, 1651270057, 1953325993,
          1852139433, 1886545833, 2036425897, 1953326761, 1718512041,
          1920560297, 1835101865, 1902473897, 1869575337, 1953658793,
          2054781097, 1414676833, 1145662305, 1145663585, 1145664609,
          1735680355, 1851877475, 1819306083, 1885432931, 1145663075,
          1919709027, 1920364387, 1818849379, 1953656931, 1635017060,
          1668506980, 1802725732, 1684629349, 859189864, 1718511976, 1769238120,
          1145660775, 1701998183, 1953721449, 2004444523, 1701667182,
          1919509613, 1953719152, 1885431664, 1145662576, 1685222768,
          1819440496, 1735292018, 1145661043, 1902342771, 1802073203,
          1869639028, 1852535412, 1852143220, 1852733044, 1752397428,
          1853060724, 1936029300, 1731426420, 1702257015, 1701079415,
          1413695824, 1397178708,
        ],
        Ji = [1751675751, 1970303847, 1836086119, 1685287783, 1685353319],
        Ki = [1634890840],
        Xi = [1835099490, 1886351212];
      function Zi() {
        this.fa = this.na = 0;
      }
      function Yi(i) {
        i = new DataView(i.buffer, i.byteOffset, i.byteLength);
        var t = new Zi();
        return (t.na = i.getUint32(0, !1)), (t.fa = i.getUint32(4, !0)), t;
      }
      function $i() {
        (this.ib = this.ka = this.ra = this.W = this.pa = this.O = 0),
          (this.Ja = []);
      }
      function it(i) {
        var t;
        for (t = 0; t < ji.length; t++) if (ji[t] == i.fa) return !0;
        for (t = 0; t < qi.length; t++) if (qi[t] == i.fa) return !0;
        for (t = 0; t < zi.length; t++) if (zi[t] == i.fa) return !0;
        if (0 == i.fa && 8 == i.na) return !0;
        for (t = 0; t < Ji.length; t++) if (Ji[t] == i.fa) return !0;
        for (t = 0; t < Ki.length; t++) if (Ki[t] == i.fa) return !0;
        for (t = 0; t < Xi.length; t++) if (Xi[t] == i.fa) return !0;
        return !1;
      }
      function tt(i) {
        i = i.ka;
        for (var t = "", e = 0; 4 > e; e++) {
          var r = (i >> (8 * e)) & 255;
          32 > r || 127 < r
            ? (0 > r && (r = (w + r + 1) & 255), (r = "<" + o(r, 2) + ">"))
            : (r = String.fromCharCode(r)),
            (t += r);
        }
        return t;
      }
      function et(i) {
        (0 === i.ka && 8 === i.W && 0 === i.ra) || tt(i);
      }
      function rt() {
        (this.xa = b),
          (this.ec = this.V = this.Fc = !1),
          (this.wa = this.Fb = this.bc = this.R = 0),
          (this.a = new ei()),
          (this.ia = new $i()),
          (this.J = []),
          (this.m = 0);
      }
      function nt(i, t) {
        return (
          i.a.seek(t, 1),
          !1 === (i = i.a.read(8)).i
            ? { Xa: new Zi(), status: 204 }
            : { Xa: Yi(i.data), status: 0 }
        );
      }
      function st(i, t, e) {
        var r = { va: new $i(), Jb: !1 };
        switch (((r.va.pa = t), (r.va.ka = e.fa), e.na)) {
          case 0:
            (r.va.W = i.R - t), i.ia.Ja.push(r.va), (r.Jb = !0);
            break;
          case 1:
            ((i = new Uint32Array([0, 0]))[0] = R(i[0])),
              (i[1] = R(i[1])),
              (r.va.W = i[1]),
              (r.va.ra = i[0]);
            break;
          default:
            r.va.W = e.na;
        }
        return r;
      }
      function at(i, t, e, r) {
        var n = e + ((t.ra << 32) | t.W);
        return n == r
          ? { Oa: !0, status: 0 }
          : n > r || n < e
          ? ((e = 1952539757 == t.ka || 1701147238 == t.ka),
            i.ec && e && r == i.R
              ? { Oa: !0, status: 201 }
              : { Oa: !1, status: 201 })
          : i.V && 8 > (t = r - n)
          ? ((r = ut(i, n, t)),
            i.a.seek(e, 1),
            { Oa: r, status: r ? 319 : 201 })
          : (i.a.seek(n, 1),
            0 !== (t = nt(i, n)).status
              ? { Oa: !1, status: 224 }
              : 0 == it((t = t.Xa))
              ? ((r = ft(i, n, t.na, r)),
                i.a.seek(e, 1),
                { Oa: r, status: r ? 319 : 224 })
              : (i.a.seek(e, 1), { Oa: !0, status: 319 }));
      }
      function ft(i, t, e, r) {
        return (
          (t += e) == r ||
          (!(0 == e || t > r) &&
            (t > r - 8
              ? !(!i.V || 4 != r - t)
              : (i.a.seek(t, 1),
                0 === (e = nt(i, t)).status &&
                  (0 != it(e.Xa) || (0 != e.Xa.na && ft(i, t, e.Xa.na, r))))))
        );
      }
      function ht(i, t) {
        var e = 28;
        if (i.V) {
          if (28 > t - 8) return t - 8;
          if (((t = i.a.M), 0 == (e = i.a.read(28)).i)) return 4294967295;
          switch (((e = Mi(e.data)), i.a.seek(t, 1), e.version)) {
            case 0:
              e = 28;
              break;
            case 1:
              e = 44;
              break;
            case 2:
              e = 60;
              break;
            default:
              e = 4294967295;
          }
        }
        return e;
      }
      function ut(i, t, e) {
        return (
          0 != i.V &&
          4 == e &&
          (i.a.seek(t, 1),
          !1 !== (e = i.a.read(4)).i &&
            ((e =
              (e.data[0] << 24) |
              (e.data[1] << 16) |
              (e.data[2] << 8) |
              e.data[3]),
            i.a.seek(t, 1),
            0 === e))
        );
      }
      function ot() {
        this.jb = this.kb = this.B = 0;
      }
      function ct() {
        rt.call(this),
          (this.u = this.Gb = this.cc = !1),
          (this.ja = Ct),
          (this.s = []),
          (this.ya = new gi()),
          (this.g = new Li()),
          (this.j = []),
          (this.c = []),
          (this.Db = 0),
          (this.hc = new Map()),
          (this.ic = new $());
      }
      function wt(i, t) {
        var e = 4294967295;
        return (
          0 == i.Gb ||
            i.hc.forEach(function (i, r) {
              t === r && (e = i);
            }),
          e
        );
      }
      function vt(i, t, e, r, n) {
        if (0 == ((r << 32) | (e & w)) >= n) return 302;
        if (8 < n) {
          if (!1 === (i = bt(i, t + 8)).h) return 302;
          if (0 !== i.I && 1 !== i.I) return 301;
        }
        return 0;
      }
      function lt(i, t) {
        for (var e = 4294967295, r = 0; r < i.j.length; r++)
          if (t === i.j[r].$) {
            e = r;
            break;
          }
        return e;
      }
      function bt(i, t) {
        (t -= i.m), i.a.seek(t, 1);
        var e = i.a.read(1);
        return !1 === e.i
          ? { I: 4294967295, h: !1 }
          : (i.a.seek(t, 1), { I: e.data[0], h: !0 });
      }
      function Rt(i, t, e, r) {
        if (0 !== (e = vt(i, t, e, r, 108))) return e;
        if (!1 === (e = bt(i, t + 8)).h) return 302;
        if (
          ((t += 1 === e.I ? 28 : 20), (t -= i.m), i.a.seek(t, 1), 0 === e.I)
        ) {
          if (!1 === (t = i.a.read(8)).i) return 302;
          i.ya = Di(t.data);
        } else {
          if (!1 === (t = i.a.read(4)).i) return 302;
          if (
            ((t = new DataView(
              t.data.buffer,
              t.data.byteOffset,
              t.data.byteLength
            )),
            (i.ya.ba = t.getUint32(0, !1)),
            !1 === (t = i.a.read(8)).i)
          )
            return 302;
          (e =
            ((e = (t = new DataView(
              t.data.buffer,
              t.data.byteOffset,
              t.data.byteLength
            )).getUint32(0, !1)) <<
              32) |
            t.getUint32(4, !1)),
            (i.ya.duration = e & w);
        }
        return 0;
      }
      function kt(i, t, e, r) {
        if (0 == 28 <= ((r << 32) | (e & w))) return 302;
        var n = bt(i, t + 8);
        if (!1 === n.h) return 302;
        if (0 !== n.I && 1 !== n.I) return 301;
        if ((i.a.seek(t - i.m + 12, 1), !1 === (e = i.a.read(4)).i)) return 302;
        if (
          ((r = new DataView(
            e.data.buffer,
            e.data.byteOffset,
            e.data.byteLength
          ).getUint32(0, !1)),
          ((t = new D()).I = n.I),
          0 === n.I)
        ) {
          if (!1 === (e = i.a.read(12 * r)).i) return 302;
          for (
            new DataView(e.data.buffer, e.data.byteOffset, e.data.byteLength),
              t.ca.f = r,
              n = 0;
            n < r;
            n++
          ) {
            var s = e.data.subarray(12 * n, 12 * (n + 1)),
              a = new E();
            s = new DataView(s.buffer, s.byteOffset, s.byteLength);
            var f = 0;
            (a.nb = s.getUint32(f, !1)),
              (f += 4),
              (a.c = s.getUint32(f, !1)),
              (f += 4),
              (a.b = s.getUint16(f, !1)),
              (a.a = s.getUint16(f + 2, !1)),
              t.ca.aa.push(a);
          }
        } else {
          if (!1 === (e = i.a.read(20 * r)).i) return 302;
          for (
            new DataView(e.data.buffer, e.data.byteOffset, e.data.byteLength),
              t.da.f = r,
              n = 0;
            n < r;
            n++
          ) {
            (s = e.data.subarray(20 * n, 20 * (n + 1))), (a = new O()), (f = 0);
            var h = (s = new DataView(
              s.buffer,
              s.byteOffset,
              s.byteLength
            )).getUint32(f, !1);
            f += 4;
            var u = s.getUint32(f, !1);
            (f += 4),
              (a.nb = (h << 32) | (u & w)),
              (h = s.getUint32(f, !1)),
              (f += 4),
              (u = s.getUint32(f, !1)),
              (f += 4),
              (a.c = (h << 32) | (u & w)),
              (a.b = s.getUint16(f, !1)),
              (a.a = s.getUint16(f + 2, !1)),
              t.da.aa.push(a);
          }
        }
        return (
          (i = i.g),
          t &&
            ((i.Z = new D()),
            (i.Z.I = t.I),
            0 === t.I
              ? ((i.Z.ca.f = t.ca.f), (i.Z.ca.aa = t.ca.aa.slice()))
              : ((i.Z.da.f = t.da.f), (i.Z.da.aa = t.da.aa.slice()))),
          0
        );
      }
      function dt(i, t, e, r) {
        if (0 !== (e = vt(i, t, e, r, 32))) return e;
        if (!1 === (e = bt(i, t + 8)).h) return 302;
        if (
          ((i.g.qb = e.I),
          (t -= i.m),
          (t += 1 === e.I ? 28 : 20),
          i.a.seek(t, 1),
          (t = new gi()),
          0 === e.I)
        ) {
          if (!1 === (t = i.a.read(8)).i) return 302;
          t = Di(t.data);
        } else {
          if (!1 === (e = i.a.read(12)).i) return 302;
          (r = new DataView(
            e.data.buffer,
            e.data.byteOffset,
            e.data.byteLength
          )),
            (t.ba = r.getUint32(0, !1)),
            (e = r.getUint32(4, !1)),
            (r = r.getUint32(8, !1)),
            (t.duration = (e << 32) | r);
        }
        return 0 === t.ba ? 313 : ((i.g.sa = t), 0);
      }
      function mt(i, t, e, r) {
        if (0 != (r = vt(i, t, e, r, 16))) return r;
        i.a.seek(t - i.m + 12, 1);
        var n = new Z();
        return (
          (n.f = e - 12),
          0 == (t = i.a.read(n.f)).i
            ? 302
            : (t.data.forEach(function (i) {
                var t = new X();
                (t.a = i),
                  (t.b = (i >> 6) & 3),
                  (t.c = (i >> 4) & 3),
                  (t.j = (i >> 2) & 3),
                  (t.g = 3 & i),
                  n.Xb.push(t);
              }),
              n && 0 != n.f && (i.g.Ga = Y(n)),
              0)
        );
      }
      function yt() {
        ct.call(this);
      }
      function At(i, t, e) {
        var r, n;
        if ((n = 0 === t.la.D && 0 === t.Ua.D)) {
          var s = t.o.a;
          (1836278895 !==
            (s = new DataView(s.buffer, s.byteOffset, s.byteLength).getUint32(
              0,
              !1
            )) &&
            1836278899 !== s) ||
            (n = !1);
        }
        if (
          0 !=
          (n =
            !1 ===
            (t.fb &&
              t.gb &&
              0 !== t.P.f &&
              0 !== t.G.f &&
              !1 === n &&
              (0 !== t.X.f || 0 !== t.qa.f))
              ? 303
              : 0)
        )
          return n;
        if (
          0 !==
          (n = (function (i, t) {
            var e,
              r,
              n = i.la.D;
            if (i.P && 0 !== i.P.f) {
              for (r = e = 0; r < i.P.f; r++) e += i.P.F[r].D;
              r = !0;
            } else (e = 0), (r = !1);
            if (!r) return 303;
            if (e !== n && !1 === t) return 304;
            if (i.za && 0 !== i.za.f) {
              for (r = e = 0; r < i.za.f; r++) e += i.za.F[r].D;
              r = !0;
            } else (e = 0), (r = !1);
            if (r && e !== n && !1 === t) return 305;
            if (i.G && 0 !== i.G.f) {
              for (r = e = 0; r < i.G.f; r++) e += i.G.F[r].Yb;
              r = !0;
            } else (e = 0), (r = !1);
            return r
              ? e > n && !1 === t
                ? 304
                : 0 == (!i.Ga || 0 === i.Ga.f) && (i = i.Ga.f) && i !== n && !t
                ? 306
                : 0
              : 303;
          })(t, i.ja > Ct))
        )
          return n;
        if (((n = t.sa.duration), t.P && 0 !== t.P.f)) {
          for (r = s = 0; r < t.P.f; r++) s += t.P.F[r].D * t.P.F[r].Bc;
          r = !0;
        } else (s = 0), (r = !1);
        if (
          0 != (n = r ? (s !== n && !1 === (i.cc || i.ja > Ct) ? 304 : 0) : 303)
        )
          return n;
        if (0 != (n = 0)) return n;
        if (
          ((n = t.X.f ? t.X.f : t.qa.f),
          0 !=
            (n = (s =
              t.G && 0 !== t.G.f
                ? { sc: t.G.F[0].Wa, vc: t.G.F[t.G.f - 1].Wa, status: !0 }
                : { sc: 4294967295, vc: 4294967295, status: !1 }).status
              ? 1 !== s.sc || (s.vc > n && 0 == i.ja > Ct)
                ? 309
                : 0
              : 303))
        )
          return n;
        if (!1 === e) {
          if (
            !1 ===
              (e =
                (t.S && 0 !== t.S.length) || !1 !== Wi(t)
                  ? { Kb: t.S.slice(), status: !0 }
                  : { Kb: [], status: !1 }).status ||
            0 === e.Kb.length
          )
            n = 312;
          else if (
            ((e = e.Kb),
            (s = i.u ? e[0].T : e[0].B),
            4294967295 === (n = t.Sa) || i.s.length <= n)
          )
            n = 317;
          else {
            r = i.s[n];
            var a = !1;
            if (
              !(
                0 === (n = e.length) ||
                s < r.B ||
                ((s = i.u ? e[n - 1].T + e[n - 1].A : e[n - 1].B + e[n - 1].A),
                s > r.B + ((r.jb << 32) | (r.kb & w)))
              )
            ) {
              for (
                r = 0;
                r < n - 1 &&
                ((s = e[r].B + e[r].A), !((i.u ? e[r + 1].T : e[r + 1].B) < s));
                r++
              );
              (a = !0), (i.c = i.c.concat(e.slice()));
            }
            n = a ? 0 : 312;
          }
          if (0 !== n) return n;
        }
        if (
          ((0 == t.L[0] &&
            0 == t.L[1] &&
            0 == t.L[2] &&
            0 == t.L[3] &&
            0 == t.L[4] &&
            0 == t.L[5] &&
            0 == t.L[6] &&
            0 == t.L[7] &&
            0 == t.L[8]) ||
            t.L[0] !== t.L[4] ||
            1e-4 < k(t.L[1]) + k(t.L[3]) ||
            ((e = k(t.L[1])),
            (n = k(t.L[0])),
            (t.hb = 1e-4 < Math.abs(e) ? Math.asin(e) : Math.acos(n)),
            (t.hb = (360 * t.hb) / (2 * Math.PI))),
          0 != (n = 0))
        )
          return n;
        if (0 != (n = 0)) return n;
        if (
          ((e = i.ja > Ct), (n = 0), 0 != !(0 === t.Z.ca.f && 0 === t.Z.da.f))
        ) {
          (s = U(t.Z)),
            (t = 0),
            (a = 0 === (r = s.I) ? s.ca.aa.length : s.da.aa.length);
          for (var f = 0; f < a; f++)
            t += 0 === r ? s.ca.aa[f].nb : s.da.aa[f].nb;
          t === (i = i.ya.duration) || t > i || (t < i && !e && (n = 564));
        }
        return 0 !== n ? n : 0;
      }
      function pt(i, t) {
        return 0 < (i = i.B - t.B) ? 1 : 0 > i ? -1 : 0;
      }
      function Et(i, t) {
        return 0 < (i = i.T - t.T) ? 1 : 0 > i ? -1 : 0;
      }
      function Ot(i) {
        (this.g = 0), (this.c = i);
      }
      function Vt(i) {
        var t = { status: !1, value: 4294967295 };
        if (!i.c) return t;
        var e = i.c.M,
          r = i.c.read(1);
        if (0 == r.i) return { status: !1, value: 4294967295 };
        if (
          (i.c.seek(e, 1),
          (t.value = r.data[0] & (1 << (7 - i.g)) ? 1 : 0),
          i.g++,
          0 == i.g % 8)
        ) {
          if (0 == (r = i.c.read(1)).i)
            return { status: !1, value: 4294967295 };
          i.g = 0;
        }
        return (t.status = !0), t;
      }
      function gt(i, t, e) {
        Ot.call(this, i),
          (this.j = this.b = 0),
          (this.a = new ai()),
          (this.b = 8 * e),
          (this.j = 0);
      }
      function Dt(i, t) {
        var e = { status: !1, value: 0 };
        if (i.c && !(32 < t)) {
          for (var r, n = 0, s = 0; s < t; s++)
            (r = 1 << (t - s - 1)), 1 & Vt(i).value && (n |= r);
          (e.status = !0), (e.value = n);
        }
        return (
          !1 === e.status ||
            (i.b < t ? (i = !1) : ((i.b -= t), (i = !0)), (e.status = i)),
          e
        );
      }
      (rt.prototype.w = function () {
        return 0;
      }),
        (rt.prototype.gc = function () {
          return 0;
        }),
        h(ct, rt),
        (ct.prototype.w = function (i, t, e, r) {
          var n = 0;
          if (this.V && 0 === i && 4 === e && 0 === r) return 0;
          do {
            i: {
              for (
                var s = [
                    1952539757, 1801548404, 2019915373, 1635017845, 1635018093,
                    1701079415, 1868785005,
                  ],
                  a = 0;
                a < s.length;
                a++
              )
                if (i === s[a]) {
                  if (1635017845 !== i) {
                    var f = !0;
                    break i;
                  }
                  if (u === this.Db || t < this.Db) break;
                }
              f = !1;
            }
            if (f) {
              if (
                (4294967295 !== this.g.O &&
                  (this.j.push(Gi(this.g)), _i(this.g)),
                1952539757 === i)
              ) {
                var h = new ot();
                (h.B = t), (h.kb = e), (h.jb = r), this.s.push(h);
              }
              if (1801548404 !== i) break;
            }
            1634890840 === i && (this.cc = !0);
            i: {
              for (
                var o = [
                    1684567661, 1801548404, 1684564852, 1953721445, 1684563053,
                    1919706216, 1684563053, 1818391667, 1685288051, 1937011827,
                    1937011811, 1668510835, 2054386803, 846886003, 1868788851,
                    875982691, 1936946291, 1752396915, 1650745712, 1885631603,
                    1886676083, 1885823603, 1685088115, 1935832435, 2053726579,
                    1869177203, 1885432931,
                  ],
                  c = 0;
                c < o.length;
                c++
              )
                if (i === o[c]) {
                  var v = !0;
                  break i;
                }
              v = !1;
            }
            if (!1 !== v)
              switch (i) {
                case 1684567661:
                  n = Rt(this, t, e, r);
                  break;
                case 1801548404:
                  this.Db = t + e;
                  var l = e;
                  _i(this.g), (this.g.ub = l), (this.g.O = this.j.length);
                  break;
                case 1684564852:
                  var b = t;
                  if (0 == 92 <= ((r << 32) | (e & w))) n = 302;
                  else {
                    var R = bt(this, b + 8);
                    if (!1 === R.h) n = 302;
                    else {
                      this.g.tb = R.I;
                      var k = b - this.m;
                      (k += 1 === R.I ? 28 : 20), this.a.seek(k, 1);
                      var d = this.a.read(4);
                      if (!1 === d.i) n = 302;
                      else {
                        var m = new DataView(
                            d.data.buffer,
                            d.data.byteOffset,
                            d.data.byteLength
                          ),
                          y = m.getUint32(0, !1);
                        (this.g.$ = y),
                          (k += 1 === R.I ? 32 : 28),
                          this.a.seek(k, 1);
                        var A = new Uint32Array(9);
                        if (!1 === (d = this.a.read(44)).i) n = 302;
                        else {
                          m = new DataView(
                            d.data.buffer,
                            d.data.byteOffset,
                            d.data.byteLength
                          );
                          for (var p = 0, E = 0; 9 > E; E++)
                            (A[E] = m.getUint32(p, !1)), (p += 4);
                          this.g.L = A.slice();
                          var O = m.getUint16(p, !1),
                            V = m.getUint16(p + 4, !1),
                            g = this.g,
                            D = V;
                          (g.sb = O), (g.rb = D), (n = 0);
                        }
                      }
                    }
                  }
                  break;
                case 1953721445:
                  n = kt(this, t, e, r);
                  break;
                case 1684563053:
                  n = dt(this, t, e, r);
                  break;
                case 1919706216:
                  if (4294967295 !== this.g.O)
                    i: {
                      var U = t,
                        M = vt(this, U, e, r, 33);
                      if (0 !== M) n = M;
                      else {
                        var P = U - this.m + 12;
                        if (this.V) {
                          this.a.seek(P, 1);
                          var I = this.a.read(4);
                          if (!1 === I.i) {
                            n = 302;
                            break i;
                          }
                          if (
                            1919707245 !==
                            new DataView(
                              I.data.buffer,
                              I.data.byteOffset,
                              I.data.byteLength
                            ).getUint32(0, !0)
                          ) {
                            n = 0;
                            break i;
                          }
                        }
                        this.a.seek(P + 4, 1);
                        var N = this.a.read(4);
                        if (!1 === N.i) n = 302;
                        else {
                          var F = this.g,
                            L = N.data;
                          switch (
                            (L[3] << 24) |
                            (L[2] << 16) |
                            (L[1] << 8) |
                            L[0]
                          ) {
                            case 1701079414:
                              (F.o.a = L.slice()), (F.o.v = 1);
                              break;
                            case 1853190003:
                              (F.o.a = L.slice()), (F.o.v = 2);
                              break;
                            case 1953393e3:
                              (F.o.a = L.slice()), (F.o.v = 3);
                              break;
                            case 1635018093:
                              (F.o.a = L.slice()), (F.o.v = 4);
                              break;
                            case 1987605857:
                              (F.o.a = L.slice()), (F.o.v = 1);
                              break;
                            case 1836278895:
                              (F.o.a = L.slice()), (F.o.v = 6);
                              break;
                            case 1836282467:
                              (F.o.a = L.slice()), (F.o.v = 7);
                              break;
                            case 1836278899:
                              (F.o.a = L.slice()), (F.o.v = 8);
                              break;
                            case 1836267373:
                              (F.o.a = L.slice()), (F.o.v = 9);
                              break;
                            case 1836278639:
                              (F.o.a = L.slice()), (F.o.v = 10);
                              break;
                            case 1836281961:
                              (F.o.a = L.slice()), (F.o.v = 11);
                              break;
                            case 1836280429:
                              (F.o.a = L.slice()), (F.o.v = 12);
                          }
                          n = 0;
                        }
                      }
                    }
                  break;
                case 1818391667:
                  var G = vt(this, t, e, r, 8);
                  0 !== G ? (n = G) : ((this.g.fb = !0), (n = 0));
                  break;
                case 1685288051:
                  var W = vt(this, t, e, r, 12);
                  0 !== W ? (n = W) : ((this.g.gb = !0), (n = 0));
                  break;
                case 1937011827:
                  var B = t,
                    _ = e,
                    z = r,
                    X = vt(this, B, _, z, 16);
                  if (0 !== X) n = X;
                  else {
                    this.a.seek(B - this.m + 12, 1);
                    var Z = new H(),
                      Y = this.a.read(4);
                    if (!1 === Y.i) n = 302;
                    else {
                      var $ = new DataView(
                        Y.data.buffer,
                        Y.data.byteOffset,
                        Y.data.byteLength
                      );
                      if (
                        ((Z.f = $.getUint32(0, !1)),
                        ((z << 32) | (_ & w)) != 8 * Z.f + 16)
                      )
                        n = 304;
                      else if (!1 === (Y = this.a.read(8 * Z.f)).i) n = 302;
                      else {
                        new DataView(
                          Y.data.buffer,
                          Y.data.byteOffset,
                          Y.data.byteLength
                        );
                        for (var ii = 0; ii < Z.f; ii++) {
                          var ti = Z.F,
                            ei = ii,
                            ri = Y.data.subarray(8 * ii, 8 * (ii + 1)),
                            ni = new x(),
                            si = new DataView(
                              ri.buffer,
                              ri.byteOffset,
                              ri.byteLength
                            );
                          (ni.D = si.getUint32(0, !1)),
                            (ni.Bc = si.getUint32(4, !1)),
                            (ti[ei] = ni);
                        }
                        Z && (this.g.P = Z), (n = 0);
                      }
                    }
                  }
                  break;
                case 1937011811:
                  var ai = t,
                    fi = e,
                    hi = r,
                    ui = vt(this, ai, fi, hi, 16);
                  if (0 !== ui) n = ui;
                  else {
                    this.a.seek(ai - this.m + 12, 1);
                    var oi = new S(),
                      ci = this.a.read(4);
                    if (!1 === ci.i) n = 302;
                    else {
                      var wi = new DataView(
                        ci.data.buffer,
                        ci.data.byteOffset,
                        ci.data.byteLength
                      );
                      if (
                        ((oi.f = wi.getUint32(0, !1)),
                        ((hi << 32) | (fi & w)) != 8 * oi.f + 16)
                      )
                        n = 304;
                      else if (!1 === (ci = this.a.read(8 * oi.f)).i) n = 302;
                      else {
                        new DataView(
                          ci.data.buffer,
                          ci.data.byteOffset,
                          ci.data.byteLength
                        );
                        for (var vi = 0; vi < oi.f; vi++) {
                          var li = oi.F,
                            bi = vi,
                            Ri = ci.data.subarray(8 * vi, 8 * (vi + 1)),
                            ki = new C(),
                            di = new DataView(
                              Ri.buffer,
                              Ri.byteOffset,
                              Ri.byteLength
                            );
                          (ki.D = di.getUint32(0, !1)),
                            (ki.a = di.getUint32(4, !1)),
                            (li[bi] = ki);
                        }
                        oi && (this.g.za = oi), (n = 0);
                      }
                    }
                  }
                  break;
                case 1668510835:
                  var mi = t,
                    yi = e,
                    Ai = r,
                    pi = vt(this, mi, yi, Ai, 16);
                  if (0 !== pi) n = pi;
                  else {
                    this.a.seek(mi - this.m + 12, 1);
                    var Ei = new T(),
                      Oi = this.a.read(4);
                    if (!1 === Oi.i) n = 302;
                    else {
                      var Vi = new DataView(
                        Oi.data.buffer,
                        Oi.data.byteOffset,
                        Oi.data.byteLength
                      );
                      if (
                        ((Ei.f = Vi.getUint32(0, !1)),
                        ((Ai << 32) | (yi & w)) != 12 * Ei.f + 16)
                      )
                        n = 308;
                      else if (!1 === (Oi = this.a.read(12 * Ei.f)).i) n = 302;
                      else {
                        new DataView(
                          Oi.data.buffer,
                          Oi.data.byteOffset,
                          Oi.data.byteLength
                        );
                        for (var gi = 0; gi < Ei.f; gi++) {
                          var Di = Ei.F,
                            Ui = gi,
                            Mi = Oi.data.subarray(12 * gi, 12 * (gi + 1)),
                            Pi = new Q(),
                            Ii = new DataView(
                              Mi.buffer,
                              Mi.byteOffset,
                              Mi.byteLength
                            );
                          (Pi.Wa = Ii.getUint32(0, !1)),
                            (Pi.Yb = Ii.getUint32(4, !1)),
                            (Pi.a = Ii.getUint32(8, !1)),
                            (Di[Ui] = Pi);
                        }
                        Ei && (this.g.G = Ei), (n = 0);
                      }
                    }
                  }
                  break;
                case 2054386803:
                  i: {
                    var Ni = t,
                      Fi = e,
                      Li = r,
                      Wi = new q();
                    do {
                      var Bi = vt(this, Ni, Fi, Li, 16);
                      if (0 === Bi) {
                        this.a.seek(Ni - this.m + 12, 1);
                        var Ci = this.a.read(8);
                        if (!1 === Ci.i) {
                          n = 302;
                          break i;
                        }
                        var Si = new DataView(
                          Ci.data.buffer,
                          Ci.data.byteOffset,
                          Ci.data.byteLength
                        );
                        if (
                          ((Wi.mb = Si.getUint32(0, !1)),
                          (Wi.D = Si.getUint32(4, !1)),
                          (Wi.Qa = new Uint32Array(Wi.D)),
                          0 === Wi.mb)
                        ) {
                          if (((Li << 32) | (Fi & w)) != 4 * Wi.D + 20) {
                            Bi = 308;
                            break;
                          }
                          if (!1 === (Ci = this.a.read(4 * Wi.D)).i) {
                            Bi = 302;
                            break;
                          }
                          Si = new DataView(
                            Ci.data.buffer,
                            Ci.data.byteOffset,
                            Ci.data.byteLength
                          );
                          for (var xi = 0; xi < Wi.D; xi++)
                            Wi.Qa[xi] = Si.getUint32(4 * xi, !1);
                        } else
                          for (var Hi = 0; Hi < Wi.D; Hi++) Wi.Qa[Hi] = Wi.mb;
                        Wi && (this.g.la = Wi);
                      }
                    } while (0);
                    n = Bi;
                  }
                  break;
                case 846886003:
                  n = 0;
                  break;
                case 1868788851:
                  var ji = t,
                    Qi = e,
                    Ti = r,
                    qi = vt(this, ji, Qi, Ti, 16);
                  if (0 !== qi) n = qi;
                  else {
                    this.a.seek(ji - this.m + 12, 1);
                    var zi = new J(),
                      Ji = this.a.read(4);
                    if (!1 === Ji.i) n = 302;
                    else {
                      var Ki = new DataView(
                        Ji.data.buffer,
                        Ji.data.byteOffset,
                        Ji.data.byteLength
                      );
                      if (
                        ((zi.f = Ki.getUint32(0, !1)),
                        ((Ti << 32) | (Qi & w)) != 4 * zi.f + 16)
                      )
                        n = 308;
                      else if (!1 === (Ji = this.a.read(4 * zi.f)).i) n = 302;
                      else {
                        (Ki = new DataView(
                          Ji.data.buffer,
                          Ji.data.byteOffset,
                          Ji.data.byteLength
                        )),
                          (zi.Ea = new Uint32Array(zi.f));
                        for (var Xi = 0; Xi < zi.f; Xi++)
                          zi.Ea[Xi] = Ki.getUint32(4 * Xi, !1);
                        zi && (this.g.X = zi), (n = 0);
                      }
                    }
                  }
                  break;
                case 875982691:
                  var Zi = t,
                    Yi = e,
                    $i = r,
                    it = vt(this, Zi, Yi, $i, 16);
                  if (0 !== it) n = it;
                  else {
                    this.a.seek(Zi - this.m + 12, 1);
                    var tt = new K(),
                      et = this.a.read(4);
                    if (!1 === et.i) n = 302;
                    else {
                      var nt = new DataView(
                        et.data.buffer,
                        et.data.byteOffset,
                        et.data.byteLength
                      );
                      if (
                        ((tt.f = nt.getUint32(0, !1)),
                        (($i << 32) | (Yi & w)) != 8 * tt.f + 16)
                      )
                        n = 308;
                      else if (!1 === (et = this.a.read(8 * tt.f)).i) n = 302;
                      else {
                        nt = new DataView(
                          et.data.buffer,
                          et.data.byteOffset,
                          et.data.byteLength
                        );
                        for (var st = 0; st < tt.f; st++) {
                          var at = nt.getUint32(8 * st, !1),
                            ft = nt.getUint32(4 * (2 * st + 1), !1);
                          tt.Ea[st] = (at << 32) | (ft & w);
                        }
                        tt && (this.g.qa = tt), (this.u = !0), (n = 0);
                      }
                    }
                  }
                  break;
                case 1936946291:
                  var ht = t,
                    ut = e,
                    ct = r,
                    wt = vt(this, ht, ut, ct, 16);
                  if (0 !== wt) n = wt;
                  else {
                    this.a.seek(ht - this.m + 12, 1);
                    var lt = new j(),
                      yt = this.a.read(4);
                    if (!1 === yt.i) n = 302;
                    else {
                      var At = new DataView(
                        yt.data.buffer,
                        yt.data.byteOffset,
                        yt.data.byteLength
                      );
                      if (
                        ((lt.f = At.getUint32(0, !1)),
                        ((ct << 32) | (ut & w)) != 4 * lt.f + 16)
                      )
                        n = 308;
                      else if (!1 === (yt = this.a.read(4 * lt.f)).i) n = 302;
                      else {
                        (At = new DataView(
                          yt.data.buffer,
                          yt.data.byteOffset,
                          yt.data.byteLength
                        )),
                          (lt.Ab = new Uint32Array(lt.f));
                        for (var pt = 0; pt < lt.f; pt++)
                          lt.Ab[pt] = At.getUint32(4 * pt, !1);
                        lt && (this.g.Ta = lt), (n = 0);
                      }
                    }
                  }
                  break;
                case 1752396915:
                case 1650745712:
                case 1885631603:
                  n = 0;
                  break;
                case 1886676083:
                  n = mt(this, t, e, r);
                  break;
                case 1885823603:
                case 1935832435:
                case 2053726579:
                case 1869177203:
                  n = 0;
                  break;
                case 1885432931:
                  n = 0;
              }
          } while (0);
          return rt.prototype.w.call(this, i, t, e, r), n;
        }),
        (ct.prototype.Ec = function () {
          return this.Gb;
        }),
        (ct.prototype.gc = function (i, t) {
          var e = 0;
          if (0 == 24 <= ((t << 32) | (i & w))) e = 302;
          else if ((this.a.seek(0, 1), 0 == (i = this.a.read(24)).i)) e = 302;
          else {
            if (((i = i.data), (t = new $()), 1835099490 == Yi(i).fa)) {
              (t = i.subarray(8)),
                (i = new $()),
                (t = new DataView(t.buffer, t.byteOffset, t.byteLength));
              var r = 0;
              switch (
                ((i.Rb = t.getUint32(r, !0)),
                (r += 4),
                (i.Sb = t.getUint32(r, !0)),
                (r += 4),
                (i.Ub = t.getUint32(r, !0)),
                t.getUint32(r + 4, !0))
              ) {
                default:
                  i.Aa = 0;
                  break;
                case 1:
                  i.Aa = 1;
                  break;
                case 2:
                  i.Aa = 2;
                  break;
                case 3:
                  i.Aa = 3;
                  break;
                case 4:
                  i.Aa = 4;
                  break;
                case 5:
                  i.Aa = 5;
                  break;
                case 6:
                  i.Aa = 6;
                  break;
                case 7:
                  i.Aa = 7;
              }
              t = i;
            }
            this.ic = ii(t);
          }
          return e;
        }),
        h(yt, ct),
        (yt.prototype.Dc = function (i) {
          var t;
          i = void 0 === i ? Ct : i;
          var e = void 0 !== e && e;
          (this.ja = i),
            4294967295 !== this.g.O && (this.j.push(Gi(this.g)), _i(this.g)),
            (this.Gb = !0);
          for (var r = (i = 0); r < this.j.length; r++)
            2 === this.j[r].o.v && i++;
          if (!1 === ct.prototype.Ec.call(this)) i = 319;
          else {
            for (i = 0; i < this.j.length; i++) this.hc.set(this.j[i].$, i);
            i = 0;
          }
          if (0 !== i) return i;
          if (2 < this.s.length) return 226;
          for (i = 0; i < this.j.length; i++);
          if (!1 === e) {
            i: {
              for (i = 0; i < this.s.length; i++)
                for (
                  var n =
                      (r = this.s[i].B) +
                      ((this.s[i].jb << 32) | (this.s[i].kb & w)),
                    s = 0;
                  s < this.j.length;
                  s++
                ) {
                  var a = this.j[s];
                  if (0 === a.S.length && !1 === Wi(a)) {
                    a = t = u;
                    var f = !1;
                  } else
                    (f = a.S.length),
                      0 !== a.X.f
                        ? ((t = a.S[0].B), (a = a.S[f - 1].B + a.S[f - 1].A))
                        : ((t = a.S[0].T), (a = a.S[f - 1].T + a.S[f - 1].A)),
                      (f = !0);
                  if (!1 === f) {
                    i = 310;
                    break i;
                  }
                  if (t >= r && a <= n) {
                    if (4294967295 !== this.j[s].Sa) {
                      i = 317;
                      break i;
                    }
                    this.j[s].Sa = i;
                  }
                }
              i = 0;
            }
            if (0 !== i) return i;
          }
          for (r = 0; r < this.j.length; r++)
            if (0 !== (i = At(this, this.j[r], e))) return i;
          return !1 !== e ||
            0 ===
              (e = (function (i) {
                i.c.sort(i.u ? Et : pt);
                for (var t = [], e = i.c.length - 1; 0 <= e; e--) {
                  var r = !1,
                    n = i.c.length,
                    s = i.c[e];
                  if (0 !== s.A) s = !1;
                  else {
                    var a = !1;
                    0 < e &&
                      ((a = i.c[e - 1]), (a = i.u ? a.T == s.T : a.B == s.B));
                    var f = !1;
                    e + 1 < n &&
                      ((n = i.c[e + 1]), (f = i.u ? n.T == s.T : n.B == s.B)),
                      (s = a || f);
                  }
                  s && ((r = !0), t.push(e)),
                    (r = !1 === r) &&
                      ((r = i.c[e]),
                      (r = 0 != (s = i.j[lt(i, r.oa)].la.D) && r.Ma >= s)),
                    r && t.push(e);
                }
                for (e = 0; e < t.length; e++) i.c.splice(t[e], 1);
                if ((0 == (t = 0) && (t = 0 != (t = 0) ? t : 0), 0 !== t))
                  return t;
                if (0 === (t = i.c.length)) return 312;
                for (r = e = 0; r < t - 1; r++)
                  if (
                    (s = i.u ? i.c[r].T + i.c[r].A : i.c[r].B + i.c[r].A) !==
                    (n = i.u ? i.c[r + 1].T : i.c[r + 1].B)
                  ) {
                    if (((a = !0), 1 < (f = i.s.length)))
                      for (var h = 0; h < f - 1; h++) {
                        var u = i.s[h + 1].B - i.m + 8;
                        if (
                          (s =
                            i.s[h].B + ((i.s[h].jb << 32) | (i.s[h].kb & w))) &&
                          u === n
                        ) {
                          a = !1;
                          break;
                        }
                      }
                    if (a)
                      if (1 < i.s.length)
                        for (n = e; n < i.s.length; n++)
                          (f = (a = i.s[n]).jb),
                            (f <<= 32),
                            (f |= a.kb),
                            s === (f += a.B) && e++;
                      else if (
                        ((a = i.j[lt(i, i.c[r].oa)].o),
                        (f = i.j[lt(i, i.c[r + 1].oa)].o),
                        3 !== a.v &&
                          6 !== a.v &&
                          8 !== a.v &&
                          3 !== f.v &&
                          6 !== f.v &&
                          8 !== f.v &&
                          s > n)
                      )
                        return 318;
                  }
                return 0;
              })(this))
            ? (function (i) {
                if (0 == i.ya.ba) return 314;
                for (
                  var t = (1 * i.ya.duration) / i.ya.ba, e = 0;
                  e < i.j.length;
                  e++
                ) {
                  var r = i.j[e].sa;
                  if (0 == r.ba) return 314;
                  if (0.1 < (1 * r.duration) / r.ba - t && 0 == i.ja >= St)
                    return 316;
                }
                return 0;
              })(this)
            : e;
        }),
        (yt.prototype.w = function (i, t, e, r) {
          return ct.prototype.w.call(this, i, t, e, r);
        }),
        h(gt, Ot);
      var Ut = [
        96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025,
        8e3, 7350, 2147483648, 4294967295,
      ];
      function Mt(i) {
        switch (i) {
          case 65534:
          case 65524:
            i = 105;
            break;
          case 65532:
            i = 107;
            break;
          default:
            i = 0;
        }
        return i;
      }
      function Pt(i, t) {
        var e = { status: 0, zb: -1, Zb: new y() };
        if (!i) return (e.status = 101), e;
        var r = i.read(1);
        if (!1 === r.i) return (e.status = 401), e;
        if (((e.zb = r.data[0]), t !== e.zb)) return (e.status = 401), e;
        for (;;) {
          if (!1 === (r = i.read(1)).i) {
            e.status = 401;
            break;
          }
          if (((t = r.data[0]), A(e.Zb, t), 0 == (128 & t))) break;
        }
        return e;
      }
      function It() {
        ct.call(this), (this.Ra = new B());
      }
      function Nt() {
        (this.status = 0), (this.l = []);
      }
      function Ft() {
        It.call(this),
          (this.Gc = []),
          (this.dc = !1),
          (this.eb = 0),
          (this.Cb = u),
          (this.fc = this.Bb = -1),
          (this.ha = new m()),
          (this.K = new d()),
          (this.Eb = 524288),
          (this.b = []);
      }
      function Lt(i, t, e, r, n) {
        var s = !1,
          a = t.O,
          f = i.c.length;
        if (u != i.Cb)
          for (
            var h = (f = 0);
            h < i.c.length && !(i.Cb < (i.u ? i.c[h].T : i.c[h].B) + i.c[h].A);
            h++
          )
            f++;
        h = (t.X.f ? t.X.f : t.qa.f) - 1;
        var o = i.c[e];
        if (o.oa !== t.$) return (n.h = !1), n;
        for (
          var c, w = r, v = r + o.A, l = 0, b = 1 + (3 & i.Ra.nc);
          !(w >= v);

        ) {
          i.a.seek(w, 1), (c = new ni());
          var R = 4 - b,
            k = 5 - R,
            d = i.a.read(k);
          if (!1 === d.i)
            return (
              i.b[a].l.push(
                "ERROR   :    Failed reading " +
                  k +
                  " bytes from input file @offset " +
                  w
              ),
              i.a.seek(r, 1),
              (n.h = !1),
              n
            );
          (k = c), (d = d.data);
          for (var m = 4 - R, y = 0; y < m; y++) k.b[y + R] = d[y];
          if (
            ((k.g = (k.b[0] << 24) | (k.b[1] << 16) | (k.b[2] << 8) | k.b[3]),
            (k.c = d[m]),
            (k.a = 31 & k.c),
            0 === c.a)
          )
            return (
              i.b[a].l.push(
                "ERROR  :     AVC stream parsing error: NAL unit type = 0 (chunkIndex = " +
                  n.N +
                  ", chunk file offset = " +
                  w +
                  ")"
              ),
              (n.h = !1),
              n
            );
          if (
            (t.pb &&
              5 > c.a &&
              !1 === n.Ha &&
              (i.b[a].l.push(
                "WARNING:     Found non-IDR frame in video trak which had empty STSS table (chunkIndex = " +
                  n.N +
                  ", chunk file offset = " +
                  w +
                  ")"
              ),
              (n.Ha = !0)),
            0 === n.N &&
              0 === l &&
              9 !== c.a &&
              5 !== c.a &&
              6 !== c.a &&
              14 !== c.a)
          )
            if (7 === c.a)
              i.b[a].l.push(
                "WARNING:     AVC stream: Sequence Parameter Set detected in the payload (?!)"
              ),
                (s = !0);
            else if (8 === c.a)
              i.b[a].l.push(
                "WARNING:     AVC stream: Picture Parameter Set detected in the payload (?!)"
              ),
                (s = !0);
            else if (1 === c.a) {
              if (!1 === (d = i.a.read(3)).i)
                return (
                  i.b[a].l.push(
                    "ERROR  :     Failed reading 3 bytes required to identify H.264 slice type"
                  ),
                  (n.h = !1),
                  n
                );
            } else {
              if (!((16 <= c.a && 18 >= c.a) || (21 <= c.a && 23 >= c.a)))
                return (
                  i.b[a].l.push(
                    "ERROR  :     very first AVC payload chunk does not start with\n             either IDR picture or Supplementary Enhanced Info"
                  ),
                  (n.h = !1),
                  n
                );
              i.b[a].l.push(
                "WARNING:     very first AVC payload chunk starts with reserved NAL Unit Type (" +
                  c.a +
                  ")"
              );
            }
          6 > c.a &&
            (l++,
            i.eb++,
            i.dc &&
              5 === c.a &&
              (i.b[a].l.push(
                "INFO   : Video frame #" + i.eb + " is a seek point"
              ),
              i.Gc.push(i.eb))),
            (w += b + (c = c.g));
        }
        return v === w || (St <= i.ja && (f - 1 === e || h === n.N))
          ? (l !== o.C &&
              (i.b[a].l.push(
                "WARNING:     AVC stream parsing inconsistency: chunk #" +
                  n.N +
                  " contains " +
                  l +
                  " samples vs. expected " +
                  o.C
              ),
              s &&
                i.b[a].l.push(
                  "WARNING:     SPS/PPS incorrectly counted as video sample (Google Nexus problem ?)"
                )),
            n.N++,
            (n.h = !0),
            n)
          : (i.b[a].l.push(
              "ERROR   :     AVC stream parsing inconsistency: chunk #" +
                n.N +
                "  end file offset is %" +
                w +
                " instead of " +
                v
            ),
            (n.h = !1),
            n);
      }
      function Gt(i, t, e, r, n) {
        var s = t.O,
          a = i.c[e];
        if (a.oa !== t.$) return (n.h = !1), n;
        var f = new Uint32Array(a.C);
        if (!1 === Hi(t, a.Ma, a.C, f)) return i.a.seek(r, 1), (n.h = !1), n;
        for (t = r + i.c[e].A, f = 0; ; ) {
          i.a.seek(r, 1);
          var h = i.a.read(4);
          if (!1 === h.i)
            return (
              i.b[s].l.push(
                "ERROR  : Failed reading 4 bytes of Mp3 header from file offset " +
                  r
              ),
              (n.h = !1),
              n
            );
          h = h.data;
          var u = new fi();
          (u.w = h[0]),
            (u.V = 1 & h[1]),
            (u.g = (h[1] >> 1) & 3),
            (u.a = (h[1] >> 3) & 3),
            (u.u = (h[1] >> 5) & 7),
            (u.R = 1 & h[2]),
            (u.m = (h[2] >> 1) & 1),
            (u.s = (h[2] >> 2) & 3),
            (u.b = (h[2] >> 4) & 15),
            (u.J = 3 & h[3]),
            (u.j = (h[3] >> 2) & 1),
            (u.c = (h[3] >> 3) & 1),
            (u.K = (h[3] >> 4) & 3),
            (u.mode = (h[3] >> 6) & 1),
            (h = u),
            (u = !0);
          var o = new di();
          if (((u = void 0 !== u && u), hi(o.a, h), !1 === (u = yi(o, u)).h))
            return (
              i.b[s].l.push(
                "ERROR  : Found invalid Mp3 header at file offset " + r
              ),
              (n.h = !1),
              n
            );
          if (0 === n.N && 0 === f) hi(n.Pb, h);
          else {
            var c = (o = new di());
            hi(c.a, n.Pb), yi(c, !1);
            var w = (c = new di());
            if ((hi(w.a, h), yi(w, !1), 0 == (mi(o).kc === mi(c).kc)))
              return (n.h = !1), n;
          }
          if ((f++, (r += u.wb) >= t)) {
            if (r > t)
              return (
                i.b[s].l.push(
                  "ERROR  : mp3 chunk #" +
                    e +
                    ": exceeded the Mp3 chunk byte length"
                ),
                (n.h = !1),
                n
              );
            break;
          }
        }
        return (
          f !== a.C &&
            i.b[s].l.push(
              "WARNING: Number of detected Mp3 samples (" +
                f +
                ") != number of hosted chunk samples (" +
                a.C +
                ")"
            ),
          n.N++,
          (n.h = !0),
          n
        );
      }
      function Wt(i, t, e, r, n) {
        var s = t.O,
          a = i.c[e];
        if (a.oa !== t.$) return (n.h = !1), n;
        var f = new Uint32Array(a.C);
        if (!1 === Hi(t, a.Ma, a.C, f)) return i.a.seek(r, 1), (n.h = !1), n;
        f = r;
        for (var h, u = 0, o = [], c = 0; c < a.A; c++) {
          if ((i.a.seek(f, 1), !1 === (h = i.a.read(1)).i))
            return (
              i.b[s].l.push(
                "ERROR  :     Failed reading 1 raw_sample_block byte from input file @offset " +
                  f
              ),
              i.b[s].l.push("ERROR  :     QCELP audio stream integrity: FAIL"),
              i.a.seek(r, 1),
              (n.h = !1),
              n
            );
          if (5 <= (h = h.data[0]))
            return (
              i.b[s].l.push(
                "ERROR  : QCELP frame start has wrong value (" + h + " (?!)"
              ),
              i.b[s].l.push("ERROR  :    QCELP audio stream integrity: FAIL"),
              (n.h = !1),
              n
            );
          if (((h = vi[h]), u++, o.push(h), (f += h) >= r + a.A)) break;
        }
        return u === a.C && !1 === Bt(i, t, e, Uint32Array.from(o))
          ? (i.b[s].l.push(
              "ERROR  :     QCELP audio frame starts misaligned with sample starts"
            ),
            i.b[s].l.push("ERROR  :     QCELP audio stream integrity: FAIL"),
            (n.h = !1),
            n)
          : (n.N++, (n.h = !0), n);
      }
      function Bt(i, t, e, r) {
        var n = i.c[e].Ma;
        if (((i = i.c[e].C), (e = r.length), 0 === r.length || i !== e))
          return !1;
        if (!1 === Hi(t, n, i, (e = new Uint32Array(i))) || e.length !== i)
          return !1;
        for (t = 0; t < e.length; t++) if (r[t] !== e[t]) return !1;
        return !0;
      }
      h(It, yt),
        (It.prototype.w = function (i, t, e, r) {
          switch (i) {
            case 1633906277:
              var n = vt(this, t, e, r, 12);
              if (0 != n) return n;
              n = 0;
              break;
            case 1986227813:
            case 1952673381:
            case 1935896165:
              if (0 != (n = vt(this, t, e, r, 12))) return n;
              n = 0;
              break;
            case 1935962981:
              if (0 != (n = vt(this, t, e, r, 12))) return n;
              n = (function (i, t, e) {
                if (!i) return 101;
                if (2 === t.o.v) {
                  var r = new G();
                  if ((i.seek(e + 12, 1), 0 !== (e = Pt(i, 3)).status))
                    return 0;
                  (r.b.j = e.zb), (r.b.g = e.Zb);
                  var n = i.M;
                  if (!1 === (e = i.read(3)).i) return 401;
                  if (
                    ((r.b.m = e.data.slice(0, 2)),
                    (r.b.s = 31 & e.data[2]),
                    (r.b.a = (e.data[2] >> 5) & 1),
                    (r.b.b = (e.data[2] >> 6) & 1),
                    (r.b.c = (e.data[2] >> 7) & 1),
                    (n += 3),
                    r.b.c && ((n += 2), i.seek(n, 1)),
                    r.b.b)
                  ) {
                    if (!1 === (e = i.read(1)).i) return 401;
                    (r.c = e.data[0]),
                      (n += 1),
                      r.c && (n += r.c),
                      i.seek(n, 1);
                  }
                  if ((r.b.a && i.seek(n + 2, 1), 0 !== (e = Pt(i, 4)).status))
                    return 0;
                  if (
                    ((r.a.a.m = e.zb),
                    (r.a.a.a = e.Zb),
                    !1 === (e = i.read(13)).i)
                  )
                    return 401;
                  if (
                    ((n = new DataView(
                      e.data.buffer,
                      e.data.byteOffset,
                      e.data.byteLength
                    )),
                    (r.a.a.b = e.data[0]),
                    (r.a.a.s = (e.data[1] >> 2) & 63),
                    (r.a.a.u = (e.data[1] >> 1) & 1),
                    (r.a.a.g = 1 & e.data[1]),
                    (r.a.a.j = e.data.slice(2, 5)),
                    (r.a.a.maxBitrate = n.getUint32(5, !1)),
                    (r.a.a.c = n.getUint32(9, !1)),
                    13 > p(r.a.a.a))
                  )
                    return 401;
                  if (4 > (e = p(r.a.a.a) - 13))
                    return 0 === e
                      ? (((i = t.o.audio).Y = r.a.a.b),
                        (i.ea = r.a.a.c),
                        !1 === xi(t, i) ? 406 : 0)
                      : 401;
                  if (!1 === Dt((i = new gt(i, i.M, e)), 8).status) e = !1;
                  else {
                    i: {
                      for (e = new y(); ; ) {
                        if (!1 === (n = Dt(i, 8)).status) {
                          e = !1;
                          break i;
                        }
                        if ((A(e, n.value), 0 == (128 & n.value))) break;
                      }
                      e = !(i.j > i.b / 8 + (i.b % 8 ? 1 : 0));
                    }
                    e =
                      !(!1 === e || 2 > i.b / 8) &&
                      (function (i) {
                        var t = Dt(i, 5);
                        if (!1 === t.status) return !1;
                        if (((i.a.J = t.value), 31 === i.a.J)) {
                          if (!1 === (t = Dt(i, 6)).status) return !1;
                          (i.a.ha = t.value), (i.a.a = 32 + i.a.ha);
                        } else i.a.a = i.a.J;
                        if (!1 === (t = Dt(i, 4)).status) return !1;
                        if (((i.a.u = t.value), 15 === i.a.u)) {
                          if (!1 === (t = Dt(i, 24)).status) return !1;
                          i.a.V = t.value;
                        } else {
                          if (2147483648 === i.a.u || 4294967295 === i.a.u)
                            return !1;
                          i.a.V = Ut[i.a.u];
                        }
                        if (
                          ((i.a.g = 255),
                          (i.a.s = 255),
                          !1 === (t = Dt(i, 4)).status)
                        )
                          return !1;
                        if (((i.a.K = t.value), 8 > i.b)) return !0;
                        if (5 === i.a.a || 29 === i.a.a) {
                          if (
                            ((i.a.j = 5),
                            (i.a.g = 1),
                            29 === i.a.a && (i.a.s = 1),
                            !1 === (t = Dt(i, 4)).status)
                          )
                            return !1;
                          if (((i.a.c = t.value), 15 === i.a.c)) {
                            if (!1 === (t = Dt(i, 24)).status) return !1;
                            i.a.m = t.value;
                          }
                          if (!1 === (t = Dt(i, 4)).status) return !1;
                          i.a.w = t.value;
                        } else i.a.j = 0;
                        switch (i.a.a) {
                          case 1:
                          case 2:
                          case 3:
                          case 4:
                          case 6:
                          case 7:
                          case 17:
                          case 19:
                          case 20:
                          case 21:
                          case 22:
                          case 23:
                            if (
                              !1 ===
                              (function (i) {
                                if (0 === i.b) return !1;
                                var t = Dt(i, 1);
                                if (!1 === t.status) return !1;
                                if (
                                  ((i.a.b.u = t.value),
                                  !1 === (t = Dt(i, 1)).status)
                                )
                                  return !1;
                                if (((i.a.b.a = t.value), i.a.b.a)) {
                                  if (!1 === (t = Dt(i, 14)).status) return !1;
                                  i.a.b.m = t.value;
                                }
                                if (!1 === (t = Dt(i, 1)).status) return !1;
                                if (
                                  ((i.a.b.b = t.value),
                                  6 === i.a.a || 20 === i.a.a)
                                ) {
                                  if (!1 === (t = Dt(i, 3)).status) return !1;
                                  i.a.b.w = t.value;
                                }
                                if (i.a.b.b) {
                                  if (22 === i.a.a) {
                                    if (!1 === (t = Dt(i, 5)).status) return !1;
                                    if (
                                      ((i.a.b.K = t.value),
                                      !1 === (t = Dt(i, 11)).status)
                                    )
                                      return !1;
                                    i.a.b.J = t.value;
                                  }
                                  if (
                                    17 === i.a.a ||
                                    19 === i.a.a ||
                                    20 === i.a.a ||
                                    23 === i.a.a
                                  ) {
                                    if (!1 === (t = Dt(i, 1)).status) return !1;
                                    if (
                                      ((i.a.b.g = t.value),
                                      !1 === (t = Dt(i, 1)).status)
                                    )
                                      return !1;
                                    if (
                                      ((i.a.b.c = t.value),
                                      !1 === (t = Dt(i, 1)).status)
                                    )
                                      return !1;
                                    i.a.b.j = t.value;
                                  }
                                  if (!1 === (t = Dt(i, 1)).status) return !1;
                                  i.a.b.s = t.value;
                                }
                                return !0;
                              })(i)
                            )
                              return !1;
                        }
                        if (24 >= i.b) return !0;
                        if (((i.a.wa = i.b - 24), 5 != i.a.j && 16 <= i.a.wa)) {
                          if (!1 === (t = Dt(i, 11)).status) return !1;
                          if (((i.a.xa = t.value), 695 != i.a.xa)) return !0;
                          if (!1 === (t = Dt(i, 5)).status) return !1;
                          if (((i.a.R = t.value), 31 === i.a.R)) {
                            if (!1 === (t = Dt(i, 6)).status) return !1;
                            (i.a.ia = t.value), (i.a.j = 32 + i.a.ia);
                          } else i.a.j = i.a.R;
                          if (5 === i.a.j) {
                            if (!1 === (t = Dt(i, 1)).status) return !1;
                            if (((i.a.g = t.value), 1 === i.a.g)) {
                              if (!1 === (t = Dt(i, 4)).status) return !1;
                              if (((i.a.c = t.value), 15 === i.a.c)) {
                                if (!1 === (t = Dt(i, 24)).status) return !1;
                                i.a.m = t.value;
                              } else {
                                if (
                                  2147483648 === i.a.c ||
                                  4294967295 === i.a.c
                                )
                                  return !0;
                                i.a.m = Ut[i.a.c];
                              }
                              if (((i.a.ja = i.b), 12 <= i.a.ja)) {
                                if (!1 === (t = Dt(i, 11)).status) return !1;
                                if (((i.a.ya = t.value), 1352 != i.a.ya))
                                  return !0;
                                if (!1 === (t = Dt(i, 1)).status) return !1;
                                i.a.s = t.value;
                              }
                            }
                          } else if (22 === i.a.j) {
                            if (!1 === (t = Dt(i, 1)).status) return !1;
                            if (((i.a.g = t.value), 1 === i.a.g)) {
                              if (!1 === (t = Dt(i, 4)).status) return !1;
                              if (((i.a.c = t.value), 15 === i.a.c))
                                if (!1 !== (t = Dt(i, 24)).status)
                                  i.a.m = t.value;
                                else {
                                  if (
                                    2147483648 === i.a.c ||
                                    4294967295 === i.a.c
                                  )
                                    return !0;
                                  i.a.m = Ut[i.a.c];
                                }
                            }
                            if (!1 === (t = Dt(i, 4)).status) return !1;
                            i.a.w = t.value;
                          }
                        }
                        return !0;
                      })(i);
                  }
                  if (!1 === e) return 401;
                  var s = i.a.a,
                    a = 0;
                  (e = i.a.V),
                    (n = 7 === i.a.K ? 8 : i.a.K),
                    1 === i.a.g && ((a |= 1), (e = i.a.m)),
                    1 === i.a.s && ((a |= 2), (n = 7 === i.a.w ? 8 : i.a.w));
                  var f = t.o.audio;
                  if (
                    ((f.Y = r.a.a.b),
                    (f.Ya = s),
                    (f.Za = a),
                    (r = f.U),
                    n !== f.H && 0 == (1 === i.a.s) && (f.H = n),
                    e !== r && 0 == (1 === i.a.g) && (f.U = e),
                    !1 === xi(t, f))
                  )
                    return 406;
                }
                return 0;
              })(this.a, this.g, t - this.m);
              break;
            case 863005998:
              if (0 != (n = vt(this, t, e, r, 12))) return n;
              i: {
                var s = this.a;
                if (((n = this.g), s)) {
                  s.seek(t - this.m + 8, 1);
                  var a = e - 8,
                    f = new Oi();
                  if (((f.ma = 1), 60 <= a)) {
                    if (!1 === (s = s.read(60)).i) {
                      n = 401;
                      break i;
                    }
                    (a = s.data),
                      (s = new Ii()),
                      (a = new DataView(a.buffer, a.byteOffset, a.byteLength));
                    for (var h = 0, u = 0; u < s.a.length; u++)
                      (s.a[u] = a.getUint16(h, !1)), (h += 2);
                    (s.g = a.getUint16(h, !1)),
                      (h += 2),
                      (s.version = a.getUint16(h, !1)),
                      (h += 2),
                      (s.j = a.getUint16(h, !1)),
                      (h += 2),
                      (s.u = a.getUint32(h, !1)),
                      (h += 4),
                      (s.s = a.getUint16(h, !1)),
                      (h += 2),
                      (s.K = a.getUint16(h, !1)),
                      (h += 2),
                      (s.m = a.getUint16(h, !1)),
                      (h += 2),
                      (s.w = a.getUint16(h, !1)),
                      (h += 2),
                      (s.ja = a.getUint32(h, !1)),
                      (h += 4),
                      (s.b = a.getFloat64(h, !1)),
                      (h += 8),
                      (s.c = a.getUint32(h, !1)),
                      (h += 4),
                      (s.J = a.getUint32(h, !1)),
                      (h += 4),
                      (s.R = a.getUint32(h, !1)),
                      (h += 4),
                      (s.ia = a.getUint32(h, !1)),
                      (h += 4),
                      (s.V = a.getUint32(h, !1)),
                      (s.ha = a.getUint32(h + 4, !1)),
                      (f.Y = 105),
                      (f.H = s.c),
                      (f.La = 16),
                      (f.U = s.b);
                  } else if (44 <= a) {
                    if (!1 === (s = s.read(44)).i) {
                      n = 401;
                      break i;
                    }
                    (a = new Pi()).a(s.data),
                      (f.Y = Mt(a.Lb)),
                      (f.H = a.Va),
                      (f.La = a.cb),
                      (f.U = a.Fa);
                  } else if (28 <= a) {
                    if (!1 === (s = s.read(28)).i) {
                      n = 401;
                      break i;
                    }
                    (s = Mi(s.data)),
                      (f.Y = Mt(s.Lb)),
                      (f.H = s.Va),
                      (f.La = s.cb),
                      (f.U = s.Fa);
                  }
                  n = 0 == xi(n, f) ? 406 : 0;
                } else n = 101;
              }
              break;
            case 828601960:
            case 829842792:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (f = this.a),
                (n = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (n = 401)
                      : ((f = P(f.data)),
                        ((s = new Ei()).ga = 5),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Bi(n) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (n = !1 === Si(n, s) ? 406 : 0)))
                  : (n = 101);
              break;
            case 1130591848:
              if (0 != (n = 14 <= ((r << 32) | (e & w)) ? 0 : 302)) return n;
              (this.Ra = new B()), (n = 0);
              break;
            case 828601953:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (f = this.a),
                (n = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (n = 401)
                      : ((f = P(f.data)),
                        ((s = new Ei()).ga = 2),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Bi(n) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (n = !1 === Si(n, s) ? 406 : 0)))
                  : (n = 101);
              break;
            case 1130591841:
              if (0 != (n = 14 <= ((r << 32) | (e & w)) ? 0 : 302)) return n;
              (this.Ra = new B()),
                (n = (function (i, t, e, r) {
                  if (!i) return 101;
                  if ((i.seek(r + 8, 1), !1 === (r = i.read(6)).i)) return 401;
                  if (
                    (new DataView(
                      r.data.buffer,
                      r.data.byteOffset,
                      r.data.byteLength
                    ),
                    (e.Kc = r.data[0]),
                    (e.ac = r.data[1]),
                    (e.Mc = r.data[2]),
                    (e.$b = r.data[3]),
                    (e.nc = 3 & r.data[4]),
                    (e.Lc = 31 & r.data[5]),
                    ((r = t.o).video.ab = e.ac),
                    (r.video.bb = e.$b),
                    !1 === Si(t, r.video))
                  )
                    return 406;
                  var n = e.Lc;
                  if (n) {
                    if (((e.ua = Array(n)), !e.ua)) return 202;
                    for (var s = 0; s < n; s++) {
                      if (
                        ((r = i.read(2)),
                        (t = new DataView(
                          r.data.buffer,
                          r.data.byteOffset,
                          r.data.byteLength
                        )),
                        !1 === r.i)
                      )
                        return 401;
                      if (
                        ((e.ua[s] = new W()),
                        (e.ua[s].xb = t.getUint16(0, !1)),
                        (r = e.ua[s].xb),
                        (e.ua[s].Na = new Uint8Array(r)),
                        !e.ua[s].Na)
                      )
                        return 202;
                      if (!1 === (r = i.read(r)).i) return 202;
                      if (
                        ((e.ua[s].Na = r.data.slice()),
                        7 != (31 & e.ua[s].Na[0]))
                      )
                        return 527;
                    }
                    if (!1 === (r = i.read(1)).i) return 401;
                    if (
                      ((e.zc = r.data[0]), (n = e.zc), (e.Ia = Array(n)), !e.Ia)
                    )
                      return 202;
                    for (s = 0; s < n; s++) {
                      if (!1 === (r = i.read(2)).i) return 401;
                      if (
                        ((t = new DataView(
                          r.data.buffer,
                          r.data.byteOffset,
                          r.data.byteLength
                        )),
                        (e.Ia[s] = new W()),
                        (e.Ia[s].xb = t.getUint16(0, !1)),
                        (r = e.Ia[s].xb),
                        (e.Ia[s].Na = new Uint8Array(r)),
                        !e.Ia[s].Na)
                      )
                        return 202;
                      if (!1 === (r = i.read(r)).i) return 202;
                      if (
                        ((e.Ia[s].Na = r.data.slice()),
                        8 != (31 & e.Ia[s].Na[0]))
                      )
                        return 527;
                    }
                  }
                  return 0;
                })(this.a, this.g, this.Ra, t - this.m));
              break;
            case 1983148141:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (f = this.a),
                (n = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (n = 401)
                      : ((f = P(f.data)),
                        ((s = new Ei()).ga = 3),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Bi(n) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (n = !1 === Si(n, s) ? 406 : 0)))
                  : (n = 101);
              break;
            case 1630826605:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              if (this.V && 12 >= e) n = 0;
              else if (((f = this.a), (n = this.g), f))
                if ((f.seek(t - this.m + 8, 1), !1 === (f = f.read(28)).i))
                  n = 401;
                else {
                  for (
                    s = f.data,
                      f = new I(),
                      s = new DataView(s.buffer, s.byteOffset, s.byteLength),
                      h = a = 0;
                    h < f.a.length;
                    h++
                  )
                    (f.a[h] = s.getUint16(a, !1)), (a += 2);
                  for (
                    f.c = s.getUint16(a, !1), a += 2, h = 0;
                    h < f.b.length;
                    h++
                  )
                    (f.b[h] = s.getUint32(a, !1)), (a += 4);
                  (f.Va = s.getUint16(a, !1)),
                    (a += 2),
                    (f.cb = s.getUint16(a, !1)),
                    (a += 2),
                    (f.g = s.getUint16(a, !1)),
                    (a += 2),
                    (f.j = s.getUint16(a, !1)),
                    (f.Fa = s.getUint32(a + 2, !1)),
                    (f.Fa >>>= 16),
                    ((s = new Oi()).ma = 1),
                    (s.Y = 0),
                    (s.H = f.Va),
                    (s.La = f.cb),
                    (s.U = f.Fa),
                    (s.a = 0),
                    (s.ea = 0),
                    (n = !1 === xi(n, s) ? 406 : 0);
                }
              else n = 101;
              break;
            case 1932816493:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (n = this.g),
                this.a
                  ? (((f = new Ei()).ga = 4), (n = !1 === Si(n, f) ? 406 : 0))
                  : (n = 101);
              break;
            case 859189875:
            case 859189864:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (f = this.a),
                (n = this.g),
                f
                  ? (f.seek(t - this.m + 8, 1),
                    !1 === (f = f.read(78)).i
                      ? (n = 401)
                      : ((f = P(f.data)),
                        ((s = new Ei()).ga = 1),
                        (s.ab = 0),
                        (s.Da = f.width),
                        (s.Ca = f.height),
                        (s.bb = 0),
                        (s.b = Bi(n) ? 1 : 0),
                        (s.$a = 0),
                        (s.a = 0),
                        (s.ea = 0),
                        (n = !1 === Si(n, s) ? 406 : 0)))
                  : (n = 101);
              break;
            case 1919770995:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (n = this.g),
                this.a
                  ? (((f = new Oi()).ma = 2),
                    (f.Y = 0),
                    (f.H = 1),
                    (f.La = 16),
                    (f.U = 8e3),
                    (f.a = 0),
                    (f.ea = 0),
                    (n = !1 === xi(n, f) ? 406 : 0))
                  : (n = 101);
              break;
            case 1651990899:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (n = this.g),
                this.a
                  ? (((f = new Oi()).ma = 3),
                    (f.Y = 0),
                    (f.H = 1),
                    (f.La = 16),
                    (f.U = 16e3),
                    (f.a = 0),
                    (f.ea = 0),
                    (n = !1 === xi(n, f) ? 406 : 0))
                  : (n = 101);
              break;
            case 858612581:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              n = 0;
              break;
            case 1885565299:
              if (0 != (n = vt(this, t, e, r, 8))) return n;
              (n = this.g),
                this.a
                  ? (((f = new Oi()).ma = 4),
                    (f.Y = 0),
                    (f.H = 1),
                    (f.La = 16),
                    (f.U = 8e3),
                    (f.a = 0),
                    (f.ea = 0),
                    (n = !1 === xi(n, f) ? 406 : 0))
                  : (n = 101);
              break;
            default:
              n = 0;
          }
          return yt.prototype.w.call(this, i, t, e, r), n;
        }),
        h(Ft, It),
        (Ft.prototype.w = function (i, t, e, r) {
          return It.prototype.w.call(this, i, t, e, r);
        });
      var Ct = 0,
        St = 2;
      self.simpleVerifyMp4FileIntegrity = function (i, t) {
        var r = new ti();
        return (function (i, t, r) {
          var n = new Ft(),
            s = new l(t),
            a = { status: 0, ta: 0 };
          return s
            .slice(0, 64)
            .then(function (t) {
              var e = { status: 0, ta: 0 };
              if (i) {
                var r = new ei();
                if (!1 === ri(r, t)) e.status = 203;
                else if ((r.seek(0, 3), (t = r.M), r.seek(0, 1), 12 > t))
                  e.status = 104;
                else if (0 == (t = r.read(8)).i) e.status = 204;
                else {
                  var n = Yi(t.data);
                  if (1887007846 != n.fa)
                    1887007859 == n.fa
                      ? ((e.ta = 5), (e.status = 566))
                      : ((e.ta = 0), (e.status = 224));
                  else if (0 == (t = r.read(4)).i) e.status = 204;
                  else
                    switch (
                      new DataView(
                        t.data.buffer,
                        t.data.byteOffset,
                        t.data.byteLength
                      ).getUint32(0, !0)
                    ) {
                      case 538997873:
                        e.ta = 2;
                        break;
                      case 1752392036:
                        e.ta = 4;
                        break;
                      case 1630693171:
                      case 829450035:
                      case 846227251:
                      case 863004467:
                      case 879781683:
                      case 896558899:
                      case 913336115:
                      case 896496489:
                      case 825520237:
                      case 842297453:
                        if (0 == (t = r.read(4)).i) {
                          e.status = 204;
                          break;
                        }
                        (n = n.na / 4 - 4), (e.ta = 1);
                        for (var s = 0; s < n; s++) {
                          if (0 == (t = r.read(4)).i) {
                            e.status = 204;
                            break;
                          }
                          if (
                            1718840424 ==
                            (t = new DataView(
                              t.data.buffer,
                              t.data.byteOffset,
                              t.data.byteLength
                            ).getUint32(0, !0))
                          ) {
                            e.ta = 3;
                            break;
                          }
                          if (1752392036 == t || 913273705 == t) {
                            e.ta = 4;
                            break;
                          }
                        }
                        break;
                      case 542520397:
                      case 541144141:
                      case 1836020585:
                        e.ta = 1;
                        break;
                      default:
                        e.ta = 1;
                    }
                }
                r.close();
              } else e.status = 101;
              if (0 != (e = (a = e).status)) {
                if (0 === a.ta)
                  throw Error("Unknown or unsupported MP4 flavor detected");
                return Promise.reject(e);
              }
            })
            .then(function () {
              return (
                2 == a.ta && (n.V = !0),
                (function (i, t, r) {
                  return (
                    (i.xa = t),
                    (i.ec = !1),
                    (function (i, t) {
                      return null === t
                        ? Promise.resolve(!1)
                        : (function (i) {
                            return null === i.xa
                              ? Promise.resolve(!1)
                              : 0 === i.R
                              ? ((i.R = i.xa.size),
                                (function (i) {
                                  return (
                                    (i.Fb = 0),
                                    (function (i) {
                                      var t = 0;
                                      return (function e() {
                                        return t + 16 >= i.R
                                          ? Promise.resolve(0)
                                          : i.xa
                                              .slice(t, t + 16)
                                              .then(function (e) {
                                                var r = Yi(e);
                                                switch (r.na) {
                                                  case 0:
                                                    r.na = i.R - t;
                                                    break;
                                                  case 1:
                                                    var n = new DataView(
                                                      e.buffer,
                                                      e.byteOffset,
                                                      e.byteLength
                                                    );
                                                    (e = n.getUint32(8)),
                                                      (n = n.getUint32(12)),
                                                      (r.na = (e << 32) | n);
                                                }
                                                if (
                                                  0 === i.J.length &&
                                                  1887007846 !== r.fa
                                                )
                                                  return Promise.reject(224);
                                                if (!1 === it(r)) t++;
                                                else {
                                                  if (
                                                    (et((e = st(i, t, r)).va),
                                                    e.Jb)
                                                  )
                                                    return Promise.resolve(0);
                                                  i.J.push(e.va);
                                                }
                                                t += r.na;
                                              })
                                              .then(e);
                                      })().then(function (t) {
                                        if (0 === t)
                                          for (var e = 0; e < i.J.length; e++) {
                                            var r = e === i.J.length - 1,
                                              n =
                                                i.J[e].pa +
                                                ((i.J[e].ra << 32) | i.J[e].W),
                                              s = r ? i.R : i.J[e + 1].pa;
                                            n !== s &&
                                              (r && n < s && (i.R = n),
                                              (t = 224)),
                                              (i.Fb = n);
                                          }
                                        return Promise.resolve(t);
                                      });
                                    })(i).then(function (t) {
                                      var r = !0;
                                      switch (t) {
                                        case 0:
                                          r = !0;
                                          break;
                                        case 201:
                                          r = !1;
                                          break;
                                        default:
                                          if (0 === i.J.length) return !1;
                                          var n = (t = !1),
                                            s = !1,
                                            a = i.J,
                                            f =
                                              "undefined" != typeof Symbol &&
                                              Symbol.iterator &&
                                              a[Symbol.iterator];
                                          for (
                                            a = f ? f.call(a) : { next: e(a) },
                                              f = a.next();
                                            !f.done;
                                            f = a.next()
                                          )
                                            switch (f.value.ka) {
                                              case 1887007846:
                                                t = !0;
                                                break;
                                              case 1987014509:
                                                n = !0;
                                                break;
                                              case 1952539757:
                                                s = !0;
                                            }
                                          t &&
                                            n &&
                                            s &&
                                            ((i.R = i.Fb), (r = !0));
                                      }
                                      return (i.bc = 0), r;
                                    })
                                  );
                                })(i).then(function (t) {
                                  return !1 !== t && ((i.bc = 0), !0);
                                }))
                              : Promise.resolve(!0);
                          })(i).then(function (i) {
                            return !1 !== i;
                          });
                    })(i, r).then(function (t) {
                      if (!1 === t) return 203;
                      (function i(t) {
                        for (var e = 0; e < t.Ja.length; e++) i(t.Ja[e]);
                        t.Ja = [];
                      })(i.ia),
                        (i.ia.O = 0),
                        (i.ia.ka = 0),
                        (i.ia.W = i.R),
                        (i.ia.ra = 0),
                        (i.ia.pa = 0);
                      var e = -1,
                        r = 0;
                      return (function t() {
                        if (++e === i.J.length)
                          return (i.Fc = 0 === r), Promise.resolve(r);
                        var n = i.J[e],
                          s = n.ka;
                        if (
                          ((n.ib = 1),
                          i.wa++,
                          (n.O = i.wa),
                          et(n),
                          i.ia.Ja.push(n),
                          (i.m = n.pa),
                          i.w(s, n.pa, n.W, n.ra),
                          1887007846 === s ||
                            1952539757 === s ||
                            1684632949 === s ||
                            1701147238 === s ||
                            1835099490 === s)
                        )
                          return 1835099490 === s
                            ? ((s = n.pa),
                              i.xa
                                .slice(s, s + ((n.ra << 32) | n.W))
                                .then(function (e) {
                                  return !1 === ri(i.a, e)
                                    ? 203
                                    : 0 != (r = i.gc(n.W, n.ra))
                                    ? r
                                    : t();
                                }))
                            : t();
                        s = n.pa;
                        var a = (n.ra << 32) | n.W;
                        return i.xa.slice(s, s + a).then(function (e) {
                          return !1 === ri(i.a, e)
                            ? 203
                            : 0 !=
                              (r = (function i(t, e, r, n) {
                                for (var s, a; !(r >= n); ) {
                                  if ((t.a.seek(r, 1), r + 8 > n)) {
                                    ut(t, r, n - r) && t.w(0, t.m + r, 4, 0);
                                    break;
                                  }
                                  if (0 !== (s = nt(t, r)).status) return 204;
                                  if (((s = s.Xa), 0 === t.wa)) {
                                    if (1887007846 !== s.fa) return 224;
                                    a = t.a.M;
                                    var f = t.a.read(4);
                                    if (!1 === f.i) return 201;
                                    (t.V =
                                      538997873 ==
                                      ((f.data[0] << 24) |
                                        (f.data[1] << 16) |
                                        (f.data[2] << 8) |
                                        f.data[3])),
                                      t.a.seek(a, 1);
                                  }
                                  if (!1 === it(s)) {
                                    if (!1 === ft(t, r, s.na, n)) return 224;
                                    if (
                                      (t.wa++,
                                      ((s = st(t, t.m + r, s).va).O = t.wa),
                                      (s.ib = 1 + e.ib),
                                      et(s),
                                      e.Ja.push(s),
                                      0 !== (a = t.w(s.ka, s.pa, s.W, s.ra)))
                                    )
                                      return a;
                                    r += s.W;
                                  } else {
                                    if (
                                      (t.wa++,
                                      ((s = (a = st(t, t.m + r, s)).va).O =
                                        t.wa),
                                      (s.ib = 1 + e.ib),
                                      et(s),
                                      a.Jb)
                                    ) {
                                      t.w(s.ka, s.pa, s.W, s.ra);
                                      break;
                                    }
                                    if (
                                      ((f = (a = at(t, s, r, n)).Oa),
                                      (a = a.status),
                                      !1 === f)
                                    )
                                      return e.Ja.push(s), a;
                                    f = t.a.M;
                                    var h = t.w(s.ka, s.pa, s.W, s.ra);
                                    if (0 !== h) return h;
                                    t.a.seek(f, 1);
                                    i: {
                                      for (f = 0; f < Ti.length; f++)
                                        if (Ti[f] == s.ka) {
                                          f = !1;
                                          break i;
                                        }
                                      f = !0;
                                    }
                                    if (f) {
                                      var u = s.pa - t.m;
                                      (f = u + (a = s.W)), (u += 8);
                                      i: {
                                        for (h = 0; h < Qi.length; h++)
                                          if (Qi[h] == s.ka) {
                                            h = !0;
                                            break i;
                                          }
                                        h = !1;
                                      }
                                      if (
                                        (h && (u += 4),
                                        0 === tt(s).indexOf("meta"))
                                      ) {
                                        var o = (h = t).a.M;
                                        h.a.seek(u, 1);
                                        var c = h.a.read(4);
                                        if (
                                          (!1 === c.i
                                            ? (h = {
                                                jc: 4294967295,
                                                status: 224,
                                              })
                                            : (1919706216 ==
                                                ((c.data[3] << 24) |
                                                  (c.data[2] << 16) |
                                                  (c.data[1] << 8) |
                                                  c.data[0]) && (u -= 4),
                                              h.a.seek(o, 1),
                                              (h = { jc: u, status: 0 })),
                                          0 !== h.status)
                                        )
                                          return h.status;
                                        u = h.jc;
                                      }
                                      if (
                                        (0 === tt(s).indexOf("mp4v") ||
                                        0 === tt(s).indexOf("hvc1") ||
                                        0 === tt(s).indexOf("avc1")
                                          ? (u += 78)
                                          : 0 === tt(s).indexOf("mp4a")
                                          ? (u += ht(t, a))
                                          : 0 === tt(s).indexOf("mp4s")
                                          ? (u += 8)
                                          : 0 === tt(s).indexOf("dref")
                                          ? (u += 4)
                                          : 0 === tt(s).indexOf("s263") ||
                                            0 === tt(s).indexOf("h263")
                                          ? (u += 78)
                                          : 0 === tt(s).indexOf("samr")
                                          ? (u += ht(t, a))
                                          : 0 === tt(s).indexOf("sevc") ||
                                            0 === tt(s).indexOf("sawb") ||
                                            0 === tt(s).indexOf("sqcp") ||
                                            0 === tt(s).indexOf("ec-3")
                                          ? (u += 28)
                                          : 0 === tt(s).indexOf("stsd") &&
                                            (u += 4),
                                        0 !== (a = i(t, s, u, f)))
                                      )
                                        return a;
                                      a = 319;
                                    }
                                    if ((e.Ja.push(s), (r += s.W), 0 === a))
                                      return a;
                                  }
                                }
                                return 0;
                              })(i, n, 8, a))
                            ? r
                            : t();
                        });
                      })();
                    })
                  );
                })(n, s, i)
              );
            })
            .then(function (i) {
              return 0 != i
                ? i
                : (function (i) {
                    var t = 1;
                    t = void 0 === t ? Ct : t;
                    var e = void 0 === e ? u : e,
                      r = void 0 !== r && r,
                      n = 0;
                    if (
                      (!i.c || 0 === i.c.length) &&
                      0 !== (n = It.prototype.Dc.call(i, t))
                    )
                      return Promise.resolve(n);
                    if (
                      ((i.Cb = e),
                      (i.dc = r),
                      0 !==
                        (n = (function (i) {
                          for (
                            var t = 405, e = 405, r = 0, n = i.j.length, s = 0;
                            s < n;
                            s++
                          ) {
                            var a = i.j[s].o;
                            if (1 === a.v) (t = 0), Ci(i.j[s]);
                            else if (2 === a.v) {
                              if (((e = 0), 0 === (a = a.audio).ma)) a = !1;
                              else {
                                var f,
                                  h = !0;
                                if (1 === a.ma)
                                  for (h = !1, f = 0; f < ui.length; f++)
                                    if (ui[f] === a.Y) {
                                      h = !0;
                                      break;
                                    }
                                !1 === h && i.V && (h = !0);
                                var u = !1;
                                for (f = 0; f < oi.length; f++)
                                  if (oi[f] === a.La) {
                                    u = !0;
                                    break;
                                  }
                                var o = !1;
                                for (f = 0; f < ci.length; f++)
                                  if (ci[f] === a.H) {
                                    o = !0;
                                    break;
                                  }
                                var c = !1;
                                for (f = 0; f < wi.length; f++)
                                  if (wi[f] === a.U) {
                                    c = !0;
                                    break;
                                  }
                                a = h && u && o && c;
                              }
                              if (!1 === a) {
                                e = 403;
                                break;
                              }
                              Ci(i.j[s]);
                            }
                          }
                          return (
                            (405 === t && 405 === e) || (404 === t && 403 === e)
                              ? (r = 405)
                              : 404 === t
                              ? (r = 404)
                              : 403 === e && (r = 403),
                            r
                          );
                        })(i)))
                    ) {
                      if (St !== t) return Promise.resolve(n);
                      (403 === n || 404 === n) && (n = 0);
                    }
                    var s = (function (i) {
                      for (var t = 0, e = [], r = 0, n = 0; n < i.c.length; n++)
                        i.c[n].A > r && (r = i.c[n].A);
                      for (r > i.Eb && (i.Eb = r); ; ) {
                        if (
                          ((n = { wc: t, vb: 0, Vb: u, Wb: 0 }),
                          t < (r = i).c.length)
                        )
                          for (
                            var s = r.u ? r.c[t].T : r.c[t].B, a = t;
                            a < r.c.length && !(n.Wb + r.c[a].A > r.Eb);
                            a++
                          )
                            (n.Wb = (r.u ? r.c[a].T : r.c[a].B) - s + r.c[a].A),
                              u === n.Vb && (n.Vb = r.u ? r.c[a].T : r.c[a].B),
                              n.vb++;
                        if (0 === (r = n).vb) break;
                        e.push(r), (t += r.vb);
                      }
                      return e;
                    })(i);
                    for (i.b = Array(i.j.length), t = 0; t < i.b.length; t++)
                      i.b[t] = new Nt();
                    var a = { h: !1, N: 0, Ha: !1, Jc: !1, Pb: new fi() },
                      f = { h: !1, N: 0, Ha: !1, Jc: !1, Pb: new fi() };
                    return (function t(e) {
                      if (s.length === e) return Promise.resolve(0);
                      var r = s[e],
                        n = r.Vb;
                      return i.xa.slice(n, n + r.Wb).then(function (s) {
                        if ((i.a || (i.a = new ei()), !1 === ri(i.a, s)))
                          return 203;
                        for (s = r.wc; s < r.wc + r.vb; s++) {
                          var h = i.u ? i.c[s].T : i.c[s].B;
                          if (St <= i.ja && 16777216 <= h + i.c[s].A) return 0;
                          var u = wt(i, i.c[s].oa),
                            o = i.j[u],
                            w = o.o,
                            v = !1;
                          switch (w.v) {
                            case 1:
                              switch (w.video.ga) {
                                case 0:
                                  i.b[u].l.push(
                                    "ERROR  : Undefined video type (" +
                                      w.video.ga +
                                      ") encountered (?!)"
                                  ),
                                    (v = !1);
                                  break;
                                case 1:
                                  i: {
                                    (v = s), (h -= n);
                                    var l = f,
                                      b = o.O,
                                      R = i.c[v];
                                    if (R.oa !== o.$) l.h = !1;
                                    else {
                                      var k = 0,
                                        d = [],
                                        m = h + R.A,
                                        y = h;
                                      i.a.seek(y, 1);
                                      for (
                                        var A,
                                          p = { h: !1, lb: y, Ba: 5 },
                                          E = y,
                                          O = 0,
                                          V = 0,
                                          g = new Uint8Array(5);
                                        ;

                                      ) {
                                        if (!1 === (A = i.a.read(1 * p.Ba)).i) {
                                          i.b[b].l.push(
                                            "ERROR   :   Failed reading " +
                                              p.Ba +
                                              " bytes from input file @offset " +
                                              y
                                          ),
                                            i.b[b].l.push(
                                              "ERROR   :     H.263 video stream integrity: FAIL"
                                            ),
                                            i.a.seek(h, 1),
                                            (l.h = !1),
                                            (f = l);
                                          break i;
                                        }
                                        for (var D = 0; D < p.Ba; D++)
                                          g[D + V] = A.data[D];
                                        if (
                                          ((A = p.Ba),
                                          (V = g),
                                          (O = y - O),
                                          (p.Ba = 5),
                                          0 === V[0] &&
                                          0 === V[1] &&
                                          128 == (-4 & V[2])
                                            ? ((p.lb = O), (p.h = !0))
                                            : 0 === V[1] &&
                                              0 === V[2] &&
                                              128 == (-4 & V[3])
                                            ? ((p.lb = O + 1), (p.h = !0))
                                            : 0 === V[2] &&
                                              0 === V[3] &&
                                              128 == (-4 & V[4])
                                            ? ((p.lb = O + 2), (p.h = !0))
                                            : (0 === V[3] && 0 === V[4]
                                                ? (p.Ba = 1)
                                                : 0 === V[4] && (p.Ba = 2),
                                              (p.h = !1)),
                                          p.h)
                                        )
                                          y > h && d.push(p.lb - E),
                                            (E = p.lb),
                                            k++,
                                            i.eb++;
                                        else if (h === y) {
                                          i.b[b].l.push(
                                            "ERROR   :     H263 pic start code not found at the chunk start"
                                          ),
                                            i.b[b].l.push(
                                              "ERROR   :     H.263 video stream integrity: FAIL"
                                            ),
                                            (l.h = !1),
                                            (f = l);
                                          break i;
                                        }
                                        if (0 != (O = 5 - p.Ba))
                                          for (V = 0; V < O; V++)
                                            g[V] = g[V + p.Ba];
                                        if (
                                          ((V = 5 > p.Ba ? O : 0),
                                          (y += A) >= m - 5)
                                        )
                                          break;
                                      }
                                      if ((d.push(m - E), k !== R.C))
                                        i.b[b].l.push(
                                          "WARNING:     H.263 stream parsing inconsistency: chunk #" +
                                            l.N +
                                            " contains " +
                                            k +
                                            " samples vs. expected " +
                                            R.C
                                        );
                                      else if (
                                        !1 === Bt(i, o, v, Uint32Array.from(d))
                                      ) {
                                        i.b[b].l.push(
                                          "ERROR   :     H.263 video start codes misaligned with sample starts"
                                        ),
                                          i.b[b].l.push(
                                            "ERROR   :     H.263 video stream integrity: FAIL"
                                          ),
                                          (l.h = !1),
                                          (f = l);
                                        break i;
                                      }
                                      l.N++, (l.h = !0);
                                    }
                                    f = l;
                                  }
                                  v = f.h;
                                  break;
                                case 2:
                                  v = (f = Lt(i, o, s, h - n, f)).h;
                                  break;
                                case 3:
                                  i: {
                                    if (
                                      ((v = s),
                                      (d = h - n),
                                      (h = f),
                                      (l = o.O),
                                      (b = i.c[v]).oa !== o.$)
                                    )
                                      h.h = !1;
                                    else {
                                      if (
                                        ((R = 0),
                                        (k = []),
                                        (m = 0),
                                        0 < b.A - 5)
                                      ) {
                                        if (
                                          (i.a.seek(d + 0, 1),
                                          !1 === (m = i.a.read(5)).i)
                                        ) {
                                          i.b[l].l.push(
                                            "ERROR   :     Failed reading 5 bytes from input file @offset " +
                                              d +
                                              0
                                          ),
                                            i.b[l].l.push(
                                              "ERROR   :     MPEG4 video stream integrity: FAIL"
                                            ),
                                            i.a.seek(d, 1),
                                            (h.h = !1),
                                            (f = h);
                                          break i;
                                        }
                                        if (
                                          ((d = m.data.slice(0, 5)),
                                          438 !=
                                            (m =
                                              (d[0] << 24) |
                                              (d[1] << 16) |
                                              (d[2] << 8) |
                                              d[3]) &&
                                            435 !== m &&
                                            432 !== m &&
                                            0 == (256 <= m && 287 >= m) &&
                                            0 == (288 <= m && 303 <= m))
                                        ) {
                                          i.b[l].l.push(
                                            "ERROR   :     VOP start code not found at the chunk start, found 0x" +
                                              c(m) +
                                              " instead"
                                          ),
                                            i.b[l].l.push(
                                              "ERROR   :     MPEG4 video stream integrity: FAIL"
                                            ),
                                            (h.h = !1),
                                            (f = h);
                                          break i;
                                        }
                                        435 === m && (h.Ha = !0),
                                          438 === m &&
                                            ((h.Ha = !1),
                                            (d = (d[4] >> 6) & 3),
                                            0 === h.N &&
                                              0 !== d &&
                                              i.b[l].l.push(
                                                "WARNING:     MPEG4 part 2 video payload does not start with I picture"
                                              ),
                                            R++),
                                          (m = b.A - 5);
                                      }
                                      if ((k.push(m + 5), R !== b.C))
                                        i.b[l].l.push(
                                          "WARNING:     MPEG4 video stream parsing inconsistency: chunk #" +
                                            h.N +
                                            " contains " +
                                            R +
                                            " samples vs. expected " +
                                            b.C
                                        );
                                      else if (
                                        !1 === Bt(i, o, v, Uint32Array.from(k))
                                      ) {
                                        i.b[l].l.push(
                                          "ERROR   :     MPEG4 part 2 video start codes misaligned with sample starts"
                                        ),
                                          i.b[l].l.push(
                                            "ERROR   :     MPEG4 video stream integrity: FAIL"
                                          ),
                                          (h.h = !1),
                                          (f = h);
                                        break i;
                                      }
                                      h.N++, (h.h = !0);
                                    }
                                    f = h;
                                  }
                                  v = f.h;
                                  break;
                                case 5:
                                  v = !1;
                              }
                              (w.video.$a = i.eb), Si(o, w.video);
                              break;
                            case 2:
                              switch (w.audio.ma) {
                                case 0:
                                  i.b[u].l.push(
                                    "ERROR  : Undefined audio type (" +
                                      w.audio.Y +
                                      ") encountered (?!)"
                                  ),
                                    (v = !1);
                                  break;
                                case 1:
                                  switch (w.audio.Y) {
                                    case 107:
                                    case 105:
                                      v = (a = Gt(i, o, s, h - n, a)).h;
                                      break;
                                    default:
                                      switch (w.audio.H) {
                                        case 1:
                                          l = 0;
                                          break;
                                        case 2:
                                          l = 1;
                                          break;
                                        default:
                                          return 0;
                                      }
                                      i: {
                                        if (
                                          ((v = h - n),
                                          (h = l),
                                          (l = a),
                                          (b = o.O),
                                          (k = i.c[s]).oa !== o.$)
                                        )
                                          l.h = !1;
                                        else if (
                                          ((R = new Uint32Array(k.C)),
                                          !1 === Hi(o, k.Ma, k.C, R))
                                        )
                                          i.a.seek(v, 1), (l.h = !1);
                                        else {
                                          for (
                                            o = v, k = 0;
                                            k < R.length;
                                            k++
                                          ) {
                                            if (
                                              (i.a.seek(o, 1),
                                              !1 === (d = i.a.read(1)).i)
                                            ) {
                                              i.b[b].l.push(
                                                "ERROR  :    Failed reading 1 raw_sample_block byte from input file @offset " +
                                                  o
                                              ),
                                                i.b[b].l.push(
                                                  "ERROR  :    MPEG  audio stream integrity: FAIL"
                                                ),
                                                i.a.seek(v, 1),
                                                (l.h = !1),
                                                (a = l);
                                              break i;
                                            }
                                            if (
                                              (d = (d.data[0] >> 5) & 7) !== h
                                            ) {
                                              switch (
                                                ((m = !1), (E = y = ""), d)
                                              ) {
                                                case 0:
                                                  (m = 2 < w.audio.H),
                                                    (y = " = single channel"),
                                                    (E =
                                                      "    imperfect implicit AACHEv2 signalling (?)");
                                                  break;
                                                case 1:
                                                  (m =
                                                    !1 === l.Ha &&
                                                    2 <= w.audio.H),
                                                    (y = " = channel pair");
                                                  break;
                                                case 2:
                                                  (m =
                                                    !1 === l.Ha &&
                                                    1 === w.audio.H),
                                                    (y =
                                                      " = coupled channel pair");
                                                  break;
                                                case 3:
                                                  (m =
                                                    !1 === l.Ha &&
                                                    2 >= w.audio.H),
                                                    (y = " = LFE channel");
                                                  break;
                                                case 5:
                                                  l.Ha = !0;
                                              }
                                              if (m) {
                                                i.b[b].l.push(
                                                  "WARNING:     raw_sample_block indicator (" +
                                                    d +
                                                    y +
                                                    ") found at file offset " +
                                                    o +
                                                    " is in mismatch with declared number of channels (" +
                                                    w.audio.H +
                                                    ")"
                                                ),
                                                  E &&
                                                    i.b[b].l.push(
                                                      "WARNING: " + E
                                                    ),
                                                  i.b[b].l.push(
                                                    "ERROR  :     MPEG  audio stream integrity: FAIL"
                                                  ),
                                                  i.a.seek(v, 1),
                                                  (l.h = !1),
                                                  (a = l);
                                                break i;
                                              }
                                            }
                                            o += R[k];
                                          }
                                          l.N++, (l.h = !0);
                                        }
                                        a = l;
                                      }
                                      v = a.h;
                                  }
                                  break;
                                case 2:
                                  if (0 === s) {
                                    if (1 !== w.audio.H) {
                                      i.b[u].l.push(
                                        "ERROR  :  AMRNB number of channels is not 1 (?!)"
                                      ),
                                        i.b[u].l.push(
                                          "ERROR  :     AMRNB audio stream integrity: FAIL"
                                        ),
                                        (v = !1);
                                      break;
                                    }
                                    if (8e3 !== w.audio.U) {
                                      i.b[u].l.push(
                                        "ERROR  :  AMRNB sampling rate is not 8000 (?!)"
                                      ),
                                        i.b[u].l.push(
                                          "ERROR  :     AMRNB audio stream integrity: FAIL"
                                        ),
                                        (v = !1);
                                      break;
                                    }
                                  }
                                  i: {
                                    if (
                                      ((w = s),
                                      (v = h - n),
                                      (h = a),
                                      (l = o.O),
                                      (b = i.c[w]).oa !== o.$)
                                    )
                                      h.h = !1;
                                    else if (
                                      ((R = new Uint32Array(b.C)),
                                      !1 === Hi(o, b.Ma, b.C, R))
                                    )
                                      i.a.seek(v, 1), (h.h = !1);
                                    else {
                                      for (
                                        R = v, k = 0, d = [], m = 0;
                                        m < b.A;
                                        m++
                                      ) {
                                        if (
                                          (i.a.seek(R, 1),
                                          !1 === (y = i.a.read(1)).i)
                                        ) {
                                          i.b[l].l.push(
                                            "ERROR  :     Failed reading 1 raw_sample_block byte from input file @offset " +
                                              R
                                          ),
                                            i.b[l].l.push(
                                              "ERROR  :     AMRNB audio stream integrity: FAIL"
                                            ),
                                            i.a.seek(v, 1),
                                            (h.h = !1),
                                            (a = h);
                                          break i;
                                        }
                                        if (
                                          ((y = ki(y.data)),
                                          (y = li[15 & y.Ob]),
                                          k++,
                                          d.push(y),
                                          (R += y) >= v + b.A)
                                        )
                                          break;
                                      }
                                      if (k !== b.C)
                                        i.b[l].l.push(
                                          "    AMR-NB audio stream parsing inconsistency: chunk #" +
                                            h.N +
                                            " contains " +
                                            k +
                                            " samples vs. expected " +
                                            b.C
                                        );
                                      else if (
                                        !1 === Bt(i, o, w, Uint32Array.from(d))
                                      ) {
                                        i.b[l].l.push(
                                          "ERROR  :     AMRNB audio frame starts misaligned with sample starts"
                                        ),
                                          i.b[l].l.push(
                                            "ERROR  :     AMRNB audio stream integrity: FAIL"
                                          ),
                                          (h.h = !1),
                                          (a = h);
                                        break i;
                                      }
                                      h.N++, (h.h = !0);
                                    }
                                    a = h;
                                  }
                                  v = a.h;
                                  break;
                                case 3:
                                  if (0 === s) {
                                    if (1 !== w.audio.H) {
                                      i.b[u].l.push(
                                        "ERROR  :  AMRWB number of channels is not 1 (?!)"
                                      ),
                                        i.b[u].l.push(
                                          "ERROR  :     AMRWB audio stream integrity: FAIL"
                                        ),
                                        (v = !1);
                                      break;
                                    }
                                    if (16e3 !== w.audio.U) {
                                      i.b[u].l.push(
                                        "ERROR  :  AMRWB sampling rate is not 16000 (?!)"
                                      ),
                                        i.b[u].l.push(
                                          "ERROR  :     AMRWB audio stream integrity: FAIL"
                                        ),
                                        (v = !1);
                                      break;
                                    }
                                  }
                                  i: {
                                    if (
                                      ((w = s),
                                      (v = h - n),
                                      (h = a),
                                      (l = o.O),
                                      (b = i.c[w]).oa !== o.$)
                                    )
                                      h.h = !1;
                                    else if (
                                      ((R = new Uint32Array(b.C)),
                                      !1 === Hi(o, b.Ma, b.C, R))
                                    )
                                      i.a.seek(v, 1), (h.h = !1);
                                    else {
                                      for (
                                        R = v, k = 0, d = [], m = 0;
                                        m < b.A;
                                        m++
                                      ) {
                                        if (
                                          (i.a.seek(R, 1),
                                          !1 === (y = i.a.read(1)).i)
                                        ) {
                                          i.b[l].l.push(
                                            "ERROR  :     Failed reading 1 raw_sample_block byte from input file @offset " +
                                              R
                                          ),
                                            i.b[l].l.push(
                                              "ERROR  :     AMRWB audio stream integrity: FAIL"
                                            ),
                                            i.a.seek(v, 1),
                                            (h.h = !1),
                                            (a = h);
                                          break i;
                                        }
                                        if (
                                          ((y = ki(y.data)),
                                          (y = bi[15 & y.Ob]),
                                          k++,
                                          d.push(y),
                                          (R += y) >= v + b.A)
                                        )
                                          break;
                                      }
                                      if (k !== b.C)
                                        i.b[l].l.push(
                                          "    AMR-WB audio stream parsing inconsistency: chunk #" +
                                            h.N +
                                            " contains " +
                                            k +
                                            " samples vs. expected " +
                                            b.C
                                        );
                                      else if (
                                        !1 === Bt(i, o, w, Uint32Array.from(d))
                                      ) {
                                        i.b[l].l.push(
                                          "ERROR  :     AMRWB audio frame starts misaligned with sample starts"
                                        ),
                                          i.b[l].l.push(
                                            "ERROR  :     AMRWB audio stream integrity: FAIL"
                                          ),
                                          (h.h = !1),
                                          (a = h);
                                        break i;
                                      }
                                      h.N++, (h.h = !0);
                                    }
                                    a = h;
                                  }
                                  v = a.h;
                                  break;
                                case 4:
                                  if (0 === s) {
                                    if (1 !== w.audio.H) {
                                      i.b[u].l.push(
                                        "ERROR  :  QCELP number of channels is not 1 (?!)"
                                      ),
                                        i.b[u].l.push(
                                          "ERROR  :     QCELP audio stream integrity: FAIL"
                                        ),
                                        (v = !1);
                                      break;
                                    }
                                    if (8e3 !== w.audio.U) {
                                      i.b[u].l.push(
                                        "ERROR  :  QCELP sampling rate is not 8000 (?!)"
                                      ),
                                        i.b[u].l.push(
                                          "ERROR  :     QCELP audio stream integrity: FAIL"
                                        ),
                                        (v = !1);
                                      break;
                                    }
                                  }
                                  v = (a = Wt(i, o, s, h - n, a)).h;
                                  break;
                                case 5:
                                  v = !1;
                              }
                              break;
                            default:
                              v = !0;
                          }
                          if (!1 === v) return (i.b[u].status = 407);
                        }
                        return t(e + 1);
                      });
                    })(0).then(function (t) {
                      for (var e = 0; e < i.b.length; e++) {
                        for (var r = i.j[e].o, n = 0; n < i.b[e].l.length; n++);
                        if (0 === i.b[e].status)
                          if (((n = i.j[e].sa), 1 === r.v)) {
                            if (
                              ((i.Bb = -1),
                              (i.fc = (1 * r.video.$a * n.ba) / n.duration),
                              2 === r.video.ga)
                            ) {
                              var s = i,
                                a = i,
                                f = a.Ra.ua[0].xb,
                                h = new Uint8Array(4 + f);
                              (h[0] = 0), (h[1] = 0), (h[2] = 0), (h[3] = 1);
                              for (var u = 0; u < f; u++)
                                h[4 + u] = a.Ra.ua[0].Na[u];
                              s.Bb = -1;
                            }
                            (s = i.j[e].hb),
                              (i.K.ga = r.video.ga),
                              (i.K.Tb = r.video.ab),
                              (i.K.Qb = r.video.bb),
                              (i.K.yb = Math.floor(s)),
                              (i.K.Da = r.video.Da),
                              (i.K.Ca = r.video.Ca),
                              (i.K.Nb = i.Bb),
                              (i.K.Mb = i.fc),
                              (i.K.Ka =
                                0 !== n.ba ? (1 * n.duration) / n.ba : 0),
                              (i.K.Pa = r.video.ea);
                          } else
                            2 === r.v &&
                              ((i.ha.ma = r.audio.ma),
                              (i.ha.Y = r.audio.Y),
                              (i.ha.Ya = r.audio.Ya),
                              (i.ha.Za = r.audio.Za),
                              (i.ha.H = r.audio.H),
                              (i.ha.U = r.audio.U),
                              (i.ha.Ka =
                                0 !== n.ba ? (1 * n.duration) / n.ba : 0),
                              (i.ha.Pa = r.audio.ea));
                      }
                      return Promise.resolve(t);
                    });
                  })(n).then(function (i) {
                    if (0 != i) return i;
                    var t = n.ha,
                      e = new m();
                    (e.ma = t.ma),
                      (e.Y = t.Y),
                      (e.Ya = t.Ya),
                      (e.Za = t.Za),
                      (e.H = t.H),
                      (e.U = t.U),
                      (e.lc = t.lc),
                      (e.mc = t.mc),
                      (e.Ka = t.Ka),
                      (e.Pa = t.Pa),
                      (t = n.K);
                    var s = new d();
                    return (
                      (s.ga = t.ga),
                      (s.Tb = t.Tb),
                      (s.Qb = t.Qb),
                      (s.yb = t.yb),
                      (s.Da = t.Da),
                      (s.Ca = t.Ca),
                      (s.Nb = t.Nb),
                      (s.Mb = t.Mb),
                      (s.Ka = t.Ka),
                      (s.Pa = t.Pa),
                      (r.Ic = e),
                      (r.Cc = s),
                      (r.Nc = ii(n.ic)),
                      i
                    );
                  });
            });
        })(i, t, r).then(function (i) {
          if (i) return { error: i };
          var t = null;
          return (
            0 !== (i = r.Cc).ga &&
              (t = {
                width: i.Da,
                height: i.Ca,
                rotation: i.yb,
                duration: i.Ka,
              }),
            { error: null, info: { audio: "UNCONVERTED", video: t } }
          );
        });
      };
    },
  },
]);
