import Image from "next/image";
import Link from "next/link";

export default function LanguageSelector() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.14),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[24rem] bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.06),transparent_60%)]"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <Link href="/" className="mb-12 block">
          <Image
            src="/cnr-solutions-logo.png"
            alt="CNR Solutions"
            width={180}
            height={52}
            className="object-contain"
            priority
          />
        </Link>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Welcome to CNR Solutions
        </h1>

        <p className="mt-4 text-lg font-medium text-[var(--color-accent)]">
          Choose your language
        </p>

        <div className="mt-3 space-y-1 text-base text-[var(--color-text-muted)]">
          <p>AI-assisted business systems for modern companies.</p>
          <p>Modern işletmeler için yapay zekâ destekli iş sistemleri.</p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/en"
            className="group relative inline-flex min-h-14 min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-8 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[rgba(125,211,252,0.28)] hover:bg-white/[0.07]"
          >
            <span className="text-xl">🇬🇧</span>
            English
          </Link>
          <Link
            href="/tr"
            className="group relative inline-flex min-h-14 min-w-[180px] items-center justify-center gap-3 rounded-2xl bg-[var(--color-accent)] px-8 text-base font-semibold text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
          >
            <span className="text-xl">🇹🇷</span>
            Türkçe
          </Link>
        </div>

        <p className="mt-16 text-xs text-slate-600">
          © {new Date().getFullYear()} CNR Solutions
        </p>
      </div>
    </main>
  );
}
