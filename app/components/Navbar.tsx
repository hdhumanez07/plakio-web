import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Plakio home"
          className="flex items-center gap-2"
        >
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Plak<span className="text-blue-600">io</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://wa.me/573003046919"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            {t("contact")}
          </a>
          <Link
            href="/download"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {t("download")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
