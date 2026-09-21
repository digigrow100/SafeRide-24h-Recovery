export default function StatusBar() {
  return (
    <div className="sticky top-0 z-30 w-full border-b border-blue-800/20 bg-slate-50/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 font-sans text-[10px] font-bold uppercase tracking-widest text-blue-800">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-800" />
            Fleet Status: Active West Yorkshire
          </span>
          <span className="hidden text-slate-500 md:inline">/</span>
          <span className="hidden font-sans text-[10px] uppercase tracking-widest text-slate-500 md:inline">
            M606 &bull; M62 &bull; A650 &bull; A6177 Rapid Corridors
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest text-slate-500 sm:flex">
            Average Dispatch:
            <span className="font-bold text-slate-900">23 Mins</span>
          </span>
          <a
            href="#dispatch-terminal"
            className="flex items-center gap-1 font-sans text-[10px] font-bold uppercase tracking-widest text-emerald-600 hover:text-blue-800"
          >
            Instant Dispatch <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
