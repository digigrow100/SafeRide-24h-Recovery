import Image from "next/image";
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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UgAcwBjl9Sy7eQvMRaqmdThCOGD6yxoeSGXt8ygCK7GtYk9hqgv9lI06tvuEbDCh2xiuTwyC1dmrWN10cxMmX9G0lLN2gfKwxrWH1X6nPkRpv4cd1XcXoUAKMEcJ6wWGgGPBQ0E45SKZpCXZ-6LYtZQa9U10jBcv--moeYed78CyXnUwQU5bCxAVtGmeboqub0uJzhAFkWip6TVJjQrXO4mSaJ9zwN3hevn-_oRatakia3l3AQQp-cKzU",
    alt: "24/7 car recovery hydraulic tilt-slide flatbed truck",
  },
  {
    accent: "secondary",
    tag: "DEPLOYMENT 02",
    title: "Breakdown Recovery",
    description:
      "On-scene mechanical triage under torchlight. Alternator faults, fuel system airlocks, and critical drivetrain failures rescued.",
    spec: "DIAGNOSTIC & HAUL",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UtZT8j61zwj1JyUQgwgKj7zzeIFLSb3Gxrti2tCEv6lfwnHOzkIb17tFeJ6-fY5NDGBDJz9DLmQn12mVJ6JgsUh8m5T6KYwT_AZvvdA44vMX0rQupLaL_FihP6om66h-vrLyve-m6qPQOsTOCRp0CmbOIbsBxreeLiNjfsNWEGVRKOIi9RzE7B_ExSJRMmePeAZbTCfQfsxzekmt7c-TosZqVnr9OwVPkhWlbdgTMkXwbNgb1JUEAKqQ",
    alt: "Breakdown recovery technician diagnosing a vehicle at night",
  },
  {
    accent: "primary",
    tag: "DEPLOYMENT 03",
    title: "Vehicle Transport",
    description:
      "Nationwide scheduled transfers, auction deliveries, dealership swaps, and classic car logistics with high-spec security rigging.",
    spec: "NATIONWIDE & REGIONAL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTNg_u6lmHUceqpIPKZiXdHDwttrSv1VnJGQcu_bFV8Vo4I_mL2TiW2TYgRvTAZZHuW2iUezu84TrvTF00SSM2UeGhsXK4DBhEMrr9sVeDUutY_6WCfgtUTl4im88knLKH27DI4CV4Khv3lKZA0lfue9X86eQKj8vS9SfSCu0Ts8wWtDz4VhmEpeCdmNlDA1uTMT6ZM_YVvEhk0o56u18qBS_7B-0xnGuX3AfM427_AJLuU1Wcwuzd",
    alt: "Vehicle transportation carrier loaded with an executive car",
  },
  {
    accent: "cyan",
    tag: "DEPLOYMENT 04",
    title: "Roadside Assistance",
    description:
      "Direct emergency assistance on motorway hard shoulders: puncture wheel swaps, heavy battery jump starts, misfuel draining, and lockout resolution.",
    spec: "HARD SHOULDER SAFE",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WwHOrcG7sJEjCQcCO_5E6rp8RO9HWt2dbkbvrydPXdTzWL1i4HyX8TFx8xSpEUwg56zyAjVX2MtwjkYoJuXUbSssKxjWMm3c_jjTYQ_yYtjePMR6EW84i_tEFPXvOzW5y2RWQPkYN6XpeWjIUqfnMwuUirGDboMbxyl9RumQPtesudLiluwIECMSphTKjxwpOUUxYW_BgnuGA1xXCBzn7vTHPAel3NCO0zwzIG_7z97nmjWhkOeV2t2g",
    alt: "Roadside assistance technician on the hard shoulder at night",
  },
] as const;

export default function ServiceSpectrum() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8" id="services">
      <div className="mb-12 space-y-3">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const accent = ACCENTS[service.accent];
          return (
            <div
              key={service.title}
              className={`group relative flex h-[520px] flex-col justify-end overflow-hidden rounded-2xl border border-subtleBorder bg-secondaryBg p-6 transition-all duration-500 ${accent.hoverBorder} ${accent.hoverShadow}`}
            >
              <Image
                alt={service.alt}
                src={service.image}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-transparent" />
              <div className="relative z-10 space-y-3">
                <span
                  className={`inline-block rounded border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${accent.badge}`}
                >
                  {service.tag}
                </span>
                <h3
                  className={`font-display text-2xl font-bold uppercase text-bodyText transition-colors ${accent.hoverTitle}`}
                >
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-mutedText">{service.description}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-2">
                  <span className={`font-mono text-[11px] ${accent.tag}`}>{service.spec}</span>
                  <a
                    href={SITE_PHONE_HREF}
                    aria-label={`Call SafeRide about ${service.title}`}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${accent.button}`}
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
