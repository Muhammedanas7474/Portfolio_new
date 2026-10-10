"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLayer } from "@/lib/layer-context";
import { EASE } from "@/lib/animations";

const RADIUS = 132;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function LoadingScreen() {
  const { setReady } = useLayer();
  const [progress, setProgress] = useState(0);
  const [showStart, setShowStart] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;

    if (reduced) {
      frame = requestAnimationFrame(() => {
        setProgress(100);
        setShowStart(true);
      });
      return () => cancelAnimationFrame(frame);
    }

    const start = performance.now();
    const DURATION = 1800;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setShowStart(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleStart = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setLeaving(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = "";
    setReady(true);
    window.setTimeout(() => setDone(true), 900);
  }, [setReady]);

  useEffect(() => {
    if (!showStart || done) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") handleStart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showStart, done, handleStart]);

  if (done) return null;

  const offset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          className="page-loading"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: EASE } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            backgroundColor: "#0d0d0d",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <div style={{ position: "relative", width: 270, height: 270 }}>
            <svg width="270" height="270" viewBox="0 0 270 270" fill="none" aria-hidden="true">
              <circle
                cx="136"
                cy="136"
                r={RADIUS}
                stroke="hsla(37, 18%, 66%, 0.12)"
                strokeWidth="1"
              />
              <circle
                cx="136"
                cy="136"
                r={RADIUS}
                stroke="#b7ab98"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
                transform="rotate(-90 136 136)"
              />
            </svg>

            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="h1"
                style={{ fontSize: "3rem", color: "#eb5939", letterSpacing: "-0.06em" }}
              >
                MA
              </span>
            </div>
          </div>

          <div
            className="label"
            style={{ color: "hsla(37, 18%, 66%, 0.5)", fontVariantNumeric: "tabular-nums" }}
          >
            {String(progress).padStart(2, "0")}%
          </div>

          <button
            type="button"
            onClick={handleStart}
            data-cursor="extend"
            className="label"
            style={{
              background: "transparent",
              border: "1px solid #b7ab98",
              borderRadius: "70px",
              color: "#b7ab98",
              padding: "0.9rem 2.4rem",
              opacity: showStart ? 1 : 0,
              transform: showStart ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s cubic-bezier(0.165,0.84,0.44,1), transform 0.6s cubic-bezier(0.165,0.84,0.44,1)",
              pointerEvents: showStart ? "auto" : "none",
              letterSpacing: "0.4em",
            }}
          >
            Start
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
