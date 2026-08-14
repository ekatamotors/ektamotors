"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ProductDetailView } from "./ProductDetailView";
import { Vehicle } from "@/types";

const WHATSAPP_NUMBER = "9779800000000"; // <-- replace with the real business number

interface ProductPageClientProps {
  vehicle: Vehicle;
}

export const ProductPageClient: React.FC<ProductPageClientProps> = ({
  vehicle,
}) => {
  const router = useRouter();

  const handleOpenWhatsApp = (message?: string) => {
    const text = encodeURIComponent(
      message || `Hello! I'm interested in ${vehicle.name}.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <ProductDetailView
      vehicle={vehicle}
      onBack={() => router.push("/portfolio")}
      onOpenWhatsApp={handleOpenWhatsApp}
    />
  );
};
