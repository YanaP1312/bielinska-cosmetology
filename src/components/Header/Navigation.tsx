

import { navKeys } from "@/lib/helpers/navLinks";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link"



export default async function Navigation() {
    const locale = await getLocale();
    const t = await getTranslations({locale, namespace: 'common.metadata'});



    const links = navKeys.map((key) => ({
      href: `/${locale}/${key === 'home' ? '' : key}`,
      label: t(key),
    }));

return ( <nav className="flex gap-6">
{links.map(({ href, label }) => (
  <Link key={label} href={href} className="text-primary text-lg  tracking-wider  py-5 hover-interaction hover:text-additional ">
    {label}
  </Link>
))}
</nav>)

}

