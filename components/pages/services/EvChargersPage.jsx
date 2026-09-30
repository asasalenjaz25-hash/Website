// EV Charger Installation (/services/ev-chargers). Built on the full index-2
// template layout: hero slider, counters, progress bars, brand and testimonial
// sliders, video popup and every image are kept; only the words, links and lists
// are ASAS content. Template photos are placeholders until ASAS supplies project
// photos (see design-system/image-manifest/services-c.md).
import PageShell from "@/components/PageShell";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";

const SLUG = "ev-chargers";
const service = SERVICES.find((s) => s.slug === SLUG);
const content = SERVICE_CONTENT[SLUG];
const VIDEO_URL = "https://www.youtube.com/watch?v=Fvae8nxzVz4"; // template placeholder video
const bySn = (sn) => PROJECTS.find((p) => p.sn === sn);

// The four real car-charger projects on the ASAS project list.
const EV_PROJECTS = PROJECTS.filter((p) => p.sector === "ev");
const EV_VILLAS = EV_PROJECTS.filter((p) => p.name.startsWith("Villa"));
const EV_COMMUNITIES = EV_PROJECTS.filter((p) => !p.name.startsWith("Villa"));
const pct = (n) => String(Math.round((n / EV_PROJECTS.length) * 100));

const FEATURES = [
  // icon = ASAS library icon for the item.
  { title: "DEWA-approved", text: "We are approved by the Dubai Electricity and Water Authority, and install chargers to DEWA requirements.", icon: "certificate" },
  { title: "Residential communities", text: "Chargers installed for communities including " + EV_COMMUNITIES.map((p) => p.name).join(", ") + ".", icon: "residential-tower" },
  { title: "Private villas", text: "Home chargers for villa owners, such as " + EV_VILLAS[0].name + " in " + EV_VILLAS[0].location + ".", icon: "villa" },
];

// Services that sit next to EV charging (same Specialist group + the electrical works that feed it).
const RELATED_ICONS = { electrical: "electrical", "villa-works": "villa", "planning-architecture": "planning", "fit-out": "fit-out" };
const RELATED = ["electrical", "villa-works", "planning-architecture", "fit-out"]
  .map((slug) => ({ ...SERVICES.find((s) => s.slug === slug), content: SERVICE_CONTENT[slug], icon: RELATED_ICONS[slug] }));

// In-house roles from the Man Power page (content.md §1.4). No names.
const TEAM = [
  { role: "MEP Engineers", count: 2 },
  { role: "Foremen", count: 2, note: "Electrical, plumbing & HVAC" },
  { role: "Technicians", count: 12, note: "Electrical, plumbing & HVAC" },
  { role: "Helpers", count: 7, note: "Electrical, plumbing & HVAC" },
];

// Testimonial slider -> how we work (three slides: execution and handover together).
const STEPS = [
  { title: PROCESS[0].title, text: "We visit the community or villa, check the available power supply and review the authority requirements." },
  { title: PROCESS[1].title, text: PROCESS[1].text },
  { title: PROCESS[2].title + " & handover", text: "Our in-house team installs the chargers and the electrical supply works, then tests everything before handover." },
];

// Blog cards -> a real EV project, a related villa project and the electrical service.
const HIGHLIGHTS = [
  { badge: "EV", badgeSub: "Charger", title: EV_VILLAS[0].name, place: EV_VILLAS[0].location, tag: EV_VILLAS[0].type, text: "EV charger supply and installation for a private villa.", href: "/projects" },
  { badge: "SB", badgeSub: "Villa", title: bySn(77).name, place: bySn(77).location, tag: bySn(77).type, text: "A villa service block, one of the villa projects we deliver across Dubai.", href: "/services/villa-works" },
  { badge: "MEP", badgeSub: "Service", title: "Electrical Works", place: "Dubai & the UAE", tag: "MEP works", text: SERVICE_CONTENT.electrical.summary, href: "/services/electrical" },
];

export default function EvChargersPage() {

  return (
    <PageShell>
      <section className={"banner-nine-area position-relative z-1"}>
        {/* The hero slider loops by cloning slides, so the page's single h1 lives outside it. */}
        <h1 className="visually-hidden">EV Charger Installation in Dubai · ASAS Alenjaz</h1>
        <div className={"banner-nine-wrapper position-relative"}>
          <div className={"swiper-container banner-nine-active"}>
            <div className={"swiper-wrapper"}>
              <div className={"swiper-slide"}>
                <div className={"banner-nine-height"}>
                  <div className={"banner-nine-bg bg-img"} data-background-image={"/assets/images/thumbs/banner-nine-bg1.jpg"} role={"img"} aria-label={"EV charger installed by ASAS Alenjaz at a residential community"}></div>
                  <div className={"container tw-container-1750-px"}>
                    <div className={"row"}>
                      <div className={"col-xl-6"}>
                        <div className={"banner-nine-content"}>
                          <div className={"banner-nine-title-box"}>
                            <span className={"d-block font-heading fw-semibold text-uppercase text-main-two-600 tw-mb-4"}>
                              {service.group} · {service.title}
                            </span>
                            <h2 className={"banner-nine-title text-white tw-text-34 text-capitalize fw-bold tw-mb-11"}>
                              {service.title}
                            </h2>
                            <p className={"text-white tw-text-lg tw-mb-11"}>
                              {content.summary}
                            </p>
                          </div>
                          <div className={"banner-nine-btn-box d-inline-flex justify-content-center tw-gap-205"}>
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
                            <div>
                              <a href={"/projects"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-white text-white tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                                      <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      View EV Projects
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
                  <div>
                    <img className={"banner-nine-bubble-1 position-absolute start-0 top-0"} src={"/assets/images/shapes/banner-nine-bubble1.png"} alt={""} />
                    <img className={"banner-nine-bubble-2 position-absolute bottom-0"} src={"/assets/images/shapes/banner-nine-bubble2.png"} alt={""} />
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"banner-nine-height"}>
                  <div className={"banner-nine-bg bg-img"} data-background-image={"/assets/images/thumbs/banner-three-bg.jpg"} role={"img"} aria-label={"Villa EV charger installed by ASAS Alenjaz"}></div>
                  <div className={"container tw-container-1750-px"}>
                    <div className={"row"}>
                      <div className={"col-xl-7"}>
                        <div className={"banner-nine-content"}>
                          <div className={"banner-nine-title-box"}>
                            <span className={"d-block font-heading fw-semibold text-uppercase text-main-two-600 tw-mb-4"}>
                              DEWA-approved contractor
                            </span>
                            <h2 className={"banner-nine-title text-white tw-text-34 text-capitalize fw-bold tw-mb-11"}>
                              Chargers for communities and villas
                            </h2>
                            <p className={"text-white tw-text-lg tw-mb-11"}>
                              {content.intro[1]}
                            </p>
                          </div>
                          <div className={"banner-nine-btn-box d-inline-flex justify-content-center tw-gap-205"}>
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
                            <div>
                              <a href={"/projects"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-white text-white tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                                      <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      View EV Projects
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
                  <div>
                    <img className={"banner-nine-bubble-1 position-absolute start-0 top-0"} src={"/assets/images/shapes/banner-nine-bubble1.png"} alt={""} />
                    <img className={"banner-nine-bubble-2 position-absolute bottom-0"} src={"/assets/images/shapes/banner-nine-bubble2.png"} alt={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"banner-nine-arrow-box"}>
            <button type={"button"} className={"banner-nine-prev"} tabIndex={"0"} aria-label={"Previous slide"}>
              <i className={"ph ph-arrow-left"}></i>
            </button>
            <button type={"button"} className={"banner-nine-next"} tabIndex={"0"} aria-label={"Next slide"}>
              <i className={"ph ph-arrow-right"}></i>
            </button>
          </div>
          <div className={"banner-nine-dots dots-color swiper-pagination-clickable swiper-pagination-bullets"}>
            <span className={"swiper-pagination-bullet"} tabIndex={"0"} role={"button"} aria-label={"Go to slide 1"}></span>
            <span className={"swiper-pagination-bullet"} tabIndex={"0"} role={"button"} aria-label={"Go to slide 2"}></span>
            <span className={"swiper-pagination-bullet swiper-pagination-bullet-active"} tabIndex={"0"} role={"button"} aria-label={"Go to slide 3"}></span>
          </div>
        </div>
      </section>
      <section className={"about-nine-area py-120"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-5 col-lg-5"}>
              <div className={"about-nine-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-nine-thumb1.jpg"} alt={"ASAS Alenjaz technician installing a wall-mounted EV charger"} />
              </div>
            </div>
            <div className={"col-xl-7 col-lg-7"}>
              <div className={"about-nine-wrapper tw-ms-6"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"section-eight-wrapper tw-mb-10"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    About this service
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    EV chargers, installed with the electrical works that feed them
                  </h2>
                  <p className={"tw-me-10"}>
                    {content.intro[0]} {content.intro[1]}
                  </p>
                </div>
                <div className={"about-nine-wrap d-flex align-items-center tw-mb-10"}>
                  <div className={"about-nine-item d-flex align-items-center tw-gap-3 animation-item"}>
                    <div className={"about-nine-icon"}>
                      <span>
                        <img className={"animate__wobble"} src={"/assets/images/icons/asas/approved.svg"} width={"66"} height={"66"} alt={""} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-xl fw-medium"}>
                        DEWA-approved electrical contractor
                      </h3>
                    </div>
                  </div>
                  <div className={"about-nine-item d-flex align-items-center tw-gap-3 animation-item"}>
                    <div className={"about-nine-icon"}>
                      <span>
                        <img className={"animate__wobble"} src={"/assets/images/icons/asas/villa.svg"} width={"66"} height={"66"} alt={""} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-xl fw-medium"}>
                        Communities & private villas
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={"about-nine-button-wrap d-inline-flex justify-content-center tw-gap-205"}>
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
                  <div>
                    <a href={"/services/electrical"} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                            <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            Electrical Works
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"row align-items-center"}>
            <div className={"col-xl-5 col-lg-5"}>
              <div className={"about-nine-bottom"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <h4 className={"tw-text-505 tw-mb-15"}>
                  Supply, installation and testing by one DEWA-approved team.
                </h4>
                <div className={"about-nine-list"}>
                  <ul className={"d-flex tw-gap-8 flex-wrap"}>
                    {[content.scope[0], content.scope[2]].map((item) => (
                      <li key={item} className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-3"}>
                        <span className={"d-inline-block lh-1 tw-text-xl text-main-eight-600"}>
                          <i className={"ph ph-check"}></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className={"d-flex tw-gap-8 flex-wrap"}>
                    {[content.scope[3], content.scope[4]].map((item) => (
                      <li key={item} className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-3"}>
                        <span className={"d-inline-block lh-1 tw-text-xl text-main-eight-600"}>
                          <i className={"ph ph-check"}></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={"col-xl-7 col-lg-7"}>
              <div className={"about-nine-thumb-two"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-nine-thumb2.jpg"} alt={"Row of EV chargers in a residential community car park"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"feature-nine-area tw-pb-22"}>
        <div className={"container"}>
          <div className={"row"}>
            {FEATURES.map((item, i) => (
              <div key={item.title} className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-nine-wrapper d-flex tw-gap-4 animation-item tw-mb-705 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"feature-nine-icon"}>
                    <span className={"tw-w-122 tw-h-122"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + item.icon + ".svg"} width={"49"} height={"49"} alt={""} />
                    </span>
                  </div>
                  <div className={"feature-nine-content"}>
                    <h2 className={"tw-text-xl tw-mb-3"}>
                      {item.title}
                    </h2>
                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={"service-nine-area bg-main-eight-600 tw-rounded-2xl pt-120 tw-pb-22 tw-mx-205 position-relative z-1"}>
        <div className={"container tw-container-1480-px"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-6 col-lg-9"}>
              <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <span className={"section-eight-subtitle text-main-eight-600 text-white fw-medium text-uppercase tw-mb-2"}>
                  Related services
                </span>
                <h2 className={"section-eight-title fw-medium tw-mb-6 text-white tw-char-animation"}>
                  Other work from the same in-house team
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {RELATED.map((item, i) => (
              <div key={item.slug} className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"service-nine-wrapper tw-py-10 tw-px-705 tw-mb-705 tw-rounded-xl animation-item" + (i % 2 === 1 ? " tw-mt-11" : "")} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"service-nine-icon tw-mb-4"}>
                    <span>
                      <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + item.icon + "-white.svg"} width={"89"} height={"89"} alt={""} />
                    </span>
                  </div>
                  <div className={"service-nine-content"}>
                    <h3 className={"tw-text-7 fw-bold text-white tw-mb-4"}>
                      <a className={"hover-text-white hover-underline"} href={"/services/" + item.slug}>
                        {item.title}
                      </a>
                    </h3>
                    <div className={"service-nine-list tw-mb-6"}>
                      <ul>
                        {item.content.scope.slice(0, 3).map((line) => (
                          <li key={line} className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                            <span className={"d-inline-block lh-1 text-white"}>
                              <i className={"ph ph-check"}></i>
                            </span>
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={"service-nine-button"}>
                      <a href={"/services/" + item.slug} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                              <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              View Details
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
        <div>
          <img className={"position-absolute start-0 bottom-0 z-n1"} src={"/assets/images/shapes/service-nine-shape1.png"} alt={""} />
          <img className={"position-absolute end-0 top-0 z-n1"} src={"/assets/images/shapes/service-nine-shape2.png"} alt={""} />
        </div>
      </section>
      <section className={"expert-nine-area py-120 @@experelevenClass"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-6 col-lg-6"}>
              <div className={"expert-nine-left tw-me-20"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"row"}>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"expert-nine-counter tw-mb-10 tw-mb-20"}>
                      <h2 className={"expert-nine-title tw-text-19 fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={COMPANY.stats[1].value}></span>
                        {COMPANY.stats[1].suffix}
                      </h2>
                      <p className={"expert-nine-paragraph"}>
                        Projects on our list since {COMPANY.founded}, from fit-outs to EV chargers.
                      </p>
                      <h3 className={"expert-nine-subtitle tw-text-xl fw-semibold"}>
                        {COMPANY.stats[1].label}
                      </h3>
                    </div>
                  </div>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"expert-nine-counter tw-mb-10 tw-mb-20"}>
                      <h2 className={"expert-nine-title tw-text-19 fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={COMPANY.stats[2].value}></span>
                        {COMPANY.stats[2].suffix}
                      </h2>
                      <p className={"expert-nine-paragraph"}>
                        MEP engineers, foremen, technicians and helpers in our in-house team.
                      </p>
                      <h3 className={"expert-nine-subtitle tw-text-xl fw-semibold"}>
                        {COMPANY.stats[2].label}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={"tw-mb-605"}>
                  <div>
                    <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                      EV projects in residential communities
                    </span>
                  </div>
                  <div className={"expert-nine-progress-container progress-container"} data-percentage={pct(EV_COMMUNITIES.length)}>
                    <div className={"progress active bg-main-eight-600"}></div>
                    <div className={"percentage active bg-main-eight-600"}>
                      0%
                    </div>
                  </div>
                </div>
                <div className={"tw-mb-605"}>
                  <div>
                    <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                      EV projects at private villas
                    </span>
                  </div>
                  <div className={"expert-nine-progress-container progress-container"} data-percentage={pct(EV_VILLAS.length)}>
                    <div className={"progress active bg-main-eight-600"}></div>
                    <div className={"percentage active bg-main-eight-600"}>
                      0%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-6 col-lg-6"}>
              <div className={"expert-nine-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"section-eight-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Why ASAS Alenjaz
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    A DEWA-approved contractor for your chargers
                  </h2>
                  <p className={"tw-me-10"}>
                    Since {COMPANY.founded}, ASAS Alenjaz has delivered electrical and MEP works across the UAE. We handle the charger installation and its electrical supply works with our own team, so one contractor is responsible from survey to testing.
                  </p>
                </div>
                <div className={"expert-nine-list d-flex tw-mb-10"}>
                  <ul>
                    <li className={"d-inline-flex align-items-center tw-gap-3 tw-mb-3 text-heading fw-medium"}>
                      <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                        <i className={"ph-bold ph-check-circle"}></i>
                      </span>
                      Charger and electrical supply works in one contract
                    </li>
                    <li className={"d-inline-flex align-items-center tw-gap-3 text-heading fw-medium"}>
                      <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                        <i className={"ph-bold ph-check-circle"}></i>
                      </span>
                      Installed to DEWA requirements and tested before handover
                    </li>
                  </ul>
                </div>
                <div className={"expert-nine-button"}>
                  <a href={"/about"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
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
      <div className={"brand-eight-area pb-120 @@brandeightClass"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xxl-12"}>
              <div className={"brand-eight-slider"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"brand-eight-active swiper-container"}>
                  <div className={"swiper-wrapper"}>
                    <div className={"brand-eight-item swiper-slide"}>
                      <div className={"brand-eight-thumb"}>
                        <img src={"/assets/images/thumbs/brand-eight-thumb1.png"} alt={"DEWA logo"} />
                      </div>
                    </div>
                    <div className={"brand-eight-item swiper-slide"}>
                      <div className={"brand-eight-thumb"}>
                        <img src={"/assets/images/thumbs/brand-eight-thumb2.png"} alt={"Dubai Municipality logo"} />
                      </div>
                    </div>
                    <div className={"brand-eight-item swiper-slide"}>
                      <div className={"brand-eight-thumb"}>
                        <img src={"/assets/images/thumbs/brand-eight-thumb3.png"} alt={"Civil Defence logo"} />
                      </div>
                    </div>
                    <div className={"brand-eight-item swiper-slide"}>
                      <div className={"brand-eight-thumb"}>
                        <img src={"/assets/images/thumbs/brand-eight-thumb4.png"} alt={"Trakhees logo"} />
                      </div>
                    </div>
                    <div className={"brand-eight-item swiper-slide"}>
                      <div className={"brand-eight-thumb"}>
                        <img src={"/assets/images/thumbs/brand-eight-thumb5.png"} alt={"Sustainable City logo"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={"team-nine-area pt-120 tw-pb-22 position-relative z-1 tw-mx-205"}>
        <div className={"container tw-container-1480-px"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-7 col-lg-9"}>
              <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                  our in-house team
                </span>
                <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                  {COMPANY.stats[2].value} people of our own carry out the work
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {TEAM.map((member, i) => (
              <div key={member.role} className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-nine-wrapper" + (i % 2 === 1 ? " tw-mt-122" : "") + " tw-rounded-lg bg-white text-center tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"team-four-thumb team-nine-thumb position-relative z-1 tw-mb-6"}>
                    <a className={"d-block"} href={"/about"} aria-label={"About our team: " + member.role}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-nine-thumb" + (i + 1) + ".png"} alt={["ASAS Alenjaz MEP engineer on site", "ASAS Alenjaz foreman on site", "ASAS Alenjaz technician at work", "ASAS Alenjaz helper at work"][i]} />
                    </a>
                  </div>
                  <div>
                    <h3 className={"team-four-title tw-text-605 fw-bold font-rethink tw-mb-1"}>
                      <a className={"hover-text-main-eight-600"} href={"/about"}>
                        {member.count} {member.role}
                      </a>
                    </h3>
                    <p className={"team-four-paragraph"}>
                      {member.note || "In-house"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img className={"team-nine-shape-1 position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/team-nine-shape1.png"} alt={""} />
          <img className={"team-nine-shape-1 position-absolute top-0 end-0 z-n1"} src={"/assets/images/shapes/team-nine-shape2.png"} alt={""} />
        </div>
      </section>
      <div className={"video-area video-nine-area mb-0"}>
        <div className={"container-fluid gx-0"}>
          <div className={"row justify-content-center gx-0"}>
            <div className={"col-xl-12 gx-0"}>
              <div className={"video-bg video-nine-bg text-center position-relative"}>
                <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/video-nine-bg.jpg"} alt={"EV charger installation walkthrough by ASAS Alenjaz"} />
                <div className={"video-button video-nine-button position-absolute start-50 translate-middle"}>
                  <a className={"video-btn open-popup tw-w-28 tw-h-28 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-white bg-main-eight-600 tw-text-8 position-relative z-1"} href={VIDEO_URL} data-fancybox={"gallery"} data-caption={""} aria-label={"Play video"}>
                    <i className={"ph-bold ph-play"}></i>
                    <span className={"ripple"}></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={"project-nine-area py-120 project-nine-panel-area"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-7 col-lg-9"}>
              <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                  {content.projectsHeading}
                </span>
                <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                  Chargers we have installed
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              {EV_COMMUNITIES.slice(0, 3).map((project, i) => (
                <div key={project.sn} className={"row project-nine-panel" + (i > 0 ? " mt-30" : "")}>
                  <div className={"col"}>
                    <div className={"project-nine-thumb position-relative z-1"}>
                      <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/project-nine-thumb" + (i + 1) + ".jpg"} alt={"EV chargers at " + project.name + ", " + project.location} />
                      <div className={"project-nine-content position-absolute bottom-0 start-0 tw-mb-705 tw-ms-705 bg-white tw-rounded-xl tw-px-11 tw-pt-15 tw-pb-13"}>
                        <span className={"text-main-eight-600 tw-mb-4"}>
                          #EV charging · {project.location}
                        </span>
                        <h3 className={"tw-text-7"}>
                          <a href={"/projects"}>{project.name}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={"testimonial-nine-area py-120 tw-mx-205"}>
        <div className={"container-fluid gx-0"}>
          <div className={"row gx-0"}>
            <div className={"col-xl-5"}>
              <div className={"testimonial-nine-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-eight-wrapper tw-mb-10"}>
                  <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                    How we work
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    From site visit to a tested, working charger
                  </h2>
                </div>
                <div className={"d-flex tw-gap-6 tw-mb-12"}>
                  <div className={"testimonial-nine-img"}>
                    <img className={""} src={"/assets/images/thumbs/testimonial-nine-img1.png"} alt={"ASAS Alenjaz MEP engineer"} />
                  </div>
                  <div className={"testimonial-nine-img"}>
                    <img className={""} src={"/assets/images/thumbs/testimonial-nine-img2.png"} alt={"ASAS Alenjaz electrical foreman"} />
                  </div>
                  <div className={"testimonial-nine-img"}>
                    <img className={""} src={"/assets/images/thumbs/testimonial-nine-img3.png"} alt={"ASAS Alenjaz technician"} />
                  </div>
                </div>
                <div className={"d-flex justify-content-between"}>
                  <div className={"testimonial-nine-arrow d-flex tw-gap-5"}>
                    <button type={"button"} className={"slider-prev"} aria-label={"Previous step"}>
                      <i className={"ph ph-arrow-left"}></i>
                    </button>
                    <button type={"button"} className={"slider-next"} aria-label={"Next step"}>
                      <i className={"ph ph-arrow-right"}></i>
                    </button>
                  </div>
                  <div>
                    <span>
                      <img src={"/assets/images/shapes/google.png"} alt={"DEWA logo"} />
                    </span>
                    <div className={"d-flex align-items-center tw-gap-2"}>
                      <h3 className={"tw-text-lg fw-semibold"}>
                        Approved by
                      </h3>
                      <p>
                        {COMPANY.approvals.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-7"}>
              <div className={"testimonial-nine-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"testimonial-nine-active swiper-container"}>
                  <div className={"testimonial-nine-swiper-wrapper swiper-wrapper"}>
                    {STEPS.map((step, i) => (
                      <div key={step.title} className={"testimonial-nine-wrapper swiper-slide"}>
                        <div className={"testimonial-nine-top d-flex justify-content-between align-items-center bg-white tw-mb-2 tw-rounded-xl tw-py-405 tw-px-705"}>
                          <div className={"d-flex align-items-center tw-gap-4"}>
                            <div className={"testimonial-three-img testimonial-nine-clints-img tw-w-15 tw-h-15"}>
                              <img className={"w-100 h-100"} src={"/assets/images/thumbs/testimonial-nine-thumb" + (i + 1) + ".png"} alt={""} />
                            </div>
                            <div>
                              <h3 className={"tw-text-base"}>
                                {step.title}
                              </h3>
                              <p>
                                Step {i + 1} of {STEPS.length}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"testimonial-nine-bottom bg-white tw-rounded-xl tw-py-10 tw-px-8"}>
                          <div className={"d-flex align-items-center tw-gap-3"}>
                            <div>
                              <p className={"tw-text-122 font-heading fw-semibold text-heading mb-0"}>
                                {String(i + 1).padStart(2, "0")}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className={"testimonial-nine-paragraph tw-text-lg tw-mb-6 fw-medium text-heading"}>
                              {step.text}
                            </p>
                          </div>
                          <div>
                            <p className={"tw-text-sm fw-medium text-heading text-uppercase"}>
                              {service.title}
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
      </section>
      <section className={"blog-nine-area tw-pb-22"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-6 col-lg-9"}>
              <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                  More from ASAS Alenjaz
                </span>
                <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                  Related projects and services
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {HIGHLIGHTS.map((item, i) => (
              <div key={item.title} className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-nine-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <div className={"blog-nine-thumb position-relative z-1 overflow-hidden tw-rounded-xl"}>
                    <a className={"d-block"} href={item.href} aria-label={item.title}>
                      <img className={"w-100"} src={"/assets/images/thumbs/blog-nine-thumb" + (i + 1) + ".jpg"} alt={["EV charger at a private villa in Al Rashidiya", "Villa service block in Al Rashidiya", "ASAS Alenjaz electrician at a distribution board"][i]} />
                    </a>
                    <div className={"blog-nine-date text-center tw-rounded-lg tw-p-5"}>
                      <p className={"h3 text-white"}>
                        {item.badge}
                      </p>
                      <p className={"text-white"}>
                        {item.badgeSub}
                      </p>
                    </div>
                    <div className={"blog-nine-content tw-me-10"}>
                      <div className={"blog-meta tw-mb-2"}>
                        <ul className={"d-flex align-items-center tw-gap-5 flex-wrap"}>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-map-pin"} aria-hidden={"true"}></i>
                            </span>
                            {item.place}
                          </li>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-tag"} aria-hidden={"true"}></i>
                            </span>
                            {item.tag}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className={"blog-nine-title tw-text-505 fw-medium text-white"}>
                          <a className={"hover-underline hover-text-white"} href={item.href}>
                            {item.title}
                          </a>
                        </h3>
                        <span className={"blog-nine-border"}></span>
                        <p className={"blog-nine-paragraph text-white"}>
                          {item.text}
                        </p>
                      </div>
                      <div className={"blog-nine-button"}>
                        <a className={"fw-bold text-white d-inline-flex align-items-center tw-gap-2"} href={item.href}>
                          Learn More
                          <i className={"ph ph-arrow-up-right"} aria-hidden={"true"}></i>
                        </a>
                      </div>
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
