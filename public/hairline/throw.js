/**
 * Throw: a room corner with a split AC high on the back wall and a tiled floor.
 * The pointer is projected onto the floor; the louvre pitches toward it, three
 * dashed streams of air fall there, and the tiles under them sink into a cold
 * pool that falls off with distance. At rest the unit throws toward the near
 * left corner. The pool's core takes the bright stroke. The slider is the
 * capacity in tons, which sets how far the cool reaches.
 *
 * The pattern: a continuous field, as Terrain. A spring per tile and one per
 * aim axis, a falloff that reaches zero, a hit test on the floor plane.
 */
const {
  Cam, clamp, facing, fit, prism, proj, rings, unproj, spring, stepS, lerp, rad,
  fillet, poly, open, mk, place, pointer, put, register, disposer, solid,
} = HL;

const N = 8, CELL = 14, FOOT = 13, EXT = N * CELL, DMAX = 6.4, TOP = -8, BASE = -13, WH = 62;
const UX0 = 30, UX1 = 82, UY1 = 5, UZ0 = 42, UZ1 = 53, HY = 3.6, HZ = 42.6, LV = 6;
const REST = [34, 86];
const CELLS_PER_TON = 1.35;

/** The pool's depth at u reaches from its centre: 1 at the centre, 0 at the reach and beyond. */
const falloff = (u) => (u >= 1 ? 0 : (1 - u * u) ** 2);

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  const C = Cam(45, 0.5, 1.56);
  fit(C, [[-9, -9, BASE], [EXT + 4, -9, BASE], [-9, EXT + 4, BASE], [EXT + 4, EXT + 4, BASE], [-9, -9, WH], [EXT + 4, -9, WH], [-9, EXT + 4, WH]], 200, 166);
  const P = proj(C), front = facing(C);
  let reach = value * CELLS_PER_TON * CELL, over = null;

  const g = mk("g", {}, svg);
  const slab = (x0, y0, x1, y1, r, b, z0, z1) => { const [ring, inner] = rings(x0, y0, x1, y1, r, b); put(solid(g), prism(P, front, ring, inner, z0, z1)); };
  // Far to near: the two walls, the unit and its louvre, the plinth, then the tiles.
  slab(-4, -9, EXT + 4, -4, 2, 1, BASE, WH);
  slab(-9, -9, -4, EXT + 4, 2, 1, BASE, WH);
  slab(UX0, -4, UX1, UY1, 4, 1.4, UZ0, UZ1);
  const led = mk("ellipse", { class: "dot m", rx: 1, ry: 1 }, g);
  place(led, P(UX1 - 7, UY1, UZ1 - 3));
  const louvre = solid(g);
  slab(-4, -4, EXT + 4, EXT + 4, 7, 2, BASE, TOP);

  const tiles = [], byCell = new Map();
  for (let s = 0; s <= 2 * (N - 1); s++) for (let i = 0; i < N; i++) {
    const j = s - i;
    if (j < 0 || j >= N) continue;
    const x0 = i * CELL + (CELL - FOOT) / 2, y0 = j * CELL + (CELL - FOOT) / 2;
    const [ring, inner] = rings(x0, y0, x0 + FOOT, y0 + FOOT, 1.8, 0.8);
    const cx = (i + 0.5) * CELL, cy = (j + 0.5) * CELL, dip = DMAX * falloff(Math.hypot(cx - REST[0], cy - REST[1]) / reach);
    const t = { i, j, cx, cy, ring, inner, sp: spring(dip, { eps: 0.03 }), el: solid(g), drawn: NaN };
    tiles.push(t); byCell.set(i + "," + j, t);
  }
  const tileAt = (x, y) => byCell.get(clamp(Math.floor(x / CELL), 0, N - 1) + "," + clamp(Math.floor(y / CELL), 0, N - 1));

  // The air: three dashed streams from the louvre's lip into the pool, moved in
  // the paint order to just after the tile they land on, so nearer tiles cover their ends.
  const air = mk("g", {}, g), streams = [0, 1, 2].map(() => mk("path", { class: "dash nf" }, air));
  const ax = spring(REST[0]), ay = spring(REST[1]);
  let landed = null, aimDrawn = "";

  function drawTile(t) {
    const top = TOP + Math.max(1, -TOP - Math.max(0, t.sp.x));
    if (top === t.drawn) return;
    t.drawn = top;
    put(t.el, prism(P, front, t.ring, t.inner, TOP, top));
    t.el.sil.classList.toggle("hi", t.sp.x > DMAX * 0.5);
  }

  function drawAim() {
    const x = ax.x, y = ay.x, land = tileAt(x, y);
    const key = `${x.toFixed(2)},${y.toFixed(2)},${land.drawn}`;
    if (key === aimDrawn) return;
    aimDrawn = key;
    if (land !== landed) { landed = land; land.el.g.after(air); }
    // The louvre only pitches: steeper the nearer the wall it throws.
    const pitch = clamp(Math.atan2(HZ, Math.max(1, y - HY)), rad(24), rad(78));
    const ty = HY + LV * Math.cos(pitch), tz = HZ - LV * Math.sin(pitch);
    const a = UX0 + 4, b = UX1 - 4;
    put(louvre, {
      sil: poly(fillet([P(a, HY, HZ), P(b, HY, HZ), P(b, ty, tz), P(a, ty, tz)], [0.8, 0.8, 0.8, 0.8])),
      crease: open([P(a + 1, ty, tz - 0.9), P(b - 1, ty, tz - 0.9)]),
    });
    const spread = reach * 0.32, zEnd = landed.drawn;
    streams.forEach((el, k) => {
      const sx = lerp(a + 6, b - 6, k / 2), ex = clamp(x + (k - 1) * spread, 0, EXT), pts = [];
      for (let n = 0; n <= 16; n++) {
        const u = n / 16, cx = lerp(sx, ex, 0.3), cy = lerp(ty, y, 0.72);
        const px = (1 - u) ** 2 * sx + 2 * u * (1 - u) * cx + u * u * ex;
        const py = (1 - u) ** 2 * ty + 2 * u * (1 - u) * cy + u * u * y;
        const pz = (1 - u) ** 2 * tz + 2 * u * (1 - u) * tz + u * u * zEnd;
        pts.push(P(px, py, pz));
      }
      el.setAttribute("d", open(pts));
    });
  }

  const B = register(stage, (dt) => {
    let m = stepS(ax, dt);
    if (stepS(ay, dt)) m = true;
    for (const t of tiles) { if (stepS(t.sp, dt)) m = true; drawTile(t); }
    drawAim();
    return m;
  });
  bag.add(B.unregister);

  function retarget() {
    const [cx, cy] = over || REST;
    for (const t of tiles) t.sp.t = DMAX * falloff(Math.hypot(t.cx - cx, t.cy - cy) / reach);
    ax.t = cx; ay.t = cy;
    const t = tileAt(cx, cy);
    read.textContent = over ? `tile ${t.i}·${t.j}` : "rest";
    B.wake();
  }
  retarget();

  bag.add(pointer(stage, {
    move: (p) => {
      const [x, y] = unproj(C, p[0], p[1], 0);
      over = [clamp(x, 0, EXT), clamp(y, 0, EXT)];
      retarget();
    },
    leave: () => { over = null; retarget(); },
  }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { reach = v * CELLS_PER_TON * CELL; retarget(); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "throw",
  means: "A wall-mounted AC throws cold air where the pointer is; the floor pools under it, wider the more tons.",
  rules: [1, 3, 5, 6],
  range: [1.5, 2.25, 3],
  mount,
});
