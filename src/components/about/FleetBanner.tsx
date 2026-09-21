import Image from "next/image";
import aboutFleetBanner from "@/assets/images/about-fleet-banner.webp";

export default function FleetBanner() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden bg-slate-100 sm:h-[520px]">
      <Image
        alt="SafeRide 24h night recovery carrier on the motorway"
        src={aboutFleetBanner}
        fill
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60/70 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded border border-blue-800/30 bg-white/85 px-3 py-1 backdrop-blur">
              <span className="h-2 w-2 animate-ping rounded-full bg-blue-800" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
                PATROL FLEET ACTIVE
              </span>
            </div>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-6xl">
              24 Hours A Day <br />
              <span className=" text-blue-800">7 Days A Week</span>
            </h2>
            <p className="font-sans text-lg text-slate-500">
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
