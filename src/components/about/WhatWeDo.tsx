import { SITE_PHONE_HREF } from "@/lib/site";

const CAPABILITIES = [
  {
    number: "01",
    icon: "car_crash",
    title: "24/7 Car Recovery",
    description:
      "Emergency extraction, mechanical immobilization, and secure vehicle transit to any garage or UK residence.",
  },
  {
    number: "02",
    icon: "build_circle",
    title: "Breakdown Recovery",
    description:
      "Motorway shoulder collection, high-risk live carriageway removal, and rapid roadside incident stabilization.",
  },
  {
    number: "03",
    icon: "local_shipping",
    title: "Vehicle Transportation",
    description:
      "Scheduled dealer movements, auction pickups, performance vehicle transfer, and intercity delivery runs.",
  },
  {
    number: "04",
    icon: "electric_bolt",
    title: "Roadside Assistance",
    description:
      "12V/24V high-amperage booster jumps, damaged wheel swapovers, lockout bypass, and emergency fuel replenishment.",
  },
] as const;

export default function WhatWeDo() {
  return (
    <section className="w-full border-y border-slate-700/15 bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-500">
              DISPATCH CAPABILITIES
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-slate-900 sm:text-4xl">
              What We Do
            </h2>
          </div>
          <span className="font-sans text-xs uppercase tracking-wider text-slate-500">
            ALL UNITS FULLY EQUIPPED • COMPLIANT PAS 43 STANDARDS
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item) => (
            <a
              key={item.number}
              href={SITE_PHONE_HREF}
              className="group flex flex-col gap-4 rounded-xl border border-slate-700/20 bg-white p-6 transition-all hover:border-blue-800"
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-[28px] text-blue-800">
                  {item.icon}
                </span>
                <span className="font-sans text-xs font-bold text-slate-500">{item.number}</span>
              </div>
              <span className="font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                {item.title}
              </span>
              <p className="text-sm text-slate-500">{item.description}</p>
              <span className="mt-auto flex items-center gap-1.5 border-t border-black/10 pt-3 font-sans text-[11px] uppercase tracking-wider text-slate-500 transition-all group-hover:text-blue-800">
                Call to Deploy
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
