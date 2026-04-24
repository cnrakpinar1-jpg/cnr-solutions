"use client";

import { useMemo, useState } from "react";
import { ActionButton } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

type FormValues = {
  name: string;
  business: string;
  email: string;
  whatYouNeed: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  business: "",
  email: "",
  whatYouNeed: "",
};

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please add your name.";
  }

  if (!values.business.trim()) {
    errors.business = "Please add your business name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please add your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.whatYouNeed.trim()) {
    errors.whatYouNeed = "A short description helps scope the system.";
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitted(false);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    setIsSubmitting(false);
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <SectionShell id="contact" className="pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Get started"
            title="Tell me what is slowing the workflow down."
            description="Share the rough shape of the problem and I will map it into a clearer internal system plan."
          />
          <div className="mt-8 surface rounded-3xl p-6">
            <div className="text-sm font-medium text-white">Good fit for:</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Small teams stuck in manual admin work</li>
              <li>Businesses outgrowing spreadsheets and inbox workflows</li>
              <li>Operators who need better visibility, routing, or follow-up</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-strong rounded-[28px] p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Your name"
                  name="name"
                  value={values.name}
                  error={errors.name}
                  placeholder="Jane Smith"
                  onChange={(value) => updateField("name", value)}
                />
                <FormField
                  label="Business"
                  name="business"
                  value={values.business}
                  error={errors.business}
                  placeholder="Northline Dental"
                  onChange={(value) => updateField("business", value)}
                />
              </div>
              <FormField
                label="Email"
                name="email"
                value={values.email}
                error={errors.email}
                placeholder="jane@business.com"
                onChange={(value) => updateField("email", value)}
              />
              <FormField
                label="What do you need?"
                name="whatYouNeed"
                value={values.whatYouNeed}
                error={errors.whatYouNeed}
                placeholder="We need a better way to manage bookings, follow-ups, and client updates."
                onChange={(value) => updateField("whatYouNeed", value)}
                multiline
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p
                  className={`text-sm ${
                    submitted
                      ? "text-[var(--color-success)]"
                      : hasErrors
                        ? "text-rose-300"
                        : "text-slate-400"
                  }`}
                  aria-live="polite"
                >
                  {submitted
                    ? "Plan request captured. I will follow up with a cleaner system direction."
                    : hasErrors
                      ? "A few fields still need attention."
                      : "Short, clear answers are enough. No long brief needed."}
                </p>
                <ActionButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Get a quick system plan"}
                </ActionButton>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
