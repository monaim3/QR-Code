"use client";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import CheckIcon from "../icons/check-icon";

interface BreadcrumbStep {
  number: number;
  label: string;
  path: string;
}

interface BreadcrumbProps {
  useMobileSteps?: boolean;
  priceAndPlanSteps?: boolean;
}

const steps: BreadcrumbStep[] = [
  { number: 1, label: "Choose Type", path: "/generator" },
  { number: 2, label: "Add content", path: "/generator/content" },
  { number: 3, label: "Customize QR design", path: "/generator/customize" },
];

const mobileSteps: BreadcrumbStep[] = [
  { number: 1, label: "Choose QR code type", path: "/generator" },
  { number: 2, label: "content", path: "/generator/content" },
  { number: 3, label: "Design", path: "/generator/customize" },
];

const priceAndPlanData: BreadcrumbStep[] = [
   { number: 1, label: "QR Ready", path: "/plan-and-price" },
  { number: 2, label: "Plan Selection", path: "#" },
  { number: 3, label: "Payment Details", path: "/checkout" },
]

export default function Breadcrumb({ useMobileSteps = false, priceAndPlanSteps = false }: BreadcrumbProps) {
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentStep = (): number => {
    // Check most specific paths first
    if (pathname.includes("/customize")) return 3;
    if (pathname.includes("/content") || pathname.match(/\/generator\/[^/]+$/))
      return 2;
    if (pathname === "/generator") return 1;
    return 1;
  };

  const getPriceAndPlanStep = (): number => {
    if (pathname.includes("/checkout")) return 3;
    if (pathname.includes("/plan-selection")) return 2;
    if (pathname.includes("/plan-and-pricing")) return 1;
    return 0;
  };

  const currentStep = priceAndPlanSteps ? getPriceAndPlanStep() :  getCurrentStep();

  let data: BreadcrumbStep[];
  if(useMobileSteps && !priceAndPlanSteps){
    data = mobileSteps;
  }else if(priceAndPlanSteps){
    data = priceAndPlanData;
  }else{
    data = steps;
  }

  const handleStepClick = (step: BreadcrumbStep) => {
    if (step.number <= currentStep) {
      router.push(step.path);
    }
  };

  return (
    <div className="flex items-center py-6 deskktop:py-0 desktopDashboard:py-0 gap-2 desktopDashboard:gap-6">
      {data.map((step, index) => (
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
                  : "border border-[#D3D8EB] text-[#79809A]"
              }`}
            >
             {step.number < currentStep ? <CheckIcon /> : step.number}
            </div>

            <span
              className={`text-[14px] font-normal leading-[22px] font-roboto ${
                step.number === currentStep
                  ? "text-[var(--Black)] block"
                  : "text-[#79809A] " +
                    (currentStep === 1 ? "hidden md:block" : "block")
              }`}
            >
              <span className="hidden md:inline">{step.label}</span>

              {/* Mobile view */}
              <span className="md:hidden">
                {useMobileSteps
                  ?  step.label.split(" ").pop() : step.label
                }
              </span>

            </span>
          </button>

          {index < data.length - 1 && (
            <ChevronRight className={`w-4 h-4 text-[#79809A]`} />
          )}
        </div>
      ))}
    </div>
  );
}
