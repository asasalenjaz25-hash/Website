import { categoryOf } from "./catalog";
import styles from "@/components/pages/Shop.module.css";

const NAVY = "#06245E";
const BLUE = "#184FB4";
const GOLD = "#F2B300";
const LINE = "#9FB0C8";

// Line illustrations for products without a photo yet (ducted units, solar
// water heater). Replace with real product photos when ASAS supplies them.
function DuctedArt() {
  return (
    <svg viewBox="0 0 320 240" className={styles.art} aria-hidden="true" focusable="false">
      <rect x="16" y="26" width="288" height="114" rx="12" fill="#fff" stroke={LINE} strokeWidth="2" strokeDasharray="6 6" />
      {/* concealed indoor unit */}
      <rect x="40" y="56" width="120" height="56" rx="8" fill="#fff" stroke={NAVY} strokeWidth="3" />
      <path d="M56 74H144M56 85H144M56 96H144" stroke={NAVY} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      {/* supply duct */}
      <path d="M160 68H232Q248 68 248 84V138M160 100H216V138" fill="none" stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
      {/* return plenum */}
      <path d="M66 112V138M102 112V138" stroke={NAVY} strokeWidth="3" />
      {/* ceiling */}
      <path d="M8 140H312" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
      {/* grilles */}
      <rect x="208" y="136" width="48" height="11" rx="2.5" fill="#fff" stroke={NAVY} strokeWidth="3" />
      <path d="M218 139V144M226 139V144M234 139V144M242 139V144" stroke={NAVY} strokeWidth="2" />
      <rect x="60" y="136" width="48" height="11" rx="2.5" fill="#fff" stroke={NAVY} strokeWidth="3" />
      <path d="M70 139V144M78 139V144M86 139V144M94 139V144" stroke={NAVY} strokeWidth="2" />
      {/* cool air out */}
      <path d="M218 160q7 9 0 18t0 18t0 18M232 160q7 9 0 18t0 18t0 18M246 160q7 9 0 18t0 18t0 18" fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
      {/* return air in */}
      <path d="M76 204V164M70 172l6-8 6 8M94 204V164M88 172l6-8 6 8" fill="none" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <circle cx="286" cy="48" r="5" fill={GOLD} />
    </svg>
  );
}

function SolarArt() {
  const tubes = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg viewBox="0 0 320 240" className={styles.art} aria-hidden="true" focusable="false">
      {/* sun */}
      <circle cx="58" cy="54" r="17" fill={GOLD} />
      <path d="M58 24V30M58 78V84M28 54H34M82 54H88M37 33l4 4M75 71l4 4M37 75l4-4M75 37l4-4" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
      {/* vacuum tubes */}
      {tubes.map((i) => (
        <g key={i}>
          <path d={`M${166 + i * 17} 104L${116 + i * 17} 188`} stroke="#DCE3EE" strokeWidth="11" strokeLinecap="round" />
          <path d={`M${166 + i * 17} 104L${116 + i * 17} 188`} stroke={BLUE} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        </g>
      ))}
      {/* storage tank */}
      <rect x="150" y="70" width="146" height="38" rx="19" fill="#fff" stroke={NAVY} strokeWidth="3" />
      <path d="M170 76V102M276 76V102" stroke={NAVY} strokeWidth="2" opacity="0.3" />
      {/* frame */}
      <path d="M106 192H232M112 192V210M288 108V210" stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
      {/* hot water out */}
      <path d="M296 90H306V210" fill="none" stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="306" cy="150" r="4" fill={GOLD} />
      {/* roof */}
      <path d="M12 210H312" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

const ART = { ducted: DuctedArt, solar: SolarArt };

// Product image in a tinted frame. variant: "card" | "hero" | "thumb".
export default function ProductMedia({ product, variant = "card", eager = false }) {
  const frame = `${styles.media} ${variant === "hero" ? styles.mediaHero : ""} ${variant === "thumb" ? styles.mediaThumb : ""}`;

  if (product.image) {
    const [width, height] = product.imageSize;
    return (
      <div className={frame}>
        <img
          className={`${styles.mediaImg} ${product.wide ? styles.mediaImgWide : ""}`}
          src={product.image}
          alt={product.name}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    );
  }

  const Art = ART[product.category];
  return (
    <div className={frame} role="img" aria-label={`Illustration of a ${categoryOf(product.category).short}`}>
      {Art ? <Art /> : null}
      {variant !== "thumb" && <span className={styles.artTag}>Illustration</span>}
    </div>
  );
}
