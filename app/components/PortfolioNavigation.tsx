import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  Truck,
  LayoutGrid,
  VenusAndMars,
} from "lucide-react";

const portfolioLinks = [
  {
    title: "All Vehicles",
    description: "Explore the complete Ekata Motors vehicle portfolio.",
    href: "/portfolio",
    icon: LayoutGrid,
    color: "bg-[#041B5F]",
  },
  {
    title: "EKA Buses",
    description: "Explore electric buses for public and private transport.",
    href: "/portfolio/eka-buses",
    icon: BusFront,
    color: "bg-[#0382DA]",
  },
  {
    title: "EKA SCVs",
    description: "Compact electric commercial vehicles for urban mobility.",
    href: "/portfolio/eka-scvs",
    icon: VenusAndMars,
    color: "bg-[#0499AA]",
  },
  {
    title: "EKA Trucks",
    description: "Electric trucks designed for commercial transportation.",
    href: "/portfolio/eka-trucks",
    icon: Truck,
    color: "bg-[#31BA58]",
  },
];

export function PortfolioNavigation() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
            Our Portfolio
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#041B5F] sm:text-4xl">
            Explore Our Electric Vehicles
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Find the right electric vehicle for passenger transport, urban
            deliveries, or commercial operations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0382DA]/40 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#041B5F] transition-colors group-hover:text-[#0382DA]">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#0382DA]">
                  Explore vehicles
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
