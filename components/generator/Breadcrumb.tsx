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
  dashboardSteps?: boolean;
  dashboardCreateQr?: boolean;
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
  { number: 1, label: "QR Ready", path: "/generator/customize" },
  { number: 2, label: "Plan Selection", path: "/pricing" },
  { number: 3, label: "Payment Details", path: "/checkout" },
];

const dashboardData: BreadcrumbStep[] = [
  { number: 1, label: "Edit content", path: "/qr-codes/edit" },
  { number: 2, label: "Edit QR design", path: "/qr-codes/edit/customize" },
];

export default function Breadcrumb({
  useMobileSteps = false,
  priceAndPlanSteps = false,
  dashboardSteps = false,
  dashboardCreateQr = false,
}: BreadcrumbProps) {
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
    if (pathname.includes("/pricing")) return 2;
    if (pathname.includes("/generator/customize")) return 1;
    return 0;
  };

  const getDashboardStep = (): number => {
    if (pathname.includes("/edit/customize")) return 2;
    if (pathname.includes("/edit")) return 1;
    return 1;
  };

  const currentStep = priceAndPlanSteps
    ? getPriceAndPlanStep()
    : dashboardCreateQr
      ? getCurrentStep()
      : dashboardSteps
        ? getDashboardStep()
        : getCurrentStep();

  let data: BreadcrumbStep[];

  if (useMobileSteps && dashboardSteps) {
    data = dashboardData;
  } else if (dashboardCreateQr) {
    data = steps;
  } else if (useMobileSteps && !priceAndPlanSteps) {
    data = mobileSteps;
  } else if (priceAndPlanSteps) {
    data = priceAndPlanData;
  } else if (dashboardSteps) {
    data = dashboardData;
  } else {
    data = steps;
  }

  const handleStepClick = (step: BreadcrumbStep) => {
    if (step.number <= currentStep) {
      router.push(step.path);
    }
  };

  return (
    <div className="flex items-center py-6 desktop:py-0 gap-2 desktop:gap-6">
      {data.map((step, index) => (
        <div
          key={step.number}
          className="flex items-center gap-2 desktop:gap-6"
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
              {step.number < currentStep ? (
                <CheckIcon fill="#79809A" />
              ) : (
                step.number
              )}
            </div>

            <span
              className={`text-[14px] font-normal leading-[22px] font-roboto ${
                step.number === currentStep
                  ? "text-[var(--Black)] block"
                  : "text-[#79809A] " +
                    (currentStep === 1 && !dashboardSteps
                      ? "hidden desktop:block"
                      : "block")
              }`}
            >
              <span className="hidden desktop:inline">{step.label}</span>

              {/* Mobile view */}
              {useMobileSteps && dashboardSteps ? (
                <span className="desktop:hidden">{step.label}</span>
              ) : (
                <span className="desktop:hidden">
                  {useMobileSteps ? step.label.split(" ").pop() : step.label}
                </span>
              )}
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
