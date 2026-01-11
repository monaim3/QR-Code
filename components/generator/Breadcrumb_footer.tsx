"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import MobilePreviewModal from "./Mobile_Preview_Modal";
import Container from "../common/parent-container";

interface FooterProps {
  previewContent?: React.ReactNode;
}

export default function BreadcrumbFooter({ previewContent }: FooterProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCurrentStep = (): number => {
    if (pathname === "/generator") return 1;
    if (pathname.includes("/content") || pathname.match(/\/generator\/[^/]+$/))
      return 2;
    if (pathname.includes("/customize")) return 3;
    return 1;
  };

  const currentStep = getCurrentStep();
  const showNavigation = currentStep > 1;

  const handleBack = () => {
    if (currentStep === 2) {
      router.push("/generator");
    } else if (currentStep === 3) {
      router.back();
    }
  };

  const handleNext = () => {
    if (currentStep === 2) {
      router.push("/generator/customize");
    }
  };

  if (!showNavigation) return null;

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--Boarder-Grey)] pt-4 pb-8 lg:pb-4 px-5 z-40">
        <Container>
          <div className=" flex items-center justify-between md:justify-between gap-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-3 md:px-6 py-3  font-roboto text-[var(--Blue)] hover:text-[var(--Blue-hover)] font-medium transition-colors border border-[var(--Boarder-Grey)] rounded-lg md:border-none"
            >
              <ArrowLeft className="w-5 h-5 text-[#3F3E3E] " />
              <span className="hidden md:block text-[#3F3E3E]">Back</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="desktop:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-[#f7f8ff] text-[var(--Blue)]   transition-colors"
              aria-label="Preview"
            >
              <Eye className="w-5 h-5" />
            </button>
            {currentStep === 2 && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-12 py-2  font-roboto bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white rounded-lg text-lg leading-[26px] font-medium transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-5 h-5" /> 
              </button>
            )}
          </div>
        </Container>
      </footer>
      <MobilePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {previewContent}
      </MobilePreviewModal>
    </>
  );
}
