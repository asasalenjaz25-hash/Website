import PageShell from "@/components/PageShell";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import FigureBanner from "@/components/hairline/FigureBanner";
import { asas } from "@/components/asas-photos";
import { ApprovalsStrip } from "@/components/details/Details";
import QuoteForm from "./QuoteForm";
import styles from "./InfoPages.module.css";

// Built from components/generated/Page_about_html.jsx: every section, image,
// shape, tab, slider, counter and animation hook is the template's own; only the
// words, lists and links are ASAS content (content.md §1.1–1.5, §3.1–3.2).
// Photos are template placeholders; see design-system/image-manifest/info-pages.md.
// The cleaning-themed ones are swapped for on-brand MEP stock already in the
// project (same slot size, cropped with object-fit) until ASAS supplies photos;
// the banner photo is now the Tower figure (components/hairline).

const service = (slug) => SERVICES.find((s) => s.slug === slug);

// service-two tabs: four core services (template tab ids kept for Bootstrap tabs).
const SERVICE_TABS = [
  { slug: "fit-out", tabId: "home", short: "Bare shell to handover", icon: "fit-out-navy.svg", img: asas("fitout-hotel-reception"), alt: "Hotel reception fitted out by ASAS" },
  { slug: "electrical", tabId: "profile", short: "DEWA-compliant installations", icon: "electrical-navy.svg", img: asas("electrical-switchgear"), alt: "Switchgear panel installed by ASAS" },
  { slug: "hvac", tabId: "contact", short: "Installation & commissioning", icon: "hvac-navy.svg", img: "/assets/images/thumbs/banner-three-bg.jpg", alt: "Technicians installing AC outdoor units" },
  { slug: "villa-works", tabId: "house", short: "Extensions & service blocks", icon: "villa-navy.svg", img: asas("villa-arched-entrance"), alt: "Villa built by ASAS in Dubai" },
].map((t) => ({ ...t, title: service(t.slug).title, summary: SERVICE_CONTENT[t.slug].summary }));

const WHY_ASAS = [
  "One contractor for civil, joinery & all MEP trades",
  "Approved by DEWA, DM, Civil Defence & Trakhees",
  "In-house engineers, foremen & technicians",
  "Safety-first sites under our EHS policy",
];

// work-two has three illustrated steps; the fourth PROCESS step (handover) is
// joined to execution so every step keeps its template picture.
const WORK_STEPS = [
  { ...PROCESS[0], icon: "ph-ruler", alt: "ASAS engineer on a site visit reviewing a space" },
  { ...PROCESS[1], icon: "ph-compass-tool", alt: "ASAS engineer preparing MEP drawings for authority approval" },
  {
    title: `${PROCESS[2].title} & ${PROCESS[3].title.toLowerCase()}`,
    text: `${PROCESS[2].text} ${PROCESS[3].text}`,
    icon: "ph-key",
    alt: "ASAS team handing over a finished fit-out",
  },
];

const QUALITY_FOCUS = [
  "Specifications & standards",
  "Time schedule",
  "Progress reporting",
  "Target achievement",
  "Cost saving",
  "Latest technology",
];

const COUNTER_DELAYS = ["200", "300", "300", "400"];

// Capacity from the profile's Man Power page (content.md §1.4).
const TEAM = [
  { role: "MEP Engineers", count: 2, wrapper: "team-four-wrapper team-four-wrapper tw-mb-8 swiper-slide", img: "team-four-thumb1.jpg", alt: "ASAS MEP engineer on site" },
  { role: "Electrical, Plumbing & HVAC Foremen", count: 2, wrapper: "team-four-wrapper tw-mb-8 swiper-slide", img: "team-four-thumb2.jpg", alt: "ASAS foreman coordinating MEP works" },
  { role: "Electrical, Plumbing & HVAC Technicians", count: 12, wrapper: "team-four-wrapper team-four-wrapper tw-mb-8 swiper-slide", img: "team-four-thumb3.jpg", alt: "ASAS technician installing electrical, plumbing or HVAC works" },
  { role: "Electrical, Plumbing & HVAC Helpers", count: 7, wrapper: "team-four-wrapper team-four-wrapper tw-mb-8 swiper-slide", img: "team-four-thumb4.jpg", alt: "ASAS helpers preparing materials on a fit-out site" },
];

// testimonial-two cards, repurposed: quality policy, QMS points and EHS (content.md §1.2).
// No quotes are attributed to people.
const COMMITMENTS = [
  {
    cls: "testimonial-two-item one quotes-slide slideshow__slide--active", index: "6", dark: false,
    title: "Quality policy", icon: "ph-trend-up", label: "Continual improvement",
    text: "We meet customer requirements through continual improvement of our Quality Management System, and sustain organisational excellence through visionary leadership and innovation.",
    img: "testimonial-seven-img1.png", alt: "ASAS engineer checking finished work against the specification",
  },
  {
    cls: "testimonial-two-item two bg-black quotes-slide slideshow__slide--active", index: "3", dark: true,
    title: "Contracts & specifications", icon: "ph-clipboard-text", label: "Quality Management System",
    text: "Our Quality Management System complies with all contractual obligations, specifications and standards on every project.",
    img: "testimonial-seven-img2.png", alt: "ASAS engineer reviewing contract drawings",
  },
  {
    cls: "testimonial-two-item three quotes-slide slideshow__slide--active", index: "2", dark: false,
    title: "Regulations & codes", icon: "ph-seal-check", label: "Quality Management System",
    text: "We comply with all statutory regulations and codes of practice, with approvals from DEWA, Dubai Municipality, Civil Defence and Trakhees.",
    img: "testimonial-seven-img3.png", alt: "ASAS engineer with an authority inspection checklist",
  },
  {
    cls: "testimonial-two-item four quotes-slide slideshow__slide--active", index: "4", dark: false,
    title: "Clean working environment", icon: "ph-hard-hat", label: "Quality Management System",
    text: "We maintain a good, clean working environment on every site, from the first day of works to handover.",
    img: "testimonial-seven-img4.png", alt: "Clean, organised ASAS worksite",
  },
  {
    cls: "testimonial-two-item five bg-main-eight-600 quotes-slide slideshow__slide--active", index: "1", dark: true,
    title: "Environment, health & safety", icon: "ph-shield-check", label: "EHS policy",
    text: "We are committed to conserving the environment and providing a safe, healthy workplace for all employees. EHS is built into every business decision, and we comply with all EHS legal requirements.",
    img: "testimonial-seven-img5.png", alt: "ASAS technician wearing full safety equipment",
  },
  {
    cls: "testimonial-two-item six quotes-slide slideshow__slide--active", index: "5", dark: false,
    title: "Better working methods", icon: "ph-cpu", label: "Quality Management System",
    text: "We continually improve our working methods and adopt new methods, materials and technology to raise productivity.",
    img: "testimonial-seven-img6.png", alt: "ASAS team using modern tools on a fit-out",
  },
];

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a href={href} className={`${className} tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1`.trim()}>
      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
          <span className={"overflow-hidden position-relative d-inline-flex"}>
            <i className={"ph-bold ph-arrow-right"} aria-hidden="true"></i>
            <i className={"ph-bold ph-arrow-right"} aria-hidden="true"></i>
          </span>
        </span>
        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>{children}</span>
        </span>
      </span>
    </a>
  );
}

function CheckItem({ children }) {
  return (
    <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
      <span className={"text-main-eight-600 tw-text-xl"}>
        <i className={"ph ph-check-circle"} aria-hidden="true"></i>
      </span>{" "}
      {children}
    </li>
  );
}

export default function AboutPage() {
  const phone = COMPANY.phones[0];
  return (
    <PageShell>
      {/* breadcrumb-area */}
      <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-8"}>
              <div className={"tw-mb-10"}>
                <h1 className={"breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation"}>
                  About Us
                </h1>
                <nav aria-label="Breadcrumb">
                  <ul className={"d-flex align-items-end justify-content-center tw-gap-2 tw-mb-7"}>
                    <li className={"fw-normal"}>
                      <a href={"/"} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                        Home
                      </a>
                    </li>
                    <li aria-hidden="true">
                      <span className={"d-inline-flex lh-1"}>
                        <i className={"ph-bold ph-caret-right text-heading"}></i>
                      </span>
                    </li>
                    <li className={"fw-normal"}>
                      <span className={"text-main-eight-600"} aria-current="page">
                        About Us
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <FigureBanner
                figure="tower"
                label={`Line drawing of a building frame with one floor for each year since ${COMPANY.founded}`}
                facts={COMPANY.stats.map((s) => ({ value: `${s.value}${s.suffix}`, label: s.label }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* about-two: who we are (content.md §1.1) */}
      <section className={"about-two-area pb-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-between"}>
            <div className={"col-xl-2"}>
              <div className={"section-wrapper tw-mb-6"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  who we are
                </div>
              </div>
            </div>
            <div className={"col-xl-8"}>
              <div className={"tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h2 className={"about-two-title text-invert text-capitalize fw-medium tw-mb-13"}>
                  Established in Dubai in 2016, ASAS Alenjaz is an engineering solutions provider and project specialist in fit-out works.
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-6 col-lg-9 col-md-10"}>
              <div className={"about-two-thumb one"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <img className={`tw-rounded-xl tw-animation-img-left ${styles.swap}`} style={{ maxWidth: 564, aspectRatio: "564 / 482" }} src={asas("fitout-lounge")} alt={"Lounge interior fitted out by ASAS"} />
              </div>
            </div>
            <div className={"col-xl-6 col-lg-12 col-md-12"}>
              <div className={"tw-mb-5"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"row align-items-end"}>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"bg-main-eight-600 tw-rounded-xl tw-mw-56 w-100 tw-px-10 tw-py-13"}>
                      <h2 className={"tw-text-133 fw-medium text-white mb-0 lh-1"}>
                        <span className={"font-heading text-white odometer"} data-count={COMPANY.stats[1].value}></span>
                        {COMPANY.stats[1].suffix}
                      </h2>
                      <p className={"text-white"}>
                        Projects delivered across the UAE
                      </p>
                    </div>
                  </div>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"about-two-thumb two"}>
                      <img className={`tw-rounded-xl tw-animation-img-right ${styles.swap}`} style={{ maxWidth: 312, aspectRatio: "312 / 358" }} src={asas("electrical-panel")} alt={"Distribution board wired by ASAS"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"tw-me-20"}>
                <div className={"tw-mb-6"}>
                  <p>
                    We handle complete fit-outs in-house, from planning and civil works to joinery and every MEP discipline:
                    electrical, HVAC, plumbing, fire fighting and low current systems. Our own engineers, foremen and technicians
                    deliver offices, restaurants, retail units, warehouses and villas in {COMPANY.areas.join(", ").replace(/, ([^,]*)$/, " and $1")}.
                  </p>
                  <p>
                    ASAS is approved by the Dubai Electricity and Water Authority (DEWA), Dubai Municipality, Civil Defence and Trakhees.
                  </p>
                </div>
                <div>
                  <PrimaryButton href={QUOTE_HREF}>Request a Quote</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={"about-two-text-shape"}>
            <h3 className={"tw-text-base"}>
              Fit-Out &amp; MEP Contractor
            </h3>
          </div>
          <img className={"about-two-bg-shape position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/about-two-bg-shape.png"} alt={""} />
        </div>
      </section>

      {/* service-two: core services (tabs) */}
      <section className={"service-two-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-4"}>
              <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"tw-mb-7"}>
                  <ul className={"service-two-nav-tabs nav nav-tabs"} id={"myTab"} role={"tablist"}>
                    {SERVICE_TABS.map((t, i) => (
                      <li key={t.slug} className={"service-two-nav-item nav-item tw-mb-6 w-100 animation-item"} role={"presentation"}>
                        <button className={`service-two-nav-link nav-link bg-white tw-rounded-xl w-100${i === 0 ? " active" : ""} d-inline-flex justify-content-start align-items-center tw-gap-6`} id={`${t.tabId}-tab`} data-bs-toggle={"tab"} data-bs-target={`#${t.tabId}`} type={"button"} role={"tab"} aria-controls={t.tabId} aria-selected={i === 0 ? "true" : "false"}>
                          <span className={"service-two-left-icon"}>
                            <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 tw-rounded-lg"}>
                              <img className={"animate__wobble"} src={`/assets/images/icons/asas/${t.icon}`} width={40} height={41} alt={""} />
                            </span>
                          </span>
                          <span className={"text-start"}>
                            <span className={"service-two-left-title d-block tw-text-505 fw-semibold text-heading text-capitalize tw-mb-2"}>
                              {t.title}
                            </span>
                            <span className={"service-two-left-paragraph d-block text-body"}>
                              {t.short}
                            </span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <PrimaryButton href={"/services"}>All {SERVICES.length} services</PrimaryButton>
                </div>
              </div>
            </div>
            <div className={"col-xl-8 col-lg-10"}>
              <div className={"service-two-wrapper tw-ms-17"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    Services
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-medium tw-char-animation tw-mb-6"}>
                    Every fit-out trade under one contract
                  </h2>
                  <p>
                    Civil works, joinery, electrical, HVAC, plumbing, fire fighting and low current systems, plus planning,
                    architecture, villa modifications and EV charger installation. One programme, one point of contact and one
                    team accountable for the finished space.
                  </p>
                </div>
                <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tab-content"} id={"myTabContent"}>
                    {SERVICE_TABS.map((t, i) => (
                      <div key={t.slug} className={`tab-pane fade${i === 0 ? " show active" : ""}`} id={t.tabId} role={"tabpanel"} aria-labelledby={`${t.tabId}-tab`}>
                        <div>
                          <div className={"service-two-thumbs position-relative z-1"}>
                            <img className={`tw-rounded-lg ${styles.swap}`} style={{ aspectRatio: "809 / 438" }} src={t.img} alt={t.alt} />
                            <div className={"service-two-content position-absolute"}>
                              <h3 className={"tw-text-122 text-white tw-mb-3"}>
                                <a href={`/services/${t.slug}`}>
                                  {t.title}
                                </a>
                              </h3>
                              <p className={"text-white tw-mb-6"}>
                                {t.summary}
                              </p>
                              <div>
                                <a className={`fw-semibold text-white d-inline-flex align-items-center tw-gap-2 hover-text-main-eight-600 ${styles.onDarkLink}`} href={`/services/${t.slug}`} aria-label={`Read more about ${t.title}`}>
                                  Read More
                                  <span>
                                    <i className={"ph-bold ph-arrow-up-right"} aria-hidden="true"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* choose-us-two: vision & mission, why ASAS (content.md §1.2, §3.1) */}
      <section className={"choose-us-two-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-6 col-lg-9"}>
              <div className={"choose-us-two-thumb position-relative z-1 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"choose-us-two-thumb-1 text-end position-relative z-2"}>
                  <img className={styles.swap} style={{ maxWidth: 349, aspectRatio: "349 / 438" }} src={asas("joinery-hieroglyph-cabinets")} alt={"Custom joinery cabinets fitted by ASAS"} />
                </div>
                <div className={"choose-us-two-thumb-2"}>
                  <img className={styles.swap} style={{ maxWidth: 329, aspectRatio: "329 / 501" }} src={asas("salon-arched-mirrors")} alt={"Salon interior fitted out by ASAS"} />
                </div>
                <div>
                  <img className={"choose-us-two-thumb-shape-1 tw-rounded-xl position-absolute z-n1"} src={"/assets/images/asas/vanity-double-sink.webp"} style={{ width: 171, height: 179, objectFit: "cover" }} alt={""} />
                </div>
              </div>
            </div>
            <div className={"col-xl-6 col-lg-10"}>
              <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    vision &amp; mission
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Excellence, Quality And Reliability In Fit-Out Works
                  </h2>
                  <p>
                    <strong className="text-heading">Our vision</strong> is to be the leading company renowned for excellence,
                    quality, performance and reliability in fit-out works in the local market.
                  </p>
                  <p>
                    <strong className="text-heading">Our mission</strong> is to lead the local fit-out market and become our
                    customers&rsquo; preferred choice by delivering excellent quality and value-added projects on time, and to keep
                    innovating with the latest methods, materials and technology to raise productivity.
                  </p>
                </div>
                <div className={"choose-us-two-list tw-mb-43"}>
                  <ul className={styles.clearfix}>
                    {WHY_ASAS.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>
                <div>
                  <PrimaryButton href={"/services"}>Our Services</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"choose-us-two-shape-2 position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/choose-us-two-shape2.png"} alt={""} />
        </div>
      </section>

      {/* work-two: how we work (PROCESS) */}
      <section className={"work-two-area pt-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-9"}>
              <div className={"section-wrapper tw-mb-30"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  how we work
                </div>
                <h2 className={"about-two-title text-invert text-capitalize fw-medium tw-mb-13"}>
                  From the first site visit to a clean, on-schedule handover, every project follows the same process.
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"work-two-wrapper"}>
                {WORK_STEPS.map((step, i) => (
                  <div className={"work-two-item"} key={step.title}>
                    <div className={"work-two-thumb"}>
                      <span className={styles.stepDisc} role="img" aria-label={step.alt}>
                        <i className={`ph ${step.icon}`} aria-hidden="true"></i>
                      </span>
                      <div className={"work-two-icon"}>
                        <span>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className={"work-two-thumb-border"}></div>
                    </div>
                    <div className={"work-two-content text-center"}>
                      <h3 className={"work-two-title tw-text-7 fw-medium tw-mb-3"}>
                        {step.title}
                      </h3>
                      <p className={styles.stepText}>
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* before-after: fit-out / modification transformation + quality focus areas */}
      <section className={"before-after-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row align-items-end tw-mb-14"}>
            <div className={"col-xl-7 col-lg-10"}>
              <div className={"section-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  before &amp; after
                </div>
                <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  From Existing Space To Finished Fit-Out
                </h2>
                <p>
                  Fit-outs and modifications transform a space. Drag the handle to compare a space before and after the works.
                  Every project is managed against the quality focus areas listed here.
                </p>
              </div>
            </div>
            <div className={"col-xl-5 col-lg-8"}>
              <div className={"before-after-list"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <ul className={styles.clearfix}>
                  {QUALITY_FOCUS.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <div className={"before-after-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <img src={"/assets/images/thumbs/before-after-thumb1.jpg"} alt={"Before: space prior to ASAS fit-out or modification works"} />
                <img src={"/assets/images/thumbs/before-after-thumb2.jpg"} alt={"After: the same space after ASAS completed the fit-out"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/before-after-shape1.png"} alt={""} />
        </div>
      </section>

      {/* counter: COMPANY.stats */}
      <section className={"counter-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-12"}>
              <div className={"counter-two-heading text-center tw-mb-12 position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"tw-text-505 font-heading fw-normal bg-white tw-px-8 d-inline-block position-relative z-2"}>
                  Fit-out and MEP works across the UAE since {COMPANY.founded}.
                </div>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"counter-wrapper counter-two-wrapper d-flex align-items-center justify-content-between"}>
                {COMPANY.stats.map((stat, i) => (
                  <div className={"text-center"} key={stat.label} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={COUNTER_DELAYS[i] || "400"}>
                    <div>
                      <h2 className={"counter-title tw-text-23 fw-medium font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={stat.value}></span>
                        {stat.suffix}
                      </h2>
                      <p className={"counter-paragraph tw-py-2 tw-text-505 fw-medium text-heading bg-white"}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ApprovalsStrip className={styles.centerStrip} label="Approved by" />
        </div>
      </section>

      {/* service-four / team-four slider: in-house capacity (content.md §1.4) */}
      <section className={"service-four-area team-four-area pt-120 tw-pb-20 position-relative z-1"}>
        <div className={"service-four-bg bg-img position-absolute top-0 start-0 tw-h-560-px z-n1"} data-background-image={"/assets/images/thumbs/team-four-bg.jpg"}></div>
        <div className={"container"}>
          <div className={"row tw-mb-12 align-items-end justify-content-between"}>
            <div className={"col-xl-6 col-lg-9 col-md-9"}>
              <div className={"section-four-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={`fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink ${styles.goldAccent}`}>
                  our team
                </div>
                <h2 className={"section-four-title text-white tw-text-14 fw-bold tw-char-animation font-rethink"}>
                  A {COMPANY.stats[2].value}-Strong In-House Team
                </h2>
                <p className={`text-white tw-mt-4 mb-0 ${styles.onDarkText}`}>
                  Our own engineers, foremen, technicians and helpers, not subcontracted labour, supported by our own vehicles:
                  one 6-seat and three 4-seat light vehicles and a 14-seat bus.
                </p>
              </div>
            </div>
            <div className={"col-xl-4 col-lg-3 col-md-3"}>
              <div className={"service-four-arrow text-md-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <button className={"slider-prev"} type="button" aria-label={"Previous slide"}>
                  <i className={"ph-bold ph-arrow-left"} aria-hidden="true"></i>
                </button>
                <button className={"slider-next"} type="button" aria-label={"Next slide"}>
                  <i className={"ph-bold ph-arrow-right"} aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xxl-12"}>
              <div className={"team-four-slider position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"team-four-active swiper-container"}>
                  <div className={"swiper-wrapper"}>
                    {TEAM.map((member) => (
                      <div className={member.wrapper} key={member.role}>
                        <div className={"team-four-thumb position-relative z-1 tw-mb-6"}>
                          <div className={"d-block"}>
                            <img className={"tw-rounded-lg w-100"} src={`/assets/images/thumbs/${member.img}`} alt={member.alt} />
                          </div>
                        </div>
                        <div>
                          <h3 className={"team-four-title tw-text-605 fw-bold font-rethink tw-mb-1"}>
                            {member.role}
                          </h3>
                          <p className={"team-four-paragraph"}>
                            {member.count} in-house
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"team-four-shape-1 start-0 bottom-0 position-absolute z-n1"} src={"/assets/images/shapes/team-four-shape1.png"} alt={""} />
          <img className={"team-four-shape-2 end-0 bottom-0 position-absolute z-n1"} src={"/assets/images/shapes/team-four-shape2.png"} alt={""} />
        </div>
      </section>

      {/* testimonial-two, repurposed: quality policy, QMS and EHS commitments */}
      <section className={"testimonial-two-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-8"}>
              <div className={"section-wrapper text-center pb-120"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  quality &amp; safety
                </div>
                <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  Our Commitments On Every Project
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"testimonial-two-wrapper quotes page-width position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
              {COMMITMENTS.map((c) => (
                <div className={c.cls} data-slider-slide-index={c.index} key={c.title}>
                  <div className={"tw-mb-3"}>
                    <i className={`${c.dark ? styles.goldAccent : "text-main-eight-600"} ph ${c.icon} tw-text-2xl`} aria-hidden="true"></i>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={c.dark ? "text-white" : "text-heading"}>
                      {c.text}
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={`/assets/images/thumbs/${c.img}`} alt={c.alt} />
                      </span>
                    </div>
                    <div>
                      <h3 className={`${c.dark ? "text-white " : ""}tw-text-base`}>
                        {c.title}
                      </h3>
                      <p className={c.dark ? "text-white" : undefined}>
                        {c.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img className={"testimonial-two-shape-2 position-absolute start-0 z-n1"} src={"/assets/images/shapes/testimonial-two-shape2.png"} alt={""} />
        </div>
      </section>

      {/* contact-two: quote form */}
      <section className={"contact-two-area py-120"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-6"}>
              <div className={"contact-two-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"tw-mb-6"}>
                  <img className={`tw-rounded-lg w-100 ${styles.swap}`} style={{ aspectRatio: "624 / 457" }} src={asas("office-conference")} alt={"Meeting room fitted out by ASAS"} />
                </div>
                <div className={"contact-two-info bg-white tw-rounded-lg tw-py-5 tw-ps-10 tw-pe-6"}>
                  <div>
                    <h3 className={"tw-text-2xl fw-medium text-main-eight-600 tw-mb-6"}>
                      Authority Approved
                    </h3>
                    <p className={"fw-medium tw-w-320-px"}>
                      Approved by {COMPANY.approvals.slice(0, -1).join(", ")} and {COMPANY.approvals[COMPANY.approvals.length - 1]} for
                      fit-out and MEP works.
                    </p>
                  </div>
                  <div className={"contact-two-info-shape"}>
                    <img src={"/assets/images/icons/asas/approved.svg"} width={182} height={183} alt={""} />
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-6"}>
              <div className={"contact-two-wrapper bg-white tw-py-15 tw-ps-10 tw-pe-5 tw-rounded-lg"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    request a quote
                  </div>
                  <h2 className={"section-title text-heading tw-text-12 fw-semibold tw-char-animation tw-mb-6"}>
                    Tell Us About Your Project
                  </h2>
                  <p className="mb-0">
                    We start every project with a site visit to review the space, your drawings and the authority requirements.
                  </p>
                </div>
                <div>
                  <QuoteForm idPrefix="about-quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta-two */}
      <section className={"cta-two-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-8"}>
              <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-wrapper text-center tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    site visit
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Planning A Fit-Out Or Modification?
                  </h2>
                  <p className={"fw-medium tw-w-680-px m-auto"}>
                    Call <a className="text-heading fw-semibold hover-underline" href={`tel:${phone.tel}`}>{phone.label}</a> or send us
                    your project details. We review the space, drawings and authority requirements before we prepare your quotation.
                  </p>
                </div>
                <div>
                  <PrimaryButton href={QUOTE_HREF}>Request a Quote</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"cta-two-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape1.png"} alt={""} />
          <img className={"cta-two-shape-2 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape2.png"} alt={""} />
          <img className={"cta-two-shape-3 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape3.png"} alt={""} />
          <img className={"cta-two-shape-4 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape4.png"} alt={""} />
          <img className={"cta-two-shape-5 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape5.png"} alt={""} />
          <img className={"cta-two-shape-6 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape6.png"} alt={""} />
          <img className={"cta-two-shape-7 position-absolute top-50 translate-middle-y start-0 z-n1"} src={"/assets/images/shapes/cta-two-shape7.png"} alt={""} />
        </div>
      </section>
    </PageShell>
  );
}
