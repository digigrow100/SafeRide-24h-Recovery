import Image from "next/image";
import heroRollbackTruck from "@/assets/images/hero-rollback-truck.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 py-12 md:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-8 z-0 hidden select-none overflow-hidden text-center sm:block">
        <h1 className="font-display text-[16vw] font-black uppercase leading-[0.82] tracking-tighter text-slate-200/60">
          24H
        </h1>
      </div>

      <div className="relative z-10 mt-6 w-full max-w-7xl md:mt-12">
        {/* Mobile-only: call button sits above the image */}
        <div className="mb-6 lg:hidden">
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-amber-700"
            href={SITE_PHONE_HREF}
          >
            <span>CALL NOW →</span>
            <span className="text-sm">{SITE_PHONE_DISPLAY}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="group relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                alt="SafeRide hydraulic rollback recovery truck responding to a night breakdown on the M62 near Bradford"
                src={heroRollbackTruck}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-[400px] w-full scale-100 object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded border border-blue-800/30 bg-slate-50/85 px-3 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-800" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-slate-900">
                  M62 / BRADFORD RAPID VERGE EXTRACTION
                </span>
              </div>
              <div className="absolute right-5 top-5 hidden items-center gap-1.5 rounded-full border border-blue-800/40 bg-slate-50/85 px-3 py-1 backdrop-blur-md sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-blue-800">
                  Ready
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-7 pl-0 lg:col-span-5 lg:pl-4">
            {/* Laptop/desktop only: badge in text column, beside the image */}
            <div className="hidden items-center gap-2 rounded border border-slate-700/40 bg-slate-700/10 px-3 py-1 lg:inline-flex">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-blue-800">
                SAFERIDE // BRADFORD // EDITORIAL DISPATCH
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl">
                Built Around <span className="text-blue-800">Getting You Home.</span>
              </h2>
              <p className="font-sans text-base leading-relaxed text-slate-500">
                Engineered vehicle recovery, zero-damage hydraulic flatbed transport, and specialist
                roadside solutions throughout Bradford and West Yorkshire. Precision handled. Always
                operational.
              </p>
            </div>

            <div className="hidden rounded-xl border border-blue-800/30 bg-slate-100/80 p-6 backdrop-blur-md lg:block">
              <div className="mb-3 flex items-center justify-between border-b border-black/10 pb-3">
                <span className="font-sans text-xs uppercase tracking-wider text-slate-500">DIRECT HOTLINE</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-ping rounded-full bg-emerald-600" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                    STATUS: DISPATCH CONTROLLERS ACTIVE
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-amber-700"
                  href={SITE_PHONE_HREF}
                >
                  <span>CALL NOW →</span>
                  <span className="text-sm">{SITE_PHONE_DISPLAY}</span>
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-3.5 font-sans text-xs uppercase tracking-wider text-slate-900 transition-colors hover:border-blue-800"
                  href="/services"
                >
                  EXPLORE
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="border-l border-blue-800/30 pl-3">
                <p className="font-sans text-[10px] uppercase text-slate-500">Flatbed Payload</p>
                <p className="font-display text-sm font-bold text-slate-900">3.5t</p>
              </div>
              <div className="border-l border-slate-700/40 pl-3">
                <p className="font-sans text-[10px] uppercase text-slate-500">Low Approach Deck</p>
                <p className="font-display text-sm font-bold text-slate-900">0&deg; Rake</p>
              </div>
              <div className="border-l border-emerald-600/40 pl-3">
                <p className="font-sans text-[10px] uppercase text-slate-500">Rim-Free Tie-Down</p>
                <p className="font-display text-sm font-bold text-slate-900">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
