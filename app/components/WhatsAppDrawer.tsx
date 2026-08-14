"use client";
import React, { useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  CheckCircle,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  customMessage?: string;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({
  isOpen,
  onClose,
  customMessage = "",
}) => {
  const [userText, setUserText] = useState(customMessage || "");

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const finalMsg =
      textToSend ||
      userText ||
      "Hello Ekata Motors! I would like to consult on EKA electric commercial vehicles in Nepal.";
    const encoded = encodeURIComponent(finalMsg);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  const quickPrompts = [
    {
      label: "EKA E9 Electric Bus Pricing",
      msg: "Hello Ekata Motors! I am interested in getting a detailed quotation and specification sheet for the EKA E9 9m Electric Bus.",
    },
    {
      label: "14-Tonne Heavy Truck Quote",
      msg: "Hello Ekata Motors! Please send pricing and payload details for the EKA 14-Tonne Electric Commercial Cargo Truck.",
    },
    {
      label: "EKA K2.0 Delivery LCV Quote",
      msg: "Hello Ekata Motors! I would like to inquire about the EKA K2.0 Light Commercial Vehicle for last-mile delivery in Kathmandu.",
    },
    {
      label: "Schedule Route Assessment",
      msg: "Hello Ekata Motors! I would like to schedule a route assessment and test drive at your Naxal Kathmandu facility.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden flex flex-col my-auto animate-in slide-in-from-bottom duration-300">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white p-4 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-white border border-white/30">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <span className="w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full absolute bottom-0 right-0"></span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">
                Ekata Motors WhatsApp Sales
              </h3>
              <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                <span>Official EKA Nepal Distributor</span>
                <span>•</span>
                <span className="font-semibold text-emerald-200">
                  Online Now
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close WhatsApp chat dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 bg-[#E5DDD5] space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Incoming Assistant Greeting Bubble */}
          <div className="bg-white p-3.5 rounded-xl shadow-xs max-w-[85%] space-y-2 border border-slate-200/60">
            <div className="text-xs text-slate-800 leading-relaxed">
              <p className="font-bold text-[#041B5F]">
                Namaste! Welcome to Ekata Motors Pvt. Ltd.
              </p>
              <p className="mt-1">
                We are the Official & Exclusive Distributor of EKA Mobility
                commercial electric trucks and buses in Nepal.
              </p>
              <p className="mt-1 text-slate-600">
                How can we assist your fleet electrification today?
              </p>
            </div>
            <div className="text-[10px] text-slate-400 text-right">
              Just now
            </div>
          </div>

          {/* Quick Option Pills */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-600 block uppercase tracking-wider px-1">
              Select Quick Topic:
            </span>
            <div className="space-y-1.5">
              {quickPrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(item.msg)}
                  className="w-full text-left bg-white hover:bg-emerald-50 text-slate-800 text-xs font-semibold p-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between transition-colors cursor-pointer group"
                >
                  <span className="group-hover:text-[#075E54]">
                    {item.label}
                  </span>
                  <Send className="w-3.5 h-3.5 text-emerald-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Input */}
          <div className="bg-white p-2 rounded-xl border border-slate-300 shadow-xs space-y-2 mt-2">
            <textarea
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              placeholder="Or type custom message here..."
              rows={2}
              className="w-full text-xs text-slate-800 focus:outline-hidden p-1 resize-none"
            />
            <button
              onClick={() => handleSend()}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Start WhatsApp Conversation</span>
            </button>
          </div>
        </div>

        {/* Drawer Footer info */}
        <div className="bg-white p-3 border-t border-slate-200 text-[10px] text-slate-500 text-center flex items-center justify-center gap-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#0382DA]" /> Naxal, Kathmandu
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#31BA58]" /> Sun-Fri: 9am - 6pm
          </span>
        </div>
      </div>
    </div>
  );
};
