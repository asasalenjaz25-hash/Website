// One on-brand photo per service, chosen from the MEP / trades stock already in
// /public/assets/images/thumbs. They stand in for the template's cleaning
// photos and its home-page screenshots until ASAS supplies its own photos
// (design-system/image-manifest). Keyed by SERVICES slug in components/site.js.

const T = (file) => `/assets/images/thumbs/${file}`;

export const SERVICE_PHOTOS = {
  "fit-out": T("project-four-thumb1.jpg"),
  civil: T("about-ten-thumb.jpg"),
  joinery: T("project-four-thumb3.jpg"),
  electrical: T("blog-seven-thumb2.jpg"),
  plumbing: T("service-eight-thumb2.jpg"),
  hvac: T("banner-three-bg.jpg"),
  "fire-fighting": T("about-three-thumb1.jpg"),
  "low-current": T("project-seven-thumb4.jpg"),
  "planning-architecture": T("service-four-thumb3.jpg"),
  "villa-works": T("project-six-thumb3.jpg"),
  "ev-chargers": T("project-seven-thumb6.jpg"),
};
