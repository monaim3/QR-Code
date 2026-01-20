"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import { useAppSelector } from "@/store/hooks";
import { QRFrameArray } from "@/components/common/QRFrameArray";
import CommonFrameQr from "@/components/icons/common-frame-qr";
import { getLogoComponent } from "@/lib/logoRegistry";

export default function CustomizeQRDisplay() {
  const staticQrRef = useRef<HTMLDivElement>(null);
  const frameQrRef = useRef<HTMLDivElement>(null);
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
  console.log("selectedLogo", selectedLogo);
  const SelectedFrameComponent = QRFrameArray[selectedFrameIndex];
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
    if (selectedFrameIndex !== 0 || !staticQrRef.current) return;

    const qrOptions: Options = {
      data: websiteUrl || "https://www.example.com/",
      width: 300,
      height: 300,
      margin: 0,
      dotsOptions: {
        color: "#000000",
        type: "rounded" as any,
      },
      backgroundOptions: {
        color: "#FFFFFF",
      },
    };

    staticQrRef.current.innerHTML = "";
    const staticQr = new QRCodeStyling(qrOptions);
    staticQr.append(staticQrRef.current);
  }, [websiteUrl, selectedFrameIndex]);

  useEffect(() => {
    if (selectedFrameIndex === 0 || !frameQrRef.current) return;

    const updateQRCode = async () => {
      const qrOptions: Options = {
        data: websiteUrl || "https://www.example.com/",
        width: 300,
        height: 300,
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
        console.log("iconDataUrl", iconDataUrl);
        if (iconDataUrl) {
          qrOptions.image = iconDataUrl;
          qrOptions.imageOptions = {
            hideBackgroundDots: true,
            imageSize: 0.3,
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

      frameQrRef.current!.innerHTML = "";

      if (qrCodeRef.current) {
        qrCodeRef.current.update(qrOptions);
      } else {
        qrCodeRef.current = new QRCodeStyling(qrOptions);
      }

      if (frameQrRef.current && qrCodeRef.current) {
        qrCodeRef.current.append(frameQrRef.current);
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
        <div
          ref={staticQrRef}
          className="scale-[0.6] origin-center"
          // style={{
          //   transform: "scale(0.6)",
          //   transformOrigin: "center center",
          // }}
        />
      ) : (
        <SelectedFrameComponent
          label={frameText}
          backgroundColor={
            transparentFrameBg ? "transparent" : frameBackgroundColor
          }
          textColor={frameTextColor}
          frameColor={frameColor}
          width={260}
          height={260}
        >
          <foreignObject x="-10" y="-10" width="58" height="58">
            <div
              className="flex items-center justify-center w-[58px] h-[58px] overflow-hidden"
              // style={{
              //   width: 58,
              //   height: 58,
              //   overflow: "hidden",
              // }}
            >
              <CommonFrameQr />
              <div
                ref={frameQrRef}
                className="scale-[0.193]"
                // style={{
                //   transform: "scale(0.193)",
                // }}
              />
            </div>
          </foreignObject>
        </SelectedFrameComponent>
      )}
    </div>
  );
}
