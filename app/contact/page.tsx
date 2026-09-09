import type { Metadata } from "next";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { COMPANY_INFO } from "@/data/products";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ekatamotors.com";

const OFFICE_ADDRESS = {
  streetAddress: "P89J+CXX, Bishal Nagar Marg",
  addressLocality: "Kathmandu",
  addressRegion: "Bagmati Province",
  postalCode: "44600",
  addressCountry: "NP",
};

const FORMATTED_ADDRESS =
  "Bishal Nagar Marg, Kathmandu, Bagmati Province 44600, Nepal";

const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  FORMATTED_ADDRESS,
)}`;

const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  FORMATTED_ADDRESS,
)}&output=embed`;

export const metadata: Metadata = {
  title: "Contact Ekata Motors | Electric Vehicles in Nepal",
  description:
    "Contact Ekata Motors in Bishal Nagar, Kathmandu for EKA electric commercial vehicle sales, pricing, availability and service information.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Ekata Motors Nepal",
    description:
      "Visit or contact Ekata Motors in Bishal Nagar, Kathmandu, Nepal.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello Ekata Motors, I have a vehicle inquiry.",
  );

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${SITE_URL}/#organization`,
    name: "Ekata Motors",
    alternateName: "Ekata Motors Nepal",
    description:
      "Ekata Motors is an authorized distributor of EKA electric commercial vehicles in Nepal.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,

    telephone: "+977-9705322342",
    email: COMPANY_INFO.salesEmail,

    address: {
      "@type": "PostalAddress",
      ...OFFICE_ADDRESS,
    },

    hasMap: GOOGLE_MAPS_URL,

    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+977-9705322342",
        contactType: "sales",
        email: COMPANY_INFO.salesEmail,
        areaServed: "NP",
        availableLanguage: ["English", "Nepali"],
      },
    ],

    priceRange: "$$",
  };

  return (
    <>
      {/* Local business structured data */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Page heading */}
      <section className="bg-[#F5F8FB]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
            Contact Ekata Motors
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-[#041B5F] sm:text-5xl">
            Let’s find the right vehicle.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-600">
            Share your route, daily distance, passenger or cargo requirement.
            Our team will help you understand the suitable options.
          </p>
        </div>
      </section>

      {/* Contact information */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#041B5F]">
            Contact details
          </h2>

          <div className="mt-7 space-y-5">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 rounded-xl transition hover:text-[#0382DA]"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0382DA]" />

              <span>
                <strong className="block text-slate-900">Visit us</strong>
                <span className="text-slate-600">
                  P89J+CXX, Bishal Nagar Marg
                  <br />
                  Kathmandu, Bagmati Province 44600
                  <br />
                  Nepal
                </span>
              </span>
            </a>

            <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#0382DA]" />

              <span>
                <strong className="block text-slate-900">Call us</strong>
                <span className="text-slate-600">
                  {COMPANY_INFO.phonePrimary}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="flex gap-3"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#0382DA]" />

              <span>
                <strong className="block text-slate-900">Email sales</strong>
                <span className="text-slate-600">
                  {COMPANY_INFO.salesEmail}
                </span>
              </span>
            </a>

            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#0382DA]" />

              <span>
                <strong className="block text-slate-900">Opening hours</strong>
                <span className="text-slate-600">
                  {COMPANY_INFO.workingHours}
                </span>
              </span>
            </div>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0382DA] px-5 py-3 font-bold text-white transition hover:bg-[#026fbc]"
          >
            <MapPin className="h-5 w-5" />
            Get directions
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* WhatsApp card */}
        <div className="flex flex-col justify-center rounded-2xl bg-[#041B5F] p-8 text-white">
          <MessageCircle className="h-10 w-10 text-[#31BA58]" />

          <h2 className="mt-5 text-3xl font-extrabold">
            The quickest way to reach us
          </h2>

          <p className="mt-3 leading-7 text-blue-100">
            Message our team on WhatsApp for pricing, availability,
            specifications or service questions.
          </p>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold transition hover:bg-[#20bd5a]"
          >
            <MessageCircle className="h-5 w-5" />
            Start WhatsApp chat
          </a>
        </div>
      </section>

      {/* Google Map */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-2xl font-extrabold text-[#041B5F]">
              Find Ekata Motors
            </h2>

            <p className="mt-1 text-slate-600">
              Bishal Nagar Marg, Kathmandu, Nepal
            </p>
          </div>

          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            title="Ekata Motors office location in Bishal Nagar, Kathmandu"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
