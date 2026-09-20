import Image from "next/image";
import Link from "next/link";
import siteIcon from "@/assets/images/site-icon.webp";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const RESCUE_CHANNELS = [
  { label: "24/7 Car Recovery", href: "/services" },
  { label: "Breakdown Diagnosis", href: "/services" },
  { label: "Vehicle Transportation", href: "/services" },
  { label: "Roadside Verge Assistance", href: "/services" },
  { label: "Tilt-Slide Low Loader Fleet", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-primaryNeon/20 bg-bg pb-28 pt-16 font-sans text-mutedText md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-primaryNeon/50 bg-secondaryBg p-1 shadow-neon-magenta">
                <Image alt="SafeRide 24H Recovery" src={siteIcon} sizes="32px" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-xl font-bold uppercase tracking-wider text-bodyText">
                SAFERIDE <span className="text-primaryNeon">24H</span>
              </span>
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-mutedText">
              Avant-Garde emergency automotive rescue and prestige vehicle transportation. Serving
              Bradford, Leeds periphery, Calderdale, and the Pennine transit routes round the clock.
            </p>
            <div className="inline-flex items-center gap-2 rounded border border-accentCyan/30 bg-secondaryBg px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accentCyan" />
              <span className="font-mono text-[10px] font-semibold uppercase text-accentCyan">
                OPS CENTER: LIVE 365 DAYS
              </span>
            </div>
          </div>

          <div className="space-y-3 md:col-span-3">
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
              RESCUE CHANNELS
            </span>
            <ul className="space-y-2 text-xs">
              {RESCUE_CHANNELS.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-primaryNeon" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 md:col-span-4">
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-secondaryNeon">
              COORDINATES &amp; CELL
            </span>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primaryNeon">call</span>
                <a className="font-mono font-bold text-bodyText transition-colors hover:text-primaryNeon" href={SITE_PHONE_HREF}>
                  {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-secondaryNeon">mail</span>
                <a className="font-mono transition-colors hover:text-secondaryNeon" href={SITE_EMAIL_HREF}>
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-accentCyan">location_on</span>
                <span>Bradford, West Yorkshire, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-[11px] sm:flex-row">
          <p>© {new Date().getFullYear()} SafeRide 24H Recovery. All Night Operations Active.</p>
          <div className="flex items-center gap-6">
            <span className="uppercase text-primaryNeon">SEC // BD_AUTONOMOUS</span>
            <span className="uppercase text-accentCyan">AVANT-GARDE EDITION 04</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
