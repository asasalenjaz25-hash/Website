import PageShell from "@/components/PageShell";
import { COMPANY } from "@/components/site";
import QuoteForm from "./QuoteForm";
import styles from "./InfoPages.module.css";

// Built from components/generated/Page_appointment_html.jsx: breadcrumb-area and
// appointment-ip-area. The booking form is replaced by <QuoteForm /> inside the
// template's own contact-two-wrapper card. Fields follow content.md §3.5 (no
// drawings upload: there is no backend).

export default function QuotePage() {
  const [p1, p2] = COMPANY.phones;
  return (
    <PageShell>
      <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-8"}>
              <div className={"tw-mb-10"}>
                <h1 className={"breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation"}>
                  Request a Quote
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
                        Request a Quote
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
                <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/breadcrumb-thumb.jpg"} alt={"ASAS Alenjaz engineer on a site visit, measuring a space before quoting"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"appointment-ip-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"contact-two-wrapper appointment-ip-wrapper bg-white tw-py-15 tw-ps-10 tw-pe-5 tw-rounded-lg"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-wrapper tw-mb-10"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    site visit &amp; quotation
                  </div>
                  <h2 className={"section-title text-heading tw-text-12 fw-semibold tw-char-animation tw-mb-6"}>
                    Tell Us About Your Project
                  </h2>
                  <p className={styles.formIntro}>
                    Share a few details about the space and the works you need: fit-out, MEP, villa works or EV chargers. We start
                    every project with a site visit to review the space, your drawings and the authority requirements, and then
                    prepare your quotation. Prefer to talk? Call <a href={`tel:${p1.tel}`}>{p1.label}</a> or{" "}
                    <a href={`tel:${p2.tel}`}>{p2.label}</a>, or email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
                  </p>
                </div>
                <div>
                  <QuoteForm idPrefix="quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
