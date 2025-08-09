
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import ContactSection from '@/components/HomePage/ContactSection';
import HeroSection from '@/components/HomePage/HeroSection';
import ProductsSection from '@/components/HomePage/ProductsSection';
import ServicesSection from '@/components/HomePage/ServicesSection';
import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('common');
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <ProductsSection/>
      <ContactSection/>
     
    </div>
  );
}
