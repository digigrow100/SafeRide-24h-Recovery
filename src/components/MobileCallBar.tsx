import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] backdrop-blur-xl md:hidden">
      <a
        href={SITE_PHONE_HREF}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-3.5 text-sm font-bold text-white shadow-md"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        <span>24H Breakdown SOS &bull; {SITE_PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}
