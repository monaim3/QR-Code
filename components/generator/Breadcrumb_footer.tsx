"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../common/parent-container";

export default function BreadcrumbFooter() {
  const pathname = usePathname();
  const router = useRouter();

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
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--Boarder-Grey)] py-4 ">
      <Container>
        <div className=" flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 text-[var(--Blue)] hover:text-[var(--Blue-hover)] font-medium transition-colors"
            style={{ fontFamily: "var(--font-HelveticaNeue)" }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          {/* Next Button - Only show on step 2 */}
          {currentStep === 2 && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white rounded-lg font-medium transition-colors"
              style={{ fontFamily: "var(--font-HelveticaNeue)" }}
            >
              <span>Next</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </Container>
    </footer>
  );
}
