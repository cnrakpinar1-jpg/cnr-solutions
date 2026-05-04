type NormLogoImageProps = {
  className?: string;
  loading?: "eager" | "lazy";
};

export function NormLogoImage({
  className = "h-6 w-auto object-contain",
  loading = "lazy",
}: NormLogoImageProps) {
  return (
    <img
      src="/brand/norm-logo-white.png"
      alt="Norm"
      width={970}
      height={187}
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}
