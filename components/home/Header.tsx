"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "../common/parent-container";
import MenuIcon from "../icons/menu-icon";
import LanguageSelector from "../common/language_dropdown";
import CurrenctSelector from "@/components/common/currency_dropdown";
import Logo from "../dashboard/layout/Logo";
import { useT } from "@/utils/t";

class HeaderOptions {
  id: number;
  title: string;
  path: string;

  constructor(id: number, title: string, path: string) {
    this.id = id;
    this.title = title;
    this.path = path;
  }
}

const Options = [
  new HeaderOptions(1, "QR Code Generator", "/generator"),
  new HeaderOptions(2, "FAQ", "/faq"),
  new HeaderOptions(3, "Prices", "/prices"),
  new HeaderOptions(4, "About us", "/about-us"),
  new HeaderOptions(5, "Contact us", "/contact-us"),
];

interface HeaderProps {
  className?: string;
  languageDropDown?: boolean;
  showOptions?: boolean;
  hideDivider?: boolean;
}

export default function Header({
  className = "",
  languageDropDown = false,
  showOptions = false,
  hideDivider = false,
}: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const t = useT();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isDrawerOpen]);

  return (
    <header
      className={cn(
        "w-full desktop:bg-[#F5F6FA] bg-white relative z-50 var(--font-poppins)",
        className,
      )}
    >
      <Container>
        <div className="flex items-center desktop:h-[72px] h-16">
          {/* Logo */}
          <Logo />

          <div className="flex items-center gap-4 ml-auto">
            {/* Desktop Right side actions */}
            <div className="hidden mobileLg:flex items-center gap-4">
              {/* header option */}
              <div
                className={`${showOptions ? "block" : "hidden"} overflow-x-auto whitespace-nowrap scrollbar-none`}
              >
                {Options.map((option) => {
                  return (
                    <Link
                      key={option.id}
                      href={option.path}
                      className="px-4 py-2 text-[14px] leading-[22px] font-regular text-[var(--Dark-gray)]  hover:text-[var(--Blue)] inline-block"
                    >
                      {option.title}
                    </Link>
                  );
                })}
              </div>
              {!hideDivider && (
                <div
                  className={`h-[18px] w-[1px] bg-[var(--Boarder-Grey)]`}
                ></div>
              )}
              <LanguageSelector />
              {/* Log in Button */}
              <Link
                href="/login"
                className="px-4 py-2 text-sm leading-[22px] font-medium text-[var(--Dark-gray)]  hover:bg-[var(--Blue)] rounded-lg border hover:border-[var(--Blue)]  hover:text-white transition-all duration-300 ease-linear flex-shrink-0"
              >
                {t("public__header__login_button")}
              </Link>
            </div>

            {/* Currency Dropdown */}
            {languageDropDown && (
              <div className="block sm:hidden">
                <CurrenctSelector />
              </div>
            )}

            {/* Mobile Hamburger Menu */}
            <div className="flex mobileLg:hidden">
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
          "fixed inset-0 z-[100] mobileLg:hidden transition-all duration-300 ease-in-out",
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
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
            "absolute top-0 left-0 h-full max-h-dvh w-[320px] bg-white flex flex-col min-h-0 pt-5 pb-5",
            "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform",
            isDrawerOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {/* Full-width scroll column so scrollbar sits flush to drawer right (right: 0) */}
          <div className="flex flex-col flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain mobile-drawer-scrollbar">
            <div className="flex flex-col gap-9 px-5">
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Logo />
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="stroke-[#202023]"
                >
                  <X className="size-6" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col pb-2">
                {[
                  {
                    title: "Contact us",
                    path: "/contact-us",
                  },
                  {
                    title: "FAQ",
                    path: "/faq",
                  },
                  {
                    title: "Prices",
                    path: "/prices",
                  },
                  {
                    title: "Terms & conditions",
                    path: "/terms-of-use",
                  },
                  {
                    title: "Privacy policy",
                    path: "/privacy-policy",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    onClick={() => setIsDrawerOpen(false)}
                    className="py-5 text-[16px] leading-[24px] font-medium text-[var(--Black)] border-b border-[#cdd0db80)]"
                  >
                    {item.title}
                  </Link>
                ))}
                <LanguageSelector layout="gapBetween" mobileDrawer={true} />
              </nav>
            </div>
          </div>

          {/* Footer Login Button */}
          <div className="shrink-0 pt-4 border-t border-[var(--Boarder-Grey)]/50 bg-white px-5">
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
