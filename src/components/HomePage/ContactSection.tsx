import { getTranslations } from "next-intl/server";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const ContactSection = async () => {

    const t = await getTranslations("common.home_page.form")

return <section className="layout-container section-m">
    <h2 className="section-title" id="appointment">{t("title")}</h2>
    <AppointmentForm/>
</section>
}

export default ContactSection;