import Image from "next/image";
import heroRollbackTruck from "@/assets/images/hero-rollback-truck.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 py-12 md:px-8">
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primaryNeon/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[420px] w-[420px] rounded-full bg-secondaryNeon/20 blur-[130px]" />

      <div className="pointer-events-none absolute inset-x-0 top-12 z-0 select-none overflow-hidden text-center">
        <h1 className="bg-gradient-to-b from-primaryNeon via-secondaryNeon to-transparent bg-clip-text font-display text-[13vw] font-black uppercase leading-[0.82] tracking-tighter text-transparent opacity-20">
          24H ROAD RESCUE
        </h1>
      </div>

      <div className="relative z-10 mt-6 grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:mt-12 lg:grid-cols-12">
        <div className="group relative lg:col-span-7">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primaryNeon/30 to-secondaryNeon/30 opacity-75 blur-xl transition duration-700 group-hover:opacity-100" />
          <div className="relative overflow-hidden rounded-2xl border border-primaryNeon/40 bg-secondaryBg shadow-2xl">
            <Image
              alt="SafeRide hydraulic rollback recovery truck responding to a night breakdown on the M62 near Bradford"
              src={heroRollbackTruck}
              priority
              className="h-[400px] w-full scale-100 object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded border border-primaryNeon/30 bg-bg/85 px-3 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primaryNeon" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-bodyText">
                M62 / BRADFORD RAPID VERGE EXTRACTION
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accentCyan">
                  // LIVE FLEET ASSET
                </p>
                <p className="font-display text-lg font-bold text-bodyText">HYDRAULIC ROLLBACK UNIT 04</p>
              </div>
              <div className="hidden text-right sm:block">
                <span className="font-mono text-[11px] text-mutedText">RESPONSE: DIRECT CELL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-7 pl-0 lg:col-span-5 lg:pl-4">
          <div className="inline-flex items-center gap-2 rounded border border-secondaryNeon/40 bg-secondaryNeon/10 px-3 py-1">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primaryNeon">
              SAFERIDE // BRADFORD // EDITORIAL DISPATCH
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl">
              Stranded in <br />
              <span className="neon-glow-magenta bg-gradient-to-r from-primaryNeon to-secondaryNeon bg-clip-text text-transparent">
                Darkness?
              </span>{" "}
              <br />
              We Deploy Instantly.
            </h2>
            <p className="font-sans text-base leading-relaxed text-mutedText">
              Vehicle Recovery &amp; Roadside Assistance. Built for unexpected breakdowns across
              West Yorkshire, the M62 corridor, and Bradford Metro. Direct dispatch with zero
              call-center delays.
            </p>
          </div>

          <div className="space-y-4 rounded-xl border border-primaryNeon/30 bg-secondaryBg/80 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-mutedText">
                DIRECT HOTLINE
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-ping rounded-full bg-accentCyan" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accentCyan">
                  STATUS: DISPATCH CONTROLLERS ACTIVE
                </span>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primaryNeon to-secondaryNeon px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-neon-magenta transition-all hover:brightness-110"
                href={SITE_PHONE_HREF}
              >
                <span>CALL NOW →</span>
                <span className="text-sm">{SITE_PHONE_DISPLAY}</span>
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-subtleBorder px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-bodyText transition-colors hover:border-primaryNeon"
                href="/services"
              >
                EXPLORE
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-1">
            <div className="border-l border-primaryNeon/30 pl-3">
              <p className="font-mono text-[10px] uppercase text-mutedText">COVERAGE</p>
              <p className="font-display text-sm font-bold text-bodyText">BD1–BD22 &amp; M62</p>
            </div>
            <div className="border-l border-secondaryNeon/40 pl-3">
              <p className="font-mono text-[10px] uppercase text-mutedText">TECH APPARATUS</p>
              <p className="font-display text-sm font-bold text-bodyText">Low-Angle Tilt</p>
            </div>
            <div className="border-l border-accentCyan/40 pl-3">
              <p className="font-mono text-[10px] uppercase text-mutedText">ARRIVAL</p>
              <p className="font-display text-sm font-bold text-bodyText">Rapid Triage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
