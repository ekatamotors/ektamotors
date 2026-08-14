"use client";
import React from "react";
import {
  Wrench,
  BatteryCharging,
  PackageSearch,
  GraduationCap,
  LifeBuoy,
  ArrowRight,
  Phone,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface SupportSectionProps {
  onOpenWhatsApp: (msg?: string) => void;
  onNavigate?: (tab: string) => void;
}

const page: React.FC<SupportSectionProps> = ({
  onOpenWhatsApp,
  onNavigate,
}) => {
  const items = [
    {
      icon: Wrench,
      title: "Service readiness",
      copy: "Local service capacity built around your fleet, with high-contrast technical labelling and clear safety communication in every bay.",
    },
    {
      icon: PackageSearch,
      title: "Parts planning",
      copy: "Planned parts availability so uptime doesn't depend on ad-hoc sourcing.",
    },
    {
      icon: BatteryCharging,
      title: "Charging guidance",
      copy: "Charging strategy matched to your depot, route and duty cycle — not a generic install.",
    },
    {
      icon: GraduationCap,
      title: "Training",
      copy: "Driver and technician training so your team operates and maintains the vehicle with confidence.",
    },
  ];

  return (
    <div className="bg-white text-[#17243A] font-sans selection:bg-[#0382DA] selection:text-white">
      {/* Hero Header Section */}
      <section className="bg-[#F5F8FB] py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0382DA] bg-[#0382DA]/10 px-3.5 py-1 rounded-full border border-[#0382DA]/20">
            Locally dependable
          </div>
          <h1 className="mt-4 max-w-2xl text-[34px] font-extrabold leading-[1.12] tracking-tight text-[#041B5F] sm:text-[46px]">
            Support that continues after the handover.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-700">
            Commercial buyers need to feel that Ekata remains accountable well
            beyond delivery. Here&apos;s how we build that trust — through
            service readiness, parts planning, training and responsive support.
          </p>
        </div>
      </section>

      {/* Grid Features Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                className="flex gap-5 rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#041B5F]/[0.06]">
                  <it.icon size={22} className="text-[#0382DA]" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#041B5F]">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {it.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Support Section (Midnight Theme) */}
      <section className="bg-[#041B5F] py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#31BA58]">
                Need help with a vehicle already on the road?
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Reach the support team directly.
              </h2>
              <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
                For active fleets, our support team handles service scheduling,
                parts requests and charging questions.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xs">
              <div className="p-3 bg-[#31BA58]/20 rounded-xl text-[#31BA58] shrink-0">
                <LifeBuoy size={32} />
              </div>
              <div>
                <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">
                  Support Line
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  className="text-xl font-extrabold text-white hover:text-[#31BA58] transition-colors"
                >
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() =>
                onOpenWhatsApp(
                  "Hello Ekata Motors Support! I am an active fleet operator and would like to request vehicle service / technical assistance.",
                )
              }
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Request Service on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
