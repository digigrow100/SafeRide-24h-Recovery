import { SITE_EMAIL_HREF } from "@/lib/site";

const COMPLIANCE = [
  {
    icon: "verified",
    title: "PAS 43 Safe Working Breakdown Standard",
    description:
      "Full adherence to Publicly Available Specification 43 for safe vehicle breakdown recovery on high-speed motorways and rural carriageways.",
  },
  {
    icon: "badge",
    title: "IVR Trained & DBS Screened Staff",
    description:
      "Every driver holds active Institute of Vehicle Recovery qualification modules and undergoes enhanced background checks.",
  },
  {
    icon: "policy",
    title: "DVSA Operator Licensing & Tachograph Compliance",
    description:
      "Our heavy recovery vehicles operate under strict Goods Vehicle Operator Licences with digital tachograph audits to guarantee rested, alert operators.",
  },
] as const;

const MATRIX = [
  { label: "Goods In Transit Insurance", value: "£100,000 Specific Cover" },
  { label: "Public & Motor Trade Liability", value: "£5,000,000 Indemnity" },
  { label: "High-Visibility PPE Class", value: "EN ISO 20471 Class 3" },
  { label: "Hazardous Cargo / EV Isolation", value: "Level 2 EV Certified" },
  { label: "Depot Secure Storage", value: "24/7 Monitored CCTV" },
] as const;

export default function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div>
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-secondaryNeon">
              Stringent Governance
            </span>
            <h2 className="font-display text-2xl font-bold leading-tight text-bodyText sm:text-3xl">
              Safety Protocols That Surpass Industry Mandates
            </h2>
            <p className="mt-3 text-base text-mutedText">
              We operate under commercial logistics compliance standards, eliminating the risks
              inherent in unregulated breakdown towing.
            </p>
          </div>
          <div className="space-y-4">
            {COMPLIANCE.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-secondaryNeon/20 bg-panel p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primaryNeon/15 text-primaryNeon">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-bodyText">{item.title}</h4>
                  <p className="mt-1 text-sm text-mutedText">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-subtleBorder bg-secondaryBg p-8 sm:p-10 lg:col-span-6">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-display text-lg font-bold text-primaryNeon">Accreditation Verification Matrix</span>
          </div>
          <div className="space-y-3">
            {MATRIX.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-panel p-3">
                <span className="text-sm font-medium text-bodyText">{item.label}</span>
                <span className="font-mono text-sm font-bold text-primaryNeon">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-primaryNeon p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white">description</span>
              <span className="text-sm text-white/90">
                Insurance certificates available upon request for fleet and commercial accounts.
              </span>
            </div>
            <a href={SITE_EMAIL_HREF} className="shrink-0 font-mono text-xs font-bold text-white underline hover:no-underline">
              Request Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
