// ASAS's own project photos (supplied 2026-10-15). Originals are 16:9
// (1672 × 941) PNGs; optimised 1440px WebP copies live in
// /public/assets/images/asas. Every source photo is landscape: portrait and
// square slots crop them with object-fit: cover (see `cover()`).

export const asas = (slug) => `/assets/images/asas/${slug}.webp`;

/** Inline style that fills a slot of the given aspect ratio, cropping the photo. */
export const cover = (aspect, position = "center") => ({
  width: "100%",
  height: "auto",
  aspectRatio: aspect,
  objectFit: "cover",
  objectPosition: position,
});

// Photos of a named project in components/projects.js, keyed by serial number.
// Only projects whose photos show their own signage or name are listed.
export const PROJECT_PHOTOS = {
  1: ["jans-noodles-storefront", "jans-noodles-interior", "jans-noodles-counter", "jans-noodles-dining"],
  2: ["fishys-storefront", "fishys-interior", "fishys-cafe"],
  5: ["dubai-heights-academy", "dubai-heights-academy-facade"],
  13: ["master-polish-storefront"],
  19: ["akoya-ev-charging"],
  26: ["desco-printing", "desco-print-room"],
  27: ["torino-storefront", "torino-interior"],
  34: ["graffio-salon-storefront"],
  52: ["jeeves-storefront", "jeeves-sign", "jeeves-counter"],
};

// Other ASAS photos by sector, used for projects without their own photo.
export const SECTOR_PHOTOS = {
  offices: ["office-open-plan", "office-lobby", "office-conference", "office-executive-lounge", "office-reception", "office-reception-geometric", "office-corridor-murals", "office-cafeteria"],
  restaurants: ["cafe-graffiti-plants", "cafe-hanging-plants", "cafe-colourful", "cafe-industrial", "cafe-city-mural", "cafe-night", "cafe-warm-wood", "cafe-teal", "lounge-cafe-warm"],
  retail: ["retail-fashion-storefront", "retail-fashion-interior", "retail-eyewear", "retail-showroom", "torino-interior"],
  salons: ["salon-hair", "salon-arched-mirrors", "salon-styling-stations", "salon-shampoo", "salon-nails", "spa-pedicure", "barbershop-interior"],
  laundries: ["jeeves-storefront", "jeeves-counter"],
  warehouses: ["switchgear-room", "cable-spool"],
  "education-health": ["clinic-treatment", "clinic-waiting", "training-kitchen-lab"],
  residential: ["apartment-building"],
  villas: ["villa-exterior", "villa-arched-entrance", "villa-courtyard", "villa-courtyard-sunlit", "villa-tropical-garden", "villa-garden-path", "villa-backyard", "courtyard-pergola"],
  ev: ["akoya-ev-charging", "ev-charging-bays", "ev-charger-kiosk"],
  other: ["auto-workshop", "garage-showroom", "garage-detailing"],
};

const SECTOR_WORDS = {
  offices: "office",
  restaurants: "restaurant or café",
  retail: "shop",
  salons: "salon",
  laundries: "laundry",
  warehouses: "warehouse electrical",
  "education-health": "clinic or school",
  residential: "residential building",
  villas: "villa",
  ev: "EV charger",
  other: "garage",
};

/**
 * The photo for a project card: its own photo when ASAS supplied one, else an
 * ASAS photo from the same sector (the alt text then says it is an example).
 */
export function projectPhoto(project, index = 0) {
  const own = PROJECT_PHOTOS[project.sn];
  if (own) {
    return { src: asas(own[0]), alt: `${project.name}, ${project.type.toLowerCase()} by ASAS in ${project.location}`, own: true };
  }
  const pool = SECTOR_PHOTOS[project.sector] || SECTOR_PHOTOS.offices;
  const slug = pool[(project.sn + index) % pool.length];
  return { src: asas(slug), alt: `Example of an ASAS ${SECTOR_WORDS[project.sector] || ""} fit-out`.replace("  ", " "), own: false };
}
