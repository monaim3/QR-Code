import { useEffect, useRef, useState } from "react";
import Download from "@/components/icons/download";

interface Props {
  onCustomDownloadModal: () => void;
}

export default function DownloadAction({ onCustomDownloadModal }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "SVG",
    "PNG",
    "JPG",
    "SVG Tiny (Illustrator)",
    "PDF",
    "EPS",
    "Custom download",
  ];

  const handleSelect = (option: string) => {
    if (option === "Custom download") {
      onCustomDownloadModal();
    }
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-10 py-2 px-4 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)]"
      >
        <Download className="text-[var(--Dark-gray)]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 flex flex-col items-start gap-1 w-[181px] p-4 top-[59px] bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150">
          {options.map((option) => {
            return (
              <div
                key={option}
                onClick={() => handleSelect(option)}
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
    </div>
  );
}
