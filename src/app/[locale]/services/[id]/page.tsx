import { getTranslations } from "next-intl/server";



export default async function Page() {
  const t = await getTranslations("common.dev")

  return <div className="min-h-[calc(100vh-354px)] w-full flex items-center justify-center md:min-h-[calc(100vh-256px)] lg:min-h-[calc(100vh-236px)]">
  <h1 className="text-6xl mb-10 font-vibes text-additional md:text-8xl">{t("soon")}</h1>
</div>;
  }