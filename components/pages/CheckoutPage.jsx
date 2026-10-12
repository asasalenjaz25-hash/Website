import PageShell from "@/components/PageShell";
import CheckoutForm from "@/components/shop/CheckoutForm";
import ShopHero from "@/components/shop/ShopHero";
import styles from "./Shop.module.css";

export default function CheckoutPage({ paymentsReady }) {
  return (
    <PageShell>
      <ShopHero
        title="Checkout"
        trail={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]}
      />
      <section className={styles.pageBody}>
        <div className={"container"}>
          <CheckoutForm paymentsReady={paymentsReady} />
        </div>
      </section>
    </PageShell>
  );
}
