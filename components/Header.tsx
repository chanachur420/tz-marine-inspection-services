"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Anchor,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const links = [
  { href: "#services", label: "Our services" },
  { href: "#ports", label: "Coverage" },
  { href: "#request", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/95 text-white backdrop-blur-md">
      <div className="flex items-center justify-center gap-2 border-b border-orange-500/30 bg-[#0b1224] px-2 py-2 text-[9px] font-semibold tracking-[0.1em] text-slate-300 uppercase sm:px-4 sm:text-xs sm:tracking-[0.18em]">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-orange-500 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f97316]" />
        </span>
        <p>Marine survey &amp; inspection · Bangladesh</p>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a
          href="#top"
          className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#f97316] text-[#0f172a] transition-transform duration-300 group-hover:-rotate-6">
            <Image
              src="/images/custom-logo.jpg"
              alt="TZ Marine Inspection Services Logo"
              width={24}
              height={24}
              className="mr-2"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.18em] uppercase">
              TZ MARINE
            </span>
            <span className="block text-[10px] tracking-[0.12em] text-slate-400 uppercase sm:text-xs">
              Inspection Services
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-200 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#f97316] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#request"
            className="inline-flex items-center gap-2 rounded-sm bg-[#f97316] px-4 py-2.5 font-semibold text-[#0f172a] transition-all duration-200 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
          >
            Plan an inspection{" "}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="rounded-sm p-2 text-white transition-colors duration-200 hover:bg-white/10 hover:text-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="space-y-1 border-t border-white/10 px-4 py-3 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-sm px-3 py-2 text-sm transition-colors duration-200 hover:bg-white/5 hover:text-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#request"
            className="mt-2 block rounded-sm bg-[#f97316] px-4 py-2 text-center text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
            onClick={() => setOpen(false)}
          >
            Plan an inspection
          </a>
        </nav>
      ) : null}
    </header>
  );
}