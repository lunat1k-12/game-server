// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/kaboom/dist/kaboom.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Nt = Object.defineProperty,
    cn = Object.defineProperties;
var ln = Object.getOwnPropertyDescriptors;
var Qt = Object.getOwnPropertySymbols;
var dn = Object.prototype.hasOwnProperty,
    hn = Object.prototype.propertyIsEnumerable;

var Bt = (e, r, t) => r in e ? Nt(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : e[r] = t,
    ne = (e, r) => {
  for (var t in r || (r = {})) dn.call(r, t) && Bt(e, t, r[t]);

  if (Qt) for (var t of Qt(r)) hn.call(r, t) && Bt(e, t, r[t]);
  return e;
},
    se = (e, r) => cn(e, ln(r));

var i = (e, r) => Nt(e, "name", {
  value: r,
  configurable: !0
});

var Kt = (e, r, t) => (Bt(e, typeof r != "symbol" ? r + "" : r, t), t);

var er = (e, r, t) => new Promise((a, U) => {
  var S = V => {
    try {
      D(t.next(V));
    } catch (A) {
      U(A);
    }
  },
      v = V => {
    try {
      D(t.throw(V));
    } catch (A) {
      U(A);
    }
  },
      D = V => V.done ? a(V.value) : Promise.resolve(V.value).then(S, v);

  D((t = t.apply(e, r)).next());
});

var tr = (() => {
  for (var e = new Uint8Array(128), r = 0; r < 64; r++) e[r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r * 4 - 205] = r;

  return t => {
    for (var a = t.length, U = new Uint8Array((a - (t[a - 1] == "=") - (t[a - 2] == "=")) * 3 / 4 | 0), S = 0, v = 0; S < a;) {
      var D = e[t.charCodeAt(S++)],
          V = e[t.charCodeAt(S++)],
          A = e[t.charCodeAt(S++)],
          L = e[t.charCodeAt(S++)];
      U[v++] = D << 2 | V >> 4, U[v++] = V << 4 | A >> 2, U[v++] = A << 6 | L;
    }

    return U;
  };
})();

function Be(e) {
  return e * Math.PI / 180;
}

i(Be, "deg2rad");

function Tt(e) {
  return e * 180 / Math.PI;
}

i(Tt, "rad2deg");

function pe(e, r, t) {
  return r > t ? pe(e, t, r) : Math.min(Math.max(e, r), t);
}

i(pe, "clamp");

function He(e, r, t) {
  return e + (r - e) * t;
}

i(He, "lerp");

function Oe(e, r, t, a, U) {
  return a + (e - r) / (t - r) * (U - a);
}

i(Oe, "map");

function rr(e, r, t, a, U) {
  return pe(Oe(e, r, t, a, U), a, U);
}

i(rr, "mapc");

function c(...e) {
  if (e.length === 0) return c(0, 0);

  if (e.length === 1) {
    if (typeof e[0] == "number") return c(e[0], e[0]);
    if (We(e[0])) return c(e[0].x, e[0].y);
    if (Array.isArray(e[0]) && e[0].length === 2) return c.apply(null, e[0]);
  }

  return {
    x: e[0],
    y: e[1],

    clone() {
      return c(this.x, this.y);
    },

    add(...r) {
      let t = c(...r);
      return c(this.x + t.x, this.y + t.y);
    },

    sub(...r) {
      let t = c(...r);
      return c(this.x - t.x, this.y - t.y);
    },

    scale(...r) {
      let t = c(...r);
      return c(this.x * t.x, this.y * t.y);
    },

    dist(...r) {
      let t = c(...r);
      return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y));
    },

    len() {
      return this.dist(c(0, 0));
    },

    unit() {
      return this.scale(1 / this.len());
    },

    normal() {
      return c(this.y, -this.x);
    },

    dot(r) {
      return this.x * r.x + this.y * r.y;
    },

    angle(...r) {
      let t = c(...r);
      return Tt(Math.atan2(this.y - t.y, this.x - t.x));
    },

    lerp(r, t) {
      return c(He(this.x, r.x, t), He(this.y, r.y, t));
    },

    toFixed(r) {
      return c(this.x.toFixed(r), this.y.toFixed(r));
    },

    eq(r) {
      return this.x === r.x && this.y === r.y;
    },

    str() {
      return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }

  };
}

i(c, "vec2");

function ot(e) {
  let r = Be(e);
  return c(Math.cos(r), Math.sin(r));
}

i(ot, "dir");

function Pe(e, r, t) {
  return {
    x: e,
    y: r,
    z: t,

    xy() {
      return c(this.x, this.y);
    }

  };
}

i(Pe, "vec3");

function We(e) {
  return e !== void 0 && e.x !== void 0 && e.y !== void 0;
}

i(We, "isVec2");

function nr(e) {
  return e !== void 0 && e.x !== void 0 && e.y !== void 0 && e.z !== void 0;
}

i(nr, "isVec3");

function qe(e) {
  return e !== void 0 && e.r !== void 0 && e.g !== void 0 && e.b !== void 0;
}

i(qe, "isColor");

function sr(e) {
  if (e !== void 0 && Array.isArray(e.m) && e.m.length === 16) return e;
}

i(sr, "isMat4");

function I(...e) {
  if (e.length === 0) return I(255, 255, 255);

  if (e.length === 1) {
    if (qe(e[0])) return I(e[0].r, e[0].g, e[0].b);
    if (Array.isArray(e[0]) && e[0].length === 3) return I.apply(null, e[0]);
  }

  return {
    r: pe(~~e[0], 0, 255),
    g: pe(~~e[1], 0, 255),
    b: pe(~~e[2], 0, 255),

    clone() {
      return I(this.r, this.g, this.b);
    },

    lighten(r) {
      return I(this.r + r, this.g + r, this.b + r);
    },

    darken(r) {
      return this.lighten(-r);
    },

    invert() {
      return I(255 - this.r, 255 - this.g, 255 - this.b);
    },

    mult(r) {
      return I(this.r * r.r / 255, this.g * r.g / 255, this.b * r.b / 255);
    },

    eq(r) {
      return this.r === r.r && this.g === r.g && this.b === r.b;
    },

    str() {
      return `(${this.r}, ${this.g}, ${this.b})`;
    }

  };
}

i(I, "rgb");

function ir(e, r, t) {
  if (r == 0) return I(255 * t, 255 * t, 255 * t);
  let a = i((A, L, H) => (H < 0 && (H += 1), H > 1 && (H -= 1), H < 1 / 6 ? A + (L - A) * 6 * H : H < 1 / 2 ? L : H < 2 / 3 ? A + (L - A) * (2 / 3 - H) * 6 : A), "hue2rgb"),
      U = t < .5 ? t * (1 + r) : t + r - t * r,
      S = 2 * t - U,
      v = a(S, U, e + 1 / 3),
      D = a(S, U, e),
      V = a(S, U, e - 1 / 3);
  return I(Math.round(v * 255), Math.round(D * 255), Math.round(V * 255));
}

i(ir, "hsl2rgb");

function de(e, r, t, a) {
  return {
    x: e != null ? e : 0,
    y: r != null ? r : 0,
    w: t != null ? t : 1,
    h: a != null ? a : 1,

    scale(U) {
      return de(this.x + this.w * U.x, this.y + this.h * U.y, this.w * U.w, this.h * U.h);
    },

    clone() {
      return de(this.x, this.y, this.w, this.h);
    },

    eq(U) {
      return this.x === U.x && this.y === U.y && this.w === U.w && this.h === U.h;
    }

  };
}

i(de, "quad");

function le(e) {
  return {
    m: e ? [...e] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],

    clone() {
      return le(this.m);
    },

    mult(r) {
      let t = [];

      for (let a = 0; a < 4; a++) for (let U = 0; U < 4; U++) t[a * 4 + U] = this.m[0 * 4 + U] * r.m[a * 4 + 0] + this.m[1 * 4 + U] * r.m[a * 4 + 1] + this.m[2 * 4 + U] * r.m[a * 4 + 2] + this.m[3 * 4 + U] * r.m[a * 4 + 3];

      return le(t);
    },

    multVec4(r) {
      return {
        x: r.x * this.m[0] + r.y * this.m[4] + r.z * this.m[8] + r.w * this.m[12],
        y: r.x * this.m[1] + r.y * this.m[5] + r.z * this.m[9] + r.w * this.m[13],
        z: r.x * this.m[2] + r.y * this.m[6] + r.z * this.m[10] + r.w * this.m[14],
        w: r.x * this.m[3] + r.y * this.m[7] + r.z * this.m[11] + r.w * this.m[15]
      };
    },

    multVec3(r) {
      let t = this.multVec4({
        x: r.x,
        y: r.y,
        z: r.z,
        w: 1
      });
      return Pe(t.x, t.y, t.z);
    },

    multVec2(r) {
      return c(r.x * this.m[0] + r.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], r.x * this.m[1] + r.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    },

    translate(r) {
      return this.mult(le([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r.x, r.y, 0, 1]));
    },

    scale(r) {
      return this.mult(le([r.x, 0, 0, 0, 0, r.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    },

    rotateX(r) {
      return r = Be(-r), this.mult(le([1, 0, 0, 0, 0, Math.cos(r), -Math.sin(r), 0, 0, Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1]));
    },

    rotateY(r) {
      return r = Be(-r), this.mult(le([Math.cos(r), 0, Math.sin(r), 0, 0, 1, 0, 0, -Math.sin(r), 0, Math.cos(r), 0, 0, 0, 0, 1]));
    },

    rotateZ(r) {
      return r = Be(-r), this.mult(le([Math.cos(r), -Math.sin(r), 0, 0, Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    },

    invert() {
      let r = [],
          t = this.m[10] * this.m[15] - this.m[14] * this.m[11],
          a = this.m[9] * this.m[15] - this.m[13] * this.m[11],
          U = this.m[9] * this.m[14] - this.m[13] * this.m[10],
          S = this.m[8] * this.m[15] - this.m[12] * this.m[11],
          v = this.m[8] * this.m[14] - this.m[12] * this.m[10],
          D = this.m[8] * this.m[13] - this.m[12] * this.m[9],
          V = this.m[6] * this.m[15] - this.m[14] * this.m[7],
          A = this.m[5] * this.m[15] - this.m[13] * this.m[7],
          L = this.m[5] * this.m[14] - this.m[13] * this.m[6],
          H = this.m[4] * this.m[15] - this.m[12] * this.m[7],
          Y = this.m[4] * this.m[14] - this.m[12] * this.m[6],
          ie = this.m[5] * this.m[15] - this.m[13] * this.m[7],
          N = this.m[4] * this.m[13] - this.m[12] * this.m[5],
          oe = this.m[6] * this.m[11] - this.m[10] * this.m[7],
          J = this.m[5] * this.m[11] - this.m[9] * this.m[7],
          ue = this.m[5] * this.m[10] - this.m[9] * this.m[6],
          y = this.m[4] * this.m[11] - this.m[8] * this.m[7],
          ye = this.m[4] * this.m[10] - this.m[8] * this.m[6],
          P = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      r[0] = this.m[5] * t - this.m[6] * a + this.m[7] * U, r[4] = -(this.m[4] * t - this.m[6] * S + this.m[7] * v), r[8] = this.m[4] * a - this.m[5] * S + this.m[7] * D, r[12] = -(this.m[4] * U - this.m[5] * v + this.m[6] * D), r[1] = -(this.m[1] * t - this.m[2] * a + this.m[3] * U), r[5] = this.m[0] * t - this.m[2] * S + this.m[3] * v, r[9] = -(this.m[0] * a - this.m[1] * S + this.m[3] * D), r[13] = this.m[0] * U - this.m[1] * v + this.m[2] * D, r[2] = this.m[1] * V - this.m[2] * A + this.m[3] * L, r[6] = -(this.m[0] * V - this.m[2] * H + this.m[3] * Y), r[10] = this.m[0] * ie - this.m[1] * H + this.m[3] * N, r[14] = -(this.m[0] * L - this.m[1] * Y + this.m[2] * N), r[3] = -(this.m[1] * oe - this.m[2] * J + this.m[3] * ue), r[7] = this.m[0] * oe - this.m[2] * y + this.m[3] * ye, r[11] = -(this.m[0] * J - this.m[1] * y + this.m[3] * P), r[15] = this.m[0] * ue - this.m[1] * ye + this.m[2] * P;
      let T = this.m[0] * r[0] + this.m[1] * r[4] + this.m[2] * r[8] + this.m[3] * r[12];

      for (let _ = 0; _ < 4; _++) for (let z = 0; z < 4; z++) r[_ * 4 + z] *= 1 / T;

      return le(r);
    }

  };
}

i(le, "mat4");

function St(e, r, t, a = Math.sin) {
  return e + (a(t) + 1) / 2 * (r - e);
}

i(St, "wave");
var fn = 1103515245,
    mn = 12345,
    or = 2147483648,
    Pt = Dt(Date.now());

function Dt(e) {
  return {
    seed: e,

    gen(...r) {
      if (r.length === 0) return this.seed = (fn * this.seed + mn) % or, this.seed / or;

      if (r.length === 1) {
        if (typeof r[0] == "number") return this.gen(0, r[0]);
        if (We(r[0])) return this.gen(c(0, 0), r[0]);
        if (qe(r[0])) return this.gen(I(0, 0, 0), r[0]);
      } else if (r.length === 2) {
        if (typeof r[0] == "number" && typeof r[1] == "number") return this.gen() * (r[1] - r[0]) + r[0];
        if (We(r[0]) && We(r[1])) return c(this.gen(r[0].x, r[1].x), this.gen(r[0].y, r[1].y));
        if (qe(r[0]) && qe(r[1])) return I(this.gen(r[0].r, r[1].r), this.gen(r[0].g, r[1].g), this.gen(r[0].b, r[1].b));
      }
    }

  };
}

i(Dt, "rng");

function ar(e) {
  return e != null && (Pt.seed = e), Pt.seed;
}

i(ar, "randSeed");

function Ne(...e) {
  return Pt.gen(...e);
}

i(Ne, "rand");

function Rt(...e) {
  return Math.floor(Ne(...e));
}

i(Rt, "randi");

function ur(e) {
  return Ne() <= e;
}

i(ur, "chance");

function cr(e) {
  return e[Rt(e.length)];
}

i(cr, "choose");

function lr(e, r) {
  return e.p2.x >= r.p1.x && e.p1.x <= r.p2.x && e.p2.y >= r.p1.y && e.p1.y <= r.p2.y;
}

i(lr, "testRectRect2");

function At(e, r) {
  return e.p2.x > r.p1.x && e.p1.x < r.p2.x && e.p2.y > r.p1.y && e.p1.y < r.p2.y;
}

i(At, "testRectRect");

function Mt(e, r) {
  if (e.p1.x === e.p2.x && e.p1.y === e.p2.y || r.p1.x === r.p2.x && r.p1.y === r.p2.y) return null;
  let t = (r.p2.y - r.p1.y) * (e.p2.x - e.p1.x) - (r.p2.x - r.p1.x) * (e.p2.y - e.p1.y);
  if (t === 0) return null;
  let a = ((r.p2.x - r.p1.x) * (e.p1.y - r.p1.y) - (r.p2.y - r.p1.y) * (e.p1.x - r.p1.x)) / t,
      U = ((e.p2.x - e.p1.x) * (e.p1.y - r.p1.y) - (e.p2.y - e.p1.y) * (e.p1.x - r.p1.x)) / t;
  return a < 0 || a > 1 || U < 0 || U > 1 ? null : a;
}

i(Mt, "testLineLineT");

function De(e, r) {
  let t = Mt(e, r);
  return t ? c(e.p1.x + t * (e.p2.x - e.p1.x), e.p1.y + t * (e.p2.y - e.p1.y)) : null;
}

i(De, "testLineLine");

function at(e, r) {
  return Te(e, r.p1) || Te(e, r.p2) ? !0 : !!De(r, mt(e.p1, c(e.p2.x, e.p1.y))) || !!De(r, mt(c(e.p2.x, e.p1.y), e.p2)) || !!De(r, mt(e.p2, c(e.p1.x, e.p2.y))) || !!De(r, mt(c(e.p1.x, e.p2.y), e.p1));
}

i(at, "testRectLine");

function Te(e, r) {
  return r.x > e.p1.x && r.x < e.p2.x && r.y > e.p1.y && r.y < e.p2.y;
}

i(Te, "testRectPoint");

function dr(e, r) {
  return !1;
}

i(dr, "testRectCircle");

function ut(e, r) {
  return lt(r, [e.p1, c(e.p2.x, e.p1.y), e.p2, c(e.p1.x, e.p2.y)]);
}

i(ut, "testRectPolygon");

function hr(e, r) {
  return !1;
}

i(hr, "testLinePoint");

function fr(e, r) {
  return !1;
}

i(fr, "testLineCircle");

function Qe(e, r) {
  if ($e(r, e.p1) || $e(r, e.p2)) return !0;

  for (let t = 0; t < r.length; t++) {
    let a = r[t],
        U = r[(t + 1) % r.length];
    if (De(e, {
      p1: a,
      p2: U
    })) return !0;
  }

  return !1;
}

i(Qe, "testLinePolygon");

function ct(e, r) {
  return e.center.dist(r) < e.radius;
}

i(ct, "testCirclePoint");

function Vt(e, r) {
  return e.center.dist(r.center) < e.radius + r.radius;
}

i(Vt, "testCircleCircle");

function mr(e, r) {
  return !1;
}

i(mr, "testCirclePolygon");

function lt(e, r) {
  for (let t = 0; t < e.length; t++) {
    let a = {
      p1: e[t],
      p2: e[(t + 1) % e.length]
    };
    if (Qe(a, r)) return !0;
  }

  return !1;
}

i(lt, "testPolygonPolygon");

function $e(e, r) {
  let t = !1;

  for (let a = 0; a < e.length; a++) {
    let U = e[a],
        S = e[(a + 1) % e.length];
    (U.y > r.y && S.y < r.y || U.y < r.y && S.y > r.y) && r.x < (S.x - U.x) * (r.y - U.y) / (S.y - U.y) + U.x && (t = !t);
  }

  return t;
}

i($e, "testPolygonPoint");

function pn(e, r) {
  return e.eq(r);
}

i(pn, "testPointPoint");

function dt(e, r) {
  switch (e.shape) {
    case "rect":
      return At(r, e);

    case "line":
      return at(r, e);

    case "circle":
      return dr(r, e);

    case "polygon":
      return ut(r, e.pts);

    case "point":
      return Te(r, e.pt);
  }

  throw new Error(`Unknown area shape: ${e.shape}`);
}

i(dt, "testAreaRect");

function kt(e, r) {
  switch (e.shape) {
    case "rect":
      return at(e, r);

    case "line":
      return Boolean(De(e, r));

    case "circle":
      return fr(r, e);

    case "polygon":
      return Qe(r, e.pts);

    case "point":
      return hr(r, e.pt);
  }

  throw new Error(`Unknown area shape: ${e.shape}`);
}

i(kt, "testAreaLine");

function It(e, r) {
  switch (e.shape) {
    case "rect":
      return dr(e, r);

    case "line":
      return fr(e, r);

    case "circle":
      return Vt(e, r);

    case "polygon":
      return mr(r, e.pts);

    case "point":
      return ct(r, e.pt);
  }

  throw new Error(`Unknown area shape: ${e.shape}`);
}

i(It, "testAreaCircle");

function Lt(e, r) {
  switch (e.shape) {
    case "rect":
      return ut(e, r);

    case "line":
      return Qe(e, r);

    case "circle":
      return mr(e, r);

    case "polygon":
      return lt(r, e.pts);

    case "point":
      return $e(r, e.pt);
  }

  throw new Error(`Unknown area shape: ${e.shape}`);
}

i(Lt, "testAreaPolygon");

function ht(e, r) {
  switch (e.shape) {
    case "rect":
      return Te(e, r);

    case "line":
      return hr(e, r);

    case "circle":
      return ct(e, r);

    case "polygon":
      return $e(e.pts, r);

    case "point":
      return pn(e.pt, r);
  }

  throw new Error(`Unknown area shape: ${e.shape}`);
}

i(ht, "testAreaPoint");

function Ft(e, r) {
  switch (r.shape) {
    case "rect":
      return dt(e, r);

    case "line":
      return kt(e, r);

    case "circle":
      return It(e, r);

    case "polygon":
      return Lt(e, r.pts);

    case "point":
      return ht(e, r.pt);
  }

  throw new Error(`Unknown area shape: ${r.shape}`);
}

i(Ft, "testAreaArea");

function ft(e, r) {
  return {
    p1: c(e.p1.x - r.p2.x, e.p1.y - r.p2.y),
    p2: c(e.p2.x - r.p1.x, e.p2.y - r.p1.y)
  };
}

i(ft, "minkDiff");

function mt(e, r) {
  return {
    p1: e.clone(),
    p2: r.clone()
  };
}

i(mt, "makeLine");
var he = class extends Map {
  constructor(...r) {
    super(...r);
    Kt(this, "_lastID");
    this._lastID = 0;
  }

  push(r) {
    let t = this._lastID;
    return this.set(t, r), this._lastID++, t;
  }

  pushd(r) {
    let t = this.push(r);
    return () => this.delete(t);
  }

};
i(he, "IDList");

function Ot(e, r) {
  let t = typeof e,
      a = typeof r;
  if (t !== a) return !1;

  if (t === "object" && a === "object") {
    let U = Object.keys(e),
        S = Object.keys(r);
    if (U.length !== S.length) return !1;

    for (let v of U) {
      let D = e[v],
          V = r[v];
      if (!(typeof D == "function" && typeof V == "function") && !Ot(D, V)) return !1;
    }

    return !0;
  }

  return e === r;
}

i(Ot, "deepEq");

function _t(e, r) {
  let t = document.createElement("a");
  document.body.appendChild(t), t.setAttribute("style", "display: none"), t.href = e, t.download = r, t.click(), document.body.removeChild(t);
}

i(_t, "downloadURL");

function pr(e, r) {
  let t = URL.createObjectURL(e);
  _t(t, r), URL.revokeObjectURL(t);
}

i(pr, "downloadBlob");
var pt = "topleft",
    Ke = 9,
    yt = 65536,
    yr = 64,
    yn = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`,
    bn = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`,
    Xt = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`,
    Wt = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;

function Ge(e) {
  switch (e) {
    case "topleft":
      return c(-1, -1);

    case "top":
      return c(0, -1);

    case "topright":
      return c(1, -1);

    case "left":
      return c(-1, 0);

    case "center":
      return c(0, 0);

    case "right":
      return c(1, 0);

    case "botleft":
      return c(-1, 1);

    case "bot":
      return c(0, 1);

    case "botright":
      return c(1, 1);

    default:
      return e;
  }
}

i(Ge, "originPt");

function br(e, r) {
  let t = (() => {
    var C;
    let o = S(Xt, Wt),
        f = U(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)),
        g = (C = r.background) != null ? C : I(0, 0, 0);
    e.clearColor(g.r / 255, g.g / 255, g.b / 255, 1), e.enable(e.BLEND), e.enable(e.SCISSOR_TEST), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
    let R = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, R), e.bufferData(e.ARRAY_BUFFER, yt * 4, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, null);
    let x = e.createBuffer();
    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, x), e.bufferData(e.ELEMENT_ARRAY_BUFFER, yt * 2, e.DYNAMIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
    let E = U(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), {
      wrap: "repeat",
      filter: "nearest"
    });
    return {
      drawCalls: 0,
      lastDrawCalls: 0,
      defShader: o,
      curShader: o,
      defTex: f,
      curTex: f,
      curUniform: {},
      vbuf: R,
      ibuf: x,
      vqueue: [],
      iqueue: [],
      transform: le(),
      transformStack: [],
      background: g,
      bgTex: E,
      width: r.width,
      height: r.height
    };
  })();

  function a(o) {
    return Math.log(o) / Math.log(2) % 1 == 0;
  }

  i(a, "powerOfTwo");

  function U(o, f = {}) {
    let g = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, g), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, o);

    let R = (() => {
      var E;

      switch ((E = f.filter) != null ? E : r.texFilter) {
        case "linear":
          return e.LINEAR;

        case "nearest":
          return e.NEAREST;

        default:
          return e.NEAREST;
      }
    })(),
        x = (() => {
      switch (f.wrap) {
        case "repeat":
          return e.REPEAT;

        case "clampToEdge":
          return e.CLAMP_TO_EDGE;

        default:
          return e.CLAMP_TO_EDGE;
      }
    })();

    return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, R), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, R), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, x), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, x), e.bindTexture(e.TEXTURE_2D, null), {
      width: o.width,
      height: o.height,

      bind() {
        e.bindTexture(e.TEXTURE_2D, g);
      },

      unbind() {
        e.bindTexture(e.TEXTURE_2D, null);
      }

    };
  }

  i(U, "makeTex");

  function S(o = Xt, f = Wt) {
    let g,
        R = yn.replace("{{user}}", o != null ? o : Xt),
        x = bn.replace("{{user}}", f != null ? f : Wt),
        E = e.createShader(e.VERTEX_SHADER),
        C = e.createShader(e.FRAGMENT_SHADER);
    if (e.shaderSource(E, R), e.shaderSource(C, x), e.compileShader(E), e.compileShader(C), g = e.getShaderInfoLog(E)) throw new Error(g);
    if (g = e.getShaderInfoLog(C)) throw new Error(g);
    let O = e.createProgram();
    if (e.attachShader(O, E), e.attachShader(O, C), e.bindAttribLocation(O, 0, "a_pos"), e.bindAttribLocation(O, 1, "a_uv"), e.bindAttribLocation(O, 2, "a_color"), e.linkProgram(O), (g = e.getProgramInfoLog(O)) && g !== `
`) throw new Error(g);
    return {
      bind() {
        e.useProgram(O);
      },

      unbind() {
        e.useProgram(null);
      },

      bindAttribs() {
        e.vertexAttribPointer(0, 3, e.FLOAT, !1, Ke * 4, 0), e.enableVertexAttribArray(0), e.vertexAttribPointer(1, 2, e.FLOAT, !1, Ke * 4, 12), e.enableVertexAttribArray(1), e.vertexAttribPointer(2, 4, e.FLOAT, !1, Ke * 4, 20), e.enableVertexAttribArray(2);
      },

      send(j) {
        this.bind();

        for (let re in j) {
          let Z = j[re],
              ee = e.getUniformLocation(O, re);
          typeof Z == "number" ? e.uniform1f(ee, Z) : sr(Z) ? e.uniformMatrix4fv(ee, !1, new Float32Array(Z.m)) : qe(Z) ? e.uniform4f(ee, Z.r, Z.g, Z.b, Z.a) : nr(Z) ? e.uniform3f(ee, Z.x, Z.y, Z.z) : We(Z) && e.uniform2f(ee, Z.x, Z.y);
        }

        this.unbind();
      }

    };
  }

  i(S, "makeShader");

  function v(o, f, g, R) {
    let x = o.width / f,
        E = o.height / g,
        C = 1 / x,
        O = 1 / E,
        j = {},
        re = R.split("").entries();

    for (let [Z, ee] of re) j[ee] = c(Z % x * C, Math.floor(Z / x) * O);

    return {
      tex: o,
      map: j,
      qw: C,
      qh: O
    };
  }

  i(v, "makeFont");

  function D(o, f, g = t.defTex, R = t.defShader, x = {}) {
    g = g != null ? g : t.defTex, R = R != null ? R : t.defShader, (g !== t.curTex || R !== t.curShader || !Ot(t.curUniform, x) || t.vqueue.length + o.length * Ke > yt || t.iqueue.length + f.length > yt) && V(), t.curTex = g, t.curShader = R, t.curUniform = x, f.forEach(E => {
      t.iqueue.push(E + t.vqueue.length / Ke);
    }), o.forEach(E => {
      let C = Y(t.transform.multVec2(E.pos.xy()));
      t.vqueue.push(C.x, C.y, E.pos.z, E.uv.x, E.uv.y, E.color.r / 255, E.color.g / 255, E.color.b / 255, E.opacity);
    });
  }

  i(D, "drawRaw");

  function V() {
    !t.curTex || !t.curShader || t.vqueue.length === 0 || t.iqueue.length === 0 || (t.curShader.send(t.curUniform), e.bindBuffer(e.ARRAY_BUFFER, t.vbuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(t.vqueue)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.ibuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(t.iqueue)), t.curShader.bind(), t.curShader.bindAttribs(), t.curTex.bind(), e.drawElements(e.TRIANGLES, t.iqueue.length, e.UNSIGNED_SHORT, 0), t.curTex.unbind(), t.curShader.unbind(), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), t.iqueue = [], t.vqueue = [], t.drawCalls++);
  }

  i(V, "flush");

  function A() {
    e.clear(e.COLOR_BUFFER_BIT), r.background || T({
      width: Ee(),
      height: ce(),
      quad: de(0, 0, Ee() * xe() / yr, ce() * xe() / yr),
      tex: t.bgTex
    }), t.drawCalls = 0, t.transformStack = [], t.transform = le();
  }

  i(A, "frameStart");

  function L() {
    V(), t.lastDrawCalls = t.drawCalls;
  }

  i(L, "frameEnd");

  function H() {
    return t.lastDrawCalls;
  }

  i(H, "drawCalls");

  function Y(o) {
    return c(o.x / Ee() * 2 - 1, -o.y / ce() * 2 + 1);
  }

  i(Y, "toNDC");

  function ie(o) {
    t.transform = o.clone();
  }

  i(ie, "applyMatrix");

  function N(...o) {
    if (o[0] === void 0) return;
    let f = c(...o);
    f.x === 0 && f.y === 0 || (t.transform = t.transform.translate(f));
  }

  i(N, "pushTranslate");

  function oe(...o) {
    if (o[0] === void 0) return;
    let f = c(...o);
    f.x === 1 && f.y === 1 || (t.transform = t.transform.scale(f));
  }

  i(oe, "pushScale");

  function J(o) {
    !o || (t.transform = t.transform.rotateX(o));
  }

  i(J, "pushRotateX");

  function ue(o) {
    !o || (t.transform = t.transform.rotateY(o));
  }

  i(ue, "pushRotateY");

  function y(o) {
    !o || (t.transform = t.transform.rotateZ(o));
  }

  i(y, "pushRotateZ");

  function ye() {
    t.transformStack.push(t.transform.clone());
  }

  i(ye, "pushTransform");

  function P() {
    t.transformStack.length > 0 && (t.transform = t.transformStack.pop());
  }

  i(P, "popTransform");

  function T(o) {
    var j;
    if (o.width === void 0 || o.height === void 0) throw new Error('drawUVQuad() requires property "width" and "height".');
    if (o.width <= 0 || o.height <= 0) return;
    let f = o.width,
        g = o.height,
        x = Ge(o.origin || pt).scale(c(f, g).scale(-.5)),
        E = o.quad || de(0, 0, 1, 1),
        C = o.color || I(255, 255, 255),
        O = (j = o.opacity) != null ? j : 1;
    ye(), N(o.pos), y(o.angle), oe(o.scale), N(x), D([{
      pos: Pe(-f / 2, g / 2, 0),
      uv: c(o.flipX ? E.x + E.w : E.x, o.flipY ? E.y : E.y + E.h),
      color: C,
      opacity: O
    }, {
      pos: Pe(-f / 2, -g / 2, 0),
      uv: c(o.flipX ? E.x + E.w : E.x, o.flipY ? E.y + E.h : E.y),
      color: C,
      opacity: O
    }, {
      pos: Pe(f / 2, -g / 2, 0),
      uv: c(o.flipX ? E.x : E.x + E.w, o.flipY ? E.y + E.h : E.y),
      color: C,
      opacity: O
    }, {
      pos: Pe(f / 2, g / 2, 0),
      uv: c(o.flipX ? E.x : E.x + E.w, o.flipY ? E.y : E.y + E.h),
      color: C,
      opacity: O
    }], [0, 1, 3, 1, 2, 3], o.tex, o.shader, o.uniform), P();
  }

  i(T, "drawUVQuad");

  function _(o) {
    var E;
    if (!o.tex) throw new Error('drawTexture() requires property "tex".');
    let f = (E = o.quad) != null ? E : de(0, 0, 1, 1),
        g = o.tex.width * f.w,
        R = o.tex.height * f.h,
        x = c(1);

    if (o.tiled) {
      let C = Math.ceil((o.width || g) / g),
          O = Math.ceil((o.height || R) / R),
          re = Ge(o.origin || pt).add(c(1, 1)).scale(.5).scale(C * g, O * R);

      for (let Z = 0; Z < C; Z++) for (let ee = 0; ee < O; ee++) T(se(ne({}, o), {
        pos: (o.pos || c(0)).add(c(g * Z, R * ee)).sub(re),
        scale: x.scale(o.scale || c(1)),
        tex: o.tex,
        quad: f,
        width: g,
        height: R,
        origin: "topleft"
      }));
    } else o.width && o.height ? (x.x = o.width / g, x.y = o.height / R) : o.width ? (x.x = o.width / g, x.y = x.x) : o.height && (x.y = o.height / R, x.x = x.y), T(se(ne({}, o), {
      scale: x.scale(o.scale || c(1)),
      tex: o.tex,
      quad: f,
      width: g,
      height: R
    }));
  }

  i(_, "drawTexture");

  function z(o, f, g, R, x, E = 1) {
    R = Be(R % 360), x = Be(x % 360), x <= R && (x += Math.PI * 2);
    let C = Math.ceil(Math.max(Math.sqrt(f + g) * 3 * (E || 1), 16)),
        O = (x - R) / C,
        j = [];

    for (let re = R; re < x; re += O) j.push(o.add(f * Math.cos(re), g * Math.sin(re)));

    return j.push(o.add(f * Math.cos(x), g * Math.sin(x))), j;
  }

  i(z, "getArcPts");

  function X(o) {
    if (o.width === void 0 || o.height === void 0) throw new Error('drawRect() requires property "width" and "height".');
    if (o.width <= 0 || o.height <= 0) return;
    let f = o.width,
        g = o.height,
        x = Ge(o.origin || pt).add(1, 1).scale(c(f, g).scale(-.5)),
        E = [c(0, 0), c(f, 0), c(f, g), c(0, g)];

    if (o.radius) {
      let C = Math.min(Math.min(f, g) / 2, o.radius);
      E = [c(C, 0), c(f - C, 0), ...z(c(f - C, C), C, C, 270, 360), c(f, C), c(f, g - C), ...z(c(f - C, g - C), C, C, 0, 90), c(f - C, g), c(C, g), ...z(c(C, g - C), C, C, 90, 180), c(0, g - C), c(0, C), ...z(c(C, C), C, C, 180, 270)];
    }

    ae(se(ne({}, o), {
      offset: x,
      pts: E
    }));
  }

  i(X, "drawRect");

  function W(o) {
    let {
      p1: f,
      p2: g
    } = o;
    if (!f || !g) throw new Error('drawLine() requires properties "p1" and "p2".');
    let R = o.width || 1,
        x = g.sub(f).unit().normal().scale(R * .5),
        E = [f.sub(x), f.add(x), g.add(x), g.sub(x)].map(C => {
      var O, j;
      return {
        pos: Pe(C.x, C.y, 0),
        uv: c(0),
        color: (O = o.color) != null ? O : I(),
        opacity: (j = o.opacity) != null ? j : 1
      };
    });
    D(E, [0, 1, 3, 1, 2, 3], t.defTex, o.shader, o.uniform);
  }

  i(W, "drawLine");

  function k(o) {
    let f = o.pts;
    if (!f) throw new Error('drawLines() requires property "pts".');
    if (!(f.length < 2)) if (o.radius && f.length >= 3) {
      let g = f[0].dist(f[1]);

      for (let x = 1; x < f.length - 1; x++) g = Math.min(f[x].dist(f[x + 1]), g);

      let R = Math.min(o.radius, g / 2);
      W(se(ne({}, o), {
        p1: f[0],
        p2: f[1]
      }));

      for (let x = 1; x < f.length - 2; x++) {
        let E = f[x],
            C = f[x + 1];
        W(se(ne({}, o), {
          p1: E,
          p2: C
        }));
      }

      W(se(ne({}, o), {
        p1: f[f.length - 2],
        p2: f[f.length - 1]
      }));
    } else for (let g = 0; g < f.length - 1; g++) W(se(ne({}, o), {
      p1: f[g],
      p2: f[g + 1]
    }));
  }

  i(k, "drawLines");

  function q(o) {
    if (!o.p1 || !o.p2 || !o.p3) throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
    return ae(se(ne({}, o), {
      pts: [o.p1, o.p2, o.p3]
    }));
  }

  i(q, "drawTriangle");

  function $(o) {
    if (!o.radius) throw new Error('drawCircle() requires property "radius".');
    o.radius !== 0 && F(se(ne({}, o), {
      radiusX: o.radius,
      radiusY: o.radius,
      angle: 0
    }));
  }

  i($, "drawCircle");

  function F(o) {
    var f, g;
    if (o.radiusX === void 0 || o.radiusY === void 0) throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
    o.radiusX === 0 || o.radiusY === 0 || ae(se(ne({}, o), {
      pts: z(c(0), o.radiusX, o.radiusY, (f = o.start) != null ? f : 0, (g = o.end) != null ? g : 360, o.resolution),
      radius: 0
    }));
  }

  i(F, "drawEllipse");

  function ae(o) {
    var g, R;
    if (!o.pts) throw new Error('drawPolygon() requires property "pts".');
    let f = o.pts.length;

    if (!(f < 3)) {
      if (ye(), N(o.pos), oe(o.scale), y(o.angle), N(o.offset), o.fill !== !1) {
        let x = (g = o.color) != null ? g : I(),
            E = o.pts.map(O => {
          var j;
          return {
            pos: Pe(O.x, O.y, 0),
            uv: c(0, 0),
            color: x,
            opacity: (j = o.opacity) != null ? j : 1
          };
        }),
            C = [...Array(f - 2).keys()].map(O => [0, O + 1, O + 2]).flat();
        D(E, (R = o.indices) != null ? R : C, t.defTex, o.shader, o.uniform);
      }

      o.outline && k({
        pts: [...o.pts, o.pts[0]],
        radius: o.radius,
        width: o.outline.width,
        color: o.outline.color
      }), P();
    }
  }

  i(ae, "drawPolygon");

  function w(o) {
    if (o.text === void 0) throw new Error('fmtText() requires property "text".');
    let f = o.font,
        g = (o.text + "").split(""),
        R = f.qw * f.tex.width,
        x = f.qh * f.tex.height,
        E = o.size || x,
        C = c(E / x).scale(c(o.scale || 1)),
        O = C.x * R,
        j = C.y * x,
        re = 0,
        Z = j,
        ee = 0,
        Me = [],
        fe = [],
        be = null,
        me = 0;

    for (; me < g.length;) {
      let ge = g[me];
      ge === `
` ? (Z += j, re = 0, be = null, Me.push(fe), fe = []) : (o.width ? re + O > o.width : !1) && (Z += j, re = 0, be != null && (me -= fe.length - be, ge = g[me], fe = fe.slice(0, be)), be = null, Me.push(fe), fe = []), ge !== `
` && (fe.push(ge), re += O, ge === " " && (be = fe.length)), ee = Math.max(ee, re), me++;
    }

    Me.push(fe), o.width && (ee = o.width);
    let Ye = [],
        ve = c(o.pos || 0),
        Ve = Ge(o.origin || pt).scale(.5),
        et = -Ve.x * O - (Ve.x + .5) * (ee - O),
        Ut = -Ve.y * j - (Ve.y + .5) * (Z - j),
        ze = 0;
    return Me.forEach((ge, tt) => {
      let gt = (ee - ge.length * O) * (Ve.x + .5);
      ge.forEach((Ze, Se) => {
        var rt, nt;
        let Je = f.map[Ze],
            wt = Se * O,
            xt = tt * j;

        if (ze += 1, Je) {
          let we = {
            tex: f.tex,
            quad: de(Je.x, Je.y, f.qw, f.qh),
            ch: Ze,
            pos: c(ve.x + wt + et + gt, ve.y + xt + Ut),
            opacity: o.opacity,
            color: (rt = o.color) != null ? rt : I(255, 255, 255),
            origin: o.origin,
            scale: C,
            angle: 0
          };

          if (o.transform) {
            let Ue = (nt = o.transform(ze, Ze)) != null ? nt : {};
            Ue.pos && (we.pos = we.pos.add(Ue.pos)), Ue.scale && (we.scale = we.scale.scale(c(Ue.scale))), Ue.angle && (we.angle += Ue.angle), Ue.color && (we.color = we.color.mult(Ue.color)), Ue.opacity && (we.opacity *= Ue.opacity);
          }

          Ye.push(we);
        }
      });
    }), {
      width: ee,
      height: Z,
      chars: Ye
    };
  }

  i(w, "fmtText");

  function G(o) {
    Re(w(o));
  }

  i(G, "drawText");

  function Re(o) {
    for (let f of o.chars) T({
      tex: f.tex,
      width: f.tex.width * f.quad.w,
      height: f.tex.height * f.quad.h,
      pos: f.pos,
      scale: f.scale,
      angle: f.angle,
      color: f.color,
      opacity: f.opacity,
      quad: f.quad,
      origin: "center"
    });
  }

  i(Re, "drawFmtText");

  function Ae() {
    if (r.width && r.height && r.stretch) {
      if (r.letterbox) {
        let o = e.drawingBufferWidth / e.drawingBufferHeight,
            f = r.width / r.height;

        if (o > f) {
          t.width = r.height * o, t.height = r.height;
          let g = e.drawingBufferHeight * f,
              R = e.drawingBufferHeight,
              x = (e.drawingBufferWidth - g) / 2;
          e.scissor(x, 0, g, R), e.viewport(x, 0, e.drawingBufferWidth, e.drawingBufferHeight);
        } else {
          t.width = r.width, t.height = r.width / o;
          let g = e.drawingBufferWidth,
              R = e.drawingBufferWidth / f,
              x = (e.drawingBufferHeight - R) / 2;
          e.scissor(0, e.drawingBufferHeight - R - x, g, R), e.viewport(0, -x, e.drawingBufferWidth, e.drawingBufferHeight);
        }
      } else t.width = r.width, t.height = r.height, e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight);
    } else t.width = e.drawingBufferWidth / xe(), t.height = e.drawingBufferHeight / xe(), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight);
  }

  i(Ae, "updateSize");

  function Ee() {
    return t.width;
  }

  i(Ee, "width");

  function ce() {
    return t.height;
  }

  i(ce, "height");

  function xe() {
    var o;
    return (o = r.scale) != null ? o : 1;
  }

  i(xe, "scale");

  function bt() {
    return t.background.clone();
  }

  return i(bt, "background"), Ae(), A(), L(), {
    width: Ee,
    height: ce,
    scale: xe,
    makeTex: U,
    makeShader: S,
    makeFont: v,
    drawTexture: _,
    drawText: G,
    drawFmtText: Re,
    drawRect: X,
    drawLine: W,
    drawLines: k,
    drawTriangle: q,
    drawCircle: $,
    drawEllipse: F,
    drawPolygon: ae,
    drawUVQuad: T,
    fmtText: w,
    frameStart: A,
    frameEnd: L,
    pushTranslate: N,
    pushScale: oe,
    pushRotateX: J,
    pushRotateY: ue,
    pushRotateZ: y,
    pushTransform: ye,
    popTransform: P,
    applyMatrix: ie,
    drawCalls: H,
    background: bt
  };
}

i(br, "gfxInit");

function Ur(e) {
  return e === "pressed" || e === "rpressed" ? "down" : e === "released" ? "up" : e;
}

i(Ur, "processBtnState");

function Un(e) {
  e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
}

i(Un, "enterFullscreen");

function gn() {
  document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
}

i(gn, "exitFullscreen");

function wn() {
  return document.fullscreenElement || document.webkitFullscreenElement;
}

i(wn, "getFullscreenElement");

function gr(e = {}) {
  var $, F, ae;
  let r = ($ = e.root) != null ? $ : document.body;
  r === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
  let t = {
    canvas: (F = e.canvas) != null ? F : (() => {
      let w = document.createElement("canvas");
      return r.appendChild(w), w;
    })(),
    keyStates: {},
    charInputted: [],
    isMouseMoved: !1,
    isKeyPressed: !1,
    isKeyPressedRepeat: !1,
    mouseStates: {},
    mousePos: c(0, 0),
    mouseDeltaPos: c(0, 0),
    time: 0,
    realTime: 0,
    skipTime: !1,
    dt: 0,
    scale: (ae = e.scale) != null ? ae : 1,
    isTouch: !1,
    loopID: null,
    stopped: !1,
    fps: 0,
    fpsBuf: [],
    fpsTimer: 0
  },
      a = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
    ArrowDown: "down",
    " ": "space"
  },
      U = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "s"];
  e.width && e.height && !e.stretch ? (t.canvas.width = e.width * t.scale, t.canvas.height = e.height * t.scale) : (t.canvas.width = t.canvas.parentElement.offsetWidth, t.canvas.height = t.canvas.parentElement.offsetHeight);
  let S = ["outline: none", "cursor: default"];
  e.crisp && (S.push("image-rendering: pixelated"), S.push("image-rendering: crisp-edges")), t.canvas.style = S.join(";"), t.canvas.setAttribute("tabindex", "0");
  let v = t.canvas.getContext("webgl", {
    antialias: !0,
    depth: !0,
    stencil: !0,
    alpha: !0,
    preserveDrawingBuffer: !0
  });
  t.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0, t.canvas.addEventListener("mousemove", w => {
    W() ? t.mousePos = c(w.offsetX, w.offsetY).scale(1 / t.scale) : t.mousePos = c(w.offsetX, w.offsetY).scale(1 / t.scale), t.mouseDeltaPos = c(w.movementX, w.movementY).scale(1 / t.scale), t.isMouseMoved = !0;
  });
  let D = ["left", "middle", "right", "back", "forward"];
  t.canvas.addEventListener("mousedown", w => {
    let G = D[w.button];
    G && (t.mouseStates[G] = "pressed");
  }), t.canvas.addEventListener("mouseup", w => {
    let G = D[w.button];
    G && (t.mouseStates[G] = "released");
  }), t.canvas.addEventListener("keydown", w => {
    let G = a[w.key] || w.key.toLowerCase();
    U.includes(G) && w.preventDefault(), G.length === 1 && t.charInputted.push(w.key), G === "space" && t.charInputted.push(" "), w.repeat ? (t.isKeyPressedRepeat = !0, t.keyStates[G] = "rpressed") : (t.isKeyPressed = !0, t.keyStates[G] = "pressed");
  }), t.canvas.addEventListener("keyup", w => {
    let G = a[w.key] || w.key.toLowerCase();
    t.keyStates[G] = "released";
  }), t.canvas.addEventListener("touchstart", w => {
    if (!e.touchToMouse) return;
    w.preventDefault();
    let G = w.touches[0];
    t.mousePos = c(G.clientX, G.clientY).scale(1 / t.scale), t.mouseStates.left = "pressed";
  }), t.canvas.addEventListener("touchmove", w => {
    if (!e.touchToMouse) return;
    w.preventDefault();
    let G = w.touches[0];
    t.mousePos = c(G.clientX, G.clientY).scale(1 / t.scale), t.isMouseMoved = !0;
  }), t.canvas.addEventListener("touchend", w => {
    !e.touchToMouse || (t.mouseStates.left = "released");
  }), t.canvas.addEventListener("touchcancel", w => {
    !e.touchToMouse || (t.mouseStates.left = "released");
  }), t.canvas.addEventListener("contextmenu", function (w) {
    w.preventDefault();
  }), document.addEventListener("visibilitychange", () => {
    var w, G;

    switch (document.visibilityState) {
      case "visible":
        t.skipTime = !0, (w = e.audioCtx) == null || w.resume();
        break;

      case "hidden":
        (G = e.audioCtx) == null || G.suspend();
        break;
    }
  });

  function V() {
    return t.mousePos.clone();
  }

  i(V, "mousePos");

  function A() {
    return t.mouseDeltaPos.clone();
  }

  i(A, "mouseDeltaPos");

  function L(w = "left") {
    return t.mouseStates[w] === "pressed";
  }

  i(L, "isMousePressed");

  function H(w = "left") {
    return t.mouseStates[w] === "pressed" || t.mouseStates[w] === "down";
  }

  i(H, "isMouseDown");

  function Y(w = "left") {
    return t.mouseStates[w] === "released";
  }

  i(Y, "isMouseReleased");

  function ie() {
    return t.isMouseMoved;
  }

  i(ie, "isMouseMoved");

  function N(w) {
    return w === void 0 ? t.isKeyPressed : t.keyStates[w] === "pressed";
  }

  i(N, "isKeyPressed");

  function oe(w) {
    return w === void 0 ? t.isKeyPressedRepeat : t.keyStates[w] === "pressed" || t.keyStates[w] === "rpressed";
  }

  i(oe, "isKeyPressedRepeat");

  function J(w) {
    return t.keyStates[w] === "pressed" || t.keyStates[w] === "rpressed" || t.keyStates[w] === "down";
  }

  i(J, "isKeyDown");

  function ue(w) {
    return t.keyStates[w] === "released";
  }

  i(ue, "isKeyReleased");

  function y() {
    return [...t.charInputted];
  }

  i(y, "charInputted");

  function ye() {
    return t.dt;
  }

  i(ye, "dt");

  function P() {
    return t.time;
  }

  i(P, "time");

  function T() {
    return t.fps;
  }

  i(T, "fps");

  function _() {
    return t.canvas.toDataURL();
  }

  i(_, "screenshot");

  function z(w) {
    return w && (t.canvas.style.cursor = w), t.canvas.style.cursor;
  }

  i(z, "cursor");

  function X(w = !0) {
    w ? Un(t.canvas) : gn();
  }

  i(X, "fullscreen");

  function W() {
    return Boolean(wn());
  }

  i(W, "isFullscreen");

  function k(w) {
    let G = i(Re => {
      if (document.visibilityState !== "visible") {
        t.loopID = requestAnimationFrame(G);
        return;
      }

      let Ae = Re / 1e3,
          Ee = Ae - t.realTime;
      t.realTime = Ae, t.skipTime || (t.dt = Ee, t.time += t.dt, t.fpsBuf.push(1 / t.dt), t.fpsTimer += t.dt, t.fpsTimer >= 1 && (t.fpsTimer = 0, t.fps = Math.round(t.fpsBuf.reduce((ce, xe) => ce + xe) / t.fpsBuf.length), t.fpsBuf = [])), t.skipTime = !1, w();

      for (let ce in t.keyStates) t.keyStates[ce] = Ur(t.keyStates[ce]);

      for (let ce in t.mouseStates) t.mouseStates[ce] = Ur(t.mouseStates[ce]);

      t.charInputted = [], t.isMouseMoved = !1, t.isKeyPressed = !1, t.isKeyPressedRepeat = !1, t.loopID = requestAnimationFrame(G);
    }, "frame");
    t.stopped = !1, t.loopID = requestAnimationFrame(G);
  }

  i(k, "run");

  function q() {
    cancelAnimationFrame(t.loopID), t.stopped = !0;
  }

  return i(q, "quit"), {
    gl: v,
    mousePos: V,
    mouseDeltaPos: A,
    isKeyDown: J,
    isKeyPressed: N,
    isKeyPressedRepeat: oe,
    isKeyReleased: ue,
    isMouseDown: H,
    isMousePressed: L,
    isMouseReleased: Y,
    isMouseMoved: ie,
    charInputted: y,
    cursor: z,
    dt: ye,
    time: P,
    fps: T,
    screenshot: _,
    run: k,
    quit: q,
    isFocused: () => document.activeElement === t.canvas,
    focus: () => t.canvas.focus(),
    canvas: t.canvas,
    isTouch: t.isTouch,
    scale: t.scale,
    fullscreen: X,
    isFullscreen: W
  };
}

i(gr, "appInit");
var wr = tr("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
var xr = 0,
    Er = 3,
    En = 0,
    vn = 3,
    Cn = -1200,
    Bn = 1200;

function vr() {
  let e = new (window.AudioContext || window.webkitAudioContext)(),
      r = e.createGain();
  r.connect(e.destination);
  let t = {
    buf: new AudioBuffer({
      length: 1,
      numberOfChannels: 1,
      sampleRate: 44100
    })
  };
  e.decodeAudioData(wr.buffer.slice(0), v => {
    t.buf = v;
  }, () => {
    throw new Error("failed to make burp");
  });

  function a(v) {
    return v !== void 0 && (r.gain.value = pe(v, xr, Er)), r.gain.value;
  }

  i(a, "volume");

  function U(v, D = {
    loop: !1,
    volume: 1,
    speed: 1,
    detune: 0,
    seek: 0
  }) {
    var oe;
    let V = !1,
        A = e.createBufferSource();
    A.buffer = v.buf, A.loop = !!D.loop;
    let L = e.createGain();
    A.connect(L), L.connect(r);
    let H = (oe = D.seek) != null ? oe : 0;
    A.start(0, H);
    let Y = e.currentTime - H,
        ie = null,
        N = {
      stop() {
        V || (this.pause(), Y = e.currentTime);
      },

      play(J) {
        if (!V) return;
        let ue = A;
        A = e.createBufferSource(), A.buffer = ue.buffer, A.loop = ue.loop, A.playbackRate.value = ue.playbackRate.value, A.detune && (A.detune.value = ue.detune.value), A.connect(L);
        let y = J != null ? J : this.time();
        A.start(0, y), Y = e.currentTime - y, V = !1, ie = null;
      },

      pause() {
        V || (A.stop(), V = !0, ie = e.currentTime);
      },

      isPaused() {
        return V;
      },

      paused() {
        return this.isPaused();
      },

      isStopped() {
        return V;
      },

      stopped() {
        return this.isStopped();
      },

      speed(J) {
        return J !== void 0 && (A.playbackRate.value = pe(J, En, vn)), A.playbackRate.value;
      },

      detune(J) {
        return A.detune ? (J !== void 0 && (A.detune.value = pe(J, Cn, Bn)), A.detune.value) : 0;
      },

      volume(J) {
        return J !== void 0 && (L.gain.value = pe(J, xr, Er)), L.gain.value;
      },

      loop() {
        A.loop = !0;
      },

      unloop() {
        A.loop = !1;
      },

      duration() {
        return v.buf.duration;
      },

      time() {
        return V ? ie - Y : e.currentTime - Y;
      }

    };
    return N.speed(D.speed), N.detune(D.detune), N.volume(D.volume), N;
  }

  i(U, "play");

  function S(v) {
    return U(t, v);
  }

  return i(S, "burp"), {
    ctx: e,
    masterNode: r,
    volume: a,
    play: U,
    burp: S
  };
}

i(vr, "audioInit");
var Cr = "data:image/png;base64,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";
var Br = "data:image/png;base64,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";
var Tr = "data:image/png;base64,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";
var Sr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA8CAYAAACuNrLFAAAAAXNSR0IArs4c6QAAB5FJREFUeJztXe1y3DAIlDp5/1d2/1QOQrAsSL5LmjBzkzsjPoQlBGt32htPl/jeAU9SB3ykQ/OicVq/JR+NQfwML/Lj3TTF709K8vLnKnnWuHHN0XEp3iUcvdRH67ivKXnTh8i+N0ekX88N2JDzegct8UstgB2j4PrklHUT9OLqvS/83nvrvcNFquU8HZ6sp19et/yz5vEu0v59vMqo/iudGL+94DkBtS8SNzkgawA6yswFK+xYMuMac0ScOmLMY+xYBpCB1UEev/VfyQfp8zOSYIEYcquiT9mjZ7M339sRkdXQMePRkJGfJN1ZVvt2KgPAgEYZoLU2ZQCU5i17Ws5ZKI8VZJH98T3IQG6hSWQt2ketO7UAqo4wN9dxtLVECkXHSIIs3XDLBRnOOj5MB0ccHPmIPP2w+znWBQDyJjCtcCN4burXfowbLxdZ2kmhwyKp35iH91lsRD7sEPLdLW4z+otyWtbTwazg7oyLcAiGqjjAKbrQMcfIi+8ofhN9RaDip9LOBisTi9RlUbRIt6dHj9c7PmMjYz87f80/SZWFEMm4/n8Mpjw//qWhSypzCpRbOZL3wBPP0ejMV/Ke/V354T8Vn0Pktmuh4KeM9gv6/2EZRG1aYNz8zdyQFkx+F+BBCyryn4nP8H+Ys9xk+GQXtOhRHdCyeT3/dRcQVuwmEwd/qohR8CIYlanSLbz+RB89VCFm1H0AvjX/KWYBENRbWzYpNf8TQNB0jhaw8EWOySAIfQPVtK60b1l0hGhfPdpp81AHQC7g3lq7DCwE3p9TSCBawctKJFOqRUxRGD180v5RR9jmg5xQGKXwjI1oA+r7oxcAQt2sa1ORZJxd3eGZziGeCAxUE9koHAf3zpJ6svpBET3ZsBYBUUTDI8SQub98DAZbRVsT0Vi/5kf6oyKRkSdT+D0kK8/oR3aJLOKlcGrRMiCSefwNnuOQx5ucDviRfk0s0re0OoF+VIU/jQNkUL4ncAB3zOk+9pdsegvKx1BmhzJYsydfyTCvykDRswYWyfRsZPQz+EFF3zYSqIsMEyV05NNIYbYI2kT6KOAH2bfGHQCWLL6LlAL+NhI4KfUWwe6EM3yLMkhhthvw2lc0znOFNqoFRfwRn+G5SKCHtEmBzZ64Dx2In9FV4SeBnm7oYq+tBmqtqN58VVqEj70UmmjDSjM40aaxrW7WNfHdX1lr+5yOA9NmZhfItACiNMo6FzhSqoh3jgA9plJTIGICbxwjFbQPFqWV7IxeCZuc673fnw1aChKLn9GlqDcyFTvkVeHalnXN82k2gG/SpT6nadFJIYGC3BW4i9Rl+IGPCxWQQte2hYSejl/FR8+XyL8n++R34ABe1J7GAZ7U/ygO8Es/nF6xg6vyY8zuDvhK+uX1QRkkkB1H7+4/rX32/woHuORfwD8ur8+wU7+tp5anfkf+exiL0ufWB0i+iRgjPRbdbeCTSF70m0XaXkClypvBFHZ6+ABhpJBaj7L/OPTI3VETLaNqBpVvoMwOO0hhIO/NFdkIY7GD1N4ZYKdNiuR327CI5MovZJHeGnyXjtE/7UItn51DS4JEyuaVmb95BAhlmiAKdQ8qPOzZIKbQQhSl0GiBbN98YIOVRb8hWa+Fw5RDpDhT5hCFMGg1ewUpFAbZsIuQQqZrGmMjGYY0ujghjdTDIBmUSqB3jwBCHgJCiSMiautcipA8C0E0HTB83N1AqCjdQdI8+SoShfx4Up7xH+nfxQE0MThDZgcxSOYv/VRCKzlVRCVlntBX3Smsveq4U0jfI0S9ERTRwSKvqs9DG4/aq46L5Kp+n6ClCHSKlF08OoOHZ+1bbRgjr33Q4xb/ggLulk340eV4hPQZhOoryffG9NZUBoheOvSwfD1G8aNnAZchO6mN7EsUz9Cz6I/maM2P2aHMTjb4FNJn+O7OX/Fh/GQGgChSBOTIa9lnAVrWCkD0LAFlgEh/5L+0gSiagxyTpaiVrcZfHwFuWmcnH82jgUU29KAAejrV77T+wH8GH4Ap+ekHXpn4ywsUEJTdQUhVNNbTvxO0xAMS60Z7iJ41PnSSBNKk/gxFC3XhlZHAaIzHi/iWfkeeDc6SdXa6BGuO6vlB6IvLBDH0rjGE4l/p9SfdAQ/JM10AiySGvbYTAAbJpJC+Df2Tn57+jd+W3pv3U6DAp8GWt4I5O/QtnPwPiFkgVQxli17y/wUQVIV/vw0xT0O94pCQLS+S+5+HBwqeqAEmeaeQOnEGUmf4g/o/f2wUca25xesUv2ybeb8VPP4ySJ2HdbNIVCQfYenV35H/0tesfjA/q7DLrARr/IJSVl+Imd4JZJCkCpIWObbzNo92oyKUeGHElb8dCFA6Vk/kpyVXeSXtfhbATpqBir0+38HJtcLekrtE9rmFG9iljiCI8Kz15FkgKhrjzK0bH5rMDLDhpKsgkREyffIYs1Mpe2fo1dTiYOTV9XFDLj0+65+i810Ai+QlYNWbLGRPE0SrAiRRjol4UYp2MgFEEq3aAlXz2SMmG+8M9fYPJXNSy+2DdkjAsSEKB2xH41gkUI+p6naRNBLpY2wwPr4MB2BuoKb/vmc36NsifRH9BUrjBQw00npFAAAAAElFTkSuQmCC";
var Pr = "data:image/png;base64,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";
var qt = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    Dr = " \u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0";

function $t(e) {
  let r = new Image();
  return r.src = e, r.crossOrigin = "anonymous", new Promise((t, a) => {
    r.onload = () => {
      t(r);
    }, r.onerror = () => {
      a(`failed to load ${e}`);
    };
  });
}

i($t, "loadImg");

function Rr(e) {
  return e.startsWith("data:");
}

i(Rr, "isDataUrl");

function Ar(e, r, t = {}) {
  let a = {
    lastLoaderID: 0,
    loadRoot: "",
    loaders: {},
    sprites: {},
    sounds: {},
    fonts: {},
    shaders: {}
  };

  function U(P) {
    var _;

    let T = a.lastLoaderID;
    return a.loaders[T] = !1, a.lastLoaderID++, P.catch((_ = t.errHandler) != null ? _ : console.error).finally(() => a.loaders[T] = !0);
  }

  i(U, "load");

  function S() {
    let P = 0,
        T = 0;

    for (let _ in a.loaders) P += 1, a.loaders[_] && (T += 1);

    return T / P;
  }

  i(S, "loadProgress");

  function v(P) {
    return P !== void 0 && (a.loadRoot = P), a.loadRoot;
  }

  i(v, "loadRoot");

  function D(P, T, _, z, X = {}) {
    return U(new Promise((W, k) => {
      let q = Rr(T) ? T : a.loadRoot + T;
      $t(q).then($ => {
        var ae;
        let F = e.makeFont(e.makeTex($, X), _, z, (ae = X.chars) != null ? ae : qt);
        P && (a.fonts[P] = F), W(F);
      }).catch(k);
    }));
  }

  i(D, "loadFont");

  function V(P) {
    var T;
    return (T = a.sprites[P]) != null ? T : null;
  }

  i(V, "getSprite");

  function A(P) {
    var T;
    return (T = a.sounds[P]) != null ? T : null;
  }

  i(A, "getSound");

  function L(P) {
    var T;
    return (T = a.fonts[P]) != null ? T : null;
  }

  i(L, "getFont");

  function H(P) {
    var T;
    return (T = a.shaders[P]) != null ? T : null;
  }

  i(H, "getShader");

  function Y(P = 1, T = 1, _ = 0, z = 0, X = 1, W = 1) {
    let k = [],
        q = X / P,
        $ = W / T;

    for (let F = 0; F < T; F++) for (let ae = 0; ae < P; ae++) k.push(de(_ + ae * q, z + F * $, q, $));

    return k;
  }

  i(Y, "slice");

  function ie(P, T) {
    return U(typeof T == "string" ? fetch(v() + T).then(_ => _.json()).then(_ => ie(P, _)) : N(null, P).then(_ => {
      let z = {},
          X = _.tex.width,
          W = _.tex.height;

      for (let k in T) {
        let q = T[k],
            $ = {
          tex: _.tex,
          frames: Y(q.sliceX, q.sliceY, q.x / X, q.y / W, q.width / X, q.height / W),
          anims: q.anims
        };
        a.sprites[k] = $, z[k] = $;
      }

      return z;
    }));
  }

  i(ie, "loadSpriteAtlas");

  function N(P, T, _ = {
    sliceX: 1,
    sliceY: 1,
    anims: {}
  }) {
    function z(X, W, k = {
      sliceX: 1,
      sliceY: 1,
      anims: {}
    }) {
      let q = e.makeTex(W, k),
          $ = Y(k.sliceX || 1, k.sliceY || 1),
          F = {
        tex: q,
        frames: $,
        anims: k.anims || {}
      };
      return X && (a.sprites[X] = F), F;
    }

    return i(z, "loadRawSprite"), U(new Promise((X, W) => {
      if (!T) return W(`expected sprite src for "${P}"`);

      if (typeof T == "string") {
        let k = Rr(T) ? T : a.loadRoot + T;
        $t(k).then(q => X(z(P, q, _))).catch(W);
      } else X(z(P, T, _));
    }));
  }

  i(N, "loadSprite");

  function oe(P, T) {
    return U(new Promise((_, z) => {
      fetch(v() + T).then(X => X.json()).then(X => er(this, null, function* () {
        let W = yield Promise.all(X.frames.map($t)),
            k = document.createElement("canvas");
        k.width = X.width, k.height = X.height * X.frames.length;
        let q = k.getContext("2d");
        return W.forEach(($, F) => {
          q.drawImage($, 0, F * X.height);
        }), N(P, k, {
          sliceY: X.frames.length,
          anims: X.anims
        });
      })).then(_).catch(z);
    }));
  }

  i(oe, "loadPedit");

  function J(P, T, _) {
    return U(new Promise((z, X) => {
      let W = v() + _;

      N(P, T).then(k => {
        fetch(W).then(q => q.json()).then(q => {
          let $ = q.meta.size;
          k.frames = q.frames.map(F => de(F.frame.x / $.w, F.frame.y / $.h, F.frame.w / $.w, F.frame.h / $.h));

          for (let F of q.meta.frameTags) F.from === F.to ? k.anims[F.name] = F.from : k.anims[F.name] = {
            from: F.from,
            to: F.to,
            speed: 10,
            loop: !0
          };

          z(k);
        }).catch(X);
      }).catch(X);
    }));
  }

  i(J, "loadAseprite");

  function ue(P, T, _, z = !1) {
    function X(W, k, q) {
      let $ = e.makeShader(k, q);
      return W && (a.shaders[W] = $), $;
    }

    return i(X, "loadRawShader"), U(new Promise((W, k) => {
      if (!T && !_) return k("no shader");

      function q($) {
        return $ ? fetch(a.loadRoot + $).then(F => {
          if (F.ok) return F.text();
          throw new Error(`failed to load ${$}`);
        }).catch(k) : new Promise(F => F(null));
      }

      if (i(q, "resolveUrl"), z) Promise.all([q(T), q(_)]).then(([$, F]) => {
        W(X(P, $, F));
      }).catch(k);else try {
        W(X(P, T, _));
      } catch ($) {
        k($);
      }
    }));
  }

  i(ue, "loadShader");

  function y(P, T) {
    let _ = a.loadRoot + T;

    return U(new Promise((z, X) => {
      if (!T) return X(`expected sound src for "${P}"`);
      typeof T == "string" && fetch(_).then(W => {
        if (W.ok) return W.arrayBuffer();
        throw new Error(`failed to load ${_}`);
      }).then(W => new Promise((k, q) => {
        r.ctx.decodeAudioData(W, k, q);
      })).then(W => {
        let k = {
          buf: W
        };
        P && (a.sounds[P] = k), z(k);
      }).catch(X);
    }));
  }

  i(y, "loadSound");

  function ye(P = "bean") {
    return N(P, Pr);
  }

  return i(ye, "loadBean"), D("apl386", Cr, 45, 74), D("apl386o", Br, 45, 74), D("sink", Tr, 6, 8, {
    chars: "\u2588\u263A\u263B\u2665\u2666\u2663\u2660\u25CF\u25CB\u25AA\u25A1\u25A0\u25D8\u266A\u266B\u2261\u25BA\u25C4\u2302\xDE\xC0\xDF\xD7\xA5\u2191\u2193\u2192\u2190\u25CC\u25CF\u25BC\u25B2 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u03A7\u2591\u2592\u2593\u1E00\u1E01\u1E02\u2502\u252C\u2524\u250C\u2510\u1E03\u1E04\u253C\u1E05\u1E06\u1E07\u1E08\u1E09\u1E0A\u1E0B\u1E0C\u2500\u251C\u2534\u2514\u2518\u1E0D\u1E0E\u205E\u1E0F\u1E10\u1E11\u1E12\u1E13\u1E14\u1E15\u1E16\u1E17\u1E18\u2584\u1E19\u1E1A\u1E1B\u1E1C\u2026\u1E1D\u1E1E\u1E1F\u1E20\u1E21\u1E22\u1E23\u1E24\u1E25\u1E26\u258C\u2590\u1E27\u1E28\u1E29\u1E2A\u1E2B\u1E2C\u1E2D\u1E2E\u1E2F\u1E30\u1E31\u1E32\u1E33\u1E34\u1E35\u1E36\u1E37\u1E38\u1E39\u1E3A\u1E3B\u1E3C\u1E3D\u1E3E\u1E3F\u1E40\u1E41\u1E42\u1E43\u1E44\u1E45\u1E46\u1E47\u1E48\u1E49\u1E4A\u1E4B\u1E4C\u1E4D\u1E4E\u1E4F\u1E50\u1E51\u1E52\u1E53\u1E54\u1E55\u1E56\u1E57\u1E58\u1E59\u1E5A\u1E5B\u1E5C\u1E5D\u1E5E\u1E5F\u1E60\u1E61\u1E62\u1E63\u1E64\u1E65\u1E66\u1E67\u1E68\u1E69\u1E6A\u1E6B\u1E6C\u1E6D\u1E6E\u1E6F\u1E70\u1E71\u1E72\u1E73\u1E74\u1E75\u1E76\u1E77\u1E78\u1E79\u1E7A\u1E7B\u1E7C"
  }), D("sinko", Sr, 8, 10), {
    loadRoot: v,
    loadSprite: N,
    loadSpriteAtlas: ie,
    loadPedit: oe,
    loadAseprite: J,
    loadBean: ye,
    loadSound: y,
    loadFont: D,
    loadShader: ue,
    loadProgress: S,
    load: U,
    sprites: a.sprites,
    fonts: a.fonts,
    sounds: a.sounds,
    shaders: a.shaders
  };
}

i(Ar, "assetsInit");
var An = 16;

function Mr(e, r, t = {}) {
  var A;
  let a = [],
      U = (A = t.max) != null ? A : 1;

  function S() {
    a.length > U && (a = a.slice(0, U));
    let L = c(0, e.height());
    a.forEach((H, Y) => {
      let ie = Oe(Y, 0, U, 1, .5),
          N = Oe(Y, 0, U, .8, .2),
          oe = (() => {
        switch (H.type) {
          case "info":
            return I(255, 255, 255);

          case "error":
            return I(255, 0, 127);
        }
      })(),
          J = e.fmtText({
        text: H.msg,
        font: r.fonts.sink,
        pos: L,
        origin: "botleft",
        color: oe,
        size: An / e.scale(),
        width: e.width(),
        opacity: ie
      });

      e.drawRect({
        pos: L,
        width: J.width,
        height: J.height,
        origin: "botleft",
        color: I(0, 0, 0),
        opacity: N
      }), e.drawFmtText(J), L.y -= J.height;
    });
  }

  i(S, "draw");

  function v(L) {
    a.unshift({
      type: "error",
      msg: L
    });
  }

  i(v, "error");

  function D(L) {
    a.unshift({
      type: "info",
      msg: L
    });
  }

  i(D, "info");

  function V() {
    a = [];
  }

  return i(V, "clear"), {
    info: D,
    error: v,
    draw: S,
    clear: V
  };
}

i(Mr, "loggerInit");
var Vr = "data:image/png;base64,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";
var kr = "data:image/png;base64,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";
var Ir = i(e => {
  function r(S = 2, v = 1) {
    let D = 0;
    return {
      id: "explode",
      require: ["scale"],

      update() {
        let V = Math.sin(D * S) * v;
        V < 0 && e.destroy(this), this.scale = e.vec2(V), D += e.dt();
      }

    };
  }

  i(r, "explode");
  let t = null,
      a = null;
  e.loadSprite(null, Vr).then(S => t = S), e.loadSprite(null, kr).then(S => a = S);

  function U(S, v = {}) {
    var H, Y;
    let D = (v.speed || 1) * 5,
        V = v.scale || 1,
        A = e.add([e.pos(S), e.sprite(a), e.scale(0), e.stay(), e.origin("center"), r(D, V), ...((H = v.boomComps) != null ? H : () => [])()]),
        L = e.add([e.pos(S), e.sprite(t), e.scale(0), e.stay(), e.origin("center"), e.timer(.4 / D, () => L.use(r(D, V))), ...((Y = v.kaComps) != null ? Y : () => [])()]);
    return {
      destroy() {
        e.destroy(L), e.destroy(A);
      }

    };
  }

  return i(U, "addKaboom"), {
    addKaboom: U
  };
}, "default");
var Es = i((e = {}) => {
  var Jt;
  let r = vr(),
      t = gr({
    width: e.width,
    height: e.height,
    scale: e.scale,
    crisp: e.crisp,
    canvas: e.canvas,
    root: e.root,
    stretch: e.stretch,
    touchToMouse: (Jt = e.touchToMouse) != null ? Jt : !0,
    audioCtx: r.ctx
  }),
      a = br(t.gl, {
    background: e.background ? I(e.background) : void 0,
    width: e.width,
    height: e.height,
    scale: e.scale,
    texFilter: e.texFilter,
    stretch: e.stretch,
    letterbox: e.letterbox
  }),
      {
    width: U,
    height: S
  } = a,
      v = Ar(a, r, {
    errHandler: n => {
      D.error(n);
    }
  }),
      D = Mr(a, v, {
    max: e.logMax
  }),
      V = "apl386o",
      A = "sink";

  function L() {
    return t.dt() * Q.timeScale;
  }

  i(L, "dt");

  function H(n, s = {}) {
    let u = r.play({
      buf: new AudioBuffer({
        length: 1,
        numberOfChannels: 1,
        sampleRate: 44100
      })
    });
    return _e(() => {
      let h = v.sounds[n];
      if (!h) throw new Error(`sound not found: "${n}"`);
      let b = r.play(h, s);

      for (let l in b) u[l] = b[l];
    }), u;
  }

  i(H, "play");

  function Y() {
    return t.mousePos();
  }

  i(Y, "mousePos");

  function ie() {
    return y.camMousePos;
  }

  i(ie, "mouseWorldPos");

  function N(n) {
    var h, b;
    if (!n.sprite) throw new Error('drawSprite() requires property "sprite"');

    let s = (() => typeof n.sprite == "string" ? v.sprites[n.sprite] : n.sprite)();

    if (!s) throw new Error(`sprite not found: "${n.sprite}"`);
    let u = s.frames[(h = n.frame) != null ? h : 0];
    if (!u) throw new Error(`frame not found: ${(b = n.frame) != null ? b : 0}`);
    a.drawTexture(se(ne({}, n), {
      tex: s.tex,
      quad: u.scale(n.quad || de(0, 0, 1, 1))
    }));
  }

  i(N, "drawSprite");

  function oe(n) {
    var h;
    let s = (h = n.font) != null ? h : V,
        u = v.fonts[s];
    if (!u) throw new Error(`font not found: ${s}`);
    a.drawText(se(ne({}, n), {
      font: u
    }));
  }

  i(oe, "drawText");
  let J = 1600,
      ue = "topleft",
      y = {
    loaded: !1,
    events: {},
    objEvents: {},
    objs: new he(),
    timers: new he(),
    cam: {
      pos: vt(),
      scale: c(1),
      angle: 0,
      shake: 0
    },
    camMousePos: t.mousePos(),
    camMatrix: le(),
    layers: {},
    defLayer: null,
    gravity: J,

    on(n, s) {
      return this.events[n] || (this.events[n] = new he()), this.events[n].pushd(s);
    },

    trigger(n, ...s) {
      this.events[n] && this.events[n].forEach(u => u(...s));
    },

    scenes: {},
    paused: !1
  };

  function ye(n, s) {
    n.forEach((u, h) => {
      y.layers[u] = h + 1;
    }), s && (y.defLayer = s);
  }

  i(ye, "layers");

  function P(...n) {
    return n.length > 0 && (y.cam.pos = c(...n)), y.cam.pos.clone();
  }

  i(P, "camPos");

  function T(...n) {
    return n.length > 0 && (y.cam.scale = c(...n)), y.cam.scale.clone();
  }

  i(T, "camScale");

  function _(n) {
    return n !== void 0 && (y.cam.angle = n), y.cam.angle;
  }

  i(_, "camRot");

  function z(n = 12) {
    y.cam.shake = n;
  }

  i(z, "shake");

  function X(n) {
    return y.camMatrix.multVec2(n);
  }

  i(X, "toScreen");

  function W(n) {
    return y.camMatrix.invert().multVec2(n);
  }

  i(W, "toWorld");
  let k = new Set(["id", "require"]),
      q = new Set(["add", "load", "update", "draw", "destroy", "inspect"]);

  function $(n) {
    let s = new Map(),
        u = {},
        h = {},
        b = {
      _id: null,
      hidden: !1,
      paused: !1,

      use(l) {
        if (!l) return;
        if (typeof l == "string") return this.use({
          id: l
        });
        l.id && (this.unuse(l.id), s.set(l.id, {}));
        let d = l.id ? s.get(l.id) : u;
        d.cleanups = [];

        for (let m in l) if (!k.has(m)) {
          if (typeof l[m] == "function") {
            let M = l[m].bind(this);

            if (q.has(m)) {
              d.cleanups.push(this.on(m, M)), d[m] = M;
              continue;
            } else d[m] = M;
          } else d[m] = l[m];

          this[m] === void 0 && Object.defineProperty(this, m, {
            get: () => d[m],
            set: M => d[m] = M,
            configurable: !0,
            enumerable: !0
          });
        }

        let p = i(() => {
          if (!!l.require) {
            for (let m of l.require) if (!this.c(m)) throw new Error(`comp '${l.id}' requires comp '${m}'`);
          }
        }, "checkDeps");
        this.exists() ? (l.add && l.add.call(this), l.load && _e(() => l.load.call(this)), p()) : l.require && d.cleanups.push(this.on("add", () => {
          p();
        }));
      },

      unuse(l) {
        if (s.has(l)) {
          let d = s.get(l);
          d.cleanups.forEach(p => p());

          for (let p in d) delete d[p];
        }

        s.delete(l);
      },

      c(l) {
        return s.get(l);
      },

      exists() {
        return this._id !== null;
      },

      is(l) {
        if (l === "*") return !0;

        if (Array.isArray(l)) {
          for (let d of l) if (!this.c(d)) return !1;

          return !0;
        } else return this.c(l) != null;
      },

      on(l, d) {
        return h[l] || (h[l] = new he()), h[l].pushd(d);
      },

      action(...l) {
        return this.onUpdate(...l);
      },

      trigger(l, ...d) {
        h[l] && h[l].forEach(m => m.call(this, ...d));
        let p = y.objEvents[l];
        p && p.forEach(m => {
          this.is(m.tag) && m.cb(this, ...d);
        });
      },

      destroy() {
        !this.exists() || (this.trigger("destroy"), y.objs.delete(this._id), this._id = null);
      },

      inspect() {
        let l = {};

        for (let [d, p] of s) l[d] = p.inspect ? p.inspect() : null;

        return l;
      },

      onUpdate(l) {
        return this.on("update", l);
      },

      onDraw(l) {
        return this.on("draw", l);
      },

      onDestroy(l) {
        return this.on("destroy", l);
      }

    };

    for (let l of n) b.use(l);

    return b;
  }

  i($, "make");

  function F(n) {
    let s = $(n);
    return s._id = y.objs.push(s), s.trigger("add"), _e(() => s.trigger("load")), s;
  }

  i(F, "add");

  function ae(n) {
    if (!!n.exists()) return y.objs.delete(n._id), n._id = y.objs.push(n), n;
  }

  i(ae, "readd");

  function w(n, s, u) {
    return y.objEvents[n] || (y.objEvents[n] = new he()), y.objEvents[n].pushd({
      tag: s,
      cb: u
    });
  }

  i(w, "on");

  function G(n, s) {
    if (typeof n == "function" && s === void 0) {
      let u = F([{
        update: n
      }]);
      return () => ve(u);
    } else if (typeof n == "string") return w("update", n, s);
  }

  i(G, "onUpdate");

  function Re(n, s) {
    if (typeof n == "function" && s === void 0) {
      let u = F([{
        draw: n
      }]);
      return () => ve(u);
    } else if (typeof n == "string") return w("draw", n, s);
  }

  i(Re, "onDraw");

  function Ae(n, s, u) {
    let h = w("collide", n, (d, p, m) => p.is(s) && u(d, p, m)),
        b = w("collide", s, (d, p, m) => p.is(n) && u(p, d, m)),
        l = G(n, d => {
      if (!d.area) throw new Error("onCollide() requires the object to have area() component");

      d._checkCollisions(s, p => {
        u(d, p);
      });
    });
    return () => [h, b, l].forEach(d => d());
  }

  i(Ae, "onCollide");

  function Ee(n, s) {
    return typeof n == "function" ? E(n) : G(n, u => {
      if (!u.area) throw new Error("onClick() requires the object to have area() component");
      u.isClicked() && s(u);
    });
  }

  i(Ee, "onClick");

  function ce(n, s, u) {
    return G(n, h => {
      if (!h.area) throw new Error("onHover() requires the object to have area() component");
      h.isHovering() ? s(h) : u && u(h);
    });
  }

  i(ce, "onHover");

  function xe(n, s) {
    return new Promise(u => {
      y.timers.push({
        time: n,
        action: () => {
          s && s(), u();
        }
      });
    });
  }

  i(xe, "wait");

  function bt(n, s) {
    let u = !1,
        h = i(() => {
      u || (s(), xe(n, h));
    }, "newF");
    return h(), () => u = !0;
  }

  i(bt, "loop");

  function o(n, s) {
    if (Array.isArray(n)) {
      let u = n.map(h => o(h, s));
      return () => u.forEach(h => h());
    }

    return y.on("input", () => t.isKeyDown(n) && s());
  }

  i(o, "onKeyDown");

  function f(n, s) {
    if (Array.isArray(n)) {
      let u = n.map(h => f(h, s));
      return () => u.forEach(h => h());
    } else return typeof n == "function" ? y.on("input", () => t.isKeyPressed() && n()) : y.on("input", () => t.isKeyPressed(n) && s());
  }

  i(f, "onKeyPress");

  function g(n, s) {
    if (Array.isArray(n)) {
      let u = n.map(h => g(h, s));
      return () => u.forEach(h => h());
    } else return typeof n == "function" ? y.on("input", () => t.isKeyPressed() && n()) : y.on("input", () => t.isKeyPressedRepeat(n) && s());
  }

  i(g, "onKeyPressRepeat");

  function R(n, s) {
    if (Array.isArray(n)) {
      let u = n.map(h => R(h, s));
      return () => u.forEach(h => h());
    } else return typeof n == "function" ? y.on("input", () => t.isKeyReleased() && n()) : y.on("input", () => t.isKeyReleased(n) && s());
  }

  i(R, "onKeyRelease");

  function x(n, s) {
    return typeof n == "function" ? y.on("input", () => t.isMouseDown() && n(Y())) : y.on("input", () => t.isMouseDown(n) && s(Y()));
  }

  i(x, "onMouseDown");

  function E(n, s) {
    return typeof n == "function" ? y.on("input", () => t.isMousePressed() && n(Y())) : y.on("input", () => t.isMousePressed(n) && s(Y()));
  }

  i(E, "onMousePress");

  function C(n, s) {
    return typeof n == "function" ? y.on("input", () => t.isMouseReleased() && n(Y())) : y.on("input", () => t.isMouseReleased(n) && s(Y()));
  }

  i(C, "onMouseRelease");

  function O(n) {
    return y.on("input", () => t.isMouseMoved() && n(Y(), t.mouseDeltaPos()));
  }

  i(O, "onMouseMove");

  function j(n) {
    return y.on("input", () => t.charInputted().forEach(s => n(s)));
  }

  i(j, "onCharInput"), t.canvas.addEventListener("touchstart", n => {
    [...n.changedTouches].forEach(s => {
      y.trigger("onTouchStart", s.identifier, c(s.clientX, s.clientY).scale(1 / t.scale));
    });
  }), t.canvas.addEventListener("touchmove", n => {
    [...n.changedTouches].forEach(s => {
      y.trigger("onTouchMove", s.identifier, c(s.clientX, s.clientY).scale(1 / t.scale));
    });
  }), t.canvas.addEventListener("touchmove", n => {
    [...n.changedTouches].forEach(s => {
      y.trigger("onTouchEnd", s.identifier, c(s.clientX, s.clientY).scale(1 / t.scale));
    });
  });

  function re(n) {
    return y.on("onTouchStart", n);
  }

  i(re, "onTouchStart");

  function Z(n) {
    return y.on("onTouchMove", n);
  }

  i(Z, "onTouchMove");

  function ee(n) {
    return y.on("onTouchEnd", n);
  }

  i(ee, "onTouchEnd");

  function Me() {
    f("f1", () => {
      Q.inspect = !Q.inspect;
    }), f("f2", () => {
      Q.clearLog();
    }), f("f8", () => {
      Q.paused = !Q.paused;
    }), f("f7", () => {
      Q.timeScale = Se(pe(Q.timeScale - .2, 0, 2), 1);
    }), f("f9", () => {
      Q.timeScale = Se(pe(Q.timeScale + .2, 0, 2), 1);
    }), f("f10", () => {
      Q.stepFrame();
    }), f("f5", () => {
      _t(t.screenshot(), "kaboom.png");
    }), f("f6", () => {
      Q.curRecording ? (Q.curRecording.download(), Q.curRecording = null) : Q.curRecording = Yt();
    });
  }

  i(Me, "enterDebugMode");

  function fe() {
    f("b", r.burp);
  }

  i(fe, "enterBurpMode");

  function be(n) {
    let s = [...y.objs.values()].sort((u, h) => {
      var d, p, m, M, B, K;
      let b = (p = y.layers[(d = u.layer) != null ? d : y.defLayer]) != null ? p : 0,
          l = (M = y.layers[(m = h.layer) != null ? m : y.defLayer]) != null ? M : 0;
      return b == l ? ((B = u.z) != null ? B : 0) - ((K = h.z) != null ? K : 0) : b - l;
    });
    return n ? s.filter(u => u.is(n)) : s;
  }

  i(be, "get");

  function me(n, s) {
    if (typeof n == "function" && s === void 0) return be().forEach(u => u.exists() && n(u));
    if (typeof n == "string" || Array.isArray(n)) return be(n).forEach(u => u.exists() && s(u));
  }

  i(me, "every");

  function Ye(n, s) {
    if (typeof n == "function" && s === void 0) return be().reverse().forEach(u => u.exists() && n(u));
    if (typeof n == "string" || Array.isArray(n)) return be(n).reverse().forEach(u => u.exists() && s(u));
  }

  i(Ye, "revery");

  function ve(n) {
    n.destroy();
  }

  i(ve, "destroy");

  function Ve(n) {
    me(n, ve);
  }

  i(Ve, "destroyAll");

  function et(n) {
    return n !== void 0 && (y.gravity = n), y.gravity;
  }

  i(et, "gravity");

  function Ut(n, s) {}

  i(Ut, "regCursor");

  function ze(n, s) {
    return {
      target: n,
      displacement: s,
      isTop: () => s.y > 0,
      isBottom: () => s.y < 0,
      isLeft: () => s.x > 0,
      isRight: () => s.x < 0
    };
  }

  i(ze, "makeCollision");

  function ge(...n) {
    return {
      id: "pos",
      pos: c(...n),

      moveBy(...s) {
        var d;
        let u = c(...s),
            h = u.x,
            b = u.y,
            l = null;

        if (this.solid && ((d = this.area) == null ? void 0 : d.shape) === "rect") {
          let p = this.worldArea();
          me(m => {
            var Ht;
            if (!this.exists() || m === this || !m.solid || ((Ht = m.area) == null ? void 0 : Ht.shape) !== "rect") return;
            let M = m.worldArea(),
                B = ft(M, p);

            if (Te(B, c(0))) {
              let Ce = Math.min(Math.abs(B.p1.x), Math.abs(B.p2.x), Math.abs(B.p1.y), Math.abs(B.p2.y)),
                  Fe = (() => {
                switch (Ce) {
                  case Math.abs(B.p1.x):
                    return c(Ce, 0);

                  case Math.abs(B.p2.x):
                    return c(-Ce, 0);

                  case Math.abs(B.p1.y):
                    return c(0, Ce);

                  case Math.abs(B.p2.y):
                    return c(0, -Ce);
                }
              })();

              this.pos = this.pos.sub(Fe), p = this.worldArea(), B = ft(M, p);
            }

            let K = {
              p1: c(0),
              p2: c(h, b)
            },
                te = 1,
                ke = B.p1,
                Ie = c(B.p1.x, B.p2.y),
                Le = B.p2,
                st = c(B.p2.x, B.p1.y),
                it = 0,
                jt = {
              right: {
                p1: ke,
                p2: Ie
              },
              top: {
                p1: Ie,
                p2: Le
              },
              left: {
                p1: Le,
                p2: st
              },
              bottom: {
                p1: st,
                p2: ke
              }
            };

            for (let Ce in jt) {
              let Fe = jt[Ce];

              if (h === 0 && Fe.p1.x === 0 && Fe.p2.x === 0 || b === 0 && Fe.p1.y === 0 && Fe.p2.y === 0) {
                te = 1;
                break;
              }

              let Ct = Mt(K, Fe);
              Ct != null && (it++, Ct < te && (te = Ct));
            }

            if (te < 1 && !(te === 0 && it == 1 && !Te(B, c(h, b)))) {
              let Ce = c(-h * (1 - te), -b * (1 - te));
              h *= te, b *= te, l = ze(m, Ce);
            }
          });
        }

        return this.pos.x += h, this.pos.y += b, l && (this.trigger("collide", l.target, l), l.target.trigger("collide", this, ze(this, l.displacement.scale(-1)))), l;
      },

      move(...s) {
        return this.moveBy(c(...s).scale(L()));
      },

      moveTo(...s) {
        if (typeof s[0] == "number" && typeof s[1] == "number") return this.moveTo(c(s[0], s[1]), s[2]);
        let u = s[0],
            h = s[1];

        if (h === void 0) {
          this.pos = c(u);
          return;
        }

        let b = u.sub(this.pos);

        if (b.len() <= h * L()) {
          this.pos = c(u);
          return;
        }

        this.move(b.unit().scale(h));
      },

      screenPos() {
        return this.fixed ? this.pos : X(this.pos);
      },

      inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }

    };
  }

  i(ge, "pos");

  function tt(...n) {
    return n.length === 0 ? tt(1) : {
      id: "scale",
      scale: c(...n),

      scaleTo(...s) {
        this.scale = c(...s);
      },

      inspect() {
        return typeof this.scale == "number" ? `${Se(this.scale, 2)}` : `(${Se(this.scale.x, 2)}, ${Se(this.scale.y, 2)})`;
      }

    };
  }

  i(tt, "scale");

  function gt(n) {
    return {
      id: "rotate",
      angle: n != null ? n : 0,

      inspect() {
        return `${Math.round(this.angle)}`;
      }

    };
  }

  i(gt, "rotate");

  function Ze(...n) {
    return {
      id: "color",
      color: I(...n),

      inspect() {
        return this.color.str();
      }

    };
  }

  i(Ze, "color");

  function Se(n, s) {
    return Number(n.toFixed(s));
  }

  i(Se, "toFixed");

  function Je(n) {
    return {
      id: "opacity",
      opacity: n != null ? n : 1,

      inspect() {
        return `${Se(this.opacity, 2)}`;
      }

    };
  }

  i(Je, "opacity");

  function wt(n) {
    if (!n) throw new Error("please define an origin");
    return {
      id: "origin",
      origin: n,

      inspect() {
        return typeof this.origin == "string" ? this.origin : this.origin.str();
      }

    };
  }

  i(wt, "origin");

  function xt(n) {
    return {
      id: "layer",
      layer: n,

      inspect() {
        var s;
        return (s = this.layer) != null ? s : y.defLayer;
      }

    };
  }

  i(xt, "layer");

  function rt(n) {
    return {
      id: "z",
      z: n,

      inspect() {
        return `${this.z}`;
      }

    };
  }

  i(rt, "z");

  function nt(n, s) {
    return {
      id: "follow",
      require: ["pos"],
      follow: {
        obj: n,
        offset: s != null ? s : c(0)
      },

      add() {
        n.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      },

      update() {
        n.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }

    };
  }

  i(nt, "follow");

  function we(n, s) {
    let u = typeof n == "number" ? ot(n) : n.unit();
    return {
      id: "move",
      require: ["pos"],

      update() {
        this.move(u.scale(s));
      }

    };
  }

  i(we, "move");

  function Ue(n = 0) {
    let s = 0;
    return {
      id: "cleanup",
      require: ["pos", "area"],

      update() {
        let u = {
          p1: c(0, 0),
          p2: c(U(), S())
        };
        dt(this.screenArea(), u) ? s = 0 : (s += L(), s >= n && this.destroy());
      }

    };
  }

  i(Ue, "cleanup");

  function Lr(n = {}) {
    var u, h;
    let s = {};
    return {
      id: "area",

      add() {
        this.area.cursor && this.hovers(() => {
          t.cursor(this.area.cursor);
        });
      },

      area: {
        shape: "rect",
        offset: (u = n.offset) != null ? u : c(0),
        width: n.width,
        height: n.height,
        scale: (h = n.scale) != null ? h : c(1),
        cursor: n.cursor
      },

      isClicked() {
        return t.isMousePressed() && this.isHovering();
      },

      isHovering() {
        let b = this.fixed ? Y() : ie();
        return this.hasPoint(b);
      },

      isColliding(b) {
        if (!b.area || !b.exists()) return !1;
        let l = this.worldArea(),
            d = b.worldArea();
        return Ft(l, d);
      },

      isTouching(b) {
        if (!b.area || !b.exists()) return !1;
        let l = this.worldArea(),
            d = b.worldArea();
        return lr(l, d);
      },

      onClick(b) {
        return this.onUpdate(() => {
          this.isClicked() && b();
        });
      },

      onHover(b, l) {
        return this.onUpdate(() => {
          this.isHovering() ? b() : l && l();
        });
      },

      onCollide(b, l) {
        let d = this.onUpdate(() => this._checkCollisions(b, l)),
            p = this.on("collide", (m, M) => m.is(b) && l(m, M));
        return () => [d, p].forEach(m => m());
      },

      clicks(...b) {
        return this.onClick(...b);
      },

      hovers(...b) {
        return this.onHover(...b);
      },

      collides(...b) {
        return this.onCollide(...b);
      },

      hasPoint(b) {
        return ht(this.worldArea(), b);
      },

      pushOut(b) {
        var B;
        if (b === this || ((B = b.area) == null ? void 0 : B.shape) !== "rect") return null;
        let l = this.worldArea(),
            d = b.worldArea(),
            p = ft(l, d);
        if (!Te(p, c(0))) return null;

        let m = Math.min(Math.abs(p.p1.x), Math.abs(p.p2.x), Math.abs(p.p1.y), Math.abs(p.p2.y)),
            M = (() => {
          switch (m) {
            case Math.abs(p.p1.x):
              return c(m, 0);

            case Math.abs(p.p2.x):
              return c(-m, 0);

            case Math.abs(p.p1.y):
              return c(0, m);

            case Math.abs(p.p2.y):
              return c(0, -m);
          }
        })();

        this.pos = this.pos.add(M);
      },

      pushOutAll() {
        me(this.pushOut);
      },

      _checkCollisions(b) {
        me(b, l => {
          this === l || !this.exists() || s[l._id] || this.isColliding(l) && (this.trigger("collide", l, null), s[l._id] = l);
        });

        for (let l in s) {
          let d = s[l];
          this.isColliding(d) || delete s[l];
        }
      },

      worldArea() {
        var M, B, K, te;
        let b = (M = this.area.width) != null ? M : this.width,
            l = (B = this.area.height) != null ? B : this.height;
        if (b == null || l == null) throw new Error("failed to get area dimension");
        let d = c((K = this.scale) != null ? K : 1).scale(this.area.scale);
        b *= d.x, l *= d.y;
        let p = Ge(this.origin || ue),
            m = ((te = this.pos) != null ? te : c(0)).add(this.area.offset).sub(p.add(1, 1).scale(.5).scale(b, l));
        return {
          shape: "rect",
          p1: m,
          p2: c(m.x + b, m.y + l)
        };
      },

      screenArea() {
        let b = this.worldArea();
        return this.fixed ? b : {
          shape: "rect",
          p1: y.camMatrix.multVec2(b.p1),
          p2: y.camMatrix.multVec2(b.p2)
        };
      }

    };
  }

  i(Lr, "area");

  function je(n) {
    return {
      pos: n.pos,
      scale: n.scale,
      color: n.color,
      opacity: n.opacity,
      angle: n.angle,
      origin: n.origin,
      outline: n.outline,
      shader: v.shaders[n.shader],
      uniform: n.uniform
    };
  }

  i(je, "getRenderProps");

  function Fr(n, s = {}) {
    var l;
    let u = null,
        h = null;

    function b(d, p, m, M) {
      let B = c(1, 1);
      return m && M ? (B.x = m / (d.width * p.w), B.y = M / (d.height * p.h)) : m ? (B.x = m / (d.width * p.w), B.y = B.x) : M && (B.y = M / (d.height * p.h), B.x = B.y), B;
    }

    return i(b, "calcTexScale"), {
      id: "sprite",
      width: 0,
      height: 0,
      frame: s.frame || 0,
      quad: s.quad || de(0, 0, 1, 1),
      animSpeed: (l = s.animSpeed) != null ? l : 1,

      load() {
        if (typeof n == "string" ? u = v.sprites[n] : u = n, !u) throw new Error(`sprite not found: "${n}"`);
        let d = ne({}, u.frames[0]);
        s.quad && (d = d.scale(s.quad));
        let p = b(u.tex, d, s.width, s.height);
        this.width = u.tex.width * d.w * p.x, this.height = u.tex.height * d.h * p.y, s.anim && this.play(s.anim);
      },

      draw() {
        N(se(ne({}, je(this)), {
          sprite: u,
          frame: this.frame,
          quad: this.quad,
          flipX: s.flipX,
          flipY: s.flipY,
          tiled: s.tiled,
          width: s.width,
          height: s.height
        }));
      },

      update() {
        if (!h) return;
        let d = u.anims[h.name];

        if (typeof d == "number") {
          this.frame = d;
          return;
        }

        if (d.speed === 0) throw new Error("sprite anim speed cannot be 0");
        h.timer += L() * this.animSpeed, h.timer >= 1 / h.speed && (h.timer = 0, d.from > d.to ? (this.frame--, this.frame < d.to && (h.loop ? this.frame = d.from : (this.frame++, h.onEnd(), this.stop()))) : (this.frame++, this.frame > d.to && (h.loop ? this.frame = d.from : (this.frame--, h.onEnd(), this.stop()))));
      },

      play(d, p = {}) {
        var M, B, K, te, ke, Ie, Le;

        if (!u) {
          _e(() => {
            this.play(d);
          });

          return;
        }

        let m = u.anims[d];
        if (m == null) throw new Error(`anim not found: ${d}`);
        h && this.stop(), h = {
          name: d,
          timer: 0,
          loop: (B = (M = p.loop) != null ? M : m.loop) != null ? B : !1,
          pingpong: (te = (K = p.pingpong) != null ? K : m.pingpong) != null ? te : !1,
          speed: (Ie = (ke = p.speed) != null ? ke : m.speed) != null ? Ie : 10,
          onEnd: (Le = p.onEnd) != null ? Le : () => {}
        }, typeof m == "number" ? this.frame = m : this.frame = m.from, this.trigger("animPlay", d), this.trigger("animStart", d);
      },

      stop() {
        if (!h) return;
        let d = h.name;
        h = null, this.trigger("animEnd", d);
      },

      numFrames() {
        return u ? u.frames.length : 0;
      },

      curAnim() {
        return h == null ? void 0 : h.name;
      },

      flipX(d) {
        s.flipX = d;
      },

      flipY(d) {
        s.flipY = d;
      },

      onAnimEnd(d, p) {
        return this.on("animEnd", m => {
          m === d && p();
        });
      },

      onAnimStart(d, p) {
        return this.on("animStart", m => {
          m === d && p();
        });
      },

      inspect() {
        let d = "";
        return typeof n == "string" ? d += JSON.stringify(n) : d += "[blob]", d;
      }

    };
  }

  i(Fr, "sprite");

  function Or(n, s = {}) {
    function u() {
      var d, p, m, M;
      let h = (p = (d = this.font) != null ? d : e.font) != null ? p : V,
          b = v.fonts[h];
      if (!b) throw new Error(`font not found: "${h}"`);
      let l = a.fmtText(se(ne({}, je(this)), {
        text: this.text + "",
        size: this.textSize,
        font: b,
        width: s.width,
        transform: s.transform
      }));
      return this.width = l.width / (((m = this.scale) == null ? void 0 : m.x) || 1), this.height = l.height / (((M = this.scale) == null ? void 0 : M.y) || 1), l;
    }

    return i(u, "update"), {
      id: "text",
      text: n,
      textSize: s.size,
      font: s.font,
      width: 0,
      height: 0,

      load() {
        u.call(this);
      },

      draw() {
        a.drawFmtText(u.call(this));
      }

    };
  }

  i(Or, "text");

  function _r(n, s, u = {}) {
    return {
      id: "rect",
      width: n,
      height: s,
      radius: u.radius || 0,

      draw() {
        a.drawRect(se(ne({}, je(this)), {
          width: this.width,
          height: this.height,
          radius: this.radius
        }));
      },

      inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      }

    };
  }

  i(_r, "rect");

  function Xr(n, s) {
    return {
      id: "rect",
      width: n,
      height: s,

      draw() {
        a.drawUVQuad(se(ne({}, je(this)), {
          width: this.width,
          height: this.height
        }));
      },

      inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      }

    };
  }

  i(Xr, "uvquad");

  function Wr(n) {
    return {
      id: "circle",
      radius: n,

      draw() {
        a.drawCircle(se(ne({}, je(this)), {
          radius: this.radius
        }));
      },

      inspect() {
        return `${Math.ceil(this.radius)}`;
      }

    };
  }

  i(Wr, "circle");

  function qr(n = 1, s = I(0, 0, 0)) {
    return {
      id: "outline",
      outline: {
        width: n,
        color: s
      }
    };
  }

  i(qr, "outline");

  function $r(n, s) {
    let u = new he();
    return n && s && u.pushd({
      time: n,
      action: s
    }), {
      id: "timer",

      wait(h, b) {
        return u.pushd({
          time: h,
          action: b
        });
      },

      update() {
        u.forEach((h, b) => {
          h.time -= L(), h.time <= 0 && (h.action.call(this), u.delete(b));
        });
      }

    };
  }

  i($r, "timer");
  let Gr = 640,
      Yr = 65536;

  function zr(n = {}) {
    var l, d, p;
    let s = 0,
        u = null,
        h = null,
        b = !0;
    return {
      id: "body",
      require: ["pos", "area"],
      jumpForce: (l = n.jumpForce) != null ? l : Gr,
      weight: (d = n.weight) != null ? d : 1,
      solid: (p = n.solid) != null ? p : !0,

      update() {
        var M;
        let m = !1;

        if (u) {
          let B = this.worldArea(),
              K = u.worldArea(),
              te = B.p2.y,
              ke = K.p1.y,
              Ie = B.p1.x,
              Le = B.p2.x,
              st = K.p1.x,
              it = K.p2.x;
          !u.exists() || te !== ke || Le < st || Ie > it ? (this.trigger("fall", u), u = null, h = null, m = !0) : h && u.pos && (this.pos = this.pos.add(u.pos.sub(h)), h = u.pos.clone());
        }

        if (!u) {
          let B = this.move(0, s);
          if (B) if (B.isBottom()) {
            u = B.target;
            let K = s;
            s = 0, u.pos && (h = u.pos.clone()), m || (this.trigger("ground", u), b = !0);
          } else B.isTop() && (s = 0, this.trigger("headbutt", B.target));
          s += et() * this.weight * L(), s = Math.min(s, (M = n.maxVel) != null ? M : Yr);
        }
      },

      curPlatform() {
        return u;
      },

      isGrounded() {
        return u !== null;
      },

      grounded() {
        return this.isGrounded();
      },

      isFalling() {
        return s > 0;
      },

      falling() {
        return this.isFalling();
      },

      jump(m) {
        u = null, h = null, s = -m || -this.jumpForce;
      },

      doubleJump(m) {
        this.isGrounded() ? this.jump(m) : b && (b = !1, this.jump(m), this.trigger("doubleJump"));
      },

      onGround(m) {
        return this.on("ground", m);
      },

      onFall(m) {
        return this.on("fall", m);
      },

      onHeadbutt(m) {
        return this.on("headbutt", m);
      },

      onDoubleJump(m) {
        return this.on("doubleJump", m);
      }

    };
  }

  i(zr, "body");

  function Zr(n, s = {}) {
    let u = v.shaders[n];
    return {
      id: "shader",
      shader: n,
      uniform: s
    };
  }

  i(Zr, "shader");

  function Jr() {
    return {
      id: "solid",
      require: ["area"],
      solid: !0
    };
  }

  i(Jr, "solid");

  function jr() {
    return {
      id: "fixed",
      fixed: !0
    };
  }

  i(jr, "fixed");

  function Hr() {
    return {
      id: "stay",
      stay: !0
    };
  }

  i(Hr, "stay");

  function Nr(n) {
    if (n == null) throw new Error("health() requires the initial amount of hp");
    return {
      id: "health",

      hurt(s = 1) {
        this.setHP(n - s), this.trigger("hurt");
      },

      heal(s = 1) {
        this.setHP(n + s), this.trigger("heal");
      },

      hp() {
        return n;
      },

      setHP(s) {
        n = s, n <= 0 && this.trigger("death");
      },

      onHurt(s) {
        return this.on("hurt", s);
      },

      onHeal(s) {
        return this.on("heal", s);
      },

      onDeath(s) {
        return this.on("death", s);
      },

      inspect() {
        return `${n}`;
      }

    };
  }

  i(Nr, "health");

  function Qr(n, s = {}) {
    var l;
    if (n == null) throw new Error("lifespan() requires time");
    let u = 0,
        h = (l = s.fade) != null ? l : 0,
        b = Math.max(n - h, 0);
    return {
      id: "lifespan",

      update() {
        u += L(), u >= b && (this.opacity = Oe(u, b, n, 1, 0)), u >= n && this.destroy();
      }

    };
  }

  i(Qr, "lifespan");

  function Kr(n, s) {
    if (!n) throw new Error("state() requires an initial state");
    let u = {};

    function h(d) {
      u[d] || (u[d] = {
        enter: [],
        leave: [],
        update: [],
        draw: []
      });
    }

    i(h, "initStateHook");

    function b(d, p, m) {
      h(p), u[p][d].push(m);
    }

    i(b, "on");

    function l(d, p, ...m) {
      h(p), u[p][d].forEach(M => M(...m));
    }

    return i(l, "trigger"), {
      id: "state",
      state: n,

      enterState(d, ...p) {
        if (s && !s.includes(d)) throw new Error(`State not found: ${d}`);
        l("leave", this.state, ...p), this.state = d, l("enter", this.state, ...p);
      },

      onStateEnter(d, p) {
        b("enter", d, p);
      },

      onStateUpdate(d, p) {
        b("update", d, p);
      },

      onStateDraw(d, p) {
        b("draw", d, p);
      },

      onStateLeave(d, p) {
        b("leave", d, p);
      },

      update() {
        l("update", this.state);
      },

      draw() {
        l("draw", this.state);
      }

    };
  }

  i(Kr, "state");
  let Q = {
    inspect: !1,
    timeScale: 1,
    showLog: !0,
    fps: t.fps,

    objCount() {
      return y.objs.size;
    },

    stepFrame: Zt,
    drawCalls: a.drawCalls,
    clearLog: D.clear,
    log: n => D.info(`[${t.time().toFixed(2)}] ${n}`),
    error: n => D.error(`[${t.time().toFixed(2)}] ${n}`),
    curRecording: null,

    get paused() {
      return y.paused;
    },

    set paused(n) {
      y.paused = n, n ? r.ctx.suspend() : r.ctx.resume();
    }

  };

  function _e(n) {
    y.loaded ? n() : y.on("load", n);
  }

  i(_e, "onLoad");

  function en(n, s) {
    y.scenes[n] = s;
  }

  i(en, "scene");

  function tn(n, ...s) {
    if (!y.scenes[n]) throw new Error(`scene not found: ${n}`);
    let u = y.on("updateStart", () => {
      y.events = {}, y.objEvents = {
        add: new he(),
        update: new he(),
        draw: new he(),
        destroy: new he()
      }, y.objs.forEach(h => {
        h.stay || ve(h);
      }), y.timers = new he(), y.cam = {
        pos: vt(),
        scale: c(1, 1),
        angle: 0,
        shake: 0
      }, y.camMousePos = t.mousePos(), y.camMatrix = le(), y.layers = {}, y.defLayer = null, y.gravity = J, y.scenes[n](...s), e.debug !== !1 && Me(), e.burp && fe(), u();
    });
  }

  i(tn, "go");

  function rn(n, s) {
    try {
      return JSON.parse(window.localStorage[n]);
    } catch (u) {
      return s ? (Gt(n, s), s) : null;
    }
  }

  i(rn, "getData");

  function Gt(n, s) {
    window.localStorage[n] = JSON.stringify(s);
  }

  i(Gt, "setData");

  function Et(n) {
    let s = n(Xe);

    for (let u in s) Xe[u] = s[u], e.global !== !1 && (window[u] = s[u]);

    return Xe;
  }

  i(Et, "plug");

  function vt() {
    return c(U() / 2, S() / 2);
  }

  i(vt, "center");

  function nn(n, s) {
    return {
      id: "grid",
      gridPos: s.clone(),

      setGridPos(...u) {
        let h = c(...u);
        this.gridPos = h.clone(), this.pos = c(n.offset().x + this.gridPos.x * n.gridWidth(), n.offset().y + this.gridPos.y * n.gridHeight());
      },

      moveLeft() {
        this.setGridPos(this.gridPos.add(c(-1, 0)));
      },

      moveRight() {
        this.setGridPos(this.gridPos.add(c(1, 0)));
      },

      moveUp() {
        this.setGridPos(this.gridPos.add(c(0, -1)));
      },

      moveDown() {
        this.setGridPos(this.gridPos.add(c(0, 1)));
      }

    };
  }

  i(nn, "grid");

  function sn(n, s) {
    if (!s.width || !s.height) throw new Error("Must provide level grid width & height.");
    let u = [],
        h = c(s.pos || c(0)),
        b = 0,
        l = {
      offset() {
        return h.clone();
      },

      gridWidth() {
        return s.width;
      },

      gridHeight() {
        return s.height;
      },

      getPos(...d) {
        let p = c(...d);
        return c(h.x + p.x * s.width, h.y + p.y * s.height);
      },

      spawn(d, ...p) {
        let m = c(...p),
            M = (() => {
          if (s[d]) {
            if (typeof s[d] != "function") throw new Error("level symbol def must be a function returning a component list");
            return s[d](m);
          } else if (s.any) return s.any(d, m);
        })();

        if (!M) return;
        let B = c(h.x + m.x * s.width, h.y + m.y * s.height);

        for (let te of M) if (te.id === "pos") {
          B.x += te.pos.x, B.y += te.pos.y;
          break;
        }

        M.push(ge(B)), M.push(nn(this, m));
        let K = F(M);
        return u.push(K), K;
      },

      width() {
        return b * s.width;
      },

      height() {
        return n.length * s.height;
      },

      destroy() {
        for (let d of u) ve(d);
      }

    };
    return n.forEach((d, p) => {
      let m = d.split("");
      b = Math.max(m.length, b), m.forEach((M, B) => {
        l.spawn(M, c(B, p));
      });
    }), l;
  }

  i(sn, "addLevel");

  function Yt(n) {
    let s = t.canvas.captureStream(n),
        u = r.ctx.createMediaStreamDestination();
    r.masterNode.connect(u);
    let h = u.stream,
        [b] = h.getAudioTracks(),
        l = new MediaRecorder(s),
        d = [];
    return l.ondataavailable = p => {
      p.data.size > 0 && d.push(p.data);
    }, l.onerror = p => {
      r.masterNode.disconnect(u), s.getTracks().forEach(m => m.stop());
    }, l.start(), {
      resume() {
        l.resume();
      },

      pause() {
        l.pause();
      },

      download(p = "kaboom.mp4") {
        l.onstop = () => {
          pr(new Blob(d, {
            type: "video/mp4"
          }), p);
        }, l.stop(), r.masterNode.disconnect(u), s.getTracks().forEach(m => m.stop());
      }

    };
  }

  i(Yt, "record");
  let Xe = {
    loadRoot: v.loadRoot,
    loadSprite: v.loadSprite,
    loadSpriteAtlas: v.loadSpriteAtlas,
    loadSound: v.loadSound,
    loadFont: v.loadFont,
    loadShader: v.loadShader,
    loadAseprite: v.loadAseprite,
    loadPedit: v.loadPedit,
    loadBean: v.loadBean,
    load: v.load,
    width: U,
    height: S,
    center: vt,
    dt: L,
    time: t.time,
    screenshot: t.screenshot,
    record: Yt,
    focused: t.isFocused,
    isFocused: t.isFocused,
    focus: t.focus,
    cursor: t.cursor,
    regCursor: Ut,
    fullscreen: t.fullscreen,
    isFullscreen: t.isFullscreen,
    onLoad: _e,
    ready: _e,
    isTouch: () => t.isTouch,
    layers: ye,
    camPos: P,
    camScale: T,
    camRot: _,
    shake: z,
    toScreen: X,
    toWorld: W,
    gravity: et,
    add: F,
    readd: ae,
    destroy: ve,
    destroyAll: Ve,
    get: be,
    every: me,
    revery: Ye,
    pos: ge,
    scale: tt,
    rotate: gt,
    color: Ze,
    opacity: Je,
    origin: wt,
    layer: xt,
    area: Lr,
    sprite: Fr,
    text: Or,
    rect: _r,
    circle: Wr,
    uvquad: Xr,
    outline: qr,
    body: zr,
    shader: Zr,
    timer: $r,
    solid: Jr,
    fixed: jr,
    stay: Hr,
    health: Nr,
    lifespan: Qr,
    z: rt,
    move: we,
    cleanup: Ue,
    follow: nt,
    state: Kr,
    on: w,
    onUpdate: G,
    onDraw: Re,
    onCollide: Ae,
    onClick: Ee,
    onHover: ce,
    action: G,
    render: Re,
    collides: Ae,
    clicks: Ee,
    hovers: ce,
    onKeyDown: o,
    onKeyPress: f,
    onKeyPressRepeat: g,
    onKeyRelease: R,
    onMouseDown: x,
    onMousePress: E,
    onMouseRelease: C,
    onMouseMove: O,
    onCharInput: j,
    onTouchStart: re,
    onTouchMove: Z,
    onTouchEnd: ee,
    keyDown: o,
    keyPress: f,
    keyPressRep: g,
    keyRelease: R,
    mouseDown: x,
    mouseClick: E,
    mouseRelease: C,
    mouseMove: O,
    charInput: j,
    touchStart: re,
    touchMove: Z,
    touchEnd: ee,
    mousePos: Y,
    mouseWorldPos: ie,
    mouseDeltaPos: t.mouseDeltaPos,
    isKeyDown: t.isKeyDown,
    isKeyPressed: t.isKeyPressed,
    isKeyPressedRepeat: t.isKeyPressedRepeat,
    isKeyReleased: t.isKeyReleased,
    isMouseDown: t.isMouseDown,
    isMousePressed: t.isMousePressed,
    isMouseReleased: t.isMouseReleased,
    isMouseMoved: t.isMouseMoved,
    keyIsDown: t.isKeyDown,
    keyIsPressed: t.isKeyPressed,
    keyIsPressedRep: t.isKeyPressedRepeat,
    keyIsReleased: t.isKeyReleased,
    mouseIsDown: t.isMouseDown,
    mouseIsClicked: t.isMousePressed,
    mouseIsReleased: t.isMouseReleased,
    mouseIsMoved: t.isMouseMoved,
    loop: bt,
    wait: xe,
    play: H,
    volume: r.volume,
    burp: r.burp,
    audioCtx: r.ctx,
    rng: Dt,
    rand: Ne,
    randi: Rt,
    randSeed: ar,
    vec2: c,
    dir: ot,
    rgb: I,
    hsl2rgb: ir,
    quad: de,
    choose: cr,
    chance: ur,
    lerp: He,
    map: Oe,
    mapc: rr,
    wave: St,
    deg2rad: Be,
    rad2deg: Tt,
    testAreaRect: dt,
    testAreaLine: kt,
    testAreaCircle: It,
    testAreaPolygon: Lt,
    testAreaPoint: ht,
    testAreaArea: Ft,
    testLineLine: De,
    testRectRect: At,
    testRectLine: at,
    testRectPoint: Te,
    testPolygonPoint: $e,
    testLinePolygon: Qe,
    testPolygonPolygon: lt,
    testCircleCircle: Vt,
    testCirclePoint: ct,
    testRectPolygon: ut,
    drawSprite: N,
    drawText: oe,
    drawRect: a.drawRect,
    drawLine: a.drawLine,
    drawLines: a.drawLines,
    drawTriangle: a.drawTriangle,
    drawCircle: a.drawCircle,
    drawEllipse: a.drawEllipse,
    drawUVQuad: a.drawUVQuad,
    drawPolygon: a.drawPolygon,
    pushTransform: a.pushTransform,
    popTransform: a.popTransform,
    pushTranslate: a.pushTranslate,
    pushRotate: a.pushRotateZ,
    pushScale: a.pushScale,
    debug: Q,
    scene: en,
    go: tn,
    addLevel: sn,
    getData: rn,
    setData: Gt,
    plug: Et,
    ASCII_CHARS: qt,
    CP437_CHARS: Dr,
    LEFT: c(-1, 0),
    RIGHT: c(1, 0),
    UP: c(0, -1),
    DOWN: c(0, 1),
    RED: I(255, 0, 0),
    GREEN: I(0, 255, 0),
    BLUE: I(0, 0, 255),
    YELLOW: I(255, 255, 0),
    MAGENTA: I(255, 0, 255),
    CYAN: I(0, 255, 255),
    WHITE: I(255, 255, 255),
    BLACK: I(0, 0, 0),
    canvas: t.canvas
  };
  if (Et(Ir), e.plugins && e.plugins.forEach(Et), e.global !== !1) for (let n in Xe) window[n] = Xe[n];
  let zt = 0;

  function kn() {
    return zt;
  }

  i(kn, "frames");

  function Zt() {
    y.trigger("updateStart"), y.timers.forEach((n, s) => {
      n.time -= L(), n.time <= 0 && (n.action(), y.timers.delete(s));
    }), Ye(n => {
      n.paused || n.trigger("update", n);
    });
  }

  i(Zt, "updateFrame");

  function on() {
    let n = c(U(), S()),
        s = y.cam,
        u = ot(Ne(0, 360)).scale(s.shake);
    s.shake = He(s.shake, 0, 5 * L()), y.camMatrix = le().translate(n.scale(.5)).scale(s.scale).rotateZ(s.angle).translate(n.scale(-.5)).translate(s.pos.scale(-1).add(n.scale(.5)).add(u)), me(h => {
      h.hidden || (a.pushTransform(), h.fixed || a.applyMatrix(y.camMatrix), h.trigger("draw"), a.popTransform());
    });
  }

  i(on, "drawFrame");

  function an() {
    let n = v.loadProgress();
    if (n === 1) y.loaded = !0, y.trigger("load");else {
      let s = U() / 2,
          u = 24 / a.scale(),
          h = c(U() / 2, S() / 2).sub(c(s / 2, u / 2));
      a.drawRect({
        pos: c(0),
        width: U(),
        height: S(),
        color: I(0, 0, 0)
      }), a.drawRect({
        pos: h,
        width: s,
        height: u,
        fill: !1,
        outline: {
          width: 4 / a.scale()
        }
      }), a.drawRect({
        pos: h,
        width: s * n,
        height: u
      });
    }
  }

  i(an, "drawLoadScreen");

  function un() {
    var n;

    if (Q.inspect) {
      let b = function (l, d) {
        let p = t.scale,
            m = c(8);
        a.pushTransform(), a.pushTranslate(l), a.pushScale(1 / p);
        let M = a.fmtText({
          text: d,
          font: u,
          size: 16,
          pos: m,
          color: I(255, 255, 255)
        }),
            B = M.width + m.x * 2,
            K = M.height + m.x * 2;
        l.x + B / p >= U() && a.pushTranslate(c(-B, 0)), l.y + K / p >= S() && a.pushTranslate(c(0, -K)), a.drawRect({
          width: B,
          height: K,
          color: I(0, 0, 0),
          radius: 4,
          opacity: .8
        }), a.drawFmtText(M), a.popTransform();
      };

      i(b, "drawInspectTxt");
      let s = null,
          u = v.fonts[A],
          h = I((n = e.inspectColor) != null ? n : [0, 0, 255]);

      if (me(l => {
        if (!l.area || l.hidden) return;
        let d = a.scale() * (l.fixed ? 1 : (y.cam.scale.x + y.cam.scale.y) / 2);
        l.fixed || (a.pushTransform(), a.applyMatrix(y.camMatrix)), s || l.isHovering() && (s = l);
        let p = (s === l ? 8 : 4) / d,
            m = l.worldArea(),
            M = m.p2.x - m.p1.x,
            B = m.p2.y - m.p1.y;
        a.drawRect({
          pos: m.p1,
          width: M,
          height: B,
          outline: {
            width: p,
            color: h
          },
          fill: !1
        }), l.fixed || a.popTransform();
      }), s) {
        let l = [],
            d = s.inspect();

        for (let p in d) d[p] ? l.push(`${p}: ${d[p]}`) : l.push(`${p}`);

        b(Y(), l.join(`
`));
      }

      b(c(8 / t.scale), `FPS: ${t.fps()}`);
    }

    if (Q.paused) {
      a.pushTransform(), a.pushTranslate(U(), 0), a.pushScale(1 / t.scale), a.pushTranslate(-8, 8);
      let s = 32;
      a.drawRect({
        width: s,
        height: s,
        origin: "topright",
        color: I(0, 0, 0),
        opacity: .8,
        radius: 4
      });

      for (let u = 1; u <= 2; u++) a.drawRect({
        width: 4,
        height: s * .6,
        origin: "center",
        pos: c(-s / 3 * u, s * .5),
        color: I(255, 255, 255),
        radius: 2
      });

      a.popTransform();
    }

    if (Q.timeScale !== 1) {
      a.pushTransform(), a.pushTranslate(U(), S()), a.pushScale(1 / t.scale), a.pushTranslate(-8, -8);
      let s = 8,
          u = a.fmtText({
        text: Q.timeScale.toFixed(1),
        font: v.fonts[A],
        size: 16,
        color: I(255, 255, 255),
        pos: c(-s),
        origin: "botright"
      });
      a.drawRect({
        width: u.width + s * 2 + s * 4,
        height: u.height + s * 2,
        origin: "botright",
        color: I(0, 0, 0),
        opacity: .8,
        radius: 4
      });

      for (let h = 0; h < 2; h++) {
        let b = Q.timeScale < 1;
        a.drawTriangle({
          p1: c(-u.width - s * (b ? 2 : 3.5), -s),
          p2: c(-u.width - s * (b ? 2 : 3.5), -s - u.height),
          p3: c(-u.width - s * (b ? 3.5 : 2), -s - u.height / 2),
          pos: c(-h * s * 1 + (b ? -s * .5 : 0), 0),
          color: I(255, 255, 255)
        });
      }

      a.drawFmtText(u), a.popTransform();
    }

    Q.curRecording && (a.pushTransform(), a.pushTranslate(0, S()), a.pushScale(1 / t.scale), a.pushTranslate(24, -24), a.drawCircle({
      radius: 12,
      color: I(255, 0, 0),
      opacity: St(0, 1, t.time() * 4)
    }), a.popTransform()), Q.showLog && D.draw();
  }

  return i(un, "drawDebug"), t.run(() => {
    zt++, y.loaded ? (y.camMousePos = y.camMatrix.invert().multVec2(t.mousePos()), y.trigger("input"), !Q.paused && e.debug !== !1 && Zt(), a.frameStart(), on(), e.debug !== !1 && un(), a.frameEnd()) : (a.frameStart(), an(), a.frameEnd());
  }), e.debug !== !1 && Me(), e.burp && fe(), window.addEventListener("error", n => {
    D.error(`Error: ${n.error.message}`), t.quit(), t.run(() => {
      v.loadProgress() === 1 && (a.frameStart(), D.draw(), a.frameEnd());
    });
  }), Xe;
}, "default");
exports.default = Es;
},{}],"src/tiled-kaboom.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global atob */
// big array of characters that are suitable for maps
// TODO: I got annoyed after 3001

var mapsymbols = __spreadArray([], new Array(4052), true).reduce(function (a, v, c) {
  if ([92, 173, 847, 888, 889, 907, 909, 930, 1328, 1367, 1368, 1376, 1416, 1419, 1420, 1421, 1424, 1565, 1867, 1868, 2081, 2082, 2094, 2095, 2111, 2140, 2141, 2445, 2446, 2449, 2450, 2473, 2481, 2490, 2491, 2501, 2502, 2505, 2506, 2526, 2532, 2533, 2564, 2577, 2578, 2601, 2609, 2612, 2615, 2618, 2619, 2621, 2633, 2634, 2638, 2639, 2640, 2653, 2692, 2702, 2706, 2729, 2737, 2740, 2746, 2747, 2758, 2762, 2766, 2767, 2788, 2789, 2820, 2829, 2830, 2833, 2834, 2857, 2865, 2868, 2874, 2875, 2885, 2886, 2889, 2890, 2910, 2916, 2917, 2948, 2955, 2956, 2957, 2961, 2966, 2967, 2968, 2971, 2973, 2976, 2977, 2978, 2981, 2982, 2983, 2987, 2988, 2989].includes(c)) {
    return a;
  }

  if (c < 33) {
    return a;
  }

  var ranges = [[126, 161], [895, 900], [1479, 1488], [1514, 1520], [1524, 1536], [1969, 1984], [2042, 2048], [2142, 2207], [2238, 2260], [2384, 2389], [2482, 2486], [2510, 2519], [2519, 2524], [2555, 2561], [2570, 2575], [2626, 2631], [2641, 2649], [2654, 2662], [2677, 2689], [2768, 2784], [2801, 2809], [2809, 2817], [2893, 2902], [2903, 2908], [2935, 2946]];

  for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
    var r = ranges_1[_i];

    if (c > r[0] && c < r[1]) {
      return a;
    }
  }

  return __spreadArray(__spreadArray([], a, true), [String.fromCharCode(c)], false);
}, []);

function verifyTiledMap(mapObj) {
  // TODO: add more validation here
  if (!mapObj) {
    throw new Error('Map parameter is required.');
  }

  if (mapObj.orientation !== 'orthogonal') {
    throw new Error("Map is ".concat(mapObj.orientation, ". Only orthogonal is currently supported."));
  }

  if (mapObj.renderorder !== 'right-down') {
    throw new Error("Map is ".concat(mapObj.renderorder, ". Only right-down is currently supported."));
  }
} // decode data in Tiled base64 format


function base64Decode(data) {
  var len = data.length;
  var bytes = new Array(len / 4); // Interpret data as an array of bytes representing little-endian encoded uint32 values.

  for (var i = 0; i < len; i += 4) {
    bytes[i / 4] = (data.charCodeAt(i) | data.charCodeAt(i + 1) << 8 | data.charCodeAt(i + 2) << 16 | data.charCodeAt(i + 3) << 24) >>> 0;
  }

  return bytes;
}

exports.default = function (k) {
  return {
    verifyTiledMap: verifyTiledMap,
    loadTiledMap: function loadTiledMap(mapObj, location) {
      if (location === void 0) {
        location = '';
      }

      return __awaiter(this, void 0, void 0, function () {
        var map, _loop_1, _i, _a, tileset, _loop_2, _b, _c, layer;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              if (!(typeof mapObj === 'string')) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , fetch(mapObj).then(function (r) {
                return r.json();
              })];

            case 1:
              mapObj = _d.sent();
              _d.label = 2;

            case 2:
              verifyTiledMap(mapObj);
              map = {
                sprites: [],
                levels: [],
                key: {},
                mapObj: {}
              };

              _loop_1 = function _loop_1(tileset) {
                var sliceX, sliceY, _e, _f, _loop_3, frame;

                return __generator(this, function (_g) {
                  switch (_g.label) {
                    case 0:
                      if (tileset.margin !== 0) {
                        console.error("".concat(tileset.name, " uses margins. That is currently unsupported. Skipping."));
                        return [2
                        /*return*/
                        , "continue"];
                      }

                      if (tileset.spacing !== 0) {
                        console.error("".concat(tileset.name, " uses spacing. That is currently unsupported. Skipping."));
                        return [2
                        /*return*/
                        , "continue"];
                      }

                      sliceX = tileset.imagewidth / tileset.tilewidth;
                      sliceY = tileset.imageheight / tileset.tileheight;
                      if (!tileset.image) return [3
                      /*break*/
                      , 2];
                      _f = (_e = map.sprites).push;
                      return [4
                      /*yield*/
                      , k.loadSprite(tileset.name, "".concat(location).concat(tileset.image), {
                        sliceX: sliceX,
                        sliceY: sliceY
                      })];

                    case 1:
                      _f.apply(_e, [_g.sent()]);

                      _g.label = 2;

                    case 2:
                      _loop_3 = function _loop_3(frame) {
                        var collide = false;
                        var info = false;
                        var message = "";
                        var slide = false;

                        for (var _h = 0, _j = tileset.tiles; _h < _j.length; _h++) {
                          var tile = _j[_h];

                          if (tile.id === frame - 1) {
                            for (var _k = 0, _l = tile.properties; _k < _l.length; _k++) {
                              var prop = _l[_k];

                              if (prop.name === 'collides') {
                                collide = prop.value;
                              }

                              if (prop.name === 'info') {
                                info = true;
                                message = prop.value;
                              }

                              if (prop.name === 'slide') {
                                slide = true;
                              }
                            }
                          }
                        }

                        if (collide) {
                          if (info) {
                            map.key[mapsymbols[frame]] = function () {
                              return [k.sprite(tileset.name, {
                                frame: frame - 1
                              }), k.area(), k.solid(), 'wall', 'info', 'level-part', {
                                message: message
                              }];
                            };
                          } else {
                            map.key[mapsymbols[frame]] = function () {
                              return [k.sprite(tileset.name, {
                                frame: frame - 1
                              }), k.area(), k.solid(), 'wall', 'level-part'];
                            };
                          }
                        } else if (info) {
                          map.key[mapsymbols[frame]] = function () {
                            return [k.sprite(tileset.name, {
                              frame: frame - 1
                            }), k.area(), 'info', 'level-part', {
                              message: message
                            }];
                          };
                        } else if (slide) {
                          map.key[mapsymbols[frame]] = function () {
                            return [k.sprite(tileset.name, {
                              frame: frame - 1
                            }), 'level-part', 'slide'];
                          };
                        } else {
                          map.key[mapsymbols[frame]] = function () {
                            return [k.sprite(tileset.name, {
                              frame: frame - 1
                            }), 'level-part'];
                          };
                        }
                      };

                      for (frame = tileset.firstgid; frame < tileset.firstgid + tileset.tilecount; frame++) {
                        _loop_3(frame);
                      }

                      return [2
                      /*return*/
                      ];
                  }
                });
              };

              _i = 0, _a = mapObj.tilesets;
              _d.label = 3;

            case 3:
              if (!(_i < _a.length)) return [3
              /*break*/
              , 6];
              tileset = _a[_i];
              return [5
              /*yield**/
              , _loop_1(tileset)];

            case 4:
              _d.sent();

              _d.label = 5;

            case 5:
              _i++;
              return [3
              /*break*/
              , 3];

            case 6:
              _loop_2 = function _loop_2(layer) {
                if (layer.type === 'tilelayer' && layer.visible) {
                  var width_1 = layer.width,
                      height = layer.height;

                  if (layer.encoding === 'base64') {
                    if (!layer.compression || layer.compression === '') {
                      layer.data = base64Decode(atob(layer.data));
                    }
                  }

                  var mapArray = __spreadArray([], new Array(height), true).map(function () {
                    return new Array(width_1 + 1).fill(' ');
                  });

                  for (var x = 0; x < width_1; x++) {
                    for (var y = 0; y < height; y++) {
                      var cell = y * width_1 + x;

                      if (layer.data[cell] !== 0) {
                        mapArray[y][x] = mapsymbols[layer.data[cell]];
                      }
                    }
                  }

                  map.levels.push(mapArray.map(function (l) {
                    return l.join('');
                  }));
                }
              };

              for (_b = 0, _c = mapObj.layers; _b < _c.length; _b++) {
                layer = _c[_b];

                _loop_2(layer);
              }

              map.mapObj = mapObj;
              return [2
              /*return*/
              , map];
          }
        });
      });
    }
  };
};
},{}],"kaboom.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.k = void 0;

var kaboom_1 = __importDefault(require("kaboom"));

var tiled_kaboom_1 = __importDefault(require("./tiled-kaboom"));

exports.k = (0, kaboom_1.default)({
  background: [0, 0, 0, 1],
  debug: true,
  scale: 3,
  plugins: [tiled_kaboom_1.default]
});
exports.default = exports.k;
},{"kaboom":"../node_modules/kaboom/dist/kaboom.mjs","./tiled-kaboom":"src/tiled-kaboom.ts"}],"src/LiquebaseDungeon.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = void 0;
exports.map = {
  "compressionlevel": -1,
  "height": 48,
  "infinite": false,
  "layers": [{
    "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 133, 134, 135, 130, 130, 130, 133, 134, 135, 130, 164, 130, 133, 134, 135, 130, 130, 130, 130, 130, 130, 130, 130, 194, 195, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 131, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 164, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 132, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 130, 197, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 132, 130, 130, 130, 130, 130, 130, 164, 130, 130, 130, 130, 0, 0, 0, 0, 130, 197, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 130, 197, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 164, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 130, 130, 131, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 164, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 131, 130, 164, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 130, 130, 194, 195, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 194, 195, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 194, 195, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 0, 130, 130, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 162, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 164, 130, 0, 130, 194, 195, 130, 130, 130, 131, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 0, 131, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 164, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 133, 195, 130, 130, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 164, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 130, 130, 164, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 194, 195, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 131, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 131, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 194, 195, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 133, 130, 130, 133, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 69, 70, 71, 130, 69, 70, 71, 130, 130, 130, 0, 0, 0, 130, 130, 130, 130, 71, 130, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 131, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 194, 195, 130, 130, 130, 130, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 130, 130, 130, 130, 131, 130, 0, 0, 0, 0, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 197, 130, 130, 197, 130, 130, 130, 130, 130, 130, 130, 130, 130, 132, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 131, 130, 130, 130, 130, 130, 131, 130, 130, 130, 0, 0, 0, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 164, 130, 130, 130, 132, 130, 132, 130, 130, 130, 164, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 194, 195, 130, 130, 130, 130, 130, 130, 132, 132, 132, 130, 130, 130, 164, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 132, 358, 132, 130, 130, 130, 130, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 132, 130, 130, 132, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 132, 132, 132, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 164, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "height": 48,
    "id": 2,
    "name": "floor",
    "opacity": 1,
    "type": "tilelayer",
    "visible": true,
    "width": 62,
    "x": 0,
    "y": 0
  }, {
    "data": [0, 0, 0, 0, 0, 0, 0, 225, 227, 227, 227, 5, 6, 7, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 4, 2, 3, 4, 2, 3, 4, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 257, 34, 34, 34, 101, 102, 103, 34, 35, 36, 101, 102, 103, 34, 35, 36, 101, 102, 103, 36, 34, 35, 36, 34, 35, 36, 293, 34, 66, 36, 66, 35, 66, 34, 66, 36, 66, 34, 66, 36, 66, 35, 66, 34, 66, 36, 66, 35, 66, 34, 66, 34, 66, 36, 293, 0, 0, 0, 0, 0, 225, 227, 261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 33, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 257, 0, 0, 0, 225, 4, 261, 323, 165, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 33, 33, 33, 33, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 257, 0, 225, 4, 261, 35, 165, 0, 0, 0, 0, 0, 630, 0, 0, 0, 630, 0, 0, 0, 630, 0, 0, 0, 630, 0, 0, 0, 630, 0, 0, 0, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 257, 225, 261, 36, 165, 0, 0, 0, 0, 0, 0, 0, 386, 0, 0, 0, 386, 0, 0, 0, 386, 0, 0, 0, 386, 0, 0, 0, 386, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 257, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 630, 386, 0, 0, 0, 0, 0, 225, 227, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 0, 0, 0, 0, 257, 257, 0, 0, 0, 0, 0, 225, 4, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 293, 0, 0, 0, 0, 257, 257, 0, 0, 0, 0, 0, 257, 35, 258, 308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 310, 0, 0, 0, 198, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 257, 257, 0, 0, 0, 0, 0, 257, 0, 258, 340, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342, 0, 0, 0, 230, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 166, 257, 257, 0, 0, 0, 0, 0, 257, 0, 262, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 261, 2, 3, 4, 2, 3, 4, 2, 3, 4, 261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 198, 257, 257, 0, 0, 0, 0, 0, 257, 0, 324, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 324, 34, 35, 36, 34, 35, 36, 34, 35, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 230, 257, 257, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 257, 257, 0, 0, 0, 0, 0, 257, 0, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 226, 0, 0, 0, 0, 0, 225, 3, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 4, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 257, 257, 418, 419, 420, 421, 0, 257, 0, 259, 35, 36, 67, 35, 36, 67, 35, 36, 67, 35, 36, 258, 0, 0, 0, 0, 0, 257, 34, 34, 35, 36, 34, 35, 98, 34, 35, 68, 34, 100, 36, 34, 98, 36, 34, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 257, 257, 450, 454, 455, 453, 3, 261, 0, 258, 166, 0, 0, 0, 0, 0, 0, 0, 0, 166, 33, 258, 0, 0, 0, 0, 0, 257, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 166, 257, 257, 482, 486, 487, 485, 34, 293, 0, 258, 198, 0, 0, 0, 0, 0, 0, 0, 0, 198, 65, 258, 0, 0, 0, 0, 0, 257, 33, 0, 0, 357, 357, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 193, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 198, 257, 257, 0, 0, 0, 0, 166, 257, 0, 258, 230, 0, 0, 0, 0, 630, 0, 0, 0, 230, 97, 291, 3, 4, 2, 3, 4, 261, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 630, 0, 0, 0, 0, 198, 0, 262, 3, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 230, 257, 257, 0, 0, 0, 0, 198, 257, 0, 258, 0, 0, 0, 0, 0, 386, 0, 0, 0, 0, 129, 34, 35, 36, 34, 34, 35, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 386, 0, 0, 0, 0, 230, 0, 35, 36, 262, 2, 3, 4, 2, 3, 5, 2, 3, 4, 261, 0, 0, 0, 373, 257, 257, 0, 0, 0, 0, 230, 257, 0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 34, 35, 36, 34, 35, 101, 34, 35, 36, 34, 0, 0, 0, 405, 257, 257, 0, 0, 0, 0, 0, 257, 0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 386, 630, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 257, 257, 0, 0, 630, 0, 0, 257, 0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 257, 257, 0, 0, 386, 0, 0, 257, 0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 2, 3, 4, 2, 3, 4, 4, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 630, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 257, 257, 0, 0, 0, 0, 0, 257, 0, 258, 166, 0, 0, 0, 0, 0, 0, 0, 0, 166, 257, 34, 35, 36, 34, 34, 35, 36, 258, 0, 166, 0, 0, 0, 0, 0, 0, 0, 386, 0, 0, 0, 0, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 257, 0, 0, 0, 0, 0, 257, 0, 258, 198, 181, 0, 0, 0, 0, 0, 0, 181, 198, 257, 0, 0, 0, 0, 0, 0, 97, 258, 0, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 0, 0, 225, 2, 3, 4, 4, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 261, 257, 0, 0, 0, 0, 0, 257, 0, 258, 230, 213, 0, 0, 0, 0, 0, 0, 213, 230, 257, 0, 0, 0, 0, 0, 0, 129, 258, 0, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 0, 0, 257, 36, 35, 36, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 257, 630, 0, 0, 0, 630, 257, 0, 262, 227, 4, 2, 3, 4, 2, 3, 4, 2, 227, 261, 0, 0, 0, 0, 0, 0, 161, 262, 2, 3, 4, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 386, 0, 0, 0, 386, 257, 0, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 0, 0, 0, 0, 0, 0, 193, 35, 34, 35, 36, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 35, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 418, 419, 420, 421, 0, 257, 0, 0, 0, 225, 227, 227, 227, 227, 227, 227, 227, 227, 227, 227, 2, 3, 4, 226, 0, 0, 0, 0, 0, 225, 2, 3, 4, 5, 3, 4, 5, 3, 4, 226, 0, 0, 0, 0, 0, 0, 227, 228, 227, 5, 6, 7, 227, 5, 6, 7, 227, 228, 228, 0, 0, 257, 450, 454, 455, 453, 7, 261, 0, 0, 0, 257, 34, 35, 36, 99, 35, 36, 34, 99, 35, 36, 99, 35, 36, 258, 0, 0, 0, 0, 0, 257, 34, 35, 36, 101, 35, 36, 101, 35, 36, 258, 0, 0, 0, 0, 0, 0, 294, 35, 36, 37, 38, 39, 34, 37, 38, 39, 34, 35, 293, 0, 0, 257, 482, 486, 487, 485, 39, 293, 0, 0, 0, 257, 0, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 0, 258, 0, 0, 0, 0, 0, 257, 0, 166, 0, 0, 0, 0, 0, 0, 0, 258, 0, 0, 0, 0, 0, 0, 258, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 257, 0, 0, 257, 0, 0, 0, 0, 0, 257, 0, 0, 0, 257, 0, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 0, 258, 0, 0, 0, 0, 0, 257, 0, 198, 0, 0, 33, 0, 0, 0, 0, 258, 0, 0, 0, 0, 0, 0, 258, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 257, 0, 0, 257, 0, 0, 0, 0, 0, 257, 0, 0, 0, 257, 0, 230, 0, 0, 0, 630, 0, 0, 0, 0, 0, 230, 0, 262, 2, 3, 2, 3, 4, 261, 0, 230, 0, 0, 65, 0, 0, 0, 0, 258, 0, 0, 0, 0, 0, 0, 258, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 257, 0, 0, 257, 0, 0, 0, 0, 0, 257, 3, 3, 3, 261, 0, 0, 0, 0, 0, 386, 0, 0, 0, 0, 0, 0, 0, 34, 165, 36, 34, 165, 36, 34, 0, 0, 0, 0, 97, 630, 0, 0, 0, 262, 3, 3, 3, 3, 3, 3, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 257, 0, 0, 257, 0, 0, 0, 0, 0, 289, 68, 100, 68, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 386, 0, 0, 0, 34, 35, 36, 34, 34, 35, 36, 290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 257, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 354, 0, 0, 0, 0, 0, 0, 147, 257, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 0, 0, 0, 0, 0, 0, 225, 2, 3, 4, 2, 3, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 354, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 257, 227, 227, 227, 227, 227, 227, 227, 227, 227, 227, 226, 0, 0, 357, 357, 357, 0, 0, 0, 0, 0, 0, 257, 34, 35, 36, 34, 35, 36, 293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 226, 0, 0, 354, 354, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 289, 34, 35, 34, 35, 36, 34, 35, 34, 35, 36, 262, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 261, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 294, 34, 35, 36, 34, 35, 36, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 34, 35, 36, 0, 0, 0, 0, 0, 0, 257, 2, 3, 4, 2, 3, 4, 2, 3, 4, 258, 0, 0, 0, 0, 0, 0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 289, 34, 35, 36, 34, 35, 36, 34, 35, 36, 290, 0, 0, 0, 0, 0, 0, 258, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 258, 198, 0, 118, 0, 0, 0, 0, 0, 0, 182, 198, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 258, 230, 0, 150, 0, 0, 0, 0, 0, 0, 214, 230, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 262, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 35, 36, 34, 35, 36, 34, 35, 36, 34, 34, 35, 36, 0, 0],
    "height": 48,
    "id": 1,
    "name": "walls",
    "opacity": 1,
    "type": "tilelayer",
    "visible": true,
    "width": 62,
    "x": 0,
    "y": 0
  }],
  "nextlayerid": 3,
  "nextobjectid": 1,
  "orientation": "orthogonal",
  "renderorder": "right-down",
  "tiledversion": "1.7.2",
  "tileheight": 16,
  "tilesets": [{
    "columns": 32,
    "firstgid": 1,
    "image": "/public/tiles/dungeon.png",
    "imageheight": 512,
    "imagewidth": 512,
    "margin": 0,
    "name": "0x72_DungeonTilesetII_v1.4",
    "spacing": 0,
    "tilecount": 1024,
    "tileheight": 16,
    "tiles": [{
      "id": 0,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 1,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 2,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 3,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 4,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 5,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 6,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 7,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 8,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 9,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 10,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 11,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 12,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 13,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 14,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 15,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 16,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 17,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 18,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 19,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 20,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 21,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 22,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 23,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 24,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 25,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 26,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 27,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 28,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 29,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 30,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 31,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 32,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 33,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 34,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 35,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 36,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 37,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 38,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 39,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 40,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 41,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 42,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 43,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 44,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 45,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 46,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 47,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 48,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 49,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 50,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 51,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 52,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 53,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 54,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 55,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 56,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 57,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 58,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 59,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 60,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 61,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 62,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 63,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 64,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 65,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 66,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 67,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 68,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 69,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 70,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 71,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 72,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 73,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 74,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 75,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 76,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 77,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 78,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 79,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 80,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 81,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 82,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 83,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 84,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 85,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 86,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 87,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 88,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 89,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 90,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 91,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 92,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 93,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 94,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 95,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 96,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 97,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 98,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 99,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 100,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 101,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 102,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 103,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 104,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 105,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 106,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 107,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 108,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 109,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 110,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 111,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 112,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 113,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 114,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 115,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 116,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 117,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 118,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 119,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 120,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 121,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 122,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 123,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 124,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 125,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 126,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 127,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 128,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 129,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 130,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 131,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 132,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 133,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 134,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 135,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 136,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 137,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 138,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 139,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 140,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 141,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 142,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 143,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 144,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 145,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 146,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 147,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 148,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 149,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 150,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 151,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 152,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 153,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 154,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 155,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 156,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 157,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 158,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 159,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 160,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 161,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 162,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 163,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 164,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 165,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 166,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 167,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 168,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 169,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 170,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 171,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 172,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 173,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 174,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 175,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 176,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 177,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 178,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 179,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 180,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 181,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 182,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 183,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 184,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 185,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 186,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 187,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 188,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 189,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 190,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 191,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 192,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 193,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 194,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 195,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 196,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 197,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 198,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 199,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 200,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 201,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 202,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 203,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 204,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 205,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 206,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 207,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 208,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 209,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 210,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 211,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 212,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 213,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 214,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 215,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 216,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 217,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 218,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 219,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 220,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 221,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 222,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 223,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 224,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 225,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 226,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 227,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 228,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 229,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 230,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 231,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 232,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 233,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 234,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 235,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 236,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 237,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 238,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 239,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 240,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 241,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 242,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 243,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 244,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 245,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 246,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 247,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 248,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 249,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 250,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 251,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 252,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 253,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 254,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 255,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 256,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 257,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 258,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 259,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 260,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 261,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 262,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 263,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 264,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 265,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 266,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 267,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 268,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 269,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 270,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 271,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 272,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 273,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 274,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 275,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 276,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 277,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 278,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 279,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 280,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 281,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 282,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 283,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 284,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 285,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 286,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 287,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 288,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 289,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 290,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 291,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 292,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 293,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 294,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 295,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 296,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 297,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 298,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 299,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 300,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 301,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 302,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 303,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 304,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 305,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 306,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 307,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 308,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 309,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 310,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 311,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 312,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 313,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 314,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 315,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 316,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 317,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 318,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 319,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 320,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 321,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 322,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 323,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 324,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 325,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 326,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 327,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 328,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 329,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 330,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 331,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 332,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 333,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 334,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 335,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 336,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 337,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 338,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 339,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 340,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 341,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 342,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 343,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 344,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 345,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 346,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 347,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 348,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 349,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 350,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 351,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 352,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 353,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 354,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 355,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 356,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 357,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 358,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 359,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 360,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 361,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 362,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 363,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 364,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 365,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 366,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 367,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 368,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 369,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 370,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 371,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 372,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 373,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 374,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 375,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 376,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 377,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 378,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 379,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 380,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 381,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 382,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 383,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 384,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 385,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": true
      }]
    }, {
      "id": 386,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 387,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 388,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 389,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 390,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 391,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 392,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 393,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 394,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 395,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 396,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 397,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 398,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 399,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 400,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 401,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 402,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 403,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 404,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 405,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 406,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 407,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 408,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 409,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 410,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 411,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 412,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 413,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 414,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 415,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 416,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 417,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 418,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 419,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 420,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 421,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 422,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 423,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 424,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 425,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 426,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 427,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 428,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 429,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 430,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 431,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 432,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 433,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 434,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 435,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 436,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 437,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 438,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 439,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 440,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 441,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 442,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 443,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 444,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 445,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 446,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 447,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 448,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 449,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 450,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 451,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 452,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 453,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 454,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 455,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 456,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 457,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 458,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 459,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 460,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 461,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 462,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 463,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 464,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 465,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 466,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 467,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 468,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 469,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 470,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 471,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 472,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 473,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 474,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 475,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 476,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 477,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 478,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 479,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 480,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 481,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 482,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 483,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 484,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": true
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 485,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 486,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 487,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 488,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 489,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 490,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 491,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 492,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 493,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 494,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 495,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 496,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 497,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 498,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 499,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 500,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 501,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 502,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 503,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 504,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 505,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 506,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 507,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 508,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 509,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 510,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 511,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 512,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 513,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 514,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 515,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 516,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 517,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 518,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 519,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 520,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 521,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 522,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 523,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 524,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 525,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 526,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 527,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 528,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 529,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 530,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 531,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 532,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 533,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 534,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 535,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 536,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 537,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 538,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 539,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 540,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 541,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 542,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 543,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 544,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 545,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 546,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 547,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 548,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 549,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 550,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 551,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 552,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 553,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 554,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 555,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 556,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 557,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 558,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 559,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 560,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 561,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 562,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 563,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 564,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 565,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 566,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 567,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 568,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 569,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 570,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 571,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 572,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 573,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 574,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 575,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 576,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 577,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 578,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 579,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 580,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 581,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 582,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 583,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 584,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 585,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 586,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 587,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 588,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 589,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 590,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 591,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 592,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 593,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 594,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 595,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 596,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 597,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 598,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 599,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 600,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 601,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 602,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 603,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 604,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 605,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 606,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 607,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 608,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 609,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 610,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 611,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 612,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 613,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 614,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 615,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 616,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 617,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 618,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 619,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 620,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 621,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 622,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 623,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 624,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 625,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 626,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 627,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 628,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 629,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 630,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 631,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 632,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 633,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 634,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 635,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 636,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 637,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 638,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 639,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 640,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 641,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 642,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 643,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 644,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 645,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 646,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 647,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 648,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 649,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 650,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 651,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 652,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 653,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 654,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 655,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 656,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 657,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 658,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 659,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 660,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 661,
      "properties": [{
        "name": "collides",
        "type": "bool",
        "value": false
      }, {
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 662,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 663,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 664,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 665,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 666,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 667,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 668,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 669,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 670,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 671,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 672,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 673,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 674,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 675,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 676,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 677,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 678,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 679,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 680,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 681,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 682,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 683,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 684,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 685,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 686,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 687,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 688,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 689,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 690,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 691,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 692,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 693,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 694,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 695,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 696,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 697,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 698,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 699,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 700,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 701,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 702,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 703,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 704,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 705,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 706,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 707,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 708,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 709,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 710,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 711,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 712,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 713,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 714,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 715,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 716,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 717,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 718,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 719,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 720,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 721,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 722,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 723,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 724,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 725,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 726,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 727,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 728,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 729,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 730,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 731,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 732,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 733,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 734,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 735,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 736,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 737,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 738,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 739,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 740,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 741,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 742,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 743,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 744,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 745,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 746,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 747,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 748,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 749,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 750,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 751,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 752,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 753,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 754,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 755,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 756,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 757,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 758,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 759,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 760,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 761,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 762,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 763,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 764,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 765,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 766,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 767,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 768,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 769,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 770,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 771,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 772,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 773,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 774,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 775,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 776,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 777,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 778,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 779,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 780,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 781,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 782,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 783,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 784,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 785,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 786,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 787,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 788,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 789,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 790,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 791,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 792,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 793,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 794,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 795,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 796,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 797,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 798,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 799,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 800,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 801,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 802,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 803,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 804,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 805,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 806,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 807,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 808,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 809,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 810,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 811,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 812,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 813,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 814,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 815,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 816,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 817,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 818,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 819,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 820,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 821,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 822,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 823,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 824,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 825,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 826,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 827,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 828,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 829,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 830,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 831,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 832,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 833,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 834,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 835,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 836,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 837,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 838,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 839,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 840,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 841,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 842,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 843,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 844,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 845,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 846,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 847,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 848,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 849,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 850,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 851,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 852,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 853,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 854,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 855,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 856,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 857,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 858,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 859,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 860,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 861,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 862,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 863,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 864,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 865,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 866,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 867,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 868,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 869,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 870,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 871,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 872,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 873,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 874,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 875,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 876,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 877,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 878,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 879,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 880,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 881,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 882,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 883,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 884,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 885,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 886,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 887,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 888,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 889,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 890,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 891,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 892,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 893,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 894,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 895,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 896,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 897,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 898,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 899,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 900,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 901,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 902,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 903,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 904,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 905,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 906,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 907,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 908,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 909,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 910,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 911,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 912,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 913,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 914,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 915,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 916,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 917,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 918,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 919,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 920,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 921,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 922,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 923,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 924,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 925,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 926,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 927,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 928,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 929,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 930,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 931,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 932,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 933,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 934,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 935,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 936,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 937,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 938,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 939,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 940,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 941,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 942,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 943,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 944,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 945,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 946,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 947,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 948,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 949,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 950,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 951,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 952,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 953,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 954,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 955,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 956,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 957,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 958,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }, {
      "id": 959,
      "properties": [{
        "name": "slide",
        "type": "bool",
        "value": false
      }]
    }],
    "tilewidth": 16
  }],
  "tilewidth": 16,
  "type": "map",
  "version": "1.6",
  "width": 62
};
exports.default = exports.map;
},{}],"../node_modules/rsocket-flowable/build/FlowableMapOperator.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

/**
 * An operator that acts like Array.map, applying a given function to
 * all values provided by its `Subscription` and passing the result to its
 * `Subscriber`.
 */
class FlowableMapOperator {
  constructor(subscriber, fn) {
    this._fn = fn;
    this._subscriber = subscriber;
    this._subscription = null;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(this._fn(t));
    } catch (e) {
      if (!this._subscription) {
        throw new Error('subscription is null');
      }
      this._subscription.cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
  }
}
exports.default = FlowableMapOperator;

},{}],"../node_modules/rsocket-flowable/build/FlowableTakeOperator.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

/**
 * An operator that requests a fixed number of values from its source
 * `Subscription` and forwards them to its `Subscriber`, cancelling the
 * subscription when the requested number of items has been reached.
 */
class FlowableTakeOperator {
  constructor(subscriber, toTake) {
    this._subscriber = subscriber;
    this._subscription = null;
    this._toTake = toTake;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(t);
      if (--this._toTake === 0) {
        this._cancelAndComplete();
      }
    } catch (e) {
      if (!this._subscription) {
        throw new Error('subscription is null');
      }
      this._subscription.cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
    if (this._toTake <= 0) {
      this._cancelAndComplete();
    }
  }

  _cancelAndComplete() {
    if (!this._subscription) {
      throw new Error('subscription is null');
    }
    this._subscription.cancel();
    this._subscriber.onComplete();
  }
}
exports.default = FlowableTakeOperator;

},{}],"../node_modules/rsocket-flowable/build/Invariant.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */
'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */
function invariant(condition, format, ...args) {
  if (!condition) {
    let error;

    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified ' +
          'dev environment for the full error message and additional helpful warnings.'
      );
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, () => String(args[argIndex++])));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

},{}],"../node_modules/rsocket-flowable/build/Flowable.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

var _FlowableMapOperator = _interopRequireDefault(
  require('./FlowableMapOperator')
);
var _FlowableTakeOperator = _interopRequireDefault(
  require('./FlowableTakeOperator')
);
var _Invariant = _interopRequireDefault(require('./Invariant'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * Implements the ReactiveStream `Publisher` interface with Rx-style operators.
 */
class Flowable {
  static just(...values) {
    return new Flowable((subscriber) => {
      let cancelled = false;
      let i = 0;
      subscriber.onSubscribe({
        cancel: () => {
          cancelled = true;
        },
        request: (n) => {
          while (!cancelled && n > 0 && i < values.length) {
            subscriber.onNext(values[i++]);
            n--;
          }
          if (!cancelled && i == values.length) {
            subscriber.onComplete();
          }
        },
      });
    });
  }

  static error(error) {
    return new Flowable((subscriber) => {
      subscriber.onSubscribe({
        cancel: () => {},
        request: () => {
          subscriber.onError(error);
        },
      });
    });
  }

  static never() {
    return new Flowable((subscriber) => {
      subscriber.onSubscribe({
        cancel: () => {},
        request: () => {},
      });
    });
  }

  constructor(source, max = Number.MAX_SAFE_INTEGER) {
    this._max = max;
    this._source = source;
  }

  subscribe(subscriberOrCallback) {
    let partialSubscriber;
    if (typeof subscriberOrCallback === 'function') {
      partialSubscriber = this._wrapCallback(subscriberOrCallback);
    } else {
      partialSubscriber = subscriberOrCallback;
    }
    const subscriber = new FlowableSubscriber(partialSubscriber, this._max);
    this._source(subscriber);
  }

  lift(onSubscribeLift) {
    return new Flowable((subscriber) =>
      this._source(onSubscribeLift(subscriber))
    );
  }

  map(fn) {
    return this.lift(
      (subscriber) => new _FlowableMapOperator.default(subscriber, fn)
    );
  }

  take(toTake) {
    return this.lift(
      (subscriber) => new _FlowableTakeOperator.default(subscriber, toTake)
    );
  }

  _wrapCallback(callback) {
    const max = this._max;
    return {
      onNext: callback,
      onSubscribe(subscription) {
        subscription.request(max);
      },
    };
  }
}

/**
 * @private
 */ exports.default = Flowable;
class FlowableSubscriber {
  constructor(subscriber, max) {
    _defineProperty(
      this,
      '_cancel',

      () => {
        if (!this._active) {
          return;
        }
        this._active = false;
        if (this._subscription) {
          this._subscription.cancel();
        }
      }
    );
    _defineProperty(
      this,
      '_request',

      (n) => {
        (0, _Invariant.default)(
          Number.isInteger(n) && n >= 1 && n <= this._max,
          'Flowable: Expected request value to be an integer with a ' +
            'value greater than 0 and less than or equal to %s, got ' +
            '`%s`.',
          this._max,
          n
        );

        if (!this._active) {
          return;
        }
        if (n === this._max) {
          this._pending = this._max;
        } else {
          this._pending += n;
          if (this._pending >= this._max) {
            this._pending = this._max;
          }
        }
        if (this._subscription) {
          this._subscription.request(n);
        }
      }
    );
    this._active = false;
    this._max = max;
    this._pending = 0;
    this._started = false;
    this._subscriber = subscriber || {};
    this._subscription = null;
  }
  onComplete() {
    if (!this._active) {
      console.warn(
        'Flowable: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete();
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }
  onError(error) {
    if (this._started && !this._active) {
      console.warn(
        'Flowable: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }
  onNext(data) {
    if (!this._active) {
      console.warn(
        'Flowable: Invalid call to onNext(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    if (this._pending === 0) {
      console.warn(
        'Flowable: Invalid call to onNext(), all request()ed values have been ' +
          'published.'
      );
      return;
    }
    if (this._pending !== this._max) {
      this._pending--;
    }
    try {
      this._subscriber.onNext && this._subscriber.onNext(data);
    } catch (error) {
      if (this._subscription) {
        this._subscription.cancel();
      }
      this.onError(error);
    }
  }
  onSubscribe(subscription) {
    if (this._started) {
      console.warn('Flowable: Invalid call to onSubscribe(): already called.');
      return;
    }
    this._active = true;
    this._started = true;
    this._subscription = subscription;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe({
          cancel: this._cancel,
          request: this._request,
        });
    } catch (error) {
      this.onError(error);
    }
  }
}

},{"./FlowableMapOperator":"../node_modules/rsocket-flowable/build/FlowableMapOperator.js","./FlowableTakeOperator":"../node_modules/rsocket-flowable/build/FlowableTakeOperator.js","./Invariant":"../node_modules/rsocket-flowable/build/Invariant.js"}],"../node_modules/rsocket-flowable/build/Single.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

/**
 * Represents a lazy computation that will either produce a value of type T
 * or fail with an error. Calling `subscribe()` starts the
 * computation and returns a subscription object, which has an `unsubscribe()`
 * method that can be called to prevent completion/error callbacks from being
 * invoked and, where supported, to also cancel the computation.
 * Implementations may optionally implement cancellation; if they do not
 * `cancel()` is a no-op.
 *
 * Note: Unlike Promise, callbacks (onComplete/onError) may be invoked
 * synchronously.
 *
 * Example:
 *
 * ```
 * const value = new Single(subscriber => {
 *   const id = setTimeout(
 *     () => subscriber.onComplete('Hello!'),
 *     250
 *   );
 *   // Optional: Call `onSubscribe` with a cancellation callback
 *   subscriber.onSubscribe(() => clearTimeout(id));
 * });
 *
 * // Start the computation. onComplete will be called after the timeout
 * // with 'hello'  unless `cancel()` is called first.
 * value.subscribe({
 *   onComplete: value => console.log(value),
 *   onError: error => console.error(error),
 *   onSubscribe: cancel => ...
 * });
 * ```
 */
class Single {
  static of(value) {
    return new Single((subscriber) => {
      subscriber.onSubscribe();
      subscriber.onComplete(value);
    });
  }

  static error(error) {
    return new Single((subscriber) => {
      subscriber.onSubscribe();
      subscriber.onError(error);
    });
  }

  static never() {
    return new Single((subscriber) => {
      subscriber.onSubscribe();
    });
  }

  constructor(source) {
    this._source = source;
  }

  subscribe(partialSubscriber) {
    const subscriber = new FutureSubscriber(partialSubscriber);
    try {
      this._source(subscriber);
    } catch (error) {
      subscriber.onError(error);
    }
  }

  flatMap(fn) {
    return new Single((subscriber) => {
      let currentCancel;
      const cancel = () => {
        currentCancel && currentCancel();
        currentCancel = null;
      };
      this._source({
        onComplete: (value) => {
          fn(value).subscribe({
            onComplete: (mapValue) => {
              subscriber.onComplete(mapValue);
            },
            onError: (error) => subscriber.onError(error),
            onSubscribe: (_cancel) => {
              currentCancel = _cancel;
            },
          });
        },
        onError: (error) => subscriber.onError(error),
        onSubscribe: (_cancel) => {
          currentCancel = _cancel;
          subscriber.onSubscribe(cancel);
        },
      });
    });
  }

  /**
   * Return a new Single that resolves to the value of this Single applied to
   * the given mapping function.
   */
  map(fn) {
    return new Single((subscriber) => {
      return this._source({
        onComplete: (value) => subscriber.onComplete(fn(value)),
        onError: (error) => subscriber.onError(error),
        onSubscribe: (cancel) => subscriber.onSubscribe(cancel),
      });
    });
  }

  then(successFn, errorFn) {
    this.subscribe({
      onComplete: successFn || (() => {}),
      onError: errorFn || (() => {}),
    });
  }
}

/**
 * @private
 */ exports.default = Single;
class FutureSubscriber {
  constructor(subscriber) {
    this._active = false;
    this._started = false;
    this._subscriber = subscriber || {};
  }

  onComplete(value) {
    if (!this._active) {
      console.warn(
        'Single: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete(value);
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }

  onError(error) {
    if (this._started && !this._active) {
      console.warn(
        'Single: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }

  onSubscribe(cancel) {
    if (this._started) {
      console.warn('Single: Invalid call to onSubscribe(): already called.');
      return;
    }
    this._active = true;
    this._started = true;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe(() => {
          if (!this._active) {
            return;
          }
          this._active = false;
          cancel && cancel();
        });
    } catch (error) {
      this.onError(error);
    }
  }
}

},{}],"../node_modules/rsocket-flowable/build/FlowableProcessor.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

class FlowableProcessor {
  constructor(source, fn) {
    this._source = source;
    this._transformer = fn;
    this._done = false;
    this._mappers = []; //mappers for map function
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
  }

  onNext(t) {
    if (!this._sink) {
      console.warn('premature onNext for processor, dropping value');
      return;
    }

    let val = t;
    if (this._transformer) {
      val = this._transformer(t);
    }
    const finalVal = this._mappers.reduce(
      (interimVal, mapper) => mapper(interimVal),
      val
    );

    this._sink.onNext(finalVal);
  }

  onError(error) {
    this._error = error;
    if (!this._sink) {
      console.warn('premature onError for processor, marking complete/errored');
    } else {
      this._sink.onError(error);
    }
  }

  onComplete() {
    this._done = true;
    if (!this._sink) {
      console.warn('premature onError for processor, marking complete');
    } else {
      this._sink.onComplete();
    }
  }

  subscribe(subscriber) {
    if (this._source.subscribe) {
      this._source.subscribe(this);
    }
    this._sink = subscriber;
    this._sink.onSubscribe(this);

    if (this._error) {
      this._sink.onError(this._error);
    } else if (this._done) {
      this._sink.onComplete();
    }
  }

  map(fn) {
    this._mappers.push(fn);
    return this;
  }

  request(n) {
    this._subscription && this._subscription.request(n);
  }

  cancel() {
    this._subscription && this._subscription.cancel();
  }
}
exports.default = FlowableProcessor;

},{}],"../node_modules/rsocket-flowable/build/FlowableTimer.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.every = every;

var _Flowable = _interopRequireDefault(require('./Flowable'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Returns a Publisher that provides the current time (Date.now()) every `ms`
 * milliseconds.
 *
 * The timer is established on the first call to `request`: on each
 * interval a value is published if there are outstanding requests,
 * otherwise nothing occurs for that interval. This approach ensures
 * that the interval between `onNext` calls is as regular as possible
 * and means that overlapping `request` calls (ie calling again before
 * the previous values have been vended) behaves consistently.
 */
function every(ms) {
  return new _Flowable.default((subscriber) => {
    let intervalId = null;
    let pending = 0;
    subscriber.onSubscribe({
      cancel: () => {
        if (intervalId != null) {
          clearInterval(intervalId);
          intervalId = null;
        }
      },
      request: (n) => {
        if (n < Number.MAX_SAFE_INTEGER) {
          pending += n;
        } else {
          pending = Number.MAX_SAFE_INTEGER;
        }
        if (intervalId != null) {
          return;
        }
        intervalId = setInterval(() => {
          if (pending > 0) {
            if (pending !== Number.MAX_SAFE_INTEGER) {
              pending--;
            }
            subscriber.onNext(Date.now());
          }
        }, ms);
      },
    });
  });
}

},{"./Flowable":"../node_modules/rsocket-flowable/build/Flowable.js"}],"../node_modules/rsocket-flowable/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
Object.defineProperty(exports, 'Flowable', {
  enumerable: true,
  get: function () {
    return _Flowable.default;
  },
});
Object.defineProperty(exports, 'Single', {
  enumerable: true,
  get: function () {
    return _Single.default;
  },
});
Object.defineProperty(exports, 'FlowableProcessor', {
  enumerable: true,
  get: function () {
    return _FlowableProcessor.default;
  },
});
Object.defineProperty(exports, 'every', {
  enumerable: true,
  get: function () {
    return _FlowableTimer.every;
  },
});

var _Flowable = _interopRequireDefault(require('./Flowable'));
var _Single = _interopRequireDefault(require('./Single'));
var _FlowableProcessor = _interopRequireDefault(require('./FlowableProcessor'));
var _FlowableTimer = require('./FlowableTimer');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

},{"./Flowable":"../node_modules/rsocket-flowable/build/Flowable.js","./Single":"../node_modules/rsocket-flowable/build/Single.js","./FlowableProcessor":"../node_modules/rsocket-flowable/build/FlowableProcessor.js","./FlowableTimer":"../node_modules/rsocket-flowable/build/FlowableTimer.js"}],"../node_modules/rsocket-core/build/Invariant.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */
'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */
function invariant(condition, format, ...args) {
  if (!condition) {
    let error;

    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified ' +
          'dev environment for the full error message and additional helpful warnings.'
      );
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, () => String(args[argIndex++])));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

},{}],"../node_modules/rsocket-core/build/RSocketFrame.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */
'use strict';

/* eslint-disable max-len, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.isIgnore = isIgnore;
exports.isMetadata = isMetadata;
exports.isComplete = isComplete;
exports.isNext = isNext;
exports.isRespond = isRespond;
exports.isResumeEnable = isResumeEnable;
exports.isLease = isLease;
exports.isFollows = isFollows;
exports.isResumePositionFrameType = isResumePositionFrameType;
exports.getFrameTypeName = getFrameTypeName;
exports.createErrorFromFrame = createErrorFromFrame;
exports.getErrorCodeExplanation = getErrorCodeExplanation;
exports.printFrame = printFrame;
exports.MAX_VERSION = exports.MAX_TTL = exports.MAX_STREAM_ID = exports.MAX_RESUME_LENGTH = exports.MAX_REQUEST_N = exports.MAX_REQUEST_COUNT = exports.MAX_MIME_LENGTH = exports.MAX_METADATA_LENGTH = exports.MAX_LIFETIME = exports.MAX_KEEPALIVE = exports.MAX_CODE = exports.FRAME_TYPE_OFFFSET = exports.FLAGS_MASK = exports.ERROR_EXPLANATIONS = exports.ERROR_CODES = exports.FLAGS = exports.FRAME_TYPE_NAMES = exports.FRAME_TYPES = exports.CONNECTION_STREAM_ID = void 0;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const CONNECTION_STREAM_ID = 0;
exports.CONNECTION_STREAM_ID = CONNECTION_STREAM_ID;

const FRAME_TYPES = {
  CANCEL: 0x09, // Cancel Request: Cancel outstanding request.
  ERROR: 0x0b, // Error: Error at connection or application level.
  EXT: 0x3f, // Extension Header: Used To Extend more frame types as well as extensions.
  KEEPALIVE: 0x03, // Keepalive: Connection keepalive.
  LEASE: 0x02, // Lease: Sent by Responder to grant the ability to send requests.
  METADATA_PUSH: 0x0c, // Metadata: Asynchronous Metadata frame
  PAYLOAD: 0x0a, // Payload: Payload on a stream. For example, response to a request, or message on a channel.
  REQUEST_CHANNEL: 0x07, // Request Channel: Request a completable stream in both directions.
  REQUEST_FNF: 0x05, // Fire And Forget: A single one-way message.
  REQUEST_N: 0x08, // Request N: Request N more items with Reactive Streams semantics.
  REQUEST_RESPONSE: 0x04, // Request Response: Request single response.
  REQUEST_STREAM: 0x06, // Request Stream: Request a completable stream.
  RESERVED: 0x00, // Reserved
  RESUME: 0x0d, // Resume: Replaces SETUP for Resuming Operation (optional)
  RESUME_OK: 0x0e, // Resume OK : Sent in response to a RESUME if resuming operation possible (optional)
  SETUP: 0x01, // Setup: Sent by client to initiate protocol processing.
};

// Maps frame type codes to type names
exports.FRAME_TYPES = FRAME_TYPES;
const FRAME_TYPE_NAMES = {};
exports.FRAME_TYPE_NAMES = FRAME_TYPE_NAMES;
for (const name in FRAME_TYPES) {
  const value = FRAME_TYPES[name];
  FRAME_TYPE_NAMES[value] = name;
}

const FLAGS = {
  COMPLETE: 0x40, // PAYLOAD, REQUEST_CHANNEL: indicates stream completion, if set onComplete will be invoked on receiver.
  FOLLOWS: 0x80, // PAYLOAD, REQUEST_XXX: indicates that frame was fragmented and requires reassembly
  IGNORE: 0x200, // (all): Ignore frame if not understood.
  LEASE: 0x40, // SETUP: Will honor lease or not.
  METADATA: 0x100, // (all): must be set if metadata is present in the frame.
  NEXT: 0x20, // PAYLOAD: indicates data/metadata present, if set onNext will be invoked on receiver.
  RESPOND: 0x80, // KEEPALIVE: should KEEPALIVE be sent by peer on receipt.
  RESUME_ENABLE: 0x80, // SETUP: Client requests resume capability if possible. Resume Identification Token present.
};

// Maps error names to codes
exports.FLAGS = FLAGS;
const ERROR_CODES = {
  APPLICATION_ERROR: 0x00000201,
  CANCELED: 0x00000203,
  CONNECTION_CLOSE: 0x00000102,
  CONNECTION_ERROR: 0x00000101,
  INVALID: 0x00000204,
  INVALID_SETUP: 0x00000001,
  REJECTED: 0x00000202,
  REJECTED_RESUME: 0x00000004,
  REJECTED_SETUP: 0x00000003,
  RESERVED: 0x00000000,
  RESERVED_EXTENSION: 0xffffffff,
  UNSUPPORTED_SETUP: 0x00000002,
};

// Maps error codes to names
exports.ERROR_CODES = ERROR_CODES;
const ERROR_EXPLANATIONS = {};
exports.ERROR_EXPLANATIONS = ERROR_EXPLANATIONS;
for (const explanation in ERROR_CODES) {
  const code = ERROR_CODES[explanation];
  ERROR_EXPLANATIONS[code] = explanation;
}

const FLAGS_MASK = 0x3ff; // low 10 bits
exports.FLAGS_MASK = FLAGS_MASK;
const FRAME_TYPE_OFFFSET = 10; // frame type is offset 10 bytes within the uint16 containing type + flags
exports.FRAME_TYPE_OFFFSET = FRAME_TYPE_OFFFSET;
const MAX_CODE = 0x7fffffff; // uint31
exports.MAX_CODE = MAX_CODE;
const MAX_KEEPALIVE = 0x7fffffff; // uint31
exports.MAX_KEEPALIVE = MAX_KEEPALIVE;
const MAX_LIFETIME = 0x7fffffff; // uint31
exports.MAX_LIFETIME = MAX_LIFETIME;
const MAX_METADATA_LENGTH = 0xffffff; // uint24
exports.MAX_METADATA_LENGTH = MAX_METADATA_LENGTH;
const MAX_MIME_LENGTH = 0xff; // int8
exports.MAX_MIME_LENGTH = MAX_MIME_LENGTH;
const MAX_REQUEST_COUNT = 0x7fffffff; // uint31
exports.MAX_REQUEST_COUNT = MAX_REQUEST_COUNT;
const MAX_REQUEST_N = 0x7fffffff; // uint31
exports.MAX_REQUEST_N = MAX_REQUEST_N;
const MAX_RESUME_LENGTH = 0xffff; // uint16
exports.MAX_RESUME_LENGTH = MAX_RESUME_LENGTH;
const MAX_STREAM_ID = 0x7fffffff; // uint31
exports.MAX_STREAM_ID = MAX_STREAM_ID;
const MAX_TTL = 0x7fffffff; // uint31
exports.MAX_TTL = MAX_TTL;
const MAX_VERSION = 0xffff; // uint16

/**
 * Returns true iff the flags have the IGNORE bit set.
 */ exports.MAX_VERSION = MAX_VERSION;
function isIgnore(flags) {
  return (flags & FLAGS.IGNORE) === FLAGS.IGNORE;
}

/**
 * Returns true iff the flags have the METADATA bit set.
 */
function isMetadata(flags) {
  return (flags & FLAGS.METADATA) === FLAGS.METADATA;
}

/**
 * Returns true iff the flags have the COMPLETE bit set.
 */
function isComplete(flags) {
  return (flags & FLAGS.COMPLETE) === FLAGS.COMPLETE;
}

/**
 * Returns true iff the flags have the NEXT bit set.
 */
function isNext(flags) {
  return (flags & FLAGS.NEXT) === FLAGS.NEXT;
}

/**
 * Returns true iff the flags have the RESPOND bit set.
 */
function isRespond(flags) {
  return (flags & FLAGS.RESPOND) === FLAGS.RESPOND;
}

/**
 * Returns true iff the flags have the RESUME_ENABLE bit set.
 */
function isResumeEnable(flags) {
  return (flags & FLAGS.RESUME_ENABLE) === FLAGS.RESUME_ENABLE;
}

/**
 * Returns true iff the flags have the LEASE bit set.
 */
function isLease(flags) {
  return (flags & FLAGS.LEASE) === FLAGS.LEASE;
}

function isFollows(flags) {
  return (flags & FLAGS.FOLLOWS) === FLAGS.FOLLOWS;
}

/**
 * Returns true iff the frame type is counted toward the implied
 * client/server position used for the resumption protocol.
 */
function isResumePositionFrameType(type) {
  return (
    type === FRAME_TYPES.CANCEL ||
    type === FRAME_TYPES.ERROR ||
    type === FRAME_TYPES.PAYLOAD ||
    type === FRAME_TYPES.REQUEST_CHANNEL ||
    type === FRAME_TYPES.REQUEST_FNF ||
    type === FRAME_TYPES.REQUEST_RESPONSE ||
    type === FRAME_TYPES.REQUEST_STREAM ||
    type === FRAME_TYPES.REQUEST_N
  );
}

function getFrameTypeName(type) {
  const name = FRAME_TYPE_NAMES[type];
  return name != null ? name : toHex(type);
}

function sprintf(format, ...args) {
  let index = 0;
  return format.replace(/%s/g, (match) => args[index++]);
}

/**
 * Constructs an Error object given the contents of an error frame. The
 * `source` property contains metadata about the error for use in introspecting
 * the error at runtime:
 * - `error.source.code: number`: the error code returned by the server.
 * - `error.source.explanation: string`: human-readable explanation of the code
 *   (this value is not standardized and may change).
 * - `error.source.message: string`: the error string returned by the server.
 */
function createErrorFromFrame(frame) {
  const {code, message} = frame;
  const explanation = getErrorCodeExplanation(code);
  const error = new Error(
    sprintf(
      'RSocket error %s (%s): %s. See error `source` property for details.',
      toHex(code),
      explanation,
      message
    )
  );

  error.source = {
    code,
    explanation,
    message,
  };

  return error;
}

/**
 * Given a RSocket error code, returns a human-readable explanation of that
 * code, following the names used in the protocol specification.
 */
function getErrorCodeExplanation(code) {
  const explanation = ERROR_EXPLANATIONS[code];
  if (explanation != null) {
    return explanation;
  } else if (code <= 0x00300) {
    return 'RESERVED (PROTOCOL)';
  } else {
    return 'RESERVED (APPLICATION)';
  }
}

/**
 * Pretty-prints the frame for debugging purposes, with types, flags, and
 * error codes annotated with descriptive names.
 */
function printFrame(frame) {
  const obj = _objectSpread({}, frame);
  obj.type = getFrameTypeName(frame.type) + ` (${toHex(frame.type)})`;
  const flagNames = [];
  for (const name in FLAGS) {
    const flag = FLAGS[name];
    if ((frame.flags & flag) === flag) {
      flagNames.push(name);
    }
  }
  if (!flagNames.length) {
    flagNames.push('NO FLAGS');
  }
  obj.flags = flagNames.join(' | ') + ` (${toHex(frame.flags)})`;
  if (frame.type === FRAME_TYPES.ERROR) {
    obj.code = getErrorCodeExplanation(frame.code) + ` (${toHex(frame.code)})`;
  }
  return JSON.stringify(obj, null, 2);
}

function toHex(n) {
  return '0x' + n.toString(16);
}

},{}],"../node_modules/rsocket-core/build/RSocketVersion.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.MINOR_VERSION = exports.MAJOR_VERSION = void 0;

const MAJOR_VERSION = 1;
exports.MAJOR_VERSION = MAJOR_VERSION;
const MINOR_VERSION = 0;
exports.MINOR_VERSION = MINOR_VERSION;

},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/base64-js/index.js","ieee754":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/ieee754/index.js","isarray":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/isarray/index.js","buffer":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/buffer/index.js"}],"../node_modules/rsocket-core/build/LiteBuffer.js":[function(require,module,exports) {
var global = arguments[3];

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.LiteBuffer = exports.Buffer = void 0;

var _buffer = _interopRequireDefault(require('buffer'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

const hasGlobalBuffer =
  typeof global !== 'undefined' && global.hasOwnProperty('Buffer');
const hasBufferModule = _buffer.default.hasOwnProperty('Buffer');

function notImplemented(msg) {
  const message = msg ? `Not implemented: ${msg}` : 'Not implemented';
  throw new Error(message);
}

// eslint-disable-next-line max-len
// Taken from: https://github.com/nodejs/node/blob/ba684805b6c0eded76e5cd89ee00328ac7a59365/lib/internal/util.js#L125
// Return undefined if there is no match.
// Move the "slow cases" to a separate function to make sure this function gets
// inlined properly. That prioritizes the common case.
function normalizeEncoding(enc) {
  if (enc == null || enc === 'utf8' || enc === 'utf-8') {
    return 'utf8';
  }
  return slowCases(enc);
}

function isInstance(obj, type) {
  return (
    obj instanceof type ||
    (obj != null &&
      obj.constructor != null &&
      obj.constructor.name != null &&
      obj.constructor.name === type.name)
  );
}

// eslint-disable-next-line max-len
// https://github.com/nodejs/node/blob/ba684805b6c0eded76e5cd89ee00328ac7a59365/lib/internal/util.js#L130
function slowCases(enc) {
  switch (enc.length) {
    case 4:
      if (enc === 'UTF8') {
        return 'utf8';
      }
      if (enc === 'ucs2' || enc === 'UCS2') {
        return 'utf16le';
      }
      enc = `${enc}`.toLowerCase();
      if (enc === 'utf8') {
        return 'utf8';
      }
      if (enc === 'ucs2') {
        return 'utf16le';
      }
      break;
    case 3:
      if (enc === 'hex' || enc === 'HEX' || `${enc}`.toLowerCase() === 'hex') {
        return 'hex';
      }
      break;
    case 5:
      if (enc === 'ascii') {
        return 'ascii';
      }
      if (enc === 'ucs-2') {
        return 'utf16le';
      }
      if (enc === 'UTF-8') {
        return 'utf8';
      }
      if (enc === 'ASCII') {
        return 'ascii';
      }
      if (enc === 'UCS-2') {
        return 'utf16le';
      }
      enc = `${enc}`.toLowerCase();
      if (enc === 'utf-8') {
        return 'utf8';
      }
      if (enc === 'ascii') {
        return 'ascii';
      }
      if (enc === 'ucs-2') {
        return 'utf16le';
      }
      break;
    case 6:
      if (enc === 'base64') {
        return 'base64';
      }
      if (enc === 'latin1' || enc === 'binary') {
        return 'latin1';
      }
      if (enc === 'BASE64') {
        return 'base64';
      }
      if (enc === 'LATIN1' || enc === 'BINARY') {
        return 'latin1';
      }
      enc = `${enc}`.toLowerCase();
      if (enc === 'base64') {
        return 'base64';
      }
      if (enc === 'latin1' || enc === 'binary') {
        return 'latin1';
      }
      break;
    case 7:
      if (
        enc === 'utf16le' ||
        enc === 'UTF16LE' ||
        `${enc}`.toLowerCase() === 'utf16le'
      ) {
        return 'utf16le';
      }
      break;
    case 8:
      if (
        enc === 'utf-16le' ||
        enc === 'UTF-16LE' ||
        `${enc}`.toLowerCase() === 'utf-16le'
      ) {
        return 'utf16le';
      }
      break;
    default:
      if (enc === '') {
        return 'utf8';
      }
  }
}

const notImplementedEncodings = [
  'base64',
  'hex',
  'ascii',
  'binary',
  'latin1',
  'ucs2',
  'utf16le',
];

function checkEncoding(encoding = 'utf8', strict = true) {
  if (typeof encoding !== 'string' || (strict && encoding === '')) {
    if (!strict) {
      return 'utf8';
    }
    throw new TypeError(`Unknown encoding: ${encoding}`);
  }

  const normalized = normalizeEncoding(encoding);

  if (normalized === undefined) {
    throw new TypeError(`Unknown encoding: ${encoding}`);
  }

  if (notImplementedEncodings.includes(encoding)) {
    notImplemented(`"${encoding}" encoding`);
  }

  return normalized;
}

// https://github.com/nodejs/node/blob/56dbe466fdbc598baea3bfce289bf52b97b8b8f7/lib/buffer.js#L598
const encodingOps = {
  ascii: {
    byteLength: (string) => string.length,
  },

  base64: {
    byteLength: (string) => base64ByteLength(string, string.length),
  },

  hex: {
    byteLength: (string) => string.length >>> 1,
  },

  latin1: {
    byteLength: (string) => string.length,
  },

  ucs2: {
    byteLength: (string) => string.length * 2,
  },

  utf16le: {
    byteLength: (string) => string.length * 2,
  },

  utf8: {
    byteLength: (string) => utf8ToBytes(string).length,
  },
};

function base64ByteLength(str, bytes) {
  // Handle padding
  if (str.charCodeAt(bytes - 1) === 0x3d) {
    bytes--;
  }
  if (bytes > 1 && str.charCodeAt(bytes - 1) === 0x3d) {
    bytes--;
  }

  // Base64 ratio: 3/4
  // eslint-disable-next-line no-bitwise
  return (bytes * 3) >>> 2;
}

const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH))
    );
  }
  return res;
}

function utf8ToBytes(str, pUnits = Infinity) {
  let units = pUnits;
  let codePoint;
  const length = str.length;
  let leadSurrogate = null;
  const bytes = [];

  for (let i = 0; i < length; ++i) {
    codePoint = str.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xd7ff && codePoint < 0xe000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xdbff) {
          // unexpected trail
          if ((units -= 3) > -1) {
            bytes.push(0xef, 0xbf, 0xbd);
          }
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) {
            bytes.push(0xef, 0xbf, 0xbd);
          }
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xdc00) {
        if ((units -= 3) > -1) {
          bytes.push(0xef, 0xbf, 0xbd);
        }
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint =
        (((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00)) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) {
        bytes.push(0xef, 0xbf, 0xbd);
      }
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) {
        break;
      }
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) {
        break;
      }
      bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) {
        break;
      }
      bytes.push(
        (codePoint >> 0xc) | 0xe0,
        ((codePoint >> 0x6) & 0x3f) | 0x80,
        (codePoint & 0x3f) | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) {
        break;
      }
      bytes.push(
        (codePoint >> 0x12) | 0xf0,
        ((codePoint >> 0xc) & 0x3f) | 0x80,
        ((codePoint >> 0x6) & 0x3f) | 0x80,
        (codePoint & 0x3f) | 0x80
      );
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];

  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence =
      firstByte > 0xef ? 4 : firstByte > 0xdf ? 3 : firstByte > 0xbf ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xc0) === 0x80) {
            tempCodePoint = ((firstByte & 0x1f) << 0x6) | (secondByte & 0x3f);
            if (tempCodePoint > 0x7f) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xc0) === 0x80 && (thirdByte & 0xc0) === 0x80) {
            tempCodePoint =
              ((firstByte & 0xf) << 0xc) |
              ((secondByte & 0x3f) << 0x6) |
              (thirdByte & 0x3f);
            if (
              tempCodePoint > 0x7ff &&
              (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
            ) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if (
            (secondByte & 0xc0) === 0x80 &&
            (thirdByte & 0xc0) === 0x80 &&
            (fourthByte & 0xc0) === 0x80
          ) {
            tempCodePoint =
              ((firstByte & 0xf) << 0x12) |
              ((secondByte & 0x3f) << 0xc) |
              ((thirdByte & 0x3f) << 0x6) |
              (fourthByte & 0x3f);
            if (tempCodePoint > 0xffff && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xfffd;
      bytesPerSequence = 1;
    } else if (codePoint > 0xffff) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(((codePoint >>> 10) & 0x3ff) | 0xd800);
      codePoint = 0xdc00 | (codePoint & 0x3ff);
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

function utf8Write(buf, input, offset, length) {
  return blitBuffer(
    utf8ToBytes(input, buf.length - offset),
    buf,
    offset,
    length
  );
}

function blitBuffer(src, dst, offset, length) {
  let i = 0;
  for (; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) {
      break;
    }
    dst[i + offset] = src[i];
  }
  return i;
}

/**
 * See also https://nodejs.org/api/buffer.html
 */
class Buffer extends Uint8Array {
  constructor(value, byteOffset, length) {
    if (typeof value == 'number') {
      super(value);
    } else {
      const offset = byteOffset || 0;
      const realLength =
        //$FlowFixMe
        length || (isInstance(value, Array) ? value.length : value.byteLength);
      super(value, offset, realLength);
    }
  }
  /**
   * Allocates a new Buffer of size bytes.
   */
  static alloc(size, fill = 0, encoding = 'utf8') {
    if (typeof size !== 'number') {
      throw new TypeError(
        `The "size" argument must be of type number. Received type ${typeof size}`
      );
    }

    const buf = new Buffer(size);
    if (size === 0) {
      return buf;
    }

    let bufFill;
    if (typeof fill === 'string') {
      encoding = checkEncoding(encoding);
      if (fill.length === 1 && encoding === 'utf8') {
        buf.fill(fill.charCodeAt(0));
      } else {
        bufFill = Buffer.from(fill, encoding);
      }
    } else if (typeof fill === 'number') {
      buf.fill(fill);
    } else if (isInstance(fill, Uint8Array)) {
      if (fill.length === 0) {
        throw new TypeError(
          `The argument "value" is invalid. Received ${fill.constructor.name} []`
        );
      }

      bufFill = fill;
    }

    if (bufFill) {
      if (bufFill.length > buf.length) {
        bufFill = bufFill.subarray(0, buf.length);
      }

      let offset = 0;
      while (offset < size) {
        buf.set(bufFill, offset);
        offset += bufFill.length;
        if (offset + bufFill.length >= size) {
          break;
        }
      }
      if (offset !== size) {
        buf.set(bufFill.subarray(0, size - offset), offset);
      }
    }

    return buf;
  }

  static allocUnsafe(size) {
    return new Buffer(size);
  }

  /**
   * Returns the byte length of a string when encoded. This is not the same as
   * String.prototype.length, which does not account for the encoding that is
   * used to convert the string into bytes.
   */
  static byteLength(string, encoding = 'utf8') {
    if (typeof string != 'string') {
      return string.byteLength;
    }

    encoding = normalizeEncoding(encoding) || 'utf8';
    return encodingOps[encoding].byteLength(string);
  }

  /**
   * Returns a new Buffer which is the result of concatenating all the Buffer
   * instances in the list together.
   */
  static concat(list, totalLength) {
    if (totalLength == undefined) {
      totalLength = 0;
      for (const buf of list) {
        totalLength += buf.length;
      }
    }

    const buffer = new Buffer(totalLength);
    let pos = 0;
    for (const buf of list) {
      buffer.set(buf, pos);
      pos += buf.length;
    }

    return buffer;
  }

  /**
   * This creates a view of the ArrayBuffer without copying the underlying
   * memory. For example, when passed a reference to the .buffer property of a
   * TypedArray instance, the newly created Buffer will share the same allocated
   * memory as the TypedArray.
   */
  //$FlowFixMe
  static from(
    value,
    byteOffsetOrEncoding,
    //$FlowFixMe
    length
  ) {
    const offset =
      typeof byteOffsetOrEncoding === 'string'
        ? undefined
        : byteOffsetOrEncoding;
    let encoding =
      typeof byteOffsetOrEncoding === 'string'
        ? byteOffsetOrEncoding
        : undefined;

    if (typeof value === 'string' || value.constructor.name === 'String') {
      value = value.toString();
      encoding = checkEncoding(encoding, false);
      // if (encoding === 'hex') {return new Buffer(hex.decodeString(value).buffer);}
      // if (encoding === 'base64') {return new Buffer(base64.decode(value));}

      switch (encoding) {
        case 'utf8':
          if (typeof TextEncoder !== 'undefined') {
            return new Buffer(new TextEncoder().encode(value).buffer);
          }
          return new Buffer(utf8ToBytes(value));
        default:
          throw new TypeError('Unknown encoding: ' + encoding);
      }
    }

    // workaround for https://github.com/microsoft/TypeScript/issues/38446
    return new Buffer(value, offset, length);
  }

  /**
   * Returns true if obj is a Buffer, false otherwise.
   */
  static isBuffer(obj) {
    return (
      isInstance(obj, Buffer) ||
      (!hasGlobalBuffer && hasBufferModule && isInstance(obj, Uint8Array))
    );
  }

  static isEncoding(encoding) {
    return (
      typeof encoding === 'string' &&
      encoding.length !== 0 &&
      normalizeEncoding(encoding) !== undefined
    );
  }

  /**
   * Copies data from a region of buf to a region in target, even if the target
   * memory region overlaps with buf.
   */
  copy(
    targetBuffer,
    targetStart = 0,
    sourceStart = 0,
    sourceEnd = this.length
  ) {
    const sourceBuffer = this.subarray(sourceStart, sourceEnd);
    targetBuffer.set(sourceBuffer, targetStart);
    return sourceBuffer.length;
  }

  /*
   * Returns true if both buf and otherBuffer have exactly the same bytes, false otherwise.
   */
  equals(otherBuffer) {
    if (!isInstance(otherBuffer, Uint8Array)) {
      throw new TypeError(
        // eslint-disable-next-line max-len
        `The "otherBuffer" argument must be an instance of Buffer or Uint8Array. Received type ${typeof otherBuffer}`
      );
    }

    if (this === otherBuffer) {
      return true;
    }
    if (this.byteLength !== otherBuffer.byteLength) {
      return false;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== otherBuffer[i]) {
        return false;
      }
    }

    return true;
  }

  readDoubleBE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getFloat64(offset);
  }

  readDoubleLE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getFloat64(offset, true);
  }

  readFloatBE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getFloat32(offset);
  }

  readFloatLE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getFloat32(offset, true);
  }

  readInt8(offset = 0) {
    return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt8(
      offset
    );
  }

  readInt16BE(offset = 0) {
    return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt16(
      offset
    );
  }

  readInt16LE(offset = 0) {
    return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt16(
      offset,
      true
    );
  }

  readInt32BE(offset = 0) {
    return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt32(
      offset
    );
  }

  readInt32LE(offset = 0) {
    return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt32(
      offset,
      true
    );
  }

  readUInt8(offset = 0) {
    return new DataView(this.buffer, this.byteOffset, this.byteLength).getUint8(
      offset
    );
  }

  readUInt16BE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getUint16(offset);
  }

  readUInt16LE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getUint16(offset, true);
  }

  readUInt32BE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getUint32(offset);
  }

  readUInt32LE(offset = 0) {
    return new DataView(
      this.buffer,
      this.byteOffset,
      this.byteLength
    ).getUint32(offset, true);
  }

  /**
   * Returns a new Buffer that references the same memory as the original, but
   * offset and cropped by the start and end indices.
   */
  // $FlowFixMe
  slice(begin = 0, end = this.length) {
    // workaround for https://github.com/microsoft/TypeScript/issues/38665
    return this.subarray(begin, end);
  }

  // $FlowFixMe
  subarray(begin = 0, end = this.length) {
    return new Buffer(super.subarray(begin, end));
  }

  /**
   * Returns a JSON representation of buf. JSON.stringify() implicitly calls
   * this function when stringifying a Buffer instance.
   */
  toJSON() {
    return {data: Array.from(this), type: 'Buffer'};
  }

  /**
   * Decodes buf to a string according to the specified character encoding in
   * encoding. start and end may be passed to decode only a subset of buf.
   */
  toString(encoding = 'utf8', start = 0, end = this.length) {
    encoding = checkEncoding(encoding);

    if (typeof TextDecoder !== 'undefined') {
      const b = this.subarray(start, end);
      // if (encoding === 'hex') {return hex.encodeToString(b);}
      // if (encoding === 'base64') {return base64.encode(b.buffer);}

      return new TextDecoder().decode(b);
    }

    return this.slowToString(encoding, start, end);
  }

  slowToString(encoding = 'utf8', start = 0, end = this.length) {
    if (start === undefined || start < 0) {
      start = 0;
    }

    if (start > this.length) {
      return '';
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return '';
    }

    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return '';
    }

    encoding = checkEncoding(encoding);
    switch (encoding) {
      case 'utf8':
        return utf8Slice(this, start, end);
      default:
        throw new TypeError('Unsupported encoding: ' + encoding);
    }
  }

  /**
   * Writes string to buf at offset according to the character encoding in
   * encoding. The length parameter is the number of bytes to write. If buf did
   * not contain enough space to fit the entire string, only part of string will
   * be written. However, partially encoded characters will not be written.
   */
  write(string, offset = 0, length = this.length, encoding = 'utf8') {
    encoding = checkEncoding(encoding);
    switch (encoding) {
      case 'utf8':
        if (typeof TextEncoder !== 'undefined') {
          // $FlowFixMe
          const resultArray = new TextEncoder().encode(string);
          this.set(resultArray, offset);

          return resultArray.byteLength > length - offset
            ? length - offset
            : resultArray.byteLength;
        }
        return utf8Write(this, string, offset, length);
      default:
        throw new TypeError('Unknown encoding: ' + encoding);
    }
  }

  writeDoubleBE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat64(
      offset,
      value
    );

    return offset + 8;
  }

  writeDoubleLE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat64(
      offset,
      value,
      true
    );

    return offset + 8;
  }

  writeFloatBE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat32(
      offset,
      value
    );

    return offset + 4;
  }

  writeFloatLE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat32(
      offset,
      value,
      true
    );

    return offset + 4;
  }

  writeInt8(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setInt8(
      offset,
      value
    );

    return offset + 1;
  }

  writeInt16BE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setInt16(
      offset,
      value
    );

    return offset + 2;
  }

  writeInt16LE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setInt16(
      offset,
      value,
      true
    );

    return offset + 2;
  }

  writeInt32BE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setUint32(
      offset,
      value
    );

    return offset + 4;
  }

  writeInt32LE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setInt32(
      offset,
      value,
      true
    );

    return offset + 4;
  }

  writeUInt8(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setUint8(
      offset,
      value
    );

    return offset + 1;
  }

  writeUInt16BE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setUint16(
      offset,
      value
    );

    return offset + 2;
  }

  writeUInt16LE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setUint16(
      offset,
      value,
      true
    );

    return offset + 2;
  }

  writeUInt32BE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setUint32(
      offset,
      value
    );

    return offset + 4;
  }

  writeUInt32LE(value, offset = 0) {
    new DataView(this.buffer, this.byteOffset, this.byteLength).setUint32(
      offset,
      value,
      true
    );

    return offset + 4;
  }
}
exports.Buffer = Buffer;

if (!hasGlobalBuffer) {
  if (hasBufferModule) {
    // ExistingBuffer is likely to be a polyfill, hence we can override it
    // eslint-disable-next-line no-undef
    // $FlowFixMe
    Object.defineProperty(_buffer.default, 'Buffer', {
      configurable: true,
      enumerable: false,
      value: Buffer,
      writable: true,
    });
  }
  // eslint-disable-next-line no-undef
  Object.defineProperty(window, 'Buffer', {
    configurable: true,
    enumerable: false,
    value: Buffer,
    writable: true,
  });
}

const LiteBuffer = hasGlobalBuffer ? global.Buffer : Buffer;
exports.LiteBuffer = LiteBuffer;

},{"buffer":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/buffer/index.js"}],"../node_modules/rsocket-core/build/RSocketSerialization.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.IdentitySerializers = exports.IdentitySerializer = exports.JsonSerializers = exports.JsonSerializer = void 0;

var _LiteBuffer = require('./LiteBuffer');
var _Invariant = _interopRequireDefault(require('./Invariant'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

// JSON serializer
const JsonSerializer = {
  deserialize: (data) => {
    let str;
    if (data == null) {
      return null;
    } else if (typeof data === 'string') {
      str = data;
    } else if (_LiteBuffer.LiteBuffer.isBuffer(data)) {
      const buffer = data;
      str = buffer.toString('utf8');
    } else {
      const buffer = _LiteBuffer.LiteBuffer.from(data);
      str = buffer.toString('utf8');
    }
    return JSON.parse(str);
  },
  serialize: JSON.stringify,
};
exports.JsonSerializer = JsonSerializer;

const JsonSerializers = {
  data: JsonSerializer,
  metadata: JsonSerializer,
};

// Pass-through serializer
exports.JsonSerializers = JsonSerializers;
const IdentitySerializer = {
  deserialize: (data) => {
    (0, _Invariant.default)(
      data == null ||
        typeof data === 'string' ||
        _LiteBuffer.LiteBuffer.isBuffer(data) ||
        data instanceof Uint8Array,
      'RSocketSerialization: Expected data to be a string, Buffer, or ' +
        'Uint8Array. Got `%s`.',
      data
    );

    return data;
  },
  serialize: (data) => data,
};
exports.IdentitySerializer = IdentitySerializer;

const IdentitySerializers = {
  data: IdentitySerializer,
  metadata: IdentitySerializer,
};
exports.IdentitySerializers = IdentitySerializers;

},{"./LiteBuffer":"../node_modules/rsocket-core/build/LiteBuffer.js","./Invariant":"../node_modules/rsocket-core/build/Invariant.js"}],"../node_modules/rsocket-core/build/RSocketLease.js":[function(require,module,exports) {
/** Copyright 2015-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ResponderLeaseHandler = exports.RequesterLeaseHandler = exports.Leases = exports.Lease = void 0;

var _Invariant = _interopRequireDefault(require('./Invariant'));
var _rsocketFlowable = require('rsocket-flowable');

var _RSocketFrame = require('./RSocketFrame');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class Lease {
  constructor(timeToLiveMillis, allowedRequests, metadata) {
    (0, _Invariant.default)(
      timeToLiveMillis > 0,
      'Lease time-to-live must be positive'
    );
    (0, _Invariant.default)(
      allowedRequests > 0,
      'Lease allowed requests must be positive'
    );
    this.timeToLiveMillis = timeToLiveMillis;
    this.allowedRequests = allowedRequests;
    this.startingAllowedRequests = allowedRequests;
    this.expiry = Date.now() + timeToLiveMillis;
    this.metadata = metadata;
  }

  expired() {
    return Date.now() > this.expiry;
  }

  valid() {
    return this.allowedRequests > 0 && !this.expired();
  }

  // todo hide
  _use() {
    if (this.expired()) {
      return false;
    }
    const allowed = this.allowedRequests;
    const success = allowed > 0;
    if (success) {
      this.allowedRequests = allowed - 1;
    }
    return success;
  }
}
exports.Lease = Lease;

class Leases {
  constructor() {
    _defineProperty(this, '_sender', () => _rsocketFlowable.Flowable.never());
    _defineProperty(this, '_receiver', (leases) => {});
  }

  sender(sender) {
    this._sender = sender;
    return this;
  }

  receiver(receiver) {
    this._receiver = receiver;
    return this;
  }

  stats(stats) {
    this._stats = stats;
    return this;
  }
}
exports.Leases = Leases;

class RequesterLeaseHandler {
  /*negative value means received lease was not signalled due to missing requestN*/

  constructor(leaseReceiver) {
    _defineProperty(this, '_requestN', -1);
    leaseReceiver(
      new _rsocketFlowable.Flowable((subscriber) => {
        if (this._subscriber) {
          subscriber.onError(new Error('only 1 subscriber is allowed'));
          return;
        }
        if (this.isDisposed()) {
          subscriber.onComplete();
          return;
        }
        this._subscriber = subscriber;
        subscriber.onSubscribe({
          cancel: () => {
            this.dispose();
          },
          request: (n) => {
            if (n <= 0) {
              subscriber.onError(
                new Error(`request demand must be positive: ${n}`)
              );
            }
            if (!this.isDisposed()) {
              const curReqN = this._requestN;
              this._onRequestN(curReqN);
              this._requestN = Math.min(
                Number.MAX_SAFE_INTEGER,
                Math.max(0, curReqN) + n
              );
            }
          },
        });
      })
    );
  }

  use() {
    const l = this._lease;
    return l ? l._use() : false;
  }

  errorMessage() {
    return _errorMessage(this._lease);
  }

  receive(frame) {
    if (!this.isDisposed()) {
      const timeToLiveMillis = frame.ttl;
      const requestCount = frame.requestCount;
      const metadata = frame.metadata;
      this._onLease(new Lease(timeToLiveMillis, requestCount, metadata));
    }
  }

  availability() {
    const l = this._lease;
    if (l && l.valid()) {
      return l.allowedRequests / l.startingAllowedRequests;
    }
    return 0.0;
  }

  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;
      const s = this._subscriber;
      if (s) {
        s.onComplete();
      }
    }
  }

  isDisposed() {
    return this._isDisposed;
  }

  _onRequestN(requestN) {
    const l = this._lease;
    const s = this._subscriber;
    if (requestN < 0 && l && s) {
      s.onNext(l);
    }
  }

  _onLease(lease) {
    const s = this._subscriber;
    const newReqN = this._requestN - 1;
    if (newReqN >= 0 && s) {
      s.onNext(lease);
    }
    this._requestN = Math.max(-1, newReqN);
    this._lease = lease;
  }
}
exports.RequesterLeaseHandler = RequesterLeaseHandler;

class ResponderLeaseHandler {
  constructor(leaseSender, stats, errorConsumer) {
    this._leaseSender = leaseSender;
    this._stats = stats;
    this._errorConsumer = errorConsumer;
  }

  use() {
    const l = this._lease;
    const success = l ? l._use() : false;
    this._onStatsEvent(success);
    return success;
  }

  errorMessage() {
    return _errorMessage(this._lease);
  }

  send(send) {
    let subscription;
    let isDisposed;

    this._leaseSender(this._stats).subscribe({
      onComplete: () => this._onStatsEvent(),
      onError: (error) => {
        this._onStatsEvent();
        const errConsumer = this._errorConsumer;
        if (errConsumer) {
          errConsumer(error);
        }
      },
      onNext: (lease) => {
        this._lease = lease;
        send(lease);
      },
      onSubscribe: (s) => {
        if (isDisposed) {
          s.cancel();
          return;
        }
        s.request(_RSocketFrame.MAX_REQUEST_N);
        subscription = s;
      },
    });

    return {
      dispose() {
        if (!isDisposed) {
          isDisposed = true;
          this._onStatsEvent();
          if (subscription) {
            subscription.cancel();
          }
        }
      },

      isDisposed() {
        return isDisposed;
      },
    };
  }

  _onStatsEvent(success) {
    const s = this._stats;
    if (s) {
      const event =
        success === undefined ? 'Terminate' : success ? 'Accept' : 'Reject';
      s.onEvent(event);
    }
  }
}
exports.ResponderLeaseHandler = ResponderLeaseHandler;

function _errorMessage(lease) {
  if (!lease) {
    return 'Lease was not received yet';
  }
  if (lease.valid()) {
    return 'Missing leases';
  } else {
    const isExpired = lease.expired();
    const requests = lease.allowedRequests;
    return `Missing leases. Expired: ${isExpired.toString()}, allowedRequests: ${requests}`;
  }
}

},{"./Invariant":"../node_modules/rsocket-core/build/Invariant.js","rsocket-flowable":"../node_modules/rsocket-flowable/build/index.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js"}],"../node_modules/rsocket-core/build/RSocketMachine.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.createServerMachine = createServerMachine;
exports.createClientMachine = createClientMachine;

var _rsocketFlowable = require('rsocket-flowable');
var _RSocketFrame = require('./RSocketFrame');

var _RSocketSerialization = require('./RSocketSerialization');
var _RSocketLease = require('./RSocketLease');
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class ResponderWrapper {
  constructor(responder) {
    this._responder = responder || {};
  }

  setResponder(responder) {
    this._responder = responder || {};
  }

  fireAndForget(payload) {
    if (this._responder.fireAndForget) {
      try {
        this._responder.fireAndForget(payload);
      } catch (error) {
        console.error('fireAndForget threw an exception', error);
      }
    }
  }

  requestResponse(payload) {
    let error;
    if (this._responder.requestResponse) {
      try {
        return this._responder.requestResponse(payload);
      } catch (_error) {
        console.error('requestResponse threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }

  requestStream(payload) {
    let error;
    if (this._responder.requestStream) {
      try {
        return this._responder.requestStream(payload);
      } catch (_error) {
        console.error('requestStream threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }

  requestChannel(payloads) {
    let error;
    if (this._responder.requestChannel) {
      try {
        return this._responder.requestChannel(payloads);
      } catch (_error) {
        console.error('requestChannel threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }

  metadataPush(payload) {
    let error;
    if (this._responder.metadataPush) {
      try {
        return this._responder.metadataPush(payload);
      } catch (_error) {
        console.error('metadataPush threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }
}

function createServerMachine(
  connection,
  connectionPublisher,
  keepAliveTimeout,
  serializers,
  errorHandler,
  requesterLeaseHandler,
  responderLeaseHandler
) {
  return new RSocketMachineImpl(
    'SERVER',
    connection,
    connectionPublisher,
    keepAliveTimeout,
    serializers,
    undefined,
    errorHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  );
}

function createClientMachine(
  connection,
  connectionPublisher,
  keepAliveTimeout,
  serializers,
  requestHandler,
  errorHandler,
  requesterLeaseHandler,
  responderLeaseHandler
) {
  return new RSocketMachineImpl(
    'CLIENT',
    connection,
    connectionPublisher,
    keepAliveTimeout,
    serializers,
    requestHandler,
    errorHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  );
}

class RSocketMachineImpl {
  constructor(
    role,
    connection,
    connectionPublisher,
    keepAliveTimeout,
    serializers,
    requestHandler,
    errorHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  ) {
    _defineProperty(this, '_connectionAvailability', 1.0);
    _defineProperty(
      this,
      '_handleTransportClose',

      () => {
        this._handleError(new Error('RSocket: The connection was closed.'));
      }
    );
    _defineProperty(
      this,
      '_handleError',

      (error) => {
        // Error any open request streams
        this._receivers.forEach((receiver) => {
          receiver.onError(error);
        });
        this._receivers.clear();
        // Cancel any active subscriptions
        this._subscriptions.forEach((subscription) => {
          subscription.cancel();
        });
        this._subscriptions.clear();
        this._connectionAvailability = 0.0;
        this._dispose(
          this._requesterLeaseHandler,
          this._responderLeaseSenderDisposable
        );

        const handle = this._keepAliveTimerHandle;
        if (handle) {
          clearTimeout(handle);
          this._keepAliveTimerHandle = null;
        }
      }
    );
    _defineProperty(
      this,
      '_handleFrame',

      (frame) => {
        const {streamId} = frame;
        if (streamId === _RSocketFrame.CONNECTION_STREAM_ID) {
          this._handleConnectionFrame(frame);
        } else {
          this._handleStreamFrame(streamId, frame);
        }
      }
    );
    this._connection = connection;
    this._requesterLeaseHandler = requesterLeaseHandler;
    this._responderLeaseHandler = responderLeaseHandler;
    this._nextStreamId = role === 'CLIENT' ? 1 : 2;
    this._receivers = new Map();
    this._subscriptions = new Map();
    this._serializers =
      serializers || _RSocketSerialization.IdentitySerializers;
    this._requestHandler = new ResponderWrapper(requestHandler);
    this._errorHandler = errorHandler; // Subscribe to completion/errors before sending anything
    connectionPublisher({
      onComplete: this._handleTransportClose,
      onError: this._handleError,
      onNext: this._handleFrame,
      onSubscribe: (subscription) =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    });
    const responderHandler = this._responderLeaseHandler;
    if (responderHandler) {
      this._responderLeaseSenderDisposable = responderHandler.send(
        this._leaseFrameSender()
      );
    } // Cleanup when the connection closes
    this._connection.connectionStatus().subscribe({
      onNext: (status) => {
        if (status.kind === 'CLOSED') {
          this._handleTransportClose();
        } else if (status.kind === 'ERROR') {
          this._handleError(status.error);
        }
      },
      onSubscribe: (subscription) =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    });
    const MIN_TICK_DURATION = 100;
    this._keepAliveLastReceivedMillis = Date.now();
    const keepAliveHandler = () => {
      const now = Date.now();
      const noKeepAliveDuration = now - this._keepAliveLastReceivedMillis;
      if (noKeepAliveDuration >= keepAliveTimeout) {
        this._handleConnectionError(
          new Error(`No keep-alive acks for ${keepAliveTimeout} millis`)
        );
      } else {
        this._keepAliveTimerHandle = setTimeout(
          keepAliveHandler,
          Math.max(MIN_TICK_DURATION, keepAliveTimeout - noKeepAliveDuration)
        );
      }
    };
    this._keepAliveTimerHandle = setTimeout(keepAliveHandler, keepAliveTimeout);
  }
  setRequestHandler(requestHandler) {
    this._requestHandler.setResponder(requestHandler);
  }
  close() {
    this._connection.close();
  }
  connectionStatus() {
    return this._connection.connectionStatus();
  }
  availability() {
    const r = this._requesterLeaseHandler;
    const requesterAvailability = r ? r.availability() : 1.0;
    return Math.min(this._connectionAvailability, requesterAvailability);
  }
  fireAndForget(payload) {
    if (this._useLeaseOrError(this._requesterLeaseHandler)) {
      return;
    }
    const streamId = this._getNextStreamId(this._receivers);
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    const frame = {
      data,
      flags: payload.metadata !== undefined ? _RSocketFrame.FLAGS.METADATA : 0,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
    };
    this._connection.sendOne(frame);
  }
  requestResponse(payload) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Single.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    return new _rsocketFlowable.Single((subscriber) => {
      this._receivers.set(streamId, {
        onComplete: () => {},
        onError: (error) => subscriber.onError(error),
        onNext: (data) => subscriber.onComplete(data),
      });
      const data = this._serializers.data.serialize(payload.data);
      const metadata = this._serializers.metadata.serialize(payload.metadata);
      const frame = {
        data,
        flags:
          payload.metadata !== undefined ? _RSocketFrame.FLAGS.METADATA : 0,
        metadata,
        streamId,
        type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
      };
      this._connection.sendOne(frame);
      subscriber.onSubscribe(() => {
        this._receivers.delete(streamId);
        const cancelFrame = {
          flags: 0,
          streamId,
          type: _RSocketFrame.FRAME_TYPES.CANCEL,
        };
        this._connection.sendOne(cancelFrame);
      });
    });
  }
  requestStream(payload) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Flowable.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    return new _rsocketFlowable.Flowable((subscriber) => {
      this._receivers.set(streamId, subscriber);
      let initialized = false;
      subscriber.onSubscribe({
        cancel: () => {
          this._receivers.delete(streamId);
          if (!initialized) {
            return;
          }
          const cancelFrame = {
            flags: 0,
            streamId,
            type: _RSocketFrame.FRAME_TYPES.CANCEL,
          };
          this._connection.sendOne(cancelFrame);
        },
        request: (n) => {
          if (n > _RSocketFrame.MAX_REQUEST_N) {
            n = _RSocketFrame.MAX_REQUEST_N;
          }
          if (initialized) {
            const requestNFrame = {
              flags: 0,
              requestN: n,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
            };
            this._connection.sendOne(requestNFrame);
          } else {
            initialized = true;
            const data = this._serializers.data.serialize(payload.data);
            const metadata = this._serializers.metadata.serialize(
              payload.metadata
            );
            const requestStreamFrame = {
              data,
              flags:
                payload.metadata !== undefined
                  ? _RSocketFrame.FLAGS.METADATA
                  : 0,
              metadata,
              requestN: n,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
            };
            this._connection.sendOne(requestStreamFrame);
          }
        },
      });
    }, _RSocketFrame.MAX_REQUEST_N);
  }
  requestChannel(payloads) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Flowable.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    let payloadsSubscribed = false;
    return new _rsocketFlowable.Flowable((subscriber) => {
      try {
        this._receivers.set(streamId, subscriber);
        let initialized = false;
        subscriber.onSubscribe({
          cancel: () => {
            this._receivers.delete(streamId);
            if (!initialized) {
              return;
            }
            const cancelFrame = {
              flags: 0,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.CANCEL,
            };
            this._connection.sendOne(cancelFrame);
          },
          request: (n) => {
            if (n > _RSocketFrame.MAX_REQUEST_N) {
              n = _RSocketFrame.MAX_REQUEST_N;
            }
            if (initialized) {
              const requestNFrame = {
                flags: 0,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
              };
              this._connection.sendOne(requestNFrame);
            } else {
              if (!payloadsSubscribed) {
                payloadsSubscribed = true;
                payloads.subscribe({
                  onComplete: () => {
                    this._sendStreamComplete(streamId);
                  },
                  onError: (error) => {
                    this._sendStreamError(streamId, error.message);
                  }, //Subscriber methods
                  onNext: (payload) => {
                    const data = this._serializers.data.serialize(payload.data);
                    const metadata = this._serializers.metadata.serialize(
                      payload.metadata
                    );
                    if (!initialized) {
                      initialized = true;
                      const requestChannelFrame = {
                        data,
                        flags:
                          payload.metadata !== undefined
                            ? _RSocketFrame.FLAGS.METADATA
                            : 0,
                        metadata,
                        requestN: n,
                        streamId,
                        type: _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL,
                      };
                      this._connection.sendOne(requestChannelFrame);
                    } else {
                      const payloadFrame = {
                        data,
                        flags:
                          _RSocketFrame.FLAGS.NEXT |
                          (payload.metadata !== undefined
                            ? _RSocketFrame.FLAGS.METADATA
                            : 0),
                        metadata,
                        streamId,
                        type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
                      };
                      this._connection.sendOne(payloadFrame);
                    }
                  },
                  onSubscribe: (subscription) => {
                    this._subscriptions.set(streamId, subscription);
                    subscription.request(1);
                  },
                });
              } else {
                console.warn(
                  'RSocketClient: re-entrant call to request n before initial' +
                    ' channel established.'
                );
              }
            }
          },
        });
      } catch (err) {
        console.warn('Exception while subscribing to channel flowable:' + err);
      }
    }, _RSocketFrame.MAX_REQUEST_N);
  }
  metadataPush(payload) {
    return new _rsocketFlowable.Single((subscriber) => {
      const metadata = this._serializers.metadata.serialize(payload.metadata);
      const frame = {
        flags: 0,
        metadata,
        streamId: 0,
        type: _RSocketFrame.FRAME_TYPES.METADATA_PUSH,
      };
      this._connection.sendOne(frame);
      subscriber.onSubscribe(() => {});
      subscriber.onComplete();
    });
  }
  _getNextStreamId(streamIds) {
    const streamId = this._nextStreamId;
    do {
      this._nextStreamId =
        (this._nextStreamId + 2) & _RSocketFrame.MAX_STREAM_ID;
    } while (this._nextStreamId === 0 || streamIds.has(streamId));
    return streamId;
  }
  _useLeaseOrError(leaseHandler) {
    if (leaseHandler) {
      if (!leaseHandler.use()) {
        return leaseHandler.errorMessage();
      }
    }
  }
  _leaseFrameSender() {
    return (lease) =>
      this._connection.sendOne({
        flags: 0,
        metadata: lease.metadata,
        requestCount: lease.allowedRequests,
        streamId: _RSocketFrame.CONNECTION_STREAM_ID,
        ttl: lease.timeToLiveMillis,
        type: _RSocketFrame.FRAME_TYPES.LEASE,
      });
  }
  _dispose(...disposables) {
    disposables.forEach((d) => {
      if (d) {
        d.dispose();
      }
    });
  }
  _isRequest(frameType) {
    switch (frameType) {
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
        return true;
      default:
        return false;
    }
  }
  /**
   * Handle the connection closing normally: this is an error for any open streams.
   */ _handleConnectionError(error) {
    this._handleError(error);
    this._connection.close();
    const errorHandler = this._errorHandler;
    if (errorHandler) {
      errorHandler(error);
    }
  }
  /**
   * Handle a frame received from the transport client.
   */ /**
   * Handle connection frames (stream id === 0).
   */ _handleConnectionFrame(frame) {
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleConnectionError(error);
        break;
      case _RSocketFrame.FRAME_TYPES.EXT:
        // Extensions are not supported
        break;
      case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
        this._keepAliveLastReceivedMillis = Date.now();
        if ((0, _RSocketFrame.isRespond)(frame.flags)) {
          this._connection.sendOne(
            _objectSpread(
              _objectSpread({}, frame),
              {},
              {
                flags: frame.flags ^ _RSocketFrame.FLAGS.RESPOND, // eslint-disable-line no-bitwise
                lastReceivedPosition: 0,
              }
            )
          );
        }
        break;
      case _RSocketFrame.FRAME_TYPES.LEASE:
        const r = this._requesterLeaseHandler;
        if (r) {
          r.receive(frame);
        }
        break;
      case _RSocketFrame.FRAME_TYPES.METADATA_PUSH:
        this._handleMetadataPush(frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        // TODO #18064706: handle requests from server
        break;
      case _RSocketFrame.FRAME_TYPES.RESERVED:
        // No-op
        break;
      case _RSocketFrame.FRAME_TYPES.RESUME:
      case _RSocketFrame.FRAME_TYPES.RESUME_OK:
        // TODO #18065016: support resumption
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            _RSocketFrame.CONNECTION_STREAM_ID
          );
        }
        break;
    }
  }

  /**
   * Handle stream-specific frames (stream id !== 0).
   */
  _handleStreamFrame(streamId, frame) {
    if (this._isRequest(frame.type)) {
      const leaseError = this._useLeaseOrError(this._responderLeaseHandler);
      if (leaseError) {
        this._sendStreamError(streamId, leaseError);
        return;
      }
    }
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.CANCEL:
        this._handleCancel(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_N:
        this._handleRequestN(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
        this._handleFireAndForget(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
        this._handleRequestResponse(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        this._handleRequestStream(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
        this._handleRequestChannel(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleStreamError(streamId, error);
        break;
      case _RSocketFrame.FRAME_TYPES.PAYLOAD:
        const receiver = this._receivers.get(streamId);
        if (receiver != null) {
          if ((0, _RSocketFrame.isNext)(frame.flags)) {
            const payload = {
              data: this._serializers.data.deserialize(frame.data),
              metadata: this._serializers.metadata.deserialize(frame.metadata),
            };

            receiver.onNext(payload);
          }
          if ((0, _RSocketFrame.isComplete)(frame.flags)) {
            this._receivers.delete(streamId);
            receiver.onComplete();
          }
        }
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            streamId
          );
        }
        break;
    }
  }

  _handleCancel(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.cancel();
      this._subscriptions.delete(streamId);
    }
  }

  _handleRequestN(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.request(frame.requestN);
    }
  }

  _handleFireAndForget(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.fireAndForget(payload);
  }

  _handleRequestResponse(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestResponse(payload).subscribe({
      onComplete: (payload) => {
        this._sendStreamPayload(streamId, payload, true);
      },
      onError: (error) => this._sendStreamError(streamId, error.message),
      onSubscribe: (cancel) => {
        const subscription = {
          cancel,
          request: () => {},
        };

        this._subscriptions.set(streamId, subscription);
      },
    });
  }

  _handleRequestStream(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestStream(payload).subscribe({
      onComplete: () => this._sendStreamComplete(streamId),
      onError: (error) => this._sendStreamError(streamId, error.message),
      onNext: (payload) => this._sendStreamPayload(streamId, payload),
      onSubscribe: (subscription) => {
        this._subscriptions.set(streamId, subscription);
        subscription.request(frame.requestN);
      },
    });
  }

  _handleRequestChannel(streamId, frame) {
    const existingSubscription = this._subscriptions.get(streamId);
    if (existingSubscription) {
      //Likely a duplicate REQUEST_CHANNEL frame, ignore per spec
      return;
    }

    const payloads = new _rsocketFlowable.Flowable((subscriber) => {
      let firstRequest = true;

      subscriber.onSubscribe({
        cancel: () => {
          this._receivers.delete(streamId);
          const cancelFrame = {
            flags: 0,
            streamId,
            type: _RSocketFrame.FRAME_TYPES.CANCEL,
          };

          this._connection.sendOne(cancelFrame);
        },
        request: (n) => {
          if (n > _RSocketFrame.MAX_REQUEST_N) {
            n = _RSocketFrame.MAX_REQUEST_N;
          }
          if (firstRequest) {
            n--;
          }

          if (n > 0) {
            const requestNFrame = {
              flags: 0,
              requestN: n,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
            };

            this._connection.sendOne(requestNFrame);
          }
          //critically, if n is 0 now, that's okay because we eagerly decremented it
          if (firstRequest && n >= 0) {
            firstRequest = false;
            //release the initial frame we received in frame form due to map operator
            subscriber.onNext(frame);
          }
        },
      });
    }, _RSocketFrame.MAX_REQUEST_N);
    const framesToPayloads = new _rsocketFlowable.FlowableProcessor(
      payloads,
      (frame) => this._deserializePayload(frame)
    );

    this._receivers.set(streamId, framesToPayloads);

    this._requestHandler.requestChannel(framesToPayloads).subscribe({
      onComplete: () => this._sendStreamComplete(streamId),
      onError: (error) => this._sendStreamError(streamId, error.message),
      onNext: (payload) => this._sendStreamPayload(streamId, payload),
      onSubscribe: (subscription) => {
        this._subscriptions.set(streamId, subscription);
        subscription.request(frame.requestN);
      },
    });
  }

  _handleMetadataPush(frame) {
    const payload = this._deserializeMetadataPushPayload(frame);
    this._requestHandler.metadataPush(payload).subscribe({
      onComplete: () => {},
      onError: (error) => {},
      onSubscribe: (cancel) => {},
    });
  }

  _sendStreamComplete(streamId) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      data: null,
      flags: _RSocketFrame.FLAGS.COMPLETE,
      metadata: null,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _sendStreamError(streamId, errorMessage) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      code: _RSocketFrame.ERROR_CODES.APPLICATION_ERROR,
      flags: 0,
      message: errorMessage,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.ERROR,
    });

    const error = new Error(`terminated from the requester: ${errorMessage}`);
    this._handleStreamError(streamId, error);
  }

  _sendStreamPayload(streamId, payload, complete = false) {
    let flags = _RSocketFrame.FLAGS.NEXT;
    if (complete) {
      // eslint-disable-next-line no-bitwise
      flags |= _RSocketFrame.FLAGS.COMPLETE;
      this._subscriptions.delete(streamId);
    }
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    this._connection.sendOne({
      data,
      flags,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _deserializePayload(frame) {
    return deserializePayload(this._serializers, frame);
  }

  _deserializeMetadataPushPayload(frame) {
    return deserializeMetadataPushPayload(this._serializers, frame);
  }

  /**
   * Handle an error specific to a stream.
   */
  _handleStreamError(streamId, error) {
    const receiver = this._receivers.get(streamId);
    if (receiver != null) {
      this._receivers.delete(streamId);
      receiver.onError(error);
    }
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}

function deserializeMetadataPushPayload(serializers, frame) {
  return {
    data: null,
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}

},{"rsocket-flowable":"../node_modules/rsocket-flowable/build/index.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js","./RSocketSerialization":"../node_modules/rsocket-core/build/RSocketSerialization.js","./RSocketLease":"../node_modules/rsocket-core/build/RSocketLease.js"}],"../node_modules/rsocket-core/build/ReassemblyDuplexConnection.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ReassemblyDuplexConnection = void 0;

var _LiteBuffer = require('./LiteBuffer');
var _rsocketFlowable = require('rsocket-flowable');
var _RSocketFrame = require('./RSocketFrame');
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class ReassemblyDuplexConnection {
  constructor(source) {
    this._source = source;
  }

  sendOne(frame) {
    this._source.sendOne(frame);
  }

  send(input) {
    this._source.send(input);
  }

  receive() {
    return this._source
      .receive()
      .lift((actual) => new ReassemblySubscriber(actual));
  }

  close() {
    this._source.close();
  }

  connect() {
    this._source.connect();
  }

  connectionStatus() {
    return this._source.connectionStatus();
  }
}
exports.ReassemblyDuplexConnection = ReassemblyDuplexConnection;

class ReassemblySubscriber {
  constructor(actual) {
    _defineProperty(this, '_framesReassemblyMap', new Map());
    this._actual = actual;
  }

  request(n) {
    this._subscription.request(n);
  }

  cancel() {
    this._subscription.cancel();
    this._framesReassemblyMap.clear();
  }

  onSubscribe(s) {
    if (this._subscription == null) {
      this._subscription = s;
      this._actual.onSubscribe(this);
    } else {
      s.cancel();
    }
  }

  onComplete() {
    this._actual.onComplete();
  }

  onError(error) {
    this._actual.onError(error);
  }

  onNext(frame) {
    const streamId = frame.streamId;
    if (streamId !== _RSocketFrame.CONNECTION_STREAM_ID) {
      const hasFollowsFlag = (0, _RSocketFrame.isFollows)(frame.flags);
      const hasCompleteFlag = (0, _RSocketFrame.isComplete)(frame.flags);
      const isCancelOrError =
        frame.type === _RSocketFrame.FRAME_TYPES.ERROR ||
        frame.type === _RSocketFrame.FRAME_TYPES.CANCEL;

      const storedFrame = this._framesReassemblyMap.get(streamId);
      if (storedFrame) {
        if (isCancelOrError) {
          this._framesReassemblyMap.delete(streamId);
        } else {
          if (storedFrame.metadata && frame.metadata) {
            storedFrame.metadata = concatContent(
              storedFrame.metadata,
              frame.metadata
            );
          }

          if (storedFrame.data && frame.data) {
            storedFrame.data = concatContent(storedFrame.data, frame.data);
          } else if (!storedFrame.data && frame.data) {
            storedFrame.data = frame.data;
          }

          if (!hasFollowsFlag || hasCompleteFlag) {
            if (hasCompleteFlag) {
              storedFrame.flags |= _RSocketFrame.FLAGS.COMPLETE;
            }

            this._framesReassemblyMap.delete(streamId);
            this._actual.onNext(storedFrame);
          }

          return;
        }
      } else if (hasFollowsFlag && !hasCompleteFlag && !isCancelOrError) {
        this._framesReassemblyMap.set(streamId, frame);

        return;
      }
    }

    this._actual.onNext(frame);
  }
}

const concatContent = (a, b) => {
  switch (a.constructor.name) {
    case 'String':
      return a + b;
    case 'Uint8Array':
      const result = new Uint8Array(a.length + b.length);
      result.set(a);
      result.set(b, a.length);
      return result;
    default:
      return _LiteBuffer.LiteBuffer.concat([a, b]);
  }
};

},{"./LiteBuffer":"../node_modules/rsocket-core/build/LiteBuffer.js","rsocket-flowable":"../node_modules/rsocket-flowable/build/index.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js"}],"../node_modules/rsocket-core/build/RSocketClient.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

var _rsocketFlowable = require('rsocket-flowable');
var _Invariant = _interopRequireDefault(require('./Invariant'));
var _RSocketFrame = require('./RSocketFrame');
var _RSocketVersion = require('./RSocketVersion');
var _RSocketMachine = require('./RSocketMachine');
var _RSocketLease = require('./RSocketLease');

var _RSocketSerialization = require('./RSocketSerialization');
var _ReassemblyDuplexConnection = require('./ReassemblyDuplexConnection');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * RSocketClient: A client in an RSocket connection that will communicates with
 * the peer via the given transport client. Provides methods for establishing a
 * connection and initiating the RSocket interactions:
 * - fireAndForget()
 * - requestResponse()
 * - requestStream()
 * - requestChannel()
 * - metadataPush()
 */
class RSocketClient {
  constructor(config) {
    this._checkConfig(config);
    this._cancel = null;
    this._config = config;
    this._connection = null;
    this._socket = null;
  }

  close() {
    this._config.transport.close();
  }

  connect() {
    (0, _Invariant.default)(
      !this._connection,
      'RSocketClient: Unexpected call to connect(), already connected.'
    );

    this._connection = new _rsocketFlowable.Single((subscriber) => {
      const transport = this._config.transport;
      let subscription;
      transport.connectionStatus().subscribe({
        onNext: (status) => {
          if (status.kind === 'CONNECTED') {
            subscription && subscription.cancel();
            subscriber.onComplete(
              new RSocketClientSocket(
                this._config,
                new _ReassemblyDuplexConnection.ReassemblyDuplexConnection(
                  transport
                )
              )
            );
          } else if (status.kind === 'ERROR') {
            subscription && subscription.cancel();
            subscriber.onError(status.error);
          } else if (status.kind === 'CLOSED') {
            subscription && subscription.cancel();
            subscriber.onError(new Error('RSocketClient: Connection closed.'));
          }
        },
        onSubscribe: (_subscription) => {
          subscription = _subscription;
          subscriber.onSubscribe(() => {
            _subscription.cancel();
            transport.close();
          });
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      transport.connect();
    });
    return this._connection;
  }

  _checkConfig(config) {
    const setup = config.setup;
    const keepAlive = setup && setup.keepAlive;
    // wrap in try catch since in 'strict' mode the access to an unexciting window will throw
    // the ReferenceError: window is not defined exception
    try {
      // eslint-disable-next-line no-undef
      const navigator = window && window.navigator;
      if (
        keepAlive > 30000 &&
        navigator &&
        navigator.userAgent &&
        (navigator.userAgent.includes('Trident') ||
          navigator.userAgent.includes('Edg'))
      ) {
        console.warn(
          'rsocket-js: Due to a browser bug, Internet Explorer and Edge users may experience WebSocket instability with keepAlive values longer than 30 seconds.'
        );
      }
    } catch (e) {
      // ignore the error since it means that the code is running in non browser environment
    }
  }
}

/**
 * @private
 */ exports.default = RSocketClient;
class RSocketClientSocket {
  constructor(config, connection) {
    let requesterLeaseHandler;
    let responderLeaseHandler;

    const leasesSupplier = config.leases;
    if (leasesSupplier) {
      const lease = leasesSupplier();
      requesterLeaseHandler = new _RSocketLease.RequesterLeaseHandler(
        lease._receiver
      );
      responderLeaseHandler = new _RSocketLease.ResponderLeaseHandler(
        lease._sender,
        lease._stats
      );
    }
    const {keepAlive, lifetime} = config.setup;

    this._machine = (0, _RSocketMachine.createClientMachine)(
      connection,
      (subscriber) => connection.receive().subscribe(subscriber),
      lifetime,
      config.serializers,
      config.responder,
      config.errorHandler,
      requesterLeaseHandler,
      responderLeaseHandler
    );

    // Send SETUP
    connection.sendOne(this._buildSetupFrame(config));

    // Send KEEPALIVE frames
    const keepAliveFrames = (0, _rsocketFlowable.every)(keepAlive).map(() => ({
      data: null,
      flags: _RSocketFrame.FLAGS.RESPOND,
      lastReceivedPosition: 0,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
    }));

    connection.send(keepAliveFrames);
  }

  fireAndForget(payload) {
    this._machine.fireAndForget(payload);
  }

  requestResponse(payload) {
    return this._machine.requestResponse(payload);
  }

  requestStream(payload) {
    return this._machine.requestStream(payload);
  }

  requestChannel(payloads) {
    return this._machine.requestChannel(payloads);
  }

  metadataPush(payload) {
    return this._machine.metadataPush(payload);
  }

  close() {
    this._machine.close();
  }

  connectionStatus() {
    return this._machine.connectionStatus();
  }

  availability() {
    return this._machine.availability();
  }

  _buildSetupFrame(config) {
    const {
      dataMimeType,
      keepAlive,
      lifetime,
      metadataMimeType,
      payload,
    } = config.setup;

    const serializers =
      config.serializers || _RSocketSerialization.IdentitySerializers;
    const data = payload ? serializers.data.serialize(payload.data) : undefined;
    const metadata = payload
      ? serializers.metadata.serialize(payload.metadata)
      : undefined;
    let flags = 0;
    if (metadata !== undefined) {
      flags |= _RSocketFrame.FLAGS.METADATA;
    }
    return {
      data,
      dataMimeType,
      flags: flags | (config.leases ? _RSocketFrame.FLAGS.LEASE : 0),
      keepAlive,
      lifetime,
      majorVersion: _RSocketVersion.MAJOR_VERSION,
      metadata,
      metadataMimeType,
      minorVersion: _RSocketVersion.MINOR_VERSION,
      resumeToken: null,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.SETUP,
    };
  }
}

},{"rsocket-flowable":"../node_modules/rsocket-flowable/build/index.js","./Invariant":"../node_modules/rsocket-core/build/Invariant.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js","./RSocketVersion":"../node_modules/rsocket-core/build/RSocketVersion.js","./RSocketMachine":"../node_modules/rsocket-core/build/RSocketMachine.js","./RSocketLease":"../node_modules/rsocket-core/build/RSocketLease.js","./RSocketSerialization":"../node_modules/rsocket-core/build/RSocketSerialization.js","./ReassemblyDuplexConnection":"../node_modules/rsocket-core/build/ReassemblyDuplexConnection.js"}],"../node_modules/rsocket-core/build/RSocketServer.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

var _rsocketFlowable = require('rsocket-flowable');
var _Invariant = _interopRequireDefault(require('./Invariant'));
var _RSocketFrame = require('./RSocketFrame');

var _RSocketSerialization = require('./RSocketSerialization');
var _RSocketMachine = require('./RSocketMachine');
var _RSocketLease = require('./RSocketLease');

var _ReassemblyDuplexConnection = require('./ReassemblyDuplexConnection');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * RSocketServer: A server in an RSocket connection that accepts connections
 * from peers via the given transport server.
 */
class RSocketServer {
  constructor(config) {
    _defineProperty(
      this,
      '_handleTransportComplete',

      () => {
        this._handleTransportError(
          new Error('RSocketServer: Connection closed unexpectedly.')
        );
      }
    );
    _defineProperty(
      this,
      '_handleTransportError',

      (error) => {
        this._connections.forEach((connection) => {
          // TODO: Allow passing in error
          connection.close();
        });
      }
    );
    _defineProperty(
      this,
      '_handleTransportConnection',

      (connection) => {
        const swapper = new SubscriberSwapper();
        let subscription;
        connection = new _ReassemblyDuplexConnection.ReassemblyDuplexConnection(
          connection
        );
        connection.receive().subscribe(
          swapper.swap({
            onError: (error) => console.error(error),
            onNext: (frame) => {
              switch (frame.type) {
                case _RSocketFrame.FRAME_TYPES.RESUME:
                  connection.sendOne({
                    code: _RSocketFrame.ERROR_CODES.REJECTED_RESUME,
                    flags: 0,
                    message: 'RSocketServer: RESUME not supported.',
                    streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                    type: _RSocketFrame.FRAME_TYPES.ERROR,
                  });

                  connection.close();
                  break;
                case _RSocketFrame.FRAME_TYPES.SETUP:
                  if (this._setupLeaseError(frame)) {
                    connection.sendOne({
                      code: _RSocketFrame.ERROR_CODES.INVALID_SETUP,
                      flags: 0,
                      message: 'RSocketServer: LEASE not supported.',
                      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                      type: _RSocketFrame.FRAME_TYPES.ERROR,
                    });

                    connection.close();
                    break;
                  }
                  const serializers = this._getSerializers();

                  let requesterLeaseHandler;
                  let responderLeaseHandler;

                  const leasesSupplier = this._config.leases;
                  if (leasesSupplier) {
                    const lease = leasesSupplier();
                    requesterLeaseHandler = new _RSocketLease.RequesterLeaseHandler(
                      lease._receiver
                    );

                    responderLeaseHandler = new _RSocketLease.ResponderLeaseHandler(
                      lease._sender,
                      lease._stats
                    );
                  }
                  const serverMachine = (0,
                  _RSocketMachine.createServerMachine)(
                    connection,
                    (subscriber) => {
                      swapper.swap(subscriber);
                    },
                    frame.lifetime,
                    serializers,
                    this._config.errorHandler,
                    requesterLeaseHandler,
                    responderLeaseHandler
                  );

                  try {
                    const requestHandler = this._config.getRequestHandler(
                      serverMachine,
                      deserializePayload(serializers, frame)
                    );

                    serverMachine.setRequestHandler(requestHandler);
                    this._connections.add(serverMachine);
                    connection.connectionStatus().subscribe({
                      onNext: (status) => {
                        if (
                          status.kind === 'CLOSED' ||
                          status.kind === 'ERROR'
                        ) {
                          this._connections.delete(serverMachine);
                        }
                      },
                      onSubscribe: (subscription) =>
                        subscription.request(Number.MAX_SAFE_INTEGER),
                    });
                  } catch (error) {
                    connection.sendOne({
                      code: _RSocketFrame.ERROR_CODES.REJECTED_SETUP,
                      flags: 0,
                      message:
                        'Application rejected setup, reason: ' + error.message,
                      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                      type: _RSocketFrame.FRAME_TYPES.ERROR,
                    });

                    connection.close();
                  }
                  break;
                default:
                  (0, _Invariant.default)(
                    false,
                    'RSocketServer: Expected first frame to be SETUP or RESUME, ' +
                      'got `%s`.',
                    (0, _RSocketFrame.getFrameTypeName)(frame.type)
                  );
              }
            },
            onSubscribe: (_subscription) => {
              subscription = _subscription;
              subscription.request(1);
            },
          })
        );
      }
    );
    this._config = config;
    this._connections = new Set();
    this._started = false;
    this._subscription = null;
  }
  start() {
    (0, _Invariant.default)(
      !this._started,
      'RSocketServer: Unexpected call to start(), already started.'
    );
    this._started = true;
    this._config.transport.start().subscribe({
      onComplete: this._handleTransportComplete,
      onError: this._handleTransportError,
      onNext: this._handleTransportConnection,
      onSubscribe: (subscription) => {
        this._subscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  stop() {
    if (this._subscription) {
      this._subscription.cancel();
    }
    this._config.transport.stop();
    this._handleTransportError(
      new Error('RSocketServer: Connection terminated via stop().')
    );
  }

  _getSerializers() {
    return (
      this._config.serializers || _RSocketSerialization.IdentitySerializers
    );
  }

  _setupLeaseError(frame) {
    const clientLeaseEnabled =
      (frame.flags & _RSocketFrame.FLAGS.LEASE) === _RSocketFrame.FLAGS.LEASE;
    const serverLeaseEnabled = this._config.leases;
    return clientLeaseEnabled && !serverLeaseEnabled;
  }
}
exports.default = RSocketServer;

class SubscriberSwapper {
  constructor(target) {
    this._target = target;
  }

  swap(next) {
    this._target = next;
    if (this._subscription) {
      this._target.onSubscribe && this._target.onSubscribe(this._subscription);
    }
    return this;
  }

  onComplete() {
    (0, _Invariant.default)(this._target, 'must have target');
    this._target.onComplete && this._target.onComplete();
  }
  onError(error) {
    (0, _Invariant.default)(this._target, 'must have target');
    this._target.onError && this._target.onError(error);
  }
  onNext(value) {
    (0, _Invariant.default)(this._target, 'must have target');
    this._target.onNext && this._target.onNext(value);
  }
  onSubscribe(subscription) {
    (0, _Invariant.default)(this._target, 'must have target');
    this._subscription = subscription;
    this._target.onSubscribe && this._target.onSubscribe(subscription);
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}

},{"rsocket-flowable":"../node_modules/rsocket-flowable/build/index.js","./Invariant":"../node_modules/rsocket-core/build/Invariant.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js","./RSocketSerialization":"../node_modules/rsocket-core/build/RSocketSerialization.js","./RSocketMachine":"../node_modules/rsocket-core/build/RSocketMachine.js","./RSocketLease":"../node_modules/rsocket-core/build/RSocketLease.js","./ReassemblyDuplexConnection":"../node_modules/rsocket-core/build/ReassemblyDuplexConnection.js"}],"../node_modules/rsocket-types/build/ReactiveSocketTypes.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.CONNECTION_STATUS = void 0;
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

/**
 * A contract providing different interaction models per the [ReactiveSocket protocol]
 (https://github.com/ReactiveSocket/reactivesocket/blob/master/Protocol.md).
 */

/**
 * Represents a network connection with input/output used by a ReactiveSocket to
 * send/receive data.
 */

/**
 * Describes the connection status of a ReactiveSocket/DuplexConnection.
 * - NOT_CONNECTED: no connection established or pending.
 * - CONNECTING: when `connect()` has been called but a connection is not yet
 *   established.
 * - CONNECTED: when a connection is established.
 * - CLOSED: when the connection has been explicitly closed via `close()`.
 * - ERROR: when the connection has been closed for any other reason.
 */

const CONNECTION_STATUS = {
  CLOSED: Object.freeze({kind: 'CLOSED'}),
  CONNECTED: Object.freeze({kind: 'CONNECTED'}),
  CONNECTING: Object.freeze({kind: 'CONNECTING'}),
  NOT_CONNECTED: Object.freeze({kind: 'NOT_CONNECTED'}),
};

/**
 * A type that can be written to a buffer.
 */ exports.CONNECTION_STATUS = CONNECTION_STATUS;

},{}],"../node_modules/rsocket-types/build/ReactiveStreamTypes.js":[function(require,module,exports) {
'use strict';

},{}],"../node_modules/rsocket-types/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _ReactiveSocketTypes = require('./ReactiveSocketTypes');
Object.keys(_ReactiveSocketTypes).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _ReactiveSocketTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ReactiveSocketTypes[key];
    },
  });
});

var _ReactiveStreamTypes = require('./ReactiveStreamTypes');
Object.keys(_ReactiveStreamTypes).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _ReactiveStreamTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ReactiveStreamTypes[key];
    },
  });
});

},{"./ReactiveSocketTypes":"../node_modules/rsocket-types/build/ReactiveSocketTypes.js","./ReactiveStreamTypes":"../node_modules/rsocket-types/build/ReactiveStreamTypes.js"}],"../node_modules/rsocket-core/build/RSocketBufferUtils.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';

/* eslint-disable no-bitwise */ Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.readUInt24BE = readUInt24BE;
exports.writeUInt24BE = writeUInt24BE;
exports.readUInt64BE = readUInt64BE;
exports.writeUInt64BE = writeUInt64BE;
exports.byteLength = byteLength;
exports.createBuffer = exports.toBuffer = void 0;

var _LiteBuffer = require('./LiteBuffer');

/**
 * Mimimum value that would overflow bitwise operators (2^32).
 */
const BITWISE_OVERFLOW = 0x100000000;

/**
 * Read a uint24 from a buffer starting at the given offset.
 */
function readUInt24BE(buffer, offset) {
  const val1 = buffer.readUInt8(offset) << 16;
  const val2 = buffer.readUInt8(offset + 1) << 8;
  const val3 = buffer.readUInt8(offset + 2);
  return val1 | val2 | val3;
}

/**
 * Writes a uint24 to a buffer starting at the given offset, returning the
 * offset of the next byte.
 */
function writeUInt24BE(buffer, value, offset) {
  offset = buffer.writeUInt8(value >>> 16, offset); // 3rd byte
  offset = buffer.writeUInt8((value >>> 8) & 0xff, offset); // 2nd byte
  return buffer.writeUInt8(value & 0xff, offset); // 1st byte
}

/**
 * Read a uint64 (technically supports up to 53 bits per JS number
 * representation).
 */
function readUInt64BE(buffer, offset) {
  const high = buffer.readUInt32BE(offset);
  const low = buffer.readUInt32BE(offset + 4);
  return high * BITWISE_OVERFLOW + low;
}

/**
 * Write a uint64 (technically supports up to 53 bits per JS number
 * representation).
 */
function writeUInt64BE(buffer, value, offset) {
  const high = (value / BITWISE_OVERFLOW) | 0;
  const low = value % BITWISE_OVERFLOW;
  offset = buffer.writeUInt32BE(high, offset); // first half of uint64
  return buffer.writeUInt32BE(low, offset); // second half of uint64
}

/**
 * Determine the number of bytes it would take to encode the given data with the
 * given encoding.
 */
function byteLength(data, encoding) {
  if (data == null) {
    return 0;
  }
  return _LiteBuffer.LiteBuffer.byteLength(data, encoding);
}

/**
 * Attempts to construct a buffer from the input, throws if invalid.
 */
const toBuffer =
  typeof _LiteBuffer.LiteBuffer.from === 'function'
    ? (...args) => {
        // Buffer.from(buffer) copies which we don't want here
        if (args[0] instanceof _LiteBuffer.LiteBuffer) {
          return args[0];
        }
        return _LiteBuffer.LiteBuffer.from.apply(_LiteBuffer.LiteBuffer, args);
      }
    : (...args) => {
        // Buffer.from(buffer) copies which we don't want here
        if (args[0] instanceof _LiteBuffer.LiteBuffer) {
          return args[0];
        }
        return new (_LiteBuffer.LiteBuffer.bind.apply(_LiteBuffer.LiteBuffer, [
          _LiteBuffer.LiteBuffer,
          ...args,
        ]))();
      };

/**
 * Function to create a buffer of a given sized filled with zeros.
 */ exports.toBuffer = toBuffer;
const createBuffer =
  typeof _LiteBuffer.LiteBuffer.alloc === 'function'
    ? (length) => _LiteBuffer.LiteBuffer.alloc(length)
    : // $FlowFixMe
      (length) => new _LiteBuffer.LiteBuffer(length).fill(0);
exports.createBuffer = createBuffer;

},{"./LiteBuffer":"../node_modules/rsocket-core/build/LiteBuffer.js"}],"../node_modules/rsocket-core/build/RSocketEncoding.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.BufferEncoders = exports.Utf8Encoders = exports.BufferEncoder = exports.UTF8Encoder = void 0;

var _RSocketBufferUtils = require('./RSocketBufferUtils');
var _Invariant = _interopRequireDefault(require('./Invariant'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

const UTF8Encoder = {
  byteLength: (value) => (0, _RSocketBufferUtils.byteLength)(value, 'utf8'),
  decode: (buffer, start, end) => {
    return buffer.toString('utf8', start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _Invariant.default)(
      typeof value === 'string',
      'RSocketEncoding: Expected value to be a string, got `%s`.',
      value
    );

    buffer.write(value, start, end - start, 'utf8');
    return end;
  },
};
exports.UTF8Encoder = UTF8Encoder;

const BufferEncoder = {
  byteLength: (value) => {
    (0, _Invariant.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    return value.length;
  },
  decode: (buffer, start, end) => {
    return buffer.slice(start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _Invariant.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    value.copy(buffer, start, 0, value.length);
    return end;
  },
};

/**
 * Encode all values as UTF8 strings.
 */ exports.BufferEncoder = BufferEncoder;
const Utf8Encoders = {
  data: UTF8Encoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: UTF8Encoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: UTF8Encoder,
};

/**
 * Encode all values as buffers.
 */ exports.Utf8Encoders = Utf8Encoders;
const BufferEncoders = {
  data: BufferEncoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: BufferEncoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: BufferEncoder,
};
exports.BufferEncoders = BufferEncoders;

},{"./RSocketBufferUtils":"../node_modules/rsocket-core/build/RSocketBufferUtils.js","./Invariant":"../node_modules/rsocket-core/build/Invariant.js","buffer":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/buffer/index.js"}],"../node_modules/rsocket-core/build/RSocketBinaryFraming.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';

/* eslint-disable consistent-return, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.deserializeFrameWithLength = deserializeFrameWithLength;
exports.deserializeFrames = deserializeFrames;
exports.serializeFrameWithLength = serializeFrameWithLength;
exports.deserializeFrame = deserializeFrame;
exports.serializeFrame = serializeFrame;
exports.sizeOfFrame = sizeOfFrame;

var _Invariant = _interopRequireDefault(require('./Invariant'));
var _RSocketFrame = require('./RSocketFrame');

var _RSocketEncoding = require('./RSocketEncoding');
var _RSocketBufferUtils = require('./RSocketBufferUtils');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Frame header is:
 * - stream id (uint32 = 4)
 * - type + flags (uint 16 = 2)
 */
const FRAME_HEADER_SIZE = 6;

/**
 * Size of frame length and metadata length fields.
 */
const UINT24_SIZE = 3;

/**
 * Reads a frame from a buffer that is prefixed with the frame length.
 */
function deserializeFrameWithLength(buffer, encoders) {
  const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, 0);
  return deserializeFrame(
    buffer.slice(UINT24_SIZE, UINT24_SIZE + frameLength),
    encoders
  );
}

/**
 * Given a buffer that may contain zero or more length-prefixed frames followed
 * by zero or more bytes of a (partial) subsequent frame, returns an array of
 * the frames and a buffer of the leftover bytes.
 */
function deserializeFrames(buffer, encoders) {
  const frames = [];
  let offset = 0;
  while (offset + UINT24_SIZE < buffer.length) {
    const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    const frameStart = offset + UINT24_SIZE;
    const frameEnd = frameStart + frameLength;
    if (frameEnd > buffer.length) {
      // not all bytes of next frame received
      break;
    }
    const frameBuffer = buffer.slice(frameStart, frameEnd);
    const frame = deserializeFrame(frameBuffer, encoders);
    frames.push(frame);
    offset = frameEnd;
  }
  return [frames, buffer.slice(offset, buffer.length)];
}

/**
 * Writes a frame to a buffer with a length prefix.
 */
function serializeFrameWithLength(frame, encoders) {
  const buffer = serializeFrame(frame, encoders);
  const lengthPrefixed = (0, _RSocketBufferUtils.createBuffer)(
    buffer.length + UINT24_SIZE
  );
  (0, _RSocketBufferUtils.writeUInt24BE)(lengthPrefixed, buffer.length, 0);
  buffer.copy(lengthPrefixed, UINT24_SIZE, 0, buffer.length);
  return lengthPrefixed;
}

/**
 * Read a frame from the buffer.
 */
function deserializeFrame(buffer, encoders) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  let offset = 0;
  const streamId = buffer.readInt32BE(offset);
  offset += 4;
  (0, _Invariant.default)(
    streamId >= 0,
    'RSocketBinaryFraming: Invalid frame, expected a positive stream id, got `%s.',
    streamId
  );

  const typeAndFlags = buffer.readUInt16BE(offset);
  offset += 2;
  const type = typeAndFlags >>> _RSocketFrame.FRAME_TYPE_OFFFSET; // keep highest 6 bits
  const flags = typeAndFlags & _RSocketFrame.FLAGS_MASK; // keep lowest 10 bits
  switch (type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return deserializeSetupFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return deserializePayloadFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return deserializeErrorFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return deserializeKeepAliveFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      return deserializeRequestFnfFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return deserializeRequestResponseFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
      return deserializeRequestStreamFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return deserializeRequestChannelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.METADATA_PUSH:
      return deserializeMetadataPushFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return deserializeRequestNFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return deserializeResumeFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return deserializeResumeOkFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return deserializeCancelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return deserializeLeaseFrame(buffer, streamId, flags, encoders);
    default:
      (0, _Invariant.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(type)
      );
  }
}

/**
 * Convert the frame to a (binary) buffer.
 */
function serializeFrame(frame, encoders) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  switch (frame.type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return serializeSetupFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return serializePayloadFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return serializeErrorFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return serializeKeepAliveFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return serializeRequestFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return serializeRequestManyFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.METADATA_PUSH:
      return serializeMetadataPushFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return serializeRequestNFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return serializeResumeFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return serializeResumeOkFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return serializeCancelFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return serializeLeaseFrame(frame, encoders);
    default:
      (0, _Invariant.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(frame.type)
      );
  }
}
/**
 * Byte size of frame without size prefix
 */
function sizeOfFrame(frame, encoders) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  switch (frame.type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return sizeOfSetupFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return sizeOfPayloadFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return sizeOfErrorFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return sizeOfKeepAliveFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return sizeOfRequestFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return sizeOfRequestManyFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.METADATA_PUSH:
      return sizeOfMetadataPushFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return sizeOfRequestNFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return sizeOfResumeFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return sizeOfResumeOkFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return sizeOfCancelFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return sizeOfLeaseFrame(frame, encoders);
    default:
      (0, _Invariant.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(frame.type)
      );
  }
}

/**
 * Writes a SETUP frame into a new buffer and returns it.
 *
 * Prefix size is:
 * - version (2x uint16 = 4)
 * - keepalive (uint32 = 4)
 * - lifetime (uint32 = 4)
 * - mime lengths (2x uint8 = 2)
 */
const SETUP_FIXED_SIZE = 14;
const RESUME_TOKEN_LENGTH_SIZE = 2;
function serializeSetupFrame(frame, encoders) {
  const resumeTokenLength =
    frame.resumeToken != null
      ? encoders.resumeToken.byteLength(frame.resumeToken)
      : 0;
  const metadataMimeTypeLength =
    frame.metadataMimeType != null
      ? encoders.metadataMimeType.byteLength(frame.metadataMimeType)
      : 0;
  const dataMimeTypeLength =
    frame.dataMimeType != null
      ? encoders.dataMimeType.byteLength(frame.dataMimeType)
      : 0;
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE +
      SETUP_FIXED_SIZE + //
      (resumeTokenLength ? RESUME_TOKEN_LENGTH_SIZE + resumeTokenLength : 0) +
      metadataMimeTypeLength +
      dataMimeTypeLength +
      payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt32BE(frame.keepAlive, offset);
  offset = buffer.writeUInt32BE(frame.lifetime, offset);

  if (frame.flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    offset = buffer.writeUInt16BE(resumeTokenLength, offset);
    if (frame.resumeToken != null) {
      offset = encoders.resumeToken.encode(
        frame.resumeToken,
        buffer,
        offset,
        offset + resumeTokenLength
      );
    }
  }

  offset = buffer.writeUInt8(metadataMimeTypeLength, offset);
  if (frame.metadataMimeType != null) {
    offset = encoders.metadataMimeType.encode(
      frame.metadataMimeType,
      buffer,
      offset,
      offset + metadataMimeTypeLength
    );
  }

  offset = buffer.writeUInt8(dataMimeTypeLength, offset);
  if (frame.dataMimeType != null) {
    offset = encoders.dataMimeType.encode(
      frame.dataMimeType,
      buffer,
      offset,
      offset + dataMimeTypeLength
    );
  }

  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfSetupFrame(frame, encoders) {
  const resumeTokenLength =
    frame.resumeToken != null
      ? encoders.resumeToken.byteLength(frame.resumeToken)
      : 0;
  const metadataMimeTypeLength =
    frame.metadataMimeType != null
      ? encoders.metadataMimeType.byteLength(frame.metadataMimeType)
      : 0;
  const dataMimeTypeLength =
    frame.dataMimeType != null
      ? encoders.dataMimeType.byteLength(frame.dataMimeType)
      : 0;
  const payloadLength = getPayloadLength(frame, encoders);
  return (
    FRAME_HEADER_SIZE +
    SETUP_FIXED_SIZE + //
    (resumeTokenLength ? RESUME_TOKEN_LENGTH_SIZE + resumeTokenLength : 0) +
    metadataMimeTypeLength +
    dataMimeTypeLength +
    payloadLength
  );
}

/**
 * Reads a SETUP frame from the buffer and returns it.
 */
function deserializeSetupFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid SETUP frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const keepAlive = buffer.readInt32BE(offset);
  offset += 4;
  (0, _Invariant.default)(
    keepAlive >= 0 && keepAlive <= _RSocketFrame.MAX_KEEPALIVE,
    'RSocketBinaryFraming: Invalid SETUP frame, expected keepAlive to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_KEEPALIVE,
    keepAlive
  );

  const lifetime = buffer.readInt32BE(offset);
  offset += 4;
  (0, _Invariant.default)(
    lifetime >= 0 && lifetime <= _RSocketFrame.MAX_LIFETIME,
    'RSocketBinaryFraming: Invalid SETUP frame, expected lifetime to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_LIFETIME,
    lifetime
  );

  let resumeToken = null;
  if (flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    const resumeTokenLength = buffer.readInt16BE(offset);
    offset += 2;
    (0, _Invariant.default)(
      resumeTokenLength >= 0 &&
        resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
      'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
        'to be >= 0 and <= %s. Got `%s`.',
      _RSocketFrame.MAX_RESUME_LENGTH,
      resumeTokenLength
    );

    resumeToken = encoders.resumeToken.decode(
      buffer,
      offset,
      offset + resumeTokenLength
    );

    offset += resumeTokenLength;
  }

  const metadataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const metadataMimeType = encoders.metadataMimeType.decode(
    buffer,
    offset,
    offset + metadataMimeTypeLength
  );

  offset += metadataMimeTypeLength;

  const dataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const dataMimeType = encoders.dataMimeType.decode(
    buffer,
    offset,
    offset + dataMimeTypeLength
  );

  offset += dataMimeTypeLength;

  const frame = {
    data: null,
    dataMimeType,
    flags,
    keepAlive,
    length,
    lifetime,
    majorVersion,
    metadata: null,
    metadataMimeType,
    minorVersion,
    resumeToken,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.SETUP,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
 * Writes an ERROR frame into a new buffer and returns it.
 *
 * Prefix size is for the error code (uint32 = 4).
 */
const ERROR_FIXED_SIZE = 4;
function serializeErrorFrame(frame, encoders) {
  const messageLength =
    frame.message != null ? encoders.message.byteLength(frame.message) : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + ERROR_FIXED_SIZE + messageLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.code, offset);
  if (frame.message != null) {
    encoders.message.encode(
      frame.message,
      buffer,
      offset,
      offset + messageLength
    );
  }
  return buffer;
}

function sizeOfErrorFrame(frame, encoders) {
  const messageLength =
    frame.message != null ? encoders.message.byteLength(frame.message) : 0;
  return FRAME_HEADER_SIZE + ERROR_FIXED_SIZE + messageLength;
}

/**
 * Reads an ERROR frame from the buffer and returns it.
 */
function deserializeErrorFrame(buffer, streamId, flags, encoders) {
  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const code = buffer.readInt32BE(offset);
  offset += 4;
  (0, _Invariant.default)(
    code >= 0 && code <= _RSocketFrame.MAX_CODE,
    'RSocketBinaryFraming: Invalid ERROR frame, expected code to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_CODE,
    code
  );

  const messageLength = buffer.length - offset;
  let message = '';
  if (messageLength > 0) {
    message = encoders.message.decode(buffer, offset, offset + messageLength);
    offset += messageLength;
  }

  return {
    code,
    flags,
    length,
    message,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.ERROR,
  };
}

/**
 * Writes a KEEPALIVE frame into a new buffer and returns it.
 *
 * Prefix size is for the last received position (uint64 = 8).
 */
const KEEPALIVE_FIXED_SIZE = 8;
function serializeKeepAliveFrame(frame, encoders) {
  const dataLength =
    frame.data != null ? encoders.data.byteLength(frame.data) : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + KEEPALIVE_FIXED_SIZE + dataLength
  );

  let offset = writeHeader(frame, buffer);
  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.lastReceivedPosition,
    offset
  );
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, offset + dataLength);
  }
  return buffer;
}

function sizeOfKeepAliveFrame(frame, encoders) {
  const dataLength =
    frame.data != null ? encoders.data.byteLength(frame.data) : 0;
  return FRAME_HEADER_SIZE + KEEPALIVE_FIXED_SIZE + dataLength;
}

/**
 * Reads a KEEPALIVE frame from the buffer and returns it.
 */
function deserializeKeepAliveFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid KEEPALIVE frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const lastReceivedPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    offset
  );
  offset += 8;
  let data = null;
  if (offset < buffer.length) {
    data = encoders.data.decode(buffer, offset, buffer.length);
  }

  return {
    data,
    flags,
    lastReceivedPosition,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
  };
}

/**
 * Writes a LEASE frame into a new buffer and returns it.
 *
 * Prefix size is for the ttl (uint32) and requestcount (uint32).
 */
const LEASE_FIXED_SIZE = 8;
function serializeLeaseFrame(frame, encoders) {
  const metaLength =
    frame.metadata != null ? encoders.metadata.byteLength(frame.metadata) : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + LEASE_FIXED_SIZE + metaLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.ttl, offset);
  offset = buffer.writeUInt32BE(frame.requestCount, offset);
  if (frame.metadata != null) {
    encoders.metadata.encode(
      frame.metadata,
      buffer,
      offset,
      offset + metaLength
    );
  }
  return buffer;
}

function sizeOfLeaseFrame(frame, encoders) {
  const metaLength =
    frame.metadata != null ? encoders.metadata.byteLength(frame.metadata) : 0;
  return FRAME_HEADER_SIZE + LEASE_FIXED_SIZE + metaLength;
}

/**
 * Reads a LEASE frame from the buffer and returns it.
 */
function deserializeLeaseFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid LEASE frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const ttl = buffer.readUInt32BE(offset);
  offset += 4;
  const requestCount = buffer.readUInt32BE(offset);
  offset += 4;
  let metadata = null;
  if (offset < buffer.length) {
    metadata = encoders.metadata.decode(buffer, offset, buffer.length);
  }
  return {
    flags,
    length,
    metadata,
    requestCount,
    streamId,
    ttl,
    type: _RSocketFrame.FRAME_TYPES.LEASE,
  };
}

/**
 * Writes a REQUEST_FNF or REQUEST_RESPONSE frame to a new buffer and returns
 * it.
 *
 * Note that these frames have the same shape and only differ in their type.
 */
function serializeRequestFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfRequestFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + payloadLength;
}

/**
 * Writes a METADATA_PUSH frame to a new buffer and returns
 * it.
 */
function serializeMetadataPushFrame(frame, encoders) {
  const metadata = frame.metadata;
  if (metadata != null) {
    const buffer = (0, _RSocketBufferUtils.createBuffer)(
      FRAME_HEADER_SIZE + encoders.metadata.byteLength(metadata)
    );

    const offset = writeHeader(frame, buffer);
    encoders.metadata.encode(metadata, buffer, offset, buffer.length);
    return buffer;
  } else {
    const buffer = (0, _RSocketBufferUtils.createBuffer)(FRAME_HEADER_SIZE);
    writeHeader(frame, buffer);
    return buffer;
  }
}

function sizeOfMetadataPushFrame(frame, encoders) {
  return (
    FRAME_HEADER_SIZE +
    (frame.metadata != null ? encoders.metadata.byteLength(frame.metadata) : 0)
  );
}

function deserializeRequestFnfFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_FNF frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

function deserializeRequestResponseFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_RESPONSE frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

function deserializeMetadataPushFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid METADATA_PUSH frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  return {
    flags,
    length,
    metadata:
      length === FRAME_HEADER_SIZE
        ? null
        : encoders.metadata.decode(buffer, FRAME_HEADER_SIZE, length),
    streamId,
    type: _RSocketFrame.FRAME_TYPES.METADATA_PUSH,
  };
}

/**
 * Writes a REQUEST_STREAM or REQUEST_CHANNEL frame to a new buffer and returns
 * it.
 *
 * Note that these frames have the same shape and only differ in their type.
 *
 * Prefix size is for requestN (uint32 = 4).
 */
const REQUEST_MANY_HEADER = 4;
function serializeRequestManyFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_MANY_HEADER + payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.requestN, offset);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfRequestManyFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + REQUEST_MANY_HEADER + payloadLength;
}

function deserializeRequestStreamFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _Invariant.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

function deserializeRequestChannelFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_CHANNEL frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _Invariant.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
 * Writes a REQUEST_N frame to a new buffer and returns it.
 *
 * Prefix size is for requestN (uint32 = 4).
 */
const REQUEST_N_HEADER = 4;
function serializeRequestNFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_N_HEADER
  );
  const offset = writeHeader(frame, buffer);
  buffer.writeUInt32BE(frame.requestN, offset);
  return buffer;
}

function sizeOfRequestNFrame(frame, encoders) {
  return FRAME_HEADER_SIZE + REQUEST_N_HEADER;
}

function deserializeRequestNFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_N frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const requestN = buffer.readInt32BE(FRAME_HEADER_SIZE);
  (0, _Invariant.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  return {
    flags,
    length,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
  };
}

/**
 * Writes a CANCEL frame to a new buffer and returns it.
 */
function serializeCancelFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(FRAME_HEADER_SIZE);
  writeHeader(frame, buffer);
  return buffer;
}

function sizeOfCancelFrame(frame, encoders) {
  return FRAME_HEADER_SIZE;
}

function deserializeCancelFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid CANCEL frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  return {
    flags,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.CANCEL,
  };
}

/**
 * Writes a PAYLOAD frame to a new buffer and returns it.
 */
function serializePayloadFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfPayloadFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + payloadLength;
}

function deserializePayloadFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid PAYLOAD frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

/**
 * Writes a RESUME frame into a new buffer and returns it.
 *
 * Fixed size is:
 * - major version (uint16 = 2)
 * - minor version (uint16 = 2)
 * - token length (uint16 = 2)
 * - client position (uint64 = 8)
 * - server position (uint64 = 8)
 */
const RESUME_FIXED_SIZE = 22;
function serializeResumeFrame(frame, encoders) {
  const resumeTokenLength = encoders.resumeToken.byteLength(frame.resumeToken);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_FIXED_SIZE + resumeTokenLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt16BE(resumeTokenLength, offset);
  offset = encoders.resumeToken.encode(
    frame.resumeToken,
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.serverPosition,
    offset
  );
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.clientPosition, offset);
  return buffer;
}

function sizeOfResumeFrame(frame, encoders) {
  const resumeTokenLength = encoders.resumeToken.byteLength(frame.resumeToken);
  return FRAME_HEADER_SIZE + RESUME_FIXED_SIZE + resumeTokenLength;
}

function deserializeResumeFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const resumeTokenLength = buffer.readInt16BE(offset);
  offset += 2;
  (0, _Invariant.default)(
    resumeTokenLength >= 0 &&
      resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
    'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
      'to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_RESUME_LENGTH,
    resumeTokenLength
  );

  const resumeToken = encoders.resumeToken.decode(
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset += resumeTokenLength;
  const serverPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  return {
    clientPosition,
    flags,
    length,
    majorVersion,
    minorVersion,
    resumeToken,
    serverPosition,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME,
  };
}

/**
 * Writes a RESUME_OK frame into a new buffer and returns it.
 *
 * Fixed size is:
 * - client position (uint64 = 8)
 */
const RESUME_OK_FIXED_SIZE = 8;
function serializeResumeOkFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_OK_FIXED_SIZE
  );
  const offset = writeHeader(frame, buffer);
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.clientPosition, offset);
  return buffer;
}

function sizeOfResumeOkFrame(frame, encoders) {
  return FRAME_HEADER_SIZE + RESUME_OK_FIXED_SIZE;
}

function deserializeResumeOkFrame(buffer, streamId, flags, encoders) {
  (0, _Invariant.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    FRAME_HEADER_SIZE
  );
  return {
    clientPosition,
    flags,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME_OK,
  };
}

/**
 * Write the header of the frame into the buffer.
 */
function writeHeader(frame, buffer) {
  const offset = buffer.writeInt32BE(frame.streamId, 0);
  // shift frame to high 6 bits, extract lowest 10 bits from flags
  return buffer.writeUInt16BE(
    (frame.type << _RSocketFrame.FRAME_TYPE_OFFFSET) |
      (frame.flags & _RSocketFrame.FLAGS_MASK),
    offset
  );
}

/**
 * Determine the length of the payload section of a frame. Only applies to
 * frame types that MAY have both metadata and data.
 */
function getPayloadLength(frame, encoders) {
  let payloadLength = 0;
  if (frame.data != null) {
    payloadLength += encoders.data.byteLength(frame.data);
  }
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    payloadLength += UINT24_SIZE;
    if (frame.metadata != null) {
      payloadLength += encoders.metadata.byteLength(frame.metadata);
    }
  }
  return payloadLength;
}

/**
 * Write the payload of a frame into the given buffer. Only applies to frame
 * types that MAY have both metadata and data.
 */
function writePayload(frame, buffer, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    if (frame.metadata != null) {
      const metaLength = encoders.metadata.byteLength(frame.metadata);
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(
        buffer,
        metaLength,
        offset
      );
      offset = encoders.metadata.encode(
        frame.metadata,
        buffer,
        offset,
        offset + metaLength
      );
    } else {
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(buffer, 0, offset);
    }
  }
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, buffer.length);
  }
}

/**
 * Read the payload from a buffer and write it into the frame. Only applies to
 * frame types that MAY have both metadata and data.
 */
function readPayload(buffer, frame, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    const metaLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    offset += UINT24_SIZE;
    if (metaLength > 0) {
      frame.metadata = encoders.metadata.decode(
        buffer,
        offset,
        offset + metaLength
      );

      offset += metaLength;
    }
  }
  if (offset < buffer.length) {
    frame.data = encoders.data.decode(buffer, offset, buffer.length);
  }
}

},{"./Invariant":"../node_modules/rsocket-core/build/Invariant.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js","./RSocketEncoding":"../node_modules/rsocket-core/build/RSocketEncoding.js","./RSocketBufferUtils":"../node_modules/rsocket-core/build/RSocketBufferUtils.js"}],"../node_modules/rsocket-core/build/RSocketResumableTransport.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

var _rsocketFlowable = require('rsocket-flowable');
var _Invariant = _interopRequireDefault(require('./Invariant'));
var _RSocketFrame = require('./RSocketFrame');

var _rsocketTypes = require('rsocket-types');

var _RSocketBinaryFraming = require('./RSocketBinaryFraming');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * NOTE: This implementation conforms to an upcoming version of the RSocket protocol
 *       and will not work with version 1.0 servers.
 *
 * An implementation of the DuplexConnection interface that supports automatic
 * resumption per the RSocket protocol.
 *
 * # Example
 *
 * Create a client instance:
 * ```
 * const client = new RSocketClient({
 *   ...,
 *   transport: new RSocketResumableTransport(
 *     () => new RSocketWebSocketClient(...), // provider for low-level transport instances
 *     {
 *       bufferSize: 10, // max number of sent & pending frames to buffer before failing
 *       resumeToken: 'abc123', // string to uniquely identify the session across connections
 *     }
 *   ),
 * })
 *
 * Open the connection. After this if the connection dies it will be auto-resumed:
 * ```
 * client.connect().subscribe(...);
 * ```
 *
 * Optionally, subscribe to the status of the connection:
 * ```
 * client.connectionStatus().subscribe(...);
 * ```
 *
 * # Implementation Notes
 *
 * This transport maintains:
 * - _currentConnection: a current low-level transport, which is null when not
 *   connected
 * - _sentFrames: a buffer of frames written to a low-level transport (which
 *   may or may not have been received by the server)
 * - _pendingFrames: a buffer of frames not yet written to the low-level
 *   connection, because they were sent while not connected.
 *
 * The initial connection is simple: connect using the low-level transport and
 * flush any _pendingFrames (write them and add them to _sentFrames).
 *
 * Thereafter if the low-level transport drops, this transport attempts resumption.
 * It obtains a fresh low-level transport from the given transport `source`
 * and attempts to connect. Once connected, it sends a RESUME frame and waits.
 * If RESUME_OK is received, _sentFrames and _pendingFrames are adjusted such
 * that:
 * - any frames the server has received are removed from _sentFrames
 * - the remaining frames are merged (in correct order) into _pendingFrames
 *
 * Then the connection proceeds as above, where all pending frames are flushed.
 * If anything other than RESUME_OK is received, resumption is considered to
 * have failed and the connection is set to the ERROR status.
 */
class RSocketResumableTransport {
  constructor(source, options, encoders) {
    (0, _Invariant.default)(
      options.bufferSize >= 0,
      'RSocketResumableTransport: bufferSize option must be >= 0, got `%s`.',
      options.bufferSize
    );

    this._encoders = encoders;
    this._bufferSize = options.bufferSize;
    this._sentFramesSize = 0;
    this._position = {
      client: 0,
      server: 0,
    };

    this._currentConnection = null;
    this._statusSubscription = null;
    this._receiveSubscription = null;
    this._receivers = new Set();
    this._resumeToken = options.resumeToken;
    this._sessionTimeoutMillis = options.sessionDurationSeconds * 1000;
    this._sessionTimeoutHandle = null;
    this._senders = new Set();
    this._sentFrames = [];
    this._setupFrame = null;
    this._source = source;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }

  close() {
    this._close();
  }

  connect() {
    (0, _Invariant.default)(
      !this._isTerminated(),
      'RSocketResumableTransport: Cannot connect(), connection terminated (%s: %s).',
      this._status.kind,
      this._status.kind === 'ERROR' ? this._status.error.message : 'no message'
    );

    try {
      this._disconnect();
      this._currentConnection = null;
      this._receiveSubscription = null;
      this._statusSubscription = null;
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
      const connection = this._source();
      connection.connectionStatus().subscribe({
        onNext: (status) => {
          if (status.kind === this._status.kind) {
            return;
          }
          if (status.kind === 'CONNECTED') {
            if (this._sessionTimeoutHandle) {
              clearTimeout(this._sessionTimeoutHandle);
              this._sessionTimeoutHandle = null;
            }
            //Setup
            if (this._setupFrame == null) {
              this._handleConnected(connection);
              //Resume
            } else {
              this._handleResume(connection);
            }
          } else if (this._isTerminationStatus(status)) {
            if (!this._sessionTimeoutHandle) {
              this._sessionTimeoutHandle = setTimeout(
                () => this._close(this._resumeTimeoutError()),
                this._sessionTimeoutMillis
              );
            }
            this._disconnect();
            this._setConnectionStatus(
              _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED
            );
          }
        },
        onSubscribe: (subscription) => {
          this._statusSubscription = subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      connection.connect();
    } catch (error) {
      this._close(error);
    }
  }

  connectionStatus() {
    return new _rsocketFlowable.Flowable((subscriber) => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }

  receive() {
    return new _rsocketFlowable.Flowable((subject) => {
      let added = false;
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          if (!added) {
            added = true;
            this._receivers.add(subject);
          }
        },
      });
    });
  }

  sendOne(frame) {
    try {
      this._writeFrame(frame);
    } catch (error) {
      this._close(error);
    }
  }

  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: (error) => {
        subscription && this._senders.delete(subscription);
        this._close(error);
      },
      onNext: (frame) => this._writeFrame(frame),
      onSubscribe: (_subscription) => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _close(error) {
    if (this._isTerminated()) {
      return;
    }
    if (error) {
      this._setConnectionStatus({error, kind: 'ERROR'});
    } else {
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CLOSED);
    }
    const receivers = this._receivers;
    receivers.forEach((r) => r.onComplete());
    receivers.clear();

    const senders = this._senders;
    senders.forEach((s) => s.cancel());
    senders.clear();
    this._sentFrames.length = 0;

    this._disconnect();
  }

  _disconnect() {
    if (this._statusSubscription) {
      this._statusSubscription.cancel();
      this._statusSubscription = null;
    }
    if (this._receiveSubscription) {
      this._receiveSubscription.cancel();
      this._receiveSubscription = null;
    }
    if (this._currentConnection) {
      this._currentConnection.close();
      this._currentConnection = null;
    }
  }

  _handleConnected(connection) {
    this._currentConnection = connection;
    this._flushFrames();
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
    connection.receive().subscribe({
      onNext: (frame) => {
        try {
          this._receiveFrame(frame);
        } catch (error) {
          this._close(error);
        }
      },
      onSubscribe: (subscription) => {
        this._receiveSubscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _handleResume(connection) {
    connection
      .receive()
      .take(1)
      .subscribe({
        onNext: (frame) => {
          try {
            if (frame.type === _RSocketFrame.FRAME_TYPES.RESUME_OK) {
              const {clientPosition} = frame;
              // clientPosition indicates which frames the server is missing:
              // - anything after that still needs to be sent
              // - anything before that can be discarded
              if (clientPosition < this._position.client) {
                // Invalid RESUME_OK frame: server asked for an older
                // client frame than is available
                this._close(this._nonResumableStateError());
                return;
              }
              // remove tail frames of total length = remoteImpliedPos-localPos
              let removeSize = clientPosition - this._position.client;
              let index = 0;
              while (removeSize > 0) {
                const frameSize = this._onReleasedTailFrame(
                  this._sentFrames[index]
                );

                if (!frameSize) {
                  this._close(this._absentLengthError(frame));
                  return;
                }
                removeSize -= frameSize;
                index++;
              }
              if (removeSize !== 0) {
                this._close(this._inconsistentImpliedPositionError());
                return;
              }
              // Drop sent frames that the server has received
              if (index > 0) {
                this._sentFrames.splice(0, index);
              }
              // Continue connecting, which will flush pending frames
              this._handleConnected(connection);
            } else {
              const error =
                frame.type === _RSocketFrame.FRAME_TYPES.ERROR
                  ? (0, _RSocketFrame.createErrorFromFrame)(frame)
                  : new Error(
                      'RSocketResumableTransport: Resumption failed for an ' +
                        'unspecified reason.'
                    );

              this._close(error);
            }
          } catch (error) {
            this._close(error);
          }
        },
        onSubscribe: (subscription) => {
          this._receiveSubscription = subscription;
          subscription.request(1);
        },
      });

    const setupFrame = this._setupFrame;
    (0, _Invariant.default)(
      setupFrame,
      'RSocketResumableTransport: Cannot resume, setup frame has not been sent.'
    );

    connection.sendOne({
      clientPosition: this._position.client,
      flags: 0,
      majorVersion: setupFrame.majorVersion,
      minorVersion: setupFrame.minorVersion,
      resumeToken: this._resumeToken,
      serverPosition: this._position.server,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.RESUME,
    });
  }

  _absentLengthError(frame) {
    return new Error(
      'RSocketResumableTransport: absent frame.length for type ' + frame.type
    );
  }

  _inconsistentImpliedPositionError() {
    return new Error(
      'RSocketResumableTransport: local frames are inconsistent with remote implied position'
    );
  }

  _nonResumableStateError() {
    return new Error(
      'RSocketResumableTransport: resumption failed, server is ' +
        'missing frames that are no longer in the client buffer.'
    );
  }

  _resumeTimeoutError() {
    return new Error('RSocketResumableTransport: resumable session timed out');
  }

  _isTerminated() {
    return this._isTerminationStatus(this._status);
  }

  _isTerminationStatus(status) {
    const kind = status.kind;
    return kind === 'CLOSED' || kind === 'ERROR';
  }

  _setConnectionStatus(status) {
    if (status.kind === this._status.kind) {
      return;
    }
    this._status = status;
    this._statusSubscribers.forEach((subscriber) => subscriber.onNext(status));
  }

  _receiveFrame(frame) {
    if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
      if (frame.length) {
        this._position.server += frame.length;
      }
    }
    // TODO: trim _sentFrames on KEEPALIVE frame
    this._receivers.forEach((subscriber) => subscriber.onNext(frame));
  }

  _flushFrames() {
    this._sentFrames.forEach((frame) => {
      const connection = this._currentConnection;
      if (connection) {
        connection.sendOne(frame);
      }
    });
  }

  _onReleasedTailFrame(frame) {
    const removedFrameSize = frame.length;
    if (removedFrameSize) {
      this._sentFramesSize -= removedFrameSize;
      this._position.client += removedFrameSize;
      return removedFrameSize;
    }
  }

  _writeFrame(frame) {
    // Ensure that SETUP frames contain the resume token
    if (frame.type === _RSocketFrame.FRAME_TYPES.SETUP) {
      frame = _objectSpread(
        _objectSpread({}, frame),
        {},
        {
          flags: frame.flags | _RSocketFrame.FLAGS.RESUME_ENABLE, // eslint-disable-line no-bitwise
          resumeToken: this._resumeToken,
        }
      );

      this._setupFrame = frame; // frame can only be a SetupFrame
    }
    frame.length = (0, _RSocketBinaryFraming.sizeOfFrame)(
      frame,
      this._encoders
    );
    // If connected, immediately write frames to the low-level transport
    // and consider them "sent". The resumption protocol will figure out
    // which frames may not have been received and recover.
    if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
      let available = this._bufferSize - this._sentFramesSize;
      const frameSize = frame.length;
      if (frameSize) {
        // remove tail until there is space for new frame
        while (available < frameSize) {
          const removedFrame = this._sentFrames.shift();
          if (removedFrame) {
            const removedFrameSize = this._onReleasedTailFrame(removedFrame);
            if (!removedFrameSize) {
              this._close(this._absentLengthError(frame));
              return;
            }
            available += removedFrameSize;
          } else {
            break;
          }
        }
        if (available >= frameSize) {
          this._sentFrames.push(frame);
          this._sentFramesSize += frameSize;
        } else {
          this._position.client += frameSize;
        }
      } else {
        this._close(this._absentLengthError(frame));
        return;
      }
    }
    const currentConnection = this._currentConnection;
    if (currentConnection) {
      currentConnection.sendOne(frame);
    }
  }
}
exports.default = RSocketResumableTransport;

},{"rsocket-flowable":"../node_modules/rsocket-flowable/build/index.js","./Invariant":"../node_modules/rsocket-core/build/Invariant.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js","rsocket-types":"../node_modules/rsocket-types/build/index.js","./RSocketBinaryFraming":"../node_modules/rsocket-core/build/RSocketBinaryFraming.js"}],"../node_modules/rsocket-core/build/WellKnownMimeType.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.TYPES_BY_MIME_STRING = exports.TYPES_BY_MIME_ID = exports.MESSAGE_RSOCKET_COMPOSITE_METADATA = exports.MESSAGE_RSOCKET_ROUTING = exports.MESSAGE_RSOCKET_TRACING_ZIPKIN = exports.MESSAGE_RSOCKET_AUTHENTICATION = exports.MESSAGE_RSOCKET_ACCEPT_MIMETYPES = exports.MESSAGE_RSOCKET_MIMETYPE = exports.APPLICATION_CLOUDEVENTS_JSON = exports.APPLICATION_JAVA_OBJECT = exports.APPLICATION_HESSIAN = exports.VIDEO_VP8 = exports.VIDEO_H265 = exports.VIDEO_H264 = exports.TEXT_XML = exports.TEXT_PLAIN = exports.TEXT_HTML = exports.TEXT_CSV = exports.TEXT_CSS = exports.MULTIPART_MIXED = exports.IMAGE_TIFF = exports.IMAGE_PNG = exports.IMAGE_JPEG = exports.IMAGE_HEIF = exports.IMAGE_HEIF_SEQUENCE = exports.IMAGE_HEIC = exports.IMAGE_HEIC_SEQUENCE = exports.IMAGE_GIG = exports.IMAGE_BMP = exports.AUDIO_VORBIS = exports.AUDIO_OPUS = exports.AUDIO_OGG = exports.AUDIO_MPEG = exports.AUDIO_MPEG3 = exports.AUDIO_MP4 = exports.AUDIO_MP3 = exports.AUDIO_AAC = exports.APPLICATION_ZIP = exports.APPLICATION_XML = exports.APPLICATION_PROTOBUF = exports.APPLICATION_THRIFT = exports.APPLICATION_PDF = exports.APPLICATION_OCTET_STREAM = exports.APPLICATION_JSON = exports.APPLICATION_JAVASCRIPT = exports.APPLICATION_GZIP = exports.APPLICATION_GRAPHQL = exports.APPLICATION_CBOR = exports.APPLICATION_AVRO = exports.UNKNOWN_RESERVED_MIME_TYPE = exports.UNPARSEABLE_MIME_TYPE = exports.default = void 0;

class WellKnownMimeType {
  constructor(str, identifier) {
    this._string = str;
    this._identifier = identifier;
  }

  /**
   * Find the {@link WellKnownMimeType} for the given identifier (as an {@code int}). Valid
   * identifiers are defined to be integers between 0 and 127, inclusive. Identifiers outside of
   * this range will produce the {@link #UNPARSEABLE_MIME_TYPE}. Additionally, some identifiers in
   * that range are still only reserved and don't have a type associated yet: this method returns
   * the {@link #UNKNOWN_RESERVED_MIME_TYPE} when passing such an identifier, which lets call sites
   * potentially detect this and keep the original representation when transmitting the associated
   * metadata buffer.
   *
   * @param id the looked up identifier
   * @return the {@link WellKnownMimeType}, or {@link #UNKNOWN_RESERVED_MIME_TYPE} if the id is out
   *     of the specification's range, or {@link #UNKNOWN_RESERVED_MIME_TYPE} if the id is one that
   *     is merely reserved but unknown to this implementation.
   */
  static fromIdentifier(id) {
    if (id < 0x00 || id > 0x7f) {
      return UNPARSEABLE_MIME_TYPE;
    }
    return TYPES_BY_MIME_ID[id];
  }

  /**
   * Find the {@link WellKnownMimeType} for the given {@link String} representation. If the
   * representation is {@code null} or doesn't match a {@link WellKnownMimeType}, the {@link
   * #UNPARSEABLE_MIME_TYPE} is returned.
   *
   * @param mimeType the looked up mime type
   * @return the matching {@link WellKnownMimeType}, or {@link #UNPARSEABLE_MIME_TYPE} if none
   *     matches
   */
  static fromString(mimeType) {
    if (!mimeType) {
      throw new Error('type must be non-null');
    }

    // force UNPARSEABLE if by chance UNKNOWN_RESERVED_MIME_TYPE's text has been used
    if (mimeType === UNKNOWN_RESERVED_MIME_TYPE.string) {
      return UNPARSEABLE_MIME_TYPE;
    }

    return TYPES_BY_MIME_STRING.get(mimeType) || UNPARSEABLE_MIME_TYPE;
  }

  /** @return the byte identifier of the mime type, guaranteed to be positive or zero. */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return the mime type represented as a {@link String}, which is made of US_ASCII compatible
   *     characters only
   */
  get string() {
    return this._string;
  }

  /** @see #getString() */
  toString() {
    return this._string;
  }
}
exports.default = WellKnownMimeType;

const UNPARSEABLE_MIME_TYPE = new WellKnownMimeType(
  'UNPARSEABLE_MIME_TYPE_DO_NOT_USE',
  -2
);
exports.UNPARSEABLE_MIME_TYPE = UNPARSEABLE_MIME_TYPE;

const UNKNOWN_RESERVED_MIME_TYPE = new WellKnownMimeType(
  'UNKNOWN_YET_RESERVED_DO_NOT_USE',
  -1
);
exports.UNKNOWN_RESERVED_MIME_TYPE = UNKNOWN_RESERVED_MIME_TYPE;

const APPLICATION_AVRO = new WellKnownMimeType('application/avro', 0x00);
exports.APPLICATION_AVRO = APPLICATION_AVRO;

const APPLICATION_CBOR = new WellKnownMimeType('application/cbor', 0x01);
exports.APPLICATION_CBOR = APPLICATION_CBOR;

const APPLICATION_GRAPHQL = new WellKnownMimeType('application/graphql', 0x02);
exports.APPLICATION_GRAPHQL = APPLICATION_GRAPHQL;

const APPLICATION_GZIP = new WellKnownMimeType('application/gzip', 0x03);
exports.APPLICATION_GZIP = APPLICATION_GZIP;

const APPLICATION_JAVASCRIPT = new WellKnownMimeType(
  'application/javascript',
  0x04
);
exports.APPLICATION_JAVASCRIPT = APPLICATION_JAVASCRIPT;

const APPLICATION_JSON = new WellKnownMimeType('application/json', 0x05);
exports.APPLICATION_JSON = APPLICATION_JSON;

const APPLICATION_OCTET_STREAM = new WellKnownMimeType(
  'application/octet-stream',
  0x06
);
exports.APPLICATION_OCTET_STREAM = APPLICATION_OCTET_STREAM;

const APPLICATION_PDF = new WellKnownMimeType('application/pdf', 0x07);
exports.APPLICATION_PDF = APPLICATION_PDF;

const APPLICATION_THRIFT = new WellKnownMimeType(
  'application/vnd.apache.thrift.binary',
  0x08
);
exports.APPLICATION_THRIFT = APPLICATION_THRIFT;

const APPLICATION_PROTOBUF = new WellKnownMimeType(
  'application/vnd.google.protobuf',
  0x09
);
exports.APPLICATION_PROTOBUF = APPLICATION_PROTOBUF;

const APPLICATION_XML = new WellKnownMimeType('application/xml', 0x0a);
exports.APPLICATION_XML = APPLICATION_XML;

const APPLICATION_ZIP = new WellKnownMimeType('application/zip', 0x0b);
exports.APPLICATION_ZIP = APPLICATION_ZIP;

const AUDIO_AAC = new WellKnownMimeType('audio/aac', 0x0c);
exports.AUDIO_AAC = AUDIO_AAC;

const AUDIO_MP3 = new WellKnownMimeType('audio/mp3', 0x0d);
exports.AUDIO_MP3 = AUDIO_MP3;

const AUDIO_MP4 = new WellKnownMimeType('audio/mp4', 0x0e);
exports.AUDIO_MP4 = AUDIO_MP4;

const AUDIO_MPEG3 = new WellKnownMimeType('audio/mpeg3', 0x0f);
exports.AUDIO_MPEG3 = AUDIO_MPEG3;

const AUDIO_MPEG = new WellKnownMimeType('audio/mpeg', 0x10);
exports.AUDIO_MPEG = AUDIO_MPEG;

const AUDIO_OGG = new WellKnownMimeType('audio/ogg', 0x11);
exports.AUDIO_OGG = AUDIO_OGG;

const AUDIO_OPUS = new WellKnownMimeType('audio/opus', 0x12);
exports.AUDIO_OPUS = AUDIO_OPUS;

const AUDIO_VORBIS = new WellKnownMimeType('audio/vorbis', 0x13);
exports.AUDIO_VORBIS = AUDIO_VORBIS;

const IMAGE_BMP = new WellKnownMimeType('image/bmp', 0x14);
exports.IMAGE_BMP = IMAGE_BMP;

const IMAGE_GIG = new WellKnownMimeType('image/gif', 0x15);
exports.IMAGE_GIG = IMAGE_GIG;

const IMAGE_HEIC_SEQUENCE = new WellKnownMimeType('image/heic-sequence', 0x16);
exports.IMAGE_HEIC_SEQUENCE = IMAGE_HEIC_SEQUENCE;

const IMAGE_HEIC = new WellKnownMimeType('image/heic', 0x17);
exports.IMAGE_HEIC = IMAGE_HEIC;

const IMAGE_HEIF_SEQUENCE = new WellKnownMimeType('image/heif-sequence', 0x18);
exports.IMAGE_HEIF_SEQUENCE = IMAGE_HEIF_SEQUENCE;

const IMAGE_HEIF = new WellKnownMimeType('image/heif', 0x19);
exports.IMAGE_HEIF = IMAGE_HEIF;

const IMAGE_JPEG = new WellKnownMimeType('image/jpeg', 0x1a);
exports.IMAGE_JPEG = IMAGE_JPEG;

const IMAGE_PNG = new WellKnownMimeType('image/png', 0x1b);
exports.IMAGE_PNG = IMAGE_PNG;

const IMAGE_TIFF = new WellKnownMimeType('image/tiff', 0x1c);
exports.IMAGE_TIFF = IMAGE_TIFF;

const MULTIPART_MIXED = new WellKnownMimeType('multipart/mixed', 0x1d);
exports.MULTIPART_MIXED = MULTIPART_MIXED;

const TEXT_CSS = new WellKnownMimeType('text/css', 0x1e);
exports.TEXT_CSS = TEXT_CSS;

const TEXT_CSV = new WellKnownMimeType('text/csv', 0x1f);
exports.TEXT_CSV = TEXT_CSV;

const TEXT_HTML = new WellKnownMimeType('text/html', 0x20);
exports.TEXT_HTML = TEXT_HTML;

const TEXT_PLAIN = new WellKnownMimeType('text/plain', 0x21);
exports.TEXT_PLAIN = TEXT_PLAIN;

const TEXT_XML = new WellKnownMimeType('text/xml', 0x22);
exports.TEXT_XML = TEXT_XML;

const VIDEO_H264 = new WellKnownMimeType('video/H264', 0x23);
exports.VIDEO_H264 = VIDEO_H264;

const VIDEO_H265 = new WellKnownMimeType('video/H265', 0x24);
exports.VIDEO_H265 = VIDEO_H265;

const VIDEO_VP8 = new WellKnownMimeType('video/VP8', 0x25);
exports.VIDEO_VP8 = VIDEO_VP8;

const APPLICATION_HESSIAN = new WellKnownMimeType(
  'application/x-hessian',
  0x26
);
exports.APPLICATION_HESSIAN = APPLICATION_HESSIAN;

const APPLICATION_JAVA_OBJECT = new WellKnownMimeType(
  'application/x-java-object',
  0x27
);
exports.APPLICATION_JAVA_OBJECT = APPLICATION_JAVA_OBJECT;

const APPLICATION_CLOUDEVENTS_JSON = new WellKnownMimeType(
  'application/cloudevents+json',
  0x28
);

// ... reserved for future use ...
exports.APPLICATION_CLOUDEVENTS_JSON = APPLICATION_CLOUDEVENTS_JSON;
const MESSAGE_RSOCKET_MIMETYPE = new WellKnownMimeType(
  'message/x.rsocket.mime-type.v0',
  0x7a
);
exports.MESSAGE_RSOCKET_MIMETYPE = MESSAGE_RSOCKET_MIMETYPE;

const MESSAGE_RSOCKET_ACCEPT_MIMETYPES = new WellKnownMimeType(
  'message/x.rsocket.accept-mime-types.v0',
  0x7b
);
exports.MESSAGE_RSOCKET_ACCEPT_MIMETYPES = MESSAGE_RSOCKET_ACCEPT_MIMETYPES;

const MESSAGE_RSOCKET_AUTHENTICATION = new WellKnownMimeType(
  'message/x.rsocket.authentication.v0',
  0x7c
);
exports.MESSAGE_RSOCKET_AUTHENTICATION = MESSAGE_RSOCKET_AUTHENTICATION;

const MESSAGE_RSOCKET_TRACING_ZIPKIN = new WellKnownMimeType(
  'message/x.rsocket.tracing-zipkin.v0',
  0x7d
);
exports.MESSAGE_RSOCKET_TRACING_ZIPKIN = MESSAGE_RSOCKET_TRACING_ZIPKIN;

const MESSAGE_RSOCKET_ROUTING = new WellKnownMimeType(
  'message/x.rsocket.routing.v0',
  0x7e
);
exports.MESSAGE_RSOCKET_ROUTING = MESSAGE_RSOCKET_ROUTING;

const MESSAGE_RSOCKET_COMPOSITE_METADATA = new WellKnownMimeType(
  'message/x.rsocket.composite-metadata.v0',
  0x7f
);
exports.MESSAGE_RSOCKET_COMPOSITE_METADATA = MESSAGE_RSOCKET_COMPOSITE_METADATA;

const TYPES_BY_MIME_ID = new Array(128);
exports.TYPES_BY_MIME_ID = TYPES_BY_MIME_ID;
const TYPES_BY_MIME_STRING = new Map();
exports.TYPES_BY_MIME_STRING = TYPES_BY_MIME_STRING;

const ALL_MIME_TYPES = [
  UNPARSEABLE_MIME_TYPE,
  UNKNOWN_RESERVED_MIME_TYPE,
  APPLICATION_AVRO,
  APPLICATION_CBOR,
  APPLICATION_GRAPHQL,
  APPLICATION_GZIP,
  APPLICATION_JAVASCRIPT,
  APPLICATION_JSON,
  APPLICATION_OCTET_STREAM,
  APPLICATION_PDF,
  APPLICATION_THRIFT,
  APPLICATION_PROTOBUF,
  APPLICATION_XML,
  APPLICATION_ZIP,
  AUDIO_AAC,
  AUDIO_MP3,
  AUDIO_MP4,
  AUDIO_MPEG3,
  AUDIO_MPEG,
  AUDIO_OGG,
  AUDIO_OPUS,
  AUDIO_VORBIS,
  IMAGE_BMP,
  IMAGE_GIG,
  IMAGE_HEIC_SEQUENCE,
  IMAGE_HEIC,
  IMAGE_HEIF_SEQUENCE,
  IMAGE_HEIF,
  IMAGE_JPEG,
  IMAGE_PNG,
  IMAGE_TIFF,
  MULTIPART_MIXED,
  TEXT_CSS,
  TEXT_CSV,
  TEXT_HTML,
  TEXT_PLAIN,
  TEXT_XML,
  VIDEO_H264,
  VIDEO_H265,
  VIDEO_VP8,
  APPLICATION_HESSIAN,
  APPLICATION_JAVA_OBJECT,
  APPLICATION_CLOUDEVENTS_JSON,
  MESSAGE_RSOCKET_MIMETYPE,
  MESSAGE_RSOCKET_ACCEPT_MIMETYPES,
  MESSAGE_RSOCKET_AUTHENTICATION,
  MESSAGE_RSOCKET_TRACING_ZIPKIN,
  MESSAGE_RSOCKET_ROUTING,
  MESSAGE_RSOCKET_COMPOSITE_METADATA,
];

TYPES_BY_MIME_ID.fill(UNKNOWN_RESERVED_MIME_TYPE);

for (const value of ALL_MIME_TYPES) {
  if (value.identifier >= 0) {
    TYPES_BY_MIME_ID[value.identifier] = value;
    TYPES_BY_MIME_STRING.set(value.string, value);
  }
}

if (Object.seal) {
  Object.seal(TYPES_BY_MIME_ID);
}

},{}],"../node_modules/rsocket-core/build/WellKnownAuthType.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.TYPES_BY_AUTH_STRING = exports.TYPES_BY_AUTH_ID = exports.BEARER = exports.SIMPLE = exports.UNKNOWN_RESERVED_AUTH_TYPE = exports.UNPARSEABLE_AUTH_TYPE = exports.default = void 0;

class WellKnownAuthType {
  constructor(str, identifier) {
    this._string = str;
    this._identifier = identifier;
  }

  /**
   * Find the {@link WellKnownAuthType} for the given identifier (as an {@link number}). Valid
   * identifiers are defined to be integers between 0 and 127, inclusive. Identifiers outside of
   * this range will produce the {@link #UNPARSEABLE_AUTH_TYPE}. Additionally, some identifiers in
   * that range are still only reserved and don't have a type associated yet: this method returns
   * the {@link #UNKNOWN_RESERVED_AUTH_TYPE} when passing such an identifier, which lets call sites
   * potentially detect this and keep the original representation when transmitting the associated
   * metadata buffer.
   *
   * @param id the looked up identifier
   * @return the {@link WellKnownAuthType}, or {@link #UNKNOWN_RESERVED_AUTH_TYPE} if the id is out
   *     of the specification's range, or {@link #UNKNOWN_RESERVED_AUTH_TYPE} if the id is one that
   *     is merely reserved but unknown to this implementation.
   */
  static fromIdentifier(id) {
    if (id < 0x00 || id > 0x7f) {
      return UNPARSEABLE_AUTH_TYPE;
    }
    return TYPES_BY_AUTH_ID[id];
  }

  /**
   * Find the {@link WellKnownAuthType} for the given {@link String} representation. If the
   * representation is {@code null} or doesn't match a {@link WellKnownAuthType}, the {@link
   * #UNPARSEABLE_AUTH_TYPE} is returned.
   *
   * @param authTypeString the looked up mime type
   * @return the matching {@link WellKnownAuthType}, or {@link #UNPARSEABLE_AUTH_TYPE} if none
   *     matches
   */
  static fromString(authTypeString) {
    if (!authTypeString) {
      throw new Error('type must be non-null');
    }

    // force UNPARSEABLE if by chance UNKNOWN_RESERVED_MIME_TYPE's text has been used
    if (authTypeString === UNKNOWN_RESERVED_AUTH_TYPE.string) {
      return UNPARSEABLE_AUTH_TYPE;
    }

    return TYPES_BY_AUTH_STRING.get(authTypeString) || UNPARSEABLE_AUTH_TYPE;
  }

  /** @return the byte identifier of the mime type, guaranteed to be positive or zero. */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return the mime type represented as a {@link String}, which is made of US_ASCII compatible
   *     characters only
   */
  get string() {
    return this._string;
  }

  /** @see #string() */
  toString() {
    return this._string;
  }
}
exports.default = WellKnownAuthType;

const UNPARSEABLE_AUTH_TYPE = new WellKnownAuthType(
  'UNPARSEABLE_AUTH_TYPE_DO_NOT_USE',
  -2
);
exports.UNPARSEABLE_AUTH_TYPE = UNPARSEABLE_AUTH_TYPE;

const UNKNOWN_RESERVED_AUTH_TYPE = new WellKnownAuthType(
  'UNKNOWN_YET_RESERVED_DO_NOT_USE',
  -1
);
exports.UNKNOWN_RESERVED_AUTH_TYPE = UNKNOWN_RESERVED_AUTH_TYPE;

const SIMPLE = new WellKnownAuthType('simple', 0x00);
exports.SIMPLE = SIMPLE;
const BEARER = new WellKnownAuthType('bearer', 0x01);
exports.BEARER = BEARER;

const TYPES_BY_AUTH_ID = new Array(128);
exports.TYPES_BY_AUTH_ID = TYPES_BY_AUTH_ID;
const TYPES_BY_AUTH_STRING = new Map();
exports.TYPES_BY_AUTH_STRING = TYPES_BY_AUTH_STRING;

const ALL_MIME_TYPES = [
  UNPARSEABLE_AUTH_TYPE,
  UNKNOWN_RESERVED_AUTH_TYPE,
  SIMPLE,
  BEARER,
];

TYPES_BY_AUTH_ID.fill(UNKNOWN_RESERVED_AUTH_TYPE);

for (const value of ALL_MIME_TYPES) {
  if (value.identifier >= 0) {
    TYPES_BY_AUTH_ID[value.identifier] = value;
    TYPES_BY_AUTH_STRING.set(value.string, value);
  }
}

if (Object.seal) {
  Object.seal(TYPES_BY_AUTH_ID);
}

},{}],"../node_modules/rsocket-core/build/CompositeMetadata.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.encodeCompositeMetadata = encodeCompositeMetadata;
exports.encodeAndAddCustomMetadata = encodeAndAddCustomMetadata;
exports.encodeAndAddWellKnownMetadata = encodeAndAddWellKnownMetadata;
exports.decodeMimeAndContentBuffersSlices = decodeMimeAndContentBuffersSlices;
exports.decodeMimeTypeFromMimeBuffer = decodeMimeTypeFromMimeBuffer;
exports.encodeCustomMetadataHeader = encodeCustomMetadataHeader;
exports.encodeWellKnownMetadataHeader = encodeWellKnownMetadataHeader;
exports.decodeCompositeMetadata = decodeCompositeMetadata;
exports.WellKnownMimeTypeEntry = exports.ReservedMimeTypeEntry = exports.ExplicitMimeTimeEntry = exports.CompositeMetadata = void 0;

var _LiteBuffer = require('./LiteBuffer');
var _RSocketBufferUtils = require('./RSocketBufferUtils');

var _WellKnownMimeType = _interopRequireWildcard(
  require('./WellKnownMimeType')
);
function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

// $FlowFixMe
class CompositeMetadata {
  constructor(buffer) {
    this._buffer = buffer;
  }

  iterator() {
    return decodeCompositeMetadata(this._buffer);
  }

  // $FlowFixMe
  [Symbol.iterator]() {
    return decodeCompositeMetadata(this._buffer);
  }
}

/**
 * Encode an object where key is either {@link WellKnownMimeType} or {@link string}
 * and value as a {@link Buffer} into composite metadata {@link Buffer}
 *
 * @param metadata key-value based object
 * @returns {Buffer}
 */ exports.CompositeMetadata = CompositeMetadata;
function encodeCompositeMetadata(metadata) {
  let encodedCompositeMetadata = (0, _RSocketBufferUtils.createBuffer)(0);
  for (const [metadataKey, metadataValue] of metadata) {
    const metadataRealValue =
      typeof metadataValue === 'function' ? metadataValue() : metadataValue;

    if (
      metadataKey instanceof _WellKnownMimeType.default ||
      typeof metadataKey === 'number' ||
      metadataKey.constructor.name === 'WellKnownMimeType'
    ) {
      encodedCompositeMetadata = encodeAndAddWellKnownMetadata(
        encodedCompositeMetadata,
        metadataKey,
        metadataRealValue
      );
    } else {
      encodedCompositeMetadata = encodeAndAddCustomMetadata(
        encodedCompositeMetadata,
        metadataKey,
        metadataRealValue
      );
    }
  }

  return encodedCompositeMetadata;
}

/**
 * Encode a new sub-metadata information into a composite metadata {@link CompositeByteBuf
 * buffer}, without checking if the {@link String} can be matched with a well known compressable
 * mime type. Prefer using this method and {@link #encodeAndAddMetadata(CompositeByteBuf,
 * ByteBufAllocator, WellKnownMimeType, ByteBuf)} if you know in advance whether or not the mime
 * is well known. Otherwise use {@link #encodeAndAddMetadataWithCompression(CompositeByteBuf,
 * ByteBufAllocator, String, ByteBuf)}
 *
 * @param compositeMetaData the buffer that will hold all composite metadata information.
 * @param allocator the {@link ByteBufAllocator} to use to create intermediate buffers as needed.
 * @param customMimeType the custom mime type to encode.
 * @param metadata the metadata value to encode.
 */
// see #encodeMetadataHeader(ByteBufAllocator, String, int)
function encodeAndAddCustomMetadata(
  compositeMetaData,
  customMimeType,
  metadata
) {
  return _LiteBuffer.LiteBuffer.concat([
    compositeMetaData,
    encodeCustomMetadataHeader(customMimeType, metadata.byteLength),
    metadata,
  ]);
}

/**
 * Encode a new sub-metadata information into a composite metadata {@link CompositeByteBuf
 * buffer}.
 *
 * @param compositeMetadata the buffer that will hold all composite metadata information.
 * @param allocator the {@link ByteBufAllocator} to use to create intermediate buffers as needed.
 * @param knownMimeType the {@link WellKnownMimeType} to encode.
 * @param metadata the metadata value to encode.
 */
// see #encodeMetadataHeader(ByteBufAllocator, byte, int)
function encodeAndAddWellKnownMetadata(
  compositeMetadata,
  knownMimeType,
  metadata
) {
  let mimeTypeId;

  if (Number.isInteger(knownMimeType)) {
    mimeTypeId = knownMimeType;
  } else {
    mimeTypeId = knownMimeType.identifier;
  }

  return _LiteBuffer.LiteBuffer.concat([
    compositeMetadata,
    encodeWellKnownMetadataHeader(mimeTypeId, metadata.byteLength),
    metadata,
  ]);
}

/**
 * Decode the next metadata entry (a mime header + content pair of {@link ByteBuf}) from   a {@link
 * ByteBuf} that contains at least enough bytes for one more such entry. These buffers are
 * actually slices of the full metadata buffer, and this method doesn't move the full metadata
 * buffer's {@link ByteBuf#readerIndex()}. As such, it requires the user to provide an {@code
 * index} to read from. The next index is computed by calling {@link #computeNextEntryIndex(int,
 * ByteBuf, ByteBuf)}. Size of the first buffer (the "header buffer") drives which decoding method
 * should be further applied to it.
 *
 * <p>The header buffer is either:
 *
 * <ul>
 *   <li>made up of a single byte: this represents an encoded mime id, which can be further
 *       decoded using {@link #decodeMimeIdFromMimeBuffer(ByteBuf)}
 *   <li>made up of 2 or more bytes: this represents an encoded mime String + its length, which
 *       can be further decoded using {@link #decodeMimeTypeFromMimeBuffer(ByteBuf)}. Note the
 *       encoded length, in the first byte, is skipped by this decoding method because the
 *       remaining length of the buffer is that of the mime string.
 * </ul>
 *
 * @param compositeMetadata the source {@link ByteBuf} that originally contains one or more
 *     metadata entries
 * @param entryIndex the {@link ByteBuf#readerIndex()} to start decoding from. original reader
 *     index is kept on the source buffer
 * @param retainSlices should produced metadata entry buffers {@link ByteBuf#slice() slices} be
 *     {@link ByteBuf#retainedSlice() retained}?
 * @return a {@link ByteBuf} array of length 2 containing the mime header buffer
 *     <strong>slice</strong> and the content buffer <strong>slice</strong>, or one of the
 *     zero-length error constant arrays
 */
function decodeMimeAndContentBuffersSlices(compositeMetadata, entryIndex) {
  const mimeIdOrLength = compositeMetadata.readInt8(entryIndex);
  let mime;
  let toSkip = entryIndex;
  if (
    (mimeIdOrLength & STREAM_METADATA_KNOWN_MASK) ===
    STREAM_METADATA_KNOWN_MASK
  ) {
    mime = compositeMetadata.slice(toSkip, toSkip + 1);
    toSkip += 1;
  } else {
    // M flag unset, remaining 7 bits are the length of the mime
    const mimeLength = (mimeIdOrLength & 0xff) + 1;

    if (compositeMetadata.byteLength > toSkip + mimeLength) {
      // need to be able to read an extra mimeLength bytes (we have already read one so byteLength should be strictly more)
      // here we need a way for the returned ByteBuf to differentiate between a
      // 1-byte length mime type and a 1 byte encoded mime id, preferably without
      // re-applying the byte mask. The easiest way is to include the initial byte
      // and have further decoding ignore the first byte. 1 byte buffer == id, 2+ byte
      // buffer == full mime string.
      mime = compositeMetadata.slice(toSkip, toSkip + mimeLength + 1);

      // we thus need to skip the bytes we just sliced, but not the flag/length byte
      // which was already skipped in initial read
      toSkip += mimeLength + 1;
    } else {
      throw new Error(
        'Metadata is malformed. Inappropriately formed Mime Length'
      );
    }
  }

  if (compositeMetadata.byteLength >= toSkip + 3) {
    // ensures the length medium can be read
    const metadataLength = (0, _RSocketBufferUtils.readUInt24BE)(
      compositeMetadata,
      toSkip
    );
    toSkip += 3;
    if (compositeMetadata.byteLength >= metadataLength + toSkip) {
      const metadata = compositeMetadata.slice(toSkip, toSkip + metadataLength);
      return [mime, metadata];
    } else {
      throw new Error(
        'Metadata is malformed. Inappropriately formed Metadata Length or malformed content'
      );
    }
  } else {
    throw new Error(
      'Metadata is malformed. Metadata Length is absent or malformed'
    );
  }
}

/**
 * Decode a {@link CharSequence} custome mime type from a {@link ByteBuf}, assuming said buffer
 * properly contains such a mime type.
 *
 * <p>The buffer must at least have two readable bytes, which distinguishes it from the {@link
 * #decodeMimeIdFromMimeBuffer(ByteBuf) compressed id} case. The first byte is a size and the
 * remaining bytes must correspond to the {@link CharSequence}, encoded fully in US_ASCII. As a
 * result, the first byte can simply be skipped, and the remaining of the buffer be decoded to the
 * mime type.
 *
 * <p>If the mime header buffer is less than 2 bytes long, returns {@code null}.
 *
 * @param flyweightMimeBuffer the mime header {@link ByteBuf} that contains length + custom mime
 *     type
 * @return the decoded custom mime type, as a {@link CharSequence}, or null if the input is
 *     invalid
 * @see #decodeMimeIdFromMimeBuffer(ByteBuf)
 */
function decodeMimeTypeFromMimeBuffer(flyweightMimeBuffer) {
  if (flyweightMimeBuffer.length < 2) {
    throw new Error('Unable to decode explicit MIME type');
  }
  // the encoded length is assumed to be kept at the start of the buffer
  // but also assumed to be irrelevant because the rest of the slice length
  // actually already matches _decoded_length
  return flyweightMimeBuffer.toString('ascii', 1);
}

function encodeCustomMetadataHeader(customMime, metadataLength) {
  const metadataHeader = (0, _RSocketBufferUtils.createBuffer)(
    4 + customMime.length
  );
  // reserve 1 byte for the customMime length
  // /!\ careful not to read that first byte, which is random at this point
  // int writerIndexInitial = metadataHeader.writerIndex();
  // metadataHeader.writerIndex(writerIndexInitial + 1);

  // write the custom mime in UTF8 but validate it is all ASCII-compatible
  // (which produces the right result since ASCII chars are still encoded on 1 byte in UTF8)
  const customMimeLength = metadataHeader.write(customMime, 1);
  if (!isAscii(metadataHeader, 1)) {
    throw new Error('Custom mime type must be US_ASCII characters only');
  }
  if (customMimeLength < 1 || customMimeLength > 128) {
    throw new Error(
      'Custom mime type must have a strictly positive length that fits on 7 unsigned bits, ie 1-128'
    );
  }
  // encoded length is one less than actual length, since 0 is never a valid length, which gives
  // wider representation range
  metadataHeader.writeUInt8(customMimeLength - 1);

  (0, _RSocketBufferUtils.writeUInt24BE)(
    metadataHeader,
    metadataLength,
    customMimeLength + 1
  );

  return metadataHeader;
}

/**
 * Encode a {@link WellKnownMimeType well known mime type} and a metadata value length into a
 * newly allocated {@link ByteBuf}.
 *
 * <p>This compact representation encodes the mime type via its ID on a single byte, and the
 * unsigned value length on 3 additional bytes.
 *
 * @param allocator the {@link ByteBufAllocator} to use to create the buffer.
 * @param mimeType a byte identifier of a {@link WellKnownMimeType} to encode.
 * @param metadataLength the metadata length to append to the buffer as an unsigned 24 bits
 *     integer.
 * @return the encoded mime and metadata length information
 */
function encodeWellKnownMetadataHeader(mimeType, metadataLength) {
  const buffer = _LiteBuffer.LiteBuffer.alloc(4);

  buffer.writeUInt8(mimeType | STREAM_METADATA_KNOWN_MASK);
  (0, _RSocketBufferUtils.writeUInt24BE)(buffer, metadataLength, 1);

  return buffer;
}

/**
 * Decode given {@link Buffer} into {@link Iterator<Entry>}
 *
 * @param buffer encoded Composite Metadata content
 * @returns {Iterator<Entry>}
 * @since 0.0.21
 */
function* decodeCompositeMetadata(buffer) {
  const length = buffer.byteLength;
  let entryIndex = 0;

  while (entryIndex < length) {
    const headerAndData = decodeMimeAndContentBuffersSlices(buffer, entryIndex);

    const header = headerAndData[0];
    const data = headerAndData[1];

    entryIndex = computeNextEntryIndex(entryIndex, header, data);

    if (!isWellKnownMimeType(header)) {
      const typeString = decodeMimeTypeFromMimeBuffer(header);
      if (!typeString) {
        throw new Error('MIME type cannot be null');
      }

      yield new ExplicitMimeTimeEntry(data, typeString);
      continue;
    }

    const id = decodeMimeIdFromMimeBuffer(header);
    const type = _WellKnownMimeType.default.fromIdentifier(id);
    if (_WellKnownMimeType.UNKNOWN_RESERVED_MIME_TYPE === type) {
      yield new ReservedMimeTypeEntry(data, id);
      continue;
    }

    yield new WellKnownMimeTypeEntry(data, type);
  }
}

class ExplicitMimeTimeEntry {
  constructor(content, type) {
    this._content = content;
    this._type = type;
  }

  get content() {
    return this._content;
  }

  get mimeType() {
    return this._type;
  }
}
exports.ExplicitMimeTimeEntry = ExplicitMimeTimeEntry;

class ReservedMimeTypeEntry {
  constructor(content, type) {
    this._content = content;
    this._type = type;
  }

  get content() {
    return this._content;
  }

  /**
   * {@inheritDoc} Since this entry represents a compressed id that couldn't be decoded, this is
   * always {@code null}.
   */
  get mimeType() {
    return undefined;
  }

  /**
   * Returns the reserved, but unknown {@link WellKnownMimeType} for this entry. Range is 0-127
   * (inclusive).
   *
   * @return the reserved, but unknown {@link WellKnownMimeType} for this entry
   */
  get type() {
    return this._type;
  }
}
exports.ReservedMimeTypeEntry = ReservedMimeTypeEntry;

class WellKnownMimeTypeEntry {
  constructor(content, type) {
    this._content = content;
    this._type = type;
  }

  get content() {
    return this._content;
  }

  get mimeType() {
    return this._type.string;
  }

  /**
   * Returns the {@link WellKnownMimeType} for this entry.
   *
   * @return the {@link WellKnownMimeType} for this entry
   */
  get type() {
    return this._type;
  }
}

/**
 * Decode a {@code byte} compressed mime id from a {@link ByteBuf}, assuming said buffer properly
 * contains such an id.
 *
 * <p>The buffer must have exactly one readable byte, which is assumed to have been tested for
 * mime id encoding via the {@link #STREAM_METADATA_KNOWN_MASK} mask ({@code firstByte &
 * STREAM_METADATA_KNOWN_MASK) == STREAM_METADATA_KNOWN_MASK}).
 *
 * <p>If there is no readable byte, the negative identifier of {@link
 * WellKnownMimeType#UNPARSEABLE_MIME_TYPE} is returned.
 *
 * @param mimeBuffer the buffer that should next contain the compressed mime id byte
 * @return the compressed mime id, between 0 and 127, or a negative id if the input is invalid
 * @see #decodeMimeTypeFromMimeBuffer(ByteBuf)
 */ exports.WellKnownMimeTypeEntry = WellKnownMimeTypeEntry;
function decodeMimeIdFromMimeBuffer(mimeBuffer) {
  if (!isWellKnownMimeType(mimeBuffer)) {
    return _WellKnownMimeType.UNPARSEABLE_MIME_TYPE.identifier;
  }
  return mimeBuffer.readInt8() & STREAM_METADATA_LENGTH_MASK;
}

function computeNextEntryIndex(currentEntryIndex, headerSlice, contentSlice) {
  return (
    currentEntryIndex +
    headerSlice.byteLength + // this includes the mime length byte
    3 + // 3 bytes of the content length, which are excluded from the slice
    contentSlice.byteLength
  );
}

function isWellKnownMimeType(header) {
  return header.byteLength === 1;
}

const STREAM_METADATA_KNOWN_MASK = 0x80; // 1000 0000
const STREAM_METADATA_LENGTH_MASK = 0x7f; // 0111 1111

function isAscii(buffer, offset) {
  let isAscii = true;
  for (let i = offset, length = buffer.length; i < length; i++) {
    if (buffer[i] > 127) {
      isAscii = false;
      break;
    }
  }

  return isAscii;
}

},{"./LiteBuffer":"../node_modules/rsocket-core/build/LiteBuffer.js","./RSocketBufferUtils":"../node_modules/rsocket-core/build/RSocketBufferUtils.js","./WellKnownMimeType":"../node_modules/rsocket-core/build/WellKnownMimeType.js"}],"../node_modules/rsocket-core/build/RoutingMetadata.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.encodeRoutes = encodeRoutes;
exports.encodeRoute = encodeRoute;
exports.decodeRoutes = decodeRoutes;
exports.RoutingMetadata = void 0;

var _LiteBuffer = require('./LiteBuffer');
var _RSocketBufferUtils = require('./RSocketBufferUtils'); // $FlowFixMe

// $FlowFixMe
class RoutingMetadata {
  constructor(buffer) {
    this._buffer = buffer;
  }

  iterator() {
    return decodeRoutes(this._buffer);
  }

  // $FlowFixMe
  [Symbol.iterator]() {
    return decodeRoutes(this._buffer);
  }
}

/**
 * Encode given set of routes into {@link Buffer} following the <a href="https://github.com/rsocket/rsocket/blob/master/Extensions/Routing.md">Routing Metadata Layout</a>
 *
 * @param routes non-empty set of routes
 * @returns {Buffer} with encoded content
 */ exports.RoutingMetadata = RoutingMetadata;
function encodeRoutes(...routes) {
  if (routes.length < 1) {
    throw new Error('routes should be non empty array');
  }

  return _LiteBuffer.LiteBuffer.concat(
    routes.map((route) => encodeRoute(route))
  );
}

function encodeRoute(route) {
  const encodedRoute = (0, _RSocketBufferUtils.toBuffer)(route, 'utf8');

  if (encodedRoute.length > 255) {
    throw new Error(
      `route length should fit into unsigned byte length but the given one is ${encodedRoute.length}`
    );
  }

  const encodedLength = (0, _RSocketBufferUtils.createBuffer)(1);

  encodedLength.writeUInt8(encodedRoute.length);

  return _LiteBuffer.LiteBuffer.concat([encodedLength, encodedRoute]);
}

function* decodeRoutes(routeMetadataBuffer) {
  const length = routeMetadataBuffer.byteLength;
  let offset = 0;

  while (offset < length) {
    const routeLength = routeMetadataBuffer.readUInt8(offset++);

    if (offset + routeLength > length) {
      throw new Error(
        `Malformed RouteMetadata. Offset(${offset}) + RouteLength(${routeLength}) is greater than TotalLength`
      );
    }

    const route = routeMetadataBuffer.toString(
      'utf8',
      offset,
      offset + routeLength
    );

    offset += routeLength;
    yield route;
  }
}

},{"./LiteBuffer":"../node_modules/rsocket-core/build/LiteBuffer.js","./RSocketBufferUtils":"../node_modules/rsocket-core/build/RSocketBufferUtils.js"}],"../node_modules/rsocket-core/build/AuthMetadata.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.encodeWellKnownAuthMetadata = encodeWellKnownAuthMetadata;
exports.encodeCustomAuthMetadata = encodeCustomAuthMetadata;
exports.encodeSimpleAuthMetadata = encodeSimpleAuthMetadata;
exports.encodeBearerAuthMetadata = encodeBearerAuthMetadata;
exports.decodeAuthMetadata = decodeAuthMetadata;
exports.decodeSimpleAuthPayload = decodeSimpleAuthPayload;

var _LiteBuffer = require('./LiteBuffer');
var _RSocketBufferUtils = require('./RSocketBufferUtils');
var _WellKnownAuthType = _interopRequireWildcard(
  require('./WellKnownAuthType')
);
function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

const authTypeIdBytesLength = 1;
const customAuthTypeBytesLength = 1;
const usernameLengthBytesLength = 2;

const streamMetadataKnownMask = 0x80; // 1000 0000
const streamMetadataLengthMask = 0x7f; // 0111 1111

/**
 * Encode Auth metadata with the given {@link WellKnownAuthType} and auth payload {@link Buffer}
 *
 * @param authType well known auth type
 * @param authPayloadBuffer auth payload buffer
 * @returns encoded {@link WellKnownAuthType} and payload {@link Buffer}
 */
function encodeWellKnownAuthMetadata(authType, authPayloadBuffer) {
  if (
    authType === _WellKnownAuthType.UNPARSEABLE_AUTH_TYPE ||
    authType === _WellKnownAuthType.UNKNOWN_RESERVED_AUTH_TYPE
  ) {
    throw new Error(
      `Illegal WellKnownAuthType[${authType.toString()}]. Only allowed AuthType should be used`
    );
  }

  const buffer = (0, _RSocketBufferUtils.createBuffer)(authTypeIdBytesLength);

  // eslint-disable-next-line no-bitwise
  buffer.writeUInt8(authType.identifier | streamMetadataKnownMask);

  return _LiteBuffer.LiteBuffer.concat([buffer, authPayloadBuffer]);
}

/**
 * Encode Auth metadata with the given custom auth type {@link string} and auth payload {@link Buffer}
 *
 * @param customAuthType custom auth type
 * @param authPayloadBuffer auth payload buffer
 * @returns encoded {@link WellKnownAuthType} and payload {@link Buffer}
 */
function encodeCustomAuthMetadata(customAuthType, authPayloadBuffer) {
  const customAuthTypeBuffer = (0, _RSocketBufferUtils.toBuffer)(
    customAuthType
  );

  if (customAuthTypeBuffer.byteLength !== customAuthType.length) {
    throw new Error('Custom auth type must be US_ASCII characters only');
  }
  if (
    customAuthTypeBuffer.byteLength < 1 ||
    customAuthTypeBuffer.byteLength > 128
  ) {
    throw new Error(
      'Custom auth type must have a strictly positive length that fits on 7 unsigned bits, ie 1-128'
    );
  }

  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    customAuthTypeBytesLength + customAuthTypeBuffer.byteLength
  );

  // encoded length is one less than actual length, since 0 is never a valid length, which gives
  // wider representation range
  buffer.writeUInt8(customAuthTypeBuffer.byteLength - 1);
  buffer.write(customAuthType, customAuthTypeBytesLength);

  return _LiteBuffer.LiteBuffer.concat([buffer, authPayloadBuffer]);
}

/**
 * Encode Simple Auth metadata with the given username and password
 *
 * @param username username
 * @param password password
 * @returns encoded {@link SIMPLE} and given username and password as auth payload {@link Buffer}
 */
function encodeSimpleAuthMetadata(username, password) {
  const usernameBuffer = (0, _RSocketBufferUtils.toBuffer)(username);
  const passwordBuffer = (0, _RSocketBufferUtils.toBuffer)(password);
  const usernameLength = usernameBuffer.byteLength;

  if (usernameLength > 65535) {
    throw new Error(
      `Username should be shorter than or equal to 65535 bytes length in UTF-8 encoding but the given was ${usernameLength}`
    );
  }

  const capacity = authTypeIdBytesLength + usernameLengthBytesLength;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(capacity);

  // eslint-disable-next-line no-bitwise
  buffer.writeUInt8(
    _WellKnownAuthType.SIMPLE.identifier | streamMetadataKnownMask
  );
  buffer.writeUInt16BE(usernameLength, 1);

  return _LiteBuffer.LiteBuffer.concat([
    buffer,
    usernameBuffer,
    passwordBuffer,
  ]);
}

/**
 * Encode Bearer Auth metadata with the given token
 *
 * @param token token
 * @returns encoded {@link BEARER} and given token as auth payload {@link Buffer}
 */
function encodeBearerAuthMetadata(token) {
  const tokenBuffer = (0, _RSocketBufferUtils.toBuffer)(token);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(authTypeIdBytesLength);

  // eslint-disable-next-line no-bitwise
  buffer.writeUInt8(
    _WellKnownAuthType.BEARER.identifier | streamMetadataKnownMask
  );

  return _LiteBuffer.LiteBuffer.concat([buffer, tokenBuffer]);
}

/**
 * Decode auth metadata {@link Buffer} into {@link AuthMetadata} object
 *
 * @param metadata auth metadata {@link Buffer}
 * @returns decoded {@link AuthMetadata}
 */
function decodeAuthMetadata(metadata) {
  if (metadata.byteLength < 1) {
    throw new Error(
      'Unable to decode Auth metadata. Not enough readable bytes'
    );
  }

  const lengthOrId = metadata.readUInt8();
  // eslint-disable-next-line no-bitwise
  const normalizedId = lengthOrId & streamMetadataLengthMask;

  if (normalizedId !== lengthOrId) {
    const authType = _WellKnownAuthType.default.fromIdentifier(normalizedId);

    return {
      payload: metadata.slice(1),
      type: {
        identifier: authType.identifier,
        string: authType.string,
      },
    };
  } else {
    // encoded length is realLength - 1 in order to avoid intersection with 0x00 authtype
    const realLength = lengthOrId + 1;
    if (metadata.byteLength < realLength + customAuthTypeBytesLength) {
      throw new Error(
        'Unable to decode custom Auth type. Malformed length or auth type string'
      );
    }

    const customAuthTypeString = metadata.toString(
      'utf8',
      customAuthTypeBytesLength,
      customAuthTypeBytesLength + realLength
    );

    const payload = metadata.slice(realLength + customAuthTypeBytesLength);

    return {
      payload,
      type: {
        identifier: _WellKnownAuthType.UNPARSEABLE_AUTH_TYPE.identifier,
        string: customAuthTypeString,
      },
    };
  }
}

/**
 * Read up to 129 bytes from the given metadata in order to get the custom Auth Type
 *
 * @param authPayload
 * @return sliced username and password buffers
 */
function decodeSimpleAuthPayload(authPayload) {
  if (authPayload.byteLength < usernameLengthBytesLength) {
    throw new Error(
      'Unable to decode Simple Auth Payload. Not enough readable bytes'
    );
  }

  const usernameLength = authPayload.readUInt16BE();

  if (authPayload.byteLength < usernameLength + usernameLengthBytesLength) {
    throw new Error(
      'Unable to decode Simple Auth Payload. Not enough readable bytes'
    );
  }

  const username = authPayload.slice(
    usernameLengthBytesLength,
    usernameLengthBytesLength + usernameLength
  );

  const password = authPayload.slice(
    usernameLengthBytesLength + usernameLength
  );

  return {password, username};
}

},{"./LiteBuffer":"../node_modules/rsocket-core/build/LiteBuffer.js","./RSocketBufferUtils":"../node_modules/rsocket-core/build/RSocketBufferUtils.js","./WellKnownAuthType":"../node_modules/rsocket-core/build/WellKnownAuthType.js"}],"../node_modules/rsocket-core/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
Object.defineProperty(exports, 'RSocketClient', {
  enumerable: true,
  get: function () {
    return _RSocketClient.default;
  },
});
Object.defineProperty(exports, 'RSocketServer', {
  enumerable: true,
  get: function () {
    return _RSocketServer.default;
  },
});
Object.defineProperty(exports, 'RSocketResumableTransport', {
  enumerable: true,
  get: function () {
    return _RSocketResumableTransport.default;
  },
});
Object.defineProperty(exports, 'WellKnownMimeType', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.default;
  },
});
Object.defineProperty(exports, 'UNPARSEABLE_MIME_TYPE', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.UNPARSEABLE_MIME_TYPE;
  },
});
Object.defineProperty(exports, 'UNKNOWN_RESERVED_MIME_TYPE', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.UNKNOWN_RESERVED_MIME_TYPE;
  },
});
Object.defineProperty(exports, 'APPLICATION_AVRO', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_AVRO;
  },
});
Object.defineProperty(exports, 'APPLICATION_CBOR', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_CBOR;
  },
});
Object.defineProperty(exports, 'APPLICATION_GRAPHQL', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_GRAPHQL;
  },
});
Object.defineProperty(exports, 'APPLICATION_GZIP', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_GZIP;
  },
});
Object.defineProperty(exports, 'APPLICATION_JAVASCRIPT', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_JAVASCRIPT;
  },
});
Object.defineProperty(exports, 'APPLICATION_JSON', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_JSON;
  },
});
Object.defineProperty(exports, 'APPLICATION_OCTET_STREAM', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_OCTET_STREAM;
  },
});
Object.defineProperty(exports, 'APPLICATION_PDF', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_PDF;
  },
});
Object.defineProperty(exports, 'APPLICATION_THRIFT', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_THRIFT;
  },
});
Object.defineProperty(exports, 'APPLICATION_PROTOBUF', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_PROTOBUF;
  },
});
Object.defineProperty(exports, 'APPLICATION_XML', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_XML;
  },
});
Object.defineProperty(exports, 'APPLICATION_ZIP', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_ZIP;
  },
});
Object.defineProperty(exports, 'AUDIO_AAC', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_AAC;
  },
});
Object.defineProperty(exports, 'AUDIO_MP3', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_MP3;
  },
});
Object.defineProperty(exports, 'AUDIO_MP4', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_MP4;
  },
});
Object.defineProperty(exports, 'AUDIO_MPEG3', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_MPEG3;
  },
});
Object.defineProperty(exports, 'AUDIO_MPEG', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_MPEG;
  },
});
Object.defineProperty(exports, 'AUDIO_OGG', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_OGG;
  },
});
Object.defineProperty(exports, 'AUDIO_OPUS', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_OPUS;
  },
});
Object.defineProperty(exports, 'AUDIO_VORBIS', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.AUDIO_VORBIS;
  },
});
Object.defineProperty(exports, 'IMAGE_BMP', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_BMP;
  },
});
Object.defineProperty(exports, 'IMAGE_GIG', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_GIG;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIC_SEQUENCE', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_HEIC_SEQUENCE;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIC', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_HEIC;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIF_SEQUENCE', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_HEIF_SEQUENCE;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIF', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_HEIF;
  },
});
Object.defineProperty(exports, 'IMAGE_JPEG', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_JPEG;
  },
});
Object.defineProperty(exports, 'IMAGE_PNG', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_PNG;
  },
});
Object.defineProperty(exports, 'IMAGE_TIFF', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.IMAGE_TIFF;
  },
});
Object.defineProperty(exports, 'MULTIPART_MIXED', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.MULTIPART_MIXED;
  },
});
Object.defineProperty(exports, 'TEXT_CSS', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.TEXT_CSS;
  },
});
Object.defineProperty(exports, 'TEXT_CSV', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.TEXT_CSV;
  },
});
Object.defineProperty(exports, 'TEXT_HTML', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.TEXT_HTML;
  },
});
Object.defineProperty(exports, 'TEXT_PLAIN', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.TEXT_PLAIN;
  },
});
Object.defineProperty(exports, 'TEXT_XML', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.TEXT_XML;
  },
});
Object.defineProperty(exports, 'VIDEO_H264', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.VIDEO_H264;
  },
});
Object.defineProperty(exports, 'VIDEO_H265', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.VIDEO_H265;
  },
});
Object.defineProperty(exports, 'VIDEO_VP8', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.VIDEO_VP8;
  },
});
Object.defineProperty(exports, 'APPLICATION_HESSIAN', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_HESSIAN;
  },
});
Object.defineProperty(exports, 'APPLICATION_JAVA_OBJECT', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_JAVA_OBJECT;
  },
});
Object.defineProperty(exports, 'APPLICATION_CLOUDEVENTS_JSON', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.APPLICATION_CLOUDEVENTS_JSON;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_MIMETYPE', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.MESSAGE_RSOCKET_MIMETYPE;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_ACCEPT_MIMETYPES', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.MESSAGE_RSOCKET_ACCEPT_MIMETYPES;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_AUTHENTICATION', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.MESSAGE_RSOCKET_AUTHENTICATION;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_TRACING_ZIPKIN', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.MESSAGE_RSOCKET_TRACING_ZIPKIN;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_ROUTING', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.MESSAGE_RSOCKET_ROUTING;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_COMPOSITE_METADATA', {
  enumerable: true,
  get: function () {
    return _WellKnownMimeType.MESSAGE_RSOCKET_COMPOSITE_METADATA;
  },
});
Object.defineProperty(exports, 'WellKnownAuthType', {
  enumerable: true,
  get: function () {
    return _WellKnownAuthType.default;
  },
});
Object.defineProperty(exports, 'UNPARSEABLE_AUTH_TYPE', {
  enumerable: true,
  get: function () {
    return _WellKnownAuthType.UNPARSEABLE_AUTH_TYPE;
  },
});
Object.defineProperty(exports, 'UNKNOWN_RESERVED_AUTH_TYPE', {
  enumerable: true,
  get: function () {
    return _WellKnownAuthType.UNKNOWN_RESERVED_AUTH_TYPE;
  },
});
Object.defineProperty(exports, 'SIMPLE', {
  enumerable: true,
  get: function () {
    return _WellKnownAuthType.SIMPLE;
  },
});
Object.defineProperty(exports, 'BEARER', {
  enumerable: true,
  get: function () {
    return _WellKnownAuthType.BEARER;
  },
});
Object.defineProperty(exports, 'CONNECTION_STREAM_ID', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.CONNECTION_STREAM_ID;
  },
});
Object.defineProperty(exports, 'ERROR_CODES', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.ERROR_CODES;
  },
});
Object.defineProperty(exports, 'ERROR_EXPLANATIONS', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.ERROR_EXPLANATIONS;
  },
});
Object.defineProperty(exports, 'FLAGS_MASK', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.FLAGS_MASK;
  },
});
Object.defineProperty(exports, 'FLAGS', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.FLAGS;
  },
});
Object.defineProperty(exports, 'FRAME_TYPE_OFFFSET', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.FRAME_TYPE_OFFFSET;
  },
});
Object.defineProperty(exports, 'FRAME_TYPES', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.FRAME_TYPES;
  },
});
Object.defineProperty(exports, 'MAX_CODE', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.MAX_CODE;
  },
});
Object.defineProperty(exports, 'MAX_KEEPALIVE', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.MAX_KEEPALIVE;
  },
});
Object.defineProperty(exports, 'MAX_LIFETIME', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.MAX_LIFETIME;
  },
});
Object.defineProperty(exports, 'MAX_MIME_LENGTH', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.MAX_MIME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_RESUME_LENGTH', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.MAX_RESUME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_STREAM_ID', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.MAX_STREAM_ID;
  },
});
Object.defineProperty(exports, 'MAX_VERSION', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.MAX_VERSION;
  },
});
Object.defineProperty(exports, 'createErrorFromFrame', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.createErrorFromFrame;
  },
});
Object.defineProperty(exports, 'getErrorCodeExplanation', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.getErrorCodeExplanation;
  },
});
Object.defineProperty(exports, 'isComplete', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.isComplete;
  },
});
Object.defineProperty(exports, 'isIgnore', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.isIgnore;
  },
});
Object.defineProperty(exports, 'isLease', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.isLease;
  },
});
Object.defineProperty(exports, 'isMetadata', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.isMetadata;
  },
});
Object.defineProperty(exports, 'isNext', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.isNext;
  },
});
Object.defineProperty(exports, 'isRespond', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.isRespond;
  },
});
Object.defineProperty(exports, 'isResumeEnable', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.isResumeEnable;
  },
});
Object.defineProperty(exports, 'printFrame', {
  enumerable: true,
  get: function () {
    return _RSocketFrame.printFrame;
  },
});
Object.defineProperty(exports, 'deserializeFrame', {
  enumerable: true,
  get: function () {
    return _RSocketBinaryFraming.deserializeFrame;
  },
});
Object.defineProperty(exports, 'deserializeFrameWithLength', {
  enumerable: true,
  get: function () {
    return _RSocketBinaryFraming.deserializeFrameWithLength;
  },
});
Object.defineProperty(exports, 'deserializeFrames', {
  enumerable: true,
  get: function () {
    return _RSocketBinaryFraming.deserializeFrames;
  },
});
Object.defineProperty(exports, 'serializeFrame', {
  enumerable: true,
  get: function () {
    return _RSocketBinaryFraming.serializeFrame;
  },
});
Object.defineProperty(exports, 'serializeFrameWithLength', {
  enumerable: true,
  get: function () {
    return _RSocketBinaryFraming.serializeFrameWithLength;
  },
});
Object.defineProperty(exports, 'byteLength', {
  enumerable: true,
  get: function () {
    return _RSocketBufferUtils.byteLength;
  },
});
Object.defineProperty(exports, 'createBuffer', {
  enumerable: true,
  get: function () {
    return _RSocketBufferUtils.createBuffer;
  },
});
Object.defineProperty(exports, 'readUInt24BE', {
  enumerable: true,
  get: function () {
    return _RSocketBufferUtils.readUInt24BE;
  },
});
Object.defineProperty(exports, 'toBuffer', {
  enumerable: true,
  get: function () {
    return _RSocketBufferUtils.toBuffer;
  },
});
Object.defineProperty(exports, 'writeUInt24BE', {
  enumerable: true,
  get: function () {
    return _RSocketBufferUtils.writeUInt24BE;
  },
});
Object.defineProperty(exports, 'BufferEncoders', {
  enumerable: true,
  get: function () {
    return _RSocketEncoding.BufferEncoders;
  },
});
Object.defineProperty(exports, 'BufferEncoder', {
  enumerable: true,
  get: function () {
    return _RSocketEncoding.BufferEncoder;
  },
});
Object.defineProperty(exports, 'Utf8Encoders', {
  enumerable: true,
  get: function () {
    return _RSocketEncoding.Utf8Encoders;
  },
});
Object.defineProperty(exports, 'UTF8Encoder', {
  enumerable: true,
  get: function () {
    return _RSocketEncoding.UTF8Encoder;
  },
});
Object.defineProperty(exports, 'IdentitySerializer', {
  enumerable: true,
  get: function () {
    return _RSocketSerialization.IdentitySerializer;
  },
});
Object.defineProperty(exports, 'IdentitySerializers', {
  enumerable: true,
  get: function () {
    return _RSocketSerialization.IdentitySerializers;
  },
});
Object.defineProperty(exports, 'JsonSerializer', {
  enumerable: true,
  get: function () {
    return _RSocketSerialization.JsonSerializer;
  },
});
Object.defineProperty(exports, 'JsonSerializers', {
  enumerable: true,
  get: function () {
    return _RSocketSerialization.JsonSerializers;
  },
});
Object.defineProperty(exports, 'Leases', {
  enumerable: true,
  get: function () {
    return _RSocketLease.Leases;
  },
});
Object.defineProperty(exports, 'Lease', {
  enumerable: true,
  get: function () {
    return _RSocketLease.Lease;
  },
});
Object.defineProperty(exports, 'CompositeMetadata', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.CompositeMetadata;
  },
});
Object.defineProperty(exports, 'ReservedMimeTypeEntry', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.ReservedMimeTypeEntry;
  },
});
Object.defineProperty(exports, 'WellKnownMimeTypeEntry', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.WellKnownMimeTypeEntry;
  },
});
Object.defineProperty(exports, 'ExplicitMimeTimeEntry', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.ExplicitMimeTimeEntry;
  },
});
Object.defineProperty(exports, 'encodeAndAddCustomMetadata', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.encodeAndAddCustomMetadata;
  },
});
Object.defineProperty(exports, 'encodeAndAddWellKnownMetadata', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.encodeAndAddWellKnownMetadata;
  },
});
Object.defineProperty(exports, 'encodeCompositeMetadata', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.encodeCompositeMetadata;
  },
});
Object.defineProperty(exports, 'decodeCompositeMetadata', {
  enumerable: true,
  get: function () {
    return _CompositeMetadata.decodeCompositeMetadata;
  },
});
Object.defineProperty(exports, 'RoutingMetadata', {
  enumerable: true,
  get: function () {
    return _RoutingMetadata.RoutingMetadata;
  },
});
Object.defineProperty(exports, 'encodeRoute', {
  enumerable: true,
  get: function () {
    return _RoutingMetadata.encodeRoute;
  },
});
Object.defineProperty(exports, 'encodeRoutes', {
  enumerable: true,
  get: function () {
    return _RoutingMetadata.encodeRoutes;
  },
});
Object.defineProperty(exports, 'decodeRoutes', {
  enumerable: true,
  get: function () {
    return _RoutingMetadata.decodeRoutes;
  },
});
Object.defineProperty(exports, 'encodeSimpleAuthMetadata', {
  enumerable: true,
  get: function () {
    return _AuthMetadata.encodeSimpleAuthMetadata;
  },
});
Object.defineProperty(exports, 'encodeBearerAuthMetadata', {
  enumerable: true,
  get: function () {
    return _AuthMetadata.encodeBearerAuthMetadata;
  },
});
Object.defineProperty(exports, 'encodeWellKnownAuthMetadata', {
  enumerable: true,
  get: function () {
    return _AuthMetadata.encodeWellKnownAuthMetadata;
  },
});
Object.defineProperty(exports, 'encodeCustomAuthMetadata', {
  enumerable: true,
  get: function () {
    return _AuthMetadata.encodeCustomAuthMetadata;
  },
});
Object.defineProperty(exports, 'decodeSimpleAuthPayload', {
  enumerable: true,
  get: function () {
    return _AuthMetadata.decodeSimpleAuthPayload;
  },
});
Object.defineProperty(exports, 'decodeAuthMetadata', {
  enumerable: true,
  get: function () {
    return _AuthMetadata.decodeAuthMetadata;
  },
});

var _RSocketClient = _interopRequireDefault(require('./RSocketClient'));

var _RSocketServer = _interopRequireDefault(require('./RSocketServer'));

var _RSocketResumableTransport = _interopRequireDefault(
  require('./RSocketResumableTransport')
);

var _WellKnownMimeType = _interopRequireWildcard(
  require('./WellKnownMimeType')
);

var _WellKnownAuthType = _interopRequireWildcard(
  require('./WellKnownAuthType')
);

var _RSocketFrame = require('./RSocketFrame');

var _RSocketBinaryFraming = require('./RSocketBinaryFraming');

var _RSocketBufferUtils = require('./RSocketBufferUtils');

var _RSocketEncoding = require('./RSocketEncoding');

var _RSocketSerialization = require('./RSocketSerialization');

var _RSocketLease = require('./RSocketLease');

var _CompositeMetadata = require('./CompositeMetadata');

var _RoutingMetadata = require('./RoutingMetadata');

var _AuthMetadata = require('./AuthMetadata');
function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

},{"./RSocketClient":"../node_modules/rsocket-core/build/RSocketClient.js","./RSocketServer":"../node_modules/rsocket-core/build/RSocketServer.js","./RSocketResumableTransport":"../node_modules/rsocket-core/build/RSocketResumableTransport.js","./WellKnownMimeType":"../node_modules/rsocket-core/build/WellKnownMimeType.js","./WellKnownAuthType":"../node_modules/rsocket-core/build/WellKnownAuthType.js","./RSocketFrame":"../node_modules/rsocket-core/build/RSocketFrame.js","./RSocketBinaryFraming":"../node_modules/rsocket-core/build/RSocketBinaryFraming.js","./RSocketBufferUtils":"../node_modules/rsocket-core/build/RSocketBufferUtils.js","./RSocketEncoding":"../node_modules/rsocket-core/build/RSocketEncoding.js","./RSocketSerialization":"../node_modules/rsocket-core/build/RSocketSerialization.js","./RSocketLease":"../node_modules/rsocket-core/build/RSocketLease.js","./CompositeMetadata":"../node_modules/rsocket-core/build/CompositeMetadata.js","./RoutingMetadata":"../node_modules/rsocket-core/build/RoutingMetadata.js","./AuthMetadata":"../node_modules/rsocket-core/build/AuthMetadata.js"}],"../node_modules/rsocket-websocket-client/build/RSocketWebSocketClient.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

var _rsocketFlowable = require('rsocket-flowable');
var _rsocketCore = require('rsocket-core');

var _rsocketTypes = require('rsocket-types');
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * A WebSocket transport client for use in browser environments.
 */
class RSocketWebSocketClient {
  constructor(options, encoders) {
    _defineProperty(
      this,
      '_handleClosed',

      (e) => {
        this._close(
          new Error(
            e.reason || 'RSocketWebSocketClient: Socket closed unexpectedly.'
          )
        );
      }
    );
    _defineProperty(
      this,
      '_handleError',

      (e) => {
        this._close(e.error);
      }
    );
    _defineProperty(
      this,
      '_handleOpened',

      () => {
        this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
      }
    );
    _defineProperty(
      this,
      '_handleMessage',

      (message) => {
        try {
          const frame = this._readFrame(message);
          this._receivers.forEach((subscriber) => subscriber.onNext(frame));
        } catch (error) {
          this._close(error);
        }
      }
    );
    this._encoders = encoders;
    this._options = options;
    this._receivers = new Set();
    this._senders = new Set();
    this._socket = null;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }
  close() {
    this._close();
  }
  connect() {
    if (this._status.kind !== 'NOT_CONNECTED') {
      throw new Error(
        'RSocketWebSocketClient: Cannot connect(), a connection is already ' +
          'established.'
      );
    }
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
    const wsCreator = this._options.wsCreator;
    const url = this._options.url;
    this._socket = wsCreator ? wsCreator(url) : new WebSocket(url);
    const socket = this._socket;
    socket.binaryType = 'arraybuffer';
    socket.addEventListener('close', this._handleClosed);
    socket.addEventListener('error', this._handleError);
    socket.addEventListener('open', this._handleOpened);
    socket.addEventListener('message', this._handleMessage);
  }
  connectionStatus() {
    return new _rsocketFlowable.Flowable((subscriber) => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }
  receive() {
    return new _rsocketFlowable.Flowable((subject) => {
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          this._receivers.add(subject);
        },
      });
    });
  }
  sendOne(frame) {
    this._writeFrame(frame);
  }
  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: (error) => {
        subscription && this._senders.delete(subscription);
        this._close(error);
      },
      onNext: (frame) => this._writeFrame(frame),
      onSubscribe: (_subscription) => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  _close(error) {
    if (this._status.kind === 'CLOSED' || this._status.kind === 'ERROR') {
      // already closed
      return;
    }
    const status = error
      ? {error, kind: 'ERROR'}
      : _rsocketTypes.CONNECTION_STATUS.CLOSED;
    this._setConnectionStatus(status);
    this._receivers.forEach((subscriber) => {
      if (error) {
        subscriber.onError(error);
      } else {
        subscriber.onComplete();
      }
    });
    this._receivers.clear();
    this._senders.forEach((subscription) => subscription.cancel());
    this._senders.clear();
    const socket = this._socket;
    if (socket) {
      socket.removeEventListener('close', this._handleClosed);
      socket.removeEventListener('error', this._handleError);
      socket.removeEventListener('open', this._handleOpened);
      socket.removeEventListener('message', this._handleMessage);
      socket.close();
      this._socket = null;
    }
  }
  _setConnectionStatus(status) {
    this._status = status;
    this._statusSubscribers.forEach((subscriber) => subscriber.onNext(status));
  }
  _readFrame(message) {
    const buffer = (0, _rsocketCore.toBuffer)(message.data);
    const frame = this._options.lengthPrefixedFrames
      ? (0, _rsocketCore.deserializeFrameWithLength)(buffer, this._encoders)
      : (0, _rsocketCore.deserializeFrame)(buffer, this._encoders);
    if (false) {
      if (this._options.debug) {
        console.log((0, _rsocketCore.printFrame)(frame));
      }
    }
    return frame;
  }

  _writeFrame(frame) {
    try {
      if (false) {
        if (this._options.debug) {
          console.log((0, _rsocketCore.printFrame)(frame));
        }
      }
      const buffer = this._options.lengthPrefixedFrames
        ? (0, _rsocketCore.serializeFrameWithLength)(frame, this._encoders)
        : (0, _rsocketCore.serializeFrame)(frame, this._encoders);
      if (!this._socket) {
        throw new Error(
          'RSocketWebSocketClient: Cannot send frame, not connected.'
        );
      }
      this._socket.send(buffer);
    } catch (error) {
      this._close(error);
    }
  }
}
exports.default = RSocketWebSocketClient;

},{"rsocket-flowable":"../node_modules/rsocket-flowable/build/index.js","rsocket-core":"../node_modules/rsocket-core/build/index.js","rsocket-types":"../node_modules/rsocket-types/build/index.js"}],"../node_modules/rsocket-websocket-client/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.default = void 0;

var _RSocketWebSocketClient = _interopRequireDefault(
  require('./RSocketWebSocketClient')
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
var _default = _RSocketWebSocketClient.default;
exports.default = _default;

},{"./RSocketWebSocketClient":"../node_modules/rsocket-websocket-client/build/RSocketWebSocketClient.js"}],"rsocket/RsocketCLient.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearData = exports.postPlayerInfo = exports.playersInfo = exports.rsocket = void 0;

var rsocket_core_1 = require("rsocket-core");

var rsocket_websocket_client_1 = __importDefault(require("rsocket-websocket-client")); // backend ws endpoint


var wsURL = 'ws://localhost:7000/rsocket';
exports.rsocket = undefined; // rsocket client

var client = new rsocket_core_1.RSocketClient({
  serializers: {
    data: rsocket_core_1.JsonSerializer,
    metadata: rsocket_core_1.IdentitySerializer
  },
  setup: {
    keepAlive: 60000,
    lifetime: 180000,
    dataMimeType: 'application/json',
    metadataMimeType: 'message/x.rsocket.routing.v0'
  },
  transport: new rsocket_websocket_client_1.default({
    url: wsURL
  })
}); // error handler

var errorHanlder = function errorHanlder(e) {
  return console.log(e);
}; // response handler


var responseHanlder = function responseHanlder(payload) {
  console.log(payload);
}; // request to rsocket-websocket and response handling


var numberRequester = function numberRequester(socket) {
  socket.requestStream({
    data: undefined,
    metadata: String.fromCharCode('players-movement'.length) + 'players-movement'
  }).subscribe({
    onError: errorHanlder,
    onNext: responseHanlder,
    onSubscribe: function onSubscribe(subscription) {
      subscription.request(2147483647); // set it to some max value
    }
  });
};

var playersInfo = function playersInfo(onResponse, requestSize) {
  exports.rsocket.requestStream({
    data: undefined,
    metadata: String.fromCharCode('players-movement'.length) + 'players-movement'
  }).subscribe({
    onError: errorHanlder,
    onNext: onResponse,
    onSubscribe: function onSubscribe(subscription) {
      subscription.request(requestSize); // set it to some max value
    }
  });
};

exports.playersInfo = playersInfo;

var postPlayerInfo = function postPlayerInfo(player) {
  exports.rsocket.fireAndForget({
    data: player,
    metadata: String.fromCharCode('record-data'.length) + 'record-data'
  });
};

exports.postPlayerInfo = postPlayerInfo;

var clearData = function clearData() {
  exports.rsocket.fireAndForget({
    data: null,
    metadata: String.fromCharCode('clear-data'.length) + 'clear-data'
  });
};

exports.clearData = clearData;

function doConnect() {
  client.connect().then(function (socket) {
    exports.rsocket = socket; // numberRequester(socket);
    // fireAndForget(socket);
  }, errorHanlder);
}

exports.default = doConnect;
},{"rsocket-core":"../node_modules/rsocket-core/build/index.js","rsocket-websocket-client":"../node_modules/rsocket-websocket-client/build/index.js"}],"scene/startScene.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartScene = void 0;

var kaboom_1 = __importDefault(require("../kaboom"));

var LiquebaseDungeon_1 = __importDefault(require("../LiquebaseDungeon"));

var RsocketCLient_1 = __importDefault(require("../rsocket/RsocketCLient"));

var go = kaboom_1.default.go,
    onKeyDown = kaboom_1.default.onKeyDown,
    add = kaboom_1.default.add,
    loadTiledMap = kaboom_1.default.loadTiledMap,
    onCharInput = kaboom_1.default.onCharInput,
    drawLines = kaboom_1.default.drawLines,
    onClick = kaboom_1.default.onClick,
    onKeyPress = kaboom_1.default.onKeyPress;
var levels = undefined;
var key = undefined;
var userName = "";
var character = "faune";

function createLabel(k, message, width, height) {
  return add([k.text(message, {
    size: 32
  }), k.pos(width, height), k.color(255, 1, 1), k.origin('center')]);
}

function StartScene() {
  (0, RsocketCLient_1.default)();
  userName = "";
  var label = createLabel(kaboom_1.default, "Enter name", kaboom_1.default.width() * 0.5, kaboom_1.default.height() * 0.2);
  createLabel(kaboom_1.default, "Press enter after name input", kaboom_1.default.width() * 0.5, kaboom_1.default.height() * 0.8);
  createLabel(kaboom_1.default, "Choose character", kaboom_1.default.width() * 0.5, kaboom_1.default.height() * 0.4);
  onCharInput(function (ch) {
    userName += ch;
    label.text = userName;
  });
  onKeyPress('backspace', function () {
    userName = userName.substring(0, userName.length - 1);
    label.text = userName;

    if (userName.length === 0) {
      label.text = "Enter name";
    }
  });
  loadTiledMap(LiquebaseDungeon_1.default).then(function (r) {
    levels = r.levels;
    key = r.key;
  });
  layers(["icons", "lines"], "icons");
  add([sprite("faune_ico"), pos(kaboom_1.default.width() * 0.3, kaboom_1.default.height() * 0.5), area(), "hero", {
    heroName: "faune"
  }]);
  add([sprite("zombie_ico"), pos(kaboom_1.default.width() * 0.5, kaboom_1.default.height() * 0.5), area(), "hero", {
    heroName: "zombie"
  }]);
  add([sprite("knight_ico"), pos(kaboom_1.default.width() * 0.7, kaboom_1.default.height() * 0.5), area(), "hero", {
    heroName: "knight"
  }]);
  kaboom_1.default.onUpdate("hero", function (h) {
    var color = rgb(255, 0, 0);

    if (character === h.heroName) {
      color = rgb(0, 255, 0);
    }

    drawLines({
      pts: [h.pos, vec2(h.pos.x, h.pos.y + h.height), vec2(h.pos.x + h.width, h.pos.y + h.height), vec2(h.pos.x + h.width, h.pos.y), h.pos],
      width: 4,
      pos: vec2(100, 200),
      color: color
    });
  });
  onClick("hero", function (h) {
    character = h.heroName;
  });
  onKeyDown("enter", function () {
    if (userName !== "") {
      go("main", {
        levels: levels,
        key: key,
        userName: userName,
        character: character
      });
    }
  });
}

exports.StartScene = StartScene;
exports.default = StartScene;
},{"../kaboom":"kaboom.ts","../LiquebaseDungeon":"src/LiquebaseDungeon.ts","../rsocket/RsocketCLient":"rsocket/RsocketCLient.ts"}],"src/scene/mainScene.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainScene = void 0;

var kaboom_1 = __importDefault(require("../kaboom"));

var RsocketCLient_1 = require("../rsocket/RsocketCLient");

var add = kaboom_1.default.add,
    origin = kaboom_1.default.origin,
    sprite = kaboom_1.default.sprite,
    solid = kaboom_1.default.solid,
    body = kaboom_1.default.body,
    area = kaboom_1.default.area,
    isKeyDown = kaboom_1.default.isKeyDown,
    text = kaboom_1.default.text,
    get = kaboom_1.default.get;
var userName = undefined;
var REQUEST_SIZE = 50;
var counter = 0;
var question = false;
var flipX = false;

function MainScene(config) {
  userName = config.userName;
  playersUpdate();
  layers(['level', 'pop-up', 'message'], 'level');

  for (var _i = 0, _a = config.levels; _i < _a.length; _i++) {
    var level = _a[_i];
    kaboom_1.default.addLevel(level, __assign({
      width: 16,
      height: 16
    }, config.key));
  }

  var faune = add([pos(202, 325), sprite(config.character), origin('center'), solid(), body({
    maxVel: 0
  }), // scale(2),
  area()]);
  faune.play("idle-up");
  var name = add([text(config.userName, {
    size: 8
  }), pos(faune.pos)]);
  faune.onUpdate(function () {
    camPos(faune.pos);
    name.pos.x = faune.pos.x - name.width / 2;
    name.pos.y = faune.pos.y - name.height - 10;
    every('question-player', function (question) {
      question.pos.x = faune.pos.x - question.width / 2;
      question.pos.y = faune.pos.y - question.height - 20;
    });
    every('level-part', function (part) {
      if (Math.abs(faune.pos.x - part.pos.x) > kaboom_1.default.width() / 2 || Math.abs(faune.pos.y - part.pos.y) > kaboom_1.default.height() / 2) {
        part.hidden = true;
      } else {
        part.hidden = false;
      }
    });
  });
  kaboom_1.default.onKeyPress('q', function () {
    if (get('question-player').length > 0) {
      destroyAll('question-player');
      question = false;
    } else {
      add([sprite('question_mark'), area(), pos(0, 0), 'question-player']);
      question = true;
    }
  });
  kaboom_1.default.onKeyPress('space', function () {
    var slides = get('slide');

    if (slides.length > 0) {
      destroyAll('pop-up');
      return;
    }

    for (var _i = 0, slides_1 = slides; _i < slides_1.length; _i++) {
      var slide = slides_1[_i];

      if (faune.isColliding(slide)) {
        add([sprite("slide1"), origin('center'), fixed(), layer('pop-up'), scale(0.3), pos(kaboom_1.default.width() / 2, kaboom_1.default.height() / 2), 'pop-up']);
      }
    }
  });
  faune.action(function () {
    var _a;

    var clear = isKeyDown('c');
    var left = isKeyDown('left');
    var right = isKeyDown('right');
    var up = isKeyDown('up');
    var down = isKeyDown('down');
    var speed = 6;
    var currentAnim = faune.curAnim();

    if (clear) {
      (0, RsocketCLient_1.clearData)();
      return;
    }

    if (left) {
      if (currentAnim !== "walk-side") {
        faune.play("walk-side");
      }

      flipX = true;
      faune.flipX(true);
      faune.pos.x -= speed;
      playerUpdate(config, faune, "walk-side");
    } else if (right) {
      if (currentAnim !== "walk-side") {
        faune.play("walk-side");
      }

      flipX = false;
      faune.flipX(false);
      faune.pos.x += speed;
      playerUpdate(config, faune, "walk-side");
    } else if (up) {
      if (currentAnim !== "walk-up") {
        faune.play("walk-up");
      }

      faune.pos.y -= speed;
      playerUpdate(config, faune, "walk-up");
    } else if (down) {
      if (currentAnim !== "walk-down") {
        faune.play("walk-down");
      }

      faune.pos.y += speed;
      playerUpdate(config, faune, "walk-down");
    } else if (currentAnim !== undefined) {
      var direction = (_a = currentAnim.split('-').pop()) !== null && _a !== void 0 ? _a : 'down';
      faune.play("idle-".concat(direction));
      playerUpdate(config, faune, "idle-".concat(direction));
    }
  });
}

exports.MainScene = MainScene;

function playerUpdate(config, player, currentAnim) {
  (0, RsocketCLient_1.postPlayerInfo)({
    playerName: config.userName,
    x: player.pos.x,
    y: player.pos.y,
    animation: currentAnim,
    sprite: config.character,
    flipX: flipX,
    question: question
  });
}

function playersUpdate() {
  (0, RsocketCLient_1.playersInfo)(onLevelUpdate, REQUEST_SIZE);
}

function onLevelUpdate(payload) {
  var _loop_1 = function _loop_1(pl) {
    if (userName !== pl.playerName) {
      if (get("hero-".concat(pl.playerName)).length > 0) {
        var hero = get("hero-".concat(pl.playerName))[0];
        hero.pos.x = pl.x;
        hero.pos.y = pl.y;

        if (hero.curAnim() !== pl.animation) {
          hero.play(pl.animation);
          hero.flipX(pl.flipX);
        }

        if (pl.question) {
          if (get("question-".concat(pl.playerName)).length === 0) {
            add([sprite('question_mark'), area(), pos(0, 0), "question-".concat(pl.playerName)]);
          }
        } else {
          destroyAll("question-".concat(pl.playerName));
        }

        hero.flipX(pl.flipX);
      } else {
        var player_1 = add([sprite(pl.sprite), pos(pl.x, pl.y), origin('center'), area(), "hero-".concat(pl.playerName), 'level-part']);
        var name_1 = add([text(pl.playerName, {
          size: 8
        }), pos(player_1.pos), 'level-part']);

        if (pl.question) {
          add([sprite('question_mark'), area(), pos(0, 0), "question-".concat(pl.playerName)]);
        } else {
          destroyAll("question-".concat(pl.playerName));
        }

        player_1.onUpdate(function () {
          name_1.pos.x = player_1.pos.x - name_1.width / 2;
          name_1.pos.y = player_1.pos.y - name_1.height - 10;
          every("question-".concat(pl.playerName), function (question) {
            question.pos.x = player_1.pos.x - question.width / 2;
            question.pos.y = player_1.pos.y - question.height - 20;
          });
        });
      }
    }
  };

  for (var _i = 0, _a = payload.data; _i < _a.length; _i++) {
    var pl = _a[_i];

    _loop_1(pl);
  }

  counter++;

  if (counter === REQUEST_SIZE) {
    counter = 0;
    playersUpdate();
  }
}

exports.default = MainScene;
},{"../kaboom":"kaboom.ts","../rsocket/RsocketCLient":"rsocket/RsocketCLient.ts"}],"src/loader/SpriteLoader.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSprites = void 0;

var kaboom_1 = __importDefault(require("../kaboom"));

var loadSprite = kaboom_1.default.loadSprite;

function loadSprites() {
  loadSprite("bg", "/public/assets/floor_1.png");
  loadSprite("faune_ico", "/public/assets/faune_ico.png");
  loadSprite("knight_ico", "/public/assets/knight_ico.png");
  loadSprite("zombie_ico", "/public/assets/zombie_ico.png");
  loadSprite("slide1", "/public/slides/slide1.png");
  loadSprite("slide2", "/public/slides/slide2.png");
  loadSprite("slide3", "/public/slides/slide3.png");
  loadSprite("slide4", "/public/slides/slide4.png");
  loadSprite("slide5", "/public/slides/slide5.png");
  loadSprite("slide6", "/public/slides/slide6.png");
  loadSprite("slide7", "/public/slides/slide7.png");
  loadSprite("slide8", "/public/slides/slide8.png");
  loadSprite("slide9", "/public/slides/slide9.png");
  loadSprite("slide10", "/public/slides/slide10.png");
  loadSprite("slide11", "/public/slides/slide11.png");
  loadSprite("slide12", "/public/slides/slide12.png");
  loadSprite("slide13", "/public/slides/slide13.png");
  loadSprite("slide14", "/public/slides/slide14.png");
  loadSprite("slide15", "/public/slides/slide15.png");
  loadSprite("question_mark", "/public/assets/question_mark.png");
}

exports.loadSprites = loadSprites;
exports.default = loadSprites;
},{"../kaboom":"kaboom.ts"}],"src/loader/HeroLoader.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadHeros = void 0;

var kaboom_1 = __importDefault(require("../kaboom"));

var loadSpriteAtlas = kaboom_1.default.loadSpriteAtlas;

function loadHeros() {
  loadSpriteAtlas("/public/assets/faune_walk.png", {
    'faune': {
      x: 0,
      y: 0,
      width: 768,
      height: 32,
      sliceX: 24,
      anims: {
        'walk-down': {
          from: 0,
          to: 7,
          loop: true,
          speed: 15
        },
        'walk-side': {
          from: 8,
          to: 15,
          loop: true,
          speed: 15
        },
        'walk-up': {
          from: 16,
          to: 23,
          loop: true,
          speed: 15
        },
        'idle-down': {
          from: 1,
          to: 1
        },
        'idle-side': {
          from: 10,
          to: 10
        },
        'idle-up': {
          from: 19,
          to: 19
        }
      }
    }
  });
  loadSpriteAtlas("/public/assets/knight.png", {
    'knight': {
      x: 0,
      y: 0,
      width: 16,
      height: 140,
      sliceY: 5,
      anims: {
        'walk-down': {
          from: 0,
          to: 4,
          loop: true,
          speed: 15
        },
        'walk-side': {
          from: 0,
          to: 4,
          loop: true,
          speed: 15
        },
        'walk-up': {
          from: 0,
          to: 4,
          loop: true,
          speed: 15
        },
        'idle-down': {
          from: 1,
          to: 1
        },
        'idle-side': {
          from: 0,
          to: 0
        },
        'idle-up': {
          from: 0,
          to: 0
        }
      }
    }
  });
  loadSpriteAtlas("/public/assets/zombie.png", {
    'zombie': {
      x: 0,
      y: 0,
      width: 32,
      height: 272,
      sliceY: 8,
      anims: {
        'walk-down': {
          from: 0,
          to: 7,
          loop: true,
          speed: 15
        },
        'walk-side': {
          from: 0,
          to: 7,
          loop: true,
          speed: 15
        },
        'walk-up': {
          from: 0,
          to: 7,
          loop: true,
          speed: 15
        },
        'idle-down': {
          from: 1,
          to: 1
        },
        'idle-side': {
          from: 0,
          to: 0
        },
        'idle-up': {
          from: 0,
          to: 0
        }
      }
    }
  });
}

exports.loadHeros = loadHeros;
exports.default = loadHeros;
},{"../kaboom":"kaboom.ts"}],"src/main.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var kaboom_1 = __importDefault(require("./kaboom"));

var startScene_1 = __importDefault(require("./scene/startScene"));

var mainScene_1 = __importDefault(require("./scene/mainScene"));

var SpriteLoader_1 = __importDefault(require("./loader/SpriteLoader"));

var HeroLoader_1 = __importDefault(require("./loader/HeroLoader"));

var scene = kaboom_1.default.scene,
    go = kaboom_1.default.go;
(0, SpriteLoader_1.default)();
(0, HeroLoader_1.default)();
scene("start", startScene_1.default);
scene("main", mainScene_1.default);
go('start');
},{"./kaboom":"kaboom.ts","./scene/startScene":"scene/startScene.ts","./scene/mainScene":"src/scene/mainScene.ts","./loader/SpriteLoader":"src/loader/SpriteLoader.ts","./loader/HeroLoader":"src/loader/HeroLoader.ts"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49269" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.ts"], null)
//# sourceMappingURL=/main.b0a109ad.js.map