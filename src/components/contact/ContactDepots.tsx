import Image from "next/image";
import contactCoverageMapArea from "@/assets/images/contact-coverage-map-area.webp";

const DEPOTS = [
  {
    name: "Bradford Central Depot",
    badge: "Logistics Headquarters",
    location: "Rooley Lane Corridor, Bradford BD4",
    description:
      "Main secure storage yard, dual-winch slide-bed transporter fleet, heavy wheel-lift units, and administrative transport logging.",
    ops: "Emergency Car Storage • Auction Bulk Transit",
  },
  {
    name: "North Bradford Rapid Hub",
    badge: "Rapid Intercept",
    location: "Canal Road Corridor, Shipley BD18",
    description:
      "Fast-reaction diagnostic vans and spec-lift patrol trucks primed for urban BD9, BD17, BD18, Baildon, and Aire Valley transit corridors.",
    ops: "Roadside Jumpstarts • Flatbed Deployments",
  },
  {
    name: "Motorway Intercept Post",
    badge: "Highway Response",
    location: "M606 Junction 3 / M62 Junction 26",
    description:
      "Dedicated high-visibility patrol units providing rapid hard-shoulder clearance, motorway escort, and emergency winching operations.",
    ops: "Trans-Pennine M62 • A650 Drighlington",
  },
] as const;

export default function ContactDepots() {
  return (
    <section className="w-full bg-secondaryBg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-1 block font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
              Physical Base Operations
            </span>
            <h2 className="font-display text-2xl font-bold text-bodyText md:text-3xl">
              Bradford Strategic Depots &amp; Hubs
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-mutedText">
            <span className="h-2 w-2 rounded-full bg-primaryNeon" />
            Operating 24 Hours / 7 Days / 365 Days a Year
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DEPOTS.map((depot) => (
            <div key={depot.name} className="flex flex-col justify-between rounded-xl bg-panel p-6 shadow-sm">
              <div>
                <span className="mb-3 inline-block rounded-full bg-secondaryBg px-3 py-1 font-mono text-[10px] font-bold uppercase text-primaryNeon">
                  {depot.badge}
                </span>
                <h3 className="font-display text-lg font-bold text-bodyText">{depot.name}</h3>
                <p className="mt-1 font-mono text-xs font-bold text-primaryNeon">{depot.location}</p>
                <p className="mt-3 text-sm text-mutedText">{depot.description}</p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="block font-mono text-[10px] uppercase text-mutedText">Primary Operations:</span>
                <span className="text-sm text-bodyText">{depot.ops}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-panel shadow-sm">
          <div className="flex items-center justify-between bg-secondaryBg p-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primaryNeon">map</span>
              <span className="font-display text-sm font-bold text-bodyText">
                West Yorkshire Operational Headquarters &amp; Depots
              </span>
            </div>
            <span className="hidden font-mono text-xs text-mutedText sm:inline">Rooley Lane, Bradford BD4</span>
          </div>
          <div className="relative h-64 w-full sm:h-80">
            <Image
              alt="Map of Bradford, West Yorkshire recovery coverage area"
              src={contactCoverageMapArea}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
