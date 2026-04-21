"use client";

import ChevronLeftSmall from "@/components/icons/chevron-left-small";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import ChartBarSquare from "@/components/icons/chart-bar-square";
import QrCode5 from "@/components/icons/qr-code-5";
import User from "@/components/icons/user";
import CreditCards from "@/components/icons/credit-cards";
import MenuItem from "./MenuItem";
import Support from "@/components/icons/support";
import LogOut from "@/components/icons/log-out";
import DashboardMenuIcon from "@/components/icons/menu";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCollapsed } from "@/store/slices/sidebarSlice";

export default function Menu() {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.sidebar.collapsed);

  const toggleCollapse = () => {
    dispatch(toggleCollapsed());
  };

  const navItems = [
    { icon: ChartBarSquare, label: "Analytics", href: "/cabinet/analytics" },
    { icon: QrCode5, label: "QR Codes", href: "/cabinet/qr-codes" },
    { icon: User, label: "Account", href: "/cabinet/account" },
    { icon: CreditCards, label: "Billing", href: "/cabinet/billing" },
  ];

  const utilityLinks = [
    {
      icon: Support,
      label: "Help",
      href: "/cabinet/contact-us",
      onClick: () => {},
    },
    { icon: LogOut, label: "Log out", href: "/", onClick: () => {} },
  ];

  return (
    <nav
      className={`bg-white h-screen py-6 px-4 border-r border-[var(--boarder-grey-50)] ${
        collapsed ? "w-[72px]" : "w-[214px]"
      } transition-[width] duration-300`}
    >
      <div className={`flex flex-col h-full gap-10`}>
        {/* Logo */}
        {collapsed ? (
          <div onClick={toggleCollapse} className="cursor-pointer py-1 mx-auto">
            <DashboardMenuIcon className="text-[#3F3E3E]" />
          </div>
        ) : (
          <div className="flex items-center gap-2 h-8 overflow-hidden transition-all duration-300">
            <Logo />

            <Button
              size={"icon"}
              onClick={toggleCollapse}
              className="p-1 rounded-[8px] bg-[var(--Light-blue)] w-6 h-6"
            >
              <ChevronLeftSmall />
            </Button>
          </div>
        )}

        {/* Navigation Items */}
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              collapsed={collapsed}
            />
          ))}
        </ul>

        {/* Support Links */}
        <ul className="mt-auto flex flex-col gap-2">
          {utilityLinks.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              onClick={item.onClick}
              collapsed={collapsed}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
