import PaymentMethod from "@/components/dashboard/billing/PaymentMethod";

export default function Billing() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          Billing
        </h2>
      </div>

      {/* Notification Banner */}
      <div className="flex flex-col items-start desktopDashboard:gap-0 gap-2 self-stretch desktopDashboard:my-[20px] my-3"></div>

      <div className="flex flex-col items-start desktopDashboard:gap-6 gap-4 self-stretch w-full">
        {/* Payment Method */}
        <PaymentMethod />
      </div>
    </>
  );
}
