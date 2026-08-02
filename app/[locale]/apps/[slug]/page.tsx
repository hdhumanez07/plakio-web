import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getAppBySlug, apps } from "@/lib/apps";
import Navbar from "../../../components/Navbar";
import AppHero from "../../../components/AppHero";
import Features from "../../../components/Features";
import VideoTutorial from "../../../components/VideoTutorial";
import CallToAction from "../../../components/CallToAction";
import Footer from "../../../components/Footer";

type Props = {
  readonly params: Promise<{ readonly locale: string; readonly slug: string }>;
};

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};

  const t = await getTranslations({
    locale,
    namespace: `${app.translationKey}`,
  });

  return {
    title: t("name"),
    description: t("description"),
  };
}

export default async function AppPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const app = getAppBySlug(slug);
  if (!app) notFound();

  return (
    <>
      <Navbar />
      <main>
        <AppHero
          translationKey={app.translationKey}
          iconGradient={app.iconGradient}
          iconLetter={app.iconLetter}
        />
        <Features translationKey={app.translationKey} />
        {app.videoId && (
          <VideoTutorial
            translationKey={app.translationKey}
            videoId={app.videoId}
          />
        )}
        <CallToAction translationKey={app.translationKey} />
      </main>
      <Footer />
    </>
  );
}
