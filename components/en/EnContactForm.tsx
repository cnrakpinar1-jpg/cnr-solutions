'use client'

import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { submitContactForm } from "@/app/actions/contact";

const sectorOptions = [
  "Clinic / Healthcare",
  "Beauty & Medical Aesthetics",
  "Auto Service / Detailing",
  "Education Center / Courses",
  "Furniture / Decoration",
  "Consulting / Services",
  "Retail / Local Business",
  "Other",
];

const dailyInquiryOptions = ["0–10", "10–30", "30–50", "50+"];

const channelOptions = ["WhatsApp", "Instagram", "Phone", "Web Form", "Ads"];
const trackingOptions = ["WhatsApp", "Excel", "Notes", "CRM", "Manual"];
const issueOptions = ["Late replies", "Forgotten customers", "Quote tracking", "Appointment tracking", "Owner visibility"];

type FormState = {
  name: string;
  company: string;
  sector: string;
  email: string;
  phone: string;
  message: string;
  dailyInquiries: string;
  channels: string[];
  trackingMethod: string[];
  biggestIssue: string[];
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function CheckboxGroup({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (updated: string[]) => void;
}) {
  function toggle(option: string) {
    onChange(
      selected.includes(option)
        ? selected.filter((o) => o !== option)
        : [...selected, option]
    );
  }

  return (
    <div>
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "border-[rgba(125,211,252,0.48)] bg-[rgba(125,211,252,0.12)] text-[var(--color-accent)]"
                  : "border-white/10 bg-[rgba(8,12,24,0.8)] text-slate-400 hover:border-white/20 hover:text-slate-300"
              }`}
              aria-pressed={active}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function EnContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    sector: "",
    email: "",
    phone: "",
    message: "",
    dailyInquiries: "",
    channels: [],
    trackingMethod: [],
    biggestIssue: [],
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

  function setArrayField(field: "channels" | "trackingMethod" | "biggestIssue") {
    return (value: string[]) => setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.company.trim()) errs.company = "Company name is required.";
    if (!form.sector) errs.sector = "Please select your sector.";
    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  }

  async function handleSubmit(e: React.SyntheticEvent) {
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
        setErrorMessage(result.error ?? "An unexpected error occurred.");
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
        <h3 className="text-xl font-semibold text-white">Request received.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-400">
          We will get back to you shortly. For a faster response, you can also reach us on WhatsApp.
        </p>
        <a
          href="https://wa.me/905331970462"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-[rgba(125,211,252,0.24)] bg-[rgba(125,211,252,0.07)] px-5 text-sm font-semibold text-[var(--color-accent)] transition-all hover:bg-[rgba(125,211,252,0.12)]"
        >
          Message us on WhatsApp — +90 533 197 0462
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Full Name"
          name="name"
          value={form.name}
          placeholder="Your full name"
          onChange={setField("name")}
          error={errors.name}
          required
        />
        <FormField
          label="Company"
          name="company"
          value={form.company}
          placeholder="Company name"
          onChange={setField("company")}
          error={errors.company}
          required
        />
        <FormField
          label="Sector"
          name="sector"
          type="select"
          value={form.sector}
          placeholder="Select your sector"
          options={sectorOptions}
          onChange={setField("sector")}
          error={errors.sector}
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          placeholder="you@company.com"
          onChange={setField("email")}
          error={errors.email}
          required
        />
        <div className="sm:col-span-2">
          <FormField
            label="Phone / WhatsApp"
            name="phone"
            type="tel"
            value={form.phone}
            placeholder="+90 5XX XXX XX XX"
            onChange={setField("phone")}
            error={errors.phone}
          />
        </div>

        <div className="sm:col-span-2">
          <div className="mb-1">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Business Diagnostic
            </span>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-5 space-y-6">
            <FormField
              label="How many customer inquiries do you receive per day on average?"
              name="dailyInquiries"
              type="select"
              value={form.dailyInquiries}
              placeholder="Select range"
              options={dailyInquiryOptions}
              onChange={setField("dailyInquiries")}
              error={errors.dailyInquiries}
            />
            <CheckboxGroup
              label="What are your main channels?"
              options={channelOptions}
              selected={form.channels}
              onChange={setArrayField("channels")}
            />
            <CheckboxGroup
              label="How do you currently track inquiries?"
              options={trackingOptions}
              selected={form.trackingMethod}
              onChange={setArrayField("trackingMethod")}
            />
            <CheckboxGroup
              label="What is your biggest issue?"
              options={issueOptions}
              selected={form.biggestIssue}
              onChange={setArrayField("biggestIssue")}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <FormField
            label="Message / Current Situation"
            name="message"
            value={form.message}
            placeholder="Briefly describe your current situation. What challenges are you facing with customer follow-up, sales, or operations?"
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
            {errorMessage || "An error occurred."} Please try again or reach us on{" "}
            <a href="https://wa.me/905331970462" className="underline underline-offset-2 hover:text-rose-200">
              WhatsApp
            </a>
            .
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
              Sending...
            </>
          ) : (
            "Get My Customer Flow Score"
          )}
        </button>
        <p className="text-xs leading-5 text-slate-600">
          Required fields:{" "}
          <span className="text-[var(--color-accent)]">*</span>
        </p>
      </div>
    </form>
  );
}
