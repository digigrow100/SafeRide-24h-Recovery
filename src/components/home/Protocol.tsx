import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    tag: "// INITIATE CALL",
    title: "Direct Controller Talk",
    description:
      "Connect directly with our 24h Bradford operational room. State your vehicle situation, exact road marker or hazard status.",
    accentBorder: "hover:border-blue-800",
    accentText: "text-blue-800",
    numeral: "text-blue-800",
  },
  {
    number: "02",
    tag: "// PINPOINT TELEMETRY",
    title: "GPS & ETA Confirmation",
    description:
      "Share your WhatsApp pin or motorway marker. We calculate traffic and allocate the closest mobile flatbed with guaranteed live ETA.",
    accentBorder: "hover:border-slate-700",
    accentText: "text-slate-700",
    numeral: "text-slate-700",
  },
  {
    number: "03",
    tag: "// RECOVERY EXECUTED",
    title: "Safe Loading & Transit",
    description:
      "Our operator secures the scene with amber Chapter 8 lighting, winches your car without body stress, and drives you safely home or to a depot.",
    accentBorder: "hover:border-amber-600",
    accentText: "text-amber-600",
    numeral: "text-amber-600",
  },
] as const;

export default function Protocol() {
  return (
    <section className="relative border-y border-blue-800/20 bg-slate-100 py-24" id="protocol">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-blue-800">
            // 02 RAPID PROTOCOL
          </span>
          <h2 className="font-display text-4xl font-black uppercase text-slate-900 sm:text-5xl">
            THREE MOTIONS TO EXTRACTION
          </h2>
          <p className="text-sm text-slate-500">
            Engineered simplicity when stress is highest. Direct escalation without IVR routing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className={`group relative rounded-2xl border border-slate-200 bg-slate-100 p-8 transition-all duration-300 ${step.accentBorder}`}
            >
              <div
                className={`mb-4 font-display text-7xl font-black opacity-40 transition-opacity group-hover:opacity-100 ${step.numeral}`}
              >
                {step.number}
              </div>
              <div className="space-y-3">
                <span className={`font-sans text-xs font-bold uppercase tracking-widest ${step.accentText}`}>
                  {step.tag}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
              {step.number === "01" ? (
                <div className={`mt-6 flex items-center gap-1.5 border-t border-black/10 pt-4 font-sans text-xs ${step.accentText}`}>
                  <span>{SITE_PHONE_DISPLAY}</span>
                  <a href={SITE_PHONE_HREF} aria-label="Call SafeRide">
                    <span className="material-symbols-outlined text-sm">call</span>
                  </a>
                </div>
              ) : step.number === "02" ? (
                <div className={`mt-6 flex items-center gap-1.5 border-t border-black/10 pt-4 font-sans text-xs ${step.accentText}`}>
                  <span>CONTROLLER DISPATCHED</span>
                  <span className="material-symbols-outlined text-sm">navigation</span>
                </div>
              ) : (
                <div className={`mt-6 flex items-center gap-1.5 border-t border-black/10 pt-4 font-sans text-xs ${step.accentText}`}>
                  <span>SECURE PROTOCOL MET</span>
                  <span className="material-symbols-outlined text-sm">verified</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
