import styles from "@/components/pages/Shop.module.css";

// The template's breadcrumb-area (as on the Quote and Projects pages) without
// the large photo, so products and the cart sit higher on the page.
// trail: [{ label, href }], the last item is the current page.
export default function ShopHero({ title, trail, intro }) {
  return (
    <section className={`breadcrumb-area position-relative z-1 overflow-hidden ${styles.hero}`}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-lg-9"}>
            <h1 className={"breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation"}>{title}</h1>
            <nav aria-label="Breadcrumb">
              <ul className={"d-flex flex-wrap align-items-end justify-content-center tw-gap-2"}>
                {trail.map((item, i) => {
                  const last = i === trail.length - 1;
                  return (
                    <li key={item.label} className={"fw-normal d-inline-flex align-items-center tw-gap-2"}>
                      {last ? (
                        <span className={"text-main-eight-600"} aria-current="page">
                          {item.label}
                        </span>
                      ) : (
                        <>
                          <a href={item.href} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                            {item.label}
                          </a>
                          <span className={"d-inline-flex lh-1"} aria-hidden="true">
                            <i className={"ph-bold ph-caret-right text-heading"}></i>
                          </span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            {intro ? <p className={styles.heroIntro}>{intro}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
