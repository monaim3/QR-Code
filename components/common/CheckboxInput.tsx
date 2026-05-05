type CheckboxInputProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  bgColor?: string;
};

export const CheckboxInput = ({
  label,
  checked,
  onChange,
  id,
  bgColor,
}: CheckboxInputProps) => {
  const defaultColor = "#2563eb";
  const activeColor = bgColor || defaultColor;

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        <label
          htmlFor={id}
          className={`flex items-center justify-center w-6 h-6 border rounded-md cursor-pointer transition-all duration-200 hover:border-2`}
          style={{
            backgroundColor: checked ? activeColor : "white",
            borderColor: checked ? activeColor : "#D3D8EB",
          }}
        >
          <svg
            className={`w-4 h-4 text-white transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </label>
      </div>
      <label
        htmlFor={id}
        className="text-sm leading-[22px] font-normal cursor-pointer select-none text-[var(--Black)]"
      >
        {label}
      </label>
    </div>
  );
};
