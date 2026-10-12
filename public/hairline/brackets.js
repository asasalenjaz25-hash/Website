/**
 * Brackets: a section of exterior wall on a rounded plinth, with three pairs of
 * L-shaped outdoor-unit brackets fixed at staggered heights and a pipe sleeve
 * through the wall above each pair. Nothing hangs on them. The pair
 * under the pointer leans out from its foot, its arms tipping out and down as
 * if to take a unit; the other pairs lean less, staggered outwards from it on
 * the 700ms lift curve. One pair is bright at rest; the chosen pair takes it.
 * The slider is how far the chosen pair tips, in degrees.
 *
 * The pattern: discrete items, as Riffle. A tween per pair, a stagger by
 * distance, and a hit test on the pairs' rest centres, which never move.
 */
const {
  Cam, circ, clamp, facing, fillet, fit, hull, poly, prism, proj, put, rad, rings, solid,
  tdone, tset, tval, tween, disposer, mk, pointer, register,
} = HL;

const L = 174, T = 13, H = 110, PB = 6, PF = 44;          // the wall: length, thickness, height; the plinth: depth, reach in front
const D = 36, V = 24, BW = 4, TK = 2, FW = 6, FT = 1.2, GAP = 34; // a bracket: reach, drop, bar, web and flange; a pair's spacing
const PAIRS = [{ x: 52, z: 81 }, { x: 100, z: 36 }, { x: 148, z: 91 }]; // centre along the wall, top of the arms: high, low, between on screen
const REST = [2, 5, 1], FALL = [1, 0.45, 0.2], STEP = 45, BRIGHT = 1, SR = 4.4, AMAX = 24;

// The bracket's profile, u out from the wall and v up from the arm's top: a vertical arm, a horizontal arm, a diagonal brace.
const OUTER = fillet(
  [[0, -V], [BW, -V], [0.78 * D + 3.4, -BW], [D, -BW], [D, 0], [0, 0]],
  [0.6, 1.4, 1.6, 0.8, 0.8, 0.8],
);
const INNER = fillet([[BW, -V + 6.5], [BW, -BW], [0.78 * D - 1.6, -BW]], [1, 1.2, 1]); // wound the other way: a hole

/** The profile leaning th degrees out from the wall about its foot, as world points on the plane x, below a top at z. */
function lean(pts, th, x, z) {
  const s = Math.sin(rad(th)), c = Math.cos(rad(th));
  return pts.map(([u, v]) => [x, T + u * c + (v + V) * s, z - V - u * s + (v + V) * c]);
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let amp = clamp(value, 0, AMAX);

  // Fitted to the plinth and the wall's top; a bracket at its widest lean stays over the plinth.
  const C = Cam(45, 0.5, 1.4);
  fit(C, [[-8, -8, -PB], [L + 8, -8, -PB], [-8, T + PF, -PB], [L + 8, T + PF, -PB], [0, 0, H], [L, 0, H], [0, T, H]], 200, 166);
  const P = proj(C), front = facing(C);
  const g = mk("g", {}, svg);

  // Far to near: the plinth, the wall, the sleeves on its face, then the brackets by x.
  const slab = (x0, y0, x1, y1, r, b, z0, z1) => { const [ring, inner] = rings(x0, y0, x1, y1, r, b); put(solid(g), prism(P, front, ring, inner, z0, z1)); };
  slab(-8, -8, L + 8, T + PF, 9, 2.2, -PB, 0);
  slab(0, 0, L, T, 3, 1.2, 0, H);

  // A sleeve: a short round collar through the wall, between its pair and above it, where the unit's pipes would come out.
  const ring = circ(SR, 16), hole = circ(SR - 1.4, 16);
  const at = (rg, xs, y, zs) => rg.map((q) => P(xs + q.u, y, zs + q.v));
  for (const p of PAIRS) {
    const xs = p.x, zs = p.z + 10;
    put(solid(g), { sil: poly(hull(at(ring, xs, T, zs).concat(at(ring, xs, T + 2.4, zs)))), crease: poly(at(hole, xs, T + 2.4, zs)) });
  }

  const brackets = [];
  PAIRS.forEach((p, i) => [-1, 1].forEach((k) => brackets.push({ i, x: p.x + (k * GAP) / 2 - TK / 2, z: p.z })));
  brackets.sort((a, b) => a.x - b.x);
  for (const b of brackets) {
    const grp = mk("g", {}, g);
    b.back = mk("path", { class: "lo" }, grp);
    b.face = mk("path", { class: "sil" }, grp);
    b.under = mk("path", { class: "lo" }, grp);
    b.top = mk("path", { class: "sil" }, grp);
  }
  const pairs = PAIRS.map((p, i) => ({ ...p, tw: tween(REST[i]), drawn: NaN, parts: brackets.filter((b) => b.i === i) }));

  function draw(pr, th) {
    if (th === pr.drawn) return;
    pr.drawn = th;
    for (const b of pr.parts) {
      const plate = (x) => poly(lean(OUTER, th, x, b.z).map((q) => P(...q))) + poly(lean(INNER, th, x, b.z).map((q) => P(...q)));
      // the arm's top flange, the rail a unit's feet would stand on, and a line under it for its thickness
      const rail = (v) => { const [a, c] = lean([[0, v], [D, v]], th, b.x, b.z); const [e, f] = lean([[0, v], [D, v]], th, b.x + FW, b.z);
        return poly(fillet([P(...a), P(...c), P(...f), P(...e)], [0.5, 1.2, 1.2, 0.5])); };
      b.back.setAttribute("d", plate(b.x));
      b.face.setAttribute("d", plate(b.x + TK));
      b.under.setAttribute("d", rail(-FT));
      b.top.setAttribute("d", rail(0));
    }
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const pr of pairs) { draw(pr, tval(pr.tw, now)); if (!tdone(pr.tw, now)) moving = true; }
    return moving;
  });
  bag.add(B.unregister);

  // Hit test: the nearest pair's rest centre on screen, within reach. The centres never move.
  const cen = PAIRS.map((p) => P(p.x, T + D * 0.45, p.z - V * 0.45));
  const REACH = 72;
  function hit([x, y]) {
    let best = -1, bd = REACH;
    cen.forEach(([cx, cy], i) => { const d = Math.hypot(x - cx, y - cy); if (d < bd) { bd = d; best = i; } });
    return best;
  }

  let act = -1;
  /** Tips pair a out (-1 brings them all back), staggered outwards from the pair chosen or the one let go. */
  function aim(a, from) {
    const now = performance.now();
    pairs.forEach((pr, i) => {
      const th = a < 0 ? REST[i] : amp * FALL[Math.abs(i - a)];
      tset(pr.tw, th, now, from < 0 ? 0 : Math.abs(i - from) * STEP);
      for (const b of pr.parts) for (const el of [b.face, b.top]) el.classList.toggle("hi", i === (a < 0 ? BRIGHT : a));
    });
    read.textContent = a < 0 ? "rest" : `bracket ${a + 1} · 0`;
    B.wake();
  }
  function setActive(a) {
    if (a === act) return;
    const from = a >= 0 ? a : act;
    act = a;
    aim(a, from);
  }
  aim(-1, -1);

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { amp = clamp(v, 0, AMAX); if (act >= 0) aim(act, act); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "brackets",
  means: "Nothing hung yet: three pairs of AC wall brackets wait empty; the pair under the pointer tips out, ready.",
  rules: [1, 2, 5, 8],
  range: [10, 16, 22],
  mount,
});
