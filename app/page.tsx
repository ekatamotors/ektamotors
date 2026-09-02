"use client";

import { ServiceEcosystem } from "./components/ServiceEcosystem";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { WhatsAppDrawer } from "./components/WhatsAppDrawer";
import HeroSection from "./components/Hero";
import FleetCategoriesSection from "./components/Fleetcategoriessection";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import EkaStack from "./components/Ekastack";
import Social from "./components/Social";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { openWhatsApp, drawerProps } = useWhatsApp();
  const whatsappNumber = "9851322342"; // Change this
  const phoneNumber = "+977 9851322342"; // Change this

  const whatsappMessage = encodeURIComponent(
    "Hello Ekata Motors, I would like to know more about your vehicles.",
  );

  return (
    // <div className="min-h-screen flex flex-col bg-[#FAFCFE]">
    //   <main className="grow">
    //     <div className="space-y-16 sm:space-y-24">
    //       <HeroSection onOpenWhatsApp={openWhatsApp} />
    //       <FleetCategoriesSection />
    //       <ServiceEcosystem onOpenWhatsApp={openWhatsApp} />
    //       <EkaStack />
    //       <AboutSection />
    //       <Social />
    //       <ContactSection onOpenWhatsApp={openWhatsApp} />
    //     </div>
    //   </main>

    //   <WhatsAppDrawer {...drawerProps} />
    // </div>
    <>
      <main className="min-h-screen bg-[#08090b] text-white">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="absolute bottom-[-200px] left-[-150px] h-[400px] w-[400px] rounded-full bg-emerald-500/[0.06] blur-3xl" />

          <div className="absolute right-[-150px] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-3xl" />
        </div>

        {/* Navbar */}
        <header className="relative z-10 border-b border-white/10">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
            {/* Logo */}
            {/* <Link href="/" className="group flex items-center gap-3"></Link> */}
            <Link href="/" className="group flex items-center gap-3">
              <img src="./ekata-logo.png" alt="" className="w-36" />
            </Link>

            {/* Header CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative z-10">
          <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:py-20">
            <div className="grid w-full items-center gap-16 lg:grid-cols-2">
              {/* Left */}
              <div>
                {/* Status */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Website under renovation
                </div>

                {/* Heading */}
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Your next
                  <span className="block text-white/40">
                    journey starts here.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                  We are currently upgrading the Ekata Motors website to give
                  you a better way to explore our vehicles and services.
                </p>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                  In the meantime, contact our team directly for vehicle
                  availability, pricing, bookings and other inquiries.
                </p>

                {/* CTA */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                </div>

                {/* Contact info */}
                <div className="mt-12 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />

                    <div>
                      <p className="text-xs text-white/35">Location</p>
                      <p className="mt-1 text-sm text-white/75">
                        Naxal, Kathmandu, Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />

                    <div>
                      <p className="text-xs text-white/35">Phone</p>
                      <a
                        href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                        className="mt-1 block text-sm text-white/75 hover:text-white"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />

                    <div>
                      <p className="text-xs text-white/35">Opening Hours</p>
                      <p className="mt-1 text-sm text-white/75">Sun – Fri</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right visual */}
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl" />

                  {/* Car illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[82%]">
                      {/* Car shadow */}
                      <div className="absolute bottom-0 left-[8%] right-[8%] h-8 rounded-full bg-black/80 blur-xl" />

                      {/* Car body */}
                      <div className="relative h-28 rounded-[45%_35%_20%_20%] border border-white/20 bg-gradient-to-b from-white/20 to-white/[0.04] shadow-2xl">
                        {/* Roof */}
                        <div className="absolute -top-20 left-[22%] h-24 w-[53%] rounded-t-[80%] rounded-b-[20%] border border-white/15 bg-white/[0.06]" />

                        {/* Windows */}
                        <div className="absolute -top-[66px] left-[28%] h-[48px] w-[42%] rounded-t-[70%] border border-white/10 bg-black/40" />

                        {/* Front light */}
                        <div className="absolute right-2 top-10 h-5 w-10 rounded-full bg-white/30 blur-[2px]" />

                        {/* Back light */}
                        <div className="absolute left-2 top-10 h-5 w-7 rounded-full bg-white/20" />

                        {/* Wheels */}
                        <div className="absolute -bottom-8 left-[13%] h-16 w-16 rounded-full border-[8px] border-[#111216] bg-black shadow-xl">
                          <div className="absolute inset-2 rounded-full border border-white/20" />
                        </div>

                        <div className="absolute -bottom-8 right-[13%] h-16 w-16 rounded-full border-[8px] border-[#111216] bg-black shadow-xl">
                          <div className="absolute inset-2 rounded-full border border-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating label */}
                  <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Ekata Motors
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Something new is coming
                    </p>
                  </div>

                  {/* Number */}
                  <div className="absolute right-5 top-5 text-xs tracking-[0.25em] text-white/20">
                    01 / 01
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {new Date().getFullYear()} Ekata Motors. All rights reserved.
            </p>

            <p>Kathmandu, Nepal</p>
          </div>
        </footer>
      </main>
    </>
  );
}
