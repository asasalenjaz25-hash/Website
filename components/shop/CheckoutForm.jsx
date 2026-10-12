"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/components/site";
import { formatAED, resolveLine, totals } from "./catalog";
import { useCart, useHydrated } from "./cart-store";
import { EMIRATES, EMPTY_CUSTOMER, FIELD_LABELS, cleanCustomer, orderText, validateCustomer } from "./checkout-fields";
import { EmptyCart, LineThumb, SummaryRows } from "./CartView";
import { AFTER_PAYMENT, CheckoutSteps, ContactRail, NextSteps } from "@/components/details/Details";
import PrimaryButton from "./PrimaryButton";
import formStyles from "@/components/pages/QuoteForm.module.css";
import styles from "@/components/pages/Shop.module.css";

const WHATSAPP_NUMBER = COMPANY.phones[0].tel.replace(/\D/g, "");

// Customer details + order summary. With Stripe configured, "Pay" posts the
// cart (SKU ids and quantities only) to /api/checkout and redirects to Stripe
// Checkout. Without it, the order goes to WhatsApp instead, pre-filled.
// Field markup and validation follow QuoteForm.jsx.
export default function CheckoutForm({ paymentsReady }) {
  const hydrated = useHydrated();
  const lines = useCart();
  const [values, setValues] = useState(EMPTY_CUSTOMER);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "submitting" | "error" | "whatsapp" | null
  const [online, setOnline] = useState(paymentsReady);
  const [cancelled, setCancelled] = useState(false);
  const [minDate, setMinDate] = useState(undefined);
  const summaryRef = useRef(null);

  // Set after mount so server and client HTML match.
  useEffect(() => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    const pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`);
    setCancelled(new URLSearchParams(window.location.search).has("cancelled"));
  }, []);

  if (!hydrated) return <p className={styles.loading}>Loading your order…</p>;
  if (!lines.length) return <EmptyCart />;

  const t = totals(lines);
  const id = (name) => `checkout-${name}`;

  const set = (name) => (event) => {
    const value = event.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  function check() {
    const found = validateCustomer(cleanCustomer(values));
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus(null);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return false;
    }
    return true;
  }

  function sendWhatsApp() {
    if (!check()) return;
    const text = orderText(lines, cleanCustomer(values));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setStatus("whatsapp");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!online) return sendWhatsApp();
    if (!check()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines, customer: cleanCustomer(values) }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) {
        window.location.assign(data.url);
        return;
      }
      if (res.status === 503) {
        setOnline(false);
        setStatus(null);
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const errorKeys = Object.keys(errors).filter((k) => errors[k]);
  const describedBy = (name) => (errors[name] ? id(`${name}-error`) : undefined);
  const fieldError = (name) =>
    errors[name] ? (
      <span id={id(`${name}-error`)} className={formStyles.error}>
        {errors[name]}
      </span>
    ) : null;

  const textField = (name, label, { type = "text", required = true, autoComplete, inputMode, placeholder, min, icon } = {}) => (
    <div className={`contact-two-form ${formStyles.field}`}>
      <label htmlFor={id(name)} className="tw-mb-3">
        {label} {required ? <span className={formStyles.req} aria-hidden="true">*</span> : <span className={formStyles.optional}>(optional)</span>}
      </label>
      <div className="position-relative z-1">
        <input
          id={id(name)}
          name={name}
          type={type}
          className={`form-control bg-transparent text-heading tw-py-3 tw-ps-5 ${icon ? "tw-pe-15" : "tw-pe-5"} w-100 tw-rounded-md ${formStyles.input}`}
          value={values[name]}
          onChange={set(name)}
          required={required}
          aria-required={required || undefined}
          aria-invalid={errors[name] ? "true" : undefined}
          aria-describedby={describedBy(name)}
          autoComplete={autoComplete}
          inputMode={inputMode}
          placeholder={placeholder}
          min={min}
        />
        {icon ? (
          <span className={`position-absolute top-50 translate-middle-y end-0 tw-me-4 tw-text-xl ${formStyles.inputIcon}`} aria-hidden="true">
            <i className={`ph ${icon}`}></i>
          </span>
        ) : null}
      </div>
      {fieldError(name)}
    </div>
  );

  const submitting = status === "submitting";

  return (
    <div className="row g-4 align-items-start">
      <div className="col-12">
        <CheckoutSteps current={1} />
      </div>
      <div className="col-lg-7">
        <form className={`${formStyles.form} ${styles.panel}`} onSubmit={handleSubmit} noValidate aria-label="Checkout">
          {cancelled && status === null && (
            <p className={styles.notice} role="status">
              <i className="ph ph-info" aria-hidden="true"></i>
              Payment was cancelled and nothing was charged. Your cart is saved, so you can try again.
            </p>
          )}

          {errorKeys.length > 0 && (
            <div ref={summaryRef} tabIndex={-1} className={formStyles.summary} role="alert">
              <strong>Please check the following:</strong>
              <ul className="mb-0 mt-2 ps-3" style={{ listStyle: "disc" }}>
                {errorKeys.map((k) => (
                  <li key={k}>
                    <a
                      href={`#${id(k)}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(id(k)) || document.querySelector(`input[name="${id(k)}"]`);
                        el?.focus();
                      }}
                    >
                      {FIELD_LABELS[k]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h2 className={styles.formHeading}>Contact details</h2>
          <div className="row">
            <div className="col-md-6">{textField("name", "Your name", { autoComplete: "name", icon: "ph-user" })}</div>
            <div className="col-md-6">{textField("phone", "Phone", { type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "05X XXX XXXX", icon: "ph-phone" })}</div>
            <div className="col-12">{textField("email", "Email", { type: "email", autoComplete: "email", icon: "ph-envelope" })}</div>
          </div>

          <h2 className={styles.formHeading}>Address</h2>
          <fieldset className={formStyles.fieldset} aria-invalid={errors.emirate ? "true" : undefined} aria-describedby={describedBy("emirate")}>
            <legend className={`tw-mb-3 ${formStyles.legend} ${styles.legendSm}`}>
              Emirate <span className={formStyles.req} aria-hidden="true">*</span>
            </legend>
            <div className={formStyles.pills}>
              {EMIRATES.map((option) => (
                <label key={option} className={formStyles.pill}>
                  <input type="radio" name={id("emirate")} value={option} checked={values.emirate === option} onChange={set("emirate")} required />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {fieldError("emirate")}
          </fieldset>
          <div className="row">
            <div className="col-md-6">{textField("area", "Area / community", { autoComplete: "address-level2", placeholder: "e.g. Al Barsha", icon: "ph-map-pin" })}</div>
            <div className="col-md-6">{textField("address", "Building or villa, flat no.", { autoComplete: "street-address", placeholder: "e.g. Villa 14, Street 5" })}</div>
          </div>

          <h2 className={styles.formHeading}>Scheduling</h2>
          <div className="row">
            <div className="col-md-6">{textField("installDate", "Preferred date", { type: "date", required: false, min: minDate })}</div>
          </div>
          <div className={`contact-two-form ${formStyles.field}`}>
            <label htmlFor={id("notes")} className="tw-mb-3">
              Notes <span className={formStyles.optional}>(optional)</span>
            </label>
            <textarea
              id={id("notes")}
              name="notes"
              className={`form-control bg-transparent text-heading tw-py-4 tw-ps-5 tw-pe-5 w-100 tw-rounded-md ${formStyles.input}`}
              value={values.notes}
              onChange={set("notes")}
              maxLength={450}
              placeholder="Access details, where the units go, the best time to call…"
            />
          </div>

          <div className={styles.payActions}>
            {online ? (
              <PrimaryButton type="submit" className="w-100" disabled={submitting} aria-disabled={submitting || undefined}>
                {submitting ? "Opening secure payment…" : `Pay ${formatAED(t.total)} securely`}
              </PrimaryButton>
            ) : (
              <button type="submit" className={`${styles.btn} ${styles.btnWhatsApp} w-100`}>
                <i className="ph ph-whatsapp-logo" aria-hidden="true"></i>
                Send order on WhatsApp
              </button>
            )}
          </div>

          <div aria-live="polite">
            {online && status !== "error" && (
              <p className={formStyles.note}>
                <i className="ph ph-lock-simple" aria-hidden="true"></i> You pay by card on Stripe&rsquo;s secure checkout page. Our team then calls you
                on the number above to confirm site details and your date.
              </p>
            )}
            {!online && status !== "whatsapp" && (
              <p className={formStyles.note}>
                Online card payment isn&rsquo;t switched on yet. This opens a WhatsApp chat with {COMPANY.phones[0].label} with your order filled
                in; our team confirms it with you there.
              </p>
            )}
            {status === "error" && (
              <p className={formStyles.status}>
                We couldn&rsquo;t open the payment page. Please try again, or call{" "}
                <a href={`tel:${COMPANY.phones[0].tel}`}>{COMPANY.phones[0].label}</a>.{" "}
                <button type="button" className={styles.linkBtn} onClick={sendWhatsApp}>
                  Send the order on WhatsApp instead
                </button>
              </p>
            )}
            {status === "whatsapp" && (
              <p className={formStyles.status}>
                WhatsApp should have opened in a new tab with your order. Press send there to place it. If nothing opened, call{" "}
                <a href={`tel:${COMPANY.phones[0].tel}`}>{COMPANY.phones[0].label}</a>.
              </p>
            )}
          </div>
        </form>
      </div>

      <div className="col-lg-5">
        <aside className={styles.summary} aria-labelledby="checkout-summary-title">
          <div className={styles.summaryHead}>
            <h2 id="checkout-summary-title" className={styles.summaryTitle}>
              Your order
            </h2>
            <a href="/cart" className={styles.editLink}>
              Edit cart
            </a>
          </div>
          <ul className={styles.miniLines}>
            {lines.map((line) => {
              const item = resolveLine(line);
              return (
                <li key={line.sku} className={styles.miniLine}>
                  <span className={styles.miniThumb}>
                    <LineThumb sku={item} />
                    <span className={styles.miniQty} aria-label={`Quantity ${line.qty}`}>
                      {line.qty}
                    </span>
                  </span>
                  <span className={styles.miniInfo}>
                    <span className={styles.miniName}>{item.name}</span>
                    <span className={styles.miniDetail}>{item.detail}</span>
                  </span>
                  <span className={styles.miniPrice}>{formatAED(item.total)}</span>
                </li>
              );
            })}
          </ul>
          <SummaryRows lines={lines} />
        </aside>
        <NextSteps className={styles.helpCard} title="After you pay" steps={AFTER_PAYMENT} />
        <ContactRail className={styles.helpCard} title="Questions before you pay?" />
      </div>
    </div>
  );
}
