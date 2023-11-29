(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(554);
        },
      ]);
    },
    554: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          },
        });
      var r = t(5893);
      function i() {
        return (0, r.jsx)("div", {
          className: "ground_1",
          children: (0, r.jsxs)("ul", {
            className: "ground_menu",
            children: [
              (0, r.jsx)("li", {
                children: (0, r.jsx)("a", {
                  href: "https://github.com/azizgharbi",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Github",
                }),
              }),
              (0, r.jsx)("li", {
                children: (0, r.jsx)("a", {
                  href: "https://stackoverflow.com/users/7253451/g-aziz",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "StackOverflow",
                }),
              }),
              (0, r.jsx)("li", {
                children: (0, r.jsx)("a", {
                  href: "https://www.linkedin.com/in/aziz-g-3b6397137/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Linkedin",
                }),
              }),
            ],
          }),
        });
      }
      function s() {
        return (0, r.jsx)("div", {
          className: "footer",
          children: (0, r.jsxs)("p", {
            children: [
              "The end. ",
              (0, r.jsx)("span", { children: "built with Passion!" }),
            ],
          }),
        });
      }
      var a = t(7568),
        o = t(7582),
        c = t(7294);
      function l() {
        return (l = (0, a.Z)(function () {
          var e;
          return (0, o.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  fetch("https://api.github.com/users/azizgharbi/repos"),
                ];
              case 1:
                if (!(e = n.sent()).ok) throw Error("Failed to fetch data");
                return [2, e.json()];
            }
          });
        })).apply(this, arguments);
      }
      function u() {
        var e = (0, c.useState)([]),
          n = e[0],
          t = e[1];
        return (
          (0, c.useEffect)(function () {
            function e() {
              return (e = (0, a.Z)(function () {
                var e;
                return (0, o.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        (function () {
                          return l.apply(this, arguments);
                        })(),
                      ];
                    case 1:
                      return (
                        t(
                          e
                            .sent()
                            .filter(function (e) {
                              return !e.fork;
                            })
                            .map(function (e) {
                              var n;
                              return {
                                full_name: e.full_name,
                                html_url: e.html_url,
                              };
                            }),
                        ),
                        [2]
                      );
                  }
                });
              })).apply(this, arguments);
            }
            !(function () {
              return e.apply(this, arguments);
            })();
          }, []),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: "github-box",
              children: n
                ? n.map(function (e) {
                    var n = e.full_name,
                      t = e.html_url;
                    return (0, r.jsx)(
                      "div",
                      {
                        className: "link",
                        children: (0, r.jsx)("a", {
                          href: t,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: n,
                        }),
                      },
                      n,
                    );
                  })
                : null,
            }),
          })
        );
      }
      var h = t(6955),
        d = {
          src: "https://azizgharbi.github.io//_next/static/media/link.08d836dc.gif",
          height: 278,
          width: 304,
        },
        f = t(5675),
        p = t.n(f),
        x = function (e) {
          var n = e.show,
            t = e.text;
          return (0, r.jsx)(r.Fragment, {
            children: n
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: "rectangle_img",
                      children: (0, r.jsx)(p(), {
                        src: d,
                        alt: "Goku",
                        width: 150,
                        height: 150,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "rectangle_text",
                      children: (0, r.jsx)("p", { children: t }),
                    }),
                  ],
                })
              : (0, r.jsx)("div", { className: "rectangle_head" }),
          });
        },
        g = {
          shape: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
              transition: "all .3s",
              cursor: "pointer",
              marginLeft: "10px",
              background: n && !e ? "#80c71f" : "#89ac59",
              height:
                !e && n
                  ? "180px"
                  : "".concat((180 + 100 * Math.random()).toFixed(), "px"),
              width: "75px",
            };
          },
        };
      function j(e) {
        var n = e.description,
          t = e.note,
          i = (0, c.useState)(!0),
          s = i[0],
          a = i[1],
          o = (0, c.useState)(!1),
          l = o[0],
          u = o[1],
          d = (0, c.useCallback)(
            function () {
              var e = new h.WV().toDestination(),
                n = h.zO();
              e.triggerAttack(t, n), e.triggerRelease(n + 0.2);
            },
            [t],
          ),
          f = (0, c.useCallback)(
            function () {
              d(), u(!l);
            },
            [d, l],
          ),
          p = (0, c.useCallback)(function () {
            a(!0);
          }, []),
          j = (0, c.useCallback)(function () {
            a(!1);
          }, []);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              style: g.shape(l, s),
              onClick: f,
              onMouseOut: p,
              onMouseOver: j,
            }),
            (0, r.jsx)(x, { show: l && n, text: n }),
          ],
        });
      }
      var m = [
          {
            description:
              "Aziz Gharbi, Software Developer Extraordinaire!\n    I'm so passionate about learning new technologies.\n    Open source enthusiast (because who likes secrets anyway?), Lua, Python, Rust, \n    TypeScript/JavaScript junkie, and Linux lover. Penguins are my spirit animal!",
            note: "C3",
          },
          { description: null, note: "C4" },
          { description: null, note: "C5" },
        ],
        v = function () {
          return (0, r.jsx)("div", {
            style: { display: "flex", justifyContent: "center" },
            children: m.map(function (e) {
              var n = e.description,
                t = e.note;
              return (0, r.jsx)(j, { description: n, note: t }, t);
            }),
          });
        };
      function _() {
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(i, {}),
            (0, r.jsx)(v, {}),
            (0, r.jsxs)("div", {
              className: "game_text",
              children: [
                (0, r.jsx)("p", {
                  children:
                    "Don't tell anyone, But finding the Triforce box will grant you +25 charisma points in real life.",
                }),
                (0, r.jsxs)("p", {
                  children: [
                    (0, r.jsx)("span", {
                      className: "hint_game",
                      children: "Hint: ",
                    }),
                    "Only the power of the click can unlock the secrets of the boxes. Choose wisely, hero",
                  ],
                }),
              ],
            }),
            (0, r.jsx)(u, {}),
            (0, r.jsx)(s, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [418, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
