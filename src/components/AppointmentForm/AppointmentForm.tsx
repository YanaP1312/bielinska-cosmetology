'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useBookingForm } from '@/lib/helpers/useBookingForm';
import Modal from '../Modal';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import {uk, enUS, ro, ru} from 'date-fns/locale'; 
import type { Locale } from 'date-fns';
import "./CustomCalendar.css"





export default function AppointmentForm() {
  const t = useTranslations('common.home_page.form');
  const localeMap: Record<string, Locale> = {
    uk: uk,
    en: enUS,
    ro: ro,
  ru: ru,
  };
  const currentLocale = useLocale();
  const dateFnsLocale = localeMap[currentLocale] || uk;
  
  registerLocale(currentLocale, dateFnsLocale);

  const serviceList = t.raw('services') as string[];
  const {
    form,
    errors,
    submitting,
    success,
    handleChange,
    handleSubmit,
    setSuccess,
    setForm
  } = useBookingForm(t);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000);
  
      return () => clearTimeout(timer); 
    }
  }, [success]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <div className='md:pb-2'>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('name')}
            className="input-style"
          />
          {errors.name && <p className="wrong-msg">{errors.name}</p>}
        </div>

        <div className='md:pb-2'>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={t('phone')}
            type="tel"
            className="input-style"
          />
          {errors.phone && <p className="wrong-msg">{errors.phone}</p>}
        </div>

        <div className='md:pb-2'>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('email')}
            type="email"
            className="input-style"
          />
          {errors.email && <p className="wrong-msg">{errors.email}</p>}
        </div>

        <div className='md:pb-2'>
          <label className="block mb-2 text-primary font-vibes font-semibold text-2xl md:text-3xl">{t('selectServices')}</label>
          <div className="flex flex-wrap gap-2">
            {serviceList.map(service => (
              <label key={service} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={form.services.includes(service)}
                  onChange={handleChange}
                  className='w-4 h-4 accent-additional rounded ml-2'
                  
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
          {errors.services && <p className="wrong-msg">{errors.services}</p>}
        </div>

        <div className='md:pb-2'>
<DatePicker
name="date"
  selected={form.date ? new Date(form.date) : null}
  onChange={(date: Date | null) => {
    setForm((prev: typeof form) => ({
      ...prev,
      date: date ? date.toISOString().split('T')[0] : '',
    }));
  }}
  locale={currentLocale}
  minDate={new Date()}
  dateFormat="yyyy-MM-dd"
  placeholderText={t('date')}
  className="input-style w-[328px] md:w-[576px]"
  popperPlacement="bottom"
  calendarClassName="calendar-custom"
  popperClassName="calendar-popper"
  
/>
{errors.date && <p className="wrong-msg">{errors.date}</p>}

        </div>

        <div className='md:pb-2'>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('message')}
            className="input-style md:h-40"
          />
          {errors.message && <p className="wrong-msg">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="button"
        >
          {submitting ? t('sending') : t('submit')}
        </button>
      </form>

      {success && (
        <Modal onClose={() => setSuccess(false)}>
          <h2 className="text-lg my-6 mx-2 md:xl text-justify">
            <span className='block text-additional font-vibes text-5xl mb-4'>{t('thankYou')}</span>{t('successMessage')}</h2>
      
        </Modal>
      )}
    </div>
  );
}

