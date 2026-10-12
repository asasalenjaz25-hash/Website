"use client";

import { formatAED, getSku } from "./catalog";
import { AddButton } from "./Controls";
import styles from "@/components/pages/Shop.module.css";

// Product page: the services and plan that go with this kind of unit.
const PAIRS = {
  split: ["service:split-general-service", "service:split-deep-clean", "plan:apartment"],
  ducted: ["service:ducted-service", "service:duct-cleaning", "plan:villa"],
  solar: ["service:solar-heater-service"],
};

export default function PairsWellWith({ category }) {
  const items = (PAIRS[category] || []).map(getSku).filter(Boolean);
  if (!items.length) return null;
  return (
    <div className={styles.pairs}>
      <h3 className={styles.pairsTitle}>Pairs well with</h3>
      <ul className={styles.pairsList}>
        {items.map((item) => (
          <li key={item.id} className={styles.pairItem}>
            <span className={styles.lineIcon} aria-hidden="true">
              <i className={`ph ${item.icon}`}></i>
            </span>
            <span className={styles.pairInfo}>
              <strong>{item.name}</strong>
              <small>
                {formatAED(item.price)} {item.kind === "plan" ? "per year" : "per unit"} + VAT
              </small>
            </span>
            <AddButton sku={item.id} label="Add" className={styles.pairBtn} />
          </li>
        ))}
      </ul>
    </div>
  );
}
