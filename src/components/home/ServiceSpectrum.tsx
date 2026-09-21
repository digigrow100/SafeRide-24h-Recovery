import Image from "next/image";
import serviceCarRecovery from "@/assets/images/service-car-recovery.webp";
import serviceBreakdownRecovery from "@/assets/images/service-breakdown-recovery.webp";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import serviceRoadsideAssistance from "@/assets/images/service-roadside-assistance.webp";
import { SITE_PHONE_HREF } from "@/lib/site";

const ACCENTS = {
  primary: {
    hoverBorder: "hover:border-blue-800",
    hoverShadow: "hover:shadow-sm",
    badge: "bg-blue-800/20 border-blue-800/40 text-blue-800",
    hoverTitle: "group-hover:text-blue-800",
    tag: "text-emerald-600",
    button: "bg-blue-800/20 text-blue-800 group-hover:bg-blue-800 group-hover:text-bg",
  },
  secondary: {
    hoverBorder: "hover:border-slate-700",
    hoverShadow: "hover:shadow-sm",
    badge: "bg-slate-700/20 border-slate-700/40 text-slate-700",
    hoverTitle: "group-hover:text-slate-700",
    tag: "text-slate-700",
    button: "bg-slate-700/20 text-slate-700 group-hover:bg-slate-700 group-hover:text-bg",
  },
  cyan: {
    hoverBorder: "hover:border-emerald-600",
    hoverShadow: "hover:shadow-sm",
    badge: "bg-emerald-600/20 border-emerald-600/40 text-emerald-600",
    hoverTitle: "group-hover:text-emerald-600",
    tag: "text-emerald-600",
    button: "bg-emerald-600/20 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-bg",
  },
} as const;

const SERVICES = [
  {
    accent: "primary",
    tag: "DEPLOYMENT 01",
    title: "Car Recovery & Accident Extraction",
    description:
      "Full hydraulic tilt-slide flatbed recovery. Perfect for low ground-clearance sports vehicles, prestige saloons, EVs, AWDs and accident recovery.",
    spec: "TILT-SLIDE // 6.5T WINCH",
    stats: [
      { label: "Ramp Angle", value: "Ultra-Low 5.8°" },
      { label: "Compatibility", value: "EV / AWD / Supercars" },
    ],
    image: serviceCarRecovery,
    alt: "24/7 car recovery hydraulic tilt-slide flatbed truck",
  },
  {
    accent: "secondary",
    tag: "DEPLOYMENT 02",
    title: "Advanced Breakdown Diagnostics",
    description:
      "On-scene mechanical triage under torchlight. Alternator faults, fuel system airlocks, ECU interrogation and critical drivetrain failures rescued.",
    spec: "DIAGNOSTIC & HAUL",
    stats: [
      { label: "ECU Interrogation", value: "CAN-Bus / DoIP" },
      { label: "First-Fix Rate", value: "78.4% Roadside" },
    ],
    image: serviceBreakdownRecovery,
    alt: "Breakdown recovery technician diagnosing a vehicle at night",
  },
  {
    accent: "primary",
    tag: "DEPLOYMENT 03",
    title: "Prestige Intercity Haulage",
    description:
      "Nationwide scheduled transfers, auction deliveries, dealership swaps, and classic car logistics with high-spec security rigging.",
    spec: "NATIONWIDE & REGIONAL",
    stats: [
      { label: "Transit Insurance", value: "£100,000 Cover" },
      { label: "Tracking", value: "Live GPS Telemetry" },
    ],
    image: serviceVehicleTransport,
    alt: "Vehicle transportation carrier loaded with an executive car",
  },
  {
    accent: "cyan",
    tag: "DEPLOYMENT 04",
    title: "Immediate Roadside Interventions",
    description:
      "Direct emergency assistance on motorway hard shoulders: puncture wheel swaps, heavy battery jump starts, misfuel draining, and lockout resolution.",
    spec: "HARD SHOULDER SAFE",
    stats: [
      { label: "Battery Booster", value: "High-Amp Current" },
      { label: "Tyre Change", value: "Alloy-Safe Sockets" },
    ],
    image: serviceRoadsideAssistance,
    alt: "Roadside assistance technician on the hard shoulder at night",
  },
] as const;

export default function ServiceSpectrum() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8" id="services">
      <div className="mb-16 space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            // 01 SERVICE SPECTRUM
          </span>
          <div className="h-[1px] w-20 bg-blue-800/40" />
        </div>
        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl">
          ENGINEERED CAPABILITY
        </h2>
        <p className="max-w-xl text-sm text-slate-500">
          Four dedicated recovery channels equipped with industrial hydraulic tilt trays, gentle
          alloy cradles, and night diagnostics.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {SERVICES.map((service, index) => {
          const accent = ACCENTS[service.accent];
          const imageFirst = index % 2 === 0;
          return (
            <div
              key={service.title}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`relative lg:col-span-7 ${imageFirst ? "order-1" : "order-1 lg:order-2"}`}
              >
                <div
                  className={`group relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl transition-all duration-500 sm:h-96 ${accent.hoverBorder} ${accent.hoverShadow}`}
                >
                  <Image
                    alt={service.alt}
                    src={service.image}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60/40 to-transparent" />
                </div>
              </div>

              <div
                className={`flex flex-col gap-4 lg:col-span-5 ${imageFirst ? "order-2" : "order-2 lg:order-1"}`}
              >
                <span
                  className={`inline-block w-fit rounded border px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-widest ${accent.badge}`}
                >
                  {service.tag}
                </span>
                <h3 className="font-display text-3xl font-bold uppercase text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 rounded-lg border border-slate-200 bg-slate-100/60 p-3">
                  {service.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-sans text-[9px] uppercase tracking-wider text-slate-500">{stat.label}</p>
                      <p className="font-display text-sm font-bold text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-black/10 pt-4">
                  <span className={`font-sans text-[11px] ${accent.tag}`}>{service.spec}</span>
                  <a
                    href={SITE_PHONE_HREF}
                    aria-label={`Call SafeRide about ${service.title}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${accent.button}`}
                  >
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
