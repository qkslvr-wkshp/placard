import { f as p } from "./chunk-G7XEJ2LY.js";
import {
  K as r,
  Ka as e,
  La as t,
  Sa as o,
  Ta as u,
  jb as f,
  qa as c,
  ya as d,
  za as a,
} from "./chunk-Z6YZYOPG.js";
var m = class n {
  title = "PRODUCTS";
  static ɵfac = function (i) {
    return new (i || n)();
  };
  static ɵcmp = d({
    type: n,
    selectors: [["app-products"]],
    standalone: !1,
    decls: 21,
    vars: 1,
    template: function (i, h) {
      i & 1 &&
        (e(0, "article")(1, "h3"),
        o(2),
        t(),
        e(3, "h4"),
        o(4, "Open Table One-Shots"),
        t(),
        e(5, "p"),
        o(6, "Coming Soon!"),
        t(),
        e(7, "p"),
        o(8, "Rotating game systems! A variety of genres!"),
        t(),
        e(9, "p"),
        o(10, "Join as a player or spectator. All are welcome!"),
        t(),
        e(11, "h4"),
        o(12, "Remote Table Top Production"),
        t(),
        e(13, "p"),
        o(
          14,
          "Need an exciting set-piece for that final battle or pivotal moment in your home game? Quicksilver Workshop will help make your session one your players won't forget!",
        ),
        t(),
        e(15, "p"),
        o(
          16,
          "Reclaim your joy in running the game. Let Quicksilver Workshop build the set, place and move miniatures, track condition markers, and set spell effects during combat, so you can enjoy running your game with dedicated production support!",
        ),
        t(),
        e(17, "h4"),
        o(18, "Party Package!"),
        t(),
        e(19, "p"),
        o(
          20,
          "Book a private adventure session for just you and your party. Quicksilver Workshop will work with you to design and run the game you and your group wants to play!",
        ),
        t()()),
        i & 2 && (c(2), u(h.title));
    },
    styles: [
      "h3[_ngcontent-%COMP%]{color:var(--quicksilver)}article[_ngcontent-%COMP%]{background-color:#ffffffbf;border-radius:8px;margin-top:1.5rem;padding:1px 13px 1px 20px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}",
    ],
  });
};
var x = [{ path: "", component: m }],
  s = class n {
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵmod = a({ type: n });
    static ɵinj = r({ imports: [p.forChild(x), p] });
  };
var y = class n {
  static ɵfac = function (i) {
    return new (i || n)();
  };
  static ɵmod = a({ type: n });
  static ɵinj = r({ imports: [f, s] });
};
export { y as ProductsModule };
