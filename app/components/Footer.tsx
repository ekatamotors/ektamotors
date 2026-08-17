"use client";
import React from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";
import { EkataMotorsLogo } from "./EkataMotorsLogo";

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenWhatsApp: (msg?: string) => void;
}

export const Footer = () =>
  //   {
  //   onNavigate,
  //   onOpenWhatsApp,
  // }
  {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <footer className="bg-[#041B5F] text-white pt-12 pb-6 relative overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-white/10 text-xs">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-2">
                <EkataMotorsLogo variant="dark" height={42} />
                <p className="text-xs text-blue-200 font-semibold pt-1">
                  {COMPANY_INFO.descriptor}
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-sm">
                Nepal’s trusted partner for electric commercial vehicles,
                charging infrastructure, route economics, and dedicated local
                service support.
              </p>

              <div className="text-emerald-300 font-bold text-sm tracking-wide">
                {COMPANY_INFO.tagline}
              </div>

              <div className="pt-2">
                <button
                  // onClick={() =>
                  //   onOpenWhatsApp(
                  //     "Hello Ekata Motors! I am contacting you via website footer.",
                  //   )
                  // }
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Instant Inquiry</span>
                </button>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm border-b border-white/10 pb-2">
                Electric Fleet
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button
                    onClick={() => {
                      // onNavigate("products");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    EKA E9 9m Electric Bus
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      // onNavigate("products");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    EKA 14-Tonne Cargo Truck
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      // onNavigate("products");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    EKA K2.0 Delivery LCV
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      // onNavigate("products");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    EKA E7 Executive Shuttle
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      //onNavigate("videos");
                      scrollToTop();
                    }}
                    className="hover:text-[#0382DA] transition-colors cursor-pointer flex items-center gap-1 text-[#0382DA] font-semibold"
                  >
                    Watch Product Videos
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Tools & About */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm border-b border-white/10 pb-2">
                Services & Company
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button
                    onClick={() => {
                      // onNavigate("support");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Support & Service Readiness
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      // onNavigate("about");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Ekata Motors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      //onNavigate("contact");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact & Location
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Location Info */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm border-b border-white/10 pb-2">
                Kathmandu Hub
              </h4>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0382DA] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#31BA58] shrink-0" />
                  <span>{COMPANY_INFO.phonePrimary}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0499AA] shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                <p>
                  Legal Name:{" "}
                  <strong className="text-slate-200">
                    {COMPANY_INFO.name}
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Legal Disclaimer & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>
              © {new Date().getFullYear()} Ekata Motors Pvt. Ltd. All rights
              reserved. EKA Mobility is a registered trademark of EKA Mobility.
              Distributed exclusively in Nepal.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Signature Bottom Gradient Accent Band */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#041B5F] via-[#0382DA] via-[#0499AA] via-[#0CB087] to-[#31BA58] mt-6" />
      </footer>
    );
  };
