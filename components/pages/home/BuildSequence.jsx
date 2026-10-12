"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./BuildSequence.module.css";

// Scroll-driven "watch a fit-out come together" showcase. A blueprint room in a
// sticky stage gains one trade per step as the matching text block crosses the
// middle of the viewport. Pure SVG + CSS; no GSAP, so it survives route changes.

// state for a layer relative to the active step
const stateOf = (i, active, last) =>
  active === last || i === active ? "current" : i < active ? "past" : "future";

export default function BuildSequence({ steps }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const last = steps.length - 1;

  useEffect(() => {
    // On phones the pinned stage covers the top half, so trigger lower down.
    const narrow = window.matchMedia("(max-width: 991px)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        }
      },
      { rootMargin: narrow ? "-72% 0px -24% 0px" : "-55% 0px -40% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const L = (i) => ({ className: styles.layer, "data-state": stateOf(i, active, last) });

  return (
    <section className={styles.section} aria-labelledby="build-title">
      <div className={"container"}>
        <div className={styles.head}>
          <div className={"section-seven-subtitle section-three-subtitle section-six-subtitle font-heading tw-text-base fw-medium tw-rounded-2xl text-uppercase text-heading tw-mb-4 d-inline-block position-relative z-1"}>
            Every trade, one team
          </div>
          <h2 id="build-title" className={"section-seven-title tw-text-122 tw-char-animation"}>
            Watch A Fit-Out Come Together, Trade By Trade
          </h2>
          <p className={styles.lead}>
            Scroll through a room as our team builds it: from the first drawing to the day we hand over the keys.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.stageCol}>
            <div className={styles.stage}>
              <div className={styles.stageTop} aria-hidden="true">
                <span className={styles.stageCount}>
                  {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </span>
                <span className={styles.stageName}>{steps[active].title}</span>
              </div>

              <svg className={styles.svg} viewBox="0 0 600 470" role="img" aria-label={`Blueprint of a room at the ${steps[active].title} stage`}>
                <defs>
                  <pattern id="bs-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0H0V20" fill="none" stroke="var(--asas-border)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="470" fill="url(#bs-grid)" />

                {/* 8 · Handover: finishes sit behind every other layer */}
                <g {...L(8)}>
                  <rect x="54" y="130" width="492" height="262" fill="#EDF2FD" />
                  <rect x="54" y="392" width="492" height="8" fill="#E9C46A" opacity=".55" />
                  <g className={styles.fade}>
                    <path d="M200 340h120M214 340v52M306 340v52" stroke="var(--asas-navy)" strokeWidth="5" strokeLinecap="round" fill="none" />
                    <path d="M176 392v-36h20M344 392v-36h-20" stroke="var(--asas-blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M372 392v-26M364 366c0-16 8-24 8-30 0 6 8 14 8 30z" stroke="#2F7D4F" strokeWidth="3" fill="#CFE8D8" strokeLinejoin="round" />
                  </g>
                  <g className={styles.badge}>
                    <circle cx="520" cy="36" r="22" fill="var(--asas-gold)" />
                    <path d="M509 36l8 8 14-15" stroke="var(--asas-navy)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>
                </g>

                {/* 0 · Planning: dashed outline and dimensions */}
                <g {...L(0)}>
                  <path className={styles.draw} pathLength="1" d="M40 60H560V414H40Z" stroke="var(--asas-blue)" strokeWidth="2" strokeDasharray="8 6" fill="none" />
                  <g className={styles.fade} stroke="var(--asas-blue)" strokeWidth="1.5" fill="none">
                    <path d="M40 38H560M40 32v12M560 32v12" />
                    <path d="M18 60V414M12 60h12M12 414h12" />
                  </g>
                  <g className={styles.fade} fill="var(--asas-blue)" fontSize="13" fontFamily="Poppins, sans-serif" fontWeight="600">
                    <text x="300" y="30" textAnchor="middle">8.40 m</text>
                    <text x="14" y="240" textAnchor="middle" transform="rotate(-90 14 240)">3.60 m</text>
                  </g>
                </g>

                {/* 1 · Civil: slabs, walls, false ceiling */}
                <g {...L(1)} fill="var(--asas-navy)">
                  <rect className={styles.rise} x="40" y="400" width="520" height="14" />
                  <rect className={styles.rise} x="40" y="60" width="14" height="340" />
                  <rect className={styles.rise} x="546" y="60" width="14" height="340" />
                  <rect className={styles.rise} x="40" y="60" width="520" height="14" />
                  <path className={styles.draw} pathLength="1" d="M54 130H546" stroke="var(--asas-navy)" strokeWidth="3" fill="none" />
                  <g className={styles.fade} stroke="#fff" strokeWidth="1" opacity=".35">
                    <path d="M40 120h14M40 180h14M40 240h14M40 300h14M40 360h14M546 150h14M546 210h14M546 270h14M546 330h14" />
                  </g>
                </g>

                {/* 2 · Joinery: door, wall cabinet, shelves, counter */}
                <g {...L(2)} stroke="var(--asas-navy)" strokeWidth="3" strokeLinejoin="round" fill="#fff">
                  <path className={styles.draw} pathLength="1" d="M72 400V250H132V400" />
                  <circle className={styles.fade} cx="122" cy="330" r="3" fill="var(--asas-gold)" stroke="none" />
                  <path className={styles.draw} pathLength="1" d="M400 150H530V198H400Z M465 150V198" />
                  <path className={styles.draw} pathLength="1" d="M410 232H520M410 262H520" />
                  <path className={styles.draw} pathLength="1" d="M394 330H536V400H394Z M442 336V400M490 336V400" />
                  <path className={styles.draw} pathLength="1" d="M390 330H540" strokeWidth="5" />
                </g>

                {/* 3 · Electrical: conduit, pendants, switch, socket */}
                <g {...L(3)}>
                  <path className={styles.draw} pathLength="1" d="M60 118H540M200 118V160M300 118V160" stroke="var(--asas-navy)" strokeWidth="2.5" fill="none" />
                  <path className={styles.current} d="M60 118H540" stroke="var(--asas-gold)" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <g className={styles.glow}>
                    <circle cx="200" cy="178" r="30" fill="var(--asas-gold)" opacity=".22" />
                    <circle cx="300" cy="178" r="30" fill="var(--asas-gold)" opacity=".22" />
                  </g>
                  <path className={styles.fade} d="M186 174h28l-6-14h-16zM286 174h28l-6-14h-16z" fill="var(--asas-gold)" stroke="var(--asas-navy)" strokeWidth="2" strokeLinejoin="round" />
                  <rect className={styles.fade} x="146" y="262" width="14" height="20" rx="2" fill="#fff" stroke="var(--asas-navy)" strokeWidth="2" />
                  <rect className={styles.fade} x="346" y="300" width="20" height="14" rx="2" fill="#fff" stroke="var(--asas-navy)" strokeWidth="2" />
                </g>

                {/* 4 · Plumbing: supply, drain, sink, dripping tap */}
                <g {...L(4)} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path className={styles.draw} pathLength="1" d="M478 414V350H486" stroke="var(--asas-blue)" strokeWidth="5" />
                  <path className={styles.draw} pathLength="1" d="M456 414V344" stroke="#0E3470" strokeWidth="6" />
                  <path className={styles.draw} pathLength="1" d="M440 322h44l-4 8h-36z" stroke="var(--asas-blue)" strokeWidth="3" fill="#fff" />
                  <path className={styles.draw} pathLength="1" d="M486 322V302H468V310" stroke="var(--asas-navy)" strokeWidth="3" />
                  <path className={styles.drip} d="M468 314c-3 5-3 7 0 8 3-1 3-3 0-8z" fill="var(--asas-blue)" stroke="none" />
                </g>

                {/* 5 · HVAC: duct, fan, diffusers, airflow */}
                <g {...L(5)}>
                  <path className={styles.draw} pathLength="1" d="M90 80H352V104H90Z" stroke="var(--asas-navy)" strokeWidth="2.5" fill="#fff" />
                  <path className={styles.fade} d="M122 104v26h28v-26M272 104v26h28v-26" stroke="var(--asas-navy)" strokeWidth="2.5" fill="#fff" />
                  <g className={styles.fan}>
                    <circle cx="370" cy="92" r="14" fill="#fff" stroke="var(--asas-navy)" strokeWidth="2.5" />
                    <path d="M370 92l0-10M370 92l9 5M370 92l-9 5" stroke="var(--asas-blue)" strokeWidth="3" strokeLinecap="round" />
                  </g>
                  <g className={styles.air} stroke="var(--asas-blue)" strokeWidth="2" strokeLinecap="round" fill="none">
                    <path d="M130 140c-6 10 6 20 0 30s6 20 0 30" />
                    <path d="M142 140c-6 10 6 20 0 30s6 20 0 30" />
                    <path d="M280 140c-6 10 6 20 0 30s6 20 0 30" />
                    <path d="M292 140c-6 10 6 20 0 30s6 20 0 30" />
                  </g>
                </g>

                {/* 6 · Fire fighting: sprinkler main, heads, spray, detector, extinguisher */}
                <g {...L(6)}>
                  <path className={styles.draw} pathLength="1" d="M372 110H536M430 110V128M500 110V128" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                  <path className={styles.fade} d="M424 128h12l-6 7zM494 128h12l-6 7z" fill="#B45309" />
                  <g className={styles.spray} fill="#B45309">
                    <circle cx="422" cy="146" r="2" /><circle cx="430" cy="150" r="2" /><circle cx="438" cy="146" r="2" />
                    <circle cx="492" cy="146" r="2" /><circle cx="500" cy="150" r="2" /><circle cx="508" cy="146" r="2" />
                  </g>
                  <circle className={styles.fade} cx="240" cy="134" r="7" fill="#fff" stroke="var(--asas-navy)" strokeWidth="2" />
                  <circle className={styles.blink} cx="240" cy="134" r="2.5" fill="#B45309" />
                  <g className={styles.fade}>
                    <rect x="158" y="344" width="18" height="40" rx="6" fill="#B45309" />
                    <path d="M162 344v-8h10v8M172 338h8" stroke="var(--asas-navy)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </g>
                </g>

                {/* 7 · Low current: CCTV, Wi-Fi access point, data point, network run */}
                <g {...L(7)}>
                  <g className={styles.fade}>
                    <path d="M54 142h26l6 8-6 8H62z" fill="#fff" stroke="var(--asas-navy)" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M54 136v8" stroke="var(--asas-navy)" strokeWidth="3" />
                    <circle className={styles.blink} cx="80" cy="150" r="2.5" fill="var(--asas-gold)" />
                  </g>
                  <rect className={styles.fade} x="346" y="130" width="28" height="7" rx="3" fill="var(--asas-navy)" />
                  <g className={styles.wifi} stroke="var(--asas-blue)" strokeWidth="2.5" fill="none" strokeLinecap="round">
                    <path d="M348 150q12 8 24 0" />
                    <path d="M340 160q20 13 40 0" />
                    <path d="M332 170q28 18 56 0" />
                  </g>
                  <rect className={styles.fade} x="372" y="300" width="18" height="14" rx="2" fill="var(--asas-blue)" />
                  <path className={styles.draw} pathLength="1" d="M60 396H381V314" stroke="var(--asas-blue)" strokeWidth="2" fill="none" />
                  <path className={styles.data} d="M60 396H381" stroke="var(--asas-gold)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </g>
              </svg>

              <ol className={styles.progress} aria-hidden="true">
                {steps.map((s, i) => (
                  <li key={s.slug + i} data-on={i <= active} />
                ))}
              </ol>
            </div>
          </div>

          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li
                key={s.slug + i}
                ref={(el) => (refs.current[i] = el)}
                data-index={i}
                data-active={i === active}
                className={styles.step}
              >
                <div className={styles.stepHead}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.stepIcon}>
                    <i className={`ph-bold ${s.icon}`} aria-hidden="true"></i>
                  </span>
                </div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
                <a className={styles.stepLink} href={`/services/${s.slug}`}>
                  {s.linkLabel}
                  <i className={"ph-bold ph-arrow-right"} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
