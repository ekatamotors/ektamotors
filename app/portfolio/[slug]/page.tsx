import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/products"; // <-- adjust to wherever products.ts actually lives
import { ProductPageClient } from "../../components/ProductPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://www.ekamotors.com"; // <-- swap in your real domain

// ---------------------------------------------------------------------------
// Pre-render one static page per vehicle at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return PRODUCTS_DATA.map((vehicle) => ({ slug: vehicle.id }));
}

// ---------------------------------------------------------------------------
// Per-page <title>, meta description, canonical, OG/Twitter cards
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = PRODUCTS_DATA.find((v) => v.id === slug);

  if (!vehicle) {
    return { title: "Vehicle Not Found | EKA Mobility Nepal" };
  }

  const url = `${SITE_URL}/portfolio/${vehicle.id}`;
  const title = `${vehicle.name} | ${vehicle.categoryName} | EKA Mobility Nepal`;
  const description = vehicle.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      vehicle.name,
      vehicle.brandName,
      vehicle.categoryName,
      "electric vehicle Nepal",
      "EKA Mobility",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "EKA Mobility Nepal",
      type: "website",
      images: [
        {
          url: vehicle.image,
          width: 1200,
          height: 630,
          alt: vehicle.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [vehicle.image],
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = PRODUCTS_DATA.find((v) => v.id === slug);

  if (!vehicle) {
    notFound();
  }

  // Structured data helps Google show rich results (price/specs aren't in your
  // model yet, so this sticks to fields you actually have)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    description: vehicle.shortDescription,
    image: vehicle.image,
    brand: {
      "@type": "Brand",
      name: vehicle.brandName,
    },
    category: vehicle.categoryName,
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPageClient vehicle={vehicle} />
    </>
  );
}
