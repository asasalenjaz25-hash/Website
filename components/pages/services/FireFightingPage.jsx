
import PageShell from "@/components/PageShell";
import QuoteForm from "@/components/pages/QuoteForm";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";

// Fire Fighting Systems, built on the template's air-conditioning home layout
// (index-7.html). Every section, image, slider, counter and animation hook is
// kept; only the words, links and lists are ASAS content. The product grid is
// now scope cards (no prices, no cart) and the pricing table shows service
// groups (no prices). Photos are placeholders (see
// design-system/image-manifest/services-a.md).

const SLUG = "fire-fighting";
const service = SERVICES.find((s) => s.slug === SLUG);
const content = SERVICE_CONTENT[SLUG];
const related = SERVICES.filter((s) => s.group === service.group && s.slug !== SLUG).slice(0, 3);
const statApprovals = COMPANY.stats[3];
const phone = COMPANY.phones[0];
const approvals = COMPANY.approvals.join(" · ");
const bySn = (list) => list.map((sn) => PROJECTS.find((p) => p.sn === sn)).filter(Boolean);

// Café & Lounge Damac Executive Heights, Al Dana Dental Clinic, Bactiguard AB
// (content.projects) + Atlas Copco
const PROJECT_SLIDES = bySn([103, 101, 11, 9]);

// ASAS icon library (public/assets/images/icons/asas), one icon per service slug.
const SERVICE_ICON = {
  "fit-out": "fit-out", civil: "civil", joinery: "joinery", electrical: "electrical", plumbing: "plumbing", hvac: "hvac",
  "fire-fighting": "fire-fighting", "low-current": "low-current", "planning-architecture": "planning", "villa-works": "villa", "ev-chargers": "ev-charger",
};

const FEATURES = [
  { title: "Fire fighting installation", text: "Installed as part of office, restaurant, retail and healthcare fit-outs.", icon: "fire-fighting" },
  { title: "Modification for new layouts", text: "When a new layout changes a space, we adapt the existing system to suit it.", icon: "tools" },
  { title: "Civil Defence requirements", text: "ASAS Alenjaz is registered with Civil Defence and works to its requirements.", icon: "approved" },
];

const SLIDE_ALTS = [
  "Fire fighting installation in an office fit-out",
  "Fire fighting pipework coordinated above the ceiling",
  "ASAS technician modifying a fire fighting system for a new layout",
  "Fire fighting works in a restaurant fit-out",
  "Fire fighting system tested before handover",
  "Fire fighting pipework coordinated above the ceiling",
];

// Product grid -> scope cards: row 1 is the scope, row 2 is how we work.
const SCOPE_CARDS = [
  { title: "Installation for fit-out projects", label: "Scope", alt: "Fire fighting installation on a fit-out site" },
  { title: "Modification of existing systems for new layouts", label: "Scope", alt: "Existing fire fighting system being modified for a new layout" },
  { title: "Work to Civil Defence requirements", label: "Scope", alt: "Fire fighting installation checked against Civil Defence requirements" },
  { title: "Coordination with ceilings and the other MEP trades", label: "Scope", alt: "Fire fighting pipework coordinated with the ceiling and MEP services" },
  ...PROCESS.map((step, i) => ({
    title: step.title,
    label: `Step ${String(i + 1).padStart(2, "0")}`,
    alt: ["ASAS engineer on a site visit", "MEP drawings prepared for authority submission", "ASAS team installing fire fighting works", "Completed space ready for handover"][i],
  })),
];

const GROUP_PANELS = [
  { id: "monthly", slugs: ["fit-out", "civil", "joinery"] },
  { id: "hourly", slugs: ["planning-architecture", "villa-works", "ev-chargers"], hidden: true },
].map((panel) => ({ ...panel, services: panel.slugs.map((slug) => SERVICES.find((s) => s.slug === slug)) }));

const COMMITMENTS = [
  {
    title: "Civil Defence requirements",
    label: approvals,
    icon: "ph-seal-check",
    text: `ASAS Alenjaz is registered with ${COMPANY.approvals.slice(0, -1).join(", ")} and ${COMPANY.approvals.at(-1)}. Fire fighting installations and modifications are carried out to Civil Defence requirements.`,
  },
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
];

const HIGHLIGHTS = [
  { service: "fit-out", meta: ["Offices, restaurants & retail", COMPANY.areas.join(" · ")], metaIcons: ["ph-buildings", "ph-map-pin"], title: "Fire fighting as part of a complete interior fit-out" },
  { service: "planning-architecture", meta: ["Design & drawings", "Before work starts"], metaIcons: ["ph-pencil-ruler", "ph-calendar-check"], title: "Drawings prepared for authority submission" },
  { service: "low-current", meta: ["MEP", "Fit-out projects"], metaIcons: ["ph-network", "ph-paint-roller"], title: "Low current systems installed with the other MEP works" },
].map((item) => ({ ...item, href: `/services/${item.service}`, serviceTitle: SERVICES.find((s) => s.slug === item.service).title }));

export default function FireFightingPage() {
  return (
    <PageShell>
        <section className={"banner-three-area bg-img position-relative z-1"} data-background-image={"/assets/images/thumbs/banner-three-bg.jpg"}>
          <div className={"container-fluid"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-9"}>
                <div className={"banner-three-wrapper"}>
                  <div className={"banner-three-gaping"}>
                    <div className={"d-flex align-items-center tw-gap-4 tw-mb-8"}>
                      <div>
                        <div className={"d-flex align-items-center"}>
                          {["ASAS MEP engineer", "ASAS foreman", "ASAS fire fighting technician", "ASAS technician on a fit-out site", "ASAS site helper"].map((alt, i) => (
                            <div key={alt} className={`tw-w-122 tw-h-122 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-${i + 1}${i ? " tw--ms-16-px" : ""}${i && i < 4 ? " z-1" : ""} border border-3 border-white`}>
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
                    <div className={""}>
                      <span className={"d-block fw-semibold text-uppercase tw-mb-3"} style={{"color":"var(--asas-gold)"}}>
                        MEP · {service.title}
                      </span>
                      <h1 className={"banner-three-title tw-text-18 fw-medium text-white tw-mb-3 tw-char-animation"}>
                        {service.title} for fit-out projects
                      </h1>
                      <p className={"tw-text-lg tw-mb-9 fw-normal text-white"}>
                        {content.intro[0]}
                      </p>
                    </div>
                    <div className={"d-flex tw-gap-6 flex-wrap"}>
                      <div className={"banner-button"}>
                        <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-two-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
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
                      <div className={"banner-button"}>
                        <a href={"/projects"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
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
              <div className={"col-xl-3"}>
                <div className={"banner-three-right text-end tw-me-8"}>
                  <ul className={"banner-three-social"}>
                    <li className={"tw-mb-3"}>
                      <span className={"d-inline-block lh-1"}>
                        <img src={"/assets/images/shapes/banner-three-text-shape.png"} alt={""} />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"feature-three-area"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row gx-0"}>
              {FEATURES.map((item, i) => {
                const blue = i === 1;
                return (
                  <div key={item.title} className={"col-xl-4 col-lg-6 col-md-6"}>
                    <div className={`feature-three-wrapper d-flex align-items-center tw-gap-9 ${blue ? "bg-main-eight-600" : "bg-main-two-600"} tw-p-15 tw-mb-7 animation-item`} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                      <div>
                        <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex align-items-center justify-content-center bg-white"}>
                          <img className={"animate__wobble"} src={`/assets/images/icons/asas/${item.icon}.svg`} width={"61"} height={"60"} alt={""} />
                        </span>
                      </div>
                      <div>
                        <h2 className={`feature-three-title tw-text-705${blue ? " text-white" : ""} tw-mb-4`}>
                          {item.title}
                        </h2>
                        <p className={blue ? "text-white" : "text-heading"}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className={"about-three-area py-120"}>
          <div className={"about-three-top tw-mb-15"}>
            <div className={"container"}>
              <div className={"row"}>
                <div className={"col-xl-5"}>
                  <div className={"section-three-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      About ASAS
                    </div>
                  </div>
                </div>
                <div className={"col-xl-7"}>
                  <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"section-three-wrapper tw-mb-10"}>
                      <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                        Ten years of fit-out and MEP works, registered with Civil Defence.
                      </h2>
                    </div>
                    <div className={"about-three-counter-wrap d-flex justify-content-between"}>
                      {COMPANY.stats.map((stat) => (
                        <div key={stat.label} className={"about-three-counter"}>
                          <h2 className={"about-three-counter-title tw-text-122 fw-medium font-heading text-heading mb-0 lh-1"}>
                            <span className={"font-heading odometer"} data-count={String(stat.value)}></span>
                            {stat.suffix}
                          </h2>
                          <p className={"about-three-counter-paragraph fw-medium"}>
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
          <div className={"about-three-bottom"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
            <div className={"container-fluid gx-0"}>
              <div className={"row"}>
                <div className={"about-three-slide position-relative z-index-1"}>
                  <div className={"about-three-active swiper-container"}>
                    <div className={"about-three-swiper-wrapper swiper-wrapper"}>
                      {[1, 2, 3, 4, 5, 2].map((n, i) => (
                        <div key={i} className={"swiper-slide"}>
                          <div className={"about-three-thumb"}>
                            <img src={`/assets/images/thumbs/about-three-thumb${n}.jpg`} alt={SLIDE_ALTS[i]} />
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
        <section className={"service-three-area py-120"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7 col-lg-10"}>
                <div className={"section-three-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Related MEP services
                  </div>
                  <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                    Fire fighting alongside 
                        every MEP trade
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {related.map((item, i) => (
                <div key={item.slug} className={"col-xl-4 col-lg-6 col-md-6"}>
                  <div className={"service-three-wrapper bg-white tw-p-5 tw-rounded-lg tw-transition-3 position-relative z-1 overflow-hidden tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                    <div className={"service-three-thumb tw-mb-8"}>
                      <a className={"d-block"} href={`/services/${item.slug}`} tabIndex={-1} aria-hidden={"true"}>
                        <img className={"tw-rounded-xl w-100"} src={`/assets/images/thumbs/service-three-thumb${i + 1}.jpg`} alt={`ASAS ${item.title.toLowerCase()} on a fit-out project`} />
                      </a>
                    </div>
                    <div>
                      <div className={"d-flex justify-content-between align-items-center tw-mb-8"}>
                        <div className={"service-three-icon"}>
                          <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg"}>
                            <img className={"animate__wobble"} src={`/assets/images/icons/asas/${SERVICE_ICON[item.slug]}.svg`} width={"40"} height={"40"} alt={""} />
                          </span>
                        </div>
                        <div className={"service-three-number"}>
                          <span className={"tw-text-122 fw-medium"}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className={"service-three-title tw-transition-3 tw-text-505 tw-mb-4"}>
                          <a className={"hover-text-main-two-600"} href={`/services/${item.slug}`}>
                            {item.title}
                          </a>
                        </h3>
                        <p className={"service-three-paragraph tw-transition-3 tw-mb-4"}>
                          {SERVICE_CONTENT[item.slug].summary}
                        </p>
                      </div>
                      <div className={"service-three-button"}>
                        <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3"} href={`/services/${item.slug}`} aria-label={`View ${item.title}`}>
                          View Service
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
        </section>
        <section className={"product-three-area py-120"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7"}>
                <div className={"section-three-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Scope of work
                  </div>
                  <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                    Our fire fighting scope, from site visit to handover
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {SCOPE_CARDS.map((card, i) => (
                <div key={card.title} className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"product-three-wrapper text-center tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + (i % 4) * 100)}>
                    <div className={"product-three-thumb tw-px-7 position-relative z-1 overflow-hidden"}>
                      <a href={QUOTE_HREF} tabIndex={-1} aria-hidden={"true"}>
                        <img src={`/assets/images/thumbs/product-three-thumb${i + 1}.png`} alt={card.alt} />
                      </a>
                      <div className={"product-three-action d-flex flex-column flex-wrap"}>
                        {[
                          { href: QUOTE_HREF, label: "Request a quote", icon: "document", w: "19", h: "18" },
                          { href: "/projects", label: "See our projects", icon: "offices", w: "20", h: "19" },
                          { href: "/contact", label: "Contact us", icon: "chat", w: "17", h: "17" },
                        ].map((action, n) => (
                          <a key={action.href} href={action.href} className={"product-three-action-btn"} aria-label={action.label}>
                            <span className={"tw-transition-3 d-inline-block lh-1"}>
                              <img className={"tw-transition-3"} src={`/assets/images/icons/asas/${action.icon}.svg`} width={action.w} height={action.h} alt={""} />
                            </span>
                            <span className={"product-three-action-tooltip"} aria-hidden={"true"}>
                              {action.label}
                            </span>
                          </a>
                        ))}
                      </div>
                      <div className={"product-three-button"}>
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
                    <div className={"tw-pb-5"}>
                      <div className={"tw-mb-2"} aria-hidden={"true"}>
                        <span className={"text-main-eight-600"}>
                          <i className={`ph ${service.icon}`}></i>
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-base fw-semibold tw-mb-2"}>
                          {card.title}
                        </h3>
                        <span className={"tw-text-base fw-semibold text-heading"}>
                          {card.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={"project-three-area py-120 @@projectipClass"}>
          <div className={"project-three-top"}>
            <div className={"container"}>
              <div className={"row align-items-center justify-content-between"}>
                <div className={"col-xl-7 col-lg-7 col-md-9"}>
                  <div className={"section-three-wrapper tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      Projects
                    </div>
                    <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                      {content.projectsHeading}
                    </h2>
                  </div>
                </div>
                <div className={"col-xl-4 col-lg-5"}>
                  <div className={"project-three-top-right text-lg-end "} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <a href={"/projects"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
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
                                  <h3 className={"tw-text-8 fw-medium"}>
                                    <a href={"/projects"}>
                                      {project.name}
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div>
                                <a className={"tw-w-15 tw-h-15 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-xl"} href={"/projects"} aria-label={`See ${project.name} in our projects`}>
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
        <section className={"pricing-three-area pt-120 tw-pb-23 @@pricingipClass"}>
          <div className={"container"}>
            <div className={"row justify-content-between align-items-center"}>
              <div className={"col-xl-5 col-lg-7 col-md-7"}>
                <div className={"section-three-wrapper tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Our other services
                  </div>
                  <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                    One contractor for 
                        the whole project
                  </h2>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-4 col-md-4"}>
                <div className={"pricing-three-main position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"pricing-three-switch-wrapper d-flex align-items-start justify-content-end"}>
                    <label className={"pricing-three-toggler pricing-three-active text-heading fw-medium tw-text-base tw-transition-3"} id={"filt-monthly"}>
                      Fit-Out
                    </label>
                    <div className={"pricing-three-toggle position-relative overflow-hidden tw-w-15 tw-h-705 tw-rounded-3xl tw-mx-705 bg-main-eight-600"}>
                      <input type={"checkbox"} id={"switcher"} className={"pricing-three-check"} aria-label={"Switch between fit-out and specialist services"} />
                      <b className={"pricing-three-switch position-absolute bg-white rounded-circle z-1"}></b>
                    </div>
                    <label className={"pricing-three-toggler text-heading fw-medium tw-text-base tw-transition-3"} id={"filt-yearly"}>
                      Specialist
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"pricing-three-main-toogle"}>
                  {GROUP_PANELS.map((panel) => (
                    <div key={panel.id} id={panel.id} className={`pricing-three-wrapper-full${panel.hidden ? " hide" : ""}`}>
                      <div className={"row"}>
                        {panel.services.map((item, i) => {
                          const featured = i === 1;
                          const scope = SERVICE_CONTENT[item.slug].scope.slice(0, 5);
                          return (
                            <div key={item.slug} className={"col-xl-4 col-lg-6 col-md-6"}>
                              <div className={`pricing-three-wrap tw-p-11 tw-rounded-xl${featured ? " bg-main-eight-600" : ""}`} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                                <div className={"tw-mb-8"}>
                                  <div className={"pricing-three-top"}>
                                    <h3 className={`pricing-three-subtitle tw-text-505 fw-medium font-body ${featured ? "text-white" : ""} d-inline-block tw-rounded-2xl tw-mb-4`}>
                                      <a className={featured ? "text-white" : "text-heading"} href={`/services/${item.slug}`}>
                                        {item.title}
                                      </a>
                                    </h3>
                                    <p className={`tw-mb-4${featured ? " text-white" : ""}`}>
                                      {SERVICE_CONTENT[item.slug].summary}
                                    </p>
                                  </div>
                                  <div className={"pricing-three-price d-flex align-items-end tw-gap-2"}>
                                    <div className={`pricing-three-price-title tw-text-705 ${featured ? "text-white" : "text-heading"} d-inline-flex align-items-end mb-0 lh-1`} aria-hidden={"true"}>
                                      <i className={`ph-bold ${item.icon}`}></i>
                                    </div>
                                    <p className={`tw-text-base fw-normal ${featured ? "text-white" : "text-body"}`}>
                                      {item.group} services
                                    </p>
                                  </div>
                                </div>
                                <div className={`pricing-three-list${featured ? " main" : ""} tw-mb-8`}>
                                  <ul>
                                    {scope.map((point, n) => (
                                      <li key={point} className={`${featured ? "text-white" : "text-heading"} fw-normal${n < scope.length - 1 ? " tw-mb-3" : ""} d-flex tw-gap-3 align-items-center`}>
                                        <img src={featured ? "/assets/images/icons/asas/check-white.svg" : "/assets/images/icons/asas/check.svg"} width={"21"} height={"18"} alt={""} />
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <a href={QUOTE_HREF} className={`tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold ${featured ? "bg-main-two-600" : "bg-main-eight-600"} text-white tw-rounded-4xl position-relative z-1`}>
                                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                                          <i className={"ph-bold ph-arrow-right"}></i>
                                          <i className={"ph-bold ph-arrow-right"}></i>
                                        </span>
                                      </span>
                                      <span className={`btn_text d-inline-flex overflow-hidden ${featured ? "text-heading" : "text-white"}`}>
                                        <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                          Request a Quote
                                        </span>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonial-three-area py-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-6"}>
                <div className={"testimonial-three-left d-flex justify-content-between flex-column h-100"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-wrapper tw-mb-14"}>
                    <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      Our commitments
                    </div>
                    <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                      Safety, quality and 
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
                        <span className={"tw-w-15 tw-h-15 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle"} style={{"background":"rgba(24, 79, 180, .06)"}}>
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
                            <div className={"testimonial-three-arrow"}>
                              <button type={"button"} className={"slider-prev "} tabIndex={"0"} aria-label={"Previous slide"}>
                                <i className={"ph-bold ph-arrow-left"}></i>
                              </button>
                              <button type={"button"} className={"slider-next "} tabIndex={"0"} aria-label={"Next slide"}>
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
        <section className={"blog-three-area pt-120 tw-pb-22 @@blogipClass"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7"}>
                <div className={"section-three-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Where fire fighting fits
                  </div>
                  <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                    Part of every fit-out we deliver
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {HIGHLIGHTS.map((item, i) => (
                <div key={item.title} className={"col-xl-4 col-lg-6"}>
                  <div className={"blog-wrapper blog-three-wrapper tw-me-4 tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
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
                          <a href={item.href}>
                            {item.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className={"d-flex align-items-center tw-gap-3 tw-mb-6"}>
                      <div className={"blog-three-img"}>
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
        <section className={"contact-three-area py-120"}>
          <div className={"container"}>
            <div className={"position-relative z-1"}>
              <div className={"row align-items-end"}>
                <div className={"col-xl-6"}>
                  <div className={"contact-two-wrapper contact-three-wrapper bg-white tw-py-15 tw-ps-10 tw-pe-5 tw-rounded-xl position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"section-three-wrapper tw-mb-14"}>
                      <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                        Request a quote
                      </div>
                      <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                        Tell us about your fire fighting works
                      </h2>
                    </div>
                    <div>
                      <QuoteForm idPrefix={"fire-quote"} />
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
                <img className={"object-fit-cover h-100 tw-rounded-xl"} src={"/assets/images/thumbs/contact-three-thumb.jpg"} alt={"ASAS engineer reviewing fire fighting drawings with a client"} />
              </div>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
