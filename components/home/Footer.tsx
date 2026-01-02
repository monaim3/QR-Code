'use client';
import Container from "@/components/common/parent-container";
import {Button} from "@/components/ui/button";
import {ChevronDown, Globe} from "lucide-react";
import {useState} from "react";

export default function Footer() {

  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <footer className="flex flex-col items-center justify-center min-auto px-8 pt-[64px] pb-[25px] bg-[radial-gradient(circle,#334A56,#2F3E46)]">
      <Container>
       <div className="flex flex-col">
        <div className="bg-white/10 rounded-[12px]">
          <div className="flex flex-row p-[40px] items-center justify-between gap-[40px]">
            <div className="flex flex-col w-[898px] h-[109px]">
              <div className="flex gap-[12px]">
                <img src="/images/qr.svg" alt="Logo" className="w-[45px] h-[45px]" />
                <h1 className="text-4xl font-bold text-center">
                <span className="font-sans text-white text-[34px]">SmartQR</span>
              </h1>
              </div>
              <span className="font-sans text-white pt-[16px] text-[15px]">Create personalized dynamic QR codes with ease. Boost their effectiveness using advanced analytics and branding tools, and modify your QR codes at any time.</span>
            </div>
            <Button className="text-white bg-[#01A56D] hover:bg-[#018f5f]">
                Create QR Code
            </Button>
          </div>
        </div>
        <div className="flex justify-between gap-[170px]">
          <div className="flex flex-col pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] font-bold">Help</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">Contact Us</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">Cancel subscription</span>
          </div>
          <div className="flex flex-col pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] font-bold">Help</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">Create QR code</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">FAQ</span>
          </div>
          <div className="flex flex-col pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] font-bold">Company</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">Prices</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">About us</span>
          </div>
          <div className="flex flex-col pt-[40px] gap-[16px]">
            <span className="font-sans text-white text-[18px] font-bold">Company</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">Terms and conditions</span>
            <span className="font-sans font-regular text-white text-[15px] cursor-pointer hover:underline">Privacy policy</span>
          </div>
        </div>
        <div className="mt-[60px] w-full h-px bg-white/10"></div>
        <div className="flex justify-between pt-[24px]">
          <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-white transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span>EN</span>
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
          <span className="font-sans font-regular text-white text-[14px] cursor-pointer hover:underline">2025 © SmartQR.com™ All rights reserved</span>
        </div>
       </div>
      </Container>
    </footer>
  );
}