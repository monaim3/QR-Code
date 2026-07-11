"use client";

import { useState, useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

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
  setPatternStyle,
  setCornerFrameColor,
  setCornerDotColor,
  setSelectedLogo,
  setCustomLogo,
  setPrevBackgroundColor,
  setCornerFrameStyleUI,
  setCornerDotTypeUI,
} from "@/store/slices/qrSlice";

import { QRFrameArray } from "@/components/common/QRFrameArray";
import QrCodeFrameAllInput from "@/components/common/QrCodeFrameAllInput";
import QRFrameGallery from "@/components/common/QRFrameGallery";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
import Swap from "@/components/icons/swap";
import { getLogoComponent } from "@/lib/logoRegistry";
import { CheckboxInput } from "@/components/common/CheckboxInput";
import VCardPreview from "@/components/generator/vcard/VCardPreview";
import MenuPreview from "@/components/generator/menu/MenuPreview";
import BusinessPreview from "@/components/generator/businessPage/BusinessPreview";
import CustomizeQRDisplay from "@/components/common/CustomizeQRDisplay";
import QRCodeDisplay from "@/components/generator/QR_Code_Display";
import { usePathname, useRouter } from "next/navigation";
import Breadcrumb from "@/components/generator/Breadcrumb";
import { useT } from "@/utils/t";
import AppPreView from "@/components/generator/app/app-preview";
import FacebookPreview from "@/components/generator/Facebook/FacebookPreview";
import ImagesPreview from "@/components/generator/Images/ImagesPreview";
import PdfPreView from "@/components/generator/pdf/pdf-preview";
import SimpleTextPreview from "@/components/generator/SimpleText/SimpleTextPreview";
import SocialPreView from "@/components/generator/socialMedia/social-preview";
import VideoPreView from "@/components/generator/video/video-preview";
import WifiPreview from "@/components/generator/Wifi/WifiPreview";

const QR_TYPE_LABEL_KEYS: Record<string, string> = {
  "app": "generator__step_1__qr_type_cards__app__title",
  "business-page": "generator__step_1__qr_type_cards__business_page__title",
  "facebook": "generator__step_1__qr_type_cards__facebook__title",
  "images": "generator__step_1__qr_type_cards__images__title",
  "menu": "generator__step_1__qr_type_cards__menu__title",
  "pdf": "generator__step_1__qr_type_cards__pdf__title",
  "simple-text": "generator__step_1__qr_type_cards__plain_text__title",
  "social-media": "generator__step_1__qr_type_cards__social_media__title",
  "vcard": "generator__step_1__qr_type_cards__vcard__title",
  "video": "generator__step_1__qr_type_cards__video__title",
  "website-url": "generator__step_1__qr_type_cards__url__title",
  "wifi": "generator__step_1__qr_type_cards__wifi__title",
};

export default function QRCodeCustomize() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const t = useT();
  const [view, setView] = useState<"preview" | "qrCode">("qrCode");
  const [patternTransparentBg, setPatternTransparentBg] = useState(false);
  const [qrTypeLabel, setQrTypeLabel] = useState("");

  const mobileQrRef = useRef<HTMLDivElement>(null);
  const staticQrRef = useRef<HTMLDivElement>(null);
  const mobileQrCodeRef = useRef<QRCodeStyling | null>(null);
  const activeTab = useAppSelector((state) => state.preview.activeTab);
  const websiteUrl = useAppSelector((state: any) => state.preview.websiteUrl);

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
    prevBackgroundColor,
    cornerFrameStyleUI,
    cornerDotTypeUI,
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
            canvas.width = 60;
            canvas.height = 60;
            const ctx = canvas.getContext("2d");

            if (!ctx) {
              root.unmount();
              document.body.removeChild(div);
              resolve(null);
              return;
            }

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.roundRect(0, 0, 60, 60, 10);
            ctx.fill();

            const img = new Image();
            const svgBlob = new Blob([svgData], {
              type: "image/svg+xml;charset=utf-8",
            });
            const url = URL.createObjectURL(svgBlob);

            img.onload = () => {
              ctx.drawImage(img, 1, 1, 60, 60);
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

  useEffect(() => {
    const slug = localStorage.getItem("qrType") ?? "";
    const labelKey = QR_TYPE_LABEL_KEYS[slug];
    setQrTypeLabel(labelKey ? t(labelKey) : slug);
  }, [t]);

  // Desktop preview QR code update - EXACT SAME AS REFERENCE
  useEffect(() => {
    if (view !== "qrCode" || !mobileQrRef.current) return;

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
        cornersSquareOptions: {
          color: cornerFrameColor,
          type: cornerFrameStyle === "none" ? "dot" : (cornerFrameStyle as any),
        },
        cornersDotOptions: {
          color: cornerDotColor,
          type: cornerDotType === "none" ? "dot" : (cornerDotType as any),
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
    selectedFrameIndex,
  ]);

  useEffect(() => {
    if (view !== "qrCode" || selectedFrameIndex !== 0 || !staticQrRef.current)
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
      dispatch(setPrevBackgroundColor(backgroundColor));
      dispatch(setBackgroundColor("transparent"));
    } else {
      dispatch(setBackgroundColor(prevBackgroundColor));
    }
  };

  const getPreviewContent = () => {
    const qrType = localStorage.getItem("qrType");
    if (!qrType) {
      router.push("/generator");
    }

    if (activeTab === "preview") {
      switch (qrType) {
        case "app":
          return <AppPreView />;
        case "business-page":
          return <BusinessPreview />;
        case "facebook":
          return <FacebookPreview />;
        case "images":
          return <ImagesPreview />;
        case "menu":
          return <MenuPreview />;
        case "pdf":
          return <PdfPreView />;
        case "simple-text":
          return <SimpleTextPreview />;
        case "social-media":
          return <SocialPreView />;
        case "vcard":
          return <VCardPreview />;
        case "video":
          return <VideoPreView />;
        case "website-url":
          return <WebsiteUrlPreview url={websiteUrl} />;
        case "wifi":
          return <WifiPreview />;
        default:
          return;
      }
    }

    return <QRCodeDisplay />;
  };

  return (
    <div className="p-0 lg:p-8 min-h-screen pb-[120px] lg:pb-0">
      <Container>
        <div className="flex flex-col desktop:flex-row gap-8 lg:pb-32 ">
          <div className="flex-1 flex flex-col">
            <div className="block desktop:hidden space-y-0 desktop:space-y-4">
              {<Breadcrumb useMobileSteps={true} />}
            </div>
            <h1 className="hidden lg:block text-2xl font-Poppins font-bold text-gray-900 mb-4">
              {t("generator__design_form__title", { type: qrTypeLabel })}
            </h1>
            <div className="flex-1 flex flex-col gap-4">
              <Accordion
                title={t("generator__design_form__frame_section__title")}
                description={t(
                  "generator__design_form__frame_section__description__changed",
                )}
                defaultOpen={true}
              >
                <QRFrameGallery
                  setSelectedFrameIndex={(index: number) =>
                    dispatch(setSelectedFrameIndex(index))
                  }
                  selectedFrameIndex={selectedFrameIndex}
                />
                {selectedFrameIndex > 0 && (
                  <QrCodeFrameAllInput
                    setFrameText={(text: string) =>
                      dispatch(setFrameText(text))
                    }
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
                )}
              </Accordion>

              <Accordion
                title={t("generator__design_form__pattern_section__title")}
                description={t(
                  "generator__design_form__pattern_section__description__changed",
                )}
                defaultOpen={true}
              >
                <div className="w-full">
                  <label className="block text-lg font-bold leading-[26px] text-[#0A0909]">
                    {t("generator__design_form__pattern_section__heading")}
                  </label>
                  <div className="flex gap-4 p-0.5 pt-4 overflow-x-auto desktop:overflow-visible flex-wrap">
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
                      label={t("generator__design_form__pattern_section__dot_label")}
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
                          {t("generator__content_form_section__design__swap_button")}
                        </span>
                        <Swap />
                      </p>
                    </button>
                    <ColorInput
                      label={t("generator__design_form__pattern_section__background_label")}
                      value={
                        patternTransparentBg ? "Transparent" : backgroundColor
                      }
                      onChange={
                        patternTransparentBg
                          ? undefined
                          : (color: string) =>
                              dispatch(setBackgroundColor(color))
                      }
                      showColorIndicator={!patternTransparentBg}
                      id="pattern-background-color"
                    />
                  </div>
                  <div className="flex items-center gap-2 px-6 pb-4">
                    <CheckboxInput
                      label={t("generator__design_form__pattern_section__transparent_background")}
                      checked={patternTransparentBg}
                      onChange={handleTransparentChange}
                      id="pattern-transparent-bg"
                    />
                  </div>
                </div>
              </Accordion>

              <Accordion
                title={t("generator__design_form__corner_section__title")}
                description={t(
                  "generator__design_form__corner_section__description__changed",
                )}
                defaultOpen={true}
              >
                <div className="flex flex-col lg:flex-row gap-6 desktop:gap-[72px]">
                  <div className="flex flex-col gap-2 width-full w-full desktop:w-1/2">
                    <label className="block text-base font-medium ">
                      {t("generator__design_form__corner_section__frame_label")}
                    </label>
                    <div className="flex flex-row gap-4">
                      {cornerFrameOptions.map((style) => {
                        return (
                          <CornerStylePreview
                            key={style}
                            type={style}
                            isSelected={cornerFrameStyleUI === style}
                            onClick={() =>
                              dispatch(setCornerFrameStyleUI(style))
                            }
                            isFrame={true}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 width-full w-full desktop:w-1/2">
                    <label className="block  text-base font-medium ">
                      {t("generator__design_form__corner_section__dot_label")}
                    </label>
                    <div className="flex flex-row gap-4">
                      {cornerDotOptions.map((style) => (
                        <CornerStylePreview
                          key={style}
                          type={style}
                          isSelected={cornerDotTypeUI === style}
                          onClick={() => dispatch(setCornerDotTypeUI(style))}
                          isFrame={false}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-[#F8F9FC] rounded-xl !space-y-0 !m-0 !p-0">
                  <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-4 lg:gap-6 px-4 lg:px-6 pt-4 lg:pt-6 pb-4 lg:pb-8">
                    <ColorInput
                      label={t("generator__design_form__corner_section__frame_color")}
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
                          {t("generator__content_form_section__design__swap_button")}
                        </span>
                        <Swap className="text-2xl" />
                      </p>
                    </button>
                    <ColorInput
                      label={t("generator__design_form__corner_section__dot_color")}
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
                description={t(
                  "generator__design_form__logo_section__description__changed",
                )}
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
          </div>

          {/* Preview Section - EXACT SAME AS REFERENCE */}
          <div className="hidden desktop:block desktop:sticky desktop:top-20 desktop:self-start desktop:h-fit">
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
                    {t("generator__preview_switch__preview")}
                  </span>
                </button>
                <button
                  onClick={() => setView("qrCode")}
                  className={`py-2 px-6 rounded-full font-medium font-roboto transition-all duration-300 ease-in-out ${
                    view === "qrCode"
                      ? "border border-transparent text-white bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]"
                      : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                  }`}
                >
                  <span className="text-sm leading-[22px] font-medium font-roboto">
                    {t("generator__preview_switch__qr")}
                  </span>
                </button>
              </div>
              <div className="hidden desktop:flex desktop:flex-col desktop:gap-4 ">
                <MobileFrame>
                  {view === "preview" ? (
                    <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                      {getPreviewContent()}
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                      {selectedFrameIndex === 0 ? (
                        <svg width="120" height="120" viewBox="0 0 300 300">
                          <g ref={mobileQrRef as any} />
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
                                ? "#FFFFFF"
                                : "#000000"
                          }
                          frameColor={frameColor}
                          width={260}
                          height={260}
                        >
                          <svg width="40" height="40" viewBox="0 0 300 300">
                            <g ref={mobileQrRef as any} />
                          </svg>
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
