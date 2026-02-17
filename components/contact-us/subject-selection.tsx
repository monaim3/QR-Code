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
    <div className="relative w-full flex-1 flex flex-col items-start justify-start">
      {/* Trigger */}
      <p className="text-[16px] leading-[24px] font-bold">
         Subject*
      </p>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[48px] rounded-full px-4 py-2 flex justify-between items-center bg-white outline outline-[1px] outline-[var(--Boarder-Grey)] hover:outline-[1.5px] mt-2"
      >
        <span className="text-4 leading-6 font-regular text-[var(--Dark-gray)]">{selected ? selected.label : "Select a subject..."}</span>
        <span>{isOpen ? <ChevronUp className="text-[var(--Dark-gray)]"/> : <ChevronDown className="text-[var(--Dark-gray)]"/>}</span> 
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 border border-[var(--Boarder-Grey)] rounded-[8px] bg-white z-50">
          {options.map((option) => {
            const isSelected = selected?.value === option.value;
           return <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`flex items-center justify-between px-4 py-2 rounded-[6px] cursor-pointer m-2 ${isSelected ? "bg-[var(--Generator-Background)]" : "hover:bg-[var(--Generator-Background)]"}`}
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
