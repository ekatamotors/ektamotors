import Link from "next/link";
import { ArrowRight, Handshake, Leaf, MapPinned } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F5F8FB]">
        <h1>About Page</h1>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-1">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
              About Ekata Motors
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[#041B5F] sm:text-5xl">
              Moving Nepal toward cleaner commercial transport.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Ekata Motors brings EKA electric commercial vehicles to Nepal and
              supports customers from vehicle selection through operation and
              after-sales service.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <h2 className="text-3xl font-extrabold text-[#041B5F]">
          What we stand for
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Cleaner mobility",
              copy: "Commercial transport solutions that help reduce local emissions and dependence on fossil fuel.",
            },
            {
              icon: MapPinned,
              title: "Built around Nepal",
              copy: "Vehicle guidance based on local roads, routes, payloads, charging access and operating needs.",
            },
            {
              icon: Handshake,
              title: "Long-term support",
              copy: "A local relationship for sales, service, parts, charging guidance and training.",
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <x.icon className="h-8 w-8 text-[#31BA58]" />
              <h3 className="mt-5 text-xl font-extrabold text-[#041B5F]">
                {x.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">{x.copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#041B5F] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold">
              See the vehicles we bring to Nepal.
            </h2>
            <p className="mt-2 text-blue-100">
              Compare buses, trucks and small commercial vehicles.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-[#31BA58] px-6 py-3.5 font-bold"
          >
            Explore vehicles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
