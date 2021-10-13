/*! For license information please see bitcoin.umd.js.LICENSE.txt */
var bitcoin;
(() => {
  var e = {
      727: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.toDouble = t.intHighLow = t.uintHighLow = t.onesComplement = t.assert = t.Int53Type = void 0);
        const n = 4294967295;
        var r;
        ((r = t.Int53Type || (t.Int53Type = {})).Int64BE = "Int64BE"),
          (r.Int64LE = "Int64LE"),
          (r.UInt64BE = "UInt64BE"),
          (r.UInt64LE = "UInt64LE"),
          (t.assert = (e, t) => {
            if (!e) throw new Error(t);
          }),
          (t.onesComplement = (e) => ((e = ~e) < 0 && (e = 2147483648 + (2147483647 & e)), e)),
          (t.uintHighLow = (e) => {
            (0, t.assert)(e > -1 && e <= 9007199254740991, "number out of range"), (0, t.assert)(Math.floor(e) === e, "number must be an integer");
            var r = 0,
              o = 4294967295 & e,
              i = o < 0 ? 2147483648 + (2147483647 & e) : o;
            return e > n && (r = (e - i) / 4294967296), [r, i];
          }),
          (t.intHighLow = (e) => {
            if (e > -1) return (0, t.uintHighLow)(e);
            var r = (0, t.uintHighLow)(-e),
              o = (0, t.onesComplement)(r[0]),
              i = (0, t.onesComplement)(r[1]);
            return i === n ? ((o += 1), (i = 0)) : (i += 1), [o, i];
          }),
          (t.toDouble = (e, n, r) =>
            r && 0 != (2147483648 & e)
              ? ((e = (0, t.onesComplement)(e)), (n = (0, t.onesComplement)(n)), (0, t.assert)(e < 2097152, "number too small"), -(4294967296 * e + n + 1))
              : ((0, t.assert)(e < 2097152, "number too large"), 4294967296 * e + n));
      },
      716: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.readInt53 = t.writeInt53 = t.Int53Type = void 0);
        var r = n(727);
        Object.defineProperty(t, "Int53Type", {
          enumerable: !0,
          get: function () {
            return r.Int53Type;
          },
        });
        var o = n(733);
        Object.defineProperty(t, "writeInt53", {
          enumerable: !0,
          get: function () {
            return o.write;
          },
        });
        var i = n(120);
        Object.defineProperty(t, "readInt53", {
          enumerable: !0,
          get: function () {
            return i.read;
          },
        });
      },
      120: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.read = void 0);
        const r = n(727);
        t.read = (e, t, n = 0) => {
          const o = e.endsWith("BE"),
            [i, s] = o ? [t.readUInt32BE(n), t.readUInt32BE(n + 4)] : [t.readUInt32LE(n + 4), t.readUInt32LE(n)],
            u = e.startsWith("Int");
          return (0, r.toDouble)(i, s, u);
        };
      },
      733: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.write = void 0);
        const r = n(727);
        t.write = (e, t, n, o = 0) => {
          const i = e.startsWith("Int") ? (0, r.intHighLow)(t) : (0, r.uintHighLow)(t);
          e.endsWith("BE") ? (n.writeUInt32BE(i[0], o), n.writeUInt32BE(i[1], o + 4)) : (n.writeUInt32LE(i[1], o), n.writeUInt32LE(i[0], o + 4));
        };
      },
      742: (e, t) => {
        "use strict";
        (t.byteLength = function (e) {
          var t = f(e),
            n = t[0],
            r = t[1];
          return (3 * (n + r)) / 4 - r;
        }),
          (t.toByteArray = function (e) {
            var t,
              n,
              i = f(e),
              s = i[0],
              u = i[1],
              c = new o(
                (function (e, t, n) {
                  return (3 * (t + n)) / 4 - n;
                })(0, s, u)
              ),
              a = 0,
              h = u > 0 ? s - 4 : s;
            for (n = 0; n < h; n += 4)
              (t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]),
                (c[a++] = (t >> 16) & 255),
                (c[a++] = (t >> 8) & 255),
                (c[a++] = 255 & t);
            return (
              2 === u && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (c[a++] = 255 & t)),
              1 === u && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (c[a++] = (t >> 8) & 255), (c[a++] = 255 & t)),
              c
            );
          }),
          (t.fromByteArray = function (e) {
            for (var t, r = e.length, o = r % 3, i = [], s = 16383, u = 0, f = r - o; u < f; u += s) i.push(c(e, u, u + s > f ? f : u + s));
            return (
              1 === o
                ? ((t = e[r - 1]), i.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
                : 2 === o && ((t = (e[r - 2] << 8) + e[r - 1]), i.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "=")),
              i.join("")
            );
          });
        for (
          var n = [],
            r = [],
            o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = 0,
            u = i.length;
          s < u;
          ++s
        )
          (n[s] = i[s]), (r[i.charCodeAt(s)] = s);
        function f(e) {
          var t = e.length;
          if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var n = e.indexOf("=");
          return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
        }
        function c(e, t, r) {
          for (var o, i, s = [], u = t; u < r; u += 3)
            (o = ((e[u] << 16) & 16711680) + ((e[u + 1] << 8) & 65280) + (255 & e[u + 2])), s.push(n[((i = o) >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
          return s.join("");
        }
        (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
      },
      764: (e, t, n) => {
        "use strict";
        const r = n(742),
          o = n(645),
          i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        (t.Buffer = f),
          (t.SlowBuffer = function (e) {
            return +e != e && (e = 0), f.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50);
        const s = 2147483647;
        function u(e) {
          if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          const t = new Uint8Array(e);
          return Object.setPrototypeOf(t, f.prototype), t;
        }
        function f(e, t, n) {
          if ("number" == typeof e) {
            if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
            return h(e);
          }
          return c(e, t, n);
        }
        function c(e, t, n) {
          if ("string" == typeof e)
            return (function (e, t) {
              if ((("string" == typeof t && "" !== t) || (t = "utf8"), !f.isEncoding(t))) throw new TypeError("Unknown encoding: " + t);
              const n = 0 | g(e, t);
              let r = u(n);
              const o = r.write(e, t);
              return o !== n && (r = r.slice(0, o)), r;
            })(e, t);
          if (ArrayBuffer.isView(e))
            return (function (e) {
              if (Y(e, Uint8Array)) {
                const t = new Uint8Array(e);
                return d(t.buffer, t.byteOffset, t.byteLength);
              }
              return l(e);
            })(e);
          if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
          if (Y(e, ArrayBuffer) || (e && Y(e.buffer, ArrayBuffer))) return d(e, t, n);
          if ("undefined" != typeof SharedArrayBuffer && (Y(e, SharedArrayBuffer) || (e && Y(e.buffer, SharedArrayBuffer)))) return d(e, t, n);
          if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
          const r = e.valueOf && e.valueOf();
          if (null != r && r !== e) return f.from(r, t, n);
          const o = (function (e) {
            if (f.isBuffer(e)) {
              const t = 0 | p(e.length),
                n = u(t);
              return 0 === n.length || e.copy(n, 0, 0, t), n;
            }
            return void 0 !== e.length ? ("number" != typeof e.length || J(e.length) ? u(0) : l(e)) : "Buffer" === e.type && Array.isArray(e.data) ? l(e.data) : void 0;
          })(e);
          if (o) return o;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return f.from(e[Symbol.toPrimitive]("string"), t, n);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        }
        function a(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
          if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        }
        function h(e) {
          return a(e), u(e < 0 ? 0 : 0 | p(e));
        }
        function l(e) {
          const t = e.length < 0 ? 0 : 0 | p(e.length),
            n = u(t);
          for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
          return n;
        }
        function d(e, t, n) {
          if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
          if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
          let r;
          return (r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n)), Object.setPrototypeOf(r, f.prototype), r;
        }
        function p(e) {
          if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
          return 0 | e;
        }
        function g(e, t) {
          if (f.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || Y(e, ArrayBuffer)) return e.byteLength;
          if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
          const n = e.length,
            r = arguments.length > 2 && !0 === arguments[2];
          if (!r && 0 === n) return 0;
          let o = !1;
          for (;;)
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
                return q(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return X(e).length;
              default:
                if (o) return r ? -1 : q(e).length;
                (t = ("" + t).toLowerCase()), (o = !0);
            }
        }
        function y(e, t, n) {
          let r = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
          if ((n >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return O(this, t, n);
              case "utf8":
              case "utf-8":
                return C(this, t, n);
              case "ascii":
                return T(this, t, n);
              case "latin1":
              case "binary":
                return A(this, t, n);
              case "base64":
                return U(this, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return x(this, t, n);
              default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (r = !0);
            }
        }
        function b(e, t, n) {
          const r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function m(e, t, n, r, o) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648),
            J((n = +n)) && (n = o ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (o) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!o) return -1;
            n = 0;
          }
          if (("string" == typeof t && (t = f.from(t, r)), f.isBuffer(t))) return 0 === t.length ? -1 : B(e, t, n, r, o);
          if ("number" == typeof t)
            return (
              (t &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : B(e, [t], n, r, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function B(e, t, n, r, o) {
          let i,
            s = 1,
            u = e.length,
            f = t.length;
          if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2) return -1;
            (s = 2), (u /= 2), (f /= 2), (n /= 2);
          }
          function c(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          if (o) {
            let r = -1;
            for (i = n; i < u; i++)
              if (c(e, i) === c(t, -1 === r ? 0 : i - r)) {
                if ((-1 === r && (r = i), i - r + 1 === f)) return r * s;
              } else -1 !== r && (i -= i - r), (r = -1);
          } else
            for (n + f > u && (n = u - f), i = n; i >= 0; i--) {
              let n = !0;
              for (let r = 0; r < f; r++)
                if (c(e, i + r) !== c(t, r)) {
                  n = !1;
                  break;
                }
              if (n) return i;
            }
          return -1;
        }
        function w(e, t, n, r) {
          n = Number(n) || 0;
          const o = e.length - n;
          r ? (r = Number(r)) > o && (r = o) : (r = o);
          const i = t.length;
          let s;
          for (r > i / 2 && (r = i / 2), s = 0; s < r; ++s) {
            const r = parseInt(t.substr(2 * s, 2), 16);
            if (J(r)) return s;
            e[n + s] = r;
          }
          return s;
        }
        function E(e, t, n, r) {
          return G(q(t, e.length - n), e, n, r);
        }
        function v(e, t, n, r) {
          return G(
            (function (e) {
              const t = [];
              for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
              return t;
            })(t),
            e,
            n,
            r
          );
        }
        function I(e, t, n, r) {
          return G(X(t), e, n, r);
        }
        function L(e, t, n, r) {
          return G(
            (function (e, t) {
              let n, r, o;
              const i = [];
              for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) (n = e.charCodeAt(s)), (r = n >> 8), (o = n % 256), i.push(o), i.push(r);
              return i;
            })(t, e.length - n),
            e,
            n,
            r
          );
        }
        function U(e, t, n) {
          return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
        }
        function C(e, t, n) {
          n = Math.min(e.length, n);
          const r = [];
          let o = t;
          for (; o < n; ) {
            const t = e[o];
            let i = null,
              s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
            if (o + s <= n) {
              let n, r, u, f;
              switch (s) {
                case 1:
                  t < 128 && (i = t);
                  break;
                case 2:
                  (n = e[o + 1]), 128 == (192 & n) && ((f = ((31 & t) << 6) | (63 & n)), f > 127 && (i = f));
                  break;
                case 3:
                  (n = e[o + 1]),
                    (r = e[o + 2]),
                    128 == (192 & n) && 128 == (192 & r) && ((f = ((15 & t) << 12) | ((63 & n) << 6) | (63 & r)), f > 2047 && (f < 55296 || f > 57343) && (i = f));
                  break;
                case 4:
                  (n = e[o + 1]),
                    (r = e[o + 2]),
                    (u = e[o + 3]),
                    128 == (192 & n) &&
                      128 == (192 & r) &&
                      128 == (192 & u) &&
                      ((f = ((15 & t) << 18) | ((63 & n) << 12) | ((63 & r) << 6) | (63 & u)), f > 65535 && f < 1114112 && (i = f));
              }
            }
            null === i ? ((i = 65533), (s = 1)) : i > 65535 && ((i -= 65536), r.push(((i >>> 10) & 1023) | 55296), (i = 56320 | (1023 & i))), r.push(i), (o += s);
          }
          return (function (e) {
            const t = e.length;
            if (t <= _) return String.fromCharCode.apply(String, e);
            let n = "",
              r = 0;
            for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += _)));
            return n;
          })(r);
        }
        (t.kMaxLength = s),
          (f.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const e = new Uint8Array(1),
                t = {
                  foo: function () {
                    return 42;
                  },
                };
              return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
            } catch (e) {
              return !1;
            }
          })()),
          f.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
          Object.defineProperty(f.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (f.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(f.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (f.isBuffer(this)) return this.byteOffset;
            },
          }),
          (f.poolSize = 8192),
          (f.from = function (e, t, n) {
            return c(e, t, n);
          }),
          Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(f, Uint8Array),
          (f.alloc = function (e, t, n) {
            return (function (e, t, n) {
              return a(e), e <= 0 ? u(e) : void 0 !== t ? ("string" == typeof n ? u(e).fill(t, n) : u(e).fill(t)) : u(e);
            })(e, t, n);
          }),
          (f.allocUnsafe = function (e) {
            return h(e);
          }),
          (f.allocUnsafeSlow = function (e) {
            return h(e);
          }),
          (f.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== f.prototype;
          }),
          (f.compare = function (e, t) {
            if ((Y(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), Y(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t)))
              throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            let n = e.length,
              r = t.length;
            for (let o = 0, i = Math.min(n, r); o < i; ++o)
              if (e[o] !== t[o]) {
                (n = e[o]), (r = t[o]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (f.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (f.concat = function (e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return f.alloc(0);
            let n;
            if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            const r = f.allocUnsafe(t);
            let o = 0;
            for (n = 0; n < e.length; ++n) {
              let t = e[n];
              if (Y(t, Uint8Array)) o + t.length > r.length ? (f.isBuffer(t) || (t = f.from(t)), t.copy(r, o)) : Uint8Array.prototype.set.call(r, t, o);
              else {
                if (!f.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                t.copy(r, o);
              }
              o += t.length;
            }
            return r;
          }),
          (f.byteLength = g),
          (f.prototype._isBuffer = !0),
          (f.prototype.swap16 = function () {
            const e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) b(this, t, t + 1);
            return this;
          }),
          (f.prototype.swap32 = function () {
            const e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
            return this;
          }),
          (f.prototype.swap64 = function () {
            const e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
            return this;
          }),
          (f.prototype.toString = function () {
            const e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : y.apply(this, arguments);
          }),
          (f.prototype.toLocaleString = f.prototype.toString),
          (f.prototype.equals = function (e) {
            if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === f.compare(this, e);
          }),
          (f.prototype.inspect = function () {
            let e = "";
            const n = t.INSPECT_MAX_BYTES;
            return (
              (e = this.toString("hex", 0, n)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > n && (e += " ... "),
              "<Buffer " + e + ">"
            );
          }),
          i && (f.prototype[i] = f.prototype.inspect),
          (f.prototype.compare = function (e, t, n, r, o) {
            if ((Y(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)))
              throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === o && (o = this.length),
              t < 0 || n > e.length || r < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= o && t >= n) return 0;
            if (r >= o) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            let i = (o >>>= 0) - (r >>>= 0),
              s = (n >>>= 0) - (t >>>= 0);
            const u = Math.min(i, s),
              c = this.slice(r, o),
              a = e.slice(t, n);
            for (let e = 0; e < u; ++e)
              if (c[e] !== a[e]) {
                (i = c[e]), (s = a[e]);
                break;
              }
            return i < s ? -1 : s < i ? 1 : 0;
          }),
          (f.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (f.prototype.indexOf = function (e, t, n) {
            return m(this, e, t, n, !0);
          }),
          (f.prototype.lastIndexOf = function (e, t, n) {
            return m(this, e, t, n, !1);
          }),
          (f.prototype.write = function (e, t, n, r) {
            if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
            else if (void 0 === n && "string" == typeof t) (r = t), (n = this.length), (t = 0);
            else {
              if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
            }
            const o = this.length - t;
            if (((void 0 === n || n > o) && (n = o), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            let i = !1;
            for (;;)
              switch (r) {
                case "hex":
                  return w(this, e, t, n);
                case "utf8":
                case "utf-8":
                  return E(this, e, t, n);
                case "ascii":
                case "latin1":
                case "binary":
                  return v(this, e, t, n);
                case "base64":
                  return I(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return L(this, e, t, n);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (i = !0);
              }
          }),
          (f.prototype.toJSON = function () {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        const _ = 4096;
        function T(e, t, n) {
          let r = "";
          n = Math.min(e.length, n);
          for (let o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
          return r;
        }
        function A(e, t, n) {
          let r = "";
          n = Math.min(e.length, n);
          for (let o = t; o < n; ++o) r += String.fromCharCode(e[o]);
          return r;
        }
        function O(e, t, n) {
          const r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
          let o = "";
          for (let r = t; r < n; ++r) o += Z[e[r]];
          return o;
        }
        function x(e, t, n) {
          const r = e.slice(t, n);
          let o = "";
          for (let e = 0; e < r.length - 1; e += 2) o += String.fromCharCode(r[e] + 256 * r[e + 1]);
          return o;
        }
        function S(e, t, n) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
        }
        function N(e, t, n, r, o, i) {
          if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError("Index out of range");
        }
        function j(e, t, n, r, o) {
          F(t, r, o, e, n, 7);
          let i = Number(t & BigInt(4294967295));
          (e[n++] = i), (i >>= 8), (e[n++] = i), (i >>= 8), (e[n++] = i), (i >>= 8), (e[n++] = i);
          let s = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (e[n++] = s), (s >>= 8), (e[n++] = s), (s >>= 8), (e[n++] = s), (s >>= 8), (e[n++] = s), n;
        }
        function M(e, t, n, r, o) {
          F(t, r, o, e, n, 7);
          let i = Number(t & BigInt(4294967295));
          (e[n + 7] = i), (i >>= 8), (e[n + 6] = i), (i >>= 8), (e[n + 5] = i), (i >>= 8), (e[n + 4] = i);
          let s = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (e[n + 3] = s), (s >>= 8), (e[n + 2] = s), (s >>= 8), (e[n + 1] = s), (s >>= 8), (e[n] = s), n + 8;
        }
        function P(e, t, n, r, o, i) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function k(e, t, n, r, i) {
          return (t = +t), (n >>>= 0), i || P(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4;
        }
        function R(e, t, n, r, i) {
          return (t = +t), (n >>>= 0), i || P(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8;
        }
        (f.prototype.slice = function (e, t) {
          const n = this.length;
          (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
          const r = this.subarray(e, t);
          return Object.setPrototypeOf(r, f.prototype), r;
        }),
          (f.prototype.readUintLE = f.prototype.readUIntLE =
            function (e, t, n) {
              (e >>>= 0), (t >>>= 0), n || S(e, t, this.length);
              let r = this[e],
                o = 1,
                i = 0;
              for (; ++i < t && (o *= 256); ) r += this[e + i] * o;
              return r;
            }),
          (f.prototype.readUintBE = f.prototype.readUIntBE =
            function (e, t, n) {
              (e >>>= 0), (t >>>= 0), n || S(e, t, this.length);
              let r = this[e + --t],
                o = 1;
              for (; t > 0 && (o *= 256); ) r += this[e + --t] * o;
              return r;
            }),
          (f.prototype.readUint8 = f.prototype.readUInt8 =
            function (e, t) {
              return (e >>>= 0), t || S(e, 1, this.length), this[e];
            }),
          (f.prototype.readUint16LE = f.prototype.readUInt16LE =
            function (e, t) {
              return (e >>>= 0), t || S(e, 2, this.length), this[e] | (this[e + 1] << 8);
            }),
          (f.prototype.readUint16BE = f.prototype.readUInt16BE =
            function (e, t) {
              return (e >>>= 0), t || S(e, 2, this.length), (this[e] << 8) | this[e + 1];
            }),
          (f.prototype.readUint32LE = f.prototype.readUInt32LE =
            function (e, t) {
              return (e >>>= 0), t || S(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
            }),
          (f.prototype.readUint32BE = f.prototype.readUInt32BE =
            function (e, t) {
              return (e >>>= 0), t || S(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
            }),
          (f.prototype.readBigUInt64LE = K(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || H(e, this.length - 8);
            const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              o = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
            return BigInt(r) + (BigInt(o) << BigInt(32));
          })),
          (f.prototype.readBigUInt64BE = K(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || H(e, this.length - 8);
            const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
              o = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
            return (BigInt(r) << BigInt(32)) + BigInt(o);
          })),
          (f.prototype.readIntLE = function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || S(e, t, this.length);
            let r = this[e],
              o = 1,
              i = 0;
            for (; ++i < t && (o *= 256); ) r += this[e + i] * o;
            return (o *= 128), r >= o && (r -= Math.pow(2, 8 * t)), r;
          }),
          (f.prototype.readIntBE = function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || S(e, t, this.length);
            let r = t,
              o = 1,
              i = this[e + --r];
            for (; r > 0 && (o *= 256); ) i += this[e + --r] * o;
            return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i;
          }),
          (f.prototype.readInt8 = function (e, t) {
            return (e >>>= 0), t || S(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
          }),
          (f.prototype.readInt16LE = function (e, t) {
            (e >>>= 0), t || S(e, 2, this.length);
            const n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (f.prototype.readInt16BE = function (e, t) {
            (e >>>= 0), t || S(e, 2, this.length);
            const n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (f.prototype.readInt32LE = function (e, t) {
            return (e >>>= 0), t || S(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
          }),
          (f.prototype.readInt32BE = function (e, t) {
            return (e >>>= 0), t || S(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
          }),
          (f.prototype.readBigInt64LE = K(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || H(e, this.length - 8);
            const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
            return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24);
          })),
          (f.prototype.readBigInt64BE = K(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || H(e, this.length - 8);
            const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
            return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n);
          })),
          (f.prototype.readFloatLE = function (e, t) {
            return (e >>>= 0), t || S(e, 4, this.length), o.read(this, e, !0, 23, 4);
          }),
          (f.prototype.readFloatBE = function (e, t) {
            return (e >>>= 0), t || S(e, 4, this.length), o.read(this, e, !1, 23, 4);
          }),
          (f.prototype.readDoubleLE = function (e, t) {
            return (e >>>= 0), t || S(e, 8, this.length), o.read(this, e, !0, 52, 8);
          }),
          (f.prototype.readDoubleBE = function (e, t) {
            return (e >>>= 0), t || S(e, 8, this.length), o.read(this, e, !1, 52, 8);
          }),
          (f.prototype.writeUintLE = f.prototype.writeUIntLE =
            function (e, t, n, r) {
              (e = +e), (t >>>= 0), (n >>>= 0), r || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
              let o = 1,
                i = 0;
              for (this[t] = 255 & e; ++i < n && (o *= 256); ) this[t + i] = (e / o) & 255;
              return t + n;
            }),
          (f.prototype.writeUintBE = f.prototype.writeUIntBE =
            function (e, t, n, r) {
              (e = +e), (t >>>= 0), (n >>>= 0), r || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
              let o = n - 1,
                i = 1;
              for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = (e / i) & 255;
              return t + n;
            }),
          (f.prototype.writeUint8 = f.prototype.writeUInt8 =
            function (e, t, n) {
              return (e = +e), (t >>>= 0), n || N(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
            }),
          (f.prototype.writeUint16LE = f.prototype.writeUInt16LE =
            function (e, t, n) {
              return (e = +e), (t >>>= 0), n || N(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
            }),
          (f.prototype.writeUint16BE = f.prototype.writeUInt16BE =
            function (e, t, n) {
              return (e = +e), (t >>>= 0), n || N(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
            }),
          (f.prototype.writeUint32LE = f.prototype.writeUInt32LE =
            function (e, t, n) {
              return (
                (e = +e), (t >>>= 0), n || N(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e), t + 4
              );
            }),
          (f.prototype.writeUint32BE = f.prototype.writeUInt32BE =
            function (e, t, n) {
              return (
                (e = +e), (t >>>= 0), n || N(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4
              );
            }),
          (f.prototype.writeBigUInt64LE = K(function (e, t = 0) {
            return j(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (f.prototype.writeBigUInt64BE = K(function (e, t = 0) {
            return M(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (f.prototype.writeIntLE = function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              const r = Math.pow(2, 8 * n - 1);
              N(this, e, t, n, r - 1, -r);
            }
            let o = 0,
              i = 1,
              s = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256); ) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), (this[t + o] = (((e / i) >> 0) - s) & 255);
            return t + n;
          }),
          (f.prototype.writeIntBE = function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              const r = Math.pow(2, 8 * n - 1);
              N(this, e, t, n, r - 1, -r);
            }
            let o = n - 1,
              i = 1,
              s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), (this[t + o] = (((e / i) >> 0) - s) & 255);
            return t + n;
          }),
          (f.prototype.writeInt8 = function (e, t, n) {
            return (e = +e), (t >>>= 0), n || N(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
          }),
          (f.prototype.writeInt16LE = function (e, t, n) {
            return (e = +e), (t >>>= 0), n || N(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
          }),
          (f.prototype.writeInt16BE = function (e, t, n) {
            return (e = +e), (t >>>= 0), n || N(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
          }),
          (f.prototype.writeInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || N(this, e, t, 4, 2147483647, -2147483648),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              (this[t + 2] = e >>> 16),
              (this[t + 3] = e >>> 24),
              t + 4
            );
          }),
          (f.prototype.writeInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || N(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
          (f.prototype.writeBigInt64LE = K(function (e, t = 0) {
            return j(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })),
          (f.prototype.writeBigInt64BE = K(function (e, t = 0) {
            return M(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })),
          (f.prototype.writeFloatLE = function (e, t, n) {
            return k(this, e, t, !0, n);
          }),
          (f.prototype.writeFloatBE = function (e, t, n) {
            return k(this, e, t, !1, n);
          }),
          (f.prototype.writeDoubleLE = function (e, t, n) {
            return R(this, e, t, !0, n);
          }),
          (f.prototype.writeDoubleBE = function (e, t, n) {
            return R(this, e, t, !1, n);
          }),
          (f.prototype.copy = function (e, t, n, r) {
            if (!f.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if ((n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n)) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            const o = r - n;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), o;
          }),
          (f.prototype.fill = function (e, t, n, r) {
            if ("string" == typeof e) {
              if (("string" == typeof t ? ((r = t), (t = 0), (n = this.length)) : "string" == typeof n && ((r = n), (n = this.length)), void 0 !== r && "string" != typeof r))
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !f.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
              if (1 === e.length) {
                const t = e.charCodeAt(0);
                (("utf8" === r && t < 128) || "latin1" === r) && (e = t);
              }
            } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            let o;
            if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), "number" == typeof e)) for (o = t; o < n; ++o) this[o] = e;
            else {
              const i = f.isBuffer(e) ? e : f.from(e, r),
                s = i.length;
              if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
              for (o = 0; o < n - t; ++o) this[o + t] = i[o % s];
            }
            return this;
          });
        const V = {};
        function D(e, t, n) {
          V[e] = class extends n {
            constructor() {
              super(),
                Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: !0, configurable: !0 }),
                (this.name = `${this.name} [${e}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return e;
            }
            set code(e) {
              Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: e, writable: !0 });
            }
            toString() {
              return `${this.name} [${e}]: ${this.message}`;
            }
          };
        }
        function $(e) {
          let t = "",
            n = e.length;
          const r = "-" === e[0] ? 1 : 0;
          for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
          return `${e.slice(0, n)}${t}`;
        }
        function F(e, t, n, r, o, i) {
          if (e > n || e < t) {
            const r = "bigint" == typeof t ? "n" : "";
            let o;
            throw (
              ((o =
                i > 3
                  ? 0 === t || t === BigInt(0)
                    ? `>= 0${r} and < 2${r} ** ${8 * (i + 1)}${r}`
                    : `>= -(2${r} ** ${8 * (i + 1) - 1}${r}) and < 2 ** ${8 * (i + 1) - 1}${r}`
                  : `>= ${t}${r} and <= ${n}${r}`),
              new V.ERR_OUT_OF_RANGE("value", o, e))
            );
          }
          !(function (e, t, n) {
            z(t, "offset"), (void 0 !== e[t] && void 0 !== e[t + n]) || H(t, e.length - (n + 1));
          })(r, o, i);
        }
        function z(e, t) {
          if ("number" != typeof e) throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
        }
        function H(e, t, n) {
          if (Math.floor(e) !== e) throw (z(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
          if (t < 0) throw new V.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e);
        }
        D(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (e) {
            return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          D(
            "ERR_INVALID_ARG_TYPE",
            function (e, t) {
              return `The "${e}" argument must be of type number. Received type ${typeof t}`;
            },
            TypeError
          ),
          D(
            "ERR_OUT_OF_RANGE",
            function (e, t, n) {
              let r = `The value of "${e}" is out of range.`,
                o = n;
              return (
                Number.isInteger(n) && Math.abs(n) > 2 ** 32
                  ? (o = $(String(n)))
                  : "bigint" == typeof n && ((o = String(n)), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (o = $(o)), (o += "n")),
                (r += ` It must be ${t}. Received ${o}`),
                r
              );
            },
            RangeError
          );
        const W = /[^+/0-9A-Za-z-_]/g;
        function q(e, t) {
          let n;
          t = t || 1 / 0;
          const r = e.length;
          let o = null;
          const i = [];
          for (let s = 0; s < r; ++s) {
            if (((n = e.charCodeAt(s)), n > 55295 && n < 57344)) {
              if (!o) {
                if (n > 56319) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === r) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && i.push(239, 191, 189), (o = n);
                continue;
              }
              n = 65536 + (((o - 55296) << 10) | (n - 56320));
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), n < 128)) {
              if ((t -= 1) < 0) break;
              i.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              i.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
            }
          }
          return i;
        }
        function X(e) {
          return r.toByteArray(
            (function (e) {
              if ((e = (e = e.split("=")[0]).trim().replace(W, "")).length < 2) return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function G(e, t, n, r) {
          let o;
          for (o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
          return o;
        }
        function Y(e, t) {
          return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
        }
        function J(e) {
          return e != e;
        }
        const Z = (function () {
          const e = "0123456789abcdef",
            t = new Array(256);
          for (let n = 0; n < 16; ++n) {
            const r = 16 * n;
            for (let o = 0; o < 16; ++o) t[r + o] = e[n] + e[o];
          }
          return t;
        })();
        function K(e) {
          return "undefined" == typeof BigInt ? Q : e;
        }
        function Q() {
          throw new Error("BigInt not supported");
        }
      },
      645: (e, t) => {
        (t.read = function (e, t, n, r, o) {
          var i,
            s,
            u = 8 * o - r - 1,
            f = (1 << u) - 1,
            c = f >> 1,
            a = -7,
            h = n ? o - 1 : 0,
            l = n ? -1 : 1,
            d = e[t + h];
          for (h += l, i = d & ((1 << -a) - 1), d >>= -a, a += u; a > 0; i = 256 * i + e[t + h], h += l, a -= 8);
          for (s = i & ((1 << -a) - 1), i >>= -a, a += r; a > 0; s = 256 * s + e[t + h], h += l, a -= 8);
          if (0 === i) i = 1 - c;
          else {
            if (i === f) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, r)), (i -= c);
          }
          return (d ? -1 : 1) * s * Math.pow(2, i - r);
        }),
          (t.write = function (e, t, n, r, o, i) {
            var s,
              u,
              f,
              c = 8 * i - o - 1,
              a = (1 << c) - 1,
              h = a >> 1,
              l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              d = r ? 0 : i - 1,
              p = r ? 1 : -1,
              g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((u = isNaN(t) ? 1 : 0), (s = a))
                  : ((s = Math.floor(Math.log(t) / Math.LN2)),
                    t * (f = Math.pow(2, -s)) < 1 && (s--, (f *= 2)),
                    (t += s + h >= 1 ? l / f : l * Math.pow(2, 1 - h)) * f >= 2 && (s++, (f /= 2)),
                    s + h >= a ? ((u = 0), (s = a)) : s + h >= 1 ? ((u = (t * f - 1) * Math.pow(2, o)), (s += h)) : ((u = t * Math.pow(2, h - 1) * Math.pow(2, o)), (s = 0)));
              o >= 8;
              e[n + d] = 255 & u, d += p, u /= 256, o -= 8
            );
            for (s = (s << o) | u, c += o; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8);
            e[n + d - p] |= 128 * g;
          });
      },
      413: (e, t, n) => {
        "use strict";
        var r = t,
          o = n(764).Buffer,
          i = n(435);
        (r.toBuffer = function (e, t, n) {
          var r;
          if (((n = ~~n), this.isV4Format(e)))
            (r = t || new o(n + 4)),
              e.split(/\./g).map(function (e) {
                r[n++] = 255 & parseInt(e, 10);
              });
          else if (this.isV6Format(e)) {
            var i,
              s = e.split(":", 8);
            for (i = 0; i < s.length; i++) {
              var u;
              this.isV4Format(s[i]) && ((u = this.toBuffer(s[i])), (s[i] = u.slice(0, 2).toString("hex"))), u && ++i < 8 && s.splice(i, 0, u.slice(2, 4).toString("hex"));
            }
            if ("" === s[0]) for (; s.length < 8; ) s.unshift("0");
            else if ("" === s[s.length - 1]) for (; s.length < 8; ) s.push("0");
            else if (s.length < 8) {
              for (i = 0; i < s.length && "" !== s[i]; i++);
              var f = [i, 1];
              for (i = 9 - s.length; i > 0; i--) f.push("0");
              s.splice.apply(s, f);
            }
            for (r = t || new o(n + 16), i = 0; i < s.length; i++) {
              var c = parseInt(s[i], 16);
              (r[n++] = (c >> 8) & 255), (r[n++] = 255 & c);
            }
          }
          if (!r) throw Error("Invalid ip address: " + e);
          return r;
        }),
          (r.toString = function (e, t, n) {
            t = ~~t;
            var r = [];
            if (4 === (n = n || e.length - t)) {
              for (var o = 0; o < n; o++) r.push(e[t + o]);
              r = r.join(".");
            } else if (16 === n) {
              for (o = 0; o < n; o += 2) r.push(e.readUInt16BE(t + o).toString(16));
              r = (r = (r = r.join(":")).replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3")).replace(/:{3,4}/, "::");
            }
            return r;
          });
        var s = /^(\d{1,3}\.){3,3}\d{1,3}$/,
          u = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;
        function f(e) {
          return e ? e.toLowerCase() : "ipv4";
        }
        (r.isV4Format = function (e) {
          return s.test(e);
        }),
          (r.isV6Format = function (e) {
            return u.test(e);
          }),
          (r.fromPrefixLen = function (e, t) {
            var n = 4;
            "ipv6" === (t = e > 32 ? "ipv6" : f(t)) && (n = 16);
            for (var i = new o(n), s = 0, u = i.length; s < u; ++s) {
              var c = 8;
              e < 8 && (c = e), (e -= c), (i[s] = 255 & ~(255 >> c));
            }
            return r.toString(i);
          }),
          (r.mask = function (e, t) {
            (e = r.toBuffer(e)), (t = r.toBuffer(t));
            var n = new o(Math.max(e.length, t.length)),
              i = 0;
            if (e.length === t.length) for (i = 0; i < e.length; i++) n[i] = e[i] & t[i];
            else if (4 === t.length) for (i = 0; i < t.length; i++) n[i] = e[e.length - 4 + i] & t[i];
            else {
              for (i = 0; i < n.length - 6; i++) n[i] = 0;
              for (n[10] = 255, n[11] = 255, i = 0; i < e.length; i++) n[i + 12] = e[i] & t[i + 12];
              i += 12;
            }
            for (; i < n.length; i++) n[i] = 0;
            return r.toString(n);
          }),
          (r.cidr = function (e) {
            var t = e.split("/"),
              n = t[0];
            if (2 !== t.length) throw new Error("invalid CIDR subnet: " + n);
            var o = r.fromPrefixLen(parseInt(t[1], 10));
            return r.mask(n, o);
          }),
          (r.subnet = function (e, t) {
            for (var n = r.toLong(r.mask(e, t)), o = r.toBuffer(t), i = 0, s = 0; s < o.length; s++)
              if (255 === o[s]) i += 8;
              else for (var u = 255 & o[s]; u; ) (u = (u << 1) & 255), i++;
            var f = Math.pow(2, 32 - i);
            return {
              networkAddress: r.fromLong(n),
              firstAddress: f <= 2 ? r.fromLong(n) : r.fromLong(n + 1),
              lastAddress: f <= 2 ? r.fromLong(n + f - 1) : r.fromLong(n + f - 2),
              broadcastAddress: r.fromLong(n + f - 1),
              subnetMask: t,
              subnetMaskLength: i,
              numHosts: f <= 2 ? f : f - 2,
              length: f,
              contains: function (e) {
                return n === r.toLong(r.mask(e, t));
              },
            };
          }),
          (r.cidrSubnet = function (e) {
            var t = e.split("/"),
              n = t[0];
            if (2 !== t.length) throw new Error("invalid CIDR subnet: " + n);
            var o = r.fromPrefixLen(parseInt(t[1], 10));
            return r.subnet(n, o);
          }),
          (r.not = function (e) {
            for (var t = r.toBuffer(e), n = 0; n < t.length; n++) t[n] = 255 ^ t[n];
            return r.toString(t);
          }),
          (r.or = function (e, t) {
            if (((e = r.toBuffer(e)), (t = r.toBuffer(t)), e.length === t.length)) {
              for (var n = 0; n < e.length; ++n) e[n] |= t[n];
              return r.toString(e);
            }
            var o = e,
              i = t;
            t.length > e.length && ((o = t), (i = e));
            var s = o.length - i.length;
            for (n = s; n < o.length; ++n) o[n] |= i[n - s];
            return r.toString(o);
          }),
          (r.isEqual = function (e, t) {
            if (((e = r.toBuffer(e)), (t = r.toBuffer(t)), e.length === t.length)) {
              for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
              return !0;
            }
            if (4 === t.length) {
              var o = t;
              (t = e), (e = o);
            }
            for (n = 0; n < 10; n++) if (0 !== t[n]) return !1;
            var i = t.readUInt16BE(10);
            if (0 !== i && 65535 !== i) return !1;
            for (n = 0; n < 4; n++) if (e[n] !== t[n + 12]) return !1;
            return !0;
          }),
          (r.isPrivate = function (e) {
            return (
              /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) ||
              /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) ||
              /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) ||
              /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) ||
              /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) ||
              /^f[cd][0-9a-f]{2}:/i.test(e) ||
              /^fe80:/i.test(e) ||
              /^::1$/.test(e) ||
              /^::$/.test(e)
            );
          }),
          (r.isPublic = function (e) {
            return !r.isPrivate(e);
          }),
          (r.isLoopback = function (e) {
            return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(e) || /^fe80::1$/.test(e) || /^::1$/.test(e) || /^::$/.test(e);
          }),
          (r.loopback = function (e) {
            if ("ipv4" !== (e = f(e)) && "ipv6" !== e) throw new Error("family must be ipv4 or ipv6");
            return "ipv4" === e ? "127.0.0.1" : "fe80::1";
          }),
          (r.address = function (e, t) {
            var n,
              o = i.networkInterfaces();
            if (((t = f(t)), e && "private" !== e && "public" !== e)) {
              var s = o[e].filter(function (e) {
                return e.family.toLowerCase() === t;
              });
              if (0 === s.length) return;
              return s[0].address;
            }
            return (n = Object.keys(o)
              .map(function (n) {
                var i = o[n].filter(function (n) {
                  return (
                    (n.family = n.family.toLowerCase()), n.family === t && !r.isLoopback(n.address) && (!e || ("public" === e ? r.isPrivate(n.address) : r.isPublic(n.address)))
                  );
                });
                return i.length ? i[0].address : void 0;
              })
              .filter(Boolean)).length
              ? n[0]
              : r.loopback(t);
          }),
          (r.toLong = function (e) {
            var t = 0;
            return (
              e.split(".").forEach(function (e) {
                (t <<= 8), (t += parseInt(e));
              }),
              t >>> 0
            );
          }),
          (r.fromLong = function (e) {
            return (e >>> 24) + "." + ((e >> 16) & 255) + "." + ((e >> 8) & 255) + "." + (255 & e);
          });
      },
      435: (e, t) => {
        (t.endianness = function () {
          return "LE";
        }),
          (t.hostname = function () {
            return "undefined" != typeof location ? location.hostname : "";
          }),
          (t.loadavg = function () {
            return [];
          }),
          (t.uptime = function () {
            return 0;
          }),
          (t.freemem = function () {
            return Number.MAX_VALUE;
          }),
          (t.totalmem = function () {
            return Number.MAX_VALUE;
          }),
          (t.cpus = function () {
            return [];
          }),
          (t.type = function () {
            return "Browser";
          }),
          (t.release = function () {
            return "undefined" != typeof navigator ? navigator.appVersion : "";
          }),
          (t.networkInterfaces = t.getNetworkInterfaces =
            function () {
              return {};
            }),
          (t.arch = function () {
            return "javascript";
          }),
          (t.platform = function () {
            return "browser";
          }),
          (t.tmpdir = t.tmpDir =
            function () {
              return "/tmp";
            }),
          (t.EOL = "\n"),
          (t.homedir = function () {
            return "/";
          });
      },
      899: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BooleanCodec = void 0);
        const o = r(n(607));
        t.BooleanCodec = new (class {
          byteCodec = o.default.Number.UInt8;
          encodeBytes = 1;
          decodeBytes = 1;
          encodingLength = (e) => 1;
          encode = (e, t, n) => this.byteCodec.encode(+!!e, t, n);
          decode = (e, t, n) => !!this.byteCodec.decode(e, t, n);
        })();
      },
      952: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.InventoriesCodec = void 0);
        const o = r(n(607)),
          i = o.default.Object([
            ["type", o.default.Number.Int32LE],
            ["hash", o.default.Buffer(32)],
          ]);
        t.InventoriesCodec = o.default.VarArray(o.default.VarUIntBitcoin, i);
      },
      219: function (e, t, n) {
        "use strict";
        var r = n(764).Buffer,
          o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
              return i(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.IpCodec = void 0);
        const u = s(n(413));
        t.IpCodec = class {
          IPV4_PREFIX = r.from("00000000000000000000ffff", "hex");
          encodeBytes = 16;
          decodeBytes = 16;
          encodingLength = (e) => 16;
          encode = (e, t, n) => {
            if ((t || (t = r.alloc(16)), n || (n = 0), n + 16 > t.length)) throw new RangeError("destination buffer is too small");
            if (u.isV4Format(e)) this.IPV4_PREFIX.copy(t, n), u.toBuffer(e, t, n + 12);
            else {
              if (!u.isV6Format(e)) throw Error("Invalid IP address value");
              u.toBuffer(e, t, n);
            }
            return t;
          };
          decode = (e, t, n) => {
            if ((t || (t = 0), n || (n = e.length), t + 16 > n)) throw new RangeError("not enough data for decode");
            let r = e.slice(t, t + 12).equals(this.IPV4_PREFIX) ? 12 : 0;
            return u.toString(e.slice(t + r, t + 16));
          };
        };
      },
      509: function (e, t, n) {
        "use strict";
        var r = n(764).Buffer,
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MessageCommandCodec = void 0);
        const i = o(n(607));
        t.MessageCommandCodec = class {
          buffer12 = i.default.Buffer(12);
          encodeBytes;
          decodeBytes;
          encodingLength;
          constructor() {
            (this.encodeBytes = this.buffer12.encodeBytes), (this.decodeBytes = this.buffer12.decodeBytes), (this.encodingLength = this.buffer12.encodingLength);
          }
          encode = (e, t, n) => {
            const o = r.from(e, "ascii"),
              i = r.alloc(12);
            o.copy(i, 0);
            for (let e = o.length; e < i.length; ++e) i[e] = 0;
            return this.buffer12.encode(i, t, n);
          };
          decode = (e, t, n) => {
            const r = this.buffer12.decode(e, t, n);
            let o;
            for (o = 0; 0 !== r[o]; ++o) if (11 === o) throw Error("Non-terminated string. Are you sure this is a Bitcoin packet?");
            for (let e = o; e < r.length; ++e) if (0 !== r[e]) throw Error("Found a non-null byte after the first null byte in a null-padded string");
            return r.slice(0, o).toString("ascii");
          };
        };
      },
      241: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MessageStructureCodec = void 0);
        const o = r(n(607)),
          i = n(231),
          s = n(509),
          u = o.default.Object([
            ["magic", o.default.Number.UInt32LE],
            ["command", new s.MessageCommandCodec()],
            ["length", o.default.Number.UInt32LE],
            ["checksum", o.default.Buffer(4)],
            ["payload", o.default.AllBuffer],
          ]);
        t.MessageStructureCodec = { decode: (e) => (0, i.buffer2hex)(u.decode((0, i.hex2buffer)(e))), encode: (e) => (0, i.buffer2hex)(u.encode((0, i.hex2buffer)(e))) };
      },
      189: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.TxCodec = void 0);
        const o = n(893),
          i = n(231),
          s = n(563),
          u = n(39);
        t.TxCodec = {
          encode: (e) => {
            const t = (0, i.hex2buffer)(e);
            let n = r.alloc(0);
            if (void 0 === e.marker) n = s.Tx.encode(t);
            else {
              const t = new u.WitnessLocktimeCodec(e.txIn.length),
                r = e.txIn.map((e) => e.witnessScripts),
                f = t.encode((0, i.hex2buffer)({ witnessScriptsArray: r, lockTime: e.lockTime })),
                c = (0, i.buffer2hex)(f),
                a = (0, o.toTxSegwitBase)(e, c);
              n = s.TxWitnessBase.encode((0, i.hex2buffer)(a));
            }
            return (0, i.buffer2hex)(n);
          },
          decode: (e) => {
            const t = (0, i.hex2buffer)(e);
            let n;
            if ("0001" !== e.substr(8, 4)) return (n = s.Tx.decode(t)), (0, i.buffer2hex)(n);
            {
              const e = s.TxWitnessBase.decode(t),
                n = (0, i.buffer2hex)(e),
                r = new u.WitnessLocktimeCodec(n.txIn.length).decode((0, i.hex2buffer)(n.witnessScripts_lockTime)),
                f = (0, i.buffer2hex)(r),
                c = { version: n.version, marker: n.marker, flag: n.flag, txIn: n.txIn, txOut: n.txOut, witnessScriptsArray: f.witnessScriptsArray, lockTime: f.lockTime };
              return (0, o.toTxSegwit)(c);
            }
          },
        };
      },
      503: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.VersionCodec = void 0);
        const o = r(n(607)),
          i = n(899),
          s = n(219),
          u = o.default.Object([
            ["services", o.default.Buffer(8)],
            ["iPAddress", new s.IpCodec()],
            ["port", o.default.Number.UInt16BE],
          ]);
        t.VersionCodec = o.default.Object([
          ["version", o.default.Number.UInt32LE],
          ["services", o.default.Buffer(8)],
          ["timestamp", o.default.Number.UInt64LE],
          ["addrRecv", u],
          ["addrFrom", u],
          ["nonce", o.default.Buffer(8)],
          ["userAgent", o.default.VarString(o.default.VarUIntBitcoin, "ascii")],
          ["startHeight", o.default.Number.Int32LE],
          ["relay", i.BooleanCodec],
        ]);
      },
      39: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WitnessLocktimeCodec = void 0);
        const o = r(n(607)),
          i = n(231);
        t.WitnessLocktimeCodec = class {
          witnessLocktimeData = o.default.Object([
            ["witnessScriptsArray", o.default.VarArray(o.default.VarUIntBitcoin, o.default.VarArray(o.default.VarUIntBitcoin, o.default.VarBuffer(o.default.VarUIntBitcoin)))],
            ["lockTime", o.default.Number.UInt32LE],
          ]);
          inputsCount;
          encodeBytes;
          decodeBytes;
          encodingLength;
          constructor(e) {
            (this.inputsCount = e),
              (this.encodeBytes = this.witnessLocktimeData.encodeBytes),
              (this.decodeBytes = this.witnessLocktimeData.decodeBytes),
              (this.encodingLength = this.witnessLocktimeData.encodingLength);
          }
          encode = (e, t, n) => {
            const r = this.witnessLocktimeData.encode(e, t, n).slice(1);
            return (
              (this.encodeBytes = this.witnessLocktimeData.encodeBytes),
              (this.decodeBytes = this.witnessLocktimeData.decodeBytes),
              (this.encodingLength = this.witnessLocktimeData.encodingLength),
              r
            );
          };
          decode = (e, t, n) => {
            const r = this.inputsCount.toString(16).padStart(2, "0"),
              o = (0, i.buffer2hex)(e),
              s = (0, i.hex2buffer)(r + o),
              u = this.witnessLocktimeData.decode(s, t, n);
            return (
              (this.encodeBytes = this.witnessLocktimeData.encodeBytes),
              (this.decodeBytes = this.witnessLocktimeData.decodeBytes),
              (this.encodingLength = this.witnessLocktimeData.encodingLength),
              u
            );
          };
        };
      },
      893: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.toTxSegwitBase = t.toTxSegwitParsed = t.toTxSegwit = void 0),
          (t.toTxSegwit = (e) => {
            const t = { version: e.version, marker: e.marker, flag: e.flag, txIn: [], txOut: e.txOut, lockTime: e.lockTime };
            return (
              e.txIn.forEach((n, r) => {
                t.txIn.push({ previousOutput: n.previousOutput, signatureScript: n.signatureScript, witnessScripts: e.witnessScriptsArray[r], sequence: n.sequence });
              }),
              t
            );
          }),
          (t.toTxSegwitParsed = (e) => {
            const t = { version: e.version, marker: e.marker, flag: e.flag, txIn: [], txOut: e.txOut, witnessScriptsArray: [], lockTime: e.lockTime };
            return (
              e.txIn.forEach((e, n) => {
                t.txIn.push({ previousOutput: e.previousOutput, signatureScript: e.signatureScript, sequence: e.sequence }), t.witnessScriptsArray.push(e.witnessScripts);
              }),
              t
            );
          }),
          (t.toTxSegwitBase = (e, t) => {
            const n = { version: e.version, marker: e.marker, flag: e.flag, txIn: [], txOut: e.txOut, witnessScripts_lockTime: t, lockTime: e.lockTime };
            return (
              e.txIn.forEach((e, t) => {
                n.txIn.push({ previousOutput: e.previousOutput, signatureScript: e.signatureScript, sequence: e.sequence });
              }),
              n
            );
          });
      },
      231: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        function o(e) {
          return e.length % 2 == 0 && /^[0-9a-f]*$/.test(e.toLowerCase());
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hex2buffer = t.isHex = t.buffer2hex = void 0),
          (t.buffer2hex = function e(t) {
            if (r.isBuffer(t)) return t.toString("hex");
            if (Array.isArray(t)) t = t.map(e);
            else if ("object" == typeof t) for (var n in t) t[n] = e(t[n]);
            return t;
          }),
          (t.isHex = o),
          (t.hex2buffer = function e(t) {
            if (r.isBuffer(t)) return t;
            if ("string" == typeof t && o(t)) return r.from(t, "hex");
            if ("object" == typeof t) for (var n in t) t[n] = e(t[n]);
            else Array.isArray(t) && (t = t.map(e));
            return t;
          });
      },
      563: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.blockHeader = t.TxWitnessBase = t.Tx = void 0);
        const o = r(n(607)),
          i = o.default.Number.UInt32LE,
          s = o.default.Object([
            { name: "hash", type: o.default.Buffer(32) },
            { name: "index", type: o.default.Number.UInt32LE },
          ]),
          u = o.default.Object([
            { name: "previousOutput", type: s },
            { name: "signatureScript", type: o.default.VarBuffer(o.default.VarUIntBitcoin) },
            { name: "sequence", type: o.default.Number.UInt32LE },
          ]),
          f = o.default.VarArray(o.default.VarUIntBitcoin, u),
          c = o.default.Object([
            { name: "value", type: o.default.Number.UInt64LE },
            { name: "pkScript", type: o.default.VarBuffer(o.default.VarUIntBitcoin) },
          ]),
          a = o.default.VarArray(o.default.VarUIntBitcoin, c),
          h = o.default.Number.UInt32LE;
        (t.Tx = o.default.Object([
          { name: "version", type: i },
          { name: "txIn", type: f },
          { name: "txOut", type: a },
          { name: "lockTime", type: h },
        ])),
          (t.TxWitnessBase = o.default.Object([
            { name: "version", type: i },
            { name: "marker", type: o.default.Byte },
            { name: "flag", type: o.default.Byte },
            { name: "txIn", type: f },
            { name: "txOut", type: a },
            { name: "witnessScripts_lockTime", type: o.default.AllBuffer },
          ])),
          (t.blockHeader = o.default.Object([
            { name: "version", type: o.default.Number.UInt32LE },
            { name: "previousBlockHeaderHash", type: o.default.Buffer(32) },
            { name: "merkleRootHash", type: o.default.Buffer(32) },
            { name: "time", type: o.default.Number.UInt32LE },
            { name: "nBits", type: o.default.Number.UInt32LE },
            { name: "nonce", type: o.default.Number.UInt32LE },
          ]));
      },
      607: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(960),
          o = n(68),
          i = n(157),
          s = n(483),
          u = n(193),
          f = n(759),
          c = n(129),
          a = n(161),
          h = n(5),
          l = n(513),
          d = n(492);
        t.default = {
          AllBuffer: new o.CAllBuffer(),
          Array: (e, t) => new i.CArray(e, t),
          Buffer: (e) => new s.CBuffer(e),
          Byte: new u.CNumber(r.NumberTypes.UInt8, 1),
          Number: {
            Int8: new u.CNumber(r.NumberTypes.Int8, 1),
            UInt8: new u.CNumber(r.NumberTypes.UInt8, 1),
            Int16BE: new u.CNumber(r.NumberTypes.Int16BE, 2),
            Int16LE: new u.CNumber(r.NumberTypes.Int16LE, 2),
            UInt16BE: new u.CNumber(r.NumberTypes.UInt16BE, 2),
            UInt16LE: new u.CNumber(r.NumberTypes.UInt16LE, 2),
            Int32BE: new u.CNumber(r.NumberTypes.Int32BE, 4),
            Int32LE: new u.CNumber(r.NumberTypes.Int32LE, 4),
            UInt32BE: new u.CNumber(r.NumberTypes.UInt32BE, 4),
            UInt32LE: new u.CNumber(r.NumberTypes.UInt32LE, 4),
            Int64BE: new u.CNumber(r.NumberTypes.Int64BE, 8),
            Int64LE: new u.CNumber(r.NumberTypes.Int64LE, 8),
            UInt64BE: new u.CNumber(r.NumberTypes.UInt64BE, 8),
            UInt64LE: new u.CNumber(r.NumberTypes.UInt64LE, 8),
            FloatBE: new u.CNumber(r.NumberTypes.FloatBE, 4),
            FloatLE: new u.CNumber(r.NumberTypes.FloatLE, 4),
            DoubleBE: new u.CNumber(r.NumberTypes.DoubleBE, 8),
            DoubleLE: new u.CNumber(r.NumberTypes.DoubleLE, 8),
          },
          Object: (e) => new f.CObject(e),
          String: (e, t = "utf8") => new c.CString(e, t),
          VarArray: (e, t) => new a.CVarArray(e, t),
          VarBuffer: (e) => new h.CVarBuffer(e),
          VarString: (e, t = "utf8") => new l.CVarString(e, t),
          VarUIntBitcoin: new d.CVarUIntBitcoin(),
        };
      },
      68: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CAllBuffer = void 0),
          (t.CAllBuffer = class {
            length;
            encodingLength = () => this.length;
            encodeBytes;
            decodeBytes;
            constructor() {
              (this.length = 0), (this.encodeBytes = 0), (this.decodeBytes = 0);
            }
            encode = (e, t, n = 0) => {
              if (!r.isBuffer(e)) throw new TypeError("value must be a Buffer instance");
              if (((this.length = e.length - n), !t)) return r.from(e);
              if (n + this.length > t.length) throw new RangeError("destination buffer is too small");
              return e.copy(t, n), t;
            };
            decode = (e, t = 0, n) => {
              if ((n || (n = e.length), (this.length = e.length - t), t + this.length > n)) throw new RangeError("not enough data for decode");
              return r.from(e.slice(t, t + this.length));
            };
          });
      },
      157: function (e, t, n) {
        "use strict";
        var r = n(764).Buffer,
          o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
              return i(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CArray = void 0);
        const u = s(n(882));
        t.CArray = class {
          length;
          anyCodec;
          calcLength = (e) => u.size(e, this.anyCodec.encodingLength);
          encodingLength = (e) => {
            if (void 0 === e) throw new TypeError("value must be an Array instance");
            if (e.length !== this.length) throw new RangeError("value.length is out of bounds");
            return this.calcLength(e);
          };
          encodeBytes;
          decodeBytes;
          constructor(e, t) {
            (this.length = e), (this.anyCodec = t), (this.encodeBytes = e), (this.decodeBytes = e);
          }
          encode = (e, t, n = 0) => {
            if (e.length !== this.length) throw new RangeError("value.length is out of bounds");
            t || (t = r.allocUnsafe(this.calcLength(e)));
            const o = this.anyCodec.encode,
              i = this.anyCodec.encodeBytes;
            return (
              (this.encodeBytes =
                u.size(
                  e,
                  function (e, n, r) {
                    return o(e, t, r), i;
                  },
                  n
                ) - n),
              t
            );
          };
          decode = (e, t = 0, n) => {
            t || (t = 0);
            const r = new Array(this.length),
              o = this.anyCodec.decode,
              i = this.anyCodec.decodeBytes;
            return (
              (this.decodeBytes =
                u.size(
                  r,
                  function (t, s, u) {
                    return (r[s || 0] = o(e, u, n)), i;
                  },
                  t
                ) - t),
              r
            );
          };
        };
      },
      483: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CBuffer = void 0),
          (t.CBuffer = class {
            length;
            encodingLength = () => this.length;
            encodeBytes;
            decodeBytes;
            constructor(e) {
              (this.length = e), (this.encodeBytes = e), (this.decodeBytes = e);
            }
            encode = (e, t, n = 0) => {
              if (!r.isBuffer(e)) throw new TypeError("value must be a Buffer instance");
              if (e.length !== this.length) throw new RangeError("value.length is out of bounds");
              if (!t) return r.from(e);
              if (n + this.length > t.length) throw new RangeError("destination buffer is too small");
              return e.copy(t, n), t;
            };
            decode = (e, t = 0, n) => {
              if ((n || (n = e.length), t + this.length > n)) throw new RangeError("not enough data for decode");
              return r.from(e.slice(t, t + this.length));
            };
          });
      },
      193: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CNumber = void 0);
        const o = n(716);
        t.CNumber = class {
          length;
          write;
          read;
          encodingLength = () => this.length;
          encodeBytes;
          decodeBytes;
          constructor(e, t) {
            (this.length = t),
              (this.encodeBytes = t),
              (this.decodeBytes = t),
              r.prototype["write" + e] ? (this.write = (t, n, r) => t["write" + e](n, r)) : (this.write = (t, n, r) => (0, o.writeInt53)(e, n, t, r)),
              r.prototype["read" + e] ? (this.read = (t, n) => t["read" + e](n)) : (this.read = (t, n) => (0, o.readInt53)(e, t, n));
          }
          encode = (e, t, n = 0) => ((t = t || r.allocUnsafe(this.length)), this.write(t, e, n), t);
          decode = (e, t = 0, n) => (n ? this.read(e.slice(t, n), 0) : this.read(e, t));
        };
      },
      759: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CObject = void 0),
          (t.CObject = class {
            items;
            encodeBytes;
            decodeBytes;
            encodingLength;
            constructor(e) {
              (this.items = e.map((e) => (Array.isArray(e) ? { name: e[0], type: e[1] } : e))),
                (this.encodeBytes = 0),
                (this.decodeBytes = 0),
                (this.encodingLength = (e) => {
                  if (void 0 === e) throw new TypeError("Expected Object, got " + e);
                  return this.items.reduce((t, n) => {
                    const r = e[n.name];
                    return t + n.type.encodingLength(r);
                  }, 0);
                });
            }
            encode = (e, t, n = 0) => {
              const o = this.encodingLength(e);
              if (void 0 === t) t = r.allocUnsafe(o);
              else if (t.length - n < o) throw new RangeError("destination buffer is too small");
              return (
                this.items.forEach((r) => {
                  const o = e[r.name];
                  r.type.encode(o, t, n), (n += r.type.encodeBytes);
                }),
                (this.encodeBytes = o),
                t
              );
            };
            decode = (e, t = 0, n) => {
              let r = {};
              const o = t;
              return (
                this.items.forEach((o) => {
                  const i = o.type.decode(e, t, n);
                  (t += o.type.decodeBytes), (r[o.name] = i);
                }),
                (this.decodeBytes = t - o),
                r
              );
            };
          });
      },
      129: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CString = void 0);
        const o = n(483);
        t.CString = class {
          length;
          bufferCodec;
          encodingType;
          encodingLength;
          encodeBytes;
          decodeBytes;
          constructor(e, t = "utf8") {
            (this.length = e),
              (this.encodingType = t),
              (this.bufferCodec = new o.CBuffer(this.length)),
              (this.encodeBytes = e),
              (this.decodeBytes = e),
              (this.encodingLength = (e) => this.length);
          }
          encode = (e, t, n = 0) => {
            if (r.byteLength(e, this.encodingType) !== this.length) throw new RangeError("value.length is out of bounds");
            if (!t) return r.from(e, this.encodingType);
            if (n + this.length > t.length) throw new RangeError("destination buffer is too small");
            return t.write(e, n, length, this.encodingType), t;
          };
          decode = (e, t = 0, n) => this.bufferCodec.decode(e, t, n).toString(this.encodingType);
        };
      },
      161: function (e, t, n) {
        "use strict";
        var r = n(764).Buffer,
          o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
              return i(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CVarArray = void 0);
        const u = s(n(882));
        t.CVarArray = class {
          length = -1;
          lengthType;
          anyCodec;
          calcLength = (e) => u.size(e, this.anyCodec.encodingLength, this.lengthType.encodingLength(e.length));
          encodingLength = (e) => {
            if (void 0 === e) throw new TypeError("value must be an Array instance");
            return this.calcLength(e);
          };
          encodeBytes = -1;
          decodeBytes = -1;
          constructor(e, t) {
            (this.lengthType = e), (this.anyCodec = t);
          }
          encode = (e, t, n = 0) => (
            t || (t = r.allocUnsafe(this.calcLength(e))),
            this.lengthType.encode(e.length, t, n),
            (this.encodeBytes = u.size(e, (e, n, r) => (this.anyCodec.encode(e, t, r), this.anyCodec.encodeBytes), this.lengthType.encodeBytes + n) - n),
            t
          );
          decode = (e, t = 0, n) => {
            t || (t = 0);
            const r = new Array(this.lengthType.decode(e, t, n));
            return (this.decodeBytes = u.size(r, (t, o, i) => ((r[o || 0] = this.anyCodec.decode(e, i, n)), this.anyCodec.decodeBytes), this.lengthType.decodeBytes + t) - t), r;
          };
        };
      },
      5: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CVarBuffer = void 0),
          (t.CVarBuffer = class {
            anyCodec;
            encodingLength;
            encodeBytes;
            decodeBytes;
            constructor(e) {
              (this.anyCodec = e),
                (this.encodeBytes = 0),
                (this.decodeBytes = 0),
                (this.encodingLength = (e) => {
                  if (void 0 === e) throw new TypeError("value must be a Buffer instance");
                  return this.anyCodec.encodingLength(e.length) + e.length;
                });
            }
            encode = (e, t, n = 0) => {
              const o = this.encodingLength(e);
              if (t) {
                if (t.length - n < o) throw new RangeError("destination buffer is too small");
              } else t = r.allocUnsafe(o);
              return this.anyCodec.encode(e.length, t, n), (n += this.anyCodec.encodeBytes), e.copy(t, n), (this.encodeBytes = o), t;
            };
            decode = (e, t = 0, n) => {
              void 0 === n && (n = e.length);
              const o = t,
                i = this.anyCodec.decode(e, t, n);
              if ((t += this.anyCodec.decodeBytes) + i > n) throw new RangeError("not enough data for decode");
              return (this.decodeBytes = t + i - o), r.from(e.slice(t, t + i));
            };
          });
      },
      513: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CVarString = void 0);
        const o = n(5);
        t.CVarString = class {
          anyCodec;
          encodingType;
          varBufferCodec;
          encodingLength;
          encodeBytes;
          decodeBytes;
          constructor(e, t = "utf8") {
            (this.anyCodec = e),
              (this.encodingType = t),
              (this.varBufferCodec = new o.CVarBuffer(e)),
              (this.encodeBytes = 0),
              (this.decodeBytes = 0),
              (this.encodingLength = (e) => {
                if (void 0 === e) throw new TypeError("value must be a string");
                const t = r.byteLength(e, this.encodingType);
                return this.anyCodec.encodingLength(e.length) + t;
              });
          }
          encode = (e, t, n = 0) => {
            const o = r.byteLength(e, this.encodingType),
              i = this.anyCodec.encodingLength(e.length) + o;
            if ((t || (t = r.allocUnsafe(i)), n + i > t.length)) throw new RangeError("destination buffer is too small");
            return this.anyCodec.encode(o, t, n), (n += this.anyCodec.encodeBytes), t.write(e, n, o, this.encodingType), (this.encodeBytes = i), t;
          };
          decode = (e, t = 0, n) => {
            const r = this.varBufferCodec.decode(e, t, n).toString(this.encodingType);
            return (this.decodeBytes = this.varBufferCodec.decodeBytes), r;
          };
        };
      },
      492: (e, t, n) => {
        "use strict";
        var r = n(764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CVarUIntBitcoin = void 0),
          (t.CVarUIntBitcoin = class {
            MAX_SAFE_INTEGER = 9007199254740991;
            checkUInt53 = (e) => {
              if (e < 0 || e > this.MAX_SAFE_INTEGER || e % 1 != 0) throw new RangeError("value out of range");
            };
            encodeBytes;
            decodeBytes;
            encodingLength;
            constructor() {
              (this.encodeBytes = 0),
                (this.decodeBytes = 0),
                (this.encodingLength = (e) => {
                  if (void 0 === e) throw new TypeError("Expected number, got undefined");
                  return this.checkUInt53(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
                });
            }
            encode = (e, t, n = 0) => (
              t || (t = r.allocUnsafe(this.encodingLength(e))),
              e < 253
                ? (t.writeUInt8(e, n), (this.encodeBytes = 1))
                : e <= 65535
                ? (t.writeUInt8(253, n), t.writeUInt16LE(e, n + 1), (this.encodeBytes = 3))
                : e <= 4294967295
                ? (t.writeUInt8(254, n), t.writeUInt32LE(e, n + 1), (this.encodeBytes = 5))
                : (t.writeUInt8(255, n), t.writeUInt32LE(e >>> 0, n + 1), t.writeUInt32LE((e / 4294967296) | 0, n + 5), (this.encodeBytes = 9)),
              t
            );
            decode = (e, t = 0, n) => {
              const r = e.readUInt8(t);
              if (r < 253) return (this.decodeBytes = 1), r;
              if (253 === r) return (this.decodeBytes = 3), e.readUInt16LE(t + 1);
              if (254 === r) return (this.decodeBytes = 5), e.readUInt32LE(t + 1);
              this.decodeBytes = 9;
              var o = e.readUInt32LE(t + 1),
                i = 4294967296 * e.readUInt32LE(t + 5) + o;
              return this.checkUInt53(i), i;
            };
          });
      },
      960: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NumberTypes = void 0),
          ((n = t.NumberTypes || (t.NumberTypes = {})).Byte = "UInt8"),
          (n.Int8 = "Int8"),
          (n.UInt8 = "UInt8"),
          (n.Int16BE = "Int16BE"),
          (n.Int16LE = "Int16LE"),
          (n.UInt16BE = "UInt16BE"),
          (n.UInt16LE = "UInt16LE"),
          (n.Int32BE = "Int32BE"),
          (n.Int32LE = "Int32LE"),
          (n.UInt32BE = "UInt32BE"),
          (n.UInt32LE = "UInt32LE"),
          (n.Int64BE = "Int64BE"),
          (n.Int64LE = "Int64LE"),
          (n.UInt64BE = "UInt64BE"),
          (n.UInt64LE = "UInt64LE"),
          (n.FloatBE = "FloatBE"),
          (n.FloatLE = "FloatLE"),
          (n.DoubleBE = "DoubleBE"),
          (n.DoubleLE = "DoubleLE");
      },
      882: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.size = void 0),
          (t.size = (e, t, n = 0) => {
            let r = n;
            for (let n = 0; n < e.length; n++) r += t(e[n], n, r);
            return r;
          });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  var r = {};
  (() => {
    "use strict";
    var e = r;
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.TxCodec = e.InventoriesCodec = e.VersionCodec = e.MessageStructureCodec = void 0);
    const t = n(241);
    Object.defineProperty(e, "MessageStructureCodec", {
      enumerable: !0,
      get: function () {
        return t.MessageStructureCodec;
      },
    });
    const o = n(503);
    Object.defineProperty(e, "VersionCodec", {
      enumerable: !0,
      get: function () {
        return o.VersionCodec;
      },
    });
    const i = n(189);
    Object.defineProperty(e, "TxCodec", {
      enumerable: !0,
      get: function () {
        return i.TxCodec;
      },
    });
    const s = n(952);
    Object.defineProperty(e, "InventoriesCodec", {
      enumerable: !0,
      get: function () {
        return s.InventoriesCodec;
      },
    });
  })(),
    (bitcoin = r);
})();
//# sourceMappingURL=bitcoin.umd.js.map
