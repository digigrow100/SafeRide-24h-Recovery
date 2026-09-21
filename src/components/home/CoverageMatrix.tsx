const POSTCODES = [
  { code: "BD1", area: "Bradford City" },
  { code: "BD2", area: "Eccleshill" },
  { code: "BD3", area: "Barkerend" },
  { code: "BD4", area: "Bierley / Rooley" },
  { code: "BD5", area: "Little Horton" },
  { code: "BD6", area: "Buttershaw" },
  { code: "BD7", area: "Great Horton" },
  { code: "BD8", area: "Manningham" },
  { code: "BD9", area: "Heaton / Frizinghall" },
  { code: "BD10", area: "Idle / Thackley" },
  { code: "BD11", area: "Birkenshaw" },
  { code: "BD12", area: "Low Moor / Wyke" },
  { code: "BD13", area: "Queensbury" },
  { code: "BD14", area: "Clayton" },
  { code: "BD15", area: "Allerton" },
  { code: "BD16", area: "Bingley" },
  { code: "BD17", area: "Baildon" },
  { code: "BD18", area: "Shipley / Saltaire" },
  { code: "BD19", area: "Cleckheaton" },
  { code: "BD20", area: "Keighley North" },
  { code: "BD21", area: "Keighley Central" },
  { code: "BD22", area: "Haworth / Oakworth" },
] as const;

const CORRIDORS = [
  "M606 Motorway Link",
  "M62 J26 & J27 Chain Bar",
  "A650 Shipley / Bingley",
  "A6177 Outer Ring",
] as const;

export default function CoverageMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            Regional Operational Area
          </span>
          <h2 className="mb-4 font-display text-5xl font-black uppercase leading-none tracking-tight text-slate-900 lg:text-6xl">
            BRADFORD
          </h2>
          <p className="mb-8 text-base leading-relaxed text-slate-500">
            Strategic recovery deployment hubs along the Bradford Outer Ring Road, guaranteeing
            rapid intercept times throughout all BD postal sectors and arterial links to Leeds,
            Halifax and Keighley.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-100 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-sans text-sm font-bold uppercase text-slate-900">
                Priority Corridor Access
              </span>
              <span className="rounded border border-blue-800/30 bg-white px-2 py-0.5 font-sans text-[10px] uppercase text-blue-800">
                High Frequency
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
              {CORRIDORS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-slate-900">Covered Postal Sectors</span>
              <span className="font-sans text-xs font-bold text-slate-500">22 ZONES ACTIVE</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center sm:grid-cols-4 md:grid-cols-6">
              {POSTCODES.map((item) => (
                <div
                  key={item.code}
                  className="group cursor-default rounded-lg bg-white p-3 transition-colors hover:bg-blue-800"
                >
                  <div className="font-display text-sm font-bold text-slate-900 group-hover:text-bg">
                    {item.code}
                  </div>
                  <div className="font-sans text-[9px] text-slate-500 group-hover:text-bg/80">{item.area}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-800">navigation</span>
                <span className="text-sm text-slate-900">Need recovery to or from Leeds, Manchester, or beyond?</span>
              </div>
              <a href="/contact" className="font-sans text-xs font-bold uppercase text-blue-800 hover:underline">
                Call Long Distance →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
