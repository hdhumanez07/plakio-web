"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Cta() {
  const t = useTranslations("cta");
  const steps = [t("steps.0"), t("steps.1"), t("steps.2")];

  return (
    <section
      id="descargar"
      className="py-20 px-4 sm:px-6"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-500 mb-8">{t("description")}</p>

        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 sm:p-10">
          <ol className="text-left space-y-4 mb-8">
            {steps.map((text, i) => (
              <li key={`step-${i}`} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-700 text-sm">{text}</span>
              </li>
            ))}
          </ol>

          <Link
            href="/download"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            {t("button")}
          </Link>

          <p className="mt-4 text-xs text-gray-400">{t("footnote")}</p>
        </div>
      </div>
    </section>
  );
}
