"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronLeftSmall from "@/components/icons/chevron-left-small";
import ChevronRightSmall from "@/components/icons/chevron-right-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";

export default function Pagination() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("10");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["10", "25", "50", "All"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center items-center content-center gap-x-10 flex-wrap w-full">
      {/* Portfolio */}
      <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
        Showing <span className="text-[var(--Dark-gray)]">1</span> to{" "}
        <span className="text-[var(--Dark-gray)]">10</span> of{" "}
        <span className="text-[var(--Dark-gray)]">125</span> entries
      </p>

      {/* Numbers */}
      <div className="flex items-center justify-center gap-4 flex-1">
        <button className="w-8 h-8 flex items-center justify-center">
          <ChevronLeftSmall />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          1
        </button>
        <button className="w-8 h-6 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px] bg-[var(--Blue)] text-white rounded-[var(--Corner-Radius-4)]">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          4
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          ...
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          12
        </button>
        <button className="w-8 h-8 flex items-center justify-center">
          <ChevronRightSmall />
        </button>
      </div>

      {/* Pages */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-end gap-2"
        >
          <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
            Show <span className="text-[var(--Dark-gray)]">{selected}</span> per
            page
          </p>
          {isOpen ? (
            <ChevronUpSmall className="text-[var(--Dark-gray)]" />
          ) : (
            <ChevronDownSmall className="text-[var(--Dark-gray)]" />
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 flex flex-col items-start gap-2 w-[120px] p-4 mt-[13px] bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150">
            {options.map((option) => {
              return (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`flex items-center self-stretch p-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white`}
                >
                  <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px] font-rubik">
                    {option}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
