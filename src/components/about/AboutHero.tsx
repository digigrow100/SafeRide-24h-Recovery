import Image from "next/image";
import aboutHeroOperator from "@/assets/images/about-hero-operator.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function AboutHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:pt-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primaryNeon shadow-[0_0_10px_#FF2BD6]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-secondaryNeon">
              ABOUT SAFERIDE // BRADFORD RESCUE
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-4xl font-black uppercase tracking-tight text-bodyText sm:text-5xl md:text-6xl">
              Here When <br />
              <span className="neon-glow-magenta text-primaryNeon">Bradford</span> Drivers <br />
              Need Help.
            </h1>
            <p className="max-w-xl font-sans text-lg text-mutedText">
              SafeRide 24h Recovery is an independent, dedicated vehicle rescue and specialized
              roadside engineering team based directly in Bradford. Designed specifically for
              uncompromised reliability across dark hours, adverse weather, and motorway
              emergencies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="rounded border border-secondaryNeon/25 bg-panel p-4">
              <span className="block font-mono text-xs uppercase tracking-wider text-mutedText">
                Rapid Dispatch
              </span>
              <span className="font-display text-xl font-bold text-primaryNeon drop-shadow-[0_0_12px_rgba(255,43,214,0.3)]">
                15–25 MINS
              </span>
              <span className="mt-1 block text-sm text-mutedText">Bradford &amp; M606 Spine</span>
            </div>
            <div className="rounded border border-secondaryNeon/25 bg-panel p-4">
              <span className="block font-mono text-xs uppercase tracking-wider text-mutedText">
                Operational Status
              </span>
              <span className="font-display text-xl font-bold text-secondaryNeon drop-shadow-[0_0_12px_rgba(139,92,255,0.3)]">
                365 DAYS
              </span>
              <span className="mt-1 block text-sm text-mutedText">Zero Call Queue Routing</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              className="inline-flex items-center justify-center gap-2 rounded bg-primaryNeon px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-neon-magenta transition-all hover:brightness-110"
              href={SITE_PHONE_HREF}
            >
              <span className="material-symbols-outlined text-lg">phone_in_talk</span>
              Speak With Dispatch
            </a>
            <span className="font-mono text-xs uppercase tracking-widest text-mutedText">
              LINE: {SITE_PHONE_DISPLAY}
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondaryBg shadow-2xl">
            <Image
              alt="SafeRide recovery operator beside a tilt-slide flatbed truck on a wet Bradford road at night"
              src={aboutHeroOperator}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded bg-bg/90 p-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-primaryNeon">verified</span>
                <span className="font-mono text-xs uppercase tracking-wider text-bodyText">
                  UNIT // 04 OPERATIONAL
                </span>
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-secondaryNeon">
                NIGHT DEPLOYED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
