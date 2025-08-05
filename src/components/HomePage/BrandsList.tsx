import Image from "next/image";
import {brands} from "../../lib/data/brands"
import { getTranslations } from "next-intl/server";

const BrandsList = async () => {
    const t = await getTranslations("common.countries")
    return (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {brands.map(({id, title, countryCode, href}) => (<li key={id} className="flex flex-col justify-center items-center border border-primary rounded-lg  overflow-hidden hover-interaction hover:shadow-md bg-white pb-2">
                <div className="flex justify-center items-center w-[156px] h-[156px] bg-white mb-2">
                <Image src={href} alt={`Logo of ${title}`} width={328} height={328} className="object-contain  "/>
                </div>
                <h3 className="text-lg md:text-xl md:font-semibold ">{title}</h3>
                <p className="text-additional tracking-wider  md:text-lg ">{t(`${countryCode}`)}</p>
            </li>))}
        </ul>
    )
}

export default BrandsList;