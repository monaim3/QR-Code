import { useEffect, useRef, useState } from "react";
import MoreHorizontal from "@/components/icons/more-horizontal";
import Edit from "@/components/icons/edit";
import ChartBarSquare from "@/components/icons/chart-bar-square";
import PauseCircle from "@/components/icons/pause-circle";
import Copy from "@/components/icons/copy";
import RefreshCw from "@/components/icons/refresh-cw";
import QrCode4 from "@/components/icons/qr-code-4";
import TrashAlt from "@/components/icons/trash-alt";

export default function MoreAction() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    {
      icon: Edit,
      label: "Edit",
    },
    {
      icon: ChartBarSquare,
      label: "Analytics",
    },
    {
      icon: PauseCircle,
      label: "Pause",
    },
    {
      icon: Copy,
      label: "Duplicate",
    },
    {
      icon: RefreshCw,
      label: "Reset scans",
    },
    {
      icon: QrCode4,
      label: "Change QR type",
    },
    {
      icon: TrashAlt,
      label: "Delete",
    },
  ];

  const handleSelect = () => {
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
        className="w-6 h-4 flex items-center justify-center"
      >
        <MoreHorizontal />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 flex flex-col items-start gap-1 w-[181px] p-4 mt-2 bg-white rounded-[var(--Corner-Radius-8)] shadow-[var(--Generator-Shadow)] animate-in fade-in zoom-in duration-150">
          {options.map((option, i) => {
            const Icon = option.icon;
            return (
              <div
                key={i}
                onClick={() => handleSelect()}
                className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)]`}
              >
                <Icon className="text-[var(--Dark-gray)]" />
                <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px] font-rubik">
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
