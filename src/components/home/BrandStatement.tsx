import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function BrandStatement() {
  return (
    <section className="relative w-full overflow-hidden border-y border-blue-800/20 bg-slate-100 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-3xl space-y-6 px-4 text-center sm:px-6">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-blue-800">
          Local Vehicle Recovery
        </span>
        <h2 className="font-display text-3xl font-black uppercase leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
          Here When You Need <span className="text-blue-800">Roadside Help</span>
        </h2>
        <div className="mx-auto max-w-2xl space-y-4 font-sans text-sm text-slate-600 md:text-base">
          <p>
            A vehicle problem can happen at any time. You may break down outside your home, on a
            busy road or while travelling through West Yorkshire. SafeRide 24H Recovery is ready
            to help day or night.
          </p>
          <p>
            We provide professional vehicle recovery services for cars and light vehicles.
            Whether your vehicle will not start, cannot be driven or needs moving to another
            location, you can call our team for help.
          </p>
          <p>
            Our service covers Bradford and nearby areas, including routes towards Leeds,
            Halifax, Keighley and other parts of West Yorkshire.
          </p>
        </div>
        <div className="pt-2">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-amber-700"
            href={SITE_PHONE_HREF}
          >
            CALL {SITE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
