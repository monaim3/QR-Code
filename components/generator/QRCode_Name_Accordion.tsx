"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface QRCodeNameAccordionProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function QRCodeNameAccordion({
  value,
  onChange,
  error,
}: QRCodeNameAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl border border-[var(--Boarder-Grey)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-base font-semibold text-[var(--Black)] font-roboto">
            QR code name
          </h3>
          <p className="text-sm text-[var(--Dark-gray)] font-roboto">
            Set a name for your QR code
          </p>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[var(--Dark-gray)]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--Dark-gray)]" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-2 border-t border-[var(--Boarder-Grey)]">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="qr-code-name"
              className="text-sm font-medium text-[var(--Black)] font-roboto"
            >
              Name your QR code
            </label>
            <input
              id="qr-code-name"
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="e.g. My Website QR"
              className={`w-full px-4 py-3 font-roboto rounded-lg border transition-colors outline-none ${
                error
                  ? "border-red-500 focus:border-red-500"
                  : isFocused
                  ? "border-[var(--Blue)]"
                  : "border-[var(--Boarder-Grey)] hover:border-gray-300"
              }`}
            />
            {error && (
              <p className="text-sm text-red-500 font-roboto">{error}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
