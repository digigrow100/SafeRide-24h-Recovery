import Image from "next/image";
import contactNightOperative from "@/assets/images/contact-night-operative.webp";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function DispatchInfoCard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative flex flex-col gap-6 overflow-hidden rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="font-sans text-xs uppercase tracking-widest text-slate-500">
            LINE // PRIORITY 01
          </span>
          <span className="inline-flex items-center gap-2 rounded bg-slate-100 px-2 py-0.5 font-sans text-xs uppercase text-blue-800">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
            Available 24/7
          </span>
        </div>

        <div>
          <span className="mb-1 block font-sans text-xs uppercase tracking-wider text-slate-500">
            EMERGENCY HOTLINE
          </span>
          <a
            className="block font-display text-2xl font-bold tracking-tight text-blue-800 shadow-sm transition-colors hover:text-slate-700 sm:text-3xl"
            href={SITE_PHONE_HREF}
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <span className="mt-1 block text-sm text-slate-500">Average operator pickup: Under 3 rings</span>
        </div>

        <div className="flex flex-col gap-4 pt-1">
          <div className="flex items-start gap-3 rounded bg-slate-100 p-3">
            <span className="material-symbols-outlined mt-0.5 text-[20px] text-blue-800">mail</span>
            <div className="flex min-w-0 flex-col">
              <span className="font-sans text-xs uppercase tracking-wider text-slate-500">
                Direct Email Desk
              </span>
              <a
                className="truncate font-sans text-sm text-slate-900 transition-colors hover:text-blue-800"
                href={SITE_EMAIL_HREF}
              >
                {SITE_EMAIL}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded bg-slate-100 p-3">
            <span className="material-symbols-outlined mt-0.5 text-[20px] text-blue-800">near_me</span>
            <div className="flex min-w-0 flex-col">
              <span className="font-sans text-xs uppercase tracking-wider text-slate-500">
                Operational Base
              </span>
              <span className="font-sans text-sm text-slate-900">
                UK (Local & Regional Coverage)
              </span>
            </div>
          </div>
        </div>

        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded bg-amber-600 px-5 py-3.5 font-sans text-sm uppercase tracking-wider text-white shadow-lg transition-all hover:bg-amber-700 "
          href={SITE_PHONE_HREF}
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          CALL NOW • {SITE_PHONE_DISPLAY}
        </a>

        <div className="grid grid-cols-1 gap-3 border-t border-black/10 pt-4 sm:grid-cols-2">
          <a
            className="inline-flex items-center justify-center gap-2 rounded bg-slate-100 px-4 py-3 font-sans text-xs font-bold uppercase text-slate-700 transition-colors hover:bg-slate-100/70"
            href="https://wa.me/447466354550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp GPS Pin
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded bg-slate-100 px-4 py-3 font-sans text-xs font-bold uppercase text-slate-900 transition-colors hover:bg-slate-100/70"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-[18px]">grid_4x4</span>
            what3words Grid
          </a>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-md">
        <p className="mb-4 font-sans text-xs uppercase tracking-widest text-emerald-600">
          Rapid Fleet Equipment
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-800 font-sans text-xs font-bold text-white">
              1
            </span>
            <div>
              <span className="block font-display text-sm font-bold text-slate-900">Spec-Lift &amp; Low-Approach Flatbeds</span>
              <span className="text-xs text-slate-500">Equipped for lowered chassis, EVs, AWDs &amp; stuck handbrakes.</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-800 font-sans text-xs font-bold text-white">
              2
            </span>
            <div>
              <span className="block font-display text-sm font-bold text-slate-900">Roadside Jump &amp; Battery Boost</span>
              <span className="text-xs text-slate-500">Industrial 12v/24v auxiliary pack start and diagnostics.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
        <div className="relative h-44 w-full">
          <Image
            alt="Night recovery operative securing a car wheel on a wet highway"
            src={contactNightOperative}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/60/60 to-transparent p-4">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-700">
              DISPATCH UNIT ENGAGED
            </span>
            <span className="font-display text-base font-semibold text-slate-900">
              Trained tilt-slide specialists active across the region
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
