"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Globe, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileDrawer({ isOpen, setIsOpen }: Props) {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] desktop:hidden transition-opacity duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Content */}
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-[280px] bg-[#F5F6FA] border-l border-gray-200 p-6 flex flex-col gap-6 transition-transform duration-500 ease-in-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
        <div className="flex items-center justify-between mb-2">
          <img src="/images/Logo.svg" alt="Logo" className="w-32 h-8" />
          <button
            className="text-gray-700 p-2 hover:bg-gray-200 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-gray-700 hover:text-[var(--Blue)] transition-colors">
              <Globe className="w-5 h-5" />
              <span>English</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform",
                  isLangOpen && "rotate-180"
                )}
              />
            </button>

            {isLangOpen && (
              <div className="mt-1 ml-9 flex flex-col gap-1 bg-gray-100/50 rounded-lg py-2">
                <button className="text-left px-4 py-2 text-base text-gray-600 hover:text-[var(--Blue)] hover:bg-gray-200/50 transition-colors">
                  English
                </button>
                <button className="text-left px-4 py-2 text-base text-gray-600 hover:text-[var(--Blue)] hover:bg-gray-200/50 transition-colors">
                  Español
                </button>
                <button className="text-left px-4 py-2 text-base text-gray-600 hover:text-[var(--Blue)] hover:bg-gray-200/50 transition-colors">
                  Français
                </button>
              </div>
            )}
          </div>

          <div className="h-px bg-gray-200 w-full my-2" />

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 text-center text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg border border-gray-300 transition-colors font-poppins">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
