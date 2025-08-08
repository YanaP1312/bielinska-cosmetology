import { z } from 'zod';

export function createBookingSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().min(1, { message: t('name_required') }),
    phone: z
      .string()
      .min(1, { message: t('phone_required') })
      .regex(/^\+?[0-9]{7,15}$/, { message: t('phone_invalid') }),
    email: z
  .string()
  .trim()
  .transform(val => val === '' ? undefined : val)
  .optional()
  .refine(
    val => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    { message: t('email_invalid') }
  ),
    services: z.array(z.string()).min(1, { message: t('services_required') }),
    message: z.string().optional(),
  });
}
