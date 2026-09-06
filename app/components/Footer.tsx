import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function Footer(){return <footer className="bg-[#041B5F] text-white">
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
    <div><img src="/brand/ekata-logo.webp" alt="Ekata Motors" className="w-40 brightness-0 invert"/><p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">Electric commercial vehicles, local guidance and dependable support for Nepal.</p></div>
    <div><h2 className="text-sm font-bold uppercase tracking-wider text-blue-200">Quick links</h2><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><Link href="/portfolio" className="hover:text-[#31BA58]">Vehicles</Link><Link href="/supports" className="hover:text-[#31BA58]">Support</Link><Link href="/about" className="hover:text-[#31BA58]">About us</Link><Link href="/contact" className="hover:text-[#31BA58]">Contact</Link></div></div>
    <div><h2 className="text-sm font-bold uppercase tracking-wider text-blue-200">Contact</h2><div className="mt-4 space-y-3 text-sm text-blue-50"><p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#31BA58]"/>{COMPANY_INFO.address}</p><a href={`tel:${COMPANY_INFO.phonePrimary}`} className="flex gap-2 hover:text-white"><Phone className="h-4 w-4 text-[#31BA58]"/>{COMPANY_INFO.phonePrimary}</a><a href={`mailto:${COMPANY_INFO.salesEmail}`} className="flex gap-2 hover:text-white"><Mail className="h-4 w-4 text-[#31BA58]"/>{COMPANY_INFO.salesEmail}</a></div></div>
  </div><div className="border-t border-white/10 px-5 py-5 text-center text-xs text-blue-200">© {new Date().getFullYear()} Ekata Motors Pvt. Ltd. All rights reserved.</div>
</footer>}
