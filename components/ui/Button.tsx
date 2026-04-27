import Link from "next/link";
import type { ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

type LinkButtonProps = SharedProps & {
  href: string;
};

type NativeButtonProps = SharedProps & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

function buttonClasses(variant: "primary" | "secondary", className?: string) {
  const base =
    "inline-flex min-h-[3.25rem] items-center justify-center rounded-full px-6 text-sm font-semibold will-change-transform sm:px-7 sm:text-base";
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-slate-950 shadow-[0_18px_54px_rgba(56,189,248,0.34)] hover:-translate-y-1 hover:scale-[1.02] hover:bg-[var(--color-accent-strong)] hover:shadow-[0_22px_70px_rgba(56,189,248,0.42)]",
    secondary:
      "border border-white/[0.14] bg-white/[0.045] text-white shadow-[0_14px_36px_rgba(2,6,23,0.22)] hover:-translate-y-1 hover:scale-[1.02] hover:border-[rgba(125,211,252,0.38)] hover:bg-white/[0.08] hover:shadow-[0_18px_48px_rgba(2,6,23,0.32)]",
  };

  return `${base} ${variants[variant]} ${className ?? ""}`.trim();
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  target,
  rel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={buttonClasses(variant, className)}
    >
      {children}
    </Link>
  );
}

export function ActionButton({
  children,
  type = "button",
  disabled,
  onClick,
  variant = "primary",
  className,
}: NativeButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses(
        variant,
        `${disabled ? "cursor-not-allowed opacity-60" : ""} ${className ?? ""}`,
      )}
    >
      {children}
    </button>
  );
}
