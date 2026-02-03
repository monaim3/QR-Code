type TextInputProps = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  id?: string;
  required?: boolean;
};

export const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  maxLength = 31,
  id,
  required = false,
}: TextInputProps) => {
  const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block mb-2 text-[16px] leading-[24px] font-medium text-[var(--Black)]"
      >
        {label}
        <span>{required ? "*" : ""}</span>
      </label>

      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className="
          w-full px-4 py-3
          border border-[var(--Boarder-Grey)]
          rounded-[10px]
          text-gray-700 placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-[var(--Blue)]
          focus:border-[var(--Blue)] 
          transition-all duration-200
        "
      />
    </div>
  );
};
