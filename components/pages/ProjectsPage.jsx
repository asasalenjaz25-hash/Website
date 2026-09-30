import PageShell from "@/components/PageShell";
import { COMPANY, QUOTE_HREF } from "@/components/site";
import { PROJECTS, featuredProjects } from "@/components/projects";
import ProjectsFilter, { ProjectCard } from "./ProjectsFilter";
import styles from "./ProjectsPage.module.css";

// Rebuilt from components/generated/Page_project_html.jsx. Every template
// section, class name, data-aos attribute and image is kept; only text,
// links and lists carry ASAS content. Photos are template placeholders
// (see design-system/image-manifest/projects.md).
//   1. breadcrumb-area            -> "Our Projects" title + breadcrumb photo
//   2. project-three-area (top)   -> section heading + button
//      project-three-area (slider)-> featured ASAS projects in the Swiper slider
//   3. added: sector filter + grid of the same project-three cards
//   4. added: full project list table (all 95)
//   5. added: closing quote CTA (this template page has no CTA section)

export default function ProjectsPage() {
  const featured = featuredProjects();
  const joinList = (items) => `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

  return (
    <PageShell>
      <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-8"}>
              <div className={"tw-mb-10"}>
                <h1 className={"breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation"}>
                  Our Projects
                </h1>
                <nav aria-label="Breadcrumb">
                  <ul className={"d-flex align-items-end justify-content-center tw-gap-2 tw-mb-7"}>
                    <li className={"fw-normal"}>
                      <a href={"/"} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                        Home
                      </a>
                    </li>
                    <li aria-hidden="true">
                      <span className={"d-inline-flex lh-1"}>
                        <i className={"ph-bold ph-caret-right text-heading"}></i>
                      </span>
                    </li>
                    <li className={"fw-normal"}>
                      <span className={"text-main-eight-600"} aria-current="page">
                        Our Projects
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"breadcrumb-thumb"}>
                <img
                  className={"tw-rounded-2xl"}
                  src={"/assets/images/thumbs/breadcrumb-thumb.jpg"}
                  alt={"ASAS Alenjaz team on a completed fit-out project in Dubai"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"project-three-area py-120 project-ip-area pt-0 bg-white"}>
        <div className={"project-three-top"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between"}>
              <div className={"col-xl-7 col-lg-7 col-md-9"}>
                <div className={"section-three-wrapper tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Featured Projects
                  </div>
                  <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                    Fit-Out And MEP Work Across The UAE
                  </h2>
                  <p className={styles.intro}>
                    Since {COMPANY.founded}, {COMPANY.short} has delivered fit-out and MEP works for offices,
                    restaurants, shops, warehouses, residential buildings and villas in {joinList(COMPANY.areas)}.
                  </p>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-5"}>
                <div className={"project-three-top-right text-lg-end "} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <a href={"/services"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"} aria-hidden="true">
                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                          <i className={"ph-bold ph-arrow-right"}></i>
                          <i className={"ph-bold ph-arrow-right"}></i>
                        </span>
                      </span>
                      <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                        <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                          Our Services
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"project-three-bottom"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"project-three-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"project-three-active swiper-container"}>
                    <div className={"project-three-swiper-wrapper swiper-wrapper"}>
                      {featured.map((p, i) => (
                        <ProjectCard key={p.sn} project={p} index={i} className={"swiper-slide"} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="browse-projects" className={"py-120 bg-white"} aria-labelledby="browse-projects-title">
        <div className={"container"}>
          <div className={"row align-items-end justify-content-between"}>
            <div className={"col-xl-7 col-lg-7 col-md-9"}>
              <div className={"section-three-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                  Project
                </div>
                <h2 id="browse-projects-title" className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                  Browse Our Projects By Sector
                </h2>
              </div>
            </div>
          </div>
          <ProjectsFilter />
        </div>
      </section>

      <section id="project-list" className={`py-120 ${styles.listSection}`} aria-labelledby="project-list-title">
        <div className={"container"}>
          <div className={"row justify-content-between align-items-end tw-mb-10"}>
            <div className={"col-lg-7"}>
              <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                Project List
              </div>
              <h2 id="project-list-title" className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation"}>
                Full Project List
              </h2>
            </div>
            <div className={"col-lg-5"}>
              <p className={styles.intro}>
                All {PROJECTS.length} projects from the {COMPANY.short} company profile, listed by serial number.
              </p>
              <p className={styles.tableKey}>
                <strong>Key:</strong> G+1 = ground plus one floor, SB = service block
              </p>
            </div>
          </div>

          <div className={styles.tableWrap} tabIndex={0} role="region" aria-labelledby="project-list-title">
            <table className={styles.table}>
              <caption className="visually-hidden">
                {COMPANY.short} project list: serial number, type, project and location
              </caption>
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Type</th>
                  <th scope="col">Project</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map((p) => (
                  <tr key={p.sn}>
                    <td className={styles.snCell}>{String(p.sn).padStart(2, "0")}</td>
                    <td>{p.type}</td>
                    <th scope="row">{p.name}</th>
                    <td>{p.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={"py-120 bg-white"} aria-labelledby="projects-cta-title">
        <div className={"container"}>
          <div className={styles.cta} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
            <div className={styles.ctaCopy}>
              <h2 id="projects-cta-title" className={styles.ctaTitle}>
                Planning a fit-out or MEP project?
              </h2>
              <p className={styles.ctaText}>
                Tell us about your office, restaurant, shop, warehouse or villa. {COMPANY.short} is approved by {joinList(COMPANY.approvals)}.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href={QUOTE_HREF} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-two-600 text-white tw-rounded-4xl position-relative z-1"}>
                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"} aria-hidden="true">
                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                      <i className={"ph-bold ph-arrow-right"}></i>
                      <i className={"ph-bold ph-arrow-right"}></i>
                    </span>
                  </span>
                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                      Request a Quote
                    </span>
                  </span>
                </span>
              </a>
              <a href={`tel:${COMPANY.phones[0].tel}`} className={styles.ctaPhone}>
                <i className="ph ph-phone-call" aria-hidden="true"></i>
                {COMPANY.phones[0].label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
