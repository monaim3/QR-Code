"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronLeftSmall from "@/components/icons/chevron-left-small";
import ChevronRightSmall from "@/components/icons/chevron-right-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import Close from "@/components/icons/close";

export default function Pagination() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("10");
  const [showAbove, setShowAbove] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const options = ["10", "25", "50", "All"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    if (!isOpen && buttonRef.current) {
      // Check position before opening
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const dropdownHeight = 200; // Approximate height of dropdown (4 options + padding)

      // If not enough space below, show above
      setShowAbove(spaceBelow < dropdownHeight);
    }
    setIsOpen(!isOpen);
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
    <div className="flex justify-center items-center content-center desktopDashboard:gap-x-10 gap-x-2 flex-wrap w-full pt-2 desktopDashboard:pt-0">
      {/* Portfolio */}
      <p className="text-[var(--Grey)] desktopDashboard:text-[14px] text-[12px] desktopDashboard:leading-[22px] leading-[20px]">
        <span className="hidden desktopDashboard:flex">Showing</span>{" "}
        <span className="text-[var(--Dark-gray)]">1</span> to{" "}
        <span className="text-[var(--Dark-gray)]">10</span> of{" "}
        <span className="text-[var(--Dark-gray)]">125</span> entries
      </p>

      {/* Mobile Numbers */}
      <div className="flex items-center justify-center desktopDashboard:hidden gap-2 flex-1">
        <button className="w-8 h-8 flex items-center justify-center">
          <ChevronLeftSmall />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px] bg-[var(--Blue)] text-white rounded-[var(--Corner-Radius-4)]">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center">
          <ChevronRightSmall />
        </button>
      </div>

      {/* Desktop Numbers */}
      <div className="desktopDashboard:flex hidden items-center justify-center gap-4 flex-1">
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
          ref={buttonRef}
          onClick={handleToggleDropdown}
          className="flex items-center justify-end gap-2"
        >
          <p className="text-[var(--Grey)] desktopDashboard:text-[14px] text-[12px] desktopDashboard:leading-[22px] leading-[20px]">
            <span className="hidden desktopDashboard:flex">Show</span>{" "}
            <span className="text-[var(--Dark-gray)]">{selected}</span> per page
          </p>
          {isOpen ? (
            <ChevronUpSmall className="text-[var(--Dark-gray)]" />
          ) : (
            <ChevronDownSmall className="text-[var(--Dark-gray)]" />
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={`absolute z-10 desktopDashboard:flex hidden flex-col items-start gap-2 w-[120px] p-4 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150 ${
              showAbove ? "bottom-full mb-[13px]" : "top-full mt-[13px]"
            }`}
          >
            {options.map((option) => {
              return (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`flex items-center self-stretch p-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)]`}
                >
                  <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                    {option}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Drawer */}
        <div
          className={`fixed inset-0 desktopDashboard:hidden transition-all duration-300 ease-in-out z-50 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[var(--pop-up-color)] transition-opacity duration-300 z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div
            className={`absolute z-50 bottom-0 left-0 w-full bg-white rounded-t-[10px] transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-full"}`}
          >
            <div className="flex items-center gap-4 py-4 tablet:px-8 px-5 border-b border-[var(--boarder-grey-50)]">
              <h4 className="flex-1 text-[var(--Black)] text-[18px] leading-[26px] font-bold">
                Show {selected} per page
              </h4>

              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <Close className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-start gap-1 tablet:px-8 px-5 py-4">
              {options.map((option, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(option)}
                  className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] ${selected === option ? "bg-[var(--Generator-Background)]" : "bg-white"}`}
                >
                  <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
