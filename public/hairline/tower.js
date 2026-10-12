/**
 * Tower: the concrete frame of a building going up, one floor a year, 2016 on
 * the ground to 2025 on top. A floor is its slab and the columns standing on
 * it; on the roof, the next level's columns are part-poured, starter bars out
 * of each. The pointer picks a floor; it slides out of the frame like a drawer,
 * and the floors round it follow less and later, staggered by distance on the
 * 700ms curve. At rest the newest floors fan out and the top slab is bright.
 * The slider is how far the chosen floor slides, in world units.
 *
 * The pattern: discrete items, as Riffle. A tween per floor, a stagger by
 * distance, and a hit test on each level's resting outline, so a floor sliding
 * out from under the pointer cannot change the choice.
 */
const {
  Cam, facing, fit, prism, proj, rings, unproj, seg, tween, tset, tval, tdone,
  mk, put, solid, pointer, register, disposer,
} = HL;

const N = 10, W = 48, D = 68, FH = 12, T = 2.2, CH = FH - T, CW = 2, PB = 4, IN = 3.6, BAR = 5;
const TOPZ = (N - 1) * FH + T + CH + BAR, RMAX = 30, STEP = 45, YEAR = 2016;
/** Where each floor rests, in x: the old floors flush, the newest fanning out. */
const REST = [0, 0, 0, 0, 0, 0, 0.8, 2.5, 5.5, 11];
/** The share of the slide a floor takes at k floors from the chosen one. */
const FALL = [1, 0.42, 0.16, 0.05];
/** The columns round the edge of a floor, back to front (ascending x + y). The back row stands well in, so a floor above that rests further out still covers it. */
const XS = [IN + 6, (IN + 6 + W - IN) / 2, W - IN], YS = [IN, D / 2, D - IN];
const COLS = XS.flatMap((x, a) => YS.map((y, b) => [x, y, a * 3 + b])).filter((c) => c[2] !== 4)
  .sort((a, b) => a[0] + a[1] - b[0] - b[1]);
/** The roof's level in progress, in the same order: how much of each column is poured. */
const POURED = [1, 1, 0.85, 0.7, 0.5, 0.35, 0.18, 0.12];

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let reach = value, act = -1;

  // Fitted to the plinth, the roof's bars, and a floor slid out to the slider's far end at either end of the stack.
  const C = Cam(45, 0.5, 1.65);
  fit(C, [[-6, -6, -PB], [W + 6, -6, -PB], [-6, D + 6, -PB], [W + 6, D + 6, -PB],
    [W + RMAX, D, 0], [W + RMAX, 0, TOPZ], [0, 0, TOPZ], [0, D, TOPZ]], 200, 166);
  const P = proj(C), front = facing(C);
  const block = (x0, y0, x1, y1, r, b, z0, z1) => { const [ring, inner] = rings(x0, y0, x1, y1, r, b); return prism(P, front, ring, inner, z0, z1); };

  // Bottom to top, and within a floor back to front: every layer lies above the
  // last, so whatever is higher at a point on screen is nearer, wherever floors slide.
  const g = mk("g", {}, svg);
  put(solid(g), block(-6, -6, W + 6, D + 6, 6, 2, -PB, 0));
  const floors = [];
  for (let i = 0; i < N; i++) {
    const roof = i === N - 1, slab = solid(g);
    const cols = COLS.map(([cx, cy], k) => {
      const h = roof ? POURED[k] * CH : CH;
      return { cx, cy, h, el: solid(g), bars: roof ? mk("path", { class: "nf" }, g) : null };
    });
    floors.push({ z: i * FH, slab, cols, tw: tween(REST[i]), drawn: NaN });
  }

  function draw(f, o) {
    put(f.slab, block(o, 0, o + W, D, 3, 1.4, f.z, f.z + T));
    const z = f.z + T;
    for (const { cx, cy, h, el, bars } of f.cols) {
      const x = cx + o;
      put(el, block(x - CW, cy - CW, x + CW, cy + CW, 1, 0.6, z, z + h));
      if (bars) bars.setAttribute("d", [[-1, 1], [1, -1]].map(([u, v]) => seg(P(x + u, cy + v, z + h), P(x + u, cy + v, z + h + BAR))).join(""));
    }
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const f of floors) {
      const o = tval(f.tw, now);
      if (!tdone(f.tw, now)) moving = true;
      if (o !== f.drawn) { f.drawn = o; draw(f, o); }
    }
    return moving;
  });
  bag.add(B.unregister);

  /**
   * The floor under a screen point, from the rest pose only: floor i runs from
   * halfway up the storey below its slab to halfway up its own, and the point is
   * in it when it is above that lower edge's near outline and not above the next
   * one's. Over the roof it must also be short of the far edge.
   */
  function hit([sx, sy]) {
    const q0 = unproj(C, sx, sy, 0), s = q0[0] - q0[1];
    if (s < -D - 3 || s > W + REST[N - 1] + 3) return -1;
    for (let i = N - 1; i >= 0; i--) {
      const zb = i === 0 ? -PB : i * FH - CH / 2, q = unproj(C, sx, sy, zb);
      if (q[0] > W + REST[i] + 2 || q[1] > D + 2) continue;
      if (i === N - 1) { const t = unproj(C, sx, sy, TOPZ); if (t[0] < REST[i] - 2 || t[1] < -2) return -1; }
      return i;
    }
    return -1;
  }

  /** Slides floor a out (-1 puts the stack back to rest), spreading out from the floor chosen or let go. */
  function setActive(a, force) {
    if (a === act && !force) return;
    const now = performance.now(), from = a >= 0 ? a : act;
    act = a;
    floors.forEach((f, i) => {
      const to = a < 0 ? REST[i] : reach * (FALL[Math.abs(i - a)] ?? 0);
      tset(f.tw, to, now, force ? 0 : Math.abs(i - from) * STEP);
      f.slab.sil.classList.toggle("hi", a < 0 ? i === N - 1 : i === a);
    });
    read.textContent = a < 0 ? "rest" : String(YEAR + a);
    B.wake();
  }
  setActive(-1, true);

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { reach = Math.min(v, RMAX); if (act >= 0) setActive(act, true); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "tower",
  means: "Ten years, ten floors: the year under the pointer slides out of the frame, its neighbours following.",
  rules: [1, 2, 3, 5],
  range: [12, 21, 30],
  mount,
});
