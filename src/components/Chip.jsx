const sizes = {
  sm: "h-7 px-2 text-sm",
  md: "h-8 px-3 text-base",
};

const tones = {
  active: "bg-racing text-white shadow-sm shadow-red-900/20",
  soft: "bg-red-100 text-red-900",
  idle: "text-zinc-700 hover:bg-zinc-100",
};

/** Pill toggle button used by every filter group. */
const Chip = ({
  active = false,
  soft = false,
  size = "md",
  className = "",
  ...props
}) => (
  <button
    type="button"
    aria-pressed={active}
    className={`inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full font-semibold tracking-wide uppercase transition-colors ${sizes[size]} ${tones[active ? "active" : soft ? "soft" : "idle"]} ${className}`}
    {...props}
  />
);

export const ChipGroup = ({ label, className = "", children }) => (
  <div
    role="group"
    aria-label={label}
    className={`inline-flex flex-wrap items-center gap-0.5 rounded-3xl bg-white/70 p-1 shadow-sm ring-1 ring-zinc-200 backdrop-blur ${className}`}
  >
    {children}
  </div>
);

export const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1">
    <span className="pl-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
      {label}
    </span>
    {children}
  </div>
);

export default Chip;
