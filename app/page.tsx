import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  Headphones,
  MessageCircle,
  Truck,
} from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "@/data/products";
import { ProductCardNew } from "./components/ProductCardNew";

export default function HomePage() {
  const msg = encodeURIComponent(
    "Hello Ekata Motors, please help me choose the right electric vehicle.",
  );
  const choices = [
    {
      icon: BusFront,
      title: "Buses",
      copy: "For city routes, staff transport and passenger operations.",
      href: "/portfolio/eka-buses",
    },
    {
      icon: Truck,
      title: "Trucks",
      copy: "For heavy cargo and demanding commercial routes.",
      href: "/portfolio/eka-trucks",
    },
    {
      icon: Headphones,
      title: "Small commercial vehicles",
      copy: "For urban delivery, cargo and last-mile mobility.",
      href: "/portfolio/eka-scvs",
    },
  ];
  return (
    <>
      <section className="overflow-hidden bg-[#F5F8FB]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0382DA]">
              Electric mobility for Nepal
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#041B5F] sm:text-6xl">
              The right electric vehicle for your route.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Explore electric buses, trucks and small commercial vehicles—with
              a local team to help you choose, charge and maintain them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#041B5F] px-6 py-3.5 font-bold text-white hover:bg-[#063891]"
              >
                Explore vehicles <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 hover:bg-slate-50"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> Ask our
                team
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src="/images/hero_image.jpeg"
              alt="Ekata Motors electric commercial vehicle"
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#041B5F]/90 to-transparent p-6 pt-20 text-white">
              <p className="font-bold">Commercial EVs, backed locally</p>
              <p className="mt-1 text-sm text-blue-100">
                Sales, charging guidance and after-sales support in Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
              Choose by need
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#041B5F]">
              What are you looking for?
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 font-bold text-[#0382DA]"
          >
            View all vehicles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {choices.map((x) => (
            <Link
              key={x.title}
              href={x.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:border-[#0382DA]/40 hover:shadow-lg"
            >
              <x.icon className="h-8 w-8 text-[#0382DA]" />
              <h3 className="mt-5 text-xl font-extrabold text-[#041B5F]">
                {x.title}
              </h3>
              <p className="mt-2 leading-6 text-slate-600">{x.copy}</p>
              <span className="mt-5 flex items-center gap-2 text-sm font-bold text-[#0382DA]">
                See vehicles{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-[#F5F8FB] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-[#041B5F]">
            Featured vehicles
          </h2>
          <p className="mt-2 text-slate-600">
            A quick look at vehicles across our range.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS_DATA.slice(9, 11).map((v) => (
              <ProductCardNew key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#041B5F] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold">
              Not sure which vehicle fits?
            </h2>
            <p className="mt-2 text-blue-100">
              Tell us your route, load and daily distance. Our team will guide
              you.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#31BA58] px-6 py-3.5 font-bold hover:bg-[#28a84e]"
          >
            Talk to Ekata Motors
          </Link>
        </div>
      </section>
    </>
  );
}
