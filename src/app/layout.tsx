import type { Metadata } from "next";
import { inter, plusJakarta } from "@/lib/fonts";
import "./globals.css";

// ✏️ UPDATE: Change these for your event
export const metadata: Metadata = {
  title: "Event Name 2026 | FlytBase",
  description: "Join FlytBase at Event Name 2026. Description of your event goes here.",
  openGraph: {
    title: "Event Name 2026 | FlytBase",
    description: "Join FlytBase at Event Name 2026.",
    siteName: "FlytBase",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
