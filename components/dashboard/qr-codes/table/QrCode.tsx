//import Image from "next/image";
import QrCodeLoader from "./QrCodeLoader";
import { flushSync } from "react-dom";
import { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import { getLogoComponent } from "@/lib/logoRegistry";
import { QrCode as qr } from "@/types/generatedQr";
import { useState } from "react";
import { QRFrameArray } from "@/components/common/QRFrameArray";

interface Props {
  isLoading?: boolean;
  thumbnail: string;
  qrCodeData?: qr;
  onQrPreviewModal: () => void;
}

export default function QrCode({
  isLoading = false,
  thumbnail,
  qrCodeData,
  onQrPreviewModal,
}: Props) {

  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0);

  const mobileQrRef = useRef<SVGGElement>(null);
  const mobileQrCodeRef = useRef<QRCodeStyling | null>(null);

  /// create qr code image
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
  
            flushSync(() => {
              root.render(<LogoComponent />);
            });
  
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
        } catch (error) {
          console.error("Error creating icon:", error);
          resolve(null);
        }
      });
    };

    const selectedFrame = QRFrameArray[selectedFrameIndex];
    const SelectedFrameComponent = selectedFrame.frame;

   useEffect(() => {
        if (!mobileQrRef.current) return;

        const frameIndex = qrCodeData?.qrDesign?.frame?.type === "default" ? 0 : Number(qrCodeData?.qrDesign?.frame?.type);
        setSelectedFrameIndex(frameIndex);  

        const updateQRCode = async () => {
          const qrOptions: Options = {
            type: "svg",
            data: `https://www.example.com/${qrCodeData?.uri || 'myqrcode.com/placeholder'}`,
            margin: 0,
            dotsOptions: {
              color: qrCodeData?.qrDesign?.dotsOptions?.color ?? "#000000",
              type: qrCodeData?.qrDesign?.dotsOptions?.type as any,
            },
            backgroundOptions: {
              color: qrCodeData?.qrDesign?.backgroundOptions?.color ?? "#FFFFFF",
            },
            cornersSquareOptions: {
              color: qrCodeData?.qrDesign?.cornersSquareOptions?.color ?? "#000000",
              type: qrCodeData?.qrDesign?.cornersSquareOptions?.type as any,
            },
            cornersDotOptions:{
              color: qrCodeData?.qrDesign?.cornersDotOptions?.color ?? "#000000",
              type: qrCodeData?.qrDesign?.cornersDotOptions?.type as any,
            }
          };

          const selectedLogo = qrCodeData?.qrDesign?.image?.selected || null;
          const customLogo = qrCodeData?.qrDesign?.image?.uploaded || null;
    
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
      qrCodeData?.content.url,
      qrCodeData?.qrDesign?.dotsOptions.color,
      qrCodeData?.qrDesign?.backgroundOptions.color,
      qrCodeData?.qrDesign?.cornersSquareOptions.color,
      qrCodeData?.qrDesign?.cornersDotOptions.color,
      qrCodeData?.qrDesign.dotsOptions.type,
      qrCodeData?.qrDesign?.cornersDotOptions?.type,
      qrCodeData?.qrDesign?.image?.selected,
      qrCodeData?.qrDesign?.image?.uploaded,
      selectedFrameIndex
    ]);


  return (
    <div
      onClick={onQrPreviewModal}
      className="w-[88px] h-[88px] p-2 border hover:border-2 border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-8)] bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] cursor-pointer flex flex-col items-center justify-center"
    >
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
                backgroundColor= {
                  qrCodeData?.qrDesign?.frame?.background ?? "#FFFFFF"
                }
                textColor={
                  qrCodeData?.qrDesign?.frame?.textColor ?? ""
                }
                frameColor={qrCodeData?.qrDesign?.frame?.color ?? "#000000"}
                width={180}
                height={180}
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
}
