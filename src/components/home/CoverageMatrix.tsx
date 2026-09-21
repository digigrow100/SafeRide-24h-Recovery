const AREAS = [
  "Bradford City Centre",
  "Shipley",
  "Bingley",
  "Keighley",
  "Saltaire",
  "Baildon",
  "Cleckheaton",
  "Queensbury",
  "Clayton",
  "Eccleshill",
  "Manningham",
  "Heaton",
  "Great Horton",
  "Little Horton",
  "Low Moor",
  "Wyke",
  "Haworth",
  "Nearby West Yorkshire Areas",
] as const;

const ROUTES = ["M606", "M62", "A650", "A6177", "Main roads around Bradford"] as const;

export default function CoverageMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            Our Service Area
          </span>
          <h2 className="mb-4 font-display text-4xl font-black uppercase leading-tight tracking-tight text-slate-900 lg:text-5xl">
            Car Recovery Across Bradford and West Yorkshire
          </h2>
          <div className="mb-8 space-y-4 text-base leading-relaxed text-slate-500">
            <p>
              SafeRide 24H Recovery is based in Bradford and serves drivers across the city and
              surrounding areas.
            </p>
            <p>
              We provide vehicle recovery and roadside assistance throughout Bradford postcodes
              BD1 to BD22, subject to availability and your exact location.
            </p>
            <p>
              Need vehicle transportation to or from Leeds, Halifax, Manchester or another UK
              location? Contact us with your collection and delivery details.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-100 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-sans text-sm font-bold uppercase text-slate-900">
                Major Routes Covered
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
              {ROUTES.map((item) => (
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
              <span className="font-display text-lg font-bold text-slate-900">Main Areas Covered</span>
              <span className="font-sans text-xs font-bold text-slate-500">BD1–BD22</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-3">
              {AREAS.map((area) => (
                <div
                  key={area}
                  className="group cursor-default rounded-lg bg-white p-3 transition-colors hover:bg-blue-800"
                >
                  <div className="font-sans text-xs font-semibold text-slate-900 group-hover:text-white">
                    {area}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-800">navigation</span>
                <span className="text-sm text-slate-900">Not sure if we cover your area?</span>
              </div>
              <a href="/contact" className="font-sans text-xs font-bold uppercase text-blue-800 hover:underline">
                CHECK YOUR LOCATION →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
