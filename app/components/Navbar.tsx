"use client";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/products";

const links = [{href:"/",label:"Home"},{href:"/portfolio",label:"Vehicles"},{href:"/supports",label:"Support"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];

export default function Navbar() {
  const pathname = usePathname();
  const [open,setOpen] = useState(false);
  const message = encodeURIComponent("Hello Ekata Motors, I would like to know more about your vehicles.");
  const active = (href:string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="h-1 bg-gradient-to-r from-[#041B5F] via-[#0382DA] to-[#31BA58]" />
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
      <Link href="/" aria-label="Ekata Motors home" onClick={()=>setOpen(false)}><img src="/ekata-logo.png" alt="Ekata Motors" className="h-auto w-36" /></Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">{links.map(link=><Link key={link.href} href={link.href} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active(link.href)?"bg-[#041B5F] text-white":"text-slate-700 hover:bg-slate-100 hover:text-[#041B5F]"}`}>{link.label}</Link>)}</nav>
      <div className="flex items-center gap-2">
        <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#20bd5a] sm:flex"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        <button type="button" onClick={()=>setOpen(!open)} className="rounded-lg border border-slate-200 p-2.5 text-slate-800 lg:hidden" aria-label="Toggle menu" aria-expanded={open}>{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
      </div>
    </div>
    {open&&<nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-1">{links.map(link=><Link key={link.href} href={link.href} onClick={()=>setOpen(false)} className={`rounded-xl px-4 py-3 text-base font-semibold ${active(link.href)?"bg-[#041B5F] text-white":"text-slate-700 hover:bg-slate-100"}`}>{link.label}</Link>)}</div></nav>}
  </header>;
}
