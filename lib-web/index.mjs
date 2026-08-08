var Zp = Object.defineProperty;
var em = (n, e, t) => e in n ? Zp(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var qa = (n, e, t) => (em(n, typeof e != "symbol" ? e + "" : e, t), t);
import He, { forwardRef as tm, useRef as nm, useState as Gu, useDebugValue as Yu, useEffect as Ai, createContext as Xu, useContext as rm, useLayoutEffect as im, useMemo as sm } from "react";
import om from "react-dom";
import { jsxs as lm, Fragment as Qu, jsx as Ii } from "react/jsx-runtime";
var Qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function am(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var eh = am, cm = typeof Qr == "object" && Qr && Qr.Object === Object && Qr, um = cm, hm = um, fm = typeof self == "object" && self && self.Object === Object && self, dm = hm || fm || Function("return this")(), th = dm, pm = th, mm = function() {
  return pm.Date.now();
}, gm = mm, ym = /\s/;
function Sm(n) {
  for (var e = n.length; e-- && ym.test(n.charAt(e)); )
    ;
  return e;
}
var km = Sm, xm = km, bm = /^\s+/;
function Cm(n) {
  return n && n.slice(0, xm(n) + 1).replace(bm, "");
}
var wm = Cm, Em = th, Mm = Em.Symbol, nh = Mm, Ka = nh, rh = Object.prototype, Tm = rh.hasOwnProperty, vm = rh.toString, jn = Ka ? Ka.toStringTag : void 0;
function Om(n) {
  var e = Tm.call(n, jn), t = n[jn];
  try {
    n[jn] = void 0;
    var r = !0;
  } catch {
  }
  var i = vm.call(n);
  return r && (e ? n[jn] = t : delete n[jn]), i;
}
var Nm = Om, Am = Object.prototype, Im = Am.toString;
function Rm(n) {
  return Im.call(n);
}
var Dm = Rm, Ua = nh, zm = Nm, Lm = Dm, Pm = "[object Null]", $m = "[object Undefined]", _a = Ua ? Ua.toStringTag : void 0;
function Bm(n) {
  return n == null ? n === void 0 ? $m : Pm : _a && _a in Object(n) ? zm(n) : Lm(n);
}
var Fm = Bm;
function Hm(n) {
  return n != null && typeof n == "object";
}
var Vm = Hm, Jm = Fm, Wm = Vm, jm = "[object Symbol]";
function qm(n) {
  return typeof n == "symbol" || Wm(n) && Jm(n) == jm;
}
var Km = qm, Um = wm, Ga = eh, _m = Km, Ya = NaN, Gm = /^[-+]0x[0-9a-f]+$/i, Ym = /^0b[01]+$/i, Xm = /^0o[0-7]+$/i, Qm = parseInt;
function Zm(n) {
  if (typeof n == "number")
    return n;
  if (_m(n))
    return Ya;
  if (Ga(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = Ga(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = Um(n);
  var t = Ym.test(n);
  return t || Xm.test(n) ? Qm(n.slice(2), t ? 2 : 8) : Gm.test(n) ? Ya : +n;
}
var eg = Zm, tg = eh, Xs = gm, Xa = eg, ng = "Expected a function", rg = Math.max, ig = Math.min;
function sg(n, e, t) {
  var r, i, s, o, l, a, c = 0, u = !1, h = !1, f = !0;
  if (typeof n != "function")
    throw new TypeError(ng);
  e = Xa(e) || 0, tg(t) && (u = !!t.leading, h = "maxWait" in t, s = h ? rg(Xa(t.maxWait) || 0, e) : s, f = "trailing" in t ? !!t.trailing : f);
  function d(b) {
    var O = r, M = i;
    return r = i = void 0, c = b, o = n.apply(M, O), o;
  }
  function p(b) {
    return c = b, l = setTimeout(y, e), u ? d(b) : o;
  }
  function m(b) {
    var O = b - a, M = b - c, P = e - O;
    return h ? ig(P, s - M) : P;
  }
  function g(b) {
    var O = b - a, M = b - c;
    return a === void 0 || O >= e || O < 0 || h && M >= s;
  }
  function y() {
    var b = Xs();
    if (g(b))
      return S(b);
    l = setTimeout(y, m(b));
  }
  function S(b) {
    return l = void 0, f && r ? d(b) : (r = i = void 0, o);
  }
  function C() {
    l !== void 0 && clearTimeout(l), c = 0, r = a = i = l = void 0;
  }
  function I() {
    return l === void 0 ? o : S(Xs());
  }
  function E() {
    var b = Xs(), O = g(b);
    if (r = arguments, i = this, a = b, O) {
      if (l === void 0)
        return p(a);
      if (h)
        return clearTimeout(l), l = setTimeout(y, e), d(a);
    }
    return l === void 0 && (l = setTimeout(y, e)), o;
  }
  return E.cancel = C, E.flush = I, E;
}
var og = sg;
const lg = /* @__PURE__ */ Zu(og);
var qo = { exports: {} }, Qs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa;
function ag() {
  if (Qa)
    return Qs;
  Qa = 1;
  var n = He;
  function e(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, i = n.useEffect, s = n.useLayoutEffect, o = n.useDebugValue;
  function l(h, f) {
    var d = f(), p = r({ inst: { value: d, getSnapshot: f } }), m = p[0].inst, g = p[1];
    return s(
      function() {
        m.value = d, m.getSnapshot = f, a(m) && g({ inst: m });
      },
      [h, d, f]
    ), i(
      function() {
        return a(m) && g({ inst: m }), h(function() {
          a(m) && g({ inst: m });
        });
      },
      [h]
    ), o(d), d;
  }
  function a(h) {
    var f = h.getSnapshot;
    h = h.value;
    try {
      var d = f();
      return !t(h, d);
    } catch {
      return !0;
    }
  }
  function c(h, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : l;
  return Qs.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : u, Qs;
}
var Zs = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Za;
function cg() {
  return Za || (Za = 1, process.env.NODE_ENV !== "production" && function() {
    function n(d, p) {
      return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
    }
    function e(d, p) {
      u || i.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = p();
      if (!h) {
        var g = p();
        s(m, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), h = !0);
      }
      g = o({
        inst: { value: m, getSnapshot: p }
      });
      var y = g[0].inst, S = g[1];
      return a(
        function() {
          y.value = m, y.getSnapshot = p, t(y) && S({ inst: y });
        },
        [d, m, p]
      ), l(
        function() {
          return t(y) && S({ inst: y }), d(function() {
            t(y) && S({ inst: y });
          });
        },
        [d]
      ), c(m), m;
    }
    function t(d) {
      var p = d.getSnapshot;
      d = d.value;
      try {
        var m = p();
        return !s(d, m);
      } catch {
        return !0;
      }
    }
    function r(d, p) {
      return p();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = He, s = typeof Object.is == "function" ? Object.is : n, o = i.useState, l = i.useEffect, a = i.useLayoutEffect, c = i.useDebugValue, u = !1, h = !1, f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : e;
    Zs.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Zs;
}
process.env.NODE_ENV === "production" ? qo.exports = ag() : qo.exports = cg();
var Rs = qo.exports;
function te(n) {
  this.content = n;
}
te.prototype = {
  constructor: te,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new te(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new te(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new te([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new te(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new te(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = te.from(n), n.size ? new te(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = te.from(n), n.size ? new te(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = te.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
te.from = function(n) {
  if (n instanceof te)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new te(e);
};
function ih(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = ih(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function sh(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = sh(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
let Fe = class ue {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new ue(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new ue(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? ue.empty : e == 0 && t == this.content.length ? this : new ue(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new ue(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new ue([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new ue(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return ih(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return sh(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return Zr(0, e);
    if (e == this.size)
      return Zr(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? Zr(r + 1, o) : Zr(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return ue.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new ue(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return ue.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new ue(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return ue.empty;
    if (e instanceof ue)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new ue([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
Fe.empty = new Fe([], 0);
const eo = { index: 0, offset: 0 };
function Zr(n, e) {
  return eo.index = n, eo.offset = e, eo;
}
function Ri(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Ri(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Ri(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let it = class Ko {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Ri(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Ko.none;
    if (e instanceof Ko)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
it.none = [];
let Uo = class extends Error {
}, Ve = class yn {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = lh(this.content, e + this.openStart, t);
    return r && new yn(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new yn(oh(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return yn.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new yn(Fe.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new yn(e, r, i);
  }
};
Ve.empty = new Ve(Fe.empty, 0, 0);
function oh(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(oh(s.content, e - i - 1, t - i - 1)));
}
function lh(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = lh(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
function ug(n, e, t) {
  if (t.openStart > n.depth)
    throw new Uo("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Uo("Inconsistent open depths");
  return ah(n, e, t, 0);
}
function ah(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = ah(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return qt(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = hg(t, n);
      return qt(s, uh(n, o, l, e, r));
    }
  else
    return qt(s, Di(n, e, r));
}
function ch(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Uo("Cannot join " + e.type.name + " onto " + n.type.name);
}
function _o(n, e, t) {
  let r = n.node(t);
  return ch(r, e.node(t)), r;
}
function jt(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function fr(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (jt(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    jt(i.child(l), r);
  e && e.depth == t && e.textOffset && jt(e.nodeBefore, r);
}
function qt(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function uh(n, e, t, r, i) {
  let s = n.depth > i && _o(n, e, i + 1), o = r.depth > i && _o(t, r, i + 1), l = [];
  return fr(null, n, i, l), s && o && e.index(i) == t.index(i) ? (ch(s, o), jt(qt(s, uh(n, e, t, r, i + 1)), l)) : (s && jt(qt(s, Di(n, e, i + 1)), l), fr(e, t, i, l), o && jt(qt(o, Di(t, r, i + 1)), l)), fr(r, null, i, l), new Fe(l);
}
function Di(n, e, t) {
  let r = [];
  if (fr(null, n, t, r), n.depth > t) {
    let i = _o(n, e, t + 1);
    jt(qt(i, Di(n, e, t + 1)), r);
  }
  return fr(e, null, t, r), new Fe(r);
}
function hg(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(Fe.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
let ec = class Go {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return it.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new dg(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new Go(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    for (let i = 0; i < to.length; i++) {
      let s = to[i];
      if (s.pos == t && s.doc == e)
        return s;
    }
    let r = to[no] = Go.resolve(e, t);
    return no = (no + 1) % fg, r;
  }
}, to = [], no = 0, fg = 12, dg = class {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
};
const pg = /* @__PURE__ */ Object.create(null);
let hh = class Yo {
  /**
  @internal
  */
  constructor(e, t, r, i = it.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || Fe.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Ri(this.attrs, t || e.defaultAttrs || pg) && it.sameSet(this.marks, r || it.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Yo(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Yo(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return Ve.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new Ve(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return ug(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return ec.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return ec.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), mg(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = Fe.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let e = it.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!it.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = Fe.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, r);
  }
};
hh.prototype.text = void 0;
function mg(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
function fh(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = fh(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function dh(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = dh(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
let z = class he {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new he(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new he(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? he.empty : e == 0 && t == this.content.length ? this : new he(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new he(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new he([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new he(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return fh(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return dh(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return ei(0, e);
    if (e == this.size)
      return ei(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? ei(r + 1, o) : ei(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return he.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new he(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return he.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new he(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return he.empty;
    if (e instanceof he)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new he([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
z.empty = new z([], 0);
const ro = { index: 0, offset: 0 };
function ei(n, e) {
  return ro.index = n, ro.offset = e, ro;
}
function Xo(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Xo(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Xo(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let zi = class Qo {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Xo(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Qo.none;
    if (e instanceof Qo)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
zi.none = [];
let gg = class extends Error {
}, D = class Sn {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = mh(this.content, e + this.openStart, t);
    return r && new Sn(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new Sn(ph(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return Sn.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new Sn(z.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new Sn(e, r, i);
  }
};
D.empty = new D(z.empty, 0, 0);
function ph(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(ph(s.content, e - i - 1, t - i - 1)));
}
function mh(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = mh(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
function yg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Sg(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function kg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  if (n)
    for (let t in n)
      e[t] = new xg(n[t]);
  return e;
}
let xg = class {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}, bg = class gh {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = kg(i.attrs), this.excluded = null;
    let s = yg(this.attrs);
    this.instance = s ? new zi(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new zi(this, Sg(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new gh(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
};
const yh = 65535, Sh = Math.pow(2, 16);
function Cg(n, e) {
  return n + e * Sh;
}
function tc(n) {
  return n & yh;
}
function wg(n) {
  return (n - (n & yh)) / Sh;
}
const kh = 1, xh = 2, yi = 4, bh = 8;
let Zo = class {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & bh) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (kh | yi)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (xh | yi)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & yi) > 0;
  }
}, Zt = class kn {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && kn.empty)
      return kn.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = tc(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + wg(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], h = a + c;
      if (e <= h) {
        let f = c ? e == a ? -1 : e == h ? 1 : t : t, d = a + i + (f < 0 ? 0 : u);
        if (r)
          return d;
        let p = e == (t < 0 ? a : h) ? null : Cg(l / 3, e - a), m = e == a ? xh : e == h ? kh : yi;
        return (t < 0 ? e != a : e != h) && (m |= bh), new Zo(d, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new Zo(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = tc(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new kn(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? kn.empty : new kn(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
};
Zt.empty = new Zt([]);
let Ch = class Si {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Si(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new Si(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Si();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this.maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Zo(e, i, null);
  }
};
const io = /* @__PURE__ */ Object.create(null);
let le = class {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Zt.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = io[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in io)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return io[e] = t, t.prototype.jsonID = e, t;
  }
}, Se = class _n {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new _n(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new _n(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return _n.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof gg)
        return _n.fail(s.message);
      throw s;
    }
  }
};
function Kl(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(Kl(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return z.fromArray(r);
}
let Ul = class Gn extends le {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new D(Kl(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return Se.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new Jr(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Gn(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Gn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Gn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Gn(t.from, t.to, e.markFromJSON(t.mark));
  }
};
le.jsonID("addMark", Ul);
let Jr = class Yn extends le {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new D(Kl(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return Se.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Ul(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Yn(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Yn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Yn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Yn(t.from, t.to, e.markFromJSON(t.mark));
  }
};
le.jsonID("removeMark", Jr);
let _l = class Xn extends le {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Se.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return Se.fromReplace(e, this.pos, this.pos + 1, new D(z.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Xn(this.pos, t.marks[i]);
        return new Xn(this.pos, this.mark);
      }
    }
    return new Gl(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Xn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Xn(t.pos, e.markFromJSON(t.mark));
  }
};
le.jsonID("addNodeMark", _l);
let Gl = class el extends le {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Se.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return Se.fromReplace(e, this.pos, this.pos + 1, new D(z.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new _l(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new el(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new el(t.pos, e.markFromJSON(t.mark));
  }
};
le.jsonID("removeNodeMark", Gl);
let at = class Rt extends le {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && tl(e, this.from, this.to) ? Se.fail("Structure replace would overwrite content") : Se.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Zt([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Rt(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Rt(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Rt) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? D.empty : new D(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Rt(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? D.empty : new D(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Rt(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Rt(t.from, t.to, D.fromJSON(e, t.slice), !!t.structure);
  }
};
le.jsonID("replace", at);
let Je = class ki extends le {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (tl(e, this.from, this.gapFrom) || tl(e, this.gapTo, this.to)))
      return Se.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return Se.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? Se.fromReplace(e, this.from, this.to, r) : Se.fail("Content does not fit in gap");
  }
  getMap() {
    return new Zt([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new ki(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), s = e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new ki(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ki(t.from, t.to, t.gapFrom, t.gapTo, D.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
};
le.jsonID("replaceAround", Je);
function tl(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function Eg(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let h = a.marks;
    if (!r.isInSet(h) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), d = Math.min(c + a.nodeSize, t), p = r.addToSet(h);
      for (let m = 0; m < h.length; m++)
        h[m].isInSet(p) || (o && o.to == f && o.mark.eq(h[m]) ? o.to = d : i.push(o = new Jr(f, d, h[m])));
      l && l.to == f ? l.to = d : s.push(l = new Ul(f, d, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function Mg(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof bg) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else
      r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let h = a[u], f;
        for (let d = 0; d < i.length; d++) {
          let p = i[d];
          p.step == s - 1 && h.eq(i[d].style) && (f = p);
        }
        f ? (f.to = c, f.step = s) : i.push({ style: h, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new Jr(o.from, o.to, o.style)));
}
function Tg(n, e, t, r = t.contentMatch) {
  let i = n.doc.nodeAt(e), s = [], o = e + 1;
  for (let l = 0; l < i.childCount; l++) {
    let a = i.child(l), c = o + a.nodeSize, u = r.matchType(a.type);
    if (!u)
      s.push(new at(o, c, D.empty));
    else {
      r = u;
      for (let h = 0; h < a.marks.length; h++)
        t.allowsMarkType(a.marks[h].type) || n.step(new Jr(o, c, a.marks[h]));
      if (a.isText && !t.spec.code) {
        let h, f = /\r?\n|\r/g, d;
        for (; h = f.exec(a.text); )
          d || (d = new D(z.from(t.schema.text(" ", t.allowedMarks(a.marks))), 0, 0)), s.push(new at(o + h.index, o + h.index + h[0].length, d));
      }
    }
    o = c;
  }
  if (!r.validEnd) {
    let l = r.fillBefore(z.empty, !0);
    n.replace(o, o, new D(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    n.step(s[l]);
}
function vg(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Og(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !vg(i, s, o))
      break;
  }
  return null;
}
function Ng(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = z.empty, h = 0;
  for (let p = s, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = z.from(r.node(p).copy(u)), h++) : a--;
  let f = z.empty, d = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, f = z.from(i.node(p).copy(f)), d++) : c++;
  n.step(new Je(a, c, o, l, new D(u.append(f), h, d), u.size - h, !0));
}
function Ag(n, e, t = null, r = n) {
  let i = Ig(n, e), s = i && Rg(r, e);
  return s ? i.map(nc).concat({ type: e, attrs: t }).concat(s.map(nc)) : null;
}
function nc(n) {
  return { type: n, attrs: null };
}
function Ig(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function Rg(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Dg(n, e, t) {
  let r = z.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = z.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new Je(i, s, i, s, new D(r, 0, 0), t.length, !0));
}
function zg(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (o.isTextblock && !o.hasMarkup(r, i) && Lg(n.doc, n.mapping.slice(s).map(l), r)) {
      n.clearIncompatible(n.mapping.slice(s).map(l, 1), r);
      let a = n.mapping.slice(s), c = a.map(l, 1), u = a.map(l + o.nodeSize, 1);
      return n.step(new Je(c, u, c + 1, u - 1, new D(z.from(r.create(i, null, o.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function Lg(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function Pg(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new Je(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new D(z.from(o), 0, 0), 1, !0));
}
function $g(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let h = i.node(c), f = i.index(c);
    if (h.type.spec.isolating)
      return !1;
    let d = h.content.cutByIndex(f, h.childCount), p = r && r[u + 1];
    p && (d = d.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || h;
    if (!h.canReplace(f + 1, h.childCount) || !m.type.validContent(d))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function Bg(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = z.empty, o = z.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = z.from(i.node(l).copy(s));
    let u = r && r[c];
    o = z.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  n.step(new at(e, e, new D(s.append(o), t, t), !0));
}
function Fg(n, e) {
  let t = n.resolve(e), r = t.index();
  return Hg(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Hg(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function Vg(n, e, t) {
  let r = new at(e - t, e + t, D.empty, !0);
  n.step(r);
}
function Jg(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function Yl(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (s == 1)
        u = c.canReplace(a, a, i);
      else {
        let h = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = h && c.canReplaceWith(a, a, h[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function Wg(n, e, t = e, r = D.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return wh(i, s, r) ? new at(e, t, r) : new jg(i, s, r).fit();
}
function wh(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
let jg = class {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = z.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = z.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new D(s, o, l);
    return e > -1 ? new Je(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new at(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = so(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, h = null;
          if (t == 1 && (o ? c.matchType(o.type) || (h = c.fillBefore(z.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: h };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = so(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new D(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = so(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new D(Qn(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new D(Qn(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: h, type: f } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      h = h.matchFragment(i);
    }
    let d = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = h.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (h = g, u.push(Eh(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? d : -1)));
    }
    let p = c == l.childCount;
    p || (d = -1), this.placed = Zn(this.placed, t, z.from(u)), this.frontier[t].match = h, p && d < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < d; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = p ? e == 0 ? D.empty : new D(Qn(o.content, e - 1, 1), e - 1, d < 0 ? o.openEnd : e - 1) : new D(Qn(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !oo(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = oo(e, t, i, r, s);
        if (o) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], u = oo(e, l, c, a, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Zn(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Zn(this.placed, this.depth, z.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(z.empty, !0);
    t.childCount && (this.placed = Zn(this.placed, this.frontier.length, t));
  }
};
function Qn(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Qn(n.firstChild.content, e - 1, t)));
}
function Zn(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Zn(n.lastChild.content, e - 1, t)));
}
function so(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Eh(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Eh(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(z.empty, !0)))), n.copy(r);
}
function oo(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !qg(t, s.content, o) ? l : null;
}
function qg(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Kg(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function Ug(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (wh(i, s, r))
    return n.step(new at(e, t, r));
  let o = Th(i, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let f = i.depth, d = i.pos - 1; f > 0; f--, d--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(f) > -1 ? l = f : i.before(f) == d && o.splice(1, 0, -f);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, d = 0; ; d++) {
    let p = f.firstChild;
    if (c.push(p), d == r.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let d = c[f], p = Kg(d.type);
    if (p && !d.sameMarkup(i.node(Math.abs(l) - 1)))
      u = f;
    else if (p || !d.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let d = (f + u + 1) % (r.openStart + 1), p = c[d];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let S = i.node(g - 1), C = i.index(g - 1);
        if (S.canReplaceWith(C, C, p.type, p.marks))
          return n.replace(i.before(g), y ? s.after(g) : t, new D(Mh(r.content, 0, r.openStart, d), d, r.openEnd));
      }
  }
  let h = n.steps.length;
  for (let f = o.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > h)); f--) {
    let d = o[f];
    d < 0 || (e = i.before(d), t = s.after(d));
  }
}
function Mh(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(Mh(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(z.empty, !0));
  }
  return n;
}
function _g(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = Jg(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new D(z.from(r), 0, 0));
}
function Gg(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = Th(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o)
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function Th(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
let vh = class xi extends le {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Se.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return Se.fromReplace(e, this.pos, this.pos + 1, new D(z.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Zt.empty;
  }
  invert(e) {
    return new xi(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new xi(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new xi(t.pos, t.attr, t.value);
  }
};
le.jsonID("attr", vh);
let Oh = class nl extends le {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return Se.ok(r);
  }
  getMap() {
    return Zt.empty;
  }
  invert(e) {
    return new nl(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new nl(t.attr, t.value);
  }
};
le.jsonID("docAttr", Oh);
let zn = class extends Error {
};
zn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
zn.prototype = Object.create(Error.prototype);
zn.prototype.constructor = zn;
zn.prototype.name = "TransformError";
let Yg = class {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Ch();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new zn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = D.empty) {
    let i = Wg(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new D(z.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, D.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return Ug(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return _g(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Gg(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Ng(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Vg(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Dg(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return zg(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return Pg(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new vh(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new Oh(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new _l(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof zi)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new Gl(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return Bg(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Eg(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Mg(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return Tg(this, e, t, r), this;
  }
};
const lo = /* @__PURE__ */ Object.create(null);
class A {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Xg(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = Ve.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(s);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? Ve.empty : t), l == 0 && sc(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), sc(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new v(e) : xn(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? xn(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : xn(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new ve(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return xn(e, e, 0, 0, 1) || new ve(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return xn(e, e, e.content.size, e.childCount, -1) || new ve(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = lo[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in lo)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return lo[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return v.between(this.$anchor, this.$head).getBookmark();
  }
}
A.prototype.visible = !0;
class Xg {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let rc = !1;
function ic(n) {
  !rc && !n.parent.inlineContent && (rc = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class v extends A {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    ic(e), ic(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return A.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new v(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = Ve.empty) {
    if (super.replace(e, t), t == Ve.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof v && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Ds(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new v(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = A.findFrom(t, r, !0) || A.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return A.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (A.findFrom(e, -r, !0) || A.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new v(e, t);
  }
}
A.jsonID("text", v);
class Ds {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Ds(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return v.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class x extends A {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? A.near(s) : new x(s);
  }
  content() {
    return new Ve(Fe.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof x && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Xl(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new x(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new x(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
x.prototype.visible = !1;
A.jsonID("node", x);
class Xl {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Ds(r, r) : new Xl(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && x.isSelectable(r) ? new x(t) : A.near(t);
  }
}
class ve extends A {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = Ve.empty) {
    if (t == Ve.empty) {
      e.delete(0, e.doc.content.size);
      let r = A.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new ve(e);
  }
  map(e) {
    return new ve(e);
  }
  eq(e) {
    return e instanceof ve;
  }
  getBookmark() {
    return Qg;
  }
}
A.jsonID("all", ve);
const Qg = {
  map() {
    return this;
  },
  resolve(n) {
    return new ve(n);
  }
};
function xn(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return v.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && x.isSelectable(l))
        return x.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = xn(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function sc(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof at || i instanceof Je))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), n.setSelection(A.near(n.doc.resolve(o), t));
}
const oc = 1, ti = 2, lc = 4;
class Zg extends Yg {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | oc) & ~ti, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & oc) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= ti, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return it.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & ti) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~ti, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || it.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(A.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= lc, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & lc) > 0;
  }
}
function ac(n, e) {
  return !e || !n ? n : n.bind(e);
}
class er {
  constructor(e, t, r) {
    this.name = e, this.init = ac(t.init, r), this.apply = ac(t.apply, r);
  }
}
const ey = [
  new er("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new er("selection", {
    init(n, e) {
      return n.selection || A.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new er("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new er("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class ao {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ey.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new er(r.key, r.spec.state, r));
    });
  }
}
class In {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let h = 0; h < this.config.plugins.length; h++)
                i.push(h < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new In(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Zg(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new ao(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new In(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new ao(this.schema, e.plugins), r = t.fields, i = new In(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new ao(e.schema, e.plugins), s = new In(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = hh.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = A.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function Nh(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Nh(i, e, {})), t[r] = i;
  }
  return t;
}
class W {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Nh(e.props, this, this.props), this.key = e.key ? e.key.key : Ah("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const co = /* @__PURE__ */ Object.create(null);
function Ah(n) {
  return n in co ? n + "$" + ++co[n] : (co[n] = 0, n + "$");
}
class ee {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Ah(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
function Ih(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = Ih(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Rh(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Rh(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
let w = class fe {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new fe(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new fe(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? fe.empty : e == 0 && t == this.content.length ? this : new fe(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new fe(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new fe([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new fe(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Ih(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Rh(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return ni(0, e);
    if (e == this.size)
      return ni(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let i = this.child(t), s = r + i.nodeSize;
      if (s >= e)
        return s == e ? ni(t + 1, s) : ni(t, r);
      r = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return fe.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new fe(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return fe.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new fe(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return fe.empty;
    if (e instanceof fe)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new fe([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
w.empty = new w([], 0);
const uo = { index: 0, offset: 0 };
function ni(n, e) {
  return uo.index = n, uo.offset = e, uo;
}
function Li(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Li(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Li(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let H = class rl {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Li(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return rl.none;
    if (e instanceof rl)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
H.none = [];
let Pi = class extends Error {
}, N = class bn {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = zh(this.content, e + this.openStart, t);
    return r && new bn(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new bn(Dh(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return bn.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new bn(w.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new bn(e, r, i);
  }
};
N.empty = new N(w.empty, 0, 0);
function Dh(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(Dh(s.content, e - i - 1, t - i - 1)));
}
function zh(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = zh(o.content, e - s - 1, t, o);
  return l && n.replaceChild(i, o.copy(l));
}
function ty(n, e, t) {
  if (t.openStart > n.depth)
    throw new Pi("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Pi("Inconsistent open depths");
  return Lh(n, e, t, 0);
}
function Lh(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = Lh(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return Ut(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = ny(t, n);
      return Ut(s, $h(n, o, l, e, r));
    }
  else
    return Ut(s, $i(n, e, r));
}
function Ph(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Pi("Cannot join " + e.type.name + " onto " + n.type.name);
}
function il(n, e, t) {
  let r = n.node(t);
  return Ph(r, e.node(t)), r;
}
function Kt(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function dr(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (Kt(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    Kt(i.child(l), r);
  e && e.depth == t && e.textOffset && Kt(e.nodeBefore, r);
}
function Ut(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function $h(n, e, t, r, i) {
  let s = n.depth > i && il(n, e, i + 1), o = r.depth > i && il(t, r, i + 1), l = [];
  return dr(null, n, i, l), s && o && e.index(i) == t.index(i) ? (Ph(s, o), Kt(Ut(s, $h(n, e, t, r, i + 1)), l)) : (s && Kt(Ut(s, $i(n, e, i + 1)), l), dr(e, t, i, l), o && Kt(Ut(o, $i(t, r, i + 1)), l)), dr(r, null, i, l), new w(l);
}
function $i(n, e, t) {
  let r = [];
  if (dr(null, n, t, r), n.depth > t) {
    let i = il(n, e, t + 1);
    Kt(Ut(i, $i(n, e, t + 1)), r);
  }
  return dr(e, null, t, r), new w(r);
}
function ny(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(w.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Or {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return H.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new sy(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new Or(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = cc.get(e);
    if (r)
      for (let s = 0; s < r.elts.length; s++) {
        let o = r.elts[s];
        if (o.pos == t)
          return o;
      }
    else
      cc.set(e, r = new ry());
    let i = r.elts[r.i] = Or.resolve(e, t);
    return r.i = (r.i + 1) % iy, i;
  }
}
class ry {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const iy = 12, cc = /* @__PURE__ */ new WeakMap();
let sy = class {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
};
const oy = /* @__PURE__ */ Object.create(null);
class _e {
  /**
  @internal
  */
  constructor(e, t, r, i = H.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || w.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Li(this.attrs, t || e.defaultAttrs || oy) && H.sameSet(this.marks, r || H.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new _e(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new _e(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return N.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new N(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return ty(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Or.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Or.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Bh(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = w.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = H.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!H.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = w.fromJSON(e, t.content), s = e.nodeType(t.type).create(t.attrs, i, r);
    return s.type.checkAttrs(s.attrs), s;
  }
}
_e.prototype.text = void 0;
class Bi extends _e {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Bh(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Bi(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Bi(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Bh(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class en {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new ly(e, t);
    if (r.next == null)
      return en.empty;
    let i = Fh(r);
    r.next && r.err("Unexpected trailing text");
    let s = py(dy(i));
    return my(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return w.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: h } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(h) == -1) {
          i.push(h);
          let f = s(h, l.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
en.empty = new en(!0);
class ly {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Fh(n) {
  let e = [];
  do
    e.push(ay(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function ay(n) {
  let e = [];
  do
    e.push(cy(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function cy(n) {
  let e = fy(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = uy(n, e);
    else
      break;
  return e;
}
function uc(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function uy(n, e) {
  let t = uc(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = uc(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function hy(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.isInGroup(e) && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function fy(n) {
  if (n.eat("(")) {
    let e = Fh(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = hy(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function dy(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          i(s(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u), i(s(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Hh(n, e) {
  return e - n;
}
function hc(n, e) {
  let t = [];
  return r(e), t.sort(Hh);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function py(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(hc(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        hc(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let s = e[r.join(",")] = new en(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(Hh);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function my(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Vh(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Jh(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Wh(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let s = n[i];
    s.validate && s.validate(e[i]);
  }
}
function jh(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new yy(n, r, e[r]);
  return t;
}
let fc = class qh {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = jh(e, r.attrs), this.defaultAttrs = Vh(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == en.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Jh(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new _e(this, this.computeAttrs(e), w.from(t), H.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = w.from(t), this.checkContent(t), new _e(this, this.computeAttrs(e), t, H.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = w.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(w.empty, !0);
    return s ? new _e(this, e, t.append(s), H.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Wh(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : H.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new qh(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function gy(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let s = i === null ? "null" : typeof i;
    if (r.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${s}`);
  };
}
class yy {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? gy(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class zs {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = jh(e, i.attrs), this.excluded = null;
    let s = Vh(this.attrs);
    this.instance = s ? new H(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new H(this, Jh(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new zs(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Wh(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Kh {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = te.from(e.nodes), t.marks = te.from(e.marks || {}), this.nodes = fc.compile(this.spec.nodes, this), this.marks = zs.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = r[o] || (r[o] = en.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? dc(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : dc(this, o.split(" "));
    }
    this.nodeFromJSON = (i) => _e.fromJSON(this, i), this.markFromJSON = (i) => H.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof fc) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Bi(r, r.defaultAttrs, e, H.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function dc(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function Sy(n) {
  return n.tag != null;
}
function ky(n) {
  return n.style != null;
}
let pr = class sl {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (Sy(i))
        this.tags.push(i);
      else if (ky(i)) {
        let s = /[^=]*/.exec(i.style)[0];
        r.indexOf(s) < 0 && r.push(s), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let s = e.nodes[i.node];
      return s.contentMatch.matchType(s);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new mc(this, t, !1);
    return r.addAll(e, H.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new mc(this, t, !0);
    return r.addAll(e, H.none, t.from, t.to), N.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (Cy(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = gc(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = gc(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new sl(e, sl.schemaRules(e)));
  }
};
const Uh = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, xy = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, _h = { ol: !0, ul: !0 }, Nr = 1, ol = 2, mr = 4;
function pc(n, e, t) {
  return e != null ? (e ? Nr : 0) | (e === "full" ? ol : 0) : n && n.whitespace == "pre" ? Nr | ol : t & ~mr;
}
let ri = class {
  constructor(e, t, r, i, s, o) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = o, this.content = [], this.activeMarks = H.none, this.match = s || (o & mr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(w.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Nr)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = w.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(w.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Uh.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}, mc = class {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, s, o = pc(null, t.preserveWhitespace, 0) | (r ? mr : 0);
    i ? s = new ri(i.type, i.attrs, H.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new ri(null, null, H.none, !0, null, o) : s = new ri(e.schema.topNodeType, null, H.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top, s = i.options & ol ? "full" : this.localPreserveWS || (i.options & Nr) > 0;
    if (s === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (s)
        s !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let o = i.content[i.content.length - 1], l = e.previousSibling;
        (!o || l && l.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = this.localPreserveWS, s = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    _h.hasOwnProperty(o) && this.parser.normalizeLists && by(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e:
      if (a ? a.ignore : xy.hasOwnProperty(o))
        this.findInside(e), this.ignoreFallback(e, t);
      else if (!a || a.skip || a.closeParent) {
        a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
        let c, u = this.needsBlock;
        if (Uh.hasOwnProperty(o))
          s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), c = !0, s.type || (this.needsBlock = !0);
        else if (!e.firstChild) {
          this.leafFallback(e, t);
          break e;
        }
        let h = a && a.skip ? t : this.readStyles(e, t);
        h && this.addAll(e, h), c && this.sync(s), this.needsBlock = u;
      } else {
        let c = this.readStyles(e, t);
        c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
      }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i], o = r.getPropertyValue(s);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(s, o, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let s, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        a && (s = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    s && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let s = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(o, t);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let i, s;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, s = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(s);
    for (let o = 0; o < i.length; o++)
      t = this.enterInner(i[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (t = this.enterInner(s, null, t));
    }
    let i = this.findPlace(e, t, r);
    if (i) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let o = H.none;
      for (let l of i.concat(e.marks))
        (s.type ? s.type.allowsMarkType(l.type) : yc(l.type, e.type)) && (o = l.addToSet(o));
      return s.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let s = this.findPlace(e.create(t), r, !1);
    return s && (s = this.enterInner(e, t, r, !0, i)), s;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, s) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = pc(e, s, o.options);
    o.options & mr && o.content.length == 0 && (l |= mr);
    let a = H.none;
    return r = r.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : yc(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new ri(e, t, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= Nr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
};
function by(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && _h.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Cy(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function gc(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function yc(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
let Wr = class Gh {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = ho(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = bi(ho(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && bi(ho(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return bi(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Gh(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Sc(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Sc(e.marks);
  }
};
function Sc(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function ho(n) {
  return n.document || window.document;
}
const kc = /* @__PURE__ */ new WeakMap();
function wy(n) {
  let e = kc.get(n);
  return e === void 0 && kc.set(n, e = Ey(n)), e;
}
function Ey(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function bi(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], s;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (s = wy(r)) && s.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = i.indexOf(" ");
  o > 0 && (t = i.slice(0, o), i = i.slice(o + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let h in c)
      if (c[h] != null) {
        let f = h.indexOf(" ");
        f > 0 ? a.setAttributeNS(h.slice(0, f), h.slice(f + 1), c[h]) : h == "style" && a.style ? a.style.cssText = c[h] : a.setAttribute(h, c[h]);
      }
  }
  for (let h = u; h < e.length; h++) {
    let f = e[h];
    if (f === 0) {
      if (h < e.length - 1 || h > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: d, contentDOM: p } = bi(n, f, t, r);
      if (a.appendChild(d), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const ne = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Ln = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let ll = null;
const rt = function(n, e, t) {
  let r = ll || (ll = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, My = function() {
  ll = null;
}, tn = function(n, e, t, r) {
  return t && (xc(n, e, t, r, -1) || xc(n, e, t, r, 1));
}, Ty = /^(img|br|input|textarea|hr)$/i;
function xc(n, e, t, r, i) {
  for (var s; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : De(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || jr(n) || Ty.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = ne(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      let o = n.childNodes[e + (i < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false")
        if (!((s = o.pmViewDesc) === null || s === void 0) && s.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        n = o, e = i < 0 ? De(n) : 0;
    } else
      return !1;
  }
}
function De(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function vy(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = De(n);
    } else if (n.parentNode && !jr(n))
      e = ne(n), n = n.parentNode;
    else
      return null;
  }
}
function Oy(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !jr(n))
      e = ne(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function Ny(n, e, t) {
  for (let r = e == 0, i = e == De(n); r || i; ) {
    if (n == t)
      return !0;
    let s = ne(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == De(n);
  }
}
function jr(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Ls = function(n) {
  return n.focusNode && tn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function zt(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Ay(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Iy(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(De(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(De(r.startContainer), r.startOffset) };
  }
}
const Ge = typeof navigator < "u" ? navigator : null, bc = typeof document < "u" ? document : null, Nt = Ge && Ge.userAgent || "", al = /Edge\/(\d+)/.exec(Nt), Yh = /MSIE \d/.exec(Nt), cl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Nt), Ee = !!(Yh || cl || al), Ct = Yh ? document.documentMode : cl ? +cl[1] : al ? +al[1] : 0, ze = !Ee && /gecko\/(\d+)/i.test(Nt);
ze && +(/Firefox\/(\d+)/.exec(Nt) || [0, 0])[1];
const ul = !Ee && /Chrome\/(\d+)/.exec(Nt), oe = !!ul, Xh = ul ? +ul[1] : 0, xe = !Ee && !!Ge && /Apple Computer/.test(Ge.vendor), Pn = xe && (/Mobile\/\w+/.test(Nt) || !!Ge && Ge.maxTouchPoints > 2), Ie = Pn || (Ge ? /Mac/.test(Ge.platform) : !1), Ry = Ge ? /Win/.test(Ge.platform) : !1, ot = /Android \d/.test(Nt), qr = !!bc && "webkitFontSmoothing" in bc.documentElement.style, Dy = qr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function zy(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function Ze(n, e) {
  return typeof n == "number" ? n : n[e];
}
function Ly(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Cc(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; ) {
    if (o.nodeType != 1) {
      o = Ln(o);
      continue;
    }
    let l = o, a = l == s.body, c = a ? zy(s) : Ly(l), u = 0, h = 0;
    if (e.top < c.top + Ze(r, "top") ? h = -(c.top - e.top + Ze(i, "top")) : e.bottom > c.bottom - Ze(r, "bottom") && (h = e.bottom - e.top > c.bottom - c.top ? e.top + Ze(i, "top") - c.top : e.bottom - c.bottom + Ze(i, "bottom")), e.left < c.left + Ze(r, "left") ? u = -(c.left - e.left + Ze(i, "left")) : e.right > c.right - Ze(r, "right") && (u = e.right - c.right + Ze(i, "right")), u || h)
      if (a)
        s.defaultView.scrollBy(u, h);
      else {
        let d = l.scrollLeft, p = l.scrollTop;
        h && (l.scrollTop += h), u && (l.scrollLeft += u);
        let m = l.scrollLeft - d, g = l.scrollTop - p;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let f = a ? "fixed" : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(f))
      break;
    o = f == "absolute" ? o.offsetParent : Ln(o);
  }
}
function Py(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Qh(n.dom) };
}
function Qh(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Ln(r))
    ;
  return e;
}
function $y({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Zh(t, r == 0 ? 0 : r - e);
}
function Zh(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let dn = null;
function By(n) {
  if (n.setActive)
    return n.setActive();
  if (dn)
    return n.focus(dn);
  let e = Qh(n);
  n.focus(dn == null ? {
    get preventScroll() {
      return dn = { preventScroll: !0 }, !0;
    }
  } : void 0), dn || (dn = !1, Zh(e, 0));
}
function ef(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
  for (let u = n.firstChild, h = 0; u; u = u.nextSibling, h++) {
    let f;
    if (u.nodeType == 1)
      f = u.getClientRects();
    else if (u.nodeType == 3)
      f = rt(u).getClientRects();
    else
      continue;
    for (let d = 0; d < f.length; d++) {
      let p = f[d];
      if (p.top <= o && p.bottom >= l) {
        o = Math.max(p.bottom, o), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = u, r = m, i = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (s = h + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = h + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? Fy(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : ef(t, i);
}
function Fy(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let s = dt(r, 1);
    if (s.top != s.bottom && Ql(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function Ql(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function Hy(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function Vy(n, e, t) {
  let { node: r, offset: i } = ef(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function Jy(n, e, t, r) {
  let i = -1;
  for (let s = e, o = !1; s != n.dom; ) {
    let l = n.docView.nearestDesc(s, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? i = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    s = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function tf(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (Ql(e, c))
            return tf(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function Wy(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, s = Iy(t, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!Ql(e, c) || (o = tf(n.dom, e, c), !o))
      return null;
  }
  if (xe)
    for (let c = o; r && c; c = Ln(c))
      c.draggable && (r = void 0);
  if (o = Hy(o, e), r) {
    if (ze && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], h;
      u.nodeName == "IMG" && (h = u.getBoundingClientRect()).right <= e.left && h.bottom > e.top && i++;
    }
    let c;
    qr && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Jy(n, r, i, e));
  }
  l == null && (l = Vy(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function wc(n) {
  return n.top < n.bottom || n.left < n.right;
}
function dt(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (wc(r))
      return r;
  }
  return Array.prototype.find.call(t, wc) || n.getBoundingClientRect();
}
const jy = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function nf(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = qr || ze;
  if (r.nodeType == 3)
    if (o && (jy.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = dt(rt(r, i, i), t);
      if (ze && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = dt(rt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = dt(rt(r, i, i + 1), -1);
          if (u.top != a.top)
            return qn(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, qn(dt(rt(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == De(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return fo(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < De(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return fo(a.getBoundingClientRect(), !0);
    }
    return fo(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == De(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? rt(a, De(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return qn(dt(c, 1), !1);
  }
  if (s == null && i < De(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? rt(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return qn(dt(c, -1), !0);
  }
  return qn(dt(r.nodeType == 3 ? rt(r) : r, -t), t >= 0);
}
function qn(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function fo(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function rf(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function qy(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return rf(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = nf(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = rt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Ky = /[\u0590-\u08ac]/;
function Uy(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return l ? !Ky.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : rf(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: h } = n.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", t, "character");
    let d = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), g = p && !d.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(u, h), a && (a != u || c != h) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let Ec = null, Mc = null, Tc = !1;
function _y(n, e, t) {
  return Ec == e && Mc == t ? Tc : (Ec = e, Mc = t, Tc = t == "up" || t == "down" ? qy(n, e, t) : Uy(n, e, t));
}
const Le = 0, vc = 1, Pt = 2, Ye = 3;
class Kr {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Le, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > ne(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          for (let o = 0; o < i.children.length; o++) {
            let l = i.children[o];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof of) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof sf && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? ne(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? ne(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = o;
        for (let h = l; h > 0; h--) {
          let f = this.children[h - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = ne(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let h = this.children[u];
          if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
            s = ne(h.dom);
            break;
          }
          t += h.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let d = 0, p = 0; d < this.children.length; d++) {
      let m = this.children[d], g = p + m.size;
      if (s > p && o < g)
        return m.setSelection(e - p - m.border, t - p - m.border, r, i);
      p = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.root.getSelection(), u = r.domSelectionRange(), h = !1;
    if ((ze || xe) && e == t) {
      let { node: d, offset: p } = l;
      if (d.nodeType == 3) {
        if (h = !!(p && d.nodeValue[p - 1] == `
`), h && p == d.nodeValue.length)
          for (let m = d, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: ne(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = d.childNodes[p - 1];
        h = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (ze && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) {
      let d = u.focusNode.childNodes[u.focusOffset];
      d && d.contentEditable == "false" && (i = !0);
    }
    if (!(i || h && xe) && tn(l.node, l.offset, u.anchorNode, u.anchorOffset) && tn(a.node, a.offset, u.focusNode, u.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !(h && ze)) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let p = l;
        l = a, a = p;
      }
      let d = document.createRange();
      d.setEnd(a.node, a.offset), d.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(d);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? Pt : vc, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = Ye : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? Pt : Ye;
      }
      r = o;
    }
    this.dirty = Pt;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? Pt : vc;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class sf extends Kr {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == Le && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Gy extends Kr {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class nn extends Kr {
  constructor(e, t, r, i, s) {
    super(e, [], r, i), this.mark = t, this.spec = s;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = Wr.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new nn(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    return this.dirty & Ye || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != Ye && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Le) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Le;
    }
  }
  slice(e, t, r) {
    let i = nn.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = fl(s, t, o, r)), e > 0 && (s = fl(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class wt extends Kr {
  constructor(e, t, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, h = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      u || ({ dom: u, contentDOM: h } = Wr.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !h && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let f = u;
    return u = cf(u, r, t), c ? a = new Yy(e, t, r, i, u, h || null, f, c, s, o + 1) : t.isText ? new Ps(e, t, r, i, u, f, s) : new wt(e, t, r, i, u, h || null, f, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => w.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Le && e.eq(this.node) && Fi(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new Qy(this, o && o.node, e);
    t0(this.node, this.innerDeco, (c, u, h) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !h && a.syncToMarks(u == this.node.childCount ? H.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, h, f) => {
      a.syncToMarks(c.marks, r, e);
      let d;
      a.findNodeMatch(c, u, h, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (d = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, h, d, e) || a.updateNextNode(c, u, h, e, f, i) || a.addNode(c, u, h, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == Pt) && (o && this.protectLocalComposition(e, o), lf(this.contentDOM, this.children, e), Pn && n0(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof v) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.input.compositionNode;
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = s.nodeValue, l = r0(this.node.content, o, r - t, i - t);
      return l < 0 ? null : { node: s, pos: l, text: o };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new Gy(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = fl(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == Ye || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Le;
  }
  updateOuterDeco(e) {
    if (Fi(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = af(this.dom, this.nodeDOM, hl(this.outerDeco, this.node, t), hl(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Oc(n, e, t, r, i) {
  cf(r, e, n);
  let s = new wt(void 0, n, e, t, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class Ps extends wt {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == Ye || this.dirty != Le && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Le || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Le, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new Ps(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Ye);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class of extends Kr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Le && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Yy extends wt {
  constructor(e, t, r, i, s, o, l, a, c, u) {
    super(e, t, r, i, s, o, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == Ye)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function lf(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Nc(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof nn) {
      let a = r ? r.previousSibling : n.lastChild;
      lf(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Nc(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const gr = function(n) {
  n && (this.nodeName = n);
};
gr.prototype = /* @__PURE__ */ Object.create(null);
const $t = [new gr()];
function hl(n, e, t) {
  if (n.length == 0)
    return $t;
  let r = t ? $t[0] : new gr(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new gr(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(r = new gr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function af(n, e, t, r) {
  if (t == $t && r == $t)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = $t[0]), i = a;
    }
    Xy(i, l || $t[0], o);
  }
  return i;
}
function Xy(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function cf(n, e, t) {
  return af(n, n, $t, hl(e, t, n.nodeType != 1));
}
function Fi(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Nc(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Qy {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Zy(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = Le, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = nn.create(this.top, e[s], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == Ye && o.dom == o.contentDOM && (o.dirty = Pt), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof wt) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != s)
          return !1;
        let u = a.dom, h, f = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Ye && Fi(t, a.outerDeco));
        if (!f && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!f && (h = this.recreateWrapper(a, e, t, r, i, o)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = h, h.contentDOM && (h.dirty = Pt, h.updateChildren(i, o + 1), h.dirty = Le), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Fi(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = wt.create(this.top, t, r, i, s, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    let o = wt.create(this.top, e, t, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new sf(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof nn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Ps) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((xe || oe) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new of(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Zy(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = t.children[r - 1];
          if (c instanceof nn)
            t = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (a) {
        if (a != n.child(i - 1))
          break;
        --i, s.set(l, i), o.push(l);
      }
    }
  return { index: i, matched: s, matches: o.reverse() };
}
function e0(n, e) {
  return n.type.side - e.type.side;
}
function t0(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(s, u), c), s += u.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, h;
    for (; o < i.length && i[o].to == s; ) {
      let g = i[o++];
      g.widget && (u ? (h || (h = [u])).push(g) : u = g);
    }
    if (u)
      if (h) {
        h.sort(e0);
        for (let g = 0; g < h.length; g++)
          t(h[g], c, !!a);
      } else
        t(u, c, !!a);
    let f, d;
    if (a)
      d = -1, f = a, a = null;
    else if (c < n.childCount)
      d = c, f = n.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= s && l.splice(g--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let p = s + f.nodeSize;
    if (f.isText) {
      let g = p;
      o < i.length && i[o].from < g && (g = i[o].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < p && (a = f.cut(g - s), f = f.cut(0, g - s), p = g, d = -1);
    } else
      for (; o < i.length && i[o].to < p; )
        o++;
    let m = f.isInline && !f.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(f, m, e.forChild(s, f), d), s = p;
  }
}
function n0(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function r0(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      if (s >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function fl(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, u = l += a.size;
    c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > t && s.push(a.slice(t - c, a.size, r)));
  }
  return s;
}
function Zl(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (Ls(t)) {
    for (a = o; i && !i.node; )
      i = i.parent;
    let h = i.node;
    if (i && h.isAtom && x.isSelectable(h) && i.parent && !(h.isInline && Ny(t.focusNode, t.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new x(o == f ? l : r.resolve(f));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let h = o, f = o;
      for (let d = 0; d < t.rangeCount; d++) {
        let p = t.getRangeAt(d);
        h = Math.min(h, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (h < 0)
        return null;
      [a, o] = f == n.state.selection.anchor ? [f, h] : [h, f], l = r.resolve(o);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let h = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = ea(n, u, l, h);
  }
  return c;
}
function uf(n) {
  return n.editable ? n.hasFocus() : ff(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function lt(n, e = !1) {
  let t = n.state.selection;
  if (hf(n, t), !!uf(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && oe) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && tn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      s0(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      Ac && !(t instanceof v) && (t.$from.parent.inlineContent || (s = Ic(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Ic(n, t.to))), n.docView.setSelection(r, i, n, e), Ac && (s && Rc(s), o && Rc(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && i0(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Ac = xe || oe && Xh < 63;
function Ic(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (xe && i && i.contentEditable == "false")
    return po(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return po(i);
    if (s)
      return po(s);
  }
}
function po(n) {
  return n.contentEditable = "true", xe && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Rc(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function i0(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!uf(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function s0(n) {
  let e = n.domSelection();
  if (!e)
    return;
  let t = n.cursorWrapper.dom, r = t.nodeName == "IMG";
  r ? e.collapse(t.parentNode, ne(t) + 1) : e.collapse(t, 0), !r && !n.state.selection.visible && Ee && Ct <= 11 && (t.disabled = !0, t.disabled = !1);
}
function hf(n, e) {
  if (e instanceof x) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Dc(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Dc(n);
}
function Dc(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function ea(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || v.between(e, t, r);
}
function zc(n) {
  return n.editable && !n.hasFocus() ? !1 : ff(n);
}
function ff(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function o0(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return tn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function dl(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && A.findFrom(s, e);
}
function mt(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Lc(n, e, t) {
  let r = n.state.selection;
  if (r instanceof v)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return mt(n, new v(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = dl(n.state, e);
        return i && i instanceof x ? mt(n, i) : !1;
      } else if (!(Ie && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? x.isSelectable(s) ? mt(n, new x(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : qr ? mt(n, new v(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof x && r.node.isInline)
      return mt(n, new v(e > 0 ? r.$to : r.$from));
    {
      let i = dl(n.state, e);
      return i ? mt(n, i) : !1;
    }
  }
}
function Hi(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function yr(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function pn(n, e) {
  return e < 0 ? l0(n) : a0(n);
}
function l0(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (ze && t.nodeType == 1 && r < Hi(t) && yr(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (yr(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (df(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && yr(l, -1); )
          i = t.parentNode, s = ne(l), l = l.previousSibling;
        if (l)
          t = l, r = Hi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? pl(n, t, r) : i && pl(n, i, s);
}
function a0(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Hi(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (yr(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (df(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && yr(l, 1); )
          s = l.parentNode, o = ne(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Hi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && pl(n, s, o);
}
function df(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function c0(n, e) {
  for (; n && e == n.childNodes.length && !jr(n); )
    e = ne(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function u0(n, e) {
  for (; n && !e && !jr(n); )
    e = ne(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function pl(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = c0(e, t)) ? (e = o, t = 0) : (s = u0(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (Ls(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && lt(n);
  }, 50);
}
function Pc(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(oe || Ry) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function $c(n, e, t) {
  let r = n.state.selection;
  if (r instanceof v && !r.empty || t.indexOf("s") > -1 || Ie && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = dl(n.state, e);
    if (o && o instanceof x)
      return mt(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof ve ? A.near(o, e) : A.findFrom(o, e);
    return l ? mt(n, l) : !1;
  }
  return !1;
}
function Bc(n, e) {
  if (!(n.state.selection instanceof v))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Fc(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function h0(n) {
  if (!xe || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Fc(n, r, "true"), setTimeout(() => Fc(n, r, "false"), 20);
  }
  return !1;
}
function f0(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function d0(n, e) {
  let t = e.keyCode, r = f0(e);
  if (t == 8 || Ie && t == 72 && r == "c")
    return Bc(n, -1) || pn(n, -1);
  if (t == 46 && !e.shiftKey || Ie && t == 68 && r == "c")
    return Bc(n, 1) || pn(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Ie && t == 66 && r == "c") {
    let i = t == 37 ? Pc(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Lc(n, i, r) || pn(n, i);
  } else if (t == 39 || Ie && t == 70 && r == "c") {
    let i = t == 39 ? Pc(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Lc(n, i, r) || pn(n, i);
  } else {
    if (t == 38 || Ie && t == 80 && r == "c")
      return $c(n, -1, r) || pn(n, -1);
    if (t == 40 || Ie && t == 78 && r == "c")
      return h0(n) || $c(n, 1, r) || pn(n, 1);
    if (r == (Ie ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function ta(n, e) {
  n.someProp("transformCopied", (d) => {
    e = d(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let d = r.firstChild;
    t.push(d.type.name, d.attrs != d.type.defaultAttrs ? d.attrs : null), r = d.content;
  }
  let o = n.someProp("clipboardSerializer") || Wr.fromSchema(n.state.schema), l = Sf(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, h = 0;
  for (; c && c.nodeType == 1 && (u = yf[c.nodeName.toLowerCase()]); ) {
    for (let d = u.length - 1; d >= 0; d--) {
      let p = l.createElement(u[d]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), h++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${h ? ` -${h}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (d) => d(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function na(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = !!e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, s || r, n);
    }), s)
      return l = new N(w.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), n.someProp("transformPasted", (f) => {
        l = f(l, n, !0);
      }), l;
    let h = n.someProp("clipboardTextParser", (f) => f(e, i, r, n));
    if (h)
      l = h;
    else {
      let f = i.marks(), { schema: d } = n.state, p = Wr.fromSchema(d);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(d.text(m, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (h) => {
      t = h(t, n);
    }), o = y0(t), qr && S0(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let h = +u[3]; h > 0; h--) {
      let f = o.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      o = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || pr.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !p0.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = k0(Hc(l, +u[1], +u[2]), u[4]);
  else if (l = N.maxOpen(m0(l.content, i), !0), l.openStart || l.openEnd) {
    let h = 0, f = 0;
    for (let d = l.content.firstChild; h < l.openStart && !d.type.spec.isolating; h++, d = d.firstChild)
      ;
    for (let d = l.content.lastChild; f < l.openEnd && !d.type.spec.isolating; f++, d = d.lastChild)
      ;
    l = Hc(l, h, f);
  }
  return n.someProp("transformPasted", (h) => {
    l = h(l, n, a);
  }), l;
}
const p0 = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function m0(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && mf(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = gf(o[o.length - 1], s.length));
        let u = pf(l, a);
        o.push(u), i = i.matchType(u.type), s = a;
      }
    }), o)
      return w.from(o);
  }
  return n;
}
function pf(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, w.from(n));
  return n;
}
function mf(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = mf(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(w.from(pf(t, n, i + 1))));
  }
}
function gf(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, gf(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(w.empty, !0);
  return n.copy(t.append(r));
}
function ml(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = ml(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(w.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function Hc(n, e, t) {
  return e < n.openStart && (n = new N(ml(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new N(ml(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const yf = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Vc = null;
function Sf() {
  return Vc || (Vc = document.implementation.createHTMLDocument("title"));
}
let mo = null;
function g0(n) {
  let e = window.trustedTypes;
  return e ? (mo || (mo = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), mo.createHTML(n)) : n;
}
function y0(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Sf().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && yf[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = g0(n), i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function S0(n) {
  let e = n.querySelectorAll(oe ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function k0(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = w.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new N(i, s, o);
}
const be = {}, Ce = {}, x0 = { touchstart: !0, touchmove: !0 };
class b0 {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function C0(n) {
  for (let e in be) {
    let t = be[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      E0(n, r) && !ra(n, r) && (n.editable || !(r.type in Ce)) && t(n, r);
    }, x0[e] ? { passive: !0 } : void 0);
  }
  xe && n.dom.addEventListener("input", () => null), gl(n);
}
function xt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function w0(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function gl(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => ra(n, r));
  });
}
function ra(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function E0(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function M0(n, e) {
  !ra(n, e) && be[e.type] && (n.editable || !(e.type in Ce)) && be[e.type](n, e);
}
Ce.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !xf(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(ot && oe && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Pn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, zt(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || d0(n, t) ? t.preventDefault() : xt(n, "key");
};
Ce.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Ce.keypress = (n, e) => {
  let t = e;
  if (xf(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Ie && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof v) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode), s = () => n.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i, s)) && n.dispatch(s()), t.preventDefault();
  }
};
function $s(n) {
  return { left: n.clientX, top: n.clientY };
}
function T0(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function ia(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function Rn(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function v0(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && x.isSelectable(r) ? (Rn(n, new x(t), "pointer"), !0) : !1;
}
function O0(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof x && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (x.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (Rn(n, x.create(n.state.doc, i), "pointer"), !0) : !1;
}
function N0(n, e, t, r, i) {
  return ia(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? O0(n, t) : v0(n, t));
}
function A0(n, e, t, r) {
  return ia(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function I0(n, e, t, r) {
  return ia(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || R0(n, t, r);
}
function R0(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Rn(n, v.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      Rn(n, v.create(r, l + 1, l + 1 + o.content.size), "pointer");
    else if (x.isSelectable(o))
      Rn(n, x.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function sa(n) {
  return Ar(n);
}
const kf = Ie ? "metaKey" : "ctrlKey";
be.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = sa(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && T0(t, n.input.lastClick) && !t[kf] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s, button: t.button };
  let o = n.posAtCoords($s(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new D0(n, o, t, !!r)) : (s == "doubleClick" ? A0 : I0)(n, o.pos, o.inside, t) ? t.preventDefault() : xt(n, "pointer"));
};
let D0 = class {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[kf], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      s = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof x && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && ze && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), xt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => lt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords($s(e))), this.updateAllowDefault(e), this.allowDefault || !t ? xt(this.view, "pointer") : N0(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    xe && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    oe && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Rn(this.view, A.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : xt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), xt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
};
be.touchstart = (n) => {
  n.input.lastTouch = Date.now(), sa(n), xt(n, "pointer");
};
be.touchmove = (n) => {
  n.input.lastTouch = Date.now(), xt(n, "pointer");
};
be.contextmenu = (n) => sa(n);
function xf(n, e) {
  return n.composing ? !0 : xe && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const z0 = ot ? 5e3 : -1;
Ce.compositionstart = Ce.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof v && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Ar(n, !0), n.markCursor = null;
    else if (Ar(n, !e.selection.empty), ze && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  bf(n, z0);
};
Ce.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, bf(n, 20));
};
function bf(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Ar(n), e));
}
function Cf(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = P0()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function L0(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = vy(e.focusNode, e.focusOffset), r = Oy(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, s = n.domObserver.lastChangedTextNode;
    if (t == s || r == s)
      return s;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function P0() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Ar(n, e = !1) {
  if (!(ot && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Cf(n), e || n.docView && n.docView.dirty) {
      let t = Zl(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function $0(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Ir = Ee && Ct < 15 || Pn && Dy < 604;
be.copy = Ce.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = Ir ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = ta(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : $0(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function B0(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function F0(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Rr(n, r.value, null, i, e) : Rr(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Rr(n, e, t, r, i) {
  let s = na(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, s || N.empty)))
    return !0;
  if (!s)
    return !1;
  let o = B0(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function wf(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
Ce.paste = (n, e) => {
  let t = e;
  if (n.composing && !ot)
    return;
  let r = Ir ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Rr(n, wf(r), r.getData("text/html"), i, t) ? t.preventDefault() : F0(n, t);
};
let Ef = class {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
};
const H0 = Ie ? "altKey" : "ctrlKey";
function Mf(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[H0];
}
be.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords($s(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof x ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = x.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let h = n.docView.nearestDesc(t.target, !0);
      h && h.node.type.spec.draggable && h != n.docView && (o = x.create(n.state.doc, h.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c, slice: u } = ta(n, l);
  (!t.dataTransfer.files.length || !oe || Xh > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Ir ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Ir || t.dataTransfer.setData("text/plain", c), n.dragging = new Ef(u, Mf(n, t), o);
};
be.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Ce.dragover = Ce.dragenter = (n, e) => e.preventDefault();
Ce.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords($s(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n, !1);
  }) : o = na(n, wf(t.dataTransfer), Ir ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && Mf(n, t));
  if (n.someProp("handleDrop", (p) => p(n, t, o || N.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? Yl(n.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), h = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, f = c.doc;
  if (h ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(f))
    return;
  let d = c.doc.resolve(u);
  if (h && x.isSelectable(o.content.firstChild) && d.nodeAfter && d.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new x(d));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, S) => p = S), c.setSelection(ea(n, d, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
be.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && lt(n);
  }, 20));
};
be.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
be.beforeinput = (n, e) => {
  if (oe && ot && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, zt(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Ce)
  be[n] = Ce[n];
function Dr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
let Jc = class Tf {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || _t, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new Qe(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Tf && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Dr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}, Sr = class yl {
  constructor(e, t) {
    this.attrs = e, this.spec = t || _t;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new Qe(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof yl && Dr(this.attrs, e.attrs) && Dr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof yl;
  }
  destroy() {
  }
}, V0 = class vf {
  constructor(e, t) {
    this.attrs = e, this.spec = t || _t;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new Qe(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof vf && Dr(this.attrs, e.attrs) && Dr(this.spec, e.spec);
  }
  destroy() {
  }
}, Qe = class tr {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new tr(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new tr(e, e, new Jc(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new tr(e, t, new Sr(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new tr(e, t, new V0(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Sr;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Jc;
  }
};
const Cn = [], _t = {};
let ie = class pt {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : Cn, this.children = t.length ? t : Cn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? Vi(t, e, 0, _t) : se;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == se || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || _t);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? J0(this.children, o || [], e, t, r, i, s) : o ? new pt(o.sort(Gt), Cn) : se;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == se ? pt.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = Af(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, Vi(u, l, c + 1, _t)), s += 3;
      }
    });
    let o = Nf(s ? If(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new pt(o.length ? this.local.concat(o).sort(Gt) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == se ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let u = 0, h; u < e.length; u++)
        (h = e[u]) && h.from > l && h.to < a && (e[u] = null, (o || (o = [])).push(h));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != se ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new pt(i, r) : se;
  }
  forChild(e, t) {
    if (this == se)
      return this;
    if (t.isLeaf)
      return pt.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof Sr) {
        let c = Math.max(s, a.from) - s, u = Math.min(o, a.to) - s;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new pt(i.sort(Gt), Cn);
      return r ? new Of([l, r]) : l;
    }
    return r || se;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof pt) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return oa(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == se)
      return Cn;
    if (e.inlineContent || !this.local.some(Sr.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Sr || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
};
ie.empty = new ie([], []);
ie.removeOverlap = oa;
const se = ie.empty;
let Of = class wn {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, _t));
    return wn.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return ie.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != se && (s instanceof wn ? r = r.concat(s.members) : r.push(s));
    }
    return wn.from(r);
  }
  eq(e) {
    if (!(e instanceof wn) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? oa(r ? t : t.sort(Gt)) : Cn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return se;
      case 1:
        return e[0];
      default:
        return new wn(e.every((t) => t instanceof ie) ? e : e.reduce((t, r) => t.concat(r instanceof ie ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
};
function J0(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, u = s; c < t.maps.length; c++) {
    let h = 0;
    t.maps[c].forEach((f, d, p, m) => {
      let g = m - p - (d - f);
      for (let y = 0; y < l.length; y += 3) {
        let S = l[y + 1];
        if (S < 0 || f > S + u - h)
          continue;
        let C = l[y] + u - h;
        d >= C ? l[y + 1] = f <= C ? -2 : -1 : f >= u && g && (l[y] += g, l[y + 1] += g);
      }
      h += g;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + s), h = u - i;
      if (h < 0 || h >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + s, -1), d = f - i, { index: p, offset: m } = r.content.findIndex(h), g = r.maybeChild(p);
      if (g && m == h && m + g.nodeSize == d) {
        let y = l[c + 2].mapInner(t, g, u + 1, n[c] + s + 1, o);
        y != se ? (l[c] = h, l[c + 1] = d, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = W0(l, n, e, t, i, s, o), u = Vi(c, r, 0, o);
    e = u.local;
    for (let h = 0; h < l.length; h += 3)
      l[h + 1] < 0 && (l.splice(h, 3), h -= 3);
    for (let h = 0, f = 0; h < u.children.length; h += 3) {
      let d = u.children[h];
      for (; f < l.length && l[f] < d; )
        f += 3;
      l.splice(f, 0, u.children[h], u.children[h + 1], u.children[h + 2]);
    }
  }
  return new ie(e.sort(Gt), l);
}
function Nf(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Qe(i.from + e, i.to + e, i.type));
  }
  return t;
}
function W0(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let h = a.local[u].map(r, i, c);
      h ? t.push(h) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function Af(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function If(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Vi(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = Af(n, l, a + t);
    if (c) {
      s = !0;
      let u = Vi(c, l, t + a + 1, r);
      u != se && i.push(a, a + l.nodeSize, u);
    }
  });
  let o = Nf(s ? If(n) : n, -t).sort(Gt);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new ie(o, i) : se;
}
function Gt(n, e) {
  return n.from - e.from || n.to - e.to;
}
function oa(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), Wc(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), Wc(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Wc(n, e, t) {
  for (; e < n.length && Gt(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function go(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != se && e.push(r);
  }), n.cursorWrapper && e.push(ie.create(n.state.doc, [n.cursorWrapper.deco])), Of.from(e);
}
const j0 = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, q0 = Ee && Ct <= 11;
class K0 {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class U0 {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new K0(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Ee && Ct <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), q0 && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, j0)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (zc(this.view)) {
      if (this.suppressingSelectionUpdates)
        return lt(this.view);
      if (Ee && Ct <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && tn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Ln(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Ln(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && zc(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let h = this.registerMutation(t[u], a);
        h && (s = s < 0 ? h.from : Math.min(h.from, s), o = o < 0 ? h.to : Math.max(h.to, o), h.typeOver && (l = !0));
      }
    if (ze && a.length) {
      let u = a.filter((h) => h.nodeName == "BR");
      if (u.length == 2) {
        let [h, f] = u;
        h.parentNode && h.parentNode.parentNode == f.parentNode ? f.remove() : h.remove();
      } else {
        let { focusNode: h } = this.currentSelection;
        for (let f of u) {
          let d = f.parentNode;
          d && d.nodeName == "LI" && (!h || Y0(e, h) != d) && f.remove();
        }
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Ls(r) && (c = Zl(e)) && c.eq(A.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, lt(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), _0(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || lt(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let h = e.addedNodes[u];
        t.push(h), h.nodeType == 3 && (this.lastChangedTextNode = h);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (Ee && Ct <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: h, nextSibling: f } = e.addedNodes[u];
          (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (i = h), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (s = f);
        }
      let o = i && i.parentNode == e.target ? ne(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? ne(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
        from: r.posAtStart,
        to: r.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      });
  }
}
let jc = /* @__PURE__ */ new WeakMap(), qc = !1;
function _0(n) {
  if (!jc.has(n) && (jc.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = ze, qc)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), qc = !0;
  }
}
function Kc(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, s = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return tn(o.node, o.offset, i, s) && ([t, r, i, s] = [i, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: s };
}
function G0(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Kc(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Kc(n, t) : null;
}
function Y0(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function X0(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], Ls(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), oe && n.input.lastKeyCode === 8)
    for (let g = s; g > i; g--) {
      let y = r.childNodes[g - 1], S = y.pmViewDesc;
      if (y.nodeName == "BR" && !S) {
        s = g;
        break;
      }
      if (!S || S.size)
        break;
    }
  let h = n.state.doc, f = n.someProp("domParser") || pr.fromSchema(n.state.schema), d = h.resolve(o), p = null, m = f.parse(r, {
    topNode: d.parent,
    topMatch: d.parent.contentMatchAt(d.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: d.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Q0,
    context: d
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = g), p = { anchor: g + o, head: y + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function Q0(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (xe && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || xe && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Z0 = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function e1(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let M = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, P = Zl(n, M);
    if (P && !n.state.selection.eq(P)) {
      if (oe && ot && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (hn) => hn(n, zt(13, "Enter"))))
        return;
      let q = n.state.tr.setSelection(P);
      M == "pointer" ? q.setMeta("pointer", !0) : M == "key" && q.scrollIntoView(), s && q.setMeta("composition", s), n.dispatch(q);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = X0(n, e, t), u = n.state.doc, h = u.slice(c.from, c.to), f, d;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (f = n.state.selection.to, d = "end") : (f = n.state.selection.from, d = "start"), n.input.lastKeyCode = null;
  let p = r1(h.content, c.doc.content, c.from, f, d);
  if (p && n.input.domChangeCount++, (Pn && n.input.lastIOSEnter > Date.now() - 225 || ot) && i.some((M) => M.nodeType == 1 && !Z0.test(M.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (M) => M(n, zt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof v && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let M = Uc(n, n.state.doc, c.sel);
        if (M && !M.eq(n.state.selection)) {
          let P = n.state.tr.setSelection(M);
          s && P.setMeta("composition", s), n.dispatch(P);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof v && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), Ee && Ct <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), y = u.resolve(p.start), S = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA, C;
  if ((Pn && n.input.lastIOSEnter > Date.now() - 225 && (!S || i.some((M) => M.nodeName == "DIV" || M.nodeName == "P")) || !S && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", "")) && (C = A.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && C.head > m.pos) && n.someProp("handleKeyDown", (M) => M(n, zt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && n1(u, p.start, p.endA, m, g) && n.someProp("handleKeyDown", (M) => M(n, zt(8, "Backspace")))) {
    ot && oe && n.domObserver.suppressSelectionUpdates();
    return;
  }
  oe && p.endB == p.start && (n.input.lastChromeDelete = Date.now()), ot && !S && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(M) {
      return M(n, zt(13, "Enter"));
    });
  }, 20));
  let I = p.start, E = p.endA, b = (M) => {
    let P = M || n.state.tr.replace(I, E, c.doc.slice(p.start - c.from, p.endB - c.from));
    if (c.sel) {
      let q = Uc(n, P.doc, c.sel);
      q && !(oe && n.composing && q.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (q.head == I || q.head == P.mapping.map(E) - 1) || Ee && q.empty && q.head == I) && P.setSelection(q);
    }
    return s && P.setMeta("composition", s), P.scrollIntoView();
  }, O;
  if (S) {
    if (m.pos == g.pos) {
      Ee && Ct <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => lt(n), 20));
      let M = b(n.state.tr.delete(I, E)), P = u.resolve(p.start).marksAcross(u.resolve(p.endA));
      P && M.ensureMarks(P), n.dispatch(M);
    } else if (
      // Adding or removing a mark
      p.endA == p.endB && (O = t1(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    ) {
      let M = b(n.state.tr);
      O.type == "add" ? M.addMark(I, E, O.mark) : M.removeMark(I, E, O.mark), n.dispatch(M);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let M = m.parent.textBetween(m.parentOffset, g.parentOffset), P = () => b(n.state.tr.insertText(M, I, E));
      n.someProp("handleTextInput", (q) => q(n, I, E, M, P)) || n.dispatch(P());
    }
  } else
    n.dispatch(b());
}
function Uc(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : ea(n, e.resolve(t.anchor), e.resolve(t.head));
}
function t1(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    s = t[u].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (w.from(c).eq(n))
    return { mark: l, type: o };
}
function n1(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    yo(r, !0, !1) < i.pos
  )
    return !1;
  let s = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = s.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(yo(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || yo(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function yo(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function r1(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && n.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, s && s < e.size && _c(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, s && s < n.size && _c(n.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
function _c(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
const yE = na, SE = Ar;
class Rf {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new b0(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Zc), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Xc(this), Yc(this), this.nodeViews = Qc(this), this.docView = Oc(this.state.doc, Gc(this), go(this), this.dom, this), this.domObserver = new U0(this, (r, i, s, o) => e1(this, r, i, s, o)), this.domObserver.start(), C0(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && gl(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Zc), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, s = !1, o = !1;
    e.storedMarks && this.composing && (Cf(this), o = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let d = Qc(this);
      s1(d, this.nodeViews) && (this.nodeViews = d, s = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && gl(this), this.editable = Xc(this), Yc(this);
    let a = go(this), c = Gc(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", h = s || !this.docView.matchesNode(e.doc, c, a);
    (h || !e.selection.eq(i.selection)) && (o = !0);
    let f = u == "preserve" && o && this.dom.style.overflowAnchor == null && Py(this);
    if (o) {
      this.domObserver.stop();
      let d = h && (Ee || oe) && !this.composing && !i.selection.empty && !e.selection.empty && i1(i.selection, e.selection);
      if (h) {
        let p = oe ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = L0(this)), (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Oc(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (d = !0);
      }
      d || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && o0(this)) ? lt(this, d) : (hf(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : f && $y(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this)))
        if (this.state.selection instanceof x) {
          let t = this.docView.domAfterPos(this.state.selection.from);
          t.nodeType == 1 && Cc(this, t.getBoundingClientRect(), e);
        } else
          Cc(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let s = r.from + (this.state.doc.content.size - t.doc.content.size);
      (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s);
    }
    this.dragging = new Ef(e.slice, e.move, i < 0 ? void 0 : x.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Ee) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && By(this.dom), lt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return Wy(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return nf(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return _y(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Rr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Rr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return ta(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (w0(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], go(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, My());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return M0(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? xe && this.root.nodeType === 11 && Ay(this.dom.ownerDocument) == this.dom && G0(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
Rf.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function Gc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Qe.node(0, n.state.doc.content.size, e)];
}
function Yc(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Qe.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Xc(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function i1(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Qc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function s1(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Zc(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Tt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Ji = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, o1 = typeof navigator < "u" && /Mac/.test(navigator.platform), l1 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var re = 0; re < 10; re++)
  Tt[48 + re] = Tt[96 + re] = String(re);
for (var re = 1; re <= 24; re++)
  Tt[re + 111] = "F" + re;
for (var re = 65; re <= 90; re++)
  Tt[re] = String.fromCharCode(re + 32), Ji[re] = String.fromCharCode(re);
for (var So in Tt)
  Ji.hasOwnProperty(So) || (Ji[So] = Tt[So]);
function a1(n) {
  var e = o1 && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || l1 && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Ji : Tt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const c1 = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function u1(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      c1 ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function h1(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[u1(t)] = n[t];
  return e;
}
function ko(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function f1(n) {
  return new W({ props: { handleKeyDown: Df(n) } });
}
function Df(n) {
  let e = h1(n);
  return function(t, r) {
    let i = a1(r), s, o = e[ko(i, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[ko(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (s = Tt[r.keyCode]) && s != i) {
        let l = e[ko(s, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const zf = 65535, Lf = Math.pow(2, 16);
function d1(n, e) {
  return n + e * Lf;
}
function eu(n) {
  return n & zf;
}
function p1(n) {
  return (n - (n & zf)) / Lf;
}
const Pf = 1, $f = 2, Ci = 4, Bf = 8;
let Sl = class {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Bf) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Pf | Ci)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & ($f | Ci)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ci) > 0;
  }
}, rn = class En {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && En.empty)
      return En.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = eu(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + p1(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], h = a + c;
      if (e <= h) {
        let f = c ? e == a ? -1 : e == h ? 1 : t : t, d = a + i + (f < 0 ? 0 : u);
        if (r)
          return d;
        let p = e == (t < 0 ? a : h) ? null : d1(l / 3, e - a), m = e == a ? $f : e == h ? Pf : Ci;
        return (t < 0 ? e != a : e != h) && (m |= Bf), new Sl(d, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new Sl(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = eu(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new En(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? En.empty : new En(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
};
rn.empty = new rn([]);
class Wi {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Wi(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Wi();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this._maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Sl(e, i, null);
  }
}
const xo = /* @__PURE__ */ Object.create(null);
let ae = class {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return rn.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = xo[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in xo)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return xo[e] = t, t.prototype.jsonID = e, t;
  }
}, ke = class nr {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new nr(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new nr(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return nr.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof Pi)
        return nr.fail(s.message);
      throw s;
    }
  }
};
function la(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(la(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return w.fromArray(r);
}
let aa = class rr extends ae {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new N(la(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return ke.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new Vn(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new rr(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof rr && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new rr(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new rr(t.from, t.to, e.markFromJSON(t.mark));
  }
};
ae.jsonID("addMark", aa);
let Vn = class ir extends ae {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new N(la(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return ke.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new aa(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new ir(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ir && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ir(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new ir(t.from, t.to, e.markFromJSON(t.mark));
  }
};
ae.jsonID("removeMark", Vn);
let ca = class sr extends ae {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ke.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ke.fromReplace(e, this.pos, this.pos + 1, new N(w.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new sr(this.pos, t.marks[i]);
        return new sr(this.pos, this.mark);
      }
    }
    return new ji(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new sr(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new sr(t.pos, e.markFromJSON(t.mark));
  }
};
ae.jsonID("addNodeMark", ca);
let ji = class kl extends ae {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ke.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ke.fromReplace(e, this.pos, this.pos + 1, new N(w.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new ca(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new kl(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new kl(t.pos, e.markFromJSON(t.mark));
  }
};
ae.jsonID("removeNodeMark", ji);
let ct = class Dt extends ae {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && xl(e, this.from, this.to) ? ke.fail("Structure replace would overwrite content") : ke.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new rn([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Dt(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Dt(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof Dt) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? N.empty : new N(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Dt(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? N.empty : new N(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Dt(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Dt(t.from, t.to, N.fromJSON(e, t.slice), !!t.structure);
  }
};
ae.jsonID("replace", ct);
let ln = class wi extends ae {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (xl(e, this.from, this.gapFrom) || xl(e, this.gapTo, this.to)))
      return ke.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return ke.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? ke.fromReplace(e, this.from, this.to, r) : ke.fail("Content does not fit in gap");
  }
  getMap() {
    return new rn([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new wi(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new wi(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new wi(t.from, t.to, t.gapFrom, t.gapTo, N.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
};
ae.jsonID("replaceAround", ln);
function xl(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function m1(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let h = a.marks;
    if (!r.isInSet(h) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), d = Math.min(c + a.nodeSize, t), p = r.addToSet(h);
      for (let m = 0; m < h.length; m++)
        h[m].isInSet(p) || (o && o.to == f && o.mark.eq(h[m]) ? o.to = d : i.push(o = new Vn(f, d, h[m])));
      l && l.to == f ? l.to = d : s.push(l = new aa(f, d, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function g1(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof zs) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else
      r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let h = a[u], f;
        for (let d = 0; d < i.length; d++) {
          let p = i[d];
          p.step == s - 1 && h.eq(i[d].style) && (f = p);
        }
        f ? (f.to = c, f.step = s) : i.push({ style: h, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new Vn(o.from, o.to, o.style)));
}
function ua(n, e, t, r = t.contentMatch, i = !0) {
  let s = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a), u = l + c.nodeSize, h = r.matchType(c.type);
    if (!h)
      o.push(new ct(l, u, N.empty));
    else {
      r = h;
      for (let f = 0; f < c.marks.length; f++)
        t.allowsMarkType(c.marks[f].type) || n.step(new Vn(l, u, c.marks[f]));
      if (i && c.isText && t.whitespace != "pre") {
        let f, d = /\r?\n|\r/g, p;
        for (; f = d.exec(c.text); )
          p || (p = new N(w.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new ct(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(w.empty, !0);
    n.replace(l, l, new N(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    n.step(o[a]);
}
function y1(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function S1(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !y1(i, s, o))
      break;
  }
  return null;
}
function k1(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = w.empty, h = 0;
  for (let p = s, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = w.from(r.node(p).copy(u)), h++) : a--;
  let f = w.empty, d = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, f = w.from(i.node(p).copy(f)), d++) : c++;
  n.step(new ln(a, c, o, l, new N(u.append(f), h, d), u.size - h, !0));
}
function x1(n, e, t = null, r = n) {
  let i = b1(n, e), s = i && C1(r, e);
  return s ? i.map(tu).concat({ type: e, attrs: t }).concat(s.map(tu)) : null;
}
function tu(n) {
  return { type: n, attrs: null };
}
function b1(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function C1(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function w1(n, e, t) {
  let r = w.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = w.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new ln(i, s, i, s, new N(r, 0, 0), t.length, !0));
}
function E1(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof i == "function" ? i(o) : i;
    if (o.isTextblock && !o.hasMarkup(r, a) && M1(n.doc, n.mapping.slice(s).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let d = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        d && !p ? c = !1 : !d && p && (c = !0);
      }
      c === !1 && Hf(n, o, l, s), ua(n, n.mapping.slice(s).map(l, 1), r, void 0, c === null);
      let u = n.mapping.slice(s), h = u.map(l, 1), f = u.map(l + o.nodeSize, 1);
      return n.step(new ln(h, f, h + 1, f - 1, new N(w.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && Ff(n, o, l, s), !1;
    }
  });
}
function Ff(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + s + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Hf(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + s);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function M1(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function T1(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new ln(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new N(w.from(o), 0, 0), 1, !0));
}
function Ei(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let h = i.node(c), f = i.index(c);
    if (h.type.spec.isolating)
      return !1;
    let d = h.content.cutByIndex(f, h.childCount), p = r && r[u + 1];
    p && (d = d.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || h;
    if (!h.canReplace(f + 1, h.childCount) || !m.type.validContent(d))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function v1(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = w.empty, o = w.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = w.from(i.node(l).copy(s));
    let u = r && r[c];
    o = w.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  n.step(new ct(e, e, new N(s.append(o), t, t), !0));
}
function ha(n, e) {
  let t = n.resolve(e), r = t.index();
  return Vf(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function O1(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i), o = s.type == r ? n.type.schema.nodes.text : s.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(s.marks))
      return !1;
  }
  return t.validEnd;
}
function Vf(n, e) {
  return !!(n && e && !n.isLeaf && O1(n, e));
}
function Jf(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && Vf(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function N1(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, s = n.doc.resolve(e - t), o = s.node().type;
  if (i && o.inlineContent) {
    let u = o.whitespace == "pre", h = !!o.contentMatch.matchType(i);
    u && !h ? r = !1 : !u && h && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let u = n.doc.resolve(e + t);
    Hf(n, u.node(), u.before(), l);
  }
  o.inlineContent && ua(n, e + t - 1, o, s.node().contentMatchAt(s.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new ct(c, a.map(e + t, -1), N.empty, !0)), r === !0) {
    let u = n.doc.resolve(c);
    Ff(n, u.node(), u.before(), n.steps.length);
  }
  return n;
}
function A1(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function I1(n, e, t = e, r = N.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return Wf(i, s, r) ? new ct(e, t, r) : new R1(i, s, r).fit();
}
function Wf(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
let R1 = class {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = w.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = w.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new N(s, o, l);
    return e > -1 ? new ln(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new ct(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = bo(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, h = null;
          if (t == 1 && (o ? c.matchType(o.type) || (h = c.fillBefore(w.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: h };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = bo(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new N(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = bo(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new N(or(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new N(or(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: h, type: f } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      h = h.matchFragment(i);
    }
    let d = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = h.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (h = g, u.push(jf(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? d : -1)));
    }
    let p = c == l.childCount;
    p || (d = -1), this.placed = lr(this.placed, t, w.from(u)), this.frontier[t].match = h, p && d < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < d; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = p ? e == 0 ? N.empty : new N(or(o.content, e - 1, 1), e - 1, d < 0 ? o.openEnd : e - 1) : new N(or(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Co(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = Co(e, t, i, r, s);
        if (o) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], u = Co(e, l, c, a, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = lr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = lr(this.placed, this.depth, w.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(w.empty, !0);
    t.childCount && (this.placed = lr(this.placed, this.frontier.length, t));
  }
};
function or(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(or(n.firstChild.content, e - 1, t)));
}
function lr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(lr(n.lastChild.content, e - 1, t)));
}
function bo(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function jf(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, jf(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(w.empty, !0)))), n.copy(r);
}
function Co(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !D1(t, s.content, o) ? l : null;
}
function D1(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function z1(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function L1(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (Wf(i, s, r))
    return n.step(new ct(e, t, r));
  let o = Kf(i, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let f = i.depth, d = i.pos - 1; f > 0; f--, d--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(f) > -1 ? l = f : i.before(f) == d && o.splice(1, 0, -f);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, d = 0; ; d++) {
    let p = f.firstChild;
    if (c.push(p), d == r.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let d = c[f], p = z1(d.type);
    if (p && !d.sameMarkup(i.node(Math.abs(l) - 1)))
      u = f;
    else if (p || !d.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let d = (f + u + 1) % (r.openStart + 1), p = c[d];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let S = i.node(g - 1), C = i.index(g - 1);
        if (S.canReplaceWith(C, C, p.type, p.marks))
          return n.replace(i.before(g), y ? s.after(g) : t, new N(qf(r.content, 0, r.openStart, d), d, r.openEnd));
      }
  }
  let h = n.steps.length;
  for (let f = o.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > h)); f--) {
    let d = o[f];
    d < 0 || (e = i.before(d), t = s.after(d));
  }
}
function qf(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(qf(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(w.empty, !0));
  }
  return n;
}
function P1(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = A1(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new N(w.from(r), 0, 0));
}
function $1(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = Kf(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o && r.start(o - 1) == i.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), i.index(o - 1)))
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function Kf(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
let Uf = class Mi extends ae {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ke.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return ke.fromReplace(e, this.pos, this.pos + 1, new N(w.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return rn.empty;
  }
  invert(e) {
    return new Mi(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Mi(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Mi(t.pos, t.attr, t.value);
  }
};
ae.jsonID("attr", Uf);
let _f = class bl extends ae {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return ke.ok(r);
  }
  getMap() {
    return rn.empty;
  }
  invert(e) {
    return new bl(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new bl(t.attr, t.value);
  }
};
ae.jsonID("docAttr", _f);
let $n = class extends Error {
};
$n = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
$n.prototype = Object.create(Error.prototype);
$n.prototype.constructor = $n;
$n.prototype.name = "TransformError";
class B1 {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Wi();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new $n(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = N.empty) {
    let i = I1(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new N(w.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, N.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return L1(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return P1(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return $1(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return k1(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return N1(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return w1(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return E1(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return T1(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new Uf(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new _f(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new ca(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof H)
      t.isInSet(r.marks) && this.step(new ji(e, t));
    else {
      let i = r.marks, s, o = [];
      for (; s = t.isInSet(i); )
        o.push(new ji(e, s)), i = s.removeFromSet(i);
      for (let l = o.length - 1; l >= 0; l--)
        this.step(o[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, r) {
    return v1(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return m1(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return g1(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return ua(this, e, t, r), this;
  }
}
function Gf(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = Gf(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Yf(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Yf(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
let ye = class de {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new de(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new de(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? de.empty : e == 0 && t == this.content.length ? this : new de(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new de(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new de([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new de(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Gf(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Yf(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return ii(0, e);
    if (e == this.size)
      return ii(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let i = this.child(t), s = r + i.nodeSize;
      if (s >= e)
        return s == e ? ii(t + 1, s) : ii(t, r);
      r = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return de.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new de(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return de.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new de(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return de.empty;
    if (e instanceof de)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new de([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
ye.empty = new ye([], 0);
const wo = { index: 0, offset: 0 };
function ii(n, e) {
  return wo.index = n, wo.offset = e, wo;
}
class F1 extends Error {
}
let K = class Mn {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = Qf(this.content, e + this.openStart, t);
    return r && new Mn(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new Mn(Xf(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return Mn.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new Mn(ye.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new Mn(e, r, i);
  }
};
K.empty = new K(ye.empty, 0, 0);
function Xf(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(Xf(s.content, e - i - 1, t - i - 1)));
}
function Qf(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = Qf(o.content, e - s - 1, t, o);
  return l && n.replaceChild(i, o.copy(l));
}
const Zf = 65535, ed = Math.pow(2, 16);
function H1(n, e) {
  return n + e * ed;
}
function nu(n) {
  return n & Zf;
}
function V1(n) {
  return (n - (n & Zf)) / ed;
}
const td = 1, nd = 2, Ti = 4, rd = 8;
class ru {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & rd) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (td | Ti)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (nd | Ti)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ti) > 0;
  }
}
class Te {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Te.empty)
      return Te.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = nu(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + V1(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], h = a + c;
      if (e <= h) {
        let f = c ? e == a ? -1 : e == h ? 1 : t : t, d = a + i + (f < 0 ? 0 : u);
        if (r)
          return d;
        let p = e == (t < 0 ? a : h) ? null : H1(l / 3, e - a), m = e == a ? nd : e == h ? td : Ti;
        return (t < 0 ? e != a : e != h) && (m |= rd), new ru(d, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new ru(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = nu(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Te(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Te.empty : new Te(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Te.empty = new Te([]);
const Eo = /* @__PURE__ */ Object.create(null);
class ce {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Te.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Eo[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Eo)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Eo[e] = t, t.prototype.jsonID = e, t;
  }
}
class _ {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new _(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new _(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return _.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof F1)
        return _.fail(s.message);
      throw s;
    }
  }
}
function fa(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(fa(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return ye.fromArray(r);
}
class Bt extends ce {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new K(fa(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return _.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new Ft(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Bt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Bt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Bt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Bt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ce.jsonID("addMark", Bt);
class Ft extends ce {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new K(fa(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return _.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Bt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Ft(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ft && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ft(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Ft(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ce.jsonID("removeMark", Ft);
class Ht extends ce {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return _.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return _.fromReplace(e, this.pos, this.pos + 1, new K(ye.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Ht(this.pos, t.marks[i]);
        return new Ht(this.pos, this.mark);
      }
    }
    return new zr(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Ht(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Ht(t.pos, e.markFromJSON(t.mark));
  }
}
ce.jsonID("addNodeMark", Ht);
class zr extends ce {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return _.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return _.fromReplace(e, this.pos, this.pos + 1, new K(ye.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Ht(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new zr(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new zr(t.pos, e.markFromJSON(t.mark));
  }
}
ce.jsonID("removeNodeMark", zr);
class $e extends ce {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Cl(e, this.from, this.to) ? _.fail("Structure replace would overwrite content") : _.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Te([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new $e(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new $e(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof $e) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? K.empty : new K(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new $e(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? K.empty : new K(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new $e(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new $e(t.from, t.to, K.fromJSON(e, t.slice), !!t.structure);
  }
}
ce.jsonID("replace", $e);
class Et extends ce {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Cl(e, this.from, this.gapFrom) || Cl(e, this.gapTo, this.to)))
      return _.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return _.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? _.fromReplace(e, this.from, this.to, r) : _.fail("Content does not fit in gap");
  }
  getMap() {
    return new Te([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new Et(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new Et(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new Et(t.from, t.to, t.gapFrom, t.gapTo, K.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
ce.jsonID("replaceAround", Et);
function Cl(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function J1(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Bs(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !J1(i, s, o))
      break;
  }
  return null;
}
function W1(n, e, t = null, r = n) {
  let i = j1(n, e), s = i && q1(r, e);
  return s ? i.map(iu).concat({ type: e, attrs: t }).concat(s.map(iu)) : null;
}
function iu(n) {
  return { type: n, attrs: null };
}
function j1(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function q1(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function K1(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let h = i.node(c), f = i.index(c);
    if (h.type.spec.isolating)
      return !1;
    let d = h.content.cutByIndex(f, h.childCount), p = r && r[u + 1];
    p && (d = d.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || h;
    if (!h.canReplace(f + 1, h.childCount) || !m.type.validContent(d))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function Fs(n, e) {
  let t = n.resolve(e), r = t.index();
  return id(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function U1(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i), o = s.type == r ? n.type.schema.nodes.text : s.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(s.marks))
      return !1;
  }
  return t.validEnd;
}
function id(n, e) {
  return !!(n && e && !n.isLeaf && U1(n, e));
}
function sd(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && id(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function da(n, e, t = e, r = K.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return _1(i, s, r) ? new $e(e, t, r) : new G1(i, s, r).fit();
}
function _1(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class G1 {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = ye.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = ye.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new K(s, o, l);
    return e > -1 ? new Et(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new $e(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = Mo(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, h = null;
          if (t == 1 && (o ? c.matchType(o.type) || (h = c.fillBefore(ye.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: h };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Mo(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new K(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Mo(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new K(ar(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new K(ar(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: h, type: f } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      h = h.matchFragment(i);
    }
    let d = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = h.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (h = g, u.push(od(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? d : -1)));
    }
    let p = c == l.childCount;
    p || (d = -1), this.placed = cr(this.placed, t, ye.from(u)), this.frontier[t].match = h, p && d < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < d; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = p ? e == 0 ? K.empty : new K(ar(o.content, e - 1, 1), e - 1, d < 0 ? o.openEnd : e - 1) : new K(ar(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !To(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = To(e, t, i, r, s);
        if (o) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], u = To(e, l, c, a, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = cr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = cr(this.placed, this.depth, ye.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(ye.empty, !0);
    t.childCount && (this.placed = cr(this.placed, this.frontier.length, t));
  }
}
function ar(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(ar(n.firstChild.content, e - 1, t)));
}
function cr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(cr(n.lastChild.content, e - 1, t)));
}
function Mo(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function od(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, od(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(ye.empty, !0)))), n.copy(r);
}
function To(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !Y1(t, s.content, o) ? l : null;
}
function Y1(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
class kr extends ce {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return _.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return _.fromReplace(e, this.pos, this.pos + 1, new K(ye.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Te.empty;
  }
  invert(e) {
    return new kr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new kr(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new kr(t.pos, t.attr, t.value);
  }
}
ce.jsonID("attr", kr);
class qi extends ce {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return _.ok(r);
  }
  getMap() {
    return Te.empty;
  }
  invert(e) {
    return new qi(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new qi(t.attr, t.value);
  }
}
ce.jsonID("docAttr", qi);
let Lr = class extends Error {
};
Lr = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Lr.prototype = Object.create(Error.prototype);
Lr.prototype.constructor = Lr;
Lr.prototype.name = "TransformError";
function ld(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = ld(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function ad(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = ad(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
let st = class pe {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new pe(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new pe(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? pe.empty : e == 0 && t == this.content.length ? this : new pe(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new pe(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new pe([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new pe(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return ld(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return ad(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return si(0, e);
    if (e == this.size)
      return si(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? si(r + 1, o) : si(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return pe.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new pe(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return pe.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new pe(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return pe.empty;
    if (e instanceof pe)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new pe([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
st.empty = new st([], 0);
const vo = { index: 0, offset: 0 };
function si(n, e) {
  return vo.index = n, vo.offset = e, vo;
}
let sn = class Tn {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = ud(this.content, e + this.openStart, t);
    return r && new Tn(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new Tn(cd(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return Tn.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new Tn(st.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new Tn(e, r, i);
  }
};
sn.empty = new sn(st.empty, 0, 0);
function cd(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(cd(s.content, e - i - 1, t - i - 1)));
}
function ud(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = ud(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
const X1 = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function hd(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Q1 = (n, e, t) => {
  let r = hd(n, t);
  if (!r)
    return !1;
  let i = pa(r);
  if (!i) {
    let o = r.blockRange(), l = o && Bs(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (md(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Bn(s, "end") || x.isSelectable(s)))
    for (let o = r.depth; ; o--) {
      let l = da(n.doc, r.before(o), r.after(o), sn.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Bn(s, "end") ? A.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : x.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Z1 = (n, e, t) => {
  let r = hd(n, t);
  if (!r)
    return !1;
  let i = pa(r);
  return i ? fd(n, i, e) : !1;
}, eS = (n, e, t) => {
  let r = dd(n, t);
  if (!r)
    return !1;
  let i = ma(r);
  return i ? fd(n, i, e) : !1;
};
function fd(n, e, t) {
  let r = e.nodeBefore, i = r, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = da(n.doc, s, a, sn.empty);
  if (!c || c.from != s || c instanceof $e && c.slice.size >= a - s)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(v.create(u.doc, s)), t(u.scrollIntoView());
  }
  return !0;
}
function Bn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const tS = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = pa(r);
  }
  let o = s && s.nodeBefore;
  return !o || !x.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(x.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function pa(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function dd(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const nS = (n, e, t) => {
  let r = dd(n, t);
  if (!r)
    return !1;
  let i = ma(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (md(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Bn(s, "start") || x.isSelectable(s))) {
    let o = da(n.doc, r.before(), r.after(), sn.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Bn(s, "start") ? A.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : x.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, rS = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = ma(r);
  }
  let o = s && s.nodeAfter;
  return !o || !x.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(x.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function ma(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const iS = (n, e) => {
  let t = n.selection, r = t instanceof x, i;
  if (r) {
    if (t.node.isTextblock || !Fs(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = sd(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection(x.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, sS = (n, e) => {
  let t = n.selection, r;
  if (t instanceof x) {
    if (t.node.isTextblock || !Fs(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = sd(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, oS = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && Bs(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, lS = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function pd(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const aS = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = pd(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(A.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, cS = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof ve || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = pd(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(v.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, uS = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (K1(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && Bs(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, hS = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(x.create(n.doc, i))), !0);
};
function fS(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Fs(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function md(n, e, t, r) {
  let i = e.nodeBefore, s = e.nodeAfter, o, l, a = i.type.spec.isolating || s.type.spec.isolating;
  if (!a && fS(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
    if (t) {
      let d = e.pos + s.nodeSize, p = st.empty;
      for (let y = o.length - 1; y >= 0; y--)
        p = st.from(o[y].create(null, p));
      p = st.from(i.copy(p));
      let m = n.tr.step(new Et(e.pos - 1, d, e.pos, d, new sn(p, 1, 0), o.length, !0)), g = m.doc.resolve(d + 2 * o.length);
      g.nodeAfter && g.nodeAfter.type == i.type && Fs(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let u = s.type.spec.isolating || r > 0 && a ? null : A.findFrom(e, 1), h = u && u.$from.blockRange(u.$to), f = h && Bs(h);
  if (f != null && f >= e.depth)
    return t && t(n.tr.lift(h, f).scrollIntoView()), !0;
  if (c && Bn(s, "start", !0) && Bn(i, "end")) {
    let d = i, p = [];
    for (; p.push(d), !d.isTextblock; )
      d = d.lastChild;
    let m = s, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (d.canReplace(d.childCount, d.childCount, m.content)) {
      if (t) {
        let y = st.empty;
        for (let C = p.length - 1; C >= 0; C--)
          y = st.from(p[C].copy(y));
        let S = n.tr.step(new Et(e.pos - p.length, e.pos + s.nodeSize, e.pos + g, e.pos + s.nodeSize - g, new sn(y, p.length, 0), 0, !0));
        t(S.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function gd(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(v.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const dS = gd(-1), pS = gd(1);
function mS(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && W1(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function su(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), h = u.index();
            i = u.parent.canReplaceWith(h, h + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function yd(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = yd(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Sd(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Sd(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
let X = class me {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new me(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new me(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? me.empty : e == 0 && t == this.content.length ? this : new me(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new me(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new me([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new me(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return yd(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Sd(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return oi(0, e);
    if (e == this.size)
      return oi(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? oi(r + 1, o) : oi(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return me.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new me(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return me.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new me(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return me.empty;
    if (e instanceof me)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new me([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
X.empty = new X([], 0);
const Oo = { index: 0, offset: 0 };
function oi(n, e) {
  return Oo.index = n, Oo.offset = e, Oo;
}
let Fn = class vn {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = xd(this.content, e + this.openStart, t);
    return r && new vn(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new vn(kd(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return vn.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new vn(X.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new vn(e, r, i);
  }
};
Fn.empty = new Fn(X.empty, 0, 0);
function kd(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(kd(s.content, e - i - 1, t - i - 1)));
}
function xd(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = xd(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
class wl {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
function gS(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s);
    if (!o)
      return !1;
    let l = r ? t.tr : null;
    return yS(l, o, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function yS(n, e, t, r = null) {
  let i = !1, s = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    s = new wl(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new wl(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = Ag(s, t, r, e);
  return l ? (n && SS(n, e, l, i, t), !0) : !1;
}
function SS(n, e, t, r, i) {
  let s = X.empty;
  for (let u = t.length - 1; u >= 0; u--)
    s = X.from(t[u].type.create(t[u].attrs, s));
  n.step(new Je(e.start - (r ? 2 : 0), e.end, e.start, e.end, new Fn(s, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, h = e.endIndex, f = !0; u < h; u++, f = !1)
    !f && $g(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function kS(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? xS(e, t, n, s) : bS(e, t, s) : !0 : !1;
  };
}
function xS(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new Je(s - 1, o, s, o, new Fn(X.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new wl(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = Og(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.doc.resolve(i.mapping.map(s, -1) - 1);
  return Fg(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function bS(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let d = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    d -= i.child(p).nodeSize, r.delete(d - 1, d + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), u = s.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? X.empty : X.from(i))))
    return !1;
  let h = s.pos, f = h + o.nodeSize;
  return r.step(new Je(h - (l ? 1 : 0), f + (a ? 1 : 0), h + 1, f - 1, new Fn((l ? X.empty : X.from(i.copy(X.empty))).append(a ? X.empty : X.from(i.copy(X.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function CS(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = X.from(c ? n.create() : null), h = new Fn(X.from(n.create(null, X.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = s.start, d = s.end;
      t(e.tr.step(new Je(f - (c ? 3 : 1), d, f, d, h, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var wS = Object.defineProperty, bd = (n, e) => {
  for (var t in e)
    wS(n, t, { get: e[t], enumerable: !0 });
};
function Hs(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
var Vs = class {
  constructor(n) {
    this.editor = n.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = n.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: n, editor: e, state: t } = this, { view: r } = e, { tr: i } = t, s = this.buildProps(i);
    return Object.fromEntries(
      Object.entries(n).map(([o, l]) => [o, (...c) => {
        const u = l(...c)(s);
        return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), u;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(n, e = !0) {
    const { rawCommands: t, editor: r, state: i } = this, { view: s } = r, o = [], l = !!n, a = n || i.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(a), o.every((h) => h === !0)), u = {
      ...Object.fromEntries(
        Object.entries(t).map(([h, f]) => [h, (...p) => {
          const m = this.buildProps(a, e), g = f(...p)(m);
          return o.push(g), u;
        }])
      ),
      run: c
    };
    return u;
  }
  createCan(n) {
    const { rawCommands: e, state: t } = this, r = !1, i = n || t.tr, s = this.buildProps(i, r);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...s, dispatch: void 0 })])
      ),
      chain: () => this.createChain(i, r)
    };
  }
  buildProps(n, e = !0) {
    const { rawCommands: t, editor: r, state: i } = this, { view: s } = r, o = {
      tr: n,
      editor: r,
      view: s,
      state: Hs({
        state: i,
        transaction: n
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(n, e),
      can: () => this.createCan(n),
      get commands() {
        return Object.fromEntries(
          Object.entries(t).map(([l, a]) => [l, (...c) => a(...c)(o)])
        );
      }
    };
    return o;
  }
}, ES = class {
  constructor() {
    this.callbacks = {};
  }
  on(n, e) {
    return this.callbacks[n] || (this.callbacks[n] = []), this.callbacks[n].push(e), this;
  }
  emit(n, ...e) {
    const t = this.callbacks[n];
    return t && t.forEach((r) => r.apply(this, e)), this;
  }
  off(n, e) {
    const t = this.callbacks[n];
    return t && (e ? this.callbacks[n] = t.filter((r) => r !== e) : delete this.callbacks[n]), this;
  }
  once(n, e) {
    const t = (...r) => {
      this.off(n, t), e.apply(this, r);
    };
    return this.on(n, t);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
};
function Cd(n, e) {
  const t = new B1(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
var wd = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && wd(r);
  }
  return n;
};
function li(n) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return wd(t);
}
function Pr(n, e, t) {
  if (n instanceof _e || n instanceof w)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return w.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", s), Pr("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new Kh({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? pr.fromSchema(a).parseSlice(li(n), t.parseOptions) : pr.fromSchema(a).parse(li(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const s = pr.fromSchema(e);
    return t.slice ? s.parseSlice(li(n), t.parseOptions).content : s.parse(li(n), t.parseOptions);
  }
  return Pr("", e, t);
}
function El(n, e, t = {}, r = {}) {
  return Pr(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
function MS(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function TS(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, s) => {
    t(i) && r.push({
      node: i,
      pos: s
    });
  }), r;
}
function vS(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Js(n) {
  return (e) => vS(e.$from, n);
}
function T(n, e, t) {
  return n.config[e] === void 0 && n.parent ? T(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? T(n.parent, e, t) : null
  }) : n.config[e];
}
function ga(n) {
  return n.map((e) => {
    const t = {
      name: e.name,
      options: e.options,
      storage: e.storage
    }, r = T(e, "addExtensions", t);
    return r ? [e, ...ga(r())] : e;
  }).flat(10);
}
function ya(n, e) {
  const t = Wr.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function Ed(n) {
  return typeof n == "function";
}
function $(n, e = void 0, ...t) {
  return Ed(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function OS(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function $r(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Md(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = $r(n), i = [...t, ...r], s = {
    default: null,
    validate: void 0,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions: i
    }, a = T(
      o,
      "addGlobalAttributes",
      l
    );
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((h) => {
        Object.entries(u.attributes).forEach(([f, d]) => {
          e.push({
            type: h,
            name: f,
            attribute: {
              ...s,
              ...d
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = T(
      o,
      "addAttributes",
      l
    );
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, h]) => {
      const f = {
        ...s,
        ...h
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: o.name,
        name: u,
        attribute: f
      });
    });
  }), e;
}
function U(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? String(s).split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = s ? s.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[i] ? r[i].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [h, f] = u.split(":").map((d) => d.trim());
          c.set(h, f);
        }), l.forEach((u) => {
          const [h, f] = u.split(":").map((d) => d.trim());
          c.set(h, f);
        }), r[i] = Array.from(c.entries()).map(([u, h]) => `${u}: ${h}`).join("; ");
      } else
        r[i] = s;
    }), r;
  }, {});
}
function Ki(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => U(t, r), {});
}
function NS(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function ou(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : NS(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function lu(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && OS(t) ? !1 : t != null)
  );
}
function AS(n, e) {
  var t;
  const r = Md(n), { nodeExtensions: i, markExtensions: s } = $r(n), o = (t = i.find((c) => T(c, "topNode"))) == null ? void 0 : t.name, l = Object.fromEntries(
    i.map((c) => {
      const u = r.filter((y) => y.type === c.name), h = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = n.reduce((y, S) => {
        const C = T(S, "extendNodeSchema", h);
        return {
          ...y,
          ...C ? C(c) : {}
        };
      }, {}), d = lu({
        ...f,
        content: $(T(c, "content", h)),
        marks: $(T(c, "marks", h)),
        group: $(T(c, "group", h)),
        inline: $(T(c, "inline", h)),
        atom: $(T(c, "atom", h)),
        selectable: $(T(c, "selectable", h)),
        draggable: $(T(c, "draggable", h)),
        code: $(T(c, "code", h)),
        whitespace: $(T(c, "whitespace", h)),
        linebreakReplacement: $(
          T(c, "linebreakReplacement", h)
        ),
        defining: $(T(c, "defining", h)),
        isolating: $(T(c, "isolating", h)),
        attrs: Object.fromEntries(
          u.map((y) => {
            var S, C;
            return [
              y.name,
              { default: (S = y == null ? void 0 : y.attribute) == null ? void 0 : S.default, validate: (C = y == null ? void 0 : y.attribute) == null ? void 0 : C.validate }
            ];
          })
        )
      }), p = $(T(c, "parseHTML", h));
      p && (d.parseDOM = p.map(
        (y) => ou(y, u)
      ));
      const m = T(c, "renderHTML", h);
      m && (d.toDOM = (y) => m({
        node: y,
        HTMLAttributes: Ki(y, u)
      }));
      const g = T(c, "renderText", h);
      return g && (d.toText = g), [c.name, d];
    })
  ), a = Object.fromEntries(
    s.map((c) => {
      const u = r.filter((g) => g.type === c.name), h = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = n.reduce((g, y) => {
        const S = T(y, "extendMarkSchema", h);
        return {
          ...g,
          ...S ? S(c) : {}
        };
      }, {}), d = lu({
        ...f,
        inclusive: $(T(c, "inclusive", h)),
        excludes: $(T(c, "excludes", h)),
        group: $(T(c, "group", h)),
        spanning: $(T(c, "spanning", h)),
        code: $(T(c, "code", h)),
        attrs: Object.fromEntries(
          u.map((g) => {
            var y, S;
            return [
              g.name,
              { default: (y = g == null ? void 0 : g.attribute) == null ? void 0 : y.default, validate: (S = g == null ? void 0 : g.attribute) == null ? void 0 : S.validate }
            ];
          })
        )
      }), p = $(T(c, "parseHTML", h));
      p && (d.parseDOM = p.map(
        (g) => ou(g, u)
      ));
      const m = T(c, "renderHTML", h);
      return m && (d.toDOM = (g) => m({
        mark: g,
        HTMLAttributes: Ki(g, u)
      })), [c.name, d];
    })
  );
  return new Kh({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function IS(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
function Sa(n) {
  return n.sort((t, r) => {
    const i = T(t, "priority") || 100, s = T(r, "priority") || 100;
    return i > s ? -1 : i < s ? 1 : 0;
  });
}
function Td(n) {
  const e = Sa(ga(n)), t = IS(e.map((r) => r.name));
  return t.length && console.warn(
    `[tiptap warn]: Duplicate extension names found: [${t.map((r) => `'${r}'`).join(", ")}]. This can lead to issues.`
  ), e;
}
function vd(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, u, h) => {
    var f;
    a.isBlock && c > r && (l += s);
    const d = o == null ? void 0 : o[a.type.name];
    if (d)
      return u && (l += d({
        node: a,
        pos: c,
        parent: u,
        index: h,
        range: e
      })), !1;
    a.isText && (l += (f = a == null ? void 0 : a.text) == null ? void 0 : f.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function RS(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return vd(n, t, e);
}
function Od(n) {
  return Object.fromEntries(
    Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText])
  );
}
function ut(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
function Nd(n, e) {
  const t = ut(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function G(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function DS(n, e) {
  const t = G(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function Ws(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Ad(n, e) {
  const t = Ws(
    typeof e == "string" ? e : e.name,
    n.schema
  );
  return t === "node" ? DS(n, e) : t === "mark" ? Nd(n, e) : {};
}
function zS(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function LS(n) {
  const e = zS(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((s, o) => o !== r).some((s) => t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to));
}
function Id(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, s) => {
    const o = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[s];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const c = e.slice(s).map(l, -1), u = e.slice(s).map(a), h = e.invert().map(c, -1), f = e.invert().map(u);
      r.push({
        oldRange: {
          from: h,
          to: f
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), LS(r);
}
function ka(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
function Ui(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : ka(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Rd(n, e, t = {}) {
  return n.find((r) => r.type === e && Ui(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function au(n, e, t = {}) {
  return !!Rd(n, e, t);
}
function xa(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((u) => u.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((u) => u.type === e) || (t = t || ((r = i.node.marks[0]) == null ? void 0 : r.attrs), !Rd([...i.node.marks], e, t)))
    return;
  let o = i.index, l = n.start() + i.offset, a = o + 1, c = l + i.node.nodeSize;
  for (; o > 0 && au([...n.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= n.parent.child(o).nodeSize;
  for (; a < n.parent.childCount && au([...n.parent.child(a).marks], e, t); )
    c += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function ba(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n), o = xa(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(
      ...i.marks.map((o) => ({
        from: s,
        to: s + i.nodeSize,
        mark: o
      }))
    );
  }), r;
}
var PS = (n, e, t, r = 20) => {
  const i = n.doc.resolve(t);
  let s = r, o = null;
  for (; s > 0 && o === null; ) {
    const l = i.node(s);
    (l == null ? void 0 : l.type.name) === e ? o = l : s -= 1;
  }
  return [o, s];
};
function No(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function vi(n, e, t) {
  return Object.fromEntries(
    Object.entries(t).filter(([r]) => {
      const i = n.find((s) => s.type === e && s.name === r);
      return i ? i.attribute.keepOnSplit : !1;
    })
  );
}
var $S = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) == null ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - s));
  }), t;
};
function Ml(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? ut(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((h) => s ? s.name === h.type.name : !0).find((h) => Ui(h.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: h, $to: f }) => {
    const d = h.pos, p = f.pos;
    n.doc.nodesBetween(d, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(d, g), S = Math.min(p, g + m.nodeSize), C = S - y;
      o += C, l.push(
        ...m.marks.map((I) => ({
          mark: I,
          from: y,
          to: S
        }))
      );
    });
  }), o === 0)
    return !1;
  const a = l.filter((h) => s ? s.name === h.mark.type.name : !0).filter((h) => Ui(h.mark.attrs, t, { strict: !1 })).reduce((h, f) => h + f.to - f.from, 0), c = l.filter((h) => s ? h.mark.type !== s && h.mark.type.excludes(s) : !0).reduce((h, f) => h + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function vt(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? G(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (h, f) => {
    if (h.isText)
      return;
    const d = Math.max(r, f), p = Math.min(i, f + h.nodeSize);
    l.push({
      node: h,
      from: d,
      to: p
    });
  });
  const a = i - r, c = l.filter((h) => o ? o.name === h.node.type.name : !0).filter((h) => Ui(h.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((h, f) => h + f.to - f.from, 0) >= a;
}
function BS(n, e, t = {}) {
  if (!e)
    return vt(n, null, t) || Ml(n, null, t);
  const r = Ws(e, n.schema);
  return r === "node" ? vt(n, e, t) : r === "mark" ? Ml(n, e, t) : !1;
}
var FS = (n, e) => {
  const { $from: t, $to: r, $anchor: i } = n.selection;
  if (e) {
    const s = Js((l) => l.type.name === e)(n.selection);
    if (!s)
      return !1;
    const o = n.doc.resolve(s.pos + 1);
    return i.pos + 1 === o.end();
  }
  return !(r.parentOffset < r.parent.nodeSize - 2 || t.pos !== r.pos);
}, HS = (n) => {
  const { $from: e, $to: t } = n.selection;
  return !(e.parentOffset > 0 || e.pos !== t.pos);
};
function cu(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function uu(n, e) {
  const { nodeExtensions: t } = $r(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = $(T(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function js(n, {
  checkChildren: e = !0,
  ignoreWhitespace: t = !1
} = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) != null ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((s) => {
      i !== !1 && (js(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function VS(n) {
  return n instanceof x;
}
function Dd(n) {
  return n instanceof v;
}
function Vt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function zd(n, e = null) {
  if (!e)
    return null;
  const t = A.atStart(n), r = A.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? v.create(n, Vt(0, i, s), Vt(n.content.size, i, s)) : v.create(n, Vt(e, i, s), Vt(e, i, s));
}
function JS(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof ct || i instanceof ln))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(A.near(n.doc.resolve(o), t));
}
var qs = class {
  constructor(n) {
    this.find = n.find, this.handler = n.handler;
  }
}, WS = (n, e) => {
  if (ka(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function ai(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || (e = c.nodeBefore || c.nodeAfter) != null && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let u = !1;
  const h = $S(c) + s;
  return o.forEach((f) => {
    if (u)
      return;
    const d = WS(h, f.find);
    if (!d)
      return;
    const p = a.state.tr, m = Hs({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (d[0].length - s.length),
      to: i
    }, { commands: y, chain: S, can: C } = new Vs({
      editor: t,
      state: m
    });
    f.handler({
      state: m,
      range: g,
      match: d,
      commands: y,
      chain: S,
      can: C
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: s
    }), a.dispatch(p), u = !0);
  }), u;
}
function jS(n) {
  const { editor: e, rules: t } = n, r = new W({
    state: {
      init() {
        return null;
      },
      apply(i, s, o) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: u } = a;
          typeof u == "string" ? u = u : u = ya(w.from(u), o.schema);
          const { from: h } = a, f = h + u.length;
          ai({
            editor: e,
            from: h,
            to: f,
            text: u,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : s;
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return ai({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && ai({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? ai({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function qS(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function ci(n) {
  return qS(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function Ld(n, e) {
  const t = { ...n };
  return ci(n) && ci(e) && Object.keys(e).forEach((r) => {
    ci(e[r]) && ci(n[r]) ? t[r] = Ld(n[r], e[r]) : t[r] = e[r];
  }), t;
}
var Ca = class {
  constructor(n = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...n
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...$(
        T(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...$(
        T(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(n = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => Ld(this.options, n)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(n = {}) {
    const e = new this.constructor({ ...this.config, ...n });
    return e.parent = this, this.child = e, e.name = "name" in n ? n.name : e.parent.name, e;
  }
}, ht = class Pd extends Ca {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new Pd(t);
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
};
function KS(n) {
  return typeof n == "number";
}
var US = class {
  constructor(n) {
    this.find = n.find, this.handler = n.handler;
  }
}, _S = (n, e, t) => {
  if (ka(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function GS(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: u } = new Vs({
    editor: e,
    state: t
  }), h = [];
  return t.doc.nodesBetween(r, i, (d, p) => {
    var m, g, y, S, C;
    if ((g = (m = d.type) == null ? void 0 : m.spec) != null && g.code || !(d.isText || d.isTextblock || d.isInline))
      return;
    const I = (C = (S = (y = d.content) == null ? void 0 : y.size) != null ? S : d.nodeSize) != null ? C : 0, E = Math.max(r, p), b = Math.min(i, p + I);
    if (E >= b)
      return;
    const O = d.isText ? d.text || "" : d.textBetween(E - p, b - p, void 0, "￼");
    _S(O, s.find, o).forEach((P) => {
      if (P.index === void 0)
        return;
      const q = E + P.index + 1, hn = q + P[0].length, Jn = {
        from: t.tr.mapping.map(q),
        to: t.tr.mapping.map(hn)
      }, Yr = s.handler({
        state: t,
        range: Jn,
        match: P,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: l
      });
      h.push(Yr);
    });
  }), h.every((d) => d !== null);
}
var ui = null, YS = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) == null || e.setData("text/html", n), t;
};
function XS(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({
    state: u,
    from: h,
    to: f,
    rule: d,
    pasteEvt: p
  }) => {
    const m = u.tr, g = Hs({
      state: u,
      transaction: m
    });
    if (!(!GS({
      editor: e,
      state: g,
      from: Math.max(h - 1, 0),
      to: f.b - 1,
      rule: d,
      pasteEvent: p,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return t.map((u) => new W({
    // we register a global drag handler to track the current drag source element
    view(h) {
      const f = (p) => {
        var m;
        r = (m = h.dom.parentElement) != null && m.contains(p.target) ? h.dom.parentElement : null, r && (ui = e);
      }, d = () => {
        ui && (ui = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", d), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", d);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (h, f) => {
          if (s = r === h.dom.parentElement, l = f, !s) {
            const d = ui;
            d != null && d.isEditable && setTimeout(() => {
              const p = d.state.selection;
              p && d.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return !1;
        },
        paste: (h, f) => {
          var d;
          const p = (d = f.clipboardData) == null ? void 0 : d.getData("text/html");
          return o = f, i = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (h, f, d) => {
      const p = h[0], m = p.getMeta("uiEvent") === "paste" && !i, g = p.getMeta("uiEvent") === "drop" && !s, y = p.getMeta("applyPasteRules"), S = !!y;
      if (!m && !g && !S)
        return;
      if (S) {
        let { text: E } = y;
        typeof E == "string" ? E = E : E = ya(w.from(E), d.schema);
        const { from: b } = y, O = b + E.length, M = YS(E);
        return a({
          rule: u,
          state: d,
          from: b,
          to: { b: O },
          pasteEvt: M
        });
      }
      const C = f.doc.content.findDiffStart(d.doc.content), I = f.doc.content.findDiffEnd(d.doc.content);
      if (!(!KS(C) || !I || C === I.b))
        return a({
          rule: u,
          state: d,
          from: C,
          to: I,
          pasteEvt: o
        });
    }
  }));
}
var Ks = class {
  constructor(n, e) {
    this.splittableMarks = [], this.editor = e, this.extensions = Td(n), this.schema = AS(this.extensions, e), this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((n, e) => {
      const t = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: No(e.name, this.schema)
      }, r = T(e, "addCommands", t);
      return r ? {
        ...n,
        ...r()
      } : n;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: n } = this;
    return Sa([...this.extensions].reverse()).map((r) => {
      const i = {
        name: r.name,
        options: r.options,
        storage: this.editor.extensionStorage[r.name],
        editor: n,
        type: No(r.name, this.schema)
      }, s = [], o = T(
        r,
        "addKeyboardShortcuts",
        i
      );
      let l = {};
      if (r.type === "mark" && T(r, "exitable", i) && (l.ArrowRight = () => ht.handleExit({ editor: n, mark: r })), o) {
        const f = Object.fromEntries(
          Object.entries(o()).map(([d, p]) => [d, () => p({ editor: n })])
        );
        l = { ...l, ...f };
      }
      const a = f1(l);
      s.push(a);
      const c = T(r, "addInputRules", i);
      if (cu(r, n.options.enableInputRules) && c) {
        const f = c();
        if (f && f.length) {
          const d = jS({
            editor: n,
            rules: f
          }), p = Array.isArray(d) ? d : [d];
          s.push(...p);
        }
      }
      const u = T(r, "addPasteRules", i);
      if (cu(r, n.options.enablePasteRules) && u) {
        const f = u();
        if (f && f.length) {
          const d = XS({ editor: n, rules: f });
          s.push(...d);
        }
      }
      const h = T(
        r,
        "addProseMirrorPlugins",
        i
      );
      if (h) {
        const f = h();
        s.push(...f);
      }
      return s;
    }).flat();
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Md(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: n } = this, { nodeExtensions: e } = $r(this.extensions);
    return Object.fromEntries(
      e.filter((t) => !!T(t, "addNodeView")).map((t) => {
        const r = this.attributes.filter((l) => l.type === t.name), i = {
          name: t.name,
          options: t.options,
          storage: this.editor.extensionStorage[t.name],
          editor: n,
          type: G(t.name, this.schema)
        }, s = T(t, "addNodeView", i);
        if (!s)
          return [];
        const o = (l, a, c, u, h) => {
          const f = Ki(l, r);
          return s()({
            // pass-through
            node: l,
            view: a,
            getPos: c,
            decorations: u,
            innerDecorations: h,
            // tiptap-specific
            editor: n,
            extension: t,
            HTMLAttributes: f
          });
        };
        return [t.name, o];
      })
    );
  }
  get markViews() {
    const { editor: n } = this, { markExtensions: e } = $r(this.extensions);
    return Object.fromEntries(
      e.filter((t) => !!T(t, "addMarkView")).map((t) => {
        const r = this.attributes.filter((l) => l.type === t.name), i = {
          name: t.name,
          options: t.options,
          storage: this.editor.extensionStorage[t.name],
          editor: n,
          type: ut(t.name, this.schema)
        }, s = T(t, "addMarkView", i);
        if (!s)
          return [];
        const o = (l, a, c) => {
          const u = Ki(l, r);
          return s()({
            // pass-through
            mark: l,
            view: a,
            inline: c,
            // tiptap-specific
            editor: n,
            extension: t,
            HTMLAttributes: u,
            updateAttributes: (h) => {
              dx(l, n, h);
            }
          });
        };
        return [t.name, o];
      })
    );
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const n = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      n.map((e) => [e.name, e.storage])
    ), n.forEach((e) => {
      var t;
      const r = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: No(e.name, this.schema)
      };
      e.type === "mark" && ((t = $(T(e, "keepOnSplit", r))) == null || t) && this.splittableMarks.push(e.name);
      const i = T(e, "onBeforeCreate", r), s = T(e, "onCreate", r), o = T(e, "onUpdate", r), l = T(
        e,
        "onSelectionUpdate",
        r
      ), a = T(e, "onTransaction", r), c = T(e, "onFocus", r), u = T(e, "onBlur", r), h = T(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), h && this.editor.on("destroy", h);
    });
  }
};
Ks.resolve = Td;
Ks.sort = Sa;
Ks.flatten = ga;
var QS = {};
bd(QS, {
  ClipboardTextSerializer: () => Bd,
  Commands: () => Vd,
  Delete: () => Jd,
  Drop: () => Wd,
  Editable: () => jd,
  FocusEvents: () => Kd,
  Keymap: () => Ud,
  Paste: () => _d,
  Tabindex: () => Gd,
  focusEventsPluginKey: () => qd
});
var B = class $d extends Ca {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new $d(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
}, Bd = B.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((u) => u.$from.pos)), l = Math.max(...s.map((u) => u.$to.pos)), a = Od(t);
            return vd(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Fd = {};
bd(Fd, {
  blur: () => ZS,
  clearContent: () => ek,
  clearNodes: () => tk,
  command: () => nk,
  createParagraphNear: () => rk,
  cut: () => ik,
  deleteCurrentNode: () => sk,
  deleteNode: () => ok,
  deleteRange: () => lk,
  deleteSelection: () => ak,
  enter: () => ck,
  exitCode: () => uk,
  extendMarkRange: () => hk,
  first: () => fk,
  focus: () => pk,
  forEach: () => mk,
  insertContent: () => gk,
  insertContentAt: () => Sk,
  joinBackward: () => bk,
  joinDown: () => xk,
  joinForward: () => Ck,
  joinItemBackward: () => wk,
  joinItemForward: () => Ek,
  joinTextblockBackward: () => Mk,
  joinTextblockForward: () => Tk,
  joinUp: () => kk,
  keyboardShortcut: () => Ok,
  lift: () => Nk,
  liftEmptyBlock: () => Ak,
  liftListItem: () => Ik,
  newlineInCode: () => Rk,
  resetAttributes: () => Dk,
  scrollIntoView: () => zk,
  selectAll: () => Lk,
  selectNodeBackward: () => Pk,
  selectNodeForward: () => $k,
  selectParentNode: () => Bk,
  selectTextblockEnd: () => Fk,
  selectTextblockStart: () => Hk,
  setContent: () => Vk,
  setMark: () => Wk,
  setMeta: () => jk,
  setNode: () => qk,
  setNodeSelection: () => Kk,
  setTextSelection: () => Uk,
  sinkListItem: () => _k,
  splitBlock: () => Gk,
  splitListItem: () => Yk,
  toggleList: () => Xk,
  toggleMark: () => Qk,
  toggleNode: () => Zk,
  toggleWrap: () => ex,
  undoInputRule: () => tx,
  unsetAllMarks: () => nx,
  unsetMark: () => rx,
  updateAttributes: () => ix,
  wrapIn: () => sx,
  wrapInList: () => ox
});
var ZS = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) == null || t.removeAllRanges());
}), !0), ek = (n = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: n }), tk = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, h = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), d = h.blockRange(f);
      if (!d)
        return;
      const p = S1(d);
      if (l.type.isTextblock) {
        const { defaultType: m } = h.parent.contentMatchAt(h.index());
        e.setNodeMarkup(d.start, m);
      }
      (p || p === 0) && e.lift(d, p);
    });
  }), !0;
}, nk = (n) => (e) => n(e), rk = () => ({ state: n, dispatch: e }) => cS(n, e), ik = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new v(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, sk = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, ok = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = G(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, lk = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, ak = () => ({ state: n, dispatch: e }) => X1(n, e), ck = () => ({ commands: n }) => n.keyboardShortcut("Enter"), uk = () => ({ state: n, dispatch: e }) => aS(n, e), hk = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = ut(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const h = xa(a, s, e);
    if (h && h.from <= c && h.to >= u) {
      const f = v.create(o, h.from, h.to);
      t.setSelection(f);
    }
  }
  return !0;
}, fk = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function dk() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function wa() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var pk = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (wa() || dk()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !Dd(t.state.selection))
    return o(), !0;
  const l = zd(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, mk = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), gk = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), yk = (n) => !("type" in n), Sk = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  var o;
  if (i) {
    t = {
      parseOptions: s.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const { selection: a } = s.state, c = (y) => {
      s.emit("contentError", {
        editor: s,
        error: y,
        disableCollaboration: () => {
          "collaboration" in s.storage && typeof s.storage.collaboration == "object" && s.storage.collaboration && (s.storage.collaboration.isDisabled = !0);
        }
      });
    }, u = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError)
      try {
        Pr(e, s.schema, {
          parseOptions: u,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        c(y);
      }
    try {
      l = Pr(e, s.schema, {
        parseOptions: u,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) != null ? o : s.options.enableContentCheck
      });
    } catch (y) {
      return c(y), !1;
    }
    let { from: h, to: f } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, d = !0, p = !0;
    if ((yk(l) ? l : [l]).forEach((y) => {
      y.check(), d = d ? y.isText && y.marks.length === 0 : !1, p = p ? y.isBlock : !1;
    }), h === f && p) {
      const { parent: y } = r.doc.resolve(h);
      y.isTextblock && !y.type.spec.code && !y.childCount && (h -= 1, f += 1);
    }
    let g;
    if (d) {
      if (Array.isArray(e))
        g = e.map((y) => y.text || "").join("");
      else if (e instanceof w) {
        let y = "";
        e.forEach((S) => {
          S.text && (y += S.text);
        }), g = y;
      } else
        typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, h, f);
    } else {
      g = l;
      const y = a.$from.parentOffset === 0, S = a.$from.node().isText || a.$from.node().isTextblock, C = a.$from.node().content.size > 0;
      y && S && C && (h = Math.max(0, h - 1)), r.replaceWith(h, f, g);
    }
    t.updateSelection && JS(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: h, text: g }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: h, text: g });
  }
  return !0;
}, kk = () => ({ state: n, dispatch: e }) => iS(n, e), xk = () => ({ state: n, dispatch: e }) => sS(n, e), bk = () => ({ state: n, dispatch: e }) => Q1(n, e), Ck = () => ({ state: n, dispatch: e }) => nS(n, e), wk = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Jf(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Ek = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Jf(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Mk = () => ({ state: n, dispatch: e }) => Z1(n, e), Tk = () => ({ state: n, dispatch: e }) => eS(n, e);
function Hd() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function vk(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      wa() || Hd() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
var Ok = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = vk(n).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
}, Nk = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = G(n, t.schema);
  return vt(t, i, e) ? oS(t, r) : !1;
}, Ak = () => ({ state: n, dispatch: e }) => uS(n, e), Ik = (n) => ({ state: e, dispatch: t }) => {
  const r = G(n, e.schema);
  return kS(r)(e, t);
}, Rk = () => ({ state: n, dispatch: e }) => lS(n, e);
function hu(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
var Dk = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Ws(
    typeof n == "string" ? n : n.name,
    r.schema
  );
  return l ? (l === "node" && (s = G(n, r.schema)), l === "mark" && (o = ut(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      s && s === c.type && t.setNodeMarkup(u, void 0, hu(c.attrs, e)), o && c.marks.length && c.marks.forEach((h) => {
        o === h.type && t.addMark(u, u + c.nodeSize, o.create(hu(h.attrs, e)));
      });
    });
  }), !0) : !1;
}, zk = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), Lk = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new ve(n.doc);
    n.setSelection(t);
  }
  return !0;
}, Pk = () => ({ state: n, dispatch: e }) => tS(n, e), $k = () => ({ state: n, dispatch: e }) => rS(n, e), Bk = () => ({ state: n, dispatch: e }) => hS(n, e), Fk = () => ({ state: n, dispatch: e }) => pS(n, e), Hk = () => ({ state: n, dispatch: e }) => dS(n, e), Vk = (n, { errorOnInvalidContent: e, emitUpdate: t = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => {
  const { doc: a } = s;
  if (r.preserveWhitespace !== "full") {
    const c = El(n, i.schema, r, {
      errorOnInvalidContent: e ?? i.options.enableContentCheck
    });
    return o && s.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !t), !0;
  }
  return o && s.setMeta("preventUpdate", !t), l.insertContentAt({ from: 0, to: a.content.size }, n, {
    parseOptions: r,
    errorOnInvalidContent: e ?? i.options.enableContentCheck
  });
};
function Jk(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (Dd(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) != null ? r : s.marks();
    return s.parent.type.allowsMarkType(t) && (!!t.isInSet(l) || !l.some((c) => c.type.excludes(t)));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, h, f) => {
      if (c)
        return !1;
      if (u.isInline) {
        const d = !f || f.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = d && p;
      }
      return !c;
    }), c;
  });
}
var Wk = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = ut(n, r.schema);
  if (i)
    if (o) {
      const c = Nd(r, a);
      t.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const u = c.$from.pos, h = c.$to.pos;
        r.doc.nodesBetween(u, h, (f, d) => {
          const p = Math.max(d, u), m = Math.min(d + f.nodeSize, h);
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && t.addMark(
              p,
              m,
              a.create({
                ...y.attrs,
                ...e
              })
            );
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return Jk(r, t, a);
}, jk = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), qk = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = G(n, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({ commands: l }) => su(s, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => su(s, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Kk = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Vt(n, 0, r.content.size), s = x.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, Uk = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = v.atStart(r).from, l = v.atEnd(r).to, a = Vt(i, o, l), c = Vt(s, o, l), u = v.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, _k = (n) => ({ state: e, dispatch: t }) => {
  const r = G(n, e.schema);
  return CS(r)(e, t);
};
function fu(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
var Gk = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, u = vi(c, l.node().type.name, l.node().attrs);
  if (s instanceof x && s.node.isBlock)
    return !l.parentOffset || !Ei(o, l.pos) ? !1 : (r && (n && fu(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const h = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : MS(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let d = h && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = Ei(e.doc, e.mapping.map(l.pos), 1, d);
  if (!d && !p && Ei(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, d = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (s instanceof v && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, d), f && !h && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    n && fu(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Yk = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: s }) => {
  var o;
  const l = G(n, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const h = a.node(-1);
  if (h.type !== l)
    return !1;
  const f = s.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = w.empty;
      const S = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let M = a.depth - S; M >= a.depth - 3; M -= 1)
        y = w.from(a.node(M).copy(y));
      const C = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), I = {
        ...vi(f, a.node().type.name, a.node().attrs),
        ...e
      }, E = ((o = l.contentMatch.defaultType) == null ? void 0 : o.createAndFill(I)) || void 0;
      y = y.append(w.from(l.createAndFill(null, E) || void 0));
      const b = a.before(a.depth - (S - 1));
      t.replace(b, a.after(-C), new N(y, 4 - S, 0));
      let O = -1;
      t.doc.nodesBetween(b, t.doc.content.size, (M, P) => {
        if (O > -1)
          return !1;
        M.isTextblock && M.content.size === 0 && (O = P + 1);
      }), O > -1 && t.setSelection(v.near(t.doc.resolve(O))), t.scrollIntoView();
    }
    return !0;
  }
  const d = c.pos === a.end() ? h.contentMatchAt(0).defaultType : null, p = {
    ...vi(f, h.type.name, h.attrs),
    ...e
  }, m = {
    ...vi(f, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const g = d ? [
    { type: l, attrs: p },
    { type: d, attrs: m }
  ] : [{ type: l, attrs: p }];
  if (!Ei(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: S } = r, { splittableMarks: C } = s.extensionManager, I = S || y.$to.parentOffset && y.$from.marks();
    if (t.split(a.pos, 2, g).scrollIntoView(), !I || !i)
      return !0;
    const E = I.filter((b) => C.includes(b.type.name));
    t.ensureMarks(E);
  }
  return !0;
}, Ao = (n, e) => {
  const t = Js((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && ha(n.doc, t.pos) && n.join(t.pos), !0;
}, Io = (n, e) => {
  const t = Js((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && ha(n.doc, r) && n.join(r), !0;
}, Xk = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: h, splittableMarks: f } = i.extensionManager, d = G(n, o.schema), p = G(e, o.schema), { selection: m, storedMarks: g } = o, { $from: y, $to: S } = m, C = y.blockRange(S), I = g || m.$to.parentOffset && m.$from.marks();
  if (!C)
    return !1;
  const E = Js((b) => uu(b.type.name, h))(m);
  if (C.depth >= 1 && E && C.depth - E.depth <= 1) {
    if (E.node.type === d)
      return c.liftListItem(p);
    if (uu(E.node.type.name, h) && d.validContent(E.node.content) && l)
      return a().command(() => (s.setNodeMarkup(E.pos, d), !0)).command(() => Ao(s, d)).command(() => Io(s, d)).run();
  }
  return !t || !I || !l ? a().command(() => u().wrapInList(d, r) ? !0 : c.clearNodes()).wrapInList(d, r).command(() => Ao(s, d)).command(() => Io(s, d)).run() : a().command(() => {
    const b = u().wrapInList(d, r), O = I.filter((M) => f.includes(M.type.name));
    return s.ensureMarks(O), b ? !0 : c.clearNodes();
  }).wrapInList(d, r).command(() => Ao(s, d)).command(() => Io(s, d)).run();
}, Qk = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = ut(n, r.schema);
  return Ml(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, Zk = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = G(n, r.schema), o = G(e, r.schema), l = vt(r, s, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(o, a) : i.setNode(s, { ...a, ...t });
}, ex = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = G(n, t.schema);
  return vt(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, tx = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, nx = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, rx = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = ut(n, r.schema), { $from: c, empty: u, ranges: h } = l;
  if (!i)
    return !0;
  if (u && o) {
    let { from: f, to: d } = l;
    const p = (s = c.marks().find((g) => g.type === a)) == null ? void 0 : s.attrs, m = xa(c, a, p);
    m && (f = m.from, d = m.to), t.removeMark(f, d, a);
  } else
    h.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, ix = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Ws(
    typeof n == "string" ? n : n.name,
    r.schema
  );
  return l ? (l === "node" && (s = G(n, r.schema)), l === "mark" && (o = ut(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    let h, f, d, p;
    t.selection.empty ? r.doc.nodesBetween(c, u, (m, g) => {
      s && s === m.type && (d = Math.max(g, c), p = Math.min(g + m.nodeSize, u), h = g, f = m);
    }) : r.doc.nodesBetween(c, u, (m, g) => {
      g < c && s && s === m.type && (d = Math.max(g, c), p = Math.min(g + m.nodeSize, u), h = g, f = m), g >= c && g <= u && (s && s === m.type && t.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), o && m.marks.length && m.marks.forEach((y) => {
        if (o === y.type) {
          const S = Math.max(g, c), C = Math.min(g + m.nodeSize, u);
          t.addMark(
            S,
            C,
            o.create({
              ...y.attrs,
              ...e
            })
          );
        }
      }));
    }), f && (h !== void 0 && t.setNodeMarkup(h, void 0, {
      ...f.attrs,
      ...e
    }), o && f.marks.length && f.marks.forEach((m) => {
      o === m.type && t.addMark(
        d,
        p,
        o.create({
          ...m.attrs,
          ...e
        })
      );
    }));
  }), !0) : !1;
}, sx = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = G(n, t.schema);
  return mS(i, e)(t, r);
}, ox = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = G(n, t.schema);
  return gS(i, e)(t, r);
}, Vd = B.create({
  name: "commands",
  addCommands() {
    return {
      ...Fd
    };
  }
}), Jd = B.create({
  name: "delete",
  onUpdate({ transaction: n, appendedTransactions: e }) {
    var t, r, i;
    const s = () => {
      var o, l, a, c;
      if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? void 0 : o.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, n)) != null ? c : n.getMeta("y-sync$"))
        return;
      const u = Cd(n.before, [n, ...e]);
      Id(u).forEach((d) => {
        u.mapping.mapResult(d.oldRange.from).deletedAfter && u.mapping.mapResult(d.oldRange.to).deletedBefore && u.before.nodesBetween(d.oldRange.from, d.oldRange.to, (p, m) => {
          const g = m + p.nodeSize - 2, y = d.oldRange.from <= m && g <= d.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: p,
            from: m,
            to: g,
            newFrom: u.mapping.map(m),
            newTo: u.mapping.map(g),
            deletedRange: d.oldRange,
            newRange: d.newRange,
            partial: !y,
            editor: this.editor,
            transaction: n,
            combinedTransform: u
          });
        });
      });
      const f = u.mapping;
      u.steps.forEach((d, p) => {
        var m, g;
        if (d instanceof Vn) {
          const y = f.slice(p).map(d.from, -1), S = f.slice(p).map(d.to), C = f.invert().map(y, -1), I = f.invert().map(S), E = (m = u.doc.nodeAt(y - 1)) == null ? void 0 : m.marks.some((O) => O.eq(d.mark)), b = (g = u.doc.nodeAt(S)) == null ? void 0 : g.marks.some((O) => O.eq(d.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: d.mark,
            from: d.from,
            to: d.to,
            deletedRange: {
              from: C,
              to: I
            },
            newRange: {
              from: y,
              to: S
            },
            partial: !!(b || E),
            editor: this.editor,
            transaction: n,
            combinedTransform: u
          });
        }
      });
    };
    (i = (r = (t = this.editor.options.coreExtensionOptions) == null ? void 0 : t.delete) == null ? void 0 : r.async) == null || i ? setTimeout(s, 0) : s();
  }
}), Wd = B.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), jd = B.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), qd = new ee("focusEvents"), Kd = B.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new W({
        key: qd,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Ud = B.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: h } = a, { pos: f, parent: d } = h, p = h.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : h, m = p.parent.type.spec.isolating, g = h.pos - h.parentOffset, y = m && p.parent.childCount === 1 ? g === h.pos : A.atStart(c).from === f;
        return !u || !d.type.isTextblock || d.textContent.length || !y || y && h.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return wa() || Hd() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new W({
        key: new ee("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((m) => m.getMeta("composition")))
            return;
          const r = n.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = n.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: s, from: o, to: l } = e.selection, a = A.atStart(e.doc).from, c = A.atEnd(e.doc).to;
          if (s || !(o === a && l === c) || !js(t.doc))
            return;
          const f = t.tr, d = Hs({
            state: t,
            transaction: f
          }), { commands: p } = new Vs({
            editor: this.editor,
            state: d
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), _d = B.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), Gd = B.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), lx = class On {
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) != null ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new On(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new On(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new On(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, s = t.isAtom && !t.isText, o = this.pos + r + (s ? 0 : 1);
      if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(o);
      if (!i && l.depth <= this.depth)
        return;
      const a = new On(l, this.editor, i, i ? t : null);
      i && (a.actualDepth = this.depth + 1), e.push(new On(l, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (s[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const s = Object.keys(t);
    return this.children.forEach((o) => {
      r && i.length > 0 || (o.node.type.name === e && s.every((a) => t[a] === o.node.attrs[a]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}, ax = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function cx(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
var ux = class extends ES {
  constructor(n = {}) {
    super(), this.css = null, this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
      element: typeof document < "u" ? document.createElement("div") : null,
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: r }) => {
        throw r;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(n), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: r, slice: i, moved: s }) => this.options.onDrop(r, i, s)), this.on("paste", ({ event: r, slice: i }) => this.options.onPaste(r, i)), this.on("delete", this.options.onDelete);
    const e = this.createDoc(), t = zd(e, this.options.autofocus);
    this.editorState = In.create({
      doc: e,
      schema: this.schema,
      selection: t || void 0
    }), this.options.element && this.mount(this.options.element);
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(n) {
    if (typeof document > "u")
      throw new Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
      );
    this.createView(n), this.emit("mount", { editor: this }), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      const n = this.editorView.dom;
      n != null && n.editor && delete n.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = !1, this.css)
      try {
        typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
      } catch (n) {
        console.warn("Failed to remove CSS element:", n);
      }
    this.css = null, this.emit("unmount", { editor: this });
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && typeof document < "u" && (this.css = cx(ax, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(n = {}) {
    this.options = {
      ...this.options,
      ...n
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(n, e = !0) {
    this.setOptions({ editable: n }), e && this.emit("update", { editor: this, transaction: this.state.tr, appendedTransactions: [] });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get view() {
    return this.editorView ? this.editorView : new Proxy(
      {
        state: this.editorState,
        updateState: (n) => {
          this.editorState = n;
        },
        dispatch: (n) => {
          this.editorState = this.state.apply(n);
        },
        // Stub some commonly accessed properties to prevent errors
        composing: !1,
        dragging: null,
        editable: !0,
        isDestroyed: !1
      },
      {
        get: (n, e) => {
          if (e === "state")
            return this.editorState;
          if (e in n)
            return Reflect.get(n, e);
          throw new Error(
            `[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`
          );
        }
      }
    );
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.editorView && (this.editorState = this.view.state), this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(n, e) {
    const t = Ed(e) ? e(n, [...this.state.plugins]) : [...this.state.plugins, n], r = this.state.reconfigure({ plugins: t });
    return this.view.updateState(r), r;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(n) {
    if (this.isDestroyed)
      return;
    const e = this.state.plugins;
    let t = e;
    if ([].concat(n).forEach((i) => {
      const s = typeof i == "string" ? `${i}$` : i.key;
      t = t.filter((o) => !o.key.startsWith(s));
    }), e.length === t.length)
      return;
    const r = this.state.reconfigure({
      plugins: t
    });
    return this.view.updateState(r), r;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var n, e;
    const r = [...this.options.enableCoreExtensions ? [
      jd,
      Bd.configure({
        blockSeparator: (e = (n = this.options.coreExtensionOptions) == null ? void 0 : n.clipboardTextSerializer) == null ? void 0 : e.blockSeparator
      }),
      Vd,
      Kd,
      Ud,
      Gd,
      Wd,
      _d,
      Jd
    ].filter((i) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[i.name] !== !1 : !0) : [], ...this.options.extensions].filter((i) => ["extension", "node", "mark"].includes(i == null ? void 0 : i.type));
    this.extensionManager = new Ks(r, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Vs({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
  createDoc() {
    let n;
    try {
      n = El(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (e) {
      if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message))
        throw e;
      this.emit("contentError", {
        editor: this,
        error: e,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((t) => t.name !== "collaboration"), this.createExtensionManager();
        }
      }), n = El(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: !1
      });
    }
    return n;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(n) {
    var e;
    this.editorView = new Rf(n, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) == null ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const t = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(t), this.prependClass(), this.injectCSS();
    const r = this.view.dom;
    r.editor = this;
  }
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(n) {
    this.isCapturingTransaction = !0, n(), this.isCapturingTransaction = !1;
    const e = this.capturedTransaction;
    return this.capturedTransaction = null, e;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(n) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = n;
        return;
      }
      n.steps.forEach((c) => {
        var u;
        return (u = this.capturedTransaction) == null ? void 0 : u.step(c);
      });
      return;
    }
    const { state: e, transactions: t } = this.state.applyTransaction(n), r = !this.state.selection.eq(e.selection), i = t.includes(n), s = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: n,
      nextState: e
    }), !i)
      return;
    this.view.updateState(e), this.emit("transaction", {
      editor: this,
      transaction: n,
      appendedTransactions: t.slice(1)
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: n
    });
    const o = t.findLast((c) => c.getMeta("focus") || c.getMeta("blur")), l = o == null ? void 0 : o.getMeta("focus"), a = o == null ? void 0 : o.getMeta("blur");
    l && this.emit("focus", {
      editor: this,
      event: l.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: o
    }), a && this.emit("blur", {
      editor: this,
      event: a.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: o
    }), !(n.getMeta("preventUpdate") || !t.some((c) => c.docChanged) || s.doc.eq(e.doc)) && this.emit("update", {
      editor: this,
      transaction: n,
      appendedTransactions: t.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(n) {
    return Ad(this.state, n);
  }
  isActive(n, e) {
    const t = typeof n == "string" ? n : null, r = typeof n == "string" ? e : n;
    return BS(this.state, t, r);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return ya(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(n) {
    const { blockSeparator: e = `

`, textSerializers: t = {} } = n || {};
    return RS(this.state.doc, {
      blockSeparator: e,
      textSerializers: {
        ...Od(this.schema),
        ...t
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return js(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.unmount(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var n, e;
    return (e = (n = this.editorView) == null ? void 0 : n.isDestroyed) != null ? e : !0;
  }
  $node(n, e) {
    var t;
    return ((t = this.$doc) == null ? void 0 : t.querySelector(n, e)) || null;
  }
  $nodes(n, e) {
    var t;
    return ((t = this.$doc) == null ? void 0 : t.querySelectorAll(n, e)) || null;
  }
  $pos(n) {
    const e = this.state.doc.resolve(n);
    return new lx(e, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function on(n) {
  return new qs({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = $(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), u = c + o.length;
        if (ba(t.from, t.to, e.doc).filter((d) => d.mark.type.excluded.find((m) => m === n.type && m !== d.mark.type)).filter((d) => d.to > c).length)
          return null;
        u < t.to && s.delete(u, t.to), c > t.from && s.delete(t.from + a, c);
        const f = t.from + a + o.length;
        s.addMark(t.from + a, f, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function hx(n) {
  return new qs({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = $(n.getAttributes, void 0, r) || {}, { tr: s } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? u = l : l = u + r[1].length;
        const h = r[0][r[0].length - 1];
        s.insertText(h, o + r[0].length - 1), s.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = n.type.isInline ? o : o - 1;
        s.insert(c, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l));
      }
      s.scrollIntoView();
    }
  });
}
function fx(n) {
  return new qs({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = $(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    }
  });
}
function Hn(n) {
  return new qs({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = $(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && x1(a, n.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: h, storedMarks: f } = e, { splittableMarks: d } = n.editor.extensionManager, p = f || h.$to.parentOffset && h.$from.marks();
        if (p) {
          const m = p.filter((g) => d.includes(g.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const h = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(h, s).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && ha(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
    }
  });
}
function dx(n, e, t = {}) {
  const { state: r } = e, { doc: i, tr: s } = r, o = n;
  i.descendants((l, a) => {
    const c = s.mapping.map(a), u = s.mapping.map(a) + l.nodeSize;
    let h = null;
    if (l.marks.forEach((d) => {
      if (d !== o)
        return !1;
      h = d;
    }), !h)
      return;
    let f = !1;
    if (Object.keys(t).forEach((d) => {
      t[d] !== h.attrs[d] && (f = !0);
    }), f) {
      const d = n.type.create({
        ...n.attrs,
        ...t
      });
      s.removeMark(c, u, n.type), s.addMark(c, u, d);
    }
  }), s.docChanged && e.view.dispatch(s);
}
var Pe = class Yd extends Ca {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new Yd(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
};
function Ot(n) {
  return new US({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = $(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), h = t.from + a.indexOf(l), f = h + l.length;
        if (ba(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === n.type && g !== p.mark.type)).filter((p) => p.to > h).length)
          return null;
        f < t.to && o.delete(f, t.to), h > t.from && o.delete(t.from + u, h), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
var px = function n(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, i, s;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (i = r; i-- !== 0; )
        if (!n(e[i], t[i]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i of e.entries())
        if (!t.has(i[0]))
          return !1;
      for (i of e.entries())
        if (!n(i[1], t.get(i[0])))
          return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i of e.entries())
        if (!t.has(i[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (i = r; i-- !== 0; )
        if (e[i] !== t[i])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[i]))
        return !1;
    for (i = r; i-- !== 0; ) {
      var o = s[i];
      if (!(o === "_owner" && e.$$typeof) && !n(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
};
const mx = /* @__PURE__ */ Zu(px);
var Tl = { exports: {} }, Ro = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var du;
function gx() {
  if (du)
    return Ro;
  du = 1;
  var n = He, e = Rs;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, s = n.useRef, o = n.useEffect, l = n.useMemo, a = n.useDebugValue;
  return Ro.useSyncExternalStoreWithSelector = function(c, u, h, f, d) {
    var p = s(null);
    if (p.current === null) {
      var m = { hasValue: !1, value: null };
      p.current = m;
    } else
      m = p.current;
    p = l(
      function() {
        function y(b) {
          if (!S) {
            if (S = !0, C = b, b = f(b), d !== void 0 && m.hasValue) {
              var O = m.value;
              if (d(O, b))
                return I = O;
            }
            return I = b;
          }
          if (O = I, r(C, b))
            return O;
          var M = f(b);
          return d !== void 0 && d(O, M) ? (C = b, O) : (C = b, I = M);
        }
        var S = !1, C, I, E = h === void 0 ? null : h;
        return [
          function() {
            return y(u());
          },
          E === null ? void 0 : function() {
            return y(E());
          }
        ];
      },
      [u, h, f, d]
    );
    var g = i(c, p[0], p[1]);
    return o(
      function() {
        m.hasValue = !0, m.value = g;
      },
      [g]
    ), a(g), g;
  }, Ro;
}
var Do = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pu;
function yx() {
  return pu || (pu = 1, process.env.NODE_ENV !== "production" && function() {
    function n(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var e = He, t = Rs, r = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, s = e.useRef, o = e.useEffect, l = e.useMemo, a = e.useDebugValue;
    Do.useSyncExternalStoreWithSelector = function(c, u, h, f, d) {
      var p = s(null);
      if (p.current === null) {
        var m = { hasValue: !1, value: null };
        p.current = m;
      } else
        m = p.current;
      p = l(
        function() {
          function y(b) {
            if (!S) {
              if (S = !0, C = b, b = f(b), d !== void 0 && m.hasValue) {
                var O = m.value;
                if (d(O, b))
                  return I = O;
              }
              return I = b;
            }
            if (O = I, r(C, b))
              return O;
            var M = f(b);
            return d !== void 0 && d(O, M) ? (C = b, O) : (C = b, I = M);
          }
          var S = !1, C, I, E = h === void 0 ? null : h;
          return [
            function() {
              return y(u());
            },
            E === null ? void 0 : function() {
              return y(E());
            }
          ];
        },
        [u, h, f, d]
      );
      var g = i(c, p[0], p[1]);
      return o(
        function() {
          m.hasValue = !0, m.value = g;
        },
        [g]
      ), a(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Do;
}
process.env.NODE_ENV === "production" ? Tl.exports = gx() : Tl.exports = yx();
var Sx = Tl.exports, kx = (...n) => (e) => {
  n.forEach((t) => {
    typeof t == "function" ? t(e) : t && (t.current = e);
  });
}, xx = ({ contentComponent: n }) => {
  const e = Rs.useSyncExternalStore(
    n.subscribe,
    n.getSnapshot,
    n.getServerSnapshot
  );
  return /* @__PURE__ */ Ii(Qu, { children: Object.values(e) });
};
function bx() {
  const n = /* @__PURE__ */ new Set();
  let e = {};
  return {
    /**
     * Subscribe to the editor instance's changes.
     */
    subscribe(t) {
      return n.add(t), () => {
        n.delete(t);
      };
    },
    getSnapshot() {
      return e;
    },
    getServerSnapshot() {
      return e;
    },
    /**
     * Adds a new NodeView Renderer to the editor.
     */
    setRenderer(t, r) {
      e = {
        ...e,
        [t]: om.createPortal(r.reactElement, r.element, t)
      }, n.forEach((i) => i());
    },
    /**
     * Removes a NodeView Renderer from the editor.
     */
    removeRenderer(t) {
      const r = { ...e };
      delete r[t], e = r, n.forEach((i) => i());
    }
  };
}
var Cx = class extends He.Component {
  constructor(n) {
    var e;
    super(n), this.editorContentRef = He.createRef(), this.initialized = !1, this.state = {
      hasContentComponentInitialized: !!((e = n.editor) != null && e.contentComponent)
    };
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    const n = this.props.editor;
    if (n && !n.isDestroyed && n.options.element) {
      if (n.contentComponent)
        return;
      const e = this.editorContentRef.current;
      e.append(...n.options.element.childNodes), n.setOptions({
        element: e
      }), n.contentComponent = bx(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = n.contentComponent.subscribe(() => {
        this.setState((t) => t.hasContentComponentInitialized ? t : {
          hasContentComponentInitialized: !0
        }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
      })), n.createNodeViews(), this.initialized = !0;
    }
  }
  componentWillUnmount() {
    var n;
    const e = this.props.editor;
    if (!e || (this.initialized = !1, e.isDestroyed || e.view.setProps({
      nodeViews: {}
    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null, !((n = e.options.element) != null && n.firstChild)))
      return;
    const t = document.createElement("div");
    t.append(...e.options.element.childNodes), e.setOptions({
      element: t
    });
  }
  render() {
    const { editor: n, innerRef: e, ...t } = this.props;
    return /* @__PURE__ */ lm(Qu, { children: [
      /* @__PURE__ */ Ii("div", { ref: kx(e, this.editorContentRef), ...t }),
      (n == null ? void 0 : n.contentComponent) && /* @__PURE__ */ Ii(xx, { contentComponent: n.contentComponent })
    ] });
  }
}, wx = tm(
  (n, e) => {
    const t = He.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [n.editor]);
    return He.createElement(Cx, {
      key: t,
      innerRef: e,
      ...n
    });
  }
);
He.memo(wx);
var Ex = typeof window < "u" ? im : Ai, Mx = class {
  constructor(n) {
    this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = /* @__PURE__ */ new Set(), this.editor = n, this.lastSnapshot = { editor: n, transactionNumber: 0 }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
  }
  /**
   * Get the current editor instance.
   */
  getSnapshot() {
    return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = { editor: this.editor, transactionNumber: this.transactionNumber }, this.lastSnapshot);
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return { editor: null, transactionNumber: 0 };
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(n) {
    return this.subscribers.add(n), () => {
      this.subscribers.delete(n);
    };
  }
  /**
   * Watch the editor instance for changes.
   */
  watch(n) {
    if (this.editor = n, this.editor) {
      const e = () => {
        this.transactionNumber += 1, this.subscribers.forEach((r) => r());
      }, t = this.editor;
      return t.on("transaction", e), () => {
        t.off("transaction", e);
      };
    }
  }
};
function Tx(n) {
  var e;
  const [t] = Gu(() => new Mx(n.editor)), r = Sx.useSyncExternalStoreWithSelector(
    t.subscribe,
    t.getSnapshot,
    t.getServerSnapshot,
    n.selector,
    (e = n.equalityFn) != null ? e : mx
  );
  return Ex(() => t.watch(n.editor), [n.editor, t]), Yu(r), r;
}
var mu = process.env.NODE_ENV !== "production", vl = typeof window > "u", vx = vl || !!(typeof window < "u" && window.next), Ox = class Xd {
  constructor(e) {
    this.editor = null, this.subscriptions = /* @__PURE__ */ new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = /* @__PURE__ */ new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
  }
  setEditor(e) {
    this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((t) => t());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === void 0) {
      if (vl || vx) {
        if (mu)
          throw new Error(
            "Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches."
          );
        return null;
      }
      return this.createEditor();
    }
    if (this.options.current.immediatelyRender && vl && mu)
      throw new Error(
        "Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches."
      );
    return this.options.current.immediatelyRender ? this.createEditor() : null;
  }
  /**
   * Create a new editor instance. And attach event listeners.
   */
  createEditor() {
    const e = {
      ...this.options.current,
      // Always call the most recent version of the callback function by default
      onBeforeCreate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onBeforeCreate) == null ? void 0 : s.call(i, ...r);
      },
      onBlur: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onBlur) == null ? void 0 : s.call(i, ...r);
      },
      onCreate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onCreate) == null ? void 0 : s.call(i, ...r);
      },
      onDestroy: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onDestroy) == null ? void 0 : s.call(i, ...r);
      },
      onFocus: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onFocus) == null ? void 0 : s.call(i, ...r);
      },
      onSelectionUpdate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onSelectionUpdate) == null ? void 0 : s.call(i, ...r);
      },
      onTransaction: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onTransaction) == null ? void 0 : s.call(i, ...r);
      },
      onUpdate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onUpdate) == null ? void 0 : s.call(i, ...r);
      },
      onContentError: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onContentError) == null ? void 0 : s.call(i, ...r);
      },
      onDrop: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onDrop) == null ? void 0 : s.call(i, ...r);
      },
      onPaste: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onPaste) == null ? void 0 : s.call(i, ...r);
      },
      onDelete: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onDelete) == null ? void 0 : s.call(i, ...r);
      }
    };
    return new ux(e);
  }
  /**
   * Get the current editor instance.
   */
  getEditor() {
    return this.editor;
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return null;
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(e) {
    return this.subscriptions.add(e), () => {
      this.subscriptions.delete(e);
    };
  }
  static compareOptions(e, t) {
    return Object.keys(e).every((r) => [
      "onCreate",
      "onBeforeCreate",
      "onDestroy",
      "onUpdate",
      "onTransaction",
      "onFocus",
      "onBlur",
      "onSelectionUpdate",
      "onContentError",
      "onDrop",
      "onPaste"
    ].includes(r) ? !0 : r === "extensions" && e.extensions && t.extensions ? e.extensions.length !== t.extensions.length ? !1 : e.extensions.every((i, s) => {
      var o;
      return i === ((o = t.extensions) == null ? void 0 : o[s]);
    }) : e[r] === t[r]);
  }
  /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */
  onRender(e) {
    return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && e.length === 0 ? Xd.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
      ...this.options.current,
      editable: this.editor.isEditable
    }) : this.refreshEditorInstance(e), () => {
      this.isComponentMounted = !1, this.scheduleDestroy();
    });
  }
  /**
   * Recreate the editor instance if the dependencies have changed.
   */
  refreshEditorInstance(e) {
    if (this.editor && !this.editor.isDestroyed) {
      if (this.previousDeps === null) {
        this.previousDeps = e;
        return;
      }
      if (this.previousDeps.length === e.length && this.previousDeps.every((r, i) => r === e[i]))
        return;
    }
    this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e;
  }
  /**
   * Schedule the destruction of the editor instance.
   * This will only destroy the editor if it was not mounted on the next tick.
   * This is to avoid destroying the editor instance when it's actually still mounted.
   */
  scheduleDestroy() {
    const e = this.instanceId, t = this.editor;
    this.scheduledDestructionTimeout = setTimeout(() => {
      if (this.isComponentMounted && this.instanceId === e) {
        t && t.setOptions(this.options.current);
        return;
      }
      t && !t.isDestroyed && (t.destroy(), this.instanceId === e && this.setEditor(null));
    }, 1);
  }
};
function Nx(n = {}, e = []) {
  const t = nm(n);
  t.current = n;
  const [r] = Gu(() => new Ox(t)), i = Rs.useSyncExternalStore(
    r.subscribe,
    r.getEditor,
    r.getServerSnapshot
  );
  return Yu(i), Ai(r.onRender(e)), Tx({
    editor: i,
    selector: ({ transactionNumber: s }) => n.shouldRerenderOnTransaction === !1 || n.shouldRerenderOnTransaction === void 0 ? null : n.immediatelyRender && s === 0 ? 0 : s + 1
  }), i;
}
var Ax = Xu({
  editor: null
});
Ax.Consumer;
var Ix = Xu({
  onDragStart: () => {
  },
  nodeViewContentChildren: void 0,
  nodeViewContentRef: () => {
  }
}), Rx = () => rm(Ix);
He.forwardRef((n, e) => {
  const { onDragStart: t } = Rx(), r = n.as || "div";
  return (
    // @ts-ignore
    /* @__PURE__ */ Ii(
      r,
      {
        ...n,
        ref: e,
        "data-node-view-wrapper": "",
        onDragStart: t,
        style: {
          whiteSpace: "normal",
          ...n.style
        }
      }
    )
  );
});
He.createContext({
  markViewContentRef: () => {
  }
});
var Qd = /* @__PURE__ */ ((n) => (n.Action = "action", n))(Qd || {});
class j {
  constructor({
    forceName: e,
    tiptapExtension: t,
    tiptapExtensionDeps: r,
    onBridgeMessage: i,
    onEditorMessage: s,
    extendEditorState: o,
    extendEditorInstance: l,
    extendCSS: a,
    config: c,
    extendConfig: u
  }) {
    t ? this.name = Array.isArray(t) ? t.map((h) => h.name).join("+") : t.name : this.name = e || "BridgeExtension", this.tiptapExtension = t, this.tiptapExtensionDeps = r, this.onBridgeMessage = i, this.onEditorMessage = s, this.extendEditorState = o, this.extendEditorInstance = l, this.extendCSS = a, this.config = c, this.extendConfig = u;
  }
  // we can use clone, so that extension's can be configures without modifying
  // the values for each extension
  clone() {
    return new j({
      ...this,
      forceName: this.name
    });
  }
  // runs on native
  configureExtension(e) {
    const t = this.clone();
    return t.config = e, t;
  }
  configureCSS(e) {
    const t = this.clone();
    return t.extendCSS = e, t;
  }
  extendExtension(e) {
    const t = this.clone();
    return t.extendConfig = e, t;
  }
  // runs on web
  configureTiptapExtensionsOnRunTime(e, t) {
    var r, i;
    return this.tiptapExtension && (e && (this.tiptapExtension = (r = this.tiptapExtension) == null ? void 0 : r.configure(e)), t && (this.tiptapExtension = (i = this.tiptapExtension) == null ? void 0 : i.extend(t))), [this.tiptapExtension, ...this.tiptapExtensionDeps || []];
  }
}
class Dx {
  constructor() {
    qa(this, "subscriptions", {});
    this.subscriptions = {};
  }
  onMessage(e, t) {
    this.subscriptions[e] && this.subscriptions[e].forEach((r) => {
      r(t);
    });
  }
  addListener(e, t) {
    this.subscriptions[e] || (this.subscriptions[e] = []), this.subscriptions[e].push(t);
  }
  sendAsyncMessage(e, t) {
    const r = Math.random().toString(36).substring(7);
    return e.payload = e.payload || {}, e.payload.messageId = r, new Promise((i) => {
      this.addListener(r, i), t(e);
    });
  }
}
const mn = new Dx(), Zd = () => {
  let n = !1;
  try {
    require("expo-constants") && (n = !0);
  } catch {
    n = !1;
  }
  return n;
};
class zx {
  constructor() {
    this.focus = !1, window.document.addEventListener(
      "focus",
      () => {
        this.focus = !0;
      },
      !0
    ), window.document.addEventListener(
      "blur",
      () => {
        this.focus = !1;
      },
      !0
    );
  }
  get isFocused() {
    return this.focus;
  }
}
const Lx = { isFocused: !1 }, Px = Zd() ? Lx : new zx();
var $x = Pe.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), Bx = $x, Fx = Pe.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Hx = Fx, Vx = Pe.create({
  name: "text",
  group: "inline"
}), Jx = Vx, ur = /* @__PURE__ */ ((n) => (n.SetSelection = "set-selection", n.GetHTML = "get-html", n.GetJSON = "get-json", n.GetText = "get-text", n.SendHTMLToNative = "send-html-back", n.SendTextToNative = "send-text-back", n.SendJSONToNative = "send-json-back", n.SetContent = "set-content", n.StateUpdate = "stateUpdate", n.Focus = "focus", n.Blur = "blur", n.EditorReady = "editor-ready", n.UpdateScrollThresholdAndMargin = "update-scroll-threshold-and-margin", n.ContentUpdate = "content-update", n.DocumentHeight = "document-height", n.SetEditable = "set-editable", n))(ur || {});
const Wx = new j({
  forceName: "coreBridge",
  tiptapExtension: Bx,
  tiptapExtensionDeps: [Hx, Jx],
  onBridgeMessage: (n, e, t) => e.type === "set-content" ? (n.commands.setContent(e.payload.content), !0) : (e.type === "get-html" && t({
    type: "send-html-back",
    payload: {
      content: n.getHTML(),
      messageId: e.payload.messageId
    }
  }), e.type === "get-json" && t({
    type: "send-json-back",
    payload: {
      content: n.getJSON(),
      messageId: e.payload.messageId
    }
  }), e.type === "get-text" && t({
    type: "send-text-back",
    payload: {
      content: n.getText(),
      messageId: e.payload.messageId
    }
  }), e.type === "set-selection" ? (n.commands.setTextSelection({
    from: e.payload.from,
    to: e.payload.to
  }), !0) : e.type === "focus" ? (n.commands.focus(e.payload), !0) : e.type === "blur" ? (n.commands.blur(), !0) : e.type === "update-scroll-threshold-and-margin" ? (n.setOptions({
    editorProps: {
      scrollThreshold: {
        top: 0,
        bottom: e.payload,
        right: 0,
        left: 0
      },
      scrollMargin: { top: 0, bottom: e.payload, right: 0, left: 0 }
    }
  }), !0) : e.type === "set-editable" ? (n.setEditable(e.payload), !0) : !1),
  onEditorMessage: ({ type: n, payload: e }, t) => n === "send-html-back" || n === "send-text-back" || n === "send-json-back" ? (mn.onMessage(e.messageId, e.content), !0) : (n === "editor-ready" && t.autofocus && t.focus("end"), n === "stateUpdate" && t._updateEditorState(e), n === "content-update" && t._onContentUpdate(), !1),
  extendEditorInstance: (n, e, t, r, i) => ({
    updateScrollThresholdAndMargin: (s) => n({
      type: "update-scroll-threshold-and-margin",
      payload: s
    }),
    setSelection: (s, o) => {
      n({
        type: "set-selection",
        payload: {
          from: s,
          to: o
        }
      });
    },
    setContent: (s) => {
      n({
        type: "set-content",
        payload: {
          content: s
        }
      });
    },
    getHTML: async () => await mn.sendAsyncMessage(
      {
        type: "get-html"
        /* GetHTML */
      },
      n
    ),
    getText: async () => await mn.sendAsyncMessage(
      {
        type: "get-text"
        /* GetText */
      },
      n
    ),
    getJSON: async () => await mn.sendAsyncMessage(
      {
        type: "get-json"
        /* GetJSON */
      },
      n
    ),
    focus: (s) => {
      var o;
      i === "android" ? setTimeout(() => {
        var l;
        (l = e == null ? void 0 : e.current) == null || l.requestFocus();
      }, 100) : (o = e == null ? void 0 : e.current) == null || o.requestFocus(), t && t.current && r && r({
        ...t.current,
        isFocused: !0
      }), n({
        type: "focus",
        payload: s
      });
    },
    blur: () => {
      n({
        type: "blur",
        payload: void 0
      });
    },
    injectJS: (s) => {
      var o;
      (o = e == null ? void 0 : e.current) == null || o.injectJavaScript(s);
    },
    setEditable: (s) => {
      n({
        type: "set-editable",
        payload: s
      });
    }
  }),
  extendEditorState: (n) => ({
    isFocused: Px.isFocused,
    isReady: !0,
    selection: {
      from: n.state.selection.from,
      to: n.state.selection.to
    },
    editable: n.isEditable,
    empty: n.isEmpty
  })
}), jx = B.create({
  name: "eventHandler",
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("blueBackground"),
        state: {
          init() {
            return ie.empty;
          },
          apply(n, e, t, r) {
            if (n.selection.empty)
              return ie.empty;
            {
              const i = [], { from: s, to: o } = n.selection;
              return i.push(
                Qe.inline(s, o, {
                  class: "highlight-background"
                })
              ), ie.create(
                r.doc,
                i
              );
            }
          }
        },
        props: {
          decorations(n) {
            return this.getState(n);
          }
        }
      })
    ];
  }
});
class qx {
  constructor() {
    this.connected = !1, this.resizeObserver = null, this.currentHeight = null;
  }
  connect(e, t) {
    this.connected = !0, this.currentHeight = e.getBoundingClientRect().height, t(this.currentHeight), this.resizeObserver = new ResizeObserver((r) => {
      for (let i of r) {
        const s = i.target.getBoundingClientRect().height;
        this.currentHeight !== s && (this.currentHeight = s, t(s));
      }
    }), this.resizeObserver.observe(e);
  }
  disconnect() {
    var e;
    (e = this.resizeObserver) == null || e.disconnect();
  }
  get height() {
    return this.currentHeight;
  }
}
const Kx = { height: 0, connect: () => {
}, connected: !0 }, gu = Zd() ? Kx : new qx(), Kn = (n) => {
  var e;
  (e = window.ReactNativeWebView) == null || e.postMessage(JSON.stringify(n));
}, wE = (n) => {
  const { tiptapOptions: e = {}, bridges: t = [] } = n || {}, r = sm(
    () => JSON.parse(window.bridgeExtensionConfigMap || "{}"),
    []
  );
  function i(u) {
    return u != null;
  }
  const s = t.map((u) => {
    const h = r[u.name];
    if (!h)
      return null;
    const { optionsConfig: f, extendConfig: d } = h;
    return u.configureTiptapExtensionsOnRunTime(f, d);
  }).filter(i).flat(), o = {
    ...e,
    extensions: [
      ...window.disableColorHighlight ? [] : [jx],
      ...s,
      ...e.extensions || []
    ]
  }, l = lg((u) => {
    let h = {};
    const f = t.reduce((d, p) => p.extendEditorState ? Object.assign(d, p.extendEditorState(u)) : d, h);
    Kn({
      type: ur.StateUpdate,
      payload: f
    });
  }, 10), a = window.initialContent || "", c = Nx({
    content: a,
    onCreate: ({ editor: u }) => Kn({
      type: ur.EditorReady,
      payload: void 0
    }),
    onUpdate: ({ editor: u }) => {
      l(u), Kn({
        type: ur.ContentUpdate,
        payload: void 0
      });
    },
    onSelectionUpdate: ({ editor: u }) => l(u),
    onTransaction: ({ editor: u }) => l(u),
    editable: window.editable === "true" || window.editable === !0,
    ...o
  });
  return Ai(() => {
    if (!c)
      return;
    const u = (f) => {
      t.forEach((d) => {
        d.onBridgeMessage && d.onBridgeMessage(c, f, Kn);
      });
    }, h = (f) => {
      if (!(f instanceof MessageEvent))
        return;
      const d = JSON.parse(f.data);
      if (d.type === Qd.Action) {
        if (d.id) {
          if (window.lastMessageID === d.id)
            return;
          window.lastMessageID = d.id;
        }
        u(d.payload);
      }
    };
    return window.addEventListener("message", h), document.addEventListener("message", h), () => {
      window.removeEventListener("message", h), document.removeEventListener("message", h);
    };
  }, [c, t]), Ai(() => {
    if (c && !gu.connected && window.dynamicHeight) {
      const u = document.querySelector(".dynamic-height");
      gu.connect(
        document.querySelector(".ProseMirror"),
        (h) => {
          u && (u.scrollTop = 0), Kn({
            type: ur.DocumentHeight,
            payload: h
          });
        }
      );
    }
  }, [c]), c;
};
var _i = (n, e) => {
  if (n === "slot")
    return 0;
  if (n instanceof Function)
    return n(e);
  const { children: t, ...r } = e ?? {};
  if (n === "svg")
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  return [n, r, t];
}, Ux = /^\s*>\s$/, _x = Pe.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return /* @__PURE__ */ _i("blockquote", { ...U(this.options.HTMLAttributes, n), children: /* @__PURE__ */ _i("slot", {}) });
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Hn({
        find: Ux,
        type: this.type
      })
    ];
  }
}), Gx = _x;
const Yx = new j({
  tiptapExtension: Gx,
  onBridgeMessage: (n, e) => (e.type === "toggle-blockquote" && n.chain().focus().toggleBlockquote().run(), !1),
  extendEditorInstance: (n) => ({
    toggleBlockquote: () => n({
      type: "toggle-blockquote"
      /* ToggleBlockquote */
    })
  }),
  extendEditorState: (n) => ({
    canToggleBlockquote: n.can().toggleBlockquote(),
    isBlockquoteActive: n.isActive("blockquote")
  }),
  extendCSS: `
    blockquote {
        border-left: 3px solid #0d0d0d1a;
        padding-left: 1rem;
    }
  `
});
var Xx = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Qx = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Zx = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, eb = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, tb = ht.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return /* @__PURE__ */ _i("strong", { ...U(this.options.HTMLAttributes, n), children: /* @__PURE__ */ _i("slot", {}) });
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      on({
        find: Xx,
        type: this.type
      }),
      on({
        find: Zx,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ot({
        find: Qx,
        type: this.type
      }),
      Ot({
        find: eb,
        type: this.type
      })
    ];
  }
}), nb = tb;
const rb = new j({
  tiptapExtension: nb,
  onBridgeMessage: (n, e) => (e.type === "toggle-bold" && n.chain().focus().toggleBold().run(), !1),
  extendEditorInstance: (n) => ({
    toggleBold: () => n({
      type: "toggle-bold"
      /* ToggleBold */
    })
  }),
  extendEditorState: (n) => ({
    canToggleBold: n.can().toggleBold(),
    isBoldActive: n.isActive("bold")
  })
});
var ib = Object.defineProperty, sb = (n, e) => {
  for (var t in e)
    ib(n, t, { get: e[t], enumerable: !0 });
}, ob = "listItem", yu = "textStyle", Su = /^\s*([-+*])\s$/, ep = Pe.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ob, this.editor.getAttributes(yu)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Hn({
      find: Su,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Hn({
      find: Su,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(yu),
      editor: this.editor
    })), [n];
  }
}), tp = Pe.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", U(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), lb = {};
sb(lb, {
  findListItemPos: () => Ur,
  getNextListDepth: () => Ea,
  handleBackspace: () => Ol,
  handleDelete: () => Nl,
  hasListBefore: () => np,
  hasListItemAfter: () => ab,
  hasListItemBefore: () => rp,
  listItemHasSubList: () => ip,
  nextListIsDeeper: () => sp,
  nextListIsHigher: () => op
});
var Ur = (n, e) => {
  const { $from: t } = e.selection, r = G(n, e.schema);
  let i = null, s = t.depth, o = t.pos, l = null;
  for (; s > 0 && l === null; )
    i = t.node(s), i.type === r ? l = s : (s -= 1, o -= 1);
  return l === null ? null : { $pos: e.doc.resolve(o), depth: l };
}, Ea = (n, e) => {
  const t = Ur(n, e);
  if (!t)
    return !1;
  const [, r] = PS(e, n, t.$pos.pos + 4);
  return r;
}, np = (n, e, t) => {
  const { $anchor: r } = n.selection, i = Math.max(0, r.pos - 2), s = n.doc.resolve(i).node();
  return !(!s || !t.includes(s.type.name));
}, rp = (n, e) => {
  var t;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - 2);
  return !(i.index() === 0 || ((t = i.nodeBefore) == null ? void 0 : t.type.name) !== n);
}, ip = (n, e, t) => {
  if (!t)
    return !1;
  const r = G(n, e.schema);
  let i = !1;
  return t.descendants((s) => {
    s.type === r && (i = !0);
  }), i;
}, Ol = (n, e, t) => {
  if (n.commands.undoInputRule())
    return !0;
  if (n.state.selection.from !== n.state.selection.to)
    return !1;
  if (!vt(n.state, e) && np(n.state, e, t)) {
    const { $anchor: l } = n.state.selection, a = n.state.doc.resolve(l.before() - 1), c = [];
    a.node().descendants((f, d) => {
      f.type.name === e && c.push({ node: f, pos: d });
    });
    const u = c.at(-1);
    if (!u)
      return !1;
    const h = n.state.doc.resolve(a.start() + u.pos + 1);
    return n.chain().cut({ from: l.start() - 1, to: l.end() + 1 }, h.end()).joinForward().run();
  }
  if (!vt(n.state, e) || !HS(n.state))
    return !1;
  const r = Ur(e, n.state);
  if (!r)
    return !1;
  const s = n.state.doc.resolve(r.$pos.pos - 2).node(r.depth), o = ip(e, n.state, s);
  return rp(e, n.state) && !o ? n.commands.joinItemBackward() : n.chain().liftListItem(e).run();
}, sp = (n, e) => {
  const t = Ea(n, e), r = Ur(n, e);
  return !r || !t ? !1 : t > r.depth;
}, op = (n, e) => {
  const t = Ea(n, e), r = Ur(n, e);
  return !r || !t ? !1 : t < r.depth;
}, Nl = (n, e) => {
  if (!vt(n.state, e) || !FS(n.state, e))
    return !1;
  const { selection: t } = n.state, { $from: r, $to: i } = t;
  return !t.empty && r.sameParent(i) ? !1 : sp(e, n.state) ? n.chain().focus(n.state.selection.from + 4).lift(e).joinBackward().run() : op(e, n.state) ? n.chain().joinForward().joinBackward().run() : n.commands.joinItemForward();
}, ab = (n, e) => {
  var t;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - r.parentOffset - 2);
  return !(i.index() === i.parent.childCount - 1 || ((t = i.nodeAfter) == null ? void 0 : t.type.name) !== n);
}, cb = B.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: n }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: t }) => {
          n.state.schema.nodes[t] !== void 0 && Nl(n, t) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: n }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: t }) => {
          n.state.schema.nodes[t] !== void 0 && Nl(n, t) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: n }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: t, wrapperNames: r }) => {
          n.state.schema.nodes[t] !== void 0 && Ol(n, t, r) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: n }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: t, wrapperNames: r }) => {
          n.state.schema.nodes[t] !== void 0 && Ol(n, t, r) && (e = !0);
        }), e;
      }
    };
  }
}), ub = "listItem", ku = "textStyle", xu = /^(\d+)\.\s$/, lp = Pe.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (n) => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", U(this.options.HTMLAttributes, t), 0] : ["ol", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ub, this.editor.getAttributes(ku)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Hn({
      find: xu,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Hn({
      find: xu,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(ku) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [n];
  }
}), hb = /^\s*(\[([( |x])?\])\s$/, ap = Pe.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (n) => {
          const e = n.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: (n) => ({
          "data-checked": n.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "li",
      U(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: n.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  addKeyboardShortcuts() {
    const n = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...n,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : n;
  },
  addNodeView() {
    return ({ node: n, HTMLAttributes: e, getPos: t, editor: r }) => {
      const i = document.createElement("li"), s = document.createElement("label"), o = document.createElement("span"), l = document.createElement("input"), a = document.createElement("div"), c = (u) => {
        var h, f;
        l.ariaLabel = ((f = (h = this.options.a11y) == null ? void 0 : h.checkboxLabel) == null ? void 0 : f.call(h, u, l.checked)) || `Task item checkbox for ${u.textContent || "empty task item"}`;
      };
      return c(n), s.contentEditable = "false", l.type = "checkbox", l.addEventListener("mousedown", (u) => u.preventDefault()), l.addEventListener("change", (u) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const { checked: h } = u.target;
        r.isEditable && typeof t == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: f }) => {
          const d = t();
          if (typeof d != "number")
            return !1;
          const p = f.doc.nodeAt(d);
          return f.setNodeMarkup(d, void 0, {
            ...p == null ? void 0 : p.attrs,
            checked: h
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(n, h) || (l.checked = !l.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([u, h]) => {
        i.setAttribute(u, h);
      }), i.dataset.checked = n.attrs.checked, l.checked = n.attrs.checked, s.append(l, o), i.append(s, a), Object.entries(e).forEach(([u, h]) => {
        i.setAttribute(u, h);
      }), {
        dom: i,
        contentDOM: a,
        update: (u) => u.type !== this.type ? !1 : (i.dataset.checked = u.attrs.checked, l.checked = u.attrs.checked, c(u), !0)
      };
    };
  },
  addInputRules() {
    return [
      Hn({
        find: hb,
        type: this.type,
        getAttributes: (n) => ({
          checked: n[n.length - 1] === "x"
        })
      })
    ];
  }
}), cp = Pe.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", U(this.options.HTMLAttributes, n, { "data-type": this.name }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: n }) => n.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
B.create({
  name: "listKit",
  addExtensions() {
    const n = [];
    return this.options.bulletList !== !1 && n.push(ep.configure(this.options.bulletList)), this.options.listItem !== !1 && n.push(tp.configure(this.options.listItem)), this.options.listKeymap !== !1 && n.push(cb.configure(this.options.listKeymap)), this.options.orderedList !== !1 && n.push(lp.configure(this.options.orderedList)), this.options.taskItem !== !1 && n.push(ap.configure(this.options.taskItem)), this.options.taskList !== !1 && n.push(cp.configure(this.options.taskList)), n;
  }
});
var Ma = tp, fb = ep;
const db = new j({
  tiptapExtension: fb,
  tiptapExtensionDeps: [Ma],
  onBridgeMessage: (n, e) => (e.type === "toggle-bulletList" && n.chain().focus().toggleBulletList().run(), !1),
  extendEditorInstance: (n) => ({
    toggleBulletList: () => n({
      type: "toggle-bulletList"
      /* ToggleBulletList */
    })
  }),
  extendEditorState: (n) => ({
    canToggleBulletList: n.can().toggleBulletList(),
    isBulletListActive: n.isActive("bulletList")
  })
});
var pb = /(^|[^`])`([^`]+)`(?!`)$/, mb = /(^|[^`])`([^`]+)`(?!`)/g, gb = ht.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      on({
        find: pb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ot({
        find: mb,
        type: this.type
      })
    ];
  }
}), yb = gb;
const Sb = new j({
  tiptapExtension: yb,
  //   tiptapExtensionDeps: [CodeBlock],
  onBridgeMessage: (n, e) => (e.type === "toggle-code" && n.chain().focus().toggleCode().run(), !1),
  extendEditorInstance: (n) => ({
    toggleCode: () => n({
      type: "toggle-code"
      /* ToggleCode */
    })
  }),
  extendEditorState: (n) => ({
    canToggleCode: n.can().toggleCode(),
    isCodeActive: n.isActive("code")
  }),
  extendCSS: `
    code {
        background-color: #6161611a;
        border-radius: 0.25em;
        box-decoration-break: clone;
        color: #616161;
        font-size: 0.9rem;
        padding: 0.25em;
    }
  `
});
var kb = (n) => {
  if (!n.children.length)
    return;
  const e = n.querySelectorAll("span");
  e && e.forEach((t) => {
    var r, i;
    const s = t.getAttribute("style"), o = (i = (r = t.parentElement) == null ? void 0 : r.closest("span")) == null ? void 0 : i.getAttribute("style");
    t.setAttribute("style", `${o};${s}`);
  });
}, Ta = ht.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !0
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        consuming: !1,
        getAttrs: (n) => n.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && kb(n), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleTextStyle: (n) => ({ commands: e }) => e.toggleMark(this.name, n),
      removeEmptyTextStyle: () => ({ tr: n }) => {
        const { selection: e } = n;
        return n.doc.nodesBetween(e.from, e.to, (t, r) => {
          if (t.isTextblock)
            return !0;
          t.marks.filter((i) => i.type === this.type).some((i) => Object.values(i.attrs).some((s) => !!s)) || n.removeMark(r, r + t.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), xb = B.create({
  name: "backgroundColor",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (n) => {
              var e;
              const t = n.getAttribute("style");
              if (t) {
                const r = t.split(";").map((i) => i.trim()).filter(Boolean);
                for (let i = r.length - 1; i >= 0; i -= 1) {
                  const s = r[i].split(":");
                  if (s.length >= 2) {
                    const o = s[0].trim().toLowerCase(), l = s.slice(1).join(":").trim();
                    if (o === "background-color")
                      return l.replace(/['"]+/g, "");
                  }
                }
              }
              return (e = n.style.backgroundColor) == null ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (n) => n.backgroundColor ? {
              style: `background-color: ${n.backgroundColor}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBackgroundColor: (n) => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: n }).run(),
      unsetBackgroundColor: () => ({ chain: n }) => n().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
    };
  }
}), up = B.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (n) => {
              var e;
              const t = n.getAttribute("style");
              if (t) {
                const r = t.split(";").map((i) => i.trim()).filter(Boolean);
                for (let i = r.length - 1; i >= 0; i -= 1) {
                  const s = r[i].split(":");
                  if (s.length >= 2) {
                    const o = s[0].trim().toLowerCase(), l = s.slice(1).join(":").trim();
                    if (o === "color")
                      return l.replace(/['"]+/g, "");
                  }
                }
              }
              return (e = n.style.color) == null ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (n) => n.color ? {
              style: `color: ${n.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (n) => ({ chain: e }) => e().setMark("textStyle", { color: n }).run(),
      unsetColor: () => ({ chain: n }) => n().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), bb = B.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (n) => n.style.fontFamily,
            renderHTML: (n) => n.fontFamily ? {
              style: `font-family: ${n.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (n) => ({ chain: e }) => e().setMark("textStyle", { fontFamily: n }).run(),
      unsetFontFamily: () => ({ chain: n }) => n().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
}), Cb = B.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (n) => n.style.fontSize,
            renderHTML: (n) => n.fontSize ? {
              style: `font-size: ${n.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (n) => ({ chain: e }) => e().setMark("textStyle", { fontSize: n }).run(),
      unsetFontSize: () => ({ chain: n }) => n().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), wb = B.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (n) => n.style.lineHeight,
            renderHTML: (n) => n.lineHeight ? {
              style: `line-height: ${n.lineHeight}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (n) => ({ chain: e }) => e().setMark("textStyle", { lineHeight: n }).run(),
      unsetLineHeight: () => ({ chain: n }) => n().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run()
    };
  }
});
B.create({
  name: "textStyleKit",
  addExtensions() {
    const n = [];
    return this.options.backgroundColor !== !1 && n.push(xb.configure(this.options.backgroundColor)), this.options.color !== !1 && n.push(up.configure(this.options.color)), this.options.fontFamily !== !1 && n.push(bb.configure(this.options.fontFamily)), this.options.fontSize !== !1 && n.push(Cb.configure(this.options.fontSize)), this.options.lineHeight !== !1 && n.push(wb.configure(this.options.lineHeight)), this.options.textStyle !== !1 && n.push(Ta.configure(this.options.textStyle)), n;
  }
});
const Eb = new j({
  tiptapExtension: up,
  tiptapExtensionDeps: [Ta],
  onBridgeMessage: (n, { type: e, payload: t }) => {
    switch (e) {
      case "set-color":
        n.chain().focus().setColor(t).run();
        break;
      case "unset-color":
        n.chain().focus().unsetColor().run();
        break;
    }
    return !1;
  },
  extendEditorInstance: (n) => ({
    setColor: (e) => n({
      type: "set-color",
      payload: e
    }),
    unsetColor: () => n({
      type: "unset-color",
      payload: void 0
    })
  }),
  extendEditorState: (n) => ({
    activeColor: n.getAttributes("textStyle").color
  })
});
var Mb = Pe.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, U(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (n, e) => ({
        ...n,
        [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((n) => fx({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
}), Tb = Mb;
const vb = new j({
  tiptapExtension: Tb,
  onBridgeMessage: (n, e) => (e.type === "toggle-heading" && n.chain().focus().toggleHeading({ level: e.payload }).run(), !1),
  extendEditorInstance: (n) => ({
    toggleHeading: (e) => n({
      type: "toggle-heading",
      payload: e
    })
  }),
  extendEditorState: (n) => {
    var e;
    return {
      canToggleHeading: n.can().toggleHeading({ level: 1 }),
      headingLevel: (e = n.getAttributes("heading")) == null ? void 0 : e.level
    };
  }
});
var Ob = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, Nb = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, Ab = ht.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (n) => n.getAttribute("data-color") || n.style.backgroundColor,
        renderHTML: (n) => n.color ? {
          "data-color": n.color,
          style: `background-color: ${n.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["mark", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setHighlight: (n) => ({ commands: e }) => e.setMark(this.name, n),
      toggleHighlight: (n) => ({ commands: e }) => e.toggleMark(this.name, n),
      unsetHighlight: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      on({
        find: Ob,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ot({
        find: Nb,
        type: this.type
      })
    ];
  }
}), Ib = Ab;
const Rb = new j({
  tiptapExtension: Ib.configure({ multicolor: !0 }),
  tiptapExtensionDeps: [Ta],
  onBridgeMessage: (n, { type: e, payload: t }) => {
    switch (e) {
      case "set-highlight":
        n.chain().focus().setHighlight({ color: t }).run();
        break;
      case "toggle-highlight":
        n.chain().focus().toggleHighlight({ color: t }).run();
        break;
      case "unset-highlight":
        n.chain().focus().unsetHighlight().run();
        break;
    }
    return !1;
  },
  extendEditorInstance: (n) => ({
    setHighlight: (e) => n({
      type: "set-highlight",
      payload: e
    }),
    toggleHighlight: (e) => n({
      type: "toggle-highlight",
      payload: e
    }),
    unsetHighlight: () => n({
      type: "unset-highlight",
      payload: void 0
    })
  }),
  extendEditorState: (n) => ({
    activeHighlight: n.getAttributes("highlight").color
  })
});
function Db(n = {}) {
  return new W({
    view(e) {
      return new zb(e, n);
    }
  });
}
class zb {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let s = (o) => {
        this[i](o);
      };
      return e.dom.addEventListener(i, s), { name: i, handler: s };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let u = c.getBoundingClientRect(), h = l ? u.bottom : u.top;
          l && a && (h = (h + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: u.left, right: u.right, top: h - this.width / 2, bottom: h + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let s, o;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      s = -pageXOffset, o = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      s = l.left - i.scrollLeft, o = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - s + "px", this.element.style.top = r.top - o + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, s = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !s) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = Yl(this.editorView.state.doc, o, this.editorView.dragging.slice);
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
function hp(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = hp(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function fp(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = fp(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class L {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new L(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new L(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? L.empty : e == 0 && t == this.content.length ? this : new L(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new L(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new L([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new L(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return hp(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return fp(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return hi(0, e);
    if (e == this.size)
      return hi(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? hi(r + 1, o) : hi(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return L.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new L(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return L.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new L(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return L.empty;
    if (e instanceof L)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new L([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
L.empty = new L([], 0);
const zo = { index: 0, offset: 0 };
function hi(n, e) {
  return zo.index = n, zo.offset = e, zo;
}
function Al(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Al(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Al(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
class Me {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Al(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Me.none;
    if (e instanceof Me)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
}
Me.none = [];
class Y {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = pp(this.content, e + this.openStart, t);
    return r && new Y(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new Y(dp(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return Y.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new Y(L.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new Y(e, r, i);
  }
}
Y.empty = new Y(L.empty, 0, 0);
function dp(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(dp(s.content, e - i - 1, t - i - 1)));
}
function pp(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = pp(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
class Gi {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [], t.forEach((r) => {
      r.tag ? this.tags.push(r) : r.style && this.styles.push(r);
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let i = e.nodes[r.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new Cu(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new Cu(this, t, !0);
    return r.addAll(e, t.from, t.to), Y.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if ($b(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = wu(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = wu(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Gi(e, Gi.schemaRules(e)));
  }
}
const mp = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Lb = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, gp = { ol: !0, ul: !0 }, Yi = 1, Xi = 2, xr = 4;
function bu(n, e, t) {
  return e != null ? (e ? Yi : 0) | (e === "full" ? Xi : 0) : n && n.whitespace == "pre" ? Yi | Xi : t & ~xr;
}
class fi {
  constructor(e, t, r, i, s, o, l) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = Me.none, this.stashMarks = [], this.match = o || (l & xr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(L.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Yi)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = L.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(L.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : Fb(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !mp.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Cu {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, s, o = bu(null, t.preserveWhitespace, 0) | (r ? xr : 0);
    i ? s = new fi(i.type, i.attrs, Me.none, Me.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new fi(null, null, Me.none, Me.none, !0, null, o) : s = new fi(e.schema.topNodeType, null, Me.none, Me.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e);
  }
  withStyleRules(e, t) {
    let r = e.getAttribute("style");
    if (!r)
      return t();
    let i = this.readStyles(Bb(r));
    if (!i)
      return;
    let [s, o] = i, l = this.top;
    for (let a = 0; a < o.length; a++)
      this.removePendingMark(o[a], l);
    for (let a = 0; a < s.length; a++)
      this.addPendingMark(s[a]);
    t();
    for (let a = 0; a < s.length; a++)
      this.removePendingMark(s[a], l);
    for (let a = 0; a < o.length; a++)
      this.addPendingMark(o[a]);
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & Xi || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & Yi)
        r.options & Xi ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], s = e.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    gp.hasOwnProperty(r) && this.parser.normalizeLists && Pb(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (s ? s.ignore : Lb.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let o, l = this.top, a = this.needsBlock;
      if (mp.hasOwnProperty(r))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      s && s.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), o && this.sync(l), this.needsBlock = a;
    } else
      this.withStyleRules(e, () => {
        this.addElementByRule(e, s, s.consuming === !1 ? i : void 0);
      });
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let t = Me.none, r = Me.none;
    for (let i = 0; i < e.length; i += 2)
      for (let s = void 0; ; ) {
        let o = this.parser.matchStyle(e[i], e[i + 1], this, s);
        if (!o)
          break;
        if (o.ignore)
          return null;
        if (o.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((l) => {
          o.clearMark(l) && (r = l.addToSet(r));
        }) : t = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(t), o.consuming === !1)
          s = o;
        else
          break;
      }
    return [t, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r) {
    let i, s, o;
    t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(o));
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, o && this.removePendingMark(o, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r) {
    let i = t || 0;
    for (let s = t ? e.childNodes[t] : e.firstChild, o = r == null ? null : e.childNodes[r]; s != o; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], o = s.findWrapping(e);
      if (o && (!t || t.length > o.length) && (t = o, r = s, !o.length) || s.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(r);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let r = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return t.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, t = null, r = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(e), s.match = s.match && s.match.matchType(e);
    let o = bu(e, i, s.options);
    s.options & xr && s.content.length == 0 && (o |= xr), this.nodes.push(new fi(e, t, s.activeMarks, s.pendingMarks, r, null, o)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!u || u.name != c && u.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let t = Hb(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let o = i.popFromStashMark(e);
        o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function Pb(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && gp.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function $b(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Bb(n) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
  for (; t = e.exec(n); )
    r.push(t[1], t[2].trim());
  return r;
}
function wu(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function Fb(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
function Hb(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class Jt {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = Lo(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Jt.renderSpec(Lo(t), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Jt.renderSpec(Lo(r), i(e, t));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, t, r = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], s = i.indexOf(" ");
    s > 0 && (r = i.slice(0, s), i = i.slice(s + 1));
    let o, l = r ? e.createElementNS(r, i) : e.createElement(i), a = t[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let u in a)
        if (a[u] != null) {
          let h = u.indexOf(" ");
          h > 0 ? l.setAttributeNS(u.slice(0, h), u.slice(h + 1), a[u]) : l.setAttribute(u, a[u]);
        }
    }
    for (let u = c; u < t.length; u++) {
      let h = t[u];
      if (h === 0) {
        if (u < t.length - 1 || u > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: f, contentDOM: d } = Jt.renderSpec(e, h, r);
        if (l.appendChild(f), d) {
          if (o)
            throw new RangeError("Multiple content holes");
          o = d;
        }
      }
    }
    return { dom: l, contentDOM: o };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Jt(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Eu(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Eu(e.marks);
  }
}
function Eu(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function Lo(n) {
  return n.document || window.document;
}
const an = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, yp = function(n, e, t, r) {
  return t && (Mu(n, e, t, r, -1) || Mu(n, e, t, r, 1));
}, Vb = /^(img|br|input|textarea|hr)$/i;
function Mu(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Qi(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || va(n) || Vb.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = an(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? Qi(n) : 0;
    } else
      return !1;
  }
}
function Qi(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Jb(n, e, t) {
  for (let r = e == 0, i = e == Qi(n); r || i; ) {
    if (n == t)
      return !0;
    let s = an(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == Qi(n);
  }
}
function va(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Sp = function(n) {
  return n.focusNode && yp(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function kp(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
const Xe = typeof navigator < "u" ? navigator : null, Tu = typeof document < "u" ? document : null, At = Xe && Xe.userAgent || "", Il = /Edge\/(\d+)/.exec(At), xp = /MSIE \d/.exec(At), Rl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(At), _r = !!(xp || Rl || Il), bp = xp ? document.documentMode : Rl ? +Rl[1] : Il ? +Il[1] : 0, Us = !_r && /gecko\/(\d+)/i.test(At);
Us && +(/Firefox\/(\d+)/.exec(At) || [0, 0])[1];
const Dl = !_r && /Chrome\/(\d+)/.exec(At), cn = !!Dl, Wb = Dl ? +Dl[1] : 0, un = !_r && !!Xe && /Apple Computer/.test(Xe.vendor), Oa = un && (/Mobile\/\w+/.test(At) || !!Xe && Xe.maxTouchPoints > 2), Re = Oa || (Xe ? /Mac/.test(Xe.platform) : !1), jb = Xe ? /Win/.test(Xe.platform) : !1, Gr = /Android \d/.test(At), Na = !!Tu && "webkitFontSmoothing" in Tu.documentElement.style, qb = Na ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Kb(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (Sp(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && x.isSelectable(u) && i.parent && !(u.isInline && Jb(t.focusNode, t.focusOffset, i.dom))) {
      let h = i.posBefore;
      c = new x(o == h ? l : r.resolve(h));
    }
  } else {
    let u = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (u < 0)
      return null;
    a = r.resolve(u);
  }
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = wp(n, a, l, u);
  }
  return c;
}
function Cp(n) {
  return n.editable ? n.hasFocus() : Yb(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Aa(n, e = !1) {
  let t = n.state.selection;
  if (Gb(n, t), !!Cp(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && cn) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && yp(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      _b(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      vu && !(t instanceof v) && (t.$from.parent.inlineContent || (s = Ou(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Ou(n, t.to))), n.docView.setSelection(r, i, n.root, e), vu && (s && Nu(s), o && Nu(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Ub(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const vu = un || cn && Wb < 63;
function Ou(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (un && i && i.contentEditable == "false")
    return Po(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return Po(i);
    if (s)
      return Po(s);
  }
}
function Po(n) {
  return n.contentEditable = "true", un && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Nu(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Ub(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Cp(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function _b(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, an(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && _r && bp <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Gb(n, e) {
  if (e instanceof x) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Au(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Au(n);
}
function Au(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function wp(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || v.between(e, t, r);
}
function Yb(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function zl(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && A.findFrom(s, e);
}
function gt(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Iu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof v)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return gt(n, new v(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = zl(n.state, e);
        return i && i instanceof x ? gt(n, i) : !1;
      } else if (!(Re && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? x.isSelectable(s) ? gt(n, new x(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : Na ? gt(n, new v(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof x && r.node.isInline)
      return gt(n, new v(e > 0 ? r.$to : r.$from));
    {
      let i = zl(n.state, e);
      return i ? gt(n, i) : !1;
    }
  }
}
function Zi(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function br(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function gn(n, e) {
  return e < 0 ? Xb(n) : Qb(n);
}
function Xb(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (Us && t.nodeType == 1 && r < Zi(t) && br(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (br(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Ep(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && br(l, -1); )
          i = t.parentNode, s = an(l), l = l.previousSibling;
        if (l)
          t = l, r = Zi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Ll(n, t, r) : i && Ll(n, i, s);
}
function Qb(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Zi(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (br(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (Ep(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && br(l, 1); )
          s = l.parentNode, o = an(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Zi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && Ll(n, s, o);
}
function Ep(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Zb(n, e) {
  for (; n && e == n.childNodes.length && !va(n); )
    e = an(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function eC(n, e) {
  for (; n && !e && !va(n); )
    e = an(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Ll(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = Zb(e, t)) ? (e = o, t = 0) : (s = eC(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (Sp(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Aa(n);
  }, 50);
}
function Ru(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(cn || jb) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Du(n, e, t) {
  let r = n.state.selection;
  if (r instanceof v && !r.empty || t.indexOf("s") > -1 || Re && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = zl(n.state, e);
    if (o && o instanceof x)
      return gt(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof ve ? A.near(o, e) : A.findFrom(o, e);
    return l ? gt(n, l) : !1;
  }
  return !1;
}
function zu(n, e) {
  if (!(n.state.selection instanceof v))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Lu(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function tC(n) {
  if (!un || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Lu(n, r, "true"), setTimeout(() => Lu(n, r, "false"), 20);
  }
  return !1;
}
function nC(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function rC(n, e) {
  let t = e.keyCode, r = nC(e);
  if (t == 8 || Re && t == 72 && r == "c")
    return zu(n, -1) || gn(n, -1);
  if (t == 46 && !e.shiftKey || Re && t == 68 && r == "c")
    return zu(n, 1) || gn(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Re && t == 66 && r == "c") {
    let i = t == 37 ? Ru(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Iu(n, i, r) || gn(n, i);
  } else if (t == 39 || Re && t == 70 && r == "c") {
    let i = t == 39 ? Ru(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Iu(n, i, r) || gn(n, i);
  } else {
    if (t == 38 || Re && t == 80 && r == "c")
      return Du(n, -1, r) || gn(n, -1);
    if (t == 40 || Re && t == 78 && r == "c")
      return tC(n) || Du(n, 1, r) || gn(n, 1);
    if (r == (Re ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Mp(n, e) {
  n.someProp("transformCopied", (d) => {
    e = d(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let d = r.firstChild;
    t.push(d.type.name, d.attrs != d.type.defaultAttrs ? d.attrs : null), r = d.content;
  }
  let o = n.someProp("clipboardSerializer") || Jt.fromSchema(n.state.schema), l = Ip(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, h = 0;
  for (; c && c.nodeType == 1 && (u = Ap[c.nodeName.toLowerCase()]); ) {
    for (let d = u.length - 1; d >= 0; d--) {
      let p = l.createElement(u[d]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), h++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${h ? ` -${h}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (d) => d(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f };
}
function Tp(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, s || r, n);
    }), s)
      return e ? new Y(L.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : Y.empty;
    let h = n.someProp("clipboardTextParser", (f) => f(e, i, r, n));
    if (h)
      l = h;
    else {
      let f = i.marks(), { schema: d } = n.state, p = Jt.fromSchema(d);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(d.text(m, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (h) => {
      t = h(t, n);
    }), o = oC(t), Na && lC(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let h = +u[3]; h > 0; h--) {
      let f = o.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      o = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || Gi.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !iC.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = aC(Pu(l, +u[1], +u[2]), u[4]);
  else if (l = Y.maxOpen(sC(l.content, i), !0), l.openStart || l.openEnd) {
    let h = 0, f = 0;
    for (let d = l.content.firstChild; h < l.openStart && !d.type.spec.isolating; h++, d = d.firstChild)
      ;
    for (let d = l.content.lastChild; f < l.openEnd && !d.type.spec.isolating; f++, d = d.lastChild)
      ;
    l = Pu(l, h, f);
  }
  return n.someProp("transformPasted", (h) => {
    l = h(l, n);
  }), l;
}
const iC = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function sC(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && Op(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = Np(o[o.length - 1], s.length));
        let u = vp(l, a);
        o.push(u), i = i.matchType(u.type), s = a;
      }
    }), o)
      return L.from(o);
  }
  return n;
}
function vp(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, L.from(n));
  return n;
}
function Op(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = Op(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(L.from(vp(t, n, i + 1))));
  }
}
function Np(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Np(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(L.empty, !0);
  return n.copy(t.append(r));
}
function Pl(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = Pl(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(L.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function Pu(n, e, t) {
  return e < n.openStart && (n = new Y(Pl(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new Y(Pl(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Ap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let $u = null;
function Ip() {
  return $u || ($u = document.implementation.createHTMLDocument("title"));
}
function oC(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Ip().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Ap[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = n, i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function lC(n) {
  let e = n.querySelectorAll(cn ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function aC(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = L.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new Y(i, s, o);
}
const We = {}, Oe = {};
function bt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
Oe.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Dp(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Gr && cn && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Oa && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, kp(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || rC(n, t) ? t.preventDefault() : bt(n, "key");
};
Oe.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Oe.keypress = (n, e) => {
  let t = e;
  if (Dp(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Re && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof v) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function _s(n) {
  return { left: n.clientX, top: n.clientY };
}
function cC(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Ia(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function Dn(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function uC(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && x.isSelectable(r) ? (Dn(n, new x(t), "pointer"), !0) : !1;
}
function hC(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof x && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (x.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (Dn(n, x.create(n.state.doc, i), "pointer"), !0) : !1;
}
function fC(n, e, t, r, i) {
  return Ia(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? hC(n, t) : uC(n, t));
}
function dC(n, e, t, r) {
  return Ia(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function pC(n, e, t, r) {
  return Ia(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || mC(n, t, r);
}
function mC(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Dn(n, v.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      Dn(n, v.create(r, l + 1, l + 1 + o.content.size), "pointer");
    else if (x.isSelectable(o))
      Dn(n, x.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function Ra(n) {
  return es(n);
}
const Rp = Re ? "metaKey" : "ctrlKey";
We.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Ra(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && cC(t, n.input.lastClick) && !t[Rp] && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s };
  let o = n.posAtCoords(_s(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new gC(n, o, t, !!r)) : (s == "doubleClick" ? dC : pC)(n, o.pos, o.inside, t) ? t.preventDefault() : bt(n, "pointer"));
};
class gC {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Rp], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      s = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof x && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Us && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), bt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Aa(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(_s(e))), this.updateAllowDefault(e), this.allowDefault || !t ? bt(this.view, "pointer") : fC(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    un && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    cn && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Dn(this.view, A.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : bt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), bt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
We.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Ra(n), bt(n, "pointer");
};
We.touchmove = (n) => {
  n.input.lastTouch = Date.now(), bt(n, "pointer");
};
We.contextmenu = (n) => Ra(n);
function Dp(n, e) {
  return n.composing ? !0 : un && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const yC = Gr ? 5e3 : -1;
Oe.compositionstart = Oe.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), es(n, !0), n.markCursor = null;
    else if (es(n), Us && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          n.domSelection().collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  zp(n, yC);
};
Oe.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, zp(n, 20));
};
function zp(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => es(n), e));
}
function SC(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = kC()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function kC() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function es(n, e = !1) {
  if (!(Gr && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), SC(n), e || n.docView && n.docView.dirty) {
      let t = Kb(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function xC(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Br = _r && bp < 15 || Oa && qb < 604;
We.copy = Oe.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = Br ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = Mp(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : xC(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function bC(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function CC(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? $l(n, r.value, null, i, e) : $l(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function $l(n, e, t, r, i) {
  let s = Tp(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, s || Y.empty)))
    return !0;
  if (!s)
    return !1;
  let o = bC(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Lp(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
Oe.paste = (n, e) => {
  let t = e;
  if (n.composing && !Gr)
    return;
  let r = Br ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && $l(n, Lp(r), r.getData("text/html"), i, t) ? t.preventDefault() : CC(n, t);
};
class wC {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const Pp = Re ? "altKey" : "ctrlKey";
We.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(_s(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof x ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = x.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let u = n.docView.nearestDesc(t.target, !0);
      u && u.node.type.spec.draggable && u != n.docView && (o = x.create(n.state.doc, u.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c } = Mp(n, l);
  t.dataTransfer.clearData(), t.dataTransfer.setData(Br ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Br || t.dataTransfer.setData("text/plain", c), n.dragging = new wC(l, !t[Pp], o);
};
We.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Oe.dragover = Oe.dragenter = (n, e) => e.preventDefault();
Oe.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(_s(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n);
  }) : o = Tp(n, Lp(t.dataTransfer), Br ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && !t[Pp]);
  if (n.someProp("handleDrop", (p) => p(n, t, o || Y.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? Yl(n.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), h = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, f = c.doc;
  if (h ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(f))
    return;
  let d = c.doc.resolve(u);
  if (h && x.isSelectable(o.content.firstChild) && d.nodeAfter && d.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new x(d));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, S) => p = S), c.setSelection(wp(n, d, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
We.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Aa(n);
  }, 20));
};
We.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
We.beforeinput = (n, e) => {
  if (cn && Gr && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, kp(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Oe)
  We[n] = Oe[n];
function Fr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class ts {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Yt, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new Ue(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof ts && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Fr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Mt {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Yt;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new Ue(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Mt && Fr(this.attrs, e.attrs) && Fr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Mt;
  }
  destroy() {
  }
}
class Da {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Yt;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new Ue(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Da && Fr(this.attrs, e.attrs) && Fr(this.spec, e.spec);
  }
  destroy() {
  }
}
class Ue {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Ue(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new Ue(e, e, new ts(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new Ue(e, t, new Mt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new Ue(e, t, new Da(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Mt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof ts;
  }
}
const Nn = [], Yt = {};
class Q {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : Nn, this.children = t.length ? t : Nn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? ns(t, e, 0, Yt) : ge;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == ge || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Yt);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? EC(this.children, o || [], e, t, r, i, s) : o ? new Q(o.sort(Xt), Nn) : ge;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == ge ? Q.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = Bp(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, ns(u, l, c + 1, Yt)), s += 3;
      }
    });
    let o = $p(s ? Fp(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new Q(o.length ? this.local.concat(o).sort(Xt) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == ge ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let u = 0, h; u < e.length; u++)
        (h = e[u]) && h.from > l && h.to < a && (e[u] = null, (o || (o = [])).push(h));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != ge ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new Q(i, r) : ge;
  }
  /**
  @internal
  */
  forChild(e, t) {
    if (this == ge)
      return this;
    if (t.isLeaf)
      return Q.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof Mt) {
        let c = Math.max(s, a.from) - s, u = Math.min(o, a.to) - s;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new Q(i.sort(Xt), Nn);
      return r ? new Lt([l, r]) : l;
    }
    return r || ge;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Q) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return za(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ge)
      return Nn;
    if (e.inlineContent || !this.local.some(Mt.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Mt || t.push(this.local[r]);
    return t;
  }
}
Q.empty = new Q([], []);
Q.removeOverlap = za;
const ge = Q.empty;
class Lt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, Yt));
    return Lt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return Q.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != ge && (s instanceof Lt ? r = r.concat(s.members) : r.push(s));
    }
    return Lt.from(r);
  }
  eq(e) {
    if (!(e instanceof Lt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? za(r ? t : t.sort(Xt)) : Nn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return ge;
      case 1:
        return e[0];
      default:
        return new Lt(e.every((t) => t instanceof Q) ? e : e.reduce((t, r) => t.concat(r instanceof Q ? r : r.members), []));
    }
  }
}
function EC(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, u = s; c < t.maps.length; c++) {
    let h = 0;
    t.maps[c].forEach((f, d, p, m) => {
      let g = m - p - (d - f);
      for (let y = 0; y < l.length; y += 3) {
        let S = l[y + 1];
        if (S < 0 || f > S + u - h)
          continue;
        let C = l[y] + u - h;
        d >= C ? l[y + 1] = f <= C ? -2 : -1 : f >= u && g && (l[y] += g, l[y + 1] += g);
      }
      h += g;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + s), h = u - i;
      if (h < 0 || h >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + s, -1), d = f - i, { index: p, offset: m } = r.content.findIndex(h), g = r.maybeChild(p);
      if (g && m == h && m + g.nodeSize == d) {
        let y = l[c + 2].mapInner(t, g, u + 1, n[c] + s + 1, o);
        y != ge ? (l[c] = h, l[c + 1] = d, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = MC(l, n, e, t, i, s, o), u = ns(c, r, 0, o);
    e = u.local;
    for (let h = 0; h < l.length; h += 3)
      l[h + 1] < 0 && (l.splice(h, 3), h -= 3);
    for (let h = 0, f = 0; h < u.children.length; h += 3) {
      let d = u.children[h];
      for (; f < l.length && l[f] < d; )
        f += 3;
      l.splice(f, 0, u.children[h], u.children[h + 1], u.children[h + 2]);
    }
  }
  return new Q(e.sort(Xt), l);
}
function $p(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Ue(i.from + e, i.to + e, i.type));
  }
  return t;
}
function MC(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let h = a.local[u].map(r, i, c);
      h ? t.push(h) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function Bp(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function Fp(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function ns(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = Bp(n, l, a + t);
    if (c) {
      s = !0;
      let u = ns(c, l, t + a + 1, r);
      u != ge && i.push(a, a + l.nodeSize, u);
    }
  });
  let o = $p(s ? Fp(n) : n, -t).sort(Xt);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new Q(o, i) : ge;
}
function Xt(n, e) {
  return n.from - e.from || n.to - e.to;
}
function za(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), Bu(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), Bu(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Bu(n, e, t) {
  for (; e < n.length && Xt(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
class J extends A {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return J.valid(r) ? new J(r) : A.near(r);
  }
  content() {
    return Y.empty;
  }
  eq(e) {
    return e instanceof J && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new J(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new La(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !TC(e) || !vC(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e:
      for (; ; ) {
        if (!r && J.valid(e))
          return e;
        let i = e.pos, s = null;
        for (let o = e.depth; ; o--) {
          let l = e.node(o);
          if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
            s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
            break;
          } else if (o == 0)
            return null;
          i += t;
          let a = e.doc.resolve(i);
          if (J.valid(a))
            return a;
        }
        for (; ; ) {
          let o = t > 0 ? s.firstChild : s.lastChild;
          if (!o) {
            if (s.isAtom && !s.isText && !x.isSelectable(s)) {
              e = e.doc.resolve(i + s.nodeSize * t), r = !1;
              continue e;
            }
            break;
          }
          s = o, i += t;
          let l = e.doc.resolve(i);
          if (J.valid(l))
            return l;
        }
        return null;
      }
  }
}
J.prototype.visible = !1;
J.findFrom = J.findGapCursorFrom;
A.jsonID("gapcursor", J);
class La {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new La(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return J.valid(t) ? new J(t) : A.near(t);
  }
}
function TC(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function vC(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function OC() {
  return new W({
    props: {
      decorations: RC,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && J.valid(t) ? new J(t) : null;
      },
      handleClick: AC,
      handleKeyDown: NC,
      handleDOMEvents: { beforeinput: IC }
    }
  });
}
const NC = Df({
  ArrowLeft: di("horiz", -1),
  ArrowRight: di("horiz", 1),
  ArrowUp: di("vert", -1),
  ArrowDown: di("vert", 1)
});
function di(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, s) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof v) {
      if (!s.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = J.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new J(c))), !0) : !1;
  };
}
function AC(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!J.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && x.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new J(r))), !0);
}
function IC(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof J))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = L.empty;
  for (let o = r.length - 1; o >= 0; o--)
    i = L.from(r[o].createAndFill(null, i));
  let s = n.state.tr.replace(t.pos, t.pos, new Y(i, 0, 0));
  return s.setSelection(v.near(s.doc.resolve(t.pos + 1))), n.dispatch(s), !1;
}
function RC(n) {
  if (!(n.selection instanceof J))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Q.create(n.doc, [Ue.widget(n.selection.head, e, { key: "gapcursor" })]);
}
var rs = 200, Z = function() {
};
Z.prototype.append = function(e) {
  return e.length ? (e = Z.from(e), !this.length && e || e.length < rs && this.leafAppend(e) || this.length < rs && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Z.prototype.prepend = function(e) {
  return e.length ? Z.from(e).append(this) : this;
};
Z.prototype.appendInner = function(e) {
  return new DC(this, e);
};
Z.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Z.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
Z.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Z.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
Z.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, r), i;
};
Z.from = function(e) {
  return e instanceof Z ? e : e && e.length ? new Hp(e) : Z.empty;
};
var Hp = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var a = s; a < o; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= rs)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= rs)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(Z);
Z.empty = new Hp([]);
var DC = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(Z);
const zC = 500;
class Be {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, a, c = [], u = [];
    return this.items.forEach((h, f) => {
      if (!h.step) {
        i || (i = this.remapping(r, f + 1), s = i.maps.length), s--, u.push(h);
        return;
      }
      if (i) {
        u.push(new je(h.map));
        let d = h.step.map(i.slice(s)), p;
        d && o.maybeStep(d).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new je(p, void 0, void 0, c.length + u.length))), s--, p && i.appendMap(p, s);
      } else
        o.maybeStep(h.step);
      if (h.selection)
        return l = i ? h.selection.map(i.slice(s)) : h.selection, a = new Be(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let s = [], o = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let h = e.steps[u].invert(e.docs[u]), f = new je(e.mapping.maps[u], h, t), d;
      (d = a && a.merge(f)) && (f = d, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(f), t && (o++, t = void 0), i || (a = f);
    }
    let c = o - r.depth;
    return c > PC && (l = LC(l, c), o -= c), new Be(l.append(s), o);
  }
  remapping(e, t) {
    let r = new Ch();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Be(this.items.append(e.map((t) => new je(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((f) => {
      let d = s.getMirror(--a);
      if (d == null)
        return;
      o = Math.min(o, d);
      let p = s.maps[d];
      if (f.step) {
        let m = e.steps[d].invert(e.docs[d]), g = f.selection && f.selection.map(s.slice(a + 1, d));
        g && l++, r.push(new je(p, m, g));
      } else
        r.push(new je(p));
    }, i);
    let c = [];
    for (let f = t; f < o; f++)
      c.push(new je(s.maps[f]));
    let u = this.items.slice(0, i).append(c).append(r), h = new Be(u, l);
    return h.emptyItemCount() > zC && (h = h.compress(this.items.length - r.length)), h;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = o.selection && o.selection.map(t.slice(r));
          u && s++;
          let h = new je(c.invert(), a, u), f, d = i.length - 1;
          (f = i.length && i[d].merge(h)) ? i[d] = f : i.push(h);
        }
      } else
        o.map && r--;
    }, this.items.length, 0), new Be(Z.from(i.reverse()), s);
  }
}
Be.empty = new Be(Z.empty, 0);
function LC(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class je {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new je(t.getMap().invert(), t, this.selection);
    }
  }
}
class yt {
  constructor(e, t, r, i, s) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = s;
  }
}
const PC = 20;
function $C(n, e, t, r) {
  let i = t.getMeta(Qt), s;
  if (i)
    return i.historyState;
  t.getMeta(HC) && (n = new yt(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(Qt))
    return o.getMeta(Qt).redo ? new yt(n.done.addTransform(t, void 0, r, Oi(e)), n.undone, Fu(t.mapping.maps), n.prevTime, n.prevComposition) : new yt(n.done, n.undone.addTransform(t, void 0, r, Oi(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !BC(t, n.prevRanges)), c = o ? $o(n.prevRanges, t.mapping) : Fu(t.mapping.maps);
    return new yt(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Oi(e)), Be.empty, c, t.time, l ?? n.prevComposition);
  } else
    return (s = t.getMeta("rebased")) ? new yt(n.done.rebased(t, s), n.undone.rebased(t, s), $o(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new yt(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), $o(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function BC(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function Fu(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, s, o) => e.push(s, o));
  return e;
}
function $o(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function FC(n, e, t) {
  let r = Oi(e), i = Qt.get(e).spec.config, s = (t ? n.undone : n.done).popEvent(e, r);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? n.done : n.undone).addTransform(s.transform, e.selection.getBookmark(), i, r), a = new yt(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta(Qt, { redo: t, historyState: a });
}
let Bo = !1, Hu = null;
function Oi(n) {
  let e = n.plugins;
  if (Hu != e) {
    Bo = !1, Hu = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Bo = !0;
        break;
      }
  }
  return Bo;
}
const Qt = new ee("history"), HC = new ee("closeHistory");
function VC(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new W({
    key: Qt,
    state: {
      init() {
        return new yt(Be.empty, Be.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return $C(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Jp : r == "historyRedo" ? Wp : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function Vp(n, e) {
  return (t, r) => {
    let i = Qt.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let s = FC(i, t, n);
      s && r(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const Jp = Vp(!1, !0), Wp = Vp(!0, !0);
B.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (n) => n.length,
      wordCounter: (n) => n.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (n) => {
      const e = (n == null ? void 0 : n.node) || this.editor.state.doc;
      if (((n == null ? void 0 : n.mode) || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (n) => {
      const e = (n == null ? void 0 : n.node) || this.editor.state.doc, t = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(t);
    };
  },
  addProseMirrorPlugins() {
    let n = !1;
    return [
      new W({
        key: new ee("characterCount"),
        appendTransaction: (e, t, r) => {
          if (n)
            return;
          const i = this.options.limit;
          if (i == null || i === 0) {
            n = !0;
            return;
          }
          const s = this.storage.characters({ node: r.doc });
          if (s > i) {
            const o = s - i, l = 0, a = o;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`
            );
            const c = r.tr.deleteRange(l, a);
            return n = !0, c;
          }
          n = !0;
        },
        filterTransaction: (e, t) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const i = this.storage.characters({ node: t.doc }), s = this.storage.characters({ node: e.doc });
          if (s <= r || i > r && s > r && s <= i)
            return !0;
          if (i > r && s > r && s > i || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = s - r, c = l - a, u = l;
          return e.deleteRange(c, u), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
});
var JC = B.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [Db(this.options)];
  }
});
B.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("focus"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const { isEditable: t, isFocused: r } = this.editor, { anchor: i } = e, s = [];
            if (!t || !r)
              return ie.create(n, []);
            let o = 0;
            this.options.mode === "deepest" && n.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(i >= c && i <= c + a.nodeSize - 1))
                return !1;
              o += 1;
            });
            let l = 0;
            return n.descendants((a, c) => {
              if (a.isText || !(i >= c && i <= c + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && o - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              s.push(
                Qe.node(c, c + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), ie.create(n, s);
          }
        }
      })
    ];
  }
});
B.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [OC()];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = $(T(n, "allowGapCursor", t))) != null ? e : null
    };
  }
});
var WC = B.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new W({
        key: new ee("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const s = this.editor.isEmpty;
            return n.descendants((o, l) => {
              const a = r >= l && r <= l + o.nodeSize, c = !o.isLeaf && js(o);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const u = [this.options.emptyNodeClass];
                s && u.push(this.options.emptyEditorClass);
                const h = Qe.node(l, l + o.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: o,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                i.push(h);
              }
              return this.options.includeChildren;
            }), ie.create(n, i);
          }
        }
      })
    ];
  }
});
B.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: n, options: e } = this;
    return [
      new W({
        key: new ee("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || n.isFocused || !n.isEditable || VS(t.selection) || n.view.dragging ? null : ie.create(t.doc, [
              Qe.inline(t.selection.from, t.selection.to, {
                class: e.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function Vu({ types: n, node: e }) {
  return e && Array.isArray(n) && n.includes(e.type) || (e == null ? void 0 : e.type) === n;
}
B.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    const n = new ee(this.name), e = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter((t) => (this.options.notAfter || []).concat(this.options.node).includes(t.name));
    return [
      new W({
        key: n,
        appendTransaction: (t, r, i) => {
          const { doc: s, tr: o, schema: l } = i, a = n.getState(i), c = s.content.size, u = l.nodes[this.options.node];
          if (a)
            return o.insert(c, u.create());
        },
        state: {
          init: (t, r) => {
            const i = r.tr.doc.lastChild;
            return !Vu({ node: i, types: e });
          },
          apply: (t, r) => {
            if (!t.docChanged)
              return r;
            const i = t.doc.lastChild;
            return !Vu({ node: i, types: e });
          }
        }
      })
    ];
  }
});
var jC = B.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Jp(n, e),
      redo: () => ({ state: n, dispatch: e }) => Wp(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [VC(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), qC = jC;
const KC = new j({
  tiptapExtension: qC,
  onBridgeMessage: (n, e) => (e.type === "undo" && n.chain().focus().undo().run(), e.type === "redo" && n.chain().focus().redo().run(), !1),
  extendEditorInstance: (n) => ({
    redo: () => n({
      type: "redo"
      /* Redo */
    }),
    undo: () => n({
      type: "undo"
      /* Undo */
    })
  }),
  extendEditorState: (n) => ({
    canUndo: n.can().undo(),
    canRedo: n.can().redo()
  })
});
var UC = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, _C = Pe.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["img", U(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setImage: (n) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: n
      })
    };
  },
  addInputRules() {
    return [
      hx({
        find: UC,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, r] = n;
          return { src: t, alt: e, title: r };
        }
      })
    ];
  }
}), GC = _C;
const YC = new j({
  tiptapExtension: GC.configure({
    allowBase64: !0
  }),
  onBridgeMessage: (n, e) => (e.type === "set-image" && n.chain().focus().setImage({ src: e.payload }).setTextSelection(n.state.selection.to + 1).run(), !1),
  extendEditorInstance: (n) => ({
    setImage: (e) => n({
      type: "set-image",
      payload: e
    })
  }),
  extendEditorState: () => ({}),
  extendCSS: `
  img {
    height: auto;
    max-width: 100%;
  }

  img &.ProseMirror-selectednode {
    outline: 3px solid #68cef8;
  }
  `
});
var XC = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, QC = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, ZC = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, ew = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, tw = ht.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      on({
        find: XC,
        type: this.type
      }),
      on({
        find: ZC,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ot({
        find: QC,
        type: this.type
      }),
      Ot({
        find: ew,
        type: this.type
      })
    ];
  }
}), nw = tw;
const rw = new j({
  tiptapExtension: nw,
  onBridgeMessage: (n, e) => (e.type === "toggle-italic" && n.chain().focus().toggleItalic().run(), !1),
  extendEditorInstance: (n) => ({
    toggleItalic: () => n({
      type: "toggle-italic"
      /* ToggleItalic */
    })
  }),
  extendEditorState: (n) => ({
    canToggleItalic: n.can().toggleItalic(),
    isItalicActive: n.isActive("italic")
  })
}), iw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", sw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Bl = "numeric", Fl = "ascii", Hl = "alpha", Cr = "asciinumeric", hr = "alphanumeric", Vl = "domain", jp = "emoji", ow = "scheme", lw = "slashscheme", Fo = "whitespace";
function aw(n, e) {
  return n in e || (e[n] = []), e[n];
}
function Wt(n, e, t) {
  e[Bl] && (e[Cr] = !0, e[hr] = !0), e[Fl] && (e[Cr] = !0, e[Hl] = !0), e[Cr] && (e[hr] = !0), e[Hl] && (e[hr] = !0), e[hr] && (e[Vl] = !0), e[jp] && (e[Vl] = !0);
  for (const r in e) {
    const i = aw(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function cw(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function we(n = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
we.groups = {};
we.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], s = e.jr[r][1];
      if (s && i.test(n))
        return s;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e = !1) {
    return e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || we.groups;
    let i;
    return e && e.j ? i = e : (i = new we(e), t && r && Wt(e, t, r)), this.jr.push([n, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let i = this;
    const s = n.length;
    if (!s)
      return i;
    for (let o = 0; o < s - 1; o++)
      i = i.tt(n[o]);
    return i.tt(n[s - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || we.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const s = e;
    let o, l = i.go(n);
    if (l ? (o = new we(), Object.assign(o.j, l.j), o.jr.push.apply(o.jr, l.jr), o.jd = l.jd, o.t = l.t) : o = new we(), s) {
      if (r)
        if (o.t && typeof o.t == "string") {
          const a = Object.assign(cw(o.t, r), t);
          Wt(s, a, r);
        } else
          t && Wt(s, t, r);
      o.t = s;
    }
    return i.j[n] = o, o;
  }
};
const R = (n, e, t, r, i) => n.ta(e, t, r, i), V = (n, e, t, r, i) => n.tr(e, t, r, i), Ju = (n, e, t, r, i) => n.ts(e, t, r, i), k = (n, e, t, r, i) => n.tt(e, t, r, i), nt = "WORD", Jl = "UWORD", qp = "ASCIINUMERICAL", Kp = "ALPHANUMERICAL", Hr = "LOCALHOST", Wl = "TLD", jl = "UTLD", Ni = "SCHEME", An = "SLASH_SCHEME", Pa = "NUM", ql = "WS", $a = "NL", wr = "OPENBRACE", Er = "CLOSEBRACE", is = "OPENBRACKET", ss = "CLOSEBRACKET", ls = "OPENPAREN", as = "CLOSEPAREN", cs = "OPENANGLEBRACKET", us = "CLOSEANGLEBRACKET", hs = "FULLWIDTHLEFTPAREN", fs = "FULLWIDTHRIGHTPAREN", ds = "LEFTCORNERBRACKET", ps = "RIGHTCORNERBRACKET", ms = "LEFTWHITECORNERBRACKET", gs = "RIGHTWHITECORNERBRACKET", ys = "FULLWIDTHLESSTHAN", Ss = "FULLWIDTHGREATERTHAN", ks = "AMPERSAND", xs = "APOSTROPHE", bs = "ASTERISK", St = "AT", Cs = "BACKSLASH", ws = "BACKTICK", Es = "CARET", kt = "COLON", Ba = "COMMA", Ms = "DOLLAR", qe = "DOT", Ts = "EQUALS", Fa = "EXCLAMATION", Ae = "HYPHEN", Mr = "PERCENT", vs = "PIPE", Os = "PLUS", Ns = "POUND", Tr = "QUERY", Ha = "QUOTE", Up = "FULLWIDTHMIDDLEDOT", Va = "SEMI", Ke = "SLASH", vr = "TILDE", As = "UNDERSCORE", _p = "EMOJI", Is = "SYM";
var Gp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Kp,
  AMPERSAND: ks,
  APOSTROPHE: xs,
  ASCIINUMERICAL: qp,
  ASTERISK: bs,
  AT: St,
  BACKSLASH: Cs,
  BACKTICK: ws,
  CARET: Es,
  CLOSEANGLEBRACKET: us,
  CLOSEBRACE: Er,
  CLOSEBRACKET: ss,
  CLOSEPAREN: as,
  COLON: kt,
  COMMA: Ba,
  DOLLAR: Ms,
  DOT: qe,
  EMOJI: _p,
  EQUALS: Ts,
  EXCLAMATION: Fa,
  FULLWIDTHGREATERTHAN: Ss,
  FULLWIDTHLEFTPAREN: hs,
  FULLWIDTHLESSTHAN: ys,
  FULLWIDTHMIDDLEDOT: Up,
  FULLWIDTHRIGHTPAREN: fs,
  HYPHEN: Ae,
  LEFTCORNERBRACKET: ds,
  LEFTWHITECORNERBRACKET: ms,
  LOCALHOST: Hr,
  NL: $a,
  NUM: Pa,
  OPENANGLEBRACKET: cs,
  OPENBRACE: wr,
  OPENBRACKET: is,
  OPENPAREN: ls,
  PERCENT: Mr,
  PIPE: vs,
  PLUS: Os,
  POUND: Ns,
  QUERY: Tr,
  QUOTE: Ha,
  RIGHTCORNERBRACKET: ps,
  RIGHTWHITECORNERBRACKET: gs,
  SCHEME: Ni,
  SEMI: Va,
  SLASH: Ke,
  SLASH_SCHEME: An,
  SYM: Is,
  TILDE: vr,
  TLD: Wl,
  UNDERSCORE: As,
  UTLD: jl,
  UWORD: Jl,
  WORD: nt,
  WS: ql
});
const et = /[a-z]/, Un = new RegExp("\\p{L}", "u"), Ho = new RegExp("\\p{Emoji}", "u"), tt = /\d/, Vo = /\s/, Wu = "\r", Jo = `
`, uw = "️", hw = "‍", Wo = "￼";
let pi = null, mi = null;
function fw(n = []) {
  const e = {};
  we.groups = e;
  const t = new we();
  pi == null && (pi = ju(iw)), mi == null && (mi = ju(sw)), k(t, "'", xs), k(t, "{", wr), k(t, "}", Er), k(t, "[", is), k(t, "]", ss), k(t, "(", ls), k(t, ")", as), k(t, "<", cs), k(t, ">", us), k(t, "（", hs), k(t, "）", fs), k(t, "「", ds), k(t, "」", ps), k(t, "『", ms), k(t, "』", gs), k(t, "＜", ys), k(t, "＞", Ss), k(t, "&", ks), k(t, "*", bs), k(t, "@", St), k(t, "`", ws), k(t, "^", Es), k(t, ":", kt), k(t, ",", Ba), k(t, "$", Ms), k(t, ".", qe), k(t, "=", Ts), k(t, "!", Fa), k(t, "-", Ae), k(t, "%", Mr), k(t, "|", vs), k(t, "+", Os), k(t, "#", Ns), k(t, "?", Tr), k(t, '"', Ha), k(t, "/", Ke), k(t, ";", Va), k(t, "~", vr), k(t, "_", As), k(t, "\\", Cs), k(t, "・", Up);
  const r = V(t, tt, Pa, {
    [Bl]: !0
  });
  V(r, tt, r);
  const i = V(r, et, qp, {
    [Cr]: !0
  }), s = V(r, Un, Kp, {
    [hr]: !0
  }), o = V(t, et, nt, {
    [Fl]: !0
  });
  V(o, tt, i), V(o, et, o), V(i, tt, i), V(i, et, i);
  const l = V(t, Un, Jl, {
    [Hl]: !0
  });
  V(l, et), V(l, tt, s), V(l, Un, l), V(s, tt, s), V(s, et), V(s, Un, s);
  const a = k(t, Jo, $a, {
    [Fo]: !0
  }), c = k(t, Wu, ql, {
    [Fo]: !0
  }), u = V(t, Vo, ql, {
    [Fo]: !0
  });
  k(t, Wo, u), k(c, Jo, a), k(c, Wo, u), V(c, Vo, u), k(u, Wu), k(u, Jo), V(u, Vo, u), k(u, Wo, u);
  const h = V(t, Ho, _p, {
    [jp]: !0
  });
  k(h, "#"), V(h, Ho, h), k(h, uw, h);
  const f = k(h, hw);
  k(f, "#"), V(f, Ho, h);
  const d = [[et, o], [tt, i]], p = [[et, null], [Un, l], [tt, s]];
  for (let m = 0; m < pi.length; m++)
    ft(t, pi[m], Wl, nt, d);
  for (let m = 0; m < mi.length; m++)
    ft(t, mi[m], jl, Jl, p);
  Wt(Wl, {
    tld: !0,
    ascii: !0
  }, e), Wt(jl, {
    utld: !0,
    alpha: !0
  }, e), ft(t, "file", Ni, nt, d), ft(t, "mailto", Ni, nt, d), ft(t, "http", An, nt, d), ft(t, "https", An, nt, d), ft(t, "ftp", An, nt, d), ft(t, "ftps", An, nt, d), Wt(Ni, {
    scheme: !0,
    ascii: !0
  }, e), Wt(An, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < n.length; m++) {
    const g = n[m][0], S = n[m][1] ? {
      [ow]: !0
    } : {
      [lw]: !0
    };
    g.indexOf("-") >= 0 ? S[Vl] = !0 : et.test(g) ? tt.test(g) ? S[Cr] = !0 : S[Fl] = !0 : S[Bl] = !0, Ju(t, g, g, S);
  }
  return Ju(t, "localhost", Hr, {
    ascii: !0
  }), t.jd = new we(Is), {
    start: t,
    tokens: Object.assign({
      groups: e
    }, Gp)
  };
}
function Yp(n, e) {
  const t = dw(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let s = 0, o = 0;
  for (; o < r; ) {
    let l = n, a = null, c = 0, u = null, h = -1, f = -1;
    for (; o < r && (a = l.go(t[o])); )
      l = a, l.accepts() ? (h = 0, f = 0, u = l) : h >= 0 && (h += t[o].length, f++), c += t[o].length, s += t[o].length, o++;
    s -= h, o -= f, c -= h, i.push({
      t: u.t,
      // token type/name
      v: e.slice(s - c, s),
      // string value
      s: s - c,
      // start index
      e: s
      // end index (excluding)
    });
  }
  return i;
}
function dw(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), s, o = i < 55296 || i > 56319 || r + 1 === t || (s = n.charCodeAt(r + 1)) < 56320 || s > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(o), r += o.length;
  }
  return e;
}
function ft(n, e, t, r, i) {
  let s;
  const o = e.length;
  for (let l = 0; l < o - 1; l++) {
    const a = e[l];
    n.j[a] ? s = n.j[a] : (s = new we(r), s.jr = i.slice(), n.j[a] = s), n = s;
  }
  return s = new we(t), s.jr = i.slice(), n.j[e[o - 1]] = s, s;
}
function ju(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let s = 0;
    for (; i.indexOf(n[r + s]) >= 0; )
      s++;
    if (s > 0) {
      e.push(t.join(""));
      for (let o = parseInt(n.substring(r, r + s), 10); o > 0; o--)
        t.pop();
      r += s;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const Vr = {
  defaultProtocol: "http",
  events: null,
  format: qu,
  formatHref: qu,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Ja(n, e = null) {
  let t = Object.assign({}, Vr);
  n && (t = Object.assign(t, n instanceof Ja ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let s = 0; s < r.length; s++)
    i.push(r[s].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
Ja.prototype = {
  o: Vr,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : Vr[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function qu(n) {
  return n;
}
function Xp(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Xp.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n = Vr.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), s = this.toFormattedString(n), o = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), u = n.getObj("attributes", t, e), h = n.getObj("events", t, e);
    return o.href = r, l && (o.class = l), a && (o.target = a), c && (o.rel = c), u && Object.assign(o, u), {
      tagName: i,
      attributes: o,
      content: s,
      eventListeners: h
    };
  }
};
function Gs(n, e) {
  class t extends Xp {
    constructor(i, s) {
      super(i, s), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const Ku = Gs("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Uu = Gs("text"), pw = Gs("nl"), gi = Gs("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n = Vr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Hr && n[1].t === kt;
  }
}), Ne = (n) => new we(n);
function mw({
  groups: n
}) {
  const e = n.domain.concat([ks, bs, St, Cs, ws, Es, Ms, Ts, Ae, Pa, Mr, vs, Os, Ns, Ke, Is, vr, As]), t = [xs, kt, Ba, qe, Fa, Mr, Tr, Ha, Va, cs, us, wr, Er, ss, is, ls, as, hs, fs, ds, ps, ms, gs, ys, Ss], r = [ks, xs, bs, Cs, ws, Es, Ms, Ts, Ae, wr, Er, Mr, vs, Os, Ns, Tr, Ke, Is, vr, As], i = Ne(), s = k(i, vr);
  R(s, r, s), R(s, n.domain, s);
  const o = Ne(), l = Ne(), a = Ne();
  R(i, n.domain, o), R(i, n.scheme, l), R(i, n.slashscheme, a), R(o, r, s), R(o, n.domain, o);
  const c = k(o, St);
  k(s, St, c), k(l, St, c), k(a, St, c);
  const u = k(s, qe);
  R(u, r, s), R(u, n.domain, s);
  const h = Ne();
  R(c, n.domain, h), R(h, n.domain, h);
  const f = k(h, qe);
  R(f, n.domain, h);
  const d = Ne(Ku);
  R(f, n.tld, d), R(f, n.utld, d), k(c, Hr, d);
  const p = k(h, Ae);
  k(p, Ae, p), R(p, n.domain, h), R(d, n.domain, h), k(d, qe, f), k(d, Ae, p);
  const m = k(d, kt);
  R(m, n.numeric, Ku);
  const g = k(o, Ae), y = k(o, qe);
  k(g, Ae, g), R(g, n.domain, o), R(y, r, s), R(y, n.domain, o);
  const S = Ne(gi);
  R(y, n.tld, S), R(y, n.utld, S), R(S, n.domain, o), R(S, r, s), k(S, qe, y), k(S, Ae, g), k(S, St, c);
  const C = k(S, kt), I = Ne(gi);
  R(C, n.numeric, I);
  const E = Ne(gi), b = Ne();
  R(E, e, E), R(E, t, b), R(b, e, E), R(b, t, b), k(S, Ke, E), k(I, Ke, E);
  const O = k(l, kt), M = k(a, kt), P = k(M, Ke), q = k(P, Ke);
  R(l, n.domain, o), k(l, qe, y), k(l, Ae, g), R(a, n.domain, o), k(a, qe, y), k(a, Ae, g), R(O, n.domain, E), k(O, Ke, E), k(O, Tr, E), R(q, n.domain, E), R(q, e, E), k(q, Ke, E);
  const hn = [
    [wr, Er],
    // {}
    [is, ss],
    // []
    [ls, as],
    // ()
    [cs, us],
    // <>
    [hs, fs],
    // （）
    [ds, ps],
    // 「」
    [ms, gs],
    // 『』
    [ys, Ss]
    // ＜＞
  ];
  for (let Jn = 0; Jn < hn.length; Jn++) {
    const [Yr, Ys] = hn[Jn], Xr = k(E, Yr);
    k(b, Yr, Xr), k(Xr, Ys, E);
    const fn = Ne(gi);
    R(Xr, e, fn);
    const Wn = Ne();
    R(Xr, t), R(fn, e, fn), R(fn, t, Wn), R(Wn, e, fn), R(Wn, t, Wn), k(fn, Ys, E), k(Wn, Ys, E);
  }
  return k(i, Hr, S), k(i, $a, pw), {
    start: i,
    tokens: Gp
  };
}
function gw(n, e, t) {
  let r = t.length, i = 0, s = [], o = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, u = 0, h = null, f = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      o.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, h = l) : f >= 0 && f++, i++, u++;
    if (f < 0)
      i -= u, i < r && (o.push(t[i]), i++);
    else {
      o.length > 0 && (s.push(jo(Uu, e, o)), o = []), i -= f, u -= f;
      const d = h.t, p = t.slice(i - u, i);
      s.push(jo(d, e, p));
    }
  }
  return o.length > 0 && s.push(jo(Uu, e, o)), s;
}
function jo(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, s = e.slice(r, i);
  return new n(s, t);
}
const yw = typeof console < "u" && console && console.warn || (() => {
}), Sw = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", F = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function kw() {
  return we.groups = {}, F.scanner = null, F.parser = null, F.tokenQueue = [], F.pluginQueue = [], F.customSchemes = [], F.initialized = !1, F;
}
function _u(n, e = !1) {
  if (F.initialized && yw(`linkifyjs: already initialized - will not register custom scheme "${n}" ${Sw}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  F.customSchemes.push([n, e]);
}
function xw() {
  F.scanner = fw(F.customSchemes);
  for (let n = 0; n < F.tokenQueue.length; n++)
    F.tokenQueue[n][1]({
      scanner: F.scanner
    });
  F.parser = mw(F.scanner.tokens);
  for (let n = 0; n < F.pluginQueue.length; n++)
    F.pluginQueue[n][1]({
      scanner: F.scanner,
      parser: F.parser
    });
  return F.initialized = !0, F;
}
function Wa(n) {
  return F.initialized || xw(), gw(F.parser.start, n, Yp(F.scanner.start, n));
}
Wa.scan = Yp;
function Qp(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new Ja(t), i = Wa(n), s = [];
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    l.isLink && (!e || l.t === e) && r.check(l) && s.push(l.toFormattedObject(r));
  }
  return s;
}
var ja = "[\0-   ᠎ -\u2029 　]", bw = new RegExp(ja), Cw = new RegExp(`${ja}$`), ww = new RegExp(ja, "g");
function Ew(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function Mw(n) {
  return new W({
    key: new ee("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((c) => c.docChanged) && !t.doc.eq(r.doc), s = e.some((c) => c.getMeta("preventAutolink"));
      if (!i || s)
        return;
      const { tr: o } = r, l = Cd(t.doc, [...e]);
      if (Id(l).forEach(({ newRange: c }) => {
        const u = TS(r.doc, c, (d) => d.isTextblock);
        let h, f;
        if (u.length > 1)
          h = u[0], f = r.doc.textBetween(
            h.pos,
            h.pos + h.node.nodeSize,
            void 0,
            " "
          );
        else if (u.length) {
          const d = r.doc.textBetween(c.from, c.to, " ", " ");
          if (!Cw.test(d))
            return;
          h = u[0], f = r.doc.textBetween(h.pos, c.to, void 0, " ");
        }
        if (h && f) {
          const d = f.split(bw).filter(Boolean);
          if (d.length <= 0)
            return !1;
          const p = d[d.length - 1], m = h.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const g = Wa(p).map((y) => y.toObject(n.defaultProtocol));
          if (!Ew(g))
            return !1;
          g.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: m + y.start + 1,
            to: m + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => n.validate(y.value)).filter((y) => n.shouldAutoLink(y.value)).forEach((y) => {
            ba(y.from, y.to, r.doc).some((S) => S.mark.type === n.type) || o.addMark(
              y.from,
              y.to,
              n.type.create({
                href: y.href
              })
            );
          });
        }
      }), !!o.steps.length)
        return o;
    }
  });
}
function Tw(n) {
  return new W({
    key: new ee("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, s;
        if (r.button !== 0 || !e.editable)
          return !1;
        let o = null;
        if (r.target instanceof HTMLAnchorElement)
          o = r.target;
        else {
          let u = r.target;
          const h = [];
          for (; u.nodeName !== "DIV"; )
            h.push(u), u = u.parentNode;
          o = h.find((f) => f.nodeName === "A");
        }
        if (!o)
          return !1;
        const l = Ad(e.state, n.type.name), a = (i = o == null ? void 0 : o.href) != null ? i : l.href, c = (s = o == null ? void 0 : o.target) != null ? s : l.target;
        return n.enableClickSelection && n.editor.commands.extendMarkRange(n.type.name), o && a ? (window.open(a, c), !0) : !1;
      }
    }
  });
}
function vw(n) {
  return new W({
    key: new ee("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: s } = i, { empty: o } = s;
        if (o)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = Qp(l, { defaultProtocol: n.defaultProtocol }).find(
          (c) => c.isLink && c.value === l
        );
        return !l || !a ? !1 : n.editor.commands.setMark(n.type, {
          href: a.href
        });
      }
    }
  });
}
function It(n, e) {
  const t = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && t.push(i);
  }), !n || n.replace(ww, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var Ow = ht.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        _u(n);
        return;
      }
      _u(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    kw();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      enableClickSelection: !1,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (n, e) => !!It(n, e.protocols),
      validate: (n) => !!n,
      shouldAutoLink: (n) => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (n) => {
          const e = n.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (t) => !!It(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return this.options.isAllowedUri(n.href, {
      defaultValidate: (e) => !!It(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", U(this.options.HTMLAttributes, n), 0] : ["a", U(this.options.HTMLAttributes, { ...n, href: "" }), 0];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!It(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, n).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (n) => ({ chain: e }) => {
        const { href: t } = n || {};
        return t && !this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!It(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Ot({
        find: (n) => {
          const e = [];
          if (n) {
            const { protocols: t, defaultProtocol: r } = this.options, i = Qp(n).filter(
              (s) => s.isLink && this.options.isAllowedUri(s.value, {
                defaultValidate: (o) => !!It(o, t),
                protocols: t,
                defaultProtocol: r
              })
            );
            i.length && i.forEach(
              (s) => e.push({
                text: s.value,
                data: {
                  href: s.href
                },
                index: s.start
              })
            );
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) == null ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [], { protocols: e, defaultProtocol: t } = this.options;
    return this.options.autolink && n.push(
      Mw({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (r) => this.options.isAllowedUri(r, {
          defaultValidate: (i) => !!It(i, e),
          protocols: e,
          defaultProtocol: t
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), this.options.openOnClick === !0 && n.push(
      Tw({
        type: this.type,
        editor: this.editor,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && n.push(
      vw({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      })
    ), n;
  }
}), Nw = Ow;
const Aw = new j({
  tiptapExtension: Nw.configure({
    openOnClick: !1,
    autolink: !0
  }),
  onBridgeMessage: (n, { type: e, payload: t }) => {
    if (e === "set-link") {
      if (t === null)
        return !1;
      if (t === "")
        return n.chain().focus().extendMarkRange("link").unsetLink().setTextSelection(n.state.selection.from).run(), !1;
      n.chain().focus().extendMarkRange("link").setLink({ href: t }).setTextSelection(n.state.selection.from).run();
    }
    return !1;
  },
  extendEditorInstance: (n) => ({
    setLink: (e) => n({
      type: "set-link",
      payload: e
    })
  }),
  extendEditorState: (n) => ({
    canSetLink: !n.state.selection.empty,
    isLinkActive: n.isActive("link"),
    activeLink: n.getAttributes("link").href
  })
}), Iw = new j({
  tiptapExtension: Ma,
  onBridgeMessage: (n, e) => {
    switch (e.type) {
      case "lift":
        n.chain().focus().liftListItem(n.schema.nodes.listItem.name).run();
        break;
      case "sink":
        n.chain().focus().sinkListItem(n.schema.nodes.listItem.name).run();
        break;
    }
    return !1;
  },
  extendEditorInstance: (n) => ({
    lift: () => n({
      type: "lift"
      /* Lift */
    }),
    sink: () => n({
      type: "sink"
      /* Sink */
    })
  }),
  extendEditorState: (n) => ({
    canLift: n.can().liftListItem(n.state.schema.nodes.listItem.name),
    canSink: n.can().sinkListItem(n.state.schema.nodes.listItem.name)
  })
});
var Rw = lp;
const Dw = new j({
  tiptapExtension: Rw,
  tiptapExtensionDeps: [Ma],
  onBridgeMessage: (n, e) => (e.type === "toggle-orderedList" && n.chain().focus().toggleOrderedList().run(), !1),
  extendEditorInstance: (n) => ({
    toggleOrderedList: () => n({
      type: "toggle-orderedList"
      /* ToggleOrderedList */
    })
  }),
  extendEditorState: (n) => ({
    canToggleOrderedList: n.can().toggleOrderedList(),
    isOrderedListActive: n.isActive("orderedList")
  })
});
var zw = WC;
const Lw = new j({
  tiptapExtension: zw,
  extendCSS: `
    .is-editor-empty:first-child::before {
        color: #adb5bd;
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
    }
  `,
  onBridgeMessage: (n, e) => {
    switch (e.type) {
      case "set-placeholder":
        n.extensionManager.extensions.forEach((r) => {
          r.name === "placeholder" && (r.options.placeholder = e.payload);
        }), n.setOptions();
        break;
    }
    return !1;
  },
  extendEditorInstance: (n) => ({
    setPlaceholder: (t) => n({
      type: "set-placeholder",
      payload: t
    })
  })
});
var Pw = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, $w = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, Bw = ht.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      on({
        find: Pw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ot({
        find: $w,
        type: this.type
      })
    ];
  }
}), Fw = Bw;
const Hw = new j({
  tiptapExtension: Fw,
  onBridgeMessage: (n, e) => (e.type === "toggle-strike" && n.chain().focus().toggleStrike().run(), !1),
  extendEditorInstance: (n) => ({
    toggleStrike: () => n({
      type: "toggle-strike"
      /* ToggleStrike */
    })
  }),
  extendEditorState: (n) => ({
    canToggleStrike: n.can().toggleStrike(),
    isStrikeActive: n.isActive("strike")
  })
});
var Vw = ht.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), Jw = Vw;
const Ww = new j({
  tiptapExtension: Jw,
  onBridgeMessage: (n, e) => (e.type === "toggle-underline" && n.chain().focus().toggleUnderline().run(), !1),
  extendEditorInstance: (n) => ({
    toggleUnderline: () => n({
      type: "toggle-underline"
      /* ToggleUnderline */
    })
  }),
  extendEditorState: (n) => ({
    canToggleUnderline: n.can().toggleUnderline(),
    isUnderlineActive: n.isActive("underline")
  })
});
var jw = cp, qw = ap;
const Kw = new j({
  tiptapExtension: jw,
  tiptapExtensionDeps: [qw.configure({ nested: !0 })],
  onBridgeMessage: (n, e) => (e.type === "toggle-task-list" && n.chain().focus().toggleTaskList().run(), e.type === "lift-task-list-item" && n.chain().focus().liftListItem(n.state.schema.nodes.taskItem.name).run(), e.type === "sink-task-list-item" && n.chain().focus().sinkListItem(n.state.schema.nodes.taskItem.name).run(), !1),
  extendEditorInstance: (n) => ({
    toggleTaskList: () => n({
      type: "toggle-task-list"
      /* ToggleTaskList */
    }),
    liftTaskListItem: () => n({
      type: "lift-task-list-item"
      /* LiftTaskListItem */
    }),
    sinkTaskListItem: () => n({
      type: "sink-task-list-item"
      /* SinkTaskListItem */
    })
  }),
  extendEditorState: (n) => ({
    canToggleTaskList: n.can().toggleTaskList(),
    isTaskListActive: n.isActive("taskList"),
    canLiftTaskListItem: n.can().liftListItem(n.state.schema.nodes.taskItem.name),
    canSinkTaskListItem: n.can().sinkListItem(n.state.schema.nodes.taskItem.name)
  }),
  extendCSS: `
  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;
  }
  
  ul[data-type="taskList"] > li {
    display: flex;
  }
  
  ul[data-type="taskList"] p {
    margin: 0;
  }
  
  ul[data-type="taskList"] li {
    display: flex;
  }
  
  ul[data-type="taskList"] li > label > input {
    font-size: inherit;
    font-family: inherit;
    color: #000;
    margin: 0.1rem;
    border: 1px solid black;
    border-radius: 0.3rem;
    padding: 0.1rem 0.4rem;
    background: white;
    accent-color: black;
  }
  ul[data-type="taskList"] li > label {
    flex: 0 0 auto;
    margin-right: 0.5rem;
    user-select: none;
  }
  
  ul[data-type="taskList"] li > div {
    flex: 1 1 auto;
  }  
  `
});
var Uw = JC;
const _w = new j({
  tiptapExtension: Uw
});
var Gw = Pe.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", U(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: s } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, a = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && o) {
              const h = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(h);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Yw = Gw;
const Xw = new j({
  tiptapExtension: Yw,
  onBridgeMessage: (n, e) => (e.type === "set-hard-break" && (console.log("setting hard break"), n.chain().focus().setHardBreak().run()), !1),
  extendEditorInstance: (n) => ({
    setHardBreak: () => n({
      type: "set-hard-break"
      /* setHardBreak */
    })
  }),
  extendEditorState: () => ({})
}), EE = [
  rb,
  KC,
  Sb,
  rw,
  Hw,
  Ww,
  Dw,
  vb,
  YC,
  db,
  Yx,
  Kw,
  Aw,
  Eb,
  Rb,
  Wx,
  Lw,
  Iw,
  _w,
  Xw
];
export {
  ve as AllSelection,
  Yx as BlockquoteBridge,
  rb as BoldBridge,
  j as BridgeExtension,
  db as BulletListBridge,
  Sb as CodeBridge,
  Eb as ColorBridge,
  Wx as CoreBridge,
  Qe as Decoration,
  ie as DecorationSet,
  In as EditorState,
  Rf as EditorView,
  Xw as HardBreakBridge,
  vb as HeadingBridge,
  Rb as HighlightBridge,
  KC as HistoryBridge,
  YC as ImageBridge,
  rw as ItalicBridge,
  Aw as LinkBridge,
  Iw as ListItemBridge,
  x as NodeSelection,
  Dw as OrderedListBridge,
  Lw as PlaceholderBridge,
  W as Plugin,
  ee as PluginKey,
  A as Selection,
  Xg as SelectionRange,
  Hw as StrikeBridge,
  Kw as TaskListBridge,
  EE as TenTapStartKit,
  v as TextSelection,
  Zg as Transaction,
  Ww as UnderlineBridge,
  SE as __endComposition,
  yE as __parseFromClipboard,
  jx as blueBackgroundPlugin,
  Kn as sendMessage,
  wE as useTenTap
};
