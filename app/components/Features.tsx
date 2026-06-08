"use client";

import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section
      id="como-funciona"
      className="py-20 px-4 sm:px-6 bg-gray-50"
      aria-labelledby="features-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            id="features-heading"
            className="text-3xl font-bold text-gray-900 mb-3"
          >
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t("description")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <article
              key={f.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
