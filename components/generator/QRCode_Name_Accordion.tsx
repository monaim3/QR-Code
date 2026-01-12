"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 md:px-8 py-4
          hover:bg-gray-50 transition-colors"
      >
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-lg leading-[26px] font-bold text-[var(--Black)] font-Poppins">
            QR code name
          </h3>
          <p className="text-sm text-[var(--Dark-gray)] font-roboto">
            Set a name for your QR code
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--Dark-gray)]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <hr className="ml-4 mr-4 md:ml-8 md:mr-8 border-t-[0.5px] border-[var(--Boarder-Grey)]" />
            <div className="py-6 px-4 md:p-8">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
