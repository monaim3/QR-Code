import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Container from "@/components/common/parent-container";
import CurrenctSelector from "@/components/common/currency_dropdown";
import Link from "next/link";
import CheckIcon from "../../components/icons/check-icon";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  price: string;
  period?: string;
  features: PricingFeature[];
}

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div className="flex flex-col bg-white p-[24px] desktop:p-[32px] shadow-card rounded-[12px] hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-row item-start justify-between desktop:flex-col w-full max-w-full">
        <h3
          className="
            text-[var(--Black)]
            text-center
            font-medium
            text-[20px] 
            leading-[28px]
            desktop:text-[24px]
            desktop:leading-[32px]"
        >
          {plan.title}
        </h3>
        <div className="desktop:pt-[16px] flex justify-center items-center">
          <span
            className="
            text-[var(--Black)]
            font-regular
            text-[24px]
            leading-[32px]"
          >
            {plan.price}
          </span>
          {plan.period && (
            <p className="text-[var(--Grey)] text-4 font-regular pl-1">
              {plan.period}
            </p>
          )}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[rgba(205,208,219,0.5)] my-[24px]" />
      <ul className="space-y-[12px]">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center justify-start gap-[16px]"
          >
            <CheckIcon />
            <span className="text-[#3F3E3E] text-[16px] leading-[24px] text-[var(--Dark-gray)]">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      title: "7-Day Limited Access",
      price: "$1.45",
      features: [
        { text: "Create one QR code", included: true },
        { text: "Limited QR code scans", included: true },
        { text: "Limited access to analytics", included: true },
        {
          text: "After 7 days, auto-renews to $39 every 4 weeks. Cancel anytime.",
          included: true,
        },
      ],
    },
    {
      title: "7-Day Full Access",
      price: "$1.95",
      features: [
        { text: "Unlimited QR codes", included: true },
        { text: "Unlimited QR code scans", included: true },
        { text: "Unrestricted customization options", included: true },
        { text: "Unlimited access to analytics", included: true },
        { text: "Unlimited downloads", included: true },
        { text: "Full access to all download formats", included: true },
        { text: "Create any type of QR code you need", included: true },
        {
          text: "After 7 days, auto-renews to $39 every 4 weeks. Cancel anytime.",
          included: true,
        },
      ],
    },
    {
      title: "Yearly Plan",
      price: "$19",
      period: "/ mo",
      features: [
        { text: "Unlimited QR codes", included: true },
        { text: "Unlimited QR code scans", included: true },
        { text: "Unrestricted customization options", included: true },
        { text: "Unlimited access to analytics", included: true },
        { text: "Unlimited downloads", included: true },
        { text: "Full access to all download formats", included: true },
        { text: "Create any type of QR code you need", included: true },
        { text: "Pay $228 upfront and save 50%", included: true },
        {
          text: "Renews every year. You may cancel anytime.",
          included: true,
        },
      ],
    },
  ];

  return (
    <div className="bg-[var(--Generator-Background)]">
      <div
        className="min-h-screen"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="max-w-full">
          {/* Breadcrumb */}
          <div className="h-[54px] w-full bg-white desktop:bg-transparent">
            <nav className="w-full desktop:max-w-[1256px] mx-auto relative px-5 flex items-center gap-[8px] leading-[22px] py-[16px]">
              <span className="text-[14px] font-regular">Smart QR Code</span>
              <ChevronRight className={`w-5 h-5 text-[#79809A]`} />
              <span className="text-[14px] font-regular text-[var(--Blue)]">
                Prices
              </span>
            </nav>
          </div>
          <Container>
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pt-[16px] desktop:pt-[80px]">
                <h1 className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold text-[var(--black)]">
                  Plans & Pricing
                </h1>
                <div className="flex items-center gap-6">
                  <div className="hidden desktop:flex">
                    <CurrenctSelector textClass="text-[var(--Grey)]" />
                  </div>
                  <Link
                    href="/generator"
                    className="hidden desktop:flex bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-[11px] px-8 inline-block transition-all duration-300 ease-linear
            "
                  >
                    Create QR code
                  </Link>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="pt-[71px] desktop:pt-[56px] pb-[120px] grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] desktop:gap-[32px]">
                {plans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              </div>
            </div>
            <div className="md:hidden fixed bottom-0 left-0 w-full px-[20px] pt-[16px] pb-[32px] bg-white shadow-card z-[9999]">
              <button className="w-full py-3 bg-[var(--Blue)] text-white font-semibold rounded-lg flex items-center justify-center gap-3">
                Create QR code
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
