"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [835],
  {
    25542: function (e, t, i) {
      var n = i(85893),
        a = (i(67294), i(82010)),
        s = i(69954);
      t.Z = function (e) {
        var t = e.children,
          i = e.type,
          o = e.onClick,
          r = e.classes,
          l = (0, a.F)().theme;
        return "primary" === i
          ? (0, n.jsx)("button", {
              onClick: o,
              type: "button",
              className:
                "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg "
                  .concat(
                    "dark" === l
                      ? "bg-white text-black"
                      : "bg-black text-white",
                    "  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link "
                  )
                  .concat(s.showCursor && "cursor-none", "  ")
                  .concat(r),
              children: t,
            })
          : (0, n.jsx)("button", {
              onClick: o,
              type: "button",
              className:
                "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 "
                  .concat(
                    "dark" === l
                      ? "hover:bg-slate-600 text-white"
                      : "hover:bg-slate-100",
                    " hover:scale-105 active:scale-100  tablet:first:ml-0  "
                  )
                  .concat(s.showCursor && "cursor-none", " ")
                  .concat(r, " link"),
              children: t,
            });
      };
    },
    29617: function (e, t, i) {
      var n = i(85893),
        a = i(67294),
        s = i(93462),
        o = (i(40358), i(82010));
      t.Z = function () {
        var e = (0, o.F)(),
          t = (0, a.useState)(),
          i = t[0],
          r = t[1];
        return (
          (0, a.useEffect)(function () {
            r(!0);
          }, []),
          (0, n.jsx)(n.Fragment, {
            children:
              i &&
              (0, n.jsx)(s.Z, {
                targets: [".link"],
                customClass: "custom-cursor",
                dimensions: 30,
                fill:
                  "dark" === e.theme
                    ? "#fff"
                    : "light" === e.theme
                    ? "#000"
                    : void 0,
                smoothness: { movement: 0.2, scale: 0.1, opacity: 0.2 },
                targetOpacity: 0.5,
                targetScale: 2,
              }),
          })
        );
      };
    },
    42665: function (e, t, i) {
      var n = i(85893),
        a = i(2271),
        s = i(82010),
        o = i(11163),
        r = i(67294),
        l = i(25542),
        c = i(69954);
      t.Z = function (e) {
        var t = e.handleWorkScroll,
          i = e.handleAboutScroll,
          d = e.isBlog,
          u = (0, o.useRouter)(),
          p = (0, s.F)(),
          m = p.theme,
          h = p.setTheme,
          f = (0, r.useState)(!1),
          g = f[0],
          b = f[1],
          x = c.name,
          w = c.showBlog,
          k = c.showResume;
        return (
          (0, r.useEffect)(function () {
            b(!0);
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(a.J, {
                className: "block tablet:hidden mt-5",
                children: function (e) {
                  var s = e.open;
                  return (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex items-center justify-between p-2 laptop:p-0",
                        children: [
                          (0, n.jsxs)("h1", {
                            onClick: function () {
                              return u.push("/");
                            },
                            className: "font-medium p-2 laptop:p-0 link",
                            children: [x, "."],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              c.darkMode &&
                                (0, n.jsx)(l.Z, {
                                  onClick: function () {
                                    return h("dark" === m ? "light" : "dark");
                                  },
                                  children: (0, n.jsx)("img", {
                                    className: "h-6",
                                    src: "/images/".concat(
                                      "dark" === m ? "moon.svg" : "sun.svg"
                                    ),
                                  }),
                                }),
                              (0, n.jsx)(a.J.Button, {
                                children: (0, n.jsx)("img", {
                                  className: "h-5",
                                  src: "/images/".concat(
                                    s
                                      ? "light" === m
                                        ? "cancel.svg"
                                        : "cancel-white.svg"
                                      : "dark" === m
                                      ? "menu-white.svg"
                                      : "menu.svg"
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)(a.J.Panel, {
                        className: "absolute right-0 z-10 w-11/12 p-4 ".concat(
                          "dark" === m ? "bg-slate-800" : "bg-white",
                          " shadow-md rounded-md"
                        ),
                        children: d
                          ? (0, n.jsxs)("div", {
                              className: "grid grid-cols-1",
                              children: [
                                (0, n.jsx)(l.Z, {
                                  onClick: function () {
                                    return u.push("/");
                                  },
                                  classes: "first:ml-1",
                                  children: "Home",
                                }),
                                w &&
                                  (0, n.jsx)(l.Z, {
                                    onClick: function () {
                                      return u.push("/blog");
                                    },
                                    children: "Blog",
                                  }),
                                k &&
                                  (0, n.jsx)(l.Z, {
                                    onClick: function () {
                                      return u.push("/resume");
                                    },
                                    classes: "first:ml-1",
                                    children: "Resume",
                                  }),
                                (0, n.jsx)(l.Z, {
                                  onClick: function () {
                                    return window.open(
                                      "mailto:andrew.makiev@gmail.com"
                                    );
                                  },
                                  children: "Contact",
                                }),
                              ],
                            })
                          : (0, n.jsxs)("div", {
                              className: "grid grid-cols-1",
                              children: [
                                (0, n.jsx)(l.Z, {
                                  onClick: t,
                                  children: "Work",
                                }),
                                (0, n.jsx)(l.Z, {
                                  onClick: i,
                                  children: "About",
                                }),
                                w &&
                                  (0, n.jsx)(l.Z, {
                                    onClick: function () {
                                      return u.push("/blog");
                                    },
                                    children: "Blog",
                                  }),
                                k &&
                                  (0, n.jsx)(l.Z, {
                                    onClick: function () {
                                      return window.open(
                                        "mailto:andrew.makiev@gmail.com"
                                      );
                                    },
                                    children: "Resume",
                                  }),
                                (0, n.jsx)(l.Z, {
                                  onClick: function () {
                                    return window.open(
                                      "mailto:andrew.makiev@gmail.com"
                                    );
                                  },
                                  children: "Contact",
                                }),
                              ],
                            }),
                      }),
                    ],
                  });
                },
              }),
              (0, n.jsxs)("div", {
                className:
                  "mt-10 hidden flex-row items-center justify-between sticky ".concat(
                    "light" === m && "bg-white",
                    " dark:text-white top-0 z-10 tablet:flex"
                  ),
                children: [
                  (0, n.jsxs)("h1", {
                    onClick: function () {
                      return u.push("/");
                    },
                    className: "font-medium cursor-pointer mob:p-2 laptop:p-0",
                    children: [x, "."],
                  }),
                  d
                    ? (0, n.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, n.jsx)(l.Z, {
                            onClick: function () {
                              return u.push("/");
                            },
                            children: "Home",
                          }),
                          w &&
                            (0, n.jsx)(l.Z, {
                              onClick: function () {
                                return u.push("/blog");
                              },
                              children: "Blog",
                            }),
                          k &&
                            (0, n.jsx)(l.Z, {
                              onClick: function () {
                                return u.push("/resume");
                              },
                              classes: "first:ml-1",
                              children: "Resume",
                            }),
                          (0, n.jsx)(l.Z, {
                            onClick: function () {
                              return window.open(
                                "mailto:andrew.makiev@gmail.com"
                              );
                            },
                            children: "Contact",
                          }),
                          g &&
                            m &&
                            c.darkMode &&
                            (0, n.jsx)(l.Z, {
                              onClick: function () {
                                return h("dark" === m ? "light" : "dark");
                              },
                              children: (0, n.jsx)("img", {
                                className: "h-6",
                                src: "/images/".concat(
                                  "dark" === m ? "moon.svg" : "sun.svg"
                                ),
                              }),
                            }),
                        ],
                      })
                    : (0, n.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, n.jsx)(l.Z, { onClick: t, children: "Work" }),
                          (0, n.jsx)(l.Z, { onClick: i, children: "About" }),
                          w &&
                            (0, n.jsx)(l.Z, {
                              onClick: function () {
                                return u.push("/blog");
                              },
                              children: "Blog",
                            }),
                          k &&
                            (0, n.jsx)(l.Z, {
                              onClick: function () {
                                return u.push("/resume");
                              },
                              classes: "first:ml-1",
                              children: "Resume",
                            }),
                          (0, n.jsx)(l.Z, {
                            onClick: function () {
                              return window.open(
                                "mailto:andrew.makiev@gmail.com"
                              );
                            },
                            children: "Contact",
                          }),
                          g &&
                            m &&
                            c.darkMode &&
                            (0, n.jsx)(l.Z, {
                              onClick: function () {
                                return h("dark" === m ? "light" : "dark");
                              },
                              children: (0, n.jsx)("img", {
                                className: "h-6",
                                src: "/images/".concat(
                                  "dark" === m ? "moon.svg" : "sun.svg"
                                ),
                              }),
                            }),
                        ],
                      }),
                ],
              }),
            ],
          })
        );
      };
    },
    69954: function (e) {
      e.exports = JSON.parse(
        '{"name":"Andrew Makiev","headerTaglineOne":"Hello \ud83d\udc4b","headerTaglineTwo":"I\'m Andrew Makiev","headerTaglineThree":"Frontend/React Developer","headerTaglineFour":" based in San Diego","showCursor":false,"showBlog":false,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/Fabulousman23"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/andrew-makiev-4619bb1b8/"},{"id":"3","title":"Twitter","link":"https://twitter.com/AndrewMakiev"},{"id":"5","title":"Email","link":"mailto:andrew.makiev@gmail.com"}],"projects":[{"id":"1","title":"Movie App","description":"Web Development","imageSrc":"https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80","url":"https://the-great-fabulousman23-site.netlify.app"},{"id":"2","title":"Movie API","description":"Creating API","imageSrc":"https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80","url":"https://github.com/Fabulousman23/movie_api1"},{"id":"3","title":"Pokemon App","description":"Web Development","imageSrc":"https://images.unsplash.com/photo-1638613067237-b1127ef06c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80","url":"https://fabulousman23.github.io/js_App/"},{"id":"4","title":"Meet App","description":"Serverless Web APP","imageSrc":"https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80","url":"https://fabulousman23.github.io/meet/"},{"id":"5","title":"Chat App","description":"Mobile Development","imageSrc":"https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80","url":"https://github.com/Fabulousman23/hello-world"},{"id":"6","title":"Movie App","description":"Angular App","imageSrc":"https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80","url":"https://fabulousman23.github.io/myFlix-Angular-client/welcome"}],"services":[{"id":"1","title":"Develop front-end features","description":"React developers responsible for UI elements such as icons, images, and gesture-driven features. Examples of gesture-driven features include swiping, long-pressing, and drag-and-drop."},{"id":"2","title":"Write code","description":"A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags."},{"id":"3","title":"Optimize application functionality","description":"In addition to designing and creating new features, React developers are responsible for cross-platform functionality. They ensure that different browsers and devices can efficiently run the application."},{"id":"4","title":"Software testing","description":"Being involved with all stages of interface development requires React developers to test the applications they work on."}],"aboutpara":"I\'m FrontEnd/React developer with a broad background and high sense of organization in handling assigned projects. My curiosity and past motivations have led to me to pick up skills along the way and increasingly understanding the importance of optimizing work procedures and adopting practices when working on projects. Currently working on personal projects to improve my skills and equally seeking a position in a reputable organization where i can leverage these skills and contribute to the success of teams.","resume":{"tagline":"\ud83d\udc4b I\'m Frontend/React Developer.","description":"I have delivered awesome user experiences to projects Well-versed with React, Javascript, and most of the Web frameworks.","experiences":[{"id":"1","dates":"September, 2021 - December, 2022","type":"Full Time","position":"Full-Stack Web Developer Certification","bullets":"Built a portfolio website from scratch using: Trello GitHub HTML and CSS and JS, Developed a Pokemon App with HTML CSS JavaScript and bootstrap that loads data from an external API and enables the viewing of data points in details, Built the server-side component of a \u201cmovies\u201d web application with Node.js Express MongoDB and Heroku, Built the client-side for an application called myFlix based on its existing server- side code (REST API and database). Tools: React React Redux Bootstrap, Built a serverless progressive web application (PWA) with React using a test- driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events, Built a chat app for mobile devices using React Native Gifted chats and Google Firebase. The app provides users with a chat interface and options to share images and their location, Used Angular and Material Design to build the client-side for the myFlix App based on its existing server-side code (REST API and database)"}],"education":{"universityName":"National Academy of the National Guard of Ukraine","universityDate":"2009-2014","universityPara":"Master\'s degree, Humanities and Social Sciences."},"languages":["Javascript","HTML5","CSS"],"frameworks":["React","React Native","Typescript","NodeJs","Angular"],"others":["MongoDB","Firebase","AWS","Redux JS"," GitHub","Heroku"]}}'
      );
    },
  },
]);
