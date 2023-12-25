import Ye, { forwardRef as Ne, useRef as se, useState as Me, useMemo as br, useEffect as Ue } from "react";
import { Application as gr } from "@splinetool/runtime";
var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fe = {}, yr = {
  get exports() {
    return fe;
  },
  set exports(n) {
    fe = n;
  }
}, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function hr() {
  if (De)
    return z;
  De = 1;
  var n = Ye, f = Symbol.for("react.element"), m = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(d, c, T) {
    var v, b = {}, O = null, C = null;
    T !== void 0 && (O = "" + T), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (C = c.ref);
    for (v in c)
      E.call(c, v) && !j.hasOwnProperty(v) && (b[v] = c[v]);
    if (d && d.defaultProps)
      for (v in c = d.defaultProps, c)
        b[v] === void 0 && (b[v] = c[v]);
    return { $$typeof: f, type: d, key: O, ref: C, props: b, _owner: R.current };
  }
  return z.Fragment = m, z.jsx = _, z.jsxs = _, z;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Er() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ye, f = Symbol.for("react.element"), m = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), A = Symbol.iterator, F = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[F];
      return typeof r == "function" ? r : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        D("error", e, t);
      }
    }
    function D(e, r, t) {
      {
        var a = y.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var x = !1, S = !1, p = !1, I = !1, L = !1, U;
    U = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === j || L || e === R || e === T || e === v || I || e === C || x || S || p || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === d || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === U || e.getModuleId !== void 0));
    }
    function Be(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function W(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case m:
          return "Portal";
        case j:
          return "Profiler";
        case R:
          return "StrictMode";
        case T:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return de(r) + ".Consumer";
          case _:
            var t = e;
            return de(t._context) + ".Provider";
          case c:
            return Be(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : W(e.type) || "Memo";
          case O: {
            var u = e, l = u._payload, o = u._init;
            try {
              return W(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, V = 0, ve, pe, me, be, ge, ye, he;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function ze() {
      {
        if (V === 0) {
          ve = console.log, pe = console.info, me = console.warn, be = console.error, ge = console.group, ye = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function qe() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: ve
            }),
            info: Y({}, e, {
              value: pe
            }),
            warn: Y({}, e, {
              value: me
            }),
            error: Y({}, e, {
              value: be
            }),
            group: Y({}, e, {
              value: ge
            }),
            groupCollapsed: Y({}, e, {
              value: ye
            }),
            groupEnd: Y({}, e, {
              value: he
            })
          });
        }
        V < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = y.ReactCurrentDispatcher, ee;
    function G(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            ee = a && a[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, J;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ge();
    }
    function Re(e, r) {
      if (!e || re)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      re = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = Q.current, Q.current = null, ze();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch ($) {
              a = $;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch ($) {
              a = $;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            a = $;
          }
          e();
        }
      } catch ($) {
        if ($ && a && typeof $.stack == "string") {
          for (var i = $.stack.split(`
`), w = a.stack.split(`
`), g = i.length - 1, h = w.length - 1; g >= 1 && h >= 0 && i[g] !== w[h]; )
            h--;
          for (; g >= 1 && h >= 0; g--, h--)
            if (i[g] !== w[h]) {
              if (g !== 1 || h !== 1)
                do
                  if (g--, h--, h < 0 || i[g] !== w[h]) {
                    var k = `
` + i[g].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, k), k;
                  }
                while (g >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = l, qe(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", Ie = M ? G(M) : "";
      return typeof e == "function" && J.set(e, Ie), Ie;
    }
    function Je(e, r, t) {
      return Re(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ke(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case T:
          return G("Suspense");
        case v:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Je(e.render);
          case b:
            return K(e.type, r, t);
          case O: {
            var a = e, u = a._payload, l = a._init;
            try {
              return K(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, _e = {}, Te = y.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function He(e, r, t, a, u) {
      {
        var l = Function.call.bind(H);
        for (var o in e)
          if (l(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              i = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              i = g;
            }
            i && !(i instanceof Error) && (X(u), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof i), X(null)), i instanceof Error && !(i.message in _e) && (_e[i.message] = !0, X(u), s("Failed %s type: %s", t, i.message), X(null));
          }
      }
    }
    var Xe = Array.isArray;
    function te(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Oe(e) {
      if (Qe(e))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Se(e);
    }
    var B = y.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, je, ne;
    ne = {};
    function rr(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var t = W(B.current.type);
        ne[t] || (s('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(B.current.type), e.ref), ne[t] = !0);
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          we || (we = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          je || (je = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, a, u, l, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ur(e, r, t, a, u) {
      {
        var l, o = {}, i = null, w = null;
        t !== void 0 && (Oe(t), i = "" + t), tr(r) && (Oe(r.key), i = "" + r.key), rr(r) && (w = r.ref, nr(r, u));
        for (l in r)
          H.call(r, l) && !er.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (l in g)
            o[l] === void 0 && (o[l] = g[l]);
        }
        if (i || w) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ar(o, h), w && ir(o, h);
        }
        return or(e, i, w, u, a, B.current, o);
      }
    }
    var ae = y.ReactCurrentOwner, Ce = y.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Pe() {
      {
        if (ae.current) {
          var e = W(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function fr(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ae.current && (a = " It was passed a child from " + W(e._owner.type) + "."), N(e), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), N(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            oe(a) && ke(a, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = P(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), o; !(o = l.next()).done; )
              oe(o.value) && ke(o.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = W(r);
          He(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var u = W(r);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            N(e), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), s("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Fe(e, r, t, a, u, l) {
      {
        var o = Ve(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = sr(u);
          w ? i += w : i += Pe();
          var g;
          e === null ? g = "null" : te(e) ? g = "array" : e !== void 0 && e.$$typeof === f ? (g = "<" + (W(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, i);
        }
        var h = ur(e, r, t, u, l);
        if (h == null)
          return h;
        if (o) {
          var k = r.children;
          if (k !== void 0)
            if (a)
              if (te(k)) {
                for (var M = 0; M < k.length; M++)
                  Ae(k[M], e);
                Object.freeze && Object.freeze(k);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(k, e);
        }
        return e === E ? lr(h) : cr(h), h;
      }
    }
    function dr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function vr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var pr = vr, mr = dr;
    q.Fragment = E, q.jsx = pr, q.jsxs = mr;
  }()), q;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = hr() : n.exports = Er();
})(yr);
const ce = fe.jsx;
var Rr = "Expected a function", $e = 0 / 0, _r = "[object Symbol]", Tr = /^\s+|\s+$/g, Sr = /^[-+]0x[0-9a-f]+$/i, Or = /^0b[01]+$/i, wr = /^0o[0-7]+$/i, jr = parseInt, Cr = typeof Z == "object" && Z && Z.Object === Object && Z, Pr = typeof self == "object" && self && self.Object === Object && self, xr = Cr || Pr || Function("return this")(), kr = Object.prototype, Ar = kr.toString, Fr = Math.max, Ir = Math.min, ue = function() {
  return xr.Date.now();
};
function Dr(n, f, m) {
  var E, R, j, _, d, c, T = 0, v = !1, b = !1, O = !0;
  if (typeof n != "function")
    throw new TypeError(Rr);
  f = Le(f) || 0, le(m) && (v = !!m.leading, b = "maxWait" in m, j = b ? Fr(Le(m.maxWait) || 0, f) : j, O = "trailing" in m ? !!m.trailing : O);
  function C(p) {
    var I = E, L = R;
    return E = R = void 0, T = p, _ = n.apply(L, I), _;
  }
  function A(p) {
    return T = p, d = setTimeout(y, f), v ? C(p) : _;
  }
  function F(p) {
    var I = p - c, L = p - T, U = f - I;
    return b ? Ir(U, j - L) : U;
  }
  function P(p) {
    var I = p - c, L = p - T;
    return c === void 0 || I >= f || I < 0 || b && L >= j;
  }
  function y() {
    var p = ue();
    if (P(p))
      return s(p);
    d = setTimeout(y, F(p));
  }
  function s(p) {
    return d = void 0, O && E ? C(p) : (E = R = void 0, _);
  }
  function D() {
    d !== void 0 && clearTimeout(d), T = 0, E = c = R = d = void 0;
  }
  function x() {
    return d === void 0 ? _ : s(ue());
  }
  function S() {
    var p = ue(), I = P(p);
    if (E = arguments, R = this, c = p, I) {
      if (d === void 0)
        return A(c);
      if (b)
        return d = setTimeout(y, f), C(c);
    }
    return d === void 0 && (d = setTimeout(y, f)), _;
  }
  return S.cancel = D, S.flush = x, S;
}
function le(n) {
  var f = typeof n;
  return !!n && (f == "object" || f == "function");
}
function Wr(n) {
  return !!n && typeof n == "object";
}
function $r(n) {
  return typeof n == "symbol" || Wr(n) && Ar.call(n) == _r;
}
function Le(n) {
  if (typeof n == "number")
    return n;
  if ($r(n))
    return $e;
  if (le(n)) {
    var f = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = le(f) ? f + "" : f;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(Tr, "");
  var m = Or.test(n);
  return m || wr.test(n) ? jr(n.slice(2), m ? 2 : 8) : Sr.test(n) ? $e : +n;
}
var Lr = Dr;
function Yr(n) {
  return (f) => {
    n.forEach((m) => {
      typeof m == "function" ? m(f) : m != null && (m.current = f);
    });
  };
}
const Nr = [], Mr = { width: "100%", height: "100%" }, Ur = Ne(function({
  className: f,
  children: m,
  debounceTime: E = 300,
  ignoreDimensions: R = Nr,
  parentSizeStyles: j,
  enableDebounceLeadingCall: _ = !0,
  resizeObserverPolyfill: d,
  ...c
}, T) {
  const v = se(null), b = se(0), [O, C] = Me({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), A = br(() => {
    const F = Array.isArray(R) ? R : [R];
    return Lr(
      (P) => {
        C((y) => Object.keys(y).filter(
          (S) => y[S] !== P[S]
        ).every(
          (S) => F.includes(S)
        ) ? y : P);
      },
      E,
      { leading: _ }
    );
  }, [E, _, R]);
  return Ue(() => {
    const F = d || window.ResizeObserver, P = new F((y) => {
      y.forEach((s) => {
        const { left: D, top: x, width: S, height: p } = (s == null ? void 0 : s.contentRect) ?? {};
        b.current = window.requestAnimationFrame(() => {
          A({ width: S, height: p, top: x, left: D });
        });
      });
    });
    return v.current && P.observe(v.current), () => {
      window.cancelAnimationFrame(b.current), P.disconnect(), A.cancel();
    };
  }, [A, d]), /* @__PURE__ */ ce(
    "div",
    {
      style: { ...Mr, ...j },
      ref: Yr([T, v]),
      className: f,
      ...c,
      children: m({
        ...O,
        ref: v.current,
        resize: A
      })
    }
  );
}), zr = Ne(
  ({
    scene: n,
    style: f,
    onMouseDown: m,
    onMouseUp: E,
    onMouseHover: R,
    onKeyDown: j,
    onKeyUp: _,
    onStart: d,
    onLookAt: c,
    onFollow: T,
    onWheel: v,
    onLoad: b,
    renderOnDemand: O = !0,
    ...C
  }, A) => {
    const F = se(null), [P, y] = Me(!0);
    return Ue(() => {
      y(!0);
      let s;
      const D = [
        {
          name: "mouseDown",
          cb: m
        },
        {
          name: "mouseUp",
          cb: E
        },
        {
          name: "mouseHover",
          cb: R
        },
        {
          name: "keyDown",
          cb: j
        },
        {
          name: "keyUp",
          cb: _
        },
        {
          name: "start",
          cb: d
        },
        {
          name: "lookAt",
          cb: c
        },
        {
          name: "follow",
          cb: T
        },
        {
          name: "scroll",
          cb: v
        }
      ];
      if (F.current) {
        s = new gr(F.current, { renderOnDemand: O });
        async function x() {
          await s.load(n);
          for (let S of D)
            S.cb && s.addEventListener(S.name, S.cb);
          y(!1), b == null || b(s);
        }
        x();
      }
      return () => {
        for (let x of D)
          x.cb && s.removeEventListener(x.name, x.cb);
        s.dispose();
      };
    }, [n]), /* @__PURE__ */ ce(
      Ur,
      {
        ref: A,
        parentSizeStyles: f,
        debounceTime: 50,
        ...C,
        children: () => /* @__PURE__ */ ce(
          "canvas",
          {
            ref: F,
            style: {
              display: P ? "none" : "block"
            }
          }
        )
      }
    );
  }
);
export {
  zr as default
};
