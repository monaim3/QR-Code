"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  label: string;
  options?: string[];
}

export default function FormSelect({ label, options }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleChange = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className="flex flex-col items-start gap-2 p-0 flex-1 w-full relative">
      <label className="text-[var(--Black)] font-semibold text-[16px] leading-[24px]">
        {label}
      </label>

      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full flex items-center justify-between px-4 py-2 h-[48px] border border-[var(--Boarder-Grey)] rounded-lg text-[var(--Dark-gray)] font-medium"
      >
        <span>{activeOption || label}</span>
        <ChevronDown
          className={cn(
            "size-5 stroke-[var(--Dark-gray)] transition-transform",
            isDropdownOpen ? "rotate-180" : "",
          )}
        />
      </button>

      {isDropdownOpen && (
        <>
          {/* Click outside overlay */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />

          {/* Dropdown items */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 flex flex-col gap-2">
            {options?.map((option) => {
              const isActive = activeOption === option;

              return (
                <button
                  key={option}
                  onClick={() => {
                    handleChange(option);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full flex justify-center"
                >
                  {/* Item wrapper with left/right padding and hover/selected background */}
                  <div
                    className={cn(
                      "flex items-center justify-between w-full px-4 h-[40px] rounded-md transition-colors",
                      isActive
                        ? "bg-[#9BA2FB]/10 text-[var(--Dark-gray)]"
                        : "text-[var(--Dark-gray)] hover:bg-[#9BA2FB]/10",
                    )}
                  >
                    <span>{option}</span>
                    {isActive && (
                      <Check className="size-4 text-[var(--Blue)]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
