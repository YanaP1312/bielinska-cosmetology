import { getTranslations } from "next-intl/server";
import MarqueeServer from "./MarqueeServer";

const ServicesSection = async () => {
const t = await getTranslations("common")

    return <section className="section-m">
        <MarqueeServer/>
        <div className="layout-container">
        <h2 className="section-title mb-10 lg:mb-14">{t("metadata.services")}
        </h2>
        </div>
    </section>
}

export default ServicesSection;