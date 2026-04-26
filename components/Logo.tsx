type LogoProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Logo({ variant = "light", size = "md", className = "" }: LogoProps) {
  const isLight = variant === "light";

  const sizes = {
    sm: {
      mark: "text-base",
      sub: "text-[0.55rem]",
      gap: "gap-[2px]",
      accent: "h-[2px] w-3",
    },
    md: {
      mark: "text-xl",
      sub: "text-[0.6rem]",
      gap: "gap-[3px]",
      accent: "h-[2px] w-4",
    },
    lg: {
      mark: "text-3xl sm:text-4xl",
      sub: "text-xs sm:text-[0.78rem]",
      gap: "gap-[4px]",
      accent: "h-[3px] w-6",
    },
  } as const;

  const s = sizes[size];

  const markColor = isLight ? "text-white" : "text-slate-950";
  const subColor = isLight ? "text-slate-400" : "text-slate-600";
  const accentColor = "bg-[var(--color-accent)]";

  return (
    <div
      className={`inline-flex select-none flex-col leading-none ${s.gap} ${className}`}
      aria-label="CNR Solutions"
    >
      <div className="flex items-baseline gap-[0.4em]">
        <span
          className={`font-bold tracking-[-0.02em] ${markColor} ${s.mark}`}
          style={{ fontFeatureSettings: '"ss01"' }}
        >
          CNR
        </span>
        <span aria-hidden="true" className={`${accentColor} ${s.accent} rounded-full`} />
      </div>
      <span
        className={`font-medium uppercase tracking-[0.32em] ${subColor} ${s.sub}`}
      >
        Solutions
      </span>
    </div>
  );
}
