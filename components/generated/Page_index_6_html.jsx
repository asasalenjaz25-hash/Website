// Ported from index-6.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_index_6_html() {
  return (
    <>
      <BodyClass value={"home-one-bg  overflow-x-hidden"} />
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
        <section className={"banner-two-area position-relative z-1"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-6 col-lg-8 col-md-11 col-sm-11"}>
                <div className={"banner-two-left"}>
                  <div>
                    <div className={"banner-two-subtitle font-heading fw-semibold text-main-eight-600 tw-text-lg text-uppercase tw-mb-2"}>
                      We Clean, You Shine
                    </div>
                    <h1 className={"banner-two-title tw-text-118 tw-char-animation tw-mb-9"}>
                      Best Cleaning Experience From Top Service
                    </h1>
                  </div>
                  <div className={"banner-two-button"}>
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
          <div>
            <div className={"banner-two-thumb position-absolute end-0"}>
              <img src={"/assets/images/thumbs/banner-two-thumb.png"} alt={"thumb"} />
            </div>
            <img className={"banner-two-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/banner-two-shape1.png"} alt={"shape"} />
            <img className={"banner-two-shape-2 position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/banner-two-shape2.png"} alt={"shape"} />
            <img className={"banner-two-shape-3 position-absolute translate-middle-x z-n1"} src={"/assets/images/shapes/banner-two-shape3.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"feature-two-area pb-120 position-relative z-2"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-two-wrapper text-center bg-white tw-rounded-xl tw-pt-10 tw-pb-8 tw-px-10 tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"feature-two-icon tw-mb-5"}>
                    <span className={"tw-w-19 tw-h-19 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle position-relative z-1"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/feature-two-icon1.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div>
                    <h2 className={"tw-text-605 tw-mb-4"}>
                      <a href={"javascript:void(0)"}>
                        Support 24/7
                      </a>
                    </h2>
                    <p>
                      There are cleaning passages this marke available areas conservation.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-two-wrapper text-center bg-white tw-rounded-xl tw-pt-10 tw-pb-8 tw-px-10 tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"feature-two-icon tw-mb-5"}>
                    <span className={"tw-w-19 tw-h-19 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle position-relative z-1"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/feature-two-icon2.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div>
                    <h2 className={"tw-text-605 tw-mb-4"}>
                      <a href={"javascript:void(0)"}>
                        Payment Secure
                      </a>
                    </h2>
                    <p>
                      There are cleaning passages this marke available areas conservation.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-two-wrapper text-center bg-white tw-rounded-xl tw-pt-10 tw-pb-8 tw-px-10 tw-mb-7 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"feature-two-icon tw-mb-5"}>
                    <span className={"tw-w-19 tw-h-19 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle position-relative z-1"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/feature-two-icon3.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div>
                    <h2 className={"tw-text-605 tw-mb-4"}>
                      <a href={"javascript:void(0)"}>
                        Top Cleaning Services
                      </a>
                    </h2>
                    <p>
                      There are cleaning passages this marke available areas conservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"about-two-area pb-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row justify-content-between"}>
              <div className={"col-xl-2"}>
                <div className={"section-wrapper tw-mb-6"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    who we are
                  </div>
                </div>
              </div>
              <div className={"col-xl-8"}>
                <div className={"tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"about-two-title text-invert text-capitalize fw-medium tw-mb-13"}>
                    We believe that a clean space is a happy space. Founded in 1897, our mission is to make homes & businesses
                    <br />
                    sparkle while...
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-6 col-lg-9 col-md-10"}>
                <div className={"about-two-thumb one"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl tw-animation-img-left"} src={"/assets/images/thumbs/about-two-thumb1.jpg"} alt={"thumb"} />
                </div>
              </div>
              <div className={"col-xl-6 col-lg-12 col-md-12"}>
                <div className={"tw-mb-5"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"row align-items-end"}>
                    <div className={"col-xl-6 col-lg-6 col-md-6"}>
                      <div className={"bg-main-eight-600 tw-rounded-xl tw-mw-56 w-100 tw-px-10 tw-py-13"}>
                        <h2 className={"tw-text-133 fw-medium text-white mb-0 lh-1"}>
                          <span className={"font-heading text-white odometer"} data-count={"50"}></span>
                          k+
                        </h2>
                        <p className={"text-white"}>
                          Client’s Serviced
                        </p>
                      </div>
                    </div>
                    <div className={"col-xl-6 col-lg-6 col-md-6"}>
                      <div className={"about-two-thumb two"}>
                        <img className={"tw-rounded-xl tw-animation-img-right"} src={"/assets/images/thumbs/about-two-thumb2.jpg"} alt={"thumb"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"tw-me-20"}>
                  <div className={"tw-mb-6"}>
                    <p>
                      At Shiny Clean, we believe a clean space is a happy space. with years 
                            of experience in residential and commercial cleaning, our mission is to 
                            deliver top-quality services that health...
                    </p>
                  </div>
                  <div>
                    <a href={"/about"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            Book Now
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
                Office Cleaning
              </h3>
            </div>
            <img className={"about-two-bg-shape position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/about-two-bg-shape.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"service-two-area py-120 position-relative z-1 @@serviceipClass"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4"}>
                <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"tw-mb-7"}>
                    <ul className={"service-two-nav-tabs nav nav-tabs"} id={"myTab"} role={"tablist"}>
                      <li className={"service-two-nav-item nav-item tw-mb-6 w-100 animation-item"} role={"presentation"}>
                        <button className={"service-two-nav-link nav-link bg-white tw-rounded-xl w-100 active d-inline-flex justify-content-start align-items-center tw-gap-6"} id={"home-tab"} data-bs-toggle={"tab"} data-bs-target={"#home"} type={"button"} role={"tab"} aria-controls={"home"} aria-selected={"true"}>
                          <span className={"service-two-left-icon"}>
                            <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 tw-rounded-lg"}>
                              <img className={"animate__wobble"} src={"/assets/images/icons/service-two-icon1.svg"} alt={"icon"} />
                            </span>
                          </span>
                          <span className={"text-start"}>
                            <span className={"service-two-left-title tw-text-505 fw-semibold text-heading text-capitalize tw-mb-2"}>
                              Deep Cleaning
                            </span>
                            <span className={"service-two-left-paragraph text-body"}>
                              At Shiny Clean, we believe
                            </span>
                          </span>
                        </button>
                      </li>
                      <li className={"service-two-nav-item nav-item tw-mb-6 w-100 animation-item"} role={"presentation"}>
                        <button className={"service-two-nav-link nav-link bg-white tw-rounded-xl w-100 d-inline-flex justify-content-start align-items-center tw-gap-6"} id={"profile-tab"} data-bs-toggle={"tab"} data-bs-target={"#profile"} type={"button"} role={"tab"} aria-controls={"profile"} aria-selected={"false"}>
                          <span className={"service-two-left-icon"}>
                            <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 tw-rounded-lg"}>
                              <img className={"animate__wobble"} src={"/assets/images/icons/service-two-icon2.svg"} alt={"icon"} />
                            </span>
                          </span>
                          <span className={"text-start"}>
                            <span className={"service-two-left-title tw-text-505 fw-semibold text-heading text-capitalize tw-mb-2"}>
                              Office Cleaning
                            </span>
                            <span className={"service-two-left-paragraph text-body"}>
                              At Shiny Clean, we believe
                            </span>
                          </span>
                        </button>
                      </li>
                      <li className={"service-two-nav-item nav-item tw-mb-6 w-100 animation-item"} role={"presentation"}>
                        <button className={"service-two-nav-link nav-link bg-white tw-rounded-xl w-100 d-inline-flex justify-content-start align-items-center tw-gap-6"} id={"contact-tab"} data-bs-toggle={"tab"} data-bs-target={"#contact"} type={"button"} role={"tab"} aria-controls={"contact"} aria-selected={"false"}>
                          <span className={"service-two-left-icon"}>
                            <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 tw-rounded-lg"}>
                              <img className={"animate__wobble"} src={"/assets/images/icons/service-two-icon3.svg"} alt={"icon"} />
                            </span>
                          </span>
                          <span className={"text-start"}>
                            <span className={"service-two-left-title tw-text-505 fw-semibold text-heading text-capitalize tw-mb-2"}>
                              Move In/Out Cleaning
                            </span>
                            <span className={"service-two-left-paragraph text-body"}>
                              At Shiny Clean, we believe
                            </span>
                          </span>
                        </button>
                      </li>
                      <li className={"service-two-nav-item nav-item tw-mb-6 w-100 animation-item"} role={"presentation"}>
                        <button className={"service-two-nav-link nav-link bg-white tw-rounded-xl w-100 d-inline-flex justify-content-start align-items-center tw-gap-6"} id={"house-tab"} data-bs-toggle={"tab"} data-bs-target={"#house"} type={"button"} role={"tab"} aria-controls={"house"} aria-selected={"false"}>
                          <span className={"service-two-left-icon"}>
                            <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 tw-rounded-lg"}>
                              <img className={"animate__wobble"} src={"/assets/images/icons/service-two-icon4.svg"} alt={"icon"} />
                            </span>
                          </span>
                          <span className={"text-start"}>
                            <span className={"service-two-left-title tw-text-505 fw-semibold text-heading text-capitalize tw-mb-2"}>
                              House Cleaning
                            </span>
                            <span className={"service-two-left-paragraph text-body"}>
                              At Shiny Clean, we believe
                            </span>
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a href={"/service-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            More Service
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
                      Services
                    </div>
                    <h2 className={"section-title text-heading tw-text-14 fw-medium tw-char-animation tw-mb-6"}>
                      Where Cleanliness meets Care Services
                    </h2>
                    <p>
                      At Shiny Clean, we believe a clean space is a happy space. with years of experience in residential and commercial cleaning, our mission is to deliver top-quality services
                    </p>
                  </div>
                  <div className={""} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"tab-content"} id={"myTabContent"}>
                      <div className={"tab-pane fade show active"} id={"home"} role={"tabpanel"} aria-labelledby={"home-tab"}>
                        <div>
                          <div className={"service-two-thumbs position-relative z-1"}>
                            <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/service-two-thumb.jpg"} alt={"thumb"} />
                            <div className={"service-two-content position-absolute"}>
                              <h3 className={"tw-text-122 text-white tw-mb-3"}>
                                <a href={"/service-details"}>
                                  Deep Cleaning
                                </a>
                              </h3>
                              <p className={"text-white tw-mb-6"}>
                                At Shiny Clean, we believe a clean space is a happy space. with years of experience i residential and commercial cleaning, our mission is to deliver top-quality services
                              </p>
                              <div>
                                <a className={"fw-semibold text-white d-inline-flex align-items-center tw-gap-2 hover-text-main-eight-600"} href={"javascript:void(0)"}>
                                  Read More
                                  <span>
                                    <i className={"ph-bold ph-arrow-up-right"}></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"tab-pane fade"} id={"profile"} role={"tabpanel"} aria-labelledby={"profile-tab"}>
                        <div>
                          <div className={"service-two-thumbs position-relative z-1"}>
                            <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/service-two-thumb2.jpg"} alt={"thumb"} />
                            <div className={"service-two-content position-absolute"}>
                              <h3 className={"tw-text-122 text-white tw-mb-3"}>
                                <a href={"/service-details"}>
                                  Office Cleaning
                                </a>
                              </h3>
                              <p className={"text-white tw-mb-6"}>
                                At Shiny Clean, we believe a clean space is a happy space. with years of experience i residential and commercial cleaning, our mission is to deliver top-quality services
                              </p>
                              <div>
                                <a className={"fw-semibold text-white d-inline-flex align-items-center tw-gap-2 hover-text-main-eight-600"} href={"javascript:void(0)"}>
                                  Read More
                                  <span>
                                    <i className={"ph-bold ph-arrow-up-right"}></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"tab-pane fade"} id={"contact"} role={"tabpanel"} aria-labelledby={"contact-tab"}>
                        <div>
                          <div className={"service-two-thumbs position-relative z-1"}>
                            <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/service-two-thumb3.jpg"} alt={"thumb"} />
                            <div className={"service-two-content position-absolute"}>
                              <h3 className={"tw-text-122 text-white tw-mb-3"}>
                                <a href={"/service-details"}>
                                  Move In/Out Cleaning
                                </a>
                              </h3>
                              <p className={"text-white tw-mb-6"}>
                                At Shiny Clean, we believe a clean space is a happy space. with years of experience i residential and commercial cleaning, our mission is to deliver top-quality services
                              </p>
                              <div>
                                <a className={"fw-semibold text-white d-inline-flex align-items-center tw-gap-2 hover-text-main-eight-600"} href={"javascript:void(0)"}>
                                  Read More
                                  <span>
                                    <i className={"ph-bold ph-arrow-up-right"}></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"tab-pane fade"} id={"house"} role={"tabpanel"} aria-labelledby={"house-tab"}>
                        <div>
                          <div className={"service-two-thumbs position-relative z-1"}>
                            <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/service-two-thumb4.jpg"} alt={"thumb"} />
                            <div className={"service-two-content position-absolute"}>
                              <h3 className={"tw-text-122 text-white tw-mb-3"}>
                                <a href={"/service-details"}>
                                  House Cleaning
                                </a>
                              </h3>
                              <p className={"text-white tw-mb-6"}>
                                At Shiny Clean, we believe a clean space is a happy space. with years of experience i residential and commercial cleaning, our mission is to deliver top-quality services
                              </p>
                              <div>
                                <a className={"fw-semibold text-white d-inline-flex align-items-center tw-gap-2 hover-text-main-eight-600"} href={"javascript:void(0)"}>
                                  Read More
                                  <span>
                                    <i className={"ph-bold ph-arrow-up-right"}></i>
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
            </div>
          </div>
          <div>
            <img className={"service-two-hand position-absolute end-0 z-n1"} src={"/assets/images/shapes/service-two-hand.png"} alt={"hand"} />
          </div>
        </section>
        <section className={"choose-us-two-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-6 col-lg-9"}>
                <div className={"choose-us-two-thumb position-relative z-1 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"choose-us-two-thumb-1 text-end position-relative z-2"}>
                    <img src={"/assets/images/thumbs/choose-us-two-thumb1.jpg"} alt={"thumb"} />
                  </div>
                  <div className={"choose-us-two-thumb-2"}>
                    <img src={"/assets/images/thumbs/choose-us-two-thumb2.jpg"} alt={"thumb"} />
                  </div>
                  <div>
                    <img className={"choose-us-two-thumb-shape-1 tw-rounded-xl position-absolute z-n1"} src={"/assets/images/shapes/choose-us-two-thumb-shape1.jpg"} alt={"shape"} />
                    <img className={"choose-us-two-thumb-shape-2 tw-rounded-xl position-absolute z-n1"} src={"/assets/images/shapes/choose-us-two-thumb-shape2.png"} alt={"shape"} />
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
                      Clean Spaces Matter Most –We’re Experts at Making Them
                    </h2>
                    <p>
                      At Servicepro, we are dedicated to providing top-notch service with attention to every detail. Our team of trained professionals takes great pride in their work, going above and beyond to exceed your expectations. whether
                    </p>
                  </div>
                  <div className={"choose-us-two-list tw-mb-43"}>
                    <ul>
                      <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                        <span className={"text-main-eight-600 tw-text-xl"}>
                          <i className={"ph ph-check-circle"}></i>
                        </span>
                        Trusted & Vetted Cleaners
                      </li>
                      <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                        <span className={"text-main-eight-600 tw-text-xl"}>
                          <i className={"ph ph-check-circle"}></i>
                        </span>
                        Eco-Friendly Products
                      </li>
                      <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                        <span className={"text-main-eight-600 tw-text-xl"}>
                          <i className={"ph ph-check-circle"}></i>
                        </span>
                        Satisfaction Guaranteed
                      </li>
                      <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                        <span className={"text-main-eight-600 tw-text-xl"}>
                          <i className={"ph ph-check-circle"}></i>
                        </span>
                        Affordable Pricing
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a href={"javascript:void(0)"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            More Service
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
            <img className={"choose-us-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/choose-us-two-shape1.png"} alt={"shapes"} />
            <img className={"choose-us-two-shape-2 position-absolute bottom-0 start-0 z-n1"} src={"/assets/images/shapes/choose-us-two-shape2.png"} alt={"shapes"} />
            <img className={"choose-us-two-shape-3 position-absolute end-0 z-n1"} src={"/assets/images/shapes/choose-us-two-shape3.png"} alt={"shapes"} />
          </div>
        </section>
        <section className={"work-two-area pt-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-9"}>
                <div className={"section-wrapper tw-mb-30"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                    why choose us
                  </div>
                  <h2 className={"about-two-title text-invert text-capitalize fw-medium tw-mb-13"}>
                    We’re fully committed to providing expert cleaning explore how our service actually works today.
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"work-two-wrapper"}>
                  <div className={"work-two-item"}>
                    <div className={"work-two-thumb"}>
                      <img src={"/assets/images/thumbs/work-two-thumb1.png"} alt={"thumb"} />
                      <div className={"work-two-icon"}>
                        <span>
                          01
                        </span>
                      </div>
                      <div className={"work-two-thumb-border"}></div>
                    </div>
                    <div className={"work-two-content text-center"}>
                      <h3 className={"work-two-title tw-text-7 fw-medium tw-mb-3"}>
                        Book Your Service
                      </h3>
                      <p>
                        Schedule your cleaning online or
                        <br />
                        by phone in minutes.
                      </p>
                    </div>
                  </div>
                  <div className={"work-two-item"}>
                    <div className={"work-two-thumb"}>
                      <img src={"/assets/images/thumbs/work-two-thumb2.png"} alt={"thumb"} />
                      <div className={"work-two-icon"}>
                        <span>
                          02
                        </span>
                      </div>
                      <div className={"work-two-thumb-border"}></div>
                    </div>
                    <div className={"work-two-content text-center"}>
                      <h3 className={"work-two-title tw-text-7 fw-medium tw-mb-3"}>
                        Get Confirmation
                      </h3>
                      <p>
                        Schedule your cleaning online or
                        <br />
                        by phone in minutes.
                      </p>
                    </div>
                  </div>
                  <div className={"work-two-item"}>
                    <div className={"work-two-thumb"}>
                      <img src={"/assets/images/thumbs/work-two-thumb3.png"} alt={"thumb"} />
                      <div className={"work-two-icon"}>
                        <span>
                          03
                        </span>
                      </div>
                      <div className={"work-two-thumb-border"}></div>
                    </div>
                    <div className={"work-two-content text-center"}>
                      <h3 className={"work-two-title tw-text-7 fw-medium tw-mb-3"}>
                        Enjoy Your Clean
                      </h3>
                      <p>
                        Schedule your cleaning online or
                        <br />
                        by phone in minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"work-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/work-two-shape1.png"} alt={"shape"} />
            <img className={"work-two-shape-2 position-absolute bottom-0 z-n1"} src={"/assets/images/shapes/work-two-shape2.png"} alt={"shape"} />
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
                    Clean Finish, Happy Homeowners Every Time
                  </h2>
                </div>
              </div>
              <div className={"col-xl-5 col-lg-8"}>
                <div className={"before-after-list"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <ul>
                    <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                      <span className={"text-main-eight-600 tw-text-xl"}>
                        <i className={"ph ph-check-circle"}></i>
                      </span>
                      Trusted & Vetted
                    </li>
                    <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                      <span className={"text-main-eight-600 tw-text-xl"}>
                        <i className={"ph ph-check-circle"}></i>
                      </span>
                      Eco-Friendly Products
                    </li>
                    <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                      <span className={"text-main-eight-600 tw-text-xl"}>
                        <i className={"ph ph-check-circle"}></i>
                      </span>
                      Satisfaction
                    </li>
                    <li className={"tw-text-505 fw-medium text-heading float-start w-50 tw-mb-4"}>
                      <span className={"text-main-eight-600 tw-text-xl"}>
                        <i className={"ph ph-check-circle"}></i>
                      </span>
                      Affordable Pricing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-lg-12"}>
                <div className={"before-after-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img src={"/assets/images/thumbs/before-after-thumb1.jpg"} alt={"thumb"} />
                  <img src={"/assets/images/thumbs/before-after-thumb2.jpg"} alt={"thumb"} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/before-after-shape1.png"} alt={"shape"} />
            <img className={"before-after-shape-2 position-absolute end-0 z-n1"} src={"/assets/images/shapes/before-after-shape2.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"counter-area pb-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-12"}>
                <div className={"counter-two-heading text-center tw-mb-12 position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"tw-text-505 font-heading fw-normal bg-white tw-px-8 d-inline-block position-relative z-2"}>
                    Quality service is our promise to every valued customer.
                  </div>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"counter-wrapper counter-two-wrapper d-flex align-items-center justify-content-between"}>
                  <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div>
                      <h2 className={"counter-title tw-text-23 fw-medium font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"35"}></span>
                        +
                      </h2>
                      <p className={"counter-paragraph tw-py-2 tw-text-505 fw-medium text-heading bg-white"}>
                        Years of Experience
                      </p>
                    </div>
                  </div>
                  <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div>
                      <h2 className={"counter-title tw-text-23 fw-medium font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"75"}></span>
                        k
                      </h2>
                      <p className={"counter-paragraph tw-py-2 tw-text-505 fw-medium text-heading bg-white"}>
                        Satisfied Clients
                      </p>
                    </div>
                  </div>
                  <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div>
                      <h2 className={"counter-title tw-text-23 fw-medium font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"135"}></span>
                        +
                      </h2>
                      <p className={"counter-paragraph tw-py-2 tw-text-505 fw-medium text-heading bg-white"}>
                        Team Members
                      </p>
                    </div>
                  </div>
                  <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                    <div>
                      <h2 className={"counter-title tw-text-23 fw-medium font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"35"}></span>
                        k
                      </h2>
                      <p className={"counter-paragraph tw-py-2 tw-text-505 fw-medium text-heading bg-white"}>
                        Customer Retention Rate
                      </p>
                    </div>
                  </div>
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
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className={"faq-two-left-contact bg-white tw-rounded-xl tw-pt-12 tw-pb-15 tw-ps-10 tw-pe-20"}>
                    <div>
                      <h3 className={"tw-text-7 fw-normal tw-mb-10"}>
                        Looking For The Cleaning Service In New York? Contact Us Now!
                      </h3>
                    </div>
                    <div>
                      <a className={"bg-main-eight-600 text-white tw-rounded-4xl fw-bold tw-py-2 tw-ps-2 tw-pe-6"} href={"tel:+1123456-7890"}>
                        <span className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-heading"}>
                          <i className={"ph ph-phone-call"}></i>
                        </span>
                        + 1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7"}>
                <div className={"faq-two-wrapper tw-ms-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"accordion"} id={"general_faqaccordion"}>
                    <div className={"accordion-item faq-two-accordion-item"}>
                      <h2 className={"accordion-header"} id={"order_one"}>
                        <button className={"accordion-button faq-two-accordion-button tw-text-lg"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#order__collapse_one"} aria-expanded={"true"} aria-controls={"order__collapse_one"}>
                          1. What types of cleaning services do you offer?
                        </button>
                      </h2>
                      <div id={"order__collapse_one"} className={"accordion-collapse collapse show"} role={"region"} aria-labelledby={"order_one"} data-bs-parent={"#general_faqaccordion"}>
                        <div className={"accordion-body faq-two-accordion-body"}>
                          <p className={"tw-text-base fw-medium"}>
                            Cleaning Service provides a comprehensive and thorough process that goes beyond regular upkeep...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"accordion-item faq-two-accordion-item"}>
                      <h2 className={"accordion-header"} id={"order_two"}>
                        <button className={"accordion-button collapsed faq-two-accordion-button tw-text-lg"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#order__collapse_two"} aria-expanded={"false"} aria-controls={"order__collapse_two"}>
                          2. Do I need to be home during the cleaning?
                        </button>
                      </h2>
                      <div id={"order__collapse_two"} className={"accordion-collapse collapse"} role={"region"} aria-labelledby={"order_two"} data-bs-parent={"#general_faqaccordion"}>
                        <div className={"accordion-body faq-two-accordion-body"}>
                          <p className={"tw-text-base fw-medium"}>
                            Cleaning Service provides a comprehensive and thorough process that goes beyond regular upkeep...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"accordion-item faq-two-accordion-item"}>
                      <h2 className={"accordion-header"} id={"order_three"}>
                        <button className={"accordion-button collapsed faq-two-accordion-button tw-text-lg"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#order__collapse_three"} aria-expanded={"false"} aria-controls={"order__collapse_three"}>
                          3. What cleaning products do you use?
                        </button>
                      </h2>
                      <div id={"order__collapse_three"} className={"accordion-collapse collapse"} role={"region"} aria-labelledby={"order_three"} data-bs-parent={"#general_faqaccordion"}>
                        <div className={"accordion-body faq-two-accordion-body"}>
                          <p className={"tw-text-base fw-medium"}>
                            Cleaning Service provides a comprehensive and thorough process that goes beyond regular upkeep...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"accordion-item faq-two-accordion-item"}>
                      <h2 className={"accordion-header"} id={"order_four"}>
                        <button className={"accordion-button collapsed faq-two-accordion-button tw-text-lg"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#order__collapse_four"} aria-expanded={"false"} aria-controls={"order__collapse_four"}>
                          4. How do I book a cleaning appointment?
                        </button>
                      </h2>
                      <div id={"order__collapse_four"} className={"accordion-collapse collapse"} role={"region"} aria-labelledby={"order_four"} data-bs-parent={"#general_faqaccordion"}>
                        <div className={"accordion-body faq-two-accordion-body"}>
                          <p className={"tw-text-base fw-medium"}>
                            Cleaning Service provides a comprehensive and thorough process that goes beyond regular upkeep...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"accordion-item faq-two-accordion-item"}>
                      <h2 className={"accordion-header"} id={"order_five"}>
                        <button className={"accordion-button collapsed faq-two-accordion-button tw-text-lg"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#order__collapse_five"} aria-expanded={"false"} aria-controls={"order__collapse_five"}>
                          5. What time do you offer cleaning services?
                        </button>
                      </h2>
                      <div id={"order__collapse_five"} className={"accordion-collapse collapse"} role={"region"} aria-labelledby={"order_five"} data-bs-parent={"#general_faqaccordion"}>
                        <div className={"accordion-body faq-two-accordion-body"}>
                          <p className={"tw-text-base fw-medium"}>
                            Cleaning Service provides a comprehensive and thorough process that goes beyond regular upkeep...
                          </p>
                        </div>
                      </div>
                    </div>
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
                    Testimonial
                  </div>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Empowering Thousands of Users and Enterprises
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"testimonial-two-wrapper quotes page-width position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                <div className={"testimonial-two-item one quotes-slide slideshow__slide--active"} data-slider-slide-index={"6"} aria-hidden={"false"} tabIndex={"-1"}>
                  <div className={"tw-mb-3"}>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={"text-heading"}>
                      Amazing and highly efficient, they met all my 
                            expectations & more. They were there on time 
                            & left my duplex in pristine conditio. thank you, 
                            cleaning services. Servicepro
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={"/assets/images/thumbs/testimonial-seven-img1.png"} alt={"img"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-base"}>
                        Josephina Alex
                      </h3>
                      <p>
                        Team Leader
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"testimonial-two-item two bg-black quotes-slide slideshow__slide--active"} data-slider-slide-index={"3"} aria-hidden={"false"} tabIndex={"-1"}>
                  <div className={"tw-mb-3"}>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={"text-white"}>
                      Amazing and highly efficient, they met all my 
                            expectations & more. They were there on time 
                            & left my duplex in pristine conditio. thank you, 
                            cleaning services. Servicepro
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={"/assets/images/thumbs/testimonial-seven-img2.png"} alt={"img"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"text-white tw-text-base"}>
                        Denis Mtokoma
                      </h3>
                      <p className={"text-white"}>
                        Team Leader
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"testimonial-two-item three quotes-slide slideshow__slide--active"} data-slider-slide-index={"2"} aria-hidden={"false"} tabIndex={"-1"}>
                  <div className={"tw-mb-3"}>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={"text-heading"}>
                      Amazing and highly efficient, they met all my 
                            expectations & more. They were there on time 
                            & left my duplex in pristine conditio. thank you, 
                            cleaning services. Servicepro
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={"/assets/images/thumbs/testimonial-seven-img3.png"} alt={"img"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-base"}>
                        Daisey Anderson
                      </h3>
                      <p>
                        Team Leader
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"testimonial-two-item four quotes-slide slideshow__slide--active"} data-slider-slide-index={"4"} aria-hidden={"false"} tabIndex={"-1"}>
                  <div className={"tw-mb-3"}>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={"text-heading"}>
                      Amazing and highly efficient, they met all my 
                            expectations & more. They were there on time 
                            & left my duplex in pristine conditio. thank you, 
                            cleaning services. Servicepro
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={"/assets/images/thumbs/testimonial-seven-img4.png"} alt={"img"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-base"}>
                        Marko Mkepule
                      </h3>
                      <p>
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"testimonial-two-item five bg-main-eight-600 quotes-slide slideshow__slide--active"} data-slider-slide-index={"1"} aria-hidden={"false"} tabIndex={"-1"}>
                  <div className={"tw-mb-3"}>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={"text-heading text-white"}>
                      Amazing and highly efficient, they met all my 
                            expectations & more. They were there on time 
                            & left my duplex in pristine conditio. thank you, 
                            cleaning services. Servicepro
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={"/assets/images/thumbs/testimonial-seven-img5.png"} alt={"img"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"text-white tw-text-base"}>
                        Daisey Anderson
                      </h3>
                      <p className={"text-white"}>
                        Team Leader
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"testimonial-two-item six quotes-slide slideshow__slide--active"} data-slider-slide-index={"5"} aria-hidden={"false"} tabIndex={"-1"}>
                  <div className={"tw-mb-3"}>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                    <i className={"text-main-two-600 ph ph-star"}></i>
                  </div>
                  <div className={"tw-mb-3"}>
                    <p className={"text-heading"}>
                      Amazing and highly efficient, they met all my 
                            expectations & more. They were there on time 
                            & left my duplex in pristine conditio. thank you, 
                            cleaning services. Servicepro
                    </p>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-4"}>
                    <div className={"testimonial-three-img"}>
                      <span className={"tw-w-16 tw-h-16"}>
                        <img src={"/assets/images/thumbs/testimonial-seven-img6.png"} alt={"img"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-base"}>
                        Goreth Chunga
                      </h3>
                      <p>
                        Team Leader
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"testimonial-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/testimonial-two-shape1.png"} alt={"shape"} />
            <img className={"testimonial-two-shape-2 position-absolute start-0 z-n1"} src={"/assets/images/shapes/testimonial-two-shape2.png"} alt={"shape"} />
            <img className={"testimonial-two-shape-3 position-absolute z-n1"} src={"/assets/images/shapes/testimonial-two-shape3.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"contact-two-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6"}>
                <div className={"contact-two-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"tw-mb-6"}>
                    <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/contact-two-thumb.jpg"} alt={"thumb"} />
                  </div>
                  <div className={"contact-two-info bg-white tw-rounded-lg tw-py-5 tw-ps-10 tw-pe-6"}>
                    <div>
                      <h4 className={"tw-text-2xl fw-medium text-main-eight-600 tw-mb-6"}>
                        100% Satisfaction Guarantee
                      </h4>
                      <p className={"fw-medium tw-w-320-px"}>
                        Your satisfaction is our top priority! We 
                                proudly offer a 100% Happiness 
                                Guarantee on all our cleanings.
                      </p>
                    </div>
                    <div className={"contact-two-info-shape"}>
                      <img src={"/assets/images/shapes/contact-two-info-shape.png"} alt={"shape"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6"}>
                <div className={"contact-two-wrapper bg-white tw-py-15 tw-ps-10 tw-pe-5 tw-rounded-lg"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-wrapper tw-mb-10"}>
                    <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                      get in touch
                    </div>
                    <h2 className={"section-title text-heading tw-text-12 fw-semibold tw-char-animation tw-mb-6"}>
                      Bring Back the 
                            Sparkle to Your Home
                    </h2>
                  </div>
                  <div>
                    <form action={"#"}>
                      <div className={"row"}>
                        <div className={"col-xl-6 col-lg-6 col-md-6"}>
                          <div className={"contact-two-form tw-mb-4"}>
                            <label className={"tw-mb-3"}>
                              Your Name*
                            </label>
                            <div className={"position-relative z-1"}>
                              <input type={"text"} className={"form-control focus-outline-0 bg-transparent text-heading tw-placeholder-text-heading tw-py-3 tw-ps-5 tw-pe-15 w-100 tw-rounded-md focus-border-black"} placeholder={"Your Name*"} />
                              <span className={"position-absolute top-50 translate-middle-y end-0 tw-me-4 tw-text-xl"}>
                                <i className={"ph ph-user"}></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={"col-xl-6 col-lg-6 col-md-6"}>
                          <div className={"contact-two-form tw-mb-4"}>
                            <label className={"tw-mb-3"}>
                              Your Email*
                            </label>
                            <div className={"position-relative z-1"}>
                              <input type={"email"} className={"form-control focus-outline-0 bg-transparent text-heading tw-placeholder-text-heading tw-py-3 tw-ps-5 tw-pe-15 w-100 tw-rounded-md focus-border-black"} placeholder={"Your Email*"} />
                              <span className={"position-absolute top-50 translate-middle-y end-0 tw-me-4 tw-text-xl"}>
                                <i className={"ph ph-envelope"}></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={"col-xl-12"}>
                          <div className={"contact-two-form position-relative tw-mb-4"}>
                            <label className={"tw-mb-3"}>
                              Service
                            </label>
                            <div className={"nice-select tw-mb-3 tw-text-base tw-px-5 tw-h-122 d-inline-flex align-items-center font-body text-body bg-white tw-rounded-lg w-100"}>
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
                          <div className={"contact-two-form tw-mb-4"}>
                            <label className={"tw-mb-3"}>
                              Date
                            </label>
                            <div className={"position-relative z-1"}>
                              <input type={"date"} className={"form-control focus-outline-0 bg-transparent text-heading tw-placeholder-text-heading tw-py-3 tw-ps-5 w-100 tw-rounded-md focus-border-black"} name={"birthday"} />
                            </div>
                          </div>
                        </div>
                        <div className={"col-xl-6 col-lg-6 col-md-6"}>
                          <div className={"contact-two-form tw-mb-4"}>
                            <label className={"tw-mb-3"}>
                              Time
                            </label>
                            <div className={"position-relative z-1"}>
                              <input type={"time"} id={"appt"} name={"appt"} className={"form-control focus-outline-0 bg-transparent text-heading tw-placeholder-text-heading tw-py-3 tw-ps-5 w-100 tw-rounded-md focus-border-black"} />
                            </div>
                          </div>
                        </div>
                        <div className={"col-xl-12"}>
                          <div className={"tw-mt-8"}>
                            <button className={"w-100 tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                              <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                  <span className={"overflow-hidden position-relative d-inline-flex"}>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                    <i className={"ph-bold ph-arrow-right"}></i>
                                  </span>
                                </span>
                                <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
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
        </section>
        <section className={"cta-two-area position-relative z-1 overflow-hidden"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-8"}>
                <div className={"text-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-wrapper text-center tw-mb-10"}>
                    <div className={"section-subtitle font-heading tw-text-lg fw-semibold text-uppercase text-main-eight-600 tw-mb-3 ms-0"}>
                      Book an appointment
                    </div>
                    <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                      We professionally aim to offer excellent cleaning service for every client.
                    </h2>
                    <p className={"fw-medium tw-w-680-px m-auto"}>
                      At Servicepro, our commitment to providing exceptional cleaning services is unwavering. With a team of highly skilled professionals,
                    </p>
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
                            Book Appointment
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
            <img className={"cta-two-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape1.png"} alt={"shape"} />
            <img className={"cta-two-shape-2 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape2.png"} alt={"shape"} />
            <img className={"cta-two-shape-3 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape3.png"} alt={"shape"} />
            <img className={"cta-two-shape-4 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape4.png"} alt={"shape"} />
            <img className={"cta-two-shape-5 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape5.png"} alt={"shape"} />
            <img className={"cta-two-shape-6 position-absolute z-n1"} src={"/assets/images/shapes/cta-two-shape6.png"} alt={"shape"} />
            <img className={"cta-two-shape-7 position-absolute top-50 translate-middle-y start-0 z-n1"} src={"/assets/images/shapes/cta-two-shape7.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"maquee-area maquee-two-area tw-pb-25 overflow-hidden position-relative z-2"}>
          <div className={"maquee-slider"}>
            <div className={"swiper maquee-active d-flex align-items-center"}>
              <div className={"swiper-wrapper maquee-transition"}>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
                <div className={"maquee-box w-auto swiper-slide"}>
                  <div className={"maquee-content"}>
                    <h2 className={"maquee-title maquee-two-title text-capitalize fw-semibold lh-1"}>
                      Bring Back the Sparkle to Your Home
                    </h2>
                  </div>
                </div>
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
                    News & Blogs
                  </div>
                </div>
              </div>
              <div className={"col-xl-7"}>
                <div className={"section-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <h2 className={"section-title text-heading tw-text-14 fw-semibold tw-char-animation tw-mb-6"}>
                    Cleaning Service Get Latest News & Updates
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-4"}>
                <ul className={"nav nav-tabs blog-two-nav-tabs d-flex flex-column sticky-item"} id={"myTab-two"} role={"tablist"}>
                  <li className={"blog-two-nav-item tw-mb-5 nav-item"} role={"presentation"}>
                    <button className={"blog-two-nav-link nav-link text-heading fw-bold tw-rounded-xl w-100 hover-text-heading active"} id={"hometwo-tab"} data-bs-toggle={"tab"} data-bs-target={"#hometwo"} type={"button"} role={"tab"} aria-controls={"hometwo"} aria-selected={"true"}>
                      One Article
                    </button>
                  </li>
                  <li className={"blog-two-nav-item tw-mb-5 nav-item"} role={"presentation"}>
                    <button className={"blog-two-nav-link nav-link text-heading fw-bold tw-rounded-xl w-100 hover-text-heading"} id={"profiletwo-tab"} data-bs-toggle={"tab"} data-bs-target={"#profiletwo"} type={"button"} role={"tab"} aria-controls={"profiletwo"} aria-selected={"false"}>
                      Two Article
                    </button>
                  </li>
                  <li className={"blog-two-nav-item tw-mb-5 nav-item"} role={"presentation"}>
                    <button className={"blog-two-nav-link nav-link text-heading fw-bold tw-rounded-xl w-100 hover-text-heading"} id={"messagestwo-tab"} data-bs-toggle={"tab"} data-bs-target={"#messagestwo"} type={"button"} role={"tab"} aria-controls={"messagestwo"} aria-selected={"false"}>
                      Three Article
                    </button>
                  </li>
                  <li className={"blog-two-nav-item tw-mb-5 nav-item"} role={"presentation"}>
                    <button className={"blog-two-nav-link nav-link text-heading fw-bold tw-rounded-xl w-100 hover-text-heading"} id={"settingstwo-tab"} data-bs-toggle={"tab"} data-bs-target={"#settingstwo"} type={"button"} role={"tab"} aria-controls={"settingstwo"} aria-selected={"false"}>
                      Four Article
                    </button>
                  </li>
                </ul>
              </div>
              <div className={"col-xl-8 col-lg-8"}>
                <div className={"tab-content"}>
                  <div className={"tab-pane active"} id={"hometwo"} role={"tabpanel"} aria-labelledby={"hometwo-tab"}>
                    <div className={"row"}>
                      <div className={"col-xl-12"}>
                        <div className={"blog-wrapper blog-two-wrapper main tw-ms-25 tw-p-705 tw-rounded-lg"}>
                          <div className={"blog-main-thumb blog-two-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-8"}>
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb1.jpg"} alt={"blog"} />
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb1.jpg"} alt={"blog"} />
                            <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                          </div>
                          <div>
                            <div className={"blog-meta tw-mb-6"}>
                              <ul className={"d-flex align-items-center tw-gap-5"}>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-user-plus"}></i>
                                  </span>
                                  By Admin
                                </li>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-calendar"}></i>
                                  </span>
                                  23, August 2026
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className={"blog-two-title tw-text-9 fw-medium tw-mb-10"}>
                                <a href={"/blog-details"}>
                                  Why Business Cleaning Enhances Workplace Morale Quickly
                                </a>
                              </h3>
                            </div>
                            <div>
                              <a href={"/blog-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      Get A Free Quote
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
                  <div className={"tab-pane"} id={"profiletwo"} role={"tabpanel"} aria-labelledby={"profiletwo-tab"}>
                    <div className={"row"}>
                      <div className={"col-xl-12"}>
                        <div className={"blog-wrapper blog-two-wrapper main tw-ms-25 tw-p-705 tw-rounded-lg"}>
                          <div className={"blog-main-thumb blog-two-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-8"}>
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb2.jpg"} alt={"blog"} />
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb2.jpg"} alt={"blog"} />
                            <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                          </div>
                          <div>
                            <div className={"blog-meta tw-mb-6"}>
                              <ul className={"d-flex align-items-center tw-gap-5"}>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-user-plus"}></i>
                                  </span>
                                  By Admin
                                </li>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-calendar"}></i>
                                  </span>
                                  23, August 2026
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className={"blog-two-title tw-text-9 fw-medium tw-mb-10"}>
                                <a href={"/blog-details"}>
                                  How Professional Cleaning Boosts Employee Morale Instantly
                                </a>
                              </h3>
                            </div>
                            <div>
                              <a href={"/blog-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      Get A Free Quote
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
                  <div className={"tab-pane"} id={"messagestwo"} role={"tabpanel"} aria-labelledby={"messagestwo-tab"}>
                    <div className={"row"}>
                      <div className={"col-xl-12"}>
                        <div className={"blog-wrapper blog-two-wrapper main tw-ms-25 tw-p-705 tw-rounded-lg"}>
                          <div className={"blog-main-thumb blog-two-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-8"}>
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb3.jpg"} alt={"blog"} />
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb3.jpg"} alt={"blog"} />
                            <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                          </div>
                          <div>
                            <div className={"blog-meta tw-mb-6"}>
                              <ul className={"d-flex align-items-center tw-gap-5"}>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-user-plus"}></i>
                                  </span>
                                  By Admin
                                </li>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-calendar"}></i>
                                  </span>
                                  23, August 2026
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className={"blog-two-title tw-text-9 fw-medium tw-mb-10"}>
                                <a href={"/blog-details"}>
                                  The Fast Link Between Office Cleanliness and Team Motivation
                                </a>
                              </h3>
                            </div>
                            <div>
                              <a href={"/blog-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      Get A Free Quote
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
                  <div className={"tab-pane"} id={"settingstwo"} role={"tabpanel"} aria-labelledby={"settingstwo-tab"}>
                    <div className={"row"}>
                      <div className={"col-xl-12"}>
                        <div className={"blog-wrapper blog-two-wrapper main tw-ms-25 tw-p-705 tw-rounded-lg"}>
                          <div className={"blog-main-thumb blog-two-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-8"}>
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb4.jpg"} alt={"blog"} />
                            <img className={"w-img w-100 tw-rounded-lg tw-transition-5"} src={"/assets/images/thumbs/blog-two-thumb4.jpg"} alt={"blog"} />
                            <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                          </div>
                          <div>
                            <div className={"blog-meta tw-mb-6"}>
                              <ul className={"d-flex align-items-center tw-gap-5"}>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-user-plus"}></i>
                                  </span>
                                  By Admin
                                </li>
                                <li className={"d-inline-flex align-items-center tw-gap-3 tw-text-xl"}>
                                  <span className={"text-main-eight-600 tw-text-xl"}>
                                    <i className={"ph-bold ph-calendar"}></i>
                                  </span>
                                  23, August 2026
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className={"blog-two-title tw-text-9 fw-medium tw-mb-10"}>
                                <a href={"/blog-details"}>
                                  Why a Clean Workplace Sparks Better Morale and Productivity
                                </a>
                              </h3>
                            </div>
                            <div>
                              <a href={"/blog-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                                <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                  <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                    <span className={"overflow-hidden position-relative d-inline-flex"}>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                      <i className={"ph-bold ph-arrow-right"}></i>
                                    </span>
                                  </span>
                                  <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                    <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                      Get A Free Quote
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
          </div>
          <div>
            <img className={"blog-two-shape-1 position-absolute start-0 z-n1"} src={"/assets/images/shapes/blog-two-shape1.png"} alt={"shape"} />
            <img className={"blog-two-shape-2 position-absolute top-50 translate-middle-y start-0 z-n1"} src={"/assets/images/shapes/blog-two-shape2.png"} alt={"shape"} />
            <img className={"blog-two-shape-3 position-absolute z-n1"} src={"/assets/images/shapes/blog-two-shape3.png"} alt={"shape"} />
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
