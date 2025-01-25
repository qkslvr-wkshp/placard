import { c as g, f as s } from "./chunk-G7XEJ2LY.js";
import {
  K as i,
  Ka as r,
  La as o,
  Sa as n,
  Ta as f,
  jb as d,
  qa as m,
  ya as u,
  za as a,
} from "./chunk-Z6YZYOPG.js";
var c = class e {
  title = "ABOUT";
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = u({
    type: e,
    selectors: [["app-about"]],
    standalone: !1,
    decls: 13,
    vars: 1,
    consts: [["routerLink", "/products"]],
    template: function (t, M) {
      t & 1 &&
        (r(0, "article")(1, "h3"),
        n(2),
        o(),
        r(3, "p"),
        n(
          4,
          "Whether you\u2019re a new player ready to explore tabletop role-playing games for the first time, or a TTRPG veteran, you\u2019ll find everything you need with Quicksilver Workshop.",
        ),
        o(),
        r(5, "p"),
        n(
          6,
          "Quicksilver Workshop offers the concierge experience for your TTRPG journey.",
        ),
        o(),
        r(7, "p"),
        n(
          8,
          "From your first roll of the dice, until your story\u2019s fantastic conclusion, Quicksilver Workshop is here to provide for all your needs.",
        ),
        o(),
        r(9, "p")(10, "a", 0),
        n(11, "Click here"),
        o(),
        n(12, " to learn what Quicksilver Workshop can do for you!"),
        o()()),
        t & 2 && (m(2), f(M.title));
    },
    dependencies: [g],
    styles: [
      "h3[_ngcontent-%COMP%]{color:var(--quicksilver)}article[_ngcontent-%COMP%]{background-color:#ffffffbf;border-radius:8px;margin-top:1.5rem;padding:1px 13px 1px 20px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{color:var(--quicksilver)}",
    ],
  });
};
var h = [{ path: "", component: c }],
  l = class e {
    static ɵfac = function (t) {
      return new (t || e)();
    };
    static ɵmod = a({ type: e });
    static ɵinj = i({ imports: [s.forChild(h), s] });
  };
var y = class e {
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵmod = a({ type: e });
  static ɵinj = i({ imports: [d, l] });
};
export { y as AboutModule };
