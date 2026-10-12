// The theme's tw-primary-btn (arrow slides in on hover), as a link or a button.
// tone: "blue" (default) or "gold".
export default function PrimaryButton({ href, children, tone = "blue", type = "button", className = "", ...rest }) {
  const bg = tone === "gold" ? "bg-main-two-600" : "bg-main-eight-600";
  const cls = `tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold ${bg} text-white tw-rounded-4xl position-relative z-1 ${className}`;
  const inner = (
    <span className="btn_inner position-relative z-1 w-100 text-center">
      <span className="btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg" aria-hidden="true">
        <span className="overflow-hidden position-relative d-inline-flex">
          <i className="ph-bold ph-arrow-right"></i>
          <i className="ph-bold ph-arrow-right"></i>
        </span>
      </span>
      <span className="btn_text d-inline-flex overflow-hidden text-white">
        <span className="d-flex align-items-center tw-transition-5">{children}</span>
      </span>
    </span>
  );

  return href ? (
    <a href={href} className={cls} {...rest}>
      {inner}
    </a>
  ) : (
    <button type={type} className={cls} {...rest}>
      {inner}
    </button>
  );
}
