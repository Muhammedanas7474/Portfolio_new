"use client";

import { useLayer } from "@/lib/layer-context";

const RING_TEXT = "CLICK TO FLIP · DARK & RED · ";

/**
 * Floating clip-path trigger. Wipes the whole page between the dark
 * layer and its inverted red twin, growing from this button's centre.
 */
export default function FlipButton() {
  const { mode } = useLayer();
  const isRed = mode === "red";

  const background = isRed ? "#0d0d0d" : "#eb5939";
  const foreground = isRed ? "#eb5939" : "#0d0d0d";

  return (
    <button
      id="flip-button"
      type="button"
      onClick={() => {
        const detail = new CustomEvent("layer:flip");
        window.dispatchEvent(detail);
      }}
      aria-label={isRed ? "Switch to dark layer" : "Switch to red layer"}
      data-cursor="extend"
      style={{
        position: "fixed",
        right: "var(--screen-x)",
        bottom: "1.5rem",
        zIndex: 90,
        width: "3.75rem",
        height: "3.75rem",
        borderRadius: "50%",
        backgroundColor: background,
        color: foreground,
        display: "grid",
        placeItems: "center",
        transition: "background-color 0.5s cubic-bezier(0.165,0.84,0.44,1), color 0.5s cubic-bezier(0.165,0.84,0.44,1)",
      }}
    >
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="ring-spin"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <path
            id="flip-ring-path"
            fill="none"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
          />
        </defs>
        <text
          fill={foreground}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "12.5px",
            fontWeight: 700,
            letterSpacing: "1.9px",
          }}
        >
          <textPath href="#flip-ring-path" startOffset="0">
            {RING_TEXT}
          </textPath>
        </text>
      </svg>

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ position: "relative" }}
      >
        <path
          d="M9 4.5 18.2 11.4a.6.6 0 0 1-.06 1.08l-3.86 1.54a1 1 0 0 0-.62.62l-1.54 3.86a.6.6 0 0 1-1.08.06L5.6 14.5a.6.6 0 0 1-.1-.66L9 4.5Z"
          fill={foreground}
        />
        <circle cx="4.6" cy="18.4" r="2.1" fill={foreground} />
      </svg>
    </button>
  );
}
