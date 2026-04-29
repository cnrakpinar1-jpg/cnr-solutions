'use client'

import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { submitContactForm } from "@/app/actions/contact";

const sectorOptions = [
  "Üretim",
  "İhracat",
  "Klinik / Sağlık",
  "Profesyonel Hizmet",
  "Perakende / Ticaret",
  "Diğer",
];

type FormState = {
  name: string;
  company: string;
  sector: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<FormState>;

export function TrContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    sector: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function setField(field: keyof FormState) {
    return (value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Ad Soyad zorunludur.";
    if (!form.company.trim()) errs.company = "Şirket adı zorunludur.";
    if (!form.sector) errs.sector = "Lütfen sektörünüzü seçin.";
    if (!form.email.trim()) {
      errs.email = "E-posta adresi zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Geçerli bir e-posta adresi girin.";
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");
    setErrorMessage("");
    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setStatus("success");
      } else {
        setErrorMessage(result.error ?? "Bilinmeyen bir hata oluştu.");
        setStatus("error");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMessage(msg);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl rounded-[24px] border border-emerald-300/20 bg-emerald-300/[0.05] p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-emerald-300" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Talebiniz alındı.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-400">
          En kısa sürede dönüş yapacağız. Hızlı yanıt için WhatsApp&rsquo;tan da ulaşabilirsiniz.
        </p>
        <a
          href="https://wa.me/905331970462"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-[rgba(125,211,252,0.24)] bg-[rgba(125,211,252,0.07)] px-5 text-sm font-semibold text-[var(--color-accent)] transition-all hover:bg-[rgba(125,211,252,0.12)]"
        >
          WhatsApp&rsquo;tan yaz — +90 533 197 0462
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Ad Soyad"
          name="name"
          value={form.name}
          placeholder="Adınız Soyadınız"
          onChange={setField("name")}
          error={errors.name}
          required
        />
        <FormField
          label="Şirket"
          name="company"
          value={form.company}
          placeholder="Şirket adı"
          onChange={setField("company")}
          error={errors.company}
          required
        />
        <FormField
          label="Sektör"
          name="sector"
          type="select"
          value={form.sector}
          placeholder="Sektörünüzü seçin"
          options={sectorOptions}
          onChange={setField("sector")}
          error={errors.sector}
          required
        />
        <FormField
          label="E-posta"
          name="email"
          type="email"
          value={form.email}
          placeholder="ornek@sirket.com"
          onChange={setField("email")}
          error={errors.email}
          required
        />
        <div className="sm:col-span-2">
          <FormField
            label="Telefon / WhatsApp"
            name="phone"
            type="tel"
            value={form.phone}
            placeholder="+90 5XX XXX XX XX"
            onChange={setField("phone")}
            error={errors.phone}
          />
        </div>
        <div className="sm:col-span-2">
          <FormField
            label="Mesaj / Mevcut Durum"
            name="message"
            value={form.message}
            placeholder="Mevcut durumunuzu kısaca anlatın. Müşteri takibi, satış, operasyon veya veri süreçlerinde hangi sorunları yaşıyorsunuz?"
            onChange={setField("message")}
            error={errors.message}
            multiline
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] px-4 py-3.5">
          <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-5a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0v4Zm1-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
          </svg>
          <p className="text-sm text-rose-300">
            {errorMessage || "Bir hata oluştu."} Lütfen tekrar deneyin veya doğrudan{" "}
            <a href="https://wa.me/905331970462" className="underline underline-offset-2 hover:text-rose-200">
              WhatsApp
            </a>{" "}
            üzerinden ulaşın.
          </p>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-full bg-[var(--color-accent)] px-8 text-base font-semibold text-slate-950 shadow-[0_12px_32px_rgba(56,189,248,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] hover:shadow-[0_18px_48px_rgba(56,189,248,0.36)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z" />
              </svg>
              Gönderiliyor...
            </>
          ) : (
            "Analiz Talebi Gönder"
          )}
        </button>
        <p className="text-xs leading-5 text-slate-600">
          Zorunlu alanlar:{" "}
          <span className="text-[var(--color-accent)]">*</span>
        </p>
      </div>
    </form>
  );
}
