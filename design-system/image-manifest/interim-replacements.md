# Interim replacements (2026-10-12, updated 2026-10-15)

The template's cleaning, laundry and fake-brand placeholders have been taken off the pages. Until ASAS sends real photos, each slot holds one of two kinds of stand-in:

- **a Hairline figure:** a line drawing that responds to the pointer (sources and checks in `hairline/`, shipped from `public/hairline/`);
- **an on-brand MEP photo** already in `public/assets/images/thumbs`. These sit in the template slot at its original proportions, cropped with `object-fit: cover`.

The briefs in the other files in this folder still describe the photos to shoot. Replace a stand-in by changing the `src` back, or swap the figure for a photo in the component.

## Banner photo (`breadcrumb-thumb.jpg`) → Hairline figure

| Page | Figure | Component |
|---|---|---|
| About | `tower`: ten floors, one per year since 2016 | `components/pages/AboutPage.jsx` |
| Services | `ceiling`: exploded ceiling void, one layer per MEP trade | `components/pages/ServicesPage.jsx` |
| Projects | `skyline`: one building per sector, with project counts | `components/pages/ProjectsPage.jsx` |
| FAQ | `hatches`: access hatches that open | `components/pages/FaqPage.jsx` |
| Contact | `pigeonholes`: a rack of messages | `components/pages/ContactPage.jsx` |
| Request a Quote | `measure`: a laser measure across a room plan | `components/pages/QuotePage.jsx` |
| Planning & Architecture | `measure` | `components/pages/services/PlanningPage.jsx` |

Other figures: `throw` (Shop capacity CTA, HVAC page, home shop band), `brackets` (empty cart), and `ceiling` with the trade highlighted on each service page's closing section (`components/details/ServiceExtras.jsx`).

## Photos swapped for on-brand stand-ins

- **About:**
  - the who-we-are pair, the vision pair and the quote-form photo;
  - the service tabs;
  - the "how we work" round photos, now icon discs.
- **Services hub:** the tab photos and the "Explore all 11 services" grid. These were screenshots of the template's own home pages. Both now use `components/service-photos.js`.
- **Joinery** (the cleaning template), **Villa Works** (the cleaning template), **EV Chargers** (the laundry template) and **Planning**: every cleaning or laundry photo. The decorative cleaning "hand" graphic was removed.
- **HVAC and Joinery:** the mop "video" image.

## Removed

- **Template YouTube buttons:** play buttons linking to the template's YouTube video were removed on HVAC, Joinery, EV Chargers, Fit-Out and Plumbing. On Joinery, the rotating badge now links to the quote form.
- **Fake brand logos:** the template's logos ("Shopia", "Green Life", "Exponent Wealth"…) carried alt text naming DEWA, Aramex, Atlas Copco and others. They are replaced by text wordmarks of those names (`.asas-wordmark` in `public/assets/css/brand.css`). Use real logo files only with permission.

## ASAS project photos (2026-10-15)

ASAS supplied 165 photos, all landscape 16:9 (1672 × 941). 103 of them are on the site, as 1440px WebP copies in `public/assets/images/asas/` (about 105 KB each). The full-size PNGs are still loose in `public/`.

- **Portrait and square slots** keep the template's proportions and crop the landscape photo to fit: `object-fit: cover` through `cover()` in `components/asas-photos.js`.
- **Landscape slots** (project cards, banners, service tiles) show the photo with only a light crop.
- **Project cards** show a project's own photo where one exists, keyed by serial number in `PROJECT_PHOTOS`. The projects with their own photos are Jan's Noodles, Fishy's, Dubai Heights Academy, Master Polish, Akoya, Desco, Torino, Graffio and Jeeves. These are now the featured projects. Other projects show a photo from the same sector, with alt text saying it is an example.
- **Still stock:** AC installation photos (HVAC page, HVAC tab and tile) and some hero backgrounds. None of the supplied photos shows an AC unit.
