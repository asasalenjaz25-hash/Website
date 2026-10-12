"use client";

import { useId, useState } from "react";
import { COMPANY } from "@/components/site";
import { MAX_QTY, VAT_RATE, eyebrowFor, formatAED, formatAmount, installPrice, productSku } from "./catalog";
import { addToCart } from "./cart-store";
import { AddButton, InstallToggle, QtyStepper, SizePicker } from "./Controls";
import styles from "@/components/pages/Shop.module.css";

const joinList = (items) => `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

export default function ProductBuyBox({ product }) {
  const id = useId();
  const [size, setSize] = useState(product.sizes[0].key);
  const [qty, setQty] = useState(1);
  const [install, setInstall] = useState(false);

  const price = product.sizes.find((s) => s.key === size).price;
  const install1 = installPrice(product.category, size);
  const sku = productSku(product.slug, size);
  const subtotal = (price + (install ? install1 : 0)) * qty;
  const vat = Math.round(subtotal * 100 * VAT_RATE) / 100;

  function buyNow() {
    addToCart(sku, qty, install);
    window.location.assign("/checkout");
  }

  return (
    <div className={styles.buyBox}>
      <p className={styles.eyebrow}>{eyebrowFor(product)}</p>
      <h1 className={styles.buyTitle}>{product.name}</h1>
      <p className={styles.buySummary}>{product.summary}</p>

      <SizePicker name={`${id}-size`} sizes={product.sizes} value={size} onChange={setSize} />

      <div className={styles.buyPriceRow}>
        <p className={styles.price}>
          <span className={styles.priceCurrency}>AED</span>
          <span key={price} className={`${styles.priceValue} ${styles.buyPriceValue}`}>
            {formatAmount(price)}
          </span>
          <span className={styles.priceVat}>+ 5% VAT · product only</span>
        </p>
      </div>

      <InstallToggle checked={install} onChange={setInstall} price={install1} qty={qty} />

      <div className={styles.buyActions}>
        <QtyStepper value={qty} onChange={(v) => setQty(Math.min(MAX_QTY, Math.max(1, v)))} label="Quantity" />
        <AddButton sku={sku} qty={qty} install={install} className={styles.buyAdd} />
      </div>
      <p className={styles.buyTotal} aria-live="polite">
        {qty > 1 || install ? `${qty} × ${install ? "product + installation" : "product"}: ` : "Total: "}
        <strong>{formatAED(subtotal + vat)}</strong> including {formatAED(vat)} VAT
      </p>
      <button type="button" className={`${styles.btn} ${styles.btnGhost} w-100`} onClick={buyNow}>
        Buy now
        <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
      </button>

      <ul className={styles.notes}>
        <li>
          <i className="ph ph-wrench" aria-hidden="true"></i>
          Not sure yet? You can add or remove installation in your cart.
        </li>
        <li>
          <i className="ph ph-lock-simple" aria-hidden="true"></i>
          Secure online card payment through Stripe
        </li>
        <li>
          <i className="ph ph-phone-call" aria-hidden="true"></i>
          Our team calls to confirm your order and book any installation
        </li>
        <li>
          <i className="ph ph-map-pin" aria-hidden="true"></i>
          Serving {joinList(COMPANY.areas)}
        </li>
        <li>
          <i className="ph ph-seal-check" aria-hidden="true"></i>
          Approved by {joinList(COMPANY.approvals)}
        </li>
      </ul>
    </div>
  );
}
