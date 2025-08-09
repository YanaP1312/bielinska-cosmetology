import { useTranslations } from "next-intl";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const Footer = () =>{

    const t = useTranslations("common.home_page.footer");

    return <footer className=" bg-text py-10 text-primary text-lg tracking-wider  lg:text-xl">
        <div className="layout-container  grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <a
  href="https://maps.app.goo.gl/jVvQREnFZoZvqt98A"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-elements"
>
{t("address")}
</a>
<div className="flex gap-5 mt-3 md:mt-5 lg:mt-4">
<a
  href="https://www.instagram.com/tatiana_belins?igsh=N2NrZm0zYW83Nm96"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <BsInstagram className="footer-elements w-5 h-5  hover:scale-90 md:w-6 md:h-6" />
</a>

<a
  href="https://t.me/tatiana_belins_cosmetologist"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Telegram"
>
  <FaTelegramPlane className="footer-elements w-5 h-5  hover:scale-90 md:w-6 md:h-6" />
</a>

<a
  href="https://www.facebook.com/Tetiana.Bielinska"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
>
  <FaFacebook className="footer-elements w-5 h-5  hover:scale-90 md:w-6 md:h-6" />
</a>
</div>
</div>



        <div className="flex flex-col gap-3 md:items-end">
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
        <a href="tel:+380989464184" className="footer-elements flex gap-2 items-center"><MdPhone  className=" w-5 h-5  hover:scale-90 "/>+380989464184</a>
<a href="tel:+40734406665" className="footer-elements flex gap-2 items-center"><MdPhone  className=" w-5 h-5  hover:scale-90 "/>+40734406665</a>
</div>
<a href="mailto:tetiana.bielinska@gmail.com" className="footer-elements flex gap-2 items-center"><MdEmail className="hover:scale-90 w-5 h-5"/>tetiana.bielinska@gmail.com</a>


        </div>
        </div>
    </footer>
};

export default Footer;