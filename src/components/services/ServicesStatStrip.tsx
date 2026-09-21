const STATS = [
  { label: "AVAILABILITY", value: "24/7" },
  { label: "COVERAGE", value: "BD1–BD24" },
  { label: "COMPLIANCE", value: "PAS 43" },
  { label: "DISPATCH", value: "Zero IVR Delay" },
] as const;

export default function ServicesStatStrip() {
  return (
    <div className="w-full border-y border-secondaryNeon/15 bg-secondaryBg">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 sm:px-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 border-l border-primaryNeon/30 pl-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-mutedText">
              {stat.label}
            </span>
            <span className="font-display text-lg font-bold text-bodyText">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
