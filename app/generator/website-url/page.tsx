"use client";

import { useState } from "react";
import { z } from "zod";

import QRCodeDisplay from "@/components/generator/QR_Code_Display";
import { ChevronDown, ChevronUp } from "lucide-react";
import QRCodeNameAccordion from "@/components/generator/QRCode_Name_Accordion";
import PreviewQRButtons from "@/components/generator/Preview_QR_Buttons";
import MobileFrame from "@/components/common/MobileFrame";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
import WebsiteUrlMobileFramBg from "@/components/icons/website-url-mobile-fram-bg";
import Container from "@/components/common/parent-container";

const urlSchema = z.string().url("Please enter a valid URL");

export default function WebsiteUrlPage() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [qrCodeName, setQrCodeName] = useState("");
  const [urlError, setUrlError] = useState("");
  const [qrNameError, setQrNameError] = useState("");
  const [isUrlFocused, setIsUrlFocused] = useState(false);
  const [isUrlAccordionOpen, setIsUrlAccordionOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"preview" | "qrcode">("preview");

  const handleUrlChange = (value: string) => {
    setWebsiteUrl(value);
    if (urlError) {
      setUrlError("");
    }
  };

  const handleUrlBlur = () => {
    setIsUrlFocused(false);
    if (!websiteUrl.trim()) {
      setUrlError("This field is required and cannot be left blank.");
    } else {
      const result = urlSchema.safeParse(websiteUrl);
      if (!result.success) {
        setUrlError("Please enter a valid URL");
      }
    }
  };

  return (
    <div className=" bg-[var(--Generator-Background)] pb-32">
      <Container>
        <div className=" py-8 desktopDashboard:py-12 ">
          <div className="flex flex-col desktop:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-[var(--Black)] var(--font-poppins) mb-6">
                Add content to the Website URL QR code
              </h1>
              <div className="w-full bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]">
                <button
                  onClick={() => setIsUrlAccordionOpen(!isUrlAccordionOpen)}
                  className="w-full flex items-center justify-between px-8 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-lg leading-[26px] font-bold var(--font-poppins) text-[var(--Black)]">
                      Website address
                    </h3>
                    <p className="text-sm leading-[22px] font-roboto text-[var(--Dark-gray)]">
                      Enter the URL to which the QR code will link
                    </p>
                  </div>
                  {isUrlAccordionOpen ? (
                    <ChevronUp size={20} color="black" />
                  ) : (
                    <ChevronDown size={20} color="black" />
                  )}
                </button>
                {isUrlAccordionOpen && (
                  <>
                    <hr className="ml-8 mr-8 border border-[var(--Boarder-Grey)]" />
                    <div className="p-8 ">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="website-url"
                          className="text-[16px] leading-[24px] font-medium font-roboto text-[var(--Black)]"
                        >
                          Website URL*
                        </label>
                        <input
                          id="website-url"
                          type="text"
                          value={websiteUrl}
                          onChange={(e) => handleUrlChange(e.target.value)}
                          onFocus={() => setIsUrlFocused(true)}
                          onBlur={handleUrlBlur}
                          placeholder="e.g. www.mywebsite.com"
                          className={`w-full px-2 py-3 placeholder:px-2  font-roboto rounded-lg border transition-colors outline-none ${
                            urlError
                              ? "border-red-500 focus:border-red-500"
                              : isUrlFocused
                              ? "border-[var(--Blue)]"
                              : "border-[var(--Boarder-Grey)] hover:border-gray-300"
                          }`}
                        />
                        {urlError && (
                          <p className="text-sm text-red-500 font-roboto">
                            {urlError}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <QRCodeNameAccordion
                value={qrCodeName}
                onChange={setQrCodeName}
                error={qrNameError}
              />
            </div>
            <div className="hidden desktop:flex desktop:flex-col  desktop:gap-4 desktop:sticky ">
              <PreviewQRButtons
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
              <MobileFrame>
                {activeTab === "preview" ? (
                  <WebsiteUrlPreview url={websiteUrl} />
                ) : (
                  <QRCodeDisplay />
                )}
              </MobileFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
