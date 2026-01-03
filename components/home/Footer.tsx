'use client';
import Container from "@/components/common/parent-container";
import {Button} from "@/components/ui/button";
import {ChevronDown, Globe} from "lucide-react";
import {useState} from "react";

export default function Footer() {

  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <footer className="flex flex-col items-center justify-center min-auto px-0 pt-[64px] pb-[25px] bg-[radial-gradient(circle,#334A56,#2F3E46)]">
      <Container>
       <div className="flex flex-col">
        <div className="bg-white/10 rounded-[12px]">
         <div className="flex flex-col desktop:flex-row desktop:justify-between items-center p-[40px] gap-x-[16px] gap-y-[24px] w-full">
          {/* Left: Logo + Text */}
          <div className="flex flex-col items-center desktop:items-start w-full desktop:w-[898px]">
            <div className="flex items-center gap-[12px]">
              <img src="/images/qr.svg" alt="Logo" className="w-[45px] h-[45px]" />
              <h1 className="text-[28px] leading-[39px] desktop:text-[34px] desktop:leading-[45px] font-sans font-bold text-white text-center desktop:text-left">
                SmartQR
              </h1>
            </div>
            <span className="font-sans text-white text-[16px] leading-[24px] pt-[16px] text-center desktop:text-left">
              Create personalized dynamic QR codes with ease. Boost their effectiveness using advanced analytics and branding tools, and modify your QR codes at any time.
            </span>
          </div>

          {/* Right: Button */}
          <Button className="w-[198px] h-[48px] bg-[#01A56D] hover:bg-[#018f5f] rounded-[10px] flex-shrink-0">
            <span className="text-white text-[18px] font-regular py-[11px] px-[32px] inline-block">
              Create QR code
            </span>
          </Button>
        </div>
        </div>
        <div className="flex flex-col desktop:flex-row items-center justify-between gap-[32px] desktop:gap-[170px]">
          <div className="flex flex-col items-center desktop:items-start pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] leading-[26px] font-bold">Help</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">Contact Us</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">Cancel subscription</span>
          </div>
          <div className="flex flex-col items-center desktop:items-start pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] leading-[26px] font-bold">Help</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">Create QR code</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">FAQ</span>
          </div>
          <div className="flex flex-col items-center desktop:items-start pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] leading-[26px] font-bold">Company</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">Prices</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">About us</span>
          </div>
          <div className="flex flex-col items-center desktop:items-start pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] leading-[26px] font-bold">Company</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">Terms and conditions</span>
            <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">Privacy policy</span>
          </div>
        </div>
        <div className="mt-[60px] w-full h-px bg-white/10"></div>
        <div className="flex flex-col items-center pt-[24px] desktop:flex-row desktop:justify-between w-full">
          <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-white transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[14px] leading-[22px] font-regular">English</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Español
                    </button>
                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Français
                    </button>
                  </div>
                </>
              )}
          </div>
          <span className="font-sans font-regular text-white text-[14px] leading-[22px] cursor-pointer hover:underline">2025 © SmartQR.com™ All rights reserved</span>
        </div>
       </div>
      </Container>
    </footer>
  );
}