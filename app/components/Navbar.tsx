"use client";

import Link from "next/link";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/products";

const vehicleMenus = [
  {
    label: "Trucks",
    categoryUrl: "/portfolio/eka-trucks",
    vehicles: [{ label: "EKA 55T", href: "/portfolio/eka-55t" }],
  },
  {
    label: "Buses",
    categoryUrl: "/portfolio/eka-buses",
    vehicles: [
      { label: "EKA Coach", href: "/portfolio/eka-coach" },
      { label: "EKA LF", href: "/portfolio/eka-lf" },
      { label: "EKA 12M", href: "/portfolio/eka-12m" },
      { label: "EKA 9M", href: "/portfolio/eka-9m" },
      { label: "EKA 7M", href: "/portfolio/eka-7m" },
    ],
  },
  {
    label: "SCVs",
    categoryUrl: "/portfolio/eka-scvs",
    vehicles: [
      { label: "EKA 1.5T", href: "/portfolio/eka-1-5t" },
      { label: "EKA 3W Cargo", href: "/portfolio/eka-3w-cargo" },
      { label: "EKA 6S", href: "/portfolio/eka-6s" },
      { label: "EKA 3S", href: "/portfolio/eka-3s" },
    ],
  },
];

const regularLinks = [
  { label: "Home", href: "/" },
  { label: "Support", href: "/supports" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const whatsappMessage = encodeURIComponent(
    "Hello Ekata Motors, I would like to know more about your vehicles.",
  );

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isVehicleMenuActive = (menu: (typeof vehicleMenus)[number]) =>
    pathname === menu.categoryUrl ||
    menu.vehicles.some((vehicle) => pathname === vehicle.href);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Brand gradient */}
      <div className="h-1 bg-gradient-to-r from-[#041B5F] via-[#0382DA] to-[#31BA58]" />

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          aria-label="Ekata Motors home"
          className="shrink-0"
        >
          <img
            src="/ekata-logo.png"
            alt="Ekata Motors"
            className="h-auto w-36"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              pathname === "/"
                ? "bg-[#041B5F] text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Home
          </Link>

          {vehicleMenus.map((menu) => {
            const active = isVehicleMenuActive(menu);

            return (
              <div key={menu.label} className="group relative">
                <Link
                  href={menu.categoryUrl}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-[#041B5F] text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {menu.label}

                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Keeps dropdown open while pointer moves downward */}
                <div className="invisible absolute left-0 top-full w-60 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                    <Link
                      href={menu.categoryUrl}
                      className="mb-1 flex items-center justify-between rounded-xl bg-[#F5F8FB] px-4 py-3 text-sm font-bold text-[#041B5F] hover:bg-blue-50"
                    >
                      View all {menu.label}
                      <span aria-hidden="true">→</span>
                    </Link>

                    <div className="h-px bg-slate-100" />

                    <div className="mt-1">
                      {menu.vehicles.map((vehicle) => {
                        const vehicleActive = pathname === vehicle.href;

                        return (
                          <Link
                            key={vehicle.href}
                            href={vehicle.href}
                            className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                              vehicleActive
                                ? "bg-[#0382DA] text-white"
                                : "text-slate-700 hover:bg-[#041B5F] hover:text-white"
                            }`}
                          >
                            {vehicle.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {regularLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                isLinkActive(link.href)
                  ? "bg-[#041B5F] text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp */}
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#20bd5a] sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-800 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav
          className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-slate-200 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block rounded-xl px-4 py-3 font-semibold ${
                pathname === "/"
                  ? "bg-[#041B5F] text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>

            {vehicleMenus.map((menu) => {
              const expanded = mobileDropdown === menu.label;

              return (
                <div key={menu.label}>
                  <div className="flex items-center">
                    <Link
                      href={menu.categoryUrl}
                      onClick={closeMobileMenu}
                      className={`flex-1 rounded-l-xl px-4 py-3 font-semibold ${
                        isVehicleMenuActive(menu)
                          ? "bg-[#041B5F] text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {menu.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(expanded ? null : menu.label)
                      }
                      className={`rounded-r-xl px-4 py-3 ${
                        isVehicleMenuActive(menu)
                          ? "bg-[#041B5F] text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                      aria-label={`Show ${menu.label} vehicles`}
                      aria-expanded={expanded}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {expanded && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#0382DA]/20 pl-3">
                      {menu.vehicles.map((vehicle) => (
                        <Link
                          key={vehicle.href}
                          href={vehicle.href}
                          onClick={closeMobileMenu}
                          className={`block rounded-lg px-4 py-3 text-sm font-semibold ${
                            pathname === vehicle.href
                              ? "bg-[#0382DA] text-white"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {vehicle.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {regularLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block rounded-xl px-4 py-3 font-semibold ${
                  isLinkActive(link.href)
                    ? "bg-[#041B5F] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white sm:hidden"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
