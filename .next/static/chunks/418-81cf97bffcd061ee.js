(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [418],
  {
    9361: function (t, e) {
      "use strict";
      e.Z = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    5382: function (t, e, n) {
      var i;
      (i = function (t, e, n, i) {
        "use strict";
        var s = function (t, e, n) {
            return {
              endTime: e,
              insertTime: n,
              type: "exponentialRampToValue",
              value: t,
            };
          },
          r = function (t, e, n) {
            return {
              endTime: e,
              insertTime: n,
              type: "linearRampToValue",
              value: t,
            };
          },
          a = function (t, e) {
            return { startTime: e, type: "setValue", value: t };
          },
          o = function (t, e, n) {
            return {
              duration: n,
              startTime: e,
              type: "setValueCurve",
              values: t,
            };
          },
          l = function (t, e, n) {
            var i = n.startTime,
              s = n.target;
            return s + (e - s) * Math.exp((i - t) / n.timeConstant);
          },
          u = function (t) {
            return "exponentialRampToValue" === t.type;
          },
          h = function (t) {
            return "linearRampToValue" === t.type;
          },
          c = function (t) {
            return u(t) || h(t);
          },
          d = function (t) {
            return "setValue" === t.type;
          },
          p = function (t) {
            return "setValueCurve" === t.type;
          },
          f = function t(e, n, i, s) {
            var r = e[n];
            return void 0 === r
              ? s
              : c(r) || d(r)
              ? r.value
              : p(r)
              ? r.values[r.values.length - 1]
              : l(i, t(e, n - 1, r.startTime, s), r);
          },
          m = function (t, e, n, i, s) {
            return void 0 === n
              ? [i.insertTime, s]
              : c(n)
              ? [n.endTime, n.value]
              : d(n)
              ? [n.startTime, n.value]
              : p(n)
              ? [n.startTime + n.duration, n.values[n.values.length - 1]]
              : [n.startTime, f(t, e - 1, n.startTime, s)];
          },
          g = function (t) {
            return "cancelAndHold" === t.type;
          },
          v = function (t) {
            return "cancelScheduledValues" === t.type;
          },
          y = function (t) {
            return g(t) || v(t)
              ? t.cancelTime
              : u(t) || h(t)
              ? t.endTime
              : t.startTime;
          },
          w = function (t, e, n, i) {
            var s = i.endTime,
              r = i.value;
            return n === r
              ? r
              : (0 < n && 0 < r) || (n < 0 && r < 0)
              ? n * Math.pow(r / n, (t - e) / (s - e))
              : 0;
          },
          x = function (t, e, n, i) {
            var s;
            return n + ((t - e) / (i.endTime - e)) * (i.value - n);
          },
          T = function (t, e) {
            var n = Math.floor(e),
              i = Math.ceil(e);
            return n === i ? t[n] : (1 - (e - n)) * t[n] + (1 - (i - e)) * t[i];
          },
          b = function (t, e) {
            var n = e.duration,
              i = e.startTime,
              s = e.values,
              r = ((t - i) / n) * (s.length - 1);
            return T(s, r);
          },
          C = function (t) {
            return "setTarget" === t.type;
          },
          A = (function (t) {
            function T(t) {
              n(this, T),
                (this._automationEvents = []),
                (this._currenTime = 0),
                (this._defaultValue = t);
            }
            return (
              i(T, [
                {
                  key: t,
                  value: function () {
                    return this._automationEvents[Symbol.iterator]();
                  },
                },
                {
                  key: "add",
                  value: function (t) {
                    var e = y(t);
                    if (g(t) || v(t)) {
                      var n = this._automationEvents.findIndex(function (n) {
                          return v(t) && p(n)
                            ? n.startTime + n.duration >= e
                            : y(n) >= e;
                        }),
                        i = this._automationEvents[n];
                      if (
                        (-1 !== n &&
                          (this._automationEvents =
                            this._automationEvents.slice(0, n)),
                        g(t))
                      ) {
                        var l =
                          this._automationEvents[
                            this._automationEvents.length - 1
                          ];
                        if (void 0 !== i && c(i)) {
                          if (void 0 !== l && C(l))
                            throw Error("The internal list is malformed.");
                          var d =
                              void 0 === l
                                ? i.insertTime
                                : p(l)
                                ? l.startTime + l.duration
                                : y(l),
                            f =
                              void 0 === l
                                ? this._defaultValue
                                : p(l)
                                ? l.values[l.values.length - 1]
                                : l.value,
                            m = u(i) ? w(e, d, f, i) : x(e, d, f, i),
                            T = u(i)
                              ? s(m, e, this._currenTime)
                              : r(m, e, this._currenTime);
                          this._automationEvents.push(T);
                        }
                        if (
                          (void 0 !== l &&
                            C(l) &&
                            this._automationEvents.push(a(this.getValue(e), e)),
                          void 0 !== l && p(l) && l.startTime + l.duration > e)
                        ) {
                          var b = e - l.startTime,
                            A = (l.values.length - 1) / l.duration,
                            S = Math.max(2, 1 + Math.ceil(b * A)),
                            k = (b / (S - 1)) * A,
                            O = l.values.slice(0, S);
                          if (k < 1)
                            for (var M = 1; M < S; M += 1) {
                              var E = (k * M) % 1;
                              O[M] =
                                l.values[M - 1] * (1 - E) + l.values[M] * E;
                            }
                          this._automationEvents[
                            this._automationEvents.length - 1
                          ] = o(O, l.startTime, b);
                        }
                      }
                    } else {
                      var I = this._automationEvents.findIndex(function (t) {
                          return y(t) > e;
                        }),
                        D =
                          -1 === I
                            ? this._automationEvents[
                                this._automationEvents.length - 1
                              ]
                            : this._automationEvents[I - 1];
                      if (void 0 !== D && p(D) && y(D) + D.duration > e)
                        return !1;
                      var R = u(t)
                        ? s(t.value, t.endTime, this._currenTime)
                        : h(t)
                        ? r(t.value, e, this._currenTime)
                        : t;
                      if (-1 === I) this._automationEvents.push(R);
                      else {
                        if (
                          p(t) &&
                          e + t.duration > y(this._automationEvents[I])
                        )
                          return !1;
                        this._automationEvents.splice(I, 0, R);
                      }
                    }
                    return !0;
                  },
                },
                {
                  key: "flush",
                  value: function (t) {
                    var e = this._automationEvents.findIndex(function (e) {
                      return y(e) > t;
                    });
                    if (e > 1) {
                      var n = this._automationEvents.slice(e - 1),
                        i = n[0];
                      C(i) &&
                        n.unshift(
                          a(
                            f(
                              this._automationEvents,
                              e - 2,
                              i.startTime,
                              this._defaultValue,
                            ),
                            i.startTime,
                          ),
                        ),
                        (this._automationEvents = n);
                    }
                  },
                },
                {
                  key: "getValue",
                  value: function (t) {
                    if (0 === this._automationEvents.length)
                      return this._defaultValue;
                    var n = this._automationEvents.findIndex(function (e) {
                        return y(e) > t;
                      }),
                      i = this._automationEvents[n],
                      s = (-1 === n ? this._automationEvents.length : n) - 1,
                      r = this._automationEvents[s];
                    if (
                      void 0 !== r &&
                      C(r) &&
                      (void 0 === i || !c(i) || i.insertTime > t)
                    )
                      return l(
                        t,
                        f(
                          this._automationEvents,
                          s - 1,
                          r.startTime,
                          this._defaultValue,
                        ),
                        r,
                      );
                    if (void 0 !== r && d(r) && (void 0 === i || !c(i)))
                      return r.value;
                    if (
                      void 0 !== r &&
                      p(r) &&
                      (void 0 === i || !c(i) || r.startTime + r.duration > t)
                    )
                      return t < r.startTime + r.duration
                        ? b(t, r)
                        : r.values[r.values.length - 1];
                    if (void 0 !== r && c(r) && (void 0 === i || !c(i)))
                      return r.value;
                    if (void 0 !== i && u(i)) {
                      var a,
                        o = m(
                          this._automationEvents,
                          s,
                          r,
                          i,
                          this._defaultValue,
                        ),
                        g = e(o, 2);
                      return w(t, g[0], g[1], i);
                    }
                    if (void 0 !== i && h(i)) {
                      var v,
                        T = m(
                          this._automationEvents,
                          s,
                          r,
                          i,
                          this._defaultValue,
                        ),
                        A = e(T, 2);
                      return x(t, A[0], A[1], i);
                    }
                    return this._defaultValue;
                  },
                },
              ]),
              T
            );
          })(Symbol.iterator),
          S = function (t) {
            return { cancelTime: t, type: "cancelAndHold" };
          },
          k = function (t) {
            return { cancelTime: t, type: "cancelScheduledValues" };
          },
          O = function (t, e) {
            return { endTime: e, type: "exponentialRampToValue", value: t };
          },
          M = function (t, e) {
            return { endTime: e, type: "linearRampToValue", value: t };
          },
          E = function (t, e, n) {
            return {
              startTime: e,
              target: t,
              timeConstant: n,
              type: "setTarget",
            };
          };
        (t.AutomationEventList = A),
          (t.createCancelAndHoldAutomationEvent = S),
          (t.createCancelScheduledValuesAutomationEvent = k),
          (t.createExponentialRampToValueAutomationEvent = O),
          (t.createLinearRampToValueAutomationEvent = M),
          (t.createSetTargetAutomationEvent = E),
          (t.createSetValueAutomationEvent = a),
          (t.createSetValueCurveAutomationEvent = o);
      })(e, n(7424), n(6690), n(9728));
    },
    8045: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(9361).Z,
        s = n(4941).Z,
        r = n(3929).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          var e,
            n,
            o = t.src,
            l = t.sizes,
            m = t.unoptimized,
            g = void 0 !== m && m,
            x = t.priority,
            S = void 0 !== x && x,
            O = t.loading,
            M = t.lazyRoot,
            E = t.lazyBoundary,
            I = t.className,
            D = t.quality,
            R = t.width,
            N = t.height,
            V = t.style,
            P = t.objectFit,
            q = t.objectPosition,
            F = t.onLoadingComplete,
            j = t.placeholder,
            L = void 0 === j ? "empty" : j,
            W = t.blurDataURL,
            B = u(t, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "style",
              "objectFit",
              "objectPosition",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
            ]),
            z = h.useContext(f.ImageConfigContext),
            U = h.useMemo(
              function () {
                var t = v || z || d.imageConfigDefault,
                  e = r(t.deviceSizes)
                    .concat(r(t.imageSizes))
                    .sort(function (t, e) {
                      return t - e;
                    }),
                  n = t.deviceSizes.sort(function (t, e) {
                    return t - e;
                  });
                return a({}, t, { allSizes: e, deviceSizes: n });
              },
              [z],
            ),
            G = l ? "responsive" : "intrinsic";
          "layout" in B && (B.layout && (G = B.layout), delete B.layout);
          var Z = A;
          if ("loader" in B) {
            if (B.loader) {
              var X = B.loader;
              Z = function (t) {
                t.config;
                var e = u(t, ["config"]);
                return X(e);
              };
            }
            delete B.loader;
          }
          var Y = "";
          if (
            (function (t) {
              var e;
              return "object" == typeof t && (T(t) || void 0 !== t.src);
            })(o)
          ) {
            var H = T(o) ? o.default : o;
            if (!H.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(H),
                ),
              );
            if (
              ((W = W || H.blurDataURL),
              (Y = H.src),
              (!G || "fill" !== G) &&
                ((N = N || H.height),
                (R = R || H.width),
                !H.height || !H.width))
            )
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(H),
                ),
              );
          }
          o = "string" == typeof o ? o : Y;
          var $ = !S && ("lazy" === O || void 0 === O);
          (o.startsWith("data:") || o.startsWith("blob:")) &&
            ((g = !0), ($ = !1)),
            y.has(o) && ($ = !1),
            U.unoptimized && (g = !0);
          var Q = s(h.useState(!1), 2),
            J = Q[0],
            K = Q[1],
            tt = s(
              p.useIntersection({
                rootRef: void 0 === M ? null : M,
                rootMargin: E || "200px",
                disabled: !$,
              }),
              3,
            ),
            te = tt[0],
            tn = tt[1],
            ti = tt[2],
            ts = !$ || tn,
            tr = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            ta = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            to = !1,
            tl = C(R),
            tu = C(N),
            th = C(D),
            tc = Object.assign({}, V, {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: P,
              objectPosition: q,
            }),
            td =
              "blur" !== L || J
                ? {}
                : {
                    backgroundSize: P || "cover",
                    backgroundPosition: q || "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("'.concat(W, '")'),
                  };
          if ("fill" === G)
            (tr.display = "block"),
              (tr.position = "absolute"),
              (tr.top = 0),
              (tr.left = 0),
              (tr.bottom = 0),
              (tr.right = 0);
          else if (void 0 !== tl && void 0 !== tu) {
            var tp = tu / tl,
              tf = isNaN(tp) ? "100%" : "".concat(100 * tp, "%");
            "responsive" === G
              ? ((tr.display = "block"),
                (tr.position = "relative"),
                (to = !0),
                (ta.paddingTop = tf))
              : "intrinsic" === G
              ? ((tr.display = "inline-block"),
                (tr.position = "relative"),
                (tr.maxWidth = "100%"),
                (to = !0),
                (ta.maxWidth = "100%"),
                (e =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                    .concat(tl, "%27%20height=%27")
                    .concat(tu, "%27/%3e")))
              : "fixed" === G &&
                ((tr.display = "inline-block"),
                (tr.position = "relative"),
                (tr.width = tl),
                (tr.height = tu));
          }
          var tm = { src: w, srcSet: void 0, sizes: void 0 };
          ts &&
            (tm = b({
              config: U,
              src: o,
              unoptimized: g,
              layout: G,
              width: tl,
              quality: th,
              sizes: l,
              loader: Z,
            }));
          var t_ = o,
            tg = "imagesizes";
          tg = "imageSizes";
          var tv =
              (i((n = {}), "imageSrcSet", tm.srcSet),
              i(n, tg, tm.sizes),
              i(n, "crossOrigin", B.crossOrigin),
              n),
            ty = h.default.useLayoutEffect,
            tw = h.useRef(F),
            tx = h.useRef(o);
          h.useEffect(
            function () {
              tw.current = F;
            },
            [F],
          ),
            ty(
              function () {
                tx.current !== o && (ti(), (tx.current = o));
              },
              [ti, o],
            );
          var tT = a(
            {
              isLazy: $,
              imgAttributes: tm,
              heightInt: tu,
              widthInt: tl,
              qualityInt: th,
              layout: G,
              className: I,
              imgStyle: tc,
              blurStyle: td,
              loading: O,
              config: U,
              unoptimized: g,
              placeholder: L,
              loader: Z,
              srcString: t_,
              onLoadingCompleteRef: tw,
              setBlurComplete: K,
              setIntersection: te,
              isVisible: ts,
              noscriptSizes: l,
            },
            B,
          );
          return h.default.createElement(
            h.default.Fragment,
            null,
            h.default.createElement(
              "span",
              { style: tr },
              to
                ? h.default.createElement(
                    "span",
                    { style: ta },
                    e
                      ? h.default.createElement("img", {
                          style: {
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          },
                          alt: "",
                          "aria-hidden": !0,
                          src: e,
                        })
                      : null,
                  )
                : null,
              h.default.createElement(k, Object.assign({}, tT)),
            ),
            S
              ? h.default.createElement(
                  c.default,
                  null,
                  h.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + tm.src + tm.srcSet + tm.sizes,
                        rel: "preload",
                        as: "image",
                        href: tm.srcSet ? void 0 : tm.src,
                      },
                      tv,
                    ),
                  ),
                )
              : null,
          );
        });
      var a = n(6495).Z,
        o = n(2648).Z,
        l = n(1598).Z,
        u = n(7273).Z,
        h = l(n(7294)),
        c = o(n(5443)),
        d = n(9309),
        p = n(7190),
        f = n(9977);
      n(3794);
      var m = n(2392);
      function g(t) {
        return "/" === t[0] ? t.slice(1) : t;
      }
      var v = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/azizgharbi.github.io/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
        y = new Set(),
        w =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        x = new Map([
          [
            "default",
            function (t) {
              var e = t.config,
                n = t.src,
                i = t.width,
                s = t.quality;
              return n.endsWith(".svg") && !e.dangerouslyAllowSVG
                ? n
                : ""
                    .concat(m.normalizePathTrailingSlash(e.path), "?url=")
                    .concat(encodeURIComponent(n), "&w=")
                    .concat(i, "&q=")
                    .concat(s || 75);
            },
          ],
          [
            "imgix",
            function (t) {
              var e = t.config,
                n = t.src,
                i = t.width,
                s = t.quality,
                r = new URL("".concat(e.path).concat(g(n))),
                a = r.searchParams;
              return (
                a.set("auto", a.getAll("auto").join(",") || "format"),
                a.set("fit", a.get("fit") || "max"),
                a.set("w", a.get("w") || i.toString()),
                s && a.set("q", s.toString()),
                r.href
              );
            },
          ],
          [
            "cloudinary",
            function (t) {
              var e,
                n = t.config,
                i = t.src,
                s = t.width,
                r =
                  [
                    "f_auto",
                    "c_limit",
                    "w_" + s,
                    "q_" + (t.quality || "auto"),
                  ].join(",") + "/";
              return "".concat(n.path).concat(r).concat(g(i));
            },
          ],
          [
            "akamai",
            function (t) {
              var e = t.config,
                n = t.src,
                i = t.width;
              return "".concat(e.path).concat(g(n), "?imwidth=").concat(i);
            },
          ],
          [
            "custom",
            function (t) {
              var e = t.src;
              throw Error(
                'Image with src "'.concat(e, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader",
              );
            },
          ],
        ]);
      function T(t) {
        return void 0 !== t.default;
      }
      function b(t) {
        var e = t.config,
          n = t.src,
          i = t.unoptimized,
          s = t.layout,
          a = t.width,
          o = t.quality,
          l = t.sizes,
          u = t.loader;
        if (i) return { src: n, srcSet: void 0, sizes: void 0 };
        var h = (function (t, e, n, i) {
            var s = t.deviceSizes,
              a = t.allSizes;
            if (i && ("fill" === n || "responsive" === n)) {
              for (var o = /(^|\s)(1?\d?\d)vw/g, l = []; (u = o.exec(i)); u)
                l.push(parseInt(u[2]));
              if (l.length) {
                var u,
                  h,
                  c = 0.01 * (h = Math).min.apply(h, r(l));
                return {
                  widths: a.filter(function (t) {
                    return t >= s[0] * c;
                  }),
                  kind: "w",
                };
              }
              return { widths: a, kind: "w" };
            }
            return "number" != typeof e || "fill" === n || "responsive" === n
              ? { widths: s, kind: "w" }
              : {
                  widths: r(
                    new Set(
                      [e, 2 * e].map(function (t) {
                        return (
                          a.find(function (e) {
                            return e >= t;
                          }) || a[a.length - 1]
                        );
                      }),
                    ),
                  ),
                  kind: "x",
                };
          })(e, a, s, l),
          c = h.widths,
          d = h.kind,
          p = c.length - 1;
        return {
          sizes: l || "w" !== d ? l : "100vw",
          srcSet: c
            .map(function (t, i) {
              return ""
                .concat(u({ config: e, src: n, quality: o, width: t }), " ")
                .concat("w" === d ? t : i + 1)
                .concat(d);
            })
            .join(", "),
          src: u({ config: e, src: n, quality: o, width: c[p] }),
        };
      }
      function C(t) {
        return "number" == typeof t
          ? t
          : "string" == typeof t
          ? parseInt(t, 10)
          : void 0;
      }
      function A(t) {
        var e,
          n = (null == (e = t.config) ? void 0 : e.loader) || "default",
          i = x.get(n);
        if (i) return i(t);
        throw Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(", "), ". Received: ")
            .concat(n),
        );
      }
      function S(t, e, n, i, s, r) {
        t &&
          t.src !== w &&
          t["data-loaded-src"] !== e &&
          ((t["data-loaded-src"] = e),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (
                t.parentNode &&
                (y.add(e),
                "blur" === i && r(!0),
                null == s ? void 0 : s.current)
              ) {
                var n = t.naturalWidth,
                  a = t.naturalHeight;
                s.current({ naturalWidth: n, naturalHeight: a });
              }
            }));
      }
      var k = function (t) {
        var e = t.imgAttributes,
          n = (t.heightInt, t.widthInt),
          i = t.qualityInt,
          s = t.layout,
          r = t.className,
          o = t.imgStyle,
          l = t.blurStyle,
          c = t.isLazy,
          d = t.placeholder,
          p = t.loading,
          f = t.srcString,
          m = t.config,
          g = t.unoptimized,
          v = t.loader,
          y = t.onLoadingCompleteRef,
          w = t.setBlurComplete,
          x = t.setIntersection,
          T = t.onLoad,
          C = t.onError,
          A = (t.isVisible, t.noscriptSizes),
          k = u(t, [
            "imgAttributes",
            "heightInt",
            "widthInt",
            "qualityInt",
            "layout",
            "className",
            "imgStyle",
            "blurStyle",
            "isLazy",
            "placeholder",
            "loading",
            "srcString",
            "config",
            "unoptimized",
            "loader",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setIntersection",
            "onLoad",
            "onError",
            "isVisible",
            "noscriptSizes",
          ]);
        return (
          (p = c ? "lazy" : p),
          h.default.createElement(
            h.default.Fragment,
            null,
            h.default.createElement(
              "img",
              Object.assign({}, k, e, {
                decoding: "async",
                "data-nimg": s,
                className: r,
                style: a({}, o, l),
                ref: h.useCallback(
                  function (t) {
                    x(t),
                      (null == t ? void 0 : t.complete) && S(t, f, s, d, y, w);
                  },
                  [x, f, s, d, y, w],
                ),
                onLoad: function (t) {
                  S(t.currentTarget, f, s, d, y, w), T && T(t);
                },
                onError: function (t) {
                  "blur" === d && w(!0), C && C(t);
                },
              }),
            ),
            (c || "blur" === d) &&
              h.default.createElement(
                "noscript",
                null,
                h.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    k,
                    b({
                      config: m,
                      src: f,
                      unoptimized: g,
                      layout: s,
                      width: n,
                      quality: i,
                      sizes: A,
                      loader: v,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": s,
                      style: o,
                      className: r,
                      loading: p,
                    },
                  ),
                ),
              ),
          )
        );
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7190: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(4941).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e,
            n = t.rootRef,
            u = t.rootMargin,
            h = t.disabled || !a,
            c = i(s.useState(!1), 2),
            d = c[0],
            p = c[1],
            f = i(s.useState(null), 2),
            m = f[0],
            g = f[1];
          return (
            s.useEffect(
              function () {
                if (a) {
                  if (!h && !d && m && m.tagName) {
                    var t, e, i, s, c, f, g;
                    return (
                      (e = function (t) {
                        return t && p(t);
                      }),
                      (c = (s = (function (t) {
                        var e,
                          n = {
                            root: t.root || null,
                            margin: t.rootMargin || "",
                          },
                          i = l.find(function (t) {
                            return t.root === n.root && t.margin === n.margin;
                          });
                        if (i && (e = o.get(i))) return e;
                        var s = new Map();
                        return (
                          (e = {
                            id: n,
                            observer: new IntersectionObserver(function (t) {
                              t.forEach(function (t) {
                                var e = s.get(t.target),
                                  n =
                                    t.isIntersecting || t.intersectionRatio > 0;
                                e && n && e(n);
                              });
                            }, t),
                            elements: s,
                          }),
                          l.push(n),
                          o.set(n, e),
                          e
                        );
                      })(
                        (i = {
                          root: null == n ? void 0 : n.current,
                          rootMargin: u,
                        }),
                      )).id),
                      (f = s.observer),
                      (g = s.elements).set(m, e),
                      f.observe(m),
                      function () {
                        if ((g.delete(m), f.unobserve(m), 0 === g.size)) {
                          f.disconnect(), o.delete(c);
                          var t = l.findIndex(function (t) {
                            return t.root === c.root && t.margin === c.margin;
                          });
                          t > -1 && l.splice(t, 1);
                        }
                      }
                    );
                  }
                } else if (!d) {
                  var v = r.requestIdleCallback(function () {
                    return p(!0);
                  });
                  return function () {
                    return r.cancelIdleCallback(v);
                  };
                }
              },
              [m, h, u, n, d],
            ),
            [
              g,
              d,
              s.useCallback(function () {
                p(!1);
              }, []),
            ]
          );
        });
      var s = n(7294),
        r = n(9311),
        a = "function" == typeof IntersectionObserver,
        o = new Map(),
        l = [];
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5675: function (t, e, n) {
      t.exports = n(8045);
    },
    6955: function (t, e, n) {
      "use strict";
      n.d(e, {
        WV: function () {
          return d9;
        },
        zO: function () {
          return pm;
        },
      });
      let i = "14.7.77";
      var s,
        r,
        a,
        o,
        l,
        u,
        h,
        c,
        d,
        p,
        f,
        m,
        g,
        v,
        y,
        w,
        x,
        T,
        b,
        C,
        A,
        S,
        k,
        O,
        M,
        E,
        I,
        D,
        R,
        N,
        V,
        P,
        q,
        F,
        j,
        L,
        W,
        B,
        z,
        U,
        G,
        Z,
        X,
        Y,
        H,
        $,
        Q,
        J,
        K,
        tt,
        te,
        tn,
        ti,
        ts,
        tr,
        ta,
        to,
        tl,
        tu,
        th,
        tc,
        td,
        tp,
        tf,
        tm,
        t_,
        tg,
        tv,
        ty,
        tw,
        tx,
        tT,
        tb,
        tC,
        tA,
        tS,
        tk,
        tO,
        tM,
        tE,
        tI,
        tD,
        tR,
        tN,
        tV,
        tP,
        tq,
        tF,
        tj,
        tL,
        tW,
        tB,
        tz,
        tU,
        tG,
        tZ,
        tX,
        tY,
        tH,
        t$,
        tQ,
        tJ,
        tK,
        t0,
        t1,
        t2,
        t3,
        t8,
        t4,
        t6,
        t5,
        t7,
        t9,
        et,
        ee,
        en,
        ei,
        es,
        er,
        ea,
        eo,
        el,
        eu,
        eh,
        ec,
        ed,
        ep,
        ef,
        em,
        e_,
        eg,
        ev,
        ey,
        ew,
        ex,
        eT,
        eb,
        eC,
        eA,
        eS,
        ek,
        eO,
        eM,
        eE,
        eI,
        eD,
        eR,
        eN,
        eV,
        eP,
        eq,
        eF,
        ej,
        eL,
        eW,
        eB,
        ez,
        eU,
        eG,
        eZ,
        eX,
        eY,
        eH,
        e$,
        eQ,
        eJ,
        eK,
        e0,
        e1,
        e2,
        e3,
        e8,
        e4,
        e6,
        e5,
        e7,
        e9,
        nt,
        ne,
        nn,
        ni,
        ns,
        nr,
        na,
        no,
        nl,
        nu,
        nh,
        nc,
        nd,
        np,
        nf,
        nm,
        n_,
        ng,
        nv,
        ny,
        nw,
        nx,
        nT,
        nb,
        nC,
        nA,
        nS,
        nk,
        nO,
        nM,
        nE,
        nI,
        nD,
        nR,
        nN,
        nV,
        nP,
        nq,
        nF,
        nj,
        nL,
        nW,
        nB,
        nz,
        nU,
        nG,
        nZ,
        nX,
        nY,
        nH,
        n$,
        nQ,
        nJ,
        nK,
        n0,
        n1,
        n2,
        n3,
        n8,
        n4,
        n6,
        n5,
        n7,
        n9,
        it,
        ie,
        ii,
        is,
        ir,
        ia,
        io,
        il,
        iu,
        ih,
        ic,
        id,
        ip,
        im,
        i_,
        ig,
        iv,
        iy,
        iw,
        ix,
        iT,
        ib,
        iC,
        iA,
        iS,
        ik,
        iO,
        iM,
        iE,
        iI,
        iD,
        iR,
        iN,
        iV,
        iP,
        iq,
        iF,
        ij,
        iL,
        iW,
        iB,
        iz,
        iU,
        iG,
        iZ,
        iX,
        iY,
        iH,
        i$,
        iQ,
        iJ,
        iK,
        i0,
        i1,
        i2,
        i3,
        i8,
        i4,
        i6,
        i5,
        i7,
        i9,
        st,
        se,
        sn,
        si,
        ss,
        sr,
        sa,
        so,
        sl,
        su,
        sh,
        sc,
        sd,
        sp,
        sf,
        sm,
        s_,
        sg,
        sv,
        sy,
        sw,
        sx,
        sT,
        sb,
        sC,
        sA,
        sS,
        sk,
        sO,
        sM,
        sE,
        sI,
        sD,
        sR,
        sN,
        sV,
        sP,
        sq,
        sF,
        sj,
        sL,
        sW,
        sB,
        sz,
        sU,
        sG,
        sZ,
        sX,
        sY,
        sH,
        s$,
        sQ,
        sJ,
        sK,
        s0,
        s1,
        s2,
        s3,
        s8,
        s4,
        s6,
        s5,
        s7,
        s9,
        rt,
        re,
        rn,
        ri,
        rs,
        rr,
        ra,
        ro,
        rl,
        ru,
        rh,
        rc,
        rd,
        rp,
        rf,
        rm,
        r_,
        rg,
        rv,
        ry,
        rw,
        rx,
        rT,
        rb,
        rC,
        rA,
        rS,
        rk,
        rO,
        rM,
        rE,
        rI,
        rD,
        rR,
        rN,
        rV,
        rP,
        rq,
        rF,
        rj,
        rL,
        rW,
        rB,
        rz,
        rU,
        rG,
        rZ,
        rX,
        rY,
        rH,
        r$,
        rQ,
        rJ,
        rK,
        r0,
        r1,
        r2,
        r3,
        r8,
        r4,
        r6,
        r5,
        r7,
        r9,
        at,
        ae,
        an,
        ai,
        as,
        ar,
        aa,
        ao,
        al,
        au,
        ah,
        ac,
        ad,
        ap,
        af,
        am,
        a_,
        ag,
        av,
        ay,
        aw,
        ax,
        aT,
        ab,
        aC,
        aA,
        aS,
        ak,
        aO,
        aM,
        aE,
        aI,
        aD,
        aR,
        aN,
        aV,
        aP,
        aq,
        aF,
        aj,
        aL,
        aW,
        aB,
        az,
        aU,
        aG,
        aZ,
        aX,
        aY,
        aH,
        a$,
        aQ,
        aJ,
        aK,
        a0,
        a1,
        a2,
        a3,
        a8,
        a4,
        a6,
        a5,
        a7,
        a9,
        ot,
        oe,
        on,
        oi = n(5382);
      let os = () => new DOMException("", "AbortError"),
        or = new WeakSet(),
        oa = new WeakMap(),
        oo = new WeakMap(),
        ol = new WeakMap(),
        ou = new WeakMap(),
        oh = new WeakMap(),
        oc = new WeakMap(),
        od = new WeakMap(),
        op = new WeakMap(),
        of = new WeakMap(),
        om = { construct: () => om },
        o_ = (t) => {
          try {
            let e = new Proxy(t, om);
            new e();
          } catch {
            return !1;
          }
          return !0;
        },
        og =
          /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        ov = (t, e) => {
          let n = [],
            i = t.replace(/^[\s]+/, ""),
            s = i.match(og);
          for (; null !== s; ) {
            let r = s[1].slice(1, -1),
              a = s[0]
                .replace(/([\s]+)?;?$/, "")
                .replace(r, new URL(r, e).toString());
            n.push(a),
              (s = (i = i.slice(s[0].length).replace(/^[\s]+/, "")).match(og));
          }
          return [n.join(";"), i];
        },
        oy = (t) => {
          if (void 0 !== t && !Array.isArray(t))
            throw TypeError(
              "The parameterDescriptors property of given value for processorCtor is not an array.",
            );
        },
        ow = (t) => {
          if (!o_(t))
            throw TypeError(
              "The given value for processorCtor should be a constructor.",
            );
          if (null === t.prototype || "object" != typeof t.prototype)
            throw TypeError(
              "The given value for processorCtor should have a prototype.",
            );
        },
        ox = (t, e) => {
          let n = t.get(e);
          if (void 0 === n)
            throw Error("A value with the given key could not be found.");
          return n;
        },
        oT = (t, e) => {
          let n = Array.from(t).filter(e);
          if (n.length > 1) throw Error("More than one element was found.");
          if (0 === n.length) throw Error("No element was found.");
          let [i] = n;
          return t.delete(i), i;
        },
        ob = (t, e, n, i) => {
          let s = ox(t, e),
            r = oT(s, (t) => t[0] === n && t[1] === i);
          return 0 === s.size && t.delete(e), r;
        },
        oC = (t) => ox(oc, t),
        oA = (t) => {
          if (or.has(t)) throw Error("The AudioNode is already stored.");
          or.add(t), oC(t).forEach((t) => t(!0));
        },
        oS = (t) => "port" in t,
        ok = (t) => {
          if (!or.has(t)) throw Error("The AudioNode is not stored.");
          or.delete(t), oC(t).forEach((t) => t(!1));
        },
        oO = (t, e) => {
          !oS(t) && e.every((t) => 0 === t.size) && ok(t);
        },
        oM = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          fftSize: 2048,
          maxDecibels: -30,
          minDecibels: -100,
          smoothingTimeConstant: 0.8,
        },
        oE = (t, e) => t.context === e,
        oI = (t) => {
          try {
            t.copyToChannel(new Float32Array(1), 0, -1);
          } catch {
            return !1;
          }
          return !0;
        },
        oD = () => new DOMException("", "IndexSizeError"),
        oR = (t) => {
          var e;
          t.getChannelData =
            ((e = t.getChannelData),
            (n) => {
              try {
                return e.call(t, n);
              } catch (i) {
                if (12 === i.code) throw oD();
                throw i;
              }
            });
        },
        oN = { numberOfChannels: 1 },
        oV = (t) => or.has(t),
        oP = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: !1,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1,
        },
        oq = (t) => "playbackRate" in t,
        oF = (t) => "frequency" in t && "gain" in t,
        oj = (t) => "offset" in t,
        oL = (t) => !("frequency" in t) && "gain" in t,
        oW = (t) => "detune" in t && "frequency" in t,
        oB = (t) => "pan" in t,
        oz = (t) => ox(oa, t),
        oU = (t) => ox(ol, t),
        oG = (t, e) => {
          let { activeInputs: n } = oz(t);
          n.forEach((n) =>
            n.forEach(([n]) => {
              e.includes(t) || oG(n, [...e, t]);
            }),
          );
          let i = oq(t)
            ? [t.playbackRate]
            : oS(t)
            ? Array.from(t.parameters.values())
            : oF(t)
            ? [t.Q, t.detune, t.frequency, t.gain]
            : oj(t)
            ? [t.offset]
            : oL(t)
            ? [t.gain]
            : oW(t)
            ? [t.detune, t.frequency]
            : oB(t)
            ? [t.pan]
            : [];
          for (let s of i) {
            let r = oU(s);
            void 0 !== r && r.activeInputs.forEach(([t]) => oG(t, e));
          }
          oV(t) && ok(t);
        },
        oZ = (t) => {
          oG(t.destination, []);
        },
        oX = (t) =>
          void 0 === t ||
          "number" == typeof t ||
          ("string" == typeof t &&
            ("balanced" === t || "interactive" === t || "playback" === t)),
        oY = (t) => {
          let e = new WeakMap(),
            n = async (n, i) => {
              let s = i.destination;
              return e.set(i, s), await t(n, i, s), s;
            };
          return {
            render(t, i) {
              let s = e.get(i);
              return void 0 !== s ? Promise.resolve(s) : n(t, i);
            },
          };
        },
        oH = (t) => "context" in t,
        o$ = (t) => oH(t[0]),
        oQ = (t, e, n, i) => {
          for (let s of t)
            if (n(s)) {
              if (i) return !1;
              throw Error("The set contains at least one similar element.");
            }
          return t.add(e), !0;
        },
        oJ = (t, e, [n, i], s) => {
          oQ(t, [e, n, i], (t) => t[0] === e && t[1] === n, s);
        },
        oK = (t, [e, n, i], s) => {
          let r = t.get(e);
          void 0 === r
            ? t.set(e, new Set([[n, i]]))
            : oQ(r, [n, i], (t) => t[0] === n, s);
        },
        o0 = (t) => "inputs" in t,
        o1 = (t, e, n, i) => {
          if (o0(e)) {
            let s = e.inputs[i];
            return t.connect(s, n, 0), [s, n, 0];
          }
          return t.connect(e, n, i), [e, n, i];
        },
        o2 = (t, e, n) => {
          for (let i of t) if (i[0] === e && i[1] === n) return t.delete(i), i;
          return null;
        },
        o3 = (t, e, n) => oT(t, (t) => t[0] === e && t[1] === n),
        o8 = (t, e) => {
          let n = oC(t);
          if (!n.delete(e)) throw Error("Missing the expected event listener.");
        },
        o4 = (t, e, n) => {
          let i = ox(t, e),
            s = oT(i, (t) => t[0] === n);
          return 0 === i.size && t.delete(e), s;
        },
        o6 = (t, e, n, i) => {
          o0(e) ? t.disconnect(e.inputs[i], n, 0) : t.disconnect(e, n, i);
        },
        o5 = (t) => ox(oo, t),
        o7 = (t) => ox(ou, t),
        o9 = (t) => od.has(t),
        lt = (t) => !or.has(t),
        le = (t, e) =>
          new Promise((n) => {
            if (null !== e) n(!0);
            else {
              let i = t.createScriptProcessor(256, 1, 1),
                s = t.createGain(),
                r = t.createBuffer(1, 2, 44100),
                a = r.getChannelData(0);
              (a[0] = 1), (a[1] = 1);
              let o = t.createBufferSource();
              (o.buffer = r),
                (o.loop = !0),
                o.connect(i).connect(t.destination),
                o.connect(s),
                o.disconnect(s),
                (i.onaudioprocess = (e) => {
                  let s = e.inputBuffer.getChannelData(0);
                  Array.prototype.some.call(s, (t) => 1 === t) ? n(!0) : n(!1),
                    o.stop(),
                    (i.onaudioprocess = null),
                    o.disconnect(i),
                    i.disconnect(t.destination);
                }),
                o.start();
            }
          }),
        ln = (t, e) => {
          let n = new Map();
          for (let i of t)
            for (let s of i) {
              let r = n.get(s);
              n.set(s, void 0 === r ? 1 : r + 1);
            }
          n.forEach((t, n) => e(n, t));
        },
        li = (t) => "context" in t,
        ls = (t) => {
          var e, n;
          let i = new Map();
          (t.connect =
            ((e = t.connect.bind(t)),
            (t, n = 0, s = 0) => {
              let r = li(t) ? e(t, n, s) : e(t, n),
                a = i.get(t);
              return (
                void 0 === a
                  ? i.set(t, [{ input: s, output: n }])
                  : a.every((t) => t.input !== s || t.output !== n) &&
                    a.push({ input: s, output: n }),
                r
              );
            })),
            (t.disconnect =
              ((n = t.disconnect),
              (e, s, r) => {
                if ((n.apply(t), void 0 === e)) i.clear();
                else if ("number" == typeof e)
                  for (let [a, o] of i) {
                    let l = o.filter((t) => t.output !== e);
                    0 === l.length ? i.delete(a) : i.set(a, l);
                  }
                else if (i.has(e)) {
                  if (void 0 === s) i.delete(e);
                  else {
                    let u = i.get(e);
                    if (void 0 !== u) {
                      let h = u.filter(
                        (t) =>
                          t.output !== s && (t.input !== r || void 0 === r),
                      );
                      0 === h.length ? i.delete(e) : i.set(e, h);
                    }
                  }
                }
                for (let [c, d] of i)
                  d.forEach((e) => {
                    li(c)
                      ? t.connect(c, e.output, e.input)
                      : t.connect(c, e.output);
                  });
              }));
        },
        lr = (t, e, n, i) => {
          let { activeInputs: s, passiveInputs: r } = oU(e),
            { outputs: a } = oz(t),
            o = oC(t),
            l = (a) => {
              let o = o5(t),
                l = o7(e);
              if (a) {
                let u = o4(r, t, n);
                oJ(s, t, u, !1), i || o9(t) || o.connect(l, n);
              } else {
                let h = o3(s, t, n);
                oK(r, h, !1), i || o9(t) || o.disconnect(l, n);
              }
            };
          return (
            !!oQ(a, [e, n], (t) => t[0] === e && t[1] === n, !0) &&
            (o.add(l), oV(t) ? oJ(s, t, [n, l], !0) : oK(r, [t, n, l], !0), !0)
          );
        },
        la = (t, e, n, i) => {
          let { activeInputs: s, passiveInputs: r } = oz(e),
            a = o2(s[i], t, n);
          if (null === a) {
            let o = ob(r, t, n, i);
            return [o[2], !1];
          }
          return [a[2], !0];
        },
        lo = (t, e, n) => {
          let { activeInputs: i, passiveInputs: s } = oU(e),
            r = o2(i, t, n);
          if (null === r) {
            let a = o4(s, t, n);
            return [a[1], !1];
          }
          return [r[2], !0];
        },
        ll = (t, e, n, i, s) => {
          let [r, a] = la(t, n, i, s);
          if (
            (null === r ||
              (o8(t, r), !a || e || o9(t) || o6(o5(t), o5(n), i, s)),
            oV(n))
          ) {
            let { activeInputs: o } = oz(n);
            oO(n, o);
          }
        },
        lu = (t, e, n, i) => {
          let [s, r] = lo(t, n, i);
          null === s ||
            (o8(t, s), !r || e || o9(t) || o5(t).disconnect(o7(n), i));
        },
        lh = (t, e) => {
          let n = oz(t),
            i = [];
          for (let s of n.outputs)
            o$(s) ? ll(t, e, ...s) : lu(t, e, ...s), i.push(s[0]);
          return n.outputs.clear(), i;
        },
        lc = (t, e, n) => {
          let i = oz(t),
            s = [];
          for (let r of i.outputs)
            r[1] === n &&
              (o$(r) ? ll(t, e, ...r) : lu(t, e, ...r),
              s.push(r[0]),
              i.outputs.delete(r));
          return s;
        },
        ld = (t, e, n, i, s) => {
          let r = oz(t);
          return Array.from(r.outputs)
            .filter(
              (t) =>
                t[0] === n &&
                (void 0 === i || t[1] === i) &&
                (void 0 === s || t[2] === s),
            )
            .map(
              (n) => (
                o$(n) ? ll(t, e, ...n) : lu(t, e, ...n),
                r.outputs.delete(n),
                n[0]
              ),
            );
        },
        lp = (t) => ({
          replay(e) {
            for (let n of t)
              if ("exponentialRampToValue" === n.type) {
                let { endTime: i, value: s } = n;
                e.exponentialRampToValueAtTime(s, i);
              } else if ("linearRampToValue" === n.type) {
                let { endTime: r, value: a } = n;
                e.linearRampToValueAtTime(a, r);
              } else if ("setTarget" === n.type) {
                let { startTime: o, target: l, timeConstant: u } = n;
                e.setTargetAtTime(l, o, u);
              } else if ("setValue" === n.type) {
                let { startTime: h, value: c } = n;
                e.setValueAtTime(c, h);
              } else if ("setValueCurve" === n.type) {
                let { duration: d, startTime: p, values: f } = n;
                e.setValueCurveAtTime(f, p, d);
              } else throw Error("Can't apply an unknown automation.");
          },
        });
      class lf {
        constructor(t) {
          this._map = new Map(t);
        }
        get size() {
          return this._map.size;
        }
        entries() {
          return this._map.entries();
        }
        forEach(t, e = null) {
          return this._map.forEach((n, i) => t.call(e, n, i, this));
        }
        get(t) {
          return this._map.get(t);
        }
        has(t) {
          return this._map.has(t);
        }
        keys() {
          return this._map.keys();
        }
        values() {
          return this._map.values();
        }
      }
      let lm = {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: 1,
        numberOfOutputs: 1,
        parameterData: {},
        processorOptions: {},
      };
      function l_(t, e, n, i, s) {
        if ("function" == typeof t.copyFromChannel)
          0 === e[n].byteLength && (e[n] = new Float32Array(128)),
            t.copyFromChannel(e[n], i, s);
        else {
          let r = t.getChannelData(i);
          if (0 === e[n].byteLength) e[n] = r.slice(s, s + 128);
          else {
            let a = new Float32Array(
              r.buffer,
              s * Float32Array.BYTES_PER_ELEMENT,
              128,
            );
            e[n].set(a);
          }
        }
      }
      let lg = (t, e, n, i, s) => {
          "function" == typeof t.copyToChannel
            ? 0 !== e[n].byteLength && t.copyToChannel(e[n], i, s)
            : 0 !== e[n].byteLength && t.getChannelData(i).set(e[n], s);
        },
        lv = (t, e) => {
          let n = [];
          for (let i = 0; i < t; i += 1) {
            let s = [],
              r = "number" == typeof e ? e : e[i];
            for (let a = 0; a < r; a += 1) s.push(new Float32Array(128));
            n.push(s);
          }
          return n;
        },
        ly = (t, e) => {
          let n = ox(of, t),
            i = o5(e);
          return ox(n, i);
        },
        lw = async (t, e, n, i, s, r, a) => {
          let o =
              null === e ? 128 * Math.ceil(t.context.length / 128) : e.length,
            l = i.channelCount * i.numberOfInputs,
            u = s.reduce((t, e) => t + e, 0),
            h = 0 === u ? null : n.createBuffer(u, o, n.sampleRate);
          if (void 0 === r) throw Error("Missing the processor constructor.");
          let c = oz(t),
            d = await ly(n, t),
            p = lv(i.numberOfInputs, i.channelCount),
            f = lv(i.numberOfOutputs, s),
            m = Array.from(t.parameters.keys()).reduce(
              (t, e) => ({ ...t, [e]: new Float32Array(128) }),
              {},
            );
          for (let g = 0; g < o; g += 128) {
            if (i.numberOfInputs > 0 && null !== e)
              for (let v = 0; v < i.numberOfInputs; v += 1)
                for (let y = 0; y < i.channelCount; y += 1)
                  l_(e, p[v], y, y, g);
            void 0 !== r.parameterDescriptors &&
              null !== e &&
              r.parameterDescriptors.forEach(({ name: t }, n) => {
                l_(e, m, t, l + n, g);
              });
            for (let w = 0; w < i.numberOfInputs; w += 1)
              for (let x = 0; x < s[w]; x += 1)
                0 === f[w][x].byteLength && (f[w][x] = new Float32Array(128));
            try {
              let T = p.map((t, e) => (0 === c.activeInputs[e].size ? [] : t)),
                b = a(g / n.sampleRate, n.sampleRate, () => d.process(T, f, m));
              if (null !== h)
                for (let C = 0, A = 0; C < i.numberOfOutputs; C += 1) {
                  for (let S = 0; S < s[C]; S += 1) lg(h, f[C], S, A + S, g);
                  A += s[C];
                }
              if (!b) break;
            } catch (k) {
              t.dispatchEvent(
                new ErrorEvent("processorerror", {
                  colno: k.colno,
                  filename: k.filename,
                  lineno: k.lineno,
                  message: k.message,
                }),
              );
              break;
            }
          }
          return h;
        },
        lx = {
          Q: 1,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 350,
          gain: 0,
          type: "lowpass",
        },
        lT = {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 6,
        },
        lb = {
          channelCount: 6,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: 6,
        },
        lC = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          offset: 1,
        },
        lA = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          disableNormalization: !1,
        },
        lS = () => new DOMException("", "DataCloneError"),
        lk = (t) => {
          let { port1: e, port2: n } = new MessageChannel();
          return new Promise((i) => {
            let s = () => {
              (n.onmessage = null), e.close(), n.close(), i();
            };
            n.onmessage = () => s();
            try {
              e.postMessage(t, [t]);
            } catch {
            } finally {
              s();
            }
          });
        },
        lO = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          delayTime: 0,
          maxDelayTime: 1,
        },
        lM = (t) => "delayTime" in t,
        lE = (t, e, n) => {
          let i = e[n];
          if (void 0 === i) throw t();
          return i;
        },
        lI = {
          attack: 0.003,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          knee: 30,
          ratio: 12,
          release: 0.25,
          threshold: -24,
        },
        lD = () => new DOMException("", "EncodingError"),
        lR = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          gain: 1,
        },
        lN = () => new DOMException("", "InvalidStateError"),
        lV = () => new DOMException("", "InvalidAccessError"),
        lP = (t) => {
          var e;
          t.getFrequencyResponse =
            ((e = t.getFrequencyResponse),
            (n, i, s) => {
              if (n.length !== i.length || i.length !== s.length) throw lV();
              return e.call(t, n, i, s);
            });
        },
        lq = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
        },
        lF = (t, e, n, i, s, r, a, o, l, u, h) => {
          let c = u.length,
            d = o;
          for (let p = 0; p < c; p += 1) {
            let f = n[0] * u[p];
            for (let m = 1; m < s; m += 1) {
              let g = (d - m) & (l - 1);
              (f += n[m] * r[g]), (f -= t[m] * a[g]);
            }
            for (let v = s; v < i; v += 1) f += n[v] * r[(d - v) & (l - 1)];
            for (let y = s; y < e; y += 1) f -= t[y] * a[(d - y) & (l - 1)];
            (r[d] = u[p]), (a[d] = f), (d = (d + 1) & (l - 1)), (h[p] = f);
          }
          return d;
        },
        lj = (t, e, n, i) => {
          let s = n instanceof Float64Array ? n : new Float64Array(n),
            r = i instanceof Float64Array ? i : new Float64Array(i),
            a = s.length,
            o = r.length,
            l = Math.min(a, o);
          if (1 !== s[0]) {
            for (let u = 0; u < a; u += 1) r[u] /= s[0];
            for (let h = 1; h < o; h += 1) s[h] /= s[0];
          }
          let c = new Float32Array(32),
            d = new Float32Array(32),
            p = e.createBuffer(t.numberOfChannels, t.length, t.sampleRate),
            f = t.numberOfChannels;
          for (let m = 0; m < f; m += 1) {
            let g = t.getChannelData(m),
              v = p.getChannelData(m);
            c.fill(0), d.fill(0), lF(s, a, r, o, l, c, d, 0, 32, g, v);
          }
          return p;
        },
        lL = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
        },
        lW = (t) => {
          let e = new Uint32Array([
            1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400,
            1048580, 1635017060, 4, 0,
          ]);
          try {
            let n = t.decodeAudioData(e.buffer, () => {});
            if (void 0 === n) return !1;
            return n.catch(() => {}), !0;
          } catch {}
          return !1;
        },
        lB = (t, e, n) => {
          let i = e[n];
          void 0 !== i && i !== t[n] && (t[n] = i);
        },
        lz = (t, e) => {
          lB(t, e, "channelCount"),
            lB(t, e, "channelCountMode"),
            lB(t, e, "channelInterpretation");
        },
        lU = (t) => "function" == typeof t.getFloatTimeDomainData,
        lG = (t) => {
          t.getFloatTimeDomainData = (e) => {
            let n = new Uint8Array(e.length);
            t.getByteTimeDomainData(n);
            let i = Math.max(n.length, t.fftSize);
            for (let s = 0; s < i; s += 1) e[s] = (n[s] - 128) * 0.0078125;
            return e;
          };
        },
        lZ = (t, e, n) => {
          let i = e[n];
          void 0 !== i && i !== t[n].value && (t[n].value = i);
        },
        lX = (t) => {
          var e;
          let n;
          t.start =
            ((e = t.start),
            (n = !1),
            (i = 0, s = 0, r) => {
              if (n) throw lN();
              e.call(t, i, s, r), (n = !0);
            });
        },
        lY = (t) => {
          var e;
          t.start =
            ((e = t.start),
            (n = 0, i = 0, s) => {
              if (("number" == typeof s && s < 0) || i < 0 || n < 0)
                throw RangeError("The parameters can't be negative.");
              e.call(t, n, i, s);
            });
        },
        lH = (t) => {
          var e;
          t.stop =
            ((e = t.stop),
            (n = 0) => {
              if (n < 0) throw RangeError("The parameter can't be negative.");
              e.call(t, n);
            });
        },
        l$ = (t) => {
          let { port1: e } = new MessageChannel();
          try {
            e.postMessage(t);
          } finally {
            e.close();
          }
        },
        lQ = (t, e) =>
          null === t
            ? 512
            : Math.max(
                512,
                Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e)))),
              ),
        lJ = (t) =>
          new Promise((e, n) => {
            let { port1: i, port2: s } = new MessageChannel();
            (i.onmessage = ({ data: t }) => {
              i.close(), s.close(), e(t);
            }),
              (i.onmessageerror = ({ data: t }) => {
                i.close(), s.close(), n(t);
              }),
              s.postMessage(t);
          }),
        lK = async (t, e) => {
          let n = await lJ(e);
          return new t(n);
        },
        l0 = (t, e, n, i) => {
          let s = of.get(t);
          void 0 === s && ((s = new WeakMap()), of.set(t, s));
          let r = lK(n, i);
          return s.set(e, r), r;
        },
        l1 = (t, e) => {
          let n = t.createBiquadFilter();
          return (
            lz(n, e),
            lZ(n, e, "Q"),
            lZ(n, e, "detune"),
            lZ(n, e, "frequency"),
            lZ(n, e, "gain"),
            lB(n, e, "type"),
            n
          );
        },
        l2 = (t) => {
          let e = t.numberOfOutputs;
          Object.defineProperty(t, "channelCount", {
            get: () => e,
            set(t) {
              if (t !== e) throw lN();
            },
          }),
            Object.defineProperty(t, "channelCountMode", {
              get: () => "explicit",
              set(t) {
                if ("explicit" !== t) throw lN();
              },
            }),
            Object.defineProperty(t, "channelInterpretation", {
              get: () => "discrete",
              set(t) {
                if ("discrete" !== t) throw lN();
              },
            });
        },
        l3 = (t, e) => {
          let n = t.createChannelSplitter(e.numberOfOutputs);
          return lz(n, e), l2(n), n;
        },
        l8 = (t, e) => (
          (t.connect = e.connect.bind(e)),
          (t.disconnect = e.disconnect.bind(e)),
          t
        ),
        l4 = (t, e) => {
          let n = t.createDelay(e.maxDelayTime);
          return lz(n, e), lZ(n, e, "delayTime"), n;
        },
        l6 = (t, e) => {
          let n = t.createGain();
          return lz(n, e), lZ(n, e, "gain"), n;
        };
      function l5(t, e) {
        let n = e[0] * e[0] + e[1] * e[1];
        return [
          (t[0] * e[0] + t[1] * e[1]) / n,
          (t[1] * e[0] - t[0] * e[1]) / n,
        ];
      }
      function l7(t, e) {
        return [t[0] * e[0] - t[1] * e[1], t[0] * e[1] + t[1] * e[0]];
      }
      function l9(t, e) {
        let n = [0, 0];
        for (let i = t.length - 1; i >= 0; i -= 1)
          (n = l7(n, e)), (n[0] += t[i]);
        return n;
      }
      let ut = (t, e) => t.createMediaElementSource(e.mediaElement),
        ue = (t, e) => {
          let n = t.createMediaStreamDestination();
          return (
            lz(n, e),
            1 === n.numberOfOutputs &&
              Object.defineProperty(n, "numberOfOutputs", { get: () => 0 }),
            n
          );
        },
        un = (t, { mediaStream: e }) => {
          let n = e.getAudioTracks();
          n.sort((t, e) => (t.id < e.id ? -1 : t.id > e.id ? 1 : 0));
          let i = n.slice(0, 1),
            s = t.createMediaStreamSource(new MediaStream(i));
          return Object.defineProperty(s, "mediaStream", { value: e }), s;
        },
        ui = (t, e, n, i) => t.createScriptProcessor(e, n, i),
        us = () => new DOMException("", "NotSupportedError"),
        ur = { numberOfChannels: 1 },
        ua = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 440,
          periodicWave: void 0,
          type: "sine",
        },
        uo = {
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          coneInnerAngle: 360,
          coneOuterAngle: 360,
          coneOuterGain: 0,
          distanceModel: "inverse",
          maxDistance: 1e4,
          orientationX: 1,
          orientationY: 0,
          orientationZ: 0,
          panningModel: "equalpower",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          refDistance: 1,
          rolloffFactor: 1,
        },
        ul = { disableNormalization: !1 },
        uu = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          pan: 0,
        },
        uh = () => new DOMException("", "UnknownError"),
        uc = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          curve: null,
          oversample: "none",
        },
        ud = (t, e, n) =>
          void 0 === t.copyFromChannel
            ? t.getChannelData(n)[0]
            : (t.copyFromChannel(e, n), e[0]),
        up = (t) => {
          if (null === t) return !1;
          let e = t.length;
          return e % 2 != 0
            ? 0 !== t[Math.floor(e / 2)]
            : t[e / 2 - 1] + t[e / 2] !== 0;
        },
        uf = (t, e, n, i) => {
          let s = t;
          for (; !s.hasOwnProperty(e); ) s = Object.getPrototypeOf(s);
          let { get: r, set: a } = Object.getOwnPropertyDescriptor(s, e);
          Object.defineProperty(t, e, { get: n(r), set: i(a) });
        },
        um = (t) => ({
          ...t,
          outputChannelCount:
            void 0 !== t.outputChannelCount
              ? t.outputChannelCount
              : 1 === t.numberOfInputs && 1 === t.numberOfOutputs
              ? [t.channelCount]
              : Array.from({ length: t.numberOfOutputs }, () => 1),
        }),
        u_ = (t) => ({ ...t, channelCount: t.numberOfOutputs }),
        ug = (t) => {
          let { imag: e, real: n } = t;
          return void 0 === e
            ? void 0 === n
              ? { ...t, imag: [0, 0], real: [0, 0] }
              : { ...t, imag: Array.from(n, () => 0), real: n }
            : void 0 === n
            ? { ...t, imag: e, real: Array.from(e, () => 0) }
            : { ...t, imag: e, real: n };
        },
        uv = (t, e, n) => {
          try {
            t.setValueAtTime(e, n);
          } catch (i) {
            if (9 !== i.code) throw i;
            uv(t, e, n + 1e-7);
          }
        },
        uy = (t) => {
          let e = t.createBufferSource();
          e.start();
          try {
            e.start();
          } catch {
            return !0;
          }
          return !1;
        },
        uw = (t) => {
          let e = t.createBufferSource(),
            n = t.createBuffer(1, 1, 44100);
          e.buffer = n;
          try {
            e.start(0, 1);
          } catch {
            return !1;
          }
          return !0;
        },
        ux = (t) => {
          let e = t.createBufferSource();
          e.start();
          try {
            e.stop();
          } catch {
            return !1;
          }
          return !0;
        },
        uT = (t) => {
          let e = t.createOscillator();
          try {
            e.start(-1);
          } catch (n) {
            return n instanceof RangeError;
          }
          return !1;
        },
        ub = (t) => {
          let e = t.createBuffer(1, 1, 44100),
            n = t.createBufferSource();
          (n.buffer = e), n.start(), n.stop();
          try {
            return n.stop(), !0;
          } catch {
            return !1;
          }
        },
        uC = (t) => {
          let e = t.createOscillator();
          try {
            e.stop(-1);
          } catch (n) {
            return n instanceof RangeError;
          }
          return !1;
        },
        uA = (t) => {
          let { port1: e, port2: n } = new MessageChannel();
          try {
            e.postMessage(t);
          } finally {
            e.close(), n.close();
          }
        },
        uS = (t) => {
          var e;
          t.start =
            ((e = t.start),
            (n = 0, i = 0, s) => {
              let r = t.buffer,
                a = null === r ? i : Math.min(r.duration, i);
              null !== r && a > r.duration - 0.5 / t.context.sampleRate
                ? e.call(t, n, 0, 0)
                : e.call(t, n, a, s);
            });
        },
        uk = (t, e) => {
          var n, i;
          let s = e.createGain();
          t.connect(s);
          let r =
            ((n = t.disconnect),
            () => {
              n.call(t, s), t.removeEventListener("ended", r);
            });
          t.addEventListener("ended", r), l8(t, s);
          let a;
          t.stop =
            ((i = t.stop),
            (a = !1),
            (e = 0) => {
              if (a)
                try {
                  i.call(t, e);
                } catch {
                  s.gain.setValueAtTime(0, e);
                }
              else i.call(t, e), (a = !0);
            });
        },
        uO = (t, e) => (n) => {
          let i = { value: t };
          return (Object.defineProperties(n, { currentTarget: i, target: i }),
          "function" == typeof e)
            ? e.call(t, n)
            : e.handleEvent.call(t, n);
        },
        uM = (t, e, [n, i, s], r) => {
          oQ(t[i], [e, n, s], (t) => t[0] === e && t[1] === n, r);
        },
        uE = (t, e, [n, i, s], r) => {
          let a = t.get(n);
          void 0 === a
            ? t.set(n, new Set([[i, e, s]]))
            : oQ(a, [i, e, s], (t) => t[0] === i && t[1] === e, r);
        },
        uI = (t, e, n, i) => oT(t[i], (t) => t[0] === e && t[1] === n),
        uD = new WeakMap(),
        uR = (t) => {
          var e;
          return null !== (e = uD.get(t)) && void 0 !== e ? e : 0;
        },
        uN =
          ((l = new Map()),
          (u = new WeakMap()),
          (t, e) => {
            let n = u.get(t);
            if (void 0 !== n) return n;
            let i = l.get(t);
            if (void 0 !== i) return i;
            try {
              let s = e();
              if (s instanceof Promise)
                return (
                  l.set(t, s),
                  s.catch(() => !1).then((e) => (l.delete(t), u.set(t, e), e))
                );
              return u.set(t, s), s;
            } catch {
              return u.set(t, !1), !1;
            }
          }),
        uV = "undefined" == typeof window ? null : window,
        uP = (t, e) => {
          let n = t.createAnalyser();
          if ((lz(n, e), !(e.maxDecibels > e.minDecibels))) throw oD();
          return (
            lB(n, e, "fftSize"),
            lB(n, e, "maxDecibels"),
            lB(n, e, "minDecibels"),
            lB(n, e, "smoothingTimeConstant"),
            uN(lU, () => lU(n)) || lG(n),
            n
          );
        },
        uq = (t) => {
          let e = oz(t);
          if (null === e.renderer)
            throw Error(
              "Missing the renderer of the given AudioNode in the audio graph.",
            );
          return e.renderer;
        },
        uF = async (t, e, n) => {
          let i = oz(t);
          await Promise.all(
            i.activeInputs
              .map((i, s) =>
                Array.from(i).map(async ([i, r]) => {
                  let a = uq(i),
                    o = await a.render(i, e),
                    l = t.context.destination;
                  o9(i) || (t === l && o9(t)) || o.connect(n, r, s);
                }),
              )
              .reduce((t, e) => [...t, ...e], []),
          );
        },
        uj = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  fftSize: i.fftSize,
                  maxDecibels: i.maxDecibels,
                  minDecibels: i.minDecibels,
                  smoothingTimeConstant: i.smoothingTimeConstant,
                };
                i = uP(n, r);
              }
              return t.set(n, i), await uF(e, n, i), i;
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        uL = (t) => {
          let e = oh.get(t);
          if (void 0 === e) throw lN();
          return e;
        },
        uW =
          null === uV
            ? null
            : uV.hasOwnProperty("OfflineAudioContext")
            ? uV.OfflineAudioContext
            : uV.hasOwnProperty("webkitOfflineAudioContext")
            ? uV.webkitOfflineAudioContext
            : null,
        uB = (t) => null !== uW && t instanceof uW,
        uz = new WeakMap(),
        uU = class {
          constructor(t) {
            (this._nativeEventTarget = t), (this._listeners = new WeakMap());
          }
          addEventListener(t, e, n) {
            if (null !== e) {
              let i = this._listeners.get(e);
              void 0 === i &&
                ((i = uO(this, e)),
                "function" == typeof e && this._listeners.set(e, i)),
                this._nativeEventTarget.addEventListener(t, i, n);
            }
          }
          dispatchEvent(t) {
            return this._nativeEventTarget.dispatchEvent(t);
          }
          removeEventListener(t, e, n) {
            let i = null === e ? void 0 : this._listeners.get(e);
            this._nativeEventTarget.removeEventListener(
              t,
              void 0 === i ? null : i,
              n,
            );
          }
        },
        uG =
          null === uV
            ? null
            : uV.hasOwnProperty("AudioContext")
            ? uV.AudioContext
            : uV.hasOwnProperty("webkitAudioContext")
            ? uV.webkitAudioContext
            : null,
        uZ =
          null === uV
            ? null
            : uV.hasOwnProperty("AudioWorkletNode")
            ? uV.AudioWorkletNode
            : null,
        uX =
          ((Z = (t, e, n) => {
            let i = [];
            for (let s = 0; s < n.numberOfInputs; s += 1) i.push(new Set());
            oa.set(t, {
              activeInputs: i,
              outputs: new Set(),
              passiveInputs: new WeakMap(),
              renderer: e,
            });
          }),
          (X = ((t, e, n, i, s, r, a, o, l, u, h, c, d) => {
            let p = new WeakMap();
            return (f, m, g, v, y) => {
              let { activeInputs: w, passiveInputs: x } = r(m),
                { outputs: T } = r(f),
                b = o(f),
                C = (r) => {
                  let o = l(m),
                    u = l(f);
                  if (r) {
                    let T = ob(x, f, g, v);
                    t(w, f, T, !1), y || c(f) || n(u, o, g, v), d(m) && oA(m);
                  } else {
                    let b = i(w, f, g, v);
                    e(x, v, b, !1), y || c(f) || s(u, o, g, v);
                    let C = a(m);
                    if (0 === C) h(m) && oO(m, w);
                    else {
                      let A = p.get(m);
                      void 0 !== A && clearTimeout(A),
                        p.set(
                          m,
                          setTimeout(() => {
                            h(m) && oO(m, w);
                          }, 1e3 * C),
                        );
                    }
                  }
                };
              return (
                !!u(
                  T,
                  [m, g, v],
                  (t) => t[0] === m && t[1] === g && t[2] === v,
                  !0,
                ) &&
                (b.add(C),
                h(f) ? t(w, f, [g, v, C], !0) : e(x, v, [f, g, C], !0),
                !0)
              );
            };
          })(uM, uE, o1, uI, o6, oz, uR, oC, o5, oQ, oV, o9, lt)),
          (H = (t) => (e, n) => {
            let i = od.get(e);
            if (void 0 === i) {
              if (!t && oV(e)) {
                let s = o5(e),
                  { outputs: r } = oz(e);
                for (let a of r)
                  if (o$(a)) {
                    let o = o5(a[0]);
                    o6(s, o, a[1], a[2]);
                  } else {
                    let l = o7(a[0]);
                    s.disconnect(l, a[1]);
                  }
              }
              od.set(e, n);
            } else od.set(e, i + n);
          }),
          (K = (t, e) => {
            let n = od.get(t);
            if (void 0 === n) throw Error("Missing the expected cycle count.");
            let i = uL(t.context),
              s = uB(i);
            if (n === e) {
              if ((od.delete(t), !s && oV(t))) {
                let r = o5(t),
                  { outputs: a } = oz(t);
                for (let o of a)
                  if (o$(o)) {
                    let l = o5(o[0]);
                    o1(r, l, o[1], o[2]);
                  } else {
                    let u = o7(o[0]);
                    r.connect(u, o[1]);
                  }
              }
            } else od.set(t, n - e);
          }),
          (tt = function t(e, n) {
            let i = oH(n) ? n : ox(uz, n);
            if (lM(i)) return [];
            if (e[0] === i) return [e];
            if (e.includes(i)) return [];
            let { outputs: s } = oz(i);
            return Array.from(s)
              .map((n) => t([...e, i], n[0]))
              .reduce((t, e) => t.concat(e), []);
          }),
          (te = uU),
          (ti = (t) => null !== uG && t instanceof uG),
          (ts = (t) =>
            null !== uV &&
            "function" == typeof uV.AudioNode &&
            t instanceof uV.AudioNode),
          class extends te {
            constructor(t, e, n, i) {
              super(n), (this._context = t), (this._nativeAudioNode = n);
              let s = uL(t);
              ti(s) && !0 !== uN(le, () => le(s, uZ)) && ls(n),
                oo.set(this, n),
                oc.set(this, new Set()),
                "closed" !== t.state && e && oA(this),
                Z(this, i, n);
            }
            get channelCount() {
              return this._nativeAudioNode.channelCount;
            }
            set channelCount(t) {
              this._nativeAudioNode.channelCount = t;
            }
            get channelCountMode() {
              return this._nativeAudioNode.channelCountMode;
            }
            set channelCountMode(t) {
              this._nativeAudioNode.channelCountMode = t;
            }
            get channelInterpretation() {
              return this._nativeAudioNode.channelInterpretation;
            }
            set channelInterpretation(t) {
              this._nativeAudioNode.channelInterpretation = t;
            }
            get context() {
              return this._context;
            }
            get numberOfInputs() {
              return this._nativeAudioNode.numberOfInputs;
            }
            get numberOfOutputs() {
              return this._nativeAudioNode.numberOfOutputs;
            }
            connect(t, e = 0, n = 0) {
              if (e < 0 || e >= this._nativeAudioNode.numberOfOutputs)
                throw oD();
              let i = uL(this._context),
                s = uB(i);
              if (
                ts(t) ||
                (tr = (t) =>
                  null !== uV &&
                  "function" == typeof uV.AudioParam &&
                  t instanceof uV.AudioParam)(t)
              )
                throw lV();
              if (oH(t)) {
                let r = o5(t);
                try {
                  let a = o1(this._nativeAudioNode, r, e, n),
                    o = lt(this);
                  (s || o) && this._nativeAudioNode.disconnect(...a),
                    "closed" !== this.context.state && !o && lt(t) && oA(t);
                } catch (l) {
                  if (12 === l.code) throw lV();
                  throw l;
                }
                let u = X(this, t, e, n, s);
                if (u) {
                  let h = tt([this], t);
                  ln(h, H(s));
                }
                return t;
              }
              let c = o7(t);
              if ("playbackRate" === c.name && 1024 === c.maxValue) throw us();
              try {
                this._nativeAudioNode.connect(c, e),
                  (s || lt(this)) && this._nativeAudioNode.disconnect(c, e);
              } catch (d) {
                if (12 === d.code) throw lV();
                throw d;
              }
              let p = lr(this, t, e, s);
              if (p) {
                let f = tt([this], t);
                ln(f, H(s));
              }
            }
            disconnect(t, e, n) {
              let i,
                s = uL(this._context),
                r = uB(s);
              if (void 0 === t) i = lh(this, r);
              else if ("number" == typeof t) {
                if (t < 0 || t >= this.numberOfOutputs) throw oD();
                i = lc(this, r, t);
              } else {
                if (
                  (void 0 !== e && (e < 0 || e >= this.numberOfOutputs)) ||
                  (oH(t) && void 0 !== n && (n < 0 || n >= t.numberOfInputs))
                )
                  throw oD();
                if (0 === (i = ld(this, r, t, e, n)).length) throw lV();
              }
              for (let a of i) {
                let o = tt([this], a);
                ln(o, K);
              }
            }
          }),
        uY =
          ((to = uX),
          class extends to {
            constructor(t, e) {
              let n = uL(t),
                i = { ...oM, ...e },
                s = uP(n, i),
                r = uB(n) ? uj() : null;
              super(t, !1, s, r), (this._nativeAnalyserNode = s);
            }
            get fftSize() {
              return this._nativeAnalyserNode.fftSize;
            }
            set fftSize(t) {
              this._nativeAnalyserNode.fftSize = t;
            }
            get frequencyBinCount() {
              return this._nativeAnalyserNode.frequencyBinCount;
            }
            get maxDecibels() {
              return this._nativeAnalyserNode.maxDecibels;
            }
            set maxDecibels(t) {
              let e = this._nativeAnalyserNode.maxDecibels;
              if (
                ((this._nativeAnalyserNode.maxDecibels = t),
                !(t > this._nativeAnalyserNode.minDecibels))
              )
                throw ((this._nativeAnalyserNode.maxDecibels = e), oD());
            }
            get minDecibels() {
              return this._nativeAnalyserNode.minDecibels;
            }
            set minDecibels(t) {
              let e = this._nativeAnalyserNode.minDecibels;
              if (
                ((this._nativeAnalyserNode.minDecibels = t),
                !(this._nativeAnalyserNode.maxDecibels > t))
              )
                throw ((this._nativeAnalyserNode.minDecibels = e), oD());
            }
            get smoothingTimeConstant() {
              return this._nativeAnalyserNode.smoothingTimeConstant;
            }
            set smoothingTimeConstant(t) {
              this._nativeAnalyserNode.smoothingTimeConstant = t;
            }
            getByteFrequencyData(t) {
              this._nativeAnalyserNode.getByteFrequencyData(t);
            }
            getByteTimeDomainData(t) {
              this._nativeAnalyserNode.getByteTimeDomainData(t);
            }
            getFloatFrequencyData(t) {
              this._nativeAnalyserNode.getFloatFrequencyData(t);
            }
            getFloatTimeDomainData(t) {
              this._nativeAnalyserNode.getFloatTimeDomainData(t);
            }
          }),
        uH = new WeakSet(),
        u$ =
          null === uV
            ? null
            : uV.hasOwnProperty("AudioBuffer")
            ? uV.AudioBuffer
            : null,
        uQ = ((tp = new Uint32Array(1)), (t) => ((tp[0] = t), tp[0])),
        uJ = (t) => {
          (t.copyFromChannel = (e, n, i = 0) => {
            let s = uQ(i),
              r = uQ(n);
            if (r >= t.numberOfChannels) throw oD();
            let a = t.length,
              o = t.getChannelData(r),
              l = e.length;
            for (let u = s < 0 ? -s : 0; u + s < a && u < l; u += 1)
              e[u] = o[u + s];
          }),
            (t.copyToChannel = (e, n, i = 0) => {
              let s = uQ(i),
                r = uQ(n);
              if (r >= t.numberOfChannels) throw oD();
              let a = t.length,
                o = t.getChannelData(r),
                l = e.length;
              for (let u = s < 0 ? -s : 0; u + s < a && u < l; u += 1)
                o[u + s] = e[u];
            });
        },
        uK = (t) => {
          var e, n;
          (t.copyFromChannel =
            ((e = t.copyFromChannel),
            (n, i, s = 0) => {
              let r = uQ(s),
                a = uQ(i);
              if (r < t.length) return e.call(t, n, a, r);
            })),
            (t.copyToChannel =
              ((n = t.copyToChannel),
              (e, i, s = 0) => {
                let r = uQ(s),
                  a = uQ(i);
                if (r < t.length) return n.call(t, e, a, r);
              }));
        },
        u0,
        u1 =
          ((tb = () => {
            if (null === u$) return !1;
            try {
              new u$({ length: 1, sampleRate: 44100 });
            } catch {
              return !1;
            }
            return !0;
          }),
          (u0 = null),
          class t {
            constructor(t) {
              if (null === uW)
                throw Error(
                  "Missing the native OfflineAudioContext constructor.",
                );
              let {
                length: e,
                numberOfChannels: n,
                sampleRate: i,
              } = { ...oN, ...t };
              null === u0 && (u0 = new uW(1, 1, 44100));
              let s =
                null !== u$ && uN(tb, tb)
                  ? new u$({ length: e, numberOfChannels: n, sampleRate: i })
                  : u0.createBuffer(n, e, i);
              if (0 === s.numberOfChannels) throw us();
              return (
                "function" != typeof s.copyFromChannel
                  ? (uJ(s), oR(s))
                  : uN(oI, () => oI(s)) || uK(s),
                uH.add(s),
                s
              );
            }
            static [Symbol.hasInstance](e) {
              return (
                (null !== e &&
                  "object" == typeof e &&
                  Object.getPrototypeOf(e) === t.prototype) ||
                uH.has(e)
              );
            }
          }),
        u2 = (t, e) => {
          let n = l6(t, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          });
          e.connect(n).connect(t.destination);
          let i = () => {
            e.removeEventListener("ended", i), e.disconnect(n), n.disconnect();
          };
          e.addEventListener("ended", i);
        },
        u3 = async (t, e, n) => {
          let i = oU(t);
          await Promise.all(
            Array.from(i.activeInputs).map(async ([t, i]) => {
              let s = uq(t),
                r = await s.render(t, e);
              o9(t) || r.connect(n, i);
            }),
          );
        },
        u8 = (t, e, n) => u3(e, t, n),
        u4 =
          ((tW = (t, e) => {
            let n = e.createBuffer(1, 1, 44100);
            null === t.buffer && (t.buffer = n),
              uf(
                t,
                "buffer",
                (e) => () => {
                  let i = e.call(t);
                  return i === n ? null : i;
                },
                (e) => (i) => e.call(t, null === i ? n : i),
              );
          }),
          (t, e) => {
            let n = t.createBufferSource();
            return (
              lz(n, e),
              lZ(n, e, "playbackRate"),
              lB(n, e, "buffer"),
              lB(n, e, "loop"),
              lB(n, e, "loopEnd"),
              lB(n, e, "loopStart"),
              uN(uy, () => uy(t)) || lX(n),
              uN(uw, () => uw(t)) || uS(n),
              uN(ux, () => ux(t)) || tW(n, t),
              uN(uT, () => uT(t)) || lY(n),
              uN(ub, () => ub(t)) || uk(n, t),
              uN(uC, () => uC(t)) || lH(n),
              u2(t, n),
              n
            );
          }),
        u6 =
          ((tU = (t) => {
            let e = oU(t);
            if (null === e.renderer)
              throw Error(
                "Missing the renderer of the given AudioParam in the audio graph.",
              );
            return e.renderer;
          }),
          (t, e, n) => {
            let i = tU(e);
            return i.replay(n), u3(e, t, n);
          }),
        u5 = () => {
          let t = new WeakMap(),
            e = null,
            n = null,
            i = async (i, s) => {
              let r = o5(i),
                a = oE(r, s);
              if (!a) {
                let o = {
                  buffer: r.buffer,
                  channelCount: r.channelCount,
                  channelCountMode: r.channelCountMode,
                  channelInterpretation: r.channelInterpretation,
                  loop: r.loop,
                  loopEnd: r.loopEnd,
                  loopStart: r.loopStart,
                  playbackRate: r.playbackRate.value,
                };
                (r = u4(s, o)),
                  null !== e && r.start(...e),
                  null !== n && r.stop(n);
              }
              return (
                t.set(s, r),
                a
                  ? await u8(s, i.playbackRate, r.playbackRate)
                  : await u6(s, i.playbackRate, r.playbackRate),
                await uF(i, s, r),
                r
              );
            };
          return {
            set start(value) {
              e = value;
            },
            set stop(value) {
              n = value;
            },
            render(e, n) {
              let s = t.get(n);
              return void 0 !== s ? Promise.resolve(s) : i(e, n);
            },
          };
        },
        u7 =
          ((tJ = (t, e) => {
            ol.set(t, {
              activeInputs: new Set(),
              passiveInputs: new WeakMap(),
              renderer: e,
            });
          }),
          (t2 = oi.createCancelAndHoldAutomationEvent),
          (t3 = oi.createCancelScheduledValuesAutomationEvent),
          (t8 = oi.createExponentialRampToValueAutomationEvent),
          (t4 = oi.createLinearRampToValueAutomationEvent),
          (t6 = oi.createSetTargetAutomationEvent),
          (t5 = oi.createSetValueAutomationEvent),
          (t7 = oi.createSetValueCurveAutomationEvent),
          (t, e, n, i = null, s = null) => {
            let r = n.value,
              a = new oi.AutomationEventList(r),
              o = e ? lp(a) : null,
              l = {
                get defaultValue() {
                  return r;
                },
                get maxValue() {
                  return null === i ? n.maxValue : i;
                },
                get minValue() {
                  return null === s ? n.minValue : s;
                },
                get value() {
                  return n.value;
                },
                set value(value) {
                  (n.value = value),
                    l.setValueAtTime(value, t.context.currentTime);
                },
                cancelAndHoldAtTime(e) {
                  if ("function" == typeof n.cancelAndHoldAtTime)
                    null === o && a.flush(t.context.currentTime),
                      a.add(t2(e)),
                      n.cancelAndHoldAtTime(e);
                  else {
                    let i = Array.from(a).pop();
                    null === o && a.flush(t.context.currentTime), a.add(t2(e));
                    let s = Array.from(a).pop();
                    n.cancelScheduledValues(e),
                      i !== s &&
                        void 0 !== s &&
                        ("exponentialRampToValue" === s.type
                          ? n.exponentialRampToValueAtTime(s.value, s.endTime)
                          : "linearRampToValue" === s.type
                          ? n.linearRampToValueAtTime(s.value, s.endTime)
                          : "setValue" === s.type
                          ? n.setValueAtTime(s.value, s.startTime)
                          : "setValueCurve" === s.type &&
                            n.setValueCurveAtTime(
                              s.values,
                              s.startTime,
                              s.duration,
                            ));
                  }
                  return l;
                },
                cancelScheduledValues: (e) => (
                  null === o && a.flush(t.context.currentTime),
                  a.add(t3(e)),
                  n.cancelScheduledValues(e),
                  l
                ),
                exponentialRampToValueAtTime(e, i) {
                  if (0 === e || !Number.isFinite(i) || i < 0)
                    throw RangeError();
                  let s = t.context.currentTime;
                  return (
                    null === o && a.flush(s),
                    0 === Array.from(a).length &&
                      (a.add(t5(r, s)), n.setValueAtTime(r, s)),
                    a.add(t8(e, i)),
                    n.exponentialRampToValueAtTime(e, i),
                    l
                  );
                },
                linearRampToValueAtTime(e, i) {
                  let s = t.context.currentTime;
                  return (
                    null === o && a.flush(s),
                    0 === Array.from(a).length &&
                      (a.add(t5(r, s)), n.setValueAtTime(r, s)),
                    a.add(t4(e, i)),
                    n.linearRampToValueAtTime(e, i),
                    l
                  );
                },
                setTargetAtTime: (e, i, s) => (
                  null === o && a.flush(t.context.currentTime),
                  a.add(t6(e, i, s)),
                  n.setTargetAtTime(e, i, s),
                  l
                ),
                setValueAtTime: (e, i) => (
                  null === o && a.flush(t.context.currentTime),
                  a.add(t5(e, i)),
                  n.setValueAtTime(e, i),
                  l
                ),
                setValueCurveAtTime(e, i, s) {
                  let r = e instanceof Float32Array ? e : new Float32Array(e);
                  if (null !== uG && "webkitAudioContext" === uG.name) {
                    let u = i + s,
                      h = t.context.sampleRate,
                      c = Math.ceil(i * h),
                      d = Math.floor(u * h),
                      p = d - c,
                      f = new Float32Array(p);
                    for (let m = 0; m < p; m += 1) {
                      let g = ((r.length - 1) / s) * ((c + m) / h - i),
                        v = Math.floor(g),
                        y = Math.ceil(g);
                      f[m] =
                        v === y
                          ? r[v]
                          : (1 - (g - v)) * r[v] + (1 - (y - g)) * r[y];
                    }
                    null === o && a.flush(t.context.currentTime),
                      a.add(t7(f, i, s)),
                      n.setValueCurveAtTime(f, i, s);
                    let w = d / h;
                    w < u && uv(l, f[f.length - 1], w),
                      uv(l, r[r.length - 1], u);
                  } else
                    null === o && a.flush(t.context.currentTime),
                      a.add(t7(r, i, s)),
                      n.setValueCurveAtTime(r, i, s);
                  return l;
                },
              };
            return ou.set(l, n), uz.set(l, t), tJ(l, o), l;
          }),
        u9 =
          ((ee = uX),
          class extends ee {
            constructor(t, e) {
              let n = uL(t),
                i = { ...oP, ...e },
                s = u4(n, i),
                r = uB(n),
                a = r ? u5() : null;
              super(t, !1, s, a),
                (this._audioBufferSourceNodeRenderer = a),
                (this._isBufferNullified = !1),
                (this._isBufferSet = null !== i.buffer),
                (this._nativeAudioBufferSourceNode = s),
                (this._onended = null),
                (this._playbackRate = u7(
                  this,
                  r,
                  s.playbackRate,
                  34028234663852886e22,
                  -34028234663852886e22,
                ));
            }
            get buffer() {
              return this._isBufferNullified
                ? null
                : this._nativeAudioBufferSourceNode.buffer;
            }
            set buffer(t) {
              if (
                ((this._nativeAudioBufferSourceNode.buffer = t), null !== t)
              ) {
                if (this._isBufferSet) throw lN();
                this._isBufferSet = !0;
              }
            }
            get loop() {
              return this._nativeAudioBufferSourceNode.loop;
            }
            set loop(t) {
              this._nativeAudioBufferSourceNode.loop = t;
            }
            get loopEnd() {
              return this._nativeAudioBufferSourceNode.loopEnd;
            }
            set loopEnd(t) {
              this._nativeAudioBufferSourceNode.loopEnd = t;
            }
            get loopStart() {
              return this._nativeAudioBufferSourceNode.loopStart;
            }
            set loopStart(t) {
              this._nativeAudioBufferSourceNode.loopStart = t;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              let e = "function" == typeof t ? uO(this, t) : null;
              this._nativeAudioBufferSourceNode.onended = e;
              let n = this._nativeAudioBufferSourceNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            get playbackRate() {
              return this._playbackRate;
            }
            start(t = 0, e = 0, n) {
              if (
                (this._nativeAudioBufferSourceNode.start(t, e, n),
                null !== this._audioBufferSourceNodeRenderer &&
                  (this._audioBufferSourceNodeRenderer.start =
                    void 0 === n ? [t, e] : [t, e, n]),
                "closed" !== this.context.state)
              ) {
                oA(this);
                let i = () => {
                  this._nativeAudioBufferSourceNode.removeEventListener(
                    "ended",
                    i,
                  ),
                    oV(this) && ok(this);
                };
                this._nativeAudioBufferSourceNode.addEventListener("ended", i);
              }
            }
            stop(t = 0) {
              this._nativeAudioBufferSourceNode.stop(t),
                null !== this._audioBufferSourceNodeRenderer &&
                  (this._audioBufferSourceNodeRenderer.stop = t);
            }
          }),
        ht =
          ((eh = uX),
          class extends eh {
            constructor(t, e) {
              let n = uL(t),
                i = uB(n),
                s = (ef = (t, e, n) => {
                  let i = t.destination;
                  if (i.channelCount !== e)
                    try {
                      i.channelCount = e;
                    } catch {}
                  n &&
                    "explicit" !== i.channelCountMode &&
                    (i.channelCountMode = "explicit"),
                    0 === i.maxChannelCount &&
                      Object.defineProperty(i, "maxChannelCount", { value: e });
                  let s = l6(t, {
                    channelCount: e,
                    channelCountMode: i.channelCountMode,
                    channelInterpretation: i.channelInterpretation,
                    gain: 1,
                  });
                  return (
                    uf(
                      s,
                      "channelCount",
                      (t) => () => t.call(s),
                      (t) => (e) => {
                        t.call(s, e);
                        try {
                          i.channelCount = e;
                        } catch (n) {
                          if (e > i.maxChannelCount) throw n;
                        }
                      },
                    ),
                    uf(
                      s,
                      "channelCountMode",
                      (t) => () => t.call(s),
                      (t) => (e) => {
                        t.call(s, e), (i.channelCountMode = e);
                      },
                    ),
                    uf(
                      s,
                      "channelInterpretation",
                      (t) => () => t.call(s),
                      (t) => (e) => {
                        t.call(s, e), (i.channelInterpretation = e);
                      },
                    ),
                    Object.defineProperty(s, "maxChannelCount", {
                      get: () => i.maxChannelCount,
                    }),
                    s.connect(i),
                    s
                  );
                })(n, e, i),
                r = i ? oY(uF) : null;
              super(t, !1, s, r),
                (this._isNodeOfNativeOfflineAudioContext = i),
                (this._nativeAudioDestinationNode = s);
            }
            get channelCount() {
              return this._nativeAudioDestinationNode.channelCount;
            }
            set channelCount(t) {
              if (this._isNodeOfNativeOfflineAudioContext) throw lN();
              if (t > this._nativeAudioDestinationNode.maxChannelCount)
                throw oD();
              this._nativeAudioDestinationNode.channelCount = t;
            }
            get channelCountMode() {
              return this._nativeAudioDestinationNode.channelCountMode;
            }
            set channelCountMode(t) {
              if (this._isNodeOfNativeOfflineAudioContext) throw lN();
              this._nativeAudioDestinationNode.channelCountMode = t;
            }
            get maxChannelCount() {
              return this._nativeAudioDestinationNode.maxChannelCount;
            }
          }),
        he = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  Q: i.Q.value,
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  detune: i.detune.value,
                  frequency: i.frequency.value,
                  gain: i.gain.value,
                  type: i.type,
                };
                i = l1(n, r);
              }
              return (
                t.set(n, i),
                s
                  ? (await u8(n, e.Q, i.Q),
                    await u8(n, e.detune, i.detune),
                    await u8(n, e.frequency, i.frequency),
                    await u8(n, e.gain, i.gain))
                  : (await u6(n, e.Q, i.Q),
                    await u6(n, e.detune, i.detune),
                    await u6(n, e.frequency, i.frequency),
                    await u6(n, e.gain, i.gain)),
                await uF(e, n, i),
                i
              );
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        hn = (t, e) => uD.set(t, e),
        hi =
          ((eb = uX),
          class extends eb {
            constructor(t, e) {
              let n = uL(t),
                i = { ...lx, ...e },
                s = l1(n, i),
                r = uB(n),
                a = r ? he() : null;
              super(t, !1, s, a),
                (this._Q = u7(
                  this,
                  r,
                  s.Q,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                (this._detune = u7(
                  this,
                  r,
                  s.detune,
                  1200 * Math.log2(34028234663852886e22),
                  -1200 * Math.log2(34028234663852886e22),
                )),
                (this._frequency = u7(
                  this,
                  r,
                  s.frequency,
                  t.sampleRate / 2,
                  0,
                )),
                (this._gain = u7(
                  this,
                  r,
                  s.gain,
                  40 * Math.log10(34028234663852886e22),
                  -34028234663852886e22,
                )),
                (this._nativeBiquadFilterNode = s),
                hn(this, 1);
            }
            get detune() {
              return this._detune;
            }
            get frequency() {
              return this._frequency;
            }
            get gain() {
              return this._gain;
            }
            get Q() {
              return this._Q;
            }
            get type() {
              return this._nativeBiquadFilterNode.type;
            }
            set type(t) {
              this._nativeBiquadFilterNode.type = t;
            }
            getFrequencyResponse(t, e, n) {
              try {
                this._nativeBiquadFilterNode.getFrequencyResponse(t, e, n);
              } catch (i) {
                if (11 === i.code) throw lV();
                throw i;
              }
              if (t.length !== e.length || e.length !== n.length) throw lV();
            }
          }),
        hs =
          ((eI = (t) =>
            null !== uV &&
            "function" == typeof uV.AudioNode &&
            t instanceof uV.AudioNode),
          (t, e, n) => {
            var i, s;
            let r = new Set();
            return (
              (t.connect =
                ((i = t.connect),
                (n, s = 0, a = 0) => {
                  let o = 0 === r.size;
                  if (eI(n))
                    return (
                      i.call(t, n, s, a),
                      oQ(
                        r,
                        [n, s, a],
                        (t) => t[0] === n && t[1] === s && t[2] === a,
                        !0,
                      ),
                      o && e(),
                      n
                    );
                  i.call(t, n, s),
                    oQ(r, [n, s], (t) => t[0] === n && t[1] === s, !0),
                    o && e();
                })),
              (t.disconnect =
                ((s = t.disconnect),
                (e, i, a) => {
                  let o = r.size > 0;
                  if (void 0 === e) s.apply(t), r.clear();
                  else if ("number" == typeof e)
                    for (let l of (s.call(t, e), r)) l[1] === e && r.delete(l);
                  else
                    for (let u of (eI(e) ? s.call(t, e, i, a) : s.call(t, e, i),
                    r))
                      u[0] === e &&
                        (void 0 === i || u[1] === i) &&
                        (void 0 === a || u[2] === a) &&
                        r.delete(u);
                  let h = 0 === r.size;
                  o && h && n();
                })),
              t
            );
          }),
        hr = (t, e) => {
          (e.channelCount = 1),
            (e.channelCountMode = "explicit"),
            Object.defineProperty(e, "channelCount", {
              get: () => 1,
              set() {
                throw lN();
              },
            }),
            Object.defineProperty(e, "channelCountMode", {
              get: () => "explicit",
              set() {
                throw lN();
              },
            });
          let n = t.createBufferSource(),
            i = () => {
              let t = e.numberOfInputs;
              for (let i = 0; i < t; i += 1) n.connect(e, 0, i);
            },
            s = () => n.disconnect(e);
          hs(e, i, s);
        },
        ha = (t, e) => {
          let n = t.createChannelMerger(e.numberOfInputs);
          return (
            null !== uG && "webkitAudioContext" === uG.name && hr(t, n),
            lz(n, e),
            n
          );
        },
        ho = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  numberOfInputs: i.numberOfInputs,
                };
                i = ha(n, r);
              }
              return t.set(n, i), await uF(e, n, i), i;
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        hl =
          ((ej = uX),
          class extends ej {
            constructor(t, e) {
              let n = uL(t),
                i = { ...lT, ...e },
                s = ha(n, i),
                r = uB(n) ? ho() : null;
              super(t, !1, s, r);
            }
          }),
        hu = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  numberOfOutputs: i.numberOfOutputs,
                };
                i = l3(n, r);
              }
              return t.set(n, i), await uF(e, n, i), i;
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        hh =
          ((eZ = uX),
          class extends eZ {
            constructor(t, e) {
              let n = uL(t),
                i = u_({ ...lb, ...e }),
                s = l3(n, i),
                r = uB(n) ? hu() : null;
              super(t, !1, s, r);
            }
          }),
        hc = (t, { offset: e, ...n }) => {
          let i = t.createBuffer(1, 2, 44100),
            s = u4(t, {
              buffer: null,
              channelCount: 2,
              channelCountMode: "max",
              channelInterpretation: "speakers",
              loop: !1,
              loopEnd: 0,
              loopStart: 0,
              playbackRate: 1,
            }),
            r = l6(t, { ...n, gain: e }),
            a = i.getChannelData(0);
          (a[0] = 1), (a[1] = 1), (s.buffer = i), (s.loop = !0);
          let o = () => s.connect(r),
            l = () => s.disconnect(r);
          return (
            u2(t, s),
            hs(
              l8(
                {
                  get bufferSize() {
                    return;
                  },
                  get channelCount() {
                    return r.channelCount;
                  },
                  set channelCount(value) {
                    r.channelCount = value;
                  },
                  get channelCountMode() {
                    return r.channelCountMode;
                  },
                  set channelCountMode(value) {
                    r.channelCountMode = value;
                  },
                  get channelInterpretation() {
                    return r.channelInterpretation;
                  },
                  set channelInterpretation(value) {
                    r.channelInterpretation = value;
                  },
                  get context() {
                    return r.context;
                  },
                  get inputs() {
                    return [];
                  },
                  get numberOfInputs() {
                    return s.numberOfInputs;
                  },
                  get numberOfOutputs() {
                    return r.numberOfOutputs;
                  },
                  get offset() {
                    return r.gain;
                  },
                  get onended() {
                    return s.onended;
                  },
                  set onended(value) {
                    s.onended = value;
                  },
                  addEventListener: (...t) =>
                    s.addEventListener(t[0], t[1], t[2]),
                  dispatchEvent: (...t) => s.dispatchEvent(t[0]),
                  removeEventListener: (...t) =>
                    s.removeEventListener(t[0], t[1], t[2]),
                  start(t = 0) {
                    s.start.call(s, t);
                  },
                  stop(t = 0) {
                    s.stop.call(s, t);
                  },
                },
                r,
              ),
              o,
              l,
            )
          );
        },
        hd = (t, e) => {
          if (void 0 === t.createConstantSource) return hc(t, e);
          let n = t.createConstantSource();
          return (
            lz(n, e),
            lZ(n, e, "offset"),
            uN(uT, () => uT(t)) || lY(n),
            uN(uC, () => uC(t)) || lH(n),
            u2(t, n),
            n
          );
        },
        hp = () => {
          let t = new WeakMap(),
            e = null,
            n = null,
            i = async (i, s) => {
              let r = o5(i),
                a = oE(r, s);
              if (!a) {
                let o = {
                  channelCount: r.channelCount,
                  channelCountMode: r.channelCountMode,
                  channelInterpretation: r.channelInterpretation,
                  offset: r.offset.value,
                };
                (r = hd(s, o)),
                  null !== e && r.start(e),
                  null !== n && r.stop(n);
              }
              return (
                t.set(s, r),
                a
                  ? await u8(s, i.offset, r.offset)
                  : await u6(s, i.offset, r.offset),
                await uF(i, s, r),
                r
              );
            };
          return {
            set start(value) {
              e = value;
            },
            set stop(value) {
              n = value;
            },
            render(e, n) {
              let s = t.get(n);
              return void 0 !== s ? Promise.resolve(s) : i(e, n);
            },
          };
        },
        hf =
          ((ne = uX),
          class extends ne {
            constructor(t, e) {
              let n = uL(t),
                i = { ...lC, ...e },
                s = hd(n, i),
                r = uB(n),
                a = r ? hp() : null;
              super(t, !1, s, a),
                (this._constantSourceNodeRenderer = a),
                (this._nativeConstantSourceNode = s),
                (this._offset = u7(
                  this,
                  r,
                  s.offset,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                (this._onended = null);
            }
            get offset() {
              return this._offset;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              let e = "function" == typeof t ? uO(this, t) : null;
              this._nativeConstantSourceNode.onended = e;
              let n = this._nativeConstantSourceNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            start(t = 0) {
              if (
                (this._nativeConstantSourceNode.start(t),
                null !== this._constantSourceNodeRenderer &&
                  (this._constantSourceNodeRenderer.start = t),
                "closed" !== this.context.state)
              ) {
                oA(this);
                let e = () => {
                  this._nativeConstantSourceNode.removeEventListener(
                    "ended",
                    e,
                  ),
                    oV(this) && ok(this);
                };
                this._nativeConstantSourceNode.addEventListener("ended", e);
              }
            }
            stop(t = 0) {
              this._nativeConstantSourceNode.stop(t),
                null !== this._constantSourceNodeRenderer &&
                  (this._constantSourceNodeRenderer.stop = t);
            }
          }),
        hm = (t, e) => {
          let n = t.createConvolver();
          if (
            (lz(n, e),
            e.disableNormalization === n.normalize &&
              (n.normalize = !e.disableNormalization),
            lB(n, e, "buffer"),
            e.channelCount > 2 ||
              (uf(
                n,
                "channelCount",
                (t) => () => t.call(n),
                (t) => (e) => {
                  if (e > 2) throw us();
                  return t.call(n, e);
                },
              ),
              "max" === e.channelCountMode))
          )
            throw us();
          return (
            uf(
              n,
              "channelCountMode",
              (t) => () => t.call(n),
              (t) => (e) => {
                if ("max" === e) throw us();
                return t.call(n, e);
              },
            ),
            n
          );
        },
        h_ = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  buffer: i.buffer,
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  disableNormalization: !i.normalize,
                };
                i = hm(n, r);
              }
              return (
                t.set(n, i),
                o0(i) ? await uF(e, n, i.inputs[0]) : await uF(e, n, i),
                i
              );
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        hg =
          ((nd = uX),
          class extends nd {
            constructor(t, e) {
              let n = uL(t),
                i = { ...lA, ...e },
                s = hm(n, i),
                r = uB(n),
                a = r ? h_() : null;
              super(t, !1, s, a),
                (this._isBufferNullified = !1),
                (this._nativeConvolverNode = s),
                null !== i.buffer && hn(this, i.buffer.duration);
            }
            get buffer() {
              return this._isBufferNullified
                ? null
                : this._nativeConvolverNode.buffer;
            }
            set buffer(t) {
              if (
                ((this._nativeConvolverNode.buffer = t),
                null === t && null !== this._nativeConvolverNode.buffer)
              ) {
                let e = this._nativeConvolverNode.context;
                (this._nativeConvolverNode.buffer = e.createBuffer(
                  1,
                  1,
                  e.sampleRate,
                )),
                  (this._isBufferNullified = !0),
                  hn(this, 0);
              } else
                (this._isBufferNullified = !1),
                  hn(
                    this,
                    null === this._nativeConvolverNode.buffer
                      ? 0
                      : this._nativeConvolverNode.buffer.duration,
                  );
            }
            get normalize() {
              return this._nativeConvolverNode.normalize;
            }
            set normalize(t) {
              this._nativeConvolverNode.normalize = t;
            }
          }),
        hv = (t) => {
          let e = new WeakMap(),
            n = async (n, i) => {
              let s = o5(n),
                r = oE(s, i);
              if (!r) {
                let a = {
                  channelCount: s.channelCount,
                  channelCountMode: s.channelCountMode,
                  channelInterpretation: s.channelInterpretation,
                  delayTime: s.delayTime.value,
                  maxDelayTime: t,
                };
                s = l4(i, a);
              }
              return (
                e.set(i, s),
                r
                  ? await u8(i, n.delayTime, s.delayTime)
                  : await u6(i, n.delayTime, s.delayTime),
                await uF(n, i, s),
                s
              );
            };
          return {
            render(t, i) {
              let s = e.get(i);
              return void 0 !== s ? Promise.resolve(s) : n(t, i);
            },
          };
        },
        hy =
          ((nb = uX),
          class extends nb {
            constructor(t, e) {
              let n = uL(t),
                i = { ...lO, ...e },
                s = l4(n, i),
                r = uB(n),
                a = r ? hv(i.maxDelayTime) : null;
              super(t, !1, s, a),
                (this._delayTime = u7(this, r, s.delayTime)),
                hn(this, i.maxDelayTime);
            }
            get delayTime() {
              return this._delayTime;
            }
          }),
        hw = (t, e) => {
          let n = t.createDynamicsCompressor();
          if ((lz(n, e), e.channelCount > 2 || "max" === e.channelCountMode))
            throw us();
          return (
            lZ(n, e, "attack"),
            lZ(n, e, "knee"),
            lZ(n, e, "ratio"),
            lZ(n, e, "release"),
            lZ(n, e, "threshold"),
            n
          );
        },
        hx = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  attack: i.attack.value,
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  knee: i.knee.value,
                  ratio: i.ratio.value,
                  release: i.release.value,
                  threshold: i.threshold.value,
                };
                i = hw(n, r);
              }
              return (
                t.set(n, i),
                s
                  ? (await u8(n, e.attack, i.attack),
                    await u8(n, e.knee, i.knee),
                    await u8(n, e.ratio, i.ratio),
                    await u8(n, e.release, i.release),
                    await u8(n, e.threshold, i.threshold))
                  : (await u6(n, e.attack, i.attack),
                    await u6(n, e.knee, i.knee),
                    await u6(n, e.ratio, i.ratio),
                    await u6(n, e.release, i.release),
                    await u6(n, e.threshold, i.threshold)),
                await uF(e, n, i),
                i
              );
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        hT =
          ((nV = uX),
          class extends nV {
            constructor(t, e) {
              let n = uL(t),
                i = { ...lI, ...e },
                s = hw(n, i),
                r = uB(n),
                a = r ? hx() : null;
              super(t, !1, s, a),
                (this._attack = u7(this, r, s.attack)),
                (this._knee = u7(this, r, s.knee)),
                (this._nativeDynamicsCompressorNode = s),
                (this._ratio = u7(this, r, s.ratio)),
                (this._release = u7(this, r, s.release)),
                (this._threshold = u7(this, r, s.threshold)),
                hn(this, 0.006);
            }
            get attack() {
              return this._attack;
            }
            get channelCount() {
              return this._nativeDynamicsCompressorNode.channelCount;
            }
            set channelCount(t) {
              let e = this._nativeDynamicsCompressorNode.channelCount;
              if (
                ((this._nativeDynamicsCompressorNode.channelCount = t), t > 2)
              )
                throw (
                  ((this._nativeDynamicsCompressorNode.channelCount = e), us())
                );
            }
            get channelCountMode() {
              return this._nativeDynamicsCompressorNode.channelCountMode;
            }
            set channelCountMode(t) {
              let e = this._nativeDynamicsCompressorNode.channelCountMode;
              if (
                ((this._nativeDynamicsCompressorNode.channelCountMode = t),
                "max" === t)
              )
                throw (
                  ((this._nativeDynamicsCompressorNode.channelCountMode = e),
                  us())
                );
            }
            get knee() {
              return this._knee;
            }
            get ratio() {
              return this._ratio;
            }
            get reduction() {
              return "number" ==
                typeof this._nativeDynamicsCompressorNode.reduction.value
                ? this._nativeDynamicsCompressorNode.reduction.value
                : this._nativeDynamicsCompressorNode.reduction;
            }
            get release() {
              return this._release;
            }
            get threshold() {
              return this._threshold;
            }
          }),
        hb = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  gain: i.gain.value,
                };
                i = l6(n, r);
              }
              return (
                t.set(n, i),
                s ? await u8(n, e.gain, i.gain) : await u6(n, e.gain, i.gain),
                await uF(e, n, i),
                i
              );
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        hC =
          ((nX = uX),
          class extends nX {
            constructor(t, e) {
              let n = uL(t),
                i = { ...lR, ...e },
                s = l6(n, i),
                r = uB(n),
                a = r ? hb() : null;
              super(t, !1, s, a),
                (this._gain = u7(
                  this,
                  r,
                  s.gain,
                  34028234663852886e22,
                  -34028234663852886e22,
                ));
            }
            get gain() {
              return this._gain;
            }
          }),
        hA = (
          t,
          e,
          {
            channelCount: n,
            channelCountMode: i,
            channelInterpretation: s,
            feedback: r,
            feedforward: a,
          },
        ) => {
          let o = lQ(e, t.sampleRate),
            l = r instanceof Float64Array ? r : new Float64Array(r),
            u = a instanceof Float64Array ? a : new Float64Array(a),
            h = l.length,
            c = u.length,
            d = Math.min(h, c);
          if (0 === h || h > 20) throw us();
          if (0 === l[0]) throw lN();
          if (0 === c || c > 20) throw us();
          if (0 === u[0]) throw lN();
          if (1 !== l[0]) {
            for (let p = 0; p < c; p += 1) u[p] /= l[0];
            for (let f = 1; f < h; f += 1) l[f] /= l[0];
          }
          let m = ui(t, o, n, n);
          (m.channelCount = n),
            (m.channelCountMode = i),
            (m.channelInterpretation = s);
          let g = [],
            v = [],
            y = [];
          for (let w = 0; w < n; w += 1) {
            g.push(0);
            let x = new Float32Array(32),
              T = new Float32Array(32);
            x.fill(0), T.fill(0), v.push(x), y.push(T);
          }
          m.onaudioprocess = (t) => {
            let e = t.inputBuffer,
              n = t.outputBuffer,
              i = e.numberOfChannels;
            for (let s = 0; s < i; s += 1) {
              let r = e.getChannelData(s),
                a = n.getChannelData(s);
              g[s] = lF(l, h, u, c, d, v[s], y[s], g[s], 32, r, a);
            }
          };
          let b = t.sampleRate / 2;
          return l8(
            {
              get bufferSize() {
                return o;
              },
              get channelCount() {
                return m.channelCount;
              },
              set channelCount(value) {
                m.channelCount = value;
              },
              get channelCountMode() {
                return m.channelCountMode;
              },
              set channelCountMode(value) {
                m.channelCountMode = value;
              },
              get channelInterpretation() {
                return m.channelInterpretation;
              },
              set channelInterpretation(value) {
                m.channelInterpretation = value;
              },
              get context() {
                return m.context;
              },
              get inputs() {
                return [m];
              },
              get numberOfInputs() {
                return m.numberOfInputs;
              },
              get numberOfOutputs() {
                return m.numberOfOutputs;
              },
              addEventListener: (...t) => m.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => m.dispatchEvent(t[0]),
              getFrequencyResponse(t, e, n) {
                if (t.length !== e.length || e.length !== n.length) throw lV();
                let i = t.length;
                for (let s = 0; s < i; s += 1) {
                  let r = -Math.PI * (t[s] / b),
                    a = [Math.cos(r), Math.sin(r)],
                    o = l9(u, a),
                    h = l9(l, a),
                    c = l5(o, h);
                  (e[s] = Math.sqrt(c[0] * c[0] + c[1] * c[1])),
                    (n[s] = Math.atan2(c[1], c[0]));
                }
              },
              removeEventListener: (...t) =>
                m.removeEventListener(t[0], t[1], t[2]),
            },
            m,
          );
        },
        hS =
          ((n5 = () => {
            if (null === uW) return Promise.resolve(!1);
            let t = new uW(1, 1, 44100),
              e = l6(t, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0,
              });
            return new Promise((n) => {
              (t.oncomplete = () => {
                e.disconnect(), n(0 !== t.currentTime);
              }),
                t.startRendering();
            });
          }),
          (t) =>
            uN(lW, () => lW(t))
              ? Promise.resolve(uN(n5, n5)).then((e) => {
                  if (!e) {
                    let n = ui(t, 512, 0, 1);
                    (t.oncomplete = () => {
                      (n.onaudioprocess = null), n.disconnect();
                    }),
                      (n.onaudioprocess = () => t.currentTime),
                      n.connect(t.destination);
                  }
                  return t.startRendering();
                })
              : new Promise((e) => {
                  let n = l6(t, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0,
                  });
                  (t.oncomplete = (t) => {
                    n.disconnect(), e(t.renderedBuffer);
                  }),
                    n.connect(t.destination),
                    t.startRendering();
                })),
        hk = (t, e) => {
          let n = new WeakMap(),
            i = null,
            s = async (s, r) => {
              let a = null,
                o = o5(s),
                l = oE(o, r);
              if (
                (void 0 === r.createIIRFilter
                  ? (a = u4(r, {
                      buffer: null,
                      channelCount: 2,
                      channelCountMode: "max",
                      channelInterpretation: "speakers",
                      loop: !1,
                      loopEnd: 0,
                      loopStart: 0,
                      playbackRate: 1,
                    }))
                  : l || (o = r.createIIRFilter(e, t)),
                n.set(r, null === a ? o : a),
                null !== a)
              ) {
                if (null === i) {
                  if (null === uW)
                    throw Error(
                      "Missing the native OfflineAudioContext constructor.",
                    );
                  let u = new uW(
                    s.context.destination.channelCount,
                    s.context.length,
                    r.sampleRate,
                  );
                  i = (async () => {
                    await uF(s, u, u.destination);
                    let n = await hS(u);
                    return lj(n, r, t, e);
                  })();
                }
                let h = await i;
                return (a.buffer = h), a.start(0), a;
              }
              return await uF(s, r, o), o;
            };
          return {
            render(t, e) {
              let i = n.get(e);
              return void 0 !== i ? Promise.resolve(i) : s(t, e);
            },
          };
        },
        hO = (t, e, n) => {
          if (void 0 === t.createIIRFilter) return hA(t, e, n);
          let i = t.createIIRFilter(n.feedforward, n.feedback);
          return lz(i, n), i;
        },
        hM =
          ((ir = uX),
          class extends ir {
            constructor(t, e) {
              let n = uL(t),
                i = uB(n),
                s = { ...lq, ...e },
                r = hO(n, i ? null : t.baseLatency, s),
                a = i ? hk(s.feedback, s.feedforward) : null;
              super(t, !1, r, a),
                lP(r),
                (this._nativeIIRFilterNode = r),
                hn(this, 1);
            }
            getFrequencyResponse(t, e, n) {
              return this._nativeIIRFilterNode.getFrequencyResponse(t, e, n);
            }
          }),
        hE = (t, e) => {
          let n = e.listener,
            {
              forwardX: i,
              forwardY: s,
              forwardZ: r,
              positionX: a,
              positionY: o,
              positionZ: l,
              upX: u,
              upY: h,
              upZ: c,
            } = void 0 === n.forwardX
              ? (() => {
                  let i = new Float32Array(1),
                    s = ha(e, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "speakers",
                      numberOfInputs: 9,
                    }),
                    r = uB(e),
                    a = !1,
                    o = [0, 0, -1, 0, 1, 0],
                    l = [0, 0, 0],
                    u = () => {
                      if (a) return;
                      a = !0;
                      let t = ui(e, 256, 9, 0);
                      (t.onaudioprocess = ({ inputBuffer: t }) => {
                        let e = [
                          ud(t, i, 0),
                          ud(t, i, 1),
                          ud(t, i, 2),
                          ud(t, i, 3),
                          ud(t, i, 4),
                          ud(t, i, 5),
                        ];
                        e.some((t, e) => t !== o[e]) &&
                          (n.setOrientation(...e), (o = e));
                        let s = [ud(t, i, 6), ud(t, i, 7), ud(t, i, 8)];
                        s.some((t, e) => t !== l[e]) &&
                          (n.setPosition(...s), (l = s));
                      }),
                        s.connect(t);
                    },
                    h = (t) => (e) => {
                      e !== o[t] && ((o[t] = e), n.setOrientation(...o));
                    },
                    c = (t) => (e) => {
                      e !== l[t] && ((l[t] = e), n.setPosition(...l));
                    },
                    d = (n, i, a) => {
                      var o, l, h, c, d, p, f;
                      let m = hd(e, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        offset: i,
                      });
                      m.connect(s, 0, n),
                        m.start(),
                        Object.defineProperty(m.offset, "defaultValue", {
                          get: () => i,
                        });
                      let g = u7(
                        { context: t },
                        r,
                        m.offset,
                        34028234663852886e22,
                        -34028234663852886e22,
                      );
                      return (
                        uf(
                          g,
                          "value",
                          (t) => () => t.call(g),
                          (t) => (e) => {
                            try {
                              t.call(g, e);
                            } catch (n) {
                              if (9 !== n.code) throw n;
                            }
                            u(), r && a(e);
                          },
                        ),
                        (g.cancelAndHoldAtTime =
                          ((o = g.cancelAndHoldAtTime),
                          r
                            ? () => {
                                throw us();
                              }
                            : (...t) => {
                                let e = o.apply(g, t);
                                return u(), e;
                              })),
                        (g.cancelScheduledValues =
                          ((l = g.cancelScheduledValues),
                          r
                            ? () => {
                                throw us();
                              }
                            : (...t) => {
                                let e = l.apply(g, t);
                                return u(), e;
                              })),
                        (g.exponentialRampToValueAtTime =
                          ((h = g.exponentialRampToValueAtTime),
                          r
                            ? () => {
                                throw us();
                              }
                            : (...t) => {
                                let e = h.apply(g, t);
                                return u(), e;
                              })),
                        (g.linearRampToValueAtTime =
                          ((c = g.linearRampToValueAtTime),
                          r
                            ? () => {
                                throw us();
                              }
                            : (...t) => {
                                let e = c.apply(g, t);
                                return u(), e;
                              })),
                        (g.setTargetAtTime =
                          ((d = g.setTargetAtTime),
                          r
                            ? () => {
                                throw us();
                              }
                            : (...t) => {
                                let e = d.apply(g, t);
                                return u(), e;
                              })),
                        (g.setValueAtTime =
                          ((p = g.setValueAtTime),
                          r
                            ? () => {
                                throw us();
                              }
                            : (...t) => {
                                let e = p.apply(g, t);
                                return u(), e;
                              })),
                        (g.setValueCurveAtTime =
                          ((f = g.setValueCurveAtTime),
                          r
                            ? () => {
                                throw us();
                              }
                            : (...t) => {
                                let e = f.apply(g, t);
                                return u(), e;
                              })),
                        g
                      );
                    };
                  return {
                    forwardX: d(0, 0, h(0)),
                    forwardY: d(1, 0, h(1)),
                    forwardZ: d(2, -1, h(2)),
                    positionX: d(6, 0, c(0)),
                    positionY: d(7, 0, c(1)),
                    positionZ: d(8, 0, c(2)),
                    upX: d(3, 0, h(3)),
                    upY: d(4, 1, h(4)),
                    upZ: d(5, 0, h(5)),
                  };
                })()
              : n;
          return {
            get forwardX() {
              return i;
            },
            get forwardY() {
              return s;
            },
            get forwardZ() {
              return r;
            },
            get positionX() {
              return a;
            },
            get positionY() {
              return o;
            },
            get positionZ() {
              return l;
            },
            get upX() {
              return u;
            },
            get upY() {
              return h;
            },
            get upZ() {
              return c;
            },
          };
        },
        hI = new WeakMap(),
        hD =
          ((ix = uU),
          class extends ix {
            constructor(t, e) {
              super(t),
                (this._nativeContext = t),
                oh.set(this, t),
                uB(t) && hI.set(t, new Set()),
                (this._destination = new ht(this, e)),
                (this._listener = hE(this, t)),
                (this._onstatechange = null);
            }
            get currentTime() {
              return this._nativeContext.currentTime;
            }
            get destination() {
              return this._destination;
            }
            get listener() {
              return this._listener;
            }
            get onstatechange() {
              return this._onstatechange;
            }
            set onstatechange(t) {
              let e = "function" == typeof t ? uO(this, t) : null;
              this._nativeContext.onstatechange = e;
              let n = this._nativeContext.onstatechange;
              this._onstatechange = null !== n && n === e ? t : n;
            }
            get sampleRate() {
              return this._nativeContext.sampleRate;
            }
            get state() {
              return this._nativeContext.state;
            }
          }),
        hR = (t, e) => {
          let n = t.createOscillator();
          return (
            lz(n, e),
            lZ(n, e, "detune"),
            lZ(n, e, "frequency"),
            void 0 !== e.periodicWave
              ? n.setPeriodicWave(e.periodicWave)
              : lB(n, e, "type"),
            uN(uT, () => uT(t)) || lY(n),
            uN(ub, () => ub(t)) || uk(n, t),
            uN(uC, () => uC(t)) || lH(n),
            u2(t, n),
            n
          );
        },
        hN = () => {
          let t = new WeakMap(),
            e = null,
            n = null,
            i = null,
            s = async (s, r) => {
              let a = o5(s),
                o = oE(a, r);
              if (!o) {
                let l = {
                  channelCount: a.channelCount,
                  channelCountMode: a.channelCountMode,
                  channelInterpretation: a.channelInterpretation,
                  detune: a.detune.value,
                  frequency: a.frequency.value,
                  periodicWave: null === e ? void 0 : e,
                  type: a.type,
                };
                (a = hR(r, l)),
                  null !== n && a.start(n),
                  null !== i && a.stop(i);
              }
              return (
                t.set(r, a),
                o
                  ? (await u8(r, s.detune, a.detune),
                    await u8(r, s.frequency, a.frequency))
                  : (await u6(r, s.detune, a.detune),
                    await u6(r, s.frequency, a.frequency)),
                await uF(s, r, a),
                a
              );
            };
          return {
            set periodicWave(value) {
              e = value;
            },
            set start(value) {
              n = value;
            },
            set stop(value) {
              i = value;
            },
            render(e, n) {
              let i = t.get(n);
              return void 0 !== i ? Promise.resolve(i) : s(e, n);
            },
          };
        },
        hV =
          ((iV = uX),
          class extends iV {
            constructor(t, e) {
              let n = uL(t),
                i = { ...ua, ...e },
                s = hR(n, i),
                r = uB(n),
                a = r ? hN() : null,
                o = t.sampleRate / 2;
              super(t, !1, s, a),
                (this._detune = u7(this, r, s.detune, 153600, -153600)),
                (this._frequency = u7(this, r, s.frequency, o, -o)),
                (this._nativeOscillatorNode = s),
                (this._onended = null),
                (this._oscillatorNodeRenderer = a),
                null !== this._oscillatorNodeRenderer &&
                  void 0 !== i.periodicWave &&
                  (this._oscillatorNodeRenderer.periodicWave = i.periodicWave);
            }
            get detune() {
              return this._detune;
            }
            get frequency() {
              return this._frequency;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              let e = "function" == typeof t ? uO(this, t) : null;
              this._nativeOscillatorNode.onended = e;
              let n = this._nativeOscillatorNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            get type() {
              return this._nativeOscillatorNode.type;
            }
            set type(t) {
              (this._nativeOscillatorNode.type = t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.periodicWave = null);
            }
            setPeriodicWave(t) {
              this._nativeOscillatorNode.setPeriodicWave(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.periodicWave = t);
            }
            start(t = 0) {
              if (
                (this._nativeOscillatorNode.start(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.start = t),
                "closed" !== this.context.state)
              ) {
                oA(this);
                let e = () => {
                  this._nativeOscillatorNode.removeEventListener("ended", e),
                    oV(this) && ok(this);
                };
                this._nativeOscillatorNode.addEventListener("ended", e);
              }
            }
            stop(t = 0) {
              this._nativeOscillatorNode.stop(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.stop = t);
            }
          }),
        hP = (t, e) => {
          let n = u4(t, {
              buffer: null,
              channelCount: 2,
              channelCountMode: "max",
              channelInterpretation: "speakers",
              loop: !1,
              loopEnd: 0,
              loopStart: 0,
              playbackRate: 1,
            }),
            i = t.createBuffer(1, 2, 44100);
          return (
            (n.buffer = i),
            (n.loop = !0),
            n.connect(e),
            n.start(),
            () => {
              n.stop(), n.disconnect(e);
            }
          );
        },
        hq = (t, { curve: e, oversample: n, ...i }) => {
          let s = t.createWaveShaper(),
            r = t.createWaveShaper();
          lz(s, i), lz(r, i);
          let a = l6(t, { ...i, gain: 1 }),
            o = l6(t, { ...i, gain: -1 }),
            l = l6(t, { ...i, gain: 1 }),
            u = l6(t, { ...i, gain: -1 }),
            h = null,
            c = !1,
            d = null,
            p = {
              get bufferSize() {
                return;
              },
              get channelCount() {
                return s.channelCount;
              },
              set channelCount(value) {
                (a.channelCount = value),
                  (o.channelCount = value),
                  (s.channelCount = value),
                  (l.channelCount = value),
                  (r.channelCount = value),
                  (u.channelCount = value);
              },
              get channelCountMode() {
                return s.channelCountMode;
              },
              set channelCountMode(value) {
                (a.channelCountMode = value),
                  (o.channelCountMode = value),
                  (s.channelCountMode = value),
                  (l.channelCountMode = value),
                  (r.channelCountMode = value),
                  (u.channelCountMode = value);
              },
              get channelInterpretation() {
                return s.channelInterpretation;
              },
              set channelInterpretation(value) {
                (a.channelInterpretation = value),
                  (o.channelInterpretation = value),
                  (s.channelInterpretation = value),
                  (l.channelInterpretation = value),
                  (r.channelInterpretation = value),
                  (u.channelInterpretation = value);
              },
              get context() {
                return s.context;
              },
              get curve() {
                return d;
              },
              set curve(value) {
                if (null !== value && value.length < 2) throw lN();
                if (null === value) (s.curve = value), (r.curve = value);
                else {
                  let f = value.length,
                    m = new Float32Array(f + 2 - (f % 2)),
                    g = new Float32Array(f + 2 - (f % 2));
                  (m[0] = value[0]), (g[0] = -value[f - 1]);
                  let v = Math.ceil((f + 1) / 2),
                    y = (f + 1) / 2 - 1;
                  for (let w = 1; w < v; w += 1) {
                    let x = (w / v) * y,
                      T = Math.floor(x),
                      b = Math.ceil(x);
                    (m[w] =
                      T === b
                        ? value[T]
                        : (1 - (x - T)) * value[T] + (1 - (b - x)) * value[b]),
                      (g[w] =
                        T === b
                          ? -value[f - 1 - T]
                          : -((1 - (x - T)) * value[f - 1 - T]) -
                            (1 - (b - x)) * value[f - 1 - b]);
                  }
                  (m[v] =
                    f % 2 == 1
                      ? value[v - 1]
                      : (value[v - 2] + value[v - 1]) / 2),
                    (s.curve = m),
                    (r.curve = g);
                }
                (d = value),
                  c &&
                    (up(d) && null === h
                      ? (h = hP(t, a))
                      : null !== h && (h(), (h = null)));
              },
              get inputs() {
                return [a];
              },
              get numberOfInputs() {
                return s.numberOfInputs;
              },
              get numberOfOutputs() {
                return s.numberOfOutputs;
              },
              get oversample() {
                return s.oversample;
              },
              set oversample(value) {
                (s.oversample = value), (r.oversample = value);
              },
              addEventListener: (...t) => a.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => a.dispatchEvent(t[0]),
              removeEventListener: (...t) =>
                a.removeEventListener(t[0], t[1], t[2]),
            };
          null !== e &&
            (p.curve = e instanceof Float32Array ? e : new Float32Array(e)),
            n !== p.oversample && (p.oversample = n);
          let C = () => {
              a.connect(s).connect(l),
                a.connect(o).connect(r).connect(u).connect(l),
                (c = !0),
                up(d) && (h = hP(t, a));
            },
            A = () => {
              a.disconnect(s),
                s.disconnect(l),
                a.disconnect(o),
                o.disconnect(r),
                r.disconnect(u),
                u.disconnect(l),
                (c = !1),
                null !== h && (h(), (h = null));
            };
          return hs(l8(p, l), C, A);
        },
        hF = (t, e) => {
          let n = t.createWaveShaper();
          if (
            null !== uG &&
            "webkitAudioContext" === uG.name &&
            void 0 === t.createGain().gain.automationRate
          )
            return hq(t, e);
          lz(n, e);
          let i =
            null === e.curve || e.curve instanceof Float32Array
              ? e.curve
              : new Float32Array(e.curve);
          if (null !== i && i.length < 2) throw lN();
          lB(n, { curve: i }, "curve"), lB(n, e, "oversample");
          let s = null,
            r = !1;
          uf(
            n,
            "curve",
            (t) => () => t.call(n),
            (e) => (i) => (
              e.call(n, i),
              r &&
                (up(i) && null === s
                  ? (s = hP(t, n))
                  : up(i) || null === s || (s(), (s = null))),
              i
            ),
          );
          let a = () => {
              (r = !0), up(n.curve) && (s = hP(t, n));
            },
            o = () => {
              (r = !1), null !== s && (s(), (s = null));
            };
          return hs(n, a, o);
        },
        hj = (
          t,
          {
            coneInnerAngle: e,
            coneOuterAngle: n,
            coneOuterGain: i,
            distanceModel: s,
            maxDistance: r,
            orientationX: a,
            orientationY: o,
            orientationZ: l,
            panningModel: u,
            positionX: h,
            positionY: c,
            positionZ: d,
            refDistance: p,
            rolloffFactor: f,
            ...m
          },
        ) => {
          let g = t.createPanner();
          if (m.channelCount > 2 || "max" === m.channelCountMode) throw us();
          lz(g, m);
          let v = {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
            },
            y = ha(t, {
              ...v,
              channelInterpretation: "speakers",
              numberOfInputs: 6,
            }),
            w = l6(t, { ...m, gain: 1 }),
            x = l6(t, { ...v, gain: 1 }),
            T = l6(t, { ...v, gain: 0 }),
            b = l6(t, { ...v, gain: 0 }),
            C = l6(t, { ...v, gain: 0 }),
            A = l6(t, { ...v, gain: 0 }),
            S = l6(t, { ...v, gain: 0 }),
            k = ui(t, 256, 6, 1),
            O = hF(t, {
              ...v,
              curve: new Float32Array([1, 1]),
              oversample: "none",
            }),
            M = [a, o, l],
            E = [h, c, d],
            I = new Float32Array(1);
          (k.onaudioprocess = ({ inputBuffer: t }) => {
            let e = [ud(t, I, 0), ud(t, I, 1), ud(t, I, 2)];
            e.some((t, e) => t !== M[e]) && (g.setOrientation(...e), (M = e));
            let n = [ud(t, I, 3), ud(t, I, 4), ud(t, I, 5)];
            n.some((t, e) => t !== E[e]) && (g.setPosition(...n), (E = n));
          }),
            Object.defineProperty(T.gain, "defaultValue", { get: () => 0 }),
            Object.defineProperty(b.gain, "defaultValue", { get: () => 0 }),
            Object.defineProperty(C.gain, "defaultValue", { get: () => 0 }),
            Object.defineProperty(A.gain, "defaultValue", { get: () => 0 }),
            Object.defineProperty(S.gain, "defaultValue", { get: () => 0 });
          let D = {
            get bufferSize() {
              return;
            },
            get channelCount() {
              return g.channelCount;
            },
            set channelCount(value) {
              if (value > 2) throw us();
              (w.channelCount = value), (g.channelCount = value);
            },
            get channelCountMode() {
              return g.channelCountMode;
            },
            set channelCountMode(value) {
              if ("max" === value) throw us();
              (w.channelCountMode = value), (g.channelCountMode = value);
            },
            get channelInterpretation() {
              return g.channelInterpretation;
            },
            set channelInterpretation(value) {
              (w.channelInterpretation = value),
                (g.channelInterpretation = value);
            },
            get coneInnerAngle() {
              return g.coneInnerAngle;
            },
            set coneInnerAngle(value) {
              g.coneInnerAngle = value;
            },
            get coneOuterAngle() {
              return g.coneOuterAngle;
            },
            set coneOuterAngle(value) {
              g.coneOuterAngle = value;
            },
            get coneOuterGain() {
              return g.coneOuterGain;
            },
            set coneOuterGain(value) {
              if (value < 0 || value > 1) throw lN();
              g.coneOuterGain = value;
            },
            get context() {
              return g.context;
            },
            get distanceModel() {
              return g.distanceModel;
            },
            set distanceModel(value) {
              g.distanceModel = value;
            },
            get inputs() {
              return [w];
            },
            get maxDistance() {
              return g.maxDistance;
            },
            set maxDistance(value) {
              if (value < 0) throw RangeError();
              g.maxDistance = value;
            },
            get numberOfInputs() {
              return g.numberOfInputs;
            },
            get numberOfOutputs() {
              return g.numberOfOutputs;
            },
            get orientationX() {
              return x.gain;
            },
            get orientationY() {
              return T.gain;
            },
            get orientationZ() {
              return b.gain;
            },
            get panningModel() {
              return g.panningModel;
            },
            set panningModel(value) {
              g.panningModel = value;
            },
            get positionX() {
              return C.gain;
            },
            get positionY() {
              return A.gain;
            },
            get positionZ() {
              return S.gain;
            },
            get refDistance() {
              return g.refDistance;
            },
            set refDistance(value) {
              if (value < 0) throw RangeError();
              g.refDistance = value;
            },
            get rolloffFactor() {
              return g.rolloffFactor;
            },
            set rolloffFactor(value) {
              if (value < 0) throw RangeError();
              g.rolloffFactor = value;
            },
            addEventListener: (...t) => w.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => w.dispatchEvent(t[0]),
            removeEventListener: (...t) =>
              w.removeEventListener(t[0], t[1], t[2]),
          };
          e !== D.coneInnerAngle && (D.coneInnerAngle = e),
            n !== D.coneOuterAngle && (D.coneOuterAngle = n),
            i !== D.coneOuterGain && (D.coneOuterGain = i),
            s !== D.distanceModel && (D.distanceModel = s),
            r !== D.maxDistance && (D.maxDistance = r),
            a !== D.orientationX.value && (D.orientationX.value = a),
            o !== D.orientationY.value && (D.orientationY.value = o),
            l !== D.orientationZ.value && (D.orientationZ.value = l),
            u !== D.panningModel && (D.panningModel = u),
            h !== D.positionX.value && (D.positionX.value = h),
            c !== D.positionY.value && (D.positionY.value = c),
            d !== D.positionZ.value && (D.positionZ.value = d),
            p !== D.refDistance && (D.refDistance = p),
            f !== D.rolloffFactor && (D.rolloffFactor = f),
            (1 !== M[0] || 0 !== M[1] || 0 !== M[2]) && g.setOrientation(...M),
            (0 !== E[0] || 0 !== E[1] || 0 !== E[2]) && g.setPosition(...E);
          let R = () => {
              w.connect(g),
                o1(w, O, 0, 0),
                O.connect(x).connect(y, 0, 0),
                O.connect(T).connect(y, 0, 1),
                O.connect(b).connect(y, 0, 2),
                O.connect(C).connect(y, 0, 3),
                O.connect(A).connect(y, 0, 4),
                O.connect(S).connect(y, 0, 5),
                y.connect(k).connect(t.destination);
            },
            N = () => {
              w.disconnect(g),
                o6(w, O, 0, 0),
                O.disconnect(x),
                x.disconnect(y),
                O.disconnect(T),
                T.disconnect(y),
                O.disconnect(b),
                b.disconnect(y),
                O.disconnect(C),
                C.disconnect(y),
                O.disconnect(A),
                A.disconnect(y),
                O.disconnect(S),
                S.disconnect(y),
                y.disconnect(k),
                k.disconnect(t.destination);
            };
          return hs(l8(D, g), R, N);
        },
        hL = (t, e) => {
          let n = t.createPanner();
          return void 0 === n.orientationX
            ? hj(t, e)
            : (lz(n, e),
              lZ(n, e, "orientationX"),
              lZ(n, e, "orientationY"),
              lZ(n, e, "orientationZ"),
              lZ(n, e, "positionX"),
              lZ(n, e, "positionY"),
              lZ(n, e, "positionZ"),
              lB(n, e, "coneInnerAngle"),
              lB(n, e, "coneOuterAngle"),
              lB(n, e, "coneOuterGain"),
              lB(n, e, "distanceModel"),
              lB(n, e, "maxDistance"),
              lB(n, e, "panningModel"),
              lB(n, e, "refDistance"),
              lB(n, e, "rolloffFactor"),
              n);
        },
        hW = () => {
          let t = new WeakMap(),
            e = null,
            n = async (n, i) => {
              let s = null,
                r = o5(n),
                a = {
                  channelCount: r.channelCount,
                  channelCountMode: r.channelCountMode,
                  channelInterpretation: r.channelInterpretation,
                },
                o = {
                  ...a,
                  coneInnerAngle: r.coneInnerAngle,
                  coneOuterAngle: r.coneOuterAngle,
                  coneOuterGain: r.coneOuterGain,
                  distanceModel: r.distanceModel,
                  maxDistance: r.maxDistance,
                  panningModel: r.panningModel,
                  refDistance: r.refDistance,
                  rolloffFactor: r.rolloffFactor,
                },
                l = oE(r, i);
              if ("bufferSize" in r) s = l6(i, { ...a, gain: 1 });
              else if (!l) {
                let u = {
                  ...o,
                  orientationX: r.orientationX.value,
                  orientationY: r.orientationY.value,
                  orientationZ: r.orientationZ.value,
                  positionX: r.positionX.value,
                  positionY: r.positionY.value,
                  positionZ: r.positionZ.value,
                };
                r = hL(i, u);
              }
              if ((t.set(i, null === s ? r : s), null !== s)) {
                if (null === e) {
                  if (null === uW)
                    throw Error(
                      "Missing the native OfflineAudioContext constructor.",
                    );
                  let h = new uW(6, n.context.length, i.sampleRate),
                    c = ha(h, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "speakers",
                      numberOfInputs: 6,
                    });
                  c.connect(h.destination),
                    (e = (async () => {
                      let t = await Promise.all(
                        [
                          n.orientationX,
                          n.orientationY,
                          n.orientationZ,
                          n.positionX,
                          n.positionY,
                          n.positionZ,
                        ].map(async (t, e) => {
                          let n = hd(h, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: 0 === e ? 1 : 0,
                          });
                          return await u6(h, t, n.offset), n;
                        }),
                      );
                      for (let e = 0; e < 6; e += 1)
                        t[e].connect(c, 0, e), t[e].start(0);
                      return hS(h);
                    })());
                }
                let d = await e,
                  p = l6(i, { ...a, gain: 1 });
                await uF(n, i, p);
                let f = [];
                for (let m = 0; m < d.numberOfChannels; m += 1)
                  f.push(d.getChannelData(m));
                let g = [f[0][0], f[1][0], f[2][0]],
                  v = [f[3][0], f[4][0], f[5][0]],
                  y = l6(i, { ...a, gain: 1 }),
                  w = hL(i, {
                    ...o,
                    orientationX: g[0],
                    orientationY: g[1],
                    orientationZ: g[2],
                    positionX: v[0],
                    positionY: v[1],
                    positionZ: v[2],
                  });
                p.connect(y).connect(w.inputs[0]), w.connect(s);
                for (let x = 128; x < d.length; x += 128) {
                  let T = [f[0][x], f[1][x], f[2][x]],
                    b = [f[3][x], f[4][x], f[5][x]];
                  if (
                    T.some((t, e) => t !== g[e]) ||
                    b.some((t, e) => t !== v[e])
                  ) {
                    (g = T), (v = b);
                    let C = x / i.sampleRate;
                    y.gain.setValueAtTime(0, C),
                      (y = l6(i, { ...a, gain: 0 })),
                      (w = hL(i, {
                        ...o,
                        orientationX: g[0],
                        orientationY: g[1],
                        orientationZ: g[2],
                        positionX: v[0],
                        positionY: v[1],
                        positionZ: v[2],
                      })),
                      y.gain.setValueAtTime(1, C),
                      p.connect(y).connect(w.inputs[0]),
                      w.connect(s);
                  }
                }
                return s;
              }
              return (
                l
                  ? (await u8(i, n.orientationX, r.orientationX),
                    await u8(i, n.orientationY, r.orientationY),
                    await u8(i, n.orientationZ, r.orientationZ),
                    await u8(i, n.positionX, r.positionX),
                    await u8(i, n.positionY, r.positionY),
                    await u8(i, n.positionZ, r.positionZ))
                  : (await u6(i, n.orientationX, r.orientationX),
                    await u6(i, n.orientationY, r.orientationY),
                    await u6(i, n.orientationZ, r.orientationZ),
                    await u6(i, n.positionX, r.positionX),
                    await u6(i, n.positionY, r.positionY),
                    await u6(i, n.positionZ, r.positionZ)),
                o0(r) ? await uF(n, i, r.inputs[0]) : await uF(n, i, r),
                r
              );
            };
          return {
            render(e, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : n(e, i);
            },
          };
        },
        hB =
          ((sc = uX),
          class extends sc {
            constructor(t, e) {
              let n = uL(t),
                i = { ...uo, ...e },
                s = hL(n, i),
                r = uB(n),
                a = r ? hW() : null;
              super(t, !1, s, a),
                (this._nativePannerNode = s),
                (this._orientationX = u7(
                  this,
                  r,
                  s.orientationX,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                (this._orientationY = u7(
                  this,
                  r,
                  s.orientationY,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                (this._orientationZ = u7(
                  this,
                  r,
                  s.orientationZ,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                (this._positionX = u7(
                  this,
                  r,
                  s.positionX,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                (this._positionY = u7(
                  this,
                  r,
                  s.positionY,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                (this._positionZ = u7(
                  this,
                  r,
                  s.positionZ,
                  34028234663852886e22,
                  -34028234663852886e22,
                )),
                hn(this, 1);
            }
            get coneInnerAngle() {
              return this._nativePannerNode.coneInnerAngle;
            }
            set coneInnerAngle(t) {
              this._nativePannerNode.coneInnerAngle = t;
            }
            get coneOuterAngle() {
              return this._nativePannerNode.coneOuterAngle;
            }
            set coneOuterAngle(t) {
              this._nativePannerNode.coneOuterAngle = t;
            }
            get coneOuterGain() {
              return this._nativePannerNode.coneOuterGain;
            }
            set coneOuterGain(t) {
              this._nativePannerNode.coneOuterGain = t;
            }
            get distanceModel() {
              return this._nativePannerNode.distanceModel;
            }
            set distanceModel(t) {
              this._nativePannerNode.distanceModel = t;
            }
            get maxDistance() {
              return this._nativePannerNode.maxDistance;
            }
            set maxDistance(t) {
              this._nativePannerNode.maxDistance = t;
            }
            get orientationX() {
              return this._orientationX;
            }
            get orientationY() {
              return this._orientationY;
            }
            get orientationZ() {
              return this._orientationZ;
            }
            get panningModel() {
              return this._nativePannerNode.panningModel;
            }
            set panningModel(t) {
              this._nativePannerNode.panningModel = t;
            }
            get positionX() {
              return this._positionX;
            }
            get positionY() {
              return this._positionY;
            }
            get positionZ() {
              return this._positionZ;
            }
            get refDistance() {
              return this._nativePannerNode.refDistance;
            }
            set refDistance(t) {
              this._nativePannerNode.refDistance = t;
            }
            get rolloffFactor() {
              return this._nativePannerNode.rolloffFactor;
            }
            set rolloffFactor(t) {
              this._nativePannerNode.rolloffFactor = t;
            }
          }),
        hz = (t, { disableNormalization: e, imag: n, real: i }) => {
          let s = n instanceof Float32Array ? n : new Float32Array(n),
            r = i instanceof Float32Array ? i : new Float32Array(i),
            a = t.createPeriodicWave(r, s, { disableNormalization: e });
          if (Array.from(n).length < 2) throw oD();
          return a;
        },
        hU =
          ((sw = new WeakSet()),
          class t {
            constructor(t, e) {
              let n = uL(t),
                i = ug({ ...ul, ...e }),
                s = hz(n, i);
              return sw.add(s), s;
            }
            static [Symbol.hasInstance](e) {
              return (
                (null !== e &&
                  "object" == typeof e &&
                  Object.getPrototypeOf(e) === t.prototype) ||
                sw.has(e)
              );
            }
          }),
        hG = ((t, e, n, i, s, r) => {
          let a = new Float32Array([1, 1]),
            o = Math.PI / 2,
            l = {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
            },
            u = { ...l, oversample: "none" },
            h = (t, e, s, r) => {
              let h = new Float32Array(16385),
                c = new Float32Array(16385);
              for (let d = 0; d < 16385; d += 1) {
                let p = (d / 16384) * o;
                (h[d] = Math.cos(p)), (c[d] = Math.sin(p));
              }
              let f = n(t, { ...l, gain: 0 }),
                m = i(t, { ...u, curve: h }),
                g = i(t, { ...u, curve: a }),
                v = n(t, { ...l, gain: 0 }),
                y = i(t, { ...u, curve: c });
              return {
                connectGraph() {
                  e.connect(f),
                    e.connect(void 0 === g.inputs ? g : g.inputs[0]),
                    e.connect(v),
                    g.connect(s),
                    s.connect(void 0 === m.inputs ? m : m.inputs[0]),
                    s.connect(void 0 === y.inputs ? y : y.inputs[0]),
                    m.connect(f.gain),
                    y.connect(v.gain),
                    f.connect(r, 0, 0),
                    v.connect(r, 0, 1);
                },
                disconnectGraph() {
                  e.disconnect(f),
                    e.disconnect(void 0 === g.inputs ? g : g.inputs[0]),
                    e.disconnect(v),
                    g.disconnect(s),
                    s.disconnect(void 0 === m.inputs ? m : m.inputs[0]),
                    s.disconnect(void 0 === y.inputs ? y : y.inputs[0]),
                    m.disconnect(f.gain),
                    y.disconnect(v.gain),
                    f.disconnect(r, 0, 0),
                    v.disconnect(r, 0, 1);
                },
              };
            },
            c = (t, s, r, h) => {
              let c = new Float32Array(16385),
                d = new Float32Array(16385),
                p = new Float32Array(16385),
                f = new Float32Array(16385),
                m = Math.floor(8192.5);
              for (let g = 0; g < 16385; g += 1)
                if (g > m) {
                  let v = ((g - m) / (16384 - m)) * o;
                  (c[g] = Math.cos(v)),
                    (d[g] = Math.sin(v)),
                    (p[g] = 0),
                    (f[g] = 1);
                } else {
                  let y = (g / (16384 - m)) * o;
                  (c[g] = 1),
                    (d[g] = 0),
                    (p[g] = Math.cos(y)),
                    (f[g] = Math.sin(y));
                }
              let w = e(t, {
                  channelCount: 2,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: 2,
                }),
                x = n(t, { ...l, gain: 0 }),
                T = i(t, { ...u, curve: c }),
                b = n(t, { ...l, gain: 0 }),
                C = i(t, { ...u, curve: d }),
                A = i(t, { ...u, curve: a }),
                S = n(t, { ...l, gain: 0 }),
                k = i(t, { ...u, curve: p }),
                O = n(t, { ...l, gain: 0 }),
                M = i(t, { ...u, curve: f });
              return {
                connectGraph() {
                  s.connect(w),
                    s.connect(void 0 === A.inputs ? A : A.inputs[0]),
                    w.connect(x, 0),
                    w.connect(b, 0),
                    w.connect(S, 1),
                    w.connect(O, 1),
                    A.connect(r),
                    r.connect(void 0 === T.inputs ? T : T.inputs[0]),
                    r.connect(void 0 === C.inputs ? C : C.inputs[0]),
                    r.connect(void 0 === k.inputs ? k : k.inputs[0]),
                    r.connect(void 0 === M.inputs ? M : M.inputs[0]),
                    T.connect(x.gain),
                    C.connect(b.gain),
                    k.connect(S.gain),
                    M.connect(O.gain),
                    x.connect(h, 0, 0),
                    S.connect(h, 0, 0),
                    b.connect(h, 0, 1),
                    O.connect(h, 0, 1);
                },
                disconnectGraph() {
                  s.disconnect(w),
                    s.disconnect(void 0 === A.inputs ? A : A.inputs[0]),
                    w.disconnect(x, 0),
                    w.disconnect(b, 0),
                    w.disconnect(S, 1),
                    w.disconnect(O, 1),
                    A.disconnect(r),
                    r.disconnect(void 0 === T.inputs ? T : T.inputs[0]),
                    r.disconnect(void 0 === C.inputs ? C : C.inputs[0]),
                    r.disconnect(void 0 === k.inputs ? k : k.inputs[0]),
                    r.disconnect(void 0 === M.inputs ? M : M.inputs[0]),
                    T.disconnect(x.gain),
                    C.disconnect(b.gain),
                    k.disconnect(S.gain),
                    M.disconnect(O.gain),
                    x.disconnect(h, 0, 0),
                    S.disconnect(h, 0, 0),
                    b.disconnect(h, 0, 1),
                    O.disconnect(h, 0, 1);
                },
              };
            },
            d = (t, e, n, i, r) => {
              if (1 === e) return h(t, n, i, r);
              if (2 === e) return c(t, n, i, r);
              throw s();
            };
          return (
            e,
            { channelCount: i, channelCountMode: a, pan: o, ...l },
          ) => {
            if ("max" === a) throw s();
            let u = t(e, {
                ...l,
                channelCount: 1,
                channelCountMode: a,
                numberOfInputs: 2,
              }),
              h = n(e, { ...l, channelCount: i, channelCountMode: a, gain: 1 }),
              c = n(e, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: o,
              }),
              { connectGraph: p, disconnectGraph: f } = d(e, i, h, c, u);
            Object.defineProperty(c.gain, "defaultValue", { get: () => 0 }),
              Object.defineProperty(c.gain, "maxValue", { get: () => 1 }),
              Object.defineProperty(c.gain, "minValue", { get: () => -1 });
            let m = {
                get bufferSize() {
                  return;
                },
                get channelCount() {
                  return h.channelCount;
                },
                set channelCount(value) {
                  h.channelCount !== value &&
                    (g && f(),
                    ({ connectGraph: p, disconnectGraph: f } = d(
                      e,
                      value,
                      h,
                      c,
                      u,
                    )),
                    g && p()),
                    (h.channelCount = value);
                },
                get channelCountMode() {
                  return h.channelCountMode;
                },
                set channelCountMode(value) {
                  if ("clamped-max" === value || "max" === value) throw s();
                  h.channelCountMode = value;
                },
                get channelInterpretation() {
                  return h.channelInterpretation;
                },
                set channelInterpretation(value) {
                  h.channelInterpretation = value;
                },
                get context() {
                  return h.context;
                },
                get inputs() {
                  return [h];
                },
                get numberOfInputs() {
                  return h.numberOfInputs;
                },
                get numberOfOutputs() {
                  return h.numberOfOutputs;
                },
                get pan() {
                  return c.gain;
                },
                addEventListener: (...t) =>
                  h.addEventListener(t[0], t[1], t[2]),
                dispatchEvent: (...t) => h.dispatchEvent(t[0]),
                removeEventListener: (...t) =>
                  h.removeEventListener(t[0], t[1], t[2]),
              },
              g = !1,
              v = () => {
                p(), (g = !0);
              },
              y = () => {
                f(), (g = !1);
              };
            return r(l8(m, u), v, y);
          };
        })(ha, l3, l6, hF, us, hs),
        hZ = (t, e) => {
          let n = e.channelCountMode;
          if ("clamped-max" === n) throw us();
          if (void 0 === t.createStereoPanner) return hG(t, e);
          let i = t.createStereoPanner();
          return (
            lz(i, e),
            lZ(i, e, "pan"),
            Object.defineProperty(i, "channelCountMode", {
              get: () => n,
              set(t) {
                if (t !== n) throw us();
              },
            }),
            i
          );
        },
        hX = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  pan: i.pan.value,
                };
                i = hZ(n, r);
              }
              return (
                t.set(n, i),
                s ? await u8(n, e.pan, i.pan) : await u6(n, e.pan, i.pan),
                o0(i) ? await uF(e, n, i.inputs[0]) : await uF(e, n, i),
                i
              );
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        hY =
          ((sO = uX),
          class extends sO {
            constructor(t, e) {
              let n = uL(t),
                i = { ...uu, ...e },
                s = hZ(n, i),
                r = uB(n),
                a = r ? hX() : null;
              super(t, !1, s, a), (this._pan = u7(this, r, s.pan));
            }
            get pan() {
              return this._pan;
            }
          }),
        hH = () => {
          let t = new WeakMap(),
            e = async (e, n) => {
              let i = o5(e),
                s = oE(i, n);
              if (!s) {
                let r = {
                  channelCount: i.channelCount,
                  channelCountMode: i.channelCountMode,
                  channelInterpretation: i.channelInterpretation,
                  curve: i.curve,
                  oversample: i.oversample,
                };
                i = hF(n, r);
              }
              return (
                t.set(n, i),
                o0(i) ? await uF(e, n, i.inputs[0]) : await uF(e, n, i),
                i
              );
            };
          return {
            render(n, i) {
              let s = t.get(i);
              return void 0 !== s ? Promise.resolve(s) : e(n, i);
            },
          };
        },
        h$ =
          ((sP = uX),
          class extends sP {
            constructor(t, e) {
              let n = uL(t),
                i = { ...uc, ...e },
                s = hF(n, i),
                r = uB(n),
                a = r ? hH() : null;
              super(t, !0, s, a),
                (this._isCurveNullified = !1),
                (this._nativeWaveShaperNode = s),
                hn(this, 1);
            }
            get curve() {
              return this._isCurveNullified
                ? null
                : this._nativeWaveShaperNode.curve;
            }
            set curve(t) {
              if (null === t)
                (this._isCurveNullified = !0),
                  (this._nativeWaveShaperNode.curve = new Float32Array([0, 0]));
              else {
                if (t.length < 2) throw lN();
                (this._isCurveNullified = !1),
                  (this._nativeWaveShaperNode.curve = t);
              }
            }
            get oversample() {
              return this._nativeWaveShaperNode.oversample;
            }
            set oversample(t) {
              this._nativeWaveShaperNode.oversample = t;
            }
          }),
        hQ = null !== uV && uV.isSecureContext,
        hJ = (t, e, n) => {
          Object.defineProperties(uV, {
            currentFrame: { configurable: !0, get: () => Math.round(t * e) },
            currentTime: { configurable: !0, get: () => t },
          });
          try {
            return n();
          } finally {
            null !== uV && (delete uV.currentFrame, delete uV.currentTime);
          }
        },
        hK = new WeakMap(),
        h0 = (t) => {
          let e = hK.get(t);
          if (void 0 !== e) return e;
          if (null === uW)
            throw Error("Missing the native OfflineAudioContext constructor.");
          return (e = new uW(1, 1, 44100)), hK.set(t, e), e;
        },
        h1,
        h2 = hQ
          ? ((sZ = uV),
            (sJ = (t) =>
              new Promise((e, n) => {
                if (null === sZ) {
                  n(SyntaxError());
                  return;
                }
                let i = sZ.document.head;
                if (null === i) n(SyntaxError());
                else {
                  let s = sZ.document.createElement("script"),
                    r = new Blob([t], { type: "application/javascript" }),
                    a = URL.createObjectURL(r),
                    o = sZ.onerror,
                    l = () => {
                      (sZ.onerror = o), URL.revokeObjectURL(a);
                    };
                  (sZ.onerror = (t, e, i, s, r) =>
                    e === a || (e === sZ.location.href && 1 === i && 1 === s)
                      ? (l(), n(r), !1)
                      : null !== o
                      ? o(t, e, i, s, r)
                      : void 0),
                    (s.onerror = () => {
                      l(), n(SyntaxError());
                    }),
                    (s.onload = () => {
                      l(), e();
                    }),
                    (s.src = a),
                    (s.type = "module"),
                    i.appendChild(s);
                }
              })),
            (s0 = async (t) => {
              try {
                let e = await fetch(t);
                if (e.ok) return [await e.text(), e.url];
              } catch {}
              throw os();
            }),
            (s4 = new WeakMap()),
            (s6 = new WeakMap()),
            (s5 = async () => {
              if (null === uZ) return !0;
              if (null === uW) return !1;
              let t = new Blob(
                  [
                    'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)',
                  ],
                  { type: "application/javascript; charset=utf-8" },
                ),
                e = new uW(1, 128, 44100),
                n = URL.createObjectURL(t),
                i = !1,
                s = !1;
              try {
                await e.audioWorklet.addModule(n);
                let r = new uZ(e, "a", { numberOfOutputs: 0 }),
                  a = e.createOscillator();
                (r.port.onmessage = () => (i = !0)),
                  (r.onprocessorerror = () => (s = !0)),
                  a.connect(r),
                  a.start(0),
                  await e.startRendering(),
                  await new Promise((t) => setTimeout(t));
              } catch {
              } finally {
                URL.revokeObjectURL(n);
              }
              return i && !s;
            }),
            (h1 = 0),
            (t, e, n = { credentials: "omit" }) => {
              let i = s6.get(t);
              if (void 0 !== i && i.has(e)) return Promise.resolve();
              let s = s4.get(t);
              if (void 0 !== s) {
                let r = s.get(e);
                if (void 0 !== r) return r;
              }
              let a = uL(t),
                o =
                  void 0 === a.audioWorklet
                    ? s0(e)
                        .then(([t, e]) => {
                          let [n, i] = ov(t, e),
                            s = `${n};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}
})})(window,'_AWGS')`;
                          return sJ(s);
                        })
                        .then(() => {
                          let t = uV._AWGS.pop();
                          if (void 0 === t) throw SyntaxError();
                          hJ(a.currentTime, a.sampleRate, () =>
                            t(
                              class {},
                              void 0,
                              (t, e) => {
                                if ("" === t.trim()) throw us();
                                let n = op.get(a);
                                if (void 0 !== n) {
                                  if (n.has(t)) throw us();
                                  ow(e),
                                    oy(e.parameterDescriptors),
                                    n.set(t, e);
                                } else
                                  ow(e),
                                    oy(e.parameterDescriptors),
                                    op.set(a, new Map([[t, e]]));
                              },
                              a.sampleRate,
                              void 0,
                              void 0,
                            ),
                          );
                        })
                    : Promise.all([s0(e), Promise.resolve(uN(s5, s5))]).then(
                        ([[t, e], i]) => {
                          let s = h1 + 1;
                          h1 = s;
                          let [r, o] = ov(t, e),
                            l = `${r};((AudioWorkletProcessor,registerProcessor)=>{${o}
})(${
                              i
                                ? "AudioWorkletProcessor"
                                : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"
                            },(n,p)=>registerProcessor(n,class extends p{${
                              i
                                ? ""
                                : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"
                            }process(i,o,p){${
                              i
                                ? ""
                                : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"
                            }return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${s}',class extends AudioWorkletProcessor{process(){return !1}})`,
                            u = new Blob([l], {
                              type: "application/javascript; charset=utf-8",
                            }),
                            h = URL.createObjectURL(u);
                          return a.audioWorklet
                            .addModule(h, n)
                            .then(() => {
                              if (uB(a)) return a;
                              let t = h0(a);
                              return t.audioWorklet
                                .addModule(h, n)
                                .then(() => t);
                            })
                            .then((t) => {
                              if (null === uZ) throw SyntaxError();
                              try {
                                new uZ(t, `__sac${s}`);
                              } catch {
                                throw SyntaxError();
                              }
                            })
                            .finally(() => URL.revokeObjectURL(h));
                        },
                      );
              return (
                void 0 === s ? s4.set(t, new Map([[e, o]])) : s.set(e, o),
                o
                  .then(() => {
                    let n = s6.get(t);
                    void 0 === n ? s6.set(t, new Set([e])) : n.add(e);
                  })
                  .finally(() => {
                    let n = s4.get(t);
                    void 0 !== n && n.delete(e);
                  }),
                o
              );
            })
          : void 0,
        h3 =
          ((s9 = (t) => null !== uG && t instanceof uG), (t) => s9(t) || uB(t)),
        h8 =
          ((rr = new WeakSet()),
          (t, e) => {
            let n = h3(t) ? t : uL(t);
            if (rr.has(e)) {
              let i = lS();
              return Promise.reject(i);
            }
            try {
              rr.add(e);
            } catch {}
            return uN(lW, () => lW(n))
              ? n
                  .decodeAudioData(e)
                  .then(
                    (t) => (
                      lk(e).catch(() => {}),
                      uN(oI, () => oI(t)) || uK(t),
                      uH.add(t),
                      t
                    ),
                  )
              : new Promise((t, i) => {
                  let s = async () => {
                      try {
                        await lk(e);
                      } catch {}
                    },
                    r = (t) => {
                      i(t), s();
                    };
                  try {
                    n.decodeAudioData(
                      e,
                      (e) => {
                        "function" != typeof e.copyFromChannel &&
                          (uJ(e), oR(e)),
                          uH.add(e),
                          s().then(() => t(e));
                      },
                      (t) => {
                        null === t ? r(lD()) : r(t);
                      },
                    );
                  } catch (a) {
                    r(a);
                  }
                });
          }),
        h4 =
          ((rS = hD),
          class extends rS {
            constructor(t, e) {
              super(t, e),
                (this._nativeContext = t),
                (this._audioWorklet =
                  void 0 === h2
                    ? void 0
                    : { addModule: (t, e) => h2(this, t, e) });
            }
            get audioWorklet() {
              return this._audioWorklet;
            }
            createAnalyser() {
              return new uY(this);
            }
            createBiquadFilter() {
              return new hi(this);
            }
            createBuffer(t, e, n) {
              return new u1({ length: e, numberOfChannels: t, sampleRate: n });
            }
            createBufferSource() {
              return new u9(this);
            }
            createChannelMerger(t = 6) {
              return new hl(this, { numberOfInputs: t });
            }
            createChannelSplitter(t = 6) {
              return new hh(this, { numberOfOutputs: t });
            }
            createConstantSource() {
              return new hf(this);
            }
            createConvolver() {
              return new hg(this);
            }
            createDelay(t = 1) {
              return new hy(this, { maxDelayTime: t });
            }
            createDynamicsCompressor() {
              return new hT(this);
            }
            createGain() {
              return new hC(this);
            }
            createIIRFilter(t, e) {
              return new hM(this, { feedback: e, feedforward: t });
            }
            createOscillator() {
              return new hV(this);
            }
            createPanner() {
              return new hB(this);
            }
            createPeriodicWave(t, e, n = { disableNormalization: !1 }) {
              return new hU(this, { ...n, imag: e, real: t });
            }
            createStereoPanner() {
              return new hY(this);
            }
            createWaveShaper() {
              return new h$(this);
            }
            decodeAudioData(t, e, n) {
              return h8(this._nativeContext, t).then(
                (t) => ("function" == typeof e && e(t), t),
                (t) => {
                  throw ("function" == typeof n && n(t), t);
                },
              );
            }
          }),
        h6 =
          ((rI = uX),
          class extends rI {
            constructor(t, e) {
              let n = uL(t),
                i = ut(n, e);
              if (uB(n)) throw TypeError();
              super(t, !0, i, null),
                (this._nativeMediaElementAudioSourceNode = i);
            }
            get mediaElement() {
              return this._nativeMediaElementAudioSourceNode.mediaElement;
            }
          }),
        h5 =
          ((rN = uX),
          class extends rN {
            constructor(t, e) {
              let n = uL(t);
              if (uB(n)) throw TypeError();
              let i = { ...lL, ...e },
                s = ue(n, i);
              super(t, !1, s, null),
                (this._nativeMediaStreamAudioDestinationNode = s);
            }
            get stream() {
              return this._nativeMediaStreamAudioDestinationNode.stream;
            }
          }),
        h7 =
          ((rq = uX),
          class extends rq {
            constructor(t, e) {
              let n = uL(t),
                i = un(n, e);
              if (uB(n)) throw TypeError();
              super(t, !0, i, null),
                (this._nativeMediaStreamAudioSourceNode = i);
            }
            get mediaStream() {
              return this._nativeMediaStreamAudioSourceNode.mediaStream;
            }
          }),
        h9 = (t, { mediaStreamTrack: e }) => {
          if ("function" == typeof t.createMediaStreamTrackSource)
            return t.createMediaStreamTrackSource(e);
          let n = new MediaStream([e]),
            i = t.createMediaStreamSource(n);
          if ("audio" !== e.kind) throw lN();
          if (uB(t)) throw TypeError();
          return i;
        },
        ct =
          ((rB = uX),
          class extends rB {
            constructor(t, e) {
              let n = uL(t),
                i = h9(n, e);
              super(t, !0, i, null);
            }
          }),
        ce =
          ((rU = h4),
          class extends rU {
            constructor(t = {}) {
              if (null === uG)
                throw Error("Missing the native AudioContext constructor.");
              let e;
              try {
                e = new uG(t);
              } catch (n) {
                if (12 === n.code && "sampleRate is not in range" === n.message)
                  throw us();
                throw n;
              }
              if (null === e) throw uh();
              if (!oX(t.latencyHint))
                throw TypeError(
                  `The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`,
                );
              if (void 0 !== t.sampleRate && e.sampleRate !== t.sampleRate)
                throw us();
              super(e, 2);
              let { latencyHint: i } = t,
                { sampleRate: s } = e;
              if (
                ((this._baseLatency =
                  "number" == typeof e.baseLatency
                    ? e.baseLatency
                    : "balanced" === i
                    ? 512 / s
                    : "interactive" === i || void 0 === i
                    ? 256 / s
                    : "playback" === i
                    ? 1024 / s
                    : (128 *
                        Math.max(2, Math.min(128, Math.round((i * s) / 128)))) /
                      s),
                (this._nativeAudioContext = e),
                "webkitAudioContext" === uG.name
                  ? ((this._nativeGainNode = e.createGain()),
                    (this._nativeOscillatorNode = e.createOscillator()),
                    (this._nativeGainNode.gain.value = 1e-37),
                    this._nativeOscillatorNode
                      .connect(this._nativeGainNode)
                      .connect(e.destination),
                    this._nativeOscillatorNode.start())
                  : ((this._nativeGainNode = null),
                    (this._nativeOscillatorNode = null)),
                (this._state = null),
                "running" === e.state)
              ) {
                this._state = "suspended";
                let r = () => {
                  "suspended" === this._state && (this._state = null),
                    e.removeEventListener("statechange", r);
                };
                e.addEventListener("statechange", r);
              }
            }
            get baseLatency() {
              return this._baseLatency;
            }
            get state() {
              return null !== this._state
                ? this._state
                : this._nativeAudioContext.state;
            }
            close() {
              return "closed" === this.state
                ? this._nativeAudioContext.close().then(() => {
                    throw lN();
                  })
                : ("suspended" === this._state && (this._state = null),
                  this._nativeAudioContext.close().then(() => {
                    null !== this._nativeGainNode &&
                      null !== this._nativeOscillatorNode &&
                      (this._nativeOscillatorNode.stop(),
                      this._nativeGainNode.disconnect(),
                      this._nativeOscillatorNode.disconnect()),
                      oZ(this);
                  }));
            }
            createMediaElementSource(t) {
              return new h6(this, { mediaElement: t });
            }
            createMediaStreamDestination() {
              return new h5(this);
            }
            createMediaStreamSource(t) {
              return new h7(this, { mediaStream: t });
            }
            createMediaStreamTrackSource(t) {
              return new ct(this, { mediaStreamTrack: t });
            }
            resume() {
              return "suspended" === this._state
                ? new Promise((t, e) => {
                    let n = () => {
                      this._nativeAudioContext.removeEventListener(
                        "statechange",
                        n,
                      ),
                        "running" === this._nativeAudioContext.state
                          ? t()
                          : this.resume().then(t, e);
                    };
                    this._nativeAudioContext.addEventListener("statechange", n);
                  })
                : this._nativeAudioContext.resume().catch((t) => {
                    if (void 0 === t || 15 === t.code) throw lN();
                    throw t;
                  });
            }
            suspend() {
              return this._nativeAudioContext.suspend().catch((t) => {
                if (void 0 === t) throw lN();
                throw t;
              });
            }
          }),
        cn = (t) => {
          let e = hI.get(t);
          if (void 0 === e)
            throw Error("The context has no set of AudioWorkletNodes.");
          return e;
        },
        ci = (t, e) => {
          cn(t).add(e);
        },
        cs = (t, e, n = 0, i = 0) => {
          let s = t[n];
          if (void 0 === s) throw oD();
          return li(e) ? s.connect(e, 0, i) : s.connect(e, 0);
        },
        cr = (t, e) => {
          cn(t).delete(e);
        },
        ca = (t, e, n, i = 0) =>
          void 0 === e
            ? t.forEach((t) => t.disconnect())
            : "number" == typeof e
            ? lE(oD, t, e).disconnect()
            : li(e)
            ? void 0 === n
              ? t.forEach((t) => t.disconnect(e))
              : void 0 === i
              ? lE(oD, t, n).disconnect(e, 0)
              : lE(oD, t, n).disconnect(e, 0, i)
            : void 0 === n
            ? t.forEach((t) => t.disconnect(e))
            : lE(oD, t, n).disconnect(e, 0),
        co = new WeakMap(),
        cl = (t) => ox(co, t),
        cu = (t, e, n, i) => {
          var s, r;
          if (0 === i.numberOfInputs && 0 === i.numberOfOutputs) throw us();
          let a = Array.isArray(i.outputChannelCount)
            ? i.outputChannelCount
            : Array.from(i.outputChannelCount);
          if (a.some((t) => t < 1)) throw us();
          if (a.length !== i.numberOfOutputs) throw oD();
          if ("explicit" !== i.channelCountMode) throw us();
          let o = i.channelCount * i.numberOfInputs,
            l = a.reduce((t, e) => t + e, 0),
            u =
              void 0 === n.parameterDescriptors
                ? 0
                : n.parameterDescriptors.length;
          if (o + u > 6 || l > 6) throw us();
          let h = new MessageChannel(),
            c = [],
            d = [];
          for (let p = 0; p < i.numberOfInputs; p += 1)
            c.push(
              l6(t, {
                channelCount: i.channelCount,
                channelCountMode: i.channelCountMode,
                channelInterpretation: i.channelInterpretation,
                gain: 1,
              }),
            ),
              d.push(
                l3(t, {
                  channelCount: i.channelCount,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: i.channelCount,
                }),
              );
          let f = [];
          if (void 0 !== n.parameterDescriptors)
            for (let {
              defaultValue: m,
              maxValue: g,
              minValue: v,
              name: y,
            } of n.parameterDescriptors) {
              let w = hd(t, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                offset:
                  void 0 !== i.parameterData[y]
                    ? i.parameterData[y]
                    : void 0 === m
                    ? 0
                    : m,
              });
              Object.defineProperties(w.offset, {
                defaultValue: { get: () => (void 0 === m ? 0 : m) },
                maxValue: {
                  get: () => (void 0 === g ? 34028234663852886e22 : g),
                },
                minValue: {
                  get: () => (void 0 === v ? -34028234663852886e22 : v),
                },
              }),
                f.push(w);
            }
          let x = ha(t, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: Math.max(1, o + u),
            }),
            T = lQ(e, t.sampleRate),
            b = ui(t, T, o + u, Math.max(1, l)),
            C = l3(t, {
              channelCount: Math.max(1, l),
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              numberOfOutputs: Math.max(1, l),
            }),
            A = [];
          for (let S = 0; S < i.numberOfOutputs; S += 1)
            A.push(
              ha(t, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: a[S],
              }),
            );
          for (let k = 0; k < i.numberOfInputs; k += 1) {
            c[k].connect(d[k]);
            for (let O = 0; O < i.channelCount; O += 1)
              d[k].connect(x, O, k * i.channelCount + O);
          }
          let M = new lf(
            void 0 === n.parameterDescriptors
              ? []
              : n.parameterDescriptors.map(({ name: t }, e) => {
                  let n = f[e];
                  return n.connect(x, 0, o + e), n.start(0), [t, n.offset];
                }),
          );
          x.connect(b);
          let E = i.channelInterpretation,
            I = null,
            D = 0 === i.numberOfOutputs ? [b] : A,
            R = {
              get bufferSize() {
                return T;
              },
              get channelCount() {
                return i.channelCount;
              },
              set channelCount(_) {
                throw lN();
              },
              get channelCountMode() {
                return i.channelCountMode;
              },
              set channelCountMode(_) {
                throw lN();
              },
              get channelInterpretation() {
                return E;
              },
              set channelInterpretation(value) {
                for (let N of c) N.channelInterpretation = value;
                E = value;
              },
              get context() {
                return b.context;
              },
              get inputs() {
                return c;
              },
              get numberOfInputs() {
                return i.numberOfInputs;
              },
              get numberOfOutputs() {
                return i.numberOfOutputs;
              },
              get onprocessorerror() {
                return I;
              },
              set onprocessorerror(value) {
                "function" == typeof I &&
                  R.removeEventListener("processorerror", I),
                  "function" ==
                    typeof (I = "function" == typeof value ? value : null) &&
                    R.addEventListener("processorerror", I);
              },
              get parameters() {
                return M;
              },
              get port() {
                return h.port2;
              },
              addEventListener: (...t) => b.addEventListener(t[0], t[1], t[2]),
              connect: cs.bind(null, D),
              disconnect: ca.bind(null, D),
              dispatchEvent: (...t) => b.dispatchEvent(t[0]),
              removeEventListener: (...t) =>
                b.removeEventListener(t[0], t[1], t[2]),
            },
            V = new Map();
          (h.port1.addEventListener =
            ((s = h.port1.addEventListener),
            (...e) => {
              if ("message" === e[0]) {
                let n =
                  "function" == typeof e[1]
                    ? e[1]
                    : "object" == typeof e[1] &&
                      null !== e[1] &&
                      "function" == typeof e[1].handleEvent
                    ? e[1].handleEvent
                    : null;
                if (null !== n) {
                  let i = V.get(e[1]);
                  void 0 !== i
                    ? (e[1] = i)
                    : ((e[1] = (e) => {
                        hJ(t.currentTime, t.sampleRate, () => n(e));
                      }),
                      V.set(n, e[1]));
                }
              }
              return s.call(h.port1, e[0], e[1], e[2]);
            })),
            (h.port1.removeEventListener =
              ((r = h.port1.removeEventListener),
              (...t) => {
                if ("message" === t[0]) {
                  let e = V.get(t[1]);
                  void 0 !== e && (V.delete(t[1]), (t[1] = e));
                }
                return r.call(h.port1, t[0], t[1], t[2]);
              }));
          let P = null;
          Object.defineProperty(h.port1, "onmessage", {
            get: () => P,
            set(t) {
              "function" == typeof P &&
                h.port1.removeEventListener("message", P),
                "function" == typeof (P = "function" == typeof t ? t : null) &&
                  (h.port1.addEventListener("message", P), h.port1.start());
            },
          }),
            (n.prototype.port = h.port1);
          let q = null,
            F = l0(t, R, n, i);
          F.then((t) => (q = t));
          let j = lv(i.numberOfInputs, i.channelCount),
            L = lv(i.numberOfOutputs, a),
            W =
              void 0 === n.parameterDescriptors
                ? []
                : n.parameterDescriptors.reduce(
                    (t, { name: e }) => ({ ...t, [e]: new Float32Array(128) }),
                    {},
                  ),
            B = !0,
            z = () => {
              i.numberOfOutputs > 0 && b.disconnect(C);
              for (let t = 0, e = 0; t < i.numberOfOutputs; t += 1) {
                let n = A[t];
                for (let s = 0; s < a[t]; s += 1) C.disconnect(n, e + s, s);
                e += a[t];
              }
            },
            U = new Map();
          b.onaudioprocess = ({ inputBuffer: e, outputBuffer: s }) => {
            if (null !== q) {
              let r = cl(R);
              for (let l = 0; l < T; l += 128) {
                for (let u = 0; u < i.numberOfInputs; u += 1)
                  for (let h = 0; h < i.channelCount; h += 1)
                    l_(e, j[u], h, h, l);
                void 0 !== n.parameterDescriptors &&
                  n.parameterDescriptors.forEach(({ name: t }, n) => {
                    l_(e, W, t, o + n, l);
                  });
                for (let p = 0; p < i.numberOfInputs; p += 1)
                  for (let m = 0; m < a[p]; m += 1)
                    0 === L[p][m].byteLength &&
                      (L[p][m] = new Float32Array(128));
                try {
                  let g = j.map((t, e) => {
                      let n = r[e];
                      if (n.size > 0) return U.set(e, T / 128), t;
                      let i = U.get(e);
                      return void 0 === i
                        ? []
                        : (t.every((t) => t.every((t) => 0 === t)) &&
                            (1 === i ? U.delete(e) : U.set(e, i - 1)),
                          t);
                    }),
                    v = hJ(t.currentTime + l / t.sampleRate, t.sampleRate, () =>
                      q.process(g, L, W),
                    );
                  B = v;
                  for (let y = 0, w = 0; y < i.numberOfOutputs; y += 1) {
                    for (let C = 0; C < a[y]; C += 1) lg(s, L[y], C, w + C, l);
                    w += a[y];
                  }
                } catch (A) {
                  (B = !1),
                    R.dispatchEvent(
                      new ErrorEvent("processorerror", {
                        colno: A.colno,
                        filename: A.filename,
                        lineno: A.lineno,
                        message: A.message,
                      }),
                    );
                }
                if (!B) {
                  for (let S = 0; S < i.numberOfInputs; S += 1) {
                    c[S].disconnect(d[S]);
                    for (let k = 0; k < i.channelCount; k += 1)
                      d[l].disconnect(x, k, S * i.channelCount + k);
                  }
                  if (void 0 !== n.parameterDescriptors) {
                    let O = n.parameterDescriptors.length;
                    for (let M = 0; M < O; M += 1) {
                      let E = f[M];
                      E.disconnect(x, 0, o + M), E.stop();
                    }
                  }
                  x.disconnect(b), (b.onaudioprocess = null), G ? z() : Y();
                  break;
                }
              }
            }
          };
          let G = !1,
            Z = l6(t, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0,
            }),
            X = () => b.connect(Z).connect(t.destination),
            Y = () => {
              b.disconnect(Z), Z.disconnect();
            },
            H = () => {
              if (B) {
                Y(), i.numberOfOutputs > 0 && b.connect(C);
                for (let t = 0, e = 0; t < i.numberOfOutputs; t += 1) {
                  let n = A[t];
                  for (let s = 0; s < a[t]; s += 1) C.connect(n, e + s, s);
                  e += a[t];
                }
              }
              G = !0;
            },
            $ = () => {
              B && (X(), z()), (G = !1);
            };
          return X(), hs(R, H, $);
        },
        ch = (t, e, n, i, s, r) => {
          if (null !== n)
            try {
              var a, o;
              let l = new n(t, i, r),
                u = new Map(),
                h = null;
              if (
                (Object.defineProperties(l, {
                  channelCount: {
                    get: () => r.channelCount,
                    set() {
                      throw lN();
                    },
                  },
                  channelCountMode: {
                    get: () => "explicit",
                    set() {
                      throw lN();
                    },
                  },
                  onprocessorerror: {
                    get: () => h,
                    set(t) {
                      "function" == typeof h &&
                        l.removeEventListener("processorerror", h),
                        (h = "function" == typeof t ? t : null),
                        "function" == typeof h &&
                          l.addEventListener("processorerror", h);
                    },
                  },
                }),
                (l.addEventListener =
                  ((a = l.addEventListener),
                  (...t) => {
                    if ("processorerror" === t[0]) {
                      let e =
                        "function" == typeof t[1]
                          ? t[1]
                          : "object" == typeof t[1] &&
                            null !== t[1] &&
                            "function" == typeof t[1].handleEvent
                          ? t[1].handleEvent
                          : null;
                      if (null !== e) {
                        let n = u.get(t[1]);
                        void 0 !== n
                          ? (t[1] = n)
                          : ((t[1] = (n) => {
                              "error" === n.type
                                ? (Object.defineProperties(n, {
                                    type: { value: "processorerror" },
                                  }),
                                  e(n))
                                : e(new ErrorEvent(t[0], { ...n }));
                            }),
                            u.set(e, t[1]));
                      }
                    }
                    return a.call(l, "error", t[1], t[2]), a.call(l, ...t);
                  })),
                (l.removeEventListener =
                  ((o = l.removeEventListener),
                  (...t) => {
                    if ("processorerror" === t[0]) {
                      let e = u.get(t[1]);
                      void 0 !== e && (u.delete(t[1]), (t[1] = e));
                    }
                    return (
                      o.call(l, "error", t[1], t[2]),
                      o.call(l, t[0], t[1], t[2])
                    );
                  })),
                0 !== r.numberOfOutputs)
              ) {
                let c = l6(t, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  gain: 0,
                });
                l.connect(c).connect(t.destination);
                let d = () => c.disconnect(),
                  p = () => c.connect(t.destination);
                return hs(l, d, p);
              }
              return l;
            } catch (f) {
              if (11 === f.code) throw us();
              throw f;
            }
          if (void 0 === s) throw us();
          return l$(r), cu(t, e, s, r);
        },
        cc = (t, e, n) => {
          let i = new WeakMap(),
            s = null,
            r = async (r, a) => {
              let o = o5(r),
                l = null,
                u = oE(o, a),
                h = Array.isArray(e.outputChannelCount)
                  ? e.outputChannelCount
                  : Array.from(e.outputChannelCount);
              if (null === uZ) {
                let c = h.reduce((t, e) => t + e, 0),
                  d = l3(a, {
                    channelCount: Math.max(1, c),
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    numberOfOutputs: Math.max(1, c),
                  }),
                  p = [];
                for (let f = 0; f < r.numberOfOutputs; f += 1)
                  p.push(
                    ha(a, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "speakers",
                      numberOfInputs: h[f],
                    }),
                  );
                let m = l6(a, {
                  channelCount: e.channelCount,
                  channelCountMode: e.channelCountMode,
                  channelInterpretation: e.channelInterpretation,
                  gain: 1,
                });
                (m.connect = cs.bind(null, p)),
                  (m.disconnect = ca.bind(null, p)),
                  (l = [d, p, m]);
              } else u || (o = new uZ(a, t));
              if ((i.set(a, null === l ? o : l[2]), null !== l)) {
                if (null === s) {
                  if (void 0 === n)
                    throw Error("Missing the processor constructor.");
                  if (null === uW)
                    throw Error(
                      "Missing the native OfflineAudioContext constructor.",
                    );
                  let g = r.channelCount * r.numberOfInputs,
                    v =
                      void 0 === n.parameterDescriptors
                        ? 0
                        : n.parameterDescriptors.length,
                    y = g + v,
                    w = async () => {
                      let t = new uW(
                          y,
                          128 * Math.ceil(r.context.length / 128),
                          a.sampleRate,
                        ),
                        n = [],
                        i = [];
                      for (let s = 0; s < e.numberOfInputs; s += 1)
                        n.push(
                          l6(t, {
                            channelCount: e.channelCount,
                            channelCountMode: e.channelCountMode,
                            channelInterpretation: e.channelInterpretation,
                            gain: 1,
                          }),
                        ),
                          i.push(
                            l3(t, {
                              channelCount: e.channelCount,
                              channelCountMode: "explicit",
                              channelInterpretation: "discrete",
                              numberOfOutputs: e.channelCount,
                            }),
                          );
                      let o = await Promise.all(
                          Array.from(r.parameters.values()).map(async (e) => {
                            let n = hd(t, {
                              channelCount: 1,
                              channelCountMode: "explicit",
                              channelInterpretation: "discrete",
                              offset: e.value,
                            });
                            return await u6(t, e, n.offset), n;
                          }),
                        ),
                        l = ha(t, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "speakers",
                          numberOfInputs: Math.max(1, g + v),
                        });
                      for (let u = 0; u < e.numberOfInputs; u += 1) {
                        n[u].connect(i[u]);
                        for (let h = 0; h < e.channelCount; h += 1)
                          i[u].connect(l, h, u * e.channelCount + h);
                      }
                      for (let [c, d] of o.entries())
                        d.connect(l, 0, g + c), d.start(0);
                      return (
                        l.connect(t.destination),
                        await Promise.all(n.map((e) => uF(r, t, e))),
                        hS(t)
                      );
                    };
                  s = lw(r, 0 === y ? null : await w(), a, e, h, n, hJ);
                }
                let x = await s,
                  T = u4(a, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: "max",
                    channelInterpretation: "speakers",
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1,
                  }),
                  [b, C, A] = l;
                null !== x && ((T.buffer = x), T.start(0)), T.connect(b);
                for (let S = 0, k = 0; S < r.numberOfOutputs; S += 1) {
                  let O = C[S];
                  for (let M = 0; M < h[S]; M += 1) b.connect(O, k + M, M);
                  k += h[S];
                }
                return A;
              }
              if (u)
                for (let [E, I] of r.parameters.entries())
                  await u8(a, I, o.parameters.get(E));
              else
                for (let [D, R] of r.parameters.entries())
                  await u6(a, R, o.parameters.get(D));
              return await uF(r, a, o), o;
            };
          return {
            render(t, e) {
              cr(e, t);
              let n = i.get(e);
              return void 0 !== n ? Promise.resolve(n) : r(t, e);
            },
          };
        },
        cd = (t) => hK.get(t),
        cp = (t, e) => {
          co.set(t, e);
        },
        cf = hQ
          ? ((aR = uX),
            class extends aR {
              constructor(t, e, n) {
                var i;
                let s = uL(t),
                  r = uB(s),
                  a = um({ ...lm, ...n });
                uA(a);
                let o = op.get(s),
                  l = null == o ? void 0 : o.get(e),
                  u =
                    r || "closed" !== s.state
                      ? s
                      : null !== (i = cd(s)) && void 0 !== i
                      ? i
                      : s,
                  h = ch(u, r ? null : t.baseLatency, uZ, e, l, a),
                  c = r ? cc(e, a, l) : null;
                super(t, !0, h, c);
                let d = [];
                h.parameters.forEach((t, e) => {
                  let n = u7(this, r, t);
                  d.push([e, n]);
                }),
                  (this._nativeAudioWorkletNode = h),
                  (this._onprocessorerror = null),
                  (this._parameters = new lf(d)),
                  r && ci(s, this);
                let { activeInputs: p } = oz(this);
                cp(h, p);
              }
              get onprocessorerror() {
                return this._onprocessorerror;
              }
              set onprocessorerror(t) {
                let e = "function" == typeof t ? uO(this, t) : null;
                this._nativeAudioWorkletNode.onprocessorerror = e;
                let n = this._nativeAudioWorkletNode.onprocessorerror;
                this._onprocessorerror = null !== n && n === e ? t : n;
              }
              get parameters() {
                return null === this._parameters
                  ? this._nativeAudioWorkletNode.parameters
                  : this._parameters;
              }
              get port() {
                return this._nativeAudioWorkletNode.port;
              }
            })
          : void 0,
        cm = (t, e, n) => {
          if (null === uW)
            throw Error("Missing the native OfflineAudioContext constructor.");
          try {
            return new uW(t, e, n);
          } catch (i) {
            if ("SyntaxError" === i.name) throw us();
            throw i;
          }
        },
        c_ = (t, e) =>
          uq(t)
            .render(t, e)
            .then(() =>
              Promise.all(Array.from(cn(e)).map((t) => uq(t).render(t, e))),
            )
            .then(() => hS(e))
            .then(
              (t) => (
                "function" != typeof t.copyFromChannel
                  ? (uJ(t), oR(t))
                  : uN(oI, () => oI(t)) || uK(t),
                uH.add(t),
                t
              ),
            ),
        cg =
          ((a1 = h4),
          class extends a1 {
            constructor(t, e, n) {
              let i;
              if ("number" == typeof t && void 0 !== e && void 0 !== n)
                i = { length: e, numberOfChannels: t, sampleRate: n };
              else if ("object" == typeof t) i = t;
              else throw Error("The given parameters are not valid.");
              let {
                  length: s,
                  numberOfChannels: r,
                  sampleRate: a,
                } = { ...ur, ...i },
                o = cm(r, s, a);
              uN(lW, () => lW(o)) ||
                o.addEventListener(
                  "statechange",
                  (() => {
                    let t = 0,
                      e = (n) => {
                        "running" === this._state &&
                          (t > 0
                            ? (o.removeEventListener("statechange", e),
                              n.stopImmediatePropagation(),
                              this._waitForThePromiseToSettle(n))
                            : (t += 1));
                      };
                    return e;
                  })(),
                ),
                super(o, r),
                (this._length = s),
                (this._nativeOfflineAudioContext = o),
                (this._state = null);
            }
            get length() {
              return void 0 === this._nativeOfflineAudioContext.length
                ? this._length
                : this._nativeOfflineAudioContext.length;
            }
            get state() {
              return null === this._state
                ? this._nativeOfflineAudioContext.state
                : this._state;
            }
            startRendering() {
              return "running" === this._state
                ? Promise.reject(lN())
                : ((this._state = "running"),
                  c_(this.destination, this._nativeOfflineAudioContext).finally(
                    () => {
                      (this._state = null), oZ(this);
                    },
                  ));
            }
            _waitForThePromiseToSettle(t) {
              null === this._state
                ? this._nativeOfflineAudioContext.dispatchEvent(t)
                : setTimeout(() => this._waitForThePromiseToSettle(t));
            }
          }),
        cv =
          ((a6 = (t) => null !== uG && t instanceof uG),
          (t) => {
            let e = oh.get(t);
            return a6(e) || a6(t);
          }),
        cy =
          ((a7 = (t) =>
            null !== uV &&
            "function" == typeof uV.AudioNode &&
            t instanceof uV.AudioNode),
          (t) => oo.has(t) || a7(t)),
        cw =
          ((ot = (t) =>
            null !== uV &&
            "function" == typeof uV.AudioParam &&
            t instanceof uV.AudioParam),
          (t) => ou.has(t) || ot(t)),
        cx = (t) => {
          let e = oh.get(t);
          return uB(e) || uB(t);
        };
      function cT(t, e) {
        if (!t) throw Error(e);
      }
      function cb(t, e, n = 1 / 0) {
        if (!(e <= t && t <= n))
          throw RangeError(`Value must be within [${e}, ${n}], got: ${t}`);
      }
      function cC(t) {
        t.isOffline ||
          "running" === t.state ||
          cS(
            'The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.',
          );
      }
      let cA = console;
      function cS(...t) {
        cA.warn(...t);
      }
      function ck(t) {
        return void 0 === t;
      }
      function cO(t) {
        return !ck(t);
      }
      function cM(t) {
        return "number" == typeof t;
      }
      function cE(t) {
        return (
          "[object Object]" === Object.prototype.toString.call(t) &&
          t.constructor === Object
        );
      }
      function cI(t) {
        return Array.isArray(t);
      }
      function cD(t) {
        return "string" == typeof t;
      }
      function cR(t) {
        return cD(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t);
      }
      let cN = "object" == typeof self ? self : null,
        cV =
          cN &&
          (cN.hasOwnProperty("AudioContext") ||
            cN.hasOwnProperty("webkitAudioContext"));
      var cP = n(7582);
      class cq {
        constructor(t, e, n) {
          (this._callback = t),
            (this._type = e),
            (this._updateInterval = n),
            this._createClock();
        }
        _createWorker() {
          let t = new Blob(
              [
                `
			// the initial timeout time
			let timeoutTime =  ${(1e3 * this._updateInterval).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`,
              ],
              { type: "text/javascript" },
            ),
            e = URL.createObjectURL(t),
            n = new Worker(e);
          (n.onmessage = this._callback.bind(this)), (this._worker = n);
        }
        _createTimeout() {
          this._timeout = setTimeout(() => {
            this._createTimeout(), this._callback();
          }, 1e3 * this._updateInterval);
        }
        _createClock() {
          if ("worker" === this._type)
            try {
              this._createWorker();
            } catch (t) {
              (this._type = "timeout"), this._createClock();
            }
          else "timeout" === this._type && this._createTimeout();
        }
        _disposeClock() {
          this._timeout && (clearTimeout(this._timeout), (this._timeout = 0)),
            this._worker &&
              (this._worker.terminate(), (this._worker.onmessage = null));
        }
        get updateInterval() {
          return this._updateInterval;
        }
        set updateInterval(t) {
          (this._updateInterval = Math.max(t, 128 / 44100)),
            "worker" === this._type &&
              this._worker.postMessage(Math.max(1e3 * t, 1));
        }
        get type() {
          return this._type;
        }
        set type(t) {
          this._disposeClock(), (this._type = t), this._createClock();
        }
        dispose() {
          this._disposeClock();
        }
      }
      function cF(t) {
        return t instanceof AudioBuffer;
      }
      function cj(t, e) {
        var n, i;
        return "value" === t || cw(e) || cy(e) || cF(e);
      }
      function cL(t, ...e) {
        if (!e.length) return t;
        let n = e.shift();
        if (cE(t) && cE(n))
          for (let i in n)
            cj(i, n[i])
              ? (t[i] = n[i])
              : cE(n[i])
              ? (t[i] || Object.assign(t, { [i]: {} }), cL(t[i], n[i]))
              : Object.assign(t, { [i]: n[i] });
        return cL(t, ...e);
      }
      function cW(t, e, n = [], i) {
        let s = {},
          r = Array.from(e);
        if (cE(r[0]) && i && !Reflect.has(r[0], i)) {
          let a = Object.keys(r[0]).some((e) => Reflect.has(t, e));
          a || (cL(s, { [i]: r[0] }), n.splice(n.indexOf(i), 1), r.shift());
        }
        if (1 === r.length && cE(r[0])) cL(s, r[0]);
        else for (let o = 0; o < n.length; o++) cO(r[o]) && (s[n[o]] = r[o]);
        return cL(t, s);
      }
      function cB(t, e) {
        return ck(t) ? e : t;
      }
      function cz(t, e) {
        return (
          e.forEach((e) => {
            Reflect.has(t, e) && delete t[e];
          }),
          t
        );
      }
      /**
       * Tone.js
       * @author Yotam Mann
       * @license http://opensource.org/licenses/MIT MIT License
       * @copyright 2014-2019 Yotam Mann
       */ class cU {
        constructor() {
          (this.debug = !1), (this._wasDisposed = !1);
        }
        static getDefaults() {
          return {};
        }
        log(...t) {
          (this.debug || (cN && this.toString() === cN.TONE_DEBUG_CLASS)) &&
            (function (...t) {
              cA.log(...t);
            })(this, ...t);
        }
        dispose() {
          return (this._wasDisposed = !0), this;
        }
        get disposed() {
          return this._wasDisposed;
        }
        toString() {
          return this.name;
        }
      }
      function cG(t, e) {
        return t > e + 1e-6;
      }
      function cZ(t, e) {
        return cG(t, e) || cY(t, e);
      }
      function cX(t, e) {
        return t + 1e-6 < e;
      }
      function cY(t, e) {
        return 1e-6 > Math.abs(t - e);
      }
      cU.version = i;
      class cH extends cU {
        constructor() {
          super(), (this.name = "Timeline"), (this._timeline = []);
          let t = cW(cH.getDefaults(), arguments, ["memory"]);
          (this.memory = t.memory), (this.increasing = t.increasing);
        }
        static getDefaults() {
          return { memory: 1 / 0, increasing: !1 };
        }
        get length() {
          return this._timeline.length;
        }
        add(t) {
          if (
            (cT(
              Reflect.has(t, "time"),
              "Timeline: events must have a time attribute",
            ),
            (t.time = t.time.valueOf()),
            this.increasing && this.length)
          ) {
            let e = this._timeline[this.length - 1];
            cT(
              cZ(t.time, e.time),
              "The time must be greater than or equal to the last scheduled time",
            ),
              this._timeline.push(t);
          } else {
            let n = this._search(t.time);
            this._timeline.splice(n + 1, 0, t);
          }
          if (this.length > this.memory) {
            let i = this.length - this.memory;
            this._timeline.splice(0, i);
          }
          return this;
        }
        remove(t) {
          let e = this._timeline.indexOf(t);
          return -1 !== e && this._timeline.splice(e, 1), this;
        }
        get(t, e = "time") {
          let n = this._search(t, e);
          return -1 !== n ? this._timeline[n] : null;
        }
        peek() {
          return this._timeline[0];
        }
        shift() {
          return this._timeline.shift();
        }
        getAfter(t, e = "time") {
          let n = this._search(t, e);
          return n + 1 < this._timeline.length ? this._timeline[n + 1] : null;
        }
        getBefore(t) {
          let e = this._timeline.length;
          if (e > 0 && this._timeline[e - 1].time < t)
            return this._timeline[e - 1];
          let n = this._search(t);
          return n - 1 >= 0 ? this._timeline[n - 1] : null;
        }
        cancel(t) {
          if (this._timeline.length > 1) {
            let e = this._search(t);
            if (e >= 0) {
              if (cY(this._timeline[e].time, t)) {
                for (let n = e; n >= 0; n--)
                  if (cY(this._timeline[n].time, t)) e = n;
                  else break;
                this._timeline = this._timeline.slice(0, e);
              } else this._timeline = this._timeline.slice(0, e + 1);
            } else this._timeline = [];
          } else
            1 === this._timeline.length &&
              cZ(this._timeline[0].time, t) &&
              (this._timeline = []);
          return this;
        }
        cancelBefore(t) {
          let e = this._search(t);
          return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
        }
        previousEvent(t) {
          let e = this._timeline.indexOf(t);
          return e > 0 ? this._timeline[e - 1] : null;
        }
        _search(t, e = "time") {
          if (0 === this._timeline.length) return -1;
          let n = 0,
            i = this._timeline.length,
            s = i;
          if (i > 0 && this._timeline[i - 1][e] <= t) return i - 1;
          for (; n < s; ) {
            let r = Math.floor(n + (s - n) / 2),
              a = this._timeline[r],
              o = this._timeline[r + 1];
            if (cY(a[e], t)) {
              for (let l = r; l < this._timeline.length; l++) {
                let u = this._timeline[l];
                if (cY(u[e], t)) r = l;
                else break;
              }
              return r;
            }
            if (cX(a[e], t) && cG(o[e], t)) return r;
            cG(a[e], t) ? (s = r) : (n = r + 1);
          }
          return -1;
        }
        _iterate(t, e = 0, n = this._timeline.length - 1) {
          this._timeline.slice(e, n + 1).forEach(t);
        }
        forEach(t) {
          return this._iterate(t), this;
        }
        forEachBefore(t, e) {
          let n = this._search(t);
          return -1 !== n && this._iterate(e, 0, n), this;
        }
        forEachAfter(t, e) {
          let n = this._search(t);
          return this._iterate(e, n + 1), this;
        }
        forEachBetween(t, e, n) {
          let i = this._search(t),
            s = this._search(e);
          return (
            -1 !== i && -1 !== s
              ? (this._timeline[i].time !== t && (i += 1),
                this._timeline[s].time === e && (s -= 1),
                this._iterate(n, i, s))
              : -1 === i && this._iterate(n, 0, s),
            this
          );
        }
        forEachFrom(t, e) {
          let n = this._search(t);
          for (; n >= 0 && this._timeline[n].time >= t; ) n--;
          return this._iterate(e, n + 1), this;
        }
        forEachAtTime(t, e) {
          let n = this._search(t);
          if (-1 !== n && cY(this._timeline[n].time, t)) {
            let i = n;
            for (let s = n; s >= 0; s--)
              if (cY(this._timeline[s].time, t)) i = s;
              else break;
            this._iterate(
              (t) => {
                e(t);
              },
              i,
              n,
            );
          }
          return this;
        }
        dispose() {
          return super.dispose(), (this._timeline = []), this;
        }
      }
      let c$ = [];
      function cQ(t) {
        c$.push(t);
      }
      let cJ = [];
      function cK(t) {
        cJ.push(t);
      }
      class c0 extends cU {
        constructor() {
          super(...arguments), (this.name = "Emitter");
        }
        on(t, e) {
          let n = t.split(/\W+/);
          return (
            n.forEach((t) => {
              ck(this._events) && (this._events = {}),
                this._events.hasOwnProperty(t) || (this._events[t] = []),
                this._events[t].push(e);
            }),
            this
          );
        }
        once(t, e) {
          let n = (...i) => {
            e(...i), this.off(t, n);
          };
          return this.on(t, n), this;
        }
        off(t, e) {
          let n = t.split(/\W+/);
          return (
            n.forEach((n) => {
              if (
                (ck(this._events) && (this._events = {}),
                this._events.hasOwnProperty(t))
              ) {
                if (ck(e)) this._events[t] = [];
                else {
                  let i = this._events[t];
                  for (let s = i.length - 1; s >= 0; s--)
                    i[s] === e && i.splice(s, 1);
                }
              }
            }),
            this
          );
        }
        emit(t, ...e) {
          if (this._events && this._events.hasOwnProperty(t)) {
            let n = this._events[t].slice(0);
            for (let i = 0, s = n.length; i < s; i++) n[i].apply(this, e);
          }
          return this;
        }
        static mixin(t) {
          ["on", "once", "off", "emit"].forEach((e) => {
            let n = Object.getOwnPropertyDescriptor(c0.prototype, e);
            Object.defineProperty(t.prototype, e, n);
          });
        }
        dispose() {
          return super.dispose(), (this._events = void 0), this;
        }
      }
      class c1 extends c0 {
        constructor() {
          super(...arguments), (this.isOffline = !1);
        }
        toJSON() {
          return {};
        }
      }
      class c2 extends c1 {
        constructor() {
          super(),
            (this.name = "Context"),
            (this._constants = new Map()),
            (this._timeouts = new cH()),
            (this._timeoutIds = 0),
            (this._initialized = !1),
            (this.isOffline = !1),
            (this._workletModules = new Map());
          let t = cW(c2.getDefaults(), arguments, ["context"]);
          if (t.context) this._context = t.context;
          else {
            var e;
            this._context = ((e = { latencyHint: t.latencyHint }), new ce(e));
          }
          (this._ticker = new cq(
            this.emit.bind(this, "tick"),
            t.clockSource,
            t.updateInterval,
          )),
            this.on("tick", this._timeoutLoop.bind(this)),
            (this._context.onstatechange = () => {
              this.emit("statechange", this.state);
            }),
            this._setLatencyHint(t.latencyHint),
            (this.lookAhead = t.lookAhead);
        }
        static getDefaults() {
          return {
            clockSource: "worker",
            latencyHint: "interactive",
            lookAhead: 0.1,
            updateInterval: 0.05,
          };
        }
        initialize() {
          if (!this._initialized) {
            var t;
            (t = this), c$.forEach((e) => e(t)), (this._initialized = !0);
          }
          return this;
        }
        createAnalyser() {
          return this._context.createAnalyser();
        }
        createOscillator() {
          return this._context.createOscillator();
        }
        createBufferSource() {
          return this._context.createBufferSource();
        }
        createBiquadFilter() {
          return this._context.createBiquadFilter();
        }
        createBuffer(t, e, n) {
          return this._context.createBuffer(t, e, n);
        }
        createChannelMerger(t) {
          return this._context.createChannelMerger(t);
        }
        createChannelSplitter(t) {
          return this._context.createChannelSplitter(t);
        }
        createConstantSource() {
          return this._context.createConstantSource();
        }
        createConvolver() {
          return this._context.createConvolver();
        }
        createDelay(t) {
          return this._context.createDelay(t);
        }
        createDynamicsCompressor() {
          return this._context.createDynamicsCompressor();
        }
        createGain() {
          return this._context.createGain();
        }
        createIIRFilter(t, e) {
          return this._context.createIIRFilter(t, e);
        }
        createPanner() {
          return this._context.createPanner();
        }
        createPeriodicWave(t, e, n) {
          return this._context.createPeriodicWave(t, e, n);
        }
        createStereoPanner() {
          return this._context.createStereoPanner();
        }
        createWaveShaper() {
          return this._context.createWaveShaper();
        }
        createMediaStreamSource(t) {
          var e;
          cT(cv((e = this._context)), "Not available if OfflineAudioContext");
          let n = this._context;
          return n.createMediaStreamSource(t);
        }
        createMediaElementSource(t) {
          var e;
          cT(cv((e = this._context)), "Not available if OfflineAudioContext");
          let n = this._context;
          return n.createMediaElementSource(t);
        }
        createMediaStreamDestination() {
          var t;
          cT(cv((t = this._context)), "Not available if OfflineAudioContext");
          let e = this._context;
          return e.createMediaStreamDestination();
        }
        decodeAudioData(t) {
          return this._context.decodeAudioData(t);
        }
        get currentTime() {
          return this._context.currentTime;
        }
        get state() {
          return this._context.state;
        }
        get sampleRate() {
          return this._context.sampleRate;
        }
        get listener() {
          return this.initialize(), this._listener;
        }
        set listener(t) {
          cT(
            !this._initialized,
            "The listener cannot be set after initialization.",
          ),
            (this._listener = t);
        }
        get transport() {
          return this.initialize(), this._transport;
        }
        set transport(t) {
          cT(
            !this._initialized,
            "The transport cannot be set after initialization.",
          ),
            (this._transport = t);
        }
        get draw() {
          return this.initialize(), this._draw;
        }
        set draw(t) {
          cT(!this._initialized, "Draw cannot be set after initialization."),
            (this._draw = t);
        }
        get destination() {
          return this.initialize(), this._destination;
        }
        set destination(t) {
          cT(
            !this._initialized,
            "The destination cannot be set after initialization.",
          ),
            (this._destination = t);
        }
        createAudioWorkletNode(t, e) {
          var n, i, s;
          return (
            (n = this.rawContext),
            cT(
              cO(cf),
              "This node only works in a secure context (https or localhost)",
            ),
            new cf(n, t, e)
          );
        }
        addAudioWorkletModule(t, e) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            cT(
              cO(this.rawContext.audioWorklet),
              "AudioWorkletNode is only available in a secure context (https or localhost)",
            ),
              this._workletModules.has(e) ||
                this._workletModules.set(
                  e,
                  this.rawContext.audioWorklet.addModule(t),
                ),
              yield this._workletModules.get(e);
          });
        }
        workletsAreReady() {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            let t = [];
            this._workletModules.forEach((e) => t.push(e)),
              yield Promise.all(t);
          });
        }
        get updateInterval() {
          return this._ticker.updateInterval;
        }
        set updateInterval(t) {
          this._ticker.updateInterval = t;
        }
        get clockSource() {
          return this._ticker.type;
        }
        set clockSource(t) {
          this._ticker.type = t;
        }
        get latencyHint() {
          return this._latencyHint;
        }
        _setLatencyHint(t) {
          let e = 0;
          if (((this._latencyHint = t), cD(t)))
            switch (t) {
              case "interactive":
                e = 0.1;
                break;
              case "playback":
                e = 0.5;
                break;
              case "balanced":
                e = 0.25;
            }
          (this.lookAhead = e), (this.updateInterval = e / 2);
        }
        get rawContext() {
          return this._context;
        }
        now() {
          return this._context.currentTime + this.lookAhead;
        }
        immediate() {
          return this._context.currentTime;
        }
        resume() {
          var t;
          return cv((t = this._context))
            ? this._context.resume()
            : Promise.resolve();
        }
        close() {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            var t, e;
            cv((t = this._context)) && (yield this._context.close()),
              this._initialized && ((e = this), cJ.forEach((t) => t(e)));
          });
        }
        getConstant(t) {
          if (this._constants.has(t)) return this._constants.get(t);
          {
            let e = this._context.createBuffer(
                1,
                128,
                this._context.sampleRate,
              ),
              n = e.getChannelData(0);
            for (let i = 0; i < n.length; i++) n[i] = t;
            let s = this._context.createBufferSource();
            return (
              (s.channelCount = 1),
              (s.channelCountMode = "explicit"),
              (s.buffer = e),
              (s.loop = !0),
              s.start(0),
              this._constants.set(t, s),
              s
            );
          }
        }
        dispose() {
          return (
            super.dispose(),
            this._ticker.dispose(),
            this._timeouts.dispose(),
            Object.keys(this._constants).map((t) =>
              this._constants[t].disconnect(),
            ),
            this
          );
        }
        _timeoutLoop() {
          let t = this.now(),
            e = this._timeouts.peek();
          for (; this._timeouts.length && e && e.time <= t; )
            e.callback(), this._timeouts.shift(), (e = this._timeouts.peek());
        }
        setTimeout(t, e) {
          this._timeoutIds++;
          let n = this.now();
          return (
            this._timeouts.add({
              callback: t,
              id: this._timeoutIds,
              time: n + e,
            }),
            this._timeoutIds
          );
        }
        clearTimeout(t) {
          return (
            this._timeouts.forEach((e) => {
              e.id === t && this._timeouts.remove(e);
            }),
            this
          );
        }
        clearInterval(t) {
          return this.clearTimeout(t);
        }
        setInterval(t, e) {
          let n = ++this._timeoutIds,
            i = () => {
              let s = this.now();
              this._timeouts.add({
                callback() {
                  t(), i();
                },
                id: n,
                time: s + e,
              });
            };
          return i(), n;
        }
      }
      function c3(t, e) {
        cI(e)
          ? e.forEach((e) => c3(t, e))
          : Object.defineProperty(t, e, { enumerable: !0, writable: !1 });
      }
      let c8 = () => {};
      class c4 extends cU {
        constructor() {
          super(), (this.name = "ToneAudioBuffer"), (this.onload = c8);
          let t = cW(c4.getDefaults(), arguments, ["url", "onload", "onerror"]);
          (this.reverse = t.reverse),
            (this.onload = t.onload),
            (t.url && cF(t.url)) || t.url instanceof c4
              ? this.set(t.url)
              : cD(t.url) && this.load(t.url).catch(t.onerror);
        }
        static getDefaults() {
          return { onerror: c8, onload: c8, reverse: !1 };
        }
        get sampleRate() {
          return this._buffer ? this._buffer.sampleRate : c9().sampleRate;
        }
        set(t) {
          return (
            t instanceof c4
              ? t.loaded
                ? (this._buffer = t.get())
                : (t.onload = () => {
                    this.set(t), this.onload(this);
                  })
              : (this._buffer = t),
            this._reversed && this._reverse(),
            this
          );
        }
        get() {
          return this._buffer;
        }
        load(t) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            let e = c4.load(t).then((t) => {
              this.set(t), this.onload(this);
            });
            c4.downloads.push(e);
            try {
              yield e;
            } finally {
              let n = c4.downloads.indexOf(e);
              c4.downloads.splice(n, 1);
            }
            return this;
          });
        }
        dispose() {
          return super.dispose(), (this._buffer = void 0), this;
        }
        fromArray(t) {
          let e = cI(t) && t[0].length > 0,
            n = e ? t.length : 1,
            i = e ? t[0].length : t.length,
            s = c9(),
            r = s.createBuffer(n, i, s.sampleRate),
            a = e || 1 !== n ? t : [t];
          for (let o = 0; o < n; o++) r.copyToChannel(a[o], o);
          return (this._buffer = r), this;
        }
        toMono(t) {
          if (cM(t)) this.fromArray(this.toArray(t));
          else {
            let e = new Float32Array(this.length),
              n = this.numberOfChannels;
            for (let i = 0; i < n; i++) {
              let s = this.toArray(i);
              for (let r = 0; r < s.length; r++) e[r] += s[r];
            }
            (e = e.map((t) => t / n)), this.fromArray(e);
          }
          return this;
        }
        toArray(t) {
          if (cM(t)) return this.getChannelData(t);
          if (1 === this.numberOfChannels) return this.toArray(0);
          {
            let e = [];
            for (let n = 0; n < this.numberOfChannels; n++)
              e[n] = this.getChannelData(n);
            return e;
          }
        }
        getChannelData(t) {
          return this._buffer
            ? this._buffer.getChannelData(t)
            : new Float32Array(0);
        }
        slice(t, e = this.duration) {
          let n = Math.floor(t * this.sampleRate),
            i = Math.floor(e * this.sampleRate);
          cT(n < i, "The start time must be less than the end time");
          let s = c9().createBuffer(
            this.numberOfChannels,
            i - n,
            this.sampleRate,
          );
          for (let r = 0; r < this.numberOfChannels; r++)
            s.copyToChannel(this.getChannelData(r).subarray(n, i), r);
          return new c4(s);
        }
        _reverse() {
          if (this.loaded)
            for (let t = 0; t < this.numberOfChannels; t++)
              this.getChannelData(t).reverse();
          return this;
        }
        get loaded() {
          return this.length > 0;
        }
        get duration() {
          return this._buffer ? this._buffer.duration : 0;
        }
        get length() {
          return this._buffer ? this._buffer.length : 0;
        }
        get numberOfChannels() {
          return this._buffer ? this._buffer.numberOfChannels : 0;
        }
        get reverse() {
          return this._reversed;
        }
        set reverse(t) {
          this._reversed !== t && ((this._reversed = t), this._reverse());
        }
        static fromArray(t) {
          return new c4().fromArray(t);
        }
        static fromUrl(t) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            let e = new c4();
            return yield e.load(t);
          });
        }
        static load(t) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            let e = t.match(/\[([^\]\[]+\|.+)\]$/);
            if (e) {
              let n = e[1].split("|"),
                i = n[0];
              for (let s of n)
                if (c4.supportsType(s)) {
                  i = s;
                  break;
                }
              t = t.replace(e[0], i);
            }
            let r =
                "" === c4.baseUrl || c4.baseUrl.endsWith("/")
                  ? c4.baseUrl
                  : c4.baseUrl + "/",
              a = yield fetch(r + t);
            if (!a.ok) throw Error(`could not load url: ${t}`);
            let o = yield a.arrayBuffer(),
              l = yield c9().decodeAudioData(o);
            return l;
          });
        }
        static supportsType(t) {
          let e = t.split("."),
            n = e[e.length - 1],
            i = document.createElement("audio").canPlayType("audio/" + n);
          return "" !== i;
        }
        static loaded() {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            for (yield Promise.resolve(); c4.downloads.length; )
              yield c4.downloads[0];
          });
        }
      }
      (c4.baseUrl = ""), (c4.downloads = []);
      class c6 extends c2 {
        constructor() {
          var t, e, n, i, s, r;
          super({
            clockSource: "offline",
            context: ((t = arguments[0]), cx(t))
              ? arguments[0]
              : ((e = arguments[0]),
                (n = arguments[1] * arguments[2]),
                (i = arguments[2]),
                new cg(e, n, i)),
            lookAhead: 0,
            updateInterval: ((s = arguments[0]), cx(s))
              ? 128 / arguments[0].sampleRate
              : 128 / arguments[2],
          }),
            (this.name = "OfflineContext"),
            (this._currentTime = 0),
            (this.isOffline = !0),
            (r = arguments[0]),
            (this._duration = cx(r)
              ? arguments[0].length / arguments[0].sampleRate
              : arguments[1]);
        }
        now() {
          return this._currentTime;
        }
        get currentTime() {
          return this._currentTime;
        }
        _renderClock(t) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            let e = 0;
            for (; this._duration - this._currentTime >= 0; ) {
              this.emit("tick"),
                (this._currentTime += 128 / this.sampleRate),
                e++;
              let n = Math.floor(this.sampleRate / 128);
              t && e % n == 0 && (yield new Promise((t) => setTimeout(t, 1)));
            }
          });
        }
        render(t = !0) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            yield this.workletsAreReady(), yield this._renderClock(t);
            let e = yield this._context.startRendering();
            return new c4(e);
          });
        }
        close() {
          return Promise.resolve();
        }
      }
      let c5 = new (class extends c1 {
          constructor() {
            super(...arguments),
              (this.lookAhead = 0),
              (this.latencyHint = 0),
              (this.isOffline = !1);
          }
          createAnalyser() {
            return {};
          }
          createOscillator() {
            return {};
          }
          createBufferSource() {
            return {};
          }
          createBiquadFilter() {
            return {};
          }
          createBuffer(t, e, n) {
            return {};
          }
          createChannelMerger(t) {
            return {};
          }
          createChannelSplitter(t) {
            return {};
          }
          createConstantSource() {
            return {};
          }
          createConvolver() {
            return {};
          }
          createDelay(t) {
            return {};
          }
          createDynamicsCompressor() {
            return {};
          }
          createGain() {
            return {};
          }
          createIIRFilter(t, e) {
            return {};
          }
          createPanner() {
            return {};
          }
          createPeriodicWave(t, e, n) {
            return {};
          }
          createStereoPanner() {
            return {};
          }
          createWaveShaper() {
            return {};
          }
          createMediaStreamSource(t) {
            return {};
          }
          createMediaElementSource(t) {
            return {};
          }
          createMediaStreamDestination() {
            return {};
          }
          decodeAudioData(t) {
            return Promise.resolve({});
          }
          createAudioWorkletNode(t, e) {
            return {};
          }
          get rawContext() {
            return {};
          }
          addAudioWorkletModule(t, e) {
            return (0, cP.__awaiter)(this, void 0, void 0, function* () {
              return Promise.resolve();
            });
          }
          resume() {
            return Promise.resolve();
          }
          setTimeout(t, e) {
            return 0;
          }
          clearTimeout(t) {
            return this;
          }
          setInterval(t, e) {
            return 0;
          }
          clearInterval(t) {
            return this;
          }
          getConstant(t) {
            return {};
          }
          get currentTime() {
            return 0;
          }
          get state() {
            return {};
          }
          get sampleRate() {
            return 0;
          }
          get listener() {
            return {};
          }
          get transport() {
            return {};
          }
          get draw() {
            return {};
          }
          set draw(t) {}
          get destination() {
            return {};
          }
          set destination(t) {}
          now() {
            return 0;
          }
          immediate() {
            return 0;
          }
        })(),
        c7 = c5;
      function c9() {
        return (
          c7 === c5 &&
            cV &&
            (function (t) {
              var e, n;
              c7 = cv(t) ? new c2(t) : cx((n = t)) ? new c6(t) : t;
            })(new c2()),
          c7
        );
      }
      if (cN && !cN.TONE_SILENCE_LOGGING) {
        let dt = "v";
        "dev" === i && (dt = "");
        let de = ` * Tone.js ${dt}${i} * `;
        console.log(`%c${de}`, "background: #000; color: #fff");
      }
      function dn(t) {
        return Math.pow(2, t / 12);
      }
      let di = 440;
      function ds(t) {
        return Math.round(dr(t));
      }
      function dr(t) {
        return 69 + 12 * Math.log2(t / di);
      }
      class da extends cU {
        constructor(t, e, n) {
          super(),
            (this.defaultUnits = "s"),
            (this._val = e),
            (this._units = n),
            (this.context = t),
            (this._expressions = this._getExpressions());
        }
        _getExpressions() {
          return {
            hz: {
              method: (t) => this._frequencyToUnits(parseFloat(t)),
              regexp: /^(\d+(?:\.\d+)?)hz$/i,
            },
            i: {
              method: (t) => this._ticksToUnits(parseInt(t, 10)),
              regexp: /^(\d+)i$/i,
            },
            m: {
              method: (t) =>
                this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature()),
              regexp: /^(\d+)m$/i,
            },
            n: {
              method: (t, e) => {
                let n = parseInt(t, 10),
                  i = "." === e ? 1.5 : 1;
                return 1 === n
                  ? this._beatsToUnits(this._getTimeSignature()) * i
                  : this._beatsToUnits(4 / n) * i;
              },
              regexp: /^(\d+)n(\.?)$/i,
            },
            number: {
              method: (t) =>
                this._expressions[this.defaultUnits].method.call(this, t),
              regexp: /^(\d+(?:\.\d+)?)$/,
            },
            s: {
              method: (t) => this._secondsToUnits(parseFloat(t)),
              regexp: /^(\d+(?:\.\d+)?)s$/,
            },
            samples: {
              method: (t) => parseInt(t, 10) / this.context.sampleRate,
              regexp: /^(\d+)samples$/,
            },
            t: {
              method: (t) => {
                let e = parseInt(t, 10);
                return this._beatsToUnits(8 / (3 * Math.floor(e)));
              },
              regexp: /^(\d+)t$/i,
            },
            tr: {
              method: (t, e, n) => {
                let i = 0;
                return (
                  t &&
                    "0" !== t &&
                    (i += this._beatsToUnits(
                      this._getTimeSignature() * parseFloat(t),
                    )),
                  e && "0" !== e && (i += this._beatsToUnits(parseFloat(e))),
                  n &&
                    "0" !== n &&
                    (i += this._beatsToUnits(parseFloat(n) / 4)),
                  i
                );
              },
              regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
            },
          };
        }
        valueOf() {
          if (
            (this._val instanceof da && this.fromType(this._val), ck(this._val))
          )
            return this._noArg();
          if (cD(this._val) && ck(this._units)) {
            for (let t in this._expressions)
              if (this._expressions[t].regexp.test(this._val.trim())) {
                this._units = t;
                break;
              }
          } else if (cE(this._val)) {
            let e = 0;
            for (let n in this._val)
              if (cO(this._val[n])) {
                let i = this._val[n],
                  s = new this.constructor(this.context, n).valueOf() * i;
                e += s;
              }
            return e;
          }
          if (cO(this._units)) {
            let r = this._expressions[this._units],
              a = this._val.toString().trim().match(r.regexp);
            return a
              ? r.method.apply(this, a.slice(1))
              : r.method.call(this, this._val);
          }
          return cD(this._val) ? parseFloat(this._val) : (0, this._val);
        }
        _frequencyToUnits(t) {
          return 1 / t;
        }
        _beatsToUnits(t) {
          return (60 / this._getBpm()) * t;
        }
        _secondsToUnits(t) {
          return t;
        }
        _ticksToUnits(t) {
          return (t * this._beatsToUnits(1)) / this._getPPQ();
        }
        _noArg() {
          return this._now();
        }
        _getBpm() {
          return this.context.transport.bpm.value;
        }
        _getTimeSignature() {
          return this.context.transport.timeSignature;
        }
        _getPPQ() {
          return this.context.transport.PPQ;
        }
        fromType(t) {
          switch (((this._units = void 0), this.defaultUnits)) {
            case "s":
              this._val = t.toSeconds();
              break;
            case "i":
              this._val = t.toTicks();
              break;
            case "hz":
              this._val = t.toFrequency();
              break;
            case "midi":
              this._val = t.toMidi();
          }
          return this;
        }
        toFrequency() {
          return 1 / this.toSeconds();
        }
        toSamples() {
          return this.toSeconds() * this.context.sampleRate;
        }
        toMilliseconds() {
          return 1e3 * this.toSeconds();
        }
      }
      class dl extends da {
        constructor() {
          super(...arguments), (this.name = "TimeClass");
        }
        _getExpressions() {
          return Object.assign(super._getExpressions(), {
            now: {
              method: (t) =>
                this._now() + new this.constructor(this.context, t).valueOf(),
              regexp: /^\+(.+)/,
            },
            quantize: {
              method: (t) => {
                let e = new dl(this.context, t).valueOf();
                return this._secondsToUnits(
                  this.context.transport.nextSubdivision(e),
                );
              },
              regexp: /^@(.+)/,
            },
          });
        }
        quantize(t, e = 1) {
          let n = new this.constructor(this.context, t).valueOf(),
            i = this.valueOf();
          return i + (Math.round(i / n) * n - i) * e;
        }
        toNotation() {
          let t = this.toSeconds(),
            e = ["1m"];
          for (let n = 1; n < 9; n++) {
            let i = Math.pow(2, n);
            e.push(i + "n."), e.push(i + "n"), e.push(i + "t");
          }
          e.push("0");
          let s = e[0],
            r = new dl(this.context, e[0]).toSeconds();
          return (
            e.forEach((e) => {
              let n = new dl(this.context, e).toSeconds();
              Math.abs(n - t) < Math.abs(r - t) && ((s = e), (r = n));
            }),
            s
          );
        }
        toBarsBeatsSixteenths() {
          let t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          e = parseFloat(e.toFixed(4));
          let n = Math.floor(e / this._getTimeSignature()),
            i = (e % 1) * 4;
          e = Math.floor(e) % this._getTimeSignature();
          let s = i.toString();
          s.length > 3 && (i = parseFloat(parseFloat(s).toFixed(3)));
          let r = [n, e, i];
          return r.join(":");
        }
        toTicks() {
          let t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.round(e * this._getPPQ());
        }
        toSeconds() {
          return this.valueOf();
        }
        toMidi() {
          return ds(this.toFrequency());
        }
        _now() {
          return this.context.now();
        }
      }
      class du extends dl {
        constructor() {
          super(...arguments),
            (this.name = "Frequency"),
            (this.defaultUnits = "hz");
        }
        static get A4() {
          return di;
        }
        static set A4(t) {
          var e;
          di = t;
        }
        _getExpressions() {
          return Object.assign({}, super._getExpressions(), {
            midi: {
              regexp: /^(\d+(?:\.\d+)?midi)/,
              method(t) {
                return "midi" === this.defaultUnits ? t : du.mtof(t);
              },
            },
            note: {
              regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
              method(t, e) {
                let n = dh[t.toLowerCase()],
                  i = n + (parseInt(e, 10) + 1) * 12;
                return "midi" === this.defaultUnits ? i : du.mtof(i);
              },
            },
            tr: {
              regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
              method(t, e, n) {
                let i = 1;
                return (
                  t &&
                    "0" !== t &&
                    (i *= this._beatsToUnits(
                      this._getTimeSignature() * parseFloat(t),
                    )),
                  e && "0" !== e && (i *= this._beatsToUnits(parseFloat(e))),
                  n &&
                    "0" !== n &&
                    (i *= this._beatsToUnits(parseFloat(n) / 4)),
                  i
                );
              },
            },
          });
        }
        transpose(t) {
          return new du(this.context, this.valueOf() * dn(t));
        }
        harmonize(t) {
          return t.map((t) => this.transpose(t));
        }
        toMidi() {
          return ds(this.valueOf());
        }
        toNote() {
          let t = this.toFrequency(),
            e = Math.log2(t / du.A4),
            n = Math.round(12 * e) + 57,
            i = Math.floor(n / 12);
          i < 0 && (n += -12 * i);
          let s = dc[n % 12];
          return s + i.toString();
        }
        toSeconds() {
          return 1 / super.toSeconds();
        }
        toTicks() {
          let t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.floor(e * this._getPPQ());
        }
        _noArg() {
          return 0;
        }
        _frequencyToUnits(t) {
          return t;
        }
        _ticksToUnits(t) {
          return 1 / ((60 * t) / (this._getBpm() * this._getPPQ()));
        }
        _beatsToUnits(t) {
          return 1 / super._beatsToUnits(t);
        }
        _secondsToUnits(t) {
          return 1 / t;
        }
        static mtof(t) {
          var e;
          return di * Math.pow(2, (t - 69) / 12);
        }
        static ftom(t) {
          return ds(t);
        }
      }
      let dh = {
          cbb: -2,
          cb: -1,
          c: 0,
          "c#": 1,
          cx: 2,
          dbb: 0,
          db: 1,
          d: 2,
          "d#": 3,
          dx: 4,
          ebb: 2,
          eb: 3,
          e: 4,
          "e#": 5,
          ex: 6,
          fbb: 3,
          fb: 4,
          f: 5,
          "f#": 6,
          fx: 7,
          gbb: 5,
          gb: 6,
          g: 7,
          "g#": 8,
          gx: 9,
          abb: 7,
          ab: 8,
          a: 9,
          "a#": 10,
          ax: 11,
          bbb: 9,
          bb: 10,
          b: 11,
          "b#": 12,
          bx: 13,
        },
        dc = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
      class dd extends dl {
        constructor() {
          super(...arguments), (this.name = "TransportTime");
        }
        _now() {
          return this.context.transport.seconds;
        }
      }
      class dp extends cU {
        constructor() {
          super();
          let t = cW(dp.getDefaults(), arguments, ["context"]);
          this.defaultContext
            ? (this.context = this.defaultContext)
            : (this.context = t.context);
        }
        static getDefaults() {
          return { context: c9() };
        }
        now() {
          return this.context.currentTime + this.context.lookAhead;
        }
        immediate() {
          return this.context.currentTime;
        }
        get sampleTime() {
          return 1 / this.context.sampleRate;
        }
        get blockTime() {
          return 128 / this.context.sampleRate;
        }
        toSeconds(t) {
          return new dl(this.context, t).toSeconds();
        }
        toFrequency(t) {
          return new du(this.context, t).toFrequency();
        }
        toTicks(t) {
          return new dd(this.context, t).toTicks();
        }
        _getPartialProperties(t) {
          let e = this.get();
          return (
            Object.keys(e).forEach((n) => {
              ck(t[n]) && delete e[n];
            }),
            e
          );
        }
        get() {
          var t;
          let e = this.constructor.getDefaults();
          return (
            Object.keys(e).forEach((t) => {
              if (Reflect.has(this, t)) {
                let n = this[t];
                if (cO(n) && cO(n.value) && cO(n.setValueAtTime))
                  e[t] = n.value;
                else if (n instanceof dp) e[t] = n._getPartialProperties(e[t]);
                else {
                  var i;
                  cI(n) || cM(n) || cD(n) || "boolean" == typeof n
                    ? (e[t] = n)
                    : delete e[t];
                }
              }
            }),
            e
          );
        }
        set(t) {
          return (
            Object.keys(t).forEach((e) => {
              Reflect.has(this, e) &&
                cO(this[e]) &&
                (this[e] && cO(this[e].value) && cO(this[e].setValueAtTime)
                  ? this[e].value !== t[e] && (this[e].value = t[e])
                  : this[e] instanceof dp
                  ? this[e].set(t[e])
                  : (this[e] = t[e]));
            }),
            this
          );
        }
      }
      class df extends cH {
        constructor(t = "stopped") {
          super(),
            (this.name = "StateTimeline"),
            (this._initial = t),
            this.setStateAtTime(this._initial, 0);
        }
        getValueAtTime(t) {
          let e = this.get(t);
          return null !== e ? e.state : this._initial;
        }
        setStateAtTime(t, e, n) {
          return (
            cb(e, 0),
            this.add(Object.assign({}, n, { state: t, time: e })),
            this
          );
        }
        getLastState(t, e) {
          let n = this._search(e);
          for (let i = n; i >= 0; i--) {
            let s = this._timeline[i];
            if (s.state === t) return s;
          }
        }
        getNextState(t, e) {
          let n = this._search(e);
          if (-1 !== n)
            for (let i = n; i < this._timeline.length; i++) {
              let s = this._timeline[i];
              if (s.state === t) return s;
            }
        }
      }
      class dm extends dp {
        constructor() {
          var t, e;
          super(cW(dm.getDefaults(), arguments, ["param", "units", "convert"])),
            (this.name = "Param"),
            (this.overridden = !1),
            (this._minOutput = 1e-7);
          let n = cW(dm.getDefaults(), arguments, [
            "param",
            "units",
            "convert",
          ]);
          for (
            cT(
              cO(n.param) && (cw((t = n.param)) || n.param instanceof dm),
              "param must be an AudioParam",
            );
            !cw((e = n.param));

          )
            n.param = n.param._param;
          (this._swappable = !!cO(n.swappable) && n.swappable),
            this._swappable
              ? ((this.input = this.context.createGain()),
                (this._param = n.param),
                this.input.connect(this._param))
              : (this._param = this.input = n.param),
            (this._events = new cH(1e3)),
            (this._initialValue = this._param.defaultValue),
            (this.units = n.units),
            (this.convert = n.convert),
            (this._minValue = n.minValue),
            (this._maxValue = n.maxValue),
            cO(n.value) &&
              n.value !== this._toType(this._initialValue) &&
              this.setValueAtTime(n.value, 0);
        }
        static getDefaults() {
          return Object.assign(dp.getDefaults(), {
            convert: !0,
            units: "number",
          });
        }
        get value() {
          let t = this.now();
          return this.getValueAtTime(t);
        }
        set value(t) {
          this.cancelScheduledValues(this.now()),
            this.setValueAtTime(t, this.now());
        }
        get minValue() {
          return cO(this._minValue)
            ? this._minValue
            : "time" === this.units ||
              "frequency" === this.units ||
              "normalRange" === this.units ||
              "positive" === this.units ||
              "transportTime" === this.units ||
              "ticks" === this.units ||
              "bpm" === this.units ||
              "hertz" === this.units ||
              "samples" === this.units
            ? 0
            : "audioRange" === this.units
            ? -1
            : "decibels" === this.units
            ? -1 / 0
            : this._param.minValue;
        }
        get maxValue() {
          return cO(this._maxValue)
            ? this._maxValue
            : "normalRange" === this.units || "audioRange" === this.units
            ? 1
            : this._param.maxValue;
        }
        _is(t, e) {
          return this.units === e;
        }
        _assertRange(t) {
          return (
            cO(this.maxValue) &&
              cO(this.minValue) &&
              cb(
                t,
                this._fromType(this.minValue),
                this._fromType(this.maxValue),
              ),
            t
          );
        }
        _fromType(t) {
          if (this.convert && !this.overridden) {
            if (this._is(t, "time")) return this.toSeconds(t);
            if (this._is(t, "decibels")) {
              var e;
              return Math.pow(10, t / 20);
            }
            if (this._is(t, "frequency")) return this.toFrequency(t);
            else return t;
          }
          return this.overridden ? 0 : t;
        }
        _toType(t) {
          var e;
          return this.convert && "decibels" === this.units
            ? 20 * (Math.log(t) / Math.LN10)
            : t;
        }
        setValueAtTime(t, e) {
          let n = this.toSeconds(e),
            i = this._fromType(t);
          return (
            cT(
              isFinite(i) && isFinite(n),
              `Invalid argument(s) to setValueAtTime: ${JSON.stringify(
                t,
              )}, ${JSON.stringify(e)}`,
            ),
            this._assertRange(i),
            this.log(this.units, "setValueAtTime", t, n),
            this._events.add({ time: n, type: "setValueAtTime", value: i }),
            this._param.setValueAtTime(i, n),
            this
          );
        }
        getValueAtTime(t) {
          let e = Math.max(this.toSeconds(t), 0),
            n = this._events.getAfter(e),
            i = this._events.get(e),
            s = this._initialValue;
          if (null === i) s = this._initialValue;
          else if (
            "setTargetAtTime" === i.type &&
            (null === n || "setValueAtTime" === n.type)
          ) {
            let r = this._events.getBefore(i.time),
              a;
            (a = null === r ? this._initialValue : r.value),
              "setTargetAtTime" === i.type &&
                (s = this._exponentialApproach(
                  i.time,
                  a,
                  i.value,
                  i.constant,
                  e,
                ));
          } else if (null === n) s = i.value;
          else if (
            "linearRampToValueAtTime" === n.type ||
            "exponentialRampToValueAtTime" === n.type
          ) {
            let o = i.value;
            if ("setTargetAtTime" === i.type) {
              let l = this._events.getBefore(i.time);
              o = null === l ? this._initialValue : l.value;
            }
            s =
              "linearRampToValueAtTime" === n.type
                ? this._linearInterpolate(i.time, o, n.time, n.value, e)
                : this._exponentialInterpolate(i.time, o, n.time, n.value, e);
          } else s = i.value;
          return this._toType(s);
        }
        setRampPoint(t) {
          t = this.toSeconds(t);
          let e = this.getValueAtTime(t);
          return (
            this.cancelAndHoldAtTime(t),
            0 === this._fromType(e) && (e = this._toType(this._minOutput)),
            this.setValueAtTime(e, t),
            this
          );
        }
        linearRampToValueAtTime(t, e) {
          let n = this._fromType(t),
            i = this.toSeconds(e);
          return (
            cT(
              isFinite(n) && isFinite(i),
              `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(
                t,
              )}, ${JSON.stringify(e)}`,
            ),
            this._assertRange(n),
            this._events.add({
              time: i,
              type: "linearRampToValueAtTime",
              value: n,
            }),
            this.log(this.units, "linearRampToValueAtTime", t, i),
            this._param.linearRampToValueAtTime(n, i),
            this
          );
        }
        exponentialRampToValueAtTime(t, e) {
          let n = this._fromType(t);
          (n = cY(n, 0) ? this._minOutput : n), this._assertRange(n);
          let i = this.toSeconds(e);
          return (
            cT(
              isFinite(n) && isFinite(i),
              `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(
                t,
              )}, ${JSON.stringify(e)}`,
            ),
            this._events.add({
              time: i,
              type: "exponentialRampToValueAtTime",
              value: n,
            }),
            this.log(this.units, "exponentialRampToValueAtTime", t, i),
            this._param.exponentialRampToValueAtTime(n, i),
            this
          );
        }
        exponentialRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)),
            this
          );
        }
        linearRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.linearRampToValueAtTime(t, n + this.toSeconds(e)),
            this
          );
        }
        targetRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.exponentialApproachValueAtTime(t, n, e),
            this
          );
        }
        exponentialApproachValueAtTime(t, e, n) {
          (e = this.toSeconds(e)), (n = this.toSeconds(n));
          let i = Math.log(n + 1) / Math.log(200);
          return (
            this.setTargetAtTime(t, e, i),
            this.cancelAndHoldAtTime(e + 0.9 * n),
            this.linearRampToValueAtTime(t, e + n),
            this
          );
        }
        setTargetAtTime(t, e, n) {
          let i = this._fromType(t);
          cT(
            isFinite(n) && n > 0,
            "timeConstant must be a number greater than 0",
          );
          let s = this.toSeconds(e);
          return (
            this._assertRange(i),
            cT(
              isFinite(i) && isFinite(s),
              `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(
                t,
              )}, ${JSON.stringify(e)}`,
            ),
            this._events.add({
              constant: n,
              time: s,
              type: "setTargetAtTime",
              value: i,
            }),
            this.log(this.units, "setTargetAtTime", t, s, n),
            this._param.setTargetAtTime(i, s, n),
            this
          );
        }
        setValueCurveAtTime(t, e, n, i = 1) {
          (n = this.toSeconds(n)), (e = this.toSeconds(e));
          let s = this._fromType(t[0]) * i;
          this.setValueAtTime(this._toType(s), e);
          let r = n / (t.length - 1);
          for (let a = 1; a < t.length; a++) {
            let o = this._fromType(t[a]) * i;
            this.linearRampToValueAtTime(this._toType(o), e + a * r);
          }
          return this;
        }
        cancelScheduledValues(t) {
          let e = this.toSeconds(t);
          return (
            cT(
              isFinite(e),
              `Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`,
            ),
            this._events.cancel(e),
            this._param.cancelScheduledValues(e),
            this.log(this.units, "cancelScheduledValues", e),
            this
          );
        }
        cancelAndHoldAtTime(t) {
          let e = this.toSeconds(t),
            n = this._fromType(this.getValueAtTime(e));
          cT(
            isFinite(e),
            `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`,
          ),
            this.log(this.units, "cancelAndHoldAtTime", e, "value=" + n);
          let i = this._events.get(e),
            s = this._events.getAfter(e);
          return (
            i && cY(i.time, e)
              ? s
                ? (this._param.cancelScheduledValues(s.time),
                  this._events.cancel(s.time))
                : (this._param.cancelAndHoldAtTime(e),
                  this._events.cancel(e + this.sampleTime))
              : s &&
                (this._param.cancelScheduledValues(s.time),
                this._events.cancel(s.time),
                "linearRampToValueAtTime" === s.type
                  ? this.linearRampToValueAtTime(this._toType(n), e)
                  : "exponentialRampToValueAtTime" === s.type &&
                    this.exponentialRampToValueAtTime(this._toType(n), e)),
            this._events.add({ time: e, type: "setValueAtTime", value: n }),
            this._param.setValueAtTime(n, e),
            this
          );
        }
        rampTo(t, e = 0.1, n) {
          return (
            "frequency" === this.units ||
            "bpm" === this.units ||
            "decibels" === this.units
              ? this.exponentialRampTo(t, e, n)
              : this.linearRampTo(t, e, n),
            this
          );
        }
        apply(t) {
          let e = this.context.currentTime;
          t.setValueAtTime(this.getValueAtTime(e), e);
          let n = this._events.get(e);
          if (n && "setTargetAtTime" === n.type) {
            let i = this._events.getAfter(n.time),
              s = i ? i.time : e + 2,
              r = (s - e) / 10;
            for (let a = e; a < s; a += r)
              t.linearRampToValueAtTime(this.getValueAtTime(a), a);
          }
          return (
            this._events.forEachAfter(this.context.currentTime, (e) => {
              "cancelScheduledValues" === e.type
                ? t.cancelScheduledValues(e.time)
                : "setTargetAtTime" === e.type
                ? t.setTargetAtTime(e.value, e.time, e.constant)
                : t[e.type](e.value, e.time);
            }),
            this
          );
        }
        setParam(t) {
          cT(
            this._swappable,
            "The Param must be assigned as 'swappable' in the constructor",
          );
          let e = this.input;
          return (
            e.disconnect(this._param),
            this.apply(t),
            (this._param = t),
            e.connect(this._param),
            this
          );
        }
        dispose() {
          return super.dispose(), this._events.dispose(), this;
        }
        get defaultValue() {
          return this._toType(this._param.defaultValue);
        }
        _exponentialApproach(t, e, n, i, s) {
          return n + (e - n) * Math.exp(-(s - t) / i);
        }
        _linearInterpolate(t, e, n, i, s) {
          return e + (i - e) * ((s - t) / (n - t));
        }
        _exponentialInterpolate(t, e, n, i, s) {
          return e * Math.pow(i / e, (s - t) / (n - t));
        }
      }
      class d_ extends dp {
        constructor() {
          super(...arguments),
            (this.name = "ToneAudioNode"),
            (this._internalChannels = []);
        }
        get numberOfInputs() {
          var t;
          return cO(this.input)
            ? cw((t = this.input)) || this.input instanceof dm
              ? 1
              : this.input.numberOfInputs
            : 0;
        }
        get numberOfOutputs() {
          return cO(this.output) ? this.output.numberOfOutputs : 0;
        }
        _isAudioNode(t) {
          var e;
          return cO(t) && (t instanceof d_ || cy(t));
        }
        _getInternalNodes() {
          let t = this._internalChannels.slice(0);
          return (
            this._isAudioNode(this.input) && t.push(this.input),
            this._isAudioNode(this.output) &&
              this.input !== this.output &&
              t.push(this.output),
            t
          );
        }
        _setChannelProperties(t) {
          let e = this._getInternalNodes();
          e.forEach((e) => {
            (e.channelCount = t.channelCount),
              (e.channelCountMode = t.channelCountMode),
              (e.channelInterpretation = t.channelInterpretation);
          });
        }
        _getChannelProperties() {
          let t = this._getInternalNodes();
          cT(t.length > 0, "ToneAudioNode does not have any internal nodes");
          let e = t[0];
          return {
            channelCount: e.channelCount,
            channelCountMode: e.channelCountMode,
            channelInterpretation: e.channelInterpretation,
          };
        }
        get channelCount() {
          return this._getChannelProperties().channelCount;
        }
        set channelCount(t) {
          let e = this._getChannelProperties();
          this._setChannelProperties(Object.assign(e, { channelCount: t }));
        }
        get channelCountMode() {
          return this._getChannelProperties().channelCountMode;
        }
        set channelCountMode(t) {
          let e = this._getChannelProperties();
          this._setChannelProperties(Object.assign(e, { channelCountMode: t }));
        }
        get channelInterpretation() {
          return this._getChannelProperties().channelInterpretation;
        }
        set channelInterpretation(t) {
          let e = this._getChannelProperties();
          this._setChannelProperties(
            Object.assign(e, { channelInterpretation: t }),
          );
        }
        connect(t, e = 0, n = 0) {
          return dv(this, t, e, n), this;
        }
        toDestination() {
          return this.connect(this.context.destination), this;
        }
        toMaster() {
          return (
            cS("toMaster() has been renamed toDestination()"),
            this.toDestination()
          );
        }
        disconnect(t, e = 0, n = 0) {
          return (
            (function (t, e, n = 0, i = 0) {
              var s, r, a;
              if (cO(e)) for (; e instanceof d_; ) e = e.input;
              for (; !cy((s = t)); ) cO(t.output) && (t = t.output);
              cw((r = e))
                ? t.disconnect(e, n)
                : cy((a = e))
                ? t.disconnect(e, n, i)
                : t.disconnect();
            })(this, t, e, n),
            this
          );
        }
        chain(...t) {
          return dg(this, ...t), this;
        }
        fan(...t) {
          return t.forEach((t) => this.connect(t)), this;
        }
        dispose() {
          var t, e;
          return (
            super.dispose(),
            cO(this.input) &&
              (this.input instanceof d_
                ? this.input.dispose()
                : cy((t = this.input)) && this.input.disconnect()),
            cO(this.output) &&
              (this.output instanceof d_
                ? this.output.dispose()
                : cy((e = this.output)) && this.output.disconnect()),
            (this._internalChannels = []),
            this
          );
        }
      }
      function dg(...t) {
        let e = t.shift();
        t.reduce((t, e) => {
          if (t instanceof d_) t.connect(e);
          else {
            var n;
            cy(t) && dv(t, e);
          }
          return e;
        }, e);
      }
      function dv(t, e, n = 0, i = 0) {
        var s, r;
        for (
          cT(cO(t), "Cannot connect from undefined node"),
            cT(cO(e), "Cannot connect to undefined node"),
            (e instanceof d_ || cy((s = e))) &&
              cT(e.numberOfInputs > 0, "Cannot connect to node with no inputs"),
            cT(
              t.numberOfOutputs > 0,
              "Cannot connect from node with no outputs",
            );
          e instanceof d_ || e instanceof dm;

        )
          cO(e.input) && (e = e.input);
        for (; t instanceof d_; ) cO(t.output) && (t = t.output);
        cw((r = e)) ? t.connect(e, n) : t.connect(e, n, i);
      }
      class dy extends d_ {
        constructor() {
          super(cW(dy.getDefaults(), arguments, ["gain", "units"])),
            (this.name = "Gain"),
            (this._gainNode = this.context.createGain()),
            (this.input = this._gainNode),
            (this.output = this._gainNode);
          let t = cW(dy.getDefaults(), arguments, ["gain", "units"]);
          (this.gain = new dm({
            context: this.context,
            convert: t.convert,
            param: this._gainNode.gain,
            units: t.units,
            value: t.gain,
            minValue: t.minValue,
            maxValue: t.maxValue,
          })),
            c3(this, "gain");
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            convert: !0,
            gain: 1,
            units: "gain",
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._gainNode.disconnect(),
            this.gain.dispose(),
            this
          );
        }
      }
      class dw extends d_ {
        constructor(t) {
          super(t),
            (this.onended = c8),
            (this._startTime = -1),
            (this._stopTime = -1),
            (this._timeout = -1),
            (this.output = new dy({ context: this.context, gain: 0 })),
            (this._gainNode = this.output),
            (this.getStateAtTime = function (t) {
              let e = this.toSeconds(t);
              return -1 !== this._startTime &&
                e >= this._startTime &&
                (-1 === this._stopTime || e <= this._stopTime)
                ? "started"
                : "stopped";
            }),
            (this._fadeIn = t.fadeIn),
            (this._fadeOut = t.fadeOut),
            (this._curve = t.curve),
            (this.onended = t.onended);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            curve: "linear",
            fadeIn: 0,
            fadeOut: 0,
            onended: c8,
          });
        }
        _startGain(t, e = 1) {
          cT(-1 === this._startTime, "Source cannot be started more than once");
          let n = this.toSeconds(this._fadeIn);
          return (
            (this._startTime = t + n),
            (this._startTime = Math.max(
              this._startTime,
              this.context.currentTime,
            )),
            n > 0
              ? (this._gainNode.gain.setValueAtTime(0, t),
                "linear" === this._curve
                  ? this._gainNode.gain.linearRampToValueAtTime(e, t + n)
                  : this._gainNode.gain.exponentialApproachValueAtTime(e, t, n))
              : this._gainNode.gain.setValueAtTime(e, t),
            this
          );
        }
        stop(t) {
          return this.log("stop", t), this._stopGain(this.toSeconds(t)), this;
        }
        _stopGain(t) {
          cT(-1 !== this._startTime, "'start' must be called before 'stop'"),
            this.cancelStop();
          let e = this.toSeconds(this._fadeOut);
          return (
            (this._stopTime = this.toSeconds(t) + e),
            (this._stopTime = Math.max(
              this._stopTime,
              this.context.currentTime,
            )),
            e > 0
              ? "linear" === this._curve
                ? this._gainNode.gain.linearRampTo(0, e, t)
                : this._gainNode.gain.targetRampTo(0, e, t)
              : (this._gainNode.gain.cancelAndHoldAtTime(t),
                this._gainNode.gain.setValueAtTime(0, t)),
            this.context.clearTimeout(this._timeout),
            (this._timeout = this.context.setTimeout(() => {
              let t = "exponential" === this._curve ? 2 * e : 0;
              this._stopSource(this.now() + t), this._onended();
            }, this._stopTime - this.context.currentTime)),
            this
          );
        }
        _onended() {
          if (
            this.onended !== c8 &&
            (this.onended(this), (this.onended = c8), !this.context.isOffline)
          ) {
            let t = () => this.dispose();
            void 0 !== window.requestIdleCallback
              ? window.requestIdleCallback(t)
              : setTimeout(t, 1e3);
          }
        }
        get state() {
          return this.getStateAtTime(this.now());
        }
        cancelStop() {
          return (
            this.log("cancelStop"),
            cT(-1 !== this._startTime, "Source is not started"),
            this._gainNode.gain.cancelScheduledValues(
              this._startTime + this.sampleTime,
            ),
            this.context.clearTimeout(this._timeout),
            (this._stopTime = -1),
            this
          );
        }
        dispose() {
          return super.dispose(), this._gainNode.disconnect(), this;
        }
      }
      class dx extends dw {
        constructor() {
          super(cW(dx.getDefaults(), arguments, ["offset"])),
            (this.name = "ToneConstantSource"),
            (this._source = this.context.createConstantSource());
          let t = cW(dx.getDefaults(), arguments, ["offset"]);
          dv(this._source, this._gainNode),
            (this.offset = new dm({
              context: this.context,
              convert: t.convert,
              param: this._source.offset,
              units: t.units,
              value: t.offset,
              minValue: t.minValue,
              maxValue: t.maxValue,
            }));
        }
        static getDefaults() {
          return Object.assign(dw.getDefaults(), {
            convert: !0,
            offset: 1,
            units: "number",
          });
        }
        start(t) {
          let e = this.toSeconds(t);
          return (
            this.log("start", e),
            this._startGain(e),
            this._source.start(e),
            this
          );
        }
        _stopSource(t) {
          this._source.stop(t);
        }
        dispose() {
          return (
            super.dispose(),
            "started" === this.state && this.stop(),
            this._source.disconnect(),
            this.offset.dispose(),
            this
          );
        }
      }
      class dT extends d_ {
        constructor() {
          super(cW(dT.getDefaults(), arguments, ["value", "units"])),
            (this.name = "Signal"),
            (this.override = !0);
          let t = cW(dT.getDefaults(), arguments, ["value", "units"]);
          (this.output = this._constantSource =
            new dx({
              context: this.context,
              convert: t.convert,
              offset: t.value,
              units: t.units,
              minValue: t.minValue,
              maxValue: t.maxValue,
            })),
            this._constantSource.start(0),
            (this.input = this._param = this._constantSource.offset);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            convert: !0,
            units: "number",
            value: 0,
          });
        }
        connect(t, e = 0, n = 0) {
          return db(this, t, e, n), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._param.dispose(),
            this._constantSource.dispose(),
            this
          );
        }
        setValueAtTime(t, e) {
          return this._param.setValueAtTime(t, e), this;
        }
        getValueAtTime(t) {
          return this._param.getValueAtTime(t);
        }
        setRampPoint(t) {
          return this._param.setRampPoint(t), this;
        }
        linearRampToValueAtTime(t, e) {
          return this._param.linearRampToValueAtTime(t, e), this;
        }
        exponentialRampToValueAtTime(t, e) {
          return this._param.exponentialRampToValueAtTime(t, e), this;
        }
        exponentialRampTo(t, e, n) {
          return this._param.exponentialRampTo(t, e, n), this;
        }
        linearRampTo(t, e, n) {
          return this._param.linearRampTo(t, e, n), this;
        }
        targetRampTo(t, e, n) {
          return this._param.targetRampTo(t, e, n), this;
        }
        exponentialApproachValueAtTime(t, e, n) {
          return this._param.exponentialApproachValueAtTime(t, e, n), this;
        }
        setTargetAtTime(t, e, n) {
          return this._param.setTargetAtTime(t, e, n), this;
        }
        setValueCurveAtTime(t, e, n, i) {
          return this._param.setValueCurveAtTime(t, e, n, i), this;
        }
        cancelScheduledValues(t) {
          return this._param.cancelScheduledValues(t), this;
        }
        cancelAndHoldAtTime(t) {
          return this._param.cancelAndHoldAtTime(t), this;
        }
        rampTo(t, e, n) {
          return this._param.rampTo(t, e, n), this;
        }
        get value() {
          return this._param.value;
        }
        set value(t) {
          this._param.value = t;
        }
        get convert() {
          return this._param.convert;
        }
        set convert(t) {
          this._param.convert = t;
        }
        get units() {
          return this._param.units;
        }
        get overridden() {
          return this._param.overridden;
        }
        set overridden(t) {
          this._param.overridden = t;
        }
        get maxValue() {
          return this._param.maxValue;
        }
        get minValue() {
          return this._param.minValue;
        }
        apply(t) {
          return this._param.apply(t), this;
        }
      }
      function db(t, e, n, i) {
        var s;
        (e instanceof dm || cw(e) || (e instanceof dT && e.override)) &&
          (e.cancelScheduledValues(0),
          e.setValueAtTime(0, 0),
          e instanceof dT && (e.overridden = !0)),
          dv(t, e, n, i);
      }
      class dC extends dm {
        constructor() {
          super(cW(dC.getDefaults(), arguments, ["value"])),
            (this.name = "TickParam"),
            (this._events = new cH(1 / 0)),
            (this._multiplier = 1);
          let t = cW(dC.getDefaults(), arguments, ["value"]);
          (this._multiplier = t.multiplier),
            this._events.cancel(0),
            this._events.add({
              ticks: 0,
              time: 0,
              type: "setValueAtTime",
              value: this._fromType(t.value),
            }),
            this.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(dm.getDefaults(), {
            multiplier: 1,
            units: "hertz",
            value: 1,
          });
        }
        setTargetAtTime(t, e, n) {
          (e = this.toSeconds(e)), this.setRampPoint(e);
          let i = this._fromType(t),
            s = this._events.get(e),
            r = Math.round(Math.max(1 / n, 1));
          for (let a = 0; a <= r; a++) {
            let o = n * a + e,
              l = this._exponentialApproach(s.time, s.value, i, n, o);
            this.linearRampToValueAtTime(this._toType(l), o);
          }
          return this;
        }
        setValueAtTime(t, e) {
          let n = this.toSeconds(e);
          super.setValueAtTime(t, e);
          let i = this._events.get(n),
            s = this._events.previousEvent(i),
            r = this._getTicksUntilEvent(s, n);
          return (i.ticks = Math.max(r, 0)), this;
        }
        linearRampToValueAtTime(t, e) {
          let n = this.toSeconds(e);
          super.linearRampToValueAtTime(t, e);
          let i = this._events.get(n),
            s = this._events.previousEvent(i),
            r = this._getTicksUntilEvent(s, n);
          return (i.ticks = Math.max(r, 0)), this;
        }
        exponentialRampToValueAtTime(t, e) {
          e = this.toSeconds(e);
          let n = this._fromType(t),
            i = this._events.get(e),
            s = Math.round(Math.max((e - i.time) * 10, 1)),
            r = (e - i.time) / s;
          for (let a = 0; a <= s; a++) {
            let o = r * a + i.time,
              l = this._exponentialInterpolate(i.time, i.value, e, n, o);
            this.linearRampToValueAtTime(this._toType(l), o);
          }
          return this;
        }
        _getTicksUntilEvent(t, e) {
          if (null === t)
            t = { ticks: 0, time: 0, type: "setValueAtTime", value: 0 };
          else if (ck(t.ticks)) {
            let n = this._events.previousEvent(t);
            t.ticks = this._getTicksUntilEvent(n, t.time);
          }
          let i = this._fromType(this.getValueAtTime(t.time)),
            s = this._fromType(this.getValueAtTime(e)),
            r = this._events.get(e);
          return (
            r &&
              r.time === e &&
              "setValueAtTime" === r.type &&
              (s = this._fromType(this.getValueAtTime(e - this.sampleTime))),
            0.5 * (e - t.time) * (i + s) + t.ticks
          );
        }
        getTicksAtTime(t) {
          let e = this.toSeconds(t),
            n = this._events.get(e);
          return Math.max(this._getTicksUntilEvent(n, e), 0);
        }
        getDurationOfTicks(t, e) {
          let n = this.toSeconds(e),
            i = this.getTicksAtTime(e);
          return this.getTimeOfTick(i + t) - n;
        }
        getTimeOfTick(t) {
          let e = this._events.get(t, "ticks"),
            n = this._events.getAfter(t, "ticks");
          if (e && e.ticks === t) return e.time;
          if (
            e &&
            n &&
            "linearRampToValueAtTime" === n.type &&
            e.value !== n.value
          ) {
            let i = this._fromType(this.getValueAtTime(e.time)),
              s = this._fromType(this.getValueAtTime(n.time)),
              r = (s - i) / (n.time - e.time),
              a = Math.sqrt(Math.pow(i, 2) - 2 * r * (e.ticks - t)),
              o = (-i + a) / r;
            return (o > 0 ? o : (-i - a) / r) + e.time;
          }
          return e
            ? 0 === e.value
              ? 1 / 0
              : e.time + (t - e.ticks) / e.value
            : t / this._initialValue;
        }
        ticksToTime(t, e) {
          return this.getDurationOfTicks(t, e);
        }
        timeToTicks(t, e) {
          let n = this.toSeconds(e),
            i = this.toSeconds(t),
            s = this.getTicksAtTime(n),
            r = this.getTicksAtTime(n + i);
          return r - s;
        }
        _fromType(t) {
          return "bpm" === this.units && this.multiplier
            ? 1 / (60 / t / this.multiplier)
            : super._fromType(t);
        }
        _toType(t) {
          return "bpm" === this.units && this.multiplier
            ? (t / this.multiplier) * 60
            : super._toType(t);
        }
        get multiplier() {
          return this._multiplier;
        }
        set multiplier(t) {
          let e = this.value;
          (this._multiplier = t),
            this.cancelScheduledValues(0),
            this.setValueAtTime(e, 0);
        }
      }
      class dA extends dT {
        constructor() {
          super(cW(dA.getDefaults(), arguments, ["value"])),
            (this.name = "TickSignal");
          let t = cW(dA.getDefaults(), arguments, ["value"]);
          this.input = this._param = new dC({
            context: this.context,
            convert: t.convert,
            multiplier: t.multiplier,
            param: this._constantSource.offset,
            units: t.units,
            value: t.value,
          });
        }
        static getDefaults() {
          return Object.assign(dT.getDefaults(), {
            multiplier: 1,
            units: "hertz",
            value: 1,
          });
        }
        ticksToTime(t, e) {
          return this._param.ticksToTime(t, e);
        }
        timeToTicks(t, e) {
          return this._param.timeToTicks(t, e);
        }
        getTimeOfTick(t) {
          return this._param.getTimeOfTick(t);
        }
        getDurationOfTicks(t, e) {
          return this._param.getDurationOfTicks(t, e);
        }
        getTicksAtTime(t) {
          return this._param.getTicksAtTime(t);
        }
        get multiplier() {
          return this._param.multiplier;
        }
        set multiplier(t) {
          this._param.multiplier = t;
        }
        dispose() {
          return super.dispose(), this._param.dispose(), this;
        }
      }
      class dS extends dp {
        constructor() {
          super(cW(dS.getDefaults(), arguments, ["frequency"])),
            (this.name = "TickSource"),
            (this._state = new df()),
            (this._tickOffset = new cH());
          let t = cW(dS.getDefaults(), arguments, ["frequency"]);
          (this.frequency = new dA({
            context: this.context,
            units: t.units,
            value: t.frequency,
          })),
            c3(this, "frequency"),
            this._state.setStateAtTime("stopped", 0),
            this.setTicksAtTime(0, 0);
        }
        static getDefaults() {
          return Object.assign(
            { frequency: 1, units: "hertz" },
            dp.getDefaults(),
          );
        }
        get state() {
          return this.getStateAtTime(this.now());
        }
        start(t, e) {
          let n = this.toSeconds(t);
          return (
            "started" !== this._state.getValueAtTime(n) &&
              (this._state.setStateAtTime("started", n),
              cO(e) && this.setTicksAtTime(e, n)),
            this
          );
        }
        stop(t) {
          let e = this.toSeconds(t);
          if ("stopped" === this._state.getValueAtTime(e)) {
            let n = this._state.get(e);
            n &&
              n.time > 0 &&
              (this._tickOffset.cancel(n.time), this._state.cancel(n.time));
          }
          return (
            this._state.cancel(e),
            this._state.setStateAtTime("stopped", e),
            this.setTicksAtTime(0, e),
            this
          );
        }
        pause(t) {
          let e = this.toSeconds(t);
          return (
            "started" === this._state.getValueAtTime(e) &&
              this._state.setStateAtTime("paused", e),
            this
          );
        }
        cancel(t) {
          return (
            (t = this.toSeconds(t)),
            this._state.cancel(t),
            this._tickOffset.cancel(t),
            this
          );
        }
        getTicksAtTime(t) {
          let e = this.toSeconds(t),
            n = this._state.getLastState("stopped", e),
            i = { state: "paused", time: e };
          this._state.add(i);
          let s = n,
            r = 0;
          return (
            this._state.forEachBetween(n.time, e + this.sampleTime, (t) => {
              let e = s.time,
                n = this._tickOffset.get(t.time);
              n && n.time >= s.time && ((r = n.ticks), (e = n.time)),
                "started" === s.state &&
                  "started" !== t.state &&
                  (r +=
                    this.frequency.getTicksAtTime(t.time) -
                    this.frequency.getTicksAtTime(e)),
                (s = t);
            }),
            this._state.remove(i),
            r
          );
        }
        get ticks() {
          return this.getTicksAtTime(this.now());
        }
        set ticks(t) {
          this.setTicksAtTime(t, this.now());
        }
        get seconds() {
          return this.getSecondsAtTime(this.now());
        }
        set seconds(t) {
          let e = this.now(),
            n = this.frequency.timeToTicks(t, e);
          this.setTicksAtTime(n, e);
        }
        getSecondsAtTime(t) {
          t = this.toSeconds(t);
          let e = this._state.getLastState("stopped", t),
            n = { state: "paused", time: t };
          this._state.add(n);
          let i = e,
            s = 0;
          return (
            this._state.forEachBetween(e.time, t + this.sampleTime, (t) => {
              let e = i.time,
                n = this._tickOffset.get(t.time);
              n && n.time >= i.time && ((s = n.seconds), (e = n.time)),
                "started" === i.state &&
                  "started" !== t.state &&
                  (s += t.time - e),
                (i = t);
            }),
            this._state.remove(n),
            s
          );
        }
        setTicksAtTime(t, e) {
          return (
            (e = this.toSeconds(e)),
            this._tickOffset.cancel(e),
            this._tickOffset.add({
              seconds: this.frequency.getDurationOfTicks(t, e),
              ticks: t,
              time: e,
            }),
            this
          );
        }
        getStateAtTime(t) {
          return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
        }
        getTimeOfTick(t, e = this.now()) {
          let n = this._tickOffset.get(e),
            i = this._state.get(e),
            s = Math.max(n.time, i.time),
            r = this.frequency.getTicksAtTime(s) + t - n.ticks;
          return this.frequency.getTimeOfTick(r);
        }
        forEachTickBetween(t, e, n) {
          let i = this._state.get(t);
          this._state.forEachBetween(t, e, (e) => {
            i &&
              "started" === i.state &&
              "started" !== e.state &&
              this.forEachTickBetween(
                Math.max(i.time, t),
                e.time - this.sampleTime,
                n,
              ),
              (i = e);
          });
          let s = null;
          if (i && "started" === i.state) {
            let r = Math.max(i.time, t),
              a = this.frequency.getTicksAtTime(r),
              o = this.frequency.getTicksAtTime(i.time),
              l = a - o,
              u = Math.ceil(l) - l;
            u = cY(u, 1) ? 0 : u;
            let h = this.frequency.getTimeOfTick(a + u);
            for (; h < e; ) {
              try {
                n(h, Math.round(this.getTicksAtTime(h)));
              } catch (c) {
                s = c;
                break;
              }
              h += this.frequency.getDurationOfTicks(1, h);
            }
          }
          if (s) throw s;
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            this._state.dispose(),
            this._tickOffset.dispose(),
            this.frequency.dispose(),
            this
          );
        }
      }
      class dk extends dp {
        constructor() {
          super(cW(dk.getDefaults(), arguments, ["callback", "frequency"])),
            (this.name = "Clock"),
            (this.callback = c8),
            (this._lastUpdate = 0),
            (this._state = new df("stopped")),
            (this._boundLoop = this._loop.bind(this));
          let t = cW(dk.getDefaults(), arguments, ["callback", "frequency"]);
          (this.callback = t.callback),
            (this._tickSource = new dS({
              context: this.context,
              frequency: t.frequency,
              units: t.units,
            })),
            (this._lastUpdate = 0),
            (this.frequency = this._tickSource.frequency),
            c3(this, "frequency"),
            this._state.setStateAtTime("stopped", 0),
            this.context.on("tick", this._boundLoop);
        }
        static getDefaults() {
          return Object.assign(dp.getDefaults(), {
            callback: c8,
            frequency: 1,
            units: "hertz",
          });
        }
        get state() {
          return this._state.getValueAtTime(this.now());
        }
        start(t, e) {
          cC(this.context);
          let n = this.toSeconds(t);
          return (
            this.log("start", n),
            "started" !== this._state.getValueAtTime(n) &&
              (this._state.setStateAtTime("started", n),
              this._tickSource.start(n, e),
              n < this._lastUpdate && this.emit("start", n, e)),
            this
          );
        }
        stop(t) {
          let e = this.toSeconds(t);
          return (
            this.log("stop", e),
            this._state.cancel(e),
            this._state.setStateAtTime("stopped", e),
            this._tickSource.stop(e),
            e < this._lastUpdate && this.emit("stop", e),
            this
          );
        }
        pause(t) {
          let e = this.toSeconds(t);
          return (
            "started" === this._state.getValueAtTime(e) &&
              (this._state.setStateAtTime("paused", e),
              this._tickSource.pause(e),
              e < this._lastUpdate && this.emit("pause", e)),
            this
          );
        }
        get ticks() {
          return Math.ceil(this.getTicksAtTime(this.now()));
        }
        set ticks(t) {
          this._tickSource.ticks = t;
        }
        get seconds() {
          return this._tickSource.seconds;
        }
        set seconds(t) {
          this._tickSource.seconds = t;
        }
        getSecondsAtTime(t) {
          return this._tickSource.getSecondsAtTime(t);
        }
        setTicksAtTime(t, e) {
          return this._tickSource.setTicksAtTime(t, e), this;
        }
        getTimeOfTick(t, e = this.now()) {
          return this._tickSource.getTimeOfTick(t, e);
        }
        getTicksAtTime(t) {
          return this._tickSource.getTicksAtTime(t);
        }
        nextTickTime(t, e) {
          let n = this.toSeconds(e),
            i = this.getTicksAtTime(n);
          return this._tickSource.getTimeOfTick(i + t, n);
        }
        _loop() {
          let t = this._lastUpdate,
            e = this.now();
          (this._lastUpdate = e),
            this.log("loop", t, e),
            t !== e &&
              (this._state.forEachBetween(t, e, (t) => {
                switch (t.state) {
                  case "started":
                    let e = this._tickSource.getTicksAtTime(t.time);
                    this.emit("start", t.time, e);
                    break;
                  case "stopped":
                    0 !== t.time && this.emit("stop", t.time);
                    break;
                  case "paused":
                    this.emit("pause", t.time);
                }
              }),
              this._tickSource.forEachTickBetween(t, e, (t, e) => {
                this.callback(t, e);
              }));
        }
        getStateAtTime(t) {
          let e = this.toSeconds(t);
          return this._state.getValueAtTime(e);
        }
        dispose() {
          return (
            super.dispose(),
            this.context.off("tick", this._boundLoop),
            this._tickSource.dispose(),
            this._state.dispose(),
            this
          );
        }
      }
      c0.mixin(dk);
      class dO extends cU {
        constructor() {
          super(),
            (this.name = "ToneAudioBuffers"),
            (this._buffers = new Map()),
            (this._loadingCount = 0);
          let t = cW(
            dO.getDefaults(),
            arguments,
            ["urls", "onload", "baseUrl"],
            "urls",
          );
          (this.baseUrl = t.baseUrl),
            Object.keys(t.urls).forEach((e) => {
              this._loadingCount++;
              let n = t.urls[e];
              this.add(
                e,
                n,
                this._bufferLoaded.bind(this, t.onload),
                t.onerror,
              );
            });
        }
        static getDefaults() {
          return { baseUrl: "", onerror: c8, onload: c8, urls: {} };
        }
        has(t) {
          return this._buffers.has(t.toString());
        }
        get(t) {
          return (
            cT(this.has(t), `ToneAudioBuffers has no buffer named: ${t}`),
            this._buffers.get(t.toString())
          );
        }
        _bufferLoaded(t) {
          this._loadingCount--, 0 === this._loadingCount && t && t();
        }
        get loaded() {
          return Array.from(this._buffers).every(([t, e]) => e.loaded);
        }
        add(t, e, n = c8, i = c8) {
          return (
            cD(e)
              ? this._buffers.set(t.toString(), new c4(this.baseUrl + e, n, i))
              : this._buffers.set(t.toString(), new c4(e, n, i)),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._buffers.forEach((t) => t.dispose()),
            this._buffers.clear(),
            this
          );
        }
      }
      class dM extends dd {
        constructor() {
          super(...arguments), (this.name = "Ticks"), (this.defaultUnits = "i");
        }
        _now() {
          return this.context.transport.ticks;
        }
        _beatsToUnits(t) {
          return this._getPPQ() * t;
        }
        _secondsToUnits(t) {
          return Math.floor((t / (60 / this._getBpm())) * this._getPPQ());
        }
        _ticksToUnits(t) {
          return t;
        }
        toTicks() {
          return this.valueOf();
        }
        toSeconds() {
          return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
        }
      }
      class dE extends dp {
        constructor() {
          super(...arguments),
            (this.name = "Draw"),
            (this.expiration = 0.25),
            (this.anticipation = 0.008),
            (this._events = new cH()),
            (this._boundDrawLoop = this._drawLoop.bind(this)),
            (this._animationFrame = -1);
        }
        schedule(t, e) {
          return (
            this._events.add({ callback: t, time: this.toSeconds(e) }),
            1 === this._events.length &&
              (this._animationFrame = requestAnimationFrame(
                this._boundDrawLoop,
              )),
            this
          );
        }
        cancel(t) {
          return this._events.cancel(this.toSeconds(t)), this;
        }
        _drawLoop() {
          let t = this.context.currentTime;
          for (
            ;
            this._events.length &&
            this._events.peek().time - this.anticipation <= t;

          ) {
            let e = this._events.shift();
            e && t - e.time <= this.expiration && e.callback();
          }
          this._events.length > 0 &&
            (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
        }
        dispose() {
          return (
            super.dispose(),
            this._events.dispose(),
            cancelAnimationFrame(this._animationFrame),
            this
          );
        }
      }
      cQ((t) => {
        t.draw = new dE({ context: t });
      }),
        cK((t) => {
          t.draw.dispose();
        });
      class dI extends cU {
        constructor() {
          super(...arguments),
            (this.name = "IntervalTimeline"),
            (this._root = null),
            (this._length = 0);
        }
        add(t) {
          cT(cO(t.time), "Events must have a time property"),
            cT(cO(t.duration), "Events must have a duration parameter"),
            (t.time = t.time.valueOf());
          let e = new dD(t.time, t.time + t.duration, t);
          for (
            null === this._root ? (this._root = e) : this._root.insert(e),
              this._length++;
            null !== e;

          )
            e.updateHeight(), e.updateMax(), this._rebalance(e), (e = e.parent);
          return this;
        }
        remove(t) {
          if (null !== this._root) {
            let e = [];
            for (let n of (this._root.search(t.time, e), e))
              if (n.event === t) {
                this._removeNode(n), this._length--;
                break;
              }
          }
          return this;
        }
        get length() {
          return this._length;
        }
        cancel(t) {
          return this.forEachFrom(t, (t) => this.remove(t)), this;
        }
        _setRoot(t) {
          (this._root = t), null !== this._root && (this._root.parent = null);
        }
        _replaceNodeInParent(t, e) {
          null !== t.parent
            ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e),
              this._rebalance(t.parent))
            : this._setRoot(e);
        }
        _removeNode(t) {
          if (null === t.left && null === t.right)
            this._replaceNodeInParent(t, null);
          else if (null === t.right) this._replaceNodeInParent(t, t.left);
          else if (null === t.left) this._replaceNodeInParent(t, t.right);
          else {
            let e = t.getBalance(),
              n,
              i = null;
            if (e > 0) {
              if (null === t.left.right)
                ((n = t.left).right = t.right), (i = n);
              else {
                for (n = t.left.right; null !== n.right; ) n = n.right;
                n.parent &&
                  ((n.parent.right = n.left),
                  (i = n.parent),
                  (n.left = t.left),
                  (n.right = t.right));
              }
            } else if (null === t.right.left)
              ((n = t.right).left = t.left), (i = n);
            else {
              for (n = t.right.left; null !== n.left; ) n = n.left;
              n.parent &&
                ((n.parent.left = n.right),
                (i = n.parent),
                (n.left = t.left),
                (n.right = t.right));
            }
            null !== t.parent
              ? t.isLeftChild()
                ? (t.parent.left = n)
                : (t.parent.right = n)
              : this._setRoot(n),
              i && this._rebalance(i);
          }
          t.dispose();
        }
        _rotateLeft(t) {
          let e = t.parent,
            n = t.isLeftChild(),
            i = t.right;
          i && ((t.right = i.left), (i.left = t)),
            null !== e ? (n ? (e.left = i) : (e.right = i)) : this._setRoot(i);
        }
        _rotateRight(t) {
          let e = t.parent,
            n = t.isLeftChild(),
            i = t.left;
          i && ((t.left = i.right), (i.right = t)),
            null !== e ? (n ? (e.left = i) : (e.right = i)) : this._setRoot(i);
        }
        _rebalance(t) {
          let e = t.getBalance();
          e > 1 && t.left
            ? 0 > t.left.getBalance()
              ? this._rotateLeft(t.left)
              : this._rotateRight(t)
            : e < -1 &&
              t.right &&
              (t.right.getBalance() > 0
                ? this._rotateRight(t.right)
                : this._rotateLeft(t));
        }
        get(t) {
          if (null !== this._root) {
            let e = [];
            if ((this._root.search(t, e), e.length > 0)) {
              let n = e[0];
              for (let i = 1; i < e.length; i++) e[i].low > n.low && (n = e[i]);
              return n.event;
            }
          }
          return null;
        }
        forEach(t) {
          if (null !== this._root) {
            let e = [];
            this._root.traverse((t) => e.push(t)),
              e.forEach((e) => {
                e.event && t(e.event);
              });
          }
          return this;
        }
        forEachAtTime(t, e) {
          if (null !== this._root) {
            let n = [];
            this._root.search(t, n),
              n.forEach((t) => {
                t.event && e(t.event);
              });
          }
          return this;
        }
        forEachFrom(t, e) {
          if (null !== this._root) {
            let n = [];
            this._root.searchAfter(t, n),
              n.forEach((t) => {
                t.event && e(t.event);
              });
          }
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            null !== this._root && this._root.traverse((t) => t.dispose()),
            (this._root = null),
            this
          );
        }
      }
      class dD {
        constructor(t, e, n) {
          (this._left = null),
            (this._right = null),
            (this.parent = null),
            (this.height = 0),
            (this.event = n),
            (this.low = t),
            (this.high = e),
            (this.max = this.high);
        }
        insert(t) {
          t.low <= this.low
            ? null === this.left
              ? (this.left = t)
              : this.left.insert(t)
            : null === this.right
            ? (this.right = t)
            : this.right.insert(t);
        }
        search(t, e) {
          if (!(t > this.max))
            null !== this.left && this.left.search(t, e),
              this.low <= t && this.high > t && e.push(this),
              !(this.low > t) && null !== this.right && this.right.search(t, e);
        }
        searchAfter(t, e) {
          this.low >= t &&
            (e.push(this), null !== this.left && this.left.searchAfter(t, e)),
            null !== this.right && this.right.searchAfter(t, e);
        }
        traverse(t) {
          t(this),
            null !== this.left && this.left.traverse(t),
            null !== this.right && this.right.traverse(t);
        }
        updateHeight() {
          null !== this.left && null !== this.right
            ? (this.height = Math.max(this.left.height, this.right.height) + 1)
            : null !== this.right
            ? (this.height = this.right.height + 1)
            : null !== this.left
            ? (this.height = this.left.height + 1)
            : (this.height = 0);
        }
        updateMax() {
          (this.max = this.high),
            null !== this.left &&
              (this.max = Math.max(this.max, this.left.max)),
            null !== this.right &&
              (this.max = Math.max(this.max, this.right.max));
        }
        getBalance() {
          let t = 0;
          return (
            null !== this.left && null !== this.right
              ? (t = this.left.height - this.right.height)
              : null !== this.left
              ? (t = this.left.height + 1)
              : null !== this.right && (t = -(this.right.height + 1)),
            t
          );
        }
        isLeftChild() {
          return null !== this.parent && this.parent.left === this;
        }
        get left() {
          return this._left;
        }
        set left(t) {
          (this._left = t),
            null !== t && (t.parent = this),
            this.updateHeight(),
            this.updateMax();
        }
        get right() {
          return this._right;
        }
        set right(t) {
          (this._right = t),
            null !== t && (t.parent = this),
            this.updateHeight(),
            this.updateMax();
        }
        dispose() {
          (this.parent = null),
            (this._left = null),
            (this._right = null),
            (this.event = null);
        }
      }
      class dR extends d_ {
        constructor() {
          super(cW(dR.getDefaults(), arguments, ["volume"])),
            (this.name = "Volume");
          let t = cW(dR.getDefaults(), arguments, ["volume"]);
          (this.input = this.output =
            new dy({
              context: this.context,
              gain: t.volume,
              units: "decibels",
            })),
            (this.volume = this.output.gain),
            c3(this, "volume"),
            (this._unmutedVolume = t.volume),
            (this.mute = t.mute);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), { mute: !1, volume: 0 });
        }
        get mute() {
          return this.volume.value === -1 / 0;
        }
        set mute(t) {
          !this.mute && t
            ? ((this._unmutedVolume = this.volume.value),
              (this.volume.value = -1 / 0))
            : this.mute && !t && (this.volume.value = this._unmutedVolume);
        }
        dispose() {
          return (
            super.dispose(), this.input.dispose(), this.volume.dispose(), this
          );
        }
      }
      class dN extends d_ {
        constructor() {
          super(cW(dN.getDefaults(), arguments)),
            (this.name = "Destination"),
            (this.input = new dR({ context: this.context })),
            (this.output = new dy({ context: this.context })),
            (this.volume = this.input.volume);
          let t = cW(dN.getDefaults(), arguments);
          dg(this.input, this.output, this.context.rawContext.destination),
            (this.mute = t.mute),
            (this._internalChannels = [
              this.input,
              this.context.rawContext.destination,
              this.output,
            ]);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), { mute: !1, volume: 0 });
        }
        get mute() {
          return this.input.mute;
        }
        set mute(t) {
          this.input.mute = t;
        }
        chain(...t) {
          return (
            this.input.disconnect(),
            t.unshift(this.input),
            t.push(this.output),
            dg(...t),
            this
          );
        }
        get maxChannelCount() {
          return this.context.rawContext.destination.maxChannelCount;
        }
        dispose() {
          return super.dispose(), this.volume.dispose(), this;
        }
      }
      cQ((t) => {
        t.destination = new dN({ context: t });
      }),
        cK((t) => {
          t.destination.dispose();
        });
      class dV extends cU {
        constructor(t) {
          super(),
            (this.name = "TimelineValue"),
            (this._timeline = new cH({ memory: 10 })),
            (this._initialValue = t);
        }
        set(t, e) {
          return this._timeline.add({ value: t, time: e }), this;
        }
        get(t) {
          let e = this._timeline.get(t);
          return e ? e.value : this._initialValue;
        }
      }
      class dP {
        constructor(t, e) {
          this.id = dP._eventId++;
          let n = Object.assign(dP.getDefaults(), e);
          (this.transport = t),
            (this.callback = n.callback),
            (this._once = n.once),
            (this.time = n.time);
        }
        static getDefaults() {
          return { callback: c8, once: !1, time: 0 };
        }
        invoke(t) {
          this.callback &&
            (this.callback(t), this._once && this.transport.clear(this.id));
        }
        dispose() {
          return (this.callback = void 0), this;
        }
      }
      dP._eventId = 0;
      class dq extends dP {
        constructor(t, e) {
          super(t, e),
            (this._currentId = -1),
            (this._nextId = -1),
            (this._nextTick = this.time),
            (this._boundRestart = this._restart.bind(this));
          let n = Object.assign(dq.getDefaults(), e);
          (this.duration = new dM(t.context, n.duration).valueOf()),
            (this._interval = new dM(t.context, n.interval).valueOf()),
            (this._nextTick = n.time),
            this.transport.on("start", this._boundRestart),
            this.transport.on("loopStart", this._boundRestart),
            (this.context = this.transport.context),
            this._restart();
        }
        static getDefaults() {
          return Object.assign({}, dP.getDefaults(), {
            duration: 1 / 0,
            interval: 1,
            once: !1,
          });
        }
        invoke(t) {
          this._createEvents(t), super.invoke(t);
        }
        _createEvents(t) {
          let e = this.transport.getTicksAtTime(t);
          e >= this.time &&
            e >= this._nextTick &&
            this._nextTick + this._interval < this.time + this.duration &&
            ((this._nextTick += this._interval),
            (this._currentId = this._nextId),
            (this._nextId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new dM(this.context, this._nextTick).toSeconds(),
            )));
        }
        _restart(t) {
          this.transport.clear(this._currentId),
            this.transport.clear(this._nextId),
            (this._nextTick = this.time);
          let e = this.transport.getTicksAtTime(t);
          e > this.time &&
            (this._nextTick =
              this.time +
              Math.ceil((e - this.time) / this._interval) * this._interval),
            (this._currentId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new dM(this.context, this._nextTick).toSeconds(),
            )),
            (this._nextTick += this._interval),
            (this._nextId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new dM(this.context, this._nextTick).toSeconds(),
            ));
        }
        dispose() {
          return (
            super.dispose(),
            this.transport.clear(this._currentId),
            this.transport.clear(this._nextId),
            this.transport.off("start", this._boundRestart),
            this.transport.off("loopStart", this._boundRestart),
            this
          );
        }
      }
      class dF extends dp {
        constructor() {
          super(cW(dF.getDefaults(), arguments)),
            (this.name = "Transport"),
            (this._loop = new dV(!1)),
            (this._loopStart = 0),
            (this._loopEnd = 0),
            (this._scheduledEvents = {}),
            (this._timeline = new cH()),
            (this._repeatedEvents = new dI()),
            (this._syncedSignals = []),
            (this._swingAmount = 0);
          let t = cW(dF.getDefaults(), arguments);
          (this._ppq = t.ppq),
            (this._clock = new dk({
              callback: this._processTick.bind(this),
              context: this.context,
              frequency: 0,
              units: "bpm",
            })),
            this._bindClockEvents(),
            (this.bpm = this._clock.frequency),
            (this._clock.frequency.multiplier = t.ppq),
            this.bpm.setValueAtTime(t.bpm, 0),
            c3(this, "bpm"),
            (this._timeSignature = t.timeSignature),
            (this._swingTicks = t.ppq / 2);
        }
        static getDefaults() {
          return Object.assign(dp.getDefaults(), {
            bpm: 120,
            loopEnd: "4m",
            loopStart: 0,
            ppq: 192,
            swing: 0,
            swingSubdivision: "8n",
            timeSignature: 4,
          });
        }
        _processTick(t, e) {
          if (
            (this._loop.get(t) &&
              e >= this._loopEnd &&
              (this.emit("loopEnd", t),
              this._clock.setTicksAtTime(this._loopStart, t),
              (e = this._loopStart),
              this.emit("loopStart", t, this._clock.getSecondsAtTime(t)),
              this.emit("loop", t)),
            this._swingAmount > 0 &&
              e % this._ppq != 0 &&
              e % (2 * this._swingTicks) != 0)
          ) {
            let n = (e % (2 * this._swingTicks)) / (2 * this._swingTicks),
              i = Math.sin(n * Math.PI) * this._swingAmount;
            t +=
              new dM(this.context, (2 * this._swingTicks) / 3).toSeconds() * i;
          }
          this._timeline.forEachAtTime(e, (e) => e.invoke(t));
        }
        schedule(t, e) {
          let n = new dP(this, {
            callback: t,
            time: new dd(this.context, e).toTicks(),
          });
          return this._addEvent(n, this._timeline);
        }
        scheduleRepeat(t, e, n, i = 1 / 0) {
          let s = new dq(this, {
            callback: t,
            duration: new dl(this.context, i).toTicks(),
            interval: new dl(this.context, e).toTicks(),
            time: new dd(this.context, n).toTicks(),
          });
          return this._addEvent(s, this._repeatedEvents);
        }
        scheduleOnce(t, e) {
          let n = new dP(this, {
            callback: t,
            once: !0,
            time: new dd(this.context, e).toTicks(),
          });
          return this._addEvent(n, this._timeline);
        }
        clear(t) {
          if (this._scheduledEvents.hasOwnProperty(t)) {
            let e = this._scheduledEvents[t.toString()];
            e.timeline.remove(e.event),
              e.event.dispose(),
              delete this._scheduledEvents[t.toString()];
          }
          return this;
        }
        _addEvent(t, e) {
          return (
            (this._scheduledEvents[t.id.toString()] = {
              event: t,
              timeline: e,
            }),
            e.add(t),
            t.id
          );
        }
        cancel(t = 0) {
          let e = this.toTicks(t);
          return (
            this._timeline.forEachFrom(e, (t) => this.clear(t.id)),
            this._repeatedEvents.forEachFrom(e, (t) => this.clear(t.id)),
            this
          );
        }
        _bindClockEvents() {
          this._clock.on("start", (t, e) => {
            (e = new dM(this.context, e).toSeconds()), this.emit("start", t, e);
          }),
            this._clock.on("stop", (t) => {
              this.emit("stop", t);
            }),
            this._clock.on("pause", (t) => {
              this.emit("pause", t);
            });
        }
        get state() {
          return this._clock.getStateAtTime(this.now());
        }
        start(t, e) {
          let n;
          return cO(e) && (n = this.toTicks(e)), this._clock.start(t, n), this;
        }
        stop(t) {
          return this._clock.stop(t), this;
        }
        pause(t) {
          return this._clock.pause(t), this;
        }
        toggle(t) {
          return (
            (t = this.toSeconds(t)),
            "started" !== this._clock.getStateAtTime(t)
              ? this.start(t)
              : this.stop(t),
            this
          );
        }
        get timeSignature() {
          return this._timeSignature;
        }
        set timeSignature(t) {
          cI(t) && (t = (t[0] / t[1]) * 4), (this._timeSignature = t);
        }
        get loopStart() {
          return new dl(this.context, this._loopStart, "i").toSeconds();
        }
        set loopStart(t) {
          this._loopStart = this.toTicks(t);
        }
        get loopEnd() {
          return new dl(this.context, this._loopEnd, "i").toSeconds();
        }
        set loopEnd(t) {
          this._loopEnd = this.toTicks(t);
        }
        get loop() {
          return this._loop.get(this.now());
        }
        set loop(t) {
          this._loop.set(t, this.now());
        }
        setLoopPoints(t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }
        get swing() {
          return this._swingAmount;
        }
        set swing(t) {
          this._swingAmount = t;
        }
        get swingSubdivision() {
          return new dM(this.context, this._swingTicks).toNotation();
        }
        set swingSubdivision(t) {
          this._swingTicks = this.toTicks(t);
        }
        get position() {
          let t = this.now(),
            e = this._clock.getTicksAtTime(t);
          return new dM(this.context, e).toBarsBeatsSixteenths();
        }
        set position(t) {
          let e = this.toTicks(t);
          this.ticks = e;
        }
        get seconds() {
          return this._clock.seconds;
        }
        set seconds(t) {
          let e = this.now(),
            n = this._clock.frequency.timeToTicks(t, e);
          this.ticks = n;
        }
        get progress() {
          if (!this.loop) return 0;
          {
            let t = this.now(),
              e = this._clock.getTicksAtTime(t);
            return (e - this._loopStart) / (this._loopEnd - this._loopStart);
          }
        }
        get ticks() {
          return this._clock.ticks;
        }
        set ticks(t) {
          if (this._clock.ticks !== t) {
            let e = this.now();
            if ("started" === this.state) {
              let n = this._clock.getTicksAtTime(e),
                i = this._clock.frequency.getDurationOfTicks(
                  Math.ceil(n) - n,
                  e,
                ),
                s = e + i;
              this.emit("stop", s),
                this._clock.setTicksAtTime(t, s),
                this.emit("start", s, this._clock.getSecondsAtTime(s));
            } else this._clock.setTicksAtTime(t, e);
          }
        }
        getTicksAtTime(t) {
          return Math.round(this._clock.getTicksAtTime(t));
        }
        getSecondsAtTime(t) {
          return this._clock.getSecondsAtTime(t);
        }
        get PPQ() {
          return this._clock.frequency.multiplier;
        }
        set PPQ(t) {
          this._clock.frequency.multiplier = t;
        }
        nextSubdivision(t) {
          if (((t = this.toTicks(t)), "started" !== this.state)) return 0;
          {
            let e = this.now(),
              n = this.getTicksAtTime(e),
              i = t - (n % t);
            return this._clock.nextTickTime(i, e);
          }
        }
        syncSignal(t, e) {
          if (!e) {
            let n = this.now();
            if (0 !== t.getValueAtTime(n)) {
              let i = this.bpm.getValueAtTime(n),
                s = 1 / (60 / i / this.PPQ);
              e = t.getValueAtTime(n) / s;
            } else e = 0;
          }
          let r = new dy(e);
          return (
            this.bpm.connect(r),
            r.connect(t._param),
            this._syncedSignals.push({ initial: t.value, ratio: r, signal: t }),
            (t.value = 0),
            this
          );
        }
        unsyncSignal(t) {
          for (let e = this._syncedSignals.length - 1; e >= 0; e--) {
            let n = this._syncedSignals[e];
            n.signal === t &&
              (n.ratio.dispose(),
              (n.signal.value = n.initial),
              this._syncedSignals.splice(e, 1));
          }
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            this._clock.dispose(),
            !(function t(e, n) {
              cI(n)
                ? n.forEach((n) => t(e, n))
                : Object.defineProperty(e, n, { writable: !0 });
            })(this, "bpm"),
            this._timeline.dispose(),
            this._repeatedEvents.dispose(),
            this
          );
        }
      }
      c0.mixin(dF),
        cQ((t) => {
          t.transport = new dF({ context: t });
        }),
        cK((t) => {
          t.transport.dispose();
        });
      class dj extends d_ {
        constructor(t) {
          super(t),
            (this.input = void 0),
            (this._state = new df("stopped")),
            (this._synced = !1),
            (this._scheduled = []),
            (this._syncedStart = c8),
            (this._syncedStop = c8),
            (this._state.memory = 100),
            (this._state.increasing = !0),
            (this._volume = this.output =
              new dR({
                context: this.context,
                mute: t.mute,
                volume: t.volume,
              })),
            (this.volume = this._volume.volume),
            c3(this, "volume"),
            (this.onstop = t.onstop);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            mute: !1,
            onstop: c8,
            volume: 0,
          });
        }
        get state() {
          return this._synced
            ? "started" === this.context.transport.state
              ? this._state.getValueAtTime(this.context.transport.seconds)
              : "stopped"
            : this._state.getValueAtTime(this.now());
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        _clampToCurrentTime(t) {
          return this._synced ? t : Math.max(t, this.context.currentTime);
        }
        start(t, e, n) {
          let i =
            ck(t) && this._synced
              ? this.context.transport.seconds
              : this.toSeconds(t);
          if (
            ((i = this._clampToCurrentTime(i)),
            this._synced || "started" !== this._state.getValueAtTime(i))
          ) {
            if (
              (this.log("start", i),
              this._state.setStateAtTime("started", i),
              this._synced)
            ) {
              let s = this._state.get(i);
              s &&
                ((s.offset = this.toSeconds(cB(e, 0))),
                (s.duration = n ? this.toSeconds(n) : void 0));
              let r = this.context.transport.schedule((t) => {
                this._start(t, e, n);
              }, i);
              this._scheduled.push(r),
                "started" === this.context.transport.state &&
                  this.context.transport.getSecondsAtTime(this.immediate()) >
                    i &&
                  this._syncedStart(this.now(), this.context.transport.seconds);
            } else cC(this.context), this._start(i, e, n);
          } else
            cT(
              cG(i, this._state.get(i).time),
              "Start time must be strictly greater than previous start time",
            ),
              this._state.cancel(i),
              this._state.setStateAtTime("started", i),
              this.log("restart", i),
              this.restart(i, e, n);
          return this;
        }
        stop(t) {
          let e =
            ck(t) && this._synced
              ? this.context.transport.seconds
              : this.toSeconds(t);
          if (
            ((e = this._clampToCurrentTime(e)),
            "started" === this._state.getValueAtTime(e) ||
              cO(this._state.getNextState("started", e)))
          ) {
            if ((this.log("stop", e), this._synced)) {
              let n = this.context.transport.schedule(this._stop.bind(this), e);
              this._scheduled.push(n);
            } else this._stop(e);
            this._state.cancel(e), this._state.setStateAtTime("stopped", e);
          }
          return this;
        }
        restart(t, e, n) {
          return (
            (t = this.toSeconds(t)),
            "started" === this._state.getValueAtTime(t) &&
              (this._state.cancel(t), this._restart(t, e, n)),
            this
          );
        }
        sync() {
          return (
            this._synced ||
              ((this._synced = !0),
              (this._syncedStart = (t, e) => {
                if (e > 0) {
                  let n = this._state.get(e);
                  if (n && "started" === n.state && n.time !== e) {
                    let i = e - this.toSeconds(n.time),
                      s;
                    n.duration && (s = this.toSeconds(n.duration) - i),
                      this._start(t, this.toSeconds(n.offset) + i, s);
                  }
                }
              }),
              (this._syncedStop = (t) => {
                let e = this.context.transport.getSecondsAtTime(
                  Math.max(t - this.sampleTime, 0),
                );
                "started" === this._state.getValueAtTime(e) && this._stop(t);
              }),
              this.context.transport.on("start", this._syncedStart),
              this.context.transport.on("loopStart", this._syncedStart),
              this.context.transport.on("stop", this._syncedStop),
              this.context.transport.on("pause", this._syncedStop),
              this.context.transport.on("loopEnd", this._syncedStop)),
            this
          );
        }
        unsync() {
          return (
            this._synced &&
              (this.context.transport.off("stop", this._syncedStop),
              this.context.transport.off("pause", this._syncedStop),
              this.context.transport.off("loopEnd", this._syncedStop),
              this.context.transport.off("start", this._syncedStart),
              this.context.transport.off("loopStart", this._syncedStart)),
            (this._synced = !1),
            this._scheduled.forEach((t) => this.context.transport.clear(t)),
            (this._scheduled = []),
            this._state.cancel(0),
            this._stop(0),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            (this.onstop = c8),
            this.unsync(),
            this._volume.dispose(),
            this._state.dispose(),
            this
          );
        }
      }
      class dL extends dw {
        constructor() {
          super(cW(dL.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "ToneBufferSource"),
            (this._source = this.context.createBufferSource()),
            (this._internalChannels = [this._source]),
            (this._sourceStarted = !1),
            (this._sourceStopped = !1);
          let t = cW(dL.getDefaults(), arguments, ["url", "onload"]);
          dv(this._source, this._gainNode),
            (this._source.onended = () => this._stopSource()),
            (this.playbackRate = new dm({
              context: this.context,
              param: this._source.playbackRate,
              units: "positive",
              value: t.playbackRate,
            })),
            (this.loop = t.loop),
            (this.loopStart = t.loopStart),
            (this.loopEnd = t.loopEnd),
            (this._buffer = new c4(t.url, t.onload, t.onerror)),
            this._internalChannels.push(this._source);
        }
        static getDefaults() {
          return Object.assign(dw.getDefaults(), {
            url: new c4(),
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            onload: c8,
            onerror: c8,
            playbackRate: 1,
          });
        }
        get fadeIn() {
          return this._fadeIn;
        }
        set fadeIn(t) {
          this._fadeIn = t;
        }
        get fadeOut() {
          return this._fadeOut;
        }
        set fadeOut(t) {
          this._fadeOut = t;
        }
        get curve() {
          return this._curve;
        }
        set curve(t) {
          this._curve = t;
        }
        start(t, e, n, i = 1) {
          cT(this.buffer.loaded, "buffer is either not set or not loaded");
          let s = this.toSeconds(t);
          this._startGain(s, i),
            (e = this.loop ? cB(e, this.loopStart) : cB(e, 0));
          let r = Math.max(this.toSeconds(e), 0);
          if (this.loop) {
            let a = this.toSeconds(this.loopEnd) || this.buffer.duration,
              o = this.toSeconds(this.loopStart);
            cZ(r, a) && (r = ((r - o) % (a - o)) + o),
              cY(r, this.buffer.duration) && (r = 0);
          }
          if (
            ((this._source.buffer = this.buffer.get()),
            (this._source.loopEnd =
              this.toSeconds(this.loopEnd) || this.buffer.duration),
            cX(r, this.buffer.duration) &&
              ((this._sourceStarted = !0), this._source.start(s, r)),
            cO(n))
          ) {
            let l = this.toSeconds(n);
            (l = Math.max(l, 0)), this.stop(s + l);
          }
          return this;
        }
        _stopSource(t) {
          !this._sourceStopped &&
            this._sourceStarted &&
            ((this._sourceStopped = !0),
            this._source.stop(this.toSeconds(t)),
            this._onended());
        }
        get loopStart() {
          return this._source.loopStart;
        }
        set loopStart(t) {
          this._source.loopStart = this.toSeconds(t);
        }
        get loopEnd() {
          return this._source.loopEnd;
        }
        set loopEnd(t) {
          this._source.loopEnd = this.toSeconds(t);
        }
        get buffer() {
          return this._buffer;
        }
        set buffer(t) {
          this._buffer.set(t);
        }
        get loop() {
          return this._source.loop;
        }
        set loop(t) {
          (this._source.loop = t), this._sourceStarted && this.cancelStop();
        }
        dispose() {
          return (
            super.dispose(),
            (this._source.onended = null),
            this._source.disconnect(),
            this._buffer.dispose(),
            this.playbackRate.dispose(),
            this
          );
        }
      }
      function dW(t, e) {
        return (0, cP.__awaiter)(this, void 0, void 0, function* () {
          let n = e / t.context.sampleRate,
            i = new c6(1, n, t.context.sampleRate),
            s = new t.constructor(
              Object.assign(t.get(), {
                frequency: 2 / n,
                detune: 0,
                context: i,
              }),
            ).toDestination();
          s.start(0);
          let r = yield i.render();
          return r.getChannelData(0);
        });
      }
      class dB extends dw {
        constructor() {
          super(cW(dB.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "ToneOscillatorNode"),
            (this._oscillator = this.context.createOscillator()),
            (this._internalChannels = [this._oscillator]);
          let t = cW(dB.getDefaults(), arguments, ["frequency", "type"]);
          dv(this._oscillator, this._gainNode),
            (this.type = t.type),
            (this.frequency = new dm({
              context: this.context,
              param: this._oscillator.frequency,
              units: "frequency",
              value: t.frequency,
            })),
            (this.detune = new dm({
              context: this.context,
              param: this._oscillator.detune,
              units: "cents",
              value: t.detune,
            })),
            c3(this, ["frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(dw.getDefaults(), {
            detune: 0,
            frequency: 440,
            type: "sine",
          });
        }
        start(t) {
          let e = this.toSeconds(t);
          return (
            this.log("start", e),
            this._startGain(e),
            this._oscillator.start(e),
            this
          );
        }
        _stopSource(t) {
          this._oscillator.stop(t);
        }
        setPeriodicWave(t) {
          return this._oscillator.setPeriodicWave(t), this;
        }
        get type() {
          return this._oscillator.type;
        }
        set type(t) {
          this._oscillator.type = t;
        }
        dispose() {
          return (
            super.dispose(),
            "started" === this.state && this.stop(),
            this._oscillator.disconnect(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this
          );
        }
      }
      class dz extends dj {
        constructor() {
          super(cW(dz.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "Oscillator"),
            (this._oscillator = null);
          let t = cW(dz.getDefaults(), arguments, ["frequency", "type"]);
          (this.frequency = new dT({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            c3(this, "frequency"),
            (this.detune = new dT({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            c3(this, "detune"),
            (this._partials = t.partials),
            (this._partialCount = t.partialCount),
            (this._type = t.type),
            t.partialCount &&
              "custom" !== t.type &&
              (this._type = this.baseType + t.partialCount.toString()),
            (this.phase = t.phase);
        }
        static getDefaults() {
          return Object.assign(dj.getDefaults(), {
            detune: 0,
            frequency: 440,
            partialCount: 0,
            partials: [],
            phase: 0,
            type: "sine",
          });
        }
        _start(t) {
          let e = this.toSeconds(t),
            n = new dB({
              context: this.context,
              onended: () => this.onstop(this),
            });
          (this._oscillator = n),
            this._wave
              ? this._oscillator.setPeriodicWave(this._wave)
              : (this._oscillator.type = this._type),
            this._oscillator.connect(this.output),
            this.frequency.connect(this._oscillator.frequency),
            this.detune.connect(this._oscillator.detune),
            this._oscillator.start(e);
        }
        _stop(t) {
          let e = this.toSeconds(t);
          this._oscillator && this._oscillator.stop(e);
        }
        _restart(t) {
          let e = this.toSeconds(t);
          return (
            this.log("restart", e),
            this._oscillator && this._oscillator.cancelStop(),
            this._state.cancel(e),
            this
          );
        }
        syncFrequency() {
          return this.context.transport.syncSignal(this.frequency), this;
        }
        unsyncFrequency() {
          return this.context.transport.unsyncSignal(this.frequency), this;
        }
        _getCachedPeriodicWave() {
          if ("custom" === this._type) {
            let t = dz._periodicWaveCache.find((t) => {
              var e, n;
              return (
                t.phase === this._phase &&
                ((e = t.partials),
                (n = this._partials),
                e.length === n.length && e.every((t, e) => n[e] === t))
              );
            });
            return t;
          }
          {
            let e = dz._periodicWaveCache.find(
              (t) => t.type === this._type && t.phase === this._phase,
            );
            return (
              (this._partialCount = e ? e.partialCount : this._partialCount), e
            );
          }
        }
        get type() {
          return this._type;
        }
        set type(t) {
          this._type = t;
          let e = -1 !== ["sine", "square", "sawtooth", "triangle"].indexOf(t);
          if (0 === this._phase && e)
            (this._wave = void 0),
              (this._partialCount = 0),
              null !== this._oscillator && (this._oscillator.type = t);
          else {
            let n = this._getCachedPeriodicWave();
            if (cO(n)) {
              let { partials: i, wave: s } = n;
              (this._wave = s),
                (this._partials = i),
                null !== this._oscillator &&
                  this._oscillator.setPeriodicWave(this._wave);
            } else {
              let [r, a] = this._getRealImaginary(t, this._phase),
                o = this.context.createPeriodicWave(r, a);
              (this._wave = o),
                null !== this._oscillator &&
                  this._oscillator.setPeriodicWave(this._wave),
                dz._periodicWaveCache.push({
                  imag: a,
                  partialCount: this._partialCount,
                  partials: this._partials,
                  phase: this._phase,
                  real: r,
                  type: this._type,
                  wave: this._wave,
                }),
                dz._periodicWaveCache.length > 100 &&
                  dz._periodicWaveCache.shift();
            }
          }
        }
        get baseType() {
          return this._type.replace(this.partialCount.toString(), "");
        }
        set baseType(t) {
          this.partialCount && "custom" !== this._type && "custom" !== t
            ? (this.type = t + this.partialCount)
            : (this.type = t);
        }
        get partialCount() {
          return this._partialCount;
        }
        set partialCount(t) {
          cb(t, 0);
          let e = this._type,
            n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
          if ((n && (e = n[1]), "custom" !== this._type))
            0 === t ? (this.type = e) : (this.type = e + t.toString());
          else {
            let i = new Float32Array(t);
            this._partials.forEach((t, e) => (i[e] = t)),
              (this._partials = Array.from(i)),
              (this.type = this._type);
          }
        }
        _getRealImaginary(t, e) {
          let n = 2048,
            i = new Float32Array(n),
            s = new Float32Array(n),
            r = 1;
          if ("custom" === t) {
            if (
              ((r = this._partials.length + 1),
              (this._partialCount = this._partials.length),
              (n = r),
              0 === this._partials.length)
            )
              return [i, s];
          } else {
            let a = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
            a
              ? ((r = parseInt(a[2], 10) + 1),
                (this._partialCount = parseInt(a[2], 10)),
                (t = a[1]),
                (n = r = Math.max(r, 2)))
              : (this._partialCount = 0),
              (this._partials = []);
          }
          for (let o = 1; o < n; ++o) {
            let l = 2 / (o * Math.PI),
              u;
            switch (t) {
              case "sine":
                (u = o <= r ? 1 : 0), (this._partials[o - 1] = u);
                break;
              case "square":
                (u = 1 & o ? 2 * l : 0), (this._partials[o - 1] = u);
                break;
              case "sawtooth":
                (u = l * (1 & o ? 1 : -1)), (this._partials[o - 1] = u);
                break;
              case "triangle":
                (u = 1 & o ? 2 * (l * l) * (((o - 1) >> 1) & 1 ? -1 : 1) : 0),
                  (this._partials[o - 1] = u);
                break;
              case "custom":
                u = this._partials[o - 1];
                break;
              default:
                throw TypeError("Oscillator: invalid type: " + t);
            }
            0 !== u
              ? ((i[o] = -u * Math.sin(e * o)), (s[o] = u * Math.cos(e * o)))
              : ((i[o] = 0), (s[o] = 0));
          }
          return [i, s];
        }
        _inverseFFT(t, e, n) {
          let i = 0,
            s = t.length;
          for (let r = 0; r < s; r++)
            i += t[r] * Math.cos(r * n) + e[r] * Math.sin(r * n);
          return i;
        }
        getInitialValue() {
          var t;
          let [e, n] = this._getRealImaginary(this._type, 0),
            i = 0,
            s = 2 * Math.PI;
          for (let r = 0; r < 32; r++)
            i = Math.max(this._inverseFFT(e, n, (r / 32) * s), i);
          return Math.max(
            Math.min((t = -this._inverseFFT(e, n, this._phase) / i), 1),
            -1,
          );
        }
        get partials() {
          return this._partials.slice(0, this.partialCount);
        }
        set partials(t) {
          (this._partials = t),
            (this._partialCount = this._partials.length),
            t.length && (this.type = "custom");
        }
        get phase() {
          return this._phase * (180 / Math.PI);
        }
        set phase(t) {
          (this._phase = (t * Math.PI) / 180), (this.type = this._type);
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return dW(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            null !== this._oscillator && this._oscillator.dispose(),
            (this._wave = void 0),
            this.frequency.dispose(),
            this.detune.dispose(),
            this
          );
        }
      }
      dz._periodicWaveCache = [];
      class dU extends d_ {
        constructor() {
          super(Object.assign(cW(dU.getDefaults(), arguments, ["context"])));
        }
        connect(t, e = 0, n = 0) {
          return db(this, t, e, n), this;
        }
      }
      class dG extends dU {
        constructor() {
          super(
            Object.assign(
              cW(dG.getDefaults(), arguments, ["mapping", "length"]),
            ),
          ),
            (this.name = "WaveShaper"),
            (this._shaper = this.context.createWaveShaper()),
            (this.input = this._shaper),
            (this.output = this._shaper);
          let t = cW(dG.getDefaults(), arguments, ["mapping", "length"]);
          if (cI(t.mapping) || t.mapping instanceof Float32Array)
            this.curve = Float32Array.from(t.mapping);
          else {
            var e;
            "function" == typeof (e = t.mapping) &&
              this.setMap(t.mapping, t.length);
          }
        }
        static getDefaults() {
          return Object.assign(dT.getDefaults(), { length: 1024 });
        }
        setMap(t, e = 1024) {
          let n = new Float32Array(e);
          for (let i = 0; i < e; i++) {
            let s = (i / (e - 1)) * 2 - 1;
            n[i] = t(s, i);
          }
          return (this.curve = n), this;
        }
        get curve() {
          return this._shaper.curve;
        }
        set curve(t) {
          this._shaper.curve = t;
        }
        get oversample() {
          return this._shaper.oversample;
        }
        set oversample(t) {
          let e = ["none", "2x", "4x"].some((e) => e.includes(t));
          cT(e, "oversampling must be either 'none', '2x', or '4x'"),
            (this._shaper.oversample = t);
        }
        dispose() {
          return super.dispose(), this._shaper.disconnect(), this;
        }
      }
      class dZ extends dU {
        constructor() {
          super(...arguments),
            (this.name = "AudioToGain"),
            (this._norm = new dG({
              context: this.context,
              mapping: (t) => (t + 1) / 2,
            })),
            (this.input = this._norm),
            (this.output = this._norm);
        }
        dispose() {
          return super.dispose(), this._norm.dispose(), this;
        }
      }
      class dX extends dT {
        constructor() {
          super(Object.assign(cW(dX.getDefaults(), arguments, ["value"]))),
            (this.name = "Multiply"),
            (this.override = !1);
          let t = cW(dX.getDefaults(), arguments, ["value"]);
          (this._mult =
            this.input =
            this.output =
              new dy({
                context: this.context,
                minValue: t.minValue,
                maxValue: t.maxValue,
              })),
            (this.factor = this._param = this._mult.gain),
            this.factor.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(dT.getDefaults(), { value: 0 });
        }
        dispose() {
          return super.dispose(), this._mult.dispose(), this;
        }
      }
      class dY extends dj {
        constructor() {
          super(
            cW(dY.getDefaults(), arguments, [
              "frequency",
              "type",
              "modulationType",
            ]),
          ),
            (this.name = "AMOscillator"),
            (this._modulationScale = new dZ({ context: this.context })),
            (this._modulationNode = new dy({ context: this.context }));
          let t = cW(dY.getDefaults(), arguments, [
            "frequency",
            "type",
            "modulationType",
          ]);
          (this._carrier = new dz({
            context: this.context,
            detune: t.detune,
            frequency: t.frequency,
            onstop: () => this.onstop(this),
            phase: t.phase,
            type: t.type,
          })),
            (this.frequency = this._carrier.frequency),
            (this.detune = this._carrier.detune),
            (this._modulator = new dz({
              context: this.context,
              phase: t.phase,
              type: t.modulationType,
            })),
            (this.harmonicity = new dX({
              context: this.context,
              units: "positive",
              value: t.harmonicity,
            })),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this._modulator.chain(
              this._modulationScale,
              this._modulationNode.gain,
            ),
            this._carrier.chain(this._modulationNode, this.output),
            c3(this, ["frequency", "detune", "harmonicity"]);
        }
        static getDefaults() {
          return Object.assign(dz.getDefaults(), {
            harmonicity: 1,
            modulationType: "square",
          });
        }
        _start(t) {
          this._modulator.start(t), this._carrier.start(t);
        }
        _stop(t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }
        _restart(t) {
          this._modulator.restart(t), this._carrier.restart(t);
        }
        get type() {
          return this._carrier.type;
        }
        set type(t) {
          this._carrier.type = t;
        }
        get baseType() {
          return this._carrier.baseType;
        }
        set baseType(t) {
          this._carrier.baseType = t;
        }
        get partialCount() {
          return this._carrier.partialCount;
        }
        set partialCount(t) {
          this._carrier.partialCount = t;
        }
        get modulationType() {
          return this._modulator.type;
        }
        set modulationType(t) {
          this._modulator.type = t;
        }
        get phase() {
          return this._carrier.phase;
        }
        set phase(t) {
          (this._carrier.phase = t), (this._modulator.phase = t);
        }
        get partials() {
          return this._carrier.partials;
        }
        set partials(t) {
          this._carrier.partials = t;
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return dW(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this.harmonicity.dispose(),
            this._carrier.dispose(),
            this._modulator.dispose(),
            this._modulationNode.dispose(),
            this._modulationScale.dispose(),
            this
          );
        }
      }
      class dH extends dj {
        constructor() {
          super(
            cW(dH.getDefaults(), arguments, [
              "frequency",
              "type",
              "modulationType",
            ]),
          ),
            (this.name = "FMOscillator"),
            (this._modulationNode = new dy({ context: this.context, gain: 0 }));
          let t = cW(dH.getDefaults(), arguments, [
            "frequency",
            "type",
            "modulationType",
          ]);
          (this._carrier = new dz({
            context: this.context,
            detune: t.detune,
            frequency: 0,
            onstop: () => this.onstop(this),
            phase: t.phase,
            type: t.type,
          })),
            (this.detune = this._carrier.detune),
            (this.frequency = new dT({
              context: this.context,
              units: "frequency",
              value: t.frequency,
            })),
            (this._modulator = new dz({
              context: this.context,
              phase: t.phase,
              type: t.modulationType,
            })),
            (this.harmonicity = new dX({
              context: this.context,
              units: "positive",
              value: t.harmonicity,
            })),
            (this.modulationIndex = new dX({
              context: this.context,
              units: "positive",
              value: t.modulationIndex,
            })),
            this.frequency.connect(this._carrier.frequency),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this.frequency.chain(this.modulationIndex, this._modulationNode),
            this._modulator.connect(this._modulationNode.gain),
            this._modulationNode.connect(this._carrier.frequency),
            this._carrier.connect(this.output),
            this.detune.connect(this._modulator.detune),
            c3(this, ["modulationIndex", "frequency", "detune", "harmonicity"]);
        }
        static getDefaults() {
          return Object.assign(dz.getDefaults(), {
            harmonicity: 1,
            modulationIndex: 2,
            modulationType: "square",
          });
        }
        _start(t) {
          this._modulator.start(t), this._carrier.start(t);
        }
        _stop(t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }
        _restart(t) {
          return this._modulator.restart(t), this._carrier.restart(t), this;
        }
        get type() {
          return this._carrier.type;
        }
        set type(t) {
          this._carrier.type = t;
        }
        get baseType() {
          return this._carrier.baseType;
        }
        set baseType(t) {
          this._carrier.baseType = t;
        }
        get partialCount() {
          return this._carrier.partialCount;
        }
        set partialCount(t) {
          this._carrier.partialCount = t;
        }
        get modulationType() {
          return this._modulator.type;
        }
        set modulationType(t) {
          this._modulator.type = t;
        }
        get phase() {
          return this._carrier.phase;
        }
        set phase(t) {
          (this._carrier.phase = t), (this._modulator.phase = t);
        }
        get partials() {
          return this._carrier.partials;
        }
        set partials(t) {
          this._carrier.partials = t;
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return dW(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.harmonicity.dispose(),
            this._carrier.dispose(),
            this._modulator.dispose(),
            this._modulationNode.dispose(),
            this.modulationIndex.dispose(),
            this
          );
        }
      }
      class d$ extends dj {
        constructor() {
          super(cW(d$.getDefaults(), arguments, ["frequency", "width"])),
            (this.name = "PulseOscillator"),
            (this._widthGate = new dy({ context: this.context, gain: 0 })),
            (this._thresh = new dG({
              context: this.context,
              mapping: (t) => (t <= 0 ? -1 : 1),
            }));
          let t = cW(d$.getDefaults(), arguments, ["frequency", "width"]);
          (this.width = new dT({
            context: this.context,
            units: "audioRange",
            value: t.width,
          })),
            (this._triangle = new dz({
              context: this.context,
              detune: t.detune,
              frequency: t.frequency,
              onstop: () => this.onstop(this),
              phase: t.phase,
              type: "triangle",
            })),
            (this.frequency = this._triangle.frequency),
            (this.detune = this._triangle.detune),
            this._triangle.chain(this._thresh, this.output),
            this.width.chain(this._widthGate, this._thresh),
            c3(this, ["width", "frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(dj.getDefaults(), {
            detune: 0,
            frequency: 440,
            phase: 0,
            type: "pulse",
            width: 0.2,
          });
        }
        _start(t) {
          (t = this.toSeconds(t)),
            this._triangle.start(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }
        _stop(t) {
          (t = this.toSeconds(t)),
            this._triangle.stop(t),
            this._widthGate.gain.cancelScheduledValues(t),
            this._widthGate.gain.setValueAtTime(0, t);
        }
        _restart(t) {
          this._triangle.restart(t),
            this._widthGate.gain.cancelScheduledValues(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }
        get phase() {
          return this._triangle.phase;
        }
        set phase(t) {
          this._triangle.phase = t;
        }
        get type() {
          return "pulse";
        }
        get baseType() {
          return "pulse";
        }
        get partials() {
          return [];
        }
        get partialCount() {
          return 0;
        }
        set carrierType(t) {
          this._triangle.type = t;
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return dW(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._triangle.dispose(),
            this.width.dispose(),
            this._widthGate.dispose(),
            this._thresh.dispose(),
            this
          );
        }
      }
      class dQ extends dj {
        constructor() {
          super(
            cW(dQ.getDefaults(), arguments, ["frequency", "type", "spread"]),
          ),
            (this.name = "FatOscillator"),
            (this._oscillators = []);
          let t = cW(dQ.getDefaults(), arguments, [
            "frequency",
            "type",
            "spread",
          ]);
          (this.frequency = new dT({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            (this.detune = new dT({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            (this._spread = t.spread),
            (this._type = t.type),
            (this._phase = t.phase),
            (this._partials = t.partials),
            (this._partialCount = t.partialCount),
            (this.count = t.count),
            c3(this, ["frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(dz.getDefaults(), {
            count: 3,
            spread: 20,
            type: "sawtooth",
          });
        }
        _start(t) {
          (t = this.toSeconds(t)), this._forEach((e) => e.start(t));
        }
        _stop(t) {
          (t = this.toSeconds(t)), this._forEach((e) => e.stop(t));
        }
        _restart(t) {
          this._forEach((e) => e.restart(t));
        }
        _forEach(t) {
          for (let e = 0; e < this._oscillators.length; e++)
            t(this._oscillators[e], e);
        }
        get type() {
          return this._type;
        }
        set type(t) {
          (this._type = t), this._forEach((e) => (e.type = t));
        }
        get spread() {
          return this._spread;
        }
        set spread(t) {
          if (((this._spread = t), this._oscillators.length > 1)) {
            let e = -t / 2,
              n = t / (this._oscillators.length - 1);
            this._forEach((t, i) => (t.detune.value = e + n * i));
          }
        }
        get count() {
          return this._oscillators.length;
        }
        set count(t) {
          if ((cb(t, 1), this._oscillators.length !== t)) {
            this._forEach((t) => t.dispose()), (this._oscillators = []);
            for (let e = 0; e < t; e++) {
              let n = new dz({
                context: this.context,
                volume: -6 - 1.1 * t,
                type: this._type,
                phase: this._phase + (e / t) * 360,
                partialCount: this._partialCount,
                onstop: 0 === e ? () => this.onstop(this) : c8,
              });
              "custom" === this.type && (n.partials = this._partials),
                this.frequency.connect(n.frequency),
                this.detune.connect(n.detune),
                (n.detune.overridden = !1),
                n.connect(this.output),
                (this._oscillators[e] = n);
            }
            (this.spread = this._spread),
              "started" === this.state && this._forEach((t) => t.start());
          }
        }
        get phase() {
          return this._phase;
        }
        set phase(t) {
          (this._phase = t),
            this._forEach(
              (t, e) => (t.phase = this._phase + (e / this.count) * 360),
            );
        }
        get baseType() {
          return this._oscillators[0].baseType;
        }
        set baseType(t) {
          this._forEach((e) => (e.baseType = t)),
            (this._type = this._oscillators[0].type);
        }
        get partials() {
          return this._oscillators[0].partials;
        }
        set partials(t) {
          (this._partials = t),
            (this._partialCount = this._partials.length),
            t.length &&
              ((this._type = "custom"), this._forEach((e) => (e.partials = t)));
        }
        get partialCount() {
          return this._oscillators[0].partialCount;
        }
        set partialCount(t) {
          (this._partialCount = t),
            this._forEach((e) => (e.partialCount = t)),
            (this._type = this._oscillators[0].type);
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return dW(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this._forEach((t) => t.dispose()),
            this
          );
        }
      }
      class dJ extends dj {
        constructor() {
          super(
            cW(dJ.getDefaults(), arguments, [
              "frequency",
              "modulationFrequency",
            ]),
          ),
            (this.name = "PWMOscillator"),
            (this.sourceType = "pwm"),
            (this._scale = new dX({ context: this.context, value: 2 }));
          let t = cW(dJ.getDefaults(), arguments, [
            "frequency",
            "modulationFrequency",
          ]);
          (this._pulse = new d$({
            context: this.context,
            frequency: t.modulationFrequency,
          })),
            (this._pulse.carrierType = "sine"),
            (this.modulationFrequency = this._pulse.frequency),
            (this._modulator = new dz({
              context: this.context,
              detune: t.detune,
              frequency: t.frequency,
              onstop: () => this.onstop(this),
              phase: t.phase,
            })),
            (this.frequency = this._modulator.frequency),
            (this.detune = this._modulator.detune),
            this._modulator.chain(this._scale, this._pulse.width),
            this._pulse.connect(this.output),
            c3(this, ["modulationFrequency", "frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(dj.getDefaults(), {
            detune: 0,
            frequency: 440,
            modulationFrequency: 0.4,
            phase: 0,
            type: "pwm",
          });
        }
        _start(t) {
          (t = this.toSeconds(t)),
            this._modulator.start(t),
            this._pulse.start(t);
        }
        _stop(t) {
          (t = this.toSeconds(t)), this._modulator.stop(t), this._pulse.stop(t);
        }
        _restart(t) {
          this._modulator.restart(t), this._pulse.restart(t);
        }
        get type() {
          return "pwm";
        }
        get baseType() {
          return "pwm";
        }
        get partials() {
          return [];
        }
        get partialCount() {
          return 0;
        }
        get phase() {
          return this._modulator.phase;
        }
        set phase(t) {
          this._modulator.phase = t;
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return dW(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._pulse.dispose(),
            this._scale.dispose(),
            this._modulator.dispose(),
            this
          );
        }
      }
      let dK = { am: dY, fat: dQ, fm: dH, oscillator: dz, pulse: d$, pwm: dJ };
      class d0 extends dj {
        constructor() {
          super(cW(d0.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "OmniOscillator");
          let t = cW(d0.getDefaults(), arguments, ["frequency", "type"]);
          (this.frequency = new dT({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            (this.detune = new dT({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            c3(this, ["frequency", "detune"]),
            this.set(t);
        }
        static getDefaults() {
          return Object.assign(
            dz.getDefaults(),
            dH.getDefaults(),
            dY.getDefaults(),
            dQ.getDefaults(),
            d$.getDefaults(),
            dJ.getDefaults(),
          );
        }
        _start(t) {
          this._oscillator.start(t);
        }
        _stop(t) {
          this._oscillator.stop(t);
        }
        _restart(t) {
          return this._oscillator.restart(t), this;
        }
        get type() {
          let t = "";
          return (
            ["am", "fm", "fat"].some((t) => this._sourceType === t) &&
              (t = this._sourceType),
            t + this._oscillator.type
          );
        }
        set type(t) {
          "fm" === t.substr(0, 2)
            ? (this._createNewOscillator("fm"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(2)))
            : "am" === t.substr(0, 2)
            ? (this._createNewOscillator("am"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(2)))
            : "fat" === t.substr(0, 3)
            ? (this._createNewOscillator("fat"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(3)))
            : "pwm" === t
            ? (this._createNewOscillator("pwm"),
              (this._oscillator = this._oscillator))
            : "pulse" === t
            ? this._createNewOscillator("pulse")
            : (this._createNewOscillator("oscillator"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t));
        }
        get partials() {
          return this._oscillator.partials;
        }
        set partials(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            (this._oscillator.partials = t);
        }
        get partialCount() {
          return this._oscillator.partialCount;
        }
        set partialCount(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            (this._oscillator.partialCount = t);
        }
        set(t) {
          return (
            Reflect.has(t, "type") && t.type && (this.type = t.type),
            super.set(t),
            this
          );
        }
        _createNewOscillator(t) {
          if (t !== this._sourceType) {
            this._sourceType = t;
            let e = dK[t],
              n = this.now();
            if (this._oscillator) {
              let i = this._oscillator;
              i.stop(n),
                this.context.setTimeout(() => i.dispose(), this.blockTime);
            }
            (this._oscillator = new e({ context: this.context })),
              this.frequency.connect(this._oscillator.frequency),
              this.detune.connect(this._oscillator.detune),
              this._oscillator.connect(this.output),
              (this._oscillator.onstop = () => this.onstop(this)),
              "started" === this.state && this._oscillator.start(n);
          }
        }
        get phase() {
          return this._oscillator.phase;
        }
        set phase(t) {
          this._oscillator.phase = t;
        }
        get sourceType() {
          return this._sourceType;
        }
        set sourceType(t) {
          let e = "sine";
          "pwm" !== this._oscillator.type &&
            "pulse" !== this._oscillator.type &&
            (e = this._oscillator.type),
            "fm" === t
              ? (this.type = "fm" + e)
              : "am" === t
              ? (this.type = "am" + e)
              : "fat" === t
              ? (this.type = "fat" + e)
              : "oscillator" === t
              ? (this.type = e)
              : "pulse" === t
              ? (this.type = "pulse")
              : "pwm" === t && (this.type = "pwm");
        }
        _getOscType(t, e) {
          return t instanceof dK[e];
        }
        get baseType() {
          return this._oscillator.baseType;
        }
        set baseType(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            "pulse" === t ||
            "pwm" === t ||
            (this._oscillator.baseType = t);
        }
        get width() {
          return this._getOscType(this._oscillator, "pulse")
            ? this._oscillator.width
            : void 0;
        }
        get count() {
          return this._getOscType(this._oscillator, "fat")
            ? this._oscillator.count
            : void 0;
        }
        set count(t) {
          this._getOscType(this._oscillator, "fat") &&
            cM(t) &&
            (this._oscillator.count = t);
        }
        get spread() {
          return this._getOscType(this._oscillator, "fat")
            ? this._oscillator.spread
            : void 0;
        }
        set spread(t) {
          this._getOscType(this._oscillator, "fat") &&
            cM(t) &&
            (this._oscillator.spread = t);
        }
        get modulationType() {
          return this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")
            ? this._oscillator.modulationType
            : void 0;
        }
        set modulationType(t) {
          (this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")) &&
            cD(t) &&
            (this._oscillator.modulationType = t);
        }
        get modulationIndex() {
          return this._getOscType(this._oscillator, "fm")
            ? this._oscillator.modulationIndex
            : void 0;
        }
        get harmonicity() {
          return this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")
            ? this._oscillator.harmonicity
            : void 0;
        }
        get modulationFrequency() {
          return this._getOscType(this._oscillator, "pwm")
            ? this._oscillator.modulationFrequency
            : void 0;
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return dW(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.detune.dispose(),
            this.frequency.dispose(),
            this._oscillator.dispose(),
            this
          );
        }
      }
      function d1(t, e = 1 / 0) {
        let n = new WeakMap();
        return function (i, s) {
          Reflect.defineProperty(i, s, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.get(this);
            },
            set: function (i) {
              cb(i, t, e), n.set(this, i);
            },
          });
        };
      }
      function d2(t, e = 1 / 0) {
        let n = new WeakMap();
        return function (i, s) {
          Reflect.defineProperty(i, s, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.get(this);
            },
            set: function (i) {
              cb(this.toSeconds(i), t, e), n.set(this, i);
            },
          });
        };
      }
      class d3 extends dj {
        constructor() {
          super(cW(d3.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "Player"),
            (this._activeSources = new Set());
          let t = cW(d3.getDefaults(), arguments, ["url", "onload"]);
          (this._buffer = new c4({
            onload: this._onload.bind(this, t.onload),
            onerror: t.onerror,
            reverse: t.reverse,
            url: t.url,
          })),
            (this.autostart = t.autostart),
            (this._loop = t.loop),
            (this._loopStart = t.loopStart),
            (this._loopEnd = t.loopEnd),
            (this._playbackRate = t.playbackRate),
            (this.fadeIn = t.fadeIn),
            (this.fadeOut = t.fadeOut);
        }
        static getDefaults() {
          return Object.assign(dj.getDefaults(), {
            autostart: !1,
            fadeIn: 0,
            fadeOut: 0,
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            onload: c8,
            onerror: c8,
            playbackRate: 1,
            reverse: !1,
          });
        }
        load(t) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            return yield this._buffer.load(t), this._onload(), this;
          });
        }
        _onload(t = c8) {
          t(), this.autostart && this.start();
        }
        _onSourceEnd(t) {
          this.onstop(this),
            this._activeSources.delete(t),
            0 !== this._activeSources.size ||
              this._synced ||
              "started" !== this._state.getValueAtTime(this.now()) ||
              (this._state.cancel(this.now()),
              this._state.setStateAtTime("stopped", this.now()));
        }
        start(t, e, n) {
          return super.start(t, e, n), this;
        }
        _start(t, e, n) {
          e = this._loop ? cB(e, this._loopStart) : cB(e, 0);
          let i = this.toSeconds(e),
            s = n;
          n = cB(n, Math.max(this._buffer.duration - i, 0));
          let r = this.toSeconds(n);
          (r /= this._playbackRate), (t = this.toSeconds(t));
          let a = new dL({
            url: this._buffer,
            context: this.context,
            fadeIn: this.fadeIn,
            fadeOut: this.fadeOut,
            loop: this._loop,
            loopEnd: this._loopEnd,
            loopStart: this._loopStart,
            onended: this._onSourceEnd.bind(this),
            playbackRate: this._playbackRate,
          }).connect(this.output);
          this._loop ||
            this._synced ||
            (this._state.cancel(t + r),
            this._state.setStateAtTime("stopped", t + r, { implicitEnd: !0 })),
            this._activeSources.add(a),
            this._loop && ck(s)
              ? a.start(t, i)
              : a.start(t, i, r - this.toSeconds(this.fadeOut));
        }
        _stop(t) {
          let e = this.toSeconds(t);
          this._activeSources.forEach((t) => t.stop(e));
        }
        restart(t, e, n) {
          return super.restart(t, e, n), this;
        }
        _restart(t, e, n) {
          this._stop(t), this._start(t, e, n);
        }
        seek(t, e) {
          let n = this.toSeconds(e);
          if ("started" === this._state.getValueAtTime(n)) {
            let i = this.toSeconds(t);
            this._stop(n), this._start(n, i);
          }
          return this;
        }
        setLoopPoints(t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }
        get loopStart() {
          return this._loopStart;
        }
        set loopStart(t) {
          (this._loopStart = t),
            this.buffer.loaded &&
              cb(this.toSeconds(t), 0, this.buffer.duration),
            this._activeSources.forEach((e) => {
              e.loopStart = t;
            });
        }
        get loopEnd() {
          return this._loopEnd;
        }
        set loopEnd(t) {
          (this._loopEnd = t),
            this.buffer.loaded &&
              cb(this.toSeconds(t), 0, this.buffer.duration),
            this._activeSources.forEach((e) => {
              e.loopEnd = t;
            });
        }
        get buffer() {
          return this._buffer;
        }
        set buffer(t) {
          this._buffer.set(t);
        }
        get loop() {
          return this._loop;
        }
        set loop(t) {
          if (
            this._loop !== t &&
            ((this._loop = t),
            this._activeSources.forEach((e) => {
              e.loop = t;
            }),
            t)
          ) {
            let e = this._state.getNextState("stopped", this.now());
            e && this._state.cancel(e.time);
          }
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          this._playbackRate = t;
          let e = this.now(),
            n = this._state.getNextState("stopped", e);
          n &&
            n.implicitEnd &&
            (this._state.cancel(n.time),
            this._activeSources.forEach((t) => t.cancelStop())),
            this._activeSources.forEach((n) => {
              n.playbackRate.setValueAtTime(t, e);
            });
        }
        get reverse() {
          return this._buffer.reverse;
        }
        set reverse(t) {
          this._buffer.reverse = t;
        }
        get loaded() {
          return this._buffer.loaded;
        }
        dispose() {
          return (
            super.dispose(),
            this._activeSources.forEach((t) => t.dispose()),
            this._activeSources.clear(),
            this._buffer.dispose(),
            this
          );
        }
      }
      (0, cP.__decorate)([d2(0)], d3.prototype, "fadeIn", void 0),
        (0, cP.__decorate)([d2(0)], d3.prototype, "fadeOut", void 0);
      class d8 extends d_ {
        constructor() {
          super(
            cW(d8.getDefaults(), arguments, [
              "attack",
              "decay",
              "sustain",
              "release",
            ]),
          ),
            (this.name = "Envelope"),
            (this._sig = new dT({ context: this.context, value: 0 })),
            (this.output = this._sig),
            (this.input = void 0);
          let t = cW(d8.getDefaults(), arguments, [
            "attack",
            "decay",
            "sustain",
            "release",
          ]);
          (this.attack = t.attack),
            (this.decay = t.decay),
            (this.sustain = t.sustain),
            (this.release = t.release),
            (this.attackCurve = t.attackCurve),
            (this.releaseCurve = t.releaseCurve),
            (this.decayCurve = t.decayCurve);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            attack: 0.01,
            attackCurve: "linear",
            decay: 0.1,
            decayCurve: "exponential",
            release: 1,
            releaseCurve: "exponential",
            sustain: 0.5,
          });
        }
        get value() {
          return this.getValueAtTime(this.now());
        }
        _getCurve(t, e) {
          if (cD(t)) return t;
          {
            let n;
            for (n in d4) if (d4[n][e] === t) return n;
            return t;
          }
        }
        _setCurve(t, e, n) {
          if (cD(n) && Reflect.has(d4, n)) {
            let i = d4[n];
            cE(i) ? "_decayCurve" !== t && (this[t] = i[e]) : (this[t] = i);
          } else if (cI(n) && "_decayCurve" !== t) this[t] = n;
          else throw Error("Envelope: invalid curve: " + n);
        }
        get attackCurve() {
          return this._getCurve(this._attackCurve, "In");
        }
        set attackCurve(t) {
          this._setCurve("_attackCurve", "In", t);
        }
        get releaseCurve() {
          return this._getCurve(this._releaseCurve, "Out");
        }
        set releaseCurve(t) {
          this._setCurve("_releaseCurve", "Out", t);
        }
        get decayCurve() {
          return this._decayCurve;
        }
        set decayCurve(t) {
          cT(
            ["linear", "exponential"].some((e) => e === t),
            `Invalid envelope curve: ${t}`,
          ),
            (this._decayCurve = t);
        }
        triggerAttack(t, e = 1) {
          this.log("triggerAttack", t, e), (t = this.toSeconds(t));
          let n = this.toSeconds(this.attack),
            i = n,
            s = this.toSeconds(this.decay),
            r = this.getValueAtTime(t);
          if (r > 0) {
            let a = 1 / i;
            i = (1 - r) / a;
          }
          if (i < this.sampleTime)
            this._sig.cancelScheduledValues(t), this._sig.setValueAtTime(e, t);
          else if ("linear" === this._attackCurve)
            this._sig.linearRampTo(e, i, t);
          else if ("exponential" === this._attackCurve)
            this._sig.targetRampTo(e, i, t);
          else {
            this._sig.cancelAndHoldAtTime(t);
            let o = this._attackCurve;
            for (let l = 1; l < o.length; l++)
              if (o[l - 1] <= r && r <= o[l]) {
                (o = this._attackCurve.slice(l))[0] = r;
                break;
              }
            this._sig.setValueCurveAtTime(o, t, i, e);
          }
          if (s && this.sustain < 1) {
            let u = e * this.sustain,
              h = t + i;
            this.log("decay", h),
              "linear" === this._decayCurve
                ? this._sig.linearRampToValueAtTime(u, s + h)
                : this._sig.exponentialApproachValueAtTime(u, h, s);
          }
          return this;
        }
        triggerRelease(t) {
          this.log("triggerRelease", t), (t = this.toSeconds(t));
          let e = this.getValueAtTime(t);
          if (e > 0) {
            let n = this.toSeconds(this.release);
            n < this.sampleTime
              ? this._sig.setValueAtTime(0, t)
              : "linear" === this._releaseCurve
              ? this._sig.linearRampTo(0, n, t)
              : "exponential" === this._releaseCurve
              ? this._sig.targetRampTo(0, n, t)
              : (cT(
                  cI(this._releaseCurve),
                  "releaseCurve must be either 'linear', 'exponential' or an array",
                ),
                this._sig.cancelAndHoldAtTime(t),
                this._sig.setValueCurveAtTime(this._releaseCurve, t, n, e));
          }
          return this;
        }
        getValueAtTime(t) {
          return this._sig.getValueAtTime(t);
        }
        triggerAttackRelease(t, e, n = 1) {
          return (
            (e = this.toSeconds(e)),
            this.triggerAttack(e, n),
            this.triggerRelease(e + this.toSeconds(t)),
            this
          );
        }
        cancel(t) {
          return this._sig.cancelScheduledValues(this.toSeconds(t)), this;
        }
        connect(t, e = 0, n = 0) {
          return db(this, t, e, n), this;
        }
        asArray(t = 1024) {
          return (0, cP.__awaiter)(this, void 0, void 0, function* () {
            let e = t / this.context.sampleRate,
              n = new c6(1, e, this.context.sampleRate),
              i = this.toSeconds(this.attack) + this.toSeconds(this.decay),
              s = i + this.toSeconds(this.release),
              r = 0.1 * s,
              a = s + r,
              o = new this.constructor(
                Object.assign(this.get(), {
                  attack: (e * this.toSeconds(this.attack)) / a,
                  decay: (e * this.toSeconds(this.decay)) / a,
                  release: (e * this.toSeconds(this.release)) / a,
                  context: n,
                }),
              );
            o._sig.toDestination(),
              o.triggerAttackRelease((e * (i + r)) / a, 0);
            let l = yield n.render();
            return l.getChannelData(0);
          });
        }
        dispose() {
          return super.dispose(), this._sig.dispose(), this;
        }
      }
      (0, cP.__decorate)([d2(0)], d8.prototype, "attack", void 0),
        (0, cP.__decorate)([d2(0)], d8.prototype, "decay", void 0),
        (0, cP.__decorate)([d1(0, 1)], d8.prototype, "sustain", void 0),
        (0, cP.__decorate)([d2(0)], d8.prototype, "release", void 0);
      let d4 = (() => {
        var t;
        let e,
          n,
          i = [];
        for (e = 0; e < 128; e++) i[e] = Math.sin((e / 127) * (Math.PI / 2));
        let s = [];
        for (e = 0; e < 127; e++) {
          n = e / 127;
          let r = Math.sin(n * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
          s[e] = r / 10 + 0.83 * n;
        }
        s[127] = 1;
        let a = [];
        for (e = 0; e < 128; e++) a[e] = Math.ceil((e / 127) * 5) / 5;
        let o = [];
        for (e = 0; e < 128; e++)
          (n = e / 127), (o[e] = 0.5 * (1 - Math.cos(Math.PI * n)));
        let l = [];
        for (e = 0; e < 128; e++) {
          n = e / 127;
          let u = 4 * Math.pow(n, 3) + 0.2,
            h = Math.cos(u * Math.PI * 2 * n);
          l[e] = Math.abs(h * (1 - n));
        }
        function c(t) {
          let e = Array(t.length);
          for (let n = 0; n < t.length; n++) e[n] = 1 - t[n];
          return e;
        }
        return {
          bounce: { In: c(l), Out: l },
          cosine: { In: i, Out: i.slice(0).reverse() },
          exponential: "exponential",
          linear: "linear",
          ripple: { In: s, Out: c(s) },
          sine: { In: o, Out: c(o) },
          step: { In: a, Out: c(a) },
        };
      })();
      class d6 extends d_ {
        constructor() {
          super(cW(d6.getDefaults(), arguments)),
            (this._scheduledEvents = []),
            (this._synced = !1),
            (this._original_triggerAttack = this.triggerAttack),
            (this._original_triggerRelease = this.triggerRelease);
          let t = cW(d6.getDefaults(), arguments);
          (this._volume = this.output =
            new dR({ context: this.context, volume: t.volume })),
            (this.volume = this._volume.volume),
            c3(this, "volume");
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), { volume: 0 });
        }
        sync() {
          return (
            this._syncState() &&
              (this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 0)),
            this
          );
        }
        _syncState() {
          let t = !1;
          return this._synced || ((this._synced = !0), (t = !0)), t;
        }
        _syncMethod(t, e) {
          let n = (this["_original_" + t] = this[t]);
          this[t] = (...t) => {
            let i = t[e],
              s = this.context.transport.schedule((i) => {
                (t[e] = i), n.apply(this, t);
              }, i);
            this._scheduledEvents.push(s);
          };
        }
        unsync() {
          return (
            this._scheduledEvents.forEach((t) =>
              this.context.transport.clear(t),
            ),
            (this._scheduledEvents = []),
            this._synced &&
              ((this._synced = !1),
              (this.triggerAttack = this._original_triggerAttack),
              (this.triggerRelease = this._original_triggerRelease)),
            this
          );
        }
        triggerAttackRelease(t, e, n, i) {
          let s = this.toSeconds(n),
            r = this.toSeconds(e);
          return this.triggerAttack(t, s, i), this.triggerRelease(s + r), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._volume.dispose(),
            this.unsync(),
            (this._scheduledEvents = []),
            this
          );
        }
      }
      class d5 extends d6 {
        constructor() {
          super(cW(d5.getDefaults(), arguments));
          let t = cW(d5.getDefaults(), arguments);
          (this.portamento = t.portamento), (this.onsilence = t.onsilence);
        }
        static getDefaults() {
          return Object.assign(d6.getDefaults(), {
            detune: 0,
            onsilence: c8,
            portamento: 0,
          });
        }
        triggerAttack(t, e, n = 1) {
          this.log("triggerAttack", t, e, n);
          let i = this.toSeconds(e);
          return this._triggerEnvelopeAttack(i, n), this.setNote(t, i), this;
        }
        triggerRelease(t) {
          this.log("triggerRelease", t);
          let e = this.toSeconds(t);
          return this._triggerEnvelopeRelease(e), this;
        }
        setNote(t, e) {
          let n = this.toSeconds(e),
            i = t instanceof du ? t.toFrequency() : t;
          if (this.portamento > 0 && this.getLevelAtTime(n) > 0.05) {
            let s = this.toSeconds(this.portamento);
            this.frequency.exponentialRampTo(i, s, n);
          } else this.frequency.setValueAtTime(i, n);
          return this;
        }
      }
      (0, cP.__decorate)([d2(0)], d5.prototype, "portamento", void 0);
      class d7 extends d8 {
        constructor() {
          super(
            cW(d7.getDefaults(), arguments, [
              "attack",
              "decay",
              "sustain",
              "release",
            ]),
          ),
            (this.name = "AmplitudeEnvelope"),
            (this._gainNode = new dy({ context: this.context, gain: 0 })),
            (this.output = this._gainNode),
            (this.input = this._gainNode),
            this._sig.connect(this._gainNode.gain),
            (this.output = this._gainNode),
            (this.input = this._gainNode);
        }
        dispose() {
          return super.dispose(), this._gainNode.dispose(), this;
        }
      }
      class d9 extends d5 {
        constructor() {
          super(cW(d9.getDefaults(), arguments)), (this.name = "Synth");
          let t = cW(d9.getDefaults(), arguments);
          (this.oscillator = new d0(
            Object.assign(
              {
                context: this.context,
                detune: t.detune,
                onstop: () => this.onsilence(this),
              },
              t.oscillator,
            ),
          )),
            (this.frequency = this.oscillator.frequency),
            (this.detune = this.oscillator.detune),
            (this.envelope = new d7(
              Object.assign({ context: this.context }, t.envelope),
            )),
            this.oscillator.chain(this.envelope, this.output),
            c3(this, ["oscillator", "frequency", "detune", "envelope"]);
        }
        static getDefaults() {
          return Object.assign(d5.getDefaults(), {
            envelope: Object.assign(
              cz(d8.getDefaults(), Object.keys(d_.getDefaults())),
              { attack: 0.005, decay: 0.1, release: 1, sustain: 0.3 },
            ),
            oscillator: Object.assign(
              cz(d0.getDefaults(), [
                ...Object.keys(dj.getDefaults()),
                "frequency",
                "detune",
              ]),
              { type: "triangle" },
            ),
          });
        }
        _triggerEnvelopeAttack(t, e) {
          if (
            (this.envelope.triggerAttack(t, e),
            this.oscillator.start(t),
            0 === this.envelope.sustain)
          ) {
            let n = this.toSeconds(this.envelope.attack),
              i = this.toSeconds(this.envelope.decay);
            this.oscillator.stop(t + n + i);
          }
        }
        _triggerEnvelopeRelease(t) {
          this.envelope.triggerRelease(t),
            this.oscillator.stop(t + this.toSeconds(this.envelope.release));
        }
        getLevelAtTime(t) {
          return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
        }
        dispose() {
          return (
            super.dispose(),
            this.oscillator.dispose(),
            this.envelope.dispose(),
            this
          );
        }
      }
      class pt extends d9 {
        constructor() {
          super(cW(pt.getDefaults(), arguments)),
            (this.name = "MembraneSynth"),
            (this.portamento = 0);
          let t = cW(pt.getDefaults(), arguments);
          (this.pitchDecay = t.pitchDecay),
            (this.octaves = t.octaves),
            c3(this, ["oscillator", "envelope"]);
        }
        static getDefaults() {
          return cL(d5.getDefaults(), d9.getDefaults(), {
            envelope: {
              attack: 0.001,
              attackCurve: "exponential",
              decay: 0.4,
              release: 1.4,
              sustain: 0.01,
            },
            octaves: 10,
            oscillator: { type: "sine" },
            pitchDecay: 0.05,
          });
        }
        setNote(t, e) {
          let n = this.toSeconds(e),
            i = this.toFrequency(t instanceof du ? t.toFrequency() : t),
            s = i * this.octaves;
          return (
            this.oscillator.frequency.setValueAtTime(s, n),
            this.oscillator.frequency.exponentialRampToValueAtTime(
              i,
              n + this.toSeconds(this.pitchDecay),
            ),
            this
          );
        }
        dispose() {
          return super.dispose(), this;
        }
      }
      (0, cP.__decorate)([d1(0)], pt.prototype, "octaves", void 0),
        (0, cP.__decorate)([d2(0)], pt.prototype, "pitchDecay", void 0);
      let pe = new Set();
      function pn(t) {
        pe.add(t);
      }
      function pi(t, e) {
        let n = `registerProcessor("${t}", ${e})`;
        pe.add(n);
      }
      let ps = `
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;
      pn(ps);
      let pr = `
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;
      pn(pr);
      let pa = `
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;
      pn(pa);
      let po = `
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;
      pi("feedback-comb-filter", po);
      class pl extends d6 {
        constructor() {
          super(
            cW(
              pl.getDefaults(),
              arguments,
              ["urls", "onload", "baseUrl"],
              "urls",
            ),
          ),
            (this.name = "Sampler"),
            (this._activeSources = new Map());
          let t = cW(
              pl.getDefaults(),
              arguments,
              ["urls", "onload", "baseUrl"],
              "urls",
            ),
            e = {};
          Object.keys(t.urls).forEach((n) => {
            let i = parseInt(n, 10);
            if (
              (cT(
                cR(n) || (cM(i) && isFinite(i)),
                `url key is neither a note or midi pitch: ${n}`,
              ),
              cR(n))
            ) {
              let s = new du(this.context, n).toMidi();
              e[s] = t.urls[n];
            } else cM(i) && isFinite(i) && (e[i] = t.urls[i]);
          }),
            (this._buffers = new dO({
              urls: e,
              onload: t.onload,
              baseUrl: t.baseUrl,
              onerror: t.onerror,
            })),
            (this.attack = t.attack),
            (this.release = t.release),
            (this.curve = t.curve),
            this._buffers.loaded && Promise.resolve().then(t.onload);
        }
        static getDefaults() {
          return Object.assign(d6.getDefaults(), {
            attack: 0,
            baseUrl: "",
            curve: "exponential",
            onload: c8,
            onerror: c8,
            release: 0.1,
            urls: {},
          });
        }
        _findClosest(t) {
          let e = 0;
          for (; e < 96; ) {
            if (this._buffers.has(t + e)) return -e;
            if (this._buffers.has(t - e)) return e;
            e++;
          }
          throw Error(`No available buffers for note: ${t}`);
        }
        triggerAttack(t, e, n = 1) {
          return (
            this.log("triggerAttack", t, e, n),
            Array.isArray(t) || (t = [t]),
            t.forEach((t) => {
              let i = dr(new du(this.context, t).toFrequency()),
                s = Math.round(i),
                r = this._findClosest(s),
                a = this._buffers.get(s - r),
                o = dn(r + (i - s)),
                l = new dL({
                  url: a,
                  context: this.context,
                  curve: this.curve,
                  fadeIn: this.attack,
                  fadeOut: this.release,
                  playbackRate: o,
                }).connect(this.output);
              l.start(e, 0, a.duration / o, n),
                cI(this._activeSources.get(s)) ||
                  this._activeSources.set(s, []),
                this._activeSources.get(s).push(l),
                (l.onended = () => {
                  if (this._activeSources && this._activeSources.has(s)) {
                    let t = this._activeSources.get(s),
                      e = t.indexOf(l);
                    -1 !== e && t.splice(e, 1);
                  }
                });
            }),
            this
          );
        }
        triggerRelease(t, e) {
          return (
            this.log("triggerRelease", t, e),
            Array.isArray(t) || (t = [t]),
            t.forEach((t) => {
              let n = new du(this.context, t).toMidi();
              if (
                this._activeSources.has(n) &&
                this._activeSources.get(n).length
              ) {
                let i = this._activeSources.get(n);
                (e = this.toSeconds(e)),
                  i.forEach((t) => {
                    t.stop(e);
                  }),
                  this._activeSources.set(n, []);
              }
            }),
            this
          );
        }
        releaseAll(t) {
          let e = this.toSeconds(t);
          return (
            this._activeSources.forEach((t) => {
              for (; t.length; ) {
                let n = t.shift();
                n.stop(e);
              }
            }),
            this
          );
        }
        sync() {
          return (
            this._syncState() &&
              (this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 1)),
            this
          );
        }
        triggerAttackRelease(t, e, n, i = 1) {
          let s = this.toSeconds(n);
          return (
            this.triggerAttack(t, s, i),
            cI(e)
              ? (cT(cI(t), "notes must be an array when duration is array"),
                t.forEach((t, n) => {
                  let i = e[Math.min(n, e.length - 1)];
                  this.triggerRelease(t, s + this.toSeconds(i));
                }))
              : this.triggerRelease(t, s + this.toSeconds(e)),
            this
          );
        }
        add(t, e, n) {
          if (
            (cT(cR(t) || isFinite(t), `note must be a pitch or midi: ${t}`),
            cR(t))
          ) {
            let i = new du(this.context, t).toMidi();
            this._buffers.add(i, e, n);
          } else this._buffers.add(t, e, n);
          return this;
        }
        get loaded() {
          return this._buffers.loaded;
        }
        dispose() {
          return (
            super.dispose(),
            this._buffers.dispose(),
            this._activeSources.forEach((t) => {
              t.forEach((t) => t.dispose());
            }),
            this._activeSources.clear(),
            this
          );
        }
      }
      (0, cP.__decorate)([d2(0)], pl.prototype, "attack", void 0),
        (0, cP.__decorate)([d2(0)], pl.prototype, "release", void 0);
      class pu extends d_ {
        constructor() {
          super(Object.assign(cW(pu.getDefaults(), arguments, ["pan"]))),
            (this.name = "Panner"),
            (this._panner = this.context.createStereoPanner()),
            (this.input = this._panner),
            (this.output = this._panner);
          let t = cW(pu.getDefaults(), arguments, ["pan"]);
          (this.pan = new dm({
            context: this.context,
            param: this._panner.pan,
            value: t.pan,
            minValue: -1,
            maxValue: 1,
          })),
            (this._panner.channelCount = t.channelCount),
            (this._panner.channelCountMode = "explicit"),
            c3(this, "pan");
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), { pan: 0, channelCount: 1 });
        }
        dispose() {
          return (
            super.dispose(), this._panner.disconnect(), this.pan.dispose(), this
          );
        }
      }
      let ph = `
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;
      pi("bit-crusher", ph);
      class pc extends d_ {
        constructor() {
          super(cW(pc.getDefaults(), arguments, ["solo"])),
            (this.name = "Solo");
          let t = cW(pc.getDefaults(), arguments, ["solo"]);
          (this.input = this.output = new dy({ context: this.context })),
            pc._allSolos.has(this.context) ||
              pc._allSolos.set(this.context, new Set()),
            pc._allSolos.get(this.context).add(this),
            (this.solo = t.solo);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), { solo: !1 });
        }
        get solo() {
          return this._isSoloed();
        }
        set solo(t) {
          t ? this._addSolo() : this._removeSolo(),
            pc._allSolos.get(this.context).forEach((t) => t._updateSolo());
        }
        get muted() {
          return 0 === this.input.gain.value;
        }
        _addSolo() {
          pc._soloed.has(this.context) ||
            pc._soloed.set(this.context, new Set()),
            pc._soloed.get(this.context).add(this);
        }
        _removeSolo() {
          pc._soloed.has(this.context) &&
            pc._soloed.get(this.context).delete(this);
        }
        _isSoloed() {
          return (
            pc._soloed.has(this.context) &&
            pc._soloed.get(this.context).has(this)
          );
        }
        _noSolos() {
          return (
            !pc._soloed.has(this.context) ||
            (pc._soloed.has(this.context) &&
              0 === pc._soloed.get(this.context).size)
          );
        }
        _updateSolo() {
          this._isSoloed()
            ? (this.input.gain.value = 1)
            : this._noSolos()
            ? (this.input.gain.value = 1)
            : (this.input.gain.value = 0);
        }
        dispose() {
          return (
            super.dispose(),
            pc._allSolos.get(this.context).delete(this),
            this._removeSolo(),
            this
          );
        }
      }
      (pc._allSolos = new Map()), (pc._soloed = new Map());
      class pd extends d_ {
        constructor() {
          super(cW(pd.getDefaults(), arguments, ["pan", "volume"])),
            (this.name = "PanVol");
          let t = cW(pd.getDefaults(), arguments, ["pan", "volume"]);
          (this._panner = this.input =
            new pu({
              context: this.context,
              pan: t.pan,
              channelCount: t.channelCount,
            })),
            (this.pan = this._panner.pan),
            (this._volume = this.output =
              new dR({ context: this.context, volume: t.volume })),
            (this.volume = this._volume.volume),
            this._panner.connect(this._volume),
            (this.mute = t.mute),
            c3(this, ["pan", "volume"]);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            mute: !1,
            pan: 0,
            volume: 0,
            channelCount: 1,
          });
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._panner.dispose(),
            this.pan.dispose(),
            this._volume.dispose(),
            this.volume.dispose(),
            this
          );
        }
      }
      class pp extends d_ {
        constructor() {
          super(cW(pp.getDefaults(), arguments, ["volume", "pan"])),
            (this.name = "Channel");
          let t = cW(pp.getDefaults(), arguments, ["volume", "pan"]);
          (this._solo = this.input =
            new pc({ solo: t.solo, context: this.context })),
            (this._panVol = this.output =
              new pd({
                context: this.context,
                pan: t.pan,
                volume: t.volume,
                mute: t.mute,
                channelCount: t.channelCount,
              })),
            (this.pan = this._panVol.pan),
            (this.volume = this._panVol.volume),
            this._solo.connect(this._panVol),
            c3(this, ["pan", "volume"]);
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            pan: 0,
            volume: 0,
            mute: !1,
            solo: !1,
            channelCount: 1,
          });
        }
        get solo() {
          return this._solo.solo;
        }
        set solo(t) {
          this._solo.solo = t;
        }
        get muted() {
          return this._solo.muted || this.mute;
        }
        get mute() {
          return this._panVol.mute;
        }
        set mute(t) {
          this._panVol.mute = t;
        }
        _getBus(t) {
          return (
            pp.buses.has(t) ||
              pp.buses.set(t, new dy({ context: this.context })),
            pp.buses.get(t)
          );
        }
        send(t, e = 0) {
          let n = this._getBus(t),
            i = new dy({ context: this.context, units: "decibels", gain: e });
          return this.connect(i), i.connect(n), i;
        }
        receive(t) {
          let e = this._getBus(t);
          return e.connect(this), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._panVol.dispose(),
            this.pan.dispose(),
            this.volume.dispose(),
            this._solo.dispose(),
            this
          );
        }
      }
      pp.buses = new Map();
      class pf extends d_ {
        constructor() {
          super(...arguments),
            (this.name = "Listener"),
            (this.positionX = new dm({
              context: this.context,
              param: this.context.rawContext.listener.positionX,
            })),
            (this.positionY = new dm({
              context: this.context,
              param: this.context.rawContext.listener.positionY,
            })),
            (this.positionZ = new dm({
              context: this.context,
              param: this.context.rawContext.listener.positionZ,
            })),
            (this.forwardX = new dm({
              context: this.context,
              param: this.context.rawContext.listener.forwardX,
            })),
            (this.forwardY = new dm({
              context: this.context,
              param: this.context.rawContext.listener.forwardY,
            })),
            (this.forwardZ = new dm({
              context: this.context,
              param: this.context.rawContext.listener.forwardZ,
            })),
            (this.upX = new dm({
              context: this.context,
              param: this.context.rawContext.listener.upX,
            })),
            (this.upY = new dm({
              context: this.context,
              param: this.context.rawContext.listener.upY,
            })),
            (this.upZ = new dm({
              context: this.context,
              param: this.context.rawContext.listener.upZ,
            }));
        }
        static getDefaults() {
          return Object.assign(d_.getDefaults(), {
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            forwardX: 0,
            forwardY: 0,
            forwardZ: -1,
            upX: 0,
            upY: 1,
            upZ: 0,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.positionX.dispose(),
            this.positionY.dispose(),
            this.positionZ.dispose(),
            this.forwardX.dispose(),
            this.forwardY.dispose(),
            this.forwardZ.dispose(),
            this.upX.dispose(),
            this.upY.dispose(),
            this.upZ.dispose(),
            this
          );
        }
      }
      function pm() {
        return c9().now();
      }
      cQ((t) => {
        t.listener = new pf({ context: t });
      }),
        cK((t) => {
          t.listener.dispose();
        }),
        c9().transport,
        c9().destination,
        c9().destination,
        c9().listener,
        c9().draw,
        c9();
    },
    3897: function (t) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    5372: function (t) {
      (t.exports = function (t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    6690: function (t) {
      (t.exports = function (t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    9728: function (t, e, n) {
      var i = n(4062);
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, i(s.key), s);
        }
      }
      (t.exports = function (t, e, n) {
        return (
          e && s(t.prototype, e),
          n && s(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    8872: function (t) {
      (t.exports = function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != n) {
          var i,
            s,
            r,
            a,
            o = [],
            l = !0,
            u = !1;
          try {
            if (((r = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              l = !1;
            } else
              for (
                ;
                !(l = (i = r.call(n)).done) &&
                (o.push(i.value), o.length !== e);
                l = !0
              );
          } catch (h) {
            (u = !0), (s = h);
          } finally {
            try {
              if (!l && null != n.return && ((a = n.return()), Object(a) !== a))
                return;
            } finally {
              if (u) throw s;
            }
          }
          return o;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    2218: function (t) {
      (t.exports = function () {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    7424: function (t, e, n) {
      var i = n(5372),
        s = n(8872),
        r = n(6116),
        a = n(2218);
      (t.exports = function (t, e) {
        return i(t) || s(t, e) || r(t, e) || a();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    5036: function (t, e, n) {
      var i = n(8698).default;
      (t.exports = function (t, e) {
        if ("object" !== i(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var s = n.call(t, e || "default");
          if ("object" !== i(s)) return s;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    4062: function (t, e, n) {
      var i = n(8698).default,
        s = n(5036);
      (t.exports = function (t) {
        var e = s(t, "string");
        return "symbol" === i(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    8698: function (t) {
      function e(n) {
        return (
          (t.exports = e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(n)
        );
      }
      (t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    6116: function (t, e, n) {
      var i = n(3897);
      (t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return i(t, e);
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    7568: function (t, e, n) {
      "use strict";
      function i(t, e, n, i, s, r, a) {
        try {
          var o = t[r](a),
            l = o.value;
        } catch (u) {
          n(u);
          return;
        }
        o.done ? e(l) : Promise.resolve(l).then(i, s);
      }
      function s(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (s, r) {
            var a = t.apply(e, n);
            function o(t) {
              i(a, s, r, o, l, "next", t);
            }
            function l(t) {
              i(a, s, r, o, l, "throw", t);
            }
            o(void 0);
          });
        };
      }
      n.d(e, {
        Z: function () {
          return s;
        },
      });
    },
  },
]);
