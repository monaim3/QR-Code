"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, Globe, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Container from "../common/parent-container";
import MenuIcon from "../icons/menu-icon";

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
            <div className="relative">
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
            </div>

            {/* Log in Button */}
            <Link
              href="#"
              className="px-4 py-2 text-sm leading-[22px] font-medium text-[#3F3E3E]  hover:bg-[var(--Blue)] rounded-lg border hover:border-[var(--Blue)]  hover:text-white font-poppins transition-all duration-300 ease-linear
">
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
          "fixed inset-0 z-[100] desktop:hidden transition-all duration-300 ease-in-out",
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl flex flex-col p-6 transition-transform duration-500 ease-in-out",
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          )}>
          <div className="flex items-center justify-between mb-10">
            <img src="/images/Logo.svg" alt="Logo" className="w-32 h-8" />
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {/* Mobile Language Selector */}
            <div className="flex flex-col gap-4">
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.1em]">
                Select Language
              </p>
              <div className="flex flex-col gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setIsDrawerOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-all group active:scale-[0.98]">
                    <span className="text-[16px] font-medium group-hover:text-[var(--Blue)]">
                      {lang.name}
                    </span>
                    {lang.code === "EN" && (
                      <div className="w-2 h-2 rounded-full bg-[var(--Blue)] shadow-[0_0_8px_rgba(1,165,109,0.4)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-gray-100 w-full" />

            {/* Mobile Login Button */}
            <div className="flex flex-col gap-4">
              <Link
                href="/login"
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-4 flex items-center justify-center text-[16px] font-bold text-white bg-[var(--Blue)] hover: rounded-2xl shadow-[0_10px_20px_-5px_rgba(1,165,109,0.3)] active:scale-[0.97] transition-all">
                Log in
              </Link>
            </div>
          </div>

          {/* Footer inside drawer */}
          <div className="mt-auto pt-6 text-center">
            <p className="text-[12px] text-gray-400">
              © 2026 SmartQR. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
