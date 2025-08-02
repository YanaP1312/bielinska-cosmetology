import { getTranslations } from "next-intl/server";
import Image from "next/image";

const AboutMeSection = async () => {

    const t = await getTranslations("common")

    return (<section className="layout-container my-6">
       
        <div className="pb-4">
            <Image src="/images/about_me/TB2.png" alt="Tetiana Bielinska logo for title" width={300} height={80}/>
            <h1 aria-label="Tetiana Bielinska - cosmetologist-esthetician" className="text-2xl tracking-wider font-extrabold italic flex justify-end pt-1">
      &mdash;&nbsp;{t("home_page.profession")}
    </h1></div>
         
            <Image src="/images/about_me/Tetiana_Bielinska.jpg" alt="Tetiana Bielinska foto" width={328} height={400} className="border border-primary rounded-2xl"/>
           
    </section>)
}

export default AboutMeSection;