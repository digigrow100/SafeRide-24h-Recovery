import Image from "next/image";
import Link from "next/link";
import siteIcon from "@/assets/images/site-icon.webp";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const SERVICES = [
  { label: "24/7 Car Recovery", href: "/services" },
  { label: "Breakdown Diagnostics", href: "/services" },
  { label: "Vehicle Transportation", href: "/services" },
  { label: "Roadside Assistance", href: "/services" },
];

const COMPANY = [
  { label: "About SafeRide", href: "/about" },
  { label: "Fleet & Hardware", href: "/about" },
  { label: "Bradford Depots", href: "/about" },
  { label: "Safety Protocols", href: "/about" },
];

const COVERAGE = ["Bradford (BD1–BD22)", "Leeds & West Yorkshire", "Motorways M606 / M62", "Airport Transfers"];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-100 pb-28 pt-14 text-slate-600 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-800">
                <Image alt="SafeRide 24H Recovery" src={siteIcon} sizes="40px" className="h-6 w-6 object-contain" />
              </div>
              <div>
                <span className="block font-display text-lg font-bold leading-none text-blue-800">SafeRide 24h</span>
                <span className="text-xs text-slate-500">Breakdown Recovery</span>
              </div>
            </Link>
            <p className="max-w-sm text-sm text-slate-600">
              Rapid incident dispatch, vehicle transportation, and 24/7 roadside assistance across
              Bradford, Leeds, and West Yorkshire motorways.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-500">
                <span className="material-symbols-outlined text-[18px] text-blue-800">headset_mic</span>
                24/7 Bradford Incident Hotline
              </div>
              <a className="font-display text-xl font-bold text-blue-800 hover:underline" href={SITE_PHONE_HREF}>
                {SITE_PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <a className="transition-colors hover:text-blue-800" href={SITE_EMAIL_HREF}>
                  {SITE_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">Services</span>
            <ul className="flex flex-col gap-2 text-sm">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-blue-800" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">Company</span>
            <ul className="flex flex-col gap-2 text-sm">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-blue-800" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">Coverage &amp; Compliance</span>
            <ul className="mb-2 flex flex-col gap-2 text-sm">
              {COVERAGE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="border-t border-slate-200 pt-2">
              <span className="mb-1 block text-xs font-semibold uppercase text-slate-500">Accreditations</span>
              <p className="text-xs leading-relaxed text-slate-500">
                PAS 43 &bull; DVSA Compliant &bull; Goods in Transit £100k
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} SafeRide 24h Breakdown Recovery Ltd. Operating across Bradford &amp; West Yorkshire.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-800">
              Emergency Guidelines
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
