import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/shared/SmoothScroll";
import BackgroundMesh from "../components/shared/BackgroundMesh";
import Header from "../components/shared/Header";
import Footer from "../sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fintrick Innovations // Sovereign Digital Infrastructure",
  description: "Creating world-class premium technology ecosystems across Fintech, Creator Economy, Commerce, AI, and Digital Infrastructure. Rooted in Mangalore, scaled globally.",
  keywords: [
    "Fintrick",
    "Fintrick Innovations",
    "Digital Infrastructure",
    "Fintech",
    "Creator Economy",
    "Payments",
    "UPI",
    "Sovereign AI",
    "Developer APIs",
    "India Tech"
  ],
  authors: [{ name: "Fintrick Engineering Team" }],
  openGraph: {
    title: "Fintrick Innovations // Sovereign Digital Infrastructure",
    description: "Creating world-class premium technology ecosystems across Fintech, Creator Economy, Commerce, AI, and Digital Infrastructure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintrick Innovations // Sovereign Digital Infrastructure",
    description: "Creating world-class premium technology ecosystems across Fintech, Creator Economy, Commerce, AI, and Digital Infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white">
        <SmoothScroll>
          {/* Layer 1: Premium Mesh, Grids & Noise Background */}
          <BackgroundMesh />

          {/* Layer 2: Glowing frosted glass header navigation */}
          <Header />

          {/* Layer 3: Main App Router page mount */}
          <main className="flex-grow w-full relative z-10">
            {children}
          </main>

          {/* Layer 4: Premium Site Map Footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
