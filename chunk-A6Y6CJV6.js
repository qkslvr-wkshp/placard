import { c as y, f as c } from "./chunk-G7XEJ2LY.js";
import {
  K as n,
  Ka as i,
  La as o,
  Sa as r,
  Ta as f,
  jb as d,
  qa as m,
  ya as u,
  za as a,
} from "./chunk-Z6YZYOPG.js";
var p = class e {
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
    template: function (t, x) {
      t & 1 &&
        (i(0, "article")(1, "h3"),
        r(2),
        o(),
        i(3, "p"),
        r(
          4,
          "Whether you\u2019re a new player ready to explore tabletop role-playing games for the first time, or a TTRPG veteran, you\u2019ll find everything you need with Quicksilver Workshop.",
        ),
        o(),
        i(5, "p"),
        r(
          6,
          "Quicksilver Workshop offers the concierge experience for your TTRPG journey.",
        ),
        o(),
        i(7, "p"),
        r(
          8,
          "From your first roll of the dice, until your story\u2019s fantastic conclusion, Quicksilver Workshop is here to provide for all your needs.",
        ),
        o(),
        i(9, "p")(10, "a", 0),
        r(11, "Click here"),
        o(),
        r(12, " to learn what Quicksilver Workshop can do for you!"),
        o()()),
        t & 2 && (m(2), f(x.title));
    },
    dependencies: [y],
    styles: [
      "h3[_ngcontent-%COMP%]{color:var(--quicksilver)}article[_ngcontent-%COMP%]{background-color:#ffffffbf;border-radius:8px;margin-top:1.5rem;padding:1px 13px 1px 20px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}",
    ],
  });
};
var b = [{ path: "", component: p }],
  s = class e {
    static ɵfac = function (t) {
      return new (t || e)();
    };
    static ɵmod = a({ type: e });
    static ɵinj = n({ imports: [c.forChild(b), c] });
  };
var h = class e {
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵmod = a({ type: e });
  static ɵinj = n({ imports: [d, s] });
};
export { h as AboutModule };
