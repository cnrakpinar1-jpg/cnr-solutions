import Link from "next/link";
import { Logo } from "@/components/Logo";

function FlagBadge({ locale }: { locale: "tr" | "en" }) {
  if (locale === "tr") {
    return (
      <span
        aria-hidden="true"
        className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-white/25 bg-[#e30a17] shadow-[0_0_18px_rgba(227,10,23,0.28)]"
      >
        <span className="absolute left-[6px] top-[6px] h-3 w-3 rounded-full bg-white" />
        <span className="absolute left-[8px] top-[6px] h-3 w-3 rounded-full bg-[#e30a17]" />
        <span className="absolute right-[4px] top-[7px] text-[0.43rem] leading-none text-white">★</span>
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-white/25 bg-[#012169] shadow-[0_0_18px_rgba(125,211,252,0.2)]"
    >
      <span className="absolute inset-0 bg-[linear-gradient(32deg,transparent_40%,white_40%,white_47%,#c8102e_47%,#c8102e_53%,white_53%,white_60%,transparent_60%),linear-gradient(148deg,transparent_40%,white_40%,white_47%,#c8102e_47%,#c8102e_53%,white_53%,white_60%,transparent_60%)]" />
      <span className="absolute left-1/2 top-0 h-full w-[5px] -translate-x-1/2 bg-white" />
      <span className="absolute left-0 top-1/2 h-[5px] w-full -translate-y-1/2 bg-white" />
      <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#c8102e]" />
      <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-[#c8102e]" />
    </span>
  );
}

export default function LanguageSelector() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(56,189,248,0.05), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <Link href="/" className="mb-14 block">
          <Logo variant="light" size="lg" />
        </Link>

        <div className="w-full rounded-3xl border border-white/8 bg-[rgba(12,18,34,0.6)] p-8 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-[2.15rem]">
            CNR Solutions
          </h1>

          <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

          <p className="mt-5 text-base font-semibold leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Türkiye’deki işletmeleri yapay zekâ çağına hazırlayan pratik iş sistemleri.
          </p>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Müşteri, satış, operasyon ve veri süreçlerini daha görünür, takip edilebilir ve yönetilebilir hale getiren modern iş sistemleri kuruyoruz.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-slate-500">
            CHOOSE YOUR LANGUAGE
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/tr"
              className="group inline-flex min-h-12 items-center justify-between rounded-xl bg-[var(--color-accent)] px-5 text-sm font-semibold text-slate-950 shadow-[0_12px_32px_rgba(56,189,248,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
            >
              <span className="flex items-center gap-2.5">
                <FlagBadge locale="tr" />
                <span className="text-sm font-bold tracking-[0.08em]">TR</span>
                <span>Türkçe</span>
              </span>
              <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/en"
              className="group inline-flex min-h-12 items-center justify-between rounded-xl border border-white/12 bg-white/[0.03] px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[rgba(125,211,252,0.32)] hover:bg-white/[0.06]"
            >
              <span className="flex items-center gap-2.5">
                <FlagBadge locale="en" />
                <span className="text-sm font-bold tracking-[0.08em]">EN</span>
                <span>English</span>
              </span>
              <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Modern business systems for sales, operations, customer management and data workflows.
          </p>
        </div>

        <p className="mt-10 text-[0.7rem] uppercase tracking-[0.28em] text-slate-600">
          CNR SOLUTIONS · AI BUSINESS SYSTEMS
        </p>
      </div>
    </main>
  );
}
