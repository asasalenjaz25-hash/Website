import PageShell from "@/components/PageShell";
import CartView from "@/components/shop/CartView";
import ShopHero from "@/components/shop/ShopHero";
import styles from "./Shop.module.css";

export default function CartPage() {
  return (
    <PageShell>
      <ShopHero title="Your Cart" trail={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Cart" }]} />
      <section className={styles.pageBody}>
        <div className={"container"}>
          <CartView />
        </div>
      </section>
    </PageShell>
  );
}
