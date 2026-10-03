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
    "TZ Marine Inspection Services provides marine surveying and cargo inspection support, including draft, bunker, container, hull damage, and pilotage services at Chattogram, Mongla, and Payra.",
  openGraph: {
    title: "TZ Marine Inspection Services",
    description:
      "Marine surveying and cargo inspection support across Bangladesh’s principal seaports.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
