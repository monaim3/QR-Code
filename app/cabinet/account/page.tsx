"use client";

import { useState } from "react";
import BillingInfo from "@/components/dashboard/account/BillingInfo";
import Password from "@/components/dashboard/account/Password";
import TabChip from "@/components/dashboard/account/TabChip";
import TwoFactor from "@/components/dashboard/account/TwoFactor";
import APIKeys from "@/components/dashboard/account/APIKeys";
import Settings from "@/components/dashboard/account/Settings";
import TrialExpiredBanner from "@/components/dashboard/account/TrialExpiredBanner";
import { useT } from "@/utils/t";

export default function Account() {
  const t = useT();
  const [activeTab, setActiveTab] = useState("billing");

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          {t("public__dashboard__sidebar__link_groups__account")}
        </h2>
      </div>

      {/* Notification Banner */}
      <div className="my-[20px] w-full">
        <TrialExpiredBanner />
      </div>

      <div className="flex flex-col items-start desktopDashboard:gap-6 gap-4 self-stretch">
        <div className="flex items-center gap-2 self-stretch overflow-x-auto">
          <TabChip
            label={t("public__dashboard__account__tabs__billing_info")}
            isActive={activeTab === "billing"}
            onClick={() => setActiveTab("billing")}
          />
          <TabChip
            label={t("public__dashboard__account__tabs__password")}
            isActive={activeTab === "password"}
            onClick={() => setActiveTab("password")}
          />
          <TabChip
            label={t("public__dashboard__account__tabs__two_factor_auth")}
            isActive={activeTab === "2fa"}
            onClick={() => setActiveTab("2fa")}
          />
          <TabChip
            label={t("public__dashboard__account__tabs__api_keys")}
            isActive={activeTab === "api-keys"}
            onClick={() => setActiveTab("api-keys")}
          />
          <TabChip
            label={t("public__dashboard__account__tabs__settings")}
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
