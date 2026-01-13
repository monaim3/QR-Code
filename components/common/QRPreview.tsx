import { QRState } from "@/store/slices/qrSlice";
import { QRCodeSVG } from "qrcode.react";

function QRPreview({ state }: { state: QRState }) {
  const qrSize = 180;

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-6 rounded-[32px]"
      style={{
        backgroundColor: state.frame.transparent
          ? "transparent"
          : state.frame.bgColor,
      }}
    >
      {/* QR Code Frame */}
      {state.frame.style !== "none" && (
        <div
          className="rounded-2xl p-6 mb-4"
          style={{
            backgroundColor: state.frame.color,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <QRCodeSVG
            value={state.url}
            size={qrSize}
            level="H"
            bgColor={
              state.pattern.transparent ? "transparent" : state.pattern.bgColor
            }
            fgColor={state.pattern.dotColor}
            imageSettings={
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
                : undefined
            }
          />
          <p
            className="text-center mt-3 font-medium text-sm"
            style={{ color: state.frame.textColor }}
          >
            {state.frame.text}
          </p>
        </div>
      )}

      {/* QR Code without Frame */}
      {state.frame.style === "none" && (
        <div className="p-4">
          <QRCodeSVG
            value={state.url}
            size={qrSize}
            level="H"
            bgColor={
              state.pattern.transparent ? "transparent" : state.pattern.bgColor
            }
            fgColor={state.pattern.dotColor}
            imageSettings={
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
                : undefined
            }
          />
        </div>
      )}
    </div>
  );
}

export default QRPreview;
