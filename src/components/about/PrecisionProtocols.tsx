import Image from "next/image";
import aboutHydraulicRigging from "@/assets/images/about-hydraulic-rigging.webp";

const PROTOCOL_ITEMS = [
  {
    icon: "headset_mic",
    accent: "text-blue-800",
    title: "Direct Communication",
    description:
      "Zero call-center holding loops or automated IVR mazes. You speak immediately with local recovery controllers who understand the local roads.",
  },
  {
    icon: "schedule",
    accent: "text-slate-700",
    title: "24/7 Availability",
    description:
      "Engineered for round-the-clock standby. Shifts are perpetually manned through twilight, bank holidays, and severe winter storms.",
  },
  {
    icon: "build_circle",
    accent: "text-blue-800",
    title: "Damage-Free Loading",
    description:
      "Tilt-and-slide low-angle ramps, non-marking soft-tie harnesses, and remote-controlled winching suited for low-clearance and EV platforms.",
  },
  {
    icon: "pin_drop",
    accent: "text-slate-700",
    title: "Local Coverage",
    description:
      "Surgical sector familiarity covering the city centre, motorway network, and elevated moor routes.",
  },
] as const;

export default function PrecisionProtocols() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="relative order-2 lg:order-1 lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
            <Image
              alt="Close-up of a heavy steel recovery hook locked onto a flatbed diamond-plate deck"
              src={aboutHydraulicRigging}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 rounded border border-blue-800/30 bg-white/90 px-3 py-1.5 backdrop-blur">
              <span className="font-sans text-[10px] uppercase tracking-widest text-blue-800">
                SPEC // HYDRAULIC RIGGING
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-7">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-700">
              PRECISION PROTOCOLS
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-slate-900 sm:text-4xl">
              Simple Help When You Need It
            </h2>
          </div>
          <p className="font-sans text-base text-slate-500">
            Our operational model is built on deliberate simplicity and honest communication. We
            have stripped away bureaucratic tiers in favor of tactical road readiness:
          </p>
          <div className="grid grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
            {PROTOCOL_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded border border-slate-700/20 bg-white p-4 transition-colors"
              >
                <div className={`flex items-center gap-2 ${item.accent}`}>
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  <span className="font-sans text-sm font-bold uppercase">{item.title}</span>
                </div>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
