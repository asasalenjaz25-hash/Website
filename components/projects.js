// ASAS Alenjaz project list, reconstructed from "LIST OF PROJECTS 01–04"
// (pages 9–12 of ASAS ALENJAZ PROFILE.2026.pdf) using the position of each
// text line on the page. `sn` is the serial number printed in the profile.
// The profile's own numbering skips 41–47 and 49, and row 104 is empty, so
// the list runs to SN 103 but holds fewer projects than that.
// Place names have been tidied (e.g. "Jabl Ali" → "Jebel Ali"); everything
// else is as printed. ASAS has approved publishing all client names.

export const SECTORS = [
  { key: "offices", label: "Offices" },
  { key: "restaurants", label: "Restaurants & Cafés" },
  { key: "retail", label: "Retail & Shops" },
  { key: "salons", label: "Salons & Spas" },
  { key: "laundries", label: "Laundries" },
  { key: "warehouses", label: "Warehouses" },
  { key: "education-health", label: "Education, Lab & Healthcare" },
  { key: "residential", label: "Residential Buildings & Towers" },
  { key: "villas", label: "Villas & Service Blocks" },
  { key: "ev", label: "EV Charging" },
  { key: "other", label: "Other" },
];

const RAW = [
  // LIST OF PROJECTS 01
  [1, "Jan’s Noodles Restaurant", "Restaurant", "restaurants", "Deira, Dubai"],
  [2, "Fishy Restaurant", "Restaurant", "restaurants", "Jumeirah, Dubai"],
  [3, "Red Tomato", "Restaurant", "restaurants", "Al Barari, Dubai"],
  [4, "Projecto Açaí", "Restaurant", "restaurants", "Silicon Oasis, Dubai"],
  [5, "Dubai Heights Academy", "Lab", "education-health", "Al Barsha, Dubai"],
  [6, "Home Bond", "Office", "offices", "Sheikh Zayed Road, Dubai"],
  [7, "AC Management Office", "Office", "offices", "Measum, Dubai"],
  [8, "Bundakii Faris", "Office", "offices", "911, Binary Tower, Dubai"],
  [9, "Atlas Copco", "Office", "offices", "Al Musaffah, Abu Dhabi"],
  [10, "Lawyer Office", "Office", "offices", "Millennium Tower, Dubai"],
  [11, "Bactiguard AB", "Office", "offices", "Dubai Science Park, Dubai"],
  [12, "Int. Humanitarian", "Office", "offices", "Humanitarian City, Dubai"],
  [13, "Master Polish", "Garage", "other", "Ajman"],
  [14, "Masayay Restaurant", "Restaurant", "restaurants", "Musaffah, Abu Dhabi"],
  [15, "SGN Solutions FZCO", "Warehouse", "warehouses", "Jebel Ali, Dubai"],
  [16, "I Cleaning", "Laundry", "laundries", "Jebel Ali, Dubai"],
  [17, "Aramex – HDPE Work", "Warehouse", "warehouses", "DIP, Dubai"],
  [18, "Barg Express", "Warehouse", "warehouses", "DIP, Dubai"],
  [19, "Akoya Oxygen", "Car charger", "ev", "Akoya, Dubai"],
  [20, "Dubai Hills", "Car charger", "ev", "Dubai"],
  [21, "Sustainable City", "Car charger", "ev", "Dubai"],
  [22, "Villa Mr. Ahmed Al Falasi", "Car charger", "ev", "Al Rashidiya, Dubai"],
  [23, "Oleg Nastenko", "Office", "offices", "Opus, Business Bay, Dubai"],
  [24, "Mr. Mustafa Al Jabli", "Office", "offices", "Ontario, Business Bay, Dubai"],

  // LIST OF PROJECTS 02
  [25, "Muzn", "Café & Restaurant", "restaurants", "34 Mall, Ajman"],
  [26, "Desco Printing", "Shop", "retail", "Expo Metro St, Dubai"],
  [27, "Torino", "Shop", "retail", "Al Warqa Mall, Dubai"],
  [28, "Emarat’s Optics", "Shop", "retail", "Deira, Dubai"],
  [29, "Retail 40.2", "Café", "restaurants", "Al Nahda Metro St, Dubai"],
  [30, "Hotdog Garage", "Café", "restaurants", "Al Awir, Dubai"],
  [31, "Pop JI", "Café", "restaurants", "Al Nahda Metro St, Dubai"],
  [32, "Daily Taste", "Market", "retail", "DIP, Dubai"],
  [33, "Hair Tas Salon", "Salon", "salons", "Al Jaddaf, Dubai"],
  [34, "Graffio UN. CO", "Salon", "salons", "Al Marsha, Dubai"],
  [35, "Bella Cure", "Salon & Spa", "salons", "Mirdif, Dubai"],
  [36, "Loofah", "Salon & Spa", "salons", "Mirdif, Dubai"],
  [37, "Azizi – Plaza", "Modification", "residential", "Al Furjan, Dubai"],
  [38, "Azizi – Shahista", "Modification", "residential", "Al Furjan, Dubai"],
  [39, "Oceana", "Modification", "residential", "Palm Jumeirah, Dubai"],
  [40, "4 Shop, B2", "Modification", "retail", "Discovery Gardens, Dubai"],
  [48, "Azizi – Samia", "Modification", "residential", "Al Furjan, Dubai"],
  [50, "Azizi – Farishta", "Modification", "residential", "Al Furjan, Dubai"],
  [51, "Azizi – Star", "Modification", "residential", "Al Furjan, Dubai"],
  [52, "Jeeves", "Laundry", "laundries", "Index Tower, Dubai"],
  [53, "Jeeves", "Laundry", "laundries", "Dubai"],
  [54, "Jeeves", "Laundry", "laundries", "Damac Upper Crest, Dubai"],
  [55, "Jeeves", "Laundry", "laundries", "Al Barsha, Dubai"],
  [56, "Fiore Glasses", "Kiosk", "retail", "Dubai Outlet Mall, Dubai"],

  // LIST OF PROJECTS 03
  [57, "Mr. Abdulrahman Al Asli Al Falasi", "Building G+3+R", "residential", "Al Satwa, Dubai"],
  [58, "Mr. Zohair Ben Redha", "Building G+1", "residential", "Al Souk Al Kabeer, Dubai"],
  [59, "Villa Mr. Marwan Al Falasi", "Residential Villa G+1+SB", "villas", "Nad Al Sheba 2nd, Dubai"],
  [60, "Villa Mr. Mohmmad Ben Hammad", "Residential Villa G+1+SB+M", "villas", "Al Khawaneej 1st, Dubai"],
  [61, "Villa Mr. Zohair Ben Redha", "Residential Villa G+1+SB+M", "villas", "Al Barsha, Dubai"],
  [62, "Villa Mr. Musbah", "Residential Villa G+SB", "villas", "Al Hudaiba, Dubai"],
  [63, "Villa Mr. Mohammad Al Shehy", "Residential Villa G+1+SB+M", "villas", "Al Khawaneej 1st, Dubai"],
  [64, "Villa Mr. Ahmad Lootah", "Residential Villa G+1+SB", "villas", "Nad Al Sheba 4th, Dubai"],
  [65, "Villa Mr. Hammad Al Jafely 01", "Residential Villa G+1", "villas", "Jumeirah Golf Estates, Dubai"],
  [66, "Villa Mr. Hammad Al Jafely 02", "Residential Villa G+1", "villas", "Jumeirah Golf Estates, Dubai"],
  [67, "Mr. Essam Hassan Ali", "Residential Villa G+1", "villas", "Al Khawaneej 2nd, Dubai"],
  [68, "Mr. Marwan Abdulwahed Ahmad", "Residential Villa G+1", "villas", "Al Barsha, Dubai"],
  [69, "Sultan Abdulaziz", "Villa G+1", "villas", "Al Jurainah, Sharjah"],
  [70, "Hamad Al Ketbi", "Villa G+1+SB", "villas", "Margham, Dubai"],
  [71, "Villa Zainab Ali", "Modification", "villas", "Al Rashidiya, Dubai"],
  [72, "Villa Hassan Al Haj", "Modification", "villas", "Al Tawar, Dubai"],
  [73, "Villa Kaltham Ibrahim Hassan", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [74, "Villa Badria Mubarak", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [75, "Villa Fatema Jul", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [76, "Villa Moosa Abdulla Foolad", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [77, "Villa Mohd Hussain", "Service Block", "villas", "Al Rashidiya, Dubai"],
  [78, "Villa Ahmad Khamees Al Sory", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [79, "Villa Zahera", "Service Block", "villas", "Al Satwa, Dubai"],
  [80, "Villa Mohamed Yaqout", "Service Block", "villas", "Al Satwa, Dubai"],

  // LIST OF PROJECTS 04
  [81, "Villa Rashid Jaber", "Service Block", "villas", "Al Lisaili, Dubai"],
  [82, "Villa Saeed Ghomran", "Service Block", "villas", "Al Lisaili, Dubai"],
  [83, "Villa Ahmed Al Falasi", "Service Block", "villas", "Al Rashidiya, Dubai"],
  [84, "Villa Maryam Saleh Suliman", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [85, "Villa Muna Al Bloshi", "Modification", "villas", "Al Warqa, Dubai"],
  [86, "Villa Mr. Hashem Hassan", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [87, "Villa Mr. Abdulmajid Ghilam", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [88, "Diamond Plaza Building", "Modification", "residential", "Sharjah"],
  [89, "Villa Moosa Al Blooshi", "Service Block", "villas", "Al Quoz, Dubai"],
  [90, "Villa Ali Jashooh", "Service Block", "villas", "Oud Al Muteena, Dubai"],
  [91, "Villa Ms. Michelle Caroline", "Residential Villa G+1", "villas", "Palm Jumeirah, Dubai"],
  [92, "901 Mina Azizi", "Penthouse", "residential", "Palm Jumeirah, Dubai"],
  [93, "Crystal", "Shop", "retail", "Al Barsha Mall, Dubai"],
  [94, "Torino", "Shop", "retail", "Aswaq Al Mizhar, Dubai"],
  [95, "MMS – Bay Square", "Office", "offices", "Business Bay, Dubai"],
  [96, "301 – Bay Square", "Office", "offices", "Business Bay, Dubai"],
  [97, "302 – Bay Square", "Office", "offices", "Business Bay, Dubai"],
  [98, "403 – Bay Square", "Office", "offices", "Business Bay, Dubai"],
  [99, "Moby Media FZ", "Office", "offices", "Media City, Dubai"],
  [100, "209 B3 Studio", "Office", "offices", "Studio City, Dubai"],
  [101, "Al Dana Dental Clinic", "Dental", "education-health", "Jebel Ali, Dubai"],
  [102, "Rashid Port", "Building Entrance", "other", "Port Rashid, Dubai"],
  [103, "Damac Executive Heights", "Café & Lounge", "restaurants", "Barsha Heights, Dubai"],
];

const SECTOR_LABELS = Object.fromEntries(SECTORS.map((s) => [s.key, s.label]));

export const sectorLabel = (key) => SECTOR_LABELS[key] || key;

export const PROJECTS = RAW.map(([sn, name, type, sector, location]) => ({
  sn,
  name,
  type,
  sector,
  sectorLabel: sectorLabel(sector),
  location,
}));

// Recognisable commercial projects, in display order (by SN).
export const FEATURED = [9, 17, 11, 95, 103, 52, 37, 102];

export const featuredProjects = () =>
  FEATURED.map((sn) => PROJECTS.find((p) => p.sn === sn)).filter(Boolean);

// Number of projects per sector, e.g. { offices: 17, ... }.
export const sectorCounts = () =>
  PROJECTS.reduce((acc, p) => {
    acc[p.sector] = (acc[p.sector] || 0) + 1;
    return acc;
  }, {});
