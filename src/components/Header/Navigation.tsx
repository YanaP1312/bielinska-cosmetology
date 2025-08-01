

import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link"



export default async function Navigation() {
    const locale = await getLocale();
    const t = await getTranslations({locale, namespace: 'common.metadata'});



    const links = [
        { href: `/${locale}/`, label: t('home') },
        { href: `/${locale}/services`, label: t('services') },
        { href: `/${locale}/products`, label: t('products') },
        { href: `/${locale}/qualifications`, label: t('qualification') }
      ];

return (<nav className="flex gap-4">{links.map(({href, label}) => (<Link key={label} href={href} className={"text-gray-600 hover:text-black transition-colors"}>{label}</Link>))}
   
</nav>)
}

