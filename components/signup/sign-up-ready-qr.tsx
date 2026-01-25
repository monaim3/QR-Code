"use client";
import FourCorner from "../../components/icons/corner";
import CheckIcon from "../../components/icons/check-icon";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import QRCodeStyling, { Options } from "qr-code-styling";
import { QRFrameArray } from "@/components/common/QRFrameArray";
import { getLogoComponent } from "@/lib/logoRegistry";

interface ReadyQrProps{
  showOnMobile?: boolean;
}

class AuthFeatures {
  id: number;
  label: string;
  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }
}

const authFeatureList = [
  new AuthFeatures(1, 'Unlimited QR codes'),
  new AuthFeatures(2, 'Unlimited QR code scans'),
  new AuthFeatures(3, 'Unrestricted customization options'),
  new AuthFeatures(4, 'Unlimited access to analytics'),
  new AuthFeatures(5, 'Unlimited downloads'),
  new AuthFeatures(6, 'Full access to all download formats'),
  new AuthFeatures(7, 'Create any type of QR code you need'),
];

export default function SignUpReadyQr({ showOnMobile = false }: ReadyQrProps) {

  const router = useRouter();
  const mobileQrRef = useRef<HTMLDivElement>(null);
  const mobileQrCodeRef = useRef<QRCodeStyling | null>(null);

  const websiteUrl = useAppSelector((state) => state.preview.websiteUrl);
  const {
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
    selectedFrameIndex,
    frameText,
    frameColor,
    frameBackgroundColor,
    frameTextColor,
    transparentFrameBg,
  } = useAppSelector((state) => state.qr);

  // ✅ Copy exact createIconImage function from QRCodeCustomize
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

  const selectedFrame = QRFrameArray[selectedFrameIndex];
  const SelectedFrameComponent = selectedFrame.frame;

  // ✅ EXACT COPY of Desktop preview QR code update from QRCodeCustomize
  useEffect(() => {
    if (!mobileQrRef.current) return;

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
          mobileQrCodeRef.current.append(mobileQrRef.current);
        } else {
          mobileQrCodeRef.current = new QRCodeStyling(qrOptions);
          mobileQrCodeRef.current.append(mobileQrRef.current);
        }
      }
    };

    updateQRCode();
  }, [
    websiteUrl,
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
    selectedFrameIndex,
  ]);

  return (
    <div className={`${showOnMobile ? "flex" : "hidden"} desktop:flex flex-col w-full desktop:w-1/2 items-center justify-start bg-[#E7F4ED] rounded-[10px] p-[24px] desktop:pt-[32px] desktop:px-[56px] desktop:pb-[56px] gap-[24px] desktop:gap-[32px]`}>

      {/* Heading */}
      <p className="text-[20px] desktop:text-[24px] font-bold leading-[32px] text-center text-[#0A0909] tracking-[0%]">
        Your QR code is ready!
      </p>

      {/* QR Code Box - EXACT STRUCTURE from QRCodeCustomize */}
      <div className="relative w-[260px] h-[260px] bg-white rounded-[10px] flex items-center justify-center">
  <div className="relative w-[220px] h-[220px]">
    <FourCorner className="absolute inset-0 pointer-events-none z-10" />
    <div className="absolute inset-0 w-full h-full flex items-center justify-center rounded-[32px]">
      {selectedFrameIndex === 0 ? (
        <svg width="120" height="120" viewBox="0 0 300 300">
          <g ref={mobileQrRef} />
        </svg>
      ) : (
        <SelectedFrameComponent
          label={frameText}
          backgroundColor={
            transparentFrameBg
              ? "transparent"
              : frameBackgroundColor
          }
          textColor={
            frameTextColor
              ? frameTextColor
              : selectedFrame.frameColor === "black"
                ? "#ffffff"
                : "#000000"
          }
          frameColor={frameColor}
          width={180}
          height={180}
        >
          <svg width="40" height="40" viewBox="0 0 300 300">
            <g ref={mobileQrRef} />
          </svg>
        </SelectedFrameComponent>
      )}
    </div>
  </div>
      </div>

      <div className="w-full px-[0px]">
        <div className="w-full h-[1px] bg-[#CDD0DB80]"></div>
      </div>

      {/* Features List */}
      <div className="flex flex-col w-full gap-[16px] overflow-auto">
        {authFeatureList.map((feature) => (
          <div key={feature.id} className="flex items-center gap-[8px]">
            <CheckIcon/>
            <p className="text-[16px] leading-[24px] font-regular text-[var(--Dark-gray)]">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}