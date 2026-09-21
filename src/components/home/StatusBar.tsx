export default function StatusBar() {
  return (
    <div className="sticky top-0 z-30 w-full border-b border-primaryNeon/20 bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-primaryNeon">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primaryNeon" />
            Fleet Status: Active West Yorkshire
          </span>
          <span className="hidden text-mutedText md:inline">/</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-mutedText md:inline">
            M606 &bull; M62 &bull; A650 &bull; A6177 Rapid Corridors
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-mutedText sm:flex">
            Average Dispatch:
            <span className="font-bold text-bodyText">23 Mins</span>
          </span>
          <a
            href="#dispatch-terminal"
            className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accentCyan hover:text-primaryNeon"
          >
            Instant Dispatch <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
