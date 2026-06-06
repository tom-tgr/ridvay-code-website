import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BRAND, LINKS } from "@/lib/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Ridvay Code — autonomous AI coding orchestrator for VS Code";

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.site),
  title,
  description: BRAND.description,
  keywords: [
    "autonomous coding agent",
    "AI coding orchestrator",
    "Claude Code agent",
    "private AI coding agent",
    "VS Code extension",
    "Ollama",
    "LM Studio",
    "Claude Code",
    "Ridvay Code",
  ],
  openGraph: {
    title,
    description: BRAND.description,
    url: LINKS.site,
    siteName: "Ridvay Code",
    images: [{ url: "/ridvay-logo.png", width: 512, height: 512, alt: "Ridvay Code" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description: BRAND.description,
    images: ["/ridvay-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
