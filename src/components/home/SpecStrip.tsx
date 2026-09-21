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
    <div className="w-full overflow-hidden border-y border-subtleBorder bg-secondaryBg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        {ITEMS.map((item, index) => (
          <span key={item} className="flex items-center gap-x-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-mutedText">
              {item}
            </span>
            {index < ITEMS.length - 1 ? (
              <span className="h-1 w-1 rounded-full bg-primaryNeon/50" />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
