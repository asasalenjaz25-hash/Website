// One layout for all 11 service pages (/services/[slug]). Based on the
// service-details-area in Page_service_details_html.jsx: main column with the
// description, sidebar with every service and a contact box. Template photos
// (cleaning stock) are left out until ASAS supplies project images.
import PageShell from "@/components/PageShell";
import { COMPANY, SERVICES, QUOTE_HREF } from "@/components/site";
import { SERVICE_CONTENT } from "@/components/service-content";
import { ServicesBreadcrumb, ProcessSection, ServicesCta } from "@/components/pages/ServicesPage";
import s from "./Services.module.css";

export default function ServiceDetailPage({ slug }) {
  const service = SERVICES.find((sv) => sv.slug === slug);
  const content = SERVICE_CONTENT[slug];
  if (!service || !content) return null;

  return (
    <PageShell>
      <ServicesBreadcrumb title={service.title} trail={[{ label: "Services", href: "/services" }]} />

      <section className={"service-details-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-8"}>
              <div className={"service-details-wrapper"}>
                <div className={s.detailBody}>
                  <div className={"tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"d-flex align-items-center tw-gap-4 tw-mb-6"}>
                      <span className={`bg-main-eight-600 text-white ${s.cardIcon}`} aria-hidden={"true"}>
                        <i className={`ph ${service.icon}`}></i>
                      </span>
                      <span className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 ms-0"}>
                        {service.group === "MEP" ? "MEP works" : service.group === "Fit-Out" ? "Fit-out works" : "Specialist services"}
                      </span>
                    </div>
                    <h2 className={"tw-text-605 fw-normal tw-mb-6"}>
                      {content.summary}
                    </h2>
                    {content.intro.map((para, i) => (
                      <p key={i} className={i < content.intro.length - 1 ? "tw-mb-6" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className={"tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <h2 className={"tw-text-8 fw-normal tw-mb-6"}>
                      What the work covers
                    </h2>
                    <ul className={s.scopeList}>
                      {content.scope.map((item) => (
                        <li key={item} className={"tw-text-lg"}>
                          <i className={"ph-bold ph-check-circle"} aria-hidden={"true"}></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={"tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <h2 className={"tw-text-8 fw-normal tw-mb-6"}>
                      Sectors we serve
                    </h2>
                    <ul className={s.chips}>
                      {content.sectors.map((sector) => (
                        <li key={sector} className={s.chip}>
                          {sector}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <h2 className={"tw-text-8 fw-normal tw-mb-6"}>
                      {content.projectsHeading}
                    </h2>
                    <ul className={s.projectList}>
                      {content.projects.map((p) => (
                        <li key={p.name} className={s.projectItem}>
                          <strong>{p.name}</strong>
                          <span>{p.note}</span>
                        </li>
                      ))}
                    </ul>
                    <p className={"tw-mt-6 mb-0"}>
                      <a href={"/projects"} className={s.cardLink}>
                        See all projects
                        <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={"col-xl-4"}>
              <aside className={"service-details-sideber"} aria-label={"More services and contact"}>
                <div className={"service-details-sideber-item bg-white tw-py-12 tw-px-805 tw-rounded-lg tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h2 className={"tw-text-9 fw-normal tw-mb-6"}>
                    Our Services
                  </h2>
                  <nav aria-label={"All services"}>
                    <ul className={"service-details-sideber-list ps-0 mb-0"}>
                      {SERVICES.map((sv, i) => {
                        const active = sv.slug === slug;
                        const last = i === SERVICES.length - 1;
                        return (
                          <li key={sv.slug}>
                            <a
                              className={`d-inline-flex align-items-center justify-content-between tw-py-4 tw-px-5 tw-rounded-md w-100 text-heading ${last ? "" : "tw-mb-3"} hover-bg-main-eight-600 hover-text-white ${s.sideLink} ${active ? s.sideLinkActive : ""}`}
                              href={`/services/${sv.slug}`}
                              aria-current={active ? "page" : undefined}
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
                  </nav>
                </div>

                <div className={"service-details-sideber-item bg-white tw-py-12 tw-px-805 tw-rounded-lg tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"tw-text-9 fw-normal tw-mb-4"}>
                    Talk to our engineers
                  </h2>
                  <p className={"tw-mb-6"}>
                    Tell us about your project and we&apos;ll arrange a site visit and a quotation.
                  </p>
                  <ul className={"list-unstyled ps-0 tw-mb-8"}>
                    {COMPANY.phones.map((p) => (
                      <li key={p.tel}>
                        <a className={s.contactLine} href={`tel:${p.tel}`}>
                          <i className={"ph ph-phone-call"} aria-hidden={"true"}></i>
                          {p.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a className={s.contactLine} href={`mailto:${COMPANY.email}`}>
                        <i className={"ph ph-envelope"} aria-hidden={"true"}></i>
                        {COMPANY.email}
                      </a>
                    </li>
                    <li className={s.contactLine}>
                      <i className={"ph ph-map-pin"} aria-hidden={"true"}></i>
                      {COMPANY.address}
                    </li>
                  </ul>
                  <a className={s.quoteBtn} href={QUOTE_HREF}>
                    Request a Quote
                    <i className={"ph-bold ph-arrow-right"} aria-hidden={"true"}></i>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection className={"pb-120"} />

      <ServicesCta
        heading={`Get a quote for ${service.title}`}
        text={"Send us your drawings or tell us about the space. We'll arrange a site visit, review the scope and prepare a quotation."}
      />
      <div className={"pb-120"}></div>
    </PageShell>
  );
}
