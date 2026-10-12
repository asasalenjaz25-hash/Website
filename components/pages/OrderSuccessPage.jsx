import PageShell from "@/components/PageShell";
import { COMPANY } from "@/components/site";
import { formatAED } from "@/components/shop/catalog";
import ClearCart from "@/components/shop/ClearCart";
import PrimaryButton from "@/components/shop/PrimaryButton";
import ShopHero from "@/components/shop/ShopHero";
import { getStripe, isStripeSession } from "@/components/shop/stripe-server";
import styles from "./Shop.module.css";

async function loadSession(sessionId) {
  const stripe = getStripe();
  if (!stripe || !isStripeSession(sessionId)) return null;
  try {
    return await stripe.checkout.sessions.retrieve(sessionId, { expand: ["line_items"] });
  } catch {
    return null;
  }
}

// Stripe redirects here after payment. The session is read on the server, so
// the page only says "paid" when Stripe says so.
export default async function OrderSuccessPage({ sessionId }) {
  const session = await loadSession(sessionId);
  const paid = session?.payment_status === "paid";
  const ref = session?.metadata?.order_ref || session?.client_reference_id;
  const phone = COMPANY.phones[0];

  return (
    <PageShell>
      <ShopHero
        title={paid ? "Thank You" : "Order Status"}
        trail={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: paid ? "Order confirmed" : "Order status" }]}
      />
      <section className={styles.pageBody}>
        <div className={"container"}>
          {paid ? (
            <div className={styles.confirm}>
              <ClearCart />
              <span className={styles.confirmIcon} aria-hidden="true">
                <i className="ph-bold ph-check"></i>
              </span>
              <h2 className={styles.confirmTitle}>Payment received</h2>
              <p className={styles.confirmRef}>
                Order <strong>{ref}</strong>
              </p>
              <p className={styles.confirmText}>
                Our team will call you on {session.metadata?.customer_phone || "your phone number"} to confirm the site details and book your date.
                Please keep your order number for any questions.
              </p>

              <ul className={styles.confirmLines}>
                {session.line_items?.data.map((item) => (
                  <li key={item.id}>
                    <span>
                      {item.quantity > 1 ? `${item.quantity} × ` : ""}
                      {item.description}
                    </span>
                    <span>{formatAED(item.amount_total / 100)}</span>
                  </li>
                ))}
                <li className={styles.confirmTotal}>
                  <span>Total paid</span>
                  <span>{formatAED(session.amount_total / 100)}</span>
                </li>
              </ul>

              <div className={styles.confirmActions}>
                <PrimaryButton href="/shop">Back to the shop</PrimaryButton>
                <a href={`tel:${phone.tel}`} className={styles.ctaPhone}>
                  <i className="ph ph-phone-call" aria-hidden="true"></i>
                  {phone.label}
                </a>
              </div>
            </div>
          ) : (
            <div className={styles.confirm}>
              <span className={`${styles.confirmIcon} ${styles.confirmIconMuted}`} aria-hidden="true">
                <i className="ph-bold ph-info"></i>
              </span>
              <h2 className={styles.confirmTitle}>We couldn&rsquo;t confirm a payment</h2>
              <p className={styles.confirmText}>
                {session
                  ? "This payment hasn't completed. Nothing has been charged, and your cart is still saved."
                  : "We couldn't find this order. If you were charged, call us and we'll sort it out straight away."}
              </p>
              <div className={styles.confirmActions}>
                <PrimaryButton href="/checkout">Return to checkout</PrimaryButton>
                <a href={`tel:${phone.tel}`} className={styles.ctaPhone}>
                  <i className="ph ph-phone-call" aria-hidden="true"></i>
                  {phone.label}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
