"use client";

import { useState } from "react";
import { SECTORS, PROJECTS, FEATURED, featuredProjects, sectorCounts } from "@/components/projects";
import { QUOTE_HREF } from "@/components/site";
import styles from "./ProjectsPage.module.css";

const INITIAL_VISIBLE = 12;

// The four photos of the template's project-three slider, in template order.
// They are placeholders until ASAS supplies real project photos
// (see design-system/image-manifest/projects.md).
export const PROJECT_IMAGES = [
  "/assets/images/thumbs/project-three-thumb1.jpg",
  "/assets/images/thumbs/project-three-thumb2.jpg",
  "/assets/images/thumbs/project-three-thumb3.jpg",
  "/assets/images/thumbs/project-three-thumb4.jpg",
];

// Template card markup from project-three-area (Page_project_html.jsx),
// with ASAS content. The thumb and title were links to the retired
// /project-details page, so they are plain now; the round arrow button
// links to the quote form.
export function ProjectCard({ project, index, className = "" }) {
  const p = project;
  return (
    <div className={`project-three-wrapper bg-white tw-rounded-lg tw-p-5 ${className}`}>
      <div className={"project-three-thumb tw-mb-10"}>
        <img
          className={`tw-rounded-xl ${styles.thumbImg}`}
          src={PROJECT_IMAGES[index % PROJECT_IMAGES.length]}
          alt={`${p.name}: ${p.type}, ${p.location}`}
          loading="lazy"
          width={610}
          height={400}
        />
      </div>
      <div className={"d-flex justify-content-between align-items-center tw-gap-4"}>
        <div className={styles.cardBody}>
          <div className={"project-three-tag tw-mb-4"}>
            <span className={"text-main-eight-600"}>{p.sectorLabel}</span>
          </div>
          <div>
            <h3 className={`tw-text-8 fw-medium ${styles.cardTitle}`}>{p.name}</h3>
            <p className={styles.cardMeta}>
              {p.type} · {p.location}
            </p>
          </div>
        </div>
        <div>
          <a
            className={"tw-w-15 tw-h-15 lh-1 d-inline-flex align-items-center justify-content-center rounded-circle bg-main-eight-600 text-white tw-text-xl"}
            href={QUOTE_HREF}
            aria-label={`Request a quote for a project like ${p.name}`}
          >
            <i className={"ph-bold ph-arrow-up-right"} aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

// Sector filter + the same template image cards in a grid.
export default function ProjectsFilter() {
  const [active, setActive] = useState("featured");
  const [expanded, setExpanded] = useState(false);
  // Cards only animate after the visitor interacts, not on first paint.
  const [animate, setAnimate] = useState(false);

  const counts = sectorCounts();
  const filters = [
    { key: "featured", label: "Featured", count: FEATURED.length },
    { key: "all", label: "All", count: PROJECTS.length },
    ...SECTORS.filter((s) => counts[s.key]).map((s) => ({ ...s, count: counts[s.key] })),
  ];

  const list =
    active === "featured"
      ? featuredProjects()
      : active === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.sector === active);

  const visible = expanded ? list : list.slice(0, INITIAL_VISIBLE);
  const activeLabel = filters.find((f) => f.key === active)?.label ?? "";

  function choose(key) {
    setActive(key);
    setExpanded(false);
    setAnimate(true);
  }

  return (
    <div>
      <div className={styles.filters} role="group" aria-label="Filter projects by sector">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`font-heading fw-medium ${styles.filterBtn}`}
            aria-pressed={active === f.key}
            onClick={() => choose(f.key)}
          >
            <span>{f.label}</span>
            <span className={styles.filterCount}>
              {f.count}
              <span className="visually-hidden"> projects</span>
            </span>
          </button>
        ))}
      </div>

      <p className={styles.resultNote} aria-live="polite">
        Showing {visible.length} of {list.length} {list.length === 1 ? "project" : "projects"}
        {active === "all" ? "" : ` · ${activeLabel}`}
      </p>

      <ul className={`row gy-4 ${styles.cardList}`}>
        {visible.map((p, i) => (
          <li
            key={`${active}-${p.sn}`}
            className={`col-xl-4 col-md-6 ${animate ? styles.cardIn : ""}`}
            style={animate ? { "--stagger": i % INITIAL_VISIBLE } : undefined}
          >
            <ProjectCard project={p} index={i} className={styles.gridCard} />
          </li>
        ))}
      </ul>

      {list.length > INITIAL_VISIBLE && (
        <div className="text-center tw-mt-12">
          <button
            type="button"
            className={`tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1 ${styles.moreBtn}`}
            aria-expanded={expanded}
            onClick={() => {
              setExpanded((v) => !v);
              setAnimate(true);
            }}
          >
            <span className={"btn_inner position-relative z-1 w-100 text-center"}>
              <span className={"btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg"} aria-hidden="true">
                <span className={"overflow-hidden position-relative d-inline-flex"}>
                  <i className={"ph-bold ph-arrow-right"}></i>
                  <i className={"ph-bold ph-arrow-right"}></i>
                </span>
              </span>
              <span className={"btn_text d-inline-flex overflow-hidden text-white"}>
                <span className={"d-flex align-items-center tw-transition-5"}>
                  {expanded ? "Show fewer" : `Show all ${list.length}`}
                </span>
              </span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
