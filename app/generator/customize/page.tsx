"use client";

import React, { useState, useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import Breadcrumb from "../../../components/generator/Breadcrumb"

import MobileFrame from "@/components/common/MobileFrame";
import ColorInput from "@/components/common/ColorInput";
import Accordion from "@/components/common/Accordion";
import Container from "@/components/common/parent-container";
import PatternPreview from "@/components/common/PatternPreview";
import CornerStylePreview from "@/components/common/CornerStylePreview";
import { IoIosSwap } from "react-icons/io";
import LogoSelector from "@/components/common/LogoSelector";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  setSelectedFrameIndex,
  setFrameText,
  setFrameColor,
  setFrameBackgroundColor,
  setFrameTextColor,
  setTransparentFrameBg,
  setDotColor,
  setBackgroundColor,
  setTransparentBg,
  setPatternStyle,
  setCornerFrameColor,
  setCornerDotColor,
  setCornerFrameStyle,
  setCornerDotType,
  setSelectedLogo,
  setCustomLogo,
} from "@/store/slices/qrSlice";

import { IconType } from "react-icons";
import { QRFrameArray } from "@/components/common/QRFrameArray";
import QrCodeFrameAllInput from "@/components/common/QrCodeFrameAllInput";
import QRFrameGallery from "@/components/common/QRFrameGallery";
import CommonFrameQr from "@/components/icons/common-frame-qr";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
import Swap from "@/components/icons/swap";
import { getLogoComponent } from "@/lib/logoRegistry";

interface SocialLogo {
  Icon: IconType;
  color: string;
}

export default function QRCodeCustomizer() {
  const dispatch = useAppDispatch();
  const [view, setView] = useState<"preview" | "qrcode">("qrcode");
  const [patternTransparentBg, setPatternTransparentBg] = useState(false);

  const mobileQrRef = useRef<HTMLDivElement>(null);
  const staticQrRef = useRef<HTMLDivElement>(null);
  const mobileQrCodeRef = useRef<QRCodeStyling | null>(null);

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

  const SelectedFrameComponent = QRFrameArray[selectedFrameIndex];
  const isDefaultFrame = selectedFrameIndex === 0;

  // Desktop preview QR code update
  useEffect(() => {
    if (view !== "qrcode" || !mobileQrRef.current) return;

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

      if (selectedLogo) {
        const iconDataUrl = await createIconImage(selectedLogo);
        console.log("iconDataUrl2", iconDataUrl);
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
        } else {
          mobileQrCodeRef.current = new QRCodeStyling(qrOptions);
        }

        if (mobileQrCodeRef.current) {
          mobileQrCodeRef.current.append(mobileQrRef.current);
        }
      }
    };

    updateQRCode();
  }, [
    view,
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
  console.log("logo2", selectedLogo);
  useEffect(() => {
    if (view !== "qrcode" || selectedFrameIndex !== 0 || !staticQrRef.current)
      return;

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
  }, [websiteUrl, selectedFrameIndex, view]);

  const handleSwapFrameColors = () => {
    const temp = frameBackgroundColor;
    dispatch(setFrameBackgroundColor(frameTextColor));
    dispatch(setFrameTextColor(temp));
  };

  const handleTransparentChange = (checked: boolean) => {
    setPatternTransparentBg(checked);
    if (checked) {
      dispatch(setBackgroundColor("transparent"));
    } else {
      dispatch(setBackgroundColor("#ffffff"));
    }
  };

  return (
    <div className="bg-gray-50 p-0 lg:p-8 min-h-screen pb-[120px] lg:pb-0">
      <Container>
        <div className="flex flex-col desktop:flex-row gap-8 lg:pb-32 ">
          <div className="flex-1 flex flex-col space-y-4">
                <div className="block desktop:hidden">
                {<Breadcrumb useMobileSteps={true} />}
                </div>
            <h1 className="hidden lg:block text-2xl font-Poppins font-bold text-gray-900">
              Customize design for the Website URL QR code
            </h1>
            <Accordion
              title="QR code frame"
              description="Frames improve your QR code visibility, leading to more scans"
              defaultOpen={true}
            >
              <QRFrameGallery
                setSelectedFrameIndex={(index: number) =>
                  dispatch(setSelectedFrameIndex(index))
                }
                selectedFrameIndex={selectedFrameIndex}
              />
              <QrCodeFrameAllInput
                setFrameText={(text: string) => dispatch(setFrameText(text))}
                frameText={frameText}
                frameBackgroundColor={frameBackgroundColor}
                setFrameBackgroundColor={(color: string) =>
                  dispatch(setFrameBackgroundColor(color))
                }
                frameTextColor={frameTextColor}
                setFrameTextColor={(color: string) =>
                  dispatch(setFrameTextColor(color))
                }
                frameColor={frameColor}
                setFrameColor={(color: string) =>
                  dispatch(setFrameColor(color))
                }
                transparentBg={transparentFrameBg}
                setTransparentBg={(value: boolean) =>
                  dispatch(setTransparentFrameBg(value))
                }
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
                <div className="flex gap-4 py-4 overflow-x-auto lg:grid lg:grid-cols-10 lg:overflow-visible">
                  {patternOptions.map((pattern) => (
                    <PatternPreview
                      key={pattern}
                      type={pattern}
                      isSelected={patternStyle === pattern}
                      onClick={() => dispatch(setPatternStyle(pattern))}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-[#F8F9FC] rounded-xl !space-y-0 !m-0 !p-0 relative">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 px-6 pt-6 pb-8 relative z-10">
                  <ColorInput
                    label="Dot color"
                    value={dotColor}
                    onChange={(color: string) => dispatch(setDotColor(color))}
                    showColorIndicator
                    id="dot-color"
                  />
                  <button
                    type="button"
                    className="hidden lg:flex h-12 w-12 items-center justify-center text-gray-500"
                    onClick={() => {
                      dispatch(setDotColor(backgroundColor));
                      dispatch(setBackgroundColor(dotColor));
                    }}
                  >
                    <IoIosSwap className="text-2xl" />
                  </button>
                  <button
                    type="button"
                    className="flex lg:hidden p-2 text-gray-500"
                    onClick={() => {
                      dispatch(setDotColor(backgroundColor));
                      dispatch(setBackgroundColor(dotColor));
                    }}
                  >
                    <p className="flex gap-2">
                      <span className="text-[#79809A] text-sm leading-[22px] font-normal">
                        Swap the colours
                      </span>
                      <Swap className="text-2xl" />
                    </p>
                  </button>
                  <ColorInput
                    label="Background color"
                    value={
                      backgroundColor === "transparent"
                        ? "#ffffff"
                        : backgroundColor
                    }
                    onChange={(color: string) =>
                      dispatch(setBackgroundColor(color))
                    }
                    showColorIndicator
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
              <div className="flex flex-col lg:flex-row gap-[72px]">
                <div className="flex flex-col gap-2 width-full w-full desktop:w-1/2">
                  <label className="block text-lg font-bold text-gray-900">
                    Corner frames style
                  </label>
                  <div className="flex flex-row gap-4">
                    {cornerFrameOptions.map((style) => (
                      <CornerStylePreview
                        key={style}
                        type={style}
                        isSelected={cornerFrameStyle === style}
                        onClick={() => dispatch(setCornerFrameStyle(style))}
                        isFrame={true}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 width-full w-full desktop:w-1/2">
                  <label className="block text-lg font-bold text-gray-900">
                    Corner dots type
                  </label>
                  <div className="flex flex-row gap-4">
                    {cornerDotOptions.map((style) => (
                      <CornerStylePreview
                        key={style}
                        type={style}
                        isSelected={cornerDotType === style}
                        onClick={() => dispatch(setCornerDotType(style))}
                        isFrame={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F9FC] rounded-xl !space-y-0 !m-0 !p-0">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-4 lg:gap-6 px-4 lg:px-6 pt-4 lg:pt-6 pb-4 lg:pb-8">
                  <ColorInput
                    label="Corner frames color"
                    value={cornerFrameColor}
                    onChange={(color: string) =>
                      dispatch(setCornerFrameColor(color))
                    }
                    showColorIndicator={true}
                    id="corner-frame-color"
                  />

                  <button
                    type="button"
                    className="hidden lg:flex h-12 w-12 items-center justify-center text-gray-500"
                    onClick={() => {
                      dispatch(setCornerFrameColor(cornerDotColor));
                      dispatch(setCornerDotColor(cornerFrameColor));
                    }}
                  >
                    <IoIosSwap className="text-2xl" />
                  </button>
                  <button
                    type="button"
                    className="flex lg:hidden p-2 text-gray-500"
                    onClick={() => {
                      dispatch(setCornerFrameColor(cornerDotColor));
                      dispatch(setCornerDotColor(cornerFrameColor));
                    }}
                  >
                    <p className="flex gap-2">
                      <span className="text-[#79809A] text-sm leading-[22px] font-normal">
                        Swap the colours
                      </span>
                      <Swap className="text-2xl" />
                    </p>
                  </button>
                  <ColorInput
                    label="Corner dots color"
                    value={cornerDotColor}
                    onChange={(color: string) =>
                      dispatch(setCornerDotColor(color))
                    }
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
                onLogoChange={(logoId: string | null) =>
                  dispatch(setSelectedLogo(logoId))
                }
                customLogo={customLogo}
                onCustomLogoUpload={(logo: string | null) =>
                  dispatch(setCustomLogo(logo))
                }
              />
            </Accordion>
          </div>

          {/* Preview Section */}
          <div className="hidden lg:block desktop:sticky desktop:top-20 desktop:self-start desktop:h-fit">
            <div className="flex flex-col items-center justify-start">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setView("preview")}
                  className={`py-2 px-6 rounded-full font-medium font-roboto transition-all duration-300 ease-in-out ${
                    view === "preview"
                      ? "border border-transparent bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]"
                      : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                  }`}
                >
                  <span className="text-sm leading-[22px] font-medium font-roboto">
                    Preview
                  </span>
                </button>
                <button
                  onClick={() => setView("qrcode")}
                  className={`py-2 px-6 rounded-full font-medium font-roboto transition-all duration-300 ease-in-out ${
                    view === "qrcode"
                      ? "border border-transparent text-white bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]"
                      : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                  }`}
                >
                  <span className="text-sm leading-[22px] font-medium font-roboto">
                    QR code
                  </span>
                </button>
              </div>
              <div className="hidden desktop:flex desktop:flex-col desktop:gap-4 ">
                <MobileFrame>
                  {view === "preview" ? (
                    <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                      <WebsiteUrlPreview url={websiteUrl} />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                      {selectedFrameIndex === 0 ? (
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
                            transparentFrameBg
                              ? "transparent"
                              : frameBackgroundColor
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
                                className="scale-[0.193]"
                                ref={mobileQrRef}
                                // style={{
                                //   transform: "scale(0.193)",
                                // }}
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
