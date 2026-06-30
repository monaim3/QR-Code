import { useEffect, useRef, useState } from "react";
import Download from "@/components/icons/download";
import { useT } from "@/utils/t";

interface Props {
  onCustomDownloadModal: () => void;
}

export default function DownloadAction({ onCustomDownloadModal }: Props) {
  const t = useT();
  const [isOpen, setIsOpen] = useState(false);
  const [showAbove, setShowAbove] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const options = [
    { value: "SVG", label: t("public__dashboard__qr_table__qr_card__download_option__svg") },
    { value: "PNG", label: t("public__dashboard__qr_table__qr_card__download_option__png") },
    { value: "JPG", label: t("public__dashboard__qr_table__qr_card__download_option__jpg") },
    { value: "SVG Tiny (Illustrator)", label: t("public__dashboard__qr_table__qr_card__download_option__svg__tiny_illustrator") },
    { value: "PDF", label: t("public__dashboard__qr_table__qr_card__download_option__pdf") },
    { value: "EPS", label: t("public__dashboard__qr_table__qr_card__download_option__eps") },
    { value: "Custom download", label: t("public__dashboard__qr_table__qr_card__download_option__custom") },
  ];

  const handleSelect = (value: string) => {
    if (value === "Custom download") {
      onCustomDownloadModal();
    }
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const dropdownHeight = 350;

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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleToggleDropdown}
        className="flex items-center justify-center h-10 py-2 px-4 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)]"
      >
        <Download className="text-[var(--Dark-gray)]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 z-10 desktopDashboard:flex hidden flex-col items-start gap-1 w-[192px] p-4 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150 ${
            showAbove ? "bottom-full mb-[13px]" : "top-full mt-[13px]"
          }`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)]"
            >
              <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
