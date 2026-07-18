"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
        >
          <div className="relative w-64 h-1 bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-full bg-accent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-text-primary tracking-tighter">
              MA<span className="text-accent">.</span>
            </span>
            <span className="text-text-muted font-mono">{progress}%</span>
          </div>

          <div className="absolute bottom-10 text-text-muted text-xs uppercase tracking-widest animate-pulse">
            Loading Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}