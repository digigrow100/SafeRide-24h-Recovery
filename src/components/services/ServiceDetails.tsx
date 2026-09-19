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
        description="Professional recovery for stranded vehicles day and night across Bradford. Quick dispatch and careful handling for all vehicle makes and chassis setups, ensuring your car is brought to safety without secondary damage."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuC9aAe_Jw5NpcxrTb53Tzd73j_iOQzqPaT0jHkUPL42DfVr_1hUPmGQkSd5rT0xjNxFUAa1kagLW_2wBU8nWNPTxVYNB2pcF-Ax90S56ZG86CWD_6zL8STEemcnPUsDGtQidC2TMA8oooEBdPdZaX_z3N-VH6YvZMLxBItpfQNs5FSAPysI5gGhL5mvWdXVfWoLOrOoB3Ru1iTijYxKUcgGDDYjo-rjBXeMw1ijRVnSpSy-38i3GwxZ"
        imageAlt="Car being winched onto a specialized tilt-slide recovery flatbed truck at night"
        ctaLabel="CALL FOR CAR RECOVERY"
      >
        <ul className="mb-8 w-full space-y-3">
          {["Recovery for stranded vehicles", "Available day and night 24/7", "Fast assistance across Bradford & key corridors"].map(
            (item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primaryNeon/40 bg-primaryNeon/10 text-primaryNeon">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span className="text-sm text-bodyText md:text-base">{item}</span>
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
        description="Drivers can call SafeRide when their vehicle breaks down and requires rapid recovery assistance. Whether you are immobilized on major arterial roads like the M606/M62, city junctions, or residential streets, our technicians arrive equipped to secure and transport your vehicle immediately."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDk8THoGX0aPBAyBcwrWs4_PYOeDCqFd61EPicKEOGesuf9l8VTtmV4lJ47oLdxjMqXqBiQ3GUvMAPe0Bqvr8Uvrg1VWoRWNv1Z_cL5SUav5uEGCmynwLYSqPr0GB_ZlzrdnLNoNSzlS80munt350G6OeOBxgHlAZ6cvQt8kQmcU0xnojKXPNjC3G0K6Mm6w-Xi6egLtzdJITIvUxc0okV-MQV9F0-uRYj7f7vXmPjP09MaSfsDbCAe"
        imageAlt="Roadside recovery operator inspecting an immobilized car at night"
        ctaLabel="GET BREAKDOWN HELP"
      >
        <div className="mb-8 w-full max-w-md rounded border border-secondaryNeon/20 bg-panel p-4">
          <p className="mb-1 font-mono text-xs text-secondaryNeon">DISPATCH COVERAGE</p>
          <p className="text-sm text-bodyText">
            Immediate deployment to Bradford, Shipley, Pudsey, and connecting motorway corridors.
          </p>
        </div>
      </ServiceDetailRow>

      <ServiceDetailRow
        imageFirst
        accent="primary"
        number="03"
        eyebrow="LOGISTICS & TRANSIT"
        title="Vehicle Transportation"
        description="Planned and scheduled carriage for vehicles requiring secure transit across West Yorkshire and nationwide. We manage trade transports, private acquisitions, auction collections, and body shop relocations using purpose-built vehicle transporters equipped with low-angle loading ramps."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDTNg_u6lmHUceqpIPKZiXdHDwttrSv1VnJGQcu_bFV8Vo4I_mL2TiW2TYgRvTAZZHuW2iUezu84TrvTF00SSM2UeGhsXK4DBhEMrr9sVeDUutY_6WCfgtUTl4im88knLKH27DI4CV4Khv3lKZA0lfue9X86eQKj8vS9SfSCu0Ts8wWtDz4VhmEpeCdmNlDA1uTMT6ZM_YVvEhk0o56u18qBS_7B-0xnGuX3AfM427_AJLuU1Wcwuzd"
        imageAlt="Automotive carrier securely loaded with an executive vehicle"
        ctaLabel="ASK ABOUT VEHICLE TRANSPORT"
      >
        <div className="mb-8 grid w-full max-w-md grid-cols-2 gap-4">
          <div className="rounded border border-secondaryNeon/15 bg-panel p-3.5">
            <span className="mb-1 block font-mono text-xs text-primaryNeon">DEALER &amp; PRIVATE</span>
            <span className="text-sm font-medium text-bodyText">Scheduled transfer</span>
          </div>
          <div className="rounded border border-secondaryNeon/15 bg-panel p-3.5">
            <span className="mb-1 block font-mono text-xs text-primaryNeon">SPECIALIZED RAMP</span>
            <span className="text-sm font-medium text-bodyText">Low clearance safe</span>
          </div>
        </div>
      </ServiceDetailRow>

      <ServiceDetailRow
        imageFirst={false}
        accent="secondary"
        number="04"
        eyebrow="ON-SITE FIX"
        title="Roadside Assistance"
        description="Immediate roadside help designed to resolve common immobilizing faults without a tow whenever safe to do so. Our mobile units assist with flat tire wheel changes, 12V battery jump-starts, misfueling recovery, and lockout support across metropolitan Bradford."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuA7KmZiQcJEqE6IHMGWy2IQK3y1CYFlyIjrjoD3j2RZzc9a7sEOJR6M6hTA_iK-KBapsgZ5WkYiuxLif7wkGN6NDa7hZIgrnYVyyob0koSMmujmg_pDdUokB89inpjQqNT8flUG8hn9Rw2jfGiLYdz2U7uAJ5-KUZ8pFOKtf-cM1HmUpUjaNRW8Gt5B2cQAIKEl1Eu7YTZQgasFhU-G11ddabHfH4BLPeHdWY-Ljo7cJLxl6kJna_HZ"
        imageAlt="Roadside mechanic attending to a car on wet tarmac at night"
        ctaLabel="CALL FOR ROADSIDE HELP"
      >
        <ul className="mb-8 grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
          {ROADSIDE_ITEMS.map((item) => (
            <li key={item.label} className="flex items-center gap-2.5 text-sm text-bodyText">
              <span className="material-symbols-outlined text-base text-secondaryNeon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </ServiceDetailRow>
    </section>
  );
}
