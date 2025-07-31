
import type {Metadata} from 'next';


import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const {locale} = params;
  const t = await getTranslations({locale, namespace: 'common.metadata'});
 
  return {
    title: 
     `${t('brand')} | ${t('title')}` 
  };
}
  
  export default function Page() {
    return <div>Brand page</div>;
  }