import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductPageClient } from "../../components/ProductPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ekatamotors.com";

export function generateStaticParams() {
  return PRODUCTS_DATA.map((vehicle) => ({ slug: vehicle.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = PRODUCTS_DATA.find((item) => item.id === slug);

  if (!vehicle) {
    return { title: "Vehicle Not Found | Ekata Motors Nepal" };
  }

  const url = `${SITE_URL}/portfolio/${vehicle.id}`;
  const title = `${vehicle.name} | ${vehicle.categoryName} | Ekata Motors Nepal`;
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
      "electric bus Nepal",
      "electric truck Nepal",
      "Ekata Motors",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Ekata Motors Nepal",
      type: "website",
      images: [{ url: vehicle.image, alt: vehicle.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [vehicle.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = PRODUCTS_DATA.find((item) => item.id === slug);

  if (!vehicle) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    description: vehicle.shortDescription,
    image: vehicle.image,
    brand: { "@type": "Brand", name: vehicle.brandName },
    category: vehicle.categoryName,
    url: `${SITE_URL}/portfolio/${vehicle.id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPageClient vehicle={vehicle} />
    </>
  );
}
