# Image replacement checklist

Every ASAS page still uses the template's photos as placeholders. Replace them by **overwriting the file at the same path** (a `*` marks a numbered series, e.g. `team-img*.png` = team-img1.png, team-img2.png, …) in `public/` (keep a similar size and aspect ratio), and every page that uses it updates.

- **206 photo files** across 18 pages; **44** are shared by more than one page. Replacing a shared file changes all its pages, so pick a photo that suits all of them, or give one page its own file and change its `src`.
- **88 decorative files** (shapes, icons, patterns) are listed at the end; most can stay.
- The "Intended ASAS photo" column is the alt text written on each page, which describes what the photo should show.
- Detailed per-section briefs: [design-system/image-manifest/](design-system/image-manifest/).
- Regenerate this file after page changes: `node scripts/image-index.mjs`.

## Photos

| # | File | Used on | Intended ASAS photo |
|---|---|---|---|
| 1 | `/assets/images/thumbs/breadcrumb-thumb.jpg` | **7 pages:** [About](/about), [Services hub](/services), [Planning & Architecture](/services/planning-architecture), [Projects](/projects), [FAQ](/faq), [Contact](/contact), [Request a Quote](/appointment) | ASAS Alenjaz engineers and technicians on a fit-out site in Dubai · Architectural floor plans and fit-out drawings laid out on a desk · ASAS Alenjaz team on a completed fit-out project in Dubai |
| 2 | `/assets/images/thumbs/banner-client-img1.png` | **3 pages:** [Civil Works](/services/civil), [Joinery](/services/joinery), [Electrical Works](/services/electrical) | ASAS Alenjaz joinery installer on site |
| 3 | `/assets/images/thumbs/banner-client-img2.png` | **3 pages:** [Civil Works](/services/civil), [Joinery](/services/joinery), [Electrical Works](/services/electrical) | ASAS Alenjaz site foreman |
| 4 | `/assets/images/thumbs/banner-client-img5.png` | **3 pages:** [Civil Works](/services/civil), [Joinery](/services/joinery), [Electrical Works](/services/electrical) | ASAS Alenjaz team member |
| 5 | `/assets/images/thumbs/service-two-thumb.jpg` | **3 pages:** [About](/about), [Services hub](/services), [Villa Works](/services/villa-works) | — |
| 6 | `/assets/images/thumbs/service-two-thumb2.jpg` | **3 pages:** [About](/about), [Services hub](/services), [Villa Works](/services/villa-works) | — |
| 7 | `/assets/images/thumbs/service-two-thumb3.jpg` | **3 pages:** [About](/about), [Services hub](/services), [Villa Works](/services/villa-works) | — |
| 8 | `/assets/images/thumbs/service-two-thumb4.jpg` | **3 pages:** [About](/about), [Services hub](/services), [Villa Works](/services/villa-works) | — |
| 9 | `/assets/images/thumbs/about-two-thumb1.jpg` | **2 pages:** [About](/about), [Villa Works](/services/villa-works) | ASAS team completing an office fit-out in Dubai · Private villa with a new service block by ASAS Alenjaz |
| 10 | `/assets/images/thumbs/about-two-thumb2.jpg` | **2 pages:** [About](/about), [Villa Works](/services/villa-works) | ASAS technician carrying out MEP works · ASAS Alenjaz team working on a villa extension |
| 11 | `/assets/images/thumbs/banner-client-img*.png` | **2 pages:** [HVAC Works](/services/hvac), [Fire Fighting](/services/fire-fighting) | — |
| 12 | `/assets/images/thumbs/banner-client-img3.png` | **2 pages:** [Joinery](/services/joinery), [Electrical Works](/services/electrical) | ASAS Alenjaz MEP engineer |
| 13 | `/assets/images/thumbs/banner-client-img4.png` | **2 pages:** [Joinery](/services/joinery), [Electrical Works](/services/electrical) | ASAS Alenjaz technician fitting joinery |
| 14 | `/assets/images/thumbs/banner-eight-client-img1.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [Plumbing Works](/services/plumbing) | ASAS MEP engineer on a plumbing site · ASAS MEP engineer |
| 15 | `/assets/images/thumbs/banner-eight-client-img2.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [Plumbing Works](/services/plumbing) | ASAS plumbing foreman · ASAS foreman |
| 16 | `/assets/images/thumbs/banner-eight-client-img3.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [Plumbing Works](/services/plumbing) | ASAS plumbing technician · ASAS technician |
| 17 | `/assets/images/thumbs/banner-three-bg.jpg` | **2 pages:** [Fire Fighting](/services/fire-fighting), [EV Chargers](/services/ev-chargers) | (section background) |
| 18 | `/assets/images/thumbs/before-after-thumb1.jpg` | **2 pages:** [About](/about), [Villa Works](/services/villa-works) | Before: space prior to ASAS fit-out or modification works · Villa before modification works |
| 19 | `/assets/images/thumbs/before-after-thumb2.jpg` | **2 pages:** [About](/about), [Villa Works](/services/villa-works) | After: the same space after ASAS completed the fit-out · The same villa after modification by ASAS Alenjaz |
| 20 | `/assets/images/thumbs/blog-three-img.png` | **2 pages:** [HVAC Works](/services/hvac), [Fire Fighting](/services/fire-fighting) | — |
| 21 | `/assets/images/thumbs/blog-three-thumb*.jpg` | **2 pages:** [HVAC Works](/services/hvac), [Fire Fighting](/services/fire-fighting) | — |
| 22 | `/assets/images/thumbs/brand-eight-thumb*.png` | **2 pages:** [Plumbing Works](/services/plumbing), [HVAC Works](/services/hvac) | ${name} logo |
| 23 | `/assets/images/thumbs/brand-eight-thumb1.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | DEWA logo |
| 24 | `/assets/images/thumbs/brand-eight-thumb2.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | Dubai Municipality logo |
| 25 | `/assets/images/thumbs/brand-eight-thumb3.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | Civil Defence logo |
| 26 | `/assets/images/thumbs/brand-eight-thumb4.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | Trakhees logo |
| 27 | `/assets/images/thumbs/brand-eight-thumb5.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | Sustainable City logo |
| 28 | `/assets/images/thumbs/choose-us-two-thumb1.jpg` | **2 pages:** [About](/about), [Villa Works](/services/villa-works) | ASAS engineer reviewing a finished restaurant fit-out · ASAS Alenjaz engineer inspecting villa MEP works |
| 29 | `/assets/images/thumbs/choose-us-two-thumb2.jpg` | **2 pages:** [About](/about), [Villa Works](/services/villa-works) | ASAS foreman briefing technicians on site · Finished villa service block by ASAS Alenjaz |
| 30 | `/assets/images/thumbs/contact-eight-thumb.jpg` | **2 pages:** [Interior Fit-Out](/services/fit-out), [Plumbing Works](/services/plumbing) | ASAS engineer meeting a client on site |
| 31 | `/assets/images/thumbs/contact-three-thumb.jpg` | **2 pages:** [HVAC Works](/services/hvac), [Fire Fighting](/services/fire-fighting) | ASAS engineer reviewing HVAC drawings with a client · ASAS engineer reviewing fire fighting drawings with a client |
| 32 | `/assets/images/thumbs/contact-two-thumb.jpg` | **2 pages:** [About](/about), [Villa Works](/services/villa-works) | ASAS engineer meeting a client for a site visit · ASAS Alenjaz engineer meeting a villa owner on site |
| 33 | `/assets/images/thumbs/project-three-thumb*.jpg` | **2 pages:** [HVAC Works](/services/hvac), [Fire Fighting](/services/fire-fighting) | ${project.name}, ${project.location} |
| 34 | `/assets/images/thumbs/team-four-bg.jpg` | **2 pages:** [About](/about), [Electrical Works](/services/electrical) | (section background) |
| 35 | `/assets/images/thumbs/team-four-thumb1.jpg` | **2 pages:** [About](/about), [Electrical Works](/services/electrical) | — |
| 36 | `/assets/images/thumbs/team-four-thumb2.jpg` | **2 pages:** [About](/about), [Electrical Works](/services/electrical) | — |
| 37 | `/assets/images/thumbs/team-four-thumb3.jpg` | **2 pages:** [About](/about), [Electrical Works](/services/electrical) | — |
| 38 | `/assets/images/thumbs/team-four-thumb4.jpg` | **2 pages:** [About](/about), [Electrical Works](/services/electrical) | — |
| 39 | `/assets/images/thumbs/testi-three-img.png` | **2 pages:** [HVAC Works](/services/hvac), [Fire Fighting](/services/fire-fighting) | — |
| 40 | `/assets/images/thumbs/testimonial-nine-img1.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | ASAS Alenjaz MEP engineer |
| 41 | `/assets/images/thumbs/testimonial-nine-img2.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | ASAS Alenjaz electrical foreman |
| 42 | `/assets/images/thumbs/testimonial-nine-img3.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | ASAS Alenjaz technician |
| 43 | `/assets/images/thumbs/testimonial-nine-thumb*.png` | **2 pages:** [Interior Fit-Out](/services/fit-out), [EV Chargers](/services/ev-chargers) | — |
| 44 | `/assets/images/thumbs/video-bg.jpg` | **2 pages:** [Joinery](/services/joinery), [HVAC Works](/services/hvac) | ASAS Alenjaz fit-out project walkthrough · ASAS HVAC team working on a fit-out site |
| 45 | `/assets/images/testimonial-image.png` | [Plumbing Works](/services/plumbing) | ASAS site engineer checking plumbing against the drawings |
| 46 | `/assets/images/thumbs/about-eight-google.png` | [Plumbing Works](/services/plumbing) | DEWA approval logo |
| 47 | `/assets/images/thumbs/about-eight-thumb.jpg` | [Plumbing Works](/services/plumbing) | ASAS technician installing water supply pipework |
| 48 | `/assets/images/thumbs/about-eleven-thumb1.jpg` | [HVAC Works](/services/hvac) | ASAS technician installing an air-conditioning unit |
| 49 | `/assets/images/thumbs/about-five-thumb.jpg` | [Low Current](/services/low-current) | ASAS Alenjaz technician routing cabling above an office ceiling |
| 50 | `/assets/images/thumbs/about-four-thumb1.jpg` | [Electrical Works](/services/electrical) | ASAS electrician working on a distribution board · Lighting installed by ASAS in a completed fit-out |
| 51 | `/assets/images/thumbs/about-nine-thumb1.jpg` | [EV Chargers](/services/ev-chargers) | ASAS Alenjaz technician installing a wall-mounted EV charger |
| 52 | `/assets/images/thumbs/about-nine-thumb2.jpg` | [EV Chargers](/services/ev-chargers) | Row of EV chargers in a residential community car park |
| 53 | `/assets/images/thumbs/about-seven-thumb1.jpg` | [Home](/) | ASAS engineer on a fit-out site in Dubai |
| 54 | `/assets/images/thumbs/about-seven-thumb2.jpg` | [Home](/) | ASAS technicians installing MEP services in a commercial fit-out |
| 55 | `/assets/images/thumbs/about-ten-thumb.jpg` | [Interior Fit-Out](/services/fit-out) | ASAS team handing over a finished restaurant fit-out |
| 56 | `/assets/images/thumbs/about-three-thumb*.jpg` | [Fire Fighting](/services/fire-fighting) | — |
| 57 | `/assets/images/thumbs/about-thumb1.jpg` | [Joinery](/services/joinery) | ASAS Alenjaz team installing joinery in an office fit-out |
| 58 | `/assets/images/thumbs/about-thumb2.png` | [Joinery](/services/joinery) | Close-up of joinery finishing on site |
| 59 | `/assets/images/thumbs/banner-eight-thumb.jpg` | [Plumbing Works](/services/plumbing) | ASAS plumbing installation in a commercial kitchen |
| 60 | `/assets/images/thumbs/banner-eleven-bg.jpg` | [HVAC Works](/services/hvac) | (section background) |
| 61 | `/assets/images/thumbs/banner-five-bg.jpg` | [Low Current](/services/low-current) | (section background) |
| 62 | `/assets/images/thumbs/banner-four-thumb.png` | [Electrical Works](/services/electrical) | — |
| 63 | `/assets/images/thumbs/banner-img.png` | [Joinery](/services/joinery) | Finished joinery in an ASAS Alenjaz fit-out |
| 64 | `/assets/images/thumbs/banner-nine-bg1.jpg` | [EV Chargers](/services/ev-chargers) | (section background) |
| 65 | `/assets/images/thumbs/banner-seven-bg.jpg` | [Home](/) | (section background) |
| 66 | `/assets/images/thumbs/banner-six-bg.png` | [Civil Works](/services/civil) | (section background) |
| 67 | `/assets/images/thumbs/banner-six-thumb.jpg` | [Civil Works](/services/civil) | ASAS team building blockwork partitions on a Dubai site |
| 68 | `/assets/images/thumbs/banner-ten-thumb.png` | [Interior Fit-Out](/services/fit-out) | Completed office fit-out by ASAS Alenjaz |
| 69 | `/assets/images/thumbs/banner-thumb.jpg` | [Joinery](/services/joinery) | Custom counter joinery in a restaurant fitted by ASAS Alenjaz |
| 70 | `/assets/images/thumbs/banner-two-thumb.png` | [Villa Works](/services/villa-works) | Villa extension built by ASAS Alenjaz in Dubai |
| 71 | `/assets/images/thumbs/blog-eight-thumb*.jpg` | [Plumbing Works](/services/plumbing) | — |
| 72 | `/assets/images/thumbs/blog-eight-thumb1.jpg` | [Plumbing Works](/services/plumbing) | HDPE pipework at the Aramex warehouse, DIP |
| 73 | `/assets/images/thumbs/blog-five-thumb*.jpg` | [Low Current](/services/low-current) | — |
| 74 | `/assets/images/thumbs/blog-four-thumb1.jpg` | [Electrical Works](/services/electrical) | — |
| 75 | `/assets/images/thumbs/blog-four-thumb2.jpg` | [Electrical Works](/services/electrical) | — |
| 76 | `/assets/images/thumbs/blog-four-thumb3.jpg` | [Electrical Works](/services/electrical) | — |
| 77 | `/assets/images/thumbs/blog-nine-thumb*.jpg` | [EV Chargers](/services/ev-chargers) | — |
| 78 | `/assets/images/thumbs/blog-seven-thumb1.jpg` | [Home](/) | — |
| 79 | `/assets/images/thumbs/blog-seven-thumb2.jpg` | [Home](/) | — |
| 80 | `/assets/images/thumbs/blog-seven-thumb3.jpg` | [Home](/) | — |
| 81 | `/assets/images/thumbs/blog-six-thumb*.jpg` | [Civil Works](/services/civil) | — |
| 82 | `/assets/images/thumbs/blog-thumb*.jpg` | [Joinery](/services/joinery) | — |
| 83 | `/assets/images/thumbs/blog-two-thumb*.jpg` | [Villa Works](/services/villa-works) | — |
| 84 | `/assets/images/thumbs/brand-thumb1.png` | [Joinery](/services/joinery) | DEWA logo |
| 85 | `/assets/images/thumbs/brand-thumb2.png` | [Joinery](/services/joinery) | Dubai Municipality logo |
| 86 | `/assets/images/thumbs/brand-thumb3.png` | [Joinery](/services/joinery) | Civil Defence logo |
| 87 | `/assets/images/thumbs/brand-thumb4.png` | [Joinery](/services/joinery) | Trakhees logo |
| 88 | `/assets/images/thumbs/brand-thumb5.png` | [Joinery](/services/joinery) | Atlas Copco logo |
| 89 | `/assets/images/thumbs/brand-thumb6.png` | [Joinery](/services/joinery) | Aramex logo |
| 90 | `/assets/images/thumbs/choose-seven-thumb.jpg` | [Home](/) | ASAS engineer inspecting completed MEP installation for handover |
| 91 | `/assets/images/thumbs/choose-us-five-thumb1.jpg` | [Low Current](/services/low-current) | — |
| 92 | `/assets/images/thumbs/choose-us-five-thumb2.png` | [Low Current](/services/low-current) | — |
| 93 | `/assets/images/thumbs/choose-us-five-thumb3.png` | [Low Current](/services/low-current) | — |
| 94 | `/assets/images/thumbs/choose-us-five-thumb4.png` | [Low Current](/services/low-current) | — |
| 95 | `/assets/images/thumbs/choose-us-four-thumb.jpg` | [Electrical Works](/services/electrical) | ASAS electrical foreman checking an installation |
| 96 | `/assets/images/thumbs/contact-hand.png` | [Joinery](/services/joinery) | — |
| 97 | `/assets/images/thumbs/contact-six-thumb.jpg` | [Civil Works](/services/civil) | ASAS engineer measuring a space before civil works |
| 98 | `/assets/images/thumbs/contact-thumb.jpg` | [Joinery](/services/joinery) | ASAS Alenjaz engineer reviewing joinery drawings with a client |
| 99 | `/assets/images/thumbs/counter-eight-bg.jpg` | [Plumbing Works](/services/plumbing) | (section background) |
| 100 | `/assets/images/thumbs/cta-seven-thumb.jpg` | [Home](/) | ASAS engineer on the phone arranging a site visit |
| 101 | `/assets/images/thumbs/cta-thumb.png` | [Joinery](/services/joinery) | ASAS Alenjaz technician ready for a site visit |
| 102 | `/assets/images/thumbs/expert-eight-thumb.png` | [Plumbing Works](/services/plumbing) | ASAS plumbing technician with tools |
| 103 | `/assets/images/thumbs/expert-ten-thumb.jpg` | [Interior Fit-Out](/services/fit-out) | ASAS foreman and technicians on a fit-out site |
| 104 | `/assets/images/thumbs/expert-thumb.png` | [Joinery](/services/joinery) | ASAS Alenjaz technician measuring a space for joinery |
| 105 | `/assets/images/thumbs/gallery-five-thumb*.jpg` | [Low Current](/services/low-current) | — |
| 106 | `/assets/images/thumbs/gallery-six-thumb.jpg` | [Civil Works](/services/civil) | Wide view of a villa extension under construction by ASAS |
| 107 | `/assets/images/thumbs/home-img1.jpg` | [Services hub](/services) | — |
| 108 | `/assets/images/thumbs/home-img10.jpg` | [Services hub](/services) | — |
| 109 | `/assets/images/thumbs/home-img11.jpg` | [Services hub](/services) | — |
| 110 | `/assets/images/thumbs/home-img2.jpg` | [Services hub](/services) | — |
| 111 | `/assets/images/thumbs/home-img3.jpg` | [Services hub](/services) | — |
| 112 | `/assets/images/thumbs/home-img4.jpg` | [Services hub](/services) | — |
| 113 | `/assets/images/thumbs/home-img5.jpg` | [Services hub](/services) | — |
| 114 | `/assets/images/thumbs/home-img6.jpg` | [Services hub](/services) | — |
| 115 | `/assets/images/thumbs/home-img7.jpg` | [Services hub](/services) | — |
| 116 | `/assets/images/thumbs/home-img8.jpg` | [Services hub](/services) | — |
| 117 | `/assets/images/thumbs/home-img9.jpg` | [Services hub](/services) | — |
| 118 | `/assets/images/thumbs/product-three-thumb*.png` | [Fire Fighting](/services/fire-fighting) | — |
| 119 | `/assets/images/thumbs/project-eight-thumb*.jpg` | [Plumbing Works](/services/plumbing) | ${project.name}, ${project.location} |
| 120 | `/assets/images/thumbs/project-four-thumb1.jpg` | [Electrical Works](/services/electrical) | — |
| 121 | `/assets/images/thumbs/project-four-thumb2.jpg` | [Electrical Works](/services/electrical) | — |
| 122 | `/assets/images/thumbs/project-four-thumb3.jpg` | [Electrical Works](/services/electrical) | — |
| 123 | `/assets/images/thumbs/project-four-thumb4.jpg` | [Electrical Works](/services/electrical) | — |
| 124 | `/assets/images/thumbs/project-nine-thumb*.jpg` | [EV Chargers](/services/ev-chargers) | — |
| 125 | `/assets/images/thumbs/project-seven-thumb*.jpg` | [Home](/) | ${p.name}, ${p.type.toLowerCase()} project by ASAS in ${p.location} |
| 126 | `/assets/images/thumbs/project-six-thumb1.jpg` | [Civil Works](/services/civil) | — |
| 127 | `/assets/images/thumbs/project-six-thumb2.jpg` | [Civil Works](/services/civil) | — |
| 128 | `/assets/images/thumbs/project-six-thumb3.jpg` | [Civil Works](/services/civil) | — |
| 129 | `/assets/images/thumbs/project-six-thumb4.jpg` | [Civil Works](/services/civil) | — |
| 130 | `/assets/images/thumbs/project-three-thumb1.jpg` | [Projects](/projects) | — |
| 131 | `/assets/images/thumbs/project-three-thumb2.jpg` | [Projects](/projects) | — |
| 132 | `/assets/images/thumbs/project-three-thumb3.jpg` | [Projects](/projects) | — |
| 133 | `/assets/images/thumbs/project-three-thumb4.jpg` | [Projects](/projects) | — |
| 134 | `/assets/images/thumbs/project-thumb1.jpg` | [Joinery](/services/joinery) | — |
| 135 | `/assets/images/thumbs/project-thumb2.jpg` | [Joinery](/services/joinery) | — |
| 136 | `/assets/images/thumbs/project-thumb3.jpg` | [Joinery](/services/joinery) | — |
| 137 | `/assets/images/thumbs/project-thumb4.jpg` | [Joinery](/services/joinery) | — |
| 138 | `/assets/images/thumbs/service-bg.jpg` | [Joinery](/services/joinery) | ASAS Alenjaz team coordinating joinery with MEP works on a fit-out |
| 139 | `/assets/images/thumbs/service-details-img1.jpg` | [Planning & Architecture](/services/planning-architecture) | Space-planning layout option for an office fit-out |
| 140 | `/assets/images/thumbs/service-details-img2.jpg` | [Planning & Architecture](/services/planning-architecture) | MEP design coordinated on an architectural floor plan |
| 141 | `/assets/images/thumbs/service-details-sideber-thumb.jpg` | [Planning & Architecture](/services/planning-architecture) | Finished fit-out interior planned and built by ASAS Alenjaz |
| 142 | `/assets/images/thumbs/service-details-thumb.jpg` | [Planning & Architecture](/services/planning-architecture) | ASAS engineer reviewing a space-planning layout for a fit-out |
| 143 | `/assets/images/thumbs/service-eight-thumb*.jpg` | [Plumbing Works](/services/plumbing) | ASAS ${item.title.toLowerCase()} on a fit-out project |
| 144 | `/assets/images/thumbs/service-five-thumb*.jpg` | [Low Current](/services/low-current) | — |
| 145 | `/assets/images/thumbs/service-four-bg.jpg` | [Electrical Works](/services/electrical) | (section background) |
| 146 | `/assets/images/thumbs/service-four-thumb1.jpg` | [Electrical Works](/services/electrical) | — |
| 147 | `/assets/images/thumbs/service-four-thumb2.jpg` | [Electrical Works](/services/electrical) | — |
| 148 | `/assets/images/thumbs/service-four-thumb3.jpg` | [Electrical Works](/services/electrical) | — |
| 149 | `/assets/images/thumbs/service-logo1.png` | [Joinery](/services/joinery) | DEWA approval logo |
| 150 | `/assets/images/thumbs/service-logo2.png` | [Joinery](/services/joinery) | Dubai Municipality approval logo |
| 151 | `/assets/images/thumbs/service-six-thumb1.jpg` | [Civil Works](/services/civil) | — |
| 152 | `/assets/images/thumbs/service-six-thumb2.png` | [Civil Works](/services/civil) | — |
| 153 | `/assets/images/thumbs/service-six-thumb3.png` | [Civil Works](/services/civil) | — |
| 154 | `/assets/images/thumbs/service-six-thumb4.png` | [Civil Works](/services/civil) | — |
| 155 | `/assets/images/thumbs/service-six-thumb5.png` | [Civil Works](/services/civil) | — |
| 156 | `/assets/images/thumbs/service-ten-thumb*.jpg` | [HVAC Works](/services/hvac) | ASAS ${item.title.toLowerCase()} on a fit-out project |
| 157 | `/assets/images/thumbs/service-ten-thumb1.jpg` | [Interior Fit-Out](/services/fit-out) | — |
| 158 | `/assets/images/thumbs/service-ten-thumb2.jpg` | [Interior Fit-Out](/services/fit-out) | — |
| 159 | `/assets/images/thumbs/service-ten-thumb3.jpg` | [Interior Fit-Out](/services/fit-out) | — |
| 160 | `/assets/images/thumbs/service-ten-thumb4.jpg` | [Interior Fit-Out](/services/fit-out) | — |
| 161 | `/assets/images/thumbs/service-three-thumb*.jpg` | [Fire Fighting](/services/fire-fighting) | ASAS ${item.title.toLowerCase()} on a fit-out project |
| 162 | `/assets/images/thumbs/team-five-img*.png` | [Low Current](/services/low-current) | — |
| 163 | `/assets/images/thumbs/team-nine-thumb*.png` | [EV Chargers](/services/ev-chargers) | — |
| 164 | `/assets/images/thumbs/team-seven-thumb1.png` | [Home](/) | — |
| 165 | `/assets/images/thumbs/team-seven-thumb2.png` | [Home](/) | — |
| 166 | `/assets/images/thumbs/team-seven-thumb3.png` | [Home](/) | — |
| 167 | `/assets/images/thumbs/team-seven-thumb4.png` | [Home](/) | — |
| 168 | `/assets/images/thumbs/team-six-thumb1.png` | [Civil Works](/services/civil) | — |
| 169 | `/assets/images/thumbs/team-six-thumb2.png` | [Civil Works](/services/civil) | — |
| 170 | `/assets/images/thumbs/team-six-thumb3.png` | [Civil Works](/services/civil) | — |
| 171 | `/assets/images/thumbs/team-six-thumb4.png` | [Civil Works](/services/civil) | — |
| 172 | `/assets/images/thumbs/team-six-thumb5.png` | [Civil Works](/services/civil) | — |
| 173 | `/assets/images/thumbs/team-ten-thumb1.png` | [Interior Fit-Out](/services/fit-out) | — |
| 174 | `/assets/images/thumbs/team-ten-thumb2.png` | [Interior Fit-Out](/services/fit-out) | — |
| 175 | `/assets/images/thumbs/team-ten-thumb3.png` | [Interior Fit-Out](/services/fit-out) | — |
| 176 | `/assets/images/thumbs/team-ten-thumb4.png` | [Interior Fit-Out](/services/fit-out) | — |
| 177 | `/assets/images/thumbs/testi-img*.png` | [Joinery](/services/joinery) | — |
| 178 | `/assets/images/thumbs/testi-img1.png` | [Electrical Works](/services/electrical) | ASAS MEP engineer · ASAS site foreman |
| 179 | `/assets/images/thumbs/testimonial-eight-thumb1.png` | [Plumbing Works](/services/plumbing) | — |
| 180 | `/assets/images/thumbs/testimonial-five-thumb*.jpg` | [Low Current](/services/low-current) | — |
| 181 | `/assets/images/thumbs/testimonial-five-thumb11.jpg` | [Low Current](/services/low-current) | ASAS Alenjaz quality inspection on site |
| 182 | `/assets/images/thumbs/testimonial-five-thumb22.jpg` | [Low Current](/services/low-current) | ASAS Alenjaz safety briefing on site |
| 183 | `/assets/images/thumbs/testimonial-four-thumb.jpg` | [Electrical Works](/services/electrical) | ASAS engineers inspecting a completed electrical installation |
| 184 | `/assets/images/thumbs/testimonial-seven-img*.png` | [Villa Works](/services/villa-works) | — |
| 185 | `/assets/images/thumbs/testimonial-seven-img1.png` | [About](/about) | — |
| 186 | `/assets/images/thumbs/testimonial-seven-img2.png` | [About](/about) | — |
| 187 | `/assets/images/thumbs/testimonial-seven-img3.png` | [About](/about) | — |
| 188 | `/assets/images/thumbs/testimonial-seven-img4.png` | [About](/about) | — |
| 189 | `/assets/images/thumbs/testimonial-seven-img5.png` | [About](/about) | — |
| 190 | `/assets/images/thumbs/testimonial-seven-img6.png` | [About](/about) | — |
| 191 | `/assets/images/thumbs/testimonial-six-thumb.jpg` | [Civil Works](/services/civil) | Clean, organised ASAS site during civil works |
| 192 | `/assets/images/thumbs/video-eight-bg.jpg` | [Plumbing Works](/services/plumbing) | (section background) |
| 193 | `/assets/images/thumbs/video-nine-bg.jpg` | [EV Chargers](/services/ev-chargers) | EV charger installation walkthrough by ASAS Alenjaz |
| 194 | `/assets/images/thumbs/video-ten-bg.jpg` | [Interior Fit-Out](/services/fit-out) | Wide view of a completed ASAS fit-out interior |
| 195 | `/assets/images/thumbs/work-four-thumb1.jpg` | [Electrical Works](/services/electrical) | — |
| 196 | `/assets/images/thumbs/work-four-thumb2.jpg` | [Electrical Works](/services/electrical) | — |
| 197 | `/assets/images/thumbs/work-four-thumb3.jpg` | [Electrical Works](/services/electrical) | — |
| 198 | `/assets/images/thumbs/work-four-thumb4.jpg` | [Electrical Works](/services/electrical) | — |
| 199 | `/assets/images/thumbs/work-seven-thumb.jpg` | [Home](/) | ASAS team walking a client through a site visit |
| 200 | `/assets/images/thumbs/work-two-thumb*.png` | [Villa Works](/services/villa-works) | — |
| 201 | `/assets/images/thumbs/work-two-thumb1.png` | [About](/about) | — |
| 202 | `/assets/images/thumbs/work-two-thumb2.png` | [About](/about) | — |
| 203 | `/assets/images/thumbs/work-two-thumb3.png` | [About](/about) | — |
| 204 | `/assets/images/thumbs/wrok-five-thumb1.jpg` | [Low Current](/services/low-current) | — |
| 205 | `/assets/images/thumbs/wrok-five-thumb2.jpg` | [Low Current](/services/low-current) | — |
| 206 | `/assets/images/thumbs/wrok-five-thumb3.jpg` | [Low Current](/services/low-current) | — |

## Decorative files

| File | Used on |
|---|---|
| `/assets/images/icons/asas/*-navy.svg` | Services hub, Villa Works |
| `/assets/images/icons/asas/*-white.svg` | Joinery, Plumbing Works, HVAC Works, Villa Works, EV Chargers |
| `/assets/images/icons/asas/**.svg` | HVAC Works |
| `/assets/images/icons/asas/approved.svg` | Home, About, Civil Works, Joinery, Plumbing Works, HVAC Works, Fire Fighting, EV Chargers |
| `/assets/images/icons/asas/check-circle.svg` | Home, Electrical Works |
| `/assets/images/icons/asas/document-white.svg` | Planning & Architecture |
| `/assets/images/icons/asas/electrical.svg` | Electrical Works |
| `/assets/images/icons/asas/engineer.svg` | Planning & Architecture |
| `/assets/images/icons/asas/one-contract.svg` | Joinery |
| `/assets/images/icons/asas/quote.svg` | HVAC Works, Fire Fighting, Low Current |
| `/assets/images/icons/asas/team-white.svg` | HVAC Works |
| `/assets/images/icons/asas/toolbox.svg` | Home |
| `/assets/images/icons/asas/villa.svg` | EV Chargers |
| `/assets/images/icons/banner-eight-arrow-btn.svg` | Plumbing Works |
| `/assets/images/shapes/about-five-shape1.jpg` | Low Current |
| `/assets/images/shapes/about-five-shape2.png` | Low Current |
| `/assets/images/shapes/about-ten-shape.png` | Interior Fit-Out |
| `/assets/images/shapes/about-two-bg-shape.png` | About, Villa Works |
| `/assets/images/shapes/banner-eight-bg.png` | Plumbing Works |
| `/assets/images/shapes/banner-eight-man.png` | Plumbing Works |
| `/assets/images/shapes/banner-line-shape.png` | Joinery |
| `/assets/images/shapes/banner-nine-bubble1.png` | EV Chargers |
| `/assets/images/shapes/banner-nine-bubble2.png` | EV Chargers |
| `/assets/images/shapes/banner-shape-hand.png` | Joinery |
| `/assets/images/shapes/banner-ten-shape.png` | Interior Fit-Out |
| `/assets/images/shapes/banner-three-text-shape.png` | Fire Fighting |
| `/assets/images/shapes/banner-two-shape1.png` | Villa Works |
| `/assets/images/shapes/banner-two-shape2.png` | Villa Works |
| `/assets/images/shapes/banner-two-shape3.png` | Villa Works |
| `/assets/images/shapes/before-after-shape1.png` | About, Villa Works |
| `/assets/images/shapes/before-after-shape2.png` | Villa Works |
| `/assets/images/shapes/blog-two-shape1.png` | Villa Works |
| `/assets/images/shapes/blog-two-shape2.png` | Villa Works |
| `/assets/images/shapes/blog-two-shape3.png` | Villa Works |
| `/assets/images/shapes/brand-line-shape1.png` | Joinery |
| `/assets/images/shapes/brand-line-shape2.png` | Joinery |
| `/assets/images/shapes/brand-ten-bg.png` | Interior Fit-Out |
| `/assets/images/shapes/choose-seven-shape.png` | Home |
| `/assets/images/shapes/choose-us-four-shape.png` | Electrical Works |
| `/assets/images/shapes/choose-us-six-shape.png` | Civil Works |
| `/assets/images/shapes/choose-us-two-shape1.png` | Villa Works |
| `/assets/images/shapes/choose-us-two-shape2.png` | About, Villa Works |
| `/assets/images/shapes/choose-us-two-shape3.png` | Villa Works |
| `/assets/images/shapes/choose-us-two-thumb-shape1.jpg` | About, Villa Works |
| `/assets/images/shapes/choose-us-two-thumb-shape2.png` | Villa Works |
| `/assets/images/shapes/contact-eight-writer.png` | Interior Fit-Out, Plumbing Works |
| `/assets/images/shapes/contact-two-info-shape.png` | Villa Works |
| `/assets/images/shapes/counter-seven-shape1.png` | Home |
| `/assets/images/shapes/counter-seven-shape2.png` | Home |
| `/assets/images/shapes/cta-seven-shape1.png` | Home |
| `/assets/images/shapes/cta-seven-shape2.png` | Home |
| `/assets/images/shapes/cta-shape.png` | Joinery |
| `/assets/images/shapes/cta-two-shape1.png` | About, Villa Works |
| `/assets/images/shapes/cta-two-shape2.png` | About, Villa Works |
| `/assets/images/shapes/cta-two-shape3.png` | About, Villa Works |
| `/assets/images/shapes/cta-two-shape4.png` | About, Villa Works |
| `/assets/images/shapes/cta-two-shape5.png` | About, Villa Works |
| `/assets/images/shapes/cta-two-shape6.png` | About, Villa Works |
| `/assets/images/shapes/cta-two-shape7.png` | About, Services hub, Villa Works |
| `/assets/images/shapes/expert-shape1.png` | Joinery |
| `/assets/images/shapes/expert-shape2.png` | Joinery |
| `/assets/images/shapes/feature-five-shape1.png` | Low Current |
| `/assets/images/shapes/feature-five-shape2.png` | Low Current |
| `/assets/images/shapes/google.png` | EV Chargers |
| `/assets/images/shapes/project-bg-shape.png` | Joinery |
| `/assets/images/shapes/project-shape1.png` | Joinery |
| `/assets/images/shapes/service-five-shape.png` | Low Current |
| `/assets/images/shapes/service-nine-shape1.png` | EV Chargers |
| `/assets/images/shapes/service-nine-shape2.png` | EV Chargers |
| `/assets/images/shapes/service-six-shape.png` | Civil Works |
| `/assets/images/shapes/service-ten-shape1.png` | Interior Fit-Out |
| `/assets/images/shapes/service-ten-shape2.png` | Interior Fit-Out |
| `/assets/images/shapes/service-two-hand.png` | Villa Works |
| `/assets/images/shapes/team-four-shape1.png` | About, Electrical Works |
| `/assets/images/shapes/team-four-shape2.png` | About, Electrical Works |
| `/assets/images/shapes/team-nine-shape1.png` | EV Chargers |
| `/assets/images/shapes/team-nine-shape2.png` | EV Chargers |
| `/assets/images/shapes/testimonial-eight-shape.png` | Plumbing Works |
| `/assets/images/shapes/testimonial-shape1.png` | Joinery |
| `/assets/images/shapes/testimonial-six-shape1.png` | Civil Works |
| `/assets/images/shapes/testimonial-six-shape2.png` | Civil Works |
| `/assets/images/shapes/testimonial-two-shape1.png` | Villa Works |
| `/assets/images/shapes/testimonial-two-shape2.png` | About, Villa Works |
| `/assets/images/shapes/testimonial-two-shape3.png` | Villa Works |
| `/assets/images/shapes/work-five-shape.png` | Low Current |
| `/assets/images/shapes/work-four-shape.png` | Electrical Works |
| `/assets/images/shapes/work-two-shape1.png` | Villa Works |
| `/assets/images/shapes/work-two-shape2.png` | Villa Works |
