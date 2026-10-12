import { SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT } from "@/components/service-content";
import s from "./ServiceMotionGrid.module.css";

// The 11 services as a bento grid, each with its own looping motion graphic.
// CSS-only animation (no client JS). Hovering or focusing a tile speeds it up.

const N = "var(--asas-navy)";
const B = "var(--asas-blue)";
const G = "var(--asas-gold)";
const common = { fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" };

const ICONS = {
  "fit-out": (
    <>
      <rect x="8" y="10" width="48" height="36" rx="2" stroke={N} {...common} />
      <rect className={s.paint} x="10" y="18" width="44" height="10" fill={B} opacity=".35" />
      <g className={s.roller}>
        <rect x="10" y="16" width="16" height="14" rx="3" fill={G} stroke={N} strokeWidth="2.5" />
        <path d="M18 30v8h-4v16" stroke={N} {...common} />
      </g>
    </>
  ),
  civil: (
    <>
      <path d="M6 56h52" stroke={N} {...common} />
      {[
        [8, 46], [26, 46], [44, 46],
        [17, 36], [35, 36],
        [8, 26], [26, 26], [44, 26],
      ].map(([x, y], i) => (
        <rect key={i} className={s.brick} style={{ "--i": i }} x={x} y={y} width="16" height="9" rx="1.5" fill={i === 4 ? G : "#fff"} stroke={N} strokeWidth="2.5" />
      ))}
    </>
  ),
  joinery: (
    <>
      <path d="M8 54h48M14 54V40h36v14" stroke={N} {...common} />
      <path className={s.nail} d="M32 40v-10M28 30h8" stroke={B} {...common} />
      <g className={s.hammer}>
        <path d="M48 12L30 22" stroke={N} strokeWidth="4" strokeLinecap="round" />
        <rect x="24" y="16" width="14" height="10" rx="2" transform="rotate(-30 31 21)" fill={G} stroke={N} strokeWidth="2.5" />
      </g>
    </>
  ),
  electrical: (
    <>
      <path d="M6 32h12M46 32h12" stroke={N} {...common} />
      <path className={s.wire} d="M6 32h12M46 32h12" stroke={G} {...common} />
      <circle cx="32" cy="32" r="14" stroke={N} {...common} fill="#fff" />
      <path className={s.bolt} d="M34 20l-8 14h7l-3 10 9-15h-7z" fill={G} stroke={N} strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  plumbing: (
    <>
      <path d="M8 16h26a8 8 0 0 1 8 8v12" stroke={B} fill="none" strokeWidth="7" strokeLinecap="round" />
      <path d="M8 16h26a8 8 0 0 1 8 8v12" stroke="#fff" fill="none" strokeWidth="2" strokeDasharray="3 7" className={s.flow} />
      <path d="M36 38h12" stroke={N} {...common} />
      <path className={s.drop} d="M42 44c-4 6-4 9 0 10 4-1 4-4 0-10z" fill={B} />
      <ellipse className={s.ripple} cx="42" cy="58" rx="8" ry="2" stroke={B} strokeWidth="2" fill="none" />
    </>
  ),
  hvac: (
    <>
      <rect x="8" y="10" width="48" height="30" rx="4" stroke={N} {...common} fill="#fff" />
      <g className={s.fan}>
        <circle cx="32" cy="25" r="3" fill={N} />
        <path d="M32 25c0-8 6-10 6-10M32 25c7 4 6 10 6 10M32 25c-7 4-12 0-12 0" stroke={B} {...common} />
      </g>
      <g className={s.air} stroke={B} {...common} strokeWidth="2.5">
        <path d="M18 46c-3 4 3 6 0 10" />
        <path d="M32 46c-3 4 3 6 0 10" />
        <path d="M46 46c-3 4 3 6 0 10" />
      </g>
    </>
  ),
  "fire-fighting": (
    <>
      <path d="M8 10h48M32 10v10" stroke="#B45309" {...common} />
      <path d="M24 20h16l-4 8h-8z" fill="#B45309" stroke={N} strokeWidth="2" strokeLinejoin="round" />
      <g className={s.spray} fill="#B45309">
        {[[22, 36], [32, 38], [42, 36], [18, 46], [32, 48], [46, 46]].map(([x, y], i) => (
          <circle key={i} style={{ "--i": i % 3 }} cx={x} cy={y} r="2.2" />
        ))}
      </g>
      <path className={s.flame} d="M32 58c-7 0-9-6-6-11 1 3 3 3 3 3 0-5 3-8 6-10-1 5 5 7 4 13-1 3-3 5-7 5z" fill={G} stroke={N} strokeWidth="1.5" />
    </>
  ),
  "low-current": (
    <>
      <path className={s.link} d="M14 16L32 32L50 16M32 32V52M14 16H50" stroke={B} {...common} strokeWidth="2.5" />
      {[[14, 16], [50, 16], [32, 32], [32, 52]].map(([cx, cy], i) => (
        <circle key={i} className={s.node} style={{ "--i": i }} cx={cx} cy={cy} r="6" fill={i === 2 ? G : "#fff"} stroke={N} strokeWidth="2.5" />
      ))}
    </>
  ),
  "planning-architecture": (
    <>
      <rect x="8" y="8" width="48" height="48" rx="3" stroke={N} {...common} fill="#fff" />
      <path d="M8 20h48M8 32h48M8 44h48M20 8v48M32 8v48M44 8v48" stroke="var(--asas-border)" strokeWidth="1" />
      <path className={s.plan} pathLength="1" d="M16 48V24h20v12h12v12z" stroke={B} {...common} />
      <circle className={s.pin} cx="16" cy="48" r="3.5" fill={G} stroke={N} strokeWidth="1.5" />
    </>
  ),
  "villa-works": (
    <>
      <path d="M6 54h52" stroke={N} {...common} />
      <path d="M10 54V30l14-12 14 12v24" stroke={N} {...common} fill="#fff" />
      <rect x="20" y="40" width="8" height="14" fill={B} />
      <g className={s.extension}>
        <rect x="38" y="36" width="18" height="18" fill={G} stroke={N} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="43" y="41" width="8" height="6" fill="#fff" stroke={N} strokeWidth="1.5" />
      </g>
    </>
  ),
  "ev-chargers": (
    <>
      <rect x="8" y="10" width="20" height="44" rx="3" stroke={N} {...common} fill="#fff" />
      <rect x="12" y="16" width="12" height="28" rx="1.5" stroke={N} strokeWidth="1.5" fill="none" />
      <rect className={s.battery} x="13.5" y="17.5" width="9" height="25" fill={G} />
      <path d="M28 30h8c6 0 6 8 12 8h4" stroke={N} {...common} />
      <path className={s.charge} d="M28 30h8c6 0 6 8 12 8h4" stroke={G} {...common} />
      <path d="M44 54l4-10h8l4 10z" fill={B} stroke={N} strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
};

export default function ServiceMotionGrid() {
  return (
    <div className={s.grid}>
      {SERVICES.map((svc, i) => (
        <a
          key={svc.slug}
          href={`/services/${svc.slug}`}
          className={s.tile}
          data-aos={"fade-up"}
          data-aos-duration={"800"}
          data-aos-delay={String(100 + (i % 4) * 80)}
        >
          <span className={s.chip}>{svc.group}</span>
          <span className={s.art} aria-hidden="true">
            <svg viewBox="0 0 64 64">{ICONS[svc.slug]}</svg>
          </span>
          <span className={s.title}>{svc.title}</span>
          <span className={s.text}>{SERVICE_CONTENT[svc.slug].summary}</span>
          <span className={s.more}>
            Explore
            <i className={"ph-bold ph-arrow-right"} aria-hidden="true"></i>
          </span>
        </a>
      ))}
      <a href={QUOTE_HREF} className={`${s.tile} ${s.cta}`} data-aos={"fade-up"} data-aos-duration={"800"} data-aos-delay={"340"}>
        <span className={s.ctaTitle}>Need several trades? Get one quotation.</span>
        <span className={s.text}>Tell us about the space and we&rsquo;ll price the whole job, from civil works to handover.</span>
        <span className={s.more}>
          Request a Quote
          <i className={"ph-bold ph-arrow-right"} aria-hidden="true"></i>
        </span>
      </a>
    </div>
  );
}
