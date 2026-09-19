import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function ContactFinalCta() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primaryNeon/5 via-transparent to-primaryNeon/5" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <span className="rounded bg-panel px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-secondaryNeon shadow-sm">
          RAPID EXTRACTION HOTLINE
        </span>
        <h2 className="font-display text-4xl font-bold tracking-tight text-bodyText sm:text-5xl">
          Stranded? Call SafeRide.
        </h2>
        <p className="max-w-xl font-sans text-base text-mutedText sm:text-lg">
          Every second counts when stranded roadside. One tap connects you instantly to our
          Bradford night control operator.
        </p>
        <a
          className="neon-glow-magenta my-1 block font-display text-3xl font-bold tracking-tighter text-primaryNeon shadow-sm transition-colors hover:text-secondaryNeon sm:text-5xl"
          href={SITE_PHONE_HREF}
        >
          {SITE_PHONE_DISPLAY}
        </a>
        <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-primaryNeon px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:brightness-110 sm:w-auto"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            CALL {SITE_PHONE_DISPLAY}
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs uppercase tracking-wider text-mutedText">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-secondaryNeon" /> 24/7 Emergency Line
          </span>
          <span>•</span>
          <span>Tilt-Slide Winch Extractor</span>
          <span>•</span>
          <span>Fully Insured Recovery</span>
        </div>
      </div>
    </section>
  );
}
