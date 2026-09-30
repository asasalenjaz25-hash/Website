"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Loaded once, in the exact order the original pages used.
const LIBS = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/phosphor-icon.js",
  "/assets/js/boostrap.bundle.min.js",
  "/assets/js/waypoints.js",
  "/assets/js/swiper-bundle.js",
  "/assets/js/slick.js",
  "/assets/js/odometer.min.js",
  "/assets/js/magnific-popup.min.js",
  "/assets/js/aos.js",
  "/assets/js/before-after.js",
  "/assets/js/nice-select.js",
  "/assets/js/range-slider.js",
  "/assets/js/gsap.min.js",
  "/assets/js/SplitText.min.js",
  "/assets/js/ScrollSmoother.min.js",
  "/assets/js/ScrollTrigger.min.js",
];

// Re-executed on every route change, because these bind to page DOM.
const INITS = [
  "/assets/js/custom-gsap.js",
  "/assets/js/slider-active.js",
  "/assets/js/main.js",
  "/assets/js/tw-cursor.js",
];

function loadScript(src) {
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = resolve;
    s.onerror = resolve; // never block the page on one missing vendor file
    document.body.appendChild(s);
  });
}

const cache = new Map();
async function runInit(src) {
  if (!cache.has(src)) {
    cache.set(src, fetch(src).then((r) => r.text()).catch(() => ""));
  }
  const code = await cache.get(src);
  if (!code) return;
  try {
    // indirect eval -> global scope, same as a classic <script> tag
    (0, eval)(code);
  } catch {
    /* a plugin missing its markup on this route is not fatal */
  }
}

function teardown() {
  const w = window;
  try {
    w.ScrollTrigger?.getAll?.().forEach((t) => t.kill());
    w.ScrollSmoother?.get?.()?.kill?.();
  } catch {}
  try {
    w.jQuery?.(".slick-initialized")?.slick?.("unslick");
  } catch {}
  document.querySelectorAll(".tw-magnetic-wrap, #ball, .mouseCursor").forEach((n) => n.remove());
}

export default function ThemeScripts() {
  const pathname = usePathname();
  const ready = useRef(null);

  useEffect(() => {
    if (!ready.current) {
      ready.current = (async () => {
        for (const src of LIBS) await loadScript(src);
      })();
    }
    let cancelled = false;
    ready.current.then(async () => {
      if (cancelled) return;
      for (const src of INITS) {
        if (cancelled) return;
        await runInit(src);
      }
      try {
        // odometer.min.js only auto-inits on DOMContentLoaded, which has
        // already fired here. Call the library's own init so counters keep
        // their digit-roll animation exactly as in the original.
        window.Odometer?.init?.();
      } catch {}
      try {
        window.AOS?.refreshHard?.();
        window.ScrollTrigger?.refresh?.();
      } catch {}
      // The theme's preloader hides itself on window.load, which has already
      // fired for client-side navigations — clear it explicitly.
      const pre = document.getElementById("loading-screen");
      if (pre) setTimeout(() => pre.classList.add("loaded"), 600);
    });
    return () => {
      cancelled = true;
      teardown();
    };
  }, [pathname]);

  return null;
}
