const STEPS = [
  {
    number: "01",
    accent: "border-blue-800 text-blue-800 shadow-sm",
    title: "CALL",
    description: "Tell our team what has happened and the condition of the vehicle.",
  },
  {
    number: "02",
    accent: "border-slate-700 text-slate-700 shadow-sm",
    title: "LOCATION",
    description: "Tell us where your vehicle is or send your live WhatsApp/pin coordinates.",
  },
  {
    number: "03",
    accent: "border-blue-800 text-blue-800 shadow-sm",
    title: "ASSISTANCE",
    description: "We arrange and deploy the appropriate recovery truck or roadside technician immediately.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="border-y border-slate-700/15 bg-slate-100 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-blue-800">
            DISPATCH PROTOCOL
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">How It Works</h2>
        </div>

        <div className="relative">
          <div className="absolute left-12 right-12 top-7 hidden h-[2px] bg-slate-700/15 md:block" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div
                  className={`z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white font-sans text-base font-bold ${step.accent}`}
                >
                  {step.number}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
