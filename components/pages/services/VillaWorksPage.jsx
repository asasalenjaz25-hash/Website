// Villa Modifications & Service Blocks (/services/villa-works). Built on the full
// index-6 template layout: tabs, before/after slider, FAQ accordion, quotes
// slider, marquee and every image are kept; only the words, links and lists are
// ASAS content. Template photos are placeholders until ASAS supplies project
// photos (see design-system/image-manifest/services-c.md).
import PageShell from "@/components/PageShell";
import QuoteForm from "@/components/pages/QuoteForm";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import { PROJECTS } from "@/components/projects";
import ServiceExtras from "@/components/details/ServiceExtras";

const SLUG = "villa-works";
const service = SERVICES.find((s) => s.slug === SLUG);
const content = SERVICE_CONTENT[SLUG];
const PHONE = COMPANY.phones[0];
const bySn = (sn) => PROJECTS.find((p) => p.sn === sn);

const FEATURES = [
  // icon = ASAS library icon; size = the template icon it replaces (keeps the layout).
  { title: "Service blocks", text: "New service blocks for private villas in Oud Al Muteena, Al Rashidiya, Al Satwa, Al Lisaili and Al Quoz.", icon: "service-block", size: [41, 41] },
  { title: "Extensions & G+1", text: "Villa extensions and added floors, with the civil works and all MEP trades in one contract.", icon: "villa", size: [41, 36] },
  { title: "Modifications", text: "Changes to existing villa layouts, including recent work in Al Rashidiya, Al Tawar and Al Warqa.", icon: "civil", size: [40, 44] },
];

// Service-two tabs: the four kinds of villa work in the scope.
const TABS = [
  {
    id: "home",
    icon: "service-block",
    size: [40, 41],
    title: "Service blocks",
    short: "Oud Al Muteena · Al Satwa · Al Quoz",
    text: "Service blocks built for private villas across Dubai, including Oud Al Muteena, Al Rashidiya, Al Satwa, Al Lisaili and Al Quoz.",
    alt: "Villa service block built by ASAS Alenjaz",
  },
  {
    id: "profile",
    icon: "villa",
    size: [40, 41],
    title: "Extensions & G+1 additions",
    short: "G+1 · G+1+SB · G+1+SB+M",
    text: "Villa extensions and added floors, including G+1, G+1+SB and G+1+SB+M villas in Nad Al Sheba, Al Khawaneej, Al Barsha and Jumeirah Golf Estates.",
    alt: "G+1 villa extension under construction by ASAS Alenjaz",
  },
  {
    id: "contact",
    icon: "civil",
    size: [40, 51],
    title: "Layout modifications",
    short: "Al Rashidiya · Al Tawar · Al Warqa",
    text: "Modifications to existing villa layouts, with the civil and MEP works planned together by one team.",
    alt: "Modified villa interior after layout changes by ASAS Alenjaz",
  },
  {
    id: "house",
    icon: "residential-tower",
    size: [40, 41],
    title: "Residential buildings",
    short: "From G+1 to G+3+R",
    text: "Residential building works from G+1 to G+3+R, including a G+3+R building in Al Satwa and a G+1 building in Al Souk Al Kabeer.",
    alt: "G+3+R residential building in Al Satwa by ASAS Alenjaz",
  },
];

// Work-two has three steps: the four PROCESS steps, with execution and handover together.
const STEPS = [
  { title: PROCESS[0].title, text: PROCESS[0].text },
  { title: PROCESS[1].title, text: PROCESS[1].text },
  { title: PROCESS[2].title + " & handover", text: "Our in-house teams build to specification, then test, commission and hand over." },
];

const MARQUEE = ["Villa extensions", "Service blocks", "G+1 additions", "Layout modifications"];

const FAQS = [
  {
    q: "Which areas do you cover?",
    a: "Our villa projects are in Dubai and Sharjah. Across all our work we cover Dubai, Abu Dhabi, Sharjah and Ajman.",
  },
  {
    q: "Are you approved by the Dubai authorities?",
    a: "Yes. ASAS Alenjaz is approved by DEWA, Dubai Municipality, Civil Defence and Trakhees.",
  },
  {
    q: "What kinds of villa work do you take on?",
    a: "Service blocks, villa extensions and G+1 additions, layout modifications to existing villas, and residential buildings from G+1 to G+3+R.",
  },
  {
    q: "Do you do the whole job, or only the MEP?",
    a: "Both. We handle the civil works and the electrical, plumbing and HVAC works under one contract, with our own engineers, foremen and technicians.",
  },
  {
    q: "How do I get a quotation?",
    a: "Send the Request a Quote form or call us. We start with a site visit to review the villa, its drawings and the authority requirements, then prepare the quotation.",
  },
];
const FAQ_IDS = ["one", "two", "three", "four", "five"];

// Quotes slider -> real villa and residential projects (no reviews).
const VILLA_PROJECTS = [
  { sn: 73, cls: "one", idx: "6", dark: false },
  { sn: 59, cls: "two bg-black", idx: "3", dark: true },
  { sn: 71, cls: "three", idx: "2", dark: false },
  { sn: 57, cls: "four", idx: "4", dark: false },
  { sn: 81, cls: "five bg-main-eight-600", idx: "1", dark: true },
  { sn: 91, cls: "six", idx: "5", dark: false },
].map((item) => ({ ...item, project: bySn(item.sn) }));

// Blog tabs -> related services (same Specialist group + the trades villa work uses).
const RELATED = [
  { id: "hometwo", slug: "civil" },
  { id: "profiletwo", slug: "planning-architecture" },
  { id: "messagestwo", slug: "ev-chargers" },
  { id: "settingstwo", slug: "plumbing" },
].map((item) => ({ ...item, ...SERVICES.find((s) => s.slug === item.slug), content: SERVICE_CONTENT[item.slug] }));
const GROUP_LABEL = { "Fit-Out": "Fit-out works", MEP: "MEP works", Specialist: "Specialist services" };

export default function VillaWorksPage() {

  return (
    <PageShell>
      <section className={"banner-two-area position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-6 col-lg-8 col-md-11 col-sm-11"}>
              <div className={"banner-two-left"}>
                <div>
                  <div className={"banner-two-subtitle font-heading fw-semibold text-main-eight-600 tw-text-lg text-uppercase tw-mb-2"}>
                    {service.group} · {service.title}
                  </div>
                  <h1 className={"banner-two-title tw-text-118 tw-char-animation tw-mb-9"}>
                    {service.title}
                  </h1>
                  <p className={"tw-text-lg tw-mb-9"}>
                    {content.summary}
                  </p>
                </div>
                <div className={"banner-two-button"}>
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
            </div>
          </div>
        </div>
        <div>
          <div className={"banner-two-thumb position-absolute end-0"}>
            <img src={"/assets/images/thumbs/banner-four-thumb.png"} style={{ width: "100%", height: "auto", aspectRatio: "883 / 915", objectFit: "contain" }} alt={"Technician with a toolbox, ready for villa works"} />
          </div>
          <img className={"banner-two-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/banner-two-shape1.png"} alt={""} />
          <img className={"banner-two-shape-2 position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/banner-two-shape2.png"} alt={""} />
          <img className={"banner-two-shape-3 position-absolute translate-middle-x z-n1"} src={"/assets/images/shapes/banner-two-shape3.png"} alt={""} />
        </div>
      </section>
      <section className={"feature-two-area pb-120 position-relative z-2"}>
        <div className={"container"}>
          <div className={"row"}>
            {FEATURES.map((item, i) => (
              <div key={item.title} className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-two-wrapper text-center bg-white tw-rounded-xl tw-pt-10 tw-pb-8 tw-px-10 tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(300 + i * 100)}>
                  <div className={"feature-two-icon tw-mb-5"}>
                    <span className={"tw-w-19 tw-h-19 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle position-relative z-1"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + item.icon + "-white.svg"} width={item.size[0]} height={item.size[1]} alt={""} />
                    </span>
                  </div>
                  <div>
                    <h2 className={"tw-text-605 tw-mb-4"}>
                      <a href={"/projects"}>
                        {item.title}
                      </a>
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
      <section className={"about-two-area pb-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-between"}>
            <div className={"col-xl-2"}>
              <div className={"section-wrapper tw-mb-6"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  about villa works
                </div>
              </div>
            </div>
            <div className={"col-xl-8"}>
              <div className={"tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h2 className={"about-two-title text-invert text-capitalize fw-medium tw-mb-13"}>
                  {content.intro[0]}
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-6 col-lg-9 col-md-10"}>
              <div className={"about-two-thumb one"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <img className={"tw-rounded-xl tw-animation-img-left"} src={"/assets/images/thumbs/contact-six-thumb.jpg"} style={{ width: "100%", height: "auto", aspectRatio: "564 / 482", objectFit: "cover" }} alt={"Roofer working on a villa extension roof"} />
              </div>
            </div>
            <div className={"col-xl-6 col-lg-12 col-md-12"}>
              <div className={"tw-mb-5"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"row align-items-end"}>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"bg-main-eight-600 tw-rounded-xl tw-mw-56 w-100 tw-px-10 tw-py-13"}>
                      <h2 className={"tw-text-133 fw-medium text-white mb-0 lh-1"}>
                        <span className={"font-heading text-white odometer"} data-count={COMPANY.stats[1].value}></span>
                        {COMPANY.stats[1].suffix}
                      </h2>
                      <p className={"text-white"}>
                        {COMPANY.stats[1].label}
                      </p>
                    </div>
                  </div>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"about-two-thumb two"}>
                      <img className={"tw-rounded-xl tw-animation-img-right"} src={"/assets/images/thumbs/banner-six-thumb.jpg"} style={{ width: "100%", height: "auto", aspectRatio: "312 / 358", objectFit: "cover" }} alt={"Technician working on a villa ceiling"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"tw-me-20"}>
                <div className={"tw-mb-6"}>
                  <p>
                    {content.intro[1]} Our own engineers, foremen and technicians carry out the work.
                  </p>
                </div>
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={"about-two-text-shape"}>
            <h3 className={"tw-text-base"}>
              Villa Works
            </h3>
          </div>
          <img className={"about-two-bg-shape position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/about-two-bg-shape.png"} alt={""} />
        </div>
      </section>
      <section className={"service-two-area py-120 position-relative z-1 @@serviceipClass"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-4"}>
              <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"tw-mb-7"}>
                  <ul className={"service-two-nav-tabs nav nav-tabs"} id={"myTab"} role={"tablist"}>
                    {TABS.map((tab, i) => (
                      <li key={tab.id} className={"service-two-nav-item nav-item tw-mb-6 w-100 animation-item"} role={"presentation"}>
                        <button className={"service-two-nav-link nav-link bg-white tw-rounded-xl w-100 " + (i === 0 ? "active " : "") + "d-inline-flex justify-content-start align-items-center tw-gap-6"} id={tab.id + "-tab"} data-bs-toggle={"tab"} data-bs-target={"#" + tab.id} type={"button"} role={"tab"} aria-controls={tab.id} aria-selected={i === 0 ? "true" : "false"}>
                          <span className={"service-two-left-icon"}>
                            <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 tw-rounded-lg"}>
                              <img className={"animate__wobble"} src={"/assets/images/icons/asas/" + tab.icon + "-navy.svg"} width={tab.size[0]} height={tab.size[1]} alt={""} />
                            </span>
                          </span>
                          <span className={"text-start"}>
                            <span className={"service-two-left-title d-block tw-text-505 fw-semibold text-heading text-capitalize tw-mb-2"}>
                              {tab.title}
                            </span>
                            <span className={"service-two-left-paragraph d-block text-body"}>
                              {tab.short}
                            </span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a href={"/services"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                          <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                        </span>
                      </span>
                      <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                        <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                          All Services
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className={"col-xl-8 col-lg-10"}>
              <div className={"service-two-wrapper tw-ms-17"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    What we build
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-medium tw-char-animation tw-mb-6"}>
                    Villa works under one contract
                  </h2>
                  <p>
                    We build service blocks, add floors and extensions, and modify villa layouts. {content.scope[4]}.
                  </p>
                </div>
                <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tab-content"} id={"myTabContent"}>
                    {TABS.map((tab, i) => (
                      <div key={tab.id} className={"tab-pane fade" + (i === 0 ? " show active" : "")} id={tab.id} role={"tabpanel"} aria-labelledby={tab.id + "-tab"}>
                        <div>
                          <div className={"service-two-thumbs position-relative z-1"}>
                            <img className={"tw-rounded-lg"} src={["/assets/images/thumbs/project-six-thumb3.jpg", "/assets/images/thumbs/contact-six-thumb.jpg", "/assets/images/thumbs/about-ten-thumb.jpg", "/assets/images/thumbs/project-six-thumb1.jpg"][i]} style={{ width: "100%", height: "auto", aspectRatio: "809 / 438", objectFit: "cover" }} alt={tab.alt} />
                            <div className={"service-two-content position-absolute"}>
                              <h3 className={"tw-text-122 text-white tw-mb-3"}>
                                <a href={"/projects"}>
                                  {tab.title}
                                </a>
                              </h3>
                              <p className={"text-white tw-mb-6"}>
                                {tab.text}
                              </p>
                              <div>
                                <a className={"fw-semibold text-white d-inline-flex align-items-center tw-gap-2 hover-text-main-two-600"} href={"/projects"}>
                                  View Projects
                                  <span>
                                    <i className={"ph-bold ph-arrow-up-right"} aria-hidden={"true"}></i>
                                  </span>
                                </a>
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
        </div>
        <div>
          <img className={"service-two-hand position-absolute end-0 z-n1"} src={"/assets/images/shapes/service-two-hand.png"} alt={""} />
        </div>
      </section>
      <section className={"choose-us-two-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-6 col-lg-9"}>
              <div className={"choose-us-two-thumb position-relative z-1 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"choose-us-two-thumb-1 text-end position-relative z-2"}>
                  <img src={"/assets/images/thumbs/service-six-thumb4.png"} style={{ width: "100%", height: "auto", aspectRatio: "349 / 438", objectFit: "cover" }} alt={"Roof works on a villa extension"} />
                </div>
                <div className={"choose-us-two-thumb-2"}>
                  <img src={"/assets/images/thumbs/about-three-thumb1.jpg"} style={{ width: "100%", height: "auto", aspectRatio: "329 / 501", objectFit: "cover" }} alt={"Technician in a hard hat on a villa site"} />
                </div>
                <div>
                  <img className={"choose-us-two-thumb-shape-1 tw-rounded-xl position-absolute z-n1"} src={"/assets/images/shapes/choose-us-two-thumb-shape1.jpg"} alt={""} />
                  <img className={"choose-us-two-thumb-shape-2 tw-rounded-xl position-absolute z-n1"} src={"/assets/images/shapes/choose-us-two-thumb-shape2.png"} alt={""} />
                </div>
              </div>
            </div>
            <div className={"col-xl-6 col-lg-10"}>
              <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    why choose us
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    One contractor from the first wall to the last connection
                  </h2>
                  <p>
                    We have delivered around 35 villas and service blocks across Dubai and Sharjah. Our in-house team of {COMPANY.stats[2].value} covers the civil works and every MEP trade, so one team is responsible for your villa from start to finish.
                  </p>
                </div>
                <div className={"choose-us-two-list tw-mb-43"}>
                  <ul>
                    {["Civil and MEP in one contract", "DEWA-approved electrical works", "In-house engineers & technicians", "Regular progress reports"].map((item) => (
                      <li key={item} className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                        <span className={"text-main-eight-600 tw-text-xl"}>
                          <i className={"ph ph-check-circle"}></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"choose-us-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/choose-us-two-shape1.png"} alt={""} />
          <img className={"choose-us-two-shape-2 position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/choose-us-two-shape2.png"} alt={""} />
          <img className={"choose-us-two-shape-3 position-absolute end-0 z-n1"} src={"/assets/images/shapes/choose-us-two-shape3.png"} alt={""} />
        </div>
      </section>
      <section className={"work-two-area pt-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-9"}>
              <div className={"section-wrapper tw-mb-30"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  how we work
                </div>
                <h2 className={"about-two-title text-invert text-capitalize fw-medium tw-mb-13"}>
                  From the first site visit to handover, this is how a villa project runs.
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"work-two-wrapper"}>
                {STEPS.map((step, i) => (
                  <div key={step.title} className={"work-two-item"}>
                    <div className={"work-two-thumb"}>
                      <span className="asas-step-disc" role="img" aria-label={["ASAS Alenjaz engineer on a villa site visit", "Villa drawings prepared for authority approval", "ASAS Alenjaz team handing over a finished villa"][i]}>
                        <i className={`ph ${["ph-ruler", "ph-compass-tool", "ph-key"][i]}`} aria-hidden="true"></i>
                      </span>
                      <div className={"work-two-icon"}>
                        <span>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className={"work-two-thumb-border"}></div>
                    </div>
                    <div className={"work-two-content text-center"}>
                      <h3 className={"work-two-title tw-text-7 fw-medium tw-mb-3"}>
                        {step.title}
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
          <img className={"work-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/work-two-shape1.png"} alt={""} />
          <img className={"work-two-shape-2 position-absolute bottom-0 z-n1"} src={"/assets/images/shapes/work-two-shape2.png"} alt={""} />
        </div>
      </section>
      <section className={"before-after-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row align-items-end tw-mb-14"}>
            <div className={"col-xl-7 col-lg-10"}>
              <div className={"section-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  before & after
                </div>
                <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  Villa modifications you can see
                </h2>
              </div>
            </div>
            <div className={"col-xl-5 col-lg-8"}>
              <div className={"before-after-list"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <ul>
                  {["Service blocks", "Villa extensions", "G+1 additions", "Layout changes"].map((item) => (
                    <li key={item} className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                      <span className={"text-main-eight-600 tw-text-xl"}>
                        <i className={"ph ph-check-circle"}></i>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <div className={"before-after-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <img src={"/assets/images/thumbs/before-after-thumb1.jpg"} alt={"Villa before modification works"} />
                <img src={"/assets/images/thumbs/before-after-thumb2.jpg"} alt={"The same villa after modification by ASAS Alenjaz"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/before-after-shape1.png"} alt={""} />
          <img className={"before-after-shape-2 position-absolute end-0 z-n1"} src={"/assets/images/shapes/before-after-shape2.png"} alt={""} />
        </div>
      </section>
      <section className={"counter-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-12"}>
              <div className={"counter-two-heading text-center tw-mb-12 position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"tw-text-505 font-heading fw-normal bg-white tw-px-8 d-inline-block position-relative z-2"}>
                  {COMPANY.tagline}.
                </div>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"counter-wrapper counter-two-wrapper d-flex align-items-center justify-content-between"}>
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
      <section className={"faq-two-area py-120 @@faqipClass"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-5 col-lg-8"}>
              <div className={"faq-two-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-wrapper"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    FAQS
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Villa works: your questions
                  </h2>
                </div>
                <div className={"faq-two-left-contact bg-white tw-rounded-xl tw-pt-12 tw-pb-15 tw-ps-10 tw-pe-20"}>
                  <div>
                    <h3 className={"tw-text-7 fw-normal tw-mb-10"}>
                      Planning a villa extension, service block or modification? Call us.
                    </h3>
                  </div>
                  <div>
                    <a className={"bg-main-eight-600 text-white tw-rounded-4xl fw-bold tw-py-2 tw-ps-2 tw-pe-6 d-inline-flex align-items-center tw-gap-2"} href={"tel:" + PHONE.tel}>
                      <span className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-heading"}>
                        <i className={"ph ph-phone-call"} aria-hidden={"true"}></i>
                      </span>
                      {PHONE.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-7"}>
              <div className={"faq-two-wrapper tw-ms-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"accordion"} id={"general_faqaccordion"}>
                  {FAQS.map((item, i) => (
                    <div key={item.q} className={"accordion-item faq-two-accordion-item"}>
                      <h3 className={"accordion-header"} id={"order_" + FAQ_IDS[i]}>
                        <button className={"accordion-button " + (i === 0 ? "" : "collapsed ") + "faq-two-accordion-button tw-text-lg"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#order__collapse_" + FAQ_IDS[i]} aria-expanded={i === 0 ? "true" : "false"} aria-controls={"order__collapse_" + FAQ_IDS[i]}>
                          {i + 1}. {item.q}
                        </button>
                      </h3>
                      <div id={"order__collapse_" + FAQ_IDS[i]} className={"accordion-collapse collapse" + (i === 0 ? " show" : "")} role={"region"} aria-labelledby={"order_" + FAQ_IDS[i]} data-bs-parent={"#general_faqaccordion"}>
                        <div className={"accordion-body faq-two-accordion-body"}>
                          <p className={"tw-text-base fw-medium"}>
                            {item.a}
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
      </section>
      <section className={"testimonial-two-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-8"}>
              <div className={"section-wrapper text-center pb-120"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  Villa projects
                </div>
                <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  Villas and service blocks we have delivered
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"testimonial-two-wrapper quotes page-width position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
              {VILLA_PROJECTS.map(({ project, cls, idx, dark }, i) => (
                <div key={project.sn} className={"testimonial-two-item " + cls + " quotes-slide slideshow__slide--active"} data-slider-slide-index={idx} aria-hidden={"false"} tabIndex={"-1"}>
                  <div className={"tw-mb-3"}>
                    <span className={"font-heading tw-text-sm fw-semibold text-uppercase " + (!dark ? "text-main-eight-600" : cls.includes("bg-black") ? "text-main-two-600" : "text-white")}>
                      {project.type}
                    </span>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={dark ? "text-white" : "text-heading"}>
                      {project.type} project in {project.location}, delivered by ASAS Alenjaz.
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={"/assets/images/thumbs/testimonial-seven-img" + (i + 1) + ".png"} alt={project.name + ", " + project.location} />
                      </span>
                    </div>
                    <div>
                      <h3 className={(dark ? "text-white " : "") + "tw-text-base"}>
                        {project.name}
                      </h3>
                      <p className={dark ? "text-white" : undefined}>
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img className={"testimonial-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/testimonial-two-shape1.png"} alt={""} />
          <img className={"testimonial-two-shape-2 position-absolute start-0 z-n1"} src={"/assets/images/shapes/testimonial-two-shape2.png"} alt={""} />
          <img className={"testimonial-two-shape-3 position-absolute z-n1"} src={"/assets/images/shapes/testimonial-two-shape3.png"} alt={""} />
        </div>
      </section>
      <ServiceExtras slug="villa-works" />

      <section className={"contact-two-area py-120"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-xl-6"}>
              <div className={"contact-two-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"tw-mb-6"}>
                  <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/project-six-thumb3.jpg"} style={{ width: "100%", height: "auto", aspectRatio: "624 / 457", objectFit: "cover" }} alt={"Villa with a new extension"} />
                </div>
                <div className={"contact-two-info bg-white tw-rounded-lg tw-py-5 tw-ps-10 tw-pe-6"}>
                  <div>
                    <h4 className={"tw-text-2xl fw-medium text-main-eight-600 tw-mb-6"}>
                      Authority-approved contractor
                    </h4>
                    <p className={"fw-medium tw-w-320-px"}>
                      Approved by {COMPANY.approvals.join(", ")}. Design and authority submissions are part of our process.
                    </p>
                  </div>
                  <div className={"contact-two-info-shape"}>
                    <img src={"/assets/images/shapes/contact-two-info-shape.png"} alt={""} />
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-xl-6"}>
              <div className={"contact-two-wrapper bg-white tw-py-15 tw-ps-10 tw-pe-5 tw-rounded-lg"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    request a quote
                  </div>
                  <h2 className={"section-title text-heading tw-text-12 fw-semibold tw-char-animation tw-mb-6"}>
                    Tell us about your villa project
                  </h2>
                </div>
                <div>
                  <QuoteForm idPrefix={"villa-quote"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"cta-two-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-xl-8"}>
              <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-wrapper text-center tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    Request a quote
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Planning a villa extension, service block or modification?
                  </h2>
                  <p className={"fw-medium tw-w-680-px m-auto"}>
                    Tell us about your villa. We start with a site visit, then give you one quotation covering the civil and MEP works.
                  </p>
                </div>
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"cta-two-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape1.png"} alt={""} />
          <img className={"cta-two-shape-2 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape2.png"} alt={""} />
          <img className={"cta-two-shape-3 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape3.png"} alt={""} />
          <img className={"cta-two-shape-4 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape4.png"} alt={""} />
          <img className={"cta-two-shape-5 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape5.png"} alt={""} />
          <img className={"cta-two-shape-6 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape6.png"} alt={""} />
          <img className={"cta-two-shape-7 position-absolute top-50 translate-middle-y start-0 z-n1"} src={"/assets/images/shapes/cta-two-shape7.png"} alt={""} />
        </div>
      </section>
      <section className={"maquee-area maquee-two-area tw-pb-25 overflow-hidden position-relative z-2"}>
        <div className={"maquee-slider"}>
          <div className={"swiper maquee-active d-flex align-items-center"}>
            <div className={"swiper-wrapper maquee-transition"}>
              {[...MARQUEE, ...MARQUEE].map((item, i) => (
                <div key={i} className={"maquee-box w-auto swiper-slide"} aria-hidden={i >= MARQUEE.length ? "true" : undefined}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      {item}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={"blog-two-area py-120 position-relative z-1"}>
        <div className={"container"}>
          <div className={"row align-items-center tw-mb-10"}>
            <div className={"col-xl-5"}>
              <div className={"section-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-subtitle tw-text-lg fw-semibold font-heading text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                  Related services
                </div>
              </div>
            </div>
            <div className={"col-xl-7"}>
              <div className={"section-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                  Everything a villa project needs, from one contractor
                </h2>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-4 col-lg-4"}>
              <ul className={"nav nav-tabs blog-two-nav-tabs d-flex flex-column sticky-item"} id={"myTab-two"} role={"tablist"}>
                {RELATED.map((item, i) => (
                  <li key={item.id} className={"blog-two-nav-item tw-mb-5 nav-item"} role={"presentation"}>
                    <button className={"blog-two-nav-link nav-link text-heading fw-bold tw-rounded-xl w-100 hover-text-heading" + (i === 0 ? " active" : "")} id={item.id + "-tab"} data-bs-toggle={"tab"} data-bs-target={"#" + item.id} type={"button"} role={"tab"} aria-controls={item.id} aria-selected={i === 0 ? "true" : "false"}>
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={"col-xl-8 col-lg-8"}>
              <div className={"tab-content"}>
                {RELATED.map((item, i) => (
                  <div key={item.id} className={"tab-pane" + (i === 0 ? " active" : "")} id={item.id} role={"tabpanel"} aria-labelledby={item.id + "-tab"}>
                    <div className={"row"}>
                      <div className={"col-xl-12"}>
                        <div className={"blog-wrapper blog-two-wrapper main tw-ms-25 tw-p-705 tw-rounded-lg"}>
                          <div className={"blog-main-thumb blog-two-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-8"}>
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb" + (i + 1) + ".jpg"} alt={item.title + " by ASAS Alenjaz"} />
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb" + (i + 1) + ".jpg"} alt={""} />
                            <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/services/" + item.slug} aria-label={item.title}></a>
                          </div>
                          <div>
                            <div className={"blog-meta tw-mb-6"}>
                              <ul className={"d-flex align-items-center tw-gap-5 flex-wrap"}>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold " + item.icon} aria-hidden={"true"}></i>
                                  </span>
                                  {GROUP_LABEL[item.group]}
                                </li>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-house-line"} aria-hidden={"true"}></i>
                                  </span>
                                  Villas & residential
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className={"blog-two-title tw-text-9 fw-medium tw-mb-10"}>
                                <a href={"/services/" + item.slug}>
                                  {item.content.summary}
                                </a>
                              </h3>
                            </div>
                            <div>
                              <a href={"/services/" + item.slug} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                                      <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      View {item.title}
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
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={"blog-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/blog-two-shape1.png"} alt={""} />
          <img className={"blog-two-shape-2 position-absolute top-50 translate-middle-y start-0 z-n1"} src={"/assets/images/shapes/blog-two-shape2.png"} alt={""} />
          <img className={"blog-two-shape-3 position-absolute z-n1"} src={"/assets/images/shapes/blog-two-shape3.png"} alt={""} />
        </div>
      </section>
    </PageShell>
  );
}
