import Image from "next/image";
import servicesHeroFlatbed from "@/assets/images/services-hero-flatbed.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-700/15 px-4 py-12 sm:px-6 md:py-20">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-800/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-slate-700/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col items-start lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-blue-800/30 bg-white px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-blue-800 shadow-sm" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-blue-800">
              OUR SERVICES
            </span>
          </div>
          <h1 className="mb-6 font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[52px]">
            Vehicle Recovery &amp;{" "}
            <span className="text-blue-800">
              Roadside Assistance
            </span>
          </h1>
          <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-slate-500 sm:text-lg">
            SafeRide 24h Recovery provides vehicle recovery, breakdown assistance, vehicle
            transportation and roadside help across your local area and adjacent corridors.
          </p>
          <a
            className="inline-flex items-center gap-3 rounded bg-amber-600 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-bg shadow-sm transition-all hover:bg-amber-700 hover:-translate-y-0.5"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-lg">emergency</span>
            <span>CALL FOR HELP ({SITE_PHONE_DISPLAY})</span>
          </a>
        </div>

        <div className="relative lg:col-span-5">
          <div className="group relative overflow-hidden rounded-lg border border-slate-700/20 bg-white">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <Image
              alt="SafeRide 24h Recovery flatbed truck stationed on a British highway at twilight"
              src={servicesHeroFlatbed}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-80 w-full transform object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 sm:h-96"
            />
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded border border-slate-700/20 bg-slate-50/90 px-3 py-1.5">
              <span className="material-symbols-outlined text-sm text-slate-700">fmd_good</span>
              <span className="font-sans text-xs text-slate-900">Local Recovery Base</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
