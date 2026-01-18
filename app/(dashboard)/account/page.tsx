"use client";

import BillingInfo from "@/components/dashboard/account/BillingInfo";
import TabChip from "@/components/dashboard/account/TabChip";

export default function Account() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          Account
        </h2>
      </div>

      {/* Notification Banner */}
      <div className="my-[20px]"></div>

      <div className="flex flex-col items-start gap-6 self-stretch">
        <div className="flex items-center gap-2 self-stretch">
          <TabChip label="Billing Information" isActive={true} />
          <TabChip label="Password" isActive={false} />
          <TabChip label="Two-Factor Authentication (2FA)" isActive={false} />
          <TabChip label="API Keys" isActive={false} />
          <TabChip label="Settings" isActive={false} />
        </div>

        <BillingInfo />
      </div>
    </>
  );
}
