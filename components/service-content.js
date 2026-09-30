// Copy for the 11 ASAS service pages, keyed by the slugs in components/site.js.
// Source: content.md (Part 1 facts, §3.3 draft descriptions, §3.8 SEO titles).
// Project names come only from the profile's project list (content.md §1.3).
// Each project's `note` states what the list says about it (sector / type and
// location), so it never claims a trade the profile doesn't show.

export const SERVICE_CONTENT = {
  "fit-out": {
    summary:
      "Complete fit-outs for offices, restaurants, cafés, salons, retail units and villas, from bare shell to handover, with every trade under one contract.",
    intro: [
      "Fit-out is the core of what ASAS Alenjaz does. We take a space from bare shell to handover and manage every trade under one contract: civil works, joinery, electrical, HVAC, plumbing, fire fighting and low current systems.",
      "With one contractor responsible for the whole job, you have one programme, one point of contact and one team accountable for the finished space.",
    ],
    scope: [
      "Site survey and review of drawings and authority requirements",
      "Civil works: blockwork, partitions, plastering and flooring",
      "Joinery made and fitted to the approved design",
      "Complete MEP: electrical, HVAC, plumbing, fire fighting and low current",
      "Coordination of all trades to one programme, with regular progress reports",
      "Testing, commissioning and a clean handover",
    ],
    sectors: [
      "Offices & corporate",
      "Restaurants & cafés",
      "Retail & shops",
      "Salons & spas",
      "Laundries",
      "Education, lab & healthcare",
      "Private villas",
    ],
    projectsHeading: "Fit-out projects",
    projects: [
      { name: "Atlas Copco", note: "Offices · Musaffah, Abu Dhabi" },
      { name: "Bactiguard AB", note: "Office · Dubai Science Park" },
      { name: "Projecto Açaí", note: "Restaurant & café · Silicon Oasis" },
      { name: "Loofah Salon & Spa", note: "Salon & spa · Mirdif" },
    ],
    seoTitle: "Interior Fit-Out Contractor in Dubai · ASAS Alenjaz",
    seoDescription:
      "Complete interior fit-outs for offices, restaurants, retail units, salons and villas in Dubai. Civil, joinery and all MEP trades under one contract.",
  },

  civil: {
    summary:
      "Blockwork, plastering, flooring, partitions and structural modifications, including villa extensions and service blocks.",
    intro: [
      "Our civil works prepare and build the spaces the other trades work in: new partitions and blockwork, plastering, flooring and structural modifications.",
      "Civil works run alongside our joinery and MEP teams, so openings, chases and services are planned together instead of cut in afterwards.",
    ],
    scope: [
      "Blockwork and internal partitions",
      "Plastering and wall preparation",
      "Flooring and floor preparation",
      "Structural modifications to existing spaces",
      "Villa extensions and service blocks",
      "Coordination with joinery and MEP trades on site",
    ],
    sectors: [
      "Private villas",
      "Residential towers",
      "Offices & corporate",
      "Restaurants & cafés",
      "Retail & shops",
    ],
    projectsHeading: "Related projects",
    projects: [
      { name: "Villa service blocks", note: "Oud Al Muteena, Al Satwa, Al Lesaily, Al Quoz" },
      { name: "G+3+R building", note: "Residential building · Al Satwa" },
      { name: "Villa modifications", note: "Al Rashidiya, Al Warqa, Palm Jumeirah" },
    ],
    seoTitle: "Civil Works for Fit-Outs & Villas in Dubai · ASAS Alenjaz",
    seoDescription:
      "Blockwork, plastering, flooring, partitions and structural modifications for fit-outs, villa extensions and service blocks across Dubai.",
  },

  joinery: {
    summary:
      "Custom joinery for commercial and residential interiors, made to the approved design as part of a complete fit-out.",
    intro: [
      "Joinery is part of our fit-out service. We deliver joinery to the approved design for commercial and residential interiors.",
      "Because the same contractor handles the civil and MEP works, joinery is measured, set out and coordinated with lighting, power and plumbing before it is installed.",
    ],
    scope: [
      "Joinery for commercial and residential interiors",
      "Work to the approved design drawings",
      "Site measurement before production",
      "Coordination with civil, electrical and plumbing works",
      "Installation and finishing on site",
    ],
    sectors: [
      "Offices & corporate",
      "Restaurants & cafés",
      "Retail & shops",
      "Salons & spas",
      "Private villas",
    ],
    projectsHeading: "Recent fit-out projects",
    projects: [
      { name: "Jan's Noodles", note: "Restaurant · Deira" },
      { name: "Fiore Glasses", note: "Retail · Dubai Outlet Mall" },
      { name: "Moby Media", note: "Offices · Media City" },
    ],
    seoTitle: "Joinery for Fit-Outs in Dubai · ASAS Alenjaz",
    seoDescription:
      "Custom joinery for commercial and residential interiors in Dubai, delivered as part of a complete fit-out by ASAS Alenjaz.",
  },

  electrical: {
    summary:
      "DEWA-compliant electrical installation for fit-outs and buildings: power, lighting, distribution boards and final connections.",
    intro: [
      "ASAS Alenjaz is approved by the Dubai Electricity and Water Authority (DEWA). We install electrical systems for fit-outs and buildings, from distribution boards to the last light fitting.",
      "Our own MEP engineers, foremen and technicians carry out the work, so the installation is planned, built and tested by one team.",
    ],
    scope: [
      "DEWA-compliant electrical installation",
      "Power and lighting installation",
      "Distribution boards and final connections",
      "Electrical works for fit-outs, modifications and new buildings",
      "Power supply for EV chargers",
      "Testing before handover",
    ],
    sectors: [
      "Offices & corporate",
      "Restaurants & cafés",
      "Retail & shops",
      "Warehouses & logistics",
      "Residential towers",
      "Private villas",
    ],
    projectsHeading: "Recent projects",
    projects: [
      { name: "Akoya Oxygen", note: "EV car chargers · Akoya, Dubai" },
      { name: "Sustainable City", note: "EV car chargers · Dubai" },
      { name: "Lawyer Office", note: "Office · Millennium Tower, Dubai" },
      { name: "Bay Square units", note: "Offices & corporate · Business Bay" },
    ],
    seoTitle: "Electrical Works & DEWA-Approved Contractor · ASAS",
    seoDescription:
      "DEWA-approved electrical contractor in Dubai. Power, lighting, distribution boards and final connections for fit-outs, villas and buildings.",
  },

  plumbing: {
    summary:
      "Water supply, drainage and sanitary installation for kitchens, washrooms, laundries and villas, including HDPE pipework.",
    intro: [
      "We install water supply, drainage and sanitary systems for commercial and residential projects, from restaurant kitchens and washrooms to laundries and villas.",
      "Our plumbing work includes HDPE pipework, including the HDPE works at the Aramex warehouse in DIP.",
    ],
    scope: [
      "Water supply installation",
      "Drainage installation",
      "Sanitary installation for washrooms and kitchens",
      "Plumbing for laundries and commercial units",
      "HDPE pipework",
      "Plumbing for villa modifications and service blocks",
    ],
    sectors: [
      "Restaurants & cafés",
      "Laundries",
      "Salons & spas",
      "Warehouses & logistics",
      "Private villas",
    ],
    projectsHeading: "Recent projects",
    projects: [
      { name: "Aramex warehouse", note: "HDPE works · DIP" },
      { name: "Jeeves", note: "Laundries · Index Tower, Damac Upper Crest, Al Barsha" },
      { name: "Red Tomato", note: "Restaurant · Al Barari" },
    ],
    seoTitle: "Plumbing Works in Dubai · ASAS Alenjaz",
    seoDescription:
      "Water supply, drainage, sanitary and HDPE plumbing works for kitchens, washrooms, laundries, warehouses and villas in Dubai.",
  },

  hvac: {
    summary:
      "Air-conditioning and ventilation for offices, restaurants, retail and residential units: installation, modification and commissioning.",
    intro: [
      "We install and modify air-conditioning and ventilation systems for offices, restaurants, retail units and homes.",
      "On a fit-out, HVAC is coordinated with the ceiling, lighting and joinery from the start, then commissioned before handover.",
    ],
    scope: [
      "Air-conditioning installation",
      "Ventilation installation",
      "Modification of existing HVAC systems for new layouts",
      "Coordination with ceilings, lighting and joinery",
      "Testing and commissioning",
    ],
    sectors: [
      "Offices & corporate",
      "Restaurants & cafés",
      "Retail & shops",
      "Residential towers",
      "Private villas",
    ],
    projectsHeading: "Recent fit-out projects",
    projects: [
      { name: "Lawyer Office", note: "Office · Millennium Tower, Dubai" },
      { name: "Red Tomato", note: "Restaurant · Al Barari" },
      { name: "Dubai Heights Academy", note: "Education · Al Barsha" },
    ],
    seoTitle: "HVAC Installation Works in Dubai · ASAS Alenjaz",
    seoDescription:
      "Air-conditioning and ventilation installation, modification and commissioning for offices, restaurants, retail units and homes in Dubai.",
  },

  "fire-fighting": {
    summary:
      "Fire fighting installations and modifications to Civil Defence requirements for fit-out projects.",
    intro: [
      "ASAS Alenjaz is registered with Civil Defence. We install and modify fire fighting systems as part of fit-out projects, so the finished space meets Civil Defence requirements.",
      "When a new layout changes an existing space, we adapt the fire fighting system to suit it alongside the rest of the MEP works.",
    ],
    scope: [
      "Fire fighting installation for fit-out projects",
      "Modification of existing systems to suit new layouts",
      "Work to Civil Defence requirements",
      "Coordination with ceilings and the other MEP trades",
      "Testing before handover",
    ],
    sectors: [
      "Offices & corporate",
      "Restaurants & cafés",
      "Retail & shops",
      "Education, lab & healthcare",
      "Warehouses & logistics",
    ],
    projectsHeading: "Recent fit-out projects",
    projects: [
      { name: "Café & Lounge, Damac Executive Heights", note: "Restaurant & café" },
      { name: "Al Dana Dental Clinic", note: "Healthcare · Jebel Ali" },
      { name: "Bactiguard AB", note: "Office · Dubai Science Park" },
    ],
    seoTitle: "Fire Fighting Systems for Fit-Outs in Dubai · ASAS Alenjaz",
    seoDescription:
      "Fire fighting installations and modifications to Civil Defence requirements for office, restaurant, retail and healthcare fit-outs in Dubai.",
  },

  "low-current": {
    summary:
      "Low current installations for fit-outs, installed and coordinated with the electrical and interior works.",
    intro: [
      "Low current systems are one of the MEP disciplines we deliver on fit-out projects.",
      "Our MEP team installs them alongside the electrical works, so containment, cabling and final positions are agreed before ceilings and joinery close up.",
    ],
    scope: [
      "Low current installations for fit-out projects",
      "Containment and cabling routed with the electrical works",
      "Coordination with ceilings, joinery and the other MEP trades",
      "Installation in offices, retail units, restaurants and residential units",
      "Testing before handover",
    ],
    sectors: [
      "Offices & corporate",
      "Retail & shops",
      "Restaurants & cafés",
      "Education, lab & healthcare",
      "Residential towers",
    ],
    projectsHeading: "Recent fit-out projects",
    projects: [
      { name: "Binary Tower office", note: "Offices & corporate" },
      { name: "Moby Media", note: "Offices · Media City" },
      { name: "Studio City", note: "Offices & corporate" },
    ],
    seoTitle: "Low Current Systems for Fit-Outs · ASAS Alenjaz",
    seoDescription:
      "Low current installations for office, retail, restaurant and residential fit-outs in Dubai, coordinated with the electrical works.",
  },

  "planning-architecture": {
    summary:
      "Space planning and architectural design that turns your brief into buildable, approvable drawings.",
    intro: [
      "Good fit-outs start with good drawings. Our planning and architecture service turns your brief into a layout and a set of drawings that can be approved and built.",
      "Because the same company builds the design, the drawings account for civil, joinery and MEP requirements from the start.",
    ],
    scope: [
      "Review of your brief, the existing space and its drawings",
      "Space planning and layout options",
      "Architectural design drawings",
      "MEP design coordinated with the layout",
      "Drawings prepared to authority requirements",
    ],
    sectors: [
      "Offices & corporate",
      "Restaurants & cafés",
      "Retail & shops",
      "Salons & spas",
      "Private villas",
    ],
    projectsHeading: "Recent fit-out projects",
    projects: [
      { name: "Bay Square units", note: "Offices & corporate · Business Bay" },
      { name: "Muzn Café", note: "Restaurant & café · Ajman" },
      { name: "Hair Tas", note: "Salon · Al Jaddaf" },
    ],
    seoTitle: "Planning & Architecture for Fit-Outs · ASAS Alenjaz",
    seoDescription:
      "Space planning and architectural design for fit-outs in Dubai: buildable, approvable drawings coordinated with civil, joinery and MEP works.",
  },

  "villa-works": {
    summary:
      "Extensions, service blocks, G+1 additions and layout modifications for private villas across Dubai and Sharjah.",
    intro: [
      "Villa work makes up a large part of our project list, with around 35 villas and service blocks across Dubai and Sharjah.",
      "We build service blocks, add floors and extensions, and modify villa layouts, with the civil works and all MEP trades under one contract.",
    ],
    scope: [
      "Service blocks for villas",
      "Villa extensions and G+1 additions",
      "Layout modifications to existing villas",
      "Residential building works from G+1 to G+3+R",
      "Civil, electrical, plumbing and HVAC works in one contract",
    ],
    sectors: ["Private villas", "Residential towers"],
    projectsHeading: "Related projects",
    projects: [
      { name: "Villa service blocks", note: "Oud Al Muteena, Al Satwa, Al Lesaily, Al Quoz" },
      { name: "Villa modifications", note: "Al Rashidiya, Al Warqa, Palm Jumeirah" },
      { name: "G+3+R building", note: "Residential building · Al Satwa" },
    ],
    seoTitle: "Villa Modifications & Service Blocks · ASAS Alenjaz",
    seoDescription:
      "Villa extensions, service blocks, G+1 additions and layout modifications across Dubai and Sharjah, with civil and MEP works under one contract.",
  },

  "ev-chargers": {
    summary:
      "Supply and installation of electric-vehicle chargers for residential communities and private villas.",
    intro: [
      "We supply and install electric-vehicle chargers for residential communities and private villas across Dubai.",
      "As a DEWA-approved electrical contractor, we handle the charger installation together with the electrical works that feed it.",
    ],
    scope: [
      "Supply of EV chargers",
      "Installation in residential communities and private villas",
      "Electrical supply works for the chargers",
      "DEWA-compliant installation",
      "Testing before handover",
    ],
    sectors: ["Residential communities", "Private villas"],
    projectsHeading: "EV charging projects",
    projects: [
      { name: "Akoya Oxygen", note: "EV car chargers · Akoya, Dubai" },
      { name: "Dubai Hills", note: "EV car chargers · Dubai" },
      { name: "Sustainable City", note: "EV car chargers · Dubai" },
      { name: "Villa Mr. Ahmed Al Falasi", note: "EV car chargers · Al Rashidiya, Dubai" },
    ],
    seoTitle: "EV Charger Installation in Dubai · ASAS Alenjaz",
    seoDescription:
      "Supply and installation of electric-vehicle chargers for residential communities and private villas in Dubai, by a DEWA-approved contractor.",
  },
};

// "How we work" (content.md §3.1), shared by the hub and every service page.
export const PROCESS = [
  {
    title: "Site visit & planning",
    text: "We review the space, drawings and authority requirements.",
  },
  {
    title: "Design & approvals",
    text: "Architecture and MEP design prepared to DEWA, Dubai Municipality, Civil Defence and Trakhees requirements.",
  },
  {
    title: "Execution",
    text: "Our in-house teams build to specification, with regular progress reports.",
  },
  {
    title: "Handover",
    text: "Testing, commissioning and a clean, on-schedule handover.",
  },
];
