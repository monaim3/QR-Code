"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import DashboardMenuIcon from "@/components/icons/menu";
import Close from "@/components/icons/close";
import ChartBarSquare from "@/components/icons/chart-bar-square";
import QrCode5 from "@/components/icons/qr-code-5";
import User from "@/components/icons/user";
import CreditCards from "@/components/icons/credit-cards";
import Support from "@/components/icons/support";
import MenuItem from "./MenuItem";
import LogOut from "@/components/icons/log-out";

export default function DashboardHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const handleLogout = () => {
    setIsDrawerOpen(false);
    router.push("/");
  };

  const navItems = [
    { icon: ChartBarSquare, label: "Analytics", href: "/analytics" },
    { icon: QrCode5, label: "QR Codes", href: "/qr-codes" },
    { icon: User, label: "Account", href: "/account" },
    { icon: CreditCards, label: "Billing", href: "/billing" },
    { icon: Support, label: "Help", href: "/help" },
  ];

  return (
    <>
      <header className="w-full desktopDashboard:hidden py-2 px-5 tablet:px-8 !h-[64px] flex items-center justify-between border-b border-[rgba(205,208,219,0.5)] bg-white backdrop-blur-[20px] sticky top-0 z-50">
        <div>
          <Logo />
        </div>
        <button onClick={() => setIsDrawerOpen(true)}>
          <DashboardMenuIcon className="text-[#3F3E3E]" />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 desktopDashboard:hidden transition-all duration-300 ease-in-out z-50 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--pop-up-color)] transition-opacity duration-300 z-50"
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer Content */}
        <nav
          className={`absolute z-50 top-0 left-0 h-full w-[320px] bg-white flex flex-col items-start transition-transform duration-500 ease-in-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-16 px-5 py-2 justify-between items-center shrink-0 self-stretch">
            <Logo />

            <button
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close menu"
            >
              <Close className="w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col items-start p-[20px] pt-0 flex-[1_0_0] self-stretch">
            {navItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                label={item.label}
                href={item.href}
                onClick={() => setIsDrawerOpen(false)}
                collapsed={false}
                isLastItems={index === navItems.length - 1}
              />
            ))}
          </ul>

          <div className="flex flex-col justify-end items-start px-5 self-stretch">
            <div className="py-5 border-t border-[var(--boarder-grey-50)] w-full">
              <button onClick={handleLogout} className="flex items-center gap-4">
                <span className="flex-shrink-0">
                  <LogOut />
                </span>

                <span
                  className={`font-rubik text-base font-normal leading-6 whitespace-nowrap duration-200`}
                >
                  Log out
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
