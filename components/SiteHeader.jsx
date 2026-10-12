import SiteNav from "@/components/SiteNav";
import CartButton from "@/components/shop/CartButton";
import { COMPANY, QUOTE_HREF } from "@/components/site";

// The one site header (top bar + sticky nav), shared by every page.
// Generated pages render <SiteHeader /> in place of their own header markup
// (scripts/site-header.mjs).
export default function SiteHeader() {
  return (
    <>
      <header className="header-top position-relative z-2 d-none d-xxl-block bg-white">
        <div className="container tw-container-1870-px">
          <div className="header-top header-top-two-bg tw-py-3 tw-px-8 bg-main-two-600">
            <div className="d-flex align-items-center justify-content-between">
              <div className="header-top-right d-flex align-items-center tw-gap-6">
                <a className="header-top-two-address d-inline-flex align-items-center tw-gap-2 hover-underline" href={`mailto:${COMPANY.email}`}>
                  <span className="d-inline-block lh-1"><i className="ph ph-envelope" /></span>
                  {COMPANY.email}
                </a>
                {COMPANY.phones.map((p) => (
                  <a key={p.tel} className="header-top-two-address d-inline-flex align-items-center tw-gap-2 hover-underline" href={`tel:${p.tel}`}>
                    <span className="d-inline-block lh-1"><i className="ph ph-phone-call" /></span>
                    {p.label}
                  </a>
                ))}
                <p className="header-top-two-address d-inline-flex align-items-center tw-gap-2">
                  <span className="d-inline-block lh-1"><i className="ph ph-map-pin" /></span>
                  {COMPANY.address}
                </p>
              </div>
              <p className="header-top-two-address d-inline-flex align-items-center tw-gap-2">
                <span className="d-inline-block lh-1"><i className="ph ph-seal-check" /></span>
                Approved by {COMPANY.approvals.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </header>
      <header id="fixed-header" className="header header-two bg-white tw-transition-all tw-z-99 header-ip-area">
        <div className="container tw-container-1870-px">
          <nav className="d-flex align-items-center justify-content-between position-relative">
            <div className="header-left">
              <div className="logo">
                <a href="/" className="link" aria-label={`${COMPANY.short} home`}>
                  <img src="/assets/images/logo/asas-logo.png" alt={COMPANY.name} className="max-w-200-px" />
                </a>
              </div>
            </div>
            <div className="header-menu d-xl-block d-none">
              <SiteNav />
            </div>
            <div className="header-right d-flex align-items-center tw-gap-5">
              <CartButton />
              <div className="header-two-button d-none d-sm-block">
                <a href={QUOTE_HREF} className="tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1">
                  <span className="btn_inner position-relative z-1 w-100 text-center">
                    <span className="btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg">
                      <span className="overflow-hidden position-relative d-inline-flex">
                        <i className="ph-bold ph-arrow-right" />
                        <i className="ph-bold ph-arrow-right" />
                      </span>
                    </span>
                    <span className="btn_text d-inline-flex overflow-hidden text-white">
                      <span className="d-flex align-items-center tw-transition-5 text-capitalize">Request a Quote</span>
                    </span>
                  </span>
                </a>
              </div>
              <button type="button" className="toggle-mobileMenu d-xl-none text-white tw-text-9" aria-label="Open menu">
                <span>
                  <img src="/assets/images/icons/memu-toggole.svg" alt="" />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
