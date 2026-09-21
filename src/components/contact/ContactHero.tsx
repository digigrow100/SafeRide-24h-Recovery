export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 -top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-800/10 blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded bg-white px-3 py-1.5 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-800" />
          <span className="font-sans text-xs uppercase tracking-widest text-slate-700">
            CONTACT SAFERIDE // RAPID DISPATCH
          </span>
        </div>
        <h1 className="mb-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Need Help? <span className=" text-blue-800">Get In Touch.</span>
        </h1>
        <p className="max-w-xl font-sans text-base text-slate-500 md:text-lg">
          For vehicle recovery, breakdown assistance, transportation or roadside help in
          Bradford, contact SafeRide 24h Recovery. Immediate response operators on standby.
        </p>
      </div>
    </section>
  );
}
