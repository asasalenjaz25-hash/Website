// Ported from index-5.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_index_5_html() {
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
        <section className={"banner-eleven-area bg-img position-relative z-1"} data-background-image={"/assets/images/thumbs/banner-eleven-bg.jpg"}>
          <div className={"container tw-container-1580-px"}>
            <div className={"row"}>
              <div className={"col-xl-7 col-lg-10"}>
                <div className={"banner-eleven-wrapper"}>
                  <div className={"d-flex align-items-center tw-gap-4 tw-mb-8 flex-wrap row-gap-3"}>
                    <div>
                      <div className={"d-flex align-items-center"}>
                        <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-1 border border-3 border-white"}>
                          <img src={"/assets/images/thumbs/banner-client-img1.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                        <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2 tw--ms-16-px z-1 border border-3 border-white"}>
                          <img src={"/assets/images/thumbs/banner-client-img2.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                        <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-3 tw--ms-16-px z-1 border border-3 border-white"}>
                          <img src={"/assets/images/thumbs/banner-client-img3.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                        <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-4 tw--ms-16-px z-1 border border-3 border-white"}>
                          <img src={"/assets/images/thumbs/banner-client-img4.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                        <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-5 tw--ms-16-px border border-3 border-white"}>
                          <img src={"/assets/images/thumbs/banner-client-img5.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span style={{"color":"#184FB4"}}>
                          <i className={"ph ph-star"}></i>
                        </span>
                        <span style={{"color":"#184FB4"}}>
                          <i className={"ph ph-star"}></i>
                        </span>
                        <span style={{"color":"#184FB4"}}>
                          <i className={"ph ph-star"}></i>
                        </span>
                        <span style={{"color":"#184FB4"}}>
                          <i className={"ph ph-star"}></i>
                        </span>
                        <span style={{"color":"#184FB4"}}>
                          <i className={"ph ph-star"}></i>
                        </span>
                      </div>
                      <div>
                        <p className={"mb-0 text-white"}>
                          Trusted by 40+ Clients
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className={"banner-eleven-title tw-text-118 text-white tw-mb-5 tw-char-animation"}>
                      Fast Air Conditioner Replacement Service
                    </h1>
                    <p className={"text-white tw-mb-10 tw-me-6"}>
                      Experience the pinnacle of efficiency and convenience with servicepro's fast air conditioner replacement service. Our team of skilled technicians
                    </p>
                  </div>
                  <div className={"d-inline-flex justify-content-center flex-wrap tw-gap-205"}>
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
        </section>
        <section className={"about-eleven-area py-120"}>
          <div className={"container"}>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6"}>
                <div className={"about-eleven-thumb position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/about-eleven-thumb1.jpg"} alt={"thumb"} />
                  <div className={"about-eleven-content position-absolute bg-main-eight-600 tw-rounded-xl d-flex tw-gap-705 end-0 bottom-0 tw-mb-15 tw-me-10"}>
                    <div className={"about-eleven-icon"}>
                      <span>
                        <img src={"/assets/images/icons/about-eleven-team-icon.svg"} alt={"team"} />
                      </span>
                    </div>
                    <div className={"about-eleven-counter"}>
                      <h2 className={"about-eleven-counter-title tw-text-15 fw-semibold font-heading text-white mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"573"}></span>
                        +
                      </h2>
                      <p className={"about-eleven-counter-paragraph text-white tw-text-xl fw-medium"}>
                        Experienced Workers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6 col-lg-9"}>
                <div className={"about-eleven-wrapper"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"section-eight-wrapper tw-mb-10"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      About our company
                    </span>
                    <h3 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      We ensure your comfort and safety
                    </h3>
                    <p>
                      Your brand deserves more than just attention—it deserves results. That’s why we offer end-to-end creative services that help you engage your audience.
                    </p>
                  </div>
                  <div>
                    <h4 className={"tw-text-505 fw-medium tw-mb-8"}>
                      Some of our Finished Projects That will Amaze Your Industry for your Hardware Servicing
                    </h4>
                    <p className={"tw-mb-8"}>
                      There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks, and General or Strong AI, which possesses human-level intelligence and can handle a wide range of tasks.
                    </p>
                  </div>
                  <div className={"tw-mb-8"}>
                    <ul className={"d-flex flex-column"}>
                      <li className={"d-inline-flex align-items-center tw-gap-3 tw-mb-2 fw-medium"}>
                        <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                          <i className={"ph-bold ph-check-circle"}></i>
                        </span>
                        Secure Transactions
                      </li>
                      <li className={"d-inline-flex align-items-center tw-gap-3 tw-mb-2 fw-medium"}>
                        <span className={"text-main-eight-600 tw-text-lg d-inline-block lh-1"}>
                          <i className={"ph-bold ph-check-circle"}></i>
                        </span>
                        Innovative Solutions
                      </li>
                    </ul>
                  </div>
                  <div className={"about-eleven-wrap d-flex align-items-center tw-gap-4"}>
                    <div className={"about-eleven-button"}>
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
                    <div className={"d-flex align-items-center"}>
                      <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-client-img1.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                      <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2 tw--ms-16-px z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-client-img2.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                      <div className={"tw-w-16 tw-h-16 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-3 tw--ms-16-px z-1 border border-3 border-white"}>
                        <img src={"/assets/images/thumbs/banner-client-img3.png"} alt={"Client Image"} className={"w-100 h-100 object-fit-cover"} />
                      </div>
                    </div>
                    <div>
                      <h5 className={"about-eleven-counter-title tw-text-2xl fw-semibold font-heading text-main-eight-600 mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"2.3"}></span>
                        M+
                      </h5>
                      <p className={"about-eleven-counter-paragraph text-heading"}>
                        5000+ Client reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"counter-ten-area pb-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-4 col-md-5"}>
                <div className={"counter-ten-content"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h2 className={"tw-text-7 tw-mb-4"}>
                    Proven Excellence,
                    <br />
                    Lasting Impact
                  </h2>
                  <div>
                    <a className={"tw-text-lg fw-bold text-heading d-flex tw-gap-2"} href={"/contact"}>
                      Discover More
                      <span className={"fw-semibold"}>
                        <i className={"ph-bold ph-arrow-right"}></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-8 col-lg-8 col-md-7"}>
                <div className={"row"}>
                  <div className={"col-xl-3 col-lg-6 col-md-6 col-sm-6"}>
                    <div className={"about-three-counter about-ten-counter"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                      <h2 className={"about-three-counter-title tw-text-122 fw-semibold font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"975"}></span>
                        +
                      </h2>
                      <p className={"about-three-counter-paragraph fw-medium"}>
                        Project Complete
                      </p>
                    </div>
                  </div>
                  <div className={"col-xl-3 col-lg-6 col-md-6 col-sm-6"}>
                    <div className={"about-three-counter about-ten-counter"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                      <h2 className={"about-three-counter-title tw-text-122 fw-semibold font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"25"}></span>
                        +
                      </h2>
                      <p className={"about-three-counter-paragraph fw-medium"}>
                        Years In Marketing
                      </p>
                    </div>
                  </div>
                  <div className={"col-xl-3 col-lg-6 col-md-6 col-sm-6"}>
                    <div className={"about-three-counter about-ten-counter"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                      <h2 className={"about-three-counter-title tw-text-122 fw-semibold font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"48"}></span>
                        B+
                      </h2>
                      <p className={"about-three-counter-paragraph fw-medium"}>
                        Jobs Completed
                      </p>
                    </div>
                  </div>
                  <div className={"col-xl-3 col-lg-6 col-md-6 col-sm-6"}>
                    <div className={"about-three-counter about-ten-counter"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"600"}>
                      <h2 className={"about-three-counter-title tw-text-122 fw-semibold font-heading text-heading mb-0 lh-1"}>
                        <span className={"font-heading odometer"} data-count={"68"}></span>
                        K
                      </h2>
                      <p className={"about-three-counter-paragraph fw-medium"}>
                        Global Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"service-eleven-area pt-120 position-relative z-1"}>
          <div className={"service-eleven-top"}>
            <div className={"container"}>
              <div className={"row justify-content-center"}>
                <div className={"col-xl-8"}>
                  <div className={"section-eight-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <span className={"section-eight-subtitle text-main-eight-600 text-white fw-medium text-uppercase tw-mb-2"}>
                      OUR SERVICES
                    </span>
                    <h3 className={"section-eight-title fw-medium tw-mb-6 text-white tw-char-animation"}>
                      We are offering Expert and Professional Renovation
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"service-eleven-bottom tw-px-20"}>
            <div className={"container-fluid"}>
              <div className={"row"}>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"service-ten-wrapper bg-white tw-rounded-xl tw-mb-705 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"service-ten-thumb position-relative z-1 tw-mb-4 overflow-hidden tw-rounded-xl"}>
                      <a className={"d-block"} href={"/service-details"}>
                        <img className={"tw-rounded-xl tw-transition-4 w-100"} src={"/assets/images/thumbs/service-ten-thumb1.jpg"} alt={"thumb"} />
                      </a>
                      <div className={"service-ten-icon position-absolute top-0 start-0 tw-mt-205 tw-ms-205"}>
                        <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/service-ten-icon1.svg"} alt={"icon"} />
                        </span>
                      </div>
                    </div>
                    <div className={"service-ten-content tw-pb-4"}>
                      <h3 className={"service-ten-title tw-text-505 tw-mb-4"}>
                        <a className={"hover-text-main-eight-600"} href={"/service-details"}>
                          Repair services
                        </a>
                      </h3>
                      <p className={"service-ten-paragraph fw-medium tw-mb-4"}>
                        Helping individuals and families regain control of their financial future...
                      </p>
                      <div className={"service-ten-list tw-mb-4"}>
                        <ul className={"d-flex flex-column"}>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Full body screening
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Blood pressure and sugar tests
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            BMI and cholesterol analysis
                          </li>
                        </ul>
                      </div>
                      <div className={"service-ten-button"}>
                        <a href={"/service-details"} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center w-100 lh-1 fw-semibold bg-transparent border border-1 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                          <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                            <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                              <span className={"overflow-hidden position-relative d-inline-flex"}>
                                <i className={"ph-bold ph-arrow-right"}></i>
                                <i className={"ph-bold ph-arrow-right"}></i>
                              </span>
                            </span>
                            <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                              <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                Read More
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"service-ten-wrapper bg-white tw-rounded-xl tw-mb-705 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"service-ten-thumb position-relative z-1 tw-mb-4 overflow-hidden tw-rounded-xl"}>
                      <a className={"d-block"} href={"/service-details"}>
                        <img className={"tw-rounded-xl tw-transition-4 w-100"} src={"/assets/images/thumbs/service-ten-thumb2.jpg"} alt={"thumb"} />
                      </a>
                      <div className={"service-ten-icon position-absolute top-0 start-0 tw-mt-205 tw-ms-205"}>
                        <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/service-ten-icon2.svg"} alt={"icon"} />
                        </span>
                      </div>
                    </div>
                    <div className={"service-ten-content tw-pb-4"}>
                      <h3 className={"service-ten-title tw-text-505 tw-mb-4"}>
                        <a className={"hover-text-main-eight-600"} href={"/service-details"}>
                          Maintenance & repair
                        </a>
                      </h3>
                      <p className={"service-ten-paragraph fw-medium tw-mb-4"}>
                        Helping individuals and families regain control of their financial future...
                      </p>
                      <div className={"service-ten-list tw-mb-4"}>
                        <ul className={"d-flex flex-column"}>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Full body screening
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Blood pressure and sugar tests
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            BMI and cholesterol analysis
                          </li>
                        </ul>
                      </div>
                      <div className={"service-ten-button"}>
                        <a href={"/service-details"} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center w-100 lh-1 fw-semibold bg-transparent border border-1 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                          <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                            <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                              <span className={"overflow-hidden position-relative d-inline-flex"}>
                                <i className={"ph-bold ph-arrow-right"}></i>
                                <i className={"ph-bold ph-arrow-right"}></i>
                              </span>
                            </span>
                            <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                              <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                Read More
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"service-ten-wrapper bg-white tw-rounded-xl tw-mb-705 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                    <div className={"service-ten-thumb position-relative z-1 tw-mb-4 overflow-hidden tw-rounded-xl"}>
                      <a className={"d-block"} href={"/service-details"}>
                        <img className={"tw-rounded-xl tw-transition-4 w-100"} src={"/assets/images/thumbs/service-ten-thumb3.jpg"} alt={"thumb"} />
                      </a>
                      <div className={"service-ten-icon position-absolute top-0 start-0 tw-mt-205 tw-ms-205"}>
                        <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/service-ten-icon3.svg"} alt={"icon"} />
                        </span>
                      </div>
                    </div>
                    <div className={"service-ten-content tw-pb-4"}>
                      <h3 className={"service-ten-title tw-text-505 tw-mb-4"}>
                        <a className={"hover-text-main-eight-600"} href={"/service-details"}>
                          Smoke Detectors
                        </a>
                      </h3>
                      <p className={"service-ten-paragraph fw-medium tw-mb-4"}>
                        Helping individuals and families regain control of their financial future...
                      </p>
                      <div className={"service-ten-list tw-mb-4"}>
                        <ul className={"d-flex flex-column"}>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Full body screening
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Blood pressure and sugar tests
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            BMI and cholesterol analysis
                          </li>
                        </ul>
                      </div>
                      <div className={"service-ten-button"}>
                        <a href={"/service-details"} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center w-100 lh-1 fw-semibold bg-transparent border border-1 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                          <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                            <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                              <span className={"overflow-hidden position-relative d-inline-flex"}>
                                <i className={"ph-bold ph-arrow-right"}></i>
                                <i className={"ph-bold ph-arrow-right"}></i>
                              </span>
                            </span>
                            <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                              <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                Read More
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"col-xl-3 col-lg-6 col-md-6"}>
                  <div className={"service-ten-wrapper bg-white tw-rounded-xl tw-mb-705 animation-item"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"500"}>
                    <div className={"service-ten-thumb position-relative z-1 tw-mb-4 overflow-hidden tw-rounded-xl"}>
                      <a className={"d-block"} href={"/service-details"}>
                        <img className={"tw-rounded-xl tw-transition-4 w-100"} src={"/assets/images/thumbs/service-ten-thumb4.jpg"} alt={"thumb"} />
                      </a>
                      <div className={"service-ten-icon position-absolute top-0 start-0 tw-mt-205 tw-ms-205"}>
                        <span className={"tw-w-170 tw-h-170 lh-1 d-inline-flex align-items-center justify-content-center bg-main-eight-600 tw-rounded-xl"}>
                          <img className={"animate__wobble"} src={"/assets/images/icons/service-ten-icon4.svg"} alt={"icon"} />
                        </span>
                      </div>
                    </div>
                    <div className={"service-ten-content tw-pb-4"}>
                      <h3 className={"service-ten-title tw-text-505 tw-mb-4"}>
                        <a className={"hover-text-main-eight-600"} href={"/service-details"}>
                          Smoke Detectors
                        </a>
                      </h3>
                      <p className={"service-ten-paragraph fw-medium tw-mb-4"}>
                        Helping individuals and families regain control of their financial future...
                      </p>
                      <div className={"service-ten-list tw-mb-4"}>
                        <ul className={"d-flex flex-column"}>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Full body screening
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            Blood pressure and sugar tests
                          </li>
                          <li className={"fw-medium d-inline-flex align-items-center tw-gap-3 tw-mb-2"}>
                            <span className={"d-inline-block lh-1 text-main-eight-600 tw-text-xl"}>
                              <i className={"ph-bold ph-check"}></i>
                            </span>
                            BMI and cholesterol analysis
                          </li>
                        </ul>
                      </div>
                      <div className={"service-ten-button"}>
                        <a href={"/service-details"} className={"tw-primary-btn about-nine-border-btn d-inline-flex align-items-center justify-content-center w-100 lh-1 fw-semibold bg-transparent border border-1 border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                          <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                            <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                              <span className={"overflow-hidden position-relative d-inline-flex"}>
                                <i className={"ph-bold ph-arrow-right"}></i>
                                <i className={"ph-bold ph-arrow-right"}></i>
                              </span>
                            </span>
                            <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                              <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                                Read More
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
        </section>
        <section className={"expert-nine-area py-120 expert-eleven-area"}>
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
        <div className={"brand-eight-area pb-120 brand-eleven-area"}>
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
        <section className={"project-three-area pb-120 bg-white"}>
          <div className={"project-three-top"}>
            <div className={"container"}>
              <div className={"row align-items-center justify-content-between"}>
                <div className={"col-xl-7 col-lg-7 col-md-9"}>
                  <div className={"section-eight-wrapper tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      About our company
                    </span>
                    <h3 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Our Latest Best 
                            Pricing Plan
                    </h3>
                  </div>
                </div>
                <div className={"col-xl-4 col-lg-5"}>
                  <div className={"project-three-top-right text-lg-end "} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <a href={"/project-details"} className={"tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-120 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 tw-h-10 z-2 lh-1 text-heading tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            More Projects
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
                        <div className={"project-three-wrapper bg-white tw-rounded-lg tw-p-5 swiper-slide"}>
                          <div className={"project-three-thumb tw-mb-10"}>
                            <a href={"/project-details"}>
                              <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/project-three-thumb1.jpg"} alt={""} />
                            </a>
                          </div>
                          <div className={"d-flex justify-content-between align-items-center"}>
                            <div>
                              <div className={"project-three-tag tw-mb-4"}>
                                <span className={"text-main-eight-600"}>
                                  New York, USA
                                </span>
                              </div>
                              <div>
                                <h3 className={"tw-text-7 fw-medium"}>
                                  <a className={"hover-text-main-eight-600"} href={"/project-details"}>
                                    Multi-Zone Cooling Solution
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div>
                              <a className={"tw-w-12 tw-h-12 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-lg"} href={"/project-details"}>
                                <i className={"ph-bold ph-arrow-up-right"}></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={"project-three-wrapper bg-white tw-rounded-lg tw-p-5 swiper-slide"}>
                          <div className={"project-three-thumb tw-mb-10"}>
                            <a href={"/project-details"}>
                              <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/project-three-thumb2.jpg"} alt={""} />
                            </a>
                          </div>
                          <div className={"d-flex justify-content-between align-items-center"}>
                            <div>
                              <div className={"project-three-tag tw-mb-4"}>
                                <span className={"text-main-eight-600"}>
                                  New York, USA
                                </span>
                              </div>
                              <div>
                                <h3 className={"tw-text-7 fw-medium"}>
                                  <a className={"hover-text-main-eight-600"} href={"/project-details"}>
                                    Hotel HVAC Maintenance
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div>
                              <a className={"tw-w-12 tw-h-12 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-lg"} href={"/project-details"}>
                                <i className={"ph-bold ph-arrow-up-right"}></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={"project-three-wrapper bg-white tw-rounded-lg tw-p-5 swiper-slide"}>
                          <div className={"project-three-thumb tw-mb-10"}>
                            <a href={"/project-details"}>
                              <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/project-three-thumb3.jpg"} alt={""} />
                            </a>
                          </div>
                          <div className={"d-flex justify-content-between align-items-center"}>
                            <div>
                              <div className={"project-three-tag tw-mb-4"}>
                                <span className={"text-main-eight-600"}>
                                  New York, USA
                                </span>
                              </div>
                              <div>
                                <h3 className={"tw-text-7 fw-medium"}>
                                  <a className={"hover-text-main-eight-600"} href={"/project-details"}>
                                    Office HVAC Solution
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div>
                              <a className={"tw-w-12 tw-h-12 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-lg"} href={"/project-details"}>
                                <i className={"ph-bold ph-arrow-up-right"}></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={"project-three-wrapper bg-white tw-rounded-lg tw-p-5 swiper-slide"}>
                          <div className={"project-three-thumb tw-mb-10"}>
                            <a href={"/project-details"}>
                              <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/project-three-thumb4.jpg"} alt={""} />
                            </a>
                          </div>
                          <div className={"d-flex justify-content-between align-items-center"}>
                            <div>
                              <div className={"project-three-tag tw-mb-4"}>
                                <span className={"text-main-eight-600"}>
                                  New York, USA
                                </span>
                              </div>
                              <div>
                                <h3 className={"tw-text-7 fw-medium"}>
                                  <a className={"hover-text-main-eight-600"} href={"/project-details"}>
                                    Home HVAC Solution
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div>
                              <a className={"tw-w-12 tw-h-12 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-lg"} href={"/project-details"}>
                                <i className={"ph-bold ph-arrow-up-right"}></i>
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
        </section>
        <div className={"video-area video-eleven-area mb-0"}>
          <div className={"container tw-container-1750-px"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-12"}>
                <div className={"video-bg text-center position-relative"}>
                  <img className={"tw-rounded-xl"} src={"/assets/images/thumbs/video-bg.jpg"} alt={"bg"} />
                  <div className={"video-button position-absolute start-50 translate-middle"}>
                    <a className={"video-btn video-eleven-btn open-popup tw-w-28 tw-h-28 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle text-white bg-main-eight-600 tw-text-8 position-relative z-1"} href={"https://www.youtube.com/watch?v=Fvae8nxzVz4"} data-fancybox={"gallery"} data-caption={""}>
                      <i className={"ph-bold ph-play"}></i>
                      <span className={"ripple"}></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"pricing-eleven-area tw-pb-22"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7 col-lg-10"}>
                <div className={"section-eight-wrapper text-center tw-mb-14"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    OUR PRICING PLAN
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    Choose from Flexible Consulting Packages Today
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row gx-0"}>
              <div className={"col-xl-4 col-lg-6 col-lg-6"}>
                <div className={"pricing-eleven-wrapper bg tw-mb-705 tw-rounded-xl tw-px-10 tw-pt-8 tw-pb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"d-flex align-items-center justify-content-between tw-mb-8"}>
                    <div>
                      <span>
                        <img src={"/assets/images/icons/pricing-eleven-icon1.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-lg fw-semibold border border-main-eight-600 tw-rounded-4xl tw-py-2 tw-px-7"}>
                        Basic Plan
                      </h3>
                    </div>
                  </div>
                  <div className={"d-flex align-items-end tw-gap-2 tw-mb-2"}>
                    <div className={"d-flex tw-gap-2"}>
                      <div>
                        <span className={"tw-text-7 fw-bold text-heading"}>
                          $
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-17 fw-bold lh-1"}>
                          299
                        </h3>
                      </div>
                    </div>
                    <h4 className={"tw-text-base tw-mb-2"}>
                      /per month
                    </h4>
                  </div>
                  <div className={"tw-mb-8"}>
                    <p className={"fw-medium"}>
                      For scaling startups ready to expand rapidly and confidently.
                    </p>
                  </div>
                  <div className={"service-eight-button tw-mb-8"}>
                    <a href={"/pricing"} className={"tw-primary-btn d-inline-flex align-items-center w-100 justify-content-center lh-1 fw-semibold bg-transparent border border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            Discover More
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <ul>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Quick Response Time
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Filter Replacement
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Full System Diagnostic
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Available 24/7
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        30 Days Warranty
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Save 5% On Accesories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-lg-6"}>
                <div className={"pricing-eleven-wrapper bg-main-eight-600 tw-mb-705 tw-rounded-xl tw-px-10 tw-pt-8 tw-pb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"d-flex align-items-center justify-content-between tw-mb-8"}>
                    <div>
                      <span>
                        <img src={"/assets/images/icons/pricing-eleven-icon2.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-lg fw-semibold border border-white tw-rounded-4xl text-white tw-py-2 tw-px-7"}>
                        Advanced Plan
                      </h3>
                    </div>
                  </div>
                  <div className={"d-flex align-items-end tw-gap-2 tw-mb-2"}>
                    <div className={"d-flex tw-gap-2"}>
                      <div>
                        <span className={"tw-text-7 fw-bold text-white"}>
                          $
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-17 fw-bold lh-1 text-white"}>
                          499
                        </h3>
                      </div>
                    </div>
                    <h4 className={"tw-text-base tw-mb-2 text-white"}>
                      /per month
                    </h4>
                  </div>
                  <div className={"tw-mb-8"}>
                    <p className={"fw-medium text-white"}>
                      For scaling startups ready to expand rapidly and confidently.
                    </p>
                  </div>
                  <div className={"service-eight-button tw-mb-8"}>
                    <a href={"/pricing"} className={"tw-primary-btn d-inline-flex align-items-center w-100 justify-content-center lh-1 fw-semibold bg-white border border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            Discover More
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <ul>
                      <li className={"d-flex align-items-center tw-gap-2 text-white tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check-white.svg"} alt={"check"} />
                        </span>
                        Quick Response Time
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-white tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check-white.svg"} alt={"check"} />
                        </span>
                        Filter Replacement
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-white tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check-white.svg"} alt={"check"} />
                        </span>
                        Full System Diagnostic
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-white tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check-white.svg"} alt={"check"} />
                        </span>
                        Available 24/7
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-white tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check-white.svg"} alt={"check"} />
                        </span>
                        30 Days Warranty
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-white"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check-white.svg"} alt={"check"} />
                        </span>
                        Save 5% On Accesories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-lg-6"}>
                <div className={"pricing-eleven-wrapper bg tw-mb-705 tw-rounded-xl tw-px-10 tw-pt-8 tw-pb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"d-flex align-items-center justify-content-between tw-mb-8"}>
                    <div>
                      <span>
                        <img src={"/assets/images/icons/pricing-eleven-icon3.svg"} alt={"icon"} />
                      </span>
                    </div>
                    <div>
                      <h3 className={"tw-text-lg fw-semibold border border-main-eight-600 tw-rounded-4xl tw-py-2 tw-px-7"}>
                        Premium Plan
                      </h3>
                    </div>
                  </div>
                  <div className={"d-flex align-items-end tw-gap-2 tw-mb-2"}>
                    <div className={"d-flex tw-gap-2"}>
                      <div>
                        <span className={"tw-text-7 fw-bold text-heading"}>
                          $
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-17 fw-bold lh-1"}>
                          899
                        </h3>
                      </div>
                    </div>
                    <h4 className={"tw-text-base tw-mb-2"}>
                      /per month
                    </h4>
                  </div>
                  <div className={"tw-mb-8"}>
                    <p className={"fw-medium"}>
                      For scaling startups ready to expand rapidly and confidently.
                    </p>
                  </div>
                  <div className={"service-eight-button tw-mb-8"}>
                    <a href={"/pricing"} className={"tw-primary-btn d-inline-flex align-items-center w-100 justify-content-center lh-1 fw-semibold bg-transparent border border-main-eight-600 text-white tw-rounded-4xl position-relative z-1"}>
                      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
                        <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-white tw-text-lg"}>
                          <span className={"overflow-hidden position-relative d-inline-flex"}>
                            <i className={"ph-bold ph-arrow-right"}></i>
                            <i className={"ph-bold ph-arrow-right"}></i>
                          </span>
                        </span>
                        <span className={"btn_text d-inline-flex overflow-hidden text-heading"}>
                          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
                            Discover More
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <ul>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Quick Response Time
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Filter Replacement
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Full System Diagnostic
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Available 24/7
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading tw-mb-3"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        30 Days Warranty
                      </li>
                      <li className={"d-flex align-items-center tw-gap-2 text-heading"}>
                        <span>
                          <img src={"/assets/images/icons/pricing-eleven-check.svg"} alt={"check"} />
                        </span>
                        Save 5% On Accesories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"testimonial-three-area testimonial-eleven-area py-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-6"}>
                <div className={"testimonial-three-left d-flex justify-content-between flex-column h-100"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"section-eight-wrapper tw-mb-14"}>
                    <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                      Testimonials
                    </span>
                    <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                      Client Experiences That 
                            Speak for Themselves
                    </h2>
                  </div>
                  <div className={"testimonial-three-button-wrap d-flex tw-gap-6"}>
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
                              Read All Testimonial
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className={"testimonial-three-google d-flex align-items-center tw-gap-5"}>
                      <div>
                        <span className={"tw-w-15 tw-h-15 lh-1 d-inline-flex justify-content-center align-items-center rounded-circle"} style={{"backgroundColor":"#D3E0F8"}}>
                          <img src={"/assets/images/icons/testimonial-three-google.svg"} alt={"google"} />
                        </span>
                      </div>
                      <div>
                        <h3 className={"tw-text-base"}>
                          4.9
                        </h3>
                        <p>
                          Google Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xl-6"}>
                <div className={"testimonial-slide position-relative z-index-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"testimonial-three-active swiper-container"}>
                    <div className={"testimonial-swiper-wrapper swiper-wrapper"}>
                      <div className={"testimonial-wrapper testimonial-three-wrapper bg-white tw-py-9 tw-px-11 tw-rounded-lg swiper-slide"}>
                        <div className={"d-flex align-items-center justify-content-between tw-mb-7"}>
                          <div>
                            <span>
                              <img src={"/assets/images/icons/testimonial-eleven-quate.svg"} alt={"quate"} />
                            </span>
                          </div>
                          <div>
                            <h4 className={"tw-text-lg fw-medium tw-mb-2"}>
                              Rating Stars
                            </h4>
                            <div>
                              <i className={"tw-text-lg ph-bold ph-star text-main-two-600"}></i>
                              <i className={"tw-text-lg ph-bold ph-star text-main-two-600"}></i>
                              <i className={"tw-text-lg ph-bold ph-star text-main-two-600"}></i>
                              <i className={"tw-text-lg ph-bold ph-star text-main-two-600"}></i>
                              <i className={"tw-text-lg ph-bold ph-star text-main-two-600"}></i>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className={"tw-mb-6"}>
                            Experience unparalleled quality and craftsmanship with Sarvicepro, the ultimate solution for all your home maintenance needs. Our team of skilled professionals is dedicated to providing fast, reliable, and affordable service that will leave your house feeling like new. With a commitment to excellence and attention to detail, we ensure that every job is completed to the highest standards,
                          </p>
                        </div>
                        <div className={"d-flex justify-content-between align-items-center"}>
                          <div className={"d-flex align-items-center tw-gap-4"}>
                            <div className={"testimonial-three-img"}>
                              <img src={"/assets/images/thumbs/testi-three-img.png"} alt={"img"} />
                            </div>
                            <div>
                              <h5 className={"tw-text-base"}>
                                Amelia Johnson
                              </h5>
                              <p>
                                Marketing Director
                              </p>
                            </div>
                          </div>
                          <div className={"testimonial-three-arrow testimonial-eleven-arrow"}>
                            <button className={"slider-prev"} tabIndex={"0"} aria-label={"Previous slide"}>
                              <i className={"ph-bold ph-arrow-left"}></i>
                            </button>
                            <button className={"slider-next"} tabIndex={"0"} aria-label={"Next slide"}>
                              <i className={"ph-bold ph-arrow-right"}></i>
                            </button>
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
        <section className={"blog-three-area tw-pb-22 @@blogipClass"}>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              <div className={"col-xl-7"}>
                <div className={"section-eight-wrapper text-center tw-mb-14"}>
                  <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                    Latest Post
                  </span>
                  <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                    Air Conditioning Tips And Maintenance Updates
                  </h2>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-xl-4 col-lg-6"}>
                <div className={"blog-wrapper blog-three-wrapper blog-eleven-wrapper tw-me-4 tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <div className={"blog-three-top"}>
                    <div className={"blog-meta tw-mb-6"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-chats-circle"}></i>
                          </span>
                          2 Comment
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className={"tw-text-2xl tw-mb-6"}>
                        <a className={"hover-text-main-eight-600"} href={"/blog-details"}>
                          Expert AC Repair Solutions For 
                                Smooth Cooling All Season
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-3 tw-mb-6"}>
                    <div className={"blog-three-img blog-eleven-img"}>
                      <img className={"rounded-circle tw-p-1"} src={"/assets/images/thumbs/blog-three-img.png"} alt={"img"} />
                    </div>
                    <div>
                      <h4 className={"tw-text-base"}>
                        Marko Mkepule
                      </h4>
                      <p>
                        CEO & President
                      </p>
                    </div>
                  </div>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-three-thumb1.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-three-thumb1.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6"}>
                <div className={"blog-wrapper blog-three-wrapper blog-eleven-wrapper tw-me-4 tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"blog-three-top"}>
                    <div className={"blog-meta tw-mb-6"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-chats-circle"}></i>
                          </span>
                          2 Comment
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className={"tw-text-2xl tw-mb-6"}>
                        <a className={"hover-text-main-eight-600"} href={"/blog-details"}>
                          Choosing the Right AC Size for 
                                Your Home
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-3 tw-mb-6"}>
                    <div className={"blog-three-img blog-eleven-img"}>
                      <img className={"rounded-circle tw-p-1"} src={"/assets/images/thumbs/blog-three-img.png"} alt={"img"} />
                    </div>
                    <div>
                      <h4 className={"tw-text-base"}>
                        Marko Mkepule
                      </h4>
                      <p>
                        CEO & President
                      </p>
                    </div>
                  </div>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-three-thumb2.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-three-thumb2.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6"}>
                <div className={"blog-wrapper blog-three-wrapper blog-eleven-wrapper tw-me-4 tw-mb-8 tw-rounded-xl tw-p-5 tw-pt-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"400"}>
                  <div className={"blog-three-top"}>
                    <div className={"blog-meta tw-mb-6"}>
                      <ul className={"d-flex align-items-center tw-gap-5"}>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-chats-circle"}></i>
                          </span>
                          2 Comment
                        </li>
                        <li className={"d-inline-flex align-items-center tw-gap-2"}>
                          <span className={"text-main-eight-600 tw-text-xl d-inline-block lh-1"}>
                            <i className={"ph ph-calendar"}></i>
                          </span>
                          23, August 2026
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className={"tw-text-2xl tw-mb-6"}>
                        <a className={"hover-text-main-eight-600"} href={"/blog-details"}>
                          7 Easy Fixes for Common Air Conditioner Problems
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center tw-gap-3 tw-mb-6"}>
                    <div className={"blog-three-img blog-eleven-img"}>
                      <img className={"rounded-circle tw-p-1"} src={"/assets/images/thumbs/blog-three-img.png"} alt={"img"} />
                    </div>
                    <div>
                      <h4 className={"tw-text-base"}>
                        Marko Mkepule
                      </h4>
                      <p>
                        CEO & President
                      </p>
                    </div>
                  </div>
                  <div className={"blog-main-thumb position-relative overflow-hidden tw-rounded-2xl"}>
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-three-thumb3.jpg"} alt={"blog"} />
                    <img className={"w-img w-100 tw-rounded-xl tw-transition-5"} src={"/assets/images/thumbs/blog-three-thumb3.jpg"} alt={"blog"} />
                    <a className={"blog-card-image-link d-flex align-items-center justify-content-center w-100 h-100 position-absolute z-1 top-0 start-0"} href={"/blog-details"}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"contact-eleven-area py-120"}>
          <div className={"container"}>
            <div className={"position-relative z-1"}>
              <div className={"row align-items-end"}>
                <div className={"col-xl-6"}>
                  <div className={"contact-two-wrapper contact-three-wrapper bg-white tw-py-15 tw-ps-10 tw-pe-5 tw-rounded-xl position-relative z-1"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <div className={"section-eight-wrapper tw-mb-14"}>
                      <span className={"section-eight-subtitle text-main-eight-600 fw-medium text-uppercase tw-mb-2"}>
                        Schedule consultation
                      </span>
                      <h2 className={"section-eight-title fw-medium tw-mb-6 tw-char-animation"}>
                        Let’s Connect
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
                <div className={"col-xl-6"}>
                  <div className={"bg-white d-flex align-items-center tw-gap-5 tw-py-3 tw-rounded-4xl tw-ps-3 tw-pe-15 tw-mb-11 tw-me-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div>
                      <a className={"tw-w-15 tw-h-15 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-2xl"} href={"tel:123456789"}>
                        <i className={"ph ph-phone-call"}></i>
                      </a>
                    </div>
                    <div>
                      <a className={"text-heading hover-text-main-eight-600"} href={"tel:123456789"}>
                        Call us at (123) 456 7890 or fill out our form, and we’ll contact you within one business day.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"contact-three-thumb position-absolute end-0 top-0 z-n1 h-100"}>
                <img className={"object-fit-cover h-100 tw-rounded-xl"} src={"/assets/images/thumbs/contact-three-thumb.jpg"} alt={"thumb"} />
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
