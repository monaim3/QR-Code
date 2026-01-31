import { useState } from "react";

interface Props {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export default function InputUrl({
  label,
  placeholder,
  id,
  type = "text",
  value,
  onChange = () => {},
  required = false,
}: Props) {
  const [error, setError] = useState<string>("");

  // URL validation function
  const isValidUrl = (url: string) => {
    if (!url) return true;

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (inputValue: string) => {
    onChange(inputValue);

    // Validate on change
    if (inputValue && !isValidUrl(inputValue)) {
      setError("You have entered an invalid link. Please try again.");
    } else if (required && !inputValue) {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    // Validate on blur
    if (value && !isValidUrl(value)) {
      setError("You have entered an invalid link. Please try again.");
    } else if (required && !value) {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
      >
        {label}
        {required && <span className="text-black ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        required={required}
        className={`h-12 py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500 hover:ring-red-500"
            : "border-[var(--Boarder-Grey)] focus:border-[var(--Blue)] focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
        }`}
      />
      {error && (
        <p className="text-red-500 text-[14px] leading-[20px]">{error}</p>
      )}
    </div>
  );
}
