'use server'

import { Resend } from 'resend';

export type ContactFormData = {
  name: string;
  company: string;
  sector: string;
  email: string;
  phone: string;
  message: string;
};

function buildEmailHtml(data: ContactFormData): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:10px 16px;font-weight:600;color:#94a3b8;width:160px;vertical-align:top;white-space:nowrap;">${label}</td>
      <td style="padding:10px 16px;color:#f1f5f9;vertical-align:top;">${value || '—'}</td>
    </tr>`;

  return `
    <!DOCTYPE html>
    <html lang="tr">
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:32px 16px;background:#060816;font-family:system-ui,-apple-system,sans-serif;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="margin-bottom:24px;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#7dd3fc;">CNR Solutions</p>
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#f1f5f9;">Yeni CBAM Data Room Demo Talebi</h1>
        </div>

        <table style="width:100%;border-collapse:collapse;border-radius:16px;overflow:hidden;border:1px solid rgba(148,163,184,.15);background:rgba(17,24,39,.9);">
          <tbody>
            ${row('Ad Soyad', data.name)}
            ${row('Şirket', data.company)}
            ${row('Sektör', data.sector)}
            ${row('E-posta', `<a href="mailto:${data.email}" style="color:#7dd3fc;text-decoration:none;">${data.email}</a>`)}
            ${row('Telefon / WhatsApp', data.phone ? `<a href="https://wa.me/${data.phone.replace(/\D/g, '')}" style="color:#7dd3fc;text-decoration:none;">${data.phone}</a>` : '—')}
            ${row('Mesaj', data.message ? `<span style="white-space:pre-wrap;">${data.message}</span>` : '—')}
          </tbody>
        </table>

        <p style="margin:24px 0 0;font-size:12px;color:#475569;">
          Bu e-posta CNR Solutions CBAM Data Room demo talep formu aracılığıyla gönderilmiştir.
        </p>
      </div>
    </body>
    </html>
  `;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  console.log('[contact form] Incoming submission:', JSON.stringify(data, null, 2));

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('[contact form] RESEND_API_KEY is not set — cannot send email');
    return { success: false, error: 'Sunucu yapılandırması eksik (API key yok). Lütfen yönetici ile iletişime geçin.' };
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: 'CNR Solutions <onboarding@resend.dev>',
      // TEMPORARY: sending to Gmail for testing. Change to info@cnr-solutions.com once confirmed working.
      to: ['cnrakpinar1@gmail.com'],
      replyTo: data.email,
      subject: `Yeni CBAM Data Room Demo Talebi — ${data.company}`,
      html: buildEmailHtml(data),
    });

    console.log('[contact form] Resend full response:', JSON.stringify(result, null, 2));

    if (result.error) {
      console.error('[contact form] Resend returned an error:', JSON.stringify(result.error, null, 2));
      return {
        success: false,
        error: `Mail gönderilemedi: ${result.error.message ?? JSON.stringify(result.error)}`,
      };
    }

    console.log('[contact form] EMAIL SENT successfully. ID:', result.data?.id);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[contact form] Unexpected error:', message, err);
    return { success: false, error: `Beklenmeyen hata: ${message}` };
  }
}
