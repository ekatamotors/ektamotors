import { MessageCircle } from "lucide-react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const whatsappNumber = "9851322342"; // Change this
  const whatsappMessage = encodeURIComponent(
    "Hello Ekata Motors, I would like to know more about your vehicles.",
  );
  return (
    <div>
      <header className="relative z-10 border-b border-slate-200">
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
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Us</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
