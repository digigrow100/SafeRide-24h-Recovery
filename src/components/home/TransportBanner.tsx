import Image from "next/image";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import { SITE_EMAIL_HREF, SITE_PHONE_HREF } from "@/lib/site";

const CHECKLIST = [
  "Full auction yard credential clearance (BCA, Copart)",
  "Electric Vehicle (EV) dead-battery roll and winch protocol",
  "Comprehensive digital pre-transit photographic condition log",
] as const;

export default function TransportBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="overflow-hidden rounded-3xl border border-primaryNeon/30 bg-gradient-to-br from-secondaryBg to-panel shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-6 lg:p-14">
            <div>
              <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-widest text-accentCyan">
                Prestige Automotive Logistics
              </span>
              <h2 className="mb-6 font-display text-3xl font-black uppercase leading-tight tracking-tight text-bodyText sm:text-4xl">
                Moving Vehicles.{" "}
                <span className="neon-glow-magenta bg-gradient-to-r from-primaryNeon to-secondaryNeon bg-clip-text text-transparent">
                  Not Complications.
                </span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-mutedText">
                From high-value classic collections and auction purchases at BCA &amp; Copart, to
                prestige dealership trade swaps. Insured, non-running winch logistics,
                dealer-to-customer deliveries, and long-distance intercity transfers.
              </p>
              <div className="space-y-4">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-accentCyan">check_circle</span>
                    <span className="text-sm text-bodyText">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primaryNeon to-secondaryNeon px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-neon-magenta transition-all hover:brightness-110"
                href={SITE_PHONE_HREF}
              >
                <span className="material-symbols-outlined text-lg">phone</span>
                Book Fleet Transporter
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-subtleBorder px-6 py-3 font-mono text-xs uppercase tracking-wider text-bodyText transition-colors hover:border-primaryNeon"
                href={SITE_EMAIL_HREF}
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                Direct Logistics Quote
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:col-span-6">
            <Image
              alt="SafeRide vehicle transportation carrier securely loaded with an executive car"
              src={serviceVehicleTransport}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </div>
    </section>
  );
}
