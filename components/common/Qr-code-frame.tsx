// components/common/Qr-code-frame.tsx
"use client";

import { QRCodeSVG } from "qrcode.react";
import { useSelector } from "react-redux";
import { selectQRState } from "@/store/slices/qrSlice";

export default function QrCodeFrame() {
  const state = useSelector(selectQRState);

  // Frame style classes
  const getFrameClasses = () => {
    const baseStyle =
      "relative inline-flex flex-col items-center transition-all";

    const styleMap: Record<string, string> = {
      none: `${baseStyle}`,
      basic: `${baseStyle} p-6 rounded-xl border-4`,
      round: `${baseStyle} p-6 rounded-full border-4`,
      card: `${baseStyle} p-8 rounded-2xl border-2`,
      minimal: `${baseStyle} p-4 rounded-lg border-2`,
      modern: `${baseStyle} p-6 rounded-2xl`,
      classic: `${baseStyle} p-6 rounded-lg border-8`,
      badge: `${baseStyle} p-5 rounded-3xl border-4`,
    };

    return styleMap[state.frame.style] || styleMap.basic;
  };

  // Get shadow based on style
  const getBoxShadow = () => {
    switch (state.frame.style) {
      case "card":
        return `0 25px 50px -12px ${state.frame.color}40`;
      case "modern":
        return "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
      case "classic":
        return "0 10px 15px -3px rgba(0, 0, 0, 0.2)";
      case "badge":
        return "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      default:
        return undefined;
    }
  };

  // Background color
  const bgColor = state.frame.transparent ? "transparent" : state.frame.bgColor;
  const borderColor = state.frame.color;

  // Logo settings
  const logoSettings =
    state.logo.type !== "none"
      ? {
          src:
            state.logo.custom ||
            `https://via.placeholder.com/40?text=${
              state.logo.preset?.[0] || "L"
            }`,
          height: 40,
          width: 40,
          excavate: true,
        }
      : undefined;

  // QR Code without frame (style === 'none')
  if (state.frame.style === "none") {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
        <div className="flex flex-col items-center">
          <QRCodeSVG
            value={state.url || "https://example.com"}
            size={200}
            level="H"
            includeMargin={false}
            fgColor={state.pattern.dotColor}
            bgColor={
              state.pattern.transparent ? "transparent" : state.pattern.bgColor
            }
            imageSettings={logoSettings}
          />
          {state.frame.text && (
            <p
              className="mt-3 font-bold text-lg text-center"
              style={{ color: state.frame.textColor }}
            >
              {state.frame.text}
            </p>
          )}
        </div>
      </div>
    );
  }

  // QR Code with frame
  return (
    <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
      <div
        className={getFrameClasses()}
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          boxShadow: getBoxShadow(),
        }}
      >
        {/* QR Code Container */}
        <div
          className="bg-white rounded-lg p-3"
          style={{
            backgroundColor: state.pattern.transparent
              ? "transparent"
              : "#FFFFFF",
          }}
        >
          <QRCodeSVG
            value={state.url || "https://example.com"}
            size={200}
            level="H"
            includeMargin={false}
            fgColor={state.pattern.dotColor}
            bgColor={
              state.pattern.transparent ? "transparent" : state.pattern.bgColor
            }
            imageSettings={logoSettings}
          />
        </div>

        {/* Frame Text */}
        {state.frame.text && (
          <p
            className="mt-4 font-bold text-lg text-center px-2"
            style={{
              color: state.frame.textColor,
              textShadow:
                state.frame.style === "modern"
                  ? "0 2px 4px rgba(0,0,0,0.1)"
                  : undefined,
            }}
          >
            {state.frame.text}
          </p>
        )}

        {/* Decorative Elements for Badge Style */}
        {state.frame.style === "badge" && (
          <>
            <div
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-white"
              style={{ backgroundColor: borderColor }}
            />
            <div
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full border-2 border-white"
              style={{ backgroundColor: borderColor }}
            />
          </>
        )}

        {/* Gradient Overlay for Modern Style */}
        {state.frame.style === "modern" && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 0%, ${borderColor}15 100%)`,
            }}
          />
        )}

        {/* Double Border for Classic Style */}
        {state.frame.style === "classic" && (
          <div className="absolute inset-0 rounded-lg pointer-events-none border-4 border-white/30" />
        )}
      </div>
    </div>
  );
}
