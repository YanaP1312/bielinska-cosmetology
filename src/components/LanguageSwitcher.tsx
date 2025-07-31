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
        className="flex items-center  border border-transparent bg-transparent rounded-full"
      >
        <img
          src={currentLang.icon}
          alt={`Flag ${currentLang.label}`}
          width={30}
          height={30}
          className="w-8 h-8 rounded-full object-cover"
        />
        <MdOutlineKeyboardArrowDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute bg-white border rounded shadow-md top-full mt-2 z-10">
          {locales.map((lang) => (
            <Link
              key={lang.code}
              href={i18nPath}
              locale={lang.code}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              <img src={lang.icon} alt={`Flag ${lang.label}`} width={20} height={20} className="w-8 h-8 rounded-full object-cover"/>
              <span>{lang.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
