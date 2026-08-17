import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Display face
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body face
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Utility/mono face
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VYNORA | TECHNOLOGY • INNOVATION • IMPACT",
  description:
    "Premium, scalable, and secure digital solutions for modern businesses. Specializing in custom web applications, UX/UI design, and high-performance engineering.",
  keywords: [
    "premium web development",
    "enterprise solutions",
    "UX/UI design",
    "web hosting",
    "SEO services",
    "vynora tech",
  ],
  openGraph: {
    title: "VYNORA | Digital Solutions",
    description:
      "Empowering businesses through cutting-edge technology, striking design, and impactful results.",
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
