"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [52],
  {
    459: function (r, n, t) {
      t.r(n),
        t.d(n, "GzipWrapper", function () {
          return X;
        }),
        t.d(n, "createDeflate", function () {
          return Y;
        }),
        t.d(n, "inflate", function () {
          return Z;
        });
      var e = Uint8Array,
        i = Uint16Array,
        f = Uint32Array,
        a = new e([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        o = new e([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        u = new e([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        v = function (r, n) {
          for (var t = new i(31), e = 0; e < 31; ++e) t[e] = n += 1 << r[e - 1];
          var a = new f(t[30]);
          for (e = 1; e < 30; ++e)
            for (var o = t[e]; o < t[e + 1]; ++o) a[o] = ((o - t[e]) << 5) | e;
          return [t, a];
        },
        c = v(a, 2),
        s = c[0],
        h = c[1];
      (s[28] = 258), (h[258] = 28);
      for (
        var w = v(o, 0), l = w[0], d = w[1], p = new i(32768), M = 0;
        M < 32768;
        ++M
      ) {
        var y = ((43690 & M) >>> 1) | ((21845 & M) << 1);
        (y =
          ((61680 & (y = ((52428 & y) >>> 2) | ((13107 & y) << 2))) >>> 4) |
          ((3855 & y) << 4)),
          (p[M] = (((65280 & y) >>> 8) | ((255 & y) << 8)) >>> 1);
      }
      var b = function (r, n, t) {
          for (var e = r.length, f = 0, a = new i(n); f < e; ++f) ++a[r[f] - 1];
          var o,
            u = new i(n);
          for (f = 0; f < n; ++f) u[f] = (u[f - 1] + a[f - 1]) << 1;
          if (t) {
            o = new i(1 << n);
            var v = 15 - n;
            for (f = 0; f < e; ++f)
              if (r[f])
                for (
                  var c = (f << 4) | r[f],
                    s = n - r[f],
                    h = u[r[f] - 1]++ << s,
                    w = h | ((1 << s) - 1);
                  h <= w;
                  ++h
                )
                  o[p[h] >>> v] = c;
          } else
            for (o = new i(e), f = 0; f < e; ++f)
              r[f] && (o[f] = p[u[r[f] - 1]++] >>> (15 - r[f]));
          return o;
        },
        k = new e(288);
      for (M = 0; M < 144; ++M) k[M] = 8;
      for (M = 144; M < 256; ++M) k[M] = 9;
      for (M = 256; M < 280; ++M) k[M] = 7;
      for (M = 280; M < 288; ++M) k[M] = 8;
      var x = new e(32);
      for (M = 0; M < 32; ++M) x[M] = 5;
      var E = b(k, 9, 0),
        A = b(k, 9, 1),
        T = b(x, 5, 0),
        U = b(x, 5, 1),
        D = function (r) {
          for (var n = r[0], t = 1; t < r.length; ++t) r[t] > n && (n = r[t]);
          return n;
        },
        m = function (r, n, t) {
          var e = (n / 8) | 0;
          return ((r[e] | (r[e + 1] << 8)) >> (7 & n)) & t;
        },
        z = function (r, n) {
          var t = (n / 8) | 0;
          return (r[t] | (r[t + 1] << 8) | (r[t + 2] << 16)) >> (7 & n);
        },
        F = function (r) {
          return ((r / 8) | 0) + (7 & r && 1);
        },
        O = function (r, n, t) {
          (null == n || n < 0) && (n = 0),
            (null == t || t > r.length) && (t = r.length);
          var a = new (r instanceof i ? i : r instanceof f ? f : e)(t - n);
          return a.set(r.subarray(n, t)), a;
        },
        g = function (r, n, t) {
          var i = r.length;
          if (!i || (t && !t.l && i < 5)) return n || new e(0);
          var f = !n || t,
            v = !t || t.i;
          t || (t = {}), n || (n = new e(3 * i));
          var c = function (r) {
              var t = n.length;
              if (r > t) {
                var i = new e(Math.max(2 * t, r));
                i.set(n), (n = i);
              }
            },
            h = t.f || 0,
            w = t.p || 0,
            d = t.b || 0,
            p = t.l,
            M = t.d,
            y = t.m,
            k = t.n,
            x = 8 * i;
          do {
            if (!p) {
              t.f = h = m(r, w, 1);
              var E = m(r, w + 1, 3);
              if (((w += 3), !E)) {
                var T = r[(K = F(w) + 4) - 4] | (r[K - 3] << 8),
                  g = K + T;
                if (g > i) {
                  if (v) throw "unexpected EOF";
                  break;
                }
                f && c(d + T),
                  n.set(r.subarray(K, g), d),
                  (t.b = d += T),
                  (t.p = w = 8 * g);
                continue;
              }
              if (1 == E) (p = A), (M = U), (y = 9), (k = 5);
              else {
                if (2 != E) throw "invalid block type";
                var B = m(r, w, 31) + 257,
                  G = m(r, w + 10, 15) + 4,
                  W = B + m(r, w + 5, 31) + 1;
                w += 14;
                for (var j = new e(W), q = new e(19), C = 0; C < G; ++C)
                  q[u[C]] = m(r, w + 3 * C, 7);
                w += 3 * G;
                var H = D(q),
                  I = (1 << H) - 1;
                if (!v && w + W * (H + 7) > x) break;
                var J = b(q, H, 1);
                for (C = 0; C < W; ) {
                  var K,
                    L = J[m(r, w, I)];
                  if (((w += 15 & L), (K = L >>> 4) < 16)) j[C++] = K;
                  else {
                    var N = 0,
                      P = 0;
                    for (
                      16 == K
                        ? ((P = 3 + m(r, w, 3)), (w += 2), (N = j[C - 1]))
                        : 17 == K
                        ? ((P = 3 + m(r, w, 7)), (w += 3))
                        : 18 == K && ((P = 11 + m(r, w, 127)), (w += 7));
                      P--;

                    )
                      j[C++] = N;
                  }
                }
                var Q = j.subarray(0, B),
                  R = j.subarray(B);
                (y = D(Q)), (k = D(R)), (p = b(Q, y, 1)), (M = b(R, k, 1));
              }
              if (w > x) throw "unexpected EOF";
            }
            f && c(d + 131072);
            for (
              var S = (1 << y) - 1, V = (1 << k) - 1, X = y + k + 18;
              v || w + X < x;

            ) {
              var Y = (N = p[z(r, w) & S]) >>> 4;
              if ((w += 15 & N) > x) throw "unexpected EOF";
              if (!N) throw "invalid length/literal";
              if (Y < 256) n[d++] = Y;
              else {
                if (256 == Y) {
                  p = null;
                  break;
                }
                var Z = Y - 254;
                if (Y > 264) {
                  var $ = a[(C = Y - 257)];
                  (Z = m(r, w, (1 << $) - 1) + s[C]), (w += $);
                }
                var _ = M[z(r, w) & V],
                  rr = _ >>> 4;
                if (!_) throw "invalid distance";
                if (
                  ((w += 15 & _),
                  (R = l[rr]),
                  rr > 3 &&
                    (($ = o[rr]), (R += z(r, w) & ((1 << $) - 1)), (w += $)),
                  w > x)
                )
                  throw "unexpected EOF";
                f && c(d + 131072);
                for (var nr = d + Z; d < nr; d += 4)
                  (n[d] = n[d - R]),
                    (n[d + 1] = n[d + 1 - R]),
                    (n[d + 2] = n[d + 2 - R]),
                    (n[d + 3] = n[d + 3 - R]);
                d = nr;
              }
            }
            (t.l = p),
              (t.p = w),
              (t.b = d),
              p && ((h = 1), (t.m = y), (t.d = M), (t.n = k));
          } while (!h);
          return d == n.length ? n : O(n, 0, d);
        },
        B = function (r, n, t) {
          t <<= 7 & n;
          var e = (n / 8) | 0;
          (r[e] |= t), (r[e + 1] |= t >>> 8);
        },
        G = function (r, n, t) {
          t <<= 7 & n;
          var e = (n / 8) | 0;
          (r[e] |= t), (r[e + 1] |= t >>> 8), (r[e + 2] |= t >>> 16);
        },
        W = function (r, n) {
          for (var t = [], f = 0; f < r.length; ++f)
            r[f] && t.push({ s: f, f: r[f] });
          var a = t.length,
            o = t.slice();
          if (!a) return [K, 0];
          if (1 == a) {
            var u = new e(t[0].s + 1);
            return (u[t[0].s] = 1), [u, 1];
          }
          t.sort(function (r, n) {
            return r.f - n.f;
          }),
            t.push({ s: -1, f: 25001 });
          var v = t[0],
            c = t[1],
            s = 0,
            h = 1,
            w = 2;
          for (t[0] = { s: -1, f: v.f + c.f, l: v, r: c }; h != a - 1; )
            (v = t[t[s].f < t[w].f ? s++ : w++]),
              (c = t[s != h && t[s].f < t[w].f ? s++ : w++]),
              (t[h++] = { s: -1, f: v.f + c.f, l: v, r: c });
          var l = o[0].s;
          for (f = 1; f < a; ++f) o[f].s > l && (l = o[f].s);
          var d = new i(l + 1),
            p = j(t[h - 1], d, 0);
          if (p > n) {
            f = 0;
            var M = 0,
              y = p - n,
              b = 1 << y;
            for (
              o.sort(function (r, n) {
                return d[n.s] - d[r.s] || r.f - n.f;
              });
              f < a;
              ++f
            ) {
              var k = o[f].s;
              if (!(d[k] > n)) break;
              (M += b - (1 << (p - d[k]))), (d[k] = n);
            }
            for (M >>>= y; M > 0; ) {
              var x = o[f].s;
              d[x] < n ? (M -= 1 << (n - d[x]++ - 1)) : ++f;
            }
            for (; f >= 0 && M; --f) {
              var E = o[f].s;
              d[E] == n && (--d[E], ++M);
            }
            p = n;
          }
          return [new e(d), p];
        },
        j = function r(n, t, e) {
          return -1 == n.s
            ? Math.max(r(n.l, t, e + 1), r(n.r, t, e + 1))
            : (t[n.s] = e);
        },
        q = function (r) {
          for (var n = r.length; n && !r[--n]; );
          for (
            var t = new i(++n),
              e = 0,
              f = r[0],
              a = 1,
              o = function (r) {
                t[e++] = r;
              },
              u = 1;
            u <= n;
            ++u
          )
            if (r[u] == f && u != n) ++a;
            else {
              if (!f && a > 2) {
                for (; a > 138; a -= 138) o(32754);
                a > 2 &&
                  (o(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305),
                  (a = 0));
              } else if (a > 3) {
                for (o(f), --a; a > 6; a -= 6) o(8304);
                a > 2 && (o(((a - 3) << 5) | 8208), (a = 0));
              }
              for (; a--; ) o(f);
              (a = 1), (f = r[u]);
            }
          return [t.subarray(0, e), n];
        },
        C = function (r, n) {
          for (var t = 0, e = 0; e < n.length; ++e) t += r[e] * n[e];
          return t;
        },
        H = function (r, n, t) {
          var e = t.length,
            i = F(n + 2);
          (r[i] = 255 & e),
            (r[i + 1] = e >>> 8),
            (r[i + 2] = 255 ^ r[i]),
            (r[i + 3] = 255 ^ r[i + 1]);
          for (var f = 0; f < e; ++f) r[i + f + 4] = t[f];
          return 8 * (i + 4 + e);
        },
        I = function (r, n, t, e, f, v, c, s, h, w, l) {
          B(n, l++, t), ++f[256];
          for (
            var d = W(f, 15),
              p = d[0],
              M = d[1],
              y = W(v, 15),
              A = y[0],
              U = y[1],
              D = q(p),
              m = D[0],
              z = D[1],
              F = q(A),
              O = F[0],
              g = F[1],
              j = new i(19),
              I = 0;
            I < m.length;
            ++I
          )
            j[31 & m[I]]++;
          for (I = 0; I < O.length; ++I) j[31 & O[I]]++;
          for (
            var J = W(j, 7), K = J[0], L = J[1], N = 19;
            N > 4 && !K[u[N - 1]];
            --N
          );
          var P,
            Q,
            R,
            S,
            V = (w + 5) << 3,
            X = C(f, k) + C(v, x) + c,
            Y =
              C(f, p) +
              C(v, A) +
              c +
              14 +
              3 * N +
              C(j, K) +
              (2 * j[16] + 3 * j[17] + 7 * j[18]);
          if (V <= X && V <= Y) return H(n, l, r.subarray(h, h + w));
          if ((B(n, l, 1 + (Y < X)), (l += 2), Y < X)) {
            (P = b(p, M, 0)), (Q = p), (R = b(A, U, 0)), (S = A);
            var Z = b(K, L, 0);
            for (
              B(n, l, z - 257),
                B(n, l + 5, g - 1),
                B(n, l + 10, N - 4),
                l += 14,
                I = 0;
              I < N;
              ++I
            )
              B(n, l + 3 * I, K[u[I]]);
            l += 3 * N;
            for (var $ = [m, O], _ = 0; _ < 2; ++_) {
              var rr = $[_];
              for (I = 0; I < rr.length; ++I) {
                var nr = 31 & rr[I];
                B(n, l, Z[nr]),
                  (l += K[nr]),
                  nr > 15 &&
                    (B(n, l, (rr[I] >>> 5) & 127), (l += rr[I] >>> 12));
              }
            }
          } else (P = E), (Q = k), (R = T), (S = x);
          for (I = 0; I < s; ++I)
            if (e[I] > 255) {
              (nr = (e[I] >>> 18) & 31),
                G(n, l, P[nr + 257]),
                (l += Q[nr + 257]),
                nr > 7 && (B(n, l, (e[I] >>> 23) & 31), (l += a[nr]));
              var tr = 31 & e[I];
              G(n, l, R[tr]),
                (l += S[tr]),
                tr > 3 && (G(n, l, (e[I] >>> 5) & 8191), (l += o[tr]));
            } else G(n, l, P[e[I]]), (l += Q[e[I]]);
          return G(n, l, P[256]), l + Q[256];
        },
        J = new f([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        K = new e(0),
        L = (function () {
          for (var r = new f(256), n = 0; n < 256; ++n) {
            for (var t = n, e = 9; --e; ) t = (1 & t && 3988292384) ^ (t >>> 1);
            r[n] = t;
          }
          return r;
        })(),
        N = function (r, n, t, u, v) {
          return (function (r, n, t, u, v, c) {
            var s = r.length,
              w = new e(u + s + 5 * (1 + Math.ceil(s / 7e3)) + v),
              l = w.subarray(u, w.length - v),
              p = 0;
            if (!n || s < 8)
              for (var M = 0; M <= s; M += 65535) {
                var y = M + 65535;
                y < s
                  ? (p = H(l, p, r.subarray(M, y)))
                  : ((l[M] = c), (p = H(l, p, r.subarray(M, s))));
              }
            else {
              for (
                var b = J[n - 1],
                  k = b >>> 13,
                  x = 8191 & b,
                  E = (1 << t) - 1,
                  A = new i(32768),
                  T = new i(E + 1),
                  U = Math.ceil(t / 3),
                  D = 2 * U,
                  m = function (n) {
                    return (r[n] ^ (r[n + 1] << U) ^ (r[n + 2] << D)) & E;
                  },
                  z = new f(25e3),
                  g = new i(288),
                  B = new i(32),
                  G = 0,
                  W = 0,
                  j = ((M = 0), 0),
                  q = 0,
                  C = 0;
                M < s;
                ++M
              ) {
                var L = m(M),
                  N = 32767 & M,
                  P = T[L];
                if (((A[N] = P), (T[L] = N), q <= M)) {
                  var Q = s - M;
                  if ((G > 7e3 || j > 24576) && Q > 423) {
                    (p = I(r, l, 0, z, g, B, W, j, C, M - C, p)),
                      (j = G = W = 0),
                      (C = M);
                    for (var R = 0; R < 286; ++R) g[R] = 0;
                    for (R = 0; R < 30; ++R) B[R] = 0;
                  }
                  var S = 2,
                    V = 0,
                    X = x,
                    Y = (N - P) & 32767;
                  if (Q > 2 && L == m(M - Y))
                    for (
                      var Z = Math.min(k, Q) - 1,
                        $ = Math.min(32767, M),
                        _ = Math.min(258, Q);
                      Y <= $ && --X && N != P;

                    ) {
                      if (r[M + S] == r[M + S - Y]) {
                        for (
                          var rr = 0;
                          rr < _ && r[M + rr] == r[M + rr - Y];
                          ++rr
                        );
                        if (rr > S) {
                          if (((S = rr), (V = Y), rr > Z)) break;
                          var nr = Math.min(Y, rr - 2),
                            tr = 0;
                          for (R = 0; R < nr; ++R) {
                            var er = (M - Y + R + 32768) & 32767,
                              ir = (er - A[er] + 32768) & 32767;
                            ir > tr && ((tr = ir), (P = er));
                          }
                        }
                      }
                      Y += ((N = P) - (P = A[N]) + 32768) & 32767;
                    }
                  if (V) {
                    z[j++] = 268435456 | (h[S] << 18) | d[V];
                    var fr = 31 & h[S],
                      ar = 31 & d[V];
                    (W += a[fr] + o[ar]),
                      ++g[257 + fr],
                      ++B[ar],
                      (q = M + S),
                      ++G;
                  } else (z[j++] = r[M]), ++g[r[M]];
                }
              }
              (p = I(r, l, c, z, g, B, W, j, C, M - C, p)),
                !c && 7 & p && (p = H(l, p + 1, K));
            }
            return O(w, 0, u + F(p) + v);
          })(
            r,
            null == n.level ? 6 : n.level,
            null == n.mem
              ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(r.length))))
              : 12 + n.mem,
            t,
            u,
            !v
          );
        },
        P = function (r, n, t) {
          for (; t; ++n) (r[n] = t), (t >>>= 8);
        },
        Q = (function () {
          function r(r, n) {
            n || "function" != typeof r || ((n = r), (r = {})),
              (this.ondata = n),
              (this.o = r || {});
          }
          return (
            (r.prototype.p = function (r, n) {
              this.ondata(N(r, this.o, 0, 0, !n), n);
            }),
            (r.prototype.push = function (r, n) {
              if (this.d) throw "stream finished";
              if (!this.ondata) throw "no stream handler";
              (this.d = n), this.p(r, n || !1);
            }),
            r
          );
        })(),
        R = (function () {
          function r(r, n) {
            var t;
            (this.c =
              ((t = -1),
              {
                p: function (r) {
                  for (var n = t, e = 0; e < r.length; ++e)
                    n = L[(255 & n) ^ r[e]] ^ (n >>> 8);
                  t = n;
                },
                d: function () {
                  return ~t;
                },
              })),
              (this.l = 0),
              (this.v = 1),
              Q.call(this, r, n);
          }
          return (
            (r.prototype.push = function (r, n) {
              Q.prototype.push.call(this, r, n);
            }),
            (r.prototype.p = function (r, n) {
              this.c.p(r), (this.l += r.length);
              var t,
                e = N(
                  r,
                  this.o,
                  this.v &&
                    10 +
                      (((t = this.o).filename && t.filename.length + 1) || 0),
                  n && 8,
                  !n
                );
              this.v &&
                ((function (r, n) {
                  var t = n.filename;
                  if (
                    ((r[0] = 31),
                    (r[1] = 139),
                    (r[2] = 8),
                    (r[8] = n.level < 2 ? 4 : 9 == n.level ? 2 : 0),
                    (r[9] = 3),
                    0 != n.mtime &&
                      P(
                        r,
                        4,
                        Math.floor(new Date(n.mtime || Date.now()) / 1e3)
                      ),
                    t)
                  ) {
                    r[3] = 8;
                    for (var e = 0; e <= t.length; ++e)
                      r[e + 10] = t.charCodeAt(e);
                  }
                })(e, this.o),
                (this.v = 0)),
                n &&
                  (P(e, e.length - 8, this.c.d()), P(e, e.length - 4, this.l)),
                this.ondata(e, n);
            }),
            r
          );
        })(),
        S = "undefined" != typeof TextEncoder && new TextEncoder(),
        V = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        V.decode(K, { stream: !0 });
      } catch (r) {}
      var X = class extends R {
        constructor(r) {
          super(r),
            (this.aU = []),
            (this.ondata = (r, n) => {
              if ((this.aU.push(r), n)) {
                var t = 0;
                this.aU.forEach((r) => {
                  t += r.length;
                });
                var e = new Uint8Array(t),
                  i = 0;
                this.aU.forEach((r) => {
                  e.set(r, i), (i += r.length);
                }),
                  (this.aT = e);
              }
            });
        }
        push(r, n) {
          if (null != this.aT)
            throw new Error(
              "Tried to push chunk to compressor after final block"
            );
          r instanceof Uint8Array
            ? super.push(r, n)
            : r instanceof ArrayBuffer
            ? super.push(new Uint8Array(r), n)
            : super.push(
                (function (r, n) {
                  var t;
                  if (S) return S.encode(r);
                  var i = r.length,
                    f = new e(r.length + (r.length >> 1)),
                    a = 0,
                    o = function (r) {
                      f[a++] = r;
                    };
                  for (t = 0; t < i; ++t) {
                    if (a + 5 > f.length) {
                      var u = new e(a + 8 + ((i - t) << 1));
                      u.set(f), (f = u);
                    }
                    var v = r.charCodeAt(t);
                    v < 128
                      ? o(v)
                      : v < 2048
                      ? (o(192 | (v >> 6)), o(128 | (63 & v)))
                      : v > 55295 && v < 57344
                      ? (o(
                          240 |
                            ((v =
                              (65536 + (1047552 & v)) |
                              (1023 & r.charCodeAt(++t))) >>
                              18)
                        ),
                        o(128 | ((v >> 12) & 63)),
                        o(128 | ((v >> 6) & 63)),
                        o(128 | (63 & v)))
                      : (o(224 | (v >> 12)),
                        o(128 | ((v >> 6) & 63)),
                        o(128 | (63 & v)));
                  }
                  return O(f, 0, a);
                })(r),
                n
              );
        }
        result() {
          if (null == this.aT)
            throw new Error("Tried to access result before adding final block");
          return this.aT;
        }
      };
      function Y() {
        var r =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new X(r);
      }
      function Z(r) {
        return (function (r, n) {
          return 31 == r[0] && 139 == r[1] && 8 == r[2]
            ? (function (r, n) {
                return g(
                  r.subarray(
                    (function (r) {
                      if (31 != r[0] || 139 != r[1] || 8 != r[2])
                        throw "invalid gzip data";
                      var n = r[3],
                        t = 10;
                      4 & n && (t += r[10] | (2 + (r[11] << 8)));
                      for (
                        var e = ((n >> 3) & 1) + ((n >> 4) & 1);
                        e > 0;
                        e -= !r[t++]
                      );
                      return t + (2 & n);
                    })(r),
                    -8
                  ),
                  new e(
                    ((i = (t = r).length),
                    (t[i - 4] | (t[i - 3] << 8) | (t[i - 2] << 16)) +
                      2 * (t[i - 1] << 23))
                  )
                );
                var t, i;
              })(r)
            : 8 != (15 & r[0]) || r[0] >> 4 > 7 || ((r[0] << 8) | r[1]) % 31
            ? (function (r, n) {
                return g(r, void 0);
              })(r)
            : (function (r, n) {
                return g(
                  ((function (r) {
                    if (
                      8 != (15 & r[0]) ||
                      r[0] >>> 4 > 7 ||
                      ((r[0] << 8) | r[1]) % 31
                    )
                      throw "invalid zlib data";
                    if (32 & r[1])
                      throw "invalid zlib data: preset dictionaries not supported";
                  })(r),
                  r.subarray(2, -4)),
                  void 0
                );
              })(r);
        })(r);
      }
    },
  },
]);
