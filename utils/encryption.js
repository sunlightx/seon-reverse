import crypto from 'crypto';

function e(r, t, n) {
  var a;
  for (var i = 0, o = t, v = n.length, u = t + (v * 3 >> 2) - (n[v - 2] == "=") - (n[v - 1] == "="); i < v; i += 4) {
    t = g[n.charCodeAt(i + 1)];
    a = g[n.charCodeAt(i + 2)];
    r[o++] = g[n.charCodeAt(i)] << 2 | t >> 4;
    if (o < u) {
      r[o++] = t << 4 | a >> 2;
    }
    if (o < u) {
      r[o++] = a << 6 | g[n.charCodeAt(i + 3)];
    }
  }
}
var a;
var i;
var o;
var v;
var u;
var c;
var s;
var f;
var w;
var l;
var y;
var g = new Uint8Array(123);
for (var h = 25; h >= 0; --h) {
  g[48 + h] = 52 + h;
  g[65 + h] = h;
  g[97 + h] = 26 + h;
}
g[43] = 62;
g[47] = 63;

o = new ArrayBuffer(524288 / 65536 * 65536)
i = {buffer: o, grow: function (r) {
  var e = o.byteLength / 65536 | 0;
  if (e < (r = e + (r | 0) | 0) && r < 65536) {
    r = new ArrayBuffer(s(r, 65536));
    new Int8Array(r).set(v);
    v = new Int8Array(r);
    new Int16Array(r);
    u = new Int32Array(r);
    c = new Uint8Array(r);
    new Uint16Array(r);
    new Uint32Array(r);
    new Float32Array(r);
    new Float64Array(r);
    o = r;
    i.buffer = o;
    a = c;
  }
  return e;
}}
var v = new Int8Array(o);
new Int16Array(o);
var u = new Int32Array(o);
var c = new Uint8Array(o);
new Uint16Array(o);
new Uint32Array(o);
new Float32Array(o);
new Float64Array(o);
w = function (r) {
  var n = T.length;
  if ((r >>>= 0) > 2147483648) {
    return false;
  }
  for (var e = 1; e <= 4; e *= 2) {
    var a = n * (1 + 0.2 / e);
    a = Math.min(a, r + 100663296);
    var i = Math;
    var o = i.min;
    a = Math.max(r, a);
    a += (65536 - a % 65536) % 65536;
    r: {
      var u = b.buffer;
      try {
        b.grow(o.call(i, 2147483648, a) - u.byteLength + 65535 >>> 16);
        P();
        var c = 1;
        break r;
      } catch (r) {}
      c = undefined;
    }
    if (c) {
      return true;
    }
  }
  return false;
}
s = Math.imul,
f = Math.clz32,
l = 264784;
y = 0;
e(a = c, 1024, "Y3x3e/Jrb8UwAWcr/terdsqCyX36WUfwrdSir5ykcsC3/ZMmNj/3zDSl5fFx2DEVBMcjwxiWBZoHEoDi6yeydQmDLBobblqgUjvWsynjL4RT0QDtIPyxW2rLvjlKTFjP0O+q+0NNM4VF+QJ/UDyfqFGjQI+SnTj1vLbaIRD/89LNDBPsX5dEF8Snfj1kXRlzYIFP3CIqkIhG7rgU3l4L2+AyOgpJBiRcwtOsYpGV5HnnyDdtjdVOqWxW9Opleq4IunglLhymtMbo3XQfS72LinA+tWZIA/YOYTVXuYbBHZ7h+JgRadmOlJseh+nOVSjfjKGJDb/mQmhBmS0PsFS7Fo0BAgQIECBAgBs2AAAAAABSCWrVMDalOL9Ao56B89f7fOM5gpsv/4c0jkNExN7py1R7lDKmwiM97kyVC0L6w04ILqFmKNkksnZboklti9Elcvj2ZIZomBbUpFzMXWW2kmxwSFD97bnaXhVGV6eNnYSQ2KsAjLzTCvfkWAW4s0UG0Cwej8o/DwLBr70DAROKazqREUFPZ9zql/LPzvC05nOWrHQi5601heL5N+gcdd9uR/EacR0pxYlvt2IOqhi+G/xWPkvG0nkgmtvA/njNWvQf3agziAfHMbESEFkngOxfYFF/qRm1Sg0t5Xqfk8mc76DgO02uKvWwyOu7PINTmWEXKwR+unfWJuFpFGNVIQx9+wAAAM4AAAANAAAA6gAAAGcAAABWAAAATwAAAA0=");
e(a, 1584, "UAoE");

const ce = function(r) {
  var t = r
  var n = Number(t.length);
  "string" == typeof t && (n = n + 16 - n % 16);
  var e = malloc(n);
  var a = new Uint8Array(v.buffer,e,n);
  if ("string" == typeof t)
      for (var o = 0; o < t.length; o += 1)
          a[o] = t.charCodeAt(o);
  else
      a.set(t);
  return [e, a, t.length]
}

const fe = function() {
  var r = new Uint8Array(16);
  for (var t = 0; t < 16; t += 65536)
      crypto.getRandomValues(r.subarray(t, t + Math.min(16 - t, 65536)));
  return r
}()

function z(r) {
  var e = u[396];
  var a = r + 7 & -8;
  var i = e + a | 0;
  var c = -1;
  if ((!(i >>> 0 <= e >>> 0) || !a) && (!(i >>> 0 > o.byteLength / 65536 << 16 >>> 0) || !!(w(i | 0) | 0))) {
    u[396] = i;
    c = e;
  }
  if (((e = c) | 0) != -1) {
    u[12 + (c = (i = r + e | 0) - 16 | 0) >> 2] = 16;
    u[c >> 2] = 16;
    var s = (r = u[656]) ? u[r + 8 >> 2] : 0;
    r: {
      t: {
        if ((s | 0) == (e | 0)) {
          a = e - (u[e - 4 >> 2] & -2) | 0;
          s = u[a - 4 >> 2];
          u[r + 8 >> 2] = i;
          i = -16;
          if (!(v[((r = a - (s & -2) | 0) + u[r >> 2] | 0) - 4 | 0] & 1)) {
            break t;
          }
          i = u[r + 4 >> 2];
          u[i + 8 >> 2] = u[r + 8 >> 2];
          u[u[r + 8 >> 2] + 4 >> 2] = i;
          u[r >> 2] = c = c - r | 0;
          break r;
        }
        u[e + 12 >> 2] = 16;
        u[e >> 2] = 16;
        u[e + 8 >> 2] = i;
        u[e + 4 >> 2] = r;
        u[656] = e;
        i = 16;
      }
      u[(r = i + e | 0) >> 2] = c = c - r | 0;
    }
    u[((c & -4) + r | 0) - 4 >> 2] = c | 1;
    if ((i = u[r >> 2] - 8 | 0) >>> 0 <= 127) {
      c = (i >>> 3 | 0) - 1 | 0;
    } else {
      c = 110 + ((i >>> 29 - (a = f(i)) ^ 4) - (a << 2) | 0) | 0;
      if (!(i >>> 0 <= 4095)) {
        c = (c = 71 + ((i >>> 30 - a ^ 2) - (a << 1) | 0) | 0) >>> 0 >= 63 ? 63 : c;
      }
    }
    u[r + 4 >> 2] = 1600 + (i = c << 4);
    u[r + 8 >> 2] = u[(i = i + 1608 | 0) >> 2];
    u[i >> 2] = r;
    u[u[r + 8 >> 2] + 4 >> 2] = r;
    i = u[658];
    a = u[659];
    r = c & 31;
    if ((c & 63) >>> 0 >= 32) {
      c = 1 << r;
      s = 0;
    } else {
      c = (s = 1 << r) - 1 & 1 >>> 32 - r;
    }
    u[658] = s | i;
    u[659] = c | a;
  }
  return (e | 0) != -1;
}

function B(r, t, n) {
  var e;
  var a;
  var i = r + 4 | 0;
  var o = (i + t | 0) - 1 & 0 - t;
  if (o + n >>> 0 <= ((t = u[r >> 2]) + r | 0) - 4 >>> 0) {
    e = u[r + 4 >> 2];
    u[e + 8 >> 2] = u[r + 8 >> 2];
    u[u[r + 8 >> 2] + 4 >> 2] = e;
    if ((i | 0) != (o | 0)) {
      e = r - (u[r - 4 >> 2] & -2) | 0;
      i = (o = o - i | 0) + u[e >> 2] | 0;
      u[e >> 2] = i;
      u[(e + (i & -4) | 0) - 4 >> 2] = i;
      u[(r = r + o | 0) >> 2] = t = t - o | 0;
    }
    if (n + 24 >>> 0 <= t >>> 0) {
      u[(i = 8 + (r + n | 0) | 0) >> 2] = t = (t - n | 0) - 8 | 0;
      u[(i + (t & -4) | 0) - 4 >> 2] = t | 1;
      if ((o = u[i >> 2] - 8 | 0) >>> 0 <= 127) {
        t = (o >>> 3 | 0) - 1 | 0;
      } else {
        t = 110 + ((o >>> 29 - (e = f(o)) ^ 4) - (e << 2) | 0) | 0;
        if (!(o >>> 0 <= 4095)) {
          t = (t = 71 + ((o >>> 30 - e ^ 2) - (e << 1) | 0) | 0) >>> 0 >= 63 ? 63 : t;
        }
      }
      u[i + 4 >> 2] = 1600 + (o = t << 4);
      u[i + 8 >> 2] = u[(o = o + 1608 | 0) >> 2];
      u[o >> 2] = i;
      u[u[i + 8 >> 2] + 4 >> 2] = i;
      o = u[658];
      e = u[659];
      i = t & 31;
      i = (t & 63) >>> 0 >= 32 ? (t = 1 << i, 0) : (t = (a = 1 << i) - 1 & 1 >>> 32 - i, a);
      u[658] = i | o;
      u[659] = t | e;
      u[r >> 2] = t = n + 8 | 0;
      u[((t & -4) + r | 0) - 4 >> 2] = t;
    } else {
      u[(r + t | 0) - 4 >> 2] = t;
    }
    return r + 4 | 0;
  } else {
    return 0;
  }
}

const malloc = (r) => {
  return 0 | M(0 | r)
}

function M(r) {
  var t = 0;
  var n = 8;
  r: {
    t: if (!(r >>> 0 > 4294967239)) {
      while (true) {
        n = n >>> 0 <= 8 ? 8 : n;
        var e;
        var a;
        var i;
        var o = t = u[659];
        var v = u[658];
        if ((r = r >>> 0 <= 8 ? 8 : r + 3 & -4) >>> 0 <= 127) {
          e = (r >>> 3 | 0) - 1 | 0;
        } else {
          e = 110 + ((r >>> 29 - (a = f(r)) ^ 4) - (a << 2) | 0) | 0;
          if (!(r >>> 0 <= 4095)) {
            e = (a = 71 + ((r >>> 30 - a ^ 2) - (a << 1) | 0) | 0) >>> 0 >= 63 ? 63 : a;
          }
        }
        var c = e & 31;
        if ((t = (e & 63) >>> 0 >= 32 ? t >>> c | (a = 0) : (a = t >>> c | 0, ((1 << c) - 1 & t) << 32 - c | v >>> c)) | a) {
          while (true) {
            if ((v = a) | t) {
              a = v - 1 | 0;
              a = 63 - (c = ((a = f((a = ((c = t - 1 | 0) | 0) != -1 ? a + 1 | 0 : a) ^ v)) | 0) == 32 ? f(c ^ t) + 32 | 0 : a) | 0;
              y = 0 - (c >>> 0 > 63) | 0;
            } else {
              y = 0;
              a = 64;
            }
            o = (c = a) & 31;
            i = (c & 63) >>> 0 >= 32 ? v >>> o | (a = 0) : (a = v >>> o | 0, ((1 << o) - 1 & v) << 32 - o | t >>> o);
            if (((o = u[1608 + (c = (e = c + e | 0) << 4) >> 2]) | 0) != ((v = c + 1600 | 0) | 0)) {
              if (t = B(o, n, r)) {
                break t;
              }
              t = u[o + 4 >> 2];
              u[t + 8 >> 2] = u[o + 8 >> 2];
              u[u[o + 8 >> 2] + 4 >> 2] = t;
              u[o + 8 >> 2] = v;
              u[o + 4 >> 2] = u[(t = c + 1604 | 0) >> 2];
              u[t >> 2] = o;
              u[u[o + 4 >> 2] + 8 >> 2] = o;
              e = e + 1 | 0;
              t = (a & 1) << 31 | i >>> 1;
              a = a >>> 1 | 0;
            } else {
              var s = u[659];
              o = (t = (v = e) & 63) & 31;
              o = t >>> 0 >= 32 ? -1 >>> o | (c = 0) : (c = -1 >>> o | 0) | (1 << o) - 1 << 32 - o;
              o &= -2;
              var w = t & 31;
              if (t >>> 0 >= 32) {
                c = o << w;
                o = 0;
              } else {
                c = (1 << w) - 1 & o >>> 32 - w | c << w;
                o <<= w;
              }
              t = c;
              c = (v = w = 0 - v & 63) & 31;
              if (v >>> 0 >= 32) {
                c = -1 << c;
                v = 0;
              } else {
                c = (v = -1 << c) | (1 << c) - 1 & -1 >>> 32 - c;
              }
              v &= -2;
              var l = w & 31;
              v = w >>> 0 >= 32 ? c >>> l | (w = 0) : (w = c >>> l | 0, ((1 << l) - 1 & c) << 32 - l | v >>> l);
              v |= o;
              y = t | w;
              u[658] &= v;
              u[659] = y & s;
              t = i ^ 1;
            }
            if (!(a | t)) {
              break;
            }
          }
          o = u[659];
          v = u[658];
        }
        n: {
          if (o | v) {
            c = 63 - (((t = f(o)) | 0) == 32 ? f(v) + 32 | 0 : t) | 0;
            a = u[1608 + (t = c << 4) >> 2];
            e: if (!(!o & v >>> 0 < 1073741824) && (e = 99, v = t + 1600 | 0, (v | 0) != (a | 0))) {
              while (true) {
                if (!e) {
                  break e;
                }
                if (t = B(a, n, r)) {
                  break t;
                }
                e = e - 1 | 0;
                if ((v | 0) == ((a = u[a + 8 >> 2]) | 0)) {
                  break;
                }
              }
              a = v;
            }
            if (z(r + 48 | 0)) {
              break n;
            }
            if (!a) {
              break r;
            }
            if (((v = 1600 + (c << 4) | 0) | 0) == (a | 0)) {
              break r;
            }
            while (true) {
              if (t = B(a, n, r)) {
                break t;
              }
              if ((v | 0) == ((a = u[a + 8 >> 2]) | 0)) {
                break;
              }
            }
            break r;
          }
          if (!z(r + 48 | 0)) {
            break r;
          }
        }
        t = 0;
        if (n - 1 & n) {
          break t;
        }
        if (!(r >>> 0 <= 4294967239)) {
          break;
        }
      }
    }
    return t;
  }
  return 0;
}

function j(r, t) {
  var n = 31 & t;
  return (-1 >>> n & r) << n | (r & -1 << (r = 0 - t & 31)) >>> r
}

function D(r) {
  var t, n, e, a, i;
  r && (e = t = u[(n = r - 4 | 0) >> 2],
  a = n,
  (0 | (r = -2 & (i = u[r - 8 >> 2]))) != (0 | i) && (e = u[4 + (a = n - r | 0) >> 2],
  u[e + 8 >> 2] = u[a + 8 >> 2],
  u[u[a + 8 >> 2] + 4 >> 2] = e,
  e = r + t | 0),
  (0 | (n = u[(r = n + t | 0) >> 2])) != u[(r + n | 0) - 4 >> 2] && (t = u[r + 4 >> 2],
  u[t + 8 >> 2] = u[r + 8 >> 2],
  u[u[r + 8 >> 2] + 4 >> 2] = t,
  e = n + e | 0),
  u[a >> 2] = e,
  u[((-4 & e) + a | 0) - 4 >> 2] = 1 | e,
  (n = u[a >> 2] - 8 | 0) >>> 0 <= 127 ? r = (n >>> 3 | 0) - 1 | 0 : (r = 110 + ((n >>> 29 - (e = f(n)) ^ 4) - (e << 2) | 0) | 0,
  n >>> 0 <= 4095 || (r = 63 <= (r = 71 + ((n >>> 30 - e ^ 2) - (e << 1) | 0) | 0) >>> 0 ? 63 : r)),
  u[a + 4 >> 2] = 1600 + (n = r << 4),
  u[a + 8 >> 2] = u[(n = n + 1608 | 0) >> 2],
  u[n >> 2] = a,
  u[u[a + 8 >> 2] + 4 >> 2] = a,
  n = u[658],
  e = u[659],
  a = 31 & r,
  32 <= (63 & r) >>> 0 ? (r = 1 << a,
  t = 0) : r = (t = 1 << a) - 1 & 1 >>> 32 - a,
  u[658] = t | n,
  u[659] = r | e)
}

function C(r, t, n, e, a) {
  for (var i, o, v, c = 0; 8 != (0 | c); )
      v = j(i = u[(o = c << 2) + r >> 2], n),
      i ^= j(i, e) ^ v,
      u[t + o >> 2] = i,
      c = c + 1 | 0;
  for (c = 0; 8 != (0 | c); )
      u[(r = (c << 2) + t | 0) >> 2] ^= u[1552 + ((a + c & 7) << 2) >> 2],
      c = c + 1 | 0
}

function m(r, t) {
  for (var n, e = 0; 16 != (0 | e); )
      v[0 | (n = r + e | 0)] = c[0 | n] ^ c[t + e | 0],
      e = e + 1 | 0
}

function A(r, t, n) {
  for (var e = 0, a = r << 4; 4 != (0 | e); ) {
      var i = e << 2
        , o = i + a | 0;
      for (r = 0; 4 != (0 | r); ) {
          var u = (t + i | 0) + r | 0;
          v[0 | u] = c[0 | u] ^ c[(r + o | 0) + n | 0],
          r = r + 1 | 0
      }
      e = e + 1 | 0
  }
}

const oe = function (r, t, n, e) {
  r |= 0;
  t |= 0;
  n |= 0;
  e |= 0;
  var a;
  var i = 0;
  l = a = l - 304 | 0;
  y = M(32);
  while (true) {
    r: {
      var o = 186;
      t: {
        switch (i | 0) {
          case 1:
            o = 113;
            break t;
          case 2:
            o = 124;
            break t;
          case 3:
            o = 131;
            break t;
          case 4:
            o = 30;
            break t;
          case 5:
            o = 2;
            break t;
          case 7:
            o = 104;
            break t;
          case 8:
            o = 96;
            break t;
          case 10:
            o = 66;
            break t;
          case 11:
            o = 37;
            break t;
          case 12:
            o = 49;
            break t;
          case 13:
            o = 201;
            break t;
          case 14:
            o = 169;
            break t;
          case 15:
            o = 81;
            break t;
          case 16:
            o = 160;
            break t;
          case 9:
          case 17:
            o = 39;
            break t;
          case 18:
            o = 70;
            break t;
          case 19:
            o = 85;
            break t;
          case 20:
            o = 236;
            break t;
          case 21:
            o = 242;
            break t;
          case 22:
            o = 25;
            break t;
          case 23:
            o = 200;
            break t;
          case 24:
            o = 233;
            break t;
          case 25:
            o = 226;
            break t;
          case 26:
            o = 60;
            break t;
          case 27:
            o = 6;
            break t;
          case 6:
          case 28:
            o = 43;
            break t;
          case 29:
            o = 133;
            break t;
          case 30:
            o = 132;
            break t;
          case 31:
            o = 170;
            break t;
          case 32:
            break r;
          case 0:
            break t;
        }
        o = 0;
      }
      v[y + i | 0] = o;
      i = i + 1 | 0;
      continue;
    }
    break;
  }
  C(y, g = 256 + a | 0, 155, 143, 243);
  D(y);
  C(g, g, 26, 150, 105);
  C(g, g, 179, 128, 15);
  C(g, g, 67, 137, 56);
  C(g, g, 54, 146, 81);
  C(g, g, 57, 25, 54);
  C(g, g, 25, 188, 234);
  C(g, g, 165, 57, 246);
  C(g, g, 145, 252, 45);
  C(g, g, 71, 188, 47);
  C(g, g, 1, 219, 68);
  C(g, g, 112, i = 8, 132);
  C(g, g, 118, 148, 154);
  C(g, g, 132, 167, 111);
  o = 0;
  while (true) {
    if ((o | 0) == 8) {
      while ((i | 0) != 60) {
        var s = i << 2;
        g = c[(d = s + a | 0) - 1 | 0];
        o = c[d - 2 | 0];
        y = c[d - 3 | 0];
        d = c[d - 4 | 0];
        r: {
          switch (i & 7) {
            case 0:
              var f = y + 1024 | 0;
              var w = g + 1024 | 0;
              var y = c[o + 1024 | 0];
              var g = c[d + 1024 | 0];
              o = c[w | 0];
              var d = c[1280 + (i >>> 3 | 0) | 0] ^ c[f | 0];
              break r;
            case 4:
              break;
            default:
              break r;
          }
          g = c[g + 1024 | 0];
          o = c[o + 1024 | 0];
          y = c[y + 1024 | 0];
          d = c[d + 1024 | 0];
        }
        v[(f = a + s | 0) | 0] = c[f - 32 | 0] ^ d;
        v[(s | 1) + a | 0] = c[f - 31 | 0] ^ y;
        v[(s | 2) + a | 0] = c[f - 30 | 0] ^ o;
        v[(s | 3) + a | 0] = c[f - 29 | 0] ^ g;
        i = i + 1 | 0;
      }
      g = c[r + 12 | 0] | c[r + 13 | 0] << 8 | c[r + 14 | 0] << 16 | c[r + 15 | 0] << 24;
      y = c[r + 8 | 0] | c[r + 9 | 0] << 8 | c[r + 10 | 0] << 16 | c[r + 11 | 0] << 24;
      v[248 + a | 0] = y;
      v[249 + a | 0] = y >>> 8;
      v[250 + a | 0] = y >>> 16;
      v[251 + a | 0] = y >>> 24;
      v[252 + a | 0] = g;
      v[253 + a | 0] = g >>> 8;
      v[254 + a | 0] = g >>> 16;
      v[255 + a | 0] = g >>> 24;
      g = c[r + 4 | 0] | c[r + 5 | 0] << 8 | c[r + 6 | 0] << 16 | c[r + 7 | 0] << 24;
      r = c[r | 0] | c[r + 1 | 0] << 8 | c[r + 2 | 0] << 16 | c[r + 3 | 0] << 24;
      v[240 + a | 0] = r;
      v[241 + a | 0] = r >>> 8;
      v[242 + a | 0] = r >>> 16;
      v[243 + a | 0] = r >>> 24;
      v[244 + a | 0] = g;
      v[245 + a | 0] = g >>> 8;
      v[246 + a | 0] = g >>> 16;
      v[247 + a | 0] = g >>> 24;
      r = 240 + a | 0;
      r: {
        if ((e | 0) == 1) {
          y = 16 + (n & -16) | 0;
          e = 16 - (n & 15) | 0;
          t: if (!(y >>> 0 < e + n >>> 0)) {
            for (i = 0;;) {
              if ((e | 0) == (i | 0)) {
                break t;
              }
              v[(n + i | 0) + t | 0] = e;
              i = i + 1 | 0;
            }
          }
          for (n = 0;;) {
            if (y >>> 0 <= n >>> 0) {
              break r;
            }
            m(g = t, r);
            A(0, g, a);
            e = 1;
            while (true) {
              for (o = 0; ((i = 0) | o) != 4;) {
                while ((i | 0) != 4) {
                  v[(r = (g + (i << 2) | 0) + o | 0) | 0] = c[c[r | 0] + 1024 | 0];
                  i = i + 1 | 0;
                }
                o = o + 1 | 0;
              }
              r = c[g + 1 | 0];
              v[g + 1 | 0] = c[g + 5 | 0];
              t = c[g + 9 | 0];
              v[g + 9 | 0] = c[g + 13 | 0];
              v[g + 5 | 0] = t;
              v[g + 13 | 0] = r;
              r = c[g + 2 | 0];
              v[g + 2 | 0] = c[g + 10 | 0];
              v[g + 10 | 0] = r;
              r = c[g + 6 | 0];
              v[g + 6 | 0] = c[g + 14 | 0];
              v[g + 14 | 0] = r;
              r = c[g + 3 | 0];
              v[g + 3 | 0] = c[g + 15 | 0];
              v[g + 15 | 0] = c[g + 11 | 0];
              v[g + 11 | 0] = c[g + 7 | 0];
              v[g + 7 | 0] = r;
              var h = e & 255;
              if (!(h >>> (o = 0) <= 13)) {
                break;
              }
              while ((o | 0) != 4) {
                var x = (t = c[3 + (r = g + (o << 2) | 0) | 0]) ^ (d = t ^ (i = c[r | 0])) << 24 >> 24 >>> 7 & 27 ^ d << 1;
                d = c[r + 2 | 0];
                f = c[r + 1 | 0];
                v[r + 3 | 0] = x ^ (t = (s = d ^ t) ^ (w = f ^ i));
                v[r + 2 | 0] = t ^ d ^ s << 24 >> 24 >>> 7 & 27 ^ s << 1;
                d ^= f;
                v[r + 1 | 0] = t ^ f ^ d << 1 ^ d << 24 >> 24 >>> 7 & 27;
                v[r | 0] = t ^ i ^ w << 24 >> 24 >>> 7 & 27 ^ w << 1;
                o = o + 1 | 0;
              }
              A(h, g, a);
              e = e + 1 | 0;
            }
            A(14, g, a);
            n = n + 16 | 0;
            t = g + 16 | 0;
            r = g;
          }
        }
        g = t;
        e = 0;
        while (e >>> 0 < n >>> 0) {
          y = c[g + 4 | 0] | c[g + 5 | 0] << 8 | c[g + 6 | 0] << 16 | c[g + 7 | 0] << 24;
          u[288 + a >> 2] = c[g | 0] | c[g + 1 | 0] << 8 | c[g + 2 | 0] << 16 | c[g + 3 | 0] << 24;
          u[292 + a >> 2] = y;
          y = c[g + 12 | 0] | c[g + 13 | 0] << 8 | c[g + 14 | 0] << 16 | c[g + 15 | 0] << 24;
          u[296 + a >> 2] = c[g + 8 | 0] | c[g + 9 | 0] << 8 | c[g + 10 | 0] << 16 | c[g + 11 | 0] << 24;
          u[300 + a >> 2] = y;
          A(14, g, a);
          d = 13;
          while (true) {
            y = c[g + 13 | 0];
            v[g + 13 | 0] = c[g + 9 | 0];
            o = c[g + 5 | 0];
            v[g + 5 | 0] = c[g + 1 | 0];
            v[g + 9 | 0] = o;
            v[g + 1 | 0] = y;
            y = c[g + 2 | 0];
            v[g + 2 | 0] = c[g + 10 | 0];
            v[g + 10 | 0] = y;
            y = c[g + 6 | 0];
            v[g + 6 | 0] = c[g + 14 | 0];
            v[g + 14 | 0] = y;
            y = c[g + 3 | 0];
            v[g + 3 | 0] = c[g + 7 | 0];
            v[g + 7 | 0] = c[g + 11 | 0];
            o = c[g + 15 | 0];
            v[g + 15 | 0] = y;
            v[g + 11 | 0] = o;
            o = 0;
            while (((i = 0) | o) != 4) {
              while ((i | 0) != 4) {
                v[(y = ((i << 2) + g | 0) + o | 0) | 0] = c[c[y | 0] + 1296 | 0];
                i = i + 1 | 0;
              }
              o = o + 1 | 0;
            }
            if (!(y = d & 255)) {
              break;
            }
            A(y, g, a);
            o = 0;
            while ((o | 0) != 4) {
              w = b(i = c[(y = (o << 2) + g | 0) | 0], 14);
              h = w = (w ^= b(s = c[y + 1 | 0], 11)) ^ b(f = c[y + 2 | 0], 13);
              h ^= b(w = c[(x = y) + 3 | 0], 9);
              v[x | 0] = h;
              x = y;
              h = b(i, 9) ^ b(s, 14) ^ b(f, 11) ^ b(w, 13);
              v[x + 1 | 0] = h;
              x = y;
              h = b(i, 13) ^ b(s, 9) ^ b(f, 14) ^ b(w, 11);
              v[x + 2 | 0] = h;
              x = y;
              h = b(i, 11) ^ b(s, 13) ^ b(f, 9) ^ b(w, 14);
              v[x + 3 | 0] = h;
              o = o + 1 | 0;
            }
            d = d - 1 | 0;
          }
          A(0, g, a);
          m(g, r);
          y = u[300 + a >> 2];
          o = u[296 + a >> 2];
          v[r + 8 | 0] = o;
          v[r + 9 | 0] = o >>> 8;
          v[r + 10 | 0] = o >>> 16;
          v[r + 11 | 0] = o >>> 24;
          v[r + 12 | 0] = y;
          v[r + 13 | 0] = y >>> 8;
          v[r + 14 | 0] = y >>> 16;
          v[r + 15 | 0] = y >>> 24;
          y = u[292 + a >> 2];
          o = u[288 + a >> 2];
          v[r | 0] = o;
          v[r + 1 | 0] = o >>> 8;
          v[r + 2 | 0] = o >>> 16;
          v[r + 3 | 0] = o >>> 24;
          v[r + 4 | 0] = y;
          v[r + 5 | 0] = y >>> 8;
          v[r + 6 | 0] = y >>> 16;
          v[r + 7 | 0] = y >>> 24;
          e = e + 16 | 0;
          g = g + 16 | 0;
        }
        if (!(n & 15 | n >>> (y = 0) < 16) && !(((r = c[(o = n - 1 | 0) + t | 0]) - 1 & 255) >>> 0 > 15 | n >>> 0 <= r >>> 0)) {
          for (i = 1;;) {
            if (r >>> 0 <= (i & 255) >>> 0) {
              y = o;
              break r;
            }
            i = i + 1 | 0;
            if ((r | 0) != c[(o = o - 1 | 0) + t | 0]) {
              break;
            }
          }
        }
      }
      l = 304 + a | 0;
      break;
    }
    v[(g = o << 2) + a | 0] = c[(y = 256 + a | 0) + g | 0];
    v[(d = g | 1) + a | 0] = c[y + d | 0];
    v[(d = g | 2) + a | 0] = c[y + d | 0];
    v[(g |= 3) + a | 0] = c[g + y | 0];
    o = o + 1 | 0;
  }
  return y | 0;
}

export const encrypt = (ssid, fp) => {
  let we = btoa(String.fromCharCode.apply(null, fe))
  let le = ce(fe)
  let b = ce(Buffer.from(fp, 'utf-8').toString('binary'));
  let ge = b[0]
  let d = b[1]
  let L = b[2]
  let p = oe(le[0], ge, L, 1);
  let V = btoa(String.fromCharCode(...(e = Array.from(d)).slice(0, p)))
  
  return {data: `Web;`.concat(ssid, ';').concat(we, ';').concat(V)}
}