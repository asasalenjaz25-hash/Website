"use client";

import { useId, useState } from "react";
import { CATEGORIES, PRODUCTS, eyebrowFor, formatAED, formatAmount, installPrice, productSku } from "./catalog";
import { AddButton, SizePicker } from "./Controls";
import ProductMedia from "./ProductMedia";
import styles from "@/components/pages/Shop.module.css";

export function ProductCard({ product, headingLevel = 3 }) {
  const id = useId();
  const [size, setSize] = useState(product.sizes[0].key);
  const price = product.sizes.find((s) => s.key === size).price;
  const Heading = `h${headingLevel}`;
  const href = `/shop/${product.slug}`;

  return (
    <article className={styles.card}>
      {/* Same destination as the title link, so it is hidden from keyboard and screen readers */}
      <a href={href} className={styles.cardMedia} tabIndex={-1} aria-hidden="true">
        <ProductMedia product={product} />
      </a>
      <div className={styles.cardBody}>
        <div>
          <p className={styles.eyebrow}>{eyebrowFor(product)}</p>
          <Heading className={styles.cardTitle}>
            <a href={href}>{product.name}</a>
          </Heading>
        </div>
        <SizePicker name={`${id}-size`} sizes={product.sizes} value={size} onChange={setSize} />
        <div className={styles.priceBlock}>
          <p className={styles.price}>
            <span className={styles.priceCurrency}>AED</span>
            <span key={price} className={styles.priceValue}>
              {formatAmount(price)}
            </span>
            <span className={styles.priceVat}>+ 5% VAT</span>
          </p>
          <p className={styles.priceNote}>
            <i className="ph ph-wrench" aria-hidden="true"></i>
            Product only. Add installation in your cart: +{formatAED(installPrice(product.category, size))}
          </p>
        </div>
        <div className={styles.cardActions}>
          <AddButton sku={productSku(product.slug, size)} />
          <a href={href} className={styles.iconLink} aria-label={`${product.name}: details and full price list`}>
            <i className="ph-bold ph-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

// Category filter + product cards (shop page).
export default function ProductGrid() {
  const [active, setActive] = useState("all");
  // Cards only animate after the visitor filters, not on first paint.
  const [animate, setAnimate] = useState(false);

  const filters = [
    { key: "all", label: "All products", count: PRODUCTS.length },
    ...CATEGORIES.map((c) => ({ key: c.key, label: c.label, count: PRODUCTS.filter((p) => p.category === c.key).length })),
  ];
  const list = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <div>
      <div className={styles.filters} role="group" aria-label="Filter products by type">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`font-heading fw-medium ${styles.filterBtn}`}
            aria-pressed={active === f.key}
            onClick={() => {
              setActive(f.key);
              setAnimate(true);
            }}
          >
            <span>{f.label}</span>
            <span className={styles.filterCount}>
              {f.count}
              <span className="visually-hidden"> products</span>
            </span>
          </button>
        ))}
      </div>

      <ul className={`row gy-4 ${styles.grid}`}>
        {list.map((p, i) => (
          <li
            key={`${active}-${p.slug}`}
            className={`col-xl-4 col-md-6 ${animate ? styles.cardIn : ""}`}
            style={animate ? { "--stagger": i } : undefined}
          >
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
