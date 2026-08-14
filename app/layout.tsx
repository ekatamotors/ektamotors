import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";

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
    <html lang="en">
      <body className="antialiased selection:bg-[#0382DA] selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
