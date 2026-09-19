const REASSURANCES = [
  {
    icon: "schedule",
    accent: "text-primaryNeon",
    label: "Continuous Shift",
    title: "24/7 Availability",
    description:
      "Night shifts, bank holidays, and severe weather response. SafeRide operates 365 days without shutdown.",
  },
  {
    icon: "support_agent",
    accent: "text-secondaryNeon",
    label: "Zero Automation",
    title: "Direct Phone Contact",
    description:
      "Speak directly to an active incident supervisor who coordinates the recovery flatbed nearest your GPS fix.",
  },
  {
    icon: "pin_drop",
    accent: "text-primaryNeon",
    label: "Local Fleet Hub",
    title: "Bradford Coverage",
    description:
      "Strategically parked units ready for high-speed motorway verge extractions and residential breakdowns.",
  },
] as const;

export default function ReassuranceTriad() {
  return (
    <section className="w-full bg-secondaryBg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REASSURANCES.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 rounded-xl bg-panel p-6 shadow-sm">
              <div className={`mb-1 flex items-center gap-2 ${item.accent}`}>
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                <span className="font-mono text-xs uppercase tracking-wider">{item.label}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-bodyText">{item.title}</h3>
              <p className="text-sm text-mutedText">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
