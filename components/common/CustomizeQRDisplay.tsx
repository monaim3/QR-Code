"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import { useAppSelector } from "@/store/hooks";
import { QRFrameArray } from "@/components/common/QRFrameArray";
import { getLogoComponent } from "@/lib/logoRegistry";

export default function CustomizeQRDisplay() {
  const frameQrRef = useRef<SVGGElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  const websiteUrl = useAppSelector((state) => state.preview.websiteUrl);
  const {
    selectedFrameIndex,
    frameText,
    frameColor,
    frameBackgroundColor,
    frameTextColor,
    transparentFrameBg,
    dotColor,
    backgroundColor,
    transparentBg,
    patternStyle,
    cornerFrameColor,
    cornerDotColor,
    cornerFrameStyle,
    cornerDotType,
    selectedLogo,
    customLogo,
  } = useAppSelector((state) => state.qr);

  const selectedFrame = QRFrameArray[selectedFrameIndex];
  const SelectedFrameComponent = selectedFrame.frame;
  const isDefaultFrame = selectedFrameIndex === 0;

  const createIconImage = (logoId: string): Promise<string | null> => {
    return new Promise((resolve) => {
      try {
        const LogoComponent = getLogoComponent(logoId);
        if (!LogoComponent) {
          resolve(null);
          return;
        }

        const div = document.createElement("div");
        div.style.cssText =
          "position:absolute;left:-9999px;width:60px;height:60px;";
        document.body.appendChild(div);

        import("react-dom/client").then(({ createRoot }) => {
          const root = createRoot(div);
          root.render(<LogoComponent />);

          requestAnimationFrame(() => {
            const svg = div.querySelector("svg");

            if (!svg) {
              root.unmount();
              document.body.removeChild(div);
              resolve(null);
              return;
            }

            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement("canvas");
            canvas.width = 100;
            canvas.height = 100;
            const ctx = canvas.getContext("2d");

            if (!ctx) {
              root.unmount();
              document.body.removeChild(div);
              resolve(null);
              return;
            }

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.roundRect(0, 0, 100, 100, 15);
            ctx.fill();

            const img = new Image();
            const svgBlob = new Blob([svgData], {
              type: "image/svg+xml;charset=utf-8",
            });
            const url = URL.createObjectURL(svgBlob);

            img.onload = () => {
              ctx.drawImage(img, 20, 20, 60, 60);
              URL.revokeObjectURL(url);
              const dataUrl = canvas.toDataURL("image/png");
              root.unmount();
              document.body.removeChild(div);
              resolve(dataUrl);
            };

            img.onerror = () => {
              URL.revokeObjectURL(url);
              root.unmount();
              document.body.removeChild(div);
              resolve(null);
            };

            img.src = url;
          });
        });
      } catch (error) {
        console.error("Error creating icon:", error);
        resolve(null);
      }
    });
  };

  useEffect(() => {
    if (!frameQrRef.current) return;

    const updateQRCode = async () => {
      const qrOptions: Options = {
        type: "svg",
        data: websiteUrl || "https://www.example.com/",
        margin: 0,
        dotsOptions: {
          color: dotColor,
          type: patternStyle as any,
        },
        backgroundOptions: {
          color: transparentBg ? "transparent" : backgroundColor,
        },
        cornersSquareOptions:
          cornerFrameStyle === "none"
            ? undefined
            : {
                color: cornerFrameColor,
                type: cornerFrameStyle as any,
              },
        cornersDotOptions:
          cornerDotType === "none"
            ? undefined
            : {
                color: cornerDotColor,
                type: cornerDotType as any,
              },
      };

      // Logo handling
      if (selectedLogo) {
        const iconDataUrl = await createIconImage(selectedLogo);

        if (iconDataUrl) {
          qrOptions.image = iconDataUrl;
          qrOptions.imageOptions = {
            hideBackgroundDots: true,
            imageSize: 0.4,
            margin: 0,
          };
        }
      } else if (customLogo) {
        qrOptions.image = customLogo;
        qrOptions.imageOptions = {
          hideBackgroundDots: true,
          imageSize: 0.3,
          margin: 0,
        };
      }

      if (frameQrRef.current) {
        frameQrRef.current.innerHTML = "";

        if (qrCodeRef.current) {
          qrCodeRef.current.update(qrOptions);
          qrCodeRef.current.append(
            frameQrRef.current as unknown as HTMLElement,
          );
        } else {
          qrCodeRef.current = new QRCodeStyling(qrOptions);
          qrCodeRef.current.append(
            frameQrRef.current as unknown as HTMLElement,
          );
        }
      }
    };

    updateQRCode();
  }, [
    websiteUrl,
    selectedFrameIndex,
    dotColor,
    backgroundColor,
    transparentBg,
    cornerFrameColor,
    cornerDotColor,
    patternStyle,
    cornerFrameStyle,
    cornerDotType,
    selectedLogo,
    customLogo,
  ]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-[32px]">
      {isDefaultFrame ? (
        <svg width="120" height="120" viewBox="0 0 300 300">
          <g ref={frameQrRef} />
        </svg>
      ) : (
        <SelectedFrameComponent
          label={frameText}
          backgroundColor={
            transparentFrameBg ? "transparent" : frameBackgroundColor
          }
          textColor={
            frameTextColor
              ? frameTextColor
              : selectedFrame.frameColor === "black"
                ? "#FFFFFF"
                : "#000000"
          }
          frameColor={frameColor}
          width={260}
          height={260}
        >
          <svg width="40" height="40" viewBox="0 0 300 300">
            <g ref={frameQrRef} />
          </svg>
        </SelectedFrameComponent>
      )}
    </div>
  );
}
