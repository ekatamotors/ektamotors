"use client";
import React, { useState } from "react";

import {
  X,
  PlayCircle,
  MessageCircle,
  ShieldCheck,
  Download,
  Zap,
  BatteryCharging,
  Gauge,
  CheckCircle2,
  TrendingUp,
  ChevronRight,
  Video,
  FileText,
} from "lucide-react";
import { Vehicle } from "@/types";

interface ProductDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onOpenWhatsApp: (msg?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  vehicle,
  onClose,
  onOpenWhatsApp,
}) => {
  if (!vehicle) return null;

  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "video" | "economics"
  >("overview");
  const [selectedImage, setSelectedImage] = useState<string>(vehicle.image);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden my-auto">
        {/* Header */}
        <div className="bg-[#041B5F] text-white p-4 sm:p-6 flex items-start justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

          <div className="space-y-1 relative z-10 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#0382DA] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {vehicle.brandName}
              </span>
              <span className="bg-[#31BA58] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Official Nepal Import
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {vehicle.name}
            </h2>
            <p className="text-xs text-slate-300">{vehicle.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Bar */}
        <div className="bg-[#F5F8FB] border-b border-slate-200 px-4 sm:px-6 flex gap-2 overflow-x-auto text-xs font-bold text-slate-600 shrink-0">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === "overview"
                ? "border-[#0382DA] text-[#041B5F] bg-white font-extrabold"
                : "border-transparent hover:text-[#041B5F]"
            }`}
          >
            <span>Overview & Photos</span>
          </button>

          <button
            onClick={() => setActiveTab("specs")}
            className={`py-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === "specs"
                ? "border-[#0382DA] text-[#041B5F] bg-white font-extrabold"
                : "border-transparent hover:text-[#041B5F]"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Technical Specifications</span>
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`py-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === "video"
                ? "border-[#0382DA] text-[#041B5F] bg-white font-extrabold"
                : "border-transparent hover:text-[#041B5F]"
            }`}
          >
            <Video className="w-3.5 h-3.5 text-[#0382DA]" />
            <span>Product Video Walkthrough</span>
          </button>

          <button
            onClick={() => setActiveTab("economics")}
            className={`py-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === "economics"
                ? "border-[#0382DA] text-[#041B5F] bg-white font-extrabold"
                : "border-transparent hover:text-[#041B5F]"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#31BA58]" />
            <span>Nepal Route Economics</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Gallery Image Display */}
              <div className="space-y-3">
                <div className="aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src={selectedImage}
                    alt={vehicle.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnails */}
                {vehicle.galleryImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {vehicle.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          selectedImage === img
                            ? "border-[#0382DA] ring-2 ring-[#0382DA]/20"
                            : "border-slate-200 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt="Thumbnail"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-[#F5F8FB] p-4 rounded-xl border border-slate-100 space-y-2">
                <h4 className="text-sm font-bold text-[#041B5F]">
                  Vehicle Profile & Operating Context
                </h4>
                <p className="text-xs text-[#17243A] leading-relaxed">
                  {vehicle.fullDescription}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block font-semibold">
                    Max Range
                  </span>
                  <span className="text-base font-black text-[#041B5F]">
                    {vehicle.keySpecs.rangeKm} km
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    Single charge
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block font-semibold">
                    Battery
                  </span>
                  <span className="text-base font-black text-[#041B5F]">
                    {vehicle.keySpecs.batteryCapacityKwh} kWh
                  </span>
                  <span className="text-[10px] text-[#31BA58] block font-medium">
                    LFP Thermal Pack
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block font-semibold">
                    Fast Charging
                  </span>
                  <span className="text-base font-black text-[#041B5F]">
                    {vehicle.keySpecs.chargingTimeMins} mins
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    Dual CCS2 Fast Plug
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block font-semibold">
                    Warranty
                  </span>
                  <span className="text-base font-black text-[#041B5F]">
                    {vehicle.warrantyYears} Years
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {vehicle.warrantyKm.toLocaleString()} km
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECH SPECS */}
          {activeTab === "specs" && (
            <div className="space-y-6">
              {vehicle.specSections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
                >
                  <div className="bg-[#041B5F] text-white text-xs font-bold px-4 py-2.5">
                    {section.title}
                  </div>
                  <div className="divide-y divide-slate-100">
                    {section.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className={`px-4 py-2.5 flex items-center justify-between text-xs ${spec.highlight ? "bg-blue-50/50 font-semibold" : ""}`}
                      >
                        <span className="text-slate-600">{spec.label}</span>
                        <span
                          className={`font-bold ${spec.highlight ? "text-[#041B5F]" : "text-[#17243A]"}`}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: VIDEO WALKTHROUGH */}
          {activeTab === "video" && (
            <div className="space-y-6">
              <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-slate-800 aspect-16/9 relative group">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${vehicle.video.youtubeId}?autoplay=0&rel=0`}
                  title={vehicle.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="bg-[#F5F8FB] p-4 rounded-xl border border-slate-200 space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-[#041B5F]">
                    {vehicle.video.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {vehicle.video.description}
                  </p>
                </div>

                {vehicle.video.chapters && (
                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="text-xs font-bold text-slate-700 block mb-2">
                      Video Chapters & Key Moments:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {vehicle.video.chapters.map((chap, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 text-xs bg-white p-2 rounded-lg border border-slate-200"
                        >
                          <span className="bg-[#0382DA] text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-xs">
                            {chap.time}
                          </span>
                          <span className="text-slate-800 font-medium">
                            {chap.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: ROUTE ECONOMICS */}
          {activeTab === "economics" && (
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#31BA58] font-bold text-sm">
                  <TrendingUp className="w-5 h-5" />
                  <span>Estimated Operational Savings in Nepal</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Calculated based on standard Nepal commercial fuel costs
                  (Diesel ~NPR 165/L vs EV Electricity Tariff ~NPR 9.5/kWh).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-medium block">
                    Diesel Cost / km
                  </span>
                  <span className="text-lg font-black text-rose-600">
                    NPR {vehicle.economics.dieselCostPerKmNpr.toFixed(1)}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-medium block">
                    EKA EV Cost / km
                  </span>
                  <span className="text-lg font-black text-[#31BA58]">
                    NPR {vehicle.economics.evCostPerKmNpr.toFixed(1)}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-medium block">
                    Est. Monthly Net Savings
                  </span>
                  <span className="text-lg font-black text-[#041B5F]">
                    NPR {vehicle.economics.monthlySavingsNpr.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-[#041B5F] uppercase tracking-wider">
                  Recommended Routes in Nepal
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vehicle.economics.recommendedRoutesInNepal.map(
                    (route, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center gap-2 text-xs text-slate-800 bg-[#F5F8FB] p-2.5 rounded-lg border border-slate-100 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#31BA58] shrink-0" />
                        <span>{route}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#F5F8FB] p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#31BA58]" />
            <span>Ekata Motors Pvt. Ltd. • Official Distributor</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() =>
                onOpenWhatsApp(
                  `Hello Ekata Motors! I would like to request the brochure for ${vehicle.name}.`,
                )
              }
              className="flex-1 sm:flex-none border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Brochure</span>
            </button>

            <button
              onClick={() =>
                onOpenWhatsApp(
                  `Hello Ekata Motors! I am requesting an official quote and route demonstration for ${vehicle.name}.`,
                )
              }
              className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
