import Link from "next/link";
import { Logo } from "@/components/Logo";

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

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <Link href="/" className="mb-14 block">
          <Logo variant="light" size="lg" />
        </Link>

        <div className="w-full rounded-3xl border border-white/8 bg-[rgba(12,18,34,0.6)] p-8 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
            CNR Data Room — operational data system
          </h1>

          <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

          <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
            İhracat yapan üreticiler için veri odası ve operasyon sistemi.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-slate-500">
            Choose your language
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/tr"
              className="group inline-flex min-h-12 items-center justify-between rounded-xl bg-[var(--color-accent)] px-5 text-sm font-semibold text-slate-950 shadow-[0_12px_32px_rgba(56,189,248,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
            >
              <span className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-950/15 bg-slate-950/10 text-[0.58rem] font-black tracking-[0.04em]">
                  TR
                </span>
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
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.08)] text-[0.58rem] font-black tracking-[0.04em] text-[var(--color-accent)]">
                  EN
                </span>
                <span>English</span>
              </span>
              <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            From scattered files to a system your team can use.
          </p>
        </div>

        <p className="mt-10 text-[0.7rem] uppercase tracking-[0.28em] text-slate-600">
          CNR Solutions · CNR Data Room
        </p>
      </div>
    </main>
  );
}
