import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import Navigation from "./Navigation";


import Link from "next/link";
import BurgerBtn from "./BurgerBtn";

const Header = () => {



    return <header className="bg-text relative" >

        <div className="layout-container flex items-center justify-between">
            <Link href='/' aria-label="Go to homepage">
              
            <Image src="/images/logo.png" alt="Tetiana Bielinska logo" width={50} height={50} className="hover-interaction hover:scale-105"/></Link>
           <div className="hidden md:flex">
        <Navigation/>
        </div>
        <div className="hidden md:flex">
        <LanguageSwitcher/>
        </div>
        

        <div className="py-4 md:hidden flex items-center gap-2">
        <LanguageSwitcher/>  
        <BurgerBtn/>
        </div>
        </div>
        
        </header>
}

export default Header;