import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface ContactSectionProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenWhatsApp,
}) => {
  return (
    <section
      className="py-16 bg-white border-b border-slate-100"
      id="contact-section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F5F8FB] border border-slate-200 text-[#041B5F] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-4 h-4 text-[#31BA58]" />
            <span>Nepal Headquarters & Service Center</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#041B5F]">
            Contact Ekata Motors
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Visit or reach out directly to our central office and service
            facility in Naxal, Kathmandu for all commercial fleet, sales, parts
            and technical inquiries.
          </p>
        </div>

        {/* Main Office & Service Center Card */}
        <div className="bg-[#F5F8FB] p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-8">
          <div className="text-center sm:text-left space-y-1 border-b border-slate-200/80 pb-6">
            <span className="text-xs font-bold text-[#0382DA] uppercase tracking-wider">
              Main Office & Service Center
            </span>
            <h3 className="text-2xl font-black text-[#041B5F]">
              Ekata Motors Pvt. Ltd.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {COMPANY_INFO.descriptor}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="p-2.5 bg-[#0382DA]/10 rounded-lg shrink-0 text-[#0382DA]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#041B5F] text-sm block mb-0.5">
                  Location Address
                </span>
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="p-2.5 bg-[#31BA58]/10 rounded-lg shrink-0 text-[#31BA58]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#041B5F] text-sm block mb-0.5">
                  Phone Contact
                </span>
                <span>
                  Primary:{" "}
                  <a
                    href={`tel:${COMPANY_INFO.phonePrimary}`}
                    className="font-semibold text-[#041B5F] hover:underline"
                  >
                    {COMPANY_INFO.phonePrimary}
                  </a>
                </span>{" "}
                <br />
                <span>
                  Mobile/WhatsApp:{" "}
                  <a
                    href={`tel:${COMPANY_INFO.phoneMobile}`}
                    className="font-semibold text-[#041B5F] hover:underline"
                  >
                    {COMPANY_INFO.phoneMobile}
                  </a>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="p-2.5 bg-[#0499AA]/10 rounded-lg shrink-0 text-[#0499AA]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#041B5F] text-sm block mb-0.5">
                  Email Addresses
                </span>
                <span>
                  General:{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-semibold text-[#041B5F] hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </span>{" "}
                <br />
                <span>
                  Fleet Sales:{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.salesEmail}`}
                    className="font-semibold text-[#041B5F] hover:underline"
                  >
                    {COMPANY_INFO.salesEmail}
                  </a>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="p-2.5 bg-[#063891]/10 rounded-lg shrink-0 text-[#063891]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-[#041B5F] text-sm block mb-0.5">
                  Operating Hours
                </span>
                <span className="leading-relaxed">
                  {COMPANY_INFO.workingHours}
                </span>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Action Box */}
          <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-[#075E54] flex items-center justify-center sm:justify-start gap-2">
                <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                <span>Direct WhatsApp Fleet & Technical Support</span>
              </div>
              <p className="text-xs text-slate-700">
                Connect directly with an Ekata Motors commercial vehicle
                specialist on WhatsApp for immediate assistance.
              </p>
            </div>

            <button
              onClick={() =>
                onOpenWhatsApp(
                  "Hello Ekata Motors! I would like to inquire about EKA commercial electric vehicles.",
                )
              }
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Open WhatsApp Direct Chat</span>
            </button>
          </div>
        </div>

        {/* Showroom & Master Service Center Location Map Banner */}
        <div className="bg-slate-100 rounded-2xl border border-slate-200 p-6 text-center space-y-3">
          <div className="text-sm font-bold text-[#041B5F]">
            Showroom & Master Service Center Location
          </div>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Naxal Highway Junction (Near Bhagwati Temple), Kathmandu, Nepal
          </p>
          <div className="aspect-16/6 bg-slate-200 rounded-xl flex items-center justify-center text-xs text-slate-600 font-medium p-4 border border-slate-300/80">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#0382DA]" />
              <strong className="text-[#041B5F]">
                Main Office & Service Center:
              </strong>{" "}
              Naxal, Kathmandu, Nepal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
