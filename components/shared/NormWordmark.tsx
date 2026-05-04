type NormWordmarkProps = {
  size?: "header" | "hero";
  className?: string;
};

export function NormWordmark({ size = "header", className = "" }: NormWordmarkProps) {
  const sizes = {
    header: {
      text: "text-[1.35rem] sm:text-[1.5rem]",
      bar: "mb-[0.18em] h-[3px] w-4 sm:w-5",
      gap: "gap-1.5",
    },
    hero: {
      text: "text-[1.85rem] sm:text-[2.15rem]",
      bar: "mb-[0.2em] h-1 w-6 sm:w-7",
      gap: "gap-2",
    },
  } as const;

  const s = sizes[size];

  return (
    <span
      aria-label="Norm"
      className={`inline-flex select-none items-end leading-none ${s.gap} ${className}`}
    >
      <span className={`font-extrabold uppercase text-white [letter-spacing:0] ${s.text}`}>
        NORM
      </span>
      <span
        aria-hidden="true"
        className={`${s.bar} rounded-full bg-[var(--color-accent)] shadow-[0_0_14px_rgba(56,189,248,0.38)]`}
      />
    </span>
  );
}
