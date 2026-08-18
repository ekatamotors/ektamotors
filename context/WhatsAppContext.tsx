"use client";

import React, { createContext, useContext } from "react";
import { useWhatsApp } from "../hooks/useWhatsApp";
import { WhatsAppDrawer } from "@/app/components/WhatsAppDrawer";

type WhatsAppContextValue = ReturnType<typeof useWhatsApp>;

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

export function WhatsAppProvider({ children }: { children: React.ReactNode }) {
  const whatsapp = useWhatsApp();

  return (
    <WhatsAppContext.Provider value={whatsapp}>
      {children}
      <WhatsAppDrawer {...whatsapp.drawerProps} />
    </WhatsAppContext.Provider>
  );
}

export function useWhatsAppContext() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) {
    throw new Error(
      "useWhatsAppContext must be used within a WhatsAppProvider",
    );
  }
  return ctx;
}
