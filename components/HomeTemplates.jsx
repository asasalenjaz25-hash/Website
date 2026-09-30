import Link from "next/link";
import SERVICE_PAGES from "./service-pages.json";

// Every trade the theme ships a full page for, each at /services/<slug>.
// Shared with the header's Services dropdown (scripts/nav-services.mjs).
export const HOME_TEMPLATES = SERVICE_PAGES;

function PreviewButton({ href }) {
  return (
    <Link
      href={href}
      className="tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"
    >
      <span className="btn_inner position-relative z-1 w-100 text-center">
        <span className="btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg">
          <span className="overflow-hidden position-relative d-inline-flex">
            <i className="ph-bold ph-arrow-right" />
            <i className="ph-bold ph-arrow-right" />
          </span>
        </span>
        <span className="btn_text d-inline-flex overflow-hidden text-white">
          <span className="d-flex align-items-center tw-transition-5 text-capitalize">
            View Service
          </span>
        </span>
      </span>
    </Link>
  );
}

/** Service gallery, rendered with the theme's own mega-menu card styles. */
export default function HomeTemplates() {
  return (
    <section className="home-templates-section position-relative z-1 py-120">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-heading__title tw-char-animation">
            Our Services
          </h2>
          <p className="section-heading__desc">
            Explore our full range of services — every trade we cover.
          </p>
        </div>

        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 tw-mt-8">
          {HOME_TEMPLATES.map((tpl, i) => (
            <div
              className="col"
              key={tpl.href}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + (i % 4) * 100}
            >
              <div className="mega-menu-item group-item">
                <div className="position-relative border border-neutral-200 tw-rounded-lg overflow-hidden">
                  <Link href={tpl.href} className="d-block">
                    <img
                      src={tpl.img}
                      alt={`${tpl.title} preview`}
                      className="tw-h-320-px w-100 object-fit-cover object-top"
                    />
                  </Link>
                  <div className="d-lg-flex d-none">
                    <div className="mega-menu-item__overlay position-absolute top-0 tw-start-0 w-100 h-100 d-flex justify-content-center align-items-center tw-invisible opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-scale-08 group-hover-item-scale-1 tw-rounded-lg pointer-event-none" />
                    <div className="mega-menu-item__buttons position-absolute top-0 tw-start-0 w-100 h-100 d-flex justify-content-center align-items-center flex-column tw-gap-4 tw-invisible opacity-0 group-hover-item-visible group-hover-item-opacity-1">
                      <PreviewButton href={tpl.href} />
                    </div>
                  </div>
                </div>
                <div className="tw-mt-4 text-center">
                  <Link
                    href={tpl.href}
                    className="text-heading hover-text-main-eight-600 fw-semibold tw-text-md text-capitalize line-clamp-1"
                  >
                    {tpl.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
