import { PRODUCTS_DATA } from "@/data/products";
import { PortfolioNavigation } from "../components/PortfolioNavigation";
import { ProductCardNew } from "../components/ProductCardNew";

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#F5F8FB]">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
            Vehicle range
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-[#041B5F] sm:text-5xl">
            Find your electric vehicle
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-600">
            Start with a vehicle type, or browse the complete range below.
          </p>
        </div>
      </section>
      <PortfolioNavigation />
      <section className="border-t border-slate-100 bg-[#F5F8FB] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-[#041B5F]">
            All vehicles
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS_DATA.map((v) => (
              <ProductCardNew key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
