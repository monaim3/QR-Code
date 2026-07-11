"use client";

import { ReactNode, useEffect } from "react";
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
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-[350px] mt-12 mb-8">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 flex items-center gap-2 z-10"
        >
          <span className="text-white text-[16px] font-semibold leading-[24px]">
            Close
          </span>
          <CloseCircle className="text-white w-6 h-6" />
        </button>
        <div className="relative bg-white rounded-[var(--Corner-Radius-10)] shadow-lg">
          <div className="flex flex-col items-center py-6 gap-4">
            <PreviewQRButtons activeTab={activeTab} onTabChange={onTabChange} />
            {/* Scale 280×560 frame proportionally to 243×486 so card fits exactly 350×594 */}
            <div className="relative overflow-hidden" style={{ width: "243px", height: "486px" }}>
              <div className="absolute top-0 left-0" style={{ transform: "scale(0.8678)", transformOrigin: "top left" }}>
                <MobileFrame>
                  <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
                    {children}
                  </div>
                </MobileFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
