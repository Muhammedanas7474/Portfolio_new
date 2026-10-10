"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FlipButton from "@/components/ui/FlipButton";
import { useLayer } from "@/lib/layer-context";
import Layer from "./Layer";

interface Clip {
  x: number;
  y: number;
  r: number;
  open: boolean;
}

const CLOSED: Clip = { x: 0, y: 0, r: 0, open: false };

/**
 * Renders both layers and wipes the red one in with a clip-path circle
 * that grows from the flip button's centre to the farthest viewport corner.
 *
 * The dark layer stays in flow so it alone sets the document height. The
 * red layer is pinned over it with `inset: 0` and its copy is written a
 * touch shorter, so it can never push past the edge.
 */
export default function DualLayer() {
  const { mode, setMode } = useLayer();
  const redRef = useRef<HTMLDivElement>(null);
  const [clip, setClip] = useState<Clip>(CLOSED);

  const flip = useCallback(() => {
    const button = document.getElementById("flip-button");
    const layer = redRef.current;
    if (!button || !layer) return;

    const goingRed = mode === "dark";

    if (goingRed) {
      const layerRect = layer.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const x = buttonRect.left + buttonRect.width / 2 - layerRect.left;
      const y = buttonRect.top + buttonRect.height / 2 - layerRect.top;
      const r = Math.hypot(
        Math.max(x, layerRect.width - x),
        Math.max(y, layerRect.height - y),
      );
      setClip({ x, y, r, open: true });
    } else {
      setClip((current) => ({ ...current, open: false }));
    }

    setMode(goingRed ? "red" : "dark");
  }, [mode, setMode]);

  useEffect(() => {
    window.addEventListener("layer:flip", flip);
    return () => window.removeEventListener("layer:flip", flip);
  }, [flip]);

  const isRed = mode === "red";

  return (
    <div className="relative isolate" style={{ overflow: "hidden" }}>
      <div
        className="layer"
        style={{
          position: "relative",
          zIndex: 1,
          pointerEvents: isRed ? "none" : "auto",
        }}
      >
        <Layer variant="dark" />
      </div>

      <div
        ref={redRef}
        className="layer layer--red"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          clipPath: `circle(${clip.open ? clip.r : 0}px at ${clip.x}px ${clip.y}px)`,
          WebkitClipPath: `circle(${clip.open ? clip.r : 0}px at ${clip.x}px ${clip.y}px)`,
          transition: "clip-path 0.75s cubic-bezier(0.165, 0.84, 0.44, 1)",
          pointerEvents: isRed ? "auto" : "none",
        }}
      >
        <Layer variant="red" />
      </div>

      <FlipButton />
    </div>
  );
}
