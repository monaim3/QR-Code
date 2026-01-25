"use client";

import { useState } from "react";
import BillingInfo from "@/components/dashboard/account/BillingInfo";
import Password from "@/components/dashboard/account/Password";
import TabChip from "@/components/dashboard/account/TabChip";
import TwoFactor from "@/components/dashboard/account/TwoFactor";
import APIKeys from "@/components/dashboard/account/APIKeys";
import Settings from "@/components/dashboard/account/Settings";
import TrialExpiredBanner from "@/components/dashboard/account/TrialExpiredBanner";

export default function Account() {
  const [activeTab, setActiveTab] = useState("billing");

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          Account
        </h2>
      </div>

      {/* Notification Banner */}
      <div className="my-[20px] w-full">
        <TrialExpiredBanner />
      </div>

      <div className="flex flex-col items-start desktopDashboard:gap-6 gap-4 self-stretch">
        <div className="flex items-center gap-2 self-stretch overflow-x-auto">
          <TabChip
            label="Billing Information"
            isActive={activeTab === "billing"}
            onClick={() => setActiveTab("billing")}
          />
          <TabChip
            label="Password"
            isActive={activeTab === "password"}
            onClick={() => setActiveTab("password")}
          />
          <TabChip
            label="Two-Factor Authentication (2FA)"
            isActive={activeTab === "2fa"}
            onClick={() => setActiveTab("2fa")}
          />
          <TabChip
            label="API Keys"
            isActive={activeTab === "api-keys"}
            onClick={() => setActiveTab("api-keys")}
          />
          <TabChip
            label="Settings"
            isActive={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
          />
        </div>

        {activeTab === "billing" && <BillingInfo />}
        {activeTab === "password" && <Password />}
        {activeTab === "2fa" && <TwoFactor />}
        {activeTab === "api-keys" && <APIKeys />}
        {activeTab === "settings" && <Settings />}
      </div>
    </>
  );
}
