"use client"

import { TfiClose } from "react-icons/tfi";


import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { navKeys } from "@/lib/helpers/navLinks";
import Link from "next/link";



const MobMenu = ({onClose}: {onClose: () => void}) => {

    const locale = useLocale();
    const t = useTranslations("common.metadata");
    const pathname = usePathname();



    const links = navKeys.map(key => (({
        href: `/${locale}/${key === 'home' ? '' : key}`,
        label: t(key),
      })));


const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
}

useEffect(()=>{document.body.classList.add("no-scroll")
return document.body.classList.remove('no-scroll')}, [])

useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      document.activeElement instanceof HTMLElement && document.activeElement.blur();

    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);



    return (<div onClick={handleBackdropClick} className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex justify-end">
           
        <div className="relative w-1/2 h-full bg-text shadow-lg flex flex-col justify-center items-center">
            <button onClick={onClose} aria-label="Close mobile menu" className="absolute top-6 right-4 hover-interaction hover:text-accent hover:scale-105">
            <TfiClose 
  className="w-6 h-6 fill-primary hover-interaction hover:fill-additional"/>
            </button>
            <nav className="flex flex-col gap-6">


      {links.map(({ href, label }) => {

         const isActive = pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

         return(
          <Link
            key={label}
            href={href}
            className={`text-xl text-center tracking-wider font-medium ${isActive ? "text-additional   text-3xl italic" : "text-primary"} hover-interaction hover:text-additional`}
            onClick={onClose}
          >
            {label}
          </Link>)
          
        }
        )}
    </nav>
           
        </div>
       </div>)
}

export default MobMenu;