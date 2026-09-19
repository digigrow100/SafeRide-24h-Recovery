const STEPS = [
  {
    number: "01",
    accent: "border-primaryNeon text-primaryNeon shadow-[0_0_15px_rgba(255,43,214,0.4)]",
    title: "CALL",
    description: "Tell our team what has happened and the condition of the vehicle.",
  },
  {
    number: "02",
    accent: "border-secondaryNeon text-secondaryNeon shadow-[0_0_15px_rgba(139,92,255,0.4)]",
    title: "LOCATION",
    description: "Tell us where your vehicle is or send your live WhatsApp/pin coordinates.",
  },
  {
    number: "03",
    accent: "border-primaryNeon text-primaryNeon shadow-[0_0_15px_rgba(255,43,214,0.4)]",
    title: "ASSISTANCE",
    description: "We arrange and deploy the appropriate recovery truck or roadside technician immediately.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="border-y border-secondaryNeon/15 bg-secondaryBg px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-widest text-primaryNeon">
            DISPATCH PROTOCOL
          </span>
          <h2 className="font-display text-3xl font-bold text-bodyText md:text-4xl">How It Works</h2>
        </div>

        <div className="relative">
          <div className="absolute left-12 right-12 top-7 hidden h-[2px] bg-secondaryNeon/15 md:block" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div
                  className={`z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-panel font-mono text-base font-bold ${step.accent}`}
                >
                  {step.number}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-bodyText">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-mutedText">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
