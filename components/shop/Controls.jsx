"use client";

import { useEffect, useRef, useState } from "react";
import { MAX_QTY, formatAED, getSku } from "./catalog";
import { addToCart } from "./cart-store";
import styles from "@/components/pages/Shop.module.css";

// Small shared controls for product cards, the product buy box and the cart.

// Optional installation add-on for a product (product page and cart lines).
export function InstallToggle({ checked, onChange, price, qty = 1 }) {
  return (
    <label className={`${styles.installToggle} ${checked ? styles.installOn : ""}`}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className={styles.installBox} aria-hidden="true">
        <i className="ph-bold ph-check"></i>
      </span>
      <span className={styles.installText}>
        <strong>Add installation by our team</strong>
        <small>{qty > 1 ? `${qty} × ${formatAED(price)}` : `${formatAED(price)} per unit`}</small>
      </span>
      <span className={styles.installPrice}>+{formatAED(price * qty)}</span>
    </label>
  );
}

export function SizePicker({ name, sizes, value, onChange, legend = "Capacity" }) {
  return (
    <fieldset className={styles.sizeSet}>
      <legend className={styles.pickerLegend}>{legend}</legend>
      <div className={styles.sizes}>
        {sizes.map((s) => (
          <label key={s.key} className={styles.size}>
            <input type="radio" name={name} value={s.key} checked={value === s.key} onChange={() => onChange(s.key)} />
            <span>{s.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function QtyStepper({ value, onChange, label = "Quantity" }) {
  return (
    <div className={styles.stepper} role="group" aria-label={label}>
      <button type="button" className={styles.stepBtn} onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label="Decrease quantity">
        <i className="ph-bold ph-minus" aria-hidden="true"></i>
      </button>
      <span className={styles.stepValue} aria-live="polite">
        {value}
      </span>
      <button type="button" className={styles.stepBtn} onClick={() => onChange(value + 1)} disabled={value >= MAX_QTY} aria-label="Increase quantity">
        <i className="ph-bold ph-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
}

// Adds a SKU to the cart and confirms in place for two seconds. The header
// cart badge updates at the same time.
export function AddButton({ sku, qty = 1, install = false, label = "Add to cart", className = "" }) {
  const [addedSku, setAddedSku] = useState(null);
  const timer = useRef(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const added = addedSku === sku;

  function add() {
    addToCart(sku, qty, install);
    setAddedSku(sku);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAddedSku(null), 2000);
  }

  return (
    <>
      <button type="button" className={`${styles.btn} ${added ? styles.btnDone : ""} ${className}`} onClick={add}>
        <i className={`ph-bold ${added ? "ph-check" : "ph-shopping-cart-simple"}`} aria-hidden="true"></i>
        {added ? "Added to cart" : label}
      </button>
      <span className="visually-hidden" aria-live="polite">
        {added ? `${getSku(sku)?.name ?? "Item"} added to your cart` : ""}
      </span>
    </>
  );
}
