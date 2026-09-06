"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BatteryCharging,
  Check,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import { Vehicle } from "@/types";

interface ProductDetailViewProps {
  vehicle: Vehicle;
  onBack: () => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  vehicle,
  onBack,
  onOpenWhatsApp,
}) => {
  const [activeHighlightId, setActiveHighlightId] = useState(
    vehicle.highlights?.[0]?.id ?? 0,
  );

  const currentHighlight =
    vehicle.highlights?.find((item) => item.id === activeHighlightId) ??
    vehicle.highlights?.[0];

  const highlightImage =
    currentHighlight?.image || vehicle.cockpitImage || vehicle.image;

  const quickSpecs = [
    {
      label: "Range",
      value: `${vehicle.keySpecs.rangeKm} km`,
      icon: Zap,
      color: "text-[#0382DA]",
    },
    {
      label: "Battery",
      value: `${vehicle.keySpecs.batteryCapacityKwh} kWh`,
      icon: BatteryCharging,
      color: "text-[#31BA58]",
    },
    {
      label: "Charging",
      value: `${vehicle.keySpecs.chargingTimeMins} mins`,
      icon: BatteryCharging,
      color: "text-[#0499AA]",
    },
    {
      label: "Capacity",
      value: vehicle.keySpecs.payloadCapacity,
      icon: Truck,
      color: "text-[#063891]",
    },
    {
      label: "Motor Power",
      value: `${vehicle.keySpecs.motorPowerKw} kW`,
      icon: Gauge,
      color: "text-[#0382DA]",
    },
    {
      label: "Gradeability",
      value: `${vehicle.keySpecs.gradeabilityPercent}%`,
      icon: ShieldCheck,
      color: "text-[#31BA58]",
    },
  ];

  const inquire = () =>
    onOpenWhatsApp(
      `Hello Ekata Motors! I would like more information and pricing for ${vehicle.name}.`,
    );

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-slate-200/70 blur-3xl" />
        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-[#0382DA]/40 hover:text-[#0382DA]"
        >
          <ArrowLeft className="h-4 w-4" />
          All vehicles
        </button>

        <section className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0382DA]">
              <Truck className="h-3.5 w-3.5" />
              {vehicle.categoryName}
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-[#31BA58]">
              {vehicle.brandName}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#041B5F] sm:text-5xl lg:text-6xl">
              {vehicle.name}
            </h1>
            <p className="mt-4 text-xl font-semibold leading-snug text-slate-700">
              {vehicle.tagline}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {vehicle.shortDescription || vehicle.fullDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={inquire}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
              >
                <MessageCircle className="h-5 w-5" />
                Inquire on WhatsApp
              </button>
              <a
                href="#specifications"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#041B5F] transition hover:bg-slate-50"
              >
                View specifications
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/60">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              referrerPolicy="no-referrer"
              className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>
        </section>

        <section className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-3 lg:grid-cols-6">
          {quickSpecs.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="border-b border-r border-slate-200 p-5 sm:p-6"
              >
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <p className="mt-3 text-xs font-medium text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-extrabold text-[#041B5F]">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </section>

        {vehicle.highlights && vehicle.highlights.length > 0 && (
          <section className="mt-20">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
              Vehicle highlights
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#041B5F] sm:text-4xl">
              Designed for performance and comfort
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Select a feature to learn what makes {vehicle.name} practical for
              Nepal.
            </p>

            <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
              <div className="space-y-3 lg:col-span-5">
                {vehicle.highlights.map((item) => {
                  const isActive = activeHighlightId === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setActiveHighlightId(item.id)}
                      className={`w-full rounded-2xl border p-5 text-left transition ${
                        isActive
                          ? "border-[#0382DA] bg-blue-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${isActive ? "bg-[#0382DA] text-white" : "bg-slate-100 text-slate-500"}`}
                        >
                          {item.id}
                        </span>
                        <h3 className="font-bold text-[#041B5F]">
                          {item.title}
                        </h3>
                      </div>
                      {isActive && item.bullets && (
                        <ul className="mt-4 space-y-2 pl-10">
                          {/* @ts-ignore */}
                          {item.bullets.map((bullet, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm leading-6 text-slate-600"
                            >
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#31BA58]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg lg:col-span-7">
                <img
                  key={highlightImage}
                  src={vehicle.cockpitImage || highlightImage}
                  alt={currentHighlight?.title || vehicle.name}
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {vehicle.detailedSpecsTable &&
          vehicle.detailedSpecsTable.length > 0 && (
            <section id="specifications" className="mt-20 scroll-mt-24">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
                Technical information
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#041B5F] sm:text-4xl">
                Detailed specifications
              </h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {vehicle.detailedSpecsTable.map((row, index) => (
                  <div
                    key={`${row.label}-${index}`}
                    className={`grid gap-1 px-5 py-4 sm:grid-cols-12 sm:gap-6 sm:px-7 ${
                      index !== vehicle.detailedSpecsTable.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    } ${index % 2 === 1 ? "bg-slate-50/80" : "bg-white"}`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wide text-slate-500 sm:col-span-5">
                      {row.label}
                    </div>
                    <div className="whitespace-pre-line text-sm font-semibold leading-6 text-[#041B5F] sm:col-span-7">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        {vehicle.chargingSpecifications &&
          vehicle.chargingSpecifications.length > 0 && (
            <section id="charging" className="mt-20 scroll-mt-24">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
                Charging information
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-[#041B5F] sm:text-4xl">
                Charger specifications
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Choose between convenient home charging and faster DC charging.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {vehicle.chargingSpecifications.map((option, index) => (
                  <div
                    key={option.title}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="bg-[#041B5F] px-6 py-5 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#31BA58]">
                        Charging option {index + 1}
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold">
                        {option.title}
                      </h3>
                    </div>

                    <div className="divide-y divide-slate-200">
                      <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                        <span className="text-sm font-semibold text-slate-500">
                          Charging socket
                        </span>

                        <span className="font-bold text-[#041B5F]">
                          {option.socket}
                        </span>
                      </div>

                      <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                        <span className="text-sm font-semibold text-slate-500">
                          Charging time
                        </span>

                        <span className="font-bold text-[#041B5F]">
                          {option.chargingTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Charging time may vary depending on the charger, electrical
                supply, battery temperature and state of charge.
              </p>
            </section>
          )}

        {vehicle.specificationSections &&
          vehicle.specificationSections.length > 0 && (
            <section className="mt-20 space-y-14">
              {vehicle.specificationSections.map((section) => (
                <div
                  key={`${vehicle.id}-${section.title}`}
                  className="scroll-mt-24"
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
                    Additional information
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold text-[#041B5F] sm:text-4xl">
                    {section.title}
                  </h2>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <dl>
                      {section.specifications.map((specification, index) => (
                        <div
                          key={`${specification.label}-${index}`}
                          className={`grid gap-2 px-5 py-4 sm:grid-cols-12 sm:gap-6 sm:px-7 ${
                            index !== section.specifications.length - 1
                              ? "border-b border-slate-200"
                              : ""
                          } ${index % 2 === 1 ? "bg-slate-50/80" : "bg-white"}`}
                        >
                          <dt className="text-sm font-bold text-slate-600 sm:col-span-5">
                            {specification.label}
                          </dt>

                          <dd className="text-sm font-semibold leading-6 text-[#041B5F] sm:col-span-7">
                            {specification.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ))}

              <p className="text-sm leading-6 text-slate-500">
                Specifications and charging time may vary depending on the
                vehicle configuration, electrical supply, operating conditions
                and remaining battery level.
              </p>
            </section>
          )}
      </div>
    </main>
  );
};
