
import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('common');
  return (
    <div>
      <h1>{t('home_page.title')}</h1>
     
    </div>
  );
}
