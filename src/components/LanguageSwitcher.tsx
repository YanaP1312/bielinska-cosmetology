'use client';

import { useState} from 'react';
import { usePathname as useIntlPathname, Link } from '@/i18n/navigation';
import { usePathname as useRawPathname } from 'next/navigation';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const locales = [
  { code: 'uk', label: 'UA', icon: '/images/flags/ua.svg' },
  { code: 'ro', label: 'RO', icon: '/images/flags/ro.svg' },
  { code: 'en', label: 'EN', icon: '/images/flags/en.svg' },
  { code: 'ru', label: 'RU', icon: '/images/flags/ru.svg' }
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const i18nPath = useIntlPathname(); 
  const rawPath = useRawPathname() ?? '';  

  const currentLang = locales.find(({ code }) => rawPath.startsWith(`/${code}`)) || locales[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center  border border-transparent bg-transparent rounded-full gap-0 hover-interaction hover:scale-105 md:gap-1"
      >
        <img
          src={currentLang.icon}
          alt={`Flag ${currentLang.label}`}
          width={15}
          height={15}
          className="w-8 h-8 rounded-full object-cover md:w-8 md:h-8 "
        />
        <MdOutlineKeyboardArrowDown className="w-4 h-4 fill-primary md:w-5 md:h-5" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-4 z-10 min-w-[80px] bg-background border border-border rounded-xl shadow-lg md:mt-5 lg:min-w-[86px]">
          {locales.map((lang) => (
            <Link
              key={lang.code}
              href={i18nPath}
              locale={lang.code}
              className="flex items-center gap-2 px-3 py-2 hover-interaction hover:scale-110 "
              onClick={() => setIsOpen(false)}
            >
              <img src={lang.icon} alt={`Flag ${lang.label}`} width={20} height={20} className="w-6 h-6 rounded-full object-cover  lg:w-8 lg:h-8"/>
              <span>{lang.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
