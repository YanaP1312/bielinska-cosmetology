
import HeroSection from '@/components/HomePage/HeroSection';
import ProductsSection from '@/components/HomePage/ProductsSection';
import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('common');
  return (
    <main>
      <HeroSection/>
      <ProductsSection/>
    </main>
  );
}
