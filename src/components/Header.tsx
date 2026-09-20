"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import siteIcon from "@/assets/images/site-icon.webp";
import { NAV_LINKS, SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-primaryNeon/20 bg-bg/90 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link className="group flex items-center gap-3" href="/">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primaryNeon/40 bg-secondaryBg p-1.5 shadow-neon-magenta transition-all group-hover:border-primaryNeon">
            <div className="absolute inset-0 bg-gradient-to-br from-primaryNeon/30 to-secondaryNeon/20" />
            <Image
              alt="SafeRide 24H Recovery"
              src={siteIcon}
              sizes="40px"
              className="relative z-10 h-full w-full object-contain transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 font-display text-lg font-black uppercase tracking-wider text-bodyText sm:text-xl">
              SAFERIDE <span className="text-primaryNeon drop-shadow-[0_0_12px_#FF2BD6]">24H</span>
            </span>
            <span className="-mt-1 hidden whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.28em] text-mutedText xl:block">
              NIGHT DIVISION // WEST YORKSHIRE
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive ? "text-primaryNeon" : "text-mutedText hover:text-primaryNeon"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-accentCyan/30 bg-secondaryBg px-3 py-1 xl:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentCyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accentCyan" />
            </span>
            <span className="whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-widest text-accentCyan">
              ONLINE 24/7
            </span>
          </div>
          <a
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg border border-primaryNeon bg-primaryNeon/10 px-4 py-2 font-mono text-xs tracking-wider text-primaryNeon shadow-neon-magenta transition-all duration-300 hover:bg-primaryNeon hover:text-bg sm:inline-flex"
            href={SITE_PHONE_HREF}
          >
            <span className="material-symbols-outlined text-base">phone_in_talk</span>
            <span className="font-bold">{SITE_PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-primaryNeon/40 text-bodyText xl:hidden"
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-primaryNeon/20 bg-bg px-4 py-4 xl:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-widest transition-colors ${
                  isActive ? "bg-primaryNeon/10 text-primaryNeon" : "text-mutedText hover:text-primaryNeon"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SITE_PHONE_HREF}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-primaryNeon bg-primaryNeon/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-primaryNeon"
          >
            <span className="material-symbols-outlined text-base">phone_in_talk</span>
            <span className="font-bold">{SITE_PHONE_DISPLAY}</span>
          </a>
        </nav>
      ) : null}
    </header>
  );
}
