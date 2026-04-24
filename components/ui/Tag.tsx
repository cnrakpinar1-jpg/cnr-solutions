type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full border border-[rgba(125,211,252,0.2)] bg-[rgba(125,211,252,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
      {children}
    </span>
  );
}
