"use client";

import { useRef, useState, useTransition } from "react";
import { LoaderCircle, MessageCircle, Send } from "lucide-react";
import { submitSurveyRequest } from "@/app/actions/survey-request";

const ports = ["Chattogram Port", "Mongla Port", "Payra Port"];
const services = [
  "Draft Surveys",
  "Bunker Surveys",
  "Container Inspections",
  "Hull Damage Audits",
  "Pilotage",
];

const fieldClass =
  "mt-1.5 w-full rounded-sm border border-slate-300 bg-white px-3 py-3 text-base text-[#0f172a] outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 sm:py-2.5 sm:text-sm";

export default function SurveyRequestForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function onSubmit(formData: FormData) {
    setError(null);
    setSuccess(false);
    setWhatsappUrl(null);

    startTransition(async () => {
      const result = await submitSurveyRequest(formData);
      if (result.success) {
        setSuccess(true);
        setWhatsappUrl(result.whatsappUrl);
        formRef.current?.reset();
        return;
      }
      setError(result.error ?? "Submission failed.");
    });
  }

  return (
    <section id="request" className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#f97316] uppercase">
            Start a conversation
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0f172a] sm:text-4xl">
            Tell us what you need
          </h2>
          <p className="mt-4 text-slate-600">
            Share a few details about your vessel and inspection requirement.
            Our team can follow up to discuss scope, timing, and next steps.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>Include the vessel name, port, and expected arrival where known.</li>
            <li>Choose the closest matching survey or inspection service.</li>
            <li>Please don’t include sensitive personal or commercial information.</li>
          </ul>
        </div>

        <form
          ref={formRef}
          action={onSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Client name
              <input
                name="client_name"
                required
                autoComplete="name"
                className={fieldClass}
                placeholder="Agency or principal"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Email
              <input
                name="client_email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
                placeholder="ops@example.com"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Phone number
              <input
                name="phone_number"
                type="tel"
                required
                autoComplete="tel"
                className={fieldClass}
                placeholder="+880…"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Vessel name
              <input
                name="vessel_name"
                required
                className={fieldClass}
                placeholder="M/V example"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Port location
              <select name="port_location" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select port
                </option>
                {ports.map((port) => (
                  <option key={port} value={port}>
                    {port}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              Survey type
              <select name="service_type" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select discipline
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              rows={4}
              className={fieldClass}
              placeholder="ETA, cargo, last port, special instructions"
            />
          </label>

          {error ? (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {error}
            </p>
          ) : null}
          {success ? (
            <p
              className="mt-4 rounded-lg bg-emerald-50 px-3 py-3 text-sm text-emerald-800"
              role="status"
            >
              Thank you. Your enquiry has been received and emailed to our
              survey desk. You can also continue the conversation on WhatsApp; review
              the message and tap Send in WhatsApp to contact us.
              {" "}
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm bg-emerald-700 px-4 py-2 font-semibold text-white no-underline transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat with TZ Marine on WhatsApp
                </a>
              ) : null}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#f97316] px-5 py-3 text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pending ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {pending ? "Submitting…" : "Submit survey request"}
          </button>
        </form>
      </div>
    </section>
  );
}
