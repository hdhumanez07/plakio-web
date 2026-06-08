"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${
            l === locale
              ? "bg-blue-100 text-blue-700"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          }`}
          aria-label={t(l)}
          aria-current={l === locale ? "page" : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
