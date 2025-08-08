'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useBookingForm } from '@/lib/helpers/useBookingForm';
import Modal from './Modal';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import {uk, enUS, ro, ru} from 'date-fns/locale'; 
import type { Locale } from 'date-fns';





export default function AppointmentForm() {
  const t = useTranslations('common.home_page.form');
  const locale = useLocale();
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
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('name')}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={t('phone')}
            type="tel"
            className="w-full p-2 border rounded"
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('email')}
            type="email"
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-2">{t('selectServices')}</label>
          <div className="flex flex-wrap gap-2">
            {serviceList.map(service => (
              <label key={service} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={form.services.includes(service)}
                  onChange={handleChange}
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
          {errors.services && <p className="text-red-600 text-sm mt-1">{errors.services}</p>}
        </div>

        <div>
        <label className="block mb-2">{t('date')}</label>
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
  className="w-full p-2 border rounded"
/>
{errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}

        </div>

        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('message')}
            className="w-full p-2 border rounded"
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-primary text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {t('submit')}
        </button>
      </form>

      {success && (
        <Modal onClose={() => setSuccess(false)}>
          <h2 className="text-xl font-semibold mb-2">{t('successMessage')}</h2>
          <p>{t('thankYou')}</p>
        </Modal>
      )}
    </div>
  );
}

