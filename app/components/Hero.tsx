"use client";
import React from "react";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingDown,
  PlayCircle,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "@/data/products";
import { Vehicle } from "@/types";

interface HeroProps {
  onExploreClick: () => void;
  onOpenWhatsApp: (msg?: string) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenVideo: (vehicle: Vehicle) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onOpenWhatsApp,
  onSelectVehicle,
  onOpenVideo,
}) => {
  const featuredVehicle = PRODUCTS_DATA[0]; // EKA E9 Electric Bus

  return (
    <section className="relative bg-gradient-to-b from-[#F5F8FB] via-white to-[#F5F8FB] pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-100">
      {/* Subtle Background Accent Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#041B5F]">
              <span className="w-2 h-2 rounded-full bg-[#31BA58] animate-pulse"></span>
              <span className="text-[#0382DA] font-bold">EKATA MOTORS</span>
              <span className="text-slate-300">•</span>
              <span>Official & Exclusive Distributor of EKA Mobility</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-widest text-[#0499AA]">
                {COMPANY_INFO.categoryDescriptor}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#041B5F] tracking-tight leading-tight">
                Moving Nepal Forward. <br />
                <span className="bg-gradient-to-r from-[#041B5F] via-[#0382DA] to-[#0CB087] bg-clip-text text-transparent">
                  A New Electric Route.
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#17243A] leading-relaxed max-w-2xl font-normal">
              Empowering Nepal’s commercial operators, institutions, and
              logistics fleets with world-class EKA electric buses, heavy cargo
              trucks, and e-LCVs. Built for local routes, proven for hill
              climbs, and supported directly from Kathmandu.
            </p>

            {/* Key Value Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-[#31BA58]">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-xl font-black text-[#041B5F]">
                    Up to 75%
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Lower Fuel Operating Cost
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-[#0382DA]">
                  <Zap className="w-5 h-5" />
                  <span className="text-xl font-black text-[#041B5F]">
                    220+ km
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Range per Charge
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-[#0499AA]">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xl font-black text-[#041B5F]">
                    5 Years
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Comprehensive Battery Warranty
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 bg-[#041B5F] hover:bg-[#063891] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Explore Electric Fleet</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() =>
                  onOpenWhatsApp(
                    `Hello Ekata Motors! I saw the website hero and would like to request product pricing for EKA Electric Vehicles.`,
                  )
                }
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contact via WhatsApp</span>
              </button>
            </div>

            {/* Direct Location Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <MapPin className="w-4 h-4 text-[#0382DA]" />
              <span>
                Headquarters & Experience Center: Naxal, Kathmandu, Nepal
              </span>
            </div>
          </div>

          {/* Right Featured Vehicle Card Column */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden group">
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                <span className="bg-[#041B5F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Flagship Product
                </span>
                <span className="bg-[#31BA58] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  Nepal Hill Tested
                </span>
              </div>

              {/* Image Preview Container */}
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                <img
                  src={featuredVehicle.image}
                  alt={featuredVehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play Video Button Overlay */}
                <button
                  onClick={() => onOpenVideo(featuredVehicle)}
                  className="absolute inset-0 m-auto w-14 h-14 bg-white/90 hover:bg-white text-[#041B5F] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer group/vid"
                  title="Watch Product Video"
                >
                  <PlayCircle className="w-8 h-8 text-[#0382DA] fill-[#0382DA]/20 group-hover/vid:scale-110 transition-transform" />
                </button>
              </div>

              {/* Details Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs font-bold text-[#0382DA] uppercase tracking-wider">
                    {featuredVehicle.categoryName}
                  </div>
                  <h3 className="text-xl font-bold text-[#041B5F] mt-1">
                    {featuredVehicle.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {featuredVehicle.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 bg-[#F5F8FB] p-3 rounded-xl text-center border border-slate-100">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      Range
                    </div>
                    <div className="text-sm font-black text-[#041B5F]">
                      {featuredVehicle.keySpecs.rangeKm} km
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      Battery
                    </div>
                    <div className="text-sm font-black text-[#041B5F]">
                      {featuredVehicle.keySpecs.batteryCapacityKwh} kWh
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      Charging
                    </div>
                    <div className="text-sm font-black text-[#041B5F]">
                      {featuredVehicle.keySpecs.chargingTimeMins} mins
                    </div>
                  </div>
                </div>

                {/* Card Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectVehicle(featuredVehicle)}
                    className="w-full bg-[#041B5F] hover:bg-[#063891] text-white text-xs font-bold py-2.5 px-3 rounded-lg text-center transition-colors cursor-pointer"
                  >
                    View Specs & Video
                  </button>
                  <button
                    onClick={() =>
                      onOpenWhatsApp(
                        `Hello Ekata Motors! Please send me the brochure and quote for ${featuredVehicle.name}.`,
                      )
                    }
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire Price</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
