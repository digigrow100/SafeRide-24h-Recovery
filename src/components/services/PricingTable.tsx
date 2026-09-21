const ROWS = [
  {
    scenario: "Bradford Urban Tow (Mechanical Failure)",
    note: "BD1 to BD9 local depot or home",
    equipment: "3.5T Hydraulic Tilt-Bed + Soft Straps",
    target: "20 – 30 Mins",
    profile: "Standard Passenger Cars",
    rate: "From £65",
  },
  {
    scenario: "Motorway Incident Extraction (M606 / M62)",
    note: "Hard shoulder or refuge area safety load",
    equipment: "7.5T Heavy Crew-Cab Transporter + Hi-Vis Strobes",
    target: "20 – 35 Mins",
    profile: "High-Risk Live Corridor",
    rate: "From £95",
  },
  {
    scenario: "Low-Rake / Supercar / Lowered Coilovers",
    note: "Under 80mm ride height non-scrape loading",
    equipment: "Extruded Extension Ramps (5.8° Rake Angle)",
    target: "30 – 45 Mins",
    profile: "Zero-Underbody Clearance",
    rate: "From £110",
  },
  {
    scenario: "Commercial Auction Single Transport",
    note: "BCA / Copart handover",
    equipment: "Enclosed or Open Spec + Digital 360° Log",
    target: "Scheduled Window",
    profile: "Non-Runner Capable Winch",
    rate: "From £85",
  },
  {
    scenario: "Roadside Battery Surge / Jumpstart / Lockout",
    note: "Non-tow rapid roadside first-fix",
    equipment: "Rapid Intervention Service Van",
    target: "15 – 25 Mins",
    profile: "On-Site Completion",
    rate: "From £45",
  },
] as const;

export default function PricingTable() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="mb-2 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
            No Hidden Fees &bull; Fixed Agreed Quotes
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900 sm:text-4xl">
            Standard Incident Triage &amp; Rates
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-500">
          Rates are transparently quoted before our truck rolls. No midnight multiplier penalties
          or unauthorized mileage surprises.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-700/15 bg-white">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-black/10 bg-slate-100 font-sans text-xs uppercase tracking-wider text-slate-500">
              <th className="px-6 py-4">Incident Scenario</th>
              <th className="px-6 py-4">Equipment Dispatched</th>
              <th className="px-6 py-4">Response Target</th>
              <th className="px-6 py-4">Clearance Profile</th>
              <th className="px-6 py-4 text-right">Fixed Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-slate-500">
            {ROWS.map((row) => (
              <tr key={row.scenario} className="transition-colors hover:bg-slate-100/60">
                <td className="px-6 py-5 font-semibold text-slate-900">
                  {row.scenario}
                  <span className="mt-0.5 block text-xs font-normal text-slate-500">{row.note}</span>
                </td>
                <td className="px-6 py-5">{row.equipment}</td>
                <td className="px-6 py-5 font-bold text-blue-800">{row.target}</td>
                <td className="px-6 py-5">{row.profile}</td>
                <td className="px-6 py-5 text-right font-display text-lg font-bold text-slate-900">{row.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        * Final price depends on mileage beyond core BD districts, vehicle immobilisation state,
        and specific access/extraction parameters.
      </p>
    </section>
  );
}
