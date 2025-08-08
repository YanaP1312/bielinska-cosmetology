import { getTranslations } from "next-intl/server"
import BrandsList from "./BrandsList"
import { Link } from "@/i18n/navigation"
import { RiArrowRightWideLine } from "react-icons/ri";

const ProductsSection = async () => {
    const t = await getTranslations("common.metadata")

    return <section className="layout-container section-m">
        <h2 className="section-title section-m">{t("products")}</h2>
        <BrandsList/>
    </section>

}

export default ProductsSection;