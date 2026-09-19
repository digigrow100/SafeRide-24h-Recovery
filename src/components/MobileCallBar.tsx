import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primaryNeon/40 bg-bg/95 p-3 backdrop-blur-xl md:hidden">
      <a
        href={SITE_PHONE_HREF}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primaryNeon to-secondaryNeon py-3.5 font-mono text-xs font-bold tracking-wider text-white shadow-neon-magenta"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        <span>CALL 24/7 • {SITE_PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}
