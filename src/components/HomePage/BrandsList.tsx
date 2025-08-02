import Image from "next/image";
import {brands} from "../../lib/data/brands"
import { getTranslations } from "next-intl/server";

const BrandsList = async () => {
    const t = await getTranslations("common.countries")
    return (
        <ul>
            {brands.map(({id, title, countryCode, href}) => (<li key={id}>
                <Image src={href} alt={`Logo of ${title}`} width={90} height={70}/>
                <h3>{title}</h3>
                <p>{t(`${countryCode}`)}</p>
            </li>))}
        </ul>
    )
}

export default BrandsList;