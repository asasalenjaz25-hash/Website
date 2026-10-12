import PageShell from "@/components/PageShell";
import {
  INCLUDED,
  INSTALL_EXTRAS,
  INSTALL_PRICES,
  PRODUCTS,
  categoryOf,
  formatAmount,
} from "@/components/shop/catalog";
import { ContactRail, RelatedProjects } from "@/components/details/Details";
import PairsWellWith from "@/components/shop/PairsWellWith";
import ProductBuyBox from "@/components/shop/ProductBuyBox";
import { ProductCard } from "@/components/shop/ProductGrid";
import ProductMedia from "@/components/shop/ProductMedia";
import styles from "./Shop.module.css";

// /shop/[slug]: photo + buy box, what the product and the optional
// installation include, the product's price table, and related products.
export default function ProductPage({ product }) {
  const category = categoryOf(product.category);
  const included = INCLUDED[product.category];
  const sameCategory = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug);
  const related = sameCategory.length ? sameCategory : PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <PageShell>
      <section className={styles.productSection}>
        <div className={"container"}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/shop#products">{category.label}</a>
              </li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>
          <div className={"row g-5 align-items-start"}>
            <div className={"col-lg-6"}>
              <div className={styles.stickyMedia}>
                <ProductMedia product={product} variant="hero" eager />
              </div>
            </div>
            <div className={"col-lg-6"}>
              <ProductBuyBox product={product} />
            </div>
          </div>
        </div>
      </section>

      <section className={`py-120 ${styles.surface}`} aria-labelledby="included-title">
        <div className={"container"}>
          <h2 id="included-title" className={styles.blockTitle}>
            What&rsquo;s included
          </h2>
          <div className={"row g-4"}>
            <div className={"col-lg-6"}>
              <div className={styles.includedCard}>
                <h3>
                  Product <span>What you receive</span>
                </h3>
                <ul>
                  {included.product.map((item) => (
                    <li key={item}>
                      <i className="ph-bold ph-check" aria-hidden="true"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={"col-lg-6"}>
              <div className={styles.includedCard}>
                <h3>
                  Installation <span>Optional, add it in your cart</span>
                </h3>
                <ul>
                  {included.installation.map((item) => (
                    <li key={item}>
                      <i className="ph-bold ph-check" aria-hidden="true"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.includedNote}>{INSTALL_EXTRAS[product.category]}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.tableWrap} tw-mt-10`} tabIndex={0} role="region" aria-labelledby="product-prices-caption">
            <table className={styles.table}>
              <caption id="product-prices-caption">{product.name}: all prices (AED, excl. VAT)</caption>
              <thead>
                <tr>
                  <th scope="col">Capacity</th>
                  <th scope="col">
                    Product<span className={styles.thSub}>Product only</span>
                  </th>
                  <th scope="col">
                    Installation<span className={styles.thSub}>Optional, per unit</span>
                  </th>
                  <th scope="col">
                    Product + installation<span className={styles.thSub}>Per unit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.sizes.map((s) => (
                  <tr key={s.key}>
                    <th scope="row">{s.label}</th>
                    <td>{formatAmount(s.price)}</td>
                    <td className={styles.tdService}>{formatAmount(INSTALL_PRICES[product.category][s.key])}</td>
                    <td>{formatAmount(s.price + INSTALL_PRICES[product.category][s.key])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <PairsWellWith category={product.category} />

          <div className={"row g-4 tw-mt-6"}>
            <div className={"col-lg-7"}>
              <RelatedProjects title="Where our team has worked" />
            </div>
            <div className={"col-lg-5"}>
              <ContactRail title="Questions about this unit?" text="Ask about capacity, delivery of your order or a whole-home quote." />
            </div>
          </div>
        </div>
      </section>

      <section className={"py-120 bg-white"} aria-labelledby="related-title">
        <div className={"container"}>
          <div className={styles.blockHead}>
            <h2 id="related-title" className={styles.blockTitle}>
              {sameCategory.length ? `More ${category.plural}` : "More from the shop"}
            </h2>
            <a href="/shop" className={styles.textLink}>
              View all products <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <ul className={`row gy-4 ${styles.grid}`}>
            {related.map((p) => (
              <li key={p.slug} className={"col-xl-4 col-md-6"}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
