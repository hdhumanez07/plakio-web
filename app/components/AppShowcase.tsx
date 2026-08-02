"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { apps, type AppConfig } from "@/lib/apps";

const HighlightSpan = (chunks: React.ReactNode) => (
  <span className="text-blue-600">{chunks}</span>
);

function AppCard({ app }: Readonly<{ app: AppConfig }>) {
  const homeT = useTranslations("home");
  const appT = useTranslations(app.translationKey);

  return (
    <article className="flex flex-col bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
      <div
        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${app.iconGradient} flex items-center justify-center text-white text-2xl font-bold`}
      >
        {app.iconLetter}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mt-5">{appT("name")}</h3>
      <p className="text-sm text-blue-600 font-medium mt-1">
        {appT("tagline")}
      </p>
      <p className="text-sm text-gray-500 mt-3 flex-1">{appT("description")}</p>

      <div className="flex items-center gap-3 mt-6">
        <Link
          href={`/apps/${app.slug}`}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          {homeT("exploreApps")}
        </Link>
        <Link
          href="/download"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {homeT("downloadAll")}
        </Link>
      </div>
    </article>
  );
}

export default function AppShowcase() {
  const t = useTranslations("home");

  return (
    <section className="py-20 px-4 sm:px-6" aria-labelledby="apps-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            id="apps-heading"
            className="text-3xl font-bold text-gray-900 mb-3"
          >
            {t.rich("title", { highlight: HighlightSpan })}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
