"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const SERVICE_TYPES = [
  "Draft Surveys",
  "Bunker Surveys",
  "Container Inspections",
  "Hull Damage Audits",
  "Pilotage",
] as const;

const PORT_LOCATIONS = [
  "Chattogram Port",
  "Mongla Port",
  "Payra Port",
] as const;

export type SurveyRequestResult =
  | { success: true; whatsappUrl: string }
  | { success: false; error: string };

type SurveyRequest = {
  client_name: string;
  client_email: string;
  phone_number: string;
  vessel_name: string;
  port_location: string;
  service_type: string;
  message: string;
};

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isSupportedPort(value: string): boolean {
  return PORT_LOCATIONS.includes(value as (typeof PORT_LOCATIONS)[number]);
}

function isSupportedService(value: string): boolean {
  return SERVICE_TYPES.includes(value as (typeof SERVICE_TYPES)[number]);
}

export async function submitSurveyRequest(
  formData: FormData,
): Promise<SurveyRequestResult> {
  const request: SurveyRequest = {
    client_name: readField(formData, "client_name"),
    client_email: readField(formData, "client_email"),
    phone_number: readField(formData, "phone_number"),
    vessel_name: readField(formData, "vessel_name"),
    port_location: readField(formData, "port_location"),
    service_type: readField(formData, "service_type"),
    message: readField(formData, "message"),
  };

  if (
    !request.client_name ||
    !request.client_email ||
    !request.phone_number ||
    !request.vessel_name ||
    !request.port_location ||
    !request.service_type
  ) {
    return { success: false, error: "Please complete all required fields." };
  }

  if (!isEmail(request.client_email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!isSupportedPort(request.port_location)) {
    return { success: false, error: "Please select a supported port." };
  }

  if (!isSupportedService(request.service_type)) {
    return { success: false, error: "Please select a valid survey type." };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      success: false,
      error: "Survey intake is not configured. Please try again later.",
    };
  }

  if (!resendApiKey) {
    return {
      success: false,
      error: "Email alerts are not configured. Please try again later.",
    };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  let databaseError: Error | null = null;

  try {
    const result = await supabase.from("survey_requests").insert({
      ...request,
      message: request.message || null,
    });
    databaseError = result.error;
  } catch (error) {
    databaseError =
      error instanceof Error ? error : new Error("Database request failed.");
  }

  if (databaseError) {
    console.error("Survey request database insert failed:", databaseError);
    return {
      success: false,
      error: "Unable to save the survey request. Please try again later.",
    };
  }

  const notificationEmail =
    process.env.NOTIFICATION_EMAIL || "tysirzaman04@gmail.com";
  const resend = new Resend(resendApiKey);
  const emailText = [
    "A new survey request was submitted.",
    "",
    `Client: ${request.client_name}`,
    `Client email: ${request.client_email}`,
    `Phone: ${request.phone_number}`,
    `Vessel: ${request.vessel_name}`,
    `Port: ${request.port_location}`,
    `Survey type: ${request.service_type}`,
    `Message: ${request.message || "—"}`,
  ].join("\n");

  try {
    const { error: emailError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: notificationEmail,
      subject: `Survey request: ${request.vessel_name}`,
      text: emailText,
    });

    if (emailError) {
      console.error("Survey request alert email failed:", emailError);
      return {
        success: false,
        error:
          "Your request was saved, but its email alert could not be sent. Please do not submit it again.",
      };
    }
  } catch (error) {
    console.error("Survey request alert email failed:", error);
    return {
      success: false,
      error:
        "Your request was saved, but its email alert could not be sent. Please do not submit it again.",
    };
  }

  const whatsappMessage = [
    "Hello TZ Marine Inspection Services, I submitted a survey request and would like to discuss it.",
    `Name: ${request.client_name}`,
    `Email: ${request.client_email}`,
    `Phone: ${request.phone_number}`,
    `Vessel: ${request.vessel_name}`,
    `Port: ${request.port_location}`,
    `Survey type: ${request.service_type}`,
    `Message: ${request.message || "—"}`,
  ].join("\n");

  return {
    success: true,
    whatsappUrl: `https://wa.me/8801739734606?text=${encodeURIComponent(whatsappMessage)}`,
  };
}
