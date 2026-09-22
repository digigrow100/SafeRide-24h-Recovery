import servicesCarRecoveryDetail from "@/assets/images/services-car-recovery-detail.webp";
import servicesBreakdownDetail from "@/assets/images/services-breakdown-detail.webp";
import serviceVehicleTransport from "@/assets/images/service-vehicle-transport.webp";
import servicesRoadsideDetail from "@/assets/images/services-roadside-detail.webp";
import ServiceDetailRow from "./ServiceDetailRow";

const ROADSIDE_ITEMS = [
  { icon: "bolt", label: "12V Battery Boost" },
  { icon: "tire_repair", label: "Wheel & Tire Change" },
  { icon: "key", label: "Vehicle Entry Lockout" },
  { icon: "local_gas_station", label: "Emergency Fuel Run" },
] as const;

export default function ServiceDetails() {
  return (
    <section className="mx-auto max-w-7xl space-y-24 px-4 pb-24 sm:px-6 md:space-y-36">
      <ServiceDetailRow
        imageFirst
        accent="primary"
        number="01"
        eyebrow="EMERGENCY DISPATCH"
        title="24/7 Car Recovery"
        description="Professional recovery for stranded vehicles day and night. Quick dispatch and careful handling for all vehicle makes and chassis setups, ensuring your car is brought to safety without secondary damage."
        image={servicesCarRecoveryDetail}
        imageAlt="Car being winched onto a specialized tilt-slide recovery flatbed truck at night"
        ctaLabel="CALL FOR CAR RECOVERY"
      >
        <ul className="mb-8 w-full space-y-3">
          {["Recovery for stranded vehicles", "Available day and night 24/7", "Fast assistance across your local area"].map(
            (item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-800/40 bg-blue-800/10 text-blue-800">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span className="text-sm text-slate-900 md:text-base">{item}</span>
              </li>
            ),
          )}
        </ul>
      </ServiceDetailRow>

      <ServiceDetailRow
        imageFirst={false}
        accent="secondary"
        number="02"
        eyebrow="ROADSIDE & MOTORWAY"
        title="Breakdown Recovery"
        description="Drivers can call SafeRide when their vehicle breaks down and requires rapid recovery assistance. Whether you are immobilized on a motorway, city junctions, or residential streets, our technicians arrive equipped to secure and transport your vehicle immediately."
        image={servicesBreakdownDetail}
        imageAlt="Roadside recovery operator inspecting an immobilized car at night"
        ctaLabel="GET BREAKDOWN HELP"
      >
        <div className="mb-8 w-full max-w-md rounded border border-slate-700/20 bg-white p-4">
          <p className="mb-1 font-sans text-xs text-slate-700">DISPATCH COVERAGE</p>
          <p className="text-sm text-slate-900">
            Immediate deployment to your local area and connecting motorway corridors.
          </p>
        </div>
      </ServiceDetailRow>

      <ServiceDetailRow
        imageFirst
        accent="primary"
        number="03"
        eyebrow="LOGISTICS & TRANSIT"
        title="Vehicle Transportation"
        description="Planned and scheduled carriage for vehicles requiring secure transit locally and nationwide. We manage trade transports, private acquisitions, auction collections, and body shop relocations using purpose-built vehicle transporters equipped with low-angle loading ramps."
        image={serviceVehicleTransport}
        imageAlt="Automotive carrier securely loaded with an executive vehicle"
        ctaLabel="ASK ABOUT VEHICLE TRANSPORT"
      >
        <div className="mb-8 grid w-full max-w-md grid-cols-2 gap-4">
          <div className="rounded border border-slate-700/15 bg-white p-3.5">
            <span className="mb-1 block font-sans text-xs text-blue-800">DEALER &amp; PRIVATE</span>
            <span className="text-sm font-medium text-slate-900">Scheduled transfer</span>
          </div>
          <div className="rounded border border-slate-700/15 bg-white p-3.5">
            <span className="mb-1 block font-sans text-xs text-blue-800">SPECIALIZED RAMP</span>
            <span className="text-sm font-medium text-slate-900">Low clearance safe</span>
          </div>
        </div>
      </ServiceDetailRow>

      <ServiceDetailRow
        imageFirst={false}
        accent="secondary"
        number="04"
        eyebrow="ON-SITE FIX"
        title="Roadside Assistance"
        description="Immediate roadside help designed to resolve common immobilizing faults without a tow whenever safe to do so. Our mobile units assist with flat tire wheel changes, 12V battery jump-starts, misfueling recovery, and lockout support across the local area."
        image={servicesRoadsideDetail}
        imageAlt="Roadside mechanic attending to a car on wet tarmac at night"
        ctaLabel="CALL FOR ROADSIDE HELP"
      >
        <ul className="mb-8 grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
          {ROADSIDE_ITEMS.map((item) => (
            <li key={item.label} className="flex items-center gap-2.5 text-sm text-slate-900">
              <span className="material-symbols-outlined text-base text-slate-700">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </ServiceDetailRow>
    </section>
  );
}
