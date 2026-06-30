"use client";
import NotificationBanner from "@/components/dashboard/billing/NotificationBanner";
import PaymentMethod from "@/components/dashboard/billing/PaymentMethod";
import TransactionHistory from "@/components/dashboard/billing/TransactionHistory";
import Pagination from "@/components/dashboard/qr-codes/table/Pagination";
import { useT } from "@/utils/t";

export default function Billing() {
  const t = useT();
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          {t("public__dashboard__sidebar__link_groups__billing")}
        </h2>
      </div>

      {/* Notification Banner */}
      <div className="flex flex-col items-start desktopDashboard:gap-0 gap-2 self-stretch desktopDashboard:my-[20px] my-3">
        <NotificationBanner />
      </div>

      <div className="flex flex-col items-start desktopDashboard:gap-6 gap-4 self-stretch w-full">
        {/* Payment Method */}
        <PaymentMethod />

        {/* Transaction History */}
        <TransactionHistory />

        {/* Pagination */}
        <Pagination />
      </div>
    </>
  );
}
