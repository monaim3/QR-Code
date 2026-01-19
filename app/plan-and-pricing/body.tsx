"use client";
import { useState } from 'react';
import { Check } from 'lucide-react';
import Container from '@/components/common/parent-container';
import CheckIcon from '@/components/icons/check-icon';
import PlanAndPricingRightPannelp from "./right-pannel";

export default function SmartQRPlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState('7-day-full');

  const plans = [
    { id: '7-day-limited', name: '7-Day Limited Access', price: 1.45, period: null, popular: false },
    { id: '7-day-full', name: '7-Day Full Access', price: 1.95, period: null, popular: true },
    { id: 'yearly', name: 'Yearly Plan', price: 19, period: '/mo', popular: false },
  ];

  const features = [
    'Unlimited QR codes',
    'Unlimited QR code scans',
    'Unrestricted customization options',
    'Unlimited access to analytics',
    'Unlimited downloads',
    'Full access to all download formats',
    'Create any type of QR code you need'
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex items-center justify-center" style={{ fontFamily: "var(--font-poppins)" }}>
      <Container className="flex items-center justify-center min-h-screen px-4">
        <main className="w-full max-w-7xl py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-[976px] flex flex-col desktop:flex-row items-center desktop:items-start justify-center desktop:justify-between 
                          overflow-hidden desktop:gap-[32px] desktop:bg-white desktop:px-[32px] pt-[32px] pb-[24px] desktop:pb-[32px] 
                          rounded-[12px] desktop:shadow-[0_0_14px_rgba(54,66,140,0.16)]">

            {/* Left Column */}
            <div className="w-full desktop:w-[520px] flex flex-col items-center desktop:items-start">
              {/* Header */}
<div>
  <h1 className="text-[20px] leading-[28px] desktop:text-[24px] desktop:leading-[32px] font-bold text-[var(--Black)]">
    Download your QR code
  </h1>
  <p className="pt-[4px] desktop:pt-[8px] text-[16px] leading-[24px] font-regular text-[var(--Black)]">
    Select a plan to access, download & manage your QR codes
  </p>
</div>

              {/* Plans */}
              <div className="space-y-[16px] pt-[24px] desktop:pt-[32px] w-full">
                {plans.map((plan) => (
                  <div key={plan.id} className="relative w-full">
                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`bg-white relative w-full rounded-[10px] transition-all 
                        border-2 ${selectedPlan === plan.id ? 'border-[var(--Blue)]' : 'border-transparent'}
                        shadow-[0_0_10px_rgba(0,0,0,0.12)] hover:shadow-[0_0_14px_rgba(0,0,0,0.16)]`}
                    >
                      {/* Popular bar */}
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 h-[22px] bg-[var(--Blue)] rounded-tl-[10px] rounded-tr-[10px] flex items-center justify-center z-10">
                          <p className="text-[14px] leading-[22px] font-regular text-white">
                            Most popular
                          </p>
                        </div>
                      )}

                      {/* Button content */}
                      <div className={`flex items-center justify-between px-[16px] pb-[24px] ${plan.popular ? 'pt-[46px]' : 'py-[24px]'}`}>
                        {/* Left */}
                        <div className="flex items-center space-x-3">
                          <div className={`w-[24px] h-[24px] rounded-[6px] flex items-center justify-center
                            ${selectedPlan === plan.id ? 'bg-[var(--Blue)]' : 'border-2 border-gray-300'}`}>
                            {selectedPlan === plan.id && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-[18px] leading-[28px] font-medium text-[var(--Black)] ">{plan.name}</span>
                        </div>

                        {/* Right */}
                        <div className="text-right">
                          <span className="text-[18px] leading-[28px] font-medium text-[var(--Black)]">${plan.price}</span>
                          {plan.period && <span className="text-[18px] leading-[28px] font-medium text-[var(--Black)]">{plan.period}</span>}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              <button className="w-full bg-[var(--Blue)] hover:bg-[var(--hover-Blue)] text-white text-[18px] leading-[26px] font-medium py-4 rounded-xl transition-colors shadow-[0_0_10px_rgba(0,0,0,0.12)] hover:shadow-[0_0_14px_rgba(0,0,0,0.16)] mt-[32px]">
                Continue
              </button>

              {/* Features */}
              <div className="pt-[32px] flex flex-col gap-[16px] overflow-auto w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-[8px]">
                    <CheckIcon fill="var(--Blue)" className="w-[16px] h-[16px] flex-shrink-0" />
                    <span className="text-gray-700 text-[14px] leading-[24px]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full desktop:w-[456px] mt-[32px] desktop:mt-0 flex justify-center">
              <PlanAndPricingRightPannelp />
            </div>

          </div>
        </main>
      </Container>
    </div>
  );
}
