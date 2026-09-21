import Image from "next/image";
import serviceCarRecovery from "@/assets/images/service-car-recovery.webp";
import aboutHydraulicRigging from "@/assets/images/about-hydraulic-rigging.webp";
import galleryWinchHardware from "@/assets/images/gallery-winch-hardware.webp";

const FLEET = [
  {
    badge: "Heavy Spec Unit",
    name: "Tilt-and-Slide Flatbed Carrier",
    spec: "7.5T GVM",
    description:
      "Custom fabricated low-angle aluminium sliding bed, hydraulic second-car spec lift, and remote winch for high-clearance prestige, EV, and commercial recoveries.",
    specialization: "Luxury, Prestige, EVs & LCVs",
    detail: "Dual-Cab (Seats 5 + Driver)",
    image: serviceCarRecovery,
    alt: "SafeRide tilt-and-slide flatbed recovery carrier",
  },
  {
    badge: "Long-Distance Transport",
    name: "Multi-Carrier Demountable",
    spec: "18T Multi-Carrier",
    description:
      "Dual-tier multi-car platform designed for motorway clearance, insurance salvage transport, and nationwide vehicle repatriations across West Yorkshire.",
    specialization: "Motorway Incident Clearance",
    detail: "Up to 8,500 kg Payload",
    image: aboutHydraulicRigging,
    alt: "Heavy-duty steel recovery hook locked onto a flatbed deck",
  },
  {
    badge: "Rapid Roadside Unit",
    name: "Mobile Diagnostics Van",
    spec: "Mobile Workshop",
    description:
      "Configured for on-the-spot breakdowns. Houses 12V/24V jump units, fuel drain evacuation pumps, onboard air compression, and OEM-level fault analysis computers.",
    specialization: "Jump-starts, Misfuels & Diagnostics",
    detail: "71% Repaired Without Towing",
    image: galleryWinchHardware,
    alt: "Close-up of heavy-duty recovery winch hardware",
  },
] as const;

export default function FleetHardware() {
  return (
    <section className="w-full border-y border-slate-700/15 bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
              Technical Capabilities
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-slate-900 sm:text-4xl">
              Engineered Recovery Fleet &amp; Hardware
            </h2>
            <p className="mt-2 max-w-2xl text-base text-slate-500">
              Every transporter, tow arm, and diagnostic scanner is company-owned, rigorously
              maintained, and operated by full-time certified recovery technicians.
            </p>
          </div>
          <div className="flex items-center gap-6 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold leading-none text-blue-800">8</span>
              <span className="mt-1 font-sans text-[10px] uppercase text-slate-500">Live Trucks</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold leading-none text-blue-800">12,000lbs</span>
              <span className="mt-1 font-sans text-[10px] uppercase text-slate-500">Hydraulic Pull</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold leading-none text-blue-800">100%</span>
              <span className="mt-1 font-sans text-[10px] uppercase text-slate-500">OBD-II Coverage</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {FLEET.map((unit) => (
            <div key={unit.name} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative h-56 bg-slate-100">
                <Image alt={unit.alt} src={unit.image} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-slate-50/90 px-3 py-1 font-sans text-[10px] font-bold uppercase text-blue-800 backdrop-blur">
                  {unit.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-slate-900">{unit.name}</h3>
                    <span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 font-sans text-[10px] text-blue-800">
                      {unit.spec}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">{unit.description}</p>
                </div>
                <div className="space-y-2 rounded-lg bg-slate-100 p-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Specialization:</span>
                    <span className="font-bold text-slate-900">{unit.specialization}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Detail:</span>
                    <span className="font-bold text-slate-900">{unit.detail}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
