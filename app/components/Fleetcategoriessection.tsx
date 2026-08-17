import React from "react";
import { ArrowRight } from "lucide-react";

type FleetCategory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  accent: string; // hex used for the CTA + hover glow, per category
};

const CATEGORIES: FleetCategory[] = [
  {
    id: "buses",
    title: "EKA Buses",
    tagline: "Comfort Meets Capacity, Sustainably",
    description:
      "Zero-emission buses built for city routes and highway comfort alike.",
    image: "/images/fleet/Eka-Website-Banners_Buses.jpg",
    href: "/buses",
    accent: "#5FD3F3",
  },
  {
    id: "trucks",
    title: "EKA Trucks",
    tagline: "Power Meets Performance, Sustainably",
    description:
      "Clean energy solutions for heavy-duty logistics and diverse applications.",
    image: "/images/fleet/Eka-Website-Banners-02-scaled-1.jpeg",
    href: "/trucks",
    accent: "#4FE0B5",
  },
  {
    id: "scvs",
    title: "EKA SCVs",
    tagline: "Smart Solutions for Everyday Transport",
    description:
      "Reliable performance for last-mile deliveries & urban transport.",
    image: "/images/fleet/Eka-Website-Banners_SCV.jpeg",
    href: "/scvs",
    accent: "#31BA58",
  },
];

export default function FleetCategoriesSection() {
  return (
    <section
      className="relative "
      aria-label="Explore the EKA fleet by category"
    >
      {CATEGORIES.map((category, index) => (
        <div
          key={category.id}
          className="sticky top-16 lg:top-20 h-[88vh] lg:h-screen first:h-[calc(88vh-1px)]"
          style={{ zIndex: index + 1 }}
        >
          <a
            href={category.href}
            className="group relative block h-full w-full overflow-hidden rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            {/* Category banner photo */}
            <img
              src={category.image}
              alt={`${category.title} — EKA electric fleet`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Bottom scrim for tagline legibility */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#040E2A] via-[#040E2A]/55 to-transparent" />
            {/* Faint top scrim so the title reads over bright sky photos */}
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/35 to-transparent" />

            {/* Sequence marker */}
            <span className="absolute top-6 left-6 lg:top-8 lg:left-8 text-xs font-bold tracking-widest text-white/60">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(CATEGORIES.length).padStart(2, "0")}
            </span>

            {/* Title */}
            <div className="absolute inset-x-0 top-[14%] flex justify-center px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
                {category.title}
              </h2>
            </div>

            {/* Tagline + description, revealed clearly at rest, CTA appears on hover */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-6 pb-10 lg:pb-14 text-center">
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-white">
                  {category.tagline}
                </p>
                <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto">
                  {category.description}
                </p>
              </div>

              <span
                className="inline-flex items-center gap-1.5 text-sm font-bold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: category.accent }}
              >
                Explore {category.title}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
