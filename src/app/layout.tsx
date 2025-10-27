import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PN Business Club - Eksluzivna zajednica biznismena",
  description: "Pridružite se ekskluzivnoj zajednici poslovnih lidera. Networking, edukacija i rast kroz premium iskustvo.",
  keywords: ["business club", "networking", "biznis zajednica", "lideri", "preduzetnici"],
  openGraph: {
    title: "PN Business Club - Eksluzivna zajednica biznismena",
    description: "Pridružite se ekskluzivnoj zajednici poslovnih lidera. Networking, edukacija i rast kroz premium iskustvo.",
    type: "website",
    locale: "sr_ME",
    siteName: "PN Business Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "PN Business Club",
    description: "Ekskluzivna zajednica poslovnih lidera",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
