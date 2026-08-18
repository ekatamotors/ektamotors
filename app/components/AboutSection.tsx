import React from "react";

export const AboutSection = () => {
  const principles = [
    {
      n: "01",
      title: "Sustainable by design",
      copy: "Reduce transport emissions while keeping commercial viability and lifecycle impact in view.",
    },
    {
      n: "02",
      title: "Commercially practical",
      copy: "Make fleet electrification understandable through route fit, total cost of ownership and clear operating assumptions.",
    },
    {
      n: "03",
      title: "Locally dependable",
      copy: "Build trust through service readiness, parts planning, training, charging guidance and responsive support.",
    },
    {
      n: "04",
      title: "Always moving forward",
      copy: "Use technology, customer feedback and operating data to improve the mobility experience over time.",
    },
  ];

  const character = [
    {
      title: "Progressive",
      copy: "Forward-looking and technology-aware, without sounding futuristic for its own sake.",
    },
    {
      title: "Dependable",
      copy: "Commercial buyers should feel Ekata remains accountable beyond the handover of a vehicle.",
    },
    {
      title: "Practical",
      copy: "We talk about routes, payload, charging, uptime and economics — not just aspiration.",
    },
    {
      title: "Clear",
      copy: "Simple explanations, transparent assumptions and manufacturer-approved specifications.",
    },
    {
      title: "Local",
      copy: "Built around Nepal's roads, operating realities and customer relationships.",
    },
    {
      title: "Collaborative",
      copy: "Fleet transition works through customers, OEMs, finance, energy and public-sector partners.",
    },
  ];

  return (
    <div className="bg-white text-[#17243A] font-sans selection:bg-[#0382DA] selection:text-white">
      {/* Brand at a Glance Hero */}
      <section className="bg-[#F5F8FB] py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0382DA] bg-[#0382DA]/10 px-3.5 py-1 rounded-full border border-[#0382DA]/20">
            Brand at a glance
          </div>
          <h1 className="mt-4 max-w-3xl text-[34px] font-extrabold leading-[1.12] tracking-tight text-[#041B5F] sm:text-[46px]">
            One identity for a bigger mobility ambition.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-700">
            Ekata is a Nepal-based sustainable mobility company bringing global
            electric commercial vehicle technology to local operators, with
            trusted market development, distribution and support.
          </p>
        </div>
      </section>

      {/* Purpose / Vision / Mission */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="border-l-4 border-[#0382DA] pl-6 py-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0382DA]">
                Purpose
              </p>
              <p className="mt-3 text-[18px] font-bold leading-snug text-[#041B5F]">
                To accelerate Nepal&apos;s transition to cleaner, smarter and
                commercially sustainable transport.
              </p>
            </div>
            <div className="border-l-4 border-[#0499AA] pl-6 py-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0499AA]">
                Vision
              </p>
              <p className="mt-3 text-[18px] font-bold leading-snug text-[#041B5F]">
                To become Nepal&apos;s most trusted partner for electric
                commercial mobility and the ecosystem that supports it.
              </p>
            </div>
            <div className="border-l-4 border-[#31BA58] pl-6 py-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#31BA58]">
                Mission
              </p>
              <p className="mt-3 text-[18px] font-bold leading-snug text-[#041B5F]">
                Bring capable EV technology to Nepal, help customers select the
                right solution for their routes, and support the ownership
                lifecycle through credible local execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Operating Principles */}
      <section className="bg-[#041B5F] py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#31BA58]">
              Brand foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Four operating principles.
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              The same reason for being and the same standards of behaviour,
              across every team — sales, service, partnerships and support.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4 border border-white/10">
            {principles.map((p) => (
              <div
                key={p.n}
                className="bg-[#041B5F] p-7 hover:bg-[#06247A] transition-colors"
              >
                <span className="text-xs font-bold tracking-wider text-[#31BA58] font-mono">
                  {p.n}
                </span>
                <h3 className="mt-3 text-[17px] font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Character */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0382DA]">
              Brand character
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#041B5F]">
              How Ekata shows up, every time.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {character.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200/90 bg-[#F5F8FB] p-6 hover:border-slate-300 transition-all"
              >
                <h3 className="text-[16px] font-bold text-[#041B5F]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {c.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
