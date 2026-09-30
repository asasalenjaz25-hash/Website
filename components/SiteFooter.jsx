import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";

const LINK = "text-white hover-text-main-eight-600 d-inline-flex align-items-center tw-gap-2";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: QUOTE_HREF },
];

// The one site footer, shared by every page (scripts/site-chrome.mjs swaps it
// in for each generated page's own footer). Layout: the theme's footer-eight.
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-three-area footer-eight-area position-relative z-1 overflow-hidden pt-0 tw-mx-205 tw-mb-205">
      <div className="container tw-container-1380-px">
        <div className="footer-two-border footer-three-border position-relative z-1 pt-120">
          <div className="row justify-content-between align-items-end tw-pb-14 tw-gap-y-8">
            <div className="col-xl-7 col-lg-7">
              <img src="/assets/images/logo/asas-logo-white.png" alt={COMPANY.name} className="site-footer__logo tw-mb-8" />
              <h2 className="tw-text-14 fw-medium text-white">Planning a fit-out or MEP project?</h2>
            </div>
            <div className="col-xl-4 col-lg-5">
              <p className="site-footer__muted tw-mb-6">
                Tell us about your space and we&apos;ll arrange a site visit and a detailed quotation.
              </p>
              <a href={QUOTE_HREF} className="site-footer__cta">
                Request a Quote <i className="ph-bold ph-arrow-up-right" />
              </a>
            </div>
          </div>

          <div className="row tw-pb-20 tw-gap-y-10">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <h3 className="tw-text-2xl fw-medium text-white tw-mb-6">{COMPANY.short}</h3>
              <p className="site-footer__muted tw-mb-6">
                Fit-out and MEP contractor in Dubai since {COMPANY.founded}. Civil, joinery, electrical, HVAC,
                plumbing, fire fighting and low current works under one contract.
              </p>
              <p className="site-footer__label tw-mb-3">Approved by</p>
              <ul className="d-flex flex-wrap tw-gap-2">
                {COMPANY.approvals.map((a) => (
                  <li key={a} className="site-footer__badge">{a}</li>
                ))}
              </ul>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6">
              <h3 className="tw-text-2xl fw-medium text-white tw-mb-6">Company</h3>
              <ul className="d-flex flex-column tw-gap-4">
                {COMPANY_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href} className={LINK}>{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <h3 className="tw-text-2xl fw-medium text-white tw-mb-6">Services</h3>
              <ul className="d-flex flex-column tw-gap-4">
                {SERVICES.map((s) => (
                  <li key={s.slug}><a href={`/services/${s.slug}`} className={LINK}>{s.title}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <h3 className="tw-text-2xl fw-medium text-white tw-mb-6">Contact</h3>
              <ul className="d-flex flex-column tw-gap-4 site-footer__contact">
                <li>
                  <i className="ph ph-map-pin" />
                  <span>{COMPANY.address}</span>
                </li>
                {COMPANY.phones.map((p) => (
                  <li key={p.tel}>
                    <i className="ph ph-phone-call" />
                    <a href={`tel:${p.tel}`} className={LINK}>{p.label}</a>
                  </li>
                ))}
                <li>
                  <i className="ph ph-envelope" />
                  <a href={`mailto:${COMPANY.email}`} className={LINK}>{COMPANY.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tw-py-6">
          <div className="container container-two">
            <div className="footer-copyright-wrapper footer-three-copyright-wrapper footer-eight-copyright-wrapper d-flex align-items-center justify-content-between tw-gap-4 flex-wrap">
              <p className="text-white text-line-1 fw-normal">
                © {year} {COMPANY.name}. All rights reserved.
              </p>
              <p className="site-footer__muted">{COMPANY.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
