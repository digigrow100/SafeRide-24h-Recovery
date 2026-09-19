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
    hoverBorder: "hover:border-primaryNeon",
    frame: "FRAME 01 // M62 VERGE",
    frameColor: "text-primaryNeon",
    title: "Rain-Slicked Urban Extraction",
    time: "02:40 AM",
    alt: "Recovery truck at night on a wet UK road",
    image: heroRollbackTruck,
  },
  {
    span: "md:col-span-5",
    height: "h-[420px]",
    hoverBorder: "hover:border-secondaryNeon",
    frame: "FRAME 02 // ENGINE BAY",
    frameColor: "text-secondaryNeon",
    title: "Suburban Diagnostic Scan",
    time: "03:15 AM",
    alt: "Breakdown engineer working under the bonnet at night",
    image: serviceBreakdownRecovery,
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-accentCyan",
    frame: "FRAME 03 // MOTORWAY RELAY",
    frameColor: "text-accentCyan",
    title: "Long-Distance Transit",
    time: undefined,
    alt: "Car transporter driving on the motorway",
    image: serviceVehicleTransport,
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-primaryNeon",
    frame: "FRAME 04 // HARDWARE",
    frameColor: "text-primaryNeon",
    title: "High-Tension Steel Couplers",
    time: undefined,
    alt: "Close-up of a heavy-duty steel recovery winch hook",
    image: galleryWinchHardware,
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-secondaryNeon",
    frame: "FRAME 05 // LOW ANGLE DECK",
    frameColor: "text-secondaryNeon",
    title: "Zero-Splitter Loading",
    time: undefined,
    alt: "Car being tilt-slide loaded onto a flatbed",
    image: serviceCarRecovery,
  },
] as const;

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="gallery">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primaryNeon">
            // 03 CAMPAIGN SPREAD
          </span>
          <h2 className="font-display text-4xl font-black uppercase text-bodyText sm:text-5xl">
            NOCTURNAL DOCUMENTARY
          </h2>
        </div>
        <p className="max-w-md text-sm text-mutedText">
          Unfiltered captures of SafeRide fleet units navigating rainfall, motorway interchanges,
          and night breakdowns across Bradford and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {FRAMES.map((item) => (
          <div
            key={item.frame}
            className={`group relative overflow-hidden rounded-2xl border border-subtleBorder transition-all ${item.span} ${item.height} ${item.hoverBorder}`}
          >
            <Image
              alt={item.alt}
              src={item.image}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${item.frameColor}`}>
                  {item.frame}
                </span>
                <h4 className="font-display text-lg font-bold text-bodyText">{item.title}</h4>
              </div>
              {item.time ? <span className="font-mono text-xs text-mutedText">{item.time}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
