import {
  $ as Re,
  $a as Zt,
  A as Z,
  Aa as tt,
  B as Ut,
  Ba as dn,
  C as qr,
  Ca as qt,
  D as Vr,
  Da as hn,
  E as Wr,
  Ea as Vt,
  F as N,
  Fa as Wt,
  G as Gr,
  Ga as Gt,
  H as I,
  Ha as fn,
  I as C,
  J as w,
  K as Pt,
  L as Zr,
  M as E,
  Ma as pn,
  N as _t,
  Na as gn,
  O as y,
  P as p,
  Pa as vn,
  Q as xt,
  Qa as mn,
  R as Qr,
  Ra as yn,
  S as Nt,
  T as Yr,
  U as Ce,
  V as z,
  Va as rt,
  W as et,
  Xa as nt,
  Ya as Sn,
  Z as Lt,
  Za as it,
  _ as Kr,
  _a as wn,
  a as d,
  aa as Xr,
  ab as Cn,
  b as A,
  ba as se,
  bb as Rn,
  c as $r,
  ca as Q,
  cb as j,
  d as zr,
  da as jt,
  db as bn,
  e as At,
  ea as Jr,
  eb as Me,
  f as Dt,
  fa as kt,
  fb as En,
  g as W,
  ga as en,
  gb as In,
  h as P,
  ha as $t,
  hb as Ae,
  i as G,
  ia as tn,
  ib as Mn,
  j as D,
  ja as be,
  k as f,
  ka as zt,
  kb as An,
  l as Se,
  la as rn,
  lb as Qt,
  m as Fr,
  ma as nn,
  mb as Dn,
  n as Hr,
  na as Ee,
  nb as Tn,
  o as S,
  oa as on,
  p as Xe,
  pa as Ie,
  q as T,
  r as we,
  ra as L,
  s as Br,
  sa as sn,
  t as Tt,
  ta as an,
  u as J,
  ua as Ft,
  v as ne,
  va as cn,
  w as ie,
  wa as un,
  x as Ot,
  xa as Ht,
  y as oe,
  ya as ln,
  z as Je,
  za as Bt,
} from "./chunk-Z6YZYOPG.js";
var Kt = class extends Rn {
    supportsDOMEvents = !0;
  },
  Xt = class t extends Kt {
    static makeCurrent() {
      Cn(new t());
    }
    onAndCancel(n, e, r, i) {
      return (
        n.addEventListener(e, r, i),
        () => {
          n.removeEventListener(e, r, i);
        }
      );
    }
    dispatchEvent(n, e) {
      n.dispatchEvent(e);
    }
    remove(n) {
      n.remove();
    }
    createElement(n, e) {
      return (e = e || this.getDefaultDocument()), e.createElement(n);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(n) {
      return n.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(n) {
      return n instanceof DocumentFragment;
    }
    getGlobalEventTarget(n, e) {
      return e === "window"
        ? window
        : e === "document"
          ? n
          : e === "body"
            ? n.body
            : null;
    }
    getBaseHref(n) {
      let e = ki();
      return e == null ? null : $i(e);
    }
    resetBaseElement() {
      De = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(n) {
      return Mn(document.cookie, n);
    }
  },
  De = null;
function ki() {
  return (
    (De = De || document.querySelector("base")),
    De ? De.getAttribute("href") : null
  );
}
function $i(t) {
  return new URL(t, document.baseURI).pathname;
}
var zi = (() => {
    class t {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Jt = new E(""),
  Nn = (() => {
    class t {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(e, r) {
        (this._zone = r),
          e.forEach((i) => {
            i.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, r, i, o) {
        return this._findPluginFor(r).addEventListener(e, r, i, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let r = this._eventNameToPlugin.get(e);
        if (r) return r;
        if (((r = this._plugins.find((o) => o.supports(e))), !r))
          throw new C(5101, !1);
        return this._eventNameToPlugin.set(e, r), r;
      }
      static ɵfac = function (r) {
        return new (r || t)(y(Jt), y(Q));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  st = class {
    _doc;
    constructor(n) {
      this._doc = n;
    }
    manager;
  },
  ot = "ng-app-id";
function On(t) {
  for (let n of t) n.remove();
}
function Un(t, n) {
  let e = n.createElement("style");
  return (e.textContent = t), e;
}
function Fi(t, n, e, r) {
  let i = t.head?.querySelectorAll(`style[${ot}="${n}"],link[${ot}="${n}"]`);
  if (i)
    for (let o of i)
      o.removeAttribute(ot),
        o instanceof HTMLLinkElement
          ? r.set(o.href.slice(o.href.lastIndexOf("/") + 1), {
              usage: 0,
              elements: [o],
            })
          : o.textContent && e.set(o.textContent, { usage: 0, elements: [o] });
}
function er(t, n) {
  let e = n.createElement("link");
  return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e;
}
var Ln = (() => {
    class t {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      isServer;
      constructor(e, r, i, o = {}) {
        (this.doc = e),
          (this.appId = r),
          (this.nonce = i),
          (this.isServer = Qt(o)),
          Fi(e, r, this.inline, this.external),
          this.hosts.add(e.head);
      }
      addStyles(e, r) {
        for (let i of e) this.addUsage(i, this.inline, Un);
        r?.forEach((i) => this.addUsage(i, this.external, er));
      }
      removeStyles(e, r) {
        for (let i of e) this.removeUsage(i, this.inline);
        r?.forEach((i) => this.removeUsage(i, this.external));
      }
      addUsage(e, r, i) {
        let o = r.get(e);
        o
          ? o.usage++
          : r.set(e, {
              usage: 1,
              elements: [...this.hosts].map((s) =>
                this.addElement(s, i(e, this.doc)),
              ),
            });
      }
      removeUsage(e, r) {
        let i = r.get(e);
        i && (i.usage--, i.usage <= 0 && (On(i.elements), r.delete(e)));
      }
      ngOnDestroy() {
        for (let [, { elements: e }] of [...this.inline, ...this.external])
          On(e);
        this.hosts.clear();
      }
      addHost(e) {
        this.hosts.add(e);
        for (let [r, { elements: i }] of this.inline)
          i.push(this.addElement(e, Un(r, this.doc)));
        for (let [r, { elements: i }] of this.external)
          i.push(this.addElement(e, er(r, this.doc)));
      }
      removeHost(e) {
        this.hosts.delete(e);
      }
      addElement(e, r) {
        return (
          this.nonce && r.setAttribute("nonce", this.nonce),
          this.isServer && r.setAttribute(ot, this.appId),
          e.appendChild(r)
        );
      }
      static ɵfac = function (r) {
        return new (r || t)(y(j), y($t), y(zt, 8), y(be));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Yt = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  rr = /%COMP%/g,
  jn = "%COMP%",
  Hi = `_nghost-${jn}`,
  Bi = `_ngcontent-${jn}`,
  qi = !0,
  Vi = new E("", { providedIn: "root", factory: () => qi });
function Wi(t) {
  return Bi.replace(rr, t);
}
function Gi(t) {
  return Hi.replace(rr, t);
}
function kn(t, n) {
  return n.map((e) => e.replace(rr, t));
}
var Pn = (() => {
    class t {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      constructor(e, r, i, o, s, c, a, u = null, l = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = r),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = s),
          (this.platformId = c),
          (this.ngZone = a),
          (this.nonce = u),
          (this.tracingService = l),
          (this.platformIsServer = Qt(c)),
          (this.defaultRenderer = new Te(
            e,
            s,
            a,
            this.platformIsServer,
            this.tracingService,
          ));
      }
      createRenderer(e, r) {
        if (!e || !r) return this.defaultRenderer;
        this.platformIsServer &&
          r.encapsulation === Ee.ShadowDom &&
          (r = A(d({}, r), { encapsulation: Ee.Emulated }));
        let i = this.getOrCreateRenderer(e, r);
        return (
          i instanceof at
            ? i.applyToHost(e)
            : i instanceof Oe && i.applyStyles(),
          i
        );
      }
      getOrCreateRenderer(e, r) {
        let i = this.rendererByCompId,
          o = i.get(r.id);
        if (!o) {
          let s = this.doc,
            c = this.ngZone,
            a = this.eventManager,
            u = this.sharedStylesHost,
            l = this.removeStylesOnCompDestroy,
            h = this.platformIsServer;
          switch (r.encapsulation) {
            case Ee.Emulated:
              o = new at(a, u, r, this.appId, l, s, c, h, this.tracingService);
              break;
            case Ee.ShadowDom:
              return new tr(
                a,
                u,
                e,
                r,
                s,
                c,
                this.nonce,
                h,
                this.tracingService,
              );
            default:
              o = new Oe(a, u, r, l, s, c, h, this.tracingService);
              break;
          }
          i.set(r.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(e) {
        this.rendererByCompId.delete(e);
      }
      static ɵfac = function (r) {
        return new (r || t)(
          y(Nn),
          y(Ln),
          y($t),
          y(Vi),
          y(j),
          y(be),
          y(Q),
          y(zt),
          y(rn, 8),
        );
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Te = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, r, i, o) {
      (this.eventManager = n),
        (this.doc = e),
        (this.ngZone = r),
        (this.platformIsServer = i),
        (this.tracingService = o);
    }
    destroy() {}
    destroyNode = null;
    createElement(n, e) {
      return e
        ? this.doc.createElementNS(Yt[e] || e, n)
        : this.doc.createElement(n);
    }
    createComment(n) {
      return this.doc.createComment(n);
    }
    createText(n) {
      return this.doc.createTextNode(n);
    }
    appendChild(n, e) {
      (_n(n) ? n.content : n).appendChild(e);
    }
    insertBefore(n, e, r) {
      n && (_n(n) ? n.content : n).insertBefore(e, r);
    }
    removeChild(n, e) {
      e.remove();
    }
    selectRootElement(n, e) {
      let r = typeof n == "string" ? this.doc.querySelector(n) : n;
      if (!r) throw new C(-5104, !1);
      return e || (r.textContent = ""), r;
    }
    parentNode(n) {
      return n.parentNode;
    }
    nextSibling(n) {
      return n.nextSibling;
    }
    setAttribute(n, e, r, i) {
      if (i) {
        e = i + ":" + e;
        let o = Yt[i];
        o ? n.setAttributeNS(o, e, r) : n.setAttribute(e, r);
      } else n.setAttribute(e, r);
    }
    removeAttribute(n, e, r) {
      if (r) {
        let i = Yt[r];
        i ? n.removeAttributeNS(i, e) : n.removeAttribute(`${r}:${e}`);
      } else n.removeAttribute(e);
    }
    addClass(n, e) {
      n.classList.add(e);
    }
    removeClass(n, e) {
      n.classList.remove(e);
    }
    setStyle(n, e, r, i) {
      i & (Ie.DashCase | Ie.Important)
        ? n.style.setProperty(e, r, i & Ie.Important ? "important" : "")
        : (n.style[e] = r);
    }
    removeStyle(n, e, r) {
      r & Ie.DashCase ? n.style.removeProperty(e) : (n.style[e] = "");
    }
    setProperty(n, e, r) {
      n != null && (n[e] = r);
    }
    setValue(n, e) {
      n.nodeValue = e;
    }
    listen(n, e, r, i) {
      if (
        typeof n == "string" &&
        ((n = Zt().getGlobalEventTarget(this.doc, n)), !n)
      )
        throw new Error(`Unsupported event target ${n} for event ${e}`);
      let o = this.decoratePreventDefault(r);
      return (
        this.tracingService !== null &&
          this.tracingService.wrapEventListener &&
          (o = this.tracingService.wrapEventListener(n, e, o)),
        this.eventManager.addEventListener(n, e, o, i)
      );
    }
    decoratePreventDefault(n) {
      return (e) => {
        if (e === "__ngUnwrap__") return n;
        (this.platformIsServer ? this.ngZone.runGuarded(() => n(e)) : n(e)) ===
          !1 && e.preventDefault();
      };
    }
  };
function _n(t) {
  return t.tagName === "TEMPLATE" && t.content !== void 0;
}
var tr = class extends Te {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(n, e, r, i, o, s, c, a, u) {
      super(n, o, s, a, u),
        (this.sharedStylesHost = e),
        (this.hostEl = r),
        (this.shadowRoot = r.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = kn(i.id, i.styles);
      for (let m of l) {
        let b = document.createElement("style");
        c && b.setAttribute("nonce", c),
          (b.textContent = m),
          this.shadowRoot.appendChild(b);
      }
      let h = i.getExternalStyles?.();
      if (h)
        for (let m of h) {
          let b = er(m, o);
          c && b.setAttribute("nonce", c), this.shadowRoot.appendChild(b);
        }
    }
    nodeOrShadowRoot(n) {
      return n === this.hostEl ? this.shadowRoot : n;
    }
    appendChild(n, e) {
      return super.appendChild(this.nodeOrShadowRoot(n), e);
    }
    insertBefore(n, e, r) {
      return super.insertBefore(this.nodeOrShadowRoot(n), e, r);
    }
    removeChild(n, e) {
      return super.removeChild(null, e);
    }
    parentNode(n) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Oe = class extends Te {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(n, e, r, i, o, s, c, a, u) {
      super(n, o, s, c, a),
        (this.sharedStylesHost = e),
        (this.removeStylesOnCompDestroy = i),
        (this.styles = u ? kn(u, r.styles) : r.styles),
        (this.styleUrls = r.getExternalStyles?.(u));
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  },
  at = class extends Oe {
    contentAttr;
    hostAttr;
    constructor(n, e, r, i, o, s, c, a, u) {
      let l = i + "-" + r.id;
      super(n, e, r, o, s, c, a, u, l),
        (this.contentAttr = Wi(l)),
        (this.hostAttr = Gi(l));
    }
    applyToHost(n) {
      this.applyStyles(), this.setAttribute(n, this.hostAttr, "");
    }
    createElement(n, e) {
      let r = super.createElement(n, e);
      return super.setAttribute(r, this.contentAttr, ""), r;
    }
  },
  Zi = (() => {
    class t extends st {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, r, i, o) {
        return (
          e.addEventListener(r, i, o),
          () => this.removeEventListener(e, r, i, o)
        );
      }
      removeEventListener(e, r, i, o) {
        return e.removeEventListener(r, i, o);
      }
      static ɵfac = function (r) {
        return new (r || t)(y(j));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  xn = ["alt", "control", "meta", "shift"],
  Qi = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  Yi = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  Ki = (() => {
    class t extends st {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, r, i, o) {
        let s = t.parseEventName(r),
          c = t.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => Zt().onAndCancel(e, s.domEventName, c, o));
      }
      static parseEventName(e) {
        let r = e.toLowerCase().split("."),
          i = r.shift();
        if (r.length === 0 || !(i === "keydown" || i === "keyup")) return null;
        let o = t._normalizeKey(r.pop()),
          s = "",
          c = r.indexOf("code");
        if (
          (c > -1 && (r.splice(c, 1), (s = "code.")),
          xn.forEach((u) => {
            let l = r.indexOf(u);
            l > -1 && (r.splice(l, 1), (s += u + "."));
          }),
          (s += o),
          r.length != 0 || o.length === 0)
        )
          return null;
        let a = {};
        return (a.domEventName = i), (a.fullKey = s), a;
      }
      static matchEventFullKeyCode(e, r) {
        let i = Qi[e.key] || e.key,
          o = "";
        return (
          r.indexOf("code.") > -1 && ((i = e.code), (o = "code.")),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === " " ? (i = "space") : i === "." && (i = "dot"),
              xn.forEach((s) => {
                if (s !== i) {
                  let c = Yi[s];
                  c(e) && (o += s + ".");
                }
              }),
              (o += i),
              o === r)
        );
      }
      static eventCallback(e, r, i) {
        return (o) => {
          t.matchEventFullKeyCode(o, e) && i.runGuarded(() => r(o));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
      static ɵfac = function (r) {
        return new (r || t)(y(j));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function Na(t, n) {
  return Sn(d({ rootComponent: t }, Xi(n)));
}
function Xi(t) {
  return {
    appProviders: [...no, ...(t?.providers ?? [])],
    platformProviders: ro,
  };
}
function Ji() {
  Xt.makeCurrent();
}
function eo() {
  return new jt();
}
function to() {
  return en(document), document;
}
var ro = [
  { provide: be, useValue: An },
  { provide: tn, useValue: Ji, multi: !0 },
  { provide: j, useFactory: to, deps: [] },
];
var no = [
  { provide: Yr, useValue: "root" },
  { provide: jt, useFactory: eo, deps: [] },
  { provide: Jt, useClass: Zi, multi: !0, deps: [j, Q, be] },
  { provide: Jt, useClass: Ki, multi: !0, deps: [j] },
  Pn,
  Ln,
  Nn,
  { provide: an, useExisting: Pn },
  { provide: Tn, useClass: zi, deps: [] },
  [],
];
var $n = (() => {
  class t {
    _doc;
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || "";
    }
    static ɵfac = function (r) {
      return new (r || t)(y(j));
    };
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
  }
  return t;
})();
var g = "primary",
  qe = Symbol("RouteTitle"),
  ar = class {
    params;
    constructor(n) {
      this.params = n || {};
    }
    has(n) {
      return Object.prototype.hasOwnProperty.call(this.params, n);
    }
    get(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function he(t) {
  return new ar(t);
}
function oo(t, n, e) {
  let r = e.path.split("/");
  if (
    r.length > t.length ||
    (e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
  )
    return null;
  let i = {};
  for (let o = 0; o < r.length; o++) {
    let s = r[o],
      c = t[o];
    if (s[0] === ":") i[s.substring(1)] = c;
    else if (s !== c.path) return null;
  }
  return { consumed: t.slice(0, r.length), posParams: i };
}
function so(t, n) {
  if (t.length !== n.length) return !1;
  for (let e = 0; e < t.length; ++e) if (!F(t[e], n[e])) return !1;
  return !0;
}
function F(t, n) {
  let e = t ? cr(t) : void 0,
    r = n ? cr(n) : void 0;
  if (!e || !r || e.length != r.length) return !1;
  let i;
  for (let o = 0; o < e.length; o++)
    if (((i = e[o]), !Kn(t[i], n[i]))) return !1;
  return !0;
}
function cr(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function Kn(t, n) {
  if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length) return !1;
    let e = [...t].sort(),
      r = [...n].sort();
    return e.every((i, o) => r[o] === i);
  } else return t === n;
}
function Xn(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function X(t) {
  return Fr(t) ? t : hn(t) ? D(Promise.resolve(t)) : f(t);
}
var ao = { exact: ei, subset: ti },
  Jn = { exact: co, subset: uo, ignored: () => !0 };
function zn(t, n, e) {
  return (
    ao[e.paths](t.root, n.root, e.matrixParams) &&
    Jn[e.queryParams](t.queryParams, n.queryParams) &&
    !(e.fragment === "exact" && t.fragment !== n.fragment)
  );
}
function co(t, n) {
  return F(t, n);
}
function ei(t, n, e) {
  if (
    !te(t.segments, n.segments) ||
    !lt(t.segments, n.segments, e) ||
    t.numberOfChildren !== n.numberOfChildren
  )
    return !1;
  for (let r in n.children)
    if (!t.children[r] || !ei(t.children[r], n.children[r], e)) return !1;
  return !0;
}
function uo(t, n) {
  return (
    Object.keys(n).length <= Object.keys(t).length &&
    Object.keys(n).every((e) => Kn(t[e], n[e]))
  );
}
function ti(t, n, e) {
  return ri(t, n, n.segments, e);
}
function ri(t, n, e, r) {
  if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!te(i, e) || n.hasChildren() || !lt(i, e, r));
  } else if (t.segments.length === e.length) {
    if (!te(t.segments, e) || !lt(t.segments, e, r)) return !1;
    for (let i in n.children)
      if (!t.children[i] || !ti(t.children[i], n.children[i], r)) return !1;
    return !0;
  } else {
    let i = e.slice(0, t.segments.length),
      o = e.slice(t.segments.length);
    return !te(t.segments, i) || !lt(t.segments, i, r) || !t.children[g]
      ? !1
      : ri(t.children[g], n, o, r);
  }
}
function lt(t, n, e) {
  return n.every((r, i) => Jn[e](t[i].parameters, r.parameters));
}
var q = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new v([], {}), e = {}, r = null) {
      (this.root = n), (this.queryParams = e), (this.fragment = r);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= he(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return fo.serialize(this);
    }
  },
  v = class {
    segments;
    children;
    parent = null;
    constructor(n, e) {
      (this.segments = n),
        (this.children = e),
        Object.values(e).forEach((r) => (r.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return dt(this);
    }
  },
  ee = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) {
      (this.path = n), (this.parameters = e);
    }
    get parameterMap() {
      return (this._parameterMap ??= he(this.parameters)), this._parameterMap;
    }
    toString() {
      return ii(this);
    }
  };
function lo(t, n) {
  return te(t, n) && t.every((e, r) => F(e.parameters, n[r].parameters));
}
function te(t, n) {
  return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path);
}
function ho(t, n) {
  let e = [];
  return (
    Object.entries(t.children).forEach(([r, i]) => {
      r === g && (e = e.concat(n(i, r)));
    }),
    Object.entries(t.children).forEach(([r, i]) => {
      r !== g && (e = e.concat(n(i, r)));
    }),
    e
  );
}
var Ve = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({
        token: t,
        factory: () => new fe(),
        providedIn: "root",
      });
    }
    return t;
  })(),
  fe = class {
    parse(n) {
      let e = new lr(n);
      return new q(
        e.parseRootSegment(),
        e.parseQueryParams(),
        e.parseFragment(),
      );
    }
    serialize(n) {
      let e = `/${Ue(n.root, !0)}`,
        r = vo(n.queryParams),
        i = typeof n.fragment == "string" ? `#${po(n.fragment)}` : "";
      return `${e}${r}${i}`;
    }
  },
  fo = new fe();
function dt(t) {
  return t.segments.map((n) => ii(n)).join("/");
}
function Ue(t, n) {
  if (!t.hasChildren()) return dt(t);
  if (n) {
    let e = t.children[g] ? Ue(t.children[g], !1) : "",
      r = [];
    return (
      Object.entries(t.children).forEach(([i, o]) => {
        i !== g && r.push(`${i}:${Ue(o, !1)}`);
      }),
      r.length > 0 ? `${e}(${r.join("//")})` : e
    );
  } else {
    let e = ho(t, (r, i) =>
      i === g ? [Ue(t.children[g], !1)] : [`${i}:${Ue(r, !1)}`],
    );
    return Object.keys(t.children).length === 1 && t.children[g] != null
      ? `${dt(t)}/${e[0]}`
      : `${dt(t)}/(${e.join("//")})`;
  }
}
function ni(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function ct(t) {
  return ni(t).replace(/%3B/gi, ";");
}
function po(t) {
  return encodeURI(t);
}
function ur(t) {
  return ni(t)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function ht(t) {
  return decodeURIComponent(t);
}
function Fn(t) {
  return ht(t.replace(/\+/g, "%20"));
}
function ii(t) {
  return `${ur(t.path)}${go(t.parameters)}`;
}
function go(t) {
  return Object.entries(t)
    .map(([n, e]) => `;${ur(n)}=${ur(e)}`)
    .join("");
}
function vo(t) {
  let n = Object.entries(t)
    .map(([e, r]) =>
      Array.isArray(r)
        ? r.map((i) => `${ct(e)}=${ct(i)}`).join("&")
        : `${ct(e)}=${ct(r)}`,
    )
    .filter((e) => e);
  return n.length ? `?${n.join("&")}` : "";
}
var mo = /^[^\/()?;#]+/;
function nr(t) {
  let n = t.match(mo);
  return n ? n[0] : "";
}
var yo = /^[^\/()?;=#]+/;
function So(t) {
  let n = t.match(yo);
  return n ? n[0] : "";
}
var wo = /^[^=?&#]+/;
function Co(t) {
  let n = t.match(wo);
  return n ? n[0] : "";
}
var Ro = /^[^&#]+/;
function bo(t) {
  let n = t.match(Ro);
  return n ? n[0] : "";
}
var lr = class {
  url;
  remaining;
  constructor(n) {
    (this.url = n), (this.remaining = n);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new v([], {})
        : new v([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let n = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(n);
      while (this.consumeOptional("&"));
    return n;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let n = [];
    for (
      this.peekStartsWith("(") || n.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), n.push(this.parseSegment());
    let e = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (e = this.parseParens(!0)));
    let r = {};
    return (
      this.peekStartsWith("(") && (r = this.parseParens(!1)),
      (n.length > 0 || Object.keys(e).length > 0) && (r[g] = new v(n, e)),
      r
    );
  }
  parseSegment() {
    let n = nr(this.remaining);
    if (n === "" && this.peekStartsWith(";")) throw new C(4009, !1);
    return this.capture(n), new ee(ht(n), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let n = {};
    for (; this.consumeOptional(";"); ) this.parseParam(n);
    return n;
  }
  parseParam(n) {
    let e = So(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = "";
    if (this.consumeOptional("=")) {
      let i = nr(this.remaining);
      i && ((r = i), this.capture(r));
    }
    n[ht(e)] = ht(r);
  }
  parseQueryParam(n) {
    let e = Co(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = "";
    if (this.consumeOptional("=")) {
      let s = bo(this.remaining);
      s && ((r = s), this.capture(r));
    }
    let i = Fn(e),
      o = Fn(r);
    if (n.hasOwnProperty(i)) {
      let s = n[i];
      Array.isArray(s) || ((s = [s]), (n[i] = s)), s.push(o);
    } else n[i] = o;
  }
  parseParens(n) {
    let e = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let r = nr(this.remaining),
        i = this.remaining[r.length];
      if (i !== "/" && i !== ")" && i !== ";") throw new C(4010, !1);
      let o;
      r.indexOf(":") > -1
        ? ((o = r.slice(0, r.indexOf(":"))), this.capture(o), this.capture(":"))
        : n && (o = g);
      let s = this.parseChildren();
      (e[o] = Object.keys(s).length === 1 ? s[g] : new v([], s)),
        this.consumeOptional("//");
    }
    return e;
  }
  peekStartsWith(n) {
    return this.remaining.startsWith(n);
  }
  consumeOptional(n) {
    return this.peekStartsWith(n)
      ? ((this.remaining = this.remaining.substring(n.length)), !0)
      : !1;
  }
  capture(n) {
    if (!this.consumeOptional(n)) throw new C(4011, !1);
  }
};
function oi(t) {
  return t.segments.length > 0 ? new v([], { [g]: t }) : t;
}
function si(t) {
  let n = {};
  for (let [r, i] of Object.entries(t.children)) {
    let o = si(i);
    if (r === g && o.segments.length === 0 && o.hasChildren())
      for (let [s, c] of Object.entries(o.children)) n[s] = c;
    else (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
  }
  let e = new v(t.segments, n);
  return Eo(e);
}
function Eo(t) {
  if (t.numberOfChildren === 1 && t.children[g]) {
    let n = t.children[g];
    return new v(t.segments.concat(n.segments), n.children);
  }
  return t;
}
function re(t) {
  return t instanceof q;
}
function Io(t, n, e = null, r = null) {
  let i = ai(t);
  return ci(i, n, e, r);
}
function ai(t) {
  let n;
  function e(o) {
    let s = {};
    for (let a of o.children) {
      let u = e(a);
      s[a.outlet] = u;
    }
    let c = new v(o.url, s);
    return o === t && (n = c), c;
  }
  let r = e(t.root),
    i = oi(r);
  return n ?? i;
}
function ci(t, n, e, r) {
  let i = t;
  for (; i.parent; ) i = i.parent;
  if (n.length === 0) return ir(i, i, i, e, r);
  let o = Mo(n);
  if (o.toRoot()) return ir(i, i, new v([], {}), e, r);
  let s = Ao(o, i, t),
    c = s.processChildren
      ? _e(s.segmentGroup, s.index, o.commands)
      : li(s.segmentGroup, s.index, o.commands);
  return ir(i, s.segmentGroup, c, e, r);
}
function ft(t) {
  return typeof t == "object" && t != null && !t.outlets && !t.segmentPath;
}
function Le(t) {
  return typeof t == "object" && t != null && t.outlets;
}
function ir(t, n, e, r, i) {
  let o = {};
  r &&
    Object.entries(r).forEach(([a, u]) => {
      o[a] = Array.isArray(u) ? u.map((l) => `${l}`) : `${u}`;
    });
  let s;
  t === n ? (s = e) : (s = ui(t, n, e));
  let c = oi(si(s));
  return new q(c, o, i);
}
function ui(t, n, e) {
  let r = {};
  return (
    Object.entries(t.children).forEach(([i, o]) => {
      o === n ? (r[i] = e) : (r[i] = ui(o, n, e));
    }),
    new v(t.segments, r)
  );
}
var pt = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(n, e, r) {
    if (
      ((this.isAbsolute = n),
      (this.numberOfDoubleDots = e),
      (this.commands = r),
      n && r.length > 0 && ft(r[0]))
    )
      throw new C(4003, !1);
    let i = r.find(Le);
    if (i && i !== Xn(r)) throw new C(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function Mo(t) {
  if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new pt(!0, 0, t);
  let n = 0,
    e = !1,
    r = t.reduce((i, o, s) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let c = {};
          return (
            Object.entries(o.outlets).forEach(([a, u]) => {
              c[a] = typeof u == "string" ? u.split("/") : u;
            }),
            [...i, { outlets: c }]
          );
        }
        if (o.segmentPath) return [...i, o.segmentPath];
      }
      return typeof o != "string"
        ? [...i, o]
        : s === 0
          ? (o.split("/").forEach((c, a) => {
              (a == 0 && c === ".") ||
                (a == 0 && c === ""
                  ? (e = !0)
                  : c === ".."
                    ? n++
                    : c != "" && i.push(c));
            }),
            i)
          : [...i, o];
    }, []);
  return new pt(e, n, r);
}
var ue = class {
  segmentGroup;
  processChildren;
  index;
  constructor(n, e, r) {
    (this.segmentGroup = n), (this.processChildren = e), (this.index = r);
  }
};
function Ao(t, n, e) {
  if (t.isAbsolute) return new ue(n, !0, 0);
  if (!e) return new ue(n, !1, NaN);
  if (e.parent === null) return new ue(e, !0, 0);
  let r = ft(t.commands[0]) ? 0 : 1,
    i = e.segments.length - 1 + r;
  return Do(e, i, t.numberOfDoubleDots);
}
function Do(t, n, e) {
  let r = t,
    i = n,
    o = e;
  for (; o > i; ) {
    if (((o -= i), (r = r.parent), !r)) throw new C(4005, !1);
    i = r.segments.length;
  }
  return new ue(r, !1, i - o);
}
function To(t) {
  return Le(t[0]) ? t[0].outlets : { [g]: t };
}
function li(t, n, e) {
  if (((t ??= new v([], {})), t.segments.length === 0 && t.hasChildren()))
    return _e(t, n, e);
  let r = Oo(t, n, e),
    i = e.slice(r.commandIndex);
  if (r.match && r.pathIndex < t.segments.length) {
    let o = new v(t.segments.slice(0, r.pathIndex), {});
    return (
      (o.children[g] = new v(t.segments.slice(r.pathIndex), t.children)),
      _e(o, 0, i)
    );
  } else
    return r.match && i.length === 0
      ? new v(t.segments, {})
      : r.match && !t.hasChildren()
        ? dr(t, n, e)
        : r.match
          ? _e(t, 0, i)
          : dr(t, n, e);
}
function _e(t, n, e) {
  if (e.length === 0) return new v(t.segments, {});
  {
    let r = To(e),
      i = {};
    if (
      Object.keys(r).some((o) => o !== g) &&
      t.children[g] &&
      t.numberOfChildren === 1 &&
      t.children[g].segments.length === 0
    ) {
      let o = _e(t.children[g], n, e);
      return new v(t.segments, o.children);
    }
    return (
      Object.entries(r).forEach(([o, s]) => {
        typeof s == "string" && (s = [s]),
          s !== null && (i[o] = li(t.children[o], n, s));
      }),
      Object.entries(t.children).forEach(([o, s]) => {
        r[o] === void 0 && (i[o] = s);
      }),
      new v(t.segments, i)
    );
  }
}
function Oo(t, n, e) {
  let r = 0,
    i = n,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < t.segments.length; ) {
    if (r >= e.length) return o;
    let s = t.segments[i],
      c = e[r];
    if (Le(c)) break;
    let a = `${c}`,
      u = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && a === void 0) break;
    if (a && u && typeof u == "object" && u.outlets === void 0) {
      if (!Bn(a, u, s)) return o;
      r += 2;
    } else {
      if (!Bn(a, {}, s)) return o;
      r++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: r };
}
function dr(t, n, e) {
  let r = t.segments.slice(0, n),
    i = 0;
  for (; i < e.length; ) {
    let o = e[i];
    if (Le(o)) {
      let a = Uo(o.outlets);
      return new v(r, a);
    }
    if (i === 0 && ft(e[0])) {
      let a = t.segments[n];
      r.push(new ee(a.path, Hn(e[0]))), i++;
      continue;
    }
    let s = Le(o) ? o.outlets[g] : `${o}`,
      c = i < e.length - 1 ? e[i + 1] : null;
    s && c && ft(c)
      ? (r.push(new ee(s, Hn(c))), (i += 2))
      : (r.push(new ee(s, {})), i++);
  }
  return new v(r, {});
}
function Uo(t) {
  let n = {};
  return (
    Object.entries(t).forEach(([e, r]) => {
      typeof r == "string" && (r = [r]),
        r !== null && (n[e] = dr(new v([], {}), 0, r));
    }),
    n
  );
}
function Hn(t) {
  let n = {};
  return Object.entries(t).forEach(([e, r]) => (n[e] = `${r}`)), n;
}
function Bn(t, n, e) {
  return t == e.path && F(n, e.parameters);
}
var xe = "imperative",
  R = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = "NavigationStart"),
      (t[(t.NavigationEnd = 1)] = "NavigationEnd"),
      (t[(t.NavigationCancel = 2)] = "NavigationCancel"),
      (t[(t.NavigationError = 3)] = "NavigationError"),
      (t[(t.RoutesRecognized = 4)] = "RoutesRecognized"),
      (t[(t.ResolveStart = 5)] = "ResolveStart"),
      (t[(t.ResolveEnd = 6)] = "ResolveEnd"),
      (t[(t.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (t[(t.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (t[(t.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (t[(t.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (t[(t.ChildActivationStart = 11)] = "ChildActivationStart"),
      (t[(t.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (t[(t.ActivationStart = 13)] = "ActivationStart"),
      (t[(t.ActivationEnd = 14)] = "ActivationEnd"),
      (t[(t.Scroll = 15)] = "Scroll"),
      (t[(t.NavigationSkipped = 16)] = "NavigationSkipped"),
      t
    );
  })(R || {}),
  _ = class {
    id;
    url;
    constructor(n, e) {
      (this.id = n), (this.url = e);
    }
  },
  pe = class extends _ {
    type = R.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) {
      super(n, e), (this.navigationTrigger = r), (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  $ = class extends _ {
    urlAfterRedirects;
    type = R.NavigationEnd;
    constructor(n, e, r) {
      super(n, e), (this.urlAfterRedirects = r);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  U = (function (t) {
    return (
      (t[(t.Redirect = 0)] = "Redirect"),
      (t[(t.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (t[(t.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (t[(t.GuardRejected = 3)] = "GuardRejected"),
      t
    );
  })(U || {}),
  gt = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      t
    );
  })(gt || {}),
  B = class extends _ {
    reason;
    code;
    type = R.NavigationCancel;
    constructor(n, e, r, i) {
      super(n, e), (this.reason = r), (this.code = i);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Y = class extends _ {
    reason;
    code;
    type = R.NavigationSkipped;
    constructor(n, e, r, i) {
      super(n, e), (this.reason = r), (this.code = i);
    }
  },
  je = class extends _ {
    error;
    target;
    type = R.NavigationError;
    constructor(n, e, r, i) {
      super(n, e), (this.error = r), (this.target = i);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  vt = class extends _ {
    urlAfterRedirects;
    state;
    type = R.RoutesRecognized;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  hr = class extends _ {
    urlAfterRedirects;
    state;
    type = R.GuardsCheckStart;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  fr = class extends _ {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = R.GuardsCheckEnd;
    constructor(n, e, r, i, o) {
      super(n, e),
        (this.urlAfterRedirects = r),
        (this.state = i),
        (this.shouldActivate = o);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  pr = class extends _ {
    urlAfterRedirects;
    state;
    type = R.ResolveStart;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  gr = class extends _ {
    urlAfterRedirects;
    state;
    type = R.ResolveEnd;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  vr = class {
    route;
    type = R.RouteConfigLoadStart;
    constructor(n) {
      this.route = n;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  mr = class {
    route;
    type = R.RouteConfigLoadEnd;
    constructor(n) {
      this.route = n;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  yr = class {
    snapshot;
    type = R.ChildActivationStart;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Sr = class {
    snapshot;
    type = R.ChildActivationEnd;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  wr = class {
    snapshot;
    type = R.ActivationStart;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Cr = class {
    snapshot;
    type = R.ActivationEnd;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  mt = class {
    routerEvent;
    position;
    anchor;
    type = R.Scroll;
    constructor(n, e, r) {
      (this.routerEvent = n), (this.position = e), (this.anchor = r);
    }
    toString() {
      let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${n}')`;
    }
  },
  ke = class {},
  ge = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) {
      (this.url = n), (this.navigationBehaviorOptions = e);
    }
  };
function Po(t, n) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = Ht(t.providers, n, `Route: ${t.path}`)),
    t._injector ?? n
  );
}
function k(t) {
  return t.outlet || g;
}
function _o(t, n) {
  let e = t.filter((r) => k(r) === n);
  return e.push(...t.filter((r) => k(r) !== n)), e;
}
function We(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var Rr = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return We(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(n) {
      (this.rootInjector = n), (this.children = new Ge(this.rootInjector));
    }
  },
  Ge = (() => {
    class t {
      rootInjector;
      contexts = new Map();
      constructor(e) {
        this.rootInjector = e;
      }
      onChildOutletCreated(e, r) {
        let i = this.getOrCreateContext(e);
        (i.outlet = r), this.contexts.set(e, i);
      }
      onChildOutletDestroyed(e) {
        let r = this.getContext(e);
        r && ((r.outlet = null), (r.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let r = this.getContext(e);
        return (
          r || ((r = new Rr(this.rootInjector)), this.contexts.set(e, r)), r
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static ɵfac = function (r) {
        return new (r || t)(y(Ce));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  yt = class {
    _root;
    constructor(n) {
      this._root = n;
    }
    get root() {
      return this._root.value;
    }
    parent(n) {
      let e = this.pathFromRoot(n);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(n) {
      let e = br(n, this._root);
      return e ? e.children.map((r) => r.value) : [];
    }
    firstChild(n) {
      let e = br(n, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(n) {
      let e = Er(n, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((i) => i.value).filter((i) => i !== n);
    }
    pathFromRoot(n) {
      return Er(n, this._root).map((e) => e.value);
    }
  };
function br(t, n) {
  if (t === n.value) return n;
  for (let e of n.children) {
    let r = br(t, e);
    if (r) return r;
  }
  return null;
}
function Er(t, n) {
  if (t === n.value) return [n];
  for (let e of n.children) {
    let r = Er(t, e);
    if (r.length) return r.unshift(n), r;
  }
  return [];
}
var O = class {
  value;
  children;
  constructor(n, e) {
    (this.value = n), (this.children = e);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function ce(t) {
  let n = {};
  return t && t.children.forEach((e) => (n[e.value.outlet] = e)), n;
}
var St = class extends yt {
  snapshot;
  constructor(n, e) {
    super(n), (this.snapshot = e), _r(this, n);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function di(t) {
  let n = xo(t),
    e = new P([new ee("", {})]),
    r = new P({}),
    i = new P({}),
    o = new P({}),
    s = new P(""),
    c = new K(e, r, o, s, i, g, t, n.root);
  return (c.snapshot = n.root), new St(new O(c, []), n);
}
function xo(t) {
  let n = {},
    e = {},
    r = {},
    i = "",
    o = new le([], n, r, i, e, g, t, null, {});
  return new Ct("", new O(o, []));
}
var K = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(n, e, r, i, o, s, c, a) {
    (this.urlSubject = n),
      (this.paramsSubject = e),
      (this.queryParamsSubject = r),
      (this.fragmentSubject = i),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = c),
      (this._futureSnapshot = a),
      (this.title = this.dataSubject?.pipe(S((u) => u[qe])) ?? f(void 0)),
      (this.url = n),
      (this.params = e),
      (this.queryParams = r),
      (this.fragment = i),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(S((n) => he(n)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(S((n) => he(n)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function wt(t, n, e = "emptyOnly") {
  let r,
    { routeConfig: i } = t;
  return (
    n !== null &&
    (e === "always" ||
      i?.path === "" ||
      (!n.component && !n.routeConfig?.loadComponent))
      ? (r = {
          params: d(d({}, n.params), t.params),
          data: d(d({}, n.data), t.data),
          resolve: d(d(d(d({}, t.data), n.data), i?.data), t._resolvedData),
        })
      : (r = {
          params: d({}, t.params),
          data: d({}, t.data),
          resolve: d(d({}, t.data), t._resolvedData ?? {}),
        }),
    i && fi(i) && (r.resolve[qe] = i.title),
    r
  );
}
var le = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[qe];
    }
    constructor(n, e, r, i, o, s, c, a, u) {
      (this.url = n),
        (this.params = e),
        (this.queryParams = r),
        (this.fragment = i),
        (this.data = o),
        (this.outlet = s),
        (this.component = c),
        (this.routeConfig = a),
        (this._resolve = u);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= he(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= he(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let n = this.url.map((r) => r.toString()).join("/"),
        e = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${n}', path:'${e}')`;
    }
  },
  Ct = class extends yt {
    url;
    constructor(n, e) {
      super(e), (this.url = n), _r(this, e);
    }
    toString() {
      return hi(this._root);
    }
  };
function _r(t, n) {
  (n.value._routerState = t), n.children.forEach((e) => _r(t, e));
}
function hi(t) {
  let n = t.children.length > 0 ? ` { ${t.children.map(hi).join(", ")} } ` : "";
  return `${t.value}${n}`;
}
function or(t) {
  if (t.snapshot) {
    let n = t.snapshot,
      e = t._futureSnapshot;
    (t.snapshot = e),
      F(n.queryParams, e.queryParams) ||
        t.queryParamsSubject.next(e.queryParams),
      n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
      F(n.params, e.params) || t.paramsSubject.next(e.params),
      so(n.url, e.url) || t.urlSubject.next(e.url),
      F(n.data, e.data) || t.dataSubject.next(e.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function Ir(t, n) {
  let e = F(t.params, n.params) && lo(t.url, n.url),
    r = !t.parent != !n.parent;
  return e && !r && (!t.parent || Ir(t.parent, n.parent));
}
function fi(t) {
  return typeof t.title == "string" || t.title === null;
}
var No = new E(""),
  Lo = (() => {
    class t {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = g;
      activateEvents = new se();
      deactivateEvents = new se();
      attachEvents = new se();
      detachEvents = new se();
      routerOutletData = Jr(void 0);
      parentContexts = p(Ge);
      location = p(cn);
      changeDetector = p(nt);
      inputBinder = p(It, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: r, previousValue: i } = e.name;
          if (r) return;
          this.isTrackedInParentContexts(i) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new C(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new C(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new C(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, r) {
        (this.activated = e),
          (this._activatedRoute = r),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, r) {
        if (this.isActivated) throw new C(4013, !1);
        this._activatedRoute = e;
        let i = this.location,
          s = e.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          a = new Mr(e, c, i.injector, this.routerOutletData);
        (this.activated = i.createComponent(s, {
          index: i.length,
          injector: a,
          environmentInjector: r,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵdir = tt({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name", routerOutletData: [1, "routerOutletData"] },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        features: [et],
      });
    }
    return t;
  })(),
  Mr = class t {
    route;
    childContexts;
    parent;
    outletData;
    __ngOutletInjector(n) {
      return new t(this.route, this.childContexts, n, this.outletData);
    }
    constructor(n, e, r, i) {
      (this.route = n),
        (this.childContexts = e),
        (this.parent = r),
        (this.outletData = i);
    }
    get(n, e) {
      return n === K
        ? this.route
        : n === Ge
          ? this.childContexts
          : n === No
            ? this.outletData
            : this.parent.get(n, e);
    }
  },
  It = new E(""),
  qn = (() => {
    class t {
      outletDataSubscriptions = new Map();
      bindActivatedRouteToOutletComponent(e) {
        this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
      }
      unsubscribeFromRouteData(e) {
        this.outletDataSubscriptions.get(e)?.unsubscribe(),
          this.outletDataSubscriptions.delete(e);
      }
      subscribeToRouteData(e) {
        let { activatedRoute: r } = e,
          i = Xe([r.queryParams, r.params, r.data])
            .pipe(
              N(
                ([o, s, c], a) => (
                  (c = d(d(d({}, o), s), c)),
                  a === 0 ? f(c) : Promise.resolve(c)
                ),
              ),
            )
            .subscribe((o) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== r ||
                r.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = wn(r.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: c } of s.inputs)
                e.activatedComponentRef.setInput(c, o[c]);
            });
        this.outletDataSubscriptions.set(e, i);
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function jo(t, n, e) {
  let r = $e(t, n._root, e ? e._root : void 0);
  return new St(r, n);
}
function $e(t, n, e) {
  if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = ko(t, n, e);
    return new O(r, i);
  } else {
    if (t.shouldAttach(n.value)) {
      let o = t.retrieve(n.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = n.value),
          (s.children = n.children.map((c) => $e(t, c))),
          s
        );
      }
    }
    let r = $o(n.value),
      i = n.children.map((o) => $e(t, o));
    return new O(r, i);
  }
}
function ko(t, n, e) {
  return n.children.map((r) => {
    for (let i of e.children)
      if (t.shouldReuseRoute(r.value, i.value.snapshot)) return $e(t, r, i);
    return $e(t, r);
  });
}
function $o(t) {
  return new K(
    new P(t.url),
    new P(t.params),
    new P(t.queryParams),
    new P(t.fragment),
    new P(t.data),
    t.outlet,
    t.component,
    t,
  );
}
var ze = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) {
      (this.redirectTo = n), (this.navigationBehaviorOptions = e);
    }
  },
  pi = "ngNavigationCancelingError";
function Rt(t, n) {
  let { redirectTo: e, navigationBehaviorOptions: r } = re(n)
      ? { redirectTo: n, navigationBehaviorOptions: void 0 }
      : n,
    i = gi(!1, U.Redirect);
  return (i.url = e), (i.navigationBehaviorOptions = r), i;
}
function gi(t, n) {
  let e = new Error(`NavigationCancelingError: ${t || ""}`);
  return (e[pi] = !0), (e.cancellationCode = n), e;
}
function zo(t) {
  return vi(t) && re(t.url);
}
function vi(t) {
  return !!t && t[pi];
}
var Fo = (t, n, e, r) =>
    S(
      (i) => (
        new Ar(n, i.targetRouterState, i.currentRouterState, e, r).activate(t),
        i
      ),
    ),
  Ar = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) {
      (this.routeReuseStrategy = n),
        (this.futureState = e),
        (this.currState = r),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = o);
    }
    activate(n) {
      let e = this.futureState._root,
        r = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, r, n),
        or(this.futureState.root),
        this.activateChildRoutes(e, r, n);
    }
    deactivateChildRoutes(n, e, r) {
      let i = ce(e);
      n.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, i[s], r), delete i[s];
      }),
        Object.values(i).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, r);
        });
    }
    deactivateRoutes(n, e, r) {
      let i = n.value,
        o = e ? e.value : null;
      if (i === o)
        if (i.component) {
          let s = r.getContext(i.outlet);
          s && this.deactivateChildRoutes(n, e, s.children);
        } else this.deactivateChildRoutes(n, e, r);
      else o && this.deactivateRouteAndItsChildren(e, r);
    }
    deactivateRouteAndItsChildren(n, e) {
      n.value.component &&
      this.routeReuseStrategy.shouldDetach(n.value.snapshot)
        ? this.detachAndStoreRouteSubtree(n, e)
        : this.deactivateRouteAndOutlet(n, e);
    }
    detachAndStoreRouteSubtree(n, e) {
      let r = e.getContext(n.value.outlet),
        i = r && n.value.component ? r.children : e,
        o = ce(n);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      if (r && r.outlet) {
        let s = r.outlet.detach(),
          c = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, {
          componentRef: s,
          route: n,
          contexts: c,
        });
      }
    }
    deactivateRouteAndOutlet(n, e) {
      let r = e.getContext(n.value.outlet),
        i = r && n.value.component ? r.children : e,
        o = ce(n);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      r &&
        (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()),
        (r.attachRef = null),
        (r.route = null));
    }
    activateChildRoutes(n, e, r) {
      let i = ce(e);
      n.children.forEach((o) => {
        this.activateRoutes(o, i[o.value.outlet], r),
          this.forwardEvent(new Cr(o.value.snapshot));
      }),
        n.children.length && this.forwardEvent(new Sr(n.value.snapshot));
    }
    activateRoutes(n, e, r) {
      let i = n.value,
        o = e ? e.value : null;
      if ((or(i), i === o))
        if (i.component) {
          let s = r.getOrCreateContext(i.outlet);
          this.activateChildRoutes(n, e, s.children);
        } else this.activateChildRoutes(n, e, r);
      else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let c = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            s.children.onOutletReAttached(c.contexts),
            (s.attachRef = c.componentRef),
            (s.route = c.route.value),
            s.outlet && s.outlet.attach(c.componentRef, c.route.value),
            or(c.route.value),
            this.activateChildRoutes(n, null, s.children);
        } else
          (s.attachRef = null),
            (s.route = i),
            s.outlet && s.outlet.activateWith(i, s.injector),
            this.activateChildRoutes(n, null, s.children);
      } else this.activateChildRoutes(n, null, r);
    }
  },
  bt = class {
    path;
    route;
    constructor(n) {
      (this.path = n), (this.route = this.path[this.path.length - 1]);
    }
  },
  de = class {
    component;
    route;
    constructor(n, e) {
      (this.component = n), (this.route = e);
    }
  };
function Ho(t, n, e) {
  let r = t._root,
    i = n ? n._root : null;
  return Pe(r, i, e, [r.value]);
}
function Bo(t) {
  let n = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !n || n.length === 0 ? null : { node: t, guards: n };
}
function me(t, n) {
  let e = Symbol(),
    r = n.get(t, e);
  return r === e ? (typeof t == "function" && !Zr(t) ? t : n.get(t)) : r;
}
function Pe(
  t,
  n,
  e,
  r,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = ce(n);
  return (
    t.children.forEach((s) => {
      qo(s, o[s.value.outlet], e, r.concat([s.value]), i),
        delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, c]) => Ne(c, e.getContext(s), i)),
    i
  );
}
function qo(
  t,
  n,
  e,
  r,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = t.value,
    s = n ? n.value : null,
    c = e ? e.getContext(t.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let a = Vo(s, o, o.routeConfig.runGuardsAndResolvers);
    a
      ? i.canActivateChecks.push(new bt(r))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? Pe(t, n, c ? c.children : null, r, i) : Pe(t, n, e, r, i),
      a &&
        c &&
        c.outlet &&
        c.outlet.isActivated &&
        i.canDeactivateChecks.push(new de(c.outlet.component, s));
  } else
    s && Ne(n, c, i),
      i.canActivateChecks.push(new bt(r)),
      o.component
        ? Pe(t, null, c ? c.children : null, r, i)
        : Pe(t, null, e, r, i);
  return i;
}
function Vo(t, n, e) {
  if (typeof e == "function") return e(t, n);
  switch (e) {
    case "pathParamsChange":
      return !te(t.url, n.url);
    case "pathParamsOrQueryParamsChange":
      return !te(t.url, n.url) || !F(t.queryParams, n.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Ir(t, n) || !F(t.queryParams, n.queryParams);
    case "paramsChange":
    default:
      return !Ir(t, n);
  }
}
function Ne(t, n, e) {
  let r = ce(t),
    i = t.value;
  Object.entries(r).forEach(([o, s]) => {
    i.component
      ? n
        ? Ne(s, n.children.getContext(o), e)
        : Ne(s, null, e)
      : Ne(s, n, e);
  }),
    i.component
      ? n && n.outlet && n.outlet.isActivated
        ? e.canDeactivateChecks.push(new de(n.outlet.component, i))
        : e.canDeactivateChecks.push(new de(null, i))
      : e.canDeactivateChecks.push(new de(null, i));
}
function Ze(t) {
  return typeof t == "function";
}
function Wo(t) {
  return typeof t == "boolean";
}
function Go(t) {
  return t && Ze(t.canLoad);
}
function Zo(t) {
  return t && Ze(t.canActivate);
}
function Qo(t) {
  return t && Ze(t.canActivateChild);
}
function Yo(t) {
  return t && Ze(t.canDeactivate);
}
function Ko(t) {
  return t && Ze(t.canMatch);
}
function mi(t) {
  return t instanceof Hr || t?.name === "EmptyError";
}
var ut = Symbol("INITIAL_VALUE");
function ve() {
  return N((t) =>
    Xe(t.map((n) => n.pipe(oe(1), Wr(ut)))).pipe(
      S((n) => {
        for (let e of n)
          if (e !== !0) {
            if (e === ut) return ut;
            if (e === !1 || Xo(e)) return e;
          }
        return !0;
      }),
      J((n) => n !== ut),
      oe(1),
    ),
  );
}
function Xo(t) {
  return re(t) || t instanceof ze;
}
function Jo(t, n) {
  return T((e) => {
    let {
      targetSnapshot: r,
      currentSnapshot: i,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = e;
    return s.length === 0 && o.length === 0
      ? f(A(d({}, e), { guardsResult: !0 }))
      : es(s, r, i, t).pipe(
          T((c) => (c && Wo(c) ? ts(r, o, t, n) : f(c))),
          S((c) => A(d({}, e), { guardsResult: c })),
        );
  });
}
function es(t, n, e, r) {
  return D(t).pipe(
    T((i) => ss(i.component, i.route, e, n, r)),
    Z((i) => i !== !0, !0),
  );
}
function ts(t, n, e, r) {
  return D(n).pipe(
    ie((i) =>
      Br(
        ns(i.route.parent, r),
        rs(i.route, r),
        os(t, i.path, e),
        is(t, i.route, e),
      ),
    ),
    Z((i) => i !== !0, !0),
  );
}
function rs(t, n) {
  return t !== null && n && n(new wr(t)), f(!0);
}
function ns(t, n) {
  return t !== null && n && n(new yr(t)), f(!0);
}
function is(t, n, e) {
  let r = n.routeConfig ? n.routeConfig.canActivate : null;
  if (!r || r.length === 0) return f(!0);
  let i = r.map((o) =>
    Tt(() => {
      let s = We(n) ?? e,
        c = me(o, s),
        a = Zo(c) ? c.canActivate(n, t) : z(s, () => c(n, t));
      return X(a).pipe(Z());
    }),
  );
  return f(i).pipe(ve());
}
function os(t, n, e) {
  let r = n[n.length - 1],
    o = n
      .slice(0, n.length - 1)
      .reverse()
      .map((s) => Bo(s))
      .filter((s) => s !== null)
      .map((s) =>
        Tt(() => {
          let c = s.guards.map((a) => {
            let u = We(s.node) ?? e,
              l = me(a, u),
              h = Qo(l) ? l.canActivateChild(r, t) : z(u, () => l(r, t));
            return X(h).pipe(Z());
          });
          return f(c).pipe(ve());
        }),
      );
  return f(o).pipe(ve());
}
function ss(t, n, e, r, i) {
  let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return f(!0);
  let s = o.map((c) => {
    let a = We(n) ?? i,
      u = me(c, a),
      l = Yo(u) ? u.canDeactivate(t, n, e, r) : z(a, () => u(t, n, e, r));
    return X(l).pipe(Z());
  });
  return f(s).pipe(ve());
}
function as(t, n, e, r) {
  let i = n.canLoad;
  if (i === void 0 || i.length === 0) return f(!0);
  let o = i.map((s) => {
    let c = me(s, t),
      a = Go(c) ? c.canLoad(n, e) : z(t, () => c(n, e));
    return X(a);
  });
  return f(o).pipe(ve(), yi(r));
}
function yi(t) {
  return zr(
    I((n) => {
      if (typeof n != "boolean") throw Rt(t, n);
    }),
    S((n) => n === !0),
  );
}
function cs(t, n, e, r) {
  let i = n.canMatch;
  if (!i || i.length === 0) return f(!0);
  let o = i.map((s) => {
    let c = me(s, t),
      a = Ko(c) ? c.canMatch(n, e) : z(t, () => c(n, e));
    return X(a);
  });
  return f(o).pipe(ve(), yi(r));
}
var Fe = class {
    segmentGroup;
    constructor(n) {
      this.segmentGroup = n || null;
    }
  },
  He = class extends Error {
    urlTree;
    constructor(n) {
      super(), (this.urlTree = n);
    }
  };
function ae(t) {
  return Se(new Fe(t));
}
function us(t) {
  return Se(new C(4e3, !1));
}
function ls(t) {
  return Se(gi(!1, U.GuardRejected));
}
var Dr = class {
    urlSerializer;
    urlTree;
    constructor(n, e) {
      (this.urlSerializer = n), (this.urlTree = e);
    }
    lineralizeSegments(n, e) {
      let r = [],
        i = e.root;
      for (;;) {
        if (((r = r.concat(i.segments)), i.numberOfChildren === 0)) return f(r);
        if (i.numberOfChildren > 1 || !i.children[g])
          return us(`${n.redirectTo}`);
        i = i.children[g];
      }
    }
    applyRedirectCommands(n, e, r, i, o) {
      if (typeof e != "string") {
        let c = e,
          {
            queryParams: a,
            fragment: u,
            routeConfig: l,
            url: h,
            outlet: m,
            params: b,
            data: M,
            title: V,
          } = i,
          x = z(o, () =>
            c({
              params: b,
              data: M,
              queryParams: a,
              fragment: u,
              routeConfig: l,
              url: h,
              outlet: m,
              title: V,
            }),
          );
        if (x instanceof q) throw new He(x);
        e = x;
      }
      let s = this.applyRedirectCreateUrlTree(
        e,
        this.urlSerializer.parse(e),
        n,
        r,
      );
      if (e[0] === "/") throw new He(s);
      return s;
    }
    applyRedirectCreateUrlTree(n, e, r, i) {
      let o = this.createSegmentGroup(n, e.root, r, i);
      return new q(
        o,
        this.createQueryParams(e.queryParams, this.urlTree.queryParams),
        e.fragment,
      );
    }
    createQueryParams(n, e) {
      let r = {};
      return (
        Object.entries(n).forEach(([i, o]) => {
          if (typeof o == "string" && o[0] === ":") {
            let c = o.substring(1);
            r[i] = e[c];
          } else r[i] = o;
        }),
        r
      );
    }
    createSegmentGroup(n, e, r, i) {
      let o = this.createSegments(n, e.segments, r, i),
        s = {};
      return (
        Object.entries(e.children).forEach(([c, a]) => {
          s[c] = this.createSegmentGroup(n, a, r, i);
        }),
        new v(o, s)
      );
    }
    createSegments(n, e, r, i) {
      return e.map((o) =>
        o.path[0] === ":"
          ? this.findPosParam(n, o, i)
          : this.findOrReturn(o, r),
      );
    }
    findPosParam(n, e, r) {
      let i = r[e.path.substring(1)];
      if (!i) throw new C(4001, !1);
      return i;
    }
    findOrReturn(n, e) {
      let r = 0;
      for (let i of e) {
        if (i.path === n.path) return e.splice(r), i;
        r++;
      }
      return n;
    }
  },
  Tr = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function ds(t, n, e, r, i) {
  let o = Si(t, n, e);
  return o.matched
    ? ((r = Po(n, r)),
      cs(r, n, e, i).pipe(S((s) => (s === !0 ? o : d({}, Tr)))))
    : f(o);
}
function Si(t, n, e) {
  if (n.path === "**") return hs(e);
  if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0)
      ? d({}, Tr)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: e,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (n.matcher || oo)(e, t, n);
  if (!i) return d({}, Tr);
  let o = {};
  Object.entries(i.posParams ?? {}).forEach(([c, a]) => {
    o[c] = a.path;
  });
  let s =
    i.consumed.length > 0
      ? d(d({}, o), i.consumed[i.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: e.slice(i.consumed.length),
    parameters: s,
    positionalParamSegments: i.posParams ?? {},
  };
}
function hs(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? Xn(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Vn(t, n, e, r) {
  return e.length > 0 && gs(t, e, r)
    ? {
        segmentGroup: new v(n, ps(r, new v(e, t.children))),
        slicedSegments: [],
      }
    : e.length === 0 && vs(t, e, r)
      ? {
          segmentGroup: new v(t.segments, fs(t, e, r, t.children)),
          slicedSegments: e,
        }
      : { segmentGroup: new v(t.segments, t.children), slicedSegments: e };
}
function fs(t, n, e, r) {
  let i = {};
  for (let o of e)
    if (Mt(t, n, o) && !r[k(o)]) {
      let s = new v([], {});
      i[k(o)] = s;
    }
  return d(d({}, r), i);
}
function ps(t, n) {
  let e = {};
  e[g] = n;
  for (let r of t)
    if (r.path === "" && k(r) !== g) {
      let i = new v([], {});
      e[k(r)] = i;
    }
  return e;
}
function gs(t, n, e) {
  return e.some((r) => Mt(t, n, r) && k(r) !== g);
}
function vs(t, n, e) {
  return e.some((r) => Mt(t, n, r));
}
function Mt(t, n, e) {
  return (t.hasChildren() || n.length > 0) && e.pathMatch === "full"
    ? !1
    : e.path === "";
}
function ms(t, n, e) {
  return n.length === 0 && !t.children[e];
}
var Or = class {};
function ys(t, n, e, r, i, o, s = "emptyOnly") {
  return new Ur(t, n, e, r, i, s, o).recognize();
}
var Ss = 31,
  Ur = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, c) {
      (this.injector = n),
        (this.configLoader = e),
        (this.rootComponentType = r),
        (this.config = i),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = c),
        (this.applyRedirects = new Dr(this.urlSerializer, this.urlTree));
    }
    noMatchError(n) {
      return new C(4002, `'${n.segmentGroup}'`);
    }
    recognize() {
      let n = Vn(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(n).pipe(
        S(({ children: e, rootSnapshot: r }) => {
          let i = new O(r, e),
            o = new Ct("", i),
            s = Io(r, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            { state: o, tree: s }
          );
        }),
      );
    }
    match(n) {
      let e = new le(
        [],
        Object.freeze({}),
        Object.freeze(d({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        g,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, n, g, e).pipe(
        S((r) => ({ children: r, rootSnapshot: e })),
        ne((r) => {
          if (r instanceof He)
            return (this.urlTree = r.urlTree), this.match(r.urlTree.root);
          throw r instanceof Fe ? this.noMatchError(r) : r;
        }),
      );
    }
    processSegmentGroup(n, e, r, i, o) {
      return r.segments.length === 0 && r.hasChildren()
        ? this.processChildren(n, e, r, o)
        : this.processSegment(n, e, r, r.segments, i, !0, o).pipe(
            S((s) => (s instanceof O ? [s] : [])),
          );
    }
    processChildren(n, e, r, i) {
      let o = [];
      for (let s of Object.keys(r.children))
        s === "primary" ? o.unshift(s) : o.push(s);
      return D(o).pipe(
        ie((s) => {
          let c = r.children[s],
            a = _o(e, s);
          return this.processSegmentGroup(n, a, c, s, i);
        }),
        Vr((s, c) => (s.push(...c), s)),
        Ot(null),
        qr(),
        T((s) => {
          if (s === null) return ae(r);
          let c = wi(s);
          return ws(c), f(c);
        }),
      );
    }
    processSegment(n, e, r, i, o, s, c) {
      return D(e).pipe(
        ie((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? n,
            e,
            a,
            r,
            i,
            o,
            s,
            c,
          ).pipe(
            ne((u) => {
              if (u instanceof Fe) return f(null);
              throw u;
            }),
          ),
        ),
        Z((a) => !!a),
        ne((a) => {
          if (mi(a)) return ms(r, i, o) ? f(new Or()) : ae(r);
          throw a;
        }),
      );
    }
    processSegmentAgainstRoute(n, e, r, i, o, s, c, a) {
      return k(r) !== s && (s === g || !Mt(i, o, r))
        ? ae(i)
        : r.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(n, i, r, o, s, a)
          : this.allowRedirects && c
            ? this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, a)
            : ae(i);
    }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, c) {
      let {
        matched: a,
        parameters: u,
        consumedSegments: l,
        positionalParamSegments: h,
        remainingSegments: m,
      } = Si(e, i, o);
      if (!a) return ae(e);
      typeof i.redirectTo == "string" &&
        i.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > Ss && (this.allowRedirects = !1));
      let b = new le(
          o,
          u,
          Object.freeze(d({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Wn(i),
          k(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          Gn(i),
        ),
        M = wt(b, c, this.paramsInheritanceStrategy);
      (b.params = Object.freeze(M.params)), (b.data = Object.freeze(M.data));
      let V = this.applyRedirects.applyRedirectCommands(
        l,
        i.redirectTo,
        h,
        b,
        n,
      );
      return this.applyRedirects
        .lineralizeSegments(i, V)
        .pipe(T((x) => this.processSegment(n, r, e, x.concat(m), s, !1, c)));
    }
    matchSegmentAgainstRoute(n, e, r, i, o, s) {
      let c = ds(e, r, i, n, this.urlSerializer);
      return (
        r.path === "**" && (e.children = {}),
        c.pipe(
          N((a) =>
            a.matched
              ? ((n = r._injector ?? n),
                this.getChildConfig(n, r, i).pipe(
                  N(({ routes: u }) => {
                    let l = r._loadedInjector ?? n,
                      {
                        parameters: h,
                        consumedSegments: m,
                        remainingSegments: b,
                      } = a,
                      M = new le(
                        m,
                        h,
                        Object.freeze(d({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Wn(r),
                        k(r),
                        r.component ?? r._loadedComponent ?? null,
                        r,
                        Gn(r),
                      ),
                      V = wt(M, s, this.paramsInheritanceStrategy);
                    (M.params = Object.freeze(V.params)),
                      (M.data = Object.freeze(V.data));
                    let { segmentGroup: x, slicedSegments: ye } = Vn(
                      e,
                      m,
                      b,
                      u,
                    );
                    if (ye.length === 0 && x.hasChildren())
                      return this.processChildren(l, u, x, M).pipe(
                        S((Ke) => new O(M, Ke)),
                      );
                    if (u.length === 0 && ye.length === 0)
                      return f(new O(M, []));
                    let xi = k(r) === o;
                    return this.processSegment(
                      l,
                      u,
                      x,
                      ye,
                      xi ? g : o,
                      !0,
                      M,
                    ).pipe(S((Ke) => new O(M, Ke instanceof O ? [Ke] : [])));
                  }),
                ))
              : ae(e),
          ),
        )
      );
    }
    getChildConfig(n, e, r) {
      return e.children
        ? f({ routes: e.children, injector: n })
        : e.loadChildren
          ? e._loadedRoutes !== void 0
            ? f({ routes: e._loadedRoutes, injector: e._loadedInjector })
            : as(n, e, r, this.urlSerializer).pipe(
                T((i) =>
                  i
                    ? this.configLoader.loadChildren(n, e).pipe(
                        I((o) => {
                          (e._loadedRoutes = o.routes),
                            (e._loadedInjector = o.injector);
                        }),
                      )
                    : ls(e),
                ),
              )
          : f({ routes: [], injector: n });
    }
  };
function ws(t) {
  t.sort((n, e) =>
    n.value.outlet === g
      ? -1
      : e.value.outlet === g
        ? 1
        : n.value.outlet.localeCompare(e.value.outlet),
  );
}
function Cs(t) {
  let n = t.value.routeConfig;
  return n && n.path === "";
}
function wi(t) {
  let n = [],
    e = new Set();
  for (let r of t) {
    if (!Cs(r)) {
      n.push(r);
      continue;
    }
    let i = n.find((o) => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
  }
  for (let r of e) {
    let i = wi(r.children);
    n.push(new O(r.value, i));
  }
  return n.filter((r) => !e.has(r));
}
function Wn(t) {
  return t.data || {};
}
function Gn(t) {
  return t.resolve || {};
}
function Rs(t, n, e, r, i, o) {
  return T((s) =>
    ys(t, n, e, r, s.extractedUrl, i, o).pipe(
      S(({ state: c, tree: a }) =>
        A(d({}, s), { targetSnapshot: c, urlAfterRedirects: a }),
      ),
    ),
  );
}
function bs(t, n) {
  return T((e) => {
    let {
      targetSnapshot: r,
      guards: { canActivateChecks: i },
    } = e;
    if (!i.length) return f(e);
    let o = new Set(i.map((a) => a.route)),
      s = new Set();
    for (let a of o) if (!s.has(a)) for (let u of Ci(a)) s.add(u);
    let c = 0;
    return D(s).pipe(
      ie((a) =>
        o.has(a)
          ? Es(a, r, t, n)
          : ((a.data = wt(a, a.parent, t).resolve), f(void 0)),
      ),
      I(() => c++),
      Ut(1),
      T((a) => (c === s.size ? f(e) : G)),
    );
  });
}
function Ci(t) {
  let n = t.children.map((e) => Ci(e)).flat();
  return [t, ...n];
}
function Es(t, n, e, r) {
  let i = t.routeConfig,
    o = t._resolve;
  return (
    i?.title !== void 0 && !fi(i) && (o[qe] = i.title),
    Is(o, t, n, r).pipe(
      S(
        (s) => (
          (t._resolvedData = s), (t.data = wt(t, t.parent, e).resolve), null
        ),
      ),
    )
  );
}
function Is(t, n, e, r) {
  let i = cr(t);
  if (i.length === 0) return f({});
  let o = {};
  return D(i).pipe(
    T((s) =>
      Ms(t[s], n, e, r).pipe(
        Z(),
        I((c) => {
          if (c instanceof ze) throw Rt(new fe(), c);
          o[s] = c;
        }),
      ),
    ),
    Ut(1),
    S(() => o),
    ne((s) => (mi(s) ? G : Se(s))),
  );
}
function Ms(t, n, e, r) {
  let i = We(n) ?? r,
    o = me(t, i),
    s = o.resolve ? o.resolve(n, e) : z(i, () => o(n, e));
  return X(s);
}
function sr(t) {
  return N((n) => {
    let e = t(n);
    return e ? D(e).pipe(S(() => n)) : f(n);
  });
}
var Ri = (() => {
    class t {
      buildTitle(e) {
        let r,
          i = e.root;
        for (; i !== void 0; )
          (r = this.getResolvedTitleForRoute(i) ?? r),
            (i = i.children.find((o) => o.outlet === g));
        return r;
      }
      getResolvedTitleForRoute(e) {
        return e.data[qe];
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: () => p(As), providedIn: "root" });
    }
    return t;
  })(),
  As = (() => {
    class t extends Ri {
      title;
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let r = this.buildTitle(e);
        r !== void 0 && this.title.setTitle(r);
      }
      static ɵfac = function (r) {
        return new (r || t)(y($n));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  Qe = new E("", { providedIn: "root", factory: () => ({}) }),
  Ds = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵcmp = ln({
        type: t,
        selectors: [["ng-component"]],
        exportAs: ["emptyRouterOutlet"],
        decls: 1,
        vars: 0,
        template: function (r, i) {
          r & 1 && pn(0, "router-outlet");
        },
        dependencies: [Lo],
        encapsulation: 2,
      });
    }
    return t;
  })();
function xr(t) {
  let n = t.children && t.children.map(xr),
    e = n ? A(d({}, t), { children: n }) : d({}, t);
  return (
    !e.component &&
      !e.loadComponent &&
      (n || e.loadChildren) &&
      e.outlet &&
      e.outlet !== g &&
      (e.component = Ds),
    e
  );
}
var Be = new E(""),
  Nr = (() => {
    class t {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = p(rt);
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return f(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let r = X(e.loadComponent()).pipe(
            S(bi),
            I((o) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = o);
            }),
            Je(() => {
              this.componentLoaders.delete(e);
            }),
          ),
          i = new Dt(r, () => new W()).pipe(At());
        return this.componentLoaders.set(e, i), i;
      }
      loadChildren(e, r) {
        if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
        if (r._loadedRoutes)
          return f({ routes: r._loadedRoutes, injector: r._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(r);
        let o = Ts(r, this.compiler, e, this.onLoadEndListener).pipe(
            Je(() => {
              this.childrenLoaders.delete(r);
            }),
          ),
          s = new Dt(o, () => new W()).pipe(At());
        return this.childrenLoaders.set(r, s), s;
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function Ts(t, n, e, r) {
  return X(t.loadChildren()).pipe(
    S(bi),
    T((i) =>
      i instanceof un || Array.isArray(i) ? f(i) : D(n.compileModuleAsync(i)),
    ),
    S((i) => {
      r && r(t);
      let o,
        s,
        c = !1;
      return (
        Array.isArray(i)
          ? ((s = i), (c = !0))
          : ((o = i.create(e).injector),
            (s = o.get(Be, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(xr), injector: o }
      );
    }),
  );
}
function Os(t) {
  return t && typeof t == "object" && "default" in t;
}
function bi(t) {
  return Os(t) ? t.default : t;
}
var Lr = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: () => p(Us), providedIn: "root" });
    }
    return t;
  })(),
  Us = (() => {
    class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, r) {
        return e;
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  Ei = new E(""),
  Ii = new E("");
function Ps(t, n, e) {
  let r = t.get(Ii),
    i = t.get(j);
  return t.get(Q).runOutsideAngular(() => {
    if (!i.startViewTransition || r.skipNextTransition)
      return (r.skipNextTransition = !1), new Promise((u) => setTimeout(u));
    let o,
      s = new Promise((u) => {
        o = u;
      }),
      c = i.startViewTransition(() => (o(), _s(t))),
      { onViewTransitionCreated: a } = r;
    return a && z(t, () => a({ transition: c, from: n, to: e })), s;
  });
}
function _s(t) {
  return new Promise((n) => {
    nn({ read: () => setTimeout(n) }, { injector: t });
  });
}
var Mi = new E(""),
  jr = (() => {
    class t {
      currentNavigation = null;
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new W();
      transitionAbortSubject = new W();
      configLoader = p(Nr);
      environmentInjector = p(Ce);
      urlSerializer = p(Ve);
      rootContexts = p(Ge);
      location = p(Ae);
      inputBindingEnabled = p(It, { optional: !0 }) !== null;
      titleStrategy = p(Ri);
      options = p(Qe, { optional: !0 }) || {};
      paramsInheritanceStrategy =
        this.options.paramsInheritanceStrategy || "emptyOnly";
      urlHandlingStrategy = p(Lr);
      createViewTransition = p(Ei, { optional: !0 });
      navigationErrorHandler = p(Mi, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => f(void 0);
      rootComponentType = null;
      constructor() {
        let e = (i) => this.events.next(new vr(i)),
          r = (i) => this.events.next(new mr(i));
        (this.configLoader.onLoadEndListener = r),
          (this.configLoader.onLoadStartListener = e);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let r = ++this.navigationId;
        this.transitions?.next(
          A(d(d({}, this.transitions.value), e), { id: r }),
        );
      }
      setupNavigations(e, r, i) {
        return (
          (this.transitions = new P({
            id: 0,
            currentUrlTree: r,
            currentRawUrl: r,
            extractedUrl: this.urlHandlingStrategy.extract(r),
            urlAfterRedirects: this.urlHandlingStrategy.extract(r),
            rawUrl: r,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: xe,
            restoredState: null,
            currentSnapshot: i.snapshot,
            targetSnapshot: null,
            currentRouterState: i,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            J((o) => o.id !== 0),
            S((o) =>
              A(d({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              }),
            ),
            N((o) => {
              let s = !1,
                c = !1;
              return f(o).pipe(
                N((a) => {
                  if (this.navigationId > o.id)
                    return (
                      this.cancelNavigationTransition(
                        o,
                        "",
                        U.SupersededByNewNavigation,
                      ),
                      G
                    );
                  (this.currentTransition = o),
                    (this.currentNavigation = {
                      id: a.id,
                      initialUrl: a.rawUrl,
                      extractedUrl: a.extractedUrl,
                      targetBrowserUrl:
                        typeof a.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(a.extras.browserUrl)
                          : a.extras.browserUrl,
                      trigger: a.source,
                      extras: a.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? A(d({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let u =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    l = a.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!u && l !== "reload") {
                    let h = "";
                    return (
                      this.events.next(
                        new Y(
                          a.id,
                          this.urlSerializer.serialize(a.rawUrl),
                          h,
                          gt.IgnoredSameUrlNavigation,
                        ),
                      ),
                      a.resolve(!1),
                      G
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                    return f(a).pipe(
                      N((h) => {
                        let m = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new pe(
                              h.id,
                              this.urlSerializer.serialize(h.extractedUrl),
                              h.source,
                              h.restoredState,
                            ),
                          ),
                          m !== this.transitions?.getValue()
                            ? G
                            : Promise.resolve(h)
                        );
                      }),
                      Rs(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      I((h) => {
                        (o.targetSnapshot = h.targetSnapshot),
                          (o.urlAfterRedirects = h.urlAfterRedirects),
                          (this.currentNavigation = A(
                            d({}, this.currentNavigation),
                            { finalUrl: h.urlAfterRedirects },
                          ));
                        let m = new vt(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(m);
                      }),
                    );
                  if (
                    u &&
                    this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)
                  ) {
                    let {
                        id: h,
                        extractedUrl: m,
                        source: b,
                        restoredState: M,
                        extras: V,
                      } = a,
                      x = new pe(h, this.urlSerializer.serialize(m), b, M);
                    this.events.next(x);
                    let ye = di(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = o =
                        A(d({}, a), {
                          targetSnapshot: ye,
                          urlAfterRedirects: m,
                          extras: A(d({}, V), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = m),
                      f(o)
                    );
                  } else {
                    let h = "";
                    return (
                      this.events.next(
                        new Y(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          h,
                          gt.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      a.resolve(!1),
                      G
                    );
                  }
                }),
                I((a) => {
                  let u = new hr(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot,
                  );
                  this.events.next(u);
                }),
                S(
                  (a) => (
                    (this.currentTransition = o =
                      A(d({}, a), {
                        guards: Ho(
                          a.targetSnapshot,
                          a.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    o
                  ),
                ),
                Jo(this.environmentInjector, (a) => this.events.next(a)),
                I((a) => {
                  if (
                    ((o.guardsResult = a.guardsResult),
                    a.guardsResult && typeof a.guardsResult != "boolean")
                  )
                    throw Rt(this.urlSerializer, a.guardsResult);
                  let u = new fr(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot,
                    !!a.guardsResult,
                  );
                  this.events.next(u);
                }),
                J((a) =>
                  a.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(a, "", U.GuardRejected),
                      !1),
                ),
                sr((a) => {
                  if (a.guards.canActivateChecks.length)
                    return f(a).pipe(
                      I((u) => {
                        let l = new pr(
                          u.id,
                          this.urlSerializer.serialize(u.extractedUrl),
                          this.urlSerializer.serialize(u.urlAfterRedirects),
                          u.targetSnapshot,
                        );
                        this.events.next(l);
                      }),
                      N((u) => {
                        let l = !1;
                        return f(u).pipe(
                          bs(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          I({
                            next: () => (l = !0),
                            complete: () => {
                              l ||
                                this.cancelNavigationTransition(
                                  u,
                                  "",
                                  U.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      I((u) => {
                        let l = new gr(
                          u.id,
                          this.urlSerializer.serialize(u.extractedUrl),
                          this.urlSerializer.serialize(u.urlAfterRedirects),
                          u.targetSnapshot,
                        );
                        this.events.next(l);
                      }),
                    );
                }),
                sr((a) => {
                  let u = (l) => {
                    let h = [];
                    l.routeConfig?.loadComponent &&
                      !l.routeConfig._loadedComponent &&
                      h.push(
                        this.configLoader.loadComponent(l.routeConfig).pipe(
                          I((m) => {
                            l.component = m;
                          }),
                          S(() => {}),
                        ),
                      );
                    for (let m of l.children) h.push(...u(m));
                    return h;
                  };
                  return Xe(u(a.targetSnapshot.root)).pipe(Ot(null), oe(1));
                }),
                sr(() => this.afterPreactivation()),
                N(() => {
                  let { currentSnapshot: a, targetSnapshot: u } = o,
                    l = this.createViewTransition?.(
                      this.environmentInjector,
                      a.root,
                      u.root,
                    );
                  return l ? D(l).pipe(S(() => o)) : f(o);
                }),
                S((a) => {
                  let u = jo(
                    e.routeReuseStrategy,
                    a.targetSnapshot,
                    a.currentRouterState,
                  );
                  return (
                    (this.currentTransition = o =
                      A(d({}, a), { targetRouterState: u })),
                    (this.currentNavigation.targetRouterState = u),
                    o
                  );
                }),
                I(() => {
                  this.events.next(new ke());
                }),
                Fo(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (a) => this.events.next(a),
                  this.inputBindingEnabled,
                ),
                oe(1),
                I({
                  next: (a) => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new $(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          this.urlSerializer.serialize(a.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        a.targetRouterState.snapshot,
                      ),
                      a.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                Gr(
                  this.transitionAbortSubject.pipe(
                    I((a) => {
                      throw a;
                    }),
                  ),
                ),
                Je(() => {
                  !s &&
                    !c &&
                    this.cancelNavigationTransition(
                      o,
                      "",
                      U.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === o.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                ne((a) => {
                  if (((c = !0), vi(a)))
                    this.events.next(
                      new B(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        a.message,
                        a.cancellationCode,
                      ),
                    ),
                      zo(a)
                        ? this.events.next(
                            new ge(a.url, a.navigationBehaviorOptions),
                          )
                        : o.resolve(!1);
                  else {
                    let u = new je(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      a,
                      o.targetSnapshot ?? void 0,
                    );
                    try {
                      let l = z(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(u),
                      );
                      if (l instanceof ze) {
                        let { message: h, cancellationCode: m } = Rt(
                          this.urlSerializer,
                          l,
                        );
                        this.events.next(
                          new B(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            h,
                            m,
                          ),
                        ),
                          this.events.next(
                            new ge(l.redirectTo, l.navigationBehaviorOptions),
                          );
                      } else throw (this.events.next(u), a);
                    } catch (l) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(l);
                    }
                  }
                  return G;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(e, r, i) {
        let o = new B(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i);
        this.events.next(o), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          r =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== r?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function xs(t) {
  return t !== xe;
}
var Ns = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: () => p(Ls), providedIn: "root" });
    }
    return t;
  })(),
  Pr = class {
    shouldDetach(n) {
      return !1;
    }
    store(n, e) {}
    shouldAttach(n) {
      return !1;
    }
    retrieve(n) {
      return null;
    }
    shouldReuseRoute(n, e) {
      return n.routeConfig === e.routeConfig;
    }
  },
  Ls = (() => {
    class t extends Pr {
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = Lt(t)))(i || t);
        };
      })();
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  Ai = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: () => p(js), providedIn: "root" });
    }
    return t;
  })(),
  js = (() => {
    class t extends Ai {
      location = p(Ae);
      urlSerializer = p(Ve);
      options = p(Qe, { optional: !0 }) || {};
      canceledNavigationResolution =
        this.options.canceledNavigationResolution || "replace";
      urlHandlingStrategy = p(Lr);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      currentUrlTree = new q();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      routerState = di(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((r) => {
          r.type === "popstate" && e(r.url, r.state);
        });
      }
      handleRouterEvent(e, r) {
        if (e instanceof pe) this.stateMemento = this.createStateMemento();
        else if (e instanceof Y) this.rawUrlTree = r.initialUrl;
        else if (e instanceof vt) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !r.extras.skipLocationChange
          ) {
            let i = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl);
            this.setBrowserUrl(r.targetBrowserUrl ?? i, r);
          }
        } else
          e instanceof ke
            ? ((this.currentUrlTree = r.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                r.finalUrl,
                r.initialUrl,
              )),
              (this.routerState = r.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !r.extras.skipLocationChange &&
                this.setBrowserUrl(r.targetBrowserUrl ?? this.rawUrlTree, r))
            : e instanceof B &&
                (e.code === U.GuardRejected || e.code === U.NoDataFromResolver)
              ? this.restoreHistory(r)
              : e instanceof je
                ? this.restoreHistory(r, !0)
                : e instanceof $ &&
                  ((this.lastSuccessfulId = e.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, r) {
        let i = e instanceof q ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(i) || r.extras.replaceUrl) {
          let o = this.browserPageId,
            s = d(d({}, r.extras.state), this.generateNgRouterState(r.id, o));
          this.location.replaceState(i, "", s);
        } else {
          let o = d(
            d({}, r.extras.state),
            this.generateNgRouterState(r.id, this.browserPageId + 1),
          );
          this.location.go(i, "", o);
        }
      }
      restoreHistory(e, r = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let i = this.browserPageId,
            o = this.currentPageId - i;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === e.finalUrl &&
              o === 0 &&
              (this.resetState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (r && this.resetState(e), this.resetUrlToCurrentUrlTree());
      }
      resetState(e) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(e, r) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: r }
          : { navigationId: e };
      }
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = Lt(t)))(i || t);
        };
      })();
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function Di(t, n) {
  t.events
    .pipe(
      J(
        (e) =>
          e instanceof $ || e instanceof B || e instanceof je || e instanceof Y,
      ),
      S((e) =>
        e instanceof $ || e instanceof Y
          ? 0
          : (
                e instanceof B
                  ? e.code === U.Redirect ||
                    e.code === U.SupersededByNewNavigation
                  : !1
              )
            ? 2
            : 1,
      ),
      J((e) => e !== 2),
      oe(1),
    )
    .subscribe(() => {
      n();
    });
}
var ks = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  $s = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  H = (() => {
    class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = p(qt);
      stateManager = p(Ai);
      options = p(Qe, { optional: !0 }) || {};
      pendingTasks = p(Xr);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      navigationTransitions = p(jr);
      urlSerializer = p(Ve);
      location = p(Ae);
      urlHandlingStrategy = p(Lr);
      _events = new W();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = p(Ns);
      onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      config = p(Be, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!p(It, { optional: !0 });
      constructor() {
        this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (e) => {
                this.console.warn(e);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      eventsSubscription = new $r();
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((r) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (i !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(r, o),
                r instanceof B &&
                  r.code !== U.Redirect &&
                  r.code !== U.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (r instanceof $) this.navigated = !0;
              else if (r instanceof ge) {
                let s = r.navigationBehaviorOptions,
                  c = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl),
                  a = d(
                    {
                      browserUrl: i.extras.browserUrl,
                      info: i.extras.info,
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl:
                        i.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        xs(i.source),
                    },
                    s,
                  );
                this.scheduleNavigation(c, xe, null, a, {
                  resolve: i.resolve,
                  reject: i.reject,
                  promise: i.promise,
                });
              }
            }
            Fs(r) && this._events.next(r);
          } catch (i) {
            this.navigationTransitions.transitionAbortSubject.next(i);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e),
          (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              xe,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, r) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, "popstate", r);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(e, r, i) {
        let o = { replaceUrl: !0 },
          s = i?.navigationId ? i : null;
        if (i) {
          let a = d({}, i);
          delete a.navigationId,
            delete a.ɵrouterPageId,
            Object.keys(a).length !== 0 && (o.state = a);
        }
        let c = this.parseUrl(e);
        this.scheduleNavigation(c, r, s, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(xr)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, r = {}) {
        let {
            relativeTo: i,
            queryParams: o,
            fragment: s,
            queryParamsHandling: c,
            preserveFragment: a,
          } = r,
          u = a ? this.currentUrlTree.fragment : s,
          l = null;
        switch (c ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            l = d(d({}, this.currentUrlTree.queryParams), o);
            break;
          case "preserve":
            l = this.currentUrlTree.queryParams;
            break;
          default:
            l = o || null;
        }
        l !== null && (l = this.removeEmptyProps(l));
        let h;
        try {
          let m = i ? i.snapshot : this.routerState.snapshot.root;
          h = ai(m);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (h = this.currentUrlTree.root);
        }
        return ci(h, e, l, u ?? null);
      }
      navigateByUrl(e, r = { skipLocationChange: !1 }) {
        let i = re(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(o, xe, null, r);
      }
      navigate(e, r = { skipLocationChange: !1 }) {
        return zs(e), this.navigateByUrl(this.createUrlTree(e, r), r);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(e, r) {
        let i;
        if (
          (r === !0 ? (i = d({}, ks)) : r === !1 ? (i = d({}, $s)) : (i = r),
          re(e))
        )
          return zn(this.currentUrlTree, e, i);
        let o = this.parseUrl(e);
        return zn(this.currentUrlTree, o, i);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (r, [i, o]) => (o != null && (r[i] = o), r),
          {},
        );
      }
      scheduleNavigation(e, r, i, o, s) {
        if (this.disposed) return Promise.resolve(!1);
        let c, a, u;
        s
          ? ((c = s.resolve), (a = s.reject), (u = s.promise))
          : (u = new Promise((h, m) => {
              (c = h), (a = m);
            }));
        let l = this.pendingTasks.add();
        return (
          Di(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(l));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: r,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: c,
            reject: a,
            promise: u,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          u.catch((h) => Promise.reject(h))
        );
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function zs(t) {
  for (let n = 0; n < t.length; n++) if (t[n] == null) throw new C(4008, !1);
}
function Fs(t) {
  return !(t instanceof ke) && !(t instanceof ge);
}
var Zn = (() => {
    class t {
      router;
      route;
      tabIndexAttribute;
      renderer;
      el;
      locationStrategy;
      href = null;
      target;
      queryParams;
      fragment;
      queryParamsHandling;
      state;
      info;
      relativeTo;
      isAnchorElement;
      subscription;
      onChanges = new W();
      constructor(e, r, i, o, s, c) {
        (this.router = e),
          (this.route = r),
          (this.tabIndexAttribute = i),
          (this.renderer = o),
          (this.el = s),
          (this.locationStrategy = c);
        let a = s.nativeElement.tagName?.toLowerCase();
        (this.isAnchorElement = a === "a" || a === "area"),
          this.isAnchorElement
            ? (this.subscription = e.events.subscribe((u) => {
                u instanceof $ && this.updateHref();
              }))
            : this.setTabIndexIfNotOnNativeEl("0");
      }
      preserveFragment = !1;
      skipLocationChange = !1;
      replaceUrl = !1;
      setTabIndexIfNotOnNativeEl(e) {
        this.tabIndexAttribute != null ||
          this.isAnchorElement ||
          this.applyAttributeValue("tabindex", e);
      }
      ngOnChanges(e) {
        this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
      }
      routerLinkInput = null;
      set routerLink(e) {
        e == null
          ? ((this.routerLinkInput = null),
            this.setTabIndexIfNotOnNativeEl(null))
          : (re(e)
              ? (this.routerLinkInput = e)
              : (this.routerLinkInput = Array.isArray(e) ? e : [e]),
            this.setTabIndexIfNotOnNativeEl("0"));
      }
      onClick(e, r, i, o, s) {
        let c = this.urlTree;
        if (
          c === null ||
          (this.isAnchorElement &&
            (e !== 0 ||
              r ||
              i ||
              o ||
              s ||
              (typeof this.target == "string" && this.target != "_self")))
        )
          return !0;
        let a = {
          skipLocationChange: this.skipLocationChange,
          replaceUrl: this.replaceUrl,
          state: this.state,
          info: this.info,
        };
        return this.router.navigateByUrl(c, a), !this.isAnchorElement;
      }
      ngOnDestroy() {
        this.subscription?.unsubscribe();
      }
      updateHref() {
        let e = this.urlTree;
        this.href =
          e !== null && this.locationStrategy
            ? this.locationStrategy?.prepareExternalUrl(
                this.router.serializeUrl(e),
              )
            : null;
        let r =
          this.href === null
            ? null
            : on(
                this.href,
                this.el.nativeElement.tagName.toLowerCase(),
                "href",
              );
        this.applyAttributeValue("href", r);
      }
      applyAttributeValue(e, r) {
        let i = this.renderer,
          o = this.el.nativeElement;
        r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e);
      }
      get urlTree() {
        return this.routerLinkInput === null
          ? null
          : re(this.routerLinkInput)
            ? this.routerLinkInput
            : this.router.createUrlTree(this.routerLinkInput, {
                relativeTo:
                  this.relativeTo !== void 0 ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: this.preserveFragment,
              });
      }
      static ɵfac = function (r) {
        return new (r || t)(L(H), L(K), Kr("tabindex"), L(Ft), L(kt), L(Me));
      };
      static ɵdir = tt({
        type: t,
        selectors: [["", "routerLink", ""]],
        hostVars: 1,
        hostBindings: function (r, i) {
          r & 1 &&
            gn("click", function (s) {
              return i.onClick(
                s.button,
                s.ctrlKey,
                s.shiftKey,
                s.altKey,
                s.metaKey,
              );
            }),
            r & 2 && fn("target", i.target);
        },
        inputs: {
          target: "target",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          state: "state",
          info: "info",
          relativeTo: "relativeTo",
          preserveFragment: [2, "preserveFragment", "preserveFragment", it],
          skipLocationChange: [
            2,
            "skipLocationChange",
            "skipLocationChange",
            it,
          ],
          replaceUrl: [2, "replaceUrl", "replaceUrl", it],
          routerLink: "routerLink",
        },
        features: [dn, et],
      });
    }
    return t;
  })(),
  rc = (() => {
    class t {
      router;
      element;
      renderer;
      cdr;
      link;
      links;
      classes = [];
      routerEventsSubscription;
      linkInputChangesSubscription;
      _isActive = !1;
      get isActive() {
        return this._isActive;
      }
      routerLinkActiveOptions = { exact: !1 };
      ariaCurrentWhenActive;
      isActiveChange = new se();
      constructor(e, r, i, o, s) {
        (this.router = e),
          (this.element = r),
          (this.renderer = i),
          (this.cdr = o),
          (this.link = s),
          (this.routerEventsSubscription = e.events.subscribe((c) => {
            c instanceof $ && this.update();
          }));
      }
      ngAfterContentInit() {
        f(this.links.changes, f(null))
          .pipe(we())
          .subscribe((e) => {
            this.update(), this.subscribeToEachLinkOnChanges();
          });
      }
      subscribeToEachLinkOnChanges() {
        this.linkInputChangesSubscription?.unsubscribe();
        let e = [...this.links.toArray(), this.link]
          .filter((r) => !!r)
          .map((r) => r.onChanges);
        this.linkInputChangesSubscription = D(e)
          .pipe(we())
          .subscribe((r) => {
            this._isActive !== this.isLinkActive(this.router)(r) &&
              this.update();
          });
      }
      set routerLinkActive(e) {
        let r = Array.isArray(e) ? e : e.split(" ");
        this.classes = r.filter((i) => !!i);
      }
      ngOnChanges(e) {
        this.update();
      }
      ngOnDestroy() {
        this.routerEventsSubscription.unsubscribe(),
          this.linkInputChangesSubscription?.unsubscribe();
      }
      update() {
        !this.links ||
          !this.router.navigated ||
          queueMicrotask(() => {
            let e = this.hasActiveLinks();
            this.classes.forEach((r) => {
              e
                ? this.renderer.addClass(this.element.nativeElement, r)
                : this.renderer.removeClass(this.element.nativeElement, r);
            }),
              e && this.ariaCurrentWhenActive !== void 0
                ? this.renderer.setAttribute(
                    this.element.nativeElement,
                    "aria-current",
                    this.ariaCurrentWhenActive.toString(),
                  )
                : this.renderer.removeAttribute(
                    this.element.nativeElement,
                    "aria-current",
                  ),
              this._isActive !== e &&
                ((this._isActive = e),
                this.cdr.markForCheck(),
                this.isActiveChange.emit(e));
          });
      }
      isLinkActive(e) {
        let r = Hs(this.routerLinkActiveOptions)
          ? this.routerLinkActiveOptions
          : this.routerLinkActiveOptions.exact || !1;
        return (i) => {
          let o = i.urlTree;
          return o ? e.isActive(o, r) : !1;
        };
      }
      hasActiveLinks() {
        let e = this.isLinkActive(this.router);
        return (this.link && e(this.link)) || this.links.some(e);
      }
      static ɵfac = function (r) {
        return new (r || t)(L(H), L(kt), L(Ft), L(nt), L(Zn, 8));
      };
      static ɵdir = tt({
        type: t,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (r, i, o) {
          if ((r & 1 && vn(o, Zn, 5), r & 2)) {
            let s;
            mn((s = yn())) && (i.links = s);
          }
        },
        inputs: {
          routerLinkActiveOptions: "routerLinkActiveOptions",
          ariaCurrentWhenActive: "ariaCurrentWhenActive",
          routerLinkActive: "routerLinkActive",
        },
        outputs: { isActiveChange: "isActiveChange" },
        exportAs: ["routerLinkActive"],
        features: [et],
      });
    }
    return t;
  })();
function Hs(t) {
  return !!t.paths;
}
var Et = class {};
var Bs = (() => {
    class t {
      router;
      injector;
      preloadingStrategy;
      loader;
      subscription;
      constructor(e, r, i, o, s) {
        (this.router = e),
          (this.injector = i),
          (this.preloadingStrategy = o),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            J((e) => e instanceof $),
            ie(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, r) {
        let i = [];
        for (let o of r) {
          o.providers &&
            !o._injector &&
            (o._injector = Ht(o.providers, e, `Route: ${o.path}`));
          let s = o._injector ?? e,
            c = o._loadedInjector ?? s;
          ((o.loadChildren && !o._loadedRoutes && o.canLoad === void 0) ||
            (o.loadComponent && !o._loadedComponent)) &&
            i.push(this.preloadConfig(s, o)),
            (o.children || o._loadedRoutes) &&
              i.push(this.processRoutes(c, o.children ?? o._loadedRoutes));
        }
        return D(i).pipe(we());
      }
      preloadConfig(e, r) {
        return this.preloadingStrategy.preload(r, () => {
          let i;
          r.loadChildren && r.canLoad === void 0
            ? (i = this.loader.loadChildren(e, r))
            : (i = f(null));
          let o = i.pipe(
            T((s) =>
              s === null
                ? f(void 0)
                : ((r._loadedRoutes = s.routes),
                  (r._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes)),
            ),
          );
          if (r.loadComponent && !r._loadedComponent) {
            let s = this.loader.loadComponent(r);
            return D([o, s]).pipe(we());
          } else return o;
        });
      }
      static ɵfac = function (r) {
        return new (r || t)(y(H), y(rt), y(Ce), y(Et), y(Nr));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  Ti = new E(""),
  qs = (() => {
    class t {
      urlSerializer;
      transitions;
      viewportScroller;
      zone;
      options;
      routerEventsSubscription;
      scrollEventsSubscription;
      lastId = 0;
      lastSource = "imperative";
      restoredId = 0;
      store = {};
      constructor(e, r, i, o, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = r),
          (this.viewportScroller = i),
          (this.zone = o),
          (this.options = s),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof pe
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof $
              ? ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.urlAfterRedirects).fragment,
                ))
              : e instanceof Y &&
                e.code === gt.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof mt &&
            (e.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === "enabled"
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : this.options.scrollPositionRestoration !== "disabled" &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, r) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new mt(
                  e,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  r,
                ),
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
      static ɵfac = function (r) {
        sn();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function nc(t, ...n) {
  return Nt([
    { provide: Be, multi: !0, useValue: t },
    [],
    { provide: K, useFactory: Oi, deps: [H] },
    { provide: Wt, multi: !0, useFactory: Ui },
    n.map((e) => e.ɵproviders),
  ]);
}
function Oi(t) {
  return t.routerState.root;
}
function Ye(t, n) {
  return { ɵkind: t, ɵproviders: n };
}
function Ui() {
  let t = p(Re);
  return (n) => {
    let e = t.get(Gt);
    if (n !== e.components[0]) return;
    let r = t.get(H),
      i = t.get(Pi);
    t.get(kr) === 1 && r.initialNavigation(),
      t.get(_i, null, _t.Optional)?.setUpPreloading(),
      t.get(Ti, null, _t.Optional)?.init(),
      r.resetRootComponentType(e.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var Pi = new E("", { factory: () => new W() }),
  kr = new E("", { providedIn: "root", factory: () => 1 });
function Vs() {
  return Ye(2, [
    { provide: kr, useValue: 0 },
    {
      provide: Vt,
      multi: !0,
      deps: [Re],
      useFactory: (n) => {
        let e = n.get(bn, Promise.resolve());
        return () =>
          e.then(
            () =>
              new Promise((r) => {
                let i = n.get(H),
                  o = n.get(Pi);
                Di(i, () => {
                  r(!0);
                }),
                  (n.get(jr).afterPreactivation = () => (
                    r(!0), o.closed ? f(void 0) : o
                  )),
                  i.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function Ws() {
  return Ye(3, [
    {
      provide: Vt,
      multi: !0,
      useFactory: () => {
        let n = p(H);
        return () => {
          n.setUpLocationChangeListener();
        };
      },
    },
    { provide: kr, useValue: 2 },
  ]);
}
var _i = new E("");
function Gs(t) {
  return Ye(0, [
    { provide: _i, useExisting: Bs },
    { provide: Et, useExisting: t },
  ]);
}
function Zs() {
  return Ye(8, [qn, { provide: It, useExisting: qn }]);
}
function Qs(t) {
  let n = [
    { provide: Ei, useValue: Ps },
    {
      provide: Ii,
      useValue: d({ skipNextTransition: !!t?.skipInitialTransition }, t),
    },
  ];
  return Ye(9, n);
}
var Qn = new E("ROUTER_FORROOT_GUARD"),
  Ys = [
    Ae,
    { provide: Ve, useClass: fe },
    H,
    Ge,
    { provide: K, useFactory: Oi, deps: [H] },
    Nr,
    [],
  ],
  ic = (() => {
    class t {
      constructor(e) {}
      static forRoot(e, r) {
        return {
          ngModule: t,
          providers: [
            Ys,
            [],
            { provide: Be, multi: !0, useValue: e },
            { provide: Qn, useFactory: ea, deps: [[H, new xt(), new Qr()]] },
            r?.errorHandler ? { provide: Mi, useValue: r.errorHandler } : [],
            { provide: Qe, useValue: r || {} },
            r?.useHash ? Xs() : Js(),
            Ks(),
            r?.preloadingStrategy ? Gs(r.preloadingStrategy).ɵproviders : [],
            r?.initialNavigation ? ta(r) : [],
            r?.bindToComponentInputs ? Zs().ɵproviders : [],
            r?.enableViewTransitions ? Qs().ɵproviders : [],
            ra(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: Be, multi: !0, useValue: e }],
        };
      }
      static ɵfac = function (r) {
        return new (r || t)(y(Qn, 8));
      };
      static ɵmod = Bt({ type: t });
      static ɵinj = Pt({});
    }
    return t;
  })();
function Ks() {
  return {
    provide: Ti,
    useFactory: () => {
      let t = p(Dn),
        n = p(Q),
        e = p(Qe),
        r = p(jr),
        i = p(Ve);
      return (
        e.scrollOffset && t.setOffset(e.scrollOffset), new qs(i, r, t, n, e)
      );
    },
  };
}
function Xs() {
  return { provide: Me, useClass: In };
}
function Js() {
  return { provide: Me, useClass: En };
}
function ea(t) {
  return "guarded";
}
function ta(t) {
  return [
    t.initialNavigation === "disabled" ? Ws().ɵproviders : [],
    t.initialNavigation === "enabledBlocking" ? Vs().ɵproviders : [],
  ];
}
var Yn = new E("");
function ra() {
  return [
    { provide: Yn, useFactory: Ui },
    { provide: Wt, multi: !0, useExisting: Yn },
  ];
}
export { Na as a, Lo as b, Zn as c, rc as d, nc as e, ic as f };
