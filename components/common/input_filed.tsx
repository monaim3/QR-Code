"use client";
import { ReactNode, useState } from "react";

interface InputFieldProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
  leading?: ReactNode; // icon at the start
  trailing?: ReactNode; // icon/button at the end
  desktopWidth?: number;
  error?: boolean;
}

export default function InputField({
  value,
  onChange,
  placeholder = "",
  type = "text",
  leading,
  trailing,
  desktopWidth = 336,
  error = false,
}: InputFieldProps) {
  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Determine input type (useful for password show/hide)
  const inputType = type === "password" && show ? "text" : type;

  return (
    <div className="relative">
      {/* Leading icon */}
      {leading && (
        <div className="flex items-center absolute left-[17px] top-1/2 -translate-y-1/2 text-gray-400">
          {leading}
          <div className="w-px mx-[16px] h-6 bg-gray-300"></div>
        </div>
      )}

      {/* Input */}
    <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          h-12
          w-full                       
          pl-[68px]
          ${trailing ? "pr-12" : "pr-4"}
          text-[16px]
          font-medium
          leading-[22px]
          border
          ${
            isFocused
              ? "border-[var(--Blue)] ring-2 ring-[var(--Blue)]"
              : error
              ? "border-[var(--error)] ring-2 ring-[var(--error)]"
              : "border-[var(--Boarder-Grey)]"
          }
          rounded-[10px]
          focus:outline-none
          focus:ring-2
          focus:ring-[var(--Blue)]
          text-gray-900
          placeholder:text-[var(--placeholder-grey)]
        `}
        style={{
          fontFamily: "var(--font-poppins)",
        }}
      />
      {/* Trailing icon/button */}
      {trailing && (
        <div className="absolute leading-[0] right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">
          {trailing}
        </div>
      )}
    </div>
  );
}