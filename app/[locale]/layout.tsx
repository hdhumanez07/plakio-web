import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { BASE_URL } from "@/lib/config";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isEs = locale === "es";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: isEs
        ? "Plakio — Apps simples para tu negocio"
        : "Plakio — Simple apps for your business",
      template: "%s | Plakio",
    },
    description: isEs
      ? "Software simple para gestionar tu negocio desde el celular. Parqueaderos, citofonía y más."
      : "Simple software to manage your business from your phone. Parking lots, intercom and more.",
    alternates: {
      canonical: BASE_URL,
      languages: {
        es: `${BASE_URL}/es`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: BASE_URL,
      siteName: "Plakio",
      locale: isEs ? "es_LA" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
