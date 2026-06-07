import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Plakio — Software simple para parqueaderos",
    template: "%s | Plakio",
  },
  description:
    "Gestiona tu parqueadero desde el celular. Check-in, check-out, tickets digitales y cobro automático. Prueba gratis 30 días.",
  keywords: [
    "software parqueadero",
    "gestión parqueaderos",
    "sistema parqueadero",
    "parqueadero app",
    "cobro parqueadero",
    "ticket parqueadero digital",
  ],
  authors: [{ name: "Plakio", url: BASE_URL }],
  creator: "Plakio",
  publisher: "Plakio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Plakio",
    title: "Plakio — Software simple para parqueaderos",
    description:
      "Gestiona tu parqueadero desde el celular. Check-in, check-out, tickets digitales y cobro automático. Prueba gratis 30 días.",
    locale: "es_LA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plakio — Software simple para parqueaderos",
    description:
      "Gestiona tu parqueadero desde el celular. Check-in, check-out, tickets digitales y cobro automático.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Plakio",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hdhumanez@gmail.com",
        availableLanguage: "Spanish",
      },
      sameAs: ["https://wa.me/573003046919"],
    },
    {
      "@type": "SoftwareApplication",
      name: "Plakio",
      url: BASE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS, Web",
      description:
        "Software de gestión para parqueaderos. Check-in digital, tickets y cobro automático.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "COP",
        description: "30 días gratis, sin tarjeta de crédito",
      },
      provider: {
        "@type": "Organization",
        name: "Plakio",
        url: BASE_URL,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
