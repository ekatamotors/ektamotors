"use client";
import React from "react";
import {
  ShieldCheck,
  Wrench,
  BatteryCharging,
  Cpu,
  Users,
  Truck,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface ServiceEcosystemProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const ServiceEcosystem: React.FC<ServiceEcosystemProps> = ({
  onOpenWhatsApp,
}) => {
  const servicePillars = [
    {
      icon: <Wrench className="w-6 h-6 text-[#0382DA]" />,
      title: "Local Service Readiness & Depot Support",
      description:
        "Dedicated Master Service Hub at Naxal, Kathmandu equipped with OEM diagnostic scanners, high-voltage battery cell balance tools, and certified EV master engineers.",
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-[#31BA58]" />,
      title: "Charging Infrastructure Guidance",
      description:
        "Turnkey advisory on depot 30kW - 120kW DC fast charger sizing, transformer connection, demand management, and highway corridor charging stations across Nepal.",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#0499AA]" />,
      title: "Local Spare Parts Warehouse",
      description:
        "Centralized spare parts inventory in Kathmandu guaranteeing key components, suspension wear items, brake assemblies, and electrical relays with fast dispatch.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#063891]" />,
      title: "Driver & Fleet Crew Training",
      description:
        "Comprehensive driving technique courses for Nepalese hill routes, regenerative braking efficiency optimization, and high-voltage safety protocol certification.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#041B5F]" />,
      title: "EKA Smart Connect Telematics",
      description:
        "Real-time 4G cloud fleet monitoring tracking vehicle location, state-of-charge (SoC), energy consumption per kilometer, driver behavior score, and predictive maintenance alerts.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#31BA58]" />,
      title: "Comprehensive OEM Warranty",
      description:
        "Up to 5 Years / 300,000 km battery & drivetrain warranty directly backed by EKA Mobility and executed by Ekata Motors in Nepal.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F5F8FB] border border-slate-200 text-[#041B5F] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#31BA58]" />
            <span>Locally Dependable Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#041B5F]">
            Service Readiness & Ownership Support in Nepal
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Commercial fleet transition works when local execution is
            accountable. Ekata Motors delivers complete lifecycle support beyond
            vehicle handover.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#F5F8FB] hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#0382DA]/40 shadow-xs hover:shadow-md transition-all space-y-3 group"
            >
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 w-fit group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-[#041B5F] group-hover:text-[#0382DA] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Naxal Experience Hub Banner */}
        <div className="bg-gradient-to-r from-[#041B5F] via-[#063891] to-[#0499AA] rounded-2xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[#31BA58]" />
              <span>Naxal, Kathmandu Experience Center</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Visit Ekata Motors Experience Hub & Service Center
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Explore EKA electric vehicles in person, review route simulation
              analytics, inspect charging station hardware, and meet our Nepal
              technical team.
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#31BA58]" /> Direct Route
                Simulations
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#31BA58]" /> Charger
                Fast-Track Setup
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#31BA58]" /> Corporate
                Fleet Financing Options
              </span>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 space-y-3">
            <button
              onClick={() =>
                onOpenWhatsApp(
                  "Hello Ekata Motors! I would like to book a visit to the Naxal Experience Hub and consult on fleet electrification.",
                )
              }
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Book Visit via WhatsApp</span>
            </button>
            <div className="text-[11px] text-center text-slate-300 font-medium">
              Call us directly: {COMPANY_INFO.phonePrimary}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
