"use client";

import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import SocialSidebar from "@/components/ui/SocialSidebar";
import Footer from "@/components/layout/Footer";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <SocialSidebar />

      <main id="main-content">{children}</main>

      <Footer />
    </>
  );
}
