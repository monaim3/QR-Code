"use client";

import React, { useState, useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import MobileFrame from "@/components/common/MobileFrame";
import ColorInput from "@/components/common/ColorInput";
import Accordion from "@/components/common/Accordion";
import Container from "@/components/common/parent-container";
import PatternPreview from "@/components/common/PatternPreview";
import CornerStylePreview from "@/components/common/CornerStylePreview";
import { IoIosSwap } from "react-icons/io";
import LogoSelector from "@/components/common/LogoSelector";
import { useAppSelector } from "@/store/hooks";

import { IconType } from "react-icons";
import { QRFrameArray } from "@/components/common/QRFrameArray";
import QrCodeFrameAllInput from "@/components/common/QrCodeFrameAllInput";
import QRFrameGallery from "@/components/common/QRFrameGallery";
import CommonFrameQr from "@/components/icons/common-frame-qr";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
interface SocialLogo {
  Icon: IconType;
  color: string;
}

type LogoType = {
  name: string;
  Icon: React.ComponentType;
};

export default function QRCodeCustomizer() {
  const [view, setView] = useState<"preview" | "qrcode">("preview");
  const qrRef = useRef<HTMLDivElement>(null);
  const mobileQrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);
  const mobileQrCodeRef = useRef<QRCodeStyling | null>(null);

  // Frame selection state
  const [selectedFrameIndex, setSelectedFrameIndex] = useState<number>(0);

  // Frame customization states
  const [frameText, setFrameText] = useState("Scan me!");
  const [frameColor, setFrameColor] = useState("#0A0909");
  const [frameBackgroundColor, setFrameBackgroundColor] = useState("#ffffff");
  const [frameTextColor, setFrameTextColor] = useState("#000000");
  const [transparentFrameBg, setTransparentFrameBg] = useState(false);

  const [dotColor, setDotColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [transparentBg, setTransparentBg] = useState(false);
  const [patternTransparentBg, setPatternTransparentBg] = useState(false);
  const [cornerFrameColor, setCornerFrameColor] = useState("#000000");
  const [cornerDotColor, setCornerDotColor] = useState("#000000");
  const [patternStyle, setPatternStyle] = useState("rounded");
  const [cornerFrameStyle, setCornerFrameStyle] = useState("extra-rounded");
  const [cornerDotType, setCornerDotType] = useState("dot");
  const [selectedLogo, setSelectedLogo] = useState<LogoType | null>(null);
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  const websiteUrl = useAppSelector((state) => state.preview.websiteUrl);

  const patternOptions = [
    "rounded",
    "dots",
    "classy",
    "classy-rounded",
    "square",
    "extra-rounded",
  ];
  const cornerFrameOptions = ["none", "square", "dot", "extra-rounded"];
  const cornerDotOptions = ["none", "dot", "square"];

  const createIconImage = (logo: LogoType): Promise<string | null> => {
    return new Promise((resolve) => {
      try {
        // Create a hidden div to render the component
        const div = document.createElement("div");
        div.style.cssText =
          "position:absolute;left:-9999px;width:60px;height:60px;";
        document.body.appendChild(div);

        // Use a temporary React root
        import("react-dom/client").then(({ createRoot }) => {
          const root = createRoot(div);

          root.render(<logo.Icon />);

          // Wait for render then get SVG
          requestAnimationFrame(() => {
            const svg = div.querySelector("svg");

            if (!svg) {
              root.unmount();
              document.body.removeChild(div);
              resolve(null);
              return;
            }

            // Get SVG markup
            const svgData = new XMLSerializer().serializeToString(svg);

            // Create canvas
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

            // Draw white rounded background
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.roundRect(0, 0, 100, 100, 15);
            ctx.fill();

            // Create image from SVG
            const img = new Image();
            const svgBlob = new Blob([svgData], {
              type: "image/svg+xml;charset=utf-8",
            });
            const url = URL.createObjectURL(svgBlob);

            img.onload = () => {
              // Draw centered icon
              ctx.drawImage(img, 20, 20, 60, 60);
              URL.revokeObjectURL(url);

              const dataUrl = canvas.toDataURL("image/png");

              // Cleanup
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
  const SelectedFrameComponent = QRFrameArray[selectedFrameIndex];
  const isDefaultFrame = selectedFrameIndex === 0;
  console.log("selectedFrameIndex", selectedFrameIndex);
  useEffect(() => {
    const updateQRCode = async () => {
      if (!mobileQrRef.current) return;

      const qrOptions: Options = {
        data: websiteUrl || "https://www.linkedin.com/",
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

      if (selectedLogo) {
        const iconDataUrl = await createIconImage(selectedLogo);
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

      mobileQrRef.current.innerHTML = "";

      if (mobileQrCodeRef.current) {
        mobileQrCodeRef.current.update(qrOptions);
      } else {
        mobileQrCodeRef.current = new QRCodeStyling(qrOptions);
      }

      if (mobileQrRef.current && mobileQrCodeRef.current) {
        mobileQrCodeRef.current.append(mobileQrRef.current);
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
  ]);
  useEffect(() => {
    const updateQRCode = async () => {
      if (!mobileQrRef.current) return;

      const qrOptions: Options = {
        data: websiteUrl || "https://www.example.com/",
        width: 200,
        height: 200,
        margin: 10,
        type: "svg",
        dotsOptions: {
          color: dotColor,
          type: "rounded" as any,
        },
        backgroundOptions: {
          color: transparentBg ? "transparent" : backgroundColor,
        },
      };

      mobileQrRef.current.innerHTML = "";

      if (mobileQrCodeRef.current) {
        mobileQrCodeRef.current.update(qrOptions);
      } else {
        mobileQrCodeRef.current = new QRCodeStyling(qrOptions);
      }

      if (mobileQrRef.current && mobileQrCodeRef.current) {
        mobileQrCodeRef.current.append(mobileQrRef.current);
      }
    };

    updateQRCode();
  }, [websiteUrl, dotColor, backgroundColor, transparentBg]);

  const handleSwapFrameColors = () => {
    const temp = frameBackgroundColor;
    setFrameBackgroundColor(frameTextColor);
    setFrameTextColor(temp);
  };
  const handleTransparentChange = (checked: boolean) => {
    setPatternTransparentBg(checked);

    if (checked) {
      setBackgroundColor("transparent");
    } else {
      setBackgroundColor("#ffffff");
    }
  };
  const staticQrRef = useRef<HTMLDivElement>(null);
  // for first frame
  useEffect(() => {
    const createQR = () => {
      if (view !== "qrcode" || selectedFrameIndex !== 0) {
        console.log("Wrong view or index");
        return;
      }
      if (!staticQrRef.current) {
        requestAnimationFrame(createQR);
        return;
      }

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
    };
    createQR();
  }, [websiteUrl, selectedFrameIndex, view]);
  return (
    <div className="bg-gray-50 p-8 min-h-screen">
      <Container>
        <div className="flex flex-col desktop:flex-row gap-8 lg:pb-32">
          <div className="flex-1 flex flex-col space-y-4 ">
            <h1 className="text-2xl font-Poppins font-bold text-gray-900">
              Customize design for the Website URL QR code
            </h1>

            <Accordion
              title="QR code frame"
              description="Frames improve your QR code visibility, leading to more scans"
              defaultOpen={true}
            >
              <QRFrameGallery
                setSelectedFrameIndex={setSelectedFrameIndex}
                selectedFrameIndex={selectedFrameIndex}
              />
              <QrCodeFrameAllInput
                setFrameText={setFrameText}
                frameText={frameText}
                frameBackgroundColor={frameBackgroundColor}
                setFrameBackgroundColor={setFrameBackgroundColor}
                frameTextColor={frameTextColor}
                setFrameTextColor={setFrameTextColor}
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                transparentBg={transparentBg}
                setTransparentBg={setTransparentBg}
                handleSwapColors={handleSwapFrameColors}
              />
            </Accordion>

            <Accordion
              title="QR code pattern"
              description="Select a pattern for your QR code and choose colors"
              defaultOpen={true}
            >
              <div className="w-full">
                <label className="block text-lg font-bold text-gray-900">
                  Pattern style
                </label>
                <div className="grid grid-cols-10 gap-4 py-8">
                  {patternOptions.map((pattern) => (
                    <PatternPreview
                      key={pattern}
                      type={pattern}
                      isSelected={patternStyle === pattern}
                      onClick={() => setPatternStyle(pattern)}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-[#F8F9FC] rounded-xl !space-y-0 !m-0 !p-0 relative">
                <div className="flex items-end justify-center gap-6 px-6 pt-6 pb-8 relative z-10">
                  <ColorInput
                    label="Dot color"
                    value={dotColor}
                    onChange={setDotColor}
                    showColorIndicator
                    id="dot-color"
                  />
                  {/* <ColorPicker
                    value={dotColor}
                    onChange={setDotColor}
                    label="Dot color"
                  /> */}
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center text-gray-500"
                    onClick={() => {
                      setDotColor(backgroundColor);
                      setBackgroundColor(dotColor);
                    }}
                  >
                    <IoIosSwap className="text-2xl" />
                  </button>

                  <ColorInput
                    label="Background color"
                    value={
                      backgroundColor === "transparent"
                        ? "#ffffff"
                        : backgroundColor
                    }
                    onChange={(value) => setBackgroundColor(value)}
                    showColorIndicator
                    // disabled={patternTransparentBg}
                  />
                </div>
                <div className="flex items-center gap-2 px-6 pb-4">
                  <input
                    type="checkbox"
                    id="transparent-bg"
                    checked={patternTransparentBg}
                    onChange={(e) => handleTransparentChange(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded-md focus:ring-blue-500"
                  />
                  <label
                    htmlFor="transparent-bg"
                    className="text-sm text-gray-700 font-Popins"
                  >
                    Transparent background
                  </label>
                </div>
              </div>
            </Accordion>

            <Accordion
              title="QR code corners"
              description="Choose your QR code corner style"
              defaultOpen={true}
            >
              <div className="flex gap-4">
                <div className="">
                  <label className="block text-lg font-bold text-gray-900">
                    Corner frames style
                  </label>
                  <div className="grid grid-cols-6 gap-4 py-8">
                    {cornerFrameOptions.map((style) => (
                      <CornerStylePreview
                        key={style}
                        type={style}
                        isSelected={cornerFrameStyle === style}
                        onClick={() => setCornerFrameStyle(style)}
                        isFrame={true}
                      />
                    ))}
                  </div>
                </div>

                <div className="">
                  <label className="block text-lg font-bold text-gray-900">
                    Corner dots type
                  </label>
                  <div className="grid grid-cols-6 gap-4 py-8">
                    {cornerDotOptions.map((style) => (
                      <CornerStylePreview
                        key={style}
                        type={style}
                        isSelected={cornerDotType === style}
                        onClick={() => setCornerDotType(style)}
                        isFrame={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F9FC] rounded-xl !space-y-0 !m-0 !p-0">
                <div className="flex items-end justify-center gap-6 px-6 pt-6 pb-8">
                  <ColorInput
                    label="Corner frames color"
                    value={cornerFrameColor}
                    onChange={setCornerFrameColor}
                    showColorIndicator={true}
                    id="corner-frame-color"
                  />

                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center text-gray-500"
                    onClick={() => {
                      setDotColor(backgroundColor);
                      setBackgroundColor(dotColor);
                    }}
                  >
                    <IoIosSwap className="text-2xl" />
                  </button>

                  <ColorInput
                    label="Corner dots color"
                    value={cornerDotColor}
                    onChange={setCornerDotColor}
                    showColorIndicator={true}
                    id="corner-dot-color"
                  />
                </div>
              </div>
            </Accordion>

            <Accordion
              title="Logo"
              description="Add a logo to your QR code"
              defaultOpen={true}
            >
              <LogoSelector
                selectedLogo={selectedLogo}
                onLogoChange={setSelectedLogo}
                customLogo={customLogo}
                onCustomLogoUpload={setCustomLogo}
              />
            </Accordion>
          </div>

          {/* Preview Section */}
          <div className="desktop:sticky desktop:top-24 desktop:self-start desktop:h-fit">
            <div className="flex flex-col items-center justify-start">
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => setView("preview")}
                  className={`py-2 px-6 rounded-full font-medium font-roboto transition-all duration-700 ease-in-out ${
                    view === "preview"
                      ? "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]"
                      : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                  }`}
                >
                  <span className="text-sm leading-[22px] font-medium font-roboto">
                    Preview
                  </span>
                </button>
                <button
                  onClick={() => setView("qrcode")}
                  className={`py-2 px-6 rounded-full font-medium font-roboto transition-all duration-700 ease-in-out ${
                    view === "qrcode"
                      ? "text-white bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]"
                      : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                  }`}
                >
                  <span className="text-sm leading-[22px] font-medium font-roboto">
                    QR code
                  </span>
                </button>
              </div>
              <div className="hidden desktop:flex desktop:flex-col desktop:gap-4 h-[752px]">
                <MobileFrame>
                  {view === "preview" ? (
                    <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                      <WebsiteUrlPreview url={websiteUrl} />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                      {selectedFrameIndex === 0 ? (
                        // Index 0 → Shudhu plain QR code, kono frame nai
                        <div
                          ref={staticQrRef}
                          style={{
                            transform: "scale(0.6)",
                            transformOrigin: "center center",
                          }}
                        />
                      ) : (
                        <SelectedFrameComponent
                          label={frameText}
                          backgroundColor={
                            transparentFrameBg
                              ? "transparent"
                              : frameBackgroundColor
                          }
                          textColor={frameTextColor}
                          frameColor={frameColor}
                          width={260}
                          height={260}
                        >
                          {/* <foreignObject x="-10" y="-10" width="58" height="58">
                          <div className="flex items-center justify-center">
                            <CommonFrameQr />
                            <div ref={mobileQrRef} />
                          </div>
                        </foreignObject> */}
                          <foreignObject x="-10" y="-10" width="58" height="58">
                            <div
                              className="flex items-center justify-center"
                              style={{
                                width: 58,
                                height: 58,
                                overflow: "hidden",
                              }}
                            >
                              <CommonFrameQr />
                              <div
                                ref={mobileQrRef}
                                style={{
                                  transform: "scale(0.193)", // 58 / 300
                                  // transformOrigin: "top left",
                                }}
                              />
                            </div>
                          </foreignObject>
                        </SelectedFrameComponent>
                      )}
                    </div>
                  )}
                </MobileFrame>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
