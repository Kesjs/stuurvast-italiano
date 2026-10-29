import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import { MotionRoot } from "@/components/ui/MotionRoot";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Stuurvast Autoscuola | Patente a Utrecht",
    template: "%s | Stuurvast Autoscuola",
  },
  description:
    "Lezioni pratiche, prezzi chiari e un percorso trasparente verso la patente con Stuurvast Autoscuola a Utrecht.",
  icons: {
    icon: [{ url: "/brand/stuurvast-logo-mark.png", type: "image/png" }],
    apple: "/brand/stuurvast-logo-mark.png",
  },
  openGraph: { type: "website", locale: "it_IT", siteName: site.name },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "NL",
  },
  areaServed: site.serviceArea,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[7.6px] focus:bg-vivid-indigo focus:px-4 focus:py-2 focus:text-pure-white"
        >
          Ga naar de inhoud
          </a>
          <Navbar />
          <MotionRoot>{children}</MotionRoot>
          <Footer />
          {process.env.BUSINESS_DETAILS_VERIFIED === "true" && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
              }}
            />
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
