"use client";
import Container from "@/components/common/parent-container";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <footer className="w-full pt-16 pb-6 bg-[radial-gradient(circle,#334A56,#2F3E46)]">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Top Section: Logo + Button */}
          <div className="bg-white/10 rounded-xl p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center text-center lg:text-left">
              {/* Left: Logo + Text */}
              <div className="flex flex-col gap-4 max-w-[898px]">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <img src="/images/qr.svg" alt="Logo" className="w-11 h-11" />
                  <span className="text-2xl md:text-[34px] font-bold text-white">
                    SmartQR
                  </span>
                </div>
                <p className="text-white text-base leading-6">
                  Create personalized dynamic QR codes with ease. Boost their
                  effectiveness using advanced analytics and branding tools, and
                  modify your QR codes at any time.
                </p>
              </div>

              {/* Right: Button */}
              <div className="flex justify-center lg:justify-end">
                <Button className="h-12 bg-[#01A56D] hover:bg-[#018f5f] rounded-lg px-8">
                  <span className="text-white text-lg font-medium">
                    Create QR code
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-10 text-center desktop:text-left">
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-bold">Help</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    Cancel subscription
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-bold">Help</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    Create QR code
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-bold">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    Prices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-bold">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#01A56D] transition-colors">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Bottom Section: Language + Copyright */}
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-6 items-center text-center desktop:text-left">
            <div className="relative flex justify-center desktop:justify-start">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white  "
                aria-label="Select language">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute bottom-full left-1/2 desktop:left-0 -translate-x-1/2 desktop:translate-x-0 mb-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      English
                    </button>
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      Español
                    </button>
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      Français
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="desktop:text-right">
              <span className="text-white text-sm ">
                2025 © SmartQR.com™ All rights reserved
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
