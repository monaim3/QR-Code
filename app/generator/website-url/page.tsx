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
          <h1 className="text-2xl font-semibold text-[var(--Black)] var(--font-poppins) mb-6">
            Add content to the Website URL QR code
          </h1>

          <div className="flex flex-col desktop:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-full bg-white rounded-xl border border-[var(--Boarder-Grey)] overflow-hidden">
                <button
                  onClick={() => setIsUrlAccordionOpen(!isUrlAccordionOpen)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-base font-semibold var(--font-poppins) text-[var(--Black)]">
                      Website address
                    </h3>
                    <p className="text-sm font-roboto text-[var(--Dark-gray)]">
                      Enter the URL to which the QR code will link
                    </p>
                  </div>
                  {isUrlAccordionOpen ? (
                    <ChevronUp className="w-5 h-5 text-[var(--Dark-gray)]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[var(--Dark-gray)]" />
                  )}
                </button>
                {isUrlAccordionOpen && (
                  <div className="px-4 pb-4 pt-2 border-t border-[var(--Boarder-Grey)]">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="website-url"
                        className="text-sm font-medium font-roboto text-[var(--Black)]"
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
                        className={`w-full px-4 py-3  font-roboto rounded-lg border transition-colors outline-none ${
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
                )}
              </div>
              <QRCodeNameAccordion
                value={qrCodeName}
                onChange={setQrCodeName}
                error={qrNameError}
              />
            </div>
            <div className="hidden desktop:flex desktop:flex-col  desktop:gap-4 desktop:sticky desktop:top-8">
              <PreviewQRButtons
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
              <MobileFrame>
                {activeTab === "preview" ? (
                  <WebsiteUrlPreview
                    url={websiteUrl}
                    WebsiteUrlMobileFramBg={WebsiteUrlMobileFramBg}
                  />
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
