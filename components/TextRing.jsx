import { useId } from "react";
import { COMPANY } from "@/components/site";

/**
 * The template's rotating circular caption, drawn as real text on a circle
 * (the template shipped "ABOUT US" as 32 hand-drawn letter paths). Keep the
 * template's className so its CSS rotation animation still applies.
 */
export default function TextRing({
  label,
  className = "banner-rotate-content",
  size = 135,
  color = "#0A1A3A",
}) {
  const text = `${label} · ${COMPANY.short.toUpperCase()} · SINCE ${COMPANY.founded} · `;
  const c = size / 2;
  const r = size * 0.415; // same radius the template's letters sat on
  const id = `ring${useId().replace(/:/g, "")}`;
  return (
    <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <defs>
        <path id={id} d={`M ${c},${c} m -${r},0 a ${r},${r} 0 1,1 ${2 * r},0 a ${r},${r} 0 1,1 -${2 * r},0`} />
      </defs>
      <text
        fill={color}
        fontFamily="var(--heading-font)"
        fontSize={size * 0.082}
        fontWeight="600"
        letterSpacing="1.5"
      >
        <textPath href={`#${id}`} textLength={(2 * Math.PI * r).toFixed(1)} lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
