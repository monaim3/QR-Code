import React, { useState } from "react";

type RequiredTextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  id?: string;
  errorMessage?: string;
  required?: boolean;
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
}: RequiredTextInputProps) => {
  const [touched, setTouched] = useState(false);
  const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();

  const showError = required && touched && !value.trim();

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
          border
          focus:outline-none
          ${
            showError
              ? "border-red-500 focus:border-red-500 "
              : "border-[var(--Boarder-Grey)] focus:border-[var(--Blue)] focus:ring-1 focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
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
          {errorMessage}
        </p>
      )}
    </div>
  );
};
