"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

type AppHeroProps = {
  readonly translationKey: string;
  readonly iconGradient: string;
  readonly iconLetter: string;
};

export default function AppHero({
  translationKey,
  iconGradient,
  iconLetter,
}: AppHeroProps) {
  const t = useTranslations(`${translationKey}.hero`);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div
          className={`w-16 h-16 rounded-2xl bg-linear-to-br ${iconGradient} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6`}
        >
          {iconLetter}
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {t("badge")}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
          {t.rich("title", {
            highlight: (chunks) => (
              <span className="text-blue-600">{chunks}</span>
            ),
          })}
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            {t("ctaPrimary")}
          </Link>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            {t("ctaSecondary")}
          </a>
        </div>

        <p className="mt-5 text-xs text-gray-400">{t("footnote")}</p>
      </div>
    </section>
  );
}
