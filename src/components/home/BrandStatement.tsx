export default function BrandStatement() {
  return (
    <section className="relative w-full overflow-hidden border-y border-blue-800/20 bg-slate-100 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/10 via-transparent to-transparent" />
      <div className="mb-10 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-600 to-transparent shadow-sm" />
      <div className="mx-auto max-w-7xl space-y-6 px-4 text-center sm:px-6">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">
          // THE SAFERIDE CREED //
        </span>
        <h2 className="mx-auto max-w-5xl font-display text-3xl font-black uppercase leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          YOUR CAR MAY STOP. <br className="hidden sm:inline" />
          <span className=" text-blue-800">
            YOUR JOURNEY DOESN&rsquo;T HAVE TO.
          </span>
        </h2>
        <p className="mx-auto max-w-2xl font-sans text-sm text-slate-500 md:text-base">
          We operate across the darkest hours of night and violent Pennine weather fronts. When
          traditional garages switch off, our recovery flatbeds roll out.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 pt-4 font-sans text-xs tracking-widest text-slate-500 sm:flex-row sm:gap-6">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-800" /> ZERO AUTOMATION
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" /> DIRECT ENGINEER LINE
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> TRANSPARENT PRICING
          </span>
        </div>
      </div>
      <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
    </section>
  );
}
