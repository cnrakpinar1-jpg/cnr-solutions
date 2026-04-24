type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  error?: string;
  placeholder: string;
  onChange: (value: string) => void;
  multiline?: boolean;
};

const fieldClasses =
  "mt-2 w-full rounded-2xl border border-white/10 bg-[rgba(8,12,24,0.8)] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[rgba(125,211,252,0.48)] sm:text-base";

export function FormField({
  label,
  name,
  value,
  error,
  placeholder,
  onChange,
  multiline = false,
}: FormFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      {multiline ? (
        <textarea
          name={name}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`${fieldClasses} resize-none`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={fieldClasses}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      {error ? (
        <span id={`${name}-error`} className="mt-2 block text-sm text-rose-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}
