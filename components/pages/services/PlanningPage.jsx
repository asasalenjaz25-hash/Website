// /services/planning-architecture. Rebuilt from the template's
// service-details.html (components/generated/Page_service_details_html.jsx):
// breadcrumb-area + service-details-area (main column, benefits list with two
// photos, work-process cards, sidebar service list, brochure box, photo CTA).
// Every section, image and class is kept; only the words and links changed.
// Template photos are placeholders; see design-system/image-manifest/services-hub.md.
import PageShell from "@/components/PageShell";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT, PROCESS } from "@/components/service-content";
import s from "./Planning.module.css";

const SLUG = "planning-architecture";

function listJoin(items) {
  return items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

export default function PlanningPage() {
  const service = SERVICES.find((sv) => sv.slug === SLUG);
  const content = SERVICE_CONTENT[SLUG];
  const [phone1] = COMPANY.phones;
  const sectors = listJoin(content.sectors.map((x) => x.toLowerCase()));

  return (
    <PageShell>
      <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-8"}>
              <div className={"tw-mb-10"}>
                <h1 className={`breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation ${s.crumbTitle}`}>
                  {service.title}
                </h1>
                <ul className={`d-flex align-items-end justify-content-center tw-gap-2 tw-mb-7 ${s.crumbList}`}>
                  <li className={"fw-normal"}>
                    <a href={"/"} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                      Home
                    </a>
                  </li>
                  <li aria-hidden={"true"}>
                    <span className={"d-inline-flex lh-1"}>
                      <i className={"ph-bold ph-caret-right text-heading"}></i>
                    </span>
                  </li>
                  <li className={"fw-normal"}>
                    <a href={"/services"} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                      Services
                    </a>
                  </li>
                  <li aria-hidden={"true"}>
                    <span className={"d-inline-flex lh-1"}>
                      <i className={"ph-bold ph-caret-right text-heading"}></i>
                    </span>
                  </li>
                  <li className={"fw-normal"}>
                    <span className={"text-main-eight-600"} aria-current={"page"}>
                      {service.title}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"breadcrumb-thumb"}>
                <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/breadcrumb-thumb.jpg"} alt={"Architectural floor plans and fit-out drawings laid out on a desk"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"service-details-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-8"}>
              <div className={"service-details-wrapper"}>
                <div className={"tw-mb-11"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-2xl w-100"} src={"/assets/images/thumbs/service-details-thumb.jpg"} alt={"ASAS engineer reviewing a space-planning layout for a fit-out"} />
                </div>
                <div className={`tw-ps-9 tw-pe-5 tw-pb-13 ${s.body}`}>
                  <div className={"tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <h2 className={"tw-text-9 fw-normal tw-mb-6"}>
                      Drawings you can build from
                    </h2>
                    <p className={"tw-mb-8"}>
                      {content.intro[0]}
                    </p>
                    <p>
                      {content.intro[1]}
                    </p>
                  </div>
                  <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <h2 className={"tw-text-9 fw-normal tw-mb-6"}>
                      Who we plan for
                    </h2>
                    <p className={"tw-mb-8"}>
                      We plan and design spaces for {sectors}. {content.projectsHeading} include{" "}
                      {content.projects.map((p, i) => (
                        <span key={p.name}>
                          <strong className={"text-heading fw-semibold"}>{p.name}</strong> ({p.note}){i < content.projects.length - 2 ? ", " : i === content.projects.length - 2 ? " and " : "."}
                        </span>
                      ))}{" "}
                      <a href={"/projects"} className={"text-main-eight-600 fw-semibold hover-underline"}>See all projects</a>
                    </p>
                  </div>
                  <div className={`d-flex tw-gap-7 tw-mb-10 row-cols-3 ${s.benefits}`}>
                    <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <h2 className={"tw-text-8 fw-normal tw-mb-6"}>
                        What&apos;s included
                      </h2>
                      <ul className={"service-details-list"}>
                        {content.scope.map((item) => (
                          <li key={item} className={"tw-text-lg text-heading fw-normal tw-ms-4 tw-mb-1"}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/service-details-img1.jpg"} alt={"Space-planning layout option for an office fit-out"} />
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/service-details-img2.jpg"} alt={"MEP design coordinated on an architectural floor plan"} />
                    </div>
                  </div>
                  <div className={"tw-mb-4"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <h2 className={"tw-text-9 fw-normal tw-mb-6"}>
                      Work Process
                    </h2>
                    <p className={"tw-mb-8"}>
                      Planning is the first stage of every project we build. From there, the same team carries your drawings through to handover, working to agreed specifications and time schedules with regular progress reports.
                    </p>
                  </div>
                  <ol className={"row list-unstyled ps-0 mb-0"}>
                    {PROCESS.map((step, i) => (
                      <li key={step.title} className={"col-xl-6 col-lg-6 col-md-6"}>
                        <div className={"service-details-item bg-white tw-py-9 tw-px-505 text-center tw-rounded-xl tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={String(200 + i * 100)}>
                          <div className={"service-details-icon tw-mb-6"}>
                            <span className={"tw-w-133 tw-h-133 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 text-white rounded-circle position-relative z-1"} aria-hidden={"true"}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div>
                            <h3 className={"tw-text-6 tw-mb-2"}>
                              <span className={"visually-hidden"}>Step {i + 1}: </span>
                              {step.title}
                            </h3>
                            <p className={"tw-text-sm"}>
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className={"col-xl-4"}>
              <div className={"service-details-sideber"}>
                <div className={"service-details-sideber-item bg-white tw-py-12 tw-px-805 tw-rounded-lg tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h2 className={"tw-text-9 fw-normal tw-mb-6"}>
                    Our Services
                  </h2>
                  <ul className={"service-details-sideber-list"}>
                    {SERVICES.map((sv, i) => {
                      const current = sv.slug === SLUG;
                      const last = i === SERVICES.length - 1;
                      return (
                        <li key={sv.slug}>
                          <a
                            className={`d-inline-flex align-items-center justify-content-between tw-py-4 tw-px-5 tw-rounded-md w-100 text-heading${last ? "" : " tw-mb-7"} hover-bg-main-eight-600 hover-text-white${current ? ` ${s.current}` : ""}`}
                            href={`/services/${sv.slug}`}
                            aria-current={current ? "page" : undefined}
                          >
                            {sv.title}
                            <span aria-hidden={"true"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={"service-details-sideber-item bg-white tw-py-12 tw-px-805 tw-rounded-lg tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"tw-text-9 fw-normal tw-mb-6"}>
                    Talk To Our Engineers
                  </h2>
                  <div className={"text-center tw-mb-8"}>
                    <p className={"d-inline-flex tw-gap-2 justify-content-center"}>
                      <span>
                        <img src={"/assets/images/icons/asas/engineer.svg"} width={26} height={26} alt={""} />
                      </span>
                      {COMPANY.engineers.join(" · ")}
                    </p>
                  </div>
                  <ul className={s.contactLines}>
                    {COMPANY.phones.map((ph) => (
                      <li key={ph.tel}>
                        <a href={`tel:${ph.tel}`}>
                          <i className={"ph-bold ph-phone"} aria-hidden={"true"}></i>
                          {ph.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={`mailto:${COMPANY.email}`}>
                        <i className={"ph-bold ph-envelope-simple"} aria-hidden={"true"}></i>
                        {COMPANY.email}
                      </a>
                    </li>
                  </ul>
                  <div>
                    <a className={"bg-main-eight-600 text-white tw-py-4 tw-px-10 w-100 d-inline-flex justify-content-center align-items-center tw-gap-2 tw-rounded-lg"} href={QUOTE_HREF}>
                      <span>
                        <img src={"/assets/images/icons/asas/document-white.svg"} width={26} height={26} alt={""} />
                      </span>
                      Request a Quote
                    </a>
                  </div>
                </div>
                <div className={"service-details-sideber-thumb position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/service-details-sideber-thumb.jpg"} alt={"Finished fit-out interior planned and built by ASAS Alenjaz"} />
                  <div className={"position-absolute start-0 bottom-0 tw-mb-705 tw-ms-705"}>
                    <div className={"tw-mb-8"}>
                      <h2 className={"text-white tw-text-6 fw-medium"}>
                        Planning a fit-out?
                      </h2>
                    </div>
                    <div className={"d-flex align-items-center tw-gap-205"}>
                      <div>
                        <a className={"tw-w-15 tw-h-15 lh-1 d-inline-flex align-items-center justify-content-center bg-white text-main-eight-600 tw-text-8 rounded-circle"} href={`tel:${phone1.tel}`} aria-label={`Call ${phone1.label}`}>
                          <i className={"ph ph-phone-call"} aria-hidden={"true"}></i>
                        </a>
                      </div>
                      <div>
                        <span className={"text-white tw-text-lg"}>
                          Call for a site visit
                        </span>
                        <a className={`text-white tw-text-lg d-block ${s.onDark}`} href={`tel:${phone1.tel}`}>
                          {phone1.label}
                        </a>
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
