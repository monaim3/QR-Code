import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import CloseCircle from "@/components/icons/close-circle";
import RadioButton from "./RadioButton";
import Tooltip from "@/components/dashboard/Tooltip";

export default function SortBy() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Name",
    "Type",
    "Scans",
    "Creation date",
    "Last modified date",
    "Status",
  ];

  // Toggle selection logic
  const handleSelect = (option: string) => {
    setSelected(option);
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

  const displayLabel = selected;

  return (
    <div className="relative min-w-[187px]" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 justify-between w-full self-stretch h-10 py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white hover:ring-[var(--Boarder-Grey)] hover:ring-2 transition-colors"
      >
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <Tooltip text="Clear filter">
              <div onClick={() => setSelected("")}>
                <CloseCircle className="text-[var(--Grey)] hover:text-[var(--Black)]" />
              </div>
            </Tooltip>
          )}

          <span className="text-[var(--Grey)] text-[14px] leading-[22px]">
            Sort by{selected && ":"}
            <span className="ml-1 text-[var(--Blue)] font-semibold">
              {displayLabel}
            </span>
          </span>
        </div>
        {isOpen ? (
          <ChevronUpSmall className="text-[var(--Grey)]" />
        ) : (
          <ChevronDownSmall className="text-[var(--Grey)]" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 flex flex-col items-start gap-1 w-full p-2 mt-[6px] bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150">
          {options.map((option) => {
            const isSelected = selected === option;
            return (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className={`flex items-center self-stretch h-10 p-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors ${
                  isSelected
                    ? "bg-[var(--Light-blue)]"
                    : "hover:bg-[var(--Light-blue)]"
                }`}
              >
                {/* Checkbox */}
                <RadioButton checked={isSelected} />

                <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                  {option}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
