(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    106: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.SelectContext = t.GroupContext = t.FieldContext = t.FormContext = void 0);
      var l = a(n(1)),
        o = l.default.createContext();
      t.FormContext = o;
      var r = l.default.createContext();
      t.FieldContext = r;
      var i = l.default.createContext();
      t.GroupContext = i;
      var u = l.default.createContext();
      t.SelectContext = u;
    },
    145: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(34)),
        o = a(n(1)),
        r = a(n(582));
      var i = function(e) {
        var t = (function(e) {
          return e.displayName || e.name || 'Component';
        })(e);
        e.displayName = 'Wrapper';
        var n = function(t) {
          return o.default.createElement(
            r.default,
            (0, l.default)({ component: e }, t)
          );
        };
        return (n.displayName = t), n;
      };
      t.default = i;
    },
    15: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Form', {
          enumerable: !0,
          get: function() {
            return o.default;
          }
        }),
        Object.defineProperty(t, 'Scope', {
          enumerable: !0,
          get: function() {
            return r.default;
          }
        }),
        Object.defineProperty(t, 'Field', {
          enumerable: !0,
          get: function() {
            return i.default;
          }
        }),
        Object.defineProperty(t, 'withFormApi', {
          enumerable: !0,
          get: function() {
            return u.default;
          }
        }),
        Object.defineProperty(t, 'withFormState', {
          enumerable: !0,
          get: function() {
            return d.default;
          }
        }),
        Object.defineProperty(t, 'withFieldApi', {
          enumerable: !0,
          get: function() {
            return s.withFieldApi;
          }
        }),
        Object.defineProperty(t, 'withFieldState', {
          enumerable: !0,
          get: function() {
            return s.withFieldState;
          }
        }),
        Object.defineProperty(t, 'withRadioGroup', {
          enumerable: !0,
          get: function() {
            return f.default;
          }
        }),
        Object.defineProperty(t, 'asField', {
          enumerable: !0,
          get: function() {
            return c.default;
          }
        }),
        Object.defineProperty(t, 'Text', {
          enumerable: !0,
          get: function() {
            return m.default;
          }
        }),
        Object.defineProperty(t, 'BasicText', {
          enumerable: !0,
          get: function() {
            return m.BasicText;
          }
        }),
        Object.defineProperty(t, 'Radio', {
          enumerable: !0,
          get: function() {
            return p.default;
          }
        }),
        Object.defineProperty(t, 'BasicRadio', {
          enumerable: !0,
          get: function() {
            return p.BasicRadio;
          }
        }),
        Object.defineProperty(t, 'TextArea', {
          enumerable: !0,
          get: function() {
            return g.default;
          }
        }),
        Object.defineProperty(t, 'BasicTextArea', {
          enumerable: !0,
          get: function() {
            return g.BasicTextArea;
          }
        }),
        Object.defineProperty(t, 'Select', {
          enumerable: !0,
          get: function() {
            return h.default;
          }
        }),
        Object.defineProperty(t, 'BasicSelect', {
          enumerable: !0,
          get: function() {
            return h.BasicSelect;
          }
        }),
        Object.defineProperty(t, 'Option', {
          enumerable: !0,
          get: function() {
            return b.default;
          }
        }),
        Object.defineProperty(t, 'Checkbox', {
          enumerable: !0,
          get: function() {
            return v.default;
          }
        }),
        Object.defineProperty(t, 'BasicCheckbox', {
          enumerable: !0,
          get: function() {
            return v.BasicCheckbox;
          }
        }),
        Object.defineProperty(t, 'RadioGroup', {
          enumerable: !0,
          get: function() {
            return y.default;
          }
        }),
        Object.defineProperty(t, 'BasicRadioGroup', {
          enumerable: !0,
          get: function() {
            return y.BasicRadioGroup;
          }
        });
      var o = l(n(890)),
        r = l(n(881)),
        i = l(n(582)),
        u = l(n(282)),
        d = l(n(584)),
        s = n(581),
        f = l(n(580)),
        c = l(n(145)),
        m = a(n(879)),
        p = a(n(878)),
        g = a(n(877)),
        h = a(n(876)),
        b = l(n(869)),
        v = a(n(868)),
        y = a(n(867));
    },
    16: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(1)),
        o = (0, n(588).withDocs)({
          PreviewComponent: function(e) {
            var t = e.children;
            return l.default.createElement(
              'div',
              { style: { marginTop: '2rem', marginBottom: '2rem' } },
              t
            );
          },
          FooterComponent: function(e) {
            var t = e.children;
            return l.default.createElement('div', null, t);
          }
        });
      t.default = o;
    },
    17: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = l(n(49)),
        r = l(n(38)),
        i = l(n(37)),
        u = l(n(48)),
        d = l(n(47)),
        s = l(n(46)),
        f = a(n(1)),
        c = n(903),
        m = (function(e) {
          function t() {
            return (
              (0, r.default)(this, t),
              (0, u.default)(this, (0, d.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, s.default)(t, e),
            (0, i.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.language,
                    a = (0, o.default)(e, ['children', 'language']);
                  return f.default.createElement(
                    'pre',
                    a,
                    f.default.createElement(c.PrismCode, { className: n }, t)
                  );
                }
              }
            ]),
            t
          );
        })(f.Component);
      t.default = m;
    },
    228: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = l(n(38)),
        r = l(n(37)),
        i = l(n(48)),
        u = l(n(47)),
        d = l(n(46)),
        s = l(n(157)),
        f = l(n(284)),
        c = a(n(1)),
        m = (function(e) {
          function t(e) {
            var n;
            return (
              (0, o.default)(this, t),
              (n = (0, i.default)(this, (0, u.default)(t).call(this, e))),
              (0, f.default)(
                (0, s.default)((0, s.default)(n)),
                'open',
                function() {
                  n.setState({ open: !0 });
                }
              ),
              (0, f.default)(
                (0, s.default)((0, s.default)(n)),
                'close',
                function() {
                  n.setState({ open: !1 });
                }
              ),
              (n.state = { open: !1 }),
              n
            );
          }
          return (
            (0, d.default)(t, e),
            (0, r.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.getControl &&
                    this.props.getControl(this.controller);
                }
              },
              {
                key: 'render',
                value: function() {
                  return c.default.createElement(
                    c.default.Fragment,
                    null,
                    this.state.open
                      ? c.default.createElement(
                          c.default.Fragment,
                          null,
                          c.default.createElement('div', {
                            style: {
                              position: 'fixed',
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              backgroundColor: 'rgba(0,0,0,0.7)'
                            }
                          }),
                          c.default.createElement(
                            'div',
                            {
                              style: {
                                minHeight: '50px',
                                minWidth: '400px',
                                position: 'fixed',
                                paddingBottom: '2.5rem',
                                top: '50%',
                                left: '50%',
                                backgroundColor: 'white',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '6px',
                                boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                display: 'flex',
                                flexDirection: 'column'
                              }
                            },
                            c.default.createElement(
                              'div',
                              {
                                style: {
                                  flex: 1,
                                  textAlign: 'right',
                                  color: 'rgb(167, 26, 21)',
                                  fontSize: '1.8rem'
                                }
                              },
                              c.default.createElement(
                                'span',
                                {
                                  style: {
                                    marginRight: '1rem',
                                    cursor: 'pointer'
                                  },
                                  onClick: this.close
                                },
                                c.default.createElement('strong', null, 'x')
                              )
                            ),
                            c.default.createElement(
                              'div',
                              { style: { flex: 4, textAlign: 'center' } },
                              this.props.children
                            )
                          )
                        )
                      : null
                  );
                }
              },
              {
                key: 'controller',
                get: function() {
                  return { open: this.open, close: this.close };
                }
              }
            ]),
            t
          );
        })(c.Component);
      t.default = m;
    },
    282: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(34)),
        o = a(n(1)),
        r = n(106),
        i = function(e) {
          return o.default.forwardRef(function(t, n) {
            return o.default.createElement(
              r.FormContext.Consumer,
              null,
              function(a) {
                var r = a.formApi;
                return o.default.createElement(
                  e,
                  (0, l.default)({ formApi: r, ref: n }, t)
                );
              }
            );
          });
        };
      t.default = i;
    },
    580: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(34)),
        o = a(n(1)),
        r = n(106),
        i = function(e) {
          return o.default.forwardRef(function(t, n) {
            return o.default.createElement(
              r.GroupContext.Consumer,
              null,
              function(a) {
                var r = a.radioGroupApi,
                  i = a.radioGroupState;
                return o.default.createElement(
                  e,
                  (0, l.default)(
                    { radioGroupApi: r, radioGroupState: i, ref: n },
                    t
                  )
                );
              }
            );
          });
        };
      t.default = i;
    },
    581: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.bindToField = t.withFieldState = t.withFieldApi = void 0);
      var l = a(n(38)),
        o = a(n(37)),
        r = a(n(48)),
        i = a(n(47)),
        u = a(n(46)),
        d = a(n(157)),
        s = a(n(34)),
        f = a(n(49)),
        c = a(n(1)),
        m = a(n(282)),
        p = a(n(583)),
        g = a(n(880)),
        h = function(e, t) {
          return {
            getValue: function() {
              return e.getValue(t);
            },
            setValue: function(n) {
              return e.setValue(t, n);
            },
            getTouched: function() {
              return e.getTouched(t);
            },
            setTouched: function(n) {
              return e.setTouched(t, n);
            },
            getError: function() {
              return e.getError(t);
            },
            setError: function(n) {
              return e.setError(t, n);
            },
            getAsyncError: function() {
              return e.getAsyncError(t);
            }
          };
        },
        b = function(e, t) {
          return {
            value: e.getValue(t),
            touched: e.getTouched(t),
            error: e.getError(t),
            asyncError: e.getAsyncError(t)
          };
        };
      t.withFieldApi = function(e) {
        return function(t) {
          return (0, m.default)(function(n) {
            var a = n.formApi,
              l = (0, f.default)(n, ['formApi']);
            return c.default.createElement(
              t,
              (0, s.default)({ fieldApi: h(a, e) }, l)
            );
          });
        };
      };
      t.withFieldState = function(e) {
        return function(t) {
          return (0, m.default)(function(n) {
            var a = n.formApi,
              l = (0, f.default)(n, ['formApi']);
            return c.default.createElement(
              t,
              (0, s.default)({ fieldState: b(a, e) }, l)
            );
          });
        };
      };
      t.bindToField = function(e) {
        return (0, p.default)(
          (0, m.default)(
            (function(t) {
              function n(e) {
                var t;
                (0, l.default)(this, n),
                  (t = (0, r.default)(this, (0, i.default)(n).call(this, e)));
                var a = e.formApi,
                  o = e.controller,
                  u = e.field,
                  s = e.mask,
                  f = e.validate,
                  c = e.onValueChange,
                  m = e.asyncValidate,
                  p = e.asyncValidateOnBlur,
                  v = e.validateOnBlur,
                  y = e.validateOnChange,
                  x = e.initialValue,
                  F = e.validateOnMount,
                  q = e.notify;
                (t.state = b(a, u)), (t.fieldApi = h(a, u));
                var w = function(e) {
                    e === a.getFullField(u) && t.setState(b(a, u));
                  },
                  E = function() {
                    t.setState(b(a, u));
                  };
                return (
                  (t.register = function() {
                    o.on('field', w),
                      o.on('update', E),
                      (t.fieldController = new g.default(
                        a.getFullField(u),
                        t.fieldApi,
                        {
                          validateOnBlur: v,
                          validateOnChange: y,
                          validate: f,
                          onValueChange: c,
                          asyncValidate: m,
                          asyncValidateOnBlur: p,
                          initialValue: x,
                          validateOnMount: F,
                          notify: q,
                          mask: s
                        }
                      )),
                      o.register(a.getFullField(u), t.fieldController);
                  }),
                  (t.deregister = function() {
                    o.removeListener('field', w),
                      o.removeListener('update', E),
                      o.deregister(a.getFullField(u));
                  }),
                  (t.register = t.register.bind(
                    (0, d.default)((0, d.default)(t))
                  )),
                  (t.deregister = t.deregister.bind(
                    (0, d.default)((0, d.default)(t))
                  )),
                  t
                );
              }
              return (
                (0, u.default)(n, t),
                (0, o.default)(n, [
                  {
                    key: 'componentDidUpdate',
                    value: function(e) {
                      var t = this.props,
                        n = t.validateOnBlur,
                        a = t.validateOnChange,
                        l = t.validate,
                        o = t.onValueChange,
                        r = t.asyncValidate,
                        i = t.asyncValidateOnBlur,
                        u = t.initialValue,
                        d = t.validateOnMount,
                        s = t.notify,
                        f = t.mask;
                      this.fieldController.updateConfig({
                        validateOnBlur: n,
                        validateOnChange: a,
                        validate: l,
                        onValueChange: o,
                        asyncValidate: r,
                        asyncValidateOnBlur: i,
                        initialValue: u,
                        validateOnMount: d,
                        notify: s,
                        mask: f
                      });
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      var t = this.props,
                        n = (t.mask,
                        t.formApi,
                        t.formState,
                        t.controller,
                        t.validate,
                        t.onValueChange,
                        t.asyncValidate,
                        t.asyncValidateOnBlur,
                        t.validateOnBlur,
                        t.validateOnMount,
                        t.validateOnChange,
                        (0, f.default)(t, [
                          'mask',
                          'formApi',
                          'formState',
                          'controller',
                          'validate',
                          'onValueChange',
                          'asyncValidate',
                          'asyncValidateOnBlur',
                          'validateOnBlur',
                          'validateOnMount',
                          'validateOnChange'
                        ]));
                      return c.default.createElement(
                        e,
                        (0, s.default)(
                          {
                            register: this.register,
                            deregister: this.deregister,
                            fieldApi: this.fieldApi,
                            fieldState: this.state
                          },
                          n
                        )
                      );
                    }
                  }
                ]),
                n
              );
            })(c.default.PureComponent)
          )
        );
      };
    },
    582: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = l(n(283)),
        r = l(n(49)),
        i = l(n(38)),
        u = l(n(37)),
        d = l(n(48)),
        s = l(n(47)),
        f = l(n(46)),
        c = a(n(1)),
        m = n(581),
        p = (function(e) {
          function t(e) {
            var n;
            return (
              (0, i.default)(this, t),
              ((n = (0, d.default)(
                this,
                (0, s.default)(t).call(this, e)
              )).me = c.default.createRef()),
              n
            );
          }
          return (
            (0, f.default)(t, e),
            (0, u.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.register();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.props.deregister();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  var e = this;
                  this.props.debug &&
                    this.me &&
                    ((this.me.current.style.backgroundColor = 'red'),
                    setTimeout(function() {
                      e.me.current.style.backgroundColor = 'white';
                    }, 500));
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.fieldApi,
                    n = e.fieldState,
                    a = e.children,
                    l = e.component,
                    i = e.render,
                    u = (e.register, e.deregister, e.forwardedRef),
                    d = e.debug,
                    s = (0, r.default)(e, [
                      'fieldApi',
                      'fieldState',
                      'children',
                      'component',
                      'render',
                      'register',
                      'deregister',
                      'forwardedRef',
                      'debug'
                    ]),
                    f = (0, o.default)(
                      {
                        fieldApi: t,
                        fieldState: n,
                        forwardedRef: d ? this.me : u
                      },
                      s
                    );
                  return l
                    ? c.default.createElement(l, f, a)
                    : i
                      ? i(f)
                      : 'function' == typeof a
                        ? a(f)
                        : a;
                }
              }
            ]),
            t
          );
        })(c.PureComponent),
        g = (0, m.bindToField)(p);
      t.default = g;
    },
    583: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(34)),
        o = a(n(1)),
        r = n(106),
        i = function(e) {
          return o.default.forwardRef(function(t, n) {
            return o.default.createElement(
              r.FormContext.Consumer,
              null,
              function(a) {
                var r = a.controller;
                return o.default.createElement(
                  e,
                  (0, l.default)({ controller: r, ref: n }, t)
                );
              }
            );
          });
        };
      t.default = i;
    },
    584: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(34)),
        o = a(n(1)),
        r = n(106),
        i = function(e) {
          return o.default.forwardRef(function(t, n) {
            return o.default.createElement(
              r.FormContext.Consumer,
              null,
              function(a) {
                var r = a.formState;
                return o.default.createElement(
                  e,
                  (0, l.default)({ formState: r, ref: n }, t)
                );
              }
            );
          });
        };
      t.default = i;
    },
    801: function(e, t) {
      e.exports =
        '<h1 id="with-field-state">With Field State</h1>\n<p>The <code>withFieldState</code> HOC will allow you to gain access to a fields state.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text, withFieldState } from &#39;informed&#39;;\n\nconst SomeComponent = props =&gt; (\n &lt;pre&gt;\n   &lt;code&gt;\n     {JSON.stringify(props.fieldState, null, 2)}\n   &lt;/code&gt;\n &lt;/pre&gt;\n);\n\nconst ComponentWithFieldState = withFieldState(&#39;name&#39;)(SomeComponent);\n\nconst WithFieldState = () =&gt; (\n  &lt;Form id=&quot;withFieldState-form&quot;&gt;\n    &lt;label htmlFor=&quot;withFieldState-name&quot;&gt;Name:&lt;/label&gt;\n    &lt;Text field=&quot;name&quot; id=&quot;withFieldState-name&quot; /&gt;\n    &lt;button type=&quot;submit&quot;&gt;\n      Submit\n    &lt;/button&gt;\n    &lt;h5&gt;Component with fieldState:&lt;/h5&gt;\n    &lt;ComponentWithFieldState /&gt;\n  &lt;/Form&gt;</code></pre>\n';
    },
    802: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(801)),
        u = n(15),
        d = (0, u.withFieldState)('name')(function(e) {
          return o.default.createElement(
            'pre',
            null,
            o.default.createElement(
              'code',
              null,
              (0, l.default)(e.fieldState, null, 2)
            )
          );
        }),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            u.Form,
            { id: 'withFieldState-form' },
            o.default.createElement(
              'label',
              { htmlFor: 'withFieldState-name' },
              'Name:'
            ),
            o.default.createElement(u.Text, {
              field: 'name',
              id: 'withFieldState-name'
            }),
            o.default.createElement('button', { type: 'submit' }, 'Submit'),
            o.default.createElement('h5', null, 'Component with fieldState:'),
            o.default.createElement(d, null)
          );
        });
      t.default = s;
    },
    803: function(e, t) {
      e.exports =
        '<h1 id="with-field-api">With Field Api</h1>\n<p>The <code>withFieldApi</code> HOC will allow you to gain access to a fields api.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text, withFieldApi } from &#39;informed&#39;;\n\nconst SomeComponent = props =&gt; (\n  &lt;pre&gt;\n    &lt;code&gt;Value: {JSON.stringify(props.fieldApi.getValue(), null, 2)}&lt;/code&gt;\n  &lt;/pre&gt;\n);\n\nconst ComponentWithFieldApi = withFieldApi(&#39;name&#39;)(SomeComponent);\n\n&lt;Form id=&quot;withFieldApi-form&quot;&gt;\n  &lt;label htmlFor=&quot;withFieldApi-name&quot;&gt;Name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;withFieldApi-name&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  &lt;h5&gt;Component with fieldApi:&lt;/h5&gt;\n  &lt;ComponentWithFieldApi /&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    804: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(803)),
        u = n(15),
        d = (0, u.withFieldApi)('name')(function(e) {
          return o.default.createElement(
            'pre',
            null,
            o.default.createElement(
              'code',
              null,
              'Value: ',
              (0, l.default)(e.fieldApi.getValue(), null, 2)
            )
          );
        }),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            u.Form,
            { id: 'withFieldApi-form' },
            o.default.createElement(
              'label',
              { htmlFor: 'withFieldApi-name' },
              'Name:'
            ),
            o.default.createElement(u.Text, {
              field: 'name',
              id: 'withFieldApi-name'
            }),
            o.default.createElement('button', { type: 'submit' }, 'Submit'),
            o.default.createElement('h5', null, 'Component with fieldApi:'),
            o.default.createElement(d, null)
          );
        });
      t.default = s;
    },
    805: function(e, t) {
      e.exports =
        '<h1 id="with-form-state">With Form State</h1>\n<p>The <code>withFormState</code> HOC will allow you to gain access to the formState.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text, withFormState } from &#39;informed&#39;;\n\nconst SomeComponent = props =&gt; (\n  &lt;pre&gt;\n    &lt;code&gt;{JSON.stringify(props.formState, null, 2)}&lt;/code&gt;\n  &lt;/pre&gt;\n);\n\nconst ComponentWithFormState = withFormState(SomeComponent);\n\n&lt;Form id=&quot;withFormState-form&quot;&gt;\n  &lt;label htmlFor=&quot;withFormState-name&quot;&gt;Name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;withFormState-name&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  &lt;h5&gt;Component with formState:&lt;/h5&gt;\n  &lt;ComponentWithFormState /&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    806: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(805)),
        u = (a(n(17)), n(15)),
        d = (0, u.withFormState)(function(e) {
          return o.default.createElement(
            'pre',
            null,
            o.default.createElement(
              'code',
              null,
              (0, l.default)(e.formState, null, 2)
            )
          );
        }),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            u.Form,
            { id: 'withFormState-form' },
            o.default.createElement(
              'label',
              { htmlFor: 'withFormState-name' },
              'Name:'
            ),
            o.default.createElement(u.Text, {
              field: 'name',
              id: 'withFormState-name'
            }),
            o.default.createElement('button', { type: 'submit' }, 'Submit'),
            o.default.createElement('h5', null, 'Component with formState:'),
            o.default.createElement(d, null)
          );
        });
      t.default = s;
    },
    807: function(e, t) {
      e.exports =
        '<h1 id="with-form-api">With Form Api</h1>\n<p>The <code>withFormApi</code> HOC will allow you to gain access to the formApi.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text, withFormApi } from &#39;informed&#39;;\n\nconst SomeComponent = props =&gt; (\n  &lt;pre&gt;\n    &lt;code&gt;{JSON.stringify(props.formApi.getState(), null, 2)}&lt;/code&gt;\n  &lt;/pre&gt;\n);\n\nconst ComponentWithFormApi = withFormApi(SomeComponent);\n\n&lt;Form id=&quot;array-form&quot;&gt;\n  &lt;label htmlFor=&quot;withFormApi-name&quot;&gt;Name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;withFormApi-name&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  &lt;h5&gt;Component with formApi:&lt;/h5&gt;\n  &lt;ComponentWithFormApi /&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    808: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(807)),
        u = (a(n(17)), n(15)),
        d = (0, u.withFormApi)(function(e) {
          return o.default.createElement(
            'pre',
            null,
            o.default.createElement(
              'code',
              null,
              (0, l.default)(e.formApi.getState(), null, 2)
            )
          );
        }),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            u.Form,
            { id: 'withFormApi-form' },
            function(e) {
              return (
                e.formState,
                o.default.createElement(
                  'div',
                  null,
                  o.default.createElement(
                    'label',
                    { htmlFor: 'withFormApi-name' },
                    'Name:'
                  ),
                  o.default.createElement(u.Text, {
                    field: 'name',
                    id: 'withFormApi-name'
                  }),
                  o.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  o.default.createElement(
                    'h5',
                    null,
                    'Component with formApi:'
                  ),
                  o.default.createElement(d, null)
                )
              );
            }
          );
        });
      t.default = s;
    },
    809: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'WithFormApi', {
          enumerable: !0,
          get: function() {
            return l.default;
          }
        }),
        Object.defineProperty(t, 'WithFormState', {
          enumerable: !0,
          get: function() {
            return o.default;
          }
        }),
        Object.defineProperty(t, 'WithFieldApi', {
          enumerable: !0,
          get: function() {
            return r.default;
          }
        }),
        Object.defineProperty(t, 'WithFieldState', {
          enumerable: !0,
          get: function() {
            return i.default;
          }
        });
      var l = a(n(808)),
        o = a(n(806)),
        r = a(n(804)),
        i = a(n(802));
    },
    810: function(e, t) {
      e.exports =
        '<h1 id="array-of-scopes">Array of scopes</h1>\n<p>Scopes can also be associated with an array. Here is an example where you can input two friends.\nwhere a friend consists of a first and last name.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text, Scope } from &#39;informed&#39;;\n\n&lt;Form id=&quot;array-form&quot;&gt;\n  &lt;h5&gt;Friend1&lt;/h5&gt;\n  &lt;Scope scope=&quot;friends[0]&quot;&gt;\n    &lt;label htmlFor=&quot;friend-1-firstname&quot;&gt;Firstname&lt;/label&gt;\n    &lt;Text field=&quot;firstname&quot; id=&quot;friend-1-firstname&quot; /&gt;\n    &lt;label htmlFor=&quot;friend-1-lastname&quot;&gt;Lastname&lt;/label&gt;\n    &lt;Text field=&quot;lastname&quot; id=&quot;friend-1-lastname&quot; /&gt;\n  &lt;/Scope&gt;\n  &lt;h5&gt;Friend2&lt;/h5&gt;\n  &lt;Scope scope=&quot;friends[1]&quot;&gt;\n    &lt;label htmlFor=&quot;friend-2-firstname&quot;&gt;Firstname&lt;/label&gt;\n    &lt;Text field=&quot;firstname&quot; id=&quot;friend-2-firstname&quot; /&gt;\n    &lt;label htmlFor=&quot;friend-2-lastname&quot;&gt;Lastname&lt;/label&gt;\n    &lt;Text field=&quot;lastname&quot; id=&quot;friend-2-lastname&quot; /&gt;\n  &lt;/Scope&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    811: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(810)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            d.Form,
            { id: 'scope-array-form' },
            function(e) {
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement('h5', null, 'Friend1'),
                o.default.createElement(
                  d.Scope,
                  { scope: 'friends[0]' },
                  o.default.createElement(
                    'label',
                    { htmlFor: 'friend-1-firstname' },
                    'Firstname'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'firstname',
                    id: 'friend-1-firstname'
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'friend-1-lastname' },
                    'Lastname'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'lastname',
                    id: 'friend-1-lastname'
                  })
                ),
                o.default.createElement('h5', null, 'Friend2'),
                o.default.createElement(
                  d.Scope,
                  { scope: 'friends[1]' },
                  o.default.createElement(
                    'label',
                    { htmlFor: 'friend-2-firstname' },
                    'Firstname'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'firstname',
                    id: 'friend-2-firstname'
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'friend-2-lastname' },
                    'Lastname'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'lastname',
                    id: 'friend-2-lastname'
                  })
                ),
                o.default.createElement('button', { type: 'submit' }, 'Submit'),
                o.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            }
          );
        });
      t.default = s;
    },
    812: function(e, t) {
      e.exports =
        '<h1 id="array-of-fields">Array of fields</h1>\n<p>Fields can also be associated with an array. Here is an example where you can input three friends.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\n&lt;Form id=&quot;array-form&quot;&gt;\n  &lt;label htmlFor=&quot;array-friend-1&quot;&gt;Friend1&lt;/label&gt;\n  &lt;Text field=&quot;friends[0]&quot; id=&quot;array-friend-1&quot; /&gt;\n  &lt;label htmlFor=&quot;array-friend-2&quot;&gt;Friend2&lt;/label&gt;\n  &lt;Text field=&quot;friends[1]&quot; id=&quot;array-friend-2&quot; /&gt;\n  &lt;label htmlFor=&quot;array-friend-3&quot;&gt;Friend3&lt;/label&gt;\n  &lt;Text field=&quot;friends[2]&quot; id=&quot;array-friend-3&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    813: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(812)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(d.Form, { id: 'array-form' }, function(
            e
          ) {
            var t = e.formState;
            return o.default.createElement(
              'div',
              null,
              o.default.createElement(
                'label',
                { htmlFor: 'array-friend-1' },
                'Friend1'
              ),
              o.default.createElement(d.Text, {
                field: 'friends[0]',
                id: 'array-friend-1'
              }),
              o.default.createElement(
                'label',
                { htmlFor: 'array-friend-2' },
                'Friend2'
              ),
              o.default.createElement(d.Text, {
                field: 'friends[1]',
                id: 'array-friend-2'
              }),
              o.default.createElement(
                'label',
                { htmlFor: 'array-friend-3' },
                'Friend3'
              ),
              o.default.createElement(d.Text, {
                field: 'friends[2]',
                id: 'array-friend-3'
              }),
              o.default.createElement('button', { type: 'submit' }, 'Submit'),
              o.default.createElement(
                u.default,
                { language: 'language-js' },
                (0, l.default)(t.values, null, 2)
              )
            );
          });
        });
      t.default = s;
    },
    814: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ArrayOfFields', {
          enumerable: !0,
          get: function() {
            return l.default;
          }
        }),
        Object.defineProperty(t, 'ArrayOfScopes', {
          enumerable: !0,
          get: function() {
            return o.default;
          }
        });
      var l = a(n(813)),
        o = a(n(811));
    },
    815: function(e, t) {
      e.exports =
        '<h1 id="intro">Intro</h1>\n<p>Informed comes with some basic default inputs. All inputs are built utilizing the <code>asField</code> HOC, and therefore have access to all the properties of an informed&#39;s field. This design allows you to define your very own Input types if the defaults don&#39;t suite your needs! For additional information on custom Inputs, see the custom input section. If you are just getting started, or don&#39;t care to create your own custom inputs, simply take a look at the included input types.</p>\n<h2 id="input-props">Input Props</h2>\n<p>Below are all the input props that <code>informed</code>&#39;s inputs accept.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Required</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>field</td>\n<td>string</td>\n<td>YES</td>\n<td>Every input must have a field. This is how the form manages the state of this input. See the field syntax section below for additional details on what you can pass in for field.</td>\n</tr>\n<tr>\n<td>initialValue</td>\n<td>string OR num</td>\n<td>NO</td>\n<td>An initial value for that field.</td>\n</tr>\n<tr>\n<td>validate</td>\n<td>func</td>\n<td>NO</td>\n<td>Function that gets called when form performs validation. Function accepts the value as a parameter and must return either an error string or null. By default it only gets called onSubmit. See Validation section for additional details.</td>\n</tr>\n<tr>\n<td>validateOnBlur</td>\n<td>bool</td>\n<td>NO</td>\n<td>Tells field to perform validation onBlur. By default it only validates onSubmit.</td>\n</tr>\n<tr>\n<td>validateOnChange</td>\n<td>bool</td>\n<td>NO</td>\n<td>Tells field to perform validation onChange. By default it only validates onSubmit.</td>\n</tr>\n<tr>\n<td>validateOnMount</td>\n<td>bool</td>\n<td>NO</td>\n<td>Tells field to perform validation onMount.</td>\n</tr>\n<tr>\n<td>asyncValidate</td>\n<td>func</td>\n<td>NO</td>\n<td>Function that gets called when form performs async validation. Function accepts the value as a parameter and must return either an error string or null ( you would typically return a promise from this function that resolves an error string or null ). By default it only gets called onSubmit. See Validation section for additional details.</td>\n</tr>\n<tr>\n<td>asyncValidateOnBlur</td>\n<td>bool</td>\n<td>NO</td>\n<td>Tells field to perform async validation onBlur. By default it only validates onSubmit.</td>\n</tr>\n<tr>\n<td>mask</td>\n<td>func</td>\n<td>NO</td>\n<td>Function that will mask values when entered. Example <code>value =&gt; value + &#39;!!!&#39;</code> or <code>value =&gt; value.trim()</code></td>\n</tr>\n<tr>\n<td>onValueChange</td>\n<td>func</td>\n<td>NO</td>\n<td>Function that will get called when this fields value changes. Function takes the new value as a parameter.</td>\n</tr>\n<tr>\n<td><code>&lt;input&gt;</code> props</td>\n<td>html-5</td>\n<td>NO</td>\n<td>All inputs can accept any props that a native html input, select, textarea, etc. can accept. For example, if you want to disable a text input, you would simply pass <code>disabled</code>.</td>\n</tr>\n</tbody></table>\n<h2 id="field-syntax">Field Syntax</h2>\n<p>Every input in <code>informed</code> needs an associated field name. In its simplest form, field names are just strings. However, sometimes you may have some complex forms that require special ways of organizing your fields, this is where the special syntax comes in.</p>\n<p>Fields can be simple strings, strings that contain &quot;.&quot;, and strings that contain &quot;[ ]&quot;, much like how you access and write to objects and arrays in javascript. Below are some examples of field names and what they resolve to in the forms values object.</p>\n<table>\n<thead>\n<tr>\n<th>Field</th>\n<th>Resolution</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>&quot;username&quot;</code></td>\n<td><code>values.username</code></td>\n</tr>\n<tr>\n<td><code>&quot;friends[0]&quot;</code></td>\n<td><code>values.friends[0]</code></td>\n</tr>\n<tr>\n<td><code>&quot;siblings.1&quot;</code></td>\n<td><code>values.siblings.1</code></td>\n</tr>\n<tr>\n<td><code>&quot;siblings[&#39;2&#39;]&quot;</code></td>\n<td><code>values.siblings.2</code></td>\n</tr>\n<tr>\n<td><code>&quot;parents[0].name&quot;</code></td>\n<td><code>values.parents[0].name</code></td>\n</tr>\n<tr>\n<td><code>&quot;parents[1][&#39;name&#39;]&quot;</code></td>\n<td><code>values.parents[1].name</code></td>\n</tr>\n</tbody></table>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\n&lt;Form id=&quot;syntax-form&quot;&gt;\n  &lt;label htmlFor=&quot;syntax-username&quot;&gt;Username:&lt;/label&gt;\n  &lt;Text field=&quot;username&quot; id=&quot;syntax-username&quot; /&gt;\n  &lt;label htmlFor=&quot;syntax-friends[0]&quot;&gt;Friend[0]:&lt;/label&gt;\n  &lt;Text field=&quot;friends[0]&quot; id=&quot;syntax-friends[0]&quot; /&gt;\n  &lt;label htmlFor=&quot;syntax-siblings.1&quot;&gt;Siblings.1:&lt;/label&gt;\n  &lt;Text field=&quot;siblings.1&quot; id=&quot;syntax-siblings.1&quot; /&gt;\n  &lt;label htmlFor=&quot;syntax-siblings[&#39;2&#39;]&quot;&gt;Siblings[&#39;2&#39;]&lt;/label&gt;\n  &lt;Text field=&quot;siblings[&#39;2&#39;]&quot; id=&quot;syntax-siblings[&#39;2&#39;]&quot; /&gt;\n  &lt;label htmlFor=&quot;syntax-parents[0].name&quot;&gt;Parents[0].name:&lt;/label&gt;\n  &lt;Text field=&quot;parents[0].name&quot; id=&quot;syntax-parents[0].name&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    816: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(815)),
        i = a(n(16)),
        u = a(n(17)),
        d = n(15),
        s = (0, i.default)(r.default, function() {
          return o.default.createElement(
            d.Form,
            { id: 'syntax-form' },
            function(e) {
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'label',
                  { htmlFor: 'syntax-username' },
                  'Username:'
                ),
                o.default.createElement(d.Text, {
                  field: 'username',
                  id: 'syntax-username'
                }),
                o.default.createElement(
                  'label',
                  { htmlFor: 'syntax-friends[0]' },
                  'Friend[0]:'
                ),
                o.default.createElement(d.Text, {
                  field: 'friends[0]',
                  id: 'syntax-friends[0]'
                }),
                o.default.createElement(
                  'label',
                  { htmlFor: 'syntax-siblings.1' },
                  'Siblings.1:'
                ),
                o.default.createElement(d.Text, {
                  field: 'siblings.1',
                  id: 'syntax-siblings.1'
                }),
                o.default.createElement(
                  'label',
                  { htmlFor: "syntax-siblings['2']" },
                  "Siblings['2']"
                ),
                o.default.createElement(d.Text, {
                  field: "siblings['2']",
                  id: "syntax-siblings['2']"
                }),
                o.default.createElement(
                  'label',
                  { htmlFor: 'syntax-parents[0].name' },
                  'Parents[0].name:'
                ),
                o.default.createElement(d.Text, {
                  field: 'parents[0].name',
                  id: 'syntax-parents[0].name'
                }),
                o.default.createElement('button', { type: 'submit' }, 'Submit'),
                o.default.createElement('label', null, 'Values:'),
                o.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            }
          );
        });
      t.default = s;
    },
    817: function(e, t) {
      e.exports =
        '<h1 id="multiselect-input">MultiSelect Input</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Select, Option } from &#39;informed&#39;;\n\n&lt;Form id=&quot;text-form&quot;&gt;\n  &lt;label htmlFor=&quot;select-colors&quot;&gt;Colors:&lt;/label&gt;\n  &lt;Select\n    field=&quot;status&quot;\n    id=&quot;select-colors&quot;\n    multiple\n    style={{ height: &#39;100px&#39;, width: &#39;200px&#39; }}&gt;\n    &lt;Option value=&quot;red&quot;&gt;Red&lt;/Option&gt;\n    &lt;Option value=&quot;green&quot;&gt;Green&lt;/Option&gt;\n    &lt;Option value=&quot;blue&quot;&gt;Blue&lt;/Option&gt;\n    &lt;Option value=&quot;yellow&quot;&gt;Yellow&lt;/Option&gt;\n    &lt;Option value=&quot;orange&quot;&gt;Orange&lt;/Option&gt;\n    &lt;Option value=&quot;purple&quot;&gt;Purple&lt;/Option&gt;\n  &lt;/Select&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    818: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(817)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            d.Form,
            { id: 'select-colors-form' },
            function(e) {
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'label',
                  { htmlFor: 'select-colors' },
                  'Colors:'
                ),
                o.default.createElement(
                  d.Select,
                  {
                    field: 'status',
                    id: 'select-colors',
                    multiple: !0,
                    style: { height: '100px', width: '200px' }
                  },
                  o.default.createElement(d.Option, { value: 'red' }, 'Red'),
                  o.default.createElement(
                    d.Option,
                    { value: 'green' },
                    'Green'
                  ),
                  o.default.createElement(d.Option, { value: 'blue' }, 'Blue'),
                  o.default.createElement(
                    d.Option,
                    { value: 'yellow' },
                    'Yellow'
                  ),
                  o.default.createElement(
                    d.Option,
                    { value: 'orange' },
                    'Orange'
                  ),
                  o.default.createElement(
                    d.Option,
                    { value: 'purple' },
                    'Purple'
                  )
                ),
                o.default.createElement('button', { type: 'submit' }, 'Submit'),
                o.default.createElement('label', null, 'Values:'),
                o.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            }
          );
        });
      t.default = s;
    },
    819: function(e, t) {
      e.exports =
        '<h1 id="select-input">Select Input</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Select, Option } from &#39;informed&#39;;\n\n&lt;Form id=&quot;text-form&quot;&gt;\n  &lt;label htmlFor=&quot;select-status&quot;&gt;Relationship status:&lt;/label&gt;\n  &lt;Select field=&quot;status&quot; id=&quot;select-status&quot;&gt;\n    &lt;Option value=&quot;&quot; disabled&gt;\n      Select One...\n    &lt;/Option&gt;\n    &lt;Option value=&quot;single&quot;&gt;Single&lt;/Option&gt;\n    &lt;Option value=&quot;relationship&quot;&gt;Relationship&lt;/Option&gt;\n    &lt;Option value=&quot;complicated&quot;&gt;Complicated&lt;/Option&gt;\n  &lt;/Select&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    820: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(819)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            d.Form,
            { id: 'select-status-form' },
            function(e) {
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'label',
                  { htmlFor: 'select-status' },
                  'Relationship status:'
                ),
                o.default.createElement(
                  d.Select,
                  { field: 'status', id: 'select-status' },
                  o.default.createElement(
                    d.Option,
                    { value: '', disabled: !0 },
                    'Select One...'
                  ),
                  o.default.createElement(
                    d.Option,
                    { value: 'single' },
                    'Single'
                  ),
                  o.default.createElement(
                    d.Option,
                    { value: 'relationship' },
                    'Relationship'
                  ),
                  o.default.createElement(
                    d.Option,
                    { value: 'complicated' },
                    'Complicated'
                  )
                ),
                o.default.createElement('button', { type: 'submit' }, 'Submit'),
                o.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            }
          );
        });
      t.default = s;
    },
    821: function(e, t) {
      e.exports =
        '<h1 id="text-input">Text Input</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Checkbox } from &#39;informed&#39;;\n\n&lt;Form id=&quot;checkbox-form&quot;&gt;\n  &lt;label htmlFor=&quot;checkbox-authorize&quot;&gt;Authorize&lt;/label&gt;\n  &lt;Checkbox field=&quot;authorize&quot; id=&quot;checkbox-authorize&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    822: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(821)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            d.Form,
            { id: 'checkbox-form' },
            function(e) {
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'label',
                  { htmlFor: 'checkbox-authorize' },
                  'Authorize'
                ),
                o.default.createElement(d.Checkbox, {
                  field: 'authorize',
                  id: 'checkbox-authorize'
                }),
                o.default.createElement('button', { type: 'submit' }, 'Submit'),
                o.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            }
          );
        });
      t.default = s;
    },
    823: function(e, t) {
      e.exports =
        '<h1 id="radio-input">Radio Input</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, RadioGroup, Radio } from &#39;informed&#39;;\n\n&lt;Form id=&quot;radio-form&quot;&gt;\n  &lt;RadioGroup field=&quot;gender&quot;&gt;\n    &lt;label htmlFor=&quot;radio-male&quot;&gt;Male&lt;/label&gt;\n    &lt;Radio value=&quot;male&quot; id=&quot;radio-male&quot; /&gt;\n    &lt;label htmlFor=&quot;radio-female&quot;&gt;Female&lt;/label&gt;\n    &lt;Radio value=&quot;female&quot; id=&quot;radio-female&quot; /&gt;\n  &lt;/RadioGroup&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    824: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(823)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(d.Form, { id: 'radio-form' }, function(
            e
          ) {
            var t = e.formState;
            return o.default.createElement(
              'div',
              null,
              o.default.createElement(
                d.RadioGroup,
                { field: 'gender' },
                o.default.createElement(
                  'label',
                  { htmlFor: 'radio-male' },
                  'Male'
                ),
                o.default.createElement(d.Radio, {
                  value: 'male',
                  id: 'radio-male'
                }),
                o.default.createElement(
                  'label',
                  { htmlFor: 'radio-female' },
                  'Female'
                ),
                o.default.createElement(d.Radio, {
                  value: 'female',
                  id: 'radio-female'
                })
              ),
              o.default.createElement('button', { type: 'submit' }, 'Submit'),
              o.default.createElement(
                u.default,
                { language: 'language-js' },
                (0, l.default)(t.values, null, 2)
              )
            );
          });
        });
      t.default = s;
    },
    825: function(e, t) {
      e.exports =
        '<h1 id="textarea-input">TextArea Input</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, TextArea } from &#39;informed&#39;;\n\n&lt;Form id=&quot;textarea-form&quot;&gt;\n  &lt;label htmlFor=&quot;textarea-bio&quot;&gt;Bio:&lt;/label&gt;\n  &lt;TextArea field=&quot;bio&quot; id=&quot;textarea-bio&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    826: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(825)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(
            d.Form,
            { id: 'textarea-form' },
            function(e) {
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'label',
                  { htmlFor: 'textarea-bio' },
                  'Bio:'
                ),
                o.default.createElement(d.TextArea, {
                  field: 'bio',
                  id: 'textarea-bio'
                }),
                o.default.createElement('button', { type: 'submit' }, 'Submit'),
                o.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            }
          );
        });
      t.default = s;
    },
    827: function(e, t) {
      e.exports =
        '<h1 id="text-input">Text Input</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\n&lt;Form id=&quot;text-form&quot;&gt;\n  &lt;label htmlFor=&quot;text-name&quot;&gt;First name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;text-name&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    828: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(16)),
        i = a(n(827)),
        u = a(n(17)),
        d = n(15),
        s = (0, r.default)(i.default, function() {
          return o.default.createElement(d.Form, { id: 'text-form' }, function(
            e
          ) {
            var t = e.formState;
            return o.default.createElement(
              'div',
              null,
              o.default.createElement(
                'label',
                { htmlFor: 'text-name' },
                'First name:'
              ),
              o.default.createElement(d.Text, {
                field: 'name',
                id: 'text-name'
              }),
              o.default.createElement('button', { type: 'submit' }, 'Submit'),
              o.default.createElement(
                u.default,
                { language: 'language-js' },
                (0, l.default)(t.values, null, 2)
              )
            );
          });
        });
      t.default = s;
    },
    829: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'TextInput', {
          enumerable: !0,
          get: function() {
            return l.default;
          }
        }),
        Object.defineProperty(t, 'TextAreaInput', {
          enumerable: !0,
          get: function() {
            return o.default;
          }
        }),
        Object.defineProperty(t, 'RadioInput', {
          enumerable: !0,
          get: function() {
            return r.default;
          }
        }),
        Object.defineProperty(t, 'CheckboxInput', {
          enumerable: !0,
          get: function() {
            return i.default;
          }
        }),
        Object.defineProperty(t, 'SelectInput', {
          enumerable: !0,
          get: function() {
            return u.default;
          }
        }),
        Object.defineProperty(t, 'MultiSelectInput', {
          enumerable: !0,
          get: function() {
            return d.default;
          }
        }),
        Object.defineProperty(t, 'Intro', {
          enumerable: !0,
          get: function() {
            return s.default;
          }
        });
      var l = a(n(828)),
        o = a(n(826)),
        r = a(n(824)),
        i = a(n(822)),
        u = a(n(820)),
        d = a(n(818)),
        s = a(n(816));
    },
    830: function(e, t) {
      e.exports =
        '<h2 id="endless-possibilities">Endless Possibilities</h2>\n<p>Because of this design, you can add your very own custom inputs! Below is an example of a slider!</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, asField } from &#39;informed&#39;;\n\nconst Slider = asField(({ fieldState, fieldApi, ...props }) =&gt; {\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;\n  return (\n    &lt;input\n      {...rest}\n      type=&quot;range&quot;\n      min={0}\n      max={100}\n      step={5}\n      ref={forwardedRef}\n      value={value || initialValue || &#39;0&#39;}\n      onChange={e =&gt; {\n        setValue(e.target.value);\n        if (onChange) {\n          onChange(e);\n        }\n      }}\n      onBlur={e =&gt; {\n        setTouched();\n        if (onBlur) {\n          onBlur(e);\n        }\n      }}\n    /&gt;\n  );\n});\n\n&lt;Form id=&quot;custom-form&quot;&gt;\n  &lt;label htmlFor=&quot;custom-range&quot;&gt;Range:&lt;/label&gt;\n  &lt;Slider field=&quot;range&quot; id=&quot;custom-range&quot; initialValue={50} /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    831: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(34)),
        r = a(n(49)),
        i = a(n(1)),
        u = a(n(17)),
        d = a(n(16)),
        s = a(n(830)),
        f = n(15),
        c = (0, f.asField)(function(e) {
          var t = e.fieldState,
            n = e.fieldApi,
            a = (0, r.default)(e, ['fieldState', 'fieldApi']),
            l = t.value,
            u = n.setValue,
            d = n.setTouched,
            s = a.onChange,
            f = a.onBlur,
            c = a.initialValue,
            m = a.forwardedRef,
            p = (0, r.default)(a, [
              'onChange',
              'onBlur',
              'initialValue',
              'forwardedRef'
            ]);
          return i.default.createElement(
            'input',
            (0, o.default)({}, p, {
              type: 'range',
              min: 0,
              max: 100,
              step: 5,
              ref: m,
              value: l || c || '0',
              onChange: function(e) {
                u(e.target.value), s && s(e);
              },
              onBlur: function(e) {
                d(), f && f(e);
              }
            })
          );
        }),
        m = (0, d.default)(s.default, function() {
          return i.default.createElement(
            'div',
            null,
            i.default.createElement(f.Form, { id: 'custom-form-3' }, function(
              e
            ) {
              var t = e.formState;
              return i.default.createElement(
                i.default.Fragment,
                null,
                i.default.createElement(
                  'label',
                  { htmlFor: 'custom-3-range' },
                  'Range:'
                ),
                i.default.createElement(c, {
                  field: 'range',
                  initialValue: '50',
                  id: 'custom-3-range'
                }),
                i.default.createElement('button', { type: 'submit' }, 'Submit'),
                i.default.createElement('label', null, 'Values:'),
                i.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            })
          );
        });
      t.default = m;
    },
    832: function(e, t) {
      e.exports =
        '<h2 id="so-what-if-i-do-want-to-hook-it-all-up-myself-">So what if i do want to hook it all up myself?</h2>\n<p><strong>Dont Fret!</strong> Check out the example below:</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, BasicText, asField } from &#39;informed&#39;;\n\nconst validate = value =&gt; {\n  return !value || value.length &lt; 5\n    ? &#39;Field must be at least five characters&#39;\n    : null;\n};\n\nconst ErrorText = asField(({ fieldState, fieldApi, ...props }) =&gt; {\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;\n  return (\n    &lt;React.Fragment&gt;\n      &lt;input\n        {...rest}\n        ref={forwardedRef}\n        value={!value &amp;&amp; value !== 0 ? &#39;&#39; : value}\n        onChange={e =&gt; {\n          setValue(e.target.value);\n          if (onChange) {\n            onChange(e);\n          }\n        }}\n        onBlur={e =&gt; {\n          setTouched();\n          if (onBlur) {\n            onBlur(e);\n          }\n        }}\n        style={fieldState.error ? { border: &#39;solid 1px red&#39; } : null}\n      /&gt;\n      {fieldState.error ? (\n        &lt;small style={{ color: &#39;red&#39; }}&gt;{fieldState.error}&lt;/small&gt;\n      ) : null}\n    &lt;/React.Fragment&gt;\n  );\n});\n\n&lt;Form id=&quot;custom-form&quot;&gt;\n  &lt;label htmlFor=&quot;custom-name&quot;&gt;First name:&lt;/label&gt;\n  &lt;ErrorText\n    field=&quot;name&quot;\n    id=&quot;custom-name&quot;\n    validate={validate}\n    validateOnChange\n    validateOnBlur\n  /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    833: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(34)),
        r = a(n(49)),
        i = a(n(1)),
        u = a(n(17)),
        d = a(n(16)),
        s = a(n(832)),
        f = n(15),
        c = function(e) {
          return !e || e.length < 5
            ? 'Field must be at least five characters'
            : null;
        },
        m = (0, f.asField)(function(e) {
          var t = e.fieldState,
            n = e.fieldApi,
            a = (0, r.default)(e, ['fieldState', 'fieldApi']),
            l = t.value,
            u = n.setValue,
            d = n.setTouched,
            s = a.onChange,
            f = a.onBlur,
            c = (a.initialValue, a.forwardedRef),
            m = (0, r.default)(a, [
              'onChange',
              'onBlur',
              'initialValue',
              'forwardedRef'
            ]);
          return i.default.createElement(
            i.default.Fragment,
            null,
            i.default.createElement(
              'input',
              (0, o.default)({}, m, {
                ref: c,
                value: l || 0 === l ? l : '',
                onChange: function(e) {
                  u(e.target.value), s && s(e);
                },
                onBlur: function(e) {
                  d(), f && f(e);
                },
                style: t.error ? { border: 'solid 1px red' } : null
              })
            ),
            t.error
              ? i.default.createElement(
                  'small',
                  { style: { color: 'red' } },
                  t.error
                )
              : null
          );
        }),
        p = (0, d.default)(s.default, function() {
          return i.default.createElement(
            'div',
            null,
            i.default.createElement(f.Form, { id: 'custom-form-2' }, function(
              e
            ) {
              e.formApi;
              var t = e.formState;
              return i.default.createElement(
                i.default.Fragment,
                null,
                i.default.createElement(
                  'label',
                  { htmlFor: 'custom-2-name' },
                  'First name:'
                ),
                i.default.createElement(m, {
                  field: 'name',
                  id: 'custom-2-name',
                  validate: c,
                  validateOnChange: !0,
                  validateOnBlur: !0
                }),
                i.default.createElement('button', { type: 'submit' }, 'Submit'),
                i.default.createElement('label', null, 'Values:'),
                i.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                ),
                i.default.createElement('label', null, 'Errors:'),
                i.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.errors, null, 2)
                )
              );
            })
          );
        });
      t.default = p;
    },
    834: function(e, t) {
      e.exports =
        '<h1 id="custom-inputs">Custom Inputs</h1>\n<p>Sometimes the inputs <code>informed</code> provides are not good enough. So we decided to\nhelp you out with that! Informed also gives you access to an asField HOC\n( High Order Component ). We also expose the internal input fields such that you\ncan simply add on to them without writing all of the code again. You will see this\nin one of the following examples.</p>\n<h2 id="custom-text-input">Custom Text Input</h2>\n<p>Lets say you like <code>informed</code>&#39;s text input but you want to show an error and turn\nit red when there is an error. You could achieve this with the following code.</p>\n<pre><code class="language-jsx">import { Form, BasicText, asField } from &#39;informed&#39;;\n\nconst validate = value =&gt; {\n  return !value || value.length &lt; 5\n    ? &#39;Field must be at least five characters&#39;\n    : null;\n};\n\nconst ErrorText = asField(({ fieldState, ...props }) =&gt; (\n  &lt;React.Fragment&gt;\n    &lt;BasicText\n      fieldState={fieldState}\n      {...props}\n      style={fieldState.error ? { border: &#39;solid 1px red&#39; } : null}\n    /&gt;\n    {fieldState.error ? (\n      &lt;small style={{ color: &#39;red&#39; }}&gt;{fieldState.error}&lt;/small&gt;\n    ) : null}\n  &lt;/React.Fragment&gt;\n));\n\n&lt;Form id=&quot;custom-form&quot;&gt;\n  &lt;label htmlFor=&quot;custom-name&quot;&gt;First name:&lt;/label&gt;\n  &lt;ErrorText\n    field=&quot;name&quot;\n    id=&quot;custom-name&quot;\n    validate={validate}\n    validateOnChange\n    validateOnBlur\n  /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n\x3c!-- STORY --\x3e\n\n<h2 id="i-need-an-explanation-">I need an explanation!</h2>\n<p>Ok so what did we just do? We took advantage of two parts of <code>informed</code>.</p>\n<ol>\n<li>The <code>asField</code> HOC that turns a Component into an InformedField.</li>\n<li>The internal <code>BasicText</code> Component.</li>\n</ol>\n<p><code>asField</code> is a HOC that will turn your Component into an <code>informed</code> Field Component by\ngiving your component access to the fieldApi and fieldState, and wrapping it in some magic!\nIf you wanted to you could hook up all the functions yourself, but for convenience we\nexpose our internal input definitions for you!</p>\n';
    },
    835: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(34)),
        r = a(n(49)),
        i = a(n(1)),
        u = a(n(17)),
        d = a(n(16)),
        s = a(n(834)),
        f = n(15),
        c = function(e) {
          return !e || e.length < 5
            ? 'Field must be at least five characters'
            : null;
        },
        m = (0, f.asField)(function(e) {
          var t = e.fieldState,
            n = (0, r.default)(e, ['fieldState']);
          return i.default.createElement(
            i.default.Fragment,
            null,
            i.default.createElement(
              f.BasicText,
              (0, o.default)({ fieldState: t }, n, {
                style: t.error ? { border: 'solid 1px red' } : null
              })
            ),
            t.error
              ? i.default.createElement(
                  'small',
                  { style: { color: 'red' } },
                  t.error
                )
              : null
          );
        }),
        p = (0, d.default)(s.default, function() {
          return i.default.createElement(
            'div',
            null,
            i.default.createElement(f.Form, { id: 'custom-form-1' }, function(
              e
            ) {
              e.formApi;
              var t = e.formState;
              return i.default.createElement(
                i.default.Fragment,
                null,
                i.default.createElement(
                  'label',
                  { htmlFor: 'custom-1-name' },
                  'First name:'
                ),
                i.default.createElement(m, {
                  field: 'name',
                  id: 'custom-1-name',
                  validate: c,
                  validateOnChange: !0,
                  validateOnBlur: !0
                }),
                i.default.createElement('button', { type: 'submit' }, 'Submit'),
                i.default.createElement('label', null, 'Values:'),
                i.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                ),
                i.default.createElement('label', null, 'Errors:'),
                i.default.createElement(
                  u.default,
                  { language: 'language-js' },
                  (0, l.default)(t.errors, null, 2)
                )
              );
            })
          );
        });
      t.default = p;
    },
    836: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(1)),
        o = a(n(835)),
        r = a(n(833)),
        i = a(n(831)),
        u = function() {
          return l.default.createElement(
            'div',
            null,
            l.default.createElement(o.default, null),
            l.default.createElement(r.default, null),
            l.default.createElement(i.default, null)
          );
        };
      t.default = u;
    },
    837: function(e, t) {
      e.exports =
        '<h1 id="dynamic-fields">Dynamic Fields</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text, RadioGroup, Radio } from &#39;informed&#39;;\n\n&lt;Form id=&quot;dynamic-field-form&quot;&gt;\n  {({ formState }) =&gt; (\n    &lt;label htmlFor=&quot;dynamic-name&quot;&gt;First name:&lt;/label&gt;\n    &lt;Text field=&quot;name&quot; id=&quot;dynamic-name&quot; /&gt;\n    &lt;label&gt;Are you married?&lt;/label&gt;\n    &lt;RadioGroup field=&quot;married&quot;&gt;\n      &lt;label htmlFor=&quot;dynamic-married-yes&quot;&gt;Yes&lt;/label&gt;\n      &lt;Radio value=&quot;yes&quot; id=&quot;dynamic-married-yes&quot; /&gt;\n      &lt;label htmlFor=&quot;dynamic-married-no&quot;&gt;No&lt;/label&gt;\n      &lt;Radio value=&quot;no&quot; id=&quot;dynamic-married-no&quot; /&gt;\n    &lt;/RadioGroup&gt;\n    {\n      formState.values.married === &#39;yes&#39; ?\n      &lt;React.Fragment&gt;\n        &lt;label htmlFor=&quot;dynamic-spouse&quot;&gt;Spouse name:&lt;/label&gt;\n        &lt;Text field=&quot;spouse&quot; id=&quot;dynamic-spouse&quot; /&gt;\n      &lt;/React.Fragment&gt;\n      : null\n    }\n    &lt;button type=&quot;submit&quot;&gt;\n      Submit\n    &lt;/button&gt;\n  )}\n&lt;/Form&gt;</code></pre>\n';
    },
    838: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(17)),
        i = a(n(16)),
        u = a(n(837)),
        d = n(15),
        s = (0, i.default)(u.default, function() {
          return o.default.createElement(
            'div',
            null,
            o.default.createElement(
              d.Form,
              { id: 'dynamic-field-form' },
              function(e) {
                e.formApi;
                var t = e.formState;
                return o.default.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap' } },
                  o.default.createElement(
                    'div',
                    { style: { flex: 1, marginRight: '2rem' } },
                    o.default.createElement(
                      'label',
                      { htmlFor: 'dynamic-name' },
                      'First name:'
                    ),
                    o.default.createElement(d.Text, {
                      field: 'name',
                      id: 'dynamic-name'
                    }),
                    o.default.createElement('label', null, 'Are you married?'),
                    o.default.createElement(
                      d.RadioGroup,
                      { field: 'married' },
                      o.default.createElement(
                        'label',
                        { htmlFor: 'dynamic-married-yes' },
                        'Yes'
                      ),
                      o.default.createElement(d.Radio, {
                        value: 'yes',
                        id: 'dynamic-married-yes'
                      }),
                      o.default.createElement(
                        'label',
                        { htmlFor: 'dynamic-married-no' },
                        'No'
                      ),
                      o.default.createElement(d.Radio, {
                        value: 'no',
                        id: 'dynamic-married-no'
                      })
                    ),
                    'yes' === t.values.married
                      ? o.default.createElement(
                          o.default.Fragment,
                          null,
                          o.default.createElement(
                            'label',
                            { htmlFor: 'dynamic-spouse' },
                            'Spouse name:'
                          ),
                          o.default.createElement(d.Text, {
                            field: 'spouse',
                            id: 'dynamic-spouse'
                          })
                        )
                      : null,
                    o.default.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    )
                  ),
                  o.default.createElement(
                    'div',
                    { style: { flex: 2, minWidth: '300px' } },
                    o.default.createElement('label', null, 'Values:'),
                    o.default.createElement(
                      r.default,
                      { language: 'language-js' },
                      (0, l.default)(t.values, null, 2)
                    ),
                    o.default.createElement('label', null, 'Touched:'),
                    o.default.createElement(
                      r.default,
                      { language: 'language-js' },
                      (0, l.default)(t.touched, null, 2)
                    )
                  )
                );
              }
            )
          );
        });
      t.default = s;
    },
    839: function(e, t) {
      e.exports =
        '<h1 id="scope">Scope</h1>\n<p>Scope is a very useful tool for simplifying your code but you can easily make\nmistakes when using it.</p>\n<h2 id="withfield-">WithField:</h2>\n<p>Below is an example where you could misuse the <code>withFieldState</code> high order\ncomponent.</p>\n<p>**\nType into the field and Note how the text next to <code>color:</code> gets upated while nothing\nchanges next to <code>favorite.color:</code>\n**</p>\n\x3c!-- STORY --\x3e\n\n<p>**\nWhy? Lets take a look at the code below:\n**</p>\n<pre><code class="language-jsx">import { Form, Text, Scope, withFieldState } from &#39;informed&#39;;\n\nconst FieldInfo = ({ fieldState }) =&gt; &lt;code&gt;{fieldState.value}&lt;/code&gt;;\n\nconst WithFavoriteColorInfo = withFieldState(&#39;favorite.color&#39;)(FieldInfo);\nconst WithColorInfo = withFieldState(&#39;color&#39;)(FieldInfo);\n\n&lt;Form id=&quot;gotcha-form-2&quot;&gt;\n  &lt;Scope scope=&quot;favorite&quot;&gt;\n    &lt;Text field=&quot;color&quot; /&gt;\n    &lt;div&gt;\n      favorite.color: &lt;WithFavoriteColorInfo /&gt;\n    &lt;/div&gt;\n    &lt;div&gt;\n      color: &lt;WithColorInfo /&gt;\n    &lt;/div&gt;\n  &lt;/Scope&gt;\n&lt;/Form&gt;;</code></pre>\n<br/>\nRemember that the result of high order components is affected just like `Text`\nfields. In other words when you write `<Text field="color" />` within a\n`<Scope scope="favorite" />` the result in the values is `favorite.color`.\nPutting a component that is wrapped with `withFieldState` or `withFieldApi` is\naffected in the exact same way!\n';
    },
    840: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(17)),
        i = a(n(16)),
        u = a(n(839)),
        d = n(15),
        s = function(e) {
          var t = e.fieldState;
          return o.default.createElement('code', null, t.value);
        },
        f = (0, d.withFieldState)('favorite.color')(s),
        c = (0, d.withFieldState)('color')(s),
        m = (0, i.default)(u.default, function() {
          return o.default.createElement(
            'div',
            null,
            o.default.createElement(d.Form, { id: 'gotcha-form-2' }, function(
              e
            ) {
              e.formApi;
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  d.Scope,
                  { scope: 'favorite' },
                  o.default.createElement(d.Text, { field: 'color' }),
                  o.default.createElement(
                    'div',
                    null,
                    'favorite.color: ',
                    o.default.createElement(f, null)
                  ),
                  o.default.createElement(
                    'div',
                    null,
                    'color: ',
                    o.default.createElement(c, null)
                  )
                ),
                o.default.createElement('label', null, 'Values:'),
                o.default.createElement(
                  r.default,
                  { language: 'language-js' },
                  (0, l.default)(t.values, null, 2)
                )
              );
            })
          );
        });
      t.default = m;
    },
    841: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(1)),
        o = a(n(840));
      t.default = function() {
        return l.default.createElement(o.default, null);
      };
    },
    842: function(e, t) {
      e.exports =
        '<h1 id="unnecessary-rendering">Unnecessary Rendering</h1>\n<p>Sometimes your components will re-render when they don&#39;t need to. Below are some\nexamples where this can occur.</p>\n<h2 id="inlinefunctions-">InlineFunctions:</h2>\n<p>Below is the same example that is found in Validation Control accept for one\ndifference! The validation functions that are passed in were declared inline.\nThis will unfortunately result in a re-render of every text field every time the\nparent re-renders :(</p>\n<p>The form on the left results in excess re-rendering while the form on the rights\nfields only re-render when they need to. To visualize this, the fields turn red\nevery time the input re-renders.</p>\n<p><strong>Hint:</strong> click on the submit button a few times.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\nconst validate = value =&gt; &#39;Field is not valid&#39;;\n\n&lt;Form id=&quot;gotcha-form-1&quot;&gt;\n  {/* ---------------- BAD!! ---------------- */}\n  &lt;label htmlFor=&quot;gotcha-color-1&quot;&gt;Color:&lt;/label&gt;\n  &lt;small&gt;Validate on blur&lt;/small&gt;\n  &lt;Text\n    field=&quot;color&quot;\n    id=&quot;gotcha-color-1&quot;\n    validateOnBlur\n    debug\n    validate={value =&gt; &#39;Field is not valid&#39;}\n  /&gt; {/* BAD!! */}\n  &lt;label htmlFor=&quot;gotcha-food-1&quot;&gt;Food:&lt;/label&gt;\n  &lt;small&gt;Validate on change&lt;/small&gt;\n  &lt;Text\n    field=&quot;food&quot;\n    id=&quot;gotcha-food-1&quot;\n    validateOnChange\n    debug\n    validate={value =&gt; &#39;Field is not valid&#39;}\n  /&gt;{&#39; &#39;}\n  {/* BAD!! */}\n  &lt;label htmlFor=&quot;gotcha-car-1&quot;&gt;Car:&lt;/label&gt;\n  &lt;small&gt;Validate on blur and change&lt;/small&gt;\n  &lt;Text\n    field=&quot;car&quot;\n    id=&quot;gotcha-car-1&quot;\n    validateOnBlur\n    validateOnChange\n    debug\n    validate={value =&gt; &#39;Field is not valid&#39;}\n  /&gt; {/* BAD!! */}\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  {/* ---------------- GOOD!! ---------------- */}\n  &lt;label htmlFor=&quot;gotcha-color-2&quot;&gt;Color:&lt;/label&gt;\n  &lt;small&gt;Validate on blur&lt;/small&gt;\n  &lt;Text\n    field=&quot;color&quot;\n    id=&quot;gotcha-color-2&quot;\n    validateOnBlur\n    debug\n    validate={validate}\n  /&gt;{&#39; &#39;}\n  {/* GOOD!! */}\n  &lt;label htmlFor=&quot;gotcha-food-2&quot;&gt;Food:&lt;/label&gt;\n  &lt;small&gt;Validate on change&lt;/small&gt;\n  &lt;Text\n    field=&quot;food&quot;\n    id=&quot;gotcha-food-2&quot;\n    validateOnChange\n    debug\n    validate={validate}\n  /&gt; {/* GOOD!! */}\n  &lt;label htmlFor=&quot;gotcha-car-2&quot;&gt;Car:&lt;/label&gt;\n  &lt;small&gt;Validate on blur and change&lt;/small&gt;\n  &lt;Text\n    field=&quot;car&quot;\n    id=&quot;gotcha-car-2&quot;\n    validateOnBlur\n    validateOnChange\n    debug\n    validate={validate}\n  /&gt;{&#39; &#39;}\n  {/* GOOD!! */}\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    843: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(17)),
        i = a(n(16)),
        u = a(n(842)),
        d = n(15),
        s = function(e) {
          return 'Field is not valid';
        },
        f = (0, i.default)(u.default, function() {
          return o.default.createElement(
            'div',
            null,
            o.default.createElement(d.Form, { id: 'gotcha-form-1' }, function(
              e
            ) {
              e.formApi;
              var t = e.formState;
              return o.default.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                o.default.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  o.default.createElement('h5', null, 'Bad Form'),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'gotcha-color-1' },
                    'Color:'
                  ),
                  o.default.createElement('small', null, 'Validate on blur'),
                  o.default.createElement(d.Text, {
                    field: 'color',
                    id: 'gotcha-color-1',
                    validateOnBlur: !0,
                    debug: !0,
                    validate: function(e) {
                      return 'Field is not valid';
                    }
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'gotcha-food-1' },
                    'Food:'
                  ),
                  o.default.createElement('small', null, 'Validate on change'),
                  o.default.createElement(d.Text, {
                    field: 'food',
                    id: 'gotcha-food-1',
                    validateOnChange: !0,
                    debug: !0,
                    validate: function(e) {
                      return 'Field is not valid';
                    }
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'gotcha-car-1' },
                    'Car:'
                  ),
                  o.default.createElement(
                    'small',
                    null,
                    'Validate on blur and change'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'car',
                    id: 'gotcha-car-1',
                    validateOnBlur: !0,
                    validateOnChange: !0,
                    debug: !0,
                    validate: function(e) {
                      return 'Field is not valid';
                    }
                  }),
                  o.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                o.default.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  o.default.createElement('h5', null, 'Good Form'),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'gotcha-color-2' },
                    'Color:'
                  ),
                  o.default.createElement('small', null, 'Validate on blur'),
                  o.default.createElement(d.Text, {
                    field: 'color',
                    id: 'gotcha-color-2',
                    validateOnBlur: !0,
                    debug: !0,
                    validate: s
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'gotcha-food-2' },
                    'Food:'
                  ),
                  o.default.createElement('small', null, 'Validate on change'),
                  o.default.createElement(d.Text, {
                    field: 'food',
                    id: 'gotcha-food-2',
                    validateOnChange: !0,
                    debug: !0,
                    validate: s
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'gotcha-car-2' },
                    'Car:'
                  ),
                  o.default.createElement(
                    'small',
                    null,
                    'Validate on blur and change'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'car',
                    id: 'gotcha-car-2',
                    validateOnBlur: !0,
                    validateOnChange: !0,
                    debug: !0,
                    validate: s
                  }),
                  o.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                o.default.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  o.default.createElement('label', null, 'Values:'),
                  o.default.createElement(
                    r.default,
                    { language: 'language-js' },
                    (0, l.default)(t.values, null, 2)
                  ),
                  o.default.createElement('label', null, 'Errors:'),
                  o.default.createElement(
                    r.default,
                    { language: 'language-js' },
                    (0, l.default)(t.errors, null, 2)
                  )
                )
              );
            })
          );
        });
      t.default = f;
    },
    844: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(1)),
        o = a(n(843));
      t.default = function() {
        return l.default.createElement(o.default, null);
      };
    },
    845: function(e, t) {
      e.exports =
        '<h1 id="complex-validation">Complex Validation</h1>\n<p>Sometimes when validating you may need to notify other fields about your changes.\nA great example of this is when you have a password and confirm password field,\nand when one changes you want the other to validate as well. To achieve this, <code>informed</code>\nallows you to pass notify to an input with an array of fields to notify.</p>\n<p><strong>The form below is an example of this scenario:</strong></p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\nconst basicValidation = value =&gt; {\n  return !value || value.length &lt; 5 ? &#39;Password must be at least five characters&#39; : null;\n}\n\nconst matchValidation = ( value, values ) =&gt; {\n  return values.password !== values.confirmPassword ? &#39;Passwords must match&#39; : null;\n}\n\nconst passwordValidation = ( value, values ) =&gt; {\n  return basicValidation(value) || matchValidation( value, values )\n}\n\n&lt;Form id=&quot;notify-validation-form&quot;&gt;\n  &lt;Text\n    field=&quot;password&quot;\n    id=&quot;notify-password&quot;\n    validate={passwordValidation}\n    validateOnChange\n    notify={[&#39;confirmPassword&#39;]}/&gt;\n  &lt;label htmlFor=&quot;notify-confirm-password&quot;&gt;Confirm password:&lt;/label&gt;\n  &lt;Text\n    field=&quot;confirmPassword&quot;\n    id=&quot;notify-confirm-password&quot;\n    validate={passwordValidation}\n    validateOnChange\n    notify={[&#39;password&#39;]}/&gt;\n  &lt;button type=&quot;submit&quot;&gt;\n    Submit\n  &lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n';
    },
    846: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(38)),
        r = a(n(37)),
        i = a(n(48)),
        u = a(n(47)),
        d = a(n(46)),
        s = a(n(1)),
        f = a(n(17)),
        c = a(n(16)),
        m = a(n(845)),
        p = a(n(228)),
        g = n(15),
        h = function(e, t) {
          return (
            (function(e) {
              return !e || e.length < 5
                ? 'Password must be at least five characters'
                : null;
            })(e) ||
            (function(e, t) {
              return t.password !== t.confirmPassword
                ? 'Passwords must match'
                : null;
            })(0, t)
          );
        },
        b = (function(e) {
          function t() {
            return (
              (0, o.default)(this, t),
              (0, i.default)(this, (0, u.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, d.default)(t, e),
            (0, r.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return s.default.createElement(
                    'div',
                    null,
                    s.default.createElement(
                      g.Form,
                      {
                        onSubmit: function() {
                          return e.modal.open();
                        },
                        id: 'notify-validation-form'
                      },
                      function(t) {
                        t.formApi;
                        var n = t.formState;
                        return s.default.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          s.default.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            s.default.createElement(
                              'label',
                              { htmlFor: 'notify-password' },
                              'Password:'
                            ),
                            s.default.createElement(g.Text, {
                              field: 'password',
                              id: 'notify-password',
                              validate: h,
                              validateOnChange: !0,
                              notify: ['confirmPassword']
                            }),
                            s.default.createElement(
                              'label',
                              { htmlFor: 'notify-confirm-password' },
                              'Confirm password:'
                            ),
                            s.default.createElement(g.Text, {
                              field: 'confirmPassword',
                              id: 'notify-confirm-password',
                              validate: h,
                              validateOnChange: !0,
                              notify: ['password']
                            }),
                            s.default.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          s.default.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            s.default.createElement('label', null, 'Values:'),
                            s.default.createElement(
                              f.default,
                              { language: 'language-js' },
                              (0, l.default)(n.values, null, 2)
                            ),
                            s.default.createElement('label', null, 'Errors:'),
                            s.default.createElement(
                              f.default,
                              { language: 'language-js' },
                              (0, l.default)(n.errors, null, 2)
                            ),
                            s.default.createElement('label', null, 'Invalid:'),
                            s.default.createElement(
                              f.default,
                              { language: 'language-js' },
                              (0, l.default)(n.invalid, null, 2)
                            )
                          ),
                          s.default.createElement(
                            p.default,
                            {
                              getControl: function(t) {
                                return (e.modal = t);
                              }
                            },
                            s.default.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.default.Component),
        v = (0, c.default)(m.default, function() {
          return s.default.createElement(b, null);
        });
      t.default = v;
    },
    847: function(e, t) {
      e.exports =
        '<h1 id="validation-control">Validation Control</h1>\n<p>By default fields will only validate when the submit button is clicked. To get\nmore granular validation ( onBlur &amp;&amp; onChange ), simply pass in validateOnChange\nor validateOnBlur or even both!</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">const validate = value =&gt; {\n  return !value || value.length &lt; 5 ? &#39;Field must be longer than five characters&#39; : null;\n}\n\n&lt;Form id=&quot;validate-control-form&quot;&gt;\n  &lt;label htmlFor=&quot;validate-color&quot;&gt;Color:&lt;/label&gt;\n  &lt;small&gt;Validate on blur&lt;/small&gt;\n  &lt;Text\n    field=&quot;color&quot;\n    id=&quot;validate-color&quot;\n    validateOnBlur\n    validate={validate} /&gt;\n  &lt;label htmlFor=&quot;validate-food&quot;&gt;Food:&lt;/label&gt;\n  &lt;small&gt;Validate on change&lt;/small&gt;\n  &lt;Text\n    field=&quot;food&quot;\n    id=&quot;validate-food&quot;\n    validateOnChange\n    validate={validate} /&gt;\n  &lt;label htmlFor=&quot;validate-car&quot;&gt;Car:&lt;/label&gt;\n  &lt;small&gt;Validate on blur and change&lt;/small&gt;\n  &lt;Text\n    field=&quot;car&quot;\n    id=&quot;validate-car&quot;\n    validateOnBlur\n    validateOnChange\n    validate={validate} /&gt;\n  &lt;button type=&quot;submit&quot;&gt;\n    Submit\n  &lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n';
    },
    848: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(17)),
        i = a(n(16)),
        u = a(n(847)),
        d = n(15),
        s = function(e) {
          return !e || e.length < 5
            ? 'Field must be at least five characters'
            : null;
        },
        f = (0, i.default)(u.default, function() {
          return o.default.createElement(
            'div',
            null,
            o.default.createElement(
              d.Form,
              { id: 'validate-control-form' },
              function(e) {
                e.formApi;
                var t = e.formState;
                return o.default.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap' } },
                  o.default.createElement(
                    'div',
                    { style: { flex: 1, marginRight: '2rem' } },
                    o.default.createElement(
                      'label',
                      { htmlFor: 'validate-color' },
                      'Color:'
                    ),
                    o.default.createElement('small', null, 'Validate on blur'),
                    o.default.createElement(d.Text, {
                      field: 'color',
                      id: 'validate-color',
                      validateOnBlur: !0,
                      validate: s
                    }),
                    o.default.createElement(
                      'label',
                      { htmlFor: 'validate-food' },
                      'Food:'
                    ),
                    o.default.createElement(
                      'small',
                      null,
                      'Validate on change'
                    ),
                    o.default.createElement(d.Text, {
                      field: 'food',
                      id: 'validate-food',
                      validateOnChange: !0,
                      validate: s
                    }),
                    o.default.createElement(
                      'label',
                      { htmlFor: 'validate-car' },
                      'Car:'
                    ),
                    o.default.createElement(
                      'small',
                      null,
                      'Validate on blur and change'
                    ),
                    o.default.createElement(d.Text, {
                      field: 'car',
                      id: 'validate-car',
                      validateOnBlur: !0,
                      validateOnChange: !0,
                      validate: s
                    }),
                    o.default.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    )
                  ),
                  o.default.createElement(
                    'div',
                    { style: { flex: 2, minWidth: '300px' } },
                    o.default.createElement('label', null, 'Values:'),
                    o.default.createElement(
                      r.default,
                      { language: 'language-js' },
                      (0, l.default)(t.values, null, 2)
                    ),
                    o.default.createElement('label', null, 'Errors:'),
                    o.default.createElement(
                      r.default,
                      { language: 'language-js' },
                      (0, l.default)(t.errors, null, 2)
                    ),
                    o.default.createElement('label', null, 'Invalid:'),
                    o.default.createElement(
                      r.default,
                      { language: 'language-js' },
                      (0, l.default)(t.invalid, null, 2)
                    )
                  )
                );
              }
            )
          );
        });
      t.default = f;
    },
    849: function(e, t) {
      e.exports =
        '<h1 id="complex-validation">Complex Validation</h1>\n<p>Complex validation can be achieved by passing a validation function to an input,\nthat also accepts all the values in the form. Below is an example form\nthat has validation functions on each input. The Basic validation function will\nreturn an error when the input has less than five characters, or there is no\nvalue at all, and null otherwise. The friendValidation function will show errors\nwhen basic validation fails OR two friends have the same name. We pass the input\nvalidation function to every input and the friendValidation function to the\nfriend fields. Validation will <strong>occur on submission</strong>.</p>\n<p><strong>Try clicking the submit button and see what happens:</strong></p>\n\x3c!-- STORY --\x3e\n\n<p>What just happened? When you clicked on the submit button all of the validation\nfunctions were triggered for each field. Because every validation failed, the\nform never actually called onSubmit. In other words, informed will only\nsubmit a valid form.</p>\n<p><strong>Get rid of the errors by typing more than 5 characters in each field and\nalso type &quot;George&quot; in two of the friend fields. Click the submit button again\nand see what happens:</strong></p>\n<p>All of our basic level validation passed but when the form attempted to submit\nthe additional friend checks failed.</p>\n<pre><code class="language-jsx">import { Form, Text, Scope } from &#39;informed&#39;;\n\nconst basicValidation = value =&gt; {\n  return !value || value.length &lt; 5 ? &#39;Field must be longer than five characters&#39; : null;\n}\n\nconst duplicateValidation = ( value, values ) =&gt; {\n  return values.filter( v =&gt; v === value ).length &gt; 1 ? &#39;This field must be unique.&#39; : null;\n}\n\nconst friendValidation = ( value, values ) =&gt; {\n  return basicValidation(value) || duplicateValidation( value, values.friends )\n}\n\n&lt;Form id=&quot;complex-validate-form&quot;&gt;\n  &lt;label htmlFor=&quot;complex-name&quot;&gt;First name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;complex-name&quot; validate={basicValidation} /&gt;\n  &lt;Scope scope=&quot;favorite&quot;&gt;\n    &lt;label htmlFor=&quot;complex-color&quot;&gt;Favorite color:&lt;/label&gt;\n    &lt;Text field=&quot;color&quot; id=&quot;complex-color&quot; validate={basicValidation} /&gt;\n    &lt;label htmlFor=&quot;complex-food&quot;&gt;Favorite food:&lt;/label&gt;\n    &lt;Text field=&quot;food&quot; id=&quot;complex-food&quot; validate={basicValidation} /&gt;\n  &lt;/Scope&gt;\n  &lt;label htmlFor=&quot;complex-friend-0&quot;&gt;Friend 1:&lt;/label&gt;\n  &lt;Text field=&quot;friends[0]&quot; id=&quot;complex-friend-0&quot; validate={friendValidation} /&gt;\n  &lt;label htmlFor=&quot;complex-friend-1&quot;&gt;Friend 2:&lt;/label&gt;\n  &lt;Text field=&quot;friends[1]&quot; id=&quot;complex-friend-1&quot; validate={friendValidation} /&gt;\n  &lt;label htmlFor=&quot;complex-friend-2&quot;&gt;Friend 3:&lt;/label&gt;\n  &lt;Text field=&quot;friends[2]&quot; id=&quot;complex-friend-2&quot; validate={friendValidation} /&gt;\n  &lt;button type=&quot;submit&quot;&gt;\n    Submit\n  &lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n';
    },
    850: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(38)),
        r = a(n(37)),
        i = a(n(48)),
        u = a(n(47)),
        d = a(n(46)),
        s = a(n(1)),
        f = a(n(17)),
        c = a(n(16)),
        m = a(n(849)),
        p = a(n(228)),
        g = n(15),
        h = function(e) {
          return !e || e.length < 5
            ? 'Field must be at least five characters'
            : null;
        },
        b = function(e, t) {
          return (
            h(e) ||
            (function(e, t) {
              return t.filter(function(t) {
                return t === e;
              }).length > 1
                ? 'This field must be unique.'
                : null;
            })(e, t.friends)
          );
        },
        v = (function(e) {
          function t() {
            return (
              (0, o.default)(this, t),
              (0, i.default)(this, (0, u.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, d.default)(t, e),
            (0, r.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return s.default.createElement(
                    'div',
                    null,
                    s.default.createElement(
                      g.Form,
                      {
                        onSubmit: function() {
                          return e.modal.open();
                        },
                        id: 'complex-validation-form'
                      },
                      function(t) {
                        t.formApi;
                        var n = t.formState;
                        return s.default.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          s.default.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            s.default.createElement(
                              'label',
                              { htmlFor: 'complex-name' },
                              'First name:'
                            ),
                            s.default.createElement(g.Text, {
                              field: 'name',
                              id: 'complex-name',
                              validate: h
                            }),
                            s.default.createElement(
                              g.Scope,
                              { scope: 'favorite' },
                              s.default.createElement(
                                'label',
                                { htmlFor: 'complex-color' },
                                'Favorite color:'
                              ),
                              s.default.createElement(g.Text, {
                                field: 'color',
                                id: 'complex-color',
                                validate: h
                              }),
                              s.default.createElement(
                                'label',
                                { htmlFor: 'complex-food' },
                                'Favorite food:'
                              ),
                              s.default.createElement(g.Text, {
                                field: 'food',
                                id: 'complex-food',
                                validate: h
                              })
                            ),
                            s.default.createElement(
                              'label',
                              { htmlFor: 'complex-friend-0' },
                              'Friend 1:'
                            ),
                            s.default.createElement(g.Text, {
                              field: 'friends[0]',
                              id: 'complex-friend-0',
                              validate: b
                            }),
                            s.default.createElement(
                              'label',
                              { htmlFor: 'complex-friend-1' },
                              'Friend 2:'
                            ),
                            s.default.createElement(g.Text, {
                              field: 'friends[1]',
                              id: 'complex-friend-1',
                              validate: b
                            }),
                            s.default.createElement(
                              'label',
                              { htmlFor: 'complex-friend-2' },
                              'Friend 3:'
                            ),
                            s.default.createElement(g.Text, {
                              field: 'friends[2]',
                              id: 'complex-friend-2',
                              validate: b
                            }),
                            s.default.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          s.default.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            s.default.createElement('label', null, 'Values:'),
                            s.default.createElement(
                              f.default,
                              { language: 'language-js' },
                              (0, l.default)(n.values, null, 2)
                            ),
                            s.default.createElement('label', null, 'Errors:'),
                            s.default.createElement(
                              f.default,
                              { language: 'language-js' },
                              (0, l.default)(n.errors, null, 2)
                            ),
                            s.default.createElement('label', null, 'Invalid:'),
                            s.default.createElement(
                              f.default,
                              { language: 'language-js' },
                              (0, l.default)(n.invalid, null, 2)
                            )
                          ),
                          s.default.createElement(
                            p.default,
                            {
                              getControl: function(t) {
                                return (e.modal = t);
                              }
                            },
                            s.default.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.default.Component),
        y = (0, c.default)(m.default, function() {
          return s.default.createElement(v, null);
        });
      t.default = y;
    },
    851: function(e, t) {
      e.exports =
        '<h1 id="simple-validation">Simple Validation</h1>\n<p>Simple validation can be achieved by passing a validation function to the input.\nBelow is an example form that has validation functions. The function defined\nwill return an error when the input has less than five characters, or there is\nno value at all, and null otherwise. We pass this validation function to every\ninput and validation will <strong>occur on submission</strong>.</p>\n<p><strong>Try clicking the submit button and see what happens:</strong></p>\n\x3c!-- STORY --\x3e\n\n<p>What just happened? When you clicked on the submit button all of the validation\nfunctions were triggered for each field. Because every validation failed, the\nform never actually called onSubmit. In other words, informed will only\nsubmit a valid form.</p>\n<p><strong>Get rid of the errors by typing at least 5 characters in each field and\nclick the submit button again and see what happens:</strong></p>\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\nconst validate = value =&gt; {\n  return !value || value.length &lt; 5 ? &#39;Field must be at least five characters&#39; : null;\n}\n\n&lt;Form id=&quot;validate-form&quot;&gt;\n  &lt;label htmlFor=&quot;validate-color&quot;&gt;Color:&lt;/label&gt;\n  &lt;Text\n    field=&quot;color&quot;\n    id=&quot;validate-color&quot;\n    validate={validate} /&gt;\n  &lt;label htmlFor=&quot;validate-food&quot;&gt;Food:&lt;/label&gt;\n  &lt;Text\n    field=&quot;food&quot;\n    id=&quot;validate-food&quot;\n    validate={validate} /&gt;\n  &lt;label htmlFor=&quot;validate-car&quot;&gt;Car:&lt;/label&gt;\n  &lt;Text\n    field=&quot;car&quot;\n    id=&quot;validate-car&quot;\n    validate={validate} /&gt;\n  &lt;button type=&quot;submit&quot;&gt;\n    Submit\n  &lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n';
    },
    852: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = l(n(12)),
        r = l(n(38)),
        i = l(n(37)),
        u = l(n(48)),
        d = l(n(47)),
        s = l(n(46)),
        f = a(n(1)),
        c = l(n(17)),
        m = l(n(16)),
        p = l(n(228)),
        g = l(n(851)),
        h = n(15),
        b = function(e) {
          return !e || e.length < 5
            ? 'Field must be at least five characters'
            : null;
        },
        v = (function(e) {
          function t() {
            return (
              (0, r.default)(this, t),
              (0, u.default)(this, (0, d.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, s.default)(t, e),
            (0, i.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return f.default.createElement(
                    'div',
                    null,
                    f.default.createElement(
                      h.Form,
                      {
                        onSubmit: function() {
                          return e.modal.open();
                        },
                        id: 'validate-form'
                      },
                      function(t) {
                        t.formApi;
                        var n = t.formState;
                        return f.default.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          f.default.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            f.default.createElement(
                              'label',
                              { htmlFor: 'validate-color' },
                              'Color:'
                            ),
                            f.default.createElement(h.Text, {
                              field: 'color',
                              id: 'validate-color',
                              validate: b
                            }),
                            f.default.createElement(
                              'label',
                              { htmlFor: 'validate-food' },
                              'Food:'
                            ),
                            f.default.createElement(h.Text, {
                              field: 'food',
                              id: 'validate-food',
                              validate: b
                            }),
                            f.default.createElement(
                              'label',
                              { htmlFor: 'validate-car' },
                              'Car:'
                            ),
                            f.default.createElement(h.Text, {
                              field: 'car',
                              id: 'validate-car',
                              validate: b
                            }),
                            f.default.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          f.default.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            f.default.createElement('label', null, 'Values:'),
                            f.default.createElement(
                              c.default,
                              { language: 'language-js' },
                              (0, o.default)(n.values, null, 2)
                            ),
                            f.default.createElement('label', null, 'Errors:'),
                            f.default.createElement(
                              c.default,
                              { language: 'language-js' },
                              (0, o.default)(n.errors, null, 2)
                            ),
                            f.default.createElement('label', null, 'Invalid:'),
                            f.default.createElement(
                              c.default,
                              { language: 'language-js' },
                              (0, o.default)(n.invalid, null, 2)
                            )
                          ),
                          f.default.createElement(
                            p.default,
                            {
                              getControl: function(t) {
                                return (e.modal = t);
                              }
                            },
                            f.default.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            t
          );
        })(f.Component),
        y = (0, m.default)(g.default, function() {
          return f.default.createElement(v, null);
        });
      t.default = y;
    },
    853: function(e, t) {
      e.exports =
        '<h1 id="async-validation">Async Validation</h1>\n<p>Async validation can be achieved by passing an asyncValidation function to the input.\nBelow is an example form that has validation functions. The synchronous function defined\nwill return an error when the input is empty, and null otherwise. The second asynchronous\nfunction defined will, after two seconds, resolve an error or null depending on what is typed.\nWe pass these validation functions to the username input and validation will <strong>occur on submission</strong>.</p>\n<p><strong>Try clicking the submit button WITH AN EMPTY FIELD! and see what happens:</strong></p>\n\x3c!-- STORY --\x3e\n\n<p>What just happened? When you clicked on the submit button the synchronous\nvalidation function was triggered. Because the field was empty ( if you left it empty )\nit failed synchronous validation, and therefore did not run the async validation or\nactually submit the form.</p>\n<p><strong>Get rid of the synchronous error by typing &quot;FooBar&quot; in the username field, then\nclick the submit button again, WAIT TWO SECONDS, and see what happens:</strong></p>\n<p>The form submitted!! Why? Because both our synchronous and asynchronous validation passed.\nLets make our asynchronous validation fail!</p>\n<p><strong>Ok now type &quot;billy&quot; into the field, click on the submit button, and wait two more seconds.</strong></p>\n<p>The form did NOT submit!! Why? Because asynchronous validation failed.</p>\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\nconst validate = username =&gt; !username || username.trim() === &#39;&#39; ? &#39;Username is a required field&#39; : null\n\nconst asyncValidate = username =&gt; new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; {\n      // Simulate username check\n      if ([&#39;joe&#39;, &#39;tanner&#39;, &#39;billy&#39;, &#39;bob&#39;].includes(username)) {\n        resolve(&#39;That username is taken&#39;);\n      }\n      // Simulate request faulure\n      if (username === &#39;reject&#39;) {\n        reject(&#39;Failure while making call to validate username does not exist&#39;);\n      }\n      // Sumulate username success check\n      resolve(null);\n    }, 2000)\n  }\n)\n\n&lt;Form id=&quot;async-form&quot;&gt;\n  &lt;label htmlFor=&quot;async-username&quot;&gt;Username:&lt;/label&gt;\n  &lt;Text\n    field=&quot;username&quot;\n    id=&quot;async-username&quot;\n    validate={validate} asyncValidate={asyncValidate}/&gt;\n  &lt;button type=&quot;submit&quot;&gt;\n    Submit\n  &lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n<h2 id="on-blur">On Blur</h2>\n<p>Hey this is cool but i want to validate on blur!</p>\n<p><strong>Well Turns out.. you can!! wooooo!</strong></p>\n<pre><code class="language-jsx">//...\n\n&lt;Form id=&quot;async-form&quot;&gt;\n  &lt;label htmlFor=&quot;async-username&quot;&gt;Username:&lt;/label&gt;\n  &lt;Text\n    field=&quot;username&quot;\n    id=&quot;async-username&quot;\n    validate={validate}\n    asyncValidate={asyncValidate}\n    asyncValidateOnBlur\n  /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n';
    },
    854: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = l(n(12)),
        r = l(n(38)),
        i = l(n(37)),
        u = l(n(48)),
        d = l(n(47)),
        s = l(n(46)),
        f = l(n(285)),
        c = a(n(1)),
        m = l(n(17)),
        p = l(n(16)),
        g = l(n(228)),
        h = l(n(853)),
        b = n(15),
        v = function(e) {
          return e && '' !== e.trim() ? null : 'Username is a required field';
        },
        y = function(e) {
          return new f.default(function(t, n) {
            setTimeout(function() {
              ['joe', 'tanner', 'billy', 'bob'].includes(e) &&
                t('That username is taken'),
                'reject' === e &&
                  n(
                    'Failure while making call to validate username does not exist'
                  ),
                t(null);
            }, 2e3);
          });
        },
        x = (function(e) {
          function t() {
            return (
              (0, r.default)(this, t),
              (0, u.default)(this, (0, d.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, s.default)(t, e),
            (0, i.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return c.default.createElement(
                    'div',
                    null,
                    c.default.createElement(
                      b.Form,
                      {
                        onSubmit: function() {
                          return e.modal.open();
                        },
                        id: 'validate-async-form'
                      },
                      function(t) {
                        t.formApi;
                        var n = t.formState;
                        return c.default.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          c.default.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            c.default.createElement(
                              'label',
                              { htmlFor: 'validate-async-username' },
                              'Username:'
                            ),
                            c.default.createElement(b.Text, {
                              field: 'username',
                              id: 'validate-async-username',
                              validate: v,
                              asyncValidate: y
                            }),
                            c.default.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          c.default.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            c.default.createElement('label', null, 'Values:'),
                            c.default.createElement(
                              m.default,
                              { language: 'language-js' },
                              (0, o.default)(n.values, null, 2)
                            ),
                            c.default.createElement('label', null, 'Errors:'),
                            c.default.createElement(
                              m.default,
                              { language: 'language-js' },
                              (0, o.default)(n.errors, null, 2)
                            ),
                            c.default.createElement(
                              'label',
                              null,
                              'Async Errors:'
                            ),
                            c.default.createElement(
                              m.default,
                              { language: 'language-js' },
                              (0, o.default)(n.asyncErrors, null, 2)
                            ),
                            c.default.createElement('label', null, 'Invalid:'),
                            c.default.createElement(
                              m.default,
                              { language: 'language-js' },
                              (0, o.default)(n.invalid, null, 2)
                            )
                          ),
                          c.default.createElement(
                            g.default,
                            {
                              getControl: function(t) {
                                return (e.modal = t);
                              }
                            },
                            c.default.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        F = (0, p.default)(h.default, function() {
          return c.default.createElement(x, null);
        });
      t.default = F;
    },
    855: function(e, t) {
      e.exports =
        '<h1 id="form-api">Form Api</h1>\n<p><strong><code>Informed</code> gives you access to a <code>formApi</code>!</strong></p>\n<p>This api allows you to grab and manipulate values using getters and setters. Below is a table that describes each function available within the formApi.</p>\n<table>\n<thead>\n<tr>\n<th>Function</th>\n<th>Example</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>submitForm</td>\n<td><code>submitForm()</code></td>\n<td>This function will submit the form and trigger some lifecycle events. 1. It will set all the fields to touched. 2. It will call all validators. 3. It will call onSubmit if the form is valid. This function can be called manually however it is also called if you have a <code>&lt;button type=&#39;submit&#39;&gt;</code> within the <code>&lt;Form&gt;</code>.</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>setValue(&#39;greeting&#39;, &#39;Hello&#39;)</code></td>\n<td>Function that takes two parameters, the first is the field name, and the second is the value you want to set it to.</td>\n</tr>\n<tr>\n<td>getValue</td>\n<td><code>getValue(&#39;greeting&#39;)</code></td>\n<td>Function that when given a field name will return its value.</td>\n</tr>\n<tr>\n<td>setTouched</td>\n<td><code>setTouched(&#39;greeting&#39;, true)</code></td>\n<td>Function that takes two parameters, the first is the field name, and the second is true or false.</td>\n</tr>\n<tr>\n<td>getTouched</td>\n<td><code>getTouched(&#39;greeting&#39;)</code></td>\n<td>Function that when given a field name will return whether or not its touched.</td>\n</tr>\n<tr>\n<td>setError</td>\n<td><code>setError(&#39;greeting&#39;, &#39;Error message&#39;)</code></td>\n<td>Function that takes two parameters, the first is the field name, and the second is the error message you want to set it to.</td>\n</tr>\n<tr>\n<td>getError</td>\n<td><code>getError(&#39;greeting&#39;)</code></td>\n<td>Function that when given a field name will return its error.</td>\n</tr>\n<tr>\n<td>setState</td>\n<td><code>setState({...})</code></td>\n<td>Function that sets the whole form state. Note, you can NOT set derived values such as pristine. See State section of the docs for additional details.</td>\n</tr>\n<tr>\n<td>getState</td>\n<td><code>getState()</code></td>\n<td>Function that returns the formState. Note this will only return the state as it existed when the function was called.</td>\n</tr>\n<tr>\n<td>setValues</td>\n<td><code>setValues({ greeting: &#39;hello&#39;})</code></td>\n<td>Function that will set the form values.</td>\n</tr>\n<tr>\n<td>reset</td>\n<td><code>reset()</code></td>\n<td>Function that will reset the form to its initial state.</td>\n</tr>\n<tr>\n<td>fieldExists</td>\n<td><code>fieldExists(&#39;greeting&#39;)</code></td>\n<td>Function that will return true when the field exists on the form.</td>\n</tr>\n</tbody></table>\n<p><strong>&quot;Ok so informed gives us access to this formApi.. but how do i get my hands\non it??</strong></p>\n<p>Thats a great question! There are many ways so lets take a look at a few!</p>\n<p>Below is an example that shows you how to access the form api and use some of\nits functions.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\n&lt;Form id=&quot;form-api-form&quot;&gt;\n  {({ formApi }) =&gt; (\n    &lt;div&gt;\n      &lt;label htmlFor=&quot;form-state-name&quot;&gt;First name:&lt;/label&gt;\n      &lt;Text field=&quot;name&quot; id=&quot;form-api-name&quot; validate={validate} /&gt;\n      &lt;button type=&quot;button&quot; onClick={() =&gt; formApi.setValue(&#39;name&#39;, &#39;Joe&#39;)}&gt;\n        Set Name to &quot;Joe&quot;\n      &lt;/button&gt;\n      &lt;button type=&quot;button&quot; onClick={() =&gt; formApi.setValue(&#39;name&#39;, &#39;Kevin&#39;)}&gt;\n        Set Name to &quot;Kevin&quot;\n      &lt;/button&gt;\n      &lt;button type=&quot;button&quot; onClick={() =&gt; formApi.reset()}&gt;\n        Reset\n      &lt;/button&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n&lt;/Form&gt;;</code></pre>\n<hr>\n<h3 id="what-is-this-magic-">What is this magic?</h3>\n<p>Its not magic, its a Function As A Child, or otherwise known as <a href="https://reactjs.org/docs/render-props.html">render props</a></p>\n<p>There are three ways you can get access to <code>Informed</code>s form api.</p>\n<ol>\n<li>By accessing the <code>formApi</code> as a parameter to a child render function.</li>\n</ol>\n<pre><code class="language-jsx">&lt;Form&gt;\n  {({ formApi }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n&lt;/Form&gt;</code></pre>\n<br/>\n2. By accessing the `formApi` as a parameter to a render prop.\n\n<pre><code class="language-jsx">&lt;Form\n  render={({ formApi }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n/&gt;</code></pre>\n<br/>\n2. By accessing the `formApi` as a prop to a component prop.\n\n<pre><code class="language-jsx">const FormContent = ({ formApi }) =&gt; (\n  &lt;div&gt;\n    &lt;Text field=&quot;hello&quot; /&gt;\n    &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  &lt;/div&gt;\n);\n\n&lt;Form component={FormContent} /&gt;;</code></pre>\n<br/>\nSo if you do need access to the form api, any of these methods will work.\n';
    },
    856: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(1)),
        o = a(n(855)),
        r = a(n(16)),
        i = n(15),
        u = (0, r.default)(o.default, function() {
          return l.default.createElement(
            i.Form,
            { id: 'form-api-form' },
            function(e) {
              var t = e.formApi;
              return l.default.createElement(
                'div',
                null,
                l.default.createElement(
                  'label',
                  { htmlFor: 'form-state-name' },
                  'First name:'
                ),
                l.default.createElement(i.Text, {
                  field: 'name',
                  id: 'form-api-name'
                }),
                l.default.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function() {
                      return t.setValue('name', 'Joe');
                    }
                  },
                  'Set Name to "Joe"'
                ),
                l.default.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function() {
                      return t.setValue('name', 'Kevin');
                    }
                  },
                  'Set Name to "Kevin"'
                ),
                l.default.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function() {
                      return t.reset();
                    }
                  },
                  'Reset'
                ),
                l.default.createElement('button', { type: 'submit' }, 'Submit')
              );
            }
          );
        });
      t.default = u;
    },
    857: function(e, t) {
      e.exports =
        '<h1 id="form-props">Form Props</h1>\n<p><code>Informed</code>s Form element can take many props. Below is table that defines what\nprops are available and what they do.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>children</td>\n<td>node OR func</td>\n<td>A function that is given the form api and form state as props parameter FAAC ( Function As A Child ). Or normal JSX children</td>\n</tr>\n<tr>\n<td>component</td>\n<td>node</td>\n<td>A React component that is given the <code>formApi</code> and <code>formState</code> as props</td>\n</tr>\n<tr>\n<td>render</td>\n<td>func</td>\n<td>A render function that is given the <code>formApi</code> and <code>formState</code> as props</td>\n</tr>\n<tr>\n<td>onSubmit</td>\n<td>func</td>\n<td>A function that gets called when form is submitted successfully. The function receives the values as a parameter</td>\n</tr>\n<tr>\n<td>preSubmit</td>\n<td>func</td>\n<td>Function that is a value filter that happens after validation, and before a successful submission. Use it to scrub and/or clean your values before they are submitted. Whatever you return will NOT replace all of the values in that form&#39;s state, but will be passed to the onSubmit method.</td>\n</tr>\n<tr>\n<td>initialValues</td>\n<td>obj</td>\n<td>Use this if you want to populate the form with initial values.</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>func</td>\n<td>Function that gets called when form updates. Function receives the formState as a parameter.</td>\n</tr>\n<tr>\n<td>onValueChange</td>\n<td>func</td>\n<td>Function that gets called when forms values change. Function receives the values as a parameter.</td>\n</tr>\n<tr>\n<td>dontPreventDefault</td>\n<td>bool</td>\n<td>The default is to always &quot;preventDefault&quot; when a form submits. Pass this to disable &quot;preventingDefault&quot;. You would, for example, pass this in when you want to use a good old form submission using action=&quot;/foo.php&quot; on your form.</td>\n</tr>\n<tr>\n<td>getApi</td>\n<td>func</td>\n<td>To retrieve the form api as a callback, you can pass a function to the <code>getApi</code> prop. Your function will be called with the formApi as the only parameter. You can save this as a reference to easily manipulate your form from outside of the form scope. Note: this is no different then using a ref in react ( same principle ).</td>\n</tr>\n<tr>\n<td>onSubmitFailure</td>\n<td>func</td>\n<td>Function that gets called when submission fails due to errors. Function will receive the errors as a first parameter and asyncErrors as a second parameter.</td>\n</tr>\n</tbody></table>\n';
    },
    858: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      a(n(1));
      var l = a(n(857)),
        o = (0, n(588).doc)(l.default);
      t.default = o;
    },
    859: function(e, t) {
      e.exports =
        '<h1 id="form-state">Form State</h1>\n<p><strong><code>Informed</code> takes care of state so you don&#39;t have to!</strong></p>\n<p>Below is a table that describes each value within a forms state.</p>\n<p><strong>Note:</strong> Initial value is the default value for an attribute, and derived describes\nwhether or not the attribute is derived from other attributes. For example,\ninvalid is derived from the errors attribute and therefore cannot be set directly.</p>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Example</th>\n<th>Initial Value</th>\n<th>Derived</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>values</td>\n<td><code>{name:&#39;Joe&#39;}</code></td>\n<td><code>{}</code></td>\n<td>NO</td>\n<td>Key value pair where key is the form field and value is the value entered or selected.</td>\n</tr>\n<tr>\n<td>touched</td>\n<td><code>{name:true}</code></td>\n<td><code>{}</code></td>\n<td>NO</td>\n<td>Key value pair where key is the form field and value is true or undefined ( touched or untouched ). Submitting form will cause all fields to be touched.</td>\n</tr>\n<tr>\n<td>errors</td>\n<td><code>{name:&#39;Invalid&#39;}</code></td>\n<td><code>{}</code></td>\n<td>NO</td>\n<td>Key value pair where key is the form field and value is the error associated with that field. If a validate function is provided to an input, then when it is called this object will be modified.</td>\n</tr>\n<tr>\n<td>asyncErrors</td>\n<td><code>{name:&#39;Invalid&#39;}</code></td>\n<td><code>{}</code></td>\n<td>NO</td>\n<td>Key value pair where key is the form field and value is the async error associated with that field. If an asyncValidate function is provided to an input, then when it is called this object will be modified.</td>\n</tr>\n<tr>\n<td>invalid</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n<td>YES</td>\n<td>Boolean that is true when form is invalid. A form is invalid when any of its inputs fails its validation function ( if there are errors ). This includes asyncErrors!</td>\n</tr>\n<tr>\n<td>pristine</td>\n<td><code>true</code></td>\n<td><code>true</code></td>\n<td>YES</td>\n<td>Boolean that is true when form is pristine. A form is pristine when it has not been touched &amp;&amp; no values have been entered in any field</td>\n</tr>\n<tr>\n<td>dirty</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n<td>YES</td>\n<td>Boolean that is true when pristine is false</td>\n</tr>\n</tbody></table>\n<p><strong>&quot;Ok so informed takes care of state so I dont have to.. but how do i get my hands\non this state??</strong></p>\n<p>Thats a great question! There are many ways so lets take a look at a few!</p>\n<p>Below is an example that shows you how to access the form state and render out\nthe values that are changing.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\nconst validate = value =&gt; {\n  return !value || value.length &lt; 5 ? &#39;Field must be longer than five characters&#39; : null;\n}\n\n&lt;Form id=&quot;form-state-form&quot;&gt;\n  {({ formState }) =&gt; (\n    &lt;div&gt;\n      &lt;label htmlFor=&quot;form-state-name&quot;&gt;First name:&lt;/label&gt;\n      &lt;Text field=&quot;name&quot; id=&quot;form-state-name&quot; validate={validate}/&gt;\n      &lt;button type=&quot;submit&quot;&gt;\n        Submit\n      &lt;/button&gt;\n      &lt;label&gt;Values:&lt;/label&gt;\n      &lt;code&gt;\n        {JSON.stringify(formState.values)}\n      &lt;/code&gt;\n      &lt;label&gt;Touched:&lt;/label&gt;\n      &lt;code&gt;\n        {JSON.stringify(formState.touched)}\n      &lt;/code&gt;\n      &lt;label&gt;Errors:&lt;/label&gt;\n      &lt;code&gt;\n        {JSON.stringify(formState.errors)}\n      &lt;/code&gt;\n      &lt;label&gt;Async Errors:&lt;/label&gt;\n      &lt;code&gt;\n        {JSON.stringify(formState.asyncErrors)}\n      &lt;/code&gt;\n      &lt;label&gt;Invalid:&lt;/label&gt;\n      &lt;code&gt;\n        {JSON.stringify(formState.invalid)}\n      &lt;/code&gt;\n      &lt;label&gt;Pristine:&lt;/label&gt;\n      &lt;code&gt;\n        {JSON.stringify(formState.pristine)}\n      &lt;/code&gt;\n      &lt;label&gt;Dirty:&lt;/label&gt;\n      &lt;code&gt;\n        {JSON.stringify(formState.dirty)}\n      &lt;/code&gt;\n    &lt;/div&gt;\n  )}\n&lt;/Form&gt;</code></pre>\n<hr>\n<h3 id="what-is-this-magic-">What is this magic?</h3>\n<p>Its not magic, its a Function As A Child, or otherwise known as <a href="https://reactjs.org/docs/render-props.html">render props</a></p>\n<p>There are three ways you can get access to <code>Informed</code>s form state.</p>\n<ol>\n<li>By accessing the <code>formState</code> as a parameter to a child render function.</li>\n</ol>\n<pre><code class="language-jsx">&lt;Form&gt;\n  {({ formState }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n&lt;/Form&gt;</code></pre>\n  <br/>\n  2. By accessing the `formState` as a parameter to a render prop.\n\n<pre><code class="language-jsx">&lt;Form\n  render={({ formState }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n/&gt;</code></pre>\n  <br/>\n  2. By accessing the `formState` as a prop to a component prop.\n\n<pre><code class="language-jsx">const FormContent = ({ formState }) =&gt; (\n  &lt;div&gt;\n    &lt;Text field=&quot;hello&quot; /&gt;\n    &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  &lt;/div&gt;\n);\n\n&lt;Form component={FormContent} /&gt;;</code></pre>\n  <br/>\n  So if you do need access to the form state, any of these methods will work.\n\n<hr>\n<h3 id="ok-so-what-if-i-need-the-state-outside-of-the-form-">Ok so what if i need the state outside of the <code>&lt;Form /&gt;</code> ??</h3>\n<p>Don&#39;t fret! This is also very simple. You have two options:</p>\n<ol>\n<li>Use the Forms <code>onChange</code> prop.</li>\n</ol>\n<pre><code class="language-jsx">&lt;Form onChange={formState =&gt; console.log(formState)}&gt;\n  &lt;Text field=&quot;hello&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n  <br/>\n  2. Use the Forms `getApi` prop, and then use the apis `getState` function.\n\n<pre><code class="language-jsx">class MyAwesomeForm extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Remember! This binding is necessary to make `this` work in the callback\n    this.handleClick = this.handleClick.bind(this);\n    this.setFormApi = this.setFormApi.bind(this);\n  }\n\n  handleClick() {\n    console.log(this.formApi.getState());\n  }\n\n  setFormApi(formApi) {\n    this.formApi = formApi;\n  }\n\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;Form getApi={this.setFormApi}&gt;\n          &lt;Text field=&quot;hello&quot; /&gt;\n          &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n        &lt;/Form&gt;\n        &lt;button onClick={this.handleClick}&gt;Print Form State&lt;/button&gt;\n      &lt;/div&gt;\n    );\n  }\n}</code></pre>\n';
    },
    860: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(859)),
        i = a(n(16)),
        u = n(15),
        d = function(e) {
          return !e || e.length < 5
            ? 'Field must be at least five characters'
            : null;
        },
        s = (0, i.default)(r.default, function() {
          return o.default.createElement(
            u.Form,
            { id: 'form-state-form' },
            function(e) {
              var t = e.formState;
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'label',
                  { htmlFor: 'form-state-name' },
                  'First name:'
                ),
                o.default.createElement(u.Text, {
                  field: 'name',
                  id: 'form-state-name',
                  validate: d
                }),
                o.default.createElement('button', { type: 'submit' }, 'Submit'),
                o.default.createElement('label', null, 'Values:'),
                o.default.createElement('code', null, (0, l.default)(t.values)),
                o.default.createElement('label', null, 'Touched:'),
                o.default.createElement(
                  'code',
                  null,
                  (0, l.default)(t.touched)
                ),
                o.default.createElement('label', null, 'Errors:'),
                o.default.createElement('code', null, (0, l.default)(t.errors)),
                o.default.createElement('label', null, 'Async Errors:'),
                o.default.createElement(
                  'code',
                  null,
                  (0, l.default)(t.asyncErrors)
                ),
                o.default.createElement('label', null, 'Invalid:'),
                o.default.createElement(
                  'code',
                  null,
                  (0, l.default)(t.invalid)
                ),
                o.default.createElement('label', null, 'Pristine:'),
                o.default.createElement(
                  'code',
                  null,
                  (0, l.default)(t.pristine)
                ),
                o.default.createElement('label', null, 'Dirty:'),
                o.default.createElement('code', null, (0, l.default)(t.dirty))
              );
            }
          );
        });
      t.default = s;
    },
    861: function(e, t) {
      e.exports =
        '<h1 id="complex-form">Complex Form</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text, Scope } from &#39;informed&#39;;\n\n&lt;Form id=&quot;complex-form&quot;&gt;\n  &lt;label htmlFor=&quot;complex-name&quot;&gt;First name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;complex-name&quot; /&gt;\n  &lt;Scope scope=&quot;favorite&quot;&gt;\n    &lt;label htmlFor=&quot;complex-color&quot;&gt;Favorite color:&lt;/label&gt;\n    &lt;Text field=&quot;color&quot; id=&quot;complex-color&quot; /&gt;\n    &lt;label htmlFor=&quot;complex-food&quot;&gt;Favorite food:&lt;/label&gt;\n    &lt;Text field=&quot;food&quot; id=&quot;complex-food&quot; /&gt;\n  &lt;/Scope&gt;\n  &lt;label htmlFor=&quot;complex-friend-0&quot;&gt;Friend 1:&lt;/label&gt;\n  &lt;Text field=&quot;friends[0]&quot; id=&quot;complex-friend-0&quot; /&gt;\n  &lt;label htmlFor=&quot;complex-friend-1&quot;&gt;Friend 2:&lt;/label&gt;\n  &lt;Text field=&quot;friends[1]&quot; id=&quot;complex-friend-1&quot; /&gt;\n  &lt;label htmlFor=&quot;complex-friend-2&quot;&gt;Friend 3:&lt;/label&gt;\n  &lt;Text field=&quot;friends[2]&quot; id=&quot;complex-friend-2&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n';
    },
    862: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(17)),
        i = a(n(16)),
        u = a(n(861)),
        d = n(15),
        s = (0, i.default)(u.default, function() {
          return o.default.createElement(
            'div',
            null,
            o.default.createElement(d.Form, { id: 'complex-form' }, function(
              e
            ) {
              e.formApi;
              var t = e.formState;
              return o.default.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                o.default.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  o.default.createElement(
                    'label',
                    { htmlFor: 'complex-name' },
                    'First name:'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'name',
                    id: 'complex-name'
                  }),
                  o.default.createElement(
                    d.Scope,
                    { scope: 'favorite' },
                    o.default.createElement(
                      'label',
                      { htmlFor: 'complex-color' },
                      'Favorite color:'
                    ),
                    o.default.createElement(d.Text, {
                      field: 'color',
                      id: 'complex-color'
                    }),
                    o.default.createElement(
                      'label',
                      { htmlFor: 'complex-food' },
                      'Favorite food:'
                    ),
                    o.default.createElement(d.Text, {
                      field: 'food',
                      id: 'complex-food'
                    })
                  ),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'complex-friend-0' },
                    'Friend 1:'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'friends[0]',
                    id: 'complex-friend-0'
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'complex-friend-1' },
                    'Friend 2:'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'friends[1]',
                    id: 'complex-friend-1'
                  }),
                  o.default.createElement(
                    'label',
                    { htmlFor: 'complex-friend-2' },
                    'Friend 3:'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'friends[2]',
                    id: 'complex-friend-2'
                  }),
                  o.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                o.default.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  o.default.createElement('label', null, 'Values:'),
                  o.default.createElement(
                    r.default,
                    { language: 'language-js' },
                    (0, l.default)(t.values, null, 2)
                  ),
                  o.default.createElement('label', null, 'Touched:'),
                  o.default.createElement(
                    r.default,
                    { language: 'language-js' },
                    (0, l.default)(t.touched, null, 2)
                  )
                )
              );
            })
          );
        });
      t.default = s;
    },
    863: function(e, t) {
      e.exports =
        '<h1 id="basic-form">Basic Form</h1>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">&lt;Form id=&quot;basic-form&quot;&gt;\n  &lt;label htmlFor=&quot;basic-name&quot;&gt;First name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;basic-name&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n';
    },
    864: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(17)),
        i = a(n(16)),
        u = a(n(863)),
        d = n(15),
        s = (0, i.default)(u.default, function() {
          return o.default.createElement(
            'div',
            null,
            o.default.createElement(d.Form, { id: 'basic-form' }, function(e) {
              e.formApi;
              var t = e.formState;
              return o.default.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                o.default.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  o.default.createElement(
                    'label',
                    { htmlFor: 'basic-name' },
                    'First name:'
                  ),
                  o.default.createElement(d.Text, {
                    field: 'name',
                    id: 'basic-name'
                  }),
                  o.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                o.default.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  o.default.createElement('label', null, 'Values:'),
                  o.default.createElement(
                    r.default,
                    { language: 'language-js' },
                    (0, l.default)(t.values, null, 2)
                  ),
                  o.default.createElement('label', null, 'Touched:'),
                  o.default.createElement(
                    r.default,
                    { language: 'language-js' },
                    (0, l.default)(t.touched, null, 2)
                  )
                )
              );
            })
          );
        });
      t.default = s;
    },
    865: function(e, t) {
      e.exports =
        '<h2 id="form-state">Form State</h2>\n<p><strong>&quot;Ok so informed takes care of state so I dont have to.. but how do i get my hands\non this &#39;awesome stuff&#39;??&quot;</strong></p>\n<p>Thats a great question! There are many ways so lets take a look at a few!</p>\n<p>Below is the same example as above, except this time, we show you how to access\nthe form state and render out the values that are changing.</p>\n<p>**\nNote: for a full list of the available values within formState go to the\nformState section of these docs\n**</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\n&lt;Form id=&quot;state-form&quot;&gt;\n  {({ formState }) =&gt; (\n    &lt;div&gt;\n      &lt;label htmlFor=&quot;state-name&quot;&gt;First name:&lt;/label&gt;\n      &lt;Text field=&quot;name&quot; id=&quot;state-name&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n      &lt;label&gt;Values:&lt;/label&gt;\n      &lt;code&gt;{JSON.stringify(formState.values)}&lt;/code&gt;\n      &lt;label&gt;Touched:&lt;/label&gt;\n      &lt;code&gt;{JSON.stringify(formState.touched)}&lt;/code&gt;\n    &lt;/div&gt;\n  )}\n&lt;/Form&gt;;</code></pre>\n<hr>\n<h3 id="what-is-this-magic-">What is this magic?</h3>\n<p>Its not magic, its a Function As A Child, or otherwise known as <a href="https://reactjs.org/docs/render-props.html">render props</a></p>\n<p>There are three ways you can get access to <code>Informed</code>s form state.</p>\n<ol>\n<li>By accessing the <code>formState</code> as a parameter to a child render function.</li>\n</ol>\n<pre><code class="language-jsx">&lt;Form&gt;\n  {({ formState }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n&lt;/Form&gt;</code></pre>\n  <br/>\n  2. By accessing the `formState` as a parameter to a render prop.\n\n<pre><code class="language-jsx">&lt;Form\n  render={({ formState }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n/&gt;</code></pre>\n  <br/>\n  2. By accessing the `formState` as a prop to a component prop.\n\n<pre><code class="language-jsx">const FormContent = ({ formState }) =&gt; (\n  &lt;div&gt;\n    &lt;Text field=&quot;hello&quot; /&gt;\n    &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  &lt;/div&gt;\n);\n\n&lt;Form component={FormContent} /&gt;;</code></pre>\n  <br/>\n  So if you do need access to the form state, any of these methods will work.\n\n<hr>\n<h3 id="ok-so-what-if-i-need-the-state-outside-of-the-form-">Ok so what if i need the state outside of the <code>&lt;Form /&gt;</code> ??</h3>\n<p>Don&#39;t fret! This is also very simple. You have two options:</p>\n<ol>\n<li>Use the Forms <code>onChange</code> prop.</li>\n</ol>\n<pre><code class="language-jsx">&lt;Form onChange={formState =&gt; console.log(formState)}&gt;\n  &lt;Text field=&quot;hello&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;</code></pre>\n  <br/>\n  2. Use the Forms `getApi` prop, and then use the apis `getState` function.\n\n<pre><code class="language-jsx">class MyAwesomeForm extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Remember! This binding is necessary to make `this` work in the callback\n    this.handleClick = this.handleClick.bind(this);\n    this.setFormApi = this.setFormApi.bind(this);\n  }\n\n  handleClick() {\n    console.log(this.formApi.getState());\n  }\n\n  setFormApi(formApi) {\n    this.formApi = formApi;\n  }\n\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;Form getApi={this.setFormApi}&gt;\n          &lt;Text field=&quot;hello&quot; /&gt;\n          &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n        &lt;/Form&gt;\n        &lt;button onClick={this.handleClick}&gt;Print Form State&lt;/button&gt;\n      &lt;/div&gt;\n    );\n  }\n}</code></pre>\n<hr>\n<h3 id="form-api-">Form Api ??</h3>\n<p><strong>Yes what a beautiful segue into the formApi!</strong></p>\n<p><code>Informed</code> also gives you access to a <code>formApi</code>. This api allows you to grab\nand manipulate values using getters and setters. In the previous example, we\nactually used a prop called <code>getApi</code> in order to getAccess to informed&#39;s api\nexternally. Then we used the <code>getState</code> function to log out the state when\nour external button was clicked.</p>\n<p>**\nNote: for a full list of the available functions within formApi go to the\nformApi section of these docs\n**</p>\n<p>There are three ways you can get access to <code>Informed</code>s form api.</p>\n<ol>\n<li>By accessing the <code>formApi</code> as a parameter to a child render function.</li>\n</ol>\n<pre><code class="language-jsx">&lt;Form&gt;\n  {({ formApi }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n&lt;/Form&gt;</code></pre>\n  <br/>\n  2. By accessing the `formApi` as a parameter to a render prop.\n\n<pre><code class="language-jsx">&lt;Form\n  render={({ formApi }) =&gt; (\n    &lt;div&gt;\n      &lt;Text field=&quot;hello&quot; /&gt;\n      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n    &lt;/div&gt;\n  )}\n/&gt;</code></pre>\n  <br/>\n  2. By accessing the `formApi` as a prop to a component prop.\n\n<pre><code class="language-jsx">const FormContent = ({ formApi }) =&gt; (\n  &lt;div&gt;\n    &lt;Text field=&quot;hello&quot; /&gt;\n    &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n  &lt;/div&gt;\n);\n\n&lt;Form component={FormContent} /&gt;;</code></pre>\n  <br/>\n  So if you do need access to the form api, any of these methods will work.\n';
    },
    866: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = (a(n(17)), a(n(16))),
        i = a(n(865)),
        u = n(15),
        d = (0, r.default)(i.default, function() {
          return o.default.createElement(u.Form, { id: 'state-form' }, function(
            e
          ) {
            var t = e.formState;
            return o.default.createElement(
              'div',
              null,
              o.default.createElement(
                'label',
                { htmlFor: 'state-name' },
                'First name:'
              ),
              o.default.createElement(u.Text, {
                field: 'name',
                id: 'state-name'
              }),
              o.default.createElement('button', { type: 'submit' }, 'Submit'),
              o.default.createElement('label', null, 'Values:'),
              o.default.createElement(
                'code',
                null,
                (0, l.default)(t.values, null, 2)
              ),
              o.default.createElement('label', null, 'Touched:'),
              o.default.createElement(
                'code',
                null,
                (0, l.default)(t.touched, null, 2)
              )
            );
          });
        });
      t.default = d;
    },
    867: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.BasicRadioGroup = void 0);
      var o = l(n(283)),
        r = l(n(38)),
        i = l(n(37)),
        u = l(n(48)),
        d = l(n(47)),
        s = l(n(46)),
        f = a(n(1)),
        c = n(106),
        m = l(n(145)),
        p = (function(e) {
          function t() {
            return (
              (0, r.default)(this, t),
              (0, u.default)(this, (0, d.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, s.default)(t, e),
            (0, i.default)(t, [
              {
                key: 'render',
                value: function() {
                  return f.default.createElement(
                    c.GroupContext.Provider,
                    { value: this.groupContext },
                    this.props.children
                  );
                }
              },
              {
                key: 'groupContext',
                get: function() {
                  return {
                    radioGroupApi: (0, o.default)({}, this.props.fieldApi, {
                      onChange: this.props.onChange,
                      onBlur: this.props.onBlur
                    }),
                    radioGroupState: this.props.fieldState
                  };
                }
              }
            ]),
            t
          );
        })(f.Component);
      t.BasicRadioGroup = p;
      var g = (0, m.default)(p);
      t.default = g;
    },
    868: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.BasicCheckbox = void 0);
      var l = a(n(34)),
        o = a(n(49)),
        r = a(n(1)),
        i = a(n(145)),
        u = function(e) {
          var t = e.fieldApi,
            n = e.fieldState,
            a = (0, o.default)(e, ['fieldApi', 'fieldState']),
            i = n.value,
            u = t.setValue,
            d = t.setTouched,
            s = a.onChange,
            f = a.onBlur,
            c = a.field,
            m = (a.initialValue, a.forwardedRef),
            p = (0, o.default)(a, [
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'forwardedRef'
            ]);
          return r.default.createElement(
            'input',
            (0, l.default)({}, p, {
              name: c,
              ref: m,
              checked: !!i,
              onChange: function(e) {
                u(e.target.checked), s && s(e);
              },
              onBlur: function(e) {
                d(), f && f(e);
              },
              type: 'checkbox'
            })
          );
        };
      t.BasicCheckbox = u;
      var d = (0, i.default)(u);
      t.default = d;
    },
    869: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(34)),
        o = a(n(49)),
        r = a(n(1)),
        i = function(e) {
          var t = e.value,
            n = e.forwardedRef,
            a = e.children,
            i = (0, o.default)(e, ['value', 'forwardedRef', 'children']);
          return r.default.createElement(
            'option',
            (0, l.default)({ ref: n, value: t, key: t }, i),
            a
          );
        };
      t.default = i;
    },
    876: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.BasicSelect = void 0);
      var l = a(n(34)),
        o = a(n(49)),
        r = a(n(875)),
        i = a(n(38)),
        u = a(n(37)),
        d = a(n(48)),
        s = a(n(47)),
        f = a(n(46)),
        c = a(n(157)),
        m = a(n(1)),
        p = a(n(145)),
        g = (function(e) {
          function t(e) {
            var n;
            return (
              (0, i.default)(this, t),
              ((n = (0, d.default)(
                this,
                (0, s.default)(t).call(this, e)
              )).handleChange = n.handleChange.bind(
                (0, c.default)((0, c.default)(n))
              )),
              n
            );
          }
          return (
            (0, f.default)(t, e),
            (0, u.default)(t, [
              {
                key: 'handleChange',
                value: function(e) {
                  var t = (0, r.default)(this.refs.select)
                    .filter(function(e) {
                      return e.selected;
                    })
                    .map(function(e) {
                      return e.value;
                    });
                  this.props.fieldApi.setValue(
                    this.props.multiple ? t : t[0] || ''
                  ),
                    this.props.onChange && this.props.onChange(e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.fieldApi,
                    n = e.fieldState,
                    a = (0, o.default)(e, ['fieldApi', 'fieldState']),
                    r = n.value,
                    i = (t.setValue, t.setTouched),
                    u = (a.onChange, a.onBlur),
                    d = a.field,
                    s = (a.initialValue, a.forwardedRef, a.children),
                    f = a.multiple,
                    c = (0, o.default)(a, [
                      'onChange',
                      'onBlur',
                      'field',
                      'initialValue',
                      'forwardedRef',
                      'children',
                      'multiple'
                    ]);
                  return m.default.createElement(
                    'select',
                    (0, l.default)({}, c, {
                      multiple: f,
                      name: d,
                      ref: 'select',
                      value: r || (f ? [] : ''),
                      onChange: this.handleChange,
                      onBlur: function(e) {
                        i(), u && u(e);
                      }
                    }),
                    s
                  );
                }
              }
            ]),
            t
          );
        })(m.default.Component);
      t.BasicSelect = g;
      var h = (0, p.default)(g);
      t.default = h;
    },
    877: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.BasicTextArea = void 0);
      var l = a(n(34)),
        o = a(n(49)),
        r = a(n(1)),
        i = a(n(145)),
        u = function(e) {
          var t = e.fieldApi,
            n = e.fieldState,
            a = (0, o.default)(e, ['fieldApi', 'fieldState']),
            i = n.value,
            u = t.setValue,
            d = t.setTouched,
            s = a.onChange,
            f = a.onBlur,
            c = a.field,
            m = (a.initialValue, a.forwardedRef),
            p = (0, o.default)(a, [
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'forwardedRef'
            ]);
          return r.default.createElement(
            'textarea',
            (0, l.default)({}, p, {
              name: c,
              ref: m,
              value: i || '',
              onChange: function(e) {
                u(e.target.value), s && s(e);
              },
              onBlur: function(e) {
                d(), f && f(e);
              }
            })
          );
        };
      t.BasicTextArea = u;
      var d = (0, i.default)(u);
      t.default = d;
    },
    878: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.BasicRadio = void 0);
      var l = a(n(34)),
        o = a(n(49)),
        r = a(n(1)),
        i = a(n(580)),
        u = function(e) {
          var t = e.radioGroupApi,
            n = e.radioGroupState,
            a = (0, o.default)(e, ['radioGroupApi', 'radioGroupState']),
            i = n.value,
            u = t.setValue,
            d = t.setTouched,
            s = t.onChange,
            f = t.onBlur,
            c = a.value,
            m = a.onChange,
            p = a.onBlur,
            g = a.field,
            h = (a.initialValue, a.forwardedRef),
            b = (0, o.default)(a, [
              'value',
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'forwardedRef'
            ]);
          return r.default.createElement(
            'input',
            (0, l.default)({}, b, {
              name: g,
              ref: h,
              value: c,
              checked: i === c,
              onChange: function(e) {
                e.target.checked && (u(c), m && m(e), s && s(e));
              },
              onBlur: function(e) {
                d(), p && p(e), f && f(e);
              },
              type: 'radio'
            })
          );
        };
      t.BasicRadio = u;
      var d = (0, i.default)(u);
      t.default = d;
    },
    879: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.BasicText = void 0);
      var l = a(n(34)),
        o = a(n(49)),
        r = a(n(1)),
        i = a(n(145)),
        u = function(e) {
          var t = e.fieldApi,
            n = e.fieldState,
            a = (0, o.default)(e, ['fieldApi', 'fieldState']),
            i = n.value,
            u = t.setValue,
            d = t.setTouched,
            s = a.onChange,
            f = a.onBlur,
            c = a.field,
            m = (a.initialValue, a.forwardedRef),
            p = (0, o.default)(a, [
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'forwardedRef'
            ]);
          return r.default.createElement(
            'input',
            (0, l.default)({}, p, {
              name: c,
              ref: m,
              value: i || 0 === i ? i : '',
              onChange: function(e) {
                u(e.target.value), s && s(e);
              },
              onBlur: function(e) {
                d(), f && f(e);
              }
            })
          );
        };
      t.BasicText = u;
      var d = (0, i.default)(u);
      t.default = d;
    },
    880: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(38)),
        o = a(n(37)),
        r = (function() {
          function e(t, n, a) {
            (0, l.default)(this, e),
              (this.field = t),
              (this.config = a),
              (this.api = n);
          }
          return (
            (0, o.default)(e, [
              {
                key: 'validate',
                value: function(e) {
                  if (this.config.validate)
                    return this.config.validate(this.api.getValue(), e);
                }
              },
              {
                key: 'asyncValidate',
                value: function(e) {
                  if (this.config.asyncValidate)
                    return this.config.asyncValidate(this.api.getValue(), e);
                }
              },
              {
                key: 'updateConfig',
                value: function(e) {
                  this.config = e;
                }
              }
            ]),
            e
          );
        })();
      t.default = r;
    },
    881: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = l(n(38)),
        r = l(n(37)),
        i = l(n(48)),
        u = l(n(47)),
        d = l(n(46)),
        s = l(n(283)),
        f = a(n(1)),
        c = n(106),
        m = l(n(282)),
        p = l(n(584)),
        g = l(n(583)),
        h = function(e, t, n, a) {
          return {
            formApi: (0, s.default)({}, t, {
              getValue: function(n) {
                return t.getValue(''.concat(e, '.').concat(n));
              },
              setValue: function(n, a) {
                return t.setValue(''.concat(e, '.').concat(n), a);
              },
              getTouched: function(n) {
                return t.getTouched(''.concat(e, '.').concat(n));
              },
              setTouched: function(n, a) {
                return t.setTouched(''.concat(e, '.').concat(n), a);
              },
              getError: function(n) {
                return t.getError(''.concat(e, '.').concat(n));
              },
              setError: function(n, a) {
                return t.setError(''.concat(e, '.').concat(n), a);
              },
              getAsyncError: function(n) {
                return t.getAsyncError(''.concat(e, '.').concat(n));
              },
              getFullField: function(n) {
                return ''.concat(t.getFullField(e), '.').concat(n);
              }
            }),
            formState: n,
            controller: a
          };
        },
        b = (function(e) {
          function t(e) {
            var n;
            (0, o.default)(this, t),
              (n = (0, i.default)(this, (0, u.default)(t).call(this, e)));
            var a = e.scope,
              l = e.formApi,
              r = e.formState,
              d = e.controller;
            return (n.formContext = h(a, l, r, d)), n;
          }
          return (
            (0, d.default)(t, e),
            (0, r.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.children;
                  return f.default.createElement(
                    c.FormContext.Provider,
                    { value: this.formContext },
                    e
                  );
                }
              }
            ]),
            t
          );
        })(f.Component),
        v = (0, p.default)((0, g.default)((0, m.default)(b)));
      t.default = v;
    },
    882: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var a = function(e) {
        return e
          .replace(/\[(\d+)]/g, '.__int__$1')
          .replace(/\['([^.]+)']/g, '.$1')
          .split('.')
          .map(function(e) {
            return 0 === e.indexOf('__int__')
              ? parseInt(e.substring(7), 10)
              : e;
          });
      };
      t.default = a;
    },
    883: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(38)),
        r = a(n(37)),
        i = a(n(234)),
        u = a(n(585)),
        d = a(n(590)),
        s = a(n(882));
      function f(e) {
        return Array.isArray(e);
      }
      function c(e) {
        return (
          !Array.isArray(e) && 'object' === (0, d.default)(e) && null !== e
        );
      }
      var m = function e(t) {
          if (c(t)) {
            var n = new u.default();
            return (
              (0, i.default)(t).forEach(function(a) {
                var l = e(t[a]);
                null != l && n.set(a, l);
              }),
              n
            );
          }
          if (f(t)) {
            var a = new u.default();
            return (
              t.forEach(function(t, n) {
                var l = e(t);
                null != l && a.set(n, l);
              }),
              a
            );
          }
          return t;
        },
        p = (function() {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (0, o.default)(this, e),
              (this.object = JSON.parse((0, l.default)(t))),
              (this.map = m(this.object)),
              (this.paths = new u.default());
          }
          return (
            (0, r.default)(e, [
              {
                key: 'empty',
                value: function() {
                  return 0 === this.map.size;
                }
              },
              {
                key: 'rebuild',
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.object = JSON.parse((0, l.default)(e))),
                    (this.map = m(this.object));
                }
              },
              {
                key: 'get',
                value: function(e) {
                  var t = this.paths.get(e);
                  t || ((t = (0, s.default)(e)), this.paths.set(e, t));
                  var n = function e(n, a, l, o) {
                    if (null != n)
                      return null == l
                        ? n[a]
                        : e(n[a], t[o + 1], t[o + 2], o + 1);
                  };
                  return n(this.object, t[0], t[1], 0);
                }
              },
              {
                key: 'set',
                value: function(e, t, n) {
                  var a = this.paths.get(e);
                  a || ((a = (0, s.default)(e)), this.paths.set(e, a));
                  var l = function e(l, o, r, i, d) {
                    if (null != l)
                      if (null != i) {
                        null != t &&
                          ('number' != typeof i ||
                            f(l[r]) ||
                            ((l[r] = []), o.set(r, new u.default())),
                          'number' == typeof i ||
                            c(l[r]) ||
                            ((l[r] = {}), o.set(r, new u.default())));
                        var s = c(l[r]) || f(l[r]) ? o.get(r) : o;
                        e(l[r], s, a[d + 1], a[d + 2], d + 1),
                          0 === s.size && (delete l[r], o.delete(r));
                      } else
                        null == t
                          ? (f(l) && n ? l.splice(r, 1) : delete l[r],
                            o.delete(r))
                          : ((l[r] = t), o.set(r, t));
                  };
                  l(this.object, this.map, a[0], a[1], 0);
                }
              },
              {
                key: 'delete',
                value: function(e) {
                  this.set(e, null, !0), this.paths.delete(e);
                }
              }
            ]),
            e
          );
        })();
      t.default = p;
    },
    888: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(585)),
        o = a(n(285)),
        r = a(n(887)),
        i = a(n(884)),
        u = a(n(12)),
        d = a(n(38)),
        s = a(n(37)),
        f = a(n(48)),
        c = a(n(47)),
        m = a(n(46)),
        p = a(n(157)),
        g = a(n(284)),
        h = a(n(883)),
        b = (function(e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              (0, d.default)(this, t),
              (e = (0, f.default)(this, (0, c.default)(t).call(this))),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'valid',
                function() {
                  return e.errors.empty() && e.asyncErrors.empty();
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'getFormState',
                function() {
                  return JSON.parse((0, u.default)(e.state));
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'setFormState',
                function(t) {
                  e.values.rebuild(t.values),
                    e.touched.rebuild(t.touched),
                    e.errors.rebuild(t.errors),
                    e.asyncErrors.rebuild(),
                    e.emit('change', e.state),
                    e.emit('values', e.state.values),
                    e.emit('update', e.state);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'setValues',
                function(t) {
                  e.values.rebuild(t),
                    e.emit('change', e.state),
                    e.emit('values', e.state.values),
                    e.emit('update', e.state);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'validateAsync',
                (function() {
                  var t = (0, i.default)(
                    r.default.mark(function t(n, a) {
                      var l, o, i;
                      return r.default.wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (l = Math.random()),
                                  e.validationPromiseIDs.set(a, l),
                                  (t.prev = 2),
                                  (o = n.asyncValidate(e.state.values)),
                                  (t.next = 6),
                                  o
                                );
                              case 6:
                                if (
                                  ((i = t.sent),
                                  e.validationPromiseIDs.get(a) === l)
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt('return');
                              case 9:
                                e.asyncErrors.set(a, i), (t.next = 14);
                                break;
                              case 12:
                                (t.prev = 12), (t.t0 = t.catch(2));
                              case 14:
                                e.notify(n.config.notify),
                                  e.emit('change', e.state),
                                  e.emit('field', a);
                              case 17:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 12]]
                      );
                    })
                  );
                  return function(e, n) {
                    return t.apply(this, arguments);
                  };
                })()
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'setValue',
                function(t, n) {
                  var a = e.fields.get(t);
                  e.values.set(t, a.config.mask ? a.config.mask(n) : n),
                    a.config.validateOnChange &&
                      (e.errors.set(t, a.validate(e.state.values)),
                      e.notify(a.config.notify)),
                    e.emit('change', e.state),
                    e.emit('values', e.state.values),
                    e.emit('field', t),
                    a.config.onValueChange &&
                      a.config.onValueChange(e.values.get(t));
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'setTouched',
                function(t) {
                  var n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  e.touched.set(t, n);
                  var a = e.fields.get(t);
                  a.config.validateOnBlur &&
                    (e.errors.set(t, a.validate(e.state.values)),
                    e.notify(a.config.notify)),
                    a.config.asyncValidateOnBlur && e.validateAsync(a, t),
                    e.emit('change', e.state),
                    e.emit('field', t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'setError',
                function(t, n) {
                  e.errors.set(t, n),
                    e.emit('change', e.state),
                    e.emit('field', t);
                  var a = e.fields.get(t);
                  e.notify(a.config.notify);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'getValue',
                function(t) {
                  return e.values.get(t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'getTouched',
                function(t) {
                  return e.touched.get(t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'getError',
                function(t) {
                  return e.errors.get(t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'getAsyncError',
                function(t) {
                  return e.asyncErrors.get(t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'getFullField',
                function(e) {
                  return e;
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'register',
                function(t, n) {
                  e.fields.set(t, n),
                    null != n.config.initialValue &&
                      e.values.set(t, n.config.initialValue),
                    n.config.validateOnMount &&
                      e.errors.set(t, n.validate(e.state.values)),
                    e.emit('change', e.state),
                    e.emit('field', t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'remove',
                function(t) {
                  e.fields.delete(t),
                    e.values.delete(t),
                    e.touched.delete(t),
                    e.errors.delete(t),
                    e.asyncErrors.delete(t),
                    e.emit('change', e.state);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'deregister',
                function(t) {
                  e.remove(t), e.emit('change', e.state), e.emit('field', t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'reset',
                function() {
                  e.values.rebuild(e.config.initialValues),
                    e.touched.rebuild(),
                    e.errors.rebuild(),
                    e.asyncErrors.rebuild(),
                    e.fields.forEach(function(t) {
                      t.config.initialValue &&
                        e.values.set(t.field, t.config.initialValue);
                    }),
                    e.emit('change', e.state),
                    e.emit('update', e.state);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'fieldExists',
                function(t) {
                  return !!e.fields.get(t);
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'notify',
                function(t) {
                  t &&
                    (t.forEach(function(t) {
                      var n = e.fields.get(t);
                      if (!n)
                        throw new Error(
                          'Cant notify field '.concat(
                            t,
                            ' as it does not exist!'
                          )
                        );
                      e.errors.set(t, n.validate(e.state.values)),
                        e.emit('field', t);
                    }),
                    e.emit('change', e.state));
                }
              ),
              (0, g.default)(
                (0, p.default)((0, p.default)(e)),
                'submitForm',
                (function() {
                  var t = (0, i.default)(
                    r.default.mark(function t(n) {
                      var a;
                      return r.default.wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  n &&
                                    !e.config.dontPreventDefault &&
                                    n.preventDefault(n),
                                  (a = []),
                                  e.fields.forEach(function(t) {
                                    var n = t.field;
                                    e.touched.set(n, !0),
                                      e.errors.set(
                                        n,
                                        t.validate(e.state.values)
                                      ),
                                      t.asyncValidate &&
                                        (e.errors.get(n) ||
                                          a.push(function() {
                                            return e.validateAsync(t, n);
                                          }));
                                  }),
                                  (t.next = 5),
                                  o.default.all(
                                    a.map(function(e) {
                                      return e();
                                    })
                                  )
                                );
                              case 5:
                                e.emit('change', e.state),
                                  e.emit('update', e.state),
                                  e.valid()
                                    ? (e.hooks.preSubmit &&
                                        (e.values.rebuild(
                                          e.hooks.preSubmit(
                                            JSON.parse(
                                              (0, u.default)(e.state.values)
                                            )
                                          )
                                        ),
                                        e.emit('change', e.state),
                                        e.emit('update', e.state)),
                                      e.hooks.onSubmit &&
                                        e.hooks.onSubmit(
                                          JSON.parse(
                                            (0, u.default)(e.state.values)
                                          )
                                        ))
                                    : e.hooks.onSubmitFailure &&
                                      e.hooks.onSubmitFailure(
                                        JSON.parse(
                                          (0, u.default)(e.state.errors)
                                        ),
                                        JSON.parse(
                                          (0, u.default)(e.state.asyncErrors)
                                        )
                                      );
                              case 8:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })()
              ),
              e.setMaxListeners(0),
              (e.hooks = n),
              (e.config = a),
              (e.values = new h.default(a.initialValues)),
              (e.touched = new h.default()),
              (e.errors = new h.default()),
              (e.asyncErrors = new h.default()),
              (e.api = {
                setValue: e.setValue,
                getValue: e.getValue,
                setTouched: e.setTouched,
                getTouched: e.getTouched,
                setError: e.setError,
                getError: e.getError,
                getAsyncError: e.getAsyncError,
                getFullField: e.getFullField,
                submitForm: e.submitForm,
                getState: e.getFormState,
                setState: e.setFormState,
                setValues: e.setValues,
                reset: e.reset,
                notify: e.notify,
                fieldExists: e.fieldExists
              }),
              (e.fields = new l.default()),
              (e.validationPromiseIDs = new l.default()),
              n.getApi && n.getApi(e.api),
              e
            );
          }
          return (
            (0, m.default)(t, e),
            (0, s.default)(t, [
              {
                key: 'state',
                get: function() {
                  return {
                    values: this.values.object,
                    touched: this.touched.object,
                    errors: this.errors.object,
                    asyncErrors: this.asyncErrors.object,
                    pristine: this.pristine,
                    dirty: this.dirty,
                    invalid: this.invalid
                  };
                }
              },
              {
                key: 'pristine',
                get: function() {
                  return this.touched.empty() && this.values.empty();
                }
              },
              {
                key: 'dirty',
                get: function() {
                  return !this.pristine;
                }
              },
              {
                key: 'invalid',
                get: function() {
                  return !this.errors.empty() || !this.asyncErrors.empty();
                }
              }
            ]),
            t
          );
        })(n(238).EventEmitter);
      t.default = b;
    },
    890: function(e, t, n) {
      'use strict';
      var a = n(78),
        l = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = l(n(34)),
        r = l(n(49)),
        i = l(n(38)),
        u = l(n(37)),
        d = l(n(48)),
        s = l(n(47)),
        f = l(n(46)),
        c = a(n(1)),
        m = n(106),
        p = l(n(888)),
        g = (function(e) {
          function t(e) {
            var n;
            (0, i.default)(this, t),
              (n = (0, d.default)(this, (0, s.default)(t).call(this, e)));
            var a = e.onSubmit,
              l = e.preSubmit,
              o = e.getApi,
              r = e.dontPreventDefault,
              u = e.onSubmitFailure,
              f = e.initialValues;
            return (
              (n.controller = new p.default(
                { onSubmit: a, getApi: o, preSubmit: l, onSubmitFailure: u },
                { dontPreventDefault: r, initialValues: f }
              )),
              n.controller.on('change', function() {
                return n.forceUpdate();
              }),
              n.controller.on('change', function(t) {
                e.onChange && e.onChange(t);
              }),
              n.controller.on('values', function(t) {
                e.onValueChange && e.onValueChange(t);
              }),
              n
            );
          }
          return (
            (0, f.default)(t, e),
            (0, u.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = (e.children,
                    e.component,
                    e.render,
                    e.onSubmit,
                    e.preSubmit,
                    e.getApi,
                    e.dontPreventDefault,
                    e.onSubmitFailure,
                    e.initialValues,
                    e.onValueChange,
                    e.onChange,
                    (0, r.default)(e, [
                      'children',
                      'component',
                      'render',
                      'onSubmit',
                      'preSubmit',
                      'getApi',
                      'dontPreventDefault',
                      'onSubmitFailure',
                      'initialValues',
                      'onValueChange',
                      'onChange'
                    ]));
                  return c.default.createElement(
                    m.FormContext.Provider,
                    { value: this.formContext },
                    c.default.createElement(
                      'form',
                      (0, o.default)({}, t, {
                        onReset: this.formContext.formApi.reset,
                        onSubmit: this.formContext.formApi.submitForm
                      }),
                      this.content
                    )
                  );
                }
              },
              {
                key: 'formContext',
                get: function() {
                  return {
                    formApi: this.controller.api,
                    formState: this.controller.state,
                    controller: this.controller
                  };
                }
              },
              {
                key: 'content',
                get: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.component,
                    a = e.render,
                    l = this.formContext;
                  return n
                    ? c.default.createElement(n, l, t)
                    : a
                      ? a(l)
                      : 'function' == typeof t
                        ? t(l)
                        : t;
                }
              }
            ]),
            t
          );
        })(c.Component);
      t.default = g;
    },
    891: function(e, t) {
      e.exports =
        '<h1 id="intro">Intro</h1>\n<p>Say hello to the best react form library you have ever used! <code>Informed</code> is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, and create custom inputs.</p>\n<p>Check out our <a href="https://github.com/joepuzzo/informed">GitHub</a>!</p>\n<p><a href="https://www.npmjs.com/package/informed"><img src="https://img.shields.io/npm/v/informed.svg" alt="npmversion"></a>\n<a href="https://spectrum.chat/informed"><img src="https://img.shields.io/badge/slack-informed--chat-blue.svg" alt="Informed-Chat"></a>\n<a href="https://travis-ci.org/joepuzzo/informed"><img src="https://travis-ci.org/joepuzzo/informed.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/joepuzzo/informed?branch=master"><img src="https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h2 id="getting-started">Getting Started</h2>\n<h5 id="install-with-npm">Install with npm</h5>\n<pre><code>npm install --save informed</code></pre><hr>\n<h4 id="having-fun">Having Fun</h4>\n<p>Alright its time to have some fun! The code below is all you need to get\nstarted. Go ahead and play around with the form below, check out the code\nsnippet, and then you can read about what the heck is going on.</p>\n\x3c!-- STORY --\x3e\n\n<pre><code class="language-jsx">import { Form, Text } from &#39;informed&#39;;\n\n&lt;Form id=&quot;intro-form&quot;&gt;\n  &lt;label htmlFor=&quot;intro-name&quot;&gt;First name:&lt;/label&gt;\n  &lt;Text field=&quot;name&quot; id=&quot;intro-name&quot; /&gt;\n  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;\n&lt;/Form&gt;;</code></pre>\n<hr>\n<h3 id="explanation">Explanation</h3>\n<p><strong>Ok so what the Foo is going on?</strong></p>\n<p>Its actually pretty simple!</p>\n<p><code>Informed</code> takes care of managing form state so you don&#39;t have to! Basically\nit hooks up the native <code>onChange</code>, <code>onBlur</code>, and <code>onSubmit</code> functions and keeps track of\nall sorts of stuff based on those changes.</p>\n<br/>\n';
    },
    901: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(12)),
        o = a(n(1)),
        r = a(n(17)),
        i = a(n(16)),
        u = a(n(891)),
        d = n(15),
        s = (0, i.default)(u.default, function() {
          return o.default.createElement(
            'div',
            null,
            o.default.createElement(
              d.Form,
              {
                onChange: function(e) {
                  return console.log(e);
                },
                id: 'intro-form'
              },
              function(e) {
                e.formApi;
                var t = e.formState;
                return o.default.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap' } },
                  o.default.createElement(
                    'div',
                    { style: { flex: 1, marginRight: '2rem' } },
                    o.default.createElement(
                      'label',
                      { htmlFor: 'intro-name' },
                      'First name:'
                    ),
                    o.default.createElement(d.Text, {
                      field: 'name',
                      id: 'intro-name'
                    }),
                    o.default.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    )
                  ),
                  o.default.createElement(
                    'div',
                    {
                      style: {
                        flex: 2,
                        flexDirection: 'column',
                        display: 'flex',
                        minWidth: '300px'
                      }
                    },
                    o.default.createElement('label', null, 'Values:'),
                    o.default.createElement(
                      r.default,
                      { language: 'language-js' },
                      (0, l.default)(t.values, null, 2)
                    ),
                    o.default.createElement('label', null, 'Touched:'),
                    o.default.createElement(
                      r.default,
                      { language: 'language-js' },
                      (0, l.default)(t.touched, null, 2)
                    )
                  )
                );
              }
            )
          );
        });
      t.default = s;
    },
    913: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(1)),
        o = (a(n(17)), a(n(901))),
        r = a(n(866)),
        i = function() {
          return l.default.createElement(
            'div',
            null,
            l.default.createElement(o.default, null),
            l.default.createElement(r.default, null)
          );
        };
      t.default = i;
    },
    914: function(e, t, n) {
      'use strict';
      var a = n(2);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = a(n(1));
      t.default = function(e) {
        return l.default.createElement(
          'div',
          { style: { padding: '2rem', maxWidth: '900px' } },
          e()
        );
      };
    },
    915: function(e, t, n) {
      'use strict';
      (function(e) {
        var t = n(2),
          a = (t(n(1)), n(598)),
          l = t(n(914)),
          o = t(n(913)),
          r = t(n(864)),
          i = t(n(862)),
          u = t(n(860)),
          d = t(n(858)),
          s = t(n(856)),
          f = t(n(854)),
          c = t(n(852)),
          m = t(n(850)),
          p = t(n(848)),
          g = t(n(846)),
          h = t(n(844)),
          b = t(n(841)),
          v = t(n(838)),
          y = t(n(836)),
          x = n(829),
          F = n(814),
          q = n(809);
        (0, a.addDecorator)(l.default),
          (0, a.storiesOf)('Introduction', e).add('Getting Started', o.default),
          (0, a.storiesOf)('Form', e)
            .add('Basic', r.default)
            .add('Complex', i.default)
            .add('State', u.default)
            .add('Api', s.default)
            .add('Props', d.default),
          (0, a.storiesOf)('Inputs', e)
            .add('Intro', x.Intro)
            .add('Text', x.TextInput)
            .add('Text Area', x.TextAreaInput)
            .add('Radio Input', x.RadioInput)
            .add('Checkbox Input', x.CheckboxInput)
            .add('Select Input', x.SelectInput)
            .add('Multi Select Input', x.MultiSelectInput),
          (0, a.storiesOf)('CustomInputs', e).add(
            'Creating Custom Inputs',
            y.default
          ),
          (0, a.storiesOf)('Arrays', e)
            .add('Array Of Fields', F.ArrayOfFields)
            .add('Array Of Scopes', F.ArrayOfScopes),
          (0, a.storiesOf)('Validation', e)
            .add('Simple Validation', c.default)
            .add('Complex Validation', m.default)
            .add('Validation Control', p.default)
            .add('Notifications', g.default)
            .add('Async Validation', f.default),
          (0, a.storiesOf)('High Order Components', e)
            .add('withFormApi', q.WithFormApi)
            .add('withFormState', q.WithFormState)
            .add('withFieldApi', q.WithFieldApi)
            .add('withFieldState', q.WithFieldState),
          (0, a.storiesOf)('Gotchas', e)
            .add('Unnecessary Rendering', h.default)
            .add('Scope', b.default),
          (0, a.storiesOf)('Dynamic Forms', e).add('Dynamic Fields', v.default);
      }.call(this, n(130)(e)));
    },
    916: function(e, t, n) {
      (e.exports = n(233)(!1)).push([
        e.i,
        'input {\n  margin-bottom: 1rem;\n  display: block;\n}\n\ntextarea {\n  margin-bottom: 1rem;\n  display: block;\n}\n\nselect {\n  margin-bottom: 1rem;\n  display: block;\n}\n\nlabel {\n  text-align: left;\n}\n\nbutton {\n  text-align: left;\n  display: block;\n}\n\nhr {\n    border: none !important;\n    height: 1px !important;\n    /* Set the hr color */\n    color: #333; /* old IE */\n    background-color: #333; /* Modern Browsers */\n}\n',
        ''
      ]);
    },
    917: function(e, t, n) {
      var a = n(916);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var l = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(232)(a, l);
      a.locals && (e.exports = a.locals);
    },
    918: function(e, t, n) {
      (e.exports = n(233)(!1)).push([
        e.i,
        '/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+json+jsx&plugins=previewer-base */\n/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: #f8f8f2 !important;\n\tbackground: none !important;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.3) !important;\n\tfont-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace !important;\n\ttext-align: left !important;\n\twhite-space: pre !important;\n\tword-spacing: normal !important;\n\tword-break: normal !important;\n\tword-wrap: normal !important;\n\tline-height: 1.5 !important;\n  border: none;\n\n\t-moz-tab-size: 4 !important;\n\t-o-tab-size: 4 !important;\n\ttab-size: 4 !important;\n\n\t-webkit-hyphens: none !important;\n\t-moz-hyphens: none !important;\n\t-ms-hyphens: none !important;\n\thyphens: none !important;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1rem !important;\n\tmargin: 0 0 !important;\n\toverflow: visible !important;\n  overflow-x: scroll !important;\n\tborder-radius: 0.3em !important;\n}\n\ncode[class*="language-"] {\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: visible !important;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: #272822 !important;\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em !important;\n\tborder-radius: .3em !important;\n\twhite-space: normal !important;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray !important;\n}\n\n.token.punctuation {\n\tcolor: #f8f8f2 !important;\n}\n\n.namespace {\n\topacity: .7 !important;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #f92672 !important;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #ae81ff !important;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #a6e22e !important;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #f8f8f2 !important;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function {\n\tcolor: #e6db74 !important;\n}\n\n.token.keyword {\n\tcolor: #66d9ef !important;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #fd971f !important;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold !important;\n}\n.token.italic {\n\tfont-style: italic !important;\n}\n\n.token.entity {\n\tcursor: help !important;\n}\n\n.prism-previewer,\n.prism-previewer:before,\n.prism-previewer:after {\n\tposition: absolute !important;\n\tpointer-events: none !important;\n}\n.prism-previewer,\n.prism-previewer:after {\n\tleft: 50% !important;\n}\n.prism-previewer {\n\tmargin-top: -48px !important;\n\twidth: 32px !important;\n\theight: 32px !important;\n\tmargin-left: -16px !important;\n\n\topacity: 0 !important;\n\t-webkit-transition: opacity .25s !important;\n\t-o-transition: opacity .25s !important;\n\ttransition: opacity .25s !important;\n}\n.prism-previewer.flipped {\n\tmargin-top: 0 !important;\n\tmargin-bottom: -48px !important;\n}\n.prism-previewer:before,\n.prism-previewer:after {\n\tcontent: \'\' !important;\n\tposition: absolute !important;\n\tpointer-events: none !important;\n}\n.prism-previewer:before {\n\ttop: -5px !important;\n\tright: -5px !important;\n\tleft: -5px !important;\n\tbottom: -5px !important;\n\tborder-radius: 10px !important;\n\tborder: 5px solid #fff !important;\n\tbox-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 0 10px rgba(0, 0, 0, 0.75) !important;\n}\n\n.prism-previewer:after {\n\ttop: 100% !important;\n\twidth: 0 !important;\n\theight: 0 !important;\n\tmargin: 5px 0 0 -7px !important;\n\tborder: 7px solid transparent !important;\n\tborder-color: rgba(255, 0, 0, 0) !important;\n\tborder-top-color: #fff !important;\n}\n.prism-previewer.flipped:after {\n\ttop: auto !important;\n\tbottom: 100% !important;\n\tmargin-top: 0 !important;\n\tmargin-bottom: 5px !important;\n\tborder-top-color: rgba(255, 0, 0, 0) !important;\n\tborder-bottom-color: #fff !important;\n}\n.prism-previewer.active {\n\topacity: 1 !important;\n}\n',
        ''
      ]);
    },
    919: function(e, t, n) {
      var a = n(918);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var l = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(232)(a, l);
      a.locals && (e.exports = a.locals);
    },
    920: function(e, t, n) {
      (e.exports = n(233)(!1)).push([
        e.i,
        '/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type="submit"],\ninput[type="reset"],\ninput[type="button"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type="submit"]:hover,\ninput[type="reset"]:hover,\ninput[type="button"]:hover,\n.button:focus,\nbutton:focus,\ninput[type="submit"]:focus,\ninput[type="reset"]:focus,\ninput[type="button"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type="submit"].button-primary,\ninput[type="reset"].button-primary,\ninput[type="button"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type="submit"].button-primary:hover,\ninput[type="reset"].button-primary:hover,\ninput[type="button"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type="submit"].button-primary:focus,\ninput[type="reset"].button-primary:focus,\ninput[type="button"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type="email"],\ninput[type="number"],\ninput[type="search"],\ninput[type="text"],\ninput[type="tel"],\ninput[type="url"],\ninput[type="password"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type="email"],\ninput[type="number"],\ninput[type="search"],\ninput[type="text"],\ninput[type="tel"],\ninput[type="url"],\ninput[type="password"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type="email"]:focus,\ninput[type="number"]:focus,\ninput[type="search"]:focus,\ninput[type="text"]:focus,\ninput[type="tel"]:focus,\ninput[type="url"]:focus,\ninput[type="password"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type="checkbox"],\ninput[type="radio"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: "";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n',
        ''
      ]);
    },
    921: function(e, t, n) {
      var a = n(920);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var l = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(232)(a, l);
      a.locals && (e.exports = a.locals);
    },
    923: function(e, t, n) {
      (e.exports = n(233)(!1)).push([
        e.i,
        '/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It\'s recommended that you don\'t attempt to style these elements.\n * Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome\'s increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren\'t caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don\'t inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}',
        ''
      ]);
    },
    924: function(e, t, n) {
      var a = n(923);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var l = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(232)(a, l);
      a.locals && (e.exports = a.locals);
    },
    925: function(e, t, n) {
      'use strict';
      (function(t) {
        var a = n(2),
          l = a(n(234)),
          o = a(n(12)),
          r =
            'undefined' != typeof window
              ? window
              : 'undefined' != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope
                ? self
                : {},
          i = (function() {
            var e = /\blang(?:uage)?-(\w+)\b/i,
              t = 0,
              n = (r.Prism = {
                manual: r.Prism && r.Prism.manual,
                util: {
                  encode: function(e) {
                    return e instanceof a
                      ? new a(e.type, n.util.encode(e.content), e.alias)
                      : 'Array' === n.util.type(e)
                        ? e.map(n.util.encode)
                        : e
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/\u00a0/g, ' ');
                  },
                  type: function(e) {
                    return Object.prototype.toString
                      .call(e)
                      .match(/\[object (\w+)\]/)[1];
                  },
                  objId: function(e) {
                    return (
                      e.__id ||
                        Object.defineProperty(e, '__id', { value: ++t }),
                      e.__id
                    );
                  },
                  clone: function(e) {
                    switch (n.util.type(e)) {
                      case 'Object':
                        var t = {};
                        for (var a in e)
                          e.hasOwnProperty(a) && (t[a] = n.util.clone(e[a]));
                        return t;
                      case 'Array':
                        return (
                          e.map &&
                          e.map(function(e) {
                            return n.util.clone(e);
                          })
                        );
                    }
                    return e;
                  }
                },
                languages: {
                  extend: function(e, t) {
                    var a = n.util.clone(n.languages[e]);
                    for (var l in t) a[l] = t[l];
                    return a;
                  },
                  insertBefore: function(e, t, a, l) {
                    var o = (l = l || n.languages)[e];
                    if (2 == arguments.length) {
                      for (var r in (a = arguments[1]))
                        a.hasOwnProperty(r) && (o[r] = a[r]);
                      return o;
                    }
                    var i = {};
                    for (var u in o)
                      if (o.hasOwnProperty(u)) {
                        if (u == t)
                          for (var r in a) a.hasOwnProperty(r) && (i[r] = a[r]);
                        i[u] = o[u];
                      }
                    return (
                      n.languages.DFS(n.languages, function(t, n) {
                        n === l[e] && t != e && (this[t] = i);
                      }),
                      (l[e] = i)
                    );
                  },
                  DFS: function(e, t, a, l) {
                    for (var o in ((l = l || {}), e))
                      e.hasOwnProperty(o) &&
                        (t.call(e, o, e[o], a || o),
                        'Object' !== n.util.type(e[o]) || l[n.util.objId(e[o])]
                          ? 'Array' !== n.util.type(e[o]) ||
                            l[n.util.objId(e[o])] ||
                            ((l[n.util.objId(e[o])] = !0),
                            n.languages.DFS(e[o], t, o, l))
                          : ((l[n.util.objId(e[o])] = !0),
                            n.languages.DFS(e[o], t, null, l)));
                  }
                },
                plugins: {},
                highlightAll: function(e, t) {
                  var a = {
                    callback: t,
                    selector:
                      'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                  };
                  n.hooks.run('before-highlightall', a);
                  for (
                    var l,
                      o = a.elements || document.querySelectorAll(a.selector),
                      r = 0;
                    (l = o[r++]);

                  )
                    n.highlightElement(l, !0 === e, a.callback);
                },
                highlightElement: function(t, a, l) {
                  for (var i, u, d = t; d && !e.test(d.className); )
                    d = d.parentNode;
                  d &&
                    ((i = (d.className.match(e) || [, ''])[1].toLowerCase()),
                    (u = n.languages[i])),
                    (t.className =
                      t.className.replace(e, '').replace(/\s+/g, ' ') +
                      ' language-' +
                      i),
                    (d = t.parentNode),
                    /pre/i.test(d.nodeName) &&
                      (d.className =
                        d.className.replace(e, '').replace(/\s+/g, ' ') +
                        ' language-' +
                        i);
                  var s = {
                    element: t,
                    language: i,
                    grammar: u,
                    code: t.textContent
                  };
                  if (
                    (n.hooks.run('before-sanity-check', s),
                    !s.code || !s.grammar)
                  )
                    return (
                      s.code &&
                        (n.hooks.run('before-highlight', s),
                        (s.element.textContent = s.code),
                        n.hooks.run('after-highlight', s)),
                      void n.hooks.run('complete', s)
                    );
                  if ((n.hooks.run('before-highlight', s), a && r.Worker)) {
                    var f = new Worker(n.filename);
                    (f.onmessage = function(e) {
                      (s.highlightedCode = e.data),
                        n.hooks.run('before-insert', s),
                        (s.element.innerHTML = s.highlightedCode),
                        l && l.call(s.element),
                        n.hooks.run('after-highlight', s),
                        n.hooks.run('complete', s);
                    }),
                      f.postMessage(
                        (0, o.default)({
                          language: s.language,
                          code: s.code,
                          immediateClose: !0
                        })
                      );
                  } else
                    (s.highlightedCode = n.highlight(
                      s.code,
                      s.grammar,
                      s.language
                    )),
                      n.hooks.run('before-insert', s),
                      (s.element.innerHTML = s.highlightedCode),
                      l && l.call(t),
                      n.hooks.run('after-highlight', s),
                      n.hooks.run('complete', s);
                },
                highlight: function(e, t, l) {
                  var o = n.tokenize(e, t);
                  return a.stringify(n.util.encode(o), l);
                },
                matchGrammar: function(e, t, a, l, o, r, i) {
                  var u = n.Token;
                  for (var d in a)
                    if (a.hasOwnProperty(d) && a[d]) {
                      if (d == i) return;
                      var s = a[d];
                      s = 'Array' === n.util.type(s) ? s : [s];
                      for (var f = 0; f < s.length; ++f) {
                        var c = s[f],
                          m = c.inside,
                          p = !!c.lookbehind,
                          g = !!c.greedy,
                          h = 0,
                          b = c.alias;
                        if (g && !c.pattern.global) {
                          var v = c.pattern.toString().match(/[imuy]*$/)[0];
                          c.pattern = RegExp(c.pattern.source, v + 'g');
                        }
                        c = c.pattern || c;
                        for (
                          var y = l, x = o;
                          y < t.length;
                          x += t[y].length, ++y
                        ) {
                          var F = t[y];
                          if (t.length > e.length) return;
                          if (!(F instanceof u)) {
                            c.lastIndex = 0;
                            var q = 1;
                            if (!(T = c.exec(F)) && g && y != t.length - 1) {
                              if (((c.lastIndex = x), !(T = c.exec(e)))) break;
                              for (
                                var w = T.index + (p ? T[1].length : 0),
                                  E = T.index + T[0].length,
                                  S = y,
                                  k = x,
                                  O = t.length;
                                O > S &&
                                (E > k || (!t[S].type && !t[S - 1].greedy));
                                ++S
                              )
                                w >= (k += t[S].length) && (++y, (x = k));
                              if (t[y] instanceof u || t[S - 1].greedy)
                                continue;
                              (q = S - y), (F = e.slice(x, k)), (T.index -= x);
                            }
                            if (T) {
                              p && (h = T[1].length);
                              E =
                                (w = T.index + h) + (T = T[0].slice(h)).length;
                              var T,
                                C = F.slice(0, w),
                                A = F.slice(E),
                                j = [y, q];
                              C && (++y, (x += C.length), j.push(C));
                              var V = new u(
                                d,
                                m ? n.tokenize(T, m) : T,
                                b,
                                T,
                                g
                              );
                              if (
                                (j.push(V),
                                A && j.push(A),
                                Array.prototype.splice.apply(t, j),
                                1 != q && n.matchGrammar(e, t, a, y, x, !0, d),
                                r)
                              )
                                break;
                            } else if (r) break;
                          }
                        }
                      }
                    }
                },
                tokenize: function(e, t) {
                  var a = [e],
                    l = t.rest;
                  if (l) {
                    for (var o in l) t[o] = l[o];
                    delete t.rest;
                  }
                  return n.matchGrammar(e, a, t, 0, 0, !1), a;
                },
                hooks: {
                  all: {},
                  add: function(e, t) {
                    var a = n.hooks.all;
                    (a[e] = a[e] || []), a[e].push(t);
                  },
                  run: function(e, t) {
                    var a = n.hooks.all[e];
                    if (a && a.length) for (var l, o = 0; (l = a[o++]); ) l(t);
                  }
                }
              }),
              a = (n.Token = function(e, t, n, a, l) {
                (this.type = e),
                  (this.content = t),
                  (this.alias = n),
                  (this.length = 0 | (a || '').length),
                  (this.greedy = !!l);
              });
            if (
              ((a.stringify = function(e, t, o) {
                if ('string' == typeof e) return e;
                if ('Array' === n.util.type(e))
                  return e
                    .map(function(n) {
                      return a.stringify(n, t, e);
                    })
                    .join('');
                var r = {
                  type: e.type,
                  content: a.stringify(e.content, t, o),
                  tag: 'span',
                  classes: ['token', e.type],
                  attributes: {},
                  language: t,
                  parent: o
                };
                if (
                  ('comment' == r.type && (r.attributes.spellcheck = 'true'),
                  e.alias)
                ) {
                  var i =
                    'Array' === n.util.type(e.alias) ? e.alias : [e.alias];
                  Array.prototype.push.apply(r.classes, i);
                }
                n.hooks.run('wrap', r);
                var u = (0, l.default)(r.attributes)
                  .map(function(e) {
                    return (
                      e +
                      '="' +
                      (r.attributes[e] || '').replace(/"/g, '&quot;') +
                      '"'
                    );
                  })
                  .join(' ');
                return (
                  '<' +
                  r.tag +
                  ' class="' +
                  r.classes.join(' ') +
                  '"' +
                  (u ? ' ' + u : '') +
                  '>' +
                  r.content +
                  '</' +
                  r.tag +
                  '>'
                );
              }),
              !r.document)
            )
              return r.addEventListener
                ? (r.addEventListener(
                    'message',
                    function(e) {
                      var t = JSON.parse(e.data),
                        a = t.language,
                        l = t.code,
                        o = t.immediateClose;
                      r.postMessage(n.highlight(l, n.languages[a], a)),
                        o && r.close();
                    },
                    !1
                  ),
                  r.Prism)
                : r.Prism;
            var i =
              document.currentScript ||
              [].slice.call(document.getElementsByTagName('script')).pop();
            return (
              i &&
                ((n.filename = i.src),
                !document.addEventListener ||
                  n.manual ||
                  i.hasAttribute('data-manual') ||
                  ('loading' !== document.readyState
                    ? window.requestAnimationFrame
                      ? window.requestAnimationFrame(n.highlightAll)
                      : window.setTimeout(n.highlightAll, 16)
                    : document.addEventListener(
                        'DOMContentLoaded',
                        n.highlightAll
                      ))),
              r.Prism
            );
          })();
        void 0 !== e && e.exports && (e.exports = i),
          void 0 !== t && (t.Prism = i),
          (i.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: /<!DOCTYPE[\s\S]+?>/i,
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
              pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,
              inside: {
                tag: {
                  pattern: /^<\/?[^\s>\/]+/i,
                  inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
                },
                'attr-value': {
                  pattern: /=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,
                  inside: { punctuation: /[=>"']/ }
                },
                punctuation: /\/?>/,
                'attr-name': {
                  pattern: /[^\s>\/]+/,
                  inside: { namespace: /^[^\s>\/:]+:/ }
                }
              }
            },
            entity: /&#?[\da-z]{1,8};/i
          }),
          (i.languages.markup.tag.inside['attr-value'].inside.entity =
            i.languages.markup.entity),
          i.hooks.add('wrap', function(e) {
            'entity' === e.type &&
              (e.attributes.title = e.content.replace(/&amp;/, '&'));
          }),
          (i.languages.xml = i.languages.markup),
          (i.languages.html = i.languages.markup),
          (i.languages.mathml = i.languages.markup),
          (i.languages.svg = i.languages.markup),
          (i.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
              inside: { rule: /@[\w-]+/ }
            },
            url: /url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
            selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
            string: {
              pattern: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0
            },
            property: /(\b|\B)[\w-]+(?=\s*:)/i,
            important: /\B!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:]/
          }),
          (i.languages.css.atrule.inside.rest = i.util.clone(i.languages.css)),
          i.languages.markup &&
            (i.languages.insertBefore('markup', 'tag', {
              style: {
                pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                lookbehind: !0,
                inside: i.languages.css,
                alias: 'language-css'
              }
            }),
            i.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /\s*style=("|').*?\1/i,
                  inside: {
                    'attr-name': {
                      pattern: /^\s*style/i,
                      inside: i.languages.markup.tag.inside
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    'attr-value': { pattern: /.+/i, inside: i.languages.css }
                  },
                  alias: 'language-css'
                }
              },
              i.languages.markup.tag
            )),
          (i.languages.clike = {
            comment: [
              { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
              { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
            ],
            string: {
              pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0
            },
            'class-name': {
              pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
              lookbehind: !0,
              inside: { punctuation: /(\.|\\)/ }
            },
            keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(true|false)\b/,
            function: /[a-z0-9_]+(?=\()/i,
            number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
            operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
            punctuation: /[{}[\];(),.:]/
          }),
          (i.languages.javascript = i.languages.extend('clike', {
            keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
            number: /\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
            function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
            operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
          })),
          i.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
              lookbehind: !0,
              greedy: !0
            }
          }),
          i.languages.insertBefore('javascript', 'string', {
            'template-string': {
              pattern: /`(?:\\\\|\\?[^\\])*?`/,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /\$\{[^}]+\}/,
                  inside: {
                    'interpolation-punctuation': {
                      pattern: /^\$\{|\}$/,
                      alias: 'punctuation'
                    },
                    rest: i.languages.javascript
                  }
                },
                string: /[\s\S]+/
              }
            }
          }),
          i.languages.markup &&
            i.languages.insertBefore('markup', 'tag', {
              script: {
                pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: i.languages.javascript,
                alias: 'language-javascript'
              }
            }),
          (i.languages.js = i.languages.javascript),
          (i.languages.json = {
            property: /"(?:\\.|[^\\"])*"(?=\s*:)/gi,
            string: /"(?!:)(?:\\.|[^\\"])*"(?!:)/g,
            number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
            punctuation: /[{}[\]);,]/g,
            operator: /:/g,
            boolean: /\b(true|false)\b/gi,
            null: /\bnull\b/gi
          }),
          (i.languages.jsonp = i.languages.json),
          (function(e) {
            var t = e.util.clone(e.languages.javascript);
            (e.languages.jsx = e.languages.extend('markup', t)),
              (e.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+(?:[\w\.:-]+(?:=(?:("|')(\\?[\s\S])*?\1|[^\s'">=]+|(\{[\s\S]*?\})))?|\{\.{3}\w+\}))*\s*\/?>/i),
              (e.languages.jsx.tag.inside[
                'attr-value'
              ].pattern = /=(?!\{)(?:('|")[\s\S]*?(\1)|[^\s>]+)/i),
              e.languages.insertBefore(
                'inside',
                'attr-name',
                {
                  spread: {
                    pattern: /\{\.{3}\w+\}/,
                    inside: { punctuation: /\{|\}|\./, 'attr-value': /\w+/ }
                  }
                },
                e.languages.jsx.tag
              );
            var n = e.util.clone(e.languages.jsx);
            delete n.punctuation,
              (n = e.languages.insertBefore(
                'jsx',
                'operator',
                { punctuation: /=(?={)|[{}[\];(),.:]/ },
                { jsx: n }
              )),
              e.languages.insertBefore(
                'inside',
                'attr-value',
                {
                  script: {
                    pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
                    inside: n,
                    alias: 'language-javascript'
                  }
                },
                e.languages.jsx.tag
              );
          })(i),
          (function() {
            if (
              'undefined' != typeof self &&
              self.Prism &&
              self.document &&
              Function.prototype.bind
            ) {
              var e = /(?:^|\s)token(?=$|\s)/,
                t = /(?:^|\s)active(?=$|\s)/g,
                n = /(?:^|\s)flipped(?=$|\s)/g,
                a = function e(t, n, a, l) {
                  (this._elt = null),
                    (this._type = t),
                    (this._clsRegexp = RegExp('(?:^|\\s)' + t + '(?=$|\\s)')),
                    (this._token = null),
                    (this.updater = n),
                    (this._mouseout = this.mouseout.bind(this)),
                    (this.initializer = l);
                  var o = this;
                  a || (a = ['*']),
                    'Array' !== i.util.type(a) && (a = [a]),
                    a.forEach(function(t) {
                      'string' != typeof t && (t = t.lang),
                        e.byLanguages[t] || (e.byLanguages[t] = []),
                        e.byLanguages[t].indexOf(o) < 0 &&
                          e.byLanguages[t].push(o);
                    }),
                    (e.byType[t] = this);
                };
              (a.prototype.init = function() {
                this._elt ||
                  ((this._elt = document.createElement('div')),
                  (this._elt.className =
                    'prism-previewer prism-previewer-' + this._type),
                  document.body.appendChild(this._elt),
                  this.initializer && this.initializer());
              }),
                (a.prototype.check = function(t) {
                  do {
                    if (
                      e.test(t.className) &&
                      this._clsRegexp.test(t.className)
                    )
                      break;
                  } while ((t = t.parentNode));
                  t && t !== this._token && ((this._token = t), this.show());
                }),
                (a.prototype.mouseout = function() {
                  this._token.removeEventListener(
                    'mouseout',
                    this._mouseout,
                    !1
                  ),
                    (this._token = null),
                    this.hide();
                }),
                (a.prototype.show = function() {
                  if ((this._elt || this.init(), this._token))
                    if (this.updater.call(this._elt, this._token.textContent)) {
                      this._token.addEventListener(
                        'mouseout',
                        this._mouseout,
                        !1
                      );
                      var e = (function(e) {
                        var t = 0,
                          n = 0,
                          a = e;
                        if (a.parentNode) {
                          do {
                            (t += a.offsetLeft), (n += a.offsetTop);
                          } while ((a = a.offsetParent) && a.nodeType < 9);
                          a = e;
                          do {
                            (t -= a.scrollLeft), (n -= a.scrollTop);
                          } while (
                            (a = a.parentNode) &&
                            !/body/i.test(a.nodeName)
                          );
                        }
                        return {
                          top: n,
                          right: innerWidth - t - e.offsetWidth,
                          bottom: innerHeight - n - e.offsetHeight,
                          left: t
                        };
                      })(this._token);
                      (this._elt.className += ' active'),
                        e.top - this._elt.offsetHeight > 0
                          ? ((this._elt.className = this._elt.className.replace(
                              n,
                              ''
                            )),
                            (this._elt.style.top = e.top + 'px'),
                            (this._elt.style.bottom = ''))
                          : ((this._elt.className += ' flipped'),
                            (this._elt.style.bottom = e.bottom + 'px'),
                            (this._elt.style.top = '')),
                        (this._elt.style.left =
                          e.left +
                          Math.min(200, this._token.offsetWidth / 2) +
                          'px');
                    } else this.hide();
                }),
                (a.prototype.hide = function() {
                  this._elt.className = this._elt.className.replace(t, '');
                }),
                (a.byLanguages = {}),
                (a.byType = {}),
                (a.initEvents = function(e, t) {
                  var n = [];
                  a.byLanguages[t] && (n = n.concat(a.byLanguages[t])),
                    a.byLanguages['*'] && (n = n.concat(a.byLanguages['*'])),
                    e.addEventListener(
                      'mouseover',
                      function(e) {
                        var t = e.target;
                        n.forEach(function(e) {
                          e.check(t);
                        });
                      },
                      !1
                    );
                }),
                (i.plugins.Previewer = a),
                i.hooks.add('after-highlight', function(e) {
                  (a.byLanguages['*'] || a.byLanguages[e.language]) &&
                    a.initEvents(e.element, e.language);
                });
            }
          })();
      }.call(this, n(19)));
    },
    947: function(e, t, n) {
      'use strict';
      (function(e) {
        var t = n(598),
          a = n(927);
        n(925),
          n(924),
          n(921),
          n(919),
          n(917),
          (0, a.setOptions)({
            name: 'Informed',
            url: 'https://joepuzzo.github.io/informed',
            showAddonPanel: !1,
            addonPanelInRight: !1
          });
        (0, t.configure)(function() {
          n(915);
        }, e);
      }.call(this, n(130)(e)));
    },
    949: function(e, t, n) {
      n(540), n(948), (e.exports = n(947));
    }
  },
  [[949, 1, 2]]
]);
//# sourceMappingURL=preview.3a5d4cbc2e45c624a3d9.bundle.js.map
