// Ported from pricing.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_pricing_html() {
  return (
    <>
      <BodyClass value={"home-one-bg overflow-x-hidden"} />
      <div className={"loading-screen"} id={"loading-screen"}>
        <span className={"bar top-bar"}></span>
        <span className={"bar down-bar"}></span>
        <div className={"animation-preloader"}>
          <div className={"spinner"}>
            <img src={"/assets/images/loader.gif"} alt={""} />
          </div>
          <div className={"txt-loading"}><span data-text-preloader={"A"} className={"letters-loading"}>A</span><span data-text-preloader={"S"} className={"letters-loading"}>S</span><span data-text-preloader={"A"} className={"letters-loading"}>A</span><span data-text-preloader={"S"} className={"letters-loading"}>S</span>
          </div>
        </div>
      </div>
      <div className={"search_popup"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-xxl-12"}>
              <div className={"search_wrapper"}>
                <div className={"search_top d-flex justify-content-between align-items-center"}>
                  <div className={"search_logo"}>
                    <a href={"/"}>
                      <img src={"/assets/images/logo/asas-logo.png"} alt={"ASAS Alenjaz Technical Works L.L.C"} />
                    </a>
                  </div>
                  <div className={"search_close"}>
                    <button type={"button"} className={"search_close_btn"}>
                      <svg width={"18"} height={"18"} viewBox={"0 0 18 18"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path d={"M17 1L1 17"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                        <path d={"M1 1L17 17"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={"search_form"}>
                  <form action={"#"}>
                    <div className={"search_input"}>
                      <input className={"search-input-field"} type={"text"} placeholder={"Type here to search..."} />
                      <span className={"search-focus-border"}></span>
                      <button type={"submit"}>
                        <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                          <path d={"M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                          <path d={"M19.0002 19.0002L17.2002 17.2002"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"search-popup-overlay"}></div>
      <div className={"mouseCursor cursor-outer d-none"}></div>
      <div className={"mouseCursor cursor-inner"}>
        <span className={"inner-text-1 tw-text-lg fw-bold text-white"}>
          <span>
            <svg width={"48"} height={"47"} viewBox={"0 0 48 47"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
              <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M33.6454 16.1088L15.7477 32.4423L14.3477 30.9082L32.2453 14.5746L33.6454 16.1088Z"} fill={"white"}></path>
              <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M31.4786 15.2755C27.8709 18.5679 27.8182 24.431 30.9057 27.8141L31.6057 28.5811L33.1398 27.1811L32.4398 26.414C30.0957 23.8454 30.1506 19.2992 32.8787 16.8096L33.6453 16.1099L32.2453 14.5758L31.4786 15.2755Z"} fill={"white"}></path>
              <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M32.8783 16.8088C29.2706 20.1012 23.4271 19.6189 20.3397 16.2358L19.6396 15.4688L21.1738 14.0687L21.8738 14.8358C24.218 17.4045 28.7502 17.7643 31.4783 15.2747L32.2449 14.575L33.645 16.1091L32.8783 16.8088Z"} fill={"white"}></path>
            </svg>
          </span>
          <br />
          About us
        </span>
        <span className={"inner-text-2"}>
          <span>
            <svg width={"63"} height={"63"} viewBox={"0 0 63 63"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
              <path d={"M0.132374 56.2074L6.68723 62.776C6.98521 63.0747 8.773 63.0747 9.07084 62.776L47.2086 25.4537C47.8044 24.8564 48.4004 24.5578 49.2942 24.5578C49.5922 24.5578 50.1881 24.5578 50.486 24.8564C51.6778 25.155 52.2736 26.3494 52.2736 27.5437V46.3542V46.6529H61.8082C62.404 46.6529 62.7022 46.6529 63 46.6529V0.970426C63 0.970426 63 0.970427 62.4042 0.373196C61.8083 -0.224035 62.1063 0.0747274 61.5102 0.0747274H16.8176C16.8176 0.373196 16.8176 0.671811 16.8176 1.56766V10.8234C16.8176 11.4205 16.8176 12.0177 16.8176 12.0177H35.8865C37.0783 12.0177 38.2701 12.6148 38.5679 13.8091C39.1638 15.0034 38.8659 16.1978 37.9721 17.0936L0.728355 54.1174C0.430367 54.416 0.132374 54.7146 0.132374 55.3117C-0.16547 55.9088 0.132374 55.9088 0.132374 56.2074Z"} fill={"currentColor"}></path>
            </svg>
          </span>
        </span>
      </div>
      <div className={"overlay"}></div>
      <div className={"side-overlay"}></div>
      <div id={"toast-container"}></div>
      <div className={"back-to-top-wrapper"}>
        <button id={"back_to_top"} type={"button"} className={"back-to-top-btn"}>
          <svg width={"12"} height={"7"} viewBox={"0 0 12 7"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
            <path d={"M11 6L6 1L1 6"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
          </svg>
        </button>
      </div>
      <div className={"cursor"}></div>
      <span className={"dot"}></span>
      <div className={"twoffcanvas-area"}>
        <div className={"twoffcanvas bg-img bg-black position-fixed top-0 bottom-0 tw-p-13"}>
          <div className={"twoffcanvas__close-btn"}>
            <button className={"close-btn"}>
              <i className={"ph-bold ph-x"}></i>
            </button>
          </div>
          <div className={"twoffcanvas__logo tw-mb-15"}>
            <a href={"/"}>
              <img src={"/assets/images/logo/asas-logo.png"} alt={"ASAS Alenjaz Technical Works L.L.C"} />
            </a>
          </div>
          <div className={"twoffcanvas__title tw-mb-12"}>
            <p>
              Agenk is the partner of choice for many of the world’s leading enterprises. We help businesses development.
            </p>
          </div>
          <div className={"twoffcanvas__contact-info tw-mb-13"}>
            <div className={"twoffcanvas__contact-title tw-mb-8"}>
              <h4 className={"font-body fw-semibold text-capitalize tw-text-3xl tw-mb-6 d-inline-block"}>
                Contact Us
              </h4>
            </div>
            <ul>
              <li className={"d-flex align-items-center tw-mb-4"}>
                <i className={"text-main-eight-600 text-white ph ph-map-pin"}></i>
                <a className={"text-white hover-text-main-eight-600 tw-ms-3"} href={"https://www.google.com/maps/@23.8223586,90.3661283,15z"} target={"_blank"}>
                  Manchester 21, Zurich, CH
                </a>
              </li>
              <li className={"d-flex align-items-center tw-mb-4"}>
                <i className={"text-main-eight-600 text-white ph ph-envelope"}></i>
                <a className={"text-white hover-text-main-eight-600 tw-ms-3"} href={"mailto:techubinfo@mail.com"}>
                  <span className={"__cf_email__"}>
                    agenkinfo@mail.com
                  </span>
                </a>
              </li>
              <li className={"d-flex align-items-center"}>
                <i className={"text-main-eight-600 text-white ph ph-phone-outgoing"}></i>
                <a className={"text-white hover-text-main-eight-600 tw-ms-3"} href={"tel:+48555223224"}>
                  (+00) 678 345 98568
                </a>
              </li>
            </ul>
          </div>
          <div className={"twoffcanvas__input"}>
            <div className={"twoffcanvas__input-title"}>
              <h4 className={"font-body fw-semibold text-capitalize tw-text-3xl text-white tw-mb-6"}>
                Get Update
              </h4>
            </div>
            <form action={"#"}>
              <div className={"position-relative"}>
                <input className={"placeholder-text-white"} type={"text"} placeholder={"Enter mail"} />
                <button>
                  <i className={"ph ph-paper-plane-tilt"}></i>
                </button>
              </div>
            </form>
          </div>
          <div className={"twoffcanvas__social"}>
            <ul className={"footer-social d-flex align-items-center tw-gap-4"}>
              <li>
                <a href={"https://www.facebook.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle hover-bg-main-eight-600 hover-text-heading"}>
                  <i className={"ph-bold ph-facebook-logo"}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.twitter.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle hover-bg-main-eight-600 hover-text-heading"}>
                  <i className={"ph-bold ph-twitter-logo"}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.linkedin.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle hover-bg-main-eight-600 hover-text-heading"}>
                  <i className={"ph-bold ph-instagram-logo"}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.pinterest.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle hover-bg-main-eight-600 hover-text-heading"}>
                  <i className={"ph-bold ph-pinterest-logo"}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"body-overlay"}></div>
      <SiteMobileMenu />
      <SiteHeader />
      <div id={"scrollSmoother-container"}>
        <section className={"breadcrumb-area position-relative z-1 overflow-hidden"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-lg-8"}>
                <div className={"tw-mb-10"}>
                  <h2 className={"breadcrumb-title text-center tw-mb-6 text-heading tw-text-118 text-capitalize lh-1 tw-char-animation"}>
                    Pricing Plans
                  </h2>
                  <ul className={"d-flex align-items-end justify-content-center tw-gap-2 tw-mb-7"}>
                    <li className={"fw-normal"}>
                      <a href={"/"} className={"text-heading hover--translate-y-1 hover-underline d-inline-flex align-items-center tw-gap-3 hover-text-main-eight-600"}>
                        Home
                      </a>
                    </li>
                    <li>
                      <span className={"d-inline-flex lh-1"}>
                        <i className={"ph-bold ph-caret-right text-heading"}></i>
                      </span>
                    </li>
                    <li className={"fw-normal"}>
                      <span className={"text-main-eight-600"}>
                        Pricing Plans
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"breadcrumb-thumb"}>
                  <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/breadcrumb-thumb.jpg"} alt={"thumb"} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"pricing-three-area pt-120 tw-pb-23 pricing-ip-area pt-0"}>
          <div className={"container"}>
            <div className={"row justify-content-between align-items-center"}>
              <div className={"col-xl-5 col-lg-7 col-md-7"}>
                <div className={"section-three-wrapper tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle font-heading tw-text-base tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Pricing Plan
                  </div>
                  <h2 className={"section-three-title text-heading tw-text-122 fw-medium tw-char-animation tw-mb-6"}>
                    Our Latest Best 
                        Pricing Plan
                  </h2>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-4 col-md-4"}>
                <div className={"pricing-three-main position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"pricing-three-switch-wrapper d-flex align-items-start justify-content-end"}>
                    <label className={"pricing-three-toggler pricing-three-active text-heading fw-medium tw-text-base tw-transition-3"} id={"filt-monthly"}>
                      Monthly
                    </label>
                    <div className={"pricing-three-toggle position-relative overflow-hidden tw-w-15 tw-h-705 tw-rounded-3xl tw-mx-705 bg-main-eight-600"}>
                      <input type={"checkbox"} id={"switcher"} className={"pricing-three-check"} />
                      <b className={"pricing-three-switch position-absolute bg-white rounded-circle z-1"}></b>
                    </div>
                    <label className={"pricing-three-toggler text-heading fw-medium tw-text-base tw-transition-3"} id={"filt-yearly"}>
                      Yearly
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"pricing-three-main-toogle"}>
                  <div id={"monthly"} className={"pricing-three-wrapper-full"}>
                    <div className={"row"}>
                      <div className={"col-xl-4 col-lg-6 col-md-6"}>
                        <div className={"pricing-three-wrap tw-p-11 tw-rounded-xl"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                          <div className={"tw-mb-8"}>
                            <div className={"pricing-three-top"}>
                              <h3 className={"pricing-three-subtitle tw-text-505 fw-medium font-body  d-inline-block tw-rounded-2xl tw-mb-4"}>
                                Basic Repair
                              </h3>
                              <p className={"tw-mb-4"}>
                                Ideal for those who require more frequent maintenance and energy.
                              </p>
                            </div>
                            <div className={"pricing-three-price d-flex align-items-end tw-gap-2"}>
                              <h2 className={"pricing-three-price-title tw-text-705 text-heading d-inline-flex align-items-end mb-0 lh-1"}>
                                $19
                                <span>
                                  .99
                                </span>
                              </h2>
                              <h3 className={"tw-text-base fw-normal text-body"}>
                                /Monthly
                              </h3>
                            </div>
                          </div>
                          <div className={"pricing-three-list tw-mb-8"}>
                            <ul>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  Quick Response Time
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  Filter Replacement
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Full System Diagnostic
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Available 24/7
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                30 Days Warranty
                              </li>
                              <li className={"text-heading fw-normal d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Save 5% On Accesories
                              </li>
                            </ul>
                          </div>
                          <div>
                            <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                  <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                    Get Started
                                  </span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"col-xl-4 col-lg-6 col-md-6"}>
                        <div className={"pricing-three-wrap tw-p-11 tw-rounded-xl bg-main-eight-600"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                          <div className={"tw-mb-8"}>
                            <div className={"pricing-three-top"}>
                              <h3 className={"pricing-three-subtitle tw-text-505 fw-medium font-body text-white d-inline-block tw-rounded-2xl tw-mb-4"}>
                                Standard Repair
                              </h3>
                              <p className={"tw-mb-4 text-white"}>
                                Ideal for those who require more frequent maintenance and energy.
                              </p>
                            </div>
                            <div className={"pricing-three-price d-flex align-items-end tw-gap-2"}>
                              <h2 className={"pricing-three-price-title tw-text-705 text-white d-inline-flex align-items-end mb-0 lh-1"}>
                                $29
                                <span>
                                  .99
                                </span>
                              </h2>
                              <h3 className={"tw-text-base fw-normal text-white"}>
                                /Monthly
                              </h3>
                            </div>
                          </div>
                          <div className={"pricing-three-list main tw-mb-8"}>
                            <ul>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  New AC installation
                                </span>
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  Unit Positioning & Setup
                                </span>
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Basic Maintenance
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Available 24/7
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                6 Months Warranty
                              </li>
                              <li className={"text-white fw-normal d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Save 5% On Accesories
                              </li>
                            </ul>
                          </div>
                          <div>
                            <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-two-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                                  <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                    Get Started
                                  </span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"col-xl-4 col-lg-6 col-md-6"}>
                        <div className={"pricing-three-wrap tw-p-11 tw-rounded-xl"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                          <div className={"tw-mb-8"}>
                            <div className={"pricing-three-top"}>
                              <h3 className={"pricing-three-subtitle tw-text-505 fw-medium font-body  d-inline-block tw-rounded-2xl tw-mb-4"}>
                                Premium Repair
                              </h3>
                              <p className={"tw-mb-4"}>
                                Ideal for those who require more frequent maintenance and energy.
                              </p>
                            </div>
                            <div className={"pricing-three-price d-flex align-items-end tw-gap-2"}>
                              <h2 className={"pricing-three-price-title tw-text-705 text-heading d-inline-flex align-items-end mb-0 lh-1"}>
                                $39
                                <span>
                                  .99
                                </span>
                              </h2>
                              <h3 className={"tw-text-base fw-normal text-body"}>
                                /Monthly
                              </h3>
                            </div>
                          </div>
                          <div className={"pricing-three-list tw-mb-8"}>
                            <ul>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span>
                                  Quick Response Time
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span>
                                  Filter Replacement
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Full System Diagnostic
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Available 24/7
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                30 Days Warranty
                              </li>
                              <li className={"text-heading fw-normal d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Save 5% On Accesories
                              </li>
                            </ul>
                          </div>
                          <div>
                            <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                  <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                    Get Started
                                  </span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id={"hourly"} className={"pricing-three-wrapper-full hide"}>
                    <div className={"row"}>
                      <div className={"col-xl-4 col-lg-6 col-md-6"}>
                        <div className={"pricing-three-wrap tw-p-11 tw-rounded-xl"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                          <div className={"tw-mb-8"}>
                            <div className={"pricing-three-top"}>
                              <h3 className={"pricing-three-subtitle tw-text-505 fw-medium font-body  d-inline-block tw-rounded-2xl tw-mb-4"}>
                                Basic Repair
                              </h3>
                              <p className={"tw-mb-4"}>
                                Ideal for those who require more frequent maintenance and energy.
                              </p>
                            </div>
                            <div className={"pricing-three-price d-flex align-items-end tw-gap-2"}>
                              <h2 className={"pricing-three-price-title tw-text-705 text-heading d-inline-flex align-items-end mb-0 lh-1"}>
                                $119
                                <span>
                                  .99
                                </span>
                              </h2>
                              <h3 className={"tw-text-base fw-normal text-body"}>
                                /Monthly
                              </h3>
                            </div>
                          </div>
                          <div className={"pricing-three-list tw-mb-8"}>
                            <ul>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  Quick Response Time
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  Filter Replacement
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Full System Diagnostic
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Available 24/7
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                30 Days Warranty
                              </li>
                              <li className={"text-heading fw-normal d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Save 5% On Accesories
                              </li>
                            </ul>
                          </div>
                          <div>
                            <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                  <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                    Get Started
                                  </span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"col-xl-4 col-lg-6 col-md-6"}>
                        <div className={"pricing-three-wrap tw-p-11 tw-rounded-xl bg-main-eight-600"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                          <div className={"tw-mb-8"}>
                            <div className={"pricing-three-top"}>
                              <h3 className={"pricing-three-subtitle tw-text-505 fw-medium font-body text-white d-inline-block tw-rounded-2xl tw-mb-4"}>
                                Standard Repair
                              </h3>
                              <p className={"tw-mb-4 text-white"}>
                                Ideal for those who require more frequent maintenance and energy.
                              </p>
                            </div>
                            <div className={"pricing-three-price d-flex align-items-end tw-gap-2"}>
                              <h2 className={"pricing-three-price-title tw-text-705 text-white d-inline-flex align-items-end mb-0 lh-1"}>
                                $229
                                <span>
                                  .99
                                </span>
                              </h2>
                              <h3 className={"tw-text-base fw-normal text-white"}>
                                /Monthly
                              </h3>
                            </div>
                          </div>
                          <div className={"pricing-three-list main tw-mb-8"}>
                            <ul>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  New AC installation
                                </span>
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span className={"text-decoration-line-through"}>
                                  Unit Positioning & Setup
                                </span>
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Basic Maintenance
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Available 24/7
                              </li>
                              <li className={"text-white fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                6 Months Warranty
                              </li>
                              <li className={"text-white fw-normal d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Save 5% On Accesories
                              </li>
                            </ul>
                          </div>
                          <div>
                            <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-two-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                                  <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                    Get Started
                                  </span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"col-xl-4 col-lg-6 col-md-6"}>
                        <div className={"pricing-three-wrap tw-p-11 tw-rounded-xl"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                          <div className={"tw-mb-8"}>
                            <div className={"pricing-three-top"}>
                              <h3 className={"pricing-three-subtitle tw-text-505 fw-medium font-body  d-inline-block tw-rounded-2xl tw-mb-4"}>
                                Premium Repair
                              </h3>
                              <p className={"tw-mb-4"}>
                                Ideal for those who require more frequent maintenance and energy.
                              </p>
                            </div>
                            <div className={"pricing-three-price d-flex align-items-end tw-gap-2"}>
                              <h2 className={"pricing-three-price-title tw-text-705 text-heading d-inline-flex align-items-end mb-0 lh-1"}>
                                $339
                                <span>
                                  .99
                                </span>
                              </h2>
                              <h3 className={"tw-text-base fw-normal text-body"}>
                                /Monthly
                              </h3>
                            </div>
                          </div>
                          <div className={"pricing-three-list tw-mb-8"}>
                            <ul>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span>
                                  Quick Response Time
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                <span>
                                  Filter Replacement
                                </span>
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Full System Diagnostic
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Available 24/7
                              </li>
                              <li className={"text-heading fw-normal tw-mb-3 d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                30 Days Warranty
                              </li>
                              <li className={"text-heading fw-normal d-flex tw-gap-3 align-items-center"}>
                                <img src={"/assets/images/icons/testimonial-three-check.svg"} alt={"check"} />
                                Save 5% On Accesories
                              </li>
                            </ul>
                          </div>
                          <div>
                            <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                  <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                    Get Started
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
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
