import Image from "next/image";
import heroRollbackTruck from "@/assets/images/hero-rollback-truck.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

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
      <div className="absolute inset-0 z-0 bg-slate-900/70" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/60" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center space-y-6 text-center">
        <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Built Around <span className="text-amber-500">Getting You Home.</span>
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-200 sm:text-lg">
          Engineered vehicle recovery, zero-damage hydraulic flatbed transport, and specialist
          roadside solutions throughout Bradford and West Yorkshire. Precision handled. Always
          operational.
        </p>
        <a
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-amber-700"
          href={SITE_PHONE_HREF}
        >
          <span>CALL NOW →</span>
          <span>{SITE_PHONE_DISPLAY}</span>
        </a>
      </div>
    </section>
  );
}
