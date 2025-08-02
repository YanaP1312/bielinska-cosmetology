import { getTranslations } from "next-intl/server";
import Image from "next/image";

const AboutMeSection = async () => {

    const t = await getTranslations("common")

    return (<section className="layout-container my-8">
       
        <h1 className="pb-4">
            <Image src="/images/about_me/TB2.png" alt="Tetiana Bielinska logo for title" width={300} height={80}/>
            <span className="flex justify-end pt-1 text-2xl  tracking-wider font-extrabold italic ">&nbsp;&mdash;&nbsp;{t("home_page.profession")}</span></h1>
         
            <Image src="/images/about_me/Tetiana_Bielinska.jpg" alt="Tetiana Bielinska foto" width={328} height={100} className="border rounded-2xl"/>
           
    </section>)
}

export default AboutMeSection;