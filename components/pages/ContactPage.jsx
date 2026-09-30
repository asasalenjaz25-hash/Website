import PageShell from "@/components/PageShell";
import { COMPANY, QUOTE_HREF } from "@/components/site";
import QuoteForm from "./QuoteForm";
import styles from "./InfoPages.module.css";

// Built from components/generated/Page_contact_html.jsx: breadcrumb-area and
// contact-ip-area (three info cards, form column, map column). The template form
// is replaced by <QuoteForm /> inside the same wrapper; the map shows the office.

const MAP_QUERY = "TADBEER Building, Deira, Dubai";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const ICON_LINK =
  "tw-w-155 tw-h-155 lh-1 d-inline-flex justify-content-center align-items-center bg-main-eight-50 text-main-eight-600 tw-text-3xl rounded-circle hover-bg-main-eight-600 hover-text-white";

export default function ContactPage() {
  const [p1, p2] = COMPANY.phones;
  const [e1, e2] = COMPANY.engineers;
  return (
    <PageShell>
      <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-8"}>
              <div className={"tw-mb-10"}>
                <h1 className={"breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation"}>
                  Contact Us
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
                        Contact Us
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
                <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/breadcrumb-thumb.jpg"} alt={"ASAS Alenjaz office at TADBEER Building, Deira, Dubai"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"contact-ip-area pb-120"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <div className={"section-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <h2 className={"section-title tw-text-14 fw-medium tw-char-animation tw-mb-6"}>
                  Our Contact Information
                </h2>
              </div>
            </div>
          </div>
          <div className={"row tw-mb-22"}>
            <div className={"col-xl-4 col-lg-6"}>
              <div className={"contact-ip-wrapper d-flex align-items-center tw-gap-5 tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"contact-ip-icon"}>
                  <a href={`tel:${p1.tel}`} className={ICON_LINK} aria-label={`Call ${p1.label}`}>
                    <i className={"animate__wobble ph ph-phone-call"} aria-hidden="true"></i>
                  </a>
                </div>
                <div className={styles.infoText}>
                  <span>
                    Call us
                  </span>
                  <a className={"tw-text-2xl fw-normal text-heading d-block hover-text-main-eight-600"} href={`tel:${p1.tel}`}>
                    {p1.label}
                  </a>
                  <a className={"tw-text-2xl fw-normal text-heading d-block hover-text-main-eight-600"} href={`tel:${p2.tel}`}>
                    {p2.label}
                  </a>
                  <span className={styles.contactNames}>
                    Ask for {e1} or {e2}
                  </span>
                </div>
              </div>
            </div>
            <div className={"col-xl-4 col-lg-6"}>
              <div className={"contact-ip-wrapper d-flex align-items-center tw-gap-5 tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"contact-ip-icon"}>
                  <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className={ICON_LINK} aria-label={"Open our office in Google Maps (opens in a new tab)"}>
                    <i className={"animate__wobble ph ph-map-pin-area"} aria-hidden="true"></i>
                  </a>
                </div>
                <div className={styles.infoText}>
                  <span>
                    Office
                  </span>
                  <p className={"tw-text-2xl fw-normal text-heading d-block"}>
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-xl-4 col-lg-6"}>
              <div className={"contact-ip-wrapper d-flex align-items-center tw-gap-5 tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                <div className={"contact-ip-icon"}>
                  <a href={`mailto:${COMPANY.email}`} className={ICON_LINK} aria-label={`Email ${COMPANY.email}`}>
                    <i className={"animate__wobble ph ph-envelope"} aria-hidden="true"></i>
                  </a>
                </div>
                <div className={styles.infoText}>
                  <span>
                    Email us
                  </span>
                  <a className={"tw-text-2xl fw-normal text-heading d-block hover-text-main-eight-600"} href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={"row align-items-center"}>
            <div className={"col-xl-6"}>
              <div className={"contact-form contact-ip-form blog-details-contact-form"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <h3 className={"text-heading tw-text-9 fw-normal tw-mb-8 tw-pe-4 "}>
                  Send Us Your Project Details
                </h3>
                <p className={styles.formIntro}>
                  Tell us about the space and the works you need. We start every project with a site visit, then prepare your
                  quotation. For a longer brief, use the <a href={QUOTE_HREF}>Request a Quote page</a>.
                </p>
                <div>
                  <QuoteForm idPrefix="contact" />
                </div>
              </div>
            </div>
            <div className={"col-xl-6"}>
              <div className={"tw-h-576-px"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <iframe
                  src={MAP_EMBED}
                  title={"Map: ASAS Alenjaz office, TADBEER Building, Deira, Dubai"}
                  loading={"lazy"}
                  referrerPolicy={"no-referrer-when-downgrade"}
                  className={"w-100 h-100 tw-rounded-lg border-0"}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
