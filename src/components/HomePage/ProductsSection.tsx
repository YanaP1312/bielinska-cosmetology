import { getTranslations } from "next-intl/server"
import BrandsList from "./BrandsList"
import { Link } from "@/i18n/navigation"
import { RiArrowRightWideLine } from "react-icons/ri";

const ProductsSection = async () => {
    const t = await getTranslations("common.metadata")

    return <section className="layout-container section-m">
        <h2 className="section-title section-m">{t("products")}</h2>
        <BrandsList/>
        {/* <Link href={"/products"} className=" flex justify-center items-center gap-2 mt-5 mb-10 bg-accent text-xl font-semibold py-2 px-2 w-40 h-10 border-transparent rounded-lg hover:bg-additional hover-interaction">{t("products")} <RiArrowRightWideLine className="w-4 h-4"/></Link> */}
    </section>

}

export default ProductsSection;