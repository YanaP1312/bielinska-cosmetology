'use server';

import { getTranslations } from "next-intl/server";
import { createBookingSchema } from "../helpers/bookingSchema";



export async function submitBooking(formData: FormData) {
    const t = await getTranslations( 'common.home_page.form' );
    const schema = createBookingSchema(t);

  const raw = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    services: formData.getAll('services'),
    message: formData.get('message'),
    date: formData.get('date')
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errorMap = parsed.error.format();
    const formattedErrors: Record<string, string> = {};
  
    Object.entries(errorMap).forEach(([key, value]) => {
      if (key === '_errors') return;
      if (value && typeof value === 'object' && '_errors' in value && Array.isArray(value._errors)) {
        if (value._errors.length > 0) {
          formattedErrors[key] = value._errors[0];
        }
      }
    });
  
    return { success: false, error: formattedErrors };
  }
  
  const { name, phone, email, services, message,date } = parsed.data;

  // Telegram
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
  const telegramMessage = `
📝 Новая заявка
👤 Имя: ${name}
📞 Телефон: ${phone}
${email ? `📧 Email: ${email}` : ''}
📅 Дата: ${date}
💆 Услуги: ${services.join(', ')}
${message ? `💬 Комментарий: ${message}` : ''}
  `;
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramMessage }),
  });

  
  // Gmail
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const emailHtml = `
    <h2>Новая запись на процедуру</h2>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
    <p><strong>Услуги:</strong> ${services.join(', ')}</p>
    <p><strong>Дата:</strong> ${date}</p>
    ${message ? `<p><strong>Комментарий:</strong> ${message}</p>` : ''}
  `;

  await transporter.sendMail({
    from: `"Форма записи" <${process.env.GMAIL_USER}>`,
    to: 'pechenenko.ya@gmail.com',
    subject: 'Новая запись с сайта',
    html: emailHtml,
  });

  return { success: true };
}
