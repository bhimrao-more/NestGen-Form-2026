import type { Metadata } from "next";
import { Toaster } from "sonner";
import { inter, plusJakarta } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "NestGen Forum '26 | FlytBase",
  description:
    "NestGen Forum is an exclusive invite-only gathering for drone pioneers. May 11, 2026 in Detroit, MI. Pioneering AI-First Drone Autonomy for Scale.",
  openGraph: {
    title: "NestGen Forum '26 | FlytBase",
    description:
      "Exclusive invite-only gathering for drone pioneers. May 11, 2026 in Detroit, MI.",
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
      <body className="antialiased">
        {children}
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}
