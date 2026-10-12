"use client";

import { useEffect, useRef } from "react";
import styles from "./Hairline.module.css";

// Hairline figures (isometric line drawings that answer the pointer) on site
// pages. The kernel (/public/hairline/kernel.js) is the hairline-create skill's
// kernel.js, byte for byte; each figure (/public/hairline/<name>.js) is copied
// verbatim from hairline/<name>.js, where it was built and look-checked.
// This mounts a figure the way the skill's bench.html does.

let kernel = null;
const figures = new Map(); // name -> Promise<figure>
const waiting = new Map(); // name -> resolve

function loadKernel() {
  kernel ??= new Promise((resolve, reject) => {
    // Each figure file ends with hairline({ name, means, rules, range, mount }).
    window.hairline = (figure) => {
      waiting.get(figure.name)?.(figure);
      waiting.delete(figure.name);
    };
    if (window.HL) return resolve();
    const s = document.createElement("script");
    s.src = "/hairline/kernel.js";
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return kernel;
}

function loadFigure(name) {
  if (!figures.has(name)) {
    figures.set(
      name,
      loadKernel().then(
        () =>
          new Promise((resolve, reject) => {
            waiting.set(name, resolve);
            const s = document.createElement("script");
            s.type = "module";
            s.src = `/hairline/${name}.js`;
            s.onerror = reject;
            document.head.appendChild(s);
          })
      )
    );
  }
  return figures.get(name);
}

// The figure's number at the middle of its range, as the bench's default.
const middle = (figure) => figure.range[1];

/**
 * name: the figure file in /public/hairline. focus: optional, written to the
 * stage as data-focus for figures that pick their rest highlight from it.
 * label: replaces the figure's own `means` as the accessible name.
 * showRead: shows the small read-out tag (what is under the pointer).
 * tone: "white", "surface" or "navy", the background the figure sits on.
 * value: the figure's own number (what the bench's slider drives, read on its
 * range); defaults to the middle of the range. Changing it calls set(value).
 */
export default function HairlineFigure({ name, focus, label, value, showRead = true, tone = "white", className = "" }) {
  const stageRef = useRef(null);
  const readRef = useRef(null);
  const handleRef = useRef(null);
  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    const stage = stageRef.current;
    let handle = null;
    let cancelled = false;

    async function mount() {
      try {
        const figure = await loadFigure(name);
        if (cancelled) return;
        const HL = window.HL;
        HL.inject(document);
        stage.setAttribute("data-hairline", figure.name);
        stage.setAttribute("aria-label", label || figure.means);
        if (focus) stage.dataset.focus = focus;
        const svg = HL.mk("svg", { viewBox: "0 0 400 320", "aria-hidden": "true" }, stage);
        let text = null;
        const read = {
          get textContent() {
            return text;
          },
          set textContent(value) {
            text = value == null ? "" : String(value);
            // "rest" is the bench's word for "nothing under the pointer": show nothing.
            if (readRef.current) readRef.current.textContent = text === "rest" ? "" : text;
          },
        };
        handle = figure.mount({ stage, svg, read }, valueRef.current ?? middle(figure));
        handleRef.current = handle;
        if (text === null) read.textContent = "rest";
      } catch {
        /* a figure that fails to load leaves its plate empty; the page still works */
      }
    }

    // Mount only when the figure comes near the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          mount();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(stage);

    return () => {
      cancelled = true;
      io.disconnect();
      handle?.destroy();
      handleRef.current = null;
      stage.replaceChildren();
    };
  }, [name, focus, label]);

  useEffect(() => {
    if (value != null) handleRef.current?.set(value);
  }, [value]);

  return (
    <div className={`${styles.wrap} ${styles[tone] || ""} ${className}`}>
      <div ref={stageRef} className={styles.stage} role="img" aria-label={label || "Interactive line drawing"} />
      {showRead && <span ref={readRef} className={styles.read} aria-hidden="true" />}
    </div>
  );
}
