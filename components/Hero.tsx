import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Compass,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const badges = [
  { label: "Marine", detail: "Industry focus" },
  { label: "Independent", detail: "Survey reporting" },
  { label: "On-site", detail: "Inspection support" },
  { label: "Bangladesh", detail: "Port coverage" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(249,115,22,0.12),transparent_38%),linear-gradient(180deg,#0f172a_0%,#020617_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[8%] hidden w-px bg-white/10 lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4 sm:mb-12 sm:gap-4">
          <p className="inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.16em] text-slate-300 uppercase sm:gap-3 sm:text-xs sm:tracking-[0.22em]">
            <span className="h-2 w-2 bg-[#f97316]" aria-hidden="true" />
            TZ Marine Inspection Services
          </p>
          <p className="text-[9px] tracking-[0.12em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.18em]">
            Marine survey · Bangladesh
          </p>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="min-w-0">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              Clear insight for complex port calls
            </p>
            <h1 className="max-w-4xl text-[clamp(2.75rem,5.4vw,6rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
              Clear evidence.
              <span className="mt-2 block text-[#f97316]">
                Confident decisions.
              </span>
            </h1>
            <p className="mt-8 max-w-xl border-l-2 border-[#f97316] pl-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Marine inspection and surveying support for vessel and cargo
              stakeholders across Bangladesh’s principal seaports.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#request"
                className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#f97316] px-5 py-3 text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
              >
                Discuss an inspection
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href="#ports"
                className="inline-flex min-h-12 items-center gap-3 rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-[#f97316] hover:text-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
              >
                Explore coverage <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-12 grid grid-cols-2 border-y border-white/15 sm:grid-cols-4 lg:mt-16">
              {badges.map((badge, index) => (
                <li
                  key={badge.label}
                  className="border-white/15 py-4 pr-3 odd:border-r even:pl-4 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0 lg:py-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-[#f97316]" aria-hidden="true" />
                    <span className="text-[10px] tracking-[0.16em] text-slate-500">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white sm:text-sm">
                    {badge.label}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {badge.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative lg:pb-2">
            <div className="border border-white/15 bg-white/[0.03] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  At sea / In port
                </p>
                <span className="text-xs text-[#f97316]">01 — 03</span>
              </div>
              <figure className="group relative my-6 h-52 overflow-hidden border border-white/10 bg-[#111c30] sm:my-7 sm:h-72">
                <Image
                  src="/images/container-ship-port.jpg"
                  alt="Container ship berthed at a commercial seaport"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/25 to-transparent"
                  aria-hidden="true"
                />
              </figure>
              <div className="flex items-start gap-3 border-b border-white/15 pb-6 text-sm leading-6 text-slate-300">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#f97316]" aria-hidden="true" />
                Practical attendance. Clear findings. Reporting focused on the
                details that matter.
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/15 pt-5">
                <div className="pr-4">
                  <p className="text-4xl font-semibold tracking-tight text-white">
                    05
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.16em] text-slate-400 uppercase">
                    Survey disciplines
                  </p>
                </div>
                <div className="pl-5">
                  <p className="text-4xl font-semibold tracking-tight text-[#f97316]">
                    03
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.16em] text-slate-400 uppercase">
                    Port locations
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
