import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Datorbutiken i Piteå | Datorservice & reparation",
  description:
    "Modern concept redesign för DataModdy / Datorbutiken i Piteå. Datorservice, reparationer, uppgraderingar, komponenter och personlig rådgivning.",
  applicationName: "Datorbutiken i Piteå",
  keywords: [
    "Datorbutiken Piteå",
    "DataModdy",
    "datorservice Piteå",
    "datorreparation Piteå",
    "datorbutik",
    "PC service",
    "Mac service",
    "skräddarsydd dator",
    "komponenter",
    "datorhjälp",
  ],
  authors: [{ name: "Samuel Oxenby" }],
  creator: "Samuel Oxenby",
  openGraph: {
    title: "Datorbutiken i Piteå | Datorservice & reparation",
    description:
      "En modern redesign för DataModdy / Datorbutiken i Piteå med fokus på tydlig service, kontakt och lokal närvaro.",
    siteName: "Datorbutiken i Piteå",
    type: "website",
    locale: "sv_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datorbutiken i Piteå | Datorservice & reparation",
    description:
      "Modern concept redesign för DataModdy / Datorbutiken i Piteå.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}