"use client";
import React from "react";
import {
  PlayCircle,
  FileText,
  MessageCircle,
  Zap,
  Shield,
  ArrowUpRight,
  BatteryCharging,
  Gauge,
} from "lucide-react";
import { Vehicle } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  vehicle: Vehicle;
  // onOpenWhatsApp: (message?: string) => void;
}

export const ProductCardNew: React.FC<ProductCardProps> = ({
  vehicle,
  // onOpenWhatsApp,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Image Container */}
      <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="bg-[#041B5F] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
            {vehicle.categoryName}
          </span>
          {/* <span className="bg-white/90 backdrop-blur-xs text-[#041B5F] text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-xs">
            <Shield className="w-3 h-3 text-[#31BA58]" />
            {vehicle.warrantyYears} Yr Warranty
          </span> */}
        </div>

        {/* Watch Video Floating Pill */}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-[#0382DA] uppercase tracking-wider flex items-center gap-1">
            <span>{vehicle.brandName}</span>
            <span>•</span>
            <span className="text-[#31BA58]">Nepal Certified</span>
          </div>

          <h3 className="text-xl font-extrabold text-[#041B5F] group-hover:text-[#0382DA] transition-colors leading-snug">
            {vehicle.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {vehicle.shortDescription}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 bg-[#F5F8FB] p-3 rounded-xl border border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#0382DA] shrink-0" />
            <div>
              <span className="text-slate-500 block text-[10px]">Range</span>
              <span className="font-bold text-[#041B5F]">
                {vehicle.keySpecs.rangeKm} km
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <BatteryCharging className="w-4 h-4 text-[#31BA58] shrink-0" />
            <div>
              <span className="text-slate-500 block text-[10px]">
                Fast Charge
              </span>
              <span className="font-bold text-[#041B5F]">
                {vehicle.keySpecs.chargingTimeMins} mins
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#0499AA] shrink-0" />
            <div>
              <span className="text-slate-500 block text-[10px]">Capacity</span>
              <span className="font-bold text-[#041B5F]">
                {vehicle.keySpecs.payloadCapacity}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpRight className="w-4 h-4 text-[#063891] shrink-0" />
            <div>
              <span className="text-slate-500 block text-[10px]">
                Gradeability
              </span>
              <span className="font-bold text-[#041B5F]">
                {vehicle.keySpecs.gradeabilityPercent}% Hill
              </span>
            </div>
          </div>
        </div>

        {/* Route Economics Preview Pill */}
        {/* <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-lg text-xs flex items-center justify-between text-emerald-900">
          <span className="font-semibold text-[11px]">
            Est. Fuel Savings vs Diesel:
          </span>
          <span className="font-black text-[#31BA58]">
            ~NPR {vehicle.economics.monthlySavingsNpr.toLocaleString()}/mo
          </span>
        </div> */}

        {/* Action Button Row */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Link
            href={`/portfolio/${vehicle.id}`}
            className="w-full bg-[#041B5F] hover:bg-[#063891] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Full Specs</span>
          </Link>

          {/* <button
            onClick={() =>
              onOpenWhatsApp(
                `Hello Ekata Motors! I am interested in ${vehicle.name}. Please share pricing details and route suitability.`,
              )
            }
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp Price</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};
