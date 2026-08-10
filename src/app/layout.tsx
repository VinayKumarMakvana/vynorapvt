import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Display face — geometric, used for headlines with restraint.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body face — high legibility for paragraph copy and UI text.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Utility/mono face — used sparingly for eyebrows, tags, and data-style labels.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinay's Web Studio | Premium Web Design for Local Businesses",
  description:
    "Custom, high-performance web design and development for clinics, salons, and home service businesses in New York, London, and Dubai. Built by full-stack developer Vinay Kumar Makvana.",
  keywords: [
    "premium web design",
    "web development agency",
    "clinic website design",
    "salon website design",
    "freelance full-stack developer",
  ],
  openGraph: {
    title: "Vinay's Web Studio | Premium Web Design for Local Businesses",
    description:
      "Custom, high-performance web solutions designed to increase bookings and revenue for clinics, salons, and home service businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="bg-void font-body text-ink-primary antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
