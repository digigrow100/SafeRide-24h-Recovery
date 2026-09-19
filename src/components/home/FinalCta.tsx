import { SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-primaryNeon/30 bg-bg py-28" id="dispatch">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primaryNeon/15 via-secondaryNeon/15 to-transparent blur-[160px]" />
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primaryNeon/40 bg-secondaryBg px-4 py-1.5 shadow-neon-magenta">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primaryNeon" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primaryNeon">
            STRANDED RIGHT NOW?
          </span>
        </div>
        <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-bodyText sm:text-7xl md:text-8xl">
          CALL <br />
          <span className="neon-glow-magenta bg-gradient-to-r from-primaryNeon via-white to-secondaryNeon bg-clip-text text-transparent">
            SAFERIDE
          </span>
        </h2>
        <p className="mx-auto max-w-lg font-sans text-base text-mutedText sm:text-lg">
          One direct tap connects you to our senior recovery dispatch controller. Immediate
          deployment across Bradford and all Yorkshire motorways.
        </p>
        <div className="pb-2 pt-4">
          <a
            className="inline-block font-display text-4xl font-black text-primaryNeon transition-colors duration-300 hover:text-white drop-shadow-[0_0_35px_rgba(255,43,214,0.6)] sm:text-6xl md:text-7xl"
            href={SITE_PHONE_HREF}
          >
            {SITE_PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primaryNeon to-secondaryNeon px-10 py-5 font-mono text-sm font-bold uppercase tracking-widest text-white shadow-neon-magenta transition-all hover:brightness-110 sm:w-auto"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-xl">electric_bolt</span>
            <span>DIRECT DISPATCH NOW</span>
          </a>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-subtleBorder px-8 py-5 font-mono text-sm uppercase tracking-wider text-bodyText transition-colors hover:border-primaryNeon sm:w-auto"
            href={SITE_EMAIL_HREF}
          >
            <span className="material-symbols-outlined text-xl">mail</span>
            <span>EMAIL DISPATCH</span>
          </a>
        </div>
        <div className="pt-6 font-mono text-[11px] uppercase tracking-widest text-mutedText">
          BRADFORD HQ // M62 // M606 // LEEDS CORRIDORS // 24-HOUR STANDBY
        </div>
      </div>
    </section>
  );
}
