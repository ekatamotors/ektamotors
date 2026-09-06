import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function ContactPage() {
  const msg = encodeURIComponent(
    "Hello Ekata Motors, I have a vehicle inquiry.",
  );
  return (
    <>
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
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#041B5F]">
            Contact details
          </h2>
          <div className="mt-7 space-y-5">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[#0382DA]" />
              <span>
                <strong className="block text-slate-900">Visit us</strong>
                <span className="text-slate-600">{COMPANY_INFO.address}</span>
              </span>
            </p>
            <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="flex gap-3">
              <Phone className="h-5 w-5 text-[#0382DA]" />
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
              <Mail className="h-5 w-5 text-[#0382DA]" />
              <span>
                <strong className="block text-slate-900">Email sales</strong>
                <span className="text-slate-600">
                  {COMPANY_INFO.salesEmail}
                </span>
              </span>
            </a>
            <p className="flex gap-3">
              <Clock className="h-5 w-5 text-[#0382DA]" />
              <span>
                <strong className="block text-slate-900">Opening hours</strong>
                <span className="text-slate-600">
                  {COMPANY_INFO.workingHours}
                </span>
              </span>
            </p>
          </div>
        </div>
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
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold"
          >
            Start WhatsApp chat
          </a>
        </div>
      </section>
    </>
  );
}
