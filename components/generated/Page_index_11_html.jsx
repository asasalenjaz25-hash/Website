// Ported from index-11.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_index_11_html() {
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
        <section className={"banner-seven-area bg-img position-relative z-1"} data-background-image={"/assets/images/thumbs/banner-seven-bg.jpg"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"banner-seven-wrapper"}>
                  <div className={"banner-seven-content tw-mb-8"}>
                    <div className={"banner-seven-subtitle banner-six-subtitle section-three-subtitle section-six-subtitle tw-text-base fw-medium font-oswald tw-rounded-2xl fw-medium text-uppercase text-white tw-mb-4 d-inline-block position-relative z-1"}>
                      Electrical Services Company
                    </div>
                    <h1 className={"banner-seven-title tw-text-20 text-white tw-char-animation"}>
                      Reliable Electrical Services for Homes & Businesses
                    </h1>
                  </div>
                  <div className={"banner-seven-button"}>
                    <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            Get A Free Estimate
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"about-seven-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-2 col-lg-4"}>
                <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-six-wrapper"}>
                    <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      About Us
                    </div>
                  </div>
                  <div className={"about-seven-left-thumb"}>
                    <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/about-seven-thumb1.jpg"} alt={"thumb1"} />
                  </div>
                </div>
              </div>
              <div className={"col-xl-7 col-lg-8"}>
                <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-10 tw-char-animation"}>
                    Skilled Electricians,
                    <span className={"fw-normal"}>
                      Delivering
                    </span>
                    High-
                    <span className={"fw-normal"}>
                      Quality
                    </span>
                    Electrical Wiring 
                        And Installation
                    <span className={"fw-normal"}>
                      Services.
                    </span>
                  </h2>
                  <div className={"about-seven-wrap tw-w-458-px tw-ms-56"}>
                    <p className={"section-seven-paragraph tw-mb-10"}>
                      Servicepro is a team of highly skilled and experienced electricians dedicated to providing top-notch electrical wiring and installation services. With a commitment to excellence and attention to detail, our professionals deliver quality workmanship that...
                    </p>
                    <div className={"about-seven-button"}>
                      <a href={"/about"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              More About Us
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3"}>
                <div className={"about-seven-right-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/about-seven-thumb2.jpg"} alt={"thumb1"} />
                </div>
              </div>
            </div>
          </div>
          <div className={"about-seven-maquee maquee-slider position-absolute z-n1"}>
            <div className={"swiper maquee-active d-flex align-items-center"}>
              <div className={"swiper-wrapper maquee-transition"}>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h3 className={"about-seven-maquee-title maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"work-seven-area py-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"work-seven-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"work-seven-thumb tw-mb-13"}>
                    <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/work-seven-thumb.jpg"} alt={"thumb"} />
                  </div>
                  <div className={"section-six-wrapper tw-mb-8"}>
                    <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      How it work
                    </div>
                    <h2 className={"section-seven-title tw-text-122 tw-mb-10 tw-char-animation"}>
                      How to Work Our Electricity Service
                    </h2>
                    <p className={"section-seven-paragraph tw-me-10"}>
                      Servicepro is a team of highly skilled and experienced electricians dedicated to providing top-notch electrical wiring and installation services.
                    </p>
                  </div>
                  <div className={"work-seven-button"}>
                    <a href={"/project-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            View Projects
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"work-seven-right tw-ms-122"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"work-seven-item d-flex tw-gap-8 tw-mb-7 position-relative z-1"}>
                    <div className={"work-seven-icon position-relative z-1"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-heading rounded-circle tw-text-122 position-relative z-1 tw-transition-4"}>
                        1
                      </span>
                    </div>
                    <div className={"work-seven-content"}>
                      <h3 className={"work-seven-title tw-text-2xl fw-medium tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"#"}>
                          Electrical Maintenance Solutions
                        </a>
                      </h3>
                      <p className={"work-seven-paragraph tw-w-510-px"}>
                        We discuss your electrical needs and provide expert guidance 
                                for the best solutions.
                      </p>
                    </div>
                  </div>
                  <div className={"work-seven-item d-flex tw-gap-8 tw-mb-7 position-relative z-1"}>
                    <div className={"work-seven-icon position-relative z-1"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-heading rounded-circle tw-text-122 position-relative z-1 tw-transition-4"}>
                        2
                      </span>
                    </div>
                    <div className={"work-seven-content"}>
                      <h3 className={"work-seven-title tw-text-2xl fw-medium tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"#"}>
                          Residential Electrical Services
                        </a>
                      </h3>
                      <p className={"work-seven-paragraph tw-w-510-px"}>
                        We discuss your electrical needs and provide expert guidance 
                                for the best solutions.
                      </p>
                    </div>
                  </div>
                  <div className={"work-seven-item d-flex tw-gap-8 tw-mb-7 position-relative z-1"}>
                    <div className={"work-seven-icon position-relative z-1"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-heading rounded-circle tw-text-122 position-relative z-1 tw-transition-4"}>
                        3
                      </span>
                    </div>
                    <div className={"work-seven-content"}>
                      <h3 className={"work-seven-title tw-text-2xl fw-medium tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"#"}>
                          Modern Electrical Installations
                        </a>
                      </h3>
                      <p className={"work-seven-paragraph tw-w-510-px"}>
                        We discuss your electrical needs and provide expert guidance 
                                for the best solutions.
                      </p>
                    </div>
                  </div>
                  <div className={"work-seven-item d-flex tw-gap-8 tw-mb-7 position-relative z-1"}>
                    <div className={"work-seven-icon position-relative z-1"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-heading rounded-circle tw-text-122 position-relative z-1 tw-transition-4"}>
                        4
                      </span>
                    </div>
                    <div className={"work-seven-content"}>
                      <h3 className={"work-seven-title tw-text-2xl fw-medium tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"#"}>
                          Expert Electrical Contractors
                        </a>
                      </h3>
                      <p className={"work-seven-paragraph tw-w-510-px"}>
                        We discuss your electrical needs and provide expert guidance 
                                for the best solutions.
                      </p>
                    </div>
                  </div>
                  <div className={"work-seven-item d-flex tw-gap-8 tw-mb-7 position-relative z-1"}>
                    <div className={"work-seven-icon position-relative z-1"}>
                      <span className={"tw-w-24 tw-h-24 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-heading rounded-circle tw-text-122 position-relative z-1 tw-transition-4"}>
                        5
                      </span>
                    </div>
                    <div className={"work-seven-content border-0 mb-0 pb-0"}>
                      <h3 className={"work-seven-title tw-text-2xl fw-medium tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"#"}>
                          Electrical System Installations
                        </a>
                      </h3>
                      <p className={"work-seven-paragraph tw-w-510-px"}>
                        We discuss your electrical needs and provide expert guidance 
                                for the best solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"team-seven-area py-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-4"}>
                <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    team members
                  </div>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-8"}>
                <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                    Our Team of Skilled Electrical Experts
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-3 col-lg-4 col-md-6"}>
                <div className={"team-seven-wrapper team-four-wrapper team-ip-wrapper tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"team-seven-thumb team-four-thumb team-six-thumb position-relative z-1 tw-mb-6 tw-rounded-lg"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100 object-fit-cover"} src={"/assets/images/thumbs/team-seven-thumb1.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                      <div className={"team-four-btn team-six-btn position-relative z-2"}>
                        <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-four-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph-bold ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-ip-icon"}>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"team-seven-content"}>
                    <h3 className={"team-four-title team-six-title tw-text-2xl fw-medium font-rethink tw-mb-2 tw-transition-3"}>
                      <a className={"hover-text-main-four-600 hover-underline tw-transition-3"} href={"/team-details"}>
                        Nawer Belajarbaik
                      </a>
                    </h3>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      Founder Of Electrician
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-4 col-md-6"}>
                <div className={"team-seven-wrapper team-four-wrapper team-ip-wrapper tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"team-seven-thumb team-four-thumb team-six-thumb position-relative z-1 tw-mb-6 tw-rounded-lg"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100 object-fit-cover"} src={"/assets/images/thumbs/team-seven-thumb2.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                      <div className={"team-four-btn team-six-btn position-relative z-2"}>
                        <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-four-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph-bold ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-ip-icon"}>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"team-seven-content"}>
                    <h3 className={"team-four-title team-six-title tw-text-2xl fw-medium font-rethink tw-mb-2 tw-transition-3"}>
                      <a className={"hover-text-main-four-600 hover-underline tw-transition-3"} href={"/team-details"}>
                        Muhamad Ridwan
                      </a>
                    </h3>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      Master Electrician
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-4 col-md-6"}>
                <div className={"team-seven-wrapper team-four-wrapper team-ip-wrapper tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"team-seven-thumb team-four-thumb team-six-thumb position-relative z-1 tw-mb-6 tw-rounded-lg"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100 object-fit-cover"} src={"/assets/images/thumbs/team-seven-thumb3.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                      <div className={"team-four-btn team-six-btn position-relative z-2"}>
                        <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-four-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph-bold ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-ip-icon"}>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"team-seven-content"}>
                    <h3 className={"team-four-title team-six-title tw-text-2xl fw-medium font-rethink tw-mb-2 tw-transition-3"}>
                      <a className={"hover-text-main-four-600 hover-underline tw-transition-3"} href={"/team-details"}>
                        Nelson Dicaprio
                      </a>
                    </h3>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      Project Manager
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-4 col-md-6"}>
                <div className={"team-seven-wrapper team-four-wrapper team-ip-wrapper tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"team-seven-thumb team-four-thumb team-six-thumb position-relative z-1 tw-mb-6 tw-rounded-lg"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100 object-fit-cover"} src={"/assets/images/thumbs/team-seven-thumb4.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social position-absolute top-0 end-0 tw-me-5 tw-mt-5"}>
                      <div className={"team-four-btn team-six-btn position-relative z-2"}>
                        <button className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center bg-main-four-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph-bold ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-ip-icon"}>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                        <a className={"tw-w-805 tw-h-805 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-four-600 hover-text-white"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"team-seven-content"}>
                    <h3 className={"team-four-title team-six-title tw-text-2xl fw-medium font-rethink tw-mb-2 tw-transition-3"}>
                      <a className={"hover-text-main-four-600 hover-underline tw-transition-3"} href={"/team-details"}>
                        DiCaprio Neeson
                      </a>
                    </h3>
                    <p className={"team-four-paragraph team-six-paragraph font-nunito tw-transition-3"}>
                      Founder Of Electrician
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"project-seven-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-4"}>
                <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Completed projects
                  </div>
                </div>
              </div>
              <div className={"col-xl-8 col-lg-8"}>
                <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                    Take A Look At Our Recent 
                        Projects Where
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-4 col-md-6"}>
                <div className={"project-seven-wrapper one tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"project-seven-thumb tw-mb-5"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/project-seven-thumb1.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-seven-content"}>
                    <h3 className={"tw-text-3xl"}>
                      <a className={"hover-text-main-four-600"} href={"/project-details"}>
                        Power Grid Expansion
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-4 col-md-6"}>
                <div className={"project-seven-wrapper two tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"project-seven-thumb tw-mb-5"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/project-seven-thumb2.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-seven-content"}>
                    <h3 className={"tw-text-3xl"}>
                      <a className={"hover-text-main-four-600"} href={"/project-details"}>
                        Electric Panel Repair
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-4 col-md-6"}>
                <div className={"project-seven-wrapper three tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"project-seven-thumb tw-mb-5"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/project-seven-thumb3.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-seven-content"}>
                    <h3 className={"tw-text-3xl"}>
                      <a className={"hover-text-main-four-600"} href={"/project-details"}>
                        Circuit Breaker Panels
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-4 col-md-6"}>
                <div className={"project-seven-wrapper four tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"project-seven-thumb tw-mb-5"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/project-seven-thumb4.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-seven-content"}>
                    <h3 className={"tw-text-3xl"}>
                      <a className={"hover-text-main-four-600"} href={"/project-details"}>
                        Power Grid Expansion
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-4 col-md-6"}>
                <div className={"project-seven-wrapper five tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"project-seven-thumb tw-mb-5"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/project-seven-thumb5.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-seven-content"}>
                    <h3 className={"tw-text-3xl"}>
                      <a className={"hover-text-main-four-600"} href={"/project-details"}>
                        Electric Panel Repair
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-4 col-md-6"}>
                <div className={"project-seven-wrapper six tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"project-seven-thumb tw-mb-5"}>
                    <a className={"d-block"} href={"/project-details"}>
                      <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/project-seven-thumb6.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"project-seven-content"}>
                    <h3 className={"tw-text-3xl"}>
                      <a className={"hover-text-main-four-600"} href={"/project-details"}>
                        Circuit Breaker Panels
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"counter-seven-area pt-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between"}>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h2 className={"counter-six-title tw-text-170 fw-medium font-oswald text-white mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"98"}></span>
                    %
                  </h2>
                  <p className={"counter-seven-paragraph text-white text-capitalize"}>
                    Satisfied Clients
                  </p>
                </div>
              </div>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"counter-six-title tw-text-170 fw-medium font-oswald text-white mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"25"}></span>
                    +
                  </h2>
                  <p className={"counter-seven-paragraph text-white text-capitalize"}>
                    Achievement Honors
                  </p>
                </div>
              </div>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <h2 className={"counter-six-title tw-text-170 fw-medium font-oswald text-white mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"500"}></span>
                    +
                  </h2>
                  <p className={"counter-seven-paragraph text-white text-capitalize"}>
                    Project Finished
                  </p>
                </div>
              </div>
              <div className={"col-xl-2 col-lg-6 col-md-6 col-sm-6"}>
                <div className={"counter-six-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <h2 className={"counter-six-title tw-text-170 fw-medium font-oswald text-white mb-0 d-inline-flex align-items-center lh-1"}>
                    <span className={"font-oswald odometer"} data-count={"20"}></span>
                    +
                  </h2>
                  <p className={"counter-seven-paragraph text-white text-capitalize"}>
                    Years of Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"counter-seven-shape-1 position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/counter-seven-shape1.png"} alt={"shape"} />
            <img className={"counter-seven-shape-2 position-absolute bottom-0 end-0 z-n1"} src={"/assets/images/shapes/counter-seven-shape2.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"cta-seven-area position-relative z-2"}>
          <div className={"container"}>
            <div className={"cta-seven-bg tw-rounded-xl overflow-hidden"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
              <div className={"row align-items-center gx-0"}>
                <div className={"col-xl-5 col-lg-5"}>
                  <div className={"cta-seven-thumb"}>
                    <img src={"/assets/images/thumbs/cta-seven-thumb.jpg"} alt={"thumb"} />
                  </div>
                </div>
                <div className={"col-xl-7 col-lg-7"}>
                  <div className={"cta-seven-wrapper tw-p-15"}>
                    <div className={"section-six-wrapper tw-mb-10"}>
                      <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                        Call to Action Strip
                      </div>
                      <h2 className={"section-seven-title tw-text-122 tw-mb-6 tw-char-animation"}>
                        Need Urgent Help? Call Our 24/7 Electricians now!
                      </h2>
                      <p>
                        Get a free, no-obligation quote from our experts. Whether it's installations, repairs, or upgrades, we provide reliable and efficient solutions.
                      </p>
                    </div>
                    <div className={"cta-seven-button"}>
                      <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              Get a Free Quote
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
        </section>
        <section className={"pricing-seven-area tw-pb-22 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-5"}>
                <div className={"section-six-wrapper text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    Pricing Plan
                  </div>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                    Choose Your Best Pricing Plan
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"pricing-seven-wrapper bg-white tw-p-5 tw-pt-10 tw-rounded-2xl tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"pricing-seven-top tw-p-4"}>
                    <h3 className={"pricing-seven-title tw-mb-8 text-main-four-600"}>
                      Basic Pack
                    </h3>
                    <ul className={"tw-mb-6"}>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Indoor/outdoor Lighting Installation
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Appliance & Fixture Installation
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Unlimited Seats & Role Access
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Annual Electrical Inspection
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Inspection Ceiling Fan Installation
                      </li>
                    </ul>
                  </div>
                  <div className={"pricing-seven-wrap bg-white tw-rounded-lg"}>
                    <div>
                      <h4 className={"pricing-seven-price tw-text-3xl fw-medium tw-mb-5"}>
                        $60
                        <span className={"tw-text-base"}>
                          / Month
                        </span>
                      </h4>
                    </div>
                    <div>
                      <a href={"/pricing"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              Get The Plan
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"pricing-seven-wrapper active bg-main-four-600 tw-p-5 tw-pt-10 tw-rounded-2xl tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"pricing-seven-top tw-p-4"}>
                    <h3 className={"pricing-seven-title tw-mb-8 text-white"}>
                      Premium Pack
                    </h3>
                    <ul className={"pricing-seven-list tw-mb-6"}>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6 text-white"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Indoor/outdoor Lighting Installation
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6 text-white"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Appliance & Fixture Installation
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6 text-white"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Unlimited Seats & Role Access
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6 text-white"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Annual Electrical Inspection
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Inspection Ceiling Fan Installation
                      </li>
                    </ul>
                  </div>
                  <div className={"pricing-seven-wrap bg-white tw-rounded-lg"}>
                    <div>
                      <h4 className={"pricing-seven-price tw-text-3xl fw-medium tw-mb-5"}>
                        $60
                        <span className={"tw-text-base"}>
                          / Month
                        </span>
                      </h4>
                    </div>
                    <div>
                      <a href={"/pricing"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              Get The Plan
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"pricing-seven-wrapper bg-white tw-p-5 tw-pt-10 tw-rounded-2xl tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"pricing-seven-top tw-p-4"}>
                    <h3 className={"pricing-seven-title tw-mb-8 text-main-four-600"}>
                      Stander Pack
                    </h3>
                    <ul className={"tw-mb-6"}>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Indoor/outdoor Lighting Installation
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Appliance & Fixture Installation
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Unlimited Seats & Role Access
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2 tw-mb-6"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Annual Electrical Inspection
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-2"}>
                        <span className={"d-inline-block lh-1"}>
                          <img src={"/assets/images/icons/pricing-seven-check.svg"} alt={"check"} />
                        </span>
                        Inspection Ceiling Fan Installation
                      </li>
                    </ul>
                  </div>
                  <div className={"pricing-seven-wrap bg-white tw-rounded-lg"}>
                    <div>
                      <h4 className={"pricing-seven-price tw-text-3xl fw-medium tw-mb-5"}>
                        $60
                        <span className={"tw-text-base"}>
                          / Month
                        </span>
                      </h4>
                    </div>
                    <div>
                      <a href={"/pricing"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              Get The Plan
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
          <div>
            <img className={"position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/cta-seven-shape1.png"} alt={"shape1"} />
            <img className={"position-absolute top-0 end-0 z-n1"} src={"/assets/images/shapes/cta-seven-shape2.png"} alt={"shape1"} />
          </div>
        </section>
        <section className={"choose-seven-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"choose-seven-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-six-wrapper tw-mb-10"}>
                    <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      WHY CHOOSE US
                    </div>
                    <h2 className={"section-seven-title tw-text-122 tw-mb-6 tw-char-animation"}>
                      Powering Tomorrow with Smarter Energy Choices
                    </h2>
                    <p className={"section-seven-paragraph"}>
                      Servicepro is a cutting-edge platform designed to revolutionize the way we think about energy consumption. With a focus
                    </p>
                  </div>
                  <div className={"choose-seven-wrap"}>
                    <div className={"choose-seven-item d-flex tw-gap-6 tw-mb-10"}>
                      <div className={"choose-seven-icon"}>
                        <span className={"tw-w-21 tw-h-21 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg"}>
                          <img src={"/assets/images/icons/choose-seven-icon1.svg"} alt={"icon"} />
                        </span>
                      </div>
                      <div className={"choose-seven-content"}>
                        <h3 className={"choose-seven-title tw-text-505 fw-semibold tw-mb-4"}>
                          Fast Home Energy Audits
                        </h3>
                        <p className={"choose-seven-paragraph"}>
                          Servicepro is a cutting-edge platform designed to revolutionize 
                                    the way we think about energy consumption.
                        </p>
                      </div>
                    </div>
                    <div className={"choose-seven-item d-flex tw-gap-6 tw-mb-10"}>
                      <div className={"choose-seven-icon"}>
                        <span className={"tw-w-21 tw-h-21 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg"}>
                          <img src={"/assets/images/icons/choose-seven-icon2.svg"} alt={"icon"} />
                        </span>
                      </div>
                      <div className={"choose-seven-content"}>
                        <h3 className={"choose-seven-title tw-text-505 fw-semibold tw-mb-4"}>
                          Smart Power Solutions Designed
                        </h3>
                        <p className={"choose-seven-paragraph"}>
                          Servicepro is a cutting-edge platform designed to revolutionize 
                                    the way we think about energy consumption.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            Read More
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"choose-seven-thumb text-lg-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/choose-seven-thumb.jpg"} alt={"thumb"} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"position-absolute top-0 start-0 z-n1 d-none d-xxl-block"} src={"/assets/images/shapes/choose-seven-shape.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"blog-seven-area pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4"}>
                <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle tw-text-base font-heading fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                    OUR BLOG
                  </div>
                </div>
              </div>
              <div className={"col-xl-8"}>
                <div className={"section-six-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"section-seven-title tw-text-122 tw-mb-14 tw-char-animation"}>
                    Electricity News And Updates
                         For Energy Growth And Global Innovations.
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper blog-seven-wrapper bg-white tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div>
                    <h3 className={"tw-text-2xl tw-mb-6"}>
                      <a className={"hover-text-main-four-600"} href={"/blog-details"}>
                        Expert AC Repair Solutions For 
                            Smooth Cooling All Season
                      </a>
                    </h3>
                  </div>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-6"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-seven-thumb1.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-seven-thumb1.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                  <div className={"tw-mb-4"}>
                    <p className={"blog-seven-paragraph"}>
                      Servicepro is a team of highly skilled & experien 
                            electricians dedicated to providing
                    </p>
                  </div>
                  <div className={"blog-seven-wrap d-flex align-items-center justify-content-between"}>
                    <div className={"blog-meta"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-user"}></i>
                          </span>
                          By Admin
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div className={"blog-seven-button"}>
                      <a className={"blog-seven-btn tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-main-four-600 tw-text-xl hover-bg-main-four-600 hover-text-white"} href={"/blog-details"}>
                        <i className={"ph-bold ph-arrow-right"}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper blog-seven-wrapper bg-white tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div>
                    <h3 className={"tw-text-2xl tw-mb-6"}>
                      <a className={"hover-text-main-four-600"} href={"/blog-details"}>
                        Fast appliance wiring, safe 
                            connections for home electro..
                      </a>
                    </h3>
                  </div>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-6"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-seven-thumb2.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-seven-thumb2.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                  <div className={"tw-mb-4"}>
                    <p className={"blog-seven-paragraph"}>
                      Servicepro is a team of highly skilled & experien 
                            electricians dedicated to providing
                    </p>
                  </div>
                  <div className={"blog-seven-wrap d-flex align-items-center justify-content-between"}>
                    <div className={"blog-meta"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-user"}></i>
                          </span>
                          By Admin
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div className={"blog-seven-button"}>
                      <a className={"blog-seven-btn tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-main-four-600 tw-text-xl hover-bg-main-four-600 hover-text-white"} href={"/blog-details"}>
                        <i className={"ph-bold ph-arrow-right"}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper blog-seven-wrapper bg-white tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div>
                    <h3 className={"tw-text-2xl tw-mb-6"}>
                      <a className={"hover-text-main-four-600"} href={"/blog-details"}>
                        Emergency outage repairs, 
                            fast reliable solutions when
                      </a>
                    </h3>
                  </div>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-6"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-seven-thumb3.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-seven-thumb3.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                  <div className={"tw-mb-4"}>
                    <p className={"blog-seven-paragraph"}>
                      Servicepro is a team of highly skilled & experien 
                            electricians dedicated to providing
                    </p>
                  </div>
                  <div className={"blog-seven-wrap d-flex align-items-center justify-content-between"}>
                    <div className={"blog-meta"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-user"}></i>
                          </span>
                          By Admin
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div className={"blog-seven-button"}>
                      <a className={"blog-seven-btn tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-main-four-600 tw-text-xl hover-bg-main-four-600 hover-text-white"} href={"/blog-details"}>
                        <i className={"ph-bold ph-arrow-right"}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"contact-seven-area py-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"contact-seven-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-six-wrapper tw-mb-10"}>
                    <div className={"section-seven-subtitle font-heading section-three-subtitle section-six-subtitle tw-text-base fw-medium tw-rounded-2xl fw-medium text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
                      Contact Now
                    </div>
                    <h2 className={"section-seven-title tw-text-122 tw-mb-6 tw-char-animation"}>
                      Want To Inquire?
                    </h2>
                    <p className={"tw-me-10"}>
                      Providing reliable electrical solutions with expert service and customer satisfaction.
                    </p>
                  </div>
                  <div className={"contact-seven-wrap tw-w-435-px"}>
                    <div className={"contact-seven-item d-flex align-items-center tw-gap-505 tw-rounded-lg tw-p-205 tw-mb-705"}>
                      <div className={"contact-seven-icon"}>
                        <a className={"tw-w-20 tw-h-20 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg tw-text-10 bg-main-four-600 text-white"} href={"tel:123456-7895"}>
                          <i className={"ph ph-phone-call"}></i>
                        </a>
                      </div>
                      <div className={"contact-seven-content"}>
                        <span className={"d-block tw-mb-2"}>
                          Call Us
                        </span>
                        <a className={"d-block text-heading fw-medium hover-text-main-four-600"} href={"tel:123456-7895"}>
                          (123) 456-7895
                        </a>
                      </div>
                    </div>
                    <div className={"contact-seven-item d-flex align-items-center tw-gap-505 tw-rounded-lg tw-p-205 tw-mb-705"}>
                      <div className={"contact-seven-icon"}>
                        <a className={"tw-w-20 tw-h-20 lh-1 d-inline-flex justify-content-center align-items-center tw-rounded-lg tw-text-10 bg-main-four-600 text-white"} href={"mailto:info@Wowtheme.com"}>
                          <i className={"ph ph-envelope"}></i>
                        </a>
                      </div>
                      <div className={"contact-seven-content"}>
                        <span className={"d-block tw-mb-2"}>
                          Email
                        </span>
                        <a className={"d-block text-heading fw-medium hover-text-main-four-600"} href={"mailto:info@Wowtheme.com"}>
                          info@Wowtheme.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={"fw-medium tw-mb-3 tw-text-base"}>
                      Follow us:
                    </h3>
                    <ul className={"footer-social d-flex align-items-center tw-gap-1"}>
                      <li>
                        <a href={"https://www.facebook.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle bg-main-four-600 hover-bg-main-four-600 hover-text-heading"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a href={"https://www.twitter.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle bg-main-four-600 hover-bg-main-four-600 hover-text-heading"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a href={"https://www.linkedin.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle bg-main-four-600 hover-bg-main-four-600 hover-text-heading"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a href={"https://www.pinterest.com"} className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center text-white rounded-circle bg-main-four-600 hover-bg-main-four-600 hover-text-heading"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"contact-form contact-ip-form blog-details-contact-form"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h4 className={"text-heading tw-text-9 fw-normal tw-mb-8 tw-pe-4 "}>
                    Get In Touch
                  </h4>
                  <div>
                    <form action={"#"}>
                      <div className={"row"}>
                        <div className={"col-xl-6"}>
                          <div className={"position-relative tw-mb-4"}>
                            <input type={"text"} className={"form-control focus-outline-0 bg text-heading tw-py-4 tw-ps-5 tw-pe-15 w-100 tw-rounded-md focus-border-main-eight-600"} placeholder={"Name"} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"position-relative tw-mb-4"}>
                            <input type={"email"} className={"form-control focus-outline-0 bg text-heading tw-py-4 tw-ps-5 tw-pe-15 w-100 tw-rounded-md focus-border-main-eight-600"} placeholder={"Email"} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"position-relative tw-mb-4"}>
                            <input type={"text"} className={"form-control focus-outline-0 bg text-heading tw-py-4 tw-ps-5 tw-pe-15 w-100 tw-rounded-md focus-border-main-eight-600"} placeholder={"Phone"} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"position-relative tw-mb-4"}>
                            <input type={"text"} className={"form-control focus-outline-0 bg text-heading tw-py-4 tw-ps-5 tw-pe-15 w-100 tw-rounded-md focus-border-main-eight-600"} placeholder={"Select Subject"} />
                          </div>
                        </div>
                        <div className={"col-xl-12"}>
                          <div className={"position-relative tw-mb-14"}>
                            <textarea className={"form-control focus-outline-0 bg text-heading tw-py-4 tw-ps-4 w-100 tw-h-148-px tw-rounded-md focus-border-main-eight-600"} placeholder={"Enter Your Message here"}></textarea>
                          </div>
                        </div>
                        <div className={"col-xl-12"}>
                          <div className={""}>
                            <button className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-four-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                  <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                    Post Comment
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
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
