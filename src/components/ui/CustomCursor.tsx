"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "contract" | "extend";

/**
 * Replaces the system pointer on desktop. Elements opt in with
 * data-cursor="contract|extend" or data-cursor-label="…".
 */
export default function CustomCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 1000, damping: 70, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 1000, damping: 70, mass: 0.35 });

  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [suppressed, setSuppressed] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (coarse || small) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const host = target?.closest?.("[data-cursor], [data-cursor-label]") as HTMLElement | null;

      if (!host) {
        setLabel(null);
        setMode("default");
        return;
      }

      const cursorLabel = host.dataset.cursorLabel ?? null;
      setLabel(cursorLabel);
      setMode(
        cursorLabel ? "extend" : ((host.dataset.cursor as CursorMode) ?? "default")
      );
    };

    // Document-level enter/leave only manage pointer presence; a TextReveal
    // hover independently hides the cursor via herocursor:hide and must not
    // be overridden by these.
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const hide = () => setSuppressed(true);
    const show = () => setSuppressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("herocursor:hide", hide);
    window.addEventListener("herocursor:show", show);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("herocursor:hide", hide);
      window.removeEventListener("herocursor:show", show);
    };
  }, [x, y]);

  const isRing = mode === "extend" && !label;

  const size = label ? 120 : isRing ? 56 : mode === "contract" ? 8 : 10;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={false}
      animate={{ opacity: visible && !suppressed ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          borderRadius: "50%",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: label
            ? "#eb5939"
            : isRing || mode === "contract"
              ? "transparent"
              : "#b7ab98",
          border: isRing ? "1px solid #b7ab98" : "none",
          textAlign: "center",
        }}
      >
        {label && (
          <span
            className="label"
            style={{
              color: "#0d0d0d",
              fontSize: "0.6875rem",
              letterSpacing: "0.3em",
              lineHeight: 1.5,
              paddingLeft: "0.3em",
            }}
          >
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
