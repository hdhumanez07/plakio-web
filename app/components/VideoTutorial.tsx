"use client";

import { useTranslations } from "next-intl";

type VideoTutorialProps = {
  readonly translationKey: string;
  readonly videoId: string;
};

export default function VideoTutorial({
  translationKey,
  videoId,
}: VideoTutorialProps) {
  const t = useTranslations(`${translationKey}.videoTutorial`);

  return (
    <section
      id="video-tutorial"
      className="py-20 px-4 sm:px-6 bg-gray-50"
      aria-labelledby="video-tutorial-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="video-tutorial-heading"
            className="text-3xl font-bold text-gray-900 mb-3"
          >
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t("description")}</p>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-black">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              title={t("title")}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
