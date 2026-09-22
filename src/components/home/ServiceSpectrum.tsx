import Image from "next/image";
import serviceCarRecovery from "@/assets/images/service-car-recovery.webp";
import serviceBreakdownRecovery from "@/assets/images/service-breakdown-recovery.webp";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import serviceRoadsideAssistance from "@/assets/images/service-roadside-assistance.webp";
import { SITE_PHONE_HREF } from "@/lib/site";

const SERVICES = [
  {
    title: "24/7 Car Recovery",
    description: "Moving your car to a safe location, any time, day or night.",
    button: "GET CAR RECOVERY",
    image: serviceCarRecovery,
    alt: "24/7 car recovery hydraulic tilt-slide flatbed truck",
  },
  {
    title: "Breakdown Recovery",
    description: "Safe roadside recovery when your vehicle cannot continue its journey.",
    button: "REQUEST BREAKDOWN RECOVERY",
    image: serviceBreakdownRecovery,
    alt: "Breakdown recovery technician diagnosing a vehicle at night",
  },
  {
    title: "Vehicle Transportation",
    description: "Local and long-distance transport for running and non-running vehicles.",
    button: "GET A TRANSPORT QUOTE",
    image: serviceVehicleTransport,
    alt: "Vehicle transportation carrier loaded with an executive car",
  },
  {
    title: "Roadside Assistance",
    description: "On-the-spot help, with recovery arranged if your vehicle cannot be made safe to drive.",
    button: "REQUEST ROADSIDE HELP",
    image: serviceRoadsideAssistance,
    alt: "Roadside assistance technician on the hard shoulder at night",
  },
] as const;

export default function ServiceSpectrum() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8" id="services">
      <div className="mb-12 space-y-3 text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
          Our Services
        </span>
        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl">
          Vehicle Recovery Services
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-100 p-5 transition-colors hover:border-blue-800"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-xl">
              <Image
                alt={service.alt}
                src={service.image}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900">{service.title}</h3>
            <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
            <a
              href={SITE_PHONE_HREF}
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-blue-800/10 px-4 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-blue-800 transition-colors hover:bg-blue-800 hover:text-white"
            >
              {service.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
