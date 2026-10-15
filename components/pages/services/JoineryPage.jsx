// Joinery service page (/services/joinery). Built on the full index-4 template
// layout: every section, slider, counter and image is kept; only the words,
// links and lists are ASAS content. Template photos are placeholders until ASAS
// supplies project photos (see design-system/image-manifest/services-c.md).
import PageShell from "@/components/PageShell";
import TextRing from "@/components/TextRing";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";
import ServiceExtras from "@/components/details/ServiceExtras";

const SLUG = "joinery";
const service = SERVICES.find((s) => s.slug === SLUG);
const content = SERVICE_CONTENT[SLUG];
const PHONE = COMPANY.phones[0];
const bySn = (sn) => PROJECTS.find((p) => p.sn === sn);

// Trades that sit around the joinery on a fit-out (same Fit-Out group + the MEP
// trades the joinery is coordinated with).
// icon = ASAS library icon for the trade; size = the template icon box it replaces.
const RELATED_ICONS = { "fit-out": "fit-out", civil: "civil", electrical: "electrical", plumbing: "plumbing", hvac: "hvac", "planning-architecture": "planning" };
const RELATED_SIZES = [[83, 83], [83, 83], [83, 83], [83, 83], [83, 83], [77, 83]];
const RELATED = ["fit-out", "civil", "electrical", "plumbing", "hvac", "planning-architecture"]
  .map((slug, i) => ({ ...SERVICES.find((s) => s.slug === slug), content: SERVICE_CONTENT[slug], icon: RELATED_ICONS[slug], size: RELATED_SIZES[i] }));

// Six steps: the four shared PROCESS steps with the two joinery-specific ones
// from the service scope placed where they happen.
const STEPS = [
  { title: PROCESS[0].title, text: PROCESS[0].text, icon: "inspection" },
  { title: PROCESS[1].title, text: PROCESS[1].text, icon: "design-drawing" },
  { title: "Site measurement", text: "Every joinery item is measured on site before production starts.", icon: "measure" },
  { title: "Coordination", text: "Joinery is set out with lighting, power and plumbing before it is installed.", icon: "coordination" },
  { title: PROCESS[2].title, text: "Our in-house team installs and finishes the joinery on site, with regular progress reports.", icon: "hard-hat" },
  { title: PROCESS[3].title, text: PROCESS[3].text, icon: "handover" },
];

// Recent fit-out projects (joinery is delivered as part of our fit-outs).
const PROJECT_ROWS = [
  ...content.projects,
  { name: bySn(36).name + " Salon & Spa", note: bySn(36).type + " · " + bySn(36).location },
];

const MORE_PROJECTS = [11, 4, 33].map(bySn);

const COMMITMENTS = [
  {
    title: "Quality policy",
    text: "We meet customer requirements through continual improvement of our Quality Management System, working to all contractual obligations, specifications, standards and codes of practice.",
    by: "Quality Management System",
    icon: "quality",
  },
  {
    title: "Environment, health & safety",
    text: "We are committed to conserving the environment and providing a safe, healthy workplace. EHS is part of every business decision, and we comply with all EHS legal requirements.",
    by: "EHS policy",
    icon: "safety",
  },
];

export default function JoineryPage() {

  return (
    <PageShell>
      <section className={"banner-area pb-140"}>
        <div className={"container tw-container-1750-px"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"banner-wrapper d-flex justify-content-between align-items-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"banner-left tw-pt-32 tw-rounded-xl position-relative z-1"} style={{"background":"linear-gradient(180deg, #D3E0F8 0%, rgba(211, 224, 248, 0) 100%)"}}>
                  <div className={"banner-gaping tw-px-30"}>
                    <div className={"d-flex align-items-center justify-content-center tw-gap-4 tw-mb-8 flex-wrap row-gap-3"}>
                      <div>
                        <div className={"d-flex align-items-center"}>
                          <div className={"tw-w-122 tw-h-122 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-1 border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-client-img1.png"} alt={"ASAS Alenjaz joinery installer on site"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                          <div className={"tw-w-122 tw-h-122 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2 tw--ms-16-px z-1 border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-client-img2.png"} alt={"ASAS Alenjaz site foreman"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                          <div className={"tw-w-122 tw-h-122 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-3 tw--ms-16-px z-1 border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-client-img3.png"} alt={"ASAS Alenjaz MEP engineer"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                          <div className={"tw-w-122 tw-h-122 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-4 tw--ms-16-px z-1 border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-client-img4.png"} alt={"ASAS Alenjaz technician fitting joinery"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                          <div className={"tw-w-122 tw-h-122 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-5 tw--ms-16-px border border-3 border-white"}>
                            <img src={"/assets/images/thumbs/banner-client-img5.png"} alt={"ASAS Alenjaz team member"} className={"w-100 h-100 object-fit-cover"} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <span className={"font-heading tw-text-sm fw-semibold text-uppercase text-main-eight-600"}>
                            {service.group} · {service.title}
                          </span>
                        </div>
                        <div>
                          <p className={"mb-0"}>
                            Approved by {COMPANY.approvals.join(" · ")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"justify-content-center"}>
                      <h1 className={"banner-title text-center tw-text-18 tw-mb-3 tw-char-animation"}>
                        Custom{" "}
                        <span className={"fw-normal"}>
                          {service.title}
                        </span>
                        {" "}for Commercial and Residential{" "}
                        <span className={"fw-normal"}>
                          Interiors
                        </span>
                      </h1>
                      <p className={"text-center tw-text-lg tw-mb-9"}>
                        {content.summary}
                      </p>
                    </div>
                    <div className={"banner-button text-center"}>
                      <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
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
                  <div className={"d-flex align-items-center tw-gap-17 tw-ps-20"}>
                    <div>
                      <img src={"/assets/images/asas/joinery-reception-desk.webp"} style={{ width: "100%", height: "auto", aspectRatio: "304 / 324", objectFit: "cover" }} alt={"Wooden reception desk made by ASAS"} />
                    </div>
                    <div>
                      <div className={"banner-circle position-relative lh-1 d-inline-flex justify-content-center align-items-center rounded-circle z-1"}>
                        <div className={"banner-circle-wrap"}>
                          <TextRing className="banner-rotate-content" label="JOINERY" />
                          <div className={"banner-circle-button position-absolute top-50 start-50 translate-middle lh-1 d-inline-flex justify-content-center align-items-center rounded-circle"}>
                            <span className={"d-inline-flex align-items-center lh-1 tw-text-8 fw-bold text-main-eight-600"}>
                              {COMPANY.stats[1].value}{COMPANY.stats[1].suffix}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img className={"banner-shape-hand position-absolute end-0 z-n1"} src={"/assets/images/shapes/banner-shape-hand.png"} alt={""} />
                    <img className={"banner-shape-hand position-absolute start-0 bottom-0 z-n1"} src={"/assets/images/shapes/banner-line-shape.png"} alt={""} />
                  </div>
                </div>
                <div className={"banner-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"banner-thumb tw-mb-8"}>
                    <img className={"tw-rounded-lg"} src={"/assets/images/asas/joinery-hieroglyph-cabinets.webp"} style={{ width: "100%", height: "auto", aspectRatio: "624 / 717", objectFit: "cover" }} alt={"Custom joinery cabinets with carved relief panels"} />
                  </div>
                  <div className={"banner-counter-wrap bg-black d-flex tw-gap-30 tw-rounded-lg tw-py-12 tw-px-10"}>
                    <div className={"banner-counter-wrapper"}>
                      <h2 className={"banner-counter-title tw-text-14 fw-medium font-heading text-white mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={COMPANY.stats[0].value}></span>
                        {COMPANY.stats[0].suffix}
                      </h2>
                      <p className={"tw-text-base fw-medium text-white text-uppercase"}>
                        {COMPANY.stats[0].label}
                      </p>
                    </div>
                    <div className={"banner-counter-wrapper"}>
                      <h2 className={"banner-counter-title tw-text-14 fw-medium font-heading text-white mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={COMPANY.stats[1].value}></span>
                        {COMPANY.stats[1].suffix}
                      </h2>
                      <p className={"tw-text-base fw-medium text-white text-uppercase"}>
                        {COMPANY.stats[1].label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"about-area pt-120 tw-pb-48"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-6 col-lg-9"}>
              <div className={"about-thumb position-relative z-1 w-100 d-inline-block"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <img className={"tw-rounded-lg"} src={"/assets/images/asas/joinery-lockers.webp"} style={{ width: "100%", height: "auto", aspectRatio: "564 / 700", objectFit: "cover" }} alt={"Wooden locker joinery fitted by ASAS"} />
                <div className={"about-thumb-shape position-absolute end-0"}>
                  <img src={"/assets/images/asas/salon-wood-wall.webp"} style={{ width: "100%", height: "auto", aspectRatio: "354 / 408", objectFit: "cover" }} alt={"Wooden slat wall joinery in a salon"} />
                </div>
                <div className={"banner-circle about-circle bg-white position-relative lh-1 d-inline-flex justify-content-center align-items-center rounded-circle z-1"}>
                  <div className={"banner-circle-wrap"}>
                    <TextRing className="banner-rotate-content" label="JOINERY" />
                    <a href={QUOTE_HREF} aria-label={"Request a quote for joinery"}>
                      <div className={"banner-circle-button about-circle-button position-absolute top-50 start-50 translate-middle lh-1 d-inline-flex justify-content-center align-items-center rounded-circle"}>
                        <span className={"d-inline-flex align-items-center lh-1 tw-text-8 fw-bold text-main-eight-600"}>
                          <i className={"ph ph-arrow-up-right"}></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-6 col-lg-9"}>
              <div className={"about-wrapper tw-ps-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    Joinery · Fit-out works
                  </div>
                  <h2 className={"section-title tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Joinery made to the approved design
                  </h2>
                  <p>
                    {content.intro[0]} {content.intro[1]}
                  </p>
                </div>
                <div className={"about-items-wrap d-flex tw-gap-7"}>
                  <div className={"about-item tw-mb-8 tw-py-10 tw-ps-8 tw-pe-8 tw-rounded-xl animation-item"}>
                    <div className={"d-flex align-items-center tw-gap-3 tw-mb-2 tw-mb-4"}>
                      <div className={"about-icon"}>
                        <span>
                          <img className={"animate__wobble"} src={"/assets/images/icons/asas/one-contract.svg"} width={"45"} height={"45"} alt={""} />
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-xl fw-semibold"}>
                          One contract, every trade
                        </h3>
                      </div>
                    </div>
                    <div>
                      <p className={"mb-0"}>
                        Civil, joinery and all MEP works under one contract, with one point of contact.
                      </p>
                    </div>
                  </div>
                  <div className={"about-item tw-mb-8 tw-py-10 tw-ps-8 tw-pe-8 tw-rounded-xl animation-item"}>
                    <div className={"d-flex align-items-center tw-gap-3 tw-mb-2 tw-mb-4"}>
                      <div className={"about-icon"}>
                        <span>
                          <img className={"animate__wobble"} src={"/assets/images/icons/asas/approved.svg"} width={"45"} height={"45"} alt={""} />
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-xl fw-semibold"}>
                          Authority-approved
                        </h3>
                      </div>
                    </div>
                    <div>
                      <p className={"mb-0"}>
                        Registered with DEWA, Dubai Municipality, Civil Defence and Trakhees.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"about-list tw-mb-24"}>
                  <ul>
                    {content.scope.slice(0, 4).map((item) => (
                      <li key={item} className={"d-inline-flex align-items-center tw-mb-4 tw-gap-2 float-start w-50"}>
                        <span className={"tw-w-5 tw-h-5 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 text-white rounded-circle tw-text-xs"}>
                          <i className={"ph ph-check"}></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={"about-wrap d-flex align-items-center tw-gap-3"}>
                  <div>
                    <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
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
                  <div className={"header-call-item d-flex align-items-center tw-gap-2"}>
                    <div className={"header-call-icon"}>
                      <a className={"tw-w-13 tw-h-13 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 text-white tw-text-2xl rounded-circle hover-bg-heading hover-text-white"} href={"tel:" + PHONE.tel} aria-label={"Call " + PHONE.label}>
                        <i className={"ph ph-phone-call"}></i>
                      </a>
                    </div>
                    <div className={"header-call-number ml-20"}>
                      <p className={"tw-text-sm fw-medium tw-mb-2"} style={{"color":"#5c6672"}}>
                        Call Us
                      </p>
                      <a className={"tw-text-lg fw-semibold text-heading hover-text-main-eight-600"} href={"tel:" + PHONE.tel}>
                        {PHONE.label}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"service-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-6 col-lg-6 col-md-9"}>
              <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-two-600 tw-mb-3 ms-0"}>
                    Fit-out works
                  </div>
                  <h2 className={"section-title text-white tw-text-14 fw-medium tw-char-animation tw-mb-6"}>
                    Joinery is one part of a complete fit-out
                  </h2>
                </div>
              </div>
            </div>
            <div className={"col-xl-6 col-lg-6 col-md-9"}>
              <div className={"service-paragraph"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <p className={"text-white tw-text-sm"}>
                  We deliver joinery for {content.sectors.join(", ").toLowerCase()}. The same contractor handles the trades around it, so every item is planned with the civil and MEP works.
                </p>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {RELATED.map((item, i) => (
              <div key={item.slug} className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"service-wrapper tw-rounded-lg tw-py-10 tw-px-3 tw-mb-8 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String([200, 300, 400, 500, 200, 300][i])}>
                  <div className={"tw-px-4"}>
                    <div className={"service-icon tw-mb-10"}>
                      <span>
                        <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + item.icon + "-white.svg"} width={item.size[0]} height={item.size[1]} alt={""} />
                      </span>
                    </div>
                    <div className={"tw-mb-8"}>
                      <h3 className={"text-white tw-mb-3 tw-text-505"}>
                        <a className={"hover-text-main-two-600"} href={"/services/" + item.slug}>
                          {item.title}
                        </a>
                      </h3>
                      <p className={"text-white tw-text-sm"}>
                        {item.content.summary}
                      </p>
                    </div>
                  </div>
                  <div className={"service-wrap tw-pt-6 tw-ps-4 tw-pe-3 tw-rounded-lg"}>
                    <div className={"service-list tw-mb-10"}>
                      <ul>
                        {item.content.scope.slice(0, 3).map((line) => (
                          <li key={line} className={"text-white tw-text-sm position-relative tw-ps-3 tw-mb-2"}>
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <a className={"service-btn border border-white tw-py-3 tw-px-4 tw-rounded-lg fw-semibold d-flex justify-content-between text-white hover-bg-main-eight-600 hover-text-white hover-border-main-eight-600"} href={"/services/" + item.slug}>
                        View Details
                        <span>
                          <i className={"ph ph-arrow-up-right"} aria-hidden={"true"}></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className={"col-xl-6 col-lg-10 col-md-10"}>
              <div className={"position-relative z-1 tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                <img className={"tw-rounded-md w-100"} src={"/assets/images/asas/kitchen-marble-island.webp"} style={{ width: "100%", height: "auto", aspectRatio: "644 / 499", objectFit: "cover" }} alt={"Kitchen joinery with a marble island"} />
                <div className={"service-thumb-wrap position-absolute bg-main-eight-600 tw-rounded-lg bottom-0 end-0 tw-mb-205 tw-me-205 tw-py-9 tw-px-8"}>
                  <div className={"d-flex justify-content-between tw-mb-8"}>
                    <div>
                      <span className="asas-wordmark">DEWA</span>
                    </div>
                    <div>
                      <span className="asas-wordmark">Dubai Municipality</span>
                    </div>
                  </div>
                  <div className={"tw-mb-8"}>
                    <h4 className={"text-white tw-text-605"}>
                      One contractor for civil, joinery and all MEP trades
                    </h4>
                  </div>
                  <div>
                    <a className={"d-inline-flex align-items-center fw-semibold text-white tw-gap-2"} href={"/services"}>
                      View All Services
                      <span className={"tw-w-10 tw-h-10 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-heading rounded-circle tw-text-2xl hover-border-main-600"}>
                        <i className={"ph ph-arrow-up-right"}></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"expert-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-9 col-lg-10"}>
              <div className={"section-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  How we work
                </div>
                <h2 className={"section-title tw-text-14 fw-medium tw-char-animation tw-mb-6"}>
                  From site visit to handover, one team runs your joinery package
                </h2>
              </div>
            </div>
          </div>
          <div className={"row align-items-center"}>
            <div className={"col-xl-4 col-lg-6"}>
              <div className={"tw-mt-25"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                {STEPS.slice(0, 3).map((step, i) => (
                  <div key={step.title} className={"expert-item d-flex tw-gap-4 tw-mb-10 animation-item"}>
                    <div>
                      <span className={"tw-w-122 tw-h-122 animate__wobble"}>
                        <img src={"/assets/images/icons/asas/" + step.icon + ".svg"} width={"49"} height={"49"} alt={""} />
                      </span>
                    </div>
                    <div className={"tw-mt-4"}>
                      <h3 className={"tw-text-xl tw-mb-3"}>
                        {String(i + 1).padStart(2, "0")}. {step.title}
                      </h3>
                      <p>
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={"col-xl-4 col-lg-6"}>
              <div className={"expert-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <img src={"/assets/images/asas/retail-boutique-cabinets.webp"} style={{ width: "100%", height: "auto", aspectRatio: "480 / 592", objectFit: "cover" }} alt={"Boutique cabinets made by ASAS"} />
              </div>
            </div>
            <div className={"col-xl-4 col-lg-6"}>
              <div className={"expert-right tw-ms-16 tw-mt-25"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                {STEPS.slice(3).map((step, i) => (
                  <div key={step.title} className={"expert-item d-flex tw-gap-4 tw-mb-10 animation-item"}>
                    <div>
                      <span className={"tw-w-122 tw-h-122"}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + step.icon + ".svg"} width={"49"} height={"49"} alt={""} />
                      </span>
                    </div>
                    <div className={"tw-mt-4"}>
                      <h3 className={"tw-text-xl tw-mb-3"}>
                        {String(i + 4).padStart(2, "0")}. {step.title}
                      </h3>
                      <p>
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"expert-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/expert-shape1.png"} alt={""} />
          <img className={"expert-shape-2 position-absolute z-n1"} src={"/assets/images/shapes/expert-shape2.png"} alt={""} />
        </div>
      </section>
      <section className={"counter-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-12"}>
              <div className={"text-center tw-mb-12"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <span className={"tw-text-505 font-heading fw-normal"}>
                  {COMPANY.tagline}.
                </span>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"counter-wrapper d-flex align-items-center justify-content-between"}>
                {COMPANY.stats.map((stat, i) => (
                  <div key={stat.label} className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String([200, 300, 300, 400][i])}>
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
        </div>
      </section>
      <div className={"video-area video-area-newss"}>
        <div className={"container tw-container-1750-px"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-12"}>
              <div className={"video-bg text-center position-relative"}>
                <img className={"tw-rounded-xl"} src={"/assets/images/asas/kitchen-living.webp"} style={{ width: "100%", height: "auto", aspectRatio: "1720 / 702", objectFit: "cover" }} alt={"Kitchen and living room joinery by ASAS"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={"project-area pb-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-end"}>
            <div className={"col-xl-7 col-lg-8"}>
              <div className={"section-wrapper tw-mb-10"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  {content.projectsHeading}
                </div>
                <h2 className={"section-title tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  Joinery is delivered as part of fit-outs like these.
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"project-widgets hover__widget p-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                {PROJECT_ROWS.map((project, i) => (
                  <div key={project.name} className={"project-item " + (i === 0 ? "current " : "") + "wt-widget__item hover__reveal-item"}>
                    <a className={"d-block"} href={"/projects"}>
                      <div className={"project-content d-flex align-items-center justify-content-between"}>
                        <div className={"project-left d-flex align-items-center tw-gap-9 "}>
                          <h3 className={"project-title text-heading tw-text-110 fw-medium text-stroke-black tw-transition-3"}>
                            {String(i + 1).padStart(2, "0")}
                          </h3>
                          <h3 className={"project-tag text-capitalize tw-text-110 fw-medium text-heading"}>
                            {project.name}
                          </h3>
                        </div>
                        <div className={"project-right d-flex align-items-center tw-gap-48"}>
                          <div>
                            <p className={"text-body"}>
                              Fit-out project · {project.note}
                            </p>
                          </div>
                          <div className={"project-action"}>
                            <span className={"tw-w-12 tw-h-12 lh-1 d-inline-flex justify-content-center align-items-center bg-main-eight-600 text-white tw-text-2xl rounded-circle tw-transition-3"}>
                              <i className={"ph ph-arrow-up-right"} aria-hidden={"true"}></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className={"hover__reveal-bg bg-img"} data-background-image={["/assets/images/asas/retail-boutique-cabinets.webp", "/assets/images/asas/salon-wood-wall.webp", "/assets/images/asas/joinery-hieroglyph-cabinets.webp", "/assets/images/asas/joinery-lockers.webp"][i]} role={"img"} aria-label={project.name + " fit-out photo"}></div>
                  </div>
                ))}
                <span className={"active-bg"}></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"project-bg-shape position-absolute start-0 z-n1"} src={"/assets/images/shapes/project-bg-shape.png"} alt={""} />
          <img className={"project-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/project-shape1.png"} alt={""} />
        </div>
      </section>
      <section className={"cta-area position-relative z-1 tw-rounded-lg"}>
        <div className={"container tw-container-1750-px gx-0"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-5 col-lg-6"}>
              <div className={"cta-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-two-600 tw-mb-3 ms-0"}>
                    Request a quote
                  </div>
                  <h2 className={"section-title tw-text-14 text-white fw-semibold tw-char-animation tw-mb-6"}>
                    Planning a fit-out with custom joinery? Book a site visit.
                  </h2>
                </div>
                <div className={"cta-button d-inline-block"}>
                  <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-white text-heading tw-rounded-4xl position-relative z-1"}>
                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
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
            <div className={"col-xl-4 d-none d-xl-block"}>
              <div className={"cta-thumb"} data-aos={"fade-down"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <img src={"/assets/images/asas/commercial-kitchen.webp"} style={{ width: "100%", height: "auto", aspectRatio: "590 / 723", objectFit: "cover" }} alt={"Commercial kitchen fitted out by ASAS"} />
              </div>
            </div>
            <div className={"col-xl-3 col-lg-6"}>
              <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                <div className={"cta-review d-flex align-items-center tw-gap-3"}>
                  <div>
                    <div>
                      <span className={"fw-medium tw-text-sm tw-mb-2"} style={{"color":"#B2B2B2"}}>
                        APPROVED BY
                      </span>
                    </div>
                    <div className={"d-flex tw-gap-3"}>
                      <div>
                        <h3 className={"fw-bold tw-text-base text-white"}>
                          {COMPANY.approvals.join(" · ")}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a className={"tw-w-101 tw-h-101 lh-1 d-inline-flex justify-content-center align-items-center bg-main-eight-600 text-white rounded-circle"} href={QUOTE_HREF} aria-label={"Request a quote"}>
                      <i className={"ph ph-arrow-up-right"}></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"text-end"}>
                <img className={"cta-shape"} src={"/assets/images/shapes/cta-shape.png"} alt={""} />
              </div>
            </div>
          </div>
        </div>
        <div className={"cta-animated-title position-absolute start-50 translate-middle-x bottom-0 z-n1 tw-mb-4"}>
          <h2 className={"animated-title fw-semibold text-capitalize"} aria-hidden={"true"}>
            JOINERY & FIT-OUT
          </h2>
        </div>
      </section>
      <section className={"testimonial-area pt-120 tw-pb-15 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-8"}>
              <div className={"section-wrapper text-center tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  Our commitments
                </div>
                <h2 className={"section-title tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  Quality and safety on every joinery package
                </h2>
              </div>
            </div>
          </div>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-12"}>
              <div className={"testimonial-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"testimonial-active swiper-container"}>
                  <div className={"testimonial-swiper-wrapper swiper-wrapper"}>
                    {COMMITMENTS.map((item, i) => (
                      <div key={item.title} className={"testimonial-wrapper tw-py-9 tw-px-11 " + (i === 0 ? "tw-rounded-lg" : "tw-rounded-2xl") + " swiper-slide"}>
                        <div className={"d-flex align-items-center justify-content-between tw-mb-7"}>
                          <div>
                            <span>
                              <img src={"/assets/images/icons/asas/" + item.icon + ".svg"} width={"68"} height={"56"} alt={""} />
                            </span>
                          </div>
                          <div>
                            <span className={"font-heading tw-text-sm fw-semibold text-uppercase text-main-eight-600"}>
                              {item.by}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className={"tw-text-2xl tw-mb-6"}>
                            {item.title}
                          </h3>
                          <p className={"tw-text-lg tw-mb-16"}>
                            {item.text}
                          </p>
                        </div>
                        <div className={"d-flex align-items-center tw-gap-4"}>
                          <div>
                            <img src={"/assets/images/thumbs/testi-img" + (i + 1) + ".png"} alt={i === 0 ? "ASAS Alenjaz MEP engineer" : "ASAS Alenjaz site foreman"} />
                          </div>
                          <div>
                            <h4 className={"tw-text-base"}>
                              {COMPANY.short}
                            </h4>
                            <p>
                              {item.by}
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
        </div>
        <div>
          <img className={"testimonial-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/testimonial-shape1.png"} alt={""} />
        </div>
      </section>
      <div className={"brand-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"d-flex justify-content-between tw-mb-14"}>
                <div>
                  <img src={"/assets/images/shapes/brand-line-shape1.png"} alt={""} />
                </div>
                <div className={"text-center tw-w-660-px"}>
                  <p>
                    Approved by DEWA, Dubai Municipality, Civil Defence and Trakhees, and chosen by clients including Atlas Copco, Aramex and Bactiguard AB.
                  </p>
                </div>
                <div>
                  <img src={"/assets/images/shapes/brand-line-shape2.png"} alt={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"container tw-container-1460-px"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"brand-slider"}>
                <div className={"brand-slider-active swiper-container"}>
                  <div className={"swiper-wrapper"}>
                    <div className={"brand-item swiper-slide"}>
                      <div className={"brand-thumb"}>
                        <span className="asas-wordmark">DEWA</span>
                      </div>
                    </div>
                    <div className={"brand-item swiper-slide"}>
                      <div className={"brand-thumb"}>
                        <span className="asas-wordmark">Dubai Municipality</span>
                      </div>
                    </div>
                    <div className={"brand-item swiper-slide"}>
                      <div className={"brand-thumb"}>
                        <span className="asas-wordmark">Civil Defence</span>
                      </div>
                    </div>
                    <div className={"brand-item swiper-slide"}>
                      <div className={"brand-thumb"}>
                        <span className="asas-wordmark">Trakhees</span>
                      </div>
                    </div>
                    <div className={"brand-item swiper-slide"}>
                      <div className={"brand-thumb"}>
                        <span className="asas-wordmark">Atlas Copco</span>
                      </div>
                    </div>
                    <div className={"brand-item swiper-slide"}>
                      <div className={"brand-thumb"}>
                        <span className="asas-wordmark">Aramex</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceExtras slug="joinery" />

      <section className={"contact-area pb-120"}>
        <div className={"container tw-container-1750-px"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"contact-wrapper bg-main-eight-600 tw-p-10 tw-rounded-2xl"}>
                <div className={"row align-items-center"}>
                  <div className={"col-xl-4 col-lg-6"}>
                    <div className={"contact-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/asas/fitout-media-wall.webp"} style={{ width: "100%", height: "auto", aspectRatio: "493 / 632", objectFit: "cover" }} alt={"Media wall joinery by ASAS"} />
                    </div>
                  </div>
                  <div className={"col-xl-4 col-lg-6"}>
                    <div className={"bg-white tw-p-10 tw-rounded-2xl pe-0 pb-0 overflow-hidden"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      <div className={"section-wrapper tw-mb-10"}>
                        <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                          Contact us
                        </div>
                        <h2 className={"section-title tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                          Start your joinery project
                        </h2>
                      </div>
                      <div>
                        <span className={"tw-mb-5"}>
                          CONTACT US:
                        </span>
                        <a className={"tw-text-2xl fw-bold text-heading d-block tw-mb-3 hover-text-main-eight-600 text-break"} href={"mailto:" + COMPANY.email}>
                          {COMPANY.email}
                        </a>
                        <a className={"tw-text-2xl fw-bold text-heading d-block hover-text-main-eight-600"} href={"tel:" + PHONE.tel}>
                          {PHONE.label}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"col-xl-4 col-lg-9"}>
                    <div className={"contact-form"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                      <h3 className={"text-white tw-text-2xl tw-mb-8 tw-pe-4"}>
                        Send us your drawings or book a site visit
                      </h3>
                      <div>
                        <p className={"text-white tw-mb-8"}>
                          Tell us about the space, the joinery you need and your timeline. We start every quotation with a site visit, and reply by phone or email.
                        </p>
                        <div className={"cta-button d-inline-block"}>
                          <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-white text-heading tw-rounded-4xl position-relative z-1"}>
                            <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                              <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                                <span className={"overflow-hidden position-relative d-inline-flex"}>
                                  <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                                  <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
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
                        <p className={"text-white tw-mt-6 mb-0"}>
                          Or call <a className={"text-white fw-semibold text-decoration-underline"} href={"tel:" + COMPANY.phones[1].tel}>{COMPANY.phones[1].label}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"blog-area tw-pb-23"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-7 col-lg-8 col-md-8"}>
              <div className={"section-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  Our projects
                </div>
                <h2 className={"section-title tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  More interiors we have delivered across Dubai
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {MORE_PROJECTS.map((project, i) => (
              <div key={project.sn} className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper tw-me-4 tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-9"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-thumb" + (i + 1) + ".jpg"} alt={project.name + " fit-out by ASAS Alenjaz"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-thumb" + (i + 1) + ".jpg"} alt={""} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/projects"} aria-label={"View " + project.name + " and other projects"}></a>
                  </div>
                  <div>
                    <div className={"blog-meta tw-mb-8"}>
                      <ul className={"d-flex align-items-center tw-gap-5 flex-wrap"}>
                        <li className={"learning tw-rounded-md text-main-eight-600 tw-text-sm fw-medium tw-px-4 tw-py-1 hover-bg-main-eight-600 hover-text-white"}>
                          {project.sectorLabel.toUpperCase()}
                        </li>
                        <li>
                          {project.location}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className={"tw-text-2xl tw-mb-6"}>
                        <a className={"hover-text-main-eight-600"} href={"/projects"}>
                          {project.name}
                        </a>
                      </h3>
                      <p>
                        {project.type} fit-out in {project.location}, one of {COMPANY.stats[1].value}{COMPANY.stats[1].suffix} projects on our list.
                      </p>
                    </div>
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
