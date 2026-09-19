const REASONS = [
  {
    tag: "01 // ROUND-THE-CLOCK",
    accent: "text-primaryNeon",
    title: "Available 24/7",
    description:
      "Vehicle problems do not conform to working hours. Whether stranded at 3:00 AM on the hard shoulder or a Sunday evening in residential cul-de-sacs, our rigs run non-stop.",
  },
  {
    tag: "02 // LOCAL BASE",
    accent: "text-secondaryNeon",
    title: "Bradford Based",
    description:
      "We are rooted in Bradford. We don't dispatch trucks from two counties over—our crews know the city shortcuts, low bridges, industrial estates, and steepest hills intimately.",
  },
  {
    tag: "03 // VERSATILITY",
    accent: "text-primaryNeon",
    title: "Multiple Services",
    description:
      "From sudden accident clearance and commercial van extraction to delicate prestige sports cars and standard EV transport, our deck loaders are universally equipped.",
  },
  {
    tag: "04 // TRANSPARENCY",
    accent: "text-secondaryNeon",
    title: "Direct Contact",
    description:
      "Drivers can call SafeRide directly when assistance is needed. Fixed quotes before rollout, zero hidden gate fees, and direct phone link with your attending recovery driver.",
  },
] as const;

export default function WhyTrust() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase tracking-widest text-secondaryNeon">
            TRANSPARENCY // FACTS
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-bodyText sm:text-4xl">
            Why Drivers Trust SafeRide
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-2 rounded border border-secondaryNeon/25 bg-panel p-6"
            >
              <span className={`font-mono text-xs font-bold uppercase tracking-widest ${reason.accent}`}>
                {reason.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-bodyText">{reason.title}</h3>
              <p className="text-sm text-mutedText">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
