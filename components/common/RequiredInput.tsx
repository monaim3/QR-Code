import React, { useState } from "react";
import { useAppSelector } from "@/store/hooks";

type RequiredTextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  id?: string;
  errorMessage?: string;
  required?: boolean;
  validationKey?: string; // Key to get error from Redux validation state
};

export const RequiredTextInput = ({
  label,
  value,
  onChange,
  placeholder,
  maxLength = 31,
  id,
  errorMessage = "This field is required and cannot be left blank.",
  required = true,
  validationKey,
}: RequiredTextInputProps) => {
  const [touched, setTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);

  const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();

  const validationError = validationKey && showErrors ? validationErrors[validationKey] : "";
  const showError = (required && touched && !value.trim()) || validationError;

  const handleBlur = () => {
    setTouched(true);
  };

  const handleFocus = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block mb-2 text-[16px] leading-[24px] font-medium text-[#000000]"
      >
        {label}
        {required && <span className="text-black">*</span>}
      </label>

      <input
        id={inputId}
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`
          w-full px-4 py-3
           rounded-[10px]
          placeholder:text-[var(--Grey)] placeholder:text-gray-400
          transition-all duration-200 
             outline-none
    ${
      showError
        ? "border border-red-500 ring-2 ring-red-500   border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
        : "border border-[var(--Boarder-Grey)] focus:border-[var(--Blue)] focus:ring-2 focus:ring-[var(--Blue)] hover:border-[var(--Boarder-Grey)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
    }
  `}
        aria-invalid={showError}
        aria-describedby={showError ? `${inputId}-error` : undefined}
      />

      {showError && (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-500"
          role="alert"
        >
          {validationError || errorMessage}
        </p>
      )}
    </div>
  );
};
