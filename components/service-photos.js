// One photo per service, keyed by SERVICES slug in components/site.js. These are
// ASAS's own project photos (components/asas-photos.js), except HVAC, which has
// no ASAS photo yet and keeps an AC-installation stock photo.
import { asas } from "./asas-photos";

export const SERVICE_PHOTOS = {
  "fit-out": asas("fitout-lounge"),
  civil: asas("office-mezzanine"),
  joinery: asas("joinery-hieroglyph-cabinets"),
  electrical: asas("electrical-panel"),
  plumbing: asas("plumbing-valves"),
  hvac: "/assets/images/thumbs/banner-three-bg.jpg",
  "fire-fighting": asas("fire-sprinkler-valve"),
  "low-current": asas("cctv-monitor"),
  "planning-architecture": asas("office-open-plan"),
  "villa-works": asas("villa-exterior"),
  "ev-chargers": asas("akoya-ev-charging"),
};
