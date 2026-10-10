"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type LayerMode = "dark" | "red";

interface LayerState {
  mode: LayerMode;
  setMode: (mode: LayerMode) => void;
  ready: boolean;
  setReady: (ready: boolean) => void;
}

const LayerContext = createContext<LayerState>({
  mode: "dark",
  setMode: () => {},
  ready: false,
  setReady: () => {},
});

export function LayerProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<LayerMode>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.layer = mode;
  }, [mode]);

  return (
    <LayerContext.Provider value={{ mode, setMode, ready, setReady }}>
      {children}
    </LayerContext.Provider>
  );
}

export function useLayer() {
  return useContext(LayerContext);
}
