import Image from "next/image";
import heroRollbackTruck from "@/assets/images/hero-rollback-truck.webp";
import serviceBreakdownRecovery from "@/assets/images/service-breakdown-recovery.webp";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import galleryWinchHardware from "@/assets/images/gallery-winch-hardware.webp";
import serviceCarRecovery from "@/assets/images/service-car-recovery.webp";

const FRAMES = [
  {
    span: "md:col-span-7",
    height: "h-[420px]",
    hoverBorder: "hover:border-blue-800",
    frame: "FRAME 01",
    frameColor: "text-blue-800",
    title: "Car Recovery in Bradford",
    time: undefined,
    alt: "Recovery truck at night on a wet UK road",
    image: heroRollbackTruck,
  },
  {
    span: "md:col-span-5",
    height: "h-[420px]",
    hoverBorder: "hover:border-slate-700",
    frame: "FRAME 02",
    frameColor: "text-slate-700",
    title: "Roadside Breakdown Recovery",
    time: undefined,
    alt: "Breakdown engineer working under the bonnet at night",
    image: serviceBreakdownRecovery,
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-emerald-600",
    frame: "FRAME 03",
    frameColor: "text-emerald-600",
    title: "Safe Vehicle Transportation",
    time: undefined,
    alt: "Car transporter driving on the motorway",
    image: serviceVehicleTransport,
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-blue-800",
    frame: "FRAME 04",
    frameColor: "text-blue-800",
    title: "24-Hour Recovery Assistance",
    time: undefined,
    alt: "Close-up of a heavy-duty steel recovery winch hook",
    image: galleryWinchHardware,
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-slate-700",
    frame: "FRAME 05",
    frameColor: "text-slate-700",
    title: "Vehicle Loading and Transport",
    time: undefined,
    alt: "Car being tilt-slide loaded onto a flatbed",
    image: serviceCarRecovery,
  },
] as const;

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="gallery">
      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-blue-800">
            Our Recovery Work
          </span>
          <h2 className="font-display text-4xl font-black uppercase text-slate-900 sm:text-5xl">
            Helping Drivers Across Bradford
          </h2>
        </div>
        <p className="min-w-0 max-w-md text-sm text-slate-500">
          Our vehicle recovery and transportation services are available for roadside
          breakdowns, non-running vehicles and planned journeys.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {FRAMES.map((item) => (
          <div
            key={item.frame}
            className={`group relative overflow-hidden rounded-2xl border border-slate-200 transition-all ${item.span} ${item.height} ${item.hoverBorder}`}
          >
            <Image
              alt={item.alt}
              src={item.image}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className={`font-sans text-[10px] font-bold uppercase tracking-widest ${item.frameColor}`}>
                  {item.frame}
                </span>
                <h4 className="font-display text-lg font-bold text-slate-900">{item.title}</h4>
              </div>
              {item.time ? <span className="font-sans text-xs text-slate-500">{item.time}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
