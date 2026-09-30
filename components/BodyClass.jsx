"use client";
import { useEffect } from "react";

/** Applies the original <body class="..."> of each page to the real body. */
export default function BodyClass({ value }) {
  useEffect(() => {
    const prev = document.body.className;
    document.body.className = value || "";
    return () => {
      document.body.className = prev;
    };
  }, [value]);
  return null;
}
