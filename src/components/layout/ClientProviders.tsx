"use client";

import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SocialSidebar from "@/components/ui/SocialSidebar";
import Navbar from "@/components/layout/Navbar";
import { LayerProvider } from "@/lib/layer-context";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayerProvider>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <SocialSidebar />

      <main id="main-content">{children}</main>
    </LayerProvider>
  );
}
