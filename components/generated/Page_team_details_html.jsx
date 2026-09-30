// Ported from team-details.html — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
import SiteFooter from "@/components/SiteFooter";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteHeader from "@/components/SiteHeader";

export default function Page_team_details_html() {
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
                    Team Deatails
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
                        Team Deatails
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
        <section className={"team-details-area pb-120"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-xl-12"}>
                <div className={"team-details-wrapper d-flex align-items-center tw-gap-15 tw-mb-16"}>
                  <div className={"team-details-thumb"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                    <img className={"tw-rounded-lg"} src={"/assets/images/thumbs/team-details-thumb.jpg"} alt={"thumb"} />
                  </div>
                  <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                    <div className={"tw-mb-8"}>
                      <h2 className={"text-main-eight-600 fw-normal tw-text-base tw-mb-4"}>
                        Design Specialist
                      </h2>
                      <h3 className={"tw-text-9 fw-medium text-capitalize tw-mb-4"}>
                        Victoria Young
                      </h3>
                      <p>
                        Vehicula duis tempus porttitor lacus morbi pharetra neque pretium enim urna riiculus nibh, mus class arcu magna ornare orci mollis. Posuere quam eget non mollis platea habitasse cras feugiat.
                      </p>
                    </div>
                    <div className={"d-flex tw-gap-6 tw-mb-10 flex-wrap"}>
                      <div className={"d-flex tw-gap-305 align-items-center"}>
                        <div>
                          <a className={"tw-w-14 tw-h-14 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-main-eight-600 rounded-circle tw-text-2xl hover-bg-main-eight-600 hover-text-white"} href={"mailto:example@mail.com"}>
                            <i className={"ph ph-envelope"}></i>
                          </a>
                        </div>
                        <div>
                          <span>
                            Email Address
                          </span>
                          <a className={"tw-text-lg fw-medium text-heading hover-text-main-eight-600 d-block"} href={"mailto:example@mail.com"}>
                            example@mail.com
                          </a>
                        </div>
                      </div>
                      <div className={"d-flex tw-gap-305 align-items-center"}>
                        <div>
                          <a className={"tw-w-14 tw-h-14 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-main-eight-600 rounded-circle tw-text-2xl hover-bg-main-eight-600 hover-text-white"} href={"tel:+123215421568"}>
                            <i className={"ph ph-phone-call"}></i>
                          </a>
                        </div>
                        <div>
                          <span>
                            Phone Number
                          </span>
                          <a className={"tw-text-lg fw-medium text-heading hover-text-main-eight-600 d-block"} href={"tel:+123215421568"}>
                            +123 215421568
                          </a>
                        </div>
                      </div>
                      <div className={"d-flex tw-gap-305 align-items-center"}>
                        <div>
                          <a className={"tw-w-14 tw-h-14 lh-1 d-inline-flex justify-content-center align-items-center bg-white text-main-eight-600 rounded-circle tw-text-2xl hover-text-main-eight-600"} href={"tel:+123215421568"}>
                            <i className={"ph ph-map-pin"}></i>
                          </a>
                        </div>
                        <div>
                          <span>
                            Phone Number
                          </span>
                          <p className={"tw-text-lg fw-medium text-heading hover-text-heading d-block mb-0"}>
                            455 West Orchard Street
                          </p>
                        </div>
                      </div>
                    </div>
                    <ul className={"header-social d-flex align-items-center tw-gap-4"}>
                      <li className={"tw-text-lg fw-semibold text-heading"}>
                        Follow Us:
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle tw-text-base text-main-eight-600 border border-main-eight-600 rounded-circle hover-bg-main-eight-600 hover-text-white hover-border-main-eight-600"} href={"https://www.facebook.com"}>
                          <i className={"ph-bold ph-facebook-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle tw-text-base text-main-eight-600 border border-main-eight-600 rounded-circle hover-bg-main-eight-600 hover-text-white hover-border-main-eight-600"} href={"https://www.twitter.com"}>
                          <i className={"ph-bold ph-twitter-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle tw-text-base text-main-eight-600 border border-main-eight-600 rounded-circle hover-bg-main-eight-600 hover-text-white hover-border-main-eight-600"} href={"https://www.linkedin.com"}>
                          <i className={"ph-bold ph-instagram-logo"}></i>
                        </a>
                      </li>
                      <li>
                        <a className={"tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle tw-text-base text-main-eight-600 border border-main-eight-600 rounded-circle hover-bg-main-eight-600 hover-text-white hover-border-main-eight-600"} href={"https://www.pinterest.com"}>
                          <i className={"ph-bold ph-pinterest-logo"}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={"row align-items-center"}>
              <div className={"col-xl-6"}>
                <div className={"team-details-left tw-me-20 tw-mb-10"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"200"}>
                  <h3 className={"tw-text-605 fw-medium tw-mb-6"}>
                    Professional Skills
                  </h3>
                  <p className={"tw-mb-6"}>
                    Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip
                  </p>
                  <p>
                    Experienced in housekeeping and office cleaning, I possess a strong work ethic and exceptional attention to detail, ensuring immaculate and hygienic results in a wide range of environments. I am skilled in using various cleaning tools and products safely and efficiently.
                  </p>
                </div>
              </div>
              <div className={"col-xl-6"}>
                <div className={"tw-mb-8"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={"300"}>
                  <div className={"tw-mb-605"}>
                    <div>
                      <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                        Office Cleaning
                      </span>
                    </div>
                    <div className={"progress-container"} data-percentage={"85"}>
                      <div className={"progress active"}></div>
                      <div className={"percentage active"}>
                        0%
                      </div>
                    </div>
                  </div>
                  <div className={"tw-mb-605"}>
                    <div>
                      <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                        Home Cleaning
                      </span>
                    </div>
                    <div className={"progress-container"} data-percentage={"95"}>
                      <div className={"progress active"}></div>
                      <div className={"percentage active"}>
                        0%
                      </div>
                    </div>
                  </div>
                  <div className={"tw-mb-605"}>
                    <div>
                      <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                        Window Cleaning
                      </span>
                    </div>
                    <div className={"progress-container"} data-percentage={"65"}>
                      <div className={"progress active"}></div>
                      <div className={"percentage active"}>
                        0%
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className={"d-block fw-medium tw-text-lg text-heading tw-mb-2"}>
                        Bedroom Cleaning
                      </span>
                    </div>
                    <div className={"progress-container"} data-percentage={"75"}>
                      <div className={"progress active"}></div>
                      <div className={"percentage active"}>
                        0%
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
