// Ported from index-9.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_index_9_html() {
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
        <section className={"banner-five-area bg-img position-relative z-1"} data-background-image={"/assets/images/thumbs/banner-five-bg.jpg"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-12"}>
                <div className={"banner-five-wrapper"}>
                  <div className={""}>
                    <div className={"banner-five-subtitle font-rurbanist text-main-four-600 tw-text-505 fw-medium border border-main-four-600 tw-rounded-4xl d-inline-block tw-px-13 tw-py-2 tw-mb-3"}>
                      Get to 20% Off
                    </div>
                    <h1 className={"banner-three-title banner-five-title tw-text-24 fw-bold font-rurbanist text-white tw-mb-3 tw-char-animation"}>
                      Reliable Computer &
                      <span>
                        Mobile Repair Services
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"banner-five-bottom d-flex align-items-center tw-gap-5"}>
                  <div className={"banner-five-wrap tw-w-300-px position-relative z-1"}>
                    <div>
                      <h2 className={"banner-counter-title tw-text-14 fw-bold font-rurbanist text-white mb-0 lh-1"}>
                        <span className={"font-rurbanist odometer"} data-count={"28"}></span>
                        k+
                      </h2>
                    </div>
                    <div className={"tw-mb-3"}>
                      <p className={"text-white tw-text-lg fw-normal font-rurbanist"}>
                        Mobile &
                        <br />
                        Computer Repair
                      </p>
                    </div>
                    <div>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                    </div>
                  </div>
                  <div>
                    <div className={"tw-mb-11"}>
                      <p className={"text-white tw-me-25 fw-medium tw-text-lg font-rurbanist"}>
                        Servicepro offers unparalleled computer and mobile repair services, providing reliable solutions to all your technology 
                                needs. Our team of expert technicians is dedicated to delivering top-notch service,
                      </p>
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
                              Get Strated Now
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
        <section className={"feature-five-area pt-120 tw-pb-22 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-five-wrapper tw-rounded-xl tw-mb-7 animation-item position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"feature-five-top d-flex align-items-center tw-gap-705 tw-mb-6"}>
                    <div className={"feature-five-icon"}>
                      <span className={"tw-w-210 tw-h-29 lh-1 d-inline-flex justify-content-center align-items-center bg-main-four-600 tw-transition-3"}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/feature-five-icon1.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <h2 className={"feature-five-title tw-text-2xl fw-bold font-rurbanist tw-transition-3"}>
                        Provide Mobile 
                                Repair Service
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className={"feature-five-paragraph tw-transition-3"}>
                      Lorem Ipsum dolor sit amet, consectetur cdipiscine 
                            tellus, luctus nec ullamcorper mattis pulvinr dapius
                            leo.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-five-wrapper tw-rounded-xl tw-mb-7 animation-item position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"feature-five-top d-flex align-items-center tw-gap-705 tw-mb-6"}>
                    <div className={"feature-five-icon"}>
                      <span className={"tw-w-210 tw-h-29 lh-1 d-inline-flex justify-content-center align-items-center bg-main-four-600 tw-transition-3"}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/feature-five-icon2.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <h2 className={"feature-five-title tw-text-2xl fw-bold font-rurbanist tw-transition-3"}>
                        Provide Computer 
                                Repair Service
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className={"feature-five-paragraph tw-transition-3"}>
                      Lorem Ipsum dolor sit amet, consectetur cdipiscine 
                            tellus, luctus nec ullamcorper mattis pulvinr dapius
                            leo.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"feature-five-wrapper tw-rounded-xl tw-mb-7 animation-item position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"feature-five-top d-flex align-items-center tw-gap-705 tw-mb-6"}>
                    <div className={"feature-five-icon"}>
                      <span className={"tw-w-210 tw-h-29 lh-1 d-inline-flex justify-content-center align-items-center bg-main-four-600 tw-transition-3"}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/feature-five-icon3.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <h2 className={"feature-five-title tw-text-2xl fw-bold font-rurbanist tw-transition-3"}>
                        Provide Television 
                                Repair Service
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className={"feature-five-paragraph tw-transition-3"}>
                      Lorem Ipsum dolor sit amet, consectetur cdipiscine 
                            tellus, luctus nec ullamcorper mattis pulvinr dapius
                            leo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"feature-five-shape-1 position-absolute z-n1"} src={"/assets/images/shapes/feature-five-shape1.png"} alt={""} />
            <img className={"feature-five-shape-2 position-absolute z-n1"} src={"/assets/images/shapes/feature-five-shape2.png"} alt={""} />
          </div>
        </section>
        <section className={"about-five-area pb-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"about-five-wrapper position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-wrapper tw-mb-10"}>
                    <div className={"section-five-subtitle font-heading tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                      About Us
                    </div>
                    <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                      We Provide Expert Computer And Mobile Repair Services To Ensure Your Devices Run Smoothly Every Day.
                    </h2>
                  </div>
                  <div className={"about-five-info tw-rounded-lg tw-mb-10"}>
                    <div className={"d-flex tw-gap-5"}>
                      <div>
                        <span className={"tw-w-15"}>
                          <img src={"/assets/images/icons/about-five-quate.svg"} alt={"quate"} />
                        </span>
                      </div>
                      <div>
                        <div className={"tw-mb-8"}>
                          <p className={"fw-bold font-rurbanist"}>
                            Servicepro offers unparalleled computer and 
                                        mobile repair services, providing reliable solut 
                                        technology needs. Our team of expert techni 
                                        dedicated to delivering top-notch service, en 
                                        that your devices are back up and running  
                                        no time. With a commitment
                          </p>
                        </div>
                        <div>
                          <h3 className={"tw-text-5 fw-bold font-rurbanist"}>
                            Lusajo Thomas,
                            <span className={"tw-text-base fw-normal text-body"}>
                              Founder & CEO
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center"}>
                    <div className={"about-five-counter-title"}>
                      <h2 className={"banner-counter-title tw-text-24 fw-medium font-rurbanist text-main-four-600 mb-0 lh-1"}>
                        <span className={"font-rurbanist odometer"} data-count={"35"}></span>
                        +
                      </h2>
                    </div>
                    <div>
                      <p className={"tw-text-lg fw-semibold text-heading"}>
                        Years Of Mobile & Computer
                        <br />
                        Repair Experience
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className={"about-five-shape-1 position-absolute bottom-0 tw-rounded-lg"} src={"/assets/images/shapes/about-five-shape1.jpg"} alt={"shape"} />
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"about-five-right"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tw-mb-10"}>
                    <img className={"tw-rounded-md"} src={"/assets/images/thumbs/about-five-thumb.jpg"} alt={"thumb"} />
                  </div>
                  <div className={"tw-mb-10"}>
                    <p className={"fw-semibold text-heading font-rurbanist"}>
                      Servicepro offers unparallel computer & mobile repair services, 
                            providing reliable solutions to all your technology needs. our tea. 
                            of expert technicians is dedicated to
                    </p>
                  </div>
                  <div>
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
                            More About US
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
            <img className={"about-five-shape-2 position-absolute bottom-0 end-0"} src={"/assets/images/shapes/about-five-shape2.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"service-five-area bg-main-four-50 pt-120 tw-pb-22 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-6 col-lg-6"}>
                <div className={"section-five-wrapper text-center tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    OUR sERVICES
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Quick and Quality Repairs 
                        for All Your Needs
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"service-five-wrapper bg-white tw-rounded-xl tw-p-5 tw-mb-7 position-relative z-1 overflow-hidden animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"service-five-thumb tw-mb-6"}>
                    <a className={"d-block"} href={"/service-details"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/service-five-thumb1.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"tw-mb-6"}>
                    <h3 className={"service-five-title tw-text-2xl fw-bold font-rurbanist"}>
                      <a className={"hover-text-white tw-transition-4"} href={"/service-details"}>
                        Computer Repair
                      </a>
                    </h3>
                  </div>
                  <div className={"d-flex tw-gap-5 tw-mb-6"}>
                    <div>
                      <span className={"service-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-xl tw-transition-4"} style={{"background":"#F4F7FC"}}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/service-five-icon1.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <p className={"service-five-paragraph fw-semibold font-rurbanist tw-transition-4"}>
                        Servicepro offers unparallel computer & 
                                mobile repair services solutions to all your technology needs.
                      </p>
                    </div>
                  </div>
                  <div className={"d-flex align-content-center align-items-center justify-content-between"}>
                    <div>
                      <a className={"service-five-btn fw-bold text-heading d-inline-flex tw-gap-3 align-items-center tw-transition-4"} href={"/service-details"}>
                        Read More
                        <span className={"lh-1 d-inline-block tw-text-xl"}>
                          <i className={"ph ph-arrow-right"}></i>
                        </span>
                      </a>
                    </div>
                    <div>
                      <span className={"service-five-text-stroke tw-text-15 tw-transition-4"}>
                        01
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"service-five-wrapper bg-white tw-rounded-xl tw-p-5 tw-mb-7 position-relative z-1 overflow-hidden animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"service-five-thumb tw-mb-6"}>
                    <a className={"d-block"} href={"/service-details"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/service-five-thumb2.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"tw-mb-6"}>
                    <h3 className={"service-five-title tw-text-2xl fw-bold font-rurbanist"}>
                      <a className={"hover-text-white tw-transition-4"} href={"/service-details"}>
                        Smart Phones Repair
                      </a>
                    </h3>
                  </div>
                  <div className={"d-flex tw-gap-5 tw-mb-6"}>
                    <div>
                      <span className={"service-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-xl"} style={{"background":"#F4F7FC"}}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/service-five-icon2.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <p className={"service-five-paragraph fw-semibold font-rurbanist tw-transition-4"}>
                        Servicepro offers unparallel computer & 
                                mobile repair services solutions to all your technology needs.
                      </p>
                    </div>
                  </div>
                  <div className={"d-flex align-content-center align-items-center justify-content-between"}>
                    <div>
                      <a className={"service-five-btn fw-bold text-heading d-inline-flex tw-gap-3 align-items-center tw-transition-4"} href={"/service-details"}>
                        Read More
                        <span className={"lh-1 d-inline-block tw-text-xl"}>
                          <i className={"ph ph-arrow-right"}></i>
                        </span>
                      </a>
                    </div>
                    <div>
                      <span className={"service-five-text-stroke tw-text-15 tw-transition-4 tw-transition-4"}>
                        02
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"service-five-wrapper bg-white tw-rounded-xl tw-p-5 tw-mb-7 position-relative z-1 overflow-hidden animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"service-five-thumb tw-mb-6"}>
                    <a className={"d-block"} href={"/service-details"}>
                      <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/service-five-thumb3.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                  <div className={"tw-mb-6"}>
                    <h3 className={"service-five-title tw-text-2xl fw-bold font-rurbanist"}>
                      <a className={"hover-text-white tw-transition-4"} href={"/service-details"}>
                        Cleanign Laptops
                      </a>
                    </h3>
                  </div>
                  <div className={"d-flex tw-gap-5 tw-mb-6"}>
                    <div>
                      <span className={"service-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-xl tw-transition-4"} style={{"background":"#F4F7FC"}}>
                        <img className={"animate__wobble"} src={"/assets/images/icons/service-five-icon3.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <p className={"service-five-paragraph fw-semibold font-rurbanist tw-transition-4"}>
                        Servicepro offers unparallel computer & mobile repair services solutions to all your technology needs.
                      </p>
                    </div>
                  </div>
                  <div className={"d-flex align-content-center align-items-center justify-content-between"}>
                    <div>
                      <a className={"service-five-btn fw-bold text-heading d-inline-flex tw-gap-3 align-items-center tw-transition-4"} href={"/service-details"}>
                        Read More
                        <span className={"lh-1 d-inline-block tw-text-xl"}>
                          <i className={"ph ph-arrow-right"}></i>
                        </span>
                      </a>
                    </div>
                    <div>
                      <span className={"service-five-text-stroke tw-text-15 tw-transition-4"}>
                        03
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className={"service-five-shape position-absolute w-100 h-100 top-0 start-0 z-n1"} src={"/assets/images/shapes/service-five-shape.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"choose-us-five-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between tw-mb-14"}>
              <div className={"col-xl-7 col-lg-7 col-md-7"}>
                <div className={"section-five-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    WHY CHOOSE US
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Why Trust US For Your 
                        Mobile & Computer Repairs
                  </h2>
                </div>
              </div>
              <div className={"col-xl-4 col-md-5 col-md-5"}>
                <div className={"text-md-end"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
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
                          Contact US
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className={"row tw-mb-18"}>
              <div className={"col-xl-12"}>
                <ul className={"choose-us-five-nav-tabs nav nav-tabs"} id={"myTab"} role={"tablist"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <li className={"choose-us-five-nav-item nav-item animation-item"} role={"presentation"}>
                    <button className={"choose-us-five-nav-link nav-link text-start p-0 d-inline-flex align-items-center tw-gap-5 active"} id={"home-tab"} data-bs-toggle={"tab"} data-bs-target={"#home"} type={"button"} role={"tab"} aria-controls={"home"} aria-selected={"true"}>
                      <span>
                        <span className={"choose-us-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center border border-main-four-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/choose-us-five-icon1.svg"} alt={"icon"} />
                        </span>
                      </span>
                      <span>
                        <span className={"tw-text-505 fw-semibold text-heading font-rurbanist"}>
                          Fast And Efficient Service
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className={"choose-us-five-nav-item nav-item animation-item"} role={"presentation"}>
                    <button className={"choose-us-five-nav-link nav-link text-start p-0 d-inline-flex align-items-center tw-gap-5"} id={"profile-tab"} data-bs-toggle={"tab"} data-bs-target={"#profile"} type={"button"} role={"tab"} aria-controls={"profile"} aria-selected={"false"}>
                      <span>
                        <span className={"choose-us-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center border border-main-four-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/choose-us-five-icon2.svg"} alt={"icon"} />
                        </span>
                      </span>
                      <span>
                        <span className={"tw-text-505 fw-semibold text-heading font-rurbanist"}>
                          High-Quality Parts 
                                    Guaranteed
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className={"choose-us-five-nav-item nav-item animation-item"} role={"presentation"}>
                    <button className={"choose-us-five-nav-link nav-link text-start p-0 d-inline-flex align-items-center tw-gap-5"} id={"contact-tab"} data-bs-toggle={"tab"} data-bs-target={"#contact"} type={"button"} role={"tab"} aria-controls={"contact"} aria-selected={"false"}>
                      <span>
                        <span className={"choose-us-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center border border-main-four-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/choose-us-five-icon3.svg"} alt={"icon"} />
                        </span>
                      </span>
                      <span>
                        <span className={"tw-text-505 fw-semibold text-heading font-rurbanist"}>
                          Wide Range Of 
                                    Repair Services
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className={"choose-us-five-nav-item nav-item animation-item"} role={"presentation"}>
                    <button className={"choose-us-five-nav-link nav-link text-start p-0 d-inline-flex align-items-center tw-gap-5"} id={"house-tab"} data-bs-toggle={"tab"} data-bs-target={"#house"} type={"button"} role={"tab"} aria-controls={"house"} aria-selected={"false"}>
                      <span>
                        <span className={"choose-us-five-icon tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center border border-main-four-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/choose-us-five-icon4.svg"} alt={"icon"} />
                        </span>
                      </span>
                      <span>
                        <span className={"tw-text-505 fw-semibold text-heading font-rurbanist"}>
                          Customer Satisfacti.. 
                                    Is Our Priority
                        </span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tab-content"} id={"myTabContent"}>
                    <div className={"tab-pane fade show active"} id={"home"} role={"tabpanel"} aria-labelledby={"home-tab"}>
                      <div className={"row align-items-center gx-0"}>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-thumb"}>
                            <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/choose-us-five-thumb1.jpg"} alt={"thumb"} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-wrapper tw-ms-9"}>
                            <div>
                              <h3 className={"tw-mb-4 font-rurbanist tw-text-base"}>
                                "We provide reliable and efficient repair services for mobiles and computers. With 
                                                certified technicians, genuine parts, and transparent pricing, we prioritize your 
                                                satisfaction and device security."
                              </h3>
                              <p className={"font-rurbanist tw-mb-8"}>
                                At our repair center, we prioritize your trust and satisfaction. Our team of certified 
                                                technicians is dedicated to providing high-quality repairs for both mobile devices 
                                                and computers. We use only genuine replacement parts to ensure the longevity 
                                                and performance of your devices. With transparent pricing, quick turnaround 
                                                times, and exceptional customer support, we make the repair process hassle-free 
                                                and reliable. Your device's security and functionality are our top priorities, giving 
                                                you peace of mind with every repair
                              </p>
                            </div>
                            <div className={"d-flex align-items-center justify-content-between"}>
                              <div>
                                <h4 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"25"}></span>
                                  +
                                </h4>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Years of Experience
                                </p>
                              </div>
                              <div>
                                <h4 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"10"}></span>
                                  k+
                                </h4>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Mobile Computer Repair
                                </p>
                              </div>
                              <div>
                                <h4 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"16"}></span>
                                  k
                                </h4>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Happy Customer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"tab-pane fade"} id={"profile"} role={"tabpanel"} aria-labelledby={"profile-tab"}>
                      <div className={"row align-items-center gx-0"}>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-thumb"}>
                            <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/choose-us-five-thumb2.png"} alt={"thumb"} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-wrapper tw-ms-9"}>
                            <div>
                              <h5 className={"tw-mb-4 font-rurbanist tw-text-base"}>
                                "We provide reliable and efficient repair services for mobiles and computers. With 
                                                certified technicians, genuine parts, and transparent pricing, we prioritize your 
                                                satisfaction and device security."
                              </h5>
                              <p className={"font-rurbanist tw-mb-8"}>
                                At our repair center, we prioritize your trust and satisfaction. Our team of certified 
                                                technicians is dedicated to providing high-quality repairs for both mobile devices 
                                                and computers. We use only genuine replacement parts to ensure the longevity 
                                                and performance of your devices. With transparent pricing, quick turnaround 
                                                times, and exceptional customer support, we make the repair process hassle-free 
                                                and reliable. Your device's security and functionality are our top priorities, giving 
                                                you peace of mind with every repair
                              </p>
                            </div>
                            <div className={"d-flex align-items-center justify-content-between"}>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"25"}></span>
                                  +
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Years of Experience
                                </p>
                              </div>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"10"}></span>
                                  k+
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Mobile Computer Repair
                                </p>
                              </div>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"16"}></span>
                                  k
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Happy Customer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"tab-pane fade"} id={"contact"} role={"tabpanel"} aria-labelledby={"contact-tab"}>
                      <div className={"row align-items-center gx-0"}>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-thumb"}>
                            <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/choose-us-five-thumb3.png"} alt={"thumb"} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-wrapper tw-ms-9"}>
                            <div>
                              <h5 className={"tw-mb-4 font-rurbanist tw-text-base"}>
                                "We provide reliable and efficient repair services for mobiles and computers. With 
                                                certified technicians, genuine parts, and transparent pricing, we prioritize your 
                                                satisfaction and device security."
                              </h5>
                              <p className={"font-rurbanist tw-mb-8"}>
                                At our repair center, we prioritize your trust and satisfaction. Our team of certified 
                                                technicians is dedicated to providing high-quality repairs for both mobile devices 
                                                and computers. We use only genuine replacement parts to ensure the longevity 
                                                and performance of your devices. With transparent pricing, quick turnaround 
                                                times, and exceptional customer support, we make the repair process hassle-free 
                                                and reliable. Your device's security and functionality are our top priorities, giving 
                                                you peace of mind with every repair
                              </p>
                            </div>
                            <div className={"d-flex align-items-center justify-content-between"}>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"25"}></span>
                                  +
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Years of Experience
                                </p>
                              </div>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"10"}></span>
                                  k+
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Mobile Computer Repair
                                </p>
                              </div>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"16"}></span>
                                  k
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Happy Customer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"tab-pane fade"} id={"house"} role={"tabpanel"} aria-labelledby={"house-tab"}>
                      <div className={"row align-items-center gx-0"}>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-thumb"}>
                            <img className={"tw-rounded-xl w-100"} src={"/assets/images/thumbs/choose-us-five-thumb4.png"} alt={"thumb"} />
                          </div>
                        </div>
                        <div className={"col-xl-6"}>
                          <div className={"choose-us-five-wrapper tw-ms-9"}>
                            <div>
                              <h5 className={"tw-mb-4 font-rurbanist tw-text-base"}>
                                "We provide reliable and efficient repair services for mobiles and computers. With 
                                                certified technicians, genuine parts, and transparent pricing, we prioritize your 
                                                satisfaction and device security."
                              </h5>
                              <p className={"font-rurbanist tw-mb-8"}>
                                At our repair center, we prioritize your trust and satisfaction. Our team of certified 
                                                technicians is dedicated to providing high-quality repairs for both mobile devices 
                                                and computers. We use only genuine replacement parts to ensure the longevity 
                                                and performance of your devices. With transparent pricing, quick turnaround 
                                                times, and exceptional customer support, we make the repair process hassle-free 
                                                and reliable. Your device's security and functionality are our top priorities, giving 
                                                you peace of mind with every repair
                              </p>
                            </div>
                            <div className={"d-flex align-items-center justify-content-between"}>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"25"}></span>
                                  +
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Years of Experience
                                </p>
                              </div>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"10"}></span>
                                  k+
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Mobile Computer Repair
                                </p>
                              </div>
                              <div>
                                <h6 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                                  <span className={"font-rurbanist odometer"} data-count={"16"}></span>
                                  k
                                </h6>
                                <p className={"tw-text-base text-capitalize text-body font-rurbanist"}>
                                  Happy Customer
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
            </div>
          </div>
        </section>
        <section className={"gallery-five-area py-120 bg-main-four-50"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7 col-lg-8"}>
                <div className={"section-five-wrapper text-center tw-mb-18"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-subtitle font-heading tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    OUR GALLERY
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Digital Delights: Journey Through Our Gallery
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"gallery-five-wrap align-items-center"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"gallery-five-item"}>
                    <div className={"gallery-five-thumb tw-rounded-2xl position-relative z-1"}>
                      <img className={"tw-rounded-2xl border border-3 border-white w-100"} src={"/assets/images/thumbs/gallery-five-thumb1.jpg"} alt={"thumb"} />
                      <div className={"gallery-five-button position-absolute start-50 translate-middle"}>
                        <a className={"open-popup tw-text-122 text-white"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""}>
                          <i className={"ph ph-camera"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"gallery-five-item"}>
                    <div className={"gallery-five-thumb tw-rounded-2xl position-relative z-1"}>
                      <img className={"tw-rounded-2xl border border-3 border-white w-100"} src={"/assets/images/thumbs/gallery-five-thumb2.jpg"} alt={"thumb"} />
                      <div className={"gallery-five-button position-absolute start-50 translate-middle"}>
                        <a className={"open-popup tw-text-122 text-white"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""}>
                          <i className={"ph ph-camera"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"gallery-five-item"}>
                    <div className={"gallery-five-thumb tw-rounded-2xl position-relative z-1"}>
                      <img className={"tw-rounded-2xl border border-3 border-white w-100"} src={"/assets/images/thumbs/gallery-five-thumb3.jpg"} alt={"thumb"} />
                      <div className={"gallery-five-button position-absolute start-50 translate-middle"}>
                        <a className={"open-popup tw-text-122 text-white"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""}>
                          <i className={"ph ph-camera"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"gallery-five-item"}>
                    <div className={"gallery-five-thumb tw-rounded-2xl position-relative z-1"}>
                      <img className={"tw-rounded-2xl border border-3 border-white w-100"} src={"/assets/images/thumbs/gallery-five-thumb4.jpg"} alt={"thumb"} />
                      <div className={"gallery-five-button position-absolute start-50 translate-middle"}>
                        <a className={"open-popup tw-text-122 text-white"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""}>
                          <i className={"ph ph-camera"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"gallery-five-item"}>
                    <div className={"gallery-five-thumb tw-rounded-2xl position-relative z-1"}>
                      <img className={"tw-rounded-2xl border border-3 border-white w-100"} src={"/assets/images/thumbs/gallery-five-thumb5.jpg"} alt={"thumb"} />
                      <div className={"gallery-five-button position-absolute start-50 translate-middle"}>
                        <a className={"open-popup tw-text-122 text-white"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""}>
                          <i className={"ph ph-camera"}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"work-five-area py-120 position-relative z-1"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-5"}>
                <div className={"section-five-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    how it work
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Simple steps to restore 
                        your device
                  </h2>
                </div>
              </div>
            </div>
            <div className={"work-five-bottom position-relative z-1"}>
              <div className={"row"}>
                <div className={"col-xl-6 col-lg-6"}>
                  <div className={"work-five-wrapper d-flex justify-content-between flex-column tw-h-282-px tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"work-five-text"}>
                      <span className={"font-rurbanist tw-text-2xl fw-medium text-heading tw-rounded-xl tw-py-1 tw-px-5"}>
                        Step1
                      </span>
                    </div>
                    <div className={"work-five-content tw-ms-26"}>
                      <h3 className={"tw-text-2xl fw-semibold tw-mb-4"}>
                        <a className={"hover-text-main-four-600"} href={"javascript:void(0)"}>
                          Get Your Device
                        </a>
                      </h3>
                      <p className={"font-rurbanist"}>
                        Our experts thoroughly assess your device to identify issues and 
                                recommend the best repair or maintenance solutions. We ensure 
                                accurate diagnostics for optimal performance and longevity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-6 col-lg-6"}>
                  <div className={"work-five-thumb text-end tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <a href={"javascript:void(0)"}>
                      <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/wrok-five-thumb1.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                </div>
                <div className={"col-xl-6 col-lg-6"}>
                  <div className={"work-five-thumb tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                    <a href={"javascript:void(0)"}>
                      <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/wrok-five-thumb2.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                </div>
                <div className={"col-xl-6 col-lg-6"}>
                  <div className={"work-five-wrapper two d-flex justify-content-between flex-column tw-h-282-px tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                    <div className={"work-five-text"}>
                      <span className={"font-rurbanist tw-text-2xl fw-medium text-heading tw-rounded-xl tw-py-1 tw-px-5"}>
                        Step2
                      </span>
                    </div>
                    <div className={"work-five-content tw-ms-26"}>
                      <h3 className={"tw-text-2xl fw-semibold tw-mb-4"}>
                        <a className={"hover-text-main-four-600"} href={"javascript:void(0)"}>
                          Bring or Courier Device
                        </a>
                      </h3>
                      <p className={"font-rurbanist"}>
                        Our experts thoroughly assess your device to identify issues and 
                                recommend the best repair or maintenance solutions. We ensure 
                                accurate diagnostics for optimal performance and longevity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-6 col-lg-6"}>
                  <div className={"work-five-wrapper d-flex justify-content-between flex-column tw-h-282-px tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                    <div className={"work-five-text"}>
                      <span className={"font-rurbanist tw-text-2xl fw-medium text-heading tw-rounded-xl tw-py-1 tw-px-5"}>
                        Step3
                      </span>
                    </div>
                    <div className={"work-five-content tw-ms-26"}>
                      <h3 className={"tw-text-2xl fw-semibold tw-mb-4"}>
                        <a className={"hover-text-main-four-600"} href={"javascript:void(0)"}>
                          Tell us your Issue
                        </a>
                      </h3>
                      <p className={"font-rurbanist"}>
                        Our experts thoroughly assess your device to identify issues and 
                                recommend the best repair or maintenance solutions. We ensure 
                                accurate diagnostics for optimal performance and longevity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-6 col-lg-6"}>
                  <div className={"work-five-thumb text-end tw-mb-705"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"600"}>
                    <a href={"javascript:void(0)"}>
                      <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/wrok-five-thumb3.jpg"} alt={"thumb"} />
                    </a>
                  </div>
                </div>
              </div>
              <span className={"work-five-dots one"}></span>
              <span className={"work-five-dots two"}></span>
              <span className={"work-five-dots three"}></span>
            </div>
          </div>
          <div>
            <img className={"work-five-shape position-absolute top-0 start-0 z-n1"} src={"/assets/images/shapes/work-five-shape.png"} alt={"shape"} />
          </div>
        </section>
        <section className={"team-five-area bg-main-four-50 pt-120 tw-pb-22"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7"}>
                <div className={"section-five-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-subtitle font-heading tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    Our Experts
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Meet the Experts Behind Your Device Solutions
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-five-wrapper text-center tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"team-five-thumb"}>
                    <a href={"/team-details"}>
                      <img src={"/assets/images/thumbs/team-five-img1.png"} alt={"img"} />
                    </a>
                  </div>
                  <div className={"team-five-content bg-white tw-transition-3"}>
                    <div className={"text-center"}>
                      <h3 className={"tw-text-2xl fw-bold font-rurbanist tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"/team-details"}>
                          Jessica Brown
                        </a>
                      </h3>
                      <p className={"font-rurbanist tw-mb-4"}>
                        Mobile Technician
                      </p>
                    </div>
                    <ul className={"header-social d-flex justify-content-center align-items-center tw-gap-4"}>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={"team-five-button"}>
                    <a href={"/team-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-black text-white tw-rounded-4xl position-relative z-1 hover-bg-main-four-600"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            View Profile
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-five-wrapper text-center tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"team-five-thumb"}>
                    <a href={"/team-details"}>
                      <img src={"/assets/images/thumbs/team-five-img2.png"} alt={"img"} />
                    </a>
                  </div>
                  <div className={"team-five-content bg-white tw-transition-3"}>
                    <div className={"text-center"}>
                      <h3 className={"tw-text-2xl fw-bold font-rurbanist tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"/team-details"}>
                          James Anderson
                        </a>
                      </h3>
                      <p className={"font-rurbanist tw-mb-4"}>
                        Computer Technician
                      </p>
                    </div>
                    <ul className={"header-social d-flex justify-content-center align-items-center tw-gap-4"}>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={"team-five-button"}>
                    <a href={"/team-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-black text-white tw-rounded-4xl position-relative z-1 hover-bg-main-four-600"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            View Profile
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-five-wrapper text-center tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"team-five-thumb"}>
                    <a href={"/team-details"}>
                      <img src={"/assets/images/thumbs/team-five-img3.png"} alt={"img"} />
                    </a>
                  </div>
                  <div className={"team-five-content bg-white tw-transition-3"}>
                    <div className={"text-center"}>
                      <h3 className={"tw-text-2xl fw-bold font-rurbanist tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"/team-details"}>
                          William Brown
                        </a>
                      </h3>
                      <p className={"font-rurbanist tw-mb-4"}>
                        Service Engineer
                      </p>
                    </div>
                    <ul className={"header-social d-flex justify-content-center align-items-center tw-gap-4"}>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={"team-five-button"}>
                    <a href={"/team-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-black text-white tw-rounded-4xl position-relative z-1 hover-bg-main-four-600"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            View Profile
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-3 col-lg-6 col-md-6"}>
                <div className={"team-five-wrapper text-center tw-mb-7"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                  <div className={"team-five-thumb"}>
                    <a href={"/team-details"}>
                      <img src={"/assets/images/thumbs/team-five-img4.png"} alt={"img"} />
                    </a>
                  </div>
                  <div className={"team-five-content bg-white tw-transition-3"}>
                    <div className={"text-center"}>
                      <h3 className={"tw-text-2xl fw-bold font-rurbanist tw-mb-2"}>
                        <a className={"hover-text-main-four-600"} href={"/team-details"}>
                          Michael Johnson
                        </a>
                      </h3>
                      <p className={"font-rurbanist tw-mb-4"}>
                        Computer Specialist
                      </p>
                    </div>
                    <ul className={"header-social d-flex justify-content-center align-items-center tw-gap-4"}>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-heading hover-bg-main-four-600 hover-text-white"} style={{"background":"#f3f3f3"}} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={"team-five-button"}>
                    <a href={"/team-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-black text-white tw-rounded-4xl position-relative z-1 hover-bg-main-four-600"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            View Profile
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
        <section className={"testimonial-five-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center justify-content-between tw-mb-4"}>
              <div className={"col-xl-6 col-lg-6 col-md-7"}>
                <div className={"section-five-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    testimonials
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Hear from our satisfied 
                        customer today
                  </h2>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-5 col-md-4"}>
                <div className={"testimonial-five-top-wrap d-flex align-items-center justify-content-end tw-gap-5"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div>
                    <h2 className={"banner-counter-title tw-text-122 fw-semibold text-main-four-600 font-rurbanist mb-0 lh-1"}>
                      <span className={"font-rurbanist odometer"} data-count={"5"}></span>
                      .0
                    </h2>
                  </div>
                  <div>
                    <div>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                      <i className={"text-main-two-600 ph ph-star"}></i>
                    </div>
                    <div>
                      <p>
                        1876 reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row tw-mb-4"}>
              <div className={"col-xl-7"}>
                <div className={"overflow-hidden"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"testimonial-five-slide"}>
                    <div className={"swiper testimonial-five-active-two"}>
                      <div className={"swiper-wrapper"}>
                        <div className={"testimonial-five-wrapper d-flex tw-rounded-2xl overflow-hidden swiper-slide"}>
                          <div className={"testimonial-five-thumb"}>
                            <img src={"/assets/images/thumbs/testimonial-five-thumb1.jpg"} alt={"thumb"} />
                          </div>
                          <div className={"testimonial-five-content"}>
                            <div className={"d-flex align-items-center justify-content-between tw-mb-4"}>
                              <div>
                                <h3 className={"font-rurbanist tw-text-2xl"}>
                                  Marko Mkepule
                                </h3>
                                <p className={"font-rurbanist fw-semibold"}>
                                  Repair Specialist
                                </p>
                              </div>
                              <div>
                                <span>
                                  <img src={"/assets/images/icons/testimonial-five-quate.svg"} alt={"quate"} />
                                </span>
                              </div>
                            </div>
                            <div className={"tw-mb-4"}>
                              <p className={"font-rurbanist fw-semibold text-heading"}>
                                "Fantastic service! My phone screen was cracked & 
                                                they had it fixed in no time. Professional, friendly & 
                                                affordable recommend Amazing experience! 
                                                they recovered all my data after my laptop crashed. 
                                                The team was so helpful clearly. 5 stars!
                              </p>
                            </div>
                            <div>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                            </div>
                          </div>
                        </div>
                        <div className={"testimonial-five-wrapper d-flex tw-rounded-2xl overflow-hidden swiper-slide"}>
                          <div className={"testimonial-five-thumb"}>
                            <img src={"/assets/images/thumbs/testimonial-five-thumb2.jpg"} alt={"thumb"} />
                          </div>
                          <div className={"testimonial-five-content"}>
                            <div className={"d-flex align-items-center justify-content-between tw-mb-4"}>
                              <div>
                                <h3 className={"font-rurbanist tw-text-2xl"}>
                                  Marko Mkepule
                                </h3>
                                <p className={"font-rurbanist fw-semibold"}>
                                  Repair Specialist
                                </p>
                              </div>
                              <div>
                                <span>
                                  <img src={"/assets/images/icons/testimonial-five-quate.svg"} alt={"quate"} />
                                </span>
                              </div>
                            </div>
                            <div className={"tw-mb-4"}>
                              <p className={"font-rurbanist fw-semibold text-heading"}>
                                "Fantastic service! My phone screen was cracked & 
                                                they had it fixed in no time. Professional, friendly & 
                                                affordable recommend Amazing experience! 
                                                they recovered all my data after my laptop crashed. 
                                                The team was so helpful clearly. 5 stars!
                              </p>
                            </div>
                            <div>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                              <i className={"tw-text-xl text-main-two-600 ph ph-star"}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-5"}>
                <div className={"testimonial-five-bottom-slide"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"swiper testimonial-five-active-one"}>
                    <div className={"swiper-wrapper"}>
                      <div className={"testimonial-five-bottom-thumb swiper-slide"}>
                        <img className={"cursor-pointer tw-rounded-2xl object-fit-cover w-100"} src={"/assets/images/thumbs/testimonial-five-thumb11.jpg"} alt={"thumb"} />
                      </div>
                      <div className={"testimonial-five-bottom-thumb swiper-slide"}>
                        <img className={"cursor-pointer tw-rounded-2xl object-fit-cover w-100"} src={"/assets/images/thumbs/testimonial-five-thumb22.jpg"} alt={"thumb"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"tw-w-34 tw-h-7 bg-main-four-600 tw-rounded-3xl m-auto position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"testimonial-five-arrow"}>
                    <button className={"slider-prev "} tabIndex={"0"} aria-label={"Previous slide"}>
                      <i className={"ph-bold ph-arrow-left"}></i>
                    </button>
                    <button className={"slider-next "} tabIndex={"0"} aria-label={"Next slide"}>
                      <i className={"ph-bold ph-arrow-right"}></i>
                    </button>
                  </div>
                  <div className={"testimonial-five-dot position-absolute"}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"blog-five-area pt-120 tw-pb-22 bg-main-four-50"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-6"}>
                <div className={"section-five-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-five-subtitle tw-text-lg fw-semibold font-rurbanist text-uppercase text-main-four-600 tw-mb-4"}>
                    Our Blog
                  </div>
                  <h2 className={"section-five-title tw-text-12 font-rurbanist fw-bold tw-char-animation tw-mb-6"}>
                    Read Latest Technology Blog Post
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper blog-five-wrapper tw-me-4 tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-9"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb1.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb1.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                  <div className={"d-flex align-items-center justify-content-between tw-mb-6"}>
                    <div className={"blog-meta"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-user-plus"}></i>
                          </span>
                          By Admin
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-black text-white tw-text-xl hover-bg-main-four-600 hover-text-white"} href={"/blog-details"}>
                        <i className={"ph ph-arrow-up-right"}></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className={"tw-text-2xl tw-mb-6 font-rurbanist"}>
                      <a className={"hover-text-main-four-600"} href={"/blog-details"}>
                        The Latest Trends in Cellphone 
                            Repairs You Need to Know
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper blog-five-wrapper tw-me-4 tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-9"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb2.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb2.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                  <div className={"d-flex align-items-center justify-content-between tw-mb-6"}>
                    <div className={"blog-meta"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-user-plus"}></i>
                          </span>
                          By Admin
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-black text-white tw-text-xl hover-bg-main-four-600 hover-text-white"} href={"/blog-details"}>
                        <i className={"ph ph-arrow-up-right"}></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className={"tw-text-2xl tw-mb-6 font-rurbanist"}>
                      <a className={"hover-text-main-four-600"} href={"/blog-details"}>
                        The Future of Device Repairs 
                            Innovations and Predictions
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-6"}>
                <div className={"blog-wrapper blog-five-wrapper tw-me-4 tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl tw-mb-9"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb3.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-five-thumb3.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                  <div className={"d-flex align-items-center justify-content-between tw-mb-6"}>
                    <div className={"blog-meta"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-user-plus"}></i>
                          </span>
                          By Admin
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2 font-rurbanist"}>
                          <span className={"text-main-four-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a className={"tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-black text-white tw-text-xl hover-bg-main-four-600 hover-text-white"} href={"/blog-details"}>
                        <i className={"ph ph-arrow-up-right"}></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className={"tw-text-2xl tw-mb-6 font-rurbanist"}>
                      <a className={"hover-text-main-four-600"} href={"/blog-details"}>
                        How to Spot Phishing Attempt 
                            on Your Device
                      </a>
                    </h4>
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
