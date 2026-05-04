type TrScoreCtaProps = {
  label?: string;
  className?: string;
};

export function TrScoreCta({
  label = "Müşteri Akışı Analizimi Al",
  className = "",
}: TrScoreCtaProps) {
  return (
    <div className={`mt-8 flex justify-center ${className}`.trim()}>
      <a
        href="#basvur"
        className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.035] px-4 text-xs font-semibold text-slate-200 transition-colors hover:border-[rgba(125,211,252,0.38)] hover:bg-white/[0.07] hover:text-white sm:px-5 sm:text-sm"
      >
        {label}
      </a>
    </div>
  );
}
