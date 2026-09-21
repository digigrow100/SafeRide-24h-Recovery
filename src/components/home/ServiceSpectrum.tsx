import Image from "next/image";
import serviceCarRecovery from "@/assets/images/service-car-recovery.webp";
import serviceBreakdownRecovery from "@/assets/images/service-breakdown-recovery.webp";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import serviceRoadsideAssistance from "@/assets/images/service-roadside-assistance.webp";
import { SITE_PHONE_HREF } from "@/lib/site";

const ACCENTS = {
  primary: {
    hoverBorder: "hover:border-primaryNeon",
    hoverShadow: "hover:shadow-neon-magenta",
    badge: "bg-primaryNeon/20 border-primaryNeon/40 text-primaryNeon",
    hoverTitle: "group-hover:text-primaryNeon",
    tag: "text-accentCyan",
    button: "bg-primaryNeon/20 text-primaryNeon group-hover:bg-primaryNeon group-hover:text-bg",
  },
  secondary: {
    hoverBorder: "hover:border-secondaryNeon",
    hoverShadow: "hover:shadow-neon-violet",
    badge: "bg-secondaryNeon/20 border-secondaryNeon/40 text-secondaryNeon",
    hoverTitle: "group-hover:text-secondaryNeon",
    tag: "text-secondaryNeon",
    button: "bg-secondaryNeon/20 text-secondaryNeon group-hover:bg-secondaryNeon group-hover:text-bg",
  },
  cyan: {
    hoverBorder: "hover:border-accentCyan",
    hoverShadow: "hover:shadow-neon-cyan",
    badge: "bg-accentCyan/20 border-accentCyan/40 text-accentCyan",
    hoverTitle: "group-hover:text-accentCyan",
    tag: "text-accentCyan",
    button: "bg-accentCyan/20 text-accentCyan group-hover:bg-accentCyan group-hover:text-bg",
  },
} as const;

const SERVICES = [
  {
    accent: "primary",
    tag: "DEPLOYMENT 01",
    title: "24/7 Car Recovery",
    description:
      "Full hydraulic tilt-slide flatbed recovery. Perfect for low ground-clearance sports vehicles, prestige saloons, and immobile AWDs.",
    spec: "TILT-SLIDE // 6.5T WINCH",
    image: serviceCarRecovery,
    alt: "24/7 car recovery hydraulic tilt-slide flatbed truck",
  },
  {
    accent: "secondary",
    tag: "DEPLOYMENT 02",
    title: "Breakdown Recovery",
    description:
      "On-scene mechanical triage under torchlight. Alternator faults, fuel system airlocks, and critical drivetrain failures rescued.",
    spec: "DIAGNOSTIC & HAUL",
    image: serviceBreakdownRecovery,
    alt: "Breakdown recovery technician diagnosing a vehicle at night",
  },
  {
    accent: "primary",
    tag: "DEPLOYMENT 03",
    title: "Vehicle Transport",
    description:
      "Nationwide scheduled transfers, auction deliveries, dealership swaps, and classic car logistics with high-spec security rigging.",
    spec: "NATIONWIDE & REGIONAL",
    image: serviceVehicleTransport,
    alt: "Vehicle transportation carrier loaded with an executive car",
  },
  {
    accent: "cyan",
    tag: "DEPLOYMENT 04",
    title: "Roadside Assistance",
    description:
      "Direct emergency assistance on motorway hard shoulders: puncture wheel swaps, heavy battery jump starts, misfuel draining, and lockout resolution.",
    spec: "HARD SHOULDER SAFE",
    image: serviceRoadsideAssistance,
    alt: "Roadside assistance technician on the hard shoulder at night",
  },
] as const;

export default function ServiceSpectrum() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8" id="services">
      <div className="mb-16 space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
            // 01 SERVICE SPECTRUM
          </span>
          <div className="h-[1px] w-20 bg-primaryNeon/40" />
        </div>
        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-bodyText sm:text-5xl">
          ENGINEERED CAPABILITY
        </h2>
        <p className="max-w-xl text-sm text-mutedText">
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
                  className={`group relative h-72 overflow-hidden rounded-2xl border border-subtleBorder bg-secondaryBg shadow-xl transition-all duration-500 sm:h-96 ${accent.hoverBorder} ${accent.hoverShadow}`}
                >
                  <Image
                    alt={service.alt}
                    src={service.image}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                </div>
              </div>

              <div
                className={`flex flex-col gap-4 lg:col-span-5 ${imageFirst ? "order-2" : "order-2 lg:order-1"}`}
              >
                <span
                  className={`inline-block w-fit rounded border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${accent.badge}`}
                >
                  {service.tag}
                </span>
                <h3 className="font-display text-3xl font-bold uppercase text-bodyText">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-mutedText">{service.description}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className={`font-mono text-[11px] ${accent.tag}`}>{service.spec}</span>
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
