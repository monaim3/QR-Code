"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Container from "../common/parent-container";
import MenuIcon from "../icons/menu-icon";
import LanguageSelector from "../common/language_dropdown";
import CurrenctSelector from '@/components/common/currency_dropdown';

class HeaderOptions{
  id: number;
  title: string;
  path: string;

  constructor(
      id: number,
      title: string,
      path: string,
  ){
      this.id = id;
      this.title = title;
      this.path = path;
  }
}

const Options = [
  new HeaderOptions(
      1,
      "QR Code Generator",
      "/#",
  ),
  new HeaderOptions(
      2,
      "FAQ",
      "/#",
  ),
  new HeaderOptions(
      3,
      "Prices",
      "/#",
  ),
  new HeaderOptions(
      4,
      "About us",
      "/#",
  ),
  new HeaderOptions(
      5,
      "Contact us",
      "/#",
  ),
]

interface HeaderProps{
  className?: string;
  languageDropDown?: boolean;
  showOptions?: boolean;
}

export default function Header({ className = "", languageDropDown = false, showOptions = false}: HeaderProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const languages = [
    { value: "en", label: "English" },
     { value: "da", label: "Dansk" }, 
     { value: "et", label: "Eesti" }, 
     { value: "fil", label: "Filipino" }, 
     { value: "it", label: "Italiano" }, 
     { value: "es", label: "Español" }, 
     { value: "ar", label: "Arabic" },
  ];

  return (
    <header className={cn("w-full desktop:bg-[#F5F6FA] bg-white relative z-50 var(--font-poppins)", className)}>
      <Container>
        <div className="flex items-center desktop:h-[72px] h-16">
          {/* Logo */}
          <Link href="/">
          <img src="/images/Logo.svg" alt="Logo" className="w-38" />
          </Link>

          <div className="flex items-center gap-4 ml-auto">
            {/* Desktop Right side actions */}
          <div className="hidden desktop:flex items-center gap-4">
            {/* header option */}
            <div className={`${showOptions ? "block" : "hidden"}`}>
            {Options.map((option) => {
                return (
                    <Link
                    key={option.id}
                    href={option.path}
                    className="px-4 py-2 text-sm leading-[22px] font-medium text-[var(--Dark-gray)]  hover:text-[var(--Blue)]"
                    >
                    {option.title}
                    </Link>
                );
            })}
            </div>
            <div className="h-[18px] w-[1px] bg-[var(--Boarder-Grey)]">

            </div>
             <LanguageSelector/>
            {/* Log in Button */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm leading-[22px] font-medium text-[var(--Dark-gray)]  hover:bg-[var(--Blue)] rounded-lg border hover:border-[var(--Blue)]  hover:text-white transition-all duration-300 ease-linear"
            >
              Log in
            </Link>
          </div>

          {/* Currency Dropdown */}
          {languageDropDown && (
          <div className="block sm:hidden">
            <CurrenctSelector/>
          </div>
          )}

          {/* Mobile Hamburger Menu */}
          <div className="flex desktop:hidden">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-[var(--Black)] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon className="size-6" />
            </button>
          </div>
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
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#212023] opacity-80 transition-opacity duration-300 ease-linear"
          onClick={() => setIsDrawerOpen(false)}
        />

      {/* Drawer Content - Anchored to Left */}
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-[320px] bg-white flex flex-col justify-between p-5",
          "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col gap-9">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/Logo.svg" alt="SmartQR" className="w-auto h-8" />
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="stroke-[#202023]">
              <X className="size-6" />
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
                className="py-5 text-[16px] leading-[24px] font-medium text-[var(--Black)] border-b border-[#cdd0db80)]"
              >
                {item}
              </Link>
            ))}
            <LanguageSelector layout="gapBetween" mobileDrawer={true}/>
            </nav>
        </div>

        {/* Footer Login Button */}
        <div>
          <Link
            href="/login"
            onClick={() => setIsDrawerOpen(false)}
            className="w-full py-2 px-6  flex items-center justify-center text-[14px] font-medium leading-[22px] text-[var(--Dark-gray)] bg-white border border-[var(--Boarder-Grey)] rounded-[10px] transition-all"
          >
            Log in
          </Link>
        </div>
      </div>
      </div>
    </header>
  );
}
