import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function ServicesCta() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-t from-blue-800/10 via-slate-700/10 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto max-w-4xl rounded-xl border border-slate-700/15 bg-white p-8 text-center sm:p-12 md:p-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-blue-800/30 bg-slate-100 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-slate-700" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-slate-700">
            24 HOUR IMMEDIATE DISPATCH
          </span>
        </div>
        <h2 className="mb-4 font-display text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Not Sure Which Service You Need?
        </h2>
        <p className="mx-auto mb-8 max-w-xl font-sans text-base text-slate-500 sm:text-lg">
          Call SafeRide and tell us what has happened. Our experienced controller will diagnose
          the right truck type and send immediate help.
        </p>

        <div className="my-6">
          <a
            className=" inline-block font-sans text-3xl font-black tracking-tight text-blue-800 transition-colors hover:text-slate-700 sm:text-4xl md:text-5xl"
            href={SITE_PHONE_HREF}
          >
            {SITE_PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex w-full items-center justify-center gap-3 rounded bg-amber-600 px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-bg shadow-sm transition-all hover:bg-amber-700 hover:-translate-y-0.5 sm:w-auto"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-xl">phone</span>
            <span>CALL SAFERIDE</span>
          </a>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-slate-700/20 bg-slate-100 px-6 py-4 font-display text-sm font-semibold text-slate-900 transition-all hover:border-slate-700 sm:w-auto"
            href="https://wa.me/447466354550"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>WhatsApp Location</span>
          </a>
        </div>
        <p className="mt-6 font-sans text-xs text-slate-500">
          Average dispatch time: Rapid local attendance in your area.
        </p>
      </div>
    </section>
  );
}
