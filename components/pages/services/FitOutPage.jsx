import PageShell from "@/components/PageShell";
import TextRing from "@/components/TextRing";
import { COMPANY, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT } from "@/components/service-content";
import { PROJECTS, sectorCounts } from "@/components/projects";
import { TwBtn } from "./ServiceBitsB";
import styles from "./ServicePagesB.module.css";
import ServiceExtras from "@/components/details/ServiceExtras";

// Interior Fit-Out (flagship): the template's index-3 page
// (components/generated/Page_index_3_html.jsx) with every section, image, slider,
// marquee, counter, progress bar, tab set, video button and animation hook kept.
// Only the words and links changed. Repurposed: Google/review badges → approvals
// and project-list facts, team → in-house roles, testimonials → real fit-out
// projects, newsletter form → quote CTA, invented progress % → shares of the
// real project list. Photos are placeholders: design-system/image-manifest/services-b.md

const C = SERVICE_CONTENT["fit-out"];
const PHONE = COMPANY.phones[0];
const PHONE_2 = COMPANY.phones[1];

const BTN_EIGHT = "tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1";

const HERO_AVATARS = [
  { src: "/assets/images/thumbs/banner-eight-client-img1.png", cls: "position-relative z-1" },
  { src: "/assets/images/thumbs/banner-eight-client-img2.png", cls: "position-relative z-2 tw--ms-16-px z-1" },
  { src: "/assets/images/thumbs/banner-eight-client-img3.png", cls: "position-relative z-3 tw--ms-16-px z-1" },
];

// Brand slider: client names from the project list (publishing approved, content.md §1.3).
const CLIENT_LOGOS = [
  { name: "Atlas Copco" },
  { name: "Bactiguard" },
  { name: "Jeeves" },
  { name: "Aramex" },
  { name: "Projecto Açaí" },
];

// Progress bars show real shares of the 95-project list instead of invented scores.
const COUNTS = sectorCounts();
const TOTAL = PROJECTS.length;
const COMMERCIAL = ["offices", "restaurants", "retail", "salons", "laundries", "warehouses", "education-health"]
  .reduce((n, key) => n + (COUNTS[key] || 0), 0);
const HOMES = (COUNTS.villas || 0) + (COUNTS.residential || 0);
const pct = (n) => Math.round((n / TOTAL) * 100);
const PROGRESS = [
  { value: pct(COMMERCIAL), label: `Commercial projects (${COMMERCIAL} of ${TOTAL} in our list)` },
  { value: pct(HOMES), label: `Villa & residential projects (${HOMES} of ${TOTAL})` },
];

const SCOPE_POINTS = [
  ["Site survey & drawings review", "Civil works & joinery"],
  ["Complete MEP installation", "Testing & clean handover"],
];

const COUNTER_DELAYS = ["300", "400", "500", "600"];

const TRADES = [
  {
    title: "Civil Works",
    href: "/services/civil",
    text: SERVICE_CONTENT.civil.summary,
    list: ["Blockwork & partitions", "Plastering & flooring", "Structural modifications"],
    img: "/assets/images/thumbs/service-ten-thumb1.jpg",
    alt: "Blockwork partitions going up in an ASAS fit-out",
    icon: "/assets/images/icons/asas/civil-white.svg",
    delay: "200",
  },
  {
    title: "Joinery",
    href: "/services/joinery",
    text: SERVICE_CONTENT.joinery.summary,
    list: ["Made to the approved design", "Measured on site first", "Coordinated with MEP"],
    img: "/assets/images/thumbs/service-ten-thumb2.jpg",
    alt: "Joinery installed by ASAS in a retail fit-out",
    icon: "/assets/images/icons/asas/joinery-white.svg",
    delay: "300",
  },
  {
    title: "MEP Works",
    href: "/services",
    text: "Electrical, HVAC, plumbing, fire fighting and low current systems, installed by our own MEP team.",
    list: ["DEWA-approved electrical", "HVAC & plumbing", "Fire fighting & low current"],
    img: "/assets/images/thumbs/service-ten-thumb3.jpg",
    alt: "ASAS MEP team installing services above a fit-out ceiling",
    icon: "/assets/images/icons/asas/mep-white.svg",
    delay: "400",
  },
  {
    title: "Planning & Architecture",
    href: "/services/planning-architecture",
    text: SERVICE_CONTENT["planning-architecture"].summary,
    list: ["Space planning & layouts", "Architectural drawings", "MEP design coordination"],
    img: "/assets/images/thumbs/service-ten-thumb4.jpg",
    alt: "ASAS engineers reviewing fit-out layout drawings",
    icon: "/assets/images/icons/asas/planning-white.svg",
    delay: "500",
  },
];

const MARQUEE = [
  "Office fit-out",
  "Restaurant fit-out",
  "Café fit-out",
  "Salon fit-out",
  "Retail fit-out",
  "Laundry fit-out",
  "Warehouse fit-out",
  "Villa fit-out",
];

// content.md §1.2
const TABS = [
  {
    id: "fitout-vision",
    label: "Our Vision",
    text: "To be the leading company renowned for excellence, quality, performance and reliability in fit-out works in the local market.",
  },
  {
    id: "fitout-mission",
    label: "Our Mission",
    text: "To lead the local fit-out market and become our customers' preferred choice by delivering excellent quality and value-added projects on time, while adopting the latest methods, materials and technology.",
  },
  {
    id: "fitout-quality",
    label: "Quality",
    text: "Our Quality Management System complies with all contractual obligations, specifications and standards, all statutory regulations and codes of practice, and keeps a good, clean working environment.",
  },
];

const QUALITY_POINTS = [
  ["Specifications & standards", "Time schedule"],
  ["Progress reporting", "Safe, clean sites (EHS)"],
];

// content.md §1.4 (Man Power page): roles only, no personal names.
const TEAM = [
  { role: "MEP Engineers", text: "2 engineers lead design and supervision", img: "/assets/images/thumbs/team-ten-thumb1.png", alt: "ASAS MEP engineer on a fit-out site", delay: "200" },
  { role: "Foremen", text: "2 foremen run the site day to day", img: "/assets/images/thumbs/team-ten-thumb2.png", alt: "ASAS foreman coordinating trades on site", delay: "300" },
  { role: "Technicians", text: "12 electrical, plumbing & HVAC technicians", img: "/assets/images/thumbs/team-ten-thumb3.png", alt: "ASAS technician installing MEP services", delay: "400" },
  { role: "Helpers", text: "7 helpers support every trade", img: "/assets/images/thumbs/team-ten-thumb4.png", alt: "ASAS site helpers preparing a fit-out", delay: "500" },
];

// Real fit-out projects (SERVICE_CONTENT["fit-out"].projects) in place of client reviews.
const FEATURED = ["Atlas Copco", "Projecto Açaí", "Loofah Salon & Spa"].map((name, i) => {
  const item = C.projects.find((p) => p.name === name);
  const project = PROJECTS.find((p) => name.startsWith(p.name));
  return {
    name,
    note: item.note,
    type: project.type,
    location: project.location,
    sectorLabel: project.sectorLabel,
    count: COUNTS[project.sector],
    img: `/assets/images/thumbs/testimonial-nine-thumb${i + 1}.png`,
  };
});

const PROJECT_IMGS = [
  { src: "/assets/images/thumbs/testimonial-nine-img1.png", alt: "Atlas Copco office fit-out by ASAS" },
  { src: "/assets/images/thumbs/testimonial-nine-img2.png", alt: "Projecto Açaí café fit-out by ASAS" },
  { src: "/assets/images/thumbs/testimonial-nine-img3.png", alt: "Loofah Salon & Spa fit-out by ASAS" },
];

function CallItem({ phone }) {
  return (
    <div className={"header-call-item d-flex align-items-center tw-gap-2"}>
      <div className={"header-call-icon"}>
        <a className={"tw-w-133 tw-h-133 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 text-white tw-text-3xl rounded-circle hover-bg-main-eight-600 hover-text-white"} href={`tel:${phone.tel}`} aria-label={`Call ${phone.label}`}>
          <i className={"ph ph-phone-call"}></i>
        </a>
      </div>
      <div className={"header-call-number ml-20"}>
        <p className={"tw-text-sm fw-medium tw-mb-1"} style={{ color: "#5c6672" }}>
          Call us
        </p>
        <a className={"tw-text-lg fw-semibold text-heading hover-text-main-eight-600"} href={`tel:${phone.tel}`}>
          {phone.label}
        </a>
      </div>
    </div>
  );
}

function CheckList({ columns }) {
  return columns.map((col) => (
    <ul className={"w-50"} key={col[0]}>
      {col.map((item) => (
        <li className={"d-inline-flex align-items-center tw-gap-3 tw-mb-2 fw-medium"} key={item}>
          <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
            <i className={"ph-bold ph-check-circle"}></i>
          </span>
          {item}
        </li>
      ))}
    </ul>
  ));
}

export default function FitOutPage() {
  return (
    <PageShell>
        <section className={"banner-ten-area position-relative z-1"}>
          <div className={"container tw-container-1500-px"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-5 col-lg-9"}>
                <div className={"banner-ten-left"}>
                  <div className={`${styles.eyebrow} ${styles.onDark}`}>
                    Fit-Out · Our Core Service
                  </div>
                  <h1 className={"banner-ten-title tw-text-190 text-white tw-mb-10 tw-char-animation"}>
                    Interior Fit-Out
                  </h1>
                  <div className={"d-flex align-items-center tw-gap-6 tw-mb-6"}>
                    <div className={"d-flex align-items-center"}>
                      {HERO_AVATARS.map((a) => (
                        <div className={`tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 ${a.cls} border border-3 border-white`} key={a.src}>
                          <img src={a.src} alt={""} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <span className={`tw-text-2xl ${styles.onDark}`} aria-hidden={"true"}>
                        <i className={"ph-bold ph-seal-check"}></i>
                      </span>
                      <div className={"d-flex align-items-center tw-gap-2"}>
                        <p className={"tw-text-lg fw-semibold text-white"}>
                          {COMPANY.approvals.length}
                        </p>
                        <p className={"text-white"}>
                          approvals: {COMPANY.approvals.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className={"banner-ten-paragraph text-white fw-medium tw-mb-10"}>
                    {C.intro[0]}
                  </p>
                  <div className={"d-inline-flex justify-content-center flex-wrap tw-gap-205"}>
                    <div>
                      <TwBtn href={QUOTE_HREF} className={BTN_EIGHT}>
                        Request a Quote
                      </TwBtn>
                    </div>
                    <div>
                      <TwBtn href={"/projects"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-white text-white tw-rounded-4xl position-relative z-1"}>
                        View Our Projects
                      </TwBtn>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7"}>
                <div className={"banner-ten-thumb position-relative z-1"}>
                  <img src={"/assets/images/thumbs/banner-ten-thumb.png"} alt={"Completed office fit-out by ASAS Alenjaz"} />
                  <div className={"banner-circle banner-ten-circle position-absolute lh-1 d-inline-flex justify-content-center align-items-center rounded-circle z-1 top-0 start-0"}>
                    <div className={"banner-circle-wrap"}>
                      <TextRing className="banner-rotate-content banner-ten-rotate-content" label="FIT-OUT & MEP" />
                      <div className={"banner-circle-button position-absolute top-50 start-50 translate-middle lh-1 d-inline-flex justify-content-center align-items-center rounded-circle"}>
                        <span className={"d-inline-flex align-items-center lh-1 tw-text-8 fw-bold text-white"}>
                          {`${COMPANY.stats[1].value}${COMPANY.stats[1].suffix}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"position-absolute end-0 top-0 z-n1"} src={"/assets/images/shapes/banner-ten-shape.png"} alt={""} />
          </div>
        </section>
        <div className={"brand-ten-area position-relative z-2 bg-img"} data-background-image={"/assets/images/shapes/brand-ten-bg.png"}>
          <div className={"container tw-container-1500-px"}>
            <div className={"row"}>
              <div className={"col-xxl-12"}>
                <div className={"brand-eight-slider brand-ten-slider"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"brand-eight-active brand-ten-active swiper-container"}>
                    <div className={"swiper-wrapper"}>
                      {CLIENT_LOGOS.map((logo) => (
                        <div className={"brand-eight-item brand-ten-item swiper-slide"} key={logo.name}>
                          <div className={"brand-eight-thumb brand-ten-thumb"}>
                            <span className="asas-wordmark">{logo.name}</span>
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
        <section className={"about-ten-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"about-ten-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-ten-thumb.jpg"} alt={"ASAS team handing over a finished restaurant fit-out"} />
                </div>
              </div>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"about-ten-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      One contract, every trade
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      From bare shell to handover
                    </h2>
                    <p className={"tw-me-10"}>
                      {C.summary}
                    </p>
                  </div>
                  <div className={"about-ten-progress-wrap d-flex align-items-center tw-gap-15 tw-mb-10"}>
                    {PROGRESS.map((bar) => (
                      <div className={"w-100"} key={bar.label}>
                        <div className={"expert-nine-progress-container about-ten-progress-container progress-container tw-mb-6"} data-percentage={String(bar.value)}>
                          <div className={"progress active bg-main-eight-600"}></div>
                          <div className={"percentage active bg-main-eight-600"}>
                            0%
                          </div>
                        </div>
                        <p className={"w-100"}>
                          {bar.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className={"about-eight-list d-flex tw-mb-12"}>
                    <CheckList columns={SCOPE_POINTS} />
                  </div>
                  <div className={"d-flex tw-gap-3"}>
                    <div>
                      <TwBtn href={QUOTE_HREF} className={BTN_EIGHT}>
                        Request a Quote
                      </TwBtn>
                    </div>
                    <CallItem phone={PHONE} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"about-ten-shape position-absolute"} src={"/assets/images/shapes/about-ten-shape.png"} alt={""} />
          </div>
        </section>
        <section className={"counter-ten-area pb-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-4 col-md-5"}>
                <div className={"counter-ten-content"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h2 className={"tw-text-7 tw-mb-4"}>
                    Fit-outs since {COMPANY.founded},
                    <br />
                    across {COMPANY.areas.length} emirates
                  </h2>
                  <div>
                    <a className={"tw-text-lg fw-bold text-heading d-flex tw-gap-2"} href={"/projects"}>
                      See Our Projects
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
                    <div className={"col-xl-3 col-lg-6 col-md-6 col-sm-6"} key={stat.label}>
                      <div className={"about-three-counter about-ten-counter"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={COUNTER_DELAYS[i]}>
                        <h3 className={"about-three-counter-title tw-text-122 fw-semibold font-heading text-heading mb-0 lh-1"}>
                          <span className={"font-heading odometer"} data-count={String(stat.value)}></span>
                          {stat.suffix}
                        </h3>
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
        <section className={"service-ten-area pt-120 tw-pb-22 position-relative z-1"}>
          <div className={"container tw-container-1730-px"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-5"}>
                <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={`section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2 text-white ${styles.onDark}`}>
                    Trades under one contract
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation text-white"}>
                    Everything your fit-out needs, from one team
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row tw-mb-10"}>
              {TRADES.map((t) => (
                <div className={"col-xl-3 col-lg-6 col-md-6"} key={t.title}>
                  <div className={"service-ten-wrapper bg-white tw-rounded-xl tw-mb-705 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={t.delay}>
                    <div className={"service-ten-thumb position-relative z-1 tw-mb-4 overflow-hidden tw-rounded-xl"}>
                      <a className={"d-block"} href={t.href} tabIndex={"-1"} aria-hidden={"true"}>
                        <img className={"tw-rounded-xl tw-transition-4"} src={t.img} alt={t.alt} />
                      </a>
                      <div className={"service-ten-icon position-absolute top-0 start-0 tw-mt-205 tw-ms-205"}>
                        <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={t.icon} width={"49"} height={"49"} alt={""} />
                        </span>
                      </div>
                    </div>
                    <div className={"service-ten-content tw-pb-4"}>
                      <h3 className={"service-ten-title tw-text-505 tw-mb-4"}>
                        <a className={"hover-text-main-eight-600"} href={t.href}>
                          {t.title}
                        </a>
                      </h3>
                      <p className={"service-ten-paragraph fw-medium tw-mb-4"}>
                        {t.text}
                      </p>
                      <div className={"service-ten-list tw-mb-4"}>
                        <ul className={"d-flex flex-column"}>
                          {t.list.map((item) => (
                            <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"} key={item}>
                              <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                                <i className={"ph-bold ph-check"}></i>
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={"service-ten-button"}>
                        <TwBtn href={t.href} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center w-100 lh-1 fw-semibold bg-transparent border border-1 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"} iconColor={"text-white"} textColor={"text-heading"} aria-label={`View ${t.title}`}>
                          View Service
                        </TwBtn>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"service-ten-bottom-wrap text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"d-flex flex-wrap tw-gap-6 align-items-center justify-content-center tw-mb-3"}>
                    <p className={"tw-text-505 text-white"}>
                      DEWA · Dubai Municipality
                    </p>
                    <div aria-hidden={"true"}>
                      <i className={"ph-bold ph-seal-check tw-text-2xl"} style={{ color: "#F2B300" }}></i>
                    </div>
                    <p className={"tw-text-505 text-white"}>
                      Civil Defence · Trakhees
                    </p>
                  </div>
                  <p className={"tw-mb-6 text-white"}>
                    One programme, one point of contact and one team accountable for the finished space.
                  </p>
                  <div className={"service-ten-bottom-button"}>
                    <TwBtn href={"/services"} className={BTN_EIGHT}>
                      View All Services
                    </TwBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"service-ten-shape-1 position-absolute start-0"} src={"/assets/images/shapes/service-ten-shape1.png"} alt={""} />
            <img className={"service-ten-shape-2 position-absolute end-0"} src={"/assets/images/shapes/service-ten-shape2.png"} alt={""} />
          </div>
        </section>
        <section className={"maquee-ten-area"}>
          <div className={"maquee-slider"}>
            <div className={"swiper maquee-active d-flex align-items-center"}>
              <div className={"swiper-wrapper maquee-transition"}>
                {MARQUEE.map((text) => (
                  <div className={"maquee-box w-auto swiper-slide"} key={text}>
                    <div className={"maquee-content"}>
                      <p className={"maquee-title maquee-ten-title text-uppercase fw-semibold lh-1"}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={"about-eight-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6 col-lg-10"}>
                <div className={"about-eight-thumb position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/expert-ten-thumb.jpg"} alt={"ASAS foreman and technicians on a fit-out site"} />
                  <div className={"about-eight-thumb-count bg-main-eight-600 tw-rounded-2xl position-absolute top-0 end-0 tw-mt-505"}>
                    <div className={"d-flex align-items-center tw-gap-4"}>
                      <p className={"tw-text-14 fw-medium font-heading text-white mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={String(COMPANY.stats[2].value)}></span>
                      </p>
                      <p className={"tw-text-base text-white text-uppercase"}>
                        In-house
                        <br />
                        team
                      </p>
                    </div>
                  </div>
                  <div className={"about-eight-thumb-review position-absolute bottom-0 start-0 bg-white tw-ms-5 tw-mb-5 tw-rounded-lg"}>
                    <div className={"d-flex align-items-center tw-mb-4"}>
                      {HERO_AVATARS.map((a) => (
                        <div className={`tw-w-166 tw-h-166 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 ${a.cls} border border-3 border-white`} key={a.src}>
                          <img src={a.src} alt={""} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                      ))}
                    </div>
                    <div className={"tw-mb-4 text-main-eight-600 tw-text-2xl"} aria-hidden={"true"}>
                      <i className={"ph-bold ph-list-checks"}></i>
                    </div>
                    <div className={"d-flex align-items-center tw-gap-2"}>
                      <p className={"tw-text-lg fw-semibold text-heading"}>
                        {TOTAL}
                      </p>
                      <p>
                        projects in our list
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-11"}>
                <div className={"about-eight-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      Why one contractor
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      One programme, one point of contact
                    </h2>
                    <p className={"section-eight-paragraph tw-me-10"}>
                      {C.intro[1]}
                    </p>
                  </div>
                  <div className={"about-eight-tab tw-mb-6"}>
                    <ul className={"nav nav-tabs border-0 d-flex tw-gap-9 tw-mb-8"} id={"fitoutTab"} role={"tablist"}>
                      {TABS.map((tab, i) => (
                        <li className={"nav-item"} role={"presentation"} key={tab.id}>
                          <button className={`nav-link tw-text-lg${i === 0 ? " active" : ""}`} id={`${tab.id}-tab`} data-bs-toggle={"tab"} data-bs-target={`#${tab.id}`} type={"button"} role={"tab"} aria-controls={tab.id} aria-selected={i === 0 ? "true" : "false"}>
                            {tab.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className={"tab-content"} id={"fitoutTabContent"}>
                      {TABS.map((tab, i) => (
                        <div className={`tab-pane${i === 0 ? " show active" : ""}`} id={tab.id} role={"tabpanel"} aria-labelledby={`${tab.id}-tab`} key={tab.id}>
                          {tab.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={"about-eight-list d-flex tw-mb-10"}>
                    <CheckList columns={QUALITY_POINTS} />
                  </div>
                  <div className={"d-flex tw-gap-3"}>
                    <div>
                      <TwBtn href={QUOTE_HREF} className={BTN_EIGHT}>
                        Book a Site Visit
                      </TwBtn>
                    </div>
                    <CallItem phone={PHONE_2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"video-area video-ten-area mb-0"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row justify-content-center gx-0"}>
              <div className={"col-xl-12 gx-0"}>
                <div className={"video-bg video-nine-bg text-center position-relative"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/video-ten-bg.jpg"} alt={"Wide view of a completed ASAS fit-out interior"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"team-ten-area tw-pb-22"}>
          <div className={"container tw-container-1580-px"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-5 col-lg-10"}>
                <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Our in-house team
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    The people who build your fit-out
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {TEAM.map((t) => (
                <div className={"col-xl-3 col-lg-6 col-md-6"} key={t.role}>
                  <div className={"team-ten-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={t.delay}>
                    <div className={"team-ten-thumb tw-mb-6"}>
                      <span className={"d-block"}>
                        <img src={t.img} alt={t.alt} />
                      </span>
                    </div>
                    <div className={"team-ten-content"}>
                      <h3 className={"team-ten-title tw-text-2xl tw-mb-2"}>
                        {t.role}
                      </h3>
                      <p className={"team-ten-paragraph fw-medium"}>
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={"project-ten-area pt-120"}>
          <div className={"project-ten-top"}>
            <div className={"container"}>
              <div className={"row align-items-center"}>
                <div className={"col-xl-7 col-lg-7"}>
                  <div className={"section-eight-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <span className={`section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2 ${styles.onDark}`}>
                      {C.projectsHeading}
                    </span>
                    <h2 className={"section-eight-title text-white fw-medium tw-mb-6 tw-char-animation"}>
                      Offices, restaurants, salons, shops and more
                    </h2>
                  </div>
                </div>
                <div className={"col-xl-5 col-lg-5"}>
                  <div className={"project-ten-button text-lg-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <TwBtn href={"/projects"} className={BTN_EIGHT}>
                      View All Projects
                    </TwBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"project-ten-bottom"}>
            <div className={"container-fluid"}>
              <div className={"row"}>
                <div className={"col-xl-4"}></div>
                <div className={"col-xl-8"}></div>
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonial-nine-area testimonial-ten-area tw-mx-5 py-120"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row gx-0"}>
              <div className={"col-xl-5"}>
                <div className={"testimonial-nine-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                      From our project list
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Fit-outs we have delivered
                    </h2>
                  </div>
                  <div className={"d-flex tw-gap-6 tw-mb-12"}>
                    {PROJECT_IMGS.map((img) => (
                      <div className={"testimonial-nine-img"} key={img.src}>
                        <img className={""} src={img.src} alt={img.alt} />
                      </div>
                    ))}
                  </div>
                  <div className={"d-flex justify-content-between"}>
                    <div className={"testimonial-nine-arrow d-flex tw-gap-5"}>
                      <button type={"button"} className={"slider-prev"} aria-label={"Previous project"}>
                        <i className={"ph ph-arrow-left"}></i>
                      </button>
                      <button type={"button"} className={"slider-next"} aria-label={"Next project"}>
                        <i className={"ph ph-arrow-right"}></i>
                      </button>
                    </div>
                    <div>
                      <span className={"text-main-eight-600 tw-text-2xl"} aria-hidden={"true"}>
                        <i className={"ph-bold ph-map-pin"}></i>
                      </span>
                      <div className={"d-flex align-items-center tw-gap-2"}>
                        <p className={"tw-text-lg fw-semibold text-heading"}>
                          {COMPANY.areas.length}
                        </p>
                        <p>
                          emirates: {COMPANY.areas.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7"}>
                <div className={"testimonial-nine-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"testimonial-nine-active testimonial-ten-active swiper-container"}>
                    <div className={"testimonial-nine-swiper-wrapper swiper-wrapper"}>
                      {FEATURED.map((p) => (
                        <div className={"testimonial-nine-wrapper swiper-slide"} key={p.name}>
                          <div className={"testimonial-nine-top d-flex justify-content-between align-items-center bg-white tw-mb-2 tw-rounded-xl tw-py-405 tw-px-705"}>
                            <div className={"d-flex align-items-center tw-gap-4"}>
                              <div className={"testimonial-three-img testimonial-nine-clints-img tw-w-15 tw-h-15"}>
                                <img className={"w-100 h-100"} src={p.img} alt={`${p.name} logo`} />
                              </div>
                              <div>
                                <h3 className={"tw-text-base"}>
                                  {p.name}
                                </h3>
                                <p>
                                  {p.note}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className={"testimonial-nine-bottom bg-white tw-rounded-xl tw-py-10 tw-px-8"}>
                            <div className={"d-flex align-items-center tw-gap-3"}>
                              <div>
                                <p className={"tw-text-122 fw-semibold text-heading"}>
                                  {p.type}
                                </p>
                              </div>
                              <div>
                                <span className={"text-main-eight-600"}>
                                  <i className={"ph-bold ph-map-pin"} aria-hidden={"true"}></i> {p.location}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className={"testimonial-nine-paragraph tw-text-lg tw-mb-6 fw-medium text-heading"}>
                                {`${p.name} is one of ${p.count} ${p.sectorLabel.toLowerCase()} projects in the ASAS Alenjaz project list.`}
                              </p>
                            </div>
                            <div>
                              <p className={"tw-text-sm fw-medium text-heading"}>
                                {p.sectorLabel.toUpperCase()}
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
        <ServiceExtras slug="fit-out" />

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
                            Start a project
                          </span>
                          <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                            Start your fit-out today
                          </h2>
                        </div>
                        <div className={"tw-mb-20"}>
                          <span className={"tw-mb-5"}>
                            CONTACT US:
                          </span>
                          <a className={"tw-text-2xl fw-bold text-heading d-block tw-mb-3 hover-text-main-eight-600 text-break"} href={`mailto:${COMPANY.email}`}>
                            {COMPANY.email}
                          </a>
                          <a className={"tw-text-2xl fw-bold text-heading d-block hover-text-main-eight-600"} href={`tel:${PHONE.tel}`}>
                            {PHONE.label}
                          </a>
                        </div>
                        <div className={"contact-hand text-end z-n1"}>
                          <img src={"/assets/images/shapes/contact-eight-writer.png"} alt={""} />
                        </div>
                      </div>
                    </div>
                    <div className={"col-xl-4 col-lg-9"}>
                      <div className={"contact-form"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                        <h2 className={"text-white tw-text-2xl tw-mb-8 tw-pe-4"}>
                          Planning a fit-out? Tell us about the space and we will arrange a site visit.
                        </h2>
                        <div>
                          <ul className={styles.ctaList}>
                            <li>
                              <i className={"ph-bold ph-check-circle"} aria-hidden={"true"}></i>
                              Type of space: office, restaurant, café, salon, shop or villa
                            </li>
                            <li>
                              <i className={"ph-bold ph-check-circle"} aria-hidden={"true"}></i>
                              Location and approximate area
                            </li>
                            <li>
                              <i className={"ph-bold ph-check-circle"} aria-hidden={"true"}></i>
                              Any drawings, photos or a short brief
                            </li>
                          </ul>
                          <div className={"contact-eight-button tw-mt-8"}>
                            <TwBtn href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-white text-heading tw-rounded-4xl position-relative z-1"} iconColor={"text-white"} textColor={"text-heading"}>
                              Request a Quote
                            </TwBtn>
                          </div>
                          <div className={"tw-mt-8"}>
                            <a className={styles.ctaLink} href={`tel:${PHONE_2.tel}`}>
                              <i className={"ph-bold ph-phone-call"} aria-hidden={"true"}></i>
                              Or call {PHONE_2.label}
                            </a>
                          </div>
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
