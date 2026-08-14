"use client";
import React, { useState } from "react";
import {
  MessageCircle,
  ArrowLeft,
  Play,
  ShieldCheck,
  Download,
  Zap,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Vehicle } from "@/types";

interface ProductDetailViewProps {
  vehicle: Vehicle;
  onBack: () => void;
  onOpenWhatsApp: (msg?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  vehicle,
  onBack,
  onOpenWhatsApp,
}) => {
  const [activeHighlightId, setActiveHighlightId] = useState<number>(1);

  const currentHighlight =
    vehicle.highlights.find((h) => h.id === activeHighlightId) ||
    vehicle.highlights[0];

  return (
    <div className="bg-[#060A12] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-16 selection:bg-[#0382DA] selection:text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-full transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#0382DA]" />
          <span>Back to All Vehicles</span>
        </button>

        {/* Hero Section Banner matching Image 1 */}
        <div className="text-center space-y-4 max-w-4xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 bg-[#0382DA]/20 border border-[#0382DA]/40 text-[#0382DA] text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">
            <span>EKA Mobility Commercial Lineup</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            {vehicle.name}
          </h1>

          <p className="text-lg sm:text-2xl font-extrabold text-slate-100">
            {vehicle.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {vehicle.shortDescription || vehicle.fullDescription}
          </p>

          {/* 5 Key Hero Stats Bar */}
          {vehicle.heroStats && vehicle.heroStats.length > 0 && (
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-slate-800/80 mt-8">
              {vehicle.heroStats.map((stat, idx) => (
                <div key={idx} className="space-y-1 text-center">
                  <div className="text-xs font-semibold text-slate-400">
                    {stat.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Vehicle Hero Image Banner */}
        <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/40 relative group max-w-6xl mx-auto">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            referrerPolicy="no-referrer"
            className="w-full h-[360px] sm:h-[500px] object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-transparent to-transparent opacity-80" />
        </div>

        {/* Product Highlights Section matching Image 2 */}
        {vehicle.highlights && vehicle.highlights.length > 0 && (
          <div className="space-y-8 pt-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-2 text-2xl sm:text-3xl font-black text-white">
              <span className="text-[#0382DA] font-mono text-xl">↳</span>
              <h2>Product Highlights</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column Tabs List */}
              <div className="lg:col-span-5 space-y-3">
                {vehicle.highlights.map((item) => {
                  const isActive = activeHighlightId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveHighlightId(item.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#0B1324] border-[#0382DA] shadow-lg shadow-blue-950/40"
                          : "bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-sm font-bold font-mono ${isActive ? "text-[#0382DA]" : "text-slate-500"}`}
                        >
                          {item.id}.
                        </span>
                        <h3
                          className={`text-lg font-bold ${isActive ? "text-[#0382DA]" : "text-white"}`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {isActive && (
                        <ul className="mt-4 space-y-2 text-xs text-slate-300 pl-7 list-disc">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Column Image Preview */}
              <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl aspect-4/3 relative">
                <img
                  src={
                    currentHighlight?.image ||
                    vehicle.cockpitImage ||
                    vehicle.image
                  }
                  alt={currentHighlight?.title || "Highlight view"}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <span className="text-xs font-bold text-[#0382DA] uppercase tracking-wider block">
                    {currentHighlight?.title}
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Detailed Engineering View & Cabin Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Specifications Section matching Image 3 */}
        {vehicle.detailedSpecsTable &&
          vehicle.detailedSpecsTable.length > 0 && (
            <div className="space-y-8 pt-8 max-w-6xl mx-auto">
              <div className="flex items-center gap-2 text-2xl sm:text-3xl font-black text-white">
                <span className="text-[#0382DA] font-mono text-xl">↳</span>
                <h2>Detailed Specifications</h2>
              </div>

              <div className="bg-[#0B1120] rounded-2xl border border-slate-800/80 p-6 sm:p-8 shadow-2xl">
                <div className="divide-y divide-[#0382DA]/20">
                  {vehicle.detailedSpecsTable.map((row, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 sm:py-4 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs sm:text-sm"
                    >
                      <div className="md:col-span-5 font-bold text-white uppercase tracking-wider">
                        {row.label}
                      </div>
                      <div className="md:col-span-7 text-slate-300 font-medium">
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        {/* Video Walkthrough Section */}
        {vehicle.video && (
          <div className="space-y-6 pt-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Video Demonstration & Operational Route Walkthrough
                </h3>
                <p className="text-xs text-slate-400">
                  {vehicle.video.description}
                </p>
              </div>
            </div>

            <div className="aspect-16/9 bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${vehicle.video.youtubeId}?autoplay=0&rel=0`}
                title={vehicle.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Fleet Inquiry & WhatsApp Banner */}
        <div className="bg-gradient-to-r from-[#0B1324] via-[#041B5F] to-[#0382DA]/30 rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#31BA58]/20 border border-[#31BA58]/40 text-[#31BA58] text-xs font-bold uppercase px-3 py-1 rounded-full">
              <span>Direct Fleet Assistance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Interested in {vehicle.name} for Your Fleet?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Connect directly with our commercial vehicle engineering team in
              Naxal, Kathmandu for vehicle specifications, pricing, and local
              support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() =>
                onOpenWhatsApp(
                  `Hello Ekata Motors! I would like more information and pricing for ${vehicle.name}.`,
                )
              }
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
