import { SITE_PHONE_HREF } from "@/lib/site";

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

export default function PostcodeDirectory() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 max-w-3xl">
          <span className="mb-1 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            Geographic Coverage Index
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
            Comprehensive Bradford Postcode Geofence
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Every postal sector within the Bradford metropolitan zone is covered with rapid
            priority response dispatch.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {POSTCODES.map((item) => (
            <div key={item.code} className="flex flex-col items-center justify-center rounded-lg bg-slate-100 p-3 text-center shadow-sm">
              <span className="font-display text-base font-bold text-blue-800">{item.code}</span>
              <span className="font-sans text-[10px] text-slate-500">{item.area}</span>
            </div>
          ))}
          <div className="col-span-2 flex flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow-sm">
            <span className="font-sans text-[10px] font-bold uppercase text-blue-800">Long-Distance</span>
            <span className="text-xs text-slate-900">UK-Wide Transit</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-slate-100 p-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-blue-800">rv_hookup</span>
            <div>
              <span className="block font-display text-base font-bold text-slate-900">
                Cross-Boundary &amp; Auction Hub Transfers
              </span>
              <span className="text-sm text-slate-500">
                Daily direct transport routes to BCA Brighouse, Copart Sandtoft, Leeds, Halifax,
                Huddersfield, and Wakefield.
              </span>
            </div>
          </div>
          <a
            href={SITE_PHONE_HREF}
            className="shrink-0 rounded-full bg-white px-5 py-2.5 font-sans text-xs font-bold text-blue-800 shadow-sm hover:bg-slate-100"
          >
            Book Auction Transport
          </a>
        </div>
      </div>
    </section>
  );
}
