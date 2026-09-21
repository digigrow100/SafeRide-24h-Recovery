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
    <section className="w-full bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-1 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
              Physical Base Operations
            </span>
            <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
              Bradford Strategic Depots &amp; Hubs
            </h2>
          </div>
          <div className="flex items-center gap-2 font-sans text-xs text-slate-500">
            <span className="h-2 w-2 rounded-full bg-blue-800" />
            Operating 24 Hours / 7 Days / 365 Days a Year
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DEPOTS.map((depot) => (
            <div key={depot.name} className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm">
              <div>
                <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 font-sans text-[10px] font-bold uppercase text-blue-800">
                  {depot.badge}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900">{depot.name}</h3>
                <p className="mt-1 font-sans text-xs font-bold text-blue-800">{depot.location}</p>
                <p className="mt-3 text-sm text-slate-500">{depot.description}</p>
              </div>
              <div className="mt-6 border-t border-black/10 pt-4">
                <span className="block font-sans text-[10px] uppercase text-slate-500">Primary Operations:</span>
                <span className="text-sm text-slate-900">{depot.ops}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between bg-slate-100 p-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-800">map</span>
              <span className="font-display text-sm font-bold text-slate-900">
                West Yorkshire Operational Headquarters &amp; Depots
              </span>
            </div>
            <span className="hidden font-sans text-xs text-slate-500 sm:inline">Rooley Lane, Bradford BD4</span>
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
