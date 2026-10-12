/**
 * Skyline: a rounded city block of six lots, one per sector of a fit-out
 * contractor's finished work: a tower of balcony slabs, an office block with
 * its floors and plant box, a stepped villa with its annex, pool and wall, a
 * barrel-roofed warehouse with a loading door, a café under a striped awning,
 * and a shop with a glazed front under its fascia. The lot under the pointer
 * rises out of the block and takes the bright stroke; the others rise less the
 * farther they stand, staggered outwards from it, leaving dashed sockets. At
 * rest the villa, the largest sector, is half raised and bright. The slider
 * is the lift, in world units.
 *
 * The pattern: discrete items, as Riffle. Tweens, a stagger by distance, and a
 * hit test on the hull of every part in the rest pose, which the pointer never moves.
 */
const {
  Cam, clamp, extremes, facing, fillet, fit, hull, open, poly, prism, proj, ringAt, rings, rrect, run, seg, unproj,
  tdone, tset, tval, tween, disposer, mk, pointer, put, register, solid,
} = HL;

const PB = 6, PZ = 1.6, LMAX = 20, STEP = 45, PL = [-6, -6, 130, 108];

/** Whether a screen point is inside a closed polygon of screen points. */
function inside(pts, [x, y]) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let L = value, act = -1;
  // Fitted to the plinth and the tower at its highest lift, so no pose leaves the frame.
  const C = Cam(45, 0.5, 1.6);
  fit(C, [[PL[0], PL[1], -PB], [PL[2], PL[1], -PB], [PL[0], PL[3], -PB], [PL[2], PL[3], -PB], [6, 18, 78 + LMAX], [28, 40, 78 + LMAX]], 200, 166);
  const P = proj(C), front = facing(C);
  const g = mk("g", {}, svg);
  { const [r, i] = rings(...PL, 10, 2.2); put(solid(g), prism(P, front, r, i, -PB, 0)); }

  const all = [];
  /** A lot of the block and what stands on it. Its parts ride its lift, standing on its top at PZ. */
  function building(name, n, lot) {
    const grp = mk("g", {}, g), lotRing = rings(...lot, 4, 1)[0];
    const b = {
      name, n, lot, grp, lotRing, parts: [], sils: [], hitf: [], hits: [], drawn: NaN,
      cx: (lot[0] + lot[2]) / 2, cy: (lot[1] + lot[3]) / 2,
      sock: mk("path", { class: "dash nf" }, grp), drops: mk("path", { class: "dash nf" }, grp),
    };
    all.push(b);
    box(b, ...lot, 4, 1, -PZ, 0);
    return b;
  }
  /** One rounded solid of b from z0 to z1 above its lot; `rim` draws the whole top crease: a parapet. */
  function box(b, x0, y0, x1, y1, r, k, z0, z1, rim) {
    const [ring, inner] = rings(x0, y0, x1, y1, r, k), el = solid(b.grp);
    b.sils.push(el.sil);
    b.hitf.push((dz) => hull(ringAt(P, ring, z0 + dz).concat(ringAt(P, ring, z1 + dz))));
    b.parts.push((dz) => {
      const q = prism(P, front, ring, inner, z0 + dz, z1 + dz);
      if (rim) q.crease = poly(ringAt(P, inner, z1 + dz));
      put(el, q);
    });
    return ring;
  }
  /** A solid of b whose silhouette is the filleted hull of f(dz).pts. */
  function shape(b, f) {
    const el = solid(b.grp);
    b.sils.push(el.sil);
    b.hitf.push((dz) => hull(f(dz).pts));
    b.parts.push((dz) => { const { pts, crease } = f(dz), H = hull(pts); put(el, { sil: poly(fillet(H, H.map(() => 1.2))), crease }); });
  }
  const line = (b, cls, f) => { const el = mk("path", { class: cls }, b.grp); b.parts.push((dz) => el.setAttribute("d", f(dz))); };
  const onFace = (rr, at) => (dz) => poly(rr.map((q) => at(q.u, q.v + dz)));

  // Back to front, by the depth of each lot: tower, office, villa, warehouse, café, shop.
  const T = building("towers", 10, [4, 16, 30, 42]);
  for (let k = 0; k < 7; k++) {
    box(T, 9, 21, 25, 37, 3, 1, k ? k * 10 + 1.4 : 0, (k + 1) * 10);
    box(T, 6, 18, 28, 40, 4, 1, (k + 1) * 10, (k + 1) * 10 + 1.4);
  }
  box(T, 12, 24, 22, 34, 2.5, 1, 71.4, 76);

  const O = building("offices", 15, [38, 2, 72, 32]);
  const oF = run(box(O, 41, 5, 69, 29, 3, 1.2, 0, 42), front);
  line(O, "nf lo", (dz) => [7, 14, 21, 28, 35].map((z) => open(ringAt(P, oF, z + dz))).join(""));
  box(O, 51, 11, 61, 21, 2, 1, 42, 46.5);

  const V = building("villas", 32, [2, 46, 40, 102]);
  box(V, 7, 50, 33, 76, 3, 1.4, 0, 10, true);
  box(V, 7, 50, 23, 66, 3, 1.4, 10, 19, true);
  box(V, 7, 84, 19, 96, 2.5, 1, 0, 7);
  line(V, "nf", (dz) => poly(ringAt(P, rrect(24, 81, 36, 95, 2.5, 4), dz)));
  line(V, "nf lo", (dz) => poly(ringAt(P, rrect(25.5, 82.5, 34.5, 93.5, 1.5, 4), dz)));
  box(V, 4, 98, 17, 100.5, 1.2, 0.5, 0, 4.5);
  box(V, 23, 98, 38, 100.5, 1.2, 0.5, 0, 4.5);

  const W = building("warehouses", 3, [80, 4, 124, 40]);
  const prof = [];
  for (let j = 0; j <= 12; j++) { const y = 8 + (26 * j) / 12, t = (y - 21) / 13; prof.push([y, 11 + 5 * (1 - t * t)]); }
  const arch = (x, dz) => prof.map(([y, z]) => P(x, y, z + dz));
  shape(W, (dz) => ({
    pts: [83, 117].flatMap((x) => [P(x, 8, dz), P(x, 34, dz), ...arch(x, dz)]),
    crease: open([P(84.5, 34, 11 + dz), ...arch(117, dz).reverse().slice(0, -1)]),
  }));
  line(W, "nf lo", (dz) => [91.5, 100, 108.5].map((x) => open(arch(x, dz).slice(1, -1))).join(""));
  line(W, "nf", onFace(rrect(15, 2.5, 27, 9.5, 1.2, 4), (u, v) => P(117, u, v)));
  line(W, "nf lo", (dz) => [4.8, 7.1].map((z) => seg(P(117, 16, z + dz), P(117, 26, z + dz))).join(""));
  box(W, 116, 13, 122, 29, 1.5, 0.8, 0, 2.5);

  const Cf = building("cafés", 10, [46, 52, 76, 88]);
  box(Cf, 49, 55, 72, 76, 3, 1.2, 0, 11);
  shape(Cf, (dz) => {
    const a = (x, y, z) => P(x, y, z + dz);
    return {
      pts: [a(51, 76, 9.5), a(70, 76, 9.5), a(70, 83, 6), a(70, 83, 4.5), a(51, 83, 4.5), a(51, 83, 6)],
      crease: seg(a(51.6, 83, 6), a(69.4, 83, 6)) + [55, 58.8, 62.6, 66.4].map((x) => seg(a(x, 76.5, 9.25), a(x, 83, 6))).join(""),
    };
  });

  const R = building("retail", 8, [80, 50, 124, 84]);
  box(R, 83, 54, 121, 76, 3, 1.2, 0, 12);
  line(R, "nf", onFace(rrect(86, 1.5, 118, 7.5, 1.2, 4), (u, v) => P(u, 76, v)));
  line(R, "nf lo", (dz) => [94, 102, 110].map((x) => seg(P(x, 76, 1.5 + dz), P(x, 76, 7.5 + dz))).join(""));
  box(R, 83.5, 75, 120.5, 78, 1.5, 0.6, 8.5, 11.5);

  // Each lot rises by the lift times its share: all of it under the pointer, less with distance, to a floor.
  const VI = all.indexOf(V);
  const dist = (i, j) => Math.hypot(all[i].cx - all[j].cx, all[i].cy - all[j].cy);
  const rank = all.map((_, i) => { const o = all.map((_, j) => j).sort((p, q) => dist(i, p) - dist(i, q)); return all.map((_, j) => o.indexOf(j)); });
  const share = (c, j) => (j === c ? 1 : clamp(0.7 - dist(c, j) / 120, 0.06, 0.45));
  const rest = (j) => L * 0.5 * share(VI, j);
  // The hit areas are the rest pose, which only the slider moves.
  const rehit = () => all.forEach((b, j) => { b.hits = b.hitf.map((f) => f(PZ + rest(j))); });
  all.forEach((b, j) => { b.z = tween(rest(j)); });
  rehit();

  const B = register(stage, (_dt, now) => {
    let m = false;
    for (const b of all) {
      const dz = tval(b.z, now);
      if (!tdone(b.z, now)) m = true;
      if (dz === b.drawn) continue;
      b.drawn = dz;
      b.parts.forEach((f) => f(dz + PZ));
      // a lot raised far enough leaves its socket on the block, and dashed drops down to it
      const up = dz > 2.5;
      b.sock.setAttribute("d", up ? poly(ringAt(P, b.lotRing, 0)) : "");
      b.drops.setAttribute("d", up ? extremes(P, b.lotRing).map((s) => seg(P(s.u, s.v, 0), P(s.u, s.v, dz))).join("") : "");
    }
    return m;
  });
  bag.add(B.unregister);

  /** Raises building a (-1: the villa, at half the lift), staggered outwards from `from`, the one chosen or let go. */
  function apply(a, from) {
    const now = performance.now(), c = a < 0 ? VI : a, s = a < 0 ? 0.5 : 1;
    all.forEach((b, j) => {
      tset(b.z, L * s * share(c, j), now, rank[from][j] * STEP);
      b.sils.forEach((el) => el.classList.toggle("hi", j === c));
    });
    read.textContent = a < 0 ? "rest" : `${all[a].name} · ${all[a].n}`;
    B.wake();
  }
  apply(-1, VI);

  /** The frontmost building whose parts at rest hold the point; between them, the nearest lot on the block; off it, none. */
  function hit(p) {
    for (let j = all.length - 1; j >= 0; j--) if (all[j].hits.some((h) => inside(h, p))) return j;
    const [x, y] = unproj(C, p[0], p[1], 0);
    if (x < PL[0] || x > PL[2] || y < PL[1] || y > PL[3]) return -1;
    let best = -1, bd = Infinity;
    all.forEach((b, j) => {
      const d = Math.hypot(clamp(x, b.lot[0], b.lot[2]) - x, clamp(y, b.lot[1], b.lot[3]) - y);
      if (d < bd) { bd = d; best = j; }
    });
    return best;
  }
  const choose = (a) => { if (a === act) return; const from = a >= 0 ? a : act; act = a; apply(a, from); };
  bag.add(pointer(stage, { move: (p) => choose(hit(p)), leave: () => choose(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { L = v; rehit(); apply(act, act >= 0 ? act : VI); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "skyline",
  means: "Six sectors on one block: the building under the pointer rises, with its project count in the corner.",
  rules: [1, 2, 5, 10],
  range: [6, 12, 20],
  mount,
});
