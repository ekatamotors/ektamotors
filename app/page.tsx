"use client";

import { ServiceEcosystem } from "./components/ServiceEcosystem";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { WhatsAppDrawer } from "./components/WhatsAppDrawer";
import HeroSection from "./components/Hero";
import FleetCategoriesSection from "./components/Fleetcategoriessection";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function HomePage() {
  const { openWhatsApp, drawerProps } = useWhatsApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFE]">
      <main className="grow">
        <div className="space-y-16 sm:space-y-24">
          <HeroSection onOpenWhatsApp={openWhatsApp} />
          <FleetCategoriesSection />
          <ServiceEcosystem onOpenWhatsApp={openWhatsApp} />
          <AboutSection onOpenWhatsApp={openWhatsApp} />
          <ContactSection onOpenWhatsApp={openWhatsApp} />
        </div>
      </main>

      <WhatsAppDrawer {...drawerProps} />
    </div>
  );
}
