export default function CoreEthos() {
  return (
    <section className="w-full border-y border-slate-700/15 bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-700">
            01 // CORE ETHOS
          </span>
          <span className="h-px w-12 bg-slate-700/30" />
        </div>
        <blockquote className="font-display text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          &ldquo;Vehicle trouble can happen at any time. SafeRide is here to help when it does.&rdquo;
        </blockquote>
        <div className="grid grid-cols-1 gap-8 pt-4 font-sans text-lg text-slate-500 md:grid-cols-2">
          <p>
            Established to counteract bloated corporate call centers and stranded driver
            abandonment, SafeRide delivers swift, dependable, direct-dispatch recovery across the
            entirety of Bradford and surrounding West Yorkshire arteries.
          </p>
          <p>
            We operate without third-party brokers. When you ring our line, you connect straight
            to active roadside controllers equipped to determine your exact vehicle coordinates
            and deploy high-specification transport units immediately.
          </p>
        </div>
      </div>
    </section>
  );
}
