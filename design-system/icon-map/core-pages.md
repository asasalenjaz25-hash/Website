# Icon map: core pages

Library: `/assets/images/icons/asas/`. Colour picked by background: blue on white/pale, `-navy` on Signal Gold tiles (`bg-main-two-600`), `-white` on Action Blue. Width/height set to the original SVG's intrinsic size so layout does not shift.

| Page | Section | Item (text) | Old icon | New icon | Why |
|---|---|---|---|---|---|
| Home | Services by group (pricing-seven) | Each service in the Fit-Out / MEP / Specialist lists | icons/pricing-seven-check.svg (20×20) | asas/check-circle.svg (20×20) | Included-item tick. Blue default kept because the active card whitens it with `filter: brightness(0) invert(1)` |
| Home | Why choose ASAS | Every Trade, In-House | icons/choose-seven-icon1.svg (cleaning, 50×52) | asas/toolbox.svg (50×52) | All trades by our own team |
| Home | Why choose ASAS | Approved, Quality-Led, Safety-First | icons/choose-seven-icon2.svg (50×50) | asas/approved.svg (50×50) | Authority approvals (seal) |
| Home | Hero, service highlights, contact | seal-check, service `ph-*` icons from site.js, ph-buildings, ph-phone-call, ph-envelope, arrows | Phosphor font | unchanged | Already match their text |
| About | Core services tabs (gold tile) | Interior Fit-Out | icons/service-two-icon1.svg | asas/fit-out-navy.svg (40×41) | Service icon; navy on gold |
| About | Core services tabs | Electrical Works | icons/service-two-icon2.svg | asas/electrical-navy.svg | Service icon |
| About | Core services tabs | HVAC Works | icons/service-two-icon3.svg | asas/hvac-navy.svg | Service icon |
| About | Core services tabs | Villa Modifications & Service Blocks | icons/service-two-icon4.svg | asas/villa-navy.svg | Service icon |
| About | Core services tabs (decor) | – | shapes/service-two-hand.png (glove + sponge) | removed | Cleaning object, pure decoration |
| About | Vision & mission (decor) | – | shapes/choose-us-two-thumb-shape2.png (vacuum), choose-us-two-shape1.png (sweeper), choose-us-two-shape3.png (mop bucket) | removed | Cleaning objects, pure decoration. Squiggle choose-us-two-shape2.png kept |
| About | How we work (decor) | – | shapes/work-two-shape1.png (mop bucket), work-two-shape2.png (duster) | removed (and the empty wrapper) | Cleaning objects |
| About | Before & after (decor) | – | shapes/before-after-shape2.png (mop) | removed | Cleaning object. Squiggle before-after-shape1.png kept |
| About | Commitments (decor) | – | shapes/testimonial-two-shape1.png (sweeper), testimonial-two-shape3.png (vacuum) | removed | Cleaning objects. Squiggle testimonial-two-shape2.png kept |
| About | Commitments | Quality policy / continual improvement | ph-seal-check | ph-trend-up | Continual improvement |
| About | Commitments | Contracts & specifications | ph-seal-check | ph-clipboard-text | Specifications |
| About | Commitments | Regulations & codes | ph-seal-check | ph-seal-check | Authority approvals (kept) |
| About | Commitments | Clean working environment | ph-seal-check | ph-hard-hat | Site conditions |
| About | Commitments | Environment, health & safety | ph-seal-check | ph-shield-check | EHS |
| About | Commitments | Better working methods | ph-seal-check | ph-cpu | New methods and technology |
| About | Authority Approved card | Approved by DEWA, DM, Civil Defence, Trakhees | shapes/contact-two-info-shape.png (cleaning bucket, 181px by CSS) | asas/approved.svg (182×183) | Approval seal matches the card |
| About | Team shapes | – | shapes/team-four-shape1/2.png (builders carrying timber) | unchanged | On-topic (construction) |
| About | Why ASAS list, arrows, breadcrumb | ph-check-circle, arrows, caret | Phosphor font | unchanged | UI glyphs already correct |
| Services | Service tabs (gold tile, 11 tabs) | Each of the 11 services | icons/service-two-icon1–4.svg in rotation | asas/<service>-navy.svg per slug (40×41): fit-out, civil, joinery, electrical, plumbing, hvac, fire-fighting, low-current, planning, villa, ev-charger | One icon per service; navy on gold |
| Services | Service tabs (decor) | – | shapes/service-two-hand.png (glove + sponge) | removed (and the empty wrapper) | Cleaning object |
| Services | Approvals list, arrows, phone | ph-seal-check, arrows, ph-phone-call | Phosphor font | unchanged | Already fit |
| Planning | Sidebar "Talk To Our Engineers" | Engineer names | icons/service-details-pdf-report.svg (26×26) | asas/engineer.svg (26×26) | Names of the engineers; blue on white card |
| Planning | Sidebar button (Action Blue) | Request a Quote | icons/service-details-btn-pdf.svg (26×26) | asas/document-white.svg (26×26) | Quotation document; white on blue |
| Planning | Contact lines, CTA, service list | ph-phone, ph-envelope-simple, ph-phone-call, arrows | Phosphor font | unchanged | Already fit |
| Projects / ProjectsFilter | Buttons, CTA | arrows, ph-phone-call, caret | Phosphor font | unchanged | UI glyphs; no SVGs on the page |
| FAQ | Breadcrumb, call CTA | caret, ph-phone-call | Phosphor font | unchanged | Already fit |
| Contact | Contact cards | Phone / Office / Email | ph-phone-call, ph-map-pin-area, ph-envelope | unchanged | Already fit |
| Quote / QuoteForm | Form field icons, submit, WhatsApp | ph-user, ph-buildings, ph-phone, ph-envelope, ph-map-pin, arrows, ph-whatsapp-logo | Phosphor font | unchanged | Already fit |

## Not changed (out of scope, flagged)
- About CTA: `shapes/cta-two-shape1–6.png` are framed **cleaning photos** (cleaners with sprays, mops, buckets). Left in place because photos are out of scope, but they should be replaced or removed along with the other photo placeholders.
