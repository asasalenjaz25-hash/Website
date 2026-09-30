// slug -> page component. Each ASAS service is built on a different template
// layout (see content.md §3.3), so each has its own component in this folder.
import FitOutPage from "./FitOutPage";
import CivilPage from "./CivilPage";
import JoineryPage from "./JoineryPage";
import ElectricalPage from "./ElectricalPage";
import PlumbingPage from "./PlumbingPage";
import HvacPage from "./HvacPage";
import FireFightingPage from "./FireFightingPage";
import LowCurrentPage from "./LowCurrentPage";
import PlanningPage from "./PlanningPage";
import VillaWorksPage from "./VillaWorksPage";
import EvChargersPage from "./EvChargersPage";

export const SERVICE_PAGES = {
  "fit-out": FitOutPage,
  civil: CivilPage,
  joinery: JoineryPage,
  electrical: ElectricalPage,
  plumbing: PlumbingPage,
  hvac: HvacPage,
  "fire-fighting": FireFightingPage,
  "low-current": LowCurrentPage,
  "planning-architecture": PlanningPage,
  "villa-works": VillaWorksPage,
  "ev-chargers": EvChargersPage,
};
