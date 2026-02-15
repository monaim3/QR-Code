"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/parent-container";
import Breadcrumb from "@/components/generator/Breadcrumb";
import {
  setWebsiteUrl,
  setQrCodeName,
  setActiveTab,
} from "@/store/slices/previewSlice";
import { setSimpleText } from "@/store/slices/simpleTextSlice";
import QRCodeStyling, { Options } from "qr-code-styling";
import MobileFrame from "@/components/common/MobileFrame";
import QRCodeNameAccordion from "@/components/generator/QRCode_Name_Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import Textarea from "@/components/generator/SimpleText/TextArea";
import SimpleTextPreview from "@/components/generator/SimpleText/SimpleTextPreview";

export default function SimpleText() {
  const dispatch = useAppDispatch();
  const [view, setView] = useState<"preview" | "qrCode">("preview");
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);
  const qrCodeName = useAppSelector((state) => state.preview.qrCodeName);
  const activeTab = useAppSelector((state) => state.preview.activeTab);
  const [qrNameError, setQrNameError] = useState("");
  const simpleText = useAppSelector((state) => state.simpleText.Text);
  const handleQrNameChange = (value: string) => {
    dispatch(setQrCodeName(value));
  };
  const handleChange = (value: string) => {
    dispatch(setSimpleText(value));
  };
  console.log("simpleText", simpleText);
  useEffect(() => {
    if (view !== "qrCode" || !qrRef.current) return;

    const qrOptions: Options = {
      type: "svg",
      data: "https://www.example.com/",
      margin: 0,
      width: 300,
      height: 300,
      dotsOptions: {
        color: "#000000",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#FFFFFF",
      },
    };

    if (qrRef.current) {
      qrRef.current.innerHTML = "";

      if (qrCodeRef.current) {
        qrCodeRef.current.update(qrOptions);
        qrCodeRef.current.append(qrRef.current);
      } else {
        qrCodeRef.current = new QRCodeStyling(qrOptions);
        qrCodeRef.current.append(qrRef.current);
      }
    }
  }, [view]);

  return (
    <main className="bg-[var(--Generator-Background)] min-h-screen">
      <Container className="flex flex-col desktop:flex-row gap-8 lg:pb-32">
        {/* Content */}
        <div className="flex flex-col items-start gap-4 desktop:pt-[56px] desktop:pb-[160px] pb-[120px] px-0 flex-1">
          {/* Heading */}
          <h3 className="text-[var(--Black)] font-bold text-[24px] leading-[var(--Typeface-Line-height-Heading-3)] hidden desktop:block">
            Add content to the Simple Text QR code
          </h3>
          <div className="w-full">
            {/* Mobile Breadcrumb */}
            <div className="block desktop:hidden space-y-0 desktop:space-y-4">
              {<Breadcrumb useMobileSteps={true} />}
            </div>
          </div>
          <div className="w-full">
            <Accordion
              title="Simple text"
              description="Enter the text that you want displayed when a user scans your QR code"
            >
              <div>
                <Textarea
                  label="Text"
                  placeholder=" e.g. The concert will take place at 9pm on October 12"
                  id="description"
                  value={simpleText}
                  onChange={handleChange}
                  maxLength={500}
                />
              </div>
            </Accordion>
          </div>
          <QRCodeNameAccordion
            title="Name of the QR code"
            description="Give a name to your QR code"
            value={qrCodeName}
            onChange={handleQrNameChange}
            error={qrNameError}
          />
        </div>

        {/* Preview */}
        <div className="w-[280px] hidden desktop:block desktop:sticky desktop:top-20 desktop:self-start desktop:h-fit desktop:pt-[56px] desktop:pb-[160px] pb-[120px]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setView("preview")}
                className={`py-2 px-6 rounded-full font-medium  transition-all duration-300 ease-in-out ${
                  view === "preview"
                    ? "border border-transparent bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]"
                    : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                }`}
              >
                <span className="text-sm leading-[22px] font-medium ">
                  Preview
                </span>
              </button>
              <button
                onClick={() => setView("qrCode")}
                className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ease-in-out ${
                  view === "qrCode"
                    ? "border border-transparent text-white bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]"
                    : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                }`}
              >
                <span className="text-sm leading-[22px] font-medium ">
                  QR code
                </span>
              </button>
            </div>
            <div className="hidden desktop:flex desktop:flex-col desktop:gap-4">
              <MobileFrame>
                {view === "preview" ? (
                  <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
                    <SimpleTextPreview />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                    <div
                      ref={qrRef}
                      className="w-[200px] h-[200px] flex items-center justify-center"
                    />
                  </div>
                )}
              </MobileFrame>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
