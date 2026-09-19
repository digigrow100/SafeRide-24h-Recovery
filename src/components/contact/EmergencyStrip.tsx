import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function EmergencyStrip() {
  return (
    <section className="w-full border-y border-primaryNeon/35 bg-panel py-8 shadow-inner">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primaryNeon text-white shadow-md">
            <span className="material-symbols-outlined text-[28px]">warning</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-primaryNeon">
              Need Immediate Recovery Assistance?
            </span>
            <span className="text-sm text-mutedText">
              Do not wait for an email response. Live lines are active 24/7/365.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-end">
          <span className="font-display text-lg font-bold tracking-tight text-primaryNeon">
            {SITE_PHONE_DISPLAY}
          </span>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-primaryNeon px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-white shadow-md transition-all hover:brightness-110 sm:w-auto"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            CALL SAFERIDE NOW
          </a>
        </div>
      </div>
    </section>
  );
}
