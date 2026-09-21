const SPECS = [
  { icon: "height", label: "Calibrated Multi-Point Straps", value: "5.8° Ultra-Low" },
  { icon: "settings_remote", label: "Dual Remote Wireless Winches", value: "12,000 LBS Pull" },
  { icon: "adjust", label: "Non-Load Soft Wheel Cradles", value: "Tyre Tread Only" },
  { icon: "query_stats", label: "Onboard Telematics & GPS", value: "CAN / DoIP Multi-OEM" },
] as const;

export default function FleetSpecRow() {
  return (
    <section className="border-y border-slate-700/15 bg-slate-100 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            Showroom Grade Equipment
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900 sm:text-4xl">
            Purpose-Built Fleet Specifications
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map((spec) => (
            <div key={spec.label} className="flex flex-col justify-between gap-6 rounded-xl border border-slate-700/20 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800/15 text-blue-800">
                <span className="material-symbols-outlined text-2xl">{spec.icon}</span>
              </div>
              <h4 className="font-display text-base font-bold text-slate-900">{spec.label}</h4>
              <div className="border-t border-black/10 pt-3 font-sans text-xs font-bold text-blue-800">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
