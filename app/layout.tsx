import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppProvider } from "@/context/WhatsAppContext";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Ekata Motors | Official EKA Commercial Electric Vehicles Nepal",
  description:
    "Authorized distributor of EKA Commercial Electric Vehicles in Nepal. Zero-emission 1.5T to 3.5T EV logistics vans, 7m to 12m city electric buses, and complete fleet service.",
  keywords: [
    "Ekata Motors",
    "EKA Mobility",
    "Electric Vehicles Nepal",
    "Electric Cargo Van",
    "EV Bus Kathmandu",
    "Green Logistics Nepal",
  ],
  authors: [{ name: "Ekata Motors Pvt. Ltd." }],
  openGraph: {
    title: "Ekata Motors Nepal - Commercial Electric Mobility",
    description:
      "Transforming Nepal commercial transport with high-efficiency electric vans and buses.",
    type: "website",
    locale: "en_NP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased selection:bg-[#0382DA] selection:text-white">
        <WhatsAppProvider>
          <Navbar />
          {children}
          <Footer />
        </WhatsAppProvider>
      </body>
    </html>
  );
}
