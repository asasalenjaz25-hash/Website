import PageShell from "@/components/PageShell";
import QuoteForm from "@/components/pages/QuoteForm";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { featuredProjects } from "@/components/projects";
import BuildSequence from "@/components/pages/home/BuildSequence";
import ServiceMotionGrid from "@/components/pages/home/ServiceMotionGrid";
import SectorTicker from "@/components/pages/home/SectorTicker";
import { HomeSectors, HomeShopBand, HomeTrustBand } from "@/components/details/HomeExtras";
import styles from "./HomePage.module.css";

// Home page: the template's index-11 page (components/generated/Page_index_11_html.jsx)
// with every section, image, marquee, counter and animation hook kept, and only
// the words and links changed to ASAS content (content.md §3.1).
// Repurposed: team-seven → in-house roles, pricing-seven → animated service grid,
// blog-seven → service highlights, contact form → <QuoteForm />.
// Added: <BuildSequence /> (scroll-built room), <SectorTicker /> (sector marquee).
// Template photos are placeholders; see design-system/image-manifest/home.md.

const PHONE = COMPANY.phones[0];

const MARQUEE = [
  "Exceeding expectations and delivering real value",
  "Fit-out & MEP works across the UAE",
];

// content.md §1.4 (Man Power page). Photos stay as template placeholders.
const TEAM = [
  {
    role: "MEP Engineers",
    text: "2 MEP engineers lead design, approvals and site supervision",
    img: "/assets/images/thumbs/team-seven-thumb1.png",
    alt: "ASAS MEP engineer reviewing drawings on site",
    delay: "200",
  },
  {
    role: "Foremen",
    text: "2 electrical, plumbing & HVAC foremen run the site teams",
    img: "/assets/images/thumbs/team-seven-thumb2.png",
    alt: "ASAS foreman coordinating electrical, plumbing and HVAC works",
    delay: "300",
  },
  {
    role: "Technicians",
    text: "12 electrical, plumbing & HVAC technicians",
    img: "/assets/images/thumbs/team-seven-thumb3.png",
    alt: "ASAS technician installing MEP services in a fit-out",
    delay: "400",
  },
  {
    role: "Helpers",
    text: "7 electrical, plumbing & HVAC helpers",
    img: "/assets/images/thumbs/team-seven-thumb4.png",
    alt: "ASAS helper supporting installation works on site",
    delay: "500",
  },
];

const PROJECT_CARDS = ["one", "two", "three", "four", "five", "six"];
const PROJECT_DELAYS = ["200", "300", "400", "200", "300", "400"];

const bySlug = (slug) => SERVICES.find((s) => s.slug === slug);

// Scroll-built room (BuildSequence): one step per trade, in site order.
const BUILD_STEPS = [
  { slug: "planning-architecture", text: "We measure the space, check authority requirements and turn your brief into buildable, approvable drawings.", link: "Planning & architecture" },
  { slug: "civil", text: "Slabs, blockwork, partitions, plastering and the false ceiling: the shell every other trade is built into.", link: "Civil works" },
  { slug: "joinery", text: "Doors, wall cabinets, shelving and counters, made to the approved design and fitted on site.", link: "Joinery" },
  { slug: "electrical", text: "Conduits, wiring, lighting, switches and sockets, installed to DEWA requirements.", link: "Electrical works" },
  { slug: "plumbing", text: "Water supply, drainage and sanitary fittings, pressure-tested before anything is closed up.", link: "Plumbing works" },
  { slug: "hvac", text: "Ducting, fan coils and diffusers sized for the space, so every corner stays comfortable.", link: "HVAC works" },
  { slug: "fire-fighting", text: "Sprinklers, detectors and extinguishers to Civil Defence requirements.", link: "Fire fighting systems" },
  { slug: "low-current", text: "CCTV, data points, Wi-Fi and access control, coordinated with the electrical and interior works.", link: "Low current systems" },
  { slug: "fit-out", title: "Finishes & handover", icon: "ph-key", text: "Paint, flooring and furniture go in, every system is tested and commissioned, and we hand over on schedule.", link: "Interior fit-out" },
].map((st) => {
  const svc = bySlug(st.slug);
  return { slug: st.slug, title: st.title || svc.title, icon: st.icon || svc.icon, text: st.text, linkLabel: st.link };
});

// blog-seven cards, repurposed as service highlights.
const HIGHLIGHTS = [
  { slug: "fit-out", img: "/assets/images/thumbs/blog-seven-thumb1.jpg", alt: "Finished office or restaurant fit-out by ASAS" },
  { slug: "villa-works", img: "/assets/images/thumbs/blog-seven-thumb2.jpg", alt: "Villa extension or service block built by ASAS" },
  { slug: "ev-chargers", img: "/assets/images/thumbs/blog-seven-thumb3.jpg", alt: "EV charger installed by ASAS in a residential car park" },
];

// Same markup as the template's tw-primary-btn, so the theme's hover still works.
function PrimaryBtn({ href, label, gold = false }) {
  return (
    <a href={href} className={`tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold ${gold ? "bg-main-two-600" : "bg-main-four-600"} text-white tw-rounded-4xl position-relative z-1`}>
      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
          <span className={"overflow-hidden position-relative d-inline-flex"}>
            <i className={"ph-bold ph-arrow-right"}></i>
            <i className={"ph-bold ph-arrow-right"}></i>
          </span>
        </span>
        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
            {label}
          </span>
        </span>
      </span>
    </a>
  );
}

export default function HomePage() {
  const projects = featuredProjects().slice(0, 6);

  return (
    <PageShell>
      <section className={"banner-seven-area bg-img position-relative z-1"} data-background-image={"/assets/images/thumbs/banner-seven-bg.jpg"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"banner-seven-wrapper"}>
                <div className={"banner-seven-content tw-mb-8"}>
                  <div className={"banner-seven-subtitle banner-six-subtitle section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-white tw-mb-4 d-inline-block position-relative z-1"}>
                    Fit-out &amp; MEP contractor · Dubai
                  </div>
                  <h1 className={"banner-seven-title tw-text-20 text-white tw-char-animation"}>
                    Fit-out and MEP works, delivered to specification and on time.
                  </h1>
                  <p className={`text-white ${styles.heroText}`}>
                    Since {COMPANY.founded}, ASAS Alenjaz has delivered civil, joinery, electrical, HVAC, plumbing, fire fighting and low current works for offices, restaurants, retail units, warehouses and villas across the UAE.
                  </p>
                </div>
                <div className={`banner-seven-button ${styles.heroButtons}`}>
                  <PrimaryBtn href={QUOTE_HREF} label="Request a Quote" gold />
                  <PrimaryBtn href="/projects" label="View Our Projects" />
                </div>
                <ul className={styles.trust} aria-label="Authority approvals">
                  <li className={styles.trustLabel}>Approved by</li>
                  {COMPANY.approvals.map((a) => (
                    <li key={a} className={styles.trustItem}>
                      <i className={"ph-bold ph-seal-check"} aria-hidden="true"></i>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"about-seven-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-2 col-lg-4"}>
              <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-six-wrapper"}>
                  <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    About ASAS
                  </div>
                </div>
                <div className={"about-seven-left-thumb"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/about-seven-thumb1.jpg"} alt={"ASAS engineer on a fit-out site in Dubai"} />
                </div>
              </div>
            </div>
            <div className={"col-xl-7 col-lg-8"}>
              <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h2 className={"section-seven-title tw-text-122 tw-mb-10 tw-char-animation"}>
                  Complete Fit-Outs,{" "}
                  <span className={"fw-normal"}>
                    From Planning
                  </span>{" "}
                  And Civil Works{" "}
                  <span className={"fw-normal"}>
                    To Joinery
                  </span>{" "}
                  And Every MEP Trade,{" "}
                  <span className={"fw-normal"}>
                    In-House.
                  </span>
                </h2>
                <div className={"about-seven-wrap tw-w-458-px tw-ms-56"}>
                  <p className={"section-seven-paragraph tw-mb-10"}>
                    ASAS Alenjaz Technical Works is a Dubai-based engineering solutions provider and project specialist. We handle complete fit-outs in-house, from planning and civil works to joinery and every MEP discipline, with our own engineers, foremen and technicians.
                  </p>
                  <div className={"about-seven-button"}>
                    <PrimaryBtn href="/about" label="More About Us" />
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-3"}>
              <div className={"about-seven-right-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/about-seven-thumb2.jpg"} alt={"ASAS technicians installing MEP services in a commercial fit-out"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"about-seven-maquee maquee-slider position-absolute z-n1"} aria-hidden="true">
          <div className={"swiper maquee-active d-flex align-items-center"}>
            <div className={"swiper-wrapper maquee-transition"}>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      {MARQUEE[i % MARQUEE.length]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BuildSequence steps={BUILD_STEPS} />

      <section className={"work-seven-area py-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-5 col-lg-5"}>
              <div className={"work-seven-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"work-seven-thumb tw-mb-13"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/work-seven-thumb.jpg"} alt={"ASAS team walking a client through a site visit"} />
                </div>
                <div className={"section-six-wrapper tw-mb-8"}>
                  <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    How we work
                  </div>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-10 tw-char-animation"}>
                    Four Steps From Site Visit To Handover
                  </h2>
                  <p className={"section-seven-paragraph tw-me-10"}>
                    One team, one programme and one point of contact, with every step checked against specifications, schedule and progress reports.
                  </p>
                </div>
                <div className={"work-seven-button"}>
                  <PrimaryBtn href="/projects" label="View Projects" />
                </div>
              </div>
            </div>
            <div className={"col-xl-7 col-lg-7"}>
              <div className={"work-seven-right tw-ms-122"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                {PROCESS.map((step, i) => {
                  const last = i === PROCESS.length - 1;
                  return (
                    <div key={step.title} className={"work-seven-item d-flex tw-gap-8 tw-mb-7 position-relative z-1"}>
                      <div className={"work-seven-icon position-relative z-1"}>
                        <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-heading rounded-circle tw-text-122 position-relative z-1 tw-transition-4"}>
                          {i + 1}
                        </span>
                      </div>
                      <div className={last ? "work-seven-content border-0 mb-0 pb-0" : "work-seven-content"}>
                        <h3 className={"work-seven-title tw-text-2xl fw-medium tw-mb-2"}>
                          {step.title}
                        </h3>
                        <p className={"work-seven-paragraph tw-w-510-px"}>
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team-seven, repurposed: in-house roles (no personal names) */}
      <section className={"team-seven-area py-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-4 col-lg-4"}>
              <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                  In-house team
                </div>
              </div>
            </div>
            <div className={"col-xl-5 col-lg-8"}>
              <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                  A 23-Strong Team, Not Subcontracted Labour
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {TEAM.map((m) => (
              <div key={m.role} className={"col-xl-3 col-lg-4 col-md-6"}>
                <div className={"team-seven-wrapper team-four-wrapper team-ip-wrapper tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={m.delay}>
                  <div className={"team-seven-thumb team-four-thumb team-six-thumb position-relative z-1 tw-mb-6 tw-rounded-lg"}>
                    <a className={"d-block"} href={"/about"} tabIndex={-1} aria-hidden="true">
                      <img className={"tw-rounded-lg w-100 object-fit-cover"} src={m.img} alt={m.alt} />
                    </a>
                  </div>
                  <div className={"team-seven-content"}>
                    <h3 className={"team-four-title team-six-title tw-text-2xl fw-medium font-rethink tw-mb-2 tw-transition-3"}>
                      <a className={"hover-text-main-four-600 hover-underline tw-transition-3"} href={"/about"}>
                        {m.role}
                      </a>
                    </h3>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      {m.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={"project-seven-area pt-120 tw-pb-22"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-4 col-lg-4"}>
              <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                  Completed projects
                </div>
              </div>
            </div>
            <div className={"col-xl-8 col-lg-8"}>
              <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                  Offices, Warehouses, Cafés And Towers Across The UAE
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {projects.map((p, i) => (
              <div key={p.sn} className={"col-xl-4 col-lg-4 col-md-6"}>
                <div className={`project-seven-wrapper ${PROJECT_CARDS[i]} tw-mb-705`} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={PROJECT_DELAYS[i]}>
                  <div className={"project-seven-thumb tw-mb-5"}>
                    <a className={"d-block"} href={"/projects"} tabIndex={-1} aria-hidden="true">
                      <img className={"tw-rounded-lg"} src={`/assets/images/thumbs/project-seven-thumb${i + 1}.jpg`} alt={`${p.name}, ${p.type.toLowerCase()} project by ASAS in ${p.location}`} />
                    </a>
                  </div>
                  <div className={"project-seven-content"}>
                    <h3 className={"tw-text-3xl"}>
                      <a className={"hover-text-main-four-600"} href={"/projects"}>
                        {p.name}
                      </a>
                    </h3>
                    <p className={styles.projectMeta}>
                      {p.type} · {p.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeSectors />

      <section className={"counter-seven-area pt-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row align-items-center justify-content-between"}>
            {COMPANY.stats.map((s, i) => (
              <div key={s.label} className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                  <h2 className={"counter-six-title tw-text-170 fw-medium font-oswald text-white mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={String(s.value)}></span>
                    {s.suffix}
                  </h2>
                  <p className={"counter-seven-paragraph text-white text-capitalize"}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img className={"counter-seven-shape-1 position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/counter-seven-shape1.png"} alt={""} />
          <img className={"counter-seven-shape-2 position-absolute bottom-0 end-0 z-n1"} src={"/assets/images/shapes/counter-seven-shape2.png"} alt={""} />
        </div>
      </section>

      <section className={"cta-seven-area position-relative z-2"}>
        <div className={"container"}>
          <div className={"cta-seven-bg tw-rounded-xl overflow-hidden"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
            <div className={"row align-items-center gx-0"}>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"cta-seven-thumb"}>
                  <img src={"/assets/images/thumbs/cta-seven-thumb.jpg"} alt={"ASAS engineer on the phone arranging a site visit"} />
                </div>
              </div>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"cta-seven-wrapper tw-p-15"}>
                  <div className={"section-six-wrapper tw-mb-10"}>
                    <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      Site visits &amp; quotations
                    </div>
                    <h2 className={"section-seven-title tw-text-122 tw-mb-6 tw-char-animation"}>
                      Planning A Fit-Out Or Modification?
                    </h2>
                    <p>
                      Call {PHONE.label} for a site visit. We review the space, your drawings and the authority requirements, then send a quotation for the whole job.
                    </p>
                  </div>
                  <div className={`cta-seven-button ${styles.heroButtons}`}>
                    <PrimaryBtn href={`tel:${PHONE.tel}`} label={`Call ${PHONE.label}`} />
                    <PrimaryBtn href={QUOTE_HREF} label="Request a Quote" gold />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing-seven slot (its padding sits under the CTA card), now the animated service grid */}
      <section className={"pricing-seven-area tw-pb-22 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-6"}>
              <div className={"section-six-wrapper text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                  Our services
                </div>
                <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                  Eleven Services, One Contractor
                </h2>
              </div>
            </div>
          </div>
          <ServiceMotionGrid />
        </div>
        <div>
          <img className={"position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/cta-seven-shape1.png"} alt={""} />
          <img className={"position-absolute top-0 end-0 z-n1"} src={"/assets/images/shapes/cta-seven-shape2.png"} alt={""} />
        </div>
      </section>

      <HomeShopBand />

      <SectorTicker />

      <section className={"choose-seven-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-6 col-lg-6"}>
              <div className={"choose-seven-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-six-wrapper tw-mb-10"}>
                  <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    WHY CHOOSE ASAS
                  </div>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-6 tw-char-animation"}>
                    One Accountable Contractor For The Whole Job
                  </h2>
                  <p className={"section-seven-paragraph"}>
                    Civil, joinery and all MEP trades under one contract, built by our own team to specification and on schedule.
                  </p>
                </div>
                <div className={"choose-seven-wrap"}>
                  <div className={"choose-seven-item d-flex tw-gap-6 tw-mb-10"}>
                    <div className={"choose-seven-icon"}>
                      <span className={"tw-w-21 tw-h-21 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg"}>
                        <img src={"/assets/images/icons/asas/toolbox.svg"} width={50} height={52} alt={""} />
                      </span>
                    </div>
                    <div className={"choose-seven-content"}>
                      <h3 className={"choose-seven-title tw-text-505 fw-semibold tw-mb-4"}>
                        Every Trade, In-House
                      </h3>
                      <p className={"choose-seven-paragraph"}>
                        One contractor for civil, joinery and all MEP trades, delivered by our own engineers, foremen and technicians rather than subcontracted labour.
                      </p>
                    </div>
                  </div>
                  <div className={"choose-seven-item d-flex tw-gap-6 tw-mb-10"}>
                    <div className={"choose-seven-icon"}>
                      <span className={"tw-w-21 tw-h-21 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg"}>
                        <img src={"/assets/images/icons/asas/approved.svg"} width={50} height={50} alt={""} />
                      </span>
                    </div>
                    <div className={"choose-seven-content"}>
                      <h3 className={"choose-seven-title tw-text-505 fw-semibold tw-mb-4"}>
                        Approved, Quality-Led, Safety-First
                      </h3>
                      <p className={"choose-seven-paragraph"}>
                        Approved by {COMPANY.approvals.join(", ")}. Our quality system is built on specifications, schedules and progress reporting, and every site runs under our EHS policy.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <PrimaryBtn href="/about" label="About ASAS" />
                </div>
              </div>
            </div>
            <div className={"col-xl-6 col-lg-6"}>
              <div className={"choose-seven-thumb text-lg-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/choose-seven-thumb.jpg"} alt={"ASAS engineer inspecting completed MEP installation for handover"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"position-absolute top-0 start-0 z-n1 d-none d-xxl-block"} src={"/assets/images/shapes/choose-seven-shape.png"} alt={""} />
        </div>
      </section>

      {/* blog-seven, repurposed: service highlights (no dates or authors) */}
      <section className={"blog-seven-area pt-120 tw-pb-22"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-4"}>
              <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle tw-text-base font-heading fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                  Services in focus
                </div>
              </div>
            </div>
            <div className={"col-xl-8"}>
              <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                  From Bare Shell To Handover, Villa Extensions And EV Chargers.
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            {HIGHLIGHTS.map((h) => {
              const s = bySlug(h.slug);
              const c = SERVICE_CONTENT[h.slug];
              const href = `/services/${h.slug}`;
              return (
                <div key={h.slug} className={"col-xl-4 col-lg-6 col-md-6"}>
                  <div className={"blog-wrapper blog-seven-wrapper bg-white tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div>
                      <h3 className={"tw-text-2xl tw-mb-6"}>
                        <a className={"hover-text-main-four-600"} href={href}>
                          {s.title}
                        </a>
                      </h3>
                    </div>
                    <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-6"}>
                      <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={h.img} alt={h.alt} />
                      <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={h.img} alt={""} />
                      <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={href} tabIndex={-1} aria-hidden="true"></a>
                    </div>
                    <div className={"tw-mb-4"}>
                      <p className={"blog-seven-paragraph"}>
                        {c.summary}
                      </p>
                    </div>
                    <div className={"blog-seven-wrap d-flex align-items-center justify-content-between"}>
                      <div className={"blog-meta"}>
                        <ul className={"d-flex align-items-center tw-gap-5"}>
                          <li className={"d-inline-flex align-items-center tw-gap-2"}>
                            <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                              <i className={`ph ${s.icon}`} aria-hidden="true"></i>
                            </span>
                            {s.group}
                          </li>
                          <li className={"d-inline-flex align-items-center tw-gap-2"}>
                            <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                              <i className={"ph ph-buildings"} aria-hidden="true"></i>
                            </span>
                            {c.sectors.length} {c.sectors.length === 1 ? "sector" : "sectors"}
                          </li>
                        </ul>
                      </div>
                      <div className={"blog-seven-button"}>
                        <a className={`blog-seven-btn tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-main-four-600 tw-text-xl hover-bg-main-four-600 hover-text-white ${styles.roundBtn}`} href={href} aria-label={`${s.title}: service details`}>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HomeTrustBand />

      <section className={"contact-seven-area py-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-5 col-lg-5"}>
              <div className={"contact-seven-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-six-wrapper tw-mb-10"}>
                  <div className={"section-seven-subtitle font-heading section-three-subtitle section-six-subtitle tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Contact now
                  </div>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-6 tw-char-animation"}>
                    Tell Us About Your Project
                  </h2>
                  <p className={"tw-me-10"}>
                    Send your brief and we will arrange a site visit and a quotation. Our engineers {COMPANY.engineers.join(" and ")} handle every enquiry.
                  </p>
                </div>
                <div className={"contact-seven-wrap tw-w-435-px"}>
                  {COMPANY.phones.map((ph) => (
                    <div key={ph.tel} className={"contact-seven-item d-flex align-items-center tw-gap-505 tw-rounded-lg tw-p-205 tw-mb-705"}>
                      <div className={"contact-seven-icon"}>
                        <a className={"tw-w-20 tw-h-20 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg tw-text-10 bg-main-four-600 text-white"} href={`tel:${ph.tel}`} tabIndex={-1} aria-hidden="true">
                          <i className={"ph ph-phone-call"}></i>
                        </a>
                      </div>
                      <div className={"contact-seven-content"}>
                        <span className={"d-block tw-mb-2"}>
                          Call us
                        </span>
                        <a className={"d-block text-heading fw-medium hover-text-main-four-600"} href={`tel:${ph.tel}`}>
                          {ph.label}
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className={"contact-seven-item d-flex align-items-center tw-gap-505 tw-rounded-lg tw-p-205 tw-mb-705"}>
                    <div className={"contact-seven-icon"}>
                      <a className={"tw-w-20 tw-h-20 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg tw-text-10 bg-main-four-600 text-white"} href={`mailto:${COMPANY.email}`} tabIndex={-1} aria-hidden="true">
                        <i className={"ph ph-envelope"}></i>
                      </a>
                    </div>
                    <div className={"contact-seven-content"}>
                      <span className={"d-block tw-mb-2"}>
                        Email
                      </span>
                      <a className={`d-block text-heading fw-medium hover-text-main-four-600 ${styles.breakAll}`} href={`mailto:${COMPANY.email}`}>
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className={"fw-medium tw-mb-3 tw-text-base"}>
                    Office:
                  </h3>
                  <p className={"mb-0"}>
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-xl-7 col-lg-7"}>
              <div className={"contact-form contact-ip-form blog-details-contact-form"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h3 className={"text-heading tw-text-9 fw-normal tw-mb-8 tw-pe-4 "}>
                  Request a Quote
                </h3>
                <div>
                  <QuoteForm idPrefix="home-quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
