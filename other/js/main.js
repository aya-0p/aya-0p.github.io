function P(f) {
  return new Promise(function(n) {
    setTimeout(function() {
      n();
    }, f);
  });
}
function Q() {
  for (var n = 0; n < 200; ++n)
    1 == f[n] ? (L[n].src = "https://cdn.glitch.com/74e97eb4-beb0-483c-bf08-6d94d2811e7c%2Fblack.png?v=1622855562015") : (L[n].src = "https://cdn.glitch.com/74e97eb4-beb0-483c-bf08-6d94d2811e7c%2Fnull.png?v=1622855571033");
}
function R(f, n) {
  return (
    (f = Math.ceil(f)),
    (n = Math.floor(n)),
    Math.floor(Math.random() * (n - f + 1) + f)
  );
}
const K = [
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1,
  !1
];
let f = K,
  L = document.getElementsByTagName("img");
const e = [
  [
    [-1, 0, 1, -10],
    [-1, 0, 10, 11],
    [0, 1, 9, 10],
    [-20, -10, 0, 10],
    [0, 1, 10, 11],
    [-11, -10, 0, 10],
    [-10, 0, -9, 10]
  ],
  [
    [-10, -0, 1, 10],
    [-9, 0, 10, 1],
    [-10, 0, 1, 11],
    [-1, 1, 0, 2],
    [0, 1, 10, 11],
    [-1, 0, 1, 9],
    [-1, 0, 1, -11]
  ],
  [
    [-1, 0, 1, 10],
    [-1, 0, 10, 11],
    [0, 1, 9, 10],
    [-20, -10, 0, 10],
    [0, 1, 10, 11],
    [-10, 0, 10, 11],
    [-10, 0, 9, 10]
  ],
  [
    [-10, 0, -1, 10],
    [-9, 0, 10, 1],
    [-10, 0, 1, 11],
    [-1, 1, 0, 2],
    [0, 1, 10, 11],
    [-9, -1, 0, 1],
    [-1, 0, 1, 11]
  ]
];
let g,
  h,
  j,
  k,
  l,
  M = !1,
  y = !1,
  N = 9;
var z;
let m,
  n,
  o,
  p,
  q,
  s,
  t,
  u,
  r,
  v,
  O = !1,
  x,
  A = [
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    110,
    120,
    130,
    140,
    150,
    160,
    170,
    180,
    190
  ],
  B = [
    1,
    11,
    21,
    31,
    41,
    51,
    61,
    71,
    81,
    91,
    101,
    111,
    121,
    131,
    141,
    151,
    161,
    171,
    181,
    191
  ],
  C = [
    2,
    12,
    22,
    32,
    42,
    52,
    62,
    72,
    82,
    92,
    102,
    112,
    122,
    132,
    142,
    152,
    162,
    172,
    182,
    192
  ],
  D = [
    3,
    13,
    23,
    33,
    43,
    53,
    63,
    73,
    83,
    93,
    103,
    113,
    123,
    133,
    143,
    153,
    163,
    173,
    183,
    193
  ],
  E = [
    4,
    14,
    24,
    34,
    44,
    54,
    64,
    74,
    84,
    94,
    104,
    114,
    124,
    134,
    144,
    154,
    164,
    174,
    184,
    194
  ],
  F = [
    5,
    15,
    25,
    35,
    45,
    55,
    65,
    75,
    85,
    95,
    105,
    115,
    125,
    135,
    145,
    155,
    165,
    175,
    185,
    195
  ],
  G = [
    6,
    16,
    26,
    36,
    46,
    56,
    66,
    76,
    86,
    96,
    106,
    116,
    126,
    136,
    146,
    156,
    166,
    176,
    186,
    196
  ],
  H = [
    7,
    17,
    27,
    37,
    47,
    57,
    67,
    77,
    87,
    97,
    107,
    117,
    127,
    137,
    147,
    157,
    167,
    177,
    187,
    197
  ],
  I = [
    8,
    18,
    28,
    38,
    48,
    58,
    68,
    78,
    88,
    98,
    108,
    118,
    128,
    138,
    148,
    158,
    168,
    178,
    188,
    198
  ],
  J = [
    9,
    19,
    29,
    39,
    49,
    59,
    69,
    79,
    89,
    99,
    109,
    119,
    129,
    139,
    149,
    159,
    169,
    179,
    189,
    199
  ],
  w = 0,
    pn = 0;
async function S() {
  T(), U();
}
async function T() {
  (O = !0),
    f[0] ||
      f[1] ||
      f[2] ||
      f[3] ||
      f[4] ||
      f[5] ||
      f[6] ||
      f[7] ||
      f[8] ||
      f[9] ||
      f[10] ||
      f[11] ||
      f[12] ||
      f[13] ||
      f[14] ||
      f[15] ||
      f[16] ||
      f[17] ||
      f[18] ||
      f[19] ||
      f[20] ||
      f[21] ||
      f[22] ||
      f[23] ||
      f[24] ||
      f[25] ||
      f[26] ||
      f[27] ||
      f[28] ||
      f[29] ||
      f[30] ||
      f[31] ||
      f[32] ||
      f[33] ||
      f[34] ||
      f[35] ||
      f[36] ||
      f[37] ||
      f[38] ||
      f[39] ||
      (b(),
      await P(500),
      (w = 0),
      (O = !1),
      N >= 6
        ? ((h = [0, 1, 2, 3, 4, 5, 6]),
          (j = []),
          (k = R(0, 6)),
          j.push(h[k]),
          h.splice(k, 1),
          (k = R(0, 5)),
          j.push(h[k]),
          h.splice(k, 1),
          (k = R(0, 4)),
          j.push(h[k]),
          h.splice(k, 1),
          (k = R(0, 3)),
          j.push(h[k]),
          h.splice(k, 1),
          (k = R(0, 2)),
          j.push(h[k]),
          h.splice(k, 1),
          (k = R(0, 1)),
          j.push(h[k]),
          h.splice(k, 1),
          (k = 0),
          j.push(h[k]),
          (N = 0))
        : N++,
      (z = j[N]),
      V(24));
}
async function U() {
  await P(0), Q(), U();
}
function b() {
  if (
    f[40] &&
    f[41] &&
    f[42] &&
    f[43] &&
    f[44] &&
    f[45] &&
    f[46] &&
    f[47] &&
    f[48] &&
    f[49]
  ) {
    x = 40;
    for (var n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[50] &&
    f[51] &&
    f[52] &&
    f[53] &&
    f[54] &&
    f[55] &&
    f[56] &&
    f[57] &&
    f[58] &&
    f[59]
  ) {
    x = 50;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[60] &&
    f[61] &&
    f[62] &&
    f[63] &&
    f[64] &&
    f[65] &&
    f[66] &&
    f[67] &&
    f[68] &&
    f[69]
  ) {
    x = 60;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[70] &&
    f[71] &&
    f[72] &&
    f[73] &&
    f[74] &&
    f[75] &&
    f[76] &&
    f[77] &&
    f[78] &&
    f[79]
  ) {
    x = 70;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[80] &&
    f[81] &&
    f[82] &&
    f[83] &&
    f[84] &&
    f[85] &&
    f[86] &&
    f[87] &&
    f[88] &&
    f[89]
  ) {
    x = 80;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[90] &&
    f[91] &&
    f[92] &&
    f[93] &&
    f[94] &&
    f[95] &&
    f[96] &&
    f[97] &&
    f[98] &&
    f[99]
  ) {
    x = 90;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[100] &&
    f[101] &&
    f[102] &&
    f[103] &&
    f[104] &&
    f[105] &&
    f[106] &&
    f[107] &&
    f[108] &&
    f[109]
  ) {
    x = 100;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[110] &&
    f[111] &&
    f[112] &&
    f[113] &&
    f[114] &&
    f[115] &&
    f[116] &&
    f[117] &&
    f[118] &&
    f[119]
  ) {
    x = 110;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[120] &&
    f[121] &&
    f[122] &&
    f[123] &&
    f[124] &&
    f[125] &&
    f[126] &&
    f[127] &&
    f[128] &&
    f[129]
  ) {
    x = 120;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[130] &&
    f[131] &&
    f[132] &&
    f[133] &&
    f[134] &&
    f[135] &&
    f[136] &&
    f[137] &&
    f[138] &&
    f[139]
  ) {
    x = 130;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[140] &&
    f[141] &&
    f[142] &&
    f[143] &&
    f[144] &&
    f[145] &&
    f[146] &&
    f[147] &&
    f[148] &&
    f[149]
  ) {
    x = 140;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[150] &&
    f[151] &&
    f[152] &&
    f[153] &&
    f[154] &&
    f[155] &&
    f[156] &&
    f[157] &&
    f[158] &&
    f[159]
  ) {
    x = 150;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[160] &&
    f[161] &&
    f[162] &&
    f[163] &&
    f[164] &&
    f[165] &&
    f[166] &&
    f[167] &&
    f[168] &&
    f[169]
  ) {
    x = 160;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[170] &&
    f[171] &&
    f[172] &&
    f[173] &&
    f[174] &&
    f[175] &&
    f[176] &&
    f[177] &&
    f[178] &&
    f[179]
  ) {
    x = 170;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[180] &&
    f[181] &&
    f[182] &&
    f[183] &&
    f[184] &&
    f[185] &&
    f[186] &&
    f[187] &&
    f[188] &&
    f[189]
  ) {
    x = 180;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  if (
    f[190] &&
    f[191] &&
    f[192] &&
    f[193] &&
    f[194] &&
    f[195] &&
    f[196] &&
    f[197] &&
    f[198] &&
    f[199]
  ) {
    x = 190;
    for (n = x; n > 0; n--) f[n + 9] = f[n - 1];
    pn++;
  }
  document.getElementById("point").innerHTML = pn;
}
async function V(n) {
  if (
    ((g = n), !0 === (M = W(e[w][z][0], e[w][z][1], e[w][z][2], e[w][z][3])))
  )
    T();
  else {
    for (var o = 0; o < 4; ++o) (l = g + e[w][z][o]), (f[l] = !1);
    g += 10;
    for (o = 0; o < 4; ++o) (l = g + e[w][z][o]), (f[l] = !0);
    await P(200), V(g);
  }
}
function W(e, c, i, l) {
  return (
    (o = (v = g) + c + (m = 10)),
    (p = v + i + m),
    (q = v + l + m),
    (r = v + e),
    (s = v + c),
    (t = v + i),
    (u = v + l),
    !!(
      (f[(n = v + e + m)] &&
        n != r &&
        f[n] &&
        n != s &&
        f[n] &&
        n != t &&
        f[n] &&
        n != u) ||
      (f[o] && o != r && f[o] && o != s && f[o] && o != t && f[o] && o != u) ||
      (f[p] && p != r && f[p] && p != s && f[p] && p != t && f[p] && p != u) ||
      (f[q] && q != r && f[q] && q != s && f[q] && q != t && f[q] && q != u) ||
      void 0 === f[n] ||
      void 0 === f[o] ||
      void 0 === f[p] ||
      void 0 === f[q]
    )
  );
}
function X(e, c, i, l) {
  return (
    (o = (v = g) + c + (m = 1)),
    (p = v + i + m),
    (q = v + l + m),
    (r = v + e),
    (s = v + c),
    (t = v + i),
    (u = v + l),
    !!(
      (f[(n = v + e + m)] &&
        n != r &&
        f[n] &&
        n != s &&
        f[n] &&
        n != t &&
        f[n] &&
        n != u) ||
      (f[o] && o != r && f[o] && o != s && f[o] && o != t && f[o] && o != u) ||
      (f[p] && p != r && f[p] && p != s && f[p] && p != t && f[p] && p != u) ||
      (f[q] && q != r && f[q] && q != s && f[q] && q != t && f[q] && q != u) ||
      void 0 === f[n] ||
      void 0 === f[o] ||
      void 0 === f[p] ||
      void 0 === f[q] ||
      A.includes(n) ||
      A.includes(o) ||
      A.includes(p) ||
      A.includes(q)
    )
  );
}
function Y(e, c, i, l) {
  return (
    (o = (v = g) + c + (m = -1)),
    (p = v + i + m),
    (q = v + l + m),
    (r = v + e),
    (s = v + c),
    (t = v + i),
    (u = v + l),
    !!(
      (f[(n = v + e + m)] &&
        n != r &&
        f[n] &&
        n != s &&
        f[n] &&
        n != t &&
        f[n] &&
        n != u) ||
      (f[o] && o != r && f[o] && o != s && f[o] && o != t && f[o] && o != u) ||
      (f[p] && p != r && f[p] && p != s && f[p] && p != t && f[p] && p != u) ||
      (f[q] && q != r && f[q] && q != s && f[q] && q != t && f[q] && q != u) ||
      void 0 === f[n] ||
      void 0 === f[o] ||
      void 0 === f[p] ||
      void 0 === f[q] ||
      J.includes(n) ||
      J.includes(o) ||
      J.includes(p) ||
      J.includes(q)
    )
  );
}
function Z() {
  return A.includes(g) ||
    B.includes(g) ||
    C.includes(g) ||
    D.includes(g) ||
    E.includes(g)
    ? ((r = g + e[w][z][0]),
      (s = g + e[w][z][1]),
      (t = g + e[w][z][2]),
      (u = g + e[w][z][3]),
      3 == w && (w = -1),
      (n = g + e[w + 1][z][0]),
      (o = g + e[w + 1][z][1]),
      (p = g + e[w + 1][z][2]),
      (q = g + e[w + 1][z][3]),
      !!(
        (f[n] &&
          n != r &&
          f[n] &&
          n != s &&
          f[n] &&
          n != t &&
          f[n] &&
          n != u) ||
        (f[o] &&
          o != r &&
          f[o] &&
          o != s &&
          f[o] &&
          o != t &&
          f[o] &&
          o != u) ||
        (f[p] &&
          p != r &&
          f[p] &&
          p != s &&
          f[p] &&
          p != t &&
          f[p] &&
          p != u) ||
        (f[q] &&
          q != r &&
          f[q] &&
          q != s &&
          f[q] &&
          q != t &&
          f[q] &&
          q != u) ||
        void 0 === f[n] ||
        void 0 === f[o] ||
        void 0 === f[p] ||
        void 0 === f[q] ||
        J.includes(n) ||
        J.includes(o) ||
        J.includes(p) ||
        J.includes(q)
      ))
    : F.includes(g) ||
      G.includes(g) ||
      H.includes(g) ||
      I.includes(g) ||
      J.includes(g)
    ? ((r = g + e[w][z][0]),
      (s = g + e[w][z][1]),
      (t = g + e[w][z][2]),
      (u = g + e[w][z][3]),
      3 == w && (w = -1),
      (n = g + e[w + 1][z][0]),
      (o = g + e[w + 1][z][1]),
      (p = g + e[w + 1][z][2]),
      (q = g + e[w + 1][z][3]),
      !!(
        (f[n] &&
          n != r &&
          f[n] &&
          n != s &&
          f[n] &&
          n != t &&
          f[n] &&
          n != u) ||
        (f[o] &&
          o != r &&
          f[o] &&
          o != s &&
          f[o] &&
          o != t &&
          f[o] &&
          o != u) ||
        (f[p] &&
          p != r &&
          f[p] &&
          p != s &&
          f[p] &&
          p != t &&
          f[p] &&
          p != u) ||
        (f[q] &&
          q != r &&
          f[q] &&
          q != s &&
          f[q] &&
          q != t &&
          f[q] &&
          q != u) ||
        void 0 === f[n] ||
        void 0 === f[o] ||
        void 0 === f[p] ||
        void 0 === f[q] ||
        A.includes(n) ||
        A.includes(o) ||
        A.includes(p) ||
        A.includes(q)
      ))
    : void 0;
}
function a() {
  for (var n = 0; n < 4; ++n) (l = g + e[w][z][n]), (f[l] = !1);
  4 == ++w && (w = 0);
  for (n = 0; n < 4; ++n) (l = g + e[w][z][n]), (f[l] = !0);
}
window.addEventListener(
  "load",
  function() {
    var n, o;
    window.addEventListener(
      "touchstart",
      function(f) {
        f.preventDefault(), (n = f.touches[0].pageX);
      },
      { passive: !1 }
    ),
      window.addEventListener(
        "touchmove",
        function(f) {
          f.preventDefault(), (o = f.changedTouches[0].pageX);
        },
        { passive: !1 }
      ),
      window.addEventListener(
        "touchend",
        function() {
          if (n > o + 50 && o) {
            if (
              ((n = 0),
              (o = 0),
              !1 === (y = Y(e[w][z][0], e[w][z][1], e[w][z][2], e[w][z][3])) &&
                !1 === O)
            ) {
              for (var c = 0; c < 4; ++c) (l = g + e[w][z][c]), (f[l] = !1);
              g -= 1;
              for (c = 0; c < 4; ++c) (l = g + e[w][z][c]), (f[l] = !0);
            }
          } else if (n + 50 < o && o) {
            if (
              ((n = 0),
              (o = 0),
              !1 === (y = X(e[w][z][0], e[w][z][1], e[w][z][2], e[w][z][3])) &&
                !1 === O)
            ) {
              for (c = 0; c < 4; ++c) (l = g + e[w][z][c]), (f[l] = !1);
              g += 1;
              for (c = 0; c < 4; ++c) (l = g + e[w][z][c]), (f[l] = !0);
            }
          } else
            (n = 0),
              (o = 0),
              (y = Z()),
              -1 == w && (w = 3),
              !1 === y && !1 === O && a();
        },
        { passive: !1 }
      );
  },
  { passive: !1 }
),
  Q(),
  S();
