import Image from "next/image";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const SUITABLE_FOR = [
  "Vehicle Purchases",
  "Garage Deliveries",
  "Dealership Transfers",
  "Non-Running Vehicles",
  "Private Vehicle Relocation",
  "Local and Long-Distance Transport",
] as const;

export default function TransportBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="overflow-hidden rounded-3xl border border-blue-800/30 bg-gradient-to-br from-secondaryBg to-panel shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-6 lg:p-14">
            <div>
              <span className="mb-3 block font-sans text-xs font-bold uppercase tracking-widest text-emerald-600">
                Planned Vehicle Transport
              </span>
              <h2 className="mb-6 font-display text-3xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Safe Vehicle Transportation{" "}
                <span className="text-blue-800">Without the Stress.</span>
              </h2>
              <div className="mb-8 space-y-4 text-base leading-relaxed text-slate-500">
                <p>
                  Vehicle transportation is not only for emergencies. You may need to move a
                  newly purchased car, deliver a vehicle to a garage or transport a non-running
                  vehicle between locations.
                </p>
                <p>
                  SafeRide offers planned vehicle transportation locally and across the UK.
                  Contact us with the collection address, delivery address and vehicle details to
                  request a quote.
                </p>
              </div>
              <span className="mb-3 block font-sans text-xs font-bold uppercase tracking-widest text-slate-900">
                Suitable For:
              </span>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SUITABLE_FOR.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-emerald-600">check_circle</span>
                    <span className="text-sm text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 border-t border-black/10 pt-6">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 hover:bg-amber-700 px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all "
                href={SITE_PHONE_HREF}
              >
                <span className="material-symbols-outlined text-lg">phone</span>
                Request a Transport Quote
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 font-sans text-xs uppercase tracking-wider text-slate-900 transition-colors hover:border-blue-800"
                href={SITE_PHONE_HREF}
              >
                <span className="material-symbols-outlined text-lg">phone</span>
                Call {SITE_PHONE_DISPLAY}
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </div>
    </section>
  );
}
