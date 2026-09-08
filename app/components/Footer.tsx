import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#041B5F] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img
            src="/brand/ekata-logo.webp"
            alt="Ekata Motors"
            className="w-40 brightness-0 invert"
          />

          <p className="mt-3 text-sm font-bold uppercase tracking-wider text-[#31BA58]">
            Authorised Dealers for EKA Mobility Products in Nepal
          </p>

          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
            Electric commercial vehicles, local guidance and dependable
            after-sales support for Nepal.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Quick Links
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <Link href="/portfolio" className="transition hover:text-[#31BA58]">
              Vehicles
            </Link>

            <Link href="/supports" className="transition hover:text-[#31BA58]">
              Support
            </Link>

            <Link href="/about" className="transition hover:text-[#31BA58]">
              About Us
            </Link>

            <Link href="/contact" className="transition hover:text-[#31BA58]">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Contact
          </h2>

          <div className="mt-4 space-y-3 text-sm text-blue-50">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#31BA58]" />

              <span>{COMPANY_INFO.address}</span>
            </p>

            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="flex gap-2 transition hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#31BA58]" />

              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="flex gap-2 transition hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#31BA58]" />

              <span>{COMPANY_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-blue-200">
        © {new Date().getFullYear()} Ekata Motors Pvt. Ltd. All rights reserved.
      </div>

      <div className="h-1 bg-gradient-to-r from-[#041B5F] via-[#0382DA] to-[#31BA58]" />
    </footer>
  );
}
