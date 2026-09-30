import PageShell from "@/components/PageShell";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";
import { TwBtn, CircleBtn } from "./ServiceBitsB";
import styles from "./ServicePagesB.module.css";

// Civil Works: the template's index-10 page (components/generated/Page_index_10_html.jsx)
// with every section, image, hover list, counter and animation hook kept.
// Only the words and links changed. Repurposed: booking form → quote CTA,
// team → in-house roles, client reviews → commitments, blog → related services.
// Photos are placeholders: design-system/image-manifest/services-b.md

const C = SERVICE_CONTENT.civil;
const PHONE = COMPANY.phones[0];

const BTN_SIX = "tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-six-600 text-white tw-rounded-4xl position-relative z-1";

const HERO_AVATARS = [
  { src: "/assets/images/thumbs/banner-client-img1.png", cls: "position-relative z-1" },
  { src: "/assets/images/thumbs/banner-client-img2.png", cls: "position-relative z-2 tw--ms-16-px z-1" },
  { src: "/assets/images/thumbs/banner-client-img5.png", cls: "position-relative z-5 tw--ms-16-px" },
];

// service-six hover list: each item swaps the photo named in `rel`.
const SCOPE = [
  { title: "Blockwork & Partitions", href: QUOTE_HREF, img: "/assets/images/thumbs/service-six-thumb1.jpg", ext: "1", alt: "New blockwork partitions built by ASAS in a fit-out" },
  { title: "Plastering", href: QUOTE_HREF, img: "/assets/images/thumbs/service-six-thumb2.png", ext: "2", alt: "ASAS team plastering and preparing walls" },
  { title: "Flooring", href: QUOTE_HREF, img: "/assets/images/thumbs/service-six-thumb3.png", ext: "3", alt: "Floor preparation and flooring laid by ASAS" },
  { title: "Structural Modifications", href: QUOTE_HREF, img: "/assets/images/thumbs/service-six-thumb4.png", ext: "4", alt: "Structural modification to an existing space by ASAS" },
  { title: "Villa Extensions & Service Blocks", href: "/services/villa-works", img: "/assets/images/thumbs/service-six-thumb5.png", ext: "5", alt: "Villa service block built by ASAS in Dubai" },
];

const COUNTER_LINES = [
  ["Years in", "business"],
  ["Projects", "delivered"],
  ["In-house", "team"],
  ["Authority", "approvals"],
];
const COUNTER_DELAYS = ["200", "300", "400", "500"];

// Real entries from the project list (content.md §1.3), civil-heavy types.
const PROJECT_CARDS = [
  { sn: 57, col: "col-xl-7 col-lg-7", delay: "200", img: "/assets/images/thumbs/project-six-thumb1.jpg" },
  { sn: 59, col: "col-xl-5 col-lg-5", delay: "300", img: "/assets/images/thumbs/project-six-thumb2.jpg" },
  { sn: 73, col: "col-xl-5 col-lg-5", delay: "200", img: "/assets/images/thumbs/project-six-thumb3.jpg" },
  { sn: 88, col: "col-xl-7 col-lg-7", delay: "400", img: "/assets/images/thumbs/project-six-thumb4.jpg" },
].map((card) => ({ ...card, project: PROJECTS.find((p) => p.sn === card.sn) }));

// One icon per PROCESS step, white on the blue circle; width/height = the template icons' size.
const STEP_ICONS = [
  { name: "inspection-white", w: "49", h: "47" }, // Site visit & planning
  { name: "design-drawing-white", w: "46", h: "47" }, // Design & approvals
  { name: "hard-hat-white", w: "46", h: "46" }, // Execution
  { name: "handover-white", w: "52", h: "40" }, // Handover
];
const STEP_DELAYS = ["200", "300", "400", "500"];

// content.md §1.4 (Man Power page): roles and vehicles only, no personal names.
const TEAM_TOP = [
  { role: "MEP Engineers", text: "2 engineers", img: "/assets/images/thumbs/team-six-thumb1.png", alt: "ASAS engineer setting out civil works on site", delay: "300" },
  { role: "Foremen", text: "2 site foremen", img: "/assets/images/thumbs/team-six-thumb2.png", alt: "ASAS foreman supervising blockwork", delay: "400" },
];
const TEAM_BOTTOM = [
  { role: "Technicians", text: "12 technicians", img: "/assets/images/thumbs/team-six-thumb3.png", alt: "ASAS technician at work on site", delay: "200" },
  { role: "Helpers", text: "7 site helpers", img: "/assets/images/thumbs/team-six-thumb4.png", alt: "ASAS site helpers moving materials", delay: "300" },
  { role: "Site Vehicles", text: "1 bus and 4 light vehicles", img: "/assets/images/thumbs/team-six-thumb5.png", alt: "ASAS site vehicle and crew bus", delay: "400" },
];

const COMMITMENTS = [
  {
    title: "Quality policy",
    icon: "ph-medal",
    text: "We meet customer requirements through continual improvement of our Quality Management System, with specifications, time schedules and progress reporting on every job.",
  },
  {
    title: "Environment, health & safety",
    icon: "ph-shield-check",
    text: "We are committed to conserving the environment and providing a safe, healthy workplace for everyone on site, and we comply with all EHS legal requirements.",
  },
  {
    title: "Authority approvals",
    icon: "ph-seal-check",
    text: `Approved by or registered with ${COMPANY.approvals.join(", ")}.`,
  },
];

const RELATED = ["fit-out", "joinery", "villa-works", "planning-architecture"].map((slug) =>
  SERVICES.find((s) => s.slug === slug)
);
const RELATED_ALTS = {
  "fit-out": "Completed office fit-out by ASAS",
  joinery: "Joinery installed by ASAS in a commercial interior",
  "villa-works": "Villa extension built by ASAS",
  "planning-architecture": "ASAS engineers reviewing architectural drawings",
};

function TeamCard({ t }) {
  return (
    <div className={"team-four-wrapper team-six-wrapper team-ip-wrapper tw-mb-8 bg-white tw-p-205"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={t.delay}>
      <div className={"team-four-thumb team-six-thumb position-relative z-1 tw-pb-205"}>
        <span className={"d-block"}>
          <img className={"tw-rounded-lg w-100"} src={t.img} alt={t.alt} />
        </span>
      </div>
      <div className={"team-six-content text-center tw-py-705 position-relative z-1"}>
        <h4 className={"team-four-title team-six-title tw-text-605 fw-bold font-rethink tw-mb-1 font-nunito tw-transition-3"}>
          {t.role}
        </h4>
        <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
          {t.text}
        </p>
      </div>
    </div>
  );
}

function BlogCard({ s, i, className }) {
  const href = `/services/${s.slug}`;
  const img = `/assets/images/thumbs/blog-six-thumb${i + 1}.jpg`;
  return (
    <div className={className} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={["200", "200", "300", "400"][i]}>
      <div className={"blog-six-thumb blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-5"}>
        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={img} alt={RELATED_ALTS[s.slug]} />
        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={img} alt={""} />
        <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={href} tabIndex={"-1"} aria-hidden={"true"}></a>
      </div>
      <div className={"blog-six-content"}>
        <div className={"blog-meta tw-mb-6"}>
          <ul className={"d-flex align-items-center tw-gap-5"}>
            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
              <span className={"text-main-six-600 tw-text-xl"}>
                <i className={`ph-bold ${s.icon}`}></i>
              </span>
              {s.group === "Specialist" ? "Specialist works" : `${s.group} services`}
            </li>
          </ul>
        </div>
        <div className={"tw-mb-8"}>
          <h4 className={"blog-six-title tw-text-605 font-oswald"}>
            <a className={"hover-text-main-six-600"} href={href}>
              {s.title}
            </a>
          </h4>
          <p className={"tw-mt-3"}>{SERVICE_CONTENT[s.slug].summary}</p>
        </div>
        <div className={"blog-six-button"}>
          <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 font-oswald hover-text-main-six-600 tw-text-lg"} href={href} aria-label={`Explore ${s.title}`}>
            Explore Service
            <span className={"d-inline-block lh-1 tw-text-xl"}>
              <i className={"ph-bold ph-arrow-right"}></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CivilPage() {
  return (
    <PageShell>
        <section className={"banner-six-area"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row gx-0"}>
              <div className={"col-xl-7"}>
                <div className={"banner-six-content bg-img position-relative z-1 py-120"} data-background-image={"/assets/images/thumbs/banner-six-bg.png"}>
                  <div className={"tw-mb-10"}>
                    <div className={"banner-six-subtitle section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-white tw-mb-4 d-inline-block position-relative z-1"}>
                      Fit-Out · Civil Works
                    </div>
                    <h1 className={"banner-six-title tw-text-24 fw-semibold text-white font-oswald tw-mb-10 tw-char-animation"}>
                      Civil Works
                    </h1>
                    <p className={"banner-six-paragraph text-white font-nunito tw-text-xl"}>
                      {C.intro[0]}
                    </p>
                  </div>
                  <div className={"banner-six-bottom d-flex align-items-center tw-gap-5"}>
                    <div className={"banner-six-button"}>
                      <TwBtn href={QUOTE_HREF} className={BTN_SIX}>
                        Request a Quote
                      </TwBtn>
                    </div>
                    <div className={"d-flex align-items-center"}>
                      {HERO_AVATARS.map((a) => (
                        <div className={`tw-w-140 tw-h-140 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 ${a.cls} border border-3 border-white`} key={a.src}>
                          <img src={a.src} alt={""} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className={"tw-text-xl fw-bold text-white font-oswald"}>
                        90+ projects since {COMPANY.founded}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-5"}>
                <div className={"banner-six-thumb h-100"}>
                  <img className={"object-fit-cover h-100"} src={"/assets/images/thumbs/banner-six-thumb.jpg"} alt={"ASAS team building blockwork partitions on a Dubai site"} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"about-six-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4"}>
                <div className={"section-six-wrapper"}>
                  <div className={"section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    About the Service
                  </div>
                </div>
              </div>
              <div className={"col-xl-8"}>
                <div className={"about-six-wrapper"}>
                  <div className={"tw-mb-20"}>
                    <h2 className={"text-invert font-oswald tw-text-101"}>
                      We Build The Partitions, Walls, Floors And Structural Changes That Every Fit-Out, Villa Extension And Service Block Starts With, And Coordinate Them With Our Joinery And MEP Teams On The Same Site.
                    </h2>
                  </div>
                  <div className={"about-six-wrap d-flex"}>
                    <div className={"about-six-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <h3 className={"about-six-count-title tw-text-10 fw-normal font-oswald text-heading mb-0 lh-1 d-flex align-items-start"}>
                        <span className={"font-oswald odometer tw-text-38 fw-semibold"} data-count={String(COMPANY.stats[0].value)}></span>
                        Yrs
                      </h3>
                      <span className={"about-six-count-paragraph tw-text-lg fw-normal font-nunito text-heading tw-w-244-px"}>
                        Delivering fit-out and civil works in the UAE since {COMPANY.founded}
                      </span>
                    </div>
                    <div className={"about-six-content"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <div className={"tw-mb-12"}>
                        <p className={"tw-text-xl font-nunito"}>
                          {C.intro[1]}
                        </p>
                      </div>
                      <div className={"tw-hover-btn-wrapper footer-three-hover-btn"}>
                        <CircleBtn href={"/about"}>About Us</CircleBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"gallery-six-area text-center"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"gallery-six-thumb-wrap position-relative"}>
                  <div className={"gallery-six-thumb"}>
                    <img className={"object-fit-cover"} src={"/assets/images/thumbs/gallery-six-thumb.jpg"} alt={"Wide view of a villa extension under construction by ASAS"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"contact-six-area py-120"}>
          <div className={"container-fluid"}>
            <div className={"contact-six-bg bg-main-six-600 tw-rounded-xl tw-p-5"}>
              <div className={"row align-items-center"}>
                <div className={"col-xl-6"}>
                  <div className={"contact-six-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/contact-six-thumb.jpg"} alt={"ASAS engineer measuring a space before civil works"} />
                  </div>
                </div>
                <div className={"col-xl-5"}>
                  <div className={"contact-two-wrapper contact-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"section-six-wrapper tw-mb-10"}>
                      <div className={"banner-six-subtitle font-heading before-white section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-white tw-mb-4 d-inline-block position-relative z-1"}>
                        Request a Quote
                      </div>
                      <h2 className={"font-oswald tw-text-101 fw-semibold text-white tw-char-animation"}>
                        Tell Us About Your Civil Works
                      </h2>
                    </div>
                    <div>
                      <ul className={styles.ctaList}>
                        <li>
                          <i className={"ph-bold ph-check-circle"} aria-hidden={"true"}></i>
                          The location and approximate size of the space
                        </li>
                        <li>
                          <i className={"ph-bold ph-check-circle"} aria-hidden={"true"}></i>
                          The works you need: blockwork, partitions, plastering, flooring or structural changes
                        </li>
                        <li>
                          <i className={"ph-bold ph-check-circle"} aria-hidden={"true"}></i>
                          Any drawings or photos you already have
                        </li>
                      </ul>
                      <div className={"row align-items-center"}>
                        <div className={"col-xl-6 col-md-6"}>
                          <div className={"tw-mt-8"}>
                            <TwBtn href={QUOTE_HREF} className={"w-100 contact-six-btn tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-white text-heading tw-rounded-4xl position-relative z-1"} iconColor={"text-white"} textColor={"text-heading"}>
                              Request a Quote
                            </TwBtn>
                          </div>
                        </div>
                        <div className={"col-xl-6 col-md-6"}>
                          <div className={"tw-mt-8"}>
                            <a className={styles.ctaLink} href={`tel:${PHONE.tel}`}>
                              <i className={"ph-bold ph-phone-call"} aria-hidden={"true"}></i>
                              Call {PHONE.label}
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
        <section className={"service-six-area pb-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row tw-mb-14"}>
              <div className={"col-xl-3"}>
                <div className={"section-six-wrapper"}>
                  <div className={"section-three-subtitle font-heading section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Scope of Work
                  </div>
                </div>
              </div>
              <div className={"col-xl-8"}>
                <div className={"section-six-wrapper"}>
                  <h2 className={"text-invert font-oswald tw-text-101 font-oswald"}>
                    Civil Works Planned Together With Joinery And MEP, So Openings, Chases And Services Are Built In From The Start Instead Of Cut In Afterwards.
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row justify-content-end"}>
              <div className={"col-xl-9"}>
                <div className={"row align-items-center"}>
                  <div className={"col-xl-7 col-lg-7"}>
                    <div className={"service-six-list-thumb-wrap position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <div id={"service-six-thumb"} className={"service-six-list-thumb-1"}>
                        {SCOPE.map((s) => (
                          <img className={`service-six-list-thumb-${s.ext} tw-rounded-xl`} src={s.img} alt={s.alt} key={s.ext} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={"col-xl-5 col-lg-5"}>
                    <div className={"service-six-list-wrap"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      {SCOPE.map((s, i) => (
                        <div className={`service-six-list-item d-flex align-items-center justify-content-between${i < SCOPE.length - 1 ? " tw-mb-7" : ""} cursor-pointer position-relative${i === 0 ? " active" : ""}`} rel={`service-six-list-thumb-${s.ext}`} key={s.title}>
                          <div className={"service-six-list-left"}>
                            <h3 className={"service-six-list-title tw-text-805 font-oswald fw-semibold tw-transition-3"}>
                              <a className={"tw-transition-3"} href={s.href}>
                                {s.title}
                              </a>
                            </h3>
                          </div>
                          <div className={"service-six-list-right"}>
                            <a className={"service-six-list-btn tw-w-11 tw-h-11 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-lg"} href={s.href} aria-label={s.href === QUOTE_HREF ? `Request a quote for ${s.title.toLowerCase()}` : `View ${s.title}`}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </a>
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
            <img className={"service-six-shape position-absolute z-n1"} src={"/assets/images/shapes/service-six-shape.png"} alt={""} />
          </div>
        </section>
        <section className={"counter-six-area tw-pb-24"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between"}>
              {COMPANY.stats.map((stat, i) => (
                <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"} key={stat.label}>
                  <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={COUNTER_DELAYS[i]}>
                    <p className={"counter-six-paragraph tw-text-lg fw-medium text-heading bg-white tw-ps-8 font-nunito position-relative z-1"}>
                      {COUNTER_LINES[i][0]}
                      <br />
                      {COUNTER_LINES[i][1]}
                    </p>
                    <h2 className={"counter-six-title tw-text-210 fw-medium font-oswald text-heading mb-0 d-inline-flex align-items-center lh-1"}>
                      <span className={"font-oswald odometer"} data-count={String(stat.value)}></span>
                      {stat.suffix}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={"project-six-area py-120"}>
          <div className={"container"}>
            <div className={"row tw-mb-14"}>
              <div className={"col-xl-6"}>
                <div className={"section-six-wrapper"}>
                  <div className={"section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    {C.projectsHeading}
                  </div>
                </div>
              </div>
              <div className={"col-xl-5"}>
                <div className={"section-six-wrapper"}>
                  <h2 className={"tw-char-animation font-oswald tw-text-101 font-oswald"}>
                    Buildings, Villas And Service Blocks
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              {PROJECT_CARDS.map(({ project, col, delay, img }) => (
                <div className={col} key={project.sn}>
                  <div className={"project-six-wrapper tw-mb-122"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={delay}>
                    <div className={"project-six-thumb tw-mb-7"}>
                      <a className={"d-block"} href={"/projects"} tabIndex={"-1"} aria-hidden={"true"}>
                        <img className={"tw-rounded-xl w-100"} src={img} alt={`${project.name}: ${project.type.toLowerCase()}, ${project.location}`} />
                      </a>
                    </div>
                    <div className={"project-six-content"}>
                      <h3 className={"project-six-title tw-text-3xl fw-semibold font-oswald tw-mb-4"}>
                        <a className={"hover-text-main-six-600"} href={"/projects"}>
                          {project.name}
                        </a>
                      </h3>
                      <p className={"project-six-paragraph font-nunito"}>
                        {project.type} · {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className={"col-xl-4 col-lg-5"}>
                <div className={"project-six-button text-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tw-hover-btn-wrapper footer-three-hover-btn"}>
                    <CircleBtn href={"/projects"}>View All Projects</CircleBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"choose-us-six-area py-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"section-six-wrapper text-center tw-mb-22"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    How We Work
                  </div>
                  <h2 className={"tw-char-animation font-oswald tw-text-101 font-oswald"}>
                    From Site Visit To Handover
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={"container tw-container-1570-px"}>
            <div className={"position-relative z-1"}>
              <div className={"row"}>
                {PROCESS.map((step, i) => (
                  <div className={"col-xl-3 col-lg-6 col-md-6"} key={step.title}>
                    <div className={"choose-us-six-wrapper text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={STEP_DELAYS[i]}>
                      <div className={"choose-us-six-icon"}>
                        <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative z-1"}>
                          <img src={`/assets/images/icons/asas/${STEP_ICONS[i].name}.svg`} width={STEP_ICONS[i].w} height={STEP_ICONS[i].h} alt={""} />
                        </span>
                      </div>
                      <div className={"choose-us-six-content"}>
                        <div className={"choose-us-six-number font-oswald tw-text-20 fw-medium text-uppercase"}>
                          {`Step 0${i + 1}`}
                        </div>
                      </div>
                      <div className={"choose-us-six-wrap text-center position-relative z-1"}>
                        <h3 className={"choose-us-six-title font-oswald tw-text-3xl fw-medium tw-mb-4"}>
                          {step.title}
                        </h3>
                        <p className={"choose-us-six-paragraph"}>
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img className={"choose-us-six-shape position-absolute start-50 translate-middle-x z-n1"} src={"/assets/images/shapes/choose-us-six-shape.png"} alt={""} />
              </div>
            </div>
          </div>
        </section>
        <section className={"team-six-area pt-120 tw-pb-20"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-6"}>
                <div className={"section-six-wrapper tw-mb-10 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Our Team
                  </div>
                  <h2 className={"text-invert font-oswald tw-text-101 font-oswald tw-mb-8"}>
                    An In-House Team, From Engineering To Site Work
                  </h2>
                  <p>
                    Our {COMPANY.stats[2].value}-strong team of engineers, foremen, technicians and helpers works on our own sites, supported by our own vehicles. For a site visit, speak to {COMPANY.engineers.join(" or ")}.
                  </p>
                </div>
              </div>
              <div className={"col-xl-6"}>
                <div className={"row"}>
                  {TEAM_TOP.map((t) => (
                    <div className={"col-xl-6 col-lg-6 col-md-6"} key={t.role}>
                      <TeamCard t={t} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={"row"}>
              {TEAM_BOTTOM.map((t) => (
                <div className={"col-xl-3 col-lg-6 col-md-6"} key={t.role}>
                  <TeamCard t={t} />
                </div>
              ))}
              <div className={"col-xl-3 col-lg-6 col-lg-6"}>
                <div className={"team-six-button d-flex justify-content-center align-items-center h-100"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"tw-hover-btn-wrapper footer-three-hover-btn"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <CircleBtn href={"/contact"}>Contact Us</CircleBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonial-six-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-3"}>
                <div className={"section-six-wrapper tw-mb-10 tw-me-10 tw-mt-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle font-heading section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Our Commitments
                  </div>
                </div>
              </div>
              <div className={"col-xl-9"}>
                <div className={"section-six-wrapper tw-mb-10 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"tw-char-animation font-oswald tw-text-30 font-oswald tw-mb-8"}>
                    Quality, Safety, Approvals
                  </h2>
                  <p className={"section-six-paragraph tw-w-470-px font-nunito fw-medium"}>
                    We work to contract specifications, statutory regulations and codes of practice, and keep a good, clean working environment on every site.
                  </p>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-5 col-lg-7"}>
                <div className={"testimonial-six-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"testimonial-six-active swiper-container"}>
                    <div className={"testimonial-six-swiper-wrapper swiper-wrapper"}>
                      {COMMITMENTS.map((c) => (
                        <div className={"testimonial-six-wrapper tw-py-9 tw-px-11 tw-rounded-lg swiper-slide"} key={c.title}>
                          <div className={"testimonial-six-review tw-mb-8"} aria-hidden={"true"}>
                            <i className={`ph-bold ${c.icon}`} style={{ color: "#184FB4" }}></i>
                          </div>
                          <div className={"tw-mb-11"}>
                            <p className={"tw-text-lg font-nunito tw-text-5"}>
                              {c.text}
                            </p>
                          </div>
                          <div className={"d-flex align-items-center justify-content-between tw-gap-4"}>
                            <div>
                              <h3 className={"font-oswald tw-text-2xl"}>
                                {c.title}
                              </h3>
                              <p className={"tw-text-lg font-nunito"}>
                                {COMPANY.short}
                              </p>
                            </div>
                            <div className={"testimonial-six-arrow"}>
                              <button type={"button"} className={"slider-prev "} tabIndex={"0"} aria-label={"Previous slide"}>
                                <svg width={"34"} height={"34"} viewBox={"0 0 34 34"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                                  <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M4.50139 15.5777L28.7318 15.5777V17.6546L4.50139 17.6546V15.5777Z"} fill={"#231F20"}></path>
                                  <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M5.54097 17.6537C10.4252 17.6537 14.4164 13.3584 14.4164 8.77825V7.73979H12.3394V8.77825C12.3394 12.2557 9.23429 15.5767 5.54097 15.5767H4.50306V17.6537H5.54097Z"} fill={"#231F20"}></path>
                                  <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M5.53999 15.5766C10.4242 15.5766 14.4154 19.8719 14.4154 24.4521V25.4906H12.3385V24.4521C12.3385 20.9745 9.23331 17.6536 5.53999 17.6536L4.50208 17.6536V15.5766H5.53999Z"} fill={"#231F20"}></path>
                                </svg>
                              </button>
                              <button type={"button"} className={"slider-next "} tabIndex={"0"} aria-label={"Next slide"}>
                                <svg width={"34"} height={"34"} viewBox={"0 0 34 34"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                                  <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M28.7294 17.6531L4.49902 17.6531V15.5762L28.7294 15.5762V17.6531Z"} fill={"#231F20"}></path>
                                  <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M27.6898 15.5771C22.8056 15.5771 18.8145 19.8724 18.8145 24.4526V25.491H20.8914V24.4526C20.8914 20.9751 23.9965 17.6541 27.6898 17.6541H28.7277V15.5771H27.6898Z"} fill={"#231F20"}></path>
                                  <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M27.6898 17.6542C22.8056 17.6542 18.8145 13.3589 18.8145 8.7787V7.74023H20.8914V8.7787C20.8914 12.2563 23.9965 15.5772 27.6898 15.5772H28.7277V17.6542H27.6898Z"} fill={"#231F20"}></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7 col-lg-5"}>
                <div className={"testimonial-six-thumb text-end position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/testimonial-six-thumb.jpg"} alt={"Clean, organised ASAS site during civil works"} />
                  <div className={"testimonial-six-quate"}>
                    <span>
                      <img src={"/assets/images/icons/asas/approved.svg"} width={"50"} height={"50"} alt={""} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"testimonial-six-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/testimonial-six-shape1.png"} alt={""} />
            <img className={"testimonial-six-shape-2 position-absolute z-n1 top-0 end-0"} src={"/assets/images/shapes/testimonial-six-shape2.png"} alt={""} />
          </div>
        </section>
        <section className={"blog-six-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row align-items-center tw-mb-12"}>
              <div className={"col-xl-7 col-lg-7 col-md-7"}>
                <div className={"section-six-wrapper mb-sm-3"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Related Services
                  </div>
                  <h2 className={"tw-char-animation font-oswald tw-text-101 font-oswald"}>
                    Civil Works Are Part Of A Complete Fit-Out
                  </h2>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-5 col-md-5"}>
                <div className={"blog-six-top-button text-md-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <TwBtn href={QUOTE_HREF} className={BTN_SIX}>
                    Request a Quote
                  </TwBtn>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6"}>
                <BlogCard s={RELATED[0]} i={0} className={"blog-wrapper  blog-six-wrapper tw-mb-705"} />
              </div>
              <div className={"col-xl-8"}>
                <div className={"row"}>
                  <div className={"col-xl-6 col-lg-6"}>
                    <BlogCard s={RELATED[1]} i={1} className={"blog-wrapper blog-six-wrapper tw-mb-705"} />
                  </div>
                  <div className={"col-xl-6 col-lg-6"}>
                    <BlogCard s={RELATED[2]} i={2} className={"blog-wrapper blog-six-wrapper tw-mb-705"} />
                  </div>
                  <div className={"col-xl-12 col-lg-12"}>
                    <BlogCard s={RELATED[3]} i={3} className={"blog-wrapper blog-six-wrapper four d-flex align-items-center tw-gap-8 tw-mb-705"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
