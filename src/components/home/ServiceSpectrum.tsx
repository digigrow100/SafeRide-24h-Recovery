import Image from "next/image";
import serviceCarRecovery from "@/assets/images/service-car-recovery.webp";
import serviceBreakdownRecovery from "@/assets/images/service-breakdown-recovery.webp";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import serviceRoadsideAssistance from "@/assets/images/service-roadside-assistance.webp";
import { SITE_PHONE_HREF } from "@/lib/site";

const ACCENTS = {
  primary: {
    hoverBorder: "hover:border-blue-800",
    hoverShadow: "hover:shadow-sm",
    badge: "bg-blue-800/20 border-blue-800/40 text-blue-800",
    button: "bg-blue-800/10 text-blue-800 hover:bg-blue-800 hover:text-white",
  },
  secondary: {
    hoverBorder: "hover:border-slate-700",
    hoverShadow: "hover:shadow-sm",
    badge: "bg-slate-700/20 border-slate-700/40 text-slate-700",
    button: "bg-slate-700/10 text-slate-700 hover:bg-slate-700 hover:text-white",
  },
  cyan: {
    hoverBorder: "hover:border-emerald-600",
    hoverShadow: "hover:shadow-sm",
    badge: "bg-emerald-600/20 border-emerald-600/40 text-emerald-600",
    button: "bg-emerald-600/10 text-emerald-600 hover:bg-emerald-600 hover:text-white",
  },
} as const;

const SERVICES = [
  {
    accent: "primary",
    tag: "SERVICE 01",
    title: "24/7 Car Recovery",
    description:
      "If your car cannot be driven, our 24/7 car recovery service can move it to your home, a local garage or another safe location. We assist drivers throughout Bradford and the surrounding areas. Call us at any time and provide your location, vehicle details and preferred destination.",
    button: "GET CAR RECOVERY",
    image: serviceCarRecovery,
    alt: "24/7 car recovery hydraulic tilt-slide flatbed truck",
  },
  {
    accent: "secondary",
    tag: "SERVICE 02",
    title: "Breakdown Recovery",
    description:
      "If your vehicle has broken down and cannot continue its journey, we can recover it safely from the roadside. Our breakdown recovery service is available for many common situations, including vehicles that will not start, mechanical problems and unexpected faults while travelling.",
    button: "REQUEST BREAKDOWN RECOVERY",
    image: serviceBreakdownRecovery,
    alt: "Breakdown recovery technician diagnosing a vehicle at night",
  },
  {
    accent: "primary",
    tag: "SERVICE 03",
    title: "Vehicle Transportation",
    description:
      "Need to move a vehicle without driving it? We provide vehicle transportation for private owners, dealerships, garages and vehicle buyers. We can transport running and non-running vehicles locally or over longer distances. This service is suitable for vehicle purchases, garage deliveries, relocations and planned transport.",
    button: "GET A TRANSPORT QUOTE",
    image: serviceVehicleTransport,
    alt: "Vehicle transportation carrier loaded with an executive car",
  },
  {
    accent: "cyan",
    tag: "SERVICE 04",
    title: "Roadside Assistance",
    description:
      "Some vehicle problems may be handled at the roadside. Our team will assess the situation and provide suitable assistance where possible. If the vehicle cannot be made safe to drive, we can arrange recovery to your home, garage or another chosen destination.",
    button: "REQUEST ROADSIDE HELP",
    image: serviceRoadsideAssistance,
    alt: "Roadside assistance technician on the hard shoulder at night",
  },
] as const;

export default function ServiceSpectrum() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8" id="services">
      <div className="mb-16 space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            Our Services
          </span>
          <div className="h-[1px] w-20 bg-blue-800/40" />
        </div>
        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl">
          Vehicle Recovery Services in Bradford
        </h2>
        <p className="max-w-xl text-sm text-slate-500">
          We provide four main services to help drivers, vehicle owners, garages and businesses.
          Tell us your location and vehicle problem, and we will explain the most suitable
          option.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {SERVICES.map((service, index) => {
          const accent = ACCENTS[service.accent];
          const imageFirst = index % 2 === 0;
          return (
            <div
              key={service.title}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`relative lg:col-span-7 ${imageFirst ? "order-1" : "order-1 lg:order-2"}`}
              >
                <div
                  className={`group relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl transition-all duration-500 sm:h-96 ${accent.hoverBorder} ${accent.hoverShadow}`}
                >
                  <Image
                    alt={service.alt}
                    src={service.image}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
              </div>

              <div
                className={`flex flex-col gap-4 lg:col-span-5 ${imageFirst ? "order-2" : "order-2 lg:order-1"}`}
              >
                <span
                  className={`inline-block w-fit rounded border px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-widest ${accent.badge}`}
                >
                  {service.tag}
                </span>
                <h3 className="font-display text-3xl font-bold uppercase text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
                <a
                  href={SITE_PHONE_HREF}
                  className={`inline-flex w-fit items-center gap-2 rounded-lg px-5 py-3 font-sans text-xs font-bold uppercase tracking-widest transition-colors ${accent.button}`}
                >
                  {service.button}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
