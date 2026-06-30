"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronLeftSmall from "@/components/icons/chevron-left-small";
import ChevronRightSmall from "@/components/icons/chevron-right-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import Close from "@/components/icons/close";

interface Props {
  totalEntries: number;
  currentPage: number;
  totalPages: number;
  perPage: string; // "10" | "25" | "50" | "All"
  onPerPageChange: (value: string) => void;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalEntries,
  currentPage,
  totalPages,
  perPage,
  onPerPageChange,
  onPageChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbove, setShowAbove] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const options = ["10", "25", "50", "All"];

  const handleSelect = (option: string) => {
    onPerPageChange(option);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const dropdownHeight = 200;
      setShowAbove(spaceBelow < dropdownHeight);
    }
    setIsOpen(!isOpen);
  };

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

  const goPrev = () => onPageChange(Math.max(1, currentPage - 1));
  const goNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

  // build a compact page list: 1, 2, 3, 4, ..., last — same visual slots as the original markup
  const getPageList = (): (number | "...")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | "...")[] = [1, 2, 3, 4];
    if (currentPage > 5 && currentPage < totalPages - 1) {
      pages.push("...");
      pages.push(currentPage);
      pages.push("...");
    } else {
      pages.push("...");
    }
    pages.push(totalPages);
    return pages;
  };

  const pageList = getPageList();

  const rangeStart = totalEntries === 0 ? 0 : (currentPage - 1) * (perPage === "All" ? totalEntries : Number(perPage)) + 1;
  const rangeEnd = perPage === "All" ? totalEntries : Math.min(currentPage * Number(perPage), totalEntries);

  return (
    <div className="flex justify-center items-center content-center desktopDashboard:gap-x-10 gap-x-2 flex-wrap w-full pt-2 desktopDashboard:pt-0">
      {/* Portfolio */}
      <p className="text-[var(--Grey)] desktopDashboard:text-[14px] text-[12px] desktopDashboard:leading-[22px] leading-[20px] flex gap-1">
        <span className="hidden desktopDashboard:flex">Showing</span>{" "}
        <span className="text-[var(--Dark-gray)]">{rangeStart}</span> to{" "}
        <span className="text-[var(--Dark-gray)]">{rangeEnd}</span> of{" "}
        <span className="text-[var(--Dark-gray)]">{totalEntries}</span> entries
      </p>

      {/* Mobile Numbers */}
      <div className="flex items-center justify-center desktopDashboard:hidden gap-2 flex-1">
        <button className="w-8 h-8 flex items-center justify-center" onClick={goPrev} disabled={currentPage === 1}>
          <ChevronLeftSmall />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px] bg-[var(--Blue)] text-white rounded-[var(--Corner-Radius-4)]">
          {currentPage}
        </button>
        <button className="w-8 h-8 flex items-center justify-center" onClick={goNext} disabled={currentPage === totalPages}>
          <ChevronRightSmall />
        </button>
      </div>

      {/* Desktop Numbers */}
      <div className="desktopDashboard:flex hidden items-center justify-center gap-4 flex-1">
        <button className="w-8 h-8 flex items-center justify-center" onClick={goPrev} disabled={currentPage === 1}>
          <ChevronLeftSmall />
        </button>
        {pageList.map((p, i) =>
          p === "..." ? (
            <button
              key={`ellipsis-${i}`}
              className="w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px]"
              disabled
            >
              ...
            </button>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={
                p === currentPage
                  ? "w-8 h-6 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px] bg-[var(--Blue)] text-white rounded-[var(--Corner-Radius-4)]"
                  : "w-8 h-8 flex items-center justify-center text-[var(--Dark-gray)] text-[14px] leading-[22px]"
              }
            >
              {p}
            </button>
          ),
        )}
        <button className="w-8 h-8 flex items-center justify-center" onClick={goNext} disabled={currentPage === totalPages}>
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
          <p className="text-[var(--Grey)] desktopDashboard:text-[14px] text-[12px] desktopDashboard:leading-[22px] leading-[20px] flex gap-1">
            <span className="hidden desktopDashboard:flex">Show</span>{" "}
            <span className="text-[var(--Dark-gray)]">{perPage}</span> per page
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
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className={`flex items-center self-stretch p-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)]`}
              >
                <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                  {option}
                </span>
              </div>
            ))}
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
            className={`absolute z-50 bottom-0 left-0 w-full bg-white rounded-t-[10px] transition-transform duration-500 ease-in-out max-h-[90vh] overflow-y-auto ${isOpen ? "translate-y-0" : "translate-y-full"}`}
          >
            <div className="flex items-center gap-4 py-4 tablet:px-8 px-5 border-b border-[var(--boarder-grey-50)]">
              <h4 className="flex-1 text-[var(--Black)] text-[18px] leading-[26px] font-bold">
                Show {perPage} per page
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
                  className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] ${perPage === option ? "bg-[var(--Generator-Background)]" : "bg-white"}`}
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