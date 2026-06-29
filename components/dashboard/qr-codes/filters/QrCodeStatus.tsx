import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import CloseCircle from "@/components/icons/close-circle";
import Tooltip from "@/components/dashboard/Tooltip";
import RadioButton from "./RadioButton";
import { useT } from "@/utils/t";

interface Props {
  selected: string;
  setSelected: (selected: string) => void;
}

export default function QrCodeStatus({ selected, setSelected }: Props) {
  const t = useT();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "Active", label: t("public__dashboard__qr_table__controls__status_active") },
    { value: "Paused", label: t("public__dashboard__qr_table__controls__status_paused") },
  ];

  const handleSelect = (value: string) => {
    setSelected(value);
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

  const displayLabel = options.find((o) => o.value === selected)?.label ?? selected;

  return (
    <div className="relative hidden desktopDashboard:block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 self-stretch h-10 py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white hover:ring-[var(--Boarder-Grey)] hover:ring-2 transition-colors"
      >
        <div className="flex items-center gap-2">
          {selected && (
            <Tooltip text="Clear filter">
              <div onClick={() => setSelected("")}>
                <CloseCircle className="text-[var(--Grey)] hover:text-[var(--Black)]" />
              </div>
            </Tooltip>
          )}

          <div className="flex items-center gap-1 min-w-0">
            <span className="text-[var(--Grey)] text-[14px] leading-[22px] whitespace-nowrap shrink-0">
              {t("public__dashboard__qr_table__controls__status_placeholder")}{selected && ":"}
            </span>
            {selected && (
              <span className="text-[var(--Blue)] font-semibold text-[14px] leading-[22px] truncate">
                {displayLabel}
              </span>
            )}
          </div>
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
            const isSelected = selected === option.value;
            return (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`flex items-center self-stretch h-10 p-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors ${
                  isSelected
                    ? "bg-[var(--Light-blue)]"
                    : "hover:bg-[var(--Light-blue)]"
                }`}
              >
                <div className="shrink-0">
                  <RadioButton checked={isSelected} />
                </div>

                <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                  {option.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
