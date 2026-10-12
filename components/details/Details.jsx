import { COMPANY, QUOTE_HREF } from "@/components/site";
import { PROJECTS, featuredProjects, sectorCounts, SECTORS } from "@/components/projects";
import { PRODUCTS, PLANS, SERVICES as SHOP_SERVICES, formatAED } from "@/components/shop/catalog";
import styles from "./Details.module.css";

// Small finishing blocks shared across pages. All copy comes from data already
// in the repo (components/site.js, projects.js, shop/catalog.js) or from the
// About page's own "how we work" steps; nothing here makes a new claim.

const WHATSAPP = `https://wa.me/${COMPANY.phones[0].tel.replace(/\D/g, "")}`;
const joinList = (items) => `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/** DEWA · Dubai Municipality · Civil Defence · Trakhees, as seal chips. tone: "light" | "dark" */
export function ApprovalsStrip({ tone = "light", label = "Approved by", className = "" }) {
  return (
    <div className={`${styles.strip} ${tone === "dark" ? styles.dark : ""} ${className}`}>
      <span className={styles.stripLabel}>{label}</span>
      <ul className={styles.chips}>
        {COMPANY.approvals.map((a) => (
          <li key={a} className={styles.chip}>
            <i className="ph ph-seal-check" aria-hidden="true"></i>
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Dubai · Abu Dhabi · Sharjah · Ajman */
export function AreasChips({ tone = "light", label = "We work in", className = "" }) {
  return (
    <div className={`${styles.strip} ${tone === "dark" ? styles.dark : ""} ${className}`}>
      <span className={styles.stripLabel}>{label}</span>
      <ul className={styles.chips}>
        {COMPANY.areas.map((a) => (
          <li key={a} className={styles.chip}>
            <i className="ph ph-map-pin" aria-hidden="true"></i>
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

// The three steps from the About page's "How we work" section.
export const STEPS = [
  { icon: "ph-ruler", title: "Site visit & planning", text: "We review the space, drawings and authority requirements." },
  {
    icon: "ph-stamp",
    title: "Design & approvals",
    text: `Architecture and MEP design prepared to ${joinList(COMPANY.approvals)} requirements.`,
  },
  {
    icon: "ph-key",
    title: "Execution & handover",
    text: "Our in-house teams build to specification, with regular progress reports, testing and commissioning.",
  },
];

export function NextSteps({ title = "What happens next", steps = STEPS, className = "" }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ol className={styles.steps}>
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className={styles.stepNum} aria-hidden="true">
              <i className={`ph ${s.icon}`}></i>
            </span>
            <span>
              <strong>
                <span className="visually-hidden">Step {i + 1}: </span>
                {s.title}
              </strong>
              <small>{s.text}</small>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Call, WhatsApp and email, as one row of buttons. */
export function ContactRail({ title, text, className = "" }) {
  const [p1] = COMPANY.phones;
  return (
    <div className={`${styles.card} ${className}`}>
      {title ? <h3 className={styles.cardTitle}>{title}</h3> : null}
      {text ? <p className={styles.cardText}>{text}</p> : null}
      <div className={styles.rail}>
        <a href={`tel:${p1.tel}`} className={styles.railBtn}>
          <i className="ph ph-phone-call" aria-hidden="true"></i>
          {p1.label}
        </a>
        <a href={WHATSAPP} className={styles.railBtn} target="_blank" rel="noopener noreferrer">
          <i className="ph ph-whatsapp-logo" aria-hidden="true"></i>
          WhatsApp
        </a>
        <a href={`mailto:${COMPANY.email}`} className={styles.railBtn}>
          <i className="ph ph-envelope" aria-hidden="true"></i>
          Email us
        </a>
      </div>
    </div>
  );
}

/** Three projects, featured or from given sectors, with a link to the full list. */
export function RelatedProjects({ sectors, title = "Recent projects", className = "" }) {
  const pool = sectors ? PROJECTS.filter((p) => sectors.includes(p.sector)) : featuredProjects();
  const list = pool.slice(0, 3);
  if (!list.length) return null;
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <a href="/projects#browse-projects" className={styles.textLink}>
          All {PROJECTS.length} projects <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <ul className={styles.projects}>
        {list.map((p) => (
          <li key={p.sn}>
            <span className={styles.projectIcon} aria-hidden="true">
              <i className="ph ph-buildings"></i>
            </span>
            <span>
              <strong>{p.name}</strong>
              <small>
                {p.type} · {p.location}
              </small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Project counts by sector, biggest first, as a compact stats row. */
export function SectorStats({ limit = 6, className = "" }) {
  const counts = sectorCounts();
  const rows = SECTORS.filter((s) => counts[s.key])
    .map((s) => ({ ...s, count: counts[s.key] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
  return (
    <ul className={`${styles.stats} ${className}`}>
      {rows.map((s) => (
        <li key={s.key}>
          <strong>{s.count}</strong>
          <span>{s.label}</span>
        </li>
      ))}
    </ul>
  );
}

const fromPrice = (category) => Math.min(...PRODUCTS.filter((p) => p.category === category).flatMap((p) => p.sizes.map((s) => s.price)));

const TEASERS = {
  hvac: [
    { icon: "ph-snowflake", title: "Split ACs", text: `O General, Carrier, Super General · from ${formatAED(fromPrice("split"))}`, href: "/shop#products" },
    { icon: "ph-fan", title: "Ducted ACs", text: `1.5 to 5 ton · from ${formatAED(fromPrice("ducted"))}`, href: "/shop#products" },
    { icon: "ph-wind", title: "AC servicing", text: `Cleaning, gas top-up · from ${formatAED(Math.min(...SHOP_SERVICES.map((s) => s.price)))}`, href: "/shop#services" },
    { icon: "ph-calendar-check", title: "Maintenance plans", text: `Yearly AC care · from ${formatAED(Math.min(...PLANS.map((p) => p.price)))}`, href: "/shop#plans" },
  ],
  plumbing: [
    { icon: "ph-sun", title: "Solar water heaters", text: `200 L and 300 L · from ${formatAED(fromPrice("solar"))}`, href: "/shop/solar-water-heater" },
    { icon: "ph-wrench", title: "Installation only", text: "We install a unit you already own", href: "/shop#services" },
  ],
  general: [
    { icon: "ph-snowflake", title: "ACs", text: `Split and ducted · from ${formatAED(fromPrice("split"))}`, href: "/shop#products" },
    { icon: "ph-sun", title: "Solar water heaters", text: `from ${formatAED(fromPrice("solar"))}`, href: "/shop/solar-water-heater" },
    { icon: "ph-wind", title: "AC services & plans", text: "Servicing, cleaning, yearly plans", href: "/shop#services" },
  ],
};

/** Links into the online shop. kind: "hvac" | "plumbing" | "general" */
export function ShopTeaser({ kind = "general", title = "Buy online", text, className = "" }) {
  const items = TEASERS[kind] || TEASERS.general;
  return (
    <div className={`${styles.teaser} ${className}`}>
      <div className={styles.teaserHead}>
        <span className={styles.teaserIcon} aria-hidden="true">
          <i className="ph ph-shopping-cart-simple"></i>
        </span>
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardText}>{text || "Prices online, excluding 5% VAT. Add installation by our team in the cart."}</p>
        </div>
      </div>
      <ul className={styles.teaserList}>
        {items.map((i) => (
          <li key={i.title}>
            <a href={i.href} className={styles.teaserItem}>
              <i className={`ph ${i.icon}`} aria-hidden="true"></i>
              <span>
                <strong>{i.title}</strong>
                <small>{i.text}</small>
              </span>
              <i className="ph-bold ph-arrow-up-right" aria-hidden="true"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A quote prompt row for the end of a section. */
export function QuoteNudge({ text = "Planning a fit-out or MEP works?", className = "" }) {
  return (
    <div className={`${styles.nudge} ${className}`}>
      <p>
        <i className="ph ph-clipboard-text" aria-hidden="true"></i>
        {text}
      </p>
      <a href={QUOTE_HREF} className={styles.textLink}>
        Request a quote <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  );
}

const CHECKOUT_STEPS = ["Cart", "Your details", "Payment"];

/** Cart → Your details → Payment, with the current step marked. current: 0, 1 or 2 */
export function CheckoutSteps({ current = 0, className = "" }) {
  return (
    <nav aria-label="Checkout progress" className={className}>
      <ol className={styles.progress}>
        {CHECKOUT_STEPS.map((label, i) => (
          <li key={label} className={i < current ? styles.done : i === current ? styles.now : ""} aria-current={i === current ? "step" : undefined}>
            <span className={styles.progressDot} aria-hidden="true">
              {i < current ? <i className="ph-bold ph-check"></i> : i + 1}
            </span>
            {label}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const AFTER_PAYMENT = [
  { icon: "ph-receipt", title: "Payment confirmed", text: "You see your order number straight away." },
  { icon: "ph-phone-call", title: "We call you", text: "Our team confirms the site details and your preferred date." },
  { icon: "ph-calendar-check", title: "We book the work", text: "Installation and services are carried out by our in-house team on the agreed date." },
];
