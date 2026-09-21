const DEPOTS = [
  {
    name: "Rooley Lane Depot (BD4)",
    badge: "Primary Fleet HQ",
    description:
      "Direct access point onto the M606 motorway and Bradford Outer Ring Road (A6177). Instant access to South Bradford, Low Moor, Dudley Hill, and rapid junction links to the M62.",
    tags: ["M606: 2 Mins", "40-Vehicle Secure Compound"],
  },
  {
    name: "Manningham Hub (BD8)",
    badge: "Rapid Response Unit",
    description:
      "Serving Bradford City Centre, Heaton, Manningham, Girlington, and Allerton. Houses our rapid-response roadside jump and diagnostic vans for inner-city urban incidents.",
    tags: ["BD1 Central: 5 Mins", "Rapid Boost Fleet"],
  },
  {
    name: "Canal Road Corridor (BD18)",
    badge: "North BD Gateway",
    description:
      "Covers Shipley, Saltaire, Baildon, Bingley, and the Leeds Road (A657) arterial corridor into North Leeds and Leeds Bradford International Airport.",
    tags: ["A650 Valley: 3 Mins", "LBA Airport: 18 Mins"],
  },
] as const;

const POSTCODES = [
  "BD1", "BD2", "BD3", "BD4", "BD5", "BD6", "BD7", "BD8", "BD9", "BD10", "BD11", "BD12",
  "BD13", "BD14", "BD15", "BD16", "BD17", "BD18", "BD19", "BD20", "BD21", "BD22",
] as const;

export default function Depots() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 flex flex-col gap-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accentCyan">
          Local Staging Architecture
        </span>
        <h2 className="font-display text-3xl font-bold uppercase text-bodyText sm:text-4xl">
          Bradford Depots &amp; Strategic Coverage
        </h2>
        <p className="max-w-2xl text-base text-mutedText">
          We don&rsquo;t dispatch from distant regional centers. Our trucks are permanently
          positioned across Bradford to circumvent urban congestion and motorway bottlenecks.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {DEPOTS.map((depot) => (
          <div key={depot.name} className="flex flex-col justify-between rounded-2xl border border-secondaryNeon/25 bg-panel p-6">
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-primaryNeon">{depot.name}</h3>
              </div>
              <span className="mb-3 inline-block rounded bg-secondaryBg px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-secondaryNeon">
                {depot.badge}
              </span>
              <p className="text-sm text-mutedText">{depot.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 font-mono text-[11px] text-mutedText">
              {depot.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-primaryNeon">navigation</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-secondaryBg p-6">
        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <span className="font-mono text-sm font-bold uppercase tracking-wider text-bodyText">
            Full BD Postcode Priority Service Zone
          </span>
          <span className="text-sm text-mutedText">
            Plus regional transport across Leeds (LS), Halifax (HX), Huddersfield (HD) &amp; Manchester (M)
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {POSTCODES.map((code) => (
            <span key={code} className="rounded-lg bg-panel px-3 py-1 font-mono text-xs font-semibold text-primaryNeon">
              {code}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
