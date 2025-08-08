import Image from "next/image";
import {brands} from "../../lib/data/brands"
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const BrandsList = async () => {
    const t = await getTranslations("common.countries")
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            {brands.map(({id, title, countryCode, href}) => (<li key={id} >
                <Link href={`/products/brand/${id}`} className="flex flex-col justify-center items-center border border-primary rounded-lg  overflow-hidden hover-interaction hover:shadow-md bg-white pb-2">
                <div className="flex justify-center items-center w-[328px] h-[156px] bg-white mb-2 ">
                <Image src={href} alt={`Logo of ${title}`} width={320} height={212} className="object-contain max-w-full max-h-full"/>
                </div>
                <h3 className="text-lg md:text-xl md:font-semibold ">{title}</h3>
                <p className="text-additional tracking-wider  md:text-lg ">{t(`${countryCode}`)}</p></Link>
            </li>))}
        </ul>
    )
}

export default BrandsList;