import Image from "next/image";
import aboutHeroOperator from "@/assets/images/about-hero-operator.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function AboutHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:pt-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-800 shadow-sm" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-700">
              ABOUT SAFERIDE // BRADFORD RESCUE
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Here When <br />
              <span className=" text-blue-800">Bradford</span> Drivers <br />
              Need Help.
            </h1>
            <p className="max-w-xl font-sans text-lg text-slate-500">
              SafeRide 24h Recovery is an independent, dedicated vehicle rescue and specialized
              roadside engineering team based directly in Bradford. Designed specifically for
              uncompromised reliability across dark hours, adverse weather, and motorway
              emergencies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="rounded border border-slate-700/25 bg-white p-4">
              <span className="block font-sans text-xs uppercase tracking-wider text-slate-500">
                Rapid Dispatch
              </span>
              <span className="font-display text-xl font-bold text-blue-800 ">
                15–25 MINS
              </span>
              <span className="mt-1 block text-sm text-slate-500">Bradford &amp; M606 Spine</span>
            </div>
            <div className="rounded border border-slate-700/25 bg-white p-4">
              <span className="block font-sans text-xs uppercase tracking-wider text-slate-500">
                Operational Status
              </span>
              <span className="font-display text-xl font-bold text-slate-700 ">
                365 DAYS
              </span>
              <span className="mt-1 block text-sm text-slate-500">Zero Call Queue Routing</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              className="inline-flex items-center justify-center gap-2 rounded bg-amber-600 px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-amber-700 "
              href={SITE_PHONE_HREF}
            >
              <span className="material-symbols-outlined text-lg">phone_in_talk</span>
              Speak With Dispatch
            </a>
            <span className="font-sans text-xs uppercase tracking-widest text-slate-500">
              LINE: {SITE_PHONE_DISPLAY}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
            {[
              { icon: "verified_user", label: "PAS 43", sub: "Accredited Rescue" },
              { icon: "engineering", label: "IVR Trained", sub: "Master Operators" },
              { icon: "policy", label: "DVSA", sub: "Licensed Operator" },
              { icon: "shield_with_heart", label: "£100k Cover", sub: "Goods-In-Transit" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-3">
                <span className="material-symbols-outlined text-blue-800">{badge.icon}</span>
                <div className="flex flex-col leading-tight">
                  <span className="font-sans text-[11px] font-bold text-slate-900">{badge.label}</span>
                  <span className="text-[10px] text-slate-500">{badge.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xl">
            <Image
              alt="SafeRide recovery operator beside a tilt-slide flatbed truck on a wet Bradford road at night"
              src={aboutHeroOperator}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded bg-slate-50/90 p-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-blue-800">verified</span>
                <span className="font-sans text-xs uppercase tracking-wider text-slate-900">
                  UNIT // 04 OPERATIONAL
                </span>
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">
                NIGHT DEPLOYED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
