import { SITE_PHONE_HREF } from "@/lib/site";

const CAPABILITIES = [
  {
    number: "01",
    title: "24/7 Car Recovery",
    description:
      "Emergency extraction, mechanical immobilization, and secure vehicle transit to any garage or UK residence.",
  },
  {
    number: "02",
    title: "Breakdown Recovery",
    description:
      "Motorway shoulder collection, high-risk live carriageway removal, and rapid roadside incident stabilization.",
  },
  {
    number: "03",
    title: "Vehicle Transportation",
    description:
      "Scheduled dealer movements, auction pickups, performance vehicle transfer, and intercity delivery runs.",
  },
  {
    number: "04",
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

        <div className="flex flex-col gap-3">
          {CAPABILITIES.map((item) => (
            <a
              key={item.number}
              href={SITE_PHONE_HREF}
              className="group flex flex-col justify-between gap-3 rounded border border-secondaryNeon/20 bg-panel p-6 transition-all md:flex-row md:items-center"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-primaryNeon">{item.number}</span>
                <span className="font-display text-xl font-semibold text-bodyText transition-colors group-hover:text-primaryNeon">
                  {item.title}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden max-w-md text-sm text-mutedText sm:block">
                  {item.description}
                </span>
                <span className="material-symbols-outlined text-[24px] text-mutedText transition-all group-hover:translate-x-1 group-hover:text-primaryNeon">
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
