"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [7],
  {
    249: function (t, s, i) {
      i.d(s, "a", function () {
        return o;
      });
      var e = i(142),
        r = i(110),
        h = i(68),
        o = class {
          constructor(t) {
            (this.Fn = new h.a()),
              (this.Fo = null),
              (this.Fp = null),
              (this.Fq = 0),
              (this.endWithValue = (t) => {
                this.Fq++, this.Fn.resolve(t);
              }),
              (this.Fm = t);
          }
          resetTimeoutAfter(t) {
            this.Fp = Date.now() + t;
          }
          cancelReset() {
            this.Fp = null;
          }
          reset() {
            this.Fn.resolveWasCalled() ||
              (__LOG__(2)`PromiseRetryLoop: resetting ${this.Fm.name}`,
              this.Fq++,
              this.Fr());
          }
          start() {
            this.Fn.resolveWasCalled() ||
              (__LOG__(2)`PromiseRetryLoop: starting ${this.Fm.name}`,
              0 !== this.Fq &&
                __LOG__(
                  4
                )`PromiseRetryLoop was called several times. You may have race conditions`,
              this.Fq++,
              this.Fr());
          }
          Fr() {
            var t = this.Fm,
              s = this.Fq,
              i = (0, e.b)(this.Fm.timer);
            i();
            var h = () => {
              if (!this.Fn.resolveWasCalled() && s === this.Fq) {
                var o = Date.now();
                return (
                  (this.Fo = (0, t.code)(this.endWithValue).then(() => {
                    if (!this.Fn.resolveWasCalled()) {
                      var s = t.resetDelay;
                      ((void 0 !== s && Date.now() >= o + s) ||
                        (null != this.Fp && this.Fp <= Date.now())) &&
                        (__LOG__(2)`PromiseRetryLoop: resetting ${t.name}`,
                        (i = (0, e.b)(this.Fm.timer))),
                        (this.Fp = null);
                      var a = i();
                      return (
                        __LOG__(
                          2
                        )`PromiseRetryLoop: retrying ${t.name} in ${a}ms`,
                        (0, r.a)(a).then(h)
                      );
                    }
                  })),
                  this.Fo
                );
              }
            };
            this.Fo = Promise.resolve().then(h);
          }
          promise() {
            return this.Fn.resolveWasCalled()
              ? this.Fn.promise
              : this.Fo
              ? Promise.race([
                  this.Fn.promise,
                  this.Fo.then(() => this.Fn.promise),
                ])
              : Promise.reject(
                  new Error(
                    `PromiseRetryLoop ${this.Fm.name} had promise() called before start()`
                  )
                );
          }
        };
    },
  },
]);
