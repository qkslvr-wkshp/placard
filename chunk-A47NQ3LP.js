import { f as d } from "./chunk-G7XEJ2LY.js";
import {
  K as r,
  Ka as e,
  La as o,
  Ma as c,
  Sa as t,
  Ta as f,
  jb as g,
  qa as p,
  ya as u,
  za as a,
} from "./chunk-Z6YZYOPG.js";
var s = class n {
  title = "PRODUCTS";
  static ɵfac = function (i) {
    return new (i || n)();
  };
  static ɵcmp = u({
    type: n,
    selectors: [["app-products"]],
    standalone: !1,
    decls: 35,
    vars: 1,
    consts: [
      [2, "display", "flex", "justify-content", "center"],
      [
        "role",
        "separator",
        "aria-label",
        "Divider",
        1,
        "divider",
        "half-width",
      ],
    ],
    template: function (i, x) {
      i & 1 &&
        (e(0, "article")(1, "h3"),
        t(2),
        o(),
        e(3, "h4"),
        t(4, "Open Table One-Shots"),
        e(5, "span"),
        t(6, "(Coming soon)"),
        o()(),
        e(7, "p"),
        t(8, "Rotating game systems! A variety of genres!"),
        o(),
        e(9, "p"),
        t(10, "Join as a player or spectator. All are welcome!"),
        o(),
        e(11, "div", 0),
        c(12, "div", 1),
        o(),
        e(13, "h4"),
        t(14, "Remote Production Support"),
        e(15, "span"),
        t(16, "(Coming soon)"),
        o()(),
        e(17, "p"),
        t(
          18,
          "Quicksilver Workshop is your dedicated, remote production solution.",
        ),
        o(),
        e(19, "p"),
        t(
          20,
          "You could use a virtual table-top for that pivotal game moment or epic final battle. Or, you can see your vision come to life with real assembled sets complete with miniatures, condition markers, and spell effects.",
        ),
        o(),
        e(21, "p"),
        t(
          22,
          "Quicksilver Workshop joins your game session remotely and synchronizes the scene with the moment-to-moment action at your table.",
        ),
        o(),
        e(23, "p"),
        t(24, "Focus on your game, not the prep and fiddly bits."),
        o(),
        e(25, "div", 0),
        c(26, "div", 1),
        o(),
        e(27, "h4"),
        t(28, "Party Package!"),
        e(29, "span"),
        t(30, "(Coming soon)"),
        o()(),
        e(31, "p"),
        t(
          32,
          "Book a private adventure session for just you and your party. Quicksilver Workshop will work with you to design and run the game session you and your group wants to play!",
        ),
        o(),
        e(33, "p"),
        t(34, "Pick a theme. Pick a game system. Pick a date."),
        o()()),
        i & 2 && (p(2), f(x.title));
    },
    styles: [
      "h3[_ngcontent-%COMP%]{color:var(--quicksilver)}h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--bright-blue) 100%,transparent);font-size:smaller;margin-left:8px}article[_ngcontent-%COMP%]{background-color:#ffffffbf;border-radius:8px;margin-top:1.5rem;padding:1px 13px 1px 20px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}article[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:1px;height:1px;background:var(--quicksilver-horizontal-gradient)}article[_ngcontent-%COMP%]   .divider.half-width[_ngcontent-%COMP%]{width:50%}",
    ],
  });
};
var v = [{ path: "", component: s }],
  l = class n {
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵmod = a({ type: n });
    static ɵinj = r({ imports: [d.forChild(v), d] });
  };
var y = class n {
  static ɵfac = function (i) {
    return new (i || n)();
  };
  static ɵmod = a({ type: n });
  static ɵinj = r({ imports: [g, l] });
};
export { y as ProductsModule };
