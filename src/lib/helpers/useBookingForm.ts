'use client';
import { useState } from 'react';
import { createBookingSchema } from '@/lib/helpers/bookingSchema';
import { submitBooking } from '@/lib/actions/booking';

export function useBookingForm(t: ReturnType<typeof import('next-intl').useTranslations>) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    services: [] as string[],
    message: '',
    date: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      const isChecked = e.target.checked;
      setForm(prev => ({
        ...prev,
        services: isChecked
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value),
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const schema = createBookingSchema(t);
    const parsed = schema.safeParse(form);

    if (!parsed.success) {
        const formatted: Record<string, string> = {};
        Object.entries(parsed.error.format()).forEach(([key, value]) => {
          if (key === '_errors') return;
          if (value && typeof value === 'object' && '_errors' in value && Array.isArray(value._errors)) {
            if (value._errors.length > 0) {
              formatted[key] = value._errors[0];
            }
          }
        });
        setErrors(formatted);
        setSubmitting(false);
        return;
      }
      

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => formData.append(key, v));
      } else {
        formData.append(key, value);
      }
    });

    const result = await submitBooking(formData);

    if (result.success) {
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', services: [], message: '', date: "" });
      setErrors({});
    } else {
      setErrors(result.error ?? {});
    }

    setSubmitting(false);
  }

  return {
    form,
    errors,
    submitting,
    success,
    handleChange,
    handleSubmit,
    setSuccess,
    setForm
  };
}
