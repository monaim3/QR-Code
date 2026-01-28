"use client";
import { useState, FC, InputHTMLAttributes } from "react";

interface InputFieldProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
  error?: boolean;
  desktopWidth?: number;
  multiline?: boolean;
  className?: string;
}

const SimpleInputField: FC<InputFieldProps> = ({
    value,
    onChange,
    placeholder = "",
    type = "text",
    error = false,
    desktopWidth = 336,
    multiline = false,
    className = '', // default false
    ...rest
  }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    const baseClasses = `
      w-full
      px-4
      text-[16px]
      font-medium
      leading-[22px]
      border
      rounded-[10px]
      text-gray-900
      placeholder:text-[var(--placeholder-grey)]
      focus:outline-none
      ${isFocused ? "border-[var(--Blue)] ring-2 ring-[var(--Blue)]" : error ? "border-[var(--error)] ring-2 ring-[var(--error)]" : "border-[var(--Boarder-Grey)]"}
    `;
  
    return (
      <div className="w-full" style={multiline ? {} :{ maxWidth: desktopWidth }}>
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={4} // default 4 lines, can be customized
            className={`w-full px-3 py-2 ${baseClasses} ${className}`}
            style={{ fontFamily: "var(--font-poppins)" }}
            {...rest}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`${baseClasses} h-12`}
            style={{ fontFamily: "var(--font-poppins)" }}
            {...rest}
          />
        )}
      </div>
    );
  };
  
export default SimpleInputField;