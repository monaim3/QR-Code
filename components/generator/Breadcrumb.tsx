"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

interface BreadcrumbStep {
  number: number;
  label: string;
  path: string;
}

// const steps: BreadcrumbStep[] = [
//   { number: 1, label: "Choose Type", path: "/generator" },
//   { number: 2, label: "Add content", path: "/generator/content" },
//   { number: 3, label: "Customize QR design", path: "/generator/customize" },
// ];

const steps: BreadcrumbStep[] = [
  { number: 1, label: "Choose QR code Type", path: "/generator" },
  { number: 2, label: "", path: "/generator/content" },
  { number: 3, label: "", path: "/generator/customize" },
];

export default function Breadcrumb() {
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

  const handleStepClick = (step: BreadcrumbStep) => {
    if (step.number <= currentStep) {
      router.push(step.path);
    }
  };

  return (
    <div className="flex items-center py-6 desktopDashboard:py-0 gap-2 desktopDashboard:gap-6">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="flex items-center gap-2 desktopDashboard:gap-6"
        >
          <button
            onClick={() => handleStepClick(step)}
            disabled={step.number > currentStep}
            className="flex items-center gap-2 disabled:cursor-not-allowed group"
          >
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-full text-[14px] font-medium transition-colors ${
                step.number === currentStep
                  ? "bg-[var(--Blue)] text-white"
                  : "border border-[var(--breadcrumb)] text-[var(--breadcrumb)]"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`text-[14px] font-normal leading-[22px] font-roboto block ${
                step.number === currentStep
                  ? "text-[var(--Black)]"
                  : "text-gray-400"
              }`}
            >
              <span className="hidden md:inline">{step.label}</span>
              <span className="md:hidden">{step.label.split(" ").pop()}</span>
            </span>
          </button>

          {index < steps.length - 1 && (
            <ChevronRight className="w-4 h-4 text-[var(--breadcrumb)]" />
          )}
        </div>
      ))}
    </div>
  );
}
