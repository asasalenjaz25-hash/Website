# Icon map: services-a (Plumbing, HVAC, Fire Fighting)

Library: `public/assets/images/icons/asas/` (`<name>.svg` Action Blue, `-white`, `-gold`, `-navy`). Library SVGs are 48×48; each `<img>` has `width`/`height` set to the original template file's size so layout does not shift. Service cards use a local `SERVICE_ICON` slug map (plumbing→plumbing, hvac→hvac, fire-fighting→fire-fighting, electrical→electrical, low-current→low-current, …).

| Page | Section | Item (text) | Old icon | New icon | Why |
|---|---|---|---|---|---|
| Plumbing | Banner approvals card | "N authority approvals" | icons/banner-eight-chack.svg (20×20) | asas/approved.svg (20×20) | Approval seal next to the approvals count |
| Plumbing | Banner approvals card | Quote arrow link | icons/banner-eight-arrow-btn.svg | kept | UI arrow, already means the right thing (link has aria-label) |
| Plumbing | Banner | Rotating text ring (inline `<svg>`) | kept | kept | Decorative text ring, not an off-topic object |
| Plumbing | Banner | Approval row | ph ph-seal-check | kept | Already matches approvals |
| Plumbing | Features (bg-main-eight-600) | Water supply | icons/feature-eight-icon1.svg | asas/plumbing-white.svg (69×69) | Drop = water supply; white on Action Blue |
| Plumbing | Features | Drainage | icons/feature-eight-icon2.svg | asas/drainage-white.svg | Pipe = drainage |
| Plumbing | Features | Sanitary works | icons/feature-eight-icon3.svg | asas/tools-white.svg | Installation wrench (no sanitary-ware icon in library) |
| Plumbing | Features | HDPE pipework | icons/feature-eight-icon4.svg | asas/drainage-white.svg | Library meaning "Drainage, pipework, HDPE" |
| Plumbing | Related MEP services (white chip, hover inverts) | Electrical / HVAC / Fire Fighting (per slug) | icons/service-eight-icon1-3.svg | asas/electrical.svg, hvac.svg, fire-fighting.svg (68×68) | Service icon per slug; blue kept so the template's hover invert still works |
| Plumbing | Expert (navy #00174f) | 1. Site visit & planning | icons/expert-eight-icon1.svg | asas/inspection-white.svg (49×49) | Site survey |
| Plumbing | Expert | 2. Design & approvals | icons/expert-eight-icon2.svg | asas/design-drawing-white.svg | Drawings and design |
| Plumbing | Expert | 3. Execution | icons/expert-eight-icon3.svg | asas/hard-hat-white.svg | Site work by in-house team |
| Plumbing | Expert | 4. Handover | icons/expert-eight-icon4.svg | asas/handover-white.svg | Key = handover |
| Plumbing | Expert | Authority-approved | icons/expert-eight-icon5.svg | asas/approved-white.svg | Authority approval seal |
| Plumbing | Expert | In-house MEP team | icons/expert-eight-icon6.svg | asas/team-white.svg | Team |
| Plumbing | Commitments slider | Quality policy | ph-bold ph-seal-check | ph-bold ph-medal | Quality |
| Plumbing | Commitments slider | Environment, Health & Safety | ph-bold ph-seal-check | ph-bold ph-shield-check | Safety / EHS |
| Plumbing | Commitments slider | Authority approvals | ph-bold ph-seal-check | ph-bold ph-seal-check (kept) | Approval |
| Plumbing | Highlights meta | Warehouse · DIP, Dubai | ph-buildings / ph-map-pin | ph-warehouse / ph-map-pin | Sector = warehouse |
| Plumbing | Highlights meta | Villas & service blocks · Dubai & Sharjah | ph-buildings / ph-map-pin | ph-house-line / ph-map-pin | Villa works |
| Plumbing | Highlights meta | Interior fit-out · areas | ph-buildings / ph-map-pin | ph-paint-roller / ph-map-pin | Fit-out |
| Plumbing | Arrows, ticks, play, phone | Buttons, scope list, video, call | ph-arrow-right/left, ph-check-circle, ph-play, ph-phone-call | kept | UI glyphs already correct |
| HVAC | About (bg-main-eight-600 card) | "23 team members" counter | icons/about-eleven-team-icon.svg | asas/team-white.svg (69×69) | Team count; white on Action Blue |
| HVAC | Related MEP services (bg-main-eight-600 chip) | Electrical / Plumbing / Fire Fighting / Low Current (per slug) | icons/service-ten-icon1-4.svg | asas/electrical-white, plumbing-white, fire-fighting-white, low-current-white (49×49) | Service icon per slug |
| HVAC | Scope of work cards (pale / featured blue) | 01 Coordination | icons/pricing-eleven-icon1.svg | asas/design-drawing.svg (42×42) | Coordinated MEP design with ceilings, lighting, joinery |
| HVAC | Scope of work cards | 02 Installation (featured, blue bg) | icons/pricing-eleven-icon2.svg | asas/hvac-white.svg (42×42) | AC / ventilation installation |
| HVAC | Scope of work cards | 03 Commissioning | icons/pricing-eleven-icon3.svg | asas/testing.svg (41×42) | Testing & commissioning |
| HVAC | Scope of work card lists | Scope bullet ticks | icons/pricing-eleven-check(-white).svg | asas/check.svg / check-white.svg (21×18) | Library tick, white on featured card |
| HVAC | Commitments left | Approvals stat badge | icons/testimonial-three-google.svg (Google logo) | asas/approved.svg (30×30), alt="" | No ratings; approval seal next to visible label |
| HVAC | Commitments slider | Quote mark | icons/testimonial-eleven-quate.svg | asas/quote.svg (50×36) | Statement quote mark |
| HVAC | Commitments slider | Quality / EHS / Authority approvals | ph-bold ph-seal-check (all) | ph-medal / ph-shield-check / ph-seal-check | One icon per commitment |
| HVAC | Highlights meta | Offices, restaurants & retail · areas | ph-buildings / ph-map-pin | kept | Already correct |
| HVAC | Highlights meta | Villas & service blocks · Dubai & Sharjah | ph-buildings / ph-map-pin | ph-house-line / ph-map-pin | Villa works |
| HVAC | Highlights meta | Design & drawings · Before work starts | ph-buildings / ph-map-pin | ph-pencil-ruler / ph-calendar-check | Design; timing, not a place |
| HVAC | Arrows, ticks, play, phone | Buttons, lists, video, call | ph-arrow-*, ph-check(-circle), ph-play, ph-phone-call | kept | UI glyphs already correct |
| Fire Fighting | Features (white icon tile) | Fire fighting installation | icons/feature-three-icon1.svg | asas/fire-fighting.svg (61×60) | Fire extinguisher = fire fighting systems |
| Fire Fighting | Features | Modification for new layouts | icons/feature-three-icon2.svg | asas/tools.svg | Modifying existing systems |
| Fire Fighting | Features | Civil Defence requirements | icons/feature-three-icon3.svg | asas/approved.svg | Authority approval |
| Fire Fighting | Related MEP services (template forces black, colour on hover) | Electrical / Plumbing / HVAC (per slug) | icons/service-three-icon1-3.svg | asas/electrical.svg, plumbing.svg, hvac.svg (40×40) | Service icon per slug; blue so hover filter still works |
| Fire Fighting | Scope cards action buttons (white, hover inverts) | Request a quote | icons/product-three-icon1.svg | asas/document.svg (19×18) | Quotation document |
| Fire Fighting | Scope cards action buttons | See our projects | icons/product-three-icon2.svg | asas/offices.svg (20×19) | Buildings = projects |
| Fire Fighting | Scope cards action buttons | Contact us | icons/product-three-icon3.svg | asas/chat.svg (17×17) | Enquiry / message |
| Fire Fighting | Service groups panel | Scope bullet ticks | icons/testimonial-three-check.svg | asas/check.svg, check-white.svg on featured blue card (21×18) | Library tick; white on Action Blue |
| Fire Fighting | Service groups panel | Group service icon | ph-bold {service.icon} | kept | Already per service from site.js |
| Fire Fighting | Commitments left | Approvals stat badge | icons/testimonial-three-google.svg (Google logo) | asas/approved.svg (30×30), alt="" | No ratings; approval seal |
| Fire Fighting | Commitments slider | Quote mark | icons/testimonial-three-quate.svg | asas/quote.svg (50×36) | Statement quote mark |
| Fire Fighting | Commitments slider | Civil Defence / Quality / EHS | ph-bold ph-seal-check (all) | ph-seal-check / ph-medal / ph-shield-check | One icon per commitment |
| Fire Fighting | Highlights meta | Offices, restaurants & retail · areas | ph-buildings / ph-map-pin | kept | Already correct |
| Fire Fighting | Highlights meta | Design & drawings · Before work starts | ph-buildings / ph-map-pin | ph-pencil-ruler / ph-calendar-check | Design; timing |
| Fire Fighting | Highlights meta | MEP · Fit-out projects | ph-buildings / ph-map-pin | ph-network / ph-paint-roller | Low current (MEP) card; fit-out, not a place |
| Fire Fighting | Arrows, phone | Buttons, sliders, project links, call | ph-arrow-*, ph-phone-call | kept | UI glyphs already correct |

Missing concepts: sanitary ware (toilet/shower); used `tools`. HDPE pipe has no icon of its own, so it shares `drainage` with the Drainage card.
