import {
  BatteryCharging,
  GraduationCap,
  PackageSearch,
  Phone,
  Wrench,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function SupportPage() {
  const items = [
    {
      icon: Wrench,
      title: "Vehicle service",
      copy: "Scheduled maintenance and technical support to keep your vehicle operating reliably.",
    },
    {
      icon: PackageSearch,
      title: "Parts support",
      copy: "Help identifying and arranging the right parts for your EKA vehicle.",
    },
    {
      icon: BatteryCharging,
      title: "Charging guidance",
      copy: "Practical charging advice based on your vehicle, depot, route and daily use.",
    },
    {
      icon: GraduationCap,
      title: "Driver and technician training",
      copy: "Clear guidance for safe vehicle operation, charging and basic care.",
    },
  ];
  return (
    <>
      <section className="bg-[#F5F8FB]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0382DA]">
            After-sales support
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-[#041B5F] sm:text-5xl">
            Support that continues after delivery.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-600">
            Get straightforward help with service, parts, charging and vehicle
            operation from our Nepal team.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <x.icon className="h-7 w-7 text-[#0382DA]" />
              <h2 className="mt-4 text-xl font-extrabold text-[#041B5F]">
                {x.title}
              </h2>
              <p className="mt-2 leading-7 text-slate-600">{x.copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#041B5F] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold">Need support now?</h2>
            <p className="mt-2 text-blue-100">
              Call our team and tell us your vehicle model and concern.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#041B5F]"
          >
            <Phone className="h-5 w-5" /> {COMPANY_INFO.phonePrimary}
          </a>
        </div>
      </section>
    </>
  );
}
