import Circle from "@/components/icons/circle";
import Download from "@/components/icons/download";
import { invoices } from "@/lib/data";
import { getStatusStyles } from "@/lib/utils";

export default function MobileTransactionHistory() {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch desktopDashboard:hidden">
      {invoices?.map((invoice, index) => (
        <div
          key={index}
          className="flex flex-col items-end gap-4 p-4 self-stretch rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] bg-white"
        >
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex items-start gap-4 self-stretch w-full">
              <p className="text-[var(--Black)] text-[14px] leading-[22px] flex-1">
                {invoice.id}
              </p>

              <p className="text-[var(--Black)] text-[14px] leading-[22px]">
                {invoice.transactionDate}
              </p>
            </div>

            <div className="flex items-start gap-4 self-stretch w-full">
              <p className="text-[var(--Black)] text-[14px] leading-[22px] flex-1">
                {invoice.amount}
              </p>

              <div className="flex items-center gap-2">
                <Circle className={getStatusStyles(invoice.status)} />
                <span
                  className={`text-[14px] leading-[22px] font-medium ${getStatusStyles(invoice.status)}`}
                >
                  {invoice.status}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 self-stretch w-full">
              <p className="text-[var(--Black)] text-[14px] leading-[22px] flex-1">
                {invoice.plan}
              </p>

              <p className="text-[var(--Black)] text-[14px] leading-[22px]">
                {invoice.paymentMethod}
              </p>
            </div>
          </div>
          {invoice.status === "Paid" && (
            <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-white border border-[var(--Boarder-Grey)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] text-[var(--Dark-gray)] text-[14px] leading-[22px] w-full">
              <Download className="text-[var(--Dark-gray)]" />
              Download invoice
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
