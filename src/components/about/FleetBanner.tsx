import Image from "next/image";
import aboutFleetBanner from "@/assets/images/about-fleet-banner.webp";

export default function FleetBanner() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden bg-secondaryBg sm:h-[520px]">
      <Image
        alt="SafeRide 24h night recovery carrier on the motorway"
        src={aboutFleetBanner}
        fill
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded border border-primaryNeon/30 bg-panel/85 px-3 py-1 backdrop-blur">
              <span className="h-2 w-2 animate-ping rounded-full bg-primaryNeon" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
                PATROL FLEET ACTIVE
              </span>
            </div>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-bodyText sm:text-6xl">
              24 Hours A Day <br />
              <span className="neon-glow-magenta text-primaryNeon">7 Days A Week</span>
            </h2>
            <p className="font-sans text-lg text-mutedText">
              From the peak of Queensbury down through the M606 corridor, our specialized
              flatbeds operate continuously through rain, snow, and dense West Yorkshire night
              fog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
