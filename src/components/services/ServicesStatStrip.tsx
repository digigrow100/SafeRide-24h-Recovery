const STATS = [
  { label: "AVAILABILITY", value: "24/7" },
  { label: "COVERAGE", value: "BD1–BD24" },
  { label: "COMPLIANCE", value: "PAS 43" },
  { label: "DISPATCH", value: "Zero IVR Delay" },
] as const;

export default function ServicesStatStrip() {
  return (
    <div className="w-full border-y border-slate-700/15 bg-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 sm:px-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 border-l border-blue-800/30 pl-3">
            <span className="font-sans text-[10px] uppercase tracking-widest text-slate-500">
              {stat.label}
            </span>
            <span className="font-display text-lg font-bold text-slate-900">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
