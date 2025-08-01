import LanguageSwitcher from "../LanguageSwitcher";
import Navigation from "./Navigation";

const Header = () => {
    return <header className="flex items-center" >
        <Navigation/>
        <LanguageSwitcher/></header>
}

export default Header;