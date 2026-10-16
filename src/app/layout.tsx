import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteName} | Proyecto en desarrollo`,
  description: siteDescription,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${siteUrl}/`,
    siteName,
    title: `${siteName} | Proyecto en desarrollo`,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Proyecto en desarrollo`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: `${siteUrl}/`,
  };

  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
