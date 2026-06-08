import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import DownloadContent from "../../components/DownloadContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default function DownloadPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link
            href="/"
            aria-label="Back to home"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Plak<span className="text-blue-600">io</span>
          </Link>
        </div>
      </header>

      <DownloadContent />
    </>
  );
}
