// Small shared pieces for ElectricalPage, CivilPage and FitOutPage.
// They render exactly the template's markup (same classes), so the theme's
// hover/animation CSS keeps working; only the text and href come from props.

// The template's "tw-primary-btn" pill with the sliding double arrow.
export function TwBtn({
  href,
  className,
  iconColor = "text-heading",
  textColor = "text-white",
  children,
  ...rest
}) {
  return (
    <a href={href} className={className} {...rest}>
      <span className={"btn_inner position-relative z-1 w-100 text-center"}>
        <span className={`btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 ${iconColor} tw-text-lg`}>
          <span className={"overflow-hidden position-relative d-inline-flex"} aria-hidden={"true"}>
            <i className={"ph-bold ph-arrow-right"}></i>
            <i className={"ph-bold ph-arrow-right"}></i>
          </span>
        </span>
        <span className={`btn_text d-inline-flex overflow-hidden ${textColor}`}>
          <span className={"d-flex align-items-center tw-transition-5 text-capitalize"}>
            {children}
          </span>
        </span>
      </span>
    </a>
  );
}

// The template's round "tw-btn-circle" button (index-10).
export function CircleBtn({ href, children }) {
  return (
    <a className={"tw-btn-circle tw-hover-btn-item border border-2 border-main-six-600 tw-hover-btn bg-main-six-600"} href={href}>
      <span className={"d-flex flex-column justify-content-center"}>
        <span className={"tw-btn-circle-icon text-white tw-text-8"}>
          <img src={"/assets/images/icons/f4-arrow-btn.svg"} alt={""} />
        </span>
        <span className={"text-white fw-bold tw-text-lg font-rethink text-center tw-transition-3"}>
          {children}
        </span>
      </span>
      <i className={"tw-btn-circle-dot"}></i>
    </a>
  );
}
