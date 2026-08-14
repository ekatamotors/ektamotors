"use client";
import React, { useState } from "react";
import {
  Newspaper,
  Download,
  ExternalLink,
  Calendar,
  MessageCircle,
  FileText,
  Send,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface MediaSectionProps {
  onOpenWhatsApp: (msg?: string) => void;
  activeSubTab?: string;
}

export const MediaSection: React.FC<MediaSectionProps> = ({
  onOpenWhatsApp,
  activeSubTab = "coverage",
}) => {
  const [subTab, setSubTab] = useState<string>(activeSubTab);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubscribed, setNewsletterSubscribed] =
    useState<boolean>(false);

  const mediaCoverages = [
    {
      title:
        "EKA Mobility Partners with Ekata Motors to Launch Commercial EVs in Nepal",
      source: "Nepal Auto Times",
      date: "July 2024",
      snippet:
        "Ekata Motors Pvt. Ltd. officially introduces EKA Mobility’s electric buses and commercial trucks to accelerate Nepal’s clean transportation transition.",
      link: "https://ekamobility.com/media-coverage/",
    },
    {
      title:
        "EKA 55T Electric Heavy Tractor Undergoes High-Altitude Incline Testing",
      source: "Commercial Mobility Journal",
      date: "June 2024",
      snippet:
        "The 55-tonne electric tractor prime mover demonstrated impressive torque and thermal performance on steep highway grades.",
      link: "https://ekamobility.com/media-coverage/",
    },
    {
      title:
        "Zero-Emission Municipal Transit: EKA 9M Monocoque Electric Buses Hit Valley Routes",
      source: "Kathmandu Eco Express",
      date: "May 2024",
      snippet:
        "Low-floor accessibility and silent LFP battery technology bring a quiet, zero-emission commuting experience for passengers.",
      link: "https://ekamobility.com/media-coverage/",
    },
  ];

  const pressReleases = [
    {
      title:
        "Ekata Motors Inagurates Flagship EV Experience Center in Naxal, Kathmandu",
      date: "August 2024",
      description:
        "Featuring fast-charging hubs, certified technician training bays, and route economics advisory services for fleet operators.",
    },
    {
      title:
        "EKA Mobility Expands Commercial EV Lineup with 1.5T SCV Cargo Trucks",
      date: "July 2024",
      description:
        "Engineered specifically for narrow urban corridors, e-commerce distribution, and last-mile logistics in Nepal cities.",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail("");
    }
  };

  return (
    <section className="py-12 bg-white min-h-[70vh] text-[#17243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#F5F8FB] border border-slate-200 text-[#041B5F] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5 text-[#0382DA]" />
            <span>Media Center</span>
          </div>
          <h1 className="text-3xl font-black text-[#041B5F]">
            News, Press Releases & Brand Assets
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Stay updated with official announcements, media coverage, quarterly
            newsletters, and download media kits for Ekata Motors & EKA Mobility
            in Nepal.
          </p>
        </div>

        {/* Sub Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 bg-[#F5F8FB] p-2 rounded-2xl border border-slate-200">
          {[
            { id: "coverage", label: "Media Coverage" },
            { id: "press", label: "Press Releases" },
            { id: "newsletter", label: "Newsletter" },
            { id: "presskit", label: "Press Kit Downloads" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSubTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                subTab === tab.id
                  ? "bg-[#041B5F] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SubTab Content */}
        {subTab === "coverage" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {mediaCoverages.map((article, idx) => (
              <div
                key={idx}
                className="bg-[#F5F8FB] rounded-2xl p-6 border border-slate-200 space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="text-[#0382DA] font-bold">
                      {article.source}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#041B5F] leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0382DA] hover:underline pt-2"
                >
                  <span>Read Full Article</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        )}

        {subTab === "press" && (
          <div className="space-y-4 pt-2">
            {pressReleases.map((pr, idx) => (
              <div
                key={idx}
                className="bg-[#F5F8FB] rounded-2xl p-6 border border-slate-200 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#31BA58]">
                  <FileText className="w-4 h-4" />
                  <span>Official Press Release • {pr.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#041B5F]">{pr.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pr.description}
                </p>
                <button
                  onClick={() =>
                    onOpenWhatsApp(
                      `Hello Ekata Motors! Please share full details regarding press release: "${pr.title}".`,
                    )
                  }
                  className="text-xs font-bold text-[#0382DA] hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Full Press Statement</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {subTab === "newsletter" && (
          <div className="bg-gradient-to-br from-[#041B5F] to-[#063891] rounded-3xl p-8 text-white space-y-6 max-w-2xl mx-auto shadow-xl">
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-black text-white">
                Subscribe to EKA Mobility Nepal Newsletter
              </h3>
              <p className="text-xs text-slate-200">
                Receive monthly updates on electric commercial vehicle
                deployments, charging infrastructure expansions, and Nepal fleet
                operator case studies.
              </p>
            </div>

            {newsletterSubscribed ? (
              <div className="bg-[#31BA58]/20 border border-[#31BA58] p-4 rounded-2xl text-center space-y-1 text-white">
                <CheckCircle2 className="w-6 h-6 text-[#31BA58] mx-auto" />
                <p className="text-xs font-bold">Thank you for subscribing!</p>
                <p className="text-[11px] text-slate-200">
                  You will receive our latest newsletter updates via email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your corporate email..."
                  className="flex-1 bg-white text-slate-900 text-xs px-4 py-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0382DA]"
                />
                <button
                  type="submit"
                  className="bg-[#0382DA] hover:bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        )}

        {subTab === "presskit" && (
          <div className="bg-[#F5F8FB] rounded-2xl p-8 border border-slate-200 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#041B5F]">
                Brand Media Assets & Press Kit
              </h3>
              <p className="text-xs text-slate-600">
                Download high-resolution vehicle imagery, brand logo vector
                files, product specification brochures, and executive bios.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "High-Res EKA Vehicle Image Pack", size: "24 MB ZIP" },
                {
                  title: "Ekata Motors Brand Logo & Guidelines",
                  size: "8 MB PDF",
                },
                {
                  title: "EKA Commercial Lineup Spec Sheet Catalog",
                  size: "12 MB PDF",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#041B5F] block">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.size}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      onOpenWhatsApp(
                        `Hello Ekata Motors! Please share the press kit asset: "${item.title}".`,
                      )
                    }
                    className="p-2 bg-slate-100 hover:bg-[#041B5F] text-slate-700 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
