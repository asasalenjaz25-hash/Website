// Low Current Systems (/services/low-current). Built on the full index-9 template
// layout: tabs, gallery, work steps, team, twin testimonial sliders, counters and
// every image are kept; only the words, links and lists are ASAS content. The
// gallery shows fit-out project highlights. Specific low current subsystems are
// not named until ASAS confirms them (content.md §3.3 [confirm]). Template photos
// are placeholders (see design-system/image-manifest/services-c.md).
import PageShell from "@/components/PageShell";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";

const SLUG = "low-current";
const service = SERVICES.find((s) => s.slug === SLUG);
const content = SERVICE_CONTENT[SLUG];
const bySn = (sn) => PROJECTS.find((p) => p.sn === sn);

const FEATURES = [
  { title: "Installed with the electrical works", text: "Containment and cabling are routed together with the electrical installation, by the same MEP team.", icon: "electrical", size: [50, 60] },
  { title: "Agreed before ceilings close", text: "Final positions are coordinated with ceilings, joinery and the other MEP trades before anything is closed up.", icon: "coordination", size: [60, 60] },
  { title: "Tested before handover", text: "Every low current installation is tested before the space is handed over.", icon: "testing", size: [60, 60] },
];

// Same MEP group: the trades low current is installed alongside.
// icon = ASAS library icon for the trade; size = the template icon it replaces.
const RELATED_SIZES = [[40, 40], [34, 40], [40, 40]];
const RELATED = ["electrical", "hvac", "fire-fighting"]
  .map((slug, i) => ({ ...SERVICES.find((s) => s.slug === slug), content: SERVICE_CONTENT[slug], icon: slug, size: RELATED_SIZES[i] }));

const WHY = [
  {
    id: "home",
    tab: "In-house MEP team",
    icon: "team",
    size: [40, 41],
    lead: "Our own MEP engineers, foremen, technicians and helpers carry out the work.",
    text: "The team behind every installation is " + COMPANY.stats[2].value + " people strong: 2 MEP engineers, 2 foremen, 12 technicians and 7 helpers across electrical, plumbing and HVAC. The installation is planned, built and tested by one team.",
    img: "/assets/images/thumbs/choose-us-five-thumb1.jpg",
    alt: "ASAS Alenjaz MEP team on a fit-out site",
  },
  {
    id: "profile",
    tab: "Authority-approved",
    icon: "approved",
    size: [40, 45],
    lead: "Approved by DEWA, Dubai Municipality, Civil Defence and Trakhees.",
    text: "Design and submissions to the relevant authority are part of our process, alongside the installation itself.",
    img: "/assets/images/thumbs/choose-us-five-thumb2.png",
    alt: "ASAS Alenjaz engineer reviewing MEP drawings",
  },
  {
    id: "contact",
    tab: "One contract, every trade",
    icon: "one-contract",
    size: [40, 49],
    lead: "Low current, electrical, HVAC, plumbing and fire fighting under one contract.",
    text: "Because one contractor handles civil, joinery and every MEP discipline, you have one programme, one point of contact and one team accountable for the finished space.",
    img: "/assets/images/thumbs/choose-us-five-thumb3.png",
    alt: "Finished office fit-out by ASAS Alenjaz",
  },
  {
    id: "house",
    tab: "Quality & safety",
    icon: "quality",
    size: [40, 40],
    lead: "A Quality Management System built on specifications, schedules and progress reporting.",
    text: "We work to all contractual obligations, specifications, standards and codes of practice, keep a clean working environment, and build environment, health and safety into every business decision.",
    img: "/assets/images/thumbs/choose-us-five-thumb4.png",
    alt: "ASAS Alenjaz technician working safely on site",
  },
];

// Gallery -> fit-out project highlights (the three from the service content first).
const GALLERY = [8, 99, 100, 96, 11].map(bySn);

const STEPS = [
  { title: PROCESS[0].title, text: PROCESS[0].text, alt: "ASAS Alenjaz engineer on a site visit" },
  { title: PROCESS[1].title, text: PROCESS[1].text, alt: "MEP drawings for a fit-out prepared by ASAS Alenjaz" },
  { title: PROCESS[2].title + " & handover", text: "Our in-house team installs the containment and cabling with the electrical works, then tests everything before handover.", alt: "ASAS Alenjaz technician testing an installation before handover" },
];

// In-house roles from the Man Power page (content.md §1.4). No names.
const TEAM = [
  { role: "MEP Engineers", count: 2, note: "In-house", alt: "ASAS Alenjaz MEP engineer" },
  { role: "Foremen", count: 2, note: "Electrical, plumbing & HVAC", alt: "ASAS Alenjaz foreman" },
  { role: "Technicians", count: 12, note: "Electrical, plumbing & HVAC", alt: "ASAS Alenjaz technician" },
  { role: "Helpers", count: 7, note: "Electrical, plumbing & HVAC", alt: "ASAS Alenjaz helper" },
];

const COMMITMENTS = [
  {
    title: "Quality policy",
    by: "Quality Management System",
    icon: "quality",
    text: "We meet customer requirements through continual improvement of our Quality Management System, working to all contractual obligations, specifications, standards and codes of practice.",
    alt: "ASAS Alenjaz engineer checking an installation",
  },
  {
    title: "Environment, health & safety",
    by: "EHS policy",
    icon: "safety",
    text: "We are committed to conserving the environment and providing a safe, healthy workplace for all employees, and we comply with all EHS legal requirements.",
    alt: "ASAS Alenjaz team member wearing safety equipment on site",
  },
];

// Blog cards -> more services from the same team.
const MORE = ["plumbing", "fit-out", "planning-architecture"]
  .map((slug) => ({ ...SERVICES.find((s) => s.slug === slug), content: SERVICE_CONTENT[slug] }));
const GROUP_LABEL = { "Fit-Out": "Fit-out works", MEP: "MEP works", Specialist: "Specialist services" };

export default function LowCurrentPage() {

  return (
    <PageShell>
      <section className={"banner-five-area bg-img position-relative z-1"} data-background-image={"/assets/images/thumbs/banner-five-bg.jpg"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-12"}>
              <div className={"banner-five-wrapper"}>
                <div className={""}>
                  <div className={"banner-five-subtitle font-rurbanist text-main-two-600 tw-text-505 fw-medium border border-main-two-600 tw-rounded-4xl d-inline-block tw-px-13 tw-py-2 tw-mb-3"}>
                    {service.group} · {service.title}
                  </div>
                  <h1 className={"banner-three-title banner-five-title tw-text-24 fw-bold font-rurbanist text-white tw-mb-3 tw-char-animation"}>
                    {service.title}{" "}
                    <span>
                      for Fit-Out Projects
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"banner-five-bottom d-flex align-items-center tw-gap-5"}>
                <div className={"banner-five-wrap tw-w-300-px position-relative z-1"}>
                  <div>
                    <h2 className={"banner-counter-title tw-text-14 fw-bold font-rurbanist text-white mb-0 lh-1"}>
                      <span className={"font-rurbanist odometer"} data-count={COMPANY.stats[1].value}></span>
                      {COMPANY.stats[1].suffix}
                    </h2>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={"text-white tw-text-lg fw-normal font-rurbanist"}>
                      Projects
                      <br />
                      Delivered
                    </p>
                  </div>
                  <div>
                    <p className={"text-white tw-text-sm fw-semibold mb-0"}>
                      Approved by {COMPANY.approvals.join(" · ")}
                    </p>
                  </div>
                </div>
                <div>
                  <div className={"tw-mb-11"}>
                    <p className={"text-white tw-me-25 fw-medium tw-text-lg font-rurbanist"}>
                      {content.intro[0]} {content.intro[1]}
                    </p>
                  </div>
                  <div>
                    <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                            <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
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
            </div>
          </div>
        </div>
      </section>
      <section className={"feature-five-area pt-120 tw-pb-22 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            {FEATURES.map((item, i) => (
              <div key={item.title} className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-five-wrapper tw-rounded-xl tw-mb-7 animation-item position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"feature-five-top d-flex align-items-center tw-gap-705 tw-mb-6"}>
                    <div className={"feature-five-icon"}>
                      <span className={"tw-w-210 tw-h-29 lh-1 d-inline-flex justify-content-center align-items-center bg-main-four-600 tw-transition-3"}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + item.icon + ".svg"} width={item.size[0]} height={item.size[1]} alt={""} />
                      </span>
                    </div>
                    <div>
                      <h2 className={"feature-five-title tw-text-2xl fw-bold font-rurbanist tw-transition-3"}>
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className={"feature-five-paragraph tw-transition-3"}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img className={"feature-five-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/feature-five-shape1.png"} alt={""} />
          <img className={"feature-five-shape-2 position-absolute z-n1"} src={"/assets/images/shapes/feature-five-shape2.png"} alt={""} />
        </div>
      </section>
      <section className={"about-five-area pb-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-6 col-lg-6"}>
              <div className={"about-five-wrapper position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-wrapper tw-mb-10"}>
                  <div className={"section-five-subtitle font-heading tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    About this service
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Low current installations, planned with the rest of the MEP works
                  </h2>
                </div>
                <div className={"about-five-info tw-rounded-lg tw-mb-10"}>
                  <div className={"d-flex tw-gap-5"}>
                    <div>
                      <span className={"tw-w-15"}>
                        <img src={"/assets/images/icons/asas/quote.svg"} width={"60"} height={"44"} alt={""} />
                      </span>
                    </div>
                    <div>
                      <div className={"tw-mb-8"}>
                        <p className={"fw-bold font-rurbanist"}>
                          {COMPANY.tagline}. Our quality system is built on specifications, time schedules and progress reporting, with continual improvement of our working methods.
                        </p>
                      </div>
                      <div>
                        <h3 className={"tw-text-5 fw-bold font-rurbanist"}>
                          {COMPANY.short},{" "}
                          <span className={"tw-text-base fw-normal text-body"}>
                            Quality policy
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"d-flex align-items-center"}>
                  <div className={"about-five-counter-title"}>
                    <h2 className={"banner-counter-title tw-text-24 fw-medium font-rurbanist text-main-four-600 mb-0 lh-1"}>
                      <span className={"font-rurbanist odometer"} data-count={COMPANY.stats[0].value}></span>
                      {COMPANY.stats[0].suffix}
                    </h2>
                  </div>
                  <div>
                    <p className={"tw-text-lg fw-semibold text-heading"}>
                      {COMPANY.stats[0].label}
                      <br />
                      since {COMPANY.founded}
                    </p>
                  </div>
                </div>
                <div>
                  <img className={"about-five-shape-1 position-absolute bottom-0 tw-rounded-lg"} src={"/assets/images/shapes/about-five-shape1.jpg"} alt={""} />
                </div>
              </div>
            </div>
            <div className={"col-xl-6 col-lg-6"}>
              <div className={"about-five-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"tw-mb-10"}>
                  <img className={"tw-rounded-md"} src={"/assets/images/thumbs/about-five-thumb.jpg"} alt={"ASAS Alenjaz technician routing cabling above an office ceiling"} />
                </div>
                <div className={"tw-mb-10"}>
                  <p className={"fw-semibold text-heading font-rurbanist"}>
                    We deliver low current installations for {content.sectors.join(", ").toLowerCase()}.
                  </p>
                </div>
                <div>
                  <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
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
          </div>
        </div>
        <div>
          <img className={"about-five-shape-2 position-absolute bottom-0 end-0"} src={"/assets/images/shapes/about-five-shape2.png"} alt={""} />
        </div>
      </section>
      <section className={"service-five-area bg-main-four-50 pt-120 tw-pb-22 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-6 col-lg-6"}>
              <div className={"section-five-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                  MEP works
                </div>
                <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                  Installed alongside the rest of your MEP
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {RELATED.map((item, i) => (
              <div key={item.slug} className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"service-five-wrapper bg-white tw-rounded-xl tw-p-5 tw-mb-7 position-relative z-1 overflow-hidden animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"service-five-thumb tw-mb-6"}>
                    <a className={"d-block"} href={"/services/" + item.slug} aria-label={item.title}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/service-five-thumb" + (i + 1) + ".jpg"} alt={["ASAS Alenjaz electrician at a distribution board", "Air-conditioning installation by ASAS Alenjaz", "Fire fighting pipework installed by ASAS Alenjaz"][i]} />
                    </a>
                  </div>
                  <div className={"tw-mb-6"}>
                    <h3 className={"service-five-title tw-text-2xl fw-bold font-rurbanist"}>
                      <a className={"hover-text-white tw-transition-4"} href={"/services/" + item.slug}>
                        {item.title}
                      </a>
                    </h3>
                  </div>
                  <div className={"d-flex tw-gap-5 tw-mb-6"}>
                    <div>
                      <span className={"service-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-xl tw-transition-4"} style={{"background":"#F4F7FC"}}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + item.icon + ".svg"} width={item.size[0]} height={item.size[1]} alt={""} />
                      </span>
                    </div>
                    <div>
                      <p className={"service-five-paragraph fw-semibold font-rurbanist tw-transition-4"}>
                        {item.content.summary}
                      </p>
                    </div>
                  </div>
                  <div className={"d-flex align-content-center align-items-center justify-content-between"}>
                    <div>
                      <a className={"service-five-btn fw-bold text-heading d-inline-flex tw-gap-3 align-items-center tw-transition-4"} href={"/services/" + item.slug}>
                        Read More
                        <span className={"lh-1 d-inline-block tw-text-xl"}>
                          <i className={"ph ph-arrow-right"} aria-hidden={"true"}></i>
                        </span>
                      </a>
                    </div>
                    <div>
                      <span className={"service-five-text-stroke tw-text-15 tw-transition-4"} aria-hidden={"true"}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img className={"service-five-shape position-absolute w-100 h-100 top-0 start-0 z-n1"} src={"/assets/images/shapes/service-five-shape.png"} alt={""} />
        </div>
      </section>
      <section className={"choose-us-five-area py-120"}>
        <div className={"container"}>
          <div className={"row align-items-center justify-content-between tw-mb-14"}>
            <div className={"col-xl-7 col-lg-7 col-md-7"}>
              <div className={"section-five-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                  WHY ASAS ALENJAZ
                </div>
                <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                  One team for your low current and MEP works
                </h2>
              </div>
            </div>
            <div className={"col-xl-4 col-md-5 col-md-5"}>
              <div className={"text-md-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                  <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                    <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                      <span className={"overflow-hidden position-relative d-inline-flex"}>
                        <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                        <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                      </span>
                    </span>
                    <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                      <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                        Contact Us
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={"row tw-mb-18"}>
            <div className={"col-xl-12"}>
              <ul className={"choose-us-five-nav-tabs nav nav-tabs"} id={"myTab"} role={"tablist"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                {WHY.map((item, i) => (
                  <li key={item.id} className={"choose-us-five-nav-item nav-item animation-item"} role={"presentation"}>
                    <button className={"choose-us-five-nav-link nav-link text-start p-0 d-inline-flex align-items-center tw-gap-5" + (i === 0 ? " active" : "")} id={item.id + "-tab"} data-bs-toggle={"tab"} data-bs-target={"#" + item.id} type={"button"} role={"tab"} aria-controls={item.id} aria-selected={i === 0 ? "true" : "false"}>
                      <span>
                        <span className={"choose-us-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center border border-main-four-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + item.icon + ".svg"} width={item.size[0]} height={item.size[1]} alt={""} />
                        </span>
                      </span>
                      <span>
                        <span className={"tw-text-505 fw-semibold text-heading font-rurbanist"}>
                          {item.tab}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"tab-content"} id={"myTabContent"}>
                  {WHY.map((item, i) => (
                    <div key={item.id} className={"tab-pane fade" + (i === 0 ? " show active" : "")} id={item.id} role={"tabpanel"} aria-labelledby={item.id + "-tab"}>
                      <div className={"row align-items-center gx-0"}>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-thumb"}>
                            <img className={"tw-rounded-xl w-100"} src={item.img} alt={item.alt} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-wrapper tw-ms-9"}>
                            <div>
                              <h3 className={"tw-mb-4 font-rurbanist tw-text-base"}>
                                {item.lead}
                              </h3>
                              <p className={"font-rurbanist tw-mb-8"}>
                                {item.text}
                              </p>
                            </div>
                            <div className={"d-flex align-items-center justify-content-between"}>
                              <div>
                                <h4 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={COMPANY.stats[0].value}></span>
                                  {COMPANY.stats[0].suffix}
                                </h4>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  {COMPANY.stats[0].label}
                                </p>
                              </div>
                              <div>
                                <h4 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={COMPANY.stats[1].value}></span>
                                  {COMPANY.stats[1].suffix}
                                </h4>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  {COMPANY.stats[1].label}
                                </p>
                              </div>
                              <div>
                                <h4 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={COMPANY.stats[2].value}></span>
                                  {COMPANY.stats[2].suffix}
                                </h4>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  {COMPANY.stats[2].label}
                                </p>
                              </div>
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
      </section>
      <section className={"gallery-five-area py-120 bg-main-four-50"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-7 col-lg-8"}>
              <div className={"section-five-wrapper text-center tw-mb-18"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-subtitle font-heading tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                  Project highlights
                </div>
                <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                  Fit-out projects across Dubai
                </h2>
                <p>
                  Low current is installed as part of fit-outs like these offices in Binary Tower, Media City, Studio City, Business Bay and Dubai Science Park.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"container-fluid"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"gallery-five-wrap align-items-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                {GALLERY.map((project, i) => (
                  <div key={project.sn} className={"gallery-five-item"}>
                    <div className={"gallery-five-thumb tw-rounded-2xl position-relative z-1"}>
                      <img className={"tw-rounded-2xl border border-3 border-white w-100"} src={"/assets/images/thumbs/gallery-five-thumb" + (i + 1) + ".jpg"} alt={project.name + " office fit-out, " + project.location} />
                      <div className={"gallery-five-button position-absolute start-50 translate-middle"}>
                        <a className={"tw-text-122 text-white"} href={"/projects"} aria-label={"View " + project.name + " and other projects"}>
                          <i className={"ph ph-camera"} aria-hidden={"true"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"work-five-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-5"}>
              <div className={"section-five-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                  how we work
                </div>
                <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                  From site visit to a tested installation
                </h2>
              </div>
            </div>
          </div>
          <div className={"work-five-bottom position-relative z-1"}>
            <div className={"row"}>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"work-five-wrapper d-flex justify-content-between flex-column tw-h-282-px tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"work-five-text"}>
                    <span className={"font-rurbanist tw-text-2xl fw-medium text-heading tw-rounded-xl tw-py-1 tw-px-5"}>
                      Step 1
                    </span>
                  </div>
                  <div className={"work-five-content tw-ms-26"}>
                    <h3 className={"tw-text-2xl fw-semibold tw-mb-4"}>
                      {STEPS[0].title}
                    </h3>
                    <p className={"font-rurbanist"}>
                      {STEPS[0].text}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"work-five-thumb text-end tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <a href={"/projects"} aria-label={"View our projects"}>
                    <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/wrok-five-thumb1.jpg"} alt={STEPS[0].alt} />
                  </a>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"work-five-thumb tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <a href={"/projects"} aria-label={"View our projects"}>
                    <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/wrok-five-thumb2.jpg"} alt={STEPS[1].alt} />
                  </a>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"work-five-wrapper two d-flex justify-content-between flex-column tw-h-282-px tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"work-five-text"}>
                    <span className={"font-rurbanist tw-text-2xl fw-medium text-heading tw-rounded-xl tw-py-1 tw-px-5"}>
                      Step 2
                    </span>
                  </div>
                  <div className={"work-five-content tw-ms-26"}>
                    <h3 className={"tw-text-2xl fw-semibold tw-mb-4"}>
                      {STEPS[1].title}
                    </h3>
                    <p className={"font-rurbanist"}>
                      {STEPS[1].text}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"work-five-wrapper d-flex justify-content-between flex-column tw-h-282-px tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"work-five-text"}>
                    <span className={"font-rurbanist tw-text-2xl fw-medium text-heading tw-rounded-xl tw-py-1 tw-px-5"}>
                      Step 3
                    </span>
                  </div>
                  <div className={"work-five-content tw-ms-26"}>
                    <h3 className={"tw-text-2xl fw-semibold tw-mb-4"}>
                      {STEPS[2].title}
                    </h3>
                    <p className={"font-rurbanist"}>
                      {STEPS[2].text}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"work-five-thumb text-end tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"600"}>
                  <a href={"/projects"} aria-label={"View our projects"}>
                    <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/wrok-five-thumb3.jpg"} alt={STEPS[2].alt} />
                  </a>
                </div>
              </div>
            </div>
            <span className={"work-five-dots one"}></span>
            <span className={"work-five-dots two"}></span>
            <span className={"work-five-dots three"}></span>
          </div>
        </div>
        <div>
          <img className={"work-five-shape position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/work-five-shape.png"} alt={""} />
        </div>
      </section>
      <section className={"team-five-area bg-main-four-50 pt-120 tw-pb-22"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-7"}>
              <div className={"section-five-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-subtitle font-heading tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                  Our in-house team
                </div>
                <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                  {COMPANY.stats[2].value} people of our own, no subcontracted labour
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {TEAM.map((member, i) => (
              <div key={member.role} className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-five-wrapper text-center tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"team-five-thumb"}>
                    <a href={"/about"} aria-label={"About our team: " + member.role}>
                      <img src={"/assets/images/thumbs/team-five-img" + (i + 1) + ".png"} alt={member.alt} />
                    </a>
                  </div>
                  <div className={"team-five-content bg-white tw-transition-3"}>
                    <div className={"text-center"}>
                      <h3 className={"tw-text-2xl fw-bold font-rurbanist tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"/about"}>
                          {member.count} {member.role}
                        </a>
                      </h3>
                      <p className={"font-rurbanist tw-mb-4"}>
                        {member.note}
                      </p>
                    </div>
                  </div>
                  <div className={"team-five-button"}>
                    <a href={"/about"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-black text-white hover-bg-main-four-600 tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                            <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={"testimonial-five-area py-120"}>
        <div className={"container"}>
          <div className={"row align-items-center justify-content-between tw-mb-4"}>
            <div className={"col-xl-6 col-lg-6 col-md-7"}>
              <div className={"section-five-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                  Our commitments
                </div>
                <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                  Quality and safety on every installation
                </h2>
              </div>
            </div>
            <div className={"col-xl-4 col-lg-5 col-md-4"}>
              <div className={"testimonial-five-top-wrap d-flex align-items-center justify-content-end tw-gap-5"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div>
                  <h2 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                    <span className={"font-rurbanist odometer"} data-count={COMPANY.stats[3].value}></span>
                    {COMPANY.stats[3].suffix}
                  </h2>
                </div>
                <div>
                  <div>
                    <p className={"fw-semibold text-heading mb-0"}>
                      {COMPANY.stats[3].label}
                    </p>
                  </div>
                  <div>
                    <p>
                      {COMPANY.approvals.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"row tw-mb-4"}>
            <div className={"col-xl-7"}>
              <div className={"overflow-hidden"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"testimonial-five-slide"}>
                  <div className={"swiper testimonial-five-active-two"}>
                    <div className={"swiper-wrapper"}>
                      {COMMITMENTS.map((item, i) => (
                        <div key={item.title} className={"testimonial-five-wrapper d-flex tw-rounded-2xl overflow-hidden swiper-slide"}>
                          <div className={"testimonial-five-thumb"}>
                            <img src={"/assets/images/thumbs/testimonial-five-thumb" + (i + 1) + ".jpg"} alt={item.alt} />
                          </div>
                          <div className={"testimonial-five-content"}>
                            <div className={"d-flex align-items-center justify-content-between tw-mb-4"}>
                              <div>
                                <h3 className={"font-rurbanist tw-text-2xl"}>
                                  {item.title}
                                </h3>
                                <p className={"font-rurbanist fw-semibold"}>
                                  {item.by}
                                </p>
                              </div>
                              <div>
                                <span>
                                  <img src={"/assets/images/icons/asas/" + item.icon + ".svg"} width={"60"} height={"44"} alt={""} />
                                </span>
                              </div>
                            </div>
                            <div className={"tw-mb-4"}>
                              <p className={"font-rurbanist fw-semibold text-heading"}>
                                {item.text}
                              </p>
                            </div>
                            <div>
                              <p className={"font-rurbanist tw-text-sm text-uppercase text-main-four-600 fw-semibold mb-0"}>
                                {COMPANY.short}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-5"}>
              <div className={"testimonial-five-bottom-slide"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"swiper testimonial-five-active-one"}>
                  <div className={"swiper-wrapper"}>
                    <div className={"testimonial-five-bottom-thumb swiper-slide"}>
                      <img className={"cursor-pointer tw-rounded-2xl object-fit-cover w-100"} src={"/assets/images/thumbs/testimonial-five-thumb11.jpg"} alt={"ASAS Alenjaz quality inspection on site"} />
                    </div>
                    <div className={"testimonial-five-bottom-thumb swiper-slide"}>
                      <img className={"cursor-pointer tw-rounded-2xl object-fit-cover w-100"} src={"/assets/images/thumbs/testimonial-five-thumb22.jpg"} alt={"ASAS Alenjaz safety briefing on site"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"tw-w-34 tw-h-7 bg-main-four-600 tw-rounded-3xl m-auto position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"testimonial-five-arrow"}>
                  <button type={"button"} className={"slider-prev "} tabIndex={"0"} aria-label={"Previous slide"}>
                    <i className={"ph-bold ph-arrow-left"}></i>
                  </button>
                  <button type={"button"} className={"slider-next "} tabIndex={"0"} aria-label={"Next slide"}>
                    <i className={"ph-bold ph-arrow-right"}></i>
                  </button>
                </div>
                <div className={"testimonial-five-dot position-absolute"}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"blog-five-area pt-120 tw-pb-22 bg-main-four-50"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-6"}>
              <div className={"section-five-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                  More services
                </div>
                <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                  More from the same in-house team
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {MORE.map((item, i) => (
              <div key={item.slug} className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper blog-five-wrapper tw-me-4 tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-9"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb" + (i + 1) + ".jpg"} alt={item.title + " by ASAS Alenjaz"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb" + (i + 1) + ".jpg"} alt={""} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/services/" + item.slug} aria-label={item.title}></a>
                  </div>
                  <div className={"d-flex align-items-center justify-content-between tw-mb-6"}>
                    <div className={"blog-meta"}>
                      <ul className={"d-flex align-items-center tw-gap-5 flex-wrap"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph " + item.icon} aria-hidden={"true"}></i>
                          </span>
                          {GROUP_LABEL[item.group]}
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-buildings"} aria-hidden={"true"}></i>
                          </span>
                          {item.content.sectors[0]}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-black text-white tw-text-xl hover-bg-main-four-600 hover-text-white"} href={"/services/" + item.slug} aria-label={"View " + item.title}>
                        <i className={"ph ph-arrow-up-right"} aria-hidden={"true"}></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className={"tw-text-2xl tw-mb-6 font-rurbanist"}>
                      <a className={"hover-text-main-four-600"} href={"/services/" + item.slug}>
                        {item.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
