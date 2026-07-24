/**
 * variant="dark"  -> for use on dark backgrounds (Work With Us)
 * variant="light" -> for use on white/card backgrounds (Contact)
 */
function FormField({ icon: Icon, variant = "light", className = "", ...inputProps }) {
  const theme =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/35 focus:border-teal focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(62,207,174,0.15)]"
      : "border-slate-200 bg-white text-ink placeholder:text-ink/35 focus:border-teal focus:shadow-[0_0_0_4px_rgba(62,207,174,0.15)]";

  const iconTone = variant === "dark" ? "text-white" : "text-ink";

  return (
    <div className="group relative">
      {Icon && (
        <Icon
          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 ${iconTone} opacity-40 transition-opacity group-focus-within:opacity-100 group-focus-within:text-teal`}
        />
      )}
      <input
        {...inputProps}
        className={`w-full rounded-xl px-4 py-3.5 ${Icon ? "pl-11" : ""} outline-none transition-all duration-200 border ${theme} ${className}`}
      />
    </div>
  );
}

export default FormField;