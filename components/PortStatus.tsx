import { Anchor, MapPin } from "lucide-react";

const ports = [
  {
    name: "Chattogram Port",
    code: "BDCGP",
    focus: "Vessel and cargo survey coordination for port calls.",
  },
  {
    name: "Mongla Port",
    code: "BDMGL",
    focus: "Survey support for vessels calling at Mongla and Chalna roads.",
  },
  {
    name: "Payra Port",
    code: "BDPAY",
    focus: "Cargo and bunker survey coordination for port calls.",
  },
];

export default function PortStatus() {
  return (
    <section id="ports" className="bg-[#0f172a] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#f97316] uppercase">
              Where we work
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Bangladesh port coverage
            </h2>
            <p className="mt-3 max-w-xl text-slate-300">
              TZ Marine Inspection Services supports survey requests at
              Chattogram, Mongla, and Payra. Contact us with your vessel’s port
              call and inspection requirements to discuss arrangements.
            </p>
          </div>
          <p className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium tracking-wide text-slate-300">
            <MapPin className="h-4 w-4 text-[#f97316]" />
            Service locations
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {ports.map((port) => (
            <article
              key={port.code}
              className="group border border-white/15 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400/70 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs tracking-widest text-slate-400 uppercase">
                    {port.code}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">{port.name}</h3>
                </div>
                <Anchor className="h-5 w-5 text-[#f97316] transition-transform duration-300 group-hover:-rotate-12" />
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">
                {port.focus}
              </p>
              <a
                href="#request"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#f97316] transition-colors duration-200 hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
              >
                Enquire about this port{" "}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
