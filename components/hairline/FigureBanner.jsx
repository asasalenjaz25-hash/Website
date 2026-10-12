import HairlineFigure from "./HairlineFigure";
import styles from "./Hairline.module.css";

// Replaces the template's breadcrumb photo (a placeholder, see
// design-system/image-manifest) with a Hairline figure and a few page facts.
// facts: [{ value, label }], 2 to 4 of them, taken from data already in the repo.
export default function FigureBanner({ figure, focus, label, facts, children }) {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerFigure}>
        <HairlineFigure name={figure} focus={focus} label={label} tone="surface" />
      </div>
      <div className={styles.bannerBody}>
        <ul className={styles.facts}>
          {facts.map((f) => (
            <li key={f.label}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
        {children}
        <p className={styles.hint}>
          <i className="ph ph-hand-pointing" aria-hidden="true"></i>
          Point at the drawing to explore it
        </p>
      </div>
    </div>
  );
}
