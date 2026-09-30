// Ported from index-10.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_index_10_html() {
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
        <section className={"banner-six-area"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row gx-0"}>
              <div className={"col-xl-7"}>
                <div className={"banner-six-content bg-img position-relative z-1 py-120"} data-background-image={"/assets/images/thumbs/banner-six-bg.png"}>
                  <div className={"tw-mb-10"}>
                    <div className={"banner-six-subtitle section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-white tw-mb-4 d-inline-block position-relative z-1"}>
                      NO.1 Roofing Services
                    </div>
                    <h1 className={"banner-six-title tw-text-24 fw-semibold text-white font-oswald tw-mb-10 tw-char-animation"}>
                      We Are Expert in Roofing Solutions
                    </h1>
                    <p className={"banner-six-paragraph text-white font-nunito tw-text-xl"}>
                      We provide top-quality roofing solutions designed to protect your home or 
                            business. from new roof installations and replacements
                    </p>
                  </div>
                  <div className={"banner-six-bottom d-flex align-items-center tw-gap-5"}>
                    <div className={"banner-six-button"}>
                      <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-six-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              Get A Quote
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className={"d-flex align-items-center"}>
                      <div className={"tw-w-140 tw-h-140 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-client-img1.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                      <div className={"tw-w-140 tw-h-140 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2 tw--ms-16-px z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-client-img2.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                      <div className={"tw-w-140 tw-h-140 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-5 tw--ms-16-px border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-client-img5.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                    </div>
                    <div>
                      <p className={"tw-text-xl fw-bold text-white font-oswald"}>
                        20k+ Happy Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-5"}>
                <div className={"banner-six-thumb h-100"}>
                  <img className={"object-fit-cover h-100"} src={"/assets/images/thumbs/banner-six-thumb.jpg"} alt={"thumb"} />
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
                    About Us
                  </div>
                </div>
              </div>
              <div className={"col-xl-8"}>
                <div className={"about-six-wrapper"}>
                  <div className={"tw-mb-20"}>
                    <h2 className={"text-invert font-oswald tw-text-101"}>
                      We Are Dedicated To Delivering Professional Roofing Services With Exceptional Craftsmanship, Lasting Materials, And Reliable Expertise That Protects Homes And Businesses For Years.
                    </h2>
                  </div>
                  <div className={"about-six-wrap d-flex"}>
                    <div className={"about-six-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <h3 className={"about-six-count-title tw-text-10 fw-normal font-oswald text-heading mb-0 lh-1 d-flex align-items-start"}>
                        <span className={"font-oswald odometer tw-text-38 fw-semibold"} data-count={"15"}></span>
                        M
                      </h3>
                      <span className={"about-six-count-paragraph tw-text-lg fw-normal font-nunito text-heading tw-w-244-px"}>
                        We helped to get companies with $15M+ funding
                      </span>
                    </div>
                    <div className={"about-six-content"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <div className={"tw-mb-12"}>
                        <p className={"tw-text-xl font-nunito"}>
                          We provide top-quality roofing solutions 
                                    designed to protect your home or business. 
                                    from new roof installations and replacements 
                                    to repairs and inspections
                        </p>
                      </div>
                      <div className={"tw-hover-btn-wrapper footer-three-hover-btn"}>
                        <a className={"tw-btn-circle tw-hover-btn-item border border-2 border-main-six-600 tw-hover-btn bg-main-six-600"} href={"/contact"}>
                          <span className={"d-flex flex-column justify-content-center"}>
                            <span className={"tw-btn-circle-icon text-white tw-text-8"}>
                              <img src={"/assets/images/icons/f4-arrow-btn.svg"} alt={"arrow"} />
                            </span>
                            <span className={"text-white fw-bold tw-text-lg font-rethink text-center tw-transition-3"}>
                              About Us
                            </span>
                          </span>
                          <i className={"tw-btn-circle-dot"}></i>
                        </a>
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
                    <img className={"object-fit-cover"} src={"/assets/images/thumbs/gallery-six-thumb.jpg"} alt={"thumb"} />
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
                    <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/contact-six-thumb.jpg"} alt={"thumb"} />
                  </div>
                </div>
                <div className={"col-xl-5"}>
                  <div className={"contact-two-wrapper contact-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"section-six-wrapper tw-mb-10"}>
                      <div className={"banner-six-subtitle font-heading before-white section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-white tw-mb-4 d-inline-block position-relative z-1"}>
                        Book Appointment Now
                      </div>
                      <h2 className={"font-oswald tw-text-101 fw-semibold text-white tw-char-animation"}>
                        Get Your Estimate & Book Now
                      </h2>
                    </div>
                    <div>
                      <form action={"#"}>
                        <div className={"row"}>
                          <div className={"col-xl-6 col-lg-6 col-md-6"}>
                            <div className={"contact-two-form contact-six-form tw-mb-4"}>
                              <label className={"text-white tw-mb-3"}>
                                Your Name*
                              </label>
                              <div className={"position-relative z-1"}>
                                <input type={"text"} className={"form-control focus-outline-0 bg-transparent text-white tw-placeholder-text-white focus-tw-placeholder-text-hidden tw-py-3 tw-ps-5 tw-pe-15 w-100 tw-rounded-md"} placeholder={"Your Name*"} />
                                <span className={"position-absolute top-50 translate-middle-y end-0 tw-me-4 tw-text-xl text-white"}>
                                  <i className={"ph ph-user"}></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xl-6 col-lg-6 col-md-6"}>
                            <div className={"contact-two-form contact-six-form tw-mb-4"}>
                              <label className={"text-white tw-mb-3"}>
                                Your Email*
                              </label>
                              <div className={"position-relative z-1"}>
                                <input type={"email"} className={"form-control focus-outline-0 bg-transparent text-white tw-placeholder-text-white focus-tw-placeholder-text-hidden tw-py-3 tw-ps-5 tw-pe-15 w-100 tw-rounded-md"} placeholder={"Your Email*"} />
                                <span className={"position-absolute top-50 translate-middle-y end-0 tw-me-4 tw-text-xl text-white"}>
                                  <i className={"ph ph-envelope"}></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xl-6"}>
                            <div className={"contact-two-form contact-six-form position-relative tw-mb-4"}>
                              <label className={"text-white tw-mb-3"}>
                                Service
                              </label>
                              <div className={"nice-select tw-mb-3 tw-text-base tw-px-5 tw-h-122 d-inline-flex align-items-center font-body text-white bg-transparent tw-rounded-lg w-100"}>
                                <span className={"current"}>
                                  Rooms
                                </span>
                                <ul className={"list w-100"}>
                                  <li className={"option"}>
                                    Select service that fits you best
                                  </li>
                                  <li className={"option"}>
                                    01
                                  </li>
                                  <li className={"option"}>
                                    02
                                  </li>
                                  <li className={"option"}>
                                    03
                                  </li>
                                  <li className={"option"}>
                                    04
                                  </li>
                                  <li className={"option"}>
                                    05
                                  </li>
                                  <li className={"option"}>
                                    06
                                  </li>
                                  <li className={"option"}>
                                    07
                                  </li>
                                  <li className={"option"}>
                                    08
                                  </li>
                                  <li className={"option"}>
                                    09
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xl-6 col-lg-6 col-md-6"}>
                            <div className={"contact-two-form contact-six-form tw-mb-4"}>
                              <label className={"text-white tw-mb-3"}>
                                Date
                              </label>
                              <div className={"position-relative z-1"}>
                                <input type={"date"} className={"form-control focus-outline-0 bg-transparent text-white tw-placeholder-text-white tw-py-3 tw-ps-5 w-100 tw-rounded-md focus-border-black"} name={"birthday"} />
                              </div>
                            </div>
                          </div>
                          <div className={"col-xl-6 col-lg-6 col-md-6"}>
                            <div className={"contact-two-form contact-six-form tw-mb-4"}>
                              <label className={"text-white tw-mb-3"}>
                                Time
                              </label>
                              <div className={"position-relative z-1"}>
                                <input type={"time"} id={"appt"} name={"appt"} className={"form-control focus-outline-0 bg-transparent text-white tw-placeholder-text-white tw-py-3 tw-ps-5 w-100 tw-rounded-md focus-border-black"} />
                              </div>
                            </div>
                          </div>
                          <div className={"col-xl-6"}>
                            <div className={"tw-mt-8"}>
                              <button className={"w-100 contact-six-btn tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-white text-heading tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      Book Now
                                    </span>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
                    OUR SERVICES
                  </div>
                </div>
              </div>
              <div className={"col-xl-8"}>
                <div className={"section-six-wrapper"}>
                  <h3 className={"text-invert font-oswald tw-text-101 font-oswald"}>
                    Wsfw-semiboldver Roofing Services You Can Trust, Ensuring Structural Strength, Complete Protection, Aesthetic Beauty, Energy Efficiency, And Customer Care Designed For Lasting Value.
                  </h3>
                </div>
              </div>
            </div>
            <div className={"row justify-content-end"}>
              <div className={"col-xl-9"}>
                <div className={"row align-items-center"}>
                  <div className={"col-xl-7 col-lg-7"}>
                    <div className={"service-six-list-thumb-wrap position-relative"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <div id={"service-six-thumb"} className={"service-six-list-thumb-1"}>
                        <img className={"service-six-list-thumb-1 tw-rounded-xl"} src={"/assets/images/thumbs/service-six-thumb1.jpg"} alt={"thumb1"} />
                        <img className={"service-six-list-thumb-2 tw-rounded-xl"} src={"/assets/images/thumbs/service-six-thumb2.png"} alt={"thumb2"} />
                        <img className={"service-six-list-thumb-3 tw-rounded-xl"} src={"/assets/images/thumbs/service-six-thumb3.png"} alt={"thumb3"} />
                        <img className={"service-six-list-thumb-4 tw-rounded-xl"} src={"/assets/images/thumbs/service-six-thumb4.png"} alt={"thumb4"} />
                        <img className={"service-six-list-thumb-5 tw-rounded-xl"} src={"/assets/images/thumbs/service-six-thumb5.png"} alt={"thumb5"} />
                      </div>
                    </div>
                  </div>
                  <div className={"col-xl-5 col-lg-5"}>
                    <div className={"service-six-list-wrap"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      <div className={"service-six-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative active"} rel={"service-six-list-thumb-1"}>
                        <div className={"service-six-list-left"}>
                          <h4 className={"service-six-list-title tw-text-805 font-oswald fw-semibold tw-transition-3"}>
                            <a className={"tw-transition-3"} href={"/service-details"}>
                              General Roofing
                            </a>
                          </h4>
                        </div>
                        <div className={"service-six-list-right"}>
                          <a className={"service-six-list-btn tw-w-11 tw-h-11 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-lg"} href={"/service-details"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </a>
                        </div>
                      </div>
                      <div className={"service-six-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative"} rel={"service-six-list-thumb-2"}>
                        <div className={"service-six-list-left"}>
                          <h4 className={"service-six-list-title tw-text-805 font-oswald fw-semibold tw-transition-3"}>
                            <a className={"tw-transition-3"} href={"/service-details"}>
                              Modified Roofing
                            </a>
                          </h4>
                        </div>
                        <div className={"service-six-list-right"}>
                          <a className={"service-six-list-btn tw-w-11 tw-h-11 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-lg"} href={"/service-details"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </a>
                        </div>
                      </div>
                      <div className={"service-six-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative"} rel={"service-six-list-thumb-3"}>
                        <div className={"service-six-list-left"}>
                          <h4 className={"service-six-list-title tw-text-805 font-oswald fw-semibold tw-transition-3"}>
                            <a className={"tw-transition-3"} href={"/service-details"}>
                              Siding & Gutters
                            </a>
                          </h4>
                        </div>
                        <div className={"service-six-list-right"}>
                          <a className={"service-six-list-btn tw-w-11 tw-h-11 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-lg"} href={"/service-details"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </a>
                        </div>
                      </div>
                      <div className={"service-six-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative"} rel={"service-six-list-thumb-4"}>
                        <div className={"service-six-list-left"}>
                          <h4 className={"service-six-list-title tw-text-805 font-oswald fw-semibold tw-transition-3"}>
                            <a className={"tw-transition-3"} href={"/service-details"}>
                              Roof Installation
                            </a>
                          </h4>
                        </div>
                        <div className={"service-six-list-right"}>
                          <a className={"service-six-list-btn tw-w-11 tw-h-11 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-lg"} href={"/service-details"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </a>
                        </div>
                      </div>
                      <div className={"service-six-list-item d-flex align-items-center justify-content-between cursor-pointer position-relative"} rel={"service-six-list-thumb-5"}>
                        <div className={"service-six-list-left"}>
                          <h4 className={"service-six-list-title tw-text-805 font-oswald fw-semibold tw-transition-3"}>
                            <a className={"tw-transition-3"} href={"/service-details"}>
                              Roof Cornering
                            </a>
                          </h4>
                        </div>
                        <div className={"service-six-list-right"}>
                          <a className={"service-six-list-btn tw-w-11 tw-h-11 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-lg"} href={"/service-details"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"service-six-shape position-absolute z-n1"} src={"/assets/images/shapes/service-six-shape.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"counter-six-area tw-pb-24"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between"}>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <p className={"counter-six-paragraph tw-text-lg fw-medium text-heading bg-white tw-ps-8 font-nunito position-relative z-1"}>
                    Years Experience
                    <br />
                    Working
                  </p>
                  <h2 className={"counter-six-title tw-text-210 fw-medium font-oswald text-heading mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"35"}></span>
                    +
                  </h2>
                </div>
              </div>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <p className={"counter-six-paragraph tw-text-lg fw-medium text-heading bg-white tw-ps-8 font-nunito position-relative z-1"}>
                    Satisfied
                    <br />
                    Customers
                  </p>
                  <h2 className={"counter-six-title tw-text-210 fw-medium font-oswald text-heading mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"10"}></span>
                    m
                  </h2>
                </div>
              </div>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <p className={"counter-six-paragraph tw-text-lg fw-medium text-heading bg-white tw-ps-8 font-nunito position-relative z-1"}>
                    Projects
                    <br />
                    Completed
                  </p>
                  <h2 className={"counter-six-title tw-text-210 fw-medium font-oswald text-heading mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"28"}></span>
                    K
                  </h2>
                </div>
              </div>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <p className={"counter-six-paragraph tw-text-lg fw-medium text-heading bg-white tw-ps-8 font-nunito position-relative z-1"}>
                    Team
                    <br />
                    Members
                  </p>
                  <h2 className={"counter-six-title tw-text-210 fw-medium font-oswald text-heading mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"45"}></span>
                    +
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"project-six-area py-120"}>
          <div className={"container"}>
            <div className={"row tw-mb-14"}>
              <div className={"col-xl-6"}>
                <div className={"section-six-wrapper"}>
                  <div className={"section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Project Experience
                  </div>
                </div>
              </div>
              <div className={"col-xl-5"}>
                <div className={"section-six-wrapper"}>
                  <h3 className={"tw-char-animation font-oswald tw-text-101 font-oswald"}>
                    Explore Our Latest Projects And Recent Works
                  </h3>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"project-six-wrapper tw-mb-122"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"project-six-thumb tw-mb-7"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/project-six-thumb1.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-six-content"}>
                    <h4 className={"project-six-title tw-text-3xl fw-semibold font-oswald tw-mb-4"}>
                      <a className={"hover-text-main-six-600"} href={"/project-details"}>
                        Renovation Roofing San Diego
                      </a>
                    </h4>
                    <p className={"project-six-paragraph font-nunito"}>
                      Roofing Services,
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"project-six-wrapper tw-mb-122"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"project-six-thumb tw-mb-7"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/project-six-thumb2.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-six-content"}>
                    <h4 className={"project-six-title tw-text-3xl fw-semibold font-oswald tw-mb-4"}>
                      <a className={"hover-text-main-six-600"} href={"/project-details"}>
                        Superior Roofing Installation
                      </a>
                    </h4>
                    <p className={"project-six-paragraph font-nunito"}>
                      Roofing Services,
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"project-six-wrapper tw-mb-122"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"project-six-thumb tw-mb-7"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/project-six-thumb3.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-six-content"}>
                    <h4 className={"project-six-title tw-text-3xl fw-semibold font-oswald tw-mb-4"}>
                      <a className={"hover-text-main-six-600"} href={"/project-details"}>
                        Fixing The Effects Of A Storm
                      </a>
                    </h4>
                    <p className={"project-six-paragraph font-nunito"}>
                      Roofing Services,
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"project-six-wrapper tw-mb-122"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"project-six-thumb tw-mb-7"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/project-six-thumb4.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-six-content"}>
                    <h4 className={"project-six-title tw-text-3xl fw-semibold font-oswald tw-mb-4"}>
                      <a className={"hover-text-main-six-600"} href={"/project-details"}>
                        Seasonal Winter Upkeep
                      </a>
                    </h4>
                    <p className={"project-six-paragraph font-nunito"}>
                      Roofing Services,
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-5"}>
                <div className={"project-six-button text-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tw-hover-btn-wrapper footer-three-hover-btn"}>
                    <a className={"tw-btn-circle tw-hover-btn-item border border-2 border-main-six-600 tw-hover-btn bg-main-six-600"} href={"/project-details"}>
                      <span className={"d-flex flex-column justify-content-center"}>
                        <span className={"tw-btn-circle-icon text-white tw-text-8"}>
                          <img src={"/assets/images/icons/f4-arrow-btn.svg"} alt={"arrow"} />
                        </span>
                        <span className={"text-white fw-bold tw-text-lg font-rethink text-center tw-transition-3"}>
                          Views All Project
                        </span>
                      </span>
                      <i className={"tw-btn-circle-dot"}></i>
                    </a>
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
                    4 Step Process
                  </div>
                  <h3 className={"tw-char-animation font-oswald tw-text-101 font-oswald"}>
                    Easier than You Can Think!
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className={"container tw-container-1570-px"}>
            <div className={"position-relative z-1"}>
              <div className={"row"}>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"choose-us-six-wrapper text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"choose-us-six-icon"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative z-1"}>
                        <img src={"/assets/images/icons/choose-six-icon1.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div className={"choose-us-six-content"}>
                      <h4 className={"choose-us-six-number font-oswald tw-text-20 fw-medium text-uppercase"}>
                        Step 01
                      </h4>
                    </div>
                    <div className={"choose-us-six-wrap text-center position-relative z-1"}>
                      <h4 className={"choose-us-six-title font-oswald tw-text-3xl fw-medium tw-mb-4"}>
                        Schedule Appointment
                      </h4>
                      <p className={"choose-us-six-paragraph"}>
                        Call us, email us, or book online 
                                choose a convenient
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"choose-us-six-wrapper text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"choose-us-six-icon"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative z-1"}>
                        <img src={"/assets/images/icons/choose-six-icon2.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div className={"choose-us-six-content"}>
                      <h4 className={"choose-us-six-number font-oswald tw-text-20 fw-medium text-uppercase"}>
                        Step 02
                      </h4>
                    </div>
                    <div className={"choose-us-six-wrap text-center position-relative z-1"}>
                      <h4 className={"choose-us-six-title font-oswald tw-text-3xl fw-medium tw-mb-4"}>
                        Diagnosis & Estimate
                      </h4>
                      <p className={"choose-us-six-paragraph"}>
                        Our licensed plumber arrives on time, inspects the issue
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"choose-us-six-wrapper text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                    <div className={"choose-us-six-icon"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative z-1"}>
                        <img src={"/assets/images/icons/choose-six-icon3.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div className={"choose-us-six-content"}>
                      <h4 className={"choose-us-six-number font-oswald tw-text-20 fw-medium text-uppercase"}>
                        Step 03
                      </h4>
                    </div>
                    <div className={"choose-us-six-wrap text-center position-relative z-1"}>
                      <h4 className={"choose-us-six-title font-oswald tw-text-3xl fw-medium tw-mb-4"}>
                        Repair or Installation
                      </h4>
                      <p className={"choose-us-six-paragraph"}>
                        We complete the job using high-quality tools and parts
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"choose-us-six-wrapper text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                    <div className={"choose-us-six-icon"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative z-1"}>
                        <img src={"/assets/images/icons/choose-six-icon4.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div className={"choose-us-six-content"}>
                      <h4 className={"choose-us-six-number font-oswald tw-text-20 fw-medium text-uppercase"}>
                        Step 04
                      </h4>
                    </div>
                    <div className={"choose-us-six-wrap text-center position-relative z-1"}>
                      <h4 className={"choose-us-six-title font-oswald tw-text-3xl fw-medium tw-mb-4"}>
                        Final Inspection
                      </h4>
                      <p className={"choose-us-six-paragraph"}>
                        We test the repair, walk you through the results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className={"choose-us-six-shape position-absolute start-50 translate-middle-x z-n1"} src={"/assets/images/shapes/choose-us-six-shape.png"} alt={"shape"} />
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
                    Team Members
                  </div>
                  <h3 className={"text-invert font-oswald tw-text-101 font-oswald tw-mb-8"}>
                    Trust Our Reliable Roofing Experts 
                        to Handle Installation, Repairs, and 
                        Maintenance with Attention to.
                  </h3>
                  <p>
                    Whether it’s a small repair or a major installation, our team of licensed & experience 
                        plumber is committed to getting the job done right — the first time.
                  </p>
                </div>
              </div>
              <div className={"col-xl-6"}>
                <div className={"row"}>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"team-four-wrapper team-six-wrapper team-ip-wrapper tw-mb-8 bg-white tw-p-205"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      <div className={"team-four-thumb team-six-thumb position-relative z-1 tw-pb-205"}>
                        <a className={"d-block"} href={"/team-details"}>
                          <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-six-thumb1.png"} alt={"thumb"} />
                        </a>
                        <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                          <div className={"team-four-btn team-six-btn position-relative z-2"}>
                            <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-six-600 rounded-circle text-white tw-transition-3"}>
                              <i className={"ph ph-share-network"}></i>
                            </button>
                          </div>
                          <div className={"team-four-icon team-ip-icon"}>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.facebook.com"}>
                              <i className={"ph-bold ph-facebook-logo"}></i>
                            </a>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.twitter.com"}>
                              <i className={"ph-bold ph-twitter-logo"}></i>
                            </a>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.linkedin.com"}>
                              <i className={"ph-bold ph-instagram-logo"}></i>
                            </a>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.pinterest.com"}>
                              <i className={"ph-bold ph-pinterest-logo"}></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"team-six-content text-center tw-py-705 position-relative z-1"}>
                        <h4 className={"team-four-title team-six-title tw-text-605 fw-bold font-rethink tw-mb-1 font-nunito tw-transition-3"}>
                          <a className={"hover-underline tw-transition-3"} href={"/team-details"}>
                            Benedict Laulent
                          </a>
                        </h4>
                        <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                          Team Leader
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"col-xl-6 col-lg-6 col-md-6"}>
                    <div className={"team-four-wrapper team-six-wrapper team-ip-wrapper tw-mb-8 bg-white tw-p-205"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                      <div className={"team-four-thumb team-six-thumb position-relative z-1 tw-pb-205"}>
                        <a className={"d-block"} href={"/team-details"}>
                          <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-six-thumb2.png"} alt={"thumb"} />
                        </a>
                        <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                          <div className={"team-four-btn team-six-btn position-relative z-2"}>
                            <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-six-600 rounded-circle text-white tw-transition-3"}>
                              <i className={"ph ph-share-network"}></i>
                            </button>
                          </div>
                          <div className={"team-four-icon team-ip-icon"}>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.facebook.com"}>
                              <i className={"ph-bold ph-facebook-logo"}></i>
                            </a>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.twitter.com"}>
                              <i className={"ph-bold ph-twitter-logo"}></i>
                            </a>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.linkedin.com"}>
                              <i className={"ph-bold ph-instagram-logo"}></i>
                            </a>
                            <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.pinterest.com"}>
                              <i className={"ph-bold ph-pinterest-logo"}></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"team-six-content text-center tw-py-705 position-relative z-1"}>
                        <h4 className={"team-four-title team-six-title tw-text-605 fw-bold font-rethink tw-mb-1 font-nunito tw-transition-3"}>
                          <a className={"hover-underline tw-transition-3"} href={"/team-details"}>
                            Mariamu Bongo
                          </a>
                        </h4>
                        <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                          Team Leader
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-six-wrapper team-ip-wrapper tw-mb-8 bg-white tw-p-205"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"team-four-thumb team-six-thumb position-relative z-1 tw-pb-205"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-six-thumb3.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                      <div className={"team-four-btn team-six-btn position-relative z-2"}>
                        <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-six-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-ip-icon"}>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"team-six-content text-center tw-py-705 position-relative z-1"}>
                    <h4 className={"team-four-title team-six-title tw-text-605 fw-bold font-rethink tw-mb-1 font-nunito tw-transition-3"}>
                      <a className={"hover-underline tw-transition-3"} href={"/team-details"}>
                        Machozi Macho
                      </a>
                    </h4>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      Team Leader
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-six-wrapper team-ip-wrapper tw-mb-8 bg-white tw-p-205"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"team-four-thumb team-six-thumb position-relative z-1 tw-pb-205"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-six-thumb4.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                      <div className={"team-four-btn team-six-btn position-relative z-2"}>
                        <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-six-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-ip-icon"}>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"team-six-content text-center tw-py-705 position-relative z-1"}>
                    <h4 className={"team-four-title team-six-title tw-text-605 fw-bold font-rethink tw-mb-1 font-nunito tw-transition-3"}>
                      <a className={"hover-underline tw-transition-3"} href={"/team-details"}>
                        Batuli Hashimu
                      </a>
                    </h4>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      Team Leader
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-six-wrapper team-ip-wrapper tw-mb-8 bg-white tw-p-205"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"team-four-thumb team-six-thumb position-relative z-1 tw-pb-205"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-six-thumb5.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                      <div className={"team-four-btn team-six-btn position-relative z-2"}>
                        <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-six-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-ip-icon"}>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-six-600 hover-text-white"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"team-six-content text-center tw-py-705 position-relative z-1"}>
                    <h4 className={"team-four-title team-six-title tw-text-605 fw-bold font-rethink tw-mb-1 font-nunito tw-transition-3"}>
                      <a className={"hover-underline tw-transition-3"} href={"/team-details"}>
                        Watoto Wa Road
                      </a>
                    </h4>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      Team Leader
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-lg-6"}>
                <div className={"team-six-button d-flex justify-content-center align-items-center h-100"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"tw-hover-btn-wrapper footer-three-hover-btn"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <a className={"tw-btn-circle tw-hover-btn-item border border-2 border-main-six-600 tw-hover-btn bg-main-six-600"} href={"/team-details"}>
                      <span className={"d-flex flex-column justify-content-center"}>
                        <span className={"tw-btn-circle-icon text-white tw-text-8"}>
                          <img src={"/assets/images/icons/f4-arrow-btn.svg"} alt={"arrow"} />
                        </span>
                        <span className={"text-white fw-bold tw-text-lg font-rethink text-center tw-transition-3"}>
                          Join With Us
                        </span>
                      </span>
                      <i className={"tw-btn-circle-dot"}></i>
                    </a>
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
                    Team Members
                  </div>
                </div>
              </div>
              <div className={"col-xl-9"}>
                <div className={"section-six-wrapper tw-mb-10 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h3 className={"tw-char-animation font-oswald tw-text-30 font-oswald tw-mb-8"}>
                    Clients Say
                  </h3>
                  <p className={"section-six-paragraph tw-w-470-px font-nunito fw-medium"}>
                    Whether it’s a small repair or a major installation, our team of 
                        licensed and experienced plumber is committed to getting the 
                        job done right — the first time. We use modern tools
                  </p>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-5 col-lg-7"}>
                <div className={"testimonial-six-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"testimonial-six-active swiper-container"}>
                    <div className={"testimonial-six-swiper-wrapper swiper-wrapper"}>
                      <div className={"testimonial-six-wrapper tw-py-9 tw-px-11 tw-rounded-lg swiper-slide"}>
                        <div className={"testimonial-six-review tw-mb-8"}>
                          <i className={"ph-bold ph-star"}></i>
                          <i className={"ph-bold ph-star"}></i>
                          <i className={"ph-bold ph-star"}></i>
                          <i className={"ph-bold ph-star"}></i>
                          <i className={"ph-bold ph-star"}></i>
                        </div>
                        <div className={"tw-mb-11"}>
                          <p className={"tw-text-lg font-nunito tw-text-5"}>
                            With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.
                          </p>
                        </div>
                        <div className={"d-flex align-items-center justify-content-between tw-gap-4"}>
                          <div>
                            <h4 className={"font-oswald tw-text-2xl"}>
                              Alex Johansson
                            </h4>
                            <p className={"tw-text-lg font-nunito"}>
                              Client of USA
                            </p>
                          </div>
                          <div className={"testimonial-six-arrow"}>
                            <button className={"slider-prev "} tabIndex={"0"} aria-label={"Previous slide"}>
                              <svg width={"34"} height={"34"} viewBox={"0 0 34 34"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                                <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M4.50139 15.5777L28.7318 15.5777V17.6546L4.50139 17.6546V15.5777Z"} fill={"#231F20"}></path>
                                <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M5.54097 17.6537C10.4252 17.6537 14.4164 13.3584 14.4164 8.77825V7.73979H12.3394V8.77825C12.3394 12.2557 9.23429 15.5767 5.54097 15.5767H4.50306V17.6537H5.54097Z"} fill={"#231F20"}></path>
                                <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M5.53999 15.5766C10.4242 15.5766 14.4154 19.8719 14.4154 24.4521V25.4906H12.3385V24.4521C12.3385 20.9745 9.23331 17.6536 5.53999 17.6536L4.50208 17.6536V15.5766H5.53999Z"} fill={"#231F20"}></path>
                              </svg>
                            </button>
                            <button className={"slider-next "} tabIndex={"0"} aria-label={"Next slide"}>
                              <svg width={"34"} height={"34"} viewBox={"0 0 34 34"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                                <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M28.7294 17.6531L4.49902 17.6531V15.5762L28.7294 15.5762V17.6531Z"} fill={"#231F20"}></path>
                                <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M27.6898 15.5771C22.8056 15.5771 18.8145 19.8724 18.8145 24.4526V25.491H20.8914V24.4526C20.8914 20.9751 23.9965 17.6541 27.6898 17.6541H28.7277V15.5771H27.6898Z"} fill={"#231F20"}></path>
                                <path fillRule={"evenodd"} clipRule={"evenodd"} d={"M27.6898 17.6542C22.8056 17.6542 18.8145 13.3589 18.8145 8.7787V7.74023H20.8914V8.7787C20.8914 12.2563 23.9965 15.5772 27.6898 15.5772H28.7277V17.6542H27.6898Z"} fill={"#231F20"}></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7 col-lg-5"}>
                <div className={"testimonial-six-thumb text-end position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/testimonial-six-thumb.jpg"} alt={"thumb"} />
                  <div className={"testimonial-six-quate"}>
                    <span>
                      <img src={"/assets/images/icons/testimonial-six-quate.svg"} alt={"quate"} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"testimonial-six-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/testimonial-six-shape1.png"} alt={"shape1"} />
            <img className={"testimonial-six-shape-2 position-absolute z-n1 top-0 end-0"} src={"/assets/images/shapes/testimonial-six-shape2.png"} alt={"shape1"} />
          </div>
        </section>
        <section className={"blog-six-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row align-items-center tw-mb-12"}>
              <div className={"col-xl-7 col-lg-7 col-md-7"}>
                <div className={"section-six-wrapper mb-sm-3"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Blog & News
                  </div>
                  <h3 className={"tw-char-animation font-oswald tw-text-101 font-oswald"}>
                    Our Latest News And Article
                  </h3>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-5 col-md-5"}>
                <div className={"blog-six-top-button text-md-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <a href={"/blog-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-six-600 text-white tw-rounded-4xl position-relative z-1"}>
                    <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                      <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                        <span className={"overflow-hidden position-relative d-inline-flex"}>
                          <i className={"ph-bold ph-arrow-right"}></i>
                          <i className={"ph-bold ph-arrow-right"}></i>
                        </span>
                      </span>
                      <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                        <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                          Get A Quote
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6"}>
                <div className={"blog-wrapper  blog-six-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"blog-six-thumb blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-5"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb1.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb1.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                  <div className={"blog-six-content"}>
                    <div className={"blog-meta tw-mb-6"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                          <span className={"text-main-six-600 tw-text-xl"}>
                            <i className={"ph-bold ph-user-plus"}></i>
                          </span>
                          By Admin
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                          <span className={"text-main-six-600 tw-text-xl"}>
                            <i className={"ph-bold ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div className={"tw-mb-8"}>
                      <h4 className={"blog-six-title tw-text-605 font-oswald"}>
                        <a className={"hover-text-main-six-600"} href={"/blog-details"}>
                          Big Reason Why Roofing Contractors 
                                Deliver Lifelong Value To Homes
                        </a>
                      </h4>
                    </div>
                    <div className={"blog-six-button"}>
                      <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 font-oswald hover-text-main-six-600 tw-text-lg"} href={"/service-details"}>
                        Read More
                        <span className={"d-inline-block lh-1 tw-text-xl"}>
                          <i className={"ph-bold ph-arrow-right"}></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-8"}>
                <div className={"row"}>
                  <div className={"col-xl-6 col-lg-6"}>
                    <div className={"blog-wrapper blog-six-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                      <div className={"blog-six-thumb blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-5"}>
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb2.jpg"} alt={"blog"} />
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb2.jpg"} alt={"blog"} />
                        <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                      </div>
                      <div className={"blog-six-content"}>
                        <div className={"blog-meta tw-mb-6"}>
                          <ul className={"d-flex align-items-center tw-gap-5"}>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                              <span className={"text-main-six-600 tw-text-xl"}>
                                <i className={"ph-bold ph-user-plus"}></i>
                              </span>
                              By Admin
                            </li>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                              <span className={"text-main-six-600 tw-text-xl"}>
                                <i className={"ph-bold ph-calendar"}></i>
                              </span>
                              23, August 2026
                            </li>
                          </ul>
                        </div>
                        <div className={"tw-mb-8"}>
                          <h4 className={"blog-six-title tw-text-605 font-oswald"}>
                            <a className={"hover-text-main-six-600"} href={"/blog-details"}>
                              Common Reason Why Roofing Services 
                                        Help Prevent Bigger Issues
                            </a>
                          </h4>
                        </div>
                        <div className={"blog-six-button"}>
                          <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 font-oswald hover-text-main-six-600 tw-text-lg"} href={"/service-details"}>
                            Read More
                            <span className={"d-inline-block lh-1 tw-text-xl"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"col-xl-6 col-lg-6"}>
                    <div className={"blog-wrapper blog-six-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      <div className={"blog-six-thumb blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-5"}>
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb3.jpg"} alt={"blog"} />
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb3.jpg"} alt={"blog"} />
                        <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                      </div>
                      <div className={"blog-six-content"}>
                        <div className={"blog-meta tw-mb-6"}>
                          <ul className={"d-flex align-items-center tw-gap-5"}>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                              <span className={"text-main-six-600 tw-text-xl"}>
                                <i className={"ph-bold ph-user-plus"}></i>
                              </span>
                              By Admin
                            </li>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                              <span className={"text-main-six-600 tw-text-xl"}>
                                <i className={"ph-bold ph-calendar"}></i>
                              </span>
                              23, August 2026
                            </li>
                          </ul>
                        </div>
                        <div className={"tw-mb-8"}>
                          <h4 className={"blog-six-title tw-text-605 font-oswald"}>
                            <a className={"hover-text-main-six-600"} href={"/blog-details"}>
                              Important Reason Why Roofing Services 
                                        Improve Property Value Quickly
                            </a>
                          </h4>
                        </div>
                        <div className={"blog-six-button"}>
                          <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 font-oswald hover-text-main-six-600 tw-text-lg"} href={"/service-details"}>
                            Read More
                            <span className={"d-inline-block lh-1 tw-text-xl"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"col-xl-12 col-lg-12"}>
                    <div className={"blog-wrapper blog-six-wrapper four d-flex align-items-center tw-gap-8 tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                      <div className={"blog-six-thumb blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-5"}>
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb4.jpg"} alt={"blog"} />
                        <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-six-thumb4.jpg"} alt={"blog"} />
                        <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                      </div>
                      <div className={"blog-six-content"}>
                        <div className={"blog-meta tw-mb-6"}>
                          <ul className={"d-flex align-items-center tw-gap-5"}>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                              <span className={"text-main-six-600 tw-text-xl"}>
                                <i className={"ph-bold ph-user-plus"}></i>
                              </span>
                              By Admin
                            </li>
                            <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                              <span className={"text-main-six-600 tw-text-xl"}>
                                <i className={"ph-bold ph-calendar"}></i>
                              </span>
                              23, August 2026
                            </li>
                          </ul>
                        </div>
                        <div className={"tw-mb-8"}>
                          <h4 className={"blog-six-title tw-text-605 font-oswald"}>
                            <a className={"hover-text-main-six-600"} href={"/blog-details"}>
                              Big Reason Why Roofing Contractors 
                                        Deliver Lifelong Value To Homes
                            </a>
                          </h4>
                        </div>
                        <div className={"blog-six-button"}>
                          <a className={"service-three-btn d-inline-flex align-items-center tw-gap-2 fw-semibold text-heading tw-transition-3 font-oswald hover-text-main-six-600 tw-text-lg"} href={"/service-details"}>
                            Read More
                            <span className={"d-inline-block lh-1 tw-text-xl"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
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
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
