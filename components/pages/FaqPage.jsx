import PageShell from "@/components/PageShell";
import { COMPANY, QUOTE_HREF } from "@/components/site";
import { SECTORS, sectorCounts } from "@/components/projects";
import FigureBanner from "@/components/hairline/FigureBanner";
import { AreasChips, ContactRail } from "@/components/details/Details";
import { INSTALL_PRICES, formatAED } from "@/components/shop/catalog";
import styles from "./InfoPages.module.css";

// Built from components/generated/Page_faq_html.jsx (breadcrumb-area and
// faq-two-area with its Bootstrap accordion). Only questions content.md §3.7
// can answer from the profile are included; [confirm] questions are left out.

const list = (items) => `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

// Sectors that actually have projects in the list, e.g. "offices, restaurants & cafés, …".
const counts = sectorCounts();
const SECTOR_NAMES = SECTORS.filter((s) => s.key !== "other" && counts[s.key]).map((s) => s.label.toLowerCase());

const FAQS = [
  {
    id: "one",
    q: "Which areas do you cover?",
    a: (
      <>
        We are based in Deira, Dubai, and most of our work is in Dubai. Our project list also includes work in Abu Dhabi,
        Sharjah and Ajman, for example Atlas Copco in Musaffah, Abu Dhabi, Diamond Plaza Building in Sharjah and Muzn café &amp; restaurant at 34 Mall, Ajman.{" "}
        <a href="/projects">See our projects</a>.
      </>
    ),
  },
  {
    id: "two",
    q: "Are you approved by the Dubai authorities?",
    a: (
      <>
        Yes. ASAS Alenjaz is approved by the Dubai Electricity and Water Authority (DEWA), Dubai Municipality, Civil Defence
        and Trakhees.
      </>
    ),
  },
  {
    id: "three",
    q: "Can you take on a full fit-out, or only MEP works?",
    a: (
      <>
        Both. We handle complete fit-outs from bare shell to handover, including civil works, joinery and every MEP trade:
        electrical, HVAC, plumbing, fire fighting and low current systems. We also take on MEP packages on their own.{" "}
        <a href="/services">View all services</a>.
      </>
    ),
  },
  {
    id: "four",
    q: "What types of property do you work on?",
    a: (
      <>
        Commercial buildings, residential buildings, villas, offices, restaurants and retail units. Our {COMPANY.stats[1].value}
        {COMPANY.stats[1].suffix} completed projects include {list(SECTOR_NAMES)}.
      </>
    ),
  },
  {
    id: "five",
    q: "How do I get a quotation?",
    a: (
      <>
        Send your project details through our <a href={QUOTE_HREF}>Request a Quote form</a>, or call{" "}
        <a href={`tel:${COMPANY.phones[0].tel}`}>{COMPANY.phones[0].label}</a> or{" "}
        <a href={`tel:${COMPANY.phones[1].tel}`}>{COMPANY.phones[1].label}</a>. We start with a site visit to review the space,
        your drawings and the authority requirements, and then prepare your quotation.
      </>
    ),
  },
];

// Shop questions, answered from how the shop works (components/shop/catalog.js).
const SHOP_FAQS = [
  {
    id: "six",
    q: "Do your shop prices include VAT?",
    a: <>No. Shop prices are in AED and exclude 5% VAT, which is added to your total at checkout.</>,
  },
  {
    id: "seven",
    q: "Can you install a unit I buy from your shop?",
    a: (
      <>
        Yes. In your cart, tick &ldquo;Add installation by our team&rdquo; on the item. Installation is priced per unit, from{" "}
        {formatAED(INSTALL_PRICES.split["1.5-ton"])} for a 1.5 ton split AC. <a href="/shop">Visit the shop</a>.
      </>
    ),
  },
  {
    id: "eight",
    q: "Can you install a unit I already own?",
    a: (
      <>
        Yes. Choose &ldquo;Installation only&rdquo; in the shop&rsquo;s <a href="/shop#services">services section</a>, with your unit type
        and capacity.
      </>
    ),
  },
  {
    id: "nine",
    q: "How do I pay for a shop order?",
    a: <>By card, on a secure Stripe checkout page. Our team then calls you to confirm the site details and book your date.</>,
  },
];

function Accordion({ id, items, offset = 0, firstOpen = false }) {
  return (
    <div className={"accordion"} id={id}>
      {items.map((item, i) => {
        const open = firstOpen && i === 0;
        return (
          <div className={"accordion-item faq-two-accordion-item"} key={item.id}>
            <h3 className={"accordion-header"} id={`order_${item.id}`}>
              <button className={`accordion-button${open ? "" : " collapsed"} faq-two-accordion-button tw-text-lg`} type={"button"} data-bs-toggle={"collapse"} data-bs-target={`#order__collapse_${item.id}`} aria-expanded={open ? "true" : "false"} aria-controls={`order__collapse_${item.id}`}>
                {offset + i + 1}. {item.q}
              </button>
            </h3>
            <div id={`order__collapse_${item.id}`} className={`accordion-collapse collapse${open ? " show" : ""}`} role={"region"} aria-labelledby={`order_${item.id}`} data-bs-parent={`#${id}`}>
              <div className={"accordion-body faq-two-accordion-body"}>
                <p className={`tw-text-base fw-medium ${styles.answer}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FaqPage() {
  const phone = COMPANY.phones[0];
  return (
    <PageShell>
      <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-8"}>
              <div className={"tw-mb-10"}>
                <h1 className={"breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation"}>
                  FAQ
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
                        FAQ
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-xl-12"}>
              <FigureBanner
                figure="hatches"
                label="Line drawing of a floor of access hatches; the one you point at swings open"
                facts={[
                  { value: FAQS.length + SHOP_FAQS.length, label: "Questions answered below" },
                  { value: COMPANY.founded, label: "In business since" },
                  { value: COMPANY.approvals.length, label: "Authority approvals" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={"faq-two-area py-120 faq-ip-area bg-white pt-0"}>
        <div className={"container"}>
          <div className={"row align-items-start"}>
            <div className={"col-xl-5 col-lg-8"}>
              <div className={"faq-two-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                <div className={"section-wrapper"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    FAQS
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className={"faq-two-left-contact bg-white tw-rounded-xl tw-pt-12 tw-pb-15 tw-ps-10 tw-pe-20"}>
                  <div>
                    <h3 className={"tw-text-7 fw-normal tw-mb-10"}>
                      Planning A Fit-Out Or MEP Project In The UAE? Call Us Now!
                    </h3>
                  </div>
                  <div>
                    <a className={`bg-main-eight-600 text-white tw-rounded-4xl fw-bold tw-py-2 tw-ps-2 tw-pe-6 ${styles.callPill}`} href={`tel:${phone.tel}`}>
                      <span className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-heading"} aria-hidden="true">
                        <i className={"ph ph-phone-call"}></i>
                      </span>
                      {phone.label}
                    </a>
                  </div>
                </div>
                <AreasChips className={styles.faqAreas} />
              </div>
            </div>
            <div className={"col-xl-7"}>
              <div className={"faq-two-wrapper tw-ms-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <h3 className={styles.faqGroup}>About ASAS</h3>
                <Accordion id={"general_faqaccordion"} items={FAQS} firstOpen />
                <h3 className={styles.faqGroup}>Shop &amp; payments</h3>
                <Accordion id={"shop_faqaccordion"} items={SHOP_FAQS} offset={FAQS.length} />
                <ContactRail className={styles.faqRail} title="Still have a question?" text="Call, WhatsApp or email us and an engineer will answer." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
