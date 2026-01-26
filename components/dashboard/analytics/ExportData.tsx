import { useEffect, useRef, useState } from "react";
import Download from "@/components/icons/download";
import Close from "@/components/icons/close";

export default function ExportData() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["Download CSV", "Download XLSX"];

  const handleSelect = (option: string) => {
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
        className="items-center justify-center gap-2 h-10 py-2 px-4 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)] desktopDashboard:flex hidden"
      >
        <Download className="text-[var(--Dark-gray)]" />
        <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          Export Data
        </span>
      </button>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-10 h-10 p-2 justify-center items-center gap-2 shrink-0 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white desktopDashboard:hidden"
      >
        <Download className="text-[var(--Dark-gray)]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 desktopDashboard:flex hidden flex-col items-start gap-1 w-[181px] p-4 mt-2 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150">
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
              Export data
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
                className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)]`}
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
  );
}
