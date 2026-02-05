"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Container from "../../components/common/parent-container";
import BackButtonWithText from "../../components/common/back_button_with_text"
import Link from "next/link";
import CreatePasswordModal from "../../components/modals/forget-password-modal"

export default function TwoFactorAuthPage() {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) inputRefs.current[index + 1]?.focus();
    //for set error
    const fullCode = code.join('');
    if(fullCode === "000000"){
      setError(true);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === 'ArrowRight' && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const digits = pastedData.match(/\d/g) || [];
    const newCode = [...code];
    digits.forEach((digit, index) => {
      if (index < 6) newCode[index] = digit;
    });
    setCode(newCode);
    const nextIndex = Math.min(digits.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleLogin = async () => {
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log('Logging in with code:', fullCode);
    }
  };

  const handleBack = () => router.back();

  return (
   <Container>
    <div className="min-h-screen flex items-start justify-center">
      <div>
          {/* Card with shadow, rounded corners, padding, but no white background */}
          <div className="w-full max-w-[400px] bg-white rounded-[12px] shadow-card flex flex-col items-center p-[24px] desktop:p-[32px] mt-[136px] desktop:mt-[120px]">
            
            {/* Title */}
            <h1 className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-gray-900">Welcome back!</h1>

            {/* Subtitle */}
            <p className="pt-[8px] text-[16px] leading-[24px] fonr-regular text-[var(--Dark-gray)] text-center">
              Enter the Code from Your Two-Factor Authentication App.
            </p>

            {/* Code Input */}
            <div className="pt-[24px] flex gap-[8px] desktop:gap-[16px] w-full justify-center">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el; // assign, but do NOT return anything
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-[40px] h-[48px] text-center text-[18px] font-semibold border border-[var(--Boarder-Grey)] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>
            {/* Login Button */}
             <button
              onClick={()=> setIsModalOpen(true)}
              className="w-full desktop:w-full h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] font-medium leading-[16px] rounded-[10px] transition-colors duration-300 mt-[24px]"
            >
              Login
            </button>

           <CreatePasswordModal
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
           />

            {/* Help Text */}
            <p className="pt-[24px] text-[14px] leading-[22px] font-body_text text-[var(--Dark-gray)] text-center">
              If you've lost your 2FA credentials, please reach out to our
              <span className='px-[4px]'>
                 <Link href="#" className="text-[var(--Blue)]">
                Support
              </Link>
              </span>
              for Assistance
            </p>

            {/* Back Button */}
            <div className="pt-[24px]">
             <BackButtonWithText title='Back'/>
            </div>

          </div>
      </div>
    </div>
   </Container>
  );
}
