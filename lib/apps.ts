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
    apkUrl:
      "https://drive.google.com/file/d/1NIzkLKGEWBgAruhp-YcGoqprg7gPYaYm/view?usp=share_link",
    videoId: "1yTvh8thz6SKoXB8SisJNM3PTuWLsA1hz",
  },
  {
    slug: "citoky",
    name: "Citoky",
    translationKey: "apps.citoky",
    iconGradient: "from-indigo-500 to-purple-700",
    iconLetter: "C",
    apkUrl:
      "https://drive.google.com/file/d/130AUyiFLeZ4pNvXWa2rl1p1Kg7eodkdp/view?usp=share_link",
    videoId: "1dudribcSlZ2aRB7Jo2e9bIi-KP0pn1K1",
  },
];

export function getAppBySlug(slug: string): AppConfig | undefined {
  return apps.find((app) => app.slug === slug);
}
