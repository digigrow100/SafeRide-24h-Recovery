import Image from "next/image";
import contactCoverageMapArea from "@/assets/images/contact-coverage-map-area.webp";

const CORRIDORS = [
  { area: "M606 / M62 Corridor", eta: "Avg ETA: 15-20 Min", accent: "text-blue-800" },
  { area: "Bradford Central & Inner Ring", eta: "Avg ETA: 15-25 Min", accent: "text-slate-700" },
  { area: "Airedale & Calderdale Arteries", eta: "Avg ETA: 25-35 Min", accent: "text-blue-800" },
];

export default function ContactCoverage() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-white shadow-xl lg:col-span-7">
            <div className="relative h-80 w-full sm:h-96">
              <Image
                alt="Map of Bradford, West Yorkshire recovery coverage area"
                src={contactCoverageMapArea}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded bg-slate-50/90 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-blue-800">explore</span>
                <span className="font-sans text-xs uppercase tracking-wider text-blue-800">
                  SECTOR: BRADFORD METROPOLITAN // M62 • M606 • A650
                </span>
              </div>
              <span className="font-sans text-xs font-semibold uppercase text-blue-800">UNIT GPS LIVE</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-blue-800">location_on</span>
              <span className="font-sans text-xs uppercase tracking-widest text-slate-700">
                REGIONAL COVERAGE
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">Serving Bradford</h2>
            <p className="font-sans text-base text-slate-500">
              Vehicle recovery and roadside assistance across Bradford. Rapid dispatch along the
              Chain Bar interchange, Shipley, Keighley, and all West Yorkshire ring routes.
            </p>
            <div className="flex flex-col gap-3 pt-1">
              {CORRIDORS.map((item) => (
                <div
                  key={item.area}
                  className="flex items-center justify-between rounded border border-slate-700/20 bg-white p-3"
                >
                  <span className="font-display text-base font-medium text-slate-900">{item.area}</span>
                  <span className={`font-sans text-xs font-semibold uppercase ${item.accent}`}>{item.eta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
