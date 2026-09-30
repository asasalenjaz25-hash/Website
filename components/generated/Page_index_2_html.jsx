// Ported from index-2.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_index_2_html() {
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
        <section className={"banner-nine-area position-relative z-1"}>
          <div className={"banner-nine-wrapper position-relative"}>
            <div className={"swiper-container banner-nine-active"}>
              <div className={"swiper-wrapper"}>
                <div className={"swiper-slide"}>
                  <div className={"banner-nine-height"}>
                    <div className={"banner-nine-bg bg-img"} data-background-image={"/assets/images/thumbs/banner-nine-bg1.jpg"}></div>
                    <div className={"container tw-container-1750-px"}>
                      <div className={"row"}>
                        <div className={"col-xl-6"}>
                          <div className={"banner-nine-content"}>
                            <div className={"banner-nine-title-box"}>
                              <h1 className={"banner-nine-title text-white tw-text-34 text-capitalize fw-bold tw-mb-11"}>
                                deliver modern laundry
                              </h1>
                            </div>
                            <div className={"banner-nine-btn-box d-inline-flex justify-content-center tw-gap-205"}>
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
                                        Get Started Now
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-white text-white tw-rounded-4xl position-relative z-1"}>
                                  <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                    <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                      <span className={"overflow-hidden position-relative d-inline-flex"}>
                                        <i className={"ph-bold ph-arrow-right"}></i>
                                        <i className={"ph-bold ph-arrow-right"}></i>
                                      </span>
                                    </span>
                                    <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                      <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                        Get Started Now
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
                      <img className={"banner-nine-bubble-1 position-absolute start-0 top-0"} src={"/assets/images/shapes/banner-nine-bubble1.png"} alt={"bubble1"} />
                      <img className={"banner-nine-bubble-2 position-absolute bottom-0"} src={"/assets/images/shapes/banner-nine-bubble2.png"} alt={"bubble2"} />
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide"}>
                  <div className={"banner-nine-height"}>
                    <div className={"banner-nine-bg bg-img"} data-background-image={"/assets/images/thumbs/banner-three-bg.jpg"}></div>
                    <div className={"container tw-container-1750-px"}>
                      <div className={"row"}>
                        <div className={"col-xl-7"}>
                          <div className={"banner-nine-content"}>
                            <div className={"banner-nine-title-box"}>
                              <h1 className={"banner-nine-title text-white tw-text-34 text-capitalize fw-bold tw-mb-11"}>
                                Modern Laundry Delivery
                              </h1>
                            </div>
                            <div className={"banner-nine-btn-box d-inline-flex justify-content-center tw-gap-205"}>
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
                                        Get Started Now
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a href={"/contact"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-white text-white tw-rounded-4xl position-relative z-1"}>
                                  <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                                    <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                                      <span className={"overflow-hidden position-relative d-inline-flex"}>
                                        <i className={"ph-bold ph-arrow-right"}></i>
                                        <i className={"ph-bold ph-arrow-right"}></i>
                                      </span>
                                    </span>
                                    <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                                      <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                        Get Started Now
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
                      <img className={"banner-nine-bubble-1 position-absolute start-0 top-0"} src={"/assets/images/shapes/banner-nine-bubble1.png"} alt={"bubble1"} />
                      <img className={"banner-nine-bubble-2 position-absolute bottom-0"} src={"/assets/images/shapes/banner-nine-bubble2.png"} alt={"bubble2"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"banner-nine-arrow-box"}>
              <button className={"banner-nine-prev"} tabIndex={"0"} aria-label={"Previous slide"}>
                <i className={"ph ph-arrow-left"}></i>
              </button>
              <button className={"banner-nine-next"} tabIndex={"0"} aria-label={"Next slide"}>
                <i className={"ph ph-arrow-right"}></i>
              </button>
            </div>
            <div className={"banner-nine-dots dots-color swiper-pagination-clickable swiper-pagination-bullets"}>
              <span className={"swiper-pagination-bullet"} tabIndex={"0"} role={"button"} aria-label={"Go to slide 1"}></span>
              <span className={"swiper-pagination-bullet"} tabIndex={"0"} role={"button"} aria-label={"Go to slide 2"}></span>
              <span className={"swiper-pagination-bullet swiper-pagination-bullet-active"} tabIndex={"0"} role={"button"} aria-label={"Go to slide 3"}></span>
            </div>
          </div>
        </section>
        <section className={"about-nine-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"about-nine-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-nine-thumb1.jpg"} alt={"thumb"} />
                </div>
              </div>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"about-nine-wrapper tw-ms-6"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      About our company
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      We ensure your comfort and safety
                    </h2>
                    <p className={"tw-me-10"}>
                      Your brand deserves more than just attention—it deserves results. That’s why we offer end-to-end creative services that help you engage your audience.
                    </p>
                  </div>
                  <div className={"about-nine-wrap d-flex align-items-center tw-mb-10"}>
                    <div className={"about-nine-item d-flex align-items-center tw-gap-3 animation-item"}>
                      <div className={"about-nine-icon"}>
                        <span>
                          <img className={"animate__wobble"} src={"/assets/images/icons/about-nine-icon1.svg"} alt={""} />
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-xl fw-medium"}>
                          Medical And Expertise Services
                        </h3>
                      </div>
                    </div>
                    <div className={"about-nine-item d-flex align-items-center tw-gap-3 animation-item"}>
                      <div className={"about-nine-icon"}>
                        <span>
                          <img className={"animate__wobble"} src={"/assets/images/icons/about-nine-icon2.svg"} alt={""} />
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-xl fw-medium"}>
                          Medicine and Our instrument
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className={"about-nine-button-wrap d-inline-flex justify-content-center tw-gap-205"}>
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
                              Get Started Now
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div>
                      <a href={"/about"} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-transparent border border-2 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              Get Started Now
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row align-items-center"}>
              <div className={"col-xl-5 col-lg-5"}>
                <div className={"about-nine-bottom"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h4 className={"tw-text-505 tw-mb-15"}>
                    Welcome To Repio Laundry & Cleaning. We are open 24/7 at your service.
                  </h4>
                  <div className={"about-nine-list"}>
                    <ul className={"d-flex tw-gap-8 flex-wrap"}>
                      <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-3"}>
                        <span className={"d-inline-block lh-1 tw-text-xl text-main-eight-600"}>
                          <i className={"ph ph-check"}></i>
                        </span>
                        Comprehensive Care
                      </li>
                      <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-3"}>
                        <span className={"d-inline-block lh-1 tw-text-xl text-main-eight-600"}>
                          <i className={"ph ph-check"}></i>
                        </span>
                        Management consultation
                      </li>
                    </ul>
                    <ul className={"d-flex tw-gap-8 flex-wrap"}>
                      <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-3"}>
                        <span className={"d-inline-block lh-1 tw-text-xl text-main-eight-600"}>
                          <i className={"ph ph-check"}></i>
                        </span>
                        Specialized Support
                      </li>
                      <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-3"}>
                        <span className={"d-inline-block lh-1 tw-text-xl text-main-eight-600"}>
                          <i className={"ph ph-check"}></i>
                        </span>
                        Instant Operation & Appointment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7 col-lg-7"}>
                <div className={"about-nine-thumb-two"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-nine-thumb2.jpg"} alt={"thumb"} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"feature-nine-area tw-pb-22"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-nine-wrapper d-flex tw-gap-4 animation-item tw-mb-705 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"feature-nine-icon"}>
                    <span className={"tw-w-122 tw-h-122"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/feature-nine-icon1.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div className={"feature-nine-content"}>
                    <h2 className={"tw-text-xl tw-mb-3"}>
                      100% Certified
                    </h2>
                    <p>
                      Washroom delivers fresh, clean clothes with eco-friendly care and reliable service.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-nine-wrapper d-flex tw-gap-4 animation-item tw-mb-705 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"feature-nine-icon"}>
                    <span className={"tw-w-122 tw-h-122"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/feature-nine-icon2.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div className={"feature-nine-content"}>
                    <h2 className={"tw-text-xl tw-mb-3"}>
                      New Technology
                    </h2>
                    <p>
                      Washroom delivers fresh, clean clothes with eco-friendly care and reliable service.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-nine-wrapper d-flex tw-gap-4 animation-item tw-mb-705 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"feature-nine-icon"}>
                    <span className={"tw-w-122 tw-h-122"}>
                      <img className={"animate__wobble"} src={"/assets/images/icons/feature-nine-icon3.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div className={"feature-nine-content"}>
                    <h2 className={"tw-text-xl tw-mb-3"}>
                      Flexible Scheduling
                    </h2>
                    <p>
                      Washroom delivers fresh, clean clothes with eco-friendly care and reliable service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"service-nine-area bg-main-eight-600 tw-rounded-2xl pt-120 tw-pb-22 tw-mx-205 position-relative z-1"}>
          <div className={"container tw-container-1480-px"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-6 col-lg-9"}>
                <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle text-main-eight-600 text-white fw-medium text-uppercase tw-mb-2"}>
                    OUR SERVICES
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 text-white tw-char-animation"}>
                    We are offering Expert Laundry Services
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"service-nine-wrapper tw-py-10 tw-px-705 tw-mb-705 tw-rounded-xl animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"service-nine-icon tw-mb-4"}>
                    <span>
                      <img className={"animate__wobble"} src={"/assets/images/icons/service-nine-icon1.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div className={"service-nine-content"}>
                    <h3 className={"tw-text-7 fw-bold text-white tw-mb-4"}>
                      <a className={"hover-text-white hover-underline"} href={"/service-details"}>
                        Laundry made simple
                      </a>
                    </h3>
                    <div className={"service-nine-list tw-mb-6"}>
                      <ul>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Full body screening
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Blood pressure and sugar tests
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          BMI and cholesterol analysis
                        </li>
                      </ul>
                    </div>
                    <div className={"service-nine-button"}>
                      <a href={"/service-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              View Details
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"service-nine-wrapper tw-py-10 tw-px-705 tw-mb-705 tw-rounded-xl animation-item tw-mt-11"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"service-nine-icon tw-mb-4"}>
                    <span>
                      <img className={"animate__wobble"} src={"/assets/images/icons/service-nine-icon2.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div className={"service-nine-content"}>
                    <h3 className={"tw-text-7 fw-bold text-white tw-mb-4"}>
                      <a className={"hover-text-white hover-underline"} href={"/service-details"}>
                        Dry cleaning expertise
                      </a>
                    </h3>
                    <div className={"service-nine-list tw-mb-6"}>
                      <ul>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Full body screening
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Blood pressure and sugar tests
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          BMI and cholesterol analysis
                        </li>
                      </ul>
                    </div>
                    <div className={"service-nine-button"}>
                      <a href={"/service-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              View Details
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"service-nine-wrapper tw-py-10 tw-px-705 tw-mb-705 tw-rounded-xl animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"service-nine-icon tw-mb-4"}>
                    <span>
                      <img className={"animate__wobble"} src={"/assets/images/icons/service-nine-icon3.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div className={"service-nine-content"}>
                    <h3 className={"tw-text-7 fw-bold text-white tw-mb-4"}>
                      <a className={"hover-text-white hover-underline"} href={"/service-details"}>
                        Business linen
                        <br />
                        care
                      </a>
                    </h3>
                    <div className={"service-nine-list tw-mb-6"}>
                      <ul>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Full body screening
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Blood pressure and sugar tests
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          BMI and cholesterol analysis
                        </li>
                      </ul>
                    </div>
                    <div className={"service-nine-button"}>
                      <a href={"/service-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              View Details
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"service-nine-wrapper tw-py-10 tw-px-705 tw-mb-705 tw-rounded-xl animation-item tw-mt-11"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"service-nine-icon tw-mb-4"}>
                    <span>
                      <img className={"animate__wobble"} src={"/assets/images/icons/service-nine-icon4.svg"} alt={"icon"} />
                    </span>
                  </div>
                  <div className={"service-nine-content"}>
                    <h3 className={"tw-text-7 fw-bold text-white tw-mb-4"}>
                      <a className={"hover-text-white hover-underline"} href={"/service-details"}>
                        Checkup Laundry Packages
                      </a>
                    </h3>
                    <div className={"service-nine-list tw-mb-6"}>
                      <ul>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Full body screening
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          Blood pressure and sugar tests
                        </li>
                        <li className={"d-inline-flex text-white align-items-center tw-gap-2 tw-mb-3"}>
                          <span className={"d-inline-block lh-1 text-white"}>
                            <i className={"ph ph-check"}></i>
                          </span>
                          BMI and cholesterol analysis
                        </li>
                      </ul>
                    </div>
                    <div className={"service-nine-button"}>
                      <a href={"/service-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold text-white tw-rounded-4xl position-relative z-1"}>
                        <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                          <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                            <span className={"overflow-hidden position-relative d-inline-flex"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </span>
                          </span>
                          <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                            <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                              View Details
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
            <img className={"position-absolute start-0 bottom-0 z-n1"} src={"/assets/images/shapes/service-nine-shape1.png"} alt={"shape"} />
            <img className={"position-absolute end-0 top-0 z-n1"} src={"/assets/images/shapes/service-nine-shape2.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"expert-nine-area py-120 @@experelevenClass"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"expert-nine-left tw-me-20"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"row"}>
                    <div className={"col-xl-6 col-lg-6 col-md-6"}>
                      <div className={"expert-nine-counter tw-mb-10 tw-mb-20"}>
                        <h2 className={"expert-nine-title tw-text-19 fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                          <span className={"font-heading odometer"} data-count={"50"}></span>
                          k+
                        </h2>
                        <p className={"expert-nine-paragraph"}>
                          After more than twenty years of success in the wood.
                        </p>
                        <h3 className={"expert-nine-subtitle tw-text-xl fw-semibold"}>
                          Completed Projects
                        </h3>
                      </div>
                    </div>
                    <div className={"col-xl-6 col-lg-6 col-md-6"}>
                      <div className={"expert-nine-counter tw-mb-10 tw-mb-20"}>
                        <h2 className={"expert-nine-title tw-text-19 fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                          <span className={"font-heading odometer"} data-count={"4"}></span>
                          k+
                        </h2>
                        <p className={"expert-nine-paragraph"}>
                          After more than twenty years of success in the wood.
                        </p>
                        <h3 className={"expert-nine-subtitle tw-text-xl fw-semibold"}>
                          Experienced Workers
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className={"tw-mb-605"}>
                    <div>
                      <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                        Automation
                      </span>
                    </div>
                    <div className={"expert-nine-progress-container progress-container"} data-percentage={"80"}>
                      <div className={"progress active bg-main-eight-600"}></div>
                      <div className={"percentage active bg-main-eight-600"}>
                        0%
                      </div>
                    </div>
                  </div>
                  <div className={"tw-mb-605"}>
                    <div>
                      <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                        Engineering
                      </span>
                    </div>
                    <div className={"expert-nine-progress-container progress-container"} data-percentage={"90"}>
                      <div className={"progress active bg-main-eight-600"}></div>
                      <div className={"percentage active bg-main-eight-600"}>
                        0%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"expert-nine-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      About our company
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      offering Expert Plumbing Services
                    </h2>
                    <p className={"tw-me-10"}>
                      After more than twenty years of success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western United States capital.
                    </p>
                  </div>
                  <div className={"expert-nine-list d-flex tw-mb-10"}>
                    <ul>
                      <li className={"d-inline-flex align-items-center tw-gap-3 tw-mb-3 text-heading fw-medium"}>
                        <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                          <i className={"ph-bold ph-check-circle"}></i>
                        </span>
                        Quality and Process Driven and Innovative Eco Power
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-3 text-heading fw-medium"}>
                        <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                          <i className={"ph-bold ph-check-circle"}></i>
                        </span>
                        Understanding Your Requirements for construction
                      </li>
                    </ul>
                  </div>
                  <div className={"expert-nine-button"}>
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
                            About Us
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
        <div className={"brand-eight-area pb-120 @@brandeightClass"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xxl-12"}>
                <div className={"brand-eight-slider"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"brand-eight-active swiper-container"}>
                    <div className={"swiper-wrapper"}>
                      <div className={"brand-eight-item swiper-slide"}>
                        <div className={"brand-eight-thumb"}>
                          <img src={"/assets/images/thumbs/brand-eight-thumb1.png"} alt={"thumb"} />
                        </div>
                      </div>
                      <div className={"brand-eight-item swiper-slide"}>
                        <div className={"brand-eight-thumb"}>
                          <img src={"/assets/images/thumbs/brand-eight-thumb2.png"} alt={"thumb"} />
                        </div>
                      </div>
                      <div className={"brand-eight-item swiper-slide"}>
                        <div className={"brand-eight-thumb"}>
                          <img src={"/assets/images/thumbs/brand-eight-thumb3.png"} alt={"thumb"} />
                        </div>
                      </div>
                      <div className={"brand-eight-item swiper-slide"}>
                        <div className={"brand-eight-thumb"}>
                          <img src={"/assets/images/thumbs/brand-eight-thumb4.png"} alt={"thumb"} />
                        </div>
                      </div>
                      <div className={"brand-eight-item swiper-slide"}>
                        <div className={"brand-eight-thumb"}>
                          <img src={"/assets/images/thumbs/brand-eight-thumb5.png"} alt={"thumb"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"team-nine-area pt-120 tw-pb-22 position-relative z-1 tw-mx-205"}>
          <div className={"container tw-container-1480-px"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7 col-lg-9"}>
                <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                    meet our team
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    offering Expert Plumbing Services
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-nine-wrapper tw-rounded-lg bg-white text-center tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"team-four-thumb team-nine-thumb position-relative z-1 tw-mb-6"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-nine-thumb1.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social team-nine-social position-absolute bottom-0 end-0 tw-me-5 tw-mb-5"}>
                      <div className={"team-four-btn team-nine-btn position-relative z-2"}>
                        <button className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-nine-icon"}>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={"team-four-title tw-text-605 fw-bold font-rethink tw-mb-1"}>
                      <a className={"hover-text-main-eight-600"} href={"/team-details"}>
                        Anannya Wifey
                      </a>
                    </h3>
                    <p className={"team-four-paragraph"}>
                      Executive Head
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-nine-wrapper tw-mt-122 tw-rounded-lg bg-white text-center tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"team-four-thumb team-nine-thumb position-relative z-1 tw-mb-6"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-nine-thumb2.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social team-nine-social position-absolute bottom-0 end-0 tw-me-5 tw-mb-5"}>
                      <div className={"team-four-btn team-nine-btn position-relative z-2"}>
                        <button className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-nine-icon"}>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={"team-four-title tw-text-605 fw-bold font-rethink tw-mb-1"}>
                      <a className={"hover-text-main-eight-600"} href={"/team-details"}>
                        Anannya Wifey
                      </a>
                    </h3>
                    <p className={"team-four-paragraph"}>
                      Executive Head
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-nine-wrapper tw-rounded-lg bg-white text-center tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"team-four-thumb team-nine-thumb position-relative z-1 tw-mb-6"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-nine-thumb3.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social team-nine-social position-absolute bottom-0 end-0 tw-me-5 tw-mb-5"}>
                      <div className={"team-four-btn team-nine-btn position-relative z-2"}>
                        <button className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-nine-icon"}>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={"team-four-title tw-text-605 fw-bold font-rethink tw-mb-1"}>
                      <a className={"hover-text-main-eight-600"} href={"/team-details"}>
                        Anannya Wifey
                      </a>
                    </h3>
                    <p className={"team-four-paragraph"}>
                      Executive Head
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-four-wrapper team-nine-wrapper tw-mt-122 tw-rounded-lg bg-white text-center tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"team-four-thumb team-nine-thumb position-relative z-1 tw-mb-6"}>
                    <a className={"d-block"} href={"/team-details"}>
                      <img className={"tw-rounded-lg w-100"} src={"/assets/images/thumbs/team-nine-thumb4.png"} alt={"thumb"} />
                    </a>
                    <div className={"team-four-social team-nine-social position-absolute bottom-0 end-0 tw-me-5 tw-mb-5"}>
                      <div className={"team-four-btn team-nine-btn position-relative z-2"}>
                        <button className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 rounded-circle text-white tw-transition-3"}>
                          <i className={"ph ph-share-network"}></i>
                        </button>
                      </div>
                      <div className={"team-four-icon team-nine-icon"}>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                        <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-black tw-mb-1 hover-bg-main-eight-600 hover-text-white"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={"team-four-title tw-text-605 fw-bold font-rethink tw-mb-1"}>
                      <a className={"hover-text-main-eight-600"} href={"/team-details"}>
                        Anannya Wifey
                      </a>
                    </h3>
                    <p className={"team-four-paragraph"}>
                      Executive Head
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"team-nine-shape-1 position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/team-nine-shape1.png"} alt={"shape"} />
            <img className={"team-nine-shape-1 position-absolute top-0 end-0 z-n1"} src={"/assets/images/shapes/team-nine-shape2.png"} alt={"shape"} />
          </div>
        </section>
        <div className={"video-area video-nine-area mb-0"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row justify-content-center gx-0"}>
              <div className={"col-xl-12 gx-0"}>
                <div className={"video-bg video-nine-bg text-center position-relative"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/video-nine-bg.jpg"} alt={"bg"} />
                  <div className={"video-button video-nine-button position-absolute start-50 translate-middle"}>
                    <a className={"video-btn open-popup tw-w-28 tw-h-28 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-white bg-main-eight-600 tw-text-8 position-relative z-1"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""}>
                      <i className={"ph-bold ph-play"}></i>
                      <span className={"ripple"}></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"project-nine-area py-120 project-nine-panel-area"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7 col-lg-9"}>
                <div className={"section-eight-wrapper text-center tw-mb-10 aos-init aos-animate"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                    About our company
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"} style={{"perspective":"300px"}}>
                    <div style={{"position":"relative","display":"inline-block"}}>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        S
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        l
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        c
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        t
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        d
                      </div>
                    </div>
                    <div style={{"position":"relative","display":"inline-block"}}>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        C
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        a
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        s
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                    </div>
                    <div style={{"position":"relative","display":"inline-block"}}>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        S
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        t
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        u
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        d
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        i
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        s
                      </div>
                    </div>
                    <div style={{"position":"relative","display":"inline-block"}}>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        T
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        h
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        a
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        t
                      </div>
                    </div>
                    <div style={{"position":"relative","display":"inline-block"}}>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        R
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        f
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        l
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        c
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        t
                      </div>
                    </div>
                    <div style={{"position":"relative","display":"inline-block"}}>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        O
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        u
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        r
                      </div>
                    </div>
                    <div style={{"position":"relative","display":"inline-block"}}>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        E
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        x
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        p
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        r
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        t
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        i
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        s
                      </div>
                      <div style={{"position":"relative","display":"inline-block","translate":"none","rotate":"none","scale":"none","opacity":"1","visibility":"inherit","transform":"translate(0px, 0px)"}}>
                        e
                      </div>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"row project-nine-panel"}>
                  <div className={"col"}>
                    <div className={"project-nine-thumb position-relative z-1"}>
                      <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/project-nine-thumb1.jpg"} alt={"thumb"} />
                      <div className={"project-nine-content position-absolute bottom-0 start-0 tw-mb-705 tw-ms-705 bg-white tw-rounded-xl tw-px-11 tw-pt-15 tw-pb-13"}>
                        <span className={"text-main-eight-600 tw-mb-4"}>
                          #Cleaning
                        </span>
                        <h2 className={"tw-text-7"}>
                          Mall Floor Polishing Electrical Makeover Safe
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"row project-nine-panel mt-30"}>
                  <div className={"col"}>
                    <div className={"project-nine-thumb position-relative z-1"}>
                      <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/project-nine-thumb2.jpg"} alt={"thumb"} />
                      <div className={"project-nine-content position-absolute bottom-0 start-0 tw-mb-705 tw-ms-705 bg-white tw-rounded-xl tw-px-11 tw-pt-15 tw-pb-13"}>
                        <span className={"text-main-eight-600 tw-mb-4"}>
                          #Cleaning
                        </span>
                        <h2 className={"tw-text-7"}>
                          Complete Mall Floor Polishing &amp; Electrical
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"row project-nine-panel mt-30"}>
                  <div className={"col"}>
                    <div className={"project-nine-thumb position-relative z-1"}>
                      <img className={"tw-rounded-2xl"} src={"/assets/images/thumbs/project-nine-thumb3.jpg"} alt={"thumb"} />
                      <div className={"project-nine-content position-absolute bottom-0 start-0 tw-mb-705 tw-ms-705 bg-white tw-rounded-xl tw-px-11 tw-pt-15 tw-pb-13"}>
                        <span className={"text-main-eight-600 tw-mb-4"}>
                          #Cleaning
                        </span>
                        <h2 className={"tw-text-7"}>
                          Polished Mall Floors with Secure Electrical Systems
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonial-nine-area py-120 tw-mx-205"}>
          <div className={"container-fluid gx-0"}>
            <div className={"row gx-0"}>
              <div className={"col-xl-5"}>
                <div className={"testimonial-nine-left"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                      About our company
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      We are offering Expert Plumbing Services
                    </h2>
                  </div>
                  <div className={"d-flex tw-gap-6 tw-mb-12"}>
                    <div className={"testimonial-nine-img"}>
                      <img className={""} src={"/assets/images/thumbs/testimonial-nine-img1.png"} alt={"thumb"} />
                    </div>
                    <div className={"testimonial-nine-img"}>
                      <img className={""} src={"/assets/images/thumbs/testimonial-nine-img2.png"} alt={"thumb"} />
                    </div>
                    <div className={"testimonial-nine-img"}>
                      <img className={""} src={"/assets/images/thumbs/testimonial-nine-img3.png"} alt={"thumb"} />
                    </div>
                  </div>
                  <div className={"d-flex justify-content-between"}>
                    <div className={"testimonial-nine-arrow d-flex tw-gap-5"}>
                      <button className={"slider-prev"}>
                        <i className={"ph ph-arrow-left"}></i>
                      </button>
                      <button className={"slider-next"}>
                        <i className={"ph ph-arrow-right"}></i>
                      </button>
                    </div>
                    <div>
                      <span>
                        <img src={"/assets/images/shapes/google.png"} alt={"google"} />
                      </span>
                      <div className={"d-flex align-items-center tw-gap-2"}>
                        <h3 className={"tw-text-lg fw-semibold"}>
                          4.8
                        </h3>
                        <p>
                          From 799+ reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-7"}>
                <div className={"testimonial-nine-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"testimonial-nine-active swiper-container"}>
                    <div className={"testimonial-nine-swiper-wrapper swiper-wrapper"}>
                      <div className={"testimonial-nine-wrapper swiper-slide"}>
                        <div className={"testimonial-nine-top d-flex justify-content-between align-items-center bg-white tw-mb-2 tw-rounded-xl tw-py-405 tw-px-705"}>
                          <div className={"d-flex align-items-center tw-gap-4"}>
                            <div className={"testimonial-three-img testimonial-nine-clints-img tw-w-15 tw-h-15"}>
                              <img className={"w-100 h-100"} src={"/assets/images/thumbs/testimonial-nine-thumb1.png"} alt={"img"} />
                            </div>
                            <div>
                              <h3 className={"tw-text-base"}>
                                Amelia Johnson
                              </h3>
                              <p>
                                Marketing Director
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"testimonial-nine-bottom bg-white tw-rounded-xl tw-py-10 tw-px-8"}>
                          <div className={"d-flex align-items-center tw-gap-3"}>
                            <div>
                              <h4 className={"tw-text-122"}>
                                5.0
                              </h4>
                            </div>
                            <div>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                            </div>
                          </div>
                          <div>
                            <p className={"testimonial-nine-paragraph tw-text-lg tw-mb-6 fw-medium text-heading"}>
                              "From logo design to marketing campaigns, everything was flawless. Our sales and online engagement have doubled since the rebranding."
                            </p>
                          </div>
                          <div>
                            <p className={"tw-text-sm fw-medium text-heading"}>
                              “GREAT DESIGN SERVICES”
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"testimonial-nine-wrapper swiper-slide"}>
                        <div className={"testimonial-nine-top d-flex justify-content-between align-items-center bg-white tw-mb-2 tw-rounded-xl tw-py-405 tw-px-705"}>
                          <div className={"d-flex align-items-center tw-gap-4"}>
                            <div className={"testimonial-three-img testimonial-nine-clints-img tw-w-15 tw-h-15"}>
                              <img className={"w-100 h-100"} src={"/assets/images/thumbs/testimonial-nine-thumb2.png"} alt={"img"} />
                            </div>
                            <div>
                              <h3 className={"tw-text-base"}>
                                Amelia Johnson
                              </h3>
                              <p>
                                Marketing Director
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"testimonial-nine-bottom bg-white tw-rounded-xl tw-py-10 tw-px-8"}>
                          <div className={"d-flex align-items-center tw-gap-3"}>
                            <div>
                              <h4 className={"tw-text-122"}>
                                5.0
                              </h4>
                            </div>
                            <div>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                            </div>
                          </div>
                          <div>
                            <p className={"testimonial-nine-paragraph tw-text-lg tw-mb-6 fw-medium text-heading"}>
                              "From logo design to marketing campaigns, everything was flawless. Our sales and online engagement have doubled since the rebranding."
                            </p>
                          </div>
                          <div>
                            <p className={"tw-text-sm fw-medium text-heading"}>
                              “GREAT DESIGN SERVICES”
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"testimonial-nine-wrapper swiper-slide"}>
                        <div className={"testimonial-nine-top d-flex justify-content-between align-items-center bg-white tw-mb-2 tw-rounded-xl tw-py-405 tw-px-705"}>
                          <div className={"d-flex align-items-center tw-gap-4"}>
                            <div className={"testimonial-three-img testimonial-nine-clints-img tw-w-15 tw-h-15"}>
                              <img className={"w-100 h-100"} src={"/assets/images/thumbs/testimonial-nine-thumb3.png"} alt={"img"} />
                            </div>
                            <div>
                              <h3 className={"tw-text-base"}>
                                Amelia Johnson
                              </h3>
                              <p>
                                Marketing Director
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"testimonial-nine-bottom bg-white tw-rounded-xl tw-py-10 tw-px-8"}>
                          <div className={"d-flex align-items-center tw-gap-3"}>
                            <div>
                              <h4 className={"tw-text-122"}>
                                5.0
                              </h4>
                            </div>
                            <div>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                              <i className={"ph-bold ph-star"} style={{"color":"#F2B300"}}></i>
                            </div>
                          </div>
                          <div>
                            <p className={"testimonial-nine-paragraph tw-text-lg tw-mb-6 fw-medium text-heading"}>
                              "From logo design to marketing campaigns, everything was flawless. Our sales and online engagement have doubled since the rebranding."
                            </p>
                          </div>
                          <div>
                            <p className={"tw-text-sm fw-medium text-heading"}>
                              “GREAT DESIGN SERVICES”
                            </p>
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
        <section className={"blog-nine-area tw-pb-22"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-6 col-lg-9"}>
                <div className={"section-eight-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle fw-medium text-main-eight-600 text-uppercase tw-mb-2"}>
                    About our company
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    We are offering Expert Plumbing Services
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-nine-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"blog-nine-thumb position-relative z-1 overflow-hidden tw-rounded-xl"}>
                    <a className={"d-block"} href={"/blog-details"}>
                      <img className={"w-100"} src={"/assets/images/thumbs/blog-nine-thumb1.jpg"} alt={"thumb"} />
                    </a>
                    <div className={"blog-nine-date text-center tw-rounded-lg tw-p-5"}>
                      <h3 className={"text-white"}>
                        23
                      </h3>
                      <p className={"text-white"}>
                        JAN
                      </p>
                    </div>
                    <div className={"blog-nine-content tw-me-10"}>
                      <div className={"blog-meta tw-mb-2"}>
                        <ul className={"d-flex align-items-center tw-gap-5"}>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-user-circle"}></i>
                            </span>
                            John Smith
                          </li>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-calendar"}></i>
                            </span>
                            Consulting
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className={"blog-nine-title tw-text-505 fw-medium text-white"}>
                          <a className={"hover-underline hover-text-white"} href={"/blog-details"}>
                            Entrepreneur Mindset: Habits That Drive Success
                          </a>
                        </h4>
                        <span className={"blog-nine-border"}></span>
                        <p className={"blog-nine-paragraph text-white"}>
                          Through a combination of data-driven insights and innovative approaches, work closely with you to develop
                        </p>
                      </div>
                      <div className={"blog-nine-button"}>
                        <a className={"fw-bold text-white d-inline-flex align-items-center tw-gap-2"} href={"/blog-details"}>
                          Learn More
                          <i className={"ph ph-arrow-up-right"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-nine-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"blog-nine-thumb position-relative z-1 overflow-hidden tw-rounded-xl"}>
                    <a className={"d-block"} href={"/blog-details"}>
                      <img className={"w-100"} src={"/assets/images/thumbs/blog-nine-thumb2.jpg"} alt={"thumb"} />
                    </a>
                    <div className={"blog-nine-date text-center tw-rounded-lg tw-p-5"}>
                      <h3 className={"text-white"}>
                        23
                      </h3>
                      <p className={"text-white"}>
                        JAN
                      </p>
                    </div>
                    <div className={"blog-nine-content tw-me-10"}>
                      <div className={"blog-meta tw-mb-2"}>
                        <ul className={"d-flex align-items-center tw-gap-5"}>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-user-circle"}></i>
                            </span>
                            John Smith
                          </li>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-calendar"}></i>
                            </span>
                            Consulting
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className={"blog-nine-title tw-text-505 fw-medium text-white"}>
                          <a className={"hover-underline hover-text-white"} href={"/blog-details"}>
                            Entrepreneur Mindset: Habits That Drive Success
                          </a>
                        </h4>
                        <span className={"blog-nine-border"}></span>
                        <p className={"blog-nine-paragraph text-white"}>
                          Through a combination of data-driven insights and innovative approaches, work closely with you to develop
                        </p>
                      </div>
                      <div className={"blog-nine-button"}>
                        <a className={"fw-bold text-white d-inline-flex align-items-center tw-gap-2"} href={"/blog-details"}>
                          Learn More
                          <i className={"ph ph-arrow-up-right"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-nine-wrapper tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"blog-nine-thumb position-relative z-1 overflow-hidden tw-rounded-xl"}>
                    <a className={"d-block"} href={"/blog-details"}>
                      <img className={"w-100"} src={"/assets/images/thumbs/blog-nine-thumb3.jpg"} alt={"thumb"} />
                    </a>
                    <div className={"blog-nine-date text-center tw-rounded-lg tw-p-5"}>
                      <h3 className={"text-white"}>
                        23
                      </h3>
                      <p className={"text-white"}>
                        JAN
                      </p>
                    </div>
                    <div className={"blog-nine-content tw-me-10"}>
                      <div className={"blog-meta tw-mb-2"}>
                        <ul className={"d-flex align-items-center tw-gap-5"}>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-user-circle"}></i>
                            </span>
                            John Smith
                          </li>
                          <li className={"d-inline-flex align-items-center tw-gap-2 text-white"}>
                            <span className={"text-white tw-text-2xl"}>
                              <i className={"ph ph-calendar"}></i>
                            </span>
                            Consulting
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className={"blog-nine-title tw-text-505 fw-medium text-white"}>
                          <a className={"hover-underline hover-text-white"} href={"/blog-details"}>
                            Entrepreneur Mindset: Habits That Drive Success
                          </a>
                        </h4>
                        <span className={"blog-nine-border"}></span>
                        <p className={"blog-nine-paragraph text-white"}>
                          Through a combination of data-driven insights and innovative approaches, work closely with you to develop
                        </p>
                      </div>
                      <div className={"blog-nine-button"}>
                        <a className={"fw-bold text-white d-inline-flex align-items-center tw-gap-2"} href={"/blog-details"}>
                          Learn More
                          <i className={"ph ph-arrow-up-right"}></i>
                        </a>
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
