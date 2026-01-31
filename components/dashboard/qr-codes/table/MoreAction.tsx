import { useEffect, useRef, useState } from "react";
import MoreHorizontal from "@/components/icons/more-horizontal";
import Edit from "@/components/icons/edit";
import ChartBarSquare from "@/components/icons/chart-bar-square";
import PauseCircle from "@/components/icons/pause-circle";
import Copy from "@/components/icons/copy";
import RefreshCw from "@/components/icons/refresh-cw";
import TrashAlt from "@/components/icons/trash-alt";
import QrCode5 from "@/components/icons/qr-code-5";
import Close from "@/components/icons/close";
import ShareAndroid from "@/components/icons/share-android";
import Download from "@/components/icons/download";

interface Props {
  onCustomDownloadModal: () => void;
  onShareModal: () => void;
}

export default function MoreAction({
  onCustomDownloadModal,
  onShareModal,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [showAbove, setShowAbove] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const options = [
    {
      icon: <Edit className="text-[var(--Dark-gray)] w-4 h-4" />,
      label: "Edit",
    },
    {
      icon: <ChartBarSquare className="text-[var(--Dark-gray)] w-4 h-4" />,
      label: "Analytics",
    },
    {
      icon: <PauseCircle className="text-[var(--Dark-gray)] w-4 h-4" />,
      label: "Pause",
    },
    {
      icon: <Copy className="text-[var(--Dark-gray)] w-4 h-4" />,
      label: "Duplicate",
    },
    {
      icon: <RefreshCw className="text-[var(--Dark-gray)] w-4 h-4" />,
      label: "Reset scans",
    },
    {
      icon: <QrCode5 className="text-[var(--Dark-gray)] w-4 h-4" />,
      label: "Change QR type",
    },
    {
      icon: <TrashAlt className="text-[var(--error)] w-4 h-4" />,
      label: "Delete",
    },
  ];

  const handleSelect = (option: string) => {
    switch (option) {
      case "Download":
        setIsDownloadOpen(true);
        break;
      case "Share":
        onShareModal();
        break;
    }
    setIsOpen(false);
  };

  const downLoadOptions = [
    "SVG",
    "PNG",
    "JPG",
    "SVG Tiny (Illustrator)",
    "PDF",
    "EPS",
    "Custom download",
  ];

  const handleDownloadSelect = (option: string) => {
    if (option === "Custom download") {
      onCustomDownloadModal();
    }
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    if (!isOpen && buttonRef.current) {
      // Check position before opening
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const dropdownHeight = 350; // Approximate height of dropdown (7 options + padding)

      // If not enough space below, show above
      setShowAbove(spaceBelow < dropdownHeight);
    }
    setIsOpen(!isOpen);
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
        ref={buttonRef}
        onClick={handleToggleDropdown}
        className="w-6 h-4 flex items-center justify-center"
      >
        <MoreHorizontal />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-1 z-10 desktopDashboard:flex hidden flex-col items-start gap-1 w-[188px] p-4 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150 ${
            showAbove ? "bottom-full mb-[22px]" : "top-full mt-[22px]"
          }`}
        >
          {options.map((option, i) => {
            return (
              <div
                key={i}
                onClick={() => handleSelect(option.label)}
                className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)]`}
              >
                {option.icon}
                <span
                  className={`text-[14px] leading-[16px] ${
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

      {/* More Drawer */}
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
              Actions
            </h4>

            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <Close className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-start gap-1 tablet:px-8 px-5 py-4">
            {options.slice(0, options.length - 1).map((option, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleSelect(option.label)}
                  className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] bg-white`}
                >
                  {option.icon}
                  <span
                    className={`text-[14px] leading-[16px] ${
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
            <div
              onClick={() => handleSelect("Share")}
              className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] bg-white`}
            >
              <ShareAndroid className="text-[var(--Dark-gray)] w-4 h-4" />
              <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                Share
              </span>
            </div>
            <div
              onClick={() => {
                handleSelect("Download");
              }}
              className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] bg-white`}
            >
              <Download className="text-[var(--Dark-gray)] w-4 h-4" />
              <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                Download
              </span>
            </div>
            {options.slice(options.length - 1).map((option, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleSelect(option.label)}
                  className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] bg-white`}
                >
                  {option.icon}
                  <span
                    className={`text-[14px] leading-[16px] ${
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
        </div>
      </div>

      {/* Download Drawer */}
      <div
        className={`fixed inset-0 desktopDashboard:hidden transition-all duration-300 ease-in-out z-50 ${
          isDownloadOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--pop-up-color)] transition-opacity duration-300 z-50"
          onClick={() => setIsDownloadOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute z-50 bottom-0 left-0 w-full bg-white rounded-t-[10px] transition-transform duration-500 ease-in-out max-h-[90vh] overflow-y-auto ${isDownloadOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          <div className="flex items-center gap-4 py-4 tablet:px-8 px-5 border-b border-[var(--boarder-grey-50)]">
            <h4 className="flex-1 text-[var(--Black)] text-[18px] leading-[26px] font-bold">
              Download
            </h4>

            <button
              onClick={() => setIsDownloadOpen(false)}
              aria-label="Close menu"
            >
              <Close className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-start gap-1 tablet:px-8 px-5 py-4">
            {downLoadOptions.map((option, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleDownloadSelect(option)}
                  className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] bg-white`}
                >
                  <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                    {option}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
