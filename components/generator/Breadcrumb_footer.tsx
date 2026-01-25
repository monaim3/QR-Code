"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveTab } from "@/store/slices/previewSlice";

import MobilePreviewModal from "./Mobile_Preview_Modal";
import Container from "../common/parent-container";
import WebsiteUrlPreview from "./Website_Url_Preview";
import QRCodeDisplay from "./QR_Code_Display";
import CustomizeQRDisplay from "../common/CustomizeQRDisplay";

export default function BreadcrumbFooter() {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.preview.activeTab);
  const websiteUrl = useAppSelector((state) => state.preview.websiteUrl);

  const getCurrentStep = (): number => {
    // Check most specific paths first
    if (pathname.includes("/customize")) return 3;
    if (pathname.includes("/content") || pathname.match(/\/generator\/[^/]+$/))
      return 2;
    if (pathname === "/generator") return 1;
    return 1;
  };

  const currentStep = getCurrentStep();
  const showNavigation = currentStep > 1;

  const handleBack = () => {
    if (currentStep === 2) {
      router.push("/generator");
    } else if (currentStep === 3) {
      const pathSegments = pathname.split("/");
      router.back();
    }
  };

  const handleNext = () => {
    if (currentStep === 2) {
      router.push("/generator/customize");
    } else if (currentStep === 3) {
      router.push("/signup");
    }
  };

  const handleTabChange = (tab: "preview" | "qrcode") => {
    dispatch(setActiveTab(tab));
  };

  const getPreviewContent = () => {
    if (activeTab === "preview") {
      return <WebsiteUrlPreview url={websiteUrl} />;
    }
    if (pathname.includes("/customize")) {
      return <CustomizeQRDisplay />;
    }

    return <QRCodeDisplay />;
  };

  if (!showNavigation) return null;

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--Boarder-Grey)] pt-4 pb-8 lg:pb-4 z-40">
        <Container>
          <div className="flex items-center gap-4 desktop:gap-0 desktop:justify-between ">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-3 md:px-6 py-3 font-roboto text-[var(--Blue)] hover:text-[var(--Blue-hover)] font-medium transition-colors border border-[var(--Boarder-Grey)] rounded-lg md:border-none"
            >
              <ArrowLeft className="size-5 text-[#3F3E3E]" />
              <span className="hidden md:block text-[#3F3E3E]">Back</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="desktop:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-[#f7f8ff] text-[var(--Blue)] transition-colors"
              aria-label="Preview"
            >
              <Eye className="size-5" />
            </button>
            {(currentStep === 2 || currentStep === 3) && (
              <button
                onClick={handleNext}
                className="text-center w-full desktop:w-[222px] flex-1 desktop:flex-none flex items-center justify-center gap-2 px-6 py-2.5 font-roboto bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white rounded-lg text-[18px] leading-[28px] font-medium transition-all duration-300"
              >
                <span>Next</span>
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>
        </Container>
      </footer>
      <MobilePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      >
        {getPreviewContent()}
      </MobilePreviewModal>
    </>
  );
}
