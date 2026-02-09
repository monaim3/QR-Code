"use client";
import { useState } from 'react';
import { Check } from 'lucide-react';
import Container from '@/components/common/parent-container';
import CheckIcon from '@/components/icons/check-icon';
import PlanAndPricingRightPannelp from "./right-pannel";
import CurrencySelector from '@/components/common/currency_dropdown.client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function SmartQRPlanSelection() {
  const router = useRouter();
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

  function handleContinue() {
    router.push("/checkout");
  }

  return (
    <div className="min-h-screen bg-[var(--Generator-Background)] flex items-center justify-center" style={{ fontFamily: "var(--font-poppins)" }}>
      <Container className="flex items-center justify-center min-h-screen px-4">
        <div className='desktop:w-[1079px]'>
         <main className="w-full max-w-7xl py-[10px] flex flex-col justify-center">
            <div className="hidden md:flex">
            {/* Fills all remaining space */}
            <div className="flex-1" />
            {/* Takes only its own width */}
            <div className="h-[54px] flex items-center flex-shrink-0">
            <CurrencySelector textClass='text-[14px] leading-[22px] text-[var(--Grey)] font-regular'/>
            </div>
          </div>
          <div className='pt-[0px] pb-[136px] desktop:pb-[160px]'>
            <div className="w-full max-w-[1079px] flex flex-col desktop:flex-row items-center desktop:items-start justify-center desktop:justify-between 
                          overflow-hidden desktop:gap-[32px] desktop:bg-white desktop:px-[32px] pt-[32px] pb-[24px] desktop:pb-[32px]
                          rounded-[12px] desktop:shadow-card">

            {/* Left Column */}
            <div className="w-full flex flex-col items-center desktop:items-start">
              {/* Header */}
                <div>
                <h1 className="text-[24px] leading-[32px] font-bold text-[var(--Black)]">
                  Download your QR code
                </h1>
                <p className="pt-[4px] desktop:pt-[8px] text-[16px] leading-[24px] font-regular text-[var(--Black)]">
                  Select a plan to access, download & manage your QR codes
                </p>
              </div>
              {/* Plans */}
              <div className="space-y-[16px] pt-[24px] desktop:pt-[32px] w-full">
                {plans.map((plan) => (
                  <div key={plan.id} className={`relative w-full ${ plan.popular ? "h-auto" : "h-auto"}`}>
                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`bg-white relative w-full rounded-[10px] transition-all 
                        border-[2px] ${selectedPlan === plan.id ? 'border-[var(--Blue)]' : 'border-transparent'}
                        shadow-card hover:shadow-xl`}
                    >
                      {/* Popular bar */}
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 h-[22px] bg-[var(--Blue)] rounded-tl-[5px] rounded-tr-[5px] flex items-center justify-center z-10">
                          <p className="text-[14px] leading-[22px] font-regular text-white">
                            Most popular
                          </p>
                        </div>
                      )}

                      {/* Button content */}
                      <div className={`flex items-center justify-between px-[14px] pb-[22px] ${plan.popular ? 'pt-[46px]' : 'py-[22px]'}`}>
                        {/* Left */}
                        <div className="flex items-center space-x-3">
                          <div className={`w-[24px] h-[24px] rounded-[6px] flex items-center justify-center
                            ${selectedPlan === plan.id ? 'bg-[var(--Blue)]' : 'border-[2px] border-gray-300'}`}>
                            {selectedPlan === plan.id && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-[18px] leading-[28px] font-medium text-[var(--Black)] ">{plan.name}</span>
                        </div>

                        {/* Right */}
                        <div className="text-right">
                          <span className="text-[18px] leading-[28px] font-regular text-[var(--Black)]">${plan.price}</span>
                          {plan.period && <span className="text-[18px] leading-[28px] font-regular text-[var(--Black)]">{plan.period}</span>}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              <button onClick={handleContinue} className="hidden md:block w-full h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] leading-[26px] font-medium py-4 rounded-xl transition-colors mt-[32px]">
                Continue
              </button>

              {/* Features */}
              <div className="hidden md:block pt-[32px] flex flex-col overflow-auto w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-[16px] h-[24px] mb-[12px]">
                    <CheckIcon fill="var(--Blue)"/>
                    <span className="text-gray-700 text-[16px] leading-[24px]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full desktop:w-full mt-[32px] desktop:mt-0 flex justify-center">
              <PlanAndPricingRightPannelp />
            </div>

          </div>
          </div>
        </main>
        </div>
         <div className="md:hidden fixed bottom-0 left-0 w-full px-[20px] pt-[16px] pb-[32px] bg-white shadow-card z-[9999]">
          <button 
          type="button"
          onClick={handleContinue}
           className="w-full py-3 bg-[var(--Blue)] text-white font-semibold rounded-lg flex items-center justify-center gap-3">
            Continue
            <ArrowRight className="w-5 h-5"/>
          </button>
        </div>
      </Container>
    </div>
  );
}