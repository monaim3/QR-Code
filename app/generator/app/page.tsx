"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/parent-container";
import Breadcrumb from "@/components/generator/Breadcrumb";
import AppInfo from "@/components/generator/app/app-info";
import AppDesignCustomize from "@/components/generator/app/design-customize";
import NameQrCode from "@/components/generator/app/qrCode-name";
import Social from "@/components/generator/vcard/Social";
import Welcome from "@/components/generator/app/welcome-screen";
import MobileFrame from "@/components/common/MobileFrame";
import VCardPreview from "@/components/generator/vcard/VCardPreview";
import QRCodeStyling, { Options } from "qr-code-styling";
import AppPreView from "@/components/generator/app/app-preview";
import AppStoreLink from "@/components/generator/app/app-store-links";

export default function GeneratorApp() {
    const [view, setView] = useState<"preview" | "qrCode">("preview");
    const qrRef = useRef<HTMLDivElement>(null);
    const qrCodeRef = useRef<QRCodeStyling | null>(null);

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
            <div className="flex flex-col items-start gap-4 desktop:pt-[56px] desktop:pb-[160px] pb-[120px] px-0 flex-1">
          {/* Heading */}
          <h3 className="text-[var(--Black)] font-bold text-[24px] leading-[var(--Typeface-Line-height-Heading-3)] hidden desktop:block">
            Add content to the App QR code
          </h3>
          <div className="w-full flex flex-col gap-4">
            {/* Mobile Breadcrumb */}
            <div className="block desktop:hidden space-y-0 desktop:space-y-4">
              {<Breadcrumb useMobileSteps={true} />}
            </div>

            {/* Design & Customize */}
            <AppDesignCustomize />

            {/* App Info */}
            <AppInfo/>

            {/* App Store Link */}
            <AppStoreLink/>

            {/* Welcome Screen */}
            <Welcome />

            {/* Name */}
            <NameQrCode/>
          </div>
        </div>
         {/* Preview */}
         <div className="w-[280px] hidden desktop:block desktop:sticky desktop:top-20 desktop:self-start desktop:h-fit desktop:pt-[56px] desktop:pb-[160px] pb-[120px]">
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
                onClick={() => setView("qrCode")}
                className={`py-2 px-6 rounded-full font-medium font-roboto transition-all duration-300 ease-in-out ${
                  view === "qrCode"
                    ? "border border-transparent text-white bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]"
                    : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                }`}
              >
                <span className="text-sm leading-[22px] font-medium font-roboto">
                  QR code
                </span>
              </button>
            </div>
            <div className="hidden desktop:flex desktop:flex-col desktop:gap-4">
              <MobileFrame>
                {view === "preview" ? (
                  <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
                    <AppPreView />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                    <div ref={qrRef} className="w-[154px] h-[154px] flex items-center justify-center" />
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