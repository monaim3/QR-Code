"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: "General inquiry", value: "general" },
  { label: "Billing question", value: "billing" },
  { label: "Suggested improvement", value: "improvement" },
  { label: "Technical issue", value: "technical" },
  { label: "Other", value: "other" },
];

export default function SimpleDropdown(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (option: Option): void => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full flex-1 flex flex-col items-start justify-start gap-2">
      {/* Trigger */}
      <label className="text-[16px] leading-[24px] font-semibold">
         Subject*
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[48px] rounded-[10px] px-4 py-2 flex justify-between items-center bg-white ring-1 ring-[var(--Boarder-Grey)] hover:ring-2"
      >
        <span className="text-4 leading-6 font-regular text-[var(--Dark-gray)]">{selected ? selected.label : "Select a subject..."}</span>
        <span>{isOpen ? <ChevronUp className="text-[var(--Dark-gray)] h-4 w-4"/> : <ChevronDown className="text-[var(--Dark-gray)] h-4 w-4"/>}</span> 
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="flex flex-col p-4 gap-2 absolute top-full left-0 w-full mt-1 border border-[var(--Boarder-Grey)] rounded-[8px] bg-white z-50">
          {options.map((option) => {
            const isSelected = selected?.value === option.value;
           return <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`flex items-center justify-between px-4 py-2 rounded-[6px] cursor-pointer transition-all duration-300 ${isSelected ? "bg-[var(--Generator-Background)]" : "hover:bg-[var(--Generator-Background)]"}`}
            >
              {option.label}
              {isSelected && (
              <Check
                size={16}
                className="text-[var(--Blue)]"
                strokeWidth={2}
                />
            )}
            </div>
          })}
        </div>
      )}
    </div>
  );
}
