"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, Globe, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Container from "../common/parent-container";
import MenuIcon from "../icons/menu-icon";
import LanguageSelector from "../common/language_dropdown"

export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const languages = [
    { name: "English", code: "EN" },
    { name: "Español", code: "ES" },
    { name: "Français", code: "FR" },
  ];

  return (
    <header
      className="w-full desktop:bg-[#F5F6FA] bg-white relative z-50"
      style={{ fontFamily: "var(--font-poppins)" }}>
      <Container>
        <div className="flex items-center justify-between desktop:h-[72px] h-16">
          {/* Logo */}
          <Link href="/">
          <img src="/images/Logo.svg" alt="Logo" className="w-38" />
          
          </Link>

          {/* Desktop Right side actions */}
          <div className="hidden desktop:flex items-center gap-4">
            {/* Language Selector */}
            {/* {<div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Select language">
                <Globe className="w-4 h-4" />
                <span className="text-[14px] leading-[22px] font-regular">
                  EN
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setIsLangOpen(false)}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>} */}

             <LanguageSelector/>

            {/* Log in Button */}
            <Link
              href="#"
              className="px-4 py-2 text-sm leading-[22px] font-medium text-[var(--Dark-gray)]  hover:bg-[var(--Blue)] rounded-lg border hover:border-[var(--Blue)]  hover:text-white transition-all duration-300 ease-linear">
              Log in
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex desktop:hidden">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open menu">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div
  className={cn(
    "fixed inset-0 z-[100] desktop:hidden",
    isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
  )}
>
  {/* Backdrop */}
  <div
    onClick={() => setIsDrawerOpen(false)}
    className={cn(
      "absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out",
      "backdrop-blur transition-[backdrop-filter] duration-300",
      isDrawerOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0 backdrop-blur-0"
    )}
  />

  {/* Drawer Content - Anchored to Left */}
  <div
    className={cn(
      "absolute top-0 left-0 h-full w-[320px] bg-white shadow-2xl flex flex-col p-6",
      "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform",
      isDrawerOpen ? "translate-x-0" : "-translate-x-full"
    )}
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <img src="/images/Logo.svg" alt="SmartQR" className="w-auto h-8" />
      </div>
      <button
        onClick={() => setIsDrawerOpen(false)}
        className="p-1 text-gray-500 hover:text-gray-900 transition-colors"
      >
        <X className="w-7 h-7 font-light" />
      </button>
    </div>

    {/* Menu Links */}
    <nav className="flex flex-col">
      {[
        "Contact us",
        "FAQ",
        "Prices",
        "Terms & conditions",
        "Privacy policy",
      ].map((item) => (
        <Link
          key={item}
          href="#"
          onClick={() => setIsDrawerOpen(false)}
          className="py-5 text-[16px] font-semibold leading-[24px] text-gray-900 border-b border-gray-100 last:border-0 active:bg-gray-50 transition-colors"
        >
          {item}
        </Link>
      ))}
       
      <LanguageSelector layout="gapBetween"/>
      </nav>

    {/* Footer Login Button */}
    <div className="mt-auto pb-[20px]">
      <Link
        href="#"
        onClick={() => setIsDrawerOpen(false)}
        className="w-full py-[9px] flex items-center justify-center text-[14px] font-medium leading-[22px] text-gray-900 bg-white border border-gray-200 rounded-[15px] shadow-sm active:scale-[0.98] transition-all"
      >
        Log in
      </Link>
    </div>
  </div>
      </div>
    </header>
  );
}
