"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveTab } from "@/store/slices/previewSlice";
import { validateQRData } from "@/lib/validation/qr-validation";
import { setErrors, setShowErrors, clearAllErrors } from "@/store/slices/validationSlice";

import MobilePreviewModal from "@/components/generator/Mobile_Preview_Modal";
import Container from "@/components/common/parent-container";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
import QRCodeDisplay from "@/components/generator/QR_Code_Display";
import CustomizeQRDisplay from "@/components/common/CustomizeQRDisplay";
import VCardPreview from "@/components/generator/vcard/VCardPreview";
import MenuPreview from "@/components/generator/menu/MenuPreview";
import BusinessPreview from "@/components/generator/businessPage/BusinessPreview";
import Breadcrumb from "@/components/generator/Breadcrumb";
import Save from "@/components/icons/save";
import Close from "@/components/icons/close";

export default function FooterBreadcrumb() {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.preview.activeTab);
  const websiteUrl = useAppSelector((state) => state.preview.websiteUrl);
  const collapsed = useAppSelector((state) => state.sidebar.collapsed);
  const reduxState = useAppSelector((state) => state);

  const desktopPositionClasses = collapsed
    ? "desktopDashboard:left-[72px] left-0 desktopDashboard:max-w-[calc(100vw-72px)] max-w-full"
    : "desktopDashboard:left-[214px] left-0 desktopDashboard:max-w-[calc(100vw-214px)] max-w-full";

  const getCurrentStep = (): number => {
    // Check most specific paths first
    if (pathname.includes("/customize")) return 2;
    return 1;
  };

  const currentStep = getCurrentStep();
  const showNavigation = currentStep > 0;

  const handleBack = () => {
    if (currentStep === 2) {
      router.push("/qr-codes/edit");
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      // Get QR type from pathname - in dashboard it's /qr-codes/edit/{type}
      const pathParts = pathname.split("/");
      const qrType = pathParts[pathParts.length - 1];
      
      // Validate the form data
      const validationResult = validateQRData(reduxState, qrType);
      
      if (!validationResult.isValid) {
        // Dispatch errors to Redux
        dispatch(setErrors(validationResult.fieldErrors));
        dispatch(setShowErrors(true));
        
        // Scroll to top to show error
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      // Clear any previous errors
      dispatch(clearAllErrors());
      router.push("/qr-codes/edit/customize");
    }
  };

  const handleExits = () => {
    router.push("/qr-codes");
  };

  const handleTabChange = (tab: "preview" | "qrcode") => {
    dispatch(setActiveTab(tab));
  };

  const getPreviewContent = () => {
    if (pathname.includes("/vcard")) {
      if (activeTab === "preview") {
        return (
          <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
            <VCardPreview />
          </div>
        );
      }
    }

    if (pathname.includes("/menu")) {
      if (activeTab === "preview") {
        return (
          <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
            <MenuPreview />
          </div>
        );
      }
    }

    if (pathname.includes("/business-page")) {
      if (activeTab === "preview") {
        return (
          <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
            <BusinessPreview />
          </div>
        );
      }
    }

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
      <footer
        className={`
        fixed bottom-0 w-full flex items-center justify-center gap-10 py-4 px-5
        desktopDashboard:px-6 bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]
        transition-all duration-300
        ${desktopPositionClasses}
      `}
      >
        <Container>
          <div className="flex items-center gap-4 desktop:gap-8 desktop:justify-between">
            <div className="flex items-center desktop:gap-6 gap-4 flex-1 justify-between">
              <button
                onClick={handleExits}
                className="flex h-12 py-0 px-4 justify-center items-center gap-1 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)]"
              >
                <span className="hidden desktop:inline">Exit</span>
                <span className="desktop:hidden">
                  <Close className="w-4 h-4 text-[var(--Grey)]" />
                </span>
              </button>
              <div className="hidden desktop:block">
                <Breadcrumb dashboardSteps={true} />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="desktop:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-[#f7f8ff] text-[var(--Blue)] transition-colors shrink-0"
                aria-label="Preview"
              >
                <Eye className="size-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              {currentStep === 1 && (
                <button className="flex w-12 h-12 p-2 justify-center items-center flex-shrink-0 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)]">
                  <Save className="text-[var(--Dark-gray)]" />
                </button>
              )}

              {currentStep === 2 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-3 md:px-6 py-3 font-roboto text-[var(--Blue)] hover:text-[var(--Blue-hover)] font-medium transition-colors border border-[var(--Blue)] rounded-lg"
                >
                  <ArrowLeft className="size-5 text-[var(--Blue)]" />
                  <span className="hidden md:block text-[var(--Blue)]">
                    Back
                  </span>
                </button>
              )}
              {currentStep === 1 && (
                <button
                  onClick={handleNext}
                  className="text-center w-full desktop:w-[222px] flex-1 desktop:flex-none flex items-center justify-center gap-2 px-6 py-2.5 font-roboto bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white rounded-lg text-[18px] leading-[28px] font-medium transition-all duration-300"
                >
                  <span>Next</span>
                  <ArrowRight className="size-5" />
                </button>
              )}
              {currentStep === 2 && (
                <button
                  // onClick={handleNext}
                  className="text-center w-full desktop:w-[222px] flex-1 desktop:flex-none flex items-center justify-center gap-2 px-6 py-2.5 font-roboto bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white rounded-lg text-[18px] leading-[28px] font-medium transition-all duration-300"
                >
                  Complete
                </button>
              )}
            </div>
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
