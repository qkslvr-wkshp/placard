import { f } from "./chunk-G7XEJ2LY.js";
import {
  K as l,
  Ka as e,
  La as o,
  Ma as a,
  Sa as i,
  Ta as u,
  X as r,
  Y as s,
  jb as M,
  qa as g,
  ya as h,
  za as m,
} from "./chunk-Z6YZYOPG.js";
var c = class t {
  title = "Tools & Resources";
  static ɵfac = function (n) {
    return new (n || t)();
  };
  static ɵcmp = h({
    type: t,
    selectors: [["app-tools-and-resources"]],
    standalone: !1,
    decls: 34,
    vars: 1,
    consts: [
      [
        "href",
        "https://en.wikipedia.org/wiki/Appendix_N#Works_listed_in_Appendix_N",
      ],
      [
        "xmlns",
        "http://www.w3.org/2000/svg",
        "height",
        "14",
        "viewBox",
        "0 -960 960 960",
        "width",
        "14",
        "fill",
        "currentColor",
      ],
      [
        "d",
        "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z",
      ],
      ["href", "https://www.dndbeyond.com/"],
      ["href", "https://goodman-games.com/"],
      ["href", "https://www.thearcanelibrary.com/"],
      ["href", "https://www.drivethrurpg.com/"],
      ["href", "https://donjon.bin.sh/"],
    ],
    template: function (n, x) {
      n & 1 &&
        (e(0, "article")(1, "h3"),
        i(2),
        o(),
        e(3, "ul")(4, "li")(5, "a", 0),
        i(6, "Appendix N "),
        r(),
        e(7, "svg", 1),
        a(8, "path", 2),
        o()()(),
        s(),
        e(9, "li")(10, "a", 3),
        i(11, "D&D Beyond "),
        r(),
        e(12, "svg", 1),
        a(13, "path", 2),
        o()()(),
        s(),
        e(14, "li")(15, "a", 4),
        i(16, "Goodman Games "),
        r(),
        e(17, "svg", 1),
        a(18, "path", 2),
        o()()(),
        s(),
        e(19, "li")(20, "a", 5),
        i(21, "The Arcane Library "),
        r(),
        e(22, "svg", 1),
        a(23, "path", 2),
        o()()(),
        s(),
        e(24, "li")(25, "a", 6),
        i(26, "DriveThruRPG "),
        r(),
        e(27, "svg", 1),
        a(28, "path", 2),
        o()()(),
        s(),
        e(29, "li")(30, "a", 7),
        i(31, "donjon.bin.sh "),
        r(),
        e(32, "svg", 1),
        a(33, "path", 2),
        o()()()()()),
        n & 2 && (g(2), u(x.title));
    },
    styles: [
      "h3[_ngcontent-%COMP%]{color:var(--quicksilver)}article[_ngcontent-%COMP%]{background-color:#ffffffbf;border-radius:8px;margin-top:1.5rem;padding:1px 13px 1px 20px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}article[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:12px 0}article[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gray-700);text-decoration:none}article[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gray-900);font-weight:700}article[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-left:5px}",
    ],
  });
};
var w = [{ path: "", component: c }],
  p = class t {
    static ɵfac = function (n) {
      return new (n || t)();
    };
    static ɵmod = m({ type: t });
    static ɵinj = l({ imports: [f.forChild(w), f] });
  };
var C = class t {
  static ɵfac = function (n) {
    return new (n || t)();
  };
  static ɵmod = m({ type: t });
  static ɵinj = l({ imports: [M, p] });
};
export { C as ToolsAndResourcesModule };
