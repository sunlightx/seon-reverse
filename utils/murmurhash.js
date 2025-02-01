export class MurmurHash {
  r = function(r, t) {
    r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]],
    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
    var n = [0, 0, 0, 0];
    return n[3] += r[3] + t[3],
    n[2] += n[3] >>> 16,
    n[3] &= 65535,
    n[2] += r[2] + t[2],
    n[1] += n[2] >>> 16,
    n[2] &= 65535,
    n[1] += r[1] + t[1],
    n[0] += n[1] >>> 16,
    n[1] &= 65535,
    n[0] += r[0] + t[0],
    n[0] &= 65535,
    [n[0] << 16 | n[1], n[2] << 16 | n[3]]
  };
  a = function(r, t) {
    return [r[0] ^ t[0], r[1] ^ t[1]]
  };
  t = function(r, t) {
    r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]],
    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
    var n = [0, 0, 0, 0];
    return n[3] += r[3] * t[3],
    n[2] += n[3] >>> 16,
    n[3] &= 65535,
    n[2] += r[2] * t[3],
    n[1] += n[2] >>> 16,
    n[2] &= 65535,
    n[2] += r[3] * t[2],
    n[1] += n[2] >>> 16,
    n[2] &= 65535,
    n[1] += r[1] * t[3],
    n[0] += n[1] >>> 16,
    n[1] &= 65535,
    n[1] += r[2] * t[2],
    n[0] += n[1] >>> 16,
    n[1] &= 65535,
    n[1] += r[3] * t[1],
    n[0] += n[1] >>> 16,
    n[1] &= 65535,
    n[0] += r[0] * t[3] + r[1] * t[2] + r[2] * t[1] + r[3] * t[0],
    n[0] &= 65535,
    [n[0] << 16 | n[1], n[2] << 16 | n[3]]
  };
  n = function(r, t) {
    return 32 == (t %= 64) ? [r[1], r[0]] : t < 32 ? [r[0] << t | r[1] >>> 32 - t, r[1] << t | r[0] >>> 32 - t] : (t -= 32,
    [r[1] << t | r[0] >>> 32 - t, r[0] << t | r[1] >>> 32 - t])
  };
  e = function(r, t) {
    return 0 == (t %= 64) ? r : t < 32 ? [r[0] << t | r[1] >>> 32 - t, r[1] << t] : [r[1] << t - 32, 0]
  };
  i = function(r) {
    return r = this.a(r, [0, r[0] >>> 1]),
    r = this.t(r, [4283543511, 3981806797]),
    r = this.a(r, [0, r[0] >>> 1]),
    r = this.t(r, [3301882366, 444984403]),
    this.a(r, [0, r[0] >>> 1])
  };
  x64hash128 = function(o, v) {
    v = v || 0;
    var u = (o = o || "").length % 16;
    var c = o.length - u;
    var s = [0, v];
    var f = [0, v];
    var w = [0, 0];
    var l = [0, 0];
    var y = [2277735313, 289559509];
    var g = [1291169091, 658871167];
    for (var d = 0; d < c; d += 16)
        w = [255 & o.charCodeAt(d + 4) | (255 & o.charCodeAt(d + 5)) << 8 | (255 & o.charCodeAt(d + 6)) << 16 | (255 & o.charCodeAt(d + 7)) << 24, 255 & o.charCodeAt(d) | (255 & o.charCodeAt(d + 1)) << 8 | (255 & o.charCodeAt(d + 2)) << 16 | (255 & o.charCodeAt(d + 3)) << 24],
        l = [255 & o.charCodeAt(d + 12) | (255 & o.charCodeAt(d + 13)) << 8 | (255 & o.charCodeAt(d + 14)) << 16 | (255 & o.charCodeAt(d + 15)) << 24, 255 & o.charCodeAt(d + 8) | (255 & o.charCodeAt(d + 9)) << 8 | (255 & o.charCodeAt(d + 10)) << 16 | (255 & o.charCodeAt(d + 11)) << 24],
        w = this.t(w, y),
        w = this.n(w, 31),
        w = this.t(w, g),
        s = this.a(s, w),
        s = this.n(s, 27),
        s = this.r(s, f),
        s = this.r(this.t(s, [0, 5]), [0, 1390208809]),
        l = this.t(l, g),
        l =this. n(l, 33),
        l = this.t(l, y),
        f = this.a(f, l),
        f = this.n(f, 31),
        f = this.r(f, s),
        f = this.r(this.t(f, [0, 5]), [0, 944331445]);
    switch (w = [0, 0],
    l = [0, 0],
    u) {
    case 15:
        l = this.a(l, this.e([0, o.charCodeAt(d + 14)], 48));
    case 14:
        l = this.a(l, this.e([0, o.charCodeAt(d + 13)], 40));
    case 13:
        l = this.a(l, this.e([0, o.charCodeAt(d + 12)], 32));
    case 12:
        l = this.a(l, this.e([0, o.charCodeAt(d + 11)], 24));
    case 11:
        l = this.a(l, this.e([0, o.charCodeAt(d + 10)], 16));
    case 10:
        l = this.a(l, this.e([0, o.charCodeAt(d + 9)], 8));
    case 9:
        l = this.a(l, [0, o.charCodeAt(d + 8)]),
        l = this.t(l, g),
        l = this.n(l, 33),
        l = this.t(l, y),
        f = this.a(f, l);
    case 8:
        w = this.a(w, this.e([0, o.charCodeAt(d + 7)], 56));
    case 7:
        w = this.a(w, this.e([0, o.charCodeAt(d + 6)], 48));
    case 6:
        w = this.a(w, this.e([0, o.charCodeAt(d + 5)], 40));
    case 5:
        w = this.a(w, this.e([0, o.charCodeAt(d + 4)], 32));
    case 4:
        w = this.a(w, this.e([0, o.charCodeAt(d + 3)], 24));
    case 3:
        w = this.a(w, this.e([0, o.charCodeAt(d + 2)], 16));
    case 2:
        w = this.a(w, this.e([0, o.charCodeAt(d + 1)], 8));
    case 1:
        w = this.a(w, [0, o.charCodeAt(d)]),
        w = this.t(w, y),
        w = this.n(w, 31),
        w = this.t(w, g),
        s = this.a(s, w)
    }
    return s = this.a(s, [0, o.length]),
    f = this.a(f, [0, o.length]),
    s = this.r(s, f),
    f = this.r(f, s),
    s = this.i(s),
    f = this.i(f),
    s = this.r(s, f),
    f = this.r(f, s),
    ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8)
  };  
}