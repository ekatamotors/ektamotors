import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL = "https://www.ekatamotors.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Ekata Motors | Official EKA Commercial Electric Vehicles Nepal",

  description:
    "Authorized distributor of EKA Commercial Electric Vehicles in Nepal. Zero-emission 1.5T to 3.5T EV logistics vans, 7m to 12m city electric buses, and complete fleet service.",

  applicationName: "Ekata Motors",

  keywords: [
    "Ekata Motors",
    "EKA Mobility",
    "Electric Vehicles Nepal",
    "Electric Commercial Vehicles Nepal",
    "Electric Cargo Van",
    "Electric Bus Nepal",
    "EV Bus Kathmandu",
    "Green Logistics Nepal",
  ],

  authors: [
    {
      name: "Ekata Motors Pvt. Ltd.",
      url: SITE_URL,
    },
  ],

  creator: "Ekata Motors Pvt. Ltd.",
  publisher: "Ekata Motors Pvt. Ltd.",

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Ekata Motors Nepal - Commercial Electric Mobility",

    description:
      "Transforming Nepal commercial transport with high-efficiency electric vans and buses.",

    url: SITE_URL,
    siteName: "Ekata Motors",
    type: "website",
    locale: "en_NP",

    images: [
      {
        url: "/social/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ekata Motors – Commercial Electric Mobility in Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ekata Motors Nepal - Commercial Electric Mobility",

    description:
      "Transforming Nepal commercial transport with high-efficiency electric vans and buses.",

    images: ["/social/og-image.png"],
  },

  appleWebApp: {
    capable: true,
    title: "Ekata Motors",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#082671",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ekata Motors",
  legalName: "Ekata Motors Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/organization-logo.png`,
  image: `${SITE_URL}/social/og-image.png`,
  description:
    "Authorized distributor of EKA commercial electric vehicles in Nepal.",
  email: "sales@ekatamotors.com",
  telephone: "+977-970-5322342",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-970-5322342",
    email: "sales@ekatamotors.com",
    contactType: "sales",
    areaServed: "NP",
    availableLanguage: ["English", "Nepali"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased selection:bg-[#0382DA] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
