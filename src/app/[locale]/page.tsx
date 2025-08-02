
import AboutMeSection from '@/components/HomePage/AboutMeSection';
import ProductsSection from '@/components/HomePage/ProductsSection';
import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('common');
  return (
    <main>
      <AboutMeSection/>
      <ProductsSection/>
     
     
    </main>
  );
}
