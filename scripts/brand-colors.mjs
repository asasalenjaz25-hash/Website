// ASAS palette (design-system/ASAS-theme-profile.pdf) and the mapping from the
// template's hard-coded off-brand colours onto it. Neutral greys are left alone.

export const PALETTE = {
  navy: [6, 36, 94], // #06245E, from the logo
  blue: [24, 79, 180], // #184FB4, Action Blue
  gold: [242, 179, 0], // #F2B300, Signal Gold
  deep: [4, 22, 52], // #041634, Deep Navy
  ink: [10, 26, 58], // #0A1A3A
  tint: [237, 242, 253], // #EDF2FD
  tintStrong: [211, 224, 248], // #D3E0F8
  surface: [244, 247, 252], // #F4F7FC
  border: [220, 227, 238], // #DCE3EE
  goldTint: [254, 246, 219], // #FEF6DB
  social: [22, 51, 107], // #16336B, icon circles on Deep Navy
};

const P = PALETTE;
// "r,g,b" of a template colour -> palette colour. Alpha is kept.
const MAP = {
  // bright blues -> Action Blue
  "1,100,225": P.blue, "1,101,223": P.blue, "29,114,242": P.blue, "6,97,233": P.blue,
  "26,116,228": P.blue, "7,124,234": P.blue,
  // light blues -> blue tints
  "175,220,253": P.tintStrong, "176,221,254": P.tintStrong, "212,231,252": P.tintStrong, "233,246,254": P.tint,
  "240,240,252": P.tint, "245,244,250": P.surface,
  // navies and purples -> navy family
  "4,27,52": P.ink, "64,45,49": P.ink, "29,31,21": P.ink, "93,50,34": P.ink, "10,40,3": P.ink,
  "11,22,63": P.navy, "13,28,93": P.navy, "48,25,150": P.navy, "0,23,79": P.navy, "7,34,67": P.navy,
  "38,61,108": P.navy, "0,25,76": P.navy, "1,53,102": P.navy, "10,6,68": P.navy, "3,37,50": P.navy,
  "4,5,66": P.deep, "0,11,26": P.deep, "5,28,53": P.deep, "4,20,39": P.deep, "1,11,37": P.deep,
  "6,7,40": P.deep, "3,4,28": P.deep,
  "47,43,94": P.social,
  // orange / red accents -> Action Blue (keeps white-on-colour contrast)
  "235,96,41": P.blue, "235,96,40": P.blue, "255,91,2": P.blue, "210,28,29": P.blue, "60,162,0": P.blue,
  // rating stars -> gold
  "255,165,0": P.gold, "255,128,0": P.gold, "255,119,0": P.gold,
  // warm / green-tinted off-whites -> navy-tinted surface
  "245,246,241": P.surface, "247,247,243": P.surface, "248,247,240": P.surface, "243,239,237": P.surface,
  "251,232,232": P.surface, "253,249,249": P.surface, "247,243,243": P.surface,
  "208,212,201": P.border,
  "244,239,207": P.goldTint, "255,252,225": P.goldTint, "255,247,219": P.goldTint,
};

const hex = (rgb) => "#" + rgb.map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();

function parse(token) {
  let m = token.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (m) {
    const h = m[1].length === 3 ? [...m[1]].map((c) => c + c).join("") : m[1];
    return { rgb: [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)), a: null };
  }
  m = token.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i);
  if (m) return { rgb: [+m[1], +m[2], +m[3]], a: m[4] ?? null };
  return null;
}

const COLOR_RE = /#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b|rgba?\([^)]*\)/g;

/** Replace every mapped colour inside a CSS value. Returns null if nothing changed. */
export function mapColors(value) {
  let changed = false;
  const out = value.replace(COLOR_RE, (token) => {
    const c = parse(token);
    const to = c && MAP[c.rgb.join(",")];
    if (!to) return token;
    changed = true;
    return c.a === null ? hex(to) : `rgba(${to.join(", ")}, ${c.a})`;
  });
  return changed ? out : null;
}
