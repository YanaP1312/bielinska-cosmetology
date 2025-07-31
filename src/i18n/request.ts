import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {

  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

    const common = (await import(`../../messages/${locale}/common.json`)).default;
    const services = (await import(`../../messages/${locale}/services.json`)).default;
    const products = (await import(`../../messages/${locale}/products.json`)).default;


 
  return {
    locale,
    messages: {
        common,
        services,
        products
      }
  };
});