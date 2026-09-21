import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function EmergencyStrip() {
  return (
    <section className="w-full border-y border-blue-800/35 bg-white py-8 shadow-inner">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-800 text-white shadow-md">
            <span className="material-symbols-outlined text-[28px]">warning</span>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-display text-lg font-bold text-blue-800">
              Need Immediate Recovery Assistance?
            </span>
            <span className="text-sm text-slate-500">
              Do not wait for an email response. Live lines are active 24/7/365.
            </span>
          </div>
        </div>
        <div className="flex w-full shrink-0 flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-end">
          <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-blue-800">
            {SITE_PHONE_DISPLAY}
          </span>
          <a
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-amber-600 px-5 py-2.5 font-sans text-sm uppercase tracking-wider text-white shadow-md transition-all hover:bg-amber-700  sm:w-auto"
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
