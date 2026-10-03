import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "TZ Marine Inspection Services",
  title: "TZ Marine Inspection Services | Marine Surveying & Cargo Inspection",
  description:
    "TZ Marine Inspection Services provides professional marine surveying and cargo inspection services including draft surveys, bunker inspections, container surveys, hull damage assessments, and pilotage support at Chattogram, Mongla, and Payra seaports in Bangladesh.",
  openGraph: {
    title: "TZ Marine Inspection Services",
    description:
      "Professional marine surveying and cargo inspection services across Bangladesh's principal seaports: Chattogram, Mongla, and Payra.",
    type: "website",
    siteName: "TZ Marine Inspection Services",
    images: [
      {
        url: "/images/container-ship-port.jpg",
        width: 1200,
        height: 630,
        alt: "Container ship at commercial seaport - TZ Marine Inspection Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TZ Marine Inspection Services | Marine Surveying Bangladesh",
    description:
      "Professional marine surveying and cargo inspection services at Chattogram, Mongla, and Payra seaports.",
    images: ["/images/container-ship-port.jpg"],
  },
  keywords: [
    "marine surveyor",
    "cargo inspection",
    "draft survey",
    "bunker inspection",
    "hull damage assessment",
    "marine inspection Bangladesh",
    "Chattogram port services",
    "Mongla port survey",
    "Payra port inspection",
    "vessel inspection",
    "cargo survey",
    "port state control",
    "marine consultant",
  ],
  authors: [{ name: "TZ Marine Inspection Services" }],
  creator: "TZ Marine Inspection Services",
  publisher: "TZ Marine Inspection Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {/* Simple test comment to verify deployment */}
        {children}
      </body>
    </html>
  );
}