export type AppConfig = {
  slug: string;
  name: string;
  /** Translation key prefix used in messages files, e.g. "apps.plakio" */
  translationKey: string;
  /** Gradient classes for the app icon */
  iconGradient: string;
  /** Single letter shown in the icon */
  iconLetter: string;
  /** APK file path in /public */
  apkUrl: string;
  /** Google Drive video ID for the tutorial (optional) */
  videoId?: string;
};

export const apps: AppConfig[] = [
  {
    slug: "plakio",
    name: "Plakio",
    translationKey: "apps.plakio",
    iconGradient: "from-blue-500 to-blue-700",
    iconLetter: "P",
    apkUrl: "/plakio-0.1.1.apk",
    videoId: "1yTvh8thz6SKoXB8SisJNM3PTuWLsA1hz",
  },
  {
    slug: "citoky",
    name: "Citoky",
    translationKey: "apps.citoky",
    iconGradient: "from-indigo-500 to-purple-700",
    iconLetter: "C",
    apkUrl: "/citoky-1.0.0.apk",
  },
];

export function getAppBySlug(slug: string): AppConfig | undefined {
  return apps.find((app) => app.slug === slug);
}
