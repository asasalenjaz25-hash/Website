import PageShell from "@/components/PageShell";
import { COMPANY } from "@/components/site";
import {
  CATEGORIES,
  INSTALL_PRICES,
  PLANS,
  PLAN_EXTRA_UNIT,
  PLAN_TERMS,
  PRODUCTS,
  SERVICES,
  formatAED,
  formatAmount,
  planSku,
  serviceSku,
} from "@/components/shop/catalog";
import { AddButton } from "@/components/shop/Controls";
import { ApprovalsStrip, AreasChips, QuoteNudge } from "@/components/details/Details";
import CapacityThrow from "@/components/shop/CapacityThrow";
import InstallOnlyCard from "@/components/shop/InstallOnlyCard";
import ProductGrid from "@/components/shop/ProductGrid";
import ShopHero from "@/components/shop/ShopHero";
import PrimaryButton from "@/components/shop/PrimaryButton";
import styles from "./Shop.module.css";

// The shop: AC units and solar water heaters (product price; installation is
// added per item in the cart), AC services, annual maintenance plans, the full
// price list and how ordering works. Prices come from components/shop/catalog.js.

const JUMPS = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "AC services" },
  { href: "#plans", label: "Maintenance plans" },
  { href: "#price-list", label: "Price list" },
];

const STEPS = [
  {
    icon: "ph-shopping-cart-simple",
    title: "Add products and services",
    text: "Pick the unit and capacity. In your cart, tick Add installation on any unit, or add AC services and a maintenance plan.",
  },
  {
    icon: "ph-lock-simple",
    title: "Pay securely online",
    text: "Card payment on Stripe's secure checkout. Prices exclude VAT; 5% VAT is added at checkout.",
  },
  {
    icon: "ph-phone-call",
    title: "We confirm and book",
    text: "Our team calls to confirm your order and book your installation or service date.",
  },
];

function SectionHeading({ id, eyebrow, title, intro }) {
  return (
    <div className={"row align-items-end justify-content-between tw-mb-10"}>
      <div className={"col-lg-7"}>
        <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
          {eyebrow}
        </div>
        <h2 id={id} className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation"}>
          {title}
        </h2>
      </div>
      {intro ? (
        <div className={"col-lg-5"}>
          <p className={styles.sectionIntro}>{intro}</p>
        </div>
      ) : null}
    </div>
  );
}

// Sizes as rows, brands (product price) plus the installation add-on as columns.
function PriceTable({ category, caption }) {
  const products = PRODUCTS.filter((p) => p.category === category);
  const sizes = products.reduce((all, p) => (p.sizes.length > all.length ? p.sizes : all), []);
  const solo = products.length === 1;
  return (
    <div className={styles.tableWrap} tabIndex={0} role="region" aria-label={caption}>
      <table className={styles.table}>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Capacity</th>
            {products.map((p) => (
              <th key={p.slug} scope="col">
                {solo ? "Product" : p.brand}
                <span className={styles.thSub}>Product only</span>
              </th>
            ))}
            <th scope="col">
              Installation
              <span className={styles.thSub}>Optional, per unit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((s) => (
            <tr key={s.key}>
              <th scope="row">{s.label}</th>
              {products.map((p) => {
                const price = p.sizes.find((x) => x.key === s.key)?.price;
                return <td key={p.slug}>{price ? formatAmount(price) : "–"}</td>;
              })}
              <td className={styles.tdService}>{formatAmount(INSTALL_PRICES[category][s.key])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ShopPage() {
  return (
    <PageShell>
      <ShopHero
        title="Shop"
        trail={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        intro={`Air conditioners and solar water heaters at product price. Add installation by the ${COMPANY.short} team in your cart, book AC servicing, or choose a yearly maintenance plan. Pay securely online.`}
      />

      <nav className={styles.jumpNav} aria-label="Shop sections">
        <ul>
          {JUMPS.map((j) => (
            <li key={j.href}>
              <a href={j.href} className={styles.jumpLink}>
                {j.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`container ${styles.trust}`}>
        <ApprovalsStrip />
        <AreasChips />
        <p className={styles.trustPay}>
          <i className="ph ph-lock-simple" aria-hidden="true"></i>
          Secure card payment
        </p>
      </div>

      <section id="products" className={`py-120 bg-white ${styles.anchor}`} aria-labelledby="products-title">
        <div className={"container"}>
          <SectionHeading
            id="products-title"
            eyebrow="Products"
            title="ACs And Solar Water Heaters"
            intro="Prices are for the product. Want it installed? Tick Add installation on the item in your cart. All prices are in AED and exclude 5% VAT."
          />
          <ProductGrid />
          <QuoteNudge className="tw-mt-10" text="Fitting out a whole villa, office or restaurant? One quotation covers every trade." />
        </div>
      </section>

      <section id="services" className={`py-120 ${styles.surface} ${styles.anchor}`} aria-labelledby="services-title">
        <div className={"container"}>
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="AC And Water Heater Services"
            intro="Installation, servicing, cleaning and gas top-ups for units you already have. Priced per unit."
          />
          <InstallOnlyCard />
          <ul className={`row gy-4 tw-mt-2 ${styles.grid}`}>
            {SERVICES.map((s) => (
              <li key={s.key} className={"col-xl-3 col-lg-4 col-md-6"}>
                <article className={styles.serviceCard}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <i className={`ph ${s.icon}`}></i>
                  </span>
                  <h3 className={styles.serviceName}>{s.name}</h3>
                  <p className={styles.serviceDesc}>{s.description}</p>
                  <p className={styles.servicePrice}>
                    {formatAED(s.price)}
                    <span>per unit + VAT</span>
                  </p>
                  <AddButton sku={serviceSku(s.key)} />
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="plans" className={`py-120 bg-white ${styles.anchor}`} aria-labelledby="plans-title">
        <div className={"container"}>
          <SectionHeading
            id="plans-title"
            eyebrow="Annual maintenance"
            title="AC Maintenance Plans"
            intro="One payment covers a year of scheduled AC servicing. Choose the plan that fits your home."
          />
          <ul className={`row gy-4 ${styles.grid}`}>
            {PLANS.map((p) => (
              <li key={p.key} className={"col-lg-4"}>
                <article className={styles.planCard}>
                  <h3 className={styles.planName}>{p.name}</h3>
                  <p className={styles.planCoverage}>{p.coverage}</p>
                  <p className={styles.planPrice}>
                    <span className={styles.priceCurrency}>AED</span>
                    {formatAmount(p.price)}
                    <span className={styles.planPer}>/ year + VAT</span>
                  </p>
                  <ul className={styles.planFeatures}>
                    {p.features.map((f) => (
                      <li key={f}>
                        <i className="ph-bold ph-check" aria-hidden="true"></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <AddButton sku={planSku(p.key)} label="Add plan to cart" />
                </article>
              </li>
            ))}
          </ul>
          <div className={styles.planExtra}>
            <p>
              <strong>More units?</strong> Add {formatAED(PLAN_EXTRA_UNIT.price)} per extra unit per year to any plan. {PLAN_TERMS}
            </p>
            <AddButton sku={planSku(PLAN_EXTRA_UNIT.key)} label="Add extra unit" className={styles.btnGhost} />
          </div>
        </div>
      </section>

      <section id="price-list" className={`py-120 ${styles.surface} ${styles.anchor}`} aria-labelledby="price-list-title">
        <div className={"container"}>
          <SectionHeading
            id="price-list-title"
            eyebrow="Price list"
            title="Full Price List"
            intro="Every product and service in one place. Prices in AED, excluding 5% VAT."
          />
          <div className={styles.tables}>
            {CATEGORIES.map((c) => (
              <PriceTable key={c.key} category={c.key} caption={`${c.label} prices (AED, excl. VAT)`} />
            ))}
            <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="AC and water heater services prices">
              <table className={styles.table}>
                <caption>Services (AED per unit, excl. VAT)</caption>
                <thead>
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s) => (
                    <tr key={s.key}>
                      <th scope="row">{s.name}</th>
                      <td>{formatAmount(s.price)}</td>
                    </tr>
                  ))}
                  {PLANS.map((p) => (
                    <tr key={p.key}>
                      <th scope="row">{p.name} (per year)</th>
                      <td>{formatAmount(p.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className={"py-120 bg-white"} aria-labelledby="how-title">
        <div className={"container"}>
          <SectionHeading id="how-title" eyebrow="How it works" title="Ordering In Three Steps" />
          <ol className={`row gy-4 ${styles.steps}`}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={"col-lg-4"}>
                <div className={styles.step}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <i className={`ph ${s.icon} ${styles.stepIcon}`} aria-hidden="true"></i>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={`${styles.cta} ${styles.ctaWithFigure}`}>
            <CapacityThrow />
            <div className={styles.ctaBody}>
              <h2 className={styles.ctaTitle}>Not sure which capacity you need?</h2>
              <p className={styles.ctaText}>
                More tons, further reach. Tell us the room size and how it&rsquo;s used and we&rsquo;ll recommend the right unit before you
                order.
              </p>
              <div className={styles.ctaActions}>
              <PrimaryButton href={`https://wa.me/${COMPANY.phones[0].tel.replace(/\D/g, "")}`} tone="gold" target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </PrimaryButton>
              <a href={`tel:${COMPANY.phones[0].tel}`} className={styles.ctaPhone}>
                <i className="ph ph-phone-call" aria-hidden="true"></i>
                  {COMPANY.phones[0].label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
