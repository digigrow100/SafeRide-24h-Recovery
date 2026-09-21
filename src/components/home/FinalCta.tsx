import { SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-blue-800/30 bg-slate-50 py-28" id="dispatch">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-800/15 via-slate-700/15 to-transparent blur-[160px]" />
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-800/40 bg-slate-100 px-4 py-1.5 shadow-sm">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-800" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-blue-800">
            STRANDED RIGHT NOW?
          </span>
        </div>
        <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-slate-900 sm:text-7xl md:text-8xl">
          CALL <br />
          <span className="text-blue-800">SAFERIDE</span>
        </h2>
        <p className="mx-auto max-w-lg font-sans text-base text-slate-500 sm:text-lg">
          One direct tap connects you to our senior recovery dispatch controller. Immediate
          deployment across Bradford and all Yorkshire motorways.
        </p>
        <div className="pb-2 pt-4">
          <a
            className="inline-block font-display text-4xl font-black text-amber-600 transition-colors duration-300 hover:text-amber-700 sm:text-6xl md:text-7xl"
            href={SITE_PHONE_HREF}
          >
            {SITE_PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-amber-600 hover:bg-amber-700 px-10 py-5 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-sm transition-all  sm:w-auto"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-xl">electric_bolt</span>
            <span>DIRECT DISPATCH NOW</span>
          </a>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-8 py-5 font-sans text-sm uppercase tracking-wider text-slate-900 transition-colors hover:border-blue-800 sm:w-auto"
            href={SITE_EMAIL_HREF}
          >
            <span className="material-symbols-outlined text-xl">mail</span>
            <span>EMAIL DISPATCH</span>
          </a>
        </div>
        <div className="pt-6 font-sans text-[11px] uppercase tracking-widest text-slate-500">
          BRADFORD HQ // M62 // M606 // LEEDS CORRIDORS // 24-HOUR STANDBY
        </div>
      </div>
    </section>
  );
}
