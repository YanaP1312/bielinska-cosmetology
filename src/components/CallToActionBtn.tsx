import { getTranslations } from "next-intl/server"
import Link from "next/link"

const CallToActionBtn = async () => {

    const t = await getTranslations("common.home_page.form")

    return <Link href="#appointment" className="button">
    {t("title")}
  </Link>
}

export default CallToActionBtn