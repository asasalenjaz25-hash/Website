# Image manifest: Projects page (/projects)

All photos below are template placeholders kept exactly as in `components/generated/Page_project_html.jsx`. Nothing was added, removed or edited in `public/`. Swap a file (same path, same size or aspect ratio) or change the `src` once ASAS supplies real photos. The profile PDF (pages 14–41) holds project pictures; ASAS should send the original files.

Project cards use the 4 template project photos in a cycle: card *i* gets `project-three-thumb{(i % 4) + 1}.jpg` (defined in `PROJECT_IMAGES` in `components/pages/ProjectsFilter.jsx`). When per-project photos exist, give each project its own image (e.g. a map keyed by `sn`) instead of the cycle. Card `alt` text is already written per project: "{name}: {type}, {location}".

| Page | Section | Image path | Shows now (template) | Replace with (ASAS photo brief) |
|---|---|---|---|---|
| Projects | Breadcrumb (breadcrumb-area) | /assets/images/thumbs/breadcrumb-thumb.jpg | Generic template banner photo (1320×450) | Wide landscape shot of a finished ASAS fit-out interior or the ASAS team on site in Dubai; 1320×450 or wider at ~3:1 |
| Projects | Featured slider, slide 1 (project-three-area) | /assets/images/thumbs/project-three-thumb1.jpg | Template HVAC project photo (610×400) | Atlas Copco office, Al Musaffah, Abu Dhabi (SN 9): finished office interior |
| Projects | Featured slider, slide 2 | /assets/images/thumbs/project-three-thumb2.jpg | Template HVAC project photo (610×401) | Aramex – HDPE Work warehouse, DIP, Dubai (SN 17) |
| Projects | Featured slider, slide 3 | /assets/images/thumbs/project-three-thumb3.jpg | Template HVAC project photo (610×401) | Bactiguard AB office, Dubai Science Park (SN 11) |
| Projects | Featured slider, slide 4 | /assets/images/thumbs/project-three-thumb4.jpg | Template HVAC project photo (610×400) | MMS – Bay Square office, Business Bay, Dubai (SN 95) |
| Projects | Featured slider, slide 5 | /assets/images/thumbs/project-three-thumb1.jpg (reused) | Same as slide 1 | Damac Executive Heights café & lounge, Barsha Heights (SN 103) |
| Projects | Featured slider, slide 6 | /assets/images/thumbs/project-three-thumb2.jpg (reused) | Same as slide 2 | Jeeves laundry, Index Tower, Dubai (SN 52) |
| Projects | Featured slider, slide 7 | /assets/images/thumbs/project-three-thumb3.jpg (reused) | Same as slide 3 | Azizi – Plaza modification, Al Furjan, Dubai (SN 37) |
| Projects | Featured slider, slide 8 | /assets/images/thumbs/project-three-thumb4.jpg (reused) | Same as slide 4 | Rashid Port building entrance, Port Rashid, Dubai (SN 102) |
| Projects | Sector filter grid (all filters) | project-three-thumb1–4.jpg, cycled by card position | Template HVAC photos, repeated | One photo per project (610×400, ~3:2 landscape, finished space). Priority: the 8 featured projects above, then at least one photo per sector: Offices, Restaurants & Cafés, Retail & Shops, Salons & Spas, Laundries, Warehouses, Education/Lab/Healthcare, Residential, Villas & Service Blocks, EV Charging, Other |
