import { NAV, SERVICES } from "@/components/site";

const LINK = "nav-menu__link text-heading hover-text-main-eight-600 tw-py-9 fw-medium w-100";
const SUB_UL = "nav-submenu scroll-sm position-absolute start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-hidden tw-p-2 tw-duration-200 tw-z-99";
const SUB_LI = "nav-submenu__item d-block tw-rounded tw-duration-200 position-relative";
const SUB_A = "nav-submenu__link position-relative z-1 text-heading fw-medium w-100 d-block tw-py-2 tw-px-305 tw-rounded";

function ServicesSubmenu() {
  const groups = [...new Set(SERVICES.map((s) => s.group))];
  return (
    <ul className={SUB_UL}>
      <li className={SUB_LI}>
        <a href="/services" className={SUB_A}>All Services</a>
      </li>
      {groups.map((group) => (
        <li key={group} className="nav-submenu__group">
          <span className="nav-submenu__label">{group}</span>
          <ul>
            {SERVICES.filter((s) => s.group === group).map((s) => (
              <li key={s.slug} className={SUB_LI}>
                <a href={`/services/${s.slug}`} className={SUB_A}>{s.title}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

/**
 * The site menu, shared by the desktop header and the mobile drawer.
 * On mobile, main.js opens a submenu when its parent <li> is tapped, so the
 * parent link has no href there (it would navigate away instead).
 */
export default function SiteNav({ mobile = false }) {
  return (
    <ul
      className={
        mobile
          ? "nav-menu d-xl-flex align-items-center nav-menu--mobile d-block tw-mt-8"
          : "nav-menu d-xl-flex align-items-center tw-gap-8"
      }
    >
      {NAV.map((item) =>
        item.children ? (
          <li key={item.href} className="nav-menu__item has-submenu position-relative">
            {mobile ? (
              <a role="button" tabIndex={0} className={`${LINK} tw-pe-4`}>{item.label}</a>
            ) : (
              <a href={item.href} className={`${LINK} tw-pe-4`}>{item.label}</a>
            )}
            <ServicesSubmenu />
          </li>
        ) : (
          <li key={item.href} className="nav-menu__item">
            <a href={item.href} className={LINK}>{item.label}</a>
          </li>
        )
      )}
    </ul>
  );
}
