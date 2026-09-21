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
    <section className="w-full border-y border-secondaryNeon/15 bg-secondaryBg py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-widest text-mutedText">
              DISPATCH CAPABILITIES
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-bodyText sm:text-4xl">
              What We Do
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-mutedText">
            ALL UNITS FULLY EQUIPPED • COMPLIANT PAS 43 STANDARDS
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item) => (
            <a
              key={item.number}
              href={SITE_PHONE_HREF}
              className="group flex flex-col gap-4 rounded-xl border border-secondaryNeon/20 bg-panel p-6 transition-all hover:border-primaryNeon"
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-[28px] text-primaryNeon">
                  {item.icon}
                </span>
                <span className="font-mono text-xs font-bold text-mutedText">{item.number}</span>
              </div>
              <span className="font-display text-lg font-semibold text-bodyText transition-colors group-hover:text-primaryNeon">
                {item.title}
              </span>
              <p className="text-sm text-mutedText">{item.description}</p>
              <span className="mt-auto flex items-center gap-1.5 border-t border-white/10 pt-3 font-mono text-[11px] uppercase tracking-wider text-mutedText transition-all group-hover:text-primaryNeon">
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
