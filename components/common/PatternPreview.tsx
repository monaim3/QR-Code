"use client";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

type PatternPreviewProps = {
  type: string;
  isSelected: boolean;
  onClick: () => void;
};

const PatternPreview = ({ type, isSelected, onClick }: PatternPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!previewRef.current) return;

    const qrCode = new QRCodeStyling({
      data: "https://example.com",
      width: 60,
      height: 60,
      margin: 2,
      dotsOptions: {
        color: "#000000",
        type: type as any, // or cast to the specific type from qr-code-styling
      },
      backgroundOptions: {
        color: "#FFFFFF",
      },
      cornersSquareOptions: {
        color: "#000000",
        type: "extra-rounded",
      },
      cornersDotOptions: {
        color: "#000000",
        type: "dot",
      },
    });

    previewRef.current.innerHTML = "";
    qrCode.append(previewRef.current);
    qrCodeRef.current = qrCode;

    return () => {
      if (previewRef.current) {
        previewRef.current.innerHTML = "";
      }
    };
  }, [type]);

  return (
    <button
      onClick={onClick}
      className={`w-full aspect-square border-2 rounded-[10px] flex items-center justify-center transition-all p-1 ${
        isSelected
          ? "border-[#01A56D] bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <div ref={previewRef} className=" flex items-center justify-center" />
    </button>
  );
};

export default PatternPreview;
