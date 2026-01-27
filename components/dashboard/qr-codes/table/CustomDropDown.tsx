import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";

interface Props {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
}

export default function CustomDropDown({
  options,
  onSelect,
  selectedOption,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // handle select option
  const handleSelectOption = (option: string) => {
    onSelect(option);
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
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] text-[var(--Black)] text-[16px] leading-[24px] w-full bg-white flex items-center justify-between gap-2"
      >
        {selectedOption}
        {isOpen ? (
          <ChevronUpSmall className="text-[var(--Dark-gray)]" />
        ) : (
          <ChevronDownSmall className="text-[var(--Dark-gray)]" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 flex flex-col items-start gap-1 w-full p-4 mt-2 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150 max-h-[300px] overflow-y-auto custom-scrollbar">
          {options.map((option) => {
            return (
              <div
                key={option}
                onClick={() => handleSelectOption(option)}
                className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)]`}
              >
                <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px] font-rubik">
                  {option}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f6fa;
          border-radius: 9px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #01a56d;
          border-radius: 9px;
        }
      `}</style>
    </div>
  );
}
