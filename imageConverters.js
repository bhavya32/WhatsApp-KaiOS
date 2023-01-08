"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [13],
  {
    398: function (e, r, n) {
      function t(e) {
        return (
          self.simpleVerifyMp4FileIntegrity
            ? Promise.resolve()
            : n.e(191).then(n.t.bind(null, 485, 7))
        )
          .then(() => self.simpleVerifyMp4FileIntegrity("file.bin", e))
          .then(
            (e) => {
              if (null != e.error)
                return (
                  __LOG__(3)`mp4Check error code: ${e.error}`,
                  { type: "error", error: "format_error" }
                );
              var r = e.info.video || null;
              if (r) {
                var n = r.rotation % 360;
                n < 0 && (n += 360), (r.rotation = n);
              }
              return (
                r &&
                  r.rotation % 90 != 0 &&
                  (__LOG__(4)`mp4Check video has non-90 rotation ${r.rotation}`,
                  (r.rotation = null)),
                { type: "success", info: { video: r, audio: null } }
              );
            },
            (e) => (
              __LOG__(3)`mp4Check internal error: ${e}`,
              { type: "error", error: "format_error" }
            )
          );
      }
      n.d(r, "a", function () {
        return t;
      });
    },
    514: function (e, r, n) {
      n.r(r),
        n.d(r, "extractDominantColorFromBlob", function () {
          return p;
        }),
        n.d(r, "PROFILE_PHOTO_SQUARE_MIN_PIXELS", function () {
          return P;
        }),
        n.d(r, "cropAndResizeProfilePicture", function () {
          return x;
        }),
        n.d(r, "scaleDownProfilePictureThumb", function () {
          return I;
        }),
        n.d(r, "cropAndResizeVCardPhoto", function () {
          return R;
        }),
        n.d(r, "cropAndResizeSquareBlob", function () {
          return T;
        }),
        n.d(r, "PREVIEW_PHOTO_MAX_SIZE", function () {
          return Q;
        }),
        n.d(r, "scaleImageAndConvertToJpg", function () {
          return j;
        }),
        n.d(r, "computeMicroThumb", function () {
          return K;
        }),
        n.d(r, "lockVideoProcessing", function () {
          return Y;
        }),
        n.d(r, "videoInfoAndPreview", function () {
          return te;
        }),
        n.d(r, "extractFrame", function () {
          return ie;
        });
      var t = n(8),
        i = n.n(t),
        a = n(11),
        o = n(43),
        u = n(518),
        c = n(398),
        d = n(24),
        f = n(81),
        s = n(68),
        l = n(110),
        m = n(85),
        _ = 192;
      function v(e) {
        for (
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 13,
            n = new Uint32Array(256),
            t = 0;
          t < e.length;
          t += 4 * r
        ) {
          var i = h(e[t], e[t + 1], e[t + 2]),
            a = ~~(0.2126 * e[t] + 0.7152 * e[t + 1] + 0.0722 * e[t + 2]),
            o =
              (((a & _) >> 6) << 4) |
              (((i[0] & _) >> 6) << 2) |
              ((i[2] & _) >> 6);
          (o *= 4),
            (n[o++] += e[t]),
            (n[o++] += e[t + 1]),
            (n[o++] += e[t + 2]),
            n[o]++;
        }
        return n;
      }
      function h(e, r, n) {
        var t,
          i = Math.max(e, r, n),
          a = Math.min(e, r, n),
          o = 0,
          u = (i + a) >> 1;
        if (i === a) t = 0;
        else {
          var c = i - a;
          switch (((t = u > 127 ? c / (510 - i - a) : c / (i + a)), i)) {
            case e:
              o = (r - n) / c + (r < n ? 6 : 0);
              break;
            case r:
              o = (n - e) / c + 2;
              break;
            case n:
              o = (e - r) / c + 4;
          }
          o /= 6;
        }
        return [255 * o, 255 * t, u];
      }
      function g(e, r) {
        for (var n = [], t = 0; t < r; t++) {
          var i = 4 * t,
            a = e[i + 3];
          a && n.push([a, i]);
        }
        return n;
      }
      function w(e) {
        e.sort(function (e, r) {
          return r[0] - e[0];
        });
      }
      function b(e, r, n) {
        var t,
          i = 0,
          a = [],
          o = Math.min(n, r.length);
        for (t = 0; t < o; t++) {
          var u = r[t][0],
            c = r[t][1],
            d = [~~(e[c] / u), ~~(e[c + 1] / u), ~~(e[c + 2] / u), u];
          a.push(d), (i += u);
        }
        for (t = 0; t < a.length; t++) a[t][3] /= i;
        return a;
      }
      function p(e) {
        var r = URL.createObjectURL(e);
        return new Promise((e, n) => {
          var t = document.createElement("img");
          (t.onload = () => {
            var n = document.createElement("canvas");
            (n.width = t.width), (n.height = t.height);
            var i = n.getContext("2d", { willReadFrequently: !0 });
            i.drawImage(t, 0, 0);
            var a = E(i.getImageData(0, 0, n.width, n.height));
            URL.revokeObjectURL(r), e(a);
          }),
            (t.onerror = () => {
              URL.revokeObjectURL(r), e("transparent");
            }),
            (t.src = r);
        });
      }
      function E(e) {
        var r = (function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 12,
            n = v(e),
            t = g(n, n.length / 4);
          return w(t), b(n, t, r);
        })(e.data);
        return (
          "#" +
          ((1 << 24) + (r[0][0] << 16) + (r[0][1] << 8) + r[0][2])
            .toString(16)
            .slice(1)
        );
      }
      var y = n(76),
        L = n(40),
        G = n(118),
        O = n(17),
        P = 192,
        $ = new f.a(),
        M = Promise.resolve();
      function x(e) {
        return F(e, 1280).then((e) => {
          var r = e.naturalWidth,
            n = e.naturalHeight;
          if (r < P || n < P) throw new u.a();
          return z(e, 640, 15e4);
        });
      }
      function I(e) {
        return T(e, 32);
      }
      function R(e) {
        return (function (e, r, n) {
          if (!e.startsWith(o.a))
            throw new Error(
              "Image data url should start with base 64 scheme: " + e
            );
          return S(e, 192).then((e) =>
            (function (e, r, n) {
              __LOG__(2)`cropAndResize picture`;
              var t = C(e, 96),
                i = (e) => {
                  var r = (function (e, r) {
                    return e.toDataURL("image/jpeg", r);
                  })(t, e);
                  if ((0, o.f)(r) < 4e3) return r;
                  if (e > 0.2) return i(e - 0.1);
                  throw new Error("target image size not reached");
                };
              return i(0.8);
            })(e)
          );
        })(e);
      }
      function T(e, r, n) {
        return F(e, 2 * r).then((e) => z(e, r, n));
      }
      function z(e, r, n) {
        return __LOG__(2)`cropAndResize picture`, A(C(e, r), 0.8, n);
      }
      function A(e, r, n) {
        var t = (r) =>
          k(e, r).then((e) => {
            if (
              (__LOG__(
                2
              )`Quality ${r}: resulting blob has size ${e.size} (maxByteSize = ${n})`,
              null == n || e.size < n)
            )
              return e;
            if (r > 0.2) return t(r - 0.1);
            throw new Error("target image size not reached");
          });
        return t(r);
      }
      function k(e, r) {
        return (
          __LOG__(2)`canvasToBlob: ${e.width}x${e.height} canvas, quality=${r}`,
          new Promise((n) => {
            e.toBlob(n, "image/jpeg", r);
          })
        );
      }
      function q(e, r) {
        var n = new Image();
        return new Promise((t, i) => {
          (n.onload = t),
            (n.onerror = (e) => {
              __LOG__(4)`img.onError: ${(0, m.f)(e)}`,
                i(new Error("imageBlobToImgElement img.onerror"));
            }),
            (n.src = e + (null != r && 1 !== r ? "#-moz-samplesize=" + r : ""));
        }).then(() => n);
      }
      function F(e, r) {
        return S(self.URL.createObjectURL(e), r);
      }
      function S(e, r) {
        var n = r || (0, L.f)();
        return q(e, 8)
          .then((r) => {
            for (
              var t = 8 * Math.max(r.width, r.height), i = 1;
              i < 8 && !(t / i <= n);
              i *= 2
            );
            return (
              __LOG__(
                2
              )`imageBlobToImgElement: loading image using -moz-samplesize equal to ${i}`,
              8 === i ? r : q(e, i)
            );
          })
          .finally(() => {
            self.URL.revokeObjectURL(e);
          });
      }
      function C(e, r) {
        var n, t;
        __LOG__(2)`imgElementToSquareCanvasScalingAndCropping`;
        var i = 0,
          a = 0,
          o = e.naturalWidth,
          u = e.naturalHeight;
        o < u
          ? ((t = (u * r) / o),
            (t = Math.round(t)),
            (n = r),
            (a = -1 * Math.round((t - r) / 2)))
          : ((n = (o * r) / u),
            (n = Math.round(n)),
            (t = r),
            (i = -1 * Math.round((n - r) / 2)));
        var c = document.createElement("canvas"),
          d = c.getContext("2d", { willReadFrequently: !0 });
        return (c.width = r), (c.height = r), d.drawImage(e, i, a, n, t), c;
      }
      function B(e, r, n) {
        return e <= n && r <= n
          ? { width: e, height: r }
          : (e > r
              ? ((t = Math.round((r * n) / e)), (i = n))
              : ((i = Math.round((e * n) / r)), (t = n)),
            { width: i, height: t });
        var t, i;
      }
      function U(e, r) {
        return e > y.j
          ? { width: y.j, height: Math.floor((r * y.j) / e) }
          : { width: e, height: r };
      }
      function V(e, r, n) {
        __LOG__(2)`imgElementToCanvasScalingAndRotating`;
        var t = e.naturalWidth,
          i = e.naturalHeight,
          a = i,
          o = t;
        (90 !== n && 270 !== n) || ((a = t), (o = i));
        var c,
          d,
          f,
          s,
          l = B(o, a, r),
          m = l.width,
          _ = l.height,
          v = document.createElement("canvas"),
          h = v.getContext("2d", { willReadFrequently: !0 });
        if (
          ((v.width = m),
          (v.height = _),
          __LOG__(
            2
          )`imgElementToCanvasScalingAndRotating: scaling to ${m}x${_}`,
          0 === n
            ? h.drawImage(e, 0, 0, m, _)
            : (h.save(),
              h.translate(m / 2, _ / 2),
              h.rotate((n * Math.PI) / 180),
              90 === n || 270 === n
                ? ((c = -_ / 2), (d = -m / 2), (f = _), (s = m))
                : ((c = -m / 2), (d = -_ / 2), (f = m), (s = _)),
              h.drawImage(e, c, d, f, s),
              h.restore()),
          0 === e.naturalWidth || 0 === e.naturalHeight)
        )
          throw (
            (__LOG__(
              4
            )`Failed canvas drawing attempt: image of size ${t}x${i} got to size ${e.naturalWidth}x${e.naturalHeight} - probably unloaded, because of low memory`,
            new u.c(
              `Failed canvas drawing attempt: image got to size ${e.naturalWidth}x${e.naturalHeight} - probably unloaded, because of low memory`
            ))
          );
        return v;
      }
      function H(e, r) {
        return V(e, r, 0);
      }
      function J(e) {
        __LOG__(2)`imgElementToCanvasAsIs`;
        var r = document.createElement("canvas");
        return (
          (r.width = e.naturalWidth),
          (r.height = e.naturalHeight),
          r.getContext("2d", { willReadFrequently: !0 }).drawImage(e, 0, 0),
          r
        );
      }
      function N(e) {
        switch (e) {
          case "status":
            return {
              imageMaxEdge: (0, O.a)("status_image_max_edge"),
              imageQuality: (0, O.a)("status_image_quality"),
              imageMaxKbytes: (0, O.a)("image_max_kbytes"),
            };
          case "chat":
          case "unknown":
          case "frame":
            return {
              imageMaxEdge: (0, O.a)("image_max_edge"),
              imageQuality: (0, O.a)("image_quality_2") / 100,
              imageMaxKbytes: (0, O.a)("image_max_kbytes"),
            };
          default:
            return {
              imageMaxEdge: (0, O.a)("status_image_max_edge"),
              imageQuality: (0, O.a)("status_image_quality"),
              imageMaxKbytes: (0, O.a)("image_max_kbytes"),
            };
        }
      }
      var Q = 72,
        W = 0.5;
      function j(e, r) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          t = N(r);
        return D(e, t, n).catch(
          (0, G.a)(
            u.c,
            (r) => (
              __LOG__(4)`Memory pressure error: ${r.message}`,
              __LOG__(2)`Giving it one more shot`,
              (0, l.a)(7e3).then(() => D(e, t, n))
            )
          )
        );
      }
      function D(e, r, n) {
        var t = r.imageMaxEdge,
          i = r.imageMaxKbytes,
          o = r.imageQuality,
          u = r.imagePreviewMaxEdge,
          c = void 0 === u ? Q : u;
        return (0, a.h)(e)
          .then((e) => {
            var r;
            try {
              (r = (function (e) {
                var r = new d.a(e),
                  n = new d.a(),
                  t = r.readUint16();
                if (65496 !== t) throw new Error("Not a valid JPEG");
                n.writeUint16(t);
                for (var i = !1, a = !1, o = !1, u = {}; !i; ) {
                  var c = r.readUint8();
                  if (a && 255 !== c) n.writeUint8(c);
                  else {
                    var f = (c << 8) | r.readUint8();
                    if (a && (65280 === f || (f >= 65488 && f <= 65495)))
                      n.writeUint16(f);
                    else if (((a = !1), 65497 === f))
                      n.writeUint16(f), (i = !0);
                    else if (
                      (f >= 65472 && f <= 65475) ||
                      (f >= 65477 && f <= 65479) ||
                      (f >= 65480 && f <= 65483) ||
                      (f >= 65485 && f <= 65487)
                    ) {
                      if (o)
                        throw new Error(
                          "Multiple start of frame markers detected in one image"
                        );
                      n.writeUint16(f);
                      var s = r.readUint16();
                      if (
                        (n.writeUint16(s),
                        n.writeUint8(r.readUint8()),
                        (u.height = r.readUint16()),
                        (u.width = r.readUint16()),
                        n.writeUint16(u.height),
                        n.writeUint16(u.width),
                        0 === u.height || 0 === u.width)
                      )
                        throw new Error(
                          "Incorrect dimensions, width and height must be greater than zero"
                        );
                      var l = r.readUint8(),
                        m = 3 * l;
                      if (s - 2 !== m + 6)
                        throw new Error(
                          "Incorrect start of baseline frame data, length is incorrect"
                        );
                      n.writeUint8(l), n.writeBuffer(r.readBuffer(m)), (o = !0);
                    } else if (f >= 65504 && f <= 65519) {
                      var _ = r.readUint16() - 2;
                      r.advance(_);
                    } else if (
                      65476 === f ||
                      65499 === f ||
                      65534 === f ||
                      65501 === f
                    ) {
                      n.writeUint16(f);
                      var v = r.readUint16();
                      n.writeUint16(v), n.writeBuffer(r.readBuffer(v - 2));
                    } else {
                      if (65498 !== f)
                        throw new Error(
                          "Incorrect segment marker " + f.toString(16)
                        );
                      n.writeUint16(f), (a = !0);
                    }
                  }
                }
                return (u.content = n.readBuffer()), u;
              })(e)),
                __LOG__(
                  2
                )`Successfully parsed JPEG image with dimensions ${r.width}x${r.height}`;
            } catch (e) {
              __LOG__(2)`Failed to parse JPEG image: ${e.message}`;
            }
            var a = 0 !== n;
            return r &&
              !a &&
              r.width <= t &&
              r.height <= t &&
              r.content.byteLength <= 1024 * i
              ? (__LOG__(
                  2
                )`Using parsed JPEG image without any transformations`,
                {
                  content: new Blob([r.content], { type: "image/jpeg" }),
                  width: r.width,
                  height: r.height,
                })
              : F(new Blob([e])).then((e) => {
                  if (0 === e.naturalWidth || 0 === e.naturalHeight)
                    throw new Error("Loaded empty image");
                  var r;
                  return A(
                    (r =
                      e.naturalWidth <= t && e.naturalHeight <= t && !a
                        ? J(e)
                        : V(e, t, n)),
                    o,
                    1024 * i
                  ).then((e) => ({
                    content: e,
                    width: r.width,
                    height: r.height,
                  }));
                });
          })
          .then((e) => {
            var r = e.width <= c && e.height <= c;
            return F(e.content, 2 * c).then((n) => {
              var t = r ? J(n) : H(n, c);
              return A(t, W)
                .then(a.h)
                .then((r) => {
                  var n = t
                    .getContext("2d", { willReadFrequently: !0 })
                    .getImageData(0, 0, t.width, t.height);
                  return {
                    fullImage: e.content,
                    fullImageWidth: e.width,
                    fullImageHeight: e.height,
                    preview: r,
                    previewWidth: t.width,
                    previewHeight: t.height,
                    bg: E(n),
                  };
                });
            });
          });
      }
      function K(e) {
        return F(e).then((r) => {
          var n = r.naturalWidth,
            t = r.naturalHeight;
          if (e.size <= 1300)
            return (0, a.h)(e).then((e) => ({
              microThumb: e,
              fullThumbWidth: n,
              fullThumbHeight: t,
            }));
          var i = H(r, Q);
          return A(i, W, 1300)
            .catch(() =>
              A(i, 0.1).then(
                (e) => (
                  __LOG__(
                    4
                  )`computeMicroThumb: failed to reduce size. Ended with ${e.size}`,
                  SEND_LOGS("compute-micro-thumb"),
                  e
                )
              )
            )
            .then(a.h)
            .then((e) => ({
              microThumb: e,
              fullThumbWidth: n,
              fullThumbHeight: t,
            }));
        });
      }
      function X(e, r, n, t) {
        __LOG__(
          2
        )`videoToCanvasFixRotation: trying fix rotation of a video frame: ${r}x${n}`;
        var i = document.createElement("canvas");
        (i.width = r), (i.height = n);
        var a = i.getContext("2d", { willReadFrequently: !0 });
        switch (t) {
          case 90:
            a.translate(r, 0), a.rotate(0.5 * Math.PI);
            break;
          case 180:
            a.translate(r, n), a.rotate(Math.PI);
            break;
          case 270:
            a.translate(0, n), a.rotate(1.5 * Math.PI);
        }
        return (
          90 === t || 270 === t
            ? a.drawImage(e, 0, 0, n, r)
            : a.drawImage(e, 0, 0, r, n),
          i
        );
      }
      function Z(e, r) {
        var n = e.width,
          t = e.height;
        return 270 === r || 90 === r
          ? { width: t, height: n }
          : { width: n, height: t };
      }
      function Y() {
        var e = new s.a();
        return (M = e.promise), e;
      }
      var ee = 1;
      function re(e, r) {
        var n = ee++;
        return (
          __LOG__(2)`loadVideo #${n}: queuing`,
          $.enqueue(() =>
            M.then(() => {
              var t = self.URL.createObjectURL(e),
                i = document.createElement("video");
              return new Promise((e, r) => {
                __LOG__(2)`loadVideo #${n}: loading`,
                  (i.src = t),
                  (i.preload = "metadata"),
                  i.addEventListener("loadeddata", e),
                  (i.onerror = (e) => {
                    __LOG__(4)`loadVideo.onError: ${(0, m.f)(e)}`,
                      r(new Error("loadVideo video.onerror"));
                  });
              })
                .then(() => r(i))
                .finally(() => {
                  __LOG__(2)`loadVideo #${n}: closing`,
                    self.URL.revokeObjectURL(t),
                    i.removeAttribute("src"),
                    i.load();
                });
            })
          )
        );
      }
      function ne(e, r, n) {
        var t = document.createElement("canvas");
        (t.width = r), (t.height = n);
        var i = t.getContext("2d", { willReadFrequently: !0 });
        return (
          i.drawImage(e, 0, 0, e.width, e.height, 0, 0, r, n),
          { repainted: t, bg: E(i.getImageData(0, 0, r, n)) }
        );
      }
      function te(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q;
        return (0, c.a)(e).then((n) => {
          if ("error" === n.type)
            throw new Error("videoInfoAndPreview: parse fail: " + n.error);
          n.type;
          var t = n.info.video;
          if (!t) throw new Error("videoInfoAndPreview: not video!");
          var o = t.rotation,
            u = t.duration,
            c = Z({ width: t.width, height: t.height }, o),
            d = c.width,
            f = c.height;
          if (isNaN(u))
            throw new Error(
              "videoInfoAndPreview: video loaded, but has unknown length"
            );
          if (!isFinite(u))
            throw new Error(
              "videoInfoAndPreview: video loaded, but has no predefined length"
            );
          if (0 === d || 0 === f)
            throw new Error(
              "videoInfoAndPreview: video loaded but one of dimensions is zero"
            );
          var s = Math.ceil(u),
            l = B(d, f, r),
            m = l.width,
            _ = l.height,
            v = U(d, f),
            h = v.width,
            g = v.height;
          return re(e, (e) => {
            var r = X(e, h, g, o),
              n = ne(r, m, _),
              t = n.repainted,
              u = n.bg;
            return Promise.all([k(t, W).then(a.h), k(r, 0.8)]).then((e) => {
              var r = i()(e, 2),
                n = r[0],
                t = r[1];
              return {
                width: d,
                height: f,
                duration: s,
                preview: n,
                rotation: o,
                highResPreview: t,
                bg: u,
              };
            });
          });
        });
      }
      function ie(e, r) {
        return re(e, (e) => {
          var n = Z({ width: e.videoWidth, height: e.videoHeight }, r),
            t = U(n.width, n.height);
          return k(X(e, t.width, t.height, r), 0.8);
        });
      }
    },
    518: function (e, r, n) {
      n.d(r, "a", function () {
        return i;
      }),
        n.d(r, "c", function () {
          return a;
        }),
        n.d(r, "b", function () {
          return o;
        }),
        n.d(r, "d", function () {
          return u;
        });
      var t = n(85),
        i = (0, t.d)("ImageTooSmall", !1),
        a = (0, t.d)("MemoryPressureError", !1),
        o = (0, t.d)("LocationGiveUpError", !1),
        u = (0, t.d)("UnmountedError", !1);
    },
  },
]);
