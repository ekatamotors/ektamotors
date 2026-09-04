"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ProductDetailView } from "./ProductDetailView";
import { Vehicle } from "@/types";

const WHATSAPP_NUMBER = "9851322342";

interface ProductPageClientProps {
  vehicle: Vehicle;
}

export const ProductPageClient: React.FC<ProductPageClientProps> = ({
  vehicle,
}) => {
  const router = useRouter();

  const handleOpenWhatsApp = (message?: string) => {
    const text = encodeURIComponent(
      message || `Hello Ekata Motors! I am interested in ${vehicle.name}.`,
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <ProductDetailView
      vehicle={vehicle}
      onBack={() => router.push("/portfolio")}
      onOpenWhatsApp={handleOpenWhatsApp}
    />
  );
};
