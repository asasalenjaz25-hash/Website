"use client";

import { useState } from "react";
import HairlineFigure from "@/components/hairline/HairlineFigure";
import styles from "@/components/pages/Shop.module.css";

const TONS = [1.5, 2, 2.5, 3];

// Shop CTA: the Throw figure (a split AC throwing cold air across a room),
// with the capacity pills driving how far the cool reaches.
export default function CapacityThrow() {
  const [tons, setTons] = useState(2);
  return (
    <div className={styles.throwBox}>
      <HairlineFigure
        name="throw"
        tone="navy"
        value={tons}
        label="Line drawing of a room with a wall-mounted AC; the floor shows how far its cold air reaches"
      />
      <fieldset className={styles.throwPills}>
        <legend className="visually-hidden">Capacity shown in the drawing</legend>
        {TONS.map((t) => (
          <label key={t}>
            <input type="radio" name="throw-tons" checked={tons === t} onChange={() => setTons(t)} />
            <span>{t} Ton</span>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
