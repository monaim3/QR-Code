import { urlValidationSchema } from "@/lib/validators/validators";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

interface Props {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string; // Direct error prop instead of reading from Redux
  onError?: (error: string) => void; // Callback to set error
  validationKey?: string;
}

export default function InputUrl({
  label,
  placeholder,
  id,
  type = "text",
  value,
  onChange = () => {},
  required = false,
  error,
  onError,
  validationKey,
}: Props) {
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const [isFocused, setIsFocused] = useState(false);

  const validationError =
    validationKey && showErrors ? validationErrors[validationKey] : "";
  const displayError = validationError || error;

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

    if (onError) {
      const result = urlValidationSchema.safeParse(inputValue);

      if (!result.success) {
        onError(result.error.issues[0].message);
      } else {
        onError("");
      }
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onError) {
      if (value && !isValidUrl(value)) {
        onError("You have entered an invalid link. Please try again.");
      } else if (required && !value) {
        onError("This field is required.");
      } else {
        onError("");
      }
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
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        required={required}
        className={`h-12 py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border transition-colors outline-none ${
          displayError
            ? "border-red-500 ring-2 ring-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
            : isFocused
              ? "focus:ring-2 focus:ring-[var(--Blue)] border-[var(--Blue)]"
              : "border-[var(--Boarder-Grey)] hover:border-gray-300"
        }`}
      />
      {displayError && (
        <p className="text-sm text-red-500 font-roboto">{displayError}</p>
      )}
    </div>
  );
}
