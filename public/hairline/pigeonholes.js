/**
 * Pigeonholes: a wooden mail sorter of twelve cubbies, four across and three
 * high, standing on a plinth. Ten cubbies hold an envelope lying flat, flap up;
 * two are empty. The pointer picks a cubby on the rack's front plane, which
 * never moves; its envelope slides out toward the viewer and the ones round it
 * follow less, staggered by distance on the 700ms curve. A label holder sits on
 * the lip under each cubby, what makes a rack a mail sorter; a proud envelope
 * covers it. The chosen envelope and its holder take the bright stroke. At rest
 * one envelope is half out. The slider is how far, in world units.
 *
 * The pattern: discrete items, as Riffle. Tweens, a stagger by distance on the
 * grid, a hit test on a static plane, and paint order shelf by shelf, so the
 * dividers and the shelf above cover what lies in each cubby.
 */
const {
  Cam, clamp, facing, fillet, fit, lerp, open, poly, prism, proj, rings, rrect, tdone, tset, tval, tween,
  disposer, mk, pointer, put, register, solid,
} = HL;

const C = 4, R = 3, CW = 22, CH = 16, DT = 2.2, SD = 2.6, ST = 2.4, D = 30;
const W = 2 * SD + C * CW + (C - 1) * DT, H0 = ST + R * CH + (R - 1) * ST;
const TK = 1.1, FLAP = 7, STEP = 45, HERO = 6, HERO_OUT = 13, KEEP = 9, MAXO = 18;
// per cubby, numbered from the top left: [width, x offset, length, resting proud]; null is empty
const MAIL = [
  [18, -1, 26, -1.6], [16, 1, 27, 0.6], [19, 0, 25, -2.6], null,
  [17, 0.5, 27, 0.4], [18, -0.5, 26, -1.2], [19, 0.5, 26, -0.4], [16, -1, 25, 0.7],
  null, [18, 1, 27, -2.2], [17, -1, 26, 0.3], [19, 0, 27, -1],
];
const xi = (c) => SD + c * (CW + DT), zf = (r) => ST + r * (CH + ST);

/** The share of the full slide a cubby gets at d cells from the one chosen: 1, .54 next door, .19 two away, 0 at three. */
const falloff = (d) => Math.max(0, 1 - d / 3) ** 1.5;

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let far = value, act = -1;

  // Fitted to the plinth, the lid, and a bottom envelope slid out as far as the slider goes.
  const cam = Cam(45, 0.5, 2.2);
  fit(cam, [[-8, -8, -4], [W + 8, -8, -4], [-8, D + 16, -4], [W + 8, D + 16, -4],
    [-1.2, -1.2, H0 + 3], [W + 1.2, -1.2, H0 + 3], [-1.2, D + 1.2, H0 + 3], [0, D + MAXO, ST], [W, D + MAXO, ST]], 200, 166);
  const P = proj(cam), front = facing(cam);

  const g = mk("g", {}, svg);
  const slab = (x0, y0, x1, y1, r, b, z0, z1) => { const [ring, inner] = rings(x0, y0, x1, y1, r, b); put(solid(g), prism(P, front, ring, inner, z0, z1)); };

  // Back to front: plinth, left side, then shelf by shelf from the bottom (the
  // shelf, its label holders, then divider and envelope left to right), right side, lid.
  slab(-8, -8, W + 8, D + 16, 7, 2, -4, 0);
  slab(0, 0, SD, D, 1, 0.6, 0, H0);
  const cells = [];
  for (let r = 0; r < R; r++) {
    slab(SD, 0, W - SD, D, 0.8, 0.7, zf(r) - ST, zf(r));
    const row = [];
    for (let c = 0; c < C; c++) {
      const i = (R - 1 - r) * C + c, x = xi(c) + CW / 2;
      const tag = mk("path", { class: "nf lo", d: poly(rrect(x - 4.5, zf(r) - 1.9, x + 4.5, zf(r) - 0.5, 0.6, 3).map((q) => P(q.u, D, q.v))) }, g);
      row.push({ i, c, rt: R - 1 - r, tag, s: null });
    }
    for (const k of row) {
      if (k.c > 0) slab(xi(k.c) - DT, 0, xi(k.c), D, 0.8, 0.5, zf(r), zf(r) + CH);
      const m = MAIL[k.i];
      if (m) {
        const x0 = xi(k.c) + (CW - m[0]) / 2 + m[1], el = solid(g);
        const rest = k.i === HERO ? HERO_OUT : m[3];
        k.s = { x0, x1: x0 + m[0], z: zf(r), L: m[2], base: m[3], rest, el, flap: mk("path", { class: "nf lo" }, el.g), tw: tween(rest), drawn: NaN };
      }
      cells[k.i] = k;
    }
  }
  slab(W - SD, 0, W, D, 1, 0.6, 0, H0);
  slab(-1.2, -1.2, W + 1.2, D + 1.2, 2, 1, H0, H0 + 3);
  const mail = cells.filter((k) => k.s);

  /** An envelope with its front edge `o` past the rack's face: a thin plate, and the V of its flap on top. */
  function drawSheet(s, o) {
    if (o === s.drawn) return;
    s.drawn = o;
    const yF = D + o, [ring, inner] = rings(s.x0, yF - s.L, s.x1, yF, 1.4, 0.5), z = s.z + TK;
    put(s.el, prism(P, front, ring, inner, s.z, z));
    // the flap's two folds, its tip rounded: the filleted triangle without its base
    const v = fillet([[s.x0 + 1, yF - 0.7], [(s.x0 + s.x1) / 2, yF - FLAP], [s.x1 - 1, yF - 0.7]], [0.1, 1, 0.1]);
    s.flap.setAttribute("d", open(v.slice(4, 11).map((q) => P(q[0], q[1], z))));
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const k of mail) { drawSheet(k.s, tval(k.s.tw, now)); if (!tdone(k.s.tw, now)) moving = true; }
    return moving;
  });
  bag.add(B.unregister);

  // The hit plane: the rack's front face, y = D. It never moves, so a sliding envelope cannot flip the choice.
  const O = P(0, D, 0), ex = P(1, D, 0), ez = P(0, D, 1);
  const ax = [ex[0] - O[0], ex[1] - O[1]], az = [ez[0] - O[0], ez[1] - O[1]], det = ax[0] * az[1] - ax[1] * az[0];
  function hit([sx, sy]) {
    const qx = sx - O[0], qy = sy - O[1];
    const x = (qx * az[1] - qy * az[0]) / det, z = (ax[0] * qy - ax[1] * qx) / det;
    if (x < -2 || x > W + 2 || z < 0 || z > H0 + 4) return -1;
    const c = clamp(Math.floor((x - SD + DT / 2) / (CW + DT)), 0, C - 1);
    const r = clamp(Math.floor((z - ST / 2) / (CH + ST)), 0, R - 1);
    return (R - 1 - r) * C + c;
  }

  /** Slides every envelope toward its pose for choice a (-1 is rest), each delayed by its distance from cubby `from`. */
  function aim(a, from) {
    const now = performance.now(), on = a >= 0 ? a : HERO, f = cells[from];
    for (const k of cells) {
      const d = Math.hypot(k.c - f.c, k.rt - f.rt);
      if (k.s) {
        const t = a < 0 ? k.s.rest : lerp(k.s.base, far, falloff(d));
        tset(k.s.tw, Math.min(t, k.s.L - KEEP), now, d * STEP);
        k.s.el.sil.classList.toggle("hi", k.i === on);
      }
      k.tag.setAttribute("class", k.i === on ? "nf hi" : "nf lo");
    }
    read.textContent = a < 0 ? "rest" : `box ${a + 1}` + (cells[a].s ? "" : " · 0");
    B.wake();
  }
  function setActive(a) {
    if (a === act) return;
    const from = a >= 0 ? a : act;
    act = a;
    aim(a, from);
  }
  aim(-1, HERO);

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { far = v; if (act >= 0) aim(act, act); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "pigeonholes",
  means: "A rack of pigeonholes: the envelope under the pointer slides out toward you, its neighbours following less.",
  rules: [1, 2, 5, 6],
  range: [8, 13, 18],
  mount,
});
