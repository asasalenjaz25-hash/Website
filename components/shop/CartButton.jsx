"use client";

import { useCart } from "./cart-store";
import styles from "./CartButton.module.css";

// Header cart link with an item count, shown at every screen width.
export default function CartButton() {
  const count = useCart().reduce((n, line) => n + line.qty, 0);
  const label = count ? `Cart, ${count} ${count === 1 ? "item" : "items"}` : "Cart, empty";

  return (
    <a href="/cart" className={styles.cartBtn} aria-label={label}>
      <i className="ph ph-shopping-cart-simple" aria-hidden="true"></i>
      {count > 0 && (
        <span key={count} className={styles.count} aria-hidden="true">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </a>
  );
}
