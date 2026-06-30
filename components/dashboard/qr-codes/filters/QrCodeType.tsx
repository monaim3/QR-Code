import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import CloseCircle from "@/components/icons/close-circle";
import CheckBox from "./CheckBox";
import Tooltip from "@/components/dashboard/Tooltip";
import { useT } from "@/utils/t";

interface Props {
  selected: string[];
  setSelected: (selected: string[]) => void;
}

export default function QrCodeType({ selected, setSelected }: Props) {
  const t = useT();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "Website URL", label: t("generator__step_1__qr_type_cards__url__title") },
    { value: "vCard", label: t("generator__step_1__qr_type_cards__vcard__title") },
    { value: "PDF", label: t("generator__step_1__qr_type_cards__pdf__title") },
    { value: "Images", label: t("generator__step_1__qr_type_cards__images__title") },
    { value: "Social Media", label: t("public__api__messages__qr-categories__socialMedia__title") },
    { value: "Video", label: t("generator__step_1__qr_type_cards__video__title") },
    { value: "Simple Text", label: t("public__api__messages__qr-categories__plainText__title") },
    { value: "Business Page", label: t("generator__step_1__qr_type_cards__business_page__title") },
    { value: "Facebook", label: t("generator__step_1__qr_type_cards__facebook__title") },
    { value: "Wi-Fi", label: t("generator__step_1__qr_type_cards__wifi__title") },
    { value: "App", label: t("generator__step_1__qr_type_cards__app__title") },
    { value: "Menu", label: t("generator__step_1__qr_type_cards__menu__title") },
  ];

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
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

  const selectedLabels = selected.map(
    (v) => options.find((o) => o.value === v)?.label ?? v
  );
  const displayLabel =
    selectedLabels.length > 0
      ? selectedLabels.length > 2
        ? selectedLabels.slice(0, 2).join(" / ") + " + " + (selectedLabels.length - 2)
        : selectedLabels.join(" / ")
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

          <div className="flex items-center gap-1 min-w-0">
            <span className="text-[var(--Grey)] text-[14px] leading-[22px] whitespace-nowrap shrink-0">
              {t("public__dashboard__qr_table__controls__type_placeholder")}{selected.length > 0 && ":"}
            </span>
            {selected.length > 0 && (
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
          <div className="max-h-[280px] overflow-y-auto custom-scrollbar pr-1 w-full">
            {options.map((option) => {
              const isSelected = selected.includes(option.value);
              return (
                <div
                  key={option.value}
                  onClick={() => toggleOption(option.value)}
                  className={`flex items-center self-stretch h-10 p-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors ${
                    isSelected
                      ? "bg-[var(--Light-blue)]"
                      : "hover:bg-[var(--Light-blue)]"
                  }`}
                >
                  <div className="shrink-0">
                    <CheckBox checked={isSelected} />
                  </div>

                  <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                    {option.label}
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
