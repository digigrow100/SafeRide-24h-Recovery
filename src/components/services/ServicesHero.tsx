import Image from "next/image";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-secondaryNeon/15 px-4 py-12 sm:px-6 md:py-20">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primaryNeon/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-secondaryNeon/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col items-start lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-primaryNeon/30 bg-panel px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primaryNeon shadow-[0_0_8px_#FF2BD6]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primaryNeon">
              OUR SERVICES
            </span>
          </div>
          <h1 className="mb-6 font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-bodyText sm:text-4xl md:text-5xl lg:text-[52px]">
            Vehicle Recovery &amp;{" "}
            <span className="bg-gradient-to-r from-primaryNeon via-secondaryNeon to-secondaryNeon bg-clip-text text-transparent">
              Roadside Assistance
            </span>
          </h1>
          <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-mutedText sm:text-lg">
            SafeRide 24h Recovery provides vehicle recovery, breakdown assistance, vehicle
            transportation and roadside help across Bradford and adjacent corridors.
          </p>
          <a
            className="inline-flex items-center gap-3 rounded bg-primaryNeon px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-bg shadow-neon-magenta transition-all hover:-translate-y-0.5"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-lg">emergency</span>
            <span>CALL FOR HELP ({SITE_PHONE_DISPLAY})</span>
          </a>
        </div>

        <div className="relative lg:col-span-5">
          <div className="group relative overflow-hidden rounded-lg border border-secondaryNeon/20 bg-panel">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            <Image
              alt="SafeRide 24h Recovery flatbed truck stationed on a British highway at twilight"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6j7zIhPYahtUsl-MafKaIHYL4ZAn-pwlqP8STyzqEyIkBtMildVuCAFF0V9RA31TuOWq7Z2dNU4eoecOT-GyTmOODzkLBBb2DglR8Xwn_OaZnBLcRYmtWmUyLnifY5khVFVncZzmHvcwsu0xkfL3zLs0mDtPqUDQ2_PqHnT3EOaonGdH0z8wDkgBb-tMuSKcQAWrYBKtvwE0gUh7jE-x6WgBLnlvsGw6LY6tRSBLFbOhFvbNBdcHn"
              width={640}
              height={480}
              priority
              className="h-80 w-full transform object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 sm:h-96"
            />
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded border border-secondaryNeon/20 bg-bg/90 px-3 py-1.5">
              <span className="material-symbols-outlined text-sm text-secondaryNeon">fmd_good</span>
              <span className="font-mono text-xs text-bodyText">Bradford Metropolitan Base</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
