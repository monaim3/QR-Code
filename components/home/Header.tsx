"use client";

import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../icons/menu-icon";
import { MobileDrawer } from "./MobileDrawer";

export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "FAQ" },
  ];

  const authLinks = [{ href: "/login", label: "Log in" }];

  return (
    <header
      className="w-full bg-[#F5F6FA]"
      style={{ fontFamily: "var(--font-poppins)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img src="/images/Logo.svg" alt="Logo" className="w-32 h-8" />

          {/* Desktop Navigation */}
          <div className="hidden desktop:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Select language">
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

            {/* Log in Button */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg border border-gray-300 transition-colors font-poppins">
              Log in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="desktop:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </header>
  );
}
