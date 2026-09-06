import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductCardNew } from "./ProductCardNew";

export function VehicleListingPage({
  title,
  description,
  ids,
}: {
  title: string;
  description: string;
  ids: string[];
}) {
  const vehicles = PRODUCTS_DATA.filter((v) => ids.includes(v.id));
  return (
    <>
      <section className="border-b border-slate-200 bg-[#F5F8FB]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0382DA]"
          >
            <ArrowLeft className="h-4 w-4" /> All vehicle types
          </Link>
          <h1 className="mt-5 text-4xl font-extrabold text-[#041B5F] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <ProductCardNew key={v.id} vehicle={v} />
          ))}
        </div>
      </section>
    </>
  );
}
