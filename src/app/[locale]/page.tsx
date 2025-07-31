
import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('common');
  return (
    <div>
      <h1 className="font-serif text-lg">{t('home_page.title')}</h1>
     
    </div>
  );
}
