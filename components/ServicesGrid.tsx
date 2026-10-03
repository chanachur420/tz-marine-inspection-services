"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Container,
  Droplets,
  Fuel,
  Ship,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "draft",
    name: "Draft Surveys",
    category: "Draft Surveys",
    icon: Droplets,
    summary:
      "Cargo quantity assessment using vessel draft readings and relevant hydrostatic data, with findings documented for review.",
  },
  {
    id: "bunker",
    name: "Bunker Surveys",
    category: "Bunker Surveys",
    icon: Fuel,
    summary:
      "Bunker quantity attendance for vessel delivery, redelivery, and remaining-on-board measurements.",
  },
  {
    id: "container",
    name: "Container Inspections",
    category: "Container Inspections",
    icon: Container,
    summary:
      "Condition checks covering container structure, seals, cargo handling, and reported damage.",
  },
  {
    id: "hull",
    name: "Hull Damage Audits",
    category: "Hull Damage Audits",
    icon: ShieldAlert,
    summary:
      "Documented assessment of reported vessel damage, with observations and supporting photographic records.",
  },
  {
    id: "pilotage",
    name: "Pilotage",
    category: "Pilotage",
    icon: Ship,
    summary:
      "Survey attendance and coordination support for harbour movements and port calls.",
  },
];

const filters = ["All", ...services.map((service) => service.category)];

export default function ServicesGrid() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? services
        : services.filter((service) => service.category === filter),
    [filter],
  );

  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-300 pb-7 sm:flex-row sm:items-end sm:pb-9">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">
              02 / What we do
            </p>
            <h2 className="text-3xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#0f172a] sm:text-5xl lg:text-6xl">
              Inspection &amp; survey services
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base">
            Select a service to see how TZ Marine can support your vessel,
            cargo, or port operation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <figure className="group relative aspect-[4/3] overflow-hidden border border-slate-300 bg-[#0f172a] sm:aspect-[16/10]">
            <Image
              src="/images/chittagong-port-channel.jpg"
              alt="Cargo vessels gathered in the Chittagong Port Channel, Bangladesh"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/10 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-4 left-4 border-l-2 border-[#f97316] pl-3 text-sm font-semibold tracking-wide text-white sm:bottom-5 sm:left-6">
              Bangladesh port operations
            </figcaption>
          </figure>

          <figure className="group relative aspect-[4/3] overflow-hidden border border-slate-300 bg-[#0f172a] sm:aspect-[16/10]">
            <Image
              src="/images/bunkering-operation.jpg"
              alt="Bunker vessel alongside a passenger ship during a fuel transfer"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/10 to-transparent"
              aria-hidden="true"
            />
          </figure>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = item === filter;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={`rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 ${
                  active
                    ? "bg-[#0f172a] text-white"
                    : "border border-slate-300 bg-white text-slate-600 hover:border-orange-500 hover:text-orange-700"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group relative flex min-h-64 flex-col border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 focus-within:ring-2 focus-within:ring-orange-500/50 sm:p-7"
              >
                <div className="mb-7 flex items-start justify-between border-b border-slate-200 pb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#0f172a] text-[#f97316] transition-colors duration-300 group-hover:bg-[#f97316] group-hover:text-[#0f172a]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs tracking-[0.15em] text-slate-400">
                    0{index + 1} / 05
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#0f172a] sm:text-2xl">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {service.summary}
                </p>
                <a
                  href="#request"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0f172a] transition-colors duration-200 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                >
                  Request this service
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
