import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/constants/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} Enterprise | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name} Enterprise`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "corporate training",
    "enterprise learning",
    "upskilling programs",
    "leadership development",
    "Gen-AI training",
    "Accredian",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} Enterprise | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: `${SITE_CONFIG.name} Enterprise`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} Enterprise | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
