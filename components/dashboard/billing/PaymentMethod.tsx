import Circle from "@/components/icons/circle";
import Visa from "@/components/icons/visa";
import { getStatusStyles } from "@/lib/utils";

export default function PaymentMethod() {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <p className="text-[var(--Black)] font-bold text-[18px] leading-[26px]">
        Subscription and payment method
      </p>

      <div className="flex items-start gap-6 self-stretch">
        {/* Current Plan */}
        <div className="flex flex-col items-start gap-6 p-6 flex-1 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
          <div className="flex flex-col items-start gap-1 flex-1 self-stretch">
            <div className="flex items-center gap-6 self-stretch">
              <p className="text-[var(--Black)] font-semibold text-[16px] leading-[24px] flex-1">
                Yearly Plan
              </p>
              <div className="flex items-center gap-2">
                <Circle className={getStatusStyles("Active")} />
                <span
                  className={`text-[14px] leading-[22px] font-medium ${getStatusStyles("Active")}`}
                >
                  Active
                </span>
              </div>
            </div>

            <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
              Valid until Sep 18, 2024{" "}
              <span className="text-[var(--Grey)]">(179 days left)</span>
            </p>
          </div>

          <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 bg-white border border-[var(--Blue)] rounded-[var(--Corner-Radius-10)] text-[var(--Blue)] text-[14px] leading-[22px] hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear">
            Cancel subscription
          </button>
        </div>

        {/* Payment Method */}
        <div className="flex flex-col items-start gap-6 p-6 flex-1 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
          <div className="flex flex-col items-start gap-1 flex-1 self-stretch">
            <p className="text-[var(--Black)] font-semibold text-[16px] leading-[24px] flex-1">
              Payment method
            </p>

            <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
              Change how you pay for your plan
            </p>
          </div>

          <div className="flex items-center gap-6 p-4 self-stretch rounded-[var(--Corner-Radius-8)] bg-[var(--Generator-Background)]">
            <div className="flex items-center gap-6 flex-1">
              <Visa />
              <div className="flex items-center gap-6 flex-1">
                <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                  **** **** **** 8902
                </p>
                <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                  Expiry 10/24
                </p>
              </div>
            </div>

            <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 border border-[var(--Boarder-Grey)] bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] text-[var(--Dark-gray)] text-[14px] leading-[22px]">
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
