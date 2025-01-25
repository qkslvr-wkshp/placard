import { a as x, b, c as y, d as w, e as S, f } from "./chunk-G7XEJ2LY.js";
import {
  Ia as M,
  Ja as P,
  K as v,
  Ka as n,
  La as o,
  Ma as l,
  Oa as _,
  Sa as r,
  Ta as g,
  Ua as O,
  Wa as k,
  X as d,
  Y as h,
  qa as a,
  ya as s,
  za as u,
} from "./chunk-Z6YZYOPG.js";
var p = class e {
  title = "PAGE NOT FOUND";
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = s({
    type: e,
    selectors: [["app-page-not-found"]],
    decls: 5,
    vars: 1,
    template: function (t, c) {
      t & 1 &&
        (n(0, "article")(1, "h3"),
        r(2),
        o(),
        n(3, "p"),
        r(4, "Whoops, we rolled a fumble. Please try again."),
        o()()),
        t & 2 && (a(2), g(c.title));
    },
    styles: [
      "h3[_ngcontent-%COMP%]{color:var(--quicksilver)}article[_ngcontent-%COMP%]{background-color:#ffffffbf;border-radius:8px;margin-top:1.5rem;padding:1px 13px 1px 20px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}",
    ],
  });
};
var C = [
    {
      path: "",
      loadChildren: () =>
        import("./chunk-HW2QPKN6.js").then((e) => e.AppModule),
    },
    {
      path: "about",
      loadChildren: () =>
        import("./chunk-A6Y6CJV6.js").then((e) => e.AboutModule),
    },
    {
      path: "tools-and-resources",
      loadChildren: () =>
        import("./chunk-52XEFIUR.js").then((e) => e.ToolsAndResourcesModule),
    },
    {
      path: "products",
      loadChildren: () =>
        import("./chunk-5TXP2J5M.js").then((e) => e.ProductsModule),
    },
    { path: "**", component: p },
  ],
  I = class e {
    static ɵfac = function (t) {
      return new (t || e)();
    };
    static ɵmod = u({ type: e });
    static ɵinj = v({ imports: [f.forChild(C), f] });
  };
var E = { providers: [k({ eventCoalescing: !0 }), S(C)] };
var z = (e, i) => i.title;
function F(e, i) {
  if ((e & 1 && (n(0, "a", 9)(1, "span"), r(2), o()()), e & 2)) {
    let t = i.$implicit;
    _("routerLink", t.link), a(2), g(t.title);
  }
}
var m = class e {
  title = "Quicksilver Workshop";
  sections = [
    { title: "About", link: "about" },
    { title: "Products", link: "products" },
    { title: "Tools & Resources", link: "tools-and-resources" },
  ];
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = s({
    type: e,
    selectors: [["app-root"]],
    decls: 26,
    vars: 1,
    consts: [
      [1, "main"],
      [1, "content"],
      [1, "left-side"],
      ["routerLink", ""],
      [2, "min-height", "100px", "min-width", "100%"],
      ["role", "separator", "aria-label", "Divider", 1, "divider"],
      [1, "right-side"],
      [1, "right-side-content"],
      [1, "pill-group"],
      ["routerLinkActive", "active-link", 1, "pill", 3, "routerLink"],
      [1, "social-links"],
      [
        "href",
        "https://www.facebook.com/people/Quicksilver-Workshop/61571811857087/",
        "aria-label",
        "Facebook",
        "target",
        "_blank",
        "rel",
        "noopener",
      ],
      [
        "xmlns",
        "http://www.w3.org/2000/svg",
        "height",
        "24",
        "width",
        "24",
        "enable-background",
        "new 0 0 30 30",
        "viewBox",
        "0 0 24 24",
        "y",
        "0px",
        "x",
        "0px",
      ],
      [
        "id",
        "circle1130",
        "r",
        "12",
        "cy",
        "12",
        "cx",
        "12",
        2,
        "stroke-width",
        "0.8",
      ],
      [
        "d",
        "m 13.4,20.9 v -8.1 h 2.7 l 0.4,-3.2 h -3.1 v -2 c 0,-0.9 0.3,-1.5 1.6,-1.5 h 1.7 V 3.2 c -0.3,0 -1.3,-0.1 -2.4,-0.1 -2.4,0 -4.1,1.5 -4.1,4.2 V 9.6 H 7.5 v 3.2 h 2.7 v 8.1 z",
        "fill",
        "#ffffff",
        "id",
        "f",
        2,
        "fill",
        "#fff!important",
      ],
      [
        "href",
        "https://www.instagram.com/quicksilver_workshop",
        "aria-label",
        "Instagram",
        "target",
        "_blank",
        "rel",
        "noopener",
      ],
      [
        "alt",
        "Instagram",
        "width",
        "6.35mm",
        "height",
        "6.35mm",
        "version",
        "1.1",
        "viewBox",
        "0 0 6.35 6.35",
        "xmlns",
        "http://www.w3.org/2000/svg",
      ],
      ["transform", "translate(-79.98 -120.05)"],
      [
        "d",
        "m83.155 120.05c-0.86117 0-0.97084 4e-3 -1.3088 0.0198-0.338 0.0162-0.56812 0.0683-0.76948 0.14743-0.20855 0.0809-0.38654 0.18877-0.56273 0.36676-0.17619 0.17619-0.28406 0.35417-0.36676 0.56272-0.0791 0.20136-0.13304 0.43328-0.14742 0.76948-0.01438 0.338-0.01978 0.44587-0.01978 1.3088 0 0.86117 0.0036 0.96904 0.01978 1.3088 0.01618 0.338 0.06832 0.56812 0.14742 0.76948 0.0809 0.20855 0.18877 0.38654 0.36676 0.56273 0.17619 0.17618 0.35418 0.28585 0.56273 0.36676 0.20136 0.0791 0.43328 0.13124 0.76948 0.14742 0.338 0.0162 0.44587 0.0198 1.3088 0.0198 0.86117 0 0.96904-4e-3 1.3088-0.0198 0.338-0.0162 0.56812-0.0683 0.77128-0.14742 0.20855-0.0809 0.38474-0.19058 0.56093-0.36676 0.17619-0.17619 0.28406-0.35418 0.36676-0.56273 0.07731-0.20136 0.13124-0.43148 0.14742-0.76948 0.01438-0.338 0.01978-0.44587 0.01978-1.3088 0-0.86117-0.0036-0.96904-0.01978-1.3088-0.01618-0.33799-0.07012-0.56812-0.14742-0.76948-0.0809-0.20855-0.19057-0.38653-0.36676-0.56272-0.17619-0.17619-0.35238-0.28406-0.56273-0.36676-0.20316-0.0791-0.43328-0.13125-0.77128-0.14743-0.338-0.0162-0.44587-0.0198-1.307-0.0198zm-0.28406 0.57171h0.28406c0.84679 0 0.94747 4e-3 1.2819 0.018 0.30923 0.0144 0.47643 0.0665 0.5897 0.10967 0.14742 0.0575 0.2535 0.12585 0.36496 0.23732 0.11147 0.11146 0.17978 0.21753 0.23732 0.36496 0.04315 0.11146 0.09529 0.28046 0.10967 0.58969 0.01438 0.3344 0.01798 0.43508 0.01798 1.2819 0 0.84678-0.0036 0.94746-0.01798 1.2819-0.01438 0.30923-0.06652 0.47643-0.10967 0.5897-0.05753 0.14742-0.12585 0.2535-0.23732 0.36496-0.11147 0.11147-0.21574 0.17979-0.36496 0.23732-0.11147 0.0431-0.28046 0.0953-0.5897 0.10967-0.3344 0.0144-0.43508 0.018-1.2819 0.018-0.84679 0-0.94747-4e-3 -1.2819-0.018-0.30923-0.0144-0.47643-0.0665-0.5897-0.10967-0.14742-0.0575-0.2535-0.12585-0.36496-0.23732-0.11147-0.11146-0.17978-0.21754-0.23732-0.36496-0.04315-0.11147-0.09529-0.28047-0.10967-0.5897-0.01438-0.3344-0.01798-0.43508-0.01798-1.2819 0-0.84679 0.0036-0.94747 0.01798-1.2819 0.01438-0.30923 0.06652-0.47643 0.10967-0.58969 0.05753-0.14743 0.12585-0.2535 0.23732-0.36496 0.11147-0.11147 0.21754-0.17979 0.36496-0.23732 0.11147-0.0432 0.28046-0.0953 0.5897-0.10967 0.29305-0.0144 0.40631-0.018 0.9978-0.018zm1.9776 0.52677c-0.21035 0-0.38114 0.1708-0.38114 0.38115 0 0.21034 0.1708 0.38114 0.38114 0.38114 0.21035 0 0.38114-0.1708 0.38114-0.38114 0-0.21035-0.1708-0.38115-0.38114-0.38115zm-1.6936 0.44587c-0.90072 0-1.6288 0.72992-1.6288 1.6288 0 0.90072 0.72993 1.6288 1.6288 1.6288 0.90072 0 1.6289-0.72993 1.6289-1.6288 0-0.90072-0.72813-1.6288-1.6289-1.6288zm0 0.57171c0.5843 0 1.0571 0.47284 1.0571 1.0571s-0.47283 1.0571-1.0571 1.0571c-0.5843 0-1.0571-0.47283-1.0571-1.0571s0.47283-1.0571 1.0571-1.0571z",
        "fill",
        "#fff",
        "stroke-width",
        ".017978",
      ],
    ],
    template: function (t, c) {
      t & 1 &&
        (n(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
        r(4),
        o(),
        n(5, "h5"),
        r(6, "Live, Remote, and Hybrid TTRPG Events"),
        o(),
        n(7, "div", 4),
        l(8, "router-outlet"),
        o()(),
        l(9, "div", 5),
        n(10, "div", 6)(11, "div", 7)(12, "div", 8),
        M(13, F, 3, 2, "a", 9, z),
        o(),
        n(15, "div", 10)(16, "a", 11),
        d(),
        n(17, "svg", 12),
        l(18, "circle", 13)(19, "path", 14),
        o()(),
        h(),
        n(20, "a", 15),
        d(),
        n(21, "svg", 16)(22, "g", 17),
        l(23, "path", 18),
        o()()()()()()()(),
        h(),
        n(24, "footer"),
        r(
          25,
          "\xA9 2025 Quicksilver Workshop Productions, LLC. All rights reserved.",
        ),
        o()),
        t & 2 && (a(4), O(" ", c.title, " "), a(9), P(c.sections));
    },
    dependencies: [b, y, w],
    styles: [
      '[_nghost-%COMP%]{--bright-blue: oklch(51.01% .274 263.83);--electric-violet: oklch(53.18% .28 296.97);--french-violet: oklch(47.66% .246 305.88);--vivid-pink: oklch(69.02% .277 332.77);--hot-red: oklch(61.42% .238 15.34);--orange-red: oklch(63.32% .24 31.68);--green: oklch(70% .222 140.82);--yellow-brown: oklch(63.24% .1505 106.94);--gray-900: oklch(19.37% .006 300.98);--gray-700: oklch(36.98% .014 302.71);--gray-400: oklch(70.9% .015 304.04);--gray-300: gainsboro;--quicksilver: slategrey;--quicksilver-vertical-gradient: linear-gradient( 180deg, var(--gray-900) 0%, var(--gray-700) 25%, var(--quicksilver) 50%, var(--gray-400) 100% );--red-to-pink-to-purple-vertical-gradient: linear-gradient( 180deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--red-to-pink-to-purple-horizontal-gradient: linear-gradient( 90deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--pill-accent: var(--bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--inter-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--quicksilver);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--gray-700)}[_nghost-%COMP%]   main[_ngcontent-%COMP%], [_nghost-%COMP%]   .main[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;justify-content:center;align-items:center;padding:1.75rem 1rem 1rem;box-sizing:inherit;position:relative}[_nghost-%COMP%]   .angular-logo[_ngcontent-%COMP%]{max-width:9.2rem}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;max-width:700px;margin-bottom:3rem}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{max-width:465px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{height:100%;padding-left:13px;min-height:100%;min-width:200px}[_nghost-%COMP%]   .right-side-content[_ngcontent-%COMP%]{position:fixed}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:var(--quicksilver);margin:8px 0 0 3px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}[_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{width:1px;background:var(--gray-300);margin-inline:.5rem}[_nghost-%COMP%]   .pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;gap:1.25rem}[_nghost-%COMP%]   .pill[_ngcontent-%COMP%]{display:flex;align-items:center;--pill-accent: var(--bright-blue);background:color-mix(in srgb,var(--quicksilver) 25%,transparent);color:var(--gray-900);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}[_nghost-%COMP%]   .pill.active-link[_ngcontent-%COMP%]{background:transparent;color:var(--gray-700);font-weight:700}[_nghost-%COMP%]   .pill[_ngcontent-%COMP%]:hover:not(.active-link){background:var(--gray-900);font-weight:700}[_nghost-%COMP%]   .pill[_ngcontent-%COMP%]:hover:not(.active-link)   span[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem}[_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.73rem;margin-top:1.5rem}[_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:8px}[_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], [_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{transition:fill .3s ease;fill:color-mix(in srgb,var(--quicksilver) 40%,transparent)}[_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], [_nghost-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:var(--gray-900)}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{background-color:#fff;bottom:-8px;color:#666;font-size:smaller;height:30px;padding-top:8px;position:fixed;text-align:center;width:100%}@media screen and (max-width: 650px){[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:column;width:max-content}[_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{height:1px;width:100%;background:var(--gray-300);margin-block:1.5rem}}',
    ],
  });
};
x(m, E).catch((e) => console.error(e));
