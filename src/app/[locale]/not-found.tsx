import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { RiHomeHeartFill } from "react-icons/ri";


export default async function NotFound({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "common.dev" });
    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-vibes bg-text">
        <h1 className="text-4xl font-bold mb-10 font-vibes text-background md:text-6xl">{t("not_found")}</h1>
        <Link href={`/${params.locale}`} className="text-accent underline hover:text-additional transition"><RiHomeHeartFill className="w-8 h-8 md:w-12 md:h-12"/></Link>
      </div>
    );
  }
  

