export default function BrandStatement() {
  return (
    <section className="relative w-full overflow-hidden border-y border-primaryNeon/20 bg-secondaryBg py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primaryNeon/10 via-transparent to-transparent" />
      <div className="mb-10 h-[2px] w-full bg-gradient-to-r from-transparent via-accentCyan to-transparent shadow-neon-cyan" />
      <div className="mx-auto max-w-7xl space-y-6 px-4 text-center sm:px-6">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accentCyan">
          // THE SAFERIDE CREED //
        </span>
        <h2 className="mx-auto max-w-5xl font-display text-3xl font-black uppercase leading-[1.15] tracking-tight text-bodyText sm:text-5xl md:text-6xl">
          YOUR CAR MAY STOP. <br className="hidden sm:inline" />
          <span className="neon-glow-magenta bg-gradient-to-r from-primaryNeon via-white to-secondaryNeon bg-clip-text text-transparent">
            YOUR JOURNEY DOESN&rsquo;T HAVE TO.
          </span>
        </h2>
        <p className="mx-auto max-w-2xl font-sans text-sm text-mutedText md:text-base">
          We operate across the darkest hours of night and violent Pennine weather fronts. When
          traditional garages switch off, our recovery flatbeds roll out.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 pt-4 font-mono text-xs tracking-widest text-mutedText sm:flex-row sm:gap-6">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primaryNeon" /> ZERO AUTOMATION
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-secondaryNeon" /> DIRECT ENGINEER LINE
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accentCyan" /> TRANSPARENT PRICING
          </span>
        </div>
      </div>
      <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-secondaryNeon/40 to-transparent" />
    </section>
  );
}
