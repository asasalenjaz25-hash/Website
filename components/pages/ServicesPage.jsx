// Services hub (/services). Rebuilt from the template's service.html
// (components/generated/Page_service_html.jsx) with every section, image and
// class kept: breadcrumb-area, the service-two tabbed service cards, and the
// service gallery that HomeTemplates.jsx renders (copied here so it links to
// the 11 ASAS services). Template photos are placeholders; see
// design-system/image-manifest/services-hub.md.
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import s from "./Services.module.css";
import h from "./ServicesHub.module.css";
import FigureBanner from "@/components/hairline/FigureBanner";
import { ContactRail, NextSteps } from "@/components/details/Details";
import { SERVICE_PHOTOS } from "@/components/service-photos";

const GROUP_LABEL = {
  "Fit-Out": "Fit-out works",
  MEP: "MEP works",
  Specialist: "Specialist services",
};

// Alt text describes the ASAS photo each placeholder should become.
const PHOTO = {
  "fit-out": "Lounge interior fitted out by ASAS Alenjaz",
  civil: "Mezzanine floor and steel staircase built in an ASAS office fit-out",
  joinery: "Custom joinery cabinets with carved relief panels, fitted by ASAS",
  electrical: "Distribution board wired by ASAS",
  plumbing: "Water supply valves and pipework installed by ASAS",
  hvac: "Technicians installing AC outdoor units",
  "fire-fighting": "Sprinkler alarm valve installed by ASAS",
  "low-current": "CCTV monitoring screen installed by ASAS",
  "planning-architecture": "Open-plan office designed and fitted out by ASAS",
  "villa-works": "Villa built by ASAS in Dubai",
  "ev-chargers": "EV charging station at Akoya, installed by ASAS",
};

// Gallery thumbs (from HomeTemplates / service-pages.json), paired with the
// ASAS service each template page was mapped to in content.md §3.3.
// On-brand stand-ins for the template's home-page screenshots (components/service-photos.js).
const GALLERY_IMG = SERVICE_PHOTOS;

// One ASAS icon per service tab (navy variant: the icon tile is Signal Gold).
const TAB_ICONS = {
  "fit-out": "fit-out",
  civil: "civil",
  joinery: "joinery",
  electrical: "electrical",
  plumbing: "plumbing",
  hvac: "hvac",
  "fire-fighting": "fire-fighting",
  "low-current": "low-current",
  "planning-architecture": "planning",
  "villa-works": "villa",
  "ev-chargers": "ev-charger",
};
function listJoin(items) {
  return items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function PreviewButton({ href }) {
  return (
    <Link href={href} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
          <span className={"overflow-hidden position-relative d-inline-flex"}>
            <i className={"ph-bold ph-arrow-right"}></i>
            <i className={"ph-bold ph-arrow-right"}></i>
          </span>
        </span>
        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
            View Service
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function ServicesPage() {
  const projectCount = COMPANY.stats.find((st) => st.label === "Projects delivered");
  return (
    <PageShell>
      <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-8"}>
              <div className={"tw-mb-10"}>
                <h1 className={`breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation ${h.crumbTitle}`}>
                  Our Services
                </h1>
                <ul className={"d-flex align-items-end justify-content-center tw-gap-2 tw-mb-7"}>
                  <li className={"fw-normal"}>
                    <a href={"/"} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                      Home
                    </a>
                  </li>
                  <li aria-hidden={"true"}>
                    <span className={"d-inline-flex lh-1"}>
                      <i className={"ph-bold ph-caret-right text-heading"}></i>
                    </span>
                  </li>
                  <li className={"fw-normal"}>
                    <span className={"text-main-eight-600"} aria-current={"page"}>
                      Services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <FigureBanner
                figure="ceiling"
                label="Exploded line drawing of a ceiling void with every MEP trade in its own layer"
                facts={[
                  { value: SERVICES.length, label: "Services under one contract" },
                  ...["Fit-Out", "MEP", "Specialist"].map((g) => ({
                    value: SERVICES.filter((sv) => sv.group === g).length,
                    label: `${g} ${g === "Specialist" ? "services" : "trades"}`,
                  })),
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={"service-two-area py-120 position-relative z-1 service-ip-area bg-white pt-0"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-4"}>
              <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"tw-mb-7"}>
                  <ul className={"service-two-nav-tabs nav nav-tabs"} id={"myTab"} role={"tablist"}>
                    {SERVICES.map((service, i) => (
                      <li key={service.slug} className={`service-two-nav-item nav-item tw-mb-6 w-100 animation-item ${h.tabItem}`} role={"presentation"}>
                        <button
                          className={`service-two-nav-link nav-link bg-white tw-rounded-xl w-100${i === 0 ? " active" : ""} d-inline-flex justify-content-start align-items-center tw-gap-6 ${h.tabLink}`}
                          id={`${service.slug}-tab`}
                          data-bs-toggle={"tab"}
                          data-bs-target={`#${service.slug}-pane`}
                          type={"button"}
                          role={"tab"}
                          aria-controls={`${service.slug}-pane`}
                          aria-selected={i === 0 ? "true" : "false"}
                        >
                          <span className={"service-two-left-icon"}>
                            <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 tw-rounded-lg"}>
                              <img className={"animate__wobble"} src={`/assets/images/icons/asas/${TAB_ICONS[service.slug]}-navy.svg`} width={40} height={41} alt={""} />
                            </span>
                          </span>
                          <span className={"text-start"}>
                            <span className={"service-two-left-title d-block tw-text-505 fw-semibold text-heading text-capitalize tw-mb-2"}>
                              {service.title}
                            </span>
                            <span className={"service-two-left-paragraph d-block text-body"}>
                              {GROUP_LABEL[service.group]}
                            </span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                          <i className={"ph-bold ph-arrow-right"}></i>
                          <i className={"ph-bold ph-arrow-right"}></i>
                        </span>
                      </span>
                      <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                        <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                          Request a Quote
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className={"col-xl-8 col-lg-10"}>
              <div className={"service-two-wrapper tw-ms-17"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    Fit-out &amp; MEP contractor · Dubai
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-medium tw-char-animation tw-mb-6"}>
                    One contractor for civil, joinery and every MEP trade
                  </h2>
                  <p>
                    Since {COMPANY.founded}, {COMPANY.short} has delivered {projectCount ? `${projectCount.value}${projectCount.suffix}` : ""} projects across {listJoin(COMPANY.areas)}: offices, restaurants, retail units, warehouses and villas. Planning, civil works, joinery and all MEP disciplines are handled by our own engineers, foremen and technicians, so you deal with one team from site visit to handover.
                  </p>
                  <ul className={h.approvals} aria-label={"Approved and registered with"}>
                    {COMPANY.approvals.map((a) => (
                      <li key={a}>
                        <i className={"ph-bold ph-seal-check"} aria-hidden={"true"}></i>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tab-content"} id={"myTabContent"}>
                    {SERVICES.map((service, i) => {
                      const href = `/services/${service.slug}`;
                      return (
                        <div key={service.slug} className={`tab-pane fade${i === 0 ? " show active" : ""}`} id={`${service.slug}-pane`} role={"tabpanel"} aria-labelledby={`${service.slug}-tab`}>
                          <div>
                            <div className={"service-two-thumbs position-relative z-1"}>
                              <img className={`tw-rounded-lg ${h.tabPhoto}`} src={SERVICE_PHOTOS[service.slug]} alt={PHOTO[service.slug]} />
                              <div className={"service-two-content position-absolute"}>
                                <h3 className={"tw-text-122 text-white tw-mb-3"}>
                                  <a href={href}>
                                    {service.title}
                                  </a>
                                </h3>
                                <p className={"text-white tw-mb-6"}>
                                  {SERVICE_CONTENT[service.slug].summary}
                                </p>
                                <div>
                                  <a className={`fw-semibold text-white d-inline-flex align-items-center tw-gap-2 hover-text-main-eight-600 ${h.onDark}`} href={href} aria-label={`View ${service.title}`}>
                                    View Service
                                    <span aria-hidden={"true"}>
                                      <i className={"ph-bold ph-arrow-up-right"}></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={h.fill}>
                  <NextSteps title="How every project runs" />
                  <ContactRail title="Talk to an engineer" text="Tell us about the space and the works you need." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"home-templates-section position-relative z-1 py-120"}>
        <div className={"container"}>
          <div className={"section-heading text-center"}>
            <h2 className={"section-heading__title tw-char-animation"}>
              Explore All 11 Services
            </h2>
            <p className={"section-heading__desc"}>
              Fit-out, MEP and specialist works, each delivered by our in-house team under one contract.
            </p>
          </div>

          <div className={"row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 tw-mt-8"}>
            {SERVICES.map((service, i) => {
              const href = `/services/${service.slug}`;
              return (
                <div className={"col"} key={service.slug} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={100 + (i % 4) * 100}>
                  <div className={"mega-menu-item group-item"}>
                    <div className={"position-relative border border-neutral-200 tw-rounded-lg overflow-hidden"}>
                      <Link href={href} className={"d-block"} tabIndex={-1} aria-hidden={"true"}>
                        <img src={GALLERY_IMG[service.slug]} alt={PHOTO[service.slug]} className={"tw-h-320-px w-100 object-fit-cover object-top"} />
                      </Link>
                      <div className={"d-lg-flex d-none"}>
                        <div className={"mega-menu-item__overlay position-absolute top-0 tw-start-0 w-100 h-100 d-flex justify-content-center align-items-center tw-invisible opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-scale-08 group-hover-item-scale-1 tw-rounded-lg pointer-event-none"} />
                        <div className={"mega-menu-item__buttons position-absolute top-0 tw-start-0 w-100 h-100 d-flex justify-content-center align-items-center flex-column tw-gap-4 tw-invisible opacity-0 group-hover-item-visible group-hover-item-opacity-1"}>
                          <PreviewButton href={href} />
                        </div>
                      </div>
                    </div>
                    <div className={"tw-mt-4 text-center"}>
                      <Link href={href} className={"text-heading hover-text-main-eight-600 fw-semibold tw-text-md text-capitalize line-clamp-1"}>
                        {service.title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// ---------------------------------------------------------------------------
// Legacy helpers. Not used by the hub any more, but still imported by
// components/pages/ServiceDetailPage.jsx, so they stay exported here.
// ---------------------------------------------------------------------------
// Breadcrumb (from breadcrumb-area in Page_service_html.jsx; the cleaning photo is dropped).
export function ServicesBreadcrumb({ title, trail = [] }) {
  return (
    <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-lg-10"}>
            <div>
              <h1 className={`breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation ${s.crumbTitle}`}>
                {title}
              </h1>
              <nav aria-label={"Breadcrumb"}>
                <ol className={`d-flex align-items-end justify-content-center tw-gap-2 mb-0 ps-0 ${s.crumbList}`}>
                  <li className={"fw-normal"}>
                    <a href={"/"} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                      Home
                    </a>
                  </li>
                  {trail.map((item) => (
                    <li key={item.href} className={"d-inline-flex align-items-end tw-gap-2"}>
                      <span className={"d-inline-flex lh-1"} aria-hidden={"true"}>
                        <i className={"ph-bold ph-caret-right text-heading"}></i>
                      </span>
                      <a href={item.href} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className={"d-inline-flex align-items-end tw-gap-2"}>
                    <span className={"d-inline-flex lh-1"} aria-hidden={"true"}>
                      <i className={"ph-bold ph-caret-right text-heading"}></i>
                    </span>
                    <span className={"text-main-eight-600"} aria-current={"page"}>
                      {title}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "How we work" (step cards from service-details-item in Page_service_details_html.jsx).
export function ProcessSection({ className = "py-120" }) {
  return (
    <section className={`work-process-area ${className}`}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-xl-8"}>
            <div className={"section-wrapper text-center tw-mb-12"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
              <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                How we work
              </div>
              <h2 className={`section-title text-heading tw-text-14 fw-medium tw-char-animation tw-mb-6 ${s.sectionTitle}`}>
                Four steps from site visit to handover
              </h2>
              <p>
                Our quality system is built on specifications, time schedules and regular progress reporting, on every project and every trade.
              </p>
            </div>
          </div>
        </div>
        <ol className={"row list-unstyled ps-0 mb-0"}>
          {PROCESS.map((step, i) => (
            <li key={step.title} className={"col-xl-3 col-md-6"}>
              <div className={"service-details-item bg-white tw-py-9 tw-px-505 text-center tw-rounded-xl tw-mb-7 h-100"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                <div className={"service-details-icon tw-mb-6"}>
                  <span className={"tw-w-133 tw-h-133 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 text-white rounded-circle position-relative z-1"} aria-hidden={"true"}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className={"tw-text-6 tw-mb-2"}>
                    <span className={"visually-hidden"}>Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className={`tw-text-sm ${s.stepText}`}>
                    {step.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Closing call to action (cta-two-area layout from Page_about_html.jsx).
export function ServicesCta({ heading, text }) {
  const phone = COMPANY.phones[0];
  return (
    <section className={`cta-two-area position-relative z-1 overflow-hidden ${s.cta}`}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-xl-8"}>
            <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
              <div className={"section-wrapper text-center tw-mb-10"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  Request a quote
                </div>
                <h2 className={`section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6 ${s.sectionTitle}`}>
                  {heading}
                </h2>
                <p className={"fw-medium m-auto"}>
                  {text}
                </p>
              </div>
              <div className={s.ctaButtons}>
                <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-two-600 text-white tw-rounded-4xl position-relative z-1"}>
                  <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                    <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                      <span className={"overflow-hidden position-relative d-inline-flex"}>
                        <i className={"ph-bold ph-arrow-right"}></i>
                        <i className={"ph-bold ph-arrow-right"}></i>
                      </span>
                    </span>
                    <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                      <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                        Request a Quote
                      </span>
                    </span>
                  </span>
                </a>
                <a href={`tel:${phone.tel}`} className={s.ctaCall}>
                  <i className={"ph-bold ph-phone-call"} aria-hidden={"true"}></i>
                  Call {phone.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className={"cta-two-shape-7 position-absolute top-50 translate-middle-y start-0 z-n1"} src={"/assets/images/shapes/cta-two-shape7.png"} alt={""} />
      </div>
    </section>
  );
}

