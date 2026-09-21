import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "Call Our Team",
    description:
      "Call " + SITE_PHONE_DISPLAY + " and tell us about your vehicle problem. Let us know the vehicle type and whether it can be driven.",
    accentBorder: "hover:border-blue-800",
    accentText: "text-blue-800",
    numeral: "text-blue-800",
  },
  {
    number: "02",
    title: "Share Your Location",
    description:
      "Provide your exact location, postcode, nearby road name or a location pin. Also tell us where you would like the vehicle taken.",
    accentBorder: "hover:border-slate-700",
    accentText: "text-slate-700",
    numeral: "text-slate-700",
  },
  {
    number: "03",
    title: "Vehicle Recovery",
    description:
      "We will arrange suitable assistance. Your vehicle will be loaded carefully and transported to the agreed destination.",
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
            Simple Recovery Process
          </span>
          <h2 className="font-display text-4xl font-black uppercase text-slate-900 sm:text-5xl">
            Three Simple Steps to Get Help
          </h2>
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
                <h3 className="font-display text-xl font-bold uppercase text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-amber-700"
            href={SITE_PHONE_HREF}
          >
            CALL FOR HELP NOW
          </a>
        </div>
      </div>
    </section>
  );
}
