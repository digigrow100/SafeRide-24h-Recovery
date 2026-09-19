import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function AboutCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-primaryNeon/35 bg-panel p-8 text-center shadow-[0_0_40px_rgba(255,43,214,0.15)] sm:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primaryNeon/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondaryNeon/10 blur-3xl" />

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accentCyan" />
          <span className="font-mono text-xs uppercase tracking-widest text-accentCyan">
            ACTIVE DISPATCH LINE • ZERO WAIT
          </span>
        </div>

        <div className="flex max-w-2xl flex-col gap-2">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-bodyText sm:text-5xl">
            Need Vehicle Assistance?
          </h2>
          <p className="font-sans text-lg text-mutedText">
            SafeRide is available 24/7 across Bradford. Tell us your location, and our nearest
            recovery unit will be mobilized immediately.
          </p>
        </div>

        <a href={SITE_PHONE_HREF} className="group flex flex-col items-center gap-1">
          <span className="font-mono text-xs uppercase tracking-wider text-mutedText">DIRECT HOTLINE</span>
          <span className="neon-glow-magenta font-display text-3xl font-bold tracking-tight text-primaryNeon transition-colors sm:text-5xl">
            {SITE_PHONE_DISPLAY}
          </span>
        </a>

        <a
          className="inline-flex items-center justify-center gap-2 rounded bg-primaryNeon px-10 py-4 font-mono text-sm font-bold uppercase tracking-widest text-white shadow-neon-magenta transition-all hover:brightness-110"
          href={SITE_PHONE_HREF}
        >
          <span className="material-symbols-outlined text-xl">call</span>
          CALL NOW
        </a>
      </div>
    </section>
  );
}
