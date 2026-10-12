// Single source of truth for the shop: products, installation prices, AC
// services and maintenance plans. Imported by server pages, client components
// and app/api/checkout, so the browser only ever sends SKU ids, quantities and
// an "install" flag; prices are always looked up here.
//
// All prices are AED, excluding 5% VAT.
// - Product prices are the ASAS price list, product only.
// - Installation is an optional add-on per cart line (or a service on its own
//   for a unit the customer already owns), priced on top.
// - Installation, AC service and plan prices are drafts set against 2026 UAE
//   market rates; confirm before launch.

export const VAT_RATE = 0.05;
export const MAX_QTY = 20;

export const CATEGORIES = [
  { key: "split", label: "Decorative Split AC", short: "Decorative split", plural: "decorative split ACs" },
  { key: "ducted", label: "Ducted Split AC", short: "Ducted split", plural: "ducted split ACs" },
  { key: "solar", label: "Solar Water Heater", short: "Solar water heater", plural: "solar water heaters" },
];

const TON = (t) => ({ key: `${t}-ton`, label: `${t} Ton` });
const LITRE = (l) => ({ key: `${l}-l`, label: `${l} L` });

// Installation price per unit, by category and size. The same price applies
// when added to a product in the cart and for a unit the customer owns.
export const INSTALL_PRICES = {
  split: { "1.5-ton": 450, "2-ton": 550, "2.5-ton": 650, "3-ton": 750 },
  ducted: { "1.5-ton": 1200, "2-ton": 1400, "2.5-ton": 1600, "3-ton": 1800, "4-ton": 2200, "5-ton": 2500 },
  solar: { "200-l": 1200, "300-l": 1500 },
};

// What the product and the installation add-on cover, per category.
export const INCLUDED = {
  split: {
    product: ["Indoor and outdoor unit"],
    installation: [
      "Mounting the indoor and outdoor units",
      "Up to 4 m of insulated copper pipe",
      "Outdoor unit bracket and drain line",
      "Gas pressure and cooling test",
    ],
  },
  ducted: {
    product: ["Concealed indoor unit and outdoor unit"],
    installation: [
      "Hanging the indoor unit above the ceiling",
      "Placing the outdoor unit",
      "Refrigerant and drain connections",
      "Gas pressure and cooling test",
    ],
  },
  solar: {
    product: ["Solar collector, frame and storage tank"],
    installation: ["Mounting the collector and tank", "Connection to your hot-water line", "Leak and temperature test"],
  },
};

export const INSTALL_EXTRAS = {
  split: "Extra pipe beyond 4 m, core drilling and new electrical points are quoted on site.",
  ducted: "Ductwork, grilles and ceiling openings are quoted after a site visit.",
  solar: "Roof works and extra piping are quoted on site.",
};

// [[size, price], …] pairs keep the order (object keys would sort "2" before "1.5").
const sizes = (make, pairs) => pairs.map(([v, price]) => ({ ...make(v), price }));

export const PRODUCTS = [
  {
    slug: "o-general-decorative-split",
    brand: "O General",
    category: "split",
    name: "O General Decorative Split AC",
    image: "/assets/images/shop/o-general-split.webp",
    imageSize: [860, 290],
    wide: true,
    summary: "Wall-mounted decorative split from O General, the premium brand in our range.",
    sizes: sizes(TON, [[1.5, 7000], [2, 7500], [2.5, 8000], [3, 9000]]),
  },
  {
    slug: "carrier-decorative-split",
    brand: "Carrier",
    category: "split",
    name: "Carrier Decorative Split AC",
    image: "/assets/images/shop/carrier-split.webp",
    imageSize: [447, 447],
    summary: "Wall-mounted decorative split from Carrier, with indoor and outdoor unit.",
    sizes: sizes(TON, [[1.5, 3500], [2, 4200], [2.5, 5000], [3, 6000]]),
  },
  {
    slug: "super-general-decorative-split",
    brand: "Super General",
    category: "split",
    name: "Super General Decorative Split AC",
    image: "/assets/images/shop/super-general-split.webp",
    imageSize: [447, 447],
    summary: "Wall-mounted decorative split from Super General, the value choice in our range.",
    sizes: sizes(TON, [[1.5, 2500], [2, 3200], [2.5, 4000], [3, 5000]]),
  },
  {
    slug: "o-general-ducted-split",
    brand: "O General",
    category: "ducted",
    name: "O General Ducted Split AC",
    summary: "Concealed ducted split from O General: the unit sits above the ceiling and cools through grilles.",
    sizes: sizes(TON, [[1.5, 8500], [2, 10000], [2.5, 12500], [3, 15000], [4, 17500], [5, 20000]]),
  },
  {
    slug: "super-general-ducted-split",
    brand: "Super General",
    category: "ducted",
    name: "Super General Ducted Split AC",
    summary: "Concealed ducted split from Super General for villas, apartments and offices.",
    sizes: sizes(TON, [[1.5, 7000], [2, 8000], [2.5, 9500], [3, 11000], [4, 12500], [5, 15000]]),
  },
  {
    slug: "solar-water-heater",
    brand: null,
    category: "solar",
    name: "Solar Water Heater",
    summary: "Rooftop solar water heater with storage tank, in 200 or 300 litre capacity.",
    sizes: sizes(LITRE, [[200, 5700], [300, 6700]]),
  },
];

export const SERVICES = [
  {
    key: "split-general-service",
    name: "Split AC general service",
    icon: "ph-wind",
    price: 150,
    description: "Filter wash, coil spray, drain line flush, and a gas pressure and cooling check.",
  },
  {
    key: "split-deep-clean",
    name: "Split AC deep clean",
    icon: "ph-sparkle",
    price: 300,
    description: "Indoor unit opened up for a chemical coil and blower wash, plus drain pan and outdoor coil cleaning.",
  },
  {
    key: "ducted-service",
    name: "Ducted AC service",
    icon: "ph-fan",
    price: 450,
    description: "Filter, coil and drain pan cleaning, blower check, and gas pressure and thermostat check.",
  },
  {
    key: "duct-cleaning",
    name: "Duct cleaning",
    icon: "ph-wind",
    price: 550,
    description: "Supply and return ducts vacuumed and brushed, grilles washed and sanitised. Priced per ducted unit.",
  },
  {
    key: "gas-top-up-split",
    name: "Gas top-up, split AC",
    icon: "ph-thermometer-cold",
    price: 250,
    description: "Leak check and refrigerant top-up (R32 or R410A) to the correct pressure. Leak repairs quoted separately.",
  },
  {
    key: "gas-top-up-ducted",
    name: "Gas top-up, ducted AC",
    icon: "ph-thermometer-cold",
    price: 600,
    description: "Leak check and refrigerant top-up for a ducted unit. Leak repairs quoted separately.",
  },
  {
    key: "solar-heater-service",
    name: "Solar water heater service",
    icon: "ph-sun",
    price: 250,
    description: "Collector cleaning, tank flush, and a valve, heating element and thermostat check.",
  },
];

export const PLANS = [
  {
    key: "apartment",
    name: "Apartment plan",
    price: 999,
    coverage: "Up to 3 split units",
    features: ["3 scheduled services a year", "Filter, coil and drain cleaning every visit", "Priority booking for call-outs"],
  },
  {
    key: "villa",
    name: "Villa plan",
    price: 2499,
    coverage: "Up to 6 units, split or ducted",
    features: ["4 scheduled services a year", "1 deep clean per unit", "Priority booking for call-outs"],
  },
  {
    key: "large-villa",
    name: "Large villa plan",
    price: 4499,
    coverage: "Up to 10 units, split or ducted",
    features: ["4 scheduled services a year", "1 deep clean per unit", "Priority booking for call-outs"],
  },
];

export const PLAN_EXTRA_UNIT = { key: "extra-unit", name: "Extra unit on a maintenance plan", price: 250 };
export const PLAN_TERMS = "Labour and consumables included. Spare parts and refrigerant are charged separately.";

// ---------- Lookups ----------

export const categoryOf = (key) => CATEGORIES.find((c) => c.key === key);
export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const installPrice = (category, sizeKey) => INSTALL_PRICES[category]?.[sizeKey] ?? null;
export const sizeLabel = (category, sizeKey) =>
  PRODUCTS.find((p) => p.category === category)?.sizes.find((s) => s.key === sizeKey)?.label ?? null;

export const productSku = (slug, sizeKey) => `${slug}:${sizeKey}`;
export const installSku = (category, sizeKey) => `install:${category}:${sizeKey}`;
export const serviceSku = (key) => `service:${key}`;
export const planSku = (key) => `plan:${key}`;

// Resolves a SKU id to what the cart, checkout and Stripe show, or null.
// Products carry `installPrice`: the optional installation add-on per unit.
export function getSku(id) {
  if (typeof id !== "string") return null;
  const [a, b, c] = id.split(":");

  if (a === "service") {
    const s = SERVICES.find((x) => x.key === b);
    return s ? { id, kind: "service", name: s.name, detail: "Per unit", price: s.price, icon: s.icon, href: "/shop#services" } : null;
  }
  if (a === "plan") {
    if (b === PLAN_EXTRA_UNIT.key) {
      return { id, kind: "plan", name: PLAN_EXTRA_UNIT.name, detail: "Per unit, per year", price: PLAN_EXTRA_UNIT.price, icon: "ph-plus-circle", href: "/shop#plans" };
    }
    const p = PLANS.find((x) => x.key === b);
    return p ? { id, kind: "plan", name: `${p.name} (annual)`, detail: p.coverage, price: p.price, icon: "ph-calendar-check", href: "/shop#plans" } : null;
  }
  if (a === "install") {
    const category = categoryOf(b);
    const price = installPrice(b, c);
    if (!category || price == null) return null;
    return {
      id,
      kind: "service",
      name: `${category.label} installation, ${sizeLabel(b, c)}`,
      detail: "Installation only, your own unit",
      price,
      icon: "ph-wrench",
      href: "/shop#services",
    };
  }

  const product = productBySlug(a);
  const size = product?.sizes.find((s) => s.key === b);
  if (!product || !size || c !== undefined) return null;
  return {
    id,
    kind: "product",
    name: `${product.name}, ${size.label}`,
    detail: "Product only",
    price: size.price,
    installPrice: installPrice(product.category, size.key),
    product,
    href: `/shop/${product.slug}`,
  };
}

// A cart line ({ sku, qty, install }) with its prices resolved, or null.
// `install` only counts for products that offer installation.
export function resolveLine(line) {
  const sku = getSku(line?.sku);
  if (!sku) return null;
  const install = Boolean(line.install && sku.installPrice);
  const unit = sku.price + (install ? sku.installPrice : 0);
  const detail = sku.kind === "product" ? (install ? "Product + installation" : "Product only") : sku.detail;
  return { ...sku, detail, qty: line.qty, install, unit, total: unit * line.qty };
}

// Totals in fils (integer) to avoid floating-point drift, returned in AED.
export function totals(lines) {
  let subtotal = 0;
  let count = 0;
  for (const line of lines) {
    const r = resolveLine(line);
    if (!r) continue;
    subtotal += Math.round(r.unit * 100) * r.qty;
    count += r.qty;
  }
  const vat = Math.round(subtotal * VAT_RATE);
  return { count, subtotal: subtotal / 100, vat: vat / 100, total: (subtotal + vat) / 100 };
}

const AED = new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const AED2 = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// "7,000" or "22.50": whole dirhams without decimals, otherwise two.
export function formatAmount(value) {
  return Number.isInteger(value) ? AED.format(value) : AED2.format(value);
}

export function formatAED(value) {
  return `AED ${formatAmount(value)}`;
}

// "O General · Decorative split", or just the category when there is no brand.
export function eyebrowFor(product) {
  const category = categoryOf(product.category).short;
  return product.brand ? `${product.brand} · ${category}` : category;
}
