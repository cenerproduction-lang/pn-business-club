import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PN Business Club - Ekskluzivna zajednica biznismena",
  description: "Pridružite se ekskluzivnoj zajednici poslovnih lidera. Premium networking, edukacija i rast kroz vrhunsko iskustvo članstva.",
  keywords: ["business club", "networking", "biznis zajednica", "lideri", "preduzetnici", "poslovni klub", "Montenegro"],
  authors: [{ name: "PN Business Club" }],
  creator: "PN Business Club",
  publisher: "PN Business Club",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "PN Business Club - Ekskluzivna zajednica biznismena",
    description: "Pridružite se ekskluzivnoj zajednici poslovnih lidera. Premium networking, edukacija i rast kroz vrhunsko iskustvo članstva.",
    type: "website",
    locale: "sr_ME",
    siteName: "PN Business Club",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PN Business Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PN Business Club",
    description: "Ekskluzivna zajednica poslovnih lidera",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://pnbusiness.club"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider defaultTheme="system" storageKey="pn-business-club-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
