import Image from "next/image";
import heroRollbackTruck from "@/assets/images/hero-rollback-truck.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const TRUST_POINTS = [
  "24/7 Assistance",
  "Local Bradford Team",
  "Safe Vehicle Handling",
  "Local and Long-Distance Transport",
] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 py-20 md:px-8">
      <Image
        alt="SafeRide hydraulic rollback recovery truck responding to a night breakdown on the M62 near Bradford"
        src={heroRollbackTruck}
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="absolute inset-0 z-0 bg-slate-900/50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900/60 via-slate-900/35 to-slate-900/40" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center space-y-6 text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
          24/7 Vehicle Recovery in Bradford
        </span>
        <h1 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Fast and Reliable <span className="text-amber-500">Car Recovery in Bradford</span>
        </h1>
        <div className="space-y-4 font-sans text-base leading-relaxed text-slate-200 sm:text-lg">
          <p>
            Stranded with a broken-down vehicle? SafeRide 24H Recovery provides dependable car
            recovery, breakdown recovery, roadside assistance and vehicle transportation across
            Bradford and West Yorkshire.
          </p>
          <p>Our team is available 24 hours a day to help get you and your vehicle to a safe location.</p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-amber-700"
            href={SITE_PHONE_HREF}
          >
            <span>CALL FOR RECOVERY</span>
            <span>{SITE_PHONE_DISPLAY}</span>
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white"
            href="/services"
          >
            VIEW OUR SERVICES
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 font-sans text-xs font-semibold uppercase tracking-wider text-slate-200">
          {TRUST_POINTS.map((point) => (
            <span key={point} className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
