import { Link } from "@/i18n/navigation";
import {  getTranslations } from "next-intl/server";
import Image from "next/image";

const HeroSection = async () => {

    const t = await getTranslations("common.home_page.about_me")

    return (<section className="layout-container my-10 lg:my-14">
       <div className=" grid grid-cols-1 gap-10 mb-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr] lg:mb-14">
        <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-4" >
            <Image src="/images/about_me/TB2.png" alt="Tetiana Bielinska logo for title" width={328} height={216} className="mb-2 w-max lg:mb-4"/>
            <h1 aria-label="Tetiana Bielinska - cosmetologist-esthetician" className="text-xl tracking-wider text-right mb-10 lg:text-3xl lg:max-w-[440px] lg:ml-auto">
      &mdash;&nbsp;{t("title")}
    </h1>
    <p className="font-vibes text-3xl tracking-widest font-medium text-center md:text-2xl lg:text-4xl">&quot;{t("mission")}&quot;</p>
    </div>
    <Image src="/images/about_me/TV.jpg" alt="Tetiana Bielinska foto" width={328} height={491} className="border border-primary rounded-2xl w-max"/> 
         
         </div>

     


         <div className="grid grid-cols-1 text-justify lg:text-xl lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-2 mb-2 lg:gap-4">
            <p>{t("intro")}</p>
            <p>{t("background")}&nbsp;<Link href="/qualification" className="common-accent">{t("background_span")}</Link></p>
            <p>{t("education")}<Link href="/services" className="common-accent">{t("education_span")}</Link></p>
            </div>
            <div className="flex flex-col gap-4">
            <p>{t("approach")}</p>
            <p>{t("closing")}</p>
            </div>

           
           
            </div>    
           
    </section>)

   

}

export default HeroSection;

