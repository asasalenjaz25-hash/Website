/**
 * Ceiling: an exploded section of a fit-out's ceiling void, six layers pulled
 * apart. From the top: the concrete slab with two cored sleeves; a duct with
 * flanged joints and a branch dropping through a neck to a square diffuser; a
 * ladder tray with rungs and two cables; a sprinkler main with couplings and
 * drops ending in heads; a falling drain with hubs and an elbow up to a riser;
 * and the T-bar ceiling with one tile pushed up beside its opening. The pointer's x scrubs
 * the gap between the layers, on a spring; its y picks a layer against the
 * target pose, which takes the bright edge while the others stand clear of it,
 * staggered outwards. The slider is the gap, in world units.
 *
 * The pattern: scrub and pick. One spring for the gap, a tween per layer for
 * its clearance, and a hit test on each layer's own mid plane in the target pose.
 */
const {
  Cam, clamp, lerp, fit, proj, unproj, facing, rings, prism, ringAt, run, hull, poly, open, seg, fillet, extremes, r2,
  spring, stepS, tween, tset, tval, tdone, mk, solid, put, register, pointer, disposer,
} = HL;

const LX = 120, LY = 28, E = 3.5, LO = 0.2, REST = (1 + LO) / 2, VMAX = 18, STEP = 45;
const NAMES = ["slab", "hvac", "electrical", "fire", "plumbing", "ceiling"];
const H = [7, 13.5, 2.6, 8, 8.6, 1.4], SUMH = H.reduce((a, b) => a + b, 0);
const FOCUS = { civil: 0, hvac: 1, electrical: 2, "low-current": 2, "fire-fighting": 3, plumbing: 4, "fit-out": 5, joinery: 5, "planning-architecture": 5 };
/** Towards the camera at Cam(45, 0.5): it sits on the +x +y side, 30° up. */
const V = [Math.SQRT1_2 * 0.866, Math.SQRT1_2 * 0.866, 0.5];

/** The bottom of layer i (0 the slab, 5 the ceiling) with gap g between layers; the stack is centred on z 0. */
const bottom = (i, g) => { let z = -(SUMH + 5 * g) / 2; for (let j = 5; j > i; j--) z += H[j] + g; return z; };

const add = (a, b, k = 1) => a.map((v, i) => v + b[i] * k);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const unit = (a) => { const n = Math.hypot(...a); return a.map((v) => v / n); };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** A round pipe lying from a to b: its silhouette, the crease where the end facing the camera meets the body, and, when hollow, the bore. */
function tube(P, a, b, r, bore) {
  const d = unit(add(b, a, -1)), u = unit(cross(d, [0, 0, 1])), v = cross(d, u);
  const ring = (c, rr) => Array.from({ length: 20 }, (_, k) => {
    const t = (k / 20) * 2 * Math.PI, w = add(u.map((x) => x * Math.cos(t)), v, Math.sin(t));
    return { p: P(...add(c, w, rr)), f: dot(w, V) > 0 };
  });
  const A = ring(a, r), B = ring(b, r), near = dot(d, V) > 0 ? b : a;
  return {
    sil: poly(hull(A.concat(B).map((q) => q.p))),
    crease: open(run(near === b ? B : A, (q) => q.f).map((q) => q.p)) + (bore ? poly(ring(near, r * bore).map((q) => q.p)) : ""),
  };
}

/** Every layer drawn once, in its own group at local height 0; each group is painted bottom layer first, so an upper layer covers a lower one. */
function build(P, front, L) {
  const box = (x0, y0, x1, y1, r, b, z0, z1) => { const [ring, inner] = rings(x0, y0, x1, y1, r, b); return prism(P, front, ring, inner, z0, z1); };
  const disc = (x, y, R, z0, z1) => box(x - R, y - R, x + R, y + R, R, Math.min(0.6, R * 0.4), z0, z1);
  const loop = (x, y, R, z) => poly(ringAt(P, rings(x - R, y - R, x + R, y + R, R, 0.1)[0], z));
  const part = (i, paths, marks) => {
    const s = solid(L[i].g);
    put(s, paths);
    L[i].sils.push(s.sil);
    if (marks) mk("path", { d: marks, class: "nf lo" }, s.g);
  };

  // ceiling: the T-bar grid as one thin plate and its bars, an opening in the front row,
  // and its tile pushed up and tipped over onto the tile beside it
  const CW = LX / 6, hx = CW, hy = LY / 2, q = 0.8;
  let bars = poly([P(hx + q, hy + q, 1.4), P(hx + CW - q, hy + q, 1.4), P(hx + CW - q, LY - q, 1.4), P(hx + q, LY - q, 1.4)]);
  bars += open([P(hx + q, LY - q, 0), P(hx + q, hy + q, 0), P(hx + CW - q, hy + q, 0)]);
  for (let k = 1; k < 6; k++) bars += seg(P(k * CW, 0.6, 1.4), P(k * CW, LY - 0.6, 1.4));
  bars += seg(P(0.6, hy, 1.4), P(LX - 0.6, hy, 1.4));
  part(5, box(0, 0, LX, LY, 3, 1.2, 0, 1.4), bars);
  const c = Math.cos(0.5), s = Math.sin(0.5), tw = CW - 2.4, td = hy - 2.4;
  const tile = fillet([[0, 0], [tw, 0], [tw, td], [0, td]], [1.2, 1.2, 1.2, 1.2]);
  const tileAt = (k) => poly(tile.map(([u, v]) => P(hx + 0.6 - u * c - k * s, hy + 1.2 + v, 2 + u * s - k * c)));
  mk("path", { d: tileAt(1.2), class: "lo" }, L[5].g);
  part(5, { sil: tileAt(0), crease: "" });

  // plumbing: a riser coming down through the slab's sleeve, then the drain falling away from it, with its hubs
  const zf = (x) => 5.6 - (2 * (x - 10)) / 108;
  part(4, disc(10, 13, 3, zf(10), zf(10) + 9), loop(10, 13, 1.9, zf(10) + 9));
  part(4, disc(10, 13, 3.7, zf(10) + 6, zf(10) + 8.4));
  part(4, tube(P, [10, 13, zf(10)], [118, 13, zf(118)], 3, 0.6));
  for (const x of [44, 84]) part(4, tube(P, [x, 13, zf(x)], [x + 3.5, 13, zf(x + 3.5)], 3.7));

  // fire: heads, the drops they hang from, the main, and its grooved couplings
  const drops = [34, 66, 100];
  for (const x of drops) part(3, disc(x, 14, 2.6, 0.4, 1.2));
  for (const x of drops) part(3, disc(x, 14, 0.8, 1.2, 6));
  part(3, tube(P, [22, 14, 6], [116, 14, 6], 1.9, 0.55));
  for (const x of [48, 84]) part(3, tube(P, [x, 14, 6], [x + 2.6, 14, 6], 2.4));

  // electrical: the far rail, the rungs, two cables lying along the back of them, the near rail
  part(2, box(14, 6, 112, 7.1, 0.5, 0.35, 0, 2.6));
  for (let x = 17; x < 110; x += 9) part(2, box(x, 7.1, x + 1.6, 18.9, 0.7, 0.45, 0, 1));
  part(2, tube(P, [16, 9.4, 2], [118, 9.4, 2], 1));
  part(2, tube(P, [21, 11.8, 2], [110, 11.8, 2], 1));
  part(2, box(14, 18.9, 112, 20, 0.5, 0.35, 0, 2.6));

  // hvac: the main with flanged joints, the diffuser, its neck, and the branch off the main's side that drops into it
  let fl = "";
  for (const x of [34, 56, 98]) fl += open([P(x, 3, 13.5), P(x, 15, 13.5), P(x, 15, 5.5)]);
  part(1, box(12, 3, 116, 15, 2, 1.2, 5.5, 13.5), fl);
  part(1, box(71, 12, 85, 26, 1.6, 1, 0, 1.2));
  part(1, box(74, 15, 82, 23, 1.2, 0.8, 1.2, 7.5));
  part(1, box(74, 13, 82, 23, 1.2, 0.8, 7.5, 12));

  // slab: a thick plate, cored through for the riser and for one more
  part(0, box(0, 0, LX, LY, 4, 1.8, 0, 7), loop(10, 13, 3.6, 7) + loop(10, 13, 2.4, 7) + loop(96, 9, 2.6, 7) + loop(96, 9, 1.6, 7));
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  const f = stage.dataset.focus, focus = Object.hasOwn(FOCUS, f) ? FOCUS[f] : 1;

  // The camera is fitted to the stack at the widest gap, with a layer stood clear above and below.
  const C = Cam(45, 0.5, 1.66), TOP = (SUMH + 5 * VMAX) / 2 + E;
  fit(C, [0, 1, 2, 3].flatMap((k) => [[(k & 1) * LX, (k >> 1) * LY, TOP], [(k & 1) * LX, (k >> 1) * LY, -TOP]]), 200, 166);
  const P = proj(C), front = facing(C), o = P(0, 0, 0), oz = P(0, 0, 1), DZ = [oz[0] - o[0], oz[1] - o[1]];
  const [left, right] = extremes(P, rings(0, 0, LX, LY, 4, 1.8)[0]);
  const XL = P(left.u, left.v, 0)[0], XR = P(right.u, right.v, 0)[0];

  // The alignment guides go first, behind every layer; then the layers, bottom first.
  const root = mk("g", {}, svg), guides = mk("path", { class: "dash nf" }, root), L = [];
  for (let i = 5; i >= 0; i--) L[i] = { g: mk("g", {}, root), sils: [], z: NaN };
  build(P, front, L);

  let val = value, over = null, act = focus, drawnGuides = "";
  const gap = spring(val * REST);
  L.forEach((l, i) => {
    l.ex = tween(i < focus ? E : i > focus ? -E : 0);
    l.sils.forEach((el) => el.classList.toggle("hi", i === focus));
  });

  const B = register(stage, (dt, now) => {
    let m = stepS(gap, dt);
    L.forEach((l, i) => {
      if (!tdone(l.ex, now)) m = true;
      const z = r2(bottom(i, gap.x) + tval(l.ex, now));
      if (z === l.z) return;
      l.z = z;
      l.g.setAttribute("transform", `translate(${r2(z * DZ[0])} ${r2(z * DZ[1])})`);
    });
    const k = L[0].z + "," + L[5].z;
    if (k !== drawnGuides) {
      drawnGuides = k;
      guides.setAttribute("d", [left, right].map((q) => seg(P(q.u, q.v, L[0].z), P(q.u, q.v, L[5].z + H[5]))).join(""));
    }
    return m;
  });
  bag.add(B.unregister);

  /** The layer whose own mid plane, in the target pose (the gap's target, no clearance), puts the pointer nearest the strip's middle. */
  function pick([sx, sy], g) {
    let best = 0, bd = Infinity;
    for (let i = 0; i < 6; i++) {
      const [x, y] = unproj(C, sx, sy, bottom(i, g) + H[i] / 2);
      const d = Math.hypot(Math.max(0, -x, x - LX), y - LY / 2);
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }

  function retarget() {
    const now = performance.now();
    gap.t = val * (over ? lerp(LO, 1, clamp((over[0] - XL) / (XR - XL), 0, 1)) : REST);
    const a = over ? pick(over, gap.t) : focus;
    read.textContent = over ? NAMES[a] : "rest";
    if (a !== act) {
      act = a;
      L.forEach((l, i) => {
        tset(l.ex, i < a ? E : i > a ? -E : 0, now, Math.abs(i - a) * STEP);
        l.sils.forEach((el) => el.classList.toggle("hi", i === a));
      });
    }
    B.wake();
  }
  read.textContent = "rest";
  B.wake();

  bag.add(pointer(stage, {
    move: (p) => { over = p; retarget(); },
    leave: () => { over = null; retarget(); },
  }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { val = v; retarget(); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "ceiling",
  means: "Every trade in one ceiling void: the layers part as you scrub, and the one under the pointer lights up.",
  rules: [1, 4, 5, 6],
  range: [12, 15, 18],
  mount,
});
