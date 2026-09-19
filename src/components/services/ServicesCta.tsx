import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function ServicesCta() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-t from-primaryNeon/10 via-secondaryNeon/10 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto max-w-4xl rounded-xl border border-secondaryNeon/15 bg-panel p-8 text-center sm:p-12 md:p-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-primaryNeon/30 bg-secondaryBg px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-secondaryNeon" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-secondaryNeon">
            24 HOUR IMMEDIATE DISPATCH
          </span>
        </div>
        <h2 className="mb-4 font-display text-3xl font-bold uppercase tracking-tight text-bodyText sm:text-4xl md:text-5xl">
          Not Sure Which Service You Need?
        </h2>
        <p className="mx-auto mb-8 max-w-xl font-sans text-base text-mutedText sm:text-lg">
          Call SafeRide and tell us what has happened. Our experienced controller will diagnose
          the right truck type and send immediate help.
        </p>

        <div className="my-6">
          <a
            className="neon-glow-magenta inline-block font-mono text-3xl font-black tracking-tight text-primaryNeon transition-colors hover:text-secondaryNeon sm:text-4xl md:text-5xl"
            href={SITE_PHONE_HREF}
          >
            {SITE_PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex w-full items-center justify-center gap-3 rounded bg-primaryNeon px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-bg shadow-neon-magenta transition-all hover:-translate-y-0.5 sm:w-auto"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-xl">phone</span>
            <span>CALL SAFERIDE</span>
          </a>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-secondaryNeon/20 bg-secondaryBg px-6 py-4 font-display text-sm font-semibold text-bodyText transition-all hover:border-secondaryNeon sm:w-auto"
            href="https://wa.me/447466354550"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>WhatsApp Location</span>
          </a>
        </div>
        <p className="mt-6 font-mono text-xs text-mutedText">
          Average dispatch time: Rapid local attendance within Bradford &amp; West Yorkshire.
        </p>
      </div>
    </section>
  );
}
