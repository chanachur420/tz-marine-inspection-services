import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortStatus from "@/components/PortStatus";
import ServicesGrid from "@/components/ServicesGrid";
import SurveyRequestForm from "@/components/SurveyRequestForm";
import { Anchor, ArrowUpRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesGrid />
        <PortStatus />
        <SurveyRequestForm />
      </main>
      <footer className="border-t border-white/10 bg-[#0b1224] text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-white">
              <Anchor className="h-5 w-5 text-[#f97316]" />
              <span className="font-semibold">TZ Marine Inspection Services</span>
            </p>
            <p className="mt-3 text-sm leading-6">
              Independent marine surveying and cargo inspection support for
              vessel, cargo, and port stakeholders.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-white">Explore</p>
            <a href="#services" className="block hover:text-white">Services</a>
            <a href="#ports" className="block hover:text-white">Port coverage</a>
            <a href="#request" className="inline-flex items-center gap-1 hover:text-white">
              Send an enquiry <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-white">Service locations</p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-[#f97316]" />
              Chattogram · Mongla · Payra
            </p>
          </div>
        </div>
        <p className="border-t border-white/10 px-4 py-4 text-center text-xs leading-5 text-slate-500">
          © {new Date().getFullYear()} TZ Marine Inspection Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
