import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function LocationSection() {
  return (
    <section className="w-full border-t border-slate-700/15 bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-xs uppercase tracking-widest text-emerald-600">
                STATION COORDINATES
              </span>
              <h2 className="font-display text-3xl font-bold uppercase text-slate-900 sm:text-4xl">
                Based Locally
              </h2>
            </div>
            <p className="font-sans text-base text-slate-500">
              Our strategic depot allows rapid deployment along the key regional arterial transit
              networks:
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded border border-slate-700/25 bg-white p-4">
                <span className="material-symbols-outlined text-[24px] text-blue-800">location_on</span>
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase text-slate-500">
                    Primary Operational Zone
                  </span>
                  <span className="font-display text-lg font-bold text-slate-900">
                    UK, Local &amp; Regional Coverage
                  </span>
                  <span className="mt-0.5 text-sm text-slate-500">City Centre • Ring Road • Motorway Network</span>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded border border-slate-700/25 bg-white p-4">
                <span className="material-symbols-outlined text-[24px] text-slate-700">phone_iphone</span>
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase text-slate-500">
                    Direct Roadside Telephone
                  </span>
                  <a className="font-display text-lg font-bold text-blue-800 transition-colors" href={SITE_PHONE_HREF}>
                    {SITE_PHONE_DISPLAY}
                  </a>
                  <span className="mt-0.5 font-sans text-xs font-bold text-slate-700">
                    LIVE 24/7 • RAPID DISPATCH
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded border border-slate-700/25 bg-white p-4">
                <span className="material-symbols-outlined text-[24px] text-blue-800">mail</span>
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase text-slate-500">
                    Electronic Dispatch Inquiries
                  </span>
                  <a
                    className="font-display text-base font-bold text-slate-900 transition-colors hover:underline"
                    href={SITE_EMAIL_HREF}
                  >
                    {SITE_EMAIL}
                  </a>
                  <span className="mt-0.5 text-sm text-slate-500">Invoices • Scheduled Vehicle Transport</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-white shadow-lg sm:h-96">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="material-symbols-outlined animate-pulse text-[48px] text-blue-300">
                    radar
                  </span>
                  <span className="font-sans text-sm font-bold uppercase text-white">
                    DISPATCH SECTOR ACTIVE
                  </span>
                </div>
              </div>
              <div className="absolute left-4 top-4 z-10 flex flex-col gap-1 rounded border border-blue-800/30 bg-slate-50/90 p-3 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-800 shadow-sm" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900">
                    RADAR: CENTRAL
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 z-10 rounded border border-slate-700/30 bg-slate-50/90 px-3 py-1.5 backdrop-blur">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">
                  SECTOR: REGIONAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
