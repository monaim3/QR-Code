'use client';
import { X} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import CrownOutline from "@/components/icons/crown-outline";
import { useModalQuery } from "./modal-hooks";

export default function TrialExpirationModal(){
  const { closeModal } = useModalQuery();

const expirationDate = new Date('2026-02-06T23:59:59').getTime();
  
   const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ampm: 'AM',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = expirationDate - now;

      if (difference > 0) {
        const totalHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const hours12 = totalHours % 12 || 12; // 0 becomes 12
        const ampm = totalHours >= 12 ? 'PM' : 'AM';

        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: hours12,
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          ampm: ampm,
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, ampm: 'AM' });
      }
    };

    calculateTimeLeft(); // run immediately
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const restrictions = [
    'Your dynamic QR codes will no longer be scannable.',
    'You will be unable to create new QR codes or edit current ones.',
    'Access to all tracking metrics will be restricted.',
    'You will no longer be able to download your QR codes.'
  ];

    return (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Container for modal and close button */}
      <div className="relative">
        {/* Close Button - Outside the modal container */}
        <button
          onClick={closeModal}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2"
          aria-label="Close"
        >
          <span className="text-sm font-medium">Close</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <X size={14} />
          </div>
        </button>

        {/* Modal Container - Following Figma specs */}
        <div className="w-full max-w-[500px] flex flex-col items-center p-8 bg-white rounded-[10px] shadow-card">
         
         {/* Header */}
        <h1 className="text-[20px] leading-[28px] desktop:text-[24px] desktop:leading-[32px] font-bold text-center text-[var(--Black)]">
          Your free trial expires in
        </h1>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-8 mt-4">
          <div className="flex flex-col items-center">
            <div className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold tabular-nums text-[var(--Black)]">
              {formatNumber(timeLeft.days)}
            </div>
            <div className="text-[16px] leading-[24px] text-[var(--Grey)] uppercase tracking-wide">
              Days
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold tabular-nums text-[var(--Black)]">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="text-[16px] leading-[24px] text-[var(--Grey)] uppercase tracking-wide">
              Hours
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold tabular-nums text-[var(--Black)]">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="text-[16px] leading-[24px] text-[var(--Grey)] uppercase tracking-wide">
              Mins
            </div>
          </div>
        </div>

         {/* Restriction Notice */}
        <div className="bg-[var(--Generator-Background)] rounded-[8px] p-4 mt-6">
          <p className="text-[var(--Black)] text-[16px] leading-[24px] font-regular">
            After <span className="font-semibold">May 29, 2024</span>, your account will be downgraded and
            the following features will be restricted:
          </p>

          {/* Restrictions List */}
          <div className="space-y-2 mt-6">
            {restrictions.map((restriction, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--error)] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <p className="text-[var(--Black)] text-[16px] leading-[22px] w-full font-regular">
                  {restriction}
                </p>
              </div>
            ))}
          </div>
          

        </div>

         {/* Call to Action */}
        <div className="text-center mt-6">
          <p className="text-[var(--Dark-grey)] text-[16px] leading-[24px] font-regular">
            To continue using My QR Code without interruptions,
            <br />
            upgrade your account.
          </p>
          </div>

          <div className="hidden desktop:flex h-[40px] w-[210px] items-center justify-center rounded-[8px] bg-[#4981FF] hover:bg-[#6FA0FF] transition-colors duration-300 gap-2 mt-6">
            <CrownOutline />
            <p className='text-[14px] leading-[22px] font-regular text-white'>
              Upgrade now
            </p>
          </div>

        </div>

       <div className='desktop:hidden w-full bg-white mt-2 px-[20px] pt-4 flex items-center justify-center'>
        <div className="h-[40px] w-[210px] flex items-center justify-center rounded-[8px] bg-[#4981FF] hover:bg-[#6FA0FF] transition-colors duration-300 gap-2 mb-8">
            <CrownOutline />
            <p className='text-[14px] leading-[22px] font-regular text-white'>
              Upgrade now
            </p>
          </div>
       </div>

      </div>
    </div>
    );
}