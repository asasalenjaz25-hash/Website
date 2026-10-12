
import PageShell from "@/components/PageShell";
import TextRing from "@/components/TextRing";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";
import ServiceExtras from "@/components/details/ServiceExtras";

// Plumbing Works, built on the template's plumbing home layout (index.html).
// Every section, image, slider and animation hook is kept; only the words,
// links and lists are ASAS content. Photos are placeholders (see
// design-system/image-manifest/services-a.md).

const SLUG = "plumbing";
const service = SERVICES.find((s) => s.slug === SLUG);
const content = SERVICE_CONTENT[SLUG];
const related = SERVICES.filter((s) => s.group === service.group && s.slug !== SLUG).slice(0, 3);
const [statYears, statProjects, statTeam, statApprovals] = COMPANY.stats;
const phone = COMPANY.phones[0];
const approvals = COMPANY.approvals.join(" · ");
const bySn = (list) => list.map((sn) => PROJECTS.find((p) => p.sn === sn)).filter(Boolean);

// Aramex (HDPE), Jeeves Index Tower, Jeeves Damac Upper Crest, Red Tomato
const PROJECT_SLIDES = bySn([17, 52, 54, 3]);

// ASAS icon library (public/assets/images/icons/asas), one icon per service slug.
const SERVICE_ICON = {
  "fit-out": "fit-out", civil: "civil", joinery: "joinery", electrical: "electrical", plumbing: "plumbing", hvac: "hvac",
  "fire-fighting": "fire-fighting", "low-current": "low-current", "planning-architecture": "planning", "villa-works": "villa", "ev-chargers": "ev-charger",
};

const FEATURES = [
  { title: "Water supply", text: "Water supply installation for kitchens, washrooms, laundries, commercial units and villas.", icon: "plumbing" },
  { title: "Drainage", text: "Drainage installation for restaurants, laundries, warehouses and homes.", icon: "drainage" },
  { title: "Sanitary works", text: "Sanitary installation for washrooms and kitchens, set out with the rest of the fit-out.", icon: "sanitary" },
  { title: "HDPE pipework", text: "HDPE pipework, including the HDPE works at the Aramex warehouse in DIP.", icon: "pipework" },
];

const EXPERT = [
  // Site visit & planning, Design & approvals, Execution, Handover
  ...PROCESS.map((step, i) => ({ title: `${i + 1}. ${step.title}`, text: step.text, icon: ["inspection", "design-drawing", "hard-hat", "handover"][i] })),
  { title: "Authority-approved", text: `Registered with ${COMPANY.approvals.slice(0, -1).join(", ")} and ${COMPANY.approvals.at(-1)}.`, icon: "approved" },
  { title: "In-house MEP team", text: "2 MEP engineers, 2 foremen, 12 technicians and 7 helpers on our own payroll.", icon: "team" },
];

const COMMITMENTS = [
  {
    text: "We meet customer requirements through continual improvement of our Quality Management System, working to the contract specifications, standards and codes of practice.",
    title: "Quality policy",
    icon: "ph-medal",
  },
  {
    text: "Environment, health and safety are built into every business decision. We comply with all EHS legal requirements and keep a safe, clean working environment.",
    title: "Environment, Health & Safety",
    icon: "ph-shield-check",
  },
  {
    text: `ASAS Alenjaz is registered with ${approvals}, and our plumbing is installed to the authorities' requirements and the project drawings.`,
    title: "Authority approvals",
    icon: "ph-seal-check",
  },
];

const HIGHLIGHTS = [
  { meta: ["Warehouse", "DIP, Dubai"], metaIcons: ["ph-warehouse", "ph-map-pin"], title: "HDPE pipework at the Aramex warehouse", href: "/projects", img: 1 },
  { meta: ["Villas & service blocks", "Dubai & Sharjah"], metaIcons: ["ph-house-line", "ph-map-pin"], title: "Plumbing for villa modifications and service blocks", href: "/services/villa-works", img: 2 },
  { meta: ["Interior fit-out", COMPANY.areas.join(" · ")], metaIcons: ["ph-paint-roller", "ph-map-pin"], title: "Plumbing as part of a complete fit-out", href: "/services/fit-out", img: 3 },
];

export default function PlumbingPage() {
  return (
    <PageShell>
        <section className={"banner-eight-area position-relative z-1"}>
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div>
                  <h1 className={"banner-eight-title fw-medium text-uppercase text-center text-white position-relative"}>
                    {service.title}
                  </h1>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"banner-eight-wrapper d-flex justify-content-between"}>
                  <div className={"tw-w-580-px"}>
                    <div className={"d-flex align-items-center tw-gap-4 tw-mb-8 flex-wrap row-gap-3"}>
                      <div>
                        <div className={"d-flex align-items-center"}>
                          <div className={"tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-1 border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-eight-client-img1.png"} alt={"ASAS MEP engineer on a plumbing site"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                          <div className={"tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2 tw--ms-16-px z-1 border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-eight-client-img2.png"} alt={"ASAS plumbing foreman"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                          <div className={"tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-3 tw--ms-16-px z-1 border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-eight-client-img3.png"} alt={"ASAS plumbing technician"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div aria-hidden={"true"}>
                          {COMPANY.approvals.map((name) => (
                            <span key={name} style={{"color":"#184FB4"}}>
                              <i className={"ph ph-seal-check"}></i>
                            </span>
                          ))}
                        </div>
                        <div>
                          <p className={"mb-0"}>
                            Approved by {approvals}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className={"d-block text-main-eight-600 fw-semibold text-uppercase tw-mb-3"}>
                        MEP · {service.title}
                      </span>
                      <h2 className={"banner-title banner-eight-bottom-title tw-text-166 tw-mb-3 tw-char-animation"}>
                        Water supply, drainage and sanitary works
                      </h2>
                      <p className={"tw-mb-3"}>
                        {content.intro[0]}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className={"text-center tw-mb-17"}>
                      <div className={"banner-circle position-relative lh-1 d-inline-flex justify-content-center align-items-center rounded-circle z-1"}>
                        <div className={"banner-circle-wrap"}>
                          <TextRing className="banner-rotate-content" label="PLUMBING WORKS" />
                          <div className={"banner-circle-button position-absolute top-50 start-50 translate-middle lh-1 d-inline-flex justify-content-center align-items-center rounded-circle"}>
                            <span className={"d-inline-flex align-items-center lh-1 tw-text-8 fw-bold text-main-eight-600"} aria-label={`${statProjects.value}${statProjects.suffix} projects delivered`}>
                              {statProjects.value}{statProjects.suffix}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"banner-eight-wrap d-flex align-items-center tw-gap-5 tw-p-2 tw-rounded-3xl bg-img position-relative z-1"} data-background-image={"/assets/images/shapes/banner-eight-bg.png"}>
                      <div>
                        <img className={"tw-rounded-3xl"} src={"/assets/images/thumbs/banner-eight-thumb.jpg"} alt={"ASAS plumbing installation in a commercial kitchen"} />
                      </div>
                      <div>
                        <div className={"tw-mb-2"}>
                          <img src={"/assets/images/icons/asas/approved.svg"} width={22} height={22} alt={""} />
                        </div>
                        <div className={"d-flex align-items-center tw-gap-12 tw-mb-3"}>
                          <p className={"tw-text-base fw-semibold text-heading"}>
                            {statApprovals.value} {statApprovals.label.toLowerCase()}
                          </p>
                          <span>
                            <img src={"/assets/images/icons/asas/approved.svg"} width={"20"} height={"20"} alt={""} />
                          </span>
                        </div>
                        <div>
                          <h3 className={"tw-text-lg"}>
                            {approvals}
                          </h3>
                        </div>
                      </div>
                      <div className={"position-absolute top-0 end-0 tw-mt-4 tw-me-6"}>
                        <a href={QUOTE_HREF} aria-label={"Request a quote for plumbing works"}>
                          <img src={"/assets/images/icons/banner-eight-arrow-btn.svg"} alt={""} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"banner-eight-man-thumb position-absolute bottom-0 start-50 translate-middle-x z-n1"} src={"/assets/images/shapes/banner-eight-man.png"} alt={"ASAS plumbing technician in uniform"} />
          </div>
        </section>
        <div className={"tw-px-205 tw-rounded-xl"}>
          <div className={"counter-eight-area bg-img position-relative z-1 tw-rounded-xl"} data-background-image={"/assets/images/thumbs/counter-eight-bg.jpg"}>
            <div className={"container-fluid"}>
              <div className={"row"}>
                <div className={"col-xl-12"}>
                  <div className={"counter-eight-wrapper d-flex justify-content-end tw-gap-605"}>
                    <div className={"counter-eight-content"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <h2 className={"tw-text-7 tw-mb-6"}>
                        A decade of fit-out and MEP work across the UAE
                      </h2>
                      <div className={"blog-six-button"}>
                        <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 hover-text-main-eight-600 tw-text-lg"} href={"/about"}>
                          About ASAS
                          <span className={"d-inline-block lh-1 tw-text-xl"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    {[statYears, statProjects, statTeam].map((stat, i) => (
                      <div key={stat.label} className={"counter-eight-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(300 + i * 100)}>
                        <h3 className={"counter-eight-title tw-text-13 fw-semibold font-heading text-heading mb-0 lh-1"}>
                          <span className={"font-heading odometer"} data-count={String(stat.value)}></span>
                          {stat.suffix}
                        </h3>
                        <p className={"counter-eight-paragraph tw-py-2 tw-text-lg fw-medium bg-white"}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"feature-eight-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row"}>
              {FEATURES.map((item, i) => (
                <div key={item.title} className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"feature-eight-wrapper tw-mb-705 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                    <div className={"feature-eight-icon tw-mb-10"}>
                      <span className={"tw-w-280 tw-h-280 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 tw-rounded-lg"}>
                        <img className={"animate__wobble"} src={`/assets/images/icons/asas/${item.icon}-white.svg`} width={"69"} height={"69"} alt={""} />
                      </span>
                    </div>
                    <div className={"feature-eight-content"}>
                      <h2 className={"feature-eight-title tw-mb-5 tw-text-505"}>
                        {item.title}
                      </h2>
                      <p className={"feature-eight-paragraph tw-me-10"}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={"about-eight-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6 col-lg-10"}>
                <div className={"about-eight-thumb position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-eight-thumb.jpg"} alt={"ASAS technician installing water supply pipework"} />
                  <div className={"about-eight-thumb-count bg-main-eight-600 tw-rounded-2xl position-absolute top-0 end-0 tw-mt-505"}>
                    <div className={"d-flex align-items-center tw-gap-4"}>
                      <h2 className={"tw-text-14 fw-medium font-heading text-white mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={String(statYears.value)}></span>
                        {statYears.suffix}
                      </h2>
                      <p className={"tw-text-base text-white text-uppercase"}>
                        YEARS IN
                        <br />
                        BUSINESS
                      </p>
                    </div>
                  </div>
                  <div className={"about-eight-thumb-review position-absolute bottom-0 start-0 bg-white tw-ms-5 tw-mb-5 tw-rounded-lg"}>
                    <div className={"d-flex align-items-center tw-mb-4"}>
                      <div className={"tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-eight-client-img1.png"} alt={"ASAS MEP engineer"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                      <div className={"tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2 tw--ms-16-px z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-eight-client-img2.png"} alt={"ASAS foreman"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                      <div className={"tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-3 tw--ms-16-px z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-eight-client-img3.png"} alt={"ASAS technician"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                    </div>
                    <div className={"tw-mb-4"}>
                      <img src={"/assets/images/thumbs/about-eight-google.png"} alt={"DEWA approval logo"} />
                    </div>
                    <div className={"d-flex align-items-center tw-gap-2"}>
                      <h3 className={"tw-text-lg"}>
                        {statApprovals.value}
                      </h3>
                      <p>
                        {statApprovals.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-11"}>
                <div className={"about-eight-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      {service.title}
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Plumbing planned with the rest of your fit-out
                    </h2>
                    <p className={"section-eight-paragraph tw-me-10"}>
                      {content.summary}
                    </p>
                  </div>
                  <div className={"about-eight-tab tw-mb-6"}>
                    <ul className={"nav nav-tabs border-0 d-flex tw-gap-9 tw-mb-8"} id={"myTab"} role={"tablist"}>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link tw-text-lg active"} id={"home-tab"} data-bs-toggle={"tab"} data-bs-target={"#home"} type={"button"} role={"tab"} aria-controls={"home"} aria-selected={"true"}>
                          What we install
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link tw-text-lg"} id={"profile-tab"} data-bs-toggle={"tab"} data-bs-target={"#profile"} type={"button"} role={"tab"} aria-controls={"profile"} aria-selected={"false"}>
                          HDPE works
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link tw-text-lg"} id={"contact-tab"} data-bs-toggle={"tab"} data-bs-target={"#contact"} type={"button"} role={"tab"} aria-controls={"contact"} aria-selected={"false"}>
                          Sectors
                        </button>
                      </li>
                    </ul>
                    <div className={"tab-content"} id={"myTabContent"}>
                      <div className={"tab-pane show active"} id={"home"} role={"tabpanel"} aria-labelledby={"home-tab"}>
                        {content.intro[0]}
                      </div>
                      <div className={"tab-pane"} id={"profile"} role={"tabpanel"} aria-labelledby={"profile-tab"}>
                        {content.intro[1]}
                      </div>
                      <div className={"tab-pane"} id={"contact"} role={"tabpanel"} aria-labelledby={"contact-tab"}>
                        We carry out plumbing for {content.sectors.join(", ").toLowerCase()}.
                      </div>
                    </div>
                  </div>
                  <div className={"about-eight-list d-flex tw-mb-10"}>
                    {[content.scope.slice(0, 3), content.scope.slice(3)].map((column, c) => (
                      <ul key={c} className={"w-50"}>
                        {column.map((item) => (
                          <li key={item} className={"d-inline-flex align-items-center tw-gap-3 tw-mb-2 fw-medium"}>
                            <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                              <i className={"ph-bold ph-check-circle"}></i>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                  <div className={"d-flex tw-gap-3"}>
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
                    <div className={"header-call-item d-flex align-items-center tw-gap-2"}>
                      <div className={"header-call-icon"}>
                        <a className={"tw-w-133 tw-h-133 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 text-white tw-text-3xl rounded-circle hover-bg-main-eight-600 hover-text-white"} href={`tel:${phone.tel}`} aria-label={`Call ${phone.label}`}>
                          <i className={"ph ph-phone-call"}></i>
                        </a>
                      </div>
                      <div className={"header-call-number ml-20"}>
                        <h3 className={"tw-text-sm fw-medium tw-mb-1"} style={{"color":"#5c6672"}}>
                          Talk to our engineers
                        </h3>
                        <a className={"tw-text-lg fw-semibold text-heading hover-text-main-eight-600"} href={`tel:${phone.tel}`}>
                          {phone.label}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"brand-eight-area pb-120 @@brandeightClass"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xxl-12"}>
                <div className={"brand-eight-slider"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"brand-eight-active swiper-container"}>
                    <div className={"swiper-wrapper"}>
                      {[...COMPANY.approvals, COMPANY.short].map((name, i) => (
                        <div key={name} className={"brand-eight-item swiper-slide"}>
                          <div className={"brand-eight-thumb"}>
                            <span className="asas-wordmark">{name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"service-eight-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between"}>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"section-eight-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Related MEP services
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    One in-house team for every MEP trade
                  </h2>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-6"}>
                <div className={"service-eight-top-paragraph tw-ms-20"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <p>
                    Plumbing is one of the MEP disciplines our own engineers, foremen and technicians deliver, so it is coordinated with the electrical, HVAC, fire fighting and low current works on the same project.
                  </p>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {related.map((item, i) => (
                <div key={item.slug} className={"col-xl-4 col-lg-6 col-md-6"}>
                  <div className={"service-eight-wrapper bg-white tw-p-205 tw-mb-705 tw-rounded-xl animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                    <div className={"service-eight-thumb tw-rounded-xl tw-mb-6 position-relative z-1 overflow-hidden"}>
                      <a className={"tw-rounded-xl d-block"} href={`/services/${item.slug}`} tabIndex={-1} aria-hidden={"true"}>
                        <img className={"tw-rounded-xl tw-transition-4 w-100"} src={`/assets/images/thumbs/service-eight-thumb${i + 1}.jpg`} alt={`ASAS ${item.title.toLowerCase()} on a fit-out project`} />
                      </a>
                      <div className={"service-eight-icon position-absolute end-0 bottom-0 tw-mb-4 tw-me-4"}>
                        <span className={"tw-w-23 tw-h-23 lh-1 d-inline-flex justify-content-center align-items-center bg-white tw-rounded-xl tw-transition-3"}>
                          <img className={"animate__wobble tw-transition-3"} src={`/assets/images/icons/asas/${SERVICE_ICON[item.slug]}.svg`} width={"68"} height={"68"} alt={""} />
                        </span>
                      </div>
                    </div>
                    <div className={"service-eight-content tw-px-6 tw-pb-6"}>
                      <h3 className={"service-eight-title tw-mb-4 tw-text-505"}>
                        <a className={"hover-text-main-eight-600"} href={`/services/${item.slug}`}>
                          {item.title}
                        </a>
                      </h3>
                      <p className={"tw-mb-6"}>
                        {SERVICE_CONTENT[item.slug].summary}
                      </p>
                      <div className={"service-eight-button"}>
                        <a href={`/services/${item.slug}`} aria-label={`View ${item.title}`} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                          <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                            <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                              <span className={"overflow-hidden position-relative d-inline-flex"}>
                                <i className={"ph-bold ph-arrow-right"}></i>
                                <i className={"ph-bold ph-arrow-right"}></i>
                              </span>
                            </span>
                            <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                              <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                View Service
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={"expert-eight-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-4 col-lg-6"}>
                <div className={"tw-mt-25"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  {EXPERT.slice(0, 3).map((item, i) => (
                    <div key={item.title} className={"expert-item d-flex tw-gap-4 tw-mb-10 animation-item"}>
                      <div>
                        <span className={"tw-w-122 tw-h-122 animate__wobble"}>
                          <img src={`/assets/images/icons/asas/${item.icon}-white.svg`} width={"49"} height={"49"} alt={""} />
                        </span>
                      </div>
                      <div className={"tw-mt-4"}>
                        <h2 className={"tw-text-xl tw-mb-3 text-white"}>
                          {item.title}
                        </h2>
                        <p className={"expert-eight-paragraph"}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6"}>
                <div className={"expert-thumb expert-eight-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <img src={"/assets/images/thumbs/expert-eight-thumb.png"} alt={"ASAS plumbing technician with tools"} />
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6"}>
                <div className={"expert-right expert-eight-right tw-ms-16 tw-mt-25"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  {EXPERT.slice(3).map((item, i) => (
                    <div key={item.title} className={"expert-item d-flex tw-gap-4 tw-mb-10 animation-item"}>
                      <div>
                        <span className={"tw-w-122 tw-h-122"}>
                          <img className={"animate__wobble"} src={`/assets/images/icons/asas/${item.icon}-white.svg`} width={"49"} height={"49"} alt={""} />
                        </span>
                      </div>
                      <div className={"tw-mt-4"}>
                        <h2 className={"tw-text-xl tw-mb-3 text-white"}>
                          {item.title}
                        </h2>
                        <p className={"expert-eight-paragraph"}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"tw-px-205"}>
          <div className={"video-eight-area bg-img"} data-background-image={"/assets/images/thumbs/video-eight-bg.jpg"}>
            <div className={"container"}>
              <div className={"row align-items-center justify-content-center"}>
                <div className={"col-xl-12"}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"portfolio-eight-area py-120"}>
          <div className={"portfolio-eight-top"}>
            <div className={"container"}>
              <div className={"row justify-content-center"}>
                <div className={"col-xl-7"}>
                  <div className={"section-eight-wrapper text-center tw-mb-10"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      {content.projectsHeading}
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Plumbing on real projects across Dubai
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"project-eight-bottom"}>
            <div className={"container-fluid gx-0"}>
              <div className={"row gx-0"}>
                <div className={"col-xl-12"}>
                  <div className={"project-eight-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"project-eight-active swiper-container"}>
                      <div className={"project-eight-swiper-wrapper swiper-wrapper"}>
                        {PROJECT_SLIDES.map((project, i) => (
                          <div key={project.sn} className={"project-eight-wrapper swiper-slide"}>
                            <div className={"project-eight-thumb position-relative z-1"}>
                              <a href={"/projects"} tabIndex={-1} aria-hidden={"true"}>
                                <img className={"tw-rounded-2xl"} src={`/assets/images/thumbs/project-eight-thumb${i + 1}.jpg`} alt={`${project.name}, ${project.location}`} />
                              </a>
                              <div className={"project-eight-content bg-white position-absolute bottom-0 start-0 tw-ms-5 tw-mb-5 tw-rounded-2xl"}>
                                <span className={"text-main-eight-600 tw-mb-2"}>
                                  {project.type} · {project.location}
                                </span>
                                <h3 className={"tw-text-505"}>
                                  <a className={"hover-text-main-eight-600"} href={"/projects"}>
                                    {project.name}
                                  </a>
                                </h3>
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
          </div>
        </section>
        <section className={"testimonial-eight-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row justify-content-end"}>
              <div className={"col-xl-8"}>
                <div className={"section-eight-wrapper tw-mb-10 tw-me-20"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Our commitments
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    How we run every plumbing job
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row align-items-end"}>
              <div className={"col-xl-4 col-lg-4"}>
                <div className={"row"}>
                  <div className={"col-xl-12"}>
                    <div className={"new-testimonial-image"}>
                      <img src={"/assets/images/testimonial-image.png"} alt={"ASAS site engineer checking plumbing against the drawings"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-8 col-lg-12"}>
                <div className={"row mb-40"}>
                  <div className={"col-xl-12"}>
                    <div className={"testimonial-eight-slider-section"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      <div className={"testimonial-eight-active"}>
                        <div className={"swiper testi-slider1 fix"}>
                          <div className={"swiper-wrapper"}>
                            {COMMITMENTS.map((item) => (
                              <div key={item.title} className={"swiper-slide"}>
                                <div className={"testimonial-wrapper testimonial-three-wrapper bg-white tw-py-9 tw-px-11 tw-rounded-lg border-0"}>
                                  <div className={"tw-mb-6"} aria-hidden={"true"}>
                                    <i className={`tw-text-lg ph-bold ${item.icon} text-main-eight-600`}></i>
                                  </div>
                                  <div>
                                    <p className={"testimonial-eight-paragraph tw-text-605 tw-mb-6 fw-medium text-heading"}>
                                      {item.text}
                                    </p>
                                  </div>
                                  <div className={"d-flex justify-content-between align-items-center"}>
                                    <div className={"d-flex align-items-center tw-gap-4"}>
                                      <div className={"testimonial-three-img testimonial-eight-clints-img tw-w-15 tw-h-15"}>
                                        <img className={"w-100 h-100"} src={"/assets/images/thumbs/testimonial-eight-thumb1.png"} alt={""} />
                                      </div>
                                      <div>
                                        <h3 className={"tw-text-base"}>
                                          {item.title}
                                        </h3>
                                        <p>
                                          {COMPANY.short}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={"testimonial-three-arrow testimonial-eight-arrow"}>
                          <button type={"button"} className={"testimonial-eight-prev"} aria-label={"Previous commitment"}>
                            <i className={"ph-bold ph-arrow-left"}></i>
                          </button>
                          <button type={"button"} className={"testimonial-eight-next"} aria-label={"Next commitment"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/testimonial-eight-shape.png"} alt={""} />
          </div>
        </section>
        <section className={"blog-eight-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7"}>
                <div className={"section-eight-wrapper text-center tw-mb-10 tw-me-20"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Where our plumbing fits
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    Plumbing across our projects and services
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-6"}>
                <div className={"blog-wrapper blog-eight-right-wrapper tw-rounded-2xl"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"blog-six-content tw-mb-8"}>
                    <div className={"blog-meta tw-mb-6"}>
                      <ul className={"d-flex align-items-center tw-gap-5 flex-wrap"}>
                        <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                          <span className={"text-main-six-600 tw-text-xl"}>
                            <i className={`ph-bold ${HIGHLIGHTS[0].metaIcons[0]}`}></i>
                          </span>
                          {HIGHLIGHTS[0].meta[0]}
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                          <span className={"text-main-six-600 tw-text-xl"}>
                            <i className={`ph-bold ${HIGHLIGHTS[0].metaIcons[1]}`}></i>
                          </span>
                          {HIGHLIGHTS[0].meta[1]}
                        </li>
                      </ul>
                    </div>

                    <div className={"tw-mb-6"}>
                      <h3 className={"blog-six-title blog-eight-title tw-text-805 text-capitalize"}>
                        <a className={"hover-text-main-six-600"} href={HIGHLIGHTS[0].href}>
                          {HIGHLIGHTS[0].title}
                        </a>
                      </h3>
                    </div>
                    <div className={"blog-six-button"}>
                      <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 hover-text-main-six-600 tw-text-lg"} href={HIGHLIGHTS[0].href}>
                        View Projects
                        <span className={"d-inline-block lh-1 tw-text-xl"}>
                          <i className={"ph-bold ph-arrow-right"}></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className={"blog-six-thumb blog-main-thumb position-relative overflow-hidden tw-rounded-2xl"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-eight-thumb1.jpg"} alt={"HDPE pipework at the Aramex warehouse, DIP"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-eight-thumb1.jpg"} alt={""} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={HIGHLIGHTS[0].href} tabIndex={-1} aria-hidden={"true"}></a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6"}>
                <div className={"row"}>
                  <div className={"col-xl-12"}>
                    <div className={"blog-eight-main"}>
                      {HIGHLIGHTS.slice(1).map((item) => (
                        <div key={item.title} className={"blog-eight-item tw-mb-705"}>
                          <div className={"blog-wrapper blog-eight-right-wrapper d-flex align-items-center tw-gap-8  tw-rounded-2xl"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                            <div className={"blog-six-thumb blog-main-thumb position-relative overflow-hidden tw-rounded-2xl"}>
                              <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={`/assets/images/thumbs/blog-eight-thumb${item.img}.jpg`} alt={item.title} />
                              <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={`/assets/images/thumbs/blog-eight-thumb${item.img}.jpg`} alt={""} />
                              <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={item.href} tabIndex={-1} aria-hidden={"true"}></a>
                            </div>
                            <div className={"blog-six-content blog-eight-right-content"}>
                              <div className={"blog-meta tw-mb-6"}>
                                <ul className={"d-flex align-items-center tw-gap-5 flex-wrap"}>
                                  <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                    <span className={"text-main-six-600 tw-text-xl"}>
                                      <i className={`ph-bold ${item.metaIcons[0]}`}></i>
                                    </span>
                                    {item.meta[0]}
                                  </li>
                                  <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                    <span className={"text-main-six-600 tw-text-xl"}>
                                      <i className={`ph-bold ${item.metaIcons[1]}`}></i>
                                    </span>
                                    {item.meta[1]}
                                  </li>
                                </ul>
                              </div>
                              <div className={"tw-mb-8"}>
                                <h4 className={"blog-six-title blog-eight-title tw-text-605"}>
                                  <a className={"hover-text-main-six-600"} href={item.href}>
                                    {item.title}
                                  </a>
                                </h4>
                              </div>
                              <div className={"blog-six-button"}>
                                <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 hover-text-main-six-600 tw-text-lg"} href={item.href} aria-label={`Learn more: ${item.title}`}>
                                  Learn More
                                  <span className={"d-inline-block lh-1 tw-text-xl"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </a>
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
        <ServiceExtras slug="plumbing" />

        <section className={"contact-area contact-eight-area pb-120"}>
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"contact-wrapper bg-main-eight-600 tw-p-10 tw-rounded-2xl"}>
                  <div className={"row align-items-center"}>
                    <div className={"col-xl-4 col-lg-6"}>
                      <div className={"contact-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                        <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/contact-eight-thumb.jpg"} alt={"ASAS engineer meeting a client on site"} />
                      </div>
                    </div>
                    <div className={"col-xl-4 col-lg-6"}>
                      <div className={"bg-white tw-p-10 tw-rounded-2xl pe-0 pb-0 overflow-hidden"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                        <div className={"section-eight-wrapper tw-mb-10"}>
                          <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                            Contact us
                          </span>
                          <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                            Start your plumbing project
                          </h2>
                        </div>
                        <div className={"tw-mb-20 tw-pe-10"}>
                          <span className={"tw-mb-5"}>
                            CONTACT US:
                          </span>
                          <a className={"tw-text-2xl fw-bold text-heading d-block tw-mb-3 hover-text-main-eight-600 text-break"} href={`mailto:${COMPANY.email}`}>
                            {COMPANY.email}
                          </a>
                          {COMPANY.phones.map((p) => (
                            <a key={p.tel} className={"tw-text-2xl fw-bold text-heading d-block tw-mb-3 hover-text-main-eight-600"} href={`tel:${p.tel}`}>
                              {p.label}
                            </a>
                          ))}
                        </div>
                        <div className={"contact-hand text-end z-n1"}>
                          <img src={"/assets/images/shapes/contact-eight-writer.png"} alt={""} />
                        </div>
                      </div>
                    </div>
                    <div className={"col-xl-4 col-lg-9"}>
                      <div className={"contact-form"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                        <h2 className={"text-white tw-text-2xl tw-mb-8 tw-pe-4"}>
                          Request a quote for your plumbing works
                        </h2>
                        <p className={"text-white tw-mb-4"}>
                          Tell us about the space, the drawings and your timeline. We start every job with a site visit and a review of the authority requirements.
                        </p>
                        <p className={"text-white tw-mb-4"}>
                          {COMPANY.address}
                        </p>
                        <div className={"contact-eight-button tw-mt-8"}>
                          <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-white text-heading tw-rounded-4xl position-relative z-1"}>
                            <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                              <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                                <span className={"overflow-hidden position-relative d-inline-flex"}>
                                  <i className={"ph-bold ph-arrow-right"}></i>
                                  <i className={"ph-bold ph-arrow-right"}></i>
                                </span>
                              </span>
                              <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                                <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                  Request a Quote
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
