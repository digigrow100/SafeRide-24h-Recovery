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
          <span className="mb-1 block font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
            Geographic Coverage Index
          </span>
          <h2 className="font-display text-2xl font-bold text-bodyText md:text-3xl">
            Comprehensive Bradford Postcode Geofence
          </h2>
          <p className="mt-2 text-sm text-mutedText">
            Every postal sector within the Bradford metropolitan zone is covered with rapid
            priority response dispatch.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {POSTCODES.map((item) => (
            <div key={item.code} className="flex flex-col items-center justify-center rounded-lg bg-secondaryBg p-3 text-center shadow-sm">
              <span className="font-display text-base font-bold text-primaryNeon">{item.code}</span>
              <span className="font-mono text-[10px] text-mutedText">{item.area}</span>
            </div>
          ))}
          <div className="col-span-2 flex flex-col items-center justify-center rounded-lg bg-panel p-3 text-center shadow-sm">
            <span className="font-mono text-[10px] font-bold uppercase text-primaryNeon">Long-Distance</span>
            <span className="text-xs text-bodyText">UK-Wide Transit</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-secondaryBg p-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-primaryNeon">rv_hookup</span>
            <div>
              <span className="block font-display text-base font-bold text-bodyText">
                Cross-Boundary &amp; Auction Hub Transfers
              </span>
              <span className="text-sm text-mutedText">
                Daily direct transport routes to BCA Brighouse, Copart Sandtoft, Leeds, Halifax,
                Huddersfield, and Wakefield.
              </span>
            </div>
          </div>
          <a
            href={SITE_PHONE_HREF}
            className="shrink-0 rounded-full bg-panel px-5 py-2.5 font-mono text-xs font-bold text-primaryNeon shadow-sm hover:bg-secondaryBg"
          >
            Book Auction Transport
          </a>
        </div>
      </div>
    </section>
  );
}
