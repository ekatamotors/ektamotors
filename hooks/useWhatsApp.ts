"use client";

import { useCallback, useState } from "react";
import { COMPANY_INFO } from "@/data/products";

const DEFAULT_MESSAGE =
  "Hello Ekata Motors! I would like to consult on EKA electric commercial vehicles in Nepal.";

export function useWhatsApp(defaultMessage: string = DEFAULT_MESSAGE) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  // Open the drawer, optionally seeding it with a custom message
  const openWhatsApp = useCallback(
    (customMessage?: string) => {
      setMessage(customMessage || defaultMessage);
      setIsOpen(true);
    },
    [defaultMessage],
  );

  const closeWhatsApp = useCallback(() => {
    setIsOpen(false);
  }, []);

  // For cases where you want to skip the drawer entirely and jump straight to WhatsApp
  const sendDirectly = useCallback(
    (customMessage?: string) => {
      const finalMsg = customMessage || defaultMessage;
      const encoded = encodeURIComponent(finalMsg);
      window.open(
        `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`,
        "_blank",
        "noopener,noreferrer",
      );
    },
    [defaultMessage],
  );

  return {
    isOpen,
    message,
    openWhatsApp,
    closeWhatsApp,
    sendDirectly,
    // Convenience: spread this straight onto <WhatsAppDrawer {...drawerProps} />
    drawerProps: {
      isOpen,
      onClose: closeWhatsApp,
      customMessage: message,
    },
  };
}
