(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    107: function (e, t, n) {
      e.exports = n(162);
    },
    112: function (e, t, n) {},
    114: function (e, t, n) {},
    127: function (e, t, n) {},
    162: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        s = n(8),
        c = n.n(s),
        o = n(22),
        i = n(40),
        u = n(77),
        l = n(42),
        p = (n(112), n(13)),
        h = n(14),
        f = n(20),
        d = n(19),
        m = n(21),
        v = n(6),
        b = n.n(v),
        O = n(15),
        g = n(10),
        k = n(207),
        j = n(198),
        y = n(11);
      n(114);
      function E() {
        var e = Object(g.a)(['\n  padding-left: 20px;\n']);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(g.a)(['\n  font-size: 18px;\n  margin: 10px 0;\n']);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = Object(g.a)([
          '\n  width: 100%;\n  padding: 8px 16px;\n  background-color: #f7c5c0;\n  color: #a51809;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n',
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      var x,
        T = y.a.div(S()),
        C = y.a.h1(w()),
        _ = y.a.ul(E()),
        P = (function (e) {
          function t() {
            var e, n;
            Object(p.a)(this, t);
            for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
              s[c] = arguments[c];
            return (
              ((n = Object(f.a)(
                this,
                (e = Object(d.a)(t)).call.apply(e, [this].concat(s)),
              )).renderMessageArray = function (e) {
                var t = e
                  .map(function (e) {
                    return e.constraints ? Object.values(e.constraints) : e;
                  })
                  .flat()
                  .map(function (e, t) {
                    return r.a.createElement('li', { key: t }, e);
                  });
                return r.a.createElement(_, null, t);
              }),
              n
            );
          }
          return (
            Object(m.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.message;
                  return r.a.createElement(
                    T,
                    null,
                    r.a.createElement(C, null, 'Oops!'),
                    Array.isArray(e)
                      ? this.renderMessageArray(e)
                      : r.a.createElement('p', null, e),
                  );
                },
              },
            ]),
            t
          );
        })(a.Component);
      function R() {
        var e = Object(g.a)(['\n  width: 100%;\n']);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = Object(g.a)([
          '\n  max-width: 480px;\n  width: 100%;\n  background-color: #edf4ff;\n  padding: 30px;\n  border-radius: 5px;\n',
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = Object(g.a)(['\n  margin-top: 0;\n']);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      var U,
        N = y.a.h1(A()),
        B = y.a.div(D()),
        I = Object(y.a)(k.a)(R()),
        L =
          Object(o.b)('userStore', 'routerStore')(
            (x = (function (e) {
              function t(e) {
                var n;
                return (
                  Object(p.a)(this, t),
                  ((n = Object(f.a)(
                    this,
                    Object(d.a)(t).call(this, e),
                  )).submit = Object(O.a)(
                    b.a.mark(function e() {
                      var t, a, r, s;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  n.setState({ errorMessage: null }),
                                  (t = n.state),
                                  (a = t.username),
                                  (r = t.password),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  n.props.userStore.signin(a, r)
                                );
                              case 5:
                                n.props.routerStore.push('/tasks'),
                                  (e.next = 12);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (s = e.t0.response.data.message),
                                  n.setState({ errorMessage: s });
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 8]],
                      );
                    }),
                  )),
                  (n.goToSignUp = function () {
                    n.props.routerStore.push('/signup');
                  }),
                  (n.state = {
                    username: '',
                    password: '',
                    errorMesssage: null,
                  }),
                  n
                );
              }
              return (
                Object(m.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: 'render',
                    value: function () {
                      var e = this,
                        t = this.state.errorMessage;
                      return r.a.createElement(
                        'div',
                        { className: 'fullscreen-wrapper' },
                        r.a.createElement(
                          B,
                          null,
                          r.a.createElement(N, null, 'Hello!'),
                          r.a.createElement(
                            'p',
                            null,
                            'Fill in your username and password to sign in.',
                          ),
                          t &&
                            r.a.createElement(P, {
                              message: this.state.errorMessage,
                            }),
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(I, {
                              id: 'outlined-name',
                              label: 'Username',
                              margin: 'dense',
                              variant: 'outlined',
                              onChange: function (t) {
                                return e.setState({ username: t.target.value });
                              },
                            }),
                          ),
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(I, {
                              id: 'outlined-name',
                              label: 'Password',
                              margin: 'dense',
                              variant: 'outlined',
                              type: 'password',
                              onChange: function (t) {
                                return e.setState({ password: t.target.value });
                              },
                            }),
                          ),
                          r.a.createElement('hr', null),
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(
                              j.a,
                              {
                                style: { marginBottom: '10px' },
                                fullWidth: !0,
                                variant: 'contained',
                                color: 'primary',
                                onClick: this.submit,
                              },
                              'SIGN IN',
                            ),
                            r.a.createElement(
                              j.a,
                              { fullWidth: !0, onClick: this.goToSignUp },
                              "Don't have an account? Sign up now!",
                            ),
                          ),
                        ),
                      );
                    },
                  },
                ]),
                t
              );
            })(a.Component)),
          ) || x;
      n(127);
      function M() {
        var e = Object(g.a)(['\n  width: 100%;\n']);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = Object(g.a)([
          '\n  max-width: 480px;\n  width: 100%;\n  background-color: #edf4ff;\n  padding: 30px;\n  border-radius: 5px;\n',
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = Object(g.a)(['\n  margin-top: 0;\n']);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      var W,
        H = y.a.h1(F()),
        G = y.a.div(z()),
        $ = Object(y.a)(k.a)(M()),
        J =
          Object(o.b)('userStore', 'routerStore')(
            (U = (function (e) {
              function t(e) {
                var n;
                return (
                  Object(p.a)(this, t),
                  ((n = Object(f.a)(
                    this,
                    Object(d.a)(t).call(this, e),
                  )).submit = Object(O.a)(
                    b.a.mark(function e() {
                      var t, a, r, s;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = n.state),
                                  (a = t.username),
                                  (r = t.password),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  n.props.userStore.signup(a, r)
                                );
                              case 4:
                                n.props.routerStore.push('/signin'),
                                  (e.next = 11);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(1)),
                                  (s = e.t0.response.data.message),
                                  n.setState({ errorMessage: s });
                              case 11:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 7]],
                      );
                    }),
                  )),
                  (n.state = {
                    username: '',
                    password: '',
                    errorMessage: null,
                  }),
                  n
                );
              }
              return (
                Object(m.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: 'render',
                    value: function () {
                      var e = this,
                        t = this.state.errorMessage;
                      return r.a.createElement(
                        'div',
                        { className: 'fullscreen-wrapper' },
                        r.a.createElement(
                          G,
                          null,
                          r.a.createElement(H, null, 'Join us!'),
                          r.a.createElement(
                            'p',
                            null,
                            'Start managing tasks easily.',
                          ),
                          t &&
                            r.a.createElement(P, {
                              message: this.state.errorMessage,
                            }),
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement($, {
                              id: 'outlined-name',
                              label: 'Username',
                              margin: 'dense',
                              variant: 'outlined',
                              onChange: function (t) {
                                return e.setState({ username: t.target.value });
                              },
                            }),
                          ),
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement($, {
                              id: 'outlined-name',
                              label: 'Password',
                              margin: 'dense',
                              variant: 'outlined',
                              type: 'password',
                              onChange: function (t) {
                                return e.setState({ password: t.target.value });
                              },
                            }),
                          ),
                          r.a.createElement(
                            'p',
                            null,
                            'Passwords must contain at least 1 upper case letter, 1 lower case letter and one number OR special charracter.',
                          ),
                          r.a.createElement('hr', null),
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(
                              j.a,
                              {
                                fullWidth: !0,
                                variant: 'contained',
                                color: 'primary',
                                onClick: this.submit,
                              },
                              'SIGN UP',
                            ),
                          ),
                        ),
                      );
                    },
                  },
                ]),
                t
              );
            })(a.Component)),
          ) || U,
        V = n(204),
        K = n(203),
        q = n(101),
        Q = n.n(q),
        X = n(102),
        Y = n.n(X),
        Z = n(199),
        ee = n(200),
        te = n(201),
        ne = n(202),
        ae = n(196),
        re = n(205),
        se = n(209),
        ce = n(99),
        oe = n.n(ce);
      function ie() {
        var e = Object(g.a)(['\n  margin: 8px 0;\n  font-size: 22px;\n']);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(g.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      var le,
        pe = y.a.div(ue()),
        he = y.a.h1(ie()),
        fe =
          Object(o.b)('tasksStore')(
            (W = (function (e) {
              function t() {
                var e, n;
                Object(p.a)(this, t);
                for (
                  var a = arguments.length, r = new Array(a), s = 0;
                  s < a;
                  s++
                )
                  r[s] = arguments[s];
                return (
                  ((n = Object(f.a)(
                    this,
                    (e = Object(d.a)(t)).call.apply(e, [this].concat(r)),
                  )).deleteTask = function () {
                    n.props.tasksStore.deleteTask(n.props.id);
                  }),
                  (n.handleStatusChange = function (e) {
                    n.props.tasksStore.updateTaskStatus(
                      n.props.id,
                      e.target.value,
                    );
                  }),
                  n
                );
              }
              return (
                Object(m.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.title,
                        n = e.description;
                      return r.a.createElement(
                        pe,
                        null,
                        r.a.createElement(
                          Z.a,
                          null,
                          r.a.createElement(
                            ee.a,
                            null,
                            r.a.createElement(he, null, t),
                            n,
                          ),
                          r.a.createElement(
                            te.a,
                            { style: { padding: '14px' }, disableSpacing: !0 },
                            r.a.createElement(
                              ne.a,
                              { justify: 'space-between', container: !0 },
                              r.a.createElement(
                                ne.a,
                                { item: !0 },
                                r.a.createElement(
                                  ae.a,
                                  { style: { width: '140px' } },
                                  r.a.createElement(
                                    re.a,
                                    {
                                      value: this.props.status,
                                      onChange: this.handleStatusChange,
                                      displayEmpty: !0,
                                    },
                                    r.a.createElement(
                                      se.a,
                                      { value: 'OPEN' },
                                      'Open',
                                    ),
                                    r.a.createElement(
                                      se.a,
                                      { value: 'IN_PROGRESS' },
                                      'In Progress',
                                    ),
                                    r.a.createElement(
                                      se.a,
                                      { value: 'DONE' },
                                      'Done',
                                    ),
                                  ),
                                ),
                              ),
                              r.a.createElement(
                                ne.a,
                                { item: !0 },
                                r.a.createElement(
                                  K.a,
                                  { onClick: this.deleteTask },
                                  r.a.createElement(oe.a, { color: 'error' }),
                                ),
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  },
                ]),
                t
              );
            })(a.Component)),
          ) || W,
        de = n(210),
        me = n(100),
        ve = n.n(me),
        be = n(206),
        Oe = n(208);
      function ge() {
        var e = Object(g.a)([
          '\n  background-color: #c0cde0;\n  border-radius: 5px;\n  padding: 10px;\n',
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      function ke() {
        var e = Object(g.a)(['\n  margin-top: 20px;\n']);
        return (
          (ke = function () {
            return e;
          }),
          e
        );
      }
      var je,
        ye = y.a.div(ke()),
        Ee = y.a.div(ge()),
        we =
          Object(o.b)('tasksStore')(
            (le = (function (e) {
              function t(e) {
                var n;
                return (
                  Object(p.a)(this, t),
                  ((n = Object(f.a)(
                    this,
                    Object(d.a)(t).call(this, e),
                  )).filters$ = new be.a()),
                  (n.syncFilters = function () {
                    var e = n.state,
                      t = e.status,
                      a = e.search;
                    n.filters$.next({ status: t, search: a });
                  }),
                  (n.handleStatusFilterChange = function (e) {
                    var t = e.target.value;
                    n.setState({ status: t }, n.syncFilters);
                  }),
                  (n.handleSearchTermChange = function (e) {
                    var t = e.target.value;
                    n.setState({ search: t }, n.syncFilters);
                  }),
                  (n.state = {
                    status: e.tasksStore.filters.status,
                    search: e.tasksStore.filters.search,
                  }),
                  n.filters$.pipe(Object(Oe.a)(500)).subscribe(function (t) {
                    e.tasksStore.updateFilters(t);
                  }),
                  n
                );
              }
              return (
                Object(m.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: 'render',
                    value: function () {
                      return r.a.createElement(
                        ye,
                        null,
                        r.a.createElement(
                          ne.a,
                          { justify: 'space-between', container: !0 },
                          r.a.createElement(
                            ne.a,
                            { item: !0 },
                            r.a.createElement(
                              Ee,
                              null,
                              r.a.createElement(
                                ae.a,
                                { style: { width: '220px' } },
                                r.a.createElement(k.a, {
                                  placeholder: 'Search...',
                                  value: this.state.search,
                                  onChange: this.handleSearchTermChange,
                                  InputProps: {
                                    startAdornment: r.a.createElement(
                                      de.a,
                                      { position: 'start' },
                                      r.a.createElement(ve.a, null),
                                    ),
                                  },
                                }),
                              ),
                            ),
                          ),
                          r.a.createElement(
                            ne.a,
                            { item: !0 },
                            r.a.createElement(
                              Ee,
                              null,
                              r.a.createElement(
                                ae.a,
                                { style: { width: '220px' } },
                                r.a.createElement(
                                  re.a,
                                  {
                                    value: this.state.status,
                                    onChange: this.handleStatusFilterChange,
                                    displayEmpty: !0,
                                  },
                                  r.a.createElement(
                                    se.a,
                                    { value: '' },
                                    'No status filter',
                                  ),
                                  r.a.createElement(
                                    se.a,
                                    { value: 'OPEN' },
                                    'Open',
                                  ),
                                  r.a.createElement(
                                    se.a,
                                    { value: 'IN_PROGRESS' },
                                    'In Progress',
                                  ),
                                  r.a.createElement(
                                    se.a,
                                    { value: 'DONE' },
                                    'Done',
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  },
                ]),
                t
              );
            })(a.Component)),
          ) || le;
      function Se() {
        var e = Object(g.a)([
          '\n  margin-left: 10px;\n  \n  .signOutIcon {\n    fill: #edf4ff;\n  }\n',
        ]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(g.a)([
          '\n  color: #edf4ff;\n  text-align: center;\n  font-size: 22px;\n',
        ]);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Object(g.a)(['\n  padding-top: 20px;\n']);
        return (
          (Te = function () {
            return e;
          }),
          e
        );
      }
      function Ce() {
        var e = Object(g.a)([
          '\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n',
        ]);
        return (
          (Ce = function () {
            return e;
          }),
          e
        );
      }
      function _e() {
        var e = Object(g.a)(['\n  width: 100%;\n  color: #edf4ff;\n']);
        return (
          (_e = function () {
            return e;
          }),
          e
        );
      }
      function Pe() {
        var e = Object(g.a)([
          '\n  display: flex;\n  justify-content: center;\n  border-bottom: 3px solid #757c87;\n',
        ]);
        return (
          (Pe = function () {
            return e;
          }),
          e
        );
      }
      function Re() {
        var e = Object(g.a)([
          '\n  width: 100%;\n  max-width: 860px;\n  margin: auto;\n  padding: 20px;\n  box-sizing: border-box;\n',
        ]);
        return (
          (Re = function () {
            return e;
          }),
          e
        );
      }
      var De,
        Ae = y.a.div(Re()),
        Ue = y.a.div(Pe()),
        Ne = y.a.h1(_e()),
        Be = y.a.div(Ce()),
        Ie = y.a.div(Te()),
        Le = y.a.p(xe()),
        Me = y.a.div(Se()),
        ze =
          Object(o.b)('tasksStore', 'routerStore', 'userStore')(
            (je =
              Object(o.c)(
                (je = (function (e) {
                  function t() {
                    var e, n;
                    Object(p.a)(this, t);
                    for (
                      var a = arguments.length, s = new Array(a), c = 0;
                      c < a;
                      c++
                    )
                      s[c] = arguments[c];
                    return (
                      ((n = Object(f.a)(
                        this,
                        (e = Object(d.a)(t)).call.apply(e, [this].concat(s)),
                      )).handleSignOut = function () {
                        var e = n.props,
                          t = e.userStore,
                          a = e.tasksStore,
                          r = e.routerStore;
                        t.signout(), a.resetTasks(), r.push('/signin');
                      }),
                      (n.renderTasks = function () {
                        var e = n.props.tasksStore;
                        return e.tasks.length
                          ? e.tasks.map(function (e) {
                              return r.a.createElement(fe, {
                                key: e.id,
                                id: e.id,
                                title: e.title,
                                description: e.description,
                                status: e.status,
                              });
                            })
                          : r.a.createElement(
                              Le,
                              null,
                              'No tasks available. Create one?',
                            );
                      }),
                      n
                    );
                  }
                  return (
                    Object(m.a)(t, e),
                    Object(h.a)(t, [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          this.props.tasksStore.fetchTasks();
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var e = this;
                          return r.a.createElement(
                            Ae,
                            null,
                            r.a.createElement(
                              Ue,
                              null,
                              r.a.createElement(Ne, null, 'Get things done.'),
                              r.a.createElement(
                                Be,
                                null,
                                r.a.createElement(
                                  V.a,
                                  {
                                    variant: 'extended',
                                    onClick: function () {
                                      return e.props.routerStore.push(
                                        '/tasks/create',
                                      );
                                    },
                                  },
                                  r.a.createElement(Q.a, null),
                                  'Create Task',
                                ),
                                r.a.createElement(
                                  Me,
                                  null,
                                  r.a.createElement(
                                    K.a,
                                    { onClick: this.handleSignOut },
                                    r.a.createElement(Y.a, {
                                      className: 'signOutIcon',
                                    }),
                                  ),
                                ),
                              ),
                            ),
                            r.a.createElement(we, null),
                            r.a.createElement(Ie, null, this.renderTasks()),
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(a.Component)),
              ) || je),
          ) || je;
      function Fe() {
        var e = Object(g.a)([
          '\n  max-width: 480px;\n  width: 100%;\n  background-color: #edf4ff;\n  padding: 30px;\n  border-radius: 5px;\n',
        ]);
        return (
          (Fe = function () {
            return e;
          }),
          e
        );
      }
      function We() {
        var e = Object(g.a)([
          '\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
        ]);
        return (
          (We = function () {
            return e;
          }),
          e
        );
      }
      var He,
        Ge = y.a.div(We()),
        $e = y.a.div(Fe()),
        Je =
          Object(o.b)('tasksStore', 'routerStore')(
            (De = (function (e) {
              function t(e) {
                var n;
                return (
                  Object(p.a)(this, t),
                  ((n = Object(f.a)(
                    this,
                    Object(d.a)(t).call(this, e),
                  )).handleSubmitTask = Object(O.a)(
                    b.a.mark(function e() {
                      var t, a, r, s, c, o, i;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = n.props),
                                  (a = t.tasksStore),
                                  (r = t.routerStore),
                                  (s = n.state),
                                  (c = s.title),
                                  (o = s.description),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  a.createTask(c, o)
                                );
                              case 5:
                                r.push('/tasks'), (e.next = 12);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (i = e.t0.response.data.message),
                                  n.setState({ errorMessage: i });
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 8]],
                      );
                    }),
                  )),
                  (n.state = {
                    title: '',
                    description: '',
                    errorMessage: null,
                  }),
                  n
                );
              }
              return (
                Object(m.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: 'render',
                    value: function () {
                      var e = this;
                      return r.a.createElement(
                        Ge,
                        null,
                        r.a.createElement(
                          $e,
                          null,
                          r.a.createElement('h1', null, 'Create a new task'),
                          r.a.createElement(
                            'p',
                            null,
                            'Provide information about the task you wish to complete.',
                          ),
                          this.state.errorMessage &&
                            r.a.createElement(P, {
                              message: this.state.errorMessage,
                            }),
                          r.a.createElement(
                            ae.a,
                            { fullWidth: !0 },
                            r.a.createElement(k.a, {
                              label: 'Title',
                              placeholder: 'Title',
                              margin: 'normal',
                              variant: 'outlined',
                              onChange: function (t) {
                                return e.setState({ title: t.target.value });
                              },
                            }),
                          ),
                          r.a.createElement(
                            ae.a,
                            { fullWidth: !0 },
                            r.a.createElement(k.a, {
                              label: 'Description',
                              placeholder: 'Description',
                              multiline: !0,
                              rows: '8',
                              margin: 'normal',
                              variant: 'outlined',
                              onChange: function (t) {
                                return e.setState({
                                  description: t.target.value,
                                });
                              },
                            }),
                          ),
                          r.a.createElement(
                            j.a,
                            {
                              style: { marginTop: '10px' },
                              fullWidth: !0,
                              variant: 'contained',
                              color: 'primary',
                              onClick: this.handleSubmitTask,
                            },
                            'CREATE TASK',
                          ),
                        ),
                      );
                    },
                  },
                ]),
                t
              );
            })(a.Component)),
          ) || De,
        Ve =
          Object(o.b)('routerStore')(
            (He =
              Object(o.c)(
                (He = (function (e) {
                  function t() {
                    return (
                      Object(p.a)(this, t),
                      Object(f.a)(this, Object(d.a)(t).apply(this, arguments))
                    );
                  }
                  return (
                    Object(m.a)(t, e),
                    Object(h.a)(t, [
                      {
                        key: 'render',
                        value: function () {
                          return r.a.createElement(
                            a.Fragment,
                            null,
                            r.a.createElement(l.a, {
                              exact: !0,
                              path: '/',
                              component: L,
                            }),
                            r.a.createElement(l.a, {
                              path: '/signin/',
                              component: L,
                            }),
                            r.a.createElement(l.a, {
                              path: '/signup/',
                              component: J,
                            }),
                            r.a.createElement(l.a, {
                              exact: !0,
                              path: '/tasks',
                              component: ze,
                            }),
                            r.a.createElement(l.a, {
                              exact: !0,
                              path: '/tasks/create',
                              component: Je,
                            }),
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(a.Component)),
              ) || He),
          ) || He;
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      var Ke,
        qe,
        Qe,
        Xe,
        Ye,
        Ze = n(43),
        et = n.n(Ze),
        tt = (function () {
          function e(t) {
            Object(p.a)(this, e),
              (this.BASE_URL = Object({
                NODE_ENV: 'production',
                PUBLIC_URL: '',
              }).BASE_URL_PROD),
              (this._accessToken = null),
              (this.routerStore = t);
          }
          return (
            Object(h.a)(e, [
              {
                key: 'get',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t) {
                      var n,
                        a = this,
                        r = arguments;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n =
                                    r.length > 1 && void 0 !== r[1]
                                      ? r[1]
                                      : {}),
                                  console.log(
                                    'process.env.BASE_URL_PROD',
                                    Object({
                                      NODE_ENV: 'production',
                                      PUBLIC_URL: '',
                                    }).BASE_URL_PROD,
                                  ),
                                  Object.assign(n, this._getCommonOptions()),
                                  e.abrupt(
                                    'return',
                                    et.a
                                      .get(
                                        ''.concat(this.BASE_URL, '/').concat(t),
                                        n,
                                      )
                                      .catch(function (e) {
                                        return a._handleHttpError(e);
                                      }),
                                  )
                                );
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'post',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t) {
                      var n,
                        a,
                        r = this,
                        s = arguments;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n =
                                    s.length > 1 && void 0 !== s[1]
                                      ? s[1]
                                      : {}),
                                  (a =
                                    s.length > 2 && void 0 !== s[2]
                                      ? s[2]
                                      : {}),
                                  console.log(
                                    'process.env.BASE_URL_PROD',
                                    Object({
                                      NODE_ENV: 'production',
                                      PUBLIC_URL: '',
                                    }).BASE_URL_PROD,
                                  ),
                                  Object.assign(a, this._getCommonOptions()),
                                  e.abrupt(
                                    'return',
                                    et.a
                                      .post(
                                        ''.concat(this.BASE_URL, '/').concat(t),
                                        n,
                                        a,
                                      )
                                      .catch(function (e) {
                                        return r._handleHttpError(e);
                                      }),
                                  )
                                );
                              case 5:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'delete',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t) {
                      var n,
                        a = this,
                        r = arguments;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n =
                                    r.length > 1 && void 0 !== r[1]
                                      ? r[1]
                                      : {}),
                                  Object.assign(n, this._getCommonOptions()),
                                  e.abrupt(
                                    'return',
                                    et.a
                                      .delete(
                                        ''.concat(this.BASE_URL, '/').concat(t),
                                        n,
                                      )
                                      .catch(function (e) {
                                        return a._handleHttpError(e);
                                      }),
                                  )
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'patch',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t) {
                      var n,
                        a,
                        r = this,
                        s = arguments;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n =
                                    s.length > 1 && void 0 !== s[1]
                                      ? s[1]
                                      : {}),
                                  (a =
                                    s.length > 2 && void 0 !== s[2]
                                      ? s[2]
                                      : {}),
                                  Object.assign(a, this._getCommonOptions()),
                                  e.abrupt(
                                    'return',
                                    et.a
                                      .patch(
                                        ''.concat(this.BASE_URL, '/').concat(t),
                                        n,
                                        a,
                                      )
                                      .catch(function (e) {
                                        return r._handleHttpError(e);
                                      }),
                                  )
                                );
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: '_handleHttpError',
                value: function (e) {
                  if (401 !== e.response.data.statusCode) throw e;
                  return this._handle401();
                },
              },
              {
                key: '_handle401',
                value: function () {
                  this.routerStore.push('/signin');
                },
              },
              {
                key: '_getCommonOptions',
                value: function () {
                  var e = this.loadToken();
                  return { headers: { Authorization: 'Bearer '.concat(e) } };
                },
              },
              {
                key: 'saveToken',
                value: function (e) {
                  return (
                    (this._accessToken = e),
                    localStorage.setItem('accessToken', e)
                  );
                },
              },
              {
                key: 'loadToken',
                value: function () {
                  var e = localStorage.getItem('accessToken');
                  return (this._accessToken = e), e;
                },
              },
              {
                key: 'removeToken',
                value: function () {
                  localStorage.removeItem('accessToken');
                },
              },
              {
                key: 'accessToken',
                get: function () {
                  return this._accessToken
                    ? this._accessToken
                    : this.loadToken();
                },
              },
            ]),
            e
          );
        })(),
        nt = n(104),
        at = n.n(nt),
        rt = (function (e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(f.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'fetchTasks',
                value: function (e) {
                  var t = e.status,
                    n = e.search,
                    a = {};
                  t.length && (a.status = t), n.length && (a.search = n);
                  var r = at.a.stringify(a);
                  return this.get('tasks' + (r ? '?'.concat(r) : ''));
                },
              },
              {
                key: 'deleteTask',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t) {
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.delete('tasks/'.concat(t))
                                );
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'updateTaskStatus',
                value: function (e, t) {
                  return this.patch('tasks/'.concat(e, '/status'), {
                    status: t,
                  });
                },
              },
              {
                key: 'createTask',
                value: function (e, t) {
                  return this.post('tasks', { title: e, description: t });
                },
              },
            ]),
            t
          );
        })(tt),
        st = n(64),
        ct = n(28),
        ot = (n(94), n(12)),
        it =
          ((Ke = (function () {
            function e(t) {
              Object(p.a)(this, e),
                Object(st.a)(this, 'tasks', qe, this),
                Object(st.a)(this, 'filters', Qe, this),
                (this.tasksService = t);
            }
            return (
              Object(h.a)(e, [
                {
                  key: 'updateFilters',
                  value: function (e) {
                    var t = e.status,
                      n = e.search;
                    (this.filters.status = t),
                      (this.filters.search = n),
                      this.fetchTasks();
                  },
                },
                {
                  key: 'resetTasks',
                  value: function () {
                    this.tasks = [];
                  },
                },
                {
                  key: 'fetchTasks',
                  value: (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e() {
                        var t;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.tasksService.fetchTasks(this.filters)
                                  );
                                case 2:
                                  (t = e.sent) && (this.tasks = t.data);
                                case 4:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: 'createTask',
                  value: (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t, n) {
                        var a;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.tasksService.createTask(t, n)
                                  );
                                case 2:
                                  (a = e.sent) && this.tasks.push(a.data);
                                case 4:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: 'deleteTask',
                  value: (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t) {
                        var n;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = this.tasks.findIndex(function (e) {
                                      return e.id === t;
                                    })),
                                    (e.next = 3),
                                    this.tasksService.deleteTask(t)
                                  );
                                case 3:
                                  this.tasks.splice(n, 1);
                                case 4:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: 'updateTaskStatus',
                  value: (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t, n) {
                        var a;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (a = this.tasks.find(function (e) {
                                      return e.id === t;
                                    })),
                                    (e.next = 3),
                                    this.tasksService.updateTaskStatus(t, n)
                                  );
                                case 3:
                                  a.status = n;
                                case 4:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
              ]),
              e
            );
          })()),
          (qe = Object(ct.a)(Ke.prototype, 'tasks', [ot.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return [];
            },
          })),
          (Qe = Object(ct.a)(Ke.prototype, 'filters', [ot.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return { status: '', search: '' };
            },
          })),
          Object(ct.a)(
            Ke.prototype,
            'resetTasks',
            [ot.action],
            Object.getOwnPropertyDescriptor(Ke.prototype, 'resetTasks'),
            Ke.prototype,
          ),
          Object(ct.a)(
            Ke.prototype,
            'fetchTasks',
            [ot.action],
            Object.getOwnPropertyDescriptor(Ke.prototype, 'fetchTasks'),
            Ke.prototype,
          ),
          Object(ct.a)(
            Ke.prototype,
            'createTask',
            [ot.action],
            Object.getOwnPropertyDescriptor(Ke.prototype, 'createTask'),
            Ke.prototype,
          ),
          Object(ct.a)(
            Ke.prototype,
            'deleteTask',
            [ot.action],
            Object.getOwnPropertyDescriptor(Ke.prototype, 'deleteTask'),
            Ke.prototype,
          ),
          Object(ct.a)(
            Ke.prototype,
            'updateTaskStatus',
            [ot.action],
            Object.getOwnPropertyDescriptor(Ke.prototype, 'updateTaskStatus'),
            Ke.prototype,
          ),
          Ke),
        ut =
          ((Xe = (function () {
            function e(t) {
              Object(p.a)(this, e),
                Object(st.a)(this, 'username', Ye, this),
                (this.authService = t);
            }
            return (
              Object(h.a)(e, [
                {
                  key: 'signin',
                  value: (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t, n) {
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2), this.authService.signin(t, n)
                                  );
                                case 2:
                                  this.username = e.sent;
                                case 3:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: 'signup',
                  value: (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t, n) {
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    this.authService.signup(t, n),
                                  );
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: 'signout',
                  value: function () {
                    (this.username = null), this.authService.removeToken();
                  },
                },
              ]),
              e
            );
          })()),
          (Ye = Object(ct.a)(Xe.prototype, 'username', [ot.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return null;
            },
          })),
          Object(ct.a)(
            Xe.prototype,
            'signin',
            [ot.action],
            Object.getOwnPropertyDescriptor(Xe.prototype, 'signin'),
            Xe.prototype,
          ),
          Object(ct.a)(
            Xe.prototype,
            'signup',
            [ot.action],
            Object.getOwnPropertyDescriptor(Xe.prototype, 'signup'),
            Xe.prototype,
          ),
          Object(ct.a)(
            Xe.prototype,
            'signout',
            [ot.action],
            Object.getOwnPropertyDescriptor(Xe.prototype, 'signout'),
            Xe.prototype,
          ),
          Xe),
        lt = (function (e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(f.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'signin',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t, n) {
                      var a, r;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Object(Ze.post)(
                                    ''.concat(this.BASE_URL, '/auth/signin'),
                                    { username: t, password: n },
                                  )
                                );
                              case 2:
                                return (
                                  (a = e.sent),
                                  (r = a.data.accessToken),
                                  this.saveToken(r),
                                  e.abrupt('return', a.data.username)
                                );
                              case 6:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'signup',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t, n) {
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Object(Ze.post)(
                                    ''.concat(this.BASE_URL, '/auth/signup'),
                                    { username: t, password: n },
                                  )
                                );
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'signout',
                value: (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e() {
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.removeToken();
                              case 1:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            t
          );
        })(tt),
        pt = {},
        ht = {};
      ht.routerStore = new u.RouterStore();
      var ft = Object(i.a)(),
        dt = Object(u.syncHistoryWithStore)(ft, ht.routerStore);
      (pt.tasksService = new rt(ht.routerStore)),
        (pt.authService = new lt()),
        (ht.tasksStore = new it(pt.tasksService)),
        (ht.userStore = new ut(pt.authService));
      var mt = r.a.createElement(
        o.a,
        ht,
        r.a.createElement(l.b, { history: dt }, r.a.createElement(Ve, null)),
      );
      c.a.render(mt, document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[107, 1, 2]],
]);
//# sourceMappingURL=main.3e7b8c50.chunk.js.map
