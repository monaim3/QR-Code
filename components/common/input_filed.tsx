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
}

export default function InputField({
  value,
  onChange,
  placeholder = "",
  type = "text",
  leading,
  trailing,
  desktopWidth = 336,
}: InputFieldProps) {
  const [show, setShow] = useState(false);

  // Determine input type (useful for password show/hide)
  const inputType = type === "password" && show ? "text" : type;

  return (
    <div className="relative">
      {/* Leading icon */}
      {leading && (
        <div className="flex absolute left-[17px] top-1/2 -translate-y-1/2 text-gray-400">
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
        className={`
          h-[48px]
          w-full                       /* ✅ full width */
          pl-[68px]
          ${trailing ? "pr-12" : "pr-4"}
          text-[16px]
          font-medium
          leading-[22px]
          border
          border-gray-200
          rounded-[12px]
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-500
          text-gray-900
          placeholder:text-gray-400
        `}
        style={{
          fontFamily: "var(--font-poppins)",
        }}
      />
      {/* Trailing icon/button */}
      {trailing && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">
          {trailing}
        </div>
      )}
    </div>
  );
}