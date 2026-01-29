import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import CloseCircle from "@/components/icons/close-circle";
import CheckBox from "./CheckBox";
import Tooltip from "@/components/dashboard/Tooltip";

interface Props {
  selected: string[];
  setSelected: (selected: string[]) => void;
}

export default function QrCodeType({ selected, setSelected }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Website URL",
    "vCard",
    "PDF",
    "Images",
    "Social Media",
    "Video",
    "Simple Text",
    "Business Page",
    "Facebook",
    "Wi-Fi",
    "App",
    "Menu",
  ];

  // Toggle selection logic
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
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

  const displayLabel =
    selected.length > 0
      ? selected.length > 2
        ? selected.slice(0, 2).join(" / ") + " + " + (selected.length - 2)
        : selected.join(" / ")
      : "";

  return (
    <div
      className="relative min-w-[190px] hidden desktopDashboard:block"
      ref={dropdownRef}
    >
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full justify-between self-stretch h-10 py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white hover:ring-[var(--Boarder-Grey)] hover:ring-2 transition-colors"
      >
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <Tooltip text="Clear filter">
              <div onClick={() => setSelected([])}>
                <CloseCircle className="text-[var(--Grey)] hover:text-[var(--Black)]" />
              </div>
            </Tooltip>
          )}

          <span className="text-[var(--Grey)] text-[14px] leading-[22px] desktopMd:truncate desktopLg:truncate desktopMd:max-w-[120px] desktopLg:max-w-[150px]">
            QR Code type{selected.length > 0 && ":"}
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
          <div className="max-h-[280px] overflow-y-auto custom-scrollbar pr-1 w-full">
            {options.map((option) => {
              const isSelected = selected.includes(option);
              return (
                <div
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={`flex items-center self-stretch h-10 p-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors ${
                    isSelected
                      ? "bg-[var(--Light-blue)]"
                      : "hover:bg-[var(--Light-blue)]"
                  }`}
                >
                  {/* Checkbox */}
                  <div className="shrink-0">
                    <CheckBox checked={isSelected} />
                  </div>

                  <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                    {option}
                  </span>
                </div>
              );
            })}
          </div>
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
