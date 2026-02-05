"use client";
import React from 'react';
import { useState } from "react";
import { ArrowRight } from 'lucide-react';
import Container from '@/components/common/parent-container';
import CurrenctSelector from '@/components/common/currency_dropdown';
import CheckIcon from "@/components/icons/check-icon";
import { Checkbox } from "@/components/ui/checkbox";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
    id: number;
  title: string;
  price: string;
  period?: string;
  features: PricingFeature[];
  invoice: string;
  popular: boolean;
}


interface PricingCardProps {
  plan: PricingPlan;
  selected: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  selected,
  onCheckedChange,
}) =>  {
  return (
    <div 
    key={plan.id}
    className={`${plan.popular ? "h-full outline outline-2 outline-[var(--Blue)]" : "h-full desktop:h-[calc(100%-42px)]"} flex flex-col bg-white shadow-card rounded-[12px] hover:shadow-xl transition-shadow duration-300`}>
      {plan.popular && (
        <div className="h-[42px] rounded-t-[12px] bg-[var(--Blue)] w-full flex items-center justify-between px-4 desktop:px-8">
            <p className='text-[16px] leaing-[26px] text-white font-bold'>
              Most Popular
            </p>
            <div className='h-[28px] w-[81px] bg-[#FFFFFFCC] rounded-full flex items-center justify-center'>
                <p className='text-[12px] leading-[20px] font-medium text-[var(--Blue)]'>
                    Save 35%
                </p>
            </div>
        </div>
      )}
      <div className="p-4 desktop:p-8">
       <div className='flex flex-col items-start desktop:items-center'>
         <div className='flex flex-row item-start justify-start desktop:flex-col w-full max-w-full gap-4'>
    <div className="block desktop:hidden">
      <Checkbox
      id={`Check-${plan.id}`}
      name={`Check-${plan.id}`}
      checked={selected}
      onCheckedChange={onCheckedChange}
      className="
        h-6 w-6
        rounded-[6px]
        border
        border-[var(--Boarder-Grey)]
        peer
        transition-colors duration-200
        data-[state=checked]:bg-[var(--Blue)]
        data-[state=checked]:border-[var(--Blue)]
        data-[state=checked]:text-white
      "
    />
    </div>
          <h3 className="
            text-[var(--Black)]
            text-center
            font-medium
            text-[20px] 
            leading-[28px]
            desktop:text-[24px]
            desktop:leading-[32px]">
        {plan.title}
      </h3>
      <div className="flex flex-1 justify-end desktop:justify-center items-center">
         <span
            className="
            text-[var(--Black)]
            font-regular
            text-[24px]
            leading-[32px]">
            {plan.price}
        </span>
      </div>
        </div>
        <p className='text-[14px] leading-[22px] text-[var(--Grey)] font-regular'>
            {plan.invoice} 
        </p>
        </div>
      <div className={`hidden desktop:flex rounded-[10px] items-center justify-center h-[48px] w-full h-[1px] ${plan.popular ? "bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]" : "outline outline-1 outline-[var(--Blue)]"} transition duration-300 my-[24px]`}>
        <p className={`text-[18px] leading-[26px] font-semibold ${plan.popular ? "text-white" : "text-[var(--Blue)]"}`}>
          Choose plan
        </p>
      </div>
      <ul className="hidden desktop:block space-y-[12px]">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center justify-start gap-[16px]">
           <CheckIcon fill={`${plan.popular ? "var(--Blue)" : "var-(--Dark-grey)"}`}/>
            <span className="text-[#3F3E3E] text-[16px] leading-[24px] text-[var(--Dark-gray)]">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

const PricingPage: React.FC = () => {

  const [selectedPlan, setSelectedPlan] = useState(2);

  const plans: PricingPlan[] = [
    {
      id: 1,
      title: 'Monthly',
      price: '$45',
      period: 'mo',
      invoice: 'Invoiced every month',
      popular: false,
      features: [
        { text: 'Create unlimited QR codes', included: true },
        { text: 'Unrestricted editing', included: true },
        { text: 'Unlimited scans', included: true },
        { text: 'Full library access',included: true},
        { text: 'Multiple download formats',included: true},
        { text: 'Advanced QR analytics',included: true},
        { text: 'Premium support',included: true},
        { text:'Cancel anytime',included: true},
      ],
    },
    {
      id: 2,
      title: 'Annual',
      price: '$18',
      period: 'mo',
      invoice: 'Invoiced every year',
      popular: true,
      features: [
        { text: 'Create unlimited QR codes', included: true },
        { text: 'Unrestricted editing', included: true },
        { text: 'Unlimited scans', included: true },
        { text: 'Full library access',included: true},
        { text: 'Multiple download formats',included: true},
        { text: 'Advanced QR analytics',included: true},
        { text: 'Premium support',included: true},
        { text:'Cancel anytime',included: true},
      ],
    },
    {
      id: 3,
      title: 'Quarterly',
      price: '$26',
      period: 'mo',
      invoice: 'Invoiced every quarter',
      popular: false,
      features: [
       { text: 'Create unlimited QR codes', included: true },
        { text: 'Unrestricted editing', included: true },
        { text: 'Unlimited scans', included: true },
        { text: 'Full library access',included: true},
        { text: 'Multiple download formats',included: true},
        { text: 'Advanced QR analytics',included: true},
        { text: 'Premium support',included: true},
        { text:'Cancel anytime',included: true},
      ],
    },
  ];

  const handleSelectPlan = (id: number) => {
    setSelectedPlan(id);
   } 

  return (
    <div className='bg-[var(--Generator-Background)] min-h-screen'>
      <div className="max-w-full">
        <Container>
        <div className='flex flex-col pt-[40px] desktop:pt-[80px] desktop:pb-[160px]'>
        <div className='w-full flex flex-col items-start desktop:items-center justify-center'>
            <p className='text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold text-[var(--Black)]'>
            Download Your QR Code
            </p>
            <p className='text-[16px] leading-[24px] font-regular text-[var(--Dark-grey)]'>
            Select a plan to access, download & manage your QR codes
            </p>
        </div>

        {/* Pricing Cards - Wrapped in its own flex container */}
        <div className="pt-[48px] desktop:pt-[40px]">
            <div className="flex items-end h-[312px] desktop:h-[586px]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] desktop:gap-[24px]">
                {plans.map((plan, index) => (
                <div 
                    onClick={() => handleSelectPlan(plan.id)}
                    key={plan.id}
                    className='flex flex-col'
                >
                    {index === 2 && (
                    <div className="hidden desktop:flex items-center justify-end mb-[6px]">
                        <div className="flex items-center gap-4 mb-[6px]">
                        <CurrenctSelector/>
                        </div>
                    </div>
                    )}
                    {index === 0 && (
                       <div className='hidden desktop:block h-[44px]'/>
                    )}
                    <PricingCard 
                    plan={plan} 
                    selected={selectedPlan === plan.id}
                    onCheckedChange={(checked) =>
                        setSelectedPlan(checked ? plan.id : 0)
                    }
                    />
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* Feature selection - Separate section, not affected by items-end */}
        <div className='flex flex-col items-start justify-start desktop:hidden border-2 border-dotted border-[var(--boarder-grey-50)] rounded-[16px] p-6 mt-6 mb-[120px]'>
            <p className='text-[20px] leading-[28px] font-bold text-[var(--black)]'>
                Features
            </p>
             <p className='text-[14px] leading-[22px] font-regular text-[var(--black)] pt-1'>
                The following features are included in every plan
            </p>
            <div className='w-full h-[1px] bg-[var(--boarder-grey-50)] my-6'/>
            <ul className='flex flex-col gap-3'>
            {plans[selectedPlan - 1]?.features.map((feature, index) => {
                return (
                <li key={index} className="flex items-center justify-start gap-[16px]">
                    <CheckIcon fill={`var(--Dark-grey)`}/>
                    <span className="text-[#3F3E3E] text-[16px] leading-[24px] text-[var(--Dark-gray)]">
                    {feature.text}
                    </span>
                </li>
                );
            })}
            </ul>
        </div>
        </div>
        <div className="md:hidden fixed bottom-0 left-0 w-full px-[20px] pt-[16px] pb-[32px] bg-white shadow-card z-[9999]">
          <button className="w-full py-3 bg-[var(--Blue)] text-white font-semibold rounded-lg flex items-center justify-center gap-3">
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default PricingPage;