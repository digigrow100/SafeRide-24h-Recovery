const ITEMS = [
  "CAR RECOVERY",
  "BREAKDOWN DIAGNOSTICS",
  "VEHICLE TRANSPORTATION",
  "ROADSIDE ASSISTANCE",
  "24H BRADFORD DISPATCH",
  "POSTCODES BD1–BD22",
] as const;

export default function SpecStrip() {
  return (
    <div className="hidden w-full overflow-hidden border-y border-slate-200 bg-slate-100 lg:block">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        {ITEMS.map((item, index) => (
          <span key={item} className="flex items-center gap-x-8">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              {item}
            </span>
            {index < ITEMS.length - 1 ? (
              <span className="h-1 w-1 rounded-full bg-blue-800/50" />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
