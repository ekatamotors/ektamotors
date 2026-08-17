import React from "react";
import {
  TrendingDown,
  Zap,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  MapPin,
} from "lucide-react";

const COMPANY_INFO = {
  categoryDescriptor: "SUSTAINABLE EV MOBILITY",
};

export default function HeroSection({
  onExploreClick,
  onOpenWhatsApp,
}: {
  onExploreClick: () => void;
  onOpenWhatsApp: (msg: string) => void;
}) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-[#050B1A]">
      {/* Full-bleed fleet photo */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_image.jpeg"
          alt="EKA electric buses, trucks and e-LCVs on the road in Nepal"
          className="w-full h-full object-cover"
        />
        {/* Scrim: strong navy on the left for text legibility, fading out toward the fleet on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040E2A] via-[#040E2A]/85 to-[#040E2A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040E2A] via-[#040E2A]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-30 lg:pb-24 min-h-[92vh] lg:min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          {/* Top Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white">
            <span className="w-2 h-2 rounded-full bg-[#31BA58] animate-pulse"></span>
            <span className="text-[#5FD3F3] font-bold">EKATA MOTORS</span>
            <span className="text-white/30">•</span>
            <span className="text-white/80">
              Official & Exclusive Distributor of EKA Mobility
            </span>
          </div>

          {/* Main Headlines */}
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-[#4FE0B5]">
              {COMPANY_INFO.categoryDescriptor}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Moving Nepal Forward. <br />
              <span className="bg-gradient-to-r from-[#5FD3F3] via-[#4FE0B5] to-[#31BA58] bg-clip-text text-transparent">
                A New Electric Route.
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-normal">
            {`Empowering Nepal's commercial operators, institutions, and logistics
            fleets with world-class EKA electric buses, heavy cargo trucks, and
            e-LCVs. Built for local routes, proven for hill climbs, and
            supported directly from Kathmandu.`}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F6FA] text-[#041B5F] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
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
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Contact via WhatsApp</span>
            </button>
          </div>

          {/* Direct Location Note */}
          <div className="flex items-center gap-2 text-xs text-white/60 pt-1">
            <MapPin className="w-4 h-4 text-[#5FD3F3]" />
            <span>
              Headquarters & Experience Center: Naxal, Kathmandu, Nepal
            </span>
          </div>
        </div>

        {/* Key Value Metrics — glass pills floating over the image, docked to the bottom of the hero */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4 max-w-3xl pt-9 lg:pt-9">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
            <div className="flex items-center gap-2 text-[#31BA58]">
              <TrendingDown className="w-5 h-5" />
              <span className="text-xl font-black text-white">Up to 75%</span>
            </div>
            <p className="text-xs text-white/70 font-medium mt-1">
              Lower Fuel Operating Cost
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
            <div className="flex items-center gap-2 text-[#5FD3F3]">
              <Zap className="w-5 h-5" />
              <span className="text-xl font-black text-white">220+ km</span>
            </div>
            <p className="text-xs text-white/70 font-medium mt-1">
              Range per Charge
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
            <div className="flex items-center gap-2 text-[#4FE0B5]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xl font-black text-white">5 Years</span>
            </div>
            <p className="text-xs text-white/70 font-medium mt-1">
              Comprehensive Battery Warranty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
