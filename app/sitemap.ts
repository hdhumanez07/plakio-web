import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/config";
import { apps } from "@/lib/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["es", "en"];
  const routes = ["", "/download", ...apps.map((app) => `/apps/${app.slug}`)];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
