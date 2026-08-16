"use client";

import React, { useState } from "react";
import { PRODUCTS_DATA, COMPANY_INFO } from "@/data/products";
// import { Vehicle } from "@/types";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { ProductDetailView } from "./components/ProductDetailView";
import { ServiceEcosystem } from "./components/ServiceEcosystem";
import { AboutSection } from "./components/AboutSection";
import { SupportSection } from "./components/SupportSection";
import { MediaSection } from "./components/MediaSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppDrawer } from "./components/WhatsAppDrawer";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  Filter,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [modalVehicle, setModalVehicle] = useState<Vehicle | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppInitialMessage, setWhatsAppInitialMessage] = useState("");

  const handleOpenWhatsApp = (customMessage?: string) => {
    if (customMessage) {
      setWhatsAppInitialMessage(customMessage);
    }
    setIsWhatsAppOpen(true);
  };

  const filteredProducts =
    filterCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === filterCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFE]">
      {/* <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setSelectedVehicle(null);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onSelectVehicle={(vehicle) => {
          setSelectedVehicle(vehicle);
          setActiveTab("product-detail");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenWhatsApp={() =>
          handleOpenWhatsApp(
            "Hello Ekata Motors! I would like to inquire about EKA electric commercial vehicles in Nepal.",
          )
        }
      /> */}

      <main className="flex-grow">
        {activeTab === "product-detail" && selectedVehicle && (
          <ProductDetailView
            vehicle={selectedVehicle}
            onBack={() => {
              setSelectedVehicle(null);
              setActiveTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {activeTab === "home" && !selectedVehicle && (
          <div className="space-y-16 sm:space-y-24">
            <Hero
              onExploreFleet={() => {
                const el = document.getElementById("fleet-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              onOpenWhatsApp={handleOpenWhatsApp}
            />

            {/* Commercial Fleet Section */}
            <section
              id="fleet-section"
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 bg-[#041B5F]/5 text-[#041B5F] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#0382DA]" />
                    <span>Commercial Lineup</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#041B5F]">
                    EKA Commercial Electric Lineup
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                    Engineered for Nepal's steep gradients, heavy intercity
                    loads, and high-uptime daily commercial cycles.
                  </p>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                  <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1 shrink-0">
                    <Filter className="w-3.5 h-3.5" /> Filter:
                  </span>
                  {[
                    { id: "all", label: "All Fleet" },
                    { id: "SCV", label: "Cargo Vans (1.5T-3.5T)" },
                    { id: "BUS", label: "City & Staff Buses" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilterCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        filterCategory === cat.id
                          ? "bg-[#041B5F] text-white shadow-md"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((vehicle) => (
                  <ProductCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onQuickView={(v) => setModalVehicle(v)}
                    onViewDetails={(v) => {
                      setSelectedVehicle(v);
                      setActiveTab("product-detail");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    onOpenWhatsApp={handleOpenWhatsApp}
                  />
                ))}
              </div>
            </section>

            <ServiceEcosystem onOpenWhatsApp={handleOpenWhatsApp} />
            <AboutSection onOpenWhatsApp={handleOpenWhatsApp} />
            <MediaSection onOpenWhatsApp={handleOpenWhatsApp} />
            <ContactSection onOpenWhatsApp={handleOpenWhatsApp} />
          </div>
        )}

        {activeTab === "fleet" && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#041B5F] mb-8">
              All Commercial Fleet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS_DATA.map((vehicle) => (
                <ProductCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  onQuickView={(v) => setModalVehicle(v)}
                  onViewDetails={(v) => {
                    setSelectedVehicle(v);
                    setActiveTab("product-detail");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "service" && (
          <ServiceEcosystem onOpenWhatsApp={handleOpenWhatsApp} />
        )}
        {activeTab === "about" && (
          <AboutSection onOpenWhatsApp={handleOpenWhatsApp} />
        )}
        {activeTab === "support" && (
          <SupportSection onOpenWhatsApp={handleOpenWhatsApp} />
        )}
        {activeTab === "media" && (
          <MediaSection onOpenWhatsApp={handleOpenWhatsApp} />
        )}
        {activeTab === "contact" && (
          <ContactSection onOpenWhatsApp={handleOpenWhatsApp} />
        )}
      </main>

      {modalVehicle && (
        <ProductDetailModal
          vehicle={modalVehicle}
          onClose={() => setModalVehicle(null)}
          onViewFullDetails={(v) => {
            setModalVehicle(null);
            setSelectedVehicle(v);
            setActiveTab("product-detail");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      )}

      <WhatsAppDrawer
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        initialMessage={whatsAppInitialMessage}
      />

      {/* <Footer
        onNavigate={(tab) => {
          setSelectedVehicle(null);
          setActiveTab(tab);
        }}
        onOpenWhatsApp={handleOpenWhatsApp}
      /> */}
    </div>
  );
}
