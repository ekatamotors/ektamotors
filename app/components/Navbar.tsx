"use client";
import React, { useState, useRef } from "react";
import {
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Home,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";
import { EkataMotorsLogo } from "./EkataMotorsLogo";
import Link from "next/link";
import { useWhatsAppContext } from "@/context/WhatsAppContext";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { openWhatsApp } = useWhatsAppContext();
  const pathname = usePathname();
  // Helpers to determine active state
  const isHomeActive = pathname === "/";
  const isSupportActive = pathname?.startsWith("/supports");
  const isAboutActive = pathname?.startsWith("/about");

  // A category is active if we're on its own portfolio page OR on any child product's page
  const isCategoryActive = (cat: (typeof menuCategories)[number]) => {
    if (pathname === `/portfolio/${cat.categorySlug}`) return true;
    return cat.items.some((item) => pathname === `/portfolio/${item.id}`);
  };

  const navLinkClasses = (active: boolean) =>
    `px-3.5 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
      active
        ? "bg-[#0382DA] text-white shadow-sm"
        : "text-slate-200 hover:text-white hover:bg-slate-800/70"
    }`;

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleProductClick = (productId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    // onSelectProduct(productId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    // onSelectCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (tab: string, sectionId?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Nav categories mapping to EKA Mobility site structure
  const menuCategories = [
    {
      key: "trucks",
      label: "Trucks",
      categorySlug: "eka-trucks",
      items: [
        { id: "eka-55t", label: "EKA 55T", badge: "Heavy Duty 55T" },
        { id: "eka-7t", label: "EKA 7T", badge: "Cargo Truck" },
      ],
    },
    {
      key: "buses",
      label: "Buses",
      categorySlug: "eka-buses",
      items: [
        { id: "eka-coach", label: "EKA Coach", badge: "Highway Coach" },
        { id: "eka-lf", label: "EKA LF", badge: "Low Floor Transit" },
        { id: "eka-12m", label: "EKA 12M", badge: "12m City Bus" },
        { id: "eka-9m", label: "EKA 9M", badge: "9m Electric Bus" },
        { id: "eka-7m", label: "EKA 7M", badge: "7m Shuttle" },
      ],
    },
    {
      key: "scvs",
      label: "SCVs",
      categorySlug: "eka-scvs",
      items: [
        { id: "eka-1-5t", label: "EKA 1.5T", badge: "1.5T Delivery" },
        { id: "eka-3w-cargo", label: "EKA 3W Cargo", badge: "3-Wheeler Heavy" },
        { id: "eka-6s", label: "EKA 6S", badge: "6-Seater Shuttle" },
        { id: "eka-3s", label: "EKA 3S", badge: "3-Seater Commercial" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#060A12] text-white border-b border-slate-800/80 shadow-xl">
      {/* Top Gradient Signature Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#041B5F] via-[#0382DA] via-[#0499AA] via-[#0CB087] to-[#31BA58]" />

      {/* Top Utility Announcement & Distributor Bar */}
      <div className="bg-[#0A0F1D] border-b border-slate-800/60 text-xs py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#0382DA] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-xs tracking-wider uppercase">
              Nepal Distributor
            </span>
            <span className="font-semibold text-white">
              {COMPANY_INFO.name}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">
              {COMPANY_INFO.descriptor}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="hover:text-[#0382DA] flex items-center gap-1.5 text-slate-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#0382DA]" />
              <span className="hidden sm:inline">
                {COMPANY_INFO.phonePrimary}
              </span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-[#31BA58] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#31BA58] animate-pulse"></span>
              Showroom Hub: Naxal, Kathmandu
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Lockup */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-hidden text-left group shrink-0 cursor-pointer py-1"
          >
            <EkataMotorsLogo variant="dark" height={42} />
          </Link>

          {/* Desktop Navigation Pill Bar matching user's requested style */}
          <nav className="hidden lg:flex items-center bg-[#0F172A]/90 border border-slate-700/60 rounded-full px-4 py-1.5 shadow-inner">
            <ul
              id="menu-main-menu-12"
              className="flex items-center gap-1 text-xs font-bold tracking-wide"
            >
              {/* Home */}
              <li>
                <Link href="/" className={navLinkClasses(isHomeActive)}>
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              </li>

              {/* Dynamic Dropdown Categories from Website Menu */}
              {menuCategories.map((cat) => {
                const isOpen = activeDropdown === cat.key;
                const active = isCategoryActive(cat);
                return (
                  <li
                    key={cat.key}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(cat.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={`/portfolio/${cat.categorySlug}`}
                      onClick={() => setActiveDropdown(null)}
                      className={`px-3.5 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                        active
                          ? "bg-[#0382DA] text-white shadow-sm"
                          : isOpen
                            ? "bg-slate-800 text-[#0382DA]"
                            : "text-slate-200 hover:text-white hover:bg-slate-800/70"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-white"
                            : active
                              ? "text-white"
                              : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {isOpen && (
                      <div className="absolute top-full left-0 mt-2 w-60 bg-[#0B1120] border border-slate-700/80 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-800 mb-1 flex items-center justify-between">
                          <span>{cat.label} Portfolio</span>
                          <span className="text-[#0382DA]">• EKA</span>
                        </div>
                        <ul className="space-y-0.5">
                          {cat.items.map((item) => {
                            const itemActive =
                              pathname === `/portfolio/${item.id}`;
                            return (
                              <li key={item.id}>
                                <Link
                                  href={`/portfolio/${item.id}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${
                                    itemActive
                                      ? "bg-[#0382DA]/20 border-l-2 border-[#0382DA] text-white"
                                      : "text-slate-200 hover:text-white hover:bg-[#0382DA]/20 hover:border-l-2 hover:border-[#0382DA]"
                                  }`}
                                >
                                  <span className="font-semibold group-hover:translate-x-0.5 transition-transform">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[9px] font-bold bg-slate-800 text-cyan-300 px-2 py-0.5 rounded-md border border-slate-700/60">
                                      {item.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
              {/* Support */}
              <li>
                <Link
                  href="/supports"
                  className={navLinkClasses(isSupportActive)}
                >
                  <span>Support</span>
                </Link>
              </li>

              {/* About */}
              <li>
                <Link href="/about" className={navLinkClasses(isAboutActive)}>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* WhatsApp CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello Ekata Motors! I would like to inquire about EKA electric commercial vehicles.",
                )
              }
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md hover:shadow-emerald-900/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello Ekata Motors! I would like to inquire about EKA electric commercial vehicles.",
                )
              }
              className="p-2 bg-[#25D366] text-white rounded-full sm:hidden"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:bg-slate-800 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1120] border-b border-slate-800 px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0382DA] text-white text-sm font-bold shadow-md"
          >
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Home Overview</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>

          {menuCategories.map((cat) => (
            <div
              key={cat.key}
              className="space-y-1 bg-slate-900/60 p-3 rounded-2xl border border-slate-800"
            >
              <div className="text-xs font-black uppercase text-[#0382DA] tracking-wider px-1 py-1 flex items-center justify-between">
                <span>{cat.label}</span>
                <span className="text-[10px] text-slate-500">
                  {cat.items.length} Options
                </span>
              </div>
              <div className="space-y-1 pt-1">
                {cat.items.map((item) => (
                  <Link
                    href={`/portfolio/${item.id}`}
                    key={item.id}
                    onClick={() => handleProductClick(item.id)}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-slate-800 flex items-center justify-between cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/supports"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full flex items-center justify-between p-3 rounded-xl border  text-sm font-bold shadow-xs cursor-pointer`}
          >
            <span>Support & Service</span>
            <ChevronRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full flex items-center justify-between p-3 rounded-xl border  text-sm font-bold shadow-xs cursor-pointer`}
          >
            <span>About Ekata Motors</span>
            <ChevronRight className="w-4 h-4" />
          </Link>

          <div className="pt-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-bold py-3.5 px-4 rounded-xl shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Connect on WhatsApp</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
