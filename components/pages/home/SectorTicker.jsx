import { SECTORS, sectorCounts } from "@/components/projects";
import s from "./SectorTicker.module.css";

// Two rows of sectors scrolling in opposite directions, with real project
// counts from components/projects.js. CSS-only; pauses on hover.

const ICON = {
  offices: "ph-briefcase",
  restaurants: "ph-fork-knife",
  retail: "ph-storefront",
  salons: "ph-scissors",
  laundries: "ph-t-shirt",
  warehouses: "ph-warehouse",
  "education-health": "ph-first-aid-kit",
  residential: "ph-buildings",
  villas: "ph-house-line",
  ev: "ph-charging-station",
};

function Row({ items, reverse }) {
  // Rendered twice so the -50% translate loops seamlessly. Decorative: the
  // section carries a visually-hidden list for screen readers.
  return (
    <div className={`${s.row} ${reverse ? s.reverse : ""}`}>
      {[0, 1].map((copy) => (
        <ul key={copy} className={s.track}>
          {items.concat(items).map((it, i) => (
            <li key={`${it.key}-${i}`} className={s.item} data-dup={i >= items.length ? "" : undefined}>
              <span className={s.icon}>
                <i className={`ph-bold ${ICON[it.key]}`} aria-hidden="true"></i>
              </span>
              <span className={s.label}>{it.label}</span>
              <span className={s.count}>{it.count} {it.count === 1 ? "project" : "projects"}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function SectorTicker() {
  const counts = sectorCounts();
  const items = SECTORS.filter((x) => ICON[x.key] && counts[x.key]).map((x) => ({ ...x, count: counts[x.key] }));
  const half = Math.ceil(items.length / 2);

  return (
    <section className={s.section} aria-labelledby="sectors-title">
      <div className={"container"}>
        <div className={s.head}>
          <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl text-uppercase text-white tw-mb-4 d-inline-block position-relative z-1"}>
            Sectors we build for
          </div>
          <h2 id="sectors-title" className={`section-seven-title tw-text-122 text-white ${s.title}`}>
            From Noodle Bars To Warehouses
          </h2>
        </div>
      </div>
      <p className="visually-hidden">
        Sectors: {items.map((it) => `${it.label} (${it.count} projects)`).join(", ")}.
      </p>
      <div className={s.rows} aria-hidden="true">
        <Row items={items.slice(0, half)} />
        <Row items={items.slice(half)} reverse />
      </div>
    </section>
  );
}
