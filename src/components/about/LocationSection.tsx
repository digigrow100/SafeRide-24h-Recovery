import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function LocationSection() {
  return (
    <section className="w-full border-t border-secondaryNeon/15 bg-secondaryBg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-accentCyan">
                STATION COORDINATES
              </span>
              <h2 className="font-display text-3xl font-bold uppercase text-bodyText sm:text-4xl">
                Based in Bradford
              </h2>
            </div>
            <p className="font-sans text-base text-mutedText">
              Our strategic depot allows rapid deployment along the key West Yorkshire arterial
              transit networks:
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded border border-secondaryNeon/25 bg-panel p-4">
                <span className="material-symbols-outlined text-[24px] text-primaryNeon">location_on</span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase text-mutedText">
                    Primary Operational Zone
                  </span>
                  <span className="font-display text-lg font-bold text-bodyText">
                    Bradford &amp; West Yorkshire, UK
                  </span>
                  <span className="mt-0.5 text-sm text-mutedText">BD1 – BD24 • Leeds Ring • M62 • M606</span>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded border border-secondaryNeon/25 bg-panel p-4">
                <span className="material-symbols-outlined text-[24px] text-secondaryNeon">phone_iphone</span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase text-mutedText">
                    Direct Roadside Telephone
                  </span>
                  <a className="font-display text-lg font-bold text-primaryNeon transition-colors" href={SITE_PHONE_HREF}>
                    {SITE_PHONE_DISPLAY}
                  </a>
                  <span className="mt-0.5 font-mono text-xs font-bold text-secondaryNeon">
                    LIVE 24/7 • RAPID DISPATCH
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded border border-secondaryNeon/25 bg-panel p-4">
                <span className="material-symbols-outlined text-[24px] text-primaryNeon">mail</span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase text-mutedText">
                    Electronic Dispatch Inquiries
                  </span>
                  <a
                    className="font-display text-base font-bold text-bodyText transition-colors hover:underline"
                    href={SITE_EMAIL_HREF}
                  >
                    {SITE_EMAIL}
                  </a>
                  <span className="mt-0.5 text-sm text-mutedText">Invoices • Scheduled Vehicle Transport</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-panel shadow-2xl sm:h-96">
              <div className="absolute inset-0 flex items-center justify-center bg-[#130B1E]">
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="material-symbols-outlined animate-pulse text-[48px] text-primaryNeon">
                    radar
                  </span>
                  <span className="font-mono text-sm font-bold uppercase text-secondaryNeon">
                    BRADFORD DISPATCH SECTOR ACTIVE
                  </span>
                  <span className="font-mono text-xs text-mutedText">LAT 53.7959° N // LON 1.7594° W</span>
                </div>
              </div>
              <div className="absolute left-4 top-4 z-10 flex flex-col gap-1 rounded border border-primaryNeon/30 bg-bg/90 p-3 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primaryNeon shadow-[0_0_8px_#FF2BD6]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-bodyText">
                    RADAR: BRADFORD CENTRAL
                  </span>
                </div>
                <span className="font-mono text-xs text-mutedText">LAT 53.7959° N // LON 1.7594° W</span>
              </div>
              <div className="absolute bottom-4 right-4 z-10 rounded border border-secondaryNeon/30 bg-bg/90 px-3 py-1.5 backdrop-blur">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-secondaryNeon">
                  SECTOR: WEST YORKSHIRE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
