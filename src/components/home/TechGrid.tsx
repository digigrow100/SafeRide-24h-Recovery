const ITEMS = [
  {
    icon: "height",
    title: "Low-Approach Ramps",
    description:
      "Extended extruded aluminium beaver-tail extensions reducing loading gradient to below 6°, eliminating front bumper scraping on lowered sports cars and EV platforms.",
    spec: "Zero Ground Friction",
  },
  {
    icon: "adjust",
    title: "Non-Marking Harnesses",
    description:
      "Industrial tyre-wrap webbing that locks vehicles strictly by tread surface. Zero metal-to-wheel contact, preserving diamond-cut and powder-coated alloys.",
    spec: "100% Rim Preservation",
  },
  {
    icon: "sync",
    title: "Dynamic Wireless Winch",
    description:
      "Heavy-capacity remote winches using synthetic plasma rope. Continuous variable speed allows millimetre-accurate alignment onto the deck without shock loads.",
    spec: "12,000 LBS Controlled Pull",
  },
  {
    icon: "terminal",
    title: "Diagnostic Scan Tools",
    description:
      "Onboard bi-directional scan suites capable of clearing immobiliser lockdowns, resetting electronic parking brakes on dead batteries, and hybrid pack health tests.",
    spec: "Deep CAN Interrogation",
  },
] as const;

export default function TechGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mb-12 max-w-2xl space-y-3">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
          // Hardware &amp; Craft
        </span>
        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-bodyText sm:text-5xl">
          Prepared for the Road.
        </h2>
        <p className="text-sm text-mutedText">
          Every component aboard our SafeRide units is selected to safeguard factory paint
          finishes, carbon aerodynamics, and ultra-wide performance rims.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between gap-6 rounded-xl border border-subtleBorder bg-secondaryBg p-6 transition-colors hover:border-primaryNeon"
          >
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primaryNeon/30 bg-panel text-primaryNeon">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h4 className="mb-2 font-display text-lg font-bold text-bodyText">{item.title}</h4>
              <p className="text-sm leading-relaxed text-mutedText">{item.description}</p>
            </div>
            <div className="border-t border-white/10 pt-4 font-mono text-xs font-bold uppercase text-primaryNeon">
              Spec: {item.spec}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
