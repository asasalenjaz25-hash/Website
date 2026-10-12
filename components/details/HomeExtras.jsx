import HairlineFigure from "@/components/hairline/HairlineFigure";
import PrimaryButton from "@/components/shop/PrimaryButton";
import { PROJECTS } from "@/components/projects";
import { ApprovalsStrip, AreasChips, SectorStats, ShopTeaser } from "./Details";
import styles from "./Details.module.css";

// Home page additions, kept out of HomePage.jsx so that file only gains three
// tags: a projects-by-sector row, the shop band and a trust band.

/** After "Completed projects": the project list by sector, linking to /projects. */
export function HomeSectors() {
  return (
    <div className="container">
      <div className={styles.homeSectors}>
        <SectorStats limit={5} />
        <a href="/projects#browse-projects" className={styles.textLink}>
          Browse all {PROJECTS.length} projects by sector <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

/** After the services grid: the online shop, with the Throw figure. */
export function HomeShopBand() {
  return (
    <section className={styles.homeShop} aria-labelledby="home-shop-title">
      <div className="container">
        <div className={styles.homeShopPanel}>
          <div className={styles.homeShopFigure}>
            <HairlineFigure
              name="throw"
              tone="surface"
              label="Line drawing of a room with a wall-mounted AC; the floor shows where its cold air falls"
            />
          </div>
          <div className={styles.homeShopBody}>
            <span className={styles.stripLabel}>New · Shop online</span>
            <h2 id="home-shop-title" className={styles.extrasTitle}>
              ACs and solar water heaters, with installation by our team
            </h2>
            <ShopTeaser kind="general" title="Buy online" />
            <div>
              <PrimaryButton href="/shop">Visit the shop</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Before the contact section: approvals and the emirates we work in. */
export function HomeTrustBand() {
  return (
    <div className="container">
      <div className={styles.homeTrust}>
        <ApprovalsStrip />
        <AreasChips />
      </div>
    </div>
  );
}
