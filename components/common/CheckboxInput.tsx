type CheckboxInputProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
};

export const CheckboxInput = ({
  label,
  checked,
  onChange,
  id,
}: CheckboxInputProps) => {
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
          className={`flex items-center justify-center w-6 h-6 border rounded-md cursor-pointer ${
            checked
              ? "bg-blue-600 border-blue-600"
              : "bg-white border-[#D3D8EB]"
          }`}
        >
          <svg
            className={`w-4 h-4 text-white ${checked ? "opacity-100" : "opacity-0"}`}
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
        htmlFor="transparent-bg"
        className="text-sm leading-[22px] font-normal text-[#79809A] cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};
