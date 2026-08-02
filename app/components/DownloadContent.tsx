"use client";

import { useTranslations } from "next-intl";
import { apps, type AppConfig } from "@/lib/apps";

const AndroidIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 shrink-0"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3.18 23.76A1.94 1.94 0 0 1 2 22V2A1.94 1.94 0 0 1 3.18.24L13.9 12 3.18 23.76Zm17.29-7.45-2.83-1.64-3.2 3.2 2.67 2.67a1.94 1.94 0 0 0 3.36-1.3v-.18a1.94 1.94 0 0 0-1-1.75ZM5.36 1.36l10.74 6.2-3.2 3.21L5.36 1.36Zm14.78 8.52a1.94 1.94 0 0 1 0 3.36l-2.37 1.37-3.38-3.38 3.38-3.38 2.37 1.37v.06Z" />
  </svg>
);

const AppleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 shrink-0"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

function AppIcon({ app }: { readonly app: AppConfig }) {
  return (
    <div
      className={`w-12 h-12 rounded-2xl bg-linear-to-br ${app.iconGradient} flex items-center justify-center text-white text-xl font-bold`}
    >
      {app.iconLetter}
    </div>
  );
}

function DownloadCard({ app }: { readonly app: AppConfig }) {
  const t = useTranslations("download");
  const appT = useTranslations(app.translationKey);

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <AppIcon app={app} />
      <h2 className="text-xl font-bold text-gray-900 mt-4">{appT("name")}</h2>
      <p className="text-sm text-blue-600 font-medium mt-1">
        {appT("tagline")}
      </p>
      <p className="text-sm text-gray-500 mt-2 mb-6">{appT("description")}</p>

      <div className="flex flex-col gap-3 w-full">
        <a
          href={app.apkUrl}
          download
          aria-label={t("androidLabel")}
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        >
          <AndroidIcon />
          <div className="text-left">
            <p className="text-xs opacity-70 leading-none mb-0.5">
              {t("androidLabel")}
            </p>
            <p className="text-sm font-semibold leading-none">{t("android")}</p>
          </div>
        </a>

        <div
          aria-label={t("iosLabel")}
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed"
        >
          <AppleIcon />
          <div className="text-left">
            <p className="text-xs opacity-70 leading-none mb-0.5">
              {t("iosLabel")}
            </p>
            <p className="text-sm font-semibold leading-none">{t("ios")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DownloadContent() {
  const t = useTranslations("download");

  return (
    <main className="flex-1 flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {t("badge")}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t.rich("title", {
            highlight: (chunks) => (
              <span className="text-blue-600">{chunks}</span>
            ),
          })}
        </h1>
        <p className="text-gray-500 mb-10">{t("description")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {apps.map((app) => (
            <DownloadCard key={app.slug} app={app} />
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-left">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
            {t("stepsTitle")}
          </p>
          <ol className="space-y-3">
            {["steps.0", "steps.1", "steps.2"].map((key, i) => (
              <li key={key} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700">{t(key)}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          {t("questions")}{" "}
          <a
            href="mailto:hola@plakio.app"
            className="text-blue-600 hover:underline"
          >
            {t("email")}
          </a>
        </p>
      </div>
    </main>
  );
}
