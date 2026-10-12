"use client";

import { useId, useState } from "react";
import { CATEGORIES, PRODUCTS, formatAED, installPrice, installSku } from "./catalog";
import { AddButton, SizePicker } from "./Controls";
import styles from "@/components/pages/Shop.module.css";

// Every size offered for a category (the longest size list among its products).
const sizesFor = (category) =>
  PRODUCTS.filter((p) => p.category === category).reduce((all, p) => (p.sizes.length > all.length ? p.sizes : all), []);

// Services section: installation of a unit the customer already owns.
export default function InstallOnlyCard() {
  const id = useId();
  const [category, setCategory] = useState(CATEGORIES[0].key);
  const [size, setSize] = useState(sizesFor(CATEGORIES[0].key)[0].key);
  const sizes = sizesFor(category);

  function chooseCategory(key) {
    setCategory(key);
    if (!sizesFor(key).some((s) => s.key === size)) setSize(sizesFor(key)[0].key);
  }

  return (
    <article className={styles.installCard}>
      <div className={styles.installIntro}>
        <span className={styles.serviceIcon} aria-hidden="true">
          <i className="ph ph-wrench"></i>
        </span>
        <div>
          <h3 className={styles.serviceName}>Installation only</h3>
          <p className={styles.serviceDesc}>Already have the unit? Our team installs it. Buying from us? Add installation to the item in your cart instead.</p>
        </div>
      </div>
      <div className={styles.installPickers}>
        <fieldset className={styles.sizeSet}>
          <legend className={styles.pickerLegend}>Unit type</legend>
          <div className={styles.sizes}>
            {CATEGORIES.map((c) => (
              <label key={c.key} className={styles.size}>
                <input type="radio" name={`${id}-type`} value={c.key} checked={category === c.key} onChange={() => chooseCategory(c.key)} />
                <span>{c.short}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <SizePicker name={`${id}-size`} sizes={sizes} value={size} onChange={setSize} />
      </div>
      <div className={styles.installBuy}>
        <p className={styles.servicePrice}>
          {formatAED(installPrice(category, size))}
          <span>per unit + VAT</span>
        </p>
        <AddButton sku={installSku(category, size)} />
      </div>
    </article>
  );
}
