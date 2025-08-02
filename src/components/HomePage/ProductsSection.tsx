import { getTranslations } from "next-intl/server"
import BrandsList from "./BrandsList"
import { Link } from "@/i18n/navigation"
import { RiArrowRightWideLine } from "react-icons/ri";

const ProductsSection = async () => {
    const t = await getTranslations("common.metadata")

    return <section className="layout-container">
        <h2 className="text-additional text-center text-4xl font-bold">{t("products")}</h2>
        <BrandsList/>
        <Link href={"/products"}>{t("products")}&nbsp; <RiArrowRightWideLine /></Link>
    </section>

}

export default ProductsSection;