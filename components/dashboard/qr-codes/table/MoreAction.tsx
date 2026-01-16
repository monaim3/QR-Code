import { useEffect, useRef, useState } from "react";
import MoreHorizontal from "@/components/icons/more-horizontal";
import Edit from "@/components/icons/edit";
import ChartBarSquare from "@/components/icons/chart-bar-square";
import PauseCircle from "@/components/icons/pause-circle";
import Copy from "@/components/icons/copy";
import RefreshCw from "@/components/icons/refresh-cw";
import TrashAlt from "@/components/icons/trash-alt";
import QrCode5 from "@/components/icons/qr-code-5";

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
      icon: QrCode5,
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
        <div className="absolute right-1 z-10 flex flex-col items-start gap-1 w-[181px] p-4 top-[47px] bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150">
          {options.map((option, i) => {
            const Icon = option.icon;
            return (
              <div
                key={i}
                onClick={() => handleSelect()}
                className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)]`}
              >
                <Icon className="text-[var(--Dark-gray)] w-4 h-4" />
                <span
                  className={`text-[14px] leading-[16px] font-rubik ${
                    option.label === "Delete"
                      ? "text-[var(--error)]"
                      : "text-[var(--Dark-gray)]"
                  }`}
                >
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
