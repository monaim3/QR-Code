import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearFieldError } from "@/store/slices/validationSlice";
import { useState } from "react";

interface Props {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  validationKey?: string;
  required?: boolean;
  error?: string;
}

export default function Input({
  label,
  placeholder,
  id,
  type = "text",
  value,
  onChange = () => {},
  onBlur,
  validationKey,
  error,
}: Props) {
  const dispatch = useAppDispatch();
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const [isFocused, setIsFocused] = useState(false);
  
  const validationError = validationKey && showErrors ? validationErrors[validationKey] : "";
  const hasError = validationError || error;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => { onChange(e.target.value); if (validationKey) dispatch(clearFieldError(validationKey)); }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => { setIsFocused(false); onBlur?.(); }}
        aria-invalid={!!hasError}
        className={`h-12 py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border transition-colors outline-none w-full ${
          hasError
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
            : isFocused
              ? "focus:ring-2 focus:ring-[var(--Blue)] border-[var(--Blue)]"
              : "border-[var(--Boarder-Grey)] hover:border-gray-300"
        }`}
      />
      {hasError && (
        <p className="text-sm text-red-500 font-roboto">
          {validationError || error}
        </p>
      )}
    </div>
  );
}
