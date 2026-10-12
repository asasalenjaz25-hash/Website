/**
 * Hatches: a section of service floor on a rounded plinth, set with twelve
 * square access hatches in a 4 × 3 grid. Each lid is a plate in its frame,
 * hinged on its far edge, with a recessed finger pull by its free edge; under
 * it, in its pit, sits a piece of MEP: a valve on a pipe, a junction box and
 * its cable, a drain riser, a cable tray. The hatch under the pointer swings
 * open and takes the bright edge; its neighbours lift a little, staggered by
 * distance on the 700ms curve. At rest one hatch stands ajar and one is just
 * lifted. The slider is how far the chosen lid opens, in degrees.
 *
 * The pattern: one of many, as Riffle. Tweens, a stagger by distance, and a
 * hit test on the floor plane the closed lids lie in, which never moves.
 * Each cell paints its pit, its kit, the near walls of the pit (opaque, so the
 * kit is cut at the rim), then its lid, diagonal by diagonal from the back.
 */
const {
  Cam, circ, clamp, facing, fit, flatDot, hull, open, place, poly, prism, proj, rad, ringAt, rings, rrect, run, unproj,
  tdone, tset, tval, tween, disposer, mk, pointer, put, register, solid,
} = HL;

const NX = 4, NY = 3, C = 30, F = 3, L = C - 2 * F, D = 7, M = 6, PB = 10;
const G = 1.4, LW = L - 2 * G, T = 1.2, ZL = 0, STEP = 45, AMAX = 115;
const X0 = -M, Y0 = -M, X1 = NX * C + M, Y1 = NY * C + M;
/** What sits in each pit, row by row; hatch 7 stands ajar at rest, hatch 9 is just lifted. */
const KIT = ["ACBD", "DBAC", "CDBA"], AJAR = 6, LIFT = 8;
/** How far a lid opens, as a share of the chosen one's angle, d cells from it: 1, then .17 → 0 by two cells. */
const fall = (d) => (d < 0.5 ? 1 : clamp(0.34 - 0.17 * d, 0, 1));
/** The lid, its finger pull and the stiffener under it, in the lid's own (u along the hinge, v away from it). */
const SHAPE = rrect(0, 0, LW, LW, 1.8, 4);
const PULL = rrect(LW / 2 - 4, LW - 5.6, LW / 2 + 4, LW - 3, 1.2, 3);
const STIFF = rrect(2.6, 2.6, LW - 2.6, LW - 2.6, 1.2, 3);

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let A = clamp(value, 0, AMAX), act = -1;

  // Fitted to the plinth with a back-row lid at its widest, so no pose leaves the frame.
  const cam = Cam(45, 0.5, 1.86);
  const zt = ZL + LW * Math.sin(rad(AMAX)), yt = F + G + LW * Math.cos(rad(AMAX));
  fit(cam, [[X0, Y0, -PB], [X1, Y0, -PB], [X0, Y1, -PB], [X1, Y1, -PB], [X0, Y0, 0], [F, yt, zt], [NX * C - F, yt, zt]], 200, 166);
  const P = proj(cam), front = facing(cam);
  const g = mk("g", {}, svg);

  const mv = (ring, x, y) => ring.map((q) => ({ ...q, u: q.u + x, v: q.v + y }));
  const box = (x0, y0, x1, y1, z0, z1, r = 1.4) => {
    const [a, b] = rings(x0, y0, x1, y1, r, 0.8);
    put(solid(g), prism(P, front, a, b, z0, z1));
  };
  const cyl = (x, y, R, z0, z1) => put(solid(g), prism(P, front, mv(circ(R, 16), x, y), mv(circ(R - 0.8, 16), x, y), z0, z1));
  /** A level pipe of radius r from a to b, along x or y: the hull of its two end rings. */
  const pipe = (a, b, r) => {
    const alongX = a[0] !== b[0];
    const end = (p) => Array.from({ length: 16 }, (_, k) => {
      const t = (k / 16) * 2 * Math.PI, o = r * Math.cos(t), z = p[2] + r * Math.sin(t);
      return alongX ? P(p[0], p[1] + o, z) : P(p[0] + o, p[1], z);
    });
    put(solid(g), { sil: poly(hull(end(a).concat(end(b)))), crease: "" });
  };
  /** A cable: a quadratic from a through b to c, one stroke. */
  const cable = (a, b, c) => mk("path", {
    class: "nf",
    d: open(Array.from({ length: 11 }, (_, k) => {
      const t = k / 10, w = [(1 - t) ** 2, 2 * t * (1 - t), t * t];
      return P(...[0, 1, 2].map((m) => w[0] * a[m] + w[1] * b[m] + w[2] * c[m]));
    })),
  }, g);

  // The kit, at a pit's far corner (x, y); everything stays under the rim.
  const kit = {
    A: (x, y) => { // a valve on a pipe: body, stem, handwheel
      pipe([x, y + 6, -4.4], [x + 9, y + 6, -4.4], 1.8);
      box(x + 9, y + 2.8, x + 15.5, y + 9.2, -6.6, -3);
      pipe([x + 15.5, y + 6, -4.4], [x + L, y + 6, -4.4], 1.8);
      cyl(x + 12.2, y + 6, 1, -3, -2.2);
      cyl(x + 12.2, y + 6, 3.4, -2.5, -1.7);
    },
    B: (x, y) => { // a junction box, two screws in its cover, its cable running off under the floor
      box(x + 2, y + 8, x + 11, y + 15, -D, -2.2);
      for (const [u, v] of [[3.8, 9.8], [9.2, 13.2]]) place(flatDot(g, cam, 0.5, "dot off"), P(x + u, y + v, -2.2));
      cable([x + 11, y + 11.5, -4.5], [x + 17, y + 11, -D + 0.5], [x + L, y + 14, -D + 0.5]);
    },
    C: (x, y) => { // a drain riser: a branch from the wall, the riser, its flange
      pipe([x + 13, y, -4.8], [x + 13, y + 7, -4.8], 1.7);
      cyl(x + 13, y + 7, 2.8, -D, -2.6);
      cyl(x + 13, y + 7, 4.2, -2.9, -1.9);
    },
    D: (x, y) => { // a duct crossing the pit, with a flanged joint
      box(x + 2, y, x + 12, y + 7, -6.4, -2.6, 1);
      box(x + 1, y + 7, x + 13, y + 8.6, -D, -1.9, 0.8);
      box(x + 2, y + 8.6, x + 12, y + L, -6.4, -2.6, 1);
    },
  };

  const [sr, si] = rings(X0, Y0, X1, Y1, 8, 2.2);
  const slab = solid(g);
  put(slab, prism(P, front, sr, si, -PB, 0));

  const hs = [];
  for (let s = 0; s < NX + NY - 1; s++) for (let i = 0; i < NX; i++) {
    const j = s - i;
    if (j < 0 || j >= NY) continue;
    const x = i * C + F, y = j * C + F, [mouth] = rings(x, y, x + L, y + L, 3, 1), near = run(mouth, front);
    // the pit: its mouth, and the seam along the foot of its far walls; then its kit and its lid
    mk("path", { d: poly(ringAt(P, mouth, 0)), class: "lo" }, g);
    mk("path", { d: open(ringAt(P, run(mouth, (q) => !front(q)), -D)), class: "nf lo" }, g);
    kit[KIT[j][i]](x, y);
    const lid = mk("g", {}, g), n = j * NX + i;
    hs[n] = {
      i, j, n, x0: x + G, hy: y + G, drawn: NaN, tw: tween(0),
      back: mk("path", { class: "lo" }, lid), face: mk("path", { class: "sil" }, lid), feat: mk("path", { class: "nf lo" }, lid),
    };
    // the near walls, seen from outside: opaque, so the kit and the lid's edge are cut where the rim hides them
    mk("path", { d: poly(ringAt(P, near, 0).concat(ringAt(P, near, -D).reverse())), class: "fo" }, g);
    mk("path", { d: open(ringAt(P, near, 0)), class: "nf lo" }, g);
  }
  // the plinth's crease, over the near walls of the front pits
  g.append(slab.cr);

  // Which side of a lid faces the camera: the sign of its two axes' cross on screen, against the closed lid's.
  const o = P(0, 0, 0), eu = P(1, 0, 0), ev = (c, s) => P(0, c, s);
  const cross = (c, s) => { const e = ev(c, s); return (eu[0] - o[0]) * (e[1] - o[1]) - (eu[1] - o[1]) * (e[0] - o[0]); };
  const UP = Math.sign(cross(1, 0));

  /** Lid h at th degrees, turning on its far top edge. The face toward the camera is painted last, with its feature. */
  function drawLid(h, th) {
    h.drawn = th;
    const s = Math.sin(rad(th)), c = Math.cos(rad(th)), up = cross(c, s) * UP > 0;
    const top = (q) => P(h.x0 + q.u, h.hy + q.v * c, ZL + q.v * s);
    const bot = (q) => P(h.x0 + q.u, h.hy + q.v * c + T * s, ZL + q.v * s - T * c);
    const [nf, ff] = up ? [top, bot] : [bot, top];
    h.back.setAttribute("d", poly(SHAPE.map(ff)));
    h.face.setAttribute("d", poly(SHAPE.map(nf)));
    h.feat.setAttribute("d", poly((up ? PULL : STIFF).map(nf)));
  }

  const rest = (h) => (h.n === AJAR ? 0.9 * A : h.n === LIFT ? 9 : 0);
  for (const h of hs) { h.tw = tween(rest(h)); drawLid(h, rest(h)); h.face.classList.toggle("hi", h.n === AJAR); }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const h of hs) {
      const th = tval(h.tw, now);
      if (th !== h.drawn) drawLid(h, th);
      if (!tdone(h.tw, now)) moving = true;
    }
    return moving;
  });
  bag.add(B.unregister);

  /** The hatch whose cell holds the pointer, on the plane the closed lids lie in; -1 off the floor. */
  function hit(p) {
    const [x, y] = unproj(cam, p[0], p[1], 0);
    if (x < X0 || x > X1 || y < Y0 || y > Y1) return -1;
    return clamp(Math.floor(y / C), 0, NY - 1) * NX + clamp(Math.floor(x / C), 0, NX - 1);
  }

  /** Opens hatch a (-1 puts them all back to rest). The stagger spreads out from the hatch chosen, or the one let go. */
  function aim(a, force) {
    if (a === act && !force) return;
    const now = performance.now(), from = hs[a >= 0 ? a : act >= 0 ? act : AJAR], c = hs[a >= 0 ? a : AJAR];
    act = a;
    for (const h of hs) {
      const to = a < 0 ? rest(h) : A * fall(Math.hypot(h.i - c.i, h.j - c.j));
      tset(h.tw, to, now, Math.hypot(h.i - from.i, h.j - from.j) * STEP);
      h.face.classList.toggle("hi", h === c);
    }
    read.textContent = a < 0 ? "rest" : `hatch ${a + 1}`;
    B.wake();
  }

  bag.add(pointer(stage, { move: (p) => aim(hit(p)), leave: () => aim(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { A = clamp(v, 0, AMAX); aim(act, true); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "hatches",
  means: "Every question is a hatch in the floor: the one under the pointer swings open to show what is underneath.",
  rules: [1, 2, 5, 6],
  range: [70, 95, 115],
  mount,
});
