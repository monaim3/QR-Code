import { useEffect, useRef, useState } from "react";
import Download from "@/components/icons/download";
import { QrCode as qrData } from "@/types/generatedQr";
import { downloadQrCode, ExportFormat } from "@/lib/qr/qrExportService";
import QrCodePreview, { QrCodePreviewHandle } from "./QrCodePreview";

interface Props {
  onCustomDownloadModal: () => void;
  item: qrData;
}

export default function DownloadAction({ onCustomDownloadModal, item }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbove, setShowAbove] = useState(false);
  const [loadingOption, setLoadingOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const qrRef = useRef<QrCodePreviewHandle>(null);

  const options = [
    "SVG",
    "PNG",
    "JPG",
    "SVG Tiny (Illustrator)",
    "PDF",
    "EPS",
    "Custom download",
  ];

  const handleSelect = async (option: string) => {
    setIsOpen(false);

    if (option === "Custom download") {
      onCustomDownloadModal();
      return;
    }

    setLoadingOption(option);
    try {
      // Same as QrPreviewModal — qrRef is already mounted and painted, just call directly
      await downloadQrCode(
        qrRef,
        option as ExportFormat,
        1024,
        1024
      );
    } catch (err) {
      console.error(`Failed to download as ${option}:`, err);
    } finally {
      setLoadingOption(null);
    }
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

      {isOpen && (
        <div
          className={`absolute right-0 z-10 desktopDashboard:flex hidden flex-col items-start gap-1 w-[192px] p-4 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] animate-in fade-in zoom-in duration-150 ${
            showAbove ? "bottom-full mb-[13px]" : "top-full mt-[13px]"
          }`}
        >
          {options.map((option) => {
            const isLoading = loadingOption === option;
            return (
              <div
                key={option}
                onClick={() => !loadingOption && handleSelect(option)}
                className={`flex items-center self-stretch py-4 px-2 gap-2 cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors bg-white hover:bg-[var(--Generator-Background)] ${
                  loadingOption ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span className="text-[var(--Dark-gray)] text-[14px] leading-[16px]">
                  {isLoading ? `${option}...` : option}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/*
        Mounted exactly like QrPreviewModal — always in DOM, always painted.
        QrPreviewModal attaches ref to the visible preview.
        Here we use a hidden copy at -9999px (same idea, just not visible).
      */}
      <div
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          pointerEvents: "none",
          opacity: 1,
          width: "200px",
          height: "200px",
        }}
      >
        <QrCodePreview ref={qrRef} qrCodeData={item} />
      </div>
    </div>
  );
}