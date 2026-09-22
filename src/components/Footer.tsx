import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.webp";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const SERVICES = [
  { label: "24/7 Car Recovery", href: "/services" },
  { label: "Breakdown Recovery", href: "/services" },
  { label: "Vehicle Transportation", href: "/services" },
  { label: "Roadside Assistance", href: "/services" },
];

const COMPANY = [
  { label: "About SafeRide", href: "/about" },
  { label: "Fleet & Hardware", href: "/about" },
  { label: "Our Depots", href: "/about" },
  { label: "Safety Protocols", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-100 pb-28 pt-14 text-slate-600 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image alt="SafeRide 24H Recovery" src={logo} sizes="180px" className="h-10 w-auto" />
            </Link>
            <p className="max-w-sm text-sm text-slate-600">
              SafeRide 24H Recovery provides 24/7 car recovery, breakdown recovery, vehicle
              transportation and roadside assistance in your local area.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-500">
                <span className="material-symbols-outlined text-[18px] text-blue-800">headset_mic</span>
                24/7 Incident Hotline
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
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row">
          <p>© 2026 SafeRide 24H Recovery. All rights reserved.</p>
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
