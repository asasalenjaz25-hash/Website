import SiteNav from "@/components/SiteNav";
import { COMPANY, QUOTE_HREF } from "@/components/site";

// Off-canvas menu for screens below 1200px, shared by every page.
// main.js opens it from .toggle-mobileMenu and closes it with .close-button.
export default function SiteMobileMenu() {
  return (
    <div className="mobile-menu d-xl-none d-block scroll-sm position-fixed bg-black tw-w-350-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68">
      <button type="button" aria-label="Close menu" className="close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center text-neutral-900 bg-neutral-200 hover-bg-neutral-900 hover-text-white">
        <i className="ph ph-x" />
      </button>
      <div className="mobile-menu__inner">
        <a href="/" className="mobile-menu__logo" aria-label={`${COMPANY.short} home`}>
          <img src="/assets/images/logo/asas-logo-white.png" alt={COMPANY.name} />
        </a>
        <div className="mobile-menu__menu">
          <SiteNav mobile />
        </div>
        <div className="mobile-menu__contact tw-mt-8 d-flex flex-column tw-gap-3">
          <a href={QUOTE_HREF} className="mobile-menu__quote">Request a Quote</a>
          {COMPANY.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="mobile-menu__line">
              <i className="ph ph-phone-call" /> {p.label}
            </a>
          ))}
          <a href={`mailto:${COMPANY.email}`} className="mobile-menu__line">
            <i className="ph ph-envelope" /> {COMPANY.email}
          </a>
        </div>
      </div>
    </div>
  );
}
