
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type {Metadata} from 'next';
import "../globals.css"

import {getTranslations} from 'next-intl/server';
import Header from '@/components/Header/Header';

import { Cormorant_Garamond} from 'next/font/google';
import { greatVibes } from '@/fonts/fonts';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
});










 
export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const {locale} = params;
  const t = await getTranslations({locale, namespace: 'common.metadata'});
 
  return {
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    metadataBase: new URL('https://bielinska-cosmetology.vercel.app'),
    openGraph: {
      images: ['/opengraph-image.jpeg'],
    },
    icons: {
      icon: '/favicon.ico',
    },

  };
}


 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className={`${cormorant.variable} ${greatVibes.variable} `}>
      <body>
        <NextIntlClientProvider><Header/>
          {children}</NextIntlClientProvider>
      </body>
    </html>
  );
}