
import PageShell from "@/components/PageShell";
import QuoteForm from "@/components/pages/QuoteForm";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";

// HVAC Works, built on the template's air-conditioning home layout
// (index-5.html). Every section, image, slider, counter and animation hook is
// kept; only the words, links and lists are ASAS content. The pricing section
// now shows the HVAC scope with no prices. Photos are placeholders (see
// design-system/image-manifest/services-a.md).

const SLUG = "hvac";
const service = SERVICES.find((s) => s.slug === SLUG);
const content = SERVICE_CONTENT[SLUG];
const related = SERVICES.filter((s) => s.group === service.group && s.slug !== SLUG).slice(0, 4);
const [statYears, statProjects, statTeam, statApprovals] = COMPANY.stats;
const phone = COMPANY.phones[0];
const approvals = COMPANY.approvals.join(" · ");
const bySn = (list) => list.map((sn) => PROJECTS.find((p) => p.sn === sn)).filter(Boolean);

// Lawyer Office, Red Tomato, Dubai Heights Academy (content.projects) + Bactiguard AB
const PROJECT_SLIDES = bySn([10, 3, 5, 11]);

// ASAS icon library (public/assets/images/icons/asas), one icon per service slug.
const SERVICE_ICON = {
  "fit-out": "fit-out", civil: "civil", joinery: "joinery", electrical: "electrical", plumbing: "plumbing", hvac: "hvac",
  "fire-fighting": "fire-fighting", "low-current": "low-current", "planning-architecture": "planning", "villa-works": "villa", "ev-chargers": "ev-charger",
};

// Team make-up from the Man Power page (23 people in total).
const TEAM_BARS = [
  { label: "Electrical, plumbing & HVAC technicians: 12 of 23", percent: 52 },
  { label: "Engineers and foremen: 4 of 23", percent: 17 },
];

const SCOPE_CARDS = [
  {
    stage: "01",
    title: "Coordination",
    icon: "design-drawing",
    text: "HVAC is planned with the ceiling, lighting and joinery from the start of the fit-out.",
    items: ["Coordination with ceilings, lighting and joinery", "Planned with the electrical and plumbing works", "Part of the MEP design and approvals stage"],
  },
  {
    stage: "02",
    title: "Installation",
    icon: "hvac",
    text: "Our in-house technicians install new systems or adapt the existing ones to the new layout.",
    items: ["Air-conditioning installation", "Ventilation installation", "Modification of existing HVAC systems for new layouts"],
  },
  {
    stage: "03",
    title: "Commissioning",
    icon: "testing",
    text: "Every system is tested and commissioned before the space is handed over.",
    items: ["Testing and commissioning", "Progress reported against the schedule", "Clean, on-schedule handover"],
  },
];

const COMMITMENTS = [
  {
    title: "Quality policy",
    label: "Quality Management System",
    icon: "ph-medal",
    text: "We meet customer requirements through continual improvement of our Quality Management System, working to the contract specifications, standards, statutory regulations and codes of practice.",
  },
  {
    title: "Environment, Health & Safety",
    label: "EHS policy",
    icon: "ph-shield-check",
    text: "We are committed to conserving the environment and providing a safe, healthy workplace. EHS is built into every business decision and we comply with all EHS legal requirements.",
  },
  {
    title: "Authority approvals",
    label: approvals,
    icon: "ph-seal-check",
    text: `ASAS Alenjaz is registered with ${approvals}. HVAC designs and installations are prepared to suit the relevant authority requirements.`,
  },
];

const HIGHLIGHTS = [
  { service: "fit-out", meta: ["Offices, restaurants & retail", COMPANY.areas.join(" · ")], metaIcons: ["ph-buildings", "ph-map-pin"], title: "HVAC as part of a complete interior fit-out" },
  { service: "villa-works", meta: ["Villas & service blocks", "Dubai & Sharjah"], metaIcons: ["ph-house-line", "ph-map-pin"], title: "HVAC for villa extensions, modifications and service blocks" },
  { service: "planning-architecture", meta: ["Design & drawings", "Before work starts"], metaIcons: ["ph-pencil-ruler", "ph-calendar-check"], title: "MEP design coordinated with the layout from day one" },
].map((item) => ({ ...item, href: `/services/${item.service}`, serviceTitle: SERVICES.find((s) => s.slug === item.service).title }));

export default function HvacPage() {
  return (
    <PageShell>
        <section className={"banner-eleven-area bg-img position-relative z-1"} data-background-image={"/assets/images/thumbs/banner-eleven-bg.jpg"}>
          <div className={"container tw-container-1580-px"}>
            <div className={"row"}>
              <div className={"col-xl-7 col-lg-10"}>
                <div className={"banner-eleven-wrapper"}>
                  <div className={"d-flex align-items-center tw-gap-4 tw-mb-8 flex-wrap row-gap-3"}>
                    <div>
                      <div className={"d-flex align-items-center"}>
                        {["ASAS MEP engineer", "ASAS HVAC foreman", "ASAS HVAC technician", "ASAS technician on a fit-out site", "ASAS site helper"].map((alt, i) => (
                          <div key={alt} className={`tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-${i + 1}${i ? " tw--ms-16-px" : ""}${i < 4 ? " z-1" : ""} border border-3 border-white`}>
                            <img src={`/assets/images/thumbs/banner-client-img${i + 1}.png`} alt={alt} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div aria-hidden={"true"}>
                        {COMPANY.approvals.map((name) => (
                          <span key={name} style={{"color":"var(--asas-gold)"}}>
                            <i className={"ph ph-seal-check"}></i>
                          </span>
                        ))}
                      </div>
                      <div>
                        <p className={"mb-0 text-white"}>
                          Approved by {approvals}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className={"d-block fw-semibold text-uppercase tw-mb-3"} style={{"color":"var(--asas-gold)"}}>
                      MEP · {service.title}
                    </span>
                    <h1 className={"banner-eleven-title tw-text-118 text-white tw-mb-5 tw-char-animation"}>
                      {service.title}: air-conditioning and ventilation
                    </h1>
                    <p className={"text-white tw-mb-10 tw-me-6"}>
                      {content.intro[0]}
                    </p>
                  </div>
                  <div className={"d-inline-flex justify-content-center flex-wrap tw-gap-205"}>
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
                    <div>
                      <a href={"/projects"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-white text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              View Our Projects
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
        </section>
        <section className={"about-eleven-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6"}>
                <div className={"about-eleven-thumb position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-eleven-thumb1.jpg"} alt={"ASAS technician installing an air-conditioning unit"} />
                  <div className={"about-eleven-content position-absolute bg-main-eight-600 tw-rounded-xl d-flex tw-gap-705 end-0 bottom-0 tw-mb-15 tw-me-10"}>
                    <div className={"about-eleven-icon"}>
                      <span>
                        <img src={"/assets/images/icons/asas/team-white.svg"} width={"69"} height={"69"} alt={""} />
                      </span>
                    </div>
                    <div className={"about-eleven-counter"}>
                      <h2 className={"about-eleven-counter-title tw-text-15 fw-semibold font-heading text-white mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={String(statTeam.value)}></span>
                        {statTeam.suffix}
                      </h2>
                      <p className={"about-eleven-counter-paragraph text-white tw-text-xl fw-medium"}>
                        {statTeam.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-9"}>
                <div className={"about-eleven-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      {service.title}
                    </span>
                    <h3 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Installation, modification and commissioning
                    </h3>
                    <p>
                      {content.intro[0]}
                    </p>
                  </div>
                  <div>
                    <h4 className={"tw-text-505 fw-medium tw-mb-8"}>
                      For {content.sectors.join(", ").toLowerCase()}
                    </h4>
                    <p className={"tw-mb-8"}>
                      {content.intro[1]}
                    </p>
                  </div>
                  <div className={"tw-mb-8"}>
                    <ul className={"d-flex flex-column"}>
                      {content.scope.map((item) => (
                        <li key={item} className={"d-inline-flex align-items-center tw-gap-3 tw-mb-2 fw-medium"}>
                          <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                            <i className={"ph-bold ph-check-circle"}></i>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={"about-eleven-wrap d-flex align-items-center tw-gap-4"}>
                    <div className={"about-eleven-button"}>
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
                    <div className={"d-flex align-items-center"}>
                      {["ASAS MEP engineer", "ASAS HVAC foreman", "ASAS HVAC technician"].map((alt, i) => (
                        <div key={alt} className={`tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-${i + 1}${i ? " tw--ms-16-px" : ""} z-1 border border-3 border-white`}>
                          <img src={`/assets/images/thumbs/banner-client-img${i + 1}.png`} alt={alt} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <h5 className={"about-eleven-counter-title tw-text-2xl fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={String(statProjects.value)}></span>
                        {statProjects.suffix}
                      </h5>
                      <p className={"about-eleven-counter-paragraph text-heading"}>
                        {statProjects.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"counter-ten-area pb-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-4 col-md-5"}>
                <div className={"counter-ten-content"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h2 className={"tw-text-7 tw-mb-4"}>
                    Ten years of fit-out
                    <br />
                    and MEP works
                  </h2>
                  <div>
                    <a className={"tw-text-lg fw-bold text-heading d-flex tw-gap-2"} href={"/about"}>
                      About ASAS
                      <span className={"fw-semibold"}>
                        <i className={"ph-bold ph-arrow-right"}></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-8 col-lg-8 col-md-7"}>
                <div className={"row"}>
                  {COMPANY.stats.map((stat, i) => (
                    <div key={stat.label} className={"col-xl-3 col-lg-6 col-md-6 col-sm-6"}>
                      <div className={"about-three-counter about-ten-counter"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(300 + i * 100)}>
                        <h2 className={"about-three-counter-title tw-text-122 fw-semibold font-heading text-heading mb-0 lh-1"}>
                          <span className={"font-heading odometer"} data-count={String(stat.value)}></span>
                          {stat.suffix}
                        </h2>
                        <p className={"about-three-counter-paragraph fw-medium"}>
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"service-eleven-area pt-120 position-relative z-1"}>
          <div className={"service-eleven-top"}>
            <div className={"container"}>
              <div className={"row justify-content-center"}>
                <div className={"col-xl-8"}>
                  <div className={"section-eight-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <span className={"section-eight-subtitle text-main-eight-600 text-white fw-medium text-uppercase tw-mb-2"}>
                      Related MEP services
                    </span>
                    <h3 className={"section-eight-title fw-medium tw-mb-6 text-white tw-char-animation"}>
                      HVAC is one of our in-house MEP trades
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"service-eleven-bottom tw-px-20"}>
            <div className={"container-fluid"}>
              <div className={"row"}>
                {related.map((item, i) => (
                  <div key={item.slug} className={"col-xl-3 col-lg-6 col-md-6"}>
                    <div className={"service-ten-wrapper bg-white tw-rounded-xl tw-mb-705 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                      <div className={"service-ten-thumb position-relative z-1 tw-mb-4 overflow-hidden tw-rounded-xl"}>
                        <a className={"d-block"} href={`/services/${item.slug}`} tabIndex={-1} aria-hidden={"true"}>
                          <img className={"tw-rounded-xl tw-transition-4 w-100"} src={`/assets/images/thumbs/service-ten-thumb${i + 1}.jpg`} alt={`ASAS ${item.title.toLowerCase()} on a fit-out project`} />
                        </a>
                        <div className={"service-ten-icon position-absolute top-0 start-0 tw-mt-205 tw-ms-205"}>
                          <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 tw-rounded-xl"}>
                            <img className={"animate__wobble"} src={`/assets/images/icons/asas/${SERVICE_ICON[item.slug]}-white.svg`} width={"49"} height={"49"} alt={""} />
                          </span>
                        </div>
                      </div>
                      <div className={"service-ten-content tw-pb-4"}>
                        <h3 className={"service-ten-title tw-text-505 tw-mb-4"}>
                          <a className={"hover-text-main-eight-600"} href={`/services/${item.slug}`}>
                            {item.title}
                          </a>
                        </h3>
                        <p className={"service-ten-paragraph fw-medium tw-mb-4"}>
                          {SERVICE_CONTENT[item.slug].summary}
                        </p>
                        <div className={"service-ten-list tw-mb-4"}>
                          <ul className={"d-flex flex-column"}>
                            {SERVICE_CONTENT[item.slug].scope.slice(0, 3).map((point) => (
                              <li key={point} className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                                <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                                  <i className={"ph-bold ph-check"}></i>
                                </span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={"service-ten-button"}>
                          <a href={`/services/${item.slug}`} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center w-100 lh-1 fw-semibold bg-transparent border border-1 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"} aria-label={`View ${item.title}`}>
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
          </div>
        </section>
        <section className={"expert-nine-area py-120 expert-eleven-area"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"expert-nine-left tw-me-20"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"row"}>
                    <div className={"col-xl-6 col-lg-6 col-md-6"}>
                      <div className={"expert-nine-counter tw-mb-10 tw-mb-20"}>
                        <h2 className={"expert-nine-title tw-text-19 fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                          <span className={"font-heading odometer"} data-count={String(statProjects.value)}></span>
                          {statProjects.suffix}
                        </h2>
                        <p className={"expert-nine-paragraph"}>
                          Offices, restaurants, retail units, warehouses and villas across {COMPANY.areas.length} emirates.
                        </p>
                        <h3 className={"expert-nine-subtitle tw-text-xl fw-semibold"}>
                          {statProjects.label}
                        </h3>
                      </div>
                    </div>
                    <div className={"col-xl-6 col-lg-6 col-md-6"}>
                      <div className={"expert-nine-counter tw-mb-10 tw-mb-20"}>
                        <h2 className={"expert-nine-title tw-text-19 fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                          <span className={"font-heading odometer"} data-count={String(statApprovals.value)}></span>
                          {statApprovals.suffix}
                        </h2>
                        <p className={"expert-nine-paragraph"}>
                          {approvals}.
                        </p>
                        <h3 className={"expert-nine-subtitle tw-text-xl fw-semibold"}>
                          {statApprovals.label}
                        </h3>
                      </div>
                    </div>
                  </div>
                  {TEAM_BARS.map((bar) => (
                    <div key={bar.label} className={"tw-mb-605"}>
                      <div>
                        <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                          {bar.label}
                        </span>
                      </div>
                      <div className={"expert-nine-progress-container progress-container"} data-percentage={String(bar.percent)}>
                        <div className={"progress active bg-main-eight-600"}></div>
                        <div className={"percentage active bg-main-eight-600"}>
                          0%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"expert-nine-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      Why ASAS
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      HVAC delivered by our own MEP team
                    </h2>
                    <p className={"tw-me-10"}>
                      Our {statTeam.value}-strong in-house team is made up of 2 MEP engineers, 2 foremen, 12 technicians and 7 helpers covering electrical, plumbing and HVAC works. We do not rely on subcontracted labour.
                    </p>
                  </div>
                  <div className={"expert-nine-list d-flex tw-mb-10"}>
                    <ul>
                      <li className={"d-inline-flex align-items-center tw-gap-3 tw-mb-3 text-heading fw-medium"}>
                        <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                          <i className={"ph-bold ph-check-circle"}></i>
                        </span>
                        One contractor for civil, joinery and all MEP trades
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-3 text-heading fw-medium"}>
                        <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                          <i className={"ph-bold ph-check-circle"}></i>
                        </span>
                        Quality system built on specifications, schedules and progress reporting
                      </li>
                    </ul>
                  </div>
                  <div className={"expert-nine-button"}>
                    <a href={"/about"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              About Us
                            </span>
                          </span>
                        </span>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"brand-eight-area pb-120 brand-eleven-area"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xxl-12"}>
                <div className={"brand-eight-slider"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"brand-eight-active swiper-container"}>
                    <div className={"swiper-wrapper"}>
                      {[...COMPANY.approvals, COMPANY.short].map((name, i) => (
                        <div key={name} className={"brand-eight-item swiper-slide"}>
                          <div className={"brand-eight-thumb"}>
                            <img src={`/assets/images/thumbs/brand-eight-thumb${i + 1}.png`} alt={`${name} logo`} />
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
        <section className={"project-three-area pb-120 bg-white"}>
          <div className={"project-three-top"}>
            <div className={"container"}>
              <div className={"row align-items-center justify-content-between"}>
                <div className={"col-xl-7 col-lg-7 col-md-9"}>
                  <div className={"section-eight-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      {content.projectsHeading}
                    </span>
                    <h3 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Offices, restaurants and schools we have fitted out
                    </h3>
                  </div>
                </div>
                <div className={"col-xl-4 col-lg-5"}>
                  <div className={"project-three-top-right text-lg-end "} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <a href={"/projects"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-120 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 tw-h-10 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            All Projects
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"project-three-bottom"}>
            <div className={"container-fluid gx-0"}>
              <div className={"row"}>
                <div className={"col-xl-12"}>
                  <div className={"project-three-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"project-three-active swiper-container"}>
                      <div className={"project-three-swiper-wrapper swiper-wrapper"}>
                        {PROJECT_SLIDES.map((project, i) => (
                          <div key={project.sn} className={"project-three-wrapper bg-white tw-rounded-lg tw-p-5 swiper-slide"}>
                            <div className={"project-three-thumb tw-mb-10"}>
                              <a href={"/projects"} tabIndex={-1} aria-hidden={"true"}>
                                <img className={"tw-rounded-xl"} src={`/assets/images/thumbs/project-three-thumb${i + 1}.jpg`} alt={`${project.name}, ${project.location}`} />
                              </a>
                            </div>
                            <div className={"d-flex justify-content-between align-items-center"}>
                              <div>
                                <div className={"project-three-tag tw-mb-4"}>
                                  <span className={"text-main-eight-600"}>
                                    {project.type} · {project.location}
                                  </span>
                                </div>
                                <div>
                                  <h3 className={"tw-text-7 fw-medium"}>
                                    <a className={"hover-text-main-eight-600"} href={"/projects"}>
                                      {project.name}
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div>
                                <a className={"tw-w-12 tw-h-12 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-lg"} href={"/projects"} aria-label={`See ${project.name} in our projects`}>
                                  <i className={"ph-bold ph-arrow-up-right"}></i>
                                </a>
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
        <div className={"video-area video-eleven-area mb-0"}>
          <div className={"container tw-container-1750-px"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-12"}>
                <div className={"video-bg text-center position-relative"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/video-bg.jpg"} alt={"ASAS HVAC team working on a fit-out site"} />
                  <div className={"video-button position-absolute start-50 translate-middle"}>
                    <a className={"video-btn video-eleven-btn open-popup tw-w-28 tw-h-28 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-white bg-main-eight-600 tw-text-8 position-relative z-1"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""} aria-label={"Play video"}>
                      <i className={"ph-bold ph-play"}></i>
                      <span className={"ripple"}></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"pricing-eleven-area tw-pb-22"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7 col-lg-10"}>
                <div className={"section-eight-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Scope of work
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    What our HVAC works cover
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row gx-0"}>
              {SCOPE_CARDS.map((card, i) => {
                const featured = i === 1;
                const ink = featured ? "text-white" : "text-heading";
                return (
                  <div key={card.title} className={"col-xl-4 col-lg-6 col-lg-6"}>
                    <div className={`pricing-eleven-wrapper ${featured ? "bg-main-eight-600" : "bg"} tw-mb-705 tw-rounded-xl tw-px-10 tw-pt-8 tw-pb-8`} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                      <div className={"d-flex align-items-center justify-content-between tw-mb-8"}>
                        <div>
                          <span>
                            <img src={`/assets/images/icons/asas/${card.icon}${featured ? "-white" : ""}.svg`} width={i === 2 ? "41" : "42"} height={"42"} alt={""} />
                          </span>
                        </div>
                        <div>
                          <h3 className={`tw-text-lg fw-semibold border ${featured ? "border-white text-white" : "border-main-eight-600"} tw-rounded-4xl tw-py-2 tw-px-7`}>
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <div className={"d-flex align-items-end tw-gap-2 tw-mb-2"}>
                        <div className={"d-flex tw-gap-2"}>
                          <div>
                            <span className={`tw-text-7 fw-bold ${ink}`}>
                              Stage
                            </span>
                          </div>
                          <div>
                            <h3 className={`tw-text-17 fw-bold lh-1${featured ? " text-white" : ""}`}>
                              {card.stage}
                            </h3>
                          </div>
                        </div>
                        <h4 className={`tw-text-base tw-mb-2${featured ? " text-white" : ""}`}>
                          of {String(SCOPE_CARDS.length).padStart(2, "0")}
                        </h4>
                      </div>
                      <div className={"tw-mb-8"}>
                        <p className={`fw-medium${featured ? " text-white" : ""}`}>
                          {card.text}
                        </p>
                      </div>
                      <div className={"service-eight-button tw-mb-8"}>
                        <a href={QUOTE_HREF} className={`tw-primary-btn d-inline-flex align-items-center w-100 justify-content-center lh-1 fw-semibold ${featured ? "bg-white" : "bg-transparent"} border border-main-eight-600 text-white tw-rounded-4xl position-relative z-1`}>
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
                      <div>
                        <ul>
                          {card.items.map((item, n) => (
                            <li key={item} className={`d-flex align-items-center tw-gap-2 ${ink}${n < card.items.length - 1 ? " tw-mb-3" : ""}`}>
                              <span>
                                <img src={featured ? "/assets/images/icons/asas/check-white.svg" : "/assets/images/icons/asas/check.svg"} width={"21"} height={"18"} alt={""} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className={"testimonial-three-area testimonial-eleven-area py-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-6"}>
                <div className={"testimonial-three-left d-flex justify-content-between flex-column h-100"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-eight-wrapper tw-mb-14"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      Our commitments
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Quality, safety and 
                            approvals on every job
                    </h2>
                  </div>
                  <div className={"testimonial-three-button-wrap d-flex tw-gap-6"}>
                    <div>
                      <a href={"/about"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              About ASAS
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className={"testimonial-three-google d-flex align-items-center tw-gap-5"}>
                      <div>
                        <span className={"tw-w-15 tw-h-15 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle"} style={{"backgroundColor":"#D3E0F8"}}>
                          <img src={"/assets/images/icons/asas/approved.svg"} width={"30"} height={"30"} alt={""} />
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-base"}>
                          {statApprovals.value}
                        </h3>
                        <p>
                          {statApprovals.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6"}>
                <div className={"testimonial-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"testimonial-three-active swiper-container"}>
                    <div className={"testimonial-swiper-wrapper swiper-wrapper"}>
                      {COMMITMENTS.map((item) => (
                        <div key={item.title} className={"testimonial-wrapper testimonial-three-wrapper bg-white tw-py-9 tw-px-11 tw-rounded-lg swiper-slide"}>
                          <div className={"d-flex align-items-center justify-content-between tw-mb-7"}>
                            <div>
                              <span>
                                <img src={"/assets/images/icons/asas/quote.svg"} width={"50"} height={"36"} alt={""} />
                              </span>
                            </div>
                            <div>
                              <h4 className={"tw-text-lg fw-medium tw-mb-2"}>
                                {item.title}
                              </h4>
                              <div aria-hidden={"true"}>
                                <i className={`tw-text-lg ph-bold ${item.icon} text-main-eight-600`}></i>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className={"tw-mb-6"}>
                              {item.text}
                            </p>
                          </div>
                          <div className={"d-flex justify-content-between align-items-center"}>
                            <div className={"d-flex align-items-center tw-gap-4"}>
                              <div className={"testimonial-three-img"}>
                                <img src={"/assets/images/thumbs/testi-three-img.png"} alt={""} />
                              </div>
                              <div>
                                <h5 className={"tw-text-base"}>
                                  {COMPANY.short}
                                </h5>
                                <p>
                                  {item.label}
                                </p>
                              </div>
                            </div>
                            <div className={"testimonial-three-arrow testimonial-eleven-arrow"}>
                              <button type={"button"} className={"slider-prev"} tabIndex={"0"} aria-label={"Previous slide"}>
                                <i className={"ph-bold ph-arrow-left"}></i>
                              </button>
                              <button type={"button"} className={"slider-next"} tabIndex={"0"} aria-label={"Next slide"}>
                                <i className={"ph-bold ph-arrow-right"}></i>
                              </button>
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
        <section className={"blog-three-area tw-pb-22 @@blogipClass"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7"}>
                <div className={"section-eight-wrapper text-center tw-mb-14"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Where HVAC fits
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    HVAC across our other services
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {HIGHLIGHTS.map((item, i) => (
                <div key={item.title} className={"col-xl-4 col-lg-6"}>
                  <div className={"blog-wrapper blog-three-wrapper blog-eleven-wrapper tw-me-4 tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                    <div className={"blog-three-top"}>
                      <div className={"blog-meta tw-mb-6"}>
                        <ul className={"d-flex align-items-center tw-gap-5 flex-wrap"}>
                          <li className={"d-inline-flex align-items-center tw-gap-2"}>
                            <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                              <i className={`ph ${item.metaIcons[0]}`}></i>
                            </span>
                            {item.meta[0]}
                          </li>
                          <li className={"d-inline-flex align-items-center tw-gap-2"}>
                            <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                              <i className={`ph ${item.metaIcons[1]}`}></i>
                            </span>
                            {item.meta[1]}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className={"tw-text-2xl tw-mb-6"}>
                          <a className={"hover-text-main-eight-600"} href={item.href}>
                            {item.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className={"d-flex align-items-center tw-gap-3 tw-mb-6"}>
                      <div className={"blog-three-img blog-eleven-img"}>
                        <img className={"rounded-circle tw-p-1"} src={"/assets/images/thumbs/blog-three-img.png"} alt={""} />
                      </div>
                      <div>
                        <h4 className={"tw-text-base"}>
                          {item.serviceTitle}
                        </h4>
                        <p>
                          {COMPANY.short}
                        </p>
                      </div>
                    </div>
                    <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl"}>
                      <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={`/assets/images/thumbs/blog-three-thumb${i + 1}.jpg`} alt={item.title} />
                      <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={`/assets/images/thumbs/blog-three-thumb${i + 1}.jpg`} alt={""} />
                      <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={item.href} tabIndex={-1} aria-hidden={"true"}></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={"contact-eleven-area py-120"}>
          <div className={"container"}>
            <div className={"position-relative z-1"}>
              <div className={"row align-items-end"}>
                <div className={"col-xl-6"}>
                  <div className={"contact-two-wrapper contact-three-wrapper bg-white tw-py-15 tw-ps-10 tw-pe-5 tw-rounded-xl position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"section-eight-wrapper tw-mb-14"}>
                      <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                        Request a quote
                      </span>
                      <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                        Tell us about your HVAC works
                      </h2>
                    </div>
                    <div>
                      <QuoteForm idPrefix={"hvac-quote"} />
                    </div>
                  </div>
                </div>
                <div className={"col-xl-6"}>
                  <div className={"bg-white d-flex align-items-center tw-gap-5 tw-py-3 tw-rounded-4xl tw-ps-3 tw-pe-15 tw-mb-11 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div>
                      <a className={"tw-w-15 tw-h-15 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-2xl"} href={`tel:${phone.tel}`} aria-label={`Call ${phone.label}`}>
                        <i className={"ph ph-phone-call"}></i>
                      </a>
                    </div>
                    <div>
                      <a className={"text-heading hover-text-main-eight-600"} href={`tel:${phone.tel}`}>
                        Prefer to talk? Call our engineers on {phone.label} or email {COMPANY.email}.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"contact-three-thumb position-absolute end-0 top-0 z-n1 h-100"}>
                <img className={"object-fit-cover h-100 tw-rounded-xl"} src={"/assets/images/thumbs/contact-three-thumb.jpg"} alt={"ASAS engineer reviewing HVAC drawings with a client"} />
              </div>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
