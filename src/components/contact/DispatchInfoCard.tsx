import Image from "next/image";
import contactNightOperative from "@/assets/images/contact-night-operative.webp";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function DispatchInfoCard() {
  return (
    <div className="flex flex-col gap-6 lg:col-span-5">
      <div className="relative flex flex-col gap-6 overflow-hidden rounded-xl bg-panel p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-mutedText">
            LINE // PRIORITY 01
          </span>
          <span className="inline-flex items-center gap-2 rounded bg-secondaryBg px-2 py-0.5 font-mono text-xs uppercase text-primaryNeon">
            <span className="h-1.5 w-1.5 rounded-full bg-primaryNeon" />
            Available 24/7
          </span>
        </div>

        <div>
          <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-mutedText">
            EMERGENCY HOTLINE
          </span>
          <a
            className="block font-display text-2xl font-bold tracking-tight text-primaryNeon shadow-sm transition-colors hover:text-secondaryNeon sm:text-3xl"
            href={SITE_PHONE_HREF}
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <span className="mt-1 block text-sm text-mutedText">Average operator pickup: Under 3 rings</span>
        </div>

        <div className="flex flex-col gap-4 pt-1">
          <div className="flex items-start gap-3 rounded bg-secondaryBg p-3">
            <span className="material-symbols-outlined mt-0.5 text-[20px] text-primaryNeon">mail</span>
            <div className="flex min-w-0 flex-col">
              <span className="font-mono text-xs uppercase tracking-wider text-mutedText">
                Direct Email Desk
              </span>
              <a
                className="truncate font-sans text-sm text-bodyText transition-colors hover:text-primaryNeon"
                href={SITE_EMAIL_HREF}
              >
                {SITE_EMAIL}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded bg-secondaryBg p-3">
            <span className="material-symbols-outlined mt-0.5 text-[20px] text-primaryNeon">near_me</span>
            <div className="flex min-w-0 flex-col">
              <span className="font-mono text-xs uppercase tracking-wider text-mutedText">
                Operational Base
              </span>
              <span className="font-sans text-sm text-bodyText">
                Bradford, UK (M62 / M606 Rapid Corridor)
              </span>
            </div>
          </div>
        </div>

        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded bg-primaryNeon px-5 py-3.5 font-mono text-sm uppercase tracking-wider text-white shadow-lg transition-all hover:brightness-110"
          href={SITE_PHONE_HREF}
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          CALL NOW • {SITE_PHONE_DISPLAY}
        </a>

        <div className="grid grid-cols-1 gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
          <a
            className="inline-flex items-center justify-center gap-2 rounded bg-secondaryBg px-4 py-3 font-mono text-xs font-bold uppercase text-secondaryNeon transition-colors hover:bg-secondaryBg/70"
            href="https://wa.me/447466354550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp GPS Pin
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded bg-secondaryBg px-4 py-3 font-mono text-xs font-bold uppercase text-bodyText transition-colors hover:bg-secondaryBg/70"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-[18px]">grid_4x4</span>
            what3words Grid
          </a>
        </div>
      </div>

      <div className="rounded-xl bg-panel p-6 shadow-md">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accentCyan">
          Rapid Fleet Equipment
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primaryNeon font-mono text-xs font-bold text-white">
              1
            </span>
            <div>
              <span className="block font-display text-sm font-bold text-bodyText">Spec-Lift &amp; Low-Approach Flatbeds</span>
              <span className="text-xs text-mutedText">Equipped for lowered chassis, EVs, AWDs &amp; stuck handbrakes.</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primaryNeon font-mono text-xs font-bold text-white">
              2
            </span>
            <div>
              <span className="block font-display text-sm font-bold text-bodyText">Roadside Jump &amp; Battery Boost</span>
              <span className="text-xs text-mutedText">Industrial 12v/24v auxiliary pack start and diagnostics.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-panel shadow-md">
        <div className="relative h-44 w-full">
          <Image
            alt="Night recovery operative securing a car wheel on a wet highway in Bradford"
            src={contactNightOperative}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/60 to-transparent p-4">
            <span className="font-mono text-xs uppercase tracking-widest text-secondaryNeon">
              DISPATCH UNIT ENGAGED
            </span>
            <span className="font-display text-base font-semibold text-bodyText">
              Trained tilt-slide specialists active across West Yorkshire
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
