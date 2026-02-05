"use client";

import { ReactNode } from "react";
import PreviewQRButtons from "./Preview_QR_Buttons";
import MobileFrame from "../common/MobileFrame";
import CloseCircle from "../icons/CloseCircle";

interface MobilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  activeTab: "preview" | "qrcode";
  onTabChange: (tab: "preview" | "qrcode") => void;
}

export default function MobilePreviewModal({
  isOpen,
  onClose,
  children,
  activeTab,
  onTabChange,
}: MobilePreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full max-w-md mx-4">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 flex items-center gap-2 z-10"
        >
          <span className="text-white text-[16px] font-semibold leading-[24px]">
            Close
          </span>
          <CloseCircle className="text-white w-6 h-6" />
        </button>
        <div className="relative bg-white rounded-[var(--Corner-Radius-10)] max-h-[90vh] overflow-y-auto shadow-lg">
          <div className="flex flex-col items-center py-6 px-8 gap-4">
            <PreviewQRButtons activeTab={activeTab} onTabChange={onTabChange} />
            <MobileFrame size="desktop">
              <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
                {children}
              </div>
            </MobileFrame>
          </div>
        </div>
      </div>
    </div>
  );
}
