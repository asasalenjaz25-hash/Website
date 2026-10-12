"use client";

import { PLANS, formatAED, resolveLine, totals } from "./catalog";
import { removeFromCart, setInstall, setQty, useCart, useHydrated } from "./cart-store";
import { InstallToggle, QtyStepper } from "./Controls";
import { CheckoutSteps, ContactRail } from "@/components/details/Details";
import HairlineFigure from "@/components/hairline/HairlineFigure";
import PrimaryButton from "./PrimaryButton";
import ProductMedia from "./ProductMedia";
import styles from "@/components/pages/Shop.module.css";

export function LineThumb({ sku }) {
  return sku.product ? (
    <ProductMedia product={sku.product} variant="thumb" />
  ) : (
    <span className={styles.lineIcon} aria-hidden="true">
      <i className={`ph ${sku.icon}`}></i>
    </span>
  );
}

export function SummaryRows({ lines }) {
  const t = totals(lines);
  return (
    <dl className={styles.summaryRows}>
      <div>
        <dt>
          Subtotal ({t.count} {t.count === 1 ? "item" : "items"})
        </dt>
        <dd>{formatAED(t.subtotal)}</dd>
      </div>
      <div>
        <dt>VAT (5%)</dt>
        <dd>{formatAED(t.vat)}</dd>
      </div>
      <div className={styles.summaryTotal}>
        <dt>Total</dt>
        <dd>{formatAED(t.total)}</dd>
      </div>
    </dl>
  );
}

export function EmptyCart() {
  return (
    <div className={styles.empty}>
      <div className={styles.emptyFigure}>
        <HairlineFigure name="brackets" label="Line drawing of empty AC wall brackets with nothing hung on them" showRead={false} />
      </div>
      <h2 className={styles.emptyTitle}>Your cart is empty</h2>
      <p className={styles.emptyText}>Choose an AC or solar water heater (installation can be added in the cart), or book an AC service.</p>
      <PrimaryButton href="/shop">Browse the shop</PrimaryButton>
    </div>
  );
}

function CartLine({ line }) {
  const item = resolveLine(line);
  return (
    <li className={styles.line}>
      <a href={item.href} className={styles.lineMedia} tabIndex={-1} aria-hidden="true">
        <LineThumb sku={item} />
      </a>
      <div className={styles.lineInfo}>
        <a href={item.href} className={styles.lineName}>
          {item.name}
        </a>
        <p className={styles.lineDetail}>
          {item.detail} · {formatAED(item.price)} each
        </p>
        <button type="button" className={styles.removeBtn} onClick={() => removeFromCart(line.sku)}>
          <i className="ph ph-trash" aria-hidden="true"></i>
          Remove<span className="visually-hidden"> {item.name}</span>
        </button>
      </div>
      <div className={styles.lineControls}>
        <QtyStepper value={line.qty} onChange={(q) => setQty(line.sku, q)} label={`Quantity of ${item.name}`} />
        <p className={styles.lineTotal}>{formatAED(item.total)}</p>
      </div>
      {item.installPrice ? (
        <div className={styles.lineInstall}>
          <InstallToggle checked={item.install} onChange={(on) => setInstall(line.sku, on)} price={item.installPrice} qty={item.qty} />
        </div>
      ) : null}
    </li>
  );
}

// Nudge toward a maintenance plan when the cart has ACs but no plan.
function PlanSuggestion({ lines }) {
  const items = lines.map(resolveLine).filter(Boolean);
  const hasAc = items.some((i) => i.kind === "product" && i.product.category !== "solar");
  if (!hasAc || items.some((i) => i.kind === "plan")) return null;
  return (
    <a href="/shop#plans" className={styles.suggest}>
      <i className="ph ph-calendar-check" aria-hidden="true"></i>
      <span>
        <strong>Keep it running:</strong> add a yearly AC maintenance plan from {formatAED(Math.min(...PLANS.map((p) => p.price)))}
      </span>
      <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
    </a>
  );
}

export default function CartView() {
  const hydrated = useHydrated();
  const lines = useCart();

  if (!hydrated) return <p className={styles.loading}>Loading your cart…</p>;
  if (!lines.length) return <EmptyCart />;

  return (
    <div className="row g-4 align-items-start">
      <div className="col-12">
        <CheckoutSteps current={0} />
      </div>
      <div className="col-lg-8">
        <ul className={styles.lines} aria-label="Items in your cart">
          {lines.map((line) => (
            <CartLine key={line.sku} line={line} />
          ))}
        </ul>
        <PlanSuggestion lines={lines} />
        <a href="/shop" className={styles.backLink}>
          <i className="ph-bold ph-arrow-left" aria-hidden="true"></i>
          Continue shopping
        </a>
      </div>
      <div className="col-lg-4">
        <div className={styles.stickyCol}>
          <aside className={styles.summary} aria-labelledby="cart-summary-title">
            <h2 id="cart-summary-title" className={styles.summaryTitle}>
              Order summary
            </h2>
            <SummaryRows lines={lines} />
            <PrimaryButton href="/checkout" className="w-100">
              Proceed to checkout
            </PrimaryButton>
            <p className={styles.summaryNote}>
              <i className="ph ph-lock-simple" aria-hidden="true"></i>
              Secure card payment through Stripe. Our team calls to confirm site details before any installation.
            </p>
          </aside>
          <ContactRail className={styles.helpCard} title="Need help choosing?" text="Ask us about capacity, installation or a whole-home quote." />
        </div>
      </div>
    </div>
  );
}
