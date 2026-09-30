import PageShell from "@/components/PageShell";
import QuoteForm from "@/components/pages/QuoteForm";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { TwBtn } from "./ServiceBitsB";
import styles from "./ServicePagesB.module.css";

// Electrical Works: the template's index-8 page (components/generated/Page_index_8_html.jsx)
// with every section, image, slider, marquee, counter and animation hook kept.
// Only the words and links changed. Repurposed: hero booking form → <QuoteForm />,
// review cards → approvals / EHS, team slider → in-house roles, testimonial slider →
// commitments + COMPANY.stats counters, pricing → scope cards (no prices),
// blog → related MEP services. Photos are placeholders: design-system/image-manifest/services-b.md

const C = SERVICE_CONTENT.electrical;
const RELATED = SERVICES.filter((s) => s.group === "MEP" && s.slug !== "electrical").slice(0, 3);

const BTN_FOUR = "tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1";

const MARQUEE = [
  { text: "DEWA-approved electrical works", cls: "text-heading" },
  { text: "Power · Lighting · Distribution boards", cls: "text-stroke-black" },
];

const SCOPE_SLIDES = [
  {
    title: "Power & Lighting",
    text: "Power and lighting installation for fit-outs, modifications and new buildings.",
    img: "/assets/images/thumbs/service-four-thumb1.jpg",
    alt: "ASAS electrician installing lighting in an office fit-out",
    icon: "/assets/images/icons/asas/lighting.svg",
    iconW: "60",
    iconH: "61",
    href: QUOTE_HREF,
    cta: "Request a Quote",
  },
  {
    title: "Distribution Boards",
    text: "Distribution boards and final connections, installed by our own team and tested before handover.",
    img: "/assets/images/thumbs/service-four-thumb2.jpg",
    alt: "Distribution board wired and labelled by the ASAS electrical team",
    icon: "/assets/images/icons/asas/power-plug.svg",
    iconW: "62",
    iconH: "61",
    href: QUOTE_HREF,
    cta: "Request a Quote",
  },
  {
    title: "EV Charger Power Supply",
    text: "Electrical supply works for EV chargers in residential communities and private villas.",
    img: "/assets/images/thumbs/service-four-thumb3.jpg",
    alt: "EV charger power supply installed by ASAS in a residential community",
    icon: "/assets/images/icons/asas/ev-charger.svg",
    iconW: "60",
    iconH: "61",
    href: "/services/ev-chargers",
    cta: "EV Charger Service",
  },
];

const WHY = [
  {
    title: "DEWA Approved",
    text: "Approved by the Dubai Electricity and Water Authority. Installations are built to DEWA requirements.",
    icon: "/assets/images/icons/asas/approved.svg",
    iconW: "60",
    iconH: "61",
    mb: " tw-mb-12",
  },
  {
    title: "In-House Team",
    text: "Our own MEP engineers, foremen, technicians and helpers: 23 people, not subcontracted labour.",
    icon: "/assets/images/icons/asas/team.svg",
    iconW: "60",
    iconH: "61",
    mb: " tw-mb-12",
  },
  {
    title: "Coordinated Trades",
    text: "Electrical works run on the same programme as the civil, joinery, HVAC and plumbing works.",
    icon: "/assets/images/icons/asas/toolbox.svg",
    iconW: "60",
    iconH: "72",
    mb: "",
  },
  {
    title: "Tested Before Handover",
    text: "Every installation is tested before handover, with regular progress reports during the works.",
    icon: "/assets/images/icons/asas/testing.svg",
    iconW: "61",
    iconH: "61",
    mb: "",
  },
];

// content.md §1.4 (Man Power page): roles only, no personal names.
const TEAM = [
  { role: "MEP Engineers", text: "2 engineers plan, design and supervise", img: "/assets/images/thumbs/team-four-thumb1.jpg", alt: "ASAS MEP engineer reviewing electrical drawings on site", cls: "team-four-wrapper team-four-wrapper tw-mb-8 swiper-slide" },
  { role: "Foremen", text: "2 electrical, plumbing & HVAC foremen", img: "/assets/images/thumbs/team-four-thumb2.jpg", alt: "ASAS MEP foreman directing works on site", cls: "team-four-wrapper tw-mb-8 swiper-slide" },
  { role: "Technicians", text: "12 electrical, plumbing & HVAC technicians", img: "/assets/images/thumbs/team-four-thumb3.jpg", alt: "ASAS electrical technician making final connections", cls: "team-four-wrapper team-four-wrapper tw-mb-8 swiper-slide" },
  { role: "Helpers", text: "7 electrical, plumbing & HVAC helpers", img: "/assets/images/thumbs/team-four-thumb4.jpg", alt: "ASAS site helpers preparing cable routes", cls: "team-four-wrapper team-four-wrapper tw-mb-8 swiper-slide" },
];

const PROJECT_IMGS = [
  { img: "/assets/images/thumbs/project-four-thumb1.jpg" },
  { img: "/assets/images/thumbs/project-four-thumb2.jpg" },
  { img: "/assets/images/thumbs/project-four-thumb3.jpg" },
  { img: "/assets/images/thumbs/project-four-thumb4.jpg" },
];

// Commitments (content.md §1.2) paired with COMPANY.stats; replaces client reviews.
const COMMITMENTS = [
  {
    title: "Our vision",
    icon: "/assets/images/icons/asas/vision.svg",
    text: "To be the leading company renowned for excellence, quality, performance and reliability in fit-out works in the local market.",
  },
  {
    title: "Quality policy",
    icon: "/assets/images/icons/asas/quality.svg",
    text: "We meet customer requirements through continual improvement of our Quality Management System, working to contract specifications, statutory regulations and codes of practice.",
  },
  {
    title: "Environment, health & safety",
    icon: "/assets/images/icons/asas/safety.svg",
    text: "We are committed to conserving the environment and providing a safe, healthy workplace, and we build EHS into every business decision.",
  },
  {
    title: "Authority approvals",
    icon: "/assets/images/icons/asas/approved.svg",
    text: `Approved by or registered with ${COMPANY.approvals.join(", ")}, so the work is built to the authorities' requirements.`,
  },
];

const AVATARS = [
  { src: "/assets/images/thumbs/banner-client-img1.png", cls: "position-relative z-1" },
  { src: "/assets/images/thumbs/banner-client-img2.png", cls: "position-relative z-2 tw--ms-16-px z-1" },
  { src: "/assets/images/thumbs/banner-client-img3.png", cls: "position-relative z-3 tw--ms-16-px z-1" },
  { src: "/assets/images/thumbs/banner-client-img4.png", cls: "position-relative z-4 tw--ms-16-px z-1" },
  { src: "/assets/images/thumbs/banner-client-img5.png", cls: "position-relative z-5 tw--ms-16-px" },
];

const WORK_IMGS = [
  { img: "/assets/images/thumbs/work-four-thumb1.jpg", alt: "ASAS engineer on a site visit reviewing the space", delay: "200" },
  { img: "/assets/images/thumbs/work-four-thumb2.jpg", alt: "Electrical drawings prepared for authority submission", delay: "300" },
  { img: "/assets/images/thumbs/work-four-thumb3.jpg", alt: "ASAS technicians installing cabling on site", delay: "400" },
  { img: "/assets/images/thumbs/work-four-thumb4.jpg", alt: "Electrical installation being tested before handover", delay: "500" },
];

// Pricing section → scope cards, no prices.
const SCOPE_CARDS = [
  {
    title: "Fit-Out Projects",
    icon: "ph-buildings",
    note: "Offices, restaurants, retail",
    delay: "200",
    items: [
      "Power and lighting to the fit-out layout",
      "Distribution boards and final connections",
      "Coordinated with ceilings, joinery and HVAC",
      "DEWA-compliant installation",
      "Testing before handover",
    ],
  },
  {
    title: "Villas & Buildings",
    icon: "ph-house-line",
    note: "Modifications and new builds",
    delay: "300",
    items: [
      "Electrical works for villa modifications",
      "Electrical works for new buildings",
      "Power supply for EV chargers",
      "DEWA-compliant installation",
      "Testing before handover",
    ],
  },
];

const RELATED_IMGS = [
  { img: "/assets/images/thumbs/blog-four-thumb1.jpg" },
  { img: "/assets/images/thumbs/blog-four-thumb2.jpg" },
  { img: "/assets/images/thumbs/blog-four-thumb3.jpg" },
];
const RELATED_ALTS = {
  plumbing: "ASAS plumbing installation in a commercial kitchen",
  hvac: "ASAS HVAC ductwork installed above an office ceiling",
  "fire-fighting": "Fire fighting sprinkler pipework installed by ASAS",
  "low-current": "Low current cabling installed alongside electrical works",
};

export default function ElectricalPage() {
  return (
    <PageShell>
        <section className={"banner-four-area position-relative z-1"}>
          <div className={"container tw-container-1870-px"}>
            <div className={"row justify-content-between"}>
              <div className={"col-xl-5 col-lg-9"}>
                <div className={"banner-four-left tw-mt-122"}>
                  <div className={"tw-mb-10"}>
                    <div className={`${styles.eyebrow} ${styles.onDark}`}>
                      MEP · Electrical Works
                    </div>
                    <h1 className={"banner-four-title tw-text-24 text-white lh-1 tw-mb-5 tw-char-animation font-rethink"}>
                      Electrical Works
                    </h1>
                    <p className={"text-white fw-normal tw-text-lg font-rethink"}>
                      {C.intro[0]}
                    </p>
                  </div>
                  <div>
                    <TwBtn href={QUOTE_HREF} className={BTN_FOUR}>
                      Request a Quote
                    </TwBtn>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-8"}>
                <div className={`contact-two-wrapper banner-four-contact bg-white tw-pt-12 tw-pb-13 tw-px-10 tw-rounded-lg ${styles.heroForm}`}>
                  <div className={"section-wrapper tw-mb-6"}>
                    <h2 className={"tw-text-9 fw-bold font-rethink"}>
                      Request a quote
                    </h2>
                    <p className={"tw-mt-2"}>
                      Tell us about the space. We reply by email or WhatsApp.
                    </p>
                  </div>
                  <div>
                    <QuoteForm idPrefix={"electrical-quote"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"position-absolute bottom-0 start-50 translate-middle-x z-n1"}>
            <img src={"/assets/images/thumbs/banner-four-thumb.png"} alt={""} />
          </div>
        </section>
        <section className={"about-four-area py-120"}>
          <div className={"container"}>
            <div className={"row tw-pb-25"}>
              <div className={"col-xl-12"}>
                <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"fw-normal font-heading tw-mb-5 font-rethink text-main-four-600 tw-text-lg fw-semibold"}>
                    DEWA-Approved Electrical Contractor
                  </div>
                  <div className={"tw-cursor-point-area"}>
                    <h2 className={"about-four-title fw-bold font-rethink text-capitalize tw-text-14"}>
                      From the distribution board to the last light fitting, our own team installs, connects and tests electrical systems for fit-outs, villas and buildings.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"container tw-container-1530-px"}>
            <div className={"row"}>
              <div className={"row"}>
                <div className={"col-xl-12"}>
                  <div className={"about-four-wrap align-items-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"about-four-item"}>
                      <div className={"about-four-thumb"}>
                        <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/about-four-thumb1.jpg"} alt={"ASAS electrician working on a distribution board"} />
                      </div>
                    </div>
                    <div className={"about-four-item bg-main-four-600 tw-rounded-2xl tw-py-6 tw-ps-505 tw-pe-7"}>
                      <div className={"d-flex align-items-center tw-gap-4"}>
                        <div>
                          <span className={"tw-text-12"} style={{ color: "var(--asas-gold)" }} aria-hidden={"true"}>
                            <i className={"ph-bold ph-seal-check"}></i>
                          </span>
                        </div>
                        <div>
                          <div>
                            <span className={"text-white tw-text-2xl fw-bold font-rethink"}>
                              DEWA approved
                            </span>
                          </div>
                          <div>
                            <p className={"text-white tw-text-sm"}>
                              Dubai Electricity and Water Authority
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"tw-mb-5"}>
                        <p className={"tw-text-lg text-white fw-medium font-rethink"}>
                          Installations are planned, built and tested to DEWA requirements by one team.
                        </p>
                      </div>
                      <div className={"d-flex align-items-center tw-gap-4"}>
                        <div className={"about-four-img"}>
                          <img src={"/assets/images/thumbs/testi-img1.png"} alt={"ASAS MEP engineer"} />
                        </div>
                        <div>
                          <h3 className={"font-rethink text-white tw-text-xl"}>
                            In-house MEP team
                          </h3>
                          <p className={"font-rethink text-white"}>
                            Engineers, foremen, technicians
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"about-four-item"}>
                      <div className={"about-four-thumb"}>
                        <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/about-four-thumb1.jpg"} alt={"Lighting installed by ASAS in a completed fit-out"} />
                      </div>
                    </div>
                    <div className={"about-four-item bg-black tw-rounded-2xl tw-py-6 tw-ps-505 tw-pe-7"}>
                      <div className={"d-flex align-items-center tw-gap-4"}>
                        <div>
                          <span className={"tw-text-12"} style={{ color: "var(--asas-gold)" }} aria-hidden={"true"}>
                            <i className={"ph-bold ph-shield-check"}></i>
                          </span>
                        </div>
                        <div>
                          <div>
                            <span className={"text-white tw-text-2xl fw-bold font-rethink"}>
                              EHS policy
                            </span>
                          </div>
                          <div>
                            <p className={"text-white tw-text-sm"}>
                              Environment, health &amp; safety
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"tw-mb-5"}>
                        <p className={"tw-text-lg text-white fw-medium font-rethink"}>
                          Safety is built into every business decision, and we comply with all EHS legal requirements.
                        </p>
                      </div>
                      <div className={"d-flex align-items-center tw-gap-4"}>
                        <div className={"about-four-img"}>
                          <img src={"/assets/images/thumbs/testi-img1.png"} alt={"ASAS site foreman"} />
                        </div>
                        <div>
                          <h3 className={"font-rethink text-white tw-text-xl"}>
                            Quality management
                          </h3>
                          <p className={"font-rethink text-white"}>
                            Specifications, schedules, reports
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
        <section className={"maquee-area footer-maquee tw-pb-25 overflow-hidden position-relative z-2"}>
          <div className={"maquee-slider"}>
            <div className={"swiper maquee-active d-flex align-items-center"}>
              <div className={"swiper-wrapper maquee-transition"}>
                {MARQUEE.map((m) => (
                  <div className={"maquee-box w-auto swiper-slide"} key={m.text}>
                    <div className={"maquee-content d-flex align-items-center tw-gap-8"}>
                      <div>
                        <span>
                          <img src={"/assets/images/icons/asas/electrical.svg"} width={"87"} height={"92"} alt={""} />
                        </span>
                      </div>
                      <h2 className={`maquee-four-title text-uppercase fw-semibold lh-1 tw-text-29 ${m.cls}`}>
                        {m.text}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={"service-four-area pt-120 tw-pb-20 position-relative z-1"}>
          <div className={"service-four-bg bg-img position-absolute top-0 start-0 tw-h-626-px z-n1"} data-background-image={"/assets/images/thumbs/service-four-bg.jpg"}></div>
          <div className={"container"}>
            <div className={"row tw-mb-12 align-items-center justify-content-between"}>
              <div className={"col-xl-6 col-lg-9 col-md-9"}>
                <div className={"section-four-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={`fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink ${styles.onDark}`}>
                    Scope of Work
                  </div>
                  <h2 className={"section-four-title text-white tw-text-14 fw-bold tw-char-animation font-rethink"}>
                    What Our Electrical Team Installs
                  </h2>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-3 col-md-3"}>
                <div className={"service-four-arrow text-md-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <button type={"button"} className={"slider-prev"} tabIndex={"0"} aria-label={"Previous slide"}>
                    <i className={"ph-bold ph-arrow-left"}></i>
                  </button>
                  <button type={"button"} className={"slider-next"} tabIndex={"0"} aria-label={"Next slide"}>
                    <i className={"ph-bold ph-arrow-right"}></i>
                  </button>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xxl-12"}>
                <div className={"service-four-slider position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"service-four-active swiper-container"}>
                    <div className={"swiper-wrapper"}>
                      {SCOPE_SLIDES.map((s) => (
                        <div className={"service-four-wrapper position-relative z-1 tw-rounded-xl overflow-hidden swiper-slide animation-item"} key={s.title}>
                          <div className={"service-four-thumb"}>
                            <a className={"d-block"} href={s.href} tabIndex={"-1"} aria-hidden={"true"}>
                              <img className={"tw-h-282-px w-100"} src={s.img} alt={s.alt} />
                            </a>
                          </div>
                          <div className={"service-four-content tw-transition-3"}>
                            <div className={"service-four-icon tw-mb-6"}>
                              <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex align-items-center justify-content-center bg-main-four-600 tw-rounded-xl tw-transition-6"}>
                                <img className={"animate__wobble"} src={s.icon} width={s.iconW} height={s.iconH} alt={""} />
                              </span>
                            </div>
                            <div>
                              <h3 className={"service-four-title tw-text-505 fw-bold tw-mb-5"}>
                                <a className={"tw-transition-3 hover-text-heading hover-underline"} href={s.href}>
                                  {s.title}
                                </a>
                              </h3>
                              <p className={"service-four-paragraph tw-mb-8"}>
                                {s.text}
                              </p>
                            </div>
                            <div>
                              <TwBtn href={s.href} className={BTN_FOUR}>
                                {s.cta}
                              </TwBtn>
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
        <section className={"choose-us-four-area pb-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between tw-mb-14"}>
              <div className={"col-xl-7 col-lg-9"}>
                <div className={"section-four-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink"}>
                    Why choose ASAS
                  </div>
                  <h2 className={"section-four-title tw-text-14 fw-bold tw-char-animation font-rethink tw-mb-4"}>
                    One Team From Design To Testing
                  </h2>
                  <p className={"fw-medium"}>
                    {C.intro[1]}
                  </p>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-6"}>
                <div className={"text-xl-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <TwBtn href={QUOTE_HREF} className={BTN_FOUR}>
                    Book a Site Visit
                  </TwBtn>
                </div>
              </div>
            </div>
            <div className={"row align-items-center"}>
              <div className={"col-xl-5"}>
                <div className={"choose-us-four-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/choose-us-four-thumb.jpg"} alt={"ASAS electrical foreman checking an installation"} />
                </div>
              </div>
              <div className={"col-xl-7"}>
                <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  {WHY.map((w) => (
                    <div className={"col-xl-6 col-lg-6 col-md-6 col-sm-6"} key={w.title}>
                      <div className={`choose-us-four-item animation-item${w.mb}`}>
                        <div className={"tw-mb-7"}>
                          <span>
                            <img className={"animate__wobble"} src={w.icon} width={w.iconW} height={w.iconH} alt={""} />
                          </span>
                        </div>
                        <div>
                          <h3 className={"tw-text-2xl tw-mb-5 font-rethink"}>
                            {w.title}
                          </h3>
                          <p>
                            {w.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"choose-us-four-shape position-absolute end-0 z-n1"} src={"/assets/images/shapes/choose-us-four-shape.png"} alt={""} />
          </div>
        </section>
        <section className={"service-four-area team-four-area pt-120 tw-pb-20 position-relative z-1"}>
          <div className={"service-four-bg bg-img position-absolute top-0 start-0 tw-h-560-px z-n1"} data-background-image={"/assets/images/thumbs/team-four-bg.jpg"}></div>
          <div className={"container"}>
            <div className={"row tw-mb-12 align-items-end justify-content-between"}>
              <div className={"col-xl-6 col-lg-9 col-md-9"}>
                <div className={"section-four-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={`fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink ${styles.onDark}`}>
                    Our team
                  </div>
                  <h2 className={"section-four-title text-white tw-text-14 fw-bold tw-char-animation font-rethink"}>
                    {`${COMPANY.stats[2].value} People, All In-House`}
                  </h2>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-3 col-md-3"}>
                <div className={"service-four-arrow text-md-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <button type={"button"} className={"slider-prev"} tabIndex={"0"} aria-label={"Previous slide"}>
                    <i className={"ph-bold ph-arrow-left"}></i>
                  </button>
                  <button type={"button"} className={"slider-next"} tabIndex={"0"} aria-label={"Next slide"}>
                    <i className={"ph-bold ph-arrow-right"}></i>
                  </button>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xxl-12"}>
                <div className={"team-four-slider position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"team-four-active swiper-container"}>
                    <div className={"swiper-wrapper"}>
                      {TEAM.map((t) => (
                        <div className={t.cls} key={t.role}>
                          <div className={"team-four-thumb position-relative z-1 tw-mb-6"}>
                            <a className={"d-block"} href={"/about"} tabIndex={"-1"} aria-hidden={"true"}>
                              <img className={"tw-rounded-lg w-100"} src={t.img} alt={t.alt} />
                            </a>
                          </div>
                          <div>
                            <h3 className={"team-four-title tw-text-605 fw-bold font-rethink tw-mb-1"}>
                              <a className={"hover-text-main-four-600"} href={"/about"}>
                                {t.role}
                              </a>
                            </h3>
                            <p className={"team-four-paragraph"}>
                              {t.text}
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
        <section className={"project-four-area pb-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-5"}>
                <div className={"section-four-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink"}>
                    {C.projectsHeading}
                  </div>
                  <h2 className={"section-four-title tw-text-14 fw-bold tw-char-animation font-rethink"}>
                    Electrical &amp; EV Charger Projects
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={"container-fluid gx-0"}>
            <div className={"row gx-0"}>
              <div className={"col-xxl-12"}>
                <div className={"project-four-slider position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"project-four-active swiper-container"}>
                    <div className={"swiper-wrapper align-items-center"}>
                      {C.projects.map((p, i) => {
                        const [type, place] = p.note.split(" · ");
                        return (
                          <div className={"project-four-wrapper tw-mb-8 swiper-slide"} key={p.name}>
                            <div className={"project-four-thumb position-relative z-1 overflow-hidden"}>
                              <a href={"/projects"} tabIndex={"-1"} aria-hidden={"true"}>
                                <img className={"tw-rounded-xl"} src={PROJECT_IMGS[i % PROJECT_IMGS.length].img} alt={`${p.name}: ${type.toLowerCase()} by ASAS Alenjaz, ${place}`} />
                              </a>
                              <div className={"project-four-wrap position-absolute"}>
                                <h3 className={"project-four-subtitle fw-bold text-uppercase font-rethink bg-main-four-600 tw-py-2 tw-px-6 tw-mb-4 text-white d-inline-block"}>
                                  {type}
                                </h3>
                                <div className={"project-four-content d-flex align-items-center justify-content-between bg-white tw-p-205 tw-ps-10 tw-gap-12"}>
                                  <div>
                                    <h4 className={"project-four-title tw-text-2xl fw-bold"}>
                                      <a className={"hover-text-main-four-600"} href={"/projects"}>
                                        {p.name}
                                      </a>
                                    </h4>
                                    <p>{place}</p>
                                  </div>
                                  <div>
                                    <a className={"tw-w-15 tw-h-15 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle bg-main-four-600 text-white tw-text-2xl"} href={"/projects"} aria-label={`See ${p.name} in our projects`}>
                                      <i className={"ph-bold ph-arrow-right"}></i>
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonial-four-area pb-120"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6"}>
                <div className={"testimonial-four-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/testimonial-four-thumb.jpg"} alt={"ASAS engineers inspecting a completed electrical installation"} />
                </div>
              </div>
              <div className={"col-xl-6 col-lg-9"}>
                <div className={"col-xl-12"}>
                  <div className={"testimonial-four-slide"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"testimonial-four-active swiper-container"}>
                      <div className={"testimonial-four-swiper-wrapper swiper-wrapper"}>
                        {COMMITMENTS.map((c, i) => {
                          const stat = COMPANY.stats[i];
                          return (
                            <div className={"testimonial-four-wrapper swiper-slide"} key={c.title}>
                              <div className={"section-four-wrapper tw-mb-6"}>
                                <span className={"fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink"}>
                                  Our commitments
                                </span>
                                <h2 className={"section-four-title tw-text-14 fw-bold tw-char-animation font-rethink"}>
                                  {c.title}
                                </h2>
                              </div>
                              <div className={"d-flex align-items-center tw-gap-3 tw-mb-10"}>
                                <div className={"d-flex align-items-center"}>
                                  {AVATARS.map((a) => (
                                    <div className={`tw-w-122 tw-h-122 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 ${a.cls} border border-3 border-white`} key={a.src}>
                                      <img src={a.src} alt={""} className={"w-100 h-100 object-fit-cover"} />
                                    </div>
                                  ))}
                                </div>
                                <div>
                                  <span className={"font-rethink"}>
                                    Trusted on
                                  </span>
                                  <h3 className={"font-rethink tw-text-xl fw-bold"}>
                                    90+ projects since {COMPANY.founded}
                                  </h3>
                                </div>
                              </div>
                              <div className={"testimonial-four-border d-flex align-items-center tw-gap-9"}>
                                <div>
                                  <span className={"tw-w-24 tw-h-24"}>
                                    <img src={c.icon} width={"102"} height={"78"} alt={""} />
                                  </span>
                                </div>
                                <div>
                                  <p className={"font-rethink tw-text-xl text-heading tw-w--px"}>
                                    {c.text}
                                  </p>
                                </div>
                              </div>
                              <div className={"d-flex align-items-center justify-content-between"}>
                                <div className={"testimonial-four-counter"}>
                                  <h2 className={"counter-title tw-text-21 fw-bold font-rethink text-black mb-0 lh-1"}>
                                    <span className={"font-rethink text-black odometer"} data-count={String(stat.value)}></span>
                                    {stat.suffix}
                                  </h2>
                                </div>
                                <div>
                                  <h3 className={"tw-text-xl fw-bold tw-mb-2"}>
                                    {stat.label}
                                  </h3>
                                  <p>
                                    {COMPANY.short}
                                  </p>
                                </div>
                                <div className={"testimonial-four-arrow"}>
                                  <button type={"button"} className={"slider-prev"} tabIndex={"0"} aria-label={"Previous slide"}>
                                    <i className={"ph-bold ph-arrow-left"}></i>
                                  </button>
                                  <button type={"button"} className={"slider-next"} tabIndex={"0"} aria-label={"Next slide"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"work-four-area bg-img position-relative z-1 py-120"} data-background-image={"/assets/images/thumbs/service-four-bg.jpg"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-8"}>
                <div className={"section-four-wrapper text-center tw-mb-12"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={`fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink ${styles.onDark}`}>
                    How we work
                  </div>
                  <h2 className={"section-four-title tw-text-14 fw-bold text-white tw-char-animation font-rethink"}>
                    From Site Visit To A Tested Handover
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"work-four-wrapper position-relative z-1"}>
                  {PROCESS.map((step, i) => (
                    <div className={"work-four-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={WORK_IMGS[i].delay} key={step.title}>
                      <div className={"work-four-thumb"}>
                        <span className={"d-block"}>
                          <img className={"tw-rounded-md"} src={WORK_IMGS[i].img} alt={WORK_IMGS[i].alt} />
                        </span>
                      </div>
                      <div className={"text-center"}>
                        <div>
                          <span className={"d-inline-block bg-white text-heading tw-text-lg fw-medium text-uppercase tw-px-4 tw-py-2 tw-rounded-lg lh-1 font-rethink tw-mb-4"}>
                            {`Step 0${i + 1}`}
                          </span>
                        </div>
                        <div>
                          <h3 className={"tw-text-2xl fw-bold text-white font-rethink tw-mb-2"}>
                            {step.title}
                          </h3>
                          <p className={"text-white font-rethink"}>
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div>
                    <img className={"work-four-shape position-absolute z-n1"} src={"/assets/images/shapes/work-four-shape.png"} alt={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"pricing-four-area py-120"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-6 col-lg-8"}>
                <div className={"section-four-wrapper text-center tw-mb-12"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink"}>
                    Where we work
                  </div>
                  <h2 className={"section-four-title tw-text-14 fw-bold tw-char-animation font-rethink"}>
                    Electrical Works For Every Type Of Project
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {SCOPE_CARDS.map((card) => (
                <div className={"col-xl-6"} key={card.title}>
                  <div className={"pricing-four-wrapper d-flex tw-gap-20 tw-rounded-2xl tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={card.delay}>
                    <div className={"d-flex justify-content-between align-items-center flex-column"}>
                      <div className={"text-center"}>
                        <h3 className={"pricing-four-subtitle tw-text-2xl fw-bold tw-mb-3"}>
                          {card.title}
                        </h3>
                        <div className={"pricing-four-title tw-text-14 fw-bold d-flex justify-content-center tw-gap-1 text-main-four-600"} aria-hidden={"true"}>
                          <i className={`ph-bold ${card.icon}`}></i>
                        </div>
                        <p>
                          {card.note}
                        </p>
                      </div>
                      <div>
                        <TwBtn href={QUOTE_HREF} className={BTN_FOUR}>
                          Request a Quote
                        </TwBtn>
                      </div>
                    </div>
                    <div>
                      <div className={"pricing-three-list"}>
                        <ul>
                          {card.items.map((item, j) => (
                            <li className={`text-heading tw-text-lg fw-normal${j < card.items.length - 1 ? " tw-mb-5" : ""} d-flex tw-gap-3 align-items-center`} key={item}>
                              <img src={"/assets/images/icons/asas/check-circle.svg"} width={"21"} height={"19"} alt={""} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={"blog-four-area pt-120 tw-pb-23"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7"}>
                <div className={"section-four-wrapper text-center tw-mb-12"}>
                  <div className={"fw-normal tw-mb-5 font-rethink text-uppercase text-main-four-600 tw-text-lg fw-semibold font-rethink"}>
                    Related MEP services
                  </div>
                  <h2 className={"section-four-title tw-text-14 fw-bold tw-char-animation font-rethink"}>
                    One Contractor For Every MEP Trade
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {RELATED.map((s, i) => {
                const href = `/services/${s.slug}`;
                const img = RELATED_IMGS[i].img;
                return (
                  <div className={"col-xl-4 col-lg-6 col-md-6"} key={s.slug}>
                    <div className={"blog-wrapper tw-me-4 tw-mb-8"}>
                      <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl"}>
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5 tw-h-410-px"} src={img} alt={RELATED_ALTS[s.slug]} />
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5 tw-h-410-px"} src={img} alt={""} />
                        <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={href} tabIndex={"-1"} aria-hidden={"true"}></a>
                      </div>
                      <div className={"blog-four-wrap"}>
                        <div className={"blog-meta blog-four-meta tw-mb-6 position-relative z-1"}>
                          <ul className={"d-flex align-items-center tw-gap-5"}>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-base fw-normal text-white font-rethink "}>
                              <span className={`text-main-four-600 tw-text-xl ${styles.onDark}`}>
                                <i className={`ph-bold ${s.icon}`}></i>
                              </span>
                              {s.group}
                            </li>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-base fw-normal text-white font-rethink "}>
                              <span className={`text-main-four-600 tw-text-xl ${styles.onDark}`}>
                                <i className={"ph-bold ph-users-three"}></i>
                              </span>
                              In-house team
                            </li>
                          </ul>
                          <div className={"position-absolute top-0 end-0"}>
                            <a href={href} className={"tw-w-11 tw-h-11 lh-1 d-inline-flex justify-content-center align-items-center bg-main-four-600 text-white tw-text-lg"} aria-label={`Read about ${s.title}`}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </a>
                          </div>
                        </div>
                        <div className={"tw-ps-8 tw-pe-4 tw-pb-6"}>
                          <h3 className={"font-rethink tw-text-2xl fw-bold tw-mb-3"}>
                            <a className={"hover-text-main-four-600"} href={href}>
                              {s.title}
                            </a>
                          </h3>
                          <p className={"font-rethink tw-text-lg fw-medium"}>
                            {SERVICE_CONTENT[s.slug].summary}
                          </p>
                        </div>
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
