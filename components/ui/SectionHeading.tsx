import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </div>
  );
}
