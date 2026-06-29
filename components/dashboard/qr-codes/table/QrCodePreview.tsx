import QrCodeLoader from "./QrCodeLoader";
import { flushSync } from "react-dom";
import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import { getLogoComponent } from "@/lib/logoRegistry";
import { QrCode as qr } from "@/types/generatedQr";
import { QRFrameArray } from "@/components/common/QRFrameArray";

interface Props {
  isLoading?: boolean;
  qrCodeData?: qr;
}

export interface QrCodePreviewHandle {
  exportAsPng: (width: number, height: number) => Promise<Blob>;
  exportAsJpg: (width: number, height: number) => Promise<Blob>;
  exportAsSvg: () => Promise<Blob>;
  getContainerElement: () => HTMLDivElement | null;
}

function extractUrl(raw: string): string {
  const markdownMatch = raw?.match(/\[.*?\]\((.*?)\)/);
  if (markdownMatch) return markdownMatch[1];
  return raw || "https://www.example.com";
}

function extractLogoId(selected: string): string | null {
  if (!selected) return null;
  if (!selected.includes("/")) return selected.toLowerCase();
  return selected.split("/").pop()?.replace(".svg", "").toLowerCase() ?? null;
}

const QrCodePreview = forwardRef<QrCodePreviewHandle, Props>(function QrCodePreview(
  { isLoading = false, qrCodeData },
  ref
) {
  const mobileQrRef = useRef<SVGGElement>(null);
  const mobileQrCodeRef = useRef<QRCodeStyling | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedFrameIndex = (() => {
    const type = qrCodeData?.qrDesign?.frame?.type;
    if (!type || type === "default") return 0;
    const idx = Number(type);
    return idx < QRFrameArray.length ? idx : 0;
  })();

  const selectedFrame = QRFrameArray[selectedFrameIndex];
  const SelectedFrameComponent = selectedFrame.frame;

useImperativeHandle(ref, () => ({
  getContainerElement: () => containerRef.current,

  exportAsSvg: async (): Promise<Blob> => {
    if (!containerRef.current) throw new Error("Container not ready");
    const { captureQrAsBlob } = await import("@/lib/qr/qrCapture");
    return captureQrAsBlob(containerRef.current, 1024, 1024, "image/svg+xml");
  },

  exportAsPng: async (width: number, height: number): Promise<Blob> => {
    if (!containerRef.current) throw new Error("Container not ready");
    const { captureQrAsBlob } = await import("@/lib/qr/qrCapture");
    return captureQrAsBlob(containerRef.current, width, height, "image/png");
  },

  exportAsJpg: async (width: number, height: number): Promise<Blob> => {
    if (!containerRef.current) throw new Error("Container not ready");
    const { captureQrAsBlob } = await import("@/lib/qr/qrCapture");
    return captureQrAsBlob(containerRef.current, width, height, "image/jpeg", 0.95);
  },
}));

  const createIconImage = (logoId: string): Promise<string | null> => {
    return new Promise((resolve) => {
      try {
        const LogoComponent = getLogoComponent(logoId);
        if (!LogoComponent) { resolve(null); return; }

        const div = document.createElement("div");
        div.style.cssText = "position:absolute;left:-9999px;width:60px;height:60px;";
        document.body.appendChild(div);

        import("react-dom/client").then(({ createRoot }) => {
          const root = createRoot(div);
          flushSync(() => { root.render(<LogoComponent />); });

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
          const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
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
      } catch (error) {
        console.error("Error creating icon:", error);
        resolve(null);
      }
    });
  };

  useEffect(() => {
    if (!mobileQrRef.current) return;

    const updateQRCode = async () => {
      const design = qrCodeData?.qrDesign;
      const cornerFrameStyle = design?.cornersSquareOptions?.type;
      const cornerDotType = design?.cornersDotOptions?.type;
      const isTransparentBg = (design?.backgroundOptions as any)?.transparent ?? false;
      const cleanUrl = extractUrl(qrCodeData?.content?.url ?? "");

      const qrOptions: Options = {
        type: "svg",
        data: cleanUrl,
        margin: design?.margin ?? 0,
        dotsOptions: {
          color: design?.dotsOptions?.color ?? "#000000",
          type: design?.dotsOptions?.type as any,
        },
        backgroundOptions: {
          color: isTransparentBg
            ? "transparent"
            : (design?.backgroundOptions?.color ?? "#FFFFFF"),
        },
        cornersSquareOptions:
          !cornerFrameStyle || cornerFrameStyle === "none"
            ? undefined
            : { color: design?.cornersSquareOptions?.color ?? "#000000", type: cornerFrameStyle as any },
        cornersDotOptions:
          !cornerDotType || cornerDotType === "none"
            ? undefined
            : { color: design?.cornersDotOptions?.color ?? "#000000", type: cornerDotType as any },
      };

      const rawSelected = design?.image?.selected || null;
      const selectedLogo = rawSelected ? extractLogoId(rawSelected) : null;
      const customLogo = design?.image?.uploaded || null;

      if (selectedLogo) {
        const iconDataUrl = await createIconImage(selectedLogo);
        if (iconDataUrl) {
          qrOptions.image = iconDataUrl;
          qrOptions.imageOptions = {
            hideBackgroundDots: design?.imageOptions?.hideBackgroundDots ?? true,
            imageSize: design?.imageOptions?.imageSize ?? 0.4,
            margin: design?.imageOptions?.margin ?? 0,
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

      if (mobileQrRef.current) {
        mobileQrRef.current.innerHTML = "";
        if (mobileQrCodeRef.current) {
          mobileQrCodeRef.current.update(qrOptions);
          mobileQrCodeRef.current.append(mobileQrRef.current as any);
        } else {
          mobileQrCodeRef.current = new QRCodeStyling(qrOptions);
          mobileQrCodeRef.current.append(mobileQrRef.current as any);
        }
      }
    };

    updateQRCode();
  }, [
    qrCodeData?.content?.url,
    qrCodeData?.qrDesign?.dotsOptions?.color,
    qrCodeData?.qrDesign?.dotsOptions?.type,
    qrCodeData?.qrDesign?.backgroundOptions?.color,
    qrCodeData?.qrDesign?.cornersSquareOptions?.color,
    qrCodeData?.qrDesign?.cornersSquareOptions?.type,
    qrCodeData?.qrDesign?.cornersDotOptions?.color,
    qrCodeData?.qrDesign?.cornersDotOptions?.type,
    qrCodeData?.qrDesign?.image?.selected,
    qrCodeData?.qrDesign?.image?.uploaded,
    selectedFrameIndex,
  ]);

  return (
    <div ref={containerRef} className="h-[160px]">
      {isLoading ? (
        <QrCodeLoader />
      ) : (
        <>
          {selectedFrameIndex === 0 ? (
            <svg width="190" height="190" viewBox="0 0 300 300">
              <g ref={mobileQrRef} />
            </svg>
          ) : (
            <SelectedFrameComponent
              label={qrCodeData?.qrDesign?.frame?.text}
              backgroundColor={
                (qrCodeData?.qrDesign?.frame as any)?.transparent
                  ? "transparent"
                  : (qrCodeData?.qrDesign?.frame?.background ?? "#FFFFFF")
              }
              textColor={
                qrCodeData?.qrDesign?.frame?.textColor ||
                (selectedFrame.frameColor === "black" ? "#FFFFFF" : "#000000")
              }
              frameColor={qrCodeData?.qrDesign?.frame?.color ?? "#000000"}
              width={160}
              height={160}
            >
              <svg width="40" height="40" viewBox="0 0 300 300">
                <g ref={mobileQrRef} />
              </svg>
            </SelectedFrameComponent>
          )}
        </>
      )}
    </div>
  );
});

export default QrCodePreview;