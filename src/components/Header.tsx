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
    <header className="fixed top-0 left-0 z-50 w-full shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="border-b border-blue-700/40 bg-blue-800 text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs tracking-wide sm:px-6">
          <div className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-semibold text-blue-100">FLEET STATUS:</span>
            <span className="truncate text-white/90">ACTIVE WEST YORKSHIRE</span>
          </div>
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <span className="flex items-center gap-1.5 text-blue-100">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              AVERAGE DISPATCH: <strong className="text-white">23 Mins</strong>
            </span>
            <span className="text-blue-100/40">|</span>
            <Link href="/contact" className="flex items-center gap-1 font-bold text-amber-300 hover:underline">
              INSTANT DISPATCH →
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[68px] border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:h-20">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link className="flex min-w-0 items-center gap-2 sm:gap-3" href="/">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-800 p-1.5 shadow-sm sm:h-10 sm:w-10">
              <Image
                alt="SafeRide 24H Recovery"
                src={siteIcon}
                sizes="(min-width: 640px) 40px, 36px"
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex min-w-0 flex-col leading-none">
              <span className="font-display text-base font-bold text-blue-800 sm:text-lg">SafeRide 24h</span>
              <span className="mt-0.5 hidden text-xs text-slate-500 xl:block">Bradford &amp; West Yorkshire</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full bg-slate-100 p-1.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "bg-blue-700 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-amber-700 sm:inline-flex"
              href={SITE_PHONE_HREF}
            >
              <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
              <span className="hidden xl:inline">{SITE_PHONE_DISPLAY}</span>
              <span className="xl:hidden">Call Now</span>
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            >
              <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${
                    isActive ? "bg-blue-50 text-blue-800" : "text-slate-600 hover:text-blue-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={SITE_PHONE_HREF}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-amber-600 px-4 py-3 text-sm font-bold text-white"
            >
              <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
              {SITE_PHONE_DISPLAY}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
