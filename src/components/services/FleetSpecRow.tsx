const SPECS = [
  { icon: "height", label: "Calibrated Multi-Point Straps", value: "5.8° Ultra-Low" },
  { icon: "settings_remote", label: "Dual Remote Wireless Winches", value: "12,000 LBS Pull" },
  { icon: "adjust", label: "Non-Load Soft Wheel Cradles", value: "Tyre Tread Only" },
  { icon: "query_stats", label: "Onboard Telematics & GPS", value: "CAN / DoIP Multi-OEM" },
] as const;

export default function FleetSpecRow() {
  return (
    <section className="border-y border-secondaryNeon/15 bg-secondaryBg px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
            Showroom Grade Equipment
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-bodyText sm:text-4xl">
            Purpose-Built Fleet Specifications
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map((spec) => (
            <div key={spec.label} className="flex flex-col justify-between gap-6 rounded-xl border border-secondaryNeon/20 bg-panel p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primaryNeon/15 text-primaryNeon">
                <span className="material-symbols-outlined text-2xl">{spec.icon}</span>
              </div>
              <h4 className="font-display text-base font-bold text-bodyText">{spec.label}</h4>
              <div className="border-t border-white/10 pt-3 font-mono text-xs font-bold text-primaryNeon">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
