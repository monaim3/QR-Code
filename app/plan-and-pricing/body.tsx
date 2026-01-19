
"use client";
import { useState } from 'react';
import { Check, QrCode } from 'lucide-react';
import Container from '@/components/common/parent-container';
import SignUpReadyQr from "../../components/signup/sign-up-ready-qr";
import CheckIcon from '@/components/icons/check-icon';
import PlanAndPricingRightPannelp from "./right-pannel"


export default function SmartQRPlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState('7-day-full');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const plans = [
    {
      id: '7-day-limited',
      name: '7-Day Limited Access',
      price: 1.45,
      period: null,
      popular: false
    },
    {
      id: '7-day-full',
      name: '7-Day Full Access',
      price: 1.95,
      period: null,
      popular: true
    },
    {
      id: 'yearly',
      name: 'Yearly Plan',
      price: 19,
      period: '/mo',
      popular: false
    }
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

  const testimonials = [
    {
      text: "My QR Code definitely met my expectations. Ran into a few bumps customizing my code, but a quick call and they steered me right. Appreciated their prompt assistance!",
      author: "James Lawson",
      role: "Sales Director"
    }
  ];

  const steps = [
    { number: 1, label: 'QR Ready', active: true },
    { number: 2, label: 'Plan Selection', active: false },
    { number: 3, label: 'Payment Details', active: false }
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA]" style={{ fontFamily: "var(--font-poppins)" }}>
        <Container className="flex items-center justify-center min-h-screen px-4">
        {/* Main Content */}
         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="
                w-full max-w-[976px]
                bg-white
                rounded-[12px]
                px-[16px] desktop:px-[32px]
                pt-[32px] pb-[24px] desktop:pb-[32px]
                shadow-[0_4px_14px_rgba(54,66,140,0.16)]
                flex flex-col desktop:flex-row
                items-start justify-between
                overflow-hidden
                desktop:gap-[32px]
            ">
                {/* Left Column - Plan Selection */}
                <div>
                    <div className="mb-0">
                    <h1 className="text-[20px] leading-[28px] desktop:text-[24px] desktop:leading-[32px] font-bold text-[var(--Bklack)]">
                        Download your QR code
                    </h1>
                    <p className="pt-[4px] desktop:pt-[8px] text-[16px] leading-[24px] text-[var(--Black) font-regular">
                        Select a plan to access, download & manage your QR codes
                    </p>
                    </div>
                    {/* Plans */}
                    <div className="space-y-[16px] pt-[24px] desktop:pt-[32px]">
                    {plans.map((plan) => (
                        <div key={plan.id} className="relative">
                        <button
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`relative w-full rounded-[10px] transition-all shadow-md border-2 overflow-visible ${
                           selectedPlan === plan.id ? 'border-[var(--Blue)]' : 'border-transparent'
                        }`}>
                        {/* Popular bar */}
                        {plan.popular && (
                            <div className="absolute top-0 left-0 right-0 h-[22px] bg-[var(--Blue)] rounded-tl-[8px] rounded-tr-[8px] flex items-center justify-center z-10">
                            <p className="text-[14px] leading-[22px] font-regular text-white">
                                Most popular
                            </p>
                            </div>
                        )}

                        {/* Button content — same padding for all buttons */}
                        <div
                            className={`flex items-center justify-between px-[16px] pb-[24px] ${
                            plan.popular ? 'pt-[46px]' : 'py-[24px]'
                            }`}
                        >
                            {/* Left: circle + name */}
                            <div className="flex items-center space-x-3">
                            <div
                                className={`w-[24px] h-[24px] rounded-[6px] flex items-center justify-center ${
                                selectedPlan === plan.id ? 'bg-[var(--Blue)]' : 'border-2 border-gray-300'
                                }`}
                            >
                                {selectedPlan === plan.id && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-[18px] leading-[28px] font-medium text-[var(--black)]">{plan.name}</span>
                            </div>

                            {/* Right: price */}
                            <div className="text-right">
                            <span className="text-[18px] leading-[28px] font-medium text-[var(--black)]">${plan.price}</span>
                            {plan.period && <span className="text-[18px] leading-[28px] font-medium text-[var(--black)]">{plan.period}</span>}
                            </div>
                        </div>
                        </button>

                        </div>
                        ))}
                    </div>
                    {/* Continue Button */}
                    <button className="w-full bg-[var(--Blue)] hover:[var(--hover-Blue)] text-white text-[18px] leading-[26px] font-medium py-4 rounded-xl transition-colors mt-[32px]">
                    Continue
                    </button>
                    {/* Features List */}
                    <div className="pt-[32px]">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-start gap-[16px] pb-[12px]">
                        <CheckIcon fill='var(--Blue)' className="w-[16px] h-[16px] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                    </div>
                </div>
                {/* Right Column - QR Code Preview */}
               <PlanAndPricingRightPannelp/>
            </div>
         </main>
        </Container>
    </div>
  );
}