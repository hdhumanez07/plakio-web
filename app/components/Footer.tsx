"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>
          &copy; {year}{" "}
          <span className="font-medium text-gray-700">Plakio</span>.{" "}
          {t("rights")}
        </span>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="/privacy"
                className="hover:text-gray-700 transition-colors"
              >
                {t("privacy")}
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-gray-700 transition-colors"
              >
                {t("terms")}
              </a>
            </li>
            <li>
              <a
                href="mailto:hola@plakio.app"
                className="hover:text-gray-700 transition-colors"
              >
                {t("contact")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
