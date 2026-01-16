"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Container from "../../components/common/parent-container";
import BackButtonWithText from "../../components/common/back_button_with_text"
import Link from "next/link";

export default function TwoFactorAuthPage() {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
          {/* Card with shadow, rounded corners, padding, but no white background */}
          <div className="bg-white rounded-xl shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] flex flex-col items-center p-[32px]">
            
            {/* Title */}
            <h1 className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-gray-900">Welcome back!</h1>

            {/* Subtitle */}
            <p className="pt-[8px] text-[16px] leading-[24px] fonr-regular text-gray-600 text-center">
              Enter the Code from Your Two-Factor Authentication App.
            </p>

            {/* Code Input */}
            <div className="pt-[24px] flex gap-[16px] md:gap-3 w-full justify-center">
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
                className="w-[40px] h-[48px] md:w-12 md:h-14 text-center text-lg md:text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>
            {/* Login Button */}
             <button
              onClick={handleLogin}
              className="w-[318px] desktop:w-full h-[48px] bg-[#01A56D] hover:bg-emerald-700 text-white text-[18px] font-medium leading-[16px] rounded-[10px] transition-colors duration-200 mt-[24px]"
            >
              Login
            </button>

            {/* Help Text */}
            <p className="pt-[14px] text-[14px] leading-[22px] font-body_text text-gray-500 text-center">
              If you've lost your 2FA credentials, please reach out 
            </p>

              <div className="w-full desktop:w-auto text-[14px] leading-[22px] font-normal text-[#3F3E3E] font-body_text flex flex-wrap gap-x-[4px] text-center desktop:text-start justify-center desktop:justify-start">
              <span>to our</span>
              <Link href="#" className="text-[#01A56D]">
                Support
              </Link>
              <span>for Assistance</span>
              </div>

            {/* Back Button */}
            <div className="pt-[32px]">
             <BackButtonWithText />
            </div>

          </div>
      </div>
    </div>
   </Container>
  );
}
