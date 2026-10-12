/**
 * Measure: a room cut away as a plan, low walls round a rounded floor and a
 * door gap in the near-left wall. A laser meter lies against the base of the
 * back-left wall. The pointer is projected onto the floor; the meter turns to
 * it, and its dashed beam runs to the spot, ticked along its length from the
 * meter's back edge, as a laser meter measures. At rest it is already
 * measuring across the room. The target dot is the one bright mark. The
 * slider is the tick spacing, in metres.
 *
 * The pattern: a continuous field, as Terrain. Two springs for the spot, a hit
 * test on the floor plane (which never moves), the walls drawn as a tray: the
 * far half under the beam, the near half over it.
 */
const {
  Cam, circ, clamp, facing, fit, hull, open, poly, prism, proj, rad, ringAt, rings, rrect, run, seg, unproj,
  spring, stepS, flatDot, mk, pointer, place, put, register, disposer, solid,
} = HL;

const M = 14, X = 104, Y = 88, T = 5, HW = 10, PB = 6, PM = 7; // units a metre; the room inside; walls; plinth
const G0 = 30, G1 = 47; // the door gap, in the near-left wall
const MX = 12, MY = 24, L = 22, W = 11, H = 7, LZ = 3.5, LR = 2.1; // the meter: centre, size, lens height and radius
const REST = [86, 50], NEAR = 16, DMIN = 24, A0 = rad(-40), A1 = rad(100);

/** A ring's run as [x, y] points, ordered left to right on screen (the 45° view puts screen x along x − y). */
function side(ring, keep) {
  const r = run(ring, keep).map((q) => [q.u, q.v]);
  return r[0][0] - r[0][1] > r[r.length - 1][0] - r[r.length - 1][1] ? r.reverse() : r;
}

/** The walls, which never move: `far` is painted before the meter and the beam, `near` after them; each entry is [d, class]. */
function walls(P, front) {
  const at = (pts, z) => pts.map(([x, y]) => P(x, y, z));
  const outer = rrect(-T, -T, X + T, Y + T, 3, 6), inner = rrect(0, 0, X, Y, 1.2, 4);
  const iF = side(inner, front), iB = side(inner, (q) => !front(q)), oF = side(outer, front);
  const far = [
    [poly(hull(ringAt(P, outer, 0).concat(ringAt(P, outer, HW)))), "sil"],
    [open(at([iF[0], ...iB, iF[iF.length - 1]], HW)), "nf"],
    [open(at(iB, 0)), "nf lo"],
    // the doorway's floor: the body's foot does not run across it
    [poly(at([[G0, Y - 2], [G1, Y - 2], [G1, Y + T + 2], [G0, Y + T + 2]], 0)), "fo"],
  ];
  // the near walls, in two pieces either side of the door, each one opaque piece from the wall's inner top edge to its foot
  const iL = [...iF.filter((p) => p[0] < G0), [G0, Y]], oL = [...oF.filter((p) => p[0] < G0), [G0, Y + T]];
  const iR = [[G1, Y], ...iF.filter((p) => p[0] > G1)], oR = [[G1, Y + T], ...oF.filter((p) => p[0] > G1)];
  const lEnd = P(oL[0][0], oL[0][1], HW), rEnd = P(oR[oR.length - 1][0], oR[oR.length - 1][1], HW);
  const near = [
    [poly([...at(iL, HW), P(G0, Y, 0), ...at(oL, 0).reverse(), lEnd]), "fo"],
    [open(at(iL, HW)), "nf"],
    [open([P(G0, Y, HW), P(G0, Y, 0), ...at(oL, 0).reverse(), lEnd]), "nf sil"],
    [open([...at(oL, HW), P(G0, Y, HW)]), "nf lo"],
    [poly([P(G1, Y + T, HW), ...at(iR, HW), rEnd, ...at(oR, 0).reverse()]), "fo"],
    [open([P(G1, Y + T, HW), ...at(iR, HW)]), "nf"],
    [open([P(G1, Y + T, HW), ...at(oR, 0), rEnd]), "nf sil"],
    [open(at(oR, HW)), "nf lo"],
  ];
  return { far, near };
}

/** A ring in the meter's own frame, turned by (c, s) about the meter's centre and moved du along its length. */
const turn = (ring, c, s, du = 0) => ring.map((q) => ({
  u: MX + (q.u + du) * c - q.v * s, v: MY + (q.u + du) * s + q.v * c, nu: q.nu * c - q.nv * s, nv: q.nu * s + q.nv * c,
}));

/** Where the beam may land: on the floor, clear of the meter, in front of its lens, and not hidden by the near walls. */
function aim([x, y]) {
  x = clamp(x, 6, X - NEAR); y = clamp(y, 6, Y - NEAR);
  const a = clamp(Math.atan2(y - MY, x - MX), A0, A1), d = Math.max(DMIN, Math.hypot(x - MX, y - MY));
  return [clamp(MX + d * Math.cos(a), 6, X - NEAR), clamp(MY + d * Math.sin(a), 6, Y - NEAR)];
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let step = value, over = null;

  const C = Cam(45, 0.5, 1.8);
  const E0 = -T - PM, EX = X + T + PM, EY = Y + T + PM;
  fit(C, [[E0, E0, -PB], [EX, E0, -PB], [E0, EY, -PB], [EX, EY, -PB], [-T, -T, HW], [X + T, -T, HW], [-T, Y + T, HW]], 200, 166);
  const P = proj(C), front = facing(C);
  const paths = walls(P, front);

  const g = mk("g", {}, svg);
  put(solid(g), prism(P, front, rrect(E0, E0, EX, EY, 8, 12), rrect(E0 + 2, E0 + 2, EX - 2, EY - 2, 6, 12), -PB, 0));
  for (const [d, cls] of paths.far) mk("path", { d, class: cls }, g);

  // the meter: a rounded body, a display plate and a key on its top, the lens on its front face
  const [body, bodyIn] = rings(-L / 2, -W / 2, L / 2, W / 2, 3, 1.1);
  const plate = rrect(-0.5, -2.8, 7.5, 2.8, 1.2, 3), key = circ(1.7, 12);
  const meter = solid(g);
  const plateEl = mk("path", { class: "nf lo" }, g), keyEl = mk("path", { class: "nf lo" }, g), lensEl = mk("path", { class: "nf" }, g);

  // the beam, its ticks, and the spot it lands on
  const beam = mk("path", { class: "dash nf" }, g), ticks = mk("path", { class: "nf" }, g);
  const halo = mk("path", { class: "nf" }, g), dot = flatDot(g, C, 1.4, "dot"), ring = circ(3.4, 16);

  for (const [d, cls] of paths.near) mk("path", { d, class: cls }, g);

  const sx = spring(REST[0]), sy = spring(REST[1]);
  let drawn = "";

  function draw() {
    const x = sx.x, y = sy.x, k = `${x.toFixed(2)},${y.toFixed(2)},${step}`;
    if (k === drawn) return;
    drawn = k;
    const a = Math.atan2(y - MY, x - MX), c = Math.cos(a), s = Math.sin(a);
    put(meter, prism(P, front, turn(body, c, s), turn(bodyIn, c, s), 0, H));
    plateEl.setAttribute("d", poly(ringAt(P, turn(plate, c, s), H)));
    keyEl.setAttribute("d", poly(ringAt(P, turn(key, c, s, -6.5), H)));
    const lens = [];
    for (let n = 0; n < 16; n++) {
      const t = (n / 16) * 2 * Math.PI, v = LR * Math.cos(t);
      lens.push(P(MX + (L / 2) * c - v * s, MY + (L / 2) * s + v * c, LZ + LR * Math.sin(t)));
    }
    lensEl.setAttribute("d", poly(lens));

    beam.setAttribute("d", open([P(MX + (L / 2) * c, MY + (L / 2) * s, LZ), P(x, y, 0)]));
    // a tick every `step` metres from the back edge; whole metres longer
    const D = Math.hypot(x - MX, y - MY) + L / 2, bx = MX - (L / 2) * c, by = MY - (L / 2) * s;
    let t = "";
    for (let n = 1; n * step * M < D - 5; n++) {
      const q = n * step * M;
      if (q < L + 2) continue;
      const h = Math.abs((n * step) % 1) < 1e-6 ? 3.4 : 2, z = (LZ * (D - q)) / (D - L), px = bx + q * c, py = by + q * s;
      t += seg(P(px - h * s, py + h * c, z), P(px + h * s, py - h * c, z));
    }
    ticks.setAttribute("d", t);
    halo.setAttribute("d", poly(ringAt(P, ring.map((q) => ({ ...q, u: q.u + x, v: q.v + y })), 0)));
    place(dot, P(x, y, 0));
  }

  const B = register(stage, (dt) => {
    let m = stepS(sx, dt);
    if (stepS(sy, dt)) m = true;
    draw();
    return m;
  });
  bag.add(B.unregister);
  draw();

  function retarget() {
    const [x, y] = over || REST;
    sx.t = x; sy.t = y;
    read.textContent = over ? `${((Math.hypot(x - MX, y - MY) + L / 2) / M).toFixed(1)} m` : "rest";
    B.wake();
  }
  retarget();

  bag.add(pointer(stage, {
    move: (p) => { over = aim(unproj(C, p[0], p[1], 0)); retarget(); },
    leave: () => { over = null; retarget(); },
  }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { step = v; B.wake(); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "measure",
  means: "A site visit in one line: the laser measures from the wall to wherever the pointer stands.",
  rules: [1, 5, 6, 8],
  range: [0.5, 1, 2],
  mount,
});
