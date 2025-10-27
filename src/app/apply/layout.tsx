import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prijavite se - PN Business Club",
  description: "Popunite formular i postanite dio ekskluzivne zajednice poslovnih lidera. Vaša biznis transformacija počinje ovdje.",
  openGraph: {
    title: "Prijavite se - PN Business Club",
    description: "Postanite dio ekskluzivne zajednice poslovnih lidera",
    type: "website",
    locale: "sr_ME",
    siteName: "PN Business Club",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
