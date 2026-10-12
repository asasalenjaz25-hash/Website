import HairlineFigure from "@/components/hairline/HairlineFigure";
import { SERVICES } from "@/components/site";
import { ApprovalsStrip, ContactRail, RelatedProjects, ShopTeaser } from "./Details";
import styles from "./Details.module.css";

// One finishing section for every service page, placed before its contact or
// blog section: a Hairline figure for the trade, recent projects, links into
// the shop where the trade sells something, the approvals and contact buttons.

// Which figure, and which layer of the ceiling void it highlights at rest.
const FIGURE = {
  hvac: { name: "throw", label: "Line drawing of a room with a wall-mounted AC; the floor shows where its cold air falls" },
  "ev-chargers": { name: "ceiling", focus: "electrical" },
};

// Project sectors that match a trade outright; other trades show featured projects.
const SECTORS = { "ev-chargers": ["ev"], "villa-works": ["villas"] };

const SHOP = { hvac: "hvac", plumbing: "plumbing" };

export default function ServiceExtras({ slug }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  const figure = FIGURE[slug] || { name: "ceiling", focus: slug };
  const shop = SHOP[slug];

  return (
    <section className={styles.extras} aria-labelledby={`extras-${slug}`}>
      <div className="container">
        <div className={styles.extrasPanel}>
          <div className={styles.extrasFigure}>
            <HairlineFigure
              name={figure.name}
              focus={figure.focus}
              tone="surface"
              label={figure.label || `Exploded line drawing of a ceiling void, with the layer for ${service.title} highlighted`}
            />
          </div>
          <div className={styles.extrasBody}>
            <h2 id={`extras-${slug}`} className={styles.extrasTitle}>
              {service.title}, from site visit to handover
            </h2>
            <ApprovalsStrip />
            <div className={styles.extrasGrid}>
              <RelatedProjects sectors={SECTORS[slug]} />
              {shop ? <ShopTeaser kind={shop} /> : <ContactRail title="Talk to an engineer" text="Tell us about the space and the works you need." />}
            </div>
            {shop ? <ContactRail title="Talk to an engineer" text="Tell us about the space and the works you need." /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
